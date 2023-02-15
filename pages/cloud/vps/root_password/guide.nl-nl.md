---
deprecated: true
title: Wijziging van uw root-wachtwoord op een VPS
slug: root-password
excerpt: Leer hoe u het root-wachtwoord van een VPS kunt wijzigen.
section: Diagnose en Reddingsmodus
updated: 2021-04-20
---

**Laatste update 27/06/2018**

## Introductie

Wanneer u een distributie- of besturingssysteem installeert of opnieuw installeert, krijgt u een root-toegangswachtwoord. Het is sterk aanbevolen deze te wijzigen, zoals beschreven in onze handleiding over het [beveiligen van een VPS](https://docs.ovh.com/fr/vps/conseils-securisation-vps/). Het kan ook voorkomen dat u dit wachtwoord kwijtraakt en moet wijzigen. In deze handleiding wordt u door beide scenario's geleid.
Leer hoe u het root-wachtwoord van een VPS kunt wijzigen.

## Vereisten

- U moet SSH-toegang tot de VPS hebben (root-toegang).
- [Start uw VPS opnieuw op in de reddingsmodus.](https://docs.ovh.com/nl/vps/rescue)

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Instructies

### Wijzig het wachtwoord met  root-gebruikers accounttoegang

Als u nog steeds uw huidige wachtwoord hebt, is het proces eenvoudiger. Log in op uw server en voer het commando in: 

```sh
passwd
```

U moet vervolgens uw nieuwe wachtwoord voor de eerste keer invoeren en bevestigen. Vervolgens ontvang u de volgende bevestiging: 

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Op een Linux-distributie zal het door u ingevoerde wachtwoord **niet verschijnen**.
> 

### Een wachtwoord wijzigen nadat u het bent verloren.

#### Stap 1: Identificeer het mount point

De mount wordt automatisch gemaakt op elke VPS in de  2016-reeks, dus u hoeft alleen maar te identificeren waar uw partitie is gemount. Hier zijn twee commando‘s voor:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

De afbeelding hierboven laat zien dat uw systeempartitie is gemount op **/mnt/vdb1**.


#### Stap 2: CHROOT-rechten

U moet nu de hoofdmap bewerken, zodat de wijzigingen op uw systeem kunnen worden toegepast. Deze bewerking is mogelijk met het commando `chroot`. Zo gaat u verder: 

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

U kunt het controleren door het `ls -l` commando te typen, die de inhoud vermeldt die is opgeslagen in de hoofdmap van uw systeem:

```sh
root@rescue-pro:/# ls -l
```

#### Stap 3: wijziging van het root-wachtwoord 

Het enige dat u nu nog hoeft te doen is het root-wachtwoord wijzigen met het commando `passwd`:

```sh
passwd
```

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Tot slot herstart u uw VPS op zijn drive via uw OVH Control Panel. 

## Ga verder

[Introductie tot SSH](https://docs.ovh.com/nl/dedicated/ssh-introduction/)
[Reddingsmodus op VPS](https://docs.ovh.com/nl/vps/rescue/)

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com>.