---
title: Demarrer son serveur sur un noyau OVH
slug: kernel-netboot
excerpt: Retrouvez ici les Étapes a suivre pour demarrer votre serveur sur un noyau OVH depuis le reseau.
section: Divers
---


## Prérequis
Le Netboot est un service proposé gratuitement par OVH et qui permet de démarrer le serveur dédié que vous louez chez OVH sur un kernel déjà compilé. Une fois configuré de cette façon, votre serveur charge automatiquement le noyau depuis le réseau, vous n'avez rien d'autre à configurer. Cette méthode vous permet également de mettre à jour très simplement votre noyau car OVH compile la dernière version du noyau dès sa disponibilité et la met à disposition sur le Netboot.

Pour pouvoir modifier le netboot, il faut :

- Avoir une machine, telle qu'un serveur dédié, chez OVH.
- Avoir accès à l'espace client.


## Procedure
Pour démarrer votre serveur sur le Netboot, il vous faut configurer cette fonctionnalité depuis votre espace client.


### Booter sur le disque dur
Pour démarrer votre serveur sur Disque Dur, vous devez tout d'abord vous connecter à votre espace client.

Rendez-vous ensuite sur l'Univers `Cloud`{.action}, puis sélectionnez votre serveur.

Dans l'onglet `Etat du serveur`{.action}, section `Informations générales`{.action}, cliquez sur `modifier`{.action} sur la ligne Boot.

Sélectionnez ensuite `Booter sur disque dur`{.action}, cliquer sur `suivant`{.action}, et enfin valider la confirmation de changement de netboot.

Il ne reste plus qu'à redémarrer le serveur pour que le nouveau netboot soit pris en compte.


### Booter en mode Network


> [!primary]
>
> Cette partie est déstinée aux serveurs sous Linux. Pour Windows, FreeBSD, et les distributions de Virtualisation, seule la sélection en mode Disque Dur ou les modes Rescue sont possibles.
> 

Pour démarrer votre serveur sur un noyau réseau, vous devez tout d'abord vous connecter à votre espace client.

Rendez-vous ensuite sur l'Univers `Cloud`{.action}, puis sélectionnez votre serveur.

Dans l'onglet `Etat du serveur`{.action}, section `Informations générales`{.action}, cliquez sur `modifier`{.action} sur la ligne Boot.

Sélectionnez `Booter en mode Network`{.action}.

Il vous faudra alors choisir le kernel désiré parmis la liste ci-dessous.

- **Stable Kernel, Vanilla - 64bits.** (Prise en charge de CPUFAMILY, SMP, & IPv6)
- **Stable Kernel, hz1000 - 64bits.** (Prise en charge de CPUFAMILY, SMP, & IPv6)
- **Stable Kernel, with GRSec - 64bits.** (Prise en charge de GRSec, CPUFAMILY, SMP, & IPv6)

Sélectionnez ensuite le Root Device (partition où se trouve la partition racine de votre serveur).

Pour déterminer le Root Device de votre serveur, consultez le fichier /etc/fstab de votre serveur.

En SSH :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cat /etc/fstab</span> <span class="output"># <file system> <mount point> <type> <options> <dump> <pass></span> <span class="output">/dev/sda1 / ext3 errors=remount-ro 0 1</span> <span class="output">/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2</span> <span class="output">/dev/sda3 swap swap defaults 0 0</span> <span class="blank">&nbsp;</span> <span class="output">proc /proc proc defaults 0 0</span> <span class="output">sysfs /sys sysfs defaults 0 0</span> <span class="output">shm /dev/shm tmpfs nodev,nosuid,noexec 0 0</span> </pre></div>
Dans notre exemple, le Root Device sera /dev/sda1.

Il ne reste plus qu'à valider le changement, et procéder au redémarrage du serveur pour que le netboot soit pris en compte.


### Booter en mode Rescue
Pour démarrer votre serveur sur un noyau réseau, vous devez tout d'abord vous connecter à votre espace client.

Rendez-vous ensuite sur l'Univers `Cloud`{.action}, puis sélectionnez votre serveur.

Dans l'onglet `Etat du serveur`{.action}, section `Informations générales`{.action}, cliquez sur `modifier`{.action} sur la ligne Boot.

Sélectionnez `Booter en mode Rescue`{.action}, puis le mode rescue souhaité pour le serveur. (Par défaut, **rescue64-pro**)

Il ne reste plus qu'à valider le changement, et procéder au redémarrage du serveur pour que le netboot soit pris en compte.