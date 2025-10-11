import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isBrowser = typeof window !== 'undefined';
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

const decodeHash = (hash: string) => {
  try {
    return decodeURIComponent(hash.slice(1));
  } catch {
    return hash.slice(1);
  }
};

const tryQuerySelector = (hash: string) => {
  if (!hash) return null;

  try {
    return document.querySelector(hash);
  } catch {
    return null;
  }
};

const findHashTarget = (hash: string) => {
  if (!hash) return null;

  const decoded = decodeHash(hash);
  const escaped =
    typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
      ? CSS.escape(decoded)
      : decoded;

  return (
    document.getElementById(decoded) ??
    document.getElementById(hash.slice(1)) ??
    tryQuerySelector(hash) ??
    tryQuerySelector(`#${escaped}`)
  );
};

const useScrollToTop = (behavior: ScrollBehavior = 'instant') => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    let rafId: number | undefined;

    if (hash) {
      const scrollToHash = () => {
        const target = findHashTarget(hash);

        if (!target) {
          return false;
        }

        target.scrollIntoView({ behavior, block: 'start' });
        return true;
      };

      if (!scrollToHash()) {
        rafId = window.requestAnimationFrame(scrollToHash);
      }

      return () => {
        if (rafId !== undefined) {
          window.cancelAnimationFrame(rafId);
        }
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior });

    return () => {
      if (rafId !== undefined) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;
