---
title: Exporting a Torch model
slug: export-torch-models
excerpt: Learn how to export a Torch model
section: Tutorials
order: 3
---
*Last updated 12th August, 2020.*

## Objective

[Torch](https://pytorch.org/) is a popular machine learning library supported by OVHcloud ML Serving. This tutorial will cover how to export a [Torch](https://pytorch.org/) trained model.

## Requirements

-   A python environment with [Torch](https://pytorch.org/) (`pytorch`) installed

## Save a simple model

Let's take a simple example of a `Torch` model to illustrate:

``` {.python}
import torch

# Initialize model
model = torch.nn.Sequential(
    torch.nn.Linear(2, 2),
    torch.nn.Linear(2, 2),
)

# Train model ...

# Save model
with open('my_model.pt', 'wb') as file:
    torch.save(model, file)
```

Your model is now serialized on your local file system in the `my_model.pt` file.

## Going further

-   You can check the [OVHcloud documentation on how to deploy custom models](../deploy-serialized-models).
-   You can check the [supported compatibilities for Tensorflow SavedModel](../compatibility-matrix)
