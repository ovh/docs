---
title: Creating a cluster with Pulumi
excerpt: 'Creates an OVHcloud Managed Kubernetes Service cluster with Pulumi'
updated: 2023-08-25
---

**Last updated 25th August 2023**

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

## Objective

Creating an OVHcloud Managed Kubernetes cluster through the OVHcloud Control Panel is cool, but do you know you can deploy a cluster programmatically, with an Infrastructure as Code (IaC) tools?

You know you can do it through Terraform thanks to our OVHcloud provider but do you know you can do it too with Pulumi?

## Pulumi

[Pulumi](https://www.pulumi.com/) is an Infrastructure as code (IasC) tool that allows you to build your infrastructures with a programming language, in Golang of example ;-).
Users defined the desired state in Pulumi programs and Pulumi create the desired resources.

To provision, update or delete your infrastructure, Pulumi have an intuitive command line interface (CLI). If you are familiar with Docker Compose CLI and Terraform CLI, you will adopt [Pulumi CLI](https://www.pulumi.com/docs/cli/) too.

## Requirements

- A [Public Cloud project](/pages/platform/public-cloud/create_a_public_cloud_project) in your OVHcloud account
- Installing [Pulumi CLI](https://www.pulumi.com/docs/install/){.external}
- An account in [Pulumi](https://www.pulumi.com/)
- A [Pulumi access token](https://app.pulumi.com/account/tokens)
- Installing [kubectl CLI](https://kubernetes.io/docs/tasks/tools/)

## Before you begin

* You should have installed Pulumi CLI on your machine.

Verify the Pulumi CLI is successfully installed in your machine with `pulumi version` command.

You should have a result like this:

<pre class="console"><code>$ pulumi version
v3.77.1
</code></pre>

## OVHcloud Pulumi provider

In order to create a Kubernetes cluster and other resources, you will use the [OVHcloud Pulumi provider](https://github.com/scraly/pulumi-ovh). This provider is a bridge to our official [Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest){.external}.

TODO: quand le repo GH sera officiel sur le registry de pulumi
TODO: change scraly to ovh orga

All available Pulumi resources have their definition and [documentation](https://www.pulumi.com/registry/packages/ovh).

In this guide, we will create two resources:

* a [Kube resource](https://www.pulumi.com/registry/packages/ovh/api-docs/cloudproject/kube/){.external}, that represents an OVHcloud managed Kubernetes cluster
* and a [KubeNodePool resource](https://www.pulumi.com/registry/packages/ovh/api-docs/cloudproject/kubenodepool/){.external}, that represents a Kubernetes Node Pool

![Kubernetes cluster and node pool](images/cluster-and-node-pool.png){.thumbnail}

## Getting your cluster/API tokens information

The "OVH provider" needs to be configured with a set of credentials:

* an `endpoint` (environment variable: OVH_ENDPOINT)
* an `applicationKey` (environment variable: OVH_APPLICATION_KEY)
* an `applicationSecret` (environment variable: OVH_APPLICATION_SECRET)
* a `consumerKey` (environment variable: OVH_CONSUMER_KEY)

Why?

Because, behind the scenes, the provider is doing requests to OVHcloud APIs. 

In order to retrieve this necessary information, please follow [First steps with the OVHcloud APIs](/pages/account/api/first-steps) tutorial.

Concretely, you have to generate these credentials via the [OVH token generation page](https://api.ovh.com/createToken/?GET=/*&POST=/*&PUT=/*&DELETE=/*) with the following rights:

![OVHcloud API rights](images/api-rights.png){.thumbnail}

When you have successfully generated your OVH tokens, please keep them. You'll have to define them in the coming minutes ;-).

The last needed information is the `serviceName`: it is the ID of your Public Cloud project.

How to get it?

In the Public Cloud section, you can retrieve your service name ID thanks to the `Copy to clipboard`{.action} button.

![Copy paste service name](images/get-service-name.png){.thumbnail}

Define the secret keys as environment variables:

```bash
export OVH_ENDPOINT="ovh-eu"
export OVH_APPLICATION_KEY="xxx"
export OVH_APPLICATION_SECRET="xxx"
export OVH_CONSUMER_KEY="xxx"
```

> [!primary]
>
> Replace `xxx` by the correct values and `ovh-eu` with the correct endpoint.

## Instructions 

### Create our Pulumi project and initialize our Go program

Infrastructure in Pulumi is organized into projects. In the Pulumi ecosystem, a project represents a Pulumi program that, when run, declares the desired infrastructure for Pulumi to manage. 
First, create a folder `pulumi_ovh_kube` that represent our project and go into it.

```bash
mkdir pulumi_ovh_kube
cd pulumi_ovh_kube
```

Initialize our project:

```bash
pulumi new go -y
```

The output should be like this:

<pre class="console"><code>$ pulumi new go -y
Created project 'pulumi_ovh_kube'

Please enter your desired stack name.
To create a stack in an organization, use the format <org-name>/<stack-name> (e.g. `acmecorp/dev`).
Created stack 'dev'

Installing dependencies...

Finished installing dependencies

Your new project is ready to go! 

To perform an initial deployment, run `pulumi up`
</code></pre>

The command create a `dev` stack and the code organization of your project:

<pre class="console"><code>$ tree
.
├── go.mod
├── go.sum
├── main.go
└── Pulumi.yaml
</code></pre>

Now we need to install the Pulumi OVH provider.

TODO: change to ovh orga
```bash
go get github.com/scraly/pulumi-ovh/sdk
```

In order to create a OVHcloud MKS cluster we need to define the `serviceName`.
Edit the `Pulumi.yaml` file with the following content:

```yaml
config:
 serviceName: <your-service-name>
```

> [!primary]
>
> Replace `<your-service-name>` by your Public Cloud project.

Then, edit the `main.go` file and replace the content with the following:

```go
package main

import (
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
	"github.com/scraly/pulumi-ovh/sdk/go/ovh/cloudproject"
)

func main() {
	pulumi.Run(func(ctx *pulumi.Context) error {

		serviceName := config.Require(ctx, "serviceName")

		// Deploy a new Kubernetes cluster
		myKube, err := cloudproject.NewKube(ctx, "my_desired_cluster", &cloudproject.KubeArgs{
			ServiceName: pulumi.String(serviceName),
			Name:        pulumi.String("my_desired_cluster"),
			Region:      pulumi.String("GRA5"),
		})
		if err != nil {
			return err
		}

		// Export kubeconfig file to a secret
		ctx.Export("kubeconfig", pulumi.ToSecret(myKube.Kubeconfig))

		//Create a Node Pool
		nodePool, err := cloudproject.NewKubeNodePool(ctx, "my-desired-pool", &cloudproject.KubeNodePoolArgs{
			ServiceName:  pulumi.String(serviceName),
			KubeId:       myKube.ID(),
			Name:         pulumi.String("my-desired-pool"),
			DesiredNodes: pulumi.Int(1),
			MaxNodes:     pulumi.Int(3),
			MinNodes:     pulumi.Int(1),
			FlavorName:   pulumi.String("b2-7"),
		})
		if err != nil {
			return err
		}

		ctx.Export("nodePoolID", nodePool.ID())

		return nil
	})
}
```

This Go program will create an OVHcloud MKS cluster:

* named `my-desired-cluster`
* in the `GRA5` region
* in your Public Cloud project (depending the `serviceName` you defined)

And a Kubernetes Node Pool:

* named `my-desired-pool`
* with `b2-7` flavor/machine type
* with 1 desired node, 2 node minimum and 3 node maximum

Then, run `go mod tidy` command` to ask Go to download and install the necessary Go providers and dependencies.

```
go mod tidy
```

### Create our cluster through Pulumi

Now we can deploy our cluster and the node pool, to do that just execute the `pulumi up` comand.
This will display the plan/the preview of the desireed state. A prompt will ask you to choose the stack (`dev` by default) and to confirm of you want to perform/apply the changes.

TODO: change scraly to ovh orga
```
$ pulumi up
Please choose a stack, or create a new one: dev
Previewing update (dev)

View in Browser (Ctrl+O): https://app.pulumi.com/scraly/pulumi_ovh_kube/dev/previews/cf1a0da4-xxxx-xxxx-xxxx-053bf2bfdda0

     Type                              Name                 Plan       
 +   pulumi:pulumi:Stack               pulumi_ovh_kube-dev  create     
 +   ├─ ovh:CloudProject:Kube          my_desired_cluster   create     
 +   └─ ovh:CloudProject:KubeNodePool  my-desired-pool      create     


Outputs:
    kubeconfig: [secret]
    nodePoolID: output<string>

Resources:
    + 3 to create

Do you want to perform this update? yes
Updating (dev)

View in Browser (Ctrl+O): https://app.pulumi.com/scraly/pulumi_ovh_kube/dev/updates/4

     Type                              Name                 Status             
 +   pulumi:pulumi:Stack               pulumi_ovh_kube-dev  created (394s)     
 +   ├─ ovh:CloudProject:Kube          my_desired_cluster   created (241s)     
 +   └─ ovh:CloudProject:KubeNodePool  my-desired-pool      created (150s)     


Outputs:
    kubeconfig: [secret]
    nodePoolID: "06519a68-xxxx-xxxx-xxxx-18ac624e169d"

Resources:
    + 3 created

Duration: 6m37s
```

Now, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section and click on `Managed Kubernetes Service`. <br>
As you can see, your cluster has been successfuly created:

![Cluster created](images/cluster-created.png){.thumbnail}

Now, click on `my_kube_cluster`, then on the `Node pools` tab:

![Node pool created](images/my-pool-node-pool-created.png){.thumbnail}

Our node pool is created too.

Perfect!

## Connect to the cluster


Our cluster is created, now we need to connect to it in order to check our nodes, existing pods and to deploy our applications.

In order to do this, retrieve the kubeconfig file locally from the `dev` Pulumi stack:

```bash
pulumi stack output kubeconfig --show-secrets -s dev > kubeconfig.yaml
```

You can define it in your `$KUBECONFIG` environment variable or you can use it directly in the `kubectl` command with `--kubeconfig` option.

List our Node Pool:

```
$ kubectl --kubeconfig=kubeconfig.yaml get nodepool
NAME              FLAVOR   AUTOSCALED   MONTHLYBILLED   ANTIAFFINITY   DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   MIN   MAX   AGE
my-desired-pool   b2-7     false        false           false          1         1         1            1           1     3     3m25s
```

Display the list of Nodes:

```
$ kubectl --kubeconfig=kubeconfig.yaml get node
NAME                          STATUS   ROLES    AGE    VERSION
my-desired-pool-node-a90c09   Ready    <none>   115s   v1.26.4
```

Awesome!

You can now deploy your applications and/or create new clusters through Pulumi.

## Known issues

### "Provider is missing a required configuration key"

If you have the following error, it means you forget to export needed OVH environment variables.

TODO: change scraly to ovh orga

```bash
$ pulumi up
Previewing update (dev)

View in Browser (Ctrl+O): https://app.pulumi.com/scraly/pulumi_ovh_kube/dev/previews/7ddcd60c-xxxx-xxxx-xxxx-6e14e388c577

     Type                     Name                                              Plan       Info
 +   pulumi:pulumi:Stack      pulumi_ovh_kube-dev                              create     1 message
     └─ pulumi:providers:ovh  default_github_/api.github.com/scraly/pulumi-ovh             1 error


Diagnostics:
  pulumi:providers:ovh (default_github_/api.github.com/scraly/pulumi-ovh):
    error: pulumi:providers:ovh resource 'default_github_/api.github.com/scraly/pulumi-ovh' has a problem: Provider is missing a required configuration key, try `pulumi config set ovh:endpoint`: The OVH API endpoint to target (ex: "ovh-eu").

  pulumi:pulumi:Stack (pulumi_ovh_kube-dev):
    2023/08/10 07:04:39 {0xc0001e25b0}
```

The solution is to export missing required onfiguration:

```bash
export OVH_ENDPOINT="ovh-eu"
export OVH_APPLICATION_KEY="xxx"
export OVH_APPLICATION_SECRET="xxx"
export OVH_CONSUMER_KEY="xxx"
```

> [!primary]
>
> Replace `xxx` by the correct values and `ovh-eu` with the correct endpoint.

### "Node pool name xxx is invalid, only lowercase characters, digits and '-' are accepted"

You defined the node pool you want to create? So it's time to enter  the `pulumi up` command.

```bash
     Type                              Name                 Status                  Info
 +   pulumi:pulumi:Stack               pulumi_ovh_kube-dev  **creating failed**     1 error
 +   ├─ ovh:CloudProject:Kube          my_desired_cluster   created (222s)          
 +   └─ ovh:CloudProject:KubeNodePool  my_desired_pool      **creating failed**     1 error


Diagnostics:
  pulumi:pulumi:Stack (pulumi_ovh_kube-dev):
    error: update failed

  ovh:CloudProject:KubeNodePool (my_desired_pool):
    error: 1 error occurred:
        * calling Post /cloud/project/xxxxxxxxxx/kube/22980f3b-xxxx-xxxx-xxxx-19ddb026cf45/nodepool with params my_desired_pool(b2-7): 1/1/3:
         OVHcloud API error (status code 400): Client::BadRequest: "[InvalidDataError] 400: Node pool name my_desired_pool is invalid, only lowercase characters, digits and '-' are accepted (regex: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?$') (request ID: xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx)" (X-OVH-Query-Id: EU.ext-3.64d4d2ba.66772.xxxxxxxxxxxxxxxxx)

Resources:
    + 2 created

Duration: 3m47s
```

If you get this error message, the issue is that you name the flavor or the node pool with an invalid character: "_" or ".".

The API don't support these characters so that's the reason why you obtained this error message.
In order to fix it, change the flavor name and/or the pool name to a correct one, for example:

```go
nodePool, err := cloudproject.NewKubeNodePool(ctx, "my-desired-pool", &cloudproject.KubeNodePoolArgs{
			ServiceName:  pulumi.String(serviceName),
			KubeId:       myKube.ID(),
			Name:         pulumi.String("my-desired-pool"),
			DesiredNodes: pulumi.Int(1),
			MaxNodes:     pulumi.Int(3),
			MinNodes:     pulumi.Int(1),
			FlavorName:   pulumi.String("b2-7"),
		})
```

### "not enough xxx quotas"

By default, the Public Cloud projects as well as the resources total (RAM, CPU, disk space, number of instances, etc.) you can use are limited for security reasons.

When you create a new Kubernetes Node Pool, if you run out of resources in your available quota, the Nodes might be in error.

You may get the following error message: "not enough xxx quotas".
xxx can be: RAM, CPU, VM, Disk or Port.

If this is the case, the quotas must be increased.
In order to check your quotas and increase them, please follow this tutorial:

[Increasing Public Cloud quotas](/pages/platform/public-cloud/increasing_public_cloud_quota){.external}.

## Destroy (cleanup)

If you want to easily destroy created resources, you can use `pulumi destroy` command.

TODO: change scraly to ovh orga

```
$ pulumi destroy
Please choose a stack: dev
Previewing destroy (dev)

View in Browser (Ctrl+O): https://app.pulumi.com/scraly/pulumi_ovh_kube/dev/previews/0d349055-xxxx-xxxx-xxxx-8821daab3d43

     Type                              Name                 Plan       
 -   pulumi:pulumi:Stack               pulumi_ovh_kube-dev  delete     
 -   ├─ ovh:CloudProject:KubeNodePool  my-desired-pool      delete     
 -   └─ ovh:CloudProject:Kube          my_desired_cluster   delete     


Outputs:
  - kubeconfig: [secret]
  - nodePoolID: "e0b6f857-xxxx-xxxx-9dca-9e3e1480097c"

Resources:
    - 3 to delete

Do you want to perform this destroy? yes
Destroying (dev)

View in Browser (Ctrl+O): https://app.pulumi.com/scraly/pulumi_ovh_kube/dev/updates/3

     Type                              Name                 Status            
     pulumi:pulumi:Stack               pulumi_ovh_kube-dev                    
 -   ├─ ovh:CloudProject:KubeNodePool  my-desired-pool      deleted (66s)     
 -   └─ ovh:CloudProject:Kube          my_desired_cluster   deleted (96s)     


Outputs:
  - kubeconfig: [secret]
  - nodePoolID: "e0b6f857-xxxx-xxxx-xxxx-9e3e1480097c"

Resources:
    - 3 deleted

Duration: 2m45s

The resources in the stack have been deleted, but the history and configuration associated with the stack are still maintained. 
If you want to remove the stack completely, run `pulumi stack rm dev`.
```

Perfect, your Kubernetes cluster and associated resources (Nodes, Pods...) have been correctly destroyed!

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en/public-cloud/kubernetes/).

To deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [configuring default settings for `kubectl`](/pages/platform/kubernetes-k8s/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) and [deploying a Hello World application](/pages/platform/kubernetes-k8s/deploying-hello-world).

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
