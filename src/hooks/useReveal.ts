import { useInView } from "react-intersection-observer";

export function useReveal() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  return { ref, className: `reveal${inView ? " visible" : ""}` };
}
