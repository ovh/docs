---
title: AI Endpoints - Caractéristiques, capacités et limites (EN)
excerpt: Découvrez les principales caractéristiques, capacités et limites de AI Endpoints
updated: 2025-08-18
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](https://endpoints.ai.cloud.ovh.net/) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models. The platform is designed to be simple, secure, and intuitive, making it an ideal solution for developers who want to enhance their applications with AI capabilities without extensive AI expertise or concerns about data privacy.

## Objective

This page provides the technical features, capabilities and limitations of [AI Endpoints](https://endpoints.ai.cloud.ovh.net/).

## Features

### Available features

| Feature                                    | Details                                                                                                                                                                                                                                      |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Large Selection of Models                        | AI Endpoints offers a diverse range of pre-trained AI models, covering categories such as LLMs (Visual, Reasoning, Coding), Audio Analysis, Embeddings, Natural Language Processing, Translation, Image Generation, and Computer Vision. For a full list of models, please visit the [AI Endpoints Catalog Page](https://endpoints.ai.cloud.ovh.net/catalog).                                                                          |
| Model Metrics | Users can access various metrics in the [OVHcloud Control Panel](/links/manager), such as the number of calls made per model, input and output tokens for large language models (LLMs), and other usage data. These insights can help you manage costs and gain a better understanding of how your applications are using AI capabilities.                                                                                              |
| Data Privacy and Sovereignty | OVHcloud prioritizes data privacy and sovereignty, ensuring that AI models accessed via AI Endpoints are fully compliant with strict European regulations. Our infrastructure, located in Gravelines, France, adheres to European data protection regulations. Data is not stored or shared during or after model use, providing users with peace of mind that their data is secure and protected.                                                                          |
| Access with Personalized Access Keys | To ensure secure and authenticated access to model APIs, users need to provide an API access key in each request. Access keys can be easily created by following the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide. API keys are linked to a Public Cloud project. We provide the flexibility to manage multiple keys for various projects or teams. Additionally, each access key comes with adjustable validity periods, allowing users to tailor their access to specific needs.
| JSON Mode (JSON Object)                       | AI Endpoints supports JSON mode, which ensures the model's output is always a syntactically valid JSON. This is ideal when you want a reliably parseable JSON format.                                                                   |
| Function Calling (Tools)  | Lets the model invoke pre‑defined functions (tools).         |
| Structured Outputs (JSON Schema) | Builds on JSON Mode by enforcing a specified JSON schema, ensuring outputs strictly adhere to your defined properties and types.     |

## Planned Features

For upcoming developments, check our [Public Cloud Roadmap](https://github.com/orgs/ovh/projects/16/views/1?sliceBy%5Bvalue%5D=AI+Endpoints) to stay informed about new features and model updates.

## Capabilities

### Compatibility with OpenAI API

AI Endpoints is designed to be compatible with the OpenAI API, making it easy to integrate with existing applications and workflows. This compatibility means that you can take advantage of AI capabilities without having to make major changes to your existing technology stack, allowing you to get up and running quickly and easily.

### Flexible usage

AI Endpoints' APIs are language-agnostic. It enables developers to use any programming language or technology of their choice when working with our APIs, providing them with the freedom to build and integrate AI capabilities according to their requirements and preferences.

## Limitations

### Model rate limit

When using AI Endpoints, the **following rate limits apply**:

- **Anonymous**: 2 requests per minute, per IP and per model.
- **Authenticated with an API access key**: 400 requests per minute, per Public Cloud project and per model.

If you exceed this limit, a **429 error code** will be returned.

If you require higher usage, please **[get in touch with us](https://help.ovhcloud.com/csm?id=csm_get_help)** to discuss increasing your rate limits.

### Payload size limits

To ensure security and stability, AI Endpoints APIs enforce default request payload size limits:

Most endpoints are limited to **2 MB** per request body. This applies to common input types such as String and Json parameters.

However some endpoints, like those handling audio transcriptions, are specifically configured to accept larger payloads due to their use cases. These endpoints can handle larger audio files, but are limited by audio file size and duration. The specific limits of these endpoints will be indicated in their respective model documentation.

### No usage limit

As of now, the AI Endpoints platform does not impose any usage limits for API requests, apart from the rate and payload size limiting.

However, we are considering introducing a usage limit feature in the future. This feature will allow you to set a limit on the number of tokens, characters, seconds of audio consumed, depending on your usage, providing better control and management over AI Endpoints consumption.

## Going further

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

To discover how to build complete and powerful applications using AI Endpoints, explore our dedicated [AI Endpoints guides](/products/public-cloud-ai-and-machine-learning-ai-endpoints).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
