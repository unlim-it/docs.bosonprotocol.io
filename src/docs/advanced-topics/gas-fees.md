---
layout: docs
title: "Boson Protocol: Docs: Advanced Topics: Gas Fees"
short_title: "Gas Fees"
permalink: /advanced-topics/gas-fees/
---

# Gas fees

Transactions in Ethereum refer to the transfer of message data between accounts
and contracts. The message data can be Ether or contract execution parameters.
Ethereum uses transactions as the smallest unit of execution. Each transaction
includes the following parameters:

- To: The target account address
- Value: The value being transferred can be specified
- Nonce: A transaction-related string used to prevent transactions from being
  replayed
- gasPrice: The price of Gas that is consumed to execute the trade
- gasLimit: The maximum Gas value consumed by the transaction
- Data: The transaction comes with bytecode information that can be used to
  create/invoke smart contracts
- Signature: Signature information

Similar to the Bitcoin network, when sending a transaction, the user has to pay
a certain transaction fee in Ether.

**Gas** refers to the fee, or pricing value, required to successfully conduct a
transaction or execute a contract. Gas fees \*\*are payments made by users to
compensate for the computing energy required to process and validate
transactions on the Ethereum blockchain.

**Gas limit** refers to the maximum amount of gas that you're willing to spend
on a particular transaction. A higher gas limit means that you must do more work
to execute a transaction using ether or a smart contract.

There are three possible scenarios with which transactions can be created on
chain:

**Gas limit too low** : When Gas limit is less the required gas for execution of
a call, then there is a higher chance for the transaction to get reverted
although however the gas will be consumed for invoking the function call. This
can also lead to a possible scenario of transaction being in a pending state for
longer time. If the actual cost exceeds the supplied gas, then the transaction
fails with an out-of-gas exception.

**Ideal Gas limit** : The ideal gas limit is when a transaction is submitted
with enough gas limit to cover the costs involved execution of the transaction
or invoke a function call. In order to find the current Ideal gas limits, most
of the Dapp's use [ethgasstation](https://ethgasstation.info/)

**Gas limit too high** : Block Gas Limit is the maximum Gas allowed in a block.
Hence each block has a theoretical maximum number of transactions that it can
contain. If there is surplus gas, it's returned to the sender.

**Gas Price** controls the upper limit of a trade execution order. Each
execution of a contract instruction consumes a fixed amount of cost. When a
transaction has not been executed and the gas is exhausted, the contract
execution is terminated and rolled back. Gas can be exchanged with Ether. It
should be noted that the price of Ethereum is fluctuating, but the gas costs for
executing a certain smart contract can be fixed and adjusted by setting the
price of Gas.

**Gas Optimization:** Smart contracts execution cost more gas than necessary,
and therefore the creators or users will be overcharged. To save money,
developers had better follow best practices while they are coding in solidity or
Viper.

However in various scenarios the costs involved in executing a transaction on
the Ethereum network becomes expensive. In order to avoid this situation, there
are various on-chain and off-chain solutions which can counter the issues of
high gas price.

## Ethereum Transactions

There are multiple ways in which we can execute transactions on Ethereum
blockchain. The object of sending a transaction is either to transfer an asset
or to invoke a function call in the smart contract. In this document we will
discuss various approaches in which we can make transactions.

### Simple Transactions

![https://lh5.googleusercontent.com/7_FIwNVuOFzCHMI1hHOs1aAD49bs86fLPUxuBJsGQwwYbo1kqXb5-k5o7f_VmmqZNmmT0KU69VzfrJr8GlkiQZFWxgG6peAVvarmLvZ8kddJ5fzJrqK6-ER6Iy7U8nwuKsukEv1e](https://lh5.googleusercontent.com/7_FIwNVuOFzCHMI1hHOs1aAD49bs86fLPUxuBJsGQwwYbo1kqXb5-k5o7f_VmmqZNmmT0KU69VzfrJr8GlkiQZFWxgG6peAVvarmLvZ8kddJ5fzJrqK6-ER6Iy7U8nwuKsukEv1e)

In simple transactions sender invokes a function call on the smart contract to
interact with the contract and execute the transaction. In such transactions a
significant amount of gas will be used for invoking the smart contract functions
and the rest will be paid as a transaction fee to the miners.

### Delegated Transfers [as in ERC 865] [Mostly used in gas less transfers]

![https://lh3.googleusercontent.com/97JnBP6K2N2H5knZPGrVhD49o4xREM-fn4GUG-6EHM6i8Wl2j2cw-2FM9SmWXXVgDq-px7oclymBa7uSNNjKRHp5ou93OiQS8nVmVpIL3qXYF8oPN0W0m7XEjDoen6_UAeigxbDS](https://lh3.googleusercontent.com/97JnBP6K2N2H5knZPGrVhD49o4xREM-fn4GUG-6EHM6i8Wl2j2cw-2FM9SmWXXVgDq-px7oclymBa7uSNNjKRHp5ou93OiQS8nVmVpIL3qXYF8oPN0W0m7XEjDoen6_UAeigxbDS)

In delegated transfers the sender will create the signature of the signed
transaction and will send the signature to the delegator. Delegator will pay for
the transaction fee and invokes the transactions. This can be used also
collecting tokens as payment for the transaction fee which was provided by the
Delegator. Also we can opt not to charge the users for their transactions.

### Bulk transfers [Mostly used for airdrops]

![https://lh3.googleusercontent.com/iSjvB9C1ZsZJrrAD5jh_84AMiqsu41S7sgKXuCBsHrh7osGrDpPajDdZzwd_VNt47n8qChLay2uNU_wPhtF2qaFkE0Y5xdOugu778WPRaFh8jGG4mfC4fjuIDUdtKPiRhYskXKS4](https://lh3.googleusercontent.com/iSjvB9C1ZsZJrrAD5jh_84AMiqsu41S7sgKXuCBsHrh7osGrDpPajDdZzwd_VNt47n8qChLay2uNU_wPhtF2qaFkE0Y5xdOugu778WPRaFh8jGG4mfC4fjuIDUdtKPiRhYskXKS4)

In Bulk transfer, Admin will take a list of the transactions which need to be
transferred to the receiver with the corresponding values to be transferred or
the function to be invoked. And then sends the list of transactions to the Bulk
sending or airdrop smart contract which will indeed have the capabilities to
execute up to 300+ transfers / functional calls in a single transaction. The
bulk transfers transactions were widely used in bulk approval and transfer
transactions during airdrops and token offerings.

### Open Gas Station [Widely used in gas less transactions]

![https://lh5.googleusercontent.com/aipn26A-ReT1E28y0s6X0hDQxSC1CI7afgZn4pJUuSoa2Dsu4bK4e2p0BwbQdElIfaWkdofYlBr8UaOGcXLaXrkoHcY9Q_mLbwInlACiaWXYlNoIPH8TGUR0i3O868DzHj6_ViZ2](https://lh5.googleusercontent.com/aipn26A-ReT1E28y0s6X0hDQxSC1CI7afgZn4pJUuSoa2Dsu4bK4e2p0BwbQdElIfaWkdofYlBr8UaOGcXLaXrkoHcY9Q_mLbwInlACiaWXYlNoIPH8TGUR0i3O868DzHj6_ViZ2)

In open gsn you have to either create a relay of your own and set up a paymaster
contract to pay for the transactions. In the case of the Open GSN Dapp should
collect the users signature and thereby allow the paymaster, TrustedForwarder
contract to initiate the transfers.

A simple dapp for open gsn:
![https://metacoin.opengsn.org/](https://metacoin.opengsn.org/)

### Using meta data for claims - EIP 712 / Biconomy [Gas subsidation]

Reusable Off-Chain Verifiable Claims enables the issuance of off-chain identity
claims, based on the typed signing capabilities defined in EIP712. The standard
provides an important piece of integrating smart contracts with real world
organizational requirements such as meeting regulatory requirements such as KYC,
GDPR, Accredited Investor rules etc. However It is both dangerous and in some
cases illegal (according to EU GDPR rules for example) to record Identity Claims
containing Personal Identifying Information (PII) on an immutable public
database such as the Ethereum blockchain.

Meta Transactions Communicating with dApps currently requires paying ETH for
gas, which limits dapp adoption to ether users. Therefore, contract owners may
wish to pay gas on behalf of the user to reduce friction, or let their users pay
for gas with fiat money or ERC20 tokens. Meta transactions allow a third party
to pay transaction costs on behalf of the user. Note that while users do not
need to own Ether to broadcast such meta-transactions, someone else needs to
spend Ether to allow the content of the transaction to be performed on the
network.

Biconomy’s native meta-tx usage: [metatx-standard](https://github.com/bcnmy/metatx-standard)

![https://lh4.googleusercontent.com/PBMV06Fi9jlacBrNoc-gSs2oQMgVsAZ5u8WsxDMVEl1nkPSe13AyqJOT1xdIQ6ZbmqrWiN0_6Iw7v9eVPjjIo6f0Vupj63gXMmoIAFYx46fWH1cmxMAFp-1v99-Y2toIA5fIxNgr](https://lh4.googleusercontent.com/PBMV06Fi9jlacBrNoc-gSs2oQMgVsAZ5u8WsxDMVEl1nkPSe13AyqJOT1xdIQ6ZbmqrWiN0_6Iw7v9eVPjjIo6f0Vupj63gXMmoIAFYx46fWH1cmxMAFp-1v99-Y2toIA5fIxNgr)

The generalization of meta transactions responds to the problem of user onboarding on Ethereum applications.

### What's the problem with gas ?

As more and more adoption for dapps is increasing exponentially, a lot of transactions are made every second which results in increasing gas prices. Current solutions (based on client-side wallet applications like Metamask) are perfect from a decentralization point of view and very easy to integrate into dapps where users were allowed to choose their flexibile gas price, but in terms of user experience for non-crypto users paying higher gas and managing keys is far too complicated today.

One way to get around this is to standardize on a meta-tx-relayer API such that:

- Any user can pass their signed message to any standard abiding relayer
- There is a discovery protocol similar to the one used in Ethereum clients that allows to find many different active relayers so there is always a backup in case some go down or fail to run the user signed message as transaction
- There is an agreed upon way to incentivize relayers to run these user signed transactions. 

### Drawbacks of Meta Transactions

- Value transfered in meta transactions should always be non zero. I.e (msg.value > 0)
- Value transfer from EOA (externally owned address) is not possible via meta transactions.
- For contract interactions which involve Erc20 transfers meta transactions looks appealing.

Boson contacts hadn't yet incorporated the features of native Metta transactions due the above listed drawbacks. However efforts are continually made for ease of usage for dapp users. Some of which include implementing new approachs in takeling High gas price so that users don't need spend a lot of their funds in paying for gas while interacting with the Boson contacts, Alternative approachs include subsidizing gas payments to an extent.
