---
title: Exporting a FastAI model
slug: export-fastai-models
excerpt: Learn how to export a FastAI model
section: Tutorials
order: 5
---
*Last updated 18th August, 2020.*

## Objective

[FastAI](https://www.fast.ai/) is a popular machine learning library supported by OVHcloud ML Serving. This tutorial will cover how to export a [FastAI](https://www.fast.ai/) trained model.

## Requirements

-   A python environment with [FastAI](https://www.fast.ai/) installed

## Save a simple model

Let's take a simple example of a `FastAI` model to illustrate:

``` {.python}
import os
from fastai.text import *

# Load dataset
path = untar_data(URLs.IMDB_SAMPLE)
df = pd.read_csv(path / 'texts.csv')
data_lm = TextLMDataBunch.from_csv(path, 'texts.csv')

# Initialize classifier
data_clas = TextClasDataBunch.from_csv(path, 'texts.csv', vocab=data_lm.train_ds.vocab, bs=32)
learn = language_model_learner(data_lm, AWD_LSTM, drop_mult=0.5)

# Train ...

# Export trainer
learn.export(os.path.abspath('./my_export.pkl'))
```

Your model is now serialized on your local file system in the `my_export.pkl` file.

## Going further

-   You can check the [OVHcloud documentation on how to deploy custom models](../deploy-serialized-models).
-   You can check the [supported compatibilities for Tensorflow SavedModel](../compatibility-matrix)
