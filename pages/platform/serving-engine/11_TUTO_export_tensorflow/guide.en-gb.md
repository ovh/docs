---
title: Exporting TensorFlow model
slug: export-tensorflow-models
excerpt: Learn how to export Tensorflow model
section: Tutorials
order: 2
---
*Last updated 7th February, 2020.*

## Objective

[Tensorflow](https://www.tensorflow.org/) is a popular machine learning
library and SavedModel is a serialization format that is supported by
OVHcloud Serving Engine. This tutorial will cover how to export a
[Tensorflow](https://www.tensorflow.org/) trained model into an
SavedModel file.

## Requirements

-   A python environement with [Tensorflow](https://www.tensorflow.org/)
    installed

## Convert a simple model to SavedModel

Serving Engine supports `TensorFlow` models thanks to the `SavedModel`
serialization format of `TensorFlow`.

Let\'s take a simple example of a `TensorFlow` model to illustrate:

``` {.python}
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

import tensorflow as tf

# Loading data
iris = load_iris()
X, y = iris.data, iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Creating classifier
classifier = tf.estimator.DNNClassifier(
    feature_columns=[tf.feature_column.numeric_column('x', shape=[4])],
    hidden_units=[10, 20, 10],
    n_classes=3
)
# Training classifier
classifier.train(
    input_fn=tf.estimator.inputs.numpy_input_fn(
        x={'x': X_train},
        y=y_train,
        # batch_size=5,
        num_epochs=1000,
        shuffle=True
    ),
    steps=100
)
```

## Define transformation function you need

If you want to export your data transformation along with your trained
model, you should describe the mapping between them using a
`ServingInputReceiver`.

``` {.python}
INPUT_FEATURES = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']

def serving_input_receiver_fn():
    """
    This is used to define inputs to serve the model.
   :return: ServingInputReciever
    """
    input_features = {feature: tf.placeholder(tf.float32, [None, 1]) for feature in INPUT_FEATURES}
    model_features = {'x', tf.concat([receiver_tensors[feature] for feature in INPUT_FEATURES]), axis=1)

    return tf.estimator.export.ServingInputReceiver(
        receiver_tensors=input_features,
        features=model_features
    )
```

In the previous example, four tensors are transformed:

-   `sepal_length` of shape `[None, 1]`
-   `sepal_width` of shape `[None, 1]`
-   `petal_length` of shape `[None, 1]`
-   `petal_width` of shape `[None, 1]`

Into a single tensor `x` of shape `[None, 4]` before feeding the
classifier. .. note:: The `None` value in a tensor represents a
dimension of arbitrary length. For example if you are using a
classification algorithm `None` can simply be the number of record you
wish to classify.

## Launch the conversion and save it into a file

The trained model conversion is made by calling the `export_saved_model`
function on your classifier. This function takes two parameters:

-   `export_dir_base`: The path where to save the serialized model
-   `serving_input_receiver_fn`: The transformation function used at
    serving time to feed your input to the trained classifier.

``` {.python}
classifier.export_saved_model(
    export_dir_base='<path/where/to/saved/serialized/model>',
    serving_input_receiver_fn=serving_input_receiver_fn
)
```
