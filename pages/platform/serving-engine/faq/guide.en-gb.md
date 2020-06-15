---
title: 'FAQ'
excerpt: 'ML Serving FAQ'
slug: ml-serving-faq
section: Concepts
order: 3
---

**Last updated 16<sup>th</sup> June, 2020**

## Objective

Here are the most frequently asked questions about OVHcloud ML Serving.

### From which countries can customers order ML Serving product?

You can order the ML Serving solution via OVHcloud EU or CA Control Panel. However, the product is not available via the OVHcloud US Control Panel.

### From which regions is the ML Serving solution available?

For the moment, only the following region is currently available :

EU WEST FR 1: automatic deployment of servers from Gravelines (GRA).

Other regions are currently coming up because OVHcloud wants to deploy ML Serving in all Public Cloud regions.

### How to size my model scaling?

We provide you with the auto-scaling functionality which is based on the amount of calls you will receive on the endpoint API. Depending on this, we will add or remove nodes.

For example: you have few calls and it runs on 1 node, then a peak comes to reach more than 60% CPU usage. Automatically, we will deploy an additional node and so on.

### What kind of models are supported by ML Serving? ONNX, PMML?

For more information, we invite you to read [the following guide](../compatibility-matrix/).

### What are the ML Serving offer limitations?

ML Serving allows you to deploy ML models in a few steps.

If your model is compliant, it will work. At the moment, there are no other limitations.

For more information about compliance, we invite you to read [the following guide](../models/).

### How to deploy a model with ML Serving product?

It is possible to deploy a model via Control Panel or API.  For more information, we invite you to read [the following documentation](../).

### Where to put the model to deploy it?

Models need to be stored inside a OVHcloud Public Cloud Object Storage container.

During your namespace creation, you will be prompted to "attach" a OVHcloud Object Storage container to store them

Then, you will push your models inside this container.

### What about billing?

ML Serving is charged by the minute. Also, you pay the amount of "power" used, for each minute.

We have pricing per nodes, consuming RAM and per vCore.

Example : you deploy a model on 2 nodes, for 80 minutes. Each node has a profile and a price.

You will have to pay :

- 0,xxx euros x 2 nodes x 80 minutes
- Object Storage to store your model

### What is included in the ML Serving offer?

Deployment of the model, management of deployed models, versioning, monitoring are all included in the ML Serving offer.

### What is not included in the ML Serving offer?

Object Storage and Private Registry are not included in the ML Serving offer.

### What are the SLA linked to the ML Serving offer?

For more information, we invite you to read the terms and conditions of use: 

### How to monitor a cluster?  Is Datadog compatible?

We are working to provide metrics in the Control Panel and also provide an Insight token.

### What are the main advantages of  OVHCloud ML Serving?

This new solution is designed to simplify our customers’ lives. OVHcloud provides an easy way to deploy Machine Learning templates. 

To do this, OVHcloud provides an HTTP API endpoint for each model, with versioning, monitoring, and autoscaling.
	
## Go further

To learn more about using ML Serving and how to create a cluster and process your data, we invite you to look at the [ML Serving documentation page](../).
