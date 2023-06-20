import React, { useRef } from 'react';

const ScrollableDiv = () => {
  const divRef = useRef(null);

  const scrollToDiv = () => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToDiv}>Scroll to Div</button>
      <div style={{ height: '500px', overflow: 'auto' }}>
        <div style={{ height: '1000px' }}></div>
        <div ref={divRef}>This is the div to scroll into</div>
        <div style={{ height: '1000px' }}></div>
      </div>
    </div>
  );
};

export default ScrollableDiv;
