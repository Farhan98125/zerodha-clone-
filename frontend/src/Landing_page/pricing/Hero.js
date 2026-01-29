import React from "react";
function Hero() {
  return (
    <div className="container">
      {/* div for the first heading and para we put it in single row */}
      <div className="row text-center mt-5 border-bottom p-5">
        <h1 className="mt-3">Charges</h1>
        <h3 className="text-muted fs-4">List of all charges and taxes</h3>
      </div>

      {/* for images */}
      <div className="row text-center mt-5 p-5">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" style={{width:"250px"}} />
          <h2 className="mt-4">Free equity delivery</h2>
          <p className="mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4">
          <img src="media/images/intradayTrades.svg" style={{width:"250px"}}  />
          <h2 className="mt-4">Intraday and F&O trades</h2>
          <p className="mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" style={{width:"250px"}}  />
          <h2 className="mt-4">Free direct MF</h2>
          <p className="mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
