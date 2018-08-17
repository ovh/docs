---
title: 'Utilisation de l''IPMI pour les serveurs dédiés'
slug: utiliser-ipmi-serveurs-dedies
excerpt: 'L''IPMI permet de vous connecter à votre serveur sans utiliser un logiciel externe'
section: 'Pour bien démarrer'
---

**Dernière mise à jour le 16/08/2018**

## Objectif

La console IPMI (Intelligent Platform Management Interface) permet d'établir une connexion directe à votre serveur dédié sans utiliser un logiciel externe (terminal ou Putty par exemple). Ce guide vous expliquera comment démarrer cette console.

À noter que vous y rencontrerez aussi le terme KVM (Keyboard Video and Mouse), qui est notamment employé par les VPS pour cette solution.

## Prérequis

- Être connecté à votre [espace client](https://ca.ovh.com/manager/).


## En pratique

La connexion à l'IPMI peut s'effectuer via deux méthodes : l'applet Java (conseillé) ou le navigateur (Serial over LAN).

### Se connecter avec l'applet Java

Pour que l'applet Java fonctionne, il faut que Java soit installé sur votre poste. Si ce n'est pas déjà fait, rendez-vous sur la [page officielle](https://www.java.com/fr/download/){.external}.

Dans la partie `IPMI`{.action} de votre espace client, cliquez ensuite sur `Depuis une applet java (KVM)`{.action} :

![IPMI Java initiated](images/java_ipmi_initiate.png){.thumbnail}

Vous devez télécharger le fichier proposé `kvm.jnlp` et le lancer :

![IPMI Java opening](images/java_ipmi_activation.png){.thumbnail}

Vous arrivez alors sur la page de connexion où vos identifiants `root` sont demandés, comme lors d'une connexion par un terminal ou un logiciel externe :

![IPMI Java login](images/java_ipmi_login.png){.thumbnail}

Vous gérez ensuite normalement votre serveur.

### Se connecter depuis votre navigateur en Serial over LAN (SoL)

Même si la connexion via l'applet Java est conseillée, l'utilisation de l'IPMI en Serial over LAN est possible. Pour cela, cliquez dans la partie `IPMI`{.action} sur `Depuis votre navigateur (SoL)`{.action} :

![IPMI SoL activation](images/sol_ipmi_activation.png){.thumbnail}

> [!warning]
>
> La connexion en SoL peut nécessiter plusieurs minutes, raison pour laquelle l'applet est conseillé.
>

### Tester et redémarrer l'IPMI

Il est possible que l'IPMI ne réponde plus. Si vous n'arrivez pas à y accéder, vous pouvez effectuer un test dans un premier temps en cliquant sur `Tester IPMI`{.action} et visualiser le résultat du diagnostic :

![IPMI test](images/ipmi_test.png){.thumbnail}

Si tout est normal comme dans notre exemple, vous faites probablement face à un souci local (connexion Internet, poste local). Si l'IPMI rencontre effectivement une difficulté, vous avez la possibilité de le redémarrer en cliquant sur `Redémarrer IPMI`{.action}.

![IPMI test](images/ipmi_reboot.png){.thumbnail}

Le redémarrage prend quelques minutes.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.