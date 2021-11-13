require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "jLx5aiJgJ-cNFW_0NNlroHobVGaksgXl";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "9da44fa56b1c1edb1831dab018691746cc832e53bb80e3c409597e8fb6fb5806";

module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: './frontend/contracts',
  },
  networks: {
    ropsten: {
      // url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      url: "https://ropsten.infura.io/v3/d547c69030fb4168ba1f5faf9fbe4de5",
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
