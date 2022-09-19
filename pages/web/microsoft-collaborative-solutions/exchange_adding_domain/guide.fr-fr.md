---
title: Ajouter un nom de domaine sur une plateforme e-mail
slug: ajouter-domaine-exchange
section: Premiers pas avec Exchange
order: 4
---

**Dernière mise à jour le 09/09/2022**

## Objectif

Ajouter un nom de domaine sur un service Exchange est indispensable afin de pouvoir utiliser vos comptes inclus dans ce dernier. Il est également possible d'ajouter plusieurs noms de domaine à un service Exchange ou E-mail Pro.

**Découvrez comment ajouter un nom de domaine à votre plateforme Exchange ou E-mail Pro.**

## Prérequis

- Disposer d'une solution [Exchange](https://www.ovhcloud.com/fr/emails/) ou [Email Pro](https://www.ovhcloud.com/fr/emails/email-pro/)).
- Disposer d'un ou plusieurs noms de domaine.
- Être en mesure de modifier la configuration de votre nom de domaine ([zone DNS](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Accéder à la gestion de votre service

Une fois votre service Exchange ou E-mail Pro créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Dans la section `Web Cloud`{.action}:

- **Exchange**: Cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. 
- **Email Pro**: Cliquez sur `Email Pro`{.action}.

Sélectionnez enfin le nom du service concerné.

### Ajouter un nom de domaine

Pour ajouter un nom de domaine, cliquez sur l'onglet `Domaine associés`{.action}. Le tableau affiche les noms de domaine actuellement associés à votre service. Pour en ajouter un nouveau, cliquez sur le bouton `Ajouter un domaine`{.action}.

> [!warning]
>
> Toutes les adresses créées sur votre service e-mail seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander une nouvelle [solution Exchange ou Email Pro](https://www.ovhcloud.com/fr/emails/) pour le ou les noms de domaine concernés.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

Sur la fenêtre d'ajout de domaine, vous devrez choisir de :

- **sélectionner un domaine dans la liste** : seuls les noms de domaine utilisant la configuration OVHcloud et renseignés en tant que contacts dans votre identifiant client s'affichent ;

- **saisir un nom de domaine non géré par votre compte OVHcloud** : vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service puisse fonctionner correctement. Dans ce cas de figure, une entrée DNS CNAME devra être ajoutée.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration des modes.

- **Si vous avez renseigné un nom de domaine non géré par OVHcloud** : le mode non-autoritatif sera configuré par défaut.

- **Si vous avez sélectionné dans la liste un nom de domaine géré par OVHcloud** : vous devrez choisir entre deux modes.

|Mode|Description|
|---|---|
|Autoritatif|Convient si vous utilisez uniquement votre solution Exchange ou E-mail Pro avec votre nom de domaine. Ne permet pas l'usage d'une autre solution de messagerie avec votre service.|
|Non-autoritatif|Convient si vous utilisez avec votre nom de domaine la solution Exchange ou E-mail Pro conjointement à une autre solution e-mail. Vous devrez renseigner le serveur de votre autre solution e-mail.|

> [!primary]
>
> Le choix du mode n'est pas définitif et peut être modifié depuis l'espace client OVHcloud par la suite.
>

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**Si vous avez sélectionné un nom de domaine géré par OVHcloud dans la liste**, la configuration de ce dernier peut être réalisée automatiquement. Pour cela, cochez les cases et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

**Si vous avez renseigné un nom de domaine non géré par OVHcloud** , la configuration devra être réalisée durant l'étape suivante.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

En fin de configuration, nous vous invitons à vérifier les informations qui s'affichent, puis à cliquer sur le bouton `Confirmer`{.action} pour valider l'ajout du domaine. Réalisez cette étape autant de fois que nécessaire si vous souhaitez ajouter plusieurs noms de domaine.

### Configurer le nom de domaine (DNS)

Une fois le nom de domaine ajouté en tant que domaine associé, assurez-vous que la configuration de ce dernier est correcte grâce au tableau qui s'affiche. Une pastille de couleur verte indique que le nom de domaine est correctement configuré. Dans le cas où la pastille est de couleur rouge :

- **si vous avez choisi une configuration automatique lors de l'ajout du domaine** : l’affichage dans l’espace client OVHcloud peut prendre quelques instants pour s'actualiser ;

- **si vous avez renseigné un nom de domaine non géré par OVHcloud** : cliquez sur la pastille de couleur rouge pour afficher les modifications que vous devez réaliser. Si ce nom de domaine n’utilise pas la configuration d’OVH (ses serveurs DNS), vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre nom de domaine. Dans le cadre d'un paramétrage CNAME, vous pouvez en apprendre plus depuis la documentation intitulée [Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/).

> [!primary]
>
> La modification de la configuration d'un nom de domaine nécessite un temps de propagation de 4 à 24 heures maximum avant d’être pleinement effective.
>

Pour vérifier que la configuration d'un nom de domaine est correcte, repositionnez-vous sur le tableau `Domaines associés`{.action} de votre service. Si la pastille est à présent verte, le nom de domaine est correctement configuré. Dans le cas contraire, il se peut que la propagation ne soit pas encore terminée.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Configurer et utiliser les comptes

Maintenant que vous avez ajouté les noms de domaine souhaités à votre service, vous pouvez configurer vos comptes e-mail avec ces derniers. Cette manipulation s'effectue depuis l'onglet `Comptes e-mail`{.action}. Si besoin, vous pouvez commander des comptes supplémentaires grâce au bouton `Action`{.action}/`Commander des comptes`{.action} ou `Ajouter un compte`{.action}.

Pour rappel, toutes les adresses créées sur votre service seront en mesure de visualiser dans l'annuaire l'ensemble des adresses de ce service, y compris celles possédant un nom de domaine différent.

Une fois les comptes totalement configurés, il ne vous reste plus qu’à les utiliser. Pour cela, OVHcloud met à votre disposition le **webmail** accessible à l’adresse <https://www.ovh.com/fr/mail/>. Pour une utilisation optimale de votre adresse sur un logiciel, assurez-vous de sa bonne compatibilité avec le service. 

Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, ou obtenir de l'aide concernant les fonctionnalités de votre service e-mail, consultez nos documentations accessibles depuis les pages [Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/) et [E-mail Pro](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

Il est possible d'acquérir des licences Outlook dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et des licences Office 365 sur la page [https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/). Nous vous recommandons l'une de ces solutions si vous souhaitez bénéficier du logiciel de messagerie Outlook ou de plus de logiciels de la suite Office, selon vos besoins.

### Supprimer un nom de domaine d'une plateforme

Si vous souhaitez retirer un nom de domaine attaché à votre service Exchange ou E-mail Pro, il est nécessaire de vérifier que celui-ci n'est pas lié à des comptes e-mail, alias, ressource, compte partagé, groupe, contact externe ou pied de page toujours configuré. Dans ce cas il sera nécessaire d'**attacher ces comptes à un autre nom de domaine** sur votre plateforme ou de les **supprimer**.

> [!warning]
>
> Avant de supprimer des comptes e-mail, assurez-vous qu'ils ne soient pas utilisés. Une sauvegarde de ces comptes sera peut-être nécessaire. Vous pouvez vous appuyer du guide [Migrer manuellement votre adresse e-mail](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/), qui vous décrira comment exporter les données d'un compte depuis votre espace client ou un logiciel de messagerie.

Dirigez-vous dans l'onglet `Domaines associés`{.action} de votre plateforme. Depuis le tableau, la colonne `Comptes` vous indique le nombre de comptes associés aux noms de domaine de votre liste.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Si des comptes e-mail sont attachés au nom de domaine que vous souhaitez détacher, vous avez 2 possibilités.

- **Attacher les comptes à un autre nom de domaine**: Dirigez-vous vers l'onglet `Comptes e-mail`{.action}. À droite des comptes à modifier, cliquez sur le bouton `...`{.action}, puis `Modifier`{.action}.
    ![emailpro](images/add_domain_exchange_step8.png){.thumbnail}
    Depuis la fenêtre de modification, vous pouvez modifier le nom de domaine attaché au compte via le menu déroulant.
    ![emailpro](images/add_domain_exchange_step9.png){.thumbnail}

- **Supprimer les comptes de votre plateforme**: Dirigez-vous vers l'onglet `Comptes e-mail`{.action}. À droite du compte à supprimer, cliquez sur le bouton `...`{.action}, puis `Réinitialiser ce compte`{.action} ou `Réinitialiser`{.action}
    ![emailpro](images/add_domain_exchange_step7.png){.thumbnail}

Une fois la réattribution des comptes à un autre nom de domaine ou leur réinitialisation, il est maintenant possible de procéder à la suppression du nom de domaine. 

Depuis l'onglet `Domaine associés`{.action} de votre plateforme, cliquez sur le bouton `...`{.action} à droite du nom de domaine concerné, puis sur `Supprimer ce domaine`{.action}.

![emailpro](images/add_domain_exchange_step10.png){.thumbnail}

## Aller plus loin

[Créer un champ CNAME à l’ajout d’un domaine associé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-ajouter-un-champ-de-type-cname/)

[Éditer une zone DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/)

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).