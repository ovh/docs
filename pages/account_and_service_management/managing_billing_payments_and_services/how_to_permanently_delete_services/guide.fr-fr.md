---
title: 'RGPD - Comment supprimer immédiatement vos services OVHcloud'
excerpt: "Découvrez comment supprimer vos services OVHcloud immédiatement et de manière irréversible, dans le cadre d'une demande RGPD d'effacement des données"
updated: 2025-12-16
hidden: true
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Dans le cadre du Règlement Général sur la Protection des Données (RGPD), vous pouvez exercer le droit de suppression de votre compte OVHcloud ainsi que de tous les services qu'il contient.

**Ce guide explique comment supprimer vos services OVHcloud immédiatement et de manière irréversible, dans le cadre d'une demande RGPD d'effacement des données.**

## Prérequis

- Avoir vérifié que toutes vos données ont été sauvegardées.

<!-- CP-NAV-START:billing-services -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Mes offres et services](/links/control-panel/billing-services)
- **Pour y accéder :** Cliquez sur votre nom en haut à droite > `Mes offres et services`{.action}

---
<!-- CP-NAV-END:billing-services -->

## En pratique

Pour lister vos services, ouvrez la page [Mes offres et services](/links/control-panel/billing-services).

> [!alert]
>
> Les étapes décrites ci-dessous décrivent comment supprimer des services OVHcloud de façon **immédiate** et **irréversible**.
>
> Il vous incombe de vérifier au préalable que vous disposez d'une sauvegarde de vos données et/ou que vous disposez d'un service de remplacement.
>
> L'action de supprimer un service OVHcloud n'octroie aucun remboursement.

### Web Cloud

**Cliquez sur le titre correspondant au produit souhaité pour déplier les instructions.**

/// details | Nom de domaine

<!-- CP-STEPS-START:domain-name-delete -->
1. Ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
1. Cliquez sur le bouton `...`{.action} à droite du nom de domaine concerné, puis sur `Résilier mon service`{.action}. Sélectionnez `Résilier le service immédiatement`{.action} et validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:domain-name-delete -->

Un délai de 45 à 60 jours, selon l'extension du domaine, peut être observé avant la suppression effective du service.

///

/// details | Hébergement Web

> [!alert]
>
> La suppression d'un hébergement entraîne l'effacement définitif de toutes ses données.
>

<!-- CP-STEPS-START:web-hosting-delete -->
1. Ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
1. Cliquez sur le bouton `...`{.action} à droite du service concerné, puis sur `Supprimer immédiatement l'hébergement`{.action}. Validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:web-hosting-delete -->

Un délai de 45 jours peut être observé avant la suppression effective du service.

///

/// details | Service e-mail MX Plan

> [!alert]
>
> La suppression de votre service E-mail MX Plan entraîne l'effacement définitif de tous les e-mails et données qu'il contient.

Si votre service e-mail MX Plan est lié à un hébergement web, procédez à la suppression de celui-ci (voir ci-dessus).

<!-- CP-STEPS-START:mxplan-delete -->
1. Ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
1. Cliquez sur le bouton `...`{.action} à droite du service concerné, puis sur `Supprimer immédiatement le MX Plan`{.action}. Validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:mxplan-delete -->

Un délai de 14 jours peut être observé avant la suppression effective du service.

///

/// details | Zimbra

> [!alert]
>
> La suppression de votre service Zimbra Mail entraîne l'effacement définitif de tous les e-mails et données qu'il contient.
>

<!-- CP-STEPS-START:zimbra-delete -->
1. Ouvrez [Zimbra](/links/control-panel/web-zimbra) dans l'espace client OVHcloud.
1. Cliquez sur l'onglet `Compte email`{.action}. Cliquez sur le bouton `⋮`{.action} à droite de chaque compte e-mail à supprimer puis sur `Supprimer`{.action}.
1. Une fois tous les comptes e-mail supprimés, cliquez sur l'onglet `Domaine`{.action}. Cliquez sur le bouton `⋮`{.action} à droite de chaque domaine puis sur `Supprimer`{.action}.
1. Lorsque les domaines associés ont été supprimés, ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
    1. Utilisez l'outil `Filtrer`{.action} sur la droite pour lister uniquement les services `Compte Email Zimbra`. Cliquez sur `Ajouter`{.action} pour valider le filtre.
    1. Sélectionnez tous les comptes Zimbra puis cliquez successivement sur le bouton `Actions`{.action} et `Désactiver le paiement automatique`{.action}.
<!-- CP-STEPS-END:zimbra-delete -->
1. Une fois ces actions réalisées, vous pouvez créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander une application accélérée de la suppression du service.

///

/// details | E-mail Pro

> [!alert]
>
> La suppression de votre service E-mail Pro entraîne l'effacement définitif de tous les e-mails et données qu'il contient.

<!-- CP-STEPS-START:email-pro-delete -->
1. Ouvrez [Email Pro](/links/control-panel/web-email-pro) dans l'espace client OVHcloud et sélectionnez la plateforme concernée.
1. Cliquez sur l'onglet `Comptes e-mail`{.action}. Cliquez sur le bouton `...`{.action} à droite de chaque compte e-mail à supprimer puis sur `Réinitialiser le compte`{.action}.
1. Une fois tous les comptes e-mail supprimés, cliquez sur l'onglet `Domaines associés`{.action}. Cliquez sur le bouton `...`{.action} à droite de chaque domaine puis sur `Supprimer ce domaine`{.action}.
1. Lorsque les domaines associés ont été supprimés, cliquez en haut à droite sur le bouton `Actions`{.action} puis sur `Résilier`{.action}. Suivez alors les étapes décrites.
<!-- CP-STEPS-END:email-pro-delete -->
1. Une fois ces actions réalisées, vous pouvez créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander une application accélérée de la suppression du service.

///

/// details | Microsoft Exchange

> [!alert]
>
> La suppression de votre service Exchange entraîne l'effacement définitif de tous les e-mails et données qu'il contient.

<!-- CP-STEPS-START:exchange-delete -->
1. Ouvrez [Exchange](/links/control-panel/web-exchange) dans l'espace client OVHcloud et sélectionnez la plateforme Exchange concernée.
1. Cliquez sur l'onglet `Comptes e-mail`{.action}. Cliquez sur le bouton `...`{.action} à droite de chaque compte e-mail à supprimer puis sur `Réinitialiser le compte`{.action}.
1. Une fois tous les comptes e-mail supprimés, cliquez sur l'onglet `Domaines associés`{.action}. Cliquez sur le bouton `...`{.action} à droite de chaque domaine puis sur `Supprimer ce domaine`{.action}.
1. Lorsque les domaines associés ont été supprimés, cliquez en haut à droite sur le bouton `Actions`{.action} puis sur `Résilier`{.action}. Suivez alors les étapes décrites.
<!-- CP-STEPS-END:exchange-delete -->
1. Une fois ces actions réalisées, vous pouvez créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander une application accélérée de la suppression du service.

///

/// details | Zone DNS

<!-- CP-STEPS-START:dns-zone-delete -->
1. Ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
1. Cliquez sur le bouton `...`{.action} à droite de la zone DNS concernée, puis sur `Résilier mon service`{.action}.
<!-- CP-STEPS-END:dns-zone-delete -->
1. Une fois la résiliation demandée, vous pouvez créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander son application immédiate.

///

/// details | Web Cloud Databases

> [!alert]
>
> La suppression d'un service Web Cloud Databases entraîne l'effacement définitif de toutes ses données.

> [!primary]
>
> Utilisez l'outil `Filtrer`{.action} dans `Mes offres et services`{.action} pour retrouver les services Web Cloud Databases qui sont nommés « Hébergement base SQL privée ».

<!-- CP-STEPS-START:web-cloud-databases-delete -->
1. Ouvrez la page [Mes offres et services](/links/control-panel/billing-services).
1. Cliquez sur le bouton `...`{.action} à droite du service concerné, puis sur `Supprimer mon hébergement SQL privé`{.action}. Validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:web-cloud-databases-delete -->

Un délai de 45 jours peut être observé avant la suppression effective du service.

///

### Bare Metal Cloud

/// details | Serveur Privé Virtuel (VPS)

> [!alert]
>
> La suppression immédiate d'un VPS entraîne l'effacement définitif et irrémédiable de toutes ses données.

<!-- CP-STEPS-START:vps-delete -->
1. Ouvrez [Gestion VPS](/links/control-panel/baremetal-vps) dans l'espace client OVHcloud et sélectionnez le VPS concerné.
1. Dans le cadre `Mon offre`, cliquez sur `Résilier`{.action}. Sélectionnez alors `Résilier le service immédiatement`{.action} et validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:vps-delete -->

Un délai de 30 jours peut être observé avant la suppression effective du service.

///

/// details | Serveur dédié

> [!alert]
>
> La suppression immédiate d'un serveur dédié entraîne l'effacement définitif et irrémédiable de toutes ses données.

<!-- CP-STEPS-START:dedicated-server-delete -->
1. Ouvrez [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers) dans l'espace client OVHcloud et sélectionnez le serveur concerné.
1. Dans le cadre `État des services`, cliquez le bouton  sur `...`{.action} à droite de `Statut` puis sur `Résilier mon service`{.action}. Sélectionnez alors `Résilier le service immédiatement`{.action} et validez en cliquant sur `Valider`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression.
<!-- CP-STEPS-END:dedicated-server-delete -->
1. Une fois ces actions réalisées, vous pouvez créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander une application accélérée de la suppression du service.

///

/// details | vRack

<!-- CP-STEPS-START:vrack-delete -->
1. Ouvrez [vRack](/links/control-panel/network-vrack) dans l'espace client OVHcloud et sélectionnez le vRack concerné.
1. Vous devez retirer tous les services d'un vRack afin de pouvoir le supprimer. Sélectionnez chaque service présent dans le vRack et cliquez sur `Retirer`{.action}.
1. Une fois tous les services retirés du vRack, cliquez sur le bouton `Résilier`{.action}. Validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression.
<!-- CP-STEPS-END:vrack-delete -->

///

### Public Cloud

/// details | Projet Public Cloud

> [!alert]
>
> La suppression immédiate d'un projet Public Cloud entraîne l'effacement définitif et irrémédiable de tous ses services, données, ressources et paramètres.

<!-- CP-STEPS-START:public-cloud-project-delete -->
1. Ouvrez [Projets Public Cloud](/links/control-panel/publiccloud-projects) dans l'espace client OVHcloud et sélectionnez le projet concerné.
1. Cliquez sur `Project settings`{.action} puis sur `Supprimer le projet`{.action}. Validez en cliquant sur `Oui, résilier`{.action}.
1. Un e-mail de confirmation est alors automatiquement envoyé à l'adresse e-mail principale du compte OVHcloud, cliquez sur le lien dans cet e-mail pour confirmer la suppression immédiate.
<!-- CP-STEPS-END:public-cloud-project-delete -->

Un délai de 30 jours peut être observé avant la suppression effective des services.

///

### Télécom

/// details | Services VoIP

> [!alert]
>
> La suppression d'un groupe de téléphonie entraîne la résiliation de tous les services qu'il contient.

<!-- CP-STEPS-START:voip-group-delete -->
1. Ouvrez [VoIP & Fax](/links/control-panel/telecom-voip-fax) dans l'espace client OVHcloud et sélectionnez le groupe de téléphonie concerné.
1. Cliquez sur l'onglet `Administration`{.action} puis sur `Supprimer le groupe`{.action}. Validez en cliquant sur le bouton de suppression du groupe.
1. La suppression d'un groupe de téléphonie entraîne la résiliation de tous les services qu'il contient à la date de la prochaine facturation. Créez un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) pour demander une application immédiate de la résiliation.
<!-- CP-STEPS-END:voip-group-delete -->

///

/// details | Accès Internet

Suivez les étapes décrites dans le guide « [Comment résilier un accès xDSL/Fibre](/pages/web_cloud/internet/internet_access/comment_resilier_mon_acces_xdsl) ». Vous pouvez ensuite créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) afin de demander l'application immédiate de la résiliation.

///

/// details | SMS

Il n'existe pas de procédure de résiliation concernant les offres SMS. Un compte SMS ne génère aucun abonnement mensuel ni facturation. Les crédits SMS ont une durée de vie illimitée.

Pour supprimer un compte SMS, nous vous invitons à créer un [ticket d'assistance via le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Aller plus loin <a name="go-further"></a>

Échangez avec notre [communauté d'utilisateurs](/links/community).