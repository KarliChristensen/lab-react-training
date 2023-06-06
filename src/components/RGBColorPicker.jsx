import React, { useState } from 'react';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (event) => {
    const value = parseInt(event.target.value);
    setRValue(value);
  };

  const handleGChange = (event) => {
    const value = parseInt(event.target.value);
    setGValue(value);
  };

  const handleBChange = (event) => {
    const value = parseInt(event.target.value);
    setBValue(value);
  };

  const colorStyle = {
    backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
    width: '200px',
    height: '200px',
    border: '1px solid black',
  };

  return (
    <div className="flex justify-center flex-col">
      <div style={colorStyle}></div>
      <div>
        <label>
          R:
          <input
            type="range"
            min={0}
            max={255}
            value={rValue}
            onChange={handleRChange}
          />
        </label>
        <label>
          G:
          <input
            type="range"
            min={0}
            max={255}
            value={gValue}
            onChange={handleGChange}
          />
        </label>
        <label>
          B:
          <input
            type="range"
            min={0}
            max={255}
            value={bValue}
            onChange={handleBChange}
          />
        </label>
      </div>
    </div>
  );
}

export default RGBColorPicker;
