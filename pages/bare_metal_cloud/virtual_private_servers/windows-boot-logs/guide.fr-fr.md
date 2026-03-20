---
title: "VPS - Activer les logs de démarrage Windows"
excerpt: "Découvrez comment activer les logs de démarrage Windows afin de faciliter le diagnostic et le dépannage des problèmes de démarrage de votre VPS"
updated: 2026-01-21
---

## Objectif

Les logs de démarrage Windows permettent d'identifier les pilotes et services chargés lors du démarrage du système.  
Ils sont particulièrement utiles pour le **diagnostic des problèmes de démarrage**, des **écrans bleus** ou des **blocages système**.

**Ce guide vous explique comment activer les logs de démarrage sur un serveur Windows pour diagnostiquer et dépanner votre VPS.**

## Prérequis

- Disposer d'une offre [VPS](/links/bare-metal/vps) active dans votre espace client OVHcloud.

## En pratique

### Activation des logs de démarrage Windows

Pour activer les logs de démarrage, suivez les étapes ci-dessous :

> [!tabs]
> 1. **Se connecter au serveur**
>>
>> Connectez-vous à votre serveur via un bureau à distance ou une [session KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Ouvrir l'utilitaire « Exécuter »**
>>
>> Ouvrez le menu `Démarrer` de Windows et cliquez sur `Exécuter`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **Ouvrir `msconfig`**
>>
>> Entrez `msconfig` et cliquez sur `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Activer les logs**
>>
>> Dans la nouvelle fenêtre, activez l'option logs à côté de `Boot log`. Cliquez ensuite sur `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier `.txt`. Le chemin d'accès au fichier est : `C:\Windows\ntbtlog.txt`.

Pour accéder au fichier journal en mode rescue, suivez les instructions du guide « [Activer et utiliser le mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue) ».

## Aller plus loin

[Changer le mot de passe administrateur sur un serveur Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Échangez avec notre [communauté d'utilisateurs](/links/community).
