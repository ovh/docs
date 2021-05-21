---
title: Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic
slug: erreurs-frequentes-modules-en-1-clic
excerpt: Diagnostiquez les cas les plus courants d'erreurs liées aux modules en 1 clic
section: Diagnostic
---

**Dernière mise à jour le 20/05/21**
 
## Objectif

La création d'un [Module en 1 clic](../modules-en-1-clic/) en mode simple ou avancée peut occasionner différentes anomalies et erreurs.
 
**Découvez comment diagnostiquer les cas les plus courants d'erreurs liées aux modules en 1 clic**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovh.com/fr/hebergement-web/) compatible.
- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Avoir utilisé la fonctionnalité [Module en 1 clic](../modules-en-1-clic/), afin de créer un nouveau site.

## En pratique

### "Vous n'avez pas de bases de données disponibles"

![1freeDB](images/1freeDB.png){.thumbnail}

Ce message apparaît dès que vous lancez l'installation de votre module. Il signifie que votre module ne peut pas créer la base de données dont il a besoin.

Vous devrez donc choisir entre :

- Supprimer une base de données non utilisée (ATTENTION : l'opération de suppression d'une base de données est définitive et en supprime également toutes les sauvegardes. Si vous n'êtes pas certain des manipulations à effectuer, contactez l'un de nos [partenaires](https://partner.ovhcloud.com/fr/directory/)) : Pour supprimer une base de données, dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur `Web Cloud`{.action}, puis sur `Hébergements`{.action}, `Bases de données`{.action}.

- Commander de nouvelles bases de données : Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur `Web Cloud`{.action}, puis sur `Hébergements`{.action}, `Bases de données`{.action}, sur `Actions`{.action} et, enfin, `Commander une base Start SQL`{.action} ou `Commander une base SQL privée`{.action}. (Nos [offres de bases de données](https://www.ovh.com/fr/hebergement-web/options-sql.xml))

- Changer votre offre d'hébergement : Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), cliquez sur `Web Cloud`{.action}, puis sur `Hébergements`{.action}, sur le bouton (screenshot) dans la partie `Abonnement`-`Offre` et `Changer d'offre`. Les offres [Pro2014](https://www.ovh.com/fr/hebergement-web/hebergement-pro.xml) et [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml) vous permettront de créer jusqu'à 3 modules 1 clic supplémentaires en mode simple. Les offres [Performance](https://www.ovh.com/fr/hebergement-web/hebergement-performance.xml) vous permettront d'activer gratuitement une offre [SQL privé](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/), afin de pouvoir créer un grand nombre de modules en `mode avancé`.

- Installer votre module en [mode avancé](#mode_avance) sur une base déjà utilisée (Pour retrouver les identifiants de votre base de données, consultez notre [FAQ](https://www.ovh.com/fr/hebergement-web/faq/)).

### "Le répertoire d'installation n'est pas vide"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Après avoir lancé l'installation de votre module, vous avez reçu un mail indiquant que le répertoire d'installation de votre module n'est pas vide.

Ce message signifie que le `Dossier racine` auquel est lié votre domaine dans le `Multisite` de votre hébergement n'est pas vide. Connectez-vous à votre hébergement en [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/), sauvegarder puis supprimer ou déplacer le contenu du dossier concerné. Vous pouvez également modifier le `Dossier racine` lié à votre domaine dans le `Multisite` : Cliquez sur le bouton (screenshot) lié à votre domaine, sur `Modifier le domaine`{.action} et indiquez un nouveau Dossier (Ceci le créera automatiquement sur votre hébergement).

### "Impossible de se connecter à la base de données"

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Après avoir lancé l'installation de votre module en mode avancé, vous avez reçu un mail indiquant que le module ne peut pas se connecter à la base de données créée précédemment. Elle indique que les identifiants de la base de données que vous avez fournis lors de l'installation sont erronés.

Dans cette situation : 

- Retrouvez les identifiants de votre base de données en consultant notre [FAQ](https://www.ovh.com/fr/hebergement-web/faq/).
- Supprimez puis recréez votre module 1 clic ou modifiez le fichier de configuration de votre module.

### Votre nom de domaine n'est pas proposé lors de la création du module

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Cliquez sur l’onglet `Multisite`{.action}, puis effectuez les vérifications suivantes :

|Scénario|Action à entreprendre|
|---|---|
|Le domaine ou le sous-domaine lié au site que vous souhaitez créer n'apparaît pas dans le `Multisite`{.action}.|Ajoutez votre domaine en suivant [ces indications](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Le nom de domaine a été supprimé du multisite sans action de votre part.|Votre domaine ou sa zone DNS sont peut-être gérés depuis un autre compte. Ajoutez votre domaine au `Multisite` en suivant [ce guide](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|

### Votre module s'affiche sur une adresse web de type "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](images/url-cluster.png){.thumbnail}

Supprimez votre module, ainsi que sa base de données (après avoir réalisé toutes les sauvegardes nécessaires). Puis relancez son installation sur le nom de domaine souhaité, sans recréer préalablement de base de données.

### C'est toujours votre ancien site qui s'affiche

Cette anomalie peut avoir plusieurs causes : 

- Vous avez effectué récemment un changement dans votre zone ou vos serveurs DNS ou un transfert de nom de domaine. Patientez jusqu'à ce qu'est ces opérations soient complétement finalisées (48 heures pour des changements dans vos DNS). Pensez également à redémarrer vos appareils (PC, smartphone, box, etc.) et à vider le cache de votre navigateur.
- Votre nom de domaine est toujours relié à votre ancien hébergement. Modifiez dans ce cas votre [Zone DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1) ou vos [serveurs DNS](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns) en conséquence ou contacter votre ancien hébergeur à ce sujet.

### Autres anomalies

Vous rencontrez une anomalie qui n'est pas répertoriée ici. Consultez notre [FAQ sur les hébergements Web](https://www.ovh.com/fr/hebergement-web/faq/).

## Aller plus loin <a name="gofurther"></a>

[Comment diagnostiquer une page blanche ?](../comment-diagnostiquer-page-blanche/)

[Les codes de reponse d’un serveur HTTP](../mutualise-les-codes-de-reponse-dun-serveur-http/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.