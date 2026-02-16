---
title: AI Endpoints - Create your own voice assistant
excerpt: Create a voice-enabled chatbot using ASR, LLM, and TTS endpoints in under 100 lines of code
updated: 2025-12-19
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

Imagine having a virtual assistant that listens to your voice, understands your questions, and responds with spoken answers, in under 100 lines of code. Thanks to [AI Endpoints](https://endpoints.ai.cloud.ovh.net/), this is now easily achievable.

## Objective

In this tutorial, you will learn how to create a fully functional Audio Virtual Assistant that:

- Accepts voice input from a microphone
- Transcribes it using ASR (Automatic Speech Recognition)
- Processes the request using LLM (Large Language Models)
- Responds using TTS (Text-To-Speech)

All of this is done by connecting **AI Endpoints** like puzzle pieces—allowing you to build your assistant in **under 100 lines of Python code**.

![connect-ai-apis](images/audio-virtual-assistant-app-blog-post-puzzles.png)

## Definitions

- **Automatic Speech Recognition (ASR)**: Technology that converts spoken language into text. ASR makes it possible in this context for your assistant to understand voice input.
- **Large Language Models (LLMs)**: Advanced models trained to understand context and generate human-like responses. Here, LLMs will handle the logic and answer your questions intelligently.
- **Text-To-Speech (TTS)**: Technology that converts written text into spoken audio. With TTS, your assistant will respond with natural-sounding speech, completing the conversation loop.

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- An access token for **OVHcloud AI Endpoints**. To create an API token, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

## Instructions

### Set up the environment

In order to use AI Endpoints APIs easily, create a `.env` file to store environment variables:

```bash
TTS_GRPC_ENDPOINT=nvr-tts-en-us.endpoints-grpc.kepler.ai.cloud.ovh.net:443
OVH_AI_ENDPOINTS_URL=https://oai.endpoints.kepler.ai.cloud.ovh.net/v1
OVH_AI_ENDPOINTS_ACCESS_TOKEN=<ai-endpoints-api-token>
```

**Make sure to replace the token value (`OVH_AI_ENDPOINTS_ACCESS_TOKEN`) by yours.** If you do not have one yet, follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide.

In this tutorial, we will be using the `Whisper-Large-V3` and `Mixtral-8x7b-Instruct-V01` models. Feel free to choose alternative models available on the [AI Endpoints catalog](https://catalog.endpoints.ai.ovh.net/).

Then, create a `requirements.txt` file with the following libraries:

```bash
openai==1.68.2
streamlit==1.36.0
streamlit-mic-recorder==0.0.8
nvidia-riva-client==2.15.1
python-dotenv==1.0.1
```

Then, launch the installation of these dependencies:

```console
pip install -r requirements.txt
```

*Note that Python 3.11 is used in this tutorial.*

### Importing necessary libraries and variables

Once this is done, you can create a Python file named `audio-virtual-assistant-app.py`, where you will first import Python librairies as follows:

```python
import os
import numpy as np
from openai import OpenAI
import riva.client
from dotenv import load_dotenv
import streamlit as st
from streamlit_mic_recorder import mic_recorder
```

After these lines, load and access the environnement variables of your `.env` file:

```python
# access the environment variables from the .env file
load_dotenv()

TTS_GRPC_ENDPOINT = os.environ.get('TTS_GRPC_ENDPOINT')
OVH_AI_ENDPOINTS_URL = os.environ.get('OVH_AI_ENDPOINTS_URL')
OVH_AI_ENDPOINTS_ACCESS_TOKEN = os.environ.get('OVH_AI_ENDPOINTS_ACCESS_TOKEN')
```

Next, define the clients that will be used to interact with the models:

```python
oai_client = OpenAI(
    base_url=OVH_AI_ENDPOINTS_URL,
    api_key=OVH_AI_ENDPOINTS_ACCESS_TOKEN
)

tts_client = riva.client.SpeechSynthesisService(
    riva.client.Auth(
        uri=TTS_GRPC_ENDPOINT,
        use_ssl=True,
        metadata_args=[["authorization", f"bearer {OVH_AI_ENDPOINTS_ACCESS_TOKEN}"]]
    )
)
```

💡 You are now ready to start coding your web app!

### Transcribe input question with ASR

First, create the **Automatic Speech Recognition (ASR)** function in order to transcribe microphone input into text:

```python
def asr_transcription(question, oai_client):
    return oai_client.audio.transcriptions.create(
        model="whisper-large-v3",
        file=question
    ).text
```

**In this function:**

- The audio input is sent from microphone recording, as `question`.
- An API call is made to the ASR AI Endpoint named `whisper-large-v3`.
- The text from the transcript response is returned by the function.

🎉 Now that you have this function, you are ready to transcribe audio files.

### Generate LLM response to input question

Now, create a function that calls the LLM client to provide responses to questions:

```python
def llm_answer(input, oai_client):
    response = oai_client.chat.completions.create(
                model="Mixtral-8x7B-Instruct-v0.1", 
                messages=input,
                temperature=0,
                max_tokens=1024,
            )
    msg = response.choices[0].message.content

    return msg
```

**In this function:**

- The conversation/messages are retrieved as parameters.
- A call is made to the chat completion LLM endpoint, using the `Mixtral8x7B` model.
- The model's response is extracted and the final message text is returned.

⏳ Almost there! All that remains is to implement the TTS to transform the LLM response into spoken words.

### Return the response using TTS

Then, build the **Text To Speech (TTS)** function in order to transform the written answer into oral reply:

```python
def tts_synthesis(response, tts_client):

    # set up config
    sample_rate_hz = 48000
    req = {
            "language_code"  : "en-US",                           # languages: en-US
            "encoding"       : riva.client.AudioEncoding.LINEAR_PCM ,
            "sample_rate_hz" : sample_rate_hz,                    # sample rate: 48KHz audio
            "voice_name"     : "English-US.Female-1"              # voices: `English-US.Female-1`, `English-US.Male-1`
    }

    # return response
    req["text"] = response
    synthesized_response = tts_client.synthesize(**req)
    
    return np.frombuffer(synthesized_response.audio, dtype=np.int16), sample_rate_hz
```

**In this function:**

- The LLM response is retrieved.
- A call is made to the TTS AI endpoint named `nvr-tts-en-us`.
- The audio sample and the sample rate are returned to play the audio automatically.

⚡️ You're almost there! The final step is to build your web app, making your solution easy to use with just a few lines of code.

### Build the LLM chat app with Streamlit

In this last step, create the chatbot app using [Streamlit](https://streamlit.io/), an open-source Python library that allows to quickly create user interfaces for Machine Learning models and demos. Here is a working code example:

```python
# streamlit interface
with st.container():
    st.title("💬 Audio Virtual Assistant Chatbot")

with st.container(height=600):
    messages = st.container()

    if "messages" not in st.session_state:
        st.session_state["messages"] = [{"role": "system", "content": "Hello, I'm AVA!", "avatar":"🤖"}]

    for msg in st.session_state.messages:
        messages.chat_message(msg["role"], avatar=msg["avatar"]).write(msg["content"])

with st.container():

    placeholder = st.empty()
    _, recording = placeholder.empty(), mic_recorder(
            start_prompt="START RECORDING YOUR QUESTION ⏺️", 
            stop_prompt="STOP ⏹️", 
            format="wav",
            use_container_width=True,
            key='recorder'
        )

    if recording:  
        user_question = asr_transcription(recording['bytes'], oai_client)

        if prompt := user_question:
            st.session_state.messages.append({"role": "user", "content": prompt, "avatar":"👤"})
            messages.chat_message("user", avatar="👤").write(prompt)
            msg = llm_answer(st.session_state.messages, oai_client)
            st.session_state.messages.append({"role": "assistant", "content": msg, "avatar": "🤖"})
            messages.chat_message("system", avatar="🤖").write(msg)

            if msg is not None:
                audio_samples, sample_rate_hz = tts_synthesis(msg, tts_client)
                placeholder.audio(audio_samples, sample_rate=sample_rate_hz, autoplay=True)
```

### Launch Streamlit web app locally

🚀 That’s it! Now your web app is ready to be used! You can start this Streamlit app locally by launching the following command:

```python
streamlit run audio-virtual-assistant-app.py
```

![app-overview](images/app_overview.png)

### Improvements

By default, the `nvr-tts-en-us` model supports only a limited number of characters per request when generating audio. If you exceed this limit, you will encounter errors in your application.

To work around this limitation, you can replace the existing `tts_synthesis` function with the following implementation, which processes text in chunks:

```python
def tts_synthesis(response, tts_client):
    # Split response into chunks of max 1000 characters
    max_chunk_length = 1000
    words = response.split()
    chunks = []
    current_chunk = ""

    for word in words:
        if len(current_chunk) + len(word) + 1 <= max_chunk_length:
            current_chunk += " " + word if current_chunk else word
        else:
            chunks.append(current_chunk)
            current_chunk = word
    if current_chunk:
        chunks.append(current_chunk)

    all_audio = np.array([], dtype=np.int16)
    sample_rate_hz = 16000

    # Process each chunk and concatenate the resulting audio
    for text in chunks:
        req = {
            "language_code": "en-US",
            "encoding": riva.client.AudioEncoding.LINEAR_PCM,
            "sample_rate_hz": sample_rate_hz,
            "voice_name": "English-US.Female-1",
            "text": text.strip(),
        }
        synthesized = tts_client.synthesize(**req)
        audio_segment = np.frombuffer(synthesized.audio, dtype=np.int16)
        all_audio = np.concatenate((all_audio, audio_segment))

    return all_audio, sample_rate_hz
```

## Conclusion

You’ve just created an Audio Virtual Assistant capable of natural conversation using voice, powered by ASR, LLM, and TTS endpoints.

This example demonstrates how powerful, yet simple, it is to leverage OVHcloud AI services to build intelligent applications with just a few lines of code.

➡️ Access the full code [here](https://github.com/ovh/public-cloud-examples/tree/main/ai/ai-endpoints/audio-virtual-assistant).

## Going further

If you want to go further and deploy your web app in the cloud, making your interface accessible to everyone, refer to the following articles and tutorials:

- [AI Deploy – Tutorial – Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image)
- [AI Deploy – Tutorial – Deploy a Gradio app for sketch recognition](/pages/public_cloud/ai_machine_learning/deploy_tuto_05_gradio_sketch_recognition)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please feel free to send us your questions, feedback, and suggestions regarding AI Endpoints and its features:

- In the #ai-endpoints channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud), where you can engage with the community and OVHcloud team members.