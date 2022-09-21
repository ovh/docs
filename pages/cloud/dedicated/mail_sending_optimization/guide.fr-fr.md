---
title: Optimiser l'envoi d'e-mails
excerpt: Découvrez comment envoyer des e-mails en limitant le risque de spam
slug: optimiser-envoi-emails
section: Utilisation avancée
---

**Dernière mise à jour le 07/09/2022**

## Objectif

Les politiques anti-spam sont de plus en plus strictes. Afin de fluidifier vos envois d'e-mails et que vos destinataires les reçoivent sans blocage des outils de sécurité, des paramétrages sont nécessaires pour authentifier vos messages et valider leur contenu.

**Ce guide vous donne quelques conseils pour optimiser l'envoi de vos e-mails.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d'en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux dans ces tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Avoir un serveur e-mail déjà configuré

## En pratique

### Configurer le champ SPF

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

Dans le menu déroulant **Service**, sélectionnez un service avec une adresse IPv4 :

![Reverse IP](images/servicedropmenu.png)

Cliquez sur le bouton `...`{.action} à droite de la ligne correspondante puis sur `Modifier le reverse`{.action} :

![Reverse IP](images/setreversedns.png)

Entrez votre nom de domaine dans la section `Reverse DNS` et cliquez sur `Valider`{.action}.

![Reverse IP](images/enterreverse.png)

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
 
Microsoft utilise une politique de liste blanche. Cela signifie qu'au départ, tout serveur se trouve sur une liste noire et une procédure spécifique est nécessaire pour faire valider votre serveur e-mail.

Avant de commencer la procédure de Whitelist de votre IP, assurez-vous que vous un reverse[#reverseip] de configuré sur votre IP (pas le reverse par défaut d'OVHcloud)

Ensuite, il vous faut signer les contrats SNDS (Smart Network Data Services) et JMRP (Junk Mail Reporting Partner Program)

Pour souscrire gratuitement au programme, il suffit de créer un compte JMRP/SNDS à l'adresse suivante :
<https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Une fois le compte activé, vous devez renseigner le formulaire suivant :

**Company name** : (Nom de votre compagnie)

**Contact email address** : (Un courriel valide où Microsoft peut vous contacter)

**Complaint feedback email address** : (Un courriel valide où vous allez recevoir les plaintes de spam)

Puis ajouter vos adresses IP dans la section `IP address or range`.

En cliquant sur `Add new Network`, il vous sera demandé de choisir un courriel de contact de son ISP pour autoriser la demande.

Les **bests practices** veulent que le mail soit sous la forme : **abuse@mondomaine.com**

Une fois les informations renseignées, il faut cliquer sur `Begin Setup` pour transmettre la demande. Microsoft va alors envoyer un courriel `SNDS-JMRP Contract`, puis un second courriel à **mondomaine.com**.

Une fois les confirmations approuvées, la souscription à JMRP/SNDS sera terminée.

Une fois ceci effectué et si l'IP apparaît comme bloquée, vous pourrez alors demander de délistage de ses IPs via la procédure junkmail : (généralement sous 48H)
https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062

Pour ce faire, veuillez ouvrir une [demande d'assistance](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656) auprès de Microsoft.

#### Vers un serveur Gmail

L'ajout d'enregistrements spécifiques (par exemple, un enregistrement DMARC) peut faciliter la réception des e-mails si votre destinataire est chez Gmail. Voici un article de Google qui peut vous aider dans cette démarche : [Ajout d'un champ DMARC](https://support.google.com/a/answer/2466563?hl=fr){.external}.

### Vérifier vos informations

Il peut être intéressant d'utiliser un site comme [Mail Tester](http://www.mail-tester.com/) afin de vérifier que tous vos paramétrages sont corrects.

## Aller plus loin

Pour être accompagné sur la mise en place de vos solutions OVHcloud, contactez notre [réseau de partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
