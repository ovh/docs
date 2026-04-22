---
title: "Ajouter un enregistrement DNS de type TXT pour un nom de domaine"
excerpt: "Découvrez comment ajouter un enregistrement DNS de type TXT dans une zone DNS gérée chez OVHcloud pour votre nom de domaine"
updated: 2026-03-24
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

<!-- CP-NAV-START:web-dns-zone -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Zones DNS](/links/control-panel/web-dns-zone)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zones DNS`{.action} > Sélectionnez votre nom de domaine

---
<!-- CP-NAV-END:web-dns-zone -->

## En pratique

> [!warning]
>
> L'ajout, la modification ou la suppression d'enregistrements DNS dans une zone DNS active est une manipulation sensible. En cas de doute, contactez un [prestataire spécialisé](/links/partner).

<!-- CP-STEPS-START:add-txt-record-domain -->
### Ajouter un enregistrement DNS de type TXT pour un nom de domaine

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le bouton `Ajouter une entrée`{.action}.
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s'ouvre, sélectionnez le champ étendu de type `TXT`{.action}.
>>
> **Étape 4**
>>
>> Renseignez dans le champ `Valeur *` la chaîne TXT à ajouter (par exemple : `AbCdE-Value-of-TXT-fGhIjK`), puis cliquez sur `Suivant`{.action}.
>>
> **Étape 5**
>>
>> Vérifiez le résumé, puis cliquez sur `Valider`{.action}. Patientez jusqu'à **24** heures pour que la propagation de l'ajout sur le réseau DNS soit pleinement effective.

/// details | Cliquez ici pour plus d'informations.

Consultez nos guides détaillés :

- [Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-domain -->

<!-- CP-STEPS-START:add-txt-record-subdomain -->
### Ajouter un enregistrement DNS de type TXT pour le sous-domaine d'un nom de domaine

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Zones DNS](/links/control-panel/web-dns-zone), puis choisissez le nom de domaine concerné.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le bouton `Ajouter une entrée`{.action}.
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s'ouvre, sélectionnez le champ étendu de type `TXT`{.action}.
>>
> **Étape 4**
>>
>> Renseignez dans le champ `Sous-domaine` le sous-domaine concerné (par exemple : `www` pour le sous-domaine `www.domain.tld`), et dans le champ `Valeur *`, la chaîne TXT à ajouter (par exemple : `AbCdE-Value-of-TXT-fGhIjK`). Cliquez sur `Suivant`{.action}.
>>
> **Étape 5**
>>
>> Vérifiez le résumé, puis cliquez sur `Valider`{.action}. Patientez jusqu'à **24** heures pour que la propagation de l'ajout sur le réseau DNS soit pleinement effective.

/// details | Cliquez ici pour plus d'informations.

Consultez nos guides détaillés :

- [Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
- [Comment créer un sous-domaine ?](/pages/web_cloud/domains/domain_create_subdomains)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-subdomain -->

## Aller plus loin

[Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
