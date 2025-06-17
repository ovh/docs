---
title: "Comment configurer IPv6 sur OverTheBox ?"
excerpt: "Découvrez comment configurer IPv6 sur OverTheBox"
updated: 2025-06-05
---

## Objectif

Découvrez comment activer et configurer IPv6 sur un service OverTheBox.

## Prérequis

- Disposer d'un service **OverTheBox Starter** ou **OverTheBox Business** fourni par OVHcloud.
- Posséder un boîtier **OverTheBox** en version **v1.1.2 ou supérieure** fourni par OVHcloud, ou avoir installé l’image OverTheBox issue du projet Open Source sur un équipement personnel ([installer l'image OverTheBox sur votre matériel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel)).
- Être connecté à l'[espace client OVHcloud](/links/manager) dans la partie `Telecom`{.action}.

> [!warning]
>
> L'IPv6 n'est pas disponible sur les anciennes offres OverTheBox, vous pouvez changer votre offre en consultant le guide « [Comment changer mon offre OverTheBox](/pages/web_cloud/internet/overthebox/offer_migration) ».
>

> [!warning]
>
> L'IPv6 est actuellement en phase bêta, le boîtier **OverTheBox** doit être en version **v1.1.2 ou supérieure**. Pour mettre à jour votre équipement, consultez le guide « [Comment mettre à jour un appareil OverTheBox](/pages/web_cloud/internet/overthebox/config_upgrade) ».
>

## En pratique

### Fonctionnement de l'IPv6 avec OverTheBox

Chaque service dispose d'une plage /56 mais certaines restrictions s'appliquent :

- Un sous-réseau /64 est réservé pour le fonctionnement du service.
- Seul le premier sous-réseau /60 est assigné à l'équipement, ce qui permet d'exploiter 16 sous-réseaux /64. Les autres sous-réseaux sont réservés pour des applications futures.

### Étape 1 : activer ou désactiver IPv6

- Connectez-vous à votre [espace client OVHcloud](/links/manager), partie `Telecom`{.action}.
- Cliquez sur `OverThebox`{.action} dans la barre de services à gauche, puis sélectionnez le service OverTheBox sur lequel vous souhaitez configurer l'IPv6.
- Pour **activer** IPv6, cochez la case `IPv6 activée`{.action}.
- Pour **désactiver** IPv6, décochez la case `IPv6 activée`{.action}.

![overthebox](images/step1-ipv6-1-enableIpv6-2025.png){.thumbnail}

### Étape 2 : configuration du pare-feu

Par défaut le pare-feu du boîtier **OverTheBox** est configuré pour permettre uniquement les communications sortantes en IPv6, du réseau local vers Internet.

- Connectez-vous à l'interface web de l'**OverTheBox** depuis [overthebox.ovh](http://overthebox.ovh) ou [192.168.100.1](https://192.168.100.1).

#### Autoriser le ping depuis l'extérieur

Par défaut, le ping depuis l'extérieur n'est pas autorisé. Vous pouvez ajouter une règle de pare-feu pour l'autoriser.

- Rendez-vous dans l'onglet `Network > Firewall`{.action}.
- Rendez-vous dans la section `Traffic Rules`{.action}.
- Ajoutez une règle à l'aide du bouton `Add`{.action}.

![overthebox](images/step2-ipv6-AllowPing-1-2025.png){.thumbnail}

- Modifiez le paramètre `Name`{.action} pour donner un nom à la règle. Pour notre exemple, la règle se nomme `Allow-Ping-tunv6`.
- Modifiez le paramètre `Protocol`{.action} pour restreindre la règle sur une famille de protocole. Pour notre exemple, le ping utilise le protocole **ICMP**, nous renseignons donc `ICMP`.
- Modifiez le paramètre `Source zone`{.action} pour sélectionner la zone du pare-feu d'où proviennent les paquets. La zone est `tunv6`.
- Modifiez le paramètre `Destination zone`{.action} pour sélectionner la zone de destination du pare-feu. La zone est `lan`.

![overthebox](images/step2-ipv6-AllowPing-2-2025.png){.thumbnail}

- Rendez-vous dans la sous-section `Advanced Settings`{.action}.
- Dans le paramètre `Restrict to address family`{.action}, sélectionnez `IPv6 only`, pour limiter la règle uniquement au trafic **IPv6**.
- Confirmez vos changements avec le bouton `Save`{.action}.
- Appliquez vos changements avec le bouton `Save & Apply`{.action}.

![overthebox](images/step2-ipv6-AllowPing-3-2025.png){.thumbnail}

#### Ouverture de port

Il est possible de créer une règle de pare-feu pour autoriser uniquement l'accès à un port spécifique depuis l'extérieur. Dans cet exemple, nous allons autoriser l'accès à un serveur **web** en **HTTP** sur le port **80**.

- Rendez-vous dans l'onglet `Network > Firewall`{.action}.
- Rendez-vous dans la section `Traffic Rules`{.action}.
- Ajoutez une règle à l'aide du bouton `Add`{.action}.

![overthebox](images/step2-ipv6-AllowPing-1-2025.png){.thumbnail}

- Modifiez le paramètre `Name`{.action} pour donner un nom à la règle. Pour notre exemple, la règle se nomme `web`.
- Modifiez le paramètre `Protocol`{.action} pour restreindre la redirection sur un protocole. Pour notre exemple, nous n'avons besoin que du protocole **HTTP** qui se base sur **TCP**, nous renseignons donc `TCP`.
- Modifiez le paramètre `Source zone`{.action} pour sélectionner la zone du pare-feu d'où proviennent les paquets. La zone est `tunv6`.
- Modifiez le paramètre `Destination zone`{.action} pour sélectionner la zone de destination du pare-feu. La zone est `lan`.
- Modifiez le paramètre `Destination address`{.action} pour sélectionner l'équipement de destination. Dans notre exemple, notre équipement est `webServer.lan`.
- Modifiez le paramètre `Destination port`{.action} pour sélectionner le port de destination sur l'équipement. Dans notre exemple, le protocole **HTTP** écoute sur le port **80**, nous renseignons donc `80`.

![overthebox](images/step2-ipv6-AllowHTTP-2-2025.png){.thumbnail}

- Rendez-vous dans la sous-section `Advanced Settings`{.action}.
- Dans le paramètre `Restrict to address family`{.action}, sélectionnez `IPv6 only` pour limiter la règle uniquement au trafic **IPv6**.
- Confirmez vos changements avec le bouton `Save`{.action}.
- Appliquez vos changements avec le bouton `Save & Apply`{.action}.

![overthebox](images/step2-ipv6-AllowPing-3-2025.png){.thumbnail}

#### Désactiver le filtrage IPv6 sur un équipement en particulier

> [!warning]
>
> Cette configuration désactive le filtrage IPv6 par l'OverTheBox sur l'équipement client concerné. Il sera totalement exposé en IPv6, il devra donc assurer sa propre sécurité.
>

Il est possible de créer une règle de pare-feu pour autoriser l'accès sans restriction à un équipement client depuis l'extérieur. Dans cet exemple, nous allons autoriser l'accès à tous les ports du serveur **webServer.lan**.

- Rendez-vous dans l'onglet `Network > Firewall`{.action}.
- Rendez-vous dans la section `Traffic Rules`{.action}.
- Ajoutez une règle à l'aide du bouton `Add`{.action}.

![overthebox](images/step2-ipv6-AllowPing-1-2025.png){.thumbnail}

- Modifiez le paramètre `Name`{.action} pour donner un nom à la règle. Pour notre exemple, la règle se nomme `server`.
- Modifiez le paramètre `Protocol`{.action} pour restreindre la redirection sur un protocole. Pour notre exemple, nous ne souhaitons pas de restrictions, nous renseignons donc `TCP`, `UDP` et `ICMP`.
- Modifiez le paramètre `Source zone`{.action} pour sélectionner la zone du pare-feu d'où proviennent les paquets. La zone est `tunv6`.
- Modifiez le paramètre `Destination zone`{.action} pour sélectionner la zone de destination du pare-feu. La zone est `lan`.
- Modifiez le paramètre `Destination address`{.action} pour sélectionner l'équipement de destination. Dans notre exemple, notre équipement est `webServer.lan`.
- Le paramètre `Destination port`{.action} n'est pas renseigné pour autoriser la connexion sur tous les ports de l'équipement.

![overthebox](images/step2-ipv6-AllowHost-2-2025.png){.thumbnail}

- Rendez-vous dans la sous-section `Advanced Settings`{.action}.
- Dans le paramètre `Restrict to address family`{.action}, sélectionnez `IPv6 only`, pour limiter la règle uniquement au trafic **IPv6**.
- Confirmez vos changements avec le bouton `Save`{.action}.
- Appliquez vos changements avec le bouton `Save & Apply`{.action}.

![overthebox](images/step2-ipv6-AllowPing-3-2025.png){.thumbnail}

#### Désactiver complètement le filtrage IPv6 par l'OverTheBox

> [!warning]
>
> Cette configuration désactive le filtrage IPv6 par l'OverTheBox, les équipements clients seront totalement exposés en IPv6, ils devront donc assurer leur propre sécurité.
>

- Rendez-vous dans l'onglet `Network > Firewall`{.action}.
- Éditez la zone `tunv6`{.action}.

![overthebox](images/step2-ipv6-disableFW-1-2025.png){.thumbnail}

- Dans le paramètre `Allow forward to destination zones`{.action}, renseignez la zone `lan`.
- Confirmez vos changements avec le bouton `Save`{.action}.
- Appliquez vos changements avec le bouton `Save & Apply`{.action}.

![overthebox](images/step2-ipv6-disableFW-2-2025.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>
 
Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).