---
title: 'Utiliser son adresse e-mail depuis le webmail RoundCube'
slug: utilisation-roundcube
section: 'Premiers pas'
order: 05
---

**Dernière mise à jour le 31/05/2022**

## Objectif

Avec l'offre MX Plan OVHcloud, vous pouvez envoyer et recevoir des e-mails depuis un logiciel tiers ou via un webmail. OVHcloud fournit un service de messagerie en ligne appelé RoundCube qui permet, via un navigateur web, d’accéder à un compte e-mail.

**Découvrez comment utiliser le webmail RoundCube pour vos adresses e-mail OVHcloud**

## Prérequis

- Disposer d'une solution e-mail OVHcloud **MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/), incluse dans un [hébergement Start10M gratuit](https://www.ovhcloud.com/fr/domains/free-web-hosting/), ou commandée séparément comme solution autonome.
- Disposer des informations de connexion à l’adresse e-mail MX Plan que vous souhaitez consulter. Pour plus d'informations, consultez notre guide [Premiers pas avec l'offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/).

## En pratique

### Se connecter au webmail RoundCube

Rendez-vous sur la page <https://www.ovh.com/fr/mail/>. Saisissez une adresse e-mail et le mot de passe, puis cliquez sur `Connexion`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

Vous serez alors redirigé vers l'interface RoundCube.

![hosting](images/roundcube01.png){.thumbnail}

> [!warning]
> 
> Si vous êtes redirigé sur une interface **O**utlook **W**eb **A**ccess (OWA), cela signifie que vous êtes sur la dernière version de l'offre MX Plan. Pour plus d'information sur votre offre MX Plan, consultez notre page [Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/).
>
> Pour vous familiariser avec l'interface **OWA**, consultez notre guide [Consulter son compte e-mail depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-guide-utilisation-outlook-web-app/).

### Interface générale du webmail RoundCube <a name="general-interface"></a>

Une fois connecté à votre compte e-mail, vous avez accès à la fenêtre principale de Roundcube qui se compose de 3 zones :

- [**Colonne de gauche**](#leftcolumn) : l'arborescence de votre compte e-mail, composée de dossiers et sous-dossiers. Le dossier principal étant la `Boîte de réception`.

- [**Fenêtre supérieure**](#topwindow) : la liste des e-mails contenus dans le dossier sélectionné dans la colonne de gauche.

- [**Fenêtre inférieure**](#lowerwindow) : le contenu de l'e-mail sélectionné dans la fenêtre supérieure.

#### Gestion des dossiers (colonne de gauche) <a name="leftcolumn"></a>

Dans cette zone apparaissent les dossiers présents dans votre compte e-mail.

Pour gérer plus précisément les dossiers, cliquez sur la roue crantée en bas de la colonne puis sur `Gérer les dossiers`{.action}.

![hosting](images/roundcube02.png){.thumbnail}

Pour créer un dossier, cliquez sur le bouton `+`{.action} en bas de la colonne `Dossiers`.

Pour supprimer un dossier, sélectionnez le dossier concerné, cliquez sur la roue crantée en bas de la colonne `Dossiers` puis sur `Supprimer`{.action}. Pour effacer le contenu mais garder le dossier, cliquez sur `Vider`{.action}.

Les cases à cocher au niveau des dossiers correspondent aux « abonnements ». L'abonnement détermine si le dossier doit s'afficher, ou non, au niveau de l'interface webmail ou du logiciel de messagerie tout en conservant le contenu du dossier. Le but étant seulement de masquer ou afficher un dossier sur le compte e-mail.

> [!primary]
>
> Les dossiers présentant une case à cocher grise sont des dossiers spéciaux. Il n'est pas possible de les supprimer ou de retirer leur abonnement.

#### Liste des e-mails reçus / envoyés (fenêtre supérieure) <a name="topwindow"></a>

Cette fenêtre affiche le contenu du dossier sélectionné dans la colonne de gauche. 

##### **Type d'affichage**

Cette fenêtre est présentée sous une forme qui peut être personnalisée. Pour cela, cliquez sur la roue crantée située en haut à gauche de cette fenêtre.

![hosting](images/roundcube03.png){.thumbnail}

Il est possible de paramétrer les éléments suivants :

- **Disposition** : permet de déterminer la disposition des fenêtres de gestion d'un compte e-mail.
- **Colonnes de la liste** : permet d'ajouter des colonnes à afficher (priorités des e-mails, etc.).
- **Colonne de tri** : permet de choisir la colonne sur laquelle le tri par défaut sera effectué.
- **Ordre de tri** : permet de choisir l'ordre de tri ascendant ou descendant, en fonction de la colonne de tri.

##### **Action sur un e-mail sélectionné**

Lorsqu'un e-mail est sélectionné, il est possible d'agir sur celui-ci. Voici les actions possibles :

- `Répondre`{.action} : répondre directement à l'expéditeur.
- `Répondre à tous`{.action} : répondre directement à tous les destinataires présents dans les champs « A » et « Copie ».
- `Transférer`{.action} : transférer l'e-mail sélectionné à un ou plusieurs destinataires.
- `Supprimer`{.action} : mettre l'e-mail sélectionné à la « Corbeille ».
- `Indésirables`{.action} : placer l'e-mail sélectionné directement dans la boîte du courrier indésirable (Junk), le qualifier comme **spam**.
- `Marquer`{.action} : déterminer manuellement l'état d'un e-mail.
- `Plus`{.action} 
    - `Imprimer ce courriel`{.action}.
    - `Télécharger (.eml)`{.action} : récupérer l'en-tête de l'e-mail et son contenu.
    - `Éditer comme nouveau`{.action} : créer un nouvel e-mail en se basant sur l'e-mail sélectionné.
    - `Afficher la source`{.action} : afficher l'e-mail sous sa forme brute avec l'en-tête.
    - `Déplacer vers`{.action} : déplacer l'e-mail dans un dossier.
    - `Copier vers`{.action} : copier l'e-mail dans un dossier.
    - `Ouvrir dans une nouvelle fenêtre`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Si l'un de vos correspondants demande à ce qu'un accusé de lecture lui soit adressé lorsque vous lisez son e-mail, vous obtiendrez le message suivant : `l'expéditeur de ce message a demandé d'être prévenu quand vous lirez ce message. Souhaitez-vous prévenir l'expéditeur ?`.
> 

##### **Rechercher un e-mail**

Un outil de recherche est disponible dans la partie supérieure droite de l'interface.

Cliquez sur la flèche située à droite de la loupe pour afficher les filtres de recherche.

#### Contenu d'un e-mail (fenêtre inférieure) <a name="lowerwindow"></a>

Lorsqu'un e-mail est sélectionné dans la liste, celui-ci s'affiche dans la fenêtre inférieure.

Retrouvez les raccourcies, sur la droite, des fonctions suivantes :

- Afficher au format HTML (par défaut)
- Afficher  au format texte en clair
- Répondre
- Répondre à tous
- Transférer
- Afficher dans une nouvelle fenêtre 

![hosting](images/roundcube05.png){.thumbnail}

### Configurer les préférences de l'interface Roundcube

Les chapitres suivants de ce guide correspondent aux onglets qui composent la partie `Préférences`{.action} des `Paramètres`{.action} de Roundcube. Leur description est non-exhaustive.

![hosting](images/roundcube06.png){.thumbnail}

#### Interface utilisateur

Définissez ici la `langue` d'usage de l'interface Roundcube, le `fuseau horaire`,le `format horaire` et le `format de date`.

L'option `Jolies dates` permet d'afficher la date de réception/d'envoi avec des termes relatifs tels qu’« Aujourd’hui », « Hier », etc.<br>
**Par exemple** : nous sommes le **19/05/2022**, un e-mail envoyé/reçu le **17/05/2022** à **17:38** sera affiché **Mar 17:38**, car l'email correspond au mardi qui précède.

La case `Afficher la prochaine entrée de la liste après suppression ou déplacement` signifie qu'après une action de suppression ou déplacement sur un e-mail, l'élément de la ligne inférieure sera alors systématiquement sélectionné, quelque soit l'ordre de tri.

#### Vue de la boîte de courriels

Définissez ici l'ergonomie pour visualiser et agir sur les e-mails. L'option `Disposition` permet d'agencer les 3 fenêtres décrites dans la partie [Interface générale du webmail RoundCube](#topwindow).

#### Affichage des courriels

Définissez la façon dont sont affichés les e-mails.<br>
Il est conseillé d'avoir la case `Afficher en HTML` cochée, pour s'assurer que les e-mails formatés par l'expéditeur s'affichent correctement.<br>
Il est également conseillé de garder l'option `Autoriser les ressources distantes (images, styles)` sur `jamais`. En effet, cela évite de charger les éléments d'un e-mail qui semble malveillant.

#### Rédaction de courriels

Définissez la forme par défaut lors de la rédaction d'un e-mail ou d'une réponse.<br>
Il est conseillé de passer l'option `Rédiger des courriels HTML` sur `toujours`, pour bénéficier par défaut des outils d'édition HTML et ne pas altérer une signature HTML.

#### Contacts

Personnalisez ici l'agencement des informations dans votre carnet d'adresses.

#### Dossiers spéciaux

Roundcube dispose de 4 dossiers spéciaux : `Brouillons`, `Envoyés`, `Pourriels`, `Corbeille`.

Nous ne conseillons pas de les modifier mais il est possible d'attribuer le comportement d'un dossier spécial à un autre dossier créé ultérieurement, grâce aux menus déroulants.<br>
**Par exemple**, vous pouvez attribuer le comportement « Brouillons » à un autre dossier que vous avez créé. Les e-mails qui y seront enregistrés seront considérés comme des brouillons jusqu'à leur envoi effectif.

#### Paramètres du serveur

Dans cet onglet, vous pouvez optimiser l'espace occupé sur un compte e-mail. En effet, l'option `Vider la corbeille à la déconnexion` permet d'éviter le cumul des éléments qui ont été supprimés . L'option `Supprimer directement les pourriels` supprimera automatiquement tous les e-mail considérés comme SPAM.

> [!warning]
> 
> Il est déconseillé d'activer l'option `Supprimer directement les pourriels`, dans le cas de figure où un faux positif (e-mail déclaré à tort comme « SPAM ») se retrouverait déclaré comme SPAM pour le serveur de réception. En effet, lorsqu'un e-mail est placé dans le dossier « Pourriels », il est encore possible de vérifier si l'e-mail est légitime.

### Gérer les identités et leur signature <a name="identity"></a>

Depuis Roundcube, cliquez sur `Paramètres`{.action} dans la barre supérieure, puis sur `Identités`{.action} dans la colonne de gauche. « L'identité » permet de personnaliser les informations envoyées aux destinataires comme, par exemple, le nom d'affichage ou la signature.

![hosting](images/roundcube07.png){.thumbnail}

#### Paramétrer les attributs d'une identité 

- **Nom d'affichage** : ce nom apparaîtra dans la partie « expéditeur » du destinataire
- **Courriel** : correspond à l'adresse depuis laquelle est envoyé l'e-mail.
- **Organisation** : champ destiné au nom de société, association, ou une autre entité.
- **Répondre à** : attribuer une autre adresse e-mail de réponse que celle de l'expéditeur.
- **Cci** : mettre en copie cachée une adresse e-mail lors d'un envoi.
- **Définir par défaut** : lorsqu'il y a plusieurs identités (signatures), attribue celle-ci par défaut.
- **Signature** : personnaliser le pied de page d'un e-mail lors de sa rédaction (nom, prénom, poste occupé, phrases, images...).
- **Signature HTML** : active le format HTML sur la signature. 

> [!alert]
> 
> Compléter la case **Courriel** par une adresse e-mail différente de celle sur laquelle vous êtes connecté est considérée comme une usurpation d'identité électronique (*spoofing*). L'adresse IP utilisée pour l'envoi risque d'être « bannie » et/ou considérée comme « SPAM » auprès de vos destinataires. 

#### Ajouter une signature

Par défaut, la case `signature` est en « texte en clair ». Ce format ne permet pas une édition avancée ou d'insérer une image dans votre signature. Pour bénéficier des options d'édition avancée pour une signature, il est conseillé d'activer le mode HTML en cliquant sur **Signature HTML** sous le cadre de saisie.

> [!warning]
> 
> Par conséquent, si la signature est au format HTML, il sera nécessaire de passer en mode HTML pour la rédaction d'un e-mail. Vous pouvez activer cette option par défaut pour chaque rédaction d'e-mail, depuis la section `Paramètres`{.action} de l'interface Roundcube.
> Cliquez sur `Préférences`{.action} dans la colonne de gauche, puis sur `Rédaction de courriels`{.action}. Pour la mention **Rédiger des courriels HTML**, sélectionnez `Toujours`.
>

Pour insérer une image dans une signature, l'image doit être hébergée sur un serveur (un hébergement OVHcloud ou autre).<br>
**Téléverser une image depuis un ordinateur ne permettra pas son affichage**.

Cliquez sur le bouton `< >`{.action} dans la barre d'outils HTML, puis insérez le code suivant, en remplaçant `your-image-url` par l'adresse (URL) de l'image et `text-if-image-is-not-displayed` par un texte qui remplace l'image si celle-ci ne peut pas s'afficher.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Carnet de contacts

Cliquez sur `Contacts`{.action}, dans la barre supérieure, pour accéder au carnet de contacts. Celui-ci est divisé en **3 colonnes**:

- **Groupes** : dans le carnet d'adresses, vous pouvez créer des groupes pour classer les contacts.
- **Contacts** : visualisez les contacts du carnet d'adresses ou du groupe sélectionné.
- **Propriétés du contact** ou **Ajouter un contact** : cette fenêtre s'affiche lorsque qu'un contact est sélectionné ou lorsqu'il est en création. Vous pouvez y lire ou modifier les informations d'un contact.

![hosting](images/roundcube09.png){.thumbnail}

#### Groupes <a name="group"></a>

Les groupes sont des sous-catégories du carnet d'adresses. Ils permettent de classer les contacts en sous-ensembles. Par exemple, vous retrouverez plus facilement un contact dans un groupe que vous aurez créé plutôt que dans l'ensemble de votre carnet d'adresses. Cela vous permet aussi d'envoyer un e-mail en ajoutant un groupe en destinataire, au lieu d'ajouter un à un les contacts du groupe.

Pour créer un groupe, cliquez sur le bouton `+`{.action} en bas de la colonne `Groupes`. Définissez le nom du groupe puis cliquez sur `Enregistrer`{.action} pour valider.

![hosting](images/roundcube10.png){.thumbnail}

Pour affecter un contact à l'un des groupes, sélectionnez un contact dans la colonne `Contacts` puis, dans la fenêtre qui apparait, cliquez sur l'onglet `Groupes`{.action}. Cochez le groupe que vous souhaitez attribuer au contact.

#### Contacts <a name="contacts"></a>

Dans la colonne `Groupes`, sélectionnez le carnet d'adresses ou l'un des groupes.

> [!primary]
> 
> Lorsque vous créez un contact à partir d'un groupe sélectionné, le contact sera alors automatiquement ajouté au groupe.

Cliquez sur le bouton `+`{.action} en bas de la colonne `Contacts` pour créer un contact.

![hosting](images/roundcube11.png){.thumbnail}

Complétez ensuite les informations du contact.

> [!primary]
> Vous pouvez ajouter des champs supplémentaires via le menu déroulant `Ajouter un champ...`{.action}, situé sous les champs `Prénom` et `Adresse`.

#### Importer des Contacts

Depuis la fenêtre `Contacts`{.action}, dans la barre supérieure, cliquez sur `importer`{.action} pour ouvrir la fenêtre d'importation.

- `Importer d’un fichier` : sélectionnez un fichier CSV ou un fichier vCard sur votre ordinateur. Les contacts au sein d'un fichier CSV doivent être séparés par des virgules. Le fichier ne doit pas faire plus de 20 Mo.
- `Importer les affectations de groupe` : Si les contacts de votre fichier sont répartis par groupes, vous pouvez activer cette option pour retrouver cette organisaton ou bien laisser cette option sur `aucune` pour qu'aucun groupe ne soit affecté aux contacts.
- `Remplacer le carnet d’adresses entier`: Si un carnet est déjà configuré, nous vous conseillons de l'exporter avant de cocher cette option ou d'être certain de vouloir définitivement le remplacer.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Exporter les Contacts Roundcube

Depuis la fenêtre `Contacts`{.action}, dans la barre supérieure, cliquez sur la flêche pointant vers le bas à droite du bouton `Exporter`{.action}.

Vous avez le choix entre :

- `Tout exporter`{.action} et l'ensemble des contacts sera alors exporté dans un fichier **.vcf**.
- `Exporter la sélection`{.action} pour exporter uniquement les éléments que vous aurez choisis dans la colonne `Contacts`{.action}.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Réponses (gabarits) <a name="responses"></a>

Cette fonction permet de créer des gabarits de réponses lors de la rédaction d'un e-mail.

Depuis Roundcube, cliquez sur `Paramètres`{.action} dans la barre supérieure, puis sur `Réponses`{.action} dans la colonne de gauche.

Pour ajouter une réponse, cliquez sur le bouton `+`{.action} en bas de la colonne `Réponses`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> Les « réponses » se rédigent au format « texte en clair ».

### Rédaction d'un e-mail

Depuis l'onglet `Courriel`{.action} dans la barre supérieure, cliquez sur `Rédiger`{.action}.

Dans la fenêtre de rédaction d'un e-mail, on retrouve les champs suivants : 

- **De** : choisir une [identité](#identity) pour définir l'expéditeur.
- **À+** : ajouter des destinataires et/ou un [groupe de destinataires](#group).

> [!primary]
> 
> Le champ **«À»** ne doit pas excéder les 100 destinataires, cela inclut les contacts contenus dans un [groupe](#group).

- **Ajouter Cc+** : ajouter des destinataires en copie simple.
- **Ajouter Cci+** : ajouter des destinataires en copie cachée. Les autres destinataires de l'e-mail ne verront pas ceux en Cci.
- **Ajouter Transférer à** : faire suivre l'e-mail à des destinataires.
- **Type d'éditeur** :  
    - `Texte en clair` : uniquement du texte sans mise en forme.
    - `HTML`: texte avec mise en forme. Une barre d'outils HTML apparaît au-dessus de la fenêtre de saisie.
- **Priorité** de l'e-mail.
- **Avis de réception** : un accusé de réception est demandé au destinataire.
- **Notification d'état de distribution** lorsque l'e-mail a bien été transmis au destinataire.
- **Enregistrer le courriel envoyé dans** : choisir le dossier dans lequel une copie de l'e-mail sera stockée.

Dans la barre supérieure, les actions suivantes sont disponibles :

- `Annuler`{.action} la rédaction d'un e-mail avec une demande de confirmation.
- `Envoyer`{.action} un e-mail.
- `Enregistrer`{.action} un e-mail dans le dossier spécial « brouillon »
- `Orthographe`{.action}, pour vérifier le texte, avec un menu permettant le choix de la langue.
- `Joindre`{.action} un fichier à un e-mail.
- `Signature`{.action} : ajoute la signature attachée à [l'identité](#identity) sélectionnée.
- `Réponses`{.action} : ajoute un gabarit préenregistré dans la partie [Réponses](#responses).

![hosting](images/roundcube13.png){.thumbnail}

## Aller plus loin

[Premiers pas avec l’offre MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/)

[Modifier le mot de passe d’une adresse e-mail MX Plan](https://docs.ovh.com/fr/emails/modifier-mot-de-passe-adresse-email/)

[Créer des filtres pour vos adresses e-mail](https://docs.ovh.com/fr/emails/mail-mutualise-guide-configuration-des-filtres-e-mail-sur-lespace-client/)

[Utiliser les redirections e-mail](https://docs.ovh.com/fr/emails/guide-des-redirections-emails/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
