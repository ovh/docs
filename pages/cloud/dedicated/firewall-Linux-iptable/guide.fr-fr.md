---
title: Configuer le firewall software sous Linux avec IPtables
excerpt: Découvrez comment sécuriser un serveur avec iptables
slug: firewall-software-Linux-IPtables
section: Premiers pas
order: 7
---

**Dernière mise à jour le 16/12/2021**


## Objectif

Votre serveur dédié est équipé d'un pare-feu. Les pare-feux créent une barrière entre un réseau de confiance et un réseau non fiable. 
Les pare-feux fonctionnent en définissant des règles qui régissent le trafic autorisé et celui qui est bloqué. Le pare-feu utilitaire développé pour les systèmes Linux est iptables.

**Apprenez à sécuriser votre serveur dédié grâce à iptables.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou avez des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Être connecté à un terminal (accès root ou sudo) sous Linux.
- Le guide suivant indique les commandes pour une distribution Ubuntu Server.


## En pratique

> [!primary]
>
> Ce guide est à usage général. Il est possible que vous deviez adapter quelques commandes en fonction de la distribution et/ou du système d'exploitation que vous utilisez. Certains conseils pourront vous suggérer l'utilisation d'outil tiers. En cas de question quant à leur utilisation, veuillez vous référer à leur documentation officielle.  
>

### Étape 1 : Mettre à jour votre système

Les développeurs de systèmes de distribution et d'exploitation proposent des mises à jour fréquentes de progiciels, très souvent pour des raisons de sécurité. **Garder votre distribution ou votre système d'exploitation à jour est primordial pour la sécurisation de votre serveur.**

Il s'agit d'un processus en deux parties qui implique la mise à jour de la liste des paquets (la liste des applications logicielles installées) et celle des paquets en eux-mêmes.

#### Mettre à jour la liste des paquets

Mettez à jour la liste des paquets sur votre serveur de la manière suivante :

```sh
sudo apt-get update
```

#### Mettre à jour les paquets

Mettez ensuite à jour les paquets sur votre serveur de la manière suivante :

```sh
sudo apt-get upgrade
```


Une fois les mises à jour terminées, votre système sera entièrement à jour. Cette opération doit être effectuée de manière régulière.


### Étape 2 : Installation du pare-feu iptables sous Ubuntu

> [!primary]
>
> Il existe deux versions différentes d'iptables, pour IPv4 et IPv6. Les règles que nous couvrons dans ce tutoriel Linux iptables concernent IPv4.
> Pour configurer iptables pour IPv6, vous devez utiliser l'utilitaire iptables6. Ces deux protocoles différents ne fonctionnent pas ensemble et doivent être configurés indépendamment.
>

Iptables est installé par défaut sur la plupart des systèmes Linux. Pour confirmer qu'iptables est installé, utilisez la commande suivante :

```sh
sudo apt-get install iptables
```
L'exemple de sortie dans Ubuntu confirme que la dernière version d'iptables est déjà présente :

![version-iptables](images/step2-version-iptables.PNG){.thumbnail}

En général, une commande iptables se présente comme suit :

```sh
sudo iptables [option] CHAIN_rule [-j target]
```

Voici une liste de quelques options iptables courantes :

- -A --append : Ajoute une règle à une chaîne (à la fin).
- -C --check : Recherchez une règle qui correspond aux exigences de la chaîne.
- -D --delete : Supprime les règles spécifiées d'une chaîne.
- -F --flush : Supprime toutes les règles.
- -I --insert : Ajoute une règle à une chaîne à une position donnée.
- -L --list : Affiche toutes les règles d'une chaîne.
- -N -new-chain : Créer une nouvelle chaîne.
- -v --verbose : Affiche plus d'informations lors de l'utilisation d'une option de liste.
- -X --delete-chain : Supprime la chaîne fournie.


### Étape 3 : Vérifier l'état actuel d'iptables

Pour afficher l'ensemble de règles actuel sur votre serveur, saisissez ce qui suit dans la fenêtre du terminal :

```sh
sudo iptables -L

```
Le système affiche le statut de vos chaînes. 
La sortie répertoriera trois chaînes :

![Check-Current-iptables](images/Check-Current-iptables.PNG){.thumbnail}


### Étape 4 : Activation du trafic sur localhost

Pour autoriser le trafic de votre propre système (le localhost). Ajoutez la chaîne d'entrée en entrant ce qui suit :

```sh
sudo iptables -A INPUT -i lo -j ACCEPT
```
Cette commande configure le pare-feu pour accepter le trafic pour l'interface localhost (lo) (-i). Désormais, tout ce qui provient de votre système passera par votre pare-feu.
Vous devez définir cette règle pour permettre aux applications de communiquer avec l'interface localhost.


### Étape 5 : Autoriser le trafic sur des ports spécifiques

Ces règles autorisent le trafic sur les différents ports que vous spécifiez à l'aide des commandes répertoriées ci-dessous. 
Un port est un point de terminaison de communication spécifié pour un type spécifique de données.

Pour autoriser le trafic Web HTTP, saisissez la commande suivante :

```sh
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```
Pour autoriser uniquement le trafic SSH (Secure Shell) entrant, saisissez ce qui suit :

```sh
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

Pour autoriser le trafic Internet HTTPS, saisissez la commande suivante :

```sh
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```
Les options fonctionnent comme suit :

- -p : Vérifie le protocole spécifié (tcp).
- --dport : Spécifiez le port de destination.
- -j jump : Effectue l'action 


### Étape 6 : Contrôler le trafic par adresse IP

Utilisez la commande suivante pour accepter le trafic à partir d'une adresse IP spécifique.

```sh
sudo iptables -A INPUT -s votre@IP_à_autoriser -j ACCEPT
```
Remplacez l'adresse IP dans la commande par l'adresse IP que vous souhaitez autoriser.


Vous pouvez également bloquer le trafic à partir d'une adresse IP 

```sh
sudo iptables -A INPUT -s votre@IP_à_bloquer -j DROP
```

Vous pouvez rejeter le trafic à partir d'une plage d'adresses IP, avec la commande suivante :

```sh
sudo iptables -A INPUT -m iprange --src-range votre@IP_debut-votre@IP_fin -j REJECT
```
Les options iptables que nous avons utilisées dans les exemples fonctionnent comme suit :

- -m : Correspond à l'option spécifiée.
- -iprange : Indique au système d'attendre une plage d'adresses IP au lieu d'une seule.
- --src-range : Identifie la plage d'adresses IP.

### Étape 7 : Suppression du trafic indésirable

Si vous définissez des règles de pare-feu iptables, vous devez empêcher les accès non autorisés en supprimant tout trafic provenant d'autres ports :


```sh
sudo iptables -A INPUT -j DROP
```
L'option -A ajoute une nouvelle règle à la chaîne. Si une connexion passe par des ports autres que ceux que vous avez définis, elle sera abandonnée.

### Étape 8 : Supprimer une règle

Une méthode plus précise consiste à supprimer le numéro de ligne d'une règle.

> [!warning]
> 
>A ne pas utiliser sur un serveur distant !
>
>```sh
>sudo iptables -P INPUT DROP 
>```
>
Tout d'abord, répertoriez toutes les règles en saisissant ce qui suit :

```sh
sudo iptables -L --line-numbers
```

![line-numbers](images/Step7-all-rules.PNG){.thumbnail}

Recherchez la ligne de la règle de pare-feu que vous souhaitez supprimer et exécutez cette commande :

```sh
sudo iptables -D INPUT <Number>
```
Remplacez <Number> par le numéro de ligne de règle que vous souhaitez supprimer.

  
 ### Étape 9 : Enregistrez vos modifications

iptables ne conserve pas les règles que vous avez créées lors du redémarrage du système. 
Chaque fois que vous configurez iptables sous Linux, toutes les modifications que vous apportez s'appliquent uniquement jusqu'au prochain redémarrage.

Pour enregistrer les règles dans les systèmes basés sur Ubuntu, saisissez :
  
```sh
sudo -s iptables-save -c
```
Au prochain démarrage de votre système, iptables rechargera automatiquement les règles du pare-feu.

Vous pouvez configurer des règles de pare-feu iptables de base pour votre serveur Linux. 
N'hésitez pas à expérimenter, car vous pouvez toujours supprimer les règles dont vous n'avez pas besoin, ou vider toutes les règles et recommencer.



## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
