---
title: Utiliser la fonctionnalité Bring Your Own Image
excerpt: Apprenez à déployer vos images grâce à Bring Your Own Image
slug: bringyourownimage
section: Utilisation avancée
hidden: true
---

**Dernière mise à jour le 21/07/2020**

## Objectif

Grâce à la technologie Bring Your Own Image, il vous est désormais possible de déployer des images *cloudready* directement sur vos serveurs dédiés. Vous pouvez donc utiliser le produit bare metal comme ressource pour vos déploiements.

**Découvrez comment configurer BringYourOwnImage depuis l'APIv6 OVHcloud**

## Prérequis

- Posséder un [serveur dédié OVHcloud](https://www.ovh.com/fr/serveurs_dedies/).
- Avoir généré les [credentials pour utiliser l'APIv6](https://docs.ovh.com/fr/api/api-premiers-pas/).

> [!warning]
>
> Une nouvelle installation par BringYourOwnImage effacera l'intégralité des données présentes sur le serveur.
>

## En pratique

### Limitations techniques

Il existe aujourd'hui encore quelques limitations techniques liées à l'usage de produits physiques comme les serveurs dédiés. 
Veuillez prendre en compte les impératifs listés ci-dessous lors de votre préparation de déploiement. Cette liste n'est pas exhaustive.

- Le type de boot : **uefi** ou **legacy**
- Le type de partition : **MBR** ou **GPT**
- Le format d'image : **qcow2** ou **raw**

Si votre serveur dispose d'un boot **uefi**, il vous faudra impérativement prévoir dans votre image une partition **EFI** si vous souhaitez que votre serveur puisse booter.

### Déployer votre image

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/){.external} puis rendez vous dans la section `/dedicated/server`{.action}. Le champ `Filter` vous permettra de rechercher « BringYourOwnImage ».

Vous disposez de trois appels API liés à la fonctionnalité BringYourOwnImage.

![calls API](images/apicalls.png){.thumbnail}

Pour créer et déployer votre image, utilisez l'appel suivant et complétez les champs requis :

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Champ | Description |
|-|-|
| serviceName | Le nom de votre serveur. |
| URL | L'URL où récupérer votre image. |
| checkSum | Le checksum de votre image. |
| checkSumType | Le checksum de l'image à déployer (md5, sha1, sha256, sha512). |
| description | Le nom de votre image. |
| diskGroupId | L'id du disque qui doit être utilisé. |
| hostname | Le hostname de votre serveur. |
| httpHeader | Uniquement si nécessaire pour télécharger l'image. |
| sshKey | Votre clé SSH publique. |
| type | Le type/format de votre image (qcow2, raw, ova). |
| userData | Votre script de post-installation. |
| userMetadatas | Meta datas utilisés par Nova au moment du boot. |


![POST API call](images/postapicall.png){.thumbnail}

Une fois les champs complétés, lancez le déploiement en cliquant sur `Execute`{.action}.

### Vérifier le déploiement

Vous pouvez suivre le déploiement de votre image via l'appel API ci-dessous ou par le biais du KVM / [IPMI](../utilisation-ipmi-serveurs-dedies/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

Dans cet exemple, le déploiement est en cours de démarrage.

![GET API call](images/getapicall.png){.thumbnail}

Le déploiement peut durer une dizaine de minutes. Une fois l'opération terminée, le statut de votre déploiement passera en « done » et votre serveur aura redémarré sur disque.

### Supprimer le déploiement

Vous pouvez choisir de supprimer votre déploiement grâce à l'appel suivant :

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Cela aura pour effet d'effacer l'état du déploiement et de placer votre serveur en mode rescue.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
