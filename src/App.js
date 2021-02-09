import "./App.css";
import { useEffect, useState } from "react";
import { getBitcoinPrice } from "./api/Bitcoin";
import { getERates } from "./api/ERates";
import DisplayCards from "./components/DisplayCards";

function App() {
  const [loading, setLoading] = useState(true);
  const [bitcoinInfo, setBitcoinInfo] = useState({});
  const [eRates, setERates] = useState({});
  const [time, setTime] = useState();

  const getData = async () => {
    const bitcoinData = await getBitcoinPrice();
    setBitcoinInfo(bitcoinData);
    setTime(bitcoinData.time.updated);
    const eRates = await getERates();
    setERates(eRates);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(loading);
  console.log(bitcoinInfo);
  console.log(eRates);
  console.log(time);

  const Content = (props) => {
    const isLoading = props.isLoading;
    if (isLoading) {
      return <p className="loading">Loading ...</p>;
    } else {
      return (
        <>
          <p className="mainhead">
            B<u>itcoin Price</u>
          </p>
          <DisplayCards bitcoinInfo={bitcoinInfo} time={time} eRates={eRates} />
        </>
      );
    }
  };

  return (
    <div>
      <div>
        <Content isLoading={loading} />
      </div>
    </div>
  );
}

export default App;
