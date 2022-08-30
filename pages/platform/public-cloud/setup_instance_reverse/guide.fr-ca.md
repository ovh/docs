---
title: "Configurer le reverse DNS d'une instance Public Cloud"
excerpt: Découvrez comment mettre en place la résolution reverse DNS
slug: configurer-le-reverse-dns-dune-instance
legacy_guide_number: 1940
section: "Gestion depuis l'espace client"
order: 6
---

**Dernière mise à jour le 12/11/2021**

## Objectif

Le **Reverse DNS** est le complément de la résolution "classique" des DNS qui permet de convertir un nom de domaine en une adresse IP (enregistrement de type **A**). Grâce à une requête de ce type, une adresse IP peut être résolue en nom de domaine (enregistrement de type **PTR**). Ce qui signifie que les requêtes DNS sur l'adresse IP concernée renverront un nom de domaine.

Configurer la résolution **Reverse DNS** d’une instance est particulièrement utile pour l’envoi d’e-mails. Le risque que vos messages soient rejetés par un système de protection contre le spam sera diminué si l'adresse IP de votre serveur d'envoi se résout correctement en votre nom de domaine.

**Découvrez comment configurer le reverse DNS pour la ou les adresses IP de votre instance Public Cloud.**

## Prérequis

- Avoir une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud.
- Un nom de domaine avec son champ `A` pointant vers l'instance
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), accédez à la section `Bare Metal Cloud`{.action} et cliquez sur `IP`{.action} dans le menu de gauche.

Le tableau de cette page répertorie vos services éligibles. Vous pouvez filtrer l'ID de votre projet Public Cloud à l'aide du menu déroulant **Service**.

![Reverse DNS](images/reversecp01.png){.thumbnail}

Cliquez sur `...`{.action} dans la ligne de l'adresse IP concernée et sélectionnez `Modifier le reverse`{.action}.

![Reverse DNS](images/reversecp02.png){.thumbnail}

Dans la nouvelle fenêtre, renseignez votre reverse et cliquez sur `Confirmer`{.action}.

Vous pouvez également éditer le reverse directement via l'icône de la colonne **Reverse** du tableau.

> [!primary]
>
Si la modification ne fonctionne pas comme prévu, vérifiez que le champ `A` est bien configuré dans la zone DNS de votre nom de domaine. Attention, la modification de la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) peut prendre jusqu'à 24 heures si vous n'avez modifié que récemment le champ `A`.
>

## Aller plus loin <a name="gofurther"></a>

[Créer une première instance Public Cloud et s’y connecter](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
