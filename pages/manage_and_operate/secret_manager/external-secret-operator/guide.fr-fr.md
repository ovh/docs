---
title: "Comment utiliser Kubernetes External Secret Operator avec Secret Manager"
excerpt: "Découvrez comment configurer External Secret Operator pour stocker les secrets Kubernetes sur le Secret Manager d'OVHcloud"
updated: 2026-01-07
---

> [!primary]
> Secret Manager est actuellement en phase bêta. Ce guide peut être mis à jour à l'avenir avec les avancées apportées par nos équipes en charge de ce produit.

## Objectif

Ce guide explique comment configurer l'External Secret Operator Kubernetes pour utiliser le Secret Manager d'OVHcloud en tant que fournisseur.

## Prérequis

- Un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir [commandé un domaine OKMS](/pages/manage_and_operate/kms/quick-start) ou [créé un premier secret](/pages/manage_and_operate/secret_manager/secret-manager-ui).
- Avoir un cluster [Managed Kubernetes Service](/links/public-cloud/kubernetes).

## En pratique

### Configuration du Secret Manager

Pour permettre l'accès au Secret Manager, vous aurez besoin d'un `token`, de la `region` et de l'`okms-id` de votre Secret Manager.

#### Création des identifiants

Créez un [utilisateur local IAM](/pages/account_and_service_management/account_information/ovhcloud-users-management) avec les droits d'accès à votre domaine.

L'utilisateur doit appartenir à un groupe avec le rôle ADMIN, ou si vous utilisez des [politiques IAM](/pages/account_and_service_management/account_information/iam-policy-ui), il doit avoir au moins les droits suivants sur le domaine OKMS :

- `okms:apikms:secret/create`
- `okms:apikms:secret/version/getData`
- `okms:apiovh:secret/get`

Il est aussi possible de créer un utilisateur avec l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) :

```bash
ovhcloud iam user create --login "secretmanager-b1033fdd-xxxx-xxxx-xxxx-xxxxxxxxx" --group ADMIN --description "A user create for Secret Manager, linked to xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" --password "secretmanager-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" --email "secretmanager-xxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx@ovhcloud.com"
```

Puis créez un token d'accès personnel (*Personal Access Token* ou PAT) `user_pat` :

> [!tabs]
> Via l'API
>> Utilisez l'appel API suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/identity/user/{user}/token
>>
>> Avec la charge utile suivante (remplissez-la avec vos valeurs) :
>>
>> ```json
>> {
>>   "description": "PAT secret manager for domain xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx",
>>   "name": "pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
>> }
>> ```
>>
>> L'API répondra avec :
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
> Via la CLI
>> Le PAT peut être créé avec l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) et la commande suivante (complétez-la avec vos valeurs) :
>>
>> ```bash
>> ovhcloud iam user token create {user} --name pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx --description "PAT secret manager for domain xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
>> ```
>>
>> La CLI répondra avec la valeur du `token` :
>>
>> ```bash
>> ✅ Token Secret-Manager created successfully, Value: eyJhbGciOiJ...punpVAg
>> ```
>>
>> En alternative, il est suggéré de sauvegarder directement le PAT dans une variable d'environnement :
>>
>> ```bash
>> PAT_TOKEN=$(ovhcloud iam user token create {user} --name pat-secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx --description "PAT secret manager for domain secretmanager-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx" -j  | jq .details.token |  tr -d '"') ; echo $PAT_TOKEN
>> ```

Conservez la valeur du champ `token` car elle ne sera plus affichée et sera utilisée pour s'authentifier sur le Secret Manager en tant que `user_pat`.

#### Informations du Secret Manager

Vous aurez également besoin de la `region` et de l'`okms-id` du domaine OKMS que vous souhaitez utiliser. Cet ID et cette région peuvent être trouvés sur [l'espace client OVHcloud](/links/manager) ou via l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli) :

```bash
$ ovhcloud okms list
┌──────────────────────────────────────┬─────────────┐
│ id                                   │ region      │
├──────────────────────────────────────┼─────────────┤
│ xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx │ eu-west-par │
│ xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx │ eu-west-par │
└──────────────────────────────────────┴─────────────┘
```

### Configuration du Secret Provider dans Kubernetes

#### Installation de l'External Secret Operator (ESO) sur votre cluster Kubernetes

```bash
helm repo add external-secrets https://charts.external-secrets.io
helm repo update

helm install external-secrets \
   external-secrets/external-secrets \
    -n external-secrets \
    --create-namespace \
    --set installCRDs=true
```

Vérifiez que l'ESO est en cours d'exécution :

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

#### Création d'un secret contenant le PAT

Commencez par encoder votre `user_pat` en base 64 afin de pouvoir le stocker dans un secret Kubernetes.

```bash
$ echo -n "<token>" | base64
ZXlKaG...wVkFn
```

Ou si le `user_pat` est stocké dans une variable d'environnement :

```bash
PAT_TOKEN_B64=$(echo -n $PAT_TOKEN | base64) ; echo $PAT_TOKEN_B64
```

Puis créez un fichier `secret.yaml` :

```yaml
 apiVersion: v1
kind: Secret
metadata:
  name: ovhcloud-vault-token
  namespace: external-secrets
data:
  token: ZXlKaG...wVkFn
```

Et appliquez la ressource au cluster avec la commande `kubectl apply -f secret.yaml`.

Ou si on utilise une variable d'environnement :

```bash
kubectl create secret generic ovhcloud-vault-token -n external-secrets --from-literal=token=$PAT_TOKEN_B64
```

Le secret devrait avoir été créé :

```bash
$ kubectl get secret ovhcloud-vault-token -n external-secrets
NAME                   TYPE     DATA   AGE
ovhcloud-vault-token   Opaque   1      5m
```

#### Configuration de l'External Secret Operator

Tout d'abord, configurez un `ClusterSecretStore` qui est chargé de la synchronisation avec le Secret Manager.
Nous configurons le SecretStore en utilisant HashiCorp Vault avec l'authentification par token et l'endpoint OKMS en tant que backend.

Ajoutez le `user_pat` en tant que secret pour pouvoir l'utiliser dans les chartes.

Pour définir une nouvelle ressource `ClusterSecretStore`, créez un fichier `clustersecretstore.yaml` avec le contenu suivant :

```yaml
apiVersion: external-secrets.io/v1
kind: ClusterSecretStore
metadata:
  name: vault-secret-store
spec:
  provider:
      vault:
        server: "https://<region>.okms.ovh.net/api/<okms_id>" # endpoint OKMS, remplissez avec la région correcte et votre okms_id 
        path: "secret"
        version: "v2" 
        auth:
            tokenSecretRef:
              name: ovhcloud-vault-token # le secret k8s contenant votre PAT
              key: token
              namespace: external-secrets
```

> [!primary]
> Seule l'[authentification par token](https://external-secrets.io/latest/provider/hashicorp-vault/#token-based-authentication) est prise en charge.

> [!primary]
> Cette intégration fonctionne également avec un `ClusterSecretStore`.

Le nom de la région peut être traduit à partir de votre emplacement régional en utilisant :

> [!api]
>
> @api {v1} /location GET /location

Par exemple, pour **Europe (France - Paris)**, l'endpoint OKMS est **eu-west-par.okms.ovh.net**.

Déployez la ressource dans votre cluster :

```bash
kubectl apply -f secretstore.yaml
```

#### Utilisation de l'External Secret Operator

Une fois le `ClusterSecretStore` configuré, vous pouvez définir des `ExternalSecret` provenant du gestionnaire de secrets.
Créez un fichier `externalsecret.yaml` avec le contenu suivant :

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

Appliquez la ressource dans votre cluster :

```bash
kubectl apply -f externalsecret.yaml
```

Cela créera un objet de secret Kubernetes.

```bash
$ kubectl get secret -n external-secrets
NAME                                     TYPE                             DATA   AGE
...
ovhregistrycred                          kubernetes.io/dockerconfigjson   1      15m
...
```

Pour plus d'informations sur la gestion de l'External Secret Operator, veuillez consulter la documentation dédiée, en utilisant le fournisseur HashiCorp Vault : <https://external-secrets.io/latest/>.

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).
