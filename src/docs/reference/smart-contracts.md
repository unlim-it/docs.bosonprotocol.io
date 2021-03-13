---
layout: docs
title: "Boson Protocol: Docs: Reference: Smart Contracts"
short_title: "Smart Contracts"
permalink: /reference/smart-contracts/
---

# Smart contracts

This is a brief description of the smart contracts used in Boson Protocol. They
are based on two NFT standards,
[ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) and
[ERC-721](https://eips.ethereum.org/EIPS/eip-721).

## `BosonRouter`

Source code →

Reference documentation →

BosonRouter is responsible for creation of VoucherSets and Vouchers.

## `Cashier`

Source code →

Reference documentation →

Management of escrow fund. Funds can be withdrawn and released to all relevant
entities as well as paying for gas of transfer. Payments released to buyer or
seller. Release deposits to correct parties. Also tracks and updates escrowed
amount for an account (wallet?)

## `ERC1155ERC721` (Token Factory)

Source code →

Reference documentation →

Multi-token contract, implementing ERC-1155 and ERC-721 hybrid. Minting,
transferring, and burning of both token types?. Balance of token check for an
account.

## `VoucherKernel`

Source code →

Reference documentation →

Controlling the core business logic.

## `UsingHelpers`

Source code →

Reference documentation →

Common utils as structures

## `BosonToken`

Source code →

Reference documentation →

ERC-20 contract for the native Boson Protocol token.
