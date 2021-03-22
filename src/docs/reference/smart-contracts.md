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

## `BosonRouter` (Routing contract)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/BosonRouter.sol>

BosonRouter is responsible for creation of VoucherSets and Vouchers.

## `Cashier` (Escrow and funds)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/Cashier.sol>

Management of escrow fund. Funds can be withdrawn and released to all relevant
entities as well as paying for gas of transfer. Payments released to buyer or
seller. Release deposits to correct parties. Also tracks and updates escrowed
amount for an account.

## `ERC1155ERC721` (Token Factory)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/ERC1155ERC721.sol>

Multi-token contract, implementing ERC-1155 and ERC-721 hybrid. Minting,
transferring, and burning of both token types?. Balance of token check for an
account.

## `VoucherKernel` (Vouchers)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/VoucherKernel.sol>

Controlling the core business logic.

## `UsingHelpers` (utilities)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/UsingHelpers.sol>

Common utils as structures

## `BosonToken` (mockup ERC-20 token contract)

Source code → <https://github.com/bosonprotocol/contracts/blob/master/contracts/mocks/MockERC20Permit.sol>

A mockup of the ERC-20 contract for the native Boson Protocol token.
