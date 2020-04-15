---
title: Installing WordPress on OVHcloud Managed Kubernetes
slug: installing-wordpress
excerpt: 'Find out how to install WordPress on OVHcloud Managed Kubernetes'
section: Tutorials
order: 5
---

**Last updated April 14<sup>th</sup>, 2020.**

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

In this tutorial we are going to guide you with the install of [Wordpress](https://wordpress.org/){.external} on your OVHcloud Managed Kubernetes Service.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/) installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.


## Installing the Wordpress Helm chart

For this tutorial we are using the [Wordpress Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/wordpress){.external} found on [Bitnami repository](https://github.com/bitnami/charts/). The chart is fully configurable, but here we are using the default configuration, with only the minimal set of customization to make it work well on OVHcloud Managed Kubernetes Service.


> [!primary]
> ### Customizing your install
> 
> Maybe you would like your username to be different, or be able to set your password, or choose an external database instead of deploying the MariaDB container... 
>
> In order to customize your install, without having to leave the simplicity of using helm and the Wordpress helm chart, you can simply set some of the [configurable parameters of the WordPress chart](https://github.com/helm/charts/tree/master/stable/wordpress#configuration){.external}. Then you can add it to your `helm install` with the `--set` option (`--set param1=value1,param2=value2`)
>


```
helm install my-first-k8s-wordpress bitnami/wordpress --set allowOverrideNone=true
```

This will install the needed elements (a MariaDB pod for the database, a Wordpress pod for the webserver with the Worpdress PHP code),
allocate the persistent volumes and initialize the services. And at the end, it will give you the connection parameters for your new Wordpress:


<pre class="console"><code>$ helm install my-first-k8s-wordpress bitnami/wordpress --set allowOverrideNone=true
NAME: my-first-k8s-wordpress
LAST DEPLOYED: Tue Apr 14 15:14:57 2020
NAMESPACE: default
STATUS: deployed
REVISION: 1
NOTES:
** Please be patient while the chart is being deployed **

To access your WordPress site from outside the cluster follow the steps below:

1. Get the WordPress URL by running these commands:

  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        Watch the status with: 'kubectl get svc --namespace default -w my-first-k8s-wordpress'

   export SERVICE_IP=$(kubectl get svc --namespace default my-first-k8s-wordpress --template "{{ range (index .status.loadBalancer.ingress 0
) }}{{.}}{{ end }}")
   echo "WordPress URL: http://$SERVICE_IP/"
   echo "WordPress Admin URL: http://$SERVICE_IP/admin"

2. Open a browser and access WordPress using the obtained URL.

3. Login with the following credentials below to see your blog:

  echo Username: user
  echo Password: $(kubectl get secret --namespace default my-first-k8s-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
</code></pre>


As the instructions say, you will need to wait a few moments to get the `LoadBalancer` URL. 
You can test if the `LoadBalancer` is ready using:

```
kubectl get svc --namespace default -w my-first-k8s-wordpress
```


After some minutes, you will the `LoadBalancer` URL:


<pre class="console"><code>$ kubectl get svc --namespace default -w my-first-k8s-wordpress
NAME                     TYPE           CLUSTER-IP    EXTERNAL-IP     PORT(S)                      AGE
my-first-k8s-wordpress   LoadBalancer   10.3.83.253   &lt;pending>      80:32296/TCP,443:31838/TCP   2m13s
my-first-k8s-wordpress   LoadBalancer   10.3.83.253   XXXXXXX.lb...   80:32296/TCP,443:31838/TCP   2m13s
</code></pre>

Then you can follow the instructions to get the Admin URL:

<pre class="console"><code>$ export SERVICE_IP=$(kubectl get svc --namespace default my-first-k8s-wordpress --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")
$ echo "WordPress URL: http://$SERVICE_IP/"
WordPress URL: http://XXXXXXX.lb.c1.gra.k8s.ovh.net/
$ echo "WordPress Admin URL: http://$SERVICE_IP/admin"
WordPress Admin URL: http://XXXXXXX.lb.c1.gra.k8s.ovh.net/admin
</code></pre>

And putting the URL in your browser will take you to the new blog:

![Installing Wordpress](images/installing-wordpress-01.jpg){.thumbnail}

You also use the instructions given by the helm install to get the default username and password for your blog.

In my case:

<pre class="console"><code>$ echo Username: user
Username: user
$ echo Password: $(kubectl get secret --namespace default mollified-lynx-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
Password: 0pdfhdfhfe5
</code></pre>

![Installing Wordpress](images/installing-wordpress-02.jpg){.thumbnail}


You have a working Wordpress on your OVHcloud Managed Kubernetes Service, congratulations!


