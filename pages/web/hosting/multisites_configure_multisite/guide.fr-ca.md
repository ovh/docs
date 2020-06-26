---
title: 'Partager son hébergement entre plusieurs sites'
slug: multisites-configurer-un-multisite-sur-mon-hebergement-web
excerpt: 'Découvrez comment héberger différents sites internet sur votre offre d''hébergement web'
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 15/05/2019**

## Objectif

Vous pouvez accueillir plusieurs sites internet sur une même offre d'hébergement web. Et ce, que les noms de domaine soient enregistrés chez OVHcloud ou non.

**Découvrez comment héberger différents sites internet sur votre offre d'hébergement web.**

## Prérequis

- Posséder une offre [d'hébergement web](https://www.ovh.com/ca/fr/hebergement-web/){.external} compatible.
- Disposer d'un ou plusieurs [noms de domaine](https://www.ovh.com/ca/fr/domaines/){.external}.
- Pouvoir modifier la configuration de votre ou de vos noms de domaine (la zone DNS).
- Être connecté à votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Étape 1 : accéder à la gestion multisite

Tout d'abord, connectez-vous à votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external}. Cliquez sur `Hébergements`{.action} dans la barre de services située à gauche, sélectionnez l'offre concernée, puis choisissez l'onglet `Multisite`{.action}.

Le tableau qui s'affiche liste tous les noms de domaine ajoutés à votre solution d'hébergement web. Certains d’entre eux ont été créés automatiquement lors de l’installation de votre hébergement.

> [!primary]
>
> Si vous migrez votre site internet et souhaitez éviter toute interruption de service, suivez l'[étape 3 : mettre votre site web en ligne](./#etape-3-mettre-votre-site-web-en-ligne){.external}.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Étape 2 : ajouter un domaine ou un sous-domaine

Pour ajouter un nouveau nom de domaine à votre hébergement web, cliquez sur le bouton `Ajouter un domaine ou sous-domaine`{.action} puis effectuez votre choix dans la fenêtre qui s’affiche.

- **Ajouter un domaine enregistré chez OVHcloud** :

Seuls les noms de domaine utilisant la configuration OVHcloud et renseignés en tant que contacts à votre identifiant client s’affichent. Choisissez-en un dans la liste, puis cliquez sur `Suivant`{.action}. Poursuivez alors vers l'[étape 2.1: ajouter un domaine enregistré chez OVHcloud](./#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud){.external}.

- **Ajouter un nom de domaine externe** :

Si le nom de domaine n'apparaît pas dans la liste, il est alors considéré comme externe (à votre identifiant client ou à OVHcloud). Dans ce cas, sélectionnez `Ajouter un nom de domaine externe`{.action} puis cliquez sur `Suivant`{.action}. Poursuivez alors vers l'[étape 2.2: ajouter un nom de domaine externe](./#etape-22-ajouter-un-domaine-externe){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

#### Étape 2.1 : ajouter un domaine enregistré chez OVHcloud

> [!primary]
>
> Cette étape ne s'applique que si vous avez sélectionné « Ajouter un domaine enregistré chez OVHcloud ». Pour les noms de domaine externes, passez à l'[étape 2.2 : ajouter un nom de domaine externe](./#etape-22-ajouter-un-domaine-externe){.external}.
>

Vous devez à présent personnaliser l’ajout du domaine. Selon votre offre d'[hébergement web](https://www.ovh.com/ca/fr/hebergement-web/){.external}, certains éléments parmi les choix proposés ne pourront pas être sélectionnés.

|Information|Description|
|---|---|
|Domaines|Par défaut, le nom de domaine que vous avez sélectionné est renseigné automatiquement. Vous pouvez y ajouter un sous-domaine (par exemple, blog.mypersonaldomain.ovh) et créer simultanément le sous-domaine « www » correspondant (par exemple, www.blog.mypersonaldomain.ovh). En définitive, ce domaine sera l'adresse internet du site que vous souhaitez mettre en ligne.|
|Dossier racine|Définissez le dossier où le domaine sera hébergé sur votre espace de stockage. C'est dans cet espace où les fichiers du site devront être mis en ligne. Par exemple, pour blog.mypersonaldomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. |
|SSL|Vous permet de bénéficier d'une connexion sécurisée (HTTPS://) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page SSL](https://www.ovh.com/ca/fr/ssl/){.external}. En activant le SSL et le CDN (Content Delivery Network), vous pourrez également bénéficier du protocole **HTTP2** (ce dernier est activé par défaut dans notre datacenter de Gravelines).|
|Activer le CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site, comme des images) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page CDN](https://www.ovh.com/ca/fr/hebergement-web/cdn.xml){.external}. En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP2** (ce dernier est activé par défaut dans notre datacenter de Gravelines).|
|Activer le firewall|Permet d'activer un pare-feu (analyse des requêtes) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page ModSecurity](https://www.ovh.com/ca/fr/hebergement-web/mod_security.xml){.external}.|
|Logs séparés|Permet d'activer un nouvel espace de logs sur le domaine sélectionné. Vous devrez choisir un nom de domaine dans une liste qui déterminera le nom d'accès à ce nouvel espace. Apprenez-en plus grâce à [notre page Statistiques détaillées](https://www.ovh.com/ca/fr/hebergement-web/website_statistics.xml){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Vérifiez ensuite le récapitulatif qui s'affiche.

![multisite](images/add-multisite-step2.png){.thumbnail}

En ayant sélectionné un nom de domaine enregistré chez OVHcloud, vous avez la possibilité de modifier automatiquement ou manuellement sa configuration DNS :

- **pour une configuration DNS automatique** : cochez la case `Configuration automatique (recommandée)`{.action} ;
- **pour une configuration DNS manuelle** : décochez la case `Configuration automatique (recommandée)`{.action} puis notez les informations qui s'affichent. Lorsque vous souhaiterez réaliser ce paramétrage, aidez-vous de notre documentation [« Éditer une zone DNS OVHcloud »](../../domains/editer-ma-zone-dns/){.external}.

Cliquez alors sur `Valider`{.action} pour lancer l’ajout du domaine. Cela peut prendre jusqu'à une heure. Cependant, la modification de la configuration DNS de votre domaine nécessite un temps de propagation de 4 à 24 heures avant d’être pleinement effective.

Maintenant que le domaine est ajouté, rendez-vous à l’[étape 4 : mettre votre site web en ligne](./#etape-3-mettre-votre-site-web-en-ligne){.external}.

#### Étape 2.2 : ajouter un nom de domaine externe

> [!primary]
>
> Cette étape s’applique uniquement si vous avez sélectionné « Ajouter un nom de domaine externe » (qui n’est pas enregistré chez OVHcloud ou pour lequel vous ne disposez pas de la gestion depuis votre espace client OVHcloud). Pour un domaine enregistré chez OVHcloud, retournez à l'[étape 2.1 : ajouter un domaine enregistré chez OVHcloud](./#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud){.external}.
>

Vous devez à présent personnaliser l’ajout du domaine. À noter que certaines options comprises dans votre offre d'[hébergement web](https://www.ovh.com/ca/fr/hebergement-web/){.external} ne peuvent pas être activées pendant ce processus. Vous devrez finaliser la manipulation avant de pouvoir les utiliser, en modifiant les paramètres du multisite lorsqu’il sera ajouté.

|Information|Description|
|---|---|
|Domaine|Renseignez le nom de domaine que vous souhaitez utiliser. Ajoutez-y au besoin un sous-domaine (par exemple, blog.mypersonaldomain.ovh) et créez simultanément le sous-domaine « www » correspondant (par exemple, www.blog.mypersonaldomain.ovh). En définitive, celui-ci correspondra à l'adresse internet du site que vous souhaitez mettre en ligne. Sachez que vous devez être en mesure de modifier la configuration du domaine (sa zone DNS) afin que l'ajout puisse être finalisé.|
|Dossier racine|Définissez le dossier où le domaine sera hébergé sur votre espace de stockage. C'est dans cet espace où les fichiers du site devront être mis en ligne. Par exemple, pour blog.mypersonaldomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Vérifiez ensuite le récapitulatif qui s'affiche.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

En ayant sélectionné un nom de domaine externe à OVHcloud, il est impératif de réaliser une étape de validation particulière afin que nous puissions nous assurer que l’ajout est légitime. En ce sens, un message vous invite à modifier la configuration DNS de ce dernier. 

Notez les éléments qui s’affichent, puis cliquez sur le bouton `Valider`{.action}. Dès lors, le nom de domaine est temporairement ajouté le temps que vous puissiez modifier sa configuration DNS.

> [!warning]
>
> Vous devrez effectuer ces modifications pour que votre domaine soit correctement ajouté. Dans le cas contraire, l'ajout de votre domaine sera annulé.
>

La modification de la configuration du nom de domaine (sa zone DNS) doit être réalisée depuis l’interface du prestataire gérant celle-ci. S’il s’agit d’OVHcloud, aidez-vous de notre documentation [« Éditer une zone DNS OVHcloud »](../../domains/editer-ma-zone-dns/){.external}. Une fois la modification effectuée, un temps de propagation de 4 à 24 heures est requis avant qu’elle ne soit pleinement effective.

Si vous souhaitez retrouver les éléments à modifier concernant la configuration DNS du nom de domaine :

|Champ|Où trouver l'information ?|Description|
|---|---|---|
|TXT|Onglet `Multisite`{.action} puis cliquez sur **Configuration du token ovhcontrol**|Permet à OVHcloud de s'assurer que l'ajout de chaque nom de domaine externe est légitime. Veillez à créer le champ TXT avec le sous-domaine ovhcontrol (par exemple, ovhcontrol.mypersonaldomain.ovh). Vous devez valider uniquement le domaine principal, pas tous les sous-domaines.|
|A et AAAA|Onglet `Informations générales`{.action} puis à côté de **IPv4** et **IPv6**|Permet à votre domaine d'afficher le site internet que vous mettrez en ligne sur votre hébergement web.|

### Étape 3 : mettre votre site web en ligne

Une fois le nom de domaine ajouté, il ne vous reste plus qu’à mettre en ligne le site associé à ce dernier. Pour rappel, vous devez réaliser cette manipulation dans le dossier racine que vous avez défini lors de l’étape précédente.

Pour vous aider dans cette démarche, vous pouvez bénéficier d’une structure de site prête à l’emploi grâce aux modules en 1 clic d’OVHcloud. Le site sera alors installé automatiquement dans le dossier racine configuré précédemment. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Installer son site avec les modules en 1 clic »](../modules-en-1-clic/){.external}. 

A contrario, si vous souhaitez installer manuellement votre site, munissez-vous de ses fichiers puis mettez-les en ligne dans le bon dossier racine sur votre espace de stockage. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Mettre en ligne un site internet sur son hébergement web »](../mettre-mon-site-en-ligne/){.external}.

> [!primary]
>
> Si vous souhaitez ajouter plusieurs sites web, vous devrez répéter cette étape.
>
> Nous vous invitons à être vigilant sur le nombre de sites que vous partagez sur votre hébergement. Plus celui-ci est élevé, plus les ressources qui lui sont allouées sont sollicitées. [La page de nos offres](https://www.ovh.com/ca/fr/hebergement-web/){.external} d'hébergement web indique le nombre de sites internet que vous pouvez accueillir sur votre espace.
>



## Aller plus loin

[« Installer son site avec les modules en 1 clic. »](../modules-en-1-clic/){.external}

[« Éditer une zone DNS OVHcloud. »](../../domains/editer-ma-zone-dns/){.external}

[« Mettre en ligne un site internet sur son hébergement web. »](../mettre-mon-site-en-ligne/){.external}

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
