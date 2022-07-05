# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Mars DAO - Smart Contract (ERC721A)

https://marsdao.net/

<hr />

## General

Brief: The Smart contract at MINT must randomly take the images of the collection so that **no one can know what has been minted.**

### Rarities:

Different distribution for each collection

Example:

| Type       | Amount |
| ---------- | :----: |
| Super Rare |   1    |
| Rare       |   10   |
| Non-Common |   80   |
| Regular    |   x    |

## Payment

**Total: $15,000** (50% Before writing code)

- David: $7,500 (50%) Wire Transfer

- Pietro: $7,500 (50%)

## Requirements

- Upload all images to IPFS (random order). No one will be able to see what NFT is rare (not even developers or owner).

- Frontend mint function (ReactJS)

- Create `ERC721A` Smart Contract

  - Random Mint (No one will know the NFT minted)

  - Whitelist? What do you want with whitelist or do you not need it?

## Random Images

https://medium.com/northwest-nfts/bored-ape-yacht-club-contract-review-80dce503308e

https://forum.openzeppelin.com/t/are-nft-projects-doing-starting-index-randomization-and-provenance-wrong-or-is-it-just-me/14147?page=2

https://youtu.be/kApajL7v854

https://www.youtube.com/watch?v=sHOt0xdg5Dg

<hr />

## Customer Request

All images must be extracted randomly, uploading all images to IPFS so that the Smart Contract takes the images in a Random manner, assigns them to the Wallet, and leaves a certain amount of time for the exchange and the users who receive their token obscured, they can sell and exchange it but they do not know what the rarity of it is until the end of the established time, after which there will be the REVEALING where the rarity of them will be known.

By the time people trade their still obscured NFTs they will not know if they are selling a high rarity or not so the token exchange will be totally random, by doing so **we guarantee users that no one can touch the Smart Contract and that 100% randomly no one can manipulate it in any way**.

We would like to add that such a thing has already been created by Bored Ape Yatch Club, our project is based on very well defined ideas and will surely appeal to end users.

<hr />

> - Possibility of being audited by a third party to demonstrate immutability and randomness.

## Environment Variables

Add the sensitive information like API Keys to your `~/.zshenv` file. See more here: https://apple.stackexchange.com/questions/356441/how-to-add-permanent-environment-variable-in-zsh

`echo 'export ETHERSCAN_API_KEY="YOUR_API_KEY"' >> ~/.zshenv`

