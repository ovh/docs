---
title: 'Créer une instance dans votre espace client OVHcloud'
excerpt: 'Ce guide vous montrera comment créer une instance dans votre projet Public Cloud'
slug: create_an_instance_in_your_ovh_customer_account
section: 'Premiers pas'
---

**Dernière mise à jour le 21/09/2018**

## Objectif

Le [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/){.external} vous permet de créer des instances (serveurs virtuels) rapidement et facilement, en quelques clics seulement.

**Ce guide vous montrera comment créer une instance dans votre projet Public Cloud**

## Prérequis

* accès au [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager)
* un projet [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/){.external} créé dans votre compte OVHcloud
* une clé SSH créée dans votre compte client OVHcloud

## En pratique

### Créer une instance

Tout d'abord, connectez-vous au Panneau de configuration [OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} et cliquez sur le menu `Public Cloud`{.action}.

![cloud menu](images/pci-instance-cloud-01_2020.png){.thumbnail}

Ensuite, sélectionnez votre projet cloud dans la liste d'options de menu située à gauche de la page.

![servers list](images/pci-instance-servers-01_2020.png){.thumbnail}

Cliquez ensuite sur le bouton "Créer une instance"{.action}.

![add an instance](images/pci-instance-actions-01_2020.png){.thumbnail}

### Configurer l'instance

Après avoir cliqué sur le bouton "Créer une instance"{.action}, les paramètres de configuration s'affichent comme indiqué ci-dessous.

![configure an instance](images/pci-instance-configuration-01_2020.png){.thumbnail}

Ces paramètres vous permettent de configurer:

* le centre de données et la région où l'instance sera hébergée
* le système d'exploitation du serveur
* le modèle de serveur
* une clé SSH pour la sécurité (pas nécessaire pour les serveurs Windows)
* plusieurs options avancées

> [!primary]
>
Notez que pour les serveurs Windows, l'authentification est basée sur un mot de passe, de sorte que les clés SSH ne sont pas utilisées du tout.
>

Lorsque vous avez configuré les options que vous souhaitez, décidez si vous souhaitez que l'instance soit facturée par heures ou par mois.

Enfin, cliquez sur le bouton "Lancer maintenant"{.action} pour créer l'instance.

![configurer une instance](images/pci-instance-configuration-02_2020.png){.thumbnail}

Votre instance va maintenant être créée. Cela peut prendre quelques minutes.

L'instance nouvellement créée sera désormais visible dans votre compte.

![account](images/pci-instance-created-01_2020.png){.thumbnail}

> [!warning]
>
Si vous supprimez une instance facturée mensuellement avant la fin du mois, aucun crédit n'est accordé. Il est préférable de supprimer l'instance la veille du premier jour du mois suivant.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
