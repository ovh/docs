---
title: 'Utiliser Backup Storage sur un serveur dédié'
slug: services-backup-storage
excerpt: 'Découvrez comment activer et utiliser le service Backup Storage'
section: Stockage
---

**Dernière mise à jour le 17/06/2019**

## Objectif

Dans le cadre des offres de [serveurs dédiés](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/){.external}, un espace de sauvegarde de 500 Go par serveur est mis à disposition et vous permet de [sécuriser vos données](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/){.external}.

**Ce guide vous explique comment activer et utiliser cet espace de sauvegarde**.

## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
* Être connecté à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external}, partie `Dédié`{.action}.

## En pratique

### Activer votre Backup Storage

Connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur la page de votre serveur dans l’espace `Dédié`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action}, puis cliquez sur le bouton `Activer le Backup Storage`{.action}.

![Activer votre Backup Storage](images/backup-storage-01-edited.png){.thumbnail}


Ensuite, cliquez sur `Confirmer`{.action}.

![Activer votre Backup Storage](images/backup-storage-02.PNG){.thumbnail}

Vous recevrez alors un e-mail d'activation et votre Backup Storage sera configuré en quelques minutes.

### Configurer le contrôle d'accès

L'accès à votre espace de stockage est restreint par l'adresse IP à l'aide d'une liste de contrôle d'accès (<i>Access Control List</i> ou ACL). Seules les adresses IP de votre compte OVH enregistrées dans l’ACL pourront accéder au stockage. Les autres protocoles (NFS et CIFS) ne sont pas autorisés par défaut. Pour les autoriser, vous devrez créer une ACL.

#### Ajouter un accès backup

Connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur la page de votre serveur dans l’espace `Dédié`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action}, puis cliquez sur le bouton `Ajouter un accès`{.action}.

![Ajouter un accès backup](images/backup-storage-03-edited.png){.thumbnail}

Sélectionnez le bloc IP que vous souhaitez autoriser. Une fois celui-ci sélectionné, choisissez le protocole à autoriser, puis cliquez sur `Suivant`{.action}.

> [!primary]
>
> Vous pouvez uniquement autoriser des blocs d’adresses IP de votre compte OVH pour accéder au Backup Storage.
>

![Ajouter un accès backup](images/backup-storage-07-edited.png){.thumbnail}

Il vous reste à confirmer l’ajout de l’accès en cliquant sur `Terminer`{.action}.

![Ajouter un accès backup](images/backup-storage-08-edited.png){.thumbnail}

Vous pourrez alors accéder au Backup Storage de votre serveur à partir du bloc d’IP que vous avez sélectionné.

#### Modifier un accès

Pour modifier les protocoles d'un bloc d’IP autorisé, cliquez sur l'icône en forme de crayon correspondant au bloc IP que vous souhaitez modifier, puis cochez et/ou décochez les protocoles souhaités. Lorsque vous avez terminé, cliquez sur le bouton de validation pour enregistrer vos modifications.

![Modifier l’accès](images/modify_access.png){.thumbnail}

#### Supprimer un accès

Pour révoquer l'autorisation d'un bloc d’IP, cliquez sur l'icône de la corbeille qui apparaît à la fin de la ligne.

![Modifier l’accès](images/delete_access.png){.thumbnail}

Puis cliquez pour confirmer.

![Modifier l’accès](images/Confirm_IP_Removal.png){.thumbnail}

L'accès au Backup Storage sera désormais révoqué pour ce bloc d’IP.

### Changer votre mot de passe

Connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur la page de votre serveur dans l’espace `Dédié`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Mot de passe oublié ?`{.action}

![Changer votre mot de passe](images/backup-storage-04-edited.png){.thumbnail}

Ensuite, cliquez sur `Confirmer`{.action}.

![Changer votre mot de passe](images/backup-storage-09.PNG){.thumbnail}

Un e-mail de récupération de mot de passe sera envoyé à l'adresse e-mail enregistrée sur votre compte administrateur. Suivez les instructions qui y sont contenues pour réinitialiser votre mot de passe.

### Supprimer le Backup Storage

Connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur la page de votre serveur dans l’espace `Dédié`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action}, puis cliquez sur le bouton `Supprimer le Backup Storage`{.action}.

![Supprimer le Backup Storage](images/backup-storage-05-edited.png){.thumbnail}

Cliquez sur `Confirmer`{.action} sur le message d'avertissement pour procéder à la suppression.

![Supprimer le Backup Storage](images/backup-storage-10.PNG){.thumbnail}

Votre Backup Stockage sera supprimé après quelques minutes. Cette suppression est irréversible.

### Commander de l'espace disque supplémentaire

Connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et rendez-vous sur la page de votre serveur dans l’espace `Dédié`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action}, puis cliquez sur le bouton `Commander de l’espace disque`{.action}.

![Commander de l'espace disque supplémentaire](images/backup-storage-06-edited.png){.thumbnail}

Sélectionnez la capacité de stockage que vous souhaitez, puis cliquez sur `Suivant`{.action}.

![Commander de l'espace disque supplémentaire](images/backup-storage-11-edited.png){.thumbnail}

Lisez les conditions générales et validez votre demande en cliquant sur `Confirmer`{.action}.

![Commander de l'espace disque supplémentaire](images/backup-storage-12-edited.png){.thumbnail}

Un bon de commande va maintenant être créé. Une fois votre paiement effectué, l’espace de stockage supplémentaire sera mis à votre disposition.

### Utiliser le Backup Storage

> [!primary]
>
> Le service de Backup Storage n’effectue pas de sauvegarde automatique de vos données. Il ne fournit que l'espace et les protocoles d'accès. Il est de votre responsabilité de mettre en œuvre une stratégie de sauvegarde adéquate en utilisant les outils de votre choix. OVH ne pourra être tenu pour responsable des données contenues dans ces espaces.
>

#### FTP/FTPS

##### NcFTP (pour Linux)

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Cette commande ne supporte pas le protocole FTPS. Si vous avez besoin d’effectuer un transfert sécurisé, vous devrez utiliser le client lftp ou cURL.**

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.
* **File** : le nom du fichier que vous voulez sauvegarder.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le chemin d'accès au répertoire local dans lequel vous souhaitez enregistrer le fichier
* **File** : le chemin d’accès du fichier à télécharger

##### Curl (pour Linux)

> [!primary]
>
> Pour utiliser FTPS, vous devez changer le nom du Backup Storage. Par exemple, si le nom du Backup Storage est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ». Il vous faudra également ajouter l’argument \`-ssl\` à la commande ci-dessous.
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **File** : le nom du fichier que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# cd /LocalFolder
# curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
* **File** : le chemin d’accès du fichier à télécharger

##### lftp (pour Linux)

> [!primary]
>
> lftp utilise FTP+SSL/TLS par défaut. Vous devez donc changer le nom de votre Backup Storage. Par exemple, si son nom est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ».
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **File** : le nom du fichier que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# cd /LocalFolder
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
* **File** : le chemin d’accès du fichier à télécharger

##### Filezilla (pour Windows)

Après avoir installé FileZilla sur votre serveur, vous pouvez le configurer pour vous connecter à votre Backup Storage en utilisant les informations d'identification FTP qui vous ont été envoyées lorsque vous avez activé votre option de sauvegarde. Pour pouvoir vous connecter, vous aurez besoin du nom et du mot de passe de votre Backup storage.

#### NFS

Assurez-vous d'abord d’avoir autorisé vos blocs d’IP à accéder au stockage et à utiliser le protocole NFS. Selon votre système d'exploitation Linux, il est possible que vous deviez installer le client NFS et démarrer le service NFS/portmap.

Une fois le client NFS installé et le service portmap lancé, vous pouvez monter le partage NFS comme une partition normale comme indiqué ci-dessous :

```
# mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).
* **FolderMount** : le répertoire où vous souhaitez monter le partage NFS.

Une fois le partage monté, vous pouvez utiliser des commandes telles que **cp** et \`rsync\` comme vous le feriez avec un répertoire normal.

#### CIFS

##### Windows

Connectez-vous à votre serveur, ouvrez l'invite de commande et tapez la commande suivante :

```sh
net use z: \\HostName\ServiceName
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).

##### Linux

Ouvrez une connexion SSH à votre serveur et tapez la commande suivante :

```sh
# mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).
* **FolderMount** : le répertoire où vous souhaitez monter le partage (il doit déjà exister).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.