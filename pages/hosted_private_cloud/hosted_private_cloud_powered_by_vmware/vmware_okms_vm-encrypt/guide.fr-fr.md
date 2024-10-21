---
title: "KMS pour VMware on OVHcloud - Configuration du chiffrement de VM"
excerpt: "Découvrez comment activer le chiffrement de vos VMs au sein de votre VMware vSphere managé Hosted Private Cloud grâce à la solution KMS OVHcloud (OKMS) en tant que service managé"
updated: 2024-08-28
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
> Cette fonctionnalité est disponible en version bêta.
>

## Objectif

**Découvrez comment commander, activer et configurer un KMS OVHcloud (OKMS) au sein d'un VMware vSphere managé on OVHcloud pour activer la politique de chiffrement de vos machines virtuelles.**

## Prérequis

- Être connecté à [l'espace client OVHcloud](/links/manager).
- Disposer d'une offre [VMware on OVHcloud](/links/hosted-private-cloud/vmware).
- Disposer des droits nécessaires pour manipuler les ressources HPC VMware et KMS OVHcloud avec IAM.
- Avoir lu les guides : 
    - [Intégration d'un KMS pour VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_overall_vm-encrypt).
    - [Premiers pas avec OKMS](/pages/manage_and_operate/kms/quick-start).
- Le certificat public du KMS OVHcloud (OKMS) (étape [vCenter Trust KMS](#trust-okms)).
- Une demande de signature de certificat (CSR) généré par vSphere et signé par OKMS pour valider/truster l'import ainsi que les échanges entre le KMS OVHcloud et vCenter.

## En pratique <a name="summary"></a>

**Sommaire des étapes du guide** :

- [Introduction - Listes des endpoints KMS OVHcloud](#introduction)
- [Étape 1 - Commande d'un KMS OVHcloud (obligatoire)](#commande-okms)
- [Étape 2 - Activation du KMS OVHcloud (obligatoire)](#activation-okms)
- [Étape 3 - Création d'une politique IAM (obligatoire)](#iam-creation)
- [Étape 4 - Configuration de OKMS avec vSphere (obligatoire)](#add-okms)
- [Étape 5 - Création d'une stratégie de stockage VM (obligatoire)](#storage-policy)
- [Étape 6 - Activation du chiffrement sur une VM (obligatoire)](#activation-encryption)
- [Étape 7 - Informations utiles TLS OKMS](#useful-information)

### Introduction, liste des URLs et des appels API OKMS disponibles <a name="introduction"></a>

Pour plus d'informations sur les choix qui s'offrent à vous avec KMS et Hosted Private Cloud VMware on OVHcloud, consultez le guide « [Présentation des solutions pour chiffrer des VM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_overall_vm-encrypt) ».

#### URLs OKMS

> [!primary]
>
> Informations et endpoints API pour la phase bêta.
> 

|   **Type**    | **URL**                           |      **Région**       |  **OKMS Région enum**  |      **IP**      |
|:-------------:|:----------------------------------|:---------------------:|:----------------------:|:----------------:|
|   **KMIP**    | eu-west-rbx.okms.ovh.net          |   France - Roubaix    |      EU_WEST_RBX       |  91.134.128.102  |
|   **KMIP**    | eu-west-rbx.okms.ovh.net          |   France - Roubaix    |      EU_WEST_RBX       |  91.134.128.102  |
|   **REST**    | eu-west-rbx.okms.ovh.net          |   France - Roubaix    |      EU_WEST_RBX       |  91.134.128.102  |
|  **Swagger**  | swagger-eu-west-rbx.okms.ovh.net  |   France - Roubaix    |      EU_WEST_RBX       |  91.134.128.102  |
|   **KMIP**    | eu-west-sbg.okms.ovh.net          |  France - Strasbourg  |      EU_WEST_SBG       |  137.74.127.152  |
|   **KMIP**    | eu-west-sbg.okms.ovh.net          |  France - Strasbourg  |      EU_WEST_SBG       |  137.74.127.152  |
|   **REST**    | eu-west-sbg.okms.ovh.net          |  France - Strasbourg  |      EU_WEST_SBG       |  137.74.127.152  |
|  **Swagger**  | swagger-eu-west-sbg.okms.ovh.net  |  France - Strasbourg  |      EU_WEST_SBG       |  137.74.127.152  |

#### Liste des appels API v1 et v2 KMS  <a name="listing-api"></a>

> [!primary]
>
> Informations et appels API pour la phase bêta.
>

|       **Méthode**       |  **API**  | **Path**                                                                 | **Commentaires**                                                 |
|:-----------------------:|:---------:|:-------------------------------------------------------------------------|:-----------------------------------------------------------------|
|                         |           |                                                                          |                                                                  |
|    **Credentials:**     |           |                                                                          |                                                                  |
|         **GET**         |    v2     | /okms/resource/{okmsId}/credential                                       | - List all access credentials.                                   |
|        **POST**         |    v2     | /okms/resource/{okmsId}/credential                                       | - Request a new access credential.                               |                                
|         **GET**         |    v2     | /okms/resource/{okmsId}/credential/{credentialId}                        | - Get an access credential.                                      |                                
|         **DEL**         |    v2     | /okms/resource/{okmsId}/credential/{credentialId}                        | - Revoke and delete an access credential.                        |
|                         |           |                                                                          |                                                                  |
|     **Reference:**      |           |                                                                          |                                                                  |
|         **GET**         |    v2     | /okms/reference/serviceKey                                               | - Get service key type, size, curve and operations combination.  |                                                
|                         |           |                                                                          |                                                                  |
|     **Resources:**      |           |                                                                          |                                                                  |
|         **GET**         |    v2     | /okms/resource                                                           | - List OVHcloud KMS services.                                    |                                                
|         **GET**         |    v2     | /okms/resource/{okmsId}                                                  | - Get an OVHcloud KMS service.                                   |                                                
|                         |           |                                                                          |                                                                  |
|    **Service Keys:**    |           |                                                                          |                                                                  |                                           
|         **GET**         |    v2     | /okms/resource/{okmsId}/serviceKey                                       | - List all keys.                                                 |
|        **POST**         |    v2     | /okms/resource/{okmsId}/serviceKey                                       | - Create or import a service key.                                |
|         **GET**         |    v2     | /okms/resource/{okmsId}/serviceKey/{keyId}                               | - Retrieve a key.                                                |
|         **PUT**         |    v2     | /okms/resource/{okmsId}/serviceKey/{keyId}                               | - Update a service key.                                          |                                                
|         **DEL**         |    v2     | /okms/resource/{okmsId}/serviceKey/{keyId}                               | - Delete the given service key.                                  |                                                
|                         |           |                                                                          |                                                                  |
|  **Authentification:**  |           |                                                                          |                                                                  |
|         **GET**         |    v1     | /dedicatedCloud/{serviceName}/vmEncryption/kms                           | - List virtual machine encryption KMS servers.                   |
|        **POST**         |    v1     | /dedicatedCloud/{serviceName}/vmEncryption/kms                           | - Create virtual machine encryption KMS server.                  |
|         **GET**         |    v1     | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Get virtual machine encryption KMS server.                     |
|         **DEL**         |    v1     | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Remove virtual machine encryption KMS server.                  |
|        **POST**         |    v1     | /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties  | - Update virtual machine encryption KMS server.                  |

### Étape 1 - Commande d'un KMS OVHcloud (obligatoire) <a name="commande-okms"></a>

/// details | Comment commander un KMS OVHcloud (OKMS) pour HPC VMware on OVHcloud ?

![Manager KMS Menu Order Animated Gif](images/okms_order.gif){.thumbnail}.

#### Via l'espace client OVHcloud

Afin d'accéder au KMS OVHcloud, connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Hosted Private Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Identité, Sécurité & Opération`{.action}, puis sur `Key Management Service`{.action}.

Pour commander un nouveau serveur KMS, cliquez sur le bouton `Commander un KMS`{.action}, puis `Sélectionnez une région`{.action} parmi les deux disponibles actuellement :

Vous disposez à ce jour des régions suivantes :

- `Europe - France Roubaix`
- `Europe - France Strasbourg`

Les clés de chiffrement et certificats d’accès de ce KMS seront stockés dans la région indiquée. Ils pourront être utilisés dans tous les produits OVHcloud sans distinction de région.

Une fois votre choix fait, cliquez sur le bouton `Commander`{.action}.

> [!primary]
> 
> Si vous n'arrivez pas à completer la commande, relancez-la manuellement en cliquant sur [ce lien](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(productId~'okms~planCode~'okms~duration~'P1M~pricingMode~'default~configuration~(~(label~'region~value~'EU_WEST_RBX).
>

Enfin, cliquez sur `Terminer`{.action} pour finaliser la commande.

![Manager KMS Menu OKMS Order Finish](images/okms_order_finish-optimized.png){.thumbnail}

Une fois votre commande validée, vous retrouverez avec votre KMS, le **Nom**, l'**ID** et la **Région**.

![Manager KMS Menu KMS All 01](images/manager_okms_all-optimized.png){.thumbnail}

Copiez votre "**ID**" OKMS.

![Manager KMS Menu](images/manager_okms_copy_id-optim-resize.png){.thumbnail}

L'ID ressemble à un **UUID** classique. Il vous sera utile par la suite pour :

- Lister vos ressources OKMS.
- Lister toutes les informations d'accès (credentialId).
- Générer le "credentialId" avec votre CSR (le credentialId étant l'ID de la preuve de signature de votre CSR, votre demande de nouvelles informations d'identification d'accès).
- Lister toutes les clés OKMS.

Vous pouvez consulter [le tableau ci-dessus](#listing-api).

> [!api]
> 
> @api {v2} /okms POST /okms/resource/{okmsId}/credential
>

> **Paramètres** :
>
> - `okmsId` : l'ID de votre KMS OVHcloud (OKMS).
>

Nous verrons dans l'étape 3 comment effectuer ces requêtes.

Voici une vue globale de votre commande KMS pour votre environnement HPC VMware vSphere managé OVHcloud.

Vous pouvez copier-coller toutes les informations utiles pour lancer les appels API (IP, URN, KMIP etc..).

![Manager KMS Menu](images/manager_okms_id-optimized-optim-resize.png){.thumbnail}

#### Via les API OVHcloud

Pour lister vos commandes KMS OVHcloud, utilisez l'appel API suivant :

> [!api]
>
> @api {v2} /okms GET /okms/resource
>

> **Paramètres** :
>
> - `okmsId` : l'ID de votre KMS OVHcloud (Okms).
>

Exemple de retour :

```shell
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

Vous disposez désormais d'un serveur KMS OVHcloud à mettre en place au sein de votre environnement HPC VMware on OVHcloud.

///

### Étape 2 - Activation du KMS OVHcloud (obligatoire) <a name="activation-okms"></a>

/// details | Comment activer le KMS OVHcloud (OKMS) en ouvrant les flux au sein de votre HPC vSphere managé on OVHcloud ?

Pour valider le KMS OVHcloud (OKMS) avec Hosted Private Cloud VMware on OVHcloud, créez une règle d'ouverture de flux entrant (pare-feu) au sein de votre gateway HPC VMware vSphere on OVHcloud.

Cette étape doit être réalisée **immédiatement** après commande de votre KMS (OVHcloud) **et avant** l'ajout du KMS à l'interface web VMware vSphere managé.

#### Via l'espace client OVHcloud

**Ouverture des flux (obligatoire)** :

Pour créer ou Importer un service de gestion de clé KMS, connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Hosted Private Cloud`{.action}. Dans la colonne de gauche, cliquez sur `VMware`{.action}, puis sélectionnez votre PCC concerné. Sur la page qui s'affiche, cliquez sur l'onglet `Sécurité`{.action}.

![Manager Hpc Security KMS](images/manager_hpc_security-opti.png){.thumbnail}

Rendez-vous ensuite plus bas dans la section `Virtual Machine Encryption Key Management Servers`{.action}.

L'ajout du KMS depuis l'[espace client](/links/manager) doit être réalisé en **immédiatement** après l'achat et la livraison de votre KMS OVHcloud. Ceci pour permettre l'autorisation des flux au sein des pare-feux OVHcloud.

![Manager Hpc Security KMS](images/manager_hpc_kms_add-optimized.png){.thumbnail}

Vous pouvez ajouter votre OKMS depuis la section HPC, en cliquant sur `Ajouter un nouveau serveur KMS`{.action}

Dans la nouvelle fenêtre qui s'affiche, remplissez les formulaires suivants :

- **IP** : privilégiez l'adresse IP, car le nom de domaine ne peut pas être ajouté. Par exemple, utilisez l'adresse IP `137.74.127.152` pour la région de **Strasbourg** et l'adresse IP `91.134.128.102` pour la région de **Roubaix**.
- **Description** : saisissez une description pour votre OKMS.
- **SSL Thumbprint** : renseignez la Thumbprint SSL/TLS de votre OKMS.

Pour récupérer l'empreinte TLS, lancez la commande OpenSSL suivante (adaptez votre endpoint OKMS avec la bonne région (par exemple : `eu-west-rbx/sbg`) dont fait partie votre KMS OVHcloud) :

```shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
---
Retour:
 SHA1 Fingerprint=FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47
```

Pour récupérer l'IP publique du serveur KMS OVHcloud, lancez un ping. Par exemple :

```shell
ping eu-west-rbx.okms.ovh.net
```

Il s'agit ici de l'IP du KMS de Roubaix et de son empreinte TLS. Adaptez la commande ci-dessus en fonction de la région où se trouve votre KMS (Strasbourg par exemple).

![Manager HPC Security KMS Add 02](images/manager_hpc_kms_add_2-optim-resize.png){.thumbnail}

Vérifiez bien que la confirmation de lecture : **"J’ai lu et j’ai compris la documentation chiffrement de VMs et les actions que je vais devoir effectuer de mon côté"** est bien cochée avant de poursuivre.

![Manager HPC Security KMS Add 02_2](images/manager_hpc_kms_add_2_2.png){.thumbnail}

Attendez que l'ouverture des flux s'effectue et passe le statut en `livré` vert.

En parallèle, vérifiez vos droits au sein de IAM. En effet, pour manipuler KMS, vous aurez besoin de droits supplémentaires.

Pour cela, rendez_vous dans l'onglet `Utilisateurs`{.action} de votre vSphere managé HPC. Dans le tableau qui s'affiche, cliquez sur le bouton `...`{.action} à droite de l'utilisateur concerné, puis sur `Modifier`{.action}.

![Manager HPC Security KMS Add 02](images/manager_users_edit.png){.thumbnail}

Vérifiez que la `gestion du chiffrement`{.action} est activée.

![Manager HPC Security KMS Add 02](images/manager_users_edit_encryption.png){.thumbnail}

Si vous utilisez un rôle IAM en particulier avec une politique globale au sein de votre vSphere managé HPC, activez la gestion du chiffrement pour ce rôle. S'il s'agit du rôle créé lors de l'activation d'IAM (iam-admin), celui-ci dispose de la gestion du chiffrement par défaut.

Avec votre politique, vérifiez bien que les utilisateurs, ressources, actions et les types de produits de votre HPC VMware vSphere managé on OVHcloud ont bien été ajoutés. 

Exemple de politique IAM :

- **Identité** : local user XX -> Utilisateur local OVHcloud.
- **User groups** : ADMIN, XXXX-XX-XX/user_iam.
- **Resources** : pcc-XXX-XXX-XXX-XXX (référence de votre vSphere managé).
- **Product type** : iam_ressource_type_okms/kmip.
- **Actions** : vSphere Admin, pccVMware:apiovh:vmEncryption/kms/changeProperties, pccVMware:vSphere:assumeRole?iam-admin -> User vSphere iam-admin, okms:kmip:get, okms:apikms:serviceKey/create etc..

À titre informatif, le **domain ID** correspond à l'URN de votre KMS OVHcloud.

#### Via les API OVHcloud (optionnel)

Si vous avez déjà réalisé l'ouverture des flux depuis l'[espace client](/links/manager), vous pouvez utiliser l'appel API suivant (facultatif).

**Étape d'ouverture des flux** :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/vmEncryption/kms
>
>
> **Paramètres** :
> 
> - `serviceName` : saisissez la référence de votre vSphere managé. Exemple : **pcc-XX-XX-XX-XX**.
> - `description` : renseignez la description de votre OKMS.
> - `ip` : saisissez l'adresse IP publique de votre OKMS.
> - `sslThumbprint` : renseignez l'empreinte TLS de votre OKMS.
> 

Copier-coller (avec les paramètres KMS) :

```shell
{
"description": "Okms demo",
"ip": "91.134.128.102",
"sslThumbprint": "FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47"
}
```

Pour récupérer l'empreinte TLS du KMS, lancez la commande **OpenSSL** suivante en adaptant la commande à la région où se trouve votre KMS :

```shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
---
Retour:
 SHA1 Fingerprint=FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47
```

Pour récupérer l'IP publique du KMS OVHcloud, effectuez un ping en adaptant la commande à la région où se trouve votre KMS :

```shell
ping eu-west-rbx.okms.ovh.net
```

Pour mettre à jour votre KMS avec un KMS OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud  POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
>

> **Paramètres** :
>
> - `kmsId` : saisissez l'ID de votre serveur OKMS. (Exemple : 350)
> - `serviceName` : renseignez le nom de votre vSphere managé. Exemple : pcc-XX-XX-XX-XX.
>

Exemple :

```shell
{
"description": "Description test",
"sslThumbprint": "FE:21:E2:DE:B7:51:34:E9:9A:AB:E0:27:FF:1E:42:3A:15:9C:76:47"
}
```

Retour :

Après exécution de l'API, vous devriez retrouver en réponse le résultat suivant :

```shell
{
  "kmsId": XXX,
  "kmsTcpPort": 5696,
  "sslThumbprint": "Null",
  "description": "OKMS description",
  "state": "delivered",
  "ip": "Null"
}
```

Attendez (statut : updating) que l'ouverture des flux s'effectue et que le statut passe en état `livré` (facultatif).

![Manager HPC Security KMS Delivered](images/manager_hpc_kms_add_delivered.png){.thumbnail}

///

### Étape 3 - Création d'une politique IAM <a name="iam-creation"></a>

/// details | Comment créer une politique IAM pour activer le chiffrement d'une VM ?

Pour activer le chiffrement au sein de vSphere, vous devez disposer des droits suffisant au sein de vos ressources KMS et de votre compte OVHcloud.

Si vous n'avez pas déjà de politique IAM crée, nous allons en créer une afin de lister les étapes nécessaires.

Il faut vous connecter à votre [espace client OVHcloud](/links/manager).

Rendez-vous dans IAM en cliquant en haut à droite sur `Mon compte > mon utilisateur > IAM > Créer une politique`{.action}.

![Manager IAM Policy](images/manager_iam-resize-optim.png){.thumbnail}

Ajoutez le nom de votre politique sinon vous ne pourrez pas la créer à la fin, ainsi qu'une description intelligente de votre stratégie IAM.

Dans `Identités`{.action}, ajoutez votre utilisateur local OVHcloud. Celui avec lequel vous avez généré le CSR depuis l'API. Pour cela, cliquez sur `Ajouter un utilisateur`{.action}.

![Manager IAM Policy 02](images/manager_iam_2.png){.thumbnail}

Vous devez ensuite ajouter les actions afin de pouvoir générer les clés pour votre politique de chiffrement vSphere.

Cliquez dans le champ « Type de produits », puis ajoutez `iam_ressource_type_okms`{.action}.

Vous pouvez choisir d'ajouter toutes les actions ou filtrer plus finement selon vos besoins utilisateurs.

![Manager IAM Policy 03](images/manager_iam_3.png){.thumbnail}

Pour terminer, cliquez sur `Créer la politique`{.action}.

![Manager IAM Policy 04](images/manager_iam_4.png){.thumbnail}

Votre politique est créée, vous pouvez maintenant activer le chiffrement au sein de PCC en changeant la **"stratégie VM"** de vos machines virtuelles.

Si vous ne disposez d'aucune stratégie préétablie, consultez l'interface API et déterminer les IAM actions nécessaires à la politique. Si vous disposez déjà d'une politique IAM, vous pouvez la modifier et ajouter les actions indispensables. 

///

### Étape 4 - Configuration de OKMS avec VMware vSphere HPC (obligatoire) <a name="add-okms"></a>

/// details | Comment ajouter le KMS OVHcloud dans votre vSphere managé OVHcloud ?

Après avoir commandé votre OKMS, ouvert les flux au sein de votre vSphere managé OVHcloud, il ne vous reste plus qu'à configurer l'import au sein de vSphere et installer la relation de confiance entre vCenter et OKMS.

> [!tabs]
> **Ajout du KMS à vSphere**
>>
>> Pour que vCenter puisse truster votre serveur KMS OVHcloud, connectez-vous à votre [espace client OVHcloud](/links/manager), puis allez dans la partie `Hosted Private Cloud`{.action}. Dans la colonne de gauche, cliquez sur `VMware`{.action} et sélectionnez le datacentre concerné.
>>
>> ![Manager HPC General Information Web Interface](images/manager_hpc_vsphere.png){.thumbnail}
>>
>> Sur la page qui s'affiche et dans l'encadré `Informations générales`{.action}, descendez jusqu'à retrouver la mention `Interfaces de gestion`{.action}, puis cliquez en dessous sur `Interface web`{.action}.
>> 
>> Sur la nouvelle page qui apparaît, cliquez sur le carré intitulé `vSphere HTML Client`{.action}.
>>
>> ![Manager Web Interface](images/manager_web_interface_pcc.png){.thumbnail}
>>
>> Vous êtes désormais sur la page de login ou d'accueil de votre vSphere managé. L'URL en haut de votre navigateur doit ressembler à ceci :
>>
>> - `<https://pcc-x.x.x.x.ovh.de/ui/>`
>> 
>> Connectez-vous avec un **utilisateur local** ou avec **un utilisateur IAM** selon les droits que vous avez mis en place au sein de votre [espace client OVHcloud](/links/manager) et de votre vSphere managé HPC on OVHcloud.
>>
>> Vous êtes maintenant connecté au sein de votre vSphere managé on OVHcloud.
>> 
>> Pour accéder à la gestion des fournisseurs de clés depuis vSphere, cliquez sur `Configurer`{.action} depuis votre **pcc-XXX-XXX-XXX-XXX**. Puis rendez-vous dans la section `Sécurité`{.action}, et cliquez sur `Fournisseurs de clés`{.action}. Sur la page qui apparaît, cliquez sur le bouton `Ajouter`{.action}, puis sur `Ajouter un fournisseur de clé standard`{.action}.
>> 
>> ![KMS Key Provider](images/kms_key_provider.png){.thumbnail}
>>
>> Une fois l'option sélectionnée pour ajouter un Key Provider, une fenêtre ou un formulaire s'ouvre pour saisir les détails du **Key Provider** que vous souhaitez ajouter. Cela peut inclure des informations telles que l'adresse IP ou le nom de domaine (DNS) du serveur OKMS, mais aussi le port utilisé (5696).
>> 
>> Les noms de domaine et le port (KMIP) ne changent pas.
>>
>> ![KMS Key Provider](images/okms_vsphere_add_standard_key_provider.png){.thumbnail}
>>
>> Vous y retrouvez les champs suivants :
>>
>> |     Champ     | Input                                                    | Description                                                                                    |
>> |:-------------:|:---------------------------------------------------------|:-----------------------------------------------------------------------------------------------|
>> |   **Name**    |                                                          | - Permet de nommer votre cluster au sein de vCenter.                                           |
>> |    **KMS**    |                                                          | - Nom qui apparaitra au sein de Vsphere pour votre OKMS.                                       |
>> |  **Address**  | eu-west-rbx.okms.ovh.net <br/> eu-west-sbg.okms.ovh.net  | - **Endpoint** du serveur OKMS. Privilégiez le nom de domaine plutôt que l'IP (dans vSphere).  |
>> |   **Port**    | 5696                                                     | - Port utilisé par KMIP (ne change pas).                                                       |
>>
>> Attendez que vSphere établisse la connexion avec le Key Provider que vous avez ajouté. Vous devriez voir une indication ou un message confirmant que la connexion a été établie avec succès.
>>
>> Patientez quelques minutes le temps que vSphere établisse la connexion avec le fournisseur de clés que vous venez d'ajouter. Vous devriez voir apparaitre un message confirmant que l'ajout a été établi avec succès.
>>
> **Approuver le KMS** <a name="trust-okms"></a>
>>
>> > [!primary]
>> >
>> > L'approbation entre vCenter et KMS peut être conflictuelle, patientez quelques minutes avant de recommencer ou rafraichissez votre page vSphere avec le bouton en forme de flèche circulaire situé en haut et légèrement à droite.
>> >
>> > Si ça ne fonctionne toujours pas, faites un upload manuel (facultatif).
>> >
>>
>> Une fois votre KMS ajouté, ajoutez-le par défaut si vous avez plusieurs fournisseurs de clés. Si ce n'est pas le cas, il sera ajouté automatiquement.
>> 
>> Passez sur la partie inférieure `Provider OKMS 1 - Serveurs de gestion de clés` en cliquant sur le petit rond et aussi sur la flèche de droite afin de dérouler et faire apparaitre votre KMS. 
>> 
>> Si vous ne voyez pas que la relation de confiance passe au vert automatiquement, cliquez sur `APPROUVER LE KMS`{.action}.
>>
>> ![TRUST KMS](images/trust_kms.png){.thumbnail}
>>
>> Ensuite, cliquez sur `APPROUVER`{.action}
>> 
>> ![TRUST KMS](images/okms_vsphere_vcenter_trust_kms-optim-resize.png){.thumbnail}
>>
>> ![TRUST KMS](images/trust_kms_3.png){.thumbnail}
>>
>> En principe, vCenter télécharge automatiquement le certificat public KMS. S'il ne le fait pas, faites-le manuellement.
>> 
>> Vous pouvez le récupérer depuis les endpoints fournis avec ce snippet (si vous avez besoin d'informations supplémentaires sur le certificat, consultez le [*toolkit*](#useful-information) en bas de ce guide) :
>>
>> ```shell
>> openssl s_client -connect eu-west-rbx.okms.ovh.net:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
>> ```
>>
>> Copiez le retour depuis `-----BEGIN CERTIFICATE-----` jusqu'à `-----END CERTIFICATE-----` dans votre interface web vSphere managé.
>>
>> Puis cliquez sur `Établir une relation de confiance > Télécharger le certificat KMS`{.action}.
>>
>> ![KMS Key Provider](images/okms_vsphere_upload_kms_cert-ptim-resize.png){.thumbnail}
>>
>> Pour terminer, collez le certificat public KMS récupéré depuis le snippet dans la fenêtre ouverte vSphere.
>>
>> ![KMS Key Provider](images/okms_vsphere_upload_kms_cert_2-optim-resize.png){.thumbnail}
>>
>> Attendez un petit moment et rafraichissez la page web vSphere comme expliqué précédemment (pour rafraichir une interface Web vSphere).
>>
> **Approuver l'instance de vCenter (avec CSR)**
>>
>> Sélectionnez votre **Fournisseur de clés** KMS (OKMS) que vous venez d'ajouter et cliquez sur le bouton `Approuver l'instance de vCenter`{.action}.
>>
>> Nous recommandons la méthode "Avec CSR" (plus sécurisée) en cliquant sur `Nouvelle demande de signature de certificat (CSR)`. Cependant, libre à vous de choisir celle qui vous convient le mieux et qui est compatible avec votre façon de faire.
>>
>> Pour plus d'informations sur les avantages et inconvénients de l'utilisation d'un CSR, lisez la documentation [KMS](/pages/manage_and_operate/kms/quick-start).
>>
>> **Avec CSR (recommandé)** :
>>
>> Afin de communiquer avec votre KMS, vous devez créer une demande de signature de certificat d'accès (CSR). Celle-ci sera utilisée pour l'ensemble des interactions avec le KMS OVHcloud et vSphere, que ce soit pour créer des clés de chiffrement ou effectuer des opérations avec ceux-ci.
>>
>> Chaque certificat contient une [identité OVHcloud](/pages/manage_and_operate/iam/identities-management) permettant de calculer les droits d'accès via l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).
>> 
>> Il est possible de générer ce certificat en fournissant votre propre clé de sécurité privée ("credentialId") via une `Demande de signature de certificat (CSR)`.
>>
>> Une fois que votre KMS est commandé et que vCenter approuve le KMS, lancez la génération du `CSR` afin que KMS approuve vCenter et signe le CSR.
>>
>> Cliquez sur `APPROUVER L'INSTANCE DE VCENTER`{.action} ou alors `ÉTABLIR UNE RELATION DE CONFIANCE > Faire que KMS approuve vCenter`{.action}.
>>
>> Sélectionnez `Nouvelle demande de signature de certificat (CSR)`{.action}, puis copiez ou téléchargez le CSR ci-dessous. Mettez-le à disposition du KMS OVHcloud depuis l'API v2 /okms et demandez à ce dernier de signer le certificat.
>>
>> ![Trust KMS server with CSR](images/kms_trust_vcenter_csr.png){.thumbnail}
>>
>> ![Trust KMS server with CSR](images/kms_trust_vcenter_csr_2.png){.thumbnail}
>>
>> Copiez votre CSR dans un fichier `csr.pem` afin de pouvoir le faire signer par le KMS OVHcloud (le format n'a pas d'importance sauf si vous souhaitez exécuter des commandes OpenSSL).
>>
>> Pour formater le CSR en json afin de fonctionner dans la console API OVHcloud, lancez la commande **Awk** ci-dessous :
>>
>> ```shell
>> awk '{printf "%s\\n", $0}' csr.pem
>> ```
>>
>> Collez le retour de cette commande dans l'appel API POST suivant, dans le champ `"csr":` , pour faire signer votre CSR auprès du KMS OVHcloud.
>>
>> Attention à bien remplir la suite des champs (`Urn`, `Description`, etc..) avec les bonnes permissions IAM.
>>
>> > [!api]
>> >
>> > @api {v2} /okms POST /okms/resource/{okmsId}/credential
>> >
>>
>> > **Paramètres** :
>> >
>> > - `okmsId`: ID de votre KMS OVHcloud (OKMS).
>> > - `Avec CSR fourni` : Chaine de confiance entre OKMS et VCenter avec ou sans CSR.
>>
>> ```shell
>> {
>> "csr": "------BEGIN CERTIFICATE REQUEST----\nMIICvDCCAaQCAQAwdzELMAkGA1UEBhMCVVMxDTALBgNVBAgMBFV0YWgxDzANBgNV\nBAcMBkxpbmRvbjEWMBQGA1UECgwNRGlnaUNQgSW5jERMA8GA1UECIRGIRGna\nlnlxGUNGMGBUb lnaWNlcnQuY29tMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8+To7d+2kPWeBv/orU3LVbJwDrSQbeKamCmo\nwp5bqDxIwV20zqRb7APUOKYoVEFFOEQs6T6gImnIolhbiH6m4zgZ/CPvWOBkcc2c\EmctttGb ldxRthNLOs1efOhdnWFuhI162qmcflgpiI\nWDuwq4C9f+YkeJhNn9dF5+owm8cOQmDrV8NNdiTqin8q3qYAHHJRW28glJUCZkTZ\nwIaSR6crBQ8TbYNE0dc+Caa3DOIkz1EOsHWTx+n0KfqbxXxXxXxDxDxDxDxBt4 yEp82G96/Ggcf7F33xMxe0yc+Xa6owIDAQABoAAwDQYJ\nKoZIhvcNAQEFBQADggEBAB0kcrFccSmFDmxox0Ne01UIqSsDqHgL+XmHTXJwre6D\nhJSZwbvEtOK0G3+dr4Fs11WuUNLsc5Lsx6a6a6a6a6a4aMMMGyMMMMMMGyXMYQmMMYQmM T3ZoCGpIXbw+iP3lmEEXgaQL0Tx5LFl/okKbKYwIqNiyKWOMj7ZR/wxWg/\nZDGRs55xuoeLDJ/ZRFf9bI+IaCUd1YrfYcHIl3G87Av+r49YVwqRDT0VDV7uLgqn\n29XI1VUNCPQGn/e7p6PyoXoXoeaRaaQo Uqy1hvJac9QFO2\n97Ob1alpHPoZ7mWiEuJwjBPii6a9M9G30nUo39lBi1w=\n------END CERTIFICATE REQUEST-------",
>> "description": "My user reader credential",
>> "identityURNs": [
>> "urn:v1:eu:identity:user:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/user", //  L’utilisateur avec lequel vous vous connectez à vos ressources vSphere managé et avec lequel vous avez les droits sur les produits (HPC, OKMS) en question.
>> "urn:v1:eu:identity:group:<<PASTE_YOUR_NICHANDLE_HERE>>-ovh/group" // Si vous utilisez des groupes, vous pouvez les ajouter ici. Le principe étant le même qu’avec un utilisateur au sein de l’écosysteme OVHcloud.
>> ],
>> "name": "user",
>> "validity": 365
>> } 
>> ```
>>
>> Un `"credentialId"` de signature vous sera donné pour prouver la signature effectuée. Il vous faut le récupérer avec le `okmsId` afin de lancer l'appel API GET suivant (voir ci-dessous) et récupérer le CSR signé.
>>
>> Copiez maintenant le CSR signé de l'appel API suivant :
>>
>> > [!api]
>> >
>> > @api v2 /okms GET /okms/resource/{okmsId}/credential/{credentialId}
>> >
>>
>> > **Paramètres** :
>> >
>> > - `credentialId` : ID généré lors de votre appel API POST /okms/resource/{okmsId}/credential avec CSR ("fromCSR": true,)
>> > - `okmsId` : ID de votre KMS OVHcloud.
>> >
>>
>> Copiez le `"certificatePEM"` (CSR signé) à partir de  `-----BEGIN CERTIFICATE-----` jusqu'à la fin de `-----END CERTIFICATE-----`.
>> 
>> Lancez ensuite la commande `AWK` ci-dessous pour le formater afin que l'interface Web vSphere puisse le lire :
>>
>> ```shell
>>  awk '{gsub(/\\n/,"\n")}1' csr_signé.pem
>> ```
>>
>> Copiez le retour de la commande. Il ne vous reste maintenant plus qu'à uploader le CSR signé dans l'interface Web vSphere.
>> 
>> Cliquez sur `ÉTABLIR UNE RELATION DE CONFIANCE`{.action}, puis sur `KMS Trust Vcenter > Upload le certificat de CSR signé`{.action}.
>>
>> ![Trust KMS server with CSR](images/okms_vsphere_upload_signed_csr-optim-resize.png){.thumbnail}
>>
>> ![Trust KMS server with CSR](images/okms_vsphere_upload_signed_csr_2-optim-resize.png){.thumbnail}
>>
>> Vérifiez que la connexion a bien été établie en sélectionnant votre fournisseur de clé KMS OVHcloud.
>>
>> L'option `Connecté` doit être confirmée avec un crochet de validation vert (comme sur la capture ci-dessous)
>>
>> ![Trust KMS server with CSR](images/okms_vsphere_okms_validation.png){.thumbnail}
>>

///

### Étape 5 - Création d'une stratégie de stockage VM (obligatoire) <a name="storage-policy"></a>

/// details | Comment créer une stratégie de stockage VM pour activer le chiffrement dans VMware vSphere ?

Dans l'étape 6, vous accomplirez la finalisation de l'activation du chiffrement sur une machine virtuelle avec OKMS en utilisant une **Politique de stockage** que nous allons créer à présent.

Cette politique de stockage utilise des règles basées au niveau de l'hôte. Vous devez donc bien avoir activé `Règles basées sur l'hôte`{.action} puis avoir aussi activé les composants de stratégie de stockage. 

Pour créer une politique de stockage, il vous faut accéder au vSphere de votre PCC. Si vous avez suivi les étapes précédentes, vous devez être déjà connecté à l'[espace client OVHcloud](/links/manager), après avoir ajouté votre KMS OVHcloud dans [l'étape 4](#add-okms).

Vous devez maintenant aller dans `Politiques et profils > Stratégies de stockage VM`{.action}.

![VM Storage Policies Creation](images/vsphere_vm_policie.png){.thumbnail}

Cliquez sur `CRÉER`{.action} dans **Stratégies de stockage VM**.

![VM Storage Policies Creation](images/vsphere_vm_policie_2.png){.thumbnail}

La fenêtre de création de stratégie s'ouvre maintenant, vous êtes à l'étape 1 `Nom et description`{.action}.

Vous devez determiner votre serveur vCenter, qui est le PCC sur lequel vous voulez créer votre stratégie de stockage.

Une fois votre `PCC-XXX-XXX-XXX-XXX.ovh.XX`{.action} choisi, donnez un `Nom`{.action} et une `Description`{.action}.

Cliquez sur `SUIVANT`{.action} pour continuer.

![VM Storage Policies Creation](images/vsphere_vm_policie-optim-resize.png){.thumbnail}

Vous arrivez à l'étape 2, **Structure de la stratégie**.

Nous allons ici activer les **stratégies de règles basées sur l'hôte**. Cochez la case `Activer les règles basées sur l'hôte`{.action}.

Pour continuer, cliquez sur `SUIVANT`{.action}.

![VM Storage Policies Creation 02](images/vsphere_vm_policie_2-optim-resize.png){.thumbnail}

Pour l'étape 3, vous devez confirmer les choix de l'étape précédente en activant la validation du composant de stratégie de stockage (le chiffrement).

Pour les besoins de ce guide, nous allons laisser le réglage par défaut `Default encryption properties`{.action}.

Vous devez donc cliquer sur `Chiffrement`{.action}.

Puis **utiliser le composant de stratégie de stockage** `Default encryption properties`{.action}.

- **Composant de stratégie de stockage :** Default encryption properties.
- **Description** : Storage policy component for VM and virtual disk encryption.
- **Fournisseur** : Chiffrement de VM VMware.
- **Autoriser les filtres d'E/S avant le chiffrement** : False.

À titre informatif, ces services de données disponibles peuvent inclure le chiffrement, le contrôle d'E/S, la mise en cache, etc.. Les services basés sur l'hôte seront appliqués en complément des règles spécifiques aux banques de données.

Pour terminer l'étape 3, cliquez sur `SUIVANT`{.action}.

![VM Storage Policies Creation 03](images/vsphere_vm_policie_3-optim-resize.png){.thumbnail}

Pour l'étape 4 (compatibilité de stockage), vous avez la compatibilité et l'incompatibilité de votre centre de données (PCC) Hosted Private Cloud VMware on OVHcloud.

Quand vous avez terminé de vérifier les compatibilités de votre espace de stockage, cliquez sur `SUIVANT`{action}.

![VM Storage Policies Creation 04](images/vsphere_vm_policie_4-optim-resize.png){.thumbnail}

Pour terminer la dernière étape (étape 5), cliquez sur `TERMINER`{.action}.

Votre stratégie étant créée, vous pouvez maintenance procéder à l'activation du chiffrement sur une de vos machines virtuelles.

![VM Storage Policies Creation 05](images/vsphere_vm_policie_5_optim-resize.png){.thumbnail}

///

### Étape 6 - Activation du chiffrement sur une VM (obligatoire) <a name="activation-encryption"></a>

/// details | Comment activer le chiffrement dans une VM avec la politique de stockage ?

Localisez la machine virtuelle (VM) que vous souhaitez chiffrer. Éteignez-la si elle est allumée (obligatoire).

Faites un clic droit sur la machine virtuelle sélectionnée pour afficher le menu contextuel ou cliquez sur `ACTIONS`{.action}. 

Puis sélectionnez `Stratégies de VM`{.action}.

À la suite de ça, choisissez `Modifier les stratégies de stockage VM`{.action}.

Cela ouvrira une fenêtre ou un panneau où vous pourrez modifier les politiques de stockage de la VM sélectionnée.

![VM Storage Policies Encryption](images/okms_vsphere_vm_policies-optim-resize.png){.thumbnail}

Recherchez les options de chiffrement ou de sécurité dans les politiques de stockage pour activer le chiffrement KMS pour cette VM.

![VM Storage Policies Encryption 03](images/okms_vsphere_vm_policies_3-optim-resize.png){.thumbnail}

Si vous déployez une nouvelle VM depuis un template OVHcloud OVF, vous avez plusieurs choix pour chiffrer votre VM :

- **Thick Provision Lazy Zeroed.**
- **Thin Provision.**
- **Thick Provision Eager Zeroed.**

Choisissez celle qui vous convient le mieux. En cas de doute, consultez le guide « [Quel format de disque choisir](/pages/bare_metal_cloud/managed_bare_metal/choosing-disk-type) ».

Cochez la case `Chiffrer cette VM`{.action}

![VM Storage Policies Encryption](images/okms_vsphere_deploy_vm_policies.png){.thumbnail}

Après avoir apporté les modifications nécessaires, enregistrez les modifications et fermez la fenêtre.

Vous avez maintenant édité les politiques de stockage de la VM et activé le chiffrement KMS pour votre serveur. Un petit cadenas sur le résumé des informations de votre machine virtuelle le confirme.

Le même cadenas est aussi présent dans la vue générale de votre VM ainsi que dans la description du chiffrement, ce qui confirme que votre politique fonctionne avec le serveur OKMS et que le chiffrement est **activé**.

![VM Storage Policies Encryption Confirmation 04](images/okms_vsphere_vm_policies_4-optim-resize.png){.thumbnail}

///

## Aller plus loin <a name="go-further"></a>

### Informations utiles TLS OKMS <a name="useful-information"></a>

Informations utiles afin de manipuler vos certificats TLS avec OpenSSL.

Attention quand vous copiez-coller votre CSR, il doit être formaté pour fonctionner avec le format json.

Des **\n** doivent être ajoutés à chaque saut de ligne. Pour ça vous pouvez lancer cette commande OpenSSL afin de convertir votre certificat en format pkcs12 :

- `openssl pkcs12 -export -inkey client.key -in client.crt -out cert_key.p12`

**CSR decode** :

Pour décoder votre CSR, vous pouvez exécuter cette commande OpenSSL avec votre CSR:

- `openssl req -in mycsr.csr -noout -text`.

Ou alors utiliser un outil web plus graphique, tel que [sslshopper](https://www.sslshopper.com/csr-decoder.html).

**Certificate decode** :

- `openssl x509 -in certificate.crt -text -noout`.

**Certificate Key Matcher** :

Afin de verifier si le CSR correspond à votre certificat, vous pouvez le faire avec ces commandes OpenSSL :

```shell
openssl pkey -in privateKey.key -pubout -outform pem | sha256sum
openssl x509 -in certificate.crt -pubkey -noout -outform pem | sha256sum
openssl req -in CSR.csr -pubkey -noout -outform pem | sha256sum 
```

**SSL Converter**

**OpenSSL Convert PEM** :

- Convert PEM to DER : `openssl x509 -outform der -in certificate.pem -out certificate.der`.
- Convert PEM to P7B : `openssl crl2pkcs7 -nocrl -certfile certificate.cer -out certificate.p7b -certfile CACert.cer`.
- Convert PEM to PFX : `openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt`.

**OpenSSL Convert DER**

Convert DER to PEM :

- `openssl x509 -inform der -in certificate.cer -out certificate.pem`.

**OpenSSL Convert P7B** :

- Convert P7B to PEM : `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`.

**Convert P7B to PFX** :

- `openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer`.
- `openssl pkcs12 -export -in certificate.cer -inkey privateKey.key -out certificate.pfx -certfile CACert.cer`.

**OpenSSL Convert PFX** :

- Convert PFX to PEM : `openssl pkcs12 -in certificate.pfx -out certificate.cer -nodes`.

**Formater les CSR pour VMware**

Adaptez la commande avec votre fichier CSR.

```shell
# Formater pour l'OVHcloud api :
awk '{printf "%s\\n", $0}' file

# Formater pour vSphere :
awk '{gsub(/\\n/,"\n")}1' file
```

**Récupérer le certificat public OKMS manuellement (facultatif)**

Si vous rencontrez des difficultés lors de l'étape 4 ([faire en sorte que vCenter fasse confiance à KMS](#trust-okms)), vous pouvez le télécharger manuellement : copiez depuis un shell le retour snippet et collez-le dans l'interface web vSphere "Télécharger le certificat KMS".

Vous pouvez lancer ce snippet (il faut avoir python et OpenSSL installés). Il permet d'exporter et formater le certificat public OKMS.

Avec `Python` et `OpenSSL`, changez l'input OKMS avec l'URL de la bonne région.

```shell
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
Ou alors avec `Sed` et `OpenSSL`:

```shell
openssl s_client -connect eu-west-rbx.okms.ovh.net:443 2>/dev/null </dev/null |  sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
```

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).