---
title: AI Partners Ecosystem - Voxist - Models concept (EN)
excerpt: Learn how to use Voxist models
updated: 2023-09-26
---

## Objective

OVHcloud offers different Artificial Intelligence services through its AI Partners Ecosystem. You will benefit from a catalogue of **ready-to-use applications** provided by our partners which you will easily be able to deploy according to your needs through **AI Deploy**.

**Voxist is an OVHcloud partner that offers AI services dedicated to Speech and Natural Language Processing. This guide will provide a detailed understanding of how Voxist services work.**

> [!primary]
>
> To find out more about Voxist billing, launching and capabilities, please refer to this [guide](ecosystem_03_voxist_billing_features_capabilities1.).
>

## Introduction

**Voxist** is a French start-up specialized in **Speech Recognition**. The platform enables all organizations, from start-ups to large corporations, to perform automatic speech recognition.

Speech recognition is supported through two APIs:

- REST API for **asynchronous** speech recognition, with support for diarization
- WebSocket API for **synchronous** speech recognition

**Supported languages:** French, English, German, Spanish, Portuguese, Italian, Polish

> [!primary]
>
> *Coming soon: Dutch and Hebrew*
>

## Voxist REST API

### Speech to text API

#### Transcription

This endpoint transcribes an audio recording into a JSON object. Configuration parameters can be passed to a specify language, activate punctuation recognition and diarization.

- **URL**: `/transcribe`

- **Method**: `POST`

- **Payload**:

Upload configuration parameters and audio files using `multipart/form-data` Content-Type.

Configuration parameters (`config` form-data parameter)

```json
{
  "punctuation": Boolean,
  "lang": String,
  "sample_rate": Integer,
  "diarization": Boolean,
  "wait": Boolean,
}
```

- **punctuation: `[true, false]`**: enables punctuation in output (default: false)
- **lang: `["fr", "en", "es", "pt", "it", "de", "pl"]`**: defines input audio language (default: "en")
- **sample_rate: `[8000, 16000]`**: default is 8Khz.
- **wait: `[true, false]`**: default is `true`. The request will wait for the transcription to be completed before returning. If set to `false`, the request will return immediately with a job id and an estimate of the completion time.

**Configuration example**:

```json
{
  "punctuation": false,
  "lang": "fr",
  "sample_rate": 16000,
  "diarization": true,
  "wait": false,
}
```

#### Success Response

- **Code**: `200 OK`

- **Response content**:

```json
[
  {
    "Lexical":String,
    "Confidence":Number,
    "Start_time":Number,
    "Speaker":Number,
    "Duration":Number
  },
// ...
]
```

- `Lexical`: Segment transcription
- `Confidence`: Transcription confidence
- `Start_time`: Segment offset in seconds
- `Duration`: Segment duration in seconds
- `Speaker`: if diarization is active, identifies speaker with a unique identifier `SPEAKER_00`, `SPEAKER_01`.

### Preparing audio files for transcription

To be successfully transcribed, audio files should be mono (single channel) WAV files. You can use FFmpeg to convert your input audio to the appropriate format with the following steps:

1. **Installation**:
   First, ensure you have FFmpeg installed on your machine. If not, download and install it from the [official website](https://ffmpeg.org/download.html) or use your package manager if you're on Linux.

2. **Command**:
   Once FFmpeg is installed, you can use the following command to convert an audio file:

   ```bash
   ffmpeg -i input_audio.ext -ac 1 -ar 16000 output_audio.wav
   ```

   Let's break down this command:

   - `-i input_audio.ext`: Specifies the input audio file named `input_audio.ext` where `ext` is the file extension (e.g., mp3, aac, flac).
   - `-ac 1`: Sets the output audio channels to 1 (mono).
   - `-ar 16000`: Sets the output audio sample rate to 16kHz.
   - `output_audio.wav`: The name of the output WAV file.

3. **Execute**:
   Replace `input_audio.ext` with the name and extension of your source audio file and execute the command. FFmpeg will then process the file and output the converted WAV file as `output_audio.wav`.

Remember to navigate (using the command line) to the directory containing your audio file or specify the full path in the command to make this work correctly.

### Calling the API with curl

- **Requirement**:

Make sure you have `curl` installed on you system.
Optionally use `jq` to format JSON output

Set appropriate environment variables in your shell.

```bash
FILE=audio-sample-en.wav
OVH_ENDPOINT=<set to endpoint>
```

- **Simple synchronous call**:

```bash
curl -X POST "$OVH_ENDPOINT/transcribe" \
 -H "Content-Type: multipart/form-data" \
 -H "accept: application/json" \
 -F "file_channel1=@$FILE;type=audio/x-wav" \
 -F config='{"lang": "en", "sample_rate": 16000, "punctuation": true, "wait": true}' | jq
```

It will return a JSON array with the following structure:

```json
[
  {
    "Lexical": "Our political reporter Jack Fink hosted a Facebook Live discussion on Obamacare and he asked the panel if they agree with the president who says let Obamacare implode.",
    "Confidence": 1,
    "Start_time": 0.06,
    "Speaker": 1,
    "Duration": 9.719999999999999
  },
  {
    "Lexical": "When do we stop being held hostage by the insurance companies? That's the question. That's the real question. When do we stop being held hostage by them? When we move from a for-profit system to a not-for-profit system in our health care delivery. Being a veteran, the only example of single-payer United States of America is the VA hospital.",
    "Confidence": 1,
    "Start_time": 10.14,
    "Speaker": 1,
    "Duration": 20.13
  },
  {
    "Lexical": "Ain't way wrong answer.",
    "Confidence": 1,
    "Start_time": 30.27,
    "Speaker": 1,
    "Duration": 1.8000000000000007
  },
  {
    "Lexical": "It was a great discussion. If you missed it, you can still watch it. It's on our CBS DFW Facebook page.",
    "Confidence": 1,
    "Start_time": 32.07,
    "Speaker": 1,
    "Duration": 6.18
  }
]
```

- **Asynchronous with Diarization**:

```bash
curl -X POST "$OVH_ENDPOINT/transcribe" \
 -H "Content-Type: multipart/form-data" \
 -H "accept: application/json" \
 -F "file_channel1=@$FILE;type=audio/x-wav" \
 -F config='{"lang": "en", "sample_rate": 16000, "diarization": true, "wait": false}'
```

The API will return immediately with:

```json
{
  "jobid": "c1fabb36-12e0-42cd-8670-61bcbf9665dc",
  "estimated_time":47.86
}
```

- `jobid`: a UUID representing the job execution
- `estimated_time`: conservative estimated time for transcription in seconds. It is strongly recommended to query the job after this time.

Fetch transcription:

```bash
curl "$OVH_ENDPOINT/transcription_result/c1fabb36-12e0-42cd-8670-61bcbf9665dc" \
 -H "accept: application/json"  | jq
```

It will return a JSON array with the following structure:

```json
[
  {
    "Lexical": "Our political reporter Jack Fink hosted a Facebook Live discussion on Obamacare and he asked the panel if they agree with the president who says let Obamacare implode.",
    "Confidence": 1,
    "Start_time": 0.01,
    "Speaker": "SPEAKER_00",
    "Duration": 9.56
  },
  {
    "Lexical": "When do we stop being held hostage by the insurance companies? That's the question. That's the real question. When do we stop being held hostage by them?",
    "Confidence": 1,
    "Start_time": 10.11,
    "Speaker": "SPEAKER_01",
    "Duration": 7.8
  },
  {
    "Lexical": "when we move from a for-profit system to a not-for-profit system in our health care delivery.",
    "Confidence": 1,
    "Start_time": 17.81,
    "Speaker": "SPEAKER_02",
    "Duration": 7.08
  },
  {
    "Lexical": "Being a veteran, the only example of a single payer in the United States of America is the VA hospital. Ain't way wrong answer.",
    "Confidence": 1,
    "Start_time": 24.89,
    "Speaker": "SPEAKER_01",
    "Duration": 8.21
  },
  {
    "Lexical": "It was a great discussion. If you missed it, you can still watch it. It's on our CBS DFW Facebook page.",
    "Confidence": 1,
    "Start_time": 32.93,
    "Speaker": "SPEAKER_00",
    "Duration": 5.49
  }
]
```

## Voxist WebSocket API

With the websocket API

- **Payload**:

The first websocket message sent it:

```json
{
  "punctuation": Boolean,
  "lang": String,
  "sample_rate": Integer,
  "diarization": Boolean,
}
```

- **punctuation: `[true, false]`**: enables punctuation in output (default: false)
- **lang: `["fr", "en", "es", "pt", "it", "de", "pl"]`**:  defines input audio language (default: "en")
- **sample_rate: `[8000, 16000]`**: default is 8Khz

### Calling the API in Python

- **Requirement**:

Install the requested packages:

```console
pip install asyncio websockets wave
```

- **Code**:

```python
import asyncio
import json
import sys
import time
import wave
import websockets

async def run_test(uri):
    async with websockets.connect(uri) as websocket:
        wf = wave.open("<path_to_audio_file>", "rb")
        await websocket.send(
            '{ "config" : { "sample_rate" : %d, "lang" : "en"} }'
            % (wf.getframerate())
        )
        buffer_size = int(wf.getframerate() * 0.2)  # 0.2 seconds of audio
        while True:
            data = wf.readframes(buffer_size)

            if len(data) == 0 or isinstance(data, str):
                break
            await websocket.send(data)
            r = json.loads(await websocket.recv())
            if r["Text"] and r["Text"] != "":
                print(r)
        # time.sleep(10)
        await websocket.send('{"eof" : 1}')
        print(await websocket.recv())

asyncio.run(run_test("wss://<ovh_app_endpoint>"))
```

> [!primary]
>
> Please, don't forget to replace:
> 1. <path_to_audio_file> - ex: audios/[audio-sample-en.wav](https://github.com/ovh/ai-training-examples/blob/main/partners-ecosystem/voxist/audios/audio-sample-en.wav)
> 2. <ovh_app_endpoint> - ex: 98b38dff-1db6-4250-96d9-02512251f247.app.gra.ai.cloud.ovh.net
>

Run code with `python3 asr-test.py`

Transcription starts streaming on standard output.

```
{'Sentence_id': 1, 'Text': 'Our political reporter Jack Fink hosted a Facebook live discussion on Obamacare and he asked the panel if they agree with the president who says let Obamacare implode.', 'Confidence': 1}
{'Sentence_id': 2, 'Text': 'When do we stop being held hostage by the insurance companies?', 'Confidence': 1}
{'Sentence_id': 3, 'Text': "That's the question. That's the real question. When do we stop being held hostage by them? When we move from a for-profit system to a not-for-profit system in our healthcare.", 'Confidence': 1}
{'Sentence_id': 4, 'Text': 'delivery.', 'Confidence': 1}
{'Sentence_id': 5, 'Text': 'being a veteran.', 'Confidence': 1}
{'Sentence_id': 6, 'Text': 'The only example of a single payer in the United States of America is the VA hospital.', 'Confidence': 1}
{'Sentence_id': 7, 'Text': "Ain't way wrong answer.", 'Confidence': 1}
{"Sentence_id": 8, "Text": "It was a great discussion. If you missed it, you can still watch it. It's on our CBS DFW Facebook page.", "Confidence": 1, "Words": null}
```

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.gg/ovhcloud)
