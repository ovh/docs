---
title: 'Suivre et gérer les e-mails automatisés de son hébergement web'
slug: suivi-emails-automatises
excerpt: 'Apprenez à suivre et gérer les e-mails automatisés envoyés depuis votre hébergement web OVHcloud'
section: Diagnostic
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Les e-mails automatisés sont des messages envoyés via des scripts. Ils sont par exemple utilisés dans un formulaire de contact de votre site internet et permettent à vos visiteurs de vous envoyer des messages.

**Apprenez à suivre et gérer les e-mails automatisés envoyés depuis votre hébergement web OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Ce guide ne concerne que les e-mails envoyés depuis des scripts situés sur votre hébergement web OVHcloud.
>
> Vous souhaitez gérer les adresses e-mail comprises dans votre offre MX Plan ou dans votre offre d'[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external} ? Rendez-vous dans la section `Emails`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.
>

## En pratique

Le suivi et la gestion des e-mails automatisés de votre hébergement web OVHcloud s'effectuent depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Pour cela, connectez-vous à ce dernier, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement concerné dans la liste. Cliquez ensuite sur l'onglet `Plus +`{.action}, puis sur `Scripts emails`{.action}.

La page qui s'affiche alors vous permet de suivre et de gérer les e-mails automatisés envoyés depuis votre hébergement web OVHcloud.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Suivre les envois d'e-mails automatisés

Toujours positionné dans la partie `Scripts emails`{.action}, la page affiche plusieurs informations vous permettant de visualiser en un coup d’œil l'activité des envois d'e-mails automatisés générés depuis vos scripts.

|Information|Détails|
|---|---|
|État du service|Affiche l'état actuel du service réalisant les envois d'e-mails automatisés de votre hébergement web. Un état dans un cadre vert signifie que les envois sont opérationnels, contrairement à un état dans un cadre rouge qui signifie que les envois ne s'effectuent plus. Selon cet état, la gestion des envois sera différente ; voir [« Gérer les envois d'e-mails automatisés »](../suivi-emails-automatises/#gerer-les-envois-de-mails-automatises){.external}.|
|Rapport d'erreurs à|Recevez un rapport d'erreur quotidien sur l'adresse e-mail de votre choix. Vous pouvez la définir grâce au bouton `Changer le destinataire`{.action}. Ce rapport comporte les e-mails envoyés depuis votre hébergement web revenus en erreur chez OVHcloud car ils n'ont pas pu être desservis. Un bouton `Emails en erreur`{.action} permet également de consulter ces rapports à tout moment depuis votre espace client OVHcloud.|
|Total des e-mails envoyés|Affiche le nombre total des e-mails automatisés envoyés depuis la création de votre hébergement web OVHcloud.|
|E-mails envoyés aujourd'hui|Affiche le nombre total des e-mails automatisés envoyés aujourd'hui uniquement.|
|Total des e-mails en erreur|Affiche le nombre total des e-mails automatisés envoyés depuis la création de votre hébergement web qui sont revenus en erreur chez OVHcloud car ils n'ont pas pu être desservis.|
|Historique des e-mails envoyés|Affiche un graphique représentant l'historique des e-mails envoyés depuis votre hébergement web sur les jours précédents.|

> [!primary]
>
> Afin d'éviter une utilisation non souhaitée des e-mails automatisés de votre hébergement web, nous vous recommandons vivement de mettre en place un système de sécurité, comme un captcha dans les formulaires de votre site internet réalisant des envois d'e-mails (un formulaire de contact par exemple).
>

![hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Si vous constatez que les e-mails générés depuis vos scripts ne sont plus envoyés alors que l'état du service permet toujours les envois, nous vous conseillons de :

- **vérifier les scripts réalisant les envois** : les scripts peuvent ne pas réussir l'envoi des e-mails à cause d'une erreur de syntaxe. Vérifiez le contenu de vos scripts, corrigez-les si nécessaire, puis effectuez un nouvel essai ;

- **tester l'envoi d'un e-mail via un script de test** : créez un script de test réalisant l'émission d'un e-mail vers votre adresse personnelle. Si vous recevez correctement le message, cela indique que vos scripts chargés des envois comportent des erreurs. En fonction de vos connaissances à ce sujet, il est possible de trouver des scripts de test sur internet ;

- **réaliser vos envois sans utiliser de serveur SMTP** : ne spécifiez pas de serveur SMTP dans les paramètres de vos scripts. Si vous disposez d'une interface pour administrer les envois d'e-mails depuis votre site internet, ce paramètre doit pouvoir être modifié dans la configuration de ce dernier.

### Gérer les envois d'e-mails automatisés

Toujours positionné dans la partie `Scripts emails`{.action}, plusieurs boutons permettent de gérer les envois d'e-mails automatisés depuis votre hébergement web. Selon l'état du service, certains peuvent ne pas être disponibles.

|Actions|Détails|
|---|---|
|Bloquer l'envoi|Permet de bloquer la distribution des envois d'e-mails automatisés de votre hébergement web. Les e-mails générés par vos scripts après le blocage ne seront pas envoyés, mais conservés dans une file d'attente pendant 72 heures maximum.|
|Débloquer l'envoi|Permet de débloquer l'envoi des e-mails automatisés de votre hébergement web. Les e-mails présents dans la file d'attente seront également remis en distribution.|
|Purger les e-mails|Permet d'effacer les e-mails présents dans la file d'attente et de débloquer leur envoi.|

Pour réaliser l'action souhaitée, cliquez sur le bouton correspondant, puis sur `Valider`{.action}. Dans certain cas, l'action souhaitée peut nécessiter plusieurs minutes pour être pleinement effective.

![hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
