import React from 'react';

function Greetings({ lang, children }) {

  let greetingText = '';

  if (lang === 'de') {
    greetingText = 'Hallo';
  } else if (lang === 'en') {
    greetingText = 'Hello';
  } else if (lang === 'es') {
    greetingText = 'Hola';
  } else if (lang === 'fr') {
    greetingText = 'Bonjour';
  }

  return <div className='flex border-2 border-black ml-10 mb-2'>{greetingText} {children}</div>;
}

export default Greetings;