---
title: "Envoyer des SMS depuis l'espace client OVHcloud"
excerpt: Découvrez comment envoyer des SMS simplement depuis votre espace client OVHcloud
updated: 2024-10-10
---

## Objectif

Vous pouvez envoyer des SMS directement via votre espace client OVHcloud. Ce guide indique étape par étape comment envoyer vos premiers SMS.

## Prérequis

- Disposer d’un compte SMS OVHcloud avec des crédits SMS.
- Être connecté à l'[espace client OVHcloud](/links/manager), partie `Télécom`{.action} puis `SMS`{.action}.

![espace client Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-fr-sms.png){.thumbnail}

## En pratique

Connectez-vous à votre [espace client OVHcloud](/links/manager) puis sélectionnez `Télécom`{.action}. Cliquez ensuite sur `SMS`{.action} et sur votre compte SMS.

Le champ « Envoyer un SMS » est le premier élément disponible dans la liste des actions.

![envoi sms manager](images/sms-send-control-panel01E.png){.thumbnail}

### Étape 1 : configurer l’expéditeur et le destinataire

Une fois sur la page d'envoi de SMS, vous disposez de différents paramètres à renseigner pour adapter au mieux votre envoi de SMS à votre besoin.

![envoi sms manager](images/sms-send-control-panel02E.png){.thumbnail}

Pour l’expéditeur du SMS (1) , vous avez la possibilité de sélectionner soit un numéro court permettant la réponse (uniquement pour les comptes OVHcloud en France), soit un expéditeur alphanumérique. 
Renseignez ensuite  le numéro du destinataire (2) au format international (+336xxxxxxxx). 
Pour plus de renseignements sur la création d'un expéditeur, reportez-vous à l'[étape 3: choisir votre expéditeur SMS](#etape-3-choisir-votre-expediteur-sms).

Vous pouvez également envoyer des SMS à plusieurs destinataires. Deux méthodes sont disponibles pour y parvenir :

- Par le biais d'une liste de destinataires au format .csv via le bouton "Gérer les destinataires".
Pour plus d'informations, vous pouvez consulter notre [guide sur les listes de destinataires SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms).

- Par le biais d'un carnet d'adresses (3) . Celui-ci peut être créé directement via votre espace client, ou être importé via un fichier .csv ou .txt. 
N'hésitez pas à consulter notre [guide sur les carnets d'adresses SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms).

### Étape 2 : composer votre SMS

> [!primary]
>
> Pour des raisons légales, un SMS à caractère commercial ne sera envoyé qu’entre **08h00 et 20h00, du lundi au samedi**.

Une fois l'expéditeur sélectionné et vos destinataires renseignés, vous pouvez désormais passer à la composition du message.

![envoi sms manager](images/sms-send-control-panel03E.png){.thumbnail}

Tapez votre message dans le cadre prévu à cet effet (1). Un compteur est présent à titre indicatif pour le nombre de caractères utilisés et le nombre de SMS correspondants (2).

Les deux tableaux ci-dessous listent les caractères autorisés en encodage 7bit. Les caractères du tableau "Extensions" comptent double. 

La taille maximum d’un SMS est de 160 caractères en encodage 7bit (norme GSM 03.38).

L’utilisation de caractères ne figurant pas dans ces tableaux provoquera le basculement de l’encodage en Unicode et réduit à 70 caractères la taille maximale d’un SMS.

![Liste des caractères SMS](images/smsauthorizedcharacters.png){.thumbnail}

#### Taille des SMS à caractère commercial

Un SMS à caractère commercial devra obligatoirement inclure la mention STOP. Celle-ci contient 11 caractères et est automatiquement déduite des 160 caractères de base du 1er SMS.
Le tableau ci-dessous indique donc le nombre maximum de caractères autorisés pour les SMS à caractère commercial. 

Exemple : en encodage 7bits, si votre message fait plus de 149 caractères, il sera envoyé en 2 SMS et coûtera donc 2 crédits.

| Encodage | 1er SMS | 2ème SMS et suivants  |
|---|---|---|
| 7bits (norme GSM 03.38) | 149 caractères | 153 caractères |
| Unicode | 59 caractères | 70 caractères  |

> [!primary]
>
> Vérifiez toujours que votre message ne contient pas de caractères spéciaux ou d'accent pouvant faire passer du simple au double le nombre de caractères comptés.
>

#### Options avancées

![envoi sms manager](images/sms-send-control-panel-advanced.png){.thumbnail}

Dans cette section vous avez la possibilité d’effectuer un envoi immédiat ou différé (1).

Trois formats d’envoi (Standard / Flash / Sim) sont proposés (2) mais cette fonctionnalité est dépréciée.

### Étape 3 : choisir votre expéditeur SMS

#### Numéro court permettant la réponse

**Uniquement pour les comptes OVHcloud en France hors DOM-TOM.**

Il permet de recevoir une réponse via l’onglet SMS reçus.

#### Numéro mobile virtuel

**Uniquement pour les comptes OVHcloud en France.**

Si vous disposez d'une offre SMS avec numéro mobile virtuel, vous pouvez renseigner celui-ci comme expéditeur. Pour plus d'informations, consultez notre [page sur le numéro mobile virtuel](https://www.ovhtelecom.fr/sms/reponse/numeros-virtuels.xml).

> [!primary]
>
>Si vous disposez déjà d'un compte SMS, la création d'un numéro mobile virtuel pour ce compte existant est impossible. Il sera nécessaire de commander un nouveau compte SMS via la page de l'offre [numéro mobile virtuel](https://www.ovhtelecom.fr/sms/reponse/numeros-virtuels.xml).
>

#### Expéditeur alphanumérique

Vous pouvez personnaliser votre expéditeur. Il n’est alors plus possible de recevoir une réponse de la part du destinataire de votre SMS. Pour accéder à la gestion des expéditeurs SMS, sélectionnez `Expéditeurs`{.action}(1) lorsque vous êtes sur le compte SMS concerné.

![envoi sms manager](images/sms-send-control-panel04E.png){.thumbnail}

Si vous souhaitez ajouter un expéditeur SMS supplémentaire, cliquez sur le bouton `Actions`{.action} au centre puis sur `Ajouter`{.action}(2).

![envoi sms manager](images/sms-send-control-panel05E.png){.thumbnail}

Une fois sur la page d'ajout, vous disposez de plusieurs options pour configurer un nouvel expéditeur SMS (3) :

- **Ajouter manuellement des expéditeurs** : Vous devez saisir l'expéditeur souhaité, la description et une justification pour l'utilisation de cet expéditeur (4). Une pièce justificative est également nécessaire.

**Exemple:** si vous souhaitez envoyer votre sms avec le nom de votre societé comme expéditeur, un justificatif de la societé vous sera demandé.

La validation d'un expéditeur alphanumérique est effectuée en moyenne dans les 72 heures après sa création.

> [!primary]
>
> Nous vous demandons un justificatif dans le cadre de notre politique de sécurité. Il s'agit par défaut d'un papier à en-tête de la société ou de la marque, incluant l'autorisation d'un responsable avec signature et tampon de cette même société, d'un papier d'identité, ou extrait Kbis si ce n'est pas une marque déposée.
>

- **Ajouter des expéditeurs à partir de données personnelles** : Vous pouvez demander un expéditeur se basant sur les coordonnées de votre compte OVHcloud. Une liste déroulante des expéditeurs disponibles s'affichera alors.

- **Ajouter des expéditeurs à partir de vos noms de domaines OVHcloud** : Vous pouvez utiliser un nom de domaine disponible dans votre compte OVHcloud en tant qu'expéditeur. Une liste déroulante des expéditeurs disponibles s'affichera alors.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/manager).
