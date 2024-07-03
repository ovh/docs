---
title:'OKMS au sein de Hosted Private Cloud VMware on OVHcloud'
      'Chiffrement de VM avec OKMS dans VMware on OVHcloud'
      'Commande et activation de OKMS pour VMware on OVHcloud'
excerpt:'Découvrez comment mettre en place le service de gestion de clé OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud pour sécuriser efficacement vos données sensibles'
        'Découvrez comment activer le chiffrement de données dans votre environnement VMware on OVHcloud grâce au KMS managé OVHcloud (OKMS)'
        'Protégez votre confidentialité et assurez la sécurité de vos informations sensibles VMware on OVHcloud avec la solution avancée de gestion de clé KMS OVHcloud'
        'Activation du chiffrement avec la solution KMS OVHcloud (OKMS) pour sécurisez votre Hosted Private Cloud VMware on OVHcloud'
        'Confidentialité renforcée avec le KMS OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud'
updated: 2023-07-03
---
<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> OVHcloud KMS (Okms) est disponible en bêta. Ce guide peut être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire part de vos feedbacks sur le canal [Discord](https://discord.gg/ovhcloud){.external} dédié.
>

## Objectif

**Commander et configurer un KMS OVHcloud (Okms) pour activer le chiffrement de vos machines virtuelles Hosted Private Cloud VMware on OVHcloud.**

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Avoir accès à l’interface de gestion vSphere de votre PCC (Hosted Private Cloud VMware on OVHcloud).
- Avoir lu les guides : 
  - [Activer KMS au sein de Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_vmware_overall).
  - [Premier pas (KMS + IAM + vSphere)](/pages/manage_and_operate/kms/quick-start).
- Une clef de chiffrement RSA ou ECDSA.
- Un certificat TLS en format PEM.

## En pratique

/// details | Introduction, listing url, appels api okms.

Pour plus d'information sur les choix qui s'offre à vous avec KMS et Hosted Private Cloud VMware on OVHcloud, lisez le guide [Activer KMS au sein de Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_vmware_overall).

Nous allons dans ce guide configurer le chiffrement de machines virtuelles avec le KMS OVHcloud OKMS au sein d'un environnement Hosted Private Cloud VMware on OVHcloud avec le KMS OVHcloud (OKMS).

OVHcloud KMS (Okms) est le service centralisé de chiffrement entièrement managé pour sécuriser vos données dans vos applications et vos services OVHcloud.

### Urls Okms

| Type    | URL                              | Region              | OKMS Region enum |
|---------|----------------------------------|---------------------|------------------|
| KMIP    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX      |
| KMIP    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX      |
| REST    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX      |
| Swagger | swagger-eu-west-rbx.okms.ovh.net | France - Roubaix    | EU_WEST_RBX      |
| KMIP    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG      |
| KMIP    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG      |
| REST    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG      |
| Swagger | swagger-eu-west-sbg.okms.ovh.net | France - Strasbourg | EU_WEST_SBG      |
| KMIP    | eu-west-gra.okms.ovh.net         | France - Graveline | EU_WEST_SBG      |
| KMIP    | eu-west-gra.okms.ovh.net         | France - Graveline  | EU_WEST_GRA      |
| REST    | eu-west-gra.okms.ovh.net         | France - Graveline | EU_WEST_GRA      |
| Swagger | swagger-eu-west-gra.okms.ovh.net | France - Graveline | EU_WEST_GRA      |

## Listing des appels api KMS HPC VMware on OVHcloud

| **Hosted Private Cloud API Calls**                                           | **Commentaires**                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------|
| **API V2**                                                                   |                                                                 |
| **Credentials :**                                                            |                                                                 |
| **GET** /okms/resource/{okmsId}/credential                                   | - List all access credentials.                                  |
| **POST** /okms/resource/{okmsId}/credential                                  | - Request a new access credential.                              |
| **GET** /okms/resource/{okmsId}/credential/{credentialId}                    | - Get an access credential.                                     |
| **DEL** /okms/resource/{okmsId}/credential/{credentialId}                    | - Revoke and delete an access credential.                       |
|                                                                              |                                                                 |
| **Reference :**                                                              |                                                                 |
| **GET** /okms/reference/serviceKey                                           | - Get service key type, size, curve and operations combination. |
| ---                                                                          |                                                                 |
| **Resources :**                                                              |                                                                 |
| **GET** /okms/resource                                                       | - List OVHcloud KMS services.                                   |
| **GET** /okms/resource/{okmsId}                                              | - Get an OVHcloud KMS service.                                  |
|                                                                              |                                                                 |
| **Service Keys :**                                                           |                                                                 |
| **GET** /okms/resource/{okmsId}/serviceKey                                   | - List all keys.                                                |
| **POST** /okms/resource/{okmsId}/serviceKey                                  | - Create or import a service key.                               |
| **GET** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Retrieve a key.                                               |
| **PUT** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Update a service key.                                         |
| **DEL** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Delete the given service key.                                 |
|                                                                              |                                                                 |
| **API V1**                                                                   |                                                                 | 
| **Authentification :**                                                       |                                                                 |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms                           | - List virtual machine encryption KMS servers.                  |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - Create virtual machine encryption KMS server.                 |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Get virtual machine encryption KMS server.                    |
| DEL /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Remove virtual machine encryption KMS server.                 |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties | - Update virtual machine encryption KMS server.                 |

///

## Étape 1 - Commande d'un KMS OVHcloud (Okms) au sein de HPC VMware on OVHcloud

/// details | Comment commander un KMS OVHcloud pour HPC VMware on OVHcloud?

### Via le control panel OVHcloud

Pour commander un fournisseur de clés KMS OVHcloud depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au : [Control Panel OVHcloud](/links/manager).

Vous êtes invité à vous rendre dans le service KMS : `Hosted Private Cloud | Identité, Sécurité & Opérations | Key Management Service`.{.action}

Si vous n'avez pas de serveur KMS, cliquez sur: `Commander un KMS`{.action}.

Vous êtes dans "Commander un KMS", choisissez la région.

Les clés de chiffrement et certificats d’accès de ce KMS seront stockées dans la région indiquée. Ils pourront être utilisés dans tous les produits OVHcloud sans distinction de région.

![Manager kms Menu Order 02 Animated Webp](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_order_2-optimized.webp).

Vous disposez des régions suivantes à ce jour : 

- `Europe - France Roubaix`{.action}.
- `Europe - France Strasbourg`{.action}.
- `Europe - France Graveline`{.action}.

Une fois votre choix fait, cliquez sur `Commander`{.action}.

Si vous n'avez pas pu completer la commande, lancez [ce lien](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(productId~'okms~planCode~'okms~duration~'P1M~pricingMode~'default~configuration~(~(label~'region~value~'EU_WEST_RBX))))){.external}.

Puis pour finir sur `Terminer`{.action}.

![Manager kms Menu Okms Order Finish](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_order_finish-optimized.webp)

Une fois votre commande validée, vous retrouverez avec votre KMS, le Nom, l'ID et la Région.

![Manager kms Menu Okms All 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_all-optimized.webp)

Vous pouvez récupérer (copier-coller) votre "**okmsId**", en cliquant sur le bouton de droite qui le permet : ![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_copy_id.png)

Il resemble un uuid classique et vous sera utile par la suite pour la demande de nouvelles informations d'identification d'accès avec et/ou sans CSR.

> [!api]
> 
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>
> **Paramètres:**
> 
> - okmsId: L'ID de votre KMS OVHcloud (Okms). 
>

Nous verrons dans l'étape 3 comment effectuer cette requête. 

![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_id-optimized.webp)

### Via l'api OVHcloud

Pour lister vos commandes KMS OVHcloud, vou spouvez utiliser l'appel api suivant:

> [!api]
>
> @api {v2} /okms GET /okms/resource
>
> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Exemple de retour:
```Shell
[
  {
    "id": "Null",
    "region": "EU_WEST_RBX",
    "kmipEndpoint": "eu-west-rbx.okms.ovh.net:5696",
    "restEndpoint": "https://eu-west-rbx.okms.ovh.net",
    "swaggerEndpoint": "https://swagger-eu-west-rbx.okms.ovh.net",
    "iam": {
      "displayName": "Null",
      "id": "Null",
      "urn": "urn:v1:eu:resource:okms:Null"
    }
  }
]
```

Vous constatez que vous disposez bien maintenance d'un serveur KMS OVHcloud disponible à mettre en place au sein de votre environnement HPC VMware on OVHcloud.

///

## Étape 2 - Activation du KMS OVHcloud

/// details | Comment activer le KMS OVHcloud avec HPC VMware on OVHcloud?

### Via le control panel OVHcloud

Pour créer ou Importer un service de gestion de clé KMS depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au [control panel OVHcloud](/links/manager).

Puis aller dans la section:

- `Hosted Private Cloud | VMware | Votre PCC | Sécurité`{.action}.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_security-opti.webp)

Une fois dans `Sécurité`{.action}, allez toute en bas dans la section: `Virtual Machine Encryption Key Management Servers`{.action}.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add-optimized.webp)

Vous pouvez ajouter votre Okms depuis le control panel HPC, en cliquant sur:
- `Ajouter un nouveau serveur KMS`{.action}

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_2-optimized.webp)

### Via l'api OVHcloud

**Étape d'ouverture des flux:**

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/vmEncryption/kms
>
> **Paramètres:**
>
> - serviceName: La référence de votre PCC, `pcc-XX-XX-XX-XX`.
> - description: Description de l'Okms.
> - ip: L'IP publique de l'Okms.
> - sslThumbprint: L'empreinte tls de l'Okms.

>
> Copy-past (with the Okms parametres) :
> ```Shell
> {
>  "description": "Okms demo",
>  "ip": "Null",
>  "sslThumbprint": "Null"
> }
> ```

Pour récupérer l'empreinte SSL du serveur KMS, lancer la commande suivante:

```Shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

Pour récupérer l'IP publique du serveur KMS OVHcloud et verifier la connection, lancez la commande NetCat:

```Shell
nc -zv eu-west-rbx.okms.ovh.net 5696
```

Pour mettre à jour votre serveur KMS avec un KMS OVHcloud:

> [!api]
>
> @api {v1} /dedicatedcloud  POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
>
> **Paramètres:**
>
> - serviceName: Le domaine pcc (pcc-XXX-XXX-XXX).
> - kmsId: L'id de votre serveur Okms (exemple : 350)
>

Retour:

```Shell
{
  "kmsId": 350,
  "kmsTcpPort": 5696,
  "sslThumbprint": "Null",
  "description": "Okms demo",
  "state": "delivered",
  "ip": "Null"
}
```

### Création d'un certificat d'accès

Afin de communiquer avec votre KMS, il est nécessaire de créer un certificat d'accès. Celui-ci sera utilisé pour toute interaction avec le KMS, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.

Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre propre sécurité privée via une Certificate Signing Request (CSR).

### Sans CSR

Créer un certificat d'accès et une clé privée avec l'appel api suivant:

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>
> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Il est nécessaire d'indiquer les informations suivantes :
- **name:** Le nom du certificat
- **identityURNs:** Liste des identités OVHcloud sous format d'URN qui seront fournies à l'IAM pour le calcul des droits d'accès
- **description:** Description du certificat (optionnel)
- **validity:** Durée de validité du certificat en jours - 365 jours par défaut (optionnel)

**Exemple de création de certificat:**
```Shell
{
 "description": "My reader credential",
 "identityURNs": [
 "urn:v1:labeu:identity:account:user:<<PASTE_YOUR_NICHANDLE_HERE>>/reader1"
 "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>/reader"
 ],
 "name": "reader",
 "validity": 30
}
```

L'API retourne ensuite l'état de création du certificat:
```Shell
{
  "id": "1bc7830b-9c8e-4b45-af51-00a3543ba16c",
  "name": "reader",
  "description": "XXX",
  "identityURNs": [
    "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>/reader1",
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>/reader"
  ],
  "status": "CREATING",
  "fromCSR": false,
  "privateKeyPEM": "-----BEGIN EC PRIVATE KEY-----\nXXcCAQEEIEs+RwZG0JLs5bmzxVxZtli15RLGU/cXXHtoVoOrwDzuoAoGCCqGSM49\nAwEHoUQDQgAExC+jRLpucMcNUcXXhxHNMA78EjrmmKnMgeEaRzAvX2dY4GVap5lU\nM76nD1WRnNvceYHZUOxGcPDCuXXKNV1/8A==\n-----END EC PRIVATE KEY-----\n",
  "createdAt": "2024-07-02T15:54:18.390593+02:00",
  "expiredAt": "2024-08-01T15:54:18.390591+02:00"
}
```
Copier la valeur du champ (exemple ci-dessous) `"privateKeyPEM"`{.action} dans un fichier `domain.key`{.action} puis coller (printf) : `"----BEGIN EC YOUR_PRIVATE_KEY END EC YOUR_PRIVATE_KEY---"`{.action} dans le fichier `domain.key`{.action}.

Puis copier l'ID généré et lancer l'appel api suivant avec l'id et l'okmsId :

> [!Warning]
>
> La clé privée ne sera plus accessible par la suite. En cas de perte, il sera nécessaire de regénérer un certificat.
>

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>
> **Paramètres:**
>
> - id: L'id généré par le POST /okms/resource/{okmsId}/credential (1bc7830b-9c8e-4b45-af51-00a3543ba16c).
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

L'API renvoie le certificat au format PEM:
```Shell
{
  "id": "06ef14a0-7635-4f17-8748-accfadbd6203",
  "name": "reader",
  "description": "XXX",
  "identityURNs": [
    "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>/reader1",
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>/reader"
  ],
  "status": "READY",
  "fromCSR": false,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMXXBqTCCAU+gAwIBAgIQBu8UoHY1TxeHSKzPrb1iAzAKBggqhkjOPXXDAjAVMRMw\nEQYDVQQDEwpDQ01Vc2Vyc0NBMB4XDTI0MDcwMjEzNTQxOFoXDTI0MDgwMTEzNTQx\nOFowLzEtMCsGA1UEAxMkZTkwYzU4NDEtZjM5ZSXXOTgzLTg1OTYtNjJmZjBjNTM4\nYjZiMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAExC+jRLpucMcNUc84hxHNMA78\nEjrmmKnMgeEaRzAvX2dY4GVap5lUM76nD1WRnNvceYHZUOxGcPDCu33KNV1/8KNn\nMGUwTgYDVR0RAQH/BEQwQqBABgorBgEEAYI3FAIDoDIMMG9rbXMuZG9tYWluOmU5\nMGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUzOGI2YjATBgNVHSUEDDAKBggr\nBgEFBQcDAjAKBggqhkjOPQQDAgNIADBFAiBD9GOB4c+7IVQzlJBCP8TZ9O3M4pHS\nVJTyEYxld5eXYQIhAL/1fe5qGBZib4vlaPss6zgJoentyMUq+zTCMUn5wXcP\n-----END CERTIFICATE-----",
  "createdAt": "2024-07-02T15:54:18.390593+02:00",
  "expiredAt": "2024-08-01T15:54:18.390591+02:00"
}
```

Copiez la valeur du champ `"certificatePEM"`{.action} dans un fichier `client.crt`{.action} puis coller (printf) `"-----BEGIN YOUR_CERTIFICATE_PEM END_CERTIFICATE-----"`{.action} dans ce fichier `client.crt`{.action}.

### Avec CSR

Suivez les mêmes étapes ci-dessus, mais avec le paramètre de l'api suivant:

Avec CSR : `With CSR provided`{.action}.
> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>
> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Exemple de l'input avec CSR:

```Shell
{
  "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNlcnQgSW5jLjERMA8GA1UECwwIRGln\naUNlcnQxHTAbBgNVBAMMFGV4YW1wbGUuZGlnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWBOkZc+c\n1Po2EmvBz+AD5sBdT5kzGQA6NbWyZGldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWzTx+n0zKfqcbgXi4DJx+C1bjptYPR\nBPZL8DAeWuA8ebudVT44yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNt5qcLsx5a8uk4G6AKHMzuhLsJ7XZjgmQXGECpY\nQ4mC3yT3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1PpVUNCPQGn9p/eX6Qo7vpDaPybRtA2R7XLKjQaF9oXWeCUqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEuJwjBPii6a9M9G30nUo39lBi1w=\n-----END CERTIFICATE REQUEST-----",
  "description": "My reader credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>/reader1",
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>/reader"
  ],
  "name": "reader",
  "validity": 30
}
```

### Informations TLS utiles

Attention quand vous copiez-coller votre CSR, il doit être formaté pour fonctionner avec le format json.

Des **\n** doivent être ajoutés à chaque saut de ligne. Pour ça vous pouvez lancer cette commande openssl afin de convertir votre certificat en format pkcs12 :

`openssl pkcs12 -export -inkey client.key -in client.crt -out cert_key.p12`{.action}.

**CSR decode:**

Pour décoder votre CSR, vous pouvez executer cette commande openssl avec votre CSR:

- `openssl req -in mycsr.csr -noout -text`{.action}.

Ou alors utiliser un outil web plus graphique pour l'oeil, tel que : [sslshopper](https://www.sslshopper.com/csr-decoder.html){.external}.

**Certificate decode:**

- `openssl x509 -in certificate.crt -text -noout`{.action}.

**Certificate Key Matcher:**

Afin de verifier si le CSR match votre certificat vous pouvez le faire avec ces commandes:

```Shell
openssl pkey -in privateKey.key -pubout -outform pem | sha256sum
openssl x509 -in certificate.crt -pubkey -noout -outform pem | sha256sum
openssl req -in CSR.csr -pubkey -noout -outform pem | sha256sum 
```

#### SSL Converter

**OpenSSL Convert PEM**

Convert PEM to DER : `openssl x509 -outform der -in certificate.pem -out certificate.der`

Convert PEM to P7B : `openssl crl2pkcs7 -nocrl -certfile certificate.cer -out certificate.p7b -certfile CACert.cer`

Convert PEM to PFX : `openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt`

**OpenSSL Convert DER**

**Convert DER to PEM:** 

- `openssl x509 -inform der -in certificate.cer -out certificate.pem`

**OpenSSL Convert P7B**

Convert P7B to PEM : `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`

**Convert P7B to PFX** 

- `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`
- `openssl pkcs12 -export -in certificate.cer -inkey privateKey.key -out certificate.pfx -certfile CACert.cer`

**OpenSSL Convert PFX**

Convert PFX to PEM : `openssl pkcs12 -in certificate.pfx -out certificate.cer -nodes`

///

## Étape 3 - Activation du chiffrement des machines virtuelles avec le kms OVHcloud (Okms)

/// details | Comment activer le chiffrement de VM dans vSphere avec le kms OVHcloud (OKMS) ?

### Via le control panel OVHcloud

![Manager Hpc General Information Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_vsphere.webp)

### Ajouter le key provider OKMS dans vSphere

Pour que vCenter puisse truster votre serveur KMS OVHcloud, nous avons besoin d'accéder à la console vSphere de votre PCC HPC VMware on OVHcloud.

Pour accéder à l'url de connexion vSphere depuis un navigateur web (de preference de base chromium).

Vous pouvez y accéder depuis le control panel OVHcloud, en cliquant sur:
- `Hosted Private Cloud | VMware | Votre PCC | Manager interface | Web interface`{.action}

#### 1. Ajouter le Key Provider OKMS dans vSphere

Ouvrez votre navigateur web et rendez-vous à l'adresse fournie pour accéder à votre interface vSphere. Par exemple : `https://pcc-x.x.x.x.ovh.de/ui/`.

Selectionner `Configurer`{.action}

Puis `Key Providers`{.action}

Cliquez sur `Ajouter un standard Key Provider`{.action}

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider.png){.thumbnail}

Une fois que vous avez sélectionné l'option pour ajouter un Key Provider, une fenêtre ou un formulaire s'ouvrira pour saisir les détails du Key Provider que vous souhaitez ajouter. Cela peut inclure des informations telles que l'adresse IP ou le nom DNS du serveur KMS et le port utilisé.

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider_2.png){.thumbnail}

Attendez que vSphere établisse la connexion avec le Key Provider que vous avez ajouté. Vous devriez voir une indication ou un message confirmant que la connexion a été établie avec succès.

#### 2. Authentifier le Provider à vSphere

Selectionner votre Key Provider que vous venez de créer et cliquer sur le bouton `TRUST VCENTER`.

![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/trust_kms.png){.thumbnail}

Nous recommandons la méthode : `Nouvelle demande de signature de certificat (CSR)`{.action), mais libre à vous de choisir celle qui vous convient le mieux.

Pour d'information sur l'avantage de chaque choix, lisez la documentation [KMS](/pages/manage_and_operate/kms/quick-start).

> [!tabs]
> 
> **KMS certificate and private key**
>>
>> - Selectionnez `KMS Certificate and private key to vCenter.`. Puis renseignez votre certificat KMS et votre clef privée du serveur KMS.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter.png){.thumbnail}
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_2.png){.thumbnail}
>>
> **New Certificate Signing Request (CSR)**
>>
>> - Selectionnez `Nouvelle demande de signature de certificat (CSR)`{.action}. Puis Copiez ou téléchargez le CSR ci-dessous, mettez-le à la disposition de KMS et demandez à ce dernier de signer le certificat.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr.png){.thumbnail}
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr_2.png){.thumbnail}
>>
>> L'approbation ne sera pas établie une fois que vous aurez terminé cet Assistant. Rendez-vous dans le KMS pour télécharger le CSR, faites signer le certificat par le KMS et téléchargez-le sur le vCenter pour établir la confiance.
>>
>> Vous pouvez verifier que la connection à bien été établie en selectionnant votre Key Provider. L'option `Connected` doit être cochée.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider_3.png){.thumbnail}
>>

### Chiffrement d'une Machine Virtuelle

Localisez la machine virtuelle (VM) que vous souhaitez chiffrer. Faites un clic droit sur la machine virtuelle sélectionnée pour afficher le menu contextuel. Sélectionnez `VM Policies` puis choisissez `Edit VM Storage Policies`. Cela ouvrira une fenêtre ou un panneau où vous pourrez modifier les politiques de stockage de la VM sélectionnée.

![VM Storage Policies](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/vm_policies.png){.thumbnail}

Recherchez les options de chiffrement ou de sécurité dans les politiques de stockage pour activer le chiffrement KMS pour cette VM.

![VMS policies encrypt](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/vm_policies.png){.thumbnail}

Après avoir apporté les modifications nécessaires, enregistrez les modifications et fermez la fenêtre.

Vous avez maintenant édité les politiques de stockage de la VM et activer le chiffrement KMS pour votre serveur. Un petit cadenas sur le résumé des informations de votre machine virtuelle le confirme.

![VM Encrypt](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/vm_encrypt.png){.thumbnail}

///

## Allez plus loin

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).