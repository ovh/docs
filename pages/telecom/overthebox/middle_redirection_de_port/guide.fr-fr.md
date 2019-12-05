---
title: Redirection de port
keywords: redirection, port, forward, nat
slug: redirection-de-port
excerpt: Sur l'OverTheBox, il est possible de configurer une redirection de port afin de vous permettre d'accéder à une machine de votre réseau local depuis un réseau extérieur.
section: Fonctionnalités principales
---


## Prérequis
Afin que la redirection de port fonctionne correctement. Il est impératif que la machine cible de cette redirection possède comme passerelle par défaut L'IP de L' **OverTheBox** .



> [!success]
>
> C'est normalement déjà le cas si cette machine est configurée en
> récupération d'IP automatique et si le DHCP est géré par  OverTheBox
> (procédure d'installation sur : Mes 10 premières minutes avec OverTheBox <docs/telecom/overthebox/mes_10_premieres_minutes_avec_overthebox/>)
>


## Redirection de port
Pour ce faire :

- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} depuis votre ordinateur connecté au modem principal.
- Cliquez sur **"Network"**
- Cliquez sur **"Firewall"**
- Cliquez sur **"Port Forwards"**
- Configurez votre redirection
    - **Name** : nommez votre règle
    - **Protocol** : choisissez le protocole (il est possible de laisser **TCP + UDP** par défaut)
    - **External zone** : indiquez **TUN**
    - **External port** : renseignez le port appelé depuis l'extérieur
    - **Internal zone** : indiquez **LAN**
    - **Internal Ip** : choisissez l'Ip cible de la redirection
    - **Internal port** : indiquez le port de la destination à cibler
- Cliquez d'abord sur **"Add"**
- Cliquez ensuite sur **"Save & Apply"**


### Exemple
Dans votre réseau  **OverTheBox**  ,vous possédez un serveur  **HTTP**  sur la machine locale  **192.168.0.102**  qui affiche la vidéo d'une caméra de surveillance. Vous souhaitez rediriger le port  **8080**  de l' **OverTheBox** vers le port  **80**  de ce serveur  **HTTP**  afin de pouvoir accéder à cette caméra depuis un autre réseau via l' **IP publique**  et le  **port 8080**  de l' **OverTheBox** .

Voici la configuration à apporter :


![overthebox](images/4376.png){.thumbnail}


## Redirection d'une plage de ports
Pour ce faire :

- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} depuis votre ordinateur connecté au modem principal.
- Cliquez sur **"Network"**
- Cliquez sur **"Firewall"**
- Cliquez sur **"Port Forwards"**
- Configurez votre redirection
    - **Name** : nommez votre règle
    - **Protocol** : choisissez le protocole (il est possible de laisser **TCP + UDP** par défaut)
    - **External zone** : indiquez **TUN**
    - **External port** : renseignez la plage de ports appelée depuis l'extérieur sous la forme **"portDébut-portFin"**
    - **Internal zone** : indiquez **LAN**
    - **Internal Ip** : choisissez l'Ip cible de la redirection
    - **Internal port** : indiquez la plage de ports cible sous la forme **"portDébut-portFin"**



> [!alert]
>
> Les plages "external port" et "internal port" doivent comporter le même nombre de port.
>

- Cliquez d'abord sur **"Add"**
- Cliquez ensuite sur **"Save & Apply"**


### Exemple
Dans votre réseau  **OverTheBox**  ,vous possédez 4 serveurs  **HTTP**  sur la machine locale  **192.168.0.102**  qui affichent les vidéos de 4 caméras de surveillance. Vous souhaitez rediriger les ports **8080** à **8083** de l' **OverTheBox** vers les ports **8080** à **8083** de ce serveur **HTTP** afin de pouvoir accéder à ces caméras depuis un autre réseau via l' **IP publique** de l' **OverTheBox** .

Voici la configuration à apporter :


![overthebox](images/FwdPlage.png){.thumbnail}
