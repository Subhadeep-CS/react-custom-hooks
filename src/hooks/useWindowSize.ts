/**
 * Custom React hook to track the browser window size.
 *
 * @returns {Object} An object with:
 * - `width` {number} The current window width in pixels.
 * - `height` {number} The current window height in pixels.
 *
 * @example
 * const { width, height } = useWindowSize();
 * console.log(width, height);
 */

import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // run once
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
