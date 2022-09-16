---
title : OVHcloud AntiSpam - Bonnes pratiques et déblocage d'une adresse IP
slug : antispam-best-practices
excerpt: Découvrez nos bonnes pratiques antispam et comment débloquer une adresse IP bloquée pour SPAM.
section : Gestion du serveur
order : xxxxx
---

**Dernière mise à jour le xx xxxxxxx 2022**

## Objectif

Pour chaque adresse IP disponible sur les produits et services OVHcloud, en tant que fournisseur d'accès à Internet, nous l'enregistrons et la réservons auprès d'organisations telles que [RIPE](https://www.ripe.net/) ou [ARIN](https://www.arin.net/). Dans ce cas, nous apparaissons comme le contact *abuse* de la propriété intellectuelle en cas de litige dans la base de données *WHOIS*.

Si une adresse IP est rapportée à des organisations comme Spamhaus, SpamCop etc, qui luttent contre le SPAM, les sites malveillants et le phishing, c’est la réputation de l’ensemble du réseau OVHcloud qui est en jeu.

Il est donc important qu'OVHcloud s'occupe de la réputation, la qualité et la sécurité du réseau, qui constitue également une partie importante de votre service.

### Comment fonctionne le système de protection ?

Notre système est basé sur la technologie antispam de Vade Secure.

### Bloqué pour SPAM

Une fois qu'une adresse IP est bloquée pour SPAM, un courriel sera envoyé à votre compte contenant des informations comme l'exemple ci-dessous :

> 
> Bonjour,
>
> Notre protection Antispam a détecté un envoi important de spam à partir d'une de vos IP: 
122.122.122.122
>
> Afin d'assurer la sécurité de notre réseau le trafic sortant de votre serveur vers les
ports 25 a été suspendu.
> Afin que vous puissiez effectuer les vérifications voici un échantillon des emails bloqués:
>
> Destination IP : 188.95.235.33 - Message-ID : d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP : 188.95.235.33 - Message-ID : fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP : 188.95.235.33 - Message-ID : zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

### Que faire à la réception du courriel d'alerte ?

#### 1. Résoudre le problème 

La première étape consiste à identifier le problème, le résoudre, puis débloquer votre IP.

**Avant de débloquer une adresse IP**

* Ne plus envoyer d'e-mail (ex : arrêter tous les logiciels de messagerie tels que qmail, Postfix, Sendmail etc.).

* Vérifiez la file d'attente des e-mails (par exemple qmHandle pour qmail, postqueue -p pour Postfix) et vider-la.

* Analysez vos logs grâce au **Message-ID** présent dans l'alerte de blocage.

* Si vous envoyez bien du SPAM ou des e-mails illégitimes, nous vous recommandons vivement de résoudre le problème avant de débloquer l'adresse IP. Veuillez consulter la deuxième partie de ce guide pour connaître les [meilleures pratiques](#bestpractices) en matière d'envoie de courriel. 

Une fois le problème résolu, vous pouvez débloquer votre adresse IP en effectuant les étapes suivantes :

> [!alert]
> 
> Ne débloquez en aucun cas l'adresse IP sans avoir suspendu l'envoi des e-mails à partir de votre serveur et d'avoir vider votre file d'attente d'emails ; sinon, vous serez immédiatement bloqué une seconde fois (et de plus longue durée). 
>

#### Depuis l'espace client

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et cliquez sur `IP`{.action}.

Un message contextuel indique l'IP ou le service bloqué pour SPAM.

![Alerte anti spam](images/alertantispam.png){.thumbnail}

Dans la rubrique **Mes adresses IP publiques et services associés**, cliquez sur le bouton `...`{.action} à côté de l'IP ou le service correspondant et sélectionnez `Anti-spam`{.action}.

![antispam](images/antispam.png){.thumbnail}

Dans le nouvel onglet, cliquez sur `Débloquer l'antispam`{.action} en bas et validez.

![Débloquer IP](images/unblockip.png){.thumbnail}

L'IP est en cours de déblocage l'opération peut prendre plusieurs minutes.

Une fois fait, votre IP sera débloquée.

#### Depuis l'API OVHcloud

Connectez-vous à l'interface [API d'OVHcloud](https://api.ovh.com/console/) conformément au guide [approprié](../../api/first-steps-with-ovh-api/) et suivez les étapes ci-dessous.

Récupérez tout d'abord la liste des IPs de chaque service OVHcloud (Private Cloud / VPS / Public Cloud / Serveur Dédié) :

> [!api]
>
> @api {GET} /ip
>

**type** : Indiquer le type d'IP (Dédié, PCC, VPS, vRack, PCI, etc.)

Voici un exemple de ce que vous devriez voir :

>
    "2001:41d0:67:d200::/56",
    "2001:41d0:68:a00::/56",
    "2001:41d0:68:f000::/56",
    "2001:41d0:117:db00::/56",
    "122.122.122.121/28",
    "145.56.222.96/28",
    "188.81.49.30/28",
>

Ensuite, recherchez les IPs dans un état particulier avec l'appel suivant. Si vous connaissez déjà l'adresse IP bloquée, vous pouvez passer à l'étape [suivante](#unblockip) :

> [!api]
>
> @api {GET} /ip/{ip}/spam
>

**ip** : Spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau. Par exemple 122.122.122.121/28.
**state** : Spécifiez l'état que vous recherchez.

Voici un exemple de résultat (dans ce cas, le bloc 122.122.122.121/28 a été sélectionné) :

>
    "122.122.122.122" 
>

Vous pouvez obtenir des informations sur le blocage avec l'appel suivant, sinon passez à l'étape [suivante](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip** : Spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : Indiquez l'IP précédemment récupérée dans l'état "lockedForSpam" par exemple.

Voici un exemple de résultat (dans ce cas, le bloc 122.122.122.121/28 et l'IP 122.122.122.122 ont été sélectionnés) :

>
    time: 3600,
    date : "2022-08-29T17:42:50+01:00",
    ipSpamming : "122.122.122.122",
    state : "lockedForSpam" 
>

Donc :

>  
    * L'IP est bloquée pendant 1 heure (ou 3600 secondes).
    * L'IP à été bloqué le 29/08/2022 à 17:42.
    * Son état actuel est bloqué. 
>

Si vous souhaitez obtenir les statistiques sur ce qui a été détecté, utilisez l'appel api suivant, sinon passez à l'étape [suivante](#unblockip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : Spécifiez le bloc IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : Indiquez l'IP précédemment récupérée dans l'état "lockedForSpam" par exemple.<br>
**from and to** : Utilisez le format de date utilisé dans la fonction précédente (YYYY-MM-DDTHH:MM+01:SS).

Voici un exemple de résultat :

>
    {
    "messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
    "destinationIp": "188.95.235.33",
    "date": 1385640992,
    "spamscore": 410
    }
>

#### Débloquer l'IP <a name="unblockip"></a>

> [!alert]
> IMPORTANT !!
Ne débloquez en aucun cas l'IP sans avoir suspendu l'envoi des e-mails à partir de votre serveur et vider votre file d'attente d'emails; sinon, vous serez immédiatement bloqué une seconde fois (et de plus longue durée). 
>

Pour débloquer votre adresse IP, utilisez l'appel suivant :

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : Spécifiez le bloc d'adresse IP récupéré à l'étape précédente avec le masque de réseau.<br>
**ipSpamming** : Spécifiez l'adresse IP précédemment récupérée dans l'état *lockedForSpam*, par exemple.

Voici un exemple de résultat :

>
    "message": "This IP address is still blocked for 129 seconds"
>

Plus de 129 secondes plus tard :

>
    time: 3600,
    date : "2022-08-29T17:42:50+01:00",
    ipSpamming : "122.122.122.122",
    state : "unblocking" 
>

L'adresse IP est en cours de déblocage, l'opération peut prendre plusieurs minutes.

### 2. En cas de faux positifs

Dans certains cas, l'alerte antispam peut être un faux positif. Si vous avez vérifié et constaté que le **Message-ID** provient de votre adresse e-mail légitime, vous devez vous assurer que vos messages électroniques sont conformes à la [RFC](#rfc) et aux [meilleures pratiques](#bestpractices) indiquées ci-dessous.

#### RFC <a name="rfc"></a>

Les RFC (Request For Comments) sont des documents destinés à décrire des aspects techniques d'Internet. Ces documents sont produits et publiés par l'IETF (Internet Engineering Task Force), un groupe qui produit et définit essentiellement des normes.
Pour plus d'informations, voir : [RFC](https://en.wikipedia.org/wiki/Request_for_Comments), [IETF](https://www.ietf.org/) et [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft).

#### Meilleures pratiques <a name="bestpractices"></a>

Les meilleures pratiques sont des méthodes recommandées qui sont souvent basées sur ces documents et qui visent à vous conseiller sur la meilleure façon de procéder. Il s'agit ici des règles de base à respecter pour que vos e-mails ne soient pas considérés comme du spam.

**Volume d'envoi**

Si le volume de vos e-mails sortants est très important, il est conseillé de :

* réserver un bloc d'adresse IP dédié uniquement à l'utilisation des e-mails.
* fournir une adresse "abuse" sur ce bloc afin de recevoir les plaintes.
* configurer correctement les [Reverses](https://docs.ovh.com/fr/dedicated/optimiser-envoi-emails/#configurer-le-reverse-ip) sur toutes les IPs. Cette opération vous permettra d’isoler simultanément l’IP et la réputation du domaine si vous envoyez des e-mails pour différents domaines, de recevoir les plaintes et ainsi de faire le nécessaire pour être débloqué par les différentes organisations. Il permet également de localiser plus rapidement un problème sur un formulaire utilisant le domaine X ou Y, car les courriels ne sont pas envoyés depuis la même IP et n'ont pas le même *reverse*.

**Contenu du mail**

Évitez d'utiliser des mots-clés de spam dans vos e-mails, comme "acheter" et "dernière chance", et évitez les majuscules, les sujets impersonnels, les points d'exclamation et les % de remise.

Pensez à fournir un lien de **désinscription** pour les personnes n'ayant pas demandé à recevoir votre e-mail ou estimant que celui-ci est illégitime.

Veillez particulièrement à ce que vos e-mails contiennent l'adresse de l'expéditeur (ou un alias), un objet et un bon ratio de texte, d'images et de liens dans le corps du message.

Le rapport texte/image et texte/lien doit être élevé. Ne surchargez pas l'e-mail avec des liens hypertexte et évitez le Javascript.

**FBL - Boucle d'évaluation**

Ce système permet de faire un suivi direct des retours de certains fournisseurs d’accès en vous indiquant que vos utilisateurs ont signalé votre message comme illicite et qu’il a donc été classé comme spam. Cela vous permettra d’interagir directement avec ces FAI au sujet de votre réputation. Voici quelques FBL :

* [Yahoo & AOL Postmaster](https://senders.yahooinc.com/contact)

* [SpamCop](https://www.spamcop.net/)

* [Outlook & live.com](https://sendersupport.olc.protection.outlook.com/pm/)

**Authentification**

Certains services d'authentification vous permettent de protéger votre réputation :

* **Sender-ID** : Une technologie d'authentification des e-mails développée par Microsoft qui valide l'authenticité de votre nom de domaine en vérifiant l'adresse IP de l'expéditeur. Cette technologie est basée sur la norme IETF : [RFC4406](https://datatracker.ietf.org/doc/rfc4406/).

* **SPF** : Sender Policy Framework est un standard de vérification du domaine de l’expéditeur. Elle est basée sur la [RFC4408](https://datatracker.ietf.org/doc/rfc4408/) et consiste à ajouter un champ SPF ou TXT au DNS du domaine, qui contient la liste des IP autorisées à envoyer des e-mails depuis ce domaine.

* **Reverse DNS ou Reverse IP** : Le *reverse* permet de "traduire" votre IP dans votre domaine. Cela permet de retrouver le domaine associé à l'adresse IP.

* **DKIM** : Cette norme est décrite dans la [RFC4871](https://datatracker.ietf.org/doc/html/rfc4871).  
AOL et Google (Gmail) fonctionnent sur cette base. 

Pour plus d'informations sur les services ci-dessus, consultez notre guide [Optimiser l’envoi d’e-mails](https://docs.ovh.com/fr/dedicated/optimiser-envoi-emails/).

### Déclaration d’un faux positif

Si vos emails sont conformes, vous pouvez nous en informer en envoyant un exemple de votre email (en-tête compris). Notre support technique vous assistera ensuite pour les prochaines étapes. Il vous suffit de créer un ticket d’assistance depuis votre espace client et d’y inclure les informations suivantes :

* L'IP du service bloquée pour SPAM.
* Une copie originale du ou des e-mails marqués comme SPAM (vous devriez pouvoir l'identifier grâce au **Message-ID** inclus dans l'alerte de blocage). Si aucun **Message-ID** n'est fourni, Il suffit de nous envoyer une copie des e-mails envoyés avant la réception de l'alerte. Veuillez ne fournir que la copie de l'e-mail signalé comme SPAM.
* Le fichier .EML de l'e-mail fourni, celui-ci doit inclure **l'en-tête** et **le pied** de page de l'e-mail. Si vous ne savez pas comment extraire un fichier .EML, nous vous invitons à consulter le guide suivant : [Récupérer l’en-tête d’un e-mail](https://docs.ovh.com/fr/emails/recuperation-des-entetes-e-mails/).

Une fois les informations envoyées, notre service d'assistance communiquera avec vade secure pour une analyse plus approfondie de la situation.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.