---
title: 'Utiliser un serveur VPN PPTP derrière OverTheBox'
keywords: 'VPN, PPTP, Tunnel'
description: 'Utiliser un serveur VPN PPTP derrière OverTheBox'
slug: utiliser-un-serveur-vnp-pptp
excerpt: 'Afin d''utiliser un serveur VPN PPTP derrière votre OverTheBox, il faut évidement une redirection du port TCP (par défaut le 1723). Cependant, il faut aussi une redirection GRE.  Ce guide vous montre comment effectuer cette dernière manipulation sur l''OverTheBox.'
section: 'Configurations techniques complexes'
---

## Explications
Vous pouvez retrouver la marche à suivre pour effectuer une redirection de port standard via ce guide : [Redirection de port](https://docs.ovh.com/fr/overthebox/redirection-de-port/){.ref}.

Cependant, la configuration d'une redirection GRE sur OverTheBox est quelque peu spécifique. Veuillez suivre la procédure décrite ci-dessous.


## Manipulations
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} depuis votre ordinateur connecté au modem principal.
- Cliquez sur **"Network"**.
- Cliquez sur **"Firewall"**.
- Cliquez sur **"Port Forwards"**.
- Configurez une redirection vide :
    - **Name** : Inscrivez le nom de votre choix
    - **Protocol** : laissez **TCP+UDP**
    - **External zone** : indiquez **WAN**
    - **External port** : laissez vide
    - **Internal zone** : indiquez **LAN**
    - **Internal Ip** : choisissez l'IP locale de votre serveur PPTP
    - **Internal port** : laissez vide
- Cliquez sur **"Add"**.

![overthebox](images/Forward1.png){.thumbnail}

- Cliquez ensuite sur **"Edit"**.

![overthebox](images/Forward2.png){.thumbnail}

- Pour l'option Protocol, choisissez **"Custom"** puis inscrivez la valeur **47**.

![overthebox](images/Forward3.png){.thumbnail}

- Cliquez enfin sur **"Save & Apply"**.

Voici ce que vous devriez obtenir:


![overthebox](images/Forward4.png){.thumbnail}
