---
title:'OKMS au sein de Hosted Private Cloud VMware on OVHcloud'
      'Chiffrement de VM avec OKMS dans VMware on OVHcloud'
      'Commande et activation de OKMS pour VMware on OVHcloud'
excerpt:'Découvrez comment mettre en place le service de gestion de clé OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud pour sécuriser efficacement vos données sensibles'
        'Découvrez comment activer le chiffrement de données dans votre environnement VMware on OVHcloud grâce au KMS managé OVHcloud (OKMS)'
        'Protégez votre confidentialité et assurez la sécurité de vos informations sensibles VMware on OVHcloud avec la solution avancée de gestion de clé KMS OVHcloud'
        'Activation du chiffrement avec la solution KMS OVHcloud (OKMS) pour sécurisez votre Hosted Private Cloud VMware on OVHcloud'
        'Confidentialité renforcée avec le KMS OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud'
updated: 2023-07-02
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
> N’hésitez pas à nous faire part de vos feedbacks sur le canal [Discord](<https://discord.gg/ovhcloud>) dédié.
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
- Une clef de chiffrement RSA.
- Un certificat SSL (PEM).

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

### Via le control panel OVHcloud:

Pour commander un fournisseur de clés KMS OVHcloud depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au [control panel OVHcloud](/links/manager).

Vous êtes invité à vous rendre dans : `Hosted Private Cloud | Identité, Sécurité & Opérations | Key Management Service`.{.action}

Si vous n'avez pas de serveur KMS, cliquez sur: `Commander un KMS`{.action}.

Vous êtes dans "Commander un KMS", choisissez la région.

Les clés de chiffrement et certificats d’accès de ce KMS seront stockées dans la région indiquée. Ils pourront être utilisés dans tous les produits OVHcloud sans distinction de région.

Vous disposez des régions suivantes à ce jour : 

- `Europe - France Roubaix`{.action}.
- `Europe - France Strasbourg`{.action}.
- `Europe - France Graveline`{.action}.

Une fois votre choix fait, cliquez sur `Commander`{.action}.

Si vous n'avez pas pu completer la commande, lancez [ce lien](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(productId~'okms~planCode~'okms~duration~'P1M~pricingMode~'default~configuration~(~(label~'region~value~'EU_WEST_RBX))))){.external}.

Puis pour finir sur `Terminer`{.action}.

Une fois votre commande validée, vous retrouverez avec votre KMS, le Nom, l'ID et la Région.

![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_all.png)

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

![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_id.png)

### Via l'api OVHcloud:

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

### Via le control panel OVHcloud:

Pour créer ou Importer un service de gestion de clé KMS depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au [control panel OVHcloud](/links/manager).

Aller dans :  `Hosted Private Cloud | VMware | Votre PCC | Sécurité`.{.action}

![Manager Hpc Security KMS]().

### Via l'api OVHcloud:

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
Copier la privateKeyPEM et créer un fichier domain.key puis copier-coller (printf) : "---YOUR_PRIVATE_KEY_PEM---" dans le fichier.

Exemple de retour:
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

Ensuite copier l'id, et lancer l'appel api suivant avec l'id et le okmsId :

> [!api]
>
> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>
> **Paramètres:**
>
> - id: L'id généré par le POST /okms/resource/{okmsId}/credential (1bc7830b-9c8e-4b45-af51-00a3543ba16c).
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Exemple de retour:
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

Copier le certificatePEM et créer un fichier client.tls puis coller (printf) "---YOUR_CERTIFICATEPEM---" dans ce fichier.

### Avec CSR

Suivez les mêmes étapes ci-dessus, mais avec le paramètre de l'api api suivant:

Avec CSR : `With CSR provided`{.action}.
> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>
> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Exemple avec CSR:

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
Attention quand vous copiez-coller votre CSR, il doit être formaté pour fonctionner avec le format json.

Des **\n** doivent être ajoutés à chaque saut de ligne.

///

## Étape 3 - Activation du chiffrement des machines virtuelles dans vSphere avec Okms

/// details | Comment activer le chiffrement de VM dans vSphere avec Okms.

## Via le control panel OVHcloud:

Pour effectuer cette étape vous pouvez lire le guide suivant : [Configurez le chiffrement des machines virtuelles grâce à un serveur KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).

## Via l'api OVHcloud:

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
> - sslThumbprint: L'empreinte ssl de l'Okms.

>
> Copy-past (with the Okms parametres) :
> ```Shell
> {
>  "description": "string",
>  "ip": "192.0.2.0",
>  "sslThumbprint": "string"
> }
> ```

Pour récupérer l'empreinte SSL du serveur KMS, lancer la commande suivant:

```Shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

## Via l'api OVHcloud:

> [!api]
> 
> POST /okms/resource/{okmsId}/credential
> 
> **Parametres:**
> - okmsId: uuid du serveur Okms (Okms ID)
>

///

## Allez plus loin

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).