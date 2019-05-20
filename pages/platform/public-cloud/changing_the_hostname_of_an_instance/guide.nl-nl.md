---
title: 'Wijzigen van de hostnaam van een Public Cloud instance'
slug: wijzigen-hostnaam-instance
excerpt: 'Ontdek hoe u de hostnaam van een Public Cloud instance kunt veranderen'
legacy_guide_number: 1928
section: Tutorials
---

**Laatste update 17-08-2018**

## Introductie

Met de Cloud-init module kunt u uw [Public Cloud instance](https://www.ovh.com/nl/public-cloud/instances/){.external} configureren wanneer het is aangemaakt, maar ook bij elke herstart. Daarom, als u uw hostnaam opnieuw wilt configureren vanwege een fout bij de creatie van uw instance of het opnieuw configureren van uw e-mailserver, moet u de Cloud-init module uitschakelen. Het is verantwoordelijk voor het configureren van de hostnaam zodat deze niet wordt hersteld.

**In deze handleiding wordt uitgelegd hoe u Cloud-init opnieuw configureert om de hostnaam van uw instance te kunnen wijzigen.**

> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is aan u om het softwarebeheer en de beveiliging voor het dagelijks gebruik ervan te verzekeren.
>
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om contact op te nemen met een gespecialiseerde dienstprovider als u problemen of twijfels hebt over het beheren, gebruiken of beveiligen van een server. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>


## Vereisten

- U moet een [Public Cloud-instance](https://www.ovh.com/nl/public-cloud/instances/){.external} hebben aangemaakt. 
- [U verbonden zijn in SSH](https://docs.ovh.com/nl/public-cloud/eerste-login/){.external} (root) met de instance.


## Instructie

### Uitschakelen van de Cloud-init module

Om Cloud-init uit te schakelen, moet u eerst het configuratiebestand wijzigen:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Ten slotte moet u de volgende twee regels toevoegen of wijzigen:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Wijzigen van de hostnaam

De eerste stap bestaat uit het wijzigen van de hostnaam:

```sh
sudo vim /etc/hostname
webserver
```

Vervolgens wijzigt u het bestand `/etc/hosts`:

```sh
sudo vim /etc/hostname

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Daarna moet de instance opnieuw worden gestart: 

```bash
sudo reboot
```

Na de herstart zal de hostnaamwijziging zijn doorgevoerd: 

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Verder 

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.