---
title: Exchange - Comment gérer les logs
excerpt: Découvrez comment visualiser et gérer les logs sur votre offre Private Exchange ou Trusted Exchange
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objectif 

Les logs correspondent aux événements survenus sur un système informatique (serveur, ordinateur, application, site web, base de données, réseau informatique, etc.). Par exemple, les logs peuvent enregistrer et contenir un ou plusieurs éléments parmi les suivants :

- L'horodatage (date, heure, minute, seconde) de l'événement.
- La nature de l'événement (connexion, déconnexion, erreur, download, upload, alerte, etc.).
- Des informations complémentaires sur l'événement (pages ou fichiers consultés, applications lancées, serveurs distants appelés, nom d'un fichier chargé ou téléchargé, etc.).
- L'origine de l'événement (identifiant de l'utilisateur, adresse IP source, programme source, etc.).
- L'état du système au moment de l'événement (ressources disponibles, mémoire restante, utilisation du CPU, etc.).

Généralement, les logs sont générés directement par les systèmes informatiques sur lesquels les événements se produisent. Ils sont stockés et historisés dans des fichiers texte également appelés fichiers de logs.

Les fichiers de logs permettent d'effectuer les actions suivantes :

- Analyser le comportement du système informatique générant les logs.
- Identifier les erreurs survenues sur le système informatique.
- Résoudre les erreurs rencontrées sur le système informatique.
- Optimiser le fonctionnement et les performances du système informatique.

Votre offre Private Exchange ou Trusted Exchange génère donc ses propres logs. Vous pouvez être amené à consulter/récupérer les logs pour analyser les accès à vos boîtes e-mail ou suivre les flux d'e-mails.

**Découvrez comment visualiser et gérer les logs sur votre offre Private Exchange ou Trusted Exchange**

## Prérequis

- Avoir souscrit une offre [Private Exchange](/links/web/emails-hosted-exchange) ou [Trusted Exchange](/links/web/emails-trusted-exchange).
- Un compte Logs Data Platform (LDP). Ce guide vous guidera dans toutes les étapes nécessaires : [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Visualiser les logs de votre plateforme Exchange en temps réel

Pour accéder aux logs en temps réel sur votre offre Private ou Trusted Exchange, suivez les instructions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la partie `Web Cloud`{.action}.
1. Dans la rubrique `MICROSOFT`, cliquez sur `Exchange`{.action}.
1. Sélectionnez la plateforme concernée.
1. À droite de la série d'onglets, cliquez sur l'onglet `Plus +`{.action} puis sur `Logs`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Comme il s'agit d'une console en temps réel, les logs n'apparaîssent que lorsque vous vous trouvez sur l'onglet `Logs`{.action}. Si vous quittez l'onglet `Logs`{.action} puis revenez dessus, l'historique précédent aura disparu.

Les services Exchange proposent 2 types de logs :

- **Access** : Permet de consulter l'activité des connexions sur votre service Exchange.
- **Messagetracking** : Permet de consulter les logs détaillés du flux d'e-mails traversant votre service Exchange. Vous y retrouverez les informations suivantes :
    - le statut de remise d'e-mails sur vos comptes Exchange ;
    - le statut d'envoi d'e-mails depuis votre service Exchange ;
    - la taille des e-mails transmis ;
    - etc.

### Intégrer les logs de votre solution Exchange sur Logs Data Platform

La solution Logs Data Platform peut vous être utile si vous disposez d'une infrastructure importante ou si vos services génèrent une grande quantité de logs. En effet, cette plateforme est conçue pour faciliter l'agrégation et la gestion des logs.

Elle fonctionne en récupérant les logs générés par votre infrastructure, vos sites web ou encore vos applications pour, par exemple :

- les stocker ;
- les afficher dans des tableaux de bord en temps réel ;
- permettre aux utilisateurs d'effectuer des requêtes complexes ;
- les filtrer par date, application, type ou contenu.

> [!primary]
>
> Pour plus de détails sur Logs Data Platform, consultez notre guide d'introduction à [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

Les solutions Exchange sont compatibles avec divers services tels que l'hébergement mutualisé, les VPS et les serveurs dédiés. Elles peuvent également être complétées par des flux de données sur Logs Data Platform, en complément des logs en temps réel déjà disponibles.

Pour abonner les logs de votre solution Exchange à un flux de données sur Logs Data Platform, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la partie `Web Cloud`{.action}.
1. Dans la rubrique `MICROSOFT`, cliquez sur `Exchange`{.action}.
1. Sélectionnez la plateforme concernée.
1. À droite de la série d'onglets, cliquez sur l'onglet `Plus +`{.action} puis sur `Logs`{.action}.
1. Sur la droite de l'encadré où s'affichent vos logs en temps réel, cliquez sur le bouton `S'abonner`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

Depuis la page qui s'affiche, sélectionnez le compte Logs Data Platform souhaité dans le menu déroulant situé au-dessus du tableau.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Deux cas de figure se présentent alors pour abonner votre solution Exchange :

> [!tabs]
> **Cas n°1**
>> **S'abonner à un flux déjà existant sur votre solution Logs Data Platform**
>>
>> Si le flux concerné existe déjà, celui-ci apparaît sous la forme d'une ligne dans le tableau. Dans ce cas précis et pour abonner votre solution Exchange à ce flux existant, il vous suffit de cliquer sur le bouton `S'abonner`{.action} situé à droite de la ligne correspondant au flux concerné.
>>
>> Après quelques instants et si vous restez sur la même page, un message apparaît dans votre espace client pour vous indiquer que l'abonnement a été créé avec succès.
>>
> **Cas n°2**
>> **S'abonner à un nouveau flux de données sur votre solution Logs Data Platform**
>>
>> Si le flux concerné n'existe pas encore, cliquez sur le bouton `Ajouter un flux de données`{.action}. Vous serez alors redirigé vers une nouvelle page de votre espace client OVHcloud, sur laquelle vous pourrez de créer un nouveau flux de données sur votre solution Logs Data Platform.
>>
>> Consultez nos guides « [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) » et « [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » pour réaliser cette action.
>>
>> Une fois le formulaire complété, cliquez sur le bouton `Sauvegarder`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Vous serez ensuite redirigé vers l'onglet `Flux de données`{.action} de votre solution Logs Data Platform.
>>
>> Vous pouvez à présent abonner votre solution Exchange à votre nouveau flux Logs Data Platform en suivant les instructions en début de chapitre.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

[Premiers pas avec le service Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).