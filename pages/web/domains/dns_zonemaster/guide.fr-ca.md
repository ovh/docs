---
title: 'Tutoriel - Utilisation de Zonemaster'
updated: 2023-06-06
---

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>


## Objectif

[Zonemaster](https://zonemaster.fr/) est un outil né de la collaboration entre l'[AFNIC](https://www.afnic.fr/) (registre français) et [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (registre suédois). Il permet d'analyser la configuration DNS (Domain Name System) d'un nom de domaine et d'identifier les éléments qui peuvent être améliorés ou corrigés.

> [!primary]
>
> Pour mieux comprendre la notion de DNS, consultez l'introduction de notre guide sur la [configuration d'une zone DNS](/pages/web/domains/dns_zone_edit).

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr-ca/domains/)

## En pratique

### Champ de saisie

L'outil Zonemaster permet de vérifier une configuration DNS en place sur un nom de domaine ou de tester une zone DNS préconfigurée sur des futurs serveurs DNS.

Pour vérifier la configuration actuelle d'un nom de domaine, saisissez votre nom de domaine puis cliquez sur `Lancer`{.action}

![Capture d'écran du formulaire de Zonemaster. Le domaine « mydomain.ovh » a été saisi et est prêt à être testé.](images/zonemaster01.png){.thumbnail}

Pour vérifier une configuration DNS que vous avez préparée mais pas encore appliquée au nom de domaine concerné, cochez la case `Options`{.action}, puis saisissez les informations suivantes :

- **Serveurs DNS** : saisissez les informations du serveur de nom associé à un nom de domaine. Cliquez sur le `+`{.action} pour pouvoir ajouter un serveur de nom supplémentaire. La saisie d'une adresse IP est facultative.
- **Délégation du Signataire (enregistrement DS)**: dans le cadre d'une protection DNSSEC, saisissez les éléments de l'enregistrement DS. Cliquez sur le `+`{.action} pour pouvoir ajouter un enregistrement DS supplémentaire. Si les serveurs DNS n'utilisent pas le protocole DNSSEC, vous pouvez laisser ces champs libres. Dans le cas d’une zone signée avec DNSSEC, cette fonction permet de vérifier que la zone fonctionne correctement avec un résolveur validant, avec les enregistrements DS qu’on est sur le point de publier, préalablement à leur publication.


Vous pouvez également forcer les vérifications sur un protocole IP spécifique, via les cases `Désactiver IPv6` et `Désactiver IPv4`

> **Exemple**:<br><br> Vous possédez le nom de domaine « mydomain.ovh » qui utilise actuellement les serveurs DNS « dns19.ovh.net » et  « ns19.ovh.net ».
>
>Vous avez configuré une zone DNS pour ce nom domaine sur les serveurs DNS « mydns.test.ovh » et « mydns2.test.ovh ».<br>
> Avant de changer les serveurs DNS, vous pouvez effectuer une recherche avancée à la l'aide de la case `Options`{.action} en saisissant « mydns.test.ovh » et « mydns2.test.ovh » dans les cases `Serveurs DNS`.<br>
> Zonemaster réalisera un test comme si vous utilisiez les serveurs « mydns.test.ovh » et « mydns2.test.ovh » sur « mydomain.ovh ».<br>
> ![Capture d'écran des options avancées du formulaire de Zonemaster. Les deux serveurs de noms « mydns.test.ovh » et « mydns2.test.ovh » ont été saisis dans la section « Serveurs de noms » du formulaire.](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Lorsque vous saisissez un nom de domaine et que vous cliquez sur les boutons `Récupérer les NS depuis la zone parente`{.action} et `Récupérer les DS depuis la zone parente`{.action}, les serveurs DNS associés au nom de domaine apparaitront ainsi que les informations de l'enregistrement DS (DNSSEC) si celui-ci a été configuré.
>
> ![Capture d'écran de la page de résultats de Zonemaster pour le domaine « mydomain.ovh ». La section « Adresses » est développée.](images/zonemaster03.png){.thumbnail}

### Résultat

Une fois le formulaire validé, les résultats sont affichés par groupe de tests. Les tests sont classés par niveau de sévérité.

- **Erreur** : cette partie présente des erreurs ou des éléments manquants pouvant causer un dysfonctionnement.
- **Avertissement** : cette partie est fonctionnelle mais mérite une attention particulière. L'outil a détecté qu'un paramètre ne répond pas au standard de sa catégorie, sans que cela ne bloque son fonctionnement.
- **Note** : il s'agit d'une simple information, sans conséquence particulière sur le fonctionnement du nom de domaine.
- **Info** : cette partie est fonctionnelle et répond aux critères standard dans sa catégorie.

Pour chaque test, il est possible d'obtenir plus de détails, par example pour comprendre l'erreur dans le cas d'un dysfonctionnement, ou simplement à titre indicatif.

![domains](images/zonemaster04.png){.thumbnail}

### Informations utiles

Si vous avez des questions supplémentaires au sujet de Zonemaster, consultez la rubrique [FAQ](https://zonemaster.fr/fr/faq) sur <https://zonemaster.fr/>.


## Aller plus loin <a name="go-further"></a>

[Généralités sur les serveurs DNS](/pages/web/domains/dns_server_general_information){.external}.

[Modification d'une zone DNS OVHcloud](/pages/web/domains/dns_zone_edit){.external}.

[Protégez votre domaine contre le Cache Poisoning avec le DNSSEC](https://www.ovhcloud.com/fr-ca/domains/dnssec/){.external}.

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
