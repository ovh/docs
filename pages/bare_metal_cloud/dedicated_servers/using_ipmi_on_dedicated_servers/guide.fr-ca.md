---
title: "Comment utiliser la console IPMI avec un serveur dédié"
excerpt: "Découvrez comment vous connecter à votre serveur depuis votre espace client sans utiliser de logiciel externe"
updated: 2024-07-23
---

## Objectif

La console IPMI (Intelligent Platform Management Interface) permet d’établir une connexion directe à votre serveur dédié sans dépendre de l'état de connectivité du système d'exploitation. Ce guide vous explique comment démarrer cette console.

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.

<a name="procedure"></a>

## En pratique

La connexion à l’IPMI peut s’effectuer via plusieurs méthodes¹. Les clés SSH stockées sur le serveur ne seront pas utilisées pour ces connexions. En voici un tableau récapitulatif :

|Nom Méthode|Autre Nom|Description|Copier-Coller|Lecteur ISO Virtuel²|Exemples de cas d'utilisation|
|---|---|---|---|---|---|
|**KVM**³ via **navigateur Web**|**KVM HTML**|Emulation de l'écran vidéo à travers un **canvas HTML**, exactement comme si vous connectiez physiquement un clavier/souris en USB et un écran vidéo en VGA à votre serveur dédié.|❌|⚠️⁴|- Diagnostiquer un problème de boot du serveur dédié.|
|**KVM**³ via **applet Java**|**KVM Java**|Idem que pour le KVM HTML, à l'exception que l'émulation s'effectue via un **applet Java** à la place du canvas HTML.|❌|✅|- Diagnostiquer un problème de boot du serveur dédié. <br />- Effectuer une installation d'un OS spécifique (hors [catalogue](/links/bare-metal/os)) manuellement⁵.|
|**SoL**⁶ via **navigateur Web**|**SoL JavaScript**|Emulation d'une liaison série via le navigateur web, exactement comme si vous connectiez un console série physiquement en RS-232 à votre serveur dédié.|✅|❌|- Diagnostiquer un problème réseau : récupérer les logs et manipuler les fichiers de configuration.|
|**SoL**⁶ via **SSH**|**SoL SSH**|Idem que pour le SoL JavaScript, à l'exception que l'émulation s'effectue via une passerelle SSH. Vous vous connectez avec votre client SSH favoris à un serveur distant en SSH, qui transpose ensuite les commandes en liaison série au serveur dédié.|✅|❌|- Idem SoL JavaScript mais depuis une machine qui n'a pas d'interface graphique.|

¹ Selon la compatibilité matérielle de votre serveur dédié (certaines méthodes ne seront pas affichées dans l'[espace client OVHcloud](/links/manager)).<br />
² Fonctionnalité permettant de monter une image ISO stockée localement sur votre machine au serveur dédié distant, et donc d'installer un OS via l'IPMI.<br />
³ KVM = Keyboard Video and Mouse<br />
⁴ Selon la compatibilité matérielle de votre serveur dédié : utiliser le KVM Java à la place si incompatible.<br />
⁵ Si l'OS que vous souhaitez installer n'est pas disponible dans le [catalogue des systèmes d'exploitation disponibles sur les serveurs dédiés OVHcloud](/links/bare-metal/os), notez que vous pouvez aussi utiliser une image personnalisée: voir [Comparaison entre Bring Your Own Image (BYOI) et Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image-versus-bring-your-own-linux) pour plus de détails.<br />
⁶ SoL = Serial over Lan

Pour activer l'une de ces méthodes, connectez-vous à votre [espace client OVHcloud](/links/manager). Dans la partie `Bare Metal Cloud`{.action}, cliquez sur `Serveurs dédiés`{.action} et sélectionnez votre serveur puis cliquez sur l'onglet `IPMI/KVM`{.action}.

### Ouvrir un KVM via applet Java <a name="applet-java"></a>

Pour que l’applet Java fonctionne, il faut que Java soit installé sur votre poste. Si ce n’est pas déjà fait, rendez-vous sur la [page officielle](https://www.java.com/en/download/){.external}.

Dans la section `Remote KVM`{.action} de votre espace client OVHcloud, cliquez sur `Depuis une applet Java (KVM)`{.action} :

![Accès KVM Java](images/ipmi-kvm-java-01.png){.thumbnail}

Téléchargez le fichier `kvm.jnlp` lorsque vous y êtes invité, puis lancez-le :

![Ouverture KVM Java](images/ipmi-kvm-java-02.png){.thumbnail}

Vous accédez alors à la page de connexion. Entrez vos identifiants `root`, comme lors d’une connexion par un terminal ou un logiciel externe :

![Aperçu KVM Java](images/ipmi-kvm-java-03.png){.thumbnail}

Vous pouvez désormais gérer votre serveur.

### Ouvrir un KVM via navigateur Web <a name="kvm-browser"></a>

Dans la section `Remote KVM`{.action} de votre espace client OVHcloud, cliquez sur `Depuis votre navigateur (KVM)`{.action} :

![Accès KVM HTML](images/ipmi-kvm-html-01.png){.thumbnail}

L'activation prend quelques secondes. Un message vous informera de la disponibilité de la connexion via IPMI.

![Ouverture KVM HTML](images/ipmi-kvm-html-02.png){.thumbnail}

Cliquez alors sur `Accéder à la console (KVM)`{.action} pour ouvrir la console dans votre navigateur.

![Aperçu KVM HTML](images/ipmi-kvm-html-03.png){.thumbnail}

### Ouvrir SoL via SSH <a name="sol-ssh"></a>

Pour plus de détails concernant la création de paires de clés SSH, voir [cette page](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).

Dans la section `Serial over LAN (SoL)`{.action} de votre espace client OVHcloud, cliquez sur `Ajouter la clé SSH`{.action}.

![Accès SoL SSH](images/ipmi-sol-sshkey-01.png){.thumbnail}

Une popup s'ouvre alors afin que vous puissiez saisir la clé publique SSH avec laquelle vous souhaitez vous authentifier pour vous connecter. Ensuite, cliquez sur `Lancer la session SoL via SSH`{.action}.

![SoL SSH clé publique SSH](images/ipmi-sol-sshkey-02.png){.thumbnail}

Lorsque la session est prête un message de confirmation et une URI apparaît alors, afin que vous puissiez établir une connexion série à votre serveur dédié via SSH. Copier cette URI dans votre presse-papier.

![Ouverture SoL SSH](images/ipmi-sol-sshkey-03.png){.thumbnail}

Pour plus de détails concernant l'utilisation d'une clé SSH pour se connecter en SSH, voir [cette page](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys).

### Ouvrir SoL via navigateur Web <a name="sol-browser"></a>

Dans la section `Serial over LAN (SoL)`{.action} de votre espace client OVHcloud, cliquez sur `Depuis votre navigateur (SoL)`{.action}.

![Accès SoL JavaScript](images/ipmi-sol-html-01.png){.thumbnail}

> [!primary]
> Si la bascule vers la popup ne se fait pas automatiquement, vous pouvez toujours cliquez sur le bouton `Accéder à la console (SoL)`{.action}.

![Ouverture SoL JavaScript](images/ipmi-sol-html-02.png){.thumbnail}

### Tester et redémarrer l'IPMI <a name="ipmi-test-reboot"></a>

Il est possible que l’IPMI ne réponde plus. Si vous n’arrivez pas à y accéder, vous pouvez effectuer un test dans un premier temps en cliquant sur `Tester IPMI`{.action} et visualiser le résultat du diagnostic :

![Test IPMI](images/ipmi-test.png){.thumbnail}

Si tout est normal comme dans notre exemple, vous faites probablement face à un souci local (connexion à Internet, poste local). Si l’IPMI rencontre effectivement une difficulté, vous avez la possibilité de le redémarrer en cliquant sur `Redémarrer IPMI`{.action}.

![Reboot IPMI](images/ipmi-reboot.png){.thumbnail}

Le redémarrage de l'IPMI prend quelques minutes.

> [!primary]
> Cette opération n'affecte pas le fonctionnement du serveur.
>

### Installation d'un système d'exploitation à l'aide d'IPMI v1

> [!warning]
> OVHcloud ne garantit pas la fonctionnalité des systèmes d'exploitation installés via IPMI. Cette méthode ne doit être envisagée que par un administrateur de serveurs expérimenté.
>
> Les versions 64 bits de Java peuvent empêcher l'ouverture des menus `Redirect ISO`/`Redirect CDROM` et provoquer le blocage de JViewer.
>

Pour commencer, ouvrez [IPMI depuis une applet Java](#applet-java) via votre [espace client OVHcloud](/links/manager). Cliquez ensuite sur `Device`{.action} dans la barre de menus et sélectionnez `Redirect ISO`{.action} dans le menu déroulant.

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

Pour commencer, ouvrez [IPMI depuis une applet Java](#applet-java) via votre [espace client OVHcloud](/links/manager). Cliquez ensuite sur `Virtual Media`{.action} puis sur `Virtual Storage`{.action}.

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

### Installer un OS en utilisant le navigateur web KVM (uniquement pour les serveurs les plus récents)

> [!warning]
> OVHcloud ne garantit pas le bon fonctionnement des systèmes d'exploitation installés via IPMI. Cette méthode ne doit être utilisée que par un administrateur de serveur expérimenté.
>

Dans votre [espace client](/links/manager), ouvrez la [console KVM](#kvm-browser).

Ici, vous avez accès aux mêmes informations et fonctionnalités que dans les modules IPMI basés sur Java.

> [!primary]
>
> Assurez-vous d'exécuter les prochaines étapes à un bon rythme. Le processus peut être annulé s'il existe des pauses plus longues entre les actions.
>

Cliquez sur le bouton `Browse File`{.action} et sélectionnez votre fichier image.

![Installation du KVM](images/kvm_install01.png){.thumbnail}

Cliquez sur `Start Media`{.action}. Cela préparera l'ISO pour le processus d'installation.

![Installation du KVM](images/kvm_install02.png){.thumbnail}

La taille de fichier affichée n'est pas la taille réelle. C'est normal car le fichier n'est pas complètement téléversé à cette étape.

![Installation du KVM](images/kvm_install03.png){.thumbnail}

Cliquez sur `Power`{.action} et sélectionnez `Reset Server`{.action} (réinitialiser le serveur) dans le menu déroulant.

![Installation du KVM](images/kvm_install04.png){.thumbnail}

Attendez que l'écran de sélection de démarrage s'affiche et appuyez sur la touche appropriée pour entrer dans le menu de Boot (`F11` dans cet exemple).

![Installation du KVM](images/kvm_install05.png){.thumbnail}

Dans le menu boot, sélectionnez le lecteur optique (`UEFI: AMI Virtual CDROM0` dans cet exemple) et appuyez sur `Entrée`.

![Installation du KVM](images/kvm_install06.png){.thumbnail}

Le fichier ISO va maintenant être téléversé, puis le serveur va démarrer à partir du fichier.

![Installation du KVM](images/kvm_install07.png){.thumbnail}

<a name="bios"></a>

### Redémarrer un serveur dans le menu BIOS

Vous pouvez accéder au BIOS lors de la configuration ou du dépannage de votre serveur. Un moyen pratique d'y parvenir est d'utiliser l'outil `ipmiutil` (voir la [page du projet](https://ipmiutil.sourceforge.net/) pour plus d'informations).

Lorsque le serveur est en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) et une fois que vous y êtes connecté, installez-le avec la commande suivante :

```bash
apt install ipmiutil
```

Redémarrez ensuite le serveur avec cette commande :

```bash
ipmiutil reset -b
```

Accédez alors à la [console IPMI](#procedure) dans votre [espace client OVHcloud](/links/manager). Le menu BIOS du serveur doit s'afficher.

![KVM BIOS](images/kvm_bios.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
