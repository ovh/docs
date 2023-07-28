---
title: AI Notebooks - Tutorial - Fine-tuning LLaMA 2
excerpt: Unlock the full Potential of LLaMA 2 by fine-tuning it on your own dataset using a single GPU, QLoRA and AI Notebooks
updated: 2023-07-25
---

On July 18, 2023, [Meta](https://about.meta.com/) released [LLaMA 2](https://ai.meta.com/llama/), the latest version of their open-source Large Language Model (LLM).

Trained between January 2023 and July 2023 on 2 trillion tokens, LLaMA 2 outperforms other LLMs on many benchmarks, including reasoning, coding, proficiency, and knowledge tests. This release comes in different flavors, with parameter sizes of 7B, 13B, and a mind-blowing 70B. Models are intended for free for both commercial and research use in English.

## Objective

The purpose of this tutorial is to show you how it is possible to fine-tune LLaMA 2 models using [OVHcloud AI Notebooks](https://www.ovhcloud.com/en-au/public-cloud/ai-notebooks/) and a single GPU. This allows you to retrain the model to suit your needs, using your own dataset. We will use [QLoRA](https://arxiv.org/abs/2305.14314), a highly efficient LLM fine-tuning technique.

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)
- An AI Notebooks project created inside a [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account
- A user for AI Notebooks

To access LLaMA 2 models, you will also need to follow the requirements indicated in the notebook.

## Instructions

You can launch the notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au) or via the ovhai [CLI](/pages/platform/ai/cli_11_howto_run_notebook_cli).

### Launching a Jupyter notebook with "Conda" via UI (Control Panel)

To launch your notebook from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), refer to the following steps.

#### Code editor

Choose the `Jupyterlab` code editor.

#### Framework

In this tutorial, the `conda` framework is used.

#### Resources

Using at least one **GPU is mandatory**, since fine-tuning LLMs is an intensive task.

### Launching a Jupyter notebook with "conda" via CLI

*If you do not use our CLI yet, follow [this guide](/pages/platform/ai/cli_10_howto_install_cli) to install it.*

If you want to launch your notebook with the OVHcloud AI CLI, choose the `jupyterlab` editor and the `conda` framework.

To access the different versions of `conda` available, run the following command:

```console
ovhai capabilities framework get conda -o yaml
```

> [!primary]
>
> If you do not specify a version, your notebook starts with the default version of `conda`.
>

You will also need to choose the number of GPUs to use in your notebook using `<nb-gpus>`.

To launch your notebook, run the following command: 

```console
ovhai notebook run conda jupyterlab \
		--name <notebook-name> \
		--framework-version <conda-version> \
  	    --gpu <nb-gpus>
```

You can then reach your notebook’s URL once the notebook is running.

### Accessing the notebooks

Once our [AI examples repository](https://github.com/ovh/ai-training-examples/) has been cloned in your environment, find the fine-tuning notebook tutorial by following this path: `ai-training-examples` > `notebooks` > `natural-language-processing` > `llm` > `miniconda` > `llama2-fine-tuning` > `llama_2_finetuning.ipynb`.

Direct link to the notebook can be found [here](https://github.com/ovh/ai-training-examples/blob/main/notebooks/natural-language-processing/llm/miniconda/llama2-fine-tuning/llama_2_finetuning.ipynb).

## Going further

Don't forget to keep an eye on our upcoming tutorials, where we will be deploying our fine-tuned LLaMA model on [AI Deploy](https://www.ovhcloud.com/en-au/public-cloud/ai-deploy/) for inference!

In the meantime, we invite you to take a look at our other NLP tutorials: 

- [Analyse sentiments on Tweets](/pages/platform/ai/notebook_tuto_05_hugging_face_sentiment_analysis)

- [Create a Spam classifier](/pages/platform/ai/notebook_tuto_09_spam_classifier)

- [Discover speech to text powers and use them to generate video subtitles, meeting scripts and summaries](/pages/platform/ai/notebook_tuto_08_speech_to_text)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
