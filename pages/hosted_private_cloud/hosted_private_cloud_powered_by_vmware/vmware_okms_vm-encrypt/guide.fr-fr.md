---
title:'Activation du chiffrement de VM avec le KMS OVHcloud'
excerpt:'Découvrez comment protégez votre confidentialité et activer le chiffrement de vos machines virtuelles Hosted Private Cloud avec la solution KMS OVHcloud'
updated: 2023-07-08
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
> Cette fonctionnalité est disponible en bêta. Ce guide peut être incomplet et sera mis à jour dans les versions futures. N’hésitez pas à nous faire part de vos feedbacks sur le canal [Discord](<https://discord.gg/ovhcloud>) dédié.
>

## Objectif

**Commander, activer et configurer un KMS OVHcloud (Okms) au sein de vSphere pour activer la politique de chiffrement de vos machines virtuelles Hosted Private Cloud VMware on OVHcloud.**

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Avoir accès à l’interface de gestion vSphere de votre PCC (Hosted Private Cloud VMware on OVHcloud).
- Disposer des droits nécessaires pour manipuler vos ressources PCC et le KMS OVHcloud avec ou sans IAM (IAM with KMS: iam_resource_type_okms dans la policy IAM + ajouter l'id dans vos ressources de la policy IAM).
- Avoir lu les guides : 
  - [Que KMS au sein de Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_vmware_overall).
  - [Premier pas (KMS + IAM + vSphere)](/pages/manage_and_operate/kms/quick-start).
- Une clef de chiffrement RSA ou ECDSA (sans CSR) et/ou un CSR (avec CSR).
- Le certificat public tls du serveur Okms afin de la faire signer par le Okms.

## En pratique

/// details | Introduction, listing url et les appels api okms disponibles.

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

| **Methode**           | **Api** | **Path**                                                                | **Commentaires**                                                |
|-----------------------|---------|-------------------------------------------------------------------------|-----------------------------------------------------------------|
|                       |         |                                                                         |                                                                 |
| **Credentials:**      |         |                                                                         |                                                                 |
| **GET**               | v2      | /okms/resource/{okmsId}/credential                                      | - List all access credentials.                                  |
| **POST**              | v2      | /okms/resource/{okmsId}/credential                                      | - Request a new access credential.                              |                                
| **GET**               | v2      | /okms/resource/{okmsId}/credential/{credentialId}                       | - Get an access credential.                                     |                                
| **DEL**               | v2      | /okms/resource/{okmsId}/credential/{credentialId}                       | - Revoke and delete an access credential.                       |
|                       |         |                                                                         |                                                                 |
| **Reference:**        |         |                                                                         |                                                                 |
| **GET**               | v2      |  /okms/reference/serviceKey                                             | - Get service key type, size, curve and operations combination. |                                                
|                       |         |                                                                         |                                                                 |
| **Resources:**        |         |                                                                         |                                                                 |
| **GET**               | v2      | /okms/resource                                                          | - List OVHcloud KMS services.                                   |                                                
| **GET**               | v2      | /okms/resource/{okmsId}                                                 | - Get an OVHcloud KMS service.                                  |                                                
|                       |         |                                                                         |                                                                 |
| **Service Keys:**     |         |                                                                         |                                                                 |                                           
| **GET**               | v2      | /okms/resource/{okmsId}/serviceKey                                      | - List all keys.                                                |
| **POST**              | v2      | /okms/resource/{okmsId}/serviceKey                                      | - Create or import a service key.                               |
| **GET**               | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Retrieve a key.                                               |
| **PUT**               | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Update a service key.                                         |                                                
| **DEL**               | v2      | /okms/resource/{okmsId}/serviceKey/{keyId}                              | - Delete the given service key.                                 |                                                
|                       |         |                                                                         |                                                                 |
| **Authentification:** |         |                                                                         |                                                                 |
| **GET**               | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - List virtual machine encryption KMS servers.                  |
| **POST**              | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - Create virtual machine encryption KMS server.                 |
| **GET**               | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  | - Get virtual machine encryption KMS server.                    |
| **DEL**               | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  | - Remove virtual machine encryption KMS server.                 |
| **POST**              | v1      | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties | - Update virtual machine encryption KMS server.                 |

///

## Étape 1 - Commande d'un KMS OVHcloud (Okms) au sein de HPC VMware on OVHcloud (obligatoire)

/// details | Comment commander un KMS OVHcloud pour HPC VMware on OVHcloud?

![Manager kms Menu Order Animated Gif](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_order.gif){.thumbnail}.

### Via le control panel OVHcloud

Pour commander un fournisseur de clés KMS OVHcloud depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au: [Control Panel OVHcloud](/links/manager).

Vous êtes invité à vous rendre dans le service KMS: `Hosted Private Cloud | Identité, Sécurité & Opérations | Key Management Service`.{.action}

Si vous n'avez pas de serveur KMS, cliquez sur: `Commander un KMS`{.action}.

Vous êtes dans "Commander un KMS", choisissez la région.

Les clés de chiffrement et certificats d’accès de ce KMS seront stockées dans la région indiquée. Ils pourront être utilisés dans tous les produits OVHcloud sans distinction de région.

![Manager kms Menu Order 02 Webp](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_order_2-optimized.webp){.thumbnail}.

Vous disposez des régions suivantes à ce jour disponible : 

- `Europe - France Roubaix`{.action}.
- `Europe - France Strasbourg`{.action}.

Une fois votre choix fait, cliquez sur: `Commander`{.action}.

Si vous n'avez pas pu completer la commande, lancez [ce lien](<https://www.ovh.com/fr/order/express/#/express/review?products=~(~(productId~'okms~planCode~'okms~duration~'P1M~pricingMode~'default~configuration~(~(label~'region~value~'EU_WEST_RBX))))>){.external}.

Puis, pour finir sur: `Terminer`{.action}.

![Manager kms Menu Okms Order Finish](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_order_finish-optimized.webp){.thumbnail}

Une fois votre commande validée, vous retrouverez avec votre KMS, le **Nom**, l'**Id** et la **Région**.

![Manager kms Menu Kms All 01](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_all-optimized.webp){.thumbnail}

Vous pouvez récupérer (copier-coller) votre "**okmsId**", en cliquant sur le bouton de droite qui le permet (copier) : ![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_copy_id-optim-resize.webp){.thumbnail}

L'id resemble à un **uuid** classique et vous sera utile par la suite pour la demande de nouvelles informations d'identification d'accès avec et/ou sans CSR ainsi que pour lister vos ressources Okms.

> [!api]
> 
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

> **Paramètres:**
> 
> - okmsId: L'ID de votre KMS OVHcloud (Okms). 
>

Nous verrons dans l'étape 3 comment effectuer cette requête. 

![Manager kms Menu](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_okms_id-optimized-optim-resize.webp){.thumbnail}

### Via l'api OVHcloud

Pour lister vos commandes KMS OVHcloud, vous pouvez utiliser l'appel api suivant:

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

## Étape 2 - Activation du KMS OVHcloud (obligatoire)

/// details | Comment activer le KMS OVHcloud avec HPC VMware on OVHcloud?

Afin de valider le KMS OVHloud (Okms) avec Hotsted Private Cloud VMware on OVHcloud, vous avez besoin de créer une règle d'ouverture de flux entrant au sein de la gateway OVHcloud pour votre HPC VMware on OVHcloud.

Cette étape doit être réalisée en premier après commande de votre Okms (KMS OVHcloud).

Et avant l'ajout de l'Okms à vSphere.

### Via le control panel OVHcloud

### Étape d'ouverture des flux

Pour créer ou Importer un service de gestion de clé KMS depuis le control panel Hosted Private Cloud on OVHcloud.

Vous devez vous connecter au [control panel OVHcloud](/links/manager).

Puis aller dans la section **Sécurité** de votre PCC HPC:

- `Hosted Private Cloud > VMware > Votre PCC > Sécurité`{.action}.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_security-opti.webp){.thumbnail}

Une fois dans `Sécurité`{.action}, allez toute en bas dans la section: `Virtual Machine Encryption Key Management Servers`{.action}.

L'étape de l'ajout du KMS depuis le control panel HPC VMware on OVHcloud doit être réalisé en premier après l'achat et la livraison de votre KMS OVHcloud.

Afin de permettre l'autorisation des flux au sein des pare-feux OVHcloud.

![Manager Hpc Security KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add-optimized.webp){.thumbnail}

Vous pouvez ajouter votre Okms depuis le control panel HPC, en cliquant sur:
- `Ajouter un nouveau serveur KMS`{.action}

Une fois la fenêtre ouverte vous vez les champs suivant à remplir :
- **IP:** Privilégier l'IP car le nom de domaine ne peut pas être ajouté (exemple région strasbourg->137.74.127.152, région roubaix->91.134.128.102).
- **Description:** Une description intelligente pour votre Okms.
- **SSL Thumbprint:** La Thumbprint tls/ssl de votre KMS 

Pour récupérer l'empreinte tls, la Lancer la commande openssl suivante (adapter votre endpoint okms avec la bonne région eu-west-rbx/sbg dont fait partie votre KMS OVHcloud):
```Shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin`{.action})
---
Retour:
 SHA1 Fingerprint=FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47
```
Pour récupérer l'IP publique du serveur KMS OVHcloud, lancez un ping par exemple:

```Shell
ping eu-west-rbx.okms.ovh.net
```
Il s'agit ici de l'IP du KMS de Roubaix et de son empreinte tls. Si vous utilisez Strasbourg ou une autre région faites les changements.

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_2-optim-resize.webp){.thumbnail}

Vous devez bien cocher la case: "J’ai lu et j’ai compris la documentation VM Encryption et les actions que je vais devoir effectuer de mon côté". Avant de passer à l'étape suivante.

![Manager Hpc Security KMS Add 02_2](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_2_2.webp){.thumbnail}

Vous devez maintenant attendre que l'ouverture des flux se fasse et passe en livrer.

Vous pouvez en attendant verifier vos droits au sein du PCC. En effet, pour manipuler KMS, vous avez besoin de droits supplémentaires:

Dans l'onglet Utilisateurs, cliquez sur: `Modifier`{.action}, l'utilisateur souhaité.

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_users_edit.webp){.thumbnail}

Et verifiez bien que le `management du chiffrement`{.action} est activé.

![Manager Hpc Security KMS Add 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_users_edit_encryption.webp){.thumbnail}

Si vous utilisez un role IAM au sein de votre PCC faite le pour ce rôle (si vous utilisez le rôle par defaut, il est admin).

Si vous utilisez une policy avec le role IAM par defaut, vérifiez bien que les ressources PCC lui sont ajoutés, ainsi que les droits KMS et IAM. 

Exemple de politique IAM :
- **Identité:** local user XX -> User local OVHcloud
- **User groups:** ADMIN, XXXX-XX-XX/user_iam
- **Resources:** pcc-XXX-XXX-XXX-XXX -> PCC XXX
- **Product type:** iam_ressource_type_okms/kmip,
- **Actions:** vSphere Admin, pccVMware:apiovh:vmEncryption/kms/changeProperties, pccVMware:vSphere:assumeRole?iam-admin -> User vSphere iam-admin, okms:kmip:get, okms:apikms:serviceKey/create etc..

Pour information le **domain id** correspond à l'urn de votre KMS OVHcloud.

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
> Copy-past (with the KMS paramètres) :
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

Vous devez maintenant attendre (statut: updating) que l'ouverture des flux se fasse et passe le statut passe en: `livré`{.action} (optionnel).

![Manager Hpc Security KMS Delivered](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_kms_add_delivered.webp){.thumbnail}

///

## Étape 3 - Ajout du KMS à vSphere/vCenter (obligatoire)

/// details | Comment ajouter le KMS dans vSphere/vCenter?

### Via le control panel OVHcloud

![Manager Hpc General Information Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_hpc_vsphere.webp){.thumbnail}

#### 1. Ajouter un fournisseur de clé KMS

Pour que vCenter puisse truster votre serveur KMS OVHcloud, nous avons besoin d'accéder à la console vSphere de votre PCC HPC VMware on OVHcloud.

Pour accéder à l'url de connexion vSphere depuis un navigateur web (de preference de base chromium).

Vous pouvez y accéder depuis le control panel OVHcloud, en cliquant sur:
- `Hosted Private Cloud > VMware > Votre PCC > Manager interface > Web interface`{.action}.

Une fois que vous avez cliqué sur Web interface, cliquez sur `vSphere HTML Client`{.action}.

![Manager Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_web_interface_pcc.webp){.thumbnail}

Vous êtes maintenant sur l'url de votre pcc, par exemple: 
- `<https://pcc-x.x.x.x.ovh.de/ui/>`{.action}

Connectez-vous avec un utilisateur local ou avec un utilisateur IAM selon les droits que vous avez mis en place au sein de votre compte OVHcloud et de votre PCC HPC.

Vous êtes maintenant logué au sein de votre Hosted Private Cloud vSphere on OVHcloud.

Pour accéder à la gestion des serveurs KMS dans vSphere, cliquer sur: `Configurer`{.action} depuis votre **pcc-XXX-XXX-XXX-XXX**.

Puis, allez dans la section **Sécurité** : `Fournisseurs de clés`{.action}.

Il vous faut maintenant, cliquez sur: `Ajouter > Ajouter un fournisseur de clé standard`{.action}.

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/kms_key_provider.webp){.thumbnail}

Une fois que vous avez sélectionné l'option pour ajouter un Key Provider, une fenêtre ou un formulaire s'ouvrira pour saisir les détails du Key Provider que vous souhaitez ajouter. Cela peut inclure des informations telles que l'adresse IP ou le nom de domaine (DNS) du serveur Okms, ainsi que le port utilisé (5696).

Les noms de domaines et le port (KMIP) ne changent pas.

![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_add_standard_key_provider.webp){.thumbnail}

Vous avez ces champs disponibles:

| Champ       |                                                         | Description                                                                  |
|-------------|---------------------------------------------------------|------------------------------------------------------------------------------|
| **Name**    |                                                         | - Un champ qui permet de nommer votre cluster au sein de vCenter.            |
| **KMS**     |                                                         | - Le nom qui apparaitra au sein de Vsphere pour votre Okms.                  |
| **Address** | eu-west-rbx.okms.ovh.net <br/> eu-west-sbg.okms.ovh.net | - L'endpoint du serveur Okms, privilégier le nom de domaine plutôt que l'IP. |
| **Port**    | 5696                                                    |

Attendez que vSphere établisse la connexion avec le Key Provider que vous avez ajouté. Vous devriez voir une indication ou un message confirmant que la connexion a été établie avec succès.

### KMS approuve vCenter + vCenter approuve KMS

Afin de communiquer avec votre KMS, il est nécessaire de créer un certificat d'accès. Celui-ci sera utilisé pour toute interaction avec le KMS OVHcloud et vSphere/vCenter, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec ceux-ci.

Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

Il est possible de générer ce certificat en laissant OVHcloud générer la clé privée, ou en fournissant votre propre clé de sécurité privée via une Certificate Signing Request (CSR).

### Sans CSR

Vous pouvez créer un certificat d'accès et une clé privée avec l'appel api suivant: `Without CSR Provided`{.action}

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
> - Avec/Sans CSR Provided.
>

Il est nécessaire d'indiquer les informations suivantes :
- **name:** Le nom du certificat (obligatoire).
- **identityURNs:** L'identité OVHcloud sous format d'Urn qui sera fourni à IAM pour le calcul des droits d'accès (obligatoire).
- **description:** Description du certificat (optionnel).
- **validity:** Durée de validité du certificat en jours - 365 jours par défaut (optionnel).

**Voici un exemple de création de certificat:**
```Shell
{
 "description": "My user reader credential",
 "identityURNs": [
 "urn:v1:labeu:identity:account:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user" // L'utilisateur avec lequel vous vous connectez à vSphere au sein de votre PCC, il doit être admin ou avoir Encryption management activé au sein du PCC pour chiffrer des VM. 
 "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group" // Le groupe avec lequel vous accédez à vos PCC, pour activer le chiffrement sur les VM vous devez être admin ou activer Encryption management.
 ],
 "name": "my_reader", // Nom du reader.
 "validity": 30 // Par defaut 365 jours.
}
```

L'Api retourne ensuite l'état de création du certificat:
```Shell
{
  "id": "1bc7830b-9c8e-4b45-af51-00a3543ba16c",
  "name": "user",
  "description": "XXX",
  "identityURNs": [
    "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user",
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group"
  ],
  "status": "CREATING",
  "fromCSR": false,
  "privateKeyPEM": "-----BEGIN EC PRIVATE KEY-----\nXXcCAQEEIEs+RwZG0JLs5bmzxVxZtli15RLGU/cXXHtoVoOrwDzuoAoGCCqGSM49\nAwEHoUQDQgAExC+jRLpucMcNUcXXhxHNMA78EjrmmKnMgeEaRzAvX2dY4GVap5lU\nM76nD1WRnNvceYHZUOxGcPDCuXXKNV1/8A==\n-----END EC PRIVATE KEY-----\n",
  "createdAt": "2024-07-02T15:54:18.390593+02:00",
  "expiredAt": "2024-08-01T15:54:18.390591+02:00"
}
```
Copier la valeur du champ (exemple ci-dessus): `privateKeyPEM`{.action}, puis coller là dans un fichier: `domain.key`{.action}. Uniquement `-----BEGIN EC YOUR_PRIVATE_KEY-----\n...\n-----END EC YOUR_PRIVATE_KEY-----`{.action}.

Enregistrer ce fichier afin de le réutiliser pour que **KMS trust vCenter**: `Make KMS Trust vCenter`{.action}.

Puis copier aussi l'id généré et lancer l'appel api suivant avec l'id et l'okmsId :

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

L'API renvoie le certificat **"certificatePEM"** au format Json:

```Shell
{
  "id": "06ef14a0-7635-4f17-8748-accfadbd6203",
  "name": "reader",
  "description": "XXX",
  "identityURNs": [
    "urn:v1:labeu:identity:account:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user", // L'utilisateur OVHcloud avec lequel vous vous connectez à vSphere au sein de votre PCC, il doit être admin ou avoir Encryption management activé au sein du PCC pour chiffrer des VM.
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group" // Le groupe OVHcloud avec lequel vous accédez à vos PCC, pour activer le chiffrement sur les VM vous devez être admin ou activer Encryption management.
  ],
  "status": "READY",
  "fromCSR": false,
  "certificatePEM": "-----BEGIN CERTIFICATE-----\nMXXBqTCCAU+gAwIBAgIQBu8UoHY1TxeHSKzPrb1iAzAKBggqhkjOPXXDAjAVMRMw\nEQYDVQQDEwpDQ01Vc2Vyc0NBMB4XDTI0MDcwMjEzNTQxOFoXDTI0MDgwMTEzNTQx\nOFowLzEtMCsGA1UEAxMkZTkwYzU4NDEtZjM5ZSXXOTgzLTg1OTYtNjJmZjBjNTM4\nYjZiMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAExC+jRLpucMcNUc84hxHNMA78\nEjrmmKnMgeEaRzAvX2dY4GVap5lUM76nD1WRnNvceYHZUOxGcPDCu33KNV1/8KNn\nMGUwTgYDVR0RAQH/BEQwQqBABgorBgEEAYI3FAIDoDIMMG9rbXMuZG9tYWluOmU5\nMGM1ODQxLWYzOWUtNDk4My04NTk2LTYyZmYwYzUzOGI2YjATBgNVHSUEDDAKBggr\nBgEFBQcDAjAKBggqhkjOPQQDAgNIADBFAiBD9GOB4c+7IVQzlJBCP8TZ9O3M4pHS\nVJTyEYxld5eXYQIhAL/1fe5qGBZib4vlaPss6zgJoentyMUq+zTCMUn5wXcP\n-----END CERTIFICATE-----",
  "createdAt": "2024-07-02T15:54:18.390593+02:00",
  "expiredAt": "2024-08-01T15:54:18.390591+02:00"
}
```

Copier la valeur du champ `"certificatePEM"`{.action} `"-----BEGIN CERTIFICATE-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE-----"`{.action} puis coller là (printf) dans un fichier `client.pem`{.action}.

### Avec CSR

Suivez les mêmes étapes que ci-dessus, mais avec le champ `With CSR provided`{.action} de l'appel api suivant:

> [!api]
>
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

> **Paramètres:**
>
> - okmsId: L'ID de votre KMS OVHcloud (Okms).
>

Exemple de l'input avec CSR formaté en Json:

```Shell
{
  "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNlcnQgSW5jLjERMA8GA1UECwwIRGln\naUNlcnQxHTAbBgNVBAMMFGV4YW1wbGUuZGlnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWBOkZc+c\n1Po2EmvBz+AD5sBdT5kzGQA6NbWyZGldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWzTx+n0zKfqcbgXi4DJx+C1bjptYPR\nBPZL8DAeWuA8ebudVT44yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNt5qcLsx5a8uk4G6AKHMzuhLsJ7XZjgmQXGECpY\nQ4mC3yT3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1PpVUNCPQGn9p/eX6Qo7vpDaPybRtA2R7XLKjQaF9oXWeCUqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEuJwjBPii6a9M9G30nUo39lBi1w=\n-----END CERTIFICATE REQUEST-----",
  "description": "My reader credential",
  "identityURNs": [
    "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user",
    "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user"
  ],
  "name": "reader name",
  "validity": 365
}
```
Coller la valeur du champ `"csr"`{.action}: `"-----BEGIN CERTIFICATE REQUEST-----\nYOUR_CERTIFICATE\n-----END CERTIFICATE REQUEST-----"`{.action} récupéré de vSphere.

> [!tabs]
>>
>> ### vCenter Trust KMS
>>
>> **Faire que vCenter approuve KMS**
>>
>> ![Trust KMS server with or without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/trust_kms.png){.thumbnail}
>>
>> D'abord, vous devez approuver le kMS au sein de vCenter. Pour le faire, cliquez sur: `Approuver le KMS`{.action}.
>>
>> En principe, vCenter va télécharger automatiquement le certificat public KMS. S'il ne le fait pas, vous pouvez le faire manuellement en cliquant sur: `Établir une relation de confiannce > vCenter approuve Kms > Télécharger le vertificat KMS`{.action}.
>>
>> L'approbation entre vCenter et KMS peut être conflictuelle, attendez quelques minutes avant de recommencer ou rafraichissez votre page vSphere avec le bouton en haut (flèche en forme de rond).
>>
>> ![KMS Key Provider with or without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_vcenter_trust_kms_1-optim-resize.webp){.thumbnail}
>>
>> ![KMS Key Provider with or without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_vcenter_trust_kms-optim-resize.webp){.thumbnail}
>>
>> Après ça, il faut que le **KMS approuve vCenter**.
>> 
>> Sélectionner ainsi vôtre **Fournisseurs de clés** KMS (Okms) que vous venez d'ajouter et cliquer sur le bouton: `Approuver l'instance de VCENTER`{.action}.
>>
>> ![Trust KMS server with or without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/trust_kms.png){.thumbnail}
>>
>> Nous recommandons la méthode avec CSR (plus sécurisé): `Nouvelle demande de signature de certificat (CSR)`{.action), mais libre à vous de choisir celle qui vous convient le mieux et qui est compatible avec votre façon de faire.
>>
>> Pour plus d'information sur les avantages et inconvénients de l'utilisation d'une CSR, lisez la documentation [KMS](/pages/manage_and_operate/kms/quick-start).
>>
>> ### KMS trust vCenter
>>
>> **Établir une relation de confiance entre vCenter et KMS:**
>>
>> Si en cliquant sur Approuver KMS vCenter a bien téléchargé le certificat public, cette étape est optionnel.
>>
>> Car avant de générer votre CSR et/ou votre Certificat KMS et clé privée vous devez verifier que vCenter à bien télécharger le certificat public du serveur Okms.
>>
>> Pour ça vous pouvez le récupérer depuis les endpoint fournis avec ce script par exemple ou une commande openssl:
>>
>> ```Shell
>> openssl s_client -showcerts -connect eu-west-rbx.okms.ovh.net:443 </dev/null 2>/dev/null|openssl x509 -outform PEM | python3 -c "
>> import sys
>> import json
>> body = {}
>> body['cert'] = sys.stdin.read()
>> json.dump(body, sys.stdout)
>> " | python3 -c "
>> import sys
>> import json
>> body = json.load(sys.stdin)
>> print(body['cert'])
>> " | openssl x509 -text; echo $?
>> ```
>> Copiez le retour depuis `-----BEGIN CERTIFICATE----- XXX -----END CERTIFICATE-----`{.action} dans vSphere.
>> 
>> Il faut cliquer sur: `Établir une realtion de confiance`{.action}.
>> 
>> Puis `Télécharger le certificat KMS`{.action}.
>> 
>> Pour finir, coller le certificat public KMS.
>>
>> ![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_upload_kms_cert-ptim-resize.webp){.thumbnail}
>> 
>> ![KMS Key Provider](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_upload_kms_cert_2-optim-resize.webp){.thumbnail}
>>
> **Certificat KMS et clé privée (without CSR)**
>>
>> Cliquez sur: `Faire que KMS approuve vCenter`{.action}
>>
>> Puis, sélectionnez `KMS Certificate and private key to vCenter.`{.action}.
>> 
>> Pour générer puis signé votre certificat public et la clé privée, lancez les appels api suivants:
>>
>> [!api]
>>
>> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>>
>> **Paramètre:**
>> 
>>**Without CSR**
>>
>> ```Shell
>> {
>> "description": "My reader credential",
>> "identityURNs": [
>> "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user",
>> "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group"
>> ],
>> "name": "reader",
>> "validity": 365
>> }
>> ```
>>
>> Récupérez le **credential id** du post ci-dessus, ainsi que la clé privée générée **privateKeyPEM**. Puis collez là dans un fichier **XXX.pem** afin de pouvoir la télécharger (upload) dans vSphere/vCenter.
>>
>> Puis lancer le get suivant pour signer vos clés:
>> 
>> [!api]
>>
>> @api {v2} /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>>
>> **Paramètre:**
>> - **credentialId:** L'id de la requête d'accès à votre Okms.
>> - **okmsId:** L'id de la commande de votre Okms.
>>
>> ![Trust KMS server without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter.png){.thumbnail}
>>
>> ![Trust KMS server without CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_2.png){.thumbnail}
>>
>> Afin d'utiliser la clé signée dans vSphere, vous devez le formater avec cette commande :
>>
>> ```Shell
>> # Clé signé (PEM):
>> awk '{gsub(/\\n/,"\n")}1' cle.pem
>> 
>> # Certifiat signé (CRT):
>> awk '{gsub(/\\n/,"\n")}1' cert.crt
>> ```
>> 
>> Le format n'a pas de réelle importance, car il n'est pas utilisé au sein de openssl à ce stade.
>> 
>> Relancer cette commande awk avec le certificat signé, copiez le.
>>
>> Et pour finir, collez le dans vSphere, puis cliquez sur: `Etablir une relation de confiance`{.action}.
>>
> **Nouvelle demande de signature de certificat (With CSR)**
>>
>> Une fois votre KMS commandé, vCenter approuvé avec KMS, vous pouvez lancer la génération du `CSR`{.action} afin que KMS approuve vCenter et signe le CSR.
>>
>> Il faut alors, cliquer sur: `Faire que KMS approuve vCenter`{.action}.
>>
>> Sélectionnez donc: `Nouvelle demande de signature de certificat (CSR)`{.action}. Puis Copiez ou téléchargez le CSR ci-dessous et mettez-le à la disposition du KMS OVHcloud depuis l'api v2 /okms et demandez à ce dernier de signer le certificat.
>>
>> La signature ce fait avec l'appel api suivant: 
>> 
>> [!api] 
>>
>> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>>
>> **Paramètre:**
>> 
>> **With CSR**
>> 
>> ```Shell
>> {
>> "csr": "-----BEGIN CERTIFICATE REQUEST-----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNlcnQgSW5jLjERMA8GA1UECwwIRGln\naUNlcnQxHTAbBgNVBAMMFGV4YW1wbGUuZGlnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWBOkZc+c\n1Po2EmvBz+AD5sBdT5kzGQA6NbWyZGldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWzTx+n0zKfqcbgXi4DJx+C1bjptYPR\nBPZL8DAeWuA8ebudVT44yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNt5qcLsx5a8uk4G6AKHMzuhLsJ7XZjgmQXGECpY\nQ4mC3yT3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1PpVUNCPQGn9p/eX6Qo7vpDaPybRtA2R7XLKjQaF9oXWeCUqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEuJwjBPii6a9M9G30nUo39lBi1w=\n-----END CERTIFICATE REQUEST-----",
>> "description": "My user reader credential",
>> "identityURNs": [
>> "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user",
>> "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group"
>> ],
>> "name": "user",
>> "validity": 365
>> } 
>> ```
>>
>> L'approbation ne sera pas établie une fois que vous aurez terminé cet Assistant. Rendez-vous dans le Okms pour télécharger le CSR, faites signer le certificat par le Okms et téléchargez-le sur le vCenter pour établir la confiance.
>>
>> Attention votre CSR doit être compatible en format json afin de l'utiliser dans l'api v2 OVHcloud.
>>
>> ![Trust KMS server with CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr.png){.thumbnail}
>>
>> ![Trust KMS server with CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration/images/kms_trust_vcenter_csr_2.png){.thumbnail}
>>
>> Copier votre CSR dans un fichier `csr.pem`{.action} afin de pouvoir de faire signer par le Okms.
>>
>> Pour ça lancer la commande :
>> ```Shell
>> awk '{printf "%s\\n", $0}' csr.pem
>> ```
>> Et coller le retour de cette commande dans l'appel api plus haut, pour faire signer votre csr auprès du Okms.
>>
>> Il ne vous reste plus qu'à uploader le CSR signé.
>> 
>> Afin de signer le CSR, cliquez sur `ESTABLISH TRUST > Upload Signed CSR Certificate`{.action}.
>> 
>> ![Trust KMS server with CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_upload_signed_csr-optim-resize.webp){.thumbnail}
>>
>> Vous devez maintenance copier le CSR signé depuis l'appel api:
>> 
>> [!api]
>>
>> @api v2 /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>> 
>> **Paramètre:**
>>
>> - **credentialId:** L'id généré lors de votre appel api post with csr ("fromCSR": true,)
>> - **okmsId:** L'id de votre KMS OVHcloud.
>> 
>> Puis lancer la commande Awk ci-dessous pour le formater afin que vSphere puisse le lire :
>>
>> ```Shell
>>  awk '{gsub(/\\n/,"\n")}1' csr_signé.pem
>> ```
>>
>> Copier le retour de la commande et coller là dans vSphere
>> 
>> ![Trust KMS server with CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_upload_signed_csr_2-optim-resize.webp){.thumbnail}
>>
>> Vous pouvez verifier que la connection à bien était établie en sélectionnant votre Key Provider Okms.
>> 
>> L'option `Connected`{.action} doit être cochée.
>>
>> ![Trust KMS server with CSR](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_okms_validation.webp){.thumbnail}
>>

## Étape 5 - Création d'une politique IAM

/// details | Comment créer une politique IAM pour activer le chiffrement d'une VM ?

Pour activer le chiffrement au sein de vSphere, vous devez disposer des droits suffisant au sein de vos ressources Okms et de votre compte OVHcloud.

Si vous n'avez pas déja de politique IAM crée, nous allons en créer une afin de lister les étapes nécessaires.

Il faut vous connecter à votre [OVHcloud control panel](/links/manager).

Aller dans IAM en cliquant en haut à droite sur: `Mon compte > mon utilisateur > IAM > Créer une politique`{.action}.

![Manager IAM Policy](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_iam-resize-optim.webp){.thumbnail}

Ajoutez le nom de votre politique sinon vous ne pourrez pas la créer à la fin.

Ainsi qu'une description intélligente de votre politique IAM.

Dans `Identités`{.action}, ajoutez votre utilisateur local OVHcloud. Celui avec lequel vous avez généré le CSR depuis l'api. En cliquant sur: `Ajouter un utilisateur`{.action}.

![Manager IAM Policy 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_iam_2.webp){.thumbnail}

Vous devez ensuite, ajouter les actions afin de pouvoir générer les clés pour votre politique de chiffrement vSphere.

Cliquez dans le champ Type de produits, puis ajouter: `iam_ressource_type_okms`{.action}

Vous pouvez choisir d'ajouter toutes les actions ou filtrer plus finement selon vos besoins utilisateurs.

![Manager IAM Policy 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_iam_3.webp){.thumbnail}

Pour terminer, cliquez sur: `Créer la politique`{.action}.

![Manager IAM Policy 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_iam_4.webp){.thumbnail}

Votre politique est créée, vous pouvez maintenant activer le chiffrement au sein de PCC en changeant la politique VM de vos machines virtuelles.

///

## Étape 6 - Activation du chiffrement d'une Machine Virtuelle avec le Okms (obligatoire)

/// details | Comment activer le chiffrement dans vSphere et générer une clé Okms ?

Nous allons dans l'étape 6 finaliser l'activation du KMS OVHcloud avec la mise en place du chiffrement sur une machine virtuelle gràce à une `Politique de stockage`{.action} précédemment créée.

Cette politique de stockage utilise des règles basées au niveau de l'hôte. Vous devez donc avoir bien créé cette politique, activé `Règles basées sur l'hôte`{.action} dans les services basés sur l'hôte puis avoir aussi activé les composants de stratégie de stockage. 

Si vous ne savez pas comment faire, nous allons ici detailer la création d'une politique ainsi que les éléments détaillés ci-dessus.

Vous devez comment aux étapes précédentes vous connecter à votre [OVHcloud control panel](/links/manager)

Puis à votre web interface pcc vSphere:

![Manager Web Interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/manager_web_interface_pcc.webp){.thumbnail}

Vous êtes maintenant sur l'url de votre pcc, par exemple :
- `<https://pcc-x.x.x.x.ovh.xx/ui/>`{.action}

Connectez-vous avec un utilisateur local ou avec un utilisateur IAM selon les droits que vous avez mis en place au sein de votre compte OVHcloud et de votre PCC HPC.

Vous êtes maintenant logué au sein de votre Hosted Private Cloud vSphere on OVHcloud.

### Création d'une politique de stockage

Pour créer une politique de stockage afin de pouvoir activer le chiffrement au sein de vos machines virtuelles avec un KMS OVHcloud. Il vous faut accéder au vSphere de votre PCC. Si vous avez suivi les étapes précédentes, vous devez être deja connectez à vSphere. Après avoir ajouté votre KMS OVHcloud.

Vous devez maintenant, aller dans: `Politiques et profiles > Stratégies de stockage VM`{.action}.

Vous devez maintenance créer une Stratégie.

Cliquez sur: `CRÉER`{.action} dans **Stratégies de stockage VM**.

La fenêtre de création de stratégie s'ouvre maintenant, vous êtes à l'étape 1: `Nom et description`{.action}.

Vous devez determiner votre serveur vCenter, qui est votre PCC sur lequel vous voulez créer votre stratégie de stockage.

Une fois votre `PCC-XXX-XXX-XXX-XXX.ovh.XX`{.action} choisie, votre `Nom`{.action} et `Description`{.action}.

Vous pouvez cliquer sur: `SUIVANT`{.action} pour continuer.

![VM Storage Policies Creation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/vsphere_vm_policie.png){.thumbnail}

Vous arrivez à l'étape 2, **Structure de la stratégie.**

Nous allons ici activer les **stratégies de règles basées sur l'hôte**. Cochez la case: `Activer les règles basées sur l'hôte`{.action}.

Pour continuer, cliquez sur: `SUIVANT`{.action}.

![VM Storage Policies Creation 02](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/vsphere_vm_policie_2-optim-resize.webp){.thumbnail}

Pour l'étape 3, vous devez confirmer les choix de l'étape précédente en activant la validation du composant de stratégie de stockages (le chiffrement).

Nous allons pour les besoins de ce guide, laisser le réglage par défaut: `Default encryption properties`{.action}.

Vous devez donc cliquer sur: `Chiffrement`, 

Puis **utiliser le composant de stratégie de stockage:** `Default encryption properties`{.action}.

- **Composant de stratégie de stockage:** Default encryption properties.
- **Description:** Storage policy component for VM and virtual disk encryption.
- **Fournisseur:** Chiffrement de VM VMware.
- **Autoriser les filtres d'E/S avant le chiffrement:** False.

Pour votre information: Ces services de données disponibles peuvent inclure le chiffrement, le contrôle d'E/S, la mise en cache, etc. / Les services basés sur l'hôte seront appliqués en complément des règles spécifiques aux banques de données.

Pour terminer l'étape 3, cliquez sur: `SUIVANT`{.action}.

![VM Storage Policies Creation 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/vsphere_vm_policie_3-optim-resize.webp){.thumbnail}

Pour l'étape 4, compatibilité de stockage. Vous avez la compatibilité et l'incompatibilité de votre centre de données (PCC) Hosted Private Cloud VMware on OVHcloud.

Quand vous avez terminé de verifier les compatibilités de votre espace de stockage, cliquez sur: `SUIVANT`{action}.

![VM Storage Policies Creation 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/vsphere_vm_policie_4-optim-resize.webp){.thumbnail}

Et pour terminer à la dernière étape, l'étape 5, cliquez sur: `TERMINER`{.action}.

Votre stratégie étant créée, vous pouvez maintenance procéder à l'activation du chiffrement sur une de vos machines virtuelles.

![VM Storage Policies Creation 05](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/vsphere_vm_policie_5_optim-resize.webp){.thumbnail}

### Activation du chiffrement sur une machine virtuelle

Localisez la machine virtuelle (VM) que vous souhaitez chiffrer. Éteignez là si elle est allumé (obligatoire).

Et faites un clic droit sur la machine virtuelle sélectionnée pour afficher le menu contextuel ou cliquez sur `ACTIONS`{.action}. 

Puis, sélectionnez: `Stratégies de VM`{.action}.

À la suite de ça, choisissez: `Modifier les stratégies de stockage VM`{.action}. 

Cela ouvrira une fenêtre ou un panneau où vous pourrez modifier les politiques de stockage de la VM sélectionnée.
 
![VM Storage Policies Encryption](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_vm_policies-optim-resize.webp){.thumbnail}

Recherchez les options de chiffrement ou de sécurité dans les politiques de stockage pour activer le chiffrement KMS pour cette VM.

![VM Storage Policies Encryption 03](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_vm_policies_3-optim-resize.webp){.thumbnail}

Si vous déployez une nouvelle VM depuis un template OVHcloud OVF, vous avez plusieurs choix pour chiffrer votre VM:
- **Thick Provision Lazy Zeroed.**
- **Thin Provision.**
- **Thick Provision Eager Zeroed.**

Choisissez celle qui vous convient le mieux, si vous avez un doute, vous pouvez aller voir le guide: [Quel format de disque choisir](/pages/bare_metal_cloud/managed_bare_metal/choosing-disk-type).

Et cocher la case: `Chiffrer cette VM`{.action}.

Pour en revenir au cas d'une VM déja existante et éteinte.

![VM Storage Policies Encryption](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_deploy_vm_policies.webp){.thumbnail}

Après avoir apporté les modifications nécessaires, enregistrez les modifications et fermez la fenêtre.

Vous avez maintenant édité les politiques de stockage de la VM et activer le chiffrement KMS pour votre serveur. Un petit cadenas sur le résumé des informations de votre machine virtuelle le confirme.

Et vous constatez bien un petit cadenas dans la vue général de votre VM ainsi que dans la description du chiffrement.

Ceci confirme que votre politique fonctionne avec le serveur Okms et que le chiffrement est **activé**.

![VM Storage Policies Encryption Confirmation 04](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt/images/okms_vsphere_vm_policies_4-optim-resize.webp){.thumbnail}

///

### Informations TLS utiles

/// details | Informations utiles afin de manipuler vos certificats TLS avec openssl.

Attention quand vous copiez-coller votre CSR, il doit être formaté pour fonctionner avec le format json.

Des **\n** doivent être ajoutés à chaque saut de ligne. Pour ça vous pouvez lancer cette commande openssl afin de convertir votre certificat en format pkcs12 :

`openssl pkcs12 -export -inkey client.key -in client.crt -out cert_key.p12`{.action}.

**CSR decode:**

Pour décoder votre CSR, vous pouvez exécuter cette commande openssl avec votre CSR:

- `openssl req -in mycsr.csr -noout -text`{.action}.

Ou alors utiliser un outil web plus graphique, tel que: [sslshopper](https://www.sslshopper.com/csr-decoder.html){.external}.

**Certificate decode:**

- `openssl x509 -in certificate.crt -text -noout`{.action}.

**Certificate Key Matcher:**

Afin de verifier si le CSR match votre certificat, vous pouvez le faire avec ces commandes openssl:

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

### Formater les CSR pour VMware

Adaptez la commande avec votre fichier CSR.
```Shell
# Formater pour l'OVHcloud api :
awk '{printf "%s\\n", $0}' file

# Formater pour vSphere :
awk '{gsub(/\\n/,"\n")}1' file
```

### Récupérer le certificat KMS

SI vous rencontrez des difficultés lors du trust KMS, vous pouvez le télécharger manuellement en le (copie-coller) collant dans vSphere.

Vous pouvez lancer ce snippet (il faut avoir python et openssl d'installé). Il permet de d'exporter et formater le certificat public Okms.

Changez l'input Okms avec l'url de la bone région. Vous devez avoir Python et openssl installé:
```Shell
openssl s_client -showcerts -connect eu-west-rbx.okms.ovh.net:443 </dev/null 2>/dev/null|openssl x509 -outform PEM | python3 -c "
import sys
import json
body = {}
body['cert'] = sys.stdin.read()
json.dump(body, sys.stdout)
" | python3 -c "
import sys
import json
body = json.load(sys.stdin)
print(body['cert'])
" | openssl x509 -text; echo $?
```

///

## Allez plus loin

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).