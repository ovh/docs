---
title: Data Processing End-of-Support and End-of-Life policies
excerpt: Find out what are the current lifecycle policies of the OVHcloud Data Processing Platform 
updated: 2023-09-18
---

The OVHcloud Data Processing service provides Apache Spark serverless jobs. New stable versions are provided by Apache on a regular basis.
Earlier versions proposed by OVHcloud can reach their End-Of-Support (EOS) or End-Of-Life (EOL), mainly because of the life cycle of the underlying support from the Apache community. 

These policies are provided to help customers understanding the life cycle of the OVHcloud Data Processing Service, so they can anticipate and prepare the transition to the newest versions.

## General policy guidelines and definitions 

### End-Of-Support (EoS)

Apache Spark versions are expressed as `x.y.z`, where `x` is the major version, `y` is the feature version, and `z` is the maintenance version. Feature release branches are generally maintained by the Apache Spark community with bug fix releases for a period of 18 months. 

For example, branch 2.3.x is no longer considered maintained as of September 2019, 18 months after the release of 2.3.0 in February 2018. No more 2.3.x releases should be expected after that point, even for bug fixes.

OVHcloud will provide support for each version for 9 months after the version was made available in our Data Processing service. The only exception is if there are no newer versions available. Bear in mind that this is support on the usage of our service and not on Apache Spark itself.

As a general rule, OVHcloud will not force a feature version upgrade for versions that reached End-of-Support. Keep in mind that even though we will keep them running, they will no longer be covered by OVHcloud support. 

### End-Of-Life (EOL)

Each version will be available in the OVHcloud Data Processing service for 12 months, starting on the day we make it available. Once the 12 months period is reached, the version won't be available anymore. The only exception being if there are no newer versions available.

In the unlikely case that one of these versions exposes a security breach that puts its own infrastructure at risk, OVHcloud may remove the availability of the version containing the security breach.

### Spark versions planned EOS/EOL dates

You can find below the planned EOS/EOL dates for each version released :

| Version     | End of Support | End of Life | 
| -------     | -------------- | ----------- |
| Spark 3.5.0 | -              | -           |
| Spark 3.4.1 | 2024-04-12     | 2024-07-12  |
| Spark 3.4.0 | 2024-02-05     | 2024-05-05  |
| Spark 3.3.3 | 2024-06-15     | 2024-09-15  |
| Spark 3.3.2 | 2023-12-13     | 2024-03-13  |
| Spark 3.3.1 | 2023-09-30     | 2023-12-31  |
| Spark 3.3.0 | 2023-09-30     | 2023-12-31  |
| Spark 3.2.4 | 2024-02-05     | 2024-05-05  |
| Spark 3.2.3 | 2023-09-30     | 2023-12-31  |
| Spark 3.2.2 | 2023-09-30     | 2023-12-31  |
| Spark 3.2.1 | 2023-09-30     | 2023-12-31  |
| Spark 3.1.3 | 2023-12-31     | 2023-03-31  |
| Spark 3.0.3 | 2023-09-30     | 2023-12-31  |
| Spark 3.0.1 | 2023-09-30     | 2023-12-31  |
| Spark 2.4.3 | 2023-09-30     | 2023-12-31  |

## Feedback

Please send us your questions, feedback and suggestions to improve the service: 

- On OVHcloud community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/)
- On our [Discord](https://discord.gg/VVvZg8NCQM){.external} in the channel **#dataprocessing-spark**
