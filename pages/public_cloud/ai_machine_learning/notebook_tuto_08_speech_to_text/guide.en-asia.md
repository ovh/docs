---
title: AI Notebooks - Tutorial - Use Speech-to-Text powers on audio and video
excerpt: How to convert Speech to Text using AI Notebooks
updated: 2022-09-01
---

## Objective

The purpose of this tutorial is to show you how it is possible to **convert speech into text** and **generate transcripts** thanks to AI Notebooks.

![image](images/speech-to-text.jpeg){.thumbnail}

In **Natural Language Processing** (NLP), speech-to-text is a Deep Learning task that enables machines to understand and read human language. There are many applications: transcription, summaries, diarization, subtitle generation, ...

This documentation allows you to test and launch **3 AI Notebooks** allowing you to get to grips with and use various speech-to-text features.

1. The first one will teach you the **basics of audio transcript**. You will be able to transcribe long local or YouTube audio files, measure the quality of a transcription, add punctuation and summarize them.
2. The second tutorial is intended to discover more advanced steps such as the **detection of speaker changes (diarization)** and the **generation of video subtitles**.
3. The last tutorial is a **comparison of different Speech-to-Text models** to find the best one among those available.

> [!primary]
>
> The following instructions correspond to **each** of these 3 tutorials.
>

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- A user for AI Notebooks

## Instructions

You can launch your notebook from the [OVHcloud Control Panel](/links/manager) or via the ovhai [CLI](/pages/public_cloud/ai_machine_learning/cli_11_howto_run_notebook_cli).

Direct link to the full code can be found [here](https://github.com/ovh/ai-training-examples/tree/main/notebooks/natural-language-processing/speech-to-text/miniconda).

### Launching a Jupyter notebook with "Miniconda" via UI

To launch your notebook from the [OVHcloud Control Panel](/links/manager), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `Miniconda` framework is used.

> [!warning]
>
> With **Miniconda**, you will be able to set up your environment by installing the Python libraries you need.
>

You can choose the `conda` version.

> [!primary]
>
> The default version of **conda** is functional for this tutorial: `conda-py39-cuda11.2-v22-4`.
>

#### Resources

GPU is recommended since audio transcription is resource intensive.

> [!primary]
>
> Here, using `1 GPU` is sufficient.
>

### Launching a Jupyter notebook with "Miniconda" via CLI

If you want to launch it with the CLI, choose the `jupyterlab` editor and the `conda` framework.

To access the different versions of `conda` available, run the following command.

```bash
ovhai capabilities framework list -o yaml
```

*This tutorial has been launched with the `conda-py39-cuda11.2-v22-4` version.*

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `conda`.
>

Choose the number of CPUs/GPUs (`<nb-cpus>` or `<nb-gpus>`) to use in your notebook and use the following command.

> [!primary]
>
> Here we recommend using `1 GPU`.
>

```bash
ovhai notebook run conda jupyterlab \
		--name <notebook-name> \
		--framework-version <conda-version> \
  	--gpu <nb-gpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebooks

Once the repository has been cloned, find your notebook by following this path: `ai-training-examples` > `notebooks` > `natural-language-processing` > `speech-to-text`.

1. You can find the first tutorial in the `basics` folder. A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/speech-to-text/miniconda/basics/speech-to-text-basics.ipynb).
2. The second tutorial corresponds to the `advanced` folder. A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/speech-to-text/miniconda/advanced/speech-to-text-advanced.ipynb).
3. The last folder, named `compare-models`, contains the third tutorial. A preview of this notebook can be found on GitHub [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/speech-to-text/miniconda/compare-models/speech-to-text-compare-models.ipynb).

## Go further

- With NLP, you can do **sentiment analysis**. For more information, click [here](/pages/public_cloud/ai_machine_learning/notebook_tuto_05_hugging_face_sentiment_analysis).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
