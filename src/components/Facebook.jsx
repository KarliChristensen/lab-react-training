import React from 'react';

function Facebook({ data }) {
  const maparray = data.map((item, index) => {
    return (
      <div className="border-2 flex" key={index}>
        <img className="h-40 w-40 rounded-full" src={item.img} alt="" />
        <div className="flex flex-col items-start ml-10 mt-5">
          <h1 className='mb-2'>
            <span className="font-bold">Firstname: </span>
            {item.firstName}
          </h1>

          <h1 className='mb-2'>
            <span className="font-bold">Lastname: </span>
            {item.lastName}
          </h1>

          <h1 className='mb-2'>
            <span className="font-bold">Country:</span> {item.country}
          </h1>

          <h1>
            <span className="font-bold">Student:</span>{' '}
            {(() => {
              switch (item.isStudent) {
                case true:
                  return 'Yes';
                case false:
                  return 'No';
                default:
                  return 'Error';
              }
            })()}
          </h1>
        </div>
      </div>
    );
  });
  return <div>{maparray}</div>;
}

export default Facebook;
