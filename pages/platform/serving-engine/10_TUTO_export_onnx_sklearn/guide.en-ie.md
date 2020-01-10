---
title: Exporting Scikit-learn models
slug: export-sklearn-models
excerpt: Learn how to export Scikit-learn model through ONNX format
section: Tutorials
order: 1
---
*Last updated 7th February, 2020.*

## Objective

[Scikit-learn](https://scikit-learn.org/stable/) is a popular machine
learning library and [ONNX](https://onnx.ai/) is a serialization format
that is supported by **OVHcloud Serving Engine**. This tutorial will
cover how to export a [Scikit-learn](https://scikit-learn.org/stable/)
trained model into an [ONNX](https://onnx.ai/) file.

## Requirements

-   A python environement with
    [Scikit-learn](https://scikit-learn.org/stable/) installed

## Convert a simple model into ONNX

Serving Engine supports `scikit-learn` models through the
[ONNX](https://onnx.ai/) serialization format.

### Train Simple scikit-learn model

Let\'s take a simple example of a `scikit-learn` model to illustrate:

``` {.python}
# Train a model.
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

iris = load_iris()
X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y)
classifier = RandomForestClassifier()
classifier.fit(X_train, y_train)
```

### Install sklearn-onnx module

Within your `scikit-learn` project, just install
[sklearn-onnx](https://github.com/onnx/sklearn-onnx) using
[PyPi](https://pypi.org/project/skl2onnx/):

``` {.bash}
pip install skl2onnx
```

### Define the inputs of your serialized model

For each `numpy array` (also called `tensor` in ONNX) fed as an input to
the model, choose a name and declare its data-type and its shape.

Example:

``` {.python}
# import needed data type
from skl2onnx.common.data_types import FloatTensorType
# input tensors of your model: list of ('<wanted name of tensor>', DataType('<shape>'))
initial_type = [
    ('float_input', FloatTensorType([None, 4]))
]
```

### Launch the conversion and save it to a file

The trained model conversion is made with the `convert_sklearn`
function.

``` {.python}
# Import export function
from skl2onnx import convert_sklearn
# Export the model
onx = convert_sklearn(classifier, initial_types=initial_type)
# Save it into wanted file
with open("my_model.onnx", "wb") as f:
    f.write(onx.SerializeToString())
```

Your model is now serialized on you local file system in the
`my_model.onnx` file.

## Going further

For more information about how to serialize a `scikit-learn` model to
ONNX serialization format, refer to the [official
documentation](http://onnx.ai/sklearn-onnx/index.html). For example, you
can find information about how to serialize [a complex scikit-learn
pipeline](http://onnx.ai/sklearn-onnx/pipeline.html)
