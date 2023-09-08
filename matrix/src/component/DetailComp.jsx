import React from "react";

const DetailComp = ({ data }) => {
  const {
    baseToken,
    quoteToken,
    pairCreatedAt,
    pairAddress,
    dexId,
    priceNative,
    priceUsd,
  } = data;
  return (
    <div className="detailcomp">
      <div className="basicinfo">
        <h4>Basic Info</h4>
        <div>
        <div>
          <h5>Pair created at</h5>
          <h5>Symbol</h5>
          <h5>Dex ID</h5>
          <h5>Pair Address</h5>
        </div>
        <div>
          <p>{new Date(pairCreatedAt).toLocaleString()}</p>
          <p>{baseToken.symbol}</p>
          <p>{dexId.length>15?`#${dexId.replace(/^0x/, '').slice(0, 4)}`:dexId}</p>
          <p>{`#${pairAddress.replace(/^0x/, '').slice(0, 4)}`}</p>
        </div>
        </div>
      </div>
      <div className="basetoken">
        <h4>Base Token</h4>
        <div>

        <div>
          <h5>Name</h5>
          <h5>Symbol</h5>
          <h5>Address</h5>
        </div>
        <div>
          <p>{baseToken.name}</p>
          <p>{baseToken.symbol}</p>
          <p>{`#${baseToken.address.replace(/^0x/, '').slice(0, 4)}`}</p>
        </div>
        </div>
      </div>
      <div className="quotetoken">
        <h4>Quote Token</h4>
        <div>
          <div>
            <h5>Name</h5>
            <h5>Symbol</h5>
            <h5>Address</h5>
          </div>
          <div>
            <p>{quoteToken.name}</p>
            <p>{quoteToken.symbol}</p>
            <p>{`#${quoteToken.address.replace(/^0x/, '').slice(0, 4)}`}</p>
          </div>
        </div>
      </div>
      <div className="price">
        <h4>Price</h4>
        <div>
          <div>
            <h5>Price Native</h5>
            <h5>Price USD</h5>
          </div>
          <div>
            <p>
              {baseToken.symbol} {parseFloat(priceNative).toFixed(2)}
            </p>
            <p>{(parseFloat(priceUsd) * 0.00118).toFixed(2)}M</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
