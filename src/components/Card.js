import React from "react";
import "./card.css";

const Card = (props) => {
  const currency = props.item[0];
  const time = props.time;
  const euroRate = props.euroRate;
  const rate = props.item[1];

  const price = euroRate * rate;
  const localPrice = price.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });
  console.log(currency);
  console.log(rate);
  console.log(price);

  return (
    <>
      <div className="divbox col-lg-4 col-sm-12">
        <div className="container">
          <div className="card">
            <div className="price">
              <span>Price: </span>
              <span>{currency} </span>
              <span>{localPrice}</span>
            </div>
            <div className="time">
              <span>Last Updated: </span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
