'use client'

import { useEffect } from 'react'

// component to fix the scroll to top issue
const ScrollUp = () => {
    useEffect(() => {
        window.document.scrollingElement?.scrollTo(0,0);
    }, []);

    return null;
};

export default ScrollUp;