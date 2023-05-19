---
title: Deploying Apache Pulsar on an OVHcloud Managed Kubernetes cluster
slug: installing-pulsar
excerpt: 'Explore how to install Apache Pulsar on an OVHcloud Managed Kubernetes cluster'
section: Tutorials
updated: 2023-05-15
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Last updated 15th May 2023**

## Objective

[Apache Pulsar](https://pulsar.apache.org/) is an open-source, distributed messaging and streaming platform built for the cloud. Companies around the world are using Pulsar to deliver the most robust event-driven architectures for real-time applications. Its decoupled design allows messages to be consumed in high-performance streams or adaptable queues. It natively provides a series of enterprise-grade features, such as multi-tenancy, geo-replication, Pulsar Functions, and a multi-language API.

[StreamNative](https://streamnative.io/), a company founded by the original creators of Apache Pulsar, partners with software teams worldwide to accelerate time to production and manage Pulsar at scale with StreamNative Cloud, a fully managed Pulsar service. It has developed the [StreamNative Operators for Apache Pulsar](https://docs.streamnative.io/operator) that provide full lifecycle management of Pulsar deployments on Kubernetes offered under a simple, free [Community License](https://streamnative.io/community-licence). With the operators, you can easily deploy a Pulsar cluster on Kubernetes and manage it through the [Kubernetes API](https://kubernetes.io/docs/concepts/overview/kubernetes-api/) and [kubectl](https://kubernetes.io/docs/reference/kubectl/).

This tutorial demonstrates how to install Apache Pulsar on an OVHcloud Managed Kubernetes cluster using the StreamNative Operators for Apache Pulsar.

## Prerequisites

- An OVHcloud Managed Kubernetes cluster (v1.16 <= Kubernetes version < v1.26) with a minimum of 3 worker nodes, each having at least 2 vCores and 4 GB of memory. Once you have the cluster ready, you should have a default storage class automatically installed, which is required for Pulsar instances on Kubernetes. You can run `kubectl get sc` to view your available storage classes.
- `kubectl` installed and configured (v1.16 or later). For more information, see [Configuring kubectl on an OVHcloud Managed Kubernetes cluster](../configuring-kubectl/).

## Instructions

Before installing Pulsar, you need to install the operators first, which can be deployed using the Helm chart or Operator Lifecycle Manager (OLM). Compared with the deployment with Helm, OLM does not require you to manually upgrade custom resource definitions (CRDs) when upgrading the operators.

This tutorial uses OLM to install the StreamNative Operators for Apache Pulsar. For more information about the deployment with Helm, see [the documentation](https://docs.streamnative.io/operator/pulsar-operator-install-helm-chart).

### Installing Operator Lifecycle Manager and the operators

OLM is a popular and powerful tool to manage operators. With OLM, your CRDs can be automatically updated when you upgrade operators.

1. Run the following command to create necessary Kubernetes resources of OLM, including CRDs, ClusterRoles, and Deployments. The script also creates two namespaces - `olm` and `operators`.
   
   ```bash
   curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.24.0/install.sh | bash -s v0.24.0
   ```

2. Install the CRDs and custom controllers for Pulsar components (brokers, proxies, BookKeeper, and ZooKeeper). The controllers are deployed in the `operators` namespace by default.
   
   ```bash
   kubectl create -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/olm-subscription.yaml
   ```

3. Verify that the operators are installed successfully. When you deploy the operators, OLM first runs a Job in the `olm` namespace for each operator. You need to wait for the Jobs to finish before you can see the output.
   
   ```bash
   kubectl get pods -n operators
   ```
   
   Expected output:
   
   ```bash
   NAME                                                      READY   STATUS    RESTARTS   AGE
   bookkeeper-operator-controller-manager-5b4fd6d856-ckpmw   2/2     Running   0          51s
   pulsar-operator-controller-manager-9745c86f9-6dm2q        2/2     Running   0          43s
   zookeeper-operator-controller-manager-669d7789-v76vd      2/2     Running   0          74s
   ```

### Installing Pulsar with the operators

StreamNative provides a quickstart YAML file that contains the manifests of Pulsar brokers, BookKeeper, and ZooKeeper. You can use it to quickly deploy Pulsar’s custom resources.

1. Create a namespace called `pulsar` where Pulsar workloads will be deployed later. This is the default name in the example YAML file. If you change the namespace in this step, you need to use the same namespace in the next step. This namespace can be different from the one where operators are installed.
   
   ```bash
   kubectl create ns pulsar
   ```

2. Choose to deploy Pulsar with or without proxies. The following two YAML files both contain the manifests for `ZooKeeperCluster`, `BookKeeperCluster`, and `PulsarBroker`. Pulsar proxies are optional, serving as a gateway to route traffic to Pulsar brokers.
   
   - Run the following command to install Pulsar with proxies.
   
     ```bash
     kubectl create -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/proxy.yaml
     ```
   
   - Run the following command to install Pulsar without proxies.
   
     ```bash
     kubectl create -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/quick-start.yaml
     ```
   
   > [!primary]
   > 
   > If you want to install other components, such as Kafka-on-Pulsar (KoP), apply the corresponding YAML files in [this GitHub repository](https://github.com/streamnative/charts/tree/master/examples/pulsar-operators).

3. Verify that different components of the Pulsar cluster are up and running.
   
   ```bash
   kubectl get pods -n pulsar
   ```
   
   Expected output:
   
   ```bash
   NAME                         READY   STATUS    RESTARTS   AGE
   bookies-bk-0                 1/1     Running   0          9m8s
   bookies-bk-1                 1/1     Running   0          9m8s
   bookies-bk-2                 1/1     Running   0          9m8s
   bookies-bk-auto-recovery-0   1/1     Running   0          8m20s
   brokers-broker-0             1/1     Running   0          9m9s
   brokers-broker-1             1/1     Running   0          9m9s
   zookeepers-zk-0              1/1     Running   0          12m
   zookeepers-zk-1              1/1     Running   0          12m
   zookeepers-zk-2              1/1     Running   0          12m
   ```

The Pulsar cluster is now ready to serve requests.

## Testing the Pulsar cluster

## Cleaning up

You can uninstall the operators and Pulsar when you no longer need them.

### Uninstalling Pulsar

If you already have deployed Pulsar with Pulsar operators, you need to uninstall Pulsar first. You can skip this step if Pulsar is not installed.

- Run the following command to uninstall Pulsar if you installed it with proxies.

  ```
  kubectl delete -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/proxy.yaml
  ```

- Run the following command to uninstall Pulsar if you installed it without proxies.

  ```
  kubectl delete -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/quick-start.yaml
  ```

### Uninstalling the operators

1. Delete the Subscriptions created by OLM. Subscriptions convey a user’s intent to subscribe to the latest version of an operator. By deleting the Subscriptions associated with Pulsar operators, you let OLM know that you no longer want new versions of operators to be installed.

   ```
   kubectl delete -f https://raw.githubusercontent.com/streamnative/charts/master/examples/pulsar-operators/olm-subscription.yaml
   ```

2. Delete the ClusterServiceVersions (CSVs) of Pulsar operators. You can run `kubectl get csv -n operators` to check the versions.

   ```
   kubectl delete csv pulsar-operator.<version> bookkeeper-operator.<version> zookeeper-operator.<version> -n operators
   ```

3. Delete the CRDs of Pulsar.

   ```
   kubectl delete crd pulsarbrokers.pulsar.streamnative.io pulsarproxies.pulsar.streamnative.io bookkeeperclusters.bookkeeper.streamnative.io zookeeperclusters.zookeeper.streamnative.io
   ```

Uninstalling OLM

Run the following commands to uninstall OLM:

```
export OLM_RELEASE=<olm-release-version>
kubectl delete apiservices.apiregistration.k8s.io v1.packages.operators.coreos.com
kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${OLM_RELEASE}/crds.yaml
kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/${OLM_RELEASE}/olm.yaml
```

## More resources

The StreamNative team looks to provide a better cloud-native experience for Pulsar users with the StreamNative Operators for Apache Pulsar. To learn more about OVHcloud Managed Kubernetes, Pulsar, and Pulsar Operators, check out the following resources:

- [OVHcloud Managed Kubernetes documentation](../)
- [Apache Pulsar documentation](https://pulsar.apache.org/docs/3.0.x/)
- [StreamNative Operators for Apache Pulsar documentation](https://docs.streamnative.io/operator)
