---
title: Étape 2 - créer un modèle de flotte de bureaux virtuels (ou pool)
slug: create-pool
excerpt: Apprenez à créer des modèles de pools depuis VMware Horizon 7.1
section: Mise en place
order: 2
---

**Dernière mise à jour le 2018/02/21**

## Objectif

Il est temps de commencer à utiliser votre offre [Infrastructure Bureau Virtuel](https://www.ovh.com/ca/fr/cloud/cloud-desktop/infrastructure/){.external}.

**Ce guide vous indiquera comment déployer un pool automatique de machines Linked Clones.**


## Prérequis

- Utiliser un système d'exploitation (OS) compatible : [systèmes d'exploitation pris en charge pour Horizon Agent](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}.
- Installer des logiciels à déployer dans le pool.
- Configurer l'adressage de la carte réseau en DHCP.
- Associer le modèle de machine virtuelle (VM) au réseau de destination du pool (portgroup ou VLAN).
- Avoir terminé l'installation de l'agent VMware Horizon 7.1.
- Créer un snapshot (machine virtuelle éteinte) qui servira de point de référence immuable.  
- Avoir [créé un template de personnalisation (sysprep)](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}. 


## En pratique

### Importer un modèle de machine virtuelle (VM)


Il est possible de créer ou d'importer des modèles de VM, complètement ou partiellement configurés sur le Private Cloud associé à votre infrastructure VMware Horizon 7.1.

Pour ce faire, des guides sont à votre disposition :

- création d'une VM à partir d'un ISO : [déploiement d'une machine virtuelle](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle-depuis-un-iso/){.external} ;
- création d'une VM à partir d'un template OVH : [déploiement d'un template OVH](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/){.external} ;
- import via OVFtool : [OVFtool](https://docs.ovh.com/fr/private-cloud/ovf-tool/){.external}.


### Associer le modèle au réseau de destination du pool

Afin que les bureaux virtuels se déploient correctement et soient joignables pour les utilisateurs, il est important de configurer le modèle de VM sur le bon réseau virtuel. Ce réseau est envoyé dans le courriel de livraison (**DHCP Network**) et est représenté par un `dvportgroup` sur l'interface vSphere.

Pour associer le modèle de VM et le réseau du pool :

- faites un clic droit sur la VM, puis choisissez `Edit settings`{.action} ;
- sélectionnez le périphérique correspondant à l'interface réseau ;
- dans la partie `Network Connexion`{.action} sélectionnez le `Network label`{.action} indiqué dans le courriel de livraison **DHCP Network** (voir image ci-dessous).

![DHCP Network](images/1200.png){.thumbnail}

Si un réseau supplémentaire, isolé de l'existant, s'avère nécessaire, il est possible de déployer un nouveau point d'accès avec un réseau dédié : [création d'un nouveau point d'accès](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-access-point/).


### Installer l'agent VMware Horizon 7.1

> [!primary]
>
> Nous mettons à disposition des utilisateurs de l'offre HaaS les fichiers d'installation de l'agent Horizon : <https://files.horizonaas.com/>.
> 

Effectuez un double-clic sur le fichier du programme d'installation d'Horizon Agent, puis suivez le processus d'installation :

- acceptez les termes de licence VMware ;
- sélectionnez `Installer VMware Horizon Agent`{.action} en `mode Poste de travail`{.action} ;
- choisissez le protocole IPv4 ;
- sélectionnez les options d'installation (celles par défaut constituent un bon point de départ) ;
- n'activez pas le RDP lorsque cela vous est demandé ;
- acceptez ou modifiez le dossier de destination ;
- finalisez l'installation.

Si vous souhaitez obtenir plus de détails sur l'installation de l'agent Horizon 7.1 sur une machine virtuelle : [installer Horizon Agent sur une machine virtuelle](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}


### Créer le snapshot de référence

Afin de pouvoir se baser sur un état immuable de la machine virtuelle servant de modèle pour le pool, VMware Horizon s'appuie sur un snapshot. Les opérations qui pourraient ensuite être réalisées sur le modèle n'affecteront donc pas directement le contenu des bureaux virtuels.

- Sur l'interface du client vSphere (ici la version web), sélectionnez la VM modèle, puis le menu `Actions`{.action}. Cliquez enfin sur `Take Snapshot...`{.action} :

![Créer un snapshot](images/1201.png){.thumbnail}

- Renseignez un titre de snapshot (ici un numéro de version) et une description :

![Titre de snapshot](images/1202.png){.thumbnail}

Maintenant que le modèle a été créé, découvrez comment [créer un pool](https://docs.ovh.com/ca/fr/cloud-desktop-infrastructure/howto-create-pool/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.