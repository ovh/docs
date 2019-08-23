---
title: Monitor your Kubernetes cluster using Metrics
slug: usecase-kubernetes
excerpt: Use Metrics Data Platform to monitor your Kubernetes cluster
section: Use cases
order: 3
---
**Last updated 15th May, 2018**

> [!warning]
>
> This page is a Work in Progress.
>

## Objective

[Kubernetes](https://kubernetes.io/){.external} is an open-source system for automating deployment, scaling, and management of containerized applications. In this tutorial, you will learn how to use Metrics to monitor your Kubernetes cluster.

## Requirements

- a valid OVH Metrics account.
- a `WRITE` token that can be found on Metrics's manager
- a Kubernetes cluster

## Instructions

### Monitor Resource Usage using Heapster

[Heapster](https://github.com/kubernetes/heapster){.external} enables Container Cluster Monitoring and Performance Analysis for Kubernetes (versions v1.0.6 and higher), and platforms which include it.

It is fully compatible with Metrics Data Platform thanks to InfluxDB protocol support. The documentation to setup Heapster with an InfluxDB backend can be found [here](https://github.com/kubernetes/heapster/blob/master/docs/influxdb.md){.external}, and the documentation to use InfluxDB on Metrics can be found [here](../protocol-influxdb)

### Monitor user's application with Prometheus

You can replace the deployment of a Prometheus pod by using OVH Metrics instead. You can follow the following [usecase](../usecase-prometheus) to deploy an open-source component called `Beamium`.

## Going further

You can learn how to configure a Grafana Prometheus source by following [this guide](../start-grafana).

You can also exchange with our community of users on [https://community.ovh.com](https://community.ovh.com).