import React, { useState } from 'react';

function ClickablePicture({ image, imageClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState);
  };

  return (
    <div className='mb-20'>
      <button onClick={handleClick}>
        <img className="h-20" src={isClicked ? imageClicked : image} alt="" />
      </button>
    </div>
  );
}

export default ClickablePicture;
