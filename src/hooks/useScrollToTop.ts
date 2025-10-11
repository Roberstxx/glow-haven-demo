import * as React from 'react';
import { useLocation } from 'react-router-dom';

type ScrollBehaviorSetting = 'instant' | ScrollBehavior;

const isBrowser = typeof window !== 'undefined';
const reactWithInsertion = React as typeof React & {
  useInsertionEffect?: typeof React.useLayoutEffect;
};
const useClientLayoutEffect: typeof React.useLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;
const usePrePaint: typeof React.useLayoutEffect =
  (isBrowser ? reactWithInsertion.useInsertionEffect : undefined) ??
  useClientLayoutEffect;

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
  // @ts-ignore: CSS.escape may not be in TS DOM lib
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

const resolveScrollBehavior = (behavior: ScrollBehaviorSetting): ScrollBehavior =>
  behavior === 'smooth' ? 'smooth' : 'auto';

type RestoreScrollBehavior = () => void;

const overrideScrollBehavior = (element: HTMLElement): RestoreScrollBehavior => {
  const style = element.style;
  const previousValue = style.getPropertyValue('scroll-behavior');
  const previousPriority = style.getPropertyPriority('scroll-behavior');

  style.setProperty('scroll-behavior', 'auto', 'important');

  return () => {
    if (previousValue) {
      style.setProperty('scroll-behavior', previousValue, previousPriority);
    } else {
      style.removeProperty('scroll-behavior');
    }
  };
};

const withInstantScroll = (
  behavior: ScrollBehaviorSetting,
  callback: (resolved: ScrollBehavior) => void
) => {
  const resolved = resolveScrollBehavior(behavior);

  if (!isBrowser || behavior !== 'instant') {
    callback(resolved);
    return;
  }

  const { documentElement } = document;
  const body = document.body;

  if (!documentElement || !body) {
    callback(resolved);
    return;
  }

  const restoreDocument = overrideScrollBehavior(documentElement);
  const restoreBody = overrideScrollBehavior(body);

  try {
    callback(resolved);
  } finally {
    restoreDocument();
    restoreBody();
  }
};

const shouldOffsetHeader = (position: string) =>
  position === 'fixed' || position === 'sticky';

export default function useScrollToTop(
  behavior: ScrollBehaviorSetting = 'instant',
  headerSelector: string | null = '.header'
) {
  const { pathname, search, hash } = useLocation();

  usePrePaint(() => {
    if (!isBrowser) return;

    const activeElement = document.activeElement as HTMLElement | null;
    if (activeElement && typeof activeElement.blur === 'function') {
      activeElement.blur();
    }

    const headerQuery = headerSelector ?? null;
    const header = headerQuery
      ? document.querySelector<HTMLElement>(headerQuery)
      : null;

    const headerStyles = header ? getComputedStyle(header) : null;
    const headerHeight =
      header && headerStyles && shouldOffsetHeader(headerStyles.position)
        ? header.offsetHeight
        : 0;

    let rafId: number | null = null;

    const scrollToPosition = (y: number) =>
      withInstantScroll(behavior, (resolved) => {
        window.scrollTo({
          top: Math.max(0, y),
          left: 0,
          behavior: resolved,
        });
      });

    const jumpToHash = () => {
      if (!hash) return false;

      const target = findHashTarget(hash);
      if (!target) return false;

      const targetOffset =
        target.getBoundingClientRect().top + window.scrollY - headerHeight;
      scrollToPosition(targetOffset);
      return true;
    };

    if (hash) {
      let attempts = 6;

      const attemptScroll = () => {
        if (jumpToHash()) {
          return;
        }

        if (attempts-- > 0) {
          rafId = window.requestAnimationFrame(attemptScroll);
        }
      };

      attemptScroll();
    } else {
      scrollToPosition(0);
    }

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname, search, hash, behavior, headerSelector]);
}
