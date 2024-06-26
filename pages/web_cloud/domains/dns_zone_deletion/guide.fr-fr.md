---
title: "Comment supprimer une zone DNS OVHcloud"
excerpt: "Découvrez comment supprimer une zone DNS pour votre nom de domaine via votre espace client OVHcloud"
updated: 2024-06-26
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine est son fichier de configuration. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Pour plus d'information sur les zones et les serveurs DNS, consultez les guides suivants : 

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Vous pouvez, par exemple, être amené à supprimer une zone DNS pour votre nom de domaine chez OVHcloud dans les cas suivants (liste non exhaustive) :

- Vous utilisez une zone DNS active pour votre nom de domaine chez un autre fournisseur que OVHcloud.
- Vous n'utilisez plus le nom de domaine associé à la zone DNS présente chez OVHcloud.
- Vous avez migré vos services chez un autre fournisseur et vous souhaitez résilier vos services OVHcloud.

> [!primary]
>
> La création / modification / suppression d'une zone DNS dans votre [espace client OVHcloud](/links/manager) est totalement gratuite.
>

**Découvrez comment supprimer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Avoir une zone DNS dans votre espace client OVHcloud.
- Disposer des droits suffisants sur la zone DNS à supprimer. Retrouvez plus d'informations sur notre guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

## En pratique

> [!warning]
>
> Avant de poursuivre, vérifiez que la zone DNS que vous souhaitez supprimer n'est plus utilisée par votre nom de domaine.
>
> En effet, si vous supprimez la zone DNS active pour votre nom de domaine, cela engendrera une interruption de vos services en ligne (site web, adresses e-mail, etc.).
>
> Effectuez un [WHOIS](/links/web/domains-whois) de votre nom de domaine pour savoir si la zone DNS active de votre nom de domaine est celle présente chez OVHcloud ou non.
>
> Si la zone DNS active pour votre nom de domaine est celle présente chez OVHcloud et que vous souhaitez remplacer celle-ci par une zone DNS hébergée ailleurs, consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) » avant d'effectuer une quelconque suppression de zone DNS.
>

### Étape 1 - Initier la suppression d'une zone DNS OVHcloud

Pour initier la suppression d'une zone DNS OVHcloud, effectuez les actions suivantes : 

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Noms de domaine`{.action}.
4. Sélectionnez le nom de domaine ou la zone DNS concernée.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Zone DNS`{.action} pour accéder au tableau listant toutes les entrées DNS de la zone DNS.
6. Sur la partie droite (ou en dessous du tableau en fonction de la résolution de votre écran), cliquez sur le bouton `Supprimer la zone DNS`{.action}.

![delete the DNS zone](images/delete-the-dns-zone.png){.thumbnail}

Dans la fenêtre qui s'ouvre, prenez connaissance des messages indiqués à l'intérieur.

![delete the DNS zone validation](images/delete-the-dns-zone-confirmation.png){.thumbnail}

Cliquez sur le bouton `Valider`{.action} pour terminer la première étape de suppression de la zone DNS.

### Étape 2 - Confirmer la suppression d'une zone DNS OVHcloud

Suite à l'étape précédente, un e-mail pour confirmer la suppression de la zone DNS est envoyé à l'adresse e-mail du contact « [Administrateur](/pages/account_and_service_management/account_information/managing_contacts) » de la zone DNS OVHcloud.

> [!success]
>
> Si vous ne reçevez pas l'e-mail, vérifiez dans vos courriers indésirables.
>

Cet e-mail contient deux liens valables pendant **72** heures à compter du moment où vous avez terminé l'étape 1 de ce guide.

Cliquez sur le **lien de validation** pour poursuivre la suppression de la zone DNS OVHcloud ou sur le **lien d'annulation** pour arrêter la démarche de suppression de la zone DNS OVHcloud.

> [!primary]
>
> Si la redirection des liens ne fonctionne pas, faites un **copier/coller** du lien dans la barre d'URL de votre navigateur Internet. Reconnectez-vous à votre [espace client OVHcloud](/links/manager) si nécessaire.
>

Si vous cliquez sur le lien de validation, vous serez redirigé vers une nouvelle page OVHcloud qui vous demandera le(s) motif(s) de suppression de la zone DNS OVHcloud.

![cancel the service](images/cancel-my-service.png){.thumbnail}

Une fois le formulaire rempli et si vous êtes absolument sûr de vouloir supprimer la zone DNS OVHcloud définitivement, cliquez sur le bouton `Valider`{.action} en bas de page.

Un dernier e-mail de confirmation sera envoyé à l'adresse e-mail du contact « [Administrateur](/pages/account_and_service_management/account_information/managing_contacts) » de la zone DNS OVHcloud, afin de confirmer la suppression.

## Aller plus loin

[Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).