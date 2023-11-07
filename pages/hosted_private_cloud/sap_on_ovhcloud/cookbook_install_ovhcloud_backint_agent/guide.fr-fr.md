---
title: "Installer et utiliser OVHcloud Backint Agent pour SAP HANA"
excerpt: "Ce guide fournit des instructions générales pour l'installation d'OVHcloud Backint Agent pour SAP HANA et son utilisation"
updated: 2023-09-05
---

## Objectif

Ce guide vous détaille les étapes d'installation d'OVHcloud Backint Agent pour SAP HANA et son utilisation.

OVHcloud Backint Agent pour SAP HANA vous permet de sauvegarder votre base de données SAP HANA sur un bucket Object Storage S3 OVHcloud.

![one_bucket](images/one_bucket.png){.thumbnail}

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) déjà déployé dans votre compte OVHcloud.
- [Un utilisateur S3](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#creating-a-user) déjà créé.
- [Un bucket Object Storage S3](/pages/storage_and_backup/object_storage/s3_create_bucket) déjà créé.
- [Configurer les droits 'Lecture et Écriture'](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#manage-access-to-a-bucket-via-a-profile) pour l'utilisateur S3 sur le bucket Object Storage S3.
- Une base de données SAP HANA installée.

> [!warning]
> La clé d'accès et la clé secrète ne doivent à aucun moment être communiquées à un tiers. Elles correspondent aux identifiants permettant d'écrire, de lire et de supprimer les données qui seront stockées dans ce bucket Object Storage S3.
>

## En pratique

> [!primary]
> [**Accès rapide à l'URL de téléchargement d'OVHcloud Backint Agent**](#ovhcloud-backint-agent-pour-sap-hana)
>

### Object Storage S3

> [!primary]
> Pour obtenir les informations relatives à la configuration et à l'utilisation des commandes AWS S3 CLI, veuillez vous référer à la documentation [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

Le versioning du bucket doit être activé afin d'assurer le bon fonctionnement d'OVHcloud Backint Agent.

Pour vérifier si le versioning est activé sur votre bucket Object Storage S3, exécutez la commande suivante :

```bash
aws --profile <nom_du_profile> \
s3api get-bucket-versioning \
--bucket <nom_du_conteneur>
```

Sortie attendue:

```bash
{
    "Status": "Enabled"
}
```

Si le statut du versioning de votre bucket Object Storage S3 est différent de `Enabled`, exécutez la commande suivante :

```bash
aws --profile <nom_du_profile> \
s3api put-bucket-versioning \
--bucket <nom_du_conteneur> \
--versioning-configuration Status=Enabled
```

### OVHcloud Backint Agent pour SAP HANA

Accédez au répertoire `/usr/sap/<SID>/SYS/global/hdb/opt/` et [téléchargez l'archive d'OVHcloud Backint Agent pour SAP HANA](https://ovhcloud-backint-agent.s3.rbx.io.cloud.ovh.net/ovhcloud-backint-agent.zip) contenant :

- la licence d'utilisation d'OVHcloud Backint Agent pour SAP HANA
- le fichier NOTICE incluant les copyrights
- un modèle de fichier de configuration
- l'exécutable d'OVHcloud Backint Agent pour SAP HANA

Pour télécharger l'archive depuis votre serveur hébergeant la base de données SAP HANA, vous pouvez utiliser la commande suivante :

```bash
wget https://ovhcloud-backint-agent.s3.rbx.io.cloud.ovh.net/ovhcloud-backint-agent.zip -P /usr/sap/<SID>/SYS/global/hdb/opt/
```

L'archive nommée `ovhcloud-backint-agent.zip` doit être décompressée, exécutez la commande suivante :

```bash
unzip /usr/sap/<SID>/SYS/global/hdb/opt/ovhcloud-backint-agent.zip -d /usr/sap/<SID>/SYS/global/hdb/opt/
```

À présent, quatre fichiers sont présents dans le répertoire `/usr/sap/<SID>/SYS/global/hdb/opt/` :

- LICENSE
- NOTICE
- hdbbackint.cfg
- hdbbackint

> [!primary]
> Veuillez prendre connaissance du contenu du fichier LICENSE. En utilisant ou en téléchargeant OVHcloud Backint Agent pour SAP HANA, vous acceptez les termes de la licence.
>

Le fichier `hdbbackint.cfg` doit posséder les droits de lecture et d'écriture, le fichier `hdbbackint` doit posséder les droits de lecture et d'exécution. Ces droits doivent s'appliquer à l'utilisateur SAP HANA (sid)adm.

```bash
chown <sid>adm:sapsys /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg
chown <sid>adm:sapsys /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint
chmod 600 /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg
chmod 500 /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint
```

Vérifiez que vous pouvez exécuter OVHcloud Backint Agent avec l'utilisateur SAP HANA.

```bash
su - <sid>adm -c "/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint -v"
"Backint 1.04" "OVHcloud Backint Agent version 1.0 for SAP HANA"
```

### Configuration

Éditez le contenu du fichier `hdbbackint.cfg` et remplacez les valeurs entre parenthèses par les informations liées à votre bucket Object Storage S3.

```{.console}
[trace]
default = INFO
destination = outputfile
 
[ovhcloud]
endpoint_url = https://s3.(region).io.cloud.ovh.net # exemple : https://s3.rbx.io.cloud.ovh.net
bucket = (nom_du_bucket) # exemple : sauvegarde-sap-hana
region = (region) # exemple : rbx
access_key = (s3_user_access_key) # exemple : 12345678901234567890123456789012
secret_key = (s3_user_secret_key) # exemple : 12345678901234567890123456789012
max_concurrency = 10
multipart_chunksize = 51916800
multipart_threshold = 51916800
```

>[!warning]
> Les commandes qui vont suivre vont modifier la configuration de sauvegarde de votre base de données SAP HANA. Exécutez ces commandes avec précaution.
>
> Il est également conseillé de réaliser une sauvegarde complète de votre base de données SAP HANA après la modification de la configuration, dans le but de valider cette dernière.
>

Veuillez exécuter ces commandes SQL suivante afin de mettre à jour la configuration de sauvegarde de votre base de données SAP HANA.

*Remplacez, dans les commandes SQL ci-dessous, les caractères* `<SID>` *par le SID de votre base de données SAP HANA.*


```SQL
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_using_backint')='true' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','data_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_using_backint')='true' WITH RECONFIGURE;
```

>[!primary]
> Pour connaître l'exhaustivité des paramètres liés à la sauvegarde SAP HANA, nous vous recommandons la [documentation SAP](https://help.sap.com/docs/SAP_HANA_PLATFORM/009e68bc5f3c440cb31823a3ec4bb95b/e28fbdf1024c40e1a97fca48380aad98.html?locale=en-US). Dans la colonne "Section", indiquez "Backup".
>

### Sauvegarde

Afin de valider la configuration, vous pouvez réaliser des sauvegardes manuelles depuis un accès SSH, via les commandes suivantes :

*Remplacez, dans les commandes ci-dessous, les caractères* `<SID>` *par le SID de votre base de données SAP HANA.*

```bash
# Sauvegarde du SYSTEMDB
/usr/sap/<SID>/HDB00/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA USING BACKINT ('MANUAL_COMPLETE_BACKUP');"

# Sauvegarde du TENANTDB
/usr/sap/<SID>/HDB00/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA FOR <SID> USING BACKINT ('MANUAL_COMPLETE_BACKUP');"
```

Vous pouvez également réaliser ces sauvegardes via le logiciel SAP HANA Studio, en sélectionnant `Backint`{.action} dans la catégorie `Destination Type`{.action}.

![hana_studio](images/hana_studio.png){.thumbnail}

Suite à la réalisation de ces sauvegardes, plusieurs fichiers correspondant aux sauvegardes de votre base de données SAP HANA via OVHcloud Backint Agent sont présents dans votre bucket Object Storage S3.

![backup](images/backup.png){.thumbnail}

> [!success]
> Si vous observez ces fichiers dans votre bucket Object Storage S3, félicitations, vous avez configuré avec succès vos sauvegardes SAP HANA avec OVHcloud Backint Agent.
>

Si les sauvegardes ne sont pas effectuées comme attendu, vous avez la possibilité de démarrer votre diagnostic en étudiant le contenu de deux fichiers :

- backint.log
- backup.log

Ces deux fichiers se trouvent dans le répertoire `/usr/sap/<SID>/HDB<NI>/<hostname>/trace` pour la sauvegarde du SYSTEMDB et dans le répertoire `/usr/sap/<SID>/HDB<NI>/<hostname>/trace/DB_<SID>` pour la sauvegarde du TENANTDB.

Le fichier `backint.log` vous apportera des informations relatives à l'exécution d'OVHcloud Backint Agent, comme par exemple un problème de permissions sur le bucket Object Storage S3 :

```log
botocore.exceptions.ClientError: An error occurred (AccessDenied) when calling the PutObject operation: Access Denied.
```

Le fichier `backup.log` vous apportera des informations relatives à l'exécution même de la sauvegarde à travers SAP HANA, sa progression et ses erreurs rencontrées.

```log
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 0, BackupExecuteTopologyAndSSFSBackupInProgress
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 0, BackupError
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 1, BackupAbortSavepointInProgress
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 1, BackupAbortSavepointFinished
ERROR   BACKUP   SAVE DATA finished with error: [447] backup could not be completed
```

### Planification

La planification de vos sauvegardes de votre base de données SAP HANA doit être modifiée.

Nous vous conseillons de vous référer à la SAP Note [2782059](https://launchpad.support.sap.com/#/notes/2782059), qui présente quatre options pour planifier les sauvegardes sur une base de données SAP HANA.

Voici un exemple de planification de sauvegardes SAP HANA via crontab.

*Remplacez, dans les commandes ci-dessous, les caractères* `<SID>` *par le SID de votre base de données SAP HANA.*

```bash
# Sauvegarde complète du TENANTDB - LUN JEU DIM
0 0 * * 1,4,7 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA FOR <SID> USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_COMPLETE_BACKUP');"
 
# Sauvegarde différentielle du TENANTDB - MAR MER VEN SAM
0 0 * * 2,3,5,6 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA DIFFERENTIAL FOR <SID> USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_DIFFERENTIAL_BACKUP');"
 
# Sauvegarde complète du SYSTEMDB - DIM
0 0 * * 7 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_COMPLETE_BACKUP);"
```

> [!primary]
> L'option `-U` permet d'appeler une clé stockée dans le hdbuserstore. Pour en savoir plus sur l'ajout d'une clé dans le hdbuserstore, nous vous invitons à prendre connaissance de la documentation SAP disponible à [cette adresse](https://help.sap.com/docs/SAP_HANA_PLATFORM/b3ee5778bc2e4a089d3299b82ec762a7/ddbdd66b632d4fe7b3c2e0e6e341e222.html?version=2.0.02&locale=en-US).
>
> Dans cet exemple, la clé "BACKUP" a été créée contenant le couple identifiant / mot de passe d'un utilisateur sur la base de données SAP HANA ayant le rôle de sauvegarde. La liste des rôles devant être associés à cet utilisateur est disponible à [cette adresse](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c4b71703bb571014810ebb38dc59cf51.html).
>

### Restauration

Pour restaurer de votre base de données SAP HANA depuis une sauvegarde réalisée avec OVHcloud Backint Agent, vous pouvez réaliser les étapes suivantes depuis SAP HANA Studio :

> [!tabs]
> **Étape 1**
>> Sélectionnez le TENANTDB que vous souhaitez restaurer.
>>
>> Puis cliquez sur `Next`{.action}.
>>
>> ![hana_studio_recover_1](images/hana_studio_recover_1.png){.thumbnail}
>>
> **Étape 2**
>> Sélectionnez l'option que vous souhaitez utiliser pour restaurer votre TENANTDB :
>>
>> - Restaure à l'état le plus récent possible
>> - Restaure à une date et une heure précise
>> - Restaure via une sauvegarde précise
>> 
>> Puis cliquez sur `Next`{.action}.
>>
>> ![hana_studio_recover_2](images/hana_studio_recover_2.png){.thumbnail}
>>
> **Étape 3**
>> Veillez à sélectionner les options `Recover using the backup catalog`{.action} et `Search for the backup catalog in Backint only`{.action}.
>>
>> Puis cliquez sur `Next`{.action}.
>>
>> ![hana_studio_recover_3](images/hana_studio_recover_3.png){.thumbnail}
>>
> **Étape 4**
>> Le TENANTDB doit être éteint pour réaliser sa restauration.
>>
>> Veillez à arrêter votre système SAP lié à cette base de données SAP HANA avant de démarrer la restauration.
>>
>> ![hana_studio_recover_4](images/hana_studio_recover_4.png){.thumbnail}
>>
> **Étape 5**
>> Après quelques secondes, SAP HANA Studio affiche les sauvegardes complètes inscrites dans le catalogue de sauvegarde de votre base de données SAP HANA.
>>
>> Il est recommandé de cliquer sur `Check Availability`{.action} afin de s'assurer que la sauvegarde est toujours disponible dans le bucket Object Storage S3.
>>
>> Puis cliquez sur `Next`{.action}.
>>
>> ![hana_studio_recover_5](images/hana_studio_recover_5.png){.thumbnail}
>> 
> **Étape 6**
>> Si vous n'avez pas modifié la localisation de vos sauvegardes des fichiers de log, vous pouvez cliquer sur `Next`{.action}.
>>
>> Dans le cas contraire, veuillez indiquer le chemin. Puis cliquez sur `Next`{.action}.
>> 
>> ![hana_studio_recover_6](images/hana_studio_recover_6.png){.thumbnail}
>>
> **Étape 7**
>> Veillez à sélectionner l'option `Third-Party Backup Tool (Backint)`{.action} et à désélectionner l'option `File System`{.action}.
>>
>> Puis cliquez sur `Next`{.action}.
>>
>> ![hana_studio_recover_7](images/hana_studio_recover_7.png){.thumbnail}
>>
> **Étape 8**
>> La restauration de votre base de données SAP HANA démarre.
>>
>> ![hana_studio_recover_8](images/hana_studio_recover_8.png){.thumbnail}
>>

Une fois la restauration réalisée avec succès, votre base de données SAP HANA est démarrée et disponible.

## Aller plus loin

- Afin d'améliorer la sécurité de vos sauvegardes, nous vous conseillons de mettre en place la [gestion de l'immutabilité](/pages/storage_and_backup/object_storage/s3_managing_object_lock/)
- Vous pouvez également [réaliser les sauvegardes SAP HANA avec OVHcloud Backint Agent pour SAP HANA sur plusieurs buckets Object Storage](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
