import React, { useState } from 'react';
import arrowRight from '../assets/images/arrow-next-2825.png';
import arrowLeft from '../assets/images/arrow-left-2827.png';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const length = images.length;
  const next = () => {
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className='flex justify-center mt-20'>
      <button className='mr-10' onClick={prev}><img src={arrowLeft} alt="" /></button>
      <img src={images[index]} alt="Carousel" />
      <button className='ml-10' onClick={next}><img src={arrowRight} alt="" /></button>
    </div>
  );
}

export default Carousel;
