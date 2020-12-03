---
title: 'Connectivity API'
excerpt: 'Develop using connectivity API'
section: 'Advanced technical configurations'
---

**Last updated on 12/03/2020**

# OVH Connectivity developer documentation

This documentation intend to help developers using our APIs, in order to build their own applications.

The general API documentation is available here: [https://api.ovh.com/](https://api.ovh.com/){.external}.
You can use the console to interact directly with the API: [https://api.ovh.com/console/.](https://api.ovh.com/console/){.external}.

# Internet Offers

OVH propose some Internet Offers trough some packages that contains at least an Internet access, and can propose some VoIP, emails, domain names.
The offers are visible here: [https://www.ovhtelecom.fr/offre-internet/.](https://www.ovhtelecom.fr/offre-internet/){.external}.

The services can be managed using those API endpoints:
* `/pack/xdsl`: Manage the Internet offers packages;
* `/xdsl`: Manage the Internet accesses, sub-services and options;
* `/connectivity`: Intend to replace `/xdsl`, for now it allow to do eligibility for copper and fiber offers.

## Eligibility

### Overview

Eligibility methods are available on the endpoint path `/connectivity/eligibility/`.
Eligibility goal is to return the eligible Internet offers for a given *endpoint*, in order to order this offer.
An *endpoint* is whether an address or an existing line, identified by the line number and status (active or inactive).

The methods are using as response an asynchronous return structure *xdsl.AsyncTask*, like:
```
{
  "status": a string, the status of the task ("pending", "done" or "error")
  "result": an object, in case of success, the method result
  "error": a string, the error message in case of error
}
```

Here is an example of pending task:
```json
{
  "status": "pending",
  "result": null,
  "error": null
}
```

An example of successful task:
```json
{
  "status": "success",
  "result": { "some key": "some value"},
  "error": null
}
```

And finally an example of a task that failed:
```json
{
  "status": "error",
  "result": null,
  "error": "The action failed, here is why"
}
```
> [!primary]
>
> You need to check the status of the task, and retry a few seconds later is the task is still in status "pending".
>

### Find the endpoints

For a copper line, the endpoint is a line identified by its number and its status.
If no line exist, you will need to do a test by address to see if you are eligible to an neighbour line creation.

For fiber, the endpoint can be indentified by a *building* identifier, or an *OTP* (Optical Termination Point) identifier.

An address is identified by a street number and a street code.
To find them, use this process:
1. [Get the list of localities from a zip code](#eligibilitySearchCities)
2. [Get the list of streets for a locality](#eligibilitySearchStreets)
3. [Get the available street numbers for a given street code](#eligibilitySearchStreetNumbers)
4. [Get all buildings for a specific address](#eligibilitySearchBuildings)
5. [Get all buildings for a specific line](#eligibilitySearchBuildingsByLine)

#### To get the list of localities from a zip code <a name="eligibilitySearchCities"></a>

Example: we want to search the localities for the zipCode "91400".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/cities
>

with the following data:
```json
{
  "zipCode": "91400"
}
```

The response:
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

#### To get the list of streets for a locality <a name="eligibilitySearchStreets"></a>

Example: We want the street list for the locality "ORSAY" indentified by the inseeCode "91471".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/streets
>

with the following data:
```json
{
  "inseeCode": "91471"
}
```

The response:
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

#### To get the available street numbers for a given street code <a name="eligibilitySearchStreetNumbers"></a>

Example: we want the street numbers for the street "RUE DU VERGER" identified by the streetCode "9147132200".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/streetNumbers
>

with the following data:
```json
{
  "streetCode": "9147132200"
}
```

The response:
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

#### To get all buildings for a specific address <a name="eligibilitySearchBuildings"></a>

Example: we want the buildings list for the address "2 RUE DU VERGER, 91400 ORSAY", identified by streetCode "9147132200" and streetNumber "2".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/buildings
>

with the following data:
```json
{
  "streetCode": "9147132200",
  "streetNumber": "2"
}
```

The response:
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

#### To get the building references from a given line number <a name="eligibilitySearchBuildingsByLine"></a>

Example: we want the buildings list for the *inactive* line number *"0123456789"*.

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/buildingsByLine
>

with the following data:
```json
{
  "lineNumber": "0123456789",
  "status": "inactive"
}
```

The response:
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

We found a single building that is a house.

### Do a copper eligibility (ADSL, VDSL or SDSL)

The possible cases are:
* [I know the line number, i will use it for the eligibility](#eligibilityTestLine)
* [I do not know the line number, i will have to search for it first](#eligibilitySearchLines)
* [I do not have a line number, i will have to ask for a line creation from a neighbour line](#eligibilityTestAddress)

#### Do an eligibility on a line <a name="eligibilityTestLine"></a>

If you known the number and status of the line then you can check its eligibility.
The diffence between an active and an inactive line is that an active line got an active Internet access, whereas the inactive line is just an identifier to be use for ordering an Internet access (usually this is the old number of the last owner, that has moved with its line).

> [!warning]
>
> It is important to distinct an active from an inactive line. Always check the address that is returned is the real address for the installation.
>

Here is the request:

> [!api]
>
> @api {POST} /connectivity/eligibility/test/line
>

to do with the following POST data:
```json
{
  "lineNumber": "0123456789",
  "status": "active"
}

```

Here is a partial successfull response example:
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
> We omit some SDSL offers in this example due to the size of the response.
>

The response is composed of:
* an *result.offers* array that will list every offers and if the given line is eligible or not;
* an *result.endpoint* structure that gives informations about the line: address and characteristics.

Here is a description of offer codes:

| code              | type  | description                           |
|-------------------|-------|---------------------------------------|
| ADSL-MAX_SHARED   | ADSL  | ADSL partial                          |
| ADSL-MAX_FULL     | ADSL  | ADSL full unbundling                  |
| VDSL-MAX_SHARED   | VDSL  | VDSL partial                          |
| VDSL-MAX_FULL     | VDSL  | VDSL full unbundling                  |
| SDSL-MAX          | SDSL  | SDSL monopair                         |

For the SDSL offers with guaranteed bandwidth, the offer code formed with:
* the offer type: SDSL
* the guaranteed rate: 1M, 2M, 4M, ..
* the number of pairs: 1P, 2P or 4P

A few examples:

| code              | type  | description                           |
|-------------------|-------|---------------------------------------|
| SDSL-1M-1P        | SDSL  | SDSL monopair with 1M guaranteed      |
| SDSL-2M-2P        | SDSL  | SDSL 2 pairs with 2M guaranteed       |
| SDSL-16M-4P       | SDSL  | SDSL 4 pairs with 16M guaranteed      |
...

#### Search for active or inactive line for an address <a name="eligibilitySearchLines"></a>

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/search/lines
>

with the following POST data:
```json
{
    "streetCode": "123456789",
    "streetNumber": "2"
}
```

The response:
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

For this address we found a single inactive line with the number *0123456789*.

You can now use the eligibility by line.

> [!primary]
>
> Unlisted numbers cannot be retrieved using this method.
>

#### Do an eligibility for an address <a name="eligibilityTestAddress"></a>

This will return an eligibility by address, to use for a neighbour line creation.
A neigbour line creation consist to check the availability of new copper lines by searching for your nearest neighbour line informations.

> [!primary]
>
> If you already have an active or inactive line, you should use the test by line instead.
>

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/test/address
>

with the following data:
```json
{
  "streetCode": "94123001234",
  "streetNumber": "4"
}
```

The response:
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

### Do a fiber eligibility (FTTH)

For a fiber eligibility we have two cases:
* I got an fiber OTP (Optical Termination Point) identifier, that i will use for the eligibility;
* I do not have an fiber OTP identifier and will use a *building* identifier for the eligibility.

A *building* can be a house or a building with multiple housing. The *building* can be found from an address or from an existing copper line.

The process to do an eligibility from an address is:
1. [Get the list of localities from a zip code](#eligibilitySearchLines)
2. [Get the list of streets for a locality](#eligibilitySearchStreets)
3. [Get the available street numbers for a given street code](#eligibilitySearchStreetNumbers)
4. [Get all buildings for a specific address](#eligibilitySearchBuildings)
5. [Do the eligibility for the selected building](#eligibilityTestBuilding)

From a line, we have to:
1. [Get the building references from a given line number](#eligibilitySearchBuildingsByLine)
2. [Do the eligibility for the selected building](#eligibilityTestBuilding)

For an OTP, this is the simpliest:
1. [Do the eligibility test for the OTP](#eligibilityTestOtp)

Here are the details for each type of requests.

#### To do the eligibility on a building <a name="eligibilityTestBuilding"></a>

Example: we want to check FTTH offers eligibility for the building identified by the reference "IMB/91471/C/NT8X".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/test/building
>

with the following data:
```json
{
  "building": "IMB/91471/C/NT8X"
}
```

The response:
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

In the result the array "offers" the *boolean* attribute *eligibility.eligible* tell us we are eligible to the offers "FTTH-Max 300M download and 250M upload" and "FTTH-Max 1G download and 250M upload".

#### To do the eligibility on an OTP identifier <a name="eligibilityTestOtp"></a>

Example: we want to check FTTH offers eligibility for the OTP "OO-XXXX-XXXX/C".

The request:

> [!api]
>
> @api {POST} /connectivity/eligibility/test/otp
>

with the following data:
```json
{
  "otp": "OO-XXXX-XXXX/C"
}
```

The response is the same as the previous example.

## Go further

Chat with our community of users at [https://community.ovh.com](https://community.ovh.com).

