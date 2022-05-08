const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const YourNftToken = await hre.ethers.getContractFactory("YourNftToken");

  const yourNftToken = await YourNftToken.deploy(
    "Your NFT Token",
    "YNFT",
    ethers.utils.parseEther("0.05"),
    5555,
    2,
    "ipfs://______/"
  );

  await yourNftToken.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
