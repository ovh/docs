---
title: Configurer le logiciel de sauvegarde Tina 
slug: tina-backup
excerpt: "Installation du logiciel de sauvegarde Tina sur un cluster Nutanix"
section: Sauvegardes
order: 03
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Backups
---

**Dernière mise à jour le 14/09/2022**

## Objectif


**Apprenez à installer, configurer et utiliser le logiciel de sauvegarde Tina pour la sauvegarde d’un cluster Nutanix vers un stockage dédupliqué (Atempo HSS Pour HyperStream Server) et à configurer la réplication du stockage dédupliqué.** 


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence **Tina** n'est pas fournie par OVHcloud. Pour plus d'informations, contactez le service commercial Atempo ou OVHcloud.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur votres cluster via Prism Central.
- Avoir souscrit une offre **Tina** auprès de la société **Atempo** et d'avoir les sources d'installation des logiciel **Tina**. 
- Avoir un serveur DNS interne administrable (Par exemple le service DNS activé sur un serveur Microsoft Windows).
- Disposer d'un site distant pour pouvoir mettre en place une réplication de la sauvegarde.

## En pratique

[Etape 1 Présentation de la solution](#presentation)<br /> 
[Etape 2 Installation et configuration des machines virtuelles](#installation)<br />
&ensp;&ensp;[Etape 2.1 Création de la machine virtuelle d'administration Tina](#createvmtina)<br />
&ensp;&ensp;[Etape 2.2 Création des machines virtuelles pour les serveur de déduplications](#createvmdedup)<br />
&ensp;&ensp;[Etape 2.3 Installation d'ALMALINUX](#almalinuxinstallation)<br />
&ensp;&ensp;[Etape 2.4 Personnalisation des machines virtuelles](#vmcustomization)<br />
&ensp;&ensp;[Etape 2.5 Configuration des disques supplémentaires sur les machines de déduplication](#hddconf)<br />
[Etape 3 Installation et configuration des logiciels Atempo](#atempoinstall)<br />
&ensp;&ensp;[Etape 3.1 Installation du logiciel de déduplication sur tina-adefr et tina-adecan](#dedupinstall)<br />
&ensp;&ensp;[Etape 3.2 Configuration des serveurs de déduplications](#dedupconf)<br />
&ensp;&ensp;[Etape 3.3 Installation du logiciel Tina sur tina-srv](#tinainstall)<br />
[Etape 4 Mise en place de la réplication entre serveurs de déduplication](#replication)<br />
[Etape 5 Configuration du serveur Tina](#configuretina)<br />
&ensp;&ensp;[Etape 5.1 Ajout de la destination de sauvegarde](#addrepo)<br />
&ensp;&ensp;[Etape 5.2 Ajout du cluster Nutanix en tant que source de sauvegarde](#nutanixconf)<br />
&ensp;&ensp;[Etape 5.3 Création d'un nouveau planning de sauvegarde](#scheduleconf)<br />
&ensp;&ensp;[Etape 5.4 Configuration de l'agent pour automatiser la sauvegarde](#agentconfiguration)<br />
&ensp;&ensp;[Etape 5.5 Test du travail de sauvegarde](#testbackup)<br />
&ensp;&ensp;[Etape 5.6 Configuration de la sauvegarde du catalogue](#catalogbackup)<br />
[Etape 6 Restauration](#restore)<br />



<a name="presentation"></a>
### Etape 1 Présentation

Le logiciel **Tina** est un logiciel de sauvegarde modulaire composé de divers éléments que l'on peut installer sur des machines virtuelles ou physiques. Ce logiciel permet la sauvegarde d'un cluster sous Nutanix. Il peut être utilisé avec plusieurs types de stockages différents. Pour plus d'informations sur la liste des matériels compatibles cliquez sur ce lien [Aller plus loin](#gofurther).

Dans ce guide nous allons utiliser trois machines virtuelles sous **AlmaLinux** en version 8.6.

> [!Primary]
>
> Dans le cas d'une exploitation en production il serait judicieux d'utiliser une **Redhat Enterprise Linux Server** disposant d'un support logiciel à la place de la distribution **AlmaLinux**.
>

Les trois machines virtuelles seront réparties comme ceci :

Deux sur un cluster Nutanix en France en tant que :
- serveur de sauvegarde avec sa console d'administration avec ces paramètres :
    + 8 Go de mémoire, 4 coeurs et 60 Go de stockage
- serveur de déduplication principal en mode **HSS** (Hyper Stream Server).
    + 8 Go de mémoire, 4 coeurs 60 Go de stockage pour le logiciel et 600 Go pour le stockage (Cette taille doit être ajustée en fonction des besoins réels)

Une sur un cluster Nutanix au Canada relié en VPN avec pour rôle :
- serveur de déduplication en mode **HSS** servant de réplica au serveur de déduplication **HSS** en France.
    + 8 Go de mémoire, 4 coeurs 60 Go de stockage pour le logiciel et 600 Go pour le stockage (Cette taille doit être ajustée en fonction des besoins réels et devra être identique au serveur de déduplication principal)


> [!Primary]
>
> Le choix fait dans ce guide n'est fourni qu'a titre d'exemple il est plus judicieux d'installer les serveurs de déduplication principal hors du cluster (par exemple : sur un serveur baremetal) mais sur le même réseau que le cluster Nutanix (sur un même vRack au sein d'OVHcloud)
>
> Le serveur de déduplication qui sert pour la réplication doit être lui sur un site distant.
>

<a name="installation"></a>
### Etape 2 Installation et configuration des machines virtuelles

Téléchargez les sources d'installation d'ALMALINUX à partir de ce lien [Sources ALMALINUX](https://mirrors.almalinux.org/isos/x86_64/8.6.html) et aidez-vous de ce guide [Importer des images ISO](https://docs.ovh.com/fr/nutanix/image-import/) pour les importer sur votre cluster Nutanix.

Nous allons utiliser un serveur DNS interne avec comme adresse **192.168.0.200** et un nom de domaine **ad-testing.lan** et rajouter ces adresses : 

- **tina-srv.ad-testing.lan** : Serveur **Tina** en France avec l'adresse IP `192.168.0.210`.
- **tina-adefr.ad-testing.lan** : Serveur de déduplication en France en mode HSS avec l'adresse IP `192.168.0.211`.
- **tina-adecan.ad-testing.lan** : Serveur de déduplication au Canada en mode HSS avec l'adresse IP `192.168.10.210` 

![00 DNS Entry Example 01 ](images/00-dnsexample01.png){.thumbnail}

L'adresse IP interne de **Prism Element** est **192.168.0.111** elle servira lors de la configuration de l'agent.

Aidez-vous de ce guide pour créer une machine virtuelle sous Nutanix [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/).

<a name="createvmtina"></a>
#### **Etape 2.1 Création de la machine virtuelle TINA-SRV**

Choisissez ces paramètres :

- Nom de la machine virtuelle `tina-srv`.
- Un disque de `60Go`.
- 4 `vCPU`.
- 8 Go de `mémoire vive`.
- Un lecteur CDROM connecté aux sources `d'ALMALINUX`.
- Une carte réseau sur le réseau d'administration du cluster Nutanix portant le nom `base`.

![01 Create Tina Srv VM 01](images/01-create-tinasrv01.png){.thumbnail}

<a name="createvmdedup"></a>
#### **Etape 2.2 Création des machines virtuelles pour les serveurs de déduplications**

Utilisez ces valeurs pour les deux VM de déduplication : 

- Nom des machines virtuelle `tina-adefr`. et `tina-adecan`.
- Un disque de `60Go`.
- Un deuxième disque de `500Go`.
- 4 `vCPU`.
- 8Go de `mémoire vive`.
- Un lecteur CDROM connecté aux sources `d'ALMALINUX`.
- Une carte réseau sur le réseau d'administration du cluster Nutanix portant le nom `base`.

![02 Create Tina Srv ADE VM 01](images/02-create-tinasrvade01.png){.thumbnail}

<a name="almalinuxinstallation"></a>
#### **Etape 2.3 Installation d'ALMALINUX**

Cette installation devra se faire 3 fois, pour chaque machine virtuelle créée :

Sur le cluster Nutanix en France :
- tina-srv.
- tina-adefr.

Sur l'autre cluster au Canada :
- tina-adecan.

Démarrez la machine virtuelle et lancez l'installation.

Choisissez la langue `English` et le clavier `English (United States` ensuite cliquez sur `Continue`{.action}.

![03 Installing ALMAOS 01](images/03-install-almaos01.png){.thumbnail}

Cliquez sur `Network & Host Name`{.action}.

![03 Installing ALMAOS 02](images/03-install-almaos02.png){.thumbnail}

Cliquez sur `Configure`{.action}.

![03 Installing ALMAOS 03](images/03-install-almaos03.png){.thumbnail}

Positionnez-vous en haut sur l'onglet `IPv4 Settings`{.action}, choisissez ces informations : 

- **Method** : `Manuel`.
- **Adresses** : `Adresse IP du serveur`.
    + tina-srv : `192.168.0.210`.
    + tina-adefr : `192.168.0.211`.
    + tina-adecan : `192.168.10.210`.
- **Netmask** : `24`.
- **Gateway** : `192.168.0.254` en France ou `192.168.10.254` au Canada.
- **DNS servers** : `192.168.0.200`.
- **Search domains** `ad-testing.lan`.

Ensuite cliquez sur `Save`{.action}.

![03 Installing ALMAOS 04](images/03-install-almaos04.png){.thumbnail}

Cliquez sur le bouton `ON/OFF`{.action} pour activer le réseau. 

Saisissez le nom d'hôte dans `Host Name`{.action} avec ces informations suivant la machine virtuelle : 

- tina-srv.ad-testing.lan pour le serveur **Tina**.
- tina-adefr.ad-testing.lan pour le serveur de déduplication HSS en France.
- tina-adecan.ad-testing.lan pour le serveur de déduplication HSS au Canada.

Cliquez sur `Apply`{.action} et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 05](images/03-install-almaos05.png){.thumbnail}

Cliquez sur `Installation Destination`{.action}.

![03 Installing ALMAOS 06](images/03-install-almaos06.png){.thumbnail}

Sélectionnez le disque de `60Go` et cliquez sur `Done`{.action}.

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

- **Full Name** : `admatempo`.
- **User Name** : `admatempo`.
- **Make this user administrator** : `cochez la case`.
- **Require a password to use this account** : `cochez la case`.
- **Password** : `Mot de passe de l'utilisateur`.
- **Confirm password** : `Mot de passe de l'utilisateur confirmé`.

Ensuite cliquez sur `Done`{.action}.

![03 Installing ALMAOS 15](images/03-install-almaos15.png){.thumbnail}

Cliquez sur `Begin Installation`{.action}.

![03 Installing ALMAOS 16](images/03-install-almaos16.png){.thumbnail}

L'installation débute.

![03 Installing ALMAOS 17](images/03-install-almaos17.png){.thumbnail}

Cliquez sur `Reboot System`{.action}.

![03 Installing ALMAOS 18](images/03-install-almaos18.png){.thumbnail}

Cliquez sur `License Information`{.action}.

![03 Installing ALMAOS 19](images/03-install-almaos19.png){.thumbnail}

Cochez `I accept the license agreement`{.action} et cliquez sur `Done`{.action}.

![03 Installing ALMAOS 20](images/03-install-almaos20.png){.thumbnail}

Cliquez sur `FINISH CONFIGURATION`{.action}.

![03 Installing ALMAOS 21](images/03-install-almaos21.png){.thumbnail}

L'installation est terminée.

![03 Installing ALMAOS 22](images/03-install-almaos22.png){.thumbnail}

<a name="vmcustomization"></a>
#### **Etape 2.4 Personnalisation des trois machines virtuelles**

Sur chacune des machines virtuelles installées nous allons désactiver le pare-feu , IPv6 et selinux. Ensuite nous allons installer et configurer **Tigervnc Server** pour la prise de main à distance avec une interface graphique sous Linux.

Connectez-vous en ssh sur chaque machine virtuelle et suivez ces instructions :

```bash
ssh root@nommachinevirtuelle.ad-testing.lan
```

Ouvrez le fichier **/etc/selinux/config** et remplacez la ligne : 

```conf
SELINUX=enforcing
```

par 

```conf
SELINUX=disabled
```

Revenez sur la console et lancez ces commandes :

```bash
## Arrêt et désactivation du pare-feu
systemctl stop firewalld
systemctl disable firewalld
## Désactivation IPv6
echo "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf
sysctl -p
## Installation de Tigervnc server
dnf install tigervnc-server
## Choix du mot de passe pour Tigervnc server
vncpasswd
mot de passe
confirmation du mot de passe
## répondre non à la création d'un mot de passe pour l'accès en uniquement en visionnage
n
## création d'un lien symbolique sur une librairie afin de faire fonctionner le serveur de licences Tina
ln  -s  /lib64/ld-linux-x86-64.so.2   /lib64/ld-lsb-x86-64.so.3
```

Modifiez le fichier **/etc/tigervnc/vncserver.users**.

```conf
## Ajoutez cette ligne
:1=root
```

Créez le fichier **/root/.vnc/config**.

```conf
session=gnome
securitytypes=vncauth,tlsvnc
geometry=1280x1024
```

Executez ces commandes :

```bash
systemctl enable --now vncserver@:1
reboot
```
<a name="hddconf"></a>
#### **Etape 2.5 Configuration des disques supplémentaires sur les machines de déduplication**



Exécutez ces commandes sur les deux serveurs de déduplications :

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

Ensuite modifier ce fichier **/etc/fstab** à l'aide des informations copiées.

```conf
# Ajout de cette ligne à la fin du fichier /etc/fstab
UUID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" /data                    xfs     defaults        0 0
```

<a name="atempoinstall"></a>
### Etape 3 Installation et configuration des logiciels **Atempo** 


<a name="dedupinstall"></a>
#### **Etape 3.1 Installation du logiciel de déduplication sur tina-adefr et tina-adecan**

Le logiciel de déduplication ADE (Atempo Deduplication Engine) fournit un stockage dédupliqué accessible uniquement au serveur Tina, nous allons installer deux dépôts : 

- L'un en France.
- L'autre au Canada qui servira de réplica pour celui qui se trouve en France.

Suivez ces instructions sur les machines virtuelles **tina-adefr** et **tina-ade**

Connectez-vous avec un client vnc sur le serveur `tina-adexx:5901`.

![04 Installing tina ade01](images/04-install-tina-ade01.png){.thumbnail}

Saisissez `le mot de passe` et cliquez sur `OK`{.action}.

![04 Installing tina ade02](images/04-install-tina-ade02.png){.thumbnail}

Au travers de la console lancez le programme d'installation `ATL533-linux-x64.bin`{.action}.

> [!Primary]
>
> Le logiciel d'installation doit être fourni par la société Atempo
>
> Un serveur de licence devra être installé sur une machine virtuelle accessible à la fois aux serveur **Tina** et aux serveurs de déduplications **HSS** au dela de la période d'éssai de 1 mois. 
>

![04 Installing tina ade03](images/04-install-tina-ade03.png){.thumbnail}

Laissez `English` et cliquez sur `OK`{.action}.

![04 Installing tina ade04](images/04-install-tina-ade04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![04 Installing tina ade05](images/04-install-tina-ade05.png){.thumbnail}

Cochez la case `I accept the terms of the license Agreement`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade06](images/04-install-tina-ade06.png){.thumbnail}

Laissez la case `Atempo Lina`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade07](images/04-install-tina-ade07.png){.thumbnail}

Sélectionnnez `Do not install Atempo License Manager`{.action} et cliquez sur `Next`{.action}.

![04 Installing tina ade08](images/04-install-tina-ade08.png){.thumbnail}

Cliquez sur `Next`{.action}.

![04 Installing tina ade09](images/04-install-tina-ade09.png){.thumbnail}

Cliquez sur `Install`{.action}.

![04 Installing tina ade10](images/04-install-tina-ade10.png){.thumbnail}

L'installation débute.

![04 Installing tina ade11](images/04-install-tina-ade11.png){.thumbnail}

Cliquez sur `Done`{.action}.

![04 Installing tina ade12](images/04-install-tina-ade12.png){.thumbnail}

<a name="dedupconf"></a>
#### **Etape 3.2 Configuration des deux serveurs de déduplications** 

Suivez ces instructions sur les machine virtuelles **tina-adefr** et **tina-adecan**.

Maintenant que l'installation est terminée utilisez un navigateur WEB et allez sur l'adresse `https://tina-adexxx:8181`. Le configurateur va se lancer.

Sélectionnez le dossier `/home`pour le paramètre **Database** et cliquez sur le bouton `Suivant`{.action} en bas.

![05 Configure tina ade01](images/05-configure-tina-ade01.png){.thumbnail}

Choisissez le dossier `/data` dans l'option **storage** ensuite cliquez sur le bouton `Suivant`{.action} en bas à droite.

![05 Configure tina ade02](images/05-configure-tina-ade02.png){.thumbnail}

Laissez les options par défaut dans **Port** et cliquez sur le bouton `Suivant`{.action} en bas.

![05 Configure tina ade03](images/05-configure-tina-ade03.png){.thumbnail}

Choisissez ces options pour **Products**:

- **Activate HyperStream** sur `Yes`.
- **Activate Lina** sur `No`.
- **Activate HVDS** sur `No`.

Ensuite cliquez sur le bouton `Suivant`{.action} en bas à droite.

![05 Configure tina ade04](images/05-configure-tina-ade04.png){.thumbnail}

Pour la configuration **HyperStream** sélectionnez le dossier `/home` et cliquez sur le bouton `Suivant`{.action} en bas.

![05 Configure tina ade05](images/05-configure-tina-ade05.png){.thumbnail}

Pour finir l'installation laissez `Yes` pour **Receive update notifications** et cliquez sur le bouton `validation`{.thumbnail} en bas à droite.

![05 Configure tina ade06](images/05-configure-tina-ade06.png){.thumbnail}

Cliquez sur `OK`{.action} pour redémarrer le programme avec les nouveaux paramètres.

![05 Configure tina ade07](images/05-configure-tina-ade07.png){.thumbnail}

Revenez sur l'URL `https://tinaadexx:8181`. Une fenêtre d'authentification apparait. 

Saisissez le nom d'utilisateur `superadmin` et le mot de passe par défaut `superadmin` ensuite cliquez sur `login`{.action}.

![05 Configure tina ade08](images/05-configure-tina-ade08.png){.thumbnail}

Cochez la case `Do not show again` et cliquez sur `Skip the presentation`{.action}.

![05 Configure tina ade09](images/05-configure-tina-ade09.png){.thumbnail}

Nous allons changer le nom du serveur.

Cliquez sur l'onglet `Server`{.action} et choisissez `Tenants`{.action}.

![05 Configure tina ade10](images/05-configure-tina-ade10.png){.thumbnail}

Positionnez-vous sur le `nom`{.action} ensuite cliquez sur le bouton `Modify`{.action}.

![05 Configure tina ade11](images/05-configure-tina-ade11.png){.thumbnail}

Cliquez sur le `stylo`{.action} en haut à gauche. 

![05 Configure tina ade12](images/05-configure-tina-ade12.png){.thumbnail}

Saisissez le nom du serveur et cliquez sur le bouton de `validation`{.action}.

![05 Configure tina ade13](images/05-configure-tina-ade13.png){.thumbnail}

Cliquez sur la `croix`{.action} pour fermer la fenêtre.

![05 Configure tina ade14](images/05-configure-tina-ade14.png){.thumbnail}

Revenez sur l'onglet `Server`{.action}, prenez l'option `User Management` et choisissez `Advanced`{.action} pour changer le mot de passe du compte **superadmin**.

![05 Configure tina ade15](images/05-configure-tina-ade15.png){.thumbnail}

Cliquez sur le bouton en forme de `stylo`{.action} à coté de **click to modify the password**.

![05 Configure tina ade16](images/05-configure-tina-ade16.png){.thumbnail}

Saisissez deux fois le mot de passe pour le confirmer ensuite cliquez sur le bouton `validation`{.action}. 

![05 Configure tina ade17](images/05-configure-tina-ade17.png){.thumbnail}

Nous allons modifier le mot de passe du compte **admin**. Ce compte est utilisé sur le serveur **tina**.

Au travers de l'onglet l'onglet `Server`{.action}, prenez l'option `User Management` et choisissez `Users`{.action}.

![05 Configure tina ade18](images/05-configure-tina-ade18.png){.thumbnail}

Sélectionnez l'utilisateur `admin` et cliquez sur `Modify`{.action}.

![05 Configure tina ade19](images/05-configure-tina-ade19.png){.thumbnail}

Cliquez sur `click to modify the password`{.action}.

![05 Configure tina ade20](images/05-configure-tina-ade20.png){.thumbnail}

Saisissez deux fois le mot de passe, ensuite cliquez sur le bouton `validation`{.action}.

![05 Configure tina ade21](images/05-configure-tina-ade21.png){.thumbnail}

<a name="tinainstall"></a>
#### **Etape 3.3 Installation du logiciel **Tina** sur tina-srv**

Connectez-vous sur **tina-srv** avec un client vnc sur cette adresse `tina-srv:5901`{.action}.

Si vous utilisez Windows vous pouvez installer le logiciel [TightVNC](https://www.tightvnc.com/download.php).

![06 tina server installation 01](images/06-install-tina-server01.png){.thumbnail}

Saisissez le mot de passe de **VNC** et cliquez sur `OK`{.action}.

![06 tina server installation 02](images/06-install-tina-server02.png){.thumbnail}

Lancez le programme d'installation `Atempo-tina-4.7.0.6413-Server-Agent-Linux-X64`{.action} au travers d'une console texte.

> [!Primary]
> Le logiciel d'installation doit être fourni par la société Atempo
>

![06 tina server installation 03](images/06-install-tina-server03.png){.thumbnail}

Laissez la langue en `English` et cliquez sur `OK`{.action}.

![06 tina server installation 04](images/06-install-tina-server04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![06 tina server installation 05](images/06-install-tina-server05.png){.thumbnail}

Cochez sur la `case`{.action} à coté de **I accept the terms of the License Agreement**, ensuite cliquez sur `Next`{.action}.

![06 tina server installation 06](images/06-install-tina-server06.png){.thumbnail}

Cochez les cases `Time Navigator`{.action} et `Atempo License Manager`{.action}, ensuite cliquez sur `Next`{.action}.

![06 tina server installation 07](images/06-install-tina-server07.png){.thumbnail}

Cliquez sur `Next`{.action}.

![06 tina server installation 08](images/06-install-tina-server08.png){.thumbnail}

Sélectionnez `I do not have a license file yet`{.action} et cliquez sur `Next`{.action}.

![06 tina server installation 09](images/06-install-tina-server09.png){.thumbnail}

Choisissez l'option `Time Navigator Server`{.action} ensuite cliquez sur `Next`{.action}.

![06 tina server installation 10](images/06-install-tina-server10.png){.thumbnail}

Cliquez sur `Next`{.action}.

![06 tina server installation 11](images/06-install-tina-server11.png){.thumbnail}

Choisissez `Temporary License`{.action} et cliquez sur `Next`{.action}.

![06 tina server installation 12](images/06-install-tina-server12.png){.thumbnail}

Sélectionnez `Create a Catalog Now`{.action} et cliquez sur `Next`{.action}.

![06 tina server installation 13](images/06-install-tina-server13.png){.thumbnail}

Choisissez ces options :

- **Catalog Name** : `catalog`.
- **Administrator User Name** : `admin`.
- **Administrator User Password** :  `mot de passe du compte admin`.
- **Confirm Administrator Password** : `mot de passe du compte admin`.

> [!warning]
>
> Notez les informations de connexions, elles vous serviront pour vous authentifier sur le serveur **Tina**
>
>

Ensuite cliquez sur `Next`{.action}.

![06 tina server installation 14](images/06-install-tina-server14.png){.thumbnail}

Sélectionnez l'option `Memory`{.action} ensuite cliquez sur `Next`{.action}.

![06 tina server installation 15](images/06-install-tina-server15.png){.thumbnail}

Gardez l'option de cache à `64MB`{.action} et cliquez sur `Next`{.action}.

![06 tina server installation 16](images/06-install-tina-server16.png){.thumbnail}

Gardez le port par défaut et Cliquez sur `Next`{.action}.

![06 tina server installation 17](images/06-install-tina-server17.png){.thumbnail}

Choisissez le `nom du serveur smtp` dans **SMTP Server Name:** et cliquez sur `Next`{.action}.

![06 tina server installation 18](images/06-install-tina-server18.png){.thumbnail}

Cliquez sur `Install`{.action}.

![06 tina server installation 19](images/06-install-tina-server19.png){.thumbnail}

L'installation se lance.

![06 tina server installation 20](images/06-install-tina-server20.png){.thumbnail}

Cliquez sur `Done`{.action} pour valider la fin de l'installation.

![06 tina server installation 21](images/06-install-tina-server21.png){.thumbnail}


<a name="replication"></a>
### Etape 4 Mise en place de la réplication entre serveurs de déduplication.

Nous allons configurer la réplication à partir du serveur qui se trouve en France **tina-adefr** vers le serveur se trouvant au Canada **tina-adecan** pour avoir une sauvegarde sur un site distant.

Connectez-vous à l'adresse https://tina-adefr:8181.

Cliquez sur l'onglet `Server`{.action}, Choisissez `Replication`{.action} depuis le menu `Configuration`.

![07 Configure replication 01](images/07-configure-replication01.png){.thumbnail}

Cliquez sur le bouton `Add`{.action}.

![07 Configure replication 02](images/07-configure-replication02.png){.thumbnail}

Dans **Host : Port**: , choisissez ces options :

- **Host** : `tina-adecan`.
- **Port** : `8181`.

Ensuite cliquez sur `Validate the creation`{.action}.

![07 Configure replication 03](images/07-configure-replication03.png){.thumbnail}

La réplication est active, toutes les nouvelles données stockées sur le serveur de déduplication en France seront copiées sur le serveur déduplication au Canada.

![07 Configure replication 04](images/07-configure-replication04.png){.thumbnail}

<a name="configuretina"></a>
### Etape 5 Configuration du serveur **Tina**

Connectez-vous au serveur au travers d'un navigateur WEB sur l'adresse privé **https://tina-srv:22088**.

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

<a name="addrepo"></a>
#### **Etape 5.1 Ajout de la destination de sauvegarde**

Nous allons configurer le serveur **tina-adefr** en tant que dépôt de sauvegarde.

Cliquez à gauche dans la barre verticale sur `Backup`{.action} ensuite cliquez sur `Add new storage`{.action}.

![09 configure repository 01](images/09-configure-repository01.png){.thumbnail}

Sélectionnez `Atempo deduplication (HyperStream)` et cliquez sur `Next`{.action}.

![09 configure repository 02](images/09-configure-repository02.png){.thumbnail}

Saisissez ces informations : 

- **Enter a name for the storage** : `Nom qui apparaitra pour les sauvegardes`.
- **Deduplication-server where data will be saved** : `nom FQDN du serveur de déduplication`.
- **Username** : `Compte administrateur du serveur de déduplication`.
- **Password** : `Mot de passe du compte administrateur`.

et cliquez sur `CHECK SERVER CONNECTION`{.action}.

![09 configure repository 03](images/09-configure-repository03.png){.thumbnail}

La connexion au serveur de déduplication est validée grâce à l'information **Connection to server successful**.

Modifiez les options de taille et de nombre de bandes comme ceci :

- **Number of drives** : `10`
- **Media size** : `1GB`
- **Compression algorithm** : `Brotli`

Ensuite faites défiler la fenêtre avec la `barre de défilement à droite`{.action}.

![09 configure repository 04](images/09-configure-repository04.png){.thumbnail}

Activez `Define a primary data retention pool`{.action} avec ces paramètres :

- **Retention** : `Limited`.
- **Data to be kept during** : `1 week(s)`.
- **Storage pool name** : `1w_HSS`.
- **Prefix or cartrige (label)** : `1w_HSS_`.

Ensuite cliquez sur `FINISH`{.action}.

![09 configure repository 05](images/09-configure-repository05.png){.thumbnail}

Cliquez sur `OK`{.action}.

![09 configure repository 06](images/09-configure-repository06.png){.thumbnail}

<a name="nutanixconf"></a>
#### **Etape 5.2 Ajout du cluster Nutanix en tant que source de sauvegarde**

Nous allons configurer l'agent installé avec le serveur **tina-srv** pour qu'il se connecte au cluster Nutanix.

Restez sur `Backup` à gauche et cliquez sur `Add new agent`{.action}.

![10 configure nutanix agent 01](images/10-configure-nutanix-agent01.png){.thumbnail}

Sélectionnez `Declare a new application`, choisissez dans la liste `Nutanix Virtualisation Agent` ensuite cliquez sur `NEXT`{.action}.

![10 configure nutanix agent 02](images/10-configure-nutanix-agent02.png){.thumbnail}

Modifier **Status** en `Enabled`{.action} et modifier ces paramètres :

- **Virtualisation server** : `Adresse IP privée de Prism Element`.
- **Virtualization user** : `Utilisateur administrateur de Prism Element`.
- **virtualization password** : `Mot passe du compte administrateur Prism Element`.
- **Nutanix protocol** : `https`.

Ensuite cliquez sur `FINISH`{.action}.

![10 configure nutanix agent 03](images/10-configure-nutanix-agent03.png){.thumbnail}

Cliquez sur `FINISH`{.action}.

![10 configure nutanix agent 04](images/10-configure-nutanix-agent04.png){.thumbnail}

<a name="scheduleconf"></a>
#### **Etape 5.3 Création d'un nouveau planning de sauvegarde**

Restez à gauche dans `Backup` et cliquez sur `Backup schedules`{.action}.

![11 configure schedule 01](images/11-configure-schedule01.png){.thumbnail}

Cliquez sur `Add new schedule`{.action}.

![11 configure schedule 02](images/11-configure-schedule02.png){.thumbnail}

Choisissez ces options :

- **Backup every** : `1 Day`.
- **Execution time** : `20:00`.

Et cliquez sur `Save`{.action}.

![11 configure schedule 03](images/11-configure-schedule03.png){.thumbnail}

<a name="agentconfiguration"></a>
#### **Etape 5.4 Configuration de l'agent pour automatiser la sauvegarde**

Cliquez à gauche sur `Agents`, cliquez sur `Not configured`{.action} pour voir les agents non configurés, ensuite cliquez sur le `signe +`{.action} à gauche à côté de l'agent pour Nutanix.

![12 configure nutanix backup 01](images/12-configurenutanixbackup01.png){.thumbnail}

Laissez coché `A` pour **strategy name**, cochez **Strategie for backup on virtual tapes using HSS deduplication**, ensuite cliquez sur `Next`{.action}.

![12 configure nutanix backup 02](images/12-configurenutanixbackup02.png){.thumbnail}

Décochez `Full backup schedule`{.action} dans **Full backup configuration** ensuite cochez `Incremental backup schedule`{.action} dans **Incremental backup configuration** et choisissez un `Planning` dans **Select a schedule for incremental backups**.

![12 configure nutanix backup 03](images/12-configurenutanixbackup03.png){.thumbnail}

Ensuite faites défiler la `barre de défilement`{.action}.

Choisissez `3` à **Parallelism index** pour pouvoir faire trois sauvegardes simultanément, ensuite cochez a case `Authorize on demand backup`{.action} pour autoriser le lancement manuel de la sauvegarde et cliquez sur `FINISH`{.action}.

> [!Primary]
> Il est possible d'augmenter la valeur de **Parallelism index** pour optimiser la vitesse de sauvegarde en exécutant plus de travaux de sauvegardes à la fois.
>

![12 configure nutanix backup 04](images/12-configurenutanixbackup04.png){.thumbnail}

Cliquez sur `Configured`{.action} pour voir apparaitre les travaux configurés, Ensuite cliquez sur le travail de sauvegarde `Nutanix Cluster`{.action}.

![12 configure nutanix backup 05](images/12-configurenutanixbackup05.png){.thumbnail}

Positionnez-vous sur `Backup selections`{.action} à gauche ensuite cliquez sur `Add new backup selection`{.action}

![12 configure nutanix backup 06](images/12-configurenutanixbackup06.png){.thumbnail}

Cliquez sur `Browse agent`{.action}.

![12 configure nutanix backup 07](images/12-configurenutanixbackup07.png){.thumbnail}

Saisissez ces informations :

- **Login** : `Compte root de la machine virtuelle qui exécute l'agent`.
- **Password** : `Mot de passe du compte root de la machine virtuelle qui exécute l'agent`.

Ensuite cliquez sur `Login`{.action}.

![12 configure nutanix backup 08](images/12-configurenutanixbackup08.png){.thumbnail}

Sélectionnez les `machine virtuelles` et cliquez sur `OK`{.action}.

![12 configure nutanix backup 09](images/12-configurenutanixbackup09.png){.thumbnail}

Cliquez sur `FINISH`{.action}.

![12 configure nutanix backup 10](images/12-configurenutanixbackup10.png){.thumbnail}

La configuration du travail de sauvegarde est terminée, cliquez sur la `croix`{.action} en haut à gauche pour fermer la fenêtre.

![12 configure nutanix backup 11](images/12-configurenutanixbackup11.png){.thumbnail}

<a name="testbackup"></a>
#### **Etape 5.5 Test du travail de sauvegarde**

Il est possible de lancer la sauvegarde manuellement, pour ceci restez sur `Agents`{.action} à droite, cochez le `travail de sauvegarde`{.action} et cliquez sur la flèche `exécution`{.action} pour lancer un travail de sauvegarde.

![13 test backup 01](images/13-test-backup01.png){.thumbnail}

Choisissez `Incremental`{.action} et cliquez sur `Launch backup`{.action}

> [!primary]
> Lorsque l'on exécute une sauvegarde pour la première fois même si l'on choisit **incremental** la sauvegarde sera complète.
>

![13 test backup 02](images/13-test-backup02.png){.thumbnail}

Cliquez sur `OK`{.action}.

![13 test backup 03](images/13-test-backup03.png){.thumbnail}

Cliquez à gauche sur `Jobs`{.action} pour voir l'état d'avancement du travail de sauvegarde.

![13 test backup 03](images/13-test-backup04.png){.thumbnail}

<a name="catalogbackup"></a>
#### **Etape 5.6 Configuration de la sauvegarde du catalogue**

Pour des raisons de sureté il est prudent de sauvegarder le catalogue. Il existe un agent de sauvegarde **catalog.cat** installé mais pas configuré par défaut. Nous allons le configurer pour faire une sauvegarde tous les jours à midi.

Cliquez à gauche sur `Agents`{.action}, cliquez sur `Not configured`{.action} ensuite cliquez sur `catalog.cat`{.action}.

![14 config-catalog-backup01](images/14-config-catalog-backup01.png){.thumbnail}

Modifiez **Status** par `Enabled` et faites défiler la fenêtre à l'aide de la `barre de défilement`{.action}.

![14 config-catalog-backup02](images/14-config-catalog-backup02.png){.thumbnail}

Modifier l'option **Number of Disk Backup Copies to Keep** à `3` ensuite cliquez sur `Add new variable`{.action}.

![14 config-catalog-backup03](images/14-config-catalog-backup03.png){.thumbnail}

Cochez `Path to Disk Backup Copy`{.action} et cliquez sur `Add variable(s)`{.action}.

![14 config-catalog-backup04](images/14-config-catalog-backup04.png){.thumbnail}

Modifiez la variable **Path to Disk Backup Copy** par `un dossier local sur le serveur Tina`{.action} ensuite cliquez sur `Save`{.action}.

> [!primary]
>
> Le catalogue sera à la fois sauvegardé sur le dépôt et aussi en local sur le serveur de sauvegarde
> 

![14 config-catalog-backup05](images/14-config-catalog-backup05.png){.thumbnail}

Cliquez sur `OK`{.action}.

![14 config-catalog-backup06](images/14-config-catalog-backup06.png){.thumbnail}

Cliquez à gauche sur `Stratégies`{.action} et cliquez sur `Add new strategy`{.action}.

![14 config-catalog-backup07](images/14-config-catalog-backup07.png){.thumbnail}

Choisissez `A`{.action} comme nom de stratégie prenez `Strategy for backup on virtual tapes using HSS deduplication`{.action} comme type de stratégie ensuite cliquez sur `NEXT`{.action}.

![14 config-catalog-backup08](images/14-config-catalog-backup08.png){.thumbnail}

Cochez `Full backup schedule`{.action} et cliquez sur `Add new schedule`{.action}.

![14 config-catalog-backup09](images/14-config-catalog-backup09.png){.thumbnail}

Choisissez ces options :

- **Backup Every** : `1 Day`.
- **Execution time** : `12:00`.

Ensuite cliquez sur `Save`{.action}.

![14 config-catalog-backup10](images/14-config-catalog-backup10.png){.thumbnail}
 
Cliquez sur `OK`{.action}.

![14 config-catalog-backup11](images/14-config-catalog-backup11.png){.thumbnail}

Faites défiler la fenêtre, décochez `Incremental backup schedule`{.action}, cochez `Authorize on demand backup`{.action} ensuite cliquez sur `FINISH`{.action}.

![14 config-catalog-backup12](images/14-config-catalog-backup12.png){.thumbnail}

Cliquez sur `FINISH`{.action}.

![14 config-catalog-backup13](images/14-config-catalog-backup13.png){.thumbnail}

Cliquez sur la `croix`{.action} à droite pour fermer.

![14 config-catalog-backup14](images/14-config-catalog-backup14.png){.thumbnail}

Cliquez sur `Configured`{.action} pour voir le travail de sauvegarde **catalog.cat** Activé et configuré.

![14 config-catalog-backup15](images/14-config-catalog-backup15.png){.thumbnail}

<a name="restore"></a>
### Etape 6 Restauration d'une sauvegarde

Le logiciel **Tina** permet la restauration d'une machine virtuelle entière au travers de l'agent Nutanix. Si l'on souhaite des restaurations granulaires au niveau des fichiers ou des bases de données il faut installer un agent sur le serveur à restaurer et de créer un travail de sauvegarde supplémentaire.

Nous allons voir comment restaurer une machine virtuelle vers le cluster Nutanix.

Au travers de la console **Tina** positionnez-vous à gauche sur `Restore`{.action} et cliquez sur `Nutanix virtual machines`{.action}.

![15 restore vm 01](images/15-restore-vm01.png){.thumbnail}

Cliquez sur `FIND`{.action} pour rechercher les machines virtuelles à restaurer.

![15 restore vm 02](images/15-restore-vm02.png){.thumbnail}

Cochez la `case à cocher`{.action} à côté de la machine virtuelle pour la sélectionner ensuite cliquez sur `Next`{.action}.

![15 restore vm 03](images/15-restore-vm03.png){.thumbnail}

Saisissez le compte `root`{.action} de la machine virtuelle du serveur **tina-srv** ainsi que le `mot de passe`{.action} et cliquez sur `Next`{.action}.

![15 restore vm 04](images/15-restore-vm04.png){.thumbnail}

Cliquez sur `RESTORE OPTIONS`{.action}.

![15 restore vm 05](images/15-restore-vm05.png){.thumbnail}

Choisissez `Other location`{.action}, saisissez le `nouveau nom de la machine virtuelle restaurée`{.action}, Ensuite cliquez sur l'icône `...`{.action}.

![15 restore vm 06](images/15-restore-vm06.png){.thumbnail}

Sélectionnez le dossier `/tmp`{.action} et cliquez sur `OK`{.action}.

![15 restore vm 07](images/15-restore-vm07.png){.thumbnail}

Cliquez sur `START RESTORE`{.action}.

![15 restore vm 08](images/15-restore-vm08.png){.thumbnail}

Cliquez sur `OK`{.action}.

![15 restore vm 09](images/15-restore-vm09.png){.thumbnail}

Cliquez sur `Jobs`{.action} pour voir l'état d'avancement de la restauration.

![15 restore vm 10](images/15-restore-vm10.png){.thumbnail}

## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Guide de compatibilité Tina 2022](https://www.atempo.com/wp-content/uploads/2022/01/COMPATIBILITY-GUIDE_en_Tina_469_24-01-2022.pdf)

