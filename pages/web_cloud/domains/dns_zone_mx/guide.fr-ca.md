---
title: "Configurer un enregistrement MX pour la gestion des emails"
excerpt: "Découvrez comment configurer un enregistrement MX sur votre nom de domaine chez OVHcloud"
updated: 2024-02-29
---

## Objectif

L'enregistrement MX permet de relier un nom de domaine au serveur de sa plateforme e-mail. Il est indispensable pour que le service e-mail de l'expéditeur puisse atteindre celui du destinataire.

**Découvrez comment configurer un enregistrement MX pour votre nom de domaine chez OVHcloud.**

## Prérequis

- Disposer d'un accès à la gestion de la zone DNS du nom de domaine concerné depuis l'[espace client OVHcloud](/links/manager).
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Le nom de domaine concerné doit utiliser la configuration OVHcloud (c'est à dire les serveurs DNS d'OVHcloud).
- Disposer d'une offre MX Plan (incluse dans l'offre d’[hébergement web](/links/web/hosting)), [Exchange](/links/web/emails), ou un service e-mail externe.

> [!primary]
>
> - Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification des enregistrements MX depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
>
> - Si votre nom de domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration OVHcloud dans votre [espace client](/links/manager). Une fois positionné sur le domaine concerné, depuis l'onglet `informations générales`{.action}, dans la partie `Serveurs DNS`{.action}, si la mention `Actif` est présente sous « **serveurs DNS** », vous utilisez bien les serveurs DNS OVHcloud.
>
> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/dns-servers-enabled.png){.thumbnail}

## En pratique

### Comprendre le rôle des enregistrements MX 

Les enregistrements MX (**M**ail e**X**change) permettent de relier votre nom de domaine aux serveurs e-mail de réception attachés à votre service e-mail. Nous allons nous appuyer sur un exemple.

Lorsque l'adresse **sender@otherdomain.ovh** envoie un e-mail vers **contact@mydomain.ovh**, le serveur d'envoi e-mail (**Outgoing mail server**) va :
- **(1)** interroger la zone DNS du nom de domaine **mydomain.ovh** et lire les enregistrements **MX**.
- **(2)** transmettre l'e-mail vers l'URL de l'enregistrement **MX** lu.

![email](/pages/assets/schemas/emails/mx-dns-resolution-apac-ca.png){.thumbnail}

L'e-mail sera envoyé vers la cible **mx0.mail.ovh.ca** qui est précédée de la valeur **0**. Cette valeur est appelée priorité. La plus faible valeur est interrogée en premier et la plus élevée en dernier. Cela signifie que la présence de plusieurs enregistrements permet de pallier une absence de réponse de l'enregistrement MX ayant la plus faible priorité.

Vous pouvez paramétrer plusieurs enregistrements MX pour un même nom de domaine. Il est alors nécessaire de définir un numéro de priorité pour chacun d'entre eux. Les enregistrements MX sont interrogés par ordre croissant, du numéro le plus faible au plus élevé, jusqu'à obtenir une réponse du serveur de réception.

> [!warning]
>
> De manière générale, **modifier les enregistrements MX dans la zone DNS de son nom de domaine est une manipulation délicate** : réaliser une mauvaise manipulation peut rendre impossible la réception des e-mails sur vos adresses. Nous vous invitons à être vigilant lors de la réalisation de cette manipulation.
> En cas de doute, nous vous conseillons de faire appel à un [prestataire spécialisé](/links/partner).

### Valeurs de la configuration MX OVHcloud <a name="mxovhcloud"></a>

Retrouvez ci-dessous la configuration MX OVHcloud à utiliser pour nos solutions MX Plan ( incluse dans une offre d’[hébergement web OVHcloud](/links/web/hosting)) et [Exchange](/links/web/emails). Nos serveurs e-mail disposent d'un antispam et d'un antivirus intégré.

|Domaine|TTL|Type d'enregistrement|Priorité|Cible|
|---|---|---|---|---|
|*laisser vide*|3600|MX|1|mx0.mail.ovh.ca.|
|*laisser vide*|3600|MX|5|mx1.mail.ovh.ca.|
|*laisser vide*|3600|MX|50|mx2.mail.ovh.ca.|
|*laisser vide*|3600|MX|100|mx3.mail.ovh.ca.|
|*laisser vide*|3600|MX|200|mx4.mail.ovh.ca.|

Ces enregistrements MX doivent être configurés dans la zone DNS de votre nom de domaine.

### Configurer un enregistrement MX dans une zone DNS OVHcloud

Pour créer ou modifier les enregistrements MX dans la configuration OVHcloud de votre nom de domaine, connectez-vous à votre [espace client OVHcloud](/links/manager). Rendez-vous dans la section `Noms de domaine`{.action}, cliquez sur le domaine concerné puis rendez-vous dans l'onglet `Zone DNS`{.action}.

Le tableau affiche la configuration OVHcloud de votre nom de domaine. Chaque ligne correspond à un enregistrement DNS.

Dans un premier temps, nous vous invitons à vérifier si des enregistrements MX existent déjà dans la configuration DNS OVHcloud de votre nom de domaine, en vous aidant de la liste de filtrages située au dessus du tableau de votre zone DNS.<br>
Sélectionnez le type **MX** puis validez pour n'afficher que les entrées DNS MX de votre zone DNS. Aidez-vous de la capture d'écran ci-dessous.

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail}

- Si des enregistrements MX existent déjà et que vous souhaitez les modifier, cliquez sur le bouton `...`{.action} à droite de chaque ligne du tableau concernée puis cliquez sur `Modifier l'entrée`{.action}.
- Si aucun enregistrement MX n'est présent, cliquez sur le bouton `Ajouter une entrée`{.action} à droite du tableau puis choisissez `MX`{.action}. Complétez les informations demandées en fonction de la solution e-mail choisie :

**Si vous disposez d'une solution e-mail OVHcloud**, reportez-vous aux informations données à l'étape « [Connaître la configuration MX d'OVHcloud ](#mxovhcloud) ».

![dnsmxrecord](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail}

Une fois les informations complétées, finalisez les étapes puis cliquez sur `Valider`{.action}.

**Si vous disposez d'une autre solution e-mail**, reportez-vous aux informations communiquées par votre fournisseur de service e-mail.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

## Aller plus loin

[Généralités sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf)

[Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).