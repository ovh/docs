---
title: FAQ sur la solution Zimbra OVHcloud
excerpt: "Retrouvez les questions concernant la migration vers Zimbra pour l'offre MX Plan OVHcloud"
updated: 2024-05-31
---

## Objectif

Dans le cadre de l'évolution de l'offre MX Plan, une migration est planifiée depuis la solution actuelle utilisant le webmail Outlook Web Acces (OWA) vers la solution Zimbra et son webmail.

Si vous êtes concerné par cette migration, vous retrouverez ici les questions les plus fréquentes à ce sujet.

### Zimbra, qu'est-ce que c'est ?

Zimbra est une solution collaborative open source populaire. Vous serez migré sur une version professionnelle (Zimbra Network Edition) de cette solution.

Zimbra propose de nombreuses fonctionnalités qui seront prochainement proposées dans les catalogues OVHcloud.

### Quelles sont les différences entre les webmail Outlook Web Acces (OWA) et Zimbra ?

Zimbra propose les mêmes fonctionnalités et une ergonomie proche de OWA. Un guide d'utilisation de Zimbra est disponible à [cette adresse](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Comment puis-je configurer mon adresse e-mail sur un logiciel de messagerie ?

Pour configurer votre adresse e-mail Zimbra sur votre logiciel de messagerie, consultez notre page
« [Configurer son adresse e-mail Zimbra sur un logiciel de messagerie](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps) ».

### La migration ouvre-t-elle de nouvelles fonctionnalités ?

La migration vers le nouveau webmail maintient le même niveau de services que le précédent.

### Quand aura lieu la migration de mes services ?

Des e-mails de notification pour chaque service vous seront transmis **2 semaine** puis **1 jour** avant la migration.

Vos services seront migrés de manière progressive, il est donc possible que vos différents services soient migrés avec plusieurs semaines d’écart.

### Comment préparer ma migration vers Zimbra?

La migration ne nécessite aucune action de votre part concernant le contenu des comptes e-mail.

Cependant, une courte interruption de service est nécessaire durant la phase de migration. Il est donc vivement conseillé d'informer vos utilisateurs lorsque la date de migration de vos comptes e-mail vous sera communiquée.

### Ai-je des manipulations à effectuer dans le cadre de la migration vers Zimbra?

Cette migration a été pensée pour minimiser l'impact du processus de migration sur l’utilisation du produit MX Plan.

Aucune manipulation n'est attendue de votre part.

### Des changements sont-ils à prévoir dans l'espace client OVHcloud ?

Aucun changement n'est prévu dans l'espace client. La migration se faisant sous une nouvelle solution, quelques fonctionnalités mineures pourraient ne pas être accessibles dans les premières semaines suivant la migration.

Retrouvez la liste des fonctionnalités et leurs statuts pour cette migration [à la fin de cette FAQ](#features).

### Vais-je devoir reconfigurer mon logiciel de messagerie ?

Non, la migration ne nécessite pas de reconfiguration sur votre logiciel de messagerie.

Dans le cas d'un changement de mot de passe, il est nécessaire de saisir le nouveau mot de passe dans votre logiciel de messagerie.

### La migration change-t-elle la facturation de mon service ?

Non, la migration vers le nouveau webmail Zimbra est comprise dans votre offre. Il n'y a pas de changement sur la partie facturation ou le contrat de votre service MX Plan.

### Où puis-je trouver des guides ?

Un guide d'utilisation de Zimbra est disponible à [cette adresse](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Où seront hébergés mes e-mails après la migration ?

La migration se fait au sein de nos datacentres français. Vos données restent en France.

### Y aura-t-il des changements concernant le traitement de mes données ?

Aucun changement n'est prévu concernant le traitement des données et leur utilisation. Vous pouvez retrouver toutes ces informations sur le contrat de votre offre MX Plan.

### Comment rester sur le webmail actuel (OWA) ?

Il vous est possible à tout moment de migrer vers une offre qui utilise le webmail OWA, à savoir E-mail Pro ou Exchange. Pour cela, nous vous invitons à consulter notre guide « [Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel) ».

### Puis je m'opposer à la migration ?

Non. OVHcloud s'engage à fournir un service avec le meilleur rapport qualité-prix pour ses offres MX Plan. C'est pour cette raison que nous avons choisi de migrer les offres actuelles vers la solution Zimbra.

Il est toutefois possible de continuer à profiter de l'interface OWA [en migrant vos comptes e-mail vers une solution E-mail Pro ou Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

### Puis je résilier mon offre MX Plan ?

Pour résilier votre offre dans la section « Mes services » de votre espace OVHCloud, consultez la rubrique MX Plan de notre guide « [Comment résilier vos services OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services#mxplan) ».

### Les fonctionnalités maintenues , suspendues ou retirées lors de la migration vers Zimbra. <a name="features"></a>

| Fonction | Description | État |
|-|-|-|
|**Gestion du compte e-mail depuis l'espace client**<br>(Mot de passe, alias, quota)|Maintenue|✅|
|**Offres et facturation**|Maintenues|✅|
|**Redirection / Alias / mailing list depuis l'espace client**|Maintenus|✅|
|**Configuration DNS**<br>(SPF / MX / SRV)|Maintenue|✅|
|**Délégations de compte e-mail**|Maintenues, via le webmail|✅|
|**Connexion aux logiciels de messagerie**<br>(IMAP/POP)|Maintenue, aucune modification de configuration nécessaire.|✅|
|**Contenu du compte e-mail**<br>(e-mails, dossiers, contacts)|Migré|✅|
|**E-mails reçus durant le processus de migration**|Délivrés|✅|
|**Réponse automatique / Répondeur**|Maintenue|✅|
|**Règle de boites de réception**|- Les règles configurées depuis votre logiciel de messagerie seront inchangées.<br>- Les règles configurées depuis le webmail OWA seront quant à elles migrées vers le webmail Zimbra. Seule une très faible proportion de règles ne pourront pas être migrées pour cause d'incompatibilité. Celles-ci seront envoyées sous la forme d'un e-mail sur le compte e-mail de l'utilisateur et pourront être recréées manuellement.<br>- *Règle incompatible* : Règle utilisant deux types de conditions comme ET et OU simultanément. Par exemple, si le message est reçu de (**john@mydomain.ovh** OU **mary@mydomain.ovh**) ET le sujet contient « facture », alors déplacer dans le dossier « Important »|⚠️|
|**Signature personnelle**|- Les signatures configurées depuis votre logiciel de messagerie seront inchangées.<br>- Les signatures configurées depuis le webmail OWA ne seront pas migrées en raison du formatage.|⚠️|
|**Bloquer / Autoriser**|Cette fonctionnalité, permettant de bloquer des e-mails venant d'un nom de domaine particulier ou d'une adresse e-mail spécifique, ne sera pas présente sur Zimbra. Ce comportement peut cependant être facilement recréé via une règle de boite de réception depuis Zimbra.|❌|
|**Pied de page**<br>(signature de nom de domaine configurable via l'espace client)|Cette fonctionnalité ne sera pas présente vers la nouvelle infrastructure Zimbra. Il est cependant toujours possible de configurer une signature au niveau du compte e-mail.|❌|
|**Politique de Sécurité**|Cette fonctionnalité de l'espace client permettant de changer la politique de gestion des mots de passe ne sera pas présente, dans un premier temps, sur la solution Zimbra.<br> La politique de sécurité appliquée par défaut sur les mots de passe requiert un minimum de 10 caractères alphanumeriques, 1 caractère spécial, 1 majuscule.|❌|
|**Spoofing**|Le spoofing consiste à envoyer un e-mail depuis une identité différente du compte e-mail sur lequel vous êtes authentifié. Cette pratique est incompatible avec les protocoles de sécurité SPF et DKIM nécessaires à la bonne délivrabilité des e-mails.<br>Depuis Zimbra, vous pouvez configurer une autre identité différente du compte e-mail utilisé, à condition qu'une délégation y soit appliquée.|❌|
|**Prise en charge du protocole de sécurité TLS (Transport Layer Security) 1.0 et 1.1.**|Les versions 1.0 et 1.1 sont considérées comme vulnérables aux attaques et ne répondent plus aux normes de sécurité actuelles.<br>Si votre navigateur internet ne prend pas en charge **au minimum le protocole TLS 1.2**, nous vous recommandons d'installer les dernières mises à jour de sécurité et de fonctionnalités.|❌|

## Aller plus loin

[MX Plan - Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.