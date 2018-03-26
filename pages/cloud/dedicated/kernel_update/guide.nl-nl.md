---
title: Update van de kernel op een dedicated server
excerpt: Ontdek hoe u een kernel kunt updaten
slug: update-kernel-dedicated-server
section: Geavanceerd gebruik
---

**Laatste update 30-01-2018**

## Introductie

OVH biedt u de mogelijkheid om een kernel eenvoudig te updaten op uw Linux-systeem met behulp van het *Netboot* startup-systeem. Het kan echter gunstig zijn als de kernel die is gekoppeld aan uw besturingssysteem ook up-to-date is op uw schijf.

**Deze handleiding legt uit hoe u uw kernel kunt updaten.**

> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is uw verantwoordelijkheid om het softwarebeheer en de dagelijkse veiligheid van uw systeem te garanderen.
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden we u echter aan om een gespecialiseerde dienstverlener in te schakelen als u moeilijkheden ondervindt of twijfels heeft over het beheer, het gebruik of de beveiliging van een server.
>

## Vereisten

- U moet root-toegang hebben tot een (SSH) server.
- U moet een backup hebben gemaakt van de data (raadpleeg de officiële documentatie van uw distributie). 

## Instructies

### Identificeer de kernel

Voer de volgende opdracht in om de kernel te identificeren:

```sh
uname -r
```

Bijvoorbeeld:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

In dit geval is de kernelversie *4.09.76-xxxx-std-ipv6-64*\*.

### Update de kernel

#### Stap 1: Ga naar de juiste directory

De afbeelding van de kernel moet zich in de volgende map bevinden:

```sh
cd /boot
```

#### Stap 2: Verkrijg de afbeelding  

Zonder de kernel opnieuw te compileren, hoeft u alleen maar de juiste bzImage-versie te downloaden, bij voorkeur de nieuwste versie. U vindt de afbeeldingen hier: <ftp://ftp.ovh.net/made-in-ovh/bzImage/>. 

De kernels zijn monolithisch, wat wil zeggen dat ze geen rekening houden met modules als KERNEL, CEPH, NBD, ZFS, ..

Laten we teruggaan naar ons voorbeeld. We hadden deze kernelversie:  **4.09.76-xxxx-std-ipv6-64**

We moeten daarom de volgende afbeelding downloaden met het commando:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/bzImage/4.14.13/bzImage-4.14.13-xxxx-std-ipv6-64
```

#### Stap 3: Update het boot-programma (GRUB)

Update het boot-programma (GRUB) met het commando: 

```sh
update-grub
```

Vervolgens krijgt u de respons: 

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Ga na of het volgende bestand (nodig voor de update) in uw configuratie aanwezig is: `06_OVHkernel`. U kunt dit nagaan met het commando: 
>
> `ls /etc/grub.d/`
>

#### Stap 4: Herstart de server 

Om de wijzigingen door te voeren, moet u de server opnieuw opstarten: 

```sh
reboot
```

### Rollback (terug)

In het geval van verkeerd gebruik of een fout, hebt u de mogelijkheid om een Rollback uit te voeren (teruggaan). Hiervoor moet de server in [Reddingsmodus](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external} zijn.  Vervolgens moet u uw systeem monteren met de commando‘s: 

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> In dit voorbeeld is de naam van de root (de slash `/`) *md1*.    De naam kan echter verschillen.  Om de naam van uw root te verifiëren hoeft u alleen maar het volgende commando in te voeren: 
>
> `fdisk`of `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Ga naar de `/boot`-map en verwijder de laatste geïnstalleerde bestanden (`rm`-commando). In ons voorbeeld moeten we het volgende invoeren: 

```sh
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

Vervolgens moet u het boot-systeem opnieuw updaten: 

```sh
update-grub
```

Ten slotte moet u de Reddingsmodus afsluiten (opnieuw opstarten op de schijf) en een software-reboot uitvoeren met behulp van dit commando:

```sh
reboot
```

### Ga na of de update goed is uitgevoerd

Zodra de update is voltooid, is het mogelijk om de nieuw geïnstalleerde kernelversie via dit commando te verifiëren:

```sh
uname -r
```

> [!primary]
>
> Als het gaat om kwetsbaarheden zoals Meltdown en Spectre, kunt u de website van de editor of uw distributie raadplegen om er zeker van te zijn dat deze versie ertegen is gepatcht.
>
> Indien nodig hebt u toegang tot een bepaald aantal hulpprogramma's (voorbeeld: <https://github.com/speed47/spectre-meltdown-checker>) die u kunt gebruiken om erachter te komen of de gebruikte kernel kwetsbaar is of niet.
>
> OVH kan de betrouwbaarheid van externe tools niet garanderen en u zult ze op eigen risico gebruiken.
>

## Verder

[Reddingsmodus](https://docs.ovh.com/gb/en/dedicated/ovh-rescue/){.external}.

[Informatie over Meltdown en Spectre kwetsbaarheden (in het Engels).](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Updaten na de Meltdown en Spectre kwetsbaarheden per besturingssysteem.](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com/en/>.