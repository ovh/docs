---
title: "Premiers pas avec OVHcloud Key Management Service (KMS)"
excerpt: "Mettez en oeuvre votre OVHcloud KMS"
updated: 2024-07-04
---

> [!warning]
>
> Le KMS OVHcloud est actuellement en phase bêta. Ce guide peut donc être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire des retours sur le canal Discord dédié : <https://discord.gg/ovhcloud>.
>

## Objectif

L'objectif de ce guide est de présenter les différentes étapes pour mettre en place votre premier KMS (Key Management Service), créer une clé et y accéder.

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

### Créer un certificat d'accès

Afin de communiquer avec votre KMS, il est nécessaire de créer un certificat d'accès.
Celui-ci sera utilisé pour toute interaction avec le KMS, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.

Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui)

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre propre sécurité privée via une Certificate Signing Request (CSR).

#### Sans founir de clé privée

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
  "name": "access",
  "validity": 30
}
```

L'API retourne ensuite l'état de création du certificat :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "reader",
  "description": "My reader credential",
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
  "name": "reader",
  "description": "My reader credential",
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

#### Avec une CSR

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
  "name": "access",
  "validity": 30
}
```

L'API retourne ensuite l'état de création du certificat :

```json
{
  "id": "f18b5e0d-75b8-40a3-9b0e-XXXXXX",
  "name": "reader",
  "description": "My reader credential",
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
  "name": "reader",
  "description": "My reader credential",
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

### Communiquer avec le KMS

La communication avec le KMS est disponible uniquement par API pendant la beta.

Le KMS étant régionalisé, l'accès à l'API se fait directement sur la région de celui-ci : <https://my-region.okms.ovh.net>

Par exemple, pour un KMS créé sur la région **eu-west-rbx** : <https://eu-west-rbx.okms.ovh.net>

En cas d'utilisation d'un navigateur, il est nécessaire de convertir le certificat en format pkcs12 :

```bash
openssl pkcs12 -export -inkey client.key -in client.cert -out client.p12
```

#### Créer une clé de chiffrement

La création d'une clé se fait par l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey|Créer ou importer une CMK|

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

#### Importer une clé de chiffrement

A la création d'une clé, il est possible d'importer une clé existante.

Pour cela il est possible d'ajouter un champ complémentaire **keys** dans le corps de la requête :

```json
{
  "name": "My imported key",
  "keys": [
    {
      "kid": "string",
      "use": "string",
      "key_ops": [
        "string"
      ],
      "alg": "string",
      "kty": "oct",
      "n": "string",
      "e": "string",
      "k": "string",
      "crv": "string",
      "x": "string",
      "y": "string",
      "d": "string",
      "dp": "string",
      "dq": "string",
      "p": "string",
      "q": "string",
      "qi": "string"
    }
  ]
}
```

La clé doit être au format JSON Web Key (JWK). La valeur des champs contenus dans le tableau suit la documentation de la [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518.html).

#### Gérer les clés de chiffrement

Afin de gérer les clés de chiffrement, plusieurs API sont disponibles :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|GET|/v1/servicekey|Liste les clés de chiffrement disponibles|
|DELETE|/v1/servicekey/{keyId}/delete|Supprime une clé de chiffrement|
|POST|/v1/servicekey/{keyId}/activate|Active une clé de chiffrement|
|POST|/v1/servicekey/{keyId}/deactivate|Désactive une clé de chiffrement|

La désactivation d'une clé de chiffrement implique que celle-ci ne sera plus utilisable, bien que la clé reste présente dans le KMS.<br>
La suppression d'une clé de chiffrement n'est possible que sur une clé préalablement désactivée.

> [!warning]
>
> La suppression d'une clé de chiffrement est définitive. Toutes les données chiffrées à l'aide de celle-ci seront définitivement inaccessibles.
>

### Chiffrer une donnée avec le KMS

#### Chiffrement sur le KMS

Le KMS OVHcloud dispose d'une API de chiffrement dédiée pour le chiffrement de petits volumes de données (moins de 4 kB).<br>
Il s'agit de la méthode la plus simple, mais qui ne présente pas les meilleures performances.

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/encrypt|Chiffrement de données avec une CMK|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|plaintext|string|Donnée à chiffrer|
|context|string|Donnée d'identification complémentaire permettant de vérifier l'authenticité de la donnée|

**Exemple de chiffrement**

```json
{
  "plaintext": "My secret data",
  "context": "Project A"
}
```

L'API renvoyant ensuite la donnée chiffrée dans un champ **ciphertext** :

```json
{
  "ciphertext": "Encrypted data",
}
```

Le déchiffrement de la donnée se faisant à l'inverse via l'API :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/decrypt|Déchiffrement de données avec une CMK|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|ciphertext|string|Donnée à déchiffrer|
|context|string|Donnée d'identification complémentaire permettant de vérifier l'authenticité de la donnée|

Le champ **context** devant avoir la même valeur que celle donnée lors du chiffrement.

#### Chiffrement avec une Data Key (DK)

Pour plus de performances, il est possible de générer une Data Key (DK) depuis une clé symétrique (AES) pour l'utiliser depuis votre application.

![Chiffrement avec DK](images/Datakey_encrypt.png){.thumbnail}

La génération d'une DK se fait par l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/datakey|Générer une DK dérivée d'une CMK|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|name|string|Nom de la clé|
|size|Integer|Taille de la clé (64-4096)|

**Exemple de génération de Data Key :**

```json
{
  "name": "My Data Key",
  "size": 4096
}
```

L'API renverra ensuite la Data Key :

```json
{
  "key": "string",
  "plaintext": "string"
}
```

- **key** : clé chiffrée encodée en base64. Cette information doit être stockée avec la donnée chiffrée et sera utilisée pour le déchiffrement par le KMS.
- **plaintext** : clé en clair encodée en base64. Cette information doit être supprimée une fois le chiffrement effectué et ne doit pas être sauvegardée.

L'utilisation de la Data Key se fait ensuite à travers des algorithmes de chiffrement comme AES-GCM qui n'est pas couvert par cette documentation.

![Déchiffrement avec DK](images/Datakey_decrypt.png){.thumbnail}

Inversement, il est possible de récupérer la version déchiffrée d'une Data Key via l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/datakey/decrypt|Déchiffrement d'une DK|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|key|string|Data Key chiffrée|

Et renvoie la Data Key déchiffrée dans un champ **plaintext**.

### Signer avec le KMS

La signature de fichier se fait à l'aide de la clé privée d'une paire de clés asymétriques.

#### Algorithmes supportés

Le KMS OVHcloud supporte la liste d'algorithmes de signature suivante :

- **RSASSA-PKCS1 v1.5**

|**Nom**|**Digital Signature Algorithm**|
| :-: | :-: |
|RS256|RSASSA-PKCS1-v1_5 using SHA-256|
|RS384|RSASSA-PKCS1-v1_5 using SHA-384|
|RS512|RSASSA-PKCS1-v1_5 using SHA-512|

Suivant la documentation de la [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.3).

- **ECDSA**

|**Nom**|**Digital Signature Algorithm**|
| :-: | :-: |
|ES256|ECDSA using P-256 and SHA-256|
|ES384|ECDSA using P-384 and SHA-384|
|ES512|ECDSA using P-521 and SHA-512|

Suivant la documentation de la [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.4).

- **RSASSA-PSS**

|**Nom**|**Digital Signature Algorithm**|
| :-: | :-: |
|PS256|RSASSA-PSS using SHA-256 and MGF1 with SHA-256|
|PS384|RSASSA-PSS using SHA-384 and MGF1 with SHA-384|
|PS512|RSASSA-PSS using SHA-512 and MGF1 with SHA-512|

Suivant la documentation de la [RFC 7518](https://www.rfc-editor.org/rfc/rfc7518#section-3.5).

#### Signature d'un message

Etant donné que la clé privée ne peut être extraite du KMS, la signature ne peut se faire que directement auprès du KMS.

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/sign|Signature d'un ficher|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|message|string|Message à signer en format base64|
|alg|string|Algorithme de signature|
|isdigest|boolean|Indique si le message est déjà hashé|

**Exemple de signature :**

```json
{
  "message": "SGVsbG8gV29ybGQ=",
  "alg": "RS256",
  "isdigest": false
}
```

L'API renverra ensuite la signature du fichier :

```json
{
  "signature": "EmUGXC6rsFTWtmFn77y6NS/U6IuhThApVKWTZdXjE7rDMonRPPxbjTo01HQN62J3Dxqyw=="
}
```

#### Vérification d'un fichier

La vérification d'un fichier peut se faire soit directement auprès du KMS, soit en utilisant la clé publique.

Auprès du KMS, il est possible d'utiliser l'API suivante :

|**Méthode**|**Chemin**|**Description**|
| :-: | :-: | :-: |
|POST|/v1/servicekey/{keyId}/verify|Vérification d'une signature|

L'API attend les valeurs suivantes :

|**Champ**|**Valeur**|**Description**|
| :-: | :-: | :-: |
|message|string|Message à signer|
|signature|string|Signature associée au message|
|alg|string|Algorithme de signature|
|isdigest|boolean|Indique si le message est déjà hashé|

**Exemple de vérification**

```json
{
  "message": "SGVsbG8gV29ybGQ=",
  "signature": "EmUGXC6rsFTWtmFn77y6NS/U6IuhThApVKWTZdXjE7rDMonRPPxbjTo01HQN62J3Dxqyw==",
  "alg": "RS256",
  "isdigest": false
}
```

L'API renverra ensuite le résultat de la vérification :

```json
{
  "result": true
}
```

### Swagger

Il est possible d'accéder au swagger correspondant à votre KMS en cliquant sur le lien présent dans l'espace client au niveau du dashboard de votre KMS.

![swagger](images/swagger.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
