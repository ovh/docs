---
title: Connect OVHcloud Managed Kubernetes service to OVHcloud Managed MySQL service
slug: connect-kubernetes-to-managed-mysql
excerpt: "Find out how to connect OVHcloud Managed Kubernetes to an OVHcloud Managed MySQL database"
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

**Last updated December 24, 2021.**

In this tutorial, we are going to show you how to connect your OVHcloud Managed Kubernetes Service to an OVHcloud Managed MySQL database.

## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../../kubernetes/deploying-hello-world/).

You need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../../kubernetes/installing-helm/) tutorial.

Finally, you need to be able to order a database solution in the OVHcloud Control Panel, as explained at [Getting started with Public Cloud Databases](../getting-started/).

## Create a MySQL database

### Subscribing to the service

Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) and switch to `Public Cloud`{.action} in the top navigation bar. After selecting your Public Cloud project, click on `Databases`{.action} in the left-hand navigation bar under **Storage**.

Click on the button `Create a database instance`{.action}. (`Create a service`{.action} if your project already contains databases.)

### Step 1: Select MySQL database

Click on the MySQL database and then select the version to install from the drop-down menu. Click on `Next`{.action} to continue.

![Choose MySQL database](images/connect-kubernetes-to-managed-mysql01.png){.thumbnail}

### Step 2: Select a solution

In this step, choose an appropriate service plan. You will be able to upgrade the plan after creation.

![Choose plan](images/connect-kubernetes-to-managed-mysql02.png){.thumbnail}

Please visit the [capabilities page](../mysql/capabilities) for detailed information on each plan's properties.

Click on `Next`{.action} to continue.

### Step 3: Select a location

Choose the geographical region of the data centre in which your database will be hosted.

![Choose region](images/connect-kubernetes-to-managed-mysql03.png){.thumbnail}

Click on `Next`{.action} to continue.

### Step 4: Configure database nodes

You can choose the node model in this step. The initial and maximum numbers of nodes depends on the solution chosen in step 2.

![Order nodes](images/connect-kubernetes-to-managed-mysql04.png){.thumbnail}

Please visit the [capabilities page](../mysql/capabilities/) for detailed information on the hardware resources and other properties of the MySQL database installation.

Take note of the pricing information and click on `Next`{.action} to continue.

### Step 5: Configure your options

You can name your database in this step.

![Configure options](images/connect-kubernetes-to-managed-mysql05.png){.thumbnail}

### Connecting a private network (optional)

For now, the solution is not compatible with private networks.

### Step 6: Summary and confirmation

The final section will display a summary of your order as well as the API equivalent of creating this database instance with the [OVHcloud API](../../api/first-steps-with-ovh-api/).

![Confirm order](images/connect-kubernetes-to-managed-mysql06.png){.thumbnail}

Within a few minutes your new database service will be deployed. Messages in the OVHcloud Control Panel will inform you when the database is ready to use.

You know your database is ready when cluster status is "Ready", node status is green, and number of users is set to "1 user".

![Control Panel DB ok](images/connect-kubernetes-to-managed-mysql08.png){.thumbnail}

## Whitelist your OVHcloud Managed Kubernetes cluster

For security reasons the default network configuration doesn't allow any incoming connections. 
To allow access from your OVHcloud Managed Kubernetes service to the database, cluster nodes IPs have to be whitelisted.

### Add kubernetes cluster nodes IPs to the DB whitelist

Get your Kubernetes cluster nodes IP addresses from the Compute / Instances menu on the left.

![Nodes IPs list](images/connect-kubernetes-to-managed-mysql09.png){.thumbnail}

Following the related documentation [whitelist the suitable IP addresses](../mongodb/managing-service/#configuring-authorised-ips), add your k8s cluster node IPs to the whitelist

![Db completed setup](images/connect-kubernetes-to-managed-mysql10.png){.thumbnail}

## Test connection from k8s to MySQL db

An easy and quick way to test the connection is to start a MySQL client inside a pod, and use the CLI to connect to the db.

### Start a MySQL client inside a pod

```
kubectl run mysql-client --image=mysql:8 -it --rm --restart=Never -- /bin/bash
```
You are now inside the pod you just created on your cluster, you can simply use the MySQL CLI to connect to your manages MySQL database.

The parameters you need to know are :
* the db Host, the db port

    Get them from the "General Information tab"
* the db Name

    Get it from the "Databases" tab, usually "defaultdb"
* the db User

    Get it from the "Users" tab, usually "avnadmin"
* the db Password

    Get it after reset it.

![Password reseted](images/connect-kubernetes-to-managed-mysql11.png){.thumbnail}

Now connect to the database with the command

```
mysql -uavnadmin -pxxxxxxxxxxxxxx -hmysql-xxxxxxxx-xxxxxxxxx.database.cloud.ovh.net -P20184 defaultdb
```

<pre class="console"><code>root@mysql-client:/# mysql -uavnadmin -pxxxxxxxxxxxxxx -hmysql-xxxxxxxx-xxxxxxxxx.database.cloud.ovh.net -P20184 defaultdb 
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3603
Server version: 8.0.26 Source distribution

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql></code></pre>

Setup is done, your Managed MySQL database is fully operational, let's go further and use it with Wordpress hosted in Kubernetes.

## Installing the Wordpress Helm chart

For this tutorial we are using the [Wordpress Helm chart](https://github.com/bitnami/charts/tree/master/bitnami/wordpress){.external} found on [Bitnami repository](https://github.com/bitnami/charts/){.external}. The chart is fully configurable, but here we are using the default configuration, with only the minimal set of customization to make it work well on OVHcloud Managed Kubernetes Service.

### Pre-requisites

As described on tutorial [Installing WordPress on OVHcloud Managed Kubernetes](../../kubernetes/installing-wordpress/#installing-the-wordpress-helm-chart), remove the default storage class and install the new one.

```
kubectl delete storageclasses.storage.k8s.io csi-cinder-high-speed

kubectl apply -f https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/kubernetes-k8s/fix-persistent-volumes-permissions/files/fixed-cinder-high-speed-storage-class.yaml
```

### Customizing your install

 Maybe you would like your username to be different, or be able to set your password..

In order to customize your install, without having to leave the simplicity of using helm and the Wordpress helm chart, you can simply set some of the [configurable parameters of the WordPress chart](https://github.com/helm/charts/tree/master/stable/wordpress#configuration){.external}. 
Then you can add it to your `helm install` with the `--set` option (`--set param1=value1,param2=value2`)

Otions to set for accessing the Managed MySQL database are
```
mariadb.enabled=false
externalDatabase.host=mysql-xxxxxxxx-xxxxxxxxx.database.cloud.ovh.net
externalDatabase.user=avnadmin
externalDatabase.password=xxxxxxxxx
externalDatabase.database=defaultdb
externalDatabase.port=20184
```

This will install the needed elements (a Wordpress pod for the webserver with the Worpdress PHP code),
allocate the persistent volumes and initialize the services. And at the end, it will give you the connection parameters for your new Wordpress:

<pre class="console"><code>$ helm install my-wordpress bitnami/wordpress --set allowOverrideNone=true,mariadb.enabled=false,externalDatabase.host=mysql-xxxxxxxx-xxxxxxxxx.database.cloud.ovh.net,externalDatabase.user=avnadmin,externalDatabase.password=xxxxxxxxx,externalDatabase.database=defaultdb,externalDatabase.port=20184
NAME: my-wordpress
LAST DEPLOYED: Thu Dec 23 15:49:33 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
CHART NAME: wordpress
CHART VERSION: 12.2.7
APP VERSION: 5.8.2

** Please be patient while the chart is being deployed **

Your WordPress site can be accessed through the following DNS name from within your cluster:

    my-wordpress.default.svc.cluster.local (port 80)

To access your WordPress site from outside the cluster follow the steps below:

1. Get the WordPress URL by running these commands:

  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        Watch the status with: 'kubectl get svc --namespace default -w my-wordpress'

   export SERVICE_IP=$(kubectl get svc --namespace default my-wordpress --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")
   echo "WordPress URL: http://$SERVICE_IP/"
   echo "WordPress Admin URL: http://$SERVICE_IP/admin"

2. Open a browser and access WordPress using the obtained URL.

3. Login with the following credentials below to see your blog:

  echo Username: user
  echo Password: $(kubectl get secret --namespace default my-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)

</code></pre>

As the instructions say, you will need to wait a few moments to get the `LoadBalancer` URL.
You can test if the `LoadBalancer` is ready using:

```
kubectl get svc --namespace default -w my-wordpress
```

After some minutes, you will get the `LoadBalancer` URL:

<pre class="console"><code>$ kubectl get svc --namespace default -w my-wordpress
NAME           TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
my-wordpress   LoadBalancer   10.3.193.143   135.125.83.116   80:32027/TCP,443:32293/TCP   4m30s
</code></pre>

Then you can follow the instructions to get the Admin URL:

<pre class="console"><code>$ export SERVICE_IP=$(kubectl get svc --namespace default my-wordpress --template "{{ range (index .status.loadBalancer.ingress 0) }}{{.}}{{ end }}")
$ echo "WordPress URL: http://$SERVICE_IP/"
WordPress URL: http://135.125.83.116/
$ echo "WordPress Admin URL: http://$SERVICE_IP/admin"
WordPress Admin URL: http://135.125.83.116/admin
</code></pre>

And putting the URL in your browser will take you to the new blog:

![Installing Wordpress](images/connect-kubernetes-to-managed-mysql12.png){.thumbnail}

You also use the instructions given by the helm install to get the default username and password for your blog.

In my case:

<pre class="console"><code>$ echo Username: user
Username: user
$ echo Password: $(kubectl get secret --namespace default my-wordpress -o jsonpath="{.data.wordpress-password}" | base64 --decode)
Password: GSPSIXwGok
</code></pre>

![Installing Wordpress](images/connect-kubernetes-to-managed-mysql13.png){.thumbnail}

You have a working Wordpress on your OVHcloud Managed Kubernetes Service, storing datas on your OVHcloud Managed MySQL, congratulations!

## Cleaning up

To clean up your cluster, simply use Helm to delete your Wordpress blog.

```bash
helm delete my-wordpress
```

It will delete your Wordpress and its associated resources from your cluster:

<pre class="console"><code>$ helm delete my-wordpress
release "my-wordpress" uninstalled
</code></pre>
