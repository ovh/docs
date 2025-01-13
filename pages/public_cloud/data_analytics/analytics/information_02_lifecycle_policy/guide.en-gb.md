---
title: Analytics - Lifecycle policy
excerpt: Lifecycle policy for Analytics engines
updated: 2025-01-13
---

## Objective

OVHcloud Analytics enables you to focus on building and deploying analytics-driven cloud applications while OVHcloud handles the underlying infrastructure and maintenance.
Each service leverages powerful third-party analytics engines, maintained by third-party companies or communities such as Apache Kafka, Grafana, and OpenSearch.

**This guide explains the OVHcloud policy for major versions of analytics engines provided within its Analytics services.**

## Lifecycle policy

This policy is being provided to help customers understand the lifecycle of OVHcloud Analytics, in order to anticipate and prepare transitions to newer versions.

**End Of Life (EOL)** refers to the deadline after which affected Analytics services are deprecated and will no longer be supported nor maintained.

OVHcloud aims to follow the EOL schedule set by the original authors and maintainers of the analytics engines, also known as upstream projects. Once the upstream project retires a specific version, it no longer receives security updates or critical bug fixes.

Continued use of outdated services means they no longer offer our customers the level of protection their business needs. Therefore, by following the upstream project's EOL schedule, we ensure that OVHcloud services are always running on supported versions of the analytics engines.

### Service coverage

This lifecycle policy is applicable to:

- All Analytics services except Data Processing.
    - Including all the service plans (Essential, Business, Enterprise, Production, Advanced).
    - And all proposed analytics engine, such as Kafka, Grafana, ...
    - Whatever the state is, if they are **up and running** or in a **sleeping state** (powered off, waiting for payment).

### Providing new major versions

Once a new major version of an analytics engine is considered stable, OVHcloud will do its best to make it available as soon as possible.
Since many factors can come into play, we cannot provide an exact timeline or commitment.

### Prior the EOL

When OVHcloud defines the EOL date for a service major version:

- Customers will receive an EOL email announcement via their main contact point (Administrative contact).
- The OVHcloud Control Panel will also show an EOL notification for affected services.
- Email reminders may also be sent to customers.

### Upon the EOL

Once the EOL date is reached:

- Affected **running services** will be **automatically upgraded to the latest available version**. For example, if the latest version is Kafka 3, then upon Kafka 1.6 EOL, it will be upgraded to the latest Kafka 3 instead of Kafka 2.
- Affected **sleeping state** (powered-off, ...) services **will no longer be accessible and their backups will be deleted**.

### Potential impacts

New versions of analytics engines can introduce minor changes but also breaking changes, potentially causing malfunctions in your code and applications. A specific feature might not work properly, or your entire website or application could become non-functional and unavailable. These **impacts cannot be predicted by OVHcloud**, and customers are responsible for their own code.
We recommend consulting the official documentation of the analytics engine to review newly introduced features and/or deprecated ones.

## Recommendations for upgrades

We highly recommend performing the version upgrade well before the EOL so that you can test compatibility for any breaking changes, plan for unforeseen issues, and migrate to the newer version at your own schedule.

Analytics services offer a forking feature (a copy) as an efficient tool to verify the version upgrade. This allows you to safely test compatibility without committing your production services to a one-way upgrade.

To perform a fork, navigate to the "Overview" page of your service, and scroll down until you see a "New service fork" button. This will create a separate service instance cloned from the current service's backups.

## EOL Announcements for major versions

### Kafka

Analytics for Kafka *major.minor* version will reach its EOL approximately one year after it's made available on Analytics.

| **Kafka Version** | **OVHcloud EOL** | **Availability on Analytics** |
|-------------------|------------------|-------------------------------------------|
| 3.4.x             | 2024-05-13       | 2023-05-09                                |
| 3.5.x             | 2024-07-31       | 2023-07-31                                |
| 3.6.x             | 2024-10-18       | 2023-10-18                                |
| 3.7.x             | 2025-04-17       | 2024-04-17                                |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
