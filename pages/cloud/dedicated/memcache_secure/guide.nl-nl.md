---
deprecated: true
title: Beveiliging van een server met Memcached
excerpt: Leer hoe u uw Memcached dienst beveiligt
updated: 2018-03-02
---

**Laatste update 02-03-2018**


## Introductie

Memcached is een in-memory database-dienst. Het wordt voornamelijk gebruikt om webtoepassingen te versnellen door statische inhoud en databaseverzoekresultaten in de cache op te slaan. Het werkt heel eenvoudig: het is een key-value in-memory database voor niet-permanente opslag.

Memcached wordt standaard niet beschermd door authenticatie. Als de server toegankelijk is, kan iedereen de gegevens die erop zijn opgeslagen lezen of schrijven. Om deze reden is het zeer belangrijk dat u deze database beveiligt.


**Deze handleiding is bedoeld om u te helpen bij de configuratiewijzigingen die nodig zijn om uw dienst te beveiligen.**


> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Wij hebben geen toegang tot deze machines, wij zijn dan ook niet de beheerders. Het is aan u om het softwarebeheer en de beveiliging voor het dagelijks gebruik ervan te verzekeren.
>
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden we u echter aan om een gespecialiseerde dienstverlener in te schakelen als u moeilijkheden ondervindt of twijfels heeft over het beheer, het gebruik of de beveiliging van een server. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>


## Vereisten


- U moet toegang hebben tot de server met de Memcached-dienst (via SSH voor Linux-omgevingen of via Remote Desktop voor Windows).
- U moet de diensten identificeren die Memcached gebruiken. Hiervoor beantwoordt u de volgende vragen:
    - Zijn de diensten die gebruikmaken van Memcached opgeslagen op dezelfde server? Worden ze gebruikt in een privénetwerk?
    - Is het noodzakelijk dat de diensten die Memcached gebruiken openbaar toegankelijk zijn op internet?


## Instructies

### Beveilig Memcached door de configuratie te wijzigen

Om uw Memcached-server te beveiligen, moet u twee stappen volgen:

- Beperk het luisteradres van de dienst.
- Accepteer alleen TCP-verbindingen.


Voor versies ouder dan /1.5.6/ autoriseert Memcached standaard TCP- en UDP-verbindingen. Deze standaardconfiguratie kan worden gebruikt en gebruikt om versterkte DDoS-aanvallen te starten.
De ontwikkelaars hebben erop gewezen dat UDP-verbindingen belangrijk waren toen de dienst voor het eerst werd gebouwd, aangezien de resource op dat moment zeldzamer waren.
In deze handleiding gaan we ervan uit dat u een van de 99% gebruikers bent die geen UDP-verbindingen nodig hebben.

Als uw Memcached-server alleen door uw lokale server wordt gebruikt, kunt u het luisteradres beperken tot `127.0.0.1`.
Als andere servers via een privénetwerk verbinding moeten maken met uw Memcached-server, dwingt u deze te luisteren op een privé-iP (bijvoorbeeld `10.0.0.1`. U moet dit aanpassen aan uw netwerkklasse).

**In alle gevallen**\: schakel het luisteren via UDP uit met het commando `-U 0`.

We zullen nu de configuratieaspecten voor de meest gebruikte besturingssystemen beschrijven.


#### Debian/Ubuntu

Standaard gebruiken Debian en Ubuntu de service `memcached status/start/restart/force-reload` om de Memcached-dienst te beheren. Als u Debian of Ubuntu gebruikt, moet u het bestand `/etc/memcached.conf` bewerken terwijl u bent aangemeld als de rootgebruiker.

U kunt beginnen door deze optie toe te voegen, waardoor UDP-luisteren wordt uitgeschakeld. Zoals eerder vermeld, is UDP-luisteren overbodig.

```sh
# Disable UDP protocol
-U 0
```
Als uw Memcached-server alleen door uw lokale server wordt gebruikt, moet u de volgende optie inschakelen, waardoor uw dienst niet op internet kan worden weergegeven:

```sh
-l 127.0.0.1
```

Nadat u de vereiste configuratiewijzigingen hebt aangebracht, slaat u het configuratiebestand op en voert u een van de volgende twee commando‘s uit om uw configuratie opnieuw te laden:


```sh
service memcached force-reload
service memcached force-reload
```


#### CentOS - Fedora - Red Hat


Standaard gebruiken CentOS, Fedora, en Red Hat de service `memcached status/start/restart/force-reload` om de Memcached-dienst te beheren. Als u CentOS, Fedora, en Red Hat gebruikt, moet u het bestand `/etc/memcached.conf` bewerken terwijl u bent aangemeld als de rootgebruiker.


Als uw Memcached-server alleen door uw lokale server wordt gebruikt, raden we u aan de volgende `OPTIONS`-regel toe te voegen, die voorkomt dat uw dienst op het internet wordt weergegeven door het UDP-protocol uit te schakelen, wat nu verouderd is:

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Als uw Memcached-server ook wordt gebruikt door servers van derden, voegt u de volgende `OPTIONS`-regel toe, die alleen UDP-protocol zal uitschakelen:

```sh
OPTIONS="-U 0"
```

Nadat u de vereiste wijzigingen hebt aangebracht, slaat u het bestand op en voert u het volgende commando uit om uw configuratie opnieuw te laden:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Standaard gebruikt Arch Linux `systemctl start/restart/stop` memcached om de Memcached-service te beheren. Als u Arch Linux gebruikt, bewerk het bestand `/usr/lib/systemd/system/memcached` terwijl u bent aangemeld als de rootgebruiker.

Als uw Memcached-server alleen door uw lokale server wordt gebruikt, raden we aan de volgende regel toe te voegen, waardoor wordt voorkomen dat uw service op het internet wordt weergegeven door het UDP-protocol uit te schakelen, wat nu verouderd is:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Als uw Memcached-server ook wordt gebruikt door servers van derden, voegt u de volgende regel toe, die alleen het UDP-protocol zal uitschakelen:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Nadat u de vereiste wijzigingen hebt aangebracht, slaat u het bestand op en voert u een van de volgende twee commando‘s uit om uw configuratie opnieuw te laden:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.