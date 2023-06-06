import React, { useState } from 'react';

function Facebook({ data }) {
  const countries = data.map((student) => student.country);
  const uniqueCountries = [...new Set(countries)];

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const maparray = data.map((item, index) => {
    const isSelected = item.country === selectedCountry;

    return (
      <div
        className={`border-2 flex ${
          isSelected ? 'bg-blue-200' : ''
        }`}
        key={index}
      >
        <img className="h-40 w-40 rounded-full" src={item.img} alt="" />
        <div className="flex flex-col items-start ml-10 mt-5">
          <h1 className="mb-2">
            <span className="font-bold">Firstname: </span>
            {item.firstName}
          </h1>

          <h1 className="mb-2">
            <span className="font-bold">Lastname: </span>
            {item.lastName}
          </h1>

          <h1 className="mb-2">
            <span className="font-bold">Country:</span> {item.country}
          </h1>

          <h1>
            <span className="font-bold">Student:</span>{" "}
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

  const countryButtons = uniqueCountries.map((country, index) => (
    <button
      className={`border-2 border-gray-400 ml-1 p-1 rounded ${
        country === selectedCountry ? 'bg-blue-500 text-white' : ''
      }`}
      key={index}
      onClick={() => handleCountryClick(country)}
    >
      {country}
    </button>
  ));

  return (
    <div className="mt-10">
      <div className="flex flex-wrap mb-10 justify-center">
        {countryButtons}
      </div>
      {maparray}
    </div>
  );
}

export default Facebook;
