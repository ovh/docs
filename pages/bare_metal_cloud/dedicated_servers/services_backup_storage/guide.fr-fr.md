---
title: "Utiliser Backup Storage sur un serveur dédié"
excerpt: "Activez et accédez à l'espace de sauvegarde inclus avec votre serveur dédié OVHcloud pour vos sauvegardes de fichiers"
updated: 2026-03-25
---

## Objectif

Les serveurs dédiés OVHcloud comprennent un espace de sauvegarde supplémentaire pour stocker les données et les fichiers de configuration importants. Cet espace est évolutif, sécurisé et indépendant du serveur principal.

**Ce guide vous explique comment activer et utiliser votre espace de sauvegarde**.

> [!primary]
> Pour plus de détails, nous vous recommandons de consulter la [page commerciale](/links/bare-metal/backup-storage) de l'option Backup Storage.
>
> Ce guide ne s'applique pas aux services OVHcloud US.
>

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud.

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.
>

## En pratique

### Activer votre Backup Storage

Sous l'onglet `Backup Storage`{.action}, cliquez sur le bouton `Activer le Backup Storage`{.action}.

![Bouton d'activation du backup storage dans l'onglet Backup storage](images/backup-storage01.png){.thumbnail}

Cliquez sur `Confirmer`{.action} dans le menu contextuel qui s'affiche.

![Confirmation de l'activation du backup storage dans la fenêtre popup](images/backup-storage02.png){.thumbnail}

Votre Backup Storage sera configuré en quelques minutes. Vous recevrez un e-mail de confirmation dès que la configuration sera terminée.

### Configurer le contrôle d'accès

L'accès à votre espace de stockage est restreint par adresses IP à l'aide d'une liste de contrôle d'accès (*Access Control List* ou ACL). Seules les adresses IP de votre compte OVHcloud enregistrées dans l’ACL pourront accéder au stockage. Les protocoles d'accès (FTP, NFS et CIFS) ne sont pas autorisés par défaut mais peuvent être sélectionnés lors de l'ajout d'adresses IP.

#### Ajouter un accès backup

Sélectionnez l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Ajouter un accès`{.action}.

![Bouton Ajouter un acces dans l'onglet Backup storage](images/backup-storage03.png){.thumbnail}

Sélectionnez le bloc IP que vous souhaitez autoriser. Une fois celui-ci sélectionné, choisissez le(s) protocole(s) à autoriser, puis cliquez sur `Suivant`{.action}.

> [!primary]
>
> Seuls des blocs d'adresses IP de votre compte OVHcloud peuvent être ajoutés à l'ACL depuis votre espace client.
>

![Selectionner le bloc IP et les protocoles pour l'acces backup](images/backup-storage04.png){.thumbnail}

Confirmez en cliquant sur `Terminer`{.action}.

Vous pourrez alors accéder au Backup Storage de votre serveur à partir du bloc d’IP que vous avez sélectionné.

#### Modifier ou supprimer un accès au backup

Une fois le service activé, votre table ACL s'affiche dans l'onglet `Backup storage`{.action}. Cliquez sur `...`{.action} à droite d'un bloc IP pour ouvrir le menu d'accès.

![Tableau des ACL d'acces backup avec options modifier et supprimer](images/backup-storage05.png){.thumbnail}

Pour modifier les protocoles d'un bloc IP autorisé, cliquez sur `Modifier l'accès`{.action} et sélectionnez/désélectionnez les protocoles dans le menu qui apparaît. Enregistrez les modifications en cliquant sur `Confirmer`{.action}.

Pour supprimer l'autorisation d'un bloc IP, cliquez sur `Supprimer l'accès`{.action} puis sur `Confirmer`{.action} dans le menu qui apparaît.

#### Accéder au Backup Storage depuis une IP externe à votre service <a name="accessbackup"></a>

L'accès à votre Backup Storage peut être restreint au service auquel il est lié via votre espace client OVHcloud.

Afin de pouvoir ajouter d'autres adresses IP de services différents, vous pouvez utiliser [l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
Cela vous permettra alors de récupérer vos backups depuis un service d'une autre localisation.

> [!warning]
> Seules les adresses IP OVHcloud peuvent être autorisées.
>

Connectez-vous à la [console API OVHcloud](/links/api) avec les identifiants de votre compte client et utilisez l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/features/backupFTP/access
>

Modifiez les paramètres comme suit :

- `serviceName` : renseignez le nom interne de votre serveur (`ns1111111.ip-203-0-113.eu`).
- `cifs` : définissez ce paramètre sur `true` si vous utilisez ce protocole.
- `ftp` : définissez ce paramètre sur `true` si vous utilisez ce protocole.
- `ipBlock` : renseignez l'adresse IP qui y aura accès, sous la forme `203.0.113.100/32`.
- `nfs` : définissez ce paramètre sur `true` si vous utilisez ce protocole.

Cliquez sur le bouton `EXECUTE`{.action}.

Afin de vérifier que votre adresse IP est bien autorisée, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/features/backupFTP/access
>


### Réinitialiser votre mot de passe

Sélectionnez l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Mot de passe oublié ?`{.action}.

Après avoir cliqué sur `Confirmer`{.action} dans la fenêtre qui apparaît alors, un e-mail de récupération de mot de passe sera envoyé à l'adresse e-mail enregistrée sur votre compte administrateur. Suivez les instructions qui y sont contenues pour réinitialiser votre mot de passe.

### Supprimer le Backup Storage

Sélectionnez l'onglet `Backup Storage`{.action} puis cliquez sur le bouton `Supprimer le Backup Storage`{.action}.

Cliquez sur `Confirmer`{.action} sur le message d'avertissement pour procéder à la suppression. Votre Backup Storage sera supprimé après quelques minutes. Toutes les données de l'espace de stockage seront supprimées.

### Commander de l'espace disque supplémentaire

Sélectionnez l’onglet `Backup Storage`{.action} puis cliquez sur le bouton `Commander de l’espace disque`{.action}.

![Commander de l'espace disque supplementaire pour le backup storage](images/backup-storage06.png){.thumbnail}

Sélectionnez la capacité de stockage que vous souhaitez commander, puis cliquez sur `Suivant`{.action}.

Prenez connaissance de la tarification et des conditions générales et validez votre commande en cliquant sur `Confirmer`{.action}.
Un bon de commande sera créé. Une fois votre paiement enregistré, vous serez notifié de l'extension de votre espace de stockage.

### Utiliser le Backup Storage

> [!primary]
>
> Le service de Backup Storage n’effectue pas de sauvegarde automatique de vos données. Il ne fournit que l'espace et les protocoles d'accès. Il est de votre responsabilité de mettre en œuvre une stratégie de sauvegarde adéquate en utilisant les outils de votre choix. OVHcloud ne pourra être tenu pour responsable des données contenues dans ces espaces.
>

> [!warning]
>
> Le service Backup Storage a une limite de trois connexions simultanées par IP.
>

> [!primary]
> Pour récupérer le *Hostname* de votre Backup Storage, cliquez sur l'onglet `Backup Storage`{.action} dans l'interface du serveur dédié concerné. Le *Hostname* est habituellement écrit sous la forme `ftpback-rbxX-YYY.ip-Z.Z.Z.net` ou `ftpback-bhsX-YYY.ip-Z.Z.Z.net`.
>

#### FTP/FTPS

##### NcFTP (pour Linux)

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Cette commande ne supporte pas le protocole FTPS. Si vous avez besoin d’effectuer un transfert sécurisé, vous devrez utiliser le client lftp ou cURL.**

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.
- **File** : le nom du fichier que vous voulez sauvegarder.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **LocalFolder** : le chemin d'accès au répertoire local dans lequel vous souhaitez enregistrer le fichier
- **File** : le chemin d’accès du fichier à télécharger

##### Curl (pour Linux)

> [!primary]
>
> Pour utiliser FTPS, vous devez changer le nom du Backup Storage. Par exemple, si le nom du Backup Storage est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ». Il vous faudra également ajouter l’argument \`-ssl\` à la commande ci-dessous.  
> Attention, si le Backup Storage est situé au Canada (BHS), vous devrez le changer sous la forme « ftpback-bhsX-YYY.mybackup.ovh.ca ».
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **File** : le nom du fichier que vous voulez sauvegarder.
- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
- **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
- **File** : le chemin d’accès du fichier à télécharger

#### lftp (pour Linux)

> [!primary]
>
> lftp utilise FTP+SSL/TLS par défaut. Vous devez donc changer le nom de votre Backup Storage. Par exemple, si son nom est « ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net », vous devrez le changer sous la forme « ftpback-rbxX-YYY.mybackup.ovh.net ».  
> Attention, si le Backup Storage est situé au Canada (BHS), vous devrez le changer sous la forme « ftpback-bhsX-YYY.mybackup.ovh.ca ».
>

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **File** : le nom du fichier que vous voulez sauvegarder.
- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **FolderLocation** : le chemin d'accès au répertoire-cible dans lequel vous souhaitez enregistrer le fichier.

Pour sauvegarder un répertoire, il vous suffit de l’archiver et de le transférer dans votre répertoire de sauvegarde :

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FolderName** : le chemin d’accès au répertoire que vous voulez sauvegarder.
- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **FolderLocation** : le chemin d'accès au répertoire local cible dans lequel vous souhaitez enregistrer le fichier
- **ArchiveName** : le nom du répertoire que vous voulez sauvegarder.

Pour télécharger un fichier d'archive à partir de votre Backup Storage, vous pouvez utiliser la commande suivante :

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **FtpUsername** : votre nom d'utilisateur FTP.
- **FtpPassword** : votre mot de passe FTP.
- **HostName** : le nom de votre Backup Storage.
- **LocalFolder** : le nom du répertoire local dans lequel vous souhaitez enregistrer le fichier.
- **File** : le chemin d’accès du fichier à télécharger

##### Filezilla (pour Windows)

Après avoir installé FileZilla sur votre serveur, vous pouvez le configurer pour vous connecter à votre Backup Storage en utilisant les informations d'identification FTP qui vous ont été envoyées lorsque vous avez activé votre option de sauvegarde. Pour pouvoir vous connecter, vous aurez besoin du nom et du mot de passe de votre Backup storage.

#### NFS

Le backup storage est compatible uniquement avec NFSv3.
Assurez-vous d'abord d’avoir autorisé vos blocs d’IP à accéder au stockage et à utiliser le protocole NFS. Selon votre système d'exploitation Linux, il est possible que vous deviez installer le client NFS et démarrer le service NFS/portmap.

Une fois le client NFS installé et le service portmap lancé, vous pouvez monter le partage NFS comme une partition normale comme indiqué ci-dessous :

```sh
mount -t nfs -o vers=3 HostName:/export/ftpbackup/ServiceName /FolderMount
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **HostName** : le nom de votre Backup Storage.
- **ServiceName** : le nom de votre serveur (exemple : « `ns1111111.ip-203-0-113.eu` »).
- **FolderMount** : le répertoire où vous souhaitez monter le partage NFS.

Une fois le partage monté, vous pouvez utiliser des commandes telles que **cp** et \`rsync\` comme vous le feriez avec un répertoire normal.

En cas de problème de connexion, il faut aussi s'assurer que les ports UDP et TCP nécessaires pour NFSv3 soient bien ouvert dans le firewall en entrée et en sortie.
Le port 111 UDP/TCP doit être ouvert dans les 2 sens, également le port 2049/TCP (NFS) ainsi que la plage de ports dynamiques (de 32768 à 60999 UDP/TCP), ces ports sont utilisés par RPC pour les programmes mountd, lockd et statd.
Pour finir il faut également autoriser toutes les connexions sortantes vers l'IP du serveur backup storage.


#### CIFS

##### Windows

Connectez-vous à votre serveur, ouvrez l'invite de commande et tapez la commande suivante :

```sh
net use z: \\HostName\ServiceName
```

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **HostName** : le nom de votre Backup Storage.
- **ServiceName** : le nom de votre serveur (exemple : « `ns1111111.ip-203-0-113.eu` »).

Le message d'erreur suivant peut s'afficher :  

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

> [!primary]
>
> Pour corriger cette erreur, il convient de modifier la base de registre de Windows. Pour cela, ouvrez l’éditeur de registre (regedit), puis accédez à la clé `HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters`.<br>
> Attribuez ensuite la valeur « 1 » au paramètre `AllowInsecureGuestAuth`.<br>
> Retrouvez plus d'informations sur ce sujet sur les [pages d'assistance de Microsoft](https://learn.microsoft.com/fr-fr/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3).

##### Linux

Ouvrez une connexion SSH à votre serveur et tapez la commande suivante :

```sh
mount -t cifs -o vers=2.0,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

> [!warning]
>
> Afin de monter des partages par nom d'hôte (par opposition aux adresses IP), l'utilitaire `mount.cifs` est requis. Il fait généralement partie du paquet `cifs-utils`.
>
> `mount.cifs` est un wrapper qui résout les noms d'hôte et ajoute le paramètre `ip=` aux paramètres de montage transmis au noyau.
>
> Sans `mount.cifs`, les tentatives de montage par nom d'hôte entraîneront l'erreur suivante :
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```

> [!primary]
>
> Les versions 2.1 et ultérieures de SMB ne sont actuellement pas prises en charge.

L'exemple de code ci-dessus contient des variables que vous devrez remplacer par vos propres valeurs.

- **HostName** : le nom de votre Backup Storage.
- **ServiceName** : le nom de votre serveur (exemple : « `ns1111111.ip-203-0-113.eu` »).
- **FolderMount** : le répertoire où vous souhaitez monter le partage (il doit déjà exister).

## Aller plus loin

[Sauvegarder mes informations et mes bases de données dans un serveur de stockage](/pages/bare_metal_cloud/dedicated_servers/save_datas_database_on_storage_ds)

[Configuration du stockage d'un serveur HGR-STOR-2](/pages/bare_metal_cloud/dedicated_servers/hgrstor2_system_configuration)

Échangez avec notre [communauté d'utilisateurs](/links/community).
