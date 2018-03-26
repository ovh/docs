---
title: Backup storage
slug: services-backup-storage
excerpt: Decouvrez ici comment activer la fonctionnalite Backup Storage et comment lutiliser.
section: Divers
---


## Prérequis
- Avoir un serveur OVH.
- Avoir accès à l'espace client (ManagerV6).

OVH fourni un espace de stockage de sauvegarde pour tout les serveurs dédiés.

L’espace de sauvegarde OVH est accessible avec les protocoles suivants :

- FTPS
- FTP
- NFS
- CIFS

L’accès est restreint par IP en utilisant des ACLs.

Vous pouvez créer une règle ACL pour les IPs qui sont sur votre serveur en passant par le manager ou par l’API. Par défaut, toutes les IPs de votre compte ont un accès FTP/FTPS à l’espace de stockage. Les autres protocoles ne sont pas autorisés par défaut, vous devrez créer une règle ACL pour les autoriser.


## Procedure

### Étape 1 &#58; Activation
Pour activer votre espace de stockage:

1. Connectez-vous à votre [Manager](https://www.ovh.com/manager/){.external}.
1. Sélectionnez votre serveur dans la section **Serveurs**.
1. Sélectionnez l'onglet **Backup storage**.
1. Cliquez sur **Activer le Backup Storage**.

![Activating Backup Storage](images/services-backup-storage-activate.png){.thumbnail}

1. Cliquez sur Confirmer.

![Confirm Backup Storage activation](images/services-backup-storage-activate-confirm.png){.thumbnail}

1. Vous devriez alors avoir un message de confirmation, et vous devriez recevoir un e-mail d'activation.

![Activation completed](images/services-backup-storage-activate-done.png){.thumbnail}


### Étape 2 &#58; Resume d'utilisation
1. Connectez-vous à votre Manager.
1. Sélectionnez votre serveur dans la section **Serveurs**.
1. Sélectionnez l'onglet **Backup storage**.

![Backup storage usage summary](images/services-backup-storage-usage.png){.thumbnail}

Ici, vous pourrez consulter l'esapce disque utilisé.


### Étape 3 &#58; Reinitialisation du mot de passe
Les mots de passe pour les BackupStorage sont générés automatiquement. Pour des raisons de sécurité vous ne pouvez pas spécifier votre propre mot de passe.

Si vous avez perdu votre mot de passe, vous pouvez en générer un nouveau en suivant la procédure ci-dessous :

1. Rendez-vous dans votre Manager.
1. Sélectionnez votre serveur dans la section **Serveurs**.
1. Sélectionnez l'onglet **Backup storage**.
1. Cliquez sur le bouton **Mot de passe oublié?**.

![Reset password](images/services-backup-storage-reset-password.png){.thumbnail}

1. Cliquez sur le bouton Confirmer.

![Reset password confirmation](images/services-backup-storage-reset-password-confirm.png){.thumbnail}

1. Vous devriez alors apercevoir un message de confirmation, et recevoir un e-mail contenant le nouveau mot de passe.

![Reset password completed](images/services-backup-storage-reset-password-done.png){.thumbnail}


## Gestion des regles ACLs
Pour autoriser des IPs sur votre Backup Storage, vous devez créer une règle ACL et activer un protocole de connexion pour l’IP en question.

La gestion des ACL peut être faite à deux endroits, soit dans le Manager ou avec l’API.


### Étape 1 &#58; Ajout
Afin d'autoriser une IP sur le Backup Storage en utilisant le Manager :

1. Connectez-vous à votre [Manager](https://www.ovh.com/manager/){.external}.
1. Sélectionnez votre serveur dans la section **Serveurs**.
1. Sélectionnez l'onglet **Backup storage**.
1. Si l'IP n'est pas dans la liste, cliquez sur le bouton **Ajouter un accès**.

![Add access](images/services-backup-storage-access-add.png){.thumbnail}

1. Sélectionnez l'IP ou le Bloc que vous souhaitez autoriser.

![Add access](images/services-backup-storage-access-select.png){.thumbnail}

1. Confirmez votre sélection.

![Add access](images/services-backup-storage-access-confirm.png){.thumbnail}

1. Vous devriez alors apercevoir un message de confirmation.

![Add access](images/services-backup-storage-access-done.png){.thumbnail}


### Étape 2 &#58; Modification
Pour modifier un accès existant :

1. Cliquez sur l'engrenage dans la dernière colonne du tableau, puis sur **Modifier l'accès**.

![Modify access](images/services-backup-storage-access-modify.png){.thumbnail}

1. Sélectionnez le protocole que vous souhaitez autoriser pour cette IP ou ce bloc :

![Select protocols to add or remove for an IP](images/services-backup-storage-access-modify-select.png){.thumbnail}

1. Vous devriez apercevoir un message de confirmation :

![Modify access](images/services-backup-storage-access-modify-done.png){.thumbnail}


### Étape 3 &#58; Suppression d'un acces
Pour supprimer un accès :

1. Cliquez sur l'engrenage dans la dernière colonne du tableau, puis sur **Supprimer un accès**.

![Delete an access](images/services-backup-storage-access-modify.png){.thumbnail}

1. Confirmez la suppression.

![Delete confirmation](images/services-backup-storage-delete-confirm.png){.thumbnail}

1. Vous devriez alors apercevoir un message de confirmation :

![Access deleted](images/services-backup-storage-delete-done.png){.thumbnail}


### Étape 4 &#58; Suppression du Backup
1. Connectez-vous à votre [Manager](https://www.ovh.com/manager/){.external}.
1. Sélectionnez votre serveur dans la section **Serveurs**.
1. Sélectionnez l'onglet **Backup storage**.
1. Cliquez sur le bouton **Supprimer le Backup Storage**.

![Delete backup storage](images/services-backup-storage-delete-backup.png){.thumbnail}



> [!critical]
>
> Cette opération est irréversible, toutes les donénes seront détruites de façon permanente.
> 


## Utilisation du Backup Storage
Le service de Backup Storage ne sauvegarde pas automatiquement vos données, il s’agit simplement d’un espace de stockage accessible par différentes IP et protocoles. Il est de votre responsabilité d’implémenter une stratégie de backup adéquate en utilisant les outils de votre choix.


### Étape 1 &#58; FTP/FTPS

#### ncftp (Pour linux)


> [!primary]
>
> Cette commande ne supporte pas le protocole FTPS. Si vous avez besoin d'effectuer un transfert sécurisé, il vous faudra utiliser lftp ou curl.
> 

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpput -uFTPUSER -pFTPPASS FTPBACKUPHOST /REMOTEFOLDER /FILETOSAVE</span> </pre></div>
Remplacez les variables suivantes par les bonnes informations :

Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le fichier local à sauvegarder.

Le répertoire distant où sauvegarder le fichier.

Pour sauvegarder un répertoire, il vous suffit simplement de l'archiver et de le transférer dans votre répertoire de sauvegarde :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ncftpput -uFTPUSER -pFTPPASS -c FTPBACKUPHOST DIRNAME.tar.gz</span> </pre></div>
Le nom du répertoire à transformer en Archive.

Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le Nom du répertoire à sauvegarder.

Pour télécharger une archive de votre Backup Storage, utilisez la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpget -v -u FTPPASS -p FTPPASS FTPBACKUPHOST /LOCALDIR /FILEBACKUP</span> </pre></div>
Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le répertoire local cible où sauvegarder le fichier.

Le chemin d'accès du fichier à télécharger.


#### Curl (Pour linux)


> [!primary]
>
> Pour utiliser FTPS, vous devez changer le Nom du Backup Storage. Par exemple, si le Nom du Backup Storage est ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net,
> vous devrez le changer sous la forme ftpback-rbxX-YYY.mybackup.ovh.net.
> Il vous faudra également ajouter l'argument -ssl à la commande ci-dessous.
> 

Pour sauvegarder un seul fichier, vous pouvez utiliser la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">curl -aT FILETOSAVE ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/</span> </pre></div>
Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le fichier local à sauvegarder.

Le répertoire distant où sauvegarder le fichier.

Pour sauvegarder un répertoire :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | curl ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/DIRNAME-$(date +%Y%m%d%H%M).tar.gz -T -</span> </pre></div>
Le nom du répertoire à transformer en Archive.

Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le Nom du répertoire à sauvegarder.

Le répertoire distant où sauvegarder le fichier.

Pour télécharger une archive de votre Backup Storage, utilisez la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">curl -u FTPUSER:FTPPASS ftp://FTPBACKUPHOST/FILEBACKUP</span> </pre></div>
Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le répertoire local cible où sauvegarder le fichier.

Le chemin d'accès du fichier à télécharger.


#### lftp (Pour linux)


> [!primary]
>
> lftp utilise FTP+SSL/TLS par défaut. Vous devez donc changer le Nom du
> Backup Storage. Par exemple, si le Nom du Backup Storage est
> ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net, vous aurez besoin de le modifier par
> ftpback-rbxX-YYY.mybackup.ovh.net.
> 

Pour sauvegarde un seul fichier, vous pouvez utiliser la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put FILETOSAVE; quit"</span> </pre></div>
Renseigner FTP ou FTPS

Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le fichier local à sauvegarder.

Le répertoire distant où sauvegarder le fichier.

Pour sauvegarder un répertoire, vous pouvez utiliser la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put /dev/stdin -o DIRNAME-$(date +%Y%m%d%H%M).tar.gz;quit"</span> </pre></div>
Renseigner FTP ou FTPS

Le nom du répertoire à transformer en Archive.

Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le Nom du répertoire à sauvegarder.

Le répertoire distant où sauvegarder le fichier.

Pour télécharger un fichier du Backup Storage, vous pouvez utiliser la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "get /FILEBACKUP; quit"</span> </pre></div>
Renseigner FTP ou FTPS

Le Nom de l'utilisateur FTP.

Le mot de passe FTP.

Le Nom du Backup Storage.

Le répertoire local cible où sauvegarder le fichier.

Le chemin d'accès du fichier à télécharger.


#### Filezilla (Pour Windows)
1. Connectez-vous à votre serveur en utilisant l'outil **Connexion au bureau distant**.
1. Ouvrez un navigateur intervent, et téléchargez **FileZilla** si vous ne le possédez pas déjà. (Il n'est pas nécessaire d'installer les logiciels complémentaires).
1. Lancer **FileZilla**, et utilisez les informations FTP que vous avez reçues par e-mail.
Le Nom du Backup Storage.

Te Nom de l'utilisateur FTP.

Le mot de passe du Backup Storage.

1. Cliquez sur **Quickconnect**


> [!primary]
>
> Le panneau latéral de gauche montre le contenu de votre serveur, celui de
> droite montre le contenu de votre Backup Storage. Vous pouvez effectuer un
> "glisser-déposer" des fichiers d’un panneau à l’autre pour envoyer ou
> télécharger des fichiers de votre Backup Storage.
> 


### Étape 2 &#58; NFS


> [!primary]
>
> Le protocole NFS est utilisé avec les distributions Linux. Pour Windows, vous devez utiliser CIFS ou FTP.
> 

Premièrement, vérifiez que vous avez bien ajouté les règles ACLS nécessaires pour autoriser le protocole **NFS** pour l'IP que vous souhaitez utiliser. Sinon, référez-vous à la section [Gestion des règles ACLs](#gestion-des-regles-acls){.internal}.

Suivant votre distribution, il est possible qu'il vous soit nécessaire d'installer le client NFS et démarrer les services NFS/portmap.

Une fois le client NFS installé et le service portmap lancé, vous pouvez monter le partage NFS comme une partition normale :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t nfs FTPBACKUPHOST:/export/ftpbackup/SERVICENAME /DOSSIERMOUNT</span> </pre></div>
Le Nom du Backup Storage.

Le Nom de votre serveur (ex: ns0000000.ip-123-123-123.net).

Le Nom du répertoire où vous souhaitez monter le partage NFS.

Une fois le partage monté, vous pouvez utiliser des commandes telles que cp et rsync comme vous le feriez avec un répertoire normal.


### Étape 3 &#58; CIFS
Premièrement, vérifiez que vous avez bien ajouté les règles ACLS nécessaires pour autoriser le protocole **CIFS** pour l'IP que vous souhaitez utiliser. Sinon, référez-vous à la section [Gestion des règles ACLs](#gestion-des-regles-acls){.internal}.


#### Pour Windows
Ouvrez l'invite de commande, et exécutez les commandes suivantes :

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">net use z: \\FTPBACKUPHOST\SERVICENAME</span> </pre></div>
Le Nom du Backup Storage.

Le Nom de votre serveur (ex: ns0000000.ip-123-123-123.net).

Une fois la commande réalisée, vous devriez avoir un nouveau disque **Z:**.


#### Pour Linux
Utilisez SSH pour vous connecter à votre serveur, et exécutez la commande suivante :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //FTPBACKUPHOST/SERVICENAME /mnt/DIRNAME</span> </pre></div>
Le Nom du Backup Storage.

Le Nom de votre serveur (ex: ns0000000.ip-123-123-123.net).

Le Nom du répertoire où monter le Backup Storage (Il **doit** exister).