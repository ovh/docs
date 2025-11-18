---
title: Quantum computing - Billing and lifecycle
excerpt: Learn how we bill Quantum Notebooks
updated: 2025-11-06
---

> [!warning]
>
> Some links on this documentation refer to the AI and Machine Learning solution. Quantum computing shares the same infrastructure as a service so you might be redirected to another section of this documentation.

## Objective

**OVHcloud Quantum Notebooks** are managed Jupyter and VS Code notebooks with assigned CPU or GPU resources, eliminating the need for installation and maintenance. This documentation will detail the notebook **lifecycle and billing**.

## Introduction

Quantum Notebooks are linked to a Public Cloud project. The whole project is billed at the end of the month, with **pay-as-you-go**. It means you will only pay for what you consume, based on the compute resources you use (CPUs and GPUs), their running time and data.

## Quantum Notebooks lifecycle

During its lifetime, the notebook will go through the following statuses:

- `STARTING`: the notebook is being started and, if any, the remote data is synchronized from the Object Storage. To learn more about data synchronization, please check out the [Data - Concept and best practices](/pages/public_cloud/ai_machine_learning/gi_02_concepts_data) documentation. Then the system allocates the necessary compute resources (CPUs/GPUs) for your notebook. Finally, the base framework you have chosen is pulled for use in the notebook.
- `RUNNING`: the notebook is running, you can connect to it using its endpoint and benefit from your compute resources and your attached data.
- `STOPPING`: the notebook is stopping, your compute resources are freed, your work and status is saved and, if any, the data is synchronized back to the Object Storage.
- `STOPPED`: the notebook ended normally. You can restart it whenever you want or delete it. It will keep the same endpoint.
- `FAILED`: the notebook ended in error, e.g. the process in the notebook finished with a non 0 exit code. For more information, refer to the "CLI: My notebook is in failed status
" section of our [Troubleshooting documentation](/pages/public_cloud/quantum_computing/troubleshooting).
- `ERROR`: the notebook ended due to a backend error. You may reach our [support](https://help.ovhcloud.com/csm?id=csm_get_help).
- `DELETING`: the notebook is being removed. When it is deleted, you will no longer see it, it will no longer exist.

![lifecycle](images/lifecycle.png){.thumbnail}

## Billing principles

Quantum Notebooks is a **pay-per-use solution**. You only pay for the **resources** consumption.

**Included** in Quantum Notebooks resources:

- Dedicated CPU/GPU compute resources (based on the selected amount during notebook creation).
- For **Quantum QPU**, an additional remote Quantum Processing Unit compute resource is available on your notebook.
- Ephemeral local notebook storage (the size depends on the selected compute resources). The first 10GB are free.
- Workspace remote storage (Optional).
- Ingress/Egress network traffic (Optional).

Here is a detailed graph that illustrates every step that is billed or not during the Quantum Notebooks workflow:

![billing](images/billing.png){.thumbnail}

### Compute resources details

During the notebook creation, you can select **compute resources**, known as CPUs or GPUs. Their official pricing is available in the [OVHcloud Control Panel](/links/manager) or on the [OVHcloud Public Cloud website](/links/public-cloud/prices).

When your program needs to access to the remote QPU, QPU time is charged by the second. You will only be charged for your QPU usage time.

Rates for compute are mentioned per hour to facilitate reading of the prices, but the billing granularity remains **per minute**.

As stated above and shown in the image above, you pay for these resources as long as you consume them. This happens when the image of your notebook is pulled, during the `STARTING` phase, but also during `RUNNING` and `STOPPING` phases, until you reach the `STOPPED` phase.

### Storage details

There are three types of storage within Quantum Notebooks:

- Remote Object storage
- Workspace storage
- Ephemeral local storage

The pricing of these storages is different.

#### Remote Object storage

Remote data is the one that comes from the OVHcloud Object Storage solution. During notebook creation, you are able to mount some Object Storage containers into your notebook.

In situations where you are utilizing notebooks with attached remote data, you will be charged separately for the storage of this data. The cost of Object Storage is independent from the pricing of notebooks.

#### Workspace storage

By default, your notebook will be mounted in a remote Object Storage container on the `/workspace` location. This will be your default folder when you access your notebook.

You can store your data there.

The first 10GB are free for 30 consecutive days once your notebook is stopped, then you pay at the price of OVHcloud Object Storage.

#### Ephemeral local storage

Each compute resource (CPU or GPU) comes with local storage, that we can consider ephemeral since this storage space is not saved when you stop or delete your notebook.

The sizing depends on the selected amount of compute resources. Check the details on the [OVHcloud Public Cloud website](/links/public-cloud/prices).

This concerns locations outside your `/workspace`, as well as outside any other remote Object Storage containers you may have mounted on your notebook.

This storage is not billed as it is directly linked to the compute resource(s) you have chosen.

### Pricing examples

> [!tabs]
> **For Quantum Emulators**
>>
>> **Example 1: One GPU notebook for 10 hours then deleted**
>> 
>> We start one Quantum Notebook with two GPUs and we keep it running for 10 hours then we **delete it**.
>> 
>> - Compute resources: 2 x GPU NVIDIA V100s (1,93€ / hour)
>> - Remote storage: Nothing
>> - Duration: 10 hours then deleted
>> 
>> Price calculation for compute: 10 (hours) x 2 (GPU) x 1,93€ (price / GPU) = **38,6 euros**, billed at the end of the month.
>> 
>> **Example 2: One GPU notebook for 10 hours but stopped, not deleted**
>> 
>> We start one Quantum Notebook, with two GPUs and we keep it running for 10 hours then we stop it and finally we **delete it after 10 days**.
>> 
>> - Compute resources: 2 x GPU NVIDIA V100s (1,93 / hour)
>> - Remote storage: Nothing
>> - Workspace storage: 100GB used. The first 10GB are free.
>> - Duration: 10 hours then stopped for 10 days
>> 
>> Price calculation for compute : 10 (hours) x 2 (GPU) x 1,93 (price / GPU) = **38,6 euros**, billed at the end of the month.
>> Price calculation for workspace : 90 (GB) x 0,01€ (price for object storage / GB) = **0,9 euros**, billed at the end of the month.
>> 
>> **Example 3: One GPU notebook for 10 hours with 1TB remote storage**
>> 
>> We start one Quantum Notebook, with two GPUs and 1TB remote storage. We keep it running for 10 hours then we delete it.
>> 
>> - Compute resources: 2 x GPU NVIDIA V100s (1,93 / hour)
>> - Remote storage: 1TB in OVHcloud Object Storage
>> - Workspace storage: 100GB used. The first 10GB are free.
>> - Duration: 10 hours then we delete it.
>> 
>> Price calculation for compute: 10 (hours) x 2 (GPU) x 1,93 (price / GPU) = **38,6 euros**, billed at the end of the month.
>> Price calculation for workspace: 90 (GB) x 0,01€ (price for object storage / GB) = **0,9 euros**, billed at the end of the month.
>> 
>> Also, price calculation for remote Object Storage : 1000 (GB) x 0,01€ (price for object storage / GB) = **10 euros**, billed at the end of the month.
>> 
>> **Example 4: 15 CPU notebooks for 5 hours then deleted**
>> 
>> We start 15 Quantum Notebooks, each of them with one vCPU
>> 
>> - Compute resources: 1 x vCPU (0,03€ /hour /cpu)
>> - Remote storage: Nothing
>> - Duration: 5 hours then we delete it.
>> 
>> Price calculation for compute: 15 (notebooks) x 5 (hours) x 1 (CPU) x 0,03€ (price / CPU) = **2,25 euros**, billed at the end of the month.
>>
> **For Quantum QPUs**
>>
>> Pricing of Quantum QPUs notebooks are the same than Quantum Emulators but you will pay only for the time you use a QPU.
>>
>> **Example 1: One CPU used during 10 hours + one Pasqal QPU Orion Beta used during 1 hour**
>> 
>> We start one Quantum QPU Notebook, with one CPU and we keep it running for 10 hours then we **delete it**.
>> We use one hour of the Orion Pasqal QPU which costs 3000€ / hour.
>> 
>> - Compute resources: 1 x Intel CPU VCore (0,03€ / hour)
>> - Remote storage: Nothing
>> - Duration: 10 hours then deleted
>> - QPU usage: 1 x Pasqal QPU Orion Beta (3000€ / hour)
>> 
>> Price calculation for compute: 10 (hours) x 1 (CPU) x 0,03€ (price / CPU) + 1 (hour) x 3000€ (price / QPU) = **3000,3 euros**, billed at the end of the month.
>>

## Go further

For training or technical assistance, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis.

## Feedback

We would love to help answer questions and appreciate any feedback you may have.

Please send us your questions, feedback, and suggestions regarding Quantum Notebooks:

* In the #quantum-computing channel of the OVHcloud [Discord server](https://discord.gg/ovhcloud).
