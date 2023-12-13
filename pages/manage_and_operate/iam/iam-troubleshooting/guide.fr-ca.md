---
title: "Comment analyser les résultats de politiques IAM"
excerpt: "Utiliser les logs générés pour identifier les droits manquants dans les politiques IAM"
updated: 2023-11-17
---

## Objectif

L'objectif de ce guide est de présenter les différentes méthodes disponibles pour identifier les actions manquantes dans les politiques IAM

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Savoir configurer des [politiques d'accès via l'espace client OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui) ou des [politiques d'accès via API](/pages/account_and_service_management/account_information/iam-policies-api).
- Savoir [envoyer les logs de politiques IAM vers Logs Data Plateform](/pages/manage_and_operate/iam/iam-logs-forwarding)

## En pratique

### Dans les réponses HTTP

Lors des appels d'API, il est possible d'obtenir le nom de l'action manquante dans la réponse de la requête HTTP : via le champ `unauthorizedActionsByIAM`.
Dans l'exemple suivant, l'action manquante est "*vps:apiovh:reboot*"

```json
{
  "class": "Client::Forbidden",
  "message": "User not granted for this request",
  "details": {
    "unauthorizedActionsByAuthentication": "",
    "unauthorizedActionsByIAM": "vps:apiovh:reboot"
  }
}
```

Depuis l'espace client OVHcloud, basé entièrement sur nos APIs, il est aussi possible d'accéder à cette information à travers les outils de développement du navigateur internet. Ceci en analysant les erreurs 403.
Pour cela, rendez-vous dans l'onglet `Network`{.action} et sélectionnez la requête retournant un statut **403**puis rendez-vous dans l'onglet `Response`{.action}.

![Browser development tool](images/browser_dev_tool.png){.thumbnail}

### Dans Logs Data Platform (LDP)

Si la [transmission des logs du compte OVHcloud](/pages/manage_and_operate/iam/iam-logs-forwarding) vers LDP est activée, vous pouvez trouver l'information dans les logs des politiques d'accès.

Dans l'interface de Graylog, faites une recherche sur le login de l'utilisateur concerné et les logs contenant des `unauthorized_actions_array` avec la requête `identities_array:*My_user* AND unauthorized_actions_array:*`.

![Graylog research](images/graylog_research.png){.thumbnail}

Les logs ainsi filtrés montrent les actions refusées par l'IAM d'OVHcloud pour l'utilisateur.

![Log example](images/IAM_log.png){.thumbnail}

Ici par exemple, l'utilisateur *Ines* a essayé de réaliser l'action *vps:apiovh:reboot* sans succès.

Il est aussi possible de filtrer la recherche sur `authorized_actions_array` pour lister les actions autorisées par l'IAM d'OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
