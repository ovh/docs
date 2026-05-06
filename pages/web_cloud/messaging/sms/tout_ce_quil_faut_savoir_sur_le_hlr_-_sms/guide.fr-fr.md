---
title: "SMS - Vérifier la validité des numéros mobiles avec le HLR Lookup"
excerpt: "Découvrez comment utiliser le HLR Lookup pour vérifier la validité des numéros mobiles de vos destinataires avant l'envoi de SMS depuis votre espace client OVHcloud"
updated: 2026-03-25
---

## Objectif

Avant d'envoyer un SMS, une requête [Home Location Register (HLR) Lookup](https://www.ovhcloud.com/fr/sms/home-location-register/) permet de vérifier si le numéro de téléphone mobile du destinataire est toujours valide et actif. Le résultat indique également l'opérateur auquel le numéro est rattaché.

En vérifiant vos numéros avec le HLR Lookup, vous améliorez la délivrabilité de vos campagnes SMS et évitez les échecs d'envoi.

![Schéma du flux HLR : tri des numéros valides et inactifs avant envoi](images/img_4065.png){.thumbnail}

Le HLR Lookup permet également de nettoyer vos listes de numéros en identifiant les numéros inactifs ou non attribués, afin de maintenir un fichier client à jour.

![Schéma du nettoyage d'une liste de numéros via HLR](images/img_4067.png){.thumbnail}

> [!primary]
>
> Le HLR Lookup est une action indépendante de l'envoi de SMS. C'est à vous de l'effectuer avant chaque campagne ou lors du nettoyage de vos listes de contacts.

**Ce guide vous explique comment utiliser le HLR Lookup depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'un [compte SMS OVHcloud](/links/control-panel/telecom-sms) avec des crédits SMS.

## En pratique

<!-- CP-NAV-START:telecom-sms -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [SMS](/links/control-panel/telecom-sms)
- **Pour accéder à vos services :** `Télécom`{.action} > `SMS`{.action} > Sélectionnez votre compte SMS

---
<!-- CP-NAV-END:telecom-sms -->

<!-- CP-STEPS-START:hlr-access -->
![espace client Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-fr-sms.png){.thumbnail}

Sélectionnez l'onglet `Message et campagne`{.action} > `Gestion des SMS`{.action}.

![Gestion SMS](images/gestion-des-sms.png){.thumbnail}

Cliquez sur `HLR`{.action}.

![Section HLR dans l'espace client](images/img_4792.png){.thumbnail}
<!-- CP-STEPS-END:hlr-access -->

### Nouvelle requête HLR

<!-- CP-STEPS-START:hlr-new-request -->
Renseignez le numéro à tester puis cliquez sur `Envoyer la requête`{.action}.

![Formulaire de nouvelle requête HLR](images/img_4793.png){.thumbnail}

Chaque requête est facturée 0,1 crédit SMS. Consultez la [grille tarifaire SMS](/links/telecom/sms-prices) pour plus de détails.
<!-- CP-STEPS-END:hlr-new-request -->

### Consulter les requêtes passées

<!-- CP-STEPS-START:hlr-past-requests -->
Les résultats de vos requêtes apparaissent dans le tableau en bas de page.

![Tableau des résultats de requêtes HLR](images/tableau-historique.png){.thumbnail}
<!-- CP-STEPS-END:hlr-past-requests -->

### Les différents états

Les rapports HLR indiquent :

- la date de la requête HLR ;
- le coût de la requête HLR ;
- le statut de la requête HLR ;
- le numéro du destinataire ;
- l'opérateur du destinataire ;
- le statut actif/inactif du destinataire ;
- la joignabilité du destinataire ;
- le statut porté du destinataire ;
- le statut en itinérance du destinataire.

### Importation du fichier de destinataires

<!-- CP-STEPS-START:import-contacts -->
Rendez-vous dans la partie `Contacts`{.action} > `Créer une liste de contacts`{.action} et ajoutez votre fichier au format `.csv` ou `.txt`.

![Créer une liste de contacts](images/creer-liste-contacts.png){.thumbnail}

![Ajout fichier contacts](images/ajouter-fichier-contacts.png){.thumbnail}

Consultez le guide « [Liste de destinataires SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms) » pour plus de détails.
<!-- CP-STEPS-END:import-contacts -->

### Nettoyer le fichier

<!-- CP-STEPS-START:clean-contact-list -->
Une fois votre carnet chargé sur l'espace client, sélectionnez-le et procédez au nettoyage.

![Sélection du carnet de contacts à nettoyer](images/nettoyer-liste.png){.thumbnail}

2 options sont disponibles :

- Freemium : dédoublonnage et vérifications syntaxiques (gratuit).
- Premium : dédoublonnage et vérification de la validité des contacts via une requête HLR (cette action sera facturée 0,1 crédit SMS par contact).

![Options de nettoyage Freemium et Premium](images/options-de-nettoyage.png){.thumbnail}

Le nettoyage de la base dédoublonnera vos contacts et éliminera ceux qui sont invalides.
Le fichier nettoyé remplacera l'ancien qui sera sauvegardé et accessible. Vous recevrez un rapport par e-mail à la fin de l'opération.
<!-- CP-STEPS-END:clean-contact-list -->

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
