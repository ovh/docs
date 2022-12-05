---
title: Créer et utiliser des comptes de ressource
slug: exchange-utilisation-des-comptes-de-ressource
excerpt: Ajouter et utiliser les comptes de ressource avec l’offre Exchange
section: Fonctionnalités des comptes Exchange
order: 04
---

**Dernière mise à jour le 22 décembre 2020**

## Objectif

Cette fonction collaborative de Exchange permet de créer des adresses de messagerie dédiées aux ressources de votre organisation, telles que les salles de conférence et les équipements partagés. L'utilisation de ces comptes de ressources permet d'optimiser  l'organisation d'événements dans un environnement de travail collaboratif, en fournissant des contrôles de disponibilité et en intégrant les ressources de manière transparente à vos calendriers Exchange.

**Ce guide explique la gestion des ressources à l'aide de l'espace client OVHcloud et de l'application Outlook Web App (OWA).**

## Prérequis

- Disposer d'une [solution Exchange OVHcloud](https://www.ovhcloud.com/fr-ca/emails/hosted-exchange/) déjà configurée
- Être connecté votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer des identifiants de connexion pour le ou les comptes de messagerie ayant accès à la ressource

## En pratique

Connectez-vous à votre  [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et sélectionnez `Web Cloud`{.action} dans la barre de navigation supérieure. Cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Sélectionnez ensuite le service Exchange concerné. Cliquez sur l'onglet `Plus +`{.action} , puis sur `Ressources`{.action}.

### Étape 1 : créer une ressource

![créer ressource](images/exchange-resources-step1.png){.thumbnail}

Cliquez sur le bouton `Ajouter un compte de ressource`{.action} pour créer votre première ressource. Dans la nouvelle fenêtre, renseignez les champs suivants:

![créer ressource](images/exchange-resources-step2.png){.thumbnail}

|Nom|Description|
|---|---|
|E-mail de la ressource|Entrez l'adresse de la ressource. Notez que vous ne pouvez pas choisir une adresse de messagerie existante.|
|Nom de la ressource|Nom complet qui apparaît dans votre  [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et dans [le webmail OVHcloud](https://www.ovh.com/ca/fr/mail/) (OWA).|
|Capacité|Vous pouvez définir la taille maximale d'une ressource (en spécifiant par exemple le nombre de places assises d'une pièce ou les sièges d'un véhicule de société partagé).|
|Permettre les conflits|Si cette case est cochée, vous pourrez créer des événements de calendrier se chevauchant et impliquant la même ressource.|
|Type de ressource|Choisissez le type de ressource: « Équipement » ou « Salle ».|

Cliquez sur `Suivant`{.action} pour passer au résumé, puis confirmez la tâche en cliquant sur `Créer`{.action}.


### Étape 2 : utiliser des ressources

Vos ressources peuvent être gérées à partir du tableau de l'onglet « Ressources ». Cliquez sur `...`{.action} pour modifier ou supprimer une ressource. L'option  `Configurer les délégations`{.action} s'affichera également. Avec cette option, vous pourrez déléguer l'accès de la même manière que pour un compte Exchange. Retrouvez les détails dans [ce guide](../exchange-donner-les-droits-full-access-sur-un-compte/).

![utiliser ressources](images/exchange-resources-step3.png){.thumbnail}

### Ajouter un calendrier de ressources dans OWA

> [!primary]
>
Consultez également notre guide sur le [Partage de calendriers depuis l'interface OWA](../exchange-2016-partager-un-calendrier-via-le-webmail-owa/).
>

Connectez-vous à votre compte Exchange via le [webmail OVHcloud](https://www.ovh.com/ca/fr/mail/). Basculez vers l'interface « Calendrier » en cliquant sur le « lanceur d'application » dans le coin supérieur gauche, puis en sélectionnant l'icône `Calendrier`{.action}.

![ajouter calendrier](images/exchange-calendars-step1.png){.thumbnail}

Dans la barre de navigation supérieure, cliquez sur `Ajouter un calendrier`{.action}, puis sur `À partir de l'annuaire`{.action}.

![sélectionner ressource](images/exchange-resources-step4.png){.thumbnail}

Saisissez du texte pour afficher les suggestions de vos contacts, entrez une adresse électronique complète ou utilisez l'option de recherche via `À partir de l'annuaire`{.action}. Toutefois, l'adresse de messagerie de la ressource doit être suggérée à ce stade, car elle a été automatiquement ajoutée à la liste d'adresses globale (GAL) lors de sa création. Cliquez sur `Ouvrir`{.action} pour ajouter le calendrier de cette ressource à la vue d'ensemble de votre calendrier.

### Créer un événement dans OWA

Pour planifier un événement, cliquez d'abord sur `Nouveau`{.action} dans la barre de menu supérieure et sélectionnez `Évènement de calendrier`{.action}. Dans la nouvelle fenêtre, vous pouvez définir les détails de votre événement et ajouter l'équipement requis et l'emplacement en ajoutant les ressources correspondantes.

![planification](images/exchange-resources-step5_1.png){.thumbnail}

Le gestionnaire d'événements se compose de trois volets :

#### Détails

- (1) Ajouter un titre pour l'événement : ceci sera affiché dans les calendriers.
- (2) Ajouter un emplacement ou une salle : vous pouvez choisir parmi vos comptes de ressources.
- (3) Début/Fin : définissez la durée de l'événement.
- (4) Répéter : le cas échéant, choisissez un cycle de répétition (quotidien, le même jour chaque mois, etc.).
- (5) Rappel : OWA affiche une fenêtre de rappel à l'heure spécifiée.
- (6) Afficher comme : choisissez un état pour votre calendrier de disponibilité.
- (7) Ajouter un rappel par courrier : une option permettant d'envoyer des rappels par e-mail à vous-même ou à tous les participants.

Saisissez votre message d'invitation dans l'éditeur  (8) et continuez à ajouter des participants à votre événement.

Si vous tentez d'ajouter une ressource déjà réservée (« occupée »), un message s'affiche et suggère d'utiliser l'[Assistant de planification](./#planification) (9), qui fournit une vue d'ensemble plus large du calendrier de la période choisie.

#### Contacts

Comme un compte de ressources est également un contact, vous pouvez ajouter des salles et des équipements dans ce volet, exactement comme pour les autres participants (10). Commencez à taper pour afficher les suggestions de vos contacts, entrez un e-mail complet ou utilisez l'option de recherche (un clic sur `+`{.action} ouvrira vos contacts).

Une fois que vous avez finalisé la planification en cliquant sur `Envoyer`{.action} dans la barre de menus supérieure, le compte de ressources vous envoie un message pour confirmer qu'il est réservé pour votre événement. Cochez la case « Demander des réponses » si vous avez besoin d'une confirmation active de la part des invités pour mettre à jour automatiquement votre calendrier.

#### Planification

Un extrait de calendrier de vos propres événements, intitulé **Planifier**, s'affiche à droite dès que vous ajoutez une ressource ou une personne à l'événement. Il fournit un aperçu graphique de la disponibilité des ressources le jour choisi ; vous pouvez définir l'heure et la durée de l'événement directement en cliquant avec la souris et en sélectionnant le menu en haut à droite.

Si nécessaire, cliquez sur `Assistant Planification`{.action} dans le volet **Contacts** pour ouvrir une vue d'ensemble encore plus détaillée. Cet assistant est utile pour les événements plus importants ou si vous devez gérer les conflits, car il visualise l'ensemble du processus de planification. Vous pouvez vérifier la disponibilité et ajuster votre planification en sélectionnant des emplacements et des contacts, sans quitter cette interface.

![assistant](images/exchange-resources-step6.png){.thumbnail}

### Messages de réponse de la ressource

Après avoir créé l'événement (en cliquant sur `Envoyer`{.action} dans la barre de menu supérieure), Exchange enverra automatiquement des messages :

- Les participants recevront des invitations (pour mettre à jour les calendriers concernés ou uniquement les leurs, selon votre choix de « Demander des réponses » auparavant).

- Vous recevrez un e-mail de confirmation provenant de chaque compte de ressource choisi (si la ressource est disponible ou si elle est réservée mais que **vous avez coché** « Permettre les conflits » lors de la création).

![message d'acceptation](images/exchange-resources-step7.png){.thumbnail}

- Vous recevrez un e-mail de refus provenant de chaque compte de ressource choisi (si la ressource n'est pas disponible et si vous **n'avez pas coché** « Permettre les conflits » lors de la création).

![message de refus](images/exchange-resources-step8.png){.thumbnail}

## Aller plus loin

[Consulter son compte Exchange depuis l’interface OWA](../exchange-2016-guide-utilisation-outlook-web-app/)

[Partager un calendrier depuis l’interface OWA](../exchange-2016-partager-un-calendrier-via-le-webmail-owa/)

[Partager un dossier depuis l’interface OWA](../exchange-2016-partager-un-dossier-via-le-webmail-owa/)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
