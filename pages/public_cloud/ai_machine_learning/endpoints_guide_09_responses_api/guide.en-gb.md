---
title: AI Endpoints - Responses API
excerpt: Learn how to use OVHcloud AI Endpoints with the Responses API
updated: 2026-02-24
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](/links/public-cloud/ai-endpoints) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models.

The **Responses API** (`/v1/responses`) is the most recent OpenAI-compatible route. 
Like `v1/chat/completions`, it can be used for **text generation**, **multi-turn conversations**, **tool/function calling**, **structured outputs**, and **vision inputs** (on compatible models).

The key difference is that `/v1/responses` is intended as the **foundation for newer capabilities and agentic behaviour**, introducing advanced features such as **statefulness** and **built-in tools**.

> [!warning]
>
> The `v1/responses` route was added recently. Some parameters and behaviours may differ between models.
> For up-to-date limitations, refer to [Endpoint Limitations](#endpoint-limitations) and check model capabilities in the [Catalog](/links/public-cloud/ai-endpoints-catalog).
>

## Objective

This documentation provides an overview of the `v1/responses` route on [AI Endpoints](/links/public-cloud/ai-endpoints), including:

- Basic requests and common response fields
- Usage examples in **Python**, **JavaScript**, and **cURL**
- A detailed explanation of the most important parameters
- Known limitations on the platform

## Requirements

The examples provided during this guide can be used with one of the following environments:

> [!tabs]
> **Python**
>> 
>> A [Python](https://www.python.org/) environment with the [openai client](https://pypi.org/project/openai/).
>>
>> ```sh
>> pip install openai
>> ```
>>
> **JavaScript**
>> 
>> A [Node.js](https://nodejs.org/en) environment with the official [openai](https://www.npmjs.com/package/openai) SDK.
>>
>> ```sh
>> npm install openai
>> ```
>>
> **cURL**
>> 
>> A standard terminal, with [cURL](https://curl.se/) installed on the system.
>>

## Authentication & Rate Limiting

Most examples provided in this guide are authenticated and expect the `AI_ENDPOINT_API_KEY` to be set in order to avoid rate limiting issues.
If you wish to enable authentication using your own token, specify your own API key in the environment (`export AI_ENDPOINT_API_KEY='your_api_key'`).

Follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide for more information on authentication.

## Quickstart

> [!warning]
>
> On AI Endpoints, statefulness for `v1/responses` is currently **not managed**.
> To avoid unexpected behaviour and to match the current platform implementation, always send `store: false`.
>

### Basic request (text input)

The simplest request is a single text `input`.

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>     base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>     api_key=api_key,
>> )
>>
>> response = client.responses.create(
>>     model="gpt-oss-20b",
>>     input="Explain RAG in one paragraph.",
>>     store=False,
>> )
>>
>> print(response.output_text)
>> ```
>>
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const response = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   input: "Explain RAG in one paragraph.",
>>   store: false,
>> });
>>
>> console.log(response.output_text);
>> ```
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "input": "Explain RAG in one paragraph.",
>>     "store": false
>>   }'
>> ```

### Multi-turn conversations

To create a multi-turn conversation, keep the full conversation history on your side and send it as an `input` **list** at each request.

> [!primary]
>
> On AI Endpoints, statefulness for `v1/responses` is currently unavailable.
> This means you must always send the full history as part of `input`.
>

#### Client-managed conversation (`input` list)

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> resp = client.responses.create(
>>   model="gpt-oss-20b",
>>   store=False,
>>   input=[
>>     {"type": "message", "role": "user", "content": "My name is Stéphane."},
>>     {"type": "message", "role": "assistant", "content": "Hello Stéphane! How can I help?"},
>>     {"type": "message", "role": "user", "content": "What is my name?"},
>>   ],
>> )
>>
>> print(resp.output_text)
>> ```
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const resp = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   store: false,
>>   input: [
>>     { type: "message", role: "user", content: "My name is Stéphane." },
>>     { type: "message", role: "assistant", content: "Hello Stéphane! How can I help?" },
>>     { type: "message", role: "user", content: "What is my name?" },
>>   ],
>> });
>>
>> console.log(resp.output_text);
>> ```
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "store": false,
>>     "input": [
>>       {"type": "message", "role": "user", "content": "My name is Stéphane."},
>>       {"type": "message", "role": "assistant", "content": "Hello Stéphane! How can I help?"},
>>       {"type": "message", "role": "user", "content": "What is my name?"}
>>     ]
>>   }'
>> ```

### Providing a system prompt

You can provide system-level instructions in two ways:

- `instructions` (simple and compact)
- A `role: "system"` item inside an `input` list (useful when you already send a list for multi-turn)

#### Option 1: `instructions`

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> resp = client.responses.create(
>>   model="gpt-oss-20b",
>>   instructions="You are a technical writer. Answer in British English.",
>>   input="Write a short definition of embeddings.",
>>   store=False,
>> )
>>
>> print(resp.output_text)
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const resp = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   instructions: "You are a technical writer. Answer in British English.",
>>   input: "Write a short definition of embeddings.",
>>   store: false,
>> });
>>
>> console.log(resp.output_text);
>> ```
>
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "instructions": "You are a technical writer. Answer in British English.",
>>     "input": "Write a short definition of embeddings.",
>>     "store": false
>>   }'
>> ```

#### Option 2: `role: "system"` in an `input` list

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> resp = client.responses.create(
>>   model="gpt-oss-20b",
>>   store=False,
>>   input=[
>>     {"type": "message", "role": "system", "content": "You are a technical writer. Answer in British English."},
>>     {"type": "message", "role": "user", "content": "Write a short definition of embeddings."}
>>   ],
>> )
>>
>> print(resp.output_text)
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const resp = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   store: false,
>>   input: [
>>     { type: "message", role: "system", content: "You are a technical writer. Answer in British English." },
>>     { type: "message", role: "user", content: "Write a short definition of embeddings." },
>>   ],
>> });
>>
>> console.log(resp.output_text);
>> ```
>
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "store": false,
>>     "input": [
>>       {"type": "message", "role": "system", "content": "You are a technical writer. Answer in British English."},
>>       {"type": "message", "role": "user", "content": "Write a short definition of embeddings."}
>>     ]
>>   }'
>> ```

### Streaming (`stream: true`)

If `stream` is enabled, the API returns **Server-Sent Events (SSE)** with incremental output.
This is useful for chat UIs and CLIs.

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> stream = client.responses.create(
>>   model="gpt-oss-20b",
>>   input="Write a haiku about cloud computing.",
>>   stream=True,
>>   store=False,
>> )
>>
>> for event in stream:
>>   # The exact event fields can vary by SDK version.
>>   # A common approach is to print any incremental output text.
>>   delta = getattr(event, "delta", None)
>>   if delta:
>>     print(delta, end="", flush=True)
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const stream = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   input: "Write a haiku about cloud computing.",
>>   stream: true,
>>   store: false,
>> });
>>
>> for await (const event of stream) {
>>   const delta = event?.delta;
>>   if (delta) process.stdout.write(delta);
>> }
>> ```
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "input": "Write a haiku about cloud computing.",
>>     "stream": true,
>>     "store": false
>>   }'
>> ```

### Structured outputs (`text.format`)

Some models support enforcing a structured output format.
This is useful when you need predictable, machine-readable responses.

The `text.format` object can be used in these modes (model permitting):

- `{"type": "text"}`
  Default textual format.

- `{"type": "json_schema", "name": "...", "schema": { ... }}`
  Schema-enforced mode: the model returns JSON that matches your JSON Schema.

#### Example: JSON schema extraction

> [!tabs]
> **Python**
>>
>> ```python
>> import json
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> resp = client.responses.create(
>>   model="gpt-oss-20b",
>>   store=False,
>>   input=[
>>     {
>>       "type": "message",
>>       "role": "system",
>>       "content": "You are a helpful extractor. Return only valid JSON.",
>>     },
>>     {
>>       "type": "message",
>>       "role": "user",
>>       "content": "Extract the company name and the contract start date from: Contract starts on 2026-01-12 with OVHcloud.",
>>     },
>>   ],
>>   text={
>>     "format": {
>>       "type": "json_schema",
>>       "name": "contract_data",
>>       "description": "Extract contract fields",
>>       "schema": {
>>         "type": "object",
>>         "properties": {
>>           "company": {"type": "string"},
>>           "start_date": {"type": "string"},
>>         },
>>         "required": ["company", "start_date"],
>>         "additionalProperties": False,
>>       },
>>       "strict": False,
>>     }
>>   },
>> )
>>
>> # `output_text` is typically the JSON string generated by the model.
>> data = json.loads(resp.output_text)
>> print(json.dumps(data, indent=2))
>> ```
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const resp = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   store: false,
>>   input: [
>>     {
>>       type: "message",
>>       role: "system",
>>       content: "You are a helpful extractor. Return only valid JSON.",
>>     },
>>     {
>>       type: "message",
>>       role: "user",
>>       content:
>>         "Extract the company name and the contract start date from: Contract starts on 2026-01-12 with OVHcloud.",
>>     },
>>   ],
>>   text: {
>>     format: {
>>       type: "json_schema",
>>       name: "contract_data",
>>       description: "Extract contract fields",
>>       schema: {
>>         type: "object",
>>         properties: {
>>           company: { type: "string" },
>>           start_date: { type: "string" },
>>         },
>>         required: ["company", "start_date"],
>>         additionalProperties: false,
>>       },
>>       strict: false,
>>     },
>>   },
>> });
>>
>> const data = JSON.parse(resp.output_text);
>> console.log(data);
>> ```
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "store": false,
>>     "input": [
>>       {
>>         "type": "message",
>>         "role": "system",
>>         "content": "You are a helpful extractor. Return only valid JSON."
>>       },
>>       {
>>         "type": "message",
>>         "role": "user",
>>         "content": "Extract the company name and the contract start date from: Contract starts on 2026-01-12 with OVHcloud."
>>       }
>>     ],
>>     "text": {
>>       "format": {
>>         "type": "json_schema",
>>         "name": "contract_data",
>>         "description": "Extract contract fields",
>>         "schema": {
>>           "type": "object",
>>           "properties": {
>>             "company": {"type": "string"},
>>             "start_date": {"type": "string"}
>>           },
>>           "required": ["company", "start_date"],
>>           "additionalProperties": false
>>         },
>>         "strict": false
>>       }
>>     }
>>   }'
>> ```

### Function calling (`tools`)

Function calling (tool calling) lets the model request that your application runs a function.
You declare the function signature in `tools`, the model may emit tool calls, then you execute them and provide the results back so the model can produce a final answer.

> [!primary]
>
> On OVHcloud AI Endpoints for `v1/responses`, **built-in tools are not supported** (e.g. `web_search`, `file_search`, `computer_use`, `code_execution`, ...).
> Only **custom function tools** are supported.
>

#### End-to-end workflow (recommended)

The flow is similar to the `v1/chat/completions` function calling guide:

1. Call the model with `tools`.
2. If the model returns a tool call: execute the tool in your application.
3. Send a follow-up request that includes the **tool result** in `input`, then read the final answer.

Below is a minimal end-to-end example.

> [!tabs]
> **Python**
>>
>> ```python
>> import json
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> # 1) Tool implementation (your code)
>> def get_vat_rate(country: str) -> float:
>>   if country.lower() in ["france", "fr"]:
>>     return 0.20
>>   raise ValueError("Unsupported country")
>>
>> TOOLS = [
>>   {
>>     "type": "function",
>>     "name": "get_vat_rate",
>>     "strict": False,
>>     "description": "Return the VAT rate for a given country.",
>>     "parameters": {
>>       "type": "object",
>>       "properties": {"country": {"type": "string"}},
>>       "required": ["country"],
>>       "additionalProperties": False,
>>     },
>>   }
>> ]
>>
>> # 2) First call: let the model decide whether to call the tool
>> input_items = [
>>   {"type": "message", "role": "user", "content": "What is the VAT rate in France? If needed, call the tool."}
>> ]
>>
>> first = client.responses.create(
>>   model="gpt-oss-20b",
>>   store=False,
>>   input=input_items,
>>   tools=TOOLS,
>> )
>>
>> # 3) If a tool call is present, execute it and send the tool result back
>> tool_calls = getattr(first, "tool_calls", None) or []
>> if tool_calls:
>>   call = tool_calls[0]
>>   args = json.loads(call.function.arguments)
>>   result = get_vat_rate(**args)
>>
>>   input_items.extend([
>>     {
>>       "type": "message",
>>       "role": "assistant",
>>       "tool_calls": [
>>         {
>>           "id": call.id,
>>           "type": "function",
>>           "function": {"name": call.function.name, "arguments": call.function.arguments},
>>         }
>>       ],
>>     },
>>     {
>>       "type": "message",
>>       "role": "tool",
>>       "tool_call_id": call.id,
>>       "name": call.function.name,
>>       "content": json.dumps({"vat_rate": result}),
>>     },
>>   ])
>>
>>   final = client.responses.create(
>>     model="gpt-oss-20b",
>>     store=False,
>>     input=input_items,
>>     tools=TOOLS,
>>   )
>>
>>   print(final.output_text)
>> else:
>>   # The model might answer directly without calling a tool.
>>   print(first.output_text)
>> ```
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> // 1) Tool implementation (your code)
>> function getVatRate(country) {
>>   if (["france", "fr"].includes(country.toLowerCase())) return 0.2;
>>   throw new Error("Unsupported country");
>> }
>>
>> const tools = [
>>   {
>>     type: "function",
>>     name: "get_vat_rate",
>>     description: "Return the VAT rate for a given country.",
>>     strict: false,
>>     parameters: {
>>       type: "object",
>>       properties: { country: { type: "string" } },
>>       required: ["country"],
>>       additionalProperties: false,
>>     },
>>   },
>> ];
>>
>> // 2) First call
>> const input = [
>>   { type: "message", role: "user", content: "What is the VAT rate in France? If needed, call the tool." },
>> ];
>>
>> const first = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   store: false,
>>   input,
>>   tools,
>> });
>>
>> const toolCalls = first.tool_calls ?? [];
>> if (toolCalls.length > 0) {
>>   const call = toolCalls[0];
>>   const args = JSON.parse(call.function.arguments);
>>   const result = getVatRate(args.country);
>>
>>   input.push(
>>     {
>>       type: "message",
>>       role: "assistant",
>>       tool_calls: [
>>         {
>>           id: call.id,
>>           type: "function",
>>           function: { name: call.function.name, arguments: call.function.arguments },
>>         },
>>       ],
>>     },
>>     {
>>       type: "message",
>>       role: "tool",
>>       tool_call_id: call.id,
>>       name: call.function.name,
>>       content: JSON.stringify({ vat_rate: result }),
>>     },
>>   );
>>
>>   const final = await client.responses.create({
>>     model: "gpt-oss-20b",
>>     store: false,
>>     input,
>>     tools,
>>   });
>>
>>   console.log(final.output_text);
>> } else {
>>   console.log(first.output_text);
>> }
>> ```
> **cURL (Tool definition only)**
>>
>> cURL is convenient to **declare tools**, but executing tools and sending tool results back requires application-side logic.
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "store": false,
>>     "input": "What is the VAT rate in France? If needed, call the tool.",
>>     "tools": [
>>       {
>>         "type": "function",
>>         "name": "get_vat_rate",
>>         "description": "Return the VAT rate for a given country.",
>>         "strict": false,
>>         "parameters": {
>>           "type": "object",
>>           "properties": {"country": {"type": "string"}},
>>           "required": ["country"],
>>           "additionalProperties": false
>>         }
>>       }
>>     ]
>>   }'
>> ```

### Vision language models (image inputs)

Some models accept image inputs.
When supported, you can pass an `input` array containing a mix of text and image parts.

> [!warning]
>
> OVHcloud AI Endpoints currently does **not** support fetching images from remote URLs for `input_image`.
> Provide images as a **base64-encoded data URL** (for example: `data:image/png;base64,...`).
>

> [!tabs]
> **Python**
>>
>> ```python
>> import base64
>> import mimetypes
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> def to_data_url(image_path: str) -> str:
>>   mime_type, _ = mimetypes.guess_type(image_path)
>>   if mime_type is None:
>>     mime_type = "image/jpeg"
>>
>>   with open(image_path, "rb") as f:
>>     b64 = base64.b64encode(f.read()).decode("utf-8")
>>
>>   return f"data:{mime_type};base64,{b64}"
>>
>> resp = client.responses.create(
>>   model="Qwen2.5-VL-72B-Instruct",
>>   store=False,
>>   input=[
>>     {
>>       "type": "message",
>>       "role": "user",
>>       "content": [
>>         {"type": "input_text", "text": "Describe this image."},
>>         {"type": "input_image", "image_url": to_data_url("sample.jpg")},
>>       ],
>>     }
>>   ],
>> )
>>
>> print(resp.output_text)
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> import fs from "node:fs";
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> function toDataUrl(filePath, mimeType = "image/jpeg") {
>>   const b64 = fs.readFileSync(filePath, { encoding: "base64" });
>>   return `data:${mimeType};base64,${b64}`;
>> }
>>
>> const resp = await client.responses.create({
>>   model: "Qwen2.5-VL-72B-Instruct",
>>   store: false,
>>   input: [
>>     {
>>       type: "message",
>>       role: "user",
>>       content: [
>>         { type: "input_text", text: "Describe this image." },
>>         { type: "input_image", image_url: toDataUrl("sample.jpg") },
>>       ],
>>     },
>>   ],
>> });
>>
>> console.log(resp.output_text);
>> ```
> **cURL**
>>
>> ```sh
>> IMAGE_B64=$(base64 -i sample.jpg | tr -d '\n')
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d "{\
>>     \"model\": \"Qwen2.5-VL-72B-Instruct\",\
>>     \"store\": false,\
>>     \"input\": [\
>>       {\
>>         \"type\": \"message\",\
>>         \"role\": \"user\",\
>>         \"content\": [\
>>           {\"type\": \"input_text\", \"text\": \"Describe this image.\"},\
>>           {\"type\": \"input_image\", \"image_url\": \"data:image/jpeg;base64,$IMAGE_B64\"}\
>>         ]\
>>       }\
>>     ]\
>>   }"
>> ```

> [!warning]
>
> Image inputs are supported only by vision-capable models.
> Refer to the [Catalog](/links/public-cloud/ai-endpoints-catalog) and model pages for supported content types.
>

### Reasoning models (`reasoning`)

Some models expose reasoning-related controls.
When supported, a `reasoning` object can be used to tune the reasoning effort and/or retrieve reasoning metadata.

> [!primary]
>
> Reasoning parameters are model-specific. If you get validation errors, either remove `reasoning` or switch to a reasoning-capable model.
>

> [!tabs]
> **Python**
>>
>> ```python
>> import os
>> from openai import OpenAI
>>
>> api_key = os.environ["AI_ENDPOINT_API_KEY"]  # export AI_ENDPOINT_API_KEY='your_api_key'
>>
>> client = OpenAI(
>>   base_url="https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   api_key=api_key,
>> )
>>
>> resp = client.responses.create(
>>   model="gpt-oss-20b",
>>   store=False,
>>   input="Compute 17*23 and explain the steps.",
>>   reasoning={"effort": "medium"},
>> )
>>
>> print(resp.output_text)
>> ```
>
> **JavaScript**
>>
>> ```javascript
>> import OpenAI from "openai";
>>
>> const client = new OpenAI({
>>   baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
>>   apiKey: process.env.AI_ENDPOINT_API_KEY || "", // Read from environment variable
>> });
>>
>> const resp = await client.responses.create({
>>   model: "gpt-oss-20b",
>>   store: false,
>>   input: "Compute 17*23 and explain the steps.",
>>   reasoning: { effort: "medium" },
>> });
>>
>> console.log(resp.output_text);
>> ```
> **cURL**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/responses \
>>   -H "Content-Type: application/json" \
>>   -H "Authorization: Bearer $AI_ENDPOINT_API_KEY" \
>>   -d '{
>>     "model": "gpt-oss-20b",
>>     "store": false,
>>     "input": "Compute 17*23 and explain the steps.",
>>     "reasoning": {"effort": "medium"}
>>   }'
>> ```

## Endpoint limitations

The `v1/responses` endpoint is still undergoing development and all features may not be available.
If you are interested in specific features that would like us to prioritise, don't hesitate to let us know on the OVHcloud [Discord server](https://discord.gg/ovhcloud).

### Statefulness

Statefulness is currently **not managed** on AI Endpoints for the `v1/responses` route.

- Always send `store: false` to avoid unexpected behaviour (the OpenAI specification defaults to `store: true`).
- `previous_response_id` is currently not supported.
- To implement multi-turn, send the full history in the `input` list.

### Built-in tools

OpenAI-compatible **built-in tools are currently not supported** on OVHcloud AI Endpoints for `v1/responses` (for example: `web_search`, `file_search`, `computer_use`, `code_execution`, remote tools with `type: "mcp"`, etc.).

If you need tool calling, only **custom function tools** are supported: declare them explicitly in the `tools` array (see [Function calling (`tools`)](#function-calling-tools)).

### Known issues / unsupported parameters

The following parameters may be unsupported, ignored, or inconsistently implemented depending on the model/backend:

- Reasoning *summaries* and some reasoning metadata fields
- `background`
- `include`
- `max_tool_calls`
- `prompt_cache_key`
- `truncation`
- Reusable prompts (`prompt` parameter)
- `safety_identifier`
- `service_tier`
- `stream_options`
- `user`
- `verbosity`

Model-specific limitations you may encounter:

- Some models are not compatible with the `v1/responses` route
- JSON object / JSON schema support varies (structured outputs)
- Tool calling may be unsupported, or `tool_choice` values may be restricted (for example: not supporting non-`auto` modes)
- Some models do not support system prompts / `instructions`
- Multi-turn conversations may behave unexpectedly when combining **structured outputs**, **system instructions**, or **reasoning parameters**
- Structured outputs with streaming may be unsupported
- `logprobs` may not be supported on some models
- Parallel tool calls may be unsupported on some models
- Image inputs are supported only by vision-capable models

## Conclusion

The **Responses API** provides a unified way to interact with LLMs on OVHcloud **AI Endpoints**, covering basic text generation as well as advanced use cases such as **multi-turn conversations**, **streaming**, **structured outputs**, **function calling**, and **vision inputs** (model permitting).

To maximise compatibility, always verify supported features for your chosen model in the [AI Endpoints catalog](/links/public-cloud/ai-endpoints-catalog), and consider falling back to `v1/chat/completions` when a feature is not available on `v1/responses`.

## Go further

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to explore other guides and tutorials.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback, and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).