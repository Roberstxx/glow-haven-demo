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
  const escaped = typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
    ? CSS.escape(decoded)
    : decoded;

  return (
    document.getElementById(decoded) ??
    document.getElementById(hash.slice(1)) ??
    tryQuerySelector(hash) ??
    tryQuerySelector(`#${escaped}`)
  );
};

 codex/corregir-problemas-de-pull-request-tz1l1g
const resolveScrollBehavior = (behavior: ScrollBehaviorSetting): ScrollBehavior =>
  behavior === 'smooth' ? 'smooth' : 'auto';

type RestoreScrollBehavior = () => void;


type ScrollBehaviorSetting = ScrollBehavior | 'instant';

const resolveScrollBehavior = (behavior: ScrollBehaviorSetting): ScrollBehavior =>
  behavior === 'smooth' ? 'smooth' : 'auto';

/** Forza scroll-behavior: auto !important temporalmente y restaura con prioridad. */
type RestoreScrollBehavior = () => void;
 main
const overrideScrollBehavior = (element: HTMLElement): RestoreScrollBehavior => {
  const style = element.style;
  const previousValue = style.getPropertyValue('scroll-behavior');
  const previousPriority = style.getPropertyPriority('scroll-behavior');
 codex/corregir-problemas-de-pull-request-tz1l1g

  style.setProperty('scroll-behavior', 'auto', 'important');


  style.setProperty('scroll-behavior', 'auto', 'important');
 main
  return () => {
    if (previousValue) {
      style.setProperty('scroll-behavior', previousValue, previousPriority);
    } else {
      style.removeProperty('scroll-behavior');
    }
  };
};

codex/corregir-problemas-de-pull-request-tz1l1g
const withInstantScroll = (
  behavior: ScrollBehaviorSetting,
  callback: (resolved: ScrollBehavior) => void
) => {
  const resolved = resolveScrollBehavior(behavior);

  if (!isBrowser || behavior !== 'instant') {
    callback(resolved);

const runWithInstantScroll = (
  behavior: ScrollBehaviorSetting,
  callback: (resolved: ScrollBehavior) => void
) => {
  const resolvedBehavior = resolveScrollBehavior(behavior);

  if (!isBrowser || behavior !== 'instant') {
    callback(resolvedBehavior);
main
    return;
  }

  const { documentElement } = document;
  const body = document.body;

  if (!documentElement || !body) {
 codex/corregir-problemas-de-pull-request-tz1l1g
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

    callback(resolvedBehavior);
    return;
  }

  const restoreDocumentBehavior = overrideScrollBehavior(documentElement);
  const restoreBodyBehavior = overrideScrollBehavior(body);

  try {
    callback(resolvedBehavior);
  } finally {
    restoreDocumentBehavior();
    restoreBodyBehavior();
  }
};

/** 
 * Hook de scroll: 
 * - por defecto 'instant' (sin animación visible),
 * - respeta #hash si existe,
 * - corre en useLayoutEffect (o useEffect en SSR).
 */
const useScrollToTop = (behavior: ScrollBehaviorSetting = 'instant') => {
  const { pathname, search, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) return;
 main

    const headerQuery = headerSelector ?? null;
    const header = headerQuery
      ? document.querySelector<HTMLElement>(headerQuery)
      : null;

    const headerStyles = header ? getComputedStyle(header) : null;
    const headerHeight =
      header && headerStyles && shouldOffsetHeader(headerStyles.position)
        ? header.offsetHeight
        : 0;

    let rafId: number | undefined;
codex/corregir-problemas-de-pull-request-tz1l1g

    const scrollToPosition = (y: number) =>
      withInstantScroll(behavior, (resolved) => {
        window.scrollTo({
          top: Math.max(0, y),
          left: 0,
          behavior: resolved,
        });
      });

    const jumpToHash = () => {
      if (!hash) return true;

      const target = findHashTarget(hash);
      if (!target) return false;

      const targetOffset = target.getBoundingClientRect().top + window.scrollY - headerHeight;
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

    if (hash) {
      const scrollToHash = () => {
        const target = findHashTarget(hash);
        if (!target) return false;

        runWithInstantScroll(behavior, (resolvedBehavior) =>
          target.scrollIntoView({ behavior: resolvedBehavior, block: 'start' })
        );
        return true;
      };

      if (!scrollToHash()) rafId = window.requestAnimationFrame(scrollToHash);
 main

      return () => {
        if (rafId !== undefined) window.cancelAnimationFrame(rafId);
      };
    }

codex/corregir-problemas-de-pull-request-tz1l1g
    scrollToPosition(0);

    runWithInstantScroll(behavior, (resolvedBehavior) =>
      window.scrollTo({ top: 0, left: 0, behavior: resolvedBehavior })
    );
 main

    return () => {
      if (rafId !== undefined) window.cancelAnimationFrame(rafId);
    };
codex/corregir-problemas-de-pull-request-tz1l1g
  }, [pathname, search, hash, behavior, headerSelector]);
}

  }, [pathname, search, hash, behavior]);
};

export default useScrollToTop;

 main
