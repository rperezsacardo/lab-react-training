import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="IdCard">
      <img src={picture} alt="" />
      <div>
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>last Name: </strong>
          {lastName}
        </p>
        <p>
          <strong>gender: </strong>
          {gender}
        </p>
        <p>
          <strong>height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
