---
title: "Que faire si mon site est inaccessible ?"
slug: erreur-serveur-inaccessible
excerpt: "Diagnostiquez les causes de l'inaccessibilité de votre site"
section: Diagnostic
order: 1
---

**Dernière mise à jour le 02/08/2022**

## Objectif

Plusieurs retours d'erreur peuvent apparaître sur votre navigateur en cas d'inaccessibilité de votre site. Les exemples ci-dessous indiquent une configuration erronée de vos [DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) ou un domaine suspendu (si votre site n'affiche pas l'un des messages d'erreur décrits ici, consultez la section [Aller plus loin](#aller-plus-loin)) :

|Navigateur|Message d'erreur|
|-|---|
|Chrome :<br>« Ce site est inaccessible »|![cantbereached_chrome](images/cantbereached_chrome.png){.thumbnail}|
|Firefox :<br>« Hum, nous ne parvenons pas à trouver ce site. »|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}|
|Edge :<br>« Désolé, impossible d’accéder à cette page »|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}|
|Safari :<br>« Safari ne parvient pas à trouver le serveur »|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}|

**Découvez comment résoudre les erreurs du type "Ce site est inaccessible"**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Avoir la gestion des serveurs et de la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) de votre domaine
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être à jour dans les [paiements](https://docs.ovh.com/fr/billing/gerer-factures-ovh/#pay-bills) et [renouvellements](https://docs.ovh.com/fr/billing/renouvellement-automatique-ovh/#renewal-management) des services liés (nom de domaine et hébergement web)

## En pratique

### Étape 1 : vérifier la validité de votre nom de domaine

> [!warning]
>
> Le renouvellement de vos offres est sous votre entière responsabilité.<br>
> OVHcloud, en tant qu'hébergeur, a l'obligation de supprimer définitivement les services (domaines, hébergements, e-mails, etc.) qui n'ont pas été renouvelés à temps, ainsi que l'ensemble des données qu'ils contiennent.
>
> De ce fait, nous vous recommandons fortement d'activer le [renouvellement automatique](../../billing/renouvellement-automatique-ovh/#en-pratique) sur l'ensemble de vos abonnements OVHcloud.
>

Pour vérifier la validité de l'abonnement relatif à votre nom de domaine, cliquez sur votre nom en haut à droite de votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), afin de faire apparaître le menu contextuel, puis sur `Produits et services`{.action}.

![control-panel](images/control-panel.png){.thumbnail}|

Renouvelez votre domaine si nécessaire via le bouton `...`{.action} à droite de l'écran, puis `Renouveler le service`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Suite à ce renouvellement, votre site sera accessible sous 48 heures maximum.

### Étape 2 : vérifier les serveurs DNS

Pour vérifier la validité de vos [serveurs DNS](../../domains/generalites-serveurs-dns/), dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) cliquez sur `Noms de domaine`{.action}, puis sur le domaine de votre site.

#### Scénario 1 : aucune anomalie sur les serveurs DNS

Vérifiez les serveurs indiqués dans l'onglet `Serveurs DNS`{.action} :

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

S'ils sont identiques aux cibles des entrées de type `NS` dans la `Zone DNS`{.action}, passez à [l'étape 3](#etape3) :

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Scénario 2 : un avertissement apparaît au-dessus de la zone DNS

Un avertissement dans l'onglet `Zone DNS`{.action} indique que les serveurs DNS utilisés par votre domaine ne sont pas ceux indiqués dans votre zone. Deux scénarios sont ici possibles :

- Sous la phrase « Vous utilisez actuellement les serveurs DNS suivants : », les serveurs indiqués sont du type « ns **?** .ovh.net » et « dns **?** .ovh.net » (remplacez le « **?** » par n'importe quel numéro) :

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Modifiez les serveurs DNS en suivant les instructions de [ce guide](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns), afin qu'ils soient identiques aux cibles des entrées de type `NS` dans la `Zone DNS`{.action}.

Votre site sera de nouveau accessible sous 48 heures maximum.

- Sous la phrase « Vous utilisez actuellement les serveurs DNS suivants : », les serveurs indiqués ne sont pas du type « ns **?** .ovh.net » et « dns **?** .ovh.net ».

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> Dans cette situation, contactez l'hébergeur de votre Zone DNS, votre webmaster ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/) avant toute manipulation.
>
> Il est en effet possible que les serveurs DNS utilisés par votre nom de domaine soient fonctionnels et que le problème d'accès à votre site soit lié à une entrée manquante ou erronée dans la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns). Toute modification des serveurs DNS dans cette situation peut rendre vos adresses e-mails ou d'autres applications en ligne indisponibles.
>

#### Scénario 3 : aucune entrée de type NS n'apparaît dans la zone DNS

La `Zone DNS`{.action} de votre domaine ne contient pas d'entrée de type `NS` :

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Effectuez une sauvegarde de la zone actuelle en cliquant sur le bouton `Modifier en mode textuel`{.action} à droite de votre écran :

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Puis copiez/collez le contenu de votre `Zone DNS`{.action} dans un document texte. Enregistrez localement ce document.

Cliquez ensuite sur `Réinitialiser ma zone DNS`{.action}, puis sélectionnez `Non, mais je veux réinitialiser ma zone DNS`{.action}, indiquez vos serveurs e-mail et d'hébergement et cliquez sur `Valider`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Votre site sera de nouveau accessible sous 24 heures maximum.

### Étape 3 : vérifier la zone DNS <a name="etape3"></a>

Dans cette étape, vous allez retrouver l'adresse IP de votre hébergement, puis l'ajouter à votre `Zone DNS`{.action}.

Si votre site est hébergé en dehors de l'infrastructure OVHcloud ou géré par une tierce personne, contactez l'hébergeur ou le prestataire concerné.

Si votre site est hébergé sur l'une de nos [offres Web Cloud](https://www.ovhcloud.com/fr/web-hosting/), cliquez sur l'onglet `Hébergements`{.action}, puis sur l'offre concernée.

Dans l'onglet `Informations générales`{.action}, copiez l'adresse IPV4 et/ou IPV6 de votre domaine.

![ipv4-6](images/ipv4-6.png){.thumbnail}

Puis reportez-la dans la [zone DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1) de votre domaine, en modifiant ou créant une ou plusieurs entrées de type `A`.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Votre site sera de nouveau accessible sous 24 heures maximum.

## Aller plus loin <a name="aller-plus-loin"></a>

[Résoudre l’erreur « Site non installé »](../erreur-site-non-installe/)

[Comment diagnostiquer une page blanche ?](../comment-diagnostiquer-page-blanche/)

[Que faire en cas d’erreur 500 Internal Server Error ?](../erreur-500-internal-server-error/)

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](../erreurs-frequentes-modules-en-1-clic/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
