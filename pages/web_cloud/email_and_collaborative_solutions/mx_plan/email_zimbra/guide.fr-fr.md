---
title: "Utiliser le webmail Zimbra"
excerpt: "Découvrez l'interface du webmail Zimbra pour vos adresses e-mail MX Plan OVHcloud"
updated: 2024-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
>
> **Important**
>
> Le webmail Zimbra pour MX Plan est un produit en cours de déploiement.
>
> Actuellement, il est uniquement disponible dans le cadre de migrations liées à l'évolution de notre offre MX Plan. Cette migration est automatique, un e-mail vous sera envoyé par nos équipes lorsque vous serez concerné par la migration.
>
> Pour plus d'informations, consultez notre [FAQ sur la solution Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra).

## Objectif

Avec l'offre MX Plan OVHcloud, vous pouvez envoyer et recevoir des e-mails depuis un client de messagerie (Thunderbird, Outlook, Mail de Mac) ou via un webmail directement sur le navigateur internet de votre appareil.<br>
OVHcloud fournit un service de webmail appelé Zimbra pour accéder à un compte e-mail de type MX Plan. Sur cette page, nous allons aborder les fonctionnalités indispensables à l'utilisation de ce webmail.

**Découvrez comment utiliser le webmail Zimbra pour vos adresses e-mail MX Plan OVHcloud**

## Prérequis

- Disposer d'une solution e-mail OVHcloud **MX Plan**, proposée parmi nos [offres d’hébergement web](/links/web/hosting), incluse dans un [hébergement gratuit 100M](/links/web/domains-free-hosting), ou commandée séparément comme solution autonome.
- Disposer des informations de connexion à l’adresse e-mail MX Plan que vous souhaitez consulter. Pour plus d'informations, consultez notre guide « [Premiers pas avec l'offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) ».

## En pratique

**Sommaire**

- [Se connecter au webmail Zimbra](#login)
- [Interface générale du webmail Zimbra](#general-interface)
- [Gestion des dossiers de votre compte e-mail](#folders-management)
    - [Les dossiers spéciaux](#folders-specials)
    - [Créer des dossiers](#folders-creation)
 - [Traitement des e-mails](#email-management)
    - [Action sur un e-mail sélectionné](#email-action)
    - [Rechercher un e-mail](#email-search)
- [Rédiger un e-mail](#email-writing)
- [Configurer les préférences de l'interface Zimbra](#settings)
- [Contacts](#contacts)
    - [Gestion des dossiers](#contacts-folders)
    - [Gestion des listes](#contacts-lists)
    - [Importer / Exporter des contacts](#import-export)
- [Calendrier](#calendar)
    - [Gestion des calendriers](#calendar-management)
    - [Tâches](#tasks)
- [Filtres](#filters)
    - [Comprendre comment paramètrer ses filtres](#filters-howto)
    - [Créer un filtre](#filters-creation)
- [Délégations](#delegations)
- [Signatures](#signatures)
- [Réponses automatiques / Répondeur](#auto-reply)

### Se connecter au webmail Zimbra <a name="login"></a>

Rendez-vous sur la page <https://www.ovh.com/fr/mail/>. Saisissez votre adresse e-mail et le mot de passe puis cliquez sur `Connexion`{.action}.

![Zimbra - connexion](images/ovhcloud-login-webmail.png){.thumbnail}

Vous serez alors redirigé vers l'interface Zimbra.

![Zimbra - interface](images/zimbra-01.png){.thumbnail}

### Interface générale du webmail Zimbra <a name="general-interface"></a>

Une fois connecté à votre compte e-mail, vous avez accès à la fenêtre principale de Zimbra qui se compose de 3 zones :

> [!tabs]
> **Menu supérieur**
>>
>> - **(1)** Cette zone de l'interface vous permet de choisir une des fonctionnalités disponibles sur votre compte e-mail, `messagerie` ou `contacts`. Par défaut, vous êtes sur l'onglet `messagerie`.
>> - **(2)** Une barre de recherche vous permet de retrouver des messages ou des contacts.
>> - **(3)** Le menu de gestion du profil de votre compte e-mail et le bouton d'accès aux réglages **(4)**.
>>
>> ![Zimbra - menu supérieur](images/zimbra-02.png){.thumbnail}
>>
> **Colonne de gauche**
>>
>> Par défaut, c'est l'arborescence de votre compte de messagerie, composée de dossiers et sous-dossiers. Le dossier principal étant `Réception`.
>>
>> ![Zimbra - arborescence](images/zimbra-03.png){.thumbnail}
>>
> **Fenêtre centrale**
>>
>> Par défaut, vos e-mails sont affichés dans cette zone qui contient deux parties :
>>
>> - **(1)** la liste des éléments
>> - **(2)** le contenu de l'élément sélectionné
>>
>> ![Zimbra - E-mails](images/zimbra-04.png){.thumbnail}
>>

### Gestion des dossiers de votre compte e-mail (colonne de gauche) <a name="folders-management"></a>

Dans cette zone apparaissent les dossiers présents sur votre compte e-mail. Vous y trouverez les dossiers **spéciaux** déjà présents (en orange) et les dossiers que vous aurez **créés** (en vert).

![Zimbra - dossiers](images/zimbra-05.png){.thumbnail}

#### Les dossiers spéciaux <a name="folders-specials"></a>

Les dossiers spéciaux sont automatiquement créés par le serveur e-mail, ils composent l'essentiel d'un compte e-mail.

- **Réception** : les e-mails sont délivrés par défaut dans ce dossier (hors filtres appliqués).
- **Brouillons** : les e-mails rédigés mais non-expédiés sont sauvegardés dans ce dossier.
- **Envoyé** : les e-mails envoyés sont automatiquement stockés dans ce dossier.
- **Archives** : dossier par défaut pour classer les e-mails traités.
- **SPAM** : dossier où sont stockés les e-mails considérés comme indésirables.
- **Corbeille** : Les e-mails supprimés sont stockés dans ce dossier avant d'être définitivement supprimés.

> [!primary]
>
> Les dossiers spéciaux ne peuvent pas être supprimés.

#### Créer des dossiers <a name="folders-creation"></a>

Pour classer vos e-mails selon vos besoins, vous pouvez créer vos propres dossiers.

Pour créer un dossier, cliquez sur le bouton `+ Ajouter un dossier`{.action} en bas de la colonne.

Vous pouvez également créer un sous-dossier en effectuant un clic droit sur le dossier de votre choix, puis en cliquant sur `Créer un sous-dossier`{.action}.

> [!primary]
>
> Les dossiers « Brouillons », « SPAM » et « Corbeille » ne peuvent pas contenir de sous-dossiers.

### Traitement des e-mails <a name="email-management"></a>

Lorsque vous sélectionnez un dossier ou sous-dossier dans la colonne de gauche, la liste des e-mails contenus dans celui-ci s'affiche dans la colonne au centre. Cliquez ensuite sur l'e-mail de votre choix pour afficher son contenu dans la fenêtre de droite.

> [!primary]
>
> **Type d'affichage**
>
> L'affichage de vos e-mails se présente sous une forme qui peut être modifiée. Pour cela, cliquez le bouton `Afficher`{.action} situé en haut à droite de cette fenêtre.

#### Action sur un e-mail sélectionné <a name="email-action"></a>

Lorsque vous sélectionnez un e-mail est sélectionné, de nombreuses actions sont alors disponibles :

- 1.**Répondre** : répondre directement à l'expéditeur.
- 2.**Répondre à tous** : répondre directement à tous les destinataires présents dans les champs « A » et « Cc ».
- 3.**Transférer** : transférer l'e-mail sélectionné à un ou plusieurs destinataires.
- 4.**Archiver** : déplacer l'e-mail vers le dossier « Archive » de votre compte e-mail.
- 5.**Déplacer** : déplacer l'e-mail vers un des dossiers du compte e-mail.
- 6.**Supprimer** : placer l'e-mail sélectionné dans la « Corbeille ».
- 7.**SPAM** : placer l'e-mail sélectionné directement dans le dossier de courrier indésirable (SPAM).
- 8.**Plus**
    - **Marquer comme lu**.
    - **Marquer comme non lu**.
    - **Étoile** : attribuer une étoile à votre e-mail pour le mettre en évidence et l'identifier plus facilement.
    - **Supprimer l'étoile** : retirer l'étoile attribuée à cet e-mail.
    - **Afficher l'original** : Afficher le message dans son intégralité, corps et en-tête.
    - **Nouveau filtre** : créer un filtre à partir de l'expéditeur et de l'objet du message sélectionné.
    - **Imprimer** : imprimer la conversation ou l'e-mail sélectionné.
- 9.**Afficher** : sélectionner l'une des 3 dispositions pour visualiser vos dossiers et e-mails.

![Zimbra - actions](images/zimbra-07.png){.thumbnail}

Il est possible d'accéder à ces options en réalisant un clic droit sur chacun des e-mails de la colonne centrale.

> [!primary]
>
> Si l'un de vos correspondants demande à ce qu'un accusé de lecture lui soit adressé lorsque vous lisez son e-mail, vous obtiendrez le message-type suivant : `John a demandé un accusé de lecture pour ce mail. Envoyer un accusé de lecture`.
>

#### Rechercher un e-mail <a name="email-search"></a>

Si vous souhaitez retrouver un e-mail, utilisez la barre de recherche dans la partie supérieure de votre interface. Vous pouvez alors faire une **recherche simple** ou une **recherche avancée**, comme décrites dans les onglets ci-dessous :

> [!tabs]
> **Recherche simple**
>>
>> Saisissez le ou les mots clés que vous souhaitez retrouvez dans la barre de recherche et appuyez sur la touche `Entrée` pour valider votre recherche. Le ou les mots apparaîtront en surbrillance dans vos résultats.
>>
>> > Si vous savez où rechercher votre élément, vous pouvez saisir des mots-clés ( **from**, **to**, **cc**, **subject**, etc.) suivis de deux points (`:`) et rechercher l'élément dans la zone de texte de recherche. Par exemple, si vous souhaitez rechercher rapidement un expéditeur, vous pouvez tapez « from: » avant l'adresse e-mail que vous recherchez. Par exemple « from: address@example.com ».
>>
>> ![Zimbra - recherche simple](images/zimbra-08.png){.thumbnail}
>>
> **Recherche avancée**
>>
>> Pour une recherche plus précise, cliquez sur le chevron dans la partie droite de votre barre de recherche. Vous pourrez ainsi restreindre votre recherche à un dossier, une plage horaire, l'objet ou le corps du message, etc.
>>
>> ![Zimbra - recherche avancée](images/zimbra-09.png){.thumbnail}
>>

### Rediger un e-mail <a name="email-writing"></a>

Pour rédiger un nouvel e-mail, cliquez sur le bouton `Nouveau Message`{.action} (1) dans la partie supérieure gauche de votre fenêtre Zimbra.

![Zimbra - rédiger un e-mail](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **En-tête**
>>
>> L'en-tête vous permet de compléter les champs suivants :
>>
>> - **De** : l'adresse depuis laquelle vous envoyez votre e-mail. Par défaut, c'est votre adresse e-mail. Vous pouvez changer votre adresse d'expéditeur en cliquant sur le chevron à droite de votre adresse e-mail, uniquement si une [délégation](#delegations) a été mise en place.<br>
>> - **À** : le(s) destinataire(s) de votre e-mail. Cliquez sur `À`{.action} pour accéder à votre [carnet de contacts](#contacts) et sélectionner vos destinataires.<br>
>> - **Cc** : cliquez sur `Cc/Cci`{.action} à droite du champ `À`{.action} pour afficher ce champ. La copie carbone est un champ destinataire qui permet d'envoyer votre e-mail en copie à des personnes que vous souhaitez intégrer dans une boucle sans pour autant qu'ils soient considérés comme destinataires directs de l'e-mail (contrairement aux destinataires du champ « **À** »).<br>
>> - **CCi** : cliquez sur `Cc/Cci`{.action} à droite du champ `À`{.action} pour afficher ce champ. La copie carbone invisible est un champ destinataire qui permet de transmettre un e-mail sans que les autres destinataires voient la ou les personnes en « **Cci** ».<br>
>> - **Objet** : titre de l'e-mail, premier élément visible à la réception avant d'ouvrir l'e-mail.<br>
>> - `...`{.action} : situé à droite du champ `De`{.action}, il vous donne accès à 3 options :<br>
>>    - Vous pouvez qualifier votre e-mail comme prioritaire en cochant `Haute priorité`.<br>
>>    - Cliquez sur `Demander un accusé de lecture` pour demander une confirmation de lecture du destinataire.<br>
>>    - La fonction `Texte brut` désactivera les fonctions de mise en page HTML de votre e-mail. <br>
>>
>> ![Zimbra - en-tête](images/zimbra-11.png){.thumbnail}
>>
> **Corps de l'e-mail**
>>
>> Pour rédiger le corps de votre e-mail, vous disposez d'une barre d'outils HTML dans la partie inférieure de votre fenêtre. Cela vous permettra une rédaction de vos e-mails avec mise en page, directement via votre navigateur. De plus, le bouton `< >`{.action} (tout à droite dans votre barre d'outils) vous ouvre une fenêtre dans laquelle vous pouvez coller un e-mail pré-rédigé depuis un outil externe.
>>
>> ![Zimbra - corps](images/zimbra-12.png){.thumbnail}
>>

Après avoir rédigé votre e-mail, avant de cliquer sur `Envoyer`{.action}, vous pouvez y attacher une pièce jointe en cliquant sur l'icône de trombone situé à côté du bouton `Envoyer`{.action}.

![Zimbra - pièce jointe](images/zimbra-13.png){.thumbnail}

> [!success]
> **Annuler un envoi**
>
> Si vous avez activé l'option `Annuler l'envoi` dans la rubrique « **Écrire un mail** » des préférences Zimbra, vous pouvez cliquer sur `DEFAIRE`{.action} pour annuler l'envoi.
> Ce bouton reste disponible pendant environ 5 secondes.
>
> ![Zimbra - annuler un envoi](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Configurer les préférences de l'interface Zimbra <a name="settings"></a>

Votre interface Zimbra dispose de 2 menus de configuration :

![Zimbra - préférences](images/zimbra-14.png){.thumbnail}

- **(1) Profil** : cliquez sur le nom de votre compte e-mail dans la partie supérieure droite de votre interface. Depuis ce menu, vous pourrez « **Changer le mot de passe** » de votre adresse e-mail, « **Changer l'image du profil** » ou vous déconnecter en cliquant sur« **Déconnexion** ».

- **(2) Réglages** : cliquez sur la roue crantée en haut à droite de votre interface, pour avoir accès aux changements de « **Langue** » de votre interface. Une rubrique « **Aidez-moi** » vous permet de consulter la documentation officielle de Zimbra. Dans « **Paramètres** » vous retrouvez l'ensemble des éléments de configurations décrits dans les onglets suivants :

> [!tabs]
> **Général**
>>
>> Depuis cet onglet vous retrouvez l'espace occupé sur votre compte e-mail et la possibilité de définir le format d'affichage de la date et l'heure de vos e-mails.
>>
> **Afficher le mail**
>>
>> Retrouvez ici les éléments liés à l'affichage de vos éléments sur votre compte e-mail.
>>
>> - **Lorsque je consulte des listes de mails** : ces options vous permettent d'organiser la liste de vos e-mails par groupes de conversations et afficher plus de détails en aperçu.
>> - **Panneau d'aperçu** : sélectionnez l'une des 3 dispostions pour visualiser vos dossiers et e-mails. Cette option reprend les choix que l'on retrouve sur bouton `Afficher`{.action} lorsqu'on visualise ses e-mails.
>> - **Densité des listes de mails**
>> - **Marquer comme lu** : vous pouvez temporiser le changement d'état de votre e-mail en « lu » lorsque vous cliquez sur celui-ci ou décider de ne rien faire et le laisser en « non-lu » sans action de votre part.
>> - **Vérifier la présence de nouveaux mails** : définissez la fréquence de synchronisation des e-mails reçus depuis votre interface Zimbra.
>> - **Accusés de lecture** : définissez le comportement de Zimbra lorsque vous ouvrez un e-mail avec accusé de lecture.
>> - **Nouvelles notifications de courrier** : activez les notications lorsqu'un message est reçu.
>> - **Afficher les photos dans les mails** : affichez ou non les photos à l'ouverture d'un e-mail.
>> - **Afficher les e-mails en texte brut** : cette option affiche l'e-mail sous un format brut, sans mise en page.
>> - **Afficher les images par défaut dans les e-mails de ces adresses ou domaines de confiance** : définissez les adresses e-mail de confiance pour lesquelles les images peuvent s'afficher à l'ouverture.
>>
> **Écrire un mail**
>>
>> - **Annuler l'envoi** : cette option permet d'afficher une bannière, pendant 5 secondes, permettant d'annuler l'envoi d'un e-mail.
>> - **Demander des accusés de lecture** : cette option transmet une demande d'accusé de lecture à vos destinataires lorsque vous leur envoyez un e-mail.
>> - **Enregistrer une copie dans le dossier Envoyé** : cochée par défaut, cette option enregistre les e-mails envoyés dans le dossier « Envoyé » de votre compte e-mail.
>> - **Délégués**: consultez la rubrique [Délegations](#delegations) de ce guide pour comprendre son utilisation.
>> - **Paramètres d'envoi du délégué** : consultez la rubrique [Délegations](#delegations) de ce guide pour comprendre son utilisation.
>> - **Compositeur** : vous pouvez définir votre style d'écriture par défaut lorsque vous lancez la rédaction d'un e-mail.
>>
> **Signatures**
>>
>> Cet espace vous permet de créer vos signatures.<br>
>>
>> - **Signature standard** : saisissez la signature qui apparaîtra lorsque vous rédigez un nouvel e-mail.
>> - **Signature de réponse ou transmission** : vous permet d'ajouter une signature différente lorsque vous répondez ou transmettez un e-mail.
>>
> **Absent du bureau**
>>
>> Cet onglet désigne la fonctionnalité de « répondeur ». Pour configurer vos répondeurs, consultez la section « [Réponses automatiques / Répondeur](#auto-reply) » de cette documentation.
>>
> **Filtres**
>>
>> Pour configurer vos filtres, consultez la section « [Filtres](#filters) » de cette documentation.
>>
> **Agenda et rappels**
>>
>> Retrouvez ici les paramètres liés à vos [calendriers](#calendar).
>>
>> **Paramètres généraux des agendas**
>>
>> - **Agenda par défaut** : définissez le calendrier utilisé par défaut lorsque vous créez un évènement dans vos calendriers.
>> - **Début de semaine** : le jour qui apparaît en premier dans la grille de votre calendrier.
>> - **Début de journée** : l'heure qui apparaît en haut de l'amplitude horaire affichée.
>> - **Fin de journée** : l'heure qui apparaît en bas de l'amplitude horaire affichée.
>> - **Fuseau horaire** utilisé pour vos calendriers.
>> - **Lors de la création ou l’édition d’évènements** : afficher les fuseaux horaires pour les heures de début et de fin.
>> - **Partage** : `Activer la délégation pour les clients CALDav`. Cette option vous permet de gérer vos calendriers par le biais d'un logiciel prenant en charge le protocole CALdav.
>> - **Événements refusés** : afficher un évènement dans le calendrier, même si il a été refusé.
>>
>> **Rappels d'évènements**
>>
>> - **Envoyer des rappels par courrier électronique à** : envoyer les rappels d'évènements à une adresse e-mail.
>> - **Afficher les notifications du navigateur** : être notifié par votre navigateur internet pour vos évènements.
>> - **Délai de rappel par défaut** : délai de rappel appliqué par défaut lorsque vous l'activez sur un évènement.
>> - **Afficher les rappels pour des évènements échus** : continuer d'envoyer des rappels après un évènement.
>>
>> **Autorisation d’occupation**
>>
>> - **Autorisation pour** : ce paramètre concerne uniquement l'état de disponibilité lié aux calendriers de votre adresse e-mail. Cela signifie que vous pouvez partager votre statut « Occupé » ou « Disponible » avec d'autres adresses e-mail.

### Contacts <a name="contacts"></a>

Cliquez sur `Contacts`, dans la barre supérieure, pour accéder au carnet de contacts. Celui-ci est divisé en **3 parties** :

- **(1) Dossiers** (à gauche) : dans le carnet d'adresses, vous pouvez créer des dossiers pour classer et regrouper les contacts.
- **(2) Liste des contacts** (au centre) : visualisez les contacts du carnet d'adresses ou du dossier sélectionné.
- **(3) Propriétés du contact** ou **Nouveau contact** (à droite) : cette fenêtre s'affiche lorsqu'un contact est sélectionné ou lorsqu'il est en cours de création. Vous pouvez y lire ou modifier les informations d'un contact.

![Zimbra - contacts](images/zimbra-15.png){.thumbnail}

Pour créer un contact, cliquez sur le bouton `Nouveau contact`{.action} en haut de la colonne de gauche.

Complétez les champs selon les informations que vous possédez sur votre contact. Vous pouvez y ajouter une image en cliquant sur l'icône de profil dans la partie supérieure droite du formulaire.

Cliquez ensuite sur `Enregistrer`{.action}.

![Zimbra - nouveau contact](images/zimbra-16.png){.thumbnail}

#### Gestion des dossiers de contacts <a name="contacts-folders"></a>

Comme pour les e-mails, les dossiers de contacts spéciaux sont automatiquement créés par le serveur e-mail.

- **Contacts** : les contacts sont stockés par défaut dans ce dossier.
- **Corbeille** : les contacts supprimés sont stockés dans ce dossier avant d'être définitvement supprimés.
- **Contacts par e-mail** : les contacts avec lesquels vous avez échangé sont sauvegardés dans ce dossier.

Vous pouvez créer des dosssiers et des sous-dossiers. Ils permettent de classer les contacts en sous-ensembles. Vous retrouverez ainsi plus facilement un contact dans un dossier que vous aurez créé plutôt que dans l'ensemble de votre carnet d'adresses.

Pour créer un dossier, cliquez sur le bouton `+ Ajouter un dossier`{.action} en bas de la colonne de gauche.

Vous pouvez également créer un sous-dossier en effectuant un clic droit sur le dossier de votre choix, puis en cliquant sur `Créer un sous-dossier`{.action}. Les dossiers « Contacts par e-mail » et « Corbeille » ne permettent pas la création de sous-dossiers.

Pour déplacer un contact dans un des dossiers, sélectionnez le contact dans la colonne du milieu puis, dans la fenêtre du contact qui apparaît à droite, cliquez sur le bouton `Déplacer`{.action}. Sélectionnez alors le dossier que vous souhaitez attribuer au contact.

![Zimbra - dossiers de contacts](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> Lorsque vous créez un contact à partir d'un dossier sélectionné, le contact sera alors automatiquement ajouté à ce dossier.

#### Gestion des listes <a name="contacts-lists"></a>

Vous pouvez associer un contact à une ou plusieurs listes. Les listes permettent de grouper des contacts pour faciliter l'envoi commun d'un e-mail à tous ces contacts. Par exemple, pour envoyer un e-mail a un grand nombre de destinataires réguliers, il vous suffira d'ajouter simplement le nom de votre liste en destinataire, au lieu d'ajouter un à un les contacts d'une liste.

Pour créer une liste, cliquez dans l'encadré intitulé `Nouvelle liste` en bas de la colonne de gauche et saisissez un nom pour votre liste.

Pour affecter un contact à l'une de vos listes, sélectionnez le contact dans la colonne du milieu puis, dans la fenêtre qui apparaît à droite, cliquez sur `Affecter à des listes`{.action}. Cochez la ou les listes que vous souhaitez attribuer au contact. Vous pouvez également saisir le nom d'une nouvelle liste et cliquer sur `Ajouter`{.action}.

![Zimbra - listes](images/zimbra-list.png){.thumbnail}

#### Importer / Exporter des Contacts <a name="import-export"></a>

Sélectionnez l'un des deux onglets suivants :

> [!tabs]
> **Importer les Contacts**
>>
>> Depuis la fenêtre `Contacts`, faites un clic droit sur le dossier de contacts de votre choix, à l'exception des dossiers « Contacts par e-mail » et « Corbeille » qui ne permettent pas l'import et l'export de contacts.<br>
>>
>> Cliquez ensuite sur `Importer`{.action} pour ouvrir la fenêtre d'importation. Le bouton `Browse...` vous permet d'aller récupérer le fichier contenant vos contacts au format « .csv » ou « .vcf ». <br><br>
>> ![Zimbra - Importer](images/zimbra-19.png){.thumbnail}
>>
> **Exporter les Contacts**
>>
>> Depuis la fenêtre `Contacts`, faites un clic droit sur le dossier de contacts de votre choix, à l'exception des dossiers « Contacts par e-mail » et « Corbeille » qui ne permettent pas l'import et l'export de contacts.
>>
>> Cliquez ensuite sur `Exporter`{.action} pour ouvrir la fenêtre d'exportation. Choisissez le type de fichier que vous souhaitez exporter puis cliquez sur `Exporter maintenant`{.action}.<br><br>
>> ![Zimbra - Exporter](images/zimbra-20.png){.thumbnail}
>>

### Calendrier <a name="calendar"></a>

Cliquez sur l'icône `Agenda`, dans la barre supérieure, pour accéder au carnet de contacts. Celui-ci est divisé en **3 parties** :

- **(1) Liste des calendriers** (à gauche) : gérez vos différents calendriers et sous-calendriers.
- **(2) Contenu des calendriers** (au centre) : visualisez le contenu des calendriers et sous-calendriers sélectionnés.
- **(3) Liste des tâches** (à droite) : gérez vos tâches et listes de tâches.

![Zimbra - calendar](images/zimbra-calendar-view.png){.thumbnail}

#### Gestion des calendriers <a name="calendar-management"></a>

Par défaut, dans la liste `Mes agendas`, vous avez un `Calendrier` créé par défaut. Ce calendrier par défaut ne peut pas être supprimé mais vous verrez cependant qu'il est possible de créer vos propres calendriers dans le paragraphe suivant.

##### 1- Créer un calendrier <a name="calendar-add-calendar"></a>

- **(1)** : Pour créer un calendrier, passez votre curseur sur `Mes agendas` dans la colonne de gauche et cliquez sur le bouton `+`. Saisissez un nom et définissez une couleur, puis cliquez sur `Enregistrer`{.action}

Il est également possible de créer des sous-calendriers.

- **(2)** : Pour créer un sous-calendrier, passez votre curseur sur le calendrier pour lequel vous souhaitez en créer un, puis faites un clic droit pour afficher le menu déroulant. Cliquez sur `Ajouter un sous-calendrier`. Saisissez un nom et définissez une couleur, puis cliquez sur `Enregistrer`{.action}

![Zimbra - calendar](images/zimbra-calendar-add.png){.thumbnail .w-400}

##### 2- Ajouter un évènement <a name="calendar-add-event"></a>

- **(1)** : Cliquez sur `Nouvel évènement`{.action} dans le coin supérieur gauche.
- **(2)** : Cliquez sur la plage horaire de votre calendrier dans laquelle vous souhaitez ajouter un événement. Pour un ajout simplifié, il vous suffit de définir un titre pour l'évènement et un lieu puis de cliquer sur `Enregistrer`{.action}. Pour ajouter plus de détails sur votre évènement, cliquez sur `Ajouter d'autres détails`{.action}

![Zimbra - calendar](images/zimbra-calendar-event-add-01.png){.thumbnail .w-400}

- **Début** : la date et l'heure de début de votre évènement. Si vous cochez `Toute la journée`, vous n'aurez pas d'heure de début et de fin à saisir car l'ensemble de la journée sera pris en compte.
- **Fin** : la date et l'heure de fin de votre évènement.
- **Répétition** : s'il s'agit d'un évènement récurrent, définissez sa fréquence.
- **Lieu** : le lieu où va se dérouler l'évènement, comme le nom d'une salle de réunion par exemple.
- **Équipement** : en cliquant sur `Afficher l'équipement`{.action}, vous faites apparaître cette ligne pour définir un équipement partagé que vous allez utiliser pour votre évènement.
- **Invités** : les adresses e-mail des participants à l'évènement.
- **Remarques** : message qui sera transmis aux invités de l'évènement.
- **Rappel** : être prévenu avant le début de l'évènement.
- **Afficher comme** : définir si l'évènement rend ses invités disponibles ou indisponibles pendant son déroulement
- **Agenda** : définir à quel calendrier est associé l'évènement.

Une fois votre évènement défini, cliquez sur `Enregistrer`{.action}.

![Zimbra - calendar](images/zimbra-calendar-event-add-02.png){.thumbnail .w-400}

##### 3- Modifier un évènement <a name="calendar-modify-event"></a>

#### Tâches <a name="tasks"></a>

Les tâches sont des éléments dissociés de vos calendriers. Elles ont pour objectif de lister des tâches à effectuer sans pour autant y attacher une date d'exécution ou de temporalité. Ces tâches sont complémentaires aux calendriers.

La liste « Tâches » existe par défaut, elle ne peut pas être supprimée mais vous pouvez créer vos propres listes de tâches.

- **(1)** : Pour créer une tâche, cliquez sur le bouton `...`{.action} puis sur `Nouvelle tâche`{.action}  ou simplement sur le bouton `+`{.action} à côté de votre liste de tâches.

- **(2)** : Pour créer une nouvelle liste de tâches, cliquez sur le bouton `...`{.action} puis sur `Créer une liste`{.action}.

![Zimbra - calendar](images/zimbra-calendar-task-01.png){.thumbnail .w-400}

Lorsque vous créez une tâche, il est possible de définir une date d'échéance et une priorité qui vous permettront de les classer selon leur importance, ainsi qu'un menu déroulant pour sélectionner la liste de tâches correspondante.

Cliquez ensuite sur `Enregistrer`{.action} pour finaliser la création de votre tâche.

![Zimbra - calendar](images/zimbra-calendar-task-02.png){.thumbnail .w-400}

#### Filtres <a name="filters"></a>

#### Comprendre comment paramétrer ses filtres <a name="filters-howto"></a>

La mise en place de filtres sur votre compte e-mail est un paramètre important qui vous permet de mettre en place un système de tri automatique à la réception de vos e-mails.

Une règle de filtrage dans Zimbra est composée de 4 éléments :

1 - [Champ de comparaison](#filters-comp-field) : sur quelle partie de l'e-mail le filtre va s'appliquer.<br>
2 - [Opérateur de comparaison](#filters-comp-operator) : avec quelle précision le filtre devra-t-il être appliqué.<br>
3 - [Valeur](#filters-value) : quels mots/éléments de l'e-mail seront ciblés par le filtre.<br>
4 - [Actions du filtre](#filters-action) : que va faire le filtre sur l'e-mail.<br>

![Zimbra - filtres](images/zimbra-filters.png){.thumbnail}

> Exemple : Si le champ **Objet (1)** de l'e-mail **contient (2)** le mot `facture`**(3)**, alors **transférer à (4)** l'adresse `comptabilite@example.com`.

Dans les sous-chapitres qui suivent, vous trouverez le détail de chacun des éléments d'une règle de filtrage.

##### 1 - Champ de comparaison <a name="filters-comp-field"></a>

Le champ de comparaison désigne la section de l'e-mail à vérifier pour l'opérateur de comparaison. Les champs de comparaison peuvent inclure les champs suivants:

- **De** : spécifier un expéditeur dans le champ « De » de l'e-mail.
- **À** : rechercher les noms de destinataires dans le champ « To ».
- **Cc** : rechercher les noms de destinataires en copie dans le champ « Cc ».
- **Objet** : spécifier des éléments dans l'objet de l'e-mail.
- **En-tête nommé** : lorsque cette option est sélectionnée, un champ de saisie supplémentaire apparaît avant l'opérateur de comparaison. Ce champ vous permet de saisir n'importe quels éléments de l'en-tête d'un e-mail. Vous pouvez spécifier les champs standard « De », « À », « Objet », ou d'autres champs pouvant être présents dans l'en-tête de l'e-mail. Par exemple, certains serveurs e-mail peuvent ajouter dans l'en-tête des champs particuliers que vous pouvez intégrer dans votre règle de filtrage, à l'aide de ce champ de comparaison.
- **Corps du texte** : désigne les mots contenus ou non dans le corps de l'e-mail.

##### 2 - Opérateur de comparaison <a name="filters-comp-operator"></a>

En fonction du champ de comparaison désigné précédemment, l'opérateur de comparaison déterminera le niveau de correspondance à appliquer sur la valeur.

> [!primary]
>
> Les opérateurs de comparaison disponibles varient en fonction du champ de comparaison que vous avez sélectionné.

- **Correspond exactement / Ne correspond pas exactement** : ce que vous allez saisir doit correspondre exactement.<br>
    *Exemple*, en indiquant que l'objet de l'e-mail correspond exactement à « maison », la correspondance se fera uniquement avec « maison » et non avec « maisons » ou « une maison bleue ».

- **Contient / Ne contient pas** : ce que vous allez saisir doit être présent dans le(s) champ(s).<br>
    *Exemple*, en indiquant que l'objet de l'e-mail doit contenir « maison », la correspondance se fera avec « maison », « maisons » et aussi « une maison bleue».

- **Correspond aux caractères joker / Ne correspond pas aux caractères joker** : spécifie que le sujet doit correspondre à la chaîne spécifiée, qui inclut des caractères génériques.

- **Existe / N'existe pas** : spécifie que le champ de comparaison spécifié doit exister ou ne doit pas exister dans le message. Cet opérateur de comparaison est utilisé avec les champs de comparaison « En-tête nommé ».

> **Utilisation de caractères joker dans les filtres**
>
> Les caractères joker, caractères génériques ou encore appelés « wildcard » peuvent être utilisés dans le champ de saisie pour la comparaison qui utilisent l’opérateur de comparaison « **Correspond aux caractères joker / Ne correspond pas aux caractères joker** ». Les deux caractères génériques sont `*` et `?`.
>
> - L'astérisque `*` est un espace réservé pour zéro ou plusieurs caractères de n'importe quel type.<br><br> Par exemple, pour la chaîne de recherche « maison\*bleue », elle renverrait les correspondances « maison bleue », « maisons » ou encore « maison en bois bleue ». Cependant, il ne renverrait pas « super-maison en bois bleue ». <br><br> Autre exemple de chaîne de recherche « p\*maison » qui renverrait les correspondances « petite maison », « partir de sa maison ». Cependant, il ne renverrait pas « prêter sa maison à un ami ».
>
> - Le point d'interrogation `?` est un espace réservé pour exactement un seul caractère.<br><br>Par exemple, pour la chaîne de recherche « maison?bleue », elle renverrait les correspondances « maison bleue », « maison-bleue », « maison_bleue ».
>

##### 3 - Valeur <a name="filters-value"></a>

Une fois votre champ et votre opérateur de comparaison sélectionnés, vous devez saisir, dans la case correspondante, la valeur à laquelle ils doivent correspondre.

##### 4 - Actions du filtre <a name="filters-action"></a>

Le champ `Alors` définit l'action à effectuer sur l'e-mail qui remplit les conditions du filtre . Les actions de filtrage peuvent inclure la suppression, le tri et même le marquage du courrier entrant.

- **Garder dans le dossier Réception** : enregistre les e-mails dans votre boîte de réception. Si aucune des règles de filtrage ne correspond à un e-mail, cette action a lieu par défaut.
- **Activer le dossier** : déplace l'e-mail vers un dossier spécifié.
- **Supprimer Définitivement** : supprime le message électronique sans le remettre. Le message ne se trouve dans aucun de vos dossiers, y compris la corbeille.
- **Transférer à** : transfère l'e-mail à l'adresse que vous spécifiez.
- **Marquer comme lu**
- **Étoile** : marque votre e-mail avec une étoile.

#### Créer un filtre <a name="filters-creation"></a>

Pour accèder à la création de filtres, cliquez sur la roue crantée en haut à droite de votre interface Zimbra puis sur `Paramètres`{.action} et enfin sur `Filtres`{.action} dans la colonne de gauche.

![Zimbra - créer un filtre](images/zimbra-21.png){.thumbnail}

Si des filtres existent, vous retrouverez la liste selon leur ordre d'application :

- **(1)** Vous pouvez afficher un aperçu de chaque filtre en cliquant sur le bouton `...`{.action} à droite du filtre puis sur `Détails`{.action}. Le bouton `Appliquer`{.action} permet de lancer l'action paramétrée pour ce filtre.

- **(2)** Ce bouton s'utilise comme une poignée, il vous permet de déplacer le filtre dans la liste pour lui attribuer un ordre d'application. En effet, chaque filtre est appliqué selon l'ordre qui est défini dans la liste.

Cliquez sur le bouton `+ Ajouter un filtre`{.action} pour lancer sa création. La fenêtre du mode simple s'affiche par défaut. Vous pouvez passer en mode avancé en cliquant sur `Passer à avancé`{.action} pour disposer de tous les opérateurs de comparaison. N'hésitez pas à vous aider de la section « [Comprendre comment paramétrer ses filtres](#filters-howto) ».

> [!tabs]
> **Mode simple**
>>
>> ![Zimbra - filtres - mode simple](images/zimbra-22.png){.thumbnail}
>>
> **Mode avancé**
>>
>> ![Zimbra - filtres - mode avancé](images/zimbra-23.png){.thumbnail}
>>

### Délégations <a name="delegations"></a>

Pour accèder au paramètre de délégation, cliquez sur la roue crantée en haut à droite de votre interface Zimbra puis sur `Paramètres`{.action} et enfin sur `Ecrire un mail`{.action} dans la colonne de gauche.

Il est possible de déléguer votre compte e-mail à un autre compte e-mail. Celui-ci doit impérativement partager la même plateforme e-mail.

> [!primary]
>
> Un compte e-mail du même nom de domaine mais sur une autre offre e-mail ne peut pas recevoir la délégation.

![email](images/zimbra-delegation.png){.thumbnail}

**(1) Délégués**. Pour déléguer votre compte e-mail à un autre compte, cliquez sur `Ajouter des délégués`{.action}.

- **Envoyer comme** : la personne déléguée pourra envoyer un e-mail avec votre adresse e-mail, exactement comme si vous l'aviez envoyé. Le destinataire n'aura pas mention de l'adresse e-mail du délégué.
- **Envoyer de la part de** : la personne déléguée pourra envoyer un e-mail avec son adresse e-mail avec une mention « de la part de » votre adresse e-mail. Le destinataire a donc la mention des deux adresses e-mail impliquées dans l'échange.

**(2) Paramètres d'envoi du délégué**. Lorsque vous déléguez votre adresse e-mail à une autre, vous pouvez :

- **Enregistrer les mails envoyés dans mon dossier « Envoyés »** : si la personne déléguée sur votre compte envoie un e-mail depuis votre adresse e-mail, cet e-mail apparaîtra dans votre dossier « Envoyés ».
- **Enregistrer les mails envoyés dans le dossier « Envoyés » du délégué** : si la personne déléguée sur votre compte envoie un e-mail depuis votre adresse e-mail, cet e-mail apparaîtra dans son dossier « Envoyés ».
- **Enregistrer les mails envoyés dans mon dossier « Envoyés » et dans celui du délégué** : si la personne déléguée sur votre compte envoie un e-mail depuis votre adresse e-mail, cet e-mail apparaîtra dans votre dossier « Envoyés »  ainsi que dans son dossier « Envoyés ».
- **Ne pas enregistrer de copie des mails envoyés** : si la personne déléguée sur votre compte envoie un e-mail depuis votre adresse e-mail, il n'y aura aucune copie de faite.

### Signature <a name="signatures"></a>

Cliquez sur la roue crantée en haut à droite de votre interface Zimbra puis sur `Paramètres`{.action} et enfin sur `Signatures`{.action} dans la colonne de gauche.

Retrouvez les détails de configuration dans la section « [Configurer les préférences de l'interface Zimbra](#settings) » de ce guide (cliquez sur l'onglet « **Signatures** »).

### Réponses automatiques / Répondeur <a name="auto-reply"></a>

Lorsque vous êtes absent et que vous ne pouvez pas consulter votre compte e-mail, vous pouvez mettre en place un message d'absence qui sera automatiquement envoyé a l'expéditeur. Dans le webmail Zimbra, cette fonctionnalité est nommée « Absent du bureau ».

Pour accèder à la gestion de votre répondeur, cliquez sur la roue crantée en haut à droite de votre interface, puis sur `Paramètres`{.action} et enfin sur `Absent du bureau`{.action}.

Par défaut, l'option `Activer la réponse automatique pendant ces dates (incluses)` est désactivée. Cochez cette case pour activer la réponse automatique. Vous avez maintenant la possibilité de saisir le contenu de votre message d'absence dans le champ de saisie.

- Si vous ne savez pas quand vous souhaitez arrêter la réponse automatique, cochez la case `Pas de date de fin`.
- Le bouton `M'envoyer une copie du message en absence`{.action} vous envoie un aperçu de cette réponse automatique dans votre boite de réception.
- `Expéditeurs externes` : vous pouvez définir un message différent lorsque l'expéditeur est externe à votre nom de domaine et/ou de votre carnet d'adresses. Par défaut, tous les expéditeurs reçoivent le même message.

## Aller plus loin

[Premiers pas avec l’offre MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Modifier le mot de passe d’une adresse e-mail MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Créer des filtres pour vos adresses e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
