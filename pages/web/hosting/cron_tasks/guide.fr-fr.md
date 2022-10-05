---
title: Créer des tâches automatisées (CRON) sur votre hébergement Web
slug: mutualise-taches-automatisees-cron
excerpt: Découvrez comment créer des tâches CRON pour automatiser vos tâches planifiées sur un hébergement web
section: Tâches automatisées (CRON)
order: 01
---

**Dernière mise à jour le 22 Septembre 2020**

## Objectif

Sur votre hébergement Web OVHcloud, vous pouvez utiliser des scripts pour automatiser certaines opérations. La création d'une tâche planifiée (« tâche CRON ») est le moyen le plus simple de s'assurer que vos scripts s'exécutent à des moments spécifiques sans que d'autres actions soient nécessaires de votre part. 

**Découvrez comment créer des tâches CRON pour automatiser vos tâches planifiées sur un hébergement web.**

> [!warning]
>OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
>Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section « Aller plus loin » de ce guide. 
>

## Prérequis

- Posséder une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Cliquez sur  l'onglet `Web Cloud`{.action}, puis sur `Hébergements`{.action}.

Sélectionnez l'hébergement concerné, cliquez sur l'onglet `Plus+`{.action} puis sur `Tâches planifiées - Cron`{.action}

Dans cette section, vous aurez un aperçu de vos tâches planifiées et de leurs paramètres.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Création d'une tâche automatisée

#### Étape 1 : Définition des paramètres généraux

Pour créer une tâche CRON, cliquez sur le bouton `Ajouter une planification`{.action} à droite. Vous pouvez personnaliser les paramètres de la tâche dans la nouvelle fenêtre.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Option|Description|   
|---|---|   
|Commande à exécuter|Définissez le chemin d'accès au fichier contenant votre script. Exemple : www/jobs/cron.php|   
|Language|Sélectionnez la version PHP utilisée par le script ou choisissez « Autre ».|
|Activation|Choisissez si la tâche sera active après sa création ou activée ultérieurement.| 
|Logs par e-mail|Si nécessaire, sélectionnez un contact (administrateur ou technicien) auquel un rapport sera envoyé en cas d'erreur d'exécution. Vous pouvez également fournir une autre adresse de messagerie.| 
|Description|Saisissez une description pour suivre l'exécution de vos tâches.| 

Cliquez sur `Suivant`{.action} pour passer à l'étape 2.

#### Étape 2 : Définition de la fréquence

L'interface offre deux modes pour configurer la fréquence de votre tâche. Utilisez le **Mode Simple** pour une sélection d'options de planification simplifiée pour les débutants. Si vous préférez entrer directement une fréquence, semblable à un format de table CRON (*crontab*), choisissez le **Mode expert**.

|Mode simple|
|---|
|Utilisez les menus déroulants pour spécifier l'heure, les jours d'un mois, les jours de la semaine et les mois de la tâche.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|

|Mode expert| 
|---|
|Entrez des valeurs numériques comme dans une *crontab*. Les astérisques indiquent chaque valeur de la période, ce qui signifie que la tâche s'exécuterait en continu **une fois par heure tous les jours** dans cet exemple.|
|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

Vous pouvez basculer entre les deux modes pendant la configuration pour visualiser les modifications en conséquence. Notez également les [limitations lors de la planification d'une tâche sur un hébergement Web](./#limitations-des-taches-planifiees-sur-votre-hebergement-web_1).

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Étape 3 : Fin de l'installation

Le récapitulatif vous rappelle les paramètres configurés, y compris la notation *crontab* sur la fréquence d'exécution. Si tout est correct, cliquez sur `Valider`{.action}.

![cron confirmation](images/cron-jobs-6.png){.thumbnail}

La tâche sera prête dans quelques minutes. Vous pouvez alors modifier tous ses paramètres ou supprimer la tâche en cliquant sur `...`{.action} dans la table de présentation de votre panneau de configuration OVHcloud.

### Limitations des tâches planifiées sur votre hébergement Web

|Étape|Description|
|---|---|
|Planification horaire|Vous remarquerez que le champ "Minutes" est désactivé dans l'interface (défini par « ? » dans la vue *crontab*). Une tâche ne peut être exécutée qu'une fois par heure, c'est la fréquence de répétition la plus faible pouvant être spécifiée.|
|Durée|La durée d'exécution d'une tâche est de 60 minutes. Si un script dépasse cette durée d'exécution, il sera automatiquement arrêté par le système.|
|Variables|Vous ne pouvez définir que des variables dans un script. Les ajouter à l'URL appelant le script ne fonctionnera pas (Exemple : www/jobs/cron.php?variable=value).|
|Limite de données|Une tâche ne peut générer que 5 Mo de données (*stdin/stderr*). Par exemple, si un script écrit des données dans un fichier .txt, l'exécution s'arrête automatiquement lorsque le fichier atteint 5 Mo.|
|Scripts produisant des erreurs|Si un script est défectueux, il sera automatiquement désactivé après 10 tentatives d'exécution ayant échoué. Réactivez-le simplement dans le Panneau de configuration. (Cliquez sur `...`{.action}, puis `Modifier`{.action}.)|
|Rapports d'exécution|Les rapports ne seront envoyés à l'adresse électronique sélectionnée qu'une fois par jour (pendant les heures de nuit).|

### Dépannage

#### Test de votre script avec un navigateur Web

Un test simple pour voir si votre script produira une erreur est de l'exécuter dans un navigateur Web. Par exemple, si le chemin d'accès de votre script est « www/cron.php » et que votre domaine d'hébergement est « mypersonaldomain.ovh », vous devez utiliser l'URL « http://<i></i>mypersonaldomain.ovh/cron.php ». Si aucune erreur ne s'affiche mais que le script ne fonctionne pas comme prévu, suivez les suggestions ci-dessous.

#### Vérification de l'utilisation des chemins absolus

Veillez toujours à utiliser des chemins d'accès absolus aux fichiers de vos scripts. La constante « DIR », par exemple, peut aider à recevoir le chemin courant dans les scripts PHP ([documentation PHP](https://www.php.net/manual/fr/language.constants.predefined.php)).
 
#### Vérification des logs d'éxecution

Dans [les logs]  de votre hébergement Web, accessibles depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, vous verrez la catégorie de log intitulée « CRON ».

Consultez notre guide [« Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée »](../mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/#logs_1) pour plus de détails.

##### **Exemple de logs**

- Exemple de fin de script correctement exécuté 

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2020-08-11 00:36:01] 
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-10 22:39:44.086166 exitcode: 0
```

- Exemple d'échec en raison d'un dépassement du temps d'exécution

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2020-08-11 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2020-08-11 01:36:01] ## OVH ## END - 2020-08-11 01:36:01.086166 exitcode: 0
```

- Exemple d'échec car le fichier de script est introuvable dans le chemin d'accès spécifié

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2020-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-11 00:36:01.086166 exitcode: 255
```

- Exemple d'échec en raison d'une erreur d'autorisation (chmod) ou d'une configuration incorrecte du fichier .ovhconfig

```
[2020-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2020-08-11 18:07:10]
[2020-08-11 18:07:10] ## OVH ## END - 2020-08-11 18:07:10.969840 exitcode: 255
```


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

[Configurer le fichier .ovhconfig de son hébergement web](../configurer-fichier-ovhconfig/)

[Utiliser l’accès SSH de son hébergement web](../mutualise-le-ssh-sur-les-hebergements-mutualises/)

[Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée](../mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/)

