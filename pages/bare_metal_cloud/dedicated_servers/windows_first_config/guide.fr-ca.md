---
title: Première configuration Windows Server (Pare-feu)
excerpt: Decouvrez ici comment activer la connexion au Bureau a distance via KVM si celle-ci est desactivee.
updated: 2023-02-14
---

**Derniére mise à jour le 14/02/2023**

## Objectif

Après une nouvelle installation d'un système d'exploitation Windows Server sur un serveur dédié, l'accès à distance et la réponse ICMP (Internet Control Message Protocol) peuvent parfois être désactivés.

**Ce guide explique comment configurer Windows afin de réactiver l'ICMP et d'autoriser les connexions via le protocole Remote Desktop Protocol.**

## Prérequis

- Une distribution Windows installée sur un [serveur dédié OVHcloud](https://www.ovhcloud.com/fr-ca/bare-metal/).
- Avoir accès à votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Étape 1 : accès au KVM

Pour accéder à la console KVM de votre serveur dédié, consultez le [guide KVM](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers#utiliser-le-kvm-via-votre-navigateur-web-uniquement-pour-les-serveurs-les-plus-recents).

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

Pour sécuriser votre système Windows avec des règles de pare-feu, consultez notre guide « [Configurer le pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) ».

### Activation des logs de démarrage (boot logs) Windows (facultatif)

L'activation des logs de démarrage (*boot logs*) Windows peut être utile pour les diagnostics d'erreurs du serveur.

Connectez-vous à votre serveur via une session « Remote Desktop » (bureau à distance) ou [KVM](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers#utiliser-le-kvm-via-votre-navigateur-web-uniquement-pour-les-serveurs-les-plus-recents). Ouvrez le menu Démarrer de Windows et cliquez sur `Exécuter`{.action}.

![Bootlog](images/windowsboot1.png){.thumbnail}

Entrez "msconfig" et cliquez sur `OK`{.action}.

![Bootlog](images/windowsboot2.png){.thumbnail}

Dans la nouvelle fenêtre, cochez la case à côté de `Boot log`. Cliquez sur `OK`{.action}.

![Bootlog](images/windowsboot3.png){.thumbnail}

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier .txt. Le chemin du fichier est `C:\Windows\ntbtlog.txt`.

Pour accéder au contenu de ce fichier en mode rescue, veuillez suivre les instructions décrites dans [le guide du mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

## Aller plus loin

[Configurer le pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
