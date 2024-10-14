import React from 'react';

export interface IReactDataVisualizer {
  creator?: string;
}

const ReactDataVisualizer: React.FC<IReactDataVisualizer> = ({ creator }) => {
  return <div>Created by: {creator || 'Unknown'}</div>;
};

export default ReactDataVisualizer;
