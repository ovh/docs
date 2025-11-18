---
title: AI Endpoints - Create a code assistant with Continue
excerpt: Build your own code assistant directly in VSCode or JetBrains IDEs using the Continue plugin
updated: 2025-10-29
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

### What is Continue?

**[Continue](https://www.continue.dev/)** is an IDE‑agnostic AI assistant that brings chat, code generation, and autocomplete capabilities directly into your editor. Compatible with VS Code and JetBrains IDEs (e.g., IntelliJ, PyCharm), Continue empowers you to plug in any compatible LLM hosted on **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**.

Continue enables you to configure and use your own LLMs, giving you full control over the models you use and how they interact with your code.

This tutorial describes how to configure Continue to connect to AI Endpoints LLMs, allowing these models to integrate with your editor to enhance coding efficiency, accuracy, and productivity.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

## Instructions

### Install Continue

Follow the [official Continue installation instructions](https://docs.continue.dev/docs/getting-started/install) for your IDE.

Once installed, Continue will share the same configuration across your IDEs.

### Configure Continue with AI Endpoints

Continue uses a YAML-based configuration file to manage:

- Chatbot tool models
- Tab autocomplete models

You can customize this configuration file to connect the plugin to AI Endpoints:

# Continue configuration for OVHcloud AI Endpoints

```yaml
name: ide-configuration
version: 0.0.1
schema: v1
models:
  - name: Meta-Llama-3_3-70B-Instruct
    provider: openai
    model: Meta-Llama-3_3-70B-Instruct
    apiBase: https://llama-3-3-70b-instruct.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat/v1
    apiKey: <you AI Endpoint API key> # replace with your API key
    roles: [chat, edit, apply, summarize]
  - name: Qwen3-Coder-30B-A3B-Instruct
    provider: openai
    model: Qwen3-Coder-30B-A3B-Instruct
    apiBase: https://qwen-3-coder-30b-a3b-instruct.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat/v1
    apiKey: <you AI Endpoint API key> # replace with your API key
    roles: [chat, edit, apply, summarize, autocomplete]
```

> [!primary]
>
> When you have modified your config file, make sure to reload it before trying to interact with your configured models!
>

Try out different LLMs from [our catalog](https://endpoints.ai.cloud.ovh.net/catalog) and choose the one that best fits your use case. You can switch between them easily in the IDE UI.

### Try It Out

Once Continue is configured with your AI Endpoints, you're ready to test both features:

**Chatbot Tool**

Use the chatbot sidebar to ask for help, generate code, or refactor logic with any of your configured models.

![Chatbot tool animation](images/chatbot.gif){.thumbnail}

**Tab Completion Tool**

Just start typing in your editor. The autocomplete model will complete code as you go — powered by your custom-configured model from AI Endpoints.

![Tab completion animation](images/tab-completion.gif){.thumbnail}

### Troubleshooting

- **Model not loading**: Verify the `apiBase` URL and ensure the `apiKey` variable is correctly set.
- **Autocomplete not working**: Make sure the model role includes `autocomplete` and that the selected model supports this capability.
- **Connection errors**: Check network connectivity and confirm your `apiKey` is valid.

## Conclusion

By using Continue and AI Endpoints, you now have access to a fully customizable code assistant, support for cutting-edge open-source large language models such as Qwen, Mixtral, and LLaMA 3, and the ability to manage your own configuration and resources on AI Endpoints.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
