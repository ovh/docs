---
title: "Configurer l'affichage de ses données dans le Whois"
slug: api-whois
excerpt: "Utilisez l'API publique OVHcloud pour configurer l'affichage de vos données dans le Whois"
section: "API domaines"
order: 7
---

**Dernière mise à jour le 05/05/2022**

<!-- Rappel à mettre au début de chaque page -->

> [!primary]
>
> Pour suivre ce guide, vous devez déjà vous connecter à l'API OVHcloud. Vous trouverez plus de détails sur la page d'[introduction à l'API](../api).

<!-- Begin TOC -->

## Sommaire

- [Introduction](../api)
- [Commander un nom de domaine](../api-order)
- [Gestion des tâches](../api-tasks)
- [Gestion des contacts d'un nom de domaine](../api-contact)
- [Gestion des règles d'éligibilité](../api-rules)
- **Configurer l'affichage de ses données dans le Whois**
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

<!-- Rappel à mettre au début de chaque page CA/US/AU/ASIA/SG (API CA) -->

Nous vous rappelons que les liens vers les routes d'API donnés dans ce document renvoient vers l'API européenne.
Pensez à remplacer [https://eu.api.ovh.com](https://eu.api.ovh.com) par [https://ca.api.ovh.com](https://ca.api.ovh.com) dans les URLs d'API pour pouvoir utiliser l'API avec votre identifiant.

## Introduction

Le Whois est un service de recherche permettant d'obtenir des informations sur un nom de domaine.
Ces informations peuvent avoir des usages variés mais sont souvent utilisées pour retrouver et contacter
le propriétaire d'un nom de domaine. Celles-ci sont présentées sous forme de texte non standardisé
et étaient jusqu'à récemment affichées en clair.

Le RDAP a été conçu comme un successeur au Whois et présente plusieurs avantages par rapport à celui-ci, notamment :

- La prise en charge de l’internationalisation
- Une standardisation du format de données
- La possibilité de fournir un accès différencié aux données

Cette section est dédiée aux routes d'API servant à configurer la divulgation et l'obfuscation des différentes données liées
aux contacts d'un nom de domaine dans le Whois et le RDAP.

## Divulgation des informations (optin)

Depuis la mise en place du RGPD, les données du Whois concernant les contacts `admin`, `tech`, `billing` et propriétaire (`owner`) sont cachées par défaut
si ce sont des personnes physiques.
Cependant, si l'utilisateur le souhaite, il est possible de divulguer une partie ou l'intégralité des données en fonction de
ce qui est permis par les règles d'optin appliquées sur le nom de domaine.

### Récupération des règles d'optin

L'API suivante permet de connaître les règles de divulgation applicables sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}/rules/optin

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": [
>>       "address",
>>       "city",
>>       "country",
>>       "email",
>>       "fax",
>>       "name",
>>       "organisation",
>>       "phone",
>>       "province",
>>       "zip"
>>     ]
>>   }
>> ]
>> ```

<br/>

La réponse ci-dessus indique les trois types de règles qu'il est possible de rencontrer :

-   Le contact `admin` est absent de la réponse, ce qui signifie qu'il n'est pas possible de configurer la divulgation des données Whois le concernant.
-   La présence du contact `tech` avec un tableau de `field` vide signifie qu'il est possible de divulguer les informations. Le choix des informations divulguées n'est cependant pas personnalisable (c'est tout ou rien).
-   Concernant le contact `owner`, c'est la règle la plus personnalisable. La présence des champs dans le noeud `field` indique qu'il est possible de choisir quels champs seront divulgués dans le Whois.

### Récupération de la configuration d'optin d'un nom de domaine

L'API suivante permet de récupérer la configuration de divulgation appliquée sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}/configurations/optin

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```

<br/>

La réponse ci-dessus peut être interprétée de la manière suivante :

- Les contact `admin` et `billing` sont absents de la réponse, ce qui signifie qu'aucune information les concernant ne sera affichée dans le Whois.
- La présence du contact `tech` avec un tableau vide dans le champ `fields` signifie que toutes les informations du contact sont à divulguer et seront affichées dans le Whois.
- Concernant le contact `owner`, on peut voir que seuls l'`email` et le `phone` sont configurés pour être divulgués et seront affichés dans le Whois.

### Modification de la configuration optin

L'API suivante permet de modifier la configuration de divulgation appliquée sur un nom de domaine.

> [!api]
>
> @api {PUT} /domain/{serviceName}/configurations/optin

| Paramètre      | Obligatoire | Défaut | Description                  |
| -------------- | ----------- | ------ | ---------------------------- |
| `serviceName`  | oui         |        | Le nom de domaine concerné   |
| `optin` (body) | oui         | []     | Configuration de divulgation |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```
> Exemple de réponse
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```

## Obfuscation d'e-mail

Au-delà de la divulgation des données sur le Whois en fonction des différentes règles disponibles pour les extensions,
OVHcloud donne la possibilité d'obfusquer les adresses e-mail des contacts dans le Whois.

Avec la mise en place du RGPD, cette fonctionnalité est activée par défaut pour tous les domaines.
Il est néanmoins possible de manipuler cette obfuscation pour la désactiver sur un domaine spécifique.

### Récupération des règles d'obfuscation

L'API suivante permet de connaître les règles d'obfuscation applicables sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}/rules/emailsObfuscation

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   "admin",
>>   "tech",
>>   "billing",
>>   "owner"
>> ]
>> ```

<br/>

La réponse ci-dessus indique que les e-mails peuvent être obfusqués sur les contacts `admin`, `tech`, `billing` et `owner`.

### Récupération de la configuration d'obfuscation des e-mails d'un nom de domaine

L'API suivante permet de récupérer la configuration d'obfuscation appliquée sur un nom de domaine.

> [!api]
>
> @api {GET} /domain/{serviceName}/configurations/obfuscatedEmails

| Paramètre     | Obligatoire | Description                |
| ------------- | ----------- | -------------------------- |
| `serviceName` | oui         | Le nom de domaine concerné |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de réponse
>> ```js
>> [
>>   {
>>     "value": "317ab3c7-6c58-4d6e-827c-2c2b3e82084d@v.o-w-o.info",
>>     "type": "admin",
>>     "status": "todo"
>>   },
>>   {
>>     "value": "c657476c-d55a-4412-a6dc-b0b3a4f8dbe5@i.o-w-o.info",
>>     "type": "tech",
>>     "status": "done"
>>   },
>>   {
>>     "value": "d2dd143a-46f2-4ffe-b52b-187fbca31478@g.o-w-o.info",
>>     "type": "owner",
>>     "status": "done"
>>   }
>> ]
>> ```

<br/>

La réponse ci-dessus peut être interprétée de la manière suivante :

- Le contact `billing` est absent de la réponse, ce qui signifie qu'aucune obfuscation d'e-mail n'est présente sur ce contact.
- Les contacts `tech` et `owner` possèdent un statut (`status`) à `done` et une valeur (`value`) non nulle, cela indique que ces deux contacts ont leur e-mail obfusqué via cette valeur et que la redirection e-mail est active.
- Concernant le contact `admin`, on peut voir que la **valeur** existe mais que le **statut** est à `todo`, ce qui signifie que le contact est configuré pour être obfusqué mais que la redirection de l'adresse e-mail n'est pas encore mise en place.

### Modification de la configuration d'obfuscation des e-mails

L'API suivante permet de modifier la configuration d'obfuscation appliquée sur un nom de domaine.

> [!api]
>
> @api {PUT} /domain/{serviceName}/configurations/obfuscatedEmails

| Paramètre         | Obligatoire | Défaut | Description                                                                    |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------------ |
| `serviceName`     | oui         |        | Le nom de domaine concerné                                                     |
| `contacts` (body) | oui         | []     | Liste des types de contacts sur lesquels l'obfuscation doit être mise en place |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> [
>>   "tech",
>>   "admin",
>>   "owner"
>> ]
>> ```
> Exemple de réponse
>> ```js
>> [
>>   {
>>     "value": "09ea1006-4ef9-4f76-b886-c6a333e3b000@v.o-w-o.info",
>>     "type": "tech"
>>   },
>>   {
>>     "value": "5db6354f-380b-46df-b09d-711c2eda3584@i.o-w-o.info",
>>     "type": "admin"
>>   },
>>   {
>>     "value": "1c59a37a-4148-4f34-a088-b02c35464482@g.o-w-o.info",
>>     "type": "owner"
>>   }
>> ]
>> ```

### Regénération des e-mails obfusqués

L'API suivante permet de regénérer les e-mails obfusqués d'un nom de domaine.

> [!api]
>
> @api {POST} /domain/{serviceName}/configurations/obfuscatedEmails/refresh

| Paramètre         | Obligatoire | Défaut | Description                                                                |
| ----------------- | ----------- | ------ | -------------------------------------------------------------------------- |
| `serviceName`     | oui         |        | Le nom de domaine concerné                                                 |
| `contacts` (body) | oui         | []     | Liste des types de contacts sur lesquels l'obfuscation doit être regénérée |

<!-- prettier-ignore -->
> [!tabs]
> Exemple de requête
>> ```js
>> [
>>   "tech",
>>   "admin",
>>   "owner"
>> ]
>> ```
> Exemple de réponse
>> Status 200
