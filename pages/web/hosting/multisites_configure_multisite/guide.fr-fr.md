---
title: 'Partager son hébergement entre plusieurs sites'
slug: multisites-configurer-un-multisite-sur-mon-hebergement-web
excerpt: 'Découvrez comment partager votre hébergement entre plusieurs sites internet'
section: 'Configuration de l''hébergement'
order: 1
---

**Dernière mise à jour le 31/08/2018**

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

Le tableau qui s'affiche contient tous les noms de domaine qui ont été ajoutés à votre hébergement. Certains d'entre eux ont été créés automatiquement lors de l'installation de votre hébergement.

> [!primary]
>
> En cas de migration de site internet et si vous souhaitez éviter une interruption de service, vous pouvez réaliser l'[étape numéro 4 : « mise en ligne du site »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-4-mise-en-ligne-du-site){.external} comme deuxième étape.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Étape 2 : ajouter un nom de domaine ou un sous-domaine

Pour ajouter un nouveau nom de domaine à votre hébergement, cliquez sur le bouton `Ajouter un domaine ou sous-domaine`{.action}, puis effectuez votre choix dans la fenêtre qui s'affiche.

- **Ajouter un domaine enregistré chez OVH** :

Seuls les noms de domaine utilisant la configuration OVH et renseignés en tant que contacts à votre identifiant client s’affichent. Choisissez-en un dans la liste, puis cliquez sur le bouton `Suivant`{.action}. Poursuivez alors vers l'[étape 3.1 : « ajouter un domaine enregistré chez OVH »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-31-ajouter-un-domaine-enregistre-chez-ovh){.external}.

- **Ajouter un nom de domaine externe** :

Si le nom de domaine n'apparaît pas dans la liste, il est alors considéré comme étant externe (à votre identifiant client ou à OVH). Si tel est le cas, sélectionnez `Ajouter un nom de domaine externe`{.action}, puis cliquez sur le bouton `Suivant`{.action}. Poursuivez alors vers l'[étape 3.2 : « ajouter un domaine externe »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-32-ajouter-un-domaine-externe){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Étape 3.1 : ajouter un domaine enregistré chez OVH

> [!primary]
>
> Cette étape s'applique uniquement si vous avez sélectionné « ajouter un domaine enregistré chez OVH ». Pour un nom de domaine externe, poursuivez vers l'[étape 3.2 : « ajouter un domaine externe »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-32-ajouter-un-domaine-externe){.external}.
>

Vous devez à présent personnaliser l'ajout du domaine. Selon votre offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external}, certains éléments parmi les choix proposés ne pourront pas être sélectionnés.

|Information|Description|
|---|---|
|Domaine|Par défaut, le nom de domaine que vous avez sélectionné est renseigné automatiquement. Vous pouvez y ajouter un sous-domaine (par exemple, blog.mypersonaldomain.ovh) et créer simultanément le sous-domaine « www » correspondant (par exemple, www.blog.mypersonaldomain.ovh). En définitive, ce domaine sera l'adresse internet du site que vous souhaitez mettre en ligne.|
|Dossier racine|Définissez le dossier où le domaine sera hébergé sur votre espace de stockage. C'est dans cet espace où les fichiers du site devront être mis en ligne. Par exemple, pour blog.mypersonaldomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|
|SSL|Vous permet de bénéficier d'une connexion sécurisée (HTTPS://) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page SSL](https://www.ovh.com/fr/ssl/){.external}. En activant le SSL et le CDN (Content Delivery Network), vous pourrez également bénéficier du protocole **HTTP2**.|
|Activer le CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site, comme des images) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page CDN](https://www.ovh.com/fr/hebergement-web/cdn.xml){.external}. En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP2**.|
|IP du pays|Permet de bénéficier d'une adresse IP géolocalisée (parmi une liste de pays) pour le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|
|Activer le firewall|Permet d'activer un pare-feu (analyse des requêtes) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page Mod Security](https://www.ovh.com/fr/hebergement-web/mod_security.xml){.external}.|
|Logs séparés|Permet d'activer un nouvel espace de logs sur le domaine sélectionné. Vous devrez choisir un nom de domaine dans une liste qui déterminera le nom d'accès à ce nouvel espace. Apprenez-en plus grâce à [notre page Statistiques détaillées](https://www.ovh.com/fr/hebergement-web/website_statistics.xml){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Nous vous invitons alors à vérifier le récapitulatif qui s'affiche.

![multisite](images/add-multisite-step2.png){.thumbnail}

En ayant sélectionné un nom de domaine enregistré chez OVH, vous avez la possibilité de modifier automatiquement ou manuellement sa configuration DNS :

- **pour une configuration DNS automatique** : cochez la case `Configuration automatique (recommandée)`{.action} ;
- **pour une configuration DNS manuelle** : décochez la case `Configuration automatique (recommandée)`{.action} puis récupérez les informations à modifier qui s'affichent. Lorsque vous souhaiterez réaliser cette configuration, aidez-vous de la documentation [« Éditer sa zone DNS OVH »](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}.

Cliquez alors sur le bouton `Valider`{.action} pour lancer l'ajout du domaine. Cela peut prendre jusqu'à une heure. Cependant, la modification de la configuration DNS de votre domaine nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.

Maintenant que le domaine est ajouté, rendez-vous à l'[étape 4 : « mise en ligne du site »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-4-mise-en-ligne-du-site){.external}.

### Étape 3.2 : ajouter un domaine externe

> [!primary]
>
> Cette étape s'applique uniquement si vous avez sélectionné « ajouter un domaine externe » (qui n'est pas enregistré chez OVH ou pour lequel vous ne disposez pas de la gestion depuis votre espace client OVH). Pour un domaine enregistré chez OVH, retournez à l'[étape 3.1 : « ajouter un domaine enregistré chez OVH »](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-31-ajouter-un-domaine-enregistre-chez-ovh){.external}.
>

Vous devez à présent personnaliser l'ajout du domaine. À noter que certaines options comprises dans votre offre d'[hébergement web OVH](https://www.ovh.com/fr/hebergement-web/){.external} ne peuvent pas être activées pendant ce processus. Vous devrez finaliser la manipulation avant de pouvoir les activer, en modifiant les paramètres du Multisite lorsqu'il sera ajouté.

|Information|Description|
|---|---|
|Domaine|Renseignez le nom de domaine que vous souhaitez utiliser. Ajoutez-y au besoin un sous-domaine (par exemple, blog.mypersonaldomain.ovh) et créez simultanément le sous-domaine « www » correspondant (par exemple, www.blog.mypersonaldomain.ovh). En définitive, celui-ci correspondra à l'adresse internet du site que vous souhaitez mettre en ligne. Sachez que vous devez être en mesure de modifier la configuration du domaine (sa zone DNS) afin que l'ajout puisse être finalisé.|
|Dossier racine|Définissez le dossier où le domaine sera hébergé sur votre espace de stockage. C'est dans cet espace où les fichiers du site devront être mis en ligne. Par exemple, pour blog.mypersonaldomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. Apprenez-en plus grâce à [notre page IP](https://www.ovh.com/fr/hebergement-web/ip.xml){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Nous vous invitons alors à vérifier le récapitulatif qui s'affiche.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

En ayant sélectionné un nom de domaine externe à OVH, il est impératif de réaliser une étape de validation particulière afin que nous puissions nous assurer que l'ajout est légitime. En ce sens, un message vous invite à modifier la configuration DNS de ce dernier. 

Notez les éléments qui s'affichent, puis cliquez sur le bouton `Valider`{.action}. Dès lors, le nom de domaine est temporairement ajouté le temps que vous puissiez modifier sa configuration DNS.

> [!warning]
>
> Cette modification est indispensable afin que l'ajout du domaine puisse être complètement effectué. Si celle-ci n'est pas réalisée, l'ajout du domaine sera annulé.
>

La modification de la configuration du nom de domaine (sa zone DNS) doit être réalisée depuis l’interface du prestataire gérant celle-ci. S'il s'agit d'OVH, aidez-vous de la documentation [« Éditer sa zone DNS OVH »](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}. Une fois la modification effectuée, un temps de propagation de 4 à 24 heures est requis avant qu'elle ne soit pleinement effective.

Si vous souhaitez retrouver les éléments à modifier concernant la configuration DNS du nom de domaine :

|Champ|Où trouver l'information ?|Description|
|---|---|---|
|TXT|Onglet `Multisite`{.action}, puis cliquez sur **Configuration du token ovhcontrol**|Permet à OVH de s'assurer que l'ajout de chaque nom de domaine externe est légitime. Veillez à créer le champ TXT avec le sous-domaine **ovhcontrol** (par exemple, ovhcontrol.mypersonaldomain.ovh).|
|A et AAAA|Onglet `Informations générales`{.action}, puis à côté de **IPv4** et **IPv6**|Permet à votre domaine d'afficher le site internet que vous mettrez en ligne sur votre hébergement web.|

### Étape 4 : mise en ligne du site

Une fois le nom de domaine ajouté, il ne vous reste plus qu'à mettre en ligne le site associé à ce dernier. Pour rappel, vous devez réaliser cette manipulation dans le dossier racine que vous avez défini lors de l'étape précédente.

Pour vous aider dans cette démarche, vous pouvez bénéficier d’une structure de site prête à l’emploi grâce aux modules en 1 clic d'OVH. Le site sera alors installé automatiquement dans le dossier racine configuré précédemment. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Installer son site avec les modules en 1 clic »](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}. 

A contrario, si vous souhaitez installer manuellement votre site, munissez-vous de ses fichiers puis mettez-les en ligne dans le bon dossier racine sur votre espace de stockage. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Mettre en ligne un site internet sur son hébergement web »](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/){.external}.

> [!primary]
>
> Si vous désirez effectuer plusieurs partages, vous devrez réaliser l'intégralité de cette manipulation plusieurs fois.
>
> Nous vous invitons à être vigilant sur le nombre de sites que vous partagez sur votre hébergement. Plus celui-ci est élevé, plus les ressources qui lui sont allouées sont sollicitées. [La page de nos offres](https://www.ovh.com/fr/hebergement-web/){.external} d'hébergement web vous indiquera le nombre de sites que vous pouvez héberger sur votre espace.
>


## Aller plus loin

[Installer son site avec les modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/){.external}.

[Éditer sa zone DNS OVH](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/){.external}.

[Mettre en ligne un site internet sur son hébergement web](https://docs.ovh.com/fr/hosting/mettre-mon-site-en-ligne/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.