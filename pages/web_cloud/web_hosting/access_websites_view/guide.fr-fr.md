---
title: "Visualiser et gérer tous ses sites web depuis son espace client OVHcloud"
excerpt: "Découvrez comment consulter et gérer l'ensemble de vos sites web depuis votre espace client OVHcloud"
updated: 2026-05-04
---

## Objectif

L'interface présentée dans ce guide permet de centraliser l'affichage de l'ensemble de vos sites web, indépendamment de leur hébergement. Elle facilite le suivi des fonctionnalités activées pour chaque site web et donne un accès rapide aux actions essentielles. Cette interface est particulièrement utile pour les agences ou les professionnels du web qui gèrent un grand nombre de domaines répartis sur plusieurs hébergements.

**Découvrez comment visualiser et gérer tous vos sites web depuis votre espace client.**

## Prérequis

- Posséder une [offre d'hébergement web](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Sites internet](/links/control-panel/web-website-view)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Sites internet`{.action} > Sélectionnez votre site web

---
<!-- CP-NAV-END:web-website-view -->

## En pratique

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **2** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Sites internet](/links/control-panel/web-website-view). Un tableau s’affiche, regroupant l’ensemble de vos sites web et de leurs principales informations.
>>
>> ![vue_sites_internet](images/website_view_tab.png){.thumbnail}
>>
> **Étape 2**
>>
>> Le tableau présente les colonnes suivantes :
>>
>> - **Nom de domaine** : affiche le nom de domaine principal du site web, tel que configuré dans l’onglet « Mes sites » de votre hébergement.
>> - **Diagnostic** : vous informe si votre nom de domaine pointe correctement vers l’hébergement web associé. Pour plus de détails, consultez notre guide « [Comment vérifier l’association « nom de domaine / site web » ?](/pages/web_cloud/web_hosting/my_websites_diagnosis) ».
>> - **Dossier racine** : indique le répertoire de votre hébergement (www, app, public_html, etc.) vers lequel le domaine pointe.
>> - **Nom du service** : nom technique du service, sous la forme `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Nom d’affichage** : alias personnalisé pour identifier votre service dans l’espace client.
>> - **Offre** : type d’offre associée à l’hébergement : Starter, Perso, Pro ou Performance.
>> - **Git** : affiche le statut de l’intégration Git sur le site web. Pour plus de détails, consultez notre guide « [Configurer et utiliser Git avec son hébergement web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting) ».
>> - **Logs séparés** : indique si un espace de logs est activé sur le domaine (domaines OVHcloud uniquement). Pour plus d’informations, consultez notre page « [Suivez et analysez le trafic de vos sites web](/links/web/hosting-traffic-analysis) ».
>> - **CDN** : affiche le statut du CDN : Actif / Inactif / N/A (offre non compatible). Pour plus d’informations, consultez notre page « [Shared CDN](/links/web/hosting-options-cdn) ».
>> - **SSL** : indique si le SSL est activé, permettant une connexion sécurisée (**https://**). Pour plus d’informations, consultez notre page « [Sécurisez votre site web avec un certificat SSL premium](/links/web/hosting-options-ssl) ».
>> - **Firewall** : indique si le pare-feu applicatif est activé sur le domaine. Pour plus d’informations, consultez notre page « [Les options essentielles pour votre hébergement web](/links/web/hosting-options) ».
>> - **Boost** : indique si l’option Boost est activée, permettant d’augmenter temporairement les ressources CPU et RAM. Pour plus de détails, consultez notre guide « [Hébergement web - Comment faire évoluer son offre](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer) ».
>>
>> Au clic sur un élément du tableau, vous êtes redirigé vers l’[hébergement web](/links/control-panel/web-hosting) concerné. Plus précisément :
>>
>> - Les colonnes **Nom de domaine**, **Diagnostic**, **Dossier racine**, **Git**, **Logs séparés**, **CDN**, **SSL** et **Firewall** redirigent vers l’onglet `Mes sites`{.action}.
>> - Les colonnes **Nom du service**, **Nom d’affichage** et **Offre** redirigent vers l’onglet `Informations générales`{.action}.
>> - La colonne **Boost** redirige vers l’onglet `Booster mon offre`{.action}.
>>
>> > [!warning]
>> > Les logs séparés ne peuvent pas être activés pour un nom de domaine externe. Cette option est uniquement disponible pour les domaines enregistrés chez OVHcloud.
>>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).