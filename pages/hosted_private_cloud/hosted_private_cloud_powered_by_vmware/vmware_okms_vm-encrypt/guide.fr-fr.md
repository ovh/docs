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

| **Type**    | **Url**                          | **Région**          | **Okms Région enum** | **IP**         |
|-------------|----------------------------------|---------------------|----------------------|----------------|
| **KMIP**    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX          | 91.134.128.102 |
| **KMIP**    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX          | 91.134.128.102 |
| **REST**    | eu-west-rbx.okms.ovh.net         | France - Roubaix    | EU_WEST_RBX          | 91.134.128.102 |
| **Swagger** | swagger-eu-west-rbx.okms.ovh.net | France - Roubaix    | EU_WEST_RBX          | 91.134.128.102 |
| **KMIP**    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG          | 137.74.127.152 |
| **KMIP**    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG          | 137.74.127.152 |
| **REST**    | eu-west-sbg.okms.ovh.net         | France - Strasbourg | EU_WEST_SBG          | 137.74.127.152 |
| **Swagger** | swagger-eu-west-sbg.okms.ovh.net | France - Strasbourg | EU_WEST_SBG          | 137.74.127.152 |

## Listing des appels api KMS HPC VMware on OVHcloud

| **Methode**        | **Api** | **Path**                                                                | **Commentaires**                                                |
|--------------------|---------|-------------------------------------------------------------------------|-----------------------------------------------------------------|
|                    |         |                                                                         |                                                                 |
| **Credentials:**   |         |                                                                         |                                                                 |
| **GET**            | v2      | /okms/resource/{okmsId}/credential                                      | - List all access credentials.                                  |
| **POST**           | v2      | /okms/resource/{okmsId}/credential                                      | - Request a new access credential.                              |                                
| **GET**            | v2      | /okms/resource/{okmsId}/credential/{credentialId}                       | - Get an access credential.                                     |                                
| **DEL**            | v2      | /okms/resource/{okmsId}/credential/{credentialId}                       | - Revoke and delete an access credential.                       |
|                    |         |                                                                         |                                                                 |
| **Reference:**     |         |                                                                         |                                                                 |
| **GET**            | v2      |  /okms/reference/serviceKey                                             | - Get service key type, size, curve and operations combination. |                                                
|                    |         |                                                                         |                                                                 |
| **Resources:**     |         |                                                                         |                                                                 |
| **GET**            | v2      | /okms/resource                                                          | - List OVHcloud KMS services.                                   |                                                
| **GET**            | v2      | /okms/resource/{okmsId}                                                 | - Get an OVHcloud KMS service.                                  |                                                
|                    |         |                                                                         |                                                                 |
| **Service Keys:**  |         |                                                                         |                                                                 |                                           
| **GET**            | v2      | /okms/resource/{okmsId}/serviceKey                                      | - List all keys.                                                |
| **POST**           | v2      | /okms/resource/{okmsId}/serviceKey                                      | - Create or import a service key.                               |
| **GET**            | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Retrieve a key.                                               |
| **PUT**            | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Update a service key.                                         |                                                
| **DEL**            | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Delete the given service key.                                 |                                                
|                    |         |                                                                         |                                                                 |
| **Authentification :** |         |                                                                         |                                                                 |
| **GET**            | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - List virtual machine encryption KMS servers.                  |
| **POST**           | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - Create virtual machine encryption KMS server.                 |
| **GET**            | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  | - Get virtual machine encryption KMS server.                    |
| **DEL**            | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  | - Remove virtual machine encryption KMS server.                 |
| **POST**           | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties | - Update virtual machine encryption KMS server.                 |

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

Afin de valider le KMS OVHloud (Okms) avec Hotesp Private CLoud VMware on OVHcloud, vous avez besoin d'ouvrir les flux pares-feux.

Cette étape doit être réalisée en premier après commande de votre Okms (KMS OVHcloud).

Et avant l'ajout du KMS à vSphere.

### Via le control panel OVHcloud

### Étape d'ouverture des flux

Pour créer ou Importer un service de gestion de clé KMS depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au [control panel OVHcloud](/links/manager).

Puis aller dans la section **Sécurité** de votre PCC HPC:

- `Hosted Private Cloud | VMware | Votre PCC | Sécurité`{.action}.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_security-opti.webp)

Une fois dans `Sécurité`{.action}, allez toute en bas dans la section: `Virtual Machine Encryption Key Management Servers`{.action}.

L'étape de l'ajout du KMS depuis le control panel HPC VMware on OVHcloud doit être réalisé en premier après l'achat et la livraison de votre KMS OVHcloud.

Afin de permettre l'autorisation des flux au sein des pare-feux OVHcloud.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add-optimized.webp)

Vous pouvez ajouter votre Okms depuis le control panel HPC, en cliquant sur:
- `Ajouter un nouveau serveur KMS`{.action}

Une fois la fenêtre ouverte vous vez les champs suivant à remplir :
- **IP:** Privilégier l'IP car le nom de domaine ne peut pas être ajouté (Exemple région - Strasbourg:137.74.127.152, Roubaix:91.134.128.102).
- **Description:** Une description intelligente pour votre Okms.
- **SSL Thumbprint:** La Thumbprint tls/ssl de votre KMS (Lancer: `openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin`{.action})

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_2-optimized.webp)

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_2_2.png)

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
---
Retour:
 SHA1 Fingerprint=FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47
```

Pour récupérer l'IP publique du serveur KMS OVHcloud et verifier la connection, avec un ping:

```Shell
ping eu-west-rbx.okms.ovh.net
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

Afin de communiquer avec votre Okms, il est nécessaire de créer un certificat d'accès. Celui-ci sera utilisé pour toute interaction avec le KMS OVHcloud, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec celles-ci.

Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre propre clé de sécurité privée via une Certificate Signing Request (CSR).

### Sans CSR

Vous pouvez créer un certificat d'accès et une clé privée avec l'appel api suivant:

- `Without CSR Provided`{.action}

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
> - Avec/Sans CSR Provided
>

Il est nécessaire d'indiquer les informations suivantes :
- **name:** Le nom du certificat (obligatoire).
  - **identityURNs:** L'identité OVHcloud sous format d'Urn qui sera fourni à IAM pour le calcul des droits d'accès (obligatoire).
- **description:** Description du certificat (optionnel).
- **validity:** Durée de validité du certificat en jours - 365 jours par défaut (optionnel).

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

L'Api retourne ensuite l'état de création du certificat:
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
Copier la valeur du champ (exemple ci-dessus) `privateKeyPEM`{.action} puis coller là dans un fichier `domain.key`{.action}. Uniquement `-----BEGIN EC YOUR_PRIVATE_KEY-----\n......\n-----END EC YOUR_PRIVATE_KEY-----`{.action}.

Enregistrer ce fichier afin de pouvoir le réutiliser pour truster votre Okms avec vSphere.

Puis copier l'id généré et lancer l'appel api suivant avec l'id et l'okmsId :

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

Copier la valeur du champ `"certificatePEM"`{.action} `"-----BEGIN YOUR_CERTIFICATE_PEM END_CERTIFICATE-----"`{.action} puis coller là (printf) dans un fichier `client.crt`{.action}.

### Avec CSR

Suivez les mêmes étapes que ci-dessus, mais avec le paramètre `With CSR provided`{.action} de l'appel api suivant:

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
Coller la valeur du champ `"csr"`{.action}  `"-----BEGIN_CERTIFICATE_REQUEST----...-----REQUEST_CERTIFICATE_END-----"`{.action} récupérer de vSphere.

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

### SSL Converter

**OpenSSL Convert PEM**
- Convert PEM to DER : `openssl x509 -outform der -in certificate.pem -out certificate.der`{.action}.
- Convert PEM to P7B : `openssl crl2pkcs7 -nocrl -certfile certificate.cer -out certificate.p7b -certfile CACert.cer`{.action}.
- Convert PEM to PFX : `openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt`{.action}.

**OpenSSL Convert DER**

Convert DER to PEM:
- `openssl x509 -inform der -in certificate.cer -out certificate.pem`{.action}.

**OpenSSL Convert P7B:**
- Convert P7B to PEM : `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`{.action}.

**Convert P7B to PFX:**
- `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`{.action}.
- `openssl pkcs12 -export -in certificate.cer -inkey privateKey.key -out certificate.pfx -certfile CACert.cer`{.action}.

**OpenSSL Convert PFX:**
- Convert PFX to PEM : `openssl pkcs12 -in certificate.pfx -out certificate.cer -nodes`{.action}.

///

## Étape 3 - Activation du chiffrement des machines virtuelles avec le kms OVHcloud (Okms)

/// details | Comment activer le chiffrement de VM dans vSphere avec le kms OVHcloud (OKMS) ?

### Via le control panel OVHcloud

![Manager Hpc General Information Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_vsphere.webp)

#### 1. Ajouter le Key Provider OKMS dans vSphere

### Ajouter le key provider OKMS dans vSphere

Pour que vCenter puisse truster votre serveur KMS OVHcloud, nous avons besoin d'accéder à la console vSphere de votre PCC HPC VMware on OVHcloud.

Pour accéder à l'url de connexion vSphere depuis un navigateur web (de preference de base chromium).

Vous pouvez y accéder depuis le control panel OVHcloud, en cliquant sur:
- `Hosted Private Cloud | VMware | Votre PCC | Manager interface | Web interface`{.action}

Une fois que vous avez cliquez sur Web interface, cliquez sur `vSphere HTML Client`{.action}

![Manager Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_web_interface_pcc.png){.thumbnail}

Vous êtes maintenance sur l'url de votre pcc, par exemple : `https://pcc-x.x.x.x.ovh.de/ui/`.

Connectez-vous avec un utilisateur local ou avec un utilisateur IAM selon les droits que vous avez mis en place au sein de votre compte OVHcloud et de votre PCC HPC.

Vous être maintenant logué au coeur de vSphere

Cliquez sur : `Configurer`{.action}

Puis allez dans la section : `Key Providers`{.action}

Et cliquez sur : `Ajouter un standard Key Provider`{.action}

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider.png){.thumbnail}

Une fois que vous avez sélectionné l'option pour ajouter un Key Provider, une fenêtre ou un formulaire s'ouvrira pour saisir les détails du Key Provider que vous souhaitez ajouter. Cela peut inclure des informations telles que l'adresse IP ou le nom DNS du serveur KMS et le port utilisé.

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider_2.png){.thumbnail}

Attendez que vSphere établisse la connexion avec le Key Provider que vous avez ajouté. Vous devriez voir une indication ou un message confirmant que la connexion a été établie avec succès.

#### 2. Authentifier le Provider Okms à vSphere

Sélectionner votre **Key Provider** Okms que vous venez d'ajouter et cliquer sur le bouton `TRUST VCENTER`{.action}.

![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/trust_kms.png){.thumbnail}

Nous recommandons la méthode avec CSR (plus sécurisé): `Nouvelle demande de signature de certificat (CSR)`{.action), mais libre à vous de choisir celle qui vous convient le mieux et qui est compatible avec votre façon de faire.

Pour plus d'information sur les avantages et inconvénients de l'utilisation d'une CSR, lisez la documentation [KMS](/pages/manage_and_operate/kms/quick-start).

> [!tabs]
> 
> **KMS certificate and private key**
>>
>> - Sélectionnez `KMS Certificate and private key to vCenter.`{.action}. Puis renseignez votre certificat KMS et votre clef privée du serveur KMS.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter.png){.thumbnail}
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_2.png){.thumbnail}
>>
> **New Certificate Signing Request (CSR)**
>>
>> - Sélectionnez `Nouvelle demande de signature de certificat (CSR)`{.action}. Puis Copiez ou téléchargez le CSR ci-dessous, mettez-le à la disposition de Okms et demandez à ce dernier de signer le certificat.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr.png){.thumbnail}
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr_2.png){.thumbnail}
>>
>> L'approbation ne sera pas établie une fois que vous aurez terminé cet Assistant. Rendez-vous dans le Okms pour télécharger le CSR, faites signer le certificat par le Okms et téléchargez-le sur le vCenter pour établir la confiance.
>>
>> Vous pouvez verifier que la connection à bien était établie en sélectionnant votre Key Provider Okms.
>> 
>> L'option `Connected` doit être cochée.
>>
>> ![Trust KMS server](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_key_provider_3.png){.thumbnail}
>>
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