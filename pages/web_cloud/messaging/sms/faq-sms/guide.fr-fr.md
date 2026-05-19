---
title: "FAQ SMS OVHcloud"
excerpt: "Retrouvez les réponses aux questions les plus fréquemment posées sur le service SMS OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Retrouvez ici les questions les plus fréquemment posées sur le service SMS OVHcloud.

## FAQ

### Compte et crédits

/// details | Comment créer un compte SMS OVHcloud ?

Pour créer un compte SMS OVHcloud, rendez-vous sur la [page dédiée aux offres SMS OVHcloud](/links/telecom/sms) et choisissez le pack de crédits adapté à vos besoins. La commande créera automatiquement un compte SMS accessible depuis votre [espace client OVHcloud](/links/manager), dans la [section SMS](/links/control-panel/telecom-sms). Chaque compte SMS est identifié par un nom unique (ex : `sms-xx12345-1`). Vous pouvez avoir plusieurs comptes SMS sur un même identifiant client OVHcloud, ce qui permet de séparer les usages (transactionnel, marketing, notifications internes) et les budgets.

///

/// details | Comment fonctionne le système de crédits SMS ?

Le service SMS OVHcloud fonctionne sur un système de crédits prépayés. Un crédit correspond à un SMS standard de 160 caractères (encodage GSM 7-bit) vers un numéro français. Le coût en crédits varie selon :

- **La destination :** un SMS vers la France métropolitaine consomme 1 crédit. Les destinations internationales consomment plus de crédits (consultez la [grille tarifaire OVHcloud](/links/telecom/sms-prices)).
- **La longueur du message :** un SMS dépassant 160 caractères est automatiquement découpé en plusieurs SMS concaténés. Un message de 300 caractères consomme 2 crédits.
- **L'encodage :** si votre message contient des caractères spéciaux ou des accents non pris en charge par le GSM 7-bit, l'encodage Unicode (UCS-2) est utilisé, limitant chaque SMS à 70 caractères.

Le solde de crédits est consultable en temps réel depuis l'espace client OVHcloud ou via l'API.

Pour plus de détails, consultez le guide « [Gérer les crédits SMS et activer la recharge automatique](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms) ».

///

/// details | Comment activer la recharge automatique de crédits SMS ?

La recharge automatique permet de recréditer automatiquement votre compte SMS lorsque le solde passe en dessous d'un seuil défini. [Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis accédez à `Options`{.action} > `Recharge automatique`{.action}. Configurez le seuil de déclenchement et le montant de la recharge. Un moyen de paiement valide doit être enregistré sur votre compte. Cette option est indispensable pour les envois de SMS transactionnels où une rupture de crédits bloquerait vos notifications critiques.

Pour plus de détails, consultez le guide « [Gérer les crédits SMS et activer la recharge automatique](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms) ».

///

/// details | Comment consulter l'historique de mes SMS envoyés et reçus ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS puis l'onglet `Message et campagne`{.action} > `Gestion des SMS`{.action} > `Historique des envois`{.action} ou `SMS reçus`{.action}. Vous pouvez filtrer l'historique par date, expéditeur, destinataire ou message. L'historique est conservé pendant 6 mois. L'historique peut également être exporté au format CSV pour analyse.

Pour plus de détails, consultez le guide « [Gérer l'historique des SMS](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms) ».

///

/// details | Comment paramétrer des alertes de seuil de crédits SMS ?

Pour les **utilisateurs API**, [accédez à la section SMS](/links/control-panel/telecom-sms), sélectionnez votre compte, puis `Utilisateurs API`{.action}. Cliquez sur `...`{.action} > `Limite`{.action} pour l'utilisateur concerné et configurez :

- **Seuil d'alerte :** nombre de crédits restant en dessous duquel la notification est envoyée.
- **Type de notification :** e-mail, SMS, ou les deux.

Pour le **compte global**, la recharge automatique offre une alternative : elle recrédite le compte automatiquement lorsque le solde passe sous un seuil. Les deux mécanismes sont complémentaires.

Pour plus de détails, consultez le guide « [Tout savoir sur les utilisateurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms) ».

///

### Envoi de SMS

/// details | Comment envoyer un SMS depuis l'espace client OVHcloud ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis cliquez sur `Envoyer un SMS`{.action}. Renseignez :

- **L'expéditeur :** numéro court (permettant la réponse, France uniquement), expéditeur alphanumérique personnalisé, ou numéro mobile virtuel.
- **Le(s) destinataire(s) :** saisissez un ou plusieurs numéros au format international (ex : `+33612345678`), ou sélectionnez un carnet d'adresses/liste de destinataires.
- **Le message :** rédigez votre texte (un compteur indique le nombre de caractères et de SMS consommés).

Vous pouvez planifier l'envoi à une date/heure ultérieure. Un aperçu du coût en crédits est affiché avant l'envoi.

Pour plus de détails, consultez le guide « [Envoyer des SMS depuis l'espace client OVHcloud](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client) ».

///

/// details | Comment envoyer des SMS via une URL (http2sms) ?

La fonction http2sms permet d'envoyer un SMS via un simple appel HTTP GET ou POST, sans SDK ni authentification OAuth. Elle est idéale pour les intégrations simples depuis un script, un automate ou un logiciel métier. L'URL d'appel est de la forme :

`https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=sms-xx12345-1&login=utilisateur&password=motdepasse&from=expediteur&to=+33612345678&message=Votre+message`

Les paramètres obligatoires sont : `account` (nom du compte SMS), `login` et `password` (identifiants de l'utilisateur API), `from` (expéditeur), `to` (destinataire au format international), `message` (contenu du SMS). Pour sécuriser l'accès, configurez des restrictions par IP sur l'utilisateur API utilisé. La méthode POST avec HTTPS est recommandée.

Pour plus de détails, consultez le guide « [Envoyer des SMS depuis une URL - http2sms](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_url_-_http2sms) ».

///

/// details | Comment envoyer des SMS depuis une adresse e-mail ?

OVHcloud permet l'envoi de SMS depuis votre adresse e-mail, peu importe l'expéditeur. Envoyez un e-mail à l'adresse `numéro_destinataire@email2sms.ovh.net` (ex : `0033612345678@email2sms.ovh.net`). Le corps de l'e-mail constitue le contenu du SMS. L'objet de l'e-mail doit contenir vos identifiants au format : `compte:login:password`. Cette méthode est particulièrement utile pour des alertes automatisées depuis des systèmes qui ne prennent en charge que l'envoi d'e-mails (serveurs de monitoring, applications métier).

Pour plus de détails, consultez le guide « [Envoyer des SMS depuis une adresse e-mail](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_adresse_email) ».

///

/// details | Comment envoyer des SMS en masse de manière performante via l'API ?

Pour envoyer des SMS en masse via l'API OVHcloud de manière optimale :

- **Utilisez l'envoi groupé :** l'endpoint `POST /sms/{serviceName}/jobs` accepte un tableau de destinataires. Envoyez vos SMS par lots (ex : 500 destinataires par appel API) plutôt qu'un appel API par SMS.
- **Gérez les erreurs et les retry :** implémentez une logique de retry avec backoff exponentiel pour les erreurs temporaires (HTTP 429 Too Many Requests, HTTP 500).
- **Utilisez les callbacks DLR :** configurez une URL de callback sur votre utilisateur API plutôt que de requêter l'API pour chaque statut.
- **Planifiez vos envois :** l'API prend en charge l'envoi différé (`differedPeriod`).
- **Pour les très gros volumes :** privilégiez le protocole SMPP.

Surveillez votre consommation de crédits pendant les envois en masse et assurez-vous que la recharge automatique est activée.

///

/// details | Comment créer ma première campagne SMS ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis cliquez sur `Envoyer un SMS`{.action}. Les étapes sont :

1. **Choisir l'expéditeur :** sélectionnez un numéro court, un expéditeur alphanumérique ou un VLN.
2. **Définir les destinataires :** ajoutez-les manuellement, importez une liste CSV, ou sélectionnez un carnet d'adresses existant.
3. **Rédiger le message :** rédigez votre texte. Vous pouvez utiliser des variables de personnalisation si vous avez importé une liste avec des colonnes supplémentaires (nom, prénom, etc.).
4. **Planifier l'envoi :** choisissez un envoi immédiat ou planifié à une date/heure précise.
5. **Confirmer et envoyer :** vérifiez le résumé (nombre de destinataires, coût en crédits) et validez.

Le suivi de la campagne est disponible dans `Message et campagne`{.action} > `Gestion des campagnes`{.action} > `Statistiques et historique`{.action}.

Pour plus de détails, consultez le guide « [Ma première campagne SMS](/pages/web_cloud/messaging/sms/ma_premiere_campagne_sms) ».

///

/// details | Comment gérer mes listes de destinataires SMS ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis accédez à `Contacts`{.action} > `Créer une liste de contacts`{.action}. Vous pouvez :

- **Créer une liste** en important un fichier CSV contenant une colonne `number` avec les numéros au format international.
- **Nettoyer une liste** avec deux options : nettoyage gratuit (dédoublonnage et vérification syntaxique) ou nettoyage premium (vérification HLR de la validité des numéros, facturé 0,1 crédit par contact).
- **Supprimer** une liste obsolète.

Le nettoyage HLR permet d'éliminer les numéros inactifs ou invalides, améliorant le taux de délivrabilité et réduisant les coûts d'envoi inutiles.

Pour plus de détails, consultez le guide « [Liste de destinataires SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms) ».

///

/// details | Comment gérer mes carnets d'adresses SMS ?

Les carnets d'adresses SMS offrent une gestion plus riche des contacts (nom, prénom, numéro). [Accédez à la section SMS](/links/control-panel/telecom-sms), sélectionnez votre compte SMS, puis accédez à `Contacts`{.action} > `Carnet d'adresses`{.action}. Vous pouvez :

- Créer un nouveau carnet et y ajouter des contacts manuellement.
- Importer un fichier CSV avec les colonnes : nom, prénom, numéro (format international).
- Modifier ou supprimer des contacts individuellement.
- Utiliser un carnet d'adresses comme liste de destinataires lors de l'envoi de SMS.

Le carnet d'adresses est idéal pour des envois récurrents à un groupe stable de contacts. Pour des envois ponctuels à des listes variables, les listes de destinataires sont plus adaptées.

Pour plus de détails, consultez le guide « [Gérer mes carnets d'adresses SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms) ».

///

/// details | Quelle est la différence entre un SMS standard (160 caractères) et un SMS long ?

Un SMS standard utilisant l'encodage GSM 7-bit peut contenir jusqu'à **160 caractères**. Si votre message dépasse cette limite, il est découpé en plusieurs SMS concaténés (SMS longs) qui sont réassemblés sur le téléphone du destinataire. Les limites sont :

- **1 SMS :** jusqu'à 160 caractères.
- **2 SMS :** de 161 à 306 caractères (153 caractères utiles par segment, les 7 octets restants servant à l'en-tête de concaténation).
- **3 SMS :** de 307 à 459 caractères.
- Et ainsi de suite, jusqu'à un maximum de 6 SMS concaténés (918 caractères).

Si votre message utilise l'encodage **Unicode (UCS-2)** (nécessaire pour les emojis, alphabets non latins), chaque SMS est limité à **70 caractères** (67 par segment en mode concaténé). Chaque segment consomme 1 crédit SMS.

///

/// details | Quels caractères spéciaux font basculer un SMS en encodage Unicode ?

L'encodage GSM 7-bit (standard) prend en charge un jeu de caractères limité. Les caractères suivants provoquent un basculement vers l'encodage Unicode (UCS-2), réduisant la capacité du SMS de 160 à 70 caractères :

- Les **emojis** (tous sans exception).
- Les caractères **accentués non GSM** : certains accents sont pris en charge (é, è, ê, ù, à, etc.) mais d'autres non (ő, ű, ā, etc.).
- Les caractères des alphabets **non latins** : cyrillique, arabe, chinois, japonais, coréen, etc.
- Certains **symboles typographiques** : guillemets typographiques « », tiret cadratin —, etc.

L'interface de l'espace client OVHcloud affiche automatiquement le nombre de caractères restants et le nombre de SMS qui seront consommés.

///

/// details | Quel est le délai de livraison d'un SMS envoyé via OVHcloud ?

Dans des conditions normales, un SMS est délivré en quelques secondes (généralement **moins de 10 secondes** vers les opérateurs français). Ce délai peut varier en fonction de :

- **La destination :** les SMS internationaux peuvent avoir un délai plus long (jusqu'à 30-60 secondes).
- **La charge du réseau :** en période de forte charge (nouvel an, événements nationaux), les opérateurs mobiles peuvent introduire des délais supplémentaires.
- **Le statut du téléphone du destinataire :** si le téléphone est éteint ou hors couverture, le SMS est stocké par l'opérateur et délivré dès que le téléphone est de nouveau joignable (durée de stockage : 48 à 72 heures selon les opérateurs).
- **Les envois en masse :** les campagnes de plusieurs milliers de SMS sont envoyées progressivement pour respecter les débits autorisés par les opérateurs.

Les accusés de réception (DLR) vous permettent de confirmer la livraison effective au destinataire.

///

/// details | Mes SMS ne sont pas délivrés, comment diagnostiquer le problème ?

Procédez aux vérifications suivantes :

1. **Vérifiez votre solde de crédits :** un solde à zéro bloque immédiatement tous les envois.
2. **Consultez l'historique d'envoi :** dans `Message et campagne`{.action} > `Gestion des SMS`{.action} > `Historique des envois`{.action}, vérifiez le statut de chaque SMS. Un code PTT indique la raison de l'échec.
3. **Vérifiez le format des numéros :** tous les numéros doivent être au format international (`+33...`). Un format local (`06...`) provoquera un échec.
4. **Vérifiez l'expéditeur :** un expéditeur alphanumérique en attente de validation ne permettra pas l'envoi.
5. **Vérifiez la liste noire :** si le destinataire a répondu STOP, son numéro est en liste noire.
6. **Vérifiez le quota de l'utilisateur API :** si vous envoyez via l'API, vérifiez que le quota n'est pas épuisé.
7. **Vérifiez le contenu :** les SMS contenant des URL envoyés via un numéro court sont bloqués.

///

### Expéditeurs et réponses

/// details | Quels types d'expéditeurs SMS puis-je utiliser ?

OVHcloud propose trois types d'expéditeurs :

- **Numéro court permettant la réponse :** expéditeur par défaut, numéro court à 5 chiffres attribué aléatoirement. Le destinataire peut répondre au SMS. Disponible uniquement pour la France (hors DOM-TOM). Attention : il n'est pas possible d'envoyer un SMS contenant une URL via un numéro court.
- **Expéditeur alphanumérique :** nom personnalisé affiché comme expéditeur (ex : « MaSociete »). Maximum 11 caractères. Le destinataire ne peut pas répondre. La création nécessite un justificatif et est validée sous 72 heures en moyenne.
- **Numéro mobile virtuel (VLN) :** numéro de mobile français au format 06/07 attribué à votre compte SMS. Permet la réponse et donne une apparence de numéro mobile classique.

Pour plus de détails, consultez le guide « [Tout savoir sur les expéditeurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) ».

///

/// details | Comment ajouter un expéditeur alphanumérique personnalisé ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis cliquez sur l'onglet `Expéditeurs`{.action}. Cliquez sur `Actions`{.action} > `Ajouter`{.action} et choisissez « Ajouter manuellement des expéditeurs ». Renseignez :

- **L'expéditeur souhaité :** maximum 11 caractères alphanumériques (lettres et chiffres, pas de caractères spéciaux).
- **Une description** pour votre usage interne.
- **Une justification :** expliquez le lien entre votre identité et l'expéditeur demandé.
- **Un justificatif :** papier à en-tête de la société, extrait Kbis, ou tout document prouvant votre droit à utiliser ce nom.

La validation est effectuée par les équipes OVHcloud, généralement sous 72 heures. Vous pouvez également créer un expéditeur à partir de vos données personnelles OVHcloud ou de vos noms de domaine OVHcloud, sans justificatif supplémentaire.

Pour plus de détails, consultez le guide « [Tout savoir sur les expéditeurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) ».

///

/// details | Pourquoi ne puis-je pas envoyer un SMS contenant une URL avec un numéro court ?

Pour des raisons de lutte contre le spam et le phishing, OVHcloud bloque les SMS contenant des URL (liens http/https) lorsque l'expéditeur est un numéro court permettant la réponse. Si vous devez inclure une URL dans vos SMS, utilisez un **expéditeur alphanumérique** validé. Votre expéditeur personnalisé ayant fait l'objet d'une vérification d'identité, l'envoi de SMS contenant des URL est autorisé avec ce type d'expéditeur.

Pour plus de détails, consultez le guide « [Tout savoir sur les expéditeurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) ».

///

/// details | Qu'est-ce qu'un numéro mobile virtuel (VLN) et comment l'obtenir ?

Un numéro mobile virtuel (VLN — Virtual Long Number) est un numéro de mobile français au format 06 ou 07, attribué à votre compte SMS OVHcloud. Il offre plusieurs avantages :

- Le destinataire voit un numéro de mobile classique comme expéditeur, inspirant davantage de confiance.
- Le destinataire peut **répondre** au SMS, et vous pouvez consulter les réponses dans l'espace client OVHcloud ou récupérables via l'API.
- Vous pouvez l'utiliser pour les envois contenant des URL.

Le VLN nécessite une offre SMS spécifique incluant un numéro mobile virtuel. Il ne peut pas être ajouté à un compte SMS existant : un nouveau compte SMS doit être commandé via la [page dédiée au numéro mobile virtuel](/links/telecom/sms-vln). Le VLN est attribué pour une durée liée à l'abonnement et n'est pas portable vers un autre opérateur.

///

/// details | Comment fonctionne le service de SMS avec réponse ?

Le service SMS réponse permet d'envoyer un SMS auquel le destinataire peut répondre. Le fonctionnement est le suivant :

1. Vous envoyez un SMS en utilisant le « Numéro court permettant la réponse » comme expéditeur.
2. Le destinataire reçoit le SMS avec un numéro court à 5 chiffres comme expéditeur.
3. Le destinataire peut répondre à ce numéro court dans un délai de **48 heures**.
4. La réponse est consultable dans votre espace client OVHcloud (`Message et campagne`{.action} > `Gestion des SMS`{.action} > `SMS reçus`{.action}).
5. Optionnellement, vous pouvez configurer une **réponse automatique** (texte prédéfini) ou un **script CGI** appelé à chaque réponse reçue.

Ce service est disponible **uniquement pour la France** et les réponses ne sont possibles que depuis les opérateurs mobiles français. Chaque réponse reçue et chaque réponse automatique envoyée consomme des crédits SMS.

Pour plus de détails, consultez le guide « [Envoyer des SMS permettant la réponse](/pages/web_cloud/messaging/sms/gerer_les_sms_avec_reponse) ».

///

/// details | Comment configurer une réponse automatique aux SMS reçus ?

[Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis accédez à `Options`{.action} > `Options des réponses`{.action}. Dans la section « Action à la réception », choisissez « Répondre un texte prédéfini » ou « Appeler un CGI » (URL d'un script web qui sera appelé à chaque réponse reçue, permettant un traitement dynamique). Vous pouvez également configurer des notifications à la réception (par e-mail ou SMS).

Pour plus de détails, consultez le guide « [Envoyer des SMS permettant la réponse](/pages/web_cloud/messaging/sms/gerer_les_sms_avec_reponse) ».

///

/// details | Qu'est-ce que le service Time2Chat OVHcloud ?

Time2Chat est un service OVHcloud qui permet de gérer des conversations SMS bidirectionnelles de manière structurée. Contrairement au SMS réponse classique (limité à un échange unique dans un délai de 48 h), Time2Chat offre un véritable fil de conversation persistant. Le service est accessible depuis l'espace client OVHcloud et permet de :

- Visualiser les conversations SMS sous forme de fils de discussion (similaire à une messagerie instantanée).
- Répondre aux SMS entrants directement depuis l'interface web.
- Gérer plusieurs conversations simultanées.

Time2Chat est particulièrement adapté aux services clients, aux services de prise de rendez-vous par SMS, ou à tout usage nécessitant un échange conversationnel par SMS.

///

/// details | Comment gérer les demandes de désinscription (STOP) ?

Lorsqu'un destinataire répond « STOP » à un de vos SMS, son numéro est automatiquement ajouté à une liste noire (blacklist) par OVHcloud. Les SMS futurs envoyés vers ce numéro depuis votre compte seront bloqués. Vous pouvez consulter et gérer cette liste noire depuis votre [section SMS de l'espace client OVHcloud](/links/control-panel/telecom-sms), onglet `Options`{.action} > `Gérer les destinataires blacklistés`{.action}. Vous pouvez :

- Consulter les numéros qui ont envoyé un STOP.
- Vérifier si un numéro spécifique est dans la liste noire avant un envoi.

> [!warning]
>
> La suppression d'un numéro de la liste noire sans re-consentement du destinataire est contraire au RGPD et aux règles anti-spam.

La gestion STOP est obligatoire pour les SMS marketing. Pour les SMS transactionnels, le mécanisme STOP n'est pas applicable.

///

### Intégration technique

/// details | Comment créer et gérer des utilisateurs API pour les SMS ?

Les utilisateurs API SMS permettent de déléguer l'envoi de SMS via l'API ou la fonction http2sms sans exposer vos identifiants client OVHcloud. [Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte SMS, puis cliquez sur `Utilisateurs API`{.action}. Ajoutez un nouvel utilisateur en définissant un identifiant et un mot de passe. Chaque utilisateur peut se voir attribuer :

- Un **quota de crédits** déduit du solde global du compte.
- Une **alerte de seuil** qui envoie une notification lorsque le solde de l'utilisateur passe sous un seuil défini.
- Des **restrictions par IP** (jusqu'à 5 IP) pour sécuriser l'accès à la fonction http2sms.
- Une **URL de callback** pour recevoir les accusés de réception (DLR) sur un endpoint personnalisé.

Pour plus de détails, consultez le guide « [Tout savoir sur les utilisateurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms) ».

///

/// details | Comment envoyer un SMS via l'API OVHcloud en PHP ?

L'API OVHcloud permet d'envoyer des SMS de manière programmatique. En PHP, utilisez le SDK OVHcloud officiel :

1. **Créez des clés API** depuis la [page de création de tokens de l'API OVHcloud](https://auth.eu.ovhcloud.com/api/createToken) en autorisant les endpoints `/sms/*`.
2. **Installez le SDK** via Composer : `composer require ovh/ovh`.
3. **Envoyez un SMS** avec le endpoint `POST /sms/{serviceName}/jobs` en spécifiant : le message, les destinataires (tableau de numéros au format international), l'expéditeur, et les options.

L'API retourne un identifiant de job permettant de suivre le statut d'envoi. Des librairies sont également disponibles en Python, Node.js, Java et C#. La documentation complète de l'API SMS est disponible sur la [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms).

Pour plus de détails, consultez le guide « [Envoyer des SMS avec l'API OVHcloud en PHP](/pages/web_cloud/messaging/sms/envoyer_des_sms_avec_lapi_ovh_en_php) ».

///

/// details | Quels sont les endpoints API disponibles pour le service SMS OVHcloud ?

L'API OVHcloud expose de nombreux endpoints pour gérer votre service SMS de manière programmatique. Les principaux sont :

- `GET /sms` : lister vos comptes SMS.
- `GET /sms/{serviceName}` : détails d'un compte SMS (crédits restants, options).
- `POST /sms/{serviceName}/jobs` : envoyer un SMS.
- `GET /sms/{serviceName}/jobs` : lister les envois.
- `GET /sms/{serviceName}/outgoing` : historique des SMS sortants.
- `GET /sms/{serviceName}/incoming` : historique des SMS reçus.
- `GET /sms/{serviceName}/users` : lister les utilisateurs API.
- `GET /sms/{serviceName}/senders` : lister les expéditeurs.
- `GET /sms/{serviceName}/phonebooks` : lister les carnets d'adresses.
- `GET /sms/ptts` : obtenir la description d'un code PTT (statut de livraison).

La documentation interactive complète est disponible sur la [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms). L'authentification se fait via des clés API (Application Key, Application Secret, Consumer Key).

///

/// details | Comment recevoir les accusés de réception (DLR) de mes SMS via un callback ?

Les accusés de réception (Delivery Reports / DLR) confirment la bonne livraison d'un SMS. Pour les recevoir automatiquement, configurez une URL de callback sur votre utilisateur API. [Accédez à la section SMS](/links/control-panel/telecom-sms), puis `Utilisateurs API`{.action}, cliquez sur `...`{.action} > `Callback`{.action} pour l'utilisateur concerné. Renseignez l'URL de votre endpoint web. À chaque mise à jour de statut, OVHcloud appellera cette URL avec les paramètres suivants :

- `id` : identifiant du SMS.
- `ptt` : code de statut de livraison (ex : 1 = en cours, 4 = délivré, 5 = échoué).
- `date` : date du DLR.
- `description` : identifiant descriptif du DLR.

Votre endpoint doit répondre en HTTP 200 pour confirmer la bonne réception du callback.

Pour plus de détails, consultez le guide « [Tout savoir sur les utilisateurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms) ».

///

/// details | Comment utiliser le protocole SMPP avec OVHcloud ?

Le protocole SMPP (Short Message Peer-to-Peer) est un protocole industriel pour l'envoi et la réception de SMS en volume. [Accédez à la section SMS](/links/control-panel/telecom-sms) de votre espace client OVHcloud, sélectionnez votre compte, puis accédez à `Options`{.action} > `Paramètres SMPP`{.action}. Vous obtiendrez les paramètres de connexion : adresse du serveur SMPP, port, system_id et password. Le protocole SMPP offre une connexion persistante, un débit d'envoi plus élevé, et un support natif des DLR en mode push.

Pour plus de détails, consultez le guide « [Gestion d'un compte SMS SMPP](/pages/web_cloud/messaging/sms/smpp-control-panel) ».

///

/// details | Quelles sont les spécifications techniques du service SMPP OVHcloud ?

Le service SMPP OVHcloud respecte la spécification SMPP v3.4. Les principales caractéristiques techniques sont :

- **Mode de connexion :** Transceiver (envoi et réception sur la même session) ou Transmitter/Receiver séparés.
- **Port de connexion :** communiqué lors de l'activation du service SMPP.
- **Chiffrement :** TLS pris en charge et recommandé.
- **Enquire Link :** intervalle recommandé de 30 secondes pour maintenir la session active.
- **Fenêtre d'envoi (window size) :** paramétrable, généralement entre 1 et 10 selon le débit souhaité.
- **Encodage pris en charge :** GSM 7-bit (data_coding=0) et UCS-2 (data_coding=8).
- **Longueur maximale :** 160 caractères en GSM 7-bit, 70 en UCS-2, avec support de la concaténation via UDH.
- **DLR :** accusés de réception transmis en mode push sur la même session SMPP.

La connexion SMPP est limitée à un nombre de sessions simultanées défini dans votre contrat.

Pour plus de détails, consultez le guide « [Spécifications techniques du SMPP](/pages/web_cloud/messaging/sms/smpp-specification) ».

///

/// details | Comment intégrer l'envoi de SMS OVHcloud dans mon application métier ou CRM ?

L'intégration SMS OVHcloud peut se faire de plusieurs manières :

- **http2sms (le plus simple) :** un simple appel HTTP GET/POST déclenche l'envoi d'un SMS. Idéal pour les scripts basiques, les automates industriels ou les logiciels métier ne prenant en charge que les appels HTTP.
- **API REST OVHcloud :** intégration complète avec authentification sécurisée (OAuth), gestion des contacts, historique, statistiques. Des SDK sont disponibles en PHP, Python, Node.js, Java et C#.
- **SMPP :** connexion persistante à haut débit pour les plateformes de messaging.
- **E-mail2SMS :** envoi par e-mail, utile pour les systèmes qui ne prennent en charge que l'envoi d'e-mails (alertes de monitoring, ERP).

Pour les CRM courants (Salesforce, HubSpot, etc.), des connecteurs tiers utilisant l'API OVHcloud sont disponibles sur les marketplaces respectifs.

///

/// details | Quelles sont les limites de débit d'envoi de SMS ?

OVHcloud applique des limites de débit d'envoi pour garantir la qualité de service :

- **Via l'espace client OVHcloud :** pas de limite explicite, mais les campagnes volumineuses sont étagées dans le temps par la plateforme.
- **Via l'API REST :** le débit dépend du volume de votre compte et de votre historique d'utilisation.
- **Via http2sms :** limité au nombre de requêtes HTTP par seconde acceptées par l'infrastructure (typiquement quelques dizaines par seconde).
- **Via SMPP :** le débit est défini contractuellement et peut atteindre plusieurs centaines de SMS par seconde.

Si vous prévoyez des campagnes de très grande envergure (plus de 100 000 SMS), contactez le support OVHcloud pour planifier l'envoi.

///

/// details | Puis-je envoyer des SMS contenant des variables personnalisées ?

Oui, OVHcloud prend en charge la personnalisation des SMS avec des variables dynamiques. Depuis l'espace client, lorsque vous importez une liste de destinataires au format CSV, vous pouvez inclure des colonnes supplémentaires (ex : `prenom`, `nom`, `rdv_date`). Dans le corps de votre SMS, utilisez les variables sous la forme `{prenom}`, `{nom}`, `{rdv_date}`, etc. Chaque SMS sera automatiquement personnalisé avec les données du contact correspondant. Via l'API, vous pouvez utiliser le paramètre `message` avec des placeholders et fournir les données de personnalisation dans le payload d'envoi.

///

### Conformité et délivrabilité

/// details | Quelles sont les obligations légales pour l'envoi de SMS marketing en France ?

L'envoi de SMS marketing en France est encadré par le RGPD et le Code des postes et des communications électroniques. Les obligations principales sont :

- **Consentement préalable (opt-in) :** le destinataire doit avoir explicitement consenti à recevoir des SMS commerciaux.
- **Droit de désinscription (opt-out) :** chaque SMS marketing doit contenir une mention permettant au destinataire de se désinscrire (ex : « STOP au 36xxx » ou « Répondez STOP »).
- **Horaires d'envoi :** les SMS commerciaux ne doivent pas être envoyés entre **20 h et 8 h** en semaine, ni les **dimanches et jours fériés**.
- **Identification de l'expéditeur :** l'identité de l'annonceur doit être reconnaissable.
- **Registre de consentement :** vous devez être en mesure de prouver le consentement de chaque destinataire en cas de contrôle de la CNIL.

Le non-respect de ces obligations expose à des sanctions de la CNIL et à des amendes pouvant atteindre 4 % du chiffre d'affaires.

///

/// details | Quelle est la différence entre un SMS transactionnel et un SMS marketing ?

- **SMS transactionnel :** envoyé en réponse à une action spécifique du destinataire (confirmation de commande, code de vérification, notification de livraison, rappel de rendez-vous). Ne nécessite pas de consentement marketing préalable, n'est pas soumis aux restrictions horaires, et ne nécessite pas de mention STOP.
- **SMS marketing :** envoyé à des fins de prospection commerciale (offres promotionnelles, soldes, newsletters). Exige un consentement opt-in préalable, doit inclure une mention de désinscription (STOP), et est soumis aux restrictions horaires.

Ne mélangez pas les deux types d'envoi sur un même compte SMS pour faciliter la gestion de la conformité.

///

/// details | Comment optimiser le taux de délivrabilité de mes SMS ?

Le taux de délivrabilité est le pourcentage de SMS effectivement remis aux destinataires. Pour l'optimiser :

- **Nettoyez vos bases de contacts :** utilisez le service HLR OVHcloud pour éliminer les numéros invalides, inactifs ou fixes.
- **Respectez les formats internationaux :** tous les numéros doivent être au format international complet (ex : `+33612345678`).
- **Maîtrisez la longueur des messages :** les SMS courts (1 segment de 160 caractères max) ont un meilleur taux de livraison que les SMS longs concaténés.
- **Évitez les contenus assimilables au spam :** mots en majuscules, ponctuation excessive, URL raccourcies suspectes.
- **Utilisez un expéditeur validé :** les expéditeurs alphanumériques vérifiés inspirent confiance.
- **Respectez les horaires :** les SMS envoyés aux heures de bureau ont un meilleur taux d'ouverture.
- **Surveillez vos DLR :** analysez les codes PTT des SMS en échec pour identifier les causes récurrentes.

///

/// details | Comment envoyer des SMS vers les États-Unis ?

L'envoi de SMS vers les États-Unis (indicatif +1) est soumis à des règles spécifiques en raison de la réglementation anti-spam américaine (TCPA / 10DLC). Chez OVHcloud, l'envoi vers les États-Unis nécessite :

- Un **expéditeur alphanumérique** validé ou le numéro court OVHcloud (l'utilisation d'un numéro mobile virtuel français n'est pas possible vers les US).
- Le respect des règles de contenu : le SMS ne doit pas contenir de contenu publicitaire non sollicité.
- Un coût en crédits supérieur à un SMS national (consultez la [grille tarifaire](/links/telecom/sms-prices) pour le tarif exact).

Le taux de délivrabilité peut varier en fonction des opérateurs américains et de leurs filtres anti-spam.

Pour plus de détails, consultez le guide « [Envoi de SMS aux États-Unis](/pages/web_cloud/messaging/sms/envoi_de_sms_aux_etats-unis) ».

///

/// details | Qu'est-ce qu'une requête HLR et à quoi sert-elle ?

Une requête HLR (Home Location Register) permet de vérifier en temps réel si un numéro de téléphone mobile est valide, actif, et sur quel réseau opérateur il est enregistré. Les cas d'usage principaux sont :

- **Avant une campagne SMS :** nettoyez votre base de contacts en éliminant les numéros invalides ou inactifs.
- **Qualification de fichier client :** vérifiez la validité des numéros mobiles de vos contacts commerciaux.
- **Détection de portabilité :** identifiez l'opérateur réel d'un numéro.

Chaque requête HLR coûte **0,1 crédit SMS**. Le résultat indique : le statut du numéro (actif/inactif), l'opérateur d'enregistrement, la joignabilité, le statut de portabilité, et le statut d'itinérance. Les requêtes HLR sont accessibles depuis l'espace client OVHcloud (`Message et campagne`{.action} > `Gestion des SMS`{.action} > `HLR`{.action}) ou via l'API.

Pour plus de détails, consultez le guide « [Tout ce qu'il faut savoir sur le HLR](/pages/web_cloud/messaging/sms/tout_ce_quil_faut_savoir_sur_le_hlr_-_sms) ».

///

/// details | Comment nettoyer une base de contacts SMS avec le HLR ?

Le nettoyage HLR s'effectue depuis l'espace client OVHcloud :

1. **Importez votre fichier de contacts :** dans `Contacts`{.action} et chargez votre fichier CSV (colonne : `numbers` au format international).
2. **Lancez le nettoyage :** sélectionnez le carnet importé, puis cliquez sur « Nettoyer ». Deux options :
    - **Freemium (gratuit) :** dédoublonnage et vérification syntaxique uniquement.
    - **Premium (0,1 crédit/contact) :** dédoublonnage + requête HLR sur chaque numéro pour vérifier sa validité.

Le nettoyage premium élimine les numéros inactifs, invalides ou attribués à des lignes fixes (non joignables par SMS). Un rapport de nettoyage vous est envoyé par e-mail.

///

/// details | Quelles sont les restrictions géographiques pour l'envoi de SMS OVHcloud ?

Le service SMS OVHcloud permet l'envoi vers la plupart des destinations internationales. Cependant :

- **Destinations bloquées :** certaines destinations à haut risque de fraude peuvent être bloquées par défaut.
- **Tarification variable :** le coût en crédits varie selon la destination. Les tarifs sont consultables dans votre espace client OVHcloud ou sur la [page tarifaire OVHcloud](/links/telecom/sms-prices).
- **États-Unis :** l'envoi vers les US est soumis à des règles spécifiques (voir la FAQ dédiée ci-dessus).
- **SMS avec réponse :** la fonctionnalité de SMS avec réponse (numéro court) est disponible uniquement vers la France métropolitaine.
- **Numéro mobile virtuel :** le VLN français ne peut être utilisé comme expéditeur que vers des destinations françaises.

Avant de lancer une campagne internationale, vérifiez la tarification et la disponibilité de la destination dans votre espace client OVHcloud.

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
