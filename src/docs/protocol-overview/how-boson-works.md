---
layout: docs
title: "Boson Protocol: Docs: Protocol Overview: How Boson Works"
short_title: "How Boson Works"
permalink: /protocol-overview/how-boson-works/
---
# How Boson works

![How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled.png](How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled.png)

Boson is a *permissionless market exchange protocol*, which handles dispute 
mediations and reversals in order to increase trust in P2P transactions. By 
leveraging a dynamic game the protocol enables atomic automated transactions. 
It is implemented in a system of non-upgradeable smart contracts on the 
[Ethereum](https://ethereum.org/) blockchain. The protocol functions as a 
commercial primitive or "lego brick", thereby enabling digital and 
decentralized applications to be easily developed on top of it. This obviates 
the requirement for trusted intermediaries; instead prioritizing 
**decentralization**, cost minimization and **trustless value exchange**. Boson 
is **open-source software** licensed under the 
[LGPL3](https://www.gnu.org/licenses/lgpl-3.0.en.html).

- overview
- core mechanism
- commitment token

## Core mechanism

Boson’s core mechanism is a type of sequential game in which buyer and seller 
commit deposits up-front. Game rules and the final deposit transfer scheme is 
designed in such a way that coordinates transactions and incentivizes parties 
to behave fairly. Or more formally, we say that: "subgame perfect equilibrium 
implementation corresponds to the honest behavior of both players."

![How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%201.png](How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%201.png)

## Commitment token

![How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%202.png](How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%202.png)

1. create voucherset - Seller lists item (which mints the voucher set )*
2. commit / request voucher (Buyer commits to buying this item by making paying 
and submitting the deposit)*
3. redeem (Payment is transferred to seller)*
4. deposits returned (to both transaction parties)*
5. unhappy
    - complain - Buyer only
    - cancel or fault - Seller only
    - refund - Buyer only
    - expiry

When a seller lists an item they specify the item price and deposit amounts, 
in addition to the desired payment currency and the listing's validity period. 
This validity period includes the start date and expiry date, the first of 
which is from when this item can be redeemed. This mints a voucher set 
following the ERC-1155 NFT standard. The seller pays their deposit as part of 
the listing process, placing it in ESCROW. When a buyer commits to purchase an 
item, they pay the seller-defined deposit and the item price, placing both in 
ESCROW. This extracts a voucher from the voucher set, following the ERC-721 
NFT standard. The buyer then has the option to redeem their purchased item 
(i.e., gaining ownership of said item). At this point, the payment amount is 
released to the seller. Both the buyer and seller deposits are released to the 
relevant party after the wait period expires. (INCLUDE PAYOUTS TABLE TO SHOW 
HOW THESE RELEASED DEPOSIT AMOUNTS ARE CALCULATED).

Suppliers are able to create promise vouchers, which entitle purchasers to 
products or services. Boson uses the 
[ERC-1155 token standard](https://eips.ethereum.org/EIPS/eip-1155). An Issuer/
Supplier offers defines the properties and deposit requirements for a 
VoucherSet. 

The escrow is used in order to allow for secure payment transfer between buyer 
and seller upon successful exchange. It is also used to hold deposits from both 
sides that allows for the use of a dynamic game if a dispute was to arise in a 
P2P transaction. 

The contract allows parties to make payments and deposits in both Ether or 
tokens that conform to the ERC20 standard. The issuer is responsible for 
defining the asset that they would like to transact with for both payment and 
deposits for a certain VoucherSet. 

![How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%203.png](How%20boson%20works%20190bf755c2b84577b4e2b7a8fd6c93b2/Untitled%203.png)

<Image of voucher minting, committed starting status, and 3 account balances>

2. A buyer must then commit both the payment and deposit amounts defined by 
issuer/seller upon their commitment to transact. When a Buyer commits to 
purchase a voucher, an NFT token, is minted to fill the order. This is then 
sent to the buyers connected ethereum wallet and their payment and deposit is 
held in escrow.

<image of status change to redeemed, and 3 account balances (still escrowed, but payment transferred to seller>

3. When the buyer redeems the voucher the smart contract transfers the payment 
amount to the supplier (still held in escrow or supplier account???). This 
starts the timer on the wait period **(???)** prior to deposits being returned 
where the buyer is able to complain.

5. The amount of deposit that gets burned by each party makes honest play 
equivalent to optimal play if both parties behave rationally. Our deposit 
slashing algorithm optimises for <inset objective value here>. Where deposits 
are slashed from either party they are transferred to an address controlled by 
Boson admins or eventually DAO. During the wait period the buyer is able to 
complain with request for refund. The seller then has the ability to respond 
with CancelOrFault, which refunds the amount to the buyer and both get their 
deposits returned to their ethereum wallet. The seller also has the ability to 
execute CancelOrFault prior to buyer complaint in order to support usecase 
where the supplier receives a complaint from other channels. If the seller does 
not admit fault during the wait period then WHAT HAPPENS TO DEPOSITS? If the 
voucher is not redeemed with the seller during the wait period then it changed 
to an expired status. This DOES WHAT TO PAYMENT AND DEPOSITS?

<image of status change to complain, and 3 account balances stay the same>

<image of status change to cancelOrFault, and 3 account balances stay the same>

<image of status change to Refunded, and 3 account balances stay the same>

<image of status change to Expired, and 3 account balances stay the same>

<image of status change to Final>

6. here is a background process that runs and moves the voucher to Final status 
when...???

## Fees

Fees collected are 0 at present with the focus on enabling growth and reducing 
friction. In the future a minimally extractive fee will be introduced.

## Note on beta

This is very much our beta launch of our mechanism and the first step in our 
work for bringing greater trust and protection to buyers in dCommerce to allow 
them to benefit from the promises of interoperability, specialised flows from 
composable pieces, and of course protection from all the ills of intermediaries.
