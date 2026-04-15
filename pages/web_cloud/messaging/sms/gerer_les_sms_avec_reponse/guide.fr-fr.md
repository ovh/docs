---
title: "Envoyer des SMS permettant la réponse"
excerpt: "Découvrez comment envoyer des SMS avec réponse depuis votre espace client OVHcloud et gérer les options de réception des réponses"
updated: 2023-12-29
---

## Objectif

Le service de [SMS réponse](https://www.ovhcloud.com/fr/sms/marketing/sms-response/) vous permet d'envoyer un SMS auquel le destinataire pourra répondre. Vous pouvez ainsi créer un échange de réponses (programmation d'un rendez-vous médical, jeux, etc.) avec votre destinataire.

L'expéditeur du SMS réponse sera un numéro court aléatoire. Son utilisation est incluse dans votre offre SMS et la réponse n'est pas surtaxée pour le destinataire.

> [!primary]
> **Important**
>
> - Le service SMS réponse n'est disponible que pour la France.
> - Lorsqu'une réponse est apportée par votre destinataire, un crédit SMS (minimum) vous est décompté.
> - Lorsque vous répondez à nouveau à votre destinataire, un crédit SMS (minimum) vous est décompté.
>

## Prérequis

- Disposer d'un compte SMS OVHcloud crédité.

<!-- CP-NAV-START:telecom-sms -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [SMS](/links/control-panel/telecom-sms)
- **Pour accéder à vos services :** `Télécom`{.action} > `SMS`{.action} > Sélectionnez votre compte SMS

---
<!-- CP-NAV-END:telecom-sms -->

![espace client Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-fr-sms.png){.thumbnail}

## En pratique

### Principe de fonctionnement et limitations

Les réponses sont possibles depuis les opérateurs mobiles français (Bouygues Telecom, Free, Orange, SFR et opérateurs virtuels (MNVO) associés).<br>
Cela signifie que seuls les numéros géolocalisés en France métropolitaine et associés à un abonnement chez un de ces opérateurs utilisent des SMS compatibles et verront leurs réponses traitées.

Les destinataires ne peuvent répondre à votre SMS que lorsque vous utilisez le [numéro virtuel](/links/telecom/sms-vln) ou le numéro court lors de l’envoi. Ce dernier, à 5 chiffres, est attribué aléatoirement et est spécifique à la conversation. Il ne pourra donc pas être conservé.

Le fonctionnement du service de réponse par SMS est très simple :

![fonctionnement sms avec réponse](images/SMSreponse.png){.thumbnail}

Le service permet au destinataire de répondre au SMS reçu dans un délai de 48 heures. Passé ce délai, la réponse ne sera pas prise en compte.

La réponse (si vous l'activez) peut être ensuite :

- **Automatique** et **unique** : vous définissez une réponse (dans l'espace client) qui sera systématiquement envoyée.
- **Dynamique** : vous faites appel à un script qui gère la réponse.

### Gérer les options des réponses

<!-- CP-STEPS-START:gerer-options-reponses -->
Avant d'envoyer votre SMS réponse, nous vous conseillons de configurer les options de réception des réponses.

Dans la barre d'onglets, cliquez sur `Options`{.action} puis sur `Options des réponses`{.action}.

![options SMS réponse](images/SMSreponse-options.png){.thumbnail}

Vous pouvez configurer une **action à la réception** (pour répondre à votre destinataire ou déclencher un script) et / ou une **notification à la réception** (pour vous tenir vous-même informé des réponses de vos destinataires).

#### Action à la réception

Dans le menu déroulant, choisissez l'une des options proposées :

| Option | Action complémentaire |
|---|---|
| Répondre un texte prédéfini | Saisissez le texte qui sera envoyé par SMS au destinataire<br>(le nombre correspondant de crédits sera débité de votre compte SMS à chaque réponse automatique) |
| Appeler un CGI | Saisissez l'URL de votre script CGI |
| Aucune | Aucune |

Une fois votre option configurée, cliquez sur le bouton `Valider`{.action}.

> [!primary]
>
> Si vous choisissez de répondre par SMS, le numéro court effectuant l'envoi pourra être différent du numéro court ayant envoyé votre SMS initial.

#### Notification à la réception

> [!warning]
> **Informations sur la confidentialité des données**
> 
> Ce service de notification doit être réservé à votre propre usage.
>
> En effet, les notifications contiennent des informations relatives au destinataire de votre SMS ainsi que des données de votre compte OVHcloud (nom du compte SMS contenant votre identifiant OVHcloud).

Cliquez sur `Ajouter une notification`{.action} pour accéder au menu suivant.

Configurez alors une notification par e-mail ou par SMS.

- Notification par e-mail
    - Expéditeur : renseignez obligatoirement une adresse e-mail valide vous appartenant.
    - Adresse e-mail : renseignez l'adresse e-mail destinataire de la notification.

- Notification par SMS
    - Expéditeur : choisissez un expéditeur parmi ceux déjà validés dans votre compte SMS.
    - Numéro : entrez le numéro du destinataire de la notification au **format international**.

Une fois votre notification configurée, cliquez sur le bouton `Valider`{.action}. Vous pouvez ajouter plusieurs notifications, les éditer ou les supprimer.
<!-- CP-STEPS-END:gerer-options-reponses -->

### Envoyer un SMS réponse

<!-- CP-STEPS-START:envoyer-sms-reponse -->
Dans l'espace client, sélectionnez l'onglet `Accueil`{.action} de votre compte SMS. Cliquez ensuite sur `Envoyer un SMS`{.action}.

![envoi SMS](images/SMSreponse-envoi.png){.thumbnail}

Assurez-vous que votre expéditeur est bien le `Numéro permettant la réponse (France uniquement)`.

![envoi SMS](images/SMSreponse-expediteur.png){.thumbnail}

Complétez ensuite les champs dédiés au(x) destinataire(s) et à votre message. Pour plus de détails, consultez [notre guide sur l'envoi de SMS depuis l'espace client](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client).
<!-- CP-STEPS-END:envoyer-sms-reponse -->

### Consulter les réponses

<!-- CP-STEPS-START:consulter-reponses -->
Dans l'espace client, cliquez sur l'onglet `Message et campagne`{.action} de votre compte SMS. Cliquez ensuite sur `SMS reçus`{.action}.

![SMS reçus](images/SMSreponse-recus.png){.thumbnail}

Un tableau liste tous les SMS reçus en réponse de vos envois. Vous pouvez trier ces SMS en cliquant sur les en-têtes des colonnes du tableau.
<!-- CP-STEPS-END:consulter-reponses -->

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
