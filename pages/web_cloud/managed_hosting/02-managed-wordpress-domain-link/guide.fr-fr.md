---
title: "Web Hosting - Lier un domaine à votre site WordPress géré"
excerpt: "Ajouter, modifier ou supprimer les noms de domaine de votre Managed Hosting WordPress — interne, externe ou à commander — depuis l'espace client OVHcloud"
updated: 2026-05-20
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

**Managed Hosting for WordPress** est la solution OVHcloud d'hébergement WordPress géré : la maintenance technique (mises à jour, sécurité, sauvegardes) est prise en charge automatiquement. L'offre permet de gérer les noms de domaine depuis l'interface OVHcloud, sans intervention manuelle. Vous pouvez associer un nom de domaine ou un sous-domaine à chacun de vos sites WordPress, quelle que soit son origine.

3 parcours sont disponibles selon votre situation :

- **Nom de domaine interne** : le nom de domaine est déjà présent dans votre compte OVHcloud.
- **Nom de domaine externe** : le nom de domaine est géré chez un autre bureau d'enregistrement.
- **Commander un nom de domaine** : vous souhaitez acheter un nouveau nom de domaine.

**Découvrez comment ajouter, modifier ou supprimer les noms de domaine de votre Managed Hosting WordPress depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'une offre **Managed Hosting for WordPress** active avec au moins un site WordPress créé.
- Pour un nom de domaine externe : avoir accès à la zone DNS (Domain Name System) active chez votre prestataire actuel.

<!-- CP-NAV-START:web-wordpress-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergement WordPress](/links/control-panel/web-wordpress-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Managed hosting for WordPress`{.action}

---
<!-- CP-NAV-END:web-wordpress-hosting -->

## En pratique

### 1 - Accéder à la gestion des noms de domaine

L'ajout d'un nom de domaine s'effectue depuis l'onglet `Mes sites`{.action} de votre ressource Managed Hosting for WordPress. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergement WordPress](/links/control-panel/web-wordpress-hosting) de votre espace client OVHcloud.
>>
>> <!-- DRAFT: To screenshot — capturer la page "Hébergement WordPress" listant les ressources Managed Hosting for WordPress du compte -->
>>
> **Étape 2**
>>
>> Cliquez sur `Gérer`{.action} sous la ressource concernée.
>>
>> <!-- DRAFT: To screenshot — capturer une ressource Managed Hosting for WordPress dans le datagrid avec le bouton "Gérer" mis en évidence -->
>>
> **Étape 3**
>>
>> Cliquez sur l'onglet `Mes sites`{.action}. Le datagrid liste vos sites WordPress avec, pour chaque site, le domaine associé et les actions disponibles.
>>
>> <!-- DRAFT: To screenshot — capturer l'onglet "Mes sites" avec le datagrid listant les sites WordPress -->
>>
> **Étape 4**
>>
>> En face du site concerné, cliquez sur `Ajouter un domaine`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer le bouton "Ajouter un domaine" en face d'un site WordPress dans le datagrid -->
>>

> [!primary]
> Le **premier nom de domaine ajouté** à un site WordPress devient automatiquement le **nom de domaine principal**. Vous pourrez en ajouter d'autres par la suite (multi-domaine) et changer le nom de domaine principal depuis le même menu.

### 2 - Ajouter un nom de domaine

**Cliquez sur l'une des situations ci-dessous pour afficher le contenu.**

/// details | Ajouter un nom de domaine interne

Un nom de domaine **interne** est un nom de domaine déjà présent dans votre compte OVHcloud (enregistré ou transféré).

Une fois le tunnel d'ajout ouvert, sélectionnez le parcours interne pour utiliser un nom de domaine déjà présent dans votre compte OVHcloud. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Dans le tunnel d'ajout, sélectionnez `Utiliser un domaine de mon compte OVHcloud`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer le tunnel d'ajout à l'étape de sélection du parcours "Domaine interne" -->
>>
> **Étape 2**
>>
>> Sélectionnez le nom de domaine ou sous-domaine souhaité dans la liste des noms de domaine disponibles sur votre compte OVHcloud.
>>
>> <!-- DRAFT: To screenshot — capturer la liste déroulante des noms de domaine disponibles dans le compte -->
>>
> **Étape 3**
>>
>> Vérifiez le récapitulatif et cliquez sur `Ajouter ce domaine`{.action}. La configuration DNS est prise en charge automatiquement.
>>
>> <!-- DRAFT: To screenshot — capturer le récapitulatif d'ajout de domaine avec le bouton "Ajouter ce domaine" -->
>>

> [!primary]
> Pour un nom de domaine interne, la propagation DNS est automatique. Votre site sera accessible via ce nom de domaine en quelques minutes à quelques heures.

///

/// details | Ajouter un nom de domaine externe

Un nom de domaine **externe** est géré chez un autre bureau d'enregistrement (Gandi, Namecheap, Google Domains, etc.). Vous devrez modifier manuellement votre zone DNS.

Une fois le tunnel d'ajout ouvert, sélectionnez le parcours externe pour utiliser un nom de domaine géré chez un autre bureau d'enregistrement. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Dans le tunnel d'ajout, sélectionnez `Utiliser un domaine externe à OVHcloud`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer le tunnel d'ajout à l'étape de sélection du parcours "Domaine externe" -->
>>
> **Étape 2**
>>
>> Entrez votre nom de domaine (par exemple : `domain.tld`) dans le champ prévu.
>>
>> <!-- DRAFT: To screenshot — capturer le champ de saisie du nom de domaine externe avec un exemple de domaine renseigné -->
>>
> **Étape 3**
>>
>> L'interface affiche les enregistrements DNS à ajouter chez votre prestataire actuel. Connectez-vous à l'interface DNS de votre prestataire et ajoutez les enregistrements indiqués (généralement un enregistrement de DNS type **A** ou **CNAME** : **C**anonical **NAME**).
>>
>> <!-- DRAFT: To screenshot — capturer les valeurs DNS à configurer (enregistrement A ou CNAME) affichées par l'interface OVHcloud -->
>>
> **Étape 4**
>>
>> Une fois la configuration DNS effectuée chez votre prestataire, revenez dans l'espace client OVHcloud et cliquez sur `Confirmer`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer le bouton "Confirmer" à la fin du tunnel d'ajout de domaine externe -->
>>

> [!warning]
> La propagation DNS d'un nom de domaine externe peut prendre jusqu'à **24 à 48 heures** selon votre prestataire. Votre site WordPress ne sera pas accessible via ce nom de domaine pendant cette période.

> [!primary]
> Le certificat SSL (Secure Sockets Layer) est généré automatiquement après validation de la propagation DNS. Aucune intervention manuelle n'est nécessaire de votre côté.

///

/// details | Commander un nouveau domaine

Si vous ne possédez pas encore le nom de domaine souhaité, commandez-le directement depuis le tunnel d'ajout.

Une fois le tunnel d'ajout ouvert, sélectionnez le parcours commande pour acheter un nouveau nom de domaine et l'associer automatiquement à votre site. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Dans le tunnel d'ajout, sélectionnez `Commander un nouveau domaine`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer le tunnel d'ajout à l'étape de sélection du parcours "Commander un domaine" -->
>>
> **Étape 2**
>>
>> Saisissez le nom de domaine souhaité et cliquez sur `Rechercher`{.action}. Les extensions disponibles et leurs tarifs s'affichent.
>>
>> <!-- DRAFT: To screenshot — capturer le champ de recherche de disponibilité avec les suggestions d'extensions et leurs tarifs -->
>>
> **Étape 3**
>>
>> Choisissez l'extension souhaitée et suivez le processus de commande OVHcloud.
>>
>> <!-- DRAFT: To screenshot — capturer la sélection d'une extension et le tunnel de commande OVHcloud -->
>>
> **Étape 4**
>>
>> Une fois la commande finalisée, le nom de domaine est automatiquement associé à votre site Managed Hosting for WordPress.
>>
>> <!-- DRAFT: To screenshot — capturer la confirmation d'association du nom de domaine commandé au site Managed Hosting for WordPress -->
>>

> [!primary]
> La commande d'un nom de domaine génère une facturation séparée, indépendante de votre offre Managed Hosting for WordPress. Retrouvez votre nouvelle facture dans la section **Facturation** de votre espace client OVHcloud.

///

### 3 - Gérer les noms de domaine d'un site WordPress

**Cliquez sur l'une des questions ci-dessous pour afficher le contenu.**

/// details | Comment changer le nom de domaine principal ?

Le changement du nom de domaine principal s'effectue depuis l'onglet `Mes sites`{.action} de votre ressource Managed Hosting for WordPress. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergement WordPress](/links/control-panel/web-wordpress-hosting) de votre espace client OVHcloud.
>>
>> <!-- DRAFT: To screenshot — capturer la page "Hébergement WordPress" listant les ressources Managed Hosting for WordPress du compte -->
>>
> **Étape 2**
>>
>> Cliquez sur `Gérer`{.action} sous la ressource concernée.
>>
>> <!-- DRAFT: To screenshot — capturer une ressource Managed Hosting for WordPress dans le datagrid avec le bouton "Gérer" mis en évidence -->
>>
> **Étape 3**
>>
>> Cliquez sur l'onglet `Mes sites`{.action}. Le datagrid liste vos sites WordPress avec, pour chaque site, le ou les noms de domaine associés.
>>
>> <!-- DRAFT: To screenshot — capturer l'onglet "Mes sites" avec le datagrid listant les sites WordPress et leurs noms de domaine -->
>>
> **Étape 4**
>>
>> En face du nom de domaine concerné, cliquez sur le menu d'actions (icône `...`).
>>
>> <!-- DRAFT: To screenshot — capturer le menu d'actions (icône "...") déployé en face d'un nom de domaine dans le datagrid -->
>>
> **Étape 5**
>>
>> Sélectionnez `Définir comme domaine principal`{.action} et confirmez.
>>
>> <!-- DRAFT: To screenshot — capturer l'option "Définir comme domaine principal" dans le menu d'actions et la modale de confirmation -->
>>

> [!primary]
> Le nom de domaine principal est celui utilisé par défaut pour accéder à votre site WordPress. Modifier le nom de domaine principal peut affecter votre référencement SEO (Search Engine Optimization) si votre site WordPress est déjà indexé. Pensez à configurer une redirection depuis l'ancien nom de domaine principal si nécessaire.

///

/// details | Comment supprimer un nom de domaine ?

<!-- DRAFT: To screenshot — capturer la modale de confirmation de suppression d'un domaine avec le message d'avertissement sur les impacts (SEO, email, SSL) et les deux informations clés : le site n'est pas supprimé + l'URL technique reste accessible -->

> [!warning]
> La suppression d'un nom de domaine **ne supprime pas votre site WordPress**. Seul le lien entre le nom de domaine et le site WordPress est rompu. Votre site WordPress reste accessible via son **URL technique permanente**.

La suppression d'un nom de domaine s'effectue depuis l'onglet `Mes sites`{.action} de votre ressource Managed Hosting for WordPress. Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **6** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergement WordPress](/links/control-panel/web-wordpress-hosting) de votre espace client OVHcloud.
>>
>> <!-- DRAFT: To screenshot — capturer la page "Hébergement WordPress" listant les ressources Managed Hosting for WordPress du compte -->
>>
> **Étape 2**
>>
>> Cliquez sur `Gérer`{.action} sous la ressource concernée.
>>
>> <!-- DRAFT: To screenshot — capturer une ressource Managed Hosting for WordPress dans le datagrid avec le bouton "Gérer" mis en évidence -->
>>
> **Étape 3**
>>
>> Cliquez sur l'onglet `Mes sites`{.action}. Le datagrid liste vos sites WordPress avec, pour chaque site, le ou les noms de domaine associés.
>>
>> <!-- DRAFT: To screenshot — capturer l'onglet "Mes sites" avec le datagrid listant les sites WordPress et leurs noms de domaine -->
>>
> **Étape 4**
>>
>> En face du nom de domaine à supprimer, cliquez sur le menu d'actions (icône `...`).
>>
>> <!-- DRAFT: To screenshot — capturer le menu d'actions (icône "...") déployé en face d'un nom de domaine dans le datagrid -->
>>
> **Étape 5**
>>
>> Sélectionnez `Supprimer ce domaine`{.action}.
>>
>> <!-- DRAFT: To screenshot — capturer l'option "Supprimer ce domaine" dans le menu d'actions -->
>>
> **Étape 6**
>>
>> Lisez les avertissements affichés dans la modale et confirmez la suppression.
>>
>> <!-- DRAFT: To screenshot — capturer la modale de confirmation de suppression avec le message d'avertissement sur les impacts (SEO, email, SSL) -->
>>

**Effets de la suppression :**

- **Votre site WordPress reste intact** : seul le lien avec le nom de domaine est rompu, le site continue de fonctionner.
- **L'URL technique permanente reste accessible** : votre site WordPress reste joignable via cette URL, même sans nom de domaine.
- **Le certificat SSL est révoqué** : il ne couvre plus le nom de domaine supprimé.
- **Le référencement SEO peut être impacté** : si le nom de domaine était indexé par les moteurs de recherche, son retrait affecte le positionnement.
- **Pensez à vérifier vos services email** : les adresses liées à ce nom de domaine peuvent être affectées par la suppression.

> [!primary]
> **Cas particulier — nom de domaine principal unique :** si vous supprimez le seul nom de domaine principal d'un site WordPress, votre site WordPress bascule automatiquement sur son **URL technique permanente**. Cette URL reste toujours accessible et n'est jamais supprimée, même en l'absence de domaine associé.

///

### L'URL technique permanente

Chaque site Managed Hosting for WordPress dispose d'une **URL technique permanente**, indépendante de tout nom de domaine. Cette URL est générée automatiquement à la création du site WordPress et ne peut pas être supprimée.

<!-- DRAFT: To screenshot — capturer l'affichage de l'URL technique dans le datagrid ou dans le détail d'un site, avec le format de l'URL visible -->

Elle vous permet de :

- Accéder à votre site WordPress **en toutes circonstances**, même sans nom de domaine associé.
- Tester votre site WordPress avant d'y faire pointer un nom de domaine.
- Maintenir un accès de secours en cas de problème DNS.

> [!primary]
> L'URL technique est de la forme `*.managed-wp.ovh.net` ou similaire. Retrouvez-la dans le datagrid `Mes sites`{.action}, en face de chaque site WordPress.

## Aller plus loin

[Premiers pas avec le Managed Hosting for WordPress](/pages/web_cloud/managed_hosting/01-managed-wordpress-getting-started)

[Gérer vos sites WordPress avec MainWP](/pages/web_cloud/web_hosting/mainwp-site-management)

<!-- TODO: link target -->
<!-- [Gérer la facturation et le cycle de vie de votre offre](TODO) -->

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).