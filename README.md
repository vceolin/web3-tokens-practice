# Skylean Ether Network Token

## Overview

This project was made to learn more about the Ether network. Here we:

- deploy an ERC20 token,
- deploy an ERC721 token
- mint an NFT for the deployed ERC721 token

## Getting started

1. Stall dependencies

```shell
yarn start
```

2. Compile Contracts: Run npx hardhat compile to compile the smart contracts.

```shell
npx hardhat
```

3. Add your private key
   Create a `sepolia.private.ts` file in the root folder with this content:

```typescript
export const privateKey = 'YOUR_PRIVATE_KEY'
```

## Creating Tokens

To create both the ERC20 and the ERC721 tokens, run the following command:

```shell
npx hardhat run scripts/deploy.js --network sepolia
```

## Minting NFTs

To mint an ERC721 NFT, run the following command:

```shell
npx hardhat run scripts/mint.ts --network sepolia
This command will mint a new NFT using the deployed contract on the Sepolia testnet.
```

> **_NOTE:_** You will need to manually change the constants `contractAddress`,
> `tokenId` and `tokenURI` to the desired output on `scripts/mint.js`

---

Made with ❤️ by vceolin
