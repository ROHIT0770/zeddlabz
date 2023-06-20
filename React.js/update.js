import React, { useState, useEffect } from 'react';

// Props interface
interface MyFunctionComponentProps {
  name: string;
}

const MyFunctionComponent: React.FC<MyFunctionComponentProps> = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated: ${count}`);
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default MyFunctionComponent;