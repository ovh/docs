---
title: AI Training Capabilities and Limitations
slug: capabilities
excerpt: Find out about current capabilities and limitations of AI Training powered by $partner_full
section: General
order: 0
---
*Last updated 7th September, 2020.*

## Capabilities and known limits

### Jobs resources are limited to:

-   A minimum of 1 GPU and a maximum of 4 GPU per job
-   CPU and Memory resources are not customisable
-   No duration limitation on job execution

### Available ports to public network

-   FTP (21)
-   HTTP (443, 80, 8443, 8080, 9090)
-   Tensorboard (6006)
-   JupyterLab (8888)
-   MySQL (3306)
-   PostgreSQL (5432)
-   Microsoft SQL Server (1433)
-   MongoDB (27017, 27018, 27019)

### OVHcloud vRack

-   AI Training can not use or access OVHcloud vRack.

### Available regions

-   GRA (Gravelines in France)

### Storage

There are two kinds of storage within **AI Training**, a persistent one based on the OVHcloud Object Storage and a non-persistent one for the job execution (cache).

There is no guarantee for the data stored in the cache storage (no backups) and we reserve the right to delete any data unused for an extended period of time (about 7 days).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/c/platform/ai-ml)
