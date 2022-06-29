const hre = require('hardhat');
const { ethers } = require('hardhat');

async function main() {
  // We get the contract to deploy
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');

  const nftmarketplace = await NFTMarketplace.deploy(
    '0x38207d0e84eDB04A57482c3769fe192617520373'
  );

  await nftmarketplace.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
