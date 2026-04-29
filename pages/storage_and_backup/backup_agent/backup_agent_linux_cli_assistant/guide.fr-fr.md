---
title: "Backup Agent - Assistant CLI Linux"
excerpt: "Découvrez comment utiliser le script ovh-ba-install.sh fourni par OVHcloud pour installer et gérer l'agent de sauvegarde Veeam sur un serveur Linux"
updated: 2026-04-21
---

## Objectif

**Ce guide explique comment utiliser le script `ovh-ba-install.sh` fourni par OVHcloud pour installer et gérer l'agent de sauvegarde Veeam sur votre serveur Linux.**

Vous y découvrirez comment récupérer les URL d'installation, lancer l'installation en une commande, naviguer dans le menu de l'assistant CLI et utiliser les outils de diagnostic.

## Prérequis

- Disposer d'un service Backup Agent actif.

<!-- CP-NAV-START:baremetal-backup-agent -->

### Accès à l'espace client OVHcloud

- **Lien direct :** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Chemin de navigation :** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

<!-- CP-NAV-END:baremetal-backup-agent -->

### Côté serveur

| Élément | Détail |
|--------|--------|
| **Système** | Linux **compatible** avec l'agent Veeam pour Linux (voir les [prérequis système Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13) et les [restrictions Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_restrictions)). |
| **Droits** | Accès **administrateur** : les commandes d'installation utilisent en général **`sudo`**. |
| **Réseau** | Le serveur doit pouvoir **télécharger** le script et le paquet agent (HTTPS), et **joindre** la passerelle de sauvegarde VSPC (Veeam Service Provider Console) selon les règles de votre offre. |
| **Terminal** | Une session **SSH** ou une console sur le serveur, en mode interactif pour le menu. |

### Vocabulaire minimal

| Commande | Rôle |
|----------|------|
| **`curl`** | Programme qui **télécharge** un fichier depuis une adresse web (`https://…`). |
| **`sudo`** | « En tant qu'administrateur » — nécessaire pour installer des logiciels système. |
| **`bash`** | Interpréteur qui **exécute** le script que vous lui donnez. |

## En pratique

### Présentation du script ovh-ba-install.sh

Le script **`ovh-ba-install.sh`** est un **assistant en ligne de commande**. Avec ce script, vous pouvez :

- **Installer** l'agent de **gestion** Veeam (Management Agent) à partir de l'URL du paquet disponible dans votre espace client ;
- **Installer** la commande globale **`ovhbackupagent`** sur le serveur, pour rouvrir le même menu à tout moment (`sudo ovhbackupagent`) ;
- **Afficher** un menu texte : statut des agents, interface Veeam, diagnostics, aide ;
- **Diagnostiquer** les problèmes (connexion à l'infrastructure, journaux, archive pour le support) ;
- **Désinstaller** les paquets Veeam et, si vous le souhaitez, le raccourci **`ovhbackupagent`** (**Uninstall Wizard**).

> [!warning]
>
> Le script **facilite l'installation et le suivi** sur la machine ; il ne remplace pas la configuration de vos sauvegardes dans l'interface Veeam Agent. La **résiliation du service** se fait dans l'**espace client OVHcloud**, pas via ce script.
>

### Installation

#### Étape 1 — Récupérer les URL d'installation

Dans l'espace client OVHcloud, ouvrez votre [Backup Agent](/links/control-panel/baremetal-backup-agent), rendez-vous dans l'onglet `Agents`{.action}, puis cliquez sur le bouton `Télécharger`{.action}. Dans la fenêtre qui s'ouvre, sélectionnez **Linux** pour afficher la commande contenant les deux URL (script et paquet Linux).

![Télécharger l'agent — commandes d'installation Linux](images/01-backup-agent-download-linux-fr.png){.thumbnail}

> [!primary]
>
> Copiez-collez chacune des deux URL séparément dans un fichier texte avant de vous connecter en SSH.
>

#### Étape 2 — Se connecter au serveur

Connectez-vous en SSH au serveur avec un utilisateur autorisé à utiliser `sudo`.

```bash
ssh <user>@<IPouDNSdevotreserveur>
```

#### Étape 3 — Lancer l'installation

Remplacez `URL_DU_SCRIPT` (à 2 reprises) et `URL_DU_PAQUET_AGENT` dans la commande ci-dessous par vos URL, puis exécutez-la.

```bash
curl -sSL "URL_DU_SCRIPT" | sudo bash -s -- --setup "URL_DU_PAQUET_AGENT" --script-url "URL_DU_SCRIPT"
```

Exemple :

```bash
curl -sSL "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh" | sudo bash -s -- --setup "https://s3.xxx.xxx.cloud.ovh.net/xxxx/LinuxAgentPackages.vspc_tenant_xxxx.sh?X-Amz-Algorithm=xxx&X-Amz-Credential=xxx&X-Amz-Date=2xxx&X-Amz-Expires=xxx&X-Amz-SignedHeaders=xxx&X-Amz-Signature=xxx" --script-url "https://ovh-ba-downloads.s3.xxx.xxx/tmp/ovh-ba-install.sh"
```

#### Étape 4 — Écran d'accueil

Lisez l'introduction, puis validez avec **Entrée** pour lancer l'installation.

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  Backup Agent — guided first-time setup

This setup will, in order:
  1) Install the **Veeam Management Agent** from the link you were given.
  2) Install the **ovhbackupagent** command on this server (under /usr/local/bin).
     That command is your permanent shortcut to this menu — you will not need
     to download this script again for everyday use.
  3) Show an installation summary, wait 15 seconds, then open **Agent status** to follow Backup Agent deployment.

The Veeam Backup Agent itself is deployed by our infrastructure after the
Management Agent connects; that step can take a few minutes.

Press Enter to start the installation, or Ctrl+C to cancel...
```

#### Étape 5 — Installation en cours

Attendez la fin des étapes Veeam ; le script installe ensuite la commande **`ovhbackupagent`**.

#### Étape 6 — Résumé et statut des agents

Prenez connaissance du **résumé** affiché pendant **15 secondes**, puis observez l'écran **Agent status**. Le **Backup Agent** peut apparaître après quelques minutes (déploiement côté infrastructure).

```console
Installation summary

[OK] The Management Agent was installed successfully.
[OK] The **ovhbackupagent** command is now available (example: sudo ovhbackupagent).

[Info] The **Backup Agent** will be deployed shortly by our infrastructure (often within a few minutes).
Next, the **Agent status** screen opens so you can follow **`veeamconsoleconfig -s`** until the Backup Agent appears.

Main menu - reminder (available again after Agent status)

**A** - Agent status: Management / Backup Agent state (this screen refreshes every few seconds).
**V** - Open the Veeam UI on the server (once the Backup Agent is installed).
**D** - Diagnostics: VSPC connectivity test, support bundle, log issue analyzer, force-stop stuck jobs.
**I** - Install or reinstall a Management Agent package from a file or URL (advanced).
**U** - Uninstall Veeam agent packages from this server (with confirmations).
**H** - Help and README.
**Q** - Exit the assistant.

[Info] Waiting 15 seconds, then opening Agent status...
```

Après les 15 secondes, l'écran **Agent status** s'affiche automatiquement :

```console
Agent status (veeamconsoleconfig -s)

[Info] Retrieving Veeam status (up to 45s right after install)...
Management agent
    Connection state       : Connected
    Cloud gateway          : vspc-cgw1.prod01.eu-west-rbx.backup.ovhcloud.com:6180
    Connection account     : vspc-tenant-604276/vspc-tenant-cc1-604276
Backup agent
    Version                : 13.0.1.404
    Driver version         : 13.0.1.404
    Status                 : Running

Your agents are running well.

Auto-refresh in 5s... Press Enter to return to menu.
```

Appuyez sur **Entrée** pour accéder au **menu principal**.

### Rouvrir l'assistant

Pour rouvrir l'assistant plus tard :

```bash
sudo ovhbackupagent
```

Si la commande n'est pas trouvée, essayez `sudo /usr/local/bin/ovhbackupagent` ou vérifiez que `/usr/local/bin` est dans votre `PATH`.

### Menu principal

```console
 ▗▄▖ ▗▖  ▗▖▗▖ ▗▖ ▗▄▄▖▗▖    ▗▄▖ ▗▖ ▗▖▗▄▄▄     ▗▖  ▗▖    ▗▖  ▗▖▗▄▄▄▖▗▄▄▄▖ ▗▄▖ ▗▖  ▗▖
▐▌ ▐▌▐▌  ▐▌▐▌ ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █     ▝▚▞▘     ▐▌  ▐▌▐▌   ▐▌   ▐▌ ▐▌▐▛▚▞▜▌
▐▌ ▐▌▐▌  ▐▌▐▛▀▜▌▐▌   ▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌  █      ▐▌      ▐▌  ▐▌▐▛▀▀▘▐▛▀▀▘▐▛▀▜▌▐▌  ▐▌
▝▚▄▞▘ ▝▚▞▘ ▐▌ ▐▌▝▚▄▄▖▐▙▄▄▖▝▚▄▞▘▝▚▄▞▘▐▙▄▄▀    ▗▞▘▝▚▖     ▝▚▞▘ ▐▙▄▄▖▐▙▄▄▖▐▌ ▐▌▐▌  ▐▌




      Backup Agent — CLI Assistant
  ─────────────────────────────────────

  ┌──────────────────────────────────────────────────────────────────────────┐
     Management Agent:   OK     Backup Agent:   OK     Last backup:  N/A 
  └──────────────────────────────────────────────────────────────────────────┘

  A  Agent status (veeamconsoleconfig -s)
  V  Open Veeam interface (veeam command)
  D  Diagnostic (test connection, support bundle, issue analyzer, job force stop)
  I  Install Management Agent (only if you want to reinstall it)
  U  Uninstall Wizard
  H  Help / README
  Q  Quit

  Your choice (A/V/D/I/U/H/Q):
```

La ligne de statut en haut du menu indique **OK/KO** pour les paquets **Management** (`veeamma`) et **Backup** (`veeam`, `veeam-libs`), et un indicateur lié au dernier job de sauvegarde.

| Touche | Action |
|--------|------|
| **A** | Statut des agents (rafraîchissement automatique). |
| **V** | Ouvrir l'interface Veeam sur le serveur afin de contrôler vos sauvegardes et restaurations (si le Backup Agent est prêt). |
| **D** | Sous-menu **Diagnostic** : test VSPC, archive pour le support, analyse des journaux, arrêt forcé d'une sauvegarde bloquée. |
| **I** | Réinstaller le Management Agent à partir d'un fichier ou d'une URL (cas avancé). |
| **U** | **Uninstall Wizard** : désinstallation des paquets Veeam + option pour supprimer **`ovhbackupagent`**. |
| **H** | Aide / README intégré. |
| **Q** | Quitter. |

### Dépannage et diagnostics

| Touches | Action |
|---------|--------|
| **`D`** puis **`T`** | Test de connexion vers la passerelle VSPC. |
| **`D`** puis **`B`** | Génération d'une **archive** (logs + infos système) à envoyer au support. |
| **`D`** puis **`I`** | **Analyse** des messages connus dans les journaux (`agent.log`, `veeaminstaller.log`, etc.). |
| **`D`** puis **`J`** | Outil d'**arrêt forcé** d'une session de sauvegarde (à utiliser avec prudence). |

Pour aller plus loin dans vos diagnostics, consultez notre [guide de diagnostic et de dépannage Backup Agent](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting).

### Désinstallation — Uninstall Wizard (touche **U**)

- Suppression de votre agent, selon votre famille d'OS (**yum/dnf**, **zypper**, **apt-get**).
- Question optionnelle pour supprimer **`/usr/local/bin/ovhbackupagent`** et le README associé.

> [!warning]
>
> Désinstaller les agents **ne résilie pas** votre offre Backup Agent. Le service reste actif côté OVHcloud tant que vous ne l'avez pas résilié dans l'**espace client**. Vous pourrez **réinstaller** les agents plus tard depuis votre interface de sauvegarde.
>

## FAQ

**Puis-je lancer le script sans `sudo` ?**  
Non : des actions système sont nécessaires et requièrent des droits administrateur (`sudo`).

**Le menu se ferme tout de suite après l'installation en pipe — que faire ?**  
Rouvrez-le avec `sudo ovhbackupagent`.

**Où est le script une fois installé comme commande ?**  
En général : **`/usr/local/bin/ovhbackupagent`**.

**Les agents sont déjà installés, comment installer seulement l'assistant ?**  
Utilisez `sudo bash ovh-ba-install.sh --setup-local`.

**J'ai retéléchargé le script, que se passe-t-il si je le lance sans argument ?**  
Un court écran d'accueil vérifie si **`ovhbackupagent`** est encore présent et si le Backup Agent est détecté, puis propose au besoin de réinstaller uniquement le raccourci.

**Comment afficher l'aide intégrée ?**  
Utilisez `sudo bash ovh-ba-install.sh --readme`.

## Aller plus loin

Une fois vos agents opérationnels, configurez vos sauvegardes via l'interface Veeam Agent sur le serveur (touche **`V`** dans l'assistant).

- [Configurer votre première sauvegarde](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)
- [Gérer vos sauvegardes et restaurations](/pages/storage_and_backup/backup_agent/backup_agent_backup_restore)
- [Diagnostic et dépannage](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting)

Échangez avec notre [communauté d'utilisateurs](/links/community).
