---
title: 'Gérer et utiliser les mailing lists'
slug: guide-dutilisation-mailing-list
excerpt: 'Decouvrez dans ce guide comment utiliser les listes de diffusion.'
section: 'Fonctionnalités des adresses e-mail'
order: 4
---

**Dernière mise à jour le 13/02/2020**

## Objectif

Une mailing list vous permet de contacter des abonnés en masse, c'est à dire de diffuser un message ou une information à plusieurs destinataires à la fois. Cela peut avoir un intérêt dans le cadre d'un mailing d'information, par exemple, sur la sortie d'un nouveau produit (pour un site e-commerce) ou pour informer d'un prochain rassemblement (pour un site communautaire). 

**Découvrer comment gérer vos mailing-lists**

### Principe de la modération

Une mailing list peut être modérée pour éviter que n'importe qui n'envoie d'e-mail à votre liste d'abonnés. Une mailing list modérée pourra servir à l'envoi de newsletters, tandis qu'une mailing list non modérée permettra de réaliser facilement un dialogue entre plusieurs abonnés par e-mail.

**Mailing list sans modération**

![emails](images/manage_mailing-lists_no-modarate.png){.thumbnail}

L'expéditeur (sender) transmet l'e-mail à la mailing list, les abonnés (subscribers) recoivent directement l'e-mail.

**Mailing list avec modération**

![emails](images/manage_mailing-lists_modarate.png){.thumbnail}

L'expéditeur (sender) transmet l'e-mail à la mailing list. Le modérateur (moderator) reçoit un e-mail avec une demande de validation ou de refus. Si le modérateur valide, les abonnés (subscribers) recoivent l'e-mail transmis à la mailing list. Si le modérateur refuse, l'email de l'expéditeur est effacé et les abonnées ne reçoivent rien.

> [!warning]
>
> - Une mailing list n'est pas une solution prévue pour l'envoi de spam (messages de publicités) en masse. Cette utilisation est tolérée dans une certaine mesure tant qu'elle ne se révèle pas abusive.
> - Un abonné peut, à tout moment, décider de se désinscrire d'une mailing list. Il peut également reporter tout abus s'il le juge avéré.
>

## Prérequis

- Disposez d'une offre e-mail MX Plan 100 minimum ou d'un [Hébergement Web](https://www.ovh.com/fr/hebergement-web/){.external} éligible aux listes de diffusion.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/manager/web/login/){.external}.

## En pratique

### Créer sa mailing list

Afin de créer votre mailing list, rendez-vous dans votre [Espace client OVHcloud](http://www.ovh.com/manager/web){.external}  et sélectionnez l'onglet `Web`{.action} en haut.

Une fois connecté, cliquez dans la colonne de gauche sur `Emails`{.action} puis sur le nom de domaine concerné. Dirigez-vous sur l'onglet `mailing lists`{.action} de votre service e-mail.

![emails](images/manage_mailing-lists_01.png){.thumbnail}

Si vous avez déjà créé des mailing lists, celles-ci apparaissent dans le tableau récapitulatif. Dans l'exemple ci-dessous, une mailing list a déjà été créée.

Pour créer une nouvelle mailing list, cliquez sur `Ajouter une mailing list`{.action}.

![emails](images/manage_mailing-lists_02.png){.thumbnail}

Complétez le formulaire selon les informations décrites dans le tableau ci-dessous:

| Information                      	| Description                                                                                                            	|
|----------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| Nom                              	| Le nom de votre mailing list.                                                                                          	|
| Propriétaire                     	| Saisissez l'adresse e-mail du propriétaire de la mailing list (il sera aussi modérateur).                              	|
| Réponse à                        	| Definissez le(s) destinataire(s) lorsque qu'un abonné répond à la mailing-list.                                        	|
| Langue                           	| Sélectionnez la langue des mentions automatiques d'inscription ou de désinscription de votre mailing list.				|
| Modérer tous les messages         | Le propriétaire ou un modérateur doit approuver l'e-mail envoyé à la mailing-list.                                     	|
| Seuls les abonnés peuvent poster 	| Restreint l'envoi d'e-mails sur la mailing list aux seules abonnés de celle-ci.              								|
| Tout le monde peut poster (aucune modération) | L'envoi d'un e-mail à la mailing-list est directement envoyé aux abonnés sans validation.             		|
| Modération des abonnés         	| Le propriétaire, ou un modérateur, doit approuver les inscriptions à la mailing-list.                                    	|


![emails](images/manage_mailing-lists_03.png){.thumbnail}


> [!primary]
>
> Nombre maximum d'abonnés à la mailing list :
>
> - 5000 si modération des messages
> - 250 sans modération des messages
>


### Gérer les options de la mailing list

Pour modifier les options de la mailing list, cliquez sur `...`{.action} à droite de celle-ci. Vous pourrez alors mettre à jour les options, supprimer la mailing list ou encore partager la liste de ses abonnés par e-mail. 

![emails](images/manage_mailing-lists_04.png){.thumbnail}


### Gérer les abonnés

Pour gérer les abonnés de votre mailing list, cliquez sur la silhouette dans la colonne «Abonnés».

![emails](images/manage_mailing-lists_05.png){.thumbnail}

La fenêtre suivante apparait :

![emails](images/manage_mailing-lists_06.png){.thumbnail}

#### Ajouter/Supprimer des abonnés

|Ajouter des abonnés|Supprimer des abonnés|
|---|---|
|Cliquez sur `Ajouter des abonnés`{.action} à droite.|Cliquez sur `Supprimer via un fichier`{.action} à droite.|
|![emails](images/manage_mailing-lists_07.png){.thumbnail}|![emails](images/manage_mailing-lists_07b.png){.thumbnail}|

Il y a 2 méthodes pour ajouter/supprimer des abonnés:

- la saisie manuelle d'adresses en cliquant sur `Ajouter une adresse email`{.action}.
- l'import d'un fichier texte contenant une adresse email par ligne, en cliquant sur l'icône de téléchargement au dessus du cadre de saisie.

#### Exporter votre liste d'abonnés vers un fichier CSV

Cliquez sur `exporter les abonnés en CSV`{.action} afin de générer un fichier CSV contenant l'ensemble de vos abonnés. Cette option n'est pas disponible dans notre cas car aucun abonné n'a été ajouté.
 
### Gérer les modérateurs

Pour gérer les modérateurs de votre mailing list, cliquez sur la silhouette dans la colonne « Modérateurs ».

![emails](images/manage_mailing-lists_08.png){.thumbnail}

La fenêtre suivante apparait :

![emails](images/manage_mailing-lists_09.png){.thumbnail}

#### Ajouter/Supprimer des modérateurs

|Ajouter des modérateurs|Supprimer des modérateurs|
|---|---|
|Cliquez sur `Ajouter des modérateurs`{.action} à droite.|Cliquez sur `Supprimer via un fichier`{.action} à droite.|
|![emails](images/manage_mailing-lists_10.png){.thumbnail}|![emails](images/manage_mailing-lists_10b.png){.thumbnail}|

Il y a 2 méthodes pour ajouter/supprimer des modérateurs:

- la saisie manuelle d'adresses en cliquant sur `Ajouter une adresse email`{.action}.
- l'import d'un fichier texte contenant une adresse email par ligne, en cliquant sur l'icône de téléchargement au dessus du cadre de saisie.

> [!primary]
> - Lorsque plusieurs modérateurs sont définis sur une mailing list, la validation d'un seul des modérateurs suffit pour que l'e-mail soit diffusé aux abonnés.
> - Lorsqu'un modérateur envoie un e-mail à la mailing list, seul lui reçoit l'e-mail de modération.
> 

Selon le nombre d'abonnés à ajouter, cela peut prendre un certains temps afin de réaliser l'opération.


### S'inscrire à une mailing list

Si quelqu'un souhaite s'inscrire à votre mailing list, il lui suffit d'envoyer un e-mail à :


```bash
nom_de_votre_ML-subscribe@votredomaine.com
```


### Se désinscrire d'une mailing list

Si un abonné souhaite se désinscrire de votre mailing list, il lui suffit d'envoyer un e-mail à :


```bash
nom_de_votre_ML-unsubscribe@votredomaine.com
```


### Suppression automatique des adresses erronées

Le système de mailing list ne supprime pas un abonné de la liste après un seul retour d'erreur (message non délivré, adresse inexistante...). Il attend environ 12 jours après le premier échec d'envoi, puis envoie un message d'avertissement à l'abonné.

Le message d'avertissement indique les références des messages manqués. Si ce message d'avertissement tombe en échec également, notre système de mailing list attend encore 12 jours puis envoie un message "test". Si ce message de test tombe également en erreur, l'abonné est effacé de la liste des abonnés.


### Erreurs récurrentes

#### Envoi sans indiquer de sujet dans l'e-mail

Un envoi vers une mailing list doit obligatoirement contenir un sujet. Sans cela, une erreur sera automatiquement générée et un e-mail de retour en erreur sera envoyé à l'expéditeur de l'envoi.

L'expéditeur de l'e-mail sans objet recevra donc un mail de retour en erreur comme visible ci-dessous :


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```


#### Envoi en renseignant l'adresse de la mailing list en copie cachée

Pour envoyer un message à une mailing list, l'adresse de celle-ci doit obligatoirement se trouver soit dans le champ « To », soit dans le champ « Copie à » (Cc).

Si le client renseigne l'adresse dans le champ « Copie Cachée », une erreur lui sera alors retournée.

L'expéditeur de l'e-mail recevra un retour d'erreur :


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```


### Personnalisation avancée

Vous pouvez personnaliser la plupart des textes de votre mailing list. En tant que modérateur, vous devez envoyer un e-mail vide à nom_de_votre_ML- [edit@votredomaine.com](mailto:edit@votredomaine.com){.external}.

- Exemple : Votre mailing list est [newsletter@testinterne.ovh](mailto:newsletter@testinterne.ovh){.external} . Depuis votre adresse e-mail modérateur, il vous faudra envoyer un message à [newsletter-edit@testinterne.ovh](mailto:newsletter-edit@testinterne.ovh){.external} .

Vous recevrez alors un e-mail qui vous guidera pour effectuer vos modifications.

Ci-dessous, une liste des fichiers contenant les textes de réponses et une brève description de l'utilisation de leur contenu. Pour éditer un fichier, envoyez simplement un message à envoi-edit.fichier, en substituant le nom du fichier à 'fichier'. Les instructions d'édition seront envoyées avec le fichier de texte.


|Fichier|Utilisation|
|---|---|
|bottom|pied de page de toutes les réponses : infos générales.|
|digest|section 'administrative' des bulletins periodiques.|
|faq|réponses aux questions fréquentes au sujet de cette liste.|
|get_bad|dans le cas de messages absents des archives.|
|help|aide générale (entre 'top' et 'bottom').|
|info|informations sur la liste. La première ligne en est un résumé.|
|mod_help|aide spécifique aux modérateurs de liste.|
|mod_reject|à l'expéditeur d'envois refusés.|
|mod_request|aux modérateurs avec un envoi.|
|mod_sub|à l'abonné après confirmation d'inscription du modérateur.|
|mod_sub_confirm|aux modérateurs pour valider une inscription.|
|mod_timeout|à l'expéditeur d'un message non valide depuis longtemps.|
|mod_unsub_confirm|à un administrateur pour demander une désinscription.|
|sub_bad|à l'abonné si la confirmation était mauvaise.|
|sub_confirm|à l'abonné pour confirmer sa requête.|
|sub_nop|à l'abonné après une nouvelle inscription.|
|sub_ok|à l'abonné après un abonnement réussi.|
|top|en-tête de chaque réponse.|
|trailer|ajouté à la fin de chaque contribution à la liste.|
|unsub_bad|à l'abonné si la confirmation de désinscription est fausse.|
|unsub_confirm|à l'abonné pour demander confirmation de désinscription.|
|unsub_nop|à un non-abonné après une demande de désabonnement.|
|unsub_ok|à un ex-abonné après une désinscription réussie.|

> [!primary]
>
> Exemple : Si vous souhaitez modifier le pied de page par défaut des e-mails envoyés à votre mailing list, il vous faudra envoyer un message à l'adresse « newsletter-edit.bottom@testinterne.ovh ». Vous recevrez alors un nouvel e-mail vous expliquant comment personnaliser le pied de page.
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur https://community.ovh.com