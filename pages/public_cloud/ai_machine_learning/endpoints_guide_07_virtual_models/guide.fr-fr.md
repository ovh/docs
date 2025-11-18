---
title: AI Endpoints - Modèles virtuels
excerpt: "Découvrez comment utiliser les modèles virtuels d'AI Endpoints"
updated: 2025-10-13
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

Choosing the right Large Language Model (LLM) is not always straightforward. Models vary in strengths, performance, cost, and licensing, and new ones appear regularly, often outperforming previous options. This rapid evolution makes it essential to match your choice to your specific needs, while staying ready to adapt as better models emerge.

To make this easier, we developed a system of virtual models. Instead of requesting a hard-coded model, you specify the expected specifications of the model you need (size, price, etc.) andthe system automatically maps your request to the best available match in our catalog. In this guide, you will learn about the different capabilities of this feature and how to use it with your OpenAI compatible code.

## Requirements

The examples provided in this guide can be used with one of the following environments:

> [!tabs]
> **Python**
>> 
>> A [Python](https://www.python.org/) environment with the [openai client](https://pypi.org/project/openai/).
>>
>> ```sh
>> pip install openai
>> ```
>> 
> **Curl**
>> 
>> A standard terminal, with [curl](https://curl.se/) installed on the system.
>> 

### Authentication & rate limiting

Most of the examples provided in this guide use anonymous authentication, which makes it simpler to use but may cause rate limiting issues.
If you wish to enable authentication using your own token, simply specify your API key within the requests.

Follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide for more information on authentication.

## Model DSL

> [!warning]
>
> As our virtual model feature allows dynamic model switching, the model’s characteristics (including pricing or context size) may change when a newer model is selected to handle your query. If you prefer certain features to remain fixed, you can lock them using the query conditions listed below.
>

When you request an LLM generation through our unified endpoint, you can provide in the OpenAI-compliant `model` field a model DSL query instead of a hardcoded model name.

These queries are divided into three parts: tag, ranker, and condition:

- **Tag**: A tag can be a model series (llama, mistral, codestral, ...), a publisher (meta-llama, mistralai, ...) or use case tag (code_chat, code_completion, summarization, etc.). You can find the possible values on [our catalog](https://endpoints.ai.cloud.ovh.net/catalog).
- **Ranker**: The ranker defines a model's capability compared to other models. We currently support the following rankers: fastest, cheapest, biggest, latest and smallest.
- **Condition**: The condition allows you to filter models based on strict requirements on some of the model specifications. Currently supported specs are context_size, max_tokens, input_cost, params (number of parameters) and endpoint_publication_date (Date we made the model available on AI Endpoints). These conditions support basic operators (<, >, =).

Below are some example queries and the models they currently resolve to. Please note that the resolved model can change, as we continuously update our catalog with new model releases.

| Model Query | Current Target Model | Usage |
|-----------|-----------|-----------|
| code_chat@latest | **Example:** Qwen3-32B | The most recently released model optimized for code chat tasks |
| meta-llama@latest | **Example:** Llama-3.1-8B-Instruct | The latest Meta-released LLaMA model |
| mistral@latest?context_size > 100000 | **Example:** Mistral-Small-3.2-24B-Instruct-2506 | The latest Mistral model with a context window greater than 100k tokens |
| llama@biggest?input_cost<0.5 | **Example:** Llama-3.1-8B-Instruct | The largest LLaMA model whose input token cost is under €0.50 per 1M tokens |

You can visit our [catalog](https://endpoints.ai.cloud.ovh.net/catalog) to learn more about the different model specifications.

### Example Usage

The following code samples provide a simple example on how to query our API with a model query.

> [!tabs]
> **Python**
>> ```python
>> import os
>> from openai import OpenAI
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1"
>> 
>> client = OpenAI(
>>     base_url=url,
>>     api_key=os.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN")
>> )
>> 
>> def chat_completion(new_message: str) -> str:
>>      history_openai_format = [{"role": "user", "content": new_message}]
>>      result = client.chat.completions.create(
>>          model="mistral@latest",
>>          messages=history_openai_format,
>>          temperature=0,
>>          max_tokens=1024
>>      )
>>      return result.model, result.choices.pop().message.content
>> 
>> if __name__ == '__main__':
>>     model, message = chat_completion("Explain gravity for a 6 years old")
>>     print(f"Model: {model}:", message)
>> ```
>>
>> Output:
>> 
>> ```sh
>> Model: Mistral-Small-3.2-24B-Instruct-2506: Sure! Here’s a simple way to explain gravity to a 6-year-old:
>> 
>> **"Gravity is like a big, invisible hug from the Earth! It’s what keeps us from floating away into space. When you jump, gravity pulls you back down to the ground. It’s also why things fall—like when you drop your toy, it doesn’t float up, it falls down because of gravity. Even the Moon stays close to Earth because of gravity!"**
>> 
>> You can also add:
>> - *"If you throw a ball up, gravity pulls it back down."*
>> - *"Without gravity, we’d all be floating like astronauts in space!"*
>> 
>> Would you like a fun example or a little experiment to go with it? 😊
>> ```
>>
> **Curl**
>>
>> ```sh
>> curl https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions -H "Content-Type: application/json" -d '{ 
>>   "messages": [{
>>     "role": "user",
>>     "content": "What is the capital of France ?"
>>   }], "model": "llama@biggest?input_cost<0.5",
>>   "seed": 21, "max_tokens": 20
>> }'
>> ```
>>
>> Output response:
>>
>> ```sh
>> {"id":"chatcmpl-5df407ebdf23464f891b1b1d8cb3e76d","object":"chat.completion","created":1755007630,"model":"Llama-3.1-8B-Instruct","choices":[{"index":0,"message":{"role":"assistant","content":"The capital of France is Paris."},"finish_reason":"stop","logprobs":null}],"usage":{"prompt_tokens":42,"completion_tokens":8,"total_tokens":50}}
>> ```
>>

## Conclusion

Using OVHcloud AI Endpoints with virtual models allows you to stay up to date with the best available LLMs without having to change your code whenever a new release arrives.
By defining your requirements through tags, rankers, and conditions, you can ensure your application always runs on the most suitable model for your needs, whether you prioritize speed, cost, size, or capabilities. This flexibility makes it easier to build, maintain, and scale AI-powered solutions over time.

## Go further

To discover how to build complete and powerful applications using AI Endpoints, explore our dedicated [AI Endpoints guides](/products/public-cloud-ai-and-machine-learning-ai-endpoints).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).