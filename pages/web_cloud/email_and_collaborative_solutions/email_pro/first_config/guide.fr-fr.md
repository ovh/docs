---
title: 'Premiers pas avec la solution E-mail Pro'
excerpt: 'Découvrez comment réaliser la configuration de votre solution E-mail Pro'
updated: 2024-09-03
---

## Objectif

Vous venez d’acquérir une solution E-mail Pro. Celle-ci vous permet de bénéficier d'adresses e-mail professionnelles au prix le plus juste pour soutenir ou commencer votre activité.

**Découvrez comment réaliser la configuration de votre solution E-mail Pro.**

## Prérequis

- Disposer d'une offre [E-mail Pro](/links/web/email-pro).
- Avoir reçu l’e-mail vous confirmant l’installation de votre solution E-mail Pro.
- Disposer d'un nom de domaine.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Étape 1 : accéder à la gestion de votre service

Une fois le service E-mail Pro créé et disponible, vous pouvez le gérer depuis votre [espace client OVHcloud](/links/manager).

Pour cela, connectez-vous à ce dernier, cliquez sur `E-mail Pro`{.action}, puis choisissez le nom du service concerné.

> [!primary]
>
> Le nom d'un service E-mail Pro dans votre espace client OVHcloud débute par *emailpro-*, puis contient une partie de votre référence client et se termine par un chiffre (1 pour le premier service E-mail Pro installé, 2 pour le deuxième, etc.).
>

### Étape 2 : ajouter votre nom de domaine

Après la commande de votre service E-mail Pro, une fenêtre s'affiche automatiquement vous invitant à `Ajouter un domaine`{.action}. Si cette dernière ne s'affiche pas, rendez-vous sur l'onglet `Domaines associés`{.action} puis cliquez sur le bouton `Ajouter un domaine`{.action}.

Deux choix sont possibles :

- **sélectionner un domaine dans la liste** : seuls s'affichent les noms de domaines dont vous avez la gestion dans votre espace client OVHcloud. Si le nom de domaine est enregistré chez OVHcloud mais n'apparait pas dans votre espace client, vous devrez l'ajouter avec l'option « saisir un nom de domaine non géré par votre compte OVHcloud ».
- **saisir un nom de domaine non géré par votre compte OVHcloud** : choisissez cette option si le nom de domaine concerné est enregistré chez OVHcloud mais configurable depuis un autre compte client OVHcloud, **ou** si votre nom de domaine est enregistré dans un autre bureau d'enregistrement. Vous devrez être en mesure de modifier la configuration du nom de domaine (sa zone DNS) afin que le service E-mail Pro puisse fonctionner correctement.

Une fois votre choix fait, cliquez sur le bouton `Suivant`{.action}.

![emailpro](images/emailpro-01.png){.thumbnail}

La fenêtre affiche désormais des informations concernant la configuration des modes.

![emailpro](images/emailpro-02.png){.thumbnail}

- **Si vous avez renseigné un nom de domaine non géré par OVHcloud** : le mode non-autoritatif sera configuré par défaut.

- **Si vous avez sélectionné dans la liste un nom de domaine géré par OVHcloud**, vous devrez choisir entre deux modes.
    - **Autoritatif** : Convient si votre solution  E-mail Pro est la seule solution de messagerie que vous utilisez avec votre nom de domaine. Il ne permet pas l'usage d'une autre solution de messagerie avec votre service.
    - **Non-autoritatif** : Convient si vous utilisez, avec votre nom de domaine, la solution E-mail Pro **ainsi qu'une autre solution de messagerie**.

> **Comprendre les modes Autoritatif et Non-autoritatif**
>
> - Lorsqu'un e-mail est transmis vers votre plateforme E-mail Pro (*Inbound mail server Email Pro*) en mode **autoritatif**, cela signifie que toutes les adresses e-mail de votre nom de domaine sont uniquement hébergées sur cette plateforme.<br><br>Par exemple, si on envoie un e-mail à l'adresse « *mary.johnson@mydomain.ovh* », le serveur E-mail Pro « *Inbound mail server Email Pro* » renvoie un message d'échec à l'expéditeur, car cette adresse n'existe pas sur le serveur E-mail Pro « *Inbound mail server Email Pro* ».
> - Lorsqu'un e-mail est transmis vers votre plateforme E-mail Pro (*Inbound mail server Email Pro*) en mode **non-autoritatif**, cela signifie que les adresses e-mail de votre nom de domaine sont réparties entre votre plateforme e-mail principale (*Inbound mail server Email Pro*) et un autre service e-mail (*Inbound mail server MXplan*).<br><br>Par exemple, si on envoie un e-mail à l'adresse « *mary.johnson@mydomain.ovh* », le serveur E-mail Pro *Inbound mail server Email Pro* transmettra l'e-mail au serveur MXplan « *Inbound mail server MXplan* » pour que ce dernier puisse le délivrer.
>
> ![Add Domain](images/authoritative-mode.png){.thumbnail}
>

> [!warning]
>
> Si vous obtenez le message « **authoritative domain detected** » lors de l'ajout de votre nom de domaine sur votre plateforme e-mail, cela signifie que ce nom de domaine est déclaré en mode **autoritatif** sur une autre plateforme e-mail. Vous devrez donc le passer en mode **non-autoritatif** pour les deux plateformes afin qu'elles puissent cohabiter.

Si vous choisissez le mode **non-autoritatif** et que vous utilisez un service :

- **E-mail OVHcloud (Exchange ou MXplan)**, saisissez directement comme serveur e-mail cible « *mx1.mail.ovh.net* » ( fonctionne de la même façon avec *mx0.mail.ovh.net*, *mx2.mail.ovh.net**, *mx3.mail.ovh.net**, *mx4.mail.ovh.net* ).
- **Email externe à OVHcloud (offre e-mail concurente, serveur e-mail privé)**, saisissez dans la case serveur e-mail cible le nom d'hôte du serveur entrant de ce service externe en s'assurant que celui-ci autorise les requêtes e-mail provenant de votre service E-mail Pro

Le choix du mode n'est pas définitif et peut être modifié par la suite depuis l'espace client OVHcloud.

Cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

**Si vous avez sélectionné un nom de domaine géré par OVHcloud**, la configuration de ce dernier peut être réalisée automatiquement. Pour ce faire, cochez les cases souhaitées et cliquez sur le bouton `Suivant`{.action} pour poursuivre l'ajout du domaine.

![emailpro](images/emailpro-03.png){.thumbnail}

- **SRV** : enregistrement DNS permettant la configuration automatique de votre logiciel de messagerie lorsque vous y ajoutez votre adresse e-mail.
- **MX** : enregistrement DNS des serveurs e-mail nécessaire à la réception des e-mails sur le nom de domaine concerné.
- **DKIM** : Mise en place d'une signature numérique chiffrée pour sécuriser les échanges e-mails. Consultez notre guide « [Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim) » pour plus d'informations.

**Pour un nom de domaine non géré par OVHcloud**, suivez l'étape 3.

En fin de configuration, vérifiez les informations qui s'affichent puis cliquez sur le bouton `Confirmer`{.action} pour lancer l'ajout du domaine.

### Étape 3 : configurer votre nom de domaine

Une fois le nom de domaine ajouté en tant que domaine associé, vérifiez son paramétrage grâce au tableau qui s'affiche.

La colonne `Diagnostic`{.action} vous permet de contrôler la configuration DNS du nom de domaine. Une pastille rouge apparaîtra si ces paramètres doivent être modifiés. Il y a deux possibilités:

- **Configuration automatique lors de l'ajout d'un nom de domaine OVHcloud** : si vous venez juste d'effectuer la modification, l’affichage dans [l'espace client OVHcloud](/links/manager) peut prendre quelques heures.

- **Configuration manuelle pour un nom de domaine non géré par OVHcloud** : cliquez sur la pastille rouge afin de découvrir les modifications à réaliser.
    - *Pour un enregistrement CNAME*, aidez-vous de notre guide « [Créer un champ CNAME à l’ajout d’un domaine associé](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname) ».
    - *Pour un enregistrement MX*, aidez-vous de notre guide « [Ajouter un champ MX à la configuration de son nom de domaine](/pages/web_cloud/domains/dns_zone_mx) ».
    - *Pour un enregistrement SRV*, complétez votre zone DNS à l'aide des informations données lorsque vous cliquez sur la pastille rouge. Vous pouvez vous aider du guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » pour ajouter cet enregistrement.
    - *Pour un enregistrement SPF*, complétez votre zone DNS à l'aide des informations données lorsque vous cliquez sur la pastille. Vous pouvez vous aider du guide « [Améliorer la sécurité des e-mails via un enregistrement SPF](/pages/web_cloud/domains/dns_zone_spf) » pour ajouter cet enregistrement.
    *Pour un enregistrement DKIM*, complétez votre zone DNS à l'aide des informations données lorsque vous cliquez sur la pastille. Vous pouvez vous aider du guide « [Améliorer la sécurité des e-mails via un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim) » pour ajouter cet enregistrement.

![emailpro](images/emailpro-04.png){.thumbnail}

### Étape 4 : configurer les comptes E-mail Pro

Pour configurer vos adresses e-mail, positionnez-vous sur l'onglet `Comptes e-mail`{.action}. Le tableau affiche les comptes que vous avez commandés sous la forme “*@configureme.me*”.

Pour les configurer, cliquez sur le bouton `...`{.action} puis sur `Modifier`{.action}.

![emailpro](images/emailpro-05.png){.thumbnail}

Complétez les informations qui s'affichent.

- **Compte e-mail** : renseignez le nom que portera votre adresse e-mail (votre prénom.nom, par exemple) et sélectionnez le domaine concerné dans la liste.

> [!warning]
>
> Le choix du nom de votre adresse e-mail doit respecter les conditions suivantes :
>
> - Minimum 2 caractères
> - Maximum 32 caractères
> - Aucun caractère accentué
> - Pas de caractères spéciaux, à l'exception des caractères suivants : `.`, `,`, `-` et `_`

- **Prénom** : renseignez un prénom.
- **Nom** : renseignez un nom.
- **Nom à afficher** : renseignez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés depuis cette adresse.
- **Mot de passe et confirmation** : définissez un mot de passe fort composé de (au minimum) 8 caractères, une majuscule, une minuscule et un chiffre. Pour des raisons de sécurité, n'utilisez pas deux fois le même mot de passe. Choisissez-en un qui n'a aucun rapport avec vos informations personnelles (évitez par exemple de mentionner vos nom, prénom et date de naissance). Changez-le régulièrement.

> [!warning]
>
> Le choix du mot de passe doit respecter les conditions suivantes :
>
> - Minimum 9 caractères
> - Maximum 30 caractères
> - Aucun caractère accentué

Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}, vérifiez les informations affichées puis cliquez sur `Confirmer`{.action} pour initier la configuration du compte.

> [!primary]
>
> Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition. Vous pouvez commander des comptes additionnels grâce au bouton `Commander des comptes`{.action}.
>

### Étape 5 : utiliser vos adresses e-mail

Une fois vos comptes configurés, il ne vous reste plus qu'à les utiliser ! Pour cela, OVHcloud met à disposition un applicatif en ligne (une *webapp*). Ce dernier est accessible à l’adresse <https://www.ovh.com/fr/mail/> et vous devrez y renseigner les identifiants relatifs à votre adresse e-mail.

Si c'est la première fois que vous vous connectez à OWA avec cette adresse e-mail, vous serez invité à définir la langue de l'interface ainsi que le fuseau horaire. Ensuite, cliquez sur `Enregistrer`{.action} pour continuer.

> [!primary]
>
> Les fuseaux horaires sont listés selon [la norme UTC (temps universel coordonné)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#/media/File:World_Time_Zones_Map.png), et non par ordre alphabétique des villes.
>
> **Exemple** : Pour l'Europe de l'Ouest, il s'agit de UTC +1 (Bruxelles, Copenhague, Madrid, Paris).

Pour configurer votre adresse e-mail sur un logiciel de messagerie ou un appareil, comme un _smartphone_ ou une tablette, [aidez-vous de nos guides de configuration](/products/web-cloud-email-collaborative-solutions-email-pro). Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre compte E-mail Pro, retrouvez ci-dessous les paramètres à utiliser :

|Type de serveur|Nom du serveur|Type de sécurité|Port|
|---|---|---|---|
|Entrant|pro**?**.mail.ovh.net|SSL/TLS|993|
|Sortant|pro**?**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**?**.mail.ovh.net. Vous devrez remplacer le « ? » par le chiffre désignant le serveur de votre service E-mail Pro.
>
> Retrouvez ce chiffre dans votre [espace client OVHcloud](/links/manager), dans la rubrique `Web Cloud`{.action} puis `E-mail Pro`{.action}. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
>

## Aller plus loin

[Consulter son compte depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Règles de boîte de réception depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)

[Ajouter un alias sur son compte e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[Ajouter un pied de page pour vos comptes e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

[Gérer la facturation de vos comptes E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Gérer la politique de sécurité d’un service e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/security-policy)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).