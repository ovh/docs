---
title: 'Utilisation de l''IPMI pour les serveurs dédiés'
slug: utilisation-ipmi-serveurs-dedies
excerpt: 'L''IPMI permet de vous connecter à votre serveur sans utiliser un logiciel externe'
section: 'Premiers pas'
---

**Dernière mise à jour le 16/08/2018**

## Objectif

La console IPMI (Intelligent Platform Management Interface) permet d’établir une connexion directe à votre serveur dédié sans utiliser un logiciel externe (un terminal ou PuTTY, par exemple). Ce guide vous explique comment démarrer cette console.

À noter que vous y rencontrerez aussi le terme KVM (Keyboard Video and Mouse), qui est notamment employé par les VPS pour cette solution.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager).


## En pratique

La connexion à l’IPMI peut s’effectuer via deux méthodes : l’applet Java (conseillé) ou le navigateur (Serial over LAN).

__Applet Java__ : permet d'utiliser un outil KVM (clavier, vidéo, souris) via une console Java pour effectuer les actions souhaitées. Il existe ici deux options, à savoir clavier et souris.

__Navigateur (Serial over LAN)__ : permet d'accéder à distance à la console du serveur, via un navigateur web.

### Se connecter avec l’applet Java

Pour que l’applet Java fonctionne, il faut que Java soit installé sur votre poste. Si ce n’est pas déjà fait, rendez-vous sur la [page officielle](https://www.java.com/en/download/){.external}.

Dans la partie `IPMI`{.action} de votre espace client, cliquez sur `Depuis un applet Java (KVM)`{.action} :

![IPMI Java initié](images/java_ipmi_initiate_2020.png){.thumbnail}

Téléchargez le fichier `kvm.jnlp` lorsque vous y êtes invité, puis lancez-le :

![Ouverture IPMI Java](images/java_ipmi_activation.png){.thumbnail}

Vous accédez alors à la page de connexion. Entrez vos identifiants `root`, comme lors d’une connexion par un terminal ou un logiciel externe :

![Connexion Java IPMI](images/java_ipmi_login.png){.thumbnail}

Vous pouvez désormais gérer votre serveur.

### Se connecter depuis votre navigateur en Serial over LAN (SoL)

Bien que nous vous recommandions de vous connecter via l'applet Java, vous pouvez également utiliser l'IPMI en Serial over LAN (SoL). Pour ce faire, cliquez sur `Depuis votre navigateur (SoL)`{.action}dans la partie `IPMI`{.action} de votre espace client.

![Activation de la déclaration d'intégrité IPMI](images/sol_ipmi_activation_2020.png){.thumbnail}

> [!warning]
>
> La connexion en SoL peut nécessiter plusieurs minutes, raison pour laquelle l’applet Java est conseillé.
>

### Tester et redémarrer l'IPMI

Il est possible que l’IPMI ne réponde plus. Si vous n’arrivez pas à y accéder, vous pouvez effectuer un test dans un premier temps en cliquant sur `Tester IPMI`{.action} et visualiser le résultat du diagnostic :

![Test IPMI](images/ipmi_test_2020.png){.thumbnail}

Si tout est normal comme dans notre exemple, vous faites probablement face à un souci local (connexion à Internet, poste local). Si l’IPMI rencontre effectivement une difficulté, vous avez la possibilité de le redémarrer en cliquant sur `Redémarrer IPMI`{.action}.

![Test IPMI](images/ipmi_reboot_2020.png){.thumbnail}

Le redémarrage de l'IPMI prend quelques minutes.

> [!Primary]
>
> Cette opération n'affecte pas le fonctionnement du serveur.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
