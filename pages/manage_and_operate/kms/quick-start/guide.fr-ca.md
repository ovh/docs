---
title: "Premiers pas avec OVHcloud Key Management Service (KMS)"
excerpt: "Mettez en oeuvre votre OVHcloud KMS"
updated: 2024-10-23
---

> [!warning]
>
> Le KMS OVHcloud est actuellement en phase bêta. Ce guide peut donc être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire des retours sur le canal Discord dédié : <https://discord.gg/ovhcloud>.
>

## Objectif

L'objectif de ce guide est de présenter les différentes étapes pour mettre en place votre premier KMS (Key Management Service), créer une clé et un certificat d'accès.

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

## En pratique

### Commander votre KMS

Chaque KMS est associé à une région, ainsi les clés qui y sont stockées ont la garantie de rester dans cette région.<br>
Il est possible de commander plusieurs KMS, que ce soit dans des régions différentes ou dans une même région.

La facturation d'un KMS étant basée sur le nombre de clés y étant stockées, la commande d'un KMS ne génère pas de facturation en elle-même.

Vous pouvez commander un KMS depuis [l'espace client OVHcloud](/links/manager) en vous rendant sur l'un des menus suivants :

- Cliquez sur `Bare Metal Cloud`{.action} puis sur `Identité, Sécurité & Opérations`{.action}. Cliquez sur `Key Management Service`{.action} puis sur le bouton `Commander un KMS`{.action}.
- Cliquez sur `Hosted Private Cloud`{.action} puis sur `Identité, Sécurité & Opérations`{.action}. Cliquez sur `Key Management Service`{.action} puis sur le bouton `Commander un KMS`{.action}.

![Accès au menu KMS](images/access_to_the_KMS_menu_01.png){.thumbnail}

Indiquez la région de votre KMS.

![Commander le KMS](images/order_kms_01.png){.thumbnail}

La commande est ensuite à finaliser dans un autre onglet. Si celui-ci ne s'est pas ouvert automatiquement, le lien de commande est affiché :

![Commander le KMS](images/order_kms_02.png){.thumbnail}

Après quelques secondes, le KMS est bien disponible dans votre espace client.

![Commander le KMS](images/order_kms_03.png){.thumbnail}

### Via la console d'administration

#### Créer une clé de chiffrement

Vous pouvez créer une clé de chiffrement depuis le menu dédié de la console d'administration, en cliquant sur le bouton `Créer une clé`{.action}.

![Créer une clé](images/create_key_01.png){.thumbnail}

Un formulaire permet alors de configurer la clé en sélectionnant le type de la clé, sa taille et ses usages.

![Créer une clé](images/create_key_02.png){.thumbnail}

Une fois la clé créée, cliquez dessus pour accéder à ses détails.

Le tableau de bord présente les propriétés cryptographiques de la clé, ainsi que les actions permettant de la renommer, la désactiver ou la supprimer.

Afin de limiter les risques de suppression accidentelle, il est nécessaire de désactiver la clé avant de la supprimer.

> [!warning]
>
> Il n'existe aucun moyen de récupérer une clé supprimée et sa suppression entraine la perte des données chiffrés avec celle-ci. Aussi, toute suppression doit être envisagée avec la plus grande précaution.

![Créer une clé](images/create_key_03.png){.thumbnail}

#### Créer un certificat d'accès

Afin de communiquer avec votre KMS, il est nécessaire de créer un certificat d'accès.
Celui-ci sera utilisé pour toute interaction avec le KMS, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.

Il est possible de créer ce certificat depuis le menu dédié de la console d'administration, en cliquant sur le bouton `Générer un certificat d'accès`{.action}.

![Créer un certificat](images/create_certificat_01.png){.thumbnail}

La première partie du formulaire vous permet de préciser sa durée de validité ainsi que de fournir ou non votre propre clé privée via une Certificate Signing Request (CSR).

- Sans fournir de clé privée :

Si vous ne fournissez pas de CSR, OVHcloud génèrera le certificat d'accès ainsi qu'une clé privée.

![Créer un certificat](images/create_certificat_02.png){.thumbnail}

- Avec une CSR :

Si vous disposez de votre propre clé privée, il est possible de l'utiliser en fournissant une CSR.

![Créer un certificat](images/create_certificat_03.png){.thumbnail}

La deuxième partie du formulaire permet d'indiquer les [identités OVHcloud](/pages/manage_and_operate/iam/identities-management) associées au certificat permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

Il est possible d'ajouter l'identitée `root` au certificat afin de ne pas être contraint par l'IAM OVHcloud.

![Créer un certificat](images/create_certificat_04.png){.thumbnail}

Il est ensuite nécessaire de télécharger la clé privée du certificat.

> [!warning]
>
> La clé privée ne sera plus accessible par la suite. En cas de perte, il sera nécessaire de regénérer un certificat.
>

![Créer un certificat](images/create_certificat_05.png){.thumbnail}

Enfin, il est possible de télécharger la clé publique du certificat depuis le dashboard.

![Créer un certificat](images/create_certificat_06.png){.thumbnail}

### Via les API

#### Créer une clé de chiffrement

La création d'une clé se fait par l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/okms/resource/{okmsId}/serviceKey|Créer ou importer une CMK|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|name|string|Nom de la clé|
|context|string|Donnée d'identification complémentaire permettant de vérifier l'authenticité de la clé|
|type|oct, RSA, EC|Type de la clé : Octet sequence (oct) for symmetric keys, RSA (RSA), Elliptic Curve (EC)|
|size|Integer|Taille de la clé - voir table de correspondance ci-dessous|
|operations|Array|Usage de la clé - voir table de correspondance ci-dessous|
|crv|P-256, P-384, P-521|(optionnel) Courbe cryptographique pour les clés de type EC|

**Exemple de création de clé symétrique :**

```json
{
  "name": "My first AES key",
  "context": "project A",
  "type": "oct",
  "size": 256,
  "operations": [
    "encrypt",
    "decrypt"
  ]
}
```

**Exemple de création de clé asymétrique :**

```json
{
  "name": "My first RSA key",
  "context": "project A",
  "type": "RSA",
  "size": 4096,
  "operations": [
    "sign",
    "verify"
  ]
}
```

**Exemple de création de clé EC :**

```json
{
  "name": "My first EC key",
  "context": "project A",
  "type": "EC",
  "operations": [
    "sign",
    "verify"
  ],
  "crv": "P-256"
}
```

Les tailles et opérations possibles en fonction du type de clé sont les suivantes :

- **oct** :
    - taille : 128, 192, 256
    - opérations :
        - encrypt, decrypt
        - wrapKey, unwrapKey
- **RSA** :
    - taille : 2048, 3072, 4096
    - opérations : sign, verify
- **EC** :
    - taille : ne pas spécifier
    - curve : P-256, P-384, P-521
    - opérations : sign, verify

#### Créer un certificat d'accès

Afin de communiquer avec votre KMS, il est nécessaire de créer un certificat d'accès.
Celui-ci sera utilisé pour toute interaction avec le KMS, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.

Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui)

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre propre clé privée via une Certificate Signing Request (CSR).

##### Sans founir de clé privée

Si vous ne fournissez pas de CSR, OVHcloud génèrera le certificat d'accès ainsi qu'une clé privée.

La génération de certificat se fait via l'API suivante :

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

Il est nécessaire d'indiquer les informations suivantes :

- **name** : le nom du certificat
- **identityURNs** : liste des identités OVHcloud sous format d'URN qui seront fournies à l'IAM pour le calcul des droits d'accès
- **description** : description du certificat (optionnel)
- **validity** : durée de validité du certificat en jours - 365 jours par défaut (optionnel)

**Exemple de création de certificat avec le compte root :**

```json
{
  "description": "My root access credential",
  "identityURNs": [
    "urn:v1:eu:identity:account:xx1111-ovh"
  ],
  "name": "root",
  "validity": 30
}
```

**Exemple de création de certificat avec un compte utilisateur local :**

```json
{
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "name": "John Smith",
  "validity": 30
}
```

L'API retourne ensuite l'état de création du certificat :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "CREATING",
  "fromCSR": false,
  "privateKeyPEM": "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIDOfWuMVQxl5quoURzThF4zTI9YYTmylSaPjneLBwP+2oAoGCCqGSM49\nAwEHoUQDQgAERd1eMw0YdAD+E9oSymGc4bCL1mfJl0EZwoM2ya/uKFFVFnGMnckg\nXXXXXXXXXXXXXXX==\n-----END EC PRIVATE KEY-----\n",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **privateKeyPEM** dans un fichier **domain.key**

> [!warning]
>
> La clé privée ne sera plus accessible par la suite. En cas de perte, il sera nécessaire de regénérer un certificat.
>

Copiez ensuite l'ID du certificat et accédez au détail de ce dernier via l'API :

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>

L'API renvoie le certificat au format PEM :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "READY",
  "fromCSR": false,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **certificatePEM** dans un fichier **client.cert**.

##### Avec une CSR

Si vous disposez de votre propre clé privée, il est possible de l'utiliser en fournissant une CSR.

La génération de certificat se fait via l'API suivante :

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

Il est nécessaire d'indiquer les informations suivantes :

- **name** : le nom du certificat
- **identityURNs** : liste des identités OVHcloud sous format d'URN qui seront fournies à l'IAM pour le calcul des droits d'accès
- **description** : description du certificat (optionnel)
- **validity** : durée de validité du certificat en jours - 365 jours par défaut (optionnel)
- **csr** : le contenu de la CSR

**Exemple de création de certificat :**

```json
{
  "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNlcnQgSW5jLjERMA8GA1UECwwIRGln\naUNlcnQxHTAbBgNVBAMMFGV4YW1wbGUuZGlnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWBOkZc+c\n1Po2EmvBz+AD5sBdT5kzGQA6NbWyZGldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWzTx+n0zKfqcbgXi4DJx+C1bjptYPR\nBPZL8DAeWuA8ebudVT44yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNt5qcLsx5a8uk4G6AKHMzuhLsJ7XZjgmQXGECpY\nQ4mC3yT3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1PpVUNCPQGn9p/eX6Qo7vpDaPybRtA2R7XLKjQaF9oXWeCUqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEXXXXXXXXXXXXX\n-----END CERTIFICATE REQUEST-----",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "name": "John Smith",
  "validity": 30
}
```

L'API retourne ensuite l'état de création du certificat :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "CREATING",
  "fromCSR": true,
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez l'ID du certificat et accédez au détail de ce dernier via l'API :

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>

L'API renvoie le certificat au format PEM :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "John Smith",
  "description": "My access credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:xx1111-ovh/john.smith",
    "urn:v1:eu:identity:group:xx1111-ovh/my_group"
  ],
  "status": "READY",
  "fromCSR": true,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **certificatePEM** dans un fichier **client.cert**.

### Utiliser le KMS OVHcloud

Une fois votre KMS OVHcloud initialisé, il est possible de l'utiliser de deux manières différentes :

- En utilisant les [API Rest](/pages/manage_and_operate/kms/kms-usage), si vous souhaitez utiliser manuellement les API pour chiffrer ou signer vos données
- En utilisant le [protocole KMIP](/pages/manage_and_operate/kms/kms-kmip), si vous souhaitez connecter n'importe quel produit compatible KMIP avec le KMS OVHcloud


## Aller plus loin

[Utiliser le KMS OVHcloud avec vos données](/pages/manage_and_operate/kms/kms-usage)
Échangez avec notre [communauté d'utilisateurs](/links/community).
