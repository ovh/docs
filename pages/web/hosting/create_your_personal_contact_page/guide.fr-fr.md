---
title: "Tutoriel - Créez votre page personnelle avec formulaire de contact"
slug: create_your_personal_contact_page
excerpt: "Découvrez comment déployer votre page web avec un formulaire de contact qui enverra les demandes de vos visiteurs sur votre adresse mail"
section: 'Tutoriels'
order: 05
---

**Dernière mise à jour le 18/01/2023**

## Objectif

Ce tutoriel va vous permettre de créer une page web professionnelle comprenant un formulaire utilisable par les utilisateurs qui se rendront sur votre site. Les données récupérées vous seront envoyées directement sur l'adresse mail de votre choix, vous permettant de répondre par retour à vos interlocuteurs.

## Prérequis

Vous devez&nbsp;:

- disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- avoir souscrit à une offre d'[hébergement web OVHcloud](https://www.ovh.com/fr/hebergement-web/)
- savoir utiliser un éditeur de texte sur votre ordinateur ou un IDE
- avoir installé un client FTP comme [FileZilla](https://filezilla-project.org/download.php).

Quelques notions de programmation web (HTML, CSS et PHP) sont nécessaires.

Vous pouvez consulter le tutoriel [«&nbsp;Créer sa page web personnelle chez OVHcloud&nbsp;»](https://docs.ovh.com/fr/hosting/create-your-own-web-page/) pour vous familiariser avec les concepts de programmation utilisés.

## En pratique

Pour simplifier l'élaboration de la page et lui assurer un rendu professionnel, nous allons utiliser un template disponible sur le site [W3Schools](https://www.w3schools.com/w3css/w3css_templates.asp), [«&nbsp;Coming Soon Template&nbsp;»](https://www.w3schools.com/w3css/tryw3css_templates_coming_soon.htm).

Nous ajouterons une formulaire qui permettra le récupération des données saisies et l'envoi vers une adresse mail de votre choix via un script en PHP.

### Mise en place des fichiers

Sur votre ordinateurs, créez un dossier `Leadpage` dans lequel se trouveront l'ensemble des fichiers. Dans ce répertoire, placez les éléments suivants&nbsp;:

- un répertoire `scripts` qui contiendra le fichier contenant le script PHP nous permettant d'envoyer le contenu du formulaire
- un répertoire `images` dans lequel seront les fichiers d'illustration pour personnaliser le site
- un fichier `index.html` qui contiendra les éléments de la page.

![Files organization](images/create_your_personal_contact_page_1.png){.thumbnail}

### Récupération du template

Pour chaque template proposé figure un lien de démonstration et un accès au code source de la page offrant la possibilité de le modifier et de visualiser le résultat en temps réel. Cliquez sur le bouton [«&nbsp;Try it Yourself&nbsp;»](https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_coming_soon&stacked=h).

Copier et coller le code dans votre fichier `index.html`&nbsp;:

![index.html file](images/create_your_personal_contact_page_2.png){.thumbnail}

## Aller plus loin
