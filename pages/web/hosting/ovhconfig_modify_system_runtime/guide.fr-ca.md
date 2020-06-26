---
title: 'Modifier la configuration de son hébergement web'
slug: modifier-lenvironnement-dexecution-de-mon-hebergement-web
excerpt: 'Apprenez à modifier la configuration de votre hébergement web OVHcloud'
section: 'Configuration de l''hébergement'
order: 3
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Sur le web, il existe une multitude de sites internet. Qu’il s’agisse de créer un blog ou une boutique en ligne, de partager une passion ou de promouvoir une activité professionnelle, votre [hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external} vous permet d’héberger le site internet que vous souhaitez, dans la mesure où celui-ci est compatible avec la [configuration de nos infrastructures](https://cluster015.hosting.ovh.net/infos/){.external}.

**Apprenez à modifier la configuration de votre hébergement web OVHcloud depuis votre espace client.**

## Prérequis

- Disposer d’une offre d’[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external} (sauf Cloud Web).
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager).

## En pratique

**Changer la configuration de votre hébergement web est une manipulation sensible** : effectuer un changement inopportun pourrait rendre l'accès à votre site internet impossible. Comprendre les impacts d’une telle modification vous permettra de mieux appréhender le changement que vous allez opérer.

Lorsque vous changez la configuration de votre hébergement, vous modifiez celle utilisée par votre site internet. Même si nos infrastructures en mettent plusieurs à disposition, vous devez veiller à ce que la configuration sélectionnée soit techniquement compatible avec votre site internet.

> [!warning]
>
> Avant d’initier tout changement, assurez-vous que la manipulation ne rendra pas inaccessible votre site internet. Si vous n’en êtes pas sûr ou si vous éprouvez des difficultés, nous vous recommandons de faire appel à un prestataire spécialisé. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section « Aller plus loin » de ce guide. 
> 

### Modifier la configuration de l'hébergement web depuis l'espace client

#### Étape 1 : accéder à la gestion de la configuration de l'hébergement

Pour démarrer cette manipulation, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. Cliquez ensuite sur le bouton représentant trois points, puis sur `Modifier la configuration`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

Si le bouton `Modifier la configuration`{.action} est grisé, il se peut qu'une vérification de la **version PHP globale** soit en cours. Si tel est le cas, un symbole rond de couleur bleue s'affichera à côté de la version, indiquant qu'une vérification est cours. Patientez alors quelques minutes pour que le bouton `Modifier la configuration`{.action} redevienne accessible.

![hostingconfiguration](images/change-hosting-configuration-step2.png){.thumbnail}

#### Étape 2 : modifier la configuration de l'hébergement web

Sur la fenêtre qui apparaît, deux choix sont possibles. Sélectionnez celui qui correspond à l'action que vous souhaitez réaliser, puis cliquez sur `Suivant`{.action}.

|Choix|Détail|
|---|---|
|« Revenir à une configuration précédente »|Après avoir sélectionné cette option, choisissez la configuration à restaurer à côté de `Choix historique`. Cette possibilité peut ne pas être disponible si vous n'avez pas effectué de changement dans le passé.|
|« Modifier la configuration courante »|Après avoir sélectionné cette option, choisissez les modifications à apporter à la configuration parmi les champs proposés. Si nécessaire, découvrez-les en vous rendant à la section [« Découvrir les configurations disponibles »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#decouvrir-les-configurations-disponibles){.external} de cette documentation.|

> [!primary]
>
> Changer l'environnement d'exécution de votre hébergement web réinitialise automatiquement les sessions PHP.
> 

Dès que vous êtes prêt, cliquez sur `Valider`{.action} pour appliquer la modification. Patientez quelques instants le temps qu'elle se réalise.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Découvrir les configurations disponibles

Lorsque vous modifiez la configuration d'un hébergement web, plusieurs choix de configuration sont possibles. Poursuivez la lecture de cette documentation en fonction du choix pour lequel vous souhaitez obtenir plus d'informations.

- [Environnement d'exécution](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#environnement-dexecution){.external}.
- [Version de PHP](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#version-de-php){.external}.
- [Moteur PHP](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#moteur-php){.external}.
- [Mode](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#mode){.external}.

#### Environnement d'exécution

Changer l'environnement d'exécution permet de modifier certaines valeurs techniques de votre hébergement web. **Avant d'entamer tout changement, assurez-vous que l'environnement que vous allez appliquer est compatible avec votre site internet.** 

|Environnements|Legacy|stable|testing|jessie.i386|
|---|---|---|---|---|
|Image liée|Legacy|jessie.i386|jessie.i386|jessie.i386|
|Version PHP minimum|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Extension php imagick| - | Oui | Oui | Oui |
|Extension php memcache (PHP 5.6)| Oui | Oui | Oui | Oui |
|Extension php memcached (PHP 5.6)| - | Oui | Oui | Oui |
|Extension php mongo (PHP 5.4, 5.5, 5.6)| - | Oui | Oui | Oui |
|Extension mysqlnd (en utf-8 uniquement)| - | Oui | Oui | Oui |
|Extension redis| - | Oui | Oui | Oui |
|Opcache| Oui | Oui | Oui | Oui |
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

> [!primary]
>
> L'environnement « legacy » peut être utile pour d'anciens sites utilisant encore de vieilles versions de PHP. Cependant, nous vous recommandons vivement d'utiliser un environnement « stable » bénéficiant des dernières mises à jour. **Assurez-vous que votre site est bien compatible avant d'entamer tout changement.**
> 

Une fois votre choix effectué, il existe deux possibilités pour réaliser ce changement :

- **depuis votre espace client** : utilisez les intructions décrites dans la section [« Modifier la configuration de l'hébergement web depuis l'espace client »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#modifier-la-configuration-de-lhebergement-web-depuis-lespace-client){.external} de cette documentation ;
- **en modifiant manuellement le fichier « .ovhconfig** » : cette solution est plus technique et nécessite d'être connecté à votre espace de stockage. Si vous souhaitez modifier le fichier « **.ovhconfig** », reportez-vous aux instructions décrites dans notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](../configurer-fichier-ovhconfig/){.external}.

#### Version de PHP

Il existe aujourd'hui plusieurs versions du langage de programmation PHP. Comme à l'accoutumée, les évolutions de versions apportent des correctifs divers ainsi que l'ajout ou l'arrêt de fonctionnalités. OVHcloud propose les dernières versions majeures de PHP dont vous pouvez retrouver la liste en cliquant sur ce lien : <https://www.ovh.com/ca/fr/hebergement-web/php.xml>. 

Du fait que certaines fonctionnalités peuvent ne pas être maintenues au fil des nouvelles versions, **assurez-vous avant d'entamer tout changement que la nouvelle version de PHP souhaitée est compatible avec votre site internet.**

Il existe plusieurs manières de modifier la version de PHP de votre hébergement web :

- **depuis votre espace client** : utilisez les intructions décrites dans la section [« Modifier la configuration de l'hébergement web depuis l'espace client »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#modifier-la-configuration-de-lhebergement-web-depuis-lespace-client){.external} de cette documentation ;
- **en modifiant manuellement un fichier sur votre espace de stockage** : cette solution est plus technique et nécessite d'être connecté à votre espace de stockage. 

De manière générale, si vous souhaitez obtenir plus d'informations sur le changement d'une version de PHP, reportez-vous aux instructions décrites dans notre documentation [« Changer la version de PHP d’un hébergement web OVHcloud »](../configurer-le-php-sur-son-hebergement-web-mutu-2014/){.external}.

#### Moteur PHP

Le choix du moteur PHP permet d'activer ou de désactiver l'accélérateur PHP (« PHP-FPM »). Ce dernier a été adapté à notre infrastructure dans le but d'accélérer la vitesse d'exécution des scripts PHP. En comparaison, l'accélérateur PHP (« PHP-FPM ») offre un gain de performance jusqu'à sept fois plus rapide par rapport à l'utilisation du moteur « phpcgi ». 

Il existe deux possibilités pour modifier le moteur PHP utilisé par votre hébergement web :

- **depuis votre espace client** : utilisez les intructions décrites dans la section [« Modifier la configuration de l'hébergement web depuis l'espace client »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#modifier-la-configuration-de-lhebergement-web-depuis-lespace-client){.external} de cette documentation. Pour activer l'accélérateur PHP (« PHP-FPM »), choisissez « php » en tant que moteur. Pour le désactiver, choisissez « phpcgi » ;
- **en modifiant manuellement le fichier « .ovhconfig** » : cette solution est plus technique et nécessite d'être connecté à votre espace de stockage. Si vous souhaitez modifier le fichier « **.ovhconfig** », reportez-vous aux instructions décrites dans notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](../configurer-fichier-ovhconfig/){.external}.

#### Mode

Le choix du mode permet de gérer le comportement du cache des fichiers statiques de votre site internet (des images par exemple) ainsi que le traitement des erreurs PHP (généralement utiles quand votre site affiche une page blanche par exemple). Il existe deux modes que vous pouvez activer :

|Mode|Cache des fichiers statiques|Traitement des erreurs PHP|
|---|---|---|
|*Production*|Maximise la mise en cache des fichiers statiques sur les navigateurs internet.|Les erreurs PHP n'apparaissent pas sur votre site.|
|*Development*|Aucun cache n'est appliqué.|Les erreurs PHP apparaissent sur votre site.|

> [!primary]
>
> Pour les versions 7.1 et supérieures de PHP, les erreurs apparaitront sur le site, quel que soit le mode utilisé. 
> 

Pour modifier le mode utilisé par votre hébergement web, il existe deux possibilités :

- **depuis votre espace client** : utilisez les intructions décrites dans la section [« Modifier la configuration de l'hébergement web depuis l'espace client »](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#modifier-la-configuration-de-lhebergement-web-depuis-lespace-client){.external} de cette documentation ;
- **en modifiant manuellement le fichier « .ovhconfig** » : cette solution est plus technique et nécessite d'être connecté à votre espace de stockage. Si vous souhaitez modifier le fichier « **.ovhconfig** », reportez-vous aux instructions décrites dans notre documentation [« Configurer le fichier .ovhconfig de mon hébergement web »](../configurer-fichier-ovhconfig/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
