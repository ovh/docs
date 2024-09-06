---
title: 'Deploying Filebeat on Kubernetes for OVHcloud Logs Data Platform'
excerpt: 'Learn how to deploy Filebeat OSS on Kubernetes to centralize logs into the OVHcloud Logs Data Platform and monitor services such as HAProxy.'
updated: 2024-09-06
---

## Objective

**This guide explains how to deploy Filebeat OSS (v7.12.1) on a Kubernetes cluster and configure it to centralize logs into the OVHcloud Logs Data Platform. It also covers how to monitor services like HAProxy using Filebeat.**

## Requirements

- A [Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_rancher_service/creating-kubernetes-custom-nodes).
- [Filebeat OSS version 7.12.1](https://www.elastic.co/downloads/beats/filebeat).
- An activated [Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/usecase_haproxy/) account with a stream and its associated token.
- Basic knowledge of [YAML](https://yaml.org/) and [Kubernetes manifests](https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/).

## Instructions

### Step 1: Download the Filebeat Kubernetes Manifest

To deploy Filebeat as a DaemonSet on Kubernetes, download the manifest file:

```bash
curl -O https://raw.githubusercontent.com/elastic/beats/7.12/deploy/kubernetes/filebeat-kubernetes.yaml
```

This YAML file contains the necessary configurations to deploy Filebeat on each node in your cluster.

### Step 2: Customize the Filebeat Configuration

Edit the downloaded filebeat-kubernetes.yaml file to configure Filebeat for the Logs Data Platform:

1. Modify the destination details for the Logs Data Platform:

```bash
- name: ELASTICSEARCH_HOST
  value: "your_cluster.logs.ovh.com"
- name: ELASTICSEARCH_PORT
  value: "5044"
- name: ELASTICSEARCH_USERNAME
  value: "your_username"
- name: ELASTICSEARCH_PASSWORD
  value: "your_password"
```

2. Ensure the Docker image used is for Filebeat OSS version 7.12.1:

```bash
image: "docker.elastic.co/beats/filebeat-oss:7.12.1"
```
### Step 3: Deploy Filebeat to Kubernetes

After configuring the manifest, deploy Filebeat by applying the YAML file:

```bash
kubectl apply -f filebeat-kubernetes.yaml
```

This deploys Filebeat as a DaemonSet, ensuring an instance runs on each node in your cluster.

### Step 4: Verify the Deployment

Check that the Filebeat pods are running correctly:

```bash
kubectl get pods -n kube-system
```
Ensure that the filebeat pods are listed as running.
### Step 5: Monitor HAProxy with Filebeat

If you're using HAProxy and want to monitor its logs, you can enable the HAProxy module in Filebeat:

1. Enable the HAProxy module:

```bash
sudo filebeat modules enable haproxy
```

2. Edit the `filebeat.yml` configuration file to include HAProxy log paths:

```bash
filebeat.modules:
- module: haproxy
  log:
    enabled: true
    var.paths: ["/var/log/haproxy.log"]
```

3. Include your Logs Data Platform token:

```bash
fields_under_root: true
fields:
  X-OVH-TOKEN: "your_stream_token"
```

4. Start Filebeat to collect and send HAProxy logs:

```bash
sudo systemctl start filebeat
```

### Step 6: Additional Configuration for OpenShift

If you're deploying Filebeat on OpenShift, you need to run it as a privileged container. Add the following to the DaemonSet configuration:

```bash
securityContext:
  runAsUser: 0
  privileged: true
```

### Step 7: Support for Control Plane Nodes

To ensure Filebeat runs on control plane nodes in Kubernetes, add the necessary tolerations:

```bash
spec:
  tolerations:
  - key: node-role.kubernetes.io/control-plane
    effect: NoSchedule
```

## Go further
 
Join our community of users on <https://community.ovh.com/en/>.
