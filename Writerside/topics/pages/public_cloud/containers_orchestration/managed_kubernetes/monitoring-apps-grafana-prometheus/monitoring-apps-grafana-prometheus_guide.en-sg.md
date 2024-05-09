---
title: Monitoring apps with Prometheus and Grafana on an OVHcloud Managed Kubernetes Service
excerpt: 'Find out how to monitor and visualize metrics with Prometheus and Grafana on an OVHcloud Managed Kubernetes Service'
updated: 2024-03-12
---

## Objective

In this tutorial we will show you how to monitor your applications/workloads on an OVHcloud Managed Kubernetes cluster.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart guide](deploying-hello-world1.).

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](installing-helm1.) tutorial.

## Instructions

In this guide you will:

- install Prometheus operator (it will install [Prometheus](https://prometheus.io/){.external} & [Grafana](https://grafana.com/){.external})
- query Prometheus
- visualize metrics on Grafana

### Prometheus operator

The [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator){.external} provides Kubernetes native deployment and management of Prometheus and related monitoring components.

![Prometheus Architecture](prometheus-scraping-schema.png){.thumbnail}

The purpose of this project is to simplify and automate the configuration of a Prometheus-based monitoring stack for Kubernetes clusters. The Prometheus operator also deploys Grafana and its dashboards, to visualize our metrics in a user-friendly way.

If you are interested in the operator, feel free to read the [Prometheus operator official documentation](https://github.com/prometheus-operator/prometheus-operator){.external}.

### Installing the Prometheus operator

For this tutorial we are using the [Prometheus Operator Helm chart](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack){.external} found on the [Prometheus Community repository](https://github.com/prometheus-community){.external}.

Add the Prometheus Helm repository:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

This will add the Prometheus repository and update all of your repositories: 

```console
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories

$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...
...Successfully got an update from the "prometheus-community" chart repository
...
Update Complete. ⎈Happy Helming!⎈
```

To install the Prometheus Operator Helm chart in your OVHcloud Managed Kubernetes cluster, you need to customize some values.
To do this, you can set parameters on the command line (`--set param.name=value`) or create a local file based on the values from the chart and pass it on the command line (`--values /tmp/kube-prometheus-stack.values`).

For this tutorial we choose the first method.

To install Prometheus and Grafana:

```bash
helm install prometheus-community/kube-prometheus-stack \
--create-namespace --namespace prometheus \
--generate-name \
--set prometheus.service.type=LoadBalancer \
--set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false \
--set grafana.service.type=LoadBalancer \
--set grafana.adminpassword=<my cool password>
```

> [!primary]
>
> You can install only Prometheus without Grafana by setting the following property to false: `--set grafana.enabled=false`
>

As you can see, a new `prometheus` namespace will be created and we specified that we want to deploy a LoadBalancer in order to access externally to Prometheus and Grafana easily.

You should have a behavior like this:

```console
$ helm install prometheus-community/kube-prometheus-stack \
--create-namespace --namespace prometheus \
--generate-name \
--set prometheus.service.type=LoadBalancer \
--set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false \
--set grafana.service.type=LoadBalancer \
--set grafana.adminpassword=myawesomepassword

NAME: kube-prometheus-stack-1710230650
LAST DEPLOYED: Tue Mar 12 09:04:30 2024
NAMESPACE: prometheus
STATUS: deployed
REVISION: 1
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace prometheus get pods -l "release=kube-prometheus-stack-1710230650"

Visit https://github.com/prometheus-operator/kube-prometheus for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.
```

You can also verify by checking the Pods in the new `prometheus` namespace:

```console
$ kubectl get pods -n prometheus
NAME                                                              READY   STATUS    RESTARTS   AGE
alertmanager-kube-prometheus-stack-1710-alertmanager-0            2/2     Running   0          35s
kube-prometheus-stack-1710-operator-ff9695486-72xxd               1/1     Running   0          43s
kube-prometheus-stack-1710230650-grafana-55c874ccc7-gnkr4         2/3     Running   0          43s
kube-prometheus-stack-1710230650-kube-state-metrics-7f79dfct894   1/1     Running   0          43s
kube-prometheus-stack-1710230650-prometheus-node-exporter-8xt87   1/1     Running   0          44s
prometheus-kube-prometheus-stack-1710-prometheus-0                1/2     Running   0          35s
```

You can also check that `Prometheus` and `Grafana` have an external IP:

```console
$ kubectl get svc -n prometheus
NAME                                                        TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                         AGE
alertmanager-operated                                       ClusterIP      None           <none>           9093/TCP,9094/TCP,9094/UDP      118s
kube-prometheus-stack-1710-alertmanager                     ClusterIP      XX.XX.XXX.XXX   <none>           9093/TCP,8080/TCP               2m6s
kube-prometheus-stack-1710-operator                         ClusterIP      XX.XX.XXX.XXX    <none>           443/TCP                         2m6s
kube-prometheus-stack-1710-prometheus                       LoadBalancer   XX.XX.XXX.XXX    YY.YYY.YYY.YYY   9090:30517/TCP,8080:31250/TCP   2m6s
kube-prometheus-stack-1710230650-grafana                    LoadBalancer   XX.XX.XXX.XXX    ZZ.ZZZ.ZZZ.ZZZ   80:30401/TCP                    2m6s
kube-prometheus-stack-1710230650-kube-state-metrics         ClusterIP      XX.XX.XXX.XXX      <none>           8080/TCP                        2m6s
kube-prometheus-stack-1710230650-prometheus-node-exporter   ClusterIP      XX.XX.XXX.XXX   <none>           9100/TCP                        2m6s
prometheus-operated                                         ClusterIP      None           <none>           9090/TCP                        117s
```

If it's not the case, please wait until the Load Balancers are correctly created.

### Visualize the metrics

Now you can retrieve Prometheus and Grafana URLs with the following commands:

```bash
export PROMETHEUS_URL=$(kubectl get svc -n prometheus -l app=kube-prometheus-stack-prometheus -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

echo Prometheus URL: http://$PROMETHEUS_URL:9090

export GRAFANA_URL=$(kubectl get svc -n prometheus -l app.kubernetes.io/name=grafana -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

echo Grafana URL: http://$GRAFANA_URL
```

You should obtain the following result:

```console
$ export PROMETHEUS_URL=$(kubectl get svc -n prometheus -l app=kube-prometheus-stack-prometheus -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

$ echo Prometheus URL: http://$PROMETHEUS_URL:9090
Prometheus URL: http://XX.XXX.XXX.XXX:9090

$ export GRAFANA_URL=$(kubectl get svc -n prometheus -l app.kubernetes.io/name=grafana -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

$ echo Grafana URL: http://$GRAFANA_URL
Grafana URL: http://YY.YYY.YYY.YY
```

Open your browser and go to the Prometheus interface.

Without doing anything on your side, several built-in metrics are already available. You can test them by typing `sum(kube_pod_owner{job="kube-state-metrics"}) by (namespace)` in the search bar.

Click on the `Execute`{.action} button to determine if the Kubernetes metrics are visible:

![Prometheus](prometheus.png){.thumbnail}

Thanks to the PromQL query you can list the number of pods per namespace in your Kubernetes cluster.

Kubernetes components emit metrics in Prometheus format. You can find more information in the [Kubernetes official documentation](https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/){.external}.

You can also go to the Grafana interface. Open your browser and point to `http://$GRAFANA_URL` value using the credentials below:

- Login: `admin`
- Password: `prom-operator` (by default)

![Grafana](images_grafana.png){.thumbnail}

![Grafana Home Page](grafana-home-page.png){.thumbnail}

This time again, thanks to the prometheus operator and without doing anything on your side, several dashboards are available. You can display them by clicking on the `Dashboards`{.action} icon, in the Grafana sidebar, then on `browse`{.action}:

![Grafana](grafana-browse.png){.thumbnail}
![Grafana](grafana-dashboards.png){.thumbnail}

For example, you can click on the `General/Kubernetes/Compute Resources/Cluster` dashboard to visualize the metrics of your Kubernetes cluster:

![Grafana](grafana-metrics.png){.thumbnail}

## Cleanup

First, execute the `helm list` command in every namespace (with `-A` option) in your Kubernetes cluster to see what you've installed.

```console
$ helm list -A
NAME                            	NAMESPACE          	REVISION	UPDATED                                	STATUS  	CHART                                                                                                	APP VERSION
cert-manager                    	cert-manager       	1       	2024-01-18 15:28:23.01963 +0100 CET    	deployed	cert-manager-v1.13.3                                                                                 	v1.13.3
kube-prometheus-stack-1710230650	prometheus         	1       	2024-03-12 09:04:30.737643 +0100 CET   	deployed	kube-prometheus-stack-57.0.1                                                                         	v0.72.0
```

Now, you can delete what you've installed in this tutorial, thanks to `helm uninstall` commands:

```bash
helm uninstall kube-prometheus-stack-1710230650 -n prometheus
```

You should have a behavior like this:

```console
$ helm uninstall kube-prometheus-stack-1710230650 -n prometheus
release "kube-prometheus-stack-1647417678" uninstalled
```

## Go further

Prometheus and Grafana are very powerful monitoring tools, but also have alerting systems. Don't hesitate to dig in, to create alerts for example.

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes documentation](public-cloud-containers-orchestration-managed-kubernetes-k8s1.).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-sg/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our [community of users](https://community.ovh.com/en/).
