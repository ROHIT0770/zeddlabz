import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = 'Hello from Parent';

  return (
    <div>
      <ChildComponent message={data} />
    </div>
  );
};

export default ParentComponent;
