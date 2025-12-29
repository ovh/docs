---
title: AI Endpoints - Build a Python Chatbot with LangChain
excerpt: Learn how to build a chatbot in Python using LangChain and OVHcloud AI Endpoints
updated: 2025-12-19
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

**[LangChain](https://github.com/langchain-ai/langchain)** is one of the most popular frameworks for building LLM-powered applications like virtual assistants and chatbots. It provides structured abstractions and tooling to easily orchestrate prompts, memory, chains, and agents.

In this tutorial, we’ll use LangChain (Python edition) with OVHcloud **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)** to create a **command-line chatbot**, starting with a simple blocking mode, then enabling **streaming** for real-time feedback.

## Objective

This tutorial demonstrates how to:

- Build a chatbot using LangChain and FastAPI
- Connect to OVHcloud AI Endpoints to access LLMs
- Enable streaming to improve UX
- Execute the chatbot from the command line

## Definitions

- **Streaming LLM Response**: Instead of waiting for a full response from the model, streaming allows the application to start processing output tokens as they’re generated. This creates a smoother, faster user experience—especially useful for chatbots.
- **[LangChain4j](https://github.com/langchain4j/langchain4j)**: Java-based framework inspired by [LangChain](https://github.com/langchain-ai/langchain), designed to simplify the integration of LLMs (Large Language Models) into applications. It offers abstractions and annotations for building intelligent agents and chatbots. Note that LangChain4j is not officially maintained by the LangChain team, despite the similar name.
- **[Quarkus](https://quarkus.io/)**: A Kubernetes-native Java framework designed to optimize Java applications for containers and the cloud. In this tutorial we will use the [quarkus-langchain4j](https://github.com/quarkiverse/quarkus-langchain4j/) extension.
- **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)**: A serverless platform by OVHcloud providing easy access to a variety of world-renowned AI models including Mistral, LLaMA, and more. This platform is designed to be simple, secure, and intuitive, with data privacy as a top priority.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- Python 3.8 or higher
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

## Instructions

### Set up the environment

In order to use AI Endpoints APIs easily, create a `.env` file to store environment variables:

```bash
_OVH_AI_ENDPOINTS_ACCESS_TOKEN=<ai-endpoints-api-token>
_OVH_AI_ENDPOINTS_MODEL_NAME=Mistral-7B-Instruct-v0.3 # (or any other model you want to use)
_OVH_AI_ENDPOINTS_URL=https://oai.endpoints.kepler.ai.cloud.ovh.net/v1
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

Then, create a `requirements.txt` file with the following libraries:

```bash
fastapi==0.110.0
openai==1.13.3
langchain-mistralai==0.1.7
python-dotenv==1.0.1
```

Then, launch the installation of these dependencies:

```console
pip install -r requirements.txt
```

### Create a blocking chatbot

Create a new file named `chat-bot.py` and paste the following code:

```python
import argparse

from langchain_mistralai import ChatMistralAI
from langchain_core.prompts import ChatPromptTemplate

# Access the environment variables from the .env file
load_dotenv()

## Set the OVHcloud AI Endpoints token to use models
_OVH_AI_ENDPOINTS_ACCESS_TOKEN = os.environ.get('OVH_AI_ENDPOINTS_ACCESS_TOKEN') 
_OVH_AI_ENDPOINTS_MODEL_NAME = os.environ.get('OVH_AI_ENDPOINTS_MODEL_NAME') 
_OVH_AI_ENDPOINTS_URL = os.environ.get('OVH_AI_ENDPOINTS_URL') 

# Function in charge to call the LLM model.
# Question parameter is the user's question.
# The function print the LLM answer.
def chat_completion(question: str):
  # no need to use a token
  model = ChatMistralAI(model=_OVH_AI_ENDPOINTS_MODEL_NAME, 
                        api_key=_OVH_AI_ENDPOINTS_ACCESS_TOKEN,
                        endpoint=_OVH_AI_ENDPOINTS_URL, 
                        max_tokens=1500)

  prompt = ChatPromptTemplate.from_messages([
    ("system", "You are Nestor, a virtual assistant. Answer to the question."),
    ("human", "{question}"),
  ])

  chain = prompt | model

  response = chain.invoke(question)

  print(f"🤖: {response.content}")

# Main entrypoint
def main():
  # User input
  parser = argparse.ArgumentParser()
  parser.add_argument('--question', type=str, default="What is the meaning of life?")
  args = parser.parse_args()
  chat_completion(args.question)

if __name__ == '__main__':
    main()
```

You can test your new assistant with the following command:

```bash
python3 chat-bot.py --question "What is OVHcloud?"
```

Which will give you an output similar to: 

```console
🤖: OVHcloud is a global cloud computing company that offers a variety of services such as virtual private servers, dedicated servers, 
storage solutions, and other web services. 
It was founded in France and has since expanded to become a leading provider of cloud infrastructure, with data centers located around the 
world. OVHcloud offers a range of options for businesses and individuals, including high-performance computing, big data, and machine learning solutions. 
It is known for its commitment to data security and privacy, 
and its infrastructure is designed to be flexible, scalable, and reliable.
```

### Enable streaming mode

Now you have a chatbot, what do you think about adding the streaming feature? The streaming gives your chatbot the ability to display the information when it’s ready, and to not wait for the whole message to be processed on the server side.

To do this you can update the previous Python script as following:

```python
import argparse
import time

from langchain_mistralai import ChatMistralAI
from langchain_core.prompts import ChatPromptTemplate

# Access the environment variables from the .env file
load_dotenv()

## Set the OVHcloud AI Endpoints token to use models
_OVH_AI_ENDPOINTS_ACCESS_TOKEN = os.environ.get('OVH_AI_ENDPOINTS_ACCESS_TOKEN') 
_OVH_AI_ENDPOINTS_MODEL_NAME = os.environ.get('OVH_AI_ENDPOINTS_MODEL_NAME') 
_OVH_AI_ENDPOINTS_URL = os.environ.get('OVH_AI_ENDPOINTS_URL') 


# Function in charge to call the LLM model.
# Question parameter is the user's question.
# The function print the LLM answer.
def chat_completion(new_message: str):
  # no need to use a token
  model = ChatMistralAI(model=_OVH_AI_ENDPOINTS_MODEL_NAME, 
                        api_key=_OVH_AI_ENDPOINTS_ACCESS_TOKEN,
                        endpoint=_OVH_AI_ENDPOINTS_URL, 
                        max_tokens=1500, 
                        streaming=True)

  prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a Nestor, a virtual assistant. Answer to the question."),
    ("human", "{question}"),
  ])

  chain = prompt | model

  print("🤖: ")
  for r in chain.stream({"question", new_message}):
    print(r.content, end="", flush=True)
    time.sleep(0.150)

# Main entrypoint
def main():
  # User input
  parser = argparse.ArgumentParser()
  parser.add_argument('--question', type=str, default="What is the meaning of life?")
  args = parser.parse_args()
  chat_completion(args.question)

if __name__ == '__main__':
    main()
```

Run it with:

```bash
python3 chat-bot-streaming.py --question "What is OVHcloud?"
```

![image](images/llm-streaming.gif){.thumbnail}

You should now see the chatbot typing its response in real time! 💬✨

## Conclusion

With only a few lines of Python code, you now have a working chatbot connected to powerful LLMs hosted on OVHcloud AI Endpoints. You’ve also enhanced it with streaming for real-time UX.

## Going further

You can then build and deploy a web app in the cloud, making your interface accessible to everyone. To do so, refer to the following articles and tutorials:

- [AI Deploy – Tutorial – Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image)
- [AI Deploy – Tutorial – Deploy a Gradio app for sketch recognition](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.
