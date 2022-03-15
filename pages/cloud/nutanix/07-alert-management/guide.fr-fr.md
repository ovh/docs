---
title: Gestion des alertes et des évènements
slug: storage
excerpt: 'Analyser et modifier les alertes et le évènements dans une cluster Nutanix'
section: Premiers pas
order: 07
---

**Dernière mise à jour le 15/03/2022**

## Objectif

Ce guide montre comment consulter les alertes et les évènements ainsi que de créer des alertes personnalisées.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> Certaines options comme l'utilisation de la compression ou de la déduplication nécessitent des licences particulières fournies par Nutanix au travers d'OVHcloud, nous vous invitons à vous renseigner auprès du service commercial OVHcloud pour plus d'informations.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central

## Définitions des alertes et des événements dans **Prism Central**

Tout ce qui se passe dans un cluster associé à **Prism Central** est enregistré dans les évènements

Les alertes se déclenchent toutes seules lorsque quelque chose d'anormal survient comme par exemple l'utilisation excessive de la **CPU** sur une machine virtuelle. 

Les alertes de **Prism Central** s'ajoutent à celles de **Prism Element**.

Il est possible d'ajouter des alertes personnalisées pour augmenter la sensibilité sur un élément du cluster.

Les alertes peuvent être envoyées à des destinataires au travers de la messagerie électronique.

L'état des actions qu'un utilisateur de **Prism Central**  execute apparait dans la liste des tâches avec son status *terminée,en cours ou en erreur*.

## En pratique

### Configuration du serveur SMTP dans **Prism Central**

Pour que **Prism Central** puisse envoyer des alertes, il faut configurer un serveur SMTP.

Cliquez sur `Icône Engrenage`{.action} en haut à droite de l'interface **Prism Central** pour le configurer.

![Configure Prism Central SMTP Server 01](images/ConfigurePrismCentralSmtp01.PNG){.thumbnail}

Sur le menu de droite cliquez sur `SMTP Server`{.action}.

Saisissez les paramètres d'envoi du serveur SMTP et cliquez sur `Save`{.action}.

![Configure Prism Central SMTP Server 02](images/ConfigurePrismCentralSmtp02.PNG){.thumbnail}

### Gestion des alertes 
Cliquez dans le menu principal en haut à gauche.

Sélectionnez `Alerts`{.action} dans le menu Activity

![Display Alert 01](images/DisplayAlert01.PNG){.thumbnail}

La liste des alertes déclenchées apparait. 

Configurez des destinataires en cliquant sur `Email Configuration`{.action}

![Display Alert 02](images/DisplayAlert02.PNG){.thumbnail}

Saisissez les noms des destinataires dans la zone de saisie `Email Recipients`{.action} et cliquez sur `Save`{.action}

![Configure Alert Mail 01 ](images/ConfigureAlertMail01.PNG){.thumbnail}


#### Création d'une alerte personnalisée

Pour créer une alerte personnalisée avec des seuils de déclenchements différents

Cliquez sur `Alerts Policies`{.action} et selectionnez `User Defined`{.action}

![Create Alert 01](images/CreateAlert01.PNG){.thumbnail}

Dans la sélection de gauche Sélectionnez ce que vous voulez surveiller comme ci-dessous l'utilisation du processeur sur une seule machine virtuelle.

Ensuite en haut à droite modifiez les paramètres **Behavioral Anormaly** {.action} en cochant `Every time there is an anormaly, alert`{.action} et choisissez `Critical`{.action}.

Au milieu à droite modifiez les paramètres **Static Threshold** {.action} en cochant `Alert Critical if`{.action} et choisissez `supérieur à 60%`{.action}.

Cliquez en bas à droite sur `Save`{.action} pour valider l'enregistrement de l'alerte personnalisée.

![Create Alert 02](images/CreateAlert02.PNG){.thumbnail}

L'alerte créée apparait dans la liste

![Create Alert 03](images/CreateAlert03.PNG){.thumbnail}

#### Résoudre une alarme

Lorsqu'une alarme est déclenchée, dans **Prism Central** un rond rouge en haut à droite apparait à côté d'une cloche, cette alerte disparaitra au bout de 180 minutes si le seuil de déclenchement est revenu à la normale.

Le seuil de déclenchement peut revenir à la normale avant les 180 minutes, dans ce cas il est possible de supprimer l'alerte manuellement.

Pour supprimer une alerte manuellement

Cliquez sur le `rond rouge numéroté`{.action}.

![Show triggered alarm 01](images/ShowTriggeredAlarm01.PNG){.thumbnail}

L'alarme déclenchée apparait.

![Show triggered alarm 02](images/ShowTriggeredAlarm02.PNG){.thumbnail}

Sélectionnez l'alarme et cliquez sur `Resolve`{.action}

![Resolv Alarm 01](images/ResolvAlarm01.PNG){.thumbnail}

L'alarme est résolue et n'apparait plus dans le tableau de bord de **Prism Central**

![Resolv Alarm 02](images/ResolvAlarm02.PNG){.thumbnail}

### Affichage des événements

Cliquez dans le menu principal en haut à gauche.

Sélectionnez `Events`{.action} dans le menu Activity

![Display Events 01](images/DisplayEvents01.PNG){.thumbnail}

La liste des évènements est affichée

![Display Events 02](images/DisplayEvents02.PNG){.thumbnail}

### Affichage des tâches

Cliquez dans le menu principal en haut à gauche.

Sélectionnez `Tasks`{.action} dans le menu Activity

![Display Task 02](images/DisplayTasks01.PNG){.thumbnail}

La liste des tâches apparait

![Display Tasks 02](images/DisplayTasks02.PNG){.thumbnail}


## Aller plus loin <a name="gofurther"></a>


[Gestion des alertes et des évènement dans **Prism Central**](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-v5_20:mul-alerts-management-pc-c.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
