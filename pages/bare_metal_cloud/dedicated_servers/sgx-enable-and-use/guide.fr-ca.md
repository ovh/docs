---
title: 'Activer Intel SGX sur votre serveur dédié'
excerpt: 'Activez l’option SGX sur votre serveur Infrastructure ou Advance et installez la pile de logiciels SGX pour Linux'
updated: 2022-08-31
---

## Objectif

Activez Intel Software Guard Extensions sur votre serveur, pour pouvoir exécuter les applications SGX-ready.
La technologie Intel SGX fournit des fonctions de sécurité avancées de chiffrement matériel de la mémoire. Cela permet d’isoler des parties de code et des données spécifiques d'une application.

## Prérequis

- Avoir un serveur dédié compatible avec l’option [SGX](https://www.ovhcloud.com/fr-ca/bare-metal/intel-software-guard-extensions/){.external}
- Disposer des identifiants de connexion reçus par e-mail suite à l'installation
- Avoir accès à l'[espace client OVHcloud](/links/manager) ou l’[API OVHcloud](https://ca.api.ovh.com/)
- Ubuntu 18.04 ou équivalent installé sur le serveur

## En pratique

### Depuis l'espace client OVHcloud

Connectez-vous à l'[espace client OVHcloud](/links/manager), accédez à la section `Bare Metal Cloud`{.action}, puis sélectionnez le serveur sur lequel vous souhaitez activer SGX dans la section **Serveurs dédiés** du menu de gauche.

#### Activation de l'option

Descendez jusqu'à la zone `Fonctionnalités avancées` et cliquez sur `...`{.action} en face de « Sécurité - Intel SGX (Software Guard Extensions) ». Sélectionnez `Activer SGX`{.action} dans le menu déroulant.

![activation SGX](images/enable_sgx.png){.thumbnail}

Sur l'écran suivant, cliquez sur le bouton `Activer`{.action}.

![activation SGX](images/enable_sgx2.png){.thumbnail}

Vous pouvez choisir d'activer SGX avec une quantité spécifique de mémoire réservée ou de l'activer en permettant à votre logiciel de réserver automatiquement la mémoire dont il a besoin. Une fois que vous avez fait votre choix, cliquez sur `Confirmer`{.action}.

![activation SGX](images/manage_sgx.png){.thumbnail}

Une pop-up de confirmation apparaît, confirmez alors que vous avez bien pris connaissance que l'activation de la technologie Intel SGX nécessite le(s) redémarrage(s) de votre serveur.

![activation SGX](images/confirmation-popup_sgx.png){.thumbnail}

> [!warning]
>
> En fonction du serveur, cette action entraînera 1 à plusieurs redémarrages de celui-ci.

#### Désactivation de l'option

Descendez jusqu'à la zone `Fonctionnalités avancées` et cliquez sur `...`{.action} en face de « Sécurité - Intel SGX (Software Guard Extensions) ». Sélectionnez `Modifier SGX`{.action} dans le menu déroulant. Choisissez l'option `Désactiver`{.action}, puis cliquez sur `Confirmer`{.action}.

![Désactivation de SGX](images/disable_sgx.png){.thumbnail}

> [!warning]
>
> En fonction du serveur, cette action entraînera 1 à plusieurs redémarrages de celui-ci.

Continuez la lecture de ce guide à [l'étape 3](#sgx-softwares) ci-dessous.

### Depuis l'API OVHcloud

#### Étape 1 : Se connecter à l’API

Allez sur <https://ca.api.ovh.com/console/> et cliquez sur `Login`{.action} dans le coin supérieur droit de la page.  
Sur la page suivante, connectez-vous avec les identifiants de votre compte OVHcloud.

#### Étape 2 : Activer SGX

Obtenez le nom de votre serveur de la liste renvoyée par cet appel :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server

Vérifiez que votre service dispose de l’option SGX, avec l’appel suivant :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

Maintenant, activez SGX.

> [!warning]
>
> En fonction du serveur, cette action entraînera 1 à plusieurs redémarrages de celui-ci.

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Vérifiez le progrès de la tâche de configuration en appelant cet endpoint avec le taskId renvoyé par l’appel précédent :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task](images/get-task.png){.thumbnail}

Vous pouvez vérifier que l’état est maintenant «activé» :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

#### Étape 3 : Installer la pile de logiciels SGX <a name="sgx-softwares"></a>

Il faut maintenant installer le driver Intel et SDK pour pouvoir développer et exécuter des applications SGX.  

En premier lieu, il faut installer quelques dépendances :

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Ensuite, téléchargez, créez et installez la pile logicielle SGX :

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR

git clone https://github.com/intel/linux-sgx.git

cd linux-sgx
git checkout sgx_2.6
./download_prebuilt.sh
make -j 6
make sdk_install_pkg -j 6
make deb_pkg -j 6
$BASE_DIR/linux-sgx/linux/installer/bin/sgx_linux_x64_sdk_2.6.100.51363.bin --prefix=$BASE_DIR/

sudo dpkg -i $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-urts_2.6.100.51363-bionic1_amd64.deb $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-enclave-common_2.6.100.51363-bionic1_amd64.deb
```

Téléchargez et installez le driver :

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

#### Étape 4 : Redémarrer pour finir l’installation

#### Étape 5 : Utiliser un modèle d’application pour valider l’installation

Créez une application avec un des modèles fournis :

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Exécutez-la :

```bash
ovh@nsXXXX:/opt/intel/sgxsdk/SampleCode/LocalAttestation$ ./app 

Available Enclaves
Enclave1 - EnclaveID 2
Enclave2 - EnclaveID 3
Enclave3 - EnclaveID 4

Secure Channel Establishment between Source (E1) and Destination (E2) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E2) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E2) Enclaves successful !!!

Secure Channel Establishment between Source (E1) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E2) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E2) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E2) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E3) and Destination (E1) Enclaves successful !!!

Enclave to Enclave Call between Source (E3) and Destination (E1) Enclaves successful !!!

Message Exchange between Source (E3) and Destination (E1) Enclaves successful !!!

Close Session between Source (E1) and Destination (E2) Enclaves successful !!!

Close Session between Source (E1) and Destination (E3) Enclaves successful !!!

Close Session between Source (E2) and Destination (E3) Enclaves successful !!!

Close Session between Source (E3) and Destination (E1) Enclaves successful !!!

Hit a key....
```

## Aller plus loin

Pour aller plus loin (développer votre propre application, s’inscrire pour obtenir une certification à distance, ...), voici quelques ressources utiles :

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Intel SGX linux-2.6 documentation](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}
