import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const isBrowser = typeof window !== 'undefined';

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

type ScrollBehaviorSetting = ScrollBehavior | 'instant';

const resolveScrollBehavior = (behavior: ScrollBehaviorSetting): ScrollBehavior =>
  behavior === 'smooth' ? 'smooth' : 'auto';

const setScrollBehavior = (element: HTMLElement | null, value: ScrollBehavior) => {
  if (!element) {
    return () => {};
  }

  const previousValue = element.style.getPropertyValue('scroll-behavior');
  const previousPriority = element.style.getPropertyPriority('scroll-behavior');

  element.style.setProperty('scroll-behavior', value, 'important');

  return () => {
    if (previousValue) {
      element.style.setProperty('scroll-behavior', previousValue, previousPriority);
    } else {
      element.style.removeProperty('scroll-behavior');
    }
  };
};

const runWithInstantScroll = (
  behavior: ScrollBehaviorSetting,
  callback: (resolved: ScrollBehavior) => void
) => {
  const resolvedBehavior = resolveScrollBehavior(behavior);

  if (!isBrowser || behavior !== 'instant') {
    callback(resolvedBehavior);
    return;
  }

  const { documentElement } = document;
  const body = document.body;

  if (!documentElement || !body) {
    callback(resolvedBehavior);
    return;
  }

  const restoreDocumentBehavior = setScrollBehavior(documentElement, 'auto');
  const restoreBodyBehavior = setScrollBehavior(body, 'auto');

  try {
    callback(resolvedBehavior);
  } finally {
    restoreDocumentBehavior();
    restoreBodyBehavior();
  }
};

const useScrollToTop = (behavior: ScrollBehaviorSetting = 'auto') => {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
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

        runWithInstantScroll(behavior, (resolvedBehavior) =>
          target.scrollIntoView({ behavior: resolvedBehavior, block: 'start' })
        );
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

    runWithInstantScroll(behavior, (resolvedBehavior) =>
      window.scrollTo({ top: 0, left: 0, behavior: resolvedBehavior })
    );

    return () => {
      if (rafId !== undefined) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;
