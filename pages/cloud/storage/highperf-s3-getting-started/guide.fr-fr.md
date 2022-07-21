---
title: Débuter avec S3 Object Storage
slug: s3/debuter-avec-s3
excerpt:
section: Object Storage S3 High Performance
order: 020
---

**Dernière mise à jour le 21/07/2022**

## Objectif

Ce guide à pour objectif de vous familiariser avec la gestion de vos conteneurs / objets.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir créé un [utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/).

## En pratique

### Gestion des utilisateurs

Une fois que votre utilisateur a été créé avec le rôle `ObjectStore operator` ou avec le rôle `Administrator`, vous devez générer ses informations d'identification S3.

![User menu](images/highperf-s3-getting-started-20220721141708221.png){.thumbnail}

> [!primary]
>
> Veillez à enregistrer les clés *access* et *secret*, uniquement affichées à ce moment précis dans le cadre vert, dans un gestionnaire de mots de passe.
>

![Result](images/highperf-s3-getting-started-20220721141829843.png){.thumbnail}

### Gestion des buckets

#### Création d'un bucket depuis l'espace client

> [!primary]
>
> Il n'est pas possible de créer de bucket Public Cloud Archive.
>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez `Public Cloud`{.action} dans la barre de menu supérieure.

Sélectionnez `Object Storage`{.action} dans le menu à gauche puis cliquez sur `Créer un conteneur d'objets`{.action}

S'il s'agit de votre premier bucket, vous devriez voir cet affichage :

![pcs dashboard](images/create-container-20211005102334181.png){.thumbnail}

S'il ne s'agit pas de votre premier bucket :

![pcs dashboard](images/create-container-20211005115040834.png){.thumbnail}

Sélectionnez la solution High Performance et cliquez sur `Suivant`{.action} :

![Select High Performance Solution](images/highperf-s3-getting-started-20220502112813860.png){.thumbnail}

Sélectionnez la région de votre bucket et cliquez sur `Suivant`{.action} :

![Select a region](images/HighPerf-S3-getting-started-20211028090916484.png){.thumbnail}

Nommez votre bucket et cliquez sur `Ajouter le conteneur`{.action} :  

![Container name](images/HighPerf-S3-getting-started-20211028091015710.png){.thumbnail}  

> [!warning]
>
> - Les noms de bucket peuvent comporter entre 3 et 63 caractères.  
> - Les noms de bucket peuvent être composés uniquement de lettres minuscules, de chiffres, de points (.) et de traits d'union (-).  
> - Les noms de bucket doivent commencer et se terminer par une lettre ou un chiffre.  
> - Les noms de buckets ne doivent pas utiliser le même format que les adresses IP (par ex., 192.168.5.4).  
> - Les noms de bucket doivent être uniques au sein d'une même région.  
>

#### Liaison d'un utilisateur à un bucket

À ce stade, vous ne pouvez pas interagir avec votre bucket car aucun utilisateur S3 n'y est associé.

Cliquez sur les `...`{.action} à la fin de la ligne de votre bucket puis sur `Ajouter un utilisateur à un conteneur`{.action}.

![Add a user to a container](images/HighPerf-S3-getting-started-20211028091254996.png){.thumbnail}

Sélectionnez l'utilisateur à ajouter à votre bucket et cliquez sur `Suivant`{.action} :

![Add a user to my container](images/HighPerf-S3-getting-started-20211028091356617.png){.thumbnail}

Définissez les accès à votre bucket pour cet utilisateur et cliquez sur `Suivant`{.action} :

![Add a user to my container - Role](images/HighPerf-S3-getting-started-20211028091456850.png){.thumbnail}

### Gestion des objets

Cliquez sur les `...`{.action} à la fin de la ligne de votre bucket puis sur `Afficher les objets`{.action}.

![Object Storage Dashboard](images/HighPerf-S3-getting-started-20211028093009189.png){.thumbnail}

Cliquez sur `+ Ajouter des objets`{.action}

![Add objects](images/HighPerf-S3-getting-started-20211028093103226.png){.thumbnail}

Si besoin, définissez un préfixe, cliquez sur `Sélectionnez les fichiers`{.action} puis sur `Importer`{.action}

![Select files](images/HighPerf-S3-getting-started-2021102809321218.png){.thumbnail}

Vous pouvez maintenant interagir avec votre objet :

![Object actions](images/HighPerf-S3-getting-started-20211028093408437.png){.thumbnail}

### Utilisation de AWS CLI

#### Installation

Entrez la commande suivante :

```bash
user@host:~$ pip3 install awscli awscli-plugin-endpoint
```

> [!primary]
>
> `awscli-plugin-endpoint` est optionel  
> Installez le package `groff` si vous souhaitez utiliser l'aide en ligne de commande.
>

#### Configuration

Configurez le client aws comme suit :

```bash
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

# Delete the next two lines if you don't installed `awscli-plugin-endpoint`
[plugins]
endpoint = awscli_plugin_endpoint

[profile default]
region = <region_in_lowercase>
s3 =
  endpoint_url = https://s3.<region_in_lowercase>.perf.cloud.ovh.net
  signature_version = s3v4
s3api =
  endpoint_url = https://s3.<region_in_lowercase>.perf.cloud.ovh.net
```

> [!primary]
>
> Vous pouvez aussi utiliser la configuration interactive en exécutant la commande suivante :
> `aws --configure`
>

Voici les valeurs de configuration que vous pouvez définir spécifiquement  :

| Variable  | Type | Valeur | Définition  |
|:--|:--|:--|:--|
| max_concurrent_requests | Integer | **Défaut :** 10 | Le nombre maximum de requêtes simultanées. |
| max_queue_size | Integer | **Défaut :** 1000 | Le nombre maximal de tâches dans la file d'attente des tâches. |
| multipart_threshold | Integer<br>String | **Défaut :** 8MB |  Le seuil de taille que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| multipart_chunksize | Integer<br>String | **Défaut :** 8MB<br>**Minimum for uploads:** 5MB |  Lors de l'utilisation de transferts multipart, il s'agit de la taille de morceau que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| max_bandwidth | Integer | **Défaut :** None | La bande passante maximale qui sera consommée pour le chargement et le téléchargement de données vers et depuis vos buckets. |
|  verify_ssl  | Boolean | **Défaut :** true | Active / Désactive la vérification des certificats SSL |

#### Utilisation

> [!primary]
>
> Si vous n'avez pas installé `awscli-plugin-endpoint`, vous devez ajouter `--endpoint-url https://s3.<region_in_lowercase>.perf.cloud.ovh.net` à la ligne de commande.
>

> [!primary]
>
> Si vous avez défini plusieurs profils, ajoutez `--profile <profil>` à la ligne de commande
>

**Créer un bucket**

```bash
aws s3 mb s3://<bucket_name>
aws --endpoint-url https://s3.<region_in_lowercase>.perf.cloud.ovh.net --profile default s3 mb s3://<bucket_name>
```

**Lister vos buckets**

```bash
aws s3 ls
```

**Uploader vos fichiers en tant qu'objets dans votre bucket**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>
```

**Par défaut, les objets prennent le nom des fichiers mais ils peuvent être renommés**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>/other-filename
```

**Télécharger un objet depuis un bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 .
```

**Télécharger un objet d'un bucket vers un autre bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 s3://<bucket_name_2>
```

**Télécharger ou téléverser un bucket entier vers l'hôte/bucket**

```bash
aws s3 cp s3://<bucket_name> . --recursive
aws s3 cp s3://<bucket_name> s3://<bucket_name_2> --recursive
```

**Synchronisation des buckets**

```bash
aws s3 sync . s3://<bucket_name>
aws s3 sync s3://<bucket_name> s3://<bucket_name_2>
```

**Supprimer des objets et des buckets**

```bash
# Suppression d'un objet
aws s3 rm s3://<bucket_name>/test1
# Suppression de tous les objets d'un bucket
aws s3 rm s3://<bucket_name> --recursive
# Suppression d'une zone de stockage. Pour supprimer un bucket, il doit être vide.
aws s3 rb s3://<bucket_name>
# Si le compartiment n'est pas supprimé, vous pouvez utiliser la même commande avec l'option --force.
# Cette commande supprime tous les objets du bucket, puis supprime le bucket.
aws s3 rb s3://<bucket_name> --force
```

**Définir des tags sur un bucket**

```bash
aws s3api put-bucket-tagging --bucket <bucket_name> --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```
```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Supprimer les tags sur un bucket**

```bash
aws s3api s3api delete-bucket-tagging --bucket <bucket_name>
```

**Définir des tags sur un objet**

```bash
aws s3api put-object-tagging --bucket <bucket_name> --key test1 --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```
```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Supprimer les tags sur un objet**

```bash
aws s3api s3api delete-object-tagging --bucket <bucket_name> --key test1
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
