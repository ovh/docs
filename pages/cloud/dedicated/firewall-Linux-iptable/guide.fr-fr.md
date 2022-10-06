---
title: Configurer le pare-feu sous Linux avec Iptables
excerpt: Découvrez comment sécuriser un serveur avec Iptables
slug: firewall-iptables
section: Sécurité
order: 01
---

**Dernière mise à jour le 31/01/2022**

## Objectif

Votre serveur dédié est équipé d'un pare-feu. Les pare-feux créent une barrière entre un réseau de confiance et un réseau non fiable. 
Les pare-feux fonctionnent en définissant des règles qui régissent le trafic autorisé et celui qui est bloqué. Le pare-feu utilitaire développé pour les systèmes Linux est Iptables.

**Apprenez à sécuriser votre serveur dédié grâce à Iptables.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou avez des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) dans votre compte OVHcloud
- Disposer d'un accès administrateur (root/sudo) à votre serveur via SSH

## En pratique

> [!primary]
>
> Ce guide indique les commandes pour une distribution Ubuntu Server.
>
> Ce guide est à usage général. Il est possible que vous deviez adapter quelques commandes en fonction de la distribution et/ou du système d'exploitation que vous utilisez. Certains conseils pourront vous suggérer l'utilisation d'outil tiers. En cas de question quant à leur utilisation, veuillez vous référer à leur documentation officielle.  
>

### Etape 1 : mettre à jour votre système

Les développeurs de systèmes de distribution et d'exploitation proposent des mises à jour fréquentes de progiciels, très souvent pour des raisons de sécurité. **Garder votre distribution ou votre système d'exploitation à jour est primordial pour la sécurisation de votre serveur.**

Consultez notre guide sur la [sécurisation d'un serveur dédié](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/) pour plus d'informations.

### Etape 2 : installer le pare-feu Iptables sous Ubuntu

> [!primary]
>
> Il existe deux versions différentes d'iptables, pour IPv4 et IPv6. Les règles que nous couvrons dans ce tutoriel Linux Iptables concernent IPv4.
> Pour configurer Iptables pour IPv6, vous devez utiliser l'utilitaire iptables6. Ces deux protocoles différents ne fonctionnent pas ensemble et doivent être configurés indépendamment.
>

Iptables est installé par défaut sur la plupart des systèmes Linux. Pour confirmer que Iptables est installé, utilisez la commande suivante :

```bash
sudo apt-get install iptables
```

L'exemple de sortie dans Ubuntu confirme que la dernière version de Iptables est déjà présente :

![version-iptables](images/step2-version-iptables.PNG){.thumbnail}

En général, une commande Iptables se présente comme suit :

```bash
sudo iptables [option] CHAIN_rule [-j target]
```

Voici une liste de quelques options Iptables courantes :

- -A --append : Ajoute une règle à une chaîne (à la fin).
- -C --check : Recherche une règle qui correspond aux exigences de la chaîne.
- -D --delete : Supprime les règles spécifiées d'une chaîne.
- -F --flush : Supprime toutes les règles.
- -I --insert : Ajoute une règle à une chaîne à une position donnée.
- -L --list : Affiche toutes les règles d'une chaîne.
- -N -new-chain : Crée une nouvelle chaîne.
- -v --verbose : Affiche plus d'informations lors de l'utilisation d'une option de liste.
- -X --delete-chain : Supprime la chaîne fournie.

### Etape 3 : vérifier l'état actuel d'iptables

Pour afficher l'ensemble des règles actuelles sur votre serveur, saisissez la commande suivante dans la fenêtre du terminal :

```bash
sudo iptables -L
```
Le système affiche le statut de vos chaînes.<br>
La sortie répertoriera trois chaînes :

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}

### Etape 4 : autoriser le trafic sur localhost

Pour autoriser le trafic de votre propre système (le localhost), ajoutez la chaîne d'entrée en saisissant ce qui suit :

```bash
sudo iptables -A INPUT -i lo -j ACCEPT
```

Cette commande configure le pare-feu pour accepter le trafic pour l'interface localhost (lo) (-i). Désormais, tout ce qui provient de votre système passera par votre pare-feu.
Vous devez définir cette règle pour permettre aux applications de communiquer avec l'interface localhost.

### Etape 5 : autoriser le trafic sur des ports spécifiques <a name="step5"></a>

Ces règles autorisent le trafic sur les différents ports que vous spécifiez à l'aide des commandes répertoriées ci-dessous. 
Un port est un point de terminaison de communication spécifié pour un type spécifique de données.

Pour autoriser le trafic Web HTTP, saisissez la commande suivante :

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Pour autoriser uniquement le trafic SSH (Secure Shell) entrant, saisissez ce qui suit (Veuillez noter que nous utilisons le port 22, qui est le numéro du port SSH par défaut. Si votre numéro de port est différent, veillez à l'ajuster au numéro approprié) :

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Pour autoriser le trafic Internet HTTPS, saisissez la commande suivante :

```bash
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```

Les options fonctionnent ainsi :

- -p : Vérifie le protocole spécifié (tcp).
- --dport : Spécifie le port de destination.
- -j jump : Effectue l'action 

> [!warning]
> En cas de perte d'accès à votre serveur, vous pouvez toujours utiliser l'outil KVM/IPMI pour y accéder à nouveau et modifier votre configuration ou supprimer vos règles.
>
> Pour plus d'informations sur l'accès à cet outil, veuillez consulter [ce guide](https://docs.ovh.com/fr/dedicated/utilisation-ipmi-serveurs-dedies/).  
> 

### Etape 6 : contrôler le trafic par adresse IP

Utilisez la commande suivante pour accepter le trafic à partir d'une adresse IP spécifique.

```bash
sudo iptables -A INPUT -s votre_adresse_IP_à_autoriser -j ACCEPT
```

Remplacez l'adresse IP dans la commande par l'adresse IP que vous souhaitez autoriser.

Vous pouvez également bloquer le trafic à partir d'une adresse IP 

```bash
sudo iptables -A INPUT -s votre_adresse_IP_à_bloquer -j DROP
```

Remplacez l'adresse IP dans la commande par l'adresse IP que vous souhaitez bloquer.

Vous pouvez rejeter le trafic à partir d'une plage d'adresses IP, avec la commande suivante :

```bash
sudo iptables -A INPUT -m iprange --src-range votre_adresse_IP_debut-votre_adresse_IP_fin -j REJECT
```

Les options iptables que nous avons utilisées dans les exemples fonctionnent ainsi :

- -m : Correspond à l'option spécifiée.
- -iprange : Indique au système d'attendre une plage d'adresses IP au lieu d'une seule.
- --src-range : Identifie la plage d'adresses IP.

### Etape 7 : supprimer le trafic indésirable

Si vous définissez des règles de pare-feu Iptables, vous devez empêcher les accès non autorisés en supprimant tout trafic provenant d'autres ports :

```bash
sudo iptables -A INPUT -j DROP
```

L'option -A ajoute une nouvelle règle à la chaîne. Si une connexion passe par des ports autres que ceux que vous avez définis, elle sera abandonnée.

> [!warning]
> 
>Attention, si vous tapez cette commande avant d'effectuer [l'étape 5](#step5), vous bloquerez tous les accès y compris celui en cours, l'accès SSH. Ceci est particulièrement problématique sur une machine sur laquelle vous accédez à distance. 
>

### Etape 8 : supprimer une règle

Une méthode plus précise consiste à supprimer le numéro de ligne d'une règle.

```bash
sudo iptables -P INPUT DROP 
```

Tout d'abord, répertoriez toutes les règles en saisissant ce qui suit :

```bash
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Recherchez la ligne de la règle de pare-feu que vous souhaitez supprimer et exécutez cette commande :

```bash
sudo iptables -D INPUT <Number>
```
Remplacez `Number` par le numéro de ligne de règle que vous souhaitez supprimer.

### Etape 9 : enregistrer vos modifications

Lors du redémarrage du système, Iptables ne conserve pas les règles que vous aviez créées. 
Chaque fois que vous configurez Iptables sous Linux, toutes les modifications que vous apportez s'appliquent uniquement jusqu'au prochain redémarrage.

Pour enregistrer les règles dans les systèmes basés sur Ubuntu, saisissez :
  
```bash
sudo -s iptables-save -c
```

Au prochain démarrage de votre système, Iptables rechargera automatiquement les règles du pare-feu.

Vous pouvez dorénavant configurer des règles de pare-feu Iptables de base pour votre serveur Linux. 
N'hésitez pas à expérimenter car vous pouvez toujours supprimer les règles dont vous n'avez pas besoin, ou vider toutes les règles et recommencer.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
