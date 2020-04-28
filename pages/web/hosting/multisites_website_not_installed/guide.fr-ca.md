---
title: 'Résoudre le cas « Site non installé »'
slug: erreur-site-non-installe
excerpt: 'Découvrez comment résoudre le cas de la page « Site non installé »'
section: 'Configuration de l''hébergement'
order: 2
---

**Dernière mise à jour le 05/05/2020**

## Objectif

La page d'avertissement « Site non installé » vous signale que la configuration DNS de votre nom de domaine n'est pas correcte ou que le nom de domaine utilisé par votre site internet n'a pas été correctement configuré sur votre hébergement web OVHcloud.

**Découvrez comment résoudre le cas de la page d'avertissement « Site non installé ».**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Pouvoir gérer votre [hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external} (celui sur lequel est hébergé le site internet concerné).
- Pouvoir gérer la configuration du nom de domaine concerné (c'est-à-dire sa zone DNS).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

La page d'avertissement « Site non installé » s'affiche uniquement dans de deux cas précis :

- le nom de domaine utilisé par votre site internet n'est pas correctement ajouté en tant que **Multisite** à la configuration de votre hébergement web OVHcloud ;
- le nom de domaine utilisé par votre site internet n'est pas relié correctement à votre hébergement web OVHcloud car il n'utilise pas la bonne adresse IP dans sa configuration DNS.

Les deux étapes ci-dessous vous permettent de vérifier les deux configurations afin de résoudre l'affichage de la page « Site non installé ».

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### Étape 1 : vérifier la configuration de l'hébergement web (Multisite)

Pour vérifier que le nom de domaine est correctement ajouté en tant que Multisite à votre hébergement web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, puis cliquez sur `Hébergements`{.action} dans la barre de services à gauche. Dans la liste de vos hébergements, cliquez sur celui qui héberge le site internet pour lequel la page « Site non installé » s'affiche. Positionnez-vous enfin sur l'onglet `Multisite`{.action}.

Le tableau qui s'affiche alors contient tous les noms de domaine qui ont été ajoutés à votre hébergement en tant que Multisite. La barre de recherche peut vous aider à retrouver le nom de domaine concerné.

Dès lors, recherchez le domaine concerné dans le tableau. Plusieurs scénarios sont possibles :

|Scénarios possibles|Action à entreprendre|
|---|---|
|Le nom de domaine apparaît dans le tableau|Ceci indique que ce dernier a bien été ajouté en tant que Multisite à votre hébergement web. Si vous l'avez ajouté il y a moins de 15 minutes, patientez quelques instants pour que la page « Site non installé » disparaisse. Si l'affichage de la page persiste, poursuivez vers l'[étape 2 : « vérifier la configuration DNS du nom de domaine »](../erreur-site-non-installe/#etape-2-verifier-la-configuration-dns-du-nom-de-domaine){.external}.|
|Le domaine n'apparaît plus dans le tableau|Si vous aviez ajouté le nom de domaine et qu'il n'apparaît plus dans le tableau, il se peut que n'ayez pas effectué toutes les étapes pour ajouter celui-ci à votre hébergement web ou que vous l'ayez supprimé par inadvertance. Nous vous invitons donc à suivre les étapes décrites dans notre documentation [« Partager son hébergement entre plusieurs sites »](../multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external} afin d'ajouter de nouveau le nom de domaine.|
|Le nom de domaine ne figure pas dans le tableau|Vous n'avez pas encore ajouté ce nom de domaine en tant que Multisite à votre hébergement web OVHcloud. Pour effectuer cette manipulation, nous vous invitons à suivre les étapes décrites dans notre documentation [« Partager son hébergement entre plusieurs sites »](../multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external}.|

Si la page « Site non installé » apparaît toujours à la place de votre site internet malgré les actions entreprises, poursuivez vers l'étape « vérifier la configuration DNS du nom de domaine » ci-dessous.

### Étape 2 : vérifier la configuration DNS du nom de domaine

Vous devez d'abord récupérer la configuration OVHcloud à utiliser. Pour cela, toujours sur l'hébergement web concerné, positionnez-vous dans l'onglet `Informations générales`{.action}, puis récupérez les adresses qui apparaissent à côté de **IPv4** et **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Vous pouvez à présent vérifier la configuration DNS de votre nom de domaine. Cette vérification doit être réalisée depuis l'interface du prestataire gérant cette configuration.

> [!primary]
>
> Si votre nom de domaine est enregistré chez OVHcloud, vous pouvez vérifier si ce dernier utilise notre configuration. Pour cela, toujours dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur `Domaines`{.action} dans la barre de services à gauche, puis sur le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Serveurs DNS`{.action}.
>

La vérification peut s'effectuer à deux endroits différents selon la configuration utilisée par votre nom de domaine :

- **votre nom de domaine n'utilise pas la configuration d'OVHcloud** : vous devez réaliser la vérification (décrite ci-dessous) depuis l'interface du prestataire gérant la configuration de votre nom de domaine ;

- **votre nom de domaine utilise la configuration d'OVHcloud** : la vérification s'effectue depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Rendez-vous sur l'onglet `Zone DNS`{.action} une fois positionné sur le nom de domaine concerné. La configuration DNS s'affiche dans un tableau, chaque ligne représentant un enregistrement DNS particulier. Vous avez la possibilité de filtrer le contenu par type d’enregistrement ou par nom de domaine.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Depuis l'interface gérant la configuration de votre nom de domaine pour lequel la page « Site non installé » apparaît, assurez-vous que les enregistrements DNS ci-dessous soient correctement configurés.

|Enregistrement|Cible|
|---|---|
|A|La cible doit correspondre à l'adresse **IPv4** récupérée précédemment.|
|AAAA|La cible doit correspondre à l'adresse **IPv6** récupérée précédemment.|

Dès lors, deux scénarios sont possibles :

|Scénarios possibles|Action à entreprendre|
|---|---|
|Les cibles sont correctes|Ceci indique que la configuration de votre nom de domaine est correcte. Si vous avez modifié sa configuration DNS il y a moins de 24 heures, laissez passer ce délai afin que le changement soit pleinement effectif.|
|Les cibles sont incorrectes|La configuration de votre nom de domaine doit être modifiée. S'il utilise la configuration OVHcloud, nous vous invitons à suivre les étapes décrites dans notre documentation [« Éditer une zone DNS OVHcloud »](../../domains/editer-ma-zone-dns/){.external}. Dans le cas contraire, suivez les indications décrites dans l'interface de votre prestataire. Une fois la modification effectuée, un temps de propagation de 24 heures maximum est nécessaire afin que le changement soit effectif.|

Selon les actions réalisées lors de l'étape 1 et 2, et tenant compte des délais indiqués, la page d'avertissement « Site non installé » ne doit plus apparaître.

## Aller plus loin 

[Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/){.external}.

[Éditer une zone DNS OVHcloud](../../domains/editer-ma-zone-dns/){.external}.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
