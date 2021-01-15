---
title: Exporting an HuggingFace pipeline
slug: export-huggingface-models
excerpt: Learn how to export an HuggingFace pipeline
section: Tutorials
order: 4
---
*Last updated 12th August, 2020.*

## Objective

[HuggingFace](https://huggingface.co/) is a popular machine learning library supported by OVHcloud ML Serving. This tutorial will cover how to export an [HuggingFace](https://huggingface.co/) pipeline.

## Requirements

-   A python environment with [HuggingFace](https://huggingface.co/) (`transformers`) installed, for supported version see the [capabilities](../compatibility-matrix)

## Save HuggingFace pipeline

Let's take an example of an `HuggingFace` pipeline to illustrate, this script leverages `PyTorch` based models:

``` {.python}
import transformers
import json

# Sentiment analysis pipeline
pipeline = transformers.pipeline('sentiment-analysis')

# OR: Question answering pipeline, specifying the checkpoint identifier
pipeline = transformers.pipeline('question-answering', model='distilbert-base-cased-distilled-squad', tokenizer='bert-base-cased')

# OR: Named entity recognition pipeline, passing in a specific model and tokenizer
model = transformers.AutoModelForTokenClassification.from_pretrained('dbmdz/bert-large-cased-finetuned-conll03-english')
tokenizer = transformers.AutoTokenizer.from_pretrained('bert-base-cased')
pipeline = transformers.pipeline('ner', model=model, tokenizer=tokenizer)

# Save pipeline
path = 'my_model_dir'
pipeline.save_pretrained(path)
# Save manifest (needed by OVHcloud ML Serving to load your pipeline)
with open(path + '/manifest.json', 'w') as file:
    json.dump({
        'type': 'huggingface_pipeline',
        'pipeline_class': type(pipeline).__name__,
        'tokenizer_class': type(pipeline.tokenizer).__name__,
        'model_class': type(pipeline.model).__name__,
    }, file, indent=2)
```

Your model is now serialized on your local file system in the `my_model_dir` directory.

The `manifest.json` should look like:

``` {.json}
{
  "type": "huggingface_pipeline",
  "pipeline_class": "FeatureExtractionPipeline",
  "tokenizer_class": "DistilBertTokenizer",
  "model_class": "DistilBertModel"
}
```

## Going further

-   You can check the [OVHcloud documentation on how to deploy custom models](../deploy-serialized-models).
-   You can check the [supported compatibilities for Tensorflow SavedModel](../compatibility-matrix)
