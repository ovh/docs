---
title: Encrypt your Secret for OVHcloud Managed Kubernetes with Sealed Secrets (Kubeseal)
slug: encrypt-secret-with-sealed-secrets-kubeseal
excerpt: Find out how to encrypt your Kubernetes Secrets in order to store them in Git with Sealed Secrets (Kubeseal)
section: Security
order: 2
routes:
    canonical: 'https://docs.ovh.com/gb/en/kubernetes/encrypt-secret-with-sealed-secrets-kubeseal/'
---

**Last updated 6th June 2022.**

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

When you want to store your Kubernetes resources, as YAML manifest, the common way is to store/keep them in a Git repository. Thanks to that you can also create, edit and delete automatically with Infrastructure as Code and CI/CD your Kubernetes clusters and resources.

In the Kubernetes world, when we want to handle sensitive data, the usage is to store it in a Secret in a Kubernetes cluster. But the problem is that you can't store a Secret in a Version Control because the Secret is not encrypted, it's a question of security.

At OVHcloud, we like to provide you with the best products and services. For us, security is important, that's why we want to help you to discover Sealed Secrets and `kubeseal` CLI which will help you to encrypt your sensitive informations and deploy them easily in your OVHcloud Managed Kubernetes.

In this guide you will:

- Install Kubeseal CLI
- Deploy Sealed Secrets in your OVHcloud Managed Kubernetes
- Generate and deploy a SealedSecret

You can use the *Reset cluster* function in the Public Cloud section of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} to reinitialize your cluster before following this tutorial.

## Kubernetes Secrets

[Secrets in Kubernetes](https://kubernetes.io/fr/docs/concepts/configuration/secret/) are used to store sensitive data, like password, keys, certificates and token. Secrets are encoded in base64 and automatically decoded when they are attached and read by a Pod.

![Kubernetes Secrets](images/secrets.jpeg) 

A secret in Kubernetes cluster is encoded in base64 but not encrypted!

These data are "only" encoded so if a user has access to your secrets, he can simply execute a `base64 decode` command to see your sensitive data (`kubectl get secret my-secret -o jsonpath="{.data.password}" | base64 --decode`).

As the secrets aren't encrypted, it can be unsecure to commit them to your Git repository.

## Sealed Secrets

A solution is to use [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets), former called `Kubeseal`, a bitnami tool. Its goal is to encrypt your Kubernetes Secret into a `SealedSecret`, which is safe to store - even to a public repository. The SealedSecret can be decrypted only by the controller running in the target cluster and nobody else.

How is it working?

![Kubeseal SealedSecret schema](images/kubeseal-schema.png)

As you can see in the schema, a `sealed-secrets-controller` runs in the Kubernetes cluster. He listens when a new `SealedSecret` object appears, unseals it (thanks to known certificates) and creates a Kubernetes secret in the same namespace as the SealedSecret.

> [!primary]
>
> If you delete the `SealedSecret` in your cluster, the generated `Secret` will be deleted too.

Sealed Secrets are a straightforward application of asymmetric (public key) cryptography. Public key cryptography involves a tightly-linked pair of keys (called "public" and "private"), and anything encrypted with one can only be decrypted by the other.

`SealedSecrets` and the `kubeseal` tool are designed to easily fit into automated workflows. Once converted into a SealedSecret, not even the original user will be able to retrieve the original Secret. `kubeseal` can also be run offline, without access to the cluster - it just needs a copy of the public key available on disk somewhere.

Read more about [Sealed Secrets](https://engineering.bitnami.com/articles/sealed-secrets.html).

## Requirements

This tutorial presupposes that you already have a working OVHcloud Managed Kubernetes cluster, and some basic knowledge of how to operate it. If you want to know more on those topics, please look at the [deploying a Hello World application](../deploying-hello-world/) documentation.

## Instructions

### Install kubeseal CLI

The `kubeseal` utility uses asymmetric cryptography to encrypt secrets that only the controller can decrypt.

With kubeseal CLI you can specify a key certificate for sealing secrets.

In order to install the CLI, [follow the instructions](https://github.com/bitnami-labs/sealed-secrets#installation) depending on your OS.

You can, for example, install it through Homebrew:

```bash
brew install kubeseal
```

Then test if the CLI is correctly installed on your computer:

```console
kubeseal --version
```

Output should be like this:

<pre class="console"><code>$ brew install kubeseal
Running `brew update --preinstall`...
==> Auto-updated Homebrew!
...
==> Pouring kubeseal--0.17.3.arm64_big_sur.bottle.tar.gz
🍺  /Users/avache/homebrew/Cellar/kubeseal/0.17.3: 5 files, 35.3MB
==> Running `brew cleanup kubeseal`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).

$ kubeseal --version
kubeseal version: v0.17.3
</code></pre>

### Installing Sealed Secrets

For this tutorial we are using the [Sealed Secrets Helm chart](https://github.com/bitnami-labs/sealed-secrets/tree/main/helm/sealed-secrets).

Add the Sealed Secrets Helm repository:

```bash
helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
helm repo update
```

These commands will add the Kyverno Helm repository to your local Helm chart repository and update the installed chart repositories:

<pre class="console"><code>$ helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets

"sealed-secrets" has been added to your repositories

$ helm repo update

Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "sealed-secrets" chart repository
...
...Successfully got an update from the "bitnami" chart repository
Update Complete. ⎈Happy Helming!⎈
</code></pre>

Install the latest version of Sealed Secrets with `helm install` command:

```bash
helm install sealed-secrets-controller sealed-secrets/sealed-secrets --namespace kube-system 
```

> [!primary]
>
> You can install the tool on a specific namespace, other than `kube-system`, with `--namespace` option, but if you do it, you will have to pass it as an argument explicitly at each execution of the `kubeseal` commands.

This command will install the latest version of Sealed Secrets:

<pre class="console"><code>$ helm install sealed-secrets-controller sealed-secrets/sealed-secrets --namespace kube-system
NAME: sealed-secrets-controller
LAST DEPLOYED: Wed Feb 16 14:59:42 2022
NAMESPACE: kube-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
** Please be patient while the chart is being deployed **

You should now be able to create sealed secrets.

1. Install the client-side tool (kubeseal) as explained in the docs below:

    https://github.com/bitnami-labs/sealed-secrets#installation-from-source

2. Create a sealed secret file running the command below:

    kubectl create secret generic secret-name --dry-run=client --from-literal=foo=bar -o [json|yaml] | \
    kubeseal \
      --controller-name=sealed-secrets-controller \
      --controller-namespace=kube-system \
      --format yaml > mysealedsecret.[json|yaml]

The file mysealedsecret.[json|yaml] is a commitable file.

If you would rather not need access to the cluster to generate the sealed secret you can run:

    kubeseal \
      --controller-name=sealed-secrets-controller \
      --controller-namespace=kube-system \
      --fetch-cert > mycert.pem

to retrieve the public cert used for encryption and store it locally. You can then run 'kubeseal --cert mycert.pem' instead of using the local cert e.g.

    kubectl create secret generic secret-name --dry-run=client --from-literal=foo=bar -o [json|yaml] | \
    kubeseal \
      --controller-name=sealed-secrets-controller \
      --controller-namespace=kube-system \
      --format [json|yaml] --cert mycert.pem > mysealedsecret.[json|yaml]

3. Apply the sealed secret

    kubectl create -f mysealedsecret.[json|yaml]

Running 'kubectl get secret secret-name -o [json|yaml]' will show the decrypted secret that was generated from the sealed secret.

Both the SealedSecret and generated Secret must have the same name and namespace.
</code></pre>

Once you deploy the Hem chart, it will:

- create the SealedSecret CRD
- install the controller into `kube-system` namespace
- create a `sealed-secrets-controller` service account into `kube-system` namespace
- and necessary RBAC roles.

You can check if the `sealed-secrets-controller` pod is correctly running:

<pre class="console"><code>$ kubectl get pod -n kube-system -l app.kubernetes.io/name=sealed-secrets
NAME                                         READY   STATUS    RESTARTS   AGE
sealed-secrets-controller-5fb95c87fd-pnvmk   1/1     Running   0          2m43s
</code></pre>

### Retrieve the generated keypair

At the start of the `sealed-secrets-controller` a certificate keypair is generated. It can be useful for you to store it in a secret management tool like Vault.

Execute the following command to retrieve the content of the secret containing the generated keypair:

```bash
kubectl get secret -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml -n kube-system
```

The output should look like this:

<pre class="console"><code>$ kubectl get secret -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml -n kube-system

apiVersion: v1
items:
- apiVersion: v1
  data:
    tls.crt: <sensitive-data-encoded-in-base64>
    tls.key: <sensitive-data-encoded-in-base64>
  kind: Secret
  metadata:
    creationTimestamp: "2022-02-16T13:42:25Z"
    generateName: sealed-secrets-key
    labels:
      sealedsecrets.bitnami.com/sealed-secrets-key: active
    name: sealed-secrets-keyvzwdp
    namespace: kube-system
    resourceVersion: "2305607283"
    uid: b2b6669a-358a-462e-a284-3d743434f82f
  type: kubernetes.io/tls
kind: List
metadata:
  resourceVersion: ""
  selfLink: ""
</code></pre>

With this information you can now base64 decode the `tls.crt` and `tls.key` and store them locally and in your secret management tool in order to use them later to retrieve the sealed secrets.

You can use [kubectl view-secret](https://github.com/elsesiy/kubectl-view-secret) kubectl plugin in order to retrieve the key and the crt easily and store them locally:

```bash
SEALEDKEY=$(kubectl get secret -l sealedsecrets.bitnami.com/sealed-secrets-key -n kube-system -o name)

kubectl view-secret $SEALEDKEY tls.crt -n kube-system > tls.crt

kubectl view-secret $SEALEDKEY tls.key -n kube-system > tls.key
```

### Create a sealed-secret

First, you can generate a Kubernetes secret. In this example you will create, in a YAML file, a secret named `my-token` containing a token named `my_token` with the value `123456789abc123def456ghi789`:

```bash
kubectl create secret generic my-token --from-literal=my_token='123456789abc123def456ghi789' --dry-run=client -o yaml -n my-namespace > my-token.yaml
```

And then you can display the secret:

```bash
cat my-token.yaml
```

The output should like this:

<pre class="console"><code>$ kubectl create secret generic my-token --from-literal=my_token='123456789abc123def456ghi789' --dry-run=client -o yaml -n my-namespace > my-token.yaml

$ cat my-token.yaml
apiVersion: v1
data:
  my_token: MTIzNDU2Nzg5YWJjMTIzZGVmNDU2Z2hpNzg5
kind: Secret
metadata:
  creationTimestamp: null
  name: my-token
  namespace: my-namespace
</code></pre>

Then seal the secret, with the retrieved generated certificate you saved and stored before:

```bash
kubeseal --cert tls.crt --format=yaml < my-token.yaml > mysealedtoken.yaml
```

The output should look like this:

<pre class="console"><code>$ kubeseal --cert tls.crt --format=yaml < my-token.yaml > mysealedtoken.yaml

$ cat mysealedtoken.yaml
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  creationTimestamp: null
  name: my-token
  namespace: my-namespace
spec:
  encryptedData:
    my_token: <sensitive-data>
  template:
    data: null
    metadata:
      creationTimestamp: null
      name: my-token
      namespace: my-namespace
</code></pre>

Create the new namespace `my-namespace` and apply the SealedSecret resource inside:

```bash
kubectl create ns my-namespace
kubectl apply -f mysealedtoken.yaml -n my-namespace
```

The output should look like this:

<pre class="console"><code>$ kubectl create ns my-namespace
kubectl apply -f mycleanedsealedtoken.yaml -n my-namespace

$ kubectl apply -f mysealedtoken.yaml -n my-namespace
sealedsecret.bitnami.com/my-token created
</code></pre>

> [!primary]
>
> Be careful, the `SealedSecret` and `Secret` resources must have the same namespace and name. This is a feature to prevent other users on the same cluster from re-using your sealed secrets.

After the `SealedSecret` creation, the `sealed-secrets-controller` has created automatically a Kubernetes Secret.

You can check their existance with the following command:

```bash
kubectl get sealedsecret -n my-namespace

kubectl get secret -n my-namespace
```

<pre class="console"><code>$ kubectl get sealedsecret -n my-namespace
NAME       AGE
my-token   89s

$ kubectl get secret -n my-namespace
NAME                  TYPE                                  DATA   AGE
my-token              Opaque                                1      93s
</code></pre>

If you already installed the `view-secret` kubectl plugin, you can also check if the generated Secret contains the good token you sealed:

```bash
kubectl view-secret my-token -n my-namespace
```

You should obtain the following output:

<pre class="console"><code>$ kubectl view-secret my-token -n my-namespace
Choosing key: my_token
123456789abc123def456ghi789%
</code></pre>

### Debugging / Troubleshooting

Some issues may appear. If you don't understand why a Secret is never created after a SealedSecret creation, one of the common explanation is that you probably sealed the secret with another certificate than the ones the controller knows.

In order to debug/troubleshoot the behavior of the `sealed-secrets-controller`, you can watch its logs:

```bash
kubectl logs $(kubectl get pod -n kube-system -l app.kubernetes.io/name=sealed-secrets -o name) -n kube-system
```

When everything is fine, you should see the following output:

<pre class="console"><code>$ kubectl logs $(kubectl get pod -n kube-system -l app.kubernetes.io/name=sealed-secrets -o name) -n kube-system

controller version: 0.17.3
2022/02/16 13:59:46 Starting sealed-secrets controller version: 0.17.3
2022/02/16 13:59:46 Searching for existing private keys
2022/02/16 13:59:46 ----- sealed-secrets-keyvzwdp
2022/02/16 13:59:46 HTTP server serving on :8080
2022/02/17 09:43:49 Updating my-namespace/my-token
2022/02/17 09:43:49 Event(v1.ObjectReference{Kind:"SealedSecret", Namespace:"my-namespace", Name:"my-token", UID:"e2f1778d-67b6-4cb6-b243-c82871886f70", APIVersion:"bitnami.com/v1alpha1", ResourceVersion:"2318609909", FieldPath:""}): type: 'Normal' reason: 'Unsealed' SealedSecret unsealed successfully
</code></pre>

## Cleanup

First, remove the namespace `my-namespace` you created in this guide:

```bash
kubectl delete ns my-namespace
```

To uninstall Sealed Secrets, as you installed it through Helm, you can use `helm uninstall` command in order to delete the Sealed Secrets Helm installed chart:

```bash
helm uninstall sealed-secrets-controller sealed-secrets/sealed-secrets --namespace kube-system 
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
