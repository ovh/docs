---
title: "Utilisation de l'IPMI pour les serveurs dédiés"
slug: utilisation-ipmi-serveurs-dedies
excerpt: "L'IPMI permet de vous connecter à votre serveur sans utiliser un logiciel externe"
section: 'Premiers pas'
order: 4
---

**Dernière mise à jour le 18/03/2021**

## Objectif

La console IPMI (Intelligent Platform Management Interface) permet d’établir une connexion directe à votre serveur dédié sans utiliser un logiciel externe (un terminal ou PuTTY, par exemple). Ce guide vous explique comment démarrer cette console.

À noter que vous y rencontrerez aussi le terme KVM (Keyboard Video and Mouse), qui est notamment employé par les VPS pour cette solution.

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.

## En pratique

La connexion à l’IPMI peut s’effectuer principalement via plusieurs méthodes : l’applet Java (conseillé) ou le navigateur (Serial over LAN).

- **Applet Java** : permet d'utiliser un outil KVM (clavier, vidéo, souris) via une console Java pour effectuer les actions souhaitées. Il existe ici deux options, à savoir clavier et souris.

- **Navigateur (Serial over LAN)** : permet d'accéder à distance à la console du serveur, via un navigateur web.

- Une troisième méthode, uniquement disponible pour les serveurs les plus récents, permet d'utiliser un outil KVM depuis un navigateur web.

Pour activer l'une de ces méthodes, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Dans la partie `Bare Metal Cloud`{.action}, cliquez sur `Serveurs dédiés`{.action} et sélectionnez votre serveur puis cliquez sur l'onglet `IPMI`{.action}.

### Se connecter avec l’applet Java <a name="applet-java"></a>

Pour que l’applet Java fonctionne, il faut que Java soit installé sur votre poste. Si ce n’est pas déjà fait, rendez-vous sur la [page officielle](https://www.java.com/en/download/){.external}.

Dans la partie `IPMI`{.action} de votre espace client OVHcloud, cliquez sur `Depuis une applet Java (KVM)`{.action} :

![IPMI Java initié](images/java_ipmi_initiate_2022.png){.thumbnail}

Téléchargez le fichier `kvm.jnlp` lorsque vous y êtes invité, puis lancez-le :

![Ouverture IPMI Java](images/java_ipmi_activation.png){.thumbnail}

Vous accédez alors à la page de connexion. Entrez vos identifiants `root`, comme lors d’une connexion par un terminal ou un logiciel externe :

![Connexion Java IPMI](images/java_ipmi_login.png){.thumbnail}

Vous pouvez désormais gérer votre serveur.

### Utiliser le KVM via votre navigateur web (uniquement pour les serveurs les plus récents)

Dans la partie `IPMI`{.action} de votre espace client OVHcloud, cliquez sur `Depuis votre navigateur (KVM)`{.action} :

![IPMI navigateur](images/KVM-web-browser01.png){.thumbnail}

L'activation prend quelques secondes. Un message vous informera de la disponibilité de la connexion via IPMI.

![IPMI navigateur](images/KVM-web-browser02.png){.thumbnail}

Cliquez alors sur `Accéder à la console (KVM)`{.action} pour ouvrir la console dans votre navigateur.

![IPMI navigateur](images/KVM-web-browser03b.png){.thumbnail}

### Se connecter depuis votre navigateur en Serial over LAN (SoL)

Même si nous vous recommandons de vous connecter via l'applet Java, vous pouvez également utiliser l'IPMI en Serial over LAN (SoL). Pour ce faire, cliquez sur `Depuis votre navigateur (SoL)`{.action} dans la partie `IPMI`{.action} de votre espace client.

![Activation de la déclaration d'intégrité IPMI](images/sol_ipmi_activation_2022.png){.thumbnail}

> [!warning]
>
> La connexion en SoL peut nécessiter plusieurs minutes, raison pour laquelle l’applet Java est conseillée.
>

### Tester et redémarrer l'IPMI

Il est possible que l’IPMI ne réponde plus. Si vous n’arrivez pas à y accéder, vous pouvez effectuer un test dans un premier temps en cliquant sur `Tester IPMI`{.action} et visualiser le résultat du diagnostic :

![Test IPMI](images/ipmi_test_2022.png){.thumbnail}

Si tout est normal comme dans notre exemple, vous faites probablement face à un souci local (connexion à Internet, poste local). Si l’IPMI rencontre effectivement une difficulté, vous avez la possibilité de le redémarrer en cliquant sur `Redémarrer IPMI`{.action}.

![Test IPMI](images/ipmi_reboot_2022.png){.thumbnail}

Le redémarrage de l'IPMI prend quelques minutes.

> [!primary]
> Cette opération n'affecte pas le fonctionnement du serveur.
>

### Installation d'un système d'exploitation à l'aide d'IPMI v1

> [!warning]
> OVHcloud ne garantit pas la fonctionnalité des systèmes d'exploitation installés via IPMI. Cette méthode ne doit être envisagée que par un administrateur de serveurs expérimenté.

Pour commencer, ouvrez [IPMI depuis une applet Java](./#applet-java) via votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Cliquez ensuite sur `Device`{.action} dans la barre de menus et sélectionnez `Redirect ISO`{.action} dans le menu déroulant.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

Sélectionnez ensuite l'ISO que vous souhaitez utiliser dans le système de fichiers de votre ordinateur local. Une fois que vous avez sélectionné votre ISO, appuyez sur le bouton `Ctrl Alt Del`{.action} dans le coin supérieur droit de l'écran pour redémarrer le serveur. Appuyez sur la touche `F` pour accéder aux options de démarrage.

> [!primary]
> Vous devrez peut-être utiliser le clavier logiciel pour enregistrer les entrées dans IPMI. Pour y accéder, cliquez sur l'option `Keyboard`{.action} dans la barre de menus en haut de la fenêtre. Sélectionnez ensuite `Soft Keyboard` dans le menu déroulant et cliquez sur `Show`{.action}.
>

Sélectionnez l'option `UEFI Virtual CDROM 1.00` dans le menu de démarrage (Boot) pour démarrer le serveur à partir de l'ISO précédemment attaché.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Suivez les étapes requises pour installer le système d'exploitation. N'oubliez pas de supprimer l'ISO de l'option « Redirect ISO ».

### Installation d'un système d'exploitation à l'aide d'IPMI v2

> [!warning]
> OVHcloud ne garantit pas la fonctionnalité des systèmes d'exploitation installés via IPMI. Cette méthode ne doit être envisagée que par un administrateur de serveurs expérimenté.
>

Pour commencer, ouvrez [IPMI depuis une applet Java](./#applet-java) via votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Cliquez ensuite sur `Virtual Media`{.action} puis sur `Virtual Storage`{.action}.

![Virtual storage](images/virtual_storage.png){.thumbnail}

Dans la fenêtre qui s'affiche alors, sélectionnez `ISO File` dans la liste déroulante « Logical Drive Type ». Cliquez ensuite sur `Open Image`{.action} et naviguez jusqu'à votre fichier ISO. Enfin, cliquez sur `Plug-in`{.action} et `OK`{.action} pour terminer.

![ISO_file](images/iso_file.png){.thumbnail}

Afin de démarrer à partir de votre fichier ISO, vous devez accéder au BIOS et changer les options de démarrage. Pour ce faire, cliquez sur `Power Control`{.action} puis sur `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Vous devrez peut-être utiliser le clavier logiciel pour enregistrer les entrées dans IPMI. Pour y accéder, cliquez sur l'option `Virtual Media`{.action} dans la barre de menus en haut de la fenêtre. Sélectionnez ensuite `Virtual Keyboard`{.action} dans le menu déroulant.
>

Pendant le processus de démarrage, appuyez sur la touche `SUPPR` lorsque vous êtes invité à accéder au BIOS. Vous pouvez également appuyer sur la touche `F11` et accéder au BIOS en sélectionnant l'option `Enter Setup`{.action}.

![Menu_démarrage](images/boot_menu.png){.thumbnail}

Dans le BIOS, naviguez jusqu'à l'onglet `Boot`{.action} et remplacez `UEFI Boot Order #1` par `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Enfin, appuyez sur la touche `F4` pour enregistrer vos modifications et redémarrer le serveur.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
