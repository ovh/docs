---
title: Mise en route du KMS CipherTrust Manager
slug: kms-cipher-trust
excerpt: Découvrez comment déployer et les premières étapes de configuration du KMS CipherTrust Manager sur un environnement vSphere
section: Services et options OVHcloud
hidden: true
---

**Derniére mise à jour le 04/10/2021**

## Objectif

Vous trouverez dans ce guide les différentes étapes permetant la configuration du Key Management System (**KMS**) CipherTrust de Thales dans l'interface vSphere de votre Hosted Private Cloud.

** Découvrez comment configuer un KMS Thales CipherTust.**

## Prérequis

* Disposer d'un service [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
* Être connecté à l'[interface vSphere](../connexion-interface-vsphere/) de votre service Hosted Private Cloud.
* Avoir une adresse IP publique par instance de KMS
* Avoir les fichiers du modèle OVF présent sur son poste de travail
* La partie publique de la clé SSH 
* Récupération de l'OVA [KMS](https://ovh.to/W2gBYe)
* Une machine permettant l’exécution d’un script bash ayant :
    - **jq** installé (permettant le parsing de fichier json)
	- **ksctl** présent sur la machine [utilitaire Thales](https://thalesdocs.com/ctp/cm/latest/get_started/deployment/install-cli-toolkit/index.html)


## En pratique 

### Installer les OVA CipherTrust Manager

* Se connecter au vCenter avec un compte permettant le déploiement d’un modèle OVF

![kms_cipher_trust_ova_01](images/kms_cipher_trust_ova_01.png){.thumbails}

* Dirigez-vous dans le menu `Hôte et cluster`{.action}, puis sélectionnez le cluster
* Cliquez sur `Actions`{.action} > `Déployer un modèle OVF`{.action} 
* Suivez les étapes d’installation :

![capture2](images/kms_cipher_trust_ova_02.png){.thumbails}


* Sélectionnez les fichiers locaux liés au modèle OVA : `610-000612-005_SW_VMware_CipherTrust_Manager_v2.4.0_RevA.ova`
* Cliquez sur le bouton `Next`{.action}

![capture3](images/kms_cipher_trust_ova_03.png){.thumbails}

* Renseignez le nom de la machine virtuelle. Le nom doit être différent entre chaque instance. Ici, nous l’appellerons **KMS_01_master**
* Selectionnez le datacenter où sera placé la machine virtuelle
* Cliquez sur le bouton `Next`{.action}

![capture4](images/kms_cipher_trust_ova_04.png){.thumbails}

* Sélectionnez la ressource de calcul (compute resource), ici **Cluster1**
* Cliquez sur le bouton `Next`{.action}

![capture5](images/kms_cipher_trust_ova_05.png){.thumbails}

* Vérifiez les informations
* Cliquez sur le bouton `Next`{.action}

![capture6](images/kms_cipher_trust_ova_06.png){.thumbails}

* Sélectionnez le périphérique de stockage
* Cliquez sur le bouton `Next`{.action}

![capture7](images/kms_cipher_trust_ova_07.png){.thumbails}

* Sélectionnez le réseau approprié, ici **ADM**
* Cliquez sur le bouton `Next`{.action}

![capture7](images/kms_cipher_trust_ova_08.png){.thumbails}

* Vérifiez les informations liées au déploiement
* Cliquez sur le bouton `Finish`{.action}

Une fois la machine virtuelle déployée:

![capture8](images/kms_cipher_trust_vm_01.png){.thumbails}

* Sélectionnez la machine virtuelle
* Cliquez sur `Edit Settings`{.action}

![capture8](images/kms_cipher_trust_vm_02.png){.thumbails}

* Dans l’onglet **Virtual Hardware**, cliquer sur `Add New Device`{.action}
* Sélectionner **CD/DVD Drive**

![capture9](images/kms_cipher_trust_vm_03.png){.thumbails}

* Validez avec le bouton `OK`{.action}

Configuration de la machine virtuelle :

![capture9](images/kms_cipher_trust_vm_04.png){.thumbails}

* Allez dans l’onglet **Configure**
* Dans le menu de gauche **vApp Options**
* Cliquez sur `Edit...`{.action}

![capture9](images/kms_cipher_trust_vm_05.png){.thumbails}

* Vérifiez que **Enable vApp options** est bien coché
* Allez dans l’onglet **OVF Details**
* Cochez **ISO images**
* Cliquez sur `OK`{.action}

Preparez le fichier cloud.init selon le modéle suivant

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

*	Ce fichier ne doit pas contenir de tabulation, seuls les espaces sont acceptés
*	Toutes les valeurs entre « < » et « > » doivent être remplacées par les bonnes valeurs


Modifiez le fichier cloud.init en base 64. Exemple : 

```openssl base64 -in cloud.init -out cloudb64.init```

> [!warning]
>
> La chaine en base 64 doit être sur une seule ligne pour le reste de l’opération.
> 

Finalisation de la configuration de la machine virtuelle :

![capture9](images/kms_cipher_trust_vm_06.png){.thumbails}

* Dirigez-vous sur l’onglet **Configure**
* Dans le menu de gauche **vApp Options**
* Puis dans la section **Properties**, cliquez sur `ADD`{.action}

![capture9](images/kms_cipher_trust_vm_08.png){.thumbails}

* Dans l’onglet **General**
* Définir le lable à **user-data**

![capture9](images/kms_cipher_trust_vm_10.png){.thumbails}

* Dans l’onglet **Type**
* Saisissez dans **Default value**, la chaine en base 64
* Cliquez sur `SAVE`{.action} pour valider

Démarrez la machine virtuelle et vérifiez qu’à l’issue du démarrage l’adresse IP configurée est bien présente.

Repétez les étapes pour la seconde instance **KMS_01_master**

A l’issue de ces étapes, les différentes instances doivent être visibles. Exemple : 

![capture14](images/capture14.png){.thumbails}

![capture15](images/capture15.png){.thumbails}

![capture16](images/capture16.png){.thumbails}

## Pré-configurer chaque instance

Attention : dans ces étapes, il est important que la clé SSH ainsi que les mots de passe définis dans les différentes instances d’un client soient identiques.

Lors de la génération du mot de passe temporaire, attention à ce que le mot de passe respecte les règles suivantes :

![capture17](images/capture17.png){.thumbails}

Première authentification au KMS :
*	Connectez-vous sur l’appliance : adresseIp
*	Renseigner la clé SSH publique du client

![capture19](images/capture19.png){.thumbails}

> [!primary]
>
> L’insertion peut prendre quelques minutes afin que les microservices puissent se lancer.

Changement du mot de passe :
*	Depuis la fenêtre, rentrez les mots de passes par défaut : admin / admin
*	Une nouvelle fenêtre apparaît pour renouveler le mot de passe. Renseignez un mot de passe temporaire que vous transmettrez au client afin que ce dernier puisse le modifier par la suite.

![capture20](images/capture20.png){.thumbails}

*	Cliquer sur « Change Password »
*	Authentifiez-vous pour vérifier l'application du mot de passe

![capture21](images/capture21.png){.thumbails}

## Créer le script de configuration automatique

* Se positionner sur une machine ayant un accès aux adresses IPs publiques des instances du KMS
* Désarchivez le package réceptionné et vérifiez l’arborescence :

```
config
config.yaml
configprofile.json
cloud.init.template
ext_ca
sectigo_rsa.cer
usertrust_rsa.cer
kmip_ssl
kmip_user
logs
web_ssl
config.json
ctmInit.sh
ksctl.exe
ksctlversion
ksctl
```

KSCTL est fourni par Thales en version exécutable windows, Linux et darwin.
À la racine du package, la version windows est présente, la version Linux est quant à elle disponible dans le répertoire **ksctlversion**.

Avant de continuer, il est important de positionner, à la racine du package, la version de KSCTL correspondant au system d’exploitation utilisé.

> [!primary]
>
> Il s'agit d'un script bash, dans le cas d’une utilisation sous Windows, penser à utiliser un mobaXterm ou autre outil permettant de simuler un environnement Linux

Configuration d’accès au KMS : 
* Editer le fichier config/config.yaml
* Modifiez les éléments suivants :

  * KSCTL_PASSWORD : password mis à jour lors de l’étape 2 du §3
  * KSCTL_URL : https://<ip>:443 en utilisant l’IP de l’une des deux instances

Exemple de fichier :
```
KSCTL_VERBOSITY: false
KSCTL_RESP: json
KSCTL_USERNAME: admin
KSCTL_PASSWORD: supernova123!
KSCTL_URL: https://51.222.126.181:443
KSCTL_JWT:
KSCTL_NOSSLVERIFY: true
KSCTL_TIMEOUT: 30
```

Optionnel : Configuration du profile de certificat utilisateur kmip
*	Editez le fichier config/configprofile.json
*	Ce fichier est à modifier uniquement dans le cas où l’on souhaite changer le nom de l’utilisateur **kmip**. Dans cette hypothèse, modifier la propriété « csr_cn »

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

Configuration du script :

* Editez le fichier **config.json**
* Mettre à jour les informations

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

Cette dernière étape ne peut être réalisé que si les étapes précédentes ont été réalisées avec succès.

Une fois les prérequis validés, éxécutez la commande suivante :

`./ctmInit.sh -c config.json` 

Durant l’exécution du script, les interfaces WEB et KMIP des instances du KMS seront redémarrées, les accès WEB peuvent donc être bloqués jusqu’à la fin.

Une fois que le script a rendu la main, effectuez les vérifications d’usage :

* Se connecter sur une instance 
* `Access Managerment`{.action} > `User`{.action} => vérifiez que l’utilisateur KMIP est créé
* `CA`{.action} > `External CA`{.action} => Vérifiez que les 2 ACs externes ont été configurées
* `Admin Settings`{.action} > `Cluster`{.action} => Vérifiez que les deux nœuds sont actifs
* `Products`{.action} > `KMIP`{.action} > `Registered client`{.action} => Vérifiez que le client KMIP a bien été enregistré
* Sur le « file system » ou le script a été exécuté, vérifiez dans les différents répertoires que les certificats sont bien présents, avec le bon **CN** et ont la bonne durée de vie

La configuration automatique est terminée.


## Activer la licence KMS

Dans le cadre de l’installation par client, deux types de licences sont à installer par client :

* Virtual CipherTrust Manager : licence propre à une instance :
* Il faudra activer les licences unitairement pour chaque instance à l’aide du « Key Manager Lock Code »
*	L’installation devra être réalisée par appliance
*	KMIP : licence pour les clients KMIP
*	Activation de la licence en fonction du besoin. L’activation est réalisée à l’aide du « Connector Lock Code »
*	L’installation devra être réalisée une seule fois avant d’être propagée sur les membres du cluster.

Afin de réaliser l’activation et l’installation des licences,	connectez-vous sur chacune des instances du client :
*	Dirigez-vous dans `Admin Settings`{.action} > `Licensing`{.action} > `Lock Codes`{.action}, puis récupérez :
    -	Key Manager Lock Code
    -	Connector Lock Code
    -	Récupérer le(s) document(s) livré(s) par Thales concernant la commande de licences
*	Suivre le mode opératoire inscrit sur la documentation.

> [!primary]
> 
> *	Le Key Manager Lock Code est à utiliser pour l’activation de la licence de l’appliance virtuelle
> *	Le Connector Lock Code est à utiliser pour les licences de connecteur comme KMIP.


Votre KMS est prêt à etre utilisé.
