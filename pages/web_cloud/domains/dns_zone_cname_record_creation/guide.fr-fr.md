---
title: "Comment ajouter un enregistrement DNS de type CNAME pour un sous-domaine"
excerpt: "Découvrez comment ajouter un enregistrement DNS de type CNAME dans une zone DNS gérée chez OVHcloud pour le sous-domaine d'un nom de domaine"
updated: 2025-06-25
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

Un enregistrement CNAME permet d'associer un sous-domaine à un nom de domaine ou sous-domaine, sans avoir à spécifier une adresse IP. Cela signifie que le sous-domaine sera redirigé vers l'adresse IP du nom de domaine ou sous-domaine cible, sans nécessiter de configuration supplémentaire.

Par exemple, si vous créez un enregistrement CNAME pour *www.domain.tld* qui pointe vers *domain.tld*, alors *www.domain.tld* utilisera la même adresse IP que *domain.tld*.

Les enregistrements CNAME sont utiles pour éviter de devoir modifier les adresses IP pour vos sous-domaines. Ils peuvent également être utilisés pour configurer des services comme les serveurs e-mail.

**Découvrez comment ajouter un enregistrement CNAME dans votre zone DNS OVHcloud.**

> **Vous avez déjà un enregistrement de type CNAME dans votre zone DNS ?** Suivez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains).
- Disposer d'une zone DNS associée à ce nom de domaine chez OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

> [!warning]
>
> **L'ajout, la modification ou la suppression d'enregistrements DNS dans une zone DNS active sont des manipulations sensibles.**
> En cas de doute, contactez un [prestataire spécialisé](/links/partner).

## En pratique

### Ajouter un enregistrement DNS de type CNAME pour le sous-domaine d'un nom de domaine

1. Cliquez sur le menu `Zones DNS`{.action}, puis choisissez le nom de domaine concerné.
2. Sur la page qui s'affiche, cliquez sur le bouton `Ajouter une entrée`{.action}.
3. Dans la fenêtre qui s'ouvre, sélectionnez le champ de pointage de type `CNAME`{.action}.
4. Renseignez ensuite dans le champ `Sous-domaine` le sous-domaine concerné (par exemple : `www` pour le sous-domaine `www.domain.tld`), et, dans le champ `Cible *`, le nom de domaine ou sous-domaine (par exemple : `domain.tld`) que vous souhaitez cibler à l'aide de l'enregistrement de type CNAME. Cliquez enfin sur `Suivant`{.action}.
5. Vérifiez le résumé, puis cliquez sur `Valider`{.action}. Patientez jusqu'à **24** heures pour que la propagation de l'ajout sur le réseau DNS soit pleinement effective.

/// details | Consultez nos guides détaillés :

- [Tout savoir sur les zones DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)
- [Comment créer un sous-domaine ?](/pages/web_cloud/domains/domain_create_subdomains)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Hébergement web - Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Hébergement web - Modifier un nom de domaine déjà associé](/pages/web_cloud/web_hosting/multisites_modify_domain)

///


### Cas particuliers

Cliquez sur les liens ci-dessous pour plus d'informations :

/// details | Enregistrements CNAME et TXT pour un même sous-domaine

Ne configurez pas à la fois un enregistrement CNAME et un enregistrement TXT pour le même sous-domaine. En effet, cela peut entraîner des résultats aléatoires lors de la résolution DNS, car seule une réponse peut être renvoyée par requête DNS.

Par exemple, si vous avez les enregistrements suivants pour *www.domain.tld* :

- Un enregistrement CNAME pointant vers *domain.tld*.
- Un enregistrement TXT avec une valeur spécifique.

Une requête DNS pour *www.domain.tld* retournera soit la cible de l'enregistrement CNAME, soit la valeur de l'enregistrement TXT, de manière aléatoire.

///

/// details | Enregistrement CNAME sur un domaine dans sa propre zone DNS

Par convention, **les enregistrements de type CNAME ne peuvent pas être utilisés sur un nom de domaine dans sa propre zone DNS**. En effet, le nom de domaine doit obligatoirement pointer directement vers une adresse IP avec un enregistrement de type [A](/pages/web_cloud/domains/dns_zone_a_record_creation) pour une IPv4, ou [AAAA](/pages/web_cloud/domains/dns_zone_aaaa_record_creation) pour une IPv6.

Pour reprendre l’exemple donné plus haut, vous ne pourrez donc pas créer un enregistrement de type CNAME pour le nom de domaine *domain.tld* dans la zone DNS que vous avez créée pour celui-ci.
Vous pourrez cependant créer des enregistrements de type CNAME pour tous les sous-domaines (par exemple : *subdomain.domain.tld* ou *www.domain.tld*) du nom de domaine *domain.tld* dans la zone DNS créée pour *domain.tld*.

///

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).