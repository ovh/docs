---
title: Installer Tanzu Community Edition
slug: tanzu-ce-install
excerpt: Integrer Tanzu Community Edition (TCE) à votre infrastructure OVHcloud
section: Tanzu
order: 01
---

**Dernière mise à jour le 04/03/2022**

## Objectif

VMware Tanzu Community Edition (TCE) est une plate-forme Kubernetes complète et simple à gérer.<br>
Vous pouvez déployer ce produit sur votre infrastructure OVHcloud pour profiter de ses fonctionnalités et de son évolutivité.

**Ce guide est un exemple avec toutes les étapes de l'installation de TCE**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir un identifiant actif dans vSphere
- Avoir déployé une [NSX Edge Services Gateway](https://docs.ovh.com/fr/private-cloud/comment-deployer-une-nsx-edge-gateway/)
- Configurer le service [dhcp](https://docs.ovh.com/fr/private-cloud/configurer-le-dhcp-sur-une-edge-nsx/) sur la NSX Gateway


## En pratique

### Réseau

Comme indiqué dans les prérequis (avec liens vers les documents liés), nous utilisons une NSX Edge Gateway pour les services de firewall et de DHCP.<br>
D'autres composants réseau peuvent servir d'alternative, notament pfsense.<br>

Pour paramétrer votre réseau, définissez une adresse IP publique pour l'accès extérieur et un réseau interne avec le service dhcp activé pour l'infrastructure TCE.<br>
Votre Datacenter est livré avec un certain nombre d'IPs publiques utilisables pour vos besoins. Elles sont visibles dans l'onglet `Configurer`{.action} du Datacenter, dans la section `Réseau`{.action}. Vous verrez également les paramètres de masque et de passerelle sur la page.<br>
Consultez notre documentation pour [Ajouter un bloc d'IP](https://docs.ovh.com/fr/private-cloud/ajout-de-bloc-ip/) si vous n'avez plus d'IP publique utilisable.

![](images/en00ipblocks.png){.thumbnail}

> [!warning]
>
> Les adresses IP marquées comme "Reserved" sont utilisées pour les services liés au datacenter et ne sont pas disponibles pour autre choses.
>

Pour notre exemple, la NSX Edge Services Gateway est paramétrée comme suit avec deux interfaces
- une interface externe (Uplink) avec une IP publique principale et une secondaire (xxx.xxx.xxx.225 and xxx.xxx.xxx.226)
- une interface interne (Internal) avec une IP privée 172.16.13.1 sur le VLAN13<br>
![](images/en01nsxinter.png){.thumbnail}
- le service dhcp distribue un pool d'adresse de 172.16.13.10 à 172.16.13.100 sur le VLAN13<br>
![](images/en02nsxdhcp.png){.thumbnail}
- Une règle SNAT traduit le réseau 172.16.13.1/24 par l'adresse publique xxx.xxx.xxx.226 pour l'accès externe<br>
![](images/en03nsxsnat.png){.thumbnail}

Dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans l'onglet `Sécurité`{.action} de votre Private Cloud, ajoutez les adresses IP publiques utilisées à la liste des adresses autorisées à se connecter.<br>
Les adresses apparaîtront comme "Autorisé et mis en place".<br>
![](images/en00ipsec.png){.thumbnail}

### Image de noeud

Les clusters TCE nécessitent l'utilisation d'une image pour créer les nœuds. Cette image peut être téléchargée depuis le site Web [VMware Customer Connect](https://customerconnect.vmware.com/downloads/get-download?downloadGroup=TCE-0100). Si vous ne possédez pas de compte, vous pouvez en créer un gratuitement.

Sélectionnez la dernière version du fichier OVA à utiliser et téléchargez-la localement.

![](images/en22down.png){.thumbnail}

Dans vSphere, faites un clic droit sur un hôte ou un cluster et sélectionnez `Déployer un modèle OVF`{.action}..

![](images/en23ovfdeploy.png){.thumbnail}

Recherchez le fichier OVA téléchargé et déployez-le.

![](images/en24ovfopen.png){.thumbnail}

Pour finir, faites un clic droit sur la VM et dans la section `Modèle`{.action}, sélectionnez `Convertir au modèle`{.action}.

![](images/en25template.png){.thumbnail}


### VM de Bootstrap

Une fois le réseau et le modèle prêts, une VM de Bootstrap est nécessaire pour les composants logiciels (Docker et Kubectl) et le pilotage de l'installation de TCE.<br>
Nous utilisons une machine virtuelle sous Ubuntu, mais tout système d'exploitation permettant l'installation des éléments nécessaires est possible.<br>
Les prérequis pour TCE sont un VM avec 2 CPU et 6 Go de RAM.<br>
Vous pouvez déployer une VM [depuis un ISO](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle/) ou [depuis un modèle OVF](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/).<br>

Assurez-vous que la machine virtuelle utilise le VLAN défini pour les clusters TCE (VLAN13 dans notre cas).<br>
![](images/en04bootvlan.png){.thumbnail}

Dans une fenêtre de terminal, commencez par entrer les commandes de mise à jour :
>sudo apt update
puis
>sudo apt-get install build-essential

#### Installation [NTP](https://vitux.com/how-to-install-ntp-server-and-client-on-ubuntu/)

>sudo apt-get install ntp

#### Installation [Homebrew](https://www.how2shout.com/linux/how-to-install-brew-ubuntu-20-04-lts-linux/)

Intallez git
>sudo apt install git -y

lancez le script d'installation de Homebrew
>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Ajoutez Homebrew à votre path
>eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

Installez gcc
>brew install gcc

#### Installation [Docker Engine](https://docs.docker.com/engine/install/)

Commencez par les packages nécessaires
>sudo apt-get install \ 
>ca-certificates \ 
>curl \ 
>gnupg \ 
>lsb-release

Ajoutez la clé GPG officielle de Docker
>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

Paramétrez le repository stable
>echo \ 
>"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \ 
>$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

Paramétrez le moteur
>sudo apt-get install docker-ce docker-ce-cli containerd.io

Après l'installation, ajoutez votre utilisateur au groupe docker pour lui permettre d'exécuter l'application sans élévation de droits
>sudo usermod -aG docker $USER

#### Installation [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)

Téléchargez le dernier package
>curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"

Lancez l'installateur
>sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

#### SSH Key Pair

Lancez la commande de création
>ssh-keygen -t rsa -b 4096 -C "youremail@yourdomain.com"

Appuyez sur Entrée pour sauvegarder la clé dans le chemin par défaut (/root/.ssh/id_rsa).<br>
Entrez et confirmez un mot de passe pour la clé.<br>
Ajoutez la clé privée à l'agent SSH en cours d'exécution sur votre VM et entrez le mot de passe créé à l'étape précédente.
>ssh-add ~/.ssh/id_rsa

Gardez le fichier .ssh/id_rsa.pub sous la main, il contient la clé publique nécessaire pour la configuration de TCE.

### Tanzu Management Cluster

La VM est maintenant prête pour le déploiement de TCE.

#### [Tanzu CLI](https://tanzucommunityedition.io/docs/latest/cli-installation/)

Dans un terminal, lancez la commande d'installation de la CLI
>brew install vmware-tanzu/tanzu/tanzu-community-edition

Notez le dossier d'installation et exécutez le script post-installation: {HOMEBREW-INSTALL-LOCATION}/configure-tce.sh
>/home/linuxbrew/.linuxbrew/Cellar/tanzu-community-edition/v0.10.0/libexec/configure-tce.sh

![](images/en05tanzucli.png){.thumbnail}

#### [Deploiement](https://tanzucommunityedition.io/docs/latest/vsphere-install-mgmt/)

Lancez le programme d'installation avec la commande
>tanzu management-cluster create --ui

Dans la fenêtre du navigateur qui s'affiche, sélectionnez l'option vSphere

![](images/en06deploy.png){.thumbnail}

Entrez le FQDN du Private Cloud et remplissez les informations d'identification avant de cliquer sur `Connect`{.action}.

![](images/en07connect.png){.thumbnail}

Cliquez sur `Continue`{.action} pour verifier la SSL footprint.

![](images/en08ssl.png){.thumbnail}

Selectionnez votre datacenter et fournissez la clé publique SSH créée précédement (.ssh/id_rsa.pub).<br>
Cliquez sur `Next`{.action}.

![](images/en09ssh.png){.thumbnail}

Choisissez un type de cluster (Development ou Production) et une taille pour les noeuds.

![](images/en10type.png){.thumbnail}

Entrez un nom de cluster, choisissez un plane enpoint provider et une IP (en dehors du pool dhcp mais dans le même sous réseau).<br>
Cliquez sur `Next`{.action}.

![](images/en11control.png){.thumbnail}

NSX Advanced Load Balancer et Metadata sont des sections optionelles.<br>
Cliquez sur `Next`{.action} pour les deux.

![](images/en12optional.png){.thumbnail}

Choisissez vos emplacements de ressource.<br>
Cliquez sur `Next`{.action}.

![](images/en13resources.png){.thumbnail}

Entrez les paramètres du réseau Kubernetes.<br>
Cliquez sur `Next`{.action}.

![](images/en14kubnet.png){.thumbnail}

Désactivez l'Identity Management.<br>
Cliquez sur `Next`{.action}.

![](images/en15identity.png){.thumbnail}

Selectionnez le modèle pour les noeuds.<br>
Cliquez sur `Next`{.action}.

![](images/en16os.png){.thumbnail}

Cliquez sur `Review Configuration`{.action}.

![](images/en17review.png){.thumbnail}

Cliquez sur `Deploy Management Cluster`{.action}.

![](images/en18deploy.png){.thumbnail}

Une fois l'opération terminée, vérifiez que vous voyez le message de création et que les nœuds sont visibles dans vSphere.

![](images/en20created.png){.thumbnail}

![](images/en21vsphere.png){.thumbnail}

Enregistrez les informations d'identification de l'administrateur du cluster :
>tanzu cluster kubeconfig get "clustername" --admin


### Tanzu Workload Cluster

Pour déployer un cluster de workload, dupliquez et modifiez le fichier de configuration du cluster de management.<br>
Dans un terminal, dans la VM de bootstrap, allez dans le dossier contenant le fichier de configuration.<br>
>cd .config/tanzu/tkg/clusterconfigs

Utilisez ls pour récupérer le nom du fichier yaml puis dupliquez le avec un nouveau nom.<br>
>cp existing.yaml new.yaml

![](images/en26copyconf.png){.thumbnail}

Utilisez un éditeur de texte pour modifier les champs clés:
- CLUSTER_NAME : choisissez un nom pour le nouveau cluster
- VSPHERE_CONTROL_PLANE_ENDPOINT : choisissez une IP libre sur le même sous réseau mais hors du pool dhcp
- VSPHERE_FOLDER : ce n'est pas obligatoire mais vous pouvez définir un dossier différent pour faciliter la gestion<br>
Sauvegardez et fermez le fichier.

De retour dans le terminal, exécutez la commande de déploiement avec votre nouveau fichier yaml.<br>
> tanzu cluster create --file .config/tanzu/tkg/clusterconfigs/new.yaml

Une fois l'opération terminée, vérifiez que vous voyez le message de création et que les nœuds sont visibles dans vSphere.

![](images/en27created.png){.thumbnail}

![](images/en28vsphere.png){.thumbnail}

Enregistrez les informations d'identification de l'administrateur du cluster :
>tanzu cluster kubeconfig get "clustername" --admin

TCE est maintenant prêt à recevoir vos applications.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
