---
title: "Configurer une alert vROps via le protocol smtp"
excerpt: "Découvrez comment créer une alerte Outbound Smtp dans vROps"
updated: 2023-12-04
---

## Objectif

**Ce guide vous montre comment configurer votre serveur SMTP afin d'automatiser l'envoi d'alertes et de rapports par e-mail depuis vRops.**

## Prérequis

- Avoir un serveur SMTP fonctionnel
- Autoriser les flux STMP entre votre serveur SMTP et votre instance vROps

## En pratique

### Ouverture d'un flux

La première étape est d'ouvrir un flux (*Flow*) sur l'API OVHcloud pour permettre à vROps de communiquer avec votre serveur SMTP.

Vous pouvez controler que le flux a bien été ouvert grâce à ce [endpoint](https://api.ovh.com/console/#/dedicatedCloud/%7BserviceName%7D/vrops/outgoingFlow/%7BoutgoingFlowId%7D~GET).

Pour cela, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/vrops/outgoingFlow
>

Complétez les champs de l'appel API. Si les résultats ne sont pas escomptés, n'hésitez pas à vérifier vos informations d'ouvertures de port du serveur.

| Paramètre | Description |
| :-: | :-: |
| serviceName | nom de domaine du service |
| description | description du flux sortant (à mettre en rapport avec votre SMTP par exemple) |
| ip | l'adresse IP du service distant, par exemple 123.100.200.0 |
| servicePort | le port du service distant (de base 25, 465, 587 ou 2525 pour le SMTP) |

![FlowApi](vrops_flow_api.png){.thumbnail}

### Configuration de l'alerte au niveau du vRops

Une fois l'ouverture du flux effectuée, vous devez configurer l'alerte e-mail sur votre vROps.
Pour ce faire, rendez-vous dans la section `Configure` puis l'onglet `Alerts`{.action}.

![PannelAlert](vrops_alerts_pannel.png)

Plusieurs types d'alertes s'offrent à vous, il vous faut sélectionner `Outbound Settings`{.action}.

![PannelAlert2](vrops_alert_menu2.png)

Vous arrivez sur un récapitulatif de tous vos paramètres Outbound Settings. Cliquez sur le bouton `ADD`{.action}.

![AddButton](vrops_add_button.png)

Au niveau de l'option `Plugin Type`, sélectionnez `Standard Email Plugin`{.action}.
Une série d'options va apparaitre, complétez les champs indiqués.

| Option | Description |
| :-: | :-: |
| Use Secure Connection | Active le cryptage des communications sécurisées à l'aide de SSL/TLS. Si vous sélectionnez cette option, vous devez choisir une méthode dans le menu déroulant `Secure Connection Type`. |
| Requires Authentication | Active l'authentification sur le compte utilisateur de messagerie que vous utilisez pour configurer cette instance SMTP. Si vous sélectionnez cette option, vous devez fournir un mot de passe pour le compte utilisateur. |
| SMTP Host | URL ou adresse IP de votre serveur e-mail. |
| SMTP Port | Port par défaut utilisé par SMTP pour se connecter au serveur. |
| Secure Connection Type | Dans le menu déroulant, sélectionnez SSL/TLS comme méthode de cryptage des communications utilisée dans votre environnement. Vous devez sélectionner un type de connexion si vous avez sélectionné `Use Secure Connection`. |
| User Name | Compte d'utilisateur e-mail utilisé pour se connecter au serveur e-mail. |
| Password | Mot de passe du compte utilisateur de la connexion. Un mot de passe est requis si vous avez sélectionné `Requires Authentication`. |
| Sender Email Address | Adresse e-mail qui apparaît dans le message de notification. |
| Sender Name | Nom affiché pour l'adresse e-mail de l'expéditeur. |
| Receiver Email Address | Adresse e-mail du destinataire. |

![AlertConfigure](vrops_configure_alert.png)

>[!warning]
>
> Pour la réalisation de cette documentation, aucune authentification n'a été configurée sur le serveur SMTP.
> Cependant, pour des questions évidentes de sécurité, il est fortement conseillé d'en configurer une.
>

Vous pouvez tester votre configuration avec le bouton `Test`{.action} situé en bas de la page.

Une fois ces opérations terminées, vous retrouvez le détail de la configuration de votre alerte dans le récapitulatif précédent.

Il ne vous reste plus qu'à tester le bon fonctionnement de votre alerte en vérifiant la bonne réception des e-mails.

![ResultAlert](vrops_result_alert.png)

### Modification d'une alerte existante

Vous pouvez modifier une alerte existante en cliquant sur celle-ci depuis le menu.

![EditAlert](vrops_edit_alert.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
