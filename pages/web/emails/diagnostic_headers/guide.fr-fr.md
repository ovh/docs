---
title: "Récupérer l'en-tête d'un e-mail"
slug: recuperation-des-entetes-e-mails
legacy_guide_number: 1365
excerpt: 'Découvrez comment récupérer un entête e-mail sur votre client de messagerie'
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

L'en-tête a pour rôle de retracer le chemin emprunté par votre e-mail sur le réseau, de l'expéditeur au destinataire. Il peut être utilie pour identifier un e-mail malveillant.

Chaque e-mail reçu possède un en-tête (*header*). Il ne s'affiche pas par défaut lorsque vous consultez votre e-mail, Il existe néanmoins un moyen de l'afficher sur votre client de messagerie. 

Il est également possible d'extraire l'e-mail dans son intégralité sous forme de fichier `.eml`. Ce fichier peut vous être demandé pour analyser un e-mail malveillant que vous avez reçu. Pour récupérer un fichier `.eml`, consultez notre rubrique [Webmail](#webmail)

**Découvrez comment récupérer un entête e-mail sur votre client de messagerie**

## Prérequis

- Posséder une adresse e-mail sur une de nos [Solutions E-mails OVHcloud](https://www.ovhcloud.com/fr/emails/) ou une solution externe.
- Avoir accès à l'adresse e-mail via son webmail ou un logiciel de messagerie.

## En pratique

### Comprendre le contenu d'un en-tête

L'en-tête d'un e-mail est composé de plusieurs éléments indiquant le cheminement de l'e-mail dans un ordre chronologique, ainsi que des informations supplémentaires. Vous trouvez ci-dessous une liste non exhaustive des éléments que vous pouvez trouver dans un en-tête ainsi que leur signification. 

- Le champ `Received` est présent dans l'entête à chaque passage de l'e-mail sur un serveur d'envoi (SMTP). On retrouve généralement le nom d'hôte du serveur avec son adresse IP et la date. Les champs `Received` sont classés du dernier passage au premier passage:

**Exemple de champ Received**
<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for <john@mydomain.ovh>; Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
 
</code></pre>

- Le champ `Return-Path` correspond à l'adresse de retour lors d'un échec à l'envoi. l'adresse de retour est généralement celle qui a réalisé l'envoi. 

<pre class="console"><code>
Return-Path: &ltjohn@mydomain.ovh&gt

</code></pre>

- Le champ `From` désigne l'adresse de l'expéditeur de l'e-mail et son nom d'affichage.
<pre class="console"><code>
From: John &ltjohn@mydomain.ovh&gt

</code></pre>

- Le champ `To` désigne l'adresse du destinataire de l'e-mail et son nom d'affichage.
<pre class="console"><code>
To: Robert &ltrobert@hisdomain.ovh&gt 

</code></pre>

- Le champ `Subject` désigne l'objet de l'e-mail.
<pre class="console"><code>
Subject: Hello my friend

</code></pre>

- Le champ `Message-ID` désigne l'identifiant unique de l'e-mail terminant par le nom d'hôte de l'expéditeur (après le "@"). 
<pre class="console"><code>
Message-ID: &ltDc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt

</code></pre>

- Le champ `Received-SPF` affiche le résultat du contrôle [SPF](https://docs.ovh.com/fr/domains/le-champ-spf/) effectué sur le nom de domaine de l'expéditeur. l'argument `client-ip` permet notament de relever l'adresse IP du serveur qui a servi à expédier l'e-mail. 
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

### Logiciel de messagerie

#### Microsoft Outlook 

Pour lire l'en-tête, ouvrez l'e-mail de votre choix dans une fenêtre séparée en double-cliquant sur celui-ci dans la liste.

Dans la nouvelle fenêtre, cliquez sur `Fichier`{.action} en haut à droite.

![emails](images/outlook01.png){.thumbnail}

Sélectionnez ensuite `Informations`{.action} sur la gauche puis cliquez sur `Propriétés`{.action}.

![emails](images/outlook02.png){.thumbnail}

L'entête complet de l'e-mail apparaît dans le cadre inférieur. Vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

![emails](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

Pour afficher l'en-tête, sélectionnez l'e-mail de votre choix, puis appuyez simultanément sur les touches `Ctrl`{.action} + `U`{.action}.

![emails](images/thunderbird01.png){.thumbnail}

L'entête complet de l'e-mail apparaît dans une fenêtre séparée, vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

#### Mail de Mac

Pour afficher l'en-tête, sélectionnez l'e-mail de votre choix, rendez-vous sur `Présentation`{.action} dans la barre de menu en haut, dans `Message`{.action} cliquez sur `Tous les en-têtes`.

![emails](images/mailmac01.png){.thumbnail}

L'entête complet de l'e-mail apparaît dans une fenêtre séparée, vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

### Webmail <a name="webmail"></a>

#### Roundcube

##### **Récupérer l'entête**

Pour afficher l'en-tête, sélectionnez l'e-mail de votre choix, cliquez sur le bouton  `... Plus`{.action} puis sur `< > Voir la source`{.action}.

![emails](images/roundcube01.png){.thumbnail}

Une nouvelle fenêtre s'ouvre avec l'entête complet de l'e-mail, vous pouvez sélectionner l'ensemble du texte et le copier dans un fichier.

##### **Récupérer le fichier .eml**

Pour télécharger le fichier `.eml`, sélectionnez l'e-mail de votre choix, cliquez sur le bouton  `... Plus`{.action} puis sur `Télécharger (.eml)`{.action}.

![emails](images/roundcube02.png){.thumbnail}

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Récupérer l'entête**

Pour afficher l'en-tête, sélectionnez l'e-mail que vous souhaitez. Cliquez **sur la flèche** à droite de `Répondre à tous`{.action} puis `Afficher les détails du message`{.action}.Une nouvelle fenêtre s'ouvre avec l'entête complet de l'e-mail, il vous offre la possibilité de le télécharger.

![emails](images/owa01.png){.thumbnail}

##### **Récupérer le fichier .eml**

Pour télécharger le fichier `.eml`, cliquez sur `(+) Nouveau`{.action} pour créer un nouvel e-mail. 

Sélectionnez l'e-mail que vous souhaitez extraire, puis glissez-le dans le contenu du nouvel e-mail. 

Cliquez sur la flèche qui pointe vers le bas à côté de la pièce jointe que vous venez de générer, puis cliquez sur `télécharger`{.action} pour enregistrer le fichier sur votre machine.

![emails](images/owa02.gif){.thumbnail}

### Autre client de messagerie

#### Gmail

Pour récupérer l'entête, sélectionnez l'e-mail concerné, puis cliquez sur le bouton `...`{.action} (verticaux) à droite, puis sur `Afficher la source du message`{.action}. Une nouvelle fenêtre s'ouvre avec l'entête complet de l'e-mail, il vous offre la possibilité de le télécharger l'e-mail au format `.eml` également.

![emails](images/gmail01.png){.thumbnail}

#### Outlook.com

Pour afficher l'en-tête de l'interface webmail utilisée sur Outlook.com, consulter notre rubrique [Outlook Web Application](#owa) pour le découvrir comment .

## Aller plus loin

[FAQ E-mail](https://docs.ovh.com/fr/emails/faq-emails/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
