import React from 'react';

function IDcard({ lastName, firstName, gender, height, birth, image }) {
  return (
    <div className="flex border-2 border-black m-10">
      <img src={image} alt="" className="min-w-128 max-w-128" />
      <div className="flex ">
        <ul>
          <li>
            <span className="font-bold">First name:</span> {firstName}
          </li>
          <li>
            <span className="font-bold">Last name:</span> {lastName}
          </li>
          <li>
            <span className="font-bold">Gender:</span> {gender}
          </li>
          <li>
            <span className="font-bold">Height:</span> {height}
          </li>
          <li>
            <span className="font-bold">Birth:</span> {birth}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IDcard;
