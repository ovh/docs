---
title: 'Utiliser son adresse e-mail depuis le webmail RoundCube'
slug: utilisation-roundcube
excerpt: 'Découvrez comment utiliser le Webmail RoundCube pour vos adresses e-mail OVHcloud'
section: 'Premiers pas'
order: 05
---

**Dernière mise à jour le 10/05/2021**

## Objectif

Avec l'offre Mxplan OVHcloud, il est possible d'envoyer et recevoir les e-mails à partir d’un appareil et d’un logiciel client. OVHcloud fournit un service de messagerie en ligne appelé RoundCube qui permet, via un navigateur web, d’accéder à un compte e-mail. 

**Découvrez comment utiliser le Webmail RoundCube pour vos adresses e-mail OVHcloud**

## Prérequis

- Disposer d'une solution e-mail OVHcloud qui doit avoir été configurée au préalable (**MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/), incluse dans un [hébergement Start10M gratuit](https://www.ovhcloud.com/fr/domains/free-web-hosting/) ou commandée séparément comme solution autonome.
- Disposer des informations de connexion à l’adresse e-mail MXplan que vous souhaitez consulter.

## En pratique

### Se connecter au Webmail RoundCube

Rendez-vous sur la page <https://www.ovh.com/fr/mail/>. Saisissez une adresse e-mail et le mot de passe, puis cliquez sur `connexion`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Vous serrez alors redirigé vers l'interface RoundCube.

![hosting](images/roundcube01.png){.thumbnail}

> [!Warning]
>
> Si vous êtes redirigé sur une interface **O**utlook **W**eb **A**ccess (OWA), cela signifie que vous êtes sur la dernière version de l'offre MX plan. Pour plus d'information sur votre offre Mxplan, consulter notre page [Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/). Pour vous familiariser avec l'interface **OWA**, consulter notre page [Consulter son compte e-mail depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/)

### Interface générale du Webmail RoundCube <a name="general-interface"></a>

Une fois connecté à votre compte e-mail, vous avez accès à la fenêtre principale de Roundcube qui se délimite en 3 zones :

- [**Colonne de gauche**](#leftcolumn) : l'arborescence de votre compte e-mail, composé de dossiers et sous-dossiers. Le dossier principal étant la `boîte de réception`.

- [**Fenêtre supérieure**](#topwindow) : la liste des e-mails contenus dans le dossier sélectionné dans la colonne de gauche.

- [**Fenêtre inférieure**](#lowerwindow) : contenu de l'e-mail sélectionné dans la liste du cadre supérieur.

#### Gestion des dossiers (colonne de gauche) <a name="leftclumn"></a>

Depuis cette partie de Roundcube, apparaissent les dossiers présents dans votre compte e-mail.

Pour gérer plus précisément les dossiers, cliquez sur la roue crantée en bas de la colonne, puis cliquez sur `gérer les dossiers`{.action}

![hosting](images/roundcube02.png){.thumbnail}

Pour créer un dossier, cliquez sur le bouton `+`{.action} en bas de la colonne `Dossiers`.

Pour supprimer un dossier, sélectionnez le dossier concerné, cliquez sur la roue crantée en bas de la colonne `Dossiers`, puis cliquez sur `Supprimer`{.action}. Pour effacer le contenu mais garder le dossier, cliquez sur `Vider`{.action} .

Les cases à coche au niveau des dossiers correspondent aux « abonnements ». L'abonnement détermine si celui-ci doit s'afficher, ou non, au niveau de l'interface webmail ou du logiciel de messagerie tout en conservant le contenu du dossier. Le but étant seulement de masquer un dossier sur le compte e-mail.

> [!primary]
>
> Les dossiers présentant une case à cocher grise sont des dossiers spéciaux, il n'est pas possible de supprimer ni de retirer l'abonnement.

#### Liste des e-mails reçus / envoyés (fenêtre supérieure) <a name="topwindow"></a>

Cette fenêtre affiche le contenu du dossier sélectionné dans la colonne de gauche. 

##### **Type d'affichage**

Cette fenêtre est présentée sous une forme qui peut être personnalisée. Pour cela, cliquez sur la roue crantée située en haut à gauche de cette fenêtre.

![hosting](images/roundcube03.png){.thumbnail}

Il est possible de paramétrer les éléments suivants:

- **Disposition** : déterminer la disposition des fenêtres de gestion d'un compte e-mail.
- **Colonnes de la liste** : ajouter des colonnes à afficher (priorités des mails, etc.).
- **Colonne de tri** : choisir la colonne sur laquelle le tri par défaut sera effectué.
- **Ordre de tri** : choisir l'ordre de tri ascendant ou descendant en fonction de la colonne de tri.

##### **action sur un e-mail sélectionné**

Lorsqu'un e-mail est sélectionné, il est possible d'agir sur celui-ci, voici les actions possibles:

- `Répondre`{.action} : répondre directement à l'expéditeur.
- `Répondre à tous`{.action} : répondre directement à tous les e-mails présent dans les champs "A" et "Copie".
- `Transférer`{.action} : transférer l'e-mail sélectionné à un ou plusieurs destinataires.
- `Supprimer`{.action} : mettre l'e-mail sélectionné à la "Corbeille".
- `Indésirables`{.action} : placer l'e-mail sélectionné directement dans la boîte du courrier indésirable (Junk), le qualifie comme **spam**.
- `Marquer`{.action} : déterminé manuellement l'état d'un e-mail.
- `Plus`{.action} 
    - `Imprimer ce courriel`{.action}.
    - `Télécharger (.eml)`{.action} : récupérer l'entête de l'e-mail et son contenu.
    - `Éditer comme nouveau`{.action} : créer un nouvel e-mail en se basant sur l'e-mail sélectionné.
    - `Afficher la source`{.action} : affiche l'e-mail sous sa forme brute avec l'entête.
    - `Déplacer vers`{.action} : déplacer l'e-mail dans un dossier.
    - `Copier vers`{.action} : copier l'e-mail dans un dossier.
    - `Ouvrir dans une nouvelle fenêtre`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Si l'un de vos correspondants demande à ce qu'un accusé de lecture lui soit adressé lorsque vous lisez son e-mail, vous obtiendrez le message suivant : <br>l'expéditeur de ce message a demandé d'être prévenu quand vous lirez ce message. Souhaitez-vous prévenir l'expéditeur ? .
> 

##### **Rechercher un e-mail**

Un outil de recherche est disponible, dans la partie supérieure droite de l'interface.

Cliquez sur la flèche située à droite de la loupe pour afficher les filtres de recherche.

![hosting](images/roundcube03.png){.thumbnail}

#### Contenu d'un e-mail (Fenêtre inférieure) <a name="lowerwindow"></a>

Lorsqu'un e-mail est sélectionné dans la liste, celui-ci s'affiche dans la fenêtre inférieure.

Retrouvez les raccourcies, sur la droite, des fonctions suivantes:

- Afficher au format HTML (par défaut)
- Afficher  au format texte en clair
- Répondre
- Répondre à tous
- Transférer
- Afficher dans une nouvelle fenêtre 

![hosting](images/roundcube05.png){.thumbnail}

### Configurer les préférences de l'interface Roundcube

Les chapitres suivants correspondent aux onglets qui composent la partie `Préférences`{.action} des `Paramètres`{.action} de Roundcube. Leur description est non-exhaustive.

![hosting](images/roundcube06.png){.thumbnail}

#### Interface utilisateur

Définissez ici la `langue` d'usage de l'interface Roundcube, le `fuseau horaire`,le `format horaire` et le `format de date`.

L'option `Jolies dates`correspond à une fonction permettant d'afficher la date de réception/d'envoi avec des termes relatifs tels qu’« Aujourd’hui », « Hier », etc. (exemple : nous sommes le **19/05/2022**, un e-mail envoyé/reçu le **17/05/2022** à **17:38** sera affiché **Mar 17:38**, car l'email correspond au mardi qui précède).

La case `Afficher la prochaine entrée de la liste après suppression ou déplacement` signifie que, quel que soit l'ordre de tri, après une action de suppression ou déplacement sur un e-mail, ce sera systématiquement l'élément de la ligne inférieur qui sera sélectionné après. 

#### Vue de la boîte de courriels

Définir ici l'ergonomie pour visualiser et agir sur les e-mails. l'option `Disposition` permet d'agencer les 3 fenêtres décrites dans la partie [Interface générale du Webmail RoundCube](#topwindow).

#### Affichage des courriels

Définir la façon dont sont affichés les e-mails. Il est conseillé d'avoir la case `Afficher en HTML` coché, pour s'assurer que les e-mails formatés par l'expéditeur s'affichent correctement. Il est également conseillé de garder l'option `Autoriser les ressources distantes (images, styles)` sur `jamais`, en effet cela évite de charger les éléments d'un e-mail qui semble malveillant.

#### Rédaction de courriels

Définir la forme par défaut lors de la rédaction d'un e-mail ou d'une réponse. Il est conseillé de passer l'option `Rédiger des courriels HTML` sur `toujours` pour bénéficier par défaut des outils d'édition HTML et ne pas altérer une signature HTML.

#### Contacts

Personnalisez ici l'agencement des informations dans votre carnet d'adresses

#### Dossiers spéciaux

Par défaut, les dossiers spéciaux sont présents. Il est possible d'attribuer ces derniers à un dossier qui a été créé après, grâce aux menus déroulants.

#### Paramètres du serveur

Dans cet onglet, il est possible d'optimiser l'espace occupé sur un compte e-mail. En effet, l'option `Vider la corbeille à la déconnexion` permet d'éviter le cumul des éléments qui ont été supprimés . l'option `Supprimer directement les pourriels` supprimera automatiquement tous les e-mail considérés comme SPAM.


> [!warning]
> 
> Il est déconseillé d'activité l'option `Supprimer directement les pourriels`, dans le cas ou un faux positif (e-mail déclaré à tort comme « SPAM ») se retrouverait déclaré comme SPAM pour le serveur de réception. En effet, lorsqu'un e-mail est placé dans le dossier « Pourriels », il est encore possible de vérifier si l'e-mail est légitime.

### Gérer les identités et leur signature <a name="identity"></a>

Depuis Roundcube, cliquez sur `Paramètres`{.action} dans la barre supérieure, puis sur `Identités`{.action} dans la colonne de gauche. « L'identité » permet de personnaliser les informations envoyées à aux destinataires comme, par exemple, le nom d'affichage ou la signature.

![hosting](images/roundcube07.png){.thumbnail}

#### Paramétrer les attributs d'une identité 

- **Nom d'affichage** : ce nom apparaîtra dans la partie « expéditeur » du destinataire
- **Courriel** : corresponds à l'adresse depuis laquelle est envoyé l'e-mail.
- **Organisation** : champ destiné au nom de société, association, ou une autre entité.
- **Répondre à** : attribuer au destinataire, lorsqu'il répond, une autre adresse e-mail que celle de l'expéditeur.
- **Cci** : mettre en copie cachée une adresse e-mail lors d'un envoi.
- **Définir par défaut** : lorsqu'il y a plusieurs identités (signatures), Attribu celle-ci par défaut.
- **Signature** : personnaliser le pied de page d'un e-mail lors de sa rédaction (nom, prénom, poste occupé, phrases, images...).
- **Signature HTML** : active le format HTML sur la signature. 

> [!alert]
> 
> Compléter la case **Courriel** par une adresse e-mail différente de celle sur laquelle vous êtes connecté est considérée comme du "spoofing" (usurpation d'identité électronique), l'adresse IP utilisée à l'envoi risque d'être « banni » et/ou considéré comme « SPAM » auprès de vos destinataires. 

#### Ajouter une signature

Par défaut, la case `signature` est en "texte en clair", cette forme ne permet pas une édition avancée ou d'y insérer une image. Pour bénéficier des options d'édition avancée pour une signature, il est conseillé d'activer le mode HTML en cliquant sur **Signature HTML** sous le cadre de saisie.

> [!warning]
> 
> Par conséquent si la signature est au format HTML, il sera nécessaire à la rédaction d'un e-mail, de passer en mode HTML. Vous pouvez activer cette option par défaut pour chaque rédaction d'e-mail, depuis la section `Paramètres`{.action} de l'interface Roundcube. Cliquez sur `Préférences`{.action} dans la colonne de gauche, puis cliquez sur `Rédaction de courriels`{.action}. Pour la mention **Rédiger des courriels HTML**, sélectionnez `Toujours`.

Pour insérer une image dans une signature, l'image doit être hébergée sur un serveur (Un hébergement OVHcloud ou autre). **Choisir une image depuis un ordinateur ne fonctionnera pas**.

Cliquez sur le bouton `< >`{.action} dans la barre d'outil HTML, puis insérer le code suivant, en remplaçant `your-image-url` par le l'adresse URL de l'image et `text-if-image-is-not-displayed` par un texte qui remplace l'image si celle-ci ne peut pas s'afficher.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Carnet de contacts

Cliquez sur `Contacts`{.action}, dans la barre supérieure, pour accéder au carnet de contacts. Celui-ci est divisé en **3 colonnes**:

- **Groupes** : dans le carnet d'adresses, il est possible de créer des groupes pour délimiter les contacts.
- **Contacts** : visualisez les contacts que compose le carnet d'adresses ou le groupe sélectionné.
- **Propriétés du contact** ou **Ajouter un contact** : cette fenêtre s'affiche lorsque qu'un contact est sélectionné ou qu'il est en création. C'est ici que l'on peut lire ou modifier les informations d'un contact.

![hosting](images/roundcube09.png){.thumbnail}

#### Groupes <a name="group"></a>

Les groupes sont des sous-catégories du carnet d'adresses. Ils permettent de classer les contacts en sous-ensembles. Par exemple, vous retrouverez plus facilement un contact dans un groupe que vous aurez créé plutôt que dans l'ensemble de votre carnet d'adresses ou encore envoyer un e-mail en ajoutant un groupe en destinataire au lieu d'ajouter les contacts de ce dernier un à un.

Pour créer un groupe, cliquez sur le bouton `+`{.action} en bas de la colonne `Groupes`. Définissez le nom du groupe, puis cliquez sur `Enregistrer`{.action} pour valider.

![hosting](images/roundcube10.png){.thumbnail}

Pour attribuer un groupe à l'un des contacts, sélectionnez un contact dans la colonne `Contacts`, puis dans la fenêtre qui apparait, cliquez sur l'onglet `Groupes`{.action}. Cochez le groupe que vous souhaitez attribuer au contact.

#### Contacts <a name="contacts"></a>

Dans la colonne `Groupes`, sélectionnez le carnet d'adresses ou l'un des groupes.

> [!primary]
> 
> Lorsque vous créez un contact à partir d'un groupe sélectionné, le contact sera alors automatiquement ajouté au groupe.

Cliquez sur le bouton `+`{.action} en bas de la colonne `Contacts` pour créer un contact.

![hosting](images/roundcube11.png){.thumbnail}

Compléter ensuite celle-ci avec les informations d'un contact

> [!primary]
> 
> Si des champs sont manquants, vous noterez que sous les cases `Prénom` et `Adresse`, vous trouverez un menu déroulant `Ajouter un champ...`{.action}.

### Réponses (Gabarits) <a name="responses"></a>

Cette fonction permet de créer des gabarits de réponses lors de la rédaction d'un e-mails.

Depuis Roundcube, cliquez sur `Paramètres`{.action} dans la barre supérieure, puis sur `Réponses`{.action} dans la colonne de gauche.

Pour ajouter une réponses, cliquez sur le bouton `+`{.action} en bas de la colonne `Réponses`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> Les « réponses » se rédige au format « texte en clair ».

### Rédactions d'un e-mail

Depuis l'onglet `Courriel`{.action} dans la barre supérieur, cliquez sur `Rédiger`{.action}

Dans la fenêtre de rédaction d'un e-mail, on retrouve les champs suivants: 

- **De** : choisir une ['identité](#identity) pour définir l'expéditeur.
- **À+** : ajouter des destinataires et/ou un [groupe](#group).

> [!primary]
>  
> Le champ **«À»** ne doit pas excéder les 100 destinataires, cela inclus les contacts contenus dans un [groupe](#group).

- **Ajouter Cc+** : ajouter des destinataires en copie simple.
- **Ajouter Cci+** : ajouter des destinataires en copie cachée. Les autres destinataires de l'e-mail ne verront pas ceux en Cci.
- **Ajouter Transférer à** : faire suivre l'e-mail à des destinataires
- **Type d'éditeur** :  
    - `Texte en clair` : uniquement du texte sans mis en forme.
    - `HTML`: texte avec mise en forme. Une barre d'outils HTML apparait au-dessus de la fenêtre de saisie.
- **Priorité** de l'e-mail.
- **Avis de réception** : un avis de réception est demandé au destinataire.
- **Notification d'état de distribution** lorsque l'e-mail a bien été transmis au destinataire.
- **Enregistrer le courriel envoyé dans** : choisir le dossier dans lequel une copie de l'e-mail sera stockée.

Dans la barre supérieure, les actions suivantes:

- `Annuler`{.action} la rédaction d'un e-mail avec une demande de confirmation.
- `Envoyé`{.action} un e-mail.
- `Enregistrer`{.action} un e-mail dans le dossier spécial « brouillon »
- `Orthographe`{.action}, pour vérifier le texte, avec un menu permettant le choix de la langue.
- `Joindre`{.action} un fichier à un e-mail.
- `Signature`{.action} ajoute la signature attachée à [l'identité](#identity) sélectionnée.
- `Réponses`{.action}: ajouter un gabarit préenregistré dans la partie [Réponses](#responses).

![hosting](images/roundcube13.png){.thumbnail}

## Aller plus loin

[Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/)

[Modifier le mot de passe d’une adresse e-mail MX Plan](https://docs.ovh.com/fr/emails/modifier-mot-de-passe-adresse-email/)

[Créer des filtres pour vos adresses e-mail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-des-filtres-e-mail-sur-lespace-client/)

[Utiliser les redirections e-mail](https://docs.ovh.com/fr/emails/guide-des-redirections-emails/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.