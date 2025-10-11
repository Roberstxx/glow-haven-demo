import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

const useScrollToTop = (behavior: ScrollBehavior = 'instant') => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior, block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;
