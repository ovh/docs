---
title: 'Créer et configurer un groupe de sécurité dans Horizon'
slug: configure-security-group-horizon
excerpt: 'Apprenez à créer un groupe de sécurité et à le configurer sur une instance Public Cloud'
section: Gestion depuis Horizon
order: 08
---

**Dernière mise à jour le 24/08/2021**

## Objectif

Pour des raisons de sécurité, il est possible de configurer et d'utiliser des règles de filtrage qui définiront les accès à vos instances. Vous pouvez y autoriser ou bloquer certaines connexions entrantes ou sortantes à l'aide de groupes de sécurité. Ces règles peuvent être appliquées pour du trafic provenant de certaines adresses IP, ou même pour des instances configurées sur des groupes de sécurité en particulier.

**Apprenez à créer un groupe de sécurité et à le configurer sur une instance Public Cloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/).
- [Être connecté à l'interface Horizon](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/)

## En pratique

### Étape 1 : créer un groupe de sécurité

Accédez à l'interface [Horizon](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/). Choisissez alors la région dans laquelle vous voulez créer un groupe de sécurité, via le bouton en haut à gauche.

![définir la région](images/security-group0.png){.thumbnail}

> [!primary]
>
> Si un groupe de sécurité doit être utilisé dans plusieurs régions, vous devez le créer pour chacune d’elles.
>

A présent, dépliez le menu `Network`{.action} et cliquez sur `Security Groups`{.action}. Un tableau liste les groupes de sécurité créés. Le groupe « default » y est déjà listé. Celui-ci laisse passer tout le trafic entrant et sortant.

Pour ajouter un nouveau groupe de sécurité, cliquez sur le bouton `+ Create Security Group`{.action}.

![accéder aux groupes de sécurité](images/security-group1.png){.thumbnail}

Sur la page qui apparaît, donnez un nom et une description au groupe que vous êtes sur le point de créer. Une fois ceci fait, cliquez sur le bouton `Create Security Group`{.action}.

![créer un groupe de sécurité](images/security-group2.png){.thumbnail}

De retour sur sur l'onglet `Security Groups`{.action}, le tableau affiche désormais le groupe nouvellement créé. Des règles y sont configurées par défaut. Ces dernières laissent passer uniquement le trafic sortant. Poursuivez vers l'étape suivante si vous souhaitez modifier ces dernières.

Si ces règles vous conviennent, poursuivez la lecture de ce guide à l'étape 3 « [configurer un groupe de sécurité sur son instance](#instance-security-group) ».

### Étape 2 : configurer les règles d'un groupe de sécurité

Pour modifier les règles par défaut ou si vos besoins évoluent, cliquez sur le bouton `Manage Rules`{.action}.

![gérer les règles](images/security-group3.png){.thumbnail}

Si vous avez laissé les règles par défaut sur votre groupe de sécurité, celles-ci ne laissent passer que le trafic sortant.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```

Dès lors, sur la page de gestion des règles, vous avez la possibilité de :

- supprimer une règle existante : utilisez pour cela le bouton `Delete Rule`{.action} ;
- ajouter une nouvelle règle : utilisez pour cela le bouton `+ Add Rule`{.action}.

Lors de l'ajout d'une règle, vous devrez compléter les informations demandées puis cliquer sur `Add`{.action}.

Dans notre exemple, nous allons autoriser la connexion SSH à l'instance.

![ajouter une règle](images/security-group4.png){.thumbnail}

Une fois la nouvelle règle ajoutée, patientez quelques minutes le temps que celle-ci soit prise en compte.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1:~$
```

### Configurer un groupe de sécurité sur une instance <a name="instance-security-group"></a>

Depuis l'interface Horizon, dépliez le menu `Compute`{.action} et sélectionnez `Instances`{.action}. Depuis cette page, créez une nouvelle instance via le bouton `Launch Instance`{.action}.

Lors de la création de votre instance, vous pourrez choisir, via le menu `Security Groups`{.action}, le nouveau groupe de sécurité créé lors de l'étape précédente.

![affecter groupe de sécurité](images/security-group5.png){.thumbnail}

Vous pouvez appliquer un nouveau groupe de sécurité sur une instance déjà créée en cliquant sur `Edit Security Groups`{.action} à droite de l'instance.

![modifier groupe de sécurité](images/security-group6.png){.thumbnail}

### Supprimer un groupe de sécurité

Pour supprimer un groupe de sécurité, sélectionnez-le en cochant la case correspondante à gauche puis cliquez sur `Delete Security Groups`{.action}.

![supprimer groupe de sécurité](images/security-group7.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
