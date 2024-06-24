---
title: "Créer des tâches automatisées (CRON) sur votre hébergement Web"
excerpt: "Découvrez comment créer des tâches CRON pour automatiser vos tâches planifiées sur un hébergement web"
updated: 2024-05-16
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objectif

Sur votre hébergement Web OVHcloud, vous pouvez utiliser des scripts pour automatiser certaines opérations. La création d'une tâche planifiée (« tâche CRON ») est le moyen le plus simple de s'assurer que vos scripts s'exécutent à des moments spécifiques sans que d'autres actions soient nécessaires de votre part. 

**Découvrez comment créer des tâches CRON pour automatiser vos tâches planifiées sur un hébergement web.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section [« Aller plus loin »](#go-further) de ce guide. 
>

## Prérequis

- Posséder une [offre d'hébergement web](/links/web/hosting){.external}.
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

Rendez-vous dans votre [espace client OVHcloud](/links/manager){.external}. Cliquez sur l'onglet `Web Cloud`{.action}, puis sur `Hébergements`{.action}.

Sélectionnez l'hébergement concerné, cliquez sur l'onglet `Plus`{.action} puis sur `Cron`{.action}.

Dans cette section, vous aurez un aperçu de vos tâches planifiées et de leurs paramètres.

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}

### Création d'une tâche automatisée

#### Étape 1 : Définition des paramètres généraux

Pour créer une tâche CRON, cliquez sur le bouton `Ajouter une planification`{.action} à droite. Vous pouvez personnaliser les paramètres de la tâche dans la nouvelle fenêtre.

![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}

|Option|Description|   
|---|---|   
|Commande à exécuter|Définissez le chemin d'accès au fichier contenant votre script. Exemple : www/jobs/cron.php|   
|Language|Sélectionnez la version PHP utilisée par le script.|
|Activation|Choisissez si la tâche sera active après sa création ou activée ultérieurement.| 
|Logs par e-mail|Si nécessaire, sélectionnez un contact (administrateur ou technicien) auquel un rapport sera envoyé en cas d'erreur d'exécution. Vous pouvez également fournir une autre adresse de messagerie.| 
|Description|Saisissez une description pour suivre l'exécution de vos tâches.| 

Cliquez sur `Suivant`{.action} pour passer à l'étape 2.

#### Étape 2 : Définition de la fréquence

L'interface offre deux modes pour configurer la fréquence de votre tâche. Utilisez le **Mode Simple** pour une sélection d'options de planification simplifiée pour les débutants. Si vous préférez entrer directement une fréquence, semblable à un format de table CRON (*crontab*), choisissez le **Mode expert**.

|Mode simple|
|---|
|Utilisez les menus déroulants pour spécifier l'heure, les jours d'un mois, les jours de la semaine et les mois de la tâche.|
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|

> [!primary]
>
> Le formulaire `Jours`{.action} permet de définir des fréquences d'exécution sur un cycle mensuel.
>
> Le formulaire `Jours de la semaine`{.action} permet de définir des fréquences d'exécution complémentaires mais sur un cycle hebdomadaire.
>

|Mode expert| 
|---|
|Entrez des valeurs numériques comme dans une *crontab*. Les astérisques indiquent chaque valeur de la période, ce qui signifie que la tâche s'exécuterait en continu **une fois par heure tous les jours** dans cet exemple.|
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|

Vous pouvez basculer entre les deux modes pendant la configuration pour visualiser les modifications en conséquence. Notez également les [limitations lors de la planification d'une tâche sur un hébergement Web](./#limitations-des-taches-planifiees-sur-votre-hebergement-web).

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.gif){.thumbnail}

#### Étape 3 : Fin de l'installation

Le récapitulatif vous rappelle les paramètres configurés, y compris la notation *crontab* sur la fréquence d'exécution. Si tout est correct, cliquez sur `Valider`{.action}.

![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}

La tâche sera prête dans quelques minutes. Vous pouvez alors modifier tous ses paramètres ou supprimer la tâche en cliquant sur `...`{.action} dans la table de présentation de votre panneau de configuration OVHcloud.

### Modifier ou supprimer une tâche planifiée

Pour cela, effectuez les actions suivantes : 

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Plus`{.action} puis sur `Cron`{.action}.
6. Dans le tableau qui apparaît, cliquez sur le bouton `...`{.action} situé à droite de la tâche planifiée concernée.
7. Choisissez parmi les boutons `Modifier`{.action} ou `Supprimer`{.action} en fonction de l'action que vous souhaitez réaliser sur la tâche planifiée.

### Limitations des tâches planifiées sur votre hébergement Web

|Étape|Description|
|---|---|
|Planification horaire|Vous remarquerez que le champ "Minutes" est désactivé dans l'interface (défini par « ? » dans la vue *crontab*). Une tâche ne peut être exécutée qu'une fois par heure, c'est la fréquence de répétition la plus faible pouvant être spécifiée.|
|Durée|La durée d'exécution d'une tâche est de 60 minutes. Si un script dépasse cette durée d'exécution, il sera automatiquement arrêté par le système.|
|Variables|Vous ne pouvez définir que des variables dans un script. Les ajouter à l'URL appelant le script ne fonctionnera pas (Exemple : www/jobs/cron.php?variable=value).|
|Limite de données|Une tâche ne peut générer que 5 Mo de données (*stdin/stderr*). Par exemple, si un script écrit des données dans un fichier .txt, l'exécution s'arrête automatiquement lorsque le fichier atteint 5 Mo.|
|Scripts produisant des erreurs|Si un script est défectueux, il sera automatiquement désactivé après 10 tentatives d'exécution échouées. Le rapport d'erreur ne sera envoyé que lorsque les 10 tentatives auront échoué.</br>Corrigez votre script en fonction du rapport d'erreur reçu puis réactivez la « tâche CRON » dans le panneau de configuration (cliquez sur `...`{.action} puis sur `Modifier`{.action}).|
|Rapports d'exécution|Les rapports ne seront envoyés à l'adresse électronique sélectionnée qu'une fois par jour (pendant les heures de nuit).|

### Dépannage

#### Test de votre script avec un navigateur Web

Un test simple pour voir si votre script produira une erreur est de l'exécuter dans un navigateur Web. Par exemple, si le chemin d'accès de votre script est « www/cron.php » et que votre domaine d'hébergement est « mypersonaldomain.ovh », vous devez utiliser l'URL « http://<i></i>mypersonaldomain.ovh/cron.php ». Si aucune erreur ne s'affiche mais que le script ne fonctionne pas comme prévu, suivez les suggestions ci-dessous.

#### Vérification de l'utilisation des chemins absolus

Veillez toujours à utiliser des chemins d'accès absolus aux fichiers de vos scripts. La constante « DIR », par exemple, peut aider à recevoir le chemin courant dans les scripts PHP ([documentation PHP](https://www.php.net/manual/fr/language.constants.predefined.php)).
 
#### Vérification des logs d'éxecution

Dans [les logs]  de votre hébergement Web, accessibles depuis votre [espace client OVHcloud](/links/manager){.external}, vous verrez la catégorie de log intitulée « CRON ».

Consultez notre guide [« Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée »](/pages/web_cloud/web_hosting/logs_and_statistics#logs) pour plus de détails.

##### **Exemple de logs**

- Exemple de fin de script correctement exécuté 

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2023-08-11 00:36:01] 
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Exemple d'échec en raison d'un dépassement du temps d'exécution

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2023-08-11 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2023-08-11 01:36:01] ## OVH ## END - 2023-08-11 01:36:01.086166 exitcode: 0
</code></pre>

- Exemple d'échec car le fichier de script est introuvable dans le chemin d'accès spécifié

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2023-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-11 00:36:01.086166 exitcode: 255
</code></pre>

- Exemple d'échec en raison d'une erreur d'autorisation (chmod) ou d'une configuration incorrecte du fichier .ovhconfig

<pre class="bgwhite"><code>
[2023-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2023-08-11 18:07:10]
[2023-08-11 18:07:10] ## OVH ## END - 2023-08-11 18:07:10.969840 exitcode: 255
</code></pre>

## Aller plus loin <a name="go-further"></a>

[Configurer le fichier .ovhconfig de son hébergement web](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Utiliser l’accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée](/pages/web_cloud/web_hosting/logs_and_statistics)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).