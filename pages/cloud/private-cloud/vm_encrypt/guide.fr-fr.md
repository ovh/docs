---
title: Activation du chiffrement des machines virtuelles (VM Encryption)
slug: vm-encrypt
excerpt: Découvrez comment mettre en oeuvre le chiffrement de vos machines virtuelles
section: Fonctionnalités VMware vSphere
order: 07
---

**Dernière mise à jour le 18/02/2018**

## Objectif

Ce guide a pour objectif d'expliquer les détails de la mise en oeuvre de VM Encryption sur l'offre Private Cloud d'OVH, en employant une stratégie de stockage utilisant un serveur de clé (*Key Management Server* ou KMS) externe.

**Découvrez comment mettre en oeuvre le chiffrement de vos machines virtuelles avec VM Encryption.**

## Prérequis

- Avoir souscrit une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
- Disposer d'un serveur de clé (KMS) externe compatible **[KMIP](https://en.wikipedia.org/wiki/Key_Management_Interoperability_Protocol_(KMIP)){.external} 1.1** et dans la [matrice de compatibilité](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms&details=1&feature=293&page=1&display_interval=500&sortColumn=Partner&sortOrder=Asc){.external} VMware.
- Avoir accès à l’interface de gestion vSphere.
- Posséder des machines virtuelles avec une version Hardware 13.

## En pratique

### Récupérer l'empreinte du certificat du serveur de clé (KMS)

Suivant votre KMS, vous pouvez vous connecter au serveur à l'aide de votre navigateur. Cliquez ensuite sur `View Certificate`{.action}, puis `Thumbprint`{.action}.

![](images/certificate_thumbprints_01.png){.thumbnail}

![](images/certificate_thumbprints_02.png){.thumbnail}

Extrayez ensuite la valeur de ligne `SHA1 Fingerprint`.

Voici une autre méthode avec OpenSSL :

```shell
openssl s_client -connect 192.0.2.1:5696 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

Ici, il s'agit de la valeur à droite du signe égal :


```shell
> SHA1 Fingerprint=7B:D9:46:BE:0C:1E:B0:27:CE:33:B5:2E:22:0F:00:84:F9:18:C6:61
```

### Enregistrer votre serveur de clé (KMS)

#### Via l'espace client OVH

Dans votre espace client, assurez-vous de vous situer dans la section « Dédié ». Cliquez sur `Private Cloud`{.action} dans la barre de services à gauche, puis sélectionnez le service Private Cloud concerné.

Depuis la page principale du service, cliquez sur `Sécurité`{.action}.

![](images/vm-encrypt_manager_01.png){.thumbnail}

Plus bas dans la page se trouve la section « **Virtual Machine Encryption Key Management Servers** ». Cliquez sur le bouton `Ajouter un nouveau serveur KMS`{.action}.

![](images/vm-encrypt_manager_02.png){.thumbnail}

![](images/vm-encrypt_manager_03.png){.thumbnail}

Dans la nouvelle fenêtre qui s'affiche, saisissez les informations suivantes :

* l'adresse IP du KMS ;
* le SSLThumbprint du KMS Server précédemment récupéré.

Validez la demande de validation de prise en compte de cette documentation, puis validez en cliquant sur `Suivant`{.action}. 

![](images/vm-encrypt_manager_04.png){.thumbnail}

Une fenêtre affiche la progression de la tâche.

#### Avec l'API OVH

Les fonctions de chiffrement peuvent être activées grâce à l'API OVH.

Pour récupérer votre « serviceName », utilisez l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud
>

Pour vérifier que le chiffrement n'est pas encore activé, effectuez cet appel API :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/vmEncryption
>

```shell
>     "state": "disabled"
```


Effectuez ensuite l'enregistrement du KMS :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/kms
>

Pour réaliser cette manipulation, munissez-vous des informations suivantes :

* le « serviceName » récupéré précédemment ;
* l'adresse IP du KMS ;
* le SSLThumbprint du KMS Server précédemment récupéré.

### Ajouter votre serveur de clé (KMS) sur le vCenter

#### À propos de cette partie

**Le vCenter Server crée un cluster KMS lorsque vous ajoutez votre première instance KMS.** Lorsque vous ajoutez le KMS, vous êtes invité à définir ce cluster par défaut. Vous pouvez le modifier ultérieurement. Une fois que le vCenter a créé le premier cluster, vous pouvez lui ajouter de nouvelles instances KMS du même fournisseur. Vous pouvez configurer le cluster avec une instance KMS au minimum.

Si votre environnement prend en charge les solutions KMS de différents fournisseurs, vous pouvez ajouter plusieurs clusters KMS. S'il comprend plusieurs clusters KMS et que vous supprimez le cluster par défaut, vous devez en définir un autre. Voir « Définir le cluster KMS par défaut ».

#### Procédure

Initiez la manipulation en vous connectant à votre Private Cloud avec le client web vSphere. Parcourez ensuite votre liste d'inventaire et sélectionnez le vCenter concerné. Positionnez-vous sur « Gérer », puis sur « Key Management Servers ». Cliquez sur `Ajouter KMS`{.action}, spécifiez les informations KMS dans l'assistant qui s'affiche, puis cliquez sur `Ok`{.action}.
Validez le certificat en cliquant sur `Trust`{.action}.

![](images/vm-encrypt_01.png){.thumbnail}

Choisissez les options suivantes :

|Nom de l'option|Description|
|---|---|
|« KMS cluster »|Sélectionnez « Créer nouveau cluster » pour en obtenir un nouveau. Si un cluster existe déjà, vous pouvez le sélectionner.|
|« Cluster name »|Nom du cluster KMS. Vous pourriez avoir besoin de ce nom pour vous connecter au KMS si votre vCenter devient indisponible. Le nom de la grappe est très important pour être unique et garder une note de ce même élément.|
|« Server alias »|Alias pour le KMS. Vous pourriez avoir besoin de cet alias pour vous connecter au KMS si votre vCenter devient indisponible.|
|« Server address »|Adresse IP ou FQDN du KMS.|
|« Server port »|Port sur lequel le serveur vCenter se connecte au KMS. Le port standard KMIP est 5696. Il peut varier si le KMS d'un autre fournisseur est configuré sur un port spécifique.|
|« Proxy address »|Laisser ce champ vide.|
|« Proxy port »|Laisser ce champ vide.|
|« User name »|Certains fournisseurs de KMS permettent aux utilisateurs d'isoler les clés de chiffrement utilisées par différents utilisateurs ou groupes en spécifiant un nom d'utilisateur et un mot de passe. Spécifiez un nom d'utilisateur uniquement si votre KMS prend en charge cette fonctionnalité et si vous avez l'intention de l'utiliser.|
|« Password »|Certains fournisseurs de KMS permettent aux utilisateurs d'isoler les clés de chiffrement utilisées par différents utilisateurs ou groupes en spécifiant un nom d'utilisateur et un mot de passe. Spécifiez un mot de passe uniquement si votre KMS prend en charge cette fonctionnalité et si vous avez l'intention de l'utiliser.|


#### Import du certificat KMS

La plupart des fournisseurs de KMS ont besoin d'un certificat pour [établir une connexion sécurisée](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.security.doc/GUID-0212CEF2-7871-4E00-ADF2-0C71401D5E1A.html){.external} avec le vCenter.

Depuis le vCenter où vous avez ajouté le serveur KMS, sélectionnez celui-ci. Dans « Toutes les options », cliquez sur `Établir un lien de confiance avec KMS`{.action}.

> [!warning]
>
> Assurez-vous que le certificat n'est pas chiffré avec un mot de passe lorsque vous le téléchargez à partir du KMS. Par exemple, si vous créez un utilisateur, créez-en un sans mot de passe et téléchargez le certificat pour l'utilisateur KMS.
> 

![](images/vm-encrypt_02.png){.thumbnail}

#### Vérifier que le KMS est configuré

Vérifiez que le « **Connection Status** » correspondant au KMS est en mode « Normal ».

![](images/vm-encrypt_03.png){.thumbnail}

#### Modifier la politique de stockage de « VM Encryption Storage »

Créez une machine virtuelle. Une fois celle-ci créée, effectuez un clic droit sur celle-ci. Cliquez alors sur `VM Policies`{.action}, puis sur `Edit VM Storage Policies`{.action}.

![](images/vm-encrypt_04.png){.thumbnail}

Sélectionnez les fichiers de la machine virtuelle et les autres disques durs qui doivent être chiffrés.

![](images/vm-encrypt_05.png){.thumbnail}

Assurez-vous que les tâches se sont effectuées sans erreur.

> [!primary]
>
> Si le KMS n'est pas configuré correctement et qu'il y a des dysfonctionnements avec l'échange de clés entre vCenter et KMS, il y aura une erreur « RuntimeFault » dans la tâche comportant le message d'erreur « Cannot generate key ».
>

#### vMotion chiffré

Concernant le vMotion, le chiffrement fonctionne au niveau de la machine virtuelle. Pour la synchronisation, des clés de cryptage de 256 bits sont utilisées.

Le chiffrement du trafic vMotion fonctionne au niveau du noyau de la machine virtuelle avec l'algorithme AES-GCM (Advanced Encryption Standard-Galois Counter Mode) largement utilisé.

Modifiez ensuite votre machine virtuelle et cliquez sur `VM Options`{.action}

Vous devez sélectionner les options si votre vMotion doit être chiffré. Il existe trois politiques pour du vMotion chiffré :

|Statut|Description|
|---|---|
|Disabled|Éteint.|
|Opportunistic|Chiffrement uniquement s'il est pris en charge par l'hôte source et l'hôte cible ESXi. Dans le cas contraire, vMotion ne sera pas chiffré.|
|Required|Le chiffrement sera utilisé.|

![](images/vm-encrypt_06.png){.thumbnail}

Le déplacement des machines entre les hôtes est effectué par l'échange de clés uniques, qui sont générées et servies par le serveur vCenter, plutôt que par KMS.

#### Vérifications de la configuration

![](images/vm-encrypt_07.png){.thumbnail}

![](images/vm-encrypt_08.png){.thumbnail}

![](images/vm-encrypt_09.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
