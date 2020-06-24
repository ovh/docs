---
title: Ajouter un champ MX à la configuration de son nom de domaine
slug: mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh
excerpt: Apprenez à ajouter un champ MX à votre nom de domaine chez OVHcloud
section: DNS et zone DNS
order: 4
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Le champ MX permet de relier un nom de domaine à un serveur e-mail. Ceci permettra aux serveurs envoyant des e-mails vers vos adresses de savoir où ils doivent transférer ces derniers. Il est probable que votre fournisseur dispose de plusieurs serveurs e-mail. Plusieurs champs MX doivent par conséquent être créés.

**Apprenez à ajouter un champ MX à la configuration de votre nom de domaine chez OVHcloud.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Le nom de domaine concerné doit utiliser la configuration OVHcloud (c'est à dire les serveurs DNS d'OVHcloud).

> [!warning]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification des champs MX depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
>
> - Si votre nom de domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration OVHcloud dans votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external} depuis l'onglet `Serveurs DNS`{.action}, une fois positionné sur le domaine concerné.
>

## En pratique

### Étape 1 : comprendre quelques notions de base du champ MX

Un champ MX relie votre nom de domaine au serveur de votre prestataire e-mail, comme OVHcloud par exemple. Lorsque l’un de vos correspondants vous envoie un e-mail, le serveur effectuant l'envoi sait vers quel serveur il doit l'acheminer grâce au champ MX.

Parce qu'il est possible de paramétrer plusieurs champs MX pour un même nom de domaine, il est nécessaire de définir une priorité pour chacun d'entre eux. Cela permet aux serveurs qui vous envoient des e-mails de savoir vers quel serveur ils doivent en priorité les acheminer. Vous ne pouvez cependant ajouter que des champ MX appartenant au même prestataire.

De manière générale, **changer les champs MX de son nom de domaine est une manipulation délicate** : réaliser un changement inopportun peut rendre impossible la réception de nouveaux messages sur vos adresses e-mail. Nous vous invitons donc vivement à être vigilant lors de la réalisation de cette manipulation.

### Étape 2 : connaître la configuration MX d'OVHcloud

Retrouvez ci-dessous la configuration MX d'OVHcloud à utiliser pour nos solutions MX Plan (seule ou incluse dans une offre d’[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}, [E-mail Pro](https://www.ovh.com/ca/fr/emails/email-pro/){.external} et [Exchange](https://www.ovh.com/ca/fr/emails/){.external}. Nos serveurs e-mail disposent d'un antispam et d'un antivirus.

|Domaine|TTL|Type d'enregistrement|Priorité|Cible|
|---|---|---|---|---|
|*laisser vide*|3600|MX|1|mx0.mail.ovh.net.|
|*laisser vide*|3600|MX|5|mx1.mail.ovh.net.|
|*laisser vide*|3600|MX|50|mx2.mail.ovh.net.|
|*laisser vide*|3600|MX|100|mx3.mail.ovh.net.|

Vous devez à présent utiliser ces différents champs MX dans la configuration DNS de votre nom de domaine. L'étape suivante vous permet d'effectuer cette manipulation dans la configuration DNS OVHcloud de votre nom de domaine.

### Étape 3 : modifier la configuration d'un champ MX OVHcloud

Pour modifier les champs MX dans la configuration OVHcloud de votre nom de domaine, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Dans la barre de services à gauche, rendez-vous dans la section `Domaines`{.action}, cliquez sur le domaine concerné, puis rendez-vous dans l'onglet `Zone DNS`{.action}.

Le tableau affiche la configuration OVHcloud de votre nom de domaine. Chaque ligne correspond à un enregistrement DNS. Nous vous invitons à vérifier dans un premier temps si des enregistrements MX existent déjà dans la configuration DNS OVHcloud de votre nom de domaine en vous aidant du champ de filtrage.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Si des champs MX existent déjà et que vous souhaitez les remplacer, cliquez sur le pictogramme en forme de roue dentée à droite de chaque ligne du tableau concernée, puis cliquez sur `Supprimer l'entrée`{.action}. Assurez-vous néanmoins de ne pas laisser votre nom de domaine sans aucun enregistrement MX lorsque vous ajoutez les entrées MX souhaitées.

Pour cela, cliquez sur le bouton `Ajouter une entrée`{.action}, puis choisissez `MX`{.action}. Remplissez les informations demandées en fonction de la solution e-mail choisie :

- **si vous disposez d'une solution e-mail OVHcloud** : reportez-vous aux informations données à l'[étape 2 : « connaître la configuration MX OVHcloud »](../#etape-2-connaitre-la-configuration-mx-dovh){.external} ;

- **si vous disposez d'une autre solution e-mail** : reportez-vous aux informations communiquées par votre fournisseur de service e-mail.

Une fois les informations complétées, finalisez les étapes, puis cliquez sur `Valider`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

## Aller plus loin

[Généralités sur les serveurs DNS](../generalites-serveurs-dns/){.external}

[Éditer une zone DNS OVHcloud](../editer-ma-zone-dns/){.external}

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
