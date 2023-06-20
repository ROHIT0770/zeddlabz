// Class Component 

import React from 'react';

interface ClassComponentProps {
  name: string;
}

class ClassComponent extends React.Component<ClassComponentProps> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default ClassComponent;

//Function Component

import React from 'react';

interface FunctionComponentProps {
  name: string;
}

const FunctionComponent: React.FC<FunctionComponentProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default FunctionComponent;

