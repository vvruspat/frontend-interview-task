import React, { useCallback, useEffect, useRef } from 'react';
import { InfiniteScrollStyled } from './infinite-scroll.styled';

export type InfiniteScrollProps = {
  onIntersect: (entries: IntersectionObserverEntry) => void;
  threshold: number;
  rootMargin: string;
};

export const InfiniteScroll = ({
  onIntersect,
  threshold = 0.5,
  rootMargin = '0px',
}: InfiniteScrollProps) => {
  const scrollIntersectionRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect && onIntersect(entry);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(handleIntersect, {
      rootMargin,
      threshold,
    });

    if (scrollIntersectionRef.current) {
      observer.current.observe(scrollIntersectionRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [handleIntersect, rootMargin, threshold]);

  return <InfiniteScrollStyled ref={scrollIntersectionRef}></InfiniteScrollStyled>;
};
