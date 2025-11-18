---
title: "Générer un certificat d'accès OKMS"
excerpt: "Gérez vos certificats d'accès pour vos produits de Data Security"
updated: 2025-10-01
---

## Objectif

L'objectif de ce guide est de présenter les différentes étapes pour créer et gérer vos certificats d'accès OKMS sur vos produits de Data Security.

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir [commandé un KMS OVHcloud](/pages/manage_and_operate/kms/quick-start)

## En pratique

### Description des certificats d'accès OKMS

Afin de communiquer avec votre domaine OKMS, il est nécessaire de créer un certificat d'accès.
Les certificats d'accès à un domaine OKMS sont utilisés pour le produit **Key Management Service (KMS)**

Celui-ci sera utilisé pour toute interaction avec le domaine, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.
Un certificat d'accès n'est valable que pour le domaine pour lequel il a été généré.

> [!warning]
>
> Seule la génération de certificat avec un CSR est couverte par la certification PCI-DSS.
>

### Créer un certificat d'accès depuis le KMS

#### Depuis la console d'administration

Il est possible de créer ce certificat depuis le menu dédié du KMS.
Pour cela connectez-vous à [l'espace client OVHcloud](/links/manager), rendez-vous dans le menu `Identité, Sécurité & Opérations`{.action} puis `Key Management Service`{.action} et cliquez sur le bouton `Générer un certificat d'accès`{.action}.

![Créer un certificat](images/create_certificat_01.png){.thumbnail}

La première partie du formulaire vous permet de préciser sa durée de validité, de sélectionner l'algorithme de signature, ainsi que de fournir ou non votre Certificate Signing Request (CSR) dans le cas où vous posséderiez votre propre clé privée.

- Sans fournir de clé privée :

Si vous ne fournissez pas de CSR, OVHcloud génèrera le certificat d'accès ainsi qu'une clé privée.

![Créer un certificat](images/create_certificat_02.png){.thumbnail}

- Avec une CSR :

Si vous disposez de votre propre clé privée, il est possible de l'utiliser en fournissant une CSR.

![Créer un certificat](images/create_certificat_03.png){.thumbnail}

La deuxième partie du formulaire permet d'indiquer les [identités OVHcloud](/pages/manage_and_operate/iam/identities-management) associées au certificat permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

Il est possible d'ajouter l'identité `root` au certificat afin de ne pas être contraint par l'IAM OVHcloud.

![Créer un certificat](images/create_certificat_04.png){.thumbnail}

Il est ensuite nécessaire de télécharger la clé privée du certificat.

> [!alert]
>
> La clé privée ne sera plus accessible par la suite. En cas de perte, il sera nécessaire de regénérer un certificat.
>

> [!warning]
>
> Le champ **privateKeyPEM** doit être modifié afin de remplacer les occurrences de `\n` par des retours chariots.
>

![Créer un certificat](images/create_certificat_05.png){.thumbnail}

Enfin, il est possible de télécharger la clé publique du certificat depuis le tableau de bord.

![Créer un certificat](images/create_certificat_06.png){.thumbnail}

#### Depuis les API

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre Certificate Signing Request (CSR) dans le cas où vous posséderiez votre propre clé privée.

##### Sans founir de clé privée

Si vous ne fournissez pas de CSR, OVHcloud génèrera le certificat d'accès ainsi qu'une clé privée.

La génération de certificat se fait via l'API suivante :

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

Il est nécessaire d'indiquer les informations suivantes :

- **name** : le nom du certificat
- **identityURNs** : liste des identités OVHcloud sous un format URN qui seront fournies à l'IAM pour le calcul des droits d'accès
- **description** : description du certificat (facultatif)
- **certificateType** : Algorithme de signature du certificat (ECDSA ou RSA) - ECDSA par défaut (facultatif)
- **validity** : durée de validité du certificat en jours - 365 jours par défaut (facultatif)

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
  "certificateType": "ECDSA",
  "status": "CREATING",
  "fromCSR": false,
  "privateKeyPEM": "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIDOfWuMVQxl5quoURzThF4zTI9YYTmylSaPjneLBwP+2oAoGCCqGSM49\nAwEHoUQDQgAERd1eMw0YdAD+E9oSymGc4bCL1mfJl0EZwoM2ya/uKFFVFnGMnckg\nXXXXXXXXXXXXXXX==\n-----END EC PRIVATE KEY-----\n",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **privateKeyPEM** dans un fichier **domain.key**

> [!alert]
>
> La clé privée ne sera plus accessible par la suite. En cas de perte, il sera nécessaire de regénérer un certificat.
>

> [!warning]
>
> Le champ **privateKeyPEM** doit être modifié afin de remplacer les occurrences de `\n` par des retours chariots.
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
  "certificateType": "ECDSA",
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **certificatePEM** dans un fichier **client.cert**.

> [!warning]
>
> Le champ **certificatePEM** doit être modifié afin de remplacer les occurrences de `\n` par des retours chariots.
>

##### Avec une CSR

Si vous disposez de votre propre clé privée, il est possible de l'utiliser en fournissant une CSR.

La génération de certificat se fait via l'API suivante :

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

Il est nécessaire d'indiquer les informations suivantes :

- **name** : le nom du certificat
- **identityURNs** : liste des identités OVHcloud au format URN qui seront fournies à l'IAM pour le calcul des droits d'accès
- **description** : description du certificat (facultatif)
- **validity** : durée de validité du certificat en jours - 365 jours par défaut (facultatif)
- **csr** : le contenu de la CSR

> [!warning]
>
> La CSR doit être au format JSON. Le fichier doit être modifié afin de remplacer les retours chariots par des `\n` (voir l'exemple ci-dessous). Vous pouvez aussi utiliser des outils tiers en ligne pour adapter le contenu dans un format JSON adapté.
>

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
  "certificateType": "ECDSA",
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
  "certificateType": "ECDSA",
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMIIBqTCCAVCgAwIBAgIRAPGLXg11uECjmw5x/+X/A8swCgYIKoZIzj0EAwIwFTET\nMBEGA1UEAxMKQ0NNVXNlcnNDQTAeFw0yNDA0MDQxMDI2MjhaFw0yNTA0MDQxMDI2\nMjhaMC8xLTArBgNVBAMTJGU5MGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUz\nOGI2YjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEXdXjMNGHQA/hPaEsphnOGw\ni9ZnyZdBGcKDNsmv7ihRVRZxjJ3JICEusleqD4lE27DAAdzbRdqAhpCqsTks+sSj\nZzBlME4GA1UdEQEB/wREMEKgQAYKKwYBBAGCNxQCA6AyDDBva21zLmRvbWFpbjpl\nOTBjNTg0MS1mMzllLTQ5ODMtODU5Ni02MmZmMGM1MzhiNmIwEwYDVR0lBAwwCgYI\nKwYBBQUHAwIwCgYIKoZIzj0EAwIDRwAwRAIgdWGYm1UQMg0sTIgROFH5mWiAh/lk\nDlyP5HhrWyFB9BICIDl5wtUWgCmo6TjOqXXXXXXXXXXXXXX\n-----END CERTIFICATE-----",
  "createdAt": "2024-04-04T12:26:28.856619+02:00",
  "expiredAt": "2025-04-04T12:26:28.856616+02:00"
}
```

Copiez la valeur du champ **certificatePEM** dans un fichier **client.cert**.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
