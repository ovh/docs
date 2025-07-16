---
title: "Ajouter un enregistrement DNS de type TXT pour un nom de domaine"
excerpt: "Découvrez comment ajouter un enregistrement DNS de type TXT dans une zone DNS gérée chez OVHcloud pour votre nom de domaine"
updated: 2025-06-23
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

Vous devez valider un processus de vérification ou de sécurité pour votre nom de domaine (association de services via un token de validation, clé de vérification, etc.) en utilisant votre zone DNS ? Vous souhaitez ajouter une valeur personnalisée au format texte dans la zone DNS de votre nom de domaine ?
Pour cela, vous devrez créer un enregistrement DNS de type TXT dans la zone DNS active de votre nom de domaine.

**Découvrez comment ajouter un enregistrement DNS de type TXT dans une zone DNS OVHcloud pour votre nom de domaine.**

> [!primary]
>
> Pour modifier ou supprimer un enregistrement DNS de type TXT d'une zone DNS OVHcloud, suivez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains).
- Disposer d'une zone DNS associée à ce nom de domaine chez OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

## En pratique

> [!warning]
>
> L'ajout, la modification ou la suppression d'enregistrements DNS dans une zone DNS active est une manipulation sensible. En cas de doute, contactez un [prestataire spécialisé](/links/partner).

### Ajouter un enregistrement DNS de type TXT pour un nom de domaine

1. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
2. Sur la page qui s'affiche, cliquez sur sur le bouton `Ajouter une entrée`{.action}.
3. Dans la fenêtre qui s'ouvre, sélectionnez le champ étendu de type `TXT`{.action}.
4. Renseignez ensuite dans le champ `Valeur *` la chaîne TXT à ajouter (par exemple : `AbCdE-Value-of-TXT-fGhIjK`), puis cliquez sur `Suivant`{.action}.
5. Vérifiez le résumé, puis cliquez sur `Valider`{.action}. Patientez jusqu'à **24** heures pour que la propagation de l'ajout sur le réseau DNS soit pleinement effective.

/// details | Cliquez ici pour plus d'informations.

Consultez nos guides détaillés :

- [Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

### Ajouter un enregistrement DNS de type TXT pour le sous-domaine d'un nom de domaine

1. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
2. Sur la page qui s'affiche, cliquez sur sur le bouton `Ajouter une entrée`{.action}.
3. Dans la fenêtre qui s'ouvre, sélectionnez le champ étendu de type `TXT`{.action}.
4. Renseignez ensuite dans le champ `Sous-domaine` le sous-domaine concerné (par exemple : `www` pour le sous-domaine `www.domain.tld`), et dans le champ `Valeur *`, la chaîne TXT à ajouter (par exemple : `AbCdE-Value-of-TXT-fGhIjK`). Cliquez enfin sur `Suivant`{.action}.
5. Vérifiez le résumé, puis cliquez sur `Valider`{.action}. Patientez jusqu'à **24** heures pour que la propagation de l'ajout sur le réseau DNS soit pleinement effective.

/// details | Cliquez ici pour plus d'informations.

Consultez nos guides détaillés :

- [Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
- [Comment créer un sous-domaine ?](/pages/web_cloud/domains/domain_create_subdomains)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

## Aller plus loin

[Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).