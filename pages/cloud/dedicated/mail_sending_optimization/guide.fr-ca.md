---
title: Optimiser l'envoi d'e-mails
excerpt: Découvrez comment envoyer des e-mails en limitant le risque de spam
slug: optimiser-envoi-emails
section: Utilisation avancée
---

**Dernière mise à jour le 20/12/2017**

## Objectif

Les politiques anti-spam sont de plus en plus strictes. Afin de fluidifier vos envois d'e-mails et que vos destinataires les reçoivent sans blocage des outils de sécurité, des paramétrages sont nécessaires pour authentifier vos messages et valider leur contenu.

**Ce guide vous donne quelques conseils pour optimiser l'envoi de vos e-mails.**

> [!warning]
>
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d'en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux dans ces tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur.
>

## Prérequis

- Avoir un serveur e-mail déjà configuré

## En pratique

### Configurer le champ SPF

Dans le cas d'une infrastructure dédiée (serveur dédié, VPS, instance Public ou Private Cloud), le champ SPF optimal se présente sous la forme « v=spf1 ip4:ipv4_du_serveur ~all ».

> [!primary]
>
> Le symbole devant le *all* a une grande importance :
>
> `+` : accepter
> `-` : ne pas accepter
> `~ ` : échec doux (*softfail*)
> `?` : neutre
>

Pour plus d'informations sur la syntaxe du champ SPF, référez-vous au lien suivant : <http://www.openspf.org/SPF_Record_Syntax>.

Vous pouvez bien entendu aller plus loin, en configurant le champ SPF d'un domaine bien spécifique ou en spécifiant une IPv6. Vous trouverez des explications dans notre guide spécifique sur [le champ SPF](https://docs.ovh.com/fr/emails/le-champ-spf/).

### Configurer le champ DKIM

La configuration d'un champ DKIM (DomainKeys Identified Mail) apporte une protection supplémentaire pour éviter le blocage de vos e-mails en spam. De manière simplifiée, le DKIM est une signature permettant d'authentifier le domaine expéditeur.

Cette authentification s'effectue par une clef DKIM à ajouter dans votre zone DNS. Vous trouverez différents générateurs de clefs DKIM, dont : <http://dkimcore.org/tools/keys.html>. N'hésitez pas à bien suivre les indications fournies sur le site de génération que vous choisirez.

### Configurer le *reverse IP*

Toujours dans le but d'optimiser l'envoi et d'éviter le blocage de vos e-mails, un *reverse IP* doit être configuré avec votre nom de domaine.

Pour modifier votre *reverse IP* dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, allez dans la partie `Dédié`{.action} puis `IP`{.action}. Choisissez ensuite une IPv4, cliquez sur l'engrenage à droite puis sur `Modifier le reverse`{.action} :

![Reverse IP](images/reverse_ip.png)

Vous pourrez y ajouter votre nom de domaine comme *reverse*.

### Vérifier vos informations

Il peut être intéressant d'utiliser un site comme [Mail Tester](http://www.mail-tester.com/) pour vérifier que tous vos paramétrages sont corrects.

### Cas spécifiques d'envois d'e-mails

#### Vers un serveur Microsoft (Outlook...)
 
Microsoft pratique une politique de liste blanche : à l'origine, tout est sur liste noire et une procédure spécifique est nécessaire pour faire valider votre serveur e-mail.

Reportez-vous pour cela à la procédure suivante : <https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656>

#### Vers Gmail

L'ajout de champs spécifiques, comme DMARC, peut faciliter la réception des e-mails si votre destinataire est chez Gmail. Voici un article de Google qui peut vous aider dans cette démarche : [Ajout d'un champ DMARC](https://support.google.com/a/answer/2466563?hl=fr).



## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.