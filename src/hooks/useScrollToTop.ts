import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = (behavior: ScrollBehavior = 'auto') => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;
