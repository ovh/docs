---
title: Configuer le firewall software sous Windows
excerpt: Découvrez comment configurer votre pare-feu sous Windows
slug: Configurer-firewall-software-windows
section: Utilisation avancée
---

**Dernière mise à jour le 13/12/2021**

## Objectif

Pour protéger de manière optimale votre système, votre serveur Windows Server 2019 , dispose de son propre pare-feu intégré, ça paramétrage donnera la possibilité d’augmenter les niveaux de sécurité et de garantir ainsi la disponibilité et l’intégrité de tous les éléments hébergés sur le serveur, tels que les rôles, les services, les dossiers partagés.

**Ce guide vous explique comment appliquer les règles du pare-feu sous Windows.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un serveur dédié dans votre espace client OVHcloud
- Être connecté à votre serveur à un bureau distant sous Windows 
## En pratique

### Étape 1 :  Accéder au pare-feu Windows
Afin d’accéder au pare-feu Windows, vous devez passer à l’itinéraire suivant :

- Démarrer
- Cliquer sur Rechercher
- Rechercher Pare-feu Windows sur la barre de recherche
- Puis cliquer sur Pare-feu Windows
Il vous faudra ensuite vous rendre sur la ligne `Configuration avancée `{.action}

![Step1](images/step1.PNG){.thumbnail}

### Etape 2 : Activer une règle de trafic entrant
Dans la fenêtre affichée, vous trouverez des paramètres tels que:

- Règles d’entrée et de sortie
- Règles de sécurité de la connexion
- Options de surveillance du pare-feu du serveur
En sélectionnant la section`Règles de trafic entrant `{.action}, toutes les règles préconfigurées de Windows Server 2019 associées aux connexions réseau et aux paquets entrants s’affichent. Certaines de ces règles ne sont pas activées par défaut. Si vous souhaitez les activer, faites un clic droit. à propos de la règle et sélectionnez l’option « Activer la règle»

![Step1](images/step2.PNG){.thumbnail}

### Etape 3 : Créer une nouvelle règle 
Pour créer une nouvelle règle dans Windows Server 2019
Allez dans le menu `Action `{.action}et sélectionnez « Nouvelle règle »
Cliquez sur l’option`Nouvelle règle `{.action}située dans le panneau de droite.

![Step3](images/step3.PNG){.thumbnail}

### Etape 4 : Définir le type de règle à activer

En sélectionnant cette option, l’assistant suivant s’affiche pour définir le type de règle à créer. Dans ce cas, vous selectionner la case`Port `{.action}

![Step4](images/step4.PNG){.thumbnail}

Dans la fenêtre suivante, vous définissez le type de port à activer:

### Etape 5 : Définir le type port à activer
Dans la fenêtre suivante, nous définirons le type de port à activer:

![Step5](images/step5.PNG){.thumbnail}

> [!primary]
>
> - TCP (protocole de contrôle de transmission)
> C’est un protocole orienté connexion, c’est-à-dire qu’avec TCP, il sera possible de créer des connexions entre elles afin d’envoyer des flux de données, ce protocole garantit que les données sont livrées au destinataire sans erreur et dans le même ordre dans lequel elles ont été envoyées. transmis.
>
> - UDP (User Datagram Protocol – Protocole de datagramme utilisateur)
> C’est un protocole non orienté vers la connexion, son développement repose sur l’échange de datagrammes et facilite l’envoi de datagrammes à travers le réseau qu’il est nécessaire d’avoir préalablement établi une connexion avec la destination.
>
> Nous pouvons également sélectionner la case « Tous les ports locaux » pour activer tous les ports TCP ou UDP sur le serveur qui n’est pas sécurisé, ou activer la case à cocher « Ports locaux spécifiques » pour déterminer quel port doit être autorisé sur la base de: aux exigences. 
>


### Etape 6 : Autoriser ou bloquer la connexion

Pour définir l’action que cette règle va avoir, les options suivantes sont disponibles :

- Autoriser la connexion
Cette option permet une communication complète via ce port.

- Autoriser la connexion si elle est sécurisée
Cette option permet aux données d’être transmises uniquement si la connexion est authentifiée via Ipsec.

- Bloquer la connexion
Cette option empêche les données d’être acheminées via ce port.

Sélectionnez l’option`Autoriser la connexion `{.action} et cliquez sur `Suivant `{.action}. 

![Step6](images/step6.PNG){.thumbnail}

### Etape 7 : Définir le profile et le nom du pare-feu à appliquer

- Définir le profile
Vous pouvez l'utiliser dans les profils public, de domaine ou privé.
Vous pouvez tous les activer si vous le souhaiter.

![Step7](images/step7.PNG){.thumbnail}

- Enfin, nous devons attribuer un nom et, si nous le souhaitons, une description de la nouvelle règle afin de faciliter son utilisation:

![Step7_01](images/step7-01.PNG){.thumbnail}

Cliquez sur le bouton `Terminer `{.action} pour terminer le processus et créer la nouvelle règle dans Windows Server 2019.


Vous pouvons apporter des modifications au niveau de sécurité de la nouvelle règle créée. 
Avec cette méthode simple, vous pouvez créer et configurer des règles dans le pare-feu Windows Server 2019 et améliorer sa sécurité.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
