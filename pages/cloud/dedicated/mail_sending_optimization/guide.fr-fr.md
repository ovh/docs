---
title: Optimiser l'envoi d'e-mails
excerpt: Découvrez comment envoyer des e-mails en limitant le risque de spam
slug: optimiser-envoi-emails
section: Utilisation avancée
---

**Dernière mise à jour le 20/12/2022**

## Objectif

Les politiques anti-spam sont de plus en plus strictes. Afin de fluidifier vos envois d'e-mails et que vos destinataires les reçoivent sans blocage des outils de sécurité, des paramétrages sont nécessaires pour authentifier vos messages et valider leur contenu.

**Ce guide vous donne quelques conseils pour optimiser l'envoi de vos e-mails.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d'en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux dans ces tâches courantes.
>
> Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Avoir un serveur e-mail déjà configuré

> [!warning]
>
> L'objectif de ce guide est de vous fournir quelques astuces pour optimiser l'envoi de vos e-mails. Prenez en considération que chaque service de messagerie a ses propres directives et bonnes pratiques pour garantir la réception des e-mails par les destinataires. Nous vous recommandons vivement de les consulter.
>


## En pratique

### Configurer le champ SPF <a name="spfrecord"></a>

Dans le cas d'une infrastructure dédiée (serveur dédié, VPS, instance Public Cloud ou Hosted Private Cloud), le champ SPF optimal se présente sous la forme :  `v=spf1 ip4:ipv4_du_serveur ~all`.

> [!primary]
>
> Le symbole devant le *all* a une grande importance :
>
> - `+` : accepter
> - `-` : ne pas accepter
> - `~` : échec doux (*soft fail*)
> - `?` : neutre
>

Pour plus d'informations sur la syntaxe du champ SPF, référez-vous au lien suivant : <http://www.open-spf.org/>.

Vous pouvez bien entendu aller plus loin, en configurant le champ SPF d'un domaine bien spécifique ou en spécifiant une IPv6. Pour savoir comment procéder, consultez notre guide sur comment [configurer un enregistrement SPF](https://docs.ovh.com/fr/domains/le-champ-spf/).

### Configurer le champ DKIM

La configuration d'un champ DKIM (DomainKeys Identified Mail) apporte une protection supplémentaire pour éviter que vos e-mails ne soient marqués comme spam. De manière simplifiée, le DKIM est une signature permettant d'authentifier le domaine expéditeur.

Cette authentification s'effectue par une clef DKIM à ajouter dans votre zone DNS. Vous trouverez différents générateurs de clefs DKIM, dont <http://dkimcore.org/tools/keys.html>. Veillez à bien suivre les indications fournies sur le site du générateur de votre choix.

### Configurer le *reverse IP* <a name="reverseip"></a>

Toujours dans le but d'optimiser l'envoi et de réduire les risques de blocage de vos e-mails, un *reverse IP* doit être configuré avec votre nom de domaine.

Vous devez tout d'abord créer un enregistrement A dans la zone DNS de votre domaine avec l'adresse IP de votre serveur comme cible.

Si vos serveurs DNS sont gérés par OVHcloud, veuillez consulter ce [guide](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/#acceder-a-la-gestion-dune-zone-dns-ovhcloud).

Une fois la zone DNS de votre nom de domaine modifiée, un temps de propagation de 24 heures maximum est nécessaire afin que les modifications soient effectives.

Une fois cela fait, ajoutez l'enregistrement PTR (également connu sous le nom de *reverse*) :

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, rendez-vous dans l'onglet `Bare Metal Cloud`{.action}, puis cliquez sur la section `IP`{.action}. 

Si vous souhaitez configurer le reverse DNS sur une Additional IP, cliquez sur l'onglet `Additional IP`{.action}.

Le menu déroulant sous **"Mes adresses IP publiques et services associés"** vous permet de filtrer vos services par catégories.

![Reverse IP](images/selectservice2022.png){.thumbnail}

Ensuite, cliquez sur le bouton `...`{.action} à droite de la ligne correspondante puis sur `Modifier le reverse`{.action} :

![Reverse IP](images/addreverse2022.png){.thumbnail}

Entrez votre nom de domaine dans la section `Reverse DNS` et cliquez sur `Valider`{.action}.

![Reverse IP](images/enterreverse.png){.thumbnail}

> [!primary]
> Lorsque vous entrez votre nom de domaine dans le *reverse*, il vérifie immédiatement si l'enregistrement A renvoie à la même IP. Ceci est utilisé dans les procédures anti-spam, donc votre enregistrement A doit être valide et propagé. Il y a certaines règles à suivre lors de la saisie du *reverse* :
>
>  - le *reverse* ne peut pas commencer par un `-`
>  - le *reverse* ne peut pas comporter plus de 80 caractères
>  - le *reverse* ne peut pas contenir de caractères majuscules
>  - le *reverse* doit se terminer par un `.`
>
> Exemple : « MyDomain.ca » dans le champ *reverse* serait **mydomain.ca.**
>

### Cas spécifiques d'envois d'e-mails

#### Vers un serveur Microsoft (Outlook, etc...)
 
Microsoft utilise une politique de liste blanche. Cela signifie qu'initialement tout serveur se trouve sur une liste noire et une procédure spécifique est nécessaire pour faire valider votre serveur e-mail.

Avant de commencer la procédure de whitelist de votre IP, assurez-vous d'avoir bien configuré un [reverse](#reverseip) sur votre IP (et non pas le reverse par défaut d'OVHcloud).

Microsoft vérifie également le champ SPF, il est donc recommandé d'en [configurer un](#spfrecord).

Vous devez ensuite signer les contrats SNDS (Smart Network Data Services) et JMRP (Junk Mail Reporting Partner Program).

Pour souscrire gratuitement au programme, il suffit de créer un compte JMRP/SNDS à l'adresse suivante :
<https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Une fois le compte activé, vous devez compléter le formulaire suivant :

- **Company name** : (nom de votre entreprise)
- **Contact email address** : (une adresse e-mail valide où Microsoft peut vous contacter)
- **Complaint feedback email address** : (une adresse e-mail valide où vous pourrez recevoir les plaintes pour spam, les **best practices** veulent que l'adresse e-mail soit sous la forme : **abuse@mondomaine.com**.)

Ajoutez ensuite vos adresses IP dans la section `IP address or range`.

En cliquant sur `Add new Network`, il vous sera demandé de définir une adresse e-mail de contact valide. Renseignez alors l'adresse du type **abuse@mondomaine.com** destinée à recevoir les plaintes pour spam.

Une fois les informations renseignées, cliquez sur `Begin Setup` pour transmettre la demande. Microsoft enverra alors un e-mail intitulé `SNDS-JMRP Contract`, puis un second e-mail à **mondomaine.com**.

Confirmez les informations et la souscription à JMRP/SNDS sera terminée.

Une fois ces actions effectuées, si votre IP apparaît comme bloquée, vous pourrez alors demander à la débloquer via la [procédure junkmail](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062). La procédure prend généralement 48 heures.

Microsoft peut parfois vous demander la date de la première facturation de votre IP/serveur. Dans ce cas de figure, envoyez à Microsoft une copie de votre facture et mentionnez votre IP/serveur (ex : host nsXXX) dans votre réponse.

Pour plus d'informations, veuillez ouvrir une [demande d'assistance](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656) auprès de Microsoft.

> [!warning]
>
> **Refus de Microsoft**
>
> Il est possible que Microsoft refuse de débloquer votre ou vos adresse(s) IP, auquel cas OVHcloud ne pourra pas intervenir. Il est important de respecter les bonnes pratiques de Microsoft.
>

#### Vers un serveur Gmail

L'ajout d'enregistrements spécifiques (par exemple, un enregistrement DMARC) peut faciliter la réception des e-mails si votre destinataire est chez Gmail. Voici un article de Google qui peut vous aider dans cette démarche : [Ajout d'un champ DMARC](https://support.google.com/a/answer/2466563?hl=fr){.external}.

Google propose également un [article dédié à la prévention du spam](https://support.google.com/mail/answer/81126?hl=en){.external} pour les utilisateurs de Gmail.

### Vérifier vos informations

Il peut être intéressant d'utiliser un site comme [Mail Tester](http://www.mail-tester.com/) afin de vérifier que tous vos paramétrages sont corrects.

## Aller plus loin

Pour être accompagné sur la mise en place de vos solutions OVHcloud, contactez notre [réseau de partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
