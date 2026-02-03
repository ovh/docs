---
title: AI Endpoints - Développer un chatbot avec mémoire en utilisant LangChain4j (EN)
excerpt: "Apprenez à mettre en œuvre la mémoire dans un chatbot de discussion Java à l'aide de LangChain4j"
updated: 2025-12-19
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

In our other tutorials, chatbots answered one question at a time without remembering anything from the conversation. That’s fine for simple Q&A, but not ideal for real-world interactions.

Indeed, here’s a simple conversation with no memory:

```console
💬: My name is Stéphane.
🤖: Hello Stéphane, how can I assist you today?
💬: What is my name?
🤖: I'm not capable of knowing your personal information...
```

That’s not very helpful.

In this tutorial, we’ll use **[LangChain4j](https://github.com/langchain4j/langchain4j)** to build a chatbot with **memory support**, allowing it to **remember previous messages** and provide more natural, contextual answers.

## Definitions

- **[LangChain4j](https://github.com/langchain4j/langchain4j)**: Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.
- **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**: A serverless platform by OVHcloud providing easy access to a variety of world-renowned AI models including Mistral, LLaMA, and more. This platform is designed to be simple, secure, and intuitive, with data privacy as a top priority.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

## Instructions

### Configure pom.xml

Add the following configuration to your Maven `pom.xml` file:

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    <maven.compiler.release>21</maven.compiler.release>
    <langchain4j.version>0.31.0</langchain4j.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>dev.langchain4j</groupId>
      <artifactId>langchain4j</artifactId>
      <version>${langchain4j.version}</version>
    </dependency>

    <dependency>
      <groupId>dev.langchain4j</groupId>
      <artifactId>langchain4j-mistral-ai</artifactId>
      <version>${langchain4j.version}</version>
    </dependency>
    
    <!-- ... -->
 </dependencies>
```

### Create a memory-enabled chatbot

```java
package com.ovhcloud.examples.aiendpoints;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import dev.langchain4j.memory.ChatMemory;
import dev.langchain4j.memory.chat.MessageWindowChatMemory;
import dev.langchain4j.model.mistralai.MistralAiStreamingChatModel;
import dev.langchain4j.service.AiServices;
import dev.langchain4j.service.TokenStream;

public class MemoryStreamingChatbot {

  private static final Logger _LOG = LoggerFactory.getLogger(MemoryStreamingChatbot.class);
  private static final String OVH_AI_ENDPOINTS_ACCESS_TOKEN = System.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN");
  private static final String OVH_AI_ENDPOINTS_MODEL_NAME = System.getenv("OVH_AI_ENDPOINTS_MODEL_NAME");
  private static final String OVH_AI_ENDPOINTS_MODEL_URL = System.getenv("OVH_AI_ENDPOINTS_MODEL_URL");

  interface Assistant {
    TokenStream chat(String message);
  }

  public static void main(String[] args) {
    MistralAiStreamingChatModel streamingChatModel = MistralAiStreamingChatModel.builder()
        .apiKey(OVH_AI_ENDPOINTS_ACCESS_TOKEN)
        .modelName(OVH_AI_ENDPOINTS_MODEL_NAME)
        .baseUrl(OVH_AI_ENDPOINTS_MODEL_URL)
        .maxTokens(1500)
        .build();

    ChatMemory chatMemory = MessageWindowChatMemory.withMaxMessages(10);

    Assistant assistant = AiServices.builder(Assistant.class)
        .streamingChatLanguageModel(streamingChatModel)
        .chatMemory(chatMemory)
        .build();

    _LOG.info("💬: My name is Stéphane.\n");
    TokenStream tokenStream = assistant.chat("My name is Stéphane.");
    _LOG.info("🤖: ");
    tokenStream
        .onNext(_LOG::info)
        .onComplete(token -> {
          _LOG.info("\n💬: What is my name?\n");
          _LOG.info("🤖: ");
          assistant.chat("What is my name?")
              .onNext(_LOG::info)
              .onError(Throwable::printStackTrace).start();
        })
        .onError(Throwable::printStackTrace).start();



  }
}
```

### Run your chatbot

Make sure your environment variables are set:

```bash
export OVH_AI_ENDPOINTS_MODEL_NAME=Mistral-7B-Instruct-v0.3
export OVH_AI_ENDPOINTS_MODEL_URL=https://oai.endpoints.kepler.ai.cloud.ovh.net/v1
export OVH_AI_ENDPOINTS_ACCESS_TOKEN=<your-access-token>
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

Then run your Java application:

```console
💬: My name is Stéphane.
🤖: Hello Stéphane, how can I assist you today?

💬: What is my name?
🤖: Your name is Stéphane.
```

## Conclusion

In just a few steps, you have created your own AI chatbot powered by [LangChain4j](https://github.com/langchain4j/langchain4j), [Quarkus](https://github.com/quarkusio/quarkus), and [OVHcloud AI Endpoints](https://endpoints.ai.cloud.ovh.net/).

## Going further

If you want to go further and deploy your web app in the cloud, making your interface accessible to everyone, refer to the following articles and tutorials:

- [AI Deploy – Tutorial – Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image)
- [AI Deploy – Tutorial – Deploy a Gradio app for sketch recognition](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
