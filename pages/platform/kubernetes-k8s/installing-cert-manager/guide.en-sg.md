---
title: Installing cert-manager on OVHcloud Managed Kubernetes
slug: installing-cert-manager
excerpt: 'Find out how to install cert-manager on OVHcloud Managed Kubernetes '
section: Tutorials
---

**Last updated 31<sup>st</sup> August, 2021.**

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


In this tutorial we are going to guide you with the setup of [cert-manager](https://github.com/jetstack/cert-manager){.external} on your OVHcloud Managed Kubernetes Service.


## Before you begin

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.



## Installing cert-manager Helm chart

For this tutorial we are using the [cert-manager Helm chart](https://artifacthub.io/packages/helm/cert-manager/cert-manager){.external} found on its own Helm repository.

The chart is fully configurable, but here we are using the default configuration.


```
# Before installing the chart, you must first install the cert-manager CustomResourceDefinition resources.
# This is performed in a separate step to allow you to easily uninstall and reinstall cert-manager without deleting your installed custom resources.
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.5.3/cert-manager.crds.yaml

helm repo add jetstack https://charts.jetstack.io
helm repo update
helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.5.3
```

The install process will begin:

<pre class="console"><code>$ helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --version v1.5.3
NAME: cert-manager
LAST DEPLOYED: Tue Aug 31 17:39:31 2021
NAMESPACE: cert-manager
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
cert-manager v1.5.3 has been deployed successfully!

In order to begin issuing certificates, you will need to set up a ClusterIssuer
or Issuer resource (for example, by creating a 'letsencrypt-staging' issuer).

More information on the different types of issuers and how to configure them
can be found in our documentation:

https://cert-manager.io/docs/configuration/

For information on how to configure cert-manager to automatically provision
Certificates for Ingress resources, take a look at the `ingress-shim`
documentation:

https://cert-manager.io/docs/usage/ingress/
</code></pre>

Now that the cert-manager is deployed, we need to configure a cluster-issuer to perform Let's Encrypt ACME challenges.

To avoid to be banned by Let's Encrypt robots, for testing purposes, the staging environment should be used before going to prod.

<pre class="console"><code>$ cat <<EOT > lets-encrypt-issuer.yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # The ACME server URL
    server: https://acme-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: [YOUR_EMAIL]
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-prod
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
---
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # The ACME server URL
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: [YOUR_EMAIL]
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-staging
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
EOT
</code></pre>

> [!primary]
> Don't forget to replace `[YOUR_EMAIL]` by a real value, it will be used for ACME challenges.

Now, any ingress resources will be able to be annotated with:

<pre class="console"><code>
"cert-manager.io/cluster-issuer": "letsencrypt-prod"
</code></pre>

Please refer to [How to install Ingress Nginx Controller](../installing-nginx-ingress/) tutorial for ingresses configuration.

