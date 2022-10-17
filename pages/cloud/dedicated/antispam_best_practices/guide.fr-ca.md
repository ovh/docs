---
title : OVHcloud AntiSpam - Bonnes pratiques et déblocage d'une adresse IP
slug : antispam-best-practices
excerpt: Découvrez nos bonnes pratiques antispam et comment débloquer une adresse IP bloquée pour SPAM
section : Diagnostic et mode Rescue
order : 04
---

**Dernière mise à jour le 17/10/2022**

## Objectif

Pour chaque adresse IP disponible sur les produits et services OVHcloud, en tant que Fournisseur d'Accès à Internet, nous l'enregistrons et la réservons auprès d'organisations telles que [RIPE](https://www.ripe.net/) ou [ARIN](https://www.arin.net/). Dans ce cas, nous apparaissons comme le contact *abuse* de la propriété intellectuelle en cas de litige dans la base de données *WHOIS*.

Si une adresse IP fait l'ojet d'un rapport auprès d'organisations comme Spamhaus, SpamCop, etc, qui luttent contre le SPAM, les sites malveillants et le phishing, c’est la réputation de l’ensemble du réseau OVHcloud qui est en jeu.

Il est donc important qu'OVHcloud s'occupe de la réputation, la qualité et la sécurité du réseau, qui constitue également une partie importante de votre service.

### Comment fonctionne le système de protection ?

Notre système est basé sur la technologie antispam de Vade Secure.

Une fois qu'une adresse IP est bloquée pour SPAM, un e-mail sera envoyé à votre compte, contenant des informations comme dans l'exemple ci-dessous :

> 
> Bonjour,
>
> Notre protection Antispam a détecté un envoi important de spam à partir d'une de vos IP: 
122.122.122.122
>
> Afin d'assurer la sécurité de notre réseau le trafic sortant de votre serveur vers le port 25 a été suspendu.
> Afin que vous puissiez effectuer les vérifications, voici un échantillon des emails bloqués:
>
> Destination IP : 188.95.235.33 - Message-ID : d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP : 188.95.235.33 - Message-ID : fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## En pratique

**Que faire à la réception de l'e-mail d'alerte ?**

La démarche consiste à identifier le problème, le résoudre, puis débloquer votre IP.

### Identifier et résoudre le problème

**Avant de débloquer une adresse IP, assurez d'avoir pris les mesures suivantes :**

- Arrêtez tout envoi d'e-mail (par exemple : arrêter tous les logiciels de messagerie tels que qmail, Postfix, Sendmail, etc.).
- Vérifiez la file d'attente des e-mails (par exemple qmHandle pour qmail, postqueue -p pour Postfix) et videz-la.
- Analysez vos logs grâce au **Message-ID** présent dans l'alerte de blocage.
- Si vous envoyez bien du SPAM ou des e-mails illégitimes, nous vous recommandons vivement de résoudre le problème **avant** de débloquer l'adresse IP. Veuillez consulter la deuxième partie de ce guide pour connaître les [bonnes pratiques](#bestpractices) en matière d'envoi d'e-mails. 

Une fois le problème résolu, vous pouvez débloquer votre adresse IP en effectuant les étapes suivantes.

> [!alert]
> 
> Ne débloquez en aucun cas l'adresse IP avant d'avoir suspendu l'envoi des e-mails à partir de votre serveur et d'avoir vidé votre file d'attente d'emails. Dans le cas contraire, vous serez immédiatement bloqué une seconde fois, pour une durée plus longue. 
>

### Débloquer votre adresse IP

#### Débloquer votre adresse IP depuis l'espace client

Dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), rendez-vous dans la section `Bare Metal Cloud`{.action} et cliquez sur `IP`{.action}.

Une pop-up vous indique l'IP ou le service bloqué pour SPAM.

![Alerte anti spam](images/alertantispam.png){.thumbnail}

Dans la rubrique « Mes adresses IP publiques et services associés », cliquez sur le bouton `...`{.action} à côté de l'IP ou le service correspondant et sélectionnez `Anti-spam`{.action}.

![antispam](images/antispam.png){.thumbnail}

Dans le nouvel onglet, cliquez sur `Débloquer l'antispam`{.action} en bas et validez.

![Débloquer IP](images/unblockip.png){.thumbnail}

L'IP est alors en cours de déblocage, l'opération peut prendre plusieurs minutes.

Une fois le traitement effectué, votre IP sera débloquée.

#### Débloquer votre adresse IP depuis l'API OVHcloud

Connectez-vous à l'interface [API d'OVHcloud](https://ca.api.ovh.com/console/) et suivez les étapes ci-dessous. Pour plus d'informations sur l'utilisation des API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/) ».

Récupérez tout d'abord la liste des IPs de chaque service OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Serveur Dédié) :

> [!api]
>
> @api {GET} /ip
>

**type** : Indiquez le type d'IP (Dedicated, PCC, VPS, vRack, PCI, etc.)

Voici un exemple de résultat :

>
    "2001:41d0:67:d200::/56",
    "2001:41d0:68:a00::/56",
    "2001:41d0:68:f000::/56",
    "2001:41d0:117:db00::/56",
    "122.122.122.121/28",
    "145.56.222.96/28",
    "188.81.49.30/28",
>

Recherchez ensuite les IPs dans un état particulier grâce à l'appel suivant. Si vous connaissez déjà l'adresse IP bloquée, vous pouvez passer à l'[étape suivante](#unblockip) :

> [!api]
>
> @api {GET} /ip/{ip}/spam
>

**ip** : spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau. Par exemple 122.122.122.121/28.
**state** : spécifiez l'état que vous recherchez.

Voici un exemple de résultat (dans ce cas, le bloc 122.122.122.121/28 a été sélectionné) :

>
    "122.122.122.122" 
>

Vous pouvez obtenir des informations sur le blocage avec l'appel suivant, sinon passez à l'[étape suivante](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip** : spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : indiquez l'IP précédemment récupérée dans l'état "blockedForSpam" par exemple.

Voici un exemple de résultat (dans ce cas, le bloc 122.122.122.121/28 et l'IP 122.122.122.122 ont été sélectionnés) :

>
    time: 3600,
    date: "2022-08-29T17:42:50+01:00",
    ipSpamming: "122.122.122.122",
    state: "blockedForSpam" 
>

Donc :

>  
    * L'IP est bloquée pendant 1 heure (ou 3600 secondes).
    * L'IP à été bloquée le 29/08/2022 à 17:42.
    * Son état actuel est bloqué. 
>

Si vous souhaitez obtenir les statistiques sur ce qui a été détecté, utilisez l'appel api suivant, sinon passez à l'[étape suivante](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : indiquez l'IP précédemment récupérée dans l'état "lockedForSpam" par exemple.<br>
**from and to** : utilisez le format de date utilisé dans la fonction précédente (YYYY-MM-DDTHH:MM+01:SS).

Voici un exemple de résultat :

>
    {
    "messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
    "destinationIp": "188.95.235.33",
    "date": 1385640992,
    "spamscore": 410
    }
>

##### **Débloquer l'IP** <a name="unblockip"></a>

> [!alert]
> IMPORTANT !
Ne débloquez en aucun cas l'IP sans avoir suspendu l'envoi des e-mails depuis votre serveur et vidé votre file d'attente d'emails. Dans le cas contraire, vous serez immédiatement bloqué une seconde fois, pour une durée plus longue. 
>

Pour débloquer votre adresse IP, utilisez l'appel suivant :

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : spécifiez le bloc d'adresses IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : spécifiez l'adresse IP précédemment récupérée dans l'état *lockedForSpam*, par exemple.

Voici un exemple de résultat :

>
    "message": "This IP address is still blocked for 129 seconds"
>

Et un résultat un peu plus de 129 secondes plus tard :

>
    time: 3600,
    date : "2022-08-29T17:42:50+01:00",
    ipSpamming : "122.122.122.122",
    state : "unblocking" 
>

L'adresse IP est alors en cours de déblocage, l'opération peut prendre plusieurs minutes.

### En cas de faux positifs

Dans certains cas, l'alerte antispam peut être un faux positif. Si vous avez vérifié et constaté que le **Message-ID** est associé à un e-mail légitime, vous devez vous assurer que vos messages électroniques sont conformes aux [RFC](#rfc) et aux [bonnes pratiques](#bestpractices) référencées ci-dessous.

#### RFC <a name="rfc"></a>

Les RFC (Request For Comments) sont des documents destinés à décrire des aspects techniques d'Internet. Ces documents sont produits et publiés par l'IETF (Internet Engineering Task Force), un groupe qui produit et définit essentiellement des normes.
Retrouvez plus d'informations sur les liens suivants : 
- [RFC](https://en.wikipedia.org/wiki/Request_for_Comments)
- [IETF](https://www.ietf.org/)
- [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft).

#### Bonnes pratiques <a name="bestpractices"></a>

Les bonnes pratiques sont des méthodes recommandées qui sont souvent basées sur les documents RFC et qui visent à vous conseiller sur la meilleure façon de procéder. Il s'agit ici des règles de base à respecter pour que vos e-mails ne soient pas considérés comme du spam.

**Volume d'envoi**

Si le volume de vos e-mails sortants est très important, il est conseillé de :

- réserver un bloc d'adresses IP dédié uniquement à l'utilisation des e-mails.
- fournir une adresse *abuse* sur ce bloc afin de recevoir les plaintes.
- configurer correctement les [Reverses](https://docs.ovh.com/ca/fr/dedicated/optimiser-envoi-emails/#configurer-le-reverse-ip) sur toutes les adresses IP. 

Cette dernière opération vous permettra d’isoler simultanément l’IP et la réputation du domaine si vous envoyez des e-mails pour différents domaines, de recevoir les plaintes et ainsi de faire le nécessaire pour être débloqué par les différentes organisations. Le reverse permet également de localiser plus rapidement un problème sur un formulaire utilisant le domaine X ou Y, car les e-mails ne sont pas envoyés depuis la même IP et n'ont pas le même *reverse*.

**Contenu de votre e-mail**

- Évitez d'utiliser des mots-clés de spam dans vos e-mails, comme « acheter » ou « dernière chance ». Evitez les majuscules inutles, les sujets impersonnels, les points d'exclamation et les % de remise.
- Pensez à fournir un lien de **désinscription** pour les personnes n'ayant pas demandé à recevoir votre e-mail ou estimant que celui-ci est illégitime.
- Veillez particulièrement à ce que vos e-mails contiennent l'adresse de l'expéditeur (ou un alias), un objet et un bon ratio de texte, d'images et de liens dans le corps du message.
- Le rapport texte/image et texte/lien doit être élevé. Ne surchargez pas l'e-mail avec des liens hypertexte et évitez le Javascript.

**FBL (*Feedback Loop*) - Boucle d'évaluation**

Ce système permet de faire un suivi direct des retours de certains fournisseurs d’accès à Internet en vous indiquant que vos utilisateurs ont signalé votre message comme illicite et qu’il a donc été classé comme spam. Cela vous permettra d’interagir directement avec ces FAI au sujet de votre réputation. Voici quelques FBL :

- [Yahoo & AOL Postmaster](https://senders.yahooinc.com/contact)
- [SpamCop](https://www.spamcop.net/)
- [Outlook & live.com](https://sendersupport.olc.protection.outlook.com/pm/)

**Authentification**

Certains services d'authentification vous permettent de protéger votre réputation :

- **Sender-ID** : il s'agit d'une technologie d'authentification des e-mails développée par Microsoft qui valide l'authenticité de votre nom de domaine en vérifiant l'adresse IP de l'expéditeur. Cette technologie est basée sur la norme IETF : [RFC4406](https://datatracker.ietf.org/doc/rfc4406/).
- **SPF** : *Sender Policy Framework* est un standard de vérification du domaine de l’expéditeur. Elle est basée sur la [RFC4408](https://datatracker.ietf.org/doc/rfc4408/) et consiste à ajouter un champ SPF ou TXT au DNS du domaine, qui contient la liste des IP autorisées à envoyer des e-mails depuis ce domaine.
- **Reverse DNS ou Reverse IP** : Le *reverse* permet de « traduire » une IP en un domaine. Cela permet de retrouver le domaine associé à l'adresse IP.
- **DKIM** : Cette norme est décrite dans la [RFC4871](https://datatracker.ietf.org/doc/html/rfc4871). AOL et Google (Gmail) fonctionnent sur cette base. 

Pour plus d'informations sur les services ci-dessus, consultez notre guide « [Optimiser l’envoi d’e-mails](https://docs.ovh.com/ca/fr/dedicated/optimiser-envoi-emails/) ».

#### Cas spécifiques d'envois d'e-mails

- **Vers un serveur Microsoft (Outlook, etc.)**

Microsoft utilise une politique de liste blanche. Cela signifie que tout serveur se trouve initialement sur une liste noire. Une procédure spécifique est alors nécessaire pour faire valider votre serveur e-mail. Pour plus d’informations, nous vous invitons à consulter [cette section](https://docs.ovh.com/ca/fr/dedicated/optimiser-envoi-emails/#vers-un-serveur-microsoft-outlook-etc) du guide correspondant.

- **Vers un serveur Gmail**

L'ajout d'enregistrements spécifiques (par exemple, un enregistrement DMARC) peut faciliter la réception des e-mails si votre destinataire a une adresse Gmail. La documentation suivante de Google peut vous aider dans cette démarche : [Ajout d'un champ DMARC](https://support.google.com/a/answer/2466563?hl=fr){.external}.

Google propose également un [article dédié](https://support.google.com/mail/answer/81126?hl=en){.external} à la prévention du spam pour les utilisateurs de Gmail.

### Déclarer un faux positif

Si vos e-mails sont conformes, vous pouvez nous en informer en envoyant un exemple de votre e-mail (en-tête compris). Notre support technique vous assistera ensuite pour les prochaines étapes. Il vous suffit de créer un ticket d’assistance depuis votre espace client et d’y inclure les informations suivantes :

- L'IP du service bloquée pour SPAM.
- Une copie originale du ou des e-mails marqués comme SPAM (vous devriez pouvoir l'identifier grâce au **Message-ID** inclus dans l'alerte de blocage). Si aucun **Message-ID** n'est fourni, Il suffit de nous envoyer une copie des e-mails envoyés avant la réception de l'alerte. Veuillez ne fournir que la copie de l'e-mail signalé comme SPAM.
- Le fichier .EML de l'e-mail fourni. Celui-ci doit inclure **l'en-tête** et **le pied de page** de l'e-mail. Si vous ne savez pas comment extraire un fichier .EML, nous vous invitons à consulter le guide suivant : [Récupérer l’en-tête d’un e-mail](https://docs.ovh.com/ca/fr/emails/recuperation-des-entetes-e-mails/).

Une fois les informations envoyées, notre service d'assistance communiquera avec Vade Secure pour une analyse plus approfondie de la situation.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.