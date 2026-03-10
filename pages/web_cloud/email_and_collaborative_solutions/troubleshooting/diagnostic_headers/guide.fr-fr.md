---
title: "Récupérer l'en-tête et le fichier .eml d'un e-mail"
excerpt: "Découvrez comment récupérer l'en-tête d'un e-mail ou extraire un fichier .eml depuis votre client de messagerie, webmail ou application externe"
updated: 2026-03-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objectif

Un en-tête e-mail retrace le chemin emprunté par un e-mail sur le réseau, de l'expéditeur au destinataire.<br> 
Il permet d'identifier un e-mail malveillant ou de détecter une lenteur de réception.

Chaque e-mail reçu possède un en-tête (*header*) qui ne s'affiche pas par défaut lorsque vous consultez votre e-mail. Vous pouvez toutefois le récupérer sur votre client de messagerie ou votre webmail.

Vous pouvez également extraire l'e-mail sous forme de fichier `.eml`. Ce fichier peut vous être demandé pour analyser un e-mail malveillant que vous avez reçu.<br>
Pour récupérer un fichier `.eml`, consultez notre rubrique [webmail](#webmail).

**Découvrez comment récupérer un en-tête e-mail et extraire un fichier .eml depuis votre client de messagerie.**

## Prérequis

- Posséder une adresse e-mail sur une de nos [solutions e-mail OVHcloud](/links/web/emails) ou une solution externe.
- Avoir accès à l'adresse e-mail via son webmail ou un logiciel de messagerie.

## En pratique

### Comprendre le contenu d'un en-tête

L'en-tête est composé de plusieurs éléments indiquant le cheminement de l'e-mail, hiérarchisés de façon antéchronologique, ainsi que d'informations supplémentaires.<br>
Voici une liste non exhaustive des éléments composant un en-tête et leur signification. 

- Le champ `Received` est présent dans l'en-tête à chaque passage de l'e-mail sur un serveur d'envoi (SMTP). On retrouve généralement le nom d'hôte du serveur avec son adresse IP et la date. Les champs `Received` sont classés du passage le plus récent au passage le plus ancien sur un serveur :
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Ici l'e-mail a été transmis du serveur MX Plan7.mail.ovh.net vers le serveur mo3005.mail-out.ovh.net le 30 juin 2021 à 13:12:40 (Fuseau horaire UTC)*

- Le champ `Return-Path` correspond à l'adresse de retour lorsque l'envoi du message a échoué. L'adresse de retour est généralement celle de l'expéditeur. 
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- Le champ `From` désigne l'adresse de l'expéditeur de l'e-mail et son nom d'affichage.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- Le champ `To` désigne l'adresse du destinataire de l'e-mail et son nom d'affichage.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- Le champ `Subject` désigne l'objet de l'e-mail.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- Le champ `Message-ID` désigne l'identifiant unique de l'e-mail et se termine par le nom du serveur d'envoi (après le "@"). 
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- Le champ `Received-SPF` affiche le résultat du contrôle [SPF](/pages/web_cloud/domains/dns_zone_spf) effectué sur le nom de domaine de l'expéditeur. L'argument `client-ip` permet de relever l'adresse IP du serveur qui a servi à expédier l'e-mail. 
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh 
</code></pre>

- Les champs `X-` sont des champs personnalisés, ils servent de compléments aux champs standards. Ils sont implémentés par les serveurs sur lesquels les e-mails transitent.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 
</code></pre>

### Récupérer un en-tête sur un logiciel de messagerie

#### Microsoft Outlook

##### **Récupérer l’en-tête**

Il existe deux versions d’Outlook pour Windows : **Outlook classique** et le **nouvel Outlook**. Pour identifier votre version, tapez « Outlook » dans la barre de recherche Windows. Si la mention *« (classique) »* apparaît, vous utilisez Outlook classique. Dans le cas contraire, il s’agit du nouvel Outlook.

![Outlook Windows - identifier la version](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook classique :**

1. Double-cliquez sur l’e-mail pour l’ouvrir dans une fenêtre séparée.
2. Dans la nouvelle fenêtre, cliquez sur `Fichier`{.action} en haut à gauche.
3. Sélectionnez `Informations`{.action} sur la gauche puis cliquez sur `Propriétés`{.action}.
4. L’en-tête complet de l’e-mail apparaît dans le cadre inférieur. Sélectionnez l’ensemble du texte et copiez-le dans un fichier.

![En-tête complet affiché dans Outlook](images/classic-outlook-01.png){.thumbnail}

**Nouvel Outlook :**

1. Ouvrez l’e-mail de votre choix.
2. Faites un **clic droit** sur l'e-mail concerné.
3. Sélectionnez `Afficher`{.action} puis `Afficher les détails des messages`{.action}.
4. L’en-tête complet de l’e-mail apparaît dans le volet de détails du message. Sélectionnez l’ensemble du texte et copiez-le dans un fichier.

![En-tête complet affiché dans Outlook](images/new-outlook-01.png){.thumbnail}

##### **Récupérer le fichier .eml**

**Outlook classique :**

1. Sélectionnez l’e-mail dans votre boîte de réception (ne l’ouvrez pas).
2. Cliquez sur `Fichier`{.action} dans la barre de menu.
3. Cliquez sur `Enregistrer sous`{.action}.
4. Dans le menu déroulant « Type de fichier », sélectionnez **Format de message Outlook - Unicode (.msg)**. Choisissez un emplacement sur votre ordinateur (par exemple le Bureau) et cliquez sur `Enregistrer`{.action}.

Vous pouvez également **glisser-déposer** l’e-mail depuis votre boîte de réception directement sur votre Bureau. Cela crée un fichier `.msg` que vous pouvez joindre à votre signalement.

![Enregistrer msg dans Outlook](images/classic-outlook-02.png){.thumbnail}

**Nouvel Outlook :**

1. Dans la liste des messages, faites un **clic droit** sur l’e-mail.
2. Sélectionnez `Enregistrer sous`{.action}, puis choisissez `Enregistrer en tant que fichier EML`{.action}.
3. Choisissez un emplacement sur votre ordinateur et cliquez sur `Enregistrer`{.action}.

![Enregistrer un fichier EML dans le nouvel Outlook](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail de votre choix.
2. Appuyez simultanément sur les touches `Ctrl` \+ `U` (`Cmd` \+ `U` sur macOS).
3. L'en-tête complet de l'e-mail apparaît dans une fenêtre séparée. Sélectionnez l'ensemble du texte et copiez-le dans un fichier.

![En-tête complet affiché dans Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **Récupérer le fichier .eml**

1. Sélectionnez l'e-mail de votre choix.
2. Appuyez simultanément sur les touches `Ctrl` \+ `S` (`Cmd` \+ `S` sur macOS).
3. Le fichier est enregistré par défaut au format `.eml`.

#### Mail de macOS

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail de votre choix.
2. Appuyez simultanément sur les touches `Cmd` \+ `Shift` \+ `H`.
3. L'en-tête complet de l'e-mail apparaît. Sélectionnez le texte en gris et copiez-le dans un fichier.

![En-tête complet affiché dans Mail de macOS](images/mailmacos-01.png){.thumbnail}

##### **Récupérer le fichier .eml**

1. Sélectionnez l'e-mail de votre choix.
2. Appuyez simultanément sur les touches `Cmd` \+ `S`. Le fichier `.eml` est automatiquement créé. Sélectionnez le format `Source du message brut`.
3. Choisissez un emplacement sur votre ordinateur et cliquez sur `Enregistrer`{.action}.

![Enregistrer un eml depuis Mail de macOS](images/mailmacos-02.png){.thumbnail}

### Récupérer un en-tête sur un webmail <a name="webmail"></a>

#### Roundcube

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail de votre choix.
2. Cliquez sur le bouton `... Plus`{.action} puis sur `< > Voir la source`{.action}.
3. Une nouvelle fenêtre s'ouvre avec l'en-tête complet de l'e-mail. Sélectionnez l'ensemble du texte et copiez-le dans un fichier.

![Voir la source dans Roundcube](images/roundcube01.png){.thumbnail}

##### **Récupérer le fichier .eml**

1. Sélectionnez l'e-mail de votre choix.
2. Cliquez sur le bouton `... Plus`{.action} puis sur `Télécharger (.eml)`{.action}.

![Télécharger le fichier eml dans Roundcube](images/roundcube02.png){.thumbnail}

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail dont vous souhaitez afficher l'en-tête.
2. Cliquez **sur la flèche** à droite de `Répondre à tous`{.action} puis sur `Afficher les détails du message`{.action}.
3. Une nouvelle fenêtre s'ouvre avec l'en-tête complet de l'e-mail, ce qui vous permet de le télécharger.

![Détails du message dans OWA](images/owa01.png){.thumbnail}

Consultez également notre tutoriel vidéo :

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Récupérer le fichier .eml**

1. Cliquez sur `(+) Nouveau`{.action} pour créer un nouvel e-mail.
2. Sélectionnez l'e-mail que vous souhaitez extraire puis glissez-le dans le contenu du nouveau message.
3. Cliquez sur la flèche vers le bas à côté de la pièce jointe générée, puis cliquez sur `Télécharger`{.action} pour enregistrer le fichier sur votre machine.

![Extraire un fichier eml depuis OWA](images/owa02.gif){.thumbnail}

#### Zimbra

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail de votre choix.
2. Cliquez sur `Plus`{.action} dans la barre d'actions et sélectionnez `Afficher l'original`{.action}.
3. Une nouvelle fenêtre s'ouvre avec l'en-tête complet et le contenu brut de l'e-mail.

![Détails du message dans Zimbra](images/zimbra-01.png){.thumbnail}

##### **Récupérer le fichier .eml**

1. Sélectionnez l'e-mail de votre choix.
2. Cliquez sur `Plus`{.action} dans la barre d'actions et sélectionnez `Afficher l'original`{.action}.
3. Dans la fenêtre qui s'ouvre, utilisez le raccourci `Ctrl` \+ `S` (ou `Cmd` \+ `S` sur macOS) pour enregistrer la page en tant que fichier `.eml`.

### Récupérer un en-tête sur un autre client de messagerie

#### Gmail

##### **Récupérer l'en-tête**

1. Sélectionnez l'e-mail concerné.
2. Cliquez sur les 3 points verticaux à droite et sur `Afficher la source du message`{.action}.
3. Une nouvelle fenêtre s'ouvre avec l'en-tête complet de l'e-mail.

![Voir la source du message dans Gmail](images/gmail01.png){.thumbnail}

##### **Récupérer le fichier .eml**

1. Sélectionnez l'e-mail concerné.
2. Cliquez sur les 3 points verticaux à droite et sélectionnez `Télécharger le message`{.action}.

#### Outlook.com

Pour récupérer l'en-tête ou extraire le fichier `.eml` depuis l'interface webmail &#60;Outlook.com&#62;, consultez la rubrique [Outlook Web App](#owa) de ce guide.

## Aller plus loin

[FAQ E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Échangez avec notre [communauté d'utilisateurs](/links/community).
