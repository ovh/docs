---
title: "Tout ce qu’il faut savoir sur le HLR - SMS"
excerpt: "Découvrez comment utiliser le HLR pour vos SMS OVHcloud"
updated: 2018-03-26
---

## Principes

Les requêtes HLR vous permettent de savoir si un numéro de téléphone mobile est valide avant de lui envoyer un SMS.
Si le numéro est valide, le résultat vous permettra de connaître l'opérateur sur lequel le téléphone est enregistré.

## Usages

Optimisation de campagne SMS : Vous envoyez un nombre important de SMS, vous souhaitez vous assurer un haut niveau de délivrabilité et éviter les échecs d'envoi ?
En utilisant le HLR Lookup vous vérifiez la validité du numéro avant de consommer un SMS.

![Optimisation de campagne SMS via HLR](images/img_4065.jpg){.thumbnail}

Nettoyer des listes de numéros : Vous disposez de fichiers clients, vous souhaitez qualifier les numéros de mobiles ?
Le HLR Lookup vous indique si le numéro est actif et attribué.
Vous tenez ainsi à jour votre fichier client et vos données conservent leur valeur.

![Nettoyage de liste de numéros via HLR](images/img_4067.jpg){.thumbnail}

<!-- CP-NAV-START:telecom-sms -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [SMS](/links/control-panel/telecom-sms)
- **Pour accéder à vos services :** `Télécom`{.action} > `SMS`{.action} > Sélectionnez votre compte SMS

---
<!-- CP-NAV-END:telecom-sms -->

Cliquez sur le menu `Message et campagne`{.action} > `Gestion des SMS`{.action}

Cliquez ensuite sur la partie `HLR`{.action}.

![Section HLR dans l'espace client](images/img_4792.jpg){.thumbnail}

## Nouvelle requête HLR

Renseignez le numéro que vous souhaitez tester puis cliquez sur `Envoyer la requête`{.action}.

![Formulaire de nouvelle requête HLR](images/img_4793.jpg){.thumbnail}

Chaque requête est facturée 0,1 crédit SMS. Consultez la [grille tarifaire SMS](/links/telecom/sms-prices) pour plus de détails.

## Consulter les requêtes passées

Vous retrouverez les résultats de vos requêtes dans le tableau ci-dessous :

![Tableau des résultats de requêtes HLR](images/img_4794.jpg){.thumbnail}

## Les différents états

Les rapports HLR vous informeront des points suivants :

- la date de la requête HLR
- le coût de la requête HLR
- le statut de la requête HLR
- le numéro du destinataire
- l'opérateur du destinataire
- le statut actif/inactif du destinataire
- la joignabilité du destinataire
- le statut porté du destinataire
- le statut en itinérance du destinataire.

## Importation du fichier de destinataires

Rendez-vous dans la partie `Contacts`{.action} > `Créer une liste de contacts`{.action} et ajoutez votre fichier au format .csv ou .txt.

Retrouvez plus d'informations dans notre guide « [Liste de destinataires SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms) ».

## Nettoyer le fichier

Une fois votre carnet chargé sur l'espace client, sélectionnez-le et procédez au nettoyage.

![Sélection du carnet de contacts à nettoyer](images/img_4796.jpg){.thumbnail}

Deux options vous sont proposées :

- Freemium : Dédoublonnage et vérifications syntaxiques (Gratuit).
- Premium : Dédoublonnage et vérification de la validité des contacts via une requête HLR (Cette action sera facturée 0.1 crédit SMS par contact)

![Options de nettoyage Freemium et Premium](images/img_4797.jpg){.thumbnail}

Le nettoyage de la base dédoublonnera vos contacts et éliminera ceux qui sont invalides.
Le fichier nettoyé remplacera l'ancien qui sera sauvegardé et accessible. Vous recevrez un rapport par e-mail à la fin de l'opération.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

