---
title: 'Ajout d''un modem supplémentaire / Gestion du switch Ethernet'
description: 'Ajout d''un modem supplémentaire / Gestion du switch Ethernet'
slug: gestion-du-switch-ethernet
excerpt: 'Afin de pouvoir ajouter très simplement une connexion supplémentaire à agréger par votre système OverTheBox, il suffit de modifier, via l''interface graphique, la fonction des ports Ethernet du switch intégré'
section: 'Fonctionnalités principales'
---

> [!alert]
>
> Attention, cette procédure n'est possible que sur le boitier OverTheBox Plus qui possède un switch Ethernet interne.
> 


## Prérequis
Pour le bon déroulement de la procédure, il est impératif que les modems que vous allez ajouter possèdent un serveur DHCP **actif**.



> [!success]
>
> Rassurez-vous, cette fonction est déjà activée sur les Box des principaux opérateurs grand public.
> Si vous pouvez aller sur Internet en passant directement par le modem sans
> avoir effectué de configuration spécifique préalable sur l'ordinateur, cela
> veut dire que le DHCP est activé.
> 


## Configuration du port Ethernet
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Cliquez sur **"Network"**
- Cliquez sur **"Switch"**
- Cliquez sur le port du switch qui sera utilisé pour brancher le modem (dans notre exemple le **12**), assurez vous bien qu'il est en mode **WAN**
- Cliquez sur **"Apply the new Configuration"**


![overthebox](images/switch.png){.thumbnail}


## Branchement
Branchez simplement votre modem sur le port concerné (dans notre exemple le **12**) puis patientez quelques minutes.



> [!success]
>
> Votre système OverTheBox intégre maintenant la nouvelle connexion dans son agrégation de débit.
> 