---
title: 'Transitioning to the New MongoDB Offering and Automating Migration'
excerpt: 'Explore the changes from the current to the new MongoDB offering and understand the automated migration process to make informed decisions.'
updated: 2024-03-27
---

## Objective

**This guide explains the transition from the current MongoDB (Essential, Business, Enterprise) offerings to the new ones (Discovery, Business, Advanced) and outlines the process for automated migration.** 

## Requirements

- An active MongoDB Essential, Business, or Enterprise service with OVHcloud.
- Understanding of your current MongoDB service plan and usage.

## Instructions

### End of Sale

On 7th December 2023, we introduced our new MongoDB offerings: Discovery, Production, and Advanced plans. Tailored to our customers' usage, these plans provide enhanced features and even a unique opportunity to start using MongoDB for free. This launch marks the end of sale for our MongoDB Essential, Business, and Enterprise offers, in line with our product lifecycle policy.

### End of Life and Automated Migration

By 31st May 2024, the MongoDB Essential, Business, and Enterprise offers will reach their end of life. Services still on these plans will be automatically migrated to the corresponding new offering. Essential and Business services will transition to the Production plan, while Enterprise services will move to the Advanced plan. This migration will take place as part of a regular maintenance operation, allowing for manual initiation before the scheduled date.

#### What Changes

- **Essential Services:** Transition to the Production plan will change the structure from a single node cluster to a three-member replica set. The DB1-X flavor will convert to the equivalent DB2-X flavor, maintaining the same vCore and memory but with reduced base storage. This change may increase the final service price (details at [OVHcloud Pricing](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).

- **Business Services:** These will also migrate to the Production plan with a fixed three-member replica set. The scalability of nodes will be fixed, and the DB1-X to DB2-X flavor change will apply, affecting the base storage and potentially the price, depending on additional storage needs (details at [OVHcloud Pricing](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).

- **Enterprise Services:** Migrating to the Advanced plan will generally result in lower prices due to overall reductions and the transition from DB1-X to DB2-X flavors, affecting base storage. Price adjustments depend on additional storage requirements (details at [OVHcloud Pricing](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).

#### How to Anticipate the Migration

Services can proactively migrate to the new Production and Advanced plans using [the migration guide](https://help.ovhcloud.com/csm/en-gb-public-cloud-databases-mongodb-migrate-production-advanced-cli). For workloads suitable for the Discovery plan, consider migration following [this guide](https://help.ovhcloud.com/csm/en-gb-public-cloud-databases-mongodb-migrate-discovery-cli). Otherwise, the migration will automatically occur at the scheduled time but can be initiated manually beforehand.

## Go further

For more detailed information and support, join our community on <https://community.ovh.com/en/>.
