import React from 'react';

function NumbersTable({ limit }) { // Destructure the `limit` prop from the parameter
  const numbersArray = [];
  for (let i = 1; i <= limit; i++) {
    numbersArray.push(i);
  }

  const even = {
    backgroundColor: 'red',
    border: '1px solid black',
    height: '50px',
    width: '50px',
    color: 'black',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const odd = {
    backgroundColor: 'white',
    border: '1px solid black',
    height: '50px',
    width: '50px',
    color: 'black',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const oddOrEven = numbersArray.map((number) => {
    if (number % 2 === 0) {
      return <div key={number} style={even}>{number}</div>;
    } else {
      return <div key={number} style={odd}>{number}</div>;
    }
  });

  return <div className='flex flex-wrap mt-20 w-64'>{oddOrEven}</div>;
}

export default NumbersTable;
