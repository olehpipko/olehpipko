import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.5 }) {
    const ref = useRef(null);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setHasBeenVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const el = ref.current;
        if (el) observer.observe(el);

        return () => el && observer.unobserve(el);
    }, [options]);

    return [ref, hasBeenVisible];
}
