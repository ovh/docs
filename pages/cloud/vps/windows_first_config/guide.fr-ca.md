---
title: Configurer une nouvelle installation de Windows Server
slug: windows-first-config
excerpt: "Découvrez comment activer les logs de démarrage, l'ICMP et le bureau à distance"
section: Premiers pas
---

**Dernière mise à jour le 06/05/2022**

## Objectif

Après une nouvelle installation d'un système d'exploitation Windows Server sur un VPS, l'accès à distance et la réponse ICMP (Internet Control Message Protocol) peuvent être désactivés.<br>
Vous pouvez cependant utiliser le KVM d'OVHcloud pour accéder à votre VPS et ainsi configurer le pare-feu Windows pour réactiver ICMP et autoriser les connexions via le Remote Desktop Protocol.<br>
L'activation des logs de démarrage (*boot logs*) Windows peut être utile pour les diagnostics d'erreurs du serveur.

**Ce guide explique comment activer ICMP, Remote Desktop Protocol et les logs de démarrage sur un VPS Windows.**

## Prérequis

- Une distribution Windows installée sur un [VPS](https://www.ovhcloud.com/fr-ca/vps/).
- Avoir accès à votre [espace client](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

### Étape 1 : accès au KVM

Pour accéder à la console KVM de votre VPS, consultez le [guide KVM VPS](../utilisation-kvm-sur-vps/).

### Étape 2 : terminer l'installation de Windows

Une fois la session KVM établie, les écrans de configuration initiale s'affichent. Vous devez configurer ici votre **pays/région**, la **langue de Windows** et votre **disposition de clavier**. Une fois que vous avez effectué cette opération, cliquez sur `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

Dans le deuxième écran, entrez un mot de passe pour votre compte Administrateur et confirmez-le, puis cliquez sur `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows appliquera vos paramètres, puis affichera l'écran de connexion. Cliquez sur le bouton `Send CtrlAltDel`{.action} dans le coin supérieur droit pour vous connecter.

![KVM](images/setup-05.png){.thumbnail}

Entrez le mot de passe que vous avez créé pour votre compte Administrateur et cliquez sur la flèche.

![KVM](images/setup-06.png){.thumbnail}

La configuration initiale est terminée. Une fois connecté, vous devez modifier les paramètres nécessaires du pare-feu Windows.

### Étape 3 : modifier le pare-feu Windows

Ouvrez les `Outils d'administration`{.action} du panneau de configuration `Système and Sécurité`{.action} et double-cliquez sur `Pare-feu Windows avec sécurité avancée`{.action}.

![Admin](images/windows4.png){.thumbnail}

Vous pouvez activer ici les règles « ICMP » et « Remote Desktop » (bureau à distance) respectives. Faites un clic droit sur la règle et sélectionnez `Autoriser la règle`{.action} dans le menu contextuel.

![Activé](images/windows5.png){.thumbnail}

Votre serveur devrait maintenant répondre aux demandes utilisant ces protocoles.

### Activation des logs de démarrage (boot logs) Windows (facultatif)

Connectez-vous à votre serveur via une session « Remote Desktop » (bureau à distance) ou [KVM](../utilisation-kvm-sur-vps/). Ouvrez le menu Démarrer de Windows et cliquez sur `Exécuter`{.action}.

![Bootlog](images/windowsboot1.png){.thumbnail}

Entrez "msconfig" et cliquez sur `OK`{.action}.

![Bootlog](images/windowsboot2.png){.thumbnail}

Dans la nouvelle fenêtre, cochez la case à côté de `Boot log`. Cliquez sur `OK`{.action}.

![Bootlog](images/windowsboot3.png){.thumbnail}

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier .txt. Le chemin du fichier est `C:\Windows\ntbtlog.txt`.

Pour accéder au contenu de ce fichier en mode rescue, veuillez suivre les instructions décrites dans [le guide du mode rescue du VPS](../mode-rescue-vps/).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
