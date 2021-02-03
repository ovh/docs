---
title: 'Automated Backup - Kernel panic (cPanel)'
slug: cpanel_auto_backup
excerpt: 'Find out how to fix issue with cPanel servers which get stuck during OVHcloud automated backup'
section: 'Advanced usage'
---

**Last updated 3rd February 2021**

## Objective

When using the automated backup feature on a VPS which is running cPanel, you may experience cases when your VPS is stuck in backup status for a long time and may not be accessible. The root cause of this issue is when cPanel users use Jailed Shell access which creates a virtfs on your filesystem. When we take backup of your VPS (when you are subscribed to automated backups or snapshots), the hypervisor communicates to your VPS through the Qemu Guest Agent to freeze the filesystem on the VPS before we take the backup. This mechanism is there to ensure no writes happen to your disk while the backup is running and therefore ensures the consistency of the backup is good.

However, the virtfs created by cPanel when you allow Jailed Shell access is not possible to freeze. Therefore when they hypervisor issues a guest filesystem freeze to your VPS it locks up and cause a kernel panic. There are three ways to avoid this from happening and we explore them below.

1. Disable QEMU Guest Agent
2. Do not allow Jailed Shell
3. Disable /tmp partition security (not recommended by cPanel, but it is an option available)

## Requirements

- a current [VPS solution](https://www.ovh.co.uk/vps/) (VPS ranges Value, Essential, Comfort, or Elite) in your OVHcloud account
- cPanel installed on your server

## Instructions

Decide on which of the 3 options above you would wish to proceed with and follow the section of the guide that corresponds to your choice. You only have to do one of the three options.

Please chose carefully as they each have their pros and cons.

### Disable QEMU Guest Agent

Firstly, you need to check if QEMU guest agent is running on your server. You can check this with the following command:

```
systemctl status qemu-guest-agent
```

The status of the service is indicated next to "Active:". If it is active/running then we need to stop the service and disable it from starting again in the future. You can do this with the following commands:

```
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Switch from Jailed Shell to Normal Shell

You can read about what is Jailed and Normal Shell [here](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

To disable a jailed shell environment for all new and modified users, you will need to disable jailshell by default option in WHM’s Tweak Settings interface (WHM >> Home >> Server Configuration >> Tweak Settings).

This option allows you to enable/disable the use of a jailed shell for new accounts and accounts that you subsequently edit in the following interfaces:

1. WHM’s Modify an Account interface (WHM >> Home >> Account Functions >> Modify An Account).
2. WHM’s Upgrade/Downgrade an Account interface (WHM >> Home >> Account Functions >> Upgrade/Downgrade An Account).

This option does not affect accounts that already exist on the server but that you have not edited in these interfaces.

To disable a jailed shell environment for a specific user, use WHM’s Manage Shell Access interface (WHM >> Home >> Account Functions >> Manage Shell Access).

### Disable cPanel /tmp partition security

Please note this is not recommended by cPanel and it is in your own risk. Should you wish to continue with this option, you can read the exact steps from the following [cPanel page](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).


## Go further

Join our community of users on <https://community.ovh.com/en/>.
