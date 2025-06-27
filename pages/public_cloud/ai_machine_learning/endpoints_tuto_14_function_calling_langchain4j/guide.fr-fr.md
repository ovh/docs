---
title: AI Endpoints - Utiliser les appels de fonctions avec LangChain4J
excerpt: Apprenez à utiliser les appels de fonctions avec Java, LangChain4j et OVHcloud AI Endpoints
updated: 2025-06-24
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Objective

Stable Diffusion is a powerful artificial intelligence model to generate images from text descriptions.
You can use it, thanks to AI Endpoints, simply by calling the endpoint with a prompt. 
However, creating a good prompt for Stable Diffusion can be challenging.
Function Calling enables the AI system to perform more complex and dynamic tasks, and to leverage external knowledge and services to generate more accurate and informative responses. 
In the context of image generation, function calling can be used to enhance the quality of the prompts by optimizing them thanks to external tool based on a LLM.
In this tutorial, we will show you how to optimize your prompts using **Function Calling** and OVHcloud AI Endpoints.

To do this, we will use **[LangChain4j](https://github.com/langchain4j/langchain4j)**, Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.

Combined with OVHcloud **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)** which offers both LLM and embedding models, it becomes easy to create advanced, production-ready assistants.

![image](images/painter.png){.thumbnail}

## Definition

- **Function Calling**: Function calling refers to the ability of a language model or AI system to ask to invoke and execute pre-defined functions or tasks, such as data processing, calculations, or external API calls, in response to user input or prompts.
- **[LangChain4j](https://github.com/langchain4j/langchain4j)**: Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.
- **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**: A serverless platform by OVHcloud providing easy access to a variety of world-renowned AI models including Mistral, LLaMA, and more. This platform is designed to be simple, secure, and intuitive, with data privacy as a top priority.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.
- This code example uses JBang, a Java-based tool for creating and running Java programs as scripts. For more information on JBang, please refer to the [JBang documentation](https://www.jbang.dev/documentation/guide/latest/installation.html).

## Instructions

To create our application we will use LangChain4J to simplify the integration of the AI models and the function calling mechanism.

### Tool creation

To use the function calling mechanism, we need to define a tool.
In our example the goal of the tool is to call Stable Diffusion API to generate an image.

⚠️ This is not the model itself that calls the tool but the client that invokes the model. ⚠️

```java
//Image generation tool
@Tool("""
Tool to create an image with Stable Diffusion XL given a prompt and a negative prompt.
""")
void generateImage(@P("Prompt that explains the image") String prompt, @P("Negative prompt that explains what the image must not contains") String negativePrompt) throws IOException, InterruptedException {
System.out.println("Prompt: " + prompt);
System.out.println("Negative prompt: " + negativePrompt);

HttpRequest httpRequest = HttpRequest.newBuilder()
        .uri(URI.create(System.getenv("OVH_AI_ENDPOINTS_SD_URL")))
        .POST(HttpRequest.BodyPublishers.ofString("""
                {"prompt": "%s", 
                        "negative_prompt": "%s"}
                """.formatted(prompt, negativePrompt)))
        .header("accept", "application/octet-stream")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer " + System.getenv("OVH_AI_ENDPOINTS_SDXL_ACCESS_TOKEN"))
        .build();

HttpResponse<byte[]> response = HttpClient.newHttpClient()
        .send(httpRequest, HttpResponse.BodyHandlers.ofByteArray());

System.out.println("SDXL status code: " + response.statusCode());
Files.write(Path.of("generated-image.jpeg"), response.body());
}
```

⚠️ One of the main point to help the LLM to choose the right tool to use, is to provide clear and comprehensive description. ⚠️

Once the tool is ready, lets tell to the model that it can use it!

### Optimizing the model with a tool

First we create a simple chatbot.

```java
/// Chatbot definition.
/// The goal of the chatbot is to build a powerful prompt for Stable diffusion XML.
interface ChatBot {
    @SystemMessage("""
            Your are an expert of using the Stable Diffusion XL model.
            The user explains in natural language what kind of image he wants.
            You must do the following steps:
              - Understand the user's request.
              - Generate the two kinds of prompts for stable diffusion: the prompt and the negative prompt
              - the prompts must be in english and detailed and optimized for the Stable Diffusion XL model. 
              - once and only once you have this two prompts call the tool with the two prompts.
            If asked about to create an image, you MUST call the `generateImage` function.
            """)
    @UserMessage("Create an image with stable diffusion XLK following this description: {{userMessage}}")
    String chat(String userMessage);
}
```

It’s not mandatory to create a such detailed system message, but it helps the model to choose the tool when needed.

After this we assemble all the pieces together.

```java
// Chatbot with tool calling
void main() throws Exception {

    // Main chatbot configuration, choose on of the available models on the AI Endpoints catalog (https://endpoints.ai.cloud.ovh.net/catalog)
    ChatModel chatModel = MistralAiChatModel.builder()
            .apiKey(System.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN"))
            .baseUrl(System.getenv("OVH_AI_ENDPOINTS_MODEL_URL"))
            .modelName(System.getenv("OVH_AI_ENDPOINTS_MODEL_NAME"))
            .logRequests(false)
            .logResponses(false)
            // To have more deterministic outputs, set temperature to 0.
            .temperature(0.0)
            .build();

    // Add memory to fine tune the SDXL prompt.
    ChatMemory chatMemory = MessageWindowChatMemory.withMaxMessages(10);

    // Build the chatbot thanks to LangChain4J AI Servises mode
    ChatBot chatBot = AiServices.builder(ChatBot.class)
            .chatModel(chatModel)
            .tools(new ImageGenTools())
            .chatMemory(chatMemory)
            .build();

    // Start the conversation loop (enter "exit" to quit)
    String userInput = "";
    Scanner scanner = new Scanner(System.in);
    while (true) {
        System.out.print("Enter your message: ");
        userInput = scanner.nextLine();
        if (userInput.equalsIgnoreCase("exit")) break;
        System.out.println("Response: " + chatBot.chat(userInput));
    }
    scanner.close();
}
```

ℹ️ We use a loop to be able to ask the model to optimize the image generation parameters based on the previous response. ℹ️

And that it!
It’s time to test our Stable Diffusion optimizer.

```sh
# Output for chatbot calling
$ jbang ImageGeneration.java


Enter your message: Un chat roux mignon photo réaliste

Prompt: A high-quality, realistic image of a cute red cat, with expressive eyes, soft fur, and a playful pose. 
The cat should be well-lit, with a warm and inviting atmosphere.

Negative prompt: No text, no watermarks, no low-quality images, no cartoon-style, no blurry or pixelated images, 
no cats with missing body parts, no cats with unnatural colors, no cats in unrealistic settings, no cats with human features, 
no cats with inappropriate content.

Response: I have successfully generated the image for you. The image should be a high-quality, 
realistic image of a cute red cat, with expressive eyes, soft fur, and a playful pose. The cat should be well-lit, 
with a warm and inviting atmosphere. If you have any issues or need further assistance, please let me know.

Enter your message: exit
```

ℹ️ As you see, the model translate the prompt 😊

Here is the result of the prompt:
![A cut red cat generated by Stable Diffusion](images/painter.png)

## Conclusion

In this article, we have seen how to use Function Calling with OVHcloud AI Endpoints and LangChain4J.

## Go further

You can find the full code example in the [GitHub repository](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/function-calling-langchain4j). 

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

To discover how to build complete and powerful applications using AI Endpoints, explore our dedicated [AI Endpoints guides](/products/public-cloud-ai-and-machine-learning-ai-endpoints).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.