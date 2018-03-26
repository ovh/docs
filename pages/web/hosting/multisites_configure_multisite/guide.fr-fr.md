---
title: Partager son hébergement entre plusieurs sites
slug: multisites-configurer-un-multisite-sur-mon-hebergement-web
excerpt: Découvrez comment partager votre hébergement entre plusieurs sites internet
section: Configuration de l'hébergement
order: 1
---

**Dernière mise à jour le 01/02/2018**

## Objectif

Il est possible de partager un hébergement web entre plusieurs sites internet. Cette mise en commun est possible à la fois pour des noms de domaine enregistrés chez OVH ou ailleurs.

**Découvrez comment partager votre hébergement entre plusieurs sites internet.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} compatible.
- Disposer d'un ou de plusieurs [noms de domaine](https://www.ovh.com/fr/domaines/){.external}.
- Pouvoir modifier la configuration de votre ou de vos noms de domaine (la zone DNS).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion du Multisite

Pour démarrer la manipulation, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez le nom de l'hébergement concerné. Positionnez-vous enfin sur l'onglet `Multisite`{.action}.

Le tableau qui s'affiche contient tous les noms de domaines qui ont été ajoutés à votre hébergement. Certains d'entre eux ont été créés automatiquement lors de l'installation de votre hébergement.

> [!primary]
>
> En cas de migration de site internet et si vous souhaitez éviter une interruption de service, vous pouvez réaliser l'[étape numéro 4 : « mise en ligne du site »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-4-mise-en-ligne-du-site){.external} comme deuxième étape.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Étape 2 : ajouter un nom de domaine ou un sous-domaine

Pour ajouter un nouveau nom de domaine à votre hébergement, cliquez sur le bouton `Ajouter un domaine ou sous-domaine`{.action}, puis effectuez votre choix dans la fenêtre qui s'affiche.

- **Ajouter un domaine enregistré chez OVH** :
Seuls les noms de domaine utilisant la configuration OVH et renseignés en tant que contacts à votre identifiant client s’affichent. Choisissez-en un dans la liste, puis cliquez sur le bouton `Suivant`{.action}. 
Si vous avez sélectionné cette option, rendez-vous à l'[étape 3.1 : « ajouter un domaine enregistré chez OVH »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-31-ajouter-un-domaine-enregistre-chez-ovh){.external}.

- **Ajouter un nom de domaine externe** :
Vous devrez y renseigner le nom de domaine concerné lors de l'étape suivante. Sachez que vous devez être en mesure de modifier la configuration de ce dernier (sa zone DNS) pour l'ajout puisse être complètement effectué.
Si vous avez sélectionné cette option, rendez-vous à l'[étape 3.2 : « ajouter un domaine externe »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-32-ajouter-un-domaine-externe){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Étape 3.1 : ajouter un domaine enregistré chez OVH

> [!primary]
>
> Cette étape s'applique uniquement si vous avez sélectionné « ajouter un domaine enregistré chez OVH ». Pour un nom de domaine externe, poursuivez la lecture de cette documentation vers l'[étape 3.2 : « ajouter un domaine externe »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-32-ajouter-un-domaine-externe){.external}.
>

Restez sur la partie `Multisite`{.action} de votre espace client, section `Ajouter un domaine ou sous domaine`{.action}. Après avoir sélectionné le nom de domaine enregistré chez OVH, vous devez personnaliser l'ajout de ce dernier. Selon votre offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}, certains éléments parmi les choix proposés ne pourront pas être sélectionnés.

|Information|Description|
|---|---|
|Domaine|Par défaut, le nom de domaine que vous avez sélectionné est renseigné automatiquement. Vous avez la possibilité de spécifier un sous-domaine à ce dernier (exemple : blog.mypersonaldomain.ovh) et de créer simultanément le sous-domaine www (exemple : www.mypersonaldomain.ovh).|
|Dossier racine|Il s'agit du répertoire où le domaine sélectionné sera hébergé sur votre espace de stockage. Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|
|SSL|Vous permet de bénéficier d'une connexion sécurisée (HTTPS://) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page SSL](https://www.ovh.com/fr/ssl/){.external}. En activant le SSL et le CDN (Content Delivery Network), vous pourrez également bénéficier du protocole **HTTP2**.|
|Activer le CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site, comme des images) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page CDN](https://www.ovh.com/fr/hebergement-web/cdn.xml){.external}. En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP2**.|
|IP du pays|Permet de bénéficier d'une adresse IP géolocalisée (parmi une liste de pays) pour le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|
|Activer le firewall|Permet d'activer un pare-feu (analyse des requêtes) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page Mod Security](https://www.ovh.com/fr/hebergement-web/mod_security.xml){.external}.|
|Logs séparés|Permet d'activer un nouvel espace de logs sur le domaine sélectionné. Vous devrez choisir un nom de domaine dans une liste qui déterminera le nom d'accès à ce nouvel espace. Apprenez-en plus grâce à [notre page Statistiques détaillées](https://www.ovh.com/fr/hebergement-web/website_statistics.xml){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}.

![multisite](images/add-multisite-step2.png){.thumbnail}

Nous vous invitons à vérifier les informations qui s'affichent dans le récapitulatif.

En ayant sélectionné un nom de domaine enregistré chez OVH, vous avez la possibilité d'effectuer automatiquement sa configuration DNS en cochant la case `Configuration automatique (recommandée)`{.action}. Cette action peut être accomplie manuellement plus tard en décochant la case. Les informations à modifier s'affichent alors.

Cliquez sur le bouton `Valider`{.action} pour initier l’ajout du domaine. Si vous avez choisi de réaliser une configuration manuelle, la documentation intitulée [*Éditer sa zone DNS OVH*](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external} pourra vous aider dans cette démarche.

> [!primary]
>
> L'ajout du nom de domaine à votre hébergement web peut prendre une heure maximum. Cependant, la modification de la configuration DNS de votre domaine nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.
>

Maintenant que le domaine est ajouté, vous pouvez poursuivre la lecture de cette documentation vers l'[étape 4 : « mise en ligne du site »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-4-mise-en-ligne-du-site){.external}.

### Étape 3.2 : ajouter un domaine externe

> [!primary]
>
> Cette étape s'applique uniquement si vous avez sélectionné « ajouter un domaine externe » (qui n'est pas enregistré chez OVH ou pour lequel vous ne disposez pas de la gestion depuis votre espace client OVH). Pour un domaine enregistré chez OVH, poursuivez la lecture de cette documentation vers l'[étape 3.1 : « ajouter un domaine enregistré chez OVH »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-31-ajouter-un-domaine-enregistre-chez-ovh){.external}.
>

Restez sur la partie `Multisite`{.action} de votre espace client, section `Ajouter un domaine ou sous domaine`{.action}. Après avoir sélectionné un nom de domaine externe, vous devez personnaliser l'ajout de ce dernier.
Certaines options comprises dans votre offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} ne peuvent pas être activées immédiatement après l'ajout du nom de domaine. Vous devez finaliser cette étape avant de pouvoir les activer en modifiant les paramètres du nom de domaine.

|Information|Description|
|---|---|
|Domaine|Renseignez le nom de domaine que vous souhaitez ajouter à votre hébergement web. Vous pouvez spécifier un sous-domaine à ce dernier (exemple : blog.mypersonaldomain.ovh) et créer simultanément le sous-domaine www (exemple : www.mypersonaldomain.ovh). Pour rappel, vous devez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que l'ajout puisse être finalisé.|
|Dossier racine|Il s'agit du répertoire où le nom de domaine sélectionné sera stocké sur votre hébergement web. Si le dossier n'existe pas, il sera créé automatiquement une fois l'opération achevée.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Nous vous invitons à vérifier les informations qui s'affichent dans le récapitulatif.

En ayant sélectionné un nom de domaine externe à OVH, un message vous invite à en modifier la configuration. Notez les éléments qui s'affichent (vous pourrez toutefois les retrouver plus tard si besoin), puis cliquez sur le bouton `Valider`{.action}.

Concernant la configuration du nom de domaine :

|Champ|Où trouver l'information ?|Description|
|---|---|---|
|TXT|Onglet `Multisite`{.action}, puis cliquez sur **Configuration du token ovhcontrol**|Permet à OVH de s'assurer que l'ajout de chaque nom de domaine externe est légitime. Veillez à créer le champ TXT avec le sous-domaine **ovhcontrol** (exemple : ovhcontrol.mypersonaldomain.ovh).|
|A et AAAA|Onglet `Informations générales`{.action}, puis à côté de **IPv4** et **IPv6**|Permet à votre domaine d'afficher le site internet que vous mettrez en ligne sur votre hébergement web.|

Une fois validé, le nom de domaine est temporairement ajouté. Vous devez à présent modifier sa configuration (sa zone DNS) depuis l’interface du prestataire gérant cette dernière. Une fois la manipulation réalisée, un temps de propagation de 4 à 24 heures est requis avant que celle-ci ne soit pleinement effective.

> [!warning]
>
> Cette modification est indispensable afin que l'ajout du domaine puisse être complètement effectué. Si celle-ci n'est pas réalisée, l'ajout du domaine sera annulé.
>

Maintenant que le domaine est ajouté ou que le changement de sa configuration a été initié, vous pouvez poursuivre la lecture de cette documentation vers l'[étape 4 : « mise en ligne du site »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-4-mise-en-ligne-du-site){.external}.

### Étape 4 : mise en ligne du site

Une fois le nom de domaine ajouté, il ne vous reste plus qu'à mettre en ligne le site associé à ce dernier.

Pour vous aider dans cette démarche, vous pouvez bénéficier d’une structure de site prête à l’emploi grâce aux modules en 1 clic d'OVH. Vous pouvez en apprendre plus sur ces derniers depuis notre documentation intitulée [*Installer son site avec les modules en 1 clic*](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}.

Si vous souhaitez effectuer plusieurs partages, vous devrez réaliser l'intégralité de cette manipulation plusieurs fois.

Nous vous invitons à être vigilant sur le nombre de sites que vous partagez sur votre hébergement. Plus celui-ci est élevé, plus les ressources qui lui sont allouées seront sollicitées. [La page de nos offres](https://www.ovh.com/fr/hebergement-web/){.external} d'hébergement web vous indiquera le nombre de sites que vous pouvez héberger sur votre espace.

## Aller plus loin

[Installer son site avec les modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}.

[Éditer sa zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.