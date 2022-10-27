---
title: "Utilisation d'Active Directory comme source d'authentification (Federation)"
slug: federation
excerpt: "Découvrez comment utiliser votre serveur Active Directory comme source d'authentification pour vos utilisateurs vSphere"
section: Fonctionnalités VMware vSphere
---

**Dernière mise à jour le 27/10/2022**

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

Afin de préparer la mise en place de la configuration, vous devez récupèrer les informations suivantes :

- Nom de domaine Active Directory (FQDN).
- Alias de domaine Active Directory (Nom NetBIOS).
- Adresse IP publique du serveur Active Directory.
- Nom d'hôte du serveur LDAPS Active Directory. Nom utilisé dans le certificat SSL du service LDAPS, ce nom doit résoudre sur l'adresse IP publique du serveur Active Directory.
- Port du service LDAPS (par défaut 636).
- Base DN (Base Distinguished Name) pour les utilisateurs. Il s'agit du DN à partir duquel seront recherchés les utilisateurs. Par exemple, cn=Users,dc=example,dc=com
- Base DN (Base Distinguished Name) pour les groupes. Il s'agit du DN à partir duquel seront recherchés les groupes. Par exemple, cn=Groups,dc=example,dc=com
- Identifiant et mot de passe d'un utilisateur du domaine qui sera utilisé pour la connection au serveur LDAPS. Il doit être au minimum en lecture seule sur la section du serveur Active Directory pour les deux « Base DN » choisis précédemment. Identifiant pre-Windows 2000 sous la forme UPN (user@example.com).

Pour plus d'informations, vous pouvez vous réfèrer à la [documentation VMware à ce sujet](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.authentication.doc/GUID-98B36135-CDC1-435C-8F27-5E0D0187FF7E.html){.external}.

En complément des informations précédentes, vous devez récupèrer l'empreinte du certificat SSL (SHA1 Fingerprint) du serveur LDAPS Active Directory.

Vous pouvez récupérer cette information par la méthode de votre choix.

- Via cette commande PowerShell sur le serveur Active Directory :

```shell
Get-ChildItem -Path Cert:\LocalMachine\MY | Select-Object -property FriendlyName, Subject, NotBefore, NotAfter, @{label='Thumbprint';'Expression'={$_.thumbprint -replace '(..(?!$))','$1:'}}
```

Ici, il s'agit de la valeur à droite du signe deux-points ( : ) :

```powershell
> Thumbprint : BB:46:CA:6B:FC:92:4E:96:B4:BB:6E:44:7E:8F:AD:4C:C9:32:AB:AB
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
nslookup pcc-198-51-100-121.ovh.com
```

Ici, il s'agit de la valeur à la fin de la dernière ligne :

```console
> Address:  198.51.100.121
```

Il est également possible d'utiliser la commande suivante (depuis une machine Linux/Unix/Mac distante) :

```bash
host pcc-198-51-100-121.ovh.com
```

Ici, il s'agit de la valeur à la fin de la ligne :

```shell
> pcc-198-51-100-121.ovh.com has address 198.51.100.121
```

Utilisez cette adresse IP pour autoriser votre Hosted Private Cloud à accèder à votre serveur LDAPS Active Directory (par défaut sur le port TCP 636).

Cette opération s'effectue dans la configuration du pare-feu de votre Active Directory ou de votre entreprise.

Exemple de configuration de rgle de pare-feu entrant :

|Adresse IP distante (source)|Adresse IP locale (destination)|Port distant (source)|Port local (destination)|Protocole|
|---|---|---|---|---|
|198.51.100.121|Toutes les adresses|Tous les ports|636|TCP|

Adaptez cette configuration à votre entreprise et mettez en place la régle de pare-feu.

### Ajouter votre serveur Active Directory comme source d'authentification

A partir de votre espace client OVHcloud allez dans 





> [!primary]
>
> Si les informations fournies ne sont pas valides, l'opération concernée sera annulée et un message indiquera l'erreur renvoyée.
>
> ![Opération annulée](images/federation_canceled.png){.thumbnail}

### Autoriser un utilisateur Active Directory à accéder à votre Hosted Private Cloud

Maintenant que votre cluster VMware est connecté à votre annuaire active directory vous pouvez rajouter des utisateurs de cet annuaire pour se connecter sur votre cluster VMware.




> [!primary]
>
> Par défaut, l'utilisateur ne possède aucune permission sur votre Hosted Private Cloud. Il pourra se connecter à votre Hosted Private Cloud mais n'aura aucun accès. Vous pouvez ajuster les permissions depuis l'espace client.
>

### Autoriser un groupe Active Directory à accéder à votre Hosted Private Cloud

Vous avez la possibilité d'autoriser directement un ensemble d'utilisateurs (groupe) issu de votre serveur Active Directory à accéder à votre Hosted Private Cloud au travers de l'espace client OVHcloud.


Assurez-vous que l'opération renvoyée s'effectue sans erreur. Vous pouvez la suivre depuis [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), dans l'onglet `Opérations`{.action} de votre Hosted Private Cloud.<br>
Si les informations fournies ne sont pas valides, l'opération concernée sera annulée et un message indiquera l'erreur renvoyée.

Une fois autorisés, le groupe et ses permissions seront modifiables directement depuis votre espace client OVHcloud comme n'importe quel utilisateur de votre Hosted Private Cloud.

> [!primary]
>
> Par défaut, le groupe ne possède aucune permission sur votre Hosted Private Cloud. Ses membres pourront se connecter à votre Hosted Private Cloud mais n'auront aucun accès. Vous pouvez ajuster les permissions depuis l'espace client.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
