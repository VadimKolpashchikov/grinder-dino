import React, { useState, useEffect } from 'react';

export default function useWindowWidth (maxWidth) {
  const [windowWidth, setWindowWidth] = useState(innerWidth > maxWidth ? false : true);

  useEffect(() => {
    const width = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleWidth = () => {
      setWindowWidth(width.matches);
    };

    width.addListener(handleWidth);

    return () => {
      width.removeListener(handleWidth);
    };
  }, [maxWidth]);

  return windowWidth;
};