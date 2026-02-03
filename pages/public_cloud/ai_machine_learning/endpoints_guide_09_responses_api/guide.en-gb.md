---
title: AI Endpoints - Responses API
excerpt: Learn how to use OVHcloud AI Endpoints with the /responses API
updated: 2025-10-03
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](https://endpoints.ai.cloud.ovh.net/) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models. The platform is designed to be simple, secure, and intuitive, making it an ideal solution for developers who want to enhance their applications with AI capabilities without extensive AI expertise or concerns about data privacy.

The **Responses API** is an newer alternative to the `v1/chat/completion` route that features a few differences in the way our users interact with LLM models.

Most clients and integrations still rely on the `v1/chat/completion` features but newer products may be updated to use the `v1/responses` when possible.

Keep in mind that the `v1/responses` route was recently added and you may encounter unexpected behavior as it undergoes a stabilisation period.
For more information about current limitations and known issues, refer to the [Endpoint Limitations section](#endpoint-limitations) section.

## Objective

This documentation provides an overview of the `v1/responses` route on [AI Endpoints](https://endpoints.ai.cloud.ovh.net/). 

Visit our [Catalog](https://endpoints.ai.cloud.ovh.net/catalog) to find out which models are compatible with this route.

The examples provided during this guide can be used with one of the following environments:

> [!tabs]
> **Python**
>> 
>> A [Python](https://www.python.org/) environment with the [openai client](https://pypi.org/project/openai/) and the pydantic library installed.
>>
>> ```sh
>> pip install openai pydantic
>> ```
>> 
> **JavaScript**
>> 
>> A [Node.js](https://nodejs.org/en) environment with the [request](https://www.npmjs.com/package/request) library.
>> Request can be installed using [NPM](https://www.npmjs.com/):
>> 
>> ```sh
>> npm install request
>> ```
>> 
> **cURL**
>> 
>> A standard terminal, with [cURL](https://cURL.se/) installed on the system.
>> 

## Authentication & Rate Limiting

All the examples provided in this guide use anonymous authentication, which makes it simpler to use but may cause rate limiting issues. If you wish to enable authentication using your own token, simply specify your API key within the requests.

Follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide for more information on authentication.

## Request Body

### Parameters Overview

The request body for the audio transcription endpoint is of type `multipart/form-data` and includes the following fields:

| Parameter                | Required | Type          | Allowed Values / Format                                                                 | Default | Description                                                                                                                                                                                                 |
|--------------------------|----------|---------------|---------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **file**                     | Yes      | binary        | `mp3`, `mp4`, `aac`, `m4a`, `wav`, `flac`, `ogg`, `opus`, `webm`, `mpeg`, `mpga`                                    | -       | The **audio file object (not file name)** to transcribe.                                                                                                                                                      |
| **chunking_strategy**        | No       | `string`/`server_vad object`/`null`   | -                                                                                     | null    | Strategy for dividing the audio into chunks. More details [here](#chunking-strategy).                                                                                                                                                     |
| **diarize**                  | No       | `boolean`/`null`  | `true`/`false`                                                                            | false   | Enables speaker separation in the transcript. When set to true, the system separates the audio into segments based on speakers, by adding labels like "Speaker 1" and "Speaker 2", so you can see who said what in conversations such as interviews, meetings, or phone calls. More details [here](#diarization).                                                                                                                                           |
| **language**                 | No       | `string`/`null`   | [ISO-639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)                                                                      | -       | The language parameter specifies the language spoken in the input audio. Providing it can improve transcription accuracy and reduce latency (e.g. `en` for English, `fr` for French, `de` for German, `es` for Spanish, `zh` for Chinese, `ar` for Arabic ...). If not provided, the system will attempt automatic language detection, which may be slightly slower and less accurate in some cases. [More details on language compatibility and performance](#language-compatibility-and-performances).                                                                                                                                           |
| **model**                    | No       | `string`/`null`   | ID of the model to use                                                                | -       | Specifies the model to use for transcription. Useful when using our [unified endpoint](/pages/public_cloud/ai_machine_learning/endpoints_guide_07_virtual_models).                                                                                                                                                            |
| **prompt**                   | No       | `string`/`null`   | -                                                                                     | -       | Text to guide the model's style, translate transcript to english or continue a previous audio segment. The language in which you write the prompt must match the audio's one. More details about prompt usage [here](#prompt).                                                                                         |
| **response_format**          | No       | `enum`/`null`     | `json`, `text`, `srt`, `verbose_json`, `vtt`                                                | `verbose_json`    | Determines how the transcription data is returned. For detailed examples of each output type, visit the [Response Formats](#response-formats) section.                                                                                                                                                        |
| **stream**                   | No       | `boolean`/`null`  | `true`/`false`                                                                            | false   | If set to true, the model response data will be streamed to the client. Currently not supported for Whisper models. |
| **temperature**              | No       | `number`/`null`   | From `0.0` to `1.0`                                                                                | 0       | Controls randomness in the output. Higher values make the output more random, while lower values make it more focused and deterministic.                                                                   |
| **timestamp_granularities**  | No       | `array`/`null`    | `["segment"]`, `["word"]`, `["word", "segment"]`                                        | `["segment"]` | Controls the level of detail in the timestamps provided in the transcription. More details [here](#timestamp-granularities).                                                              |

### Example Usage

Now that you know which parameters are available, let’s look at how to put them into practice. Below are sample requests in **Python**, **cURL** and **JavaScript**:

> [!tabs]
> **Python (using requests)**
>> 
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/audio/transcriptions"
>> 
>> audio_file_path = "my_audio.mp3"
>> 
>> headers = {
>>    "accept": "application/json",
>> #   "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>> 
>> files = {"file": open(audio_file_path, "rb")}
>> 
>> data = {
>>     "model": "whisper-large-v3",
>>     "language": "en",
>>     "temperature": "0",
>>     "prompt": "<|transcribe|>",
>>     "diarize": "false",
>>     "timestamp_granularities": ["segment"],
>>     "response_format": "verbose_json"
>> }
>> 
>> response = requests.post(url, headers=headers, files=files, data=data)
>> 
>> if response.status_code == 200:
>>     # Handle response
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>> 
> **Python (using OpenAI client)**
>> 
>> ```python
>> from openai import OpenAI
>> import os
>> 
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/"
>> audio_file_path = "my_audio.mp3"
>> 
>> client = OpenAI(
>>     base_url=url,
>> #    api_key=os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN'),
>>     )
>> 
>> with open(audio_file_path, "rb") as f:
>>     transcript = client.audio.transcriptions.create(
>>         file=f,
>>         model="whisper-large-v3",
>>         language="en",
>>         temperature=0,
>>         prompt="<|transcribe|>",
>>         timestamp_granularities=["segment"],
>>         response_format="verbose_json"
>>     )
>> 
>> print(transcript)
>> ```
>>
>> > [!warning]
>> >
>> > **Warning**: The `diarize` parameter is not supported when using the OpenAI client library.
>> >
>> > To use diarization, you must make a direct HTTP request using `requests` or `cURL` with `diarize` set to `true`.
>> >
>>
> **cURL**
>> 
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/audio/transcriptions" \
>> -F "file=@my_audio.mp3" \
>> -F "model=whisper-large-v3" \
>> -F "language=en" \
>> -F "temperature=0" \
>> -F "prompt==<|transcribe|>" \
>> -F "diarize=false" \
>> -F "timestamp_granularities[]=segment" \
>> -F "response_format=verbose_json"
>> ```
>>
>> To [**authenticate with your API key**](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started), add an Authorization header:
>>
>> ```sh
>> `-H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \`
>> ```
>>
> **JavaScript (using OpenAI client)**
>>
>> ```javascript
>> import OpenAI from "openai";
>> import fs from "fs";
>> 
>> const openai = new OpenAI({
>>  baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/",
>>  // apiKey: process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN,
>> });
>> 
>> const transcript = await openai.audio.>> transcriptions.create({
>>   file: fs.createReadStream("my_audio.mp3"),
>>   model: "whisper-large-v3",
>>   language: "en",
>>   temperature: 0,
>>   prompt: "<|transcribe|>",
>>   timestamp_granularities: ["segment"],
>>   response_format: "verbose_json"
>> });
>> 
>> console.log(transcript);
>> ```
>>

**Output example**

By default, the transcription endpoint returns output in `verbose_json` format.

This includes detailed metadata such as language, segments, tokens, and diarization information:

```json
{
  "task": "transcribe",
  "success": true,
  "language": "en",
  "duration": 4.46975,
  "text": "My name is Octave and I am working at OVHcloud",
  "words": [],
  "segments": [
    {
      "id": 1,
      "seek": 0,
      "start": 0,
      "end": 3.48,
      "text": "My name is Octave and I am working at OVHcloud",
      "tokens": [
        50365,
        2588,
        275,
        ...
      ],
      "temperature": 0,
      "avg_logprob": -0.38066408,
      "compression_ratio": 0.9,
      "no_speech_prob": 0
    }
  ],
  "diarization": [],
  "usage": {
    "type": "duration",
    "duration": 5
  }
}
```

For **detailed examples** of each available output type, see the [Response Formats section](#response-formats) section.

### Parameters Details

While the previous overview gives a quick reference, certain parameters require more context to understand how and when to use them.

#### Multi turn conversation

#### Providing a system prompt

#### Streaming

#### Structured outputs

#### Function calling

#### Vision Language Models

pass image as input

#### Reasoning models

reasoning effort, reasoning content, reasoning usage

## Endpoint Limitations

### Statefulness

- conversation 
- store != false
- previous_response_id

### Built-in tools

### Known issues

General limitations:
- reasoning summary
- background
- include
- max_tool_calls
- prompt_cache_key
- reusable prompts (prompt param)
- safety_identifier
- service_tier
- stream_options
- user
- verbosity

Some models may:
- Not be compatible with the `v1/responses` route
- Not all support json object mode
- Not support tool calls
- Not support system prompts
- Have issues with multi-turn conversations, mostly when using structured outputs, system prompts, or reasoning parameters.
- Not handle structured output with streaming
- tool_choice != auto 
- logprobs -> at least gpt-oss models  https://github.com/vllm-project/vllm/issues/23225 
- parallel tool calls -> at least gpt-oss
- Image inputs (some VLMs)


## Conclusion

In this guide, we have explained how to use Speech to Text models available on [AI Endpoints](https://endpoints.ai.cloud.ovh.net/) models. We have provided a comprehensive overview of the feature which can help you perfect your integration of model for your own application.

## Go Further

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback, and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).

