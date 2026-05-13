---
title: "Web Hosting - Lier un domaine à votre site WordPress géré"
excerpt: "Ajoutez, modifiez ou supprimez les domaines de votre Managed Hosting WordPress — interne, externe ou commande — depuis l'espace client OVHcloud."
updated: 2026-05-13
---

## Objectif

**Managed Hosting for WordPress** est la solution OVHcloud d'hébergement WordPress géré : la maintenance technique (mises à jour, sécurité, sauvegardes) est prise en charge automatiquement. L'offre permet de gérer les noms de domaine directement depuis l'interface OVHcloud, sans intervention manuelle. Vous pouvez associer un domaine ou sous-domaine à chacun de vos sites WordPress, quelle que soit son origine.

Trois parcours sont disponibles selon votre situation :

- **Domaine interne** : le domaine est déjà présent dans votre compte OVHcloud.
- **Domaine externe** : le domaine est géré chez un autre bureau d'enregistrement.
- **Commander un domaine** : vous souhaitez acheter un nouveau nom de domaine.

## Prérequis

- Disposer d'une offre **Managed Hosting for WordPress** active avec au moins un site créé.
- Pour un domaine externe : avoir accès à la zone DNS (Domain Name System) chez votre prestataire actuel.

<!-- CP-NAV-START:web-wordpress-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergement WordPress](/links/control-panel/web-wordpress-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Managed hosting for WordPress`{.action}

---
<!-- CP-NAV-END:web-wordpress-hosting -->

## En pratique

### 1. Accéder à la gestion des domaines

<!-- DRAFT: To screenshot — capturer la vue "Mes sites" de la ressource Managed Hosting for WordPress avec le datagrid des sites et le bouton "Ajouter un domaine" visible -->

- **Ouvrir votre ressource** : cliquez sur `Gérer`{.action} sous la ressource concernée.
- **Accéder à l'onglet Mes sites** : cliquez sur l'onglet `Mes sites`{.action}. Le datagrid liste vos sites WordPress avec, pour chaque site, le domaine associé et les actions disponibles.
- **Lancer l'ajout d'un domaine** : en face du site concerné, cliquez sur `Ajouter un domaine`{.action}.

> [!primary]
> Le **premier domaine ajouté** à un site devient automatiquement le **domaine principal**. Vous pourrez en ajouter d'autres par la suite (multi-domaine) et changer le domaine principal depuis le même menu.

### 2. Ajouter un domaine interne

Un domaine **interne** est un nom de domaine déjà présent dans votre compte OVHcloud (enregistré ou transféré).

<!-- DRAFT: To screenshot — capturer le tunnel d'ajout de domaine à l'étape de sélection "Domaine interne", avec la liste déroulante des domaines disponibles dans le compte -->

- **Sélectionner le parcours interne** : dans le tunnel d'ajout, sélectionnez `Utiliser un domaine de mon compte OVHcloud`{.action}.
- **Choisir le domaine** : sélectionnez le domaine ou sous-domaine souhaité dans la liste des domaines disponibles sur votre compte.
- **Confirmer** : vérifiez le récapitulatif et cliquez sur `Ajouter ce domaine`{.action}. La configuration DNS est prise en charge automatiquement.

> [!primary]
> Pour un domaine interne, la propagation DNS est automatique. Votre site sera accessible via ce domaine en quelques minutes à quelques heures.

### 3. Ajouter un domaine externe

Un domaine **externe** est géré chez un autre bureau d'enregistrement (Gandi, Namecheap, Google Domains, etc.). Vous devrez modifier manuellement votre zone DNS.

<!-- DRAFT: To screenshot — capturer le tunnel d'ajout de domaine à l'étape "Domaine externe" avec les champs de saisie du nom de domaine et les informations DNS à configurer (valeurs CNAME ou A à renseigner chez le prestataire externe) -->

- **Sélectionner le parcours externe** : dans le tunnel d'ajout, sélectionnez `Utiliser un domaine externe à OVHcloud`{.action}.
- **Saisir le nom de domaine** : entrez votre nom de domaine (ex. : `monsite.com`) dans le champ prévu.
- **Configurer la zone DNS externe** : l'interface affiche les enregistrements DNS à ajouter chez votre prestataire actuel. Connectez-vous à l'interface DNS de votre prestataire et ajoutez les enregistrements indiqués (généralement un enregistrement de type **A** ou **CNAME** — Canonical Name).
- **Valider** : une fois la configuration DNS effectuée chez votre prestataire, revenez dans l'espace client OVHcloud et cliquez sur `Confirmer`{.action}.

> [!warning]
> La propagation DNS d'un domaine externe peut prendre jusqu'à **24 à 48 heures** selon votre prestataire. Votre site ne sera pas accessible via ce domaine pendant cette période.

> [!info]
> Le certificat SSL (Secure Sockets Layer) est généré automatiquement après validation de la propagation DNS. Aucune intervention manuelle n'est nécessaire de votre côté.

### 4. Commander un nouveau domaine

Si vous ne possédez pas encore le nom de domaine souhaité, vous pouvez le commander directement depuis le tunnel d'ajout.

<!-- DRAFT: To screenshot — capturer le tunnel d'ajout de domaine à l'étape "Commander un domaine" avec le champ de recherche de disponibilité et les suggestions de domaines disponibles -->

- **Sélectionner le parcours commande** : dans le tunnel d'ajout, sélectionnez `Commander un nouveau domaine`{.action}.
- **Rechercher la disponibilité** : saisissez le nom de domaine souhaité et cliquez sur `Rechercher`{.action}. Les extensions disponibles et leurs tarifs s'affichent.
- **Sélectionner et commander** : choisissez l'extension souhaitée et suivez le processus de commande OVHcloud.
- **Association automatique** : une fois la commande finalisée, le domaine est automatiquement associé à votre site Managed Hosting for WordPress.

> [!primary]
> La commande d'un domaine génère une facturation séparée, indépendante de votre offre Managed Hosting for WordPress. Retrouvez votre nouvelle facture dans la section **Facturation** de votre espace client.

### 5. Gérer les domaines d'un site

#### 5.1 Comment changer le domaine principal ?

<!-- DRAFT: To screenshot — capturer le menu d'actions sur un domaine dans le datagrid avec l'option "Définir comme domaine principal" -->

Depuis l'onglet `Mes sites`{.action}, en face du domaine concerné :

- **Ouvrir les actions du domaine** : cliquez sur le menu d'actions (icône `...`) en face du domaine.
- **Définir comme domaine principal** : sélectionnez `Définir comme domaine principal`{.action} et confirmez.

> [!info]
> Le domaine principal est celui utilisé par défaut pour accéder à votre site. Modifier le domaine principal peut affecter votre référencement SEO (Search Engine Optimization) si votre site est déjà indexé. Pensez à configurer une redirection depuis l'ancien domaine principal si nécessaire.

#### 5.2 Comment supprimer un domaine ?

<!-- DRAFT: To screenshot — capturer la modale de confirmation de suppression d'un domaine avec le message d'avertissement sur les impacts (SEO, email, SSL) et les deux informations clés : le site n'est pas supprimé + l'URL technique reste accessible -->

> [!warning]
> La suppression d'un domaine **ne supprime pas votre site WordPress**. Seul le lien entre le domaine et le site est rompu. Votre site reste accessible via son **URL technique permanente**.

Depuis l'onglet `Mes sites`{.action}, en face du domaine à supprimer :

- **Ouvrir les actions du domaine** : cliquez sur le menu d'actions (icône `...`) en face du domaine.
- **Supprimer le domaine** : sélectionnez `Supprimer ce domaine`{.action}.
- **Confirmer dans la modale** : lisez les avertissements affichés et confirmez la suppression.

**Effets de la suppression :**

- **Lien domaine ↔ site** : rompu — le domaine n'est plus associé au site.
- **Site WordPress** : non supprimé — reste intact et fonctionnel.
- **URL technique** : conservée et toujours accessible.
- **Certificat SSL** : révoqué pour ce domaine.
- **Référencement SEO** : potentiellement impacté si le domaine était indexé.
- **Emails associés** : vérifiez vos services email liés à ce domaine avant suppression.

> [!primary]
> **Cas particulier — domaine principal unique :** si vous supprimez le seul domaine principal d'un site, votre site bascule automatiquement sur son **URL technique permanente**. Cette URL reste accessible en permanence et n'est jamais supprimée, même en l'absence de domaine associé.

### 6. URL technique permanente

Chaque site Managed Hosting for WordPress dispose d'une **URL technique permanente**, indépendante de tout nom de domaine. Cette URL est générée automatiquement à la création du site et ne peut pas être supprimée.

<!-- DRAFT: To screenshot — capturer l'affichage de l'URL technique dans le datagrid ou dans le détail d'un site, avec le format de l'URL visible -->

Elle vous permet de :

- Accéder à votre site **en toutes circonstances**, même sans domaine associé.
- Tester votre site avant de pointer un domaine.
- Maintenir un accès de secours en cas de problème DNS.

> [!info]
> L'URL technique est de la forme `*.managed-wp.ovh.net` ou similaire. Retrouvez-la dans le datagrid `Mes sites`{.action}, en face de chaque site.

## Aller plus loin

- **Premiers pas avec le Managed Hosting for WordPress** <!-- TODO: link target -->
- [Gérer vos sites WordPress avec MainWP](/pages/web_cloud/web_hosting/mainwp-site-management/) — administration centralisée multi-sites.
- **Gérer la facturation et le cycle de vie de votre offre** <!-- TODO: link target -->
- Échangez avec notre [communauté d'utilisateurs](/links/community).
