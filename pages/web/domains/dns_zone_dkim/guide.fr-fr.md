---
title: Configurer un enregistrement DKIM 
slug: dkim-record
excerpt: Découvrez comment configurer un enregistrement DKIM sur votre nom de domaine et votre plateforme e-mail OVHcloud
section: DNS et zone DNS
order: 06
updated: 2022-09-12
---

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

- [Comment DKIM fonctionne-t-il?](#how-dkim-work)
- [Configurer DKIM pour une offre e-mail hors de votre compte OVHcloud](#external-dkim)
- [Configurer DKIM pour une offre e-mail OVHcloud](#external-dkim)

### **Comment DKIM fonctionne-t-il ?** <a name="how-dkim-work"></a>

Pour bien comprendre pourquoi DKIM permet de sécuriser vos échanges d'e-mail, il faut comprendre comment il fonctionne. DKIM fait appel au «**hachage**» et à la «**cryptographie asymétrique**» pour créer une signature sécurisée. La **plateforme e-mail** et la **Zone DNS** de votre nom de domaine vont aider à transmettre les informations DKIM à vos destinataires.

#### **Le hachage** <a name="hash"></a>

Le principe d'une **fonction de hachage** est de générer une **signature** (aussi appelé empreinte) à partir d'une donnée d'entrée. Son intérêt est de créer en sortie une suite de caractères fixe quelque soit la quantité de donnée en entrée. 

Sur le diagrame suivant, vous constaterez que la sortie (Output) sera toujours composée de 32 caractères en utilisant un algorithme de hachage MD5(**M**essage **D**igest **5**), alors que le texte d'entré (Input) peut varier en taille. La moindre variation de cractère dans la donnée d'entrée change complètement le hachage en sortie. Ce qui rend la signature en sortie imprévisible et infalsifiable. 

![hash](images/dns-dkim-hash01.png){.thumbnail}

La fonction de hachage est utile lorsque vous souhaitez vérifier l'intégrité d'un message. En effet deux données qui peuvent être d'apparence très proches présente une valeur de hachage complètement différente.

#### **La cryptographie asymétrique** <a name="crypto"></a>

La **cryptographie**, comme son nom l'indique, à pour but de crypter les données qu'on lui donne. « **Asymétrique** » car la clé de cryptage n'est pas la même que la clé de décryptage, contrairement à une cryptographie symétrique qui utilisera la même clé pour crypté et décrypté.

Dans la cryptographie asymétrique, on utilise une **clé publique** et une **clé privée**. La clé publique est visible de tous, la clé privée est connue et utilisée uniquement par sont propriétaire. Il existe deux utilisations en cryptographie asymétrique.

- **la donnée d'entrée est cryptée avec la clé publique et décryptée par celui qui possède la clé privée** : vous souhaitez qu'une personne vous transmette des données de manière sécurisée. vous transmettez votre clé publique sans vous soucier que quelqu'un la récupère, cette personne cryptera ses données avec votre clé publique. les données cryptées ne pourront être décryptées uniquement qu'avec le propriétaire de la clé privée.

- **la donnée d'entrée est cryptée par le propriétaire de la clé privée et décryptée par la clé publique** : vous souhaitez authentifier un échange de donnée. Par exemple, Vos destinataires souhaitent s'assurer que vous êtes l'auteur du message que vous leur transmettez. Dans ce cas, vous allez crypter votre message avec votre clé privé, celui-ci ne pourra être décrypté que par la clé publique que vous aurez transmis à tout le monde. Ce qui garantie à vos destinataire l'authenticité de votre message. En effet, un message décrypté par la clé publique ne peut provenir uniquement que du propriétaire de la clé privé.

#### **Comment le hachage et la cryptographie asymatrique sont utilisé pour DKIM ?** 

Depuis la plateforme e-mail, DKIM va utiliser le hachage pour créer une signature à partir de certains éléments de [l'entête de l'e-mail](https://docs.ovh.com/fr/emails/recuperation-des-entetes-e-mails/#comprendre-le-contenu-dun-en-tete) et du corps de l'e-mail (contenu de l'e-mail).

La signature est ensuite cryptée avec la clé privé en utilisant la cryptographie asymétrique.

#### **Pourquoi a-t-on besoin des serverus DNS ?**

Pour que le destinataire puisse vérifier la signature DKIM de l'expéditeur, il aura besoin des paramètres DKIM et surtout de la clé publique. La [zone DNS](docs.ovh.com/fr/domains/editer-ma-zone-dns/) d'une nom de domaine est publique, c'est pourquoi DKIM utilise un enregistrement dans la zone DNS pour transmettre la clé publique et les paramètre DKIM au destinataire 

#### Pourquoi DKIM nécessite 

Lorsque vous envoyez un e-mail depuis **contact@mydomain.ovh**, une signature cryptée à l'aide d'une clé privée (private key) est ajoutée dans l'entête de l'e-mail. Le destinataire **recipient@otherdomain.ovh** pourra déchiffrer cette signature avec la clé publique (Public key) visible dans la zone DNS de **mydomain.ovh**. La signature est créée à partir du contenu de l'e-mail envoyé, cela signifie que si l'e-mail est modifié lors du transit, la signature ne correspondra pas avec le contenu : ce qui provoquera l'échec de la vérification DKIM sur le serveur destinataire.

![email](images/email-dns-conf-dkim.png){.thumbnail}





 
Si le client a une zone DNS hébergée chez OVH, il n'aura pas à modifier sa zone manuellement.
Si le client a une zone DNS externe, il va devoir ajouter un champ dans celle-ci.
 

Rendez-vous sur api.ovh.com, puis sur "/email/exchange"

 
Les différents états du DKIM :

Todo = La task va être lancée. Le statut passera en ready si les champs DNS sont bien présents.

WaitingRecord : Indique qu'on attend que les champs DNS soient présents dans la zone du domaine. Un check va être fait régulièrement (5 min) pour voir si le champ est présent.

Ready = OK, les champs DNS sont bien présents. Le DKIM peut être activé (prêt à passer au statut "Inproduction").

 

POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable

Enabling = Statut qui va activer le DKIM (Délai : 1 minute environ)

Prérequis : Le DKIM doit être en statut "Ready" avant de pouvoir l'activer.

 

InProduction : Le DKIM est en production, il va signer les e-mails sortants de votre domaine !

 

POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable

Disabling = Statut qui va désactiver le DKIM (Délai : 1 minute environ)

Prérequis : Le DKIM doit être en statut "inProduction" avant de pouvoir le désactiver.

 

Deleting = En cours de suppression

-----

 
Activons le DKIM pour le domaine beaumont.ovh et l'Hosted Exchange hosted-ca663554-24 : 
1) Récupérez le nom des sélecteurs liés au domaine :

GET  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector

Resultats :
- "ovhex670797-selector1"
- "ovhex670797-selector2"

 
2) Créez les sélecteurs pour ce domaine :

POST  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim

- autoEnableDKIM : si la case est cochée, le DKIM sera directement en statut "InProduction" au lieu de rester en statut "ready". Vous n'aurez donc pas à l'activer manuellement comme expliqué à l'étape 4.

- configureDkim : si la case est cochée, le champ CNAME sera automatiquement ajouté dans votre zone DNS si celle-ci est chez OVHcloud.

 
3) Vérifiez le champ CNAME à ajouter dans la zone DNS :

(si la zone DNS n'est pas gérée par OVHcloud ou que vous n'avez pas coché la case à l'étape précédente)
GET  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}

- Si vous voyez "status : "waitingRecord" alors que les champs DNS sont bien présents dans la zone, cela signifie que le robot n'est pas encore passé pour vérifier les champs DNS : ressayez dans 5 minutes.

- Si vous voyez "Status : Ready" c'est parfait, on peut activer le DKIM !

Vous devriez voir ce champ CNAME dans la zone DNS : 

 
4) Activez le DKIM !

POST  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable

La task sera en todo et sera finalisée assez rapidement (vous pouvez vérifier qu'elle est bien en "Done" dans MSTools).

NB : Cette étape n'est pas nécessaire si vous avez coché la case lors de l'étape 2.

 
5) Vérifiez que le DKIM est bien en état "InProduction"

GET  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}

Il est normalement maintenant dans le statut "InProduction" !

Félicitations, vous pouvez maintenant envoyer un e-mail depuis l'offre mail rattachée à votre domaine !

 

Voici ce que vous trouverez dans l'entête du mail reçu :


















Le SPF (Sender Policy Framework) permet au serveur qui reçoit un e-mail de s’assurer que ce dernier a bien été envoyé depuis un serveur de confiance. 

- Il permet de prévenir les potentielles usurpations d'identité venant d'adresses e-mail utilisant votre nom de domaine (spoofing). 
- Il permet également d'authentifier les e-mails que vous envoyez.
- Le SPF s'ajoute en tant qu'enregistrement dans la zone DNS du nom de domaine.

Cette action est rendue possible grâce aux informations renseignées dans un enregistrement SPF, qui est en réalité un enregistrement TXT dans la zone DNS. On peut y retrouver :

- **des adresses de serveurs et/ou plusieurs adresses IP** : ceci permettra de les identifier en tant que sources d'envoi légitimes ;
- **un qualifieur** : il permettra de préconiser au serveur réceptionnant les e-mails une manière de réagir à un message considéré comme non légitime, c'est-à-dire provenant d'une source qui n'est pas listée.

Vous devrez donc vous assurer de mettre dans l'enregistrement SPF les sources d'envoi que vous utilisez pour émettre vos e-mails avec votre nom de domaine. Ces sources peuvent être votre propre serveur e-mail, celui de votre prestataire ou l'une des solutions e-mail d'OVHcloud.

> **Exemple** <br>
> Vous envoyez un e-mail depuis votre adresse `contact@mydomain.ovh`.
> Seul le serveur sortant **A** (Outgoing Mail Server **A**) est déclaré dans l'enregistrement SPF du nom de domaine `mydomain.ovh`.
> Lorsque le serveur de réception (Inbound Mail Server) reçoit l'e-mail, celui-ci va lire la zone DNS de votre nom de domaine `mydomain.ovh` pour inspecter l'enregistrement SPF.
>
> - Le serveur sortant **A** (Outgoing Mail Server **A**) étant bien listé dans l'enregistrement SPF, alors l'e-mail sera transmis normalement dans la boite de réception du destinataire.
> - Le serveur sortant **B** (Outgoing Mail Server **B**) n'étant pas listé dans l'enregistrement SPF, alors l'e-mail envoyé depuis ce serveur sera marqué comme suspect dans la boite mail de réception. Cela peut se traduire par une mention `[SPAM]` dans l'objet de l'e-mail, le placement dans un dossier `Courrier indésirable`, ou une suppression directe, selon les règles du serveur de réception.
>
> ![domain](images/spf_records_diagram.png){.thumbnail}


> [!primary]
>
> Le DKIM n'est qu'une indication fournie aux serveurs recevant des e-mails, dont les vôtres. Il appartient à ces derniers d'appliquer ou non ce qui est spécifié dans l'enregistrement SPF des noms de domaines pour lesquels ils reçoivent des messages.
>

**Découvrez comment configurer un enregistrement SPF à votre nom de domaine chez OVHcloud.**



## En pratique

### Vérifier votre configuration SPF actuelle

Si votre domaine utilise la configuration OVHcloud, vous pouvez vérifier si un enregistrement SPF est déjà configuré pour ce dernier. Pour cela, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Dans la section `Noms de domaine`{.action}, sélectionnez le nom de domaine concerné. Cliquez sur l'onglet `Zone DNS`{.action}.

Un tableau devrait apparaître. Ce dernier affiche la zone DNS de votre nom de domaine chez OVHcloud. Elle est constituée de plusieurs enregistrements, tous symbolisés par une ligne du tableau.

> [!primary]
>
> Si votre domaine est déposé chez OVHcloud, vous pouvez vérifier si ce dernier utilise bien les serveurs DNS OVHcloud depuis l'onglet `Serveurs DNS`{.action}.
>

Dans le tableau, pour retrouver la ligne correspondante au SPF OVHcloud, un filtre d'affichage peut être utilisé. Ce dernier pouvant apparaître à deux endroits différents, sélectionnez dans l'enregistrement de filtrage `TXT`{.action} ou `SPF`{.action}  en passant de l'un à l'autre si nécessaire. Dès lors, l'affichage du tableau peut être différent.

- **Un SPF correspondant aux informations OVHcloud de votre offre est affiché** : votre domaine utilise déjà la configuration OVHcloud. Si vous ne souhaitez plus l'utiliser, vous devrez la modifier lors de l'étape suivante.

- **Un SPF ne correspondant pas aux informations OVHcloud est affiché** : votre domaine utilise déjà un SPF personnalisé. Sa modification ou le choix de la configuration OVHcloud se font à l'étape suivante. Si votre configuration est erronée, vous devrez la modifier.

- **Aucun SPF ne s'affiche dans la colonne cible** : vérifiez au préalable si l'enregistrement n'est pas créé en tant que SPF ou TXT en modifiant le filtrage. Si aucun SPF ne s'affiche, qu'importe le filtrage, votre domaine n'en utilise pas. Vous pourrez en ajouter un lors de l'étape suivante.

> [!primary]
>
> Un SPF se compose toujours de la forme suivante : "v=spf1 `sources` `qualifieur`". Par exemple, le SPF OVHcloud est : "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configurer l'enregistrement SPF

Pour ajouter un enregistrement SPF dans la configuration OVHcloud de votre nom de domaine, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Rendez-vous dans la section `Noms de domaine`{.action}, cliquez sur le domaine concerné, puis rendez-vous ensuite dans l’onglet `Zone DNS`{.action}.

Pour ajouter un enregistrement SPF, cliquez sur `Ajouter une entrée`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Dans la fenêtre qui s’affiche, plusieurs enregistrements DNS vous sont proposés. Concernant l’ajout d’un SPF, deux possibilités s’offrent à vous :

- [Ajouter un enregistrement TXT](#txtrecord) : pour les utilisateurs avertis ou disposant déjà de l'enregistrement complet. Par exemple, votre fournisseur de solution e-mail vous transmet la valeur.
- [Ajouter un enregistrement SPF](#spfrecord) : pour les utilisateurs ne possédant pas l'intégralité de l'enregistrement. Par exemple, vous disposez uniquement d'une adresse IP ou du nom d'hôte du serveur e-mail.
- [Ajouter un enregistrement SPF OVHcloud](#spfrecordovhcloud) **et utiliser la configuration OVHcloud**: pour les utilisateurs possédant uniquement les offres e-mail OVHcloud sur leur nom de domaine (Hors [Private Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/) et Exchange Provider).

![domain](images/spf_records_add_entry.png){.thumbnail}


#### Ajouter un enregistrement SPF <a name="spfrecord"></a>

Vous avez choisi l'enregistrement `SPF`{.action}

L'assistant de configuration vous permettra de personnaliser au fur et à mesure votre SPF. Pour ce faire, vous devrez répondre aux différentes questions et apporter les informations nécessaires. Certains éléments demandés peuvent s'adresser à des utilisateurs avertis.

Nous allons les aborder progressivement.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Détails|Description|
|---|---|
|Sous-domaine|Complétez si le SPF doit s'appliquer à un sous-domaine de votre domaine. Cela s'applique si vous envoyez des e-mails depuis un sous-domaine.|
|TTL|Il s'agit du temps de propagation qui s'appliquera à la configuration de cet enregistrement DNS.|
|Autoriser l'IP à envoyer des e-mails| À cocher si votre site internet et vos adresses e-mail sont hébergés sur un serveur utilisant la même adresse IP (par exemple sur votre serveur dédié).|
|Autoriser les serveurs MX à envoyer des e-mails|À cocher si les serveurs réceptionnant vos e-mails peuvent également en envoyer.|
|Autoriser tous les serveurs dont le nom se termine par votre domaine à envoyer des e-mails|Option à utiliser avec précaution, car elle permet de légitimer de manière très large les sources d'envoi utilisant votre nom de domaine.|


Concernant la question : "**D'autres serveurs envoient-ils le courrier avec votre domaine ?**", plusieurs éléments peuvent être complétés :

|Détails|Description|
|---|---|
|a|Renseignez ici des noms de domaine. Cela légitimera les serveurs hébergeant les sites de ces derniers à envoyer des e-mails avec vos adresses.|
|mx|Renseignez ici les serveurs qui réceptionnent vos e-mails (serveurs MX) si ces derniers peuvent également en envoyer. Ils seront ainsi identifiés comme une source d'envoi légitime.|
|ptr|Renseignez ici des noms d'hôtes dont le *reverse* est fonctionnel (grâce à un enregistrement PTR dans la zone DNS). Ils seront ainsi identifiés comme une source d'envoi légitime.|
|ip4|Indiquez les IP ou les plages d'IP (IPv4) autorisées à envoyer des e-mails avec vos adresses.|
|ip6|Indiquez les IP ou les plages d'IP (IPv6) autorisées à envoyer des e-mails avec vos adresses.|
|include|Renseignez ici des noms de domaine incluant leurs propres règles SPF. Cela permettra ces dernières pour votre propre domaine. Par exemple, OVHcloud utilise cette méthode dans sa configuration SPF :  "v=spf1 include:mx.ovh.com ~all", ce qui permet à OVHcloud de gérer le SPF de mx.ovh.com et de permettre à ses clients de l'utiliser.|

Enfin, concernant la question : "**Est-ce que les informations que vous avez indiquées décrivent tous les hôtes qui envoient du courrier avec votre domaine ?**", trois choix sont possibles :

|Détails|Description|
|---|---|
|Oui, je suis sûr|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les rejeter s'ils proviennent d'une source non légitime (non présente dans votre SPF).|
|Oui, mais utiliser le safe mode|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les accepter s'ils proviennent d'une source non légitime (non présent dans votre SPF), mais de les taguer afin qu'ils soient identifiables comme potentiellement non légitimes (en tant que "spam" par exemple).|
|Non|Préconisez aux serveurs réceptionnant des e-mails provenant de votre domaine de les accepter s'ils proviennent d'une source non légitime (non présente dans votre SPF), sans action particulière. L'entête de l'e-mail sera cependant incrémenté.|

Une fois les informations complétées, cliquez sur `Suivant`{.action}, assurez-vous que les informations affichées soient bien correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

#### Utiliser l'enregistrement SPF OVHcloud <a name="spfrecordovhcloud"></a>

Vous avez choisi l'enregistrement `SPF`{.action} et souhaitez appliquer la configuration OVHcloud. Celle-ci permet d'inclure l'ensemble des serveurs e-mail sortants OVHcloud pour les offres e-mail suivantes :

- MX Plan seul ou inclus dans une offre d’[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) .
- [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/).
- [Hosted Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/).

Cliquez sur le bouton `Utiliser le SPF pour mutualisé OVHcloud`{.action} en haut de la fenêtre d'assistance. Les informations relatives au SPF OVHcloud s'afficheront. Cliquez sur le bouton `Valider`{.action} pour réaliser la modification.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}


> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

#### Ajouter un enregistrement TXT <a name="txtrecord"></a>

Parmi les enregistrements proposés, cliquez sur `TXT`{.action}, puis complétez les informations demandées. Dans la zone `Valeur`{.action}, renseignez le SPF que vous souhaitez utiliser.

Pour finaliser l'action, cliquez sur `Suivant`{.action}. Assurez-vous que les informations affichées sont correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

### Modifier un enregistrement SPF

Pour modifier le SPF dans la configuration OVHcloud de votre domaine, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Rendez-vous dans la section `Noms de domaine`{.action}, cliquez sur le domaine concerné puis rendez-vous ensuite dans l’onglet `Zone DNS`{.action}.

Le tableau affiche la configuration OVHcloud de votre domaine. Chaque ligne correspond à un enregistrement DNS. Repérez votre enregistrement TXT ou SPF dans ce tableau et cliquez sur le bouton `...`{.action} afin d'éditer l'entrée.

### Configuration SPF OVHcloud pour les offres e-mail mutualisées <a name="ovhcloudspfvalue"></a>

La configuration SPF OVHcloud générale s'applique aux solutions ci-dessous :

- MX Plan seul ou inclus dans une offre d’[hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).
- [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/).
- [Hosted Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/).

La configuration est la suivante :

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

### Configuration SPF OVHcloud pour Exchange Provider

Pour l'offre Exchange Provider, la configuration est la suivante :

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

### Configuration SPF OVHcloud pour Private Exchange 

Pour l'offre Private Exchange, il est nécessaire de renseigner les adresses IP de votre serveur e-mail. Pour cela, utilisez l'argument `ip4` pour renseigner l'adresse IP de votre serveur Private Exchange.

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 ~all"
```

Si vous utilisez également [une offre e-mail mutualisée](#ovhcloudspfvalue), vous pouvez ajouter l'argument `include:mx.ovh.com` à l'enregistrement ci-dessus, ce qui donnera la valeur suivante :

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 include:mx.ovh.com ~all"
```

> [!primary]
> 
> Pour récupérer l'adresse IP du serveur Private Exchange, cliquez sur `Microsoft`{.action} puis sur `Exchange`{.action}. Cliquez enfin sur le nom du service Private Exchange concerné.
>
> Dans l'onglet `Informations générales`{.action}, cliquez sur le `A` dans la partie `Diagnostic serveur`. Dans la fenêtre qui s'affiche, relevez la valeur.
>
> ![domain](images/spf_records_ip.png){.thumbnail}

## Aller plus loin

[Editer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
