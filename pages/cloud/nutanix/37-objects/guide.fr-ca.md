---
title: Mise en place de Nutanix Objects
excerpt: "Découvrez comment activer Nutanix Objects dans votre cluster"
updated: 2023-03-02
---

**Dernière mise à jour le 02/03/2023**

## Objectif

Nutanix Objects implémente une solution **Object Storage** Compatible S3 sur votre cluster Nutanix en s'appuyant sur Prism Central. Vous pouvez consulter le descriptif sur ce [lien](https://www.nutanix.com/fr/viewer?type=pdf&path=/content/dam/nutanix/fr/resources/datasheets/ds-objects-fr.pdf).

**Ce guide vous montre comment mettre en place Nutanix Objects sur votre cluster.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à l'équipe [Professional Services OVHcloud](https://www.ovhcloud.com/fr-ca/professional-services/) ou à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Être connecté sur le cluster via Prism Central.

## En pratique

Nous allons voir comment activer Nutanix Objects dans votre solution Nutanix by OVHcloud et valider son bon fonctionnement.

### Activation du service iSCSI dans Prism Element

A partir de Prism Central, cliquez sur votre cluster dans le widget **Cluster Quick Access** pour vous connecter à Prism Element.

![01 Check ISCSI ADDRESS 01](images/01-check-iscsi-address01.png){.thumbnail}

Cliquez sur le nom de votre cluster en haut à gauche à côté du **X**.

![01 Check ISCSI ADDRESS 02](images/01-check-iscsi-address02.png){.thumbnail}

Faites défiler la fenêtre, dans la rubrique **ISCSI Data Services IP**, vérifiez l'adresse IP.

![01 Check ISCSI ADDRESS 03](images/01-check-iscsi-address03.png){.thumbnail}

### Configuration des VLANs dans Prism Central

Vous devez créer deux VLANs supplémentaires dans la configuration de votre cluster.<br>
Il est nécessaire que ces VLANs accèdent à Prism Central et Prism Element pour pouvoir configurer **Nutanix Objects**.<br>
Ces deux VLANs doivent pouvoir distribuer des adresses IP.<br>
IPAM sera activé sur les deux VLANs.

Dans Prism Central, allez dans le menu principal et cliquez sur `Subnets`{.action} dans la catégorie **Network & Security**.

![02 Create Storage VLAN 01](images/02-create-storage-vlan01.png){.thumbnail}

Cliquez sur `Create Subnet`{.action}.

![02 Create Storage VLAN 02](images/02-create-storage-vlan02.png){.thumbnail}

Cochez la case `IP Address Management`{.action} et renseignez ces informations :

- **Name** : saisissez `object-storage`.
- **Type** : sélectionnez `VLAN`{.action}.
- **VLAN ID** : saisissez votre numéro de VLAN, par exemple `100`.
- **Virtual Switch** : gardez `vs0`{.action}.
- **Network IP Address / Prefix** : écrivez votre sous-réseau `192.168.100.0/24`.
- **Gateway IP Address** : entrez l'adresse votre passerelle `192.168.100.254`.

Cliquez ensuite sur `Add IP Pool`{.action}.

![02 Create Storage VLAN 03](images/02-create-storage-vlan03.png){.thumbnail}

Saisissez ces informations :

- **Start Address** : adresse de début de votre plage, par exemple `192.168.100.10`.
- **End Address** : adresse de fin de votre plage, par exemple `192.168.100.200`.

Cliquez ensuite sur le bouton bleu de validation à droite.

![02 Create Storage VLAN 04](images/02-create-storage-vlan04.png){.thumbnail}

Faites défiler la fenêtre, saisissez l'adresse du DNS OVHcloud `213.186.33.99` dans **Domain Name Servers** et cliquez sur `Create`{.action}.

![02 Create Storage VLAN 05](images/02-create-storage-vlan05.png){.thumbnail}

Votre premier VLAN est créé. Nous allons créer le deuxième VLAN, pour cela cliquez sur `Create Subnet`{.action}.

![03 Create Public VLAN 01](images/03-create-public-vlan01.png){.thumbnail}

Cochez la case `IP Address Management`{.action} et renseignez ces informations :

- **Name** : saisissez `public-storage`.
- **Type** : sélectionnez `VLAN`{.action}.
- **VLAN ID** : saisissez votre numéro de VLAN, par exemple `101`.
- **Virtual Switch** : gardez `vs0`{.action}.
- **Network IP Address / Prefix** : écrivez votre sous-réseau `192.168.101.0/24`.
- **Gateway IP Address** : entrez l'adresse de votre passerelle `192.168.101.254`.

Cliquez ensuite sur `Add IP Pool`{.action}.

![03 Create Public VLAN 02](images/03-create-public-vlan02.png){.thumbnail}

Saisissez ces informations :

- **Start Address** : adresse de début de votre plage, par exemple `192.168.101.10`.
- **End Address** : adresse de fin de votre plage, par exemple `192.168.101.200`.

Cliquez ensuite sur le bouton bleu de validation  à droite.

![03 Create Public VLAN 03](images/03-create-public-vlan03.png){.thumbnail}

Faites défiler la fenêtre, saisissez l'adresse du DNS OVHcloud `213.186.33.99` dans **Domain Name Servers** et cliquez sur `Create`{.action}.

![03 Create Public VLAN 04](images/03-create-public-vlan04.png){.thumbnail}

Vos deux VLANs sont maintenant créés. Vérifiez qu'ils peuvent se connecter à Prism Element et Prism Central au travers de votre passerelle.<br> 
Vous pouvez vous aider du [guide de remplacement de la passerelle OVHgateway](/pages/cloud/nutanix/30-software-gateway-replacement) pour remplacer la passerelle par défaut et utiliser vos VLANs.

![03 Create Public VLAN 05](images/03-create-public-vlan05.png){.thumbnail}

### Activation de Nutanix objects dans Prism Central

Rendez-vous dans le menu principal, faites le défiler jusqu'à la rubrique **Services** et cliquez sur `Objects`{.action}.

![04 Activate Object 01](images/04-activate-objects01.png){.thumbnail}

Cliquez sur `Enable`{.action}.

![04 Activate Object 02](images/04-activate-objects02.png){.thumbnail}

Cliquez sur `Enable`{.action} pour valider l'activation de **Nutanix Objects**.

![04 Activate Object 03](images/04-activate-objects03.png){.thumbnail}

Le service vérifie la compatibilité de votre système.

![04 Activate Object 04](images/04-activate-objects04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![04 Activate Object 05](images/04-activate-objects05.png){.thumbnail}

Cliquez sur `Create Object Store`{.action}.

![04 Activate Object 06](images/04-activate-objects06.png){.thumbnail}

Renseignez ces informations : 

- **Object Store Name** : le nom de votre stockage object, tel que `nutanix-objects`.
- **Domain** : le nom de domaine qui sera utilisé pour accéder à votre stockage, tel que `mydomain.com`.
- **Cluster** : le cluster sur lequel Nutanix Objects doit être activé.
- **Worker Nodes** : le nombre de nœuds qu'utilisera votre stockage Object, choisissez le nombre `1`.

 Cliquez ensuite sur `Next`{.action}.

![04 Activate Object 07](images/04-activate-objects07.png){.thumbnail}

Sélectionnez le VLAN `object-storage`{.action} dans **Storage Network** et saisissez les deux adresses `192.168.100.1,192.168.100.2` dans **Object Store Storage Network static IPs (2 IPs required)**. Ces adresses ne doivent pas être dans l'étendue du DHCP du VLAN.

Cliquez sur `Next`{.action}.

![04 Activate Object 08](images/04-activate-objects08.png){.thumbnail}

Sélectionnez le VLAN `public-storage`{.action} dans **Storage Network** et saisissez cette plage de quatre adresses `192.168.101.1-192.168.100.4` dans **Public Network static IPs**. Ces adresses ne doivent pas être dans l'étendue du DHCP du VLAN.

Cliquez sur `Save & Continue`{.action}.

![04 Activate Object 09](images/04-activate-objects09.png){.thumbnail}

Un contrôle de connexion entre les VLANs, Prism Element et Prism Central est effectué.

![04 Activate Object 10](images/04-activate-objects10.png){.thumbnail}

Lorque la validation est finie, cliquez sur `Create Object Store`{.action}.

![04 Activate Object 11](images/04-activate-objects11.png){.thumbnail}

Patientez une vingtaine de minutes pour que votre Stockage Object soit actif et accessible via l'adresse **192.168.101.1** qui se trouve dans votre VLAN **public-storage**.

![04 Activate Object 12](images/04-activate-objects12.png){.thumbnail}

### Création d'une Access Key à votre stockage.

Pour pouvoir utiliser un stockage Object, il est nécessaire de créer des **Access Keys** associées.

Allez sur l'onglet `Access Keys`{.action}.

![05 Create Access Keys 01](images/05-create-access-key01.png){.thumbnail}

Cliquez sur `+ Add People`{.action}.

![05 Create Access Keys 02](images/05-create-access-key02.png){.thumbnail}

Cochez `Add people not in a directory service`{.action}, saisissez `user@mydomain.com` dans **Email Address** et cliquez sur `Next`{.action}.

![05 Create Access Keys 03](images/05-create-access-key03.png){.thumbnail}

Cliquez sur `Generate Keys`{.action}.

![05 Create Access Keys 04](images/05-create-access-key04.png){.thumbnail}

Cliquez sur `Download Keys`{.action}.

![05 Create Access Keys 05](images/05-create-access-key05.png){.thumbnail}

> [!warning]
> Vos identifiants d'accès ne sont affichés qu'une seule fois dans votre navigateur. Prenez donc soin de noter ces informations (Access Key et secret Key) avant de fermer cette fenêtre.
>

![05 Create Access Keys 06](images/05-create-access-key06.png){.thumbnail}

Votre utilisateur est créé avec ses identifiants. Il vous est possible de regénérer les Access Keys et de créer un nouvel identifiant.

![05 Create Access Keys 07](images/05-create-access-key07.png){.thumbnail}

### Validation et test de bon fonctionnement

Pour valider le bon fonctionnement de notre stockage Object, nous allons utiliser l'outil en ligne de commande awscli d'AWS et créer un bucket. Vous pouvez vous aider de [ce guide](/pages/cloud/storage/object_storage/s3_getting_started_with_object_storage). 

Cet outil est disponible sous Windows, Linux et macOS.

Pour obtenir de l'aide sur les commandes, entrez la commande suivante :

```bash
aws s3 help
```

Après avoir installé awscli, nous allons créer deux fichiers de configuration sur un ordinateur qui a accès au VLAN public-storage et utiliser la commande aws pour créer un bucket.

Créez un dossier `.aws` dans votre dossier `%USERPROFILE%` sous Windows ou `$HOME` sous Linux et macOS.

Ajoutez le fichier `credentials` et remplissez-le avec ces données :

```bash
[default]
aws_access_key_id=votre-access-key
aws_secret_access_key=votre-secret-accesss-key
```

Ajoutez ensuite un deuxième fichier nommé `config` avec ces informations : 

```bash
[default]
region=region = us-east-1
```

Utilisez cette commande pour créer un bucket :

```bash
aws --endpoint-url https://192.168.101.1 s3 mb s3://my-bucket --region=us-east-1 --no-verify-ssl
```

Le bucket est créé avec un message d'avertissement concernant le certificat SSL. Dans un environnement de production, il faut utiliser un certificat SSL.

Maintenant que le bucket est créé, nous allons utiliser un navigateur pour se connecter à l'interface web fournie par Nutanix afin de vérifier l'existence de notre bucket.

Via un navigateur web, connectez vous à l'URL `https://192.168.101.1/objectsbrowser` qui correspond à votre point d'accès **Nutanix Objects** et saisissez vos identifiants (access_key et secret_key). Cliquez ensuite sur `Login`{.action}.

![06 Connect to WEB interfaces 01](images/06-connect-to-web-interfaces01.png){.thumbnail}

Vous voyez le bucket que vous avez créé en ligne de commande. Vous pouvez créer et supprimer des buckets ou des objets dans votre interface web.

![06 Connect to WEB interfaces 02](images/06-connect-to-web-interfaces02.png){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Documentation Nutanix Objects](https://portal.nutanix.com/page/documents/details?targetId=Objects-v3_6:top-intro-c.html).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
