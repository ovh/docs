---
title: Créer une instance dans horizon
slug: creer-une-instance-dans-horizon
legacy_guide_number: 1772
section: Depuis l'interface Horizon
---


## Preambule
Selon certains de vos besoins, vous serez amené à créer des instances depuis l'interface Horizon, notamment dans le cas où vous souhaitez créer plusieurs instances en même temps, ou bien pour être en mesure de configurer un groupe de sécurité particulier à vos instances. Ce guide vous indique comment effectuer cela.


## Création de l'instance
Pour créer une instance il faut :

- Se connecter à horizon
- cliquer sur Instances dans le menu à gauche.
- cliquer sur le bouton Lancer une instance
- remplir le Formulaire :

Voici les informations à fournir :

|---|---|
|Zone de disponibilité|Laisser nova (choix par défaut)|
|Nom de l'instance|Indiquer le nom souhaité pour l'instance à créer|
|Gabarit|Sélectionner le type d'instance à créer|
|Nombre d'instances|Indiquer le nombre d'instance à créer|
|Source de démarrage de l'instance|Sélectionner la source pour la création de l'instance : (Démarrage depuis une image ou Démarrage depuis un instantané)|
|Nom de l'image|Sélectionner l'image de l'instance (uniquement dans le cas d'un démarrage depuis une image)|
|Instantané d'instance|Sélectionner un instantané d'une instance (uniquement dans le cas d'un démarrage un instantané)|

Nom de l'instance Cette section permet de préciser une clef ssh et le groupe de sécurité pour l'instance.

|---|---|
|Paire de clés|Sélectionner une clef ssh pour vous connecter ensuite à l'instance (la création d'une clef peut être faite en cliquant sur le signe " + "|
|Groupes de sécurité|Sélectionner le groupe de sécurité pour l'instance (autorisation d'ouverture de ports)|

Paire de clés Cette section permet de préciser sur quels réseaux l'instance sera connecté.

|---|---|
|Réseaux sélectionnés|Sélectionner le ou les réseaux pour l'instance à créer dans la liste des réseaux disponibles|

Cette section permet de personnaliser une instance après sa création.

|---|---|
|Source de Script personnalisé|Entrée directe ou Ficher|
|Donnée de Script|Indiquer le code du script dans le champ de saisie maximum 16Ko) .|
|Fichier de Script|Cliquer sur parcourir pour sélectionner le script de post installation.|

Cette section permet la gestion du partitionnement de l'instance.

|---|---|
|Partitionnement du disque|Automatique ou Manuel|
|Disque de configuration|Configurer OpenStack pour écrire les métadonnées sur un disque de configuration spécifique qui sera attaché à l'instance au moment de son lancement.|