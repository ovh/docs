---
title: 'Installing CDS on OVH Managed Kubernetes'
slug: installing-cds
excerpt: 'Find out how to install CDS on OVH Managed Kubernetes'
section: Tutorials
---

**Last updated on March 8th, 2019**

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
 }
 .small {
     font-size: 0.75em;
 }
</style>

In this tutorial we are going to guide you with the install of [CDS](https://ovh.github.io/cds) on your OVH Managed Kubernetes Service. CDS is an Enterprise-Grade Continuous Delivery & DevOps Automation Platform.

We are going to install all CDS components (API, vcs uService, hooks uService, hatchery to spawn workers, elasticsearch to index events).




## Before you begin

This tutorial presupposes that you already have a working OVH Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

You also need to have [Helm](https://docs.helm.sh/) installed on your workstation and your cluster, please refer to the [How to install Helm on OVH Managed Kubernetes Service](../installing-helm/) tutorial.


## Installing the CDS Helm chart

For this tutorial we are using the [CDS Helm chart](https://github.com/ovh/cds/tree/master/contrib/helm/cds) found on CDS repository. The chart is fully configurable, but here we are using the default configuration, with only the minimal set of customization to make it work well on OVH Managed Kubernetes Service.

As the CDS chart isn't already in the official helm repository on GitHub you have to clone the CDS repository with the CDS helm inside.

<pre class="console"><code>
git clone https://github.com/ovh/cds.git
cd cds/contrib/helm/cds
# To let CDS spawn workers on your kubernetes cluster you need to copy your kubeconfig.yaml in the current directory
cp yourPathToKubeconfig.yaml kubeconfig.yaml
</code></pre>


> [!primary]
> ### Customizing your install
> 
> Maybe you would like your admin username to be different, or be able to set your admin password, or modify the resources allocated... 
>
> In order to customize your install, without having to leave the simplicity of using helm and the Wordpress helm chart, you can simply set some of the [configurable parameters of the CDS chart](https://github.com/ovh/cds/blob/master/contrib/helm/cds/values.yaml). Then you can add it to your `helm install` with the `--set` option (`--set param1=value1,param2=value2`).
>

<pre class="console"><code>
# Inside of cds/contrib/helm/cds
helm dependency update
helm install .
</code></pre>

This will install all the CDS services:

<pre class="console"><code>$ helm install .
NAME:   my-cds
LAST DEPLOYED: Thu Feb  7 12:07:24 2019
NAMESPACE: cds
STATUS: DEPLOYED

RESOURCES:
==> v1/PersistentVolumeClaim
NAME                     AGE
my-cds-postgresql        59s
my-cds-cds-api           59s
my-cds-cds-repositories  59s

==> v1/Service
my-cds-elasticsearch-client     59s
my-cds-elasticsearch-discovery  59s
my-cds-postgresql               59s
my-cds-redis-master             59s
my-cds-redis-slave              59s
my-cds-cds-api                  59s
my-cds-cds-elasticsearch        59s
my-cds-cds-hatchery-k8s         59s
my-cds-cds-hooks                58s
my-cds-cds-repositories         58s
my-cds-cds-ui                   58s
my-cds-cds-vcs                  58s

==> v1beta1/Deployment
my-cds-elasticsearch-client  58s
my-cds-postgresql            58s
my-cds-redis-slave           58s
my-cds-cds-api               58s
my-cds-cds-elasticsearch     58s
my-cds-cds-hatchery-k8s      58s
my-cds-cds-hooks             58s
my-cds-cds-repositories      58s
my-cds-cds-ui                58s
my-cds-cds-vcs               58s

==> v1beta1/StatefulSet
my-cds-elasticsearch-data    58s
my-cds-elasticsearch-master  58s

==> v1beta2/StatefulSet
my-cds-redis-master  58s

==> v1/Pod(related)

NAME                                          READY  STATUS             RESTARTS  AGE
my-cds-elasticsearch-client-5797cb88cd-bdtx4  0/1    Running            0         58s
my-cds-postgresql-554cff77b5-tb2c9            1/1    Running            0         58s
my-cds-redis-slave-544478d54c-m2mg8           0/1    Running            0         58s
my-cds-cds-api-799f8c7c55-lf4zt               0/1    CrashLoopBackOff   1         58s
my-cds-cds-elasticsearch-7d666db5bf-8gngf     1/1    Running            1         58s
my-cds-cds-hatchery-k8s-554bccb9d5-ftsrj      1/1    Running            1         58s
my-cds-cds-hooks-765d94b886-lpsss             1/1    Running            1         58s
my-cds-cds-repositories-689b5c755f-kk5t4      1/1    Running            1         58s
my-cds-cds-ui-74b78df797-76kzs                1/1    Running            0         58s
my-cds-cds-vcs-6b58d46766-4pj24               1/1    Running            1         58s
my-cds-elasticsearch-data-0                   0/1    PodInitializing    0         58s
my-cds-elasticsearch-master-0                 0/1    Running            0         58s
my-cds-redis-master-0                         0/1    ContainerCreating  0         57s

==> v1/Secret

NAME               AGE
my-cds-postgresql  59s
my-cds-cds         59s

==> v1/ConfigMap
my-cds-elasticsearch  59s
my-cds-postgresql     59s


NOTES:

************************************************************************
*** PLEASE BE PATIENT: CDS may take a few minutes to install         ***
************************************************************************

1. Get the CDS URL:

  NOTE: It may take a few minutes for the LoadBalancer IP to be available.
        Watch the status with: 'kubectl get svc --namespace default -w my-cds-cds-ui'

  export SERVICE_IP=$(kubectl get svc --namespace default my-cds-cds-ui -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
  echo http://$SERVICE_IP/

2. Create an account from the ui using your web browser

And check in the log of your api server to get registration URL :

  export CDS_API_POD_NAME=$(kubectl get pods --namespace default -l "app=my-cds-cds-api" -o jsonpath="{.items[0].metadata.name}")
  kubectl logs -f --namespace default $CDS_API_POD_NAME | grep 'account/verify'
</code></pre>


### Create the first CDS User

This log asks you to open `http://$SERVICE_IP/` in your browser to create the first user. 

After create the first account and as there is no SMTP configured, you have to check the CDS Logs to retrieve the URL to validate.

With the previous example log, the command to run is:

<pre class="console"><code>
export CDS_API_POD_NAME=$(kubectl get pods --namespace default -l "app=my-cds-cds-api" -o jsonpath="{.items[0].metadata.name}")
kubectl logs -f --namespace default $CDS_API_POD_NAME | grep 'account/verify'
</code></pre>

After registration on UI, keep the password displayed, we will use it in next step. 

The first user created on CDS is a CDS Administrator.

In order to have all that you need to run your first job you need to add a first [worker model](https://ovh.github.io/cds/workflows/pipelines/requirements/worker-model/). It's the perfect use case to use the [CDS Command Line](https://ovh.github.io/cds/cli/cdsctl/) named `cdsctl`.

### Download cdsctl

<pre class="console"><code>
# on a Linux workstation:
$ curl http://$SERVICE_IP/cdsapi/download/cdsctl/linux/amd64 -o cdsctl
# on a osX workstation, it's curl http://$SERVICE_IP/cdsapi/download/cdsctl/darwin/amd64 -o cdsctl
$ chmod +x cdsctl
</code></pre>

> [!primary]
> please note that the version linux/amd64, darwin/amd64 and windows/amd64 use libsecret / keychain to store the CDS Password.
If you don't want to use the keychain, you can select the version i386*

### Login with cdsctl

<pre class="console"><code>
$ ./cdsctl login --api-url http://$SERVICE_IP/cdsapi -u yourusername
CDS API URL: http://$SERVICE_IP/cdsapi
Username: yourusername
Password:
          You didn't specify config file location; /Users/yourhome/.cdsrc will be used.
Login successful
</code></pre>


### Create a worker model

<pre class="console"><code>
./cdsctl worker model import https://raw.githubusercontent.com/ovh/cds/master/contrib/worker-models/go-official-1.11.4-stretch.yml
</code></pre>

In this case, it's a worker model based on the official golang docker image coming from docker hub. 
The hatchery will register the worker model before it can be used. You can check the 
registration information on the ui: Settings -> Worker models -> go-official-1.11.4-stretch -> flag "Need registration".

### Import a workflow template

<pre class="console"><code>
$ ./cdsctl template push https://raw.githubusercontent.com/ovh/cds/master/contrib/workflow-templates/demo-workflow-hello-world/demo-workflow-hello-world.yml
Workflow template shared.infra/demo-workflow-hello-world has been created
Template successfully pushed !
</code></pre>

### Create a project with reference key DEMO and name FirstProject, then create your first workflow with a template:

<pre class="console"><code>
$ ./cdsctl project create DEMO FirstProject
$ ./cdsctl workflow applyTemplate
? Found one CDS project DEMO - FirstProject. Is it correct? Yes
? Choose the CDS template to apply: Demo workflow hello world (shared.infra/demo-workflow-hello-world)
? Give a valid name for the new generated workflow MyFirstWorkflow
? Push the generated workflow to the DEMO project Yes
Application MyFirstWorkflow successfully created
Application variables for MyFirstWorkflow are successfully created
Permission applied to group FirstProject to application MyFirstWorkflow
Environment MyFirstWorkflow-prod successfully created
Environment MyFirstWorkflow-dev successfully created
Environment MyFirstWorkflow-preprod successfully created
Pipeline build-1 successfully created
Pipeline deploy-1 successfully created
Pipeline it-1 successfully created
Workflow MyFirstWorkflow has been created
Workflow successfully pushed !
.cds/MyFirstWorkflow.yml
.cds/build-1.pip.yml
.cds/deploy-1.pip.yml
.cds/it-1.pip.yml
.cds/MyFirstWorkflow.app.yml
.cds/MyFirstWorkflow-dev.env.yml
.cds/MyFirstWorkflow-preprod.env.yml
.cds/MyFirstWorkflow-prod.env.yml
</code></pre>

### Execute a workflow

On CDS all actions could be done with UI, CLI or API. So you can go on your CDS UI to check your new workflow and run it.

![CDS workflow](./images/installing-cds-01.png){.thumbnail}

For any further informations about CDS please check [official documentation](https://ovh.github.io/cds/).

> [!primary]
> ### Troubleshooting
>
>If you can't run your first job, please check that you have add a worker model on your CDS, or check the log of the CDS hatchery service in Kubernetes. If hatchery logs error about connection to the Kubernetes cluster, check that if you have copied your kubeconfig file it must be named `kubeconfig.yaml`.
>
