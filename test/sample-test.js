const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Your Nft Token", function () {
  // ---- Properties ---- //

  let contract; // : Contract
  let owner; // : SignerWithAddress
  let address1; // : Random Address 1
  let address2; // : Random Address 2

  // ---- Before Each ---- //

  beforeEach(async () => {
    const ContractFactory = await ethers.getContractFactory("YourNftToken");
    [owner, address1, address2] = await ethers.getSigners();

    contract = await ContractFactory.deploy(
      "Your NFT Token",
      "YNFT",
      ethers.utils.parseEther("0.05"),
      5555,
      2,
      "ipfs://______/"
    );
  });

  // ---- Base Cases ---- //

  describe("Base Cases", function () {
    it("Should initialize the contract", async () => {
      expect(await contract.maxSupply()).to.equal(5555);
    });

    it("Should set the right owner", async () => {
      expect(await contract.owner()).to.equal(await owner.address);
    });

    it("Should initialize base price to 0.05 ETH", async () => {
      expect(await contract.cost()).to.equal("50000000000000000");
    });

    it("Should have correct Name and Symbol", async () => {
      expect(await contract.name()).to.equal("Your NFT Token");
      expect(await contract.symbol()).to.equal("YNFT");
    });
  });

  // ---- Setter Functions - Called only by owner ---- //

  describe("Setter Functions - Only Owner", function () {
    it("Should change the value of `revaled`", async () => {
      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setRevealed(true)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setRevealed(true);
      expect(await contract.revealed()).to.equal(true);
    });

    it("Should change the value of `cost`", async () => {
      // ❌ NOT Owner
      await expect(contract.connect(address1).setCost(1)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );

      // ✅ Owner
      await contract.connect(owner).setCost(2);
      expect(await contract.cost()).to.equal(2);
    });

    it("Should change the value of `maxMintAmountPerTx`", async () => {
      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setMaxMintAmountPerTx(1)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setMaxMintAmountPerTx(11);
      expect(await contract.maxMintAmountPerTx()).to.equal(11);
    });

    it("Should change the value of `hiddenMetadataUri`", async () => {
      const hiddenLink = "ipfs://hidden_link";

      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setHiddenMetadataUri(hiddenLink)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setHiddenMetadataUri(hiddenLink);
      expect(await contract.hiddenMetadataUri()).to.equal(hiddenLink);
    });

    it("Should change the value of `uriPrefix`", async () => {
      const prefix = "prefix";

      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setUriPrefix(prefix)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setUriPrefix(prefix);
      expect(await contract.uriPrefix()).to.equal(prefix);
    });

    it("Should change the value of `uriSuffix`", async () => {
      const suffix = "suffix";

      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setUriSuffix(suffix)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setUriSuffix(suffix);
      expect(await contract.uriSuffix()).to.equal(suffix);
    });

    it("Should change the value of `paused`", async () => {
      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setPaused(false)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setPaused(false);
      expect(await contract.paused()).to.equal(false);
    });

    it("Should change the value of `merkleRoot`", async () => {
      var merkleRoot = "me rk le ro ot va lu e";
      merkleRoot = ethers.utils.formatBytes32String(merkleRoot);

      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setMerkleRoot(merkleRoot)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setMerkleRoot(merkleRoot);
      expect(await contract.merkleRoot()).to.equal(merkleRoot);
    });

    it("Should change the value of `whitelistMintEnabled`", async () => {
      // ❌ NOT Owner
      await expect(
        contract.connect(address1).setWhitelistMintEnabled(true)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      // ✅ Owner
      await contract.connect(owner).setWhitelistMintEnabled(false);
      expect(await contract.whitelistMintEnabled()).to.equal(false);
    });
  });

  // ---- Minting Functions ---- //
});
