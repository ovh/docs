---
title: "Comment gérer Intel SGX sur un serveur dédié"
excerpt: "Découvrez comment activer l'option SGX sur votre serveur dédié et installer la pile logicielle SGX pour Linux"
updated: 2025-11-20
---

## Objectif

L'activation des Intel Software Guard Extensions (SGX) sur votre serveur vous permet d'exécuter des applications compatibles SGX. Intel SGX offre des fonctionnalités avancées de chiffrement matériel et de sécurité de la mémoire vive, afin d'isoler les parties de code et de données spécifiques à chaque application.

**Ce guide explique comment activer la fonctionnalité SGX, via l'espace client OVHcloud ou via l'API OVHcloud.**

## Prérequis

- Avoir accès à [l'espace client OVHcloud](/links/manager) ou à [l'API OVHcloud](/links/api)
- Avoir un serveur dédié compatible avec [l'option SGX](/links/bare-metal/sgx) dans votre compte OVHcloud
- Disposer des identifiants reçus par e-mail après l'installation
- Ubuntu 24.04 ou équivalent est installé sur le serveur

## En pratique

### Activer SGX

L'activation de SGX est possible depuis l'espace client OVHcloud, l'API OVHcloud ou le BIOS de votre serveur.

> [!tabs]
> **Via l'espace client OVHcloud**
>>
>> **1 - Connexion à l'espace client OVHcloud**
>>
>> Connectez-vous à [l'espace client OVHcloud](/links/manager), accédez à la section `Bare Metal Cloud`{.action} et cliquez sur `Serveurs dédiés`{.action}. Sélectionnez ensuite le serveur sur lequel vous souhaitez activer SGX.
>>
>> **2 - Activer SGX**
>>
>> Depuis l'onglet `Informations générales`{.action}, dans le cadre **Fonctionnalités avancées**, cliquez sur `...`{.action} à côté de la mention **Sécurité - Intel SGX (Software Guard Extensions)** et sélectionnez `Activer SGX`{.action} dans le menu déroulant.
>>
>> ![Activation SGX](images/enable_sgx.png){.thumbnail}
>>
>> Sur l'écran suivant, cliquez sur le bouton `Activer`{.action}.
>>
>> ![Activation SGX](images/enable_sgx2.png){.thumbnail}
>>
>> Vous pouvez choisir d'activer SGX avec une quantité spécifique de mémoire réservée ou en permettant à votre application de réserver automatiquement la mémoire dont elle a besoin. Une fois votre choix fait, cliquez sur `Confirmer`{.action}.
>>
>> ![Gestion SGX](images/manage_sgx.png){.thumbnail}
>>
>> Une fenêtre de confirmation apparaîtra. Veuillez confirmer que vous avez compris que l'activation de la technologie Intel SGX entraînera un redémarrage de votre serveur.
>>
>> ![Activation SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Cela entraînera un ou plusieurs redémarrages de votre serveur, selon son modèle.
>>
> **Via l'API OVHcloud**
>>
>> **1 - Connexion à la console API**
>>
>> Sur la page des [API OVHcloud](/links/console) :
>>
>> - Cliquez sur `Authentication`{.action} en haut à gauche.
>> - Cliquez ensuite sur `Login with OVHcloud SSO`{.action}.
>> - Saisissez vos identifiants OVHcloud.
>> - Cliquez sur le bouton `Authorize`{.action} pour autoriser les appels aux API depuis ce site.
>>
>> **2 - Activer SGX**
>>
>> Récupérez le nom de votre serveur dans la liste retournée par l'appel suivant :
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Vérifiez que votre service dispose de l'option SGX en utilisant cet appel :
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX désactivé](images/get-disabled.png){.thumbnail}
>>
>> Activez SGX en utilisant le nom du serveur :
>>
>> > [!warning]
>> >
>> > Cela entraînera un ou plusieurs redémarrages de votre serveur, selon son modèle.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Configuration SGX](images/post-configure.png){.thumbnail}
>>
>> Vérifiez l'avancement de la tâche de configuration en appelant ce point de terminaison avec le *taskId* retourné par l'appel précédent :
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Obtenir la tâche de configuration SGX](images/get-task.png){.thumbnail}
>>
>> Vous pouvez vérifier que l'état est activé :
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX activé](images/get-enabled.png){.thumbnail}
>>
> **Configuration manuelle dans le BIOS**
>>
>> **1 - Démarrer une session Remote KVM**
>>
>> Connectez-vous à [l'espace client OVHcloud](/links/manager), accédez à la section `Bare Metal Cloud`{.action} et cliquez sur `Serveurs dédiés`{.action}. Sélectionnez ensuite le serveur sur lequel vous souhaitez activer SGX.
>>
>> Depuis l'onglet `IPMI / KMV`{.action}, démarrez une session Remote KVM :
>>
>> ![Démarrer une session Remote KVM](images/manager.png){.thumbnail}
>>
>> **2 - Activer SGX**
>>
>> Ensuite, depuis le KVM, initiez un redémarrage du serveur et entrez dans le BIOS (généralement en appuyant sur la touche `DEL`{.action} ou `F2`{.action}).
>>
>> Dans le BIOS, rendez-vous dans la partie `Advanced` > `Processor Configuration`.
>>
>> Activez les options TME et SGX et configurez la taille PRMRR souhaitée :
>>
>> ![Activer SGX](images/sgx_bios.png){.thumbnail}
>>
>> Sauvegardez les modifications en appuyant sur la touche `F10`{.action}. Une fenêtre de confirmation apparaîtra, veuillez confirmer avec l'option `Yes`.
>>
>> Votre serveur redémarrera ensuite sur votre système d'exploitation.
>>

### Installer la pile logicielle SGX

Utilisez les commandes suivantes pour installer le SDK d'Intel afin de pouvoir développer et exécuter des applications SGX.

Tout d'abord, installez quelques dépendances :

```bash
sudo apt update
sudo apt install autoconf automake build-essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

Ensuite, téléchargez le code source et préparez les sous-modules et les binaires prêts à l'emploi :

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Construisez et installez le SDK SGX :

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Tester l'application d'exemple en mode simulateur

Pour construire et exécuter le code d'exemple *LocalAttestation* en mode simulateur :

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=SIM make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

### Construire et installer le PSW Intel SGX

Le logiciel Intel SGX Platform Software (PSW) fournit des bibliothèques logicielles permettant d'exécuter des applications SGX en mode matériel. Pour créer le référentiel Debian local qui héberge les paquets, exécutez les commandes suivantes :

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Créez le fichier suivant pour ajouter le dépôt local de paquets Debian au système de configuration des dépôts :

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

Ensuite, installez les paquets suivants :

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Tester l'application d'exemple en mode matériel (facultatif)

Pour construire et exécuter le code d'exemple *LocalAttestation* en mode matériel :

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=HW make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

## Aller plus loin

Pour aller plus loin (développer votre propre application, vous inscrire à l'attestation distante, etc.), voici quelques ressources utiles :

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)
