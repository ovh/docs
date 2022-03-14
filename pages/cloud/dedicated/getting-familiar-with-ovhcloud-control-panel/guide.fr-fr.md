---
title: Clients Kimsufi et SoYouStart - Se familiariser avec l'espace client OVHcloud
excerpt: Apprenez à naviguer dans l'espace client OVHcloud
slug: se-familiariser-avec-lespace-client-ovhcloud
section: Clients So you Start & Kimsufi
order: 1
---

**Dernière mise à jour le 11/03/2022**

## Objective

OVHcloud annonce le regroupement de l’ensemble des serveurs dédiés Kimsufi, So you Start et Rise dans une ligne de produits appelée Eco, afin de vous offrir une meilleure vue d’ensemble de nos configurations. En raison de ces changements, vous pourrez désormais gérer tous vos services, quelle que soit leur gamme, depuis l'espace client OVHcloud. Pour vous accompagner dans ce changement si vous avez opté pour un achat sur la ligne de produits Eco, nous avons mis en place un guide vous présentant l’espace client OVHcloud et ses options.

**Ce guide est destiné à vous aidez à vous familiariser avec l'espace client OVHcloud.**

> [!warning]
> Veuillez noter que malgré le changement d'interface client, certaines options ne seront disponibles que pour les serveurs de la gamme de serveurs baremetal OVHcloud.
>

## En pratique

### Tableau de bord

![tableau de bord](images/OVHclouddashboard.png){.thumbnail}

Si vous avez acquis des serveurs de la ligne de produit Eco, votre tableau de bord sera désormais celui de l’espace client OVHcloud. Ce tableau de bord OVHcloud présente un récapitulatif de tous vos services. Cette interface présente plusieurs sections qui vous permettent d'accéder instantanément à un service.<br>
La colonne de droite vous donne accès à vos informations personnelles, votre identifiant client et votre niveau de support (le cas échéant).<br>
Elle propose également un ensemble de raccourcis et de liens utiles.

### Accéder au serveur

![acces serveur](images/listserversOVHcloud.png){.thumbnail}

Dans les interfaces Kimsufi et So you Start, le tableau de bord vous permet de voir votre serveur/liste de serveurs.<br>
Depuis l'espace client OVHcloud, cliquez d’abord sur le menu `Bare Metal Cloud`{.action} et ensuite sur `Serveurs dédiés`{.action} pour afficher vos serveurs.<br>
Si vous possédez plusieurs serveurs, le bouton `Tous mes serveurs`{.action} vous permet de les lister pour un accès facile.

### Interface Serveur

Une fois dans le menu `Serveurs Dédiés`{.action}, cliquez sur le serveur de votre choix pour accéder à son interface.

![inteface serveur](images/serverinterfaceOVHcloud.png){.thumbnail}

**Informations générales** : Dans cette section, retrouvez toutes les informations concernant votre serveur.

- Nom : Cliquez sur les `...`{.action} à côté de cette option pour modifier le nom de votre serveur.
- Boot : Cliquez sur les `...`{.action} à côté de cette option pour changer le netboot de votre serveur en *mode rescue*, *mode normal* ( sur le disque dur) ou *mode network*.
- Système (OS) : Cliquez sur les `...`{.action} à côté de cette option pour installer/réinstaller votre serveur.

**Etat des services**

- Statut : Cliquez sur les `...`{.action} à côté de cette option pour redémarrer ou supprimer votre serveur.
- Monitoring : Cliquez sur les `...`{.action} à côté de cette option pour activer/désactiver le monitoring sur votre serveur. Pour savoir comment installer le Real Time Monitoring (RTM), veuillez consulter ce [guide](https://docs.ovh.com/fr/dedicated/installer-rtm/).

**Réseau**

- IPV4 : Cliquez sur les `...`{.action} à côté de cette option pour gérer votre IP.
- Reverse : Cliquez sur les `...`{.action} à côté de cette section pour entrer/modifier votre reverse DNS.

**DNS secondaire** : Configurez votre DNS secondaire ici. Pour plus d'informations, consultez ce [guide](https://docs.ovh.com/ca/en/dedicated/secondary-dns/).

**Backup Storage** (Disponible uniquement sur les serveurs OVHcloud et les serveurs So you Start y compris ceux de la ligne Eco) : Commandez et configurez votre backup storage ici. Pour plus d'informations, consultez ce [guide](https://docs.ovh.com/fr/dedicated/services-backup-storage/).

**Interventions** : Retrouvez ici les interventions en cours et passées sur votre serveur.

**IPMI** (Disponible uniquement sur les serveurs OVHcloud et certains serveurs So you Start y compris ceux de la ligne Eco) : Accédez ici à l'outil IPMI ou le KVM IP de votre serveur. Pour plus d'informations sur l'utilisation de cet outil, consultez ce [guide](https://docs.ovh.com/fr/dedicated/utilisation-ipmi-serveurs-dedies).

**Tâches** : Visualisez ici les tâches récentes effectuées sur votre serveur.

Pour plus d'informations sur la gestion de votre serveur dédié via l'espace client OVHcloud, veuillez consulter [ce guide](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/).

### Section IP

Pour accéder à la section « IP » de votre espace client OVHcloud, cliquez sur le menu `Bare Metal Cloud`{.action} et ensuite sur `IP`{.action} :

![section ip](images/manageIPsOVHcloud.png){.thumbnail}

### Onglet Licences (non offert sur Kimsufi)

Pour accéder à l'onglet « Licences » dans l'espace client OVHcloud, cliquez sur le menu `Bare Metal Cloud`{.action} et ensuite sur `Licences`{.action} :

![license](images/managelicencesOVHcloud.png){.thumbnail}

### Support, Facturation et Gestion de compte

Dans l’espace client Kimsufi ou So you Start, ces options sont disponibles en haut à droite sous des onglets individuels.<br>
Dans l’espace client OVHcloud, ces options sont regroupées dans un espace commun. Cliquez sur votre nom en haut à droite et cliquez sur vos initiales pour accéder à la rubrique `Gérer mon compte`.

![factu](images/accountOVHcloud.png){.thumbnail}

- **Informations générales** : dans cette rubrique, vous pouvez visualiser les informations de votre compte, votre dernière facture et accéder à différents raccourcis.
- **Sécurité** : cette rubrique vous permet de gérer les paramètres de sécurité de votre compte. Pour plus d’informations, nous vous invitons à consulter ce [guide](https://docs.ovh.com/fr/customer/tout-savoir-sur-identifiant-client/).
- **Emails reçus** : dans cette rubrique, vous trouverez l'ensemble des emails qu'OVHcloud vous a envoyé, en dehors des demandes d'assistance.
- **Mon niveau de support** (uniquement disponible pour les services OVHcloud) : vous trouverez plus d’informations sur le niveau de support proposé par OVHcloud dans cette rubrique.
- **Gestion des utilisateurs** : cette rubrique vous permet de gérer vos utilisateurs. Plus d'informations. veuillez consulter ce [guide](https://docs.ovh.com/fr/customer/gestion-utilisateurs/).
- **Mes factures** : depuis cette rubrique, vous pouvez consulter vos factures, suivre les paiements effectués avec votre moyen de paiement par défaut et consulter vos avoirs. Plus d'informations sur [ce guide](https://docs.ovh.com/fr/billing/gerer-factures-ovh/).
- **Mes services** : cette rubrique vous permet de visualiser l'ensemble de vos services, vos contrats et vos clés SSH.
- **Moyens de paiement** : dans cette rubrique, vous avez accès à votre moyen de paiement actuel, votre compte prépayé ainsi que vos vouchers OVHcloud. Vous y trouverez également l'option d'ajouter/supprimer une méthode de paiement. Pour plus d’informations sur la gestion de vos moyens de paiement, nous vous invitons à consulter ce [guide](https://docs.ovh.com/fr/billing/manage-payment-methods/).
- **Mes commandes** : consultez vos commandes depuis cette page. Plus d'informations sur [ce guide](https://docs.ovh.com/fr/billing/gerer-ses-commandes-ovh/).
- **Mes demandes d'assistance** : cette rubrique vous permet d’ouvrir/visualiser l’ensemble de vos demandes d’assistance.

## Aller plus loin

Dans la pratique, voici quelques guides qui vous aideront au démarrage :

[Se connecter à l’espace client OVHcloud](https://docs.ovh.com/fr/customer/se-connecter-espace-client-ovhcloud/).<br>
[Modifier le mot de passe de votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).<br>
[Sécuriser mon compte OVHcloud et gérer mes informations personnelles](https://docs.ovh.com/fr/customer/tout-savoir-sur-identifiant-client/).<br>
[Gérer les contacts de ses services](https://docs.ovh.com/fr/customer/gestion-des-contacts/).<br>
[Créer une clé SSH](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/).<br>
[Quelles sont les adresses IP du monitoring OVHcloud ?](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/).

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
