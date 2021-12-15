---
title: Configuer le firewall software sous Linux avec IPtables
excerpt: Découvrez comment sécuriser un serveur avec iptables
slug: firewall-software-Linux-IPtables
section: Premiers pas
order: 7
---

**Dernière mise à jour le 13/12/2021**


## Objectif

Lorsque vous commandez votre serveur dédié, aucun protocole de sécurité n'est implémenté de manière native. Il vous revient donc de le sécuriser. En effet, OVHcloud ne pourra être tenu responsable d'un défaut de sécurisation de votre machine.

**Apprenez à sécuriser votre serveur dédié grâce à iptable.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Être connecté en SSH (accès root) sous Linux en tant qu'administrateur.


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
apt-get update
```

#### Mettre à jour les paquets

Mettez ensuite à jour les paquets sur votre serveur de la manière suivante :

```sh
~#apt-get upgrade
```


Une fois les mises à jour terminées, votre système sera entièrement à jour. Cette opération doit être effectuée de manière régulière.


### Étape 2 : Installation du pare-feu iptables linux

> [!primary]
>
> Il existe deux versions différentes d'iptables, pour IPv4 et IPv6. Les règles que nous couvrons dans ce didacticiel Linux iptables concernent IPv4.
> Pour configurer iptables pour IPv6, vous devez utiliser l'utilitaire iptables6. Ces deux protocoles différents ne fonctionnent pas ensemble et doivent être configurés indépendamment
>

Iptables est installé par défaut sur la plupart des systèmes Linux. Pour confirmer qu'iptables est installé, utilisez la commande suivante :

```sh
~#sudo apt-get install iptable
```

En général, une commande iptables se présente comme suit :

```sh
sudo iptables [option] CHAIN_rule [-j target]
```

Voici une liste de quelques options iptables courantes :

- -A --append – Ajoute une règle à une chaîne (à la fin).
- -C --check - Recherchez une règle qui correspond aux exigences de la chaîne.
- -D --delete – Supprime les règles spécifiées d'une chaîne.
- -F --flush – Supprime toutes les règles.
- -I --insert – Ajoute une règle à une chaîne à une position donnée.
- -L --list – Affiche toutes les règles d'une chaîne.
- -N -new-chain – Créer une nouvelle chaîne.
- -v --verbose – Affiche plus d'informations lors de l'utilisation d'une option de liste.
- -X --delete-chain – Supprime la chaîne fournie.


### Étape 3 : Vérifier l'état actuel d'iptables

Pour afficher l'ensemble de règles actuel sur votre serveur, saisissez ce qui suit dans la fenêtre du terminal :

```sh
~#sudo iptables -L

Chain INPUT (policy ACCEPT)
target     prot opt source               destination

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```
Le système affiche le statut de vos chaînes. 
La sortie répertoriera trois chaînes :


### Étape 3 : Activation du trafic sur localhost

Pour autoriser le trafic de votre propre système (le localhost). Ajoutez la chaîne d'entrée en entrant ce qui suit :

```sh
sudo iptables -A INPUT -i lo -j ACCEPT
```
Cette commande configure le pare-feu pour accepter le trafic pour l'interface localhost (lo) (-i). Désormais, tout ce qui provient de votre système passera par votre pare-feu.
Vous devez définir cette règle pour permettre aux applications de communiquer avec l'interface localhost.

### Étape 4 : Autoriser le trafic sur des ports spécifiques

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

- -p – Vérifie le protocole spécifié (tcp).
- --dport – Spécifiez le port de destination.
- -j jump – Effectue l'action spécifiée.

### Configurer le pare-feu interne : iptables


La distribution nue dispose d’un service de pare-feu nommé iptables. Par défaut, ce service ne possède aucune règle active. Vous pouvez le constater en tapant la commande suivante :

```sh
iptables -L
```

Il est alors recommandé de créer et d’ajuster à votre utilisation des règles sur ce pare-feu. Pour plus d'informations sur la configuration des iptables, reportez-vous à la documentation officielle de votre distribution Linux.


#

Vous aurez besoin d'une solution de sauvegarde tierce pour répliquer vos données et les transférer vers votre stockage de sauvegarde.

Pour plus d'informations sur nos solutions de stockage de sauvegarde, consultez notre [guide](../services-backup-storage/){.external} de stockage de sauvegarde.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
