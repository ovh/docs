---
title: AI Endpoints - Activer la mémoire de conversation dans votre chatbot avec LangChain (EN)
excerpt: Intégrez la mémoire de conversation à votre chatbot en utilisant AI Endpoints et LangChain
updated: 2025-12-19
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

Looking to build a chatbot that can hold more natural and coherent conversations with your users?

In this tutorial, we will explore how to implement **Conversational Memory** using **LangChain** and the **Mistral 7B** model thanks to **OVHcloud AI Endpoints**. This will allow your chatbot to remember previous interactions and use that context to generate more accurate and relevant responses.

We will introduce the different types of memory in LangChain. Then, we will compare the chatbot behaviour with and without memory.

![Comparaison between chatbot with and without memory](images/chatbot-with-without-memory-langchain.png){.thumbnail}

## Definitions

Before getting our hands into the code, let’s contextualize it by understanding the different types of memory available in LangChain:

### Conversational memory

**Conversational memory** for LLMs (Language Learning Models) refers to the ability of these models to remember and use information from previous interactions within the same conversation.

It works in a similar way to how humans use **short-term memory** in day-to-day conversations.

This feature is essential for **maintaining context** and coherence throughout a dialogue. It allows the model to recall details, facts, or inquiries mentioned earlier in the conversation (**chat history**), and use that information effectively to generate more relevant responses corresponding to the **new user inputs**.

**Conversational memory** can be implemented through various techniques and architecture, especially ing LangChain.

### LangChain memory types

LangChain provides several memory modules that can be used within a **ConversationChain**. Each has different tradeoffs regarding memory length, token usage, and summary style.

- **ConversationBufferMemory**: Stores the full list of messages from the conversation. Then, all interactions between the human and the AI ​​are passed to the `history` parameter.
- **ConversationSummaryMemory**: Solves a problem that arises when using **ConversationBufferMemory**: we quickly consume a large number of tokens, often exceeding the context window limit of even the most advanced LLMs. This second component makes it possible to limit the abusive use of tokens while exploiting memory. It summarizes the conversation history before sending it to the dedicated parameter (`history`).
- **ConversationBufferWindowMemory**: It introduces a window into the buffer memory, keeping only the K most recent interactions in memory.
- **ConversationSummaryBufferMemory**: A mix of **ConversationSummaryMemory** and **ConversationBufferWindowMemory**. It summarizes the earliest interactions while retaining the latest tokens in the human / AI conversation.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account.
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

## Instructions

### Set up the environment

In order to use **AI Endpoints APIs** easily, create a `.env` file to store environment variables:

```bash
LLM_AI_ENDPOINT=https://oai.endpoints.kepler.ai.cloud.ovh.net/v1
OVH_AI_ENDPOINTS_ACCESS_TOKEN=<ai-endpoints-api-token>
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

Then, create a `requirements.txt` file with the required libraries:

```bash
python-dotenv==1.0.1
langchain_openai==0.1.14
openai==1.68.2
langchain==0.2.17
```

Then, launch the installation of these dependencies:

```console
pip install -r requirements.txt
```

*Note that Python 3.11 is used in this tutorial.*

### Importing necessary libraries and variables

Once this is done, you can create a notebook or a Python file (e.g., `chatbot-memory-langchain.ipynb`), where you will first import your librairies as follows:

```python
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferWindowMemory
```

After these lines, load and access the environnement variables of your `.env` file:

```python
# access the environment variables from the .env file
load_dotenv()

ai_endpoint_token = os.getenv("OVH_AI_ENDPOINTS_ACCESS_TOKEN")
ai_endpoint_url = os.getenv("LLM_AI_ENDPOINT")
```

💡 You are now ready to test your LLM without conversational memory!

### Test Mistral 7B without conversational memory

Test the model in a basic way and see what happens with the context:

```python
# Set up the LLM
llm = ChatOpenAI(
        model_name="Mistral-7B-Instruct-v0.3", 
        openai_api_key=ai_endpoint_token,
        openai_api_base=ai_endpoint_url, 
        max_tokens=512,
        temperature=0.0
)

prompt = ChatPromptTemplate.from_messages([
("system", "You are an assistant. Answer to the question."),
("human", "{question}"),
])

# Create the conversation chain
chain = prompt | llm

# Start the conversation
question = "Hello, my name is Elea"
response = chain.invoke(question)
print(f"👤: {question}")
print(f"🤖: {response.content}")

question = "What is the capital of France?"
response = chain.invoke(question)
print(f"👤: {question}")
print(f"🤖: {response.content}")

question = "Do you know my name?"
response = chain.invoke(question)
print(f"👤: {question}")
print(f"🤖: {response.content}")
```

You should obtain the following result:

```console
👤: Hello, my name is Elea
🤖: Hello Elea, nice to meet you. How can I assist you today?
👤: What is the capital of France?
🤖: The capital city of France is Paris. Paris is one of the most famous and visited cities in the world. It is known for its art, culture, and cuisine.
👤: Do you know my name?
🤖: I'm an assistant and I don't have the ability to know your name without being told.
```

Note here that the model **does not** store the conversation in memory, since it no longer remembers the first name sent in the first prompt.

## Add memory window to your LLM

In this step, we add a Conversation Window Memory using the following component to fix the memory problem, by using the **ConversationBufferWindowMemory** from LangChain:

```console
memory = ConversationBufferWindowMemory(k=10)
```

Parameter `k` defines the **number of stored interactions**.

*Note that if we set **k=1**, it means that the window will remember the single latest interaction between the human and AI. That is the latest human input and the latest AI response.*

Then, we will have to create the conversation chain: 

```python
conversation = ConversationChain(llm=llm, memory=memory)
```

which gives the following code:

```python
# Set up the LLM
llm = ChatOpenAI(
        model_name="Mistral-7B-Instruct-v0.3", 
        openai_api_key=ai_endpoint_token,
        openai_api_base=ai_endpoint_url,
        max_tokens=512,
        temperature=0.0
)

# Add Converstion Window Memory
memory = ConversationBufferWindowMemory(k=10)

# Create the conversation chain
conversation = ConversationChain(llm=llm, memory=memory)

# Start the conversation
question = "Hello, my name is Elea"
response = conversation.predict(input=question)
print(f"👤: {question}")
print(f"🤖: {response}")

question = "What is the capital of France?"
response = conversation.predict(input=question)
print(f"👤: {question}")
print(f"🤖: {response}")

question = "Do you know my name?"
response = conversation.predict(input=question)
print(f"👤: {question}")
print(f"🤖: {response}")
```

By running the previous code, you should obtain this type of output:

```console
👤: Hello, my name is Elea
🤖: Hello Elea, nice to meet you. I'm an AI designed to assist and engage in friendly conversations. How can I help you today? Would you like to know a joke, play a game, or discuss a specific topic? I'm here to help and provide lots of specific details from my context. If I don't know the answer to a question, I'll truthfully say I don't know. So, what would you like to talk about today? I'm all ears!
👤: What is the capital of France?
🤖: The capital city of France is Paris. Paris is one of the most famous and romantic cities in the world. It is known for its beautiful architecture, iconic landmarks, world-renowned museums, delicious cuisine, vibrant culture, and friendly people. Paris is a must-visit destination for anyone who loves travel, adventure, history, art, culture, and new experiences. So, if you ever have the opportunity to visit Paris, I highly recommend that you take it! You won't be disappointed!
👤: Do you know my name?
🤖: Yes, I do. Your name is Elea. How can I help you today, Elea? Would you like to know a joke, play a game, or discuss a specific topic? I'm here to help and provide lots of specific details from my context. If I don't know the answer to a question, I'll truthfully say I don't know. So, what would you like to talk about today, Elea? I'm all ears!
```

As you can see, thanks to the **ConversationBufferWindowMemory**, your model keeps track of the conversation and retrieves previously exchanged information.

*Note: Here, the memory window is **k=10**, so feel free to customize the k value to suit your needs.*

## Conclusion

Well done 🎉! You can now benefit from the memory generated by the history of your interactions with the LLM. 🤖 This will enable you to streamline exchanges with the Chatbot and get more relevant answers!

You’ve also seen how easy it is to use AI Endpoints to create innovative turnkey solutions.

➡️ Access the full code [here](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/python-langchain-conversational-memory).

## Going further

If you would like to find out more, take a look at the following article on [memory chatbot with LangChain4j](/pages/public_cloud/ai_machine_learning/endpoints_tuto_10_memory_chatbot_langchain4j).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.