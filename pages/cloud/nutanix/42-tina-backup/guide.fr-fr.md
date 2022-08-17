---
title: Configurer le logiciel de sauvegarde tina 
slug: tina-backup
excerpt: "Installation du logiciel de sauvegarde tina sur un cluster Nutanix"
section: Sauvegardes
order: 03
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Backups
---

**Dernière mise à jour le 17/08/2022**

## Objectif

**Apprenez à installer, configurer et utiliser Time Navigator sur un cluster Nutanix avec une réplication du stockage sur un site distant**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence Time Navigator n'est pas fournie par OVHcloud. Pour plus d'informations, contactez le service commercial Atempo ou d'OVHcloud.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central.
- Avoir souscrit une offre Tina auprès de la société ATEMPO. 
- Disposer, sur votre cluster Nutanix, de 700 Go de Stockage, de 16 Go de Mémoire et de 8 Cœurs.
- De disposer d'un autre cluster Nutanix de avec 600 Go de stockage, de 8 Go de Mémoire et de 4 Cœurs.
- d'avoir un serveur DNS interne (Par exemple un serveur active diretory) et de pouvoir le configurer.

## Présentation

Le logiciel **Tina** est un logiciel modulaire composé de divers éléments que l'on peut installer sur diverses machines virtuelles ou physiques. Il permet la sauvegarde de machines virtuelles sous **Nutanix**.

## En pratique

Nous allons installer trois machines virtuelles sous AlmaLinux en version 8.6, une distribution Linux proche de RedHat (Dans le cas d'une exploitation en production il est judicieux d'utiliser une Redhat Enterprise Linux Server avec l'achat d'un support logiciel). 

Les trois machines virtuelles seront réparties comme ceci:

Deux sur un cluster Nutanix en France pour :
- Le serveur de sauvegarde avec sa console d'administration
- Le serveur de déduplication avec un paramètrage HSS (Hyper Stream Server) qui est pour l'instant le seul compatible avec Nutanix.
Un sur le serveur Nutanix au Canada pour :
- Le serveur de déduplication HSS pour recevoir une réplication des données du serveur HSS se trouvant en  France.

### Installation

IL faut installer trois machines virtuelles avec le système d'exploitation ALMALINUX (Distribution proche de Redhat Enterprise Linux Server) en version 8.6.

Vous pouvez télécharger les sources sur ce lien [Sources ALMALINUX](https://mirrors.almalinux.org/isos/x86_64/8.6.html) et vous aider de cette documentation pour ajouter les sources sur vos clusters Nutanix [Importer des images ISO](https://docs.ovh.com/fr/nutanix/image-import/)

Nous allons utiliser une serveur DNS interne avec comme adresse **192.168.0.200** et un nom de domaine ad-testing.lan, il faut rajouter trois entrée dns avec les noms de machines ainsi que leurs adresses. 

![00 DNS Entry Example 01 ](images/00-dnsexample01.png){.thumbnail}

L'adresse IP interne de Prism Element est **192.168.0.111**

Le nom des machines virtuelles nécessaires à l'installation de Tina sont les suivantes :

- **tina-srv.ad-testing.lan** : Serveur Tina avec l'adresse IP `192.168.0.210`
- **tina-adefr.ad-testing.lan** : Serveur de déduplication en mode HSS avec l'adresse IP `192.168.0.211`
- **tina-adecan.ad-testion.lan** : Serveur de déduplication en mode HSS avec l'adresse IP `192.168.10.211` pour récevoir une réplication de la sauvegarde.

#### Création de la machine virtuelle TINA-SRV

Nous allons créer la machine virtuelle atempo-srv qui est le serveur de sauvegarde tina

Aidez-vous de ce guide pour créer une machine virtuelle sous Nutanix [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/)

Choisissez ces paramètres:

- Nom de la machine virtuelle `atempo-srv`.
- Un disque de `60Go`.
- 4 `vCPU`
- 8Go de `mémoire vive`
- Un lecteur CDROM connecté au sources `d'ALMALINUX`.
- Une carte réseau sur le réseau de `base` qui est le réseau d'administration du cluster Nutanix.

![01 Create Tina Srv VM 01](images/01-create-tinasrv01.png){.thumbnail}

#### Création des machines virtuelles TINA ADE pour HSS

Ensuite nous allons créer deux machines virtuelles du même type une en France et l'autre au Canada en tant que dépot ADE au format HSS avec ces paramètres :

- Nom des machines virtuelle `atempo-adefr`. et `atempo-adecan`
- Un disque de `60Go`.
- Un deuxième disque de `500Go`
- 4 `vCPU`
- 8Go de `mémoire vive`
- Un lecteur CDROM connecté au sources `d'ALMALINUX`.
- Une carte réseau sur le réseau de `base` qui est le réseau d'administration du cluster Nutanix.

![02 Create Tina Srv ADE VM 01](images/02-create-tinasrvade01.png){.thumbnail}

#### Installation d'ALMALINUX sur les trois machines virtuelles créés

Nous allons ensuite installer les systèmes d'exploitations. 

Démarrez la machine virtuelles et lancez l'installation

Choisissez comme langue `English` et clavier `English (United States` et cliquez sur `Continue`{.action}

![03 Installing ALMAOS 01](images/03-install-almaos01.png){.thumbnail}

Cliquez sur `Network & Host Name`{.action}

![03 Installing ALMAOS 02](images/03-install-almaos02.png){.thumbnail}

Cliquez sur `Configure`{.action}

![03 Installing ALMAOS 03](images/03-install-almaos03.png){.thumbnail}

Positionnez-vous en haut sur l'onglet `IPv4 Settings`{.action}, choisissez la `Manual` cliquez sur `Add`{.action} , saisissez l'`adresse IP`{.action} , l'`adresse IP du DNS`{.action} ansi que le nom de domaine dans `Search domains`{.action}

> [!warning]
> Pour information les adresses IP sur le réseau privé sont : 
> 
> - tina-srv : 192.168.0.210.
>
> - tina-adefr : 192.168.0.211.
>
> - tina-adecan : 192.168.10.211.
>

Ensuite cliquez sur `Save`{.action}

![03 Installing ALMAOS 04](images/03-install-almaos04.png){.thumbnail}

Cliquez sur l'`interrupteur`{.action} pour activer le réseau, saisissez le nom d'hôte dans `Host Name`{.action} ensuite cliquez sur `Apply`{.action} et cliquez sur `Done`{.action}

-> [!warning]
> A chaque installation choisissez le nom d'hôtes sont : 
> 
> tina-srv.ad-testing.lan pour le serveur tina.
>
> tina-adefr.ad-testing.lan pour le serveur de déduplication HSS en France.
>
> tina-adecan.ad-testing.lan pour le serveur dé déduplication HSS au Canada.
>

![03 Installing ALMAOS 05](images/03-install-almaos05.png){.thumbnail}

Cliquez sur `Installation Destination`{.action}.

![03 Installing ALMAOS 06](images/03-install-almaos06.png){.thumbnail}

Sélectionnez le disque de `60 Go` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 07](images/03-install-almaos07.png){.thumbnail}

Cliquez sur `Installation Source`{.action}.

![03 Installing ALMAOS 08](images/03-install-almaos08.png){.thumbnail}

Sélectionnez `On the network` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 09](images/03-install-almaos09.png){.thumbnail}

Cliquez sur `Software Selection`{.action}.

![03 Installing ALMAOS 10](images/03-install-almaos10.png){.thumbnail}

Sélectionnez `Server with GUI` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 11](images/03-install-almaos11.png){.thumbnail}

Cliquez sur `Root Password`{.action}.

![03 Installing ALMAOS 12](images/03-install-almaos12.png){.thumbnail}

Saisissez et confirmer le `mot de passe` et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 13](images/03-install-almaos13.png){.thumbnail}

Cliquez sur `User Creation`{.action}.

![03 Installing ALMAOS 14](images/03-install-almaos14.png){.thumbnail}

Choisissez ces options :

- **Full Name** : `admatempo`
- **User Name** : `admatempo`
- **Make this user administrator** : `cochez la case`
- **Require a password to use this account** : `cochez la case`
- **Password** : `Mot de passe de l'utilisateur`
- **Confirm password** : `Mot de passe de l'utilisateur confirmé`

Ensuite cliquez sur `Done`{.action}.

![03 Installing ALMAOS 15](images/03-install-almaos15.png){.thumbnail}

Cliquez sur `Begin Installation`{.action}.

![03 Installing ALMAOS 16](images/03-install-almaos16.png){.thumbnail}

L'installation démarre

![03 Installing ALMAOS 17](images/03-install-almaos17.png){.thumbnail}

Cliquez sur `Reboot System`{.action}.

![03 Installing ALMAOS 18](images/03-install-almaos18.png){.thumbnail}

Cliquez sur `License Information`{.action}.

![03 Installing ALMAOS 19](images/03-install-almaos19.png){.thumbnail}

Cliquez sur `I accept the license agreement`{.action} et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 20](images/03-install-almaos20.png){.thumbnail}

Cliquez sur `FINISH CONFIGURATION`{.action}

![03 Installing ALMAOS 21](images/03-install-almaos21.png){.thumbnail}

L'installation est terminée

![03 Installing ALMAOS 22](images/03-install-almaos22.png){.thumbnail}

#### Personalisation communes des trois machines virtuelles

Sur chacunes des machines virtuelles installés nous allons desactiver le pare-feu , IPv6 et selinux. Ensuite nous allons installer et configurer **Tigervnc** pour la prise de main à distance avec une interface graphique sous Linux

Connectez-vous en ssh sur chaque machine virtuelle.

```bash
ssh root@nommachinevirtuelle.ad-testing.lan
```

Désactivez selinux sur la machine virtuelle en modifiant le fichier **/etc/selinux/config** en remplaçant

```conf
SELINUX=enforcing
```

par 

```conf
SELINUX=disabled
```

Ensuite executez ces commandes :

```bash
## Arrêt et desactivation du parefeu
systemctl stop firewalld
systemctl disable firewalld
## Desactivation IPv6
echo "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf
sysctl -p
## Installation de tigervnc
dnf install tigervnc-server
## Choix du mot de passe pour vncserver
vncpasswd
mot de passe
confirmation mot de passe
## répondre non à la création d'un mot de passe pour l'affichage
n
## création d'un lien sympbolique sur une librairie afin de faire fonctionner le serveur de licences
ln  -s  /lib64/ld-linux-x86-64.so.2   /lib64/ld-lsb-x86-64.so.3
```

Modifiez le fichier **/etc/tigervnc/vncserver.users**

```conf
## Ajoutez cette ligne
:1=root
```

Créez le fichier **/root/.vnc/config**

```conf
session=gnome
securitytypes=vncauth,tlsvnc
geometry=1280x1024
```

Executez ces commandes

```bash
systemctl enable --now vncserver@:1
reboot
```

#### Personalisation des deux machines virtuelles de déduplication

IL faut configurer le disque supplémentaire dans le système d'exploitation linux sur les deux machines virtuelles de déduplication.

Executez ces commandes

```bash
# Création de la partition
parted -s /dev/sdb --script mklabel gpt mkpart primary xfs 0% 100%
# Création du système de fichier
mkfs.xfs /dev/sdb1
# Création du dossier /data
mkdir /data
# Récupération de l'UUID de la partition /dev/sdb1
blkid /dev/sdb1
```

A l'écran apparait ces informations :

```conf
/dev/sdb1: UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" BLOCK_SIZE="4096" TYPE="xfs" PARTLABEL="primary" 
PARTUUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```
Copiez le contenu UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

Ensuite modifier ce fichier **/etc/fstab**

```conf
# Ajout de cette ligne dans le fichier
UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" /data                    xfs     defaults        0 0
```

#### Installation du logiciel de déduplication sur tina-adefr et tina-adecan.

Le logiciel de déduplication **tina-ade** transforme votre serveur en dépot de stockage pour le serveur tina, nous allons installer deux dépots :

- L'un en France
- L'autre au Canada pour servir de réplica à celui de France.

Suivez ces instructions sur les machine virtuelles **tina-adefr** et **tina-ade**

Connectez-vous avec un client vnc sur le serveur `tina-adexx:5901`.

![04 Installing tina ade01](images/04-install-tina-ade01.png){.thumbnail}

Saisissez `le mot de passe` et cliquez sur `OK`{.action}.

![04 Installing tina ade02](images/04-install-tina-ade02.png){.thumbnail}

Au travers de la console lancer le programmme d'installation `ATL533-linux-x64.bin`{.action}.

![04 Installing tina ade03](images/04-install-tina-ade03.png){.thumbnail}

Laissez `English` et cliquez sur `OK`{.action}.

![04 Installing tina ade04](images/04-install-tina-ade04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![04 Installing tina ade05](images/04-install-tina-ade05.png){.thumbnail}

Cochez la case `I accept the terms of the license Agreement`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade06](images/04-install-tina-ade06.png){.thumbnail}

Laissez la case  `Atempo Lina`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade07](images/04-install-tina-ade07.png){.thumbnail}

Selectionnnez `Do not install Atempo License Manager`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade08](images/04-install-tina-ade08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![04 Installing tina ade09](images/04-install-tina-ade09.png){.thumbnail}

Cliquez sur `Install`{.action}.

![04 Installing tina ade10](images/04-install-tina-ade10.png){.thumbnail}

L'installation débute.

![04 Installing tina ade11](images/04-install-tina-ade11.png){.thumbnail}

Cliquez sur `Done`{.action}.

![04 Installing tina ade12](images/04-install-tina-ade12.png){.thumbnail}

## Configuration des deux serveurs de déduplications 

Maintenant que l'installation est terminée utilisez un navigateur WEB et allez sur l'adresse `https://tina-adexx:8181`. Le configurateur va se lancer.

Lors du choix de la `Database` sélectionnez le dossier `/home` et cliquez sur la `flêche`{.action} en bas.

![05 Configure tina ade01](images/05-configure-tina-ade01.png){.thumbnail}

Sélectionnez le dossier `/data` pour le `storage` ensuite cliquez sur la `deuxième flêche`{.action} en bas.

![05 Configure tina ade02](images/05-configure-tina-ade02.png){.thumbnail}

Laissez les options par défaut et cliquez sur la `deuxième flêche à droite`{.action} en bas.

![05 Configure tina ade03](images/05-configure-tina-ade03.png){.thumbnail}

Choisissez ces options :

- **Activate HyperStream** sur `Yes`
- **Activate Lina** sur `No`
- **Activate HVDS** sur `No`

Ensuite cliquez sur la `deuxième flêche à droite`{.action} en bas.

![05 Configure tina ade04](images/05-configure-tina-ade04.png){.thumbnail}

Pour la configuration d'`Hyperstream` sélectionnez le dossier `/home` et cliquez sur la `deuxième flêche`{.action} en bas.

![05 Configure tina ade05](images/05-configure-tina-ade05.png){.thumbnail}

Pour finir l'installation laissez `Yes` à **Receive update notifications**. et cliquez sur le `signe de validation`{.thumbnail} en bas à droite.

![05 Configure tina ade06](images/05-configure-tina-ade06.png){.thumbnail}

Cliquez sur `OK`{.action} pour redémarrer le programme avec les nouveaux paramètres.

![05 Configure tina ade07](images/05-configure-tina-ade07.png){.thumbnail}

Maintenant que la configuration est terminée revenez sur l'interface d'administration avec l'adresse `https://tinaadexx:8181`. A partir de maintenant il faut s'authentier.

Saisissez le nom d'utilisateur `superadmin` et le mot de passe par défaut `superadmin` et cliquez sur `login`{.action}

![05 Configure tina ade08](images/05-configure-tina-ade08.png){.thumbnail}

Cochez la case `Do not show again` et cliquez sur `Skip the presentation`{.action}.

![05 Configure tina ade09](images/05-configure-tina-ade09.png){.thumbnail}

Nous allons changer le nom du serveur 

Cliquez sur l'onglet `Server`{.action}. et choisissez `Tenants`{.action}

![05 Configure tina ade10](images/05-configure-tina-ade10.png){.thumbnail}

Se positionnez sur le `nom`{.action}  et cliquez sur le bouton `Modify`{.action}.

![05 Configure tina ade11](images/05-configure-tina-ade11.png){.thumbnail}

Cliquez sur le `stylo`{.action} en haut à gauche 

![05 Configure tina ade12](images/05-configure-tina-ade12.png){.thumbnail}

Saisissez le nom du serveur et cliquez sur le bouton de `validation`{.action}.

![05 Configure tina ade13](images/05-configure-tina-ade13.png){.thumbnail}

Cliquez sur la `croix`{.action} pour fermer la fenêtre.

![05 Configure tina ade14](images/05-configure-tina-ade14.png){.thumbnail}

Maintenant nous allons changer le mot de passe du compte **superadmin**.

Revenez sur l'onglet `Server`{.action}, prenez l'option `User Management` et choisissez `Advanced`{.action}

![05 Configure tina ade15](images/05-configure-tina-ade15.png){.thumbnail}

Cliquez sur le bouton en forme de `stylo`{.action} à coté de **click to modify the password**.

![05 Configure tina ade16](images/05-configure-tina-ade16.png){.thumbnail}

Saisissez et confirmez le mot de passe, ensuite cliquez sur le bouton de `validation`{.action} 

![05 Configure tina ade17](images/05-configure-tina-ade17.png){.thumbnail}

Nous allons modifier le mot de passe du compte **admin**. Ce compte est utilisé sur le serveur **tina**.

Au travers de l'onglet l'onglet `Server`{.action}, prenez l'option `User Management` et choisissez `Users`{.action}.

![05 Configure tina ade18](images/05-configure-tina-ade18.png){.thumbnail}

Sélectionnez l'utilisateur `admin` et cliquez sur `Modify`{.action}.

![05 Configure tina ade19](images/05-configure-tina-ade19.png){.thumbnail}

Cliquez sur `click to modify the passsword`{.action}.

![05 Configure tina ade20](images/05-configure-tina-ade20.png){.thumbnail}

Saisissez et confirmez le mot de passe, ensuite cliquez sur le bouton de `validation`{.action}

![05 Configure tina ade21](images/05-configure-tina-ade21.png){.thumbnail}

#### Mise en place de la réplication entre serveurs de déduplication.

Maintenant que les deux serveurs de déduplication sont installés nous allons configurer la réplication sur le serveur qui se trouve en france **tina-adefr**

Cliquez sur l'onglet `Server`{.action}, Choisissez `Replication`{.action} depuis le menu `Configuration`

![06 Configure replication 01](images/06-configure-replication01.png){.thumbnail}

Cliquez sur le bouton `Add`{.action}

![06 Configure replication 02](images/06-configure-replication02.png){.thumbnail}

Dans **Host : Port**: , choisissez ces options

- **Host** : `tina-adecan`
- **Port** : `8181`

Ensuite cliquez sur `Validate the creation`{.action}

![06 Configure replication 03](images/06-configure-replication03.png){.thumbnail}

La réplication est active dès que des données seront stockées sur le serveur de déduplication en france elles seront répliquées au CANADA.

![06 Configure replication 04](images/06-configure-replication04.png){.thumbnail}


#### Installation du logiciel tina sur tina-srv

A partir d'une machine virtuelle avec une interface graphique soit sous **windows** soit sous **linux** se trouvant sur le réseau privé ou se trouve les machines virtuelles **tina-srv**, **tina-adefr** et **tina-adecan** installez le logiciel [TightVNC](https://www.tightvnc.com/download.php).

Connectez-vous sur **tina-srv** avec le logiciel Tightvnc en utilisant cette adresse `tina-srv:5901`{.action}

![07 tina server installation 01](images/07-install-tina-server01.png){.thumbnail}

Saisissez le mot de passe de vnc et cliquez sur `OK`{.action}

![07 tina server installation 02](images/07-install-tina-server02.png){.thumbnail}

Lancer le terminal et executez le programme d'installation `Atempo-tina-4.7.0.6413-Server-Agent-Linux-X64`{.action}

![07 tina server installation 03](images/07-install-tina-server03.png){.thumbnail}

Laissez la langue en `English` et cliquez sur `OK`{.action}.

![07 tina server installation 04](images/07-install-tina-server04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![07 tina server installation 05](images/07-install-tina-server05.png){.thumbnail}

Cochez la `case`{.action} à coté de **I accept the terms of the License Agreement**, ensuite cliquez sur `Next`{.action}.

![07 tina server installation 06](images/07-install-tina-server06.png){.thumbnail}

Cochez les cases `Time Navigator`{.action} et `Atempo License Manager`{.action}, ensuite cliquez sur `Next`{.action}.

![07 tina server installation 07](images/07-install-tina-server07.png){.thumbnail}

cliquez sur `Next`{.action}.

![07 tina server installation 08](images/07-install-tina-server08.png){.thumbnail}

Sélectionnez `I do not have a license file yet`{.action} et cliquez sur `Next`{.action}.

![07 tina server installation 09](images/07-install-tina-server09.png){.thumbnail}

Choisissez l'option `TIme Navigator Server`{.action} et cliquez sur `Next`{.action}.

![07 tina server installation 10](images/07-install-tina-server10.png){.thumbnail}

Cliquez sur `Next`{.action}.

![07 tina server installation 11](images/07-install-tina-server11.png){.thumbnail}

Prenez `Temporary License`{.action} et cliquez sur `Next`{.action}.

![07 tina server installation 12](images/07-install-tina-server12.png){.thumbnail}

Choisissez `Create a Catalog Now`{.action} et cliquez sur `Next`{.action}.

![07 tina server installation 13](images/07-install-tina-server13.png){.thumbnail}

Choisissez ces options :

- **Catalog Name** : `catalog` ;
- **Administrator User Name** : `admin` ;
- **Administrator User Password** :  `mot de passe du compte admin`
- **Confirm Administrator Password** : 'mot de passe du compte admin`

> [!warning]
>
> Notez ces informations de connexions, elles vous servirons pour vous authentifier sur le serveur **tina**
>
>

Ensuite cliquez sur `Next`{.action}.

![07 tina server installation 14](images/07-install-tina-server14.png){.thumbnail}

Séléctionnez l'option `Memory`{.action} ensuite cliquez sur `Next`{.action}.

![07 tina server installation 15](images/07-install-tina-server15.png){.thumbnail}

Gardez l'option de cache à `64MB`{.action} et cliquez sur `Next`{.action}.

![07 tina server installation 16](images/07-install-tina-server16.png){.thumbnail}

Cliquez sur `Next`{.action}.

![07 tina server installation 17](images/07-install-tina-server17.png){.thumbnail}

Choisissez le `nom du serveur smtp` dans **SMTP Server Name:** et cliquez sur `Next`{.action}.

![07 tina server installation 18](images/07-install-tina-server18.png){.thumbnail}

Cliquez sur `Install`{.action}.

![07 tina server installation 19](images/07-install-tina-server19.png){.thumbnail}

L'installation se lance.

![07 tina server installation 20](images/07-install-tina-server20.png){.thumbnail}

Cliquez sur `Done`{.action} pour valider la fin de l'installation.

![07 tina server installation 21](images/07-install-tina-server21.png){.thumbnail}


#### Configuration du serveur tina

Connectez-vous au serveur au travers d'un navigateur WEB sur l'adresse privé **https://tina-srv:22088**

Cliquez sur `Atempo Web Interfaces Administration`{.action}.

![08 tina connection 01](images/08-tina-connection01.png){.thumbnail}

Choisir ces options :

- **Username** : `admin`
- **Password** : `Mot de passe` 
- **Catalog** : `Nom du catalogue`

Et cliquez sur `Login`{.action}.

![08 tina connection 02](images/08-tina-connection02.png){.thumbnail}

Le tableau de bord apparait.

![08 tina connection 03](images/08-tina-connection03.png){.thumbnail}

##### Ajout de la destination de sauvegarde

Nous allons configurer le serveur **tina-ade** en tant que dépot de sauvegarde

Cliquez à gauche dans la barre verticale sur `Backup`{.action} ensuite cliquez sur `Add new storage`{.action}.

![09 configure repository 01](images/09-configure-repository01.png){.thumbnail}

Sélectionnez `Atempo deduplication (Hyperstreeam)` et cliquez sur `Next`{.action}.

![09 configure repository 02](images/09-configure-repository02.png){.thumbnail}

Saisissez ces informations : 

- **Enter a name for the storage** : `Nom qui apparaitra pour les sauvegardes`
- **Deduplication-server where data will be saved** : `nom FQDN du serveur de deduplication`
- **Username** : `Compte administrateur du serveur de déduplication`
- **Password** : `Mot de passe du compte administrateur`

et cliquez sur `CHECK SERVER CONNECTION`{.action}

![09 configure repository 03](images/09-configure-repository03.png){.thumbnail}

Modifiez les options de taille et de nombre de bandes comme ceci :

- **Number of drives** : `10`
- **Media size** : `1GB`
- **Compression algorithm** : `Brotli`

Ensuite faites défiler la fenêtre avec la `barre de défilement à droite`{.action}.

![09 configure repository 04](images/09-configure-repository04.png){.thumbnail}

Activez `Define a primary data retention pool`{.action} avec ces paramètres


- **Retention** : `Limited`
- **Data to be kept during** : `1 week(s)`
- **Storage pool name** : `1w_HSS`
- **Prefix or cartrige (label)** : `1w_HSS_`

Ensuite cliquez sur `FINISH`{.action}

![09 configure repository 05](images/09-configure-repository05.png){.thumbnail}

cliquez sur `OK`{.action}

![09 configure repository 06](images/09-configure-repository06.png){.thumbnail}

##### Ajout du cluster Nutanix en tant que source de sauvegarde

Pour pouvoir sauvegarder le serveur Nutanix il faut configurer un agent qui pourra se connecter au cluster Nutanix

Restez sur `Backup` à gauche et cliquez sur `Add new agent`{.action}.

![10 configure nutanix agent 01](images/10-configure-nutanix-agent01.png){.thumbnail}

Selectionnez `Declare a new application`, choisissez dans la liste `Nutanix Virtualisation Agent` ensuite cliquez sur `NEXT`{.action}.

![10 configure nutanix agent 02](images/10-configure-nutanix-agent02.png){.thumbnail}

Modifier **Status** en le passant en `Enabled`{.action} ensuite modifier ces paramètres

- **** : ``
- **Virtualisation server** : `Adresse IP locale de Prism Element`
- **Virtualization user** : `Utilisateur administrateur de Prism Element`
- **virtualization password** : `Mot passe du compte administrateur Prism Element`
- **Nutanix protocol** : `https`

Ensuite cliquez sur `FINISH`{.action}.

![10 configure nutanix agent 03](images/10-configure-nutanix-agent03.png){.thumbnail}

Clique sur `FINISH`{.action}.

![10 configure nutanix agent 04](images/10-configure-nutanix-agent04.png){.thumbnail}

##### Création d'un nouveau planning de sauvegarde

Restez à gauche dans `Backup` et cliquez sur `Backup schedules`{.action}.

![11 configure schedule 01](images/11-configure-schedule01.png){.thumbnail}

Cliquez sur `Add new schedule`{.action}.

![11 configure schedule 02](images/11-configure-schedule02.png){.thumbnail}

Choisissez ces options :

- **Backup every** : `1 Day`
- **Execution time** : `20:00`

Et cliquez sur `Save`{.action}.

![11 configure schedule 03](images/11-configure-schedule03.png){.thumbnail}

##### Configuration de l'agent pour automatiser la sauvegarde

Cliquez à gauche sur `Agents` et cliquez sur `Not configured`{.action} pour voir les agents non configurés










### Configuration d'une sauvegarde

### Restauration d'une sauvegarde

## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Tina Compatibily GUIDE 2022](https://www.atempo.com/wp-content/uploads/2022/01/COMPATIBILITY-GUIDE_en_Tina_469_24-01-2022.pdf)

