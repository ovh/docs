---
title: Mise en route du KMS CipherTrust Manager
slug: kms-cipher-trust
excerpt: Découvrez comment déployer et les premières étape de configuration du KMS CipherTrust Manager sur un environnement vSphere
section: Services et options OVHcloud
hidden: true
---

**Derniére mise à jour le 04/10/2021

## Objectif

Configurer le KMS CipherTrust.

**Ce guide explique comment configuer un KMS Thales CipherTust.**

## Prérequis

Les prérequis nécessaires à la mise en place de l’infrastructure sont :

* Posséder un service Hosted Private Cloud [Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
* Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).
* Avoir une IP publique par instance de KMS
* Avoir les fichiers du modèle OVF présent sur son poste de travails
* La partie publique de la clé SSH 
* Récupération de l'OVA [KMS](https://ovh.to/W2gBYe)
* Une machine permettant l’exécution d’un script bash ayant :
    * jq installé (permettant le parsing de fichier json)
	* ksctl présent sur la machine [utilitaire Thales](https://thalesdocs.com/ctp/cm/latest/get_started/deployment/install-cli-toolkit/index.html)


## En pratique 

### Installer des OVF Cipher Trust Manager  

Etapes :

* Se connecter au vCenter avec un compte permettant le déploiement d’un modèle OVF
* Dans le menu Hôte et cluster, sélectionner le cluster, puis cliquer sur Actions > Déployer un modèle OVF 

![capture1](images/capture1.PNG){.thumbails}

* Suivre les étapes du wizard d’installation :

* Sélectionner les fichiers locaux liés au modèle OVF
* k170v-2.4.0.6018.mf
* k170v-2.4.0.6018.ovf
* k170v-2.4.0.6018 -disk1.vmdk

![capture2](images/capture2.PNG){.thumbails}

*	Next
*	Renseigner le nom de la machine virtuelle
*	Le nom doit être différent entre chaque instance. Ici nous l’appellerons kmsMasterNode

![capture3](images/capture3.PNG){.thumbails}

*	Next
*	Sélectionner la ressource :

*	Chaque instance doit être installée sur un ESXi différent. On sélectionnera donc un membre spécifique du cluster :

![capture4](images/capture4.PNG){.thumbails}

*	Next
*	Vérifier les informations
*	Next
*	Sélectionner le périphérique de stockage

![capture5](images/capture5.PNG){.thumbails}

*	Next
*	Sélectionner le réseaux VM Network

![capture6](images/capture6.PNG){.thumbails}

*	Next
*	Vérifier les informations liées au déploiement
*	Finish

Une fois la VM déployées, ajouter un lecteur CD DVD
*	Sélectionner la VM 

![capture7](images/capture7.PNG){.thumbails}


* Dans l’onglet résumé, au niveau du bloc « Matériel VM », cliquer sur « Modifier les paramètres

![capture8](images/capture8.PNG){.thumbails}


* Ajouter un périphérique > Sélectionner « Lecteur CD/DVD » puis OK

![capture9](images/capture9.PNG){.thumbails}

Configuration de la VM

* Aller dans l’onglet configuration > Option vApp

![capture10](images/capture10.PNG){.thumbails}

*	Cliquer sur « Modifier », un pop up s’ouvre > aller dans l’onglet « Détail du fichier OVF » et sélectionner « Image ISO » puis OK

![capture11](images/capture11.PNG){.thumbails}

preparer le fichier cloud.init selon le modéle suivant

```
#cloud-config
keysecure:
    netcfg:
        iface:
            name: eth0
            type: static
            address: <IP publique ex : 24.42.24.42>
            netmask: <Masque de sous réseaux ex : 255.255.255.240>
            gateway: <Passerelle ex : 24.42.24.40>
    default-ca:
        CN: <CN de l’AC root ex: World CTM Root CA>
        emails:
          - <email ex : support-controltower@world.fr>
        names:
          - C: <Country pour le DN de l’AC ex :FR>
            ST: <State pour le DN de l’AC ex : IDF>
            L: <Locality pour le DN de l’AC ex : ILM>
            O: <Organisation pour le DN de l’AC ex : World>
            OU: <Département pour le DN de l’AC ex : World assistance>
```

Attention : 

*	ce fichier ne doit pas contenir de tabulation, uniquement les espace sont acceptés
*	Toutes les valeurs entre « < » et « > » doivent être remplacées par les bonnes valeurs
Mettre le fichier cloud.init en base 64. Exemple : 

`openssl base64 -in cloud.init -out cloudb64.init`

* Attention : La chaine en base 64 doit être sur une seule ligne pour le reste de l’opération.

Finalisation de la configuration de la VM
*	Aller dans l’onglet configuration > Option vApp cliquer sur « Ajouter », un pop up s’ouvre
*	Dans l’onglet Général : Renseigner l’étiquette en écrivant « user-data »
*	Dans l’onglet Type : Renseigner la valeur par défaut en positionnant le base64 de l’étape 6

![capture12](images/capture12.PNG){.thumbails}

![capture13](images/capture13.PNG){.thumbails}

Démarrer la VM et vérifier qu’à l’issu du démarrage l’IP configurée est bien présente.

A l’issue de ces étapes, les différentes instances doivent être visibles. Exemple : 

![capture14](images/capture14.PNG){.thumbails}

![capture15](images/capture15.PNG){.thumbails}

![capture16](images/capture16.PNG){.thumbails}

## Pré-configurer chaque instance

Attention : dans ces étapes, il est important que la clé SSH ainsi que les mots de passe définits dans les différentes instances d’un client soient identiques.

Lors de la génération du mot de passe temporaire, attention à ce que le mot de passe respecte les policy suivantes.

![capture17](images/capture17.PNG){.thumbails}


Etapes:

Première authentification au KMS
*	Se connecter sur l’appliance : adresseIp
*	Renseigner la clé SSH publique du client

![capture19](images/capture19.PNG){.thumbails}

*	L’insertion peut prendre quelques minutes afin que les microservices puissent se lancer

Changement du mot de passe
*	Depuis la fenêtre, rentrer les mots de passes par défaut : admin / admin
*	Une nouvelle fenêtre arrive afin de renouveler le mot de passe. Positionner un mot de passe temporaire qui sera à transmettre au client afin que ce dernier puisse le modifier par la suite.

![capture20](images/capture20.PNG){.thumbails}

*	Cliquer sur « Change Password »
*	Authentifier vous pour vérifier la bonne prise en compte du mot de passe

![capture21](images/capture21.PNG){.thumbails}

## Créer le script de configuration automatique

Etapes :

* Se positionner sur une machine ayant un accès aux IPs publiques des instances du KMS
* Désarchiver le package réceptionné et vérifier ll’arborescence :

*	config
*	config.yaml
*	configprofile.json
*	cloud.init.template
*	ext_ca
*	sectigo_rsa.cer
*	usertrust_rsa.cer
*	kmip_ssl
*	kmip_user
*	logs
*	web_ssl
*	config.json
*	ctmInit.sh
*	ksctl.exe
*	ksctlversion
*	ksctl

KSCTL et fournit par Thales en version exécutable windows, Linux et darwin.
A la racine du package, la version windows est présente, la version Linux est quant à elle disponible dans le répertpore ksctlversion.

Avant de continuer, il est important de positionner, à la racine du package, la version de KSCTL correspondant au system d’exploitation utilisé.

Attention : le script est un script bash, dans le cas d’une utilisation sous Windows, penser à utiliser un mobaXterm ou autre outil permettant de simuler un environnement Linux

* Configuration d’accès au KMS
 * Editer le fichier config/config.yaml
 * Modifier les éléments suivants :

* KSCTL_PASSWORD : password mis à jour lors de l’étape 2 du §3
* KSCTL_URL : https://<ip>:443 en utilisant l’IP de l’une des deux instances

Exemple de fichier :

KSCTL_VERBOSITY: false
KSCTL_RESP: json
KSCTL_USERNAME: admin
KSCTL_PASSWORD: supernova123!
KSCTL_URL: https://51.222.126.181:443
KSCTL_JWT:
KSCTL_NOSSLVERIFY: true
KSCTL_TIMEOUT: 30

* OPTIONNEL
Configuration du profile de certificat utilisateur kmip
*	Editer le fichier config/configprofile.json
*	Ce fichier est à modifier uniquement dans le cas où l’on souhaite changer le nom de l’utilisateur kmip. Dans cette hypothèse, modifier la proproété « csr_cn »

```
Exemple de fichier :
{
    "cert_user_field": "CN",
    "csr_cn": "kmip_user",
    "csr_org_name": "",
    "csr_org_unit": "",
    "csr_email": "",
    "csr_city": "",
    "csr_state": "",
    "csr_country": "",
    "csr_uid": ""
}
```

* Configuration du script :

* Editer le fichier config.json
* Mettre à jour les informations :

Exemple et explication : 
```
{
	
  "logfile": "logs/init.log", #path et nom du fichier de logs
  "yamlconffile": "config/config.yaml", #path et nom du fichier de de configuration d’accès aux instances KMS
  "kmip_profile_cnf": "config/configprofile.json", #path et nom du fichier de configuration du profile de certificats KMIP client
  "kms_ip": "51.222.126.181", #IP du master node
  "kms_ip_other_nodes":"51.222.126.182", #IP des nœuds secondaires. Si plus de 2 instances, indiquer les IP des instances 2 à X séparés par des « , » exemple : x.x.x.x,y.y.y.y
  "ca_external1": "ext_ca/sectigo_rsa.cer", # path et nom du premier certificat externe à importer
  "ca_external2": "ext_ca/usertrust_rsa.cer", #path et nom du second certificat externe à importer
  "kmip_ssl_crt": "kmip_ssl/kmip_ssl_crt.pem", #path et nom du certificat SSL KMIP à générer
  "kmip_ssl_key": "kmip_ssl/kmip_ssl_key.key", #path et nom de la clé privée du certificat SSL KMIP à générer
  "kmip_ssl_cn":"kmip.server", #CN du certificat SSL KMIP
  "web_ssl_crt": "web_ssl/web_ssl_crt.pem", #path et nom du certificat SSL WEB à générer
  "web_ssl_key": "web_ssl/web_ssl_key.key", #path et nom de la clé privée du certificat SSL WEB à générer
  "web_ssl_cn":"kmip.server", #CN du certificat SSL WEB	
  "kms_kmip_user_pwd": "TotoTest123_", #Mot de passe temporaire du user KMIP
  "kmip_profile_name": "kmip_user_profile", #Nom du profile KMIP à créer
  "kmip_user_cert": "kmip_user/kmip_user_cert.pem", #path et nom de la clé privée du certificat client KMIP à générer
  "kmip_user_key": "kmip_user/kmip_user_ckey.key", #path et nom de la clé privée du certificat client KMIP à générer
  "kmip_server_cert_duration": 365, #durée de validité du certificat SSL server KMIP
  "kmip_client_cert_duration": 365, #durée de validité du certificat SSL client KMIP
  "web_server_cert_duration": 365, #durée de validité du certificat SSL server WEB
}
```

## Exécuter le script de configuration automatique

Le script de configuration automatique permet de réaliser les opérations suivantes :

* Création du cluster
* Ajout des instances complémentaires dans le cluster
* Création d’un utilisateur KMIP 
* Ajout des privilèges à cet utilisateur
* Ajout des ACs externes (ACs utilisées par le manager OVH)
* Génération des certificats SSL Server pour les services KMIP et WEB
* Modification des configurations des interfaces KMIP et WEB
* Configuration du profile d’utilisateur KMIP
* Création d’un registration token
* Génération du certificat KMIP SSL client (qui sera ensuite configuré dans vCenter)

Cette étape ne peut être réalisées que si les étapes précédentes ont été réalisées avec succès.
Une fois les prérequis validés :

`./ctmInit.sh -c config.json` 


Durant l’exécution du script, les interfaces WEB et KMIP des instances du KMS seront redémarrés, les accès WEB peuvent donc être bloqués jusqu’à la fin.

Une fois que le script a rendu la main, effectuer les vérifications d’usage :

* Se connecter sur une instance 
* Access Managerment > User => vérifier que l’utilisateur KMIP est créé
* CA > External CA => Vérifier que les 2 ACs externes ont été configurées
* Admin Settings > Cluster => Vérifier que les deux nœuds sont actifs
* Products > KMIP > Registered client => Vérifier que le client KMIP a bien été enregistré
* Sur le file system ou le script a été exécuté, vérifié dans les différents répertoires que les certificats sont bien présents, ont le bon CN et ont la bonne durée de vie

La configuration automatique est terminée.


## Activer la licence KMS

Dans le cadre de l’installation par client, deux types de licences sont à installer par client :
* Virtual CipherTrust Manager : licence propre à une instance :

* Il faudra activer les licences unitairement pour chaque instance à l’aide du « Key Manager Lock Code »
*	L’installation devra être réalisée par appliance
*	KMIP : licence pour les clients KMIP
*	Activation de la licence en fonction du besoin. L’activation est réalisée à l’aide du « Connector Lock Code »
*	L’installation devra être réalisée une seule fois avant d’être propagée sur les membres du cluster.

Afin de réaliser l’activation et l’installation des licences :
*	Se connecter sur chacune des instances du client :
*	Dans Admin Settings > Licensing > Lock Codes, récupérer :
*	Key Manager Lock Code
*	Connector Lock Code
*	Récupérer le / les document livré par Thales concernant la commande de licences
*	Suivre le mode opératoire inscrit sur la documentation.

Rappel : 
*	Key Manager Lock Code à utiliser pour l’activation de la licence de l’appliance virtuelle
*	Connector Lock Code à utiliser pour les licences de connecteur comme KMIP.



Votre KMS est prêt à etre consommé.
