---
title: Mise à jour des hôtes avec vSphere Lifecycle Management (vLCM)
excerpt: Apprenez à maintenir vos hôtes ESXi à jour via vSphere Lifecycle Management, en toute sécurité et en quelques clics.
updated: 2025-08-08
---

## Objectif

Ce guide explique comment mettre à jour vos hôtes ESXi avec vSphere Lifecycle Management (vLCM), directement depuis l’interface vSphere.

vLCM permet de détecter facilement les mises à jour nécessaires et de maintenir vos hôtes à jour rapidement et en toute sécurité, en appliquant une image complète.

Contrairement à VMware Update Manager, vLCM adopte une approche globale du cycle de vie, en intégrant non seulement les mises à jour logicielles, mais aussi les pilotes, le firmware et les composants matériels. 

Vous bénéficiez ainsi d’une vue centralisée de l’état de vos hôtes et pouvez prendre des décisions éclairées pour garantir leur performance et leur sécurité.

## Prérequis

- Votre vCenter doit être en version **vSphere 8** pour accéder à la fonctionnalité vLCM.
- Assurez-vous que la fonctionnalité **DRS (Distributed Resource Scheduler)** est activée en mode automatique.
- Vérifiez que vos fichiers `.iso` ou `.vmdk` ne sont pas stockés localement sur les hôtes.

## En pratique

### Étape 1 : Se connecter à vSphere

Connectez-vous à votre interface vSphere, puis sélectionnez le **cluster d’hôtes** à mettre à jour.

### Étape 2 : Activer le Mode Maintenance (Zerto)

Si vous utilisez l'option Zerto (Plan de reprise d'activité) :

Vous devez d'abord basculer les hôtes de votre cluster en Mode Maintenance avant de lancer la mise à jour avec vLCM : 

![Maintenance Mode](images/vlcm_step2.png){.thumbnail}

### Étape 3 : Sélectionner une nouvelle image

Accédez au menu `Updates`{.action} > `Hosts`{.action} > `Image`{.action} pour consulter l’image actuelle.

![Affichage de l'image actuelle dans vLCM](images/vlcm_00.png){.thumbnail}

Cliquez sur `Edit`{.action} pour modifier l’image.

![Bouton Edit pour modifier l'image](images/vlcm_01.png){.thumbnail}

Dans la liste déroulante, sélectionnez la version ESXi souhaitée. La première option correspond généralement à la dernière version publiée par Broadcom.

Cliquez sur `Save`{.action} pour valider et enregistrer l’image sélectionnée.

![Sélection d'une nouvelle version ESXi](images/vlcm_02.png){.thumbnail}

> [!primary]
> OVHcloud recommande de toujours utiliser la version préconisée. Évitez toute mise à jour vers une version antérieure.

Votre image est maintenant chargée.

### Étape 4 : Lancer la mise à jour

Cliquez sur `Remediate All`{.action} pour appliquer l’image à l’ensemble des hôtes du cluster.

![Lancement avec Remediate All](images/vlcm_03.png){.thumbnail}

Cette action déclenche la mise en maintenance des hôtes concernés. Les machines virtuelles sont automatiquement déplacées via **vMotion**.

Avant de lancer la mise à jour, assurez-vous que :

- La fonction **DRS** est activée en mode automatique.
- Aucune règle d’anti-affinité n’empêche le déplacement des machines virtuelles.
- Aucun fichier `.iso` ou `.vmdk` n’est stocké localement sur les hôtes.

Cliquez sur `Start Remediation`{.action} pour démarrer le processus.

![Start Remediation](images/vlcm_04.png){.thumbnail}

Le processus de mise à jour est lancé. Il peut durer plusieurs minutes par hôte.

![Validation finale](images/vlcm_05.png){.thumbnail}

**Option Zerto** : Lorsque la mise à jour est terminée, vous pouvez sortir les hôtes de votre cluster du Mode Maintenance.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez vos questions, donnez votre avis et échangez directement avec l’équipe en charge des services Hosted Private Cloud sur notre canal [Discord](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d'utilisateurs](/links/community).