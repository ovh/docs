---
title: 'Déléguer la gestion de vos comptes e-mails à une autre personne'
legacy_guide_number: 1933
slug: deleguer-gestion-emails-autre-identifiant
excerpt: 'Découvrez comment déléguer les comptes e-mail de votre offre MX Plan'
section: 'Fonctionnalités des adresses e-mail'
order: 05
---

**Dernière mise à jour le 04/10/2021**

## Objectif <a name="objective"></a>

La délégation de compte e-mail donne la possibilité à l'utilisateur d'un compte e-mail de gérer lui-même le changement de son mot de passe ainsi que d'autres fonctionnalités suivant les 2 types de délégations suivantes:

- Déléguer tout le service e-mail d'un nom de domaine à un compte OVHcloud

    Lorsque vous souhaitez déléguer  **tous**  les comptes e-mails liés à un nom de domaine, à un ou plusieurs comptes OVHcloud. Cela permet aux comptes OVHcloud bénéficiaires de gérer  **les filtres, les répondeurs e-mails, les redirections/alias, ainsi que les Mailing Lists** .

- Déléguer un ou plusieurs comptes e-mails à un compte OVHcloud

    Lorsque vous souhaitez déléguer  **seulement un ou certains comptes e-mails et leur filtres**  pour un nom de domaine, à un compte OVHcloud. Cette délégation **ne permet pas**  aux bénéficiaires de gérer  **les répondeurs e-mails, les redirections, ni les Mailing Lists** . Cela ne permet pas non plus aux bénéficiaires de supprimer le compte, ou d'importer les e-mails d'un autre compte, ni de gérer les délégations.

**Découvrez comment déléguer les comptes e-mail de votre offre MX Plan.**

## Prérequis

- Posséder une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web](https://www.ovh.com/fr/hebergement-web/), l'[hébergement gratuit Start 10M](https://www.ovh.com/fr/domaines/offre_hebergement_start10m.xml) ou l'offre MX Plan seule.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Web Cloud`{.action}.

> [!warning]
>
> Le guide suivant s'adresse aux détenteurs de l'offre MXplan « historique ». Pour la nouvelle offre, il n'y a pas de délégations. Le changement de mot de passe, les filtres et répondeurs d'une adresse e-mail peuvent-être directement changé via le webmail OWA (**O**utlook **W**eb **A**pplication). **Identifiez votre offre à l'aide du tableau ci-dessous.**
>

|Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la « Référence serveur » dans le cadre « Résumé »|
|Poursuivez la lecture de ce guide à partir de la section « [En pratique](#oldmxplan) »|Poursuivre vers notre guide « [Consulter son compte Exchange depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/#modifier-le-mot-de-passe) »|

## En pratique <a name="oldmxplan"></a>

> [!primary]
>
> Lorsque vous mettez en place la délégation d'un service ou d'un compte e-mail vers un identifiant client OVHcloud, le service e-mail apparait dans l'espace client du compte OVHcloud qui bénéficie de la délégation mais ne peut en aucun cas modifier autre chose que ce qui est décrit dans la section [Objectif](#objective) de ce guide.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Web Cloud`.

Cliquez sur `Emails`{.action} dans la barre de services à gauche, puis choisissez le nom du service MX Plan concerné.

Pour afficher la liste des comptes e-mails de votre offre MXplan, cliquez sur l'onglet `Emails`{.action}.

![delegation](images/mxplan-delegation-01.png){.thumbnail}

### Déléguer tout le service e-mail d'un domaine a un identifiant

Cette délégation vous permet la gestion des changements de mot de passe des comptes e-mails, des filtres, des répondeurs e-mails, des redirections/alias, ainsi que les Mailing Lists.

Cliquez sur `Gérer vos partages pour toutes les adresses email`{.action}

![delegation](images/mxplan-delegation-02.png){.thumbnail}

Une nouvelle fenêtre s'affiche, cliquez sur le bouton `+`{.action} à droite de la mention `Ajouter un identifiant`. Entrez l'identifiant OVHcloud qui bénéficiera de cette délégation et validez votre choix.

![delegation](images/mxplan-delegation-03.png){.thumbnail}

Vous pouvez déléguer votre service MXplan à plusieurs identifiants OVHcloud

### Deleguer un ou plusieurs comptes e-mails a un identifiant

Cette délégation vous permet le changement de mot de passe du compte e-mail concerné et la gestion de ses filtres.

A droite du compte e-mail que vous souhaitez déléguer, cliquez sur le bouton `...`{.action} puis sur `Gestion de la délégation`{.action}.

![delegation](images/mxplan-delegation-04.png){.thumbnail}

Vous pourrez saisir l'identifiant OVHcloud qui bénéficiera de cette délégation et validez votre choix. 

![delegation](images/mxplan-delegation-05.png){.thumbnail}

Il est possible d'ajouter plusieurs identifiants OVHcloud pour gérer chaque adresse e-mail.

## Aller plus loin

[Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/)
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.