---
title: Mount your NAS on Windows Server via CIFS
slug: nas/nas-cifs
excerpt: This guide shows you how to mount your NAS on Windows Server via CIFS.
section: NAS
---


## Prerequisites
To mount a CIFS share, you need :

- A Windows Server Distribution on a Dedicated Server, VPS or Public Cloud Instance.
- A NAS OVH


## Settings
- (Windows Serveur 2008) Click on the menu "Start" > "All the programs" > "Accessories" > "Command prompt".
- (Windows Serveur 2012) Click the "power shell" icon at the bottom of the screen in the taskbar.
- (Windows Serveur 2016) Click on the menu "Start", then on the "power shell" icon.
- Then run the following command :


```bash
net use z: \\IP_SERVEUR_CIFS\CHEMIN_CIFS
```


### Examples
- CIFS mounting for a mininas :


```bash
net use z: \\10.16.100.10\nas-000041_mininas-000212
```

- CIFS mounting for a Nas or Nas-HA :


```bash
net use z: \\10.16.101.8\zpool-000206_partition1
```



> [!alert]
>
> The SMB/CIFS user is "nobody", rights changes with this user can generate conflicts with existing NFS rights.
> 