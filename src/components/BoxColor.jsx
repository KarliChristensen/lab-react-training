import React from 'react';

function BoxColor({ r, g, b }) {
  const boxColorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return <div className='flex border-2 border-black ml-10 mb-2 h-10' style={boxColorStyle}></div>;
}

export default BoxColor;
