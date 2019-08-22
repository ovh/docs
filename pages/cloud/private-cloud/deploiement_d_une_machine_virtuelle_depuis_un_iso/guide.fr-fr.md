---
title: Déploiement d’une machine virtuelle depuis un ISO
slug: deploiement-d-une-machine-virtuelle-depuis-un-iso
legacy_guide_number: '7766994'
section: Gestion des machines virtuelles
order: 01
---

**Dernière mise à jour le 14/02/2019**

## Objectif

Depuis votre client vSphere vous avez la possibilité de déployer des machines virtuelles de plusieurs manières.

**Ce guide explique comment déployer une machine virtuelle depuis un fichier .ISO**.

## Déploiement de la machine virtuelle

Le déploiement de la nouvelle machine virtuelle s'effectue depuis le client vSphere, dans la vue "hôtes et clusters".

Faites un clic-droit sur le cluster de votre choix et cliquez sur "Nouvelle machine virtuelle".

![](images/deploy_vm.png){.thumbnail}

Vous avez plusieurs possibilité lors de la création d’une machine virtuelle :

- La création depuis un ISO, qui sera dans votre banque de données et que vous aurez pu importer en suivant [le guide de connexion en SFTP](https://pccdocs.ovh.net/display/VS/Connexion+en+SFTP)
- Vous pouvez également déployer une machine virtuelle depuis un modèle que vous pouvez avoir ou un [modèle OVH](https://pccdocs.ovh.net/pages/viewpage.action?pageId=2162716)
- Vous pouvez cloner une machine virtuelle déjà existante (attention toutefois au risque de conflit d’adresse IP).
- Vous pouvez cloner un machine virtuelle en modèle, en vue d’un déploiement plus rapide de vos prochaines machines virtuelles.
- Vous pouvez cloner un modèle en un autre modèle pour, par exemple, avoir le modèle sur différents banque de données et ne pas subir de baisse de performances lors d’un déploiement massif.
- Vous pouvez convertir un modèle en machine virtuelle, cela occasionnera la perte du modèle, mais cela est utile si vous souhaitez modifier celui-ci.

![](images/deploy_vm2.png){.thumbnail}

Ici, nous allons voir comment déployer une machine virtuelle depuis un ISO.

En suivant les étapes, vous devrez choisir le nom de votre machine et dans quel datacentre, et dans un dossier en particulier. Si vous ne choisissez pas de dossier, elle sera à la racine du datacentre.

![](images/deploy_vm3.png){.thumbnail}

Vous devrez ensuite choisir le cluster, l’hôte, [le pool de ressources](https://pubs.vmware.com/vsphere-55/index.jsp?topic=%2Fcom.vmware.vsphere.resmgmt.doc%2FGUID-60077B40-66FF-4625-934A-641703ED7601.html){.external-link}, ou [la vApp](https://pubs.vmware.com/vsphere-50/index.jsp#com.vmware.vsphere.vm_admin.doc_50/GUID-EBD7A954-3EB1-43AD-9DDA-975A3CFDE7B2.html){.external-link} où vous souhaitez la placer.

Dans ce cas, la machine virtuelle sera déployée selon les règles DRS configurées, et sera placée à la racine du cluster.

![](images/deploy_vm_cluster.png){.thumbnail}

Vous arrivez au niveau du choix de la banque de données.

Nous vous déconseillons de placer votre machine virtuelle dans un "stockage local", qui correspond au stockage local de votre hôte. En cas de défaillance de votre hôte, votre machine virtuelle ne pourra pas redémarrer et ne sera plus accessible.

![](images/deploy_vm_datastore.png){.thumbnail}

Vous devrez choisir la compatibilité entre votre machine virtuelle et l’hôte. Sauf cas particulier, il est recommandé de prendre le plus récent.

![](images/deploy_vm_compatibility.png){.thumbnail}

Ensuite vous pouvez choisir le “Système d'exploitation client”, cedernier n’installe pas le système d’exploitation cependant vSphere configure la machine virtuelle de manière automatique (nombre de CPU/RAM, type de carte réseau, prise en charge de l’installation des VMware tools).

![](images/deploy_vm_guest_os.png){.thumbnail}

## Configuration de la machine virtuelle

Dans cette partie, vous pourrez configurer les ressources de votre machine virtuelle.

Le choix “Nouveau réseau” permet d’ajouter une carte réseau :

- Le "VM Network" servira pour le réseau public et l’accès direct à internet.
- Les VLAN permettront d’utiliser le réseau privé entre vos machines virtuelles (et avec d’autres services OVH à travers le vRack sur l'offre SDDC)

![](images/deploy_vm_customize.png){.thumbnail}

Vous pourrez également supprimer les devices non nécessaires (Floppy drive…).

Dans la partie “New CD/DVD Drive” vous pourrez choisir “banque de données ISO File”, une fenêtre s’ouvrira pour que vous choisissiez votre ISO.

Vous pouvez également ajouter l'ISO après la création de la machine virtuelle.

![](images/deploy_vm_iso.png){.thumbnail}

Il s’affichera ainsi, n’oubliez pas de le connecter.

![](images/deploy_vm_customize_with_iso.png){.thumbnail}

Voici le récapitulatif de la création de la machine virtuelle et vous pouvez cocher l’option “modifier les paramètres” pour modifier par exemple la mémoire, le nombre de CPU manuellement.

![](images/deploy_vm_ready.png){.thumbnail}

La machine arrivera dans votre inventaire, vous pourrez la démarrer en cliquant sur “Mettre sous tension” et cliquer sur “ouvrir la Console” pour avoir accès à “l’écran” de la VM et commencer l’installation du système d’exploitation.

![](images/deploy_vm_finish.png){.thumbnail}

La console s'ouvrira dans un nouvel onglet, et après avoir suivi l'installation, vous pourrez utiliser votre machine virtuelle.

![](images/console.PNG){.thumbnail}

Une fois votre machine virtuelle installée, il est recommandé de déconnecter l'ISO dans les paramètres et de mettre votre lecteur CD/DVD en "périphérique client". Dans le cas contraire, vous ne pourrez pas déplacer la machine virtuelle.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.