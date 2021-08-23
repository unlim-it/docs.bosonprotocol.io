---
layout: docs
title: "Boson Protocol: Docs: Applications: Leptonite"
short_title: "Leptonite"
permalink: /applications/leptonite/
---

# Introduction to Leptonite

_**Description below provided by Frontend Operator, not Boson Protocol**_

The Leptonite application can be accessed [here](https://www.leptonite.io).
Leptonite is a reference release of a peer-to-peer digital marketplace app built
on top of Boson Protocol. The app enables users to connect their wallets and
list a set of items for sale as well as discover products that can be purchased
in a decentralised way using Boson Protocol.

The application also demonstrates Boson’s novel game theoretic mechanism showing
how the transaction lifecycle can be tracked and co-ordinated by both parties.
It provides developers an example of a dCommerce application that can be built
on Boson Protocol and how Boson’s core exchange mechanism is applied to
coordinate and automate the exchange of monetary for non-monetary value with
minimised arbitration, cost and friction.

Leptonite is a Rinkeby testnet application.

## How it works

- Commitment NFTs for physical items — sellers can create ERC1155 listings for
  physical items
- Minting NFT on commitment — Buyers can purchase items, which mints an ERC721
  NFT on commitment and payment
- Automated escrow code — The lifecycle of these commitment NFTs can be tracked
  by both buyer and seller, with each being incentivised to follow through to
  redemption (at which point payment is transferred and deposits are returned).

## Core Features

- Users can connect wallet from metamask or with wallet connect
- Seller can list an item for sale
- Seller can view their listings and void any remaining quantities that haven’t
  been committed to
- Seller can track the lifecycle of their listings that are committed to by
  buyers
- Seller can cancel, or admit fault on, a commitment token if issues arise
- Buyer can discover NFTs for physical items, filtering by description or
  location based on the metadata attached
- Buyer can commit to purchase a listed item with payment and a deposit going
  into Boson Protocol’s escrow code
- Buyer can redeem their commitment token when they collect an item
- Buyer can request a refund if they choose not to collect the item anymore
- Buyer can let the commitment expire and have funds returned
- Buyer can complain about a commitment token if issues arise

## Architecture

The p2p marketplace is implemented as a full-stack application with a React
front-end and a Node.js backend, both leveraging the Boson Protocol smart
contracts.

![Leptonite Architecture](/images/docs/leptonite-architecture.png)

## Technical features

- Authentication system using ethereum wallet via metamask or wallet connect

## Versioning

Version 0.1.x of the Leptonite application works with version 0.1.0 of the Boson
Protocol smart contracts. See the [Repositories](#repositories) section below.

## Development setup

In order to contribute to the Leptonite application or further develop your own
forked copy of the Leptonite application, you will need to set up a local
development environemnt. This section explains how to do that. These
instructions assume a working knowledge of git and GitHub.

### Repositories

By default, v0.1.x of the reference application points to v0.1.0 of the Boson
Protocol smart contracts deployed to the Rinkeby testnet.

To run the Leptonite application locally while pointing to the smart contracts
on the testnet, you will first need to clone the following repositories:

- [reference-frontend](https://github.com/bosonprotocol/reference-frontend/releases/tag/v0.1.1)
- [reference-backend](https://github.com/bosonprotocol/reference-backend/releases/tag/v0.1.0)

Each of the repositories has a README that describes how to run the code
locally.

If you want to run your own local version of the Boson Protocol smart contracts,
you will also need to clone the contracts repository:

- [contracts](https://github.com/bosonprotocol/contracts/releases/tag/v0.1.0)

The contracts repository also has a README that describes how to run the code
locally. You will need take a few extra steps to point your local
reference-frontend and reference-backend to the local version of the Boson
Protocol smart contracts:

1. reference-fronted: Change the smart contract addresses in
   `src/hooks/configs.js` to match the local addresses displayed in the terminal
   after following the instructions for running locally in the contracts repo
   README
2. reference-backend:

   1. Add the following keys to the `config/deployments/local-development.yaml`
      file

      - voucher_kernel_address: ""
      - token_contact_address: ""
      - boson_router_contact_address: ""
      - cashier_address: ""

   2. Change the key values to point to your local contract instance addresses

## Known issues

There are a couple of known issues which users may experience while using the
app:

### Can’t create new transactions

If you repeatedly get an error saying _Please wait for your recent transaction
to be minted before sending another one, when committing or listing an item,_ or
while performing any other action that requires minting a new transaction,
please go to `Wallet -> Advanced` and click the `RESET TRANSACTION BLOCKER`
button. This will resolve the issue and you will be able to proceed with new
transactions.

### Closing the browser tab or window while minting a new transaction

When the browser tab or window running Leptonite is closed while the MetaMask
pop up is triggered to confirm the transaction, users may not receive their
commitment NFT. To avoid this issue, please do not close the Leptonite
application while confirming a MetaMask transaction.
