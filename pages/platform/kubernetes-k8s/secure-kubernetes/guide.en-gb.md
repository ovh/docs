---
title: Securing your OVHcloud Managed Kubernetes Service deployments
slug: secure-kubernetes
excerpt: 'Find out how the best practices to secure your OVHcloud Managed Kubernetes Service deployments'
section: Technical resources
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

**Last updated January 18, 2021.**

## Objective

In this guide, we will show you several best practices to secure your OVHcloud Managed Kubernetes Service deployments.

## RBAC

Enable Kubernetes Role-Based Access Control (RBAC)

RBAC can help you define who has access to the Kubernetes API and what permissions they have. RBAC is usually enabled by default on Kubernetes 1.6 and higher (later on some hosted Kubernetes providers). Because Kubernetes combines authorization controllers, when you enable RBAC, you must also disable the legacy Attribute Based Access Control (ABAC).

When using RBAC, prefer namespace-specific permissions instead of cluster-wide permissions. Even when debugging, do not grant cluster administrator privileges. It is safer to allow access only when necessary for your specific situation.

Learn more in our guide to Kubernetes RBAC ›

xxx


Role-Based Access Control (RBAC) allows you to control who has access to the Kubernetes API and their actions, such as creating, editing, and deleting resources. Since the authorization controllers in Kubernetes are combined, you must activate RBAC and disable traditional Attribute-Based Access Control. Once RBAC has been implemented, you must ensure that it's used properly. For example, it's usually recommended to avoid using cluster-wide permissions in favor of namespace-specific permissions. If possible, avoid granting anybody cluster-admin rights, even for debugging purposes. It's far more secure to give access only when it's needed.


TODO: inclure illustrations RABC des sketchnotes

use namespaces for isolating ..

et on peut du coup 

## xx

xxx

## Secrets

xxx

Secrets contain sensitive data such as a password, a token or an SSH key. Kubernetes secrets help securely initialize pods with artifacts like keys, passwords, tokens, etc. When a pod starts up, it will generally need to access its secrets. Whenever a service account is created, a Kubernetes secret storing its authorization token is automatically generated. Kubernetes supports encryption at rest. This will encrypt secret resources in etcd, preventing access to your etcd backups and viewing the content of those secrets.

une bonne pratique est d'utiliser les secrets pour stocker les données sensible : pasword, tokens...

bien mieux que de les voir dans vos fichier sde configuration ...

mais attention

encoded != encrypted

et oui els ecrets sont encodés et pas chiffrés, attention, different
on voit trop de secret stockés sur github, on ne sait pas comment les gérer

la solution :

kubeseal

xx

## xx

xx

## xx 

Kyverno

xx

## xxx

**Ensure That Images Are Free of Vulnerabilities **

use validated images

(TODO: voir talk tips docker kube)

Having running containers with vulnerabilities opens your environment to the risk of being easily compromised. Many of the attacks can be mitigated simply by making sure that there are no software components that have known vulnerabilities.

image scanning tool

popeye

snik ... trivy ...

Ensure That Only Authorized Images are Used in Your Environment 

4) Use an image scanner to identify known vulnerabilities
Your image scanner sho­uld be able to identify vulnerabilities within your images, including by layer, and tell you whether they are fixable or not. It must be able to scan for vulnerabilities in OS packages and third-party runtime libraries for the languages being used in your containerized applications.

## Controlling access to the Kubernetes API

As Kubernetes is entirely API-driven, controlling and limiting who can access the cluster and what actions they are allowed to perform is the first line of defense.

https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/

xx

## Enforce Network Policies

You can use network policies and have them work like admission controllers or internal firewalls. You can configure your network access policies at the networking layer of the pod. Through label selectors, you can limit access to pods.

xx

## xx

xx

## Configure a Security Context for a Pod or Container

https://kubernetes.io/docs/tasks/configure-pod-container/security-context/

## Limit resource usages

Define resource quota

As with securing APIs and the cluster itself, it is also essential to set resource limits on how much CPU, memory, and persistent disk space is used by namespaces and resources. This secures your cluster from denial of service attacks when a particular container uses up all the resources. Resources quotas and limit ranges can be used to set limits at the namespace level, and Requests and limits can be used to set resource limits at container level as well.

TODO: a re écrire, et c.f sketchnotes

An option of running resource-unbound containers puts your system in risk of DoS or “noisy neighbor” scenarios. To prevent and minimize those risks you should define resource quotas. By default, all resources in Kubernetes cluster are created with unbounded CPU and memory requests/limits. You can create resource quota policies, attached to Kubernetes namespace, in order to limit the CPU and memory a pod is allowed to consume.

The following is an example for namespace resource quota definition that will limit number of pods in the namespace to 4, limiting their CPU requests between 1 and 2 and memory requests between 1GB to 2GB.

compute-resources.yaml:

apiVersion: v1  
kind: ResourceQuota  
metadata:  
  name: compute-resources  
spec:  
  hard:  
    pods: "4"  
    requests.cpu: "1"  
    requests.memory: 1Gi  
    limits.cpu: "2"  
    limits.memory: 2Gi

Assign a resource quota to namespace:

kubectl create -f ./compute-resources.yaml --namespace=myspace


## Use namespaces to isolate sensitive workloads

xx

Namespaces are a key isolation boundary for Kubernetes resources. They provide a reference for network policies, access control restrictions, and other important security controls. Separating workloads into namespaces can help contain attacks and limit the impact of mistakes or destructive actions by authorized users.

xx

## Network polciies

By default, Kubernetes allows every pod to contact every other pod. Network segmentation policies are a key security control that can prevent lateral movement across containers in the case that an attacker breaks in. We covered how to set up Kubernetes network policies in two previous blog posts.

    Building Kubernetes network policies to control ingress traffic
    Building Kubernetes network policies to control egress traffic

    xx

## xx

## Keep Kubernetes Version Up to Date

Upgrade to the latest version

You should always run the latest version of Kubernetes. A list of known Kubernetes vulnerabilities with severity scores can be found here. 

Always plan to upgrade your Kubernetes version to the latest available version. Upgrading Kubernetes can be a complex process; if you are using a hosted Kubernetes provider, check if your provider handles automatic upgrades.

TODO: montrer comment le faire facilement via le manager


## Deeeprrrrr

Ensure that all communication is done via TLS.

mTLS also ...


## Go further

To learn more about using your Kubernetes cluster the practical way, we invite you to look at our [OVHcloud Managed Kubernetes documentation](../).

Join our [community of users](https://community.ovh.com/en/).
