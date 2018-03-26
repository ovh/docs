---
title: Utilisation de IMAPCopy
slug: imapcopy-utilisation
legacy_guide_number: 1310
excerpt: Ce guide va vous permettre de vous familiariser avec l’outil IMAPCopy. Selectionnez votre besoin sur le menu de gauche si necessaire.
section: Outils
---


## IMAPCopy

### A quoi sert-il ?
IMAPCopy vous sera très utile si vous souhaitez copier les e-mails d'un compte A **(source)** vers un compte B **(destination)**.


> [!faq]
>
> En effet, vous allez pouvoir :
>> 
>> 1. Entrer les informations concernant votre compte e-mail à transférer
>> 1. Entrer les informations concernant votre nouveau compte e-mail
>> 1. Une fois la synchronisation validée, vous pouvez fermer la page.
>> 1. Vos e-mails seront copiés vers la destination. Cela peut prendre plusieurs heures.
>

![hosting](images/1423.png){.thumbnail}


### Ou le trouver ?
Depuis le site [OVH.com](http://www.ovh.com){.external}, cliquez sur Webmail en haut à droite. Vous arrivez alors sur l'interface du webmail.


![hosting](images/2846.png){.thumbnail}

Dans le menu contextuel en haut à droite (Webmail en bleu), vous allez trouver l'intitulé "Accéder aux outils mails".

En cliquant dessus, vous arrivez directement sur l'interface des outils mails dont IMAPCopy. Vous pouvez désormais cliquer sur IMAPCopy.


![hosting](images/2411.png){.thumbnail}


## Configuration compte e-mail source

### Choix des services
IMAPCopy vous permet de transférer le contenu d'un compte e-mail vers un autre.

Voici les principaux fournisseurs de services mail que nous proposons de transférer :

- AOL
- Free
- Gmail
- La Poste
- Orange
- SFR
- Yahoo
- Hosted Exchange 2013
- Private Exchange 2013
- Mutualisé OVH (pour une adresse email OVH)
- Autre

Si vous transférez les e-mails d'une adresse OVH à une autre, sélectionnez "**Mutualisé OVH**".

Si votre fournisseur de services mail n'est pas dans la liste, sélectionnez "**Autre**".



> [!success]
>
> Dans l'exemple présenté ici, nous allons faire une copie de notre compte OVH
> mutualisé vers notre compte Exchange 2013.
> Nous sélectionnons donc ici "Mutualisé OVH" en tant qu'Adresse mail Source.
> 


![hosting](images/1426.png){.thumbnail}


### Parametrage
Pour le paramétrage complet de l'Adresse mail Source, voici les différents éléments à renseigner dans la zone du formulaire :

1. **Service**  : cf. ci-dessus (*Mutualisé OVH* dans notre cas)
1. **Login**  : l'adresse e-mail source entière (*support@ovh.net* dans notre cas, adresse mutualisée) ou votre login de connexion (ce qui est avant le "@")
1. **Password**  : votre mot de passe associé à ce compte e-mail source (vous seul le connaissez)
1. **Serveur IMAP**  : le serveur de messagerie sur lequel se connecter pour vérifier le compte source (*ssl0.ovh.net* dans notre cas, serveur utilisant une connexion SSL)
1. **SSL**  : à cocher si votre serveur utilise une connexion chiffrée de type SSL (Secured Socket Layer) (Dans le doute, cochez le, comme dans notre cas)
Une fois tous les éléments bien renseignés, cliquez sur "Valider".


![hosting](images/1427.png){.thumbnail}


### Connexion au compte source
Une fois que vous avez validé les informations de connexion à l'Adresse mail Source, les 2 étapes suivantes se succèdent :

1. Test de connexion à votre compte en cours.
1. La connexion à votre compte a été établie correctement.

![hosting](images/1428.png){.thumbnail}


## Configuration compte e-mail de destination

### Choix des services
IMAPCopy est initialement conçu pour transférer des comptes e-mails OVH ou externes à OVH  vers un compte OVH (Exchange ou Mutualisé). Cependant avec la nouvelle offre Exchange 2013, la copie de destination s'ouvre aux serveurs externes à OVH.

Voici les principaux fournisseurs de services mail que nous vous proposons par défaut :

- Exchange 25 Go
- Exchange Corporate
- Exchange Revendeur
- Mutualisé OVH
- Autre

Si votre fournisseur de services mail n'est pas dans la liste, sélectionnez "Autre".

Dans l'exemple présenté ici, nous allons faire  une copie de notre compte OVH mutualisé vers notre compte Exchange 2013.

Nous sélectionnons donc ici "Autre" en tant qu'Adresse mail de Destination.


![hosting](images/1429.png){.thumbnail}


### Parametrage
Pour le paramétrage complet de l'Adresse mail de Destination, voici les différents éléments à renseigner dans la zone du formulaire :

1. **Service**  : cf. ci-dessus (*Autre* dans notre cas) ;
1. **Login**  : votre adresse e-mail de destination entière (*exchange@ovh.net* dans notre cas, adresse Exchange 2013) ou votre login de connexion (ce qui est avant le "@") ;
1. **Password**  : votre mot de passe associé à ce compte e-mail de destination (vous seul le connaissez) ;
1. **Serveur IMAP**  : le serveur de messagerie sur lequel se connecter pour vérifier le compte de destination (*ex.mail.ovh.net* dans notre cas, serveur utilisant une connexion SSL) ;
1. **SSL**  : à cocher si votre serveur utilise une connexion chiffrée de type SSL (Secured Socket Layer) (*coché* dans notre cas) ;
Une fois tous les éléments bien renseignés, cliquez sur "Valider".


![hosting](images/1430.png){.thumbnail}


### Connexion au compte de destination
De la même manière que la connexion au compte mail Source, une fois que vous avez validé les informations de connexion à l'Adresse mail de Destination, les 2 étapes suivantes se succèdent :

1. Test de connexion à votre compte en cours.
1. La connexion à votre compte a été établie correctement.

![hosting](images/1431.png){.thumbnail}


## Synchronisation et etats

### Synchronisation
Une fois la connexion à l'Adresse mail de Destination établie et réussie, le bouton  **Synchroniser**  apparaît.

Cliquez dessus afin de lancer la copie du compte A (source) vers le compte B (destination).

Dans notre cas, on va donc copier tous les e-mails du compte [support@ovh.net](mailto:support@ovh.net){.external} vers le compte Exchange 2013 [exchange@ovh.net](mailto:exchange@ovh.net){.external}.

Le message suivant apparaît : La synchronisation de vos comptes est en cours de traitement. Vérifiez son état d'avancement à tout moment en remplissant le formulaire ci-dessous.


![hosting](images/1432.png){.thumbnail}



> [!alert]
>
> Comme il s'agit d'une synchronisation de type IMAP, les dossiers existant sur
> l'Adresse mail Source mais n'existant pas sur l'Adresse mail de Destination
> seront créés, qu'ils soient vides ou non.
> 


### Synchronisation - Erreurs
Une fois la synchronisation lancée, si un message d'erreur doit apparaître, il aura le format suivant (cf. capture ci-contre) :

Une erreur est survenue lors de la synchronisation. Todo for sync this account exists.

Il s'agit donc du message général d'erreur en français suivi de l'erreur précise en anglais.

Dans l'exemple ci-contre, nous avons appuyé une seconde fois sur le bouton Synchroniser. Il nous est affiché que :  **Une tâche de synchronisation pour ce compte existe déjà** . Il n'en crée donc pas une deuxième.


![hosting](images/1433.png){.thumbnail}


### Synchronisation - Fin
Une fois la synchronisation terminée, un e-mail avec le détail de l'opération est envoyé sur l'Adresse mail de Destination :

L'e-mail reçu est affiché dans la capture ci-contre.


![hosting](images/1435.png){.thumbnail}


### Connaitre l'etat de synchronisation
Afin de connaître l'état de synchronisation de vos comptes, vous pouvez à tout moment saisir l'adresse e-mail (source) dans le champ prévu à cet effet puis cliquez sur Envoyer.

Dans notre cas, au moment où nous avons consulté l'état, la synchronisation était terminée.

Nous avons donc le message suivant : La synchronisation de vos comptes est terminée.

Si la copie devait être plus imposante, dans un premier temps, vous auriez le message suivant : La synchronisation n'a pas encore débuté. Veuillez encore patienter.


![hosting](images/1434.png){.thumbnail}