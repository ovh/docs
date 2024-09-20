---
title: MongoDB - Transitioning to the new offerings & automated migration
excerpt: Learn about the transition from MongoDB's current offerings to the new plans and understand the automated migration process to effectively plan your transition
updated: 2024-07-09
---

## Objective

**This document aims to inform customers about changes to MongoDB offerings and the automated migration process, enabling clear understanding of the stakes and effective anticipation of the operation.**

## Requirements

- Current subscription to MongoDB Essential, Business, or Enterprise services with OVHcloud.
- Knowledge of your current service plan and requirements.

## Instructions

### End of Sale Notification

The introduction of the new MongoDB Discovery, Production, and Advanced plans on December 7, 2023, marked the end of sale for the MongoDB Essential, Business, and Enterprise offers, in line with our product lifecycle policy. These new plans offer a unique opportunity to use MongoDB for free, tailored to our customers' usage.

### End of Life and Automated Migration

#### Step 1: Migration Schedule

May 31, 2024 is the end of life date for the MongoDB Essential, Business, and Enterprise offers. Services under these plans will be automatically migrated to the new offering:

- Essential and Business services to the Production plan.
- Enterprise services to the Advanced plan.

This migration is planned as regular maintenance and can be manually triggered before this date.

#### Understanding the Impact Through Scenarios

This section describes the technical changes and their impacts on the service price with an illustration through 2 scenarios. The first one when no additional storage is necessary and the service uses only the base storage. The second one when additional storage is ordered to match the previous offering settings.

#### Step 2: Preparing for Migration

- **For Essential Services:** They will be migrated to the Production plan, transitioning from a single node cluster to a three-member replica set. The DB1-X service flavor will be converted to DB2-X, with the same vCore and memory but reduced base storage. Importantly, the underlying technology and performance characteristics will not change.
    - **First scenario:** The average price increases by a factor of 2.88.
    - **Second scenario:** The average price increases by a factor of 3.58.

- **For Business Services:** These services, already configured as a three-member replica set, will lose the capability to scale up the number of nodes in the Production plan. The switch from DB1-X to DB2-X flavor will also maintain the same vCores and memory, with reduced base storage, while the underlying technology and performance characteristics remain unchanged.
    - **First scenario:** The average price decreases by a factor of 0.96.
    - **Second scenario:** The average price increases by a factor of 1.19.


- **For Enterprise Services:** Enterprise services will transition to the Advanced plan, with broad price reductions. The service flavor conversion from DB1-X to DB2-X will retain the same amount of vCore and memory but offer less base storage, without altering the underlying technology or affecting performance.
    - **First scenario:** The average price decreases by a factor of 0.87.
    - **Second scenario:** The average price increases by a factor of 0.97.

**Please note that the service can be terminated at any time without fees if these changes do not meet your needs.**

#### How to Anticipate the Migration

Migration can be initiated now towards the new Production and Advanced plans by following [the migration guide](/pages/public_cloud/public_cloud_databases/mongodb_12_howto_migrate_to_production_or_advanced).

If your workload is small enough to fit the Discovery plan, a migration to this plan can be considered by following [this guide](/pages/public_cloud/public_cloud_databases/mongodb_11_howto_migrate_to_discovery). 

Otherwise, once the migration operation is scheduled, it will be automatically applied at the scheduled time but can also be launched manually before this date.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
