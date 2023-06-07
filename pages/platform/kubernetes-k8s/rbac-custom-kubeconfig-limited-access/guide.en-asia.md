---
title: Using RBAC to handle limited access to an OVHcloud Managed Kubernetes cluster
slug: rbac-custom-kubeconfig-limited-access
excerpt: Find out how to use the power of RBAC to generate customized kubeconfig file with limited access to an OVHcloud Managed Kubernetes cluster
section: Security
order: 1
updated: 2023-06-07
---

**Last updated 07th June 2023**

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

When a Kubernetes cluster is created, with the OVHcloud Control Plane, the API or the Terraform provider, you can retrieve its `kubeconfig` file in order to access to your cluster through the `kubectl` Command Line Interface (CLI).
This `kubeconfig` file is a file that is used to configure access to a cluster.
By default this `kubeconfig` file allows you to have access to everything in the cluster.

In your company, you may have several teams, several kind of people with different rights so you maybe need to control and limit the access to your Kubernetes clusters depending on users and their roles.

At OVHcloud, we like to provide you with the best products and services. For us, security is important, that's why we want to help you, un this tutorial, to create customized `kubeconfig` file with different access to your OVHcloud Managed Kubernetes cluster.

In this guide you will:

- learn what is RBAC 
- generate a customized `kubeconfig` file with limited access 

## RBAC

RBAC (Role-Based Access Control) is a method of regulating access to **resources** based on the **roles** of individual users.

This method alllows you to control **what** your users can do for **which** kind of resources in your cluster.

RBAC introduces 4 Kubernetes objects:

- Role (sets permissions with a given namespace)
- ClusterRole (same as Role but cluster-wide, for all namespaces)
- RoleBinding (grants permissions defined in a Role to a user or a set of users within a namespace)
- ClusterRoleBinding (same as RoleBinding but for all namespaces)

When you create a Role or a ClusterRole, several operations (verbs) are allowed:

- create
- get
- delete
- list
- update
- watch
- ...

By default, In Kubernetes in every namespace you have a service account, linked to a ClusterRole that allows you to do all the oeprations you want to all the resources you want in this namespace.
By creating new ServiceAccount, Role/ClusterRole and RoleBinding/ClusterRoleBinding you will control the access to a Kubernetes cluster.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it.

Moreover, follow the [deploying a Hello World application](../deploying-an-application/) documentation in order to have an example application running on your cluster.

At this time you should have a running Kubernetes cluster with hello-world deployment and pod like below:

<pre class="console"><code>$ kubectl get pod,deploy -n hello-app
NAME                                          READY   STATUS    RESTARTS   AGE
pod/hello-world-deployment-5869476bbd-rvtdl   1/1     Running   0          4d2h

NAME                                     READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/hello-world-deployment   1/1     1            1           4d22h
</code></pre>

The idea is to have a namespace (different that default one) and several resources running into it. 

## Instructions

In this tutorial we want to create a `kubeconfig` file that allows someone to access only the `hello-app` namespace and to have only read rights on Pods resources in this namespace.

So, what do we want?

![What do we want](images/what-do-we-want.png){.thumbnail}

For this given use case, we need to create several resources:

- a `ServiceAcount`
- a `Role`
- a `RoleBinding` between the `Role` and the `ServiceAccount`

It is possible to create the resources listed above in YAML but in this tutorial we will show you how to create them directly with the `kubectl` CLI.

Create a ServiceAccount in the `hello-app` namespace:

```bash
kubectl create serviceaccount sa-pod-reader -n hello-app
```

Create a Role `pod-reader` that allows users to perform get, watch and list (read-only actions) on Pods:

```bash
kubectl create role pod-reader --verb=get --verb=list --verb=watch --resource=pods -n hello-app
```

Create a RoleBinding that grant `pod-reader` Role to `sa-pod-reader` ServiceAccount within the `hello-app`  namespace

```bash
kubectl create rolebinding read-pods --role=pod-reader --serviceaccount=hello-app:sa-pod-reader -n hello-app
```

Nos it's time to create the `kubeconfig` file for the reated ServiceAccount with the grants you asked:

```bash
export SA=sa-pod-reader
export NAMESPACE=hello-app
export SECRET_NAME=pod-reader-secret

kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: pod-reader-secret
  namespace: hello-app
  annotations:
    kubernetes.io/service-account.name: sa-pod-reader
type: kubernetes.io/service-account-token
EOF

export TOKEN_SA=`kubectl get secret $SECRET_NAME -n $NAMESPACE -ojsonpath='{.data.token}' | base64 -d`
kubectl config view --raw --minify > kubeconfig.txt
kubectl config unset users --kubeconfig=kubeconfig.txt
kubectl config set-credentials ${SECRET_NAME} --kubeconfig=kubeconfig.txt --token=${TOKEN_SA}
kubectl config set-context --current --kubeconfig=kubeconfig.txt --user=${SECRET_NAME}
```

Now you can use this restricted `kubeconfig` file to access to your cluster and even test it directly in the `kubectl` command with the `--kubeconfig` option.

Try to list the namespaces in your cluster:

```bash
kubectl get ns --kubeconfig=kubeconfig.txt
```

You should obtain a result like this:

<pre class="console"><code>$ kubectl get ns --kubeconfig=kubeconfig.txt
Error from server (Forbidden): namespaces is forbidden: User "system:serviceaccount:hello-app:sa-pod-reader" cannot list resource "namespaces" in API group "" at the cluster scope
</code></pre>

As you can see, you executed the `kubectl` command as the ServiceAccount you created with limited access.
The behavior is normal because with this `kubeconfig` file you don't have the rights to do this operation.

Instead, list the pods in the `hello-app` namespace:

<pre class="console"><code>$ kubectl get pod -n hello-app --kubeconfig=kubeconfig.txt
NAME                                      READY   STATUS    RESTARTS   AGE
hello-world-deployment-5869476bbd-rvtdl   1/1     Running   0          4h43m
</code></pre>

That's perfect. As you can see, the new `kubeconfig` file have a restriced access to your Kubernetes cluster.
Depending on your use cases you will have to play with the ServiceAcccount, Role, ClusterRole, RoleBinding and ClusterRoleBinding resources. If you are interested, you can take a look to the [Using RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) official documentation.

## Go further

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/asia/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
