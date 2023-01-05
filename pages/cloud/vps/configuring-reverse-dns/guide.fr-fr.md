---
title: "Configurer le reverse DNS d'un VPS"
excerpt: Découvrez comment mettre en place la résolution reverse DNS
slug: configurer-le-reverse-dns-vps
routes:
    canonical: 'https://docs.ovh.com/fr/public-cloud/configurer-le-reverse-dns-dune-instance/'
section: "Réseau et IP"
order: 3
---

**Dernière mise à jour le 05/01/2023**

## Objectif

Le **Reverse DNS** est le complément de la résolution "classique" des DNS qui permet de convertir un nom de domaine en une adresse IP (enregistrement de type **A**). Grâce à une requête de ce type, une adresse IP peut être résolue en nom de domaine (enregistrement de type **PTR**). Ce qui signifie que les requêtes DNS sur l'adresse IP concernée renverront un nom de domaine.

Configurer la résolution **Reverse DNS** d'un VPS est particulièrement utile pour l’envoi d’e-mails. Le risque que vos messages soient rejetés par un système de protection contre le spam sera diminué si l'adresse IP de votre serveur d'envoi se résout correctement en votre nom de domaine.

**Découvrez comment configurer le reverse DNS pour la ou les adresses IP de votre VPS.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre compte OVHcloud
- Un nom de domaine avec son champ `A` pointant vers le VPS
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), accédez à la section `Bare Metal Cloud`{.action} et cliquez sur `IP`{.action} dans le menu de gauche.

Le menu déroulant sous « **Mes adresses IP publiques et services associés** » vous permet de filtrer vos services par catégorie.

![Reverse IP](images/selectservice2022.png){.thumbnail}

Cliquez sur `...`{.action} dans la ligne de l'adresse IP concernée et sélectionnez `Modifier le reverse`{.action}.

![Reverse DNS](images/reversecp01.png){.thumbnail}

Dans la nouvelle fenêtre, renseignez votre reverse et cliquez sur `Confirmer`{.action}.

![Reverse DNS](images/reversecp02.png){.thumbnail}

Vous pouvez également éditer le reverse directement via l'icône de la colonne **Reverse** du tableau.

> [!primary]
>
Si la modification ne fonctionne pas comme prévu, vérifiez que le champ `A` est bien configuré dans la zone DNS de votre nom de domaine. Attention, la modification de la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) peut prendre jusqu'à 24 heures si vous n'avez modifié que récemment le champ `A`.
>

## Aller plus loin <a name="gofurther"></a>

[Débuter avec un VPS](https://docs.ovh.com/fr/vps/debuter-avec-vps/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
