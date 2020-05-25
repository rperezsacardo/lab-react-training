// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card

import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const cardImg = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={cardImg} alt={type} />
      <h1>•••• •••• •••• {number.slice(number.length - 4)} </h1>

      <p>
        Expires {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
