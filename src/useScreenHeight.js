const { useState, useEffect } = require('react');

function getHeight() {
  if (!navigator.userAgent.match(/iphone|ipod|ipad/i)) {
		return window.innerHeight;
	}

	const axis = Math.abs(window.orientation);
	const dims = { w: 0, h: 0 };

	/**
	 * Creates an element with a height of 100vh since iOS accurately
	 * reports vp height (but not window.innerHeight). Then destroy it.
	 */
	function createRuler() {
		let ruler = document.createElement('div');

		ruler.style.position = 'fixed';
		ruler.style.height = '100vh';
		ruler.style.width = 0;
		ruler.style.top = 0;

		document.documentElement.appendChild(ruler);

		// Set cache conscientious of device orientation
		dims.w = axis === 90 ? ruler.offsetHeight : window.innerWidth;
		dims.h = axis === 90 ? window.innerWidth : ruler.offsetHeight;

		// Clean up after ourselves
		document.documentElement.removeChild(ruler);
		ruler = null;
	};

	createRuler();

  if (Math.abs(window.orientation) !== 90) {
    return dims.h;
  }
  
  return dims.w;
}

function useScreenHeight() {
  let [screenHeight, setScreenHeight] = useState(getHeight());

  function handleResize() {
    setScreenHeight(getHeight());
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
