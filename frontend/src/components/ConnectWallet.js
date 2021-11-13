import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage message={networkError} dismiss={dismiss} />
          )}
        </div>
        <div className="p-4 text-center">
          <span
            style={{
              position: "absolute",
            }}
          >
            <div
              style={{
                position: "relative",
                left: 180,
                color: "#F44336",
                backgroundColor: "F44336",
                border: "2px solid #F44336",
                paddingLeft: 4,
                paddingRight: 4,
                borderRadius: 4,
                lineHeight: "18px",
                fontWeight: "bold",
              }}
            >
              Beta
            </div>
          </span>
          <h2>BillionDollarCalendar.com</h2>
          <h2>Own a piece of history!</h2>
          <button
            style={{
              borderColor: "#F44336",
              backgroundColor: "#F44331",
              padding: 20,
              color: "white",
              fontWeight: "bold",
              margin: 20,
            }}
            className="btn"
            type="button"
            onClick={connectWallet}
          >
            Connect Metamask Wallet
          </button>
          <h4>
            Please connect to an ethereum wallet using metamask to get started.
          </h4>
        </div>

        <div className="p-4">
          <h2>Instructions:</h2>
          <div className="p-4">
            <h4>Metamask</h4>
            <ol>
              <li>
                Install{" "}
                <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
                  metamask
                </a>
              </li>
              <li>Switch metamask to Ropsten Network</li>
              <li>Create/Choose account you want to use.</li>
            </ol>
            <h4>Get Test Ether</h4>

            <ol>
              <li>
                Go to{" "}
                <a href="https://faucet.ropsten.be/">
                  https://faucet.ropsten.be/
                </a>
              </li>
              <li>
                Paste in your wallet address to get some ropsten test ether
              </li>
            </ol>
            <h4>Buy A Date</h4>

            <ol>
              <li>Go to billiondollarcalendar.com</li>
              <li>click "Connect Metamask Wallet" button</li>
              <li>Choose account with test ether</li>
              <li>Pick any date</li>
              <li>draw your diagram</li>
              <li>Click buy and finish transaction with metamask</li>
              <li>
                <b>Own that date for ever or trade it as an NFT.</b>
              </li>
            </ol>
          </div>
        </div>
        <h3>Demo:</h3>
        <img
          width="80%"
          src="https://user-images.githubusercontent.com/324928/141642456-2d3c511e-2837-4b48-8e9a-a9457878bf79.gif"
        />
      </div>
    </div>
  );
}
