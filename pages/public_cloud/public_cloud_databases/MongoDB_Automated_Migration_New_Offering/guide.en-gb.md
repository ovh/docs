---
title: Transitioning to New MongoDB Offerings & Automated Migration Guide
excerpt: Learn about the transition from MongoDB's current offerings to the new plans and understand the automated migration process to effectively plan your transition.
updated: 2024-03-28
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

May 31, 2024, will signify the end of life for the MongoDB Essential, Business, and Enterprise offers. Services under these plans will be automatically migrated to the new offering:
- Essential and Business services to the Production plan.
- Enterprise services to the Advanced plan.

This migration is planned as regular maintenance and can be manually triggered before this date.

#### Step 2: Preparing for Migration

- **For Essential Services:** They will be migrated to the Production plan, transitioning from a single node cluster to a three-member replica set. The DB1-X service flavor will be converted to DB2-X, with the same vCore and memory but reduced base storage. Importantly, the underlying technology and performance characteristics will not change. 
    - **First scenario (base disk):** The average price increase by a 2.88 factor.
    - **Second scenario (iso disk essential):** The average price increase by a 4.32 factor.
  These changes will result in an increase in the final price of the service ([Pricing Details](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).

- **For Business Services:** These services, already configured as a three-member replica set, will lose the capability to scale up in the Production plan. The switch from DB1-X to DB2-X flavor will also maintain the same vCores and memory, with reduced base storage, while the underlying technology and performance characteristics remain unchanged.
    - **First scenario (base disk):** The average price decrease by a 0.96 factor.
    - **Second scenario (iso disk essential):** The average price increase by a 1.44 factor.
  Depending on these changes, the final price could decrease with less storage required or increase with a significant need for additional storage ([Pricing Details](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).

- **For Enterprise Services:** Enterprise services will transition to the Advanced plan, with broad price reductions. The service flavor conversion from DB1-X to DB2-X will retain the same amount of vCore and memory but offer less base storage, without altering the underlying technology or affecting performance.
    - **First scenario (base disk):** The average price decrease by a 0.87 factor.
    - **Second scenario (iso disk essential):** The average price increase by a 1.07 factor.
  Most services should see a lower final price due to these global price reductions and reduced storage requirements. However, prices could increase for services needing significant additional storage. For a comprehensive view of pricing, check ([Pricing Details](https://www.ovhcloud.com/en-gb/public-cloud/prices/)).
  
#### How to Anticipate the Migration

Migration can be initiated now towards the new Production and Advanced plans by following [the migration guide](https://help.ovhcloud.com/csm/en-gb-public-cloud-databases-mongodb-migrate-production-advanced-cli?id=kb_article_view&sysparm_article=KB0061012).

If your workload is small enough to fit the Discovery plan, a migration to this plan can be considered by following [this guide](https://help.ovhcloud.com/csm/en-gb-public-cloud-databases-mongodb-migrate-discovery-cli?id=kb_article_view&sysparm_article=KB0060713). 

Otherwise, once the migration operation is scheduled, it will be automatically applied at the scheduled time but can also be launched manually before this date.

## Go Further

Join our community of users on <https://community.ovh.com/en/>.
