import { useEffect, useRef } from "react";

export default function useInterval(callback: () => void, delay?: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== undefined) {
      const interval = setInterval(() => {
        if (savedCallback.current) savedCallback.current();
      }, delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
}
