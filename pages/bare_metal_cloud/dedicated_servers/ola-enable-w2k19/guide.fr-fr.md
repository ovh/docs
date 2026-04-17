---
title: "Comment configurer votre NIC pour OVHcloud Link Aggregation sous Windows Server 2019"
excerpt: "Activez l'agrégation de liens sur votre serveur Windows Server 2019 pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau"
updated: 2026-04-17
---

## Objectif

La technologie OVHcloud Link Aggregation (OLA) est conçue par nos équipes pour augmenter la disponibilité de votre serveur et améliorer l'efficacité de vos connexions réseau. En quelques clics, vous pouvez agréger vos cartes réseau et rendre vos liaisons réseau redondantes. Cela signifie que si une liaison tombe en panne, le trafic est automatiquement redirigé vers une autre liaison disponible. La bande passante disponible est également doublée grâce à l'agrégation.
L'agrégation est basée sur la technologie IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Ce guide explique comment configurer le NIC Teaming pour OLA sous Windows Server 2019.**

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) des gammes Advance, Scale ou High Grade sur votre compte OVHcloud
- Un accès à l'[espace client OVHcloud](/links/manager)

## En pratique

> [!primary]
> Les valeurs (adresses MAC, adresses IP, etc.) indiquées dans les configurations et exemples ci-dessous sont fournies à titre d'exemple. Bien entendu, vous devez remplacer ces valeurs par les vôtres.
>

### Récupération des adresses MAC

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur parmi les **Serveurs dédiés**.

Basculez sur l'onglet `Interfaces réseau`{.action} et notez les adresses MAC de chaque interface (publique/privée) qui sont affichées en bas du menu.

![Espace client OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Veuillez noter que l'adresse MAC de l'interface **publique principale** est celle qui reçoit les offres DHCP, aussi bien dans le système d'exploitation du serveur qu'en mode rescue. Cette interface gère la connectivité publique dans la configuration par défaut.
>
> De plus, l'adresse MAC de l'interface **privée principale** est celle ayant la valeur la plus basse. Dans l'image d'exemple ci-dessus, il s'agit de l'adresse `a1:b2:c3:d4:e5:d6`.
>

### Accès au serveur

Étant donné que vos cartes réseau sont en configuration privée-privée avec OLA, vous ne pourrez pas vous connecter en RDP au serveur via son IP publique. Vous devrez utiliser l'outil KVM/IPMI pour y accéder.

Connectez-vous à votre [espace client OVHcloud](/links/manager). Dans la section `Bare Metal Cloud`{.action}, sélectionnez votre serveur parmi les `Serveurs dédiés`{.action} et cliquez sur l'onglet `IPMI`{.action}.

> [!primary]
>
> Pour des instructions détaillées sur l'utilisation du KVM, suivez les étapes intitulées « **Ouvrir un KVM** » de [ce guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

### Configuration du NIC Teaming

Sélectionnez l'onglet ci-dessous correspondant à la configuration de votre serveur :

- **Deux interfaces** : serveurs Advance avec deux cartes réseau physiques.
- **Quatre interfaces - Double LAG** : serveurs Scale et High Grade avec OLA en mode **Active - Double LAG** (agrégats public + privé). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.
- **Quatre interfaces - Fully Private** : serveurs Scale et High Grade avec OLA en mode **Active - Fully Private** (un seul agrégat privé pour le vRack). Cela nécessite l'[activation d'OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) dans l'espace client OVHcloud.

> [!tabs]
> Deux interfaces
>> Une fois connecté au serveur, ouvrez le **Gestionnaire de serveur**. S'il n'est pas ouvert par défaut, vous le trouverez épinglé au menu Démarrer.
>>
>> ![gestionnaire de serveur](images/local_server.png){.thumbnail}
>>
>> Une fois le Gestionnaire de serveur ouvert, cliquez sur l'onglet **Serveur local** dans la barre latérale gauche. Cliquez ensuite sur le bouton **Désactivé** à côté de « NIC Teaming ».
>>
>> ![serveur local](images/server_manager.png){.thumbnail}
>>
>> Dans la fenêtre NIC Teaming, cliquez sur le bouton **Nouvelle équipe** dans le menu déroulant **TÂCHES** sous la section « ÉQUIPES ».
>>
>> ![nic teaming](images/nic_teaming.png){.thumbnail}
>>
>> Donnez un nom à votre équipe et cochez les deux cartes réseau que vous souhaitez utiliser avec OLA. Cliquez sur la flèche déroulante à côté de « Propriétés supplémentaires » et passez le « Mode de liaison » sur **LACP**. Cliquez sur **OK** une fois que vous avez confirmé que les informations sont correctes.
>>
>> ![nouvelle équipe](images/new_team.png){.thumbnail}
>>
>> La mise en ligne de l'équipe NIC peut prendre quelques minutes. Une fois terminé, cliquez sur l'icône de connexion réseau en bas à droite. Cliquez ensuite sur le bouton **Paramètres réseau et Internet**. Puis cliquez sur le bouton **Ethernet** dans la barre latérale gauche de la fenêtre qui s'affiche.
>>
>> ![bouton réseau](images/network_button.png){.thumbnail}
>>
>> Cliquez sur le bouton **Modifier les options de l'adaptateur**.
>>
>> ![ethernet](images/ethernet.png){.thumbnail}
>>
>> Faites ensuite un clic droit sur votre équipe NIC et sélectionnez **Propriétés** dans le menu déroulant.
>>
>> ![propriétés](images/properties.png){.thumbnail}
>>
>> Dans la fenêtre qui s'affiche, double-cliquez sur le bouton **Protocole Internet version 4 (TCP/IPv4)**.
>>
>> ![ipv4](images/ipv4.png){.thumbnail}
>>
>> Cliquez sur le bouton à côté de « Utiliser l'adresse IP suivante » et ajoutez l'IP publique et le masque de sous-réseau de votre serveur. Cliquez sur le bouton **OK** une fois que vous avez confirmé que vos paramètres sont corrects.
>>
>> ![ipv42](images/ipv42.png){.thumbnail}
>>
> Quatre interfaces - Double LAG
>> Cette configuration crée deux équipes NIC : une pour les interfaces publiques (avec IP publique) et une pour les interfaces privées (pour le vRack).
>>
>> Une fois connecté au serveur, ouvrez le **Gestionnaire de serveur** et cliquez sur l'onglet **Serveur local**. Cliquez sur le bouton **Désactivé** à côté de « NIC Teaming ».
>>
>> **Créez l'équipe publique :**
>>
>> Dans la fenêtre NIC Teaming, cliquez sur **Nouvelle équipe** dans le menu déroulant **TÂCHES**. Donnez un nom à l'équipe (par exemple « Public »), cochez les **deux cartes réseau publiques** (identifiées par leurs adresses MAC dans l'espace client OVHcloud), passez le « Mode de liaison » sur **LACP**, et cliquez sur **OK**.
>>
>> **Créez l'équipe privée :**
>>
>> Cliquez de nouveau sur **Nouvelle équipe**. Donnez un nom différent à l'équipe (par exemple « Private »), cochez les **deux cartes réseau privées**, passez le « Mode de liaison » sur **LACP**, et cliquez sur **OK**.
>>
>> Attendez que les deux équipes soient en ligne, puis configurez leurs adresses IP :
>>
>> - **Équipe publique** : clic droit > **Propriétés** > **Protocole Internet version 4 (TCP/IPv4)** > attribuez l'IP publique et le masque de sous-réseau de votre serveur.
>> - **Équipe privée** : clic droit > **Propriétés** > **Protocole Internet version 4 (TCP/IPv4)** > attribuez une adresse IP privée (par exemple `10.0.0.1` avec le masque de sous-réseau `255.255.255.0`).
>>
> Quatre interfaces - Fully Private
>> Cette configuration agrège toutes les interfaces physiques en une seule équipe NIC destinée uniquement au vRack. Il n'y a pas de connectivité IP publique.
>>
>> > [!warning]
>> >
>> > Suite à la mise en oeuvre d'OLA en mode Fully Private, l'IP publique n'est plus accessible. Assurez-vous de disposer d'un autre moyen d'accès (par exemple via un autre serveur dans le vRack, ou via KVM/IPMI) avant d'appliquer cette configuration.
>> >
>>
>> Une fois connecté au serveur, ouvrez le **Gestionnaire de serveur** et cliquez sur l'onglet **Serveur local**. Cliquez sur le bouton **Désactivé** à côté de « NIC Teaming ».
>>
>> Dans la fenêtre NIC Teaming, cliquez sur **Nouvelle équipe** dans le menu déroulant **TÂCHES**. Donnez un nom à l'équipe, cochez **les quatre cartes réseau**, passez le « Mode de liaison » sur **LACP**, et cliquez sur **OK**.
>>
>> Attendez que l'équipe soit en ligne, puis configurez son adresse IP :
>>
>> Clic droit sur l'équipe NIC > **Propriétés** > **Protocole Internet version 4 (TCP/IPv4)** > Cliquez sur « Utiliser l'adresse IP suivante » et attribuez une adresse IP privée pour la communication vRack (par exemple `10.0.0.1` avec le masque de sous-réseau `255.255.255.0`).
>>
>> > [!primary]
>> >
>> > En mode Fully Private, l'équipe NIC doit se voir attribuer une adresse IP privée uniquement pour la communication vRack.
>> >

### Vérification de la configuration

Pour vérifier que votre équipe NIC fonctionne, effectuez un ping vers un autre serveur sur le même vRack. Si cela fonctionne, la configuration est terminée. Si ce n'est pas le cas, vérifiez vos configurations ou essayez de redémarrer le serveur.

## Aller plus loin

[Configurer l'agrégation de liens OLA dans votre espace client](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Comment configurer votre NIC pour OVHcloud Link Aggregation sous Debian 12 ou Ubuntu 24.04 avec Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Comment configurer votre NIC pour l'agrégation de liens OVHcloud sous Debian 9 à 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Comment configurer votre NIC pour OVHcloud Link Aggregation sous SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Échangez avec notre [communauté d'utilisateurs](/links/community).
