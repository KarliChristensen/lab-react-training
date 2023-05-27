import React from 'react';
/* model
licensePlate */
function DriverCard({ name, rating, img, car }) {
  let rate = Math.round(rating);

  switch (rate) {
    case 0:
      rate = <div className="text-5xl">☆☆☆☆☆</div>;
      break;
    case 1:
      rate = <div className="text-5xl">★☆☆☆☆</div>;
      break;
    case 2:
      rate = <div className="text-5xl">★★☆☆☆</div>;
      break;
    case 3:
      rate = <div className="text-5xl">★★★☆☆</div>;
      break;
    case 4:
      rate = <div className="text-5xl">★★★★☆</div>;
      break;
    case 5:
      rate = <div className="text-5xl">★★★★★</div>;
      break;
    default:
      rate = 'You broke something';
  }

  return (
    <div className="bg-blue-600 h-48 m-10 rounded-2xl flex justify-center place-items-center">
      <img className="w-36 h-36 object-cover rounded-full" src={img} alt="" />
      <div className="flex flex-col items-start ml-10">
        <h1 className="text-white text-4xl font-bold mb-2">{name}</h1>
        <p className="text-white mb-2">{rate}</p>
        <p className="text-white text-2xl mb-2">
          {car.model} - {car.licensePlate}{' '}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
