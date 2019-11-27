---
title: 'Gérer l’historique des SMS'
slug: gerer-l-historique-des-sms
excerpt: 'Découvrez comment consulter l’historique de vos SMS envoyés depuis votre compte OVHcloud'
legacy_guide_number: '8650753'
space_key: CRSMSFAX
space_name: SMS
section: 'Gérer mon offre'
---

**Dernière mise à jour le 19/11/2019**

## Objectif
Votre espace client OVHcloud vous permet de consulter et télécharger l'historique de vos SMS envoyés. Ce guide vous décrit comment effectuer ces actions.

## Prérequis

- Avoir accès à votre compte OVHcloud.
- Disposer d’un compte SMS OVHcloud avec avec au moins 1 SMS envoyé.

## En pratique

L'historique comprend la date, l'heure, l'expéditeur, le destinataire ainsi que le contenu du SMS envoyé.

> [!primary]
>
> L'espace client ne pourra afficher que les 6 derniers mois de votre historique. Pour consulter des SMS plus anciens, consultez [l'Étape 2 : télécharger l'historique de vos SMS en CSV](https://docs.ovh.com/fr/sms/gerer-l-historique-des-sms/#etape-2-telecharger-lhistorique-de-vos-sms-en-csv).
>


### Étape 1 : consulter l'historique dans votre espace client

Connectez-vous à votre [espace client](https://www.ovhtelecom.fr/manager/) puis sélectionnez `Télécom`{.action} (1). Cliquez ensuite sur `SMS`{.action} à gauche (2)  puis choisissez votre compte SMS (3).

Dans la barre d'onglets, choisissez `SMS`{.action} (4) puis `Historique des envois`{.action} (5)

![](images/smshistory1.png){.thumbnail}

Vous pouvez cliquer sur la date à gauche pour trier votre historique par date d'envoi.

![](images/smshistory2.png){.thumbnail}

La rubrique Actions `...`{.action} en face de chaque SMS vous permet de le consulter ou le supprimer.

![](images/smshistory3.png){.thumbnail}

Pour supprimer plusieurs SMS à la fois, il suffit de cocher les cases à côté de chacun d'entre eux. Le bouton `Supprimer les éléments sélectionnés`{.action} apparaitra alors au dessus de l'historique.

![](images/smshistory4.png){.thumbnail}
 
Le bouton `Filtrer`{.action} vous permet de filtrer la recherche par expéditeur (si vous disposez de plusieurs expéditeurs) ou par destinataire.

![](images/smshistory5.png){.thumbnail}
 
### Étape 2 : télécharger l'historique de vos SMS en CSV
 
Cliquez sur le bouton `Actions`{.action} à gauche au dessus de votre historique puis sur `Télécharger`{.action} pour télécharger l'historique de vos SMS envoyés au format « .csv ». 
 
![](images/smshistory6.png){.thumbnail}
 
Vous pourrez alors consulter l'historique depuis un outil de type tableur. Les informations pourront être affichées comme dans l'exemple ci-dessous.

![](images/smshistory7.png){.thumbnail}

Voici le détail des informations contenues dans cet historique :

|  Titre  |  Description  |
|  :-----          |  :-----          |
|  id |  l'idenfiant unique sur nos serveurs du SMS envoyé |
|  date | la date et heure d'envoi du SMS  |
|  sender |  l'expediteur depuis lequel le SMS a été envoyé |
|  receiver |  le numero du mobile destinataire du SMS |
|  ptt |  le code de retour sur le statut du SMS |
|  operatorCode |  l'identifiant réseau de l'opérateur mobile à qui nous avons transmis le SMS |
|  descriptionDlr |  la description du code ptt reçu et donc du statut du SMS |
|  tag |  le tag attribué manuellement via les API (à un ou plusieurs SMS) ou automatiquement par nos serveurs à chacun des SMS (ou chaque campagne de SMS) envoyés |
|  message |  le contenu du SMS |

Vous trouverez plus de détails sur les codes ptt et les différents ID du DLR en consultant la dernière section du guide [Tout savoir sur les utilisateurs SMS](https://docs.ovh.com/fr/sms/tout_savoir_sur_les_utilisateurs_sms/#etape-5-specifier-une-url-de-callback).
 
## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.