import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
    const controls = useAnimation(); // Call the hook correctly
    const [element, view] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (view) {
            controls.start('show');
        } else {
            controls.start('hidden');
        }
    }, [view, controls]); // Dependency array ensures this runs only when `view` or `controls` change

    return [element, controls];
};
