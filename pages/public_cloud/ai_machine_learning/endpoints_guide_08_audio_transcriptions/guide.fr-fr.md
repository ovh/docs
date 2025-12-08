---
title: AI Endpoints - Transcription Audio
excerpt: Découvrez comment transcrire des fichiers audio avec OVHcloud AI Endpoints
updated: 2025-10-03
---

> [!primary]
>
> AI Endpoints is covered by the **[OVHcloud AI Endpoints Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/48743bf-AI_Endpoints-ALL-1.1.pdf)** and the **[OVHcloud Public Cloud Special Conditions](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/d2a208c-Conditions_particulieres_OVH_Stack-WE-9.0.pdf)**.
>

## Introduction

[AI Endpoints](https://endpoints.ai.cloud.ovh.net/) is a serverless platform provided by OVHcloud that offers easy access to a selection of world-renowned, pre-trained AI models. The platform is designed to be simple, secure, and intuitive, making it an ideal solution for developers who want to enhance their applications with AI capabilities without extensive AI expertise or concerns about data privacy.

**Speech to Text** is a powerful feature that enables the conversion of spoken language into written text.

The Speech to Text APIs on AI Endpoints allow you to easily integrate this technology into your applications, enabling you to transcribe audio files with high accuracy. Our endpoints support various [audio formats](#parameters-overview) and provide flexible configuration options to suit your specific use cases.

## Objective

This documentation provides an overview of the Speech to Text endpoints offered on [AI Endpoints](https://endpoints.ai.cloud.ovh.net/). 

Visit our [Catalog](https://endpoints.ai.cloud.ovh.net/catalog) to find out which models are compatible with Audio Analysis.

The examples provided during this guide can be used with one of the following environments:

> [!tabs]
> **Python**
>> 
>> A [Python](https://www.python.org/) environment with the [openai client](https://pypi.org/project/openai/) and the pydantic library installed.
>>
>> ```sh
>> pip install openai pydantic
>> ```
>> 
> **JavaScript**
>> 
>> A [Node.js](https://nodejs.org/en) environment with the [request](https://www.npmjs.com/package/request) library.
>> Request can be installed using [NPM](https://www.npmjs.com/):
>> 
>> ```sh
>> npm install request
>> ```
>> 
> **cURL**
>> 
>> A standard terminal, with [cURL](https://cURL.se/) installed on the system.
>> 

*These examples will be using the [Whisper-large-v3](https://endpoints.ai.cloud.ovh.net/models/whisper-large-v3) model.*

## Authentication & Rate Limiting

All the examples provided in this guide use anonymous authentication, which makes it simpler to use but may cause rate limiting issues. If you wish to enable authentication using your own token, simply specify your API key within the requests.

Follow the instructions in the [AI Endpoints - Getting Started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) guide for more information on authentication.

## Request Body

### Parameters Overview

The request body for the audio transcription endpoint is of type `multipart/form-data` and includes the following fields:

| Parameter                | Required | Type          | Allowed Values / Format                                                                 | Default | Description                                                                                                                                                                                                 |
|--------------------------|----------|---------------|---------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **file**                     | Yes      | binary        | `mp3`, `mp4`, `aac`, `m4a`, `wav`, `flac`, `ogg`, `opus`, `webm`, `mpeg`, `mpga`                                    | -       | The **audio file object (not file name)** to transcribe.                                                                                                                                                      |
| **chunking_strategy**        | No       | `string`/`server_vad object`/`null`   | -                                                                                     | null    | Strategy for dividing the audio into chunks. More details [here](#chunking-strategy).                                                                                                                                                     |
| **diarize**                  | No       | `boolean`/`null`  | `true`/`false`                                                                            | false   | Enables speaker separation in the transcript. When set to true, the system separates the audio into segments based on speakers, by adding labels like "Speaker 1" and "Speaker 2", so you can see who said what in conversations such as interviews, meetings, or phone calls. More details [here](#diarization).                                                                                                                                           |
| **language**                 | No       | `string`/`null`   | [ISO-639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)                                                                      | -       | The language parameter specifies the language spoken in the input audio. Providing it can improve transcription accuracy and reduce latency (e.g. `en` for English, `fr` for French, `de` for German, `es` for Spanish, `zh` for Chinese, `ar` for Arabic ...). If not provided, the system will attempt automatic language detection, which may be slightly slower and less accurate in some cases. [More details on language compatibility and performance](#language-compatibility-and-performances).                                                                                                                                           |
| **model**                    | No       | `string`/`null`   | ID of the model to use                                                                | -       | Specifies the model to use for transcription. Useful when using our [unified endpoint](/pages/public_cloud/ai_machine_learning/endpoints_guide_07_virtual_models).                                                                                                                                                            |
| **prompt**                   | No       | `string`/`null`   | -                                                                                     | -       | Text to guide the model's style, translate transcript to english or continue a previous audio segment. The language in which you write the prompt must match the audio's one. More details about prompt usage [here](#prompt).                                                                                         |
| **response_format**          | No       | `enum`/`null`     | `json`, `text`, `srt`, `verbose_json`, `vtt`                                                | `verbose_json`    | Determines how the transcription data is returned. For detailed examples of each output type, visit the [Response Formats](#response-formats) section.                                                                                                                                                        |
| **stream**                   | No       | `boolean`/`null`  | `true`/`false`                                                                            | false   | If set to true, the model response data will be streamed to the client. Currently not supported for Whisper models. |
| **temperature**              | No       | `number`/`null`   | From `0.0` to `1.0`                                                                                | 0       | Controls randomness in the output. Higher values make the output more random, while lower values make it more focused and deterministic.                                                                   |
| **timestamp_granularities**  | No       | `array`/`null`    | `["segment"]`, `["word"]`, `["word", "segment"]`                                        | `["segment"]` | Controls the level of detail in the timestamps provided in the transcription. More details [here](#timestamp-granularities).                                                              |

### Example Usage

Now that you know which parameters are available, let’s look at how to put them into practice. Below are sample requests in **Python**, **cURL** and **JavaScript**:

> [!tabs]
> **Python (using requests)**
>> 
>> ```python
>> import os
>> import requests
>>
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/audio/transcriptions"
>> 
>> audio_file_path = "my_audio.mp3"
>> 
>> headers = {
>>    "accept": "application/json",
>> #   "Authorization": f"Bearer {os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN')}",
>> }
>> 
>> files = {"file": open(audio_file_path, "rb")}
>> 
>> data = {
>>     "model": "whisper-large-v3",
>>     "language": "en",
>>     "temperature": "0",
>>     "prompt": "<|transcribe|>",
>>     "diarize": "false",
>>     "timestamp_granularities": ["segment"],
>>     "response_format": "verbose_json"
>> }
>> 
>> response = requests.post(url, headers=headers, files=files, data=data)
>> 
>> if response.status_code == 200:
>>     # Handle response
>>     print(response.json())
>> else:
>>     print("Error:", response.status_code, response.text)
>> ```
>> 
> **Python (using OpenAI client)**
>> 
>> ```python
>> from openai import OpenAI
>> import os
>> 
>> url = "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/"
>> audio_file_path = "my_audio.mp3"
>> 
>> client = OpenAI(
>>     base_url=url,
>> #    api_key=os.getenv('OVH_AI_ENDPOINTS_ACCESS_TOKEN'),
>>     )
>> 
>> with open(audio_file_path, "rb") as f:
>>     transcript = client.audio.transcriptions.create(
>>         file=f,
>>         model="whisper-large-v3",
>>         language="en",
>>         temperature=0,
>>         prompt="<|transcribe|>",
>>         timestamp_granularities=["segment"],
>>         response_format="verbose_json"
>>     )
>> 
>> print(transcript)
>> ```
>>
>> > [!warning]
>> >
>> > **Warning**: The `diarize` parameter is not supported when using the OpenAI client library.
>> >
>> > To use diarization, you must make a direct HTTP request using `requests` or `cURL` with `diarize` set to `true`.
>> >
>>
> **cURL**
>> 
>> ```sh
>> curl -X POST "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/audio/transcriptions" \
>> -F "file=@my_audio.mp3" \
>> -F "model=whisper-large-v3" \
>> -F "language=en" \
>> -F "temperature=0" \
>> -F "prompt==<|transcribe|>" \
>> -F "diarize=false" \
>> -F "timestamp_granularities[]=segment" \
>> -F "response_format=verbose_json"
>> ```
>>
>> To [**authenticate with your API key**](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started), add an Authorization header:
>>
>> ```sh
>> `-H "Authorization: Bearer $OVH_AI_ENDPOINTS_ACCESS_TOKEN" \`
>> ```
>>
> **JavaScript (using OpenAI client)**
>>
>> ```javascript
>> import OpenAI from "openai";
>> import fs from "fs";
>> 
>> const openai = new OpenAI({
>>  baseURL: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/",
>>  // apiKey: process.env.OVH_AI_ENDPOINTS_ACCESS_TOKEN,
>> });
>> 
>> const transcript = await openai.audio.>> transcriptions.create({
>>   file: fs.createReadStream("my_audio.mp3"),
>>   model: "whisper-large-v3",
>>   language: "en",
>>   temperature: 0,
>>   prompt: "<|transcribe|>",
>>   timestamp_granularities: ["segment"],
>>   response_format: "verbose_json"
>> });
>> 
>> console.log(transcript);
>> ```
>>

**Output example**

By default, the transcription endpoint returns output in `verbose_json` format.

This includes detailed metadata such as language, segments, tokens, and diarization information:

```json
{
  "task": "transcribe",
  "success": true,
  "language": "en",
  "duration": 4.46975,
  "text": "My name is Octave and I am working at OVHcloud",
  "words": [],
  "segments": [
    {
      "id": 1,
      "seek": 0,
      "start": 0,
      "end": 3.48,
      "text": "My name is Octave and I am working at OVHcloud",
      "tokens": [
        50365,
        2588,
        275,
        ...
      ],
      "temperature": 0,
      "avg_logprob": -0.38066408,
      "compression_ratio": 0.9,
      "no_speech_prob": 0
    }
  ],
  "diarization": [],
  "usage": {
    "type": "duration",
    "duration": 5
  }
}
```

For **detailed examples** of each available output type, see the [Response Formats section](#response-formats) section.

### Parameters Details

While the previous overview gives a quick reference, certain parameters require more context to understand how and when to use them.

#### Diarization

The `diarize` parameter enables speaker separation in the generated transcript. When set to `true`, the system labels different voices as `Speaker 0`, `Speaker 1`, etc.

This is useful for meetings, debates, or interviews where multiple people are speaking.

> [!warning]
> - This parameter is only available with the default `verbose_json` [response format](#response-formats). Using any other will raise an error.
> - `diarize` is not supported when using the OpenAI client libraries. You must use a direct HTTP request with `requests`, `cURL`, or another HTTP client.

**Output Example**: Transcribing an audio file with `diarize` enabled:

Request:

```json
{
  "file": "<audio file object>",
  "diarize": true
}
```

Output:

```json
{
  "task":"transcribe",
  "success":true,
  "language":"en",
  "duration":8.939875,
  "text":"Hello Marie, your recent experiments are fascinating. Indeed, Albert. It's exciting to explore radioactivity together.",
  "words":[],
  "segments":[
    {"id":1,"seek":0,"start":0.0,"end":3.24,"text":"Hello Marie, your recent experiments are fascinating.","tokens":[50365,5490,...,13,50543],"temperature":0.0,"avg_logprob":-0.21679688,"compression_ratio":1.0361446,"no_speech_prob":0.0},
    {"id":2,"seek":0,"start":4.74,"end":8.1,"text":"Indeed, Albert. It's exciting to explore radioactivity together.","tokens":[50597,2421,..., 30,50780],"temperature":0.0,"avg_logprob":-0.21679688,"compression_ratio":1.0361446,"no_speech_prob":0.0}
  ],
  "diarization":[
    {"speaker":0,"text":"Hello Marie","start":0.0,"end":1.06},
    {"speaker":0,"text":"your recent experiments are fascinating.","start":1.16,"end":3.24},
    {"speaker":1,"text":"Indeed, Albert","start":4.74,"end":6.76},
    {"speaker":1,"text":"It's exciting to explore radioactivity together.","start":6.98,"end":8.1}
  ],
  "usage":{"type":"duration","duration":9.0}
}
```

#### Prompt

The `prompt` parameter lets you provide extra context to improve transcription. Think of it as giving the model a **hint** before it starts listening to your audio. This can help when: 

- **Correcting words** or acronyms that are often misrecognized.
- **Preserving context** if the audio is split into several parts.
- **Enforcing punctuation**, filler words, or writing style.
- **Translate** generated speech to English.

> [!warning]
> The prompt **must be written in the same language** as the audio. For example, if your audio is in English, your prompt must also be in English.

**Examples**

> [!tabs]
> **Correcting acronyms and names**
>> 
>> If the audio mentions complicated words such as products, companies, technical terms, or people but the model often mispells them, you could list them in your prompt:
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "prompt": "OVHcloud, Grand Palais, CNRS."
>> }
>> ```
>>
> **Translating transcript into English**
>>
>> To directly translate the transcription into English instead of keeping it in the source language, you can pass the special translation token `<|translate|>` in your prompt:
>>
>> ```json
>> {
>>      "file": <audio file object>,
>>      "prompt": "<|translate|>"
>> }
>> ```
>>
> **Maintaining context across segments**
>>
>> When processing split audio files, provide the transcript from the previous segment to maintain context and improve accuracy:
>>
>> ```json
>> {
>>      "file": <audio file object>,
>>      "prompt": "...previous segment transcript..."
>> }
>> ```
>>
> **Keeping punctuation**
>> 
>> If the model skips punctuation in the transcript, use a properly punctuated prompt to encourage correct formatting:
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "prompt": "Hello, welcome to my lecture on the history of France."
>> }
>> ```
>>
> **Preserving filler words**
>> 
>> If the model omits filler words when transcribing audio, like "ums" or "like", include them in your prompt:
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "prompt": "Uh, well, let me think... hmm, okay, so about OVHcloud."
>> }
>> ```
>>
> **Enforcing writing style**
>> 
>> For languages with multiple writing systems (like simplified vs. traditional Chinese), or to maintain consistent style:
>>
>> **Simplified Chinese:**
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "prompt": "以下是普通话的句子。"
>> }
>> ```
>>
>> **Traditional Chinese:**
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "prompt": "以下是普通話的句子。"
>> }
>> ```
>

#### Timestamp Granularities

The `timestamp_granularities` parameter controls the level of time markers included in the transcript. You have three possibilities there: 

> [!tabs]
> **Segment-level timestamps**
>> 
>> Timestamps for each segment, providing timing for larger sections of the audio.
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "timestamp_granularities": ["segment"],
>>     "response_format": verbose_json
>> }
>> ```
>>
>> ```json
>> words=[],
>> segments=[
>>    {
>>        'id': 1,
>>        'seek': 0,
>>        'start': 1.76,
>>        'end': 4.58,
>>        'text': ' France is the world's leading tourist destination',
>>        'tokens': [
>>            50365,
>>            1456,
>>            1181,
>>            ...
>>        ],
>>        'temperature': 0.0, 'avg_logprob': -0.14139344,
>>        'compression_ratio': 1.2769231,
>>        'no_speech_prob': 0.007171631
>>    },
>>    {
>>        'id': 2,
>>        'seek': 0,
>>        'start': 9.44,
>>        'end': 14.92,
>>        'text': 'having received 100 million foreign visitors in 2023.',
>>        'tokens': [
>>            50609,
>>            4042,
>>            25011,
>>            ...
>>        ],
>>        'temperature': 0.0,
>>        'avg_logprob': -0.14139344,
>>        'compression_ratio': 1.2769231,
>>        'no_speech_prob': 0.007171631
>>        },
>>    ...
>> ]
>> ```
>>
> **Word-level timestamps**
>>
>> Timestamps for each word, providing precise timing for every spoken word.
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "timestamp_granularities": ["word"],
>>     "response_format": verbose_json
>> }
>> ```
>>
>> ```json
>> words=[
>>     {'word': 'France', 'start': 1.76, 'end': 2.44}, 
>>     {'word': 'is', 'start': 2.44, 'end': 3.12}, 
>>     {'word': 'the', 'start': 3.12, 'end': 3.96}, 
>>     {'word': 'world', 'start': 3.96, 'end': 4.08},
>>     ...
>> ],
>> segments=[]
>> ```
>>
>> > [!warning]
>> > Generating `["word"]` timestamps incurs additional latency.
>>
> **Word and segment timestamps**
>> 
>> You can also get both:
>>
>> ```json
>> {
>>     "file": <audio file object>,
>>     "timestamp_granularities": ["word", "segment"],
>>     "response_format": verbose_json
>> }
>> ```
>>
>> ```json
>> words=[
>>     {'word': 'France', 'start': 1.76, 'end': 2.44}, 
>>     {'word': 'is', 'start': 2.44, 'end': 3.12}, 
>>     {'word': 'the', 'start': 3.12, 'end': 3.96}, 
>>     {'word': 'world', 'start': 3.96, 'end': 4.08},
>>     ...
>> ],
>> segments=[
>>    {
>>        'id': 1,
>>        'seek': 0,
>>        'start': 1.76,
>>        'end': 4.58,
>>        'text': ' France is the world's leading tourist destination',
>>        'tokens': [
>>            50365,
>>            1456,
>>            1181,
>>            ...
>>        ],
>>        'temperature': 0.0, 'avg_logprob': -0.14139344,
>>        'compression_ratio': 1.2769231,
>>        'no_speech_prob': 0.007171631
>>    },
>>    {
>>        'id': 2,
>>        'seek': 0,
>>        'start': 9.44,
>>        'end': 14.92,
>>        'text': 'having received 100 million foreign visitors in 2023.',
>>        'tokens': [
>>            50609,
>>            4042,
>>            25011,
>>            ...
>>        ],
>>        'temperature': 0.0,
>>        'avg_logprob': -0.14139344,
>>        'compression_ratio': 1.2769231,
>>        'no_speech_prob': 0.007171631
>>        },
>>    ...
>> ]
>> ```
>>
>> > [!warning]
>> > Generating `["word"]` timestamps can incur additional latency.
>>

#### Response Formats

The `response_format` determines how the transcription data is returned. Available formats include:

> [!tabs]
> **Verbose JSON (default)**
>> 
>> Returns the full transcription with metadata such as segments, tokens, language, duration, and diarization:
>>
>> ```json
>> {
>>   "task": "transcribe",
>>   "success": true,
>>   "language": "en",
>>   "duration": 4.46975,
>>   "text": "My name is Octave and I am working at OVHcloud.",
>>   "words": [],
>>   "segments": [
>>     {
>>       "id": 1,
>>       "seek": 0,
>>       "start": 0,
>>       "end": 3.48,
>>       "text": "My name is Octave and I am working at OVHcloud.",
>>       "tokens": [
>>         50365,
>>         2588,
>>         275,
>>         ...
>>       ],
>>       "temperature": 0,
>>       "avg_logprob": -0.38066408,
>>       "compression_ratio": 0.9,
>>       "no_speech_prob": 0
>>     }
>>   ],
>>   "diarization": [],
>>   "usage": {
>>     "type": "duration",
>>     "duration": 5
>>   }
>> }
>> ```
>> 
> **JSON**
>> 
>> Returns only the basic transcription data, such as transcribed text and usage information:
>>
>> ```json
>> {
>>   "text": "My name is Octave and I am working at OVHcloud.",
>>   "usage": {
>>     "type": "duration",
>>     "duration": 5
>>   }
>> }
>> ```
>> 
> **Text**
>> 
>> Returns only the transcribed text as a plain string.
>> ```text
>> My name is Octave and I am working at OVHcloud
>> ```
>>
> **SRT**
>> 
>> **Not yet supported.**
>>
> **VTT**
>> 
>> **Not yet supported.**
>> 

#### Chunking Strategy

The `chunking_strategy` parameter controls how the audio file is **divided into smaller segments** before transcription.

By **default**, when unset, the audio is **processed as a single block**. 

When set to `auto`, the system first normalizes audio loudness and then uses voice activity detection (VAD) to automatically split the audio at natural pauses (silence).

You can also provide a `server_vad` object to manually tweak VAD detection parameters. This lets you control the following parameters:

- `prefix_padding_ms`: Amount of audio to include before the VAD detected speech (in milliseconds).
- `silence_duration_ms`: Duration of silence to detect speech stop (in milliseconds). With shorter values the model will respond more quickly, but may jump in on short pauses from the user.
- `threshold`: Sensitivity threshold (0.0 to 1.0) for voice activity detection. A higher threshold will require louder audio to activate the model, and thus might perform better in noisy environments.

**Example**:

```json
{
  "file": "<audio file object>",
  "chunking_strategy": {
    "type": "server_vad",
    "prefix_padding_ms": 200,
    "silence_duration_ms": 500,
    "threshold": 0.6
  }
}
```

## Endpoint Limitations

### Language Compatibility and Performances

Whisper models are compatible with a **wide range of languages**, supporting approximately 100 in total.

However, transcription quality and speed depend on the **language of the input audio**. While Whisper v3 models are multilingual, their accuracy varies significantly by language:

- Common languages such as English, French, Spanish, and German generally produce the best results.  
- Less common or low-resource languages may yield lower accuracy or longer processing times.  
- Regional accents, dialects, or code-switching (switching between multiple languages in the same recording) can reduce accuracy further.  

Providing the `language` parameter explicitly (instead of relying on automatic detection) generally improves both accuracy and latency. Expected format is [ISO-639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) (e.g. `en` for English, `fr` for French, `de` for German, `es` for Spanish, `zh` for Chinese, `ar` for Arabic ...).

For a detailed performance breakdown by language, see [Whisper’s benchmark results](https://github.com/openai/whisper?tab=readme-ov-file#available-models-and-languages). This includes word error rates (WER) and character error rates (CER) across different datasets.  

### Prompt Length

For **Whisper-based models**, the `prompt` parameter only **considers the last 224 tokens** (approximately the final 200 characters). If your prompt is longer, tokens preceding the last 224 will be **ignored**.

### Parameters Support

- Streaming is not **yet supported** for audio transcription endpoints. All audio must be uploaded and processed in a single request.

- The `srt` and `vtt` response formats are not yet supported. Available response formats can be found [here](#response-formats).

### Supported Audio Formats, Durations and Sizes

**Audio Formats**

The API supports multiple audio formats as [mentioned before](#parameters-overview). Ensure your file is in a supported format to be successfully transcribed.

**File Size and Duration Limits**:

- **Authenticated requests** (using an [API key](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started)): Up to `2048 MB` or `10 800 seconds` of audio per request.
- **Anonymous requests**: Up to `10 MB` or `60 seconds` of audio per request.

**Transcribing larger audio files**

If your audio file exceeds these limits, you can split it into smaller chunks before sending it to the transcription endpoint.

Try to avoid splitting mid-sentence, as this can cause context to be lost and reduce transcription accuracy. Using compressed audio formats can also help reduce file size.

**Example**

Splitting Audio with open-source Python `pydub` library:

```python
from pydub import AudioSegment
import math
import os

# Load the audio file
audio = AudioSegment.from_mp3("long_interview.mp3")

# Define chunk duration in milliseconds (e.g., 30 minutes)
chunk_duration = 30 * 60 * 1000  # 30 minutes

# Calculate how many chunks we need
num_chunks = math.ceil(len(audio) / chunk_duration)

# Ensure output folder exists
output_dir = "chunks"
os.makedirs(output_dir, exist_ok=True)

# Loop through and export each chunk
for i in range(num_chunks):
    start_time = i * chunk_duration
    end_time = min((i + 1) * chunk_duration, len(audio))
    chunk = audio[start_time:end_time]

    chunk_filename = os.path.join(output_dir, f"long_interview_part{i+1}.mp3")
    chunk.export(chunk_filename, format="mp3")
    print(f"Exported {chunk_filename}")
```

Repeat this process to create multiple chunks, then transcribe each chunk individually.

> [!warning]
>
> OVHcloud makes no guarantees about the usability or security of third-party softwares like `pydub`.

## Conclusion

In this guide, we have explained how to use Speech to Text models available on [AI Endpoints](https://endpoints.ai.cloud.ovh.net/) models. We have provided a comprehensive overview of the feature which can help you perfect your integration of model for your own application.

## Go Further

Browse the full [AI Endpoints documentation](/products/public-cloud-ai-and-machine-learning-ai-endpoints) to further understand the main concepts and get started.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback, and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud).
