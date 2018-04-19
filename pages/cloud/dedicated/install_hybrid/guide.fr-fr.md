---
title: Choix de la grappe de disque pour installer un systeme d’exploitation
slug: install-hybrid
excerpt: Decouvrez ici comment choisir une grappe de disque pour installer votre systeme d’exploitation
section: Divers
---


## Prérequis
Chez OVH, il vous est possible de louer des serveurs possédant une grappe de disque SATA, et une grappe de disque SSD. Nous appelons cela des "serveurs Hybrid".

Pour suivre ce guide, il vous faut :

- Disposer d'un serveur Hybrid.
- Avoir accès à l'API OVH.



> [!warning]
>
> Cette procédure ne fonctionne que pour des systèmes Linux (à l'exception des systèmes ESXi, et XenServer), et uniquement sur des configurations en RAID Soft, NoRAID, ou RAID Hard (configuration par défaut).
> 


## Étape 1 &#58; Recuperer le nom du serveur
Tout d'abord, rendez vous sur l'API OVH, dans la section /dedicated/server.

Ensuite, récupérez le nom de votre serveur hybrid via le call API :


> [!api]
>
> @api {GET} /dedicated/server
> 

## Étape 2 &#58; Recuperer les diskGroupId
Le diskGroupId est ce qui nous permettra de définir la grappe de disque sur laquelle nous souhaitons que le système d'exploitation soit installé.

Rendez-vous alors sur le call API :


> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/hardware
> 
Renseignez le nom de votre serveur, et vous verrez apparaître les informations matérielles le concernant.

Ce qui nous intéresse ici, c'est le diskGroupId que vous retrouverez dans diskGroup comme le montre l'image suivante :


![Hybrid](images/hybrid.png){.thumbnail}

Sur un serveur Hybrid, les disques SSD sont la plupart du temps placés en deuxième. Le diskGroupId sera donc 2.



> [!primary]
>
> Par défaut, le système d'exploitation est installé sur le diskGroupId 1.
> 


## Étape 3 &#58; Lancer l'installation
Une fois le diskGroupId en votre possession, vous pouvez passer à la dernière étape qui consiste à installer votre système d'exploitation.

Pour cela, rendez-vous sur le call API :


> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
> 


> [!primary]
>
> Le templateName se récupère sur le call API :
> 
> > [!api]
> >
> > @api {GET} /dedicated/server/{serviceName}/install/compatibleTemplates
> > 
> 