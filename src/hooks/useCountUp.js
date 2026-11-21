import { useState, useEffect } from 'react';

/**
 * useCountUp Hook
 * Animates numbers counting up from 0 to endValue when startTrigger is true.
 * Formats numbers with optional leading zero for student portfolio style (e.g., "05+").
 */
export function useCountUp(endValue, duration = 1600, startTrigger = false, padZero = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(endValue);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out cubic function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * endValue);
      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [endValue, duration, startTrigger]);

  const formatted = padZero && count < 10 ? `0${count}` : `${count}`;
  return formatted;
}

