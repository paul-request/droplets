import { innerHeight } from 'ios-inner-height';

const { useState, useEffect } = require('react');

function useScreenHeight() {
  let [screenHeight, setScreenHeight] = useState(innerHeight());

  function handleResize() {
    setScreenHeight(innerHeight());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenHeight;
}

export default useScreenHeight;
