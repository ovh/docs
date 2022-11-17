---
title: Gestion des licences dans votre cluster de l’offre Nutanix on OVHcloud BYOL
slug: activate-license-on-nutanix-byol
excerpt: "Comment ajouter et enlever des licences dans un cluster Nutanix avec l'offre BYOL"
section: Premiers pas
order: 12
---

**Dernière mise à jour le 16/11/2022**

## Objectif

**Découvrez comment activer ou désactiver vos licences dans l'offre BYOL**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Être connecté sur vos clusters via **Prism Central**.
- Disposer de vos identifiants Nutanix sur le [Site officiel Nutanix](https://www.nutanix.com).
- Avoir des licences valides avec votre identifiant Nutanix.

## En pratique

### Présentation

> [!warning]
>
> OVHcloud vous propose Nutanix avec l'offre *Bring Your Own Licence* (BYOL), ce qui signifie que vous devez, en tant que client OVHcloud, fournir les licences du cluster.
>
> Lorsque le cluster Nutanix est commandé avec l'offre BYOL, le cluster est livré avec une version d'essai de 90 jours. Vous devez donc, en tant que client, installer vos licences pendant cette période.
>
> Si vous souhaitez redéployer un cluster avec l'offre BYOL, vous devez au préalable avoir désinstallé les licences sur le cluster avant de lancer un redéploiement. Ce guide explique comme ajouter ou supprimer des licences.
>


Trois types de licences existent, pour :

- **Prism Element**. 
- **Prism Central**. 
- **Les add-ons**.

Vous pouvez installer toutes les licences à partir de **Prism Central**.

### Installation des licences

#### Récupération du résumé de votre configuration

Nous allons récupérer le fichier **CSF (Cluster Summary  File)** qui contient le résumé de la configuration du cluster.

Dans **Prism Central**, cliquez sur l'icône en forme d'`engrenage`{.action} pour aller dans les paramètres.

![01 generate-report report 01](images/01-generate-report-pc01.png){.thumbnail}

Cliquez à gauche sur `Licensing`{.action}.

![01 generate-report report 02](images/01-generate-report-pc02.png){.thumbnail}

Cliquez à gauche sur `Update Licenses`{.action}.

![01 generate-report report 03](images/01-generate-report-pc03.png){.thumbnail}

Cliquez sur `Download`{.action} pour récupérer le fichier contenant les informations concernant votre cluster.

![01 generate-report report 04](images/01-generate-report-pc04.png){.thumbnail}

Cliquez en haut à droite sur `Show all downloads`{.action}

![01 generate-report report 05](images/01-generate-report-pc05.png){.thumbnail}

Le fichier **CSF** se trouve sur votre poste.

![01 generate-report report 06](images/01-generate-report-pc06.png){.thumbnail}

#### Connexion au portail Nutanix 

Toujours dans **Prism Central**, rendez-vous sur la page des licences et cliquez sur `Licenses page`{.action}.

![02 portal connection 01](images/02-portal-connection01.png){.thumbnail}

Le navigateur web se lance et vous propose de vous connecter au portail Nutanix.

Saisissez vos informations d'identification pour vous connecter.

![02 portal connection 02](images/02-portal-connection02.png){.thumbnail}

#### Création de la licence pour votre cluster

Dans votre espace client **Nutanix**, cliquez sur `Manage Licenses`{.action}

![03 create NSF for PC 01](images/03-create-nsf-for-pc01.png){.thumbnail}

Ouvrez le fichier **CSF** généré par **Prism Central** et qui commence par `ntnx_csf...`.

![03 create NSF for PC 02](images/03-create-nsf-for-pc02.png){.thumbnail}

Faites défiler la fenêtre pour ajouter vos licences de clusters.

![03 create NSF for PC 03](images/03-create-nsf-for-pc03.png){.thumbnail}

Dans la rubrique **NCM Ultimate**, cliquez sur `Select Licences`{.action}.

![03 create NSF for PC 04](images/03-create-nsf-for-pc04.png){.thumbnail}

Enregistrez maintenant sur votre poste le fichier **LSF (License Summary File)** qui contient la licence.

Sélectionnez votre `votre cluster`{.action} et cliquez sur `Save`{.action}.

![03 create NSF for PC 05](images/03-create-nsf-for-pc05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![03 create NSF for PC 06](images/03-create-nsf-for-pc06.png){.thumbnail}

Cliquez sur `Confirm`{.action}.

![03 create NSF for PC 07](images/03-create-nsf-for-pc07.png){.thumbnail}

Cliquez sur `Enregistrer`{.action} pour sauver le fichier de licence sur votre ordinateur.

![03 create NSF for PC 08](images/03-create-nsf-for-pc08.png){.thumbnail}

Revenez sur sur **Prism Central** dans la gestion des licences et cliquez sur `Upload`{.action} pour installer le fichier de licences.

![04 Add license to PC 01](images/04-add-license-to-pc01.png){.thumbnail}

Sélectionnez le fichier généré et cliquez sur `Ouvrir`{.action}.

![04 Add license to PC 02](images/04-add-license-to-pc02.png){.thumbnail}

Cliquez sur `Apply License`{.action}.

![04 Add license to PC 03](images/04-add-license-to-pc03.png){.thumbnail}

La licence est installée sur votre cluster.

### Désinstallation des licences

Il est parfois nécessaire de désinstaller des licences pour les réinstaller sur un autre cluster. Si le cluster qui contient les licences est encore disponible, vous devez libérer vos licences à partir de **Prism Central**.

Via **Prism Central**, cliquez sur `l'engrenage`{.action} en haut à droite pour aller dans les paramètres.

![05 generate report with licences 01](images/05-generate-report-with-licenses01.png){.thumbnail}

Choisissez `Licensing`{.action} à gauche et cliquez sur `Update Licences`{.action}.

![05 generate report with licences 02](images/05-generate-report-with-licenses02.png){.thumbnail}

Cliquez sur `Download`{.action}.

![05 generate report with licenses 03](images/05-generate-report-with-licenses03.png){.thumbnail}

Cliquez sur `Enregistrer`{.action} pour sauvegarder le fichier **CSF** contenant le résumé de la configuration de votre cluster avec les licences installées.

![05 generate report with licenses 04](images/05-generate-report-with-licenses04.png){.thumbnail}

Cliquez sur `Licenses page`{.action} pour vous connecter à votre portail de licences **Nutanix**.

![05 generate report with licenses 05](images/05-generate-report-with-licenses05.png){.thumbnail}

Via le portail de licences **Nutanix**, cliquez sur `Manage Licenses`{.action}.

![06 generate nsf with licenses removed 01](images/06-generate-nsf-with-license-removed01.png){.thumbnail}

Cliquez sur `Upload File`{.action}.

![06 generate nsf with licenses removed 02](images/06-generate-nsf-with-license-removed02.png){.thumbnail}

Cliquez sur `Ouvrir`{.action}.

![06 generate nsf with licenses removed 03](images/06-generate-nsf-with-license-removed03.png){.thumbnail}

Cliquez sur la barre de défilement pour aller au bas de la fenêtre.

![06 generate nsf with licenses removed 04](images/06-generate-nsf-with-license-removed04.png){.thumbnail}

Cliquez sur `Unselect License`{.action} dans la rubrique **NCM (Nutanix Cloud Manager)**.

![06 generate nsf with licenses removed 05](images/06-generate-nsf-with-license-removed05.png){.thumbnail}

Cliquez sur `Unlicense`{.action}.

![06 generate nsf with licenses removed 06](images/06-generate-nsf-with-license-removed06.png){.thumbnail}

La demande de retrait de la licence est prise en charge, cliquez sur `Next`{.action}.

![06 generate nsf with licenses removed 07](images/06-generate-nsf-with-license-removed07.png){.thumbnail}

CLiquez sur `Confirm`{.action}.

![06 generate nsf with licenses removed 08](images/06-generate-nsf-with-license-removed08.png){.thumbnail}

Cliquez sur `Enregistrer`{.action} pour sauvegarder le fichier **LSF** contenant la licence mise à jour sur votre poste.

![06 generate nsf with licenses removed 09](images/06-generate-nsf-with-license-removed09.png){.thumbnail}

Revenez dans la gestion des licences sur **Prism Central**.

Cliquez sur `Upload`{.action}.

![07 update license 01](images/07-update-license01.png){.thumbnail}

Cliquez sur `Ouvrir`{.action} après avoir séléctionné le fichier généré depuis le portail **Nutanix**.

![07 update license 02](images/07-update-license02.png){.thumbnail}

Cliquez sur `Apply License`{.action}.

![07 update license 03](images/07-update-license02.png){.thumbnail}

La suppression de la licence est effective.

## Aller plus loin

[Guide de gestion des licences Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Licensing-Guide:lic-lic-manage-manual-c.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
