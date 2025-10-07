import { categories, allTags, durationRanges, priceRanges } from '../data/services';
import './FiltersBar.css';

const FiltersBar = ({ filters, updateFilter, toggleTag, clearFilters, hasActiveFilters }) => {
  return (
    <aside className="filters-bar" role="search" aria-label="Filtros de servicios">
      <div className="filters-header">
        <h3 className="filters-title">Filtrar servicios</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="btn-clear-filters"
            aria-label="Limpiar todos los filtros"
          >
            Limpiar filtros
          </button>
        )}
      </div>
      
      {/* Search */}
      <div className="filter-group">
        <label htmlFor="search-input" className="filter-label">
          Buscar
        </label>
        <input
          id="search-input"
          type="search"
          className="input"
          placeholder="Buscar servicios..."
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
          aria-label="Buscar servicios por nombre o descripción"
        />
      </div>
      
      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category-select" className="filter-label">
          Categoría
        </label>
        <select
          id="category-select"
          className="select"
          value={filters.category}
          onChange={(e) => updateFilter('category', e.target.value)}
          aria-label="Filtrar por categoría"
        >
          <option value="">Todas las categorías</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Tags Filter */}
      <div className="filter-group">
        <span className="filter-label">Etiquetas</span>
        <div className="filter-tags" role="group" aria-label="Filtrar por etiquetas">
          {allTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`tag-button ${filters.tags.includes(tag.id) ? 'active' : ''}`}
              aria-pressed={filters.tags.includes(tag.id)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Duration Filter */}
      <div className="filter-group">
        <label htmlFor="duration-select" className="filter-label">
          Duración
        </label>
        <select
          id="duration-select"
          className="select"
          value={filters.duration}
          onChange={(e) => updateFilter('duration', e.target.value)}
          aria-label="Filtrar por duración"
        >
          <option value="">Cualquier duración</option>
          {durationRanges.map(range => (
            <option key={range.id} value={range.id}>
              {range.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Price Filter */}
      <div className="filter-group">
        <label htmlFor="price-select" className="filter-label">
          Rango de precio
        </label>
        <select
          id="price-select"
          className="select"
          value={filters.priceRange}
          onChange={(e) => updateFilter('priceRange', e.target.value)}
          aria-label="Filtrar por precio"
        >
          <option value="">Cualquier precio</option>
          {priceRanges.map(range => (
            <option key={range.id} value={range.id}>
              {range.name}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
};

export default FiltersBar;
