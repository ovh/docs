---
title: AI Endpoints - Facturation et cycle de vie (EN)
excerpt: "Découvrez comment sont facturés les modèles AI Endpoints chez OVHcloud"
updated: 2025-10-20
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](https://endpoints.ai.cloud.ovh.net/) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models. The platform is designed to be simple, secure, and intuitive, making it an ideal solution for developers who want to enhance their applications with AI capabilities without extensive AI expertise or concerns about data privacy.

## Objective

This documentation provides an overview of the billing and lifecycle management of various AI model categories offered on [AI Endpoints](https://endpoints.ai.cloud.ovh.net/). We will cover the cost structure for Large Language Models (LLM), Audio models, Image models, Embedding models, and more. Additionally, we will explain the lifecycle of our models, including model decommissioning and redirecting, ensuring that you have all the necessary information to effectively manage your AI Endpoints.

## AI Endpoints model lifecycle

OVHcloud AI Endpoints follows a model lifecycle process to ensure a seamless experience for our customers. This process includes the following steps:

- **Track model usage metrics**: We continuously monitor the usage of each model on our platform to identify underutilized or obsolete models that may no longer serve the needs of our customers.
- **Decommissioning decision**: Once a model is identified as a candidate for decommissioning, we make a decision to retire the model. At this point, we communicate the decision to our customers through official deprecation notices on our website and the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud).
- **Grace period**: After the deprecation notice is published, a grace period of 30 days is provided for all models except embedding models, which will have a grace period of 3 months. This period allows customers to transition to an alternative model. During this time, we offer guidance on recommended replacements and migration steps to ensure a smooth transition.
- **Removal from active deployment**: Once the grace period ends, the model is removed from active deployment.
- **AI Endpoints changelog**: Decommissionings are highlighted in the [AI Endpoints Changelog](https://endpoints.ai.cloud.ovh.net/changelog), ensuring that customers are informed about the changes in the platform.

By following this model lifecycle process, OVHcloud ensures that customers are well-informed and prepared for any changes, while also maintaining a lean and up-to-date selection of AI models.

## Billing principles

For detailed information on models, quantization, pricing units, and prices, please visit the `AI Endpoints`{.action} section of the `AI and Machine Learning` drop-down menu, on the [OVHcloud website](/links/public-cloud/prices-ai):

![ai-endpoints-pricing-overview](images/pricing-overview.png){.thumbnail}

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.