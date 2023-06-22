---
title: Déployer un template OVF à travers les bibliothèques de contenu (content libraries)
excerpt: Découvrez comment déployer, depuis votre vSphere, un template OVF à travers les bibliothèques de contenu (content libraries)
updated: 2023-06-15
---
 
## Objectif

OVHcloud propose des templates OVF que vous pouvez déployer directement depuis votre vSphere *(version 7.0 ou ultérieure)* à travers les [bibliothèques de contenu (*content libraries*)](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-254B2CE8-20A8-43F0-90E8-3F6776C2C896.html){.external}.

**Ce guide vous explique comment procéder pour déployer ces templates.**

## Prérequis

- Avoir accès au client Web (HTML5)

## En pratique

### Etape 1 - Déployer un template

#### Déployer un template depuis une bibliothèque de contenu

Vous pouvez retrouver les bibiliothèques de contenu auxquelles votre vSphere a souscrit via la page d'accueil de celui-ci, en cliquant sur l'icône `Content libraries`{.action}.

![Content libraries button](images/content-library-button.png){.thumbnail}

Cliquez alors sur l'une des bibliothèques pour en afficher le contenu et déployer une nouvelle machine virtuelle depuis l'onglet `OVF & OVA Templates`{.action}.

![Content library overview](images/content-library-overview.png){.thumbnail}

#### Déployer un template directement depuis la vue Cluster

Vous pouvez également déployer du contenu provenant des bibliothèques directement depuis la vue *Cluster* en faisant un clic droit sur l'un de vos clusters et en sélectionnant `New Virtual Machine`{.action}.

![Cluster overview](images/hosts-view-deploy.png){.thumbnail}

Sélectionnez alors l'option `Deploy from template`{.action}.

![Deploy from template](images/deploy-from-template.png){.thumbnail}

Cliquez sur l'un des templates offerts par les bibliothèques de contenu installées sur votre vSphere.

![Deploy from template overview](images/deploy-from-template-content-library-overview.png){.thumbnail}

### Etape 2 - Configurer le template

Le processus de déploiement d'un template vous demandera de confirmer les détails, ansi qu'une destination pour la nouvelle machine virtuelle (datacenter, cluster, datastore, etc.).

![Template overview](images/template-overview.png){.thumbnail}

Certains templates acceptent des propriétés au déploiement permettant de configurer rapidement la nouvelle machine virtuelle en créant, par exemple, un utiliseur privilégié ou en configurant l'interface de réseau principale.

![Template customization](images/template-customization.png){.thumbnail}

Les templates n'offrant pas de personnalisation auront les identifiants par défaut spécifiés dans les notes de la machine virtuelle.
  
## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
