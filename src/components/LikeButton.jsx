import React, { useState } from 'react';

function LikeButton() {
  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    const calc = Math.floor(Math.random() * color.length);
    document.getElementById('like-button').style.backgroundColor = color[calc];
  };

  return (
    <div className='mb-10'>
      <button id="like-button" onClick={handleClick}>{count} Likes</button>
    </div>
  );
}

export default LikeButton;
