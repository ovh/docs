---
title: Monitoring GPU usage on OVHcloud Managed Kubernetes Service
slug: monitoring-gpu-application
excerpt: 'Find out how to expose, visualize and monitor GPU metrics on OVHcloud Managed Kubernetes Service'
section: Tutorials
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

**Last updated January 10, 2021.**

## Objective

In this tutorial we will show you how to monitor a GPU application on an OVHcloud Managed Kubernetes cluster.

TODO: a re ecrire 

The development of ML/AI is fueled by high computing power, large amounts of data, and optimized algorithms. NVIDIA GPUs provide common heterogeneous computing techniques. These techniques are the basis for high-performance deep learning. The cost of GPUs is high. If each application uses one dedicated GPU in model prediction scenarios, computing resources may be wasted. GPU sharing improves resource usage. You must consider how to achieve the highest query rate at the lowest cost and how to fulfill the application service level agreement (SLA).

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

And you also need to follow [Deploying a GPU application on OVHcloud Managed Kubernetes](../deploying-gpu-application) tutorial to install NVIDIA GPU operator and configur your cluster correctly with needed components for this guide.

TODO: preciser uniquement les steps a avoir suivi

## Instructions

In this guide you will:

- install Prometheus operator (it will install Prometheus & Grafana)
- TODO: use NVIDIA’s Data Center GPU Manager (DCGM) to expose GPU metrics for Prometheus
- TODO: generate traffic on GPU applications
- visualize metrics in Prometheus and Grafana interfaces

To gather GPU telemetry in Kubernetes, the NVIDIA GPU Operator deploys the `dcgm-exporter`, based on DCGM exposes GPU metrics for `Prometheus` and can be visualized using `Grafana`. 
`dcgm-exporter` is architected to take advantage of `KubeletPodResources API` and exposes GPU metrics in a format that can be scraped by `Prometheus`. A `ServiceMonitor` is also included to expose endpoints.

As you have already followed the [Deploying a GPU application on OVHcloud Managed Kubernetes](../deploying-gpu-application) tutorial, you should already have `dcgm-exporter` running in your cluster.

### Prometheus operator

The [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) provides Kubernetes native deployment and management of Prometheus and related monitoring components. The purpose of this project is to simplify and automate the configuration of a Prometheus based monitoring stack for Kubernetes clusters.

The Prometehus operator also deploys a Grafana dashboard.

TODO: schema

If you are interested about the operator, feel free to read the [Prometheus operator official documentation](https://github.com/prometheus-operator/prometheus-operator).

### Installing the Prometheus operator

For this tutorial we are using the [Prometheus Operator Helm chart](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack){.external} found on [Prometheus Community repository](https://github.com/prometheus-community).

Add the Prometheus Helm repository:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

This will add you the Prometheus repository and update all of your repositories: 

<pre class="console"><code>$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories

$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...
...Successfully got an update from the "prometheus-community" chart repository
...
Update Complete. ⎈Happy Helming!⎈
</code></pre>

You need to modify some settings. To do this, you will inspect the chart to retrieve these values ​​in a file:

```bash
helm inspect values prometheus-community/kube-prometheus-stack > /tmp/kube-prometheus-stack.values
```

Open the `/tmp/kube-prometheus-stack.values` in your favorite editor.

Then, into it, search for `additionalScrapeConfigs` (the value should be empty `[]` by default). You will add a `ConfigMap` to this section.

Before:
```yaml
    additionalScrapeConfigs: []
```

After:
```yaml
    additionalScrapeConfigs:
    - job_name: gpu-metrics
      scrape_interval: 1s
      metrics_path: /metrics
      scheme: http
      kubernetes_sd_configs:
      - role: endpoints
        namespaces:
          names:
          - gpu-operator
      relabel_configs:
      - source_labels: [__meta_kubernetes_pod_node_name]
        action: replace
        target_label: kubernetes_node
```

Don't close this file before retrieving or modifying `adminPassword` key.

by default, Grafana password should be like this:

```yaml
  adminPassword: prom-operator
```

Please, copy the Grafana admin password, you will use it later in this tutorial.

You are now ready to install Prometheus and Grafana.

```bash
helm install prometheus-community/kube-prometheus-stack \
--create-namespace --namespace prometheus \
--generate-name \
--values /tmp/kube-prometheus-stack.values \
--set prometheus.service.type=LoadBalancer \
--set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false \
--set grafana.service.type=LoadBalancer
```

As you can see, we specified that we want to deploy a LoadBalancer in order to access to Prometheus and Grafana easily.

You will see that the installation is successful.

<pre class="console"><code>$ helm install prometheus-community/kube-prometheus-stack \
--create-namespace --namespace prometheus \
--generate-name \
--values /tmp/kube-prometheus-stack.values \
--set prometheus.service.type=LoadBalancer \
--set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false \
--set grafana.service.type=LoadBalancer
NAME: kube-prometheus-stack-1641827066
LAST DEPLOYED: Mon Jan 10 16:04:32 2022
NAMESPACE: prometheus
STATUS: deployed
REVISION: 1
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace prometheus get pods -l "release=kube-prometheus-stack-1641827066"

Visit https://github.com/prometheus-operator/kube-prometheus for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.
</code></pre>

You can also verify by checking the pods in the new `prometheus` namespace:

<pre class="console"><code>$ kubectl get pods -n prometheus
NAME                                                              READY   STATUS    RESTARTS   AGE
alertmanager-kube-prometheus-stack-1641-alertmanager-0            2/2     Running   0          5m46s
kube-prometheus-stack-1641-operator-95b87c9cc-rvdmr               1/1     Running   0          5m49s
kube-prometheus-stack-1641827066-grafana-8686b97b9d-67g92         3/3     Running   0          5m49s
kube-prometheus-stack-1641827066-kube-state-metrics-78b54fbvbn4   1/1     Running   0          5m49s
kube-prometheus-stack-1641827066-prometheus-node-exporter-5jlpp   1/1     Running   0          5m49s
kube-prometheus-stack-1641827066-prometheus-node-exporter-qhmvw   1/1     Running   0          5m49s
kube-prometheus-stack-1641827066-prometheus-node-exporter-xtc2g   1/1     Running   0          5m49s
prometheus-kube-prometheus-stack-1641-prometheus-0                2/2     Running   0          5m46s
</code></pre>

And you can check that Prometheus and Grafana have an external IP:

<pre class="console"><code>$ kubectl get svc -n prometheus
NAME                                                        TYPE           CLUSTER-IP     EXTERNAL-IP       PORT(S)                      AGE
alertmanager-operated                                       ClusterIP      None           <none>            9093/TCP,9094/TCP,9094/UDP   6m22s
kube-prometheus-stack-1641-alertmanager                     ClusterIP      10.3.102.144   <none>            9093/TCP                     6m25s
kube-prometheus-stack-1641-operator                         ClusterIP      10.3.54.22     <none>            443/TCP                      6m26s
kube-prometheus-stack-1641-prometheus                       LoadBalancer   10.3.71.71     152.228.168.191   9090:31518/TCP               6m26s
kube-prometheus-stack-1641827066-grafana                    LoadBalancer   10.3.79.246    51.178.69.167     80:31923/TCP                 6m25s
kube-prometheus-stack-1641827066-kube-state-metrics         ClusterIP      10.3.154.226   <none>            8080/TCP                     6m25s
kube-prometheus-stack-1641827066-prometheus-node-exporter   ClusterIP      10.3.215.121   <none>            9100/TCP                     6m26s
prometheus-operated                                         ClusterIP      None           <none>            9090/TCP                     6m22s
</code></pre>

If it's not the case, please wait until the Load Balancer are correctly created.

### Visualize the metrics

Now you can retrieve Prometheus and Grafana URL thanks to the following commands:

```bash
export PROMETHEUS_URL=$(kubectl get svc kube-prometheus-stack-1641-prometheus -n prometheus -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo Prometheus URL: http://$PROMETHEUS_URL:9090

export GRAFANA_URL=$(kubectl get svc kube-prometheus-stack-1641827066-grafana -n prometheus -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo Grafana URL: http://$GRAFANA_URL
```

You should obtain the follwoing result:

<pre class="console"><code>$ export PROMETHEUS_URL=$(kubectl get svc kube-prometheus-stack-1641-prometheus -n prometheus -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

$ echo Prometheus URL: http://$PROMETHEUS_URL:9090
Prometheus URL: http://152.228.168.191:9090

$ export GRAFANA_URL=$(kubectl get svc kube-prometheus-stack-1641827066-grafana -n prometheus -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

$ echo Grafana URL: http://$GRAFANA_URL
Grafana URL: http://51.178.69.167
</code></pre>

Open your browser and go to the Prometheus interface.

As you already deployed DCGM with NVIDIA GPU Operator, DCGM should already started publishing the metrics to Prometheus. The metrics availability can be verified by typing `DCGM_FI_DEV_GPU_UTIL` in the search bar and click on `Execute` button to determine if the GPU metrics are visible:

![Prometheus](images/prometheus.png)


TODO: xx

grafana URL

login: admin
password: prom-operator

(on a copié le `adminPassword` qq part au dessus dans ce tutoriel ..)


![Grafana](images/grafana.png)

TODO: xx

### DCGM Dashboard in Grafana

To add a dashboard for DCGM, you can use a standard dashboard that NVIDIA has made available, which can also be customized.


TODO: ....


importer l'existant, regarder si on a du traffic


sinon générer du traffic d'une app installée dans letutoriel deploy et regarder les metris qui bougent sur grafana !

TODO: et créer une alerte si on depasse un seuil ????


## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes doc site](../).

Join our [community of users](https://community.ovh.com/en/).

