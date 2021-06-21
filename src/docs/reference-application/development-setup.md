---
layout: docs
title: "Boson Protocol: Docs: Reference Application: Developoment setup"
short_title: "Development Setup"
permalink: /reference-application/development-setup/
---

# Development setup

In order to contribute to the Leptonite application or further develop your own
forked copy of the Leptonite application, you will need to set up a local
development environemnt. This page explains how to do that. These instructions
assume a working knowledge of git and GitHub.

## Repositories

By default, v0.1.0 of the reference application points to v0.1.0 of the Boson
Protocol smart contracts running on the Rinkeby testnet.

To run the Leptonite application locally while pointing to the smart contracts
on the testnet, you will first need to clone the following repositories:

- [reference-frontend](link to v0.1.0 of the reference-frontend repo)
- [reference-backend](link to v0.1.0 of the reference-backend repo)

Each of the repositories has a README that describes how to run the code
locally.

If you want to run your own local version of the Boson Protocol smart contracts,
you will also need to clone the contracts repository:

- [contracts](link to v0.1.0 of contracts repo)

The contracts repository also has a README that describes how to run the code
locally. You will need take a few extra steps to point your local
reference-frontend and reference-backend to the local version of the Boson
Protocol smart contracts:

1. reference-fronted: Change the smart contract addresses in
   src/hooks/configs.js to match the local addresses displayed in the terminal
   after following the instructions for running locally in the contracts repo
   README
2. reference-backend: [PLACEHOLDER]
