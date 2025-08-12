---
title: AI Endpoints - Model Context Protocol (MCP) with LangChain4j
excerpt: Learn how to use Model Context Protocol (MCP) with Java, LangChain4j and OVHcloud AI Endpoints
updated: 2025-08-06
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

OVHcloud **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)** allows developers to easily add AI features to their day to day developments.

In this article, we will explore how to create a Model Context Protocol (MCP) server and client using [Quarkus](https://quarkus.io/) and [LangChain4J](https://docs.langchain4j.dev/) to interact with OVHcloud AI Endpoints.

Combined with OVHcloud **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)** which offers both LLM and embedding models, it becomes easy to create advanced, production-ready assistants.

![image](images/robot.png){.thumbnail}

## Definition

- **Model Context Protocol**: MCP is a protocol that allows your LLM to ask for additional context or data from external sources during the generation processes. If you want more information about MCP, please refer to the [official documentation](https://modelcontextprotocol.io/introduction).
- **[LangChain4j](https://github.com/langchain4j/langchain4j)**: Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.
- **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**: A serverless platform by OVHcloud providing easy access to a variety of world-renowned AI models including Mistral, LLaMA, and more. This platform is designed to be simple, secure, and intuitive with data privacy as a top priority.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.
- This code example uses JBang, a Java-based tool for creating and running Java programs as scripts. For more information on JBang, please refer to the [JBang documentation](https://www.jbang.dev/documentation/guide/latest/installation.html).

## Instructions

In this tutorial, we will explore how to easily create in Java, a MCP Server using Quarkus and a client using LangChain4J.

### Creating a Server with Quarkus

The goal of this MCP server is to allow the LLM to ask for information about OVHcloud public cloud projects.

> [!primary]
>
> ℹ️ The code used to call the [OVHcloud API](https://eu.api.ovh.com/) is in the [GitHub repository](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/mcp-quarkus-langchain4j) and will not be detailed here.
> 

Thanks to Quarkus, the only thing you need to create a MCP server, is to define the tools that you want to expose to the LLM.

```java
// Quarkus code for MCP Server
public class PublicCloudUserTool {

    @RestClient
    OVHcloudMe ovhcloudMe;

    @Tool(description = "Tool to manage the OVHcloud public cloud user.")
    ToolResponse getUserDetails() {
        Long ovhTimestamp = System.currentTimeMillis() / 1000;
        return ToolResponse.success(
                new TextContent(ovhcloudMe.getMe(OVHcloudSignatureHelper.signature("me", ovhTimestamp),
                        Long.toString(ovhTimestamp)).toString()));
    }
}
```

⚠️ The description is very important, as it will be used by the LLM to choose the right tool for the task. ⚠️

At the time of writing, there are two types of MCP servers: [stdio](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#stdio) and [Streamable HTTP](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http).
This blog post uses the Streamable mode thanks to Quarkus with the quarkus-mcp-server-sse extension.

Run your server with the quarkus dev command. Your MCP server will be used on <http://localhost:8080>.

### Using the MCP server with LangChain4J

You can now use the MCP server with LangChain4J to create a powerful chatbot that can now interact with your OVHcloud account!

```java
///usr/bin/env jbang "$0" "$@" ; exit $?
//JAVA 24+
//PREVIEW
//DEPS dev.langchain4j:langchain4j-mcp:1.0.1-beta6 dev.langchain4j:langchain4j:1.0.1 dev.langchain4j:langchain4j-mistral-ai:1.0.1-beta6 


import dev.langchain4j.mcp.McpToolProvider;
import dev.langchain4j.mcp.client.DefaultMcpClient;
import dev.langchain4j.mcp.client.McpClient;
import dev.langchain4j.mcp.client.transport.McpTransport;
import dev.langchain4j.mcp.client.transport.http.HttpMcpTransport;
import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.mistralai.MistralAiChatModel;
import dev.langchain4j.service.AiServices;

// Simple chatbot definition with AI Services from LangChain4J
public interface Bot {
    String chat(String prompt);
}

void main() {
    // Mistral model from OVHcloud AI Endpoints
    ChatModel chatModel = MistralAiChatModel.builder()
            .apiKey(System.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN"))
            .baseUrl(System.getenv("OVH_AI_ENDPOINTS_MODEL_URL"))
            .modelName(System.getenv("OVH_AI_ENDPOINTS_MODEL_NAME"))
            .logRequests(false)
            .logResponses(false)
            .build();

    // Configure the MCP server to use
    McpTransport transport = new HttpMcpTransport.Builder()
            // https://xxxx/mcp/sse
            .sseUrl(System.getenv("MCP_SERVER_URL"))
            .logRequests(false)
            .logResponses(false)
            .build();

    // Create the MCP client for the given MCP server
    McpClient mcpClient = new DefaultMcpClient.Builder()
            .transport(transport)
            .build();

    // Configure the tools list for the LLM
    McpToolProvider toolProvider = McpToolProvider.builder()
            .mcpClients(mcpClient)
            .build();

    // Create the chatbot with the given LLM and tools list
    Bot bot = AiServices.builder(Bot.class)
            .chatModel(chatModel)
            .toolProvider(toolProvider)
            .build();

    // Play with the chatbot 🤖
    String response = bot.chat("Can I have some details about my OVHcloud account?");
    System.out.println("RESPONSE: " + response);

}
```

If you run the code you can see your MCP server and client in action:

```bash
$ jbang SimpleMCPClient.java

DEBUG -- Connected to SSE channel at http://127.0.0.1:8080/mcp/sse
DEBUG -- Received the server's POST URL: http://127.0.0.1:8080/mcp/messages/ZDdkZTEyYWMtNzczMC00NDVkLWFhMjktZWI1MGI0YjVjNzFh
DEBUG -- MCP server capabilities: 
{"capabilities":
  {"resources":
    {"listChanged":true},
    "completions":{},
    "logging":{},
    "tools":
      {"listChanged":true},
      "prompts":
        {"listChanged":true}
  },
  "serverInfo":
    {"version":"1.0.0-SNAPSHOT",
    "name":"ovh-mcp"
    },
  "protocolVersion":"2024-11-05"
}

RESPONSE:  Here are the details for your OVHcloud account:
- First name: Stéphane
- Last name: Philippart
- City: XXX
- Country: FR
- Language: fr_FR

You can refer to these details when interacting with the OVHcloud platform or support.
```

## Conclusion

In this article, we have seen how to create a Model Context Protocol (MCP) server and client using Quarkus and LangChain4J to interact with OVHcloud AI Endpoints.

## Go further

You can find the full code example in the [GitHub repository](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/mcp-quarkus-langchain4j). 

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

To discover how to build complete and powerful applications using AI Endpoints, explore our dedicated [AI Endpoints guides](/products/public-cloud-ai-and-machine-learning-ai-endpoints).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
