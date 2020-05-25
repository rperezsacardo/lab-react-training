import React from 'react';

const Random = (props) => {
  const { min, max } = props;
  const result = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Random;
