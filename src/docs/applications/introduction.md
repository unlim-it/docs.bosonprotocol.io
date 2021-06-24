---
layout: docs
title: "Boson Protocol: Docs: Reference Application: Introduction"
short_title: "Introduction"
permalink: /reference-application/introduction/
---

# Introduction to the Leptonite application

The Leptonite applications shows you how to build a p2p marketplace powered by
Boson Protocol. Users can connect their wallets and list a set of items as a
seller, as well as discover products that can be purchased as a buyer. The
application also demonstrates how the transaction lifecycle can be tracked and
co-ordinated by both parties.

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

### Technical features

- Authentication system using ethereum wallet via metamask or wallet connect

## Versioning

Version 0.1.0 of the Leptonite application works with version 0.1.0 of the Boson
Protocol smart contracts.

## [PLACEHOLDER] links to v0.1.0 of each repo
