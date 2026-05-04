---
title: "Mode rescue Windows sur un serveur dédié"
excerpt: "Démarrez votre serveur dédié Windows en mode rescue OVHcloud pour dépanner, réparer ou réinitialiser des mots de passe"
updated: 2025-01-28
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Objectif

Le mode rescue est un outil fourni par OVHcloud permettant de démarrer sur un système d'exploitation temporaire. Il a pour but de diagnostiquer et de résoudre les problèmes sur votre serveur.

Le fonctionnement général du mode rescue est décrit dans notre guide « [Comment activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) ».

L'option **Système de secours client Windows** (`rescue-customer-windows`) n'est disponible que pour les serveurs dédiés sur lesquels est installé un système d'exploitation **Windows Server**. Les conditions suivantes s'appliquent :

- Le système rescue pour Windows (`rescue-customer-windows`) fonctionne dans une machine virtuelle (VM) lancée à partir du système rescue client (`rescue-customer`, basé sur Debian GNU/Linux).
- Les disques du serveur sont attachés à la VM avec *passthrough*, il est donc possible d'y accéder.
- Les autres composants du serveur seront inaccessibles (CPU, RAM, carte réseau, carte RAID).
- Le réseau est monté avec *passthrough* mais sans accès direct à la carte réseau. La VM porte l'adresse IP et l'adresse MAC du serveur *bare metal*.

> [!warning]
>
> Prenez soin d'effectuer une sauvegarde de vos données si vous ne disposez pas encore de sauvegarde récente.
>
> Si vous avez des services en production sur votre serveur, le mode rescue les interrompt tant que la machine n’a pas été redémarrée en mode normal.
> 

**Découvrez comment démarrer un serveur dans le système de secours client Windows.**

## Prérequis

- Microsoft Windows installé sur votre [serveur dédié](/links/bare-metal/bare-metal)
- Au moins 16 Go de RAM installés sur le serveur

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

### Activation du mode rescue pour Windows

Cliquez sur le nom de votre serveur pour ouvrir l'onglet `Informations générales`{.action}.

<a name="netboot"></a>

Dans la case **Informations générales**, cliquez sur le bouton `...`{.action} à côté de `Boot`. Cliquez sur `Modifier`{.action} dans le menu contextuel.

![Option Modifier le boot dans la section Informations générales](images/rescue-mode-001.png){.thumbnail}

Sur la page **Modifier le netboot**, sélectionnez `Booter en mode rescue`{.action}.

Sélectionnez `Windows customer rescue system`{.action} dans le menu déroulant.

![Sélection du système rescue Windows customer dans le menu netboot](images/manager-rescue-windows-menu.png){.thumbnail width="800"}

L'e-mail de notification du mode rescue, ainsi que ses identifiants, seront envoyés à l'adresse e-mail de contact de votre compte OVHcloud. Pour utiliser une autre adresse e-mail, renseignez-la dans le champ `Recevoir les identifiants du mode sur l'adresse e-mail :`.

Cliquez sur `Suivant`{.action}.

Dans l'étape **Résumé**, cliquez sur `Valider`{.action}.

![Summary](images/winresc_summ.png){.thumbnail}

Vous devriez maintenant avoir une notification concernant le paramètre `Netboot` dans l'onglet `Informations générales`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

La dernière étape consiste à redémarrer le serveur. Cliquez sur le bouton `...`{.action} à côté de « Statut » dans la zone **État des services**, puis cliquez sur `Redémarrer`{.action}. Cliquez sur `Valider`{.action} dans la fenêtre contextuelle.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Ce *hard reboot* prendra quelques minutes à se terminer. Vous pouvez vérifier l'état actuel dans l'onglet `Tâches`{.action}.

> [!primary]
>
> Après avoir terminé vos actions en mode rescue, n'oubliez pas de redéfinir le paramètre `Netboot` sur `Booter sur le disque dur`{.action} avant de redémarrer le serveur.

### Accéder à votre serveur en mode rescue

Une fois que vous avez reçu l'e-mail vous informant que le mode rescue est activé, vous pouvez vous connecter au système via le mode rescue de Windows et accéder à votre serveur. 
Cet e-mail est également disponible dans votre [espace client OVHcloud](/links/manager) dès son envoi. Cliquez sur le nom associé à votre identifiant client dans la barre de menu en haut à droite, puis sélectionnez `E-mails de service`{.action}.

Pour établir une session à distance sur le système en mode rescue de Windows, vous aurez besoin des informations d'identification suivantes :

- Adresse IP du serveur
- Nom d'utilisateur du compte administrateur temporaire (`Administrator`)
- Mot de passe du compte administrateur temporaire

Vous pouvez utiliser les méthodes de connexion suivantes pour accéder à votre serveur via le système en mode rescue de Windows :

- Protocole RDP (Remote Desktop Protocol)
- KVM sur IP (si votre serveur le permet)
- OpenSSH (composant officiel de Windows Server)

#### RDP

/// details | Dépliez cette section

Pour vous connecter, utilisez le client `Remote Desktop Connection` de Windows ou toute application compatible.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

///

#### KVM

/// details | Dépliez cette section

Depuis l'écran de connexion KVM, vous pouvez sélectionner une autre langue de clavier.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail width="800"}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail width="800"}

Vous pouvez modifier les options d'accessibilité et activer le clavier virtuel :

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail width="800"}

![KVM keyboard screen](images/rescue-kvm-login-keyboard.png){.thumbnail width="800"}

Retrouvez plus d'informations dans notre guide : [Comment utiliser la console IPMI avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

///

#### SSH

/// details | Dépliez cette section

Ouvrez l'application de ligne de commande sur votre périphérique local et entrez la commande suivante :

```bash
ssh Administrator@SERVER_IP
```

Exemple :

```bash
ssh Administrator@203.0.113.100
```

Entrez le mot de passe du mode rescue temporaire lorsque vous y êtes invité. Exemple :

```console
Administrator@ns9356771.ip-203-0-113.eu's password:
administrator@WINRESCUEOVH C:\Users\Administrator>
```

Retrouvez plus d'informations sur les connexions SSH dans notre [guide d'introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
Vous pouvez également utiliser n'importe quel outil de connexion SSH, tel que [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

///

### Importation de disques pour accéder à vos fichiers

Une fois connecté au système de secours client Windows, vous devez importer (*mount*) les disques du serveur Windows avant de pouvoir accéder au système de fichiers.

/// details | Dépliez cette section

> [!warning]
> Les exemples d'instructions et de captures d'écran suivants illustrent le processus de montage basé sur un serveur avec deux disques en miroir (RAID1). Les détails affichés par l'outil Gestion des disques dépendent de la configuration disque de votre serveur.  
> Pour plus d'informations, consultez la [documentation officielle de Microsoft](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management).
>
> Si vous avez besoin d’une assistance professionnelle pour l’administration de votre serveur, consultez la section [Aller plus loin](#gofurther) de ce guide.

| ![Gestion des disques Windows](images/rescue-disk-mgmt1.png){.thumbnail} |
|---|
| Faites un clic droit sur le bouton `Start Menu`{.action} et ouvrez `Disk Management`{.action}. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt2.png){.thumbnail width="700"} |
|---|
| `Disk 0` contient le système rescue (volume `C:`). Les disques de votre serveur Windows seront affichés comme `Offline`. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt3.png){.thumbnail} |
|---|
| Faites un clic droit sur chaque disque et sélectionnez `Online`{.action} dans le menu contextuel. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt4.png){.thumbnail} |
|---|
| Les disques du serveur sont maintenant [reconnus par le système rescue comme `Foreign`](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign), un état indiquant dans ce cas que les disques attachés appartiennent à un système d'exploitation différent. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt5.png){.thumbnail} |
|---|
| Faites un clic droit sur un disque et sélectionnez `Import Foreign Disks...`{.action} dans le menu contextuel. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt6.png){.thumbnail} |
|---|
| Le cas échéant, sélectionnez les disques à importer. Cliquez sur `OK`{.action}. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt7.png){.thumbnail} |
|---|
| Cliquez sur `OK`{.action}. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt8.png){.thumbnail} |
|---|
| Dans cet exemple, les deux disques du serveur sont mis en miroir, donc l'état `Resynching` sera affiché. Il s'agit du processus normal ; la resynchronisation se poursuivra une fois que le serveur aura redémarré sur son système d'exploitation installé. |

| ![Gestion des disques Windows](images/rescue-disk-mgmt9.png){.thumbnail} |
|---|
| Pour accéder à vos fichiers, faites un clic droit sur la partition Windows de votre `Disk 1` et sélectionnez `Open`{.action} dans le menu contextuel. |

///

### Utilitaires recommandés

> [!primary]
>
> Aucun logiciel supplémentaire n'est préinstallé sur le système en mode rescue. Vous trouverez ci-dessous une liste d'outils recommandés, disponibles sur le site web de leurs développeurs respectifs.

| Logiciels | Description |
| --- | --- |
| CrystalDiskInfo | Outil de diagnostic des disques |
| 7-Zip | Outil de gestion des archives |
| FileZilla | Client FTP |

### Sortie du mode rescue

Dans votre [espace client OVHcloud](/links/manager), [changez le mode de démarrage](#netboot) de nouveau en `Booter sur le disque dur`{.action} et validez.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail width="800"}

Utilisez ensuite la fonction `Restart`{.action} dans votre espace client OVHcloud.

<a name="gofurther"></a>

## Aller plus loin

[Comment activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Comment changer le mot de passe administrateur sur un serveur dédié Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
