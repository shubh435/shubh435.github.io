/**
 * Performance utilities to optimize animations and reduce main-thread work
 */

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect low-end devices (simple heuristic)
export const isLowEndDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;

  // Check for device memory (if available)
  const memory = (navigator as any).deviceMemory;
  if (memory && memory < 4) return true;

  // Check for hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency;
  if (cores && cores < 4) return true;

  return false;
};

// Determine if animations should be disabled
export const shouldDisableAnimations = (): boolean => {
  return prefersReducedMotion() || isLowEndDevice();
};

// Get optimized animation config
export const getAnimationConfig = () => {
  if (shouldDisableAnimations()) {
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 },
      whileInView: {},
    };
  }

  return null; // Use default animations
};

// Defer execution until browser is idle
export const runWhenIdle = (callback: () => void, timeout = 2000) => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 100);
  }
};
