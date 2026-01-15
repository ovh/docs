---
title: Activation des journaux de démarrage Windows
excerpt: Apprenez à activer les journaux de démarrage Windows afin de faciliter le diagnostic et le dépannage des problèmes de démarrage de votre VPS.
updated: 2026-01-15
---

## Objectif

Les journaux de démarrage Windows permettent d’identifier les pilotes et services chargés lors du démarrage du système.  
Ils sont particulièrement utiles pour le **diagnostic des problèmes de démarrage**, des **écrans bleus** ou des **blocages système**.

Ce guide vous explique comment **activer les journaux de démarrage sur un serveur Windows** afin de faciliter l’analyse et le dépannage de votre VPS.

## Activation des journaux de démarrage Windows

Les journaux de démarrage de Windows peuvent être utiles pour les diagnostics d'erreur de serveur.

Pour les activer, suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Se connecter au serveur**
>>
>> Connectez-vous à votre serveur via un bureau à distance ou une session [KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).<br>
>>
> 2. **Ouvrir l'utilitaire « Exécuter »**
>>
>> Ouvrez le menu `Démarrer` de Windows et cliquez sur `Exécuter`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Ouvrir « msconfig »**
>>
>> Entrez « msconfig » et cliquez sur `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Activer les logs**
>>
>> Dans la nouvelle fenêtre, activez l'option logs à côté de `Boot log`. Cliquez sur `OK`{.action}.<br><br>
>>![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier `.txt`. Le chemin d'accès au fichier est : `C:\Windows\ntbtlog.txt`.

Pour accéder au fichier journal en mode rescue, suivez les instructions du guide du « [mode rescue du VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue) ».

## Allez plus loin
[Changer le mot de passe administrateur sur un serveur Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Échangez avec notre [communauté d'utilisateurs](/links/community).
