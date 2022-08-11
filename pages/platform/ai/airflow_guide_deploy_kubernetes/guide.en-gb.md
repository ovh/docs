---
title: AI Airflow - Guide - Deploy Airflow on a manged Kubernetes
slug: airflow/deploy-on-kubernetes
excerpt: Guide to explain how to deploy Airflow on a manged kubernetes
section: AI Airflow guides
order: 01
---

**Last updated 11th August, 2022.**

## Objective

The purpose of this guide is to explain how to deploy [Airflow](https://airflow.apache.org/) on a OVH Managed Kubernetes cluster.

![image](images/image-yolov5.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB);
- An [OVH Managed Kubernetes created](../../kubernetes-k8s/creating-a-cluster/) inside a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account;
- A [Nginx ingress deployed](../../kubernetes-k8s/installing-nginx-ingress/) on the cluster;

## Instructions

> [!primary]
>
> Airflow needs Kubernetes nodes with at least 16 Go of RAM and 4 CPU.
>
