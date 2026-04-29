---
title: "Configurer et utiliser Git avec son hébergement web OVHcloud"
excerpt: "Découvrez comment configurer et utiliser Git avec votre hébergement web dans votre espace client OVHcloud"
updated: 2026-05-04
---

## Objectif

Dans le paysage numérique actuel, les sociétés sont de plus en plus dynamiques et innovantes. La capacité à gérer et à déployer efficacement le code de son site web est essentielle pour maintenir la compétitivité et la pérennité de votre marque. Git, système de gestion de versions le plus utilisé au monde, permet de stocker le code de votre site web sur des plateformes comme GitHub, permettant une meilleure traçabilité des modifications, ainsi qu'une automatisation et des déploiements plus rapides. En tant que client OVHcloud, vous bénéficiez d'une infrastructure robuste pour héberger votre site web, tout en exploitant les nombreux avantages de Git et de GitHub pour le développement et l'évolution de votre site web.

**Découvrez comment configurer et utiliser Git avec votre hébergement web depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Posséder un compte [GitHub](https://github.com/) et y être connecté.

> [!primary]
>
> A date, seule la plateforme GitHub est supportée dans le cadre de l'utilisation avec les services d'hébergement Web OVHcloud.

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

> [!primary]
>
> Pour l'association et la configuration de Git, vous devrez effectuer des modifications dans votre compte GitHub. Avant de commencer le guide, connectez-vous à votre compte GitHub.

### Associer un répertoire à Git <a name="associateGitRepo"></a>

> [!warning]
>
> Lorsque vous associez un répertoire à Git, tous les noms de domaine présents sur ce répertoire seront également associés à Git. Par exemple, si le répertoire correspondant au site web que vous associez est `www`, alors tous les noms de domaine associés au répertoire `www` seront également associés à Git.

<!-- CP-STEPS-START:associate-git-repo -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Associer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Le formulaire d'association de Git s'affiche. Plusieurs éléments doivent être configurés :
>>
>> - Dépôt GitHub
>> - Branche du dépôt GitHub
>> - Clé SSH (pour un dépôt GitHub privé)
>> - Webhook (optionnel)
>>
>> Poursuivez la lecture de ce guide afin d'obtenir les informations nécessaires pour compléter les champs requis.
<!-- CP-STEPS-END:associate-git-repo -->

<!-- CP-STEPS-START:git-association-form -->
#### Définir le dépôt GitHub

Renseignez l'adresse de votre dépôt GitHub. Si vous n'avez pas encore de dépôt GitHub pour votre projet, créez-en un.

Pour créer un nouveau dépôt :

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Your repositories`{.action}.
- Sur la droite de l'écran qui s'affiche, cliquez sur `New`{.action}.

Définissez un nom pour votre dépôt et remplissez les informations demandées.

> [!warning]
>
> Cochez l'option `Add a README file` pour que GitHub initialise correctement votre dépôt.

Enfin, cliquez sur `Create Repository`{.action}.

Copiez l'adresse de votre dépôt GitHub. Celle-ci doit être de la forme :

- `https://github.com/<username>/<repository_name>.git` pour un dépôt public.
- `git@github.com:<username>/<repository_name>.git` pour un dépôt privé.

Retournez sur le formulaire d'association de Git et collez l'adresse de votre dépôt GitHub dans le champ `Dépôt`. Si le format de l'adresse n'est pas correct, le message d'erreur suivant apparaît :

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Définissez maintenant la branche de votre dépôt GitHub. La branche par défaut est `main`, mais si vous voulez utiliser une autre branche, créez-en une sur GitHub en suivant les étapes ci-dessous :

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Your repositories`{.action}.
- Dirigez-vous dans le dépôt GitHub concerné.
- Cliquez sur `Main`{.action}, puis sur `View all branches`{.action}, ou cliquez directement sur l'onglet `x Branch`{.action}.
- À droite de l'écran qui s'affiche, cliquez sur `New branch`{.action}. 
- Indiquez le nom de la nouvelle branche et confirmez en cliquant sur `Create new branch`{.action}.

Retournez sur le formulaire d'association de Git de votre espace client OVHcloud et indiquez le nom de la nouvelle branche que vous venez de créer.

Si vous renseignez l'adresse d'un dépôt GitHub privé (de type `git@github.com:<username>/<repository_name>.git`), un champ `SSH key` (clé SSH) s'affichera sous le champ `Branch`.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Pour configurer votre clé SSH, consultez l'étape « Associer une clé SSH à GitHub (uniquement pour les dépôts GitHub privés) » ci-dessous.

#### Associer une clé SSH à GitHub (uniquement pour les dépôts GitHub privés) <a name="linkSSHKey"></a>

> [!primary]
>
> **Pourquoi la clé SSH est-elle nécessaire uniquement pour un dépôt privé ?**
>
> Lorsque votre dépôt GitHub est public, les fichiers peuvent être récupérés sans authentification, ce qui signifie que Git peut cloner et mettre à jour le code sans avoir besoin d'une clé SSH. En revanche, si votre dépôt est privé, GitHub exige une authentification pour y accéder. La clé SSH permet alors d’établir cette connexion sécurisée et de garantir que seuls les utilisateurs autorisés puissent interagir avec le dépôt.

> [!primary]
>
> La génération d'une clé SSH est une étape cruciale, car elle établit une connexion sécurisée et chiffrée entre le répertoire de votre site web et le dépôt GitHub. Cette clé assure que les transferts de données et les modifications de code se font de manière sûre et authentifiée, prévenant les accès non autorisés et garantissant l'intégrité du code.

Copiez votre clé SSH en cliquant sur le bouton à droite.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Enregistrez la clé SSH sur votre compte GitHub :

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Settings`{.action}.
- Sur la nouvelle page, cliquez sur `SSH and GPG keys`{.action} dans la colonne de gauche.
- Sélectionnez `New SSH key`{.action} ou `Add SSH key`{.action}.

Le formulaire d'ajout d'une nouvelle clé SSH s'affiche :

- **Title** : ajoutez une description pour votre clé SSH. Par exemple, vous pouvez nommer cette clé « OVHcloud ». 
- **Type of key** : laissez la valeur par défaut `authentication key`
- **Key** : collez votre clé SSH.

Pour valider les informations, cliquez sur `Add SSH key`{.action}. Si vous y êtes invité, confirmez l'accès à votre compte dans GitHub.

#### Configurer le déploiement automatique

En bas du formulaire d'association de Git, une section `Configuration du déploiement automatique`{.action} s'affiche, accompagnée de l'URL de webhook. Configurer un webhook permet à votre dépôt GitHub de notifier automatiquement votre hébergement web OVHcloud des événements qui se produisent sur le dépôt GitHub (nouveau déploiement, changement dans le code, etc.). Cette fonctionnalité est particulièrement utile si vous travaillez en groupe sur le même projet et que vous souhaitez rester à jour de toutes les modifications du dépôt GitHub. Pour en savoir plus, découvrez comment [configurer un webhook sur GitHub](#configureWebhook).

#### Valider l'association de Git

Avant de valider le formulaire d'association de Git, assurez-vous que :

- Votre clé SSH a bien été enregistrée dans votre compte GitHub.
- L'adresse de votre dépôt GitHub est correcte. Elle doit être de la forme `https://github.com/<username>/<repository_name>.git`.
- Le nom de la branche du dépôt GitHub est correct.
- Votre répertoire d'installation est vide.

Pour valider les informations du formulaire d'association de Git, cliquez sur `Appliquez la configuration`{.action}.
<!-- CP-STEPS-END:git-association-form -->

### Activation de l'association de Git

<!-- CP-STEPS-START:git-activation-status -->
#### Succès de l'association de Git

Après avoir validé le formulaire d'association de Git, vous êtes redirigé sur la page de l'onglet `Mes sites`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Une bannière verte vous indique que Git est en cours d'activation. Suivez l'activation de Git en cliquant sur le lien `Tâche en cours`{.action}.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

Le statut `En cours`{.action} indique que l'association de Git est en cours. Le processus peut prendre plusieurs minutes. Lorsque la tâche est achevée, le statut `Activé`{.action} s'affiche.

Vous pouvez également suivre l'évolution de l'activation de Git depuis l'onglet `Mes sites`{.action}. Dans la colonne `Git`{.action} du tableau, la mention `En cours`{.action} présente sur la ligne du site web concerné vous indique que Git est en cours d'activation.

Lorsque l'association de Git est effectuée, le statut `Activé`{.action} apparaît dans la colonne `Git`{.action} pour le site web concerné.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Erreurs de l'association de Git

Dans le tableau de l'onglet `Mes sites`{.action}, identifiez les lignes correspondant au répertoire du site web que vous voulez associer à Git. Dans la colonne `Git`, si la mention `Erreur` apparaît, cela signifie qu'au moins une des erreurs suivantes est survenue :

- La clé SSH n'a pas été enregistrée dans votre compte GitHub.
- Le répertoire d'installation n'est pas vide.
- L'adresse du dépôt GitHub n'existe pas ou est erronée.
- La branche du dépôt GitHub n'existe pas ou son nom est erroné.

Pour connaître la cause exacte de l'erreur, consultez les informations du dernier déploiement. Dans le tableau, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Informations du dernier déploiement`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Une fois le(s) erreur(s) identifiée(s), associez Git à nouveau. Recommencez l'opération en cliquant sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Associer Git`{.action}.
<!-- CP-STEPS-END:git-activation-status -->

### Déployer votre dépôt GitHub sur votre hébergement web OVHcloud

<!-- CP-STEPS-START:deploy-github-repo -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Déployer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 4**
>>
>> Un message de confirmation s'affiche, ainsi qu'une case à cocher vous indiquant qu'en cas de conflit lors du déploiement, vous pouvez forcer les modifications distantes (du dépôt GitHub) sur votre dépôt local. Cochez ou non la case selon votre choix, puis cliquez sur `Confirmer`{.action} pour valider le déploiement.
>>
>> > [!warning]
>> >
>> > Pour éviter de perdre vos modifications locales, pensez à les enregistrer avant de les écraser par les modifications de la branche distante.
>>
>> La nouvelle version de votre site web a bien été déployée sur votre hébergement web OVHcloud. Si d'autres personnes travaillent sur le même projet et apportent des modifications au dépôt GitHub, vous pouvez [configurer un webhook sur GitHub](#configureWebhook) afin que leurs modifications soient automatiquement déployées sur votre hébergement web. Cela vous évite de déployer Git manuellement, et votre site web restera toujours à jour.
<!-- CP-STEPS-END:deploy-github-repo -->

### Modifier un nom de domaine

<!-- CP-STEPS-START:modify-domain-name -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `>`{.action} situé à gauche du nom du site web concerné pour afficher les noms de domaine et sous-domaines associés.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Modifier un domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Deux scénarios sont possibles :
>>
>> **1 - Un ou plusieurs autres noms de domaine sont attachés au site web**
>>
>> La fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Modifiez les informations selon vos besoins et cliquez sur `Suivant`{.action}.
>>
>> Une deuxième fenêtre de confirmation s'affiche avec le récapitulatif de vos changements :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider les modifications de votre nom de domaine.
>>
>> **2 - Un seul nom de domaine est attaché au site web**
>>
>> La fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Comme le message l'indique, [supprimez votre association Git](#deleteGitAssociation) dans un premier temps avant de modifier votre nom de domaine.
<!-- CP-STEPS-END:modify-domain-name -->

### Détacher un nom de domaine

<!-- CP-STEPS-START:detach-domain-name -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `>`{.action} situé à gauche du nom du site web concerné pour afficher les noms de domaine et sous-domaines associés.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Détacher le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 4**
>>
>>  Deux scénarios sont possibles :
>>
>> **1 - Un ou plusieurs autres noms de domaine sont attachés au site web**
>>
>> La fenêtre suivante s'affiche.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider le détachement de votre nom de domaine.
>>
>> **2 - Un seul nom de domaine est attaché au site web**
>>
>> La fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Comme le message l'indique, [supprimez votre association Git](#deleteGitAssociation) dans un premier temps avant de détacher votre nom de domaine.
<!-- CP-STEPS-END:detach-domain-name -->

### Configurer Git

<!-- CP-STEPS-START:configure-git -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Configurer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 4**
>>
>> Les informations suivantes s'affichent :
>>
>> - Clé SSH : Si vous ne l'avez pas déjà fait, [enregistrez votre clé SSH dans votre compte GitHub](#linkSSHKey).
>> - Dépôt : Adresse de votre dépôt Git. Ce champ est grisé car vous ne pouvez pas modifier l'adresse du dépôt Git. Pour changer l'URL du dépôt Git, vous devez [supprimer l'association Git de votre répertoire](#deleteGitAssociation) puis à nouveau [associer le répertoire à Git](#associateGitRepo).
>> - Branche : Nom de la branche du dépôt GitHub. Vous pouvez si besoin modifier ce champ.
>> - URL de webhook : Si vous souhaitez optimisez vos déploiements sur Git, [configurez le webhook sur GitHub](#configureWebhook).
<!-- CP-STEPS-END:configure-git -->

### Informations du dernier déploiement

Après avoir déployé votre dépôt GitHub sur votre hébergement web, vous pouvez consulter les informations sur le dernier déploiement, comme les erreurs, les tests ou toute information utile. 

<!-- CP-STEPS-START:latest-deployment-info -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Informations sur le dernier déploiement`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Retrouvez sur cet écran toutes les informations relatives au dernier déploiement.
<!-- CP-STEPS-END:latest-deployment-info -->

### Supprimer l'association de Git <a name="deleteGitAssociation"></a>

<!-- CP-STEPS-START:delete-git-association -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Supprimer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 4**
>>
>> La fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> Le message vous informe que la suppression s'appliquera sur l'ensemble des noms de domaine attachés à votre site web. Cochez la case `Souhaitez-vous vider le contenu du répertoire <votre_repertoire>`{.action} si vous voulez également supprimer le contenu (dossiers et fichiers) du répertoire.
>>
>> 1\.	Si vous cochez la case, la fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association Git de votre répertoire ainsi que de son contenu.
>>
>> 2\.	Si vous ne cochez pas la case, la fenêtre suivante s'affiche :
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association Git de votre répertoire.
<!-- CP-STEPS-END:delete-git-association -->

### Configurer un webhook sur GitHub

#### Récupérer l'URL du webhook

> [!primary]
>
> Si vous êtes déjà dans le formulaire d'association de Git, copiez l'URL du webhook et passez à l'étape « [Configurer le webhook](#configureWebhook) ».

<!-- CP-STEPS-START:configure-webhook -->
Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Configurer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 4**
>>
>> En bas du formulaire qui s'affiche, copiez l'adresse contenue dans le champ `URL de webhook`{.action}. Vous devez maintenant enregistrer l'URL et configurer le webhook sur votre compte GitHub.
<!-- CP-STEPS-END:configure-webhook -->

#### Configurer le webhook <a name="configureWebhook"></a>

Connectez-vous à votre compte GitHub et accédez au dépôt sur lequel vous souhaitez configurer le webhook. Dirigez-vous sur l'onglet `Settings`{.action} puis, dans le menu latéral des paramètres, cliquez sur `Webhooks`{.action}. Cliquez sur le bouton `Add webhook`{.action} pour accéder au formulaire :

- **Payload URL** : entrez l'URL fournie dans le formulaire d'association de Git (`URL de webhook`{.action}).
- **Content type** : choisissez `application/json`{.action} comme type de contenu pour les données envoyées.
- **Secret** : le secret est facultatif. GitHub l'utilisera pour signer les messages envoyés par le webhook, renforçant ainsi la sécurité.
- **SSL verification** : si votre site web supporte le HTTPS, laissez cette option activée pour une sécurité accrue.
- **Which events would you like to trigger this webhook ?** : sélectionnez les événements qui déclencheront l'envoi du webhook. Pour un déploiement automatique, `Just the push event`{.action} (Juste l'événement push) est souvent suffisant, mais vous pouvez choisir `Send me everything`{.action} pour recevoir des notifications pour tous les événements.
- **Active** : assurez-vous que la case est cochée pour activer le webhook.

Cliquez sur `Add webhook`{.action} pour enregistrer et activer votre nouveau webhook.

#### Tester votre webhook

Après avoir créé votre webhook dans GitHub, dirigez-vous dans la liste de vos webhooks et sélectionnez celui que vous venez de créer, ou cliquez sur `Edit`{.action}.

Sur l'écran qui s'affiche, cliquez sur l'onglet `Recent Deliveries`{.action}. Pour envoyer un événement test spécifiquement, GitHub envoie généralement un événement `ping` lors de la création du webhook, et vous pouvez utiliser le bouton `Redeliver`{.action} à côté de cet événement pour le tester.

Si le test a fonctionné, l'onglet `Response`{.action} renvoie un code 200. Si un code d'erreur est retourné (généralement 500 ou 400), cela signifie que votre webhook a été mal configuré. Retournez dans le formulaire d'ajout d'un webhook et vérifiez les informations, spécifiquement l'URL du webhook fournie par OVHcloud.

#### Utiliser le webhook

Une fois votre webhook configuré, le code de votre site web sera mis à jour automatiquement à chaque fois que des changements surviennent sur le dépôt GitHub. Par exemple, si des modifications sont apportées par un de vos collègues sur le dépôt GitHub, alors le code de votre site web sera mis à jour en local (sur votre hébergement OVHcloud).

### Conclusion

Vous venez d'associer le code de votre site web avec Git, via votre dépôt GitHub. Vous pouvez désormais déployer les modifications apportées sur le dépôt GitHub vers votre hébergement web ou les déployer de façon automatisée grâce au webhook, consulter les logs de vos déploiements et effectuer de multiples actions, tout cela depuis votre espace client, en quelques clics seulement.

## Aller plus loin

[Mettre en ligne un site internet sur son hébergement web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
