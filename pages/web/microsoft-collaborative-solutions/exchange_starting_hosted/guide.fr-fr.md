---
title: Premiers pas avec le service Hosted Exchange
slug: premiere-configuration-exchange
excerpt: Débutez avec un service Hosted Exchange
section: Premiers pas avec Exchange
order: 01
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Dernière mise à jour le 09/01/2018**

## Objectif 

Le service Hosted Exchange permet de bénéficier d’adresses e-mail professionnelles facilitant le travail collaboratif grâce à des fonctionnalités comme la synchronisation du calendrier et celle des contacts.

**Découvrez comment débuter avec votre service Hosted Exchange.**

## Prérequis

- Avoir souscrit une offre [Hosted Exchange](https://www.ovhcloud.com/fr/emails/hosted-exchange/){.external}.
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution Hosted Exchange.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

### Accéder à la gestion de votre service

Une fois votre service Hosted Exchange créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Pour cela, connectez-vous à ce dernier, cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Cliquez enfin sur le nom du service Hosted Exchange concerné.

> [!primary]
>
> Le nom d'un service Hosted Exchange dans votre espace client OVHcloud débute par **hosted-**, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service Hosted Exchange installé, 2 pour le deuxième, etc.).
>

### Effectuer la première configuration du service

Votre service n'ayant encore jamais été utilisé, vous allez devoir réaliser sa première configuration. Celle-ci vous permettra par la suite de pouvoir utiliser vos nouvelles adresses e-mail Exchange.

Pour ce faire, en accédant pour la première fois à la gestion de votre service Hosted Exchange, un assistant de configuration s'affichera. Pour débuter, cliquez sur le bouton `Commencer`{.action}.

Cet assistant de configuration vous permet plusieurs manipulations. Selon votre situation :

#### Choisir un nom de domaine

Choisissez un de vos noms de domaine dans la liste ou cochez la case `Mon nom de domaine ne figure pas dans la liste ci-dessous` pour saisir un nom de domaine qui n'est pas géré dans votre espace client **mais que vous pouvez configurer**.

![email](images/exchange-wizard01.png){.thumbnail}

#### Allez-vous utiliser uniquement l'offre Exchange OVH avec ce domaine ?

La question « **Allez-vous utiliser uniquement l'offre Exchange OVH avec ce domaine ?** » va déterminer le type de configuration de votre nom de domaine. 

- Si vous utilisez une offre Exchange seule ou avec d'autres offres **e-mail OVHcloud**, la configuration pourra se faire automatiquement ou manuellement en utilisant uniquement les serveurs e-mail d'OVHcloud.
- Si vous utilisez votre offre Exchange en complément avec un service e-mail **externe aux offres e-mail OVHcloud**, il vous sera demandé de renseigner l'URL du serveur de réception de votre service e-mails externe sous la mention `Serveur relais (SMTP)`

![email](images/exchange-wizard02.png){.thumbnail}

#### Comment souhaitez-vous configurer votre zone DNS ?

- **Configuration automatique** : Le nom de domaine renseigné sera automatiquement configuré au niveau de sa Zone DNS si ce dernier est géré par OVHcloud sur le même identifiant client que votre service Exchange.
- **Configuration manuelle** : Le nom de domaine n'est pas géré dans le même espace client que votre plateforme, il est géré chez un autre prestataire de nom de domaine, ou vous souhaitez simplement réaliser votre configuration vous-même.<br> Vous pourrez alors retrouver les valeurs à renseigner à la fin du processus de configuration, ou dans la section `Domaines associés`{.action} de votre plateforme.

![email](images/exchange-wizard03.png){.thumbnail}

#### **Configuration des comptes Exchange**

Déterminez le nom de vos adresses e-mail Exchange et ajoutez des informations complémentaires.

![email](images/exchange-wizard04.png){.thumbnail}

#### **Cas particulier**

- Si vous configurez votre plateforme Exchange avec un nom de domaine qui n'est pas géré sur le même espace client que cette plateforme ou chez un autre prestataire de nom de domaine, vous obtiendrez la fenêtre suivante :<br>
![email](images/exchange-wizard05.png){.thumbnail .w-640}<br>
Cette fenêtre vous invite à ajouter un **champ CNAME** dans la zone DNS du nom de domaine. Cette entrée a pour but de vérifier que vous gérez bien ce nom de domaine.<br>
> [!warning]
> Sans cette validation par champ CNAME, il est impossible d'utiliser la plateforme avec ce nom de domaine.

- Si vous configurez votre plateforme Exchange avec un nom de domaine qui n'est pas géré sur le même espace client que cette plateforme, qu'il est géré chez un autre prestataire de nom de domaine, ou si vous avez choisi de configurer manuellement votre nom de domaine, la fenêtre suivante s'affichera :<br>
![email](images/exchange-wizard06.png){.thumbnail .w-640}<br>
Vous retrouvez ici les valeurs à renseigner dans votre zone DNS. Les **champs MX** correspondent à la réception de vos e-mails. Le **champ SRV** correspond à la configuration automatique de vos adresses e-mail.

Retrouvez les détails de configuration de votre zone DNS concernant votre service e-mail sur notre page « [Ajouter un champ MX à la configuration de son nom de domaine](https://docs.ovh.com/fr/domains/mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh/) ».

### Ajouter des noms de domaines additionnels (facultatif)

Une fois la première configuration de votre domaine terminée, vous pouvez également configurer, via l'assistant, des noms de domaines additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait.

> [!warning]
>
> Toutes les adresses créées sur votre service Exchange seront visibles dans l'annuaire des adresses de ce service, y compris celles possédant un nom de domaine différent. Pour dissocier l'affichage des domaines, vous devez commander un nouveau service Hosted Exchange pour le ou les noms de domaine concernés.
>

Pour ajouter un nouveau nom de domaine, sélectionnez le service Hosted Exchange concerné dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et cliquez sur l'onglet `Domaines associés`{.action}. Le tableau affiche les noms de domaines actuellement configurés ou en passe de l'être sur votre service. Pour en ajouter de nouveaux, cliquez sur le bouton `Ajouter un domaine`{.action}, puis suivez les différentes étapes du processus.

Pour en apprendre plus, vous pouvez consulter la documentation intitulée [Ajouter un nom de domaine sur son service Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/ajouter-domaine-exchange/){.external}.

> [!primary]
>
> Si un nom de domaine requiert une action particulière concernant sa configuration, une pastille rouge s'affiche dans la colonne `Diagnostic`{.action} du tableau. En cliquant dessus, les modifications à effectuer s'afficheront. Si ce nom de domaine n’utilise pas la configuration d’OVHcloud (ses serveurs DNS), vous devrez réaliser les modifications depuis l’interface vous permettant de gérer la configuration de votre domaine. 
>

![Ajout d'un domaine](images/first-steps-hosted-exchange-add-domain.png){.external}

### Configurer des comptes Exchange supplémentaires (facultatif)

Vous pouvez configurer des comptes additionnels si vous le souhaitez et si vous ne l'avez pas déjà fait via l'assistant.

Pour cela, cliquez sur le service Hosted Exchange concerné dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, puis sur l'onglet `Comptes e-mail`{.action}. Le tableau affiche les comptes actuellement configurés ou en attente de l'être sur votre service.

Les comptes en attente de configuration s'affichent dans le tableau sous la forme “*@configureme.me*”. Pour les configurer, cliquez sur le logo en forme de crayon, puis suivez les étapes.

> [!primary]
>
> Répétez cette étape autant de fois que nécessaire selon le nombre de comptes que vous possédez. Vous pouvez en commander de nouveaux grâce au bouton `Actions`{.action} puis en cliquant sur `Commander des comptes`{.action}.
>

![Ajout d'un compte](images/first-steps-hosted-exchange-add-account.png){.external}

### Utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne reste plus qu’à les utiliser. Pour cela, OVHcloud met à disposition le webmail **Outlook Web Application** (OWA). Ce dernier est accessible à l’adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/){.external}. Pour y accéder, vous devez y renseigner les identifiants relatifs à votre adresse e-mail. Si vous souhaitez obtenir de l'aide sur l'utilisation de OWA, consultez notre documentation disponible sur ce lien : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

Si vous souhaitez configurer votre adresse e-mail sur un logiciel de messagerie ou un périphérique comme un smartphone ou une tablette, consultez notre documentation accessible depuis ce portail : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}. Pour une utilisation optimale de votre adresse Exchange sur un logiciel, assurez-vous de sa bonne compatibilité avec le service.

OVHcloud propose des licences Outlook en option avec votre compte e-mail Exchange depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, pour y souscrire, consultez notre page [Obtenir une licence Outlook pour Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-licence-outlook-exchange-2013/). 

Vous pouvez également obtenir des licences Office 365 sur la page [https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/fr/collaborative-tools/microsoft-365/){.external}. Nous vous recommandons l'une de ces solutions si vous souhaitez bénéficier du logiciel de messagerie Outlook ou de plus de logiciels de la suite Office, selon vos besoins.

> [!primary]
>
> Exchange permet une synchronisation complète de vos paramètres (filtres, signatures, dossiers, etc.), que vous utilisiez une application web ou un logiciel de messagerie compatible.
> Ainsi, si vous utilisez Exchange sur trois appareils et via des moyens de connexion différents (webmail, logiciel de messagerie ou client compatibles), toutes vos informations seront disponibles en même temps.
>

### Paramétrer les fonctions collaboratives (facultatif)

Maintenant que votre service Hosted Exchange est configuré et fonctionnel, vous pouvez mettre en place les fonctionnalités collaboratives inhérentes au service dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Celles-ci peuvent vous donner la possibilité de créer des ressources (salles de réunion, équipements, etc.), mais aussi des groupes, entre autres.

Pour activer ces différentes fonctions, sélectionnez le service Hosted Exchange concerné dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, puis choisissez parmi les onglets qui s'affichent l'action à effectuer.

Pour obtenir de l'aide sur l'une des fonctionnalités, consultez notre documentation accessible depuis ce portail : [https://docs.ovh.com/fr/microsoft-collaborative-solutions/](https://docs.ovh.com/fr/microsoft-collaborative-solutions/){.external}.

## Aller plus loin

[Créer un groupe de contacts](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-utilisation-des-groupes-mailing-list/)

[Créer et utiliser un compte partagé](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-utilisation-des-comptes-partages/)

[Créer et utiliser des comptes de ressource](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-utilisation-des-comptes-de-ressource/)

[Déléguer des droits sur un compte e-mail](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-donner-les-droits-full-access-sur-un-compte/)

[Partager un dossier depuis l’interface OWA](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-2016-partager-un-dossier-via-le-webmail-owa/)

[Gérer la facturation de vos comptes Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/gestion-facturation-exchange/)

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.