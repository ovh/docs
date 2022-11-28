---
title: Utiliser la fonctionnalité Bring Your Own Image
excerpt: Apprenez à déployer vos images grâce à Bring Your Own Image
slug: bringyourownimage
section: Utilisation avancée
---

**Dernière mise à jour le 25/11/2022**

## Objectif

Grâce à la technologie Bring Your Own Image, il vous est désormais possible de déployer des images *cloudready* directement sur vos serveurs dédiés. Vous pouvez donc utiliser le produit bare metal comme ressource pour vos déploiements.

**Que signifie *cloudready* ?**
<br>En une phrase, être agnostique de l'infrastructure sur laquelle l'image démarre.
Outre les prérequis et limitations citées plus bas, il faut s'assurer que l'image (récupérée, générée) répond à la bonne définition des attentes techniques d'une image cloudready. L'image doit être capable de booter correctement quelle que soit la typologie de serveur sur laquelle elle démarre, elle doit également embarquer le service Cloud Init dans le cas de l'utilisation d'un Config Drive. Enfin, les configurations systèmes doivent permettre de pouvoir pleinement laisser l'OS s'initier, en particulier celles relatives au réseau.

**Découvrez comment configurer BringYourOwnImage depuis l'APIv6 OVHcloud**

## Prérequis

- Posséder un [serveur dédié OVHcloud](https://www.ovh.com/fr/serveurs_dedies/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) pour la partie [« Déploiement via espace client »](#viacontrolpanel) de ce guide.
- Être connecté aux [API OVHcloud](https://api.ovh.com/){.external} pour la partie [« Déploiement via API »](#viaapi) de ce guide.
- Avoir généré les [credentials pour utiliser l'APIv6](../../api/first-steps-with-ovh-api/) pour la partie [« Déploiement via API »](#viaapi) de ce guide.
- La taille de votre image doit être inférieure à la quantité de la mémoire vive de votre serveur moins 3GiB.

> [!warning]
>
> Une nouvelle installation par BringYourOwnImage effacera l'intégralité des données présentes sur le serveur.
>

## En pratique

**Limitations techniques**

Il existe aujourd'hui encore quelques limitations techniques liées à l'usage de produits physiques comme les serveurs dédiés.
Veuillez prendre en compte les impératifs listés ci-dessous lors de votre préparation de déploiement. Cette liste n'est pas exhaustive.

- Le type de boot : **uefi** ou **legacy**
- Le type de partition : **MBR** ou **GPT**
- Le format d'image : **qcow2** ou **raw**

Si votre serveur dispose d'un boot **uefi**, il vous faudra impérativement prévoir dans votre image une partition **EFI** si vous souhaitez que votre serveur puisse booter.

**Méthodes de déploiement**

- [Déploiement via espace client](#viacontrolpanel) : vous permettra de deployer rapidement et facilement votre image directement depuis votre espace client OVHcloud.
- [Déploiement via API](#viaapi) : vous pouvez utiliser les API OVHcloud pour les intégrer à vos propres scripts afin d'automatiser le déploiement.

### Déployer votre image depuis l'espace client OVHcloud <a name="viacontrolpanel"></a>

Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans la section `Bare Metal Cloud`{.action}, puis `Serveurs Dédiés`{.action}, sélectionnez votre serveur.

Dans le cadre `Informations générales`, cliquez sur le bouton `...`{.action} devant `Informations générales`. Cliquez enfin sur `Installer`{.action}.

![bring your ownimage](images/byoi-controlpanel01.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez `Installer à partir d'une image personnalisée`{.action}, puis cliquez sur `Installer`{.action}.

![bring your ownimage](images/byoi-controlpanel02.png){.thumbnail}

Vous serez redirigé vers la page de configuration. Assurez-vous que l'URL de votre image est au format approprié. Complétez le reste des champs requis sur cette page. Lorsque vous avez confirmé que les informations sont correctes, cliquez sur `Installer le système`{.action}.

Retrouvez le détail des options dans la partie [« Tableaux des options »](#options) de ce guide.

Concernant l'activation de `ConfigDrive`, retrouver la documentation sur [cette page](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![bring your ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Déployer votre image depuis les API <a name="viaapi"></a>

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/){.external} puis rendez-vous dans la section `dedicated/server`{.action}. Le champ `Filter` vous permettra de rechercher « BringYourOwnImage ».

Vous disposez de trois appels API liés à la fonctionnalité BringYourOwnImage.

![calls API](images/apicalls.png){.thumbnail}

Pour créer et déployer votre image, utilisez l'appel suivant et complétez les champs requis :

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>

#### Tableaux des options <a name="options"></a>

| Champ | Description |
|-|-|
| serviceName | Le nom de votre serveur. |
| URL | L'URL où récupérer votre image. |
| checkSum | Le checksum de votre image. |
| checkSumType | Le checksum de l'image à déployer (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)\* | Activer la création de la partition ConfigDrive (cloud-init) |
| hostname (ConfigDrive)\* | Le hostname de votre serveur. |
| sshKey (ConfigDrive)\* | Votre clé SSH publique. |
| userData (ConfigDrive)\* | Votre script de post-installation. |
| userMetadatas (ConfigDrive)\* | Meta datas utilisés par CloudInit au moment du boot. |
| description | Le nom de votre image. |
| diskGroupId | L'id du disque qui doit être utilisé. |
| httpHeader | Uniquement si nécessaire pour télécharger l'image. |
| type | Le type/format de votre image (qcow2, raw, ova). |

\* Le ConfigDrive est une partition utilisée par cloud-init au premier boot de votre serveur afin d'établir la configuration souhaitée. Vous pouvez choisir d'activer ou non cette option.

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

#### Exemples de retour

Voici quelques exemples de retour :

| Message | Signification |
|-|-|
| Can't write qcow2 on disk. | Impossible d'écrire l'image qcow2 sur le disque. |
| Could not download, qcow2 image is too big to download in memory. | Il n'y a pas assez d'espace en RAM pour télécharger l'image. |
| Could not download image located : `http://path/of/your/image`. | Impossible de télécharger l'image située : `http://chemin/de/votre/image`. |
| Bad format image, expected : qcow2, raw. | Le format de l'image est incorrect. |
| Bad checkSumType, expected : sha1, sha256, md5. | Le type de checksum est incorrect. |
| Bad $checkSumType for downloaded file, got : 1234 while expecting 5678. | Le checksum est incorrect. |
| Can not move backup GPT data structures to the end of disk. | Le format disque est incorrect. |
| Could not create configdrive on disk. | Impossible de créer la partition configdrive sur le disk. |

### Supprimer le déploiement

Vous pouvez choisir de supprimer votre déploiement grâce à l'appel suivant :

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Cela aura pour effet d'effacer l'état du déploiement et de placer votre serveur en mode rescue.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
