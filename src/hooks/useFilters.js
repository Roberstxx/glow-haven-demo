import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

/**
 * Custom hook for managing service filters with URL persistence
 */
export const useFilters = (services) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize filters from URL params
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    tags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
    duration: searchParams.get('duration') || '',
    priceRange: searchParams.get('price') || '',
    search: searchParams.get('q') || ''
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.category) params.set('category', filters.category);
    if (filters.tags.length > 0) params.set('tags', filters.tags.join(','));
    if (filters.duration) params.set('duration', filters.duration);
    if (filters.priceRange) params.set('price', filters.priceRange);
    if (filters.search) params.set('q', filters.search);
    
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);
  
  // Filter services based on current filters
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      // Category filter
      if (filters.category && service.category !== filters.category) {
        return false;
      }
      
      // Tags filter (service must have at least one selected tag)
      if (filters.tags.length > 0) {
        const hasTag = filters.tags.some(tag => service.tags.includes(tag));
        if (!hasTag) return false;
      }
      
      // Duration filter
      if (filters.duration) {
        const ranges = {
          'rapido': { min: 0, max: 45 },
          'medio': { min: 45, max: 90 },
          'largo': { min: 90, max: 999 }
        };
        const range = ranges[filters.duration];
        if (range && (service.duration < range.min || service.duration > range.max)) {
          return false;
        }
      }
      
      // Price range filter
      if (filters.priceRange) {
        const ranges = {
          'bajo': { min: 0, max: 300 },
          'medio': { min: 300, max: 600 },
          'alto': { min: 600, max: 1000 },
          'premium': { min: 1000, max: 999999 }
        };
        const range = ranges[filters.priceRange];
        if (range && service.priceFrom > range.max) {
          return false;
        }
      }
      
      // Text search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesName = service.name.toLowerCase().includes(searchLower);
        const matchesDesc = service.shortDescription.toLowerCase().includes(searchLower);
        const matchesTags = service.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesName && !matchesDesc && !matchesTags) {
          return false;
        }
      }
      
      return true;
    });
  }, [services, filters]);
  
  // Update individual filter
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  // Toggle tag in tags array
  const toggleTag = (tag) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: '',
      tags: [],
      duration: '',
      priceRange: '',
      search: ''
    });
  };
  
  // Check if any filters are active
  const hasActiveFilters = 
    filters.category || 
    filters.tags.length > 0 || 
    filters.duration || 
    filters.priceRange || 
    filters.search;
  
  return {
    filters,
    filteredServices,
    updateFilter,
    toggleTag,
    clearFilters,
    hasActiveFilters
  };
};
