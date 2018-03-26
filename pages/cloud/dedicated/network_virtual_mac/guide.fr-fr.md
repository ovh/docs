---
title: Assigner une MAC Virtuelle à une IP Failover
slug: network-virtual-mac
excerpt: OVH vous permet d’associer une adresse MAC virtuelle à une adresse IP, afin de pouvoir mettre en place des machines virtuelles avec une configuration bridge sur votre serveur.
section: Réseau & IP
---


## Prérequis
Pour assigner une MAC Virtuelle à une IP Failover, il faut :

- Disposer d'un serveur dédié.
- Avoir une adresse IP Failover, ou un Bloc d'IP Failover (RIPE).
- Avoir accès à l'espace client.


## Assigner une adresse MAC
Pour assigner une adresse MAC Virtuelle à une IP Failover, il vous faut dans un premier temps vous connecter à votre espace client.

Une fois connecté, rendez-vous dans la section `IP`{.action}.

Sélectionnez alors le serveur concerné afin que les IP Failover, ou Bloc d'IP, qui y sont attachées apparaîssent.

- Pour une IP Failover :


![IPFO](images/IPFO.png){.thumbnail}

- Pour un Bloc d'IP Failover :


![BlocIPFO](images/BlocFO.png){.thumbnail}



> [!primary]
>
> Un symbole en forme de flèche vers le bas est présent pour un bloc IP, il faut cliquer dessus afin d'afficher chaque adresse IP du bloc. Ce qui sera nécessaire pour assigner une adresse MAC virtuelle pour chaque IP du bloc.
> 

Ensuite, cliquez sur l'engrenage situé à droite, puis sélectionnez `Ajouter une MAC Virtuelle`{.action}.


![MAC](images/mac.png){.thumbnail}

**Type** : Correspond au type d'adresse MAC virtuelle (VmWare sera une adresse MAC faite pour le système VmWare ESXi, et OVH sera pour tout autre type de système de virtualisation). **Nom de la machine virtuelle** : Correspond au nom souhaité pour l'adresse MAC Virtuelle, pour retrouver ensuite plus facilement ce couple IP/MAC.



> [!primary]
>
> N'oubliez pas d'assigner l'adresse MAC Virtuelle créée dans la configuration de votre machine virtuelle.
> 


## Supprimer une adresse MAC


> [!warning]
>
> Lorsqu'une adresse MAC est supprimée, celle-ci ne sera pas récupérable.
> 

Pour supprimer une adresse MAC Virtuelle associée à une IP Failover, il vous faut dans un premier temps vous connecter à votre espace client.

Une fois connecté, rendez-vous dans la section `IP`{.action}.

Sélectionnez alors le serveur concerné afin que les IP Failover, ou Bloc d'IP, qui y sont attachées apparaîssent.

Enfin, cliquez sur l'engrenage situé à droite, puis sélectionnez `Supprimer une MAC Virtuelle`{.action}.