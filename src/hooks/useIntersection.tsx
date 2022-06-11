import React, { useEffect, useState } from "react";

export const useIntersection = (
  element: React.RefObject<HTMLDivElement>,
  rootMargin: string
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    element?.current && observer?.observe(element?.current);

    return () => {
      element?.current && observer?.unobserve(element?.current);
    };
  }, []);

  return isVisible;
};
