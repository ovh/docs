---
title: Mise en place d’une redirection e-mail depuis OWA avec Exchange 2016
slug: exchange-2016-mise-en-place-dune-redirection-e-mail-depuis-owa
legacy_guide_number: 1920
excerpt: Retrouvez ici la procedure de mise en place d’une redirection e-mail depuis OWA
section: Outlook Web Application (webmail Exchange)
---

Voici un guide pour vous aider à mettre en place une redirection e-mail depuis l'interface du Webmail Exchange.

Cliquez [ici](https://www.ovh.com/fr/emails/hosted-exchange/guides/){.external} pour retrouver nos différents guides.


## Redirection e-mail - OWA

### Mise en place Étape 1
Voici comment ajouter votre redirection e-mail depuis l'interface du [Webmail
Exchange](https://ex.mail.ovh.net/owa/){.external}.

Identifiez-vous avec votre adresse e-mail entière et le mot de passe de votre compte e-mail.

Une fois connecté sélectionnez l'icône en forme d'engrenage, puis sélectionnez "Options".


![emails](images/2936.png){.thumbnail}


### Mise en place Étape 2
Sélectionnez ensuite l'onglet "Règles de boîte de réception et de rangement" puis l'icône en forme de "+".


![emails](images/2939.png){.thumbnail}


### Mise en place Étape 3
Une nouvelle interface apparaît.

Renseignez les champs demandés :

**Nom** :  le nom d'affichage de votre règle.

**Lorsque le message arrive et remplit toutes ces conditions** :  filtre pour le message à rediriger.

**Effectuer toutes les opérations suivantes** :  choix de l'opération à réaliser (redirection, suppression, déplacement...).


![emails](images/2940.png){.thumbnail}

Une nouvelle fenêtre s'ouvre afin de sélectionner ou saisir l'adresse e-mail vers la-quelle les e-mails seront redirigés.

Vous avez alors 2 possibilités :

- Saisir une adresse e-mail manuellement
- Rechercher un contact dans votre liste

Cliquez sur "Ok" pour valider votre choix.


![emails](images/2942.png){.thumbnail}


### Mise en place Étape 4
Vous avez la possibilité d'ajouter des exceptions, par exemple ne pas rediriger l'e-mail s'il a été reçu d'une adresse e-mail en particulier.

Finalisez votre règle en cliquant sur "OK".


### Mise en place Étape 5
Votre règle apparaît maintenant correctement.

Un résumé des options choisies s'affiche à droite.

À ce stade, vous pouvez supprimer la règle si elle n'a plus lieu d'être.


![emails](images/2944.png){.thumbnail}


## Filtre SPAM/Virus

### Mise en place d'une regle contre les Spams/Virus
Voici un exemple de règle réalisable afin de filtrer les spams dans un dossier "Courrier indésirable".

La politique d'OVH fait en sorte de ne jamais supprimer vos spams, afin d'éviter les faux positifs.

Il sont cependant tagués comme tels si vous avez activer l'antispam lors de la configuration du service exchange depuis votre espace client.

Voici un exemple de règle qu'il est possible de mettre en place :

**Nom** :  le nom d'affichage de votre règle.

**Lorsque le message arrive et remplit toutes ces conditions** :  "Il inclut ces mots dans l'objet..." ajoutez ensuite le terme "[spam]" ou "[virus]"

**Effectuer toutes les opérations suivantes** :  "Déplacer le message vers le dossier..." sélectionnez le dossier "Courrier indésirable"


![emails](images/2945.png){.thumbnail}