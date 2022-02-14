---
title: Sanitize your OVHcloud Managed Kubernetes with Popeye
slug: installing-popeye
excerpt: Find out how to sanitize your OVHcloud Managed Kubernetes with Popeye
section: Tutorials
---

**Last updated 11th February 2022.**

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

[Popeye](https://github.com/derailed/popeye) is a tool that scans Kubernetes cluster and reports potential issues with deployed resources and configurations. 

![Popeye](images/popeye.png)

It sanitizes your cluster based on what is deployed. By scanning your cluster, it detects misconfigurations and helps you to ensure that best practices are in place, thus preventing future headaches. It aims at reducing the cognitive overload one faces when operating a Kubernetes cluster in the wild.

Popeye also reports potential resources over/under allocations and attempts to warn you should your cluster run out of capacity.

Popeye scans your cluster for best practices and potential issues. Currently, Popeye only looks at `nodes`, `namespaces`, `pods` and `services`.

Popeye is a read-only tool, it only retrieve informations in order to help you to securize and sanitize your cluster.

Read more about [Popeye](https://github.com/derailed/popeye).

As at OVHcloud, we like to provide you with the best products and services and for us security is important, that's why we wanted to help you discover Popeye which will help you secure your OVHcloud Managed Kubernetes with helpful reports.

In this guide you will:

- Install Popeye (locally)
- Generate and export reports
- TODO: store report on object storage?

You can use the *Reset cluster* function on the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} to reinitialize your cluster before following this tutorial.


## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it.

Moreover, follow the [deploying a Hello World application](../deploying-an-application/) documentation in order to have an example application running on your cluster.

## Instructions

### Installing Popeye CLI

You can [install Popeye](https://github.com/derailed/popeye#installation) on your computer from the binaries, the source, HomeBrew and even use it directly from a Docker image.

For this tutorial you will install it via HomeBrew:

```bash
brew install derailed/popeye/popeye
```

You should have results like this:

<pre class="console"><code>$ brew install derailed/popeye/popeye
Running `brew update --preinstall`...
...
==> Tapping derailed/popeye
Cloning into '/Users/avache/homebrew/Library/Taps/derailed/homebrew-popeye'...
remote: Enumerating objects: 233, done.
remote: Counting objects: 100% (104/104), done.
remote: Compressing objects: 100% (52/52), done.
remote: Total 233 (delta 25), reused 0 (delta 0), pack-reused 129
Receiving objects: 100% (233/233), 25.13 KiB | 12.57 MiB/s, done.
Resolving deltas: 100% (57/57), done.
Tapped 1 formula (12 files, 37KB).
==> Downloading https://github.com/derailed/popeye/releases/download/v0.9.8/popeye_Darwin_arm64.tar.gz
==> Downloading from https://objects.githubusercontent.com/github-production-release-asset-2e65be/176379662/c65e86e0-4e3e-4591-9bb7-62b7bddd46e4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJY
######################################################################## 100.0%
==> Installing popeye from derailed/popeye
...
==> Running `brew cleanup popeye`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
</code></pre>

After the installation, check that the `popeye` CLI is working:

```bash
popeye version
```

You should have a behavior like this:

<pre class="console"><code>$ popeye version
 ___     ___ _____   _____                       K          .-'-.
| _ \___| _ \ __\ \ / / __|                       8     __|      `\
|  _/ _ \  _/ _| \ V /| _|                         s   `-,-`--._   `\
|_| \___/_| |___| |_| |___|                       []  .->'  a     `|-'
  Biffs`em and Buffs`em!                            `=/ (__/_       /
                                                      \_,    `    _)
                                                         `----;  |
Version:   0.9.8
Commit:    6db27f04407b337f6743faf4f382a61991aa5f31
Date:      2021-11-02T21:26:28Z
Logs:      /var/folders/lq/xp6s4vbn13s5vj_kq3cch50w0000gn/T/popeye.log
</code></pre>

Popeye is correctly installed on your computer, you can know use it to see if your cluster matches with Kubernetes security best practices or not.

### Generate Popeye reports

The `popeye` CLI works like `kubectl` command so when you execute the CLI, it search your cluster configuration.

To generate a report, simply execute the CLI:

```bash
popeye
```

This command run tests on all nodes and namespaces by default:

TODO: capture?
<pre class="console"><code>

</code></pre>

As you can see, by default our OVHcloud Managed Kubernetes cluster (and with an hello world application deployed) have a score equals to 83.

It's a good score. Let's take a look on what you should improved or fixed.

The report can be very huge so in order to take  a look on what you should improved or fixed, a good practice is to run `popeye` command only in a specified namespace. To improve and fix your cluster resources step by step.

As we deployed an hello world app in the `default` namespace, you can run `popeye` on the default namespace and generate a report only for `deployments`:

```bash
popeye -n default -s deploy
```

<pre class="console"><code>$ popeye -n default -s deploy
...
GENERAL [MY-TEST-CLUSTER2]
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · Connectivity...................................................................................✅
  · MetricServer...................................................................................✅


DEPLOYMENTS (1 SCANNED)                                                        💥 1 😱 0 🔊 0 ✅ 0 0٪
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · default/hello-world-deployment.................................................................💥
    🐳 hello-world
      💥 [POP-100] Untagged docker image in use.
      😱 [POP-106] No resources requests/limits defined.
      🔊 [POP-108] Unnamed port 80.


SUMMARY
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
Your cluster score: 0 -- F
</code></pre>

In this report, you can see that the best practices to follow are:
- use a tagged Docker image
- set resources requests and limits
- define containers port name

There are 3 simple best practices to follow.
Let's fix them.

Copy the original `hello.yml` file into a new one:

```bash
cp hello.yml hello-fixed.yml
```

And then edit the new file `hello-fixed.yml` with the following content:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hello-world
  labels:
    app: hello-world
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    name: http
  selector:
    app: hello-world
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-world-deployment
  labels:
    app: hello-world
spec:
  replicas: 1
  selector:
    matchLabels:
      app: hello-world
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: hello-world
        image: ovhplatform/hello:1.0
        resources:
          requests:
            memory: "2Mi"
            cpu: "0"
          limits:
            memory: "32Mi"
            cpu: "4"
        ports:
        - name: http
          containerPort: 80
```

In the deployment section of this YAML file, you will:

- set the image tag equals to 1.0 (the specified version of the image you want to run on a container in the cluster)
- set resources requests and limits
- set the port name equals to "http"

Apply the new Kubernetes manifest

```
kubectl apply -f hello-fixed.yml -n default
```

You should have the following results on your machine:

<pre class="console"><code>$ kubectl apply -f hello-fixed.yml -n default

service/hello-world unchanged
deployment.apps/hello-world-deployment configured
</code></pre>

You can generate again a report and check if the warning messages disapear and the score increase with `popeye` command:

```bash
popeye -n default -s deploy
```

The report should be better now:

<pre class="console"><code>$ popeye -n default -s deploy
...
GENERAL [MY-TEST-CLUSTER2]
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · Connectivity...................................................................................✅
  · MetricServer...................................................................................✅


DEPLOYMENTS (1 SCANNED)                                                      💥 0 😱 0 🔊 0 ✅ 1 100٪
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
  · default/hello-world-deployment.................................................................✅


SUMMARY
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
Your cluster score: 100 -- A
...
</code></pre>

### Export reports locally

You can generate and save a report with the `--save` command

```bash
popeye --save
```

This will save the report in your working directory:

<pre class="console"><code>
$ popeye --save
/var/folders/lq/xp6s4vbn13s5vj_kq3cch50w0000gn/T/popeye/sanitizer_my-test-cluster2_1644586682462302000.txt
</code></pre>

### Export reports on Object Storage (S3 compatible

You can also save the generated report to a S3 bucket.
As OVHcloud Object Storage is compatible with S3 API, you can store the reports inside it.

First, you need to have an Object Storage container, if you don't already had one, you can follow the [Creating an Object Storage container](../../storage/pcs/create-container/) guide.

For this guide, our Object Storage container is named `popeye` and its region is `GRA`.

![OVHcloud Object Storage container name](images/set-container-name.png)
TODO: refaire l'image!!!!


TODO: The Amazon S3 Application Programming Interface (S3 API) is the most common way in which data is stored, managed, and retrieved by object stores. The S3 API is a frontend API on top of the OpenStack Swift one. To use the S3 API at OVHcloud, you need to get S3 credentials form Keystone (1) which is the authentication module in OpenStack. This will provide you with an Access Key ID and a Secret Key that you can use in your S3 tool (2). Once you have these credentials you will be able to communicate with OVHcloud using the “language” of S3 and use our Object Storage solutions. S3 API will verify your credentials (4) and translate your calls into Swift API (5) in order to execute your requests (6).

TODO: xxxx

#### Get OpenStack RC file 

In order to interact with the Object Storage through S3 API, you need to generate your OpenStack credentials.

If you never retrieve the OpenStack RC file, follow this step, else go to next step.

You need to [get your `openrc.sh` file](https://docs.ovh.com/gb/en/public-cloud/access_and_security_in_horizon/) from your OVHcloud platform. 

At this step, you should have a `<user_name>-openrc.sh` file like this:

```
cat 4442521083919223-openrc.sh
```

<pre class="console"><code>$ cat 4442521083919223-openrc.sh
#!/usr/bin/env bash
# To use an OpenStack cloud you need to authenticate against the Identity
# service named keystone, which returns a **Token** and **Service Catalog**.
# The catalog contains the endpoints for all services the user/tenant has
# access to - such as Compute, Image Service, Identity, Object Storage, Block
# Storage, and Networking (code-named nova, glance, keystone, swift,
# cinder, and neutron).
#
# *NOTE*: Using the 3 *Identity API* does not necessarily mean any other
# OpenStack API is version 3. For example, your cloud provider may implement
# Image API v1.1, Block Storage API v2, and Compute API v2.0. OS_AUTH_URL is
# only for the Identity API served through keystone.
export OS_AUTH_URL=https://auth.cloud.ovh.net/v3
# With the addition of Keystone we have standardized on the term **project**
# as the entity that owns the resources.
export OS_PROJECT_ID=a123b456c789d901
export OS_PROJECT_NAME="11111111111"
export OS_USER_DOMAIN_NAME="Default"
if [ -z "$OS_USER_DOMAIN_NAME" ]; then unset OS_USER_DOMAIN_NAME; fi
export OS_PROJECT_DOMAIN_ID="default"
if [ -z "$OS_PROJECT_DOMAIN_ID" ]; then unset OS_PROJECT_DOMAIN_ID; fi
# unset v2.0 items in case set
unset OS_TENANT_ID
unset OS_TENANT_NAME
# In addition to the owning entity (tenant), OpenStack stores the entity
# performing the action as the **user**.
export OS_USERNAME="user-myuser"
# With Keystone you pass the keystone password.
echo "Please enter your OpenStack Password for project $OS_PROJECT_NAME as user $OS_USERNAME: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
# If your configuration has multiple regions, we set that information here.
# OS_REGION_NAME is optional and only valid in certain environments.
export OS_REGION_NAME="UK1"
# Don't leave a blank variable, unset it if it was empty
if [ -z "$OS_REGION_NAME" ]; then unset OS_REGION_NAME; fi
export OS_INTERFACE=public
export OS_IDENTITY_API_VERSION=3%
```

Source the `<user_name>-openrc.sh` file to set the OpenStack environment variables:

```
source <user_name>-openrc.sh
```

You should execute this command and enter your password:

<pre class="console"><code>
$ source 4442521083919223-openrc.sh
Please enter your OpenStack Password for project 11111111111 as user user-myuser:
</code></pre>

#### Install CLI tools

Now, you need to install the CLI tools:

```
pip install python-openstackclient awscli awscli-plugin-endpoint
```

The command install `openstack client` to generate your credentials, `aws CLI` and mandatory `endpoint plugin for aws CLI`:

<pre class="console"><code>
$ pip install python-openstackclient awscli awscli-plugin-endpoint
DEPRECATION: Configuring installation scheme with distutils config files is deprecated and will no longer work in the near future. If you are using a Homebrew or Linuxbrew Python, please see discussion at https://github.com/Homebrew/homebrew-core/issues/76621
Collecting python-openstackclient
  Using cached python_openstackclient-5.7.0-py3-none-any.whl (970 kB)
Collecting awscli
  Using cached awscli-1.22.54-py3-none-any.whl (3.8 MB)
Collecting awscli-plugin-endpoint
...
Successfully installed PrettyTable-3.1.0 PyYAML-5.4.1 appdirs-1.4.4 attrs-21.4.0 autopage-0.5.0 awscli-1.22.54 awscli-plugin-endpoint-0.4 botocore-1.23.54 certifi-2021.10.8 cffi-1.15.0 charset-normalizer-2.0.12 cliff-3.10.0 cmd2-2.3.3 colorama-0.4.3 cryptography-36.0.1 debtcollector-2.4.0 decorator-5.1.1 docutils-0.15.2 dogpile.cache-1.1.5 idna-3.3 iso8601-1.0.2 jmespath-0.10.0 jsonpatch-1.32 jsonpointer-2.2 keystoneauth1-4.4.0 msgpack-1.0.3 munch-2.5.0 netaddr-0.8.0 netifaces-0.11.0 openstacksdk-0.61.0 os-service-types-1.7.0 osc-lib-2.4.2 oslo.config-8.7.1 oslo.i18n-5.1.0 oslo.serialization-4.2.0 oslo.utils-4.12.1 packaging-21.3 pbr-5.8.1 pyasn1-0.4.8 pycparser-2.21 pyparsing-3.0.7 pyperclip-1.8.2 python-cinderclient-8.2.0 python-dateutil-2.8.2 python-keystoneclient-4.4.0 python-novaclient-17.6.0 python-openstackclient-5.7.0 pytz-2021.3 requests-2.27.1 requestsexceptions-1.4.0 rfc3986-2.0.0 rsa-4.7.2 s3transfer-0.5.1 simplejson-3.17.6 stevedore-3.5.0 urllib3-1.26.8 wcwidth-0.2.5 wrapt-1.13.3
</code></pre>

```
mkdir ~/.aws
```

Create AWS CLI config file and setup the good endpoint to our Object Storage stored in GRA region:

vi ~/.aws/config

```
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
region = GRA
s3 =
  endpoint_url = https://s3.gra.cloud.ovh.net
  signature_version = s3v4
s3api =
  endpoint_url = https://s3.gra.cloud.ovh.net
```

Generate AWS credentials:

<pre class="console"><code>
$ openstack ec2 credentials create
+------------+--------------------------------------------------------------------------------------------------------------------------------------+
| Field      | Value                                                                                                                                |
+------------+--------------------------------------------------------------------------------------------------------------------------------------+
| access     | ec975c94081f40ba93465b648a197648                                                                                                     |
| links      | {'self': 'https://auth.cloud.ovh.net/v3/users/2e91c81469fa458289d52f9927cea7d4/credentials/OS-EC2/ec975c94081f40ba93465b648a197648'} |
| project_id | 11111111111111111111111111111111                                                                                                     |
| secret     | 857006040f054ef0b83f15bffe5a01a9                                                                                                     |
| trust_id   | None                                                                                                                                 |
| user_id    | 2e91c81469fa458289d52f9927cea7d4                                                                                                     |
+------------+--------------------------------------------------------------------------------------------------------------------------------------+
</code></pre>

Thanks to these credentials, now you can setup them in your `.aws/credentials` file:

```
vi ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>
```

You should have a content like this:

<pre class="console"><code>
[default]
aws_access_key_id=ec975c94081f40ba93465b648a197648
aws_secret_access_key=857006040f054ef0b83f15bffe5a01a9
</code></pre>

Now you can test to list your existing Object Storage containers through `aws s3` CLI

```bash
aws s3 ls
```

You should have `popeye` container/bucket in minimum in the following list:

<pre class="console"><code>$ aws s3 ls
2009-02-03 17:45:09 popeye
</code></pre>

#### Store Popeye report in your Object Storage

Thanks to the guide, you should have a running Object Storage


TODO: Object Storage S3 Compatible API
TODO: xxxx

TODO:

```
$ popeye --s3-bucket storage.gra.cloud.ovh.net/v1/AUTH_a212a1e43b614c4ba27a247b890fcf59/popeye --out=json
2022/02/11 22:56:09 DEBUG: Validate Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration
2022/02/11 22:56:09 DEBUG: Build Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration
2022/02/11 22:56:09 DEBUG: Sign Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration

$ popeye --s3-bucket s3.gra.cloud.ovh.net/v1/AUTH_a212a1e43b614c4ba27a247b890fcf59/popeye --out=json
2022/02/11 22:56:28 DEBUG: Validate Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration
2022/02/11 22:56:28 DEBUG: Build Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration
2022/02/11 22:56:28 DEBUG: Sign Request s3/PutObject failed, not retrying, error MissingRegion: could not find region configuration
```



https://storage.gra.cloud.ovh.net/v1/AUTH_a212a1e43b614c4ba27a247b890fcf59/popeye-reports



TODO: save report to S3

You can also save the generated report to an AWS S3 bucket with providing the flag --s3-bucket. As parameter you need to provide the name of the S3 bucket where you want to store the report. To save the report in a bucket subdirectory provide the bucket parameter as bucket/path/to/report.

Underlying the AWS Go lib is used which is handling the credential loading. For more information check out the official documentation.

Example to save report to S3:

popeye --s3-bucket=NAME-OF-YOUR-S3-BUCKET/OPTIONAL/SUBDIRECTORY --out=json

TODO: It's possible with Popeye to export report to S3 bucket, as block storage are compatible with S3 API, we can export our reports on object storage!

xxxx

### What's next?

In this guide we explained to you how to generate report that help you to find common troubles in your resources in order to sanitize your Kubernetes cluster. The next step will be to fix warning and error messages step by step and to continue to securize your cluster through our tutorials.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
