---
title: AI Endpoints - Catalog API
excerpt: Learn how to use the Catalog API to browse the OVHcloud AI Endpoints catalog and inspect the metadata and supported features of each model
updated: 2026-07-29
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

`https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` is the base endpoint used to actually call AI Endpoints models (see the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) and [AI Endpoints - Responses API](/pages/public_cloud/ai_machine_learning/endpoints_guide_09_responses_api) guides). This article does not cover that endpoint; instead, it covers the separate **Catalog API**, a discovery service for browsing available models and their metadata.

The catalog URL `https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2` is the source for accessing information and metadata about AI Endpoints models.
This API allows you to list models, supported features, pricing, and metadata specific to each model.

> [!warning]
>
> The catalog API is a discovery endpoint, not a text-generation endpoint. It returns metadata for models and capabilities rather than generated content.
>
> This API may also change. Please note that a breaking change may be possible.
>

## Objective

This documentation shows how to query the Catalog API, read model metadata, and filter the response client-side, with examples in **Python**, **JavaScript**, and **cURL**.

## Requirements

The examples provided during this guide can be used with one of the following environments:

> [!tabs]
> **Python**
>>
>> A [Python](https://www.python.org/) environment with the [requests](https://pypi.org/project/requests/) library.
>>
>> ```sh
>> pip install requests
>> ```
>>
> **JavaScript**
>>
>> A [Node.js](https://nodejs.org/en) environment with native `fetch` support or a compatible HTTP client.
>>
>> ```sh
>> npm install node-fetch
>> ```
>>
> **cURL**
>>
>> A standard terminal, with [cURL](https://curl.se/) installed on the system.
>>

## Authentication

Unlike the `v1/responses` and `v1/chat/completions` routes, the catalog endpoint is public and does **not** require an API key. You can query it directly, without an `Authorization` header.

If you also plan to call the models it lists, follow the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide to obtain an API key for those calls.

## Listing all models

A single `GET` returns the whole catalog as a JSON array. The endpoint takes no query parameter.

> [!tabs]
> **Python**
>>
>> ```python
>> import requests
>>
>> url = "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2"
>>
>> response = requests.get(url)
>> response.raise_for_status()
>>
>> catalog = response.json()
>> print(catalog)
>> ```
>>
> **JavaScript**
>>
>> ```javascript
>> import fetch from "node-fetch";
>>
>> const url = "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2";
>>
>> const response = await fetch(url);
>>
>> const catalog = await response.json();
>> console.log(catalog);
>> ```
> **cURL**
>>
>> ```sh
>> curl "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2"
>> ```

## Model metadata

Each entry in the array exposes the following fields:

- `id`, `name`, `description`
- `available`: whether the model can currently be called. Some entries are listed with `available: false`, so check this field before routing traffic to a model
- `category`: the model family, one of `Large Language Models (LLM)`, `Visual LLM`, `Reasoning LLM`, `Code LLM`, `Embeddings`, `Image Generation`, `LLM Guard`, `Speech To Text`, or `Text To Speech`
- `tags`: short labels such as `Reasoning`, `Multimodal`, `Code Assistant`, or `Moderation`
- `metadata.model_specs.capabilities`: `input_modality` and `output_modality`, arrays such as `["text", "image"]`, plus the `reasoning`, `function_calling`, and `streaming` booleans
- `metadata.publishing_information`: `publisher`, `series`, `licence_name`, `model_publication_date`
- `metadata.usage_information.pricing`: price and unit for prompt and completion usage
- `metadata.usage_information.rate_limit`: request-rate limits, split into `rate_limit_api` (with an API key), `rate_limit_api_anonymous` (without one), and `rate_limit_playground`

Use the capability fields to pick a model before calling the `v1/responses` route: an `input_modality` containing `image` for vision use cases, `function_calling` for tool calling, and `reasoning` for reasoning modes.

## Filtering the catalog

Every call returns the full catalog, so filtering, searching, and sorting happen on the returned array. The examples below keep only vision-capable models, then look up a single entry by `id`.

> [!tabs]
> **Python**
>>
>> ```python
>> import requests
>>
>> url = "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2"
>>
>> response = requests.get(url)
>> response.raise_for_status()
>> catalog = response.json()
>>
>> vision_models = [
>>     model for model in catalog
>>     if "image" in model["metadata"]["model_specs"]["capabilities"]["input_modality"]
>> ]
>> print(vision_models)
>>
>> model = next((m for m in catalog if m["id"] == "gpt-oss-20b"), None)
>> print(model)
>> ```
> **JavaScript**
>>
>> ```javascript
>> import fetch from "node-fetch";
>>
>> const url = "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2";
>>
>> const response = await fetch(url);
>> const catalog = await response.json();
>>
>> const visionModels = catalog.filter((model) =>
>>   model.metadata.model_specs.capabilities.input_modality.includes("image")
>> );
>> console.log(visionModels);
>>
>> const model = catalog.find((m) => m.id === "gpt-oss-20b");
>> console.log(model);
>> ```
> **cURL**
>>
>> ```sh
>> curl -s "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2" | \
>>   jq '[.[] | select(.metadata.model_specs.capabilities.input_modality | index("image"))]'
>>
>> curl -s "https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2" | \
>>   jq '.[] | select(.id == "gpt-oss-20b")'
>> ```

## Conclusion

Use the Catalog API to discover the available models and check their capabilities, features, pricing, and rate limits before calling the runtime API.

## Go further

Use Catalog API is required to [Deploy Langfuse on OVHcloud MKS for LLM observability and AI cost tracking](https://blog.ovhcloud.com/en/posts/deploy-langfuse-ovhcloud-mks-llm-observability/). That article pulls the `metadata.usage_information.pricing` block from the catalog to register each model's price with **Langfuse**, which then computes the cost of your AI Endpoints calls automatically.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback, and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).
