---
title: 'Gérer la politique de sécurité d''un service e-mail'
slug: gerer-politique-de-securite-mot-de-passe
excerpt: 'Découvrez comment gérer la politique de sécurité de votre service e-mail'
section: 'Premiers pas avec Exchange'
order: 6
---

**Dernière mise à jour le 09/06/2020**

## Objectif

Les services e-mail d'OVHcloud permettent de bénéficier d’adresses e-mail professionnelles. Afin de préserver cet environnement, vous avez la possibilité de gérer des paramètres globaux concernant la sécurité de vos comptes e-mail.

**Découvrez comment gérer la politique de sécurité de votre service e-mail.**

## Prérequis

- Disposer d'une [offre e-mail OVHcloud](https://www.ovh.com/fr/emails/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager), partie `Web`{.action}.

## En pratique

La gestion de la politique de sécurité de votre service e-mail peut interagir sur quatre aspects :

- renforcer la sécurité des comptes e-mail lorsque les utilisateurs essaient de se connecter ;
- complexifier la sécurité des mots de passe des comptes de votre service e-mail ;
- renforcer la vérification des messages entrants sur nos serveurs et à destination de vos adresses e-mail (uniquement pour les comptes [Exchange](https://www.ovh.com/fr/emails/hosted-exchange/){.external});
- définir comment les messages dits « indésirables » s'afficheront dans vos boites aux lettres (uniquement pour les comptes [Exchange](https://www.ovh.com/fr/emails/hosted-exchange/){.external}).

Pour accéder à la politique de sécurité de votre service e-mail, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et assurez-vous de vous situer dans la section `Web`{.action}. 

|E-mails et E-mail Pro|Exchange| 
|---|---| 
|Cliquez sur `Emails`{.action} ou `E-mail Pro`{.action} dans la colonne de gauche et sélectionnez l'offre concernée. Cliquez sur l'onglet `Plus` puis sur `Gérer la politique de sécurité`{.action}|Cliquez sur `Microsoft`{.action} dans la colonne de gauche, puis sur `Exchange`{.action} et sélectionnez l'offre concernée. Cliquez sur l'onglet `Plus +`, puis sur `Gérer la politique de sécurité`{.action}|
|![exchangesecurity](images/manage-security01.png){.thumbnail}|![exchangesecurity](images/manage-security02.png){.thumbnail}|

Poursuivez ensuite vers le ou les aspects que vous souhaitez modifier.

|Aspect|Description| 
|---|---| 
|[Renforcer la sécurité à la connexion](./#renforcer-la-securite-a-la-connexion){.external}|Définissez si les comptes doivent se verrouiller après un certain nombre de tentatives de connexion infructueuses.|
|[Complexifier la sécurité des mots de passe](./#complexifier-la-securite-des-mots-de-passe){.external}|Définissez une exigence de complexité, ainsi que des règles pour le changement de mot de passe.|
|[Renforcer la vérification des messages entrants (Exchange uniquement)](./#renforcer-la-verification-des-messages-entrants-exchange-uniquement){.external}|Indiquez si nos serveurs doivent vérifier si les messages reçus proviennent d'une source légitime (vérifications DKIM et/ou SPF).|
|[Définir l'affichage des messages indésirables (Exchange uniquement)](./#definir-laffichage-des-messages-indesirables-exchange-uniquement){.external}|Précisez si les messages indésirables doivent comporter un tag permettant de les identifier ou de les déplacer automatiquement vers la corbeille.|

### Renforcer la sécurité à la connexion

Ceci vous permet de définir si les comptes e-mail doivent se verrouiller après un certain nombre de tentatives de connexion infructueuses.

Pour cela, complétez les informations mentionnées dans le tableau ci-dessous :

|Information|Description| 
|---|---| 
|Seuil de verrouillage|Définissez le nombre de tentatives de connexion infructueuses à atteindre pour que le compte se verrouille. Inscrivez « 0 » pour ne pas appliquer de seuil de verrouillage.|
|Délai de réinitialisation|Ce champ apparaît uniquement si un seuil de verrouillage a été défini. Précisez le délai nécessaire pour que le compteur de tentatives de connexion infructueuses se remette à zéro.|
|Durée de verrouillage|Ce champ apparaît uniquement si un seuil de verrouillage a été défini. Précisez le délai durant lequel le compte e-mail restera verrouillé si le seuil de verrouillage a été atteint.|

Une fois ces informations complétées, validez ces changements en cliquant sur `Suivant`{.action}, puis sur `Valider`{.action} pour les offres « E-mails » et « E-mail Pro ». Cliquez sur `Enregistrer les modifications`{.action} pour l'offre Exchange.

### Complexifier la sécurité des mots de passe

Ceci vous permet de définir une exigence de complexité, ainsi que des règles pour le changement de mot de passe.

Pour cela, complétez les informations mentionnées dans le tableau ci-dessous :

|Information|Description| 
|---|---| 
|Exigences de complexité|Permet d'imposer des règles concernant la complexité des mots de passe :<br> - ne pas contenir tout ou partie du nom du compte de l'utilisateur ;<br> - avoir une longueur d'au moins 6 caractères ;<br> - contenir des caractères en majuscules, minuscules, non alphabétiques (! ou $ par exemple), ainsi que des chiffres.|
|Empêcher le changement du mot de passe|Permet d'imposer une durée de vie minimale aux mots de passe de vos comptes e-mail. Les utilisateurs devront attendre un certain nombre de jours avant de pouvoir changer leur mot de passe.|
|Durée de vie maximale du mot de passe|Permet d'imposer une durée de vie maximale aux mots de passe de vos comptes e-mail. Les utilisateurs seront forcés de changer leur mot de passe une fois ce délai atteint.|
|Conserver l'historique du mot de passe (Exchange uniquement)|Ce champ apparaît uniquement si une durée de vie maximale a été définie. Précisez la durée de vie, en jours, des précédents mots de passe qui peuvent être de nouveau utilisés.|
|Longueur minimale du mot de passe|Permet d'imposer une taille minimale concernant la longueur des mots de passe lorsqu'un utilisateur souhaite le modifier.|

Une fois ces informations complétées, validez ces changements en cliquant sur `Suivant`{.action}, puis sur `Valider`{.action} pour les offres « E-mails » et « E-mail Pro ». Cliquez sur `Enregistrer les modifications`{.action} pour l'offre Exchange.

### Renforcer la vérification des messages entrants (Exchange uniquement)

Ceci vous permet d'indiquer si nos serveurs doivent vérifier que les messages reçus sur vos comptes e-mail proviennent d'une source légitime d'envoi (vérifications DKIM et/ou SPF).

Pour cela, cochez les cases souhaitées dans le tableau ci-dessous :

|Information|Description| 
|---|---| 
|Activer la vérification de la signature DKIM|Définissez si nos serveurs doivent vérifier la signature DKIM des messages que vous recevez sur vos comptes Exchange. Cette action garantit l'authenticité du domaine expéditeur et l'intégrité du message et peut permettre d'identifier des envois non légitimes, qui seront alors tagués comme spam.|
|Activer la vérification de la protection SPF|Définissez si nos serveurs doivent vérifier que la source d'envoi des messages que vous recevez est bien présente dans l'enregistrement SPF du domaine expéditeur. Cette vérification peut permettre d'identifier des envois non légitimes, qui seront alors tagués comme spam.|

Une fois votre choix effectué, validez ces changements en cliquant sur `Enregistrer les modifications`{.action}.

### Définir l'affichage des messages indésirables (Exchange uniquement)

Ceci vous permet de définir si les messages indésirables que vous recevez sur vos comptes e-mail doivent comporter un tag permettant de les identifier ou de les déplacer automatiquement vers la corbeille.

Pour cela, cochez les cases souhaitées dans le tableau ci-dessous :

|Information|Description| 
|---|---| 
|Identifier les messages indésirables.|Précisez si nos serveurs doivent ajouter un tag permettant d'identifier les messages reçus dits « indésirables » en tant que spam.|
|Déplacer les messages indésirables dans la corbeille|Définissez si nos serveurs doivent automatiquement déplacer les messages reçus dits « indésirables » dans la corbeille.|

Une fois votre choix effectué, validez ces changements en cliquant sur `Enregistrer les modifications`{.action}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.