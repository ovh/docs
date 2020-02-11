---
title: Models
slug: models
excerpt: Learn the concept behind serving engine models
section: Concepts
order: 1
---
## Definition

**Models** in a **serving engine project** refer to **HTTP API
endpoints** that serve **machine learning models**.

There are two kinds of models :

-   Preset models
-   Serialized models

### Preset models

A preset model is a model that has already been built and added by
OVHcloud administrators of the serving platform and is available for
deployment on the fly.

### Serialized models

A serialized model is a model that can be loaded from a file with a
supported format.

Currently supported formats are:

-   ONNX
-   TensorFlow SavedModel

Instructions about how to export models can be found here:

-   [Exporting TensorFlow model](../export-tensorflow-models)
-   [Exporting Scikit-Learn model](../export-sklearn-models)

## Considerations

-   Users choose to deploy a model inside one of their
    [namespaces](../namespaces).
-   Once deployed, each model is reachable from everywhere on the
    Internet from a generated url.
-   Access control over models management and querying can be configured
    by the **namespaces owner** by creating access [tokens](../tokens).

## Under the hood

Each model deployed inside a **serving engine namespace** is actually a
[docker container](https://www.docker.com/resources/what-container)
built and pushed into the linked [docker
registry](https://docs.docker.com/registry/) and then started inside the
[kubernetes
namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).

## Going further

-   You can check the [OVHcloud documention on how to deploy preset
    models](../deploy-preset-models).
-   You can check the [OVHcloud documention on how to deploy custom
    models](../deploy-serialized-models).
-   You can check the [supported compatibilities for custom
    models](../compatibility-matrix)
