---
title: 'Rediriger un nom de domaine géré par OVHcloud'
slug: redirection-nom-de-domaine
excerpt: 'Découvrez les différents types de redirections et comment en créer une pour un nom de domaine géré par OVHcloud'
section: 'Tâches courantes'
order: 1
---

**Dernière mise à jour le 05/05/2020**

## Objectif

La redirection d'un nom de domaine permet de rediriger celui-ci vers une nouvelle cible. Il existe différents types de redirections qui répondent à des besoins spécifiques.

**Découvrez les différents types de redirections et comment en créer une pour un nom de domaine géré par OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Être connecté à votre hébergement web (si vous souhaitez ajouter un [fichier .htaccess](../../hosting/mutualise-tout-sur-le-fichier-htaccess/){.external}).

## En pratique

### Comprendre la redirection d'un nom de domaine

Avant de créer une redirection pour votre nom de domaine, il est important d'en comprendre l'utilité. Elle permet de rediriger votre nom de domaine vers une nouvelle cible, généralement un autre nom de domaine.

Il existe plusieurs cas où une redirection peut être pertinente, le plus courant étant celui lié au changement de nom d'un site internet. Dans ce cas, la redirection permet de guider automatiquement les visiteurs accédant encore à l'ancien nom de domaine vers le nouveau.

Cette action peut être réalisée de plusieurs manières :

- **depuis l'espace client OVHcloud** : un assistant de configuration vous permettra de paramétrer votre redirection ;

- **depuis une méthode nécessitant de la programmation** : vous devrez créer vous-même la redirection dans un fichier (généralement un *.htaccess*).

Sachez que la mise en place d'une redirection peut avoir un impact sur le référencement de votre site internet. Nous vous invitons à être vigilant quant aux manipulations que vous allez entreprendre et à contacter un spécialiste du référencement si nécessaire.

### Rediriger un nom de domaine via l'espace client

Une fois connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la barre de services à gauche, rendez-vous dans la section `Domaines`{.action} (*1* sur l'image ci-dessous), puis sur l'onglet `Redirection`{.action} (*2* sur l'image ci-dessous).

Le tableau affiche les redirections actives pour votre nom de domaine.

Pour ajouter une redirection, cliquez sur le bouton `Ajouter une redirection`{.action} (*3* sur l'image ci-dessous).

![Page principale des redirections](images/create_redirection_global.png){.thumbnail}

Dans la fenêtre qui s'affiche, vous devrez définir le nom de domaine (ou le sous-domaine) que vous souhaitez rediriger. Il s'agit de la source de la redirection.

![Étape 1 pour l'ajout d'une redirection](images/adding_redirection_1.png){.thumbnail}

Vous devez à présent choisir vers quelle cible vous souhaitez rediriger le nom de domaine sélectionné. Deux choix s'offrent à vous :

- **redirection vers une adresse web**

Redirigez un nom de domaine vers un autre. Cette solution est idéale lorsque vous changez le nom de domaine de votre site internet ;

- **redirection vers un serveur OVHcloud ou ailleurs**

Modifiez la configuration DNS d'un nom de domaine pour une autre cible (champ A, AAAA ou CNAME). Cette solution est idéale si votre site internet n'est plus hébergé au même endroit, mais que le nom de domaine reste similaire.
Vous pouvez également réaliser cette action si votre nom de domaine utilise la configuration OVHcloud en la modifiant depuis l'espace client (voir : [Comment éditer ma zone DNS ?](../editer-ma-zone-dns/){.external}).

À partir de ce point, ce guide abordera uniquement la redirection **vers une adresse web**. Concernant l'autre possibilité, rapprochez-vous de votre prestataire afin de connaître les enregistrements DNS que vous devrez modifier avant de poursuivre la démarche.

![Étape 2 pour l'ajout d'une redirection](images/adding_redirection_2.png){.thumbnail}

Pour une redirection **vers une adresse web**, choisissez à présent le type de redirection que vous souhaitez mettre en place. Deux choix s'offrent à vous.

|Type de redirection|Description|
|---|---|
|Visible|Le nom de domaine que vous tapez dans votre navigateur internet (l'ancienne adresse) sera redirigé vers le nouveau nom de domaine. Cela aura pour effet de modifier l'adresse web qui s'affiche dans le navigateur internet pour la nouvelle adresse.|
|Invisible|Le nom de domaine que vous tapez dans votre navigateur internet (l'ancienne adresse) ne sera pas redirigé vers le nouveau nom de domaine. Vous accéderez toujours à l'ancienne adresse, qui par le biais d'un calque appelé *iframe*, affichera le site internet hébergé sur le nouveau nom de domaine. Attention, cette action peut ne pas être compatible avec tous les sites internet et affecter le référencement de ce dernier.|

![Choix entre redirection visible et invisible](images/redirection_3xx_1.png){.thumbnail}

#### Pour une redirection visible

Vous disposez de deux choix concernant la **redirection visible**.

|Type de redirection|Code HTTP|Description|
|---|---|---|
|Visible permanente|301|C'est le type de redirection « standard ».|
|Visible temporaire|302|Ce type de redirection est à utiliser ponctuellement (dans le cadre d'évènements temporaires ou de saison par exemple). Le positionnement sur les moteurs de recherche est moins bon qu'avec une redirection de type 301.|

Une fois votre choix fait, vous devez renseigner la cible de la redirection (l'adresse web vers lequel la redirection devra rediriger).

![Choix entre redirection visible permanente ou temporaire](images/redirection_3xx_2.png){.thumbnail}

Une fois les informations complétées, cliquez sur `Suivant`{.action}, assurez-vous que les informations affichées soient bien correctes, puis cliquez sur `Confirmer`{.action}.

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

#### Pour une redirection invisible

Concernant la redirection invisible (code HTTP 200), complétez les informations qui s'affichent (adresse web et options) puis cliquez sur `Suivant`{.action}. Assurez-vous que les informations affichées soient correctes avant de cliquer sur `Confirmer`{.action}.

|Champs|Description|
|---|---|
|Titre|Il s'agit du titre de votre site internet. Ce dernier s'affichera en tant que titre de page dans l'onglet des navigateurs internet par exemple.|
|Mots clés|Ces mots clés peuvent être utilisés par les moteurs de recherche pour référencer la page.|
|Description|Il s'agit d'une description concernant votre site internet. Cette dernière pourra être utilisé par les moteurs de recherche dans leurs résultats.|

> [!primary]
>
> La modification nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

![Création d'une redirection invisible](images/invisible_redirection.png){.thumbnail}

### Rediriger un nom de domaine via un fichier .htaccess

Les fichiers .htaccess sont des fichiers de configuration dans lesquels des commandes peuvent être spécifiées. Lors de l’exécution du code de votre site internet par le serveur web (Apache), les commandes seront interprétées et ainsi exécutées. Parmi celles-ci, il est possible de créer des redirections.

Modifier un fichier .htaccess peut nécessiter des compétences techniques du fait qu'une manipulation incorrecte peut rendre inaccessible un ou plusieurs sites internet si vous utilisez des sous-répertoires sur votre hébergement. En cas de doute, et si vous désirez obtenir de l’aide concernant la modification d'un fichier .htaccess, nous vous recommandons de faire appel à un développeur web spécialisé sur la question.

Vous pouvez également vous reporter à notre documentation [Tout sur le fichier .htaccess](../../hosting/mutualise-tout-sur-le-fichier-htaccess/){.external} qui vous donnera quelques astuces concernant son utilisation.

> [!primary]
>
> Avant de poursuivre, nous vous conseillons de **réaliser une sauvegarde de votre fichier .htaccess** avant d'y effectuer des modifications pour rétablir la version antérieure si besoin.
>

- **Redirect permanent**

Le code envoyé sera un code HTTP 301. Il prévient les robots des moteurs de recherche qu'il faut mettre à jour leurs liens vers la nouvelle adresse.

Voici le code à ajouter pour rediriger le site entier :

```
Redirect permanent / http://nouveau-site.tld/
```

Pour changer un répertoire/fichier :

```
Redirect permanent /ancien_repertoire http://nouveau-site.tld/nouveau_repertoire
Redirect permanent /ancien_fichier.php http://site.tld/nouveau_fichier.php
```

- **Redirect gone**

Si un fichier n’existe plus, il est préférable de remplacer le message *404 document non trouvé* par un message plus explicite de type *410 le document n’existe plus* :

```
Redirect gone /supprime.html
```

- **Redirect seeother**

Si vous changez l’extension d’un fichier, *seeother* permet d'en modifier le type en envoyant un code HTTP 303 :

```
Redirect seeother /exemple.doc http://site.tld/exemple.pdf
```

- **Redirect Temp**

Une redirection temporaire de type HTTP 302 peut être utilisée lorsque vous déplacez temporairement des fichiers sur un autre site :

```
Redirect temp / http://autre_site_web.tld/site/
```

## Aller plus loin

[Tout sur le fichier .htaccess](../../hosting/mutualise-tout-sur-le-fichier-htaccess/){.external}.

[Comment éditer ma zone DNS ?](../domains/editer-ma-zone-dns/){.external}

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
