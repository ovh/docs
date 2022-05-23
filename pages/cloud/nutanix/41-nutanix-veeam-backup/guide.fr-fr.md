---
title: Configurer VEEAM Backup pour Nutanix       
slug: nutanix-veeam-backup
excerpt: "Installation de la sauvegarde VEEAM Backup sur un cluster Nutanix"
section: Sauvegardes
order: 02
---

**Dernière mise à jour le 23/05/2022**

## Objectif


Veeam backup est un logiciel de sauvegarde disponible pour Nutanix. 

**Apprenez à installer, configurer et utiliser VEEAM sur un cluster Nutanix**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via **Prism Central**. 
- D'avoir installé **Veeam Backup & Replication** sur une machine virtuelle de votre cluster Nutanix avec cette procédure [Installer Veeam Backup & Replication](https://docs.ovh.com/fr/storage/veeam-backup-replication/).
- De connaitre l'adresse IP publique utilisée par **Veeam Backup** pour accéder à Internet.
- de disposer de 4 Go de mémoires vive, 60 Go de stockage et 4 vCPU pour l'ajout d'une machine virtuelle supplémentaire lors de la configuration des extensions pour **Veeam Backup & Replication**.
- De posséder un stockage distant hors du cluster de type Enterprise File Storage disponible chez OVHcloud dont voici la présentation [Enterprise File Storage OVHcloud](https://www.ovhcloud.com/fr/storage-solutions/enterprise-file-storage/).

## En pratique

Nous allons personnaliser **Veeam Backup & Replication** pour l'utilisation sur un cluster Nutanix avec dépot distant de ce cluster chez OVHcloud avec la solution **Enterprise File Storage** d'OVHcloud.



### Ajouter un utilisateur dans **Prism Element pour Veeam Backup**

IL faut tout d'abord créer un utilisateur spécifique dans Prism Element pour l'utilisation de Veeam Backup.

Au travers de **Prism central** connectez-vous à **Prism Element** en cliquant sous **Cluster Quick Access** sur le cluster.

![Create User VEEAM PE 01](images/01-create-pe-veeamuser01.png){.thumbnail}

A partir de **Prism Element** allez dans les paramètres en cliquant sur l'icône représentant un `engrenage`{.action} en haut à droite.

![Create User VEEAM PE 02](images/01-create-pe-veeamuser02.png){.thumbnail}

Déroulez le menu à gauche à l'aide de la `barre de défilement`{.action}.

![Create User VEEAM PE 03](images/01-create-pe-veeamuser03.png){.thumbnail}

Cliquez sur `Local User Management`{.action}.

![Create User VEEAM PE 04](images/01-create-pe-veeamuser04.png){.thumbnail}

Cliquez sur le bouton `New User`{.action}.

![Create User VEEAM PE 05](images/01-create-pe-veeamuser05.png){.thumbnail}


Saisissez ces informations :

- **Username** : `svc_veeam`
- **First Name** : `Veeam`
- **Last Name** : `Backup`
- **Email** : `veeam@example.com`
- **Password** : `mot de passe`

> [!primary]
> Ces données sont fournies à titre d'exemple, l'adresse de messagerie est obligatoire mais n'est pas utilisée.

Cochez la case `Cluster Admin`{.action} et cliquez sur `Save`{.action}

![Create User VEEAM PE 06](images/01-create-pe-veeamuser06.png){.thumbnail}

Ce compte utilisateur est créé et il est dans la liste des utilisateurs de **Prism Element**.

![Create User VEEAM PE 07](images/01-create-pe-veeamuser07.png){.thumbnail}

### Télécharger et installer l'extension pour un cluster **Nutanix**

Connectez-vous sur la machine virtuelle où se trouve VEEAM Backup.

A partir d'un navigateur Web Télécharger la dernière version de l'extension sur ce lien [Extension AHV pour VEEAM](https://www.veeam.com/availability-nutanix-ahv-download.html), Vous devez disposer d'un compte d'utilisateur sur le site de **Veeam** vous pouvez le créer librement.

Lancez l'installation de l'extension.

> [!warning]
> Avant de lancer d'exécuter l'installation bien s'assurer que la console VEEAM BACKUP ne soit pas ouverte.
>
>


Double-cliquez sur l'installateur `NutanixAHPlugin_...`{.action}

![Addon Installation 01](images/02-install-addon-nutanix-veeam01.png){.thumbnail}

Acceptez les conditions générales d'utilisation du logiciel en sélectionnant `I accept the terms of the Veeam license agreement`{.action} et `I accept the terms of the 3rd party components license agreements`{.action} ensuite cliquez sur `Next`{.action}.

![Addon Installation 02](images/02-install-addon-nutanix-veeam02.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Addon Installation 03](images/02-install-addon-nutanix-veeam03.png){.thumbnail}

Cliquez sur `Install`{.action}.

![Addon Installation 04](images/02-install-addon-nutanix-veeam04.png){.thumbnail}

Patientez pendant l'installation.

![Addon Installation 05](images/02-install-addon-nutanix-veeam05.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Addon Installation 06](images/02-install-addon-nutanix-veeam06.png){.thumbnail}

### Intégrer le cluster Nutanix dans la configuration de **Veeam Backup**

Lors de La configuration de Veeam Backup pour Nutanix, une nouvelle machine virtuelle est ajoutée dans le cluster, elle sert d'interface entre le logiciel de sauvegarde **Veeam Backup** et le cluster.

Lancez la console **Veeam Backup** et cliquez sur `Connect`{.action}.

![Addon Cluster Nutanix to Veeam 01](images/03-addclusternutanix-to-veeam01.png){.thumbnail}

Positionnez-vous dans `Backup Infrastucture`{.action} dans le menu en bas à droite, choisissez `Managed Servers`{.action} et cliquez sur `Add Server`{.action}.

![Addon Cluster Nutanix to Veeam 02](images/03-addclusternutanix-to-veeam02.png){.thumbnail}

Cliquez sur `Nutanix AHV`{.action}.

![Addon Cluster Nutanix to Veeam 03](images/03-addclusternutanix-to-veeam03.png){.thumbnail}

Saisissez `l'adresse IP privée`{.action} de **Prism Element** dans **DNS name or IP address** et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 04](images/03-addclusternutanix-to-veeam04.png){.thumbnail}

Cliquez sur `Add`{.action} pour ajouter le compte utilisateur de **Prism Element**

![Addon Cluster Nutanix to Veeam 05](images/03-addclusternutanix-to-veeam05.png){.thumbnail}

Saisissez ces informations avec le compte créé précédemment dans **Prism Element** :

- **Username** : `svc_veeam`{.action}
- **Password** ! `Mot de passe`{.action}

Cliquez sur `OK`{.action}.

![Addon Cluster Nutanix to Veeam 06](images/03-addclusternutanix-to-veeam06.png){.thumbnail}

Vérifiez dans **Credentials** que le compte créé soit sélectionné et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 07](images/03-addclusternutanix-to-veeam07.png){.thumbnail}

Cliquez sur `Continue`{.action} pour valider le message d'avertissement concernant le certificat.

![Addon Cluster Nutanix to Veeam 08](images/03-addclusternutanix-to-veeam08.png){.thumbnail}

Cochez `Use the following IP address`{.action} et choisissez une adresse IP privée non utilisée (cette adresse sert au moment des sauvegardes et des restaurations de fichiers) , ensuite cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 09](images/03-addclusternutanix-to-veeam09.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 10](images/03-addclusternutanix-to-veeam10.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Addon Cluster Nutanix to Veeam 11](images/03-addclusternutanix-to-veeam11.png){.thumbnail}

Cliquez sur `Yes`{.action}.

![Addon Cluster Nutanix to Veeam 12](images/03-addclusternutanix-to-veeam12.png){.thumbnail}

Sélectionnez `Deploy a new proxy`{.action} et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 13](images/03-addclusternutanix-to-veeam13.png){.thumbnail}

Choisissez un `Nom`{.action} dans **Name** et cliquez sur `Next`{.action}. 

![Addon Cluster Nutanix to Veeam 14](images/03-addclusternutanix-to-veeam14.png){.thumbnail}

Cliquez sur `Configure`{.action}. 

![Addon Cluster Nutanix to Veeam 15](images/03-addclusternutanix-to-veeam15.png){.thumbnail}

Choisissez `une adresse IP`{.action} non utilisée sur le réseau local pour la machine virtuelle et cliquez sur `Ok`{.action}. 

![Addon Cluster Nutanix to Veeam 16](images/03-addclusternutanix-to-veeam16.png){.thumbnail}

Cliquez sur `Next`{.action}. 

![Addon Cluster Nutanix to Veeam 17](images/03-addclusternutanix-to-veeam17.png){.thumbnail}

Cliquez sur `Add`{.action} pour ajouter et créer le compte de connexion à la machine virtuelle spécifique à Veeam.

> [!warning]
> Notez bien le compte utilisateur créé ainsi que le mot de passe il pourra servir pour se connecter sur la nouvelle machine virtuelle
> au travers du navigateur WEB sans passer par le logiciel **Veeam backup** avec cette URL **https://adressipprive:8100**.

![Addon Cluster Nutanix to Veeam 18](images/03-addclusternutanix-to-veeam19.png){.thumbnail}

Saisissez ces informations avec le compte créé précédemment dans Prism Element :

- **Username** : `proxy_user`{.action}.
- **Password** : `Mot de passe`{.action}.

Cliquez sur `OK`{.action}.

![Addon Cluster Nutanix to Veeam 19](images/03-addclusternutanix-to-veeam19.png){.thumbnail}

Vérifiez le compte utilisateurs dans **Credentials** et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 20](images/03-addclusternutanix-to-veeam20.png){.thumbnail}

Sélectionnez la case à cocher `Allow access to all backup repositories`{.action} et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 21](images/03-addclusternutanix-to-veeam21.png){.thumbnail}

Patientez quelques minutes.

![Addon Cluster Nutanix to Veeam 22](images/03-addclusternutanix-to-veeam22.png){.thumbnail}

L'installation est terminée avec un Warning, n'en tenez pas compte c'est à cause du DNS qui n'arrive pas à résoudre le nom du serveur Veeam. Cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 23](images/03-addclusternutanix-to-veeam23.png){.thumbnail}

#### Modification du fichier host de la machine virtuelle d'interface.

> [!primary]
> 
> Cette opération est nécessaire si vous n'utilisez pas de serveur DNS en interne qui fait la résolution des noms d'ordinateurs.
> Notamment celui qui sert pour le logiciel Veeam Backup. 

Au travers de **Prism Central** connectez-vous à la machine virtuelle NUTANIX-PROXY. 

Cliquez en haut à gauche sur `icône`{.action} du menu principal et choisissez `VMs`{.action}.

![Configure Nutanix PROXY HOST 01](images/03-modify-etchostproxy01.png){.thumbnail}

Cliquez sur la machine virtuelle NUTANIX-PROXY. 

![Configure Nutanix PROXY HOST 02](images/03-modify-etchostproxy02.png){.thumbnail}

Cliquez sur `Launch console`{.action}.

![Configure Nutanix PROXY HOST 03](images/03-modify-etchostproxy03.png){.thumbnail}

Connectez-vous avec le compte utilisateur créé précédemment et le mot de passe de ce compte.

![Configure Nutanix PROXY HOST 04](images/03-modify-etchostproxy04.png){.thumbnail}

A partir de la console modifier le ficher **/etc/hosts**

```bash
proxy_user@NUTANIX-PROXY~$sudo nano /etc/hosts
[sudo] password for proxy_user:
```
Ajoutez cette information qui correspond à l'adresse IP et le nom de la machine virtuelle ou est installée Veeam Backup.

```bash
192.168.0.245 VEEAM-BACKUP 
```

Enregistrez le fichier et lancez cette commande
```bash
proxy_user@NUTANIX-PROXY~$sudo /etc/init.d/networking restart
[sudo] password for proxy_user:
```

### Création du volume **Enterprise File Storage au travers de l'espace client d'OVHcloud

Au travers de l'espace client d'OVHcloud allez dans `Storage and Backup`{.action}, faites dérouler `Enterprise File Storage`{.action} et cliquez sur le `stockage`{.action} qui servira pour la sauvegarde **Veeam Backup**.

![Create Enterprise Storage Volume 01](images/04-create-enterprise-storage-volume01.png){.thumbnail}

Sélectionnez l'onglet `Volumes`{.action} et cliquez sur `Create a volume`{.action}.

![Create Enterprise Storage Volume 02](images/04-create-enterprise-storage-volume02.png){.thumbnail}

Choisissez ces options :

- **Volume name (optional)** : `BACKUP`
- **Description (optional)** : `BACKUP`
- **Volume size** : `500`

Ensuite liquez sur `Create a volume`{.action} pour créer un volume de 500 Go.

![Create Enterprise Storage Volume 03](images/04-create-enterprise-storage-volume03.png){.thumbnail}

Modifier les paramètres du nouveau volume en cliquant à droite sur l'icône `...`{.action} et choisissez l'option `Modify the volume`{.action}

![Create Enterprise Storage Volume 04](images/04-create-enterprise-storage-volume04.png){.thumbnail}

Se positionnez sur l'onglet `Access Control List(ACL)`{.action} et cliquez sur `Add a new access`{.action}.

![Create Enterprise Storage Volume 05](images/04-create-enterprise-storage-volume05.png){.thumbnail}

Saisisissez dans **Access to** `L'adresse IP publique utilisée sur la VM Veeam Backup qui lui permet d'accèder à INTERNET`{.action} choisissez dans **Access permissions** `Read and write`{.action} ensuite cliquez sur l'icône de `validation`{.action}.

![Create Enterprise Storage Volume 06](images/04-create-enterprise-storage-volume06.png){.thumbnail}

Un message vous informe que le contrôle d'accès a été créé.

![Create Enterprise Storage Volume 07](images/04-create-enterprise-storage-volume07.png){.thumbnail}

Cliquez sur l'onglet **General information** et copiez l'information contenue dans `Mount path` qui doit avoir cette forme **adresseip://share_name**. 

> [!info]
> L'élément copié est le dépôt qui sera utilisé par **Veeam Backup**.
>

![Create Enterprise Storage Volume 08](images/04-create-enterprise-storage-volume08.png){.thumbnail}


### Ajouter le dépôt **Enterprise File Storage** pour le stockage des sauvegardes

A partir de la console **Veeam Backup** cliquez en bas à droite sur `Backup Infrastructure`{.action}, choisissez `Backup Repositories`{.action} et cliquez sur `Add repository`{.action}. 

![Add Enterprise File Storage repository 01](images/05-add-enterprise-file-storage-repository01.png){.thumbnail}

Choisissez `Network attached storage`{.action}. 

![Add Enterprise File Storage repository 02](images/05-add-enterprise-file-storage-repository02.png){.thumbnail}

Cliquez sur `NFS share`{.action}.

![Add Enterprise File Storage repository 03](images/05-add-enterprise-file-storage-repository03.png){.thumbnail}

Saisissez un `Nom`{.action} dans **Name** et cliquez sur `Next`{.action}.

![Add Enterprise File Storage repository 04](images/05-add-enterprise-file-storage-repository04.png){.thumbnail}

Saisissez ou coller le nom du volume partagée dans **Enterprise storage** dans `Shared folder:`{.action} et cliquez sur `Next`{.action}.

![Add Enterprise File Storage repository 05](images/05-add-enterprise-file-storage-repository05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Add Enterprise File Storage repository 06](images/05-add-enterprise-file-storage-repository06.png){.thumbnail}

Cliquer sur `Next`{.action}.

![Add Enterprise File Storage repository 07](images/05-add-enterprise-file-storage-repository07.png){.thumbnail}

Cliquez sur `Apply`{.action}.

![Add Enterprise File Storage repository 08](images/05-add-enterprise-file-storage-repository08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Add Enterprise File Storage repository 09](images/05-add-enterprise-file-storage-repository09.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Add Enterprise File Storage repository 10](images/05-add-enterprise-file-storage-repository10.png){.thumbnail}


### Mise en place d'une sauvegarde

Nous allons créer une tâche de sauvegarde automatisée.

Dans **Veeam backup** cliquez en bas sur `Home`{.action} , ensuite ouvrez le menu `Backup Job`{.action} et choisissez `Nutanix AHV`{.action}.

![Create Backup JOB 01](images/06-createbackupjob01.png){.thumbnail}

L'interface WEB du **Proxy AHV** s'ouvre.

Saisissez un `nom`{.action} dans **Name**, cochez l'option `Backup job`{.action} ensuite cliquez sur `Next`{.action}.

![Create Backup JOB 02](images/06-createbackupjob02.png){.thumbnail}

Cliquez sur le bouton `Add`{.action}.

![Create Backup JOB 03](images/06-createbackupjob03.png){.thumbnail}

Sélectionnez les machines virtuelles que vous voulez sauvegarder en utilisant la `case à cocher`{.action} à gauche des machines virtuelles. et cliquez sur `Add`{.action}.

![Create Backup JOB 04](images/06-createbackupjob04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Create Backup JOB 05](images/06-createbackupjob05.png){.thumbnail}

Sélectionnez le dépôt dans  `Backup repository`{.action} et cliquez sur `Next`{.action}.

![Create Backup JOB 06](images/06-createbackupjob06.png){.thumbnail}

Cochez la case `Run the job automatically`{.action}, choisissez `l'heure de sauvegarde`{.action} et cliquez sur `Next`{.action}.

![Create Backup JOB 07](images/06-createbackupjob07.png){.thumbnail}

Cliquez sur `Finish`{.action} pour enregistrer la tâche de sauvegarde.

![Create Backup JOB 08](images/06-createbackupjob07.png){.thumbnail}

La sauvegarde est visible au travers de l'interface WEB du **Proxy AHV**.

![Create Backup JOB 09](images/06-createbackupjob09.png){.thumbnail}

Revenez dans la console **Veeam Backup** à partir du menu `Home`{.action} en bas à gauche et cliquez sur `Jobs`{.action} pour voir le travail de sauvegarde créé.

![Create Backup JOB 10](images/06-createbackupjob10.png){.thumbnail}

### Restauration d'un ordinateur virtuel

Pour tester le bon fonctionnement des sauvegardes nous allons exécuter une tâche de restauration.

Cliquez en bas à droite sur `Home`{.action}, dans l'option `Restore`{.action} prenez `Nutanix AHV`{.action}.

![Restore VM 01](images/07-restorevm01.png){.thumbnail}

Cliquez sur `Restore from AHV backup`{.action}.

![Restore VM 02](images/07-restorevm02.png){.thumbnail}

Cliquez sur `Entire VM restore`{.action}.

![Restore VM 03](images/07-restorevm03.png){.thumbnail}

Cliquez sur `Add`{.action}.

![Restore VM 04](images/07-restorevm04.png){.thumbnail}

Faites défiler et sélectionnez une `machine virtuelle`{.action} et cliquez sur `Add`{.action}.

![Restore VM 05](images/07-restorevm05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 06](images/07-restorevm06.png){.thumbnail}

Choisissez l'option `restore to a new location or with different settings`{.action} et cliquez sur `Next`{.action}.

![Restore VM 07](images/07-restorevm07.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 08](images/07-restorevm08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 09](images/07-restorevm09.png){.thumbnail}

Renommez la VM dans `New name`{.action} et cliquez sur `Next`{.action}.

![Restore VM 10](images/07-restorevm10.png){.thumbnail}

Cliquez sur `Disconnect`{.action} pour isoler la machine virtuelle restaurée du réseau.

![Restore VM 11](images/07-restorevm11.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 12](images/07-restorevm12.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 13](images/07-restorevm13.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Restore VM 14](images/07-restorevm14.png){.thumbnail}

Un aperçu de l'état de la restauration se lance, il faut patienter quelques temps en fonction de la taille de la machine virtuelle.

![Restore VM 15](images/07-restorevm15.png){.thumbnail}


## Aller plus loin <a name="gofurther"></a>

[Documentation VEEAM concernant l'installation de VEEAM Backup pour Nutanix AHV](https://helpcenter.veeam.com/docs/van/userguide/installing.html?ver=30)

[Stockage chez OVHcloud](https://https://docs.ovh.com/fr/storage/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

