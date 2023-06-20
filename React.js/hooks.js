import React, { useState, useEffect, useCallback, useContext } from 'react';

// Custom context
const MyContext = React.createContext();

// Component using hooks
const MyFunctionComponent = () => {
  // useState hook
  const [count, setCount] = useState(0);

  // useEffect hook
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  // useCallback hook
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // useContext hook
  const value = useContext(MyContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment Count</button>
      <p>Context Value: {value}</p>
    </div>
  );
};

// Usage of MyContext.Provider
const App = () => {
  const contextValue = 'Hello, useContext!';

  return (
    <MyContext.Provider value={contextValue}>
      <MyFunctionComponent />
    </MyContext.Provider>
  );
};

export default App;