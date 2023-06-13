---
title: Object Storage - Server Access Logging
slug: s3/server-access-logging
excerpt: Découvrez comment configurer et utiliser Server Access Logging
section: Tutoriels
order: 130
updated: 2023-02-16
---

**Dernière mise à jour le 16/02/2023**

## Objectif

Server Access Logging fournit des enregistrements détaillés des requêtes faites à un bucket. Les journaux d'accès sont utiles pour de nombreuses applications, par exemple pour les audits de sécurité et d'accès.

**Ce guide explique comment configurer et utiliser Server Access Logging.**

## Prérequis

- Avoir créé un bucket.
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket.
- Connaître vos informations d'identification S3 (access_key et secret_access_key).

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

### Créer un bucket

``` bash
$ aws --profile my-profile s3 mb "s3://my-bucket"
```

### Créer un bucket de logs

> [!primary]
>
> La journalisation des accès à votre bucket cible ne doit pas être activée. Les journaux peuvent être fournis dans n'importe quel bucket que vous possédez et qui est situé dans la même Région que le bucket source, y compris le bucket source lui-même. Ce n'est toutefois pas recommandé car cela entraînerait une boucle infinie de journaux. Pour simplifier la gestion des journaux, nous vous recommandons d'enregistrer les journaux d'accès dans un autre bucket.
>

``` bash
$ aws --profile my-profile s3 mb "s3://my-bucket-logs"
```

### Configurer les *bucket acl* sur le bucket de logs

``` bash
$ aws --profile my-profile s3api put-bucket-acl --bucket my-bucket-logs --grant-write URI=http://acs.amazonaws.com/groups/s3/LogDelivery --grant-read-acp URI=http://acs.amazonaws.com/groups/s3/LogDelivery
```

#### Vérifier la configuration des *bucket acl*

``` bash
$ aws --profile my-profile s3api get-bucket-acl --bucket my-bucket-logs
```

*Exemple de sortie* :

``` json
{
    "Owner": {
        "DisplayName": "1542319462669586:user-5hwhM25pPT6f",
        "ID": "1542319462669586:user-5hwhM25pPT6f"
    },
    "Grants": [
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            "Permission": "READ_ACP"
        },
        {
            "Grantee": {
                "Type": "Group",
                "URI": "http://acs.amazonaws.com/groups/s3/LogDelivery"
            },
            "Permission": "WRITE"
        }
    ]
}
```

### Configurer les paramètres de journalisation d'un bucket

Définissez les paramètres de journalisation pour un bucket et spécifiez les autorisations pour ceux qui peuvent voir et modifier les paramètres de journalisation.

``` bash
$ aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://logging.json
```

`logging.json`

```json
{
  "LoggingEnabled": {
      "TargetBucket": "my-bucket-logs",
      "TargetPrefix": "test/"
   }
}
```

#### Vérifier les paramètres de journalisation d'un bucket

``` bash
$ aws --profile my-profile s3api get-bucket-logging --bucket my-bucket
```

*Exemple de sortie* :

``` json
{
    "LoggingEnabled": {
        "TargetBucket": "my-bucket-logs",
        "TargetPrefix": "test/"
    }
}
```

### Visualiser les journaux

Après environ une heure, les premiers journaux sont disponibles :

``` bash
$ aws --profile my-profile s3 ls "s3://my-bucket-logs" --recursive
```

*Exemple de sortie* :

``` bash
2023-01-10 17:39:42       1861 test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
2023-01-10 17:42:39        369 test/2023-01-10-16-12-38-4623ACA1FDEF492DBCD30385DAB48E1D
2023-01-10 17:42:39       1485 test/2023-01-10-16-12-38-FEE333087AD64973ABF6B62B10ECBF20
```

Télécharger un journal :

``` bash
$ aws --profile my-profile s3 cp "s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261" .
```

*Exemple de sortie* :

```bash
download: s3://my-bucket-logs/test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261 to ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

Consulter le journal :

``` bash
$ cat ./2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

*Exemple de sortie* :

```bash
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:28 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx46d5e8a45e5e4bb3975fc-0063bd7ef4 REST.PUT.LOGGING_STATUS - "PUT /?logging HTTP/1.0" 200 - - 200 113 0 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:06:47 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txd467757a5fac478b9132e-0063bd7f07 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 11 9 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:08:20 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f txa4de5d9245774d5699835-0063bd7f64 REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 9 7 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:24:49 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx452b0b609b6d441ab0cef-0063bd833f REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 2320 2319 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
1542319462669586:user-5hwhM25pPT6f my-bucket [10/Jan/2023:15:26:02 +0000] 109.190.254.61 1542319462669586:user-5hwhM25pPT6f tx5b60d66c1d5b4a049674b-0063bd838a REST.GET.LOGGING_STATUS - "GET /?logging HTTP/1.0" 200 - 254 - 18 16 "-" "aws-cli/1.24.10 Python/3.6.9 Linux/5.4.0-135-generic botocore/1.26.10" - - SigV4 - AuthHeader my-bucket.s3.training.perf.cloud.ovh.net - -
```

La liste suivante décrit les champs d'enregistrement d'un journal:

- Bucket Owner: canonical user ID of the source bucket
    - PROJECT_NAME:USER_NAME
- Bucket: bucket name
- Time: time at which the request was received
    - format: [%d/%b/%Y:%H:%M:%S %z]
- Remote IP: apparent internet address of the requester
- Requester: canonical user ID of the requester
    - PROJECT_NAME:USER_NAME
- Request ID: identify each request
    - ex: txid0123456789abcdef
- Operation: operation listed here is declared
    - SOAP.operation
    - REST.HTTP_method.resource_type
    - WEBSITE.HTTP_method.resource_type
    - BATCH.DELETE.OBJECT
    - S3.action.resource_type for Lifecycle and logging
- Key: object name
- Request-URI: Request-URI part of the HTTP request message
- HTTP status: numeric HTTP status code of the response
- Error Code: Amazon S3 Error code
    - ex: NoSuchBucket
- Bytes Sent: number of response bytes sent
- Object Size: number of response bytes received?
- Total Time: number of milliseconds the request was in flight from the server's perspective
- Turn-Around Time: TTFB
- Referer: value of the HTTP Referer header
- User-Agent: value of the HTTP User-Agent header
- Version Id: object version ID
- Signature Version: signature version
    - SigV2
    - SigV4
- Authentication Type: type of request authentication used
    - AuthHeader
    - QueryString
- Host Header: endpoint used to connect to S3
    - (BUCKET.)STORAGE_DOMAIN

### Vérifier les acl d'un journal

``` bash
$ aws --profile my-profile s3api get-object-acl --bucket my-bucket-logs --key test/2023-01-10-16-09-41-8D17C69BFBB64E1FA4BAEE7FCB436261
```

*Exemple de sortie* :

``` json
{
    "Owner": {
        "DisplayName": "logging_s3:.log_delivery",
        "ID": "logging_s3:.log_delivery"
    },
    "Grants": [
        {
            "Grantee": {
                "DisplayName": "logging_s3:.log_delivery",
                "ID": "logging_s3:.log_delivery",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        },
        {
            "Grantee": {
                "DisplayName": "1542319462669586:user-5hwhM25pPT6f",
                "ID": "1542319462669586:user-5hwhM25pPT6f",
                "Type": "CanonicalUser"
            },
            "Permission": "FULL_CONTROL"
        }
    ]
}
```

### Désactiver Server Access Logging

Créez un fichier de configuration vide :

```bash
$ cat Documents/logging_disable.json
{}
```

Ensuite, configurez les paramètres de journalisation du bucket avec ce fichier de configuration vide :

```bash
$ aws --profile my-profile s3api put-bucket-logging --bucket my-bucket --bucket-logging-status file://logging_disable.json
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
