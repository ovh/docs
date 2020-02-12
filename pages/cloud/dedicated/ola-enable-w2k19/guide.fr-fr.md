---
title: 'Configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation sur Windows Server 2019'
slug: ola-w2k19
excerpt: 'Activer OVHcloud Link Aggregation sur votre serveur « Windows Server 2019 »'
section: 'Utilisation avancée'
---

**Dernière mise à jour le 24 octobre 2019**.

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible.

**Découvrez comment regrouper vos NIC (Network Interface Controller) pour les utiliser avec le service OLA sur Windows Server 2019.**

## Prérequis

- [Configurer votre NIC pour la fonctionnalité OVHcloud Link Aggregation depuis l’espace client OVHcloud](https://docs.ovh.com/fr/dedicated/ola-manager){.external}

## En pratique

Étant donné que nous avons une configuration privée-privée pour nos NIC sur OLA, il est impossible de se connecter en RDP au serveur. Par conséquent, vous devez utiliser l’outil IPMI pour accéder au serveur. Pour cela, vous devez d'abord vous connecter à [l’espace client d’OVHcloud](https://www.ovh.com/manager/){.external}.  Sélectionnez ensuite le serveur que vous souhaitez configurer dans la barre latérale gauche et cliquez sur l’onglet `IPMI`{.action}.

![remote kvm](images/remote_kvm.png){.thumbnail}

Cliquez ensuite sur le bouton `Depuis un applet Java (KVM)`{.action}. Un logiciel JNLP sera téléchargé. Lancez ce logiciel pour accéder à l’IPMI. Connectez-vous en utilisant les informations d’identification associées au serveur.

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

## Conclusion

OVHcloud vous offre la liberté et la flexibilité nécessaires pour utiliser votre matériel de la manière la plus adaptée à vos besoins. Maintenant que vous avez lu ce guide, vous devriez pouvoir configurer OLA (OVHcloud Link Aggregation) sur Windows Server 2019 afin d’utiliser vos deux NIC comme interfaces privées agrégées. 