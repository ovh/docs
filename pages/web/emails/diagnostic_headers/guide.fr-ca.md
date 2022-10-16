---
title: "Récupérer l'en-tête d'un e-mail"
slug: recuperation-des-entetes-e-mails
legacy_guide_number: 1365
excerpt: 'Découvrez comment récupérer un en-tête e-mail sur votre client de messagerie'
section: Diagnostic
order: 03
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>


**Dernière mise à jour le 19/11/2021**

## Objectif

Un en-tête e-mail a pour rôle de retracer le chemin emprunté par cet e-mail sur le réseau, de l'expéditeur au destinataire.<br> 
Il permet notamment d'identifier un e-mail malveillant ou de détecter une lenteur de réception.

Chaque e-mail reçu possède un en-tête (*header*) qui ne s'affiche pas par défaut lorsque vous consultez votre e-mail. Vous pouvez toutefois le récupérer sur votre client de messagerie ou votre webmail.

Vous pouvez également extraire l'e-mail dans son intégralité sous forme de fichier `.eml`. Ce fichier peut vous être demandé pour analyser un e-mail malveillant que vous avez reçu.<br>
Pour récupérer un fichier `.eml`, consultez notre rubrique [Webmail](#webmail)

**Découvrez comment récupérer un en-tête e-mail sur votre client de messagerie.**

## Prérequis

- Posséder une adresse e-mail sur une de nos [solutions e-mail OVHcloud](https://www.ovhcloud.com/fr-ca/emails/) ou une solution externe.
- Avoir accès à l'adresse e-mail via son webmail ou un logiciel de messagerie.

## En pratique

### Comprendre le contenu d'un en-tête

L'en-tête est composé de plusieurs éléments indiquant le cheminement de l'e-mail. Il est composé d'éléments hiérarchisés de façon antéchronologique, des plus récents jusqu'aux plus anciens, et d'informations supplémentaires.<br>
Vous trouverez ci-dessous une liste non-exhaustive des éléments pouvant composer un en-tête, ainsi que leur signification. 

- Le champ `Received` est présent dans l'en-tête à chaque passage de l'e-mail sur un serveur d'envoi (SMTP). On retrouve généralement le nom d'hôte du serveur avec son adresse IP et la date. Les champs `Received` sont classés du passage le plus récent au passage le plus ancien sur un serveur :
<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Ici l'e-mail a été transmis du serveur mxplan7.mail.ovh.net vers le serveur mo3005.mail-out.ovh.net le 30 juin 2021 à 13:12:40 (Fuseau horaire UTC)*

- Le champ `Return-Path` correspond à l'adresse de retour lorsque l'envoi du message a échoué. l'adresse de retour est généralement celle qui a réalisé l'envoi. 
<pre class="console"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- Le champ `From` désigne l'adresse de l'expéditeur de l'e-mail et son nom d'affichage.
<pre class="console"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- Le champ `To` désigne l'adresse du destinataire de l'e-mail et son nom d'affichage.
<pre class="console"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- Le champ `Subject` désigne l'objet de l'e-mail.
<pre class="console"><code>
Subject: Hello my friend
</code></pre>

- Le champ `Message-ID` désigne l'identifiant unique de l'e-mail et se termine par le nom du serveur d'envoi (après le "@"). 
<pre class="console"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- Le champ `Received-SPF` affiche le résultat du contrôle [SPF](https://docs.ovh.com/ca/fr/domains/le-champ-spf/) effectué sur le nom de domaine de l'expéditeur. L'argument `client-ip` permet notamment de relever l'adresse IP du serveur qui a servi à expédier l'e-mail. 
<pre class="console"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh 
</code></pre>

- Les champs `X-` sont des champs personnalisés, ils servent de compléments aux champs standards. Ils sont implémentés par les serveurs sur lesquels les e-mails transitent.
<pre class="console"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 
</code></pre>

### Récupérer un en-tête sur un logiciel de messagerie

#### Microsoft Outlook 

Pour lire l'en-tête, ouvrez l'e-mail de votre choix dans une fenêtre séparée en double-cliquant sur celui-ci dans la liste.

Dans la nouvelle fenêtre, cliquez sur `Fichier`{.action} en haut à droite.

![emails](images/outlook01.png){.thumbnail}

Sélectionnez ensuite `Informations`{.action} sur la gauche puis cliquez sur `Propriétés`{.action}.

![emails](images/outlook02.png){.thumbnail}

L'en-tête complet de l'e-mail apparaît dans le cadre inférieur. Vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

![emails](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

Pour afficher l'en-tête, sélectionnez l'e-mail de votre choix, puis appuyez simultanément sur les touches `Ctrl` \+ `U`.

![emails](images/thunderbird01.png){.thumbnail}

L'en-tête complet de l'e-mail apparaît dans une fenêtre séparée, vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

#### Mail de macOS

Pour afficher l'en-tête, sélectionnez l'e-mail de votre choix, puis rendez-vous sur `Présentation`{.action} dans la barre de menu supérieure, puis dans `Message`{.action} et cliquez sur `Tous les en-têtes`.

![emails](images/mailmac01.png){.thumbnail}

L'en-tête complet de l'e-mail apparaît dans une fenêtre séparée. Vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

### Récupérer un en-tête sur un webmail <a name="webmail"></a>

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Récupérer l'en-tête**

Sélectionnez l'e-mail dont vous souhaitez afficher l'en-tête. Cliquez **sur la flèche** à droite de `Répondre à tous`{.action} puis sur `Afficher les détails du message`{.action}. Une nouvelle fenêtre s'ouvre avec l'en-tête complet de l'e-mail, ce qui vous permet de le télécharger.

![emails](images/owa01.png){.thumbnail}

Consultez également notre tutoriel vidéo:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Récupérer le fichier .eml**

Pour télécharger le fichier `.eml`, cliquez sur `(+) Nouveau`{.action} pour créer un nouvel e-mail. 

Sélectionnez l'e-mail que vous souhaitez extraire puis glissez-le dans le contenu du nouveau message. 

Cliquez sur la flèche qui pointe vers le bas à côté de la pièce jointe que vous venez de générer, puis cliquez sur `Télécharger`{.action} pour enregistrer le fichier sur votre machine.

![emails](images/owa02.gif){.thumbnail}

### Récupérer un en-tête sur un autre client de messagerie

#### Gmail

Pour récupérer l'en-tête, sélectionnez l'e-mail concerné, puis cliquez sur les 3 points verticaux à droite, puis sur `Afficher la source du message`{.action}. Une nouvelle fenêtre s'ouvre avec l'en-tête complet de l'e-mail, ce qui vous permet également de le télécharger au format `.eml`.

![emails](images/gmail01.png){.thumbnail}

#### Outlook.com

Pour afficher l'en-tête dans l'interface webmail <Outlook.com>, consultez la rubrique [Outlook Web Application](#owa) de ce guide.

## Aller plus loin

[FAQ E-mail](https://docs.ovh.com/ca/fr/emails/faq-emails/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
