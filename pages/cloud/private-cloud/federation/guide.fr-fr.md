---
title: "Utilisation d'Active Directory comme source d'authentification (Federation)"
slug: federation
excerpt: "Découvrez comment utiliser votre serveur Active Directory comme source d'authentification pour vos utilisateurs vSphere"
section: Fonctionnalités VMware vSphere
---

**Dernière mise à jour le 23/11/2022**

## Objectif

Ce guide a pour objectif d'expliquer les détails de la mise en place d'un serveur Active Directory comme source d'authentification sur l'offre Hosted Private Cloud OVHcloud.

**Découvrez comment utiliser votre serveur Active Directory comme source d'authentification pour vos utilisateurs vSphere.**

## Prérequis

- Avoir souscrit une offre [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Disposer d'un serveur Active Directory acessible depuis une adresse IP publique et possédant un [certificat SSL valide pour le service LDAPS](https://docs.microsoft.com/fr-fr/troubleshoot/windows-server/identity/enable-ldap-over-ssl-3rd-certification-authority){.external}.
- Disposer d'un accès utilisateur au domaine Active Directory associé, avec au minimum un accès en lecture seule (pour la connexion LDAPS).
- Avoir accès à l’interface de gestion vSphere de votre Hosted Private Cloud.

## En pratique

### Récupérer les informations nécessaires

La connexion du vCenter au serveur Active Directory est réalisée via le protocole LDAPS fourni par le serveur Active Directory.

Afin de préparer la mise en place de la configuration, vous devez récupérer les informations suivantes :

- Nom de domaine Active Directory (FQDN).
- Alias de domaine Active Directory (Nom NetBIOS).
- Adresse IP publique du serveur Active Directory.
- Nom d'hôte du serveur LDAPS Active Directory. Nom utilisé dans le certificat SSL du service LDAPS, ce nom doit résoudre sur l'adresse IP publique du serveur Active Directory.
- Port du service LDAPS (par défaut 636).
- Base DN (Base Distinguished Name) pour les utilisateurs. Il s'agit du DN à partir duquel seront recherchés les utilisateurs. Par exemple, cn=Users,dc=example,dc=com
- Base DN (Base Distinguished Name) pour les groupes. Il s'agit du DN à partir duquel seront recherchés les groupes. Par exemple, cn=Groups,dc=example,dc=com
- Identifiant et mot de passe d'un utilisateur du domaine qui sera utilisé pour la connection au serveur LDAPS. Il doit être au minimum en lecture seule sur la section du serveur Active Directory pour les deux « Base DN » choisis précédemment. Identifiant pre-Windows 2000 sous la forme UPN (user@example.com).

Pour plus d'informations, vous pouvez vous référer à la [documentation VMware à ce sujet](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.authentication.doc/GUID-98B36135-CDC1-435C-8F27-5E0D0187FF7E.html){.external}.

En complément des informations précédentes, vous devez récupérer l'empreinte du certificat SSL (SHA1 Fingerprint) du serveur LDAPS Active Directory.

Vous pouvez récupérer cette information par la méthode de votre choix.

- Via cette commande PowerShell sur le serveur Active Directory :

```shell
Get-ChildItem -Path Cert:\LocalMachine\MY | Select-Object -property FriendlyName, Subject, NotBefore, NotAfter, @{label='Thumbprint';'Expression'={$_.thumbprint -replace '(..(?!$))','$1:'}}
```

Ici, il s'agit de la valeur à droite du signe deux-points ( : ) :

```powershell
> Thumbprint : XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX
                
```

- Vous pouvez aussi utiliser la commande OpenSSL suivante (depuis une machine Linux/Unix/Mac distante) :

```powershell
openssl s_client -connect ad.example.com:636 < /dev/null 2>/dev/null | openssl x509 -fingerprint -noout -in /dev/stdin
```

Ici, il s'agit de la valeur à droite du signe égal ( = ) :

```shell
> SHA1 Fingerprint=XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:Xx
```

### Autoriser la connexion au serveur Active Directory depuis votre Hosted Private Cloud

Récupérez l'adresse IP de votre Hosted Private Cloud par la méthode de votre choix.

Via cette commande sur le serveur Active Directory ou une machine Windows distante :

```bash
nslookup fqdn-mypcc
```

Ici, il s'agit de la valeur à la fin de la dernière ligne :

```console
> Address:  XXX.XXX.XXX.XXX
```

Il est également possible d'utiliser la commande suivante (depuis une machine Linux/Unix/Mac distante) :

```bash
host fqdn-my-pcc
```

Ici, il s'agit de la valeur à la fin de la ligne :

```shell
> fqdn-my-pcc has address XXX.XXX.XXX.XXX
```

Utilisez cette adresse IP pour autoriser votre Hosted Private Cloud à accéder à votre serveur LDAPS Active Directory (par défaut sur le port TCP 636).

Cette opération s'effectue dans la configuration du pare-feu de votre Active Directory ou de votre entreprise.

Exemple de configuration de règle de pare-feu entrant :

|Adresse IP distante (source)|Adresse IP locale (destination)|Port distant (source)|Port local (destination)|Protocole|
|---|---|---|---|---|
|XXX.XXX.XXX.XXX|Toutes les adresses|Tous les ports|636|TCP|

Adaptez cette configuration à votre entreprise et mettez en place la règle de pare-feu.

### Ajouter votre serveur Active Directory comme source d'authentification

A partir de votre espace client OVHcloud allez dans les paramètres OVHcloud de cluster VMware.

Positionnez-vous sur l'onglet `Utilisateurs`{.action} et cliquez sur `Ajouter un Active Directory LDAPs`{.action} dans la rubrique **Active Directories (LDAPs)**.

![01 add directory 01](images/01-add-directory01.png)

Saisissez ces informations : 

* **Nom de domaine Active Directory** : Nom de domaine active directory.
* **Alias de domaine Active Directory**: Nom NetBIOS de votre domaine.
* **Description (Facultatif)** :  Nom de domaine active directory.
* **Adresse IP du serveur Active Directory** : Adresse IP publique d'accès à votre serveur LDAPS.
* **Nom d'hôte du serveur LDAPS Active Directory** : Nom FQDN public de votre serveur Active directory.
* **Port du service LDAPS*** : Numéro du port du service LDAPS.
* **Empreinte du certificat SSL** : Empreinte du certificat SSL récupéré précédemment.
* **Identifiant utilisateur Active Directory** : Nom d'utilisateur Active directory suivi de @nomdedomaine-activedirectory.
* **Mot de passe utilisateur Active Directory** : Mot de passe de l'utilisateur Active Directory.
* **Base DN pour les utilisateurs** : Nom DN (Syntaxe LDAP) du dossier contenant les utilisateurs comme par exemple cn=Users,dc=example,dc=com pour le domaine example.com.
* **Base DN pour les groupes** : Nom DN (Syntaxe LDAP) du dossier contenant les groupes comme par exemple cn=Users,dc=example,dc=com pour le domaine example.com.

Ensuite cliquez sur `Executer`{.action}.

![01 add directory 02](images/01-add-directory02.png)

Une fenêtre apparait pour afficher l'état d'avancement, attendez d'être à cent pour cent et cliquez sur `Fermer`{.action}.

> [!primary]
>
> Si un paramètre n'est pas valide la tâche sera annulée avant d'arriver à 100%, dans ce cas attendez quelques minutes pour que l'annulation soit complète avant de relancer la configuration.
>

![01 add directory 03](images/01-add-directory03.png)

Votre domaine Active Directory est relié à votre cluster VMware. Vous pouvez maintenant ajouter des utilisateurs et des groupes de votre annuaire Active Directory pour vous connecter à votre cluster VMware.

![01 add directory 04](images/01-add-directory04.png)


### Autoriser un utilisateur Active Directory à accéder à votre Hosted Private Cloud

Maintenant que votre cluster VMware est connecté à votre annuaire active directory vous pouvez rajouter des utilisateurs de cet annuaire pour se connecter sur votre cluster VMware.

Cliquez sur `Importer un utilisateur`{.action}

![02 add user 01](images/02-adduser01.png)

Sélectionnez votre annuaire Active Directory, cliquez sur `Importer un utilisateur`{.action}, saisissez votre nom d'utilisateur au format UPN `username@nomdedomaineactivedirectory` et cliquez sur `Suivant`{.action}.

![02 add user 02](images/02-adduser01.png)

Une fenêtre avec l'état d'avancement de la tâche apparait, attendez d'être à cent pour cent et cliquez sur `Fermer`{.action}.

![02 add user 03](images/02-adduser03.png)

Un nouvel utilisateur apparait dans le manager, vous pouvez l'utilisez pour vous connecter à votre cluster VMware. 

> [!primary]
>
> Par défaut, l'utilisateur ne possède aucune permission sur votre Hosted Private Cloud. Il pourra se connecter à votre Hosted Private Cloud mais n'aura aucun accès. Vous pouvez ajuster les permissions depuis l'espace client.
>

![02 add user 04](images/02-adduser04.png)


### Autoriser un groupe Active Directory à accéder à votre Hosted Private Cloud

Vous avez la possibilité d'autoriser directement un groupe d'utilisateurs issu de votre serveur Active Directory à accéder à votre Hosted Private Cloud au travers de l'espace client OVHcloud.

Cliquez sur `Importer un utilisateur`{.action}.

![03 add group 01](images/03-addgroup01.png)

Sélectionnez votre annuaire Active Directory, cliquez sur `Importer un groupe`{.action}, saisissez le `nom de votre groupe` et cliquez sur `Suivant`{.action}.

![03 add group 02](images/03-addgroup02.png)

Une fenêtre avec l'état d'avancement de la tâche apparait, attendez d'être à cent pour cent et cliquez sur `Fermer`{.action}.

![03 add group 03](images/03-addgroup03.png)

Le groupe apparait dans la liste utilisateurs de votre cluster VMware, les membres de ce groupe auront la possibilité de se connecter à votre cluster VMware.

> [!primary]
>
> Par défaut, les membre du groupe ne possèdent aucunes permissions sur votre Hosted Private Cloud. Il pourra se connecter à votre Hosted Private Cloud mais n'aura aucun accès. Vous pouvez ajuster les permissions depuis l'espace client.
>

![03 add group 04](images/03-addgroup04.png)


## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
