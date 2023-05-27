import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let bankImage = '';
  if (type === 'Visa') {
    bankImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png';
  } else if (type === 'Master Card') {
    bankImage = 'https://purepng.com/public/uploads/large/purepng.com-mastercard-logologobrand-logoiconslogos-251519938372dnf77.png';
  }

  const boxColorStyle = {
    backgroundColor: bgColor,
  };

  const displayedNumber = number.substring(11, 15);

  return (
    <div className="relative border-2 border-black rounded-lg ml-10 mb-2 w-1/3 h-72 flex flex-col justify-center" style={boxColorStyle}>
      <div className=" w-20 h-20 absolute top-4 right-4">
        <img src={bankImage} alt="" />
      </div>
      <div className='text-center'>
        <h1 className='text-white text-4xl'>**** **** **** {displayedNumber}</h1>
      </div>
      <div className="absolute bottom-4 left-4 text-white text-left text-2xl ml-4 mb-4">
        <p>
          Expires {expirationMonth}/{expirationYear % 100} &nbsp;&nbsp;&nbsp;&nbsp;
          {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
