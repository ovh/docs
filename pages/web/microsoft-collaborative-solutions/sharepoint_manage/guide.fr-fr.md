---
title: 'Activer et gérer votre SharePoint OVHcloud'
slug: activation-et-gestion-de-votre-sharepoint-ovh
legacy_guide_number: 2249
excerpt: 'Découvrez comment commander et configurer une plateforme SharePoint.'
section: Sharepoint
order: 1
---

**Dernière mise à jour le 15/04/2020**

## Objectif

Les offres SharePoint permettent de bénéficier d'un espace de stockage partagé pour votre travail collaboratif.

**Découvrez comment commander et configurer une plateforme SharePoint.**

## Prérequis

- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Avoir souscrit à une plateforme [Hosted Exchange](https://www.ovh.com/fr/emails/hosted-exchange/){.external} pour la commande d'une plateforme SharePoint associée.

## En pratique

### Étape 1 : commander une plateforme SharePoint

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `Commander`{.action} dans la barre de services à gauche puis sur `Sharepoint`{.action} .

Il y a deux types de plateformes qui vous sont proposées :

| SharePoint associé                                                                                                                      	| SharePoint standalone                                                                                                                                                                       	|
|-----------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![sharepoint](images/order-manage-sharepoint-02.png){.thumbnail}                                                                        	| ![sharepoint](images/order-manage-sharepoint-03.png){.thumbnail}                                                                                                                            	|
| Si vous possédez une plateforme Hosted Exchange sur votre espace client, vous pouvez associer ses comptes à une plateforme SharePoint. Cochez le ou les comptes auxquels vous souhaitez associer une licence SharePoint 	| Si vous n'avez pas de plateforme Exchange Hosted OVHcloud ou que vous souhaitez une plateforme SharePoint indépendante, choisissez la commande d'une plateforme SharePoint Standalone. <br>Définissez le nombre de licences que vous souhaitez en fonction du nombre d'utilisateurs.	|

Une fois votre choix effectué, Cliquez sur `Commander votre service`{.action} afin de finaliser votre commande.

### Étape 2: activer la plateforme SharePoint

Une fois votre commande validée et réglée, vous recevrez sur l'adresse e-mail de référence de votre espace client un e-mail de confirmation indiquant que la plateforme est prête à la configuration.

Pour consulter cet e-mail, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) puis cliquez sur votre profil en haut à droite et enfin cliquez sur vos initiales. Dirigez-vous sur l'onglet `Emails reçus`{.action} et recherchez l'e-mail ayant pour objet :

> **[xx-11111-ovh] Configurer votre service Microsoft SharePoint !**

Pour débuter cette configuration, dirigez-vous dans la section `Web` de votre espace client. Cliquez sur `Microsoft`{.action} dans la barre de services à gauche puis sur `Sharepoint`{.action} et sélectionnez la plateforme SharePoint concernée.

Définissez le nom de votre plateforme dans la case « URL du SharePoint » puis cliquez sur `Valider l'URL`{.action}

![sharepoint](images/order-manage-sharepoint-04.png){.thumbnail}  

> [!warning]
>
> Une fois validé, le nom de la plateforme ne peut pas être modifié.

### Étape 3: configuration de la plateforme SharePoint

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section `Web`. Cliquez sur `Microsoft`{.action} dans la barre de services à gauche puis sur `Sharepoint`{.action} et sélectionnez la plateforme SharePoint concernée.

#### **SharePoint standalone**

Cette plateforme est indépendante, il faut d'abord y associer un nom de domaine avant de configurer vos utilisateurs.

##### ***Ajouter un domaine***

Dirigez-vous dans l'onglet `Domaines` et cliquez sur `Ajouter un domaine`{.action}. Sélectionnez un domaine que vous possédez dans votre espace client ou tapez un nom de domaine externe que vous gérez. 

- Si vous choisissez un nom de domaine présent dans votre espace client, celui-ci sera automatiquement validé, il ne vous restera plus qu'à configurer vos utilisateurs.
 
- Si vous choisissez un nom de domaine externe, il est nécessaire d'ajouter un enregistrement CNAME dans la zone DNS du nom de domaine pour le valider sur la plateforme SharePoint. L'enregistrement CNAME à renseigner est accessible en cliquant sur l'icône d'information à côté de la mention « Validation de domaine en cours », comme ci-dessous.


![sharepoint](images/order-manage-sharepoint-05.png){.thumbnail}

##### ***Configurer un utilisateur***

Dirigez-vous dans l'onglet `Utilisateur`, cliquez sur `...`{.action} à droite du compte puis cliquez sur `Modifier le compte`{.action}

![sharepoint](images/order-manage-sharepoint-06.png){.thumbnail} 

Complétez la fenêtre qui apparaît avec les informations de l'utilisateur et cliquez sur `valider`{.action}

Pour obtenir les droits administrateur sur la plateforme SharePoint, cliquez à nouveau sur `...`{.action} à droite du compte puis cliquez sur `Activer les droits administrateur`{.action}

#### **SharePoint associé**

Comme son nom l'indique, cette plateforme est associée à la plateforme Exchange que vous avez choisie lors de votre commande, il n'y a donc pas de nom de domaine à associer.

##### ***Configurer un utilisateur***

Dirigez-vous dans l'onglet `Utilisateurs` de votre plateforme pour y visualiser l'ensemble des comptes Exchange qui peuvent bénéficier d'une licence SharePoint.

![sharepoint](images/order-manage-sharepoint-07.png){.thumbnail} 

Une colonne `Compte activé` indique si le compte de la plateforme Exchange bénéficie d'une licence sharePoint. 

> [!primary]
>
> Si vous souhaitez activer une licence sur un compte qui n'en possède pas, cliquez sur `...`{.action} à droite du compte puis cliquez sur `Activer SharePoint`{.action}.

Par défaut, un compte bénéficiant d'une licence n'a pas les droits administrateur. Pour les activer, Cliquez sur `...`{.action} à droite du compte puis sur `Activer les droits administrateur`{.action}.

![sharepoint](images/order-manage-sharepoint-08.png){.thumbnail} 

#### **Rétablir les droits administrateur**

Sur les deux types de plateformes SharePoint, vous retrouvez le bouton `Rétablir droits administrateur`{.action} dans l'onglet `Utilisateur`. Il permet de remettre en place les droits administrateur de la plateforme en cas de mauvaise manipulation depuis l'interface SharePoint.

![sharepoint](images/order-manage-sharepoint-09.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.