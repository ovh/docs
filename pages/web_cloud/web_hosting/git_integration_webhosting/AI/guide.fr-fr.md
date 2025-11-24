35 71 

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Associer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 5**
>>
>> Le formulaire d'association de Git s'affiche. Plusieurs éléments doivent être configurés :
>>
>> - Dépôt GitHub
>> - Branche du dépôt GitHub
>> - Clé SSH (pour un dépôt GitHub privé)
>> - Webhook (optionnel)
>>
>> Poursuivez la lecture de ce guide afin d'obtenir les informations nécessaires pour compléter les champs requis.

167

Après avoir validé le formulaire s'association de Git, vous êtes redirigé sur la page de l'onglet `Mes sites`{.action}.

177 179

Vous pouvez également suivre l'évolution de l'activation de Git depuis l'onglet `Mes sites`{.action}. Dans la colonne `Git`{.action} du tableau, la mention `En cours`{.action} présente sur la ligne du site web concerné vous indique que Git est en cours d'activation.

Lorsque l'association de Git est effectuée, le statut `Activé`{.action} apparaît dans la colonne `Git`{.action} pour le site web concerné.

185

Dans le tableau de l'onglet `Mes sites`{.action}, identifiez les lignes correspondant au répertoire du site web que vous voulez associer à Git. Dans la colonne `Git`, si la mention `Erreur` apparaît, cela signifie qu'au moins une des erreurs suivantes est survenue :

192 196

Pour connaître la cause exacte de l'erreur, consultez les informations du dernier déploiement. Dans le tableau, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Informations du dernier déploiement`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Une fois le(s) erreur(s) identifiée(s), associez Git à nouveau. Recommencez l'opération en cliquant sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Associer Git`{.action}.

200 235

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Déployer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 5**
>>
>> Un message de confirmation s'affiche, ainsi qu'une case à cocher vous indiquant qu'en cas de conflit lors du déploiement, vous pouvez forcer les modifications distantes (du dépôt GitHub) sur votre dépôt local. Cochez ou non la case selon votre choix, puis cliquez sur `Confirmer`{.action} pour valider le déploiement.
>>
>> > [!warning]
>> >
>> > Pour éviter de perdre vos modifications locales, pensez à les enregistrer avant de les écraser par les modifications de la branche distante.
>>
>> La nouvelle version de votre site web a bien été déployée sur votre hébergement web OVHcloud. Si d'autres personnes travaillent sur le même projet et apportent des modifications au dépôt GitHub, vous pouvez [configurer un webhook sur GitHub](#configureWebhook) afin que leurs modifications soient automatiquement déployées sur votre hébergement web. Cela vous évite de déployer Git manuellement, et votre site web restera toujours à jour.

239 294

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `>`{.action} situé à gauche du nom du site web concerné pour afficher les noms de domaine ou sous-domaines associés.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Modifier le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 5**
>>
>>  Deux scénarios sont possibles :
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

298 347

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `>`{.action} situé à gauche du nom du site web concerné pour afficher les noms de domaine ou sous-domaines associés.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Détacher le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 5**
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

351 385

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Configurer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 5**
>>
>> Les informations suivantes s'affichent :
>>
>> - Clé SSH : Si vous ne l'avez pas déjà fait, [enregistrez votre clé SSH dans votre compte GitHub](#linkSSHKey).
>> - Dépôt : Adresse de votre dépôt Git. Ce champ est grisé car vous ne pouvez pas modifier l'adresse du dépôt Git. Pour changer l'URL du dépôt Git, vous devez [supprimer l'association Git de votre répertoire](#deleteGitAssociation) puis à nouveau [associer le répertoire à Git](#associateGitRepo).
>> - Branche : Nom de la branche du dépôt GitHub. Vous pouvez si besoin modifier ce champ.
>> - URL de webhook : Si vous souhaitez optimisez vos déploiements sur Git, [configurez le webhook sur GitHub](#configureWebhook).

391 418

> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `informations du dernier déploiement`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Retrouvez sur cet écran toutes les informations relatives au dernier déploiement.

422 467

Le message vous informe que la suppression s'appliquera sur l'ensemble des noms de domaine attachés à votre site web. Cochez la case `Souhaitez-vous vider le contenu du répertoire <votre_repertoire>`{.action} si vous voulez également supprimer le contenu (dossiers et fichiers) du répertoire.
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

477 506

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Configurer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Étape 5**
>>
>> En bas du formulaire qui s'affiche, copiez l'adresse contenue dans le champ `URL de webhook`{.action}. Vous devez maintenant enregistrer l'URL et configurer le webhook sur votre compte GitHub.