---
title: AI Endpoints - Create a Streaming Chatbot with LangChain4j and Quarkus
excerpt: How to build a Java-based chatbot that streams responses from AI Endpoints for a real-time chat experience
updated: 2025-12-19
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

After exploring how to use [AI Endpoints with LangChain4j](/pages/public_cloud/ai_machine_learning/endpoints_tuto_07_chatbot_langchain4j_quarkus), it's time to level up and build a chatbot that supports **real-time streaming responses**.

In this tutorial, you'll learn how to use **[LangChain4j](https://github.com/langchain4j/langchain4j)** with **[Quarkus](https://github.com/quarkusio/quarkus)** to create a chatbot that streams LLM-generated responses using **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**.

## Objective

This tutorial demonstrates how to:

- Set up a Quarkus project with quarkus-langchain4j
- Use OVHcloud AI Endpoints to access Mistral AI models
- Stream responses from the LLM using a reactive REST API

## Definitions

- **Streaming LLM Response**: Instead of waiting for a full response from the model, streaming allows the application to start processing output tokens as they’re generated. This creates a smoother, faster user experience—especially useful for chatbots.
- **[LangChain4j](https://github.com/langchain4j/langchain4j)**: Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. It offers abstractions and annotations for building intelligent agents and chatbots. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.
- **[Quarkus](https://quarkus.io/)**: A Kubernetes-native Java framework designed to optimize Java applications for containers and the cloud. In this tutorial we will use the [quarkus-langchain4j](https://github.com/quarkiverse/quarkus-langchain4j/) extension.
- **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**: A serverless platform by OVHcloud providing easy access to a variety of world-renowned AI models including Mistral, LLaMA, and more. This platform is designed to be simple, secure, and intuitive, with data privacy as a top priority.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.
- Quarkus CLI installed

## Instructions

### Create a Quarkus project

Generate your Quarkus project using the CLI with the LangChain4j Mistral AI extension:

```bash
$ quarkus create app com.ovhcloud.examples.aiendpoints:quarkus-langchain4j-streaming \
    --extension='quarkus-langchain4j-mistral-ai,rest'
```

### AI service creation

Let’s code our service to create a chatbot, using an annotation:

```java
import io.quarkiverse.langchain4j.RegisterAiService;
 
@RegisterAiService
public interface ChatBotService {
   
}
```

Now add system and user prompts to your service:

```java
package com.ovhcloud.examples.aiendpoints.services;

import dev.langchain4j.service.SystemMessage;
import dev.langchain4j.service.UserMessage;
import io.quarkiverse.langchain4j.RegisterAiService;
import io.smallrye.mutiny.Multi;

@RegisterAiService
public interface ChatBotService {
  // Scope / context passed to the LLM
  @SystemMessage("You are a virtual, an AI assistant.")
  // Prompt (with detailed instructions and variable section) passed to the LLM
  @UserMessage("Answer as best possible to the following question: {question}. The answer must be in a style of a virtual assistant and add some emojis.")
  Multi<String> askAQuestion(String question);
}
```

💡 For more details about [@SystemMessage](https://docs.quarkiverse.io/quarkus-langchain4j/dev/ai-services.html#_system_message) and [@UserMessage](https://docs.quarkiverse.io/quarkus-langchain4j/dev/ai-services.html#_user_message_prompt), refer to the Quarkus LangChain4j extension documentation.

### Configure AI Endpoints access

Adapt and add the following configuration to your application.properties, to enable AI Endpoints access:

```console
### Global configurations
# Base URL for Mistral AI endpoints
quarkus.langchain4j.mistralai.base-url=${OVH_AI_ENDPOINTS_URL}
# Activate or not the log during the request
quarkus.langchain4j.mistralai.log-requests=true
# Activate or not the log during the response
quarkus.langchain4j.mistralai.log-responses=true
# Delay before raising a timeout exception                   
quarkus.langchain4j.mistralai.timeout=60s   
# No key is needed
quarkus.langchain4j.mistralai.api-key=${OVH_AI_ENDPOINTS_ACCESS_TOKEN}
 
# Activate or not the Mistral AI embedding model                     
quarkus.langchain4j.mistralai.embedding-model.enabled=false
 
### Chat model configurations
# Activate or not the Mistral AI chat model
quarkus.langchain4j.mistralai.chat-model.enabled=true             
# Chat model name used
quarkus.langchain4j.mistralai.chat-model.model-name=${OVH_AI_ENDPOINTS_MODEL_NAME}
# Number of tokens to use
quarkus.langchain4j.mistralai.chat-model.max-tokens=1024
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

You will also have to replace two other environments variables, related to the model you want to use. You can find these model-specific values in the `documentation` tab of each model. For example, if you want to add the `Mistral-7B-Instruct-v0.3` model, the expected environment variables will be:

- `OVH_AI_ENDPOINTS_MODEL_NAME`: Mistral-7B-Instruct-v0.3
- `OVH_AI_ENDPOINTS_URL`: https://oai.endpoints.kepler.ai.cloud.ovh.net/v1

### Build a REST API to interact with the chatbot

First, install the [Quarkus REST extension](https://quarkus.io/extensions/io.quarkus/quarkus-rest/):

```bash
$ quarkus ext add io.quarkus:quarkus-rest
 
Looking for the newly published extensions in registry.quarkus.io
[SUCCESS] ✅  Extension io.quarkus:quarkus-rest has been installed
```

Then create a REST endpoint:

```java
package com.ovhcloud.examples.aiendpoints;

import com.ovhcloud.examples.aiendpoints.services.ChatBotService;
import io.smallrye.mutiny.Multi;
import jakarta.inject.Inject;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;

@Path("/ovhcloud-ai")
public class AIEndpointsResource {
    // AI Service injection to use it later
    @Inject
    ChatBotService chatBotService;

    // ask resource exposition with POST method
    @Path("ask")
    @POST
    public Multi<String> ask(String question) {
        // Call the Mistral AI chat model
        return chatBotService.askAQuestion(question);
    }
}
```

### Run and test

Now it is time to test the AI chatbot API!

To start your application and run your API, just use the [Quarkus dev mode](https://quarkus.io/guides/dev-mode-differences), by executing `quarkus dev`:

```console
$ quarkus dev
```

Then, use cURL to interact with your API:

```bash
curl http://localhost:8080/ovhcloud-ai/ask\?question\=%22Can%20you%20tell%20me%20what%20OVHcloud%20is%20and%20what%20kind%20of%20products%20it%20offers\?%22
```

![image](images/llm-streaming.gif){.thumbnail}

You’ll see the response streamed directly from the AI model, token by token! 🧠⚡

## Conclusion

In just a few steps, you have created your own **streaming AI chatbot** powered by [LangChain4j](https://github.com/langchain4j/langchain4j), [Quarkus](https://github.com/quarkusio/quarkus), and [OVHcloud AI Endpoints](https://endpoints.ai.cloud.ovh.net/).

This approach unlocks real-time user interactions, perfect for embedding in chat UIs or customer support tools.

## Going further

Feel free to take it further and build a web frontend for an even more interactive experience! 😄💬 You can then deploy this web app in the cloud, making your interface accessible to everyone. To do so, refer to the following articles and tutorials:

- [AI Deploy – Tutorial – Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image)
- [AI Deploy – Tutorial – Deploy a Gradio app for sketch recognition](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
