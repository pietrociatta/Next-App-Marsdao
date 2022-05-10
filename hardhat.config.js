require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("solidity-coverage");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Add environment variable to your shell. See section in `README.md` file

// Go to https://hardhat.org/config/ to learn more
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/40e0064815cb4b7f9705bc8c4f1a5b87",
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
    matic: {
      url: "https://polygon-mumbai.infura.io/v3/e122dd2881bc43e1a8595ff472c56106", // Standard RPC Link
      accounts: [process.env.METAMASK_PRIVATE_KEY],
    },
  },
  // https://coinsbench.com/verify-smart-contract-on-polygonscan-using-hardhat-9b8331dbd888
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
