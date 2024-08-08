---
title: FAQ e-mails OVHcloud
excerpt: 'Retrouvez les questions les plus fréquemment posées sur les e-mails OVHcloud'
updated: 2024-06-27
---

## FAQ e-mails

### Que faire si l'émission/réception de mes e-mails est impossible ?

La plupart du temps, une émission/réception d'e-mails impossible est liée à la configuration de votre adresse sur votre logiciel de messagerie. Pour le vérifier, testez-le en vous connectant sur le [webmail](/links/web/email) et réalisez un test d'envoi et de réception à partir de votre adresse.

* Si cela fonctionne normalement, c'est que le phénomène provient bien de votre configuration logicielle.
* À l'inverse si l'émission ou réception reste impossible, d'autres solutions s'offrent à vous.

Suite à l'envoi d'un e-mail sur votre compte mail, recevez-vous un message d'erreur ? Si oui, repérez le message d'erreur, il pourra vous en préciser la raison (boite pleine, boite non existante ...).

Vous pouvez également vérifier que votre nom de domaine livre les e-mails au bon endroit. Pour cela, depuis votre [espace client OVHcloud](/links/manager), sélectionnez la zone DNS de votre nom de domaine et regardez les enregistrements de type MX mis en place. Ces enregistrements doivent être sous la forme « mx*.mail.ovh.net. » (remplacez \* par un chiffre entre 0 et 3).
Si les enregistrements MX sont différents, c'est que vous avez potentiellement une offre e-mail d'un autre opérateur qu'OVHcloud.

**Trucs et Astuces** : Si la connexion à votre webmail est impossible, votre mot de passe est peut-être erroné. Vérifiez-le et, si nécessaire, nous vous invitons à le modifier depuis votre [espace client OVHcloud](/links/manager) et à renouveler votre connexion. Pour cela, vous pouvez vous appuyer sur [notre documentation](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).

### Comment configurer mon adresse e-mail et l'utiliser avec le webmail ?

Il est possible de configurer votre compte e-mail sur un logiciel de messagerie tel que Outlook, Thunderbird, Mail de Mac...
Pour ce faire nous vous mettons à disposition des guides afin d'effectuer la mise en place de votre adresse. Vous pouvez les retrouver sur [cette page](/products/web-cloud-email-collaborative-solutions-mx-plan).

Grâce au [webmail](/links/web/email), vous pouvez accéder à tout moment à votre messagerie, depuis n'importe quel appareil connecté. Une fois votre compte e-mail créé, connectez-vous ici pour y accéder.

**Trucs et Astuces** : Si vous configurez votre compte e-mail sur un logiciel de messagerie, nous vous conseillons de le configurer avec le protocole IMAP. De cette manière, les e-mails resteront stockés sur le serveur et vous pourrez les consulter où que vous soyez depuis le [webmail](/links/web/email). Pour cela, vous pouvez vous appuyer sur [notre documentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

### Comment gérer mes services e-mails ?

L'ensemble de vos adresses e-mail se gère depuis votre [espace client OVHcloud](/links/manager). Pour cela, une fois connecté, accédez au produit concerné. Vous pouvez ainsi modifier le mot de passe de vos adresses e-mail, vérifier leur taux de remplissage, créer de nouvelles adresses ou supprimer des adresses existantes.

**Trucs et Astuces** : Sur les offres e-mail MX Plan, vous pouvez déléguer la gestion d'un compte e-mail à un autre compte OVHcloud tout en gardant vous-même la main sur celui-ci. Pour cela, il vous suffit de configurer une délégation, depuis votre [espace client OVHcloud](/links/manager). Vous pouvez vous appuyer sur [notre documentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

### Que faut-il savoir avant de créer une adresse e-mail ?

Créer une adresse e-mail n'est pas une opération complexe, mais il est nécessaire de respecter des règles pour définir le **nom de votre adresse e-mail** et son **mot de passe**.

Le **nom de votre adresse e-mail** doit respecter les règles suivantes :

- Minimum 2 caractères
- Maximum 32 caractères
- Aucun caractère accentué
- Pas de caractères spéciaux à l'exception des caractères suivants : `.`, `,`, `-` et `_`

Le **mot de passe** doit respecter les règles suivantes :

- Minimum 9 caractères
- Maximum 30 caractères
- Aucun caractère accentué

> [!warning]
> Pour des raisons de sécurité, n'utilisez pas deux fois le même mot de passe. Choisissez-en un qui n'a aucun rapport avec vos informations personnelles (évitez par exemple de mentionner vos nom, prénom et date de naissance). Changez-le régulièrement.

### Comment récupérer mon mot de passe oublié ?

Pour des raisons de sécurité et de confidentialité, il n'est pas possible de **récupérer** un mot de passe. Comme cela est décrit dans notre « [Modifier le mot de passe d'une adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password) », il est nécessaire de réinitialiser votre mot de passe si vous ne le connaissez plus.

> [!primary]
>
> Si vous souhaitez stocker un mot de passe, il est conseillé d'utiliser un gestionnaire de mot de passe, comme **Keepass** par exemple.

### Comment limiter la réception de spams ?

Pour limiter la réception de SPAMS, vous pouvez mettre en place des filtres sur vos e-mails (appelées « Filtres » sur l'offre MXPlan). Ils auront pour but de supprimer ou de déplacer des e-mails dans le dossier « courriers indésirables » dès leur réception.
Pour ce faire, connectez-vous à votre [espace client OVHcloud](/links/manager), puis dans la rubrique `E-mail`, sélectionnez le domaine concerné , l'onglet `E-mail`{.action} puis dans la colonne `Filtre`{.action}, cliquez sur le bouton d'action.

Si la colonne `Filtre`{.action} n'est pas présente dans votre espace-client, la création de filtres doit alors s'effectuer via des règles de gestion de boîte de réception dans le [webmail](/links/web/email). Vous pouvez consulter le guide suivant pour plus de détails : [Règles de boîte de réception depuis l'interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Trucs et Astuces** : Si vous définissez un filtre sur la réception de SPAMS, il est possible que des e-mails légitimes soient considérés comme étant des SPAMS. On appelle cela des « faux positifs ».Si cela vous arrive, nous vous invitons à déclarer une demande d'assistance dans votre [espace client OVHcloud](/links/manager) afin de nous en faire part. Nous pourrons ainsi faire le nécessaire afin que ceux-ci ne soient plus considérés comme SPAMS par la suite.

### Mon adresse e-mail est saturée, je n'ai plus d'espace. Que puis-je faire ?

Si vous avez souscrit à [l'une de nos offres e-mail OVHcloud](https://www.ovhcloud.com/fr/emails/) et que l'un de vos comptes e-mail est saturé, consultez notre guide « [Gérer l'espace de stockage d'un compte e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota) ». Ce guide vous aidera à déterminer si vous pouvez optimiser l'espace existant ou s’il est nécessaire de changer d'offre e-mail pour augmenter la capacité de stockage.

### Je souhaite changer d'offre e-mail pour mon adresse, comment puis-je le faire tout en gardant son contenu ?

Vous souhaitez changer [d'offre e-mail](https://www.ovhcloud.com/fr/emails/) pour bénéficier de plus d'espace et de fonctionnalités, mais vous souhaitez conserver le contenu de votre adresse existante. Pour cela nous vous invitons à suivre l'un de nos guides de migration :

- [Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrer vos adresses e-mail d'une plateforme e-mail OVHcloud vers une autre](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)
- [Migrer des comptes e-mail via OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)
- [Migrer un compte Gmail vers un compte e-mail OVHcloud via OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail)

### L'offre Office 365 Pro Plus comprend-t-elle une licence Skype?

L’offre Office 365 Pro Plus ne contient pas de licence Skype. Seul le logiciel Skype for Business y est inclus.

### Comment transférer sans interruption de service mes e-mails, mon site web, ma base de données et mon nom de domaine sur les serveurs OVHcloud ? 

Consultez le guide « [Migrer son site web et ses services associés vers OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) » pour obtenir l'ensemble des étapes à suivre.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).