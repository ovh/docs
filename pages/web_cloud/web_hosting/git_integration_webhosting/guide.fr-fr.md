---
title: "Configurer et utiliser Git avec son hébergement web OVHcloud"
excerpt: "Découvrez comment configurer et utiliser Git avec votre hébérgement web dans votre espace client OVHcloud"
updated: 2024-07-18
flag: hidden
---

> [!primary]
> Cette page est un espace réservé temporaire pour la prochaine documentation sur la fonctionnalité Git Integration pour Web Hosting.
>

## Objectif

Dans le paysage numérique actuel, les sociétés sont de plus en plus dynamiques et innovantes. La capacité à gérer et à déployer efficacement le code de son site web est essentielle pour maintenir la compétitivité et la pérennité de votre marque. Git, système de gestion de versions le plus utilisé au monde, permet de stocker le code de votre site web sur des plateformes comme GitHub, permettant une meilleure traçabilité des modifications, ainsi qu'une automatisation et des déploiements plus rapides. En tant que client OVHcloud, vous bénéficiez d'une infrastructure robuste pour héberger votre site web, tout en exploitant les nombreux avantages de Git et de GitHub pour le développement et l'évolution de votre site web.

**Découvrez comment configurer et utiliser Git avec votre hébergement web depuis votre espace client OVHcloud.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager), partie Web Cloud.
- Posséder un compte [Github](https://github.com/) et y être connecté.

## En pratique

> [!primary]
>
> Pour l'association et la configuration de Git, vous devrez effectuer des modifications dans votre compte Github. Avant de commencer le guide, connectez-vous à votre compte Github.
>

### Associer un répertoire à Git

> [!warning]
>
> Lorsque vous associez un répertoire à Git, tous les domaines présents sur ce répertoire sont également associés à Git. Par exemple, si le répertoire correspondant au site web que vous associez est `www`{.action}, alors tous les domaines associés au répertoire www seront associés à Git.
>

Connectez-vous à votre [espace client OVHcloud](/links/manager) et effectuez les actions suivantes :

- Accédez à l'onglet `Web Cloud`{.action}.
- Sélectionnez votre hébergement sous la rubrique `Hébergements`{.action} à gauche.
- Cliquez sur l'onglet `Multisite`{.action}.
- Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire que vous souhaitez associer à Git.
- Cliquez sur le bouton `...`{.action} puis sélectionnez `Associer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/associate-git.png){.thumbnail}

Le formulaire d'association de Git s'affiche. Plusieurs éléments doivent être configurés :

- Clé SSH
- Dépôt Github
- Branche du dépôt
- Webhook (optionnel)

#### Associer une clé SSH à Github

> [!primary]
>
> La génération d'une clé SSH est une étape cruciale, car elle établit une connexion sécurisée et cryptée entre le répertoire de votre site web et le dépôt GitHub. Cette clé assure que les transferts de données et les modifications de code se font de manière sûre et authentifiée, prévenant les accès non autorisés et garantissant l'intégrité du code.
>

Copiez et enregistrez la clé SSH sur votre compte GitHub. Cela permet d'établir une connexion sécurisée sans nécessiter de saisie de mot de passe à chaque opération Git que vous serez amenés à effectuer.

- Connectez-vous à votre compte Github.
- Dans le menu principal, cliquez sur `Settings`{.action} puis sur `SSH and GPG keys`{.action}.
- Sélectionnez `Nouvelle clé SSH`{.action} ou `Ajouter une clé SSH`{.action}.

Le formulaire d'ajout d'une nouvelle clé SSH s'affiche :

- **Titre** : ajoutez une description pour votre clé SSH. Par exemple, vous pouvez nommer cette clé « OVHcloud ». 
- **Type de clé** : laissez la valeur par défaut `authentication key`{.action}
- **Clé** : collez votre clé SSH.

Pour valider les informations, cliquez sur `Ajouter une clé SSH`{.action}. Si vous y êtes invité, confirmez l'accès à votre compte dans GitHub.

#### Définir le dépôt GIT

Retournez sur le formulaire d'association de Git de votre espace client OVHcloud. Vous devez renseigner l'adresse de votre dépôt GitHub. Si vous n'avez pas encore de dépôt GitHub pour votre projet, créez-en un.

Dans le menu principal de GitHub, cliquez sur `Your repositories`{.action} puis, à droite de l'écran, cliquez `New`{.action}. Définissez un nom pour votre dépôt et remplissez les informations demandées. Enfin, cliquez sur `Create Repository-.

Copiez l'adresse de votre dépôt. Celle-ci doit être de la forme `https://github.com/<username>/<repository_name>`{.action}. Retournez sur le formulaire d'association de Git et collez l'adresse de votre dépôt GitHub dans le champ `Dépôt`{.action}. Si le format de l'adresse n'est pas correct, le message d'erreur suivant apparaît.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Vous devez maintenant définir la branche de votre dépôt GitHub. La branche par défaut est « Main, mais si vous voulez utiliser une autre branche, créez-en une sur Github en suivant les étapes suivantes :

- Dans le menu principal de GitHub, cliquez sur `Your repositories`{.action}.
- Dirigez-vous dans le dépôt GitHub concerné.
- Cliquez sur `Main`{.action}, puis sur `View all branches`{.action}, ou cliquez directement sur l'onglet `x Branch`{.action}.
- À droite de l'écran qui s'affiche, cliquez sur `New branch`{.action}. 
- Indiquez le nom de la nouvelle branche et confirmez en cliquant sur `Create new branch`{.action}.

Retournez sur le formulaire d'association de Git de votre espace client OVHcloud et indiquez le nom de la nouvelle branche que vous venez de créer.

#### Configurer le déploiement automatique

En bas du formulaire d'association de Git, une section `Configuration du déploiement automatique`{.action} s'affiche, accompagnée de l'URL de webhook. Configurer un webhook permet à votre dépôt GitHub de notifier automatiquement votre hébergement OVHcloud des événements qui se produisent sur le dépôt Github (nouveau déploiement, changement dans le code, etc.). Cette fonctionnalité est particulièrement utile si vous travaillez en groupe sur le même projet. Pour en savoir plus, découvrez comment [configurer un webhook sur GitHub](#lienverswebhooksection).

#### Valider l'association de Git

Avant de valider le formulaire d'association de Git, assurez-vous que :

- Votre clé SSH a bien été enregistrée dans votre compte GitHub.
- L'adresse de votre dépôt GitHub est correcte. Elle doit être de la forme `https://github.com/<username>/<repository_name>`{.action}.
- Le nom de la branche du dépôt GitHub est correct.
- Le dépôt GitHub est vide.

Pour valider les informations du formulaire d'association de Git, appuyez sur `Appliquez la configuration`{.action}.

### Activation de l'association de Git

#### Succès de l'association de Git

Après avoir validé le formulaire s'association de Git, vous êtes redirigés sur l'onglet Multisite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Une bannière verte vous indique que Git est en cours d'activation. Suivez l'activation de Git en cliquant sur le lien `Tâche en cours`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

Le statut `Ongoing`{.action} indique que l'association de Git est en cours. Le processus peut prendre plusieurs minutes. Lorsque la tâche est achevée, le statut `Activé`{.action} s'affiche.

Vous pouvez également suivre l'évolution de l'activation de Git en vous dirigeant sur l'onglet `Multisite`{.action}. Dans le tableau, identifiez les lignes correspondant au répertoire que vous voulez associer à Git. Pour chacune des lignes concernées, dans la colonne `Git`{.action}, la mention `OnGoing`{.action} vous indique que Git est en cours d'activation. Dans notre exemple, les domaines 1 et 2 reliés au répertoire `www`{.action} sont en cours d'association à Git.

Lorsque l'association de Git est effectuée, le statut `Enabled`{.action} apparaît dans la colonne `Git`{.action} pour les lignes concernées.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Erreurs de l'association de Git

Dans le tableau de l'onglet `Multisite`{.action}, identifiez les lignes correspondant au répertoire que vous voulez associer à Git. Dans la colonne `Git`, si `Error` apparaît, cela signifie qu'au moins une des erreurs suivantes est survenue :

- La clé SSH n'a pas été enregistrée dans votre compte Github.
- Le répertoire d'installation n'est pas vide.
- L'adresse du dépôt Github n'existe pas ou est erronée.
- La branche du dépôt n'existe pas ou son nom est erroné.

Pour connaître la cause exacte de l'erreur, consultez les informations du dernier déploiement. Dans le tableau, identifiez la ligne correspondant au domaine dont vous souhaitez consulter les logs du dernier déploiement. À droite de la ligne, cliquez sur `...`{.action} puis sur `informations du dernier déploiement`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Une fois le(s) erreur(s) identifiée(s), associez Git à nouveau. Recommencez l'opération en cliquant sur `...`{.action} de la ligne correspondante, puis sur `Associer Git`{.action}.

### Déployer son site web avec Git

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine que vous souhaitez déployer sur Git. Assurez-vous que le statut de la colonne Git soit `Enabled`{.action}. Cliquez sur `...`{.action} puis sur `Déployer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

Un message de confirmation s'affiche, ainsi qu'une case à cocher vous indiquant qu'en cas de conflit lors du déploiement, vous pouvez forcer les modifications distantes (du dépôt Github) sur votre dépôt local. Cochez ou laissez la case décochée selon votre choix, puis cliquez sur `Confirmer`{.action} pour valider le déploiement.

> [!warning]
>
> Pour éviter de perdre vos modifications locales, pensez à les enregistrer avant de les écraser par les modifications de la branche distante.
>

Au-dessus du tableau, un message de succès s'affiche vous indiquant que le repository a bien été déployé.

--Screenshot placeholder--

La nouvelle version de votre site web a bien été déployée sur votre dépôt GitHub. Si d'autres personnes travaillent sur le même projet et qu'ils ont configuré un webhook, ils seront notifiés de votre déploiement, et leur branche locale sera synchronisée avec vos modifications. Retrouvez plus d'information en consultant la section [Configurer un webhook sur GitHub](#lienwebhook).

### Modifier un domaine

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine que vous souhaitez modifier. Cliquez sur `...`{.action} puis sur `Modifier le domaine`{.action}. Deux scénarios sont possibles :

- Si votre domaine est le seul du répertoire associé à Git, alors le détachement entrainera la suppression de l'association Git pour le domaine et le répertoire.
- Si d'autres domaines sont rattachés au même répertoire, alors le détachement entrainera la suppression de l'association Git pour ce domaine.

#### Le domaine n'est pas le seul du répertoire

Même processus que pour détachement du domaine. En attente des maquettes.

#### Le domaine est le seul du répertoire

Même processus que pour détachement du domaine. En attente des maquettes.

### Détacher un domaine de Git

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine que vous souhaitez détacher de Git. Cliquez sur `...`{.action} puis sur `Détacher le domaine`{.action}. Deux scénarios sont possibles :

- Si votre domaine est le seul du répertoire associé à Git, alors le détachement entrainera la suppression de l'association Git pour le domaine et le répertoire.
- Si d'autres domaines sont rattachés au même répertoire, alors le détachement entrainera la suppression de l'association Git pour ce domaine.

#### Le domaine n'est pas le seul du répertoire

Attente des maquettes

#### Le domaine est le seul du répertoire

--Screenshot placeholder--

Cochez la case `J'ai compris, je souhaite détacher mon nom de domaine`{.action} puis appuyez sur `Confirmer`{.action}.

### Configurer Git

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire que vous voulez configurer avec Git. Cliquez sur `...`{.action} puis sur `Configurer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Les informations suivantes s'affichent :

- Clé SSH : si vous ne l'avez pas déjà fait, [enregistrez votre clé SSH dans votre compte GitHub](#associer-une-clé-ssh-à-github).
- Dépôt : adresse de votre dépôt Git. Ce champ est grisé car vous ne pouvez pas modifier l'adresse du dépôt Git. Pour changer l'URL du dépôt Git, vous devez [supprimer l'association Git de votre répertoire](#lien) puis à nouveau [associer le répertoire à Git](#associer-un-répertoire-à-git).
- Branche : nom de la branche du dépôt Git. Vous pouvez modifier ce champ.
- URL de webhook : si vous souhaitez optimisez vos déploiements sur Git, [configurez le webhook sur GitHub](#lienverswebhook).

### Informations du dernier déploiement

Après avoir déployé votre site web sur Git, vous pouvez consulter les informations sur le dernier déploiement, comme les erreurs, les tests ou toute information utile. Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au domaine dont vous souhaitez consulter les logs du dernier déploiement. A droite de la ligne, cliquez sur `...`{.action} puis sur `informations du dernier déploiement`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

Retrouvez sur cet écran toutes les informations relatives au dernier déploiement.

### Supprimer l'association de Git

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire dont vous souhaitez supprimer l'association avec Git. Cliquez sur `...`{.action} puis sur `Supprimer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

La fenêtre suivante s'affiche.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

Le message vous informe que la suppression s'appliquera sur l'ensemble des domaines attachés à votre répertoire. Cochez la case `Souhaitez-vous vider le contenu du répertoire <votre_repertoire>`{.action} si vous voulez également supprimer le contenu (dossiers et fichiers) du répertoire.

1.	Si vous cochez la case, la fenêtre suivante s'affiche.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association Git de votre répertoire ainsi que son contenu.

2.	Si vous ne cochez pas la case, la fenêtre suivante s'affiche.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour valider la suppression de l'association Git de votre répertoire.

### Configurer un webhook sur GitHub

#### Récupérer l'URL du webhook

> [!primary]
>
> Si vous êtes déjà dans le formulaire d'association de Git, copiez l'URL de webhook et passez à l'étape [Configurer le webhook](#configurer-le-webhook)
>

Dans votre espace client OVHcloud, accédez à l'onglet `Web Cloud`{.action}, puis cliquez sur `Multisite`{.action}. Dans le tableau qui s'affiche, identifiez la ligne correspondant au répertoire sur lequel vous voulez configurer un webhook. Cliquez sur `...`{.action} puis sur `Configurer Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

En bas du formulaire qui s'affiche, identifiez l'adresse du champ `URL de webhook`{.action} et copiez-là. Vous devez maintenant enregistrez l'URL et configurer le webhook sur votre compte GitHub.

#### Configurer le webhook

Connectez-vous à votre compte Github et accédez au dépôt sur lequel vous souhaitez configurer le webhook. Dirigez-vous sur l'onglet `Paramètres`{.action}, puis dans le menu latéral des paramètres, cliquez sur `Webhooks`{.action}. Cliquez sur le bouton `Ajouter un webhook`{.action} pour accéder au formulaire :

- **Payload URL** : entrez l'URL fournie dans le formulaire d'association de Git (`URL de webhook`{.action}).
- **Content type** : choisissez `application/json`{.action} comme type de contenu pour les données envoyées.
- **Secret** : le secret est facultatif. GitHub l'utilisera pour signer les messages envoyés par le webhook, renforçant ainsi la sécurité.
- **SSL verification** : si votre site web supporte le HTTPS, laissez cette option activée pour une sécurité accrue.
- **Which events would you like to trigger this webhook ?** : sélectionnez les événements qui déclencheront l'envoi du webhook. Pour un déploiement automatique, `Just the push event`{.action} (Juste l'événement push) est souvent suffisant, mais vous pouvez choisir `Send me everything`{.action} pour recevoir des notifications pour tous les événements.
- **Active** : assurez-vous que la case est cochée pour activer le webhook.

Cliquez sur `Ajouter un webhook`{.action} pour enregistrer et activer votre nouveau webhook.

#### Testez votre webhook

Après avoir créé votre webhook dans GitHub, dirigez-vous dans la liste de vos webhooks et sélectionnez celui que vous venez de créer, ou cliquez sur `Edit`{.action}.

Sur l'écran qui s'affiche, cliquez sur l'onglet `Recent Deliveries`{.action}. Pour envoyer un événement test spécifiquement, GitHub envoie généralement un événement `ping`{.action} lors de la création du webhook, et vous pouvez utiliser le bouton `Redeliver`{.action} à côté de cet événement pour le tester.

Si le test a fonctionné, l'onglet `Response`{.action} renvoit un code 200. Si un code d'erreur est retourné (généralement 500 ou 400), cela signifie que votre webhook a été mal configuré. Retournez dans le formulaire d'ajout d'un webhook et vérifiez les informations, spécifiquement l'URL du webhook fournie par OVHcloud.

#### Utiliser le webhook

Une fois votre webhook configuré, le code de votre site web sera mis à jour automatiquement à chaque fois que des changements surviennent sur le dépôt GitHub. Par exemple, si des modifications sont apportées par un de vos collègues sur le dépôt GitHub, alors le code de votre site web sera mis à jour en local (sur votre hébergement OVHcloud).

### Conclusion

Vous venez d'associer le code de votre site web sur Git, via GitHub. Vous pouvez désormais apporter des modifications à votre site web, les déployer sur Git de façon manuelle ou automatisée grâce au webhook, consulter les logs de vos déploiements et effectuer de multiples actions, tout ça depuis votre espace client, en quelques clics seulement.

## Aller plus loin

[Mettre en ligne mon site](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
