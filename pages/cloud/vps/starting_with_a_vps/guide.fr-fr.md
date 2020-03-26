---
title: 'Débuter avec un VPS'
excerpt: 'Apprenez les bases de l''utilisation d''un VPS'
slug: debuter-avec-vps
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 18/04/2018**
 
## Objectif

Un serveur privé virtuel (VPS, pour Virtual Private Server) est un serveur dédié virtualisé. Contrairement à un hébergement web (dit mutualisé) où la gestion technique est prise en charge par OVHcloud, c'est vous qui administrez totalement votre VPS.

**Ce guide va vous donner quelques points pour vous aider à prendre en main votre VPS nouvellement livré et installé.**


> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section “Aller plus loin” de ce guide.
> 


## Prérequis

- Avoir réservé votre VPS sur le [site OVHcloud](https://www.ovhcloud.com/fr/){.external}.
- Avoir reçu l'e-mail après l'installation (validée lors de la commande initiale) avec vos accès.


## En pratique

Une fois connecté sur votre [espace client](https://www.ovh.com/auth/?action=gotomanager){.external}, il vous suffira, pour consulter les informations liées à votre VPS, de vous rendre dans la partie `Cloud`{.action}, puis dans la colonne de gauche `Serveurs`{.action}. Vous verrez ici tout ce qui concerne votre VPS : les informations générales au milieu, les actions que vous pouvez effectuer sous la forme de boutons à droite de l'écran et les options tout en bas.

### Se connecter au VPS

Lors de l'installation (ou de la réinstallation) de votre VPS, un e-mail vous sera envoyé avec un mot de passe pour l'accès root, la connexion utilisant le protocole SSH. Le SSH est un protocole de communication sécurisé. L'accès se fait via un terminal de commande (Linux ou MAC) ou par l'intermédiaire d'un logiciel tiers sur Windows (Putty, par exemple).

Une fois votre terminal ouvert, voici la commande à taper pour vous connecter à votre VPS :

```sh
ssh root@IPv4_de_votre_VPS
```

Ou alors :

```sh
ssh root@Référence_de_votre_VPS
```

La référence de votre VPS commencera toujours par vpsXXXX.ovh.net (où XXXX est une série de chiffres).


### Installer ou réinstaller son VPS

Toute réinstallation se fait directement dans votre espace client. Il vous suffit pour cela de cliquer sur le bouton `Réinstaller mon VPS`{.action} :

![Réinstallation du VPS](images/reinstall_manager.png){.thumbnail}

Une fenêtre s'ouvre et vous aurez alors à choisir :

- votre distribution parmi celles proposées ;
- la langue ;
- une clé SSH, si vous avez déjà créé des clés dans votre espace client.


![Menu de choix pour la réinstallation](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Certaines distributions comme Plesk ou Windows nécessitent au préalable une licence que vous pouvez acquérir soit chez OVHcloud, soit auprès d'un revendeur. Vous aurez ensuite à l'intégrer manuellement ou via votre espace client. Vous pouvez gérer vos licences dans `Dédié`{.action} puis `Licences`{.action}.
À cet endroit, vous pouvez également commander des licences (bouton à droite `Commander`{.action}) ou ajouter votre propre licence SPLA Windows ou SPLA SQL Server (bouton à droite `Ajouter une licence SPLA`{.action}).
> 

Dans votre espace client, une barre de progression s'affichera, vous informant de l'avancée de la réinstallation, celle-ci pouvant prendre jusqu'à 30 minutes.

### Sécuriser votre VPS

Comme expliqué dans la partie "Objectifs" de ce guide, vous êtes administrateur de votre VPS. En cela, vous êtes responsable des données et de la sécurisation de celui-ci.

N'hésitez pas à vous reporter au guide sur la [sécurisation d'un VPS](https://docs.ovh.com/fr/vps/conseils-securisation-vps/){.external} si vous souhaitez obtenir quelques explications de base.


### Sécuriser son domaine avec un certificat SSL

Une fois votre VPS installé et sécurisé, vous pouvez vouloir sécuriser votre nom de domaine et votre site. Pour cela, l'installation d'un certificat SSL permettant d'avoir votre site en *https* et plus seulement en *http* uniquement est nécessaire.

Ce certificat SSL peut être installé manuellement par vos soins, directement sur le VPS. Reportez-vous pour cela à la documentation officielle de la distribution que vous utilisez.

De manière plus automatique, OVHcloud vous propose le [SSL Gateway](https://www.ovh.com/fr/ssl-gateway/). N'hésitez pas à vous reporter à la [page commerciale](https://www.ovh.com/fr/ssl-gateway/){.external} ou à la [documentation](https://docs.ovh.com/fr/ssl-gateway/){.external} de cette offre.

## Aller plus loin

[Introduction au SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.