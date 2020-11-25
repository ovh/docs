---
deprecated: true
title: Installatie van de OVH SSH key 
slug: ovh-ssh-key
excerpt: Deze handleiding beschrijft de installatie van een OVH SSH key om een interventie van onze beheerders toe te staan, met daarna de deactivering ervan. 
section: SSH en de SSH key
---

**Laatste update 16/01/2018**

## Introductie

In bepaalde gevallen kan de interventie van een OVH beheerder op uw dedicated infrastructuur nodig zijn.  

**Deze handleiding beschrijft de installatie van een OVH SSH key om de interventie van onze beheerders toe te staan, met daarna de deactivering ervan.**

## Vereisten

- [Verbonden zijn met SSH](https://docs.ovh.com/nl/dedicated/ssh-introductie/){.external} (root access).

## Instructies

### Stap 1: Installeer de key 

Wanneer u verbonden bent met SSH moet u het volgende commando uitvoeren:

- Als uw server bij OVH Europe wordt gehost:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

- Als uw server bij OVH Canada wordt gehost:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/cle-ssh-public/installer_la_cle.sh -O installer_la_cle.sh ; sh installer_la_cle.sh
```

Als de uitvoering goed is verlopen, is het bestand `authorized_keys2` aangemaakt. Het bevat de volgende informatie:

```sh
cat /root/.ssh/authorized_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### Stap 2: Controleer op fouten

Zelfs als de key correct is geïnstalleerd, is het mogelijk dat onze beheerders zich niet met uw server kunnen verbinden. Ga dan aub ook de volgende punten na:

#### Ga na of het bestand `/root/.ssh/authorized_keys2` bestaat

Om de aanwezigheid van het bestand te controleren, voert u het volgende commando in:

```sh
cat /root/.ssh/authorized_keys2
```

#### Ga na of de SSH server is geconfigureerd om verbindingen die afkomstig van de root zijn te accepteren.

Hiervoor moet u de volgende parameters in het bestand controleren `/etc/ssh/sshd_config:

```bash
PermitRootLogin yes
'AuthorizedKeysFile' .ssh/authorized_keys2
UsePAM yes
```

Start vervolgens de SSH service opnieuw op

```sh
/etc/init.d/sshd restart
```

#### Ga na of de base directory van de root-gebruiker ook echt /root is

U kunt `/etc/passwd` gebruiken om dit te controleren

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Het 6e element van de regel (de elementen moeten gescheiden zijn door **:**) moet /root zijn.

#### Ga na of de firewall de toegang niet blokkeert

In het geval van het gebruik van een softwarefirewall moet een regel in de bron voor de toestemming worden toegevoegd cache-ng.ovh.net (cache-ng.ovh.ca voor een server in Canada) met als bestemmingspoort uw SSH poort (standaard 22). Hier een voorbeeld van een iptables regel:

**Voor een server in Frankrijk**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Voor een server in Canada**

```sh
iptables filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Ga na of de SSH poort niet gepersonaliseerd is

Als u uw SSH poort gepersonaliseerd heeft vragen we u om deze te vermelden zodat de beheerder zich kan verbinden.
 

### Stap 3: Deactiveer de key 

Wanneer de interventie van de beheerder is beëindigd kunt u de SSH key deactiveren. Hiervoor hoeft u alleen het bestand `authorized_keys2`te wijzigen en het te voorzien (met **#**) zoals hierboven aangegeven:

```sh
cat /root/.ssh/authorized_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... support@cache-ng...
```

## Ga verder 

[Introductie tot SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com>.
