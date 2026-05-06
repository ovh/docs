---
title: "Configurer le DNS secondaire OVHcloud sur un serveur dédié"
excerpt: "Ajoutez un serveur DNS secondaire pour votre nom de domaine hébergé sur un serveur dédié OVHcloud pour une meilleure résilience DNS"
updated: 2021-01-08
---

## Objectif

Si vous configurez votre serveur dédié en tant que serveur DNS, vous pouvez utiliser le DNS OVHcloud secondaire pour héberger une zone secondaire. Ainsi, le DNS de votre domaine restera disponible même si le serveur DNS principal ne répond plus.

**Ce guide explique comment ajouter votre domaine dans l'espace client OVHcloud afin d'utiliser un serveur DNS secondaire.**

## Prérequis

* Disposer d’un [serveur dédié](/links/bare-metal/bare-metal).
* Disposer d’un [nom de domaine](/links/web/domains) dont vous avez la gestion administrative ou technique.

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en oeuvre des services sur un serveur.
> 

## En pratique

### Ajout d'un domaine <a name="addingdomain"></a>

Cliquez sur l'onglet `DNS secondaire`{.action} puis sur le bouton `Ajouter un domaine`{.action}.

![Onglet DNS secondaire avec bouton Ajouter un domaine](images/cp-01.png){.thumbnail}

Entrez votre adresse IP et le domaine à ajouter, puis cliquez sur `Suivant`{.action}.

![Formulaire d'ajout de domaine avec champs adresse IP et nom de domaine](images/cp-02.png){.thumbnail}

Une fois que vous aurez cliqué sur `Suivant`{.action} à cette étape, la vérification du domaine sera déclenchée. Si vous n'avez pas déjà ajouté un enregistrement TXT à votre zone DNS, suivez d'abord les instructions [décrites ci-dessous](#verifyingdomain). Sinon, continuez en cliquant sur `Suivant`{.action}.

![Étape de vérification du domaine avec instructions pour l'enregistrement TXT](images/cp-03.png){.thumbnail}

Après avoir cliqué sur `Ajouter`{.action} dans la dernière fenêtre, le domaine sera ajouté au serveur DNS secondaire OVHcloud.

Les domaines ajoutés seront répertoriés dans cet onglet et peuvent être supprimés en cliquant sur le bouton `...`{.action}. Le nom du serveur DNS secondaire s'affiche à côté du domaine.

![Liste des domaines DNS secondaires ajoutes avec option de suppression](images/cp-05.png){.thumbnail}

> [!primary]
>
> Les autres actions requises pour configurer votre propre DNS pour votre domaine sont généralement les suivantes:
>
> - configuration d'un service DNS (tel que *BIND*)
> - configuration des enregistrements GLUE
> - autorisation des transferts de zone
>
> Reportez-vous aux documentations externes appropriées si vous avez besoin d'informations supplémentaires pour compléter ces tâches administratives.

### Vérification de l'autorisation pour le domaine <a name="verifyingdomain"></a>

Il est nécessaire de confirmer votre autorisation à gérer le domaine concerné avant de pouvoir l'ajouter au DNS secondaire OVHcloud. Cela s'effectue via une recherche DNS automatisée sur le sous-domaine *ownercheck.votrenomdedomaine*. Une chaîne unique de caractères est générée à cette fin et affichée dans l'espace client OVHcloud.

- Si le domaine est géré par un bureau d'enregistrement externe ou utilise des serveurs DNS externes à ce stade, connectez-vous à l'espace client de votre fournisseur DNS et ajoutez un enregistrement TXT avec le sous-domaine « ownercheck » et la valeur fournie à l'étape 2 de ["l'Ajout de domaine"](#addingdomain).

- Si le domaine est géré par OVHcloud en tant que serveur d'enregistrement et qu'il utilise des serveurs DNS OVHcloud, fermez la fenêtre en cliquant préalablement sur `Annuler`{.action}. Vous pouvez ensuite suivre les instructions de [ce guide](/pages/web_cloud/domains/dns_zone_edit) pour ajouter l'enregistrement TXT dans votre [espace client OVHcloud](/links/manager).

![Dialogue de vérification du propriétaire affichant la valeur de l'enregistrement TXT](images/cp-04.png){.thumbnail}

Après avoir correctement ajouté l'enregistrement TXT à la zone DNS du domaine, répétez les [étapes ci-dessus](#addingdomain) et terminez la procédure.

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Premiers pas avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

[Configurer une adresse IPv6 principale sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)

Échangez avec notre [communauté d'utilisateurs](/links/community).
