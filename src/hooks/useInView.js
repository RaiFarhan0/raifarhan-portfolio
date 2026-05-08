import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export function useInView(options = {}) {
  const { ref, inView, entry } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
    ...options,
  });

  return { ref, inView, entry };
}
