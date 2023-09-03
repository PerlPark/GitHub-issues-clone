import { useEffect, useRef } from "react";

interface UseScrollDown {
  deps: any[];
}

function useScrollDown({ deps }: UseScrollDown) {
  const targetRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    targetRef.current?.scrollTo({
      top: targetRef.current.scrollHeight,
      left: window.scrollX,
      behavior: "smooth",
    });
  }, [deps]);

  return { targetRef };
}

export default useScrollDown;
