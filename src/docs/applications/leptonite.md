---
layout: docs
title: "Boson Protocol: Docs: Applications: Leptonite"
short_title: "Leptonite"
permalink: /applications/leptonite/
---

# Introduction to Leptonite

_**Description below provided by Frontend Operator, not Boson Protocol**_

The Leptonite application can be accessed [here](http://leptonite.io). It shows
you how to build a p2p marketplace powered by Boson Protocol. Users can connect
their wallets and list a set of items as a seller, as well as discover products
that can be purchased as a buyer. The application also demonstrates how the
transaction lifecycle can be tracked and co-ordinated by both parties.

1. **Digital to Physical** - Sellers can create listings for physical items that
   can be discovered with pick-up location information added to metadata.
2. **Minting NFT on commitment** - Buyers can purchase items, which mints an NFT
   on commitment and payment
3. **Automated escrow** - A commitment NFT's lifecycle can be tracked by both
   buyer and seller with each being incentivised to complete a successful
   redemption with payment being transferred and deposits being returned.

## Features

1. Users can connect wallet from metamask or with wallet connect
2. Seller can list an item, which mints an ERC1155
3. Seller can view her listings and void any remaining quantities that haven't
   been committed to
4. Seller can track the lifecycle of her listings of minted ERC721 tokens
   committed to by buyers
5. Seller can cancel or admit fault on a commitment token if issues arise
6. Buyer can discover NFTs for physical items, filtering by description or
   location based on metadata attached
7. Buyer can commit to purchase a listed item with payment and a deposit going
   into Boson Protocol's escrow
8. Buyer can redeem his commitment token when he collects an item
9. Buyer can request a refund if he chooses not to collect the item anymore
10. Buyer can let the commitment expire and have funds returned
11. Buyer can complain on a commitment token if issues arise

## Architecture

The p2p marketplace is implemented as a full-stack application with a React
front-end and a Node.js backend, both leveraging the Boson Protocol smart
contracts.

![Leptonite Architecture](/images/docs/leptonite-architecture.png)

## Technical features

- Authentication system using ethereum wallet via metamask or wallet connect

## Versioning

Version 0.1.0 of the Leptonite application works with version 0.1.0 of the Boson
Protocol smart contracts. See the [Repositories](#repositories) section below.

## Development setup

In order to contribute to the Leptonite application or further develop your own
forked copy of the Leptonite application, you will need to set up a local
development environemnt. This section explains how to do that. These
instructions assume a working knowledge of git and GitHub.

### Repositories

By default, v0.1.0 of the reference application points to v0.1.0 of the Boson
Protocol smart contracts deployed to the Rinkeby testnet.

To run the Leptonite application locally while pointing to the smart contracts
on the testnet, you will first need to clone the following repositories:

- [PLACEHOLDER] [reference-frontend](link to v0.1.0 of the reference-frontend
  repo)
- [PLACEHOLDER] [reference-backend](link to v0.1.0 of the reference-backend
  repo)

Each of the repositories has a README that describes how to run the code
locally.

If you want to run your own local version of the Boson Protocol smart contracts,
you will also need to clone the contracts repository:

- [PLACEHOLDER] [contracts](link to v0.1.0 of contracts repo)

The contracts repository also has a README that describes how to run the code
locally. You will need take a few extra steps to point your local
reference-frontend and reference-backend to the local version of the Boson
Protocol smart contracts:

1. reference-fronted: Change the smart contract addresses in
   src/hooks/configs.js to match the local addresses displayed in the terminal
   after following the instructions for running locally in the contracts repo
   README
2. reference-backend: [PLACEHOLDER]
