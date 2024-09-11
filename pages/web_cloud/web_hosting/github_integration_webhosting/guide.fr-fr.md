---
title: "Configurer et utiliser GitHub avec son hébergement web OVHcloud"
excerpt: "Découvrez comment configurer et utiliser GitHub avec votre hébergement web dans votre espace client OVHcloud"
updated: 2024-08-22
---

## Objectif

Dans le paysage numérique actuel, les sociétés sont de plus en plus dynamiques et innovantes. La capacité à gérer et à déployer efficacement le code de son site web est essentielle pour maintenir la compétitivité et la pérennité de votre marque. GitHub, système de gestion de versions le plus utilisé au monde, permet de stocker le code de votre site web sur des plateformes comme GitHub, permettant une meilleure traçabilité des modifications, ainsi qu'une automatisation et des déploiements plus rapides. En tant que client OVHcloud, vous bénéficiez d'une infrastructure robuste pour héberger votre site web, tout en exploitant les nombreux avantages de GitHub pour le développement et l'évolution de votre site web.

**Découvrez comment configurer et utiliser GitHub avec votre hébergement web depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager), partie Web Cloud.
- Posséder un compte [GitHub](https://github.com/){.external} et y être connecté.

## En pratique

> [!primary]
>
> Pour l'association et la configuration de GitHub, vous devrez effectuer des modifications dans votre compte GitHub. Avant de commencer le guide, connectez-vous à votre compte GitHub.
>

### Associer un répertoire à GitHub <a name="associateGitRepo"></a>

> [!warning]
>
> Lorsque vous associez un répertoire à GitHub, tous les noms de domaine présents sur ce répertoire seront également associés à GitHub. Par exemple, si le répertoire correspondant au site web que vous associez est `www`, alors tous les noms de domaine associés au répertoire `www` seront également associés à GitHub.
>

Connectez-vous à votre [espace client OVHcloud](/links/manager) et effectuez les actions suivantes :

- Accédez à l'onglet `Web Cloud`{.action}.
- Sélectionnez votre hébergement sous la rubrique `Hébergements`{.action} à gauche.
- Cliquez sur l'onglet `Multisite`{.action}.
- Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire que vous souhaitez associer à GitHub.
- Cliquez sur le bouton `...`{.action} puis sélectionnez `Associer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Le formulaire d'association de GitHub s'affiche. Plusieurs éléments doivent être configurés :

- Clé SSH
- Dépôt GitHub
- Branche du dépôt GitHub
- Webhook (optionnel)

#### Associer une clé SSH à GitHub <a name="linkSSHKey"></a>

> [!primary]
>
> La génération d'une clé SSH est une étape cruciale, car elle établit une connexion sécurisée et chiffrée entre le répertoire de votre site web et le dépôt GitHub. Cette clé assure que les transferts de données et les modifications de code se font de manière sûre et authentifiée, prévenant les accès non autorisés et garantissant l'intégrité du code.
>

Copiez et enregistrez la clé SSH sur votre compte GitHub. Cela permet d'établir une connexion sécurisée sans nécessiter de saisie de mot de passe à chaque opération GitHub que vous serez amenés à effectuer.

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Settings`{.action}.
- Sur la nouvelle page, cliquez sur `SSH and GPG keys`{.action} dans la colonne de gauche.
- Sélectionnez `New SSH key`{.action} ou `Add SSH key`{.action}.

Le formulaire d'ajout d'une nouvelle clé SSH s'affiche :

- **Title** : ajoutez une description pour votre clé SSH. Par exemple, vous pouvez nommer cette clé « OVHcloud ». 
- **Type of key** : laissez la valeur par défaut `authentication key`{.action}
- **Key** : collez votre clé SSH.

Pour valider les informations, cliquez sur `Add SSH key`{.action}. Si vous y êtes invité, confirmez l'accès à votre compte dans GitHub.

#### Définir le dépôt GitHub

Retournez sur le formulaire d'association de GitHub de votre espace client OVHcloud. Vous devez renseigner l'adresse de votre dépôt GitHub. Si vous n'avez pas encore de dépôt GitHub pour votre projet, créez-en un.

Pour créer un nouveau dépôt :

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Your repositories`{.action}.
- Sur la droite de l'écran qui s'affiche, cliquez sur `New`{.action}.

Définissez un nom pour votre dépôt et remplissez les informations demandées.

> [!warning]
>
> Cochez l'option `Add a README file` pour que GitHub initialise correctement votre dépôt.
>

Enfin, cliquez sur `Create Repository`{.action}.

Copiez l'adresse de votre dépôt GitHub. Celle-ci doit être de la forme `https://github.com/<username>/<repository_name.git>`{.action}. Retournez sur le formulaire d'association de GitHub et collez l'adresse de votre dépôt GitHub dans le champ `Dépôt`{.action}. Si le format de l'adresse n'est pas correct, le message d'erreur suivant apparaît :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Définissez maintenant la branche de votre dépôt GitHub. La branche par défaut est `main`, mais si vous voulez utiliser une autre branche, créez-en une sur GitHub en suivant les étapes ci-dessous :

- Connectez-vous à votre compte GitHub.
- Cliquez sur votre image de profil en haut à droite, puis sur `Your repositories`{.action}.
- Dirigez-vous dans le dépôt GitHub concerné.
- Cliquez sur `Main`{.action}, puis sur `View all branches`{.action}, ou cliquez directement sur l'onglet `x Branch`{.action}.
- À droite de l'écran qui s'affiche, cliquez sur `New branch`{.action}. 
- Indiquez le nom de la nouvelle branche et confirmez en cliquant sur `Create new branch`{.action}.

Retournez sur le formulaire d'association de GitHub de votre espace client OVHcloud et indiquez le nom de la nouvelle branche que vous venez de créer.

#### Configurer le déploiement automatique

En bas du formulaire d'association de GitHub, une section `Configuration du déploiement automatique`{.action} s'affiche, accompagnée de l'URL de webhook. Configurer un webhook permet à votre dépôt GitHub de notifier automatiquement votre hébergement web OVHcloud des événements qui se produisent sur le dépôt GitHub (nouveau déploiement, changement dans le code, etc.). Cette fonctionnalité est particulièrement utile si vous travaillez en groupe sur le même projet et que vous souhaitez rester à jour de toutes les modifications du dépôt GitHub. Pour en savoir plus, découvrez comment [configurer un webhook sur GitHub](#configureWebhook).

#### Valider l'association de GitHub

Avant de valider le formulaire d'association de GitHub, assurez-vous que :

- Votre clé SSH a bien été enregistrée dans votre compte GitHub.
- L'adresse de votre dépôt GitHub est correcte. Elle doit être de la forme `https://github.com/<username>/<repository_name.git>`{.action}.
- Le nom de la branche du dépôt GitHub est correct.
- Votre répertoire d'installation est vide.

Pour valider les informations du formulaire d'association de GitHub, cliquez sur `Appliquez la configuration`{.action}.

### Activation de l'association de GitHub

#### Succès de l'association de GitHub

Après avoir validé le formulaire s'association de GitHub, vous êtes redirigé sur l'onglet Multisite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Une bannière verte vous indique que GitHub est en cours d'activation. Suivez l'activation de GitHub en cliquant sur le lien `Tâche en cours`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

Le statut `En cours`{.action} indique que l'association de GitHub est en cours. Le processus peut prendre plusieurs minutes. Lorsque la tâche est achevée, le statut `Activé`{.action} s'affiche.

Vous pouvez également suivre l'évolution de l'activation de GitHub depuis l'onglet `Multisite`{.action}. Dans le tableau, identifiez les lignes correspondant au répertoire que vous voulez associer à GitHub. Pour chacune des lignes concernées, dans la colonne `Git`{.action}, la mention `En cours`{.action} vous indique que GitHub est en cours d'activation.

Lorsque l'association de GitHub est effectuée, le statut `Activé`{.action} apparaît dans la colonne `Git`{.action} pour les lignes concernées.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Erreurs de l'association de GitHub

Dans le tableau de l'onglet `Multisite`{.action}, identifiez les lignes correspondant au répertoire que vous voulez associer à GitHub. Dans la colonne `Git`, si la mention `Erreur` apparaît, cela signifie qu'au moins une des erreurs suivantes est survenue :

- La clé SSH n'a pas été enregistrée dans votre compte GitHub.
- Le répertoire d'installation n'est pas vide.
- L'adresse du dépôt GitHub n'existe pas ou est erronée.
- La branche du dépôt GitHub n'existe pas ou son nom est erroné.

Pour connaître la cause exacte de l'erreur, consultez les informations du dernier déploiement. Dans le tableau, identifiez la ligne correspondant au nom de domaine dont vous souhaitez consulter les logs du dernier déploiement. À droite de la ligne, cliquez sur le bouton `...`{.action} puis sur `Informations du dernier déploiement`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Une fois le(s) erreur(s) identifiée(s), associez GitHub à nouveau. Recommencez l'opération en cliquant sur le bouton `...`{.action} de la ligne correspondante, puis sur `Associer Git`{.action}.

### Déployer votre dépôt GitHub sur votre hébergement web OVHcloud

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au nom de domaine que vous souhaitez déployer avec GitHub. Assurez-vous que le statut de la colonne Git soit `Activé`{.action}. Cliquez sur le bouton `...`{.action} puis sur `Déployer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git.png){.thumbnail}

Un message de confirmation s'affiche, ainsi qu'une case à cocher vous indiquant qu'en cas de conflit lors du déploiement, vous pouvez forcer les modifications distantes (du dépôt GitHub) sur votre dépôt local. Cochez ou non la case selon votre choix, puis cliquez sur `Confirmer`{.action} pour valider le déploiement.

> [!warning]
>
> Pour éviter de perdre vos modifications locales, pensez à les enregistrer avant de les écraser par les modifications de la branche distante.
>

La nouvelle version de votre site web a bien été déployée sur votre hébergement OVHcloud. Si d'autres personnes travaillent sur le même projet et qu'ils apportent des modifications sur le dépôt GitHub, alors vous pouvez [configurer un webhook sur GitHub](#configureWebhook) pour que leurs modifications soient déployées automatiquement sur votre hébergement web. Cela vous évite de déployer GitHub manuellement, et votre hébergement web restera toujours à jour.

### Modifier un nom de domaine

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine que vous souhaitez modifier. Cliquez sur le bouton `...`{.action} puis sur `Modifier le domaine`{.action}. Deux scénarios sont possibles :

#### Le nom de domaine n'est pas le seul attaché au même répertoire

La fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modifiez les informations de votre choix et cliquez sur `Suivant`{.action}.

Une deuxième fenêtre de confirmation s'affiche avec le récapitulatif de vos changements.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour validez les modifications de votre nom de domaine.

#### Le nom de domaine est le seul attaché au répertoire

La fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Comme le message l'indique, [supprimez votre association Git](#deleteGitAssociation) dans un premier temps avant de modifier votre nom de domaine.

### Détacher un nom de domaine

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine que vous souhaitez détacher de votre hébergement web OVHcloud. Cliquez sur le bouton `...`{.action} puis sur `Détacher le domaine`{.action}. Deux scénarios sont possibles :

#### Le nom de domaine n'est pas le seul attaché au même répertoire

La fenêtre suivante s'affiche.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour validez le détachement de votre nom de domaine.

#### Le nom de domaine est le seul attaché au répertoire

La fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Comme le message l'indique, [supprimez votre association Git](#deleteGitAssociation) dans un premier temps avant de détacher votre nom de domaine.

### Configurer GitHub

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire que vous voulez configurer avec GitHub. Cliquez sur le bouton `...`{.action} puis sur `Configurer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Les informations suivantes s'affichent :

- Clé SSH : si vous ne l'avez pas déjà fait, [enregistrez votre clé SSH dans votre compte GitHub](#linkSSHKey).
- Dépôt : adresse de votre dépôt GitHub. Ce champ est grisé car vous ne pouvez pas modifier l'adresse du dépôt GitHub. Pour changer l'URL du dépôt GitHub, vous devez [supprimer l'association Git de votre répertoire](#deleteGitAssociation) puis à nouveau [associer le répertoire à Git](#associateGitRepo).
- Branche : nom de la branche du dépôt GitHub. Vous pouvez modifier ce champ.
- URL de webhook : si vous souhaitez optimisez vos déploiements sur GitHub, [configurez le webhook sur GitHub](#configureWebhook).

### Informations du dernier déploiement

Après avoir déployé votre dépôt GitHub sur votre hébergement web, vous pouvez consulter les informations sur le dernier déploiement, comme les erreurs, les tests ou toute information utile. 

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine dont vous souhaitez consulter les logs du dernier déploiement. À droite de la ligne, cliquez sur le bouton `...`{.action} puis sur `informations du dernier déploiement`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/latest-deployment-information.png){.thumbnail}

Retrouvez sur cet écran toutes les informations relatives au dernier déploiement.

### Supprimer l'association de GitHub <a name="deleteGitAssociation"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire dont vous souhaitez supprimer l'association avec GitHub. Cliquez sur le bouton `...`{.action} puis sur `Supprimer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

La fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

Le message vous informe que la suppression s'appliquera sur l'ensemble des noms de domaine attachés à votre répertoire. Cochez la case `Souhaitez-vous vider le contenu du répertoire <votre_repertoire>`{.action} si vous voulez également supprimer le contenu (dossiers et fichiers) du répertoire.

1\.	Si vous cochez la case, la fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association GitHub de votre répertoire ainsi que son contenu.

2\.	Si vous ne cochez pas la case, la fenêtre suivante s'affiche :

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association GitHub de votre répertoire.

### Configurer un webhook sur GitHub

#### Récupérer l'URL du webhook

> [!primary]
>
> Si vous êtes déjà dans le formulaire d'association de GitHub, copiez l'URL du webhook et passez à l'étape « [Configurer le webhook](#configureWebhook) ».
>

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez le nom de l'hébergement concerné. Sélectionnez l'onglet `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire sur lequel vous voulez configurer un webhook. Cliquez sur le bouton `...`{.action} puis sur `Configurer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

En bas du formulaire qui s'affiche, identifiez l'adresse du champ `URL de webhook`{.action} et copiez-la. Vous devez maintenant enregistrer l'URL et configurer le webhook sur votre compte GitHub.

#### Configurer le webhook <a name="configureWebhook"></a>

Connectez-vous à votre compte GitHub et accédez au dépôt sur lequel vous souhaitez configurer le webhook. Dirigez-vous sur l'onglet `Settings`{.action} puis, dans le menu latéral des paramètres, cliquez sur `Webhooks`{.action}. Cliquez sur le bouton `Add webhook`{.action} pour accéder au formulaire :

- **Payload URL** : entrez l'URL fournie dans le formulaire d'association de GitHub (`URL de webhook`{.action}).
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