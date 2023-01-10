---
title: Installing cert-manager on OVHcloud Managed Kubernetes
slug: installing-cert-manager
excerpt: 'Find out how to install cert-manager on OVHcloud Managed Kubernetes'
section: Tutorials
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/installing-cert-manager/'
---

**Last updated 27th June 2022.**

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

[Cert-manager](https://github.com/cert-manager/cert-manager) is a Kubernetes add-on to automate the management and issuance of TLS certificates from various issuing sources.

![Cert Manager](images/cert-manager-logo.png)

It will ensure certificates are valid and up to date periodically, and attempt to renew certificates at an appropriate time before expiry.

![Cert Manager architecture](images/cert-manager-archi.png)

In this tutorial we are going to guide you with the setup of [cert-manager](https://github.com/jetstack/cert-manager){.external} on your OVHcloud Managed Kubernetes Service.

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [OVHcloud Managed Kubernetes Service Quickstart](../deploying-hello-world/).

You also need to have [Helm](https://docs.helm.sh/){.external} installer on your workstation and your cluster, please refer to the [How to install Helm on OVHcloud Managed Kubernetes Service](../installing-helm/) tutorial.

## Installing cert-manager Helm chart

For this tutorial we are using the [cert-manager Helm chart](https://artifacthub.io/packages/helm/cert-manager/cert-manager){.external} found on its own Helm repository.

The chart is fully configurable, but here we are using the default configuration.

Add the cert-manager Helm repository:

```bash
helm repo add jetstack https://charts.jetstack.io
helm repo update
```

These commands will add the Kyverno Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add jetstack https://charts.jetstack.io
helm repo update
"jetstack" already exists with the same configuration, skipping
Hang tight while we grab the latest from your chart repositories...
...
...Successfully got an update from the "jetstack" chart repository
...
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the latest version of cert-manager with `helm install` command:

```bash
helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
 --set installCRDs=true
```

This command will install the latest version of cert-manager, create a new `cert-manager` namespace and install the new CRD (CustomResourceDefinitions):

<pre class="console"><code>$ helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
 --set installCRDs=true
NAME: cert-manager
LAST DEPLOYED: Fri Mar 25 14:30:50 2022
NAMESPACE: cert-manager
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
cert-manager v1.7.2 has been deployed successfully!

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

Check cert-manager have been deployed correctly with `kubectl get pods --namespace cert-manager` command:

<pre class="console"><code>$ kubectl get pods --namespace cert-manager
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-75cf8df6b6-x2q6l              1/1     Running   0          2m34s
cert-manager-cainjector-857f5bd88c-gggxw   1/1     Running   0          2m34s
cert-manager-webhook-5cd99556d6-jq5vk      1/1     Running   0          2m34s
</code></pre>

Now that the cert-manager is deployed, we need to configure a **cluster-issuer** to perform Let's Encrypt ACME challenges.

> [!primary]
>
>To avoid to be banned by Let's Encrypt robots, for testing purposes, the staging environment should be used before going to prod.

Create an Issuer in a file named `issuer.yaml` with the following content:

```yaml
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
```

> [!primary]
> Don't forget to replace `[YOUR_EMAIL]` by a real value, it will be used for ACME challenges.

Apply the YAML manifest:

```bash
kubectl apply -f issuer.yaml
```

Now, any ingress resources will be able to be annotated with:

<pre class="console"><code>"cert-manager.io/cluster-issuer": "letsencrypt-prod"
# Or for tests
"cert-manager.io/cluster-issuer": "letsencrypt-staging"
</code></pre>

Please refer to our tutorial on [How to secure a Nginx Ingress with cert-manager on OVHcloud Managed Kubernetes](../securing-nginx-ingress-cert-manager/) for ingresses configuration.

## Go further

Join our community of users on <https://community.ovh.com/en/>.