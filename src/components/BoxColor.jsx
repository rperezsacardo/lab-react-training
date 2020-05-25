import React from 'react';

const BoxColor = (props) => {
  const { r, g, b } = props;
  let color = `rgb(${r},${g},${b})`;
  return (
    <div style={{ backgroundColor: color }}>
      <p>{color}</p>
    </div>
  );
};

export default BoxColor;
