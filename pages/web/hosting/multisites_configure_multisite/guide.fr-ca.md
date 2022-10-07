---
title: 'Partager son hébergement entre plusieurs sites'
slug: multisites-configurer-un-multisite-sur-mon-hebergement-web
excerpt: "Découvrez comment héberger différents sites Internet sur votre offre d'hébergement web"
section: 'Premiers pas'
order: 03
---

**Dernière mise à jour le 22/08/2022**

## Objectif

Vous pouvez héberger plusieurs sites Internet sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud.

**Découvrez comment héberger différents sites Internet sur votre offre d'hébergement web.**

## Prérequis

- Disposer d'une offre [d'hébergement web OVHcloud](https://www.ovhcloud.com/fr-ca/web-hosting/){.external} compatible.
- Disposer d'un ou plusieurs [noms de domaine](https://www.ovhcloud.com/fr-ca/domains/){.external}.
- Pouvoir modifier la configuration de vos noms de domaine (la [zone DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns)).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

### Étape 1 : accéder à la gestion multisite

Tout d'abord, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et sélectionnez `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la barre de services située à gauche, sélectionnez l'offre concernée, puis choisissez l'onglet `Multisite`{.action}.

Le tableau qui s'affiche liste tous les noms de domaine et sous-domaines ajoutés à votre solution d'hébergement web. Certains d’entre eux ont été créés automatiquement lors de l’installation de votre hébergement.

> [!primary]
>
> Si vous migrez votre site Internet et souhaitez éviter toute interruption de service, suivez l'[étape 3 : mettre votre site web en ligne](#site-online).
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Étape 2 : ajouter un domaine ou un sous-domaine

Pour ajouter un nouveau nom de domaine ou sous-domaine à votre hébergement web, cliquez sur le bouton `Actions`{.action} situé à gauche de l'écran puis sur `Ajouter un domaine ou sous domaine`{.action} et effectuez votre choix dans la fenêtre qui s’affiche.

![actions](images/actions-multisite-ovh.png){.thumbnail}

- **Ajouter un domaine enregistré chez OVHcloud** :

Seuls s'affichent ici les noms de domaine OVHcloud que vous avez dans votre espace client. Choisissez-en un dans la liste puis cliquez sur `Suivant`{.action}. Poursuivez alors vers l'[étape 2.1: ajouter un domaine enregistré chez OVHcloud](#add-ovhcloud-domain).

- **Ajouter un nom de domaine externe** :

Dans le cas d'un nom de domaine externe à votre compte client (autre identifiant client) ou externe à OVHcloud (fournisseur de nom de domaine tiers), sélectionnez `Ajouter un nom de domaine externe`{.action} puis cliquez sur `Suivant`{.action}. Poursuivez alors vers l'[étape 2.2: ajouter un nom de domaine externe](#add-external-domain).

![multisite](images/add-multisite-step1.png){.thumbnail}

#### Étape 2.1 : ajouter un domaine enregistré chez OVHcloud <a name="add-ovhcloud-domain"></a>

> [!warning]
> Cette étape ne s'applique que si vous avez sélectionné « Ajouter un domaine enregistré chez OVHcloud ». Le nom de domaine ou sa zone DNS doivent se trouver dans votre espace client. Pour les noms de domaine externes, passez à l'[étape 2.2 : ajouter un nom de domaine externe](#add-external-domain){.external}.

Vous devez à présent personnaliser l’ajout du domaine ou sous-domaine. Selon votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}, certains éléments parmi les choix proposés ne pourront pas être sélectionnés.

> [!primary]
> Pour ajouter un sous-domaine, vous devez d’abord sélectionner le domaine principal dans la liste (exemple: mydomain.ovh). L’étape suivante vous permettra d’indiquer le sous-domaine (exemple: **blog**.mydomain.ovh).

![multisite](images/add-multisite-step2.png){.thumbnail}

|Information|Description|
|---|---|
|Domaines|Par défaut, le nom de domaine que vous avez sélectionné est renseigné automatiquement. Vous pouvez y ajouter un sous-domaine (par exemple, **blog**.mydomain.ovh) et créer simultanément le sous-domaine « www » correspondant (par exemple, **www.blog**.mydomain.ovh). En définitive, ce domaine sera l'adresse Internet du site que vous souhaitez mettre en ligne.|
|Dossier racine|Définissez le dossier, sur votre espace de stockage, vers lequel le domaine pointe. C'est dans cet espace que les fichiers du site devront être mis en ligne. Par exemple, pour blog.mydomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|SSL|Vous permet de bénéficier d'une connexion sécurisée (HTTPS://) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page SSL](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external}. En activant le SSL et le CDN (Content Delivery Network), vous pourrez également bénéficier du protocole **HTTP2** (ce dernier est activé par défaut dans notre datacenter de Gravelines).|
|Activer le CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site, comme des images) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page CDN](https://www.ovhcloud.com/fr/web-hosting/options/cdn/){.external}. En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP2** (ce dernier est activé par défaut dans notre datacenter de Gravelines).|
|IP du pays|Permet de bénéficier d'une adresse IP géolocalisée (parmi une liste de pays) pour le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page IP](https://www.ovhcloud.com/fr/web-hosting/options/){.external}.|
|Activer le firewall|Permet d'activer un pare-feu (analyse des requêtes) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page ModSecurity](https://www.ovhcloud.com/fr/web-hosting/options/){.external}.|
|Logs séparés|Permet d'activer un nouvel espace de logs sur le domaine sélectionné. Vous devrez choisir un nom de domaine dans une liste qui déterminera le nom d'accès à ce nouvel espace. Apprenez-en plus grâce à [notre page sur les statistiques détaillées](https://www.ovhcloud.com/fr/web-hosting/uc-website-traffic-analysis/){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Vérifiez ensuite le récapitulatif qui s'affiche.

![multisite](images/add-multisite-step3.png){.thumbnail}

En ayant sélectionné un nom de domaine enregistré chez OVHcloud, vous avez la possibilité de modifier automatiquement ou manuellement sa configuration DNS :

- **pour une configuration DNS automatique** : cochez la case `Configuration automatique (recommandée)`{.action} ;
- **pour une configuration DNS manuelle** : décochez la case `Configuration automatique (recommandée)`{.action} puis notez les informations qui s'affichent. Lorsque vous souhaiterez réaliser ce paramétrage, aidez-vous de notre documentation [« Éditer une zone DNS OVHcloud »](../../domains/editer-ma-zone-dns/){.external}.

Cliquez alors sur `Valider`{.action} pour lancer l’ajout du domaine. Cela peut prendre jusqu'à une heure. Cependant, la modification de la configuration DNS de votre domaine nécessite un temps de propagation de 1 à 24 heures avant d’être pleinement effective.

Maintenant que le domaine est ajouté, rendez-vous à l’[étape 3 : mettre votre site web en ligne](#site-online).

#### Étape 2.2 : ajouter un nom de domaine externe <a name="add-external-domain"></a>

 Cette étape s’applique uniquement si vous avez sélectionné « Ajouter un nom de domaine externe ».
 
 Votre nom de domaine n'est donc pas enregistré chez OVHcloud **ou** il n'est pas enregistré dans **votre** compte OVHcloud. 

 > Avant de poursuivre, il est préférable de modifier la zone DNS du nom de domaine externe avant l'ajout de l'entrée multisite.
 >
 > La modification de la configuration du nom de domaine externe (sa zone DNS) doit être réalisée depuis l’interface du prestataire gérant celle-ci. S’il s’agit d’OVHcloud, aidez-vous de notre documentation [« Éditer une zone DNS OVHcloud »](../../domains/editer-ma-zone-dns/){.external}. Une fois la modification effectuée, un temps de propagation de 1 à 24 heures est requis avant qu’elle ne soit pleinement effective.
>
> Retrouvez ci-dessous les 2 éléments à modifier concernant la configuration DNS de votre nom de domaine externe :
>
> |Champ|Où trouver l'information ?|Action à réaliser|
> |---|---|---|
> |TXT|Onglet `Multisite`{.action} puis cliquez sur `Configuration du token ovhcontrol`{.action}|Permet à OVHcloud de s'assurer que l'ajout de chaque nom de domaine externe est légitime. Veillez à créer le champ TXT avec le sous-domaine ovhcontrol (par exemple, ovhcontrol.mydomain.ovh) dans la zone DNS faisant autorité pour le nom de domaine à ajouter.<br></br>Pour retrouver cette dernière, retrouvez les [serveurs DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) auxquels votre domaine est lié. Vous devrez valider uniquement le domaine principal, pas tous les sous-domaines.|
>
> ![multisite](images/add-multisite-external-step3.png){.thumbnail}
>
> |Champ|Où trouver l'information ?|Action à réaliser|
> |---|---|---|
> |A et AAAA|Onglet `Informations générales`{.action} puis à côté de **IPv4** et **IPv6**|Permet à votre domaine d'afficher le site Internet que vous mettrez en ligne sur votre hébergement web. Associez votre nom de domaine ou sous-domaine à l'adresse IP de votre hébergement.|
>
> ![multisite](images/add-multisite-external-step4.png){.thumbnail}
>

 Vous devez à présent personnaliser l’ajout du domaine. À noter que certaines options comprises dans votre offre d'[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external} ne peuvent pas être activées pendant ce processus. Vous devrez finaliser la manipulation avant de pouvoir les utiliser, en modifiant les paramètres du multisite lorsqu’il sera ajouté.

|Information|Description|
|---|---|
|Domaine|Renseignez le nom de domaine que vous souhaitez utiliser. Ajoutez-y au besoin un sous-domaine (par exemple, **blog**.mydomain.ovh) et créez simultanément le sous-domaine « www » correspondant (par exemple, **www.blog**.mydomain.ovh). En définitive, celui-ci correspondra à l'adresse Internet du site que vous souhaitez mettre en ligne. Sachez que vous devez être en mesure de modifier la configuration du domaine (sa zone DNS) afin que l'ajout puisse être finalisé.|
|Dossier racine| Définissez le dossier, sur votre espace de stockage, vers lequel le domaine pointe. C'est dans cet espace que les fichiers du site devront être mis en ligne. Par exemple, pour blog.mydomain.ovh, le dossier racine pourrait être « blog ». Si le dossier n'existe pas, il sera créé automatiquement.|
|Activer l'IPv6|Permet d'activer le protocole IPv6 sur le domaine renseigné. Apprenez-en plus grâce à [notre page IP](https://www.ovhcloud.com/fr/web-hosting/options/){.external}.|

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}. Vérifiez ensuite le récapitulatif qui s'affiche.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Tout ajout d'un nom de domaine externe à OVHcloud nécessite une validation supplémentaire obligatoire. Cela nous permet de nous assurer que l'ajout du domaine externe est légitime. Un message vous invitera donc à modifier la configuration DNS du nom de domaine.

![multisite](images/add-multisite-external-step2.png){.thumbnail}

Notez les éléments qui s’affichent, puis cliquez sur le bouton `Valider`{.action}. Dès lors, le nom de domaine est ajouté de manière temporaire, le temps que vous puissiez modifier sa configuration DNS.

> [!warning]
>
> Vous devez **rapidement** effectuer ces modifications pour que votre domaine soit correctement ajouté. Dans le cas contraire, l'ajout de votre domaine sera annulé.
>

### Étape 3 : mettre votre site web en ligne <a name="site-online"></a>

Une fois le nom de domaine ajouté, il ne vous reste plus qu’à mettre en ligne le site associé à ce dernier. Pour rappel, vous devez réaliser cette manipulation dans le dossier racine que vous avez défini lors de l’étape précédente.

Pour vous aider dans cette démarche, vous pouvez bénéficier d’une structure de site prête à l’emploi grâce aux modules en 1 clic d’OVHcloud. Le site sera alors installé automatiquement dans le dossier racine configuré précédemment. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Installer son site avec les modules en 1 clic »](../modules-en-1-clic/){.external}.

A contrario, si vous souhaitez installer manuellement votre site, munissez-vous de ses fichiers puis mettez-les en ligne dans le bon dossier racine sur votre espace de stockage. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Mettre en ligne un site Internet sur son hébergement web »](../mettre-mon-site-en-ligne/){.external}.

> [!primary]
>
> Si vous souhaitez ajouter plusieurs sites web, vous devrez répéter cette étape.
>
> Nous vous invitons à être vigilant sur le nombre de sites que vous partagez sur votre hébergement. Plus celui-ci est élevé, plus les ressources qui lui sont allouées sont sollicitées. [La page de nos offres d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external} indique le nombre de sites Internet que vous pouvez accueillir sur votre espace.
>

## Aller plus loin

[Installer son site avec les modules en 1 clic.](../modules-en-1-clic/){.external}

[Éditer une zone DNS OVHcloud.](../../domains/editer-ma-zone-dns/){.external}

[Mettre en ligne un site Internet sur son hébergement web.](../mettre-mon-site-en-ligne/){.external}

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr-ca/support-levels/).

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
