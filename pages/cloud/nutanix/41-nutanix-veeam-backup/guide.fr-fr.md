---
title: Configurer VEEAM Backup pour Nutanix       
slug: nutanix-veeam-backup
excerpt: "Installation de la sauvegarde VEEAM Backup sur un cluster Nutanix"
section: Sauvegardes
order: 02
---

**Dernière mise à jour le 04/05/2022**

## Objectif


Veeam backup for Nutanix est un logiciel de sauvegarde disponible pour Nutanix. 

**Apprenez à installer, configurer et utiliser VEEAM sur un cluster Nutanix sur un dossier partagé**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>



## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central. 
- D'avoir installé VEEAM Backup et Replication sur une machine virtuelle de votre cluster Nutanix avec cette procédure [Installer Veeam Backup & Replication](https://docs.ovh.com/fr/storage/veeam-backup-replication/)
- d'avoir 4 Go de mémoires vive, 60 Go de stockage et 4 vCPU pour une machine virtuelle supplémentaire nécessaire au bon fonctionnement des sauvegardes d'un cluster Nutanix avec le logiciel **Veeam Backup**



## En pratique

Nous allons personnaliser VEEAM Backup & Replication pour l'utilisation sur un cluster Nutanix avec une sauvegarde distante de type **NAS** en **SMB**. 

### Ajouter un utilisateur dans **Prism Element pour Veeam Backup**

IL faut tout d'abord créer un utilisateur spécifique dans Prism Element pour l'utilisation de Veeam Backup.

Au travers de **Prism central** connectez-vous sur **Prism Element** en cliquant sous **Cluster Quick Access** sur le cluster.

![Create User VEEAM PE 01](images/01-create-pe-veeamuser01.png){.thumbnail}

A partir de **Prism Element** allez dans les paramètres en cliquant sur l'icone representant un `engrenage`{.action} en haut à droite.

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

Ce compte utilisateur est créé et il est  dans la liste des utilisateurs de **Prism Element**.

![Create User VEEAM PE 07](images/01-create-pe-veeamuser07.png){.thumbnail}

### Télécharger et installer l'extension pour un cluster **Nutanix**

Connectez-vous sur la machine virtuelle où se trouve VEEAM Backup.

A partir d'un navigateur Web Télécharger la dernière version de l'extension sur ce lien [Extension AHV pour VEEAM](https://www.veeam.com/availability-nutanix-ahv-download.html), Si vous n'avez pas un compte utilisateur sur le site de **Veeam** il faudra le créer, ce compte est gratuit.

Lancez l'installation de l'extension.

> [!warning]
> Avant de lancer d'exécuter l'installation bien s'assurer que la console VEEAM BACKUP ne soit pas lancée.
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

Saisissez ces informations avec le compte créé précedemment dans Prism Element :

- **Username** : `svc_veeam`{.action}
- **Password** ! `Mot de passe`{.action}

Cliquez sur `OK`{.action}.

![Addon Cluster Nutanix to Veeam 06](images/03-addclusternutanix-to-veeam06.png){.thumbnail}

Vérifiez dans **Credentials** que le compte créé soit sélectionné et cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 07](images/03-addclusternutanix-to-veeam07.png){.thumbnail}

Cliquez sur `Continue`{.action} pour valider le message d'avertissement concernant le certificat.

![Addon Cluster Nutanix to Veeam 08](images/03-addclusternutanix-to-veeam08.png){.thumbnail}

Cochez `Use the following IP address`{.action} et choisissez une adresse IP privé non utilisée (cette adresse sert au moment des sauvegardes et des restaurations de fichiers) , ensuite cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 09](images/03-addclusternutanix-to-veeam09.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Addon Cluster Nutanix to Veeam 10](images/03-addclusternutanix-to-veeam10.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Addon Cluster Nutanix to Veeam 11](images/03-addclusternutanix-to-veeam11.png){.thumbnail}

Cliquez sur `Yes`{.action}.

![Addon Cluster Nutanix to Veeam 12](images/03-addclusternutanix-to-veeam12.png){.thumbnail}

Selectionnez `Deploy a new proxy`{.action} et cliquez sur `Next`{.action} 

![Addon Cluster Nutanix to Veeam 13](images/03-addclusternutanix-to-veeam13.png){.thumbnail}

Choisissez un `Nom`{.action} dans **Name** et cliquez sur `Next`{.action} 

![Addon Cluster Nutanix to Veeam 14](images/03-addclusternutanix-to-veeam14.png){.thumbnail}

Cliquez sur `Configure`{.action} 

![Addon Cluster Nutanix to Veeam 15](images/03-addclusternutanix-to-veeam15.png){.thumbnail}

Choisissez `une adresse IP`{.action} non utilisée sur le réseau local pour la machine virtuelle et cliquez sur `Ok`{.action} 

![Addon Cluster Nutanix to Veeam 16](images/03-addclusternutanix-to-veeam16.png){.thumbnail}

Cliquez sur `Next`{.action} 

![Addon Cluster Nutanix to Veeam 17](images/03-addclusternutanix-to-veeam17.png){.thumbnail}

Cliquez sur `Add`{.action} pour ajouter et créer le compte de connexion à la machine virtuelle spécifique à Veeam.

> [!warning]
> Notez bien le compte utilisateur créé ainsi que le mot de passe il pourra servir pour se connecter sur la nouvelle machine virtuelle
> au travers du navigateur WEB.

![Addon Cluster Nutanix to Veeam 18](images/03-addclusternutanix-to-veeam19.png){.thumbnail}

Saisissez ces informations avec le compte crée précèdemment dans Prism Element :

- **Username** : `proxy_user`{.action}
- **Password** : `Mot de passe`{.action}

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
> Cette opération est nécessaire si vous n'utilisez pas de serveur DNS en interne qui fait la résolution des nom d'ordinateurs
> Notamment celui qui sert pour le logiciel Veeam Backup. 

Au travers de Prism Central connectez vous à la machine virtuelle NUTANIX-PROXY. 

Cliquez en haut à gauche sur `icône`{.action} du menu principal et choisissez `VMs`{.action}.

![Configure Nutanix PROXY HOST 01](images/03-modify-etchostproxy01.png){.thumbnail}


Cliquez sur la machine virtuelle NUTANIX-PROXY. 

![Configure Nutanix PROXY HOST 02](images/03-modify-etchostproxy02.png){.thumbnail}

cliquez sur `Launch console`{.action}.

![Configure Nutanix PROXY HOST 03](images/03-modify-etchostproxy03.png){.thumbnail}

Connectez vous avec le compte utilisateur créé précedemment et le mot de passe de ce compte.

![Configure Nutanix PROXY HOST 04](images/03-modify-etchostproxy04.png){.thumbnail}

A partir de la console modifier le ficher **/etc/hosts**

```bash
proxy_user@NUTANIX-PROXY~$sudo nano /etc/hosts
[sudo] password for proxy_user:
```
Ajoutez  cette information qui est l'adresse IP et le nom de la machine virtuelle ou est installée Veeam Backup.

```bash
192.168.0.245 VEEAM-BACKUP 
```

Enregistrez le fichier et lancez cette commande
```bash
proxy_user@NUTANIX-PROXY~$sudo /etc/init.d/networking restart
[sudo] password for proxy_user:
```
### Ajouter un dépot pour les sauvegardes

Nous allons rajouter un stockage SMB qui se trouve sur un site distant accessible au travers d'un VPN.

Au travers de l'interface Veeam Backup cliquez en bas à droite sur `Backup Infrastructure`{.action}, choisissez `Backup Repositories`{.action} et cliquez sur `Add repository`{.action}. 

![Add SMB reposiory 01](images/04-add-smb-repository01.png){.thumbnail}

Choisissez `Network attached storage`{.action}. 

![Add SMB reposiory 02](images/04-add-smb-repository02.png){.thumbnail}

CLiquez sur `SMB share`{.action}. 

![Add SMB reposiory 03](images/04-add-smb-repository03.png){.thumbnail}

Saisissez le `nom du dépot`{.action} dans la zone de saisie **Name** et cliquez sur `Next`{.action}. 

![Add SMB reposiory 04](images/04-add-smb-repository04.png){.thumbnail}

Ecrivez le `nom UNC`{.action} du partage dans **Shared folder** cochez la case `This share requires access credentials`{.action} et cliquez sur `Add`{.action}. 

![Add SMB reposiory 05](images/04-add-smb-repository05.png){.thumbnail}

Saisir le nom d'utilisateur dans `Username`{.action} ainsi que son mot de passe dans `Password`{.action} et cliquez sur `OK`{.action}

![Add SMB reposiory 06](images/04-add-smb-repository06.png){.thumbnail}

Vérifiez que l'utilisateur apparraisse bien et cliquez sur `Next`{.action}

![Add SMB reposiory 07](images/04-add-smb-repository07.png){.thumbnail}

Cliquez sur `Next`{.action}

![Add SMB reposiory 08](images/04-add-smb-repository08.png){.thumbnail}

Cliquez sur `Apply`{.action}

![Add SMB reposiory 09](images/04-add-smb-repository09.png){.thumbnail}

Cliquez sur `Next`{.action}

![Add SMB reposiory 10](images/04-add-smb-repository10.png){.thumbnail}

Cliquez sur `Finish`{.action}

![Add SMB reposiory 11](images/04-add-smb-repository11.png){.thumbnail}

Cliquez sur `No`{.action}

![Add SMB reposiory 12](images/04-add-smb-repository12.png){.thumbnail}

Le nouveau dépot apparait et est utilisable pour des sauvegardes

![Add SMB reposiory 13](images/04-add-smb-repository13.png){.thumbnail}

### Mise en place d'une sauvegarde

Nous allons créer une tâche de sauvegarde automatisée.

Dans Veeam backup cliquez en bas sur `No`{.action} , ensuite ouvrez le menu `Backup Job`{.action} et choisissez `Nutanix AHV`{.action}

![Create Backup JOB 01](images/05-createbackupjob01.png){.thumbnail}

Saississez un nom dans `Name`{.action} et cochez l'option `Backup job`{.action} ensuite cliquez sur `Next`{.action}

![Create Backup JOB 02](images/05-createbackupjob02.png){.thumbnail}

Cliquez sur le bouton  `Add`{.action}

![Create Backup JOB 03](images/05-createbackupjob03.png){.thumbnail}

Sélectionnez les machines virtuelles que vous voulez sauvegarder en utilisant la  `case à cocher`{.action} à gauche des machines virtuelles que vous voulez sauvegarder.

![Create Backup JOB 04](images/05-createbackupjob04.png){.thumbnail}

Cliquez sur `Next`{.action}

![Create Backup JOB 05](images/05-createbackupjob05.png){.thumbnail}

Sélectionnez le dépot dans  `Backup repository`{.action} et cliquez sur `Next`{.action}

![Create Backup JOB 06](images/05-createbackupjob06.png){.thumbnail}

Cochez la case `Run the job automatically`{.action}, choisissez l'heure de sauvegarde et cliquez sur `Next`{.action}

![Create Backup JOB 07](images/05-createbackupjob07.png){.thumbnail}

Cliquez sur `Finish`{.action} pour finir la création de la tâche de sauvegarde.

![Create Backup JOB 08](images/05-createbackupjob07.png){.thumbnail}

### Restauration d'un ordinateur virtuel

Pour tester le bon fonctionnement des sauvegardes nous allons créer une tâche de restauration

Se positionner dans le menu en bas sur `Home`{.action} choisissez dans le bandeau du haut `Restore`{.action} et prenez `Nutanix AHV`{.action}.

![Restore VM 01](images/06-restorevm01.png){.thumbnail}

Cliquez sur `Restore from AHV backup`{.action}.

![Restore VM 02](images/06-restorevm02.png){.thumbnail}

Cliquez sur `Entire VM restore`{.action}.

![Restore VM 03](images/06-restorevm03.png){.thumbnail}

Cliquez sur `Add`{.action}.

![Restore VM 04](images/06-restorevm04.png){.thumbnail}

Faites défiler et sélectionnez une `machine virtuelle`{.action} et cliquez sur `Add`{.action}.

![Restore VM 05](images/06-restorevm05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 06](images/06-restorevm06.png){.thumbnail}

Choisissez l'option `restore to a new location or with different settings`{.action} et cliquez sur `Next`{.action}.

![Restore VM 07](images/06-restorevm07.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 08](images/06-restorevm08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 09](images/06-restorevm09.png){.thumbnail}

Renommez la VM dans `New name`{.action} et cliquez sur `Next`{.action}.

![Restore VM 10](images/06-restorevm10.png){.thumbnail}

Cliquez sur `Disconnect`{.action} pour isoler la machine virtuelle restaurée du réseau.

![Restore VM 11](images/06-restorevm11.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 12](images/06-restorevm12.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Restore VM 13](images/06-restorevm13.png){.thumbnail}

Cliquez sur `Finish`{.action}.

![Restore VM 14](images/06-restorevm14.png){.thumbnail}

Un apercu de l'état de la restauration se lance, il faut patienter le temps de la restauration.

![Restore VM 15](images/06-restorevm15.png){.thumbnail}


## Aller plus loin <a name="gofurther"></a>

[Documentation VEEAM concernant l'installation de VEEAM Backup](https://helpcenter.veeam.com/docs/van/userguide/installing.html?ver=30)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

