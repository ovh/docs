---
title: "Guide - Prestashop, premiers pas"
slug: prestashop-first-steps
excerpt: "Prestashop, first steps"
section: Tutoriel
order: 
---

**Dernière mise à jour le 12/01/2023**

## Objectif

Ce tutoriel a pour objectif de vous permettre de créer votre propre site de vente en ligne avec le Prestashop. Sans connaissances particulières en programmation, vous serez en mesure d'installer votre soulution e-commerce et de la configurer pour commencer à vendre vos produits sur le web.

## Prérequis

Vous venez de souscrire à une offre «&nbsp;Hébergement Web&nbsp;» comprenant un nom de domaine et vous permettant d'installer un CMS en un clic, vous pouvez alors suivre ce tutoriel pour mettre en ligne rapidement vos premiers contenus et exploiter votre site.

Si vous ne disposez pas encore d'un hébergement, vous pouvez choisir une de notre offres Hébergement web parmi celles incluant la fonctionnalité «&nbsp;CMS en 1-clic&nbsp;». Au moment de l'installation, choisissez «&nbsp;Prestashop&nbsp;» parmi les solutions proposées.

Enfin, dans le cas où vous auriez déjà souscrit à une offre mais pas installé WordPress, reportez-vous au guide [Installer son site avec les modules en 1 clic](https://docs.ovh.com/fr/hosting/modules-en-1-clic/).

## En pratique

### Prérequis et configurations

Le présent document fait référence à la version 1.7 de Prestashop. Le CMS fonctionne sur les versions de PHP allant de la 7.1 à la 7.4. Il est recommandé d'utiliser cette dernière version pour un fonctionnement optimal. Vous trouverez plus de détails sur la page des [prérequis techniques](https://devdocs.prestashop-project.org/1.7/basics/installation/system-requirements/).

Sur votre Manager OVH, rendez-vous sur sur l'inglet «&nbsp;Web Cloud&nbsp;», puis sélectionnez le nom de domaine sur lequel vous souhaitez installer votre solution Prestashop&nbsp;:

![Sélectionner son nom de domaine](images/prestashop_first_steps%5B1%5D.png){.thumbnail}

Dans «&nbsp;Configuration&nbsp;», changez la version de PHP pour la passer en 7.4&nbsp;:

![Changer la version de PHP](images/prestashop_first_steps%5B2%5D.png){.thumbnail}

Installez également un certificat SSL. Vous pouvez vous reporter à notre guide [Gérer un certificat SSL sur son hébergement web](https://docs.ovh.com/fr/hosting/les-certificats-ssl-sur-les-hebergements-web/).

Pensez à mettre en place la redirection de votre nom de domaine en HTTP vers HTTPS. Vous trouverez les différentes méthodes sur ce guide [Comprendre la redirection d'un nom de domaine](https://docs.ovh.com/fr/domains/redirection-nom-de-domaine/#comprendre-la-redirection-dun-nom-de-domaine).

### Installation en 1-click

> [!warning]
>
> Lors de l'installation, par défaut ou en mode avancé, il est possible qu'une erreur se produise au cas où le répertoire de destination de vos fichier (`./www/` par défaut) ne serait pas vide.
> Vous serez notifié du problème par mail. Le module est automatiquement désinstallé.
>
> Pour corriger le problème, connectez-vous à votre serveur en SSH et videz ou effacez le répertoire dans lequel s'est faire l'installation.
>

Cliquez sur l'onglet «&nbsp;Modules en 1 clic&nbsp;»&nbsp;:

![Modules en 1 clic](images/prestashop_first_steps%5B3%5D.png){.thumbnail}

Sélectionnez «&nbsp;Ajouter un module&nbsp;» et choisissez **Prestashop**&nbsp;:

![Choisir Prestashop](images/prestashop_first_steps%5B4%5D.png){.thumbnail}

Vous aurez alors le choix entre l'installation normale (par défaut) et l'installation en mode avancé.

#### Installation par défaut

Dans ce mode, vous n'avez qu'à choisir quel nom de domaine pointera sur votre installation. Par défaut, les fichiers de Prestashop seront disponibles dans le répertoire `./www/` de votre serveur.

![Installation par défaut](images/prestashop_first_steps%5B5%5D.png){.thumbnail}

Validez en cliquant sur «&nbsp;Installer&nbsp;». Votre module s'installe, vous serez notifié par mail à l'issue du processus.

Une fois déployé, le module figurera dans la liste des modules installés sur votre serveur&nbsp;:

![Liste des modules installés](images/prestashop_first_steps%5B6%5D.png){.thumbnail}

#### Installation en mode avancé

L'installation avancée vous permet de choisir la base de données qui sera utilisée avec Prestashop. Lors de l'ajour du module Prestashop, cochez l'option «&nbsp;Installation en mode avancé&nbsp;»&nbsp;:

![Installation en mode avancé](images/prestashop_first_steps%5B7%5D.png){.thumbnail}

Vous serez invité à sélectionner une base de données parmi celles que vous avez déjà configurées, ou bien à vous connecter à une base de données distante en renseignant le formulaire avec les informations suivantes&nbsp;:

- l'adresse du serveur (nom de domaine ou adresse IP)
- le nom de la base de données
- le port utilisé (par défaut, MySQL utilise le port 3306)
- le nom de l'utilisateur (login)
- le mot de passe lié au compte.

![Installation en mode avancé - Choix de la base de données](images/prestashop_first_steps%5B8%5D.png){.thumbnail}

**Éléments à vérifier - Les données saisies dans le formulaire n'apparaissent pas dans la base de données**<br />
Dans le formulaire suivant, vous serez invité à renseigner l'adresse mail et le mot de passe de connexion

![Installation en mode avancé - Informations additionnelles](images/prestashop_first_steps%5B9%5D.png){.thumbnail}

Enfin, vérifiez et confirmez les informations relatives à votre installation&nbsp;:

![Installation en mode avancé - Page récapitulative](images/prestashop_first_steps%5B10%5D.png){.thumbnail}

### Fin de l'installation

À la fin de l'installation, vous recevrez un mail comportant différentes informations&nbsp;:

- l'URL pour accéder à l'interface publique de votre site e-commerce
- le lien pour accéder à l'interface d'administration
- le `login` administrateur
- un lien pour récupérer votre mot de passe administrateur.

Votre site e-commerce est en ligne avec des données par défaut&nbsp;:

![Page d'accueil Prestashop](images/prestashop_first_steps%5B11%5D.png){.thumbnail}

## Aller plus loin

- le site officiel de [Prestashop](https://www.prestashop.com/)