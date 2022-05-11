---
title: "Gestion des règles d'éligibilité"
slug: api-rules
excerpt: "Description du format technique des règles d'éligibilité aux noms de domaine"
section: "API domaines"
order: 6
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
- **Gestion des règles d'éligibilité**
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

<!-- Rappel à mettre au début de chaque page CA/US/AU/ASIA/SG (API CA) -->

Nous vous rappelons que les liens vers les routes d'API donnés dans ce document renvoient vers l'API européenne.
Pensez à remplacer [https://eu.api.ovh.com](https://eu.api.ovh.com) par [https://ca.api.ovh.com](https://ca.api.ovh.com) dans les URLs d'API pour pouvoir utiliser l'API avec votre identifiant.

## Introduction

L'obtention et la détention d'un nom de domaine sont accompagnées d'obligations légales telles que :

- les règles d'utilisation d'un nom de domaine : un `.travel` doit nécessairement avoir un lien avec l'industrie du tourisme.
- les règles d'éligibilité : l'adresse du contact propriétaire d'un `.eu` doit se situer au sein de l'Union Européenne.

Ces règles sont fixées par l'opérateur de l'extension, le registre, et varient selon les extensions tout en évoluant au fil du temps.

Concernant les règles d'éligibilité, elles concernent des éléments connus du registrar tels que le nom de domaine, les contacts ou encore la procédure d'enregistrement. Ces règles d'éligibilité s'appliquent :

- Sur les données du **contact propriétaire**, **administrateur** et **technique**. Par exemple, l'adresse du propriétaire doit se situer au sein de l'Union Européenne pour un domaine `.eu`.
- Sur des données liées à la **procédure** de demande de création, de transfert, de changement de propriétaire. Par exemple, la raison de la création d'un domaine en `.fr` représentant un nom de ville.

Avec un nombre d'extensions grandissant d'année en année, il devient nécessaire d'automatiser la gestion de ces règles afin de garantir des délais de traitement raisonnables et d'éviter des frais d'installation supplémentaires.
En définissant une description de ces différentes règles dans un format technique, il est possible d'automatiser la génération des différents formulaires requis ainsi que la validation des données saisies.

## Représentation technique

Les conditions d'éligibilité d'un nom de domaine peuvent être représentées sous la forme d'un objet JSON **récursif**.

Voici l'exemple de la représentation JSON du `.com` que l'on peut obtenir via l'API suivante:

> [!api]
>
> @api {GET} /domain/configurationRule

Le format de règle sera expliqué et détaillé dans les sections suivantes.

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Exemple de règle au format JSON
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "AI",
>>                   "AL",
>>                   "AM",
>>                   "AO",
>>                   "...",
>>                   "YT",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the last name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

### Format des objets constituant une règle d'éligibilité

Dans un premier temps, regardons les éléments qui composent la représentation JSON des conditions d'éligibilité.

- `rule` : objet principal représentant les conditions d'éligibilité. Il contient les autres objets décrits ci-dessous.
- `description` : informations détaillées concernant le champ.
- `label` : indique sur quel élément s'applique une règle : `authInfo`, `OWNER_CONTACT`, `vat`, `firstName`, `lastName`, etc. Une liste exhaustive est disponible dans la section [Labels](#labels).
- `type` : indique le format attendu d'un label : `string`, `number`, `bool`, `contact`, etc. Une liste exhaustive est disponible dans la section [Types](#types).
- `constraint` : représente les contraintes appliquées à la valeur d'un label.
    - `operator` : représente le type de contrainte appliquée au label. Une liste exhaustive est disponible dans la section [Contraintes](#constraints).
- `condition` : spécifie les conditions d'application sous forme de `rule` d'un label ou d'une contrainte. Si la condition est respectée, alors la règle associée doit être appliquée.
- `fields` : règles à appliquer sur les champs constituant un élément de type `contact` ou `domain`.
- `placeholder` : exemple de valeur possible.
- `and`, `or` : permet de combiner des règles.

#### Labels <a name="labels"></a>

| Label               | Représentation suggérée  | Description                                                |
| ------------------- | ------------------------ | ---------------------------------------------------------- |
| `ACCEPT_CONDITIONS` | Case à cocher            | Conditions particulières à accepter                        |
| `REASON`            | Champ texte multi-lignes | Raison de l'achat du nom de domaine                        |
| `CLAIMS_NOTICE`     | Case à cocher            | Information concernant la _claim notice_ à accepter        |
| `PROTECTED_CODE`    | Champ texte              | Code demandé lorsqu'un domaine est protégé par le registre |
| `AUTH_INFO`         | Champ texte              | Code lié au domaine pour une demande de transfert          |
| `DOMAIN_CONFIG`     | Formulaire               | Liste de champs liés à un domaine                          |
| `OWNER_CONTACT`     | Formulaire               | Liste de champs liés au contact propriétaire               |
| `ADMIN_ACCOUNT`     | Formulaire               | Liste de champs liés au contact administrateur             |
| `TECH_ACCOUNT`      | Formulaire               | Liste de champs liés au contact technique                  |
| `OWNER_LEGAL_AGE`   | Case à cocher            | Le propriétaire doit être majeur                           |

#### Types <a name="types"></a>

| Type           | Représentation suggérée  | Description                                              |
| -------------- | ------------------------ | -------------------------------------------------------- |
| `string`       | Champ texte              | -                                                        |
| `string[]`     | Liste de champs texte    | -                                                        |
| `text`         | Champ texte multi-lignes | -                                                        |
| `bool`         | Case à cocher            | -                                                        |
| `number`       | Champ numérique          | -                                                        |
| `date_ISO8601` | Champ date               | Format [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601) |
| `contact`      | Formulaire               | Contient les champs liés au contact                      |
| `domain`       | Formulaire               | Contient les champs liés au domaine                      |

> [!primary]
>
> Le type `domain` n'est aujourd'hui utilisé que pour les extensions `ac.uk` et `gov.uk`.
> Ces domaines ont un processus de création, des conditions d'appropriation et des conditions d'utilisation très particuliers.

#### Contraintes <a name="constraints"></a>

| Contrainte     | Représentation suggérée | Comment                                                                          |
| -------------- | ----------------------- | -------------------------------------------------------------------------------- |
| `required`     | astérisque rouge        | Le champ est requis                                                              |
| `readonly`     | champ grisé             | Le champ est en lecture seule                                                    |
| `eq`           | -                       | Le champ doit être égal à la valeur associée                                     |
| `ne`           | -                       | Le champ doit être différent de la valeur associée                               |
| `gt`           | -                       | Le champ doit être supérieur à la valeur associée                                |
| `lt`           | -                       | Le champ doit être inférieur à la valeur associée                                |
| `minlength`    | -                       | La longueur du champ doit être supérieure à la valeur associée                   |
| `maxlength`    | -                       | La longueur du champ doit être inférieure à la valeur associée                   |
| `between`      | -                       | La longueur du champ doit être comprise entre les valeurs associées              |
| `contains`     | -                       | Le champ doit être égal à au moins une des valeurs associées                     |
| `notcontains`  | -                       | Le champ ne doit être égal à aucune des valeurs associées                        |
| `empty`        | -                       | Le champ doit être vide                                                          |
| `notempty`     | -                       | Le champ ne doit pas être vide                                                   |
| `match`        | -                       | Le champ doit satisfaire l'expression régulière contenue dans la valeur associée |
| `shouldbetrue` | case à cocher           | Le champ doit avoir la valeur `true`, `1` ou `"1"`                               |

## Explications pas à pas

### Contrainte sur un label de type primitif

Partons d'un exemple n'imposant qu'une seule règle pour la commande d'un nom de domaine. Cette règle nous demande d'accepter des conditions particulières.

<!-- prettier-ignore -->
> [!tabs]
> Règle d'acceptation des conditions particulières
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "Le registre a des conditions spéciales qui doivent être acceptées.",
>>   "placeholder": "true",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     },
>>     {
>>       "operator": "shouldbetrue"
>>     }
>>   ]
>> }
>> ```

Avec cette règle, lors de la commande, le domaine doit obligatoirement avoir une [configuration](../api-order/#configurations-management) ayant pour label `ACCEPT_CONDITIONS` avec une valeur booléenne à `true`, `1` ou `"1"`.

### Les opérateurs "and" et "or"

Partons maintenant sur un exemple de règle sur deux labels : `ACCEPT_CONDITIONS` et `REASON`.
Les deux règles peuvent être écrites individuellement de la façon suivante :

<!-- prettier-ignore -->
> [!tabs]
> Règle d'acceptation des conditions particulières
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "Le registre a des conditions spéciales qui doivent être acceptées.",
>>   "placeholder": "true",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     },
>>     {
>>       "operator": "shouldbetrue"
>>     }
>>   ]
>> }
>> ```

<!-- prettier-ignore -->
> [!tabs]
> Règle de justification
>> ```json
>> {
>>   "label": "REASON",
>>   "type": "text",
>>   "description": "L'achat de ce nom de domaine doit être justifié",
>>   "placeholder": "Je suis le maire de la ville OVHcity et je veux un nom de domaine pour ma ville",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

Ces deux règles peuvent êtres combinées à l'aide de l'opérateur `and` de l'objet `rule`. L'opérateur impose que tous les labels respectent leurs contraintes respectives. Par exemple :

<!-- prettier-ignore -->
> [!tabs]
> Règles fusionnées en une seule par un `and`
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "ACCEPT_CONDITIONS",
>>       "type": "bool",
>>       "description": "Le registre a des conditions spéciales qui doivent être acceptées.",
>>       "placeholder": "true",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         },
>>         {
>>           "operator": "shouldbetrue"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "REASON",
>>       "type": "text",
>>       "description": "L'achat de ce nom de domaine doit être justifié",
>>       "placeholder": "Je suis le maire de la ville OVHcity et je veux un nom de domaine pour ma ville",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     }
>>   ]
>> }
>> ```

L'opérateur `or`, de la même manière, nécessite qu'au moins un des labels respecte ses contraintes respectives afin que la règle soit valide.

### Contrainte sur un label de type complexe

La gestion des contraintes sur un type complexe (`contact`, `domain`) s'applique à un ensemble de champs primitifs (un contact est composé d'un nom, d'un prénom, etc.).
Pour représenter les règles sur un objet, le nœud `fields` est utilisé. Chaque champ est représenté par un objet de type `rule`. Un objet de ce type contient plusieurs champs qui sont toujours appliqués en utilisant l'opérateur `and`. Voici un exemple de règle sur un objet de type contact :

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Contrainte sur les champs d'un `contact`
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "description": "Règle liée au contact propriétaire",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "firstName",
>>         "type": "string",
>>         "description": "Représente le prénom du contact propriétaire.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "lastName",
>>         "type": "string",
>>         "description": "Représente le nom de famille du contact propriétaire.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "email",
>>         "type": "string",
>>         "description": "Représente l'adresse e-mail du contact propriétaire.",
>>         "placeholder": "lorem@ovh.com",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Représente le statut légal du contact propriétaire.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["association", "corporation", "individual", "other"]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.country",
>>         "type": "string",
>>         "description": "Représente le pays du contact propriétaire.",
>>         "placeholder": "FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["FR", "DE", "CA"]
>>           },
>>           {
>>             "operator": "required"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.line1",
>>         "type": "string",
>>         "description": "Représente l'adresse du contact propriétaire.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.zip",
>>         "type": "string",
>>         "description": "Représente le code postal du contact propriétaire.",
>>         "placeholder": "12345",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

Cette règle indique :

- Qu'une configuration `OWNER_CONTACT` est obligatoire
- Qu'elle doit être constituée de tous les champs suivants :
    - `firstName` d'une taille maximum de 255 caractères
    - `lastName` d'une taille maximum de 255 caractères
    - `email` d'une taille maximum de 255 caractères
    - `legalForm` ayant l'une des valeurs `association`, `corporation`, `individual` ou `other`
    - `address.country` ayant l'une des valeurs `FR`, `DE` ou `CA`
    - `address.line1` d'une taille maximum de 255 caractères
    - et `address.zip` d'une taille maximum de 255 caractères

> [!primary]
>
> Le champ `"constraints": []` indique simplement qu'aucune contrainte supplémentaire ne s'applique sur le nœud.

### Conditions

Parfois, nous avons besoin de préciser dans quelles circonstances une règle s'applique. Par exemple, le nom de l'organisme (`organisationName`) est obligatoire pour un contact ne représentant pas un individu (`legalForm` différent de `individual`). Pour cela, nous allons utiliser une condition. Il s'agit d'une règle (l'objet `rule`) qui, si elle est valide, active la règle qu'elle conditionne.

#### Exemple simple

Voici un exemple simple purement fictif : un registre veut que les conditions spécifiques (`ACCEPT_CONDITIONS`) soient obligatoirement acceptées uniquement s'il n'y a pas de raison (`REASON`).

<!-- prettier-ignore -->
> [!tabs]
> Exemple de règle avec une condition
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "Le registre a des conditions spéciales qui doivent être acceptées",
>>   "constraints": [
>>     {
>>       "operator": "required",
>>       "conditions": {
>>         "label": "REASON",
>>         "type": "text",
>>         "description": "Justifier l'achat de ce nom de domaine",
>>         "placeholder": "Je suis le maire de la ville OVHcity et je veux un nom de domaine pour ma ville",
>>         "constraints": [
>>           {
>>             "operator": "empty"
>>           }
>>         ]
>>       }
>>     }
>>   ]
>> }
>> ```

Cette règle indique que la configuration `ACCEPT_CONDITIONS` est obligatoire (contrainte `required`) uniquement si la configuration `REASON` est non renseignée (contrainte `empty`). La configuration `ACCEPT_CONDITIONS` devient optionnelle mais peut tout de même être renseignée.

#### Exemple sur un contact

Prenons maintenant l'exemple plus concret énoncé au début de cette section : le nom de l'organisme (`organisationName`) est obligatoire pour un contact professionnel/associatif (`legalForm` différent de `individual`).

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Exemple de condition sur un champ de `contact`
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Represents the legal status of owner.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["association", "corporation", "individual", "other"]
>>           },
>>           {
>>             "operator": "required"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "organisationName",
>>         "type": "string",
>>         "description": "Represents the organisation of the owner contact",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "ne",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "description": "Rule related to the domain owner",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

## Exemples réels

Suite à cette première partie expliquant la représentation technique des règles d'éligibilité, voici quelques exemples concrets et réels.

### Règles génériques

La plupart des extensions (gTLDs et newGTLDs principalement) ont les mêmes règles d'éligibilité. Avoir un contact propriétaire respectant celles-ci permet de posséder la plupart des extensions disponibles à la vente.

#### Création d'un nom de domaine

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Règle de création d'un nom de domaine
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "...",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the last name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

#### Transfert d'un nom de domaine

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Règle de transfert d'un nom de domaine
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["AC", "AD", "AE", "AF", "...", "ZA", "ZM", "ZW"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the lastname of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

#### Mise à jour du contact propriétaire

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Règle de mise à jour du contact propriétaire d'un nom de domaine
>> ```json
>> {
>>     "label": "OWNER_CONTACT",
>>     "type": "contact",
>>     "fields": {
>>         "and": [
>>             {
>>                 "label": "address.city",
>>                 "type": "string",
>>                 "description": "Represents the city of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.country",
>>                 "type": "string",
>>                 "description": "Represents the country of the owner contact.",
>>                 "placeholder": "FR",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "AC",
>>                             "AD",
>>                             "AE",
>>                             "AF",
>>                             "AG",
>>                             "...",
>>                             "YT",
>>                             "ZA",
>>                             "ZM",
>>                             "ZW"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "address.country",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "contains",
>>                                         "values": [
>>                                             "AD",
>>                                             "AE",
>>                                             "AF",
>>                                             "AG",
>>                                             "WS",
>>                                             "YT",
>>                                             "ZA",
>>                                             "ZM"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "email",
>>                 "type": "string",
>>                 "description": "Represents the email of the owner contact.",
>>                 "placeholder": "lorem@ovh.com",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "email",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "firstName",
>>                 "type": "string",
>>                 "description": "Represents the first name of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "eq",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "and": [
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "legalForm",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "eq",
>>                                                 "value": "individual"
>>                                             },
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 },
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "firstName",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 }
>>                             ],
>>                             "constraints": []
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "language",
>>                 "type": "string",
>>                 "description": "Represents the language of the owner contact.",
>>                 "placeholder": "fr_FR",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "fr_FR",
>>                             "pl_PL",
>>                             "de_DE",
>>                             "es_ES",
>>                             "en_GB",
>>                             "it_IT",
>>                             "pt_PT",
>>                             "nl_NL",
>>                             "cs_CZ",
>>                             "en_IE",
>>                             "lt_LT",
>>                             "fi_FI",
>>                             "fr_SN",
>>                             "fr_TN",
>>                             "fr_MA",
>>                             "en_AU",
>>                             "en_CA",
>>                             "fr_CA",
>>                             "en_US",
>>                             "es_ES"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "lastName",
>>                 "type": "string",
>>                 "description": "Represents the last name of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "eq",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "and": [
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "legalForm",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "eq",
>>                                                 "value": "individual"
>>                                             },
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 },
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "lastName",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 }
>>                             ],
>>                             "constraints": []
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "description": "Represents the legal status of owner.",
>>                 "placeholder": "individual",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "association",
>>                             "corporation",
>>                             "individual",
>>                             "other"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "contains",
>>                                         "values": [
>>                                             "association",
>>                                             "corporation",
>>                                             "individual",
>>                                             "other"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.line1",
>>                 "type": "string",
>>                 "description": "Represents the address of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "organisationName",
>>                 "type": "string",
>>                 "description": "Represents the organisation of the owner contact",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "ne",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "organisationName",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "phone",
>>                 "type": "string",
>>                 "description": "Represents the phone of the owner contact.",
>>                 "placeholder": "+33.612345678",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.zip",
>>                 "type": "string",
>>                 "description": "Represents the zip of the owner contact.",
>>                 "placeholder": "12345",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "address.country",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "notcontains",
>>                                         "values": [
>>                                             "IE",
>>                                             "AZ",
>>                                             "DJ",
>>                                             "LA",
>>                                             "CI",
>>                                             "AN",
>>                                             "HK",
>>                                             "BO",
>>                                             "PA",
>>                                             "HN",
>>                                             "NI",
>>                                             "SV",
>>                                             "CO"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             }
>>         ],
>>         "constraints": []
>>     },
>>     "description": "rule related to the domain owner",
>>     "constraints": [
>>         {
>>             "operator": "required"
>>         }
>>     ]
>> }
>> ```

#### Changement de propriétaire

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Règle de changement de propriétaire
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "address.city",
>>         "type": "string",
>>         "description": "Represents the city of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.country",
>>         "type": "string",
>>         "description": "Represents the country of the owner contact.",
>>         "placeholder": "FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "AC",
>>               "AD",
>>               "AE",
>>               "AF",
>>               "...",
>>               "ZA",
>>               "ZM",
>>               "ZW"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "email",
>>         "type": "string",
>>         "description": "Represents the email of the owner contact.",
>>         "placeholder": "lorem@ovh.com",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "firstName",
>>         "type": "string",
>>         "description": "Represents the first name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "eq",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "language",
>>         "type": "string",
>>         "description": "Represents the language of the owner contact.",
>>         "placeholder": "fr_FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "fr_FR",
>>               "pl_PL",
>>               "de_DE",
>>               "es_ES",
>>               "en_GB",
>>               "it_IT",
>>               "pt_PT",
>>               "nl_NL",
>>               "cs_CZ",
>>               "en_IE",
>>               "lt_LT",
>>               "fi_FI",
>>               "fr_SN",
>>               "fr_TN",
>>               "fr_MA",
>>               "en_AU",
>>               "en_CA",
>>               "fr_CA",
>>               "en_US",
>>               "es_ES"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "lastName",
>>         "type": "string",
>>         "description": "Represents the last name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "eq",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Represents the legal status of owner.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "association",
>>               "corporation",
>>               "individual",
>>               "other"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.line1",
>>         "type": "string",
>>         "description": "Represents the address of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "organisationName",
>>         "type": "string",
>>         "description": "Represents the organisation of the owner contact",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "ne",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "phone",
>>         "type": "string",
>>         "description": "Represents the phone of the owner contact.",
>>         "placeholder": "+33.612345678",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.zip",
>>         "type": "string",
>>         "description": "Represents the zip of the owner contact.",
>>         "placeholder": "12345",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "address.country",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "notcontains",
>>                     "values": [
>>                       "IE",
>>                       "AZ",
>>                       "DJ",
>>                       "LA",
>>                       "CI",
>>                       "AN",
>>                       "HK",
>>                       "BO",
>>                       "PA",
>>                       "HN",
>>                       "NI",
>>                       "SV",
>>                       "CO"
>>                     ]
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "description": "rule related to the domain owner",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

### Règles spécifiques

Une partie des ccTLDs ont des règles d'éligibilité spécifiques, notamment au niveau du pays de résidence du propriétaire du domaine.

#### Cas du `.berlin`

Le cas du `.berlin` est intéressant car il dispose de règles d'éligibilité particulières. En effet, pour disposer d'un `.berlin`, l'administrateur **ou** le contact propriétaire du domaine doit résider à Berlin.

Pour ce faire, nous _conditionnons_ la _contrainte_ de la _valeur_ des champs `address.country` et `address.city` du contact propriétaire aux valeurs des champs `address.country` et `address.city` de l'administrateur, et vice-versa.

Cela se traduit de cette manière. Pour une raison de clarté, les règles sur les autres champs et labels ont été retirées.

<!-- prettier-ignore -->
> [!tabs]
> Masquer
>> Cliquez sur "Afficher" pour voir le JSON
> Afficher : Règle d'éligibilité du `.berlin`
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "ADMIN_ACCOUNT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the admin contact.",
>>             "placeholder": "DE",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "DE",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the admin contact.",
>>             "placeholder": "Berlin",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "Berlin",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "rule related to the admin domain",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "Berlin",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "Berlin",
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "DE",
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "AI",
>>                   "AL",
>>                   "...",
>>                   "XK",
>>                   "YE",
>>                   "YT",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ],
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "eq",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "eq",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ]
>>       },
>>       "description": "rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

## Routes d'API

Deux interfaces sont à votre disposition pour manipuler et valider les règles de noms de domaine :

- Une pour récupérer les règles d'éligibilité d'un domaine pour une action (création, transfert...).
- Une pour valider des données pour un domaine et pour une action.

### Récupération d'une règle d'éligibilité

Commençons par l'API permettant la récupération d'une règle d'éligibilité. Le retour de celle-ci correspond au format de règle JSON vu dans la partie précédente.

> [!api]
>
> @api {GET} /domain/configurationRule

| Paramètre | Obligatoire | Description                                                  |
| --------- | ----------- | ------------------------------------------------------------ |
| `action`  | oui         | L'action souhaitée (`create`, `transfer`, `trade`, `update`) |
| `domain`  | oui         | Le nom de domain concerné                                    |

- `create` est utilisée lors de la création d'un nom de domaine
- `transfer` est utilisée lors du transfert entrant d'un nom de domaine depuis un autre registrar
- `trade` est utilisée lors du changement de contact propriétaire d'un nom de domaine
- `update` est utilisée lors de la mise à jour des informations du nom de domaine ou d'un contact

### Validation d'une règle d'éligibilité

Bien qu'il soit possible de vérifier les règles côté client, vous pouvez également utiliser l'API ci-dessous pour vérifier que la configuration pour une action donnée respecte bien les règles d'éligibilité.

> [!api]
>
> @api {POST} /domain/configurationRule/check

En paramètre de requête, nous retrouvons l'action et le domaine souhaité.

| Paramètre | Obligatoire | Description                                                  |
| --------- | ----------- | ------------------------------------------------------------ |
| `action`  | oui         | L'action souhaitée (`create`, `transfer`, `trade`, `update`) |
| `domain`  | oui         | Le nom de domain concerné                                    |

En _body_ de requête, nous retrouvons les objets suivants.

| Body           | Description                                             |
| -------------- | ------------------------------------------------------- |
| `owner`        | Objet représentant les données du contact propriétaire  |
| `adminAccount` | Objet représentant les données du contact administratif |
| `techAccount`  | Objet représentant les données du contact technique     |
| `domain`       | Données concernant le nom de domaine                    |
| `extras`       | Données additionnelles                                  |

> [!primary]
>
> Pour plus d'informations sur les différents types de contact, veuillez consulter la [documentation associée](../api-contact).

Chacun de ces objets est optionnel. Si le moteur de règles a besoin de l'un deux pour vérifier une règle, une erreur sera retournée.
Une particularité existe pour les actions `trade` et `transfer` : si un objet requis est manquant, celui-ci sera récupéré automatiquement depuis le service actuellement existant.

> [!primary]
>
> Si vous souhaitez tester qu'un domaine déjà enregistré sur votre compte respecte bien ses règles d'éligibilité, vous pouvez faire appel à cette API sur l'action `update` avec un body vide. Le moteur de règles effectuera une validation en utilisant les données actuelles du service.

L'API de validation retourne un statut 200 si la règle est respectée. Dans le cas contraire, elle retourne un statut 400 accompagné d'une erreur détaillée, au format suivant :

<!-- prettier-ignore -->
> [!tabs]
> Retour d'erreur de validation
>> ```json
>> {
>>   "class": "Client::BadRequest::DOMDOCRuleNotRespected",
>>   "message": "7 constraints of rules are not respected",
>>   "details": {
>>     "_date": "2021-10-16 21:51:10.476352775 +0000 UTC",
>>     "_id": "mMzaS8iOJ",
>>     "_message": "Input data does not respect the rule",
>>     "owner.city": "Field \"city\" is required",
>>     "owner.country": "Field \"country\" is required",
>>     "owner.email": "Field \"email\" is required",
>>     "owner.language": "Field \"language\" is required",
>>     "owner.legal_form": "Field \"legal_form\" is required",
>>     "owner.line1": "Field \"line1\" is required",
>>     "owner.phone": "Field \"phone\" is required"
>>   }
>> }
>> ```
