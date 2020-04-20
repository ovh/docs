---
title: How to generate environment file for Python jobs
slug: generate-environment
excerpt: Find out how to create your Python environment and export it as an environment file.
section: How to
order: 4
---

**Last updated 17<sup>th</sup> April, 2020**

## Objective
This guide helps you create your python environment with Conda. Then we will see how to export it so you can use it to submit your Python job on OVHcloud Data Processing platform.

To read an introduction about the Data Processing service you can visit [Data Processing Overview](../overview){.external}.

## Requirements
- Your application code as Python files.
- Conda installed on your computer, refer to [this guide](https://docs.conda.io/projects/conda/en/latest/user-guide/install/).

## Instructions

### Step 1: Create your environment

OVHcloud Data processing is using Conda in order to manage packages and their dependencies. If you haven't installed Conda yet please do.

With Conda, you can create, export, list, remove, and update environments that have different versions of Python and/or packages installed in them. OVHcloud Data Processing uses this environment to make sure your Python job has everything necessary to run smoothly. If you want to learn more about Conda, have a look at [their documentation](https://docs.conda.io/en/latest/).

Once installed, Conda will automatically create a first environment. You can then start installing the needed packages. To do so, use the install command:
```shell-session
$ conda install numpy
```
It will install the latest version of Numpy in the current environment, you just have to repeat this for each needed package. You can learn more about the install command and its options [here](https://docs.conda.io/projects/conda/en/latest/commands/install.html).

### Step 2: Export your environment

Now that you have an environment that suits your code, it's time to export it! To do so, make sure Conda is set in the environment you want to export and run this command:
```shell-session
$ conda env export --from-history -f environment.yml
```

It's going to generate a portable environment file. You will need this file to run your code on OVHcloud Data Processing. To learn more about environment file, have a look [here](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#sharing-an-environment).

You can now move on to the next step and [submit a Python job](../submit-python).

## Go further

To learn more about using Data Processing and how to create cluster and process your data, we invite you to look at [Data Processing documentations page](../).

You can send your questions, suggestions or feedbacks in our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external} or in our public [Gitter](https://gitter.im/ovh/data-processing){.external}
