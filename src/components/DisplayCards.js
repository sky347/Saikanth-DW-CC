import React from "react";
import Card from "./Card";
import "./card.css";

const DisplayCards = (props) => {
  const bitcoinInfo = props.bitcoinInfo;
  const time = props.time;
  const eRates = props.eRates;

  const euroRate = bitcoinInfo.bpi.EUR.rate_float;

  const localDate = new Date(time);
  const localTime = localDate.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="cardWrapper">
        {Object.entries(eRates.rates).map((item, index) => (
          <Card time={localTime} euroRate={euroRate} item={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default DisplayCards;
