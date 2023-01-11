---
title: "Tutoriel - Premiers pas sur l'installation et la configuration de Cecil"
slug: install-configure-cecil
excerpt: "Découvrez comment installer et configurer Cecil pour administrer vos pages web statiques"
section: 'Tutoriels'
order: 04
---

**Dernière mise à jour le 11/01/2023**

## Objectif

Ce tutoriel vous explique comment installer et configurer [Cecil](https://cecil.app/){.external}. Il s'agit d'une application écrite en PHP permettant de générer et d'administrer des pages web statiques.

Un site web composé essentiellement de pages web statiques garanti un meilleur temps de chargement pour vos visiteurs et une plus grande sécurité. Sans contenu dynamique, vos pages sont plus robustes face aux attaques informatiques. La génération d’un site statique permet de disposer d’une liberté plus grande pour créer le site web de votre choix. Vous gagnerez également du temps puisque vous n’aurez pas à partir de zéro.

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) incluant un accès SSH. Cet accès permet d'installer en ligne de commande une ou plusieurs solutions alternatives à celles proposées par défaut dans nos offres d'hébergements web.
- Être familiarisé à la saisie en ligne de commande
- Être en capacité de transférer des fichiers en FTP avec un client comme [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)
- Paramétrer votre zone DNS pour faire pointer votre nom de domaine (ou sous-domaine) vers votre hébergement web mutualisé. Utile notamment si vous souhaitez héberger plusieurs site en [Multisites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/) sur votre hébergement web mutualisé.
- Installer préalablement [Composer](https://getcomposer.org/){.external} avec le fichier `composer.phar` à la racine de votre hébergement web mutualisé ou dans le dossier cible de votre nom de domaine.

## En pratique

Les [hébergements web mutualisés](https://www.ovhcloud.com/fr/web-hosting/) permettent de définir des domaines ou sous-domaines en [multisites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/). Un domaine ou un sous-domaine est nécessaire pour déployer votre site web réalisé avec **Cecil**.

### Créer le répertoire dans lequel seront vos fichiers

Une fois connecté en SSH à votre hébergement web, créez un répertoire à la racine avec la commande&nbsp;:
```sh
mkdir mystaticwebsite
```

Remplacez `mystaticwebsite` par le nom de dossier de votre choix (sans accents et sans espaces).

Puis allez dans votre ce répertoire&nbsp;:
```sh
cd mystaticwebsite
```

Remplacez `mystaticwebsite` par votre nom de dossier.

### Téléchargement

Dans le répertoire que vous venez de créer, téléchargez Cecil&nbsp;:

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

### Installation

Lancez l'installation avec la commande&nbsp;:

```sh
php cecil.phar new:site
```

Renseignez les éléments demandés&nbsp;:

- le titre de votre site _(title)_
- la _baseline_
- l'URL de votre site web (par exemple, `https://mywebsite.ovh`)
- une description de votre site web

![Installation Cecil](images/static_website_installation_cecil%5B1%5D.png){.thumbnail}

Une fois ces éléments renseignés, vous devez maintenant déployer le site en tapant la commande&nbsp;:

```sh
php cecil.phar build
```

En affichant le contenu du répertoire, vous constaterez la création d'un répertoire `_site`. C'est ce répertoire qui contiendra l'ensemble des fichiers HTML et des assets&nbsp;:

![Installation Cecil](images/static_website_installation_cecil%5B2%5D.png){.thumbnail}

Vous pouvez maintenant voir le résultat en allant sur votre nom de domaine&nbsp;:

![Installation Cecil](images/static_website_installation_cecil%5B3%5D.png){.thumbnail}

### Domaine ou sous-domaine

Pour visualiser le résultat de votre site sur votre navigateur, modifiez le pointage de votre nom de domaine ou de sous-domaine dans le répertoire `_site` créé précédemment lors de l'installation de **Cecil**.

Si votre nom de domaine ou sous-domaine est hébergé chez OVHcloud, consultez nos guides relatifs à la [configuration DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/) et à la mise en place d'un [multisites sur votre hébergement web](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/)

### Configurer son site

Les informations générales de votre site peuvent être configurées dans le fichier `config.yml`&nbsp;:

```sh
nano config.yml
```

Remplacez les informations par défaut par les votres et sauvegardez le fichier.

![Fichier de configuration YAML](images/static_website_installation_cecil%5B4%5D.png){.thumbnail}

### Créer une nouvelle page

La création des pages qui contiendront les données de votre site se font via des fichiers au format _Markdown_. Ces pages sont personnalisables : **Cecil**  intègre le moteur de _template_ [Twig](https://twig.symfony.com/){.external} qui est utilisé par défaut avec le _framework_ [Symfony](https://symfony.com/){.external}.

Les dossiers et fichiers sont organisés comme suit&nbsp;:

- `assets` contiendra les éléments graphiques, audio et vidéo, les scripts JavaScript et les styles (CSS, Sass) 
- `layouts` est le répertoire dans lequel seront le ou les _templates_
- `pages` sera l'endroit où seront vos fichiers _Markdown_
- `_site` est le répertoire qui contiendra les fichiers générés et qui sera pointé par votre nom de domaine
- `static` pour tous les fichiers statiques type PDF.

#### Créer un fichier _Markdown_ en ligne de commande

À la racine du site, tapez la commande&nbsp;:

```sh
php cecil.phar new:page mapage.md
```

Un fichier `mapage.md` est alors créé à la racine du répertoire `/pages`&nbsp;

![Installation Cecil](images/static_website_installation_cecil%5B5%5D.png){.thumbnail}

#### Générer les fichiers statiques

Toujours à la racine, tapez la commande&nbsp;:

```sh
php cecil.phar build
```

Votre fichier se trouve dans le répertoire `_site/mapage/`&nbsp;:

![Installation Cecil](images/static_website_installation_cecil%5B6%5D.png){.thumbnail}

Et vous pouvez la visualiser sur votre serveur en tapant l'URL de votre site, suivi de `/mapage/`&nbsp;:

![Résultat navigateur](images/static_website_installation_cecil%5B7%5D.png){.thumbnail}

### Personnaliser les fichiers de votre site

#### **Modification sur le serveur**

L'édition des fichiers _Markdown_ peut se faire directement sur le serveur. Sur votre offre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/), votre accès SSH pour permet d'utiliser indifféremment [GNU nano](https://nano-editor.org/), [vi](https://ex-vi.sourceforge.net/l) ou [vim](https://www.vim.org/).
Les captures d'écran du présent guide ont été réalisées sous GNU nano.

Éditez le fichier `mapage.md` situé dans le répertoire `pages` en tapant la commande suivante si vous êtes à la racine de votre site&nbsp;:

```sh
 nano pages/mapage.md
```

![Édition du fichier dans GNU nano](images/static_website_installation_cecil%5B8%5D.png){.thumbnail}

Ajoutez quelques lignes en respectant la syntaxe _Markdown_&nbsp;:

![Ajout de contenu dans le fichier](images/static_website_installation_cecil%5B9%5D.png){.thumbnail}

Supprimez les fichiers dans le cache à l'aide de la commande suivante&nbsp;:

```sh
php cecil.phar clear
```

Rebuildez vos pages après avoir sauvegardé votre fichier&nbsp;:

```sh
php cecil.phar build
```

Puis retournez sur votre page pour voir le résultat&nbsp;:

![Page mise à jour](images/static_website_installation_cecil%5B10%5D.png){.thumbnail}

#### **Modification sur votre poste de travail**

Si vous préférez utiliser votre éditeur de code habituel, connectez-vous avec un client FTP sur votre serveur pour récupérer les fichiers sur votre ordinateur&nbsp;:

![Téléchargement avec FileZilla](images/static_website_installation_cecil%5B11%5D.png){.thumbnail}

Vous pouvez maintenant éditer les fichiers dans votre I.D.E.&nbsp;:

![Affichage dans Visual Studio Code](images/static_website_installation_cecil%5B12%5D.png){.thumbnail}

Il vous suffit de renvoyer vos fichiers modifiés ou vos nouveaux fichiers sur votre serveur et de rebuilder pour avoir vos pages en ligne.

### Ajout la page générée au menu de votre site

Pour ajouter cette nouvelle page dans le menu du site, vous devez modifier manuellement l'en-tête du fichier `.md` en rajoutant la ligne&nbsp;:

```sh
menu: main
```

### Conclusion

Cecil est un outil permettant de construire efficacement un site statique à partir de fichier Markdown, langage de balisage plus simple à mettre en œuvre que le HTML L'organisation des fichiers Markdown conditionne la hiérarchie de vos pages web.<br/>
L'utilisation d'un moteur de template très utilisé dans la communauté développeurs web vous permettra de trouver facilement de nombreuses sources sur internet pour concevoir une interface d'apparence professionnelle.

## Aller plus loin

- le site de l'application [Cecil](https://cecil.app/)
- la [page](https://daringfireball.net/projects/markdown/) du créateur du format Markdown
- un [guide](https://www.markdownguide.org/) sur ce format
- notre guide sur l'[utilisation de FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)
- le site officiel de [Twig](https://twig.symfony.com/), le moteur de templates utilisé par Cecil.
