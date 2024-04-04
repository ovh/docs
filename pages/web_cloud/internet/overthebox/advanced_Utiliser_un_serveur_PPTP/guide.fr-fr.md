---
title: 'Utiliser un serveur VPN PPTP avec OverTheBox'
excerpt: "Découvrez comment ajouter un serveur VPN PPTP avec votre OverTheBox pour protéger et configurer vos connexions"
updated: 2021-04-13
---

## Explications

Vous pouvez retrouver la marche à suivre pour effectuer une redirection de port standard via ce guide : [Redirection de port](/pages/web_cloud/internet/overthebox/middle_redirection_de_port){.ref}.

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
