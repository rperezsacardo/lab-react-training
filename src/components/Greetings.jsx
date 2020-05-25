import React from 'react';

const Greetings = (props) => {
  const lang = props.lang;
  let result;
  switch (lang) {
    case 'de':
      result = 'Hallo';
      break;
    case 'en':
      result = 'Hello';
      break;
    case 'fr':
      result = 'Bonjour';
      break;
    case 'es':
      result = 'Hello';
      break;

    default:
      result = 'Olá';
      break;
  }

  return (
    <div>
      <p>
        {result} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
