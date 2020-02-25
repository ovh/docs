---
title: Query Deployed Model
slug: query-model
excerpt: Learn how to query deployed model
section: Tutorials
order: 4
---
*Last updated 7th February, 2020.*

## Objective

This tutorial will teach you how to query deployed model on OVHcloud
serving engine.

## Requirements

-   Having previously deployed a **serialized model** and knowing the
    **url** on which it can be requested. Detailed steps on how to
    deploy a serialized model are explained
    [here](../deploy-serialized-models)
-   Owning a **token** with `model-evaluation` role for the deployed
    model. Steps to generate such a token are described
    [here](../tokens)
-   Knowing the inputs that are needed for your model. Model description
    is explained [here](../describe-model)

## Query the model

Once you know what kind of **input tensors** are [needed by the
model](../describe-model), just fill a correct **body** on your **HTTP
query** with your wanted representation of tensor (see below) and send
it to the model with a `POST` method on the path `/eval`.

Two attached headers are available for your query:

-   The
    [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
    header indicating the [media
    type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
    of your input tensors data contained in your body message.
-   The (optional)
    [Accept](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
    header indicating what kind of [media
    type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
    your want to receive for output tensors in the response body. The
    default `Accept` header if you don't provide one will be
    `application/json`.

### Supported Content-Type headers

-   `application/json` : A json document which **key** are the **input
    tensors** names and **values** are the n-dimensional json arrays
    matching your tensors.

-   `image/png` : A bytes content which representation is a **png**
    encoded image.

-   `image/jpeg` : A bytes content which representation is a **jpeg**
    encoded image.

> [!warning]
>
> `image/png` and `image/jpeg` are only available for models taking a
> single tensor as input. That tensor's shape should also be compatible
> with an image representation.

-   `multipart/form-data` : A multipart body, each part of which is
    named by an **input tensor**.

> [!primary]
>
> Each part (i.e. tensor) in the **multipart** should have its own
> **Content-Type**

### Supported Accept headers

-   `application/json` : A JSON document which **key** is the **output
    tensors** names and **values** are the n-dimensional json arrays
    matching your tensors.

-   `image/png` : A bytes content which representation is a **png**
    encoded image.

-   `image/jpeg` : A bytes content which representation is a **jpeg**
    encoded image.

> [!warning]
>
> `image/png` and `image/jpeg` are only available for models returning a
> single tensor as output. That tensor's shape should also be compatible
> with an image representation.

-   `text/html` : A HTML document displaying the **output tensors**
    representation.
-   `multipart/form-data` : A multipart body, each part of which is
    named by an **output tensor** and the content is the tensor json
    representation.

> [!primary]
>
> If you want some of the output tensors in `multipart/form-data` and
> `text/html` header to be interpreted as an image, you can specify it
> as a parameter in the header.
>
> **Example** : The header
> `text/html; tensor_1=image/png; tensor_2=image/png` returns the global
> response as HTML content. Inside the HTML page, `tensor_1` and
> `tensor_2` are displayed as **png** images.

### Tensor interpretable as image

For a tensor to be interpretable as image raw data, it should be of a
compatible shape in your exported model. Here are the supported ones :

-   `(x, y, z, 1)` : Batch of **x** grayscale images with **y** pixels
    height and **z** pixels width
-   `(x, y, z, 3)` : Batch of **x** RGB images with **y** pixels height
    and **z** pixels width. The last dimension should be the array of
    `(red, green, blue)` components.
-   `(y, z, 1)` : Single grayscale image with **y** pixels height and
    **z** pixels width
-   `(y, z, 3)` : Single RGB image with **y** pixels height and **z**
    pixels width. The last dimension should be the array of
    `(red, green, blue)` components.
-   `(y, z)` : Single grayscale image with **y** pixels height and **z**
    pixels width

## Examples

### Example of a query with curl for a single prediction

In the following example, we want to receive a prediction from our model
for the following item :

-   `sepal_length` : 0.1
-   `sepal_width` : 0.2
-   `petal_length` : 0.3
-   `petal_width` : 0.4

> [!warning]
>
> Once again in this example don't forget to replace the
> `<evaluation-token>` with your [model-evaluation token](../tokens) and
> `<your-model-url>` with the url that was generated by **serving
> engine** on your [model deployment](../deploy-serialized-models).

``` {.bash}
curl \
    -H 'Authorization: Bearer <evaluation-token>' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -X POST \
    -d '{
        "stepal_length": 0.1,
        "stepal_width": 0.2,
        "petal_length": 0.3,
        "petal_width": 0.4
    }' \
    http://<your-model-url>/eval
```

### Example of response for a single prediction

-   HTTP Status code: `200`
-   Header: `Content-Type: application/json`

``` {.json}
{
    "output_label": 0,
    "output_probability": [0.88, 0.12]
}
```

In this example, our model predicts the **output\_label** for our
**input item** to be `0` with the following probabilities :

-   88% of chance to be `0`
-   12% of chance to be `1`

### Example of query with curl for several predictions in one call

In the following example, we want to receive a prediction from our model
for the two following items :

**First Item**

-   `sepal_length` : 0.1
-   `sepal_width` : 0.2
-   `petal_length` : 0.3
-   `petal_width` : 0.4

**Second Item**

-   `sepal_length` : 0.2
-   `sepal_width` : 0.3
-   `petal_length` : 0.4
-   `petal_width` : 0.5

**Query**

> [!warning]
>
> Once again in this example don't forget to replace the
> `<evaluation-token>` with your [model-evaluation token](../tokens) and
> `<your-model-url>` with the url that was generated by **serving
> engine** on your [model deployment](../deploy-serialized-models).

``` {.bash}
curl \
    -H 'Authorization: Bearer <evaluation-token>' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -X POST \
    -d '{
        "stepal_length": [0.1, 0.2],
        "stepal_width": [0.2, 0.3],
        "petal_length": [0.3, 0.4],
        "petal_width": [0.4, 0.5]
    }' \
    http://<your-model-url>/eval
```

### Example of response for several predictions in one call

-   HTTP Status code: `200`
-   Header: `Content-Type: application/json`

``` {.json}
{
    "output_label": [0, 1],
    "output_probability": [
        [0.88, 0.12],
        [0.01, 0.99]
    ]
}
```

In this example, our model predicts the **output\_label** for our
**first input item** to be `0` with the following probabilities :

-   88% of chance to be `0`
-   12% of chance to be `1`

It also predicts the **output\_label** for our **second input item** to
be `1` with the following probabilities :

-   1% of chance to be `0`
-   99% of chance to be `1`

## Going further

-   You can check the [OVHcloud documention on how to manage
    models](../manage-tokens) for fine configuration of access rights
    over models.
