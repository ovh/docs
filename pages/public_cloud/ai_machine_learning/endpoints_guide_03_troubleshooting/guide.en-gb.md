---
title: AI Endpoints - Troubleshooting
excerpt: Find out how to resolve issues when using AI Endpoints
updated: 2026-02-06
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

This tutorial provides guidance on how to resolve common issues that may arise when using [AI Endpoints](/links/public-cloud/ai-endpoints).

## Common questions

### What is AI Endpoints and how to use it?

All steps for starting with AI Endpoints are described in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

### How can I stay up-to-date on changes to the AI Endpoints platform?

To stay informed about changes to the AI Endpoints platform, you can follow our announcements on the [#ai-news channel](https://discord.com/channels/850031577277792286/1045441414521180281) of the OVHcloud [Discord server](https://discord.gg/ovhcloud). We provide there a comprehensive overview of all modifications to the platform, including new features, models, improvements, models removals and bug fixes.

## Error codes and unexpected behaviours

### I'm trying to use the AI Endpoints models, but I keep getting a 401 error code. Why?

A 401 error code typically indicates that the authorization token specified in the call is either expired or invalid. To resolve this issue, you will need to generate a new authorization token and include it in your request headers. Fore more information on the token creation process, follow the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

### I am trying to use the AI Endpoints models, but I keep getting a 404 error code. What is going on?

A **404** error typically indicates that the model you're trying to access cannot be found. In the case of AI Endpoints, this could mean that the **query path** or the **model name** specified in the request is incorrect, or that the model has been decommissioned.

### Why can't I use my model anymore? I am facing 404 now.

If you are now unable to use a model you were previously using, it might have been decommissioned. OVHcloud AI Endpoints follows a [model lifecycle process](/pages/public_cloud/ai_machine_learning/endpoints_guide_04_billing_concept) to ensure a seamless experience for our customers. As stated in the documentation linked above, we notify you of our decision to retire a model three months in advance, giving you time to prepare for migration.

### I am trying to use the AI Endpoints models, but I keep getting a 429 error code. What does it mean?

A 429 error code typically indicates that you have exceeded the rate limit for the AI Endpoints models. When using AI Endpoints, the **following rate limits apply**: 

- **Anonymous**: 2 requests per minute, per IP and per model.
- **Authenticated with an API access key**: 400 requests per minute, per Public Cloud project and per model.

If you exceed these rate limits, you will receive a 429 error code. In this case, you may consider optimizing your application's usage of the AI Endpoints or spreading out your requests over a longer period. 

### I am trying to use the AI Endpoints models, but I keep getting a 413 error code. What does it mean?

If you exceed our maximum input payload limits, you will receive a 413 error code (too long text, large image, long or large audio file).

### When using AI Endpoints, I am facing "Resource tag 'discovery' is forbidden"

This error occurs when you try to use AI Endpoints with an access key from a Public Cloud project that is in **Discovery mode**, which means this project doesn't have a payment method associated with it.

To resolve this error, add a payment method to your Public Cloud project and try again.

### I am experiencing slow response times when using some of the AI Endpoints models. What is causing this delay?

The delay you are experiencing could be due to the fact that the model you are using has been decommissioned. In most cases, we redirect decommissioned models to updated versions (for example, from llama 3.0 to llama 3.1) to ensure that they still answer requests. However, we add a 10-second delay before the model responds to signal to users that the model is no longer in active use.

To confirm whether the delay is due to the decommissioned model, you can check the verbose output of your request. This can be done by adding the `-v` flag if you are using cURL commands. The verbose output will show you a message such as `x-warning: This model is deprecated and will be redirected to LLaMA 3.1 8B Instruct instead`. 

This indicates that the model is decommissioned and you should switch to an updated version of the model to avoid any unnecessary delays.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints:

- In the `#ai-endpoints` channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.