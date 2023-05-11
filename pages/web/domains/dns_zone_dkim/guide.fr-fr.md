---
title: Configurer un enregistrement DKIM 
slug: dkim-record
excerpt: Découvrez comment configurer un enregistrement DKIM sur votre nom de domaine et votre plateforme e-mail OVHcloud
section: DNS et zone DNS
order: 06
updated: 2022-09-12
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

**Dernière mise à jour le 12/09/2022**

## Objectif

L'enregistrement DKIM (**D**omain**K**eys **I**dentified **M**ail) permet de signer les e-mails pour éviter l'usurpation. Cette signature fonctionne sur le principe du hachage combiné à une cryptographie asymétrique.

**Découvrez comment fonctionne DKIM et comment le mettre en place pour votre service e-mail.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou de votre prestataire de domaine si il est enregistré en dehors d'OVHcloud .
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir souscrit une offre [Hosted Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/) ou une offre e-mail hors OVHcloud disposant du DKIM.

> [!warning]
>
> Si votre nom de domaine n'utilise pas les serveurs DNS d'OVHcloud, vous devez réaliser la modification du DKIM depuis l'interface du prestataire gérant la configuration de votre nom de domaine.
>
> Si votre nom de domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration OVHcloud dans votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) depuis l'onglet `Serveurs DNS`{.action}, une fois positionné sur le domaine concerné.
>

## en pratique

**Sommaire**

- [Comment le DKIM fonctionne-t-il?](#how-dkim-work)
    - [Le hachage](#hash)
    - [La cryptographie asymétrique](#crypto)
    - [Comment le hachage et la cryptographie asymétrique sont utilisés pour le DKIM ?](#crypto-and-hash)
    - [Pourquoi a-t-on besoin de configurer les serveurs DNS ?](#dns-and-dkim)
    - [Exemple d'une e-mail envoyer en utilisant le DKIM](#example)
    - [Qu'est-ce qu'un sélecteur DKIM](#selector)
- [Configurer le DKIM pour une offre e-mail Exchange OVHcloud](#internal-dkim)
    - [Configuration complète du DKIM](#firststep)
    - [Les différents états du DKIM](#status)
    - [Activer ou changer un sélecteur DKIM](#enable-switch)
    - [Désactiver et supprimer le DKIM](#disable-delete)
- [Configurer DKIM pour une offre e-mail hors de votre compte OVHcloud](#external-dkim)
    - [Enregistrement DKIM](#dkim-record)
    - [Enregistrement TXT](#txt-record)
    - [Enregistrement CNAME](#cname-record)
- [Testez votre DKIM](#test-dkim)


### **Comment le DKIM fonctionne-t-il ?** <a name="how-dkim-work"></a>

Pour bien comprendre pourquoi le DKIM permet de sécuriser vos échanges d'e-mail, il faut comprendre comment il fonctionne. Le DKIM fait appel au «**hachage**» et à la «**cryptographie asymétrique**» pour créer une signature sécurisée. La **plateforme e-mail** et la **Zone DNS** de votre nom de domaine vont aider à transmettre les informations du DKIM à vos destinataires.

#### **Le hachage** <a name="hash"></a>

Le principe d'une **fonction de hachage** est de générer une **signature** (aussi appelé empreinte) à partir d'une donnée d'entrée. Son intérêt est de créer en sortie une suite de caractères fixe, quelle que soit la quantité de données en entrée. 

Sur le diagramme suivant, vous constaterez que la sortie (Output) sera toujours composée de 32 caractères en utilisant un algorithme de hachage MD5(**M**essage **D**igest **5**), alors que le texte d'entrée (Input) peut varier en taille. La moindre variation de caractère dans la donnée d'entrée change complètement le hachage en sortie. Ce qui rend la signature en sortie imprévisible et infalsifiable. Dans l'exemple ci-dessous, la valeur d'entrée (Input) est passée dans l'algorithme de hachage MD5 et présente en sortie (Output) sa valeur de hachage.

![hash](images/dns-dkim-hash01.png){.thumbnail}

La fonction de hachage est utile lorsque vous souhaitez vérifier l'intégrité d'un message. En effet deux données qui peuvent être d'apparence très proches présentent une valeur de hachage complètement différente avec une longueur de caractères égale en sortie, quelle que soit sa longueur d'entrée.

#### **La cryptographie asymétrique** <a name="crypto"></a>

La **cryptographie**, comme son nom l'indique, a pour but de crypter les données qu'on lui donne. « **Asymétrique** » car la clé de cryptage n'est pas la même que la clé de décryptage, contrairement à une cryptographie symétrique qui utilisera la même clé pour crypté et décrypté.

Dans la cryptographie asymétrique, on utilise une **clé publique** et une **clé privée**. La clé publique est visible et utilisable par tous. La clé privée est uniquement utilisée par  propriétaire et n'est pas visible de tous. Il existe deux utilisations en cryptographie asymétrique.

- **la donnée d'entrée est cryptée avec la clé publique et décryptée par celui qui possède la clé privée** : vous souhaitez qu'une personne vous transmette des données de manière sécurisée. Vous transmettez votre clé publique sans vous soucier que quelqu'un la récupère, cette personne cryptera ses données avec votre clé publique. Les données cryptées ne pourront être décryptées uniquement qu'avec le propriétaire de la clé privée.

![hash](images/dns-dkim-crypto01.png){.thumbnail}

- **la donnée d'entrée est cryptée par le propriétaire de la clé privée et décryptée par la clé publique** : vous souhaitez authentifier un échange de donnée. Par exemple, vos destinataires souhaitent s'assurer que vous êtes l'auteur du message que vous leur transmettez. Dans ce cas, vous allez crypter votre message avec votre clé privée, celui-ci ne pourra être décrypté que par la clé publique que vous aurez transmise à tout le monde. Ce qui garantit à vos destinataires l'authenticité de votre message. En effet, un message décrypté par la clé publique ne peut provenir uniquement que du propriétaire de la clé privée.

![hash](images/dns-dkim-crypto02.png){.thumbnail}

#### **Comment le hachage et la cryptographie asymatrique sont utilisés pour le DKIM ?** <a name="crypto-and-hash"></a>

Depuis la plateforme e-mail, le DKIM va utiliser le hachage pour créer une signature à partir de certains éléments de [l'en-tête de l'e-mail](https://docs.ovh.com/fr/emails/recuperation-des-entetes-e-mails/#comprendre-le-contenu-dun-en-tete) et du corps de l'e-mail (contenu de l'e-mail).

La signature est ensuite cryptée avec la clé privée en utilisant la cryptographie asymétrique.

#### **Pourquoi a-t-on besoin de configurer les serveurs DNS ?** <a name="dns-and-dkim"></a>

Pour que le destinataire puisse vérifier la signature DKIM de l'expéditeur, il aura besoin des paramètres DKIM et surtout de la clé publique pour la décrypter. La [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) d'un nom de domaine est publique, c'est pourquoi un enregistrement DNS est ajouté pour transmettre la clé publique et les paramètres DKIM au destinataire.

#### **Qu'est-ce qu'un sélecteur DKIM** <a name="selector"></a>

Lorsque vous activez le DKIM, celui-ci fonctionne avec une paire de clé publique / clé privée. Il est possible d'attribuer plusieurs paires de clés à votre nom de domaine, dans le cadre d'une rotation par exemple. En effet lorsque vous changez de paire de clés, l'ancienne paire doit rester active le temps que l'ensemble des e-mails que vous avez envoyé avec l'ancienne clé ne rencontre pas d'échec dans la vérification du DKIM sur serveur de réception.

Pour que ce principe de rotation fonctionne, on va utiliser ce qu'on appelle les **sélecteurs DKIM**. Un sélecteur DKIM comprend une paire de clé privée/clé publique, il est visible sous la forme d'une chaine de caractère dans la signature DKIM d'un e-mail par l'argument `s=`. Cette signature est visible dans [l'en-tête de l'e-mail](https://docs.ovh.com/fr/emails/recuperation-des-entetes-e-mails/#comprendre-le-contenu-dun-en-tete).

**Exemple d'une partie de signature DKIM**

<pre class="console"><code>
DKIM-Signature: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

La valeur du sélecteur est ici `s=ovhex123456-selector1`.

#### **Exemple d'une e-mail envoyer en utilisant le DKIM** <a name="example"></a>

Lorsque vous envoyez un e-mail depuis **contact@mydomain.ovh**, une signature cryptée à l'aide d'une clé privée (private key) est ajoutée dans l'en-tête de l'e-mail. 

![email](images/dns-dkim-send.gif){.thumbnail}

Le destinataire **recipient@otherdomain.ovh** pourra déchiffrer cette signature avec la clé publique (Public key) visible dans la zone DNS de **mydomain.ovh**. La signature est créée à partir du contenu de l'e-mail envoyé, cela signifie que si l'e-mail est modifié lors du transit, la signature ne correspondra pas avec le contenu : ce qui provoquera l'échec de la vérification DKIM sur le serveur destinataire.

![email](images/dns-dkim-receive.gif){.thumbnail}

### Configurer le DKIM pour une offre e-mail Exchange OVHcloud <a name="internal-dkim"></a>

Pour configurer votre DKIM, il sera nécessaire de récupérer la référence de votre plateforme Exchange. Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr),dans l'onglet `Web Cloud`{.action}, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Cliquez enfin sur le nom du service Hosted Exchange concerné. Par défaut, le nom de votre plateforme correspond à sa référence, ou celle-ci sera visible sous le nom que vous lui avez attribué (voir l'image ci-dessous).

![email](images/dns-dkim-platform.png){.thumbnail}

Assurez-vous également que le nom de domaine que vous souhaitez utiliser pour vos e-mails soit bien actif dans la rubrique `Domaines associés`{.action}.

![email](images/dns-dkim-domain.png){.thumbnail}

Pour configurer le DKIM, rendez-vous sur le site <https://api.ovh.com/console/>, connectez-vous à l'aide du bouton `Login`{.action} en haut à droite à l'aide de vos identifiants OVHcloud.

> Appuyez-vous de notre guide [« Découvrez comment utiliser les API OVHcloud »](/pages/account/api/first-steps) si vous n'avez jamais utilisé les API.

Dirigez-vous vers la section `/email/exchange` des API et tapez « dkim » dans la case `Filter` pour faire uniquement apparaitre les API relatives au DKIM.

![email](images/dns-dkim-api01.png){.thumbnail}

#### **Configuration complète du DKIM** <a name="firststep"></a>

Suivez les **5 étapes** ci-dessous en cliquant sur chacun des onglets

> [!tabs]
> **1.Liste des sélecteurs**
>> Avant de créer un des sélecteurs pour votre nom de domaine, vous devrez récupérer le nom qui leur est attribué automatiquement par la plateforme Exchange.<br>
>> <br>
>> Pour cela, utiliser l'API suivante:<br>
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 ». <br>
>> - `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 ». <br>
>> - `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel vous souhaitez activer DKIM. <br>
>>
>> *Exemple de résultat:* 
>> ```
>>   "ovhex123456-selector1"
>>   "ovhex123456-selector2"
>> ```
>>
> **2.Créer un sélecteur**
>> Vous allez maintenant créer un sélecteur, générer sa paire de clés et l'enregistrement DNS associé au nom de domaine.<br>
>><br>
>> Pour cela, utiliser l'API suivante:<br>
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 ».
>> - `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 ».
>> - `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel vous souhaitez activer le DKIM.
>> - `autoEnableDKIM` : le DKIM sera directement activé en cochant cette case. **Ne cochez pas cette case si votre nom de domaine n'est pas enregistré dans le même espace client OVHcloud ou dans un autre bureau d'enregistrement**.
>> - `configureDkim` : l'enregistrement CNAME sera automatiquement ajouté dans votre zone DNS de votre nom de domaine si celui-ci est géré dans le même espace client OVHcloud que votre plateforme Exchange. **Ne cochez pas cette case si votre nom de domaine n'est pas enregistré dans le même espace client OVHcloud ou dans un autre bureau d'enregistrement**.
>> - `selectorName` : saisissez le nom d'un sélecteur que vous avez relevé à l'étape précédente. <br>
>>
>> Cliquez sur `Execute`{.action} pour lancer la création du sélecteur.<br>
>> *Exemple de résultat :*
>> ```
>>  status: "todo",
>>  function: "addExchangeDomainDKIM",
>>  id : 107924143,
>>  "finishDate": null,
>>  "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Si votre nom de domaine est géré dans le même espace client que votre plateforme et que vous avez coché `autoEnableDKIM` et `configureDkim`, passez directement à la section [**Les différents états du DKIM**](dkim-status#) pour suivre l'activation du DKIM.
>>
> **3.Récupérer l'enregistrement DNS**
>> Vous devrez configurer manuellement la zone DNS de votre nom de domaine, si :
>>
>> - votre plateforme Exchange est liée à un nom de domaine qui est géré dans un autre espace client OVHcloud <br>
>> - votre plateforme Exchange est liée à un nom de domaine qui est géré dans un autre bureau d'enregistrement <br>
>> - vous avez choisi de ne pas cocher la case `configureDkim` à l'étape précédente.<br>
>>
>> Pour configurez votre zone DNS, vous devez récupérer les valeurs de l'enregistrement DNS. Pour cela, lancez l'API suivante:
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
>> - `selectorName` : saisissez le nom du sélecteur que vous avez créé à l'étape précédente 
>> - `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
>> - `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel vous souhaitez configurer le DKIM
>>
>> *Exemple de résultat :*
>> ```
>>   targetRecord: "ovhex123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>>   recordType: "CNAME"
>>  header: "from;to;subject;date"
>>   taskPendingId: 108712689
>>  status: "waitingRecord"
>>  cnameIsValid: false
>>  lastUpdate: "1970-01-01T00:00:00+01:00"
>>  customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"
>>  selectorName: "ovhex1234565-selector1"
>> ```
>> Récupérez les valeurs `customerRecord`et `targetRecord` dans un fichier texte. Passez à l'étape suivante.
>>
>> > [!primary]
>> >
>> > Il est possible que le `status:` soit en `todo`, cela n'a pas d'incidence sur la configuration de votre zone DNS.
>>
> **4.Configurer l'enregistrement DNS**
>> Depuis [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou est hébergé le nom de domaine de votre plateforme Exchange, dans l'onglet `Web Cloud`{.action}, cliquez sur `Noms de domaine`{.action} dans la colonne de gauche et sélectionnez le nom de domaine concerné.<br>
>> Dirigez-vous vers l'onglet `Zone DNS`{.action} puis cliquez sur `Ajoutez une entrée`{.action} dans la fenêtre qui s'affiche. choisissez `CNAME` puis complétez selon les valeurs que vous avez relevées.<br>
>>
>> Si on prend les valeurs de l'exemple à l'étape "**3.Récupérer l'enregistrement DNS**":
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` correspond au sous-domaine de l'enregistrement CNAME, on garde seulement `ovhex123456-selector1._domainkey` car le `.mydomain.ovh`est déjà préremplie <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` correspond à la cible de l'enregistrement, on y rajoute un point à la fin pour ponctuer la valeur. cela donne `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](images/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Une fois les valeurs saisies, cliquez sur `suivant`{.action}, puis `valider`{.action}.
>>
>> Si vous configurez votre zone DNS dans une interface tierce hors OVHcloud, votre enregistrement CNAME doit avoir la forme suivante:
>>
>> ```bash
>> ovhex123456-selector1._domainkey IN CNAME ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > N'oubliez pas qu'une modification dans une zone DNS est soumise au temps de propagation, il est généralement court, mais peut s'étendre jusqu'à 24h.
>>
> **5.Activation du DKIM**
>> > [!warning]
>> >
>> > Depuis la section [**Les différents états du DKIM**](dkim-status#) de ce guide, vérifier que la valeur `status:` est bien en `ready` avant de pouvoir activer le DKIM.
>>
>> Pour activer le DKIM, utilisez l'API suivante:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
>> - `selectorName` : saisissez le nom du sélecteur que vous avez créé
>> - `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
>> - `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel vous souhaitez activer le DKIM
>>
>> *Exemple de résultat :*
>> ```
>>  id: 108716876
>>  todoDate: "2023-05-05T11:30:11+02:00"
>>  finishDate: null
>>  status: "todo"
>>  function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Vous avez maintenant effectué toutes les manipulations pour activer le DKIM. Pour s'assurer que celui-ci est bien activé, je vous invite à consulter à nouveau la section [**« Les différents états du DKIM »**](dkim-status#) de ce guide pour vérifier que la valeur `status:` est bien en `inProduction`. Si c'est le cas, votre DKIM est désormais actif.
>>  


#### **Les différents états du DKIM** <a name="dkim-status"></a>
 
Lors de vos opérations sur le DKIM de votre plateforme Exchange, utilisez l'API ci-dessous pour vérifier l'état en cours.

> [!api]
>
> @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>
- `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `selectorName` : saisissez le nom du sélecteur que vous avez créé à l'étape précédente 
- `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel le DKIM doit être présent

Regardez ensuite la valeur `status:` dans le résultat:

- `todo` : La tâche a été initiée, elle va se lancer.
- `WaitingRecord` : Les enregistrements DNS sont en attente de configuration ou en cours de validation dans la zone DNS du nom de domaine. Une vérification automatique régulière est faite pour constater si l'enregistrement DNS est présent et correctement renseigné.
- `ready` : Les enregistrements DNS sont présents dans la zone. Le DKIM peut maintenant être activé.
- `inProduction` : Le DKIM est bien configuré et activé, il est donc pleinement opérationnel.
- `disabling` : Le DKIM est en cours de désactivation.
- `deleting` : Le DKIM est en cours de suppression.

Si vous rencontrez l'erreur suivante lorsque vous lancez cette API, cela signifie que le sélecteur n'existe pas ou a été supprimé. Il faudra le créer.

```
Not Found (404)
{ "message": "The requested object (selectorName = ovhex123456-selector1) does not exist" }
```

#### **Activer ou changer un sélecteur DKIM** <a name="enable-switch"></a>

> [!warning]
>
> Le sélecteur DKIM doit être en statut `ready` avant de pouvoir être activé.

Pour activer le DKIM sur un sélecteur, utilisez l'API suivante:

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>

- `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `selectorName` : saisissez le nom d'un sélecteur existant.
- `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange sur lequel vous souhaitez activer le DKIM

Lors d'une rotation de sélecteur DKIM, vous pouvez directement activer le deuxième sélecteur que vous avez créé afin de basculer dessus, tout en conservant le premier sélecteur qui restera actif le temps que tous les e-mails délivrés avec celui-ci soient bien analysés par leur destinataire.


#### **4.Désactiver et supprimer le DKIM** <a name="enable-switch"></a>

> [!warning]
>
> Le sélecteur DKIM doit être en statut `inProduction` avant de pouvoir être le désactivé.

Si vous souhaitez désactiver le DKIM sans supprimer le sélecteur et sa paire de clés, utilisez l'API suivante:

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>

- `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `selectorName` : saisissez le nom du sélecteur que vous souhaitez désactiver.
- `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange

Si vous souhaitez supprimer le sélecteur DKIM et sa paire de clés, lancez l'API suivante:

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>

- `organizationName` : saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `selectorName` : saisissez le nom du sélecteur que vous souhaitez supprimer
- `exchangeService`: saisissez le nom de votre plateforme Exchange se présentant sous la forme « hosted-zz111111-1 » ou « private-zz111111-1 »
- `domainName` : saisissez le nom de domaine attaché à votre plateforme Exchange 

### Configurer le DKIM pour une offre e-mail hors de votre compte OVHcloud <a name="external-dkim"></a>

Si vous souhaitez configurer votre zone DNS afin d'y ajouter un enregistrement DKIM pour votre offre, suivez les instructions suivantes.

Depuis [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur l'onglet `Web Cloud`{.action}, puis sur `Noms de domaine`{.action} dans la colonne de gauche et sélectionnez le nom de domaine concerné.

Dirigez-vous vers l'onglet `Zone DNS`{.action}, puis cliquez sur `Ajoutez une entrée`{.action}. Il existe 3 manières d'ajouter un enregistrement pour paramétrer le DKIM dans votre zone DNS:

- [un enregistrement DKIM](#dkim-record) : configuration permettant de visualiser l'ensemble des paramètres d'un enregistrement DKIM.
- [un enregistrement TXT](#txt-record) : enregistrement à utiliser lorsque l'ensemble des paramètres DKIM vous ont été fournis.
- [un enregistrement CNAME](#cname-record) : enregistrement utilisé pour une offre e-mail OVHcloud ou un serveur e-mail Microsoft.

#### **Enregistrement DKIM**<a name="dkim-record"></a>

Cet enregistrement est nommé DKIM sur l'interface, mais il s'agit en réalité d'un enregistrement TXT en sortie. L'enregistrement DKIM a pour but de facilité la lecture des différents éléments de paramétrage du DKIM en les présentant sous forme de cases indépendantes.

![email](images/dns-dkim-add.png){.thumbnail}

- **Sous-domaine** : renseignez le nom du sélecteur DKIM et ajoutez `._domainkey` à la suite, votre nom de domaine s'ajoutera automatiquement à la fin.

*exemple:*
```
  selector-name._domainkey.mydomain.ovh.
```

- **Version (v=)**: sers à indiquer la version du DKIM. Il est recommandé de l'utiliser et sa valeur par défaut est "DKIM1". Si spécifié, ce tag doit être placé en premier dans l'enregistrement et doit être égal à "DKIM1" (sans les guillemets). Les enregistrements qui commencent par un tag "v=" avec une autre valeur doivent être ignorés.<br>
- **Granularité (g=)**: permet de spécifier la partie «local-part» d'une adresse e-mail, c'est-à-dire la partie située avant le «@». Elle permet de spécifier l'adresse e-mail ou les adresses e-mail qui sont autorisées à signer un message électronique avec la clé DKIM du sélecteur. La valeur par défaut de "g=" est "\*", ce qui signifie que toutes les adresses e-mail sont autorisées à utiliser la clé de signature DKIM. En indiquant une valeur spécifique pour "g=", on peut limiter l'utilisation de la clé à une partie locale d'adresse e-mail spécifique ou à une plage d'adresses e-mail spécifiques en utilisant des caractères génériques (exemple "\*-group").<br>
- **Algorithme (hash) (h=)**: permet de spécifier les algorithmes de hachage utilisés pour signer les en-têtes d'e-mail. Cette balise permet de définir une liste d'algorithmes de hachage qui seront utilisés pour générer une signature DKIM pour un message donné.<br>
- **Type de clé (k=)**: spécifie l'algorithme de signature utilisé pour signer les messages électroniques sortants. Il permet aux destinataires de savoir comment le message a été signé et quelle est la méthode utilisée pour vérifier son authenticité. Les valeurs possibles pour le tag "k=" comprennent "rsa" pour l'algorithme de signature RSA et "ed25519" pour l'algorithme de signature Ed25519. Le choix de l'algorithme dépend de la politique de sécurité de l'expéditeur et de la prise en charge par le destinataire.<br>
- **Notes (n=)**: sers à inclure des notes d'intérêt pour les administrateurs qui gèrent le système de clés DKIM. Ces notes peuvent être utiles pour des raisons de documentation ou pour aider les administrateurs à comprendre ou à gérer le fonctionnement de DKIM. Les notes incluses dans n= ne sont pas interprétées par les programmes et n'affectent pas le fonctionnement du DKIM.<br>
- **Clé publique (base64) (p=)**: Utilisé pour renseigner les données de clé publique DKIM, qui sont encodées en base64. Ce tag est obligatoire dans la signature DKIM et permet aux destinataires de la signature de récupérer la clé publique nécessaire pour vérifier l'authenticité du message signé.<br>
- **Révoquer la clé publique** : si une clé publique DKIM a été révoquée (par exemple en cas de compromission de la clé privée), une valeur vide doit être utilisée pour le tag "p=", indiquant que cette clé publique n'est plus valide. Les destinataires doivent alors retourner une erreur pour toute signature DKIM faisant référence à une clé révoquée.<br>
- **Type de service (s=)**: La balise "s=" (Service Type) est optionnelle et n'est pas présente par défaut. Elle permet de spécifier le ou les types de services au(x)quel(s) cet enregistrement DKIM s'applique. Les types de services sont définis en utilisant une liste de mots-clés séparés par des deux-points ":". Le destinataire doit ignorer cet enregistrement si le type de service approprié n'est pas répertorié. La balise "s=" est destinée à restreindre l'utilisation des clés pour d'autres fins, dans le cas où l'utilisation du DKIM serait définie pour d'autres services à l'avenir. Les types de services actuellement définis sont "*" (tous les types de services), "email" (courrier électronique).<br>
- **Mode test (t=y)**: permet aux propriétaires du nom de domaine de tester la mise en place du DKIM sans risquer de voir les messages rejetés ou marqués comme SPAM si la vérification de signature DKIM échoue. Lorsque le flag "t=y" est utilisé, le destinataire ne doit pas traiter différemment les messages signés en mode de test et les messages non signés. Cependant, le destinataire peut suivre le résultat du mode de test pour aider les signataires.<br>
- **Sous-domaines (t=s)**: permet de restreindre l'utilisation de la signature DKIM au nom de domaine uniquement (*exemple*: @mydomain.ovh) ou de permettre l'envoi depuis le nom de domaine et ses sous-domaines (*exemple*: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh, etc.).

#### **Enregistrement TXT** <a name="txt-record"></a>

Il s'agit du type d'enregistrement natif utilisé pour paramétrer le DKIM dans la zone DNS de votre nom de domaine, mais il demande de bien maitriser sa syntaxe pour le compléter.

Ce type de paramétrage DKIM est conseillé lorsque les informations à saisir vous ont été communiquées par le fournisseur du service e-mail.

Pour bien comprendre la composition de l'enregistrement DKIM, je vous invite à consulter la partie précédente de ce guide [«l'enregistrement DKIM»](#dkim-record)

*Exemple d'un enregistrement DKIM*

sous-domaine:
```
selector-name._domainkey.mydomain.ovh.
```

cible:
```
"v=DKIM1; k=rsa; t=s; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp89XeoEG9xr97E7ha3XzsAh2oaYhuvcC24EIYbKJdv//WMjKEWBZwKfQs3SOY1lKjjSTkG3lexhWzKvtBHgAQ2RCC+6hx0d96Tp2ihXj+rkIBnmzWB4eLUZRVyjS9YctQBf/YO+LRp24oAOsusinERwE1/0wXf8ot6QMC0qPxMfY8d0nVCEFfI5" "w/tGjlY2QhVASNTryr8MbHFz09f32luBUUJEw6GVgpVgkZjU0cF213pQKeZ4yp30K4620Pe5BSQuqJbOOUCnuzFNNyc7HfhF8Adx06BycHVIbmuuBqe5awoPO7a3aflpHjJW8w+f7wtCH70N6QCBNciSO6K7/QIDAQAB;"
```


#### **Enregistrement CNAME** <a name="cname-record"></a>

L'enregistrement CNAME est un alias, cela signifie que la valeur cible renvoie vers une URL qui fournira elle-même l'enregistrement DKIM au serveur qui interrogera l'enregistrement CNAME. Ce type d'enregistrement CNAME pour paramétrer le DKIM est fréquent dans le cadre de l'utilisation d'un serveur e-mail Microsoft.

C'est précisément ce type d'enregistrement utilisé pour activer le DKIM sur un nom de domaine déclaré pour une offre Exchange OVHcloud.



### Tester votre DKIM <a name="test-dkim"></a>

Nous vous conseillons d'envoyer un e-mail depuis un compte de votre plateforme Exchange vers une adresse e-mail qui vérifie la signature DKIM lors de la réception.

Voici ce que vous pourrez trouver dans l'en-tête de l'e-mail reçu :

<pre class="console"><code>
ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: <test-dkim@mydomain.ovh>
</code></pre>

Pour récupérer l'en-tête d'un e-mail, consulter notre guide [«Récupérer l'en-tête d'un e-mail»](pages/web/emails/diagnostic_headers).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).