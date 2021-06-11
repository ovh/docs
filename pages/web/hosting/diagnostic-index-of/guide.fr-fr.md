---
title: Résoudre l’erreur « Site non installé »
excerpt: Découvrez comment identifier et résoudre la page d’erreur « Site non installé »
slug: diagnostic-index-of
section: Diagnostic
order: 5
---

**Dernière mise à jour le 04/06/2021**
 
## Objectif

Suite à un mauvaise manipulation ou une configuration erronée du `Multisite` de votre hébergement OVHcloud, votre site peut afficher une page « **Index of** ».

![index_of](images/index_of.png){.thumbnail}

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](https://www.ovh.com/fr/hebergement-web/)
- Etre connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique
 
Votre nom de domaine est relié par le multisite de votre hébergement à un répertoire (`Dossier racine`) dans votre serveur [FTP](../connexion-espace-stockage-ftp-hebergement-web/).

L'anomalie « **Index of** » indique que le répertoire concerné ne contient pas de fichier **index.php** ou **index.html**. En terme de programmation, ce type de fichier constitue le « point d'entrée » de votre site.

Pour résoudre cette anomalie, vous devez donc relier votre domaine au `Dossier racine` qui contient ce fichier **index.php** ou **index.html**.

D'autres configurations erronées peuvent être à l'origine des pages « **Index of** », mais l'une des plus courantes est la suivante : vous avez importé les fichiers de votre site **mydomain.ovh** dans le dossier `www` de votre hébergement par [FTP](../connexion-espace-stockage-ftp-hebergement-web/). 
<br>Or votre nom de domaine n'est pas relié à ce dossier dans la colonne `Dossier racine` de votre `Multisite`.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifiez le `Dossier racine` en cliquant sur le bouton `...`{.action} à droite du tableau, puis sur `Modifier le domaine`{.action} :

![modify_domain](images/modify_domain.png){.thumbnail}

Cochez la case `Modifier également le sous domaine www.mydomain.ovh`{.action} et indiquez le répertoire contenant le fichier **index.php** ou **index.html** de votre site comme `Dossier racine`. Cliquez sur `Suivant`{.action} :

![change_root_folder](images/change_root_folder.png){.thumbnail}

Puis cliquez sur `Valider`{.action} :

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Vous obtiendrez, sous quelques minutes, le résultat suivant : 

![multisite_modified](images/multisite_modified.png){.thumbnail}

> [!primary]
>
> Utiliser le répertoire `www` comme `Dossier racine` n'est en aucun cas obligatoire. Vous pouvez installer votre site dans un autre dossier de votre serveur FTP.
>
 
## Aller plus loin

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](../erreurs-frequentes-modules-en-1-clic/)

[Résoudre l’erreur « Site non installé »](../erreur-site-non-installe/)

[Partager son hébergement entre plusieurs sites](../multisites-configurer-un-multisite-sur-mon-hebergement-web/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
