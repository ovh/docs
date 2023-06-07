---
title: Eviter l'usurpation d'IP avec le service SpoofGuard
excerpt: Paramétrez des politiques pour éviter l'usurpation d'IP
legacy_guide_number: '4816988'
updated: 2021-02-12
---

**Dernière mise à jour le 02/12/2021**

## Objectif

SpoofGuard protège contre l'usurpation d'adresse IP en conservant une table de référence des noms et des adresses IP des machines virtuelles. SpoofGuard conserve cette table de référence à l'aide des adresses IP que NSX Manager récupère de VMware Tools lors du démarrage initial d'une machine virtuelle.

**Ce guide explique comment établir une stratégie Spoofguard.**

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)).
- Avoir activé le [firewall distribué](/pages/cloud/private-cloud/nsx_configurer_le_firewall_distribue)

## En pratique

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}

Sur la gauche de votre écran, naviguez vers `Spoofguard`{.action} puis cliquez `+ Ajouter`{.action} pour créer une nouvelle stratégie.<br>

> [!primary]
>
> Vous pouvez sinon éditer la statégie par défaut.

![SPOOF](images/en02spoof.png){.thumbnail}

Nommez et activez la stratégie.<br>
Choisissez le mode à utiliser:

- Approuver automatiquement les attributions d'adresses IP lors de leur première utilisation.
- Inspecter et approuver manuellement toutes les attributions d'adresses IP avant leur utilisation.

> [!warning]
>
> Le mode manuel bloque tout le trafic de vos VMs tant que les couples vNIC/IP ne sont pas validés.
>

Vous pouvez également autoriser l'adresse locale comme adresse valide dans l'espace de noms.<br>

Cliquez sur `Suivant`{.action}.

![POLICY](images/en03settings.png){.thumbnail}

Selectionnez les objets réseaux sur lesquels la statégie sera appliquée puis cliquez sur `Terminer`{.action}.

![POLICY](images/en04network.png){.thumbnail}

La stratégie est maintenant dans la liste et est active.<br>
En cas d'alerte et/ou d'actions en attente, vous pouvez cliquer sur le nombre dans les colonnes `En attente d'approbation` ou `Adresses IP en conflit`.

![DONE](images/en05done.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
