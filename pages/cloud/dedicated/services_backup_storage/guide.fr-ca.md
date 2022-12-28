---
title: 'Utiliser Backup Storage sur un serveur dédié'
slug: services-backup-storage
excerpt: 'Découvrez comment activer et accéder à votre espace de stockage supplémentaire'
section: Stockage
---

**Dernière mise à jour le 15/03/2021**

## Objectif

Les serveurs dédiés OVHcloud comprennent un espace de sauvegarde supplémentaire pour stocker les données et les fichiers de configuration importants. Cet espace est évolutif, sécurisé et indépendant du serveur principal.

**Ce guide vous explique comment activer et utiliser votre espace de sauvegarde**.

> [!primary]
> Pour plus de détails, nous vous recommandons de consulter la [page commerciale](https://www.ovhcloud.com/fr-ca/bare-metal/backup-storage/) de l'option Backup Storage.
>
> Ce guide ne s'applique pas aux services OVHcloud US.
>

## Prérequis

* Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external} dans votre compte OVHcloud.
* Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.
>

## En pratique

### Activer votre Backup Storage

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. Sous l'onglet `Backup Storage`{.action}, cliquez sur le bouton `Activer le Backup Storage`{.action}.

![Activer votre Backup Storage](images/backup-storage01.png){.thumbnail}

Cliquez sur `Confirmer`{.action} dans le menu contextuel qui s'affiche.

![Activer votre Backup Storage](images/backup-storage02.png){.thumbnail}

Votre Backup Storage sera configuré en quelques minutes. Vous recevrez un e-mail de confirmation dès que la configuration sera terminée.

### Configurer le contrôle d'accès

L'accès à votre espace de stockage est restreint par adresses IP à l'aide d'une liste de contrôle d'accès (<i>Access Control List</i> ou ACL). Seules les adresses IP de votre compte OVHcloud enregistrées dans l’ACL pourront accéder au stockage. Les protocoles d'accès (FTP, NFS et CIFS) ne sont pas autorisés par défaut mais peuvent être sélectionnés lors de l'ajout d'adresses IP.

#### Ajouter un accès backup

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Ajouter un accès`{.action}.

![Ajouter un accès backup](images/backup-storage03.png){.thumbnail}

Sélectionnez le bloc IP que vous souhaitez autoriser. Une fois celui-ci sélectionné, choisissez le(s) protocole(s) à autoriser, puis cliquez sur `Suivant`{.action}.

> [!primary]
>
> Seuls des blocs d'adresses IP de votre compte OVHcloud peuvent être ajoutés à l'ACL depuis votre espace client.
>

![Ajouter un accès backup](images/backup-storage04.png){.thumbnail}

Confirmez en cliquant sur `Terminer`{.action}.

Vous pourrez alors accéder au Backup Storage de votre serveur à partir du bloc d’IP que vous avez sélectionné.

#### Modifier ou supprimer un accès au backup

Une fois le service activé, votre table ACL s'affiche dans l'onglet `Backup storage`{.action}. Cliquez sur `...`{.action} à droite d'un bloc IP pour ouvrir le menu d'accès.

![Ajouter un accès backup](images/backup-storage05.png){.thumbnail}

Pour modifier les protocoles d'un bloc IP autorisé, cliquez sur `Modifier l'accès`{.action} et sélectionnez/désélectionnez les protocoles dans le menu qui apparaît. Enregistrez les modifications en cliquant sur `Confirmer`{.action}.

Pour supprimer l'autorisation d'un bloc IP, cliquez sur `Supprimer l'accès`{.action} puis sur `Confirmer`{.action} dans le menu qui apparaît.

#### Accéder au Backup Storage depuis une IP externe à votre service <a name="accessbackup"></a>

L'accès à votre Backup Storage peut être restreint au service auquel il est lié via votre espace client OVHcloud.

Afin de pouvoir ajouter d'autres adresses IP de services différents, vous pouvez utiliser l'API OVHcloud.
Cela vous permettra alors de récupérer vos backups depuis un service d'une autre localisation.

> [!warning]
> Seules les adresses IP OVHcloud peuvent être autorisées.
>

Connectez-vous sur [api.ovh.com](https://ca.api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/features/backupFTP/access
>

Renseignez les champs ainsi :

- `serviceName` : le nom de votre serveur dédié
- `cifs` : cochez si nécessaire
- `ftp` : cochez si nécessaire
- `ipBlock` : renseignez l'IP qui aura accès sous la forme `1.2.3.4/32`
- `nfs` : cochez si nécessaire

![apiacladdress](images/aclapi01.png){.thumbnail}

Afin de vérifier que votre adresse IP est bien autorisée, utilisez l'appel suivant :

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/features/backupFTP/access
>

![apiacladdress](images/aclapi02.png){.thumbnail}

### Réinitialiser votre mot de passe

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Mot de passe oublié ?`{.action}.

Après avoir cliqué sur `Confirmer`{.action} dans la fenêtre qui apparaît alors, un e-mail de récupération de mot de passe sera envoyé à l'adresse e-mail enregistrée sur votre compte administrateur. Suivez les instructions qui y sont contenues pour réinitialiser votre mot de passe.

### Supprimer le Backup Storage

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Supprimer le Backup Storage`{.action}.

Cliquez sur `Confirmer`{.action} sur le message d'avertissement pour procéder à la suppression. Votre Backup Storage sera supprimé après quelques minutes. Toutes les données de l'espace de stockage seront supprimées.

### Commander de l'espace disque supplémentaire

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. Sélectionnez ensuite l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Commander de l’espace disque`{.action}.

![Commander de l'espace disque supplémentaire](images/backup-storage06.png){.thumbnail}

Sélectionnez la capacité de stockage que vous souhaitez commander, puis cliquez sur `Suivant`{.action}.

Prenez connaissance de la tarification et des conditions générales et validez votre commande en cliquant sur `Confirmer`{.action}.
Un bon de commande sera créé. Une fois votre paiement enregistré, vous serez notifié de l'extension de votre espace de stockage.

### Utiliser le Backup Storage

> [!primary]
>
> Le service de Backup Storage n’effectue pas de sauvegarde automatique de vos données. Il ne fournit que l'espace et les protocoles d'accès. Il est de votre responsabilité de mettre en œuvre une stratégie de sauvegarde adéquate en utilisant les outils de votre choix. OVHcloud ne pourra être tenu pour responsable des données contenues dans ces espaces.
>

#### FTP/FTPS

##### NcFTP (pour Linux)

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Cette commande ne supporte pas le protocole FTPS. Si vous avez besoin d’effectuer un transfert sécurisé, vous devrez utiliser le client lftp ou cURL.**

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.
* **File** : le nom du fichier que vous voulez sauvegarder.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le chemin d'accès au répertoire local dans lequel vous souhaitez enregistrer le fichier
* **File** : le chemin d’accès du fichier à télécharger

##### Curl (pour Linux)

> [!primary]
>
> Pour utiliser FTPS, vous devez changer le nom du Backup Storage. Par exemple, si le nom du Backup Storage est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ». Il vous faudra également ajouter l’argument \`-ssl\` à la commande ci-dessous.
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **File** : le nom du fichier que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# cd /LocalFolder
# curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
* **File** : le chemin d’accès du fichier à télécharger

##### lftp (pour Linux)

> [!primary]
>
> lftp utilise FTP+SSL/TLS par défaut. Vous devez donc changer le nom de votre Backup Storage. Par exemple, si son nom est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ».
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **File** : le nom du fichier que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
# tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
* **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
# cd /LocalFolder
# lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **FtpUsername** : votre nom d'utilisateur FTP.
* **FtpPassword** : votre mot de passe FTP.
* **HostName** : le nom de votre Backup Storage.
* **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
* **File** : le chemin d’accès du fichier à télécharger

##### Filezilla (pour Windows)

Après avoir installé FileZilla sur votre serveur, vous pouvez le configurer pour vous connecter à votre Backup Storage en utilisant les informations d'identification FTP qui vous ont été envoyées lorsque vous avez activé votre option de sauvegarde. Pour pouvoir vous connecter, vous aurez besoin du nom et du mot de passe de votre Backup storage.

#### NFS

Assurez-vous d'abord d’avoir autorisé vos blocs d’IP à accéder au stockage et à utiliser le protocole NFS. Selon votre système d'exploitation Linux, il est possible que vous deviez installer le client NFS et démarrer le service NFS/portmap.

Une fois le client NFS installé et le service portmap lancé, vous pouvez monter le partage NFS comme une partition normale comme indiqué ci-dessous :

```
# mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).
* **FolderMount** : le répertoire où vous souhaitez monter le partage NFS.

Une fois le partage monté, vous pouvez utiliser des commandes telles que **cp** et \`rsync\` comme vous le feriez avec un répertoire normal.

#### CIFS

##### Windows

Connectez-vous à votre serveur, ouvrez l'invite de commande et tapez la commande suivante :

```sh
net use z: \\HostName\ServiceName
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).

##### Linux

Ouvrez une connexion SSH à votre serveur et tapez la commande suivante :

```sh
# mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

* **HostName** : le nom de votre Backup Storage.
* **ServiceName** : le nom de votre serveur (exemple : « ns0000000.ip-123-123-123.net »).
* **FolderMount** : le répertoire où vous souhaitez monter le partage (il doit déjà exister).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
