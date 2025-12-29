---
title: "How to configure the Anti-DDos Infrastructure for Solana"
excerpt: "Learn how to leverage the OVHcloud Anti-DDoS infrastructure to protect your Solana nodes without harming their functionality"
updated: 2025-10-13
---

> [!primary]
> This guide's instructions and examples are currently focused exclusively on the **Solana** blockchain.
>

## Objective

This guide's objective is to help you better understand the OVHcloud Anti-DDoS Infrastructure, and to provide instructions on how to configure effective protection without harming legitimate network traffic relative to the blockchain.

## Requirements

- At least one [dedicated server](/links/bare-metal/bare-metal) which respects the desired blockchain's specific hardware requirements.

## Introduction to Blockchain

A blockchain is a decentralized, distributed digital ledger that records transactions across many computers, ensuring that the data cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.

This technology creates a tamper-proof and transparent record of information, such as financial transactions, making it secure and trustworthy.

In some cases, communication spikes can trigger the Anti-DDoS Infrastructure and lead to the detection of some traffic patterns as false positives.

## Instructions

To avoid having your network traffic suspected or blocked by the Anti-DDoS Infrastructure (as a false positive detection), we strongly recommend that you provide the IP addresses of your nodes to our support teams. This will enable us to create a customised Solana profile for better protection and uninterrupted operation.

To get started, create a [support request ticket](https://help.ovhcloud.com/csm?id=csm_get_help) with the following options: Incident -> Public IP -> [x] This service is not listed -> Create a support request -> `Next`{.action}.

Fill in the short description with **"Blockchain Solana Anti-DDoS tuning"**, then list your Solana nodes' IPv4 addresses, their ports, the types of servers that host the nodes, and the size of your cluster (the approximate number of clients connected) in the issue description.

Please note that in the future, you will be able to control Anti-DDoS behaviour directly through our Control Panel.

If you are not sure about which elements you should send to our teams, you can refer to the following use case.

### Use Cas : Solana

Solana is a high-performance blockchain platform known for its exceptional speed and low transaction costs, making it a popular alternative for decentralized applications. It achieves this by using a unique cryptographic clock called Proof of History (PoH), which timestamps transactions to enable parallel processing and greater efficiency. This system is paired with a Proof of Stake (PoS) consensus mechanism, in which validators are chosen based on their SOL stake, thus ensuring the security and decentralisation of the network.

Solana's architecture also utilizes a combination of protocols like Tower BFT, Turbine, Gulf Stream and Sealevel to optimize block propagation, transaction processing, and smart contract execution, all contributing to its high speed and efficiency.

There are typically two types of nodes:

- **Validator nodes**: (also called consensus nodes), which secure the Solana network by validating transactions and participating in consensus.
- **RPC nodes**: which act as access points for users and applications, allowing them to submit transactions and query blockchain data via APIs *without* participating in consensus.

Solana nodes use the following network protocols and ports:

| Protocol | Usage | Port | Node Types |
| :--- | :--- | :--- | :--- |
| Gossip | Node discovery and cluster info sharing | TCP/UDP 8000-10000 (default 8001) | Validator / RPC |
| JSON-RPC over HTTP | Used by applications to query the blockchain and submit transactions | TCP 8899 | RPC |
| JSON-RPC WebSockets API | Used by applications to query the blockchain and submit transactions | TCP 8900 | RPC |
| QUIC | Ingest transactions from clients, improving network reliability and efficiency | UDP 8000-8002 (may vary) | Validator / RPC |
| Turbine | Network state dissemination and block/shred propagation | TCP/UDP 8000-10000 (default 8003) | Validator / RPC |

You can find the hardware requirements for Solana Validator and RPC nodes in [the official Anza documentation](https://docs.anza.xyz/operations/requirements).

## Go further

Join our [community of users](/links/community).
