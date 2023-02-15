---
title: 'Réinitialiser un mot de passe Windows'
slug: reinitialiser-un-mot-de-passe-windows
excerpt: "Guide de réinitialisation d'un mot de passe sous Windows"
section: Diagnostic et mode Rescue
updated: 2020-11-25
---

**Dernière mise à jour le 26/11/2020**

## Objectif

Il est possible que vous deviez réinitialiser un mot de passe dans votre VPS sous Windows. Ce guide va vous permettre de facilement réinitialiser un mot de passe et rétablir la connexion à votre VPS.

## Prérequis

- Le VPS doit être en mode rescue (pour plus d'informations, consultez [Activer le mode rescue sur un VPS](../mode-rescue-vps)).

## En pratique

Connectez-vous sur le VPS via le VNC de [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) avec les identifiants de connexion que vous avez reçu par e-mail.

Tapez les commandes suivantes pour monter le système de fichiers distant :

```sh
ntfsfix /dev/sdb2
mount -t ntfs-3g /dev/sdb2 /mnt
```

A présent, démarrez la procédure de récupération du mot de passe :

```sh
cd /mnt/Windows/System32/config
chntpw -l SAM
```

Vous allez voir une liste d'utilisateurs. Veuillez prendre note du compte administrateur (ou un compte dont vous devez réinitialiser le mot de passe). Dans cet exemple, nous allons utiliser le compte `Administrator`. Veuillez prendre note que les commandes sont sensibles à la casse.

```sh
chntpw -u Administrator SAM
```

Appuyez sur `1`{.action} et `Entrée`{.action} pour effacer le mot de passe. Appuyez sur `q`{.action} pour quitter l'invite de commande de changement de mot de passe. Par la suite, appuyez sur `y`{.action} pour écrire les changements.

Vous pouvez maintenant sortir le VPS du mode rescue. (pour plus d'informations, consultez le guide [Activer le mode rescue sur un VPS](../mode-rescue-vps))

A votre prochaine connexion, vous ne serez pas obligé d'entrer un mot de passe pour la session dont vous avez fait le changement de mot de passe.

> [!warning]
>
> Il est extrêmement risqué de laisser le compte administrateur (ou tout compte ayant des droits élevés) avec un mot de passe vide. Veuillez vous connecter immédiatement sur votre installation de Windows afin de réinitialiser votre mot de passe.
> 

Une fois connecté sur votre session, appuyez sur `CTRL`{.action} + `ALT`{.action} + `DELETE`{.action} et par la suite, cliquez sur `Changer un mot de passe`{.action}. Si vous utilisez VNC, cliquez sur le bouton situé en haut à droite intitulé `Send CtrlAltDel`{.action}.

Laissez le champ `Ancien mot de passe` vide et veuillez écrire votre nouveau mot de passe deux fois. Veuillez vous assurer que votre mot de passe est identique.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
