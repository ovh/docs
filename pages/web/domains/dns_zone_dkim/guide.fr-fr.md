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

Lorsque vous envoyez un e-mail depuis **contact@mydomain.ovh**, une signature cryptée à l'aide d'une clé privée (private key) est ajoutée dans l'entête de l'e-mail. Le destinataire **recipient@otherdomain.ovh** pourra déchiffrer cette signature avec la clé publique (Public key) visible dans la zone DNS de **mydomain.ovh**. La signature est créée à partir du contenu de l'e-mail envoyé, cela signifie que si l'e-mail est modifié lors du transit, la signature ne correspondra pas avec le contenu : ce qui provoquera l'échec de la vérification DKIM sur le serveur destinataire.

![email](images/email-dns-conf-dkim.png){.thumbnail}

**Sommaire**

- [Comment DKIM fonctionne-t-il?](#how-dkim-work)
    - [Le hachage](#hash)
    - [La cryptographie asymétrique](#crypto)
    - [Comment le hachage et la cryptographie asymatrique sont utilisés pour DKIM ?](#crypto-and-hash)
    - [Pourquoi a-t-on besoin de configurer les serveurs DNS ?](#dns-and-dkim)
- [Configurer DKIM pour une offre e-mail Exchange OVHcloud](#internal-dkim)
- [Configurer DKIM pour une offre e-mail hors de votre compte OVHcloud](#external-dkim)

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

#### **Comment le hachage et la cryptographie asymatrique sont utilisés pour DKIM ?** <a name="crypto-and-hash"></a>

Depuis la plateforme e-mail, DKIM va utiliser le hachage pour créer une signature à partir de certains éléments de [l'entête de l'e-mail](https://docs.ovh.com/fr/emails/recuperation-des-entetes-e-mails/#comprendre-le-contenu-dun-en-tete) et du corps de l'e-mail (contenu de l'e-mail).

La signature est ensuite cryptée avec la clé privé en utilisant la cryptographie asymétrique.

#### **Pourquoi a-t-on besoin de configurer les serveurs DNS ?** <a name="dns-and-dkim"></a>

Pour que le destinataire puisse vérifier la signature DKIM de l'expéditeur, il aura besoin des paramètres DKIM et surtout de la clé publique pour décrypter. La [zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) d'une nom de domaine est publique, c'est pourquoi un enregistrement DNS est ajouté pour transmettre la clé publique et les paramètre DKIM au destinataire.

### Configurer DKIM pour une offre e-mail Exchange OVHcloud

#### **La gestion du nom de domaine est dans le même espace client OVHcloud que la plateforme Exchange
Si le client a une zone DNS hébergée chez OVHcloud, il n'aura pas à modifier sa zone manuellement.
Si le client a une zone DNS externe, il va devoir ajouter un champ dans celle-ci.

Rendez-vous sur api.ovh.com, puis sur "/email/exchange"

##### **Les différents états du DKIM** 

`Todo` : La tâche va être lancée. Le statut passera en `ready` si les enregistrements DNS sont bien présents.

`WaitingRecord` : Les enregistrements DNS sont en attente de configuration dans la zone du domaine. Une vérification régulière est faite pour voir si l'enregistrement DNS  est présent.

`Ready` : Les enregistrements DNS sont présents dans la zone. Le DKIM peut être activé (prêt à passer au statut `Inproduction`).


POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable

Enabling : Statut qui va activer le DKIM (Délai : 1 minute environ)

Prérequis : Le DKIM doit être en statut "Ready" avant de pouvoir l'activer.

`InProduction` : Le DKIM est en production, il va signer les e-mails sortants de votre domaine !

POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable

`Disabling` : Statut qui va désactiver le DKIM (Délai : 1 minute environ)

Prérequis : Le DKIM doit être en statut "inProduction" avant de pouvoir le désactiver.

`Deleting` : En cours de suppression

-----

 
#### Activons le DKIM pour le domaine beaumont.ovh et l'Hosted Exchange hosted-ca663554-24 : 

1) Récupérez le nom des sélecteurs liés au domaine :

GET  /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector

Exemple de résultat :

```
[
- "ovhex123456-selector1"
- "ovhex123456-selector2"
]
```
 
2) Créez les sélecteurs pour ce domaine :

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>

- autoEnableDKIM : si la case est cochée, le DKIM sera directement en statut "InProduction" au lieu de rester en statut "ready". Vous n'aurez donc pas à l'activer manuellement comme expliqué à l'étape 4.

- configureDkim : si la case est cochée, le champ CNAME sera automatiquement ajouté dans votre zone DNS si celle-ci est chez OVHcloud.

Exemple de résultat :

```
{
  "status": "todo",
  "function": "addExchangeDomainDKIM",
  "id": 107924143,
  "finishDate": null,
  "todoDate": "2023-04-19T11:32:07+02:00"
}
```

{
  "status": "inProduction",
  "recordType": "CNAME",
  "customerRecord": "ovhex763062-selector1._domainkey.guides.ovh",
  "selectorName": "ovhex763062-selector1",
  "targetRecord": "ovhex763062-selector1._domainkey.1500.ab.dkim.mail.ovh.net",
  "lastUpdate": "2023-04-19T11:44:38+02:00",
  "taskPendingId": 0,
  "header": "from;to;subject;date",
  "cnameIsValid": true
}

3) Vérifiez le champ CNAME à ajouter dans la zone DNS :

(si la zone DNS n'est pas gérée par OVHcloud ou que vous n'avez pas coché la case à l'étape précédente)

> [!api]
>
> @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>

- Si vous voyez "status : "waitingRecord" alors que les enregistrements DNS sont bien présents dans la zone, cela signifie que le robot n'est pas encore passé pour vérifier les enregistrements DNS : ressayez dans 5 minutes.

- Si vous voyez "Status : Ready" c'est parfait, on peut activer le DKIM !

Vous devriez voir ce champ CNAME dans la zone DNS : 

4) Activez le DKIM !

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>

La task sera en todo et sera finalisée assez rapidement (vous pouvez vérifier qu'elle est bien en "Done" dans MSTools).

NB : Cette étape n'est pas nécessaire si vous avez coché la case lors de l'étape 2.

5) Vérifiez que le DKIM est bien en état "InProduction"

> [!api]
>
> @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>

Il est normalement maintenant dans le statut "InProduction" !

Félicitations, vous pouvez maintenant envoyer un e-mail depuis l'offre mail rattachée à votre domaine !


Voici ce que vous pourrez trouver dans l'entête de l'e-mail reçu :

<pre class="console"><code>
ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: <test-dkim@mydomain.ovh>
</code></pre>






## Aller plus loin

[Editer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
