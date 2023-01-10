---
title: Monitoring apps with Prometheus and Grafana on an OVHcloud Managed Kubernetes Service
slug: monitoring-apps-prometheus-grafana
excerpt: 'Find out how to monitor and visualize metrics with Prometheus and Grafana on an OVHcloud Managed Kubernetes Service'
section: Monitoring & Observability
order: 00
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

**Last updated March 16, 2022.**

## Objective

In this tutorial we will show you how to monitor your applications/workloads on an OVHcloud Managed Kubernetes cluster.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart guide](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installed on your workstation and your cluster. Please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

## Instructions

In this guide you will:

- install Prometheus operator (it will install [Prometheus](https://prometheus.io/){.external} & [Grafana](https://grafana.com/){.external})
- query Prometheus
- visualize metrics on Grafana

### Prometheus operator

The [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator){.external} provides Kubernetes native deployment and management of Prometheus and related monitoring components.

![Prometheus Architecture](images/prometheus-scraping-schema.png){.thumbnail}

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

<pre class="console"><code>$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
"prometheus-community" has been added to your repositories

$ helm repo update
Hang tight while we grab the latest from your chart repositories...
...
...Successfully got an update from the "prometheus-community" chart repository
...
Update Complete. ⎈Happy Helming!⎈
</code></pre>

You need to modify some settings. To do this, inspect the chart to retrieve these values ​​in a file:

```bash
helm inspect values prometheus-community/kube-prometheus-stack > /tmp/kube-prometheus-stack.values
```

Open the `/tmp/kube-prometheus-stack.values` file in your favorite editor.

Then search into it for `adminPassword` and replace it with the password you want to use for Grafana.

By default, the Grafana password should be like this:

```yaml
  adminPassword: prom-operator
```

Copy and save the Grafana admin password, you will use it later in this tutorial.

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

As you can see, a new `prometheus` namespace will be created and we specified that we want to deploy a LoadBalancer in order to access externally to Prometheus and Grafana easily.

You should have a behavior like this:

<pre class="console"><code>$ helm install prometheus-community/kube-prometheus-stack \
--create-namespace --namespace prometheus \
--generate-name \
--values /tmp/kube-prometheus-stack.values \
--set prometheus.service.type=LoadBalancer \
--set prometheus.prometheusSpec.serviceMonitorSelectorNilUsesHelmValues=false \
--set grafana.service.type=LoadBalancer
NAME: kube-prometheus-stack-1647417678
LAST DEPLOYED: Wed Mar 16 09:01:23 2022
NAMESPACE: prometheus
STATUS: deployed
REVISION: 1
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace prometheus get pods -l "release=kube-prometheus-stack-1647417678"

Visit https://github.com/prometheus-operator/kube-prometheus for instructions on how to create & configure Alertmanager and Prometheus instances using the Operator.
</code></pre>

You can also verify by checking the Pods in the new `prometheus` namespace:

<pre class="console"><code>$ kubectl get pods -n prometheus
NAME                                                              READY   STATUS    RESTARTS   AGE
alertmanager-kube-prometheus-stack-1647-alertmanager-0            2/2     Running   0          14m
kube-prometheus-stack-1647-operator-57b69b9667-d92sc              1/1     Running   0          14m
kube-prometheus-stack-1647417678-grafana-695574b948-znqsd         3/3     Running   0          14m
kube-prometheus-stack-1647417678-kube-state-metrics-6d4bc49pqlc   1/1     Running   0          14m
kube-prometheus-stack-1647417678-prometheus-node-exporter-gxphr   1/1     Running   0          14m
kube-prometheus-stack-1647417678-prometheus-node-exporter-jdtr6   1/1     Running   0          14m
kube-prometheus-stack-1647417678-prometheus-node-exporter-xkqt2   1/1     Running   0          14m
prometheus-kube-prometheus-stack-1647-prometheus-0                2/2     Running   0          14m
</code></pre>

You can also check that `Prometheus` and `Grafana` have an external IP:

<pre class="console"><code>$ kubectl get svc -n prometheus
NAME                                                        TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
alertmanager-operated                                       ClusterIP      None           <none>           9093/TCP,9094/TCP,9094/UDP   15m
kube-prometheus-stack-1647-alertmanager                     ClusterIP      10.3.14.89     <none>           9093/TCP                     15m
kube-prometheus-stack-1647-operator                         ClusterIP      10.3.176.201   <none>           443/TCP                      15m
kube-prometheus-stack-1647-prometheus                       LoadBalancer   10.3.105.242   51.210.210.213   9090:31819/TCP               15m
kube-prometheus-stack-1647417678-grafana                    LoadBalancer   10.3.28.111    51.210.253.47    80:32481/TCP                 15m
kube-prometheus-stack-1647417678-kube-state-metrics         ClusterIP      10.3.235.254   <none>           8080/TCP                     15m
kube-prometheus-stack-1647417678-prometheus-node-exporter   ClusterIP      10.3.237.94    <none>           9100/TCP                     15m
prometheus-operated                                         ClusterIP      None           <none>           9090/TCP                     14m
</code></pre>

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

<pre class="console"><code>$ export PROMETHEUS_URL=$(kubectl get svc -n prometheus -l app=kube-prometheus-stack-prometheus -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

$ echo Prometheus URL: http://$PROMETHEUS_URL:9090
Prometheus URL: http://152.228.168.191:9090

$ export GRAFANA_URL=$(kubectl get svc -n prometheus -l app.kubernetes.io/name=grafana -o jsonpath='{.items[].status.loadBalancer.ingress[].ip}')

$ echo Grafana URL: http://$GRAFANA_URL
Grafana URL: http://51.178.69.167
</code></pre>

Open your browser and go to the Prometheus interface.

Without doing anything on your side, several built-in metrics are already available. You can test them by typing `sum(kube_pod_owner{job="kube-state-metrics"}) by (namespace)` in the search bar.

Click on the `Execute`{.action} button to determine if the Kubernetes metrics are visible:

![Prometheus](images/prometheus.png){.thumbnail}

Thanks to the PromQL query you can list the number of pods per namespace in your Kubernetes cluster.

Kubernetes components emit metrics in Prometheus format. You can find more information in the [Kubernetes official documentation](https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/){.external}.

You can also go to the Grafana interface. Open your browser and point to `http://$GRAFANA_URL` value using the credentials below:

- Login: `admin`
- Password: `prom-operator` (by default)

![Grafana](images/grafana.png){.thumbnail}

![Grafana Home Page](images/grafana-home-page.png){.thumbnail}

This time again, thanks to the prometheus operator and without doing anything on your side, several dashboards are available. You can display them by clicking on the `Dashboards`{.action} icon, in the Grafana sidebar, then on `browse`{.action}:

![Grafana](images/grafana-browse.png){.thumbnail}
![Grafana](images/grafana-dashboards.png){.thumbnail}

For example, you can click on the `General/Kubernetes/Compute Resources/Cluster` dashboard to visualize the metrics of your Kubernetes cluster:

![Grafana](images/grafana-metrics.png){.thumbnail}

## Cleanup

First, execute the `helm list` command in every namespace (with `-A` option) in your Kubernetes cluster to see what you've installed.

<pre class="console"><code>$ helm list -A
NAME                            	NAMESPACE    	REVISION	UPDATED                             	STATUS  	CHART                       	APP VERSION
kube-prometheus-stack-1647417678	prometheus   	1       	2022-03-16 09:01:23.979906 +0100 CET	deployed	kube-prometheus-stack-33.2.1	0.54.1
</code></pre>

Now, you can delete what you've installed in this tutorial, thanks to `helm uninstall` commands:

```bash
helm uninstall kube-prometheus-stack-1647417678 -n prometheus
```

You should have a behavior like this:

<pre class="console"><code>$ helm uninstall kube-prometheus-stack-1647417678 -n prometheus
release "kube-prometheus-stack-1647417678" uninstalled
</code></pre>

## Go further

Prometheus and Grafana are very powerful monitoring tools, but also have alerting systems. Don't hesitate to dig in, to create alerts for example.

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes documentation](../).

Join our [community of users](https://community.ovh.com/en/).
