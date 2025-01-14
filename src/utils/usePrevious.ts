import { useRef, useEffect } from "react";

export default function usePrevious<T>(prev: T) {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = prev;
  }, [prev]);

  return prevValue.current;
}
