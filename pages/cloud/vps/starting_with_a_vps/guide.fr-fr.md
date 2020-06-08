---
title: 'Débuter avec un VPS'
excerpt: 'Apprenez les bases de l''utilisation d''un VPS'
slug: debuter-avec-vps
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 29/05/2020**
 
## Objectif

Un serveur privé virtuel (VPS, pour Virtual Private Server) est un serveur dédié virtualisé. Contrairement à un hébergement web (dit mutualisé) où la gestion technique est prise en charge par OVHcloud, c'est vous qui administrez totalement votre VPS.

**Ce guide va vous donner quelques points pour vous aider à prendre en main votre VPS nouvellement livré et installé.**


> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section “Aller plus loin” de ce guide.
> 


## Prérequis

- Avoir réservé votre VPS sur le [site OVHcloud](https://www.ovhcloud.com/fr/vps/){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}
- Disposer des informations de connexion envoyées par e-mail après l'installation

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, accédez à la section `Server`{.action} et sélectionnez votre serveur dans la liste de navigation de gauche sous `VPS`{.action}. 

Ce tableau de bord contient des informations importantes sur votre service et vous permet d'effectuer des opérations essentielles. Il apparaîtra différemment selon la gamme de votre VPS. 

- Si vous venez de commander un VPS, sa référence se présente ainsi : *vps-XXXXXXX.vps.ovh.net* (où les *X* sont une suite de chiffres et de lettres). 
- Si vous gérez un VPS plus ancien, vous remarquerez que sa référence est structurée différemment: *vpsXXXX.ovh.net* (dans lequel les *X* sont un nombre). 

Pour la gamme actuelle de VPS, poursuivez la lecture de ce guide à la section suivante, **Premiers pas (gamme VPS actuelle)**. 

Pour un modèle VPS plus ancien, poursuivez la lecture de ce guide en cliquant sur le lien suivant : [Premiers pas (ancienne gamme VPS)](./#premiers-pas-ancienne-gamme-vps_1).

### Premiers pas (gamme VPS actuelle)

#### Connexion à votre VPS (gamme actuelle)

Lors de la première installation ou d'une réinstallation à partir de l'espace client, un utilisateur disposant de l'intégralité des droits sera créé et vous recevrez un e-mail contenant ses informations d'identification.
Le nom d'utilisateur sera généré en fonction du système d'exploitation, par exemple « ubuntu » ou « debian ». 

Vous pouvez vous connecter à votre VPS en SSH avec le nom d'utilisateur et le mot de passe. (Le SSH est un protocole de communication sécurisé. Pour en savoir plus, consultez [ce guide d'introduction au SSH pour les serveurs dédiés OVHcloud](../../dedicated/ssh-introduction/). Vous pouvez accéder à votre serveur via un terminal de ligne de commande (Linux ou MAC) ou via un logiciel tiers sous Windows (nous vous recommandons PuTTy).

En utilisant PuTTy par exemple, ouvrez simplement l'application et entrez le nom de serveur ou son adresse IPv4 pour établir une connexion. Vous serez invité à entrer le nom d'utilisateur et le mot de passe, puis vous pourrez passer à l'interface de ligne de commande (CLI).

![utilisation putty](images/putty1.png){.thumbnail}

Une fois le terminal ouvert, entrez la commande suivante pour vous connecter à votre VPS avec les informations fournies dans l'e-mail (nom d'utilisateur et adresse IPv4):

```sh
ssh nom_d_utilisateur@IPv4_de_votre_VPS
```

Étant donné que vous êtes maintenant connecté avec les privilèges root (un utilisateur sudo), vous pouvez entrer des commandes pour effectuer des tâches administratives. Il est recommandé de modifier votre mot de passe au préalable :

```sh
$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

À noter que les mots de passe ne sont pas affichés. Basculez ensuite vers l'utilisateur "root" et définissez votre mot de passe admin :

```sh
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Installation ou réinstallation de votre VPS (gamme actuelle)

Vous pouvez effectuer toute réinstallation directement dans l'espace client OVHcloud. Sous l'onglet « Accueil », recherchez « OS / Distribution » dans la zone **Votre VPS**. Cliquez sur `...`{.action}, puis sur `Réinstaller mon VPS`{.action}.

![Réinstallation du VPS](images/2020panel_02.png){.thumbnail}

Une fenêtre s'ouvre et vous aurez alors à choisir :

- votre distribution parmi celles proposées ;
- une clé SSH, si vous avez déjà créé une clé dans votre espace client.

![Réinstallation du VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Certaines distributions comme Plesk ou Windows nécessitent au préalable une licence que vous pouvez acquérir soit chez OVHcloud, soit auprès d'un revendeur. Vous aurez ensuite à l'intégrer manuellement ou via votre espace client. Vous pouvez gérer vos licences dans `Server`{.action} puis `Licences`{.action}.
À cet endroit, vous pouvez également commander des licences (bouton à droite `Commander`{.action}) ou ajouter votre propre licence SPLA Windows ou SPLA SQL Server (bouton à droite `Ajouter une licence SPLA`{.action}).
> 

Dans votre espace client, une barre de progression s'affichera, vous informant de l'avancée de la réinstallation, celle-ci pouvant prendre jusqu'à 30 minutes.

### Premiers pas (ancienne gamme VPS)

#### Connexion à votre VPS (ancienne gamme)

Lors de l'installation (ou de la réinstallation) de votre VPS, un e-mail vous sera envoyé avec un mot de passe pour l'accès root, la connexion utilisant le protocole SSH. Le SSH est un protocole de communication sécurisé. Pour en savoir plus, consultez [ce guide d'introduction au SSH pour les serveurs dédiés OVHcloud](../../dedicated/ssh-introduction/). 

L'accès se fait via un terminal de commande (Linux ou MAC) ou par l'intermédiaire d'un logiciel tiers sur Windows (PuTTy, par exemple).

En utilisant PuTTy par exemple, ouvrez simplement l'application et entrez le nom de serveur ou son adresse IPv4 pour établir une connexion. Vous serez invité à entrer le nom d'utilisateur et le mot de passe, puis vous pourrez passer à l'interface de ligne de commande (CLI).

![utilisation putty](images/putty1.png){.thumbnail}

Une fois votre terminal ouvert, voici la commande à taper pour vous connecter à votre VPS :

```sh
ssh root@IPv4_de_votre_VPS
```

Ou alors :

```sh
ssh root@Référence_de_votre_VPS
```

#### Installation ou réinstallation de votre VPS (ancienne gamme)

Toute réinstallation se fait directement dans votre espace client. Il vous suffit pour cela de cliquer sur le bouton `Réinstaller mon VPS`{.action} :

![Réinstallation du VPS](images/reinstall_manager.png){.thumbnail}

Une fenêtre s'ouvre et vous aurez alors à choisir :

- votre distribution parmi celles proposées ;
- la langue ;
- une clé SSH, si vous avez déjà créé une clé dans votre espace client.


![Menu de choix pour la réinstallation](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Certaines distributions comme Plesk ou Windows nécessitent au préalable une licence que vous pouvez acquérir soit chez OVHcloud, soit auprès d'un revendeur. Vous aurez ensuite à l'intégrer manuellement ou via votre espace client. Vous pouvez gérer vos licences dans `Server`{.action} puis `Licences`{.action}.
À cet endroit, vous pouvez également commander des licences (bouton à droite `Commander`{.action}) ou ajouter votre propre licence SPLA Windows ou SPLA SQL Server (bouton à droite `Ajouter une licence SPLA`{.action}).
> 

Dans votre espace client, une barre de progression s'affichera, vous informant de l'avancée de la réinstallation, celle-ci pouvant prendre jusqu'à 30 minutes.

### Sécuriser votre VPS

Comme expliqué dans la partie "Objectifs" de ce guide, vous êtes administrateur de votre VPS. En cela, vous êtes responsable des données et de la sécurisation de celui-ci.

N'hésitez pas à vous reporter au guide sur la [sécurisation d'un VPS](../conseils-securisation-vps/){.external} si vous souhaitez obtenir quelques explications de base.


### Sécuriser son domaine avec un certificat SSL

Une fois votre VPS installé et sécurisé, vous pouvez vouloir sécuriser votre nom de domaine et votre site. Pour cela, l'installation d'un certificat SSL permettant d'avoir votre site en *https* et plus seulement en *http* uniquement est nécessaire.

Ce certificat SSL peut être installé manuellement par vos soins, directement sur le VPS. Reportez-vous pour cela à la documentation officielle de la distribution que vous utilisez.

De manière plus automatique, OVHcloud vous propose le [SSL Gateway](https://www.ovh.com/fr/ssl-gateway/). N'hésitez pas à vous reporter à la [page commerciale](https://www.ovh.com/fr/ssl-gateway/){.external} ou à la [documentation](https://docs.ovh.com/fr/ssl-gateway/){.external} de cette offre.

## Aller plus loin

[Introduction au SSH](../../dedicated/ssh-introduction/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.