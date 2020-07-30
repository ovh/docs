---
title: Mise en route de l'API Swift S3
excerpt: Découvrez comment utiliser l'API Swift S3
slug: swift-s3api
section: Gestion via OpenStack
order: 5
---

## Objectif

Le middleware Swift s3api qui assure la compatibilité de l'API S3 a été activé sur toutes les régions du Public Cloud.

**Ce guide vous aidera à accéder aux objets de Swift à l'aide d'un logiciel conçu pour interagir avec des points de terminaison compatibles S3.**

## Prérequis

- [Préparer l’environnement pour utiliser l’API OpenStack](../preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Obtenir fichier Openstack RC v3 d'Horizon](../access_and_security_in_horizon)

## En pratique


### Définir les variables d'environnement OpenStack

 ```bash
user@host:~$ source <user_name>-openrc.sh
Please enter your OpenStack Password for project <project_name> as user <user_name>:

user@host:~$
```

### Installer le client Openstack si nécessaire

```bash
user@host:~$ pip install python-openstackclient

user@host:~$
```

Référence de les commandes Openstack client [ici](https://docs.openstack.org/python-openstackclient/latest/).

### Créer des informations d'identification EC2

Les jetons S3 sont différents, vous avez besoin de 2 paramètres (**access** et **secret**) pour générer un jeton S3.
Ces informations d'identification seront stockées en toute sécurité dans Keystone. Pour la générer:

Avec le client python-openstack:


```bash
user@host:~$ openstack ec2 credentials create
+------------+----------------------------------------------------------------------------------------------------------------------------+
| Field      | Value                                                                                                                      |
+------------+----------------------------------------------------------------------------------------------------------------------------+
| access     | 5a4d8b8d88104123a862c527ede5a3d3                                                                                           |
| links      | {u'self': u'https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-                     |
|            | EC2/5a4d8b8d88104123a862c527ede5a3d3'}                                                                                     |
| project_id | 20e124b71be141299e111ec26b1892fa                                                                                           |
| secret     | 925d5fcfcd9f436d8ffcb20548cc53a2                                                                                           |
| trust_id   | None                                                                                                                       |
| user_id    | d74d05ff121b44bea9216495e7f0df61                                                                                           |
+------------+----------------------------------------------------------------------------------------------------------------------------+
```


Avec curl:

```bash
user@host:~$ curl -s -D headers -H "Content-Type: application/json" -d '
{ "auth": {
    "identity": {
      "methods": ["password"],
      "password": {
        "user": {
          "name": "'$OS_USERNAME'",
          "domain": { "name": "'$OS_USER_DOMAIN_NAME'" },
          "password": "'$OS_PASSWORD'"
        }
      }
    },
    "scope": {
      "project": {
        "name": "'$OS_PROJECT_NAME'",
        "domain": { "name": "'$OS_PROJECT_DOMAIN_NAME'" }
      }
    }
  }
}' "${OS_AUTH_URL}/auth/tokens" > token_info
user@host:~$ OS_TOKEN=$(egrep "^X-Subject-Token:" headers | awk '{print $2}')
user@host:~$ OS_USER_ID=$(cat token_info  | jq -r '.["token"]["user"]["id"]')
user@host:~$ OS_PROJECT_ID=$(cat token_info  | jq -r '.["token"]["project"]["id"]')
user@host:~$ curl -s -X POST -H "Content-Type: application/json" -H "X-Auth-Token: $OS_TOKEN" -d '{"tenant_id": "$OS_PROJECT_ID"}' "${OS_AUTH_URL}/users/${OS_USER_ID}/credentials/OS-EC2" | jq .
{
  "credential": {
    "user_id": "d74d05ff121b44bea9216495e7f0df61",
    "links": {
      "self": "https://auth.cloud.ovh.net/v3/users/d74d05ff121b44bea9216495e7f0df61/credentials/OS-EC2/660c89cfc4764271ba169941c7b2f310"
    },
    "tenant_id": "20e124b71be141299e111ec26b1892fa",
    "access": "660c89cfc4764271ba169941c7b2f310",
    "secret": "fc9e8eb545724accadcfabbd99207df1",
    "trust_id": null
  }
}
```

### Configurer le client AWS

Installez le client AWS et configurez-le comme suit:

```bash
user@host:~$ pip install awscli awscli-plugin-endpoint
[...]
user@host:~$ cat .aws/config
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
aws_access_key_id = <access fetched in previous step>
aws_secret_access_key = <secret fetched in previous step>
region = <public cloud region in lower case>
s3 =
  endpoint_url = https://s3.<public cloud region>.cloud.ovh.net
  signature_version = s3v4
  addressing_style = virtual
s3api =
  endpoint_url = https://s3.<public cloud region>.cloud.ovh.net
```

L'accès de type hébergé virtuel et l'accès de type chemin d'accès sont pris en charge dans toutes les régions, mais nous vous recommandons d'utiliser le style hébergé virtuel car l'accès de type chemin d'accès sera déprécié après le 30 septembre 2020.

### Utiliser le client AWS

Liste des Buckets (conteneurs):

List buckets (containers):

```bash
user@host:~$ aws --profile default s3 ls
```

Créer un nouveau bucket:

```bash
user@host:~$ aws --profile default s3 mb s3://bucket
```

S3 ne prend plus en charge la création de noms de bukcet contenant des lettres majuscules ou des traits de soulignement.
Les buckets S3 ne peuvent être créés que sur la stratégie PCS (Stockage d'objets)

Téléchargez un fichier local sur Swift:

```bash
user@host:~$ aws --profile default s3 cp file.txt s3://bucket/file.txt
```

Télécharger un objet à partir de Swift:

```bash
user@host:~$ aws --profile default s3 cp s3://bucket/file.txt file.txt
```

Supprimer un objet Swift:

```bash
user@host:~$ aws --profile default s3 rm s3://bucket/file.txt
```

Supprimer un bucket:

```bash
user@host:~$ aws --profile default s3 rb s3://bucket

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
