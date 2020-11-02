---
deprecated: true
title: 'Update van de kernel op een dedicated server'
excerpt: 'Ontdek hoe u de kernel van een distributie kunt updaten met behulp van een OVH core'
slug: update-kernel-dedicated-server
section: 'Geavanceerd gebruik'
---

**Laatste update 14-08-2018**

## Introductie

OVH biedt u de mogelijkheid om een kernel eenvoudig te updaten op uw Linux-systeem met behulp van het *Netboot* startup-systeem. Het wordt echter sterk aanbevolen om uw besturingssysteem (OS), waar uw kernel aan is gekoppeld, op de schijf bij te werken.

**Deze handleiding legt uit hoe de kernel kan worden bijgewerkt als onderdeel van een distributie met behulp van een OVH core.**

Standaard gebruiken alle systeemafbeeldingen die worden aangeboden op OVH's dedicated servers een geoptimaliseerde OVH core. Gebruikers die deze afbeeldingen hebben vervangen door hun eigen distributie worden aangeraden om de officiële documentatie van deze distributie te raadplegen.


> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is uw verantwoordelijkheid om het softwarebeheer en de dagelijkse veiligheid van uw systeem te garanderen.
> 
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze update. We raden u echter aan om contact op te nemen met een gespecialiseerde dienstprovider als u problemen of twijfels hebt over het beheren, gebruiken of beveiligen van een server.
>


## Vereisten

- U moet beschikken over een [OVH dedicated server](https://www.ovh.com/nl/dedicated_servers/){.external}.
- U moet verbonden zijn in SSH met de root-identifier [Linux].
- U moet een backup hebben gemaakt van de data (raadpleeg de officiële documentatie van uw distributie). 


## Instructie

### Identificeer de kernel

Voer het volgende commando in om de kernel te identificeren:

```sh
uname -r
```

Bijvoorbeeld:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

In dit geval is de kernelversie **4.09.76-xxxx-std-ipv6-64**.

### Update de kernel met behulp van OVH pakketten

In op Debian en RedHat gebaseerde distributies wordt de kernel bijgewerkt met behulp van de pakketbeheerder.


#### Stap 1: Update de kernel

In op Debian gebaseerde distributies wordt de kernel-update uitgevoerd met het volgende commando:

```sh
apt-get update && apt-get dist-upgrade
```

In op RedHat gebaseerde distributies wordt de kernel-update uitgevoerd met het volgende commando:

```sh
yum update
```

#### Stap 2: Herstart de server

Om de wijzigingen door te voeren, moet u de server opnieuw opstarten:

```sh
reboot
```


### Update de kernel met behulp van OVH pakketten

#### Stap 1: Ga naar de juiste directory

De afbeelding van de kernel moet zich in de volgende map bevinden:

```sh
cd /boot
```

#### Stap 2: Verkrijg de afbeelding  

Zonder de kernel opnieuw te compileren, hoeft u alleen maar de juiste bzImage-versie te downloaden, bij voorkeur de nieuwste versie. U vindt de afbeeldingen hier: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

De kernels zijn monolithisch, wat wil zeggen dat ze geen rekening houden met modules als: CEPH, NBD, ZFS…

Neem ons voorbeeld, met de kernel-versie: **4.09.76-xxxx-std-ipv6-64**.

We moeten hier de volgende afbeelding downloaden met het commando:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
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
> Ga na of het volgende bestand (nodig voor de update) in uw configuratie aanwezig is: `06_OVHkernel`. U kunt deze controle uitvoeren met het volgende commando:
>
> `ls /etc/grub.d/`
>

#### Stap 4: Herstart de server 

Om de wijzigingen door te voeren, moet u de server opnieuw opstarten:

```sh
reboot
```

### Rollback (terug)

In het geval van verkeerd gebruik of een fout, hebt u de mogelijkheid om een Rollback uit te voeren (teruggaan). Hiervoor moet de server in [Reddingsmodus](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} zijn.  Vervolgens moet u uw systeem monteren met de commando‘s: 

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> In dit voorbeeld is de naam van de root (de slash `/`) *md1*. De naam kan echter verschillen.  Om de naam van uw root te verifiëren hoeft u alleen maar het volgende commando in te voeren:
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
rm bzImage-4.9.118-xxxx-std-ipv6-64
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

Zodra de update is voltooid, is het mogelijk om de nieuw geïnstalleerde kernel-versie via dit commando te verifiëren:

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

[Reddingsmodus (in het Engels)](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}.

[Informatie over Meltdown en Spectre kwetsbaarheden (in het Engels).](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Updaten na de Meltdown en Spectre kwetsbaarheden per besturingssysteem (in het Engels).](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com/en/>.