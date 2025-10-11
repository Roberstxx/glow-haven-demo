import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

const useScrollToTop = (behavior: ScrollBehavior = 'auto') => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;
