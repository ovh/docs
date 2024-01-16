---
title: 'MXplan - Utiliser le webmail Zimbra'
excerpt: 'Découvrez l'interface du webmail Zimbra pour vos adresses e-mail MXplan'
updated: 2023-12-19
---

> [!primary]
>
> **Information**
>
> Zimbra est un produit en cours de déploiement. Actuellement, il est uniquement disponible dans le cadre de migrations concernant l'évolution de notre offre MXplan. Cette migration est automatique, un e-mail vous sera transmis lorsque vous serez concerné.

## Objectif

Avec l'offre MX Plan OVHcloud, vous pouvez envoyer et recevoir des e-mails depuis un client de messagerie (Thunderbird, Outlook, Mail pour Mac) ou via un webmail directement sur le navigateur internet de votre appareil. OVHcloud fournit un service de webmail appelé Zimbra pour accéder à un compte e-mail. Sur cette page, nous allons aborder les fonctions indispensable à l'utilisation de ce webmail.

**Découvrez comment utiliser le webmail Zimbra pour vos adresses e-mail MXplan OVHcloud**

## Prérequis

- Disposer d'une solution e-mail OVHcloud **MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/), incluse dans un [hébergement gratuit 100M](https://www.ovhcloud.com/fr/domains/free-web-hosting/), ou commandée séparément comme solution autonome.
- Disposer des informations de connexion à l’adresse e-mail MX Plan que vous souhaitez consulter. Pour plus d'informations, consultez notre guide [Premiers pas avec l'offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

## En pratique

**Sommmaire**

- [Se connecter au webmail Zimbra](#login)
- [Interface générale du webmail Zimbra](#general-interface)
- [Gestion des dossiers de votre compte e-mail](#folders-management)
    - [Les dossiers spéciaux](#folders-specials)
    - [Créer ses dossiers](#folders-created)
 - [Traitement des e-mails](#email-management)
    - [Action sur un e-mail sélectionné](#email-action)
    - [Rechercher un e-mail](#email-search)
- [Rédiger un e-mail](#email-writing)
- [Configurer les préférences de l'interface Zimbra](#settings)
- [Contacts](#contacts)
    - [Gestion des dossiers](#contacts-folders)
    - [Importer des Contacts](#import-contacts)
    - [Exporter les Contacts Zimbra](#export-contact)
- [Filtres](#)
- [Délégations](#delegations)
- [Identités](#)
- [Signatures](#)
- [Réponses automatique / Répondeur](#)

### Se connecter au webmail Zimbra <a name="login"></a>

Rendez-vous sur la page <https://www.ovh.com/fr/mail/>. Saisissez votre adresse e-mail et le mot de passe, puis cliquez sur `Connexion`{.action}.

![hosting](images/ovhcloud-login-webmail.png){.thumbnail}

Vous serez alors redirigé vers l'interface Zimbra.

![hosting](images/zimbra-01.png){.thumbnail}

### Interface générale du webmail Zimbra <a name="general-interface"></a>

Une fois connecté à votre compte e-mail, vous avez accès à la fenêtre principale de Zimbra qui se compose de 3 zones :

> [!tabs]
> **Menu supérieur**
>>
>> **(1)** Cette zone de l'interface vous permet de choisir une des fonctionnalités disponibles sur votre compte e-mail, `messagerie` ou `contacts`. Par défaut, vous êtes sur l'onglet `messagerie`. **(2)** Une barre de recherche vous permet de retouver les éléments associée à la fonctionnalité sélectionnée. **(3)** le Menu de gestion du profil de votre compte e-mail et  **(4)** le bouton d'accès aux réglage.
>>
>> ![email](images/zimbra-02.png){.thumbnail}
>>
> **Colonne de gauche**
>>
>> Par défaut, c'est l'arborescence de votre compte messagerie, composée de dossiers et sous-dossiers. Le dossier principal étant `Réception`.
>>
>> ![email](images/zimbra-03.png){.thumbnail}
>>
> **Fenêtre centrale**
>>
>> Par défaut, vos e-mails sont affichés dans cette zone décomposée en deux parties:
>> - **(1)** la liste des éléments
>> - **(2)** le contenu de l'élément sélectionné
>>
>> ![email](images/zimbra-04.png){.thumbnail}
>>

### Gestion des dossiers de votre compte e-mail (colonne de gauche) <a name="folders-management"></a>

Dans cette zone apparaissent les dossiers présents sur votre compte e-mail. Vous y trouverez les dossiers **spéciaux** déjà présent (en orange) , et les dossiers que vous aurez **créés** (en vert).

![email](images/zimbra-05.png){.thumbnail}

#### Les dossiers spéciaux <a name="folders-specials"></a>

Les dossiers spéciaux sont automatiquement créés par le serveur e-mail, ils composent l'essentiel d'un compte e-mail.

- **Réception** : les e-mails sont délivrés par défaut dans ce dossier (hors filtres appliqués)
- **Brouillons** : les e-mails rédigés mais non-expédiés sont sauvegardés dans ce dossier
- **Envoyé** : les e-mails envoyés sont automatiquement stockés dans ce dossier
- **Archiver** : dossier par défaut pour classer les e-mails traités
- **SPAM** : dossier où les e-mails considérés comme malveillant
- **Corbeille** : Les e-mails supprimés sont stockés dans ce dossier avant d'être définitvement supprimés

> [!warning]
>
> Les dossiers spéciaux ne peuvent pas être supprimés.

#### Créer ses dossiers <a name="folders-created"></a>

Pour classer vos e-mails selon vos besoins, vous avez la possibilitéé de créer vos propres dossiers.

Pour créer un dossier, cliquez sur le bouton `+ Ajouter un dossier`{.action} en bas de la colonne.

Vous pouvez également créer un sous-dossier en effectuant un clique droit sur le dossier de votre choix, puis en cliquant sur `Créer un sous-dossier`{.action}. Néanmoins, les dossiers « Brouillons », « SPAM » et « Corbeille » ne permettent pas la création de sous-dossier.

### Traitement des e-mails <a name="email-management"></a>

Lorsque vous sélectionnez un dossier ou sous-dossier dans la colonne de gauche, la liste des e-mails contenus dans celui-ci s'affiche dans la colonne au centre. Cliquez ensuite sur l'e-mail de votre choix pour afficher sont contenu dans la fenêtre de droite.

> [!primary]
>
> **Type d'affichage**
>
> L'affichage de vos e-mails se présente sous une forme qui peut être modifiée. Pour cela, cliquez le bouton `Afficher`{.action} située en haut à droite de cette fenêtre.

#### **Action sur un e-mail sélectionné** <a name="email-action"></a>

Lorsqu'un e-mail est sélectionné, il est possible d'agir sur celui-ci. Voici les actions possibles :

- 1.`Répondre`{.action} : répondre directement à l'expéditeur
- 2.`Répondre à tous`{.action} : répondre directement à tous les destinataires présents dans les champs « A » et « Copie »
- 3.`Transférer`{.action} : transférer l'e-mail sélectionné à un ou plusieurs destinataires
- 4.`Archiver`{.action} : déplacer l'e-mail vers le dossier « Archive » de votre comtpe e-mail
- 5.`Déplacer`{.action} : déplacer l'e-mail d'un des dossiers du comtpe e-mail
- 6.`Supprimer`{.action} : placer l'e-mail sélectionné dans la « Corbeille »
- 7.`SPAM`{.action} : placer l'e-mail sélectionné directement dans la boîte du courrier indésirable (SPAM)
- 8.`Plus`{.action}
    - `Marquer comme lu`{.action}.
    - `Marquer comme non lu`{.action}.
    - `Étoile`{.action} : attribuer une étoile à votre e-mail pour le mettre en valeur et l'identifier plus facilement
    - `Supprimer l'étoile`{.action} : retirer l'étoile attribuée à cet e-mail
    - `Bloquer`{.action} : afficher l'e-mail sous sa forme brute avec l'en-tête
    - `Afficher l'original`{.action} : Afficher le message dans son intégralité, corps et en-tête
    - `Nouveau filtre`{.action} : créer un filtre à partir de l'expéditeur et de l'objet du message sélectionné
    - `imprimer`{.action} : imprimer la conversation ou l'e-mail sélectionné
- 9.`Afficher`{.action} : selectionner l'une des 3 dispostions pour visualiser vos dossiers et e-mails

![hosting](images/zimbra-07.png){.thumbnail}

Il est possible d'accèder à ces options en réalisant un clique droit sur chacun des e-mails de la colonne centrale.

> [!primary]
>
> Si l'un de vos correspondants demande à ce qu'un accusé de lecture lui soit adressé lorsque vous lisez son e-mail, vous obtiendrez ce type message suivant : `John a demandé un accusé de lecture pour ce mail. Envoyer un accusé de lecture`.
>

#### **Rechercher un e-mail** <a name="email-search"></a>

Si vous souhaitez retrouver un e-mail, vous trouverez une barre de recherche dans la partie supérieur de votre interface. Il est possible d'effectuer une **recherche simple** ou une **recherche avancée**, comme décrit dans les les onglets ci-dessous :

> [!tabs]
> **Recherche Simple**
>>
>> Saisiessez le ou les mots clés que vous souhaitez retrouvez dans la barre de recherche et taper sur la touche `Entrée` pour valider votre recherche. Le ou les mots apparraitront en surbrillance dans vos résultats.
>>
>> ![email](images/zimbra-08.png){.thumbnail}
>>
> **Recherche Avancée**
>>
>> Pour une recherche plus précise, cliquez sur le chevron dans la partie droite de votre barrre de recherche. Vous pourrez ainsi restreindre, votre recherche sur un dossier, une plage horaire, dans l'objet ou le corps du message, etc.
>>
>> ![email](images/zimbra-09.png){.thumbnail}
>>

### Rediger un e-mail

Pour rédiger un nouvel e-mail, cliquez sur le bouton `Nouveau Message`{.action} (1) dans la partie supérieur gauche de votre fenêtre Zimbra.

![email](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **En-tête**
>>
>> Dans la partie en-tête, vous pourrez compléter les champs suivant:<br>
>> - **De** : L'adresse depuis laquelle vous envoyez votre e-mail. Par défaut, c'est votre adresse e-mail, si et seulement si une [délégation](#delegation) à été mise en place, vous pouvez la changer votre adresses d'expéditeur en cliquant sur le chevron à droite de votre adresse e-mail<br>
>> - **À** : le destinataire de votre e-mail, en cliquant sur `À`{.action}, vous accédez à votre [carnet d'adresse], pour sélectionner vos destinataires<br>
>> - **Cc** : Cliquez sur `Cc/Cci`{.action} à droite du champ `À`{.action} pour afficher ce champ. La copie carbone est un champ destinataire qui permet d'envoyer votre e-mail en copie à des personnes que vous souhaitez intégrer dans une boucle sans pour autant qu'ils soient considérer comme destinataire direct de l'e-mail comme peut l'être le champ « **De** »<br>
>> - **CCi** : Cliquez sur `Cc/Cci`{.action} à droite du champ `À`{.action} pour afficher ce champ. La copie carbone invisible est un champ destinataire qui permet de transmettre un e-mail sans que les autres destinataires voient la ou les personnes en « **Cci** »<br>
>> - **Objet** : Titre de l'e-mail , premier élément visible à la réception avant d'ouvrir l'e-mail<br>
>> - `...`{.action} : situé à droite du champ `De`{.action}, il vous donne accès à 3 options.<br>
>>    - Vous pouvez qualifié votre e-mail comme prioritaire en cochant `Haute priorité`.<br>
>>    - Cliquez sur `Demander un accusé de lecture` pour demander une confirmation de lecture du destinatire.<br>
>>    - La fonction `Texte brut` désactivera les fonctions de mise en page HTML de votre e-mail. <br>
>>
>> ![email](images/zimbra-11.png){.thumbnail}
>>
> **Corps de l'e-mail**
>>
>> Pour rédiger le corps de votre e-mail, vous disposerez d'une barre d'outils HTML dans la partie inférieur de votre fenêtre. Cela vous permettra une rédaction d'e-mail avec mise en page, directement via votre navigateur.De plus, le bouton `< >`{.action}, tout à droite dans votre barre d'outil vous ouvre une fenêtre dans laquelle vous pouvez coller un e-mail que vous aurez prérédiger depuis un outil externe.
>>
>> ![email](images/zimbra-12.png){.thumbnail}
>>

Envoyer un email 

Cliquez sur DEFAIRE pour annuler l'envoi 

![email](images/zimbra-13.png){.thumbnail}

### Configurer les préférences de l'interface Zimbra <a name="email-search"></a>

Vous trouverer 2 menu de configuration pour votre interface Zimbra :

![email](images/zimbra-14.png){.thumbnail}

- (1) **Profil** : Cliquez sur le nom de votre compte e-mail dans la partie supérieure gauche de votre interface. Depuis ce menu, vous pourrez « **Changer le mot de passe** » de votre adresse e-mail, « **Changer l'image du profil** » ou vous déconnecter en cliquant sur« **Déconnexion** ».

- (2) **Réglages** : En cliquant sur la roue crantée en haut à droite de votre interface, vous aurez accès aux changement de « **Langue** » de votre interface. Une rubrique « **Aidez-moi** » vous permet de consulter la documentation officielle de Zimbra. Dans « **Paramètres*** » vous trouverez l'ensemble des éléments de configurations décrits dans les onglets suivant :

> [!tabs]
> **Général**
>>
>> Depuis cet onglet vous retrouvez l'espace occupé sur votre compte e-mail et la possibilité de définir le format d'affichage de la date et l'heure de vos e-mails.
>>
> **Afficher le mail**
>>
>> Retrouvez ici les éléments liés à l'affichage de vos éléments sur votre compte e-mail
>>
>>  - `Lorsque je consulte des listes de mails` : ces options vous permettent d'organiser la liste de vos e-mails par groupe de conversation et afficher plus de détails en aperçu
>> - `Panneau d'aperçu` :  Selectionner l'une des 3 dispostions pour visualiser vos dossiers et e-mails. Cette option reprends les choix que l'on retrouve sur bouton `Afficher`{.action} lorsqu'on visualise ses e-mails
>> - `Densité des listes de mails`
>> - `Marquer comme lu` : Vous pouvez temporiser le changement d'état de votre e-mail en « lu » lorsque vous cliquez sur celui-ci ou décider de ne rien faire et le laisser en « non-lu » sans action de votre part.
>> - `Vérifier la présence de nouveaux mails` : définir la fréquence de synchronisation des e-mails reçu depuis votre interface Zimbra
>> - `Accusés de lecture` : définir le comportement de Zimbra lorsque vous ouvrez un e-mail avec accusé de lecture.
>> - `Nouvelles notifications de courrier` : activer les notications lorsqu'un message est reçu
>> - `Afficher les photos dans les mails` : afficher ou non les photos à l'ouverture d'un e-mail
>> - `Afficher les e-mails en texte brut` : cette option affiche l'e-mail sous un format brut, sans mise en page
>> - `Afficher les images par défaut dans les e-mails de ces adresses ou domaines de confiance` : définissez les adresses e-mail de confiance pour lesquelels les images peuvent s'afficher à l'ouverture
>>
> **Écrire un mail**
>>
>> `Annuler l'envoi` : fonction permettant d'afficher une bannière, pendant 5 secondes, permettant d'annuler l'envoi d'un e-mail
>> `Demander des accusés de lecture` : cette option transmet une demande d'accusé de lecture à vos destinataires lorsque vous leur envoyez un e-mail.
>> `Enregistrer une copie dans le dossier Envoyé` : coché par défaut, cette option enregistre les e-mail envoyés dans le dossier «*Envoyé » de votre compte e-mail
>>
>> `Délégués`: Consulter la rubrique [Délegations](#delegation) de ce guide pour comprendre son utilisation.
>>
>> `Paramètres d'envoi du délégué` : Consulter la rubrique [Délegations](#delegation) de ce guide pour comprendre son utilisation.
>>
>> `Compositeur` : Vous pouvez définir votre style d'écriture par défaut lorsque vous lancez la rédaction d'un e-mail. 
>>
> **Comptes**
>>
>> Cette section vous permet de créer des identités . Consulter la rubrique [Identités](#identity) de ce guide pour comprendre son utilisation
>>
> **Signatures**
>>
>> Si vous avez créé des identités, vous devrez sélectionner l'identité sur laquelle vous souhaitez créer votre signature. Vous pouvez créer une signature pour la rédaction de vos e-mail et une seconde zone dans laquelle vous pouvez définir une signature différente lorsque vous répondez ou tranmettez un e-mail.
>>
> **Absent du bureau**
>>
>> Lorsque vous êtes absent et qu vous ne pouvez pas consulter votre compte e-mail. Pouvez mettre en place un message d'absence qui sera automatiquement envoyé a l'expéditeur.
>> - Par défaut, l'option `Activer la réponse automatique pendant ces dates (incluses)` est désactivé, il faudra cocher cette case pour activer la réponse automatique. 
>> - Si vous ne savez pas quand vous souhaitez arrêter la réponse automatique, vous pouvez cocher `Pas de date de fin`. 
>> - Le bouton `M'envoyer une copie du message en absence`{.action} vous envoie un aperçu de cette réponse automatique dans votre boite de réception.
>> - `Expéditeurs externes` : vous pouvez définir un message différent lorsque l'expéditeur est externe à votre nom de domaine et/ou de votre carnet d'adresse. Par défaut tout les expéditeurs recoivent le message.
>>
> **Expéditeurs bloqués et autorisés**
>>
>>  Vous disposez de 2 fenêtres. La première vous permet d'ajouter les adresses e-mails et nom de domaines que vous souhaitez bloquer. La seconde fenêtre vous permet de lister les adresses e-mails et nom de domaines que vous souhaitez autoriser, evitant l'éventualité qu'ils soient bloqués pour SPAM.
Général

### Contacts <a name="contacts-list"></a>

Cliquez sur `Contacts`{.action}, dans la barre supérieure, pour accéder au carnet de contacts. Celui-ci est divisé en **3 parties**:

- (1) **Dossiers** (à gauche) : dans le carnet d'adresses, vous pouvez créer des groupes pour classer les contacts.
- (2) **Liste des contacts** (au centre) : visualisez les contacts du carnet d'adresses ou du groupe sélectionné.
- (3) **Propriétés du contact** ou **Nouveau contact** (à droite) : cette fenêtre s'affiche lorsque qu'un contact est sélectionné ou lorsqu'il est en création. Vous pouvez y lire ou modifier les informations d'un contact.

![email](images/zimbra-14.png){.thumbnail}

pour créer un contact, cliquez sur le bouton `Nouveau contact`{.action} en haut de la colonne de gauche.

#### Gestion des dossiers <a name="contacts-folder"></a>

Comme pour les e-mails, des dossiers spéciaux sont automatiquement créés par le serveur e-mail.

- **Contacts** : les contacts sont stockés par défaut dans ce dossier.
- **Corbeille** : Les e-mails supprimés sont stockés dans ce dossier avant d'être définitvement supprimés.
- **Contacts par e-mail** : les e-mails rédigés mais non-expédiés sont sauvegardés dans ce dossier.

Vous pouvez créer des dosssiers et des sous-dossiers. Ils permettent de classer les contacts en sous-ensembles. Par exemple, vous retrouverez plus facilement un contact dans un groupe que vous aurez créé plutôt que dans l'ensemble de votre carnet d'adresses. Cela vous permet aussi d'envoyer un e-mail en ajoutant un groupe en destinataire, au lieu d'ajouter un à un les contacts du groupe.

Pour créer un dossier, cliquez sur le bouton `+ Ajouter un dossier`{.action} en bas de la colonne.

Vous pouvez également créer un sous-dossier en effectuant un clique droit sur le dossier de votre choix, puis en cliquant sur `Créer un sous-dossier`{.action}. Néanmoins, les dossiers « Brouillons », « SPAM » et « Corbeille » ne permettent pas la création de sous-dossier.

Pour affecter un contact à l'un des groupes, sélectionnez un contact dans la colonne `Contacts` puis, dans la fenêtre qui apparait, cliquez sur l'onglet `Groupes`{.action}. Cochez le groupe que vous souhaitez attribuer au contact.

> [!primary]
> 
> Lorsque vous créez un contact à partir d'un groupe sélectionné, le contact sera alors automatiquement ajouté au groupe.

Cliquez sur le bouton `+`{.action} en bas de la colonne `Contacts` pour créer un contact.

Complétez ensuite les informations du contact.

> [!primary]
> Vous pouvez ajouter des champs supplémentaires via le menu déroulant `Ajouter un champ...`{.action}, situé sous les champs `Prénom` et `Adresse`.

#### Importer des Contacts

Depuis la fenêtre `Contacts`{.action}, dans la barre supérieure, cliquez sur `importer`{.action} pour ouvrir la fenêtre d'importation.

- `Importer d’un fichier` : sélectionnez un fichier CSV ou un fichier vCard sur votre ordinateur. Les contacts au sein d'un fichier CSV doivent être séparés par des virgules. Le fichier ne doit pas faire plus de 20 Mo.
- `Importer les affectations de groupe` : Si les contacts de votre fichier sont répartis par groupes, vous pouvez activer cette option pour retrouver cette organisaton ou bien laisser cette option sur `aucune` pour qu'aucun groupe ne soit affecté aux contacts.
- `Remplacer le carnet d’adresses entier`: Si un carnet est déjà configuré, nous vous conseillons de l'exporter avant de cocher cette option ou d'être certain de vouloir définitivement le remplacer.

#### Exporter les Contacts 

Depuis la fenêtre `Contacts`{.action}, dans la barre supérieure, cliquez sur la flêche pointant vers le bas à droite du bouton `Exporter`{.action}.

Vous avez le choix entre :

- `Tout exporter`{.action} et l'ensemble des contacts sera alors exporté dans un fichier **.vcf**.
- `Exporter la sélection`{.action} pour exporter uniquement les éléments que vous aurez choisis dans la colonne `Contacts`{.action}.

![email](images/zimbra-12.png){.thumbnail}

### Filtres <a name="filters"></a>

Cette partie vous permet de définir les messages sur lesquels le filtre s'appliquera.

- **Nom du filtre :** Définissez le nom de votre filtre

- **Si un message entrant réunit :** `toutes`{.action} ou `une de`{.action}

Premier choix (en-tête) :

- **De :** désigne l'adresse e-mail de l'expéditeur, par exemple : « Si l'expéditeur ... »
- **À/Cc :** désigne l'adresse e-mail du destinataire, par exemple : « Si le destinataire ... »
- **Objet :** désigne le contenu du sujet du message, par exemple : « Si le sujet du message ... ».
- **Corps du texte :** indiquez un autre élément à prendre en compte dans l'en-tête de l'e-mail.

Deuxième choix (règle) :

- **spf :** Indiquez une valeur du [champ SPF](/pages/web_cloud/domains/dns_zone_spf) à prendre en compte, par exemple : « ... n'a pas de champ SPF ... ».
- **contient :** exemple : « ... contient ... ».
- **ne contient pas :** exemple : « ... ne contient pas ... ».

Troisième choix (valeur) :

- Exemple : [SPAM]

Quatrième choix (+) :

- Cela vous permet d'ajouter une ou plusieurs conditions pour la même action.

### Déléguations <a name="delegation"></a>

Paramètres d'envoi du délégué` : lorsque vous déléguez votre adresse e-mail à une autre, il est possi
>>
>>    Enregistrer les mails envoyés dans mon dossier « Envoyés »
>>    Enregistrer les mails envoyés dans le dossier « Envoyés » du délégué
>>    Enregistrer les mails envoyés dans mon dossier « Envoyés » et dans celui du délégué
>>    Ne pas enregistrer de copie des mails envoyés

### Identités

liquez sur la roue crantée en haut à droite de votre interface Zimbra, puis sur `Paramètres`{.action}, puis sur `Signatures`{.action} dans la colonne de gauche.

Utilisez des personnages pour modifier rapidement de nombreux paramètres lors de l'envoi d'e-mails. Par exemple, si vous envoyez parfois des e-mails dans un rôle particulier au travail, créez un personnage pour ce rôle.
- Nom de la personne : 
- Depuis Paramètres (Paramètres d'envoi)
   - Envoyer depuis ce compte
   - De nom: (Si cette case est vide, persona utilisera le nom de l'expéditeur du compte.
- Paramètres de réponse 
Réponses directes à une autre adresse e-mail

    Activer

Adresse de réponse
Nom de réponse
Si cette case est vide, le nom de la réponse utilisera le nom de l'expéditeur.
Utilisez cette Persona
Lors de la réponse ou du transfert de messages envoyés à
Activer
Lorsque vous rédigez, répondez ou transférez des messages dans des dossiers
Activer

Use personas to quickly change many settings when sending email messages. For example, if you sometimes send email in a particular role at work, create a persona for that role.
Persona Name
From Settings
Send from this account
From name
If this box is empty, persona will use From name of the sending account.
Reply-to Settings
Direct replies to a different email address

    Enable

Reply-to address
Reply-to name
If this box is empty, reply-to name will use From name of the sending account.
Use This Persona
When replying or forwarding messages sent to
Enable
When composing, replying to or forwarding messages in folders
Enable

### Signature <a name="signature"></a>

Cliquez sur la roue crantée en haut à droite de votre interface Zimbra, puis sur `Paramètres`{.action}, puis sur `Signatures`{.action} dans la colonne de gauche.

Si vous avez créé des identités, vous devrez sélectionner l'identité sur laquelle vous souhaitez créer votre signature. Vous pouvez créer une signature pour la rédaction de vos e-mail et une seconde zone dans laquelle vous pouvez définir une signature différente lorsque vous répondez ou tranmettez un e-mail.

## Aller plus loin

[Premiers pas avec l’offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Modifier le mot de passe d’une adresse e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Créer des filtres pour vos adresses e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
