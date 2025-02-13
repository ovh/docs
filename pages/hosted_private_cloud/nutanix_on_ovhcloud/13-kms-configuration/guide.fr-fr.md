---
title: 'Configuration de KMS OVHcloud avec Nutanix sur OVHcloud'
excerpt: 'Apprenez à configurer le système de gestion des clés (KMS) d’OVHcloud avec Nutanix pour sécuriser vos données au repos.'
updated: 2025-02-13
---

## Objectif

Ce guide explique comment configurer le **système de gestion des clés (KMS) d’OVHcloud** avec **Nutanix sur OVHcloud**.  

Nutanix propose deux options pour sécuriser les **données au repos** :  
- **Disques auto-chiffrés (SEDs)**  ,
- **Chiffrement logiciel**, qui permet une gestion des clés basée sur un gestionnaire natif du cluster ou un **système de gestion des clés externe (KMS)**.  

En suivant ce guide, vous apprendrez à utiliser les fonctionnalités de **chiffrement des données au repos** de Nutanix avec **OVHcloud KMS**.

## Prérequis

Avant de commencer, assurez-vous d’avoir :

- Un accès à votre [Espace Client OVHcloud](/links/manager).
- Une **clé KMS OVHcloud valide** dans votre compte OVHcloud.  
  - [Plus d’informations sur la configuration des clés KMS](https://help.ovhcloud.com/csm/en-kms-quick-start?id=kb_article_view&sysparm_article=KB0063366)
- Un **cluster Nutanix sur OVHcloud** dans votre compte OVHcloud.
- Un **cluster Nutanix compatible avec le chiffrement des données au repos** (confirmez avec votre représentant commercial OVHcloud ou l’équipe support).
- Un accès au cluster Nutanix via **Prism Central** / **Prism Element**.
- Une **licence Nutanix** prenant en charge la fonctionnalité **Data-At-Rest Encryption**.
- Le respect des recommandations Nutanix :
  - [Guide de sécurité Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v7_0:wc-security-data-encryption-wc-c.html)
  - [Matrice de compatibilité KMS Nutanix](https://portal.nutanix.com/page/documents/compatibility-interoperability-matrix/software?partnerName=OVHCloud&solutionType=KMS%20%28Key%20Management%20Solutions%29&componentVersion=External%20Key%20Managers&hypervisor=all&validationType=all)

## Instructions

### Étape 1 : Accéder à Prism Central et Prism Element

1. **Connectez-vous** à [Prism Central](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).

2. **Accédez à** `Prism Element`{.action}.

![Prism Element](images/01-kms-configuration.png){.thumbnail}

3. **Allez dans** `Paramètres`{.action}.

![Paramètres Prism Element](images/02-kms-configuration.png){.thumbnail}

### Étape 2 : Configurer le chiffrement des données au repos

1. **Faites défiler jusqu’à** `Chiffrement des données au repos`{.action} dans le menu des paramètres.
2. **Cliquez sur** `Modifier la configuration`{.action}.

![Chiffrement des données au repos](images/03-kms-configuration.png){.thumbnail}

3. **Sélectionnez** le `Type de chiffrement`{.action} et le `Type de KMS`{.action}.

![Type de chiffrement](images/04-kms-configuration.png){.thumbnail}

![Type de KMS](images/05-kms-configuration.png){.thumbnail}

4. **Saisissez** les informations de configuration pour générer la **demande de signature de certificat (CSR)**.

![Détails de la configuration](images/06-kms-configuration.png){.thumbnail}

### Étape 3 : Ajouter et gérer les certificats

1. **Ajoutez** votre **serveur de gestion des clés (KMS)**.

![KMS](images/07-kms-configuration.png){.thumbnail}

2. **Cliquez sur** `Gérer les certificats`{.action}.

![KMS](images/08-kms-configuration.png){.thumbnail}

3. **Téléversez** votre `Autorité de certification (CA)`{.action}.

4. Une fois l’AC téléversée, **revenez à** `Serveur de gestion des clés`{.action} et **cliquez sur** `Gérer les certificats`{.action}.

![KMS](images/09-kms-configuration.png){.thumbnail}
 
### Étape 4 : Tester et activer le chiffrement

1. **Testez tous les nœuds**{.action} du cluster.

![Nœuds](images/10-kms-configuration.png){.thumbnail}

2. Si le test est réussi, vous pouvez maintenant **activer le chiffrement**{.action} de votre cluster Nutanix.

![Test réussi](images/11-kms-configuration.png){.thumbnail}

3. Vous pouvez **activer** à la fois le `Chiffrement logiciel`{.action} et les `Disques auto-chiffrés (SEDs)`{.action}.

![SED](images/12-kms-configuration.png){.thumbnail}

## Pour aller plus loin

- [Guide de sécurité Nutanix pour le chiffrement des données au repos](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Security-Guide-v7_0:wc-security-data-encryption-wc-c.html)
- [Guide de démarrage rapide du KMS OVHcloud](https://help.ovhcloud.com/csm/en-kms-quick-start?id=kb_article_view&sysparm_article=KB0063366)
- [Matrice de compatibilité Nutanix](https://portal.nutanix.com/page/documents/compatibility-interoperability-matrix/software?partnerName=OVHCloud&solutionType=KMS%20%28Key%20Management%20Solutions%29&componentVersion=External%20Key%20Managers&hypervisor=all&validationType=all)