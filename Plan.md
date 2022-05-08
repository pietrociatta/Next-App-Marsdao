# Plan of project

## Timeline

<img width="600" alt="Screen Shot 2022-04-19 at 11 37 23 AM" src="https://user-images.githubusercontent.com/36372968/164042519-fbb961fc-a624-40d8-a9d9-8bc76947e5a2.png">

## Tasks

### Pietro

- [ ] Frontend website
- [ ] Deploy website
- [ ] IPFS Upload
- [ ] Advice for smart contract

### David

- [ ] Smart Contract
- [ ] Unit testing
- [ ] Randomization (with help from Pietro)

<hr />

## Smart Contract

### Libraries

- [ ] ERC721A
- [ ] Pauseable
- [ ] Ownable
- [ ] ReentrancyGuard

### Contract

- [ ] Withdraw
- [ ] Constructor

  - [ ] Symbol
  - [ ] Name
  - [ ] Mint Price
  - [ ] Max Supply
  - [ ] Max amount user can mint
  - [ ] Base URI (Hidden)

- [ ] Owner Mint? `onlyOwner`
- [ ] Public Mint?
- [ ] Setter Functions
  - [ ] Name
  - [ ] Symbol
  - [ ] Mint Price
  - [ ] URI

**Special: Randomization**

- Chainlink VRF - https://docs.chain.link/docs/chainlink-vrf/

- Pinata API - https://docs.pinata.cloud/

- Safe NFT Metadata - https://github.com/hashlips-lab/safe-nft-metadata-provider

- Asked question in Reddit: https://www.reddit.com/r/ethdev/comments/u78p0d/upload_nft_metadata_to_ipfs_blackbox_solution/

### Merkle Tree? (If needed)
