---
layout: docs
title: "Boson Protocol: Docs: Core Concepts: Core Exchange Mechanism"
short_title: "Core Exchange Mechanism"
permalink: /core-concepts/core-exchange-mechanism/
---
# Core exchange mechanism

The core exchange mechanism can be viewed as a decision support system which 
coordinates exchange, governs reversals and handles the main load of disputes 
in order to significantly reduce arbitration cost and friction versus 
arbitrated protocols. The mechanism is designed as a sequential game in which 
Buyer and Seller commit deposits up-front, promoting fair behaviour.

### Towards an Ideal Arbitrated System

Boson Protocol implements a 2-sided deposit structure within a sequential game, 
which automates the mediation of disputes and mitigates reversal losses by 
ensuring that both agents are incentivized to behave fairly. However, first we 
conceive of an ideal system which is highly automated, has minimum viable 
functionality for coordinating commercial exchange, and in which disputes and 
reversals are mediated by an ideal arbitrator.

The objective function of the system is:

***to maximize the supply of no-complaint voucher redemptions.***

The core exchange process proceeds as follows:

- **Offer**: This involves a Seller listing an item; thereby specifying the 
  item's price and deposit amounts, in addition to the desired payment currency 
  and the listing's validity period. The Seller's deposit is then placed in 
  escrow.
- **Commit**: This involves a Buyer committing to purchase an item; thereby 
  paying the seller-defined deposit and the item price, placing both in escrow.

Deposit amounts are variable and form part of the commercial terms of the 
exchange. Deposit levels are proposed by the Seller and then accepted by the 
Buyer. It is possible that the same underlying item could be offered via 
multiple vouchers, each with differing Buyer and Seller deposit levels, 
indicating different levels of commitment to redemption and quality.
We elaborate on this below.

### Practical Atomicity

For the happy path, at point of exchange the Buyer unilaterally signs a 
redemption transaction in return for the Seller transferring the item. If, and 
only if, the redemption transaction is signed, the system will transfer the 
payment amount to the Seller. We refer to this as *practical atomicity*, where 
*practical* refers to the assumption that a Buyer who signs the redemption 
receives the item. The transaction is *practical* rather than absolute, because 
it is as atomic as handing over cash for goods. With a cash transaction the 
Seller could take the cash and not deliver the service, but this is not a 
practical concern. Therefore, we contend that this is atomic enough for most 
commercial purposes.

### Transaction Reversibility

Due to the requirement for atomicity, in addition to the fact that not all 
promises will be fulfilled, transactions require the property of reversibility. 
As a consequence, the system enables a Buyer to trigger a refund transaction 
as well as automatically reversing transactions at expiry of their validity 
period. The options available after the commit stage are: 

- **Redeem**: This involves the Buyer redeeming their purchased item (i.e. 
  gaining ownership of said item). At this point, the payment amount is 
  released to the Seller.
- **Refund**: This involves the Buyer triggering a refund request. Payment is 
  then returned to the Buyer.
- **Wait**: No action taken and the validity period expires. Payment is then 
  returned to the Buyer.

However, transaction reversibility introduces the challenges of reversal costs 
and dispute mediation identified in the original Bitcoin whitepaper. The 
example of buying a used car illustrates these challenges.

Take the following example:

Alice views a used car online, which is offered for sale at a cost of $10,000 
and with 100,000 miles on the clock. Alice makes an offer to Bob of $10,000, 
which Bob accepts. Alice, who lives in London, agrees to travel the following 
weekend to complete the exchange with Bob, who lives in Leeds. If Alice fails 
to arrive in Leeds to complete the exchange, Bob has missed out on other 
opportunities for exchange, therefore incurring a loss. Conversely, if Alice 
arrives in Leeds and Bob has already sold the car, then Alice incurs a loss.

### Dispute mediation

If Buyer and Seller beneficiaries make conflicting claims on real world events, 
then smart contracts cannot determine which version of reality to trust. 
Taking our previous example: if Alice arrives in Leeds to complete the exchange 
and detects that the car has actually driven 200,000 miles, Alice has a quality 
dispute. This, and the above, problems are addressed by the mechanism:

The Buyer has the option to unilaterally report quality (in addition to other) 
issues as follows:

- **Complain**: A Buyer can only complain after either redeeming, refunding or 
  waiting for the validity period to expire. The decision to do this will 
  affect the final deposits payout.

The Seller has the option to address issues as follows:

- **Cancel or Fault**: The Seller can choose to cancel the transaction at any 
  point. However if this is done after the Buyer redeems, then this is 
  considered an admission of fault. This decision will affect the final deposit 
  payouts.

Summary

Add Game Tree