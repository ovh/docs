---
title: "Utiliser l'API Connectivity"
slug: connectivity-api
excerpt: 'Développez en utilisant notre API connectivity'
section: 'Configurations techniques avancées'
order: 5
---

> [!primary]
> Une version en langue anglaise de ce guide est disponible [ici](https://docs.ovh.com/gb/en/xdsl/connectivity-api/)
>

**Dernière mise à jour le 07/12/2020**

## Objectif

Cette documentation a pour objectif d'aider les développeurs à utiliser nos API, afin de créer leurs propres applications.

## Prérequis

- Disposer d'un compte OVHcloud actif et connaître ses identifiants.
- Être sur la page web des [API OVHcloud](https://api.ovh.com/){.external}.
- Consulter le guide [Premiers pas avec les API OVHcloud](../../api/first-steps-with-ovh-api/) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

## En pratique

### Offres Internet

OVHcloud propose différentes offres d'accès à Internet par le biais de packages contenant au moins un accès Internet mais aussi des lignes VoIP, des e-mails, des noms de domaine.

Les offres sont visibles ici : [https://www.ovhtelecom.fr/offre-internet/](https://www.ovhtelecom.fr/offre-internet/){.external}.

Les services peuvent être gérés à l'aide de ces points de terminaison d'API :

* `/pack/xdsl` : Gérer les packages d'offres Internet;
* `/xdsl` : Gérer les accès Internet, les sous-services et les options;
* `/connectivity` : va remplacer `/xdsl`. Pour l'instant il permet de faire l'éligibilité aux offres cuivre et fibre.

### Éligibilité

#### Aperçu

Les méthodes d'éligibilité sont disponibles sur le chemin d'accès `/connectivity/eligibility/`.

L'objectif de l'éligibilité est de renvoyer les offres Internet éligibles pour un *endpoint* (point de livraison) donné, afin de commander cette offre.
Un *endpoint* peut être une adresse ou une ligne existante, identifiée par le numéro de ligne et son état (actif ou inactif).

Les méthodes retournent une structure *xdsl.AsyncTask* en asynchrone, telle que :

```
{
  "status" : une chaîne de caractères, le statut de la tâche ("pending" (en attente), "done" (terminé) ou "error" (erreur))
  "result" : un objet, en cas de succès, le résultat de la méthode
  "error" : une chaîne de caractères, le message d'erreur en cas d'erreur
}
```

Voici un exemple de tâche en attente :

```json
{
  "status": "pending",
  "result": null,
  "error": null
}
```

Un exemple de tâche réussie :

```json
{
  "status": "success",
  "result": {"une clé": "une valeur"},
  "erreur": null
}
```

Et enfin un exemple de tâche qui a échoué :

```json
{
  "status": "error",
  "result": null,
  "error": "L'action a échoué, voici pourquoi"
}
```

> [!primary]
>
> Vous devez vérifier l'état de la tâche, et réessayer quelques secondes plus tard si la tâche est toujours en état "doing" (en attente).
>

#### Trouver les *endpoints* (points de livraison)

Pour une ligne cuivre, le point de livraison est une ligne identifiée par son numéro et son état.
Si aucune ligne n'existe, vous devrez faire un test par adresse pour voir si vous êtes éligible à la création d'une ligne voisine.

Pour la fibre, le point de livraison peut être identifié par un identifiant *building* (bâtiment) ou un identifiant *OTP* (PTO : Point de Terminaison Optique).

Une adresse est identifiée par un numéro de rue et un code de rue.
Pour les trouver, utilisez ce processus :

1. [Obtenir la liste des localités à partir d'un code postal](#eligibleSearchCities)
2. [Obtenir la liste des rues d'une localité](#eligibleSearchStreets)
3. [Obtenir les numéros de rue disponibles pour un code de rue donné](#eligibleSearchStreetNumbers)
4. [Obtenir la liste des bâtiments pour une adresse](#eligibleSearchBuildings)
5. [Obtenir la liste des bâtiments pour une ligne](#eligibleSearchBuildingsByLine)

##### **Pour obtenir la liste des localités à partir d'un code postal** <a name="eligibleSearchCities"></a>

Exemple : nous voulons rechercher dans les localités pour le code postal "91400".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/cities
>

avec les données suivantes :

```json
{
  "zipCode": "91400"
}
```

La réponse :

```json
{
  "error": null,
  "result": [
    {
      "inseeCode": "91471",
      "zipCode": "91400",
      "locality": "ORSAY",
      "city": "ORSAY"
    },
    {
      "inseeCode": "91471",
      "zipCode": "91400",
      "locality": "ORSIGNY",
      "city": "ORSAY"
    },
    {
      "inseeCode": "91534",
      "zipCode": "91400",
      "locality": "SACLAY",
      "city": "SACLAY"
    }
  ],
  "status": "ok"
}
```

##### **Pour obtenir la liste des rues d'une localité** <a name="eligibleSearchStreets"></a>

Exemple : Nous voulons obtenir la liste des rues de la localité "ORSAY" identifiée par le code INSEE "91471".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/streets
>

avec les données suivantes :

```json
{
  "inseeCode": "91471"
}
```

La réponse :

```json
{
  "result": [
    {
      "streetName": "ALLEE ALFRED POHU",
      "streetCode": "9147134101"
    },
    {
      "streetCode": "9147132200",
      "streetName": "RUE DU VERGER"
    },
    {
      "streetName": "RUE ELISA DESJOBERT",
      "streetCode": "9147111200"
    },
    {
      "streetName": "RUE ETIENNE BAUER",
      "streetCode": "9147102180"
    },
    {
      "streetName": "RUE FACULTE D ORSAY",
      "streetCode": "9147110752"
    }
  ],
  "status": "ok",
  "error": null
}
```

##### **Pour obtenir les numéros de rue disponibles pour un code de rue donné** <a name="eligibleSearchStreetNumbers"></a>

Exemple: nous voulons les numéros de la rue "RUE DU VERGER", identifiée par le code de rue "9147132200".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/streetNumbers
>

avec les données suivantes :

```json
{
  "streetCode": "9147132200"
}
```

La réponse :

```json
{
  "status": "ok",
  "result": [
    "1",
    "1B",
    "2",
    "2B",
    "3",
    "5",
    "6",
    "7",
    "9",
    "10",
    "11",
    "13",
    "15",
    "17",
    "19"
  ],
  "error": null
}
```

##### **Pour obtenir tous les bâtiments pour une adresse spécifique** <a name="eligibleSearchBuildings"></a>

Exemple : nous voulons la liste des bâtiments pour l'adresse "2 RUE DU VERGER, 91400 ORSAY", identifiée par code de rue "9147132200" et le numéro "2".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/buildings
>

avec les données suivantes :

```json
{
  "streetCode": "9147132200",
  "streetNumber": "2"
}
```

La réponse:
```json
{
  "status": "ok",
  "error": null,
  "result": [
    {
      "stairs": [],
      "reference": "IMB/91471/C/NT8X",
      "type": "HOUSE",
      "name": "",
      "nro": "91122BUR"
    }
  ]
}
```

##### **Pour obtenir les références de bâtiment à partir d'un numéro de ligne donné** <a name="eligibleSearchBuildingsByLine"></a>

Exemple : nous voulons la liste des bâtiments pour le numéro de ligne inactive "0123456789".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/buildingsByLine
>

avec les données suivantes :

```json
{
  "lineNumber": "0123456789",
  "status": "inactive"
}
```

La réponse :

```json
{
  "error": null,
  "result": [
    {
      "nro": "91122BUR",
      "name": "",
      "stairs": [],
      "type": "HOUSE",
      "reference": "IMB/91471/C/NT8X"
    }
  ],
  "status": "ok"
}
```
Nous avons trouvé un seul bâtiment qui est une maison.

#### Recherche une éligibilité cuivre (ADSL, VDSL ou SDSL)

Les cas possibles sont:

* [Je connais le numéro de ligne, je vais l'utiliser pour l'éligibilité](#eligibleTestLine)
* [Je ne connais pas le numéro de ligne, je vais d'abord devoir le chercher](#eligibleSearchLines)
* [Je n'ai pas de numéro de ligne, je vais devoir demander une création de ligne à partir d'une ligne voisine](#eligibleTestAddress)

##### **Faire une éligibilité sur une ligne** <a name="eligibleTestLine"></a>

Si vous connaissez le numéro et l'état de la ligne, vous pouvez vérifier son éligibilité.
La différence entre une ligne active et une ligne inactive est qu'une ligne active a un accès Internet actif, alors que la ligne inactive est juste un identifiant à utiliser pour commander un accès Internet (il s'agit généralement de l'ancien numéro du dernier propriétaire, qui a déménagé avec sa ligne).

> [!warning]
>
> Il est important de distinguer la ligne active d'une ligne inactive. Vérifiez toujours que l'adresse renvoyée est la véritable adresse de l'installation.
>

Voici la requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/test/line
>

avec les données POST suivantes :

```json
{
  "lineNumber": "0123456789",
  "status": "active"
}

```

Voici un retour partiel pour l'exemple :

```json
{
  "status": "ok",
  "error": null,
  "result": {
    "offers": [
      {
        "product": {
          "downloadRate": 1,
          "name": "SDSL 1M on 2 pair(s)",
          "provider": "SFR",
          "code": "SDSL-1M-2P",
          "uploadRate": 1,
          "pairs": 2,
          "type": "SDSL",
          "grt": [
            "4ho",
            "4hno"
          ],
          "guaranteed": true
        },
        "eligibility": {
          "estimatedDownloadRate": null,
          "underConditions": [],
          "eligible": true,
          "activationTypes": [
            "create"
          ],
          "estimatedUploadRate": null,
          "reasons": []
        }
      },
      {
        "product": {
          "downloadRate": 1,
          "name": "SDSL 1M on 1 pair(s)",
          "provider": "KOSC",
          "code": "SDSL-1M-1P",
          "uploadRate": 1,
          "pairs": 1,
          "type": "SDSL",
          "grt": [
            "4ho",
            "4hno"
          ],
          "guaranteed": true
        },
        "eligibility": {
          "estimatedDownloadRate": null,
          "underConditions": [],
          "eligible": false,
          "activationTypes": [
            "activate",
            "create"
          ],
          "estimatedUploadRate": null,
          "reasons": [
            {
              "message": "Too much attenuation to deliver the product.",
              "code": "TOO_MUCH_ATTENUATION",
              "availabilityDate": null
            }
          ]
        }
      },
      {
        "product": {
          "provider": "SFR",
          "code": "SDSL-1M-4P",
          "downloadRate": 1,
          "name": "SDSL 1M on 4 pair(s)",
          "pairs": 4,
          "uploadRate": 1,
          "grt": [
            "4ho",
            "4hno"
          ],
          "type": "SDSL",
          "guaranteed": true
        },
        "eligibility": {
          "estimatedDownloadRate": null,
          "underConditions": [],
          "activationTypes": [
            "create"
          ],
          "eligible": true,
          "estimatedUploadRate": null,
          "reasons": []
        }
      },
      {
        "eligibility": {
          "reasons": [
            {
              "message": "Copper not currently available in this area.",
              "code": "COPPER_NOT_YET_AVAILABLE",
              "availabilityDate": null
            }
          ],
          "estimatedUploadRate": 1,
          "activationTypes": [
            "activate"
          ],
          "eligible": false,
          "estimatedDownloadRate": 8.17,
          "underConditions": []
        },
        "product": {
          "uploadRate": 1,
          "pairs": 1,
          "downloadRate": 20,
          "name": "ADSL-Max with shared unbundling",
          "provider": "KOSC",
          "code": "ADSL-MAX_SHARED",
          "guaranteed": false,
          "type": "ADSL",
          "grt": []
        }
      },
      {
        "product": {
          "guaranteed": false,
          "type": "VDSL",
          "grt": [],
          "pairs": 1,
          "uploadRate": 1,
          "provider": "KOSC",
          "code": "VDSL-MAX_FULL",
          "name": "VDSL-Max with full unbundling",
          "downloadRate": 20
        },
        "eligibility": {
          "estimatedUploadRate": 0,
          "reasons": [
            {
              "code": "TOO_MUCH_ATTENUATION",
              "message": "Too much attenuation to deliver the product.",
              "availabilityDate": null
            }
          ],
          "underConditions": [],
          "estimatedDownloadRate": 0,
          "eligible": false,
          "activationTypes": [
            "activate",
            "create"
          ]
        }
      },
      {
        "eligibility": {
          "estimatedUploadRate": 0.9970703125,
          "reasons": [],
          "underConditions": [],
          "estimatedDownloadRate": 8.173828125,
          "activationTypes": [
            "create",
            "activate"
          ],
          "eligible": true
        },
        "product": {
          "name": "ADSL-Max full unbundling",
          "downloadRate": 20,
          "provider": "KOSC",
          "code": "ADSL-MAX_FULL",
          "uploadRate": 1,
          "pairs": 1,
          "grt": [],
          "type": "ADSL",
          "guaranteed": false
        }
      },
      {
        "eligibility": {
          "activationTypes": [
            "activate",
            "create"
          ],
          "eligible": false,
          "underConditions": [],
          "estimatedDownloadRate": 1.46,
          "reasons": [
            {
              "availabilityDate": null,
              "message": "Copper not currently available in this area.",
              "code": "COPPER_NOT_YET_AVAILABLE"
            }
          ],
          "estimatedUploadRate": 1.46
        },
        "product": {
          "provider": "KOSC",
          "code": "SDSL-MAX",
          "downloadRate": 5,
          "name": "SDSL-Max",
          "pairs": 1,
          "uploadRate": 5,
          "type": "SDSL",
          "grt": [],
          "guaranteed": false
        }
      },
      {
        "eligibility": {
          "activationTypes": [
            "activate"
          ],
          "eligible": false,
          "estimatedDownloadRate": 0,
          "underConditions": [],
          "reasons": [
            {
              "message": "Too much attenuation to deliver the product.",
              "code": "TOO_MUCH_ATTENUATION",
              "availabilityDate": null
            }
          ],
          "estimatedUploadRate": 0
        },
        "product": {
          "code": "VDSL-MAX_SHARED",
          "provider": "KOSC",
          "downloadRate": 20,
          "name": "VDSL-Max with shared unbundling",
          "pairs": 1,
          "uploadRate": 1,
          "type": "VDSL",
          "grt": [],
          "guaranteed": false
        }
      }
    ],
    "endpoint": {
      "portability": {
        "type": null,
        "eligibility": {
          "underConditions": [],
          "eligible": false,
          "reasons": [
            {
              "availabilityDate": null,
              "code": "3049",
              "message": "L opérateur détient le parc à modifier"
            }
          ]
        },
        "quarantineEndDate": null
      },
      "referenceType": "lineNumber",
      "fiberInfo": null,
      "copperInfo": {
        "sectionsLengths": [
          {
            "diameter": 4,
            "length": 3010
          }
        ],
        "maxAvailablePairs": 1,
        "status": "active",
        "underConstruction": false,
        "unlistedNumber": false,
        "availablePairs": 1,
        "nra": "90123ABC"
      },
      "reference": "0123456789",
      "address": {
        "door": "00002",
        "city": "PARIS",
        "floor": null,
        "stairs": null,
        "streetName": "RUE DES JARDINS",
        "housingComplex": "",
        "zipCode": "94123",
        "building": null,
        "streetCode": "9412301234",
        "streetNumber": "4",
        "ownerName": null,
        "inseeCode": "94321"
      }
    },
    "eligibilityReference": "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz01"
  }
}

```

> [!primary]
>
> Nous avons omis certaines offres SDSL dans cet exemple en raison de la taille de la réponse.
>

La réponse est composée de :

* un tableau *result.offers* qui liste toutes les offres et si la ligne donnée est éligible ou non;
* une structure *result.endpoint* qui donne des informations sur la ligne : adresse et caractéristiques.

Voici une description des codes d'offre:

| code              | type  | description                           |
|-------------------|-------|---------------------------------------|
| ADSL-MAX_SHARED   | ADSL  | ADSL dégroupage partiel               |
| ADSL-MAX_FULL     | ADSL  | ADSL dégroupage total                 |
| VDSL-MAX_SHARED   | VDSL  | VDSL dégroupage partiel               |
| VDSL-MAX_FULL     | VDSL  | VDSL dégroupage total                 |
| SDSL-MAX          | SDSL  | SDSL monopaire                        |

Pour les offres SDSL à débit garanti, le code offre est formé avec :

* le type d'offre : SDSL
* le débit garanti : 1M, 2M, 4M, ..
* le nombre de paires : 1P, 2P ou 4P

Quelques exemples :

| code              | type  | description                           |
|-------------------|-------|---------------------------------------|
| SDSL-1M-1P        | SDSL  | SDSL monopaire avec 1M guaranti       |
| SDSL-2M-2P        | SDSL  | SDSL 2 paires avec 2M guaranti        |
| SDSL-16M-4P       | SDSL  | SDSL 4 paires avec 16M guaranti       |


##### **Rechercher une ligne active ou inactive pour une adresse** <a name="eligibleSearchLines"></a>

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/search/lines
>

avec les données POST suivantes :

```json
{
    "streetCode": "123456789",
    "streetNumber": "2"
}
```

La réponse :

```json
{
  "status": "ok",
  "error": null,
  "result": [
    {
      "copperInfo": {
        "underConstruction": null,
        "availablePairs": null,
        "status": "inactive",
        "unlistedNumber": false,
        "maxAvailablePairs": null,
        "nra": null,
        "sectionsLengths": []
      },
      "address": {
        "streetCode": "123456789",
        "stairs": null,
        "floor": null,
        "city": "ROUBAIX",
        "door": null,
        "streetName": "RUE DES JARDINS",
        "zipCode": "94123",
        "building": null,
        "housingComplex": "",
        "inseeCode": "94123",
        "streetNumber": "4",
        "ownerName": "J*** D**"
      },
      "lineNumber": "0123456789"
    }
  ]
}
```

Pour cette adresse, nous avons trouvé une seule ligne inactive avec le numéro *0123456789*.

Vous pouvez désormais utiliser l'éligibilité par ligne.

> [!primary]
>
> Les numéros sur liste rouge ne peuvent pas être récupérés à l'aide de cette méthode.
>

##### **Rechercher une éligibilité pour une adresse** <a name="eligibleTestAddress"></a>

Cela retournera une éligibilité par adresse, à utiliser pour la création d'une ligne voisine.
Une création de ligne voisine consiste à vérifier la disponibilité de nouvelles lignes cuivre en recherchant les informations de la ligne voisine la plus proche.

> [!primary]
>
> Si vous avez déjà une ligne active ou inactive, vous devez utiliser le test de ligne à la place de cette méthode.
>

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/test/address
>

avec les données suivantes :

```json
{
  "streetCode": "94123001234",
  "streetNumber": "4"
}
```

La réponse :

```json
{
  "status": "ok",
  "result": {
    "eligibilityReference": "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz01",
    "endpoint": {
      "referenceType": "lineNumber",
      "portability": {
        "quarantineEndDate": null,
        "type": null,
        "eligibility": {
          "underConditions": [],
          "reasons": [],
          "eligible": false
        }
      },
      "address": {
        "city": "PARIS",
        "zipCode": "94123",
        "stairs": null,
        "door": null,
        "streetCode": "94123001234",
        "inseeCode": "94123",
        "ownerName": null,
        "streetName": "RUE DES JARDINS",
        "housingComplex": "",
        "building": null,
        "floor": null,
        "streetNumber": "4"
      },
      "fiberInfo": null,
      "copperInfo": {
        "sectionsLengths": [
          {
            "diameter": 4,
            "length": 1239
          }
        ],
        "underConstruction": false,
        "maxAvailablePairs": 6,
        "unlistedNumber": false,
        "nra": "59512PIL",
        "availablePairs": 6,
        "status": "active"
      },
      "reference": "0123456789"
    },
    "offers": [
      {
        "eligibility": {
          "activationTypes": [
            "createNeighbour"
          ],
          "estimatedDownloadRate": 20.04,
          "underConditions": [],
          "reasons": [
            {
              "message": "Too much attenuation to deliver the product.",
              "availabilityDate": null,
              "code": "TOO_MUCH_ATTENUATION"
            }
          ],
          "eligible": false,
          "estimatedUploadRate": 1.48
        },
        "product": {
          "provider": "KOSC",
          "downloadRate": 20,
          "pairs": 1,
          "name": "VDSL-Max with full unbundling",
          "uploadRate": 1,
          "guaranteed": false,
          "type": "VDSL",
          "grt": [],
          "code": "VDSL-MAX_FULL"
        }
      },
      {
        "product": {
          "provider": "KOSC",
          "pairs": 1,
          "downloadRate": 20,
          "name": "ADSL-Max full unbundling",
          "uploadRate": 1,
          "guaranteed": false,
          "type": "ADSL",
          "code": "ADSL-MAX_FULL",
          "grt": []
        },
        "eligibility": {
          "eligible": true,
          "estimatedUploadRate": 1.16796875,
          "underConditions": [],
          "reasons": [],
          "estimatedDownloadRate": 18.935546875,
          "activationTypes": [
            "createNeighbour"
          ]
        }
      }
    ]
  },
  "error": null
}
```

#### Rechercher une éligibilité fibre (FTTH)

Pour une éligibilité fibre, nous avons deux cas de figure :

* J'ai un identifiant fibre OTP (Optical Termination Point), que je vais utiliser pour l'éligibilité;
* Je n'ai pas d'identifiant OTP fibre et utiliserai un identifiant * bâtiment * pour l'admissibilité.

Un *building* peut être une maison ou un immeuble à logements multiples. Le *building* peut être trouvé à partir d'une adresse ou d'une ligne de cuivre existante.

Le processus d'éligibilité à partir d'une adresse est le suivant :

1. [Obtenir la liste des localités à partir d'un code postal](#eligibleSearchLines)
2. [Obtenir la liste des rues d'une localité](#eligibleSearchStreets)
3. [Obtenir les numéros de rue disponibles pour un code de rue donné](#eligibleSearchStreetNumbers)
4. [Obtenir tous les bâtiments pour une adresse spécifique](#eligibleSearchBuildings)
5. [Faire le test d'éligibilité pour le bâtiment sélectionné](#eligibleTestBuilding)

À partir d'une ligne, nous avons à :

1. [Obtenir les références de bâtiment à partir d'un numéro de ligne donné](#eligibleSearchBuildingsByLine)
2. [Faire le test d'éligibilité pour le bâtiment sélectionné](#eligibleTestBuilding)

Pour un OTP, c'est le plus simple :

1. [Faire le test d'éligibilité pour l'intifiant PTO](#eligibilityTestOtp)

Voici les détails de chaque type de demande.

##### **Pour faire l'éligibilité sur un bâtiment** <a name="eligibilityTestBuilding"></a>

Exemple : nous voulons vérifier l'éligibilité des offres FTTH pour l'immeuble identifié par la référence "IMB/91471/C/NT8X".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/test/building
>

avec les données suivantes :

```json
{
  "building": "IMB/91471/C/NT8X"
}
```

La réponse :

```json
{
  "error": null,
  "status": "ok",
  "result": {
    "offers": [
      {
        "product": {
          "pairs": null,
          "uploadRate": 250,
          "guaranteed": false,
          "code": "FTTH-MAX-300M",
          "type": "FTTH",
          "grt": [],
          "name": "FTTH-Max 300M download and 250M upload",
          "provider": "KOSC",
          "downloadRate": 300
        },
        "eligibility": {
          "estimatedDownloadRate": null,
          "estimatedUploadRate": null,
          "underConditions": [],
          "activationTypes": [],
          "reasons": [],
          "eligible": true
        }
      },
      {
        "product": {
          "grt": [],
          "name": "FTTH-Max 1G download and 250M upload",
          "downloadRate": 1000,
          "provider": "KOSC",
          "pairs": null,
          "guaranteed": false,
          "type": "FTTH",
          "code": "FTTH-MAX-1G",
          "uploadRate": 250
        },
        "eligibility": {
          "estimatedDownloadRate": null,
          "activationTypes": [],
          "eligible": true,
          "reasons": [],
          "estimatedUploadRate": null,
          "underConditions": []
        }
      }
    ],
    "endpoint": {
      "referenceType": "building",
      "portability": null,
      "address": {
        "door": null,
        "floor": null,
        "stairs": null,
        "zipCode": "91400",
        "city": "ORSAY",
        "streetNumber": "2",
        "housingComplex": null,
        "inseeCode": "91471",
        "ownerName": null,
        "streetName": "RUE DU VERGER",
        "building": null,
        "streetCode": "9147123456"
      },
      "fiberInfo": {
        "nro": "91122ABC",
        "operatorCode": "FI",
        "buildingType": "HOUSE",
        "buildingName": "",
        "buildingReference": "IMB/91234/A/NT6Z",
        "operatorName": "ORANGE"
      },
      "reference": "IMB/91234/A/NT6Z",
      "copperInfo": null
    },
    "eligibilityReference": "abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz01"
  }
}
```

Dans le résultat pour le tableau "offers", l'attribut *booléen* *eligible.eligible* nous indique que nous sommes éligibles aux offres "FTTH-Max 300M en téléchargement et 250M en upload" et "FTTH-Max 1G en téléchargement et 250M en upload".

##### **Pour rechercher l'éligibilité à partir d'un identifiant PTO** <a name="eligibilityTestOtp"></a>

Exemple : nous voulons vérifier l'éligibilité pour la PTO "OO-XXXX-XXXX/C".

La requête :

> [!api]
>
> @api {POST} /connectivity/eligibility/test/otp
>

avec les données suivantes :

```json
{
  "otp": "OO-XXXX-XXXX/C"
}
```
La réponse sera identique à celle de l'exemple précédent.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
