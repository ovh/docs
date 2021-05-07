---
title: Monitoring
slug: monitoring
legacy_guide_number: '7962638'
space_key: CRXDSL
space_name: XDSL
section: Diagnostic et dépannage
---
**Dernière mise à jour le 07/08/2021**
---
## Objectif {#préambule}

Le monitoring permet de vous alerter lorsque votre accès n'est plus joignable selon une fréquence définie. Les notifications seront effectives lorsque votre accès ne répondra plus aux requêtes ICMP (ping).
Les notifications sont envoyées par e-mail ou par SMS. (Il faut que votre compte SMS soit crédité.)

**Sommaire :**

Niveau : Débutant

## En pratique

------------------------------------------------------------------------

### Prérequis {#prérequis}

-   Disposer d'un accès ADSL / SDSL qui répond aux requêtes ICMP (OK par défaut sur les modems distribués par OVH).
-   Une adresse e-mail pour recevoir les notifications.
-   Un compte SMS crédité si vous souhaitez recevoir les SMS de notifications sur votre mobile.

------------------------------------------------------------------------

#### Accéder au menu de gestion des alertes

Pour pouvoir gérer vos alertes:

-	Connectez-vous à votre Espace Client : https://www.ovhtelecom.fr/manager/
-	Cliquez sur l’onglet “Accès Internet”.
-	Cliquez sur votre packadsl sur le menu de gauche (packadsl-xxxxxxx).
-	Cliquez sur votre accès internet sur la droite (xdsl-xxxxxxx-1)


Au centre de la page dans les informations générales cliquez sur “Afficher les alertes“.
Vous arrivez alors sur le formulaire de création de notification.

![](images/XDSL%20monitoring.png){.thumbnail}
------------------------------------------------------------------------

#### Notifications par e-mail {#notifications-par-e-mail}

Pour créer une notification par e-mail :

-	Cliquez sur “Ajouter une alerte”. 
-	Sélectionnez “E-mail” dans le menu déroulant correspondant au type de notification.
-	Indiquez le mail à notifier et la fréquence.
-	Cliquez sur le bouton valider en bout de ligne.

La partie “fréquence” vous permet de choisir la fréquence des notifications e-mail lors d’une coupure. Si vous sélectionnez une fois vous recevrez un mail à la coupure et un mail au rétablissement de l’accès.

Si vous ajoutez une adresse commune à plusieurs accès, vous recevrez un seul e-mail contenant toutes les notifications de coupure.

![](images/XDSL%20Monitoring%20alerte.png){.thumbnail}

------------------------------------------------------------------------

#### Notifications par SMS {#notifications-par-sms}

-	Cliquez sur “Ajouter une alerte”. 
-	Sélectionnez “SMS” dans le menu déroulant correspondant au type de notification.
-	Dans le champ “Compte SMS à débiter“, choisissez le compte SMS à utiliser pour envoyer les notifications.
-	Dans le champ “Numéro de téléphone“, entrez le numéro de mobile à notifier au format International (00336xxxxxxx).
-	Dans la partie “Fréquence“, choisissez la fréquence des notifications SMS lors d’une coupure.
-	Cliquez sur le bouton valider en bout de ligne.

![](images/XDSL%20Monitoring%20alerte.png){.thumbnail}

Vous recevrez un SMS indiquant la perte de votre accès.

<img src="https://github.com/ovh/docs/blob/TimG/pages/telecom/xdsl/monitoring/images/Screenshot_2015-05-25-08-33-15.png" alt="fault domain informations" width="50%" height="50%">

------------------------------------------------------------------------

#### Supprimer les notifications {#supprimer-les-notifications}

Vous pouvez, si vous le souhaitez, supprimer une ou la totalité des notifications en place. 

Pour ce faire :
•	Cliquez sur la poubelle correspondant à la notification à supprimer.
•	Cliquez sur “OK” pour confirmer la suppression.

------------------------------------------------------------------------

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
