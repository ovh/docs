---
title: AI Endpoints - Build a RAG Chatbot with LangChain
excerpt: Learn how to build a RAG (Retrieval Augmented Generation) chatbot using Python, LangChain and AI Endpoints
updated: 2025-10-30
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

In this tutorial, we'll show you how to build a **Retrieval Augmented Generation (RAG)** chatbot that enhances answers by incorporating your **own custom documents** into the LLM’s context.

To do this, we will use **[LangChain](https://github.com/langchain-ai/langchain)**, a powerful open-source framework that simplifies working with LLMs in both Python and JavaScript. Combined with OVHcloud **[AI Endpoints](https://endpoints.ai.cloud.ovh.net/)** which offers both LLM and embedding models, it becomes easy to create advanced, production-ready assistants.

## Definition

**Retrieval Augmented Generation (RAG)**: Instead of relying solely on a model's built-in knowledge, RAG injects your data into the prompt to improve relevance.

Here’s how it works:

- Your documents are converted into vectors using an embedding model.
- When the user asks a question, it’s also turned into a vector.
- A similarity search is performed to find the most relevant data chunks.
- These are fed to the LLM as context, enabling grounded, accurate responses.

LangChain handles all these steps in one convenient pipeline.

## Instructions

### Set up the environment

In order to use AI Endpoints APIs easily, create a `.env` file to store environment variables:

```bash
OVH_AI_ENDPOINTS_MODEL_NAME=Mistral-7B-Instruct-v0.3
OVH_AI_ENDPOINTS_MODEL_URL=https://mistral-7b-instruct-v0-3.endpoints.kepler.ai.cloud.ovh.net/api/openai_compat/v1
OVH_AI_ENDPOINTS_EMBEDDING_MODEL_NAME=bge-m3
OVH_AI_ENDPOINTS_ACCESS_TOKEN=<ai-endpoints-api-token>
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

Then, create a `requirements.txt` file with the following libraries:

```bash
langchain
langchain-mistralai
langchain_community
langchain_chroma
argparse
unstructured
langchainhub
python-dotenv
```

Then, launch the installation of these dependencies:

```console
pip install -r requirements.txt
```

### Importing necessary libraries and variables

Once this is done, you can create a Python file named `chat-bot-streaming-rag.py`, where you will first import Python librairies as follows:

```python
from dotenv import load_dotenv
import argparse
import time
import os

from langchain_classic import hub

from langchain_mistralai import ChatMistralAI

from langchain_chroma import Chroma

from langchain_community.document_loaders import DirectoryLoader
from langchain_community.embeddings.ovhcloud import OVHCloudEmbeddings

from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

from langchain_text_splitters import RecursiveCharacterTextSplitter
```

After these lines, load and access the environnement variables of your `.env` file:

```python
# access the environment variables from the .env file
load_dotenv()

## Retrieve the OVHcloud AI Endpoints configurations
_OVH_AI_ENDPOINTS_ACCESS_TOKEN = os.environ.get('OVH_AI_ENDPOINTS_ACCESS_TOKEN') 
_OVH_AI_ENDPOINTS_MODEL_NAME = os.environ.get('OVH_AI_ENDPOINTS_MODEL_NAME') 
_OVH_AI_ENDPOINTS_MODEL_URL = os.environ.get('OVH_AI_ENDPOINTS_MODEL_URL') 
_OVH_AI_ENDPOINTS_EMBEDDING_MODEL_NAME = os.environ.get('OVH_AI_ENDPOINTS_EMBEDDING_MODEL_NAME')
```

Then add the main Python code:

```python
# Function in charge to call the LLM model.
# Question parameter is the user's question.
# The function print the LLM answer.
def chat_completion(new_message: str):
  # no need to use a token
  model = ChatMistralAI(model=_OVH_AI_ENDPOINTS_MODEL_NAME, 
                        api_key=_OVH_AI_ENDPOINTS_ACCESS_TOKEN,
                        endpoint=_OVH_AI_ENDPOINTS_MODEL_URL, 
                        max_tokens=1500, 
                        streaming=True)

  # Load documents from a local directory
  loader = DirectoryLoader(
     glob="**/*",
     path="./rag-files/",
     show_progress=True
  )
  docs = loader.load()

  # Split documents into chunks and vectorize them
  text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
  splits = text_splitter.split_documents(docs)
  vectorstore = Chroma.from_documents(documents=splits, embedding=OVHCloudEmbeddings(model_name=_OVH_AI_ENDPOINTS_EMBEDDING_MODEL_NAME, access_token=_OVH_AI_ENDPOINTS_ACCESS_TOKEN))

  prompt = hub.pull("rlm/rag-prompt")

  rag_chain = (
    {"context": vectorstore.as_retriever(), "question": RunnablePassthrough()}
    | prompt
    | model
  )

  print("🤖: ")
  for r in rag_chain.stream({"question", new_message}):
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

### Prepare your knowledge base

Create a folder named `rag-files` and place your `.txt`, .`md`, or other text-based documents there. These will be converted into embeddings and used during retrieval.

You can find example files in our [public-cloud-examples GitHub repository](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/python-langchain-chatbot/rag-files).

### Run the RAG chatbot

Run the following command:

```bash
python3 chat-bot-streaming-rag.py --question "What is AI Endpoints?"
```

Compare this to a non-RAG chatbot, you’ll see much more specific, informed answers when documents are injected into the context.

Indeed, here is a comparison of not using RAG:

![chatbot-without-rag](images/without-rag.png){.thumbnail}

and using RAG:

![chatbot-with-rag](images/with-rag.png){.thumbnail}

## Conclusion

You've now created a Retrieval-Augmented Generation (RAG) chatbot using your own documents and the OVHcloud AI Endpoints platform. LangChain’s integration with Chroma and embedding models makes RAG implementation straightforward—even production-ready.

## Going further

If you want to go further and deploy your chatbot in the cloud, making your interface accessible to everyone, refer to the following articles and tutorials:

- [AI Deploy – Tutorial – Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image)
- [AI Deploy – Tutorial – Deploy a Gradio app for sketch recognition](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.