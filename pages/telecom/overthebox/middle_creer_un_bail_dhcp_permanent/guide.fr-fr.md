---
title: 'Créer un bail DHCP permanent / Intégration d''un Décodeur TV'
keywords: 'DHCP, static, bail, permanent, TV'
description: 'Créer un bail DHCP permanent / Intégration d''un Décodeur TV'
slug: creer-un-bail-dhcp-permanent
excerpt: 'Afin d''attribuer toujours la même IP à un périphérique via le service DHCP, vous pouvez créer un bail DHCP permanent. Cette opération est nécessaire pour les décodeurs TV puisque ces derniers ne peuvent pas fonctionner à travers le tunnel OverTheBox.'
section: 'Fonctionnalités principales'
---

> [!alert]
>
> Attention, cette procédure n'est pas nécessaire si vous possédez le boitier OverTheBox Plus puisque la configuration de vos modems reste inchangée grâce à ce dernier
> Si vous êtes dans ce cas, veuillez simplement ignorer ce guide et laisser branché votre décodeur TV directement sur le modem.
> 


## Configuration
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Cliquez sur le menu **" Network "** puis **" DHCP et DNS "**
- Connectez vous avec votre compte si ce n'est pas encore fait
- Dans la partie **" Static leases "**, cliquez sur **" Add "**
- Renseignez :
    - **Hostname** : le nom du périphérique.
    - **Mac Address** : selectionnez l'adresse MAC de votre périphérique.
    - **Ipv4** : l'adresse à réserver pour ce périphérique.
    - **Gateway** : vous pouvez spécifier une paserelle par défaut notamment pour les **box tv**.
- Enfin terminez en cliquant sur **" Save & Apply "**.



> [!success]
>
> Exemple : Vous avez un décodeur TV fourni par votre opérateur internet, la box de cet opérateur correspond à l'interface if2 de l'OverTheBox.
> Voici donc ce qu'il faut indiquer :
> 
> ![overthebox](images/4404.png){.thumbnail}
> 
> Ce décodeur obtiendra toujours l'adresse IP 192.168.0.162 de façon automatique et surtout le flux TV passera directement par votre box internet et non par le système de tunnel OverTheBox.
> 



> [!alert]
>
> Attention, si vous souhaitez simplement attribuer une IP fixe dans le réseau OverTheBox à un périphérique autre qu'un décodeur TV, veuillez laisser le paramètre Gateway sur "default".
> 