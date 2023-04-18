---
title: 'Configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation sur Windows Server 2019'
excerpt: 'Activer OVHcloud Link Aggregation sur votre serveur « Windows Server 2019 »'
updated: 2021-03-25
---

**Dernière mise à jour le 23/03/2021.**

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible.

**Découvrez comment regrouper vos NIC (Network Interface Controller) pour les utiliser avec le service OLA sur Windows Server 2019.**

## Prérequis

- [Avoir configuré votre NIC pour la fonctionnalité OVHcloud Link Aggregation depuis l’espace client OVHcloud](/pages/cloud/dedicated/ola-enable-manager)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Étant donné que nous avons une configuration privée-privée pour nos NIC sur OLA, il est impossible de se connecter en SSH au serveur. Par conséquent, vous devrez utiliser l’outil IPMI pour accéder au serveur.
<br>Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et allez à l'onglet `Bare Metal Cloud`{.action}. Sélectionnez votre serveur dans la liste sous la rubrique `Serveurs dédiés`{.action}.

Cliquez ensuite sur l'onglet `IPMI`{.action} (1) puis sur le bouton `Depuis un applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Un logiciel JNLP sera téléchargé. Lancez le logiciel pour accéder à l’IPMI. Connectez-vous en utilisant les informations d’identification associées au serveur.

Une fois connecté au serveur, ouvrez le « Gestionnaire de serveur ». S’il n’est pas ouvert par défaut, il sera affiché dans le menu « Démarrer ».

![server manager](images/local_server.png){.thumbnail}

Une fois le « Gestionnaire de serveur » ouvert, cliquez sur l’onglet `Serveur local`{.action} de la barre latérale de gauche. Cliquez alors sur le bouton `Désactivé`{.action} à côté de « NIC Teaming ».

![local server](images/server_manager.png){.thumbnail}

Dans la fenêtre de NIC Teaming qui s'ouvre alors, cliquez sur `Nouvelle équipe`{.action} dans le menu déroulant « TÂCHES » sous la section « ÉQUIPES ».

![nic teaming](images/nic_teaming.png){.thumbnail}

Choisissez un nom pour votre équipe et vérifiez les NIC que vous souhaitez utiliser avec OLA. Cliquez sur la flèche déroulante à côté de « Propriétés supplémentaires » et passez le « mode Teaming » à LACP. Cliquez sur `OK`{.action} si l’information est correcte.

![new team](images/new_team.png){.thumbnail}

La mise en ligne de l’équipe NIC peut prendre deux minutes. Cliquez ensuite sur l’icône de connexion du réseau en bas à droite.  Cliquez sur `Paramètres Réseau et Internet`{.action}.  Dans la fenêtre qui s'ouvre, cliquez sur `Ethernet`{.action} dans le menu de gauche.

![network button](images/network_button.png){.thumbnail}

Cliquez alors sur le bouton `Changer les options de l’adaptateur`{.action}.

![ethernet](images/ethernet.png){.thumbnail}

Faites ensuite un clic droit sur votre équipe NIC et sélectionnez `Propriétés`{.action} dans le menu déroulant.

![properties](images/properties.png){.thumbnail}

Dans la fenêtre qui s’ouvre, faites un double clic sur `Protocole Internet Version 4 (TCP/IPv4)`{.action}.

![ipv4](images/ipv4.png){.thumbnail}

Cliquez sur le bouton à côté de « Utiliser l’adresse IP suivante » et ajoutez l’IP et le sous-réseau privés que vous avez choisis. Cliquez sur le bouton `OK`{.action} après avoir vérifié que vos paramètres sont corrects.

![ipv42](images/ipv42.png){.thumbnail}

Pour vérifier que votre équipe NIC fonctionne, effectuez un ping vers un autre serveur sur le même vRack.  Si cela fonctionne, le processus de configuration est terminé. Si ce n’est pas le cas, vérifiez vos configurations ou essayez de redémarrer le serveur.

## Aller plus loin

[Configurer l’agrégation de liens OLA dans votre espace client](/pages/cloud/dedicated/ola-enable-manager).

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous CentOS 7](/pages/cloud/dedicated/ola-enable-centos7).

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9](/pages/cloud/dedicated/ola-enable-debian9).

[Comment configurer votre NIC pour l’agrégation de liens OVHcloud dans SLES 15](/pages/cloud/dedicated/ola-enable-sles15).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
