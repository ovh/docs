---
title: "How to use Kubernetes External Secret Operator with Secret Manager"
excerpt: "Configure External Secret Operator to store Kubernetes secrets on the OVHcloud Secret Manager"
updated: 2026-01-07
---

> [!primary]
> Secret Manager is currently in Beta phase. This guide can be updated in the future with the advancements made by our teams in charge of this product.

## Objective

This guide explains how to set up the Kubernetes External Secret Operator to use the OVHcloud Secret Manager as a provider.

## Requirements

- An [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You must have [ordered an OKMS domain](/pages/manage_and_operate/kms/quick-start) or [created a first secret](/pages/manage_and_operate/secret_manager/secret-manager-ui).
- A [Managed Kubernetes Service](/links/public-cloud/kubernetes) cluster.

## Instructions

### Set up the Secret Manager

To allow access to the Secret Manager you will need to have a `token`, the `region` and `okms-id` of your Secret Manager.

#### Credential creation

Create an [IAM local user](/pages/account_and_service_management/account_information/ovhcloud-users-management) with access rights on your domain.

The user should be a member of a group with the ADMIN role. If you are using [IAM policies](/pages/account_and_service_management/account_information/iam-policy-ui) instead, the user should have at least the following rights on the OKMS domain:

- `okms:apikms:secret/create`
- `okms:apikms:secret/version/getData`
- `okms:apiovh:secret/get`

Alternatively, it's possible to create a user using [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli):

```bash
ovhcloud iam user create --login "secretmanager-b1033fdd-xxxx-xxxx-xxxx-xxxxxxxxx" --group ADMIN --description "A user create for Secret Manager, linked to xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" --password "secretmanager-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" --email "secretmanager-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx@ovhcloud.com"
```

Then create a Personal Acces Token (PAT) `user_pat`:

> [!tabs]
> Via the API
>> Use the following API call:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/identity/user/{user}/token
>>
>> With the following payload (fill it in with your own values):
>>
>> ```json
>> {
>>   "description": "PAT secret manager for domain xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
>>   "name": "pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
>> }
>> ```
>>
>> The API will answer with:
>>
>> ```json
>> {
>>   "creation": "2025-11-13T10:38:44.658926311Z",
>>   "description": "PAT secret manager for domain xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
>>   "expiresAt": null,
>>   "lastUsed": null,
>>   "name": "pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
>>   "token": "eyJhbGciOiJ...punpVAg"
>> }
>> ```
>>
> Via the CLI
>>
>> The PAT can be created with the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) and the following command (fill in it with your own values):
>>
>> ```bash
>> ovhcloud iam user token create {user} --name pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx --description "PAT secret manager for domain xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
>> ```
>>
>> CLI will answer with the `token` value:
>>
>> ```bash
>> ✅ Token Secret-Manager created successfully, value: eyJhbGciOiJ...punpVAg
>> ```
>>
>> As an alternative, you can store directly the PAT in a environment variable:
>>
>> ```bash
>> PAT_TOKEN=$(ovhcloud iam user token create {user} --name pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx --description "PAT secret manager for domain secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx" -j  | jq .details.token |  tr -d '"') ; echo $PAT_TOKEN
>> ```

Keep the value of the `token` field as it will never be prompted again and will be used to authenticate to the Secret Manager as `user_pat`.

#### Secret Manager information

You will also need the `region` and the `okms-id` of the OKMS domain you want to use. This ID and this region can be found in the [OVHcloud Control Panel](/links/manager) or via the [OVHcloud CLI](https://github.com/ovh/ovhcloud-cli):

```bash
$ ovhcloud okms list
┌──────────────────────────────────────┬─────────────┐
│ id                                   │ region      │
├──────────────────────────────────────┼─────────────┤
│ xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx │ eu-west-par │
│ xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx │ eu-west-par │
└──────────────────────────────────────┴─────────────┘
```

### Set up the Secret Provider in Kubernetes

#### Install the External Secret Operator (ESO) on your Kubernetes cluster

```bash
helm repo add external-secrets https://charts.external-secrets.io
helm repo update

helm install external-secrets \
   external-secrets/external-secrets \
    -n external-secrets \
    --create-namespace \
    --set installCRDs=true
```

Check that the ESO is running:

```bash
$  kubectl get all -n external-secrets
NAME                                                    READY   STATUS    RESTARTS   AGE
pod/external-secrets-8cbc56569-9875p                    1/1     Running   0          12s
pod/external-secrets-cert-controller-565fcd479b-xbkcp   0/1     Running   0          12s
pod/external-secrets-webhook-7fb59d4b88-9tkl6           0/1     Running   0          12s

NAME                               TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)   AGE
service/external-secrets-webhook   ClusterIP   10.3.43.102   <none>        443/TCP   13s

NAME                                               READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/external-secrets                   1/1     1            1           13s
deployment.apps/external-secrets-cert-controller   0/1     1            0           13s
deployment.apps/external-secrets-webhook           0/1     1            0           13s

NAME                                                          DESIRED   CURRENT   READY   AGE
replicaset.apps/external-secrets-8cbc56569                    1         1         1       13s
replicaset.apps/external-secrets-cert-controller-565fcd479b   1         1         0       13s
replicaset.apps/external-secrets-webhook-7fb59d4b88           1         1         0       13s
```

#### Create a secret containing the PAT

Start by encoding your `user_pat` in base 64 so it can be stored in a Kubernetes secret.

```bash
$ echo -n "<token>" | base64
ZXlKaG...wVkFn
```

Alternatively, if the `user_pat` was stored in an environment variable:

```bash
PAT_TOKEN_B64=$(echo -n $PAT_TOKEN | base64) ; echo $PAT_TOKEN_B64
```

Then create a `secret.yaml` file:

```yaml
 apiVersion: v1
kind: Secret
metadata:
  name: ovhcloud-vault-token
  namespace: external-secrets
data:
  token: ZXlKaG...wVkFn
```

And apply it with the `kubectl apply -f secret.yaml` command.

Alternatively, if you are using an environment variable:

```bash
kubectl create secret generic ovhcloud-vault-token -n external-secrets --from-literal=token=$PAT_TOKEN_B64
```

The secret should have been created:

```bash
$ kubectl get secret ovhcloud-vault-token -n external-secrets
NAME                   TYPE     DATA   AGE
ovhcloud-vault-token   Opaque   1      5m
```

#### Configure the External Secret Operator

First, set up a `ClusterSecretStore` that is responsible of the synchronization with the Secret Manager.
We configure the SecretStore using HashiCorp Vault with token authentification and with the OKMS endpoint as backend.

Add the `user_pat` as a secret to be able to use it in the charts.

To define a new `ClusterSecretStore` resource, create a `clustersecretstore.yaml` file with the following content:

```yaml
apiVersion: external-secrets.io/v1
kind: ClusterSecretStore
metadata:
  name: vault-secret-store
spec:
  provider:
      vault:
        server: "https://<region>.okms.ovh.net/api/<okms_id>" # OKMS endpoint, fill with the correct region and your okms_id 
        path: "secret"
        version: "v2" 
        auth:
            tokenSecretRef:
              name: ovhcloud-vault-token # The k8s secret that contain your PAT
              key: token 
              namespace: external-secrets
```

> [!primary]
> Only [token authentication](https://external-secrets.io/latest/provider/hashicorp-vault/#token-based-authentication) is supported.

> [!primary]
> This integration works with a `SecretStore` as well.

The region name can be translated from your region location using:

> [!api]
>
> @api {v1} /location GET /location
>

As an example for **Europe (France - Paris)**, the OKMS endpoint is **eu-west-par.okms.ovh.net**.

Deploy the resource in your cluster:

```bash
kubectl apply -f secretstore.yaml
```

#### Use the External Secret Operator

Once the `ClusterSecretStore` is set up you can define the `ExternalSecret` that comes from the secret manager.

Create an `externalsecret.yaml` file with this content:

```yaml
apiVersion: external-secrets.io/v1
kind: ExternalSecret
metadata:
  name: docker-config-secret
  namespace: external-secrets
spec:
  refreshInterval: 30m
  secretStoreRef:
    name: vault-secret-store
    kind: ClusterSecretStore
  target:
    template:
      type: kubernetes.io/dockerconfigjson
      data:
        .dockerconfigjson: "{{ .mysecret | toString }}"
    name: ovhregistrycred
    creationPolicy: Owner
  data:
  - secretKey: mysecret
    remoteRef:
      key: prod/va1/dockerconfigjson
```

Apply the resource in your cluster:

```bash
kubectl apply -f externalsecret.yaml
```

It will create a Kubernetes Secret object.

```bash
$ kubectl get secret -n external-secrets
NAME                                     TYPE                             DATA   AGE
...
ovhregistrycred                          kubernetes.io/dockerconfigjson   1      15m
...
```

For any additional information on how to manage the External Secret Operator, refer to the dedicated documentation, using the HashiCorp Vault provider: <https://external-secrets.io/latest/>.

## Go further

Join our [community of users](/links/community).
