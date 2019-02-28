import { useEffect } from 'react';

function useTimeout(callback, delay) {
  // Set up the timeout
  useEffect(() => {
    let id = setTimeout(callback, delay);
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;