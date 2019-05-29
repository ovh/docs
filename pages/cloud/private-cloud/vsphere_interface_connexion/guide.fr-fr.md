---
title: Se connecter à l’interface vSphere
slug: connexion-interface-vsphere
excerpt: Découvrez les différentes façons de se connecter à vSphere
section: Premiers pas
order: 2
---

**Dernière mise à jour le 14/02/2019**

## Objectif

**Ce guide vous présente les différentes façons de se connecter à vSphere.**

## Prérequis

- Être contact administrateur du Private Cloud, celui-ci recevant les identifiants de connexion.
- Avoir créé un utilisateur actif dans l'espace client.


## En pratique

### Récupération des identifiants

Les identifiants sont envoyés par e-mail durant la création du Private Cloud, lors d’une modification du mot de passe ou à la création d’un utilisateur :

```
adresse IP/Nom : pcc-xxx-xxx-xxx-xxx.ovh.com nom d’utilisateur : admin mot de passe : xxxxxx
```

Ce document de VMware répertorie les différents ports que vous devez ouvrir sur votre pare-feu pour, par exemple, accéder à la console : [Accès console](https://kb.vmware.com/kb/1012382){.external-link}


### Utilisation du vSphere client lourd

Téléchargez d'abord le fichier d’installation du vSphere client. Le lien figure dans l'e-mail de création d’un utilisateur.

Vous pouvez également l'obtenir à l'adresse : <https://pcc-xxx-xxx-xxx-xxx.ovh.com/client/VMware-viclient.exe>.

Une fois le fichier téléchargé, exécutez-le. L’installation démarre. Dans un premier temps, l’assistant vous demande de sélectionner votre langue puis d’accepter les conditions d’utilisation de VMware.

Lorsque l’installation est terminée, l’assistant vous propose de vous connecter à votre Private Cloud en saisissant les informations précédemment reçues.

![Connexion au client lourd](images/connexion_client_l.png){.thumbnail}

Vous accéderez ensuite à cette interface :

![Connexion au client lourd](images/connexion_client_l2.png){.thumbnail}


### Utilisation du web client flash

Le web client flash est disponible sur l’interface web de votre Private Cloud à l’adresse : <https://pcc-xxx-xxx-xxx-xxx.ovh.com/vsphere-client> (remplacez pcc-xxx-xx-xx-xxx.ovh.com par l’adresse de votre Private Cloud).

Connectez-vous avec les identifiants qui vous ont été transmis :

![Client vSphere](images/vsphere-client.png){.thumbnail}

Vous accéderez ensuite à cette interface :

![Connexion à l'interface vSphere](images/connection_interface_w.png){.thumbnail}

La page `Home`{.action} permet de retrouver les grands menus de votre vCenter. Vous allez pouvoir effectuer différentes actions, telles que :

- Déployer une machine virtuelle en allant dans `Hosts and Clusters`{.action} ;
- Si vous bénéficiez de cette option, utiliser NSX en allant dans `Network & Security`{.action} ;
- Parcourir vos datastores.

### Utilisation du web client HTML5

Le web client HTML5 est disponible sur l’interface web de votre Private Cloud à l’adresse : <https://pcc-xxx-xxx-xxx-xxx.ovh.com/ui> (remplacez pcc-xxx-xx-xx-xxx.ovh.com par l’adresse de votre Private Cloud).

![Connexion à l'interface vSphere HTML5](images/connection_interface_w_html5.png){.thumbnail}

Vous accéderez ensuite à cette interface :

![Connexion à l'interface vSphere HTML5](images/vsphere-client-html5.png){.thumbnail}

La page `Home`{.action} permet de retrouver les grands menus de votre vCenter. Vous allez pouvoir effectuer différentes actions, telles que :

- Déployer une machine virtuelle en allant dans `Hosts and Clusters`{.action} ;
- Parcourir vos datastores.

> [!warning]
>
> La gestion des appliances *NSX Edge* n'est pas encore possible dans ce client web.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.