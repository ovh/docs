---
deprecated: true
title: Installatie van de OVHcloud SSH key 
excerpt: Deze handleiding beschrijft de installatie van een OVHcloud SSH key om een interventie van onze beheerders toe te staan, met daarna de deactivering ervan. 
updated: 2018-02-12
---

**Laatste update 12/04/2021**

## Introductie

In bepaalde gevallen kan de interventie van een OVHcloud beheerder op uw dedicated infrastructuur nodig zijn.  

**Deze handleiding beschrijft de installatie van een OVHcloud SSH key om de interventie van onze beheerders toe te staan, met daarna de deactivering ervan.**

## Vereisten

- [Verbonden zijn met SSH](/pages/cloud/dedicated/ssh_introduction){.external} (root access).

## Instructies

### Stap 1: Installeer de key 

Wanneer u verbonden bent met SSH moet u het volgende commando uitvoeren:

- Als uw server bij OVHcloud Europe wordt gehost:

```sh
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Als uw server bij OVHcloud Canada wordt gehost:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2
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

[Introductie tot SSH](/pages/cloud/dedicated/ssh_introduction){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com>.
