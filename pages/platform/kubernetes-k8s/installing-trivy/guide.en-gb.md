---
title: Scan for vulnerabilities your OVHcloud Managed Kubernetes with Trivy
slug: installing-trivy
excerpt: Find out how to scan for vulnerabilities your OVHcloud Managed Kubernetes with Trivy
section: Security
order: 3
---

**Last updated 31th May 2022**

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

[Trivy](https://github.com/aquasecurity/trivy) is a tool that scans for vulnerabilities, secrets and misconfgiurations in container images, file systems, Git repositories, Kubernetes clusters and Infrastructure as Code (IaC).

TODO: xxx
![Trivy](images/trivy.png)

More than a simple Docker container images, trivy can now scan a wide range of different data like Kubernetes clusters.

For your information, trivy is a read-only tool, it only retrieves informations in order to help you to securize and sanitize your cluster, it does not modify or delete resources on a Kubernetes cluster.

TODO: xxx
Read more about [Trivy](https://github.com/derailed/popeye).


TODO: xxx

At OVHcloud, we like to provide you with the best products and services. For us, security is important, that's why we want to help you discover Popeye which will help you secure your OVHcloud Managed Kubernetes with helpful reports.

In this guide you will:

- Install Trivy CLI
- Generate and export reports
- TODO: xxx
- TODO: install le trivy operator ...
- Fix common issues
- TODO: Store report on OVHcloud Object Storage?

You can use the *Reset cluster* function in the Public Cloud section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} to reinitialize your cluster before following this tutorial.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it.

Moreover, follow the [deploying a Hello World application](../deploying-an-application/) documentation in order to have an example application running on your cluster.

At this time you should have a running Kubernetes cluster with hello-world deployment and pod like below:

<pre class="console"><code>$ kubectl get po,deploy
NAME                                          READY   STATUS    RESTARTS   AGE
pod/hello-world-deployment-559d658ffb-q5t7j   1/1     Running   0          35m

NAME                                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hello-world-deployment   1/1     1            1           35m
</code></pre>

## Instructions

### Installing Trivy CLI

You can [install Trivy](https://aquasecurity.github.io/trivy/v0.28.1/getting-started/installation/) on your computer from the binaries, the source, HomeBrew, Arch Linux, Ubuntu... and even use it directly from a Docker image.

For this tutorial you will install it via HomeBrew:

```bash
brew install aquasecurity/trivy/trivy
```

The output should be like this:

<pre class="console"><code>$ brew install aquasecurity/trivy/trivy
Running `brew update --preinstall`...
==> Auto-updated Homebrew!
Updated 2 taps (homebrew/core and homebrew/cask).
==> New Formulae
dtrx                                     glider                                   hatch                                    terramate                                yorkie
==> Updated Formulae
Updated 326 formulae.
==> New Casks
bili-downloader                                    roam-research                                      rustdesk                                           swiftcord
==> Updated Casks
Updated 194 casks.
==> Deleted Casks
crystax-ndk

==> Tapping aquasecurity/trivy
Cloning into '/opt/homebrew/Library/Taps/aquasecurity/homebrew-trivy'...
remote: Enumerating objects: 285, done.
remote: Counting objects: 100% (174/174), done.
remote: Compressing objects: 100% (64/64), done.
remote: Total 285 (delta 57), reused 158 (delta 52), pack-reused 111
Receiving objects: 100% (285/285), 40.87 KiB | 747.00 KiB/s, done.
Resolving deltas: 100% (92/92), done.
Tapped 1 formula (12 files, 54.2KB).
==> Downloading https://github.com/aquasecurity/trivy/releases/download/v0.28.1/trivy_0.28.1_macOS-ARM64.tar.gz
==> Downloading from https://objects.githubusercontent.com/github-production-release-asset-2e65be/180687624/f79fc5e4-30f4-461f-be69-598e11d7b81d?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJY
######################################################################## 100.0%
==> Installing trivy from aquasecurity/trivy
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences or run:
  softwareupdate --all --install --force

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 13.3.

🍺  /opt/homebrew/Cellar/trivy/0.28.1: 5 files, 76.1MB, built in 1 second
==> Running `brew cleanup trivy`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
</code></pre>

After the installation, check that the `trivy` CLI is working correctly:

```bash
trivy version
```

You should have a behavior like this:

<pre class="console"><code>$ trivy version
Version: 0.28.1
</code></pre>

Trivy is correctly installed on your computer, you can now use it to scan your Kubernetes cluster and display a report with existing vulnerabilities and misconfigurations.

### Generate Trivy reports

The `trivy` CLI works contains several commands and subcommands, here an extract:

```
COMMANDS:
   image, i          scan an image
   filesystem, fs    scan local filesystem for language-specific dependencies and config files
   rootfs            scan rootfs
   repository, repo  scan remote repository
   server, s         server mode
   config, conf      scan config files
   plugin, p         manage plugins
   kubernetes, k8s   scan kubernetes vulnerabilities and misconfigurations
   sbom              generate SBOM for an artifact
   version           print the version
   help, h           Shows a list of commands or help for one command
```

As you can see, the `trivy` CLI contains a lot of commands and options, as you can scan vulnerabilities in container images, file systemes, Git repositories, configuration issues... but for this tutorial we will focus on the `k8s` command.

When you execute `trivy k8s`, The command works like `kubectl` command. So when you execute the CLI, it searches your Kubernetes cluster configuration.

First, you will ask Trivy to generate a summary report only on `default` namespace.

To generate this report, simply execute the CLI:

```bash
trivy k8s -n default --report summary
```

This command run tests on all nodes in the `default` namespace and display a summary report:

<pre class="console"><code>$ trivy k8s -n default --report summary
5 / 5 [--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 2 p/s

Summary Report for kubernetes-admin@my-cilium-cluster
┌───────────┬───────────────────────────────────┬────────────────────┬───────────────────┬───────────────────┐
│ Namespace │             Resource              │  Vulnerabilities   │ Misconfigurations │      Secrets      │
│           │                                   ├───┬───┬────┬───┬───┼───┬───┬───┬───┬───┼───┬───┬───┬───┬───┤
│           │                                   │ C │ H │ M  │ L │ U │ C │ H │ M │ L │ U │ C │ H │ M │ L │ U │
├───────────┼───────────────────────────────────┼───┼───┼────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
│ default   │ Deployment/hello-world-deployment │ 5 │ 9 │ 18 │ 2 │   │   │   │ 3 │ 8 │   │   │   │   │   │   │
└───────────┴───────────────────────────────────┴───┴───┴────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
Severities: C=CRITICAL H=HIGH M=MEDIUM L=LOW U=UNKNOWN
</code></pre>

As you can see, in our `default` namespace, our OVHcloud Managed Kubernetes cluster (and with an hello world application deployed) has severals vulnerabilities and misconfigurations.

We will take a look more deeply at theses vulnerabilities and miconfiguration. For that, you will ask Trivy to generate a full report, still in the `default` namespace.

To generate this full report, simply execute the CLI:

```bash
trivy k8s -n default --report all
```

You should obtain a report and a list of vulnerabilities and misconfigurations like this:

<pre class="console"><code>$ trivy k8s -n default --report all
5 / 5 [--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 2 p/s

ovhplatform/hello (alpine 3.8.1)

Total: 34 (UNKNOWN: 0, LOW: 2, MEDIUM: 18, HIGH: 9, CRITICAL: 5)

┌───────────────┬────────────────┬──────────┬───────────────────┬───────────────┬──────────────────────────────────────────────────────────────┐
│    Library    │ Vulnerability  │ Severity │ Installed Version │ Fixed Version │                            Title                             │
├───────────────┼────────────────┼──────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ libbz2        │ CVE-2019-12900 │ CRITICAL │ 1.0.6-r6          │ 1.0.6-r7      │ bzip2: out-of-bounds write in function BZ2_decompress        │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2019-12900                   │
├───────────────┼────────────────┼──────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ libcrypto1.0  │ CVE-2018-0734  │ MEDIUM   │ 1.0.2p-r0         │ 1.0.2q-r0     │ openssl: timing side channel attack in the DSA signature     │
│               │                │          │                   │               │ algorithm                                                    │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2018-0734                    │
│               ├────────────────┤          │                   │               ├──────────────────────────────────────────────────────────────┤
│               │ CVE-2018-5407  │          │                   │               │ openssl: Side-channel vulnerability on SMT/Hyper-Threading   │
│               │                │          │                   │               │ architectures (PortSmash)                                    │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2018-5407                    │
├───────────────┼────────────────┼──────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ libcrypto1.0  │ CVE-2019-1547  │ MEDIUM   │ 1.0.2p-r0         │ 1.0.2t-r0     │ openssl: side-channel weak encryption vulnerability          │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2019-1547                    │
├───────────────┼────────────────┼──────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
│ libcrypto1.0  │ CVE-2019-1551  │ MEDIUM   │ 1.0.2p-r0         │ 1.0.2u-r0     │ openssl: Integer overflow in RSAZ modular exponentiation on  │
│               │                │          │                   │               │ x86_64                                                       │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2019-1551                    │
├───────────────┼────────────────┼──────────┼───────────────────┼───────────────┼──────────────────────────────────────────────────────────────┤
...
musl          │ CVE-2019-14697 │ CRITICAL │ 1.1.19-r10        │ 1.1.19-r11    │ musl libc through 1.1.23 has an x87 floating-point stack     │
│               │                │          │                   │               │ adjustment im ......                                         │
│               │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2019-14697                   │
├───────────────┤                │          │                   │               │                                                              │
│ musl-utils    │                │          │                   │               │                                                              │
│               │                │          │                   │               │                                                              │
│               │                │          │                   │               │                                                              │
└───────────────┴────────────────┴──────────┴───────────────────┴───────────────┴──────────────────────────────────────────────────────────────┘

default-Deployment-hello-world-deployment-2137444644.yaml (kubernetes)

Tests: 31 (SUCCESSES: 20, FAILURES: 11, EXCEPTIONS: 0)
Failures: 11 (UNKNOWN: 0, LOW: 8, MEDIUM: 3, HIGH: 0, CRITICAL: 0)

MEDIUM: Container 'hello-world' of Deployment 'hello-world-deployment' should set 'securityContext.allowPrivilegeEscalation' to false
════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
A program inside the container can elevate its own privileges and run as root, which might give the program control over the container and node.

See https://avd.aquasec.com/misconfig/ksv001
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 default-Deployment-hello-world-deployment-2137444644.yaml:120-128
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 120 ┌                 - image: ovhplatform/hello
 121 │                   imagePullPolicy: Always
 122 │                   name: hello-world
 123 │                   ports:
 124 │                     - containerPort: 80
 125 │                       protocol: TCP
 126 │                   resources: {}
 127 │                   terminationMessagePath: /dev/termination-log
 128 └                   terminationMessagePolicy: File
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
...
LOW: Container 'hello-world' of Deployment 'hello-world-deployment' should set 'securityContext.runAsGroup' > 10000
════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
Force the container to run with group ID > 10000 to avoid conflicts with the host’s user table.

See https://avd.aquasec.com/misconfig/ksv021
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 default-Deployment-hello-world-deployment-2137444644.yaml:120-128
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 120 ┌                 - image: ovhplatform/hello
 121 │                   imagePullPolicy: Always
 122 │                   name: hello-world
 123 │                   ports:
 124 │                     - containerPort: 80
 125 │                       protocol: TCP
 126 │                   resources: {}
 127 │                   terminationMessagePath: /dev/termination-log
 128 └                   terminationMessagePolicy: File
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
</code></pre>


The report can be very big. So, in order to take a look at our vulnerabilities and misconfigurations, to fix and generate a report again, you can also display only URGENT vulnerabilities in a report:

<pre class="console"><code>$ trivy k8s -n default --report all --severity MEDIUM,HIGH,CRITICAL
5 / 5 [--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 3 p/s

ovhplatform/hello (alpine 3.8.1)

Total: 32 (MEDIUM: 18, HIGH: 9, CRITICAL: 5)

...


default-Deployment-hello-world-deployment-2908255124.yaml (kubernetes)

Tests: 20 (SUCCESSES: 17, FAILURES: 3, EXCEPTIONS: 0)
Failures: 3 (MEDIUM: 3, HIGH: 0, CRITICAL: 0)

MEDIUM: Container 'hello-world' of Deployment 'hello-world-deployment' should set 'securityContext.allowPrivilegeEscalation' to false
════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
A program inside the container can elevate its own privileges and run as root, which might give the program control over the container and node.

See https://avd.aquasec.com/misconfig/ksv001
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 default-Deployment-hello-world-deployment-2908255124.yaml:120-128
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 120 ┌                 - image: ovhplatform/hello
 121 │                   imagePullPolicy: Always
 122 │                   name: hello-world
 123 │                   ports:
 124 │                     - containerPort: 80
 125 │                       protocol: TCP
 126 │                   resources: {}
 127 │                   terminationMessagePath: /dev/termination-log
 128 └                   terminationMessagePolicy: File
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────


MEDIUM: Container 'hello-world' of Deployment 'hello-world-deployment' should set 'securityContext.runAsNonRoot' to true
════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
'runAsNonRoot' forces the running image to run as a non-root user to ensure least privileges.

See https://avd.aquasec.com/misconfig/ksv012
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 default-Deployment-hello-world-deployment-2908255124.yaml:120-128
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 120 ┌                 - image: ovhplatform/hello
 121 │                   imagePullPolicy: Always
 122 │                   name: hello-world
 123 │                   ports:
 124 │                     - containerPort: 80
 125 │                       protocol: TCP
 126 │                   resources: {}
 127 │                   terminationMessagePath: /dev/termination-log
 128 └                   terminationMessagePolicy: File
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
...
</code></pre>

### Export reports locally

You can generate and save a report, for all your namespaces, with the `-o` command

```bash
$ trivy k8s -n default --report summary -o trivy-report.txt
```

This will save the report in your working directory:

<pre class="console"><code>$ trivy k8s -n default --report summary -o trivy-report.txt

1 / 5 [------------------------------------>__________________________________________________________________________________________________________________________________________________] 20.00% ? p/s5 / 5 [--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 100.00% 2 p/s

$ ll trivy-report.txt
-rw-r--r--  1 aurelievache  staff   1,8K 30 mai 17:00 trivy-report.txt
</code></pre>

### TODO: xxx

helm install trivy-operator

## Go further

Join our community of users on <https://community.ovh.com/en/>.
