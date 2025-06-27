import { useEffect, useState } from 'react';

const RESIZE_DEBOUNCE_DELAY = 500;

export const useResizeActive = () => {
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleResize = () => {
            setIsResizing(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(
                () => setIsResizing(false),
                RESIZE_DEBOUNCE_DELAY
            );
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return isResizing;
};
