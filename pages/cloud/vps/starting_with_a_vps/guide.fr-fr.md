---
title: 'Débuter avec un VPS'
excerpt: "Apprenez les bases de l'utilisation d'un VPS"
slug: debuter-avec-vps
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 25/03/2022**

## Objectif

Un serveur privé virtuel (VPS, pour Virtual Private Server) est un serveur dédié virtualisé. Contrairement à un hébergement web (dit mutualisé) où la gestion technique est prise en charge par OVHcloud, c’est vous qui administrez totalement votre VPS.

**Ce guide fournit des informations de base pour vous aider à prendre en main votre VPS.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0JZ8Qe4otgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Si vous rencontrez des difficultés pour effectuer ces actions, veuillez contacter un prestataire de services spécialisé et/ou discuter du problème avec notre communauté d'utilisateurs sur https://community.ovh.com/. OVHcloud ne peut pas vous fournir de support technique à cet égard.
>

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) dans votre espace client OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}
- Disposer des identifiants de connexion envoyés par e-mail après l'installation

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

Le tableau de bord qui vous est présenté contient des informations importantes sur votre service et vous permet d'effectuer des opérations essentielles. Il apparaîtra différemment selon la gamme de votre VPS.

- Si vous venez de commander un VPS, sa référence se présente ainsi : *vps-XXXXXXX.vps.ovh.net* (où les *X* sont une suite de chiffres et de lettres).
- Si vous gérez un VPS plus ancien, vous remarquerez que sa référence est structurée différemment: *vpsXXXX.ovh.net* (dans lequel les *X* sont un nombre).

Pour la gamme actuelle de VPS, poursuivez la lecture de ce guide à la section suivante, **Premiers pas (gamme VPS actuelle)**.

Pour un modèle VPS plus ancien, poursuivez la lecture de ce guide en cliquant sur le lien suivant : [Premiers pas (ancienne gamme VPS)](./#premiers-pas-ancienne-gamme-vps_1).

### Premiers pas (gamme VPS actuelle)

#### Connexion à votre VPS (gamme VPS actuelle)

Lors de la première installation ou d'une réinstallation à partir de l'espace client, un utilisateur disposant de l'intégralité des droits sera créé et vous recevrez un e-mail contenant ses informations d'identification.
Le nom d'utilisateur sera généré en fonction du système d'exploitation, par exemple « ubuntu » ou « debian ».

Vous pouvez vous connecter à votre VPS en SSH avec le nom d'utilisateur et le mot de passe. (Le SSH est un protocole de communication sécurisé. Pour en savoir plus, consultez [ce guide d'introduction au SSH pour les serveurs dédiés OVHcloud](../../dedicated/ssh-introduction/). Vous pouvez accéder à votre serveur via un terminal de ligne de commande (Linux ou MAC) ou via un logiciel tiers sous Windows (nous vous recommandons PuTTy).

En utilisant PuTTy par exemple, ouvrez simplement l'application et entrez le nom de serveur ou son adresse IPv4 pour établir une connexion. Vous serez invité à entrer le nom d'utilisateur et le mot de passe, puis vous pourrez passer à l'interface de ligne de commande (CLI).

![utilisation putty](images/putty1.png){.thumbnail}

Une fois le terminal ouvert, entrez la commande suivante pour vous connecter à votre VPS avec les informations fournies dans l'e-mail (nom d'utilisateur et adresse IPv4):

```bash
ssh nom_d_utilisateur@IPv4_de_votre_VPS
```

Étant donné que vous êtes maintenant connecté avec des droits élevés (un utilisateur *sudo*), vous pouvez entrer des commandes pour effectuer des tâches administratives. Il est recommandé de modifier votre mot de passe au préalable :

```bash
~$ sudo passwd nom_d_utilisateur
New password:
Retype new password:
passwd: password updated successfully
```

À noter que les mots de passe ne sont pas affichés. Basculez ensuite vers l'utilisateur « root » et définissez votre mot de passe admin :

```bash
~$ sudo su -
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Activation des connexions root

Par mesure de sécurité, la connexion avec l'utilisateur « root » est désactivée par défaut. Si vous devez autoriser ce type de connexions, reportez-vous aux instructions de [ce guide](../root-password/#activer-le-mot-de-passe-root_1).

#### Redémarrer votre VPS (gamme VPS actuelle) <a name="reboot-current-range"></a>

Un redémarrage peut être nécessaire pour appliquer des configurations mises à jour ou pour résoudre un problème. Dans la mesure du possible, effectuez un « soft reboot » du serveur via la ligne de commande suivante :

```bash
reboot
```

Cependant, vous pouvez effectuer un « hard reboot » à tout moment dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sous l'onglet `Accueil`{.action}, cliquez sur `...`{.action} en face de « Boot » dans la zone **Votre VPS**, puis cliquez sur `Redémarrer mon VPS`{.action} et `Confirmer`{.action} dans la fenêtre contextuelle.

![Reboot](images/reboot-vps-current.png){.thumbnail}

#### Installation ou réinstallation de votre VPS (gamme VPS actuelle) <a name="reinstallvps"></a>

Vous pouvez effectuer toute réinstallation directement dans l'espace client OVHcloud. Sous l'onglet « Accueil », recherchez « OS / Distribution » dans la zone **Votre VPS**. Cliquez sur `...`{.action}, puis sur `Réinstaller mon VPS`{.action}.

![Réinstallation du VPS](images/2020panel_02.png){.thumbnail}

Une fenêtre s'ouvre et vous aurez alors à choisir :

- votre distribution parmi celles proposées ;
- une [clé SSH](../../dedicated/creer-cle-ssh-serveur-dediees/) (facultatif).

![Réinstallation du VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Certains systèmes d'exploitation ou plates-formes propriétaires tels que Plesk ou cPanel nécessitent des licences qui génèrent des frais supplémentaires. Les licences peuvent être gérées depuis votre espace client OVHcloud : accédez à la section `Bare Metal Cloud` en haut à gauche de votre espace client puis cliquez sur `Licences`{.action}.
> 
> Pour qu'un système d'exploitation **Windows** s'exécute sur un VPS, il doit être **sélectionné pendant la commande** de celui-ci. Un VPS avec un autre système d'exploitation installé ne peut pas être réinstallé avec Windows selon la méthode décrite ci-dessus.
> 

Une barre de progression s'affichera dans votre espace client, vous informant de l'avancée de la réinstallation, celle-ci pouvant prendre jusqu'à 30 minutes.

### Premiers pas (ancienne gamme VPS)

#### Connexion à votre VPS (ancienne gamme VPS)

Lors de l'installation (ou de la réinstallation) de votre VPS, un e-mail vous sera envoyé contenant un mot de passe pour l'accès root, la connexion utilisant le protocole SSH. Le SSH est un protocole de communication sécurisé. Pour en savoir plus, consultez [ce guide d'introduction au SSH pour les serveurs dédiés OVHcloud](../../dedicated/ssh-introduction/). 

Vous pouvez accéder à votre serveur via un terminal de ligne de commande (Linux ou MAC) ou via un logiciel tiers sous Windows (nous vous recommandons PuTTy).

En utilisant PuTTy par exemple, ouvrez simplement l'application et entrez le nom de serveur ou son adresse IPv4 pour établir une connexion. Vous serez invité à entrer le nom d'utilisateur et le mot de passe, puis vous pourrez passer à l'interface de ligne de commande (CLI).

![utilisation putty](images/putty1.png){.thumbnail}

Une fois votre terminal ouvert, voici la commande à taper pour vous connecter à votre VPS :

```bash
ssh root@IPv4_de_votre_VPS
```

Ou alors :

```bash
ssh root@Référence_de_votre_VPS
```

#### Redémarrer votre VPS (ancienne gamme VPS) <a name="reboot-older-range"></a>

Un redémarrage peut être nécessaire pour appliquer des configurations mises à jour ou pour résoudre un problème. Dans la mesure du possible, effectuez un « soft reboot » du serveur via la ligne de commande suivante :

```bash
reboot
```

Cependant, vous pouvez effectuer un « hard reboot » à tout moment dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sous l'onglet `Accueil`{.action}, cliquez sur `Redémarrer mon VPS`{.action}  puis sur `Confirmer`{.action} dans la fenêtre contextuelle.

![Reboot](images/reboot-vps-older.png){.thumbnail}

#### Installation ou réinstallation de votre VPS (ancienne gamme VPS)

Toute réinstallation se fait directement dans votre espace client. Il vous suffit pour cela de cliquer sur le bouton `Réinstaller mon VPS`{.action} depuis l'onglet `Accueil`{.action} :

![Réinstallation du VPS](images/reinstall_manager.png){.thumbnail}

Une fenêtre s'ouvre et vous aurez alors à choisir :

- votre distribution parmi celles proposées ;
- la langue ;
- une [clé SSH](../../dedicated/creer-cle-ssh-serveur-dediees/) (facultatif).

![Menu de réinstallation](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Certains systèmes d'exploitation ou plates-formes propriétaires tels que Plesk ou cPanel nécessitent des licences qui génèrent des frais supplémentaires. Les licences peuvent être gérées depuis votre espace client OVHcloud : accédez à la section `Bare Metal Cloud` en haut à gauche de votre espace client puis cliquez sur `Licences`{.action}.
> 
> Pour qu'un système d'exploitation **Windows** s'exécute sur un VPS, il doit être **sélectionné pendant la commande** de celui-ci. Un VPS avec un autre système d'exploitation installé ne peut pas être réinstallé avec Windows selon la méthode décrite ci-dessus.
> 

Une barre de progression s'affichera dans votre espace client, vous informant de l'avancée de la réinstallation, celle-ci pouvant prendre jusqu'à 30 minutes.

### Sécuriser votre VPS

Comme expliqué dans la section « Objectif » de ce guide, vous êtes l'administrateur de votre VPS. En tant que tel, vous êtes responsable de vos données et de leur sécurité.

Pour obtenir des conseils de base, consultez le guide « [Sécuriser un VPS](../conseils-securisation-vps/) ».

### Attacher un domaine

L'utilisation de votre VPS pour la publication d'un site Web implique généralement l'attachement d'un nom de domaine via DNS. Si vous gérez votre domaine sur OVHcloud, consultez notre guide sur la [modification de votre zone DNS](../../domains/editer-ma-zone-dns/) pour obtenir des instructions.

### Sécuriser son domaine avec un certificat SSL

Une fois votre VPS installé et sécurisé, vous pouvez vouloir sécuriser votre nom de domaine et votre site. Pour cela, l'installation d'un certificat SSL permettant d'avoir votre site en *https* et plus seulement en *http* uniquement est nécessaire.

Ce certificat SSL peut être installé manuellement par vos soins, directement sur le VPS. Reportez-vous pour cela à la documentation officielle de la distribution que vous utilisez.

De manière plus automatique, OVHcloud vous propose le [SSL Gateway](https://www.ovh.com/fr/ssl-gateway/). N'hésitez pas à vous reporter à la [page commerciale](https://www.ovh.com/fr/ssl-gateway/){.external} ou à la [documentation](https://docs.ovh.com/fr/ssl-gateway/){.external} de cette offre.

## Allez plus loin

[Créer une clé SSH](../../dedicated/creer-cle-ssh-serveur-dediees//)

[Sécuriser un VPS](../conseils-securisation-vps/)

[Configurer une nouvelle installation de Windows Server](../windows-first-config/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
