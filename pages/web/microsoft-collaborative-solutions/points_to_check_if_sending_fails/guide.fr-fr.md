---
title: Que verifier lors d’un probleme d’envoi ou de reception avec un compte Exchange ?
legacy_guide_number: 2034
slug: exchange-que-verifier-lors-dun-probleme-denvoi-ou-de-reception
excerpt: Vous constatez un souci concernant l’envoi ou la reception de vos e-mails ? Differents tests sont realisables a votre niveau afin d’effectuer les premieres verifications. Ces tests sont expliques ci-dessous.
section: Exchange Divers
---


## Le Webmail (OWA)
Le webmail est une page web vous permettant de consulter et d'envoyer des e-mails, cela correspond à une connexion directe vers votre serveur. Si la connexion au webmail ne fonctionne pas (sauf si cela est dû à un mauvais mot de passe), votre client de messagerie ne peut fonctionner.

Le lien d'accès au webmail peut être différent selon l'offre Exchange :

- Pour une offre Hosted Exchange : [ex.mail.ovh.net](https://ex.mail.ovh.net){.external} ou [ex2.mail.ovh.net](https://ex2.mail.ovh.net){.external}
- Pour les offres Private Exchange, remplacez le serveur ex.mail.ovh.net par le nom du certificat SSL de votre serveur.

Une fois connecté au webmail, réalisez un test d'envoi et de réception afin de vérifier que depuis celui-ci tout est fonctionnel.

Un guide concernant l'utilisation du [Webmail]({legacy}1918){.ref} est disponible.

Si le test est fonctionnel, vérifiez la configuration de votre logiciel de messagerie via les  [guides](https://www.ovh.com/fr/emails/hosted-exchange/guides/){.external} mis à votre disposition.


### Vous ne pouvez pas vous connecter au webmail ?
Assurez-vous d'avoir le bon mot de passe. Si nécessaire, il vous est possible de le modifier depuis votre [espace client](https://www.ovh.com/manager/web){.external} dans la section exchange puis compte e-mail.

Cliquez sur le stylo noir à droite du compte concerné. Vous pourrez mettre à jour le mot de passe et de nouveau tester la connexion au webmail.



> [!success]
>
> Cette action nécessite de mettre le mot de passe à jour dans chaque
> périphérique ou le compte Exchange est configuré.
> 


## Intervention sur l'infrastructure OVH
Vous ne pouvez pas vous connecter au webmail suite à la modification du mot de passe ou la page ne répond pas : il est important de vérifier nos interventions (mise à jour de l'infrastructure, incidents).

Voici le lien de notre page ["Travaux"](http://travaux.ovh.net/?project=3&status=all&perpage=50){.external}.

Vous pourrez vérifier si une tâche est ouverte concernant Exchange à ce niveau.


## La validite des services

### Le domaine
Il est nécessaire que votre nom de domaine soit valide afin de pouvoir envoyer ou recevoir des e-mails via votre adresse Exchange.

- Votre domaine est enregistré chez OVH :

Vous pouvez vérifier ce point directement depuis votre [espace client](https://www.ovh.com/manager/web){.external}.

Une fois connecté, sélectionnez votre nom de domaine (menu de gauche), vous pourrez vérifier sa date de validité.

Si celui-ci n'est plus valide, il faut le renouveler pour que l'adresse Exchange puisse de nouveau fonctionner.

- Votre domaine est enregistré chez un autre prestataire :

Dans ce cas, il sera nécessaire de vérifier sa validité auprès du prestataire concerné.


### Le compte Exchange
Une fois la vérification de votre domaine effectuée et celui-ci valide, il est nécessaire de vérifier que votre compte exchange ne soit pas suspendu.

Connectez-vous à votre [espace client](https://www.ovh.com/manager/web){.external} puis sélectionner votre service exchange (menu de gauche) et section compte e-mail.

Dans la colonne "Etat" s'il apparaît "suspendu", cela indique que votre compte n'est plus actif.

Dans ce cas, vous pouvez contacter notre support au 1007 afin de renouveler votre offre Exchange.


## Le pointage du domaine (reception uniquement)
Concernant un souci de réception, il est nécessaire de vérifier le pointage de votre domaine.

Vérifiez que votre nom de domaine utilise correctement les serveurs e-mail (enregistrement de type MX) de l'offre e-mail Exchange OVH.

Plusieurs possibilités de pointages sont possibles :

- Exchange Hosted sans antispam (cohabitation Exchange et pop/imap) : ex.mail.ovh.net
- Exchange Hosted avec antispam (tous les comptes sont de type Exchange) : mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net
- Exchange Private sans antispam(comptes Exchange avec compte pop/imap) : Le nom du certificat SSL de votre serveur
- Exchange Private avec antispam (tous les comptes sont de type Exchange) : mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net

La vérification du pointage se réalise au niveau de la zone DNS de votre domaine. Si vous pointez sur des DNS externes, il faudra vérifier la zone chez votre prestataire.

Si vous utilisez les serveurs DNS OVH, il faut dans ce cas depuis votre [espace client](https://www.ovh.com/manager/web){.external} sélectionner votre domaine puis cliquer sur l'onglet "Zone DNS". Vérifiez ici les enregistrements de type MX.


## Le probleme persiste ?
Notre support reste disponible de 08h à 20h00 du lundi au vendredi et de 09h00 à 17h00 le samedi. Vous pouvez composer le 1007 ou nous envoyer un e-mail depuis votre [espace client](https://www.ovh.com/manager/web){.external}, section "Assistance".