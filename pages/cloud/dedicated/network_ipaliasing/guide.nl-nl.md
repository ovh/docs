---
deprecated: true
title: 'Configuratie van uw IP als alias'
slug: network-ipaliasing
excerpt: "Failover IP's toevoegen aan uw configuratie-onderdeel"
section: 'Netwerk & IP'
updated: 2022-12-07
---

**Laatste update 07-09-2018**

## Introductie

De IP-alias (IP-aliasing in het Engels) is een specifieke netwerkconfiguratie van uw dedicated server, waarmee u meerdere IP-adressen aan een enkel netwerkinterface kunt koppelen.

**Deze handleiding legt uit hoe u deze kunt toevoegen.**

## Vereisten

- U moet beschikken over een dedicated server (VPS, dedicated server of Public Cloud instance).
- U moet beschikken over een of meerdere Failover IP's.
- U moet via SSH met de server verbonden zijn (root-toegang)


## Instructie

Hier volgen de configuraties voor de voornaamste distributies.


### Debian 6/7/8 en afgeleiden

#### Stap 1: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Stap 2: Bewerk het bronbestand 

Nu is het mogelijk om het bronbestand te wijzigen:

```sh
editor /etc/network/interfaces
```

Vervolgens moet u een secondaire interface toevoegen:

```bash
auto eth0:0 iface eth0:0 inet static address IP_FAILOVER netmask 255.255.255.255
```

Om er zeker van te zijn dat de secondaire interface actief is wanneer de `eth0` interface dit ook is, moet u de volgende regel aan de eth0 configuratie toevoegen.

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER pre-down /sbin/ifconfig eth0:0 down
```

Wanneer u twee Failover IP's te configureren heeft, moet het bestand /etc/network/interfaces er zo uitzien:

```bash
auto eth0 iface eth0 inet static address SERVER\_IP netmask 255.255.255.0 broadcast xxx.xxx.xxx.255 gateway xxx.xxx.xxx.254

auto eth0:0 iface eth0:0 inet static address IP_FAILOVER1 netmask 255.255.255.255

auto eth0:1 iface eth0:1 inet static address IP_FAILOVER2 netmask 255.255.255.255
```

```
# IPFO 1
post-up /sbin/ifconfig eth0:0 IP_FAILOVER1 netmask 255.255.255.255 broadcast IP_FAILOVER1 pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 IP_FAILOVER2 netmask 255.255.255.255 broadcast IP_FAILOVER2 pre-down /sbin/ifconfig eth0:1 down
```


#### Stap 3: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ en Arch Linux

Op deze distributies is de interface-benaming in eth0, eth1... vervallen en gebruiken we voortaan het algemenere `systemd-network`.

#### Stap 1: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Stap 2: Bewerk het bronbestand 

Nu is het mogelijk om in het bronbestand uw failover IP als volgt toe te voegen:

```sh
nano /etc/systemd/network/50-default.network
```

```sh
[Address] Address=22.33.44.55/32 Label=failover1 # optional
```

Het label is een optie, het wordt gebruikt om uw verschillende failover IP's te sorteren.

#### Stap 3: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
systemctl restart systemd-networkd
```


### CentOS en Fedora (25 en eerder)

#### Stap 1: Creëer het bronbestand 

Om te beginnen is het belangrijk om een kopie van het bronbestand te maken om het als sjabloon te gebruiken:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Stap 2: Bewerk het bronbestand 

Het is nu mogelijk om om het bestand eth0:0 te wijzigen door het IP te vervangen:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Vervang eerst de naam van het `Device`, daarna het reeds bestaande IP, door de failover IP die u heeft ontvangen:

```bash
DEVICE="eth0:0" ONBOOT="yes" BOOTPROTO="none" # For CentOS use "static" IPADDR="IP_FAILOVER" NETMASK="255.255.255.255" BROADCAST="IP_FAILOVER"
```

#### Stap 3 : Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
ifup eth0:0
```


### Gentoo

#### Stap 1: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Stap 2: Bewerk het bronbestand 

U moet nu het bestand bewerken om er een failover IP toe te voegen. Onder Gentoo, voegt zich direct een alias in de interface eth0. We creëren geen interface eth0:0 zoals voor Red Hat of CentOS

> [!warning]
>
> Het standaard IP van de server moet met config\_eth0= op dezelfde regel blijven. Dit om de goede werking van bepaalde handelingen die specifiek voor OVH zijn te waarborgen.
> 

U hoeft alleen een nieuwe regel na het netmask **255.255.255.0** te beginnen en er uw failover IP toevoegen (SERVER\_IP moet vervangen worden door het hoofd-IP van uw server).

```sh
editor /etc/conf.d/net
```

U moet dus het volgende toevoegen:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
```

Het bestand /etc/conf.d/net moet dus het volgende bevatten:


```bash 
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config\_eth0=( "SERVER\_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" ) routes\_eth0=( "default gw SERVER\_IP.254" )
```

Om een ping op uw failover IP te kunnen uitvoeren moet u gewoon uw interface-netwerk herstarten.


#### Stap 3: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Stap 1: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Stap 2: Bewerk het bronbestand 

Vervolgens moet u het bestand /etc/sysconfig/network/ifcfg-ens32 als volgt bewerken:

```bash
IPADDR_1=IP_FAILOVER NETMASK_1=255.255.255.255 LABEL_1=ens32:0
```


### cPanel

#### Stap 1: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/ips /etc/ips.bak
```

#### Stap 2: Bewerk het bronbestand 

Vervolgens moet u het bestand /etc/ips: bewerken

```sh
editor /etc/ips
```

Dan het failover IP aan het bestand toevoegen:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

Vervolgens het IP toevoegen in: `/etc/ipaddrpool`:

```bash
IP_FAILOVER
```

#### Stap 3: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

De servers onder Windows staan bij de netwerkconfiguratie vaak in DHCP. Als u al een failover IP hebt ingesteld of uw configuratie hebt overgezet in een vaste IP, dan kunt u direct doorgaan naar de volgende stap.

Zo niet, dan moet u eerst overgaan van een DCHP-configuratie op het netwerk naar een vaste IP-configuratie.

Open commandoprompt `cmd`{.action} of `powershell`{.action}, voer vervolgens het volgende commando in:

```sh
ipconfig /all
```

Dat geeft bijvoorbeeld het volgende:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Haal uw IPv4 op, het subnetmasker, de standaard gateway en de naam van de netwerkkaart.

In ons voorbeeld is het IP van de server: **94.23.229.151**


U kunt de volgende stappen via de commandoregels uitvoeren, hetzij via de grafische interface:

#### In commandoregels (aanbevolen)

In de commando's hieronder moet het volgende worden vervangen:

|Commando|Waarde|
|---|---|
|NETWORK_ADAPTER|Netwerkkaartnaam (in ons voorbeeld: Local Area Connection)|
|IP_ADDRESS|IP adres van de server (in ons voorbeeld: 94.23.229.151)|
|SUBNET_MASK|Subnetmasker (in ons voorbeeld: 255.255.255.0)|
|GATEWAY|Standaard gateway (in ons voorbeeld: 94.23.229.254)|
|IP_ADDRESS_FAILOVER|Failover IP adres dat u wilt toevoegen|

> [!warning]
>
> Let op, de server zal niet meer toegankelijk zijn wanneer u de verkeerde gegevens invoert. U zult dan correcties moeten uitvoeren in Winrescue modus of via de KVM.
> 

In de commando prompt:

1. Naar vaste IP overgaan

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. De DNS-server bepalen

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```

3. Een failover IP toevoegen

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

Uw failover IP is nu werkzaam.


#### Via graphic interface

1. Ga in het menu naar `Opstarten`{.action} > `Control Panel`{.action} > `Netwerk en Internet`{.action} > `Netwerkcentrum en Delen`{.action} > `De instellingen wijzigen`{.action} (in het menu links).
2. Klik met de rechtermuisknop op `Lokale netwerkverbinding`{.action}.
3. Klik op `Eigenschappen`{.action}.
4. Selecteer `Internet Protocol Versie 4 (TCP/IPv4)`{.action}, klik op `Eigenschappen`{.action}.
5. Klik op `Volgende IP-adres gebruiken`{.action} en voer het vaste IP van uw server in, het subnetmasker en standaard gateway die u verkregen heeft dankzij het commando `ipconfig`{.action} hieronder. (Op de Voorkeurs-DNS, 213.186.33.99. invoeren)

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Let op, de server zal niet meer toegankelijk zijn wanneer u de verkeerde gegevens invoert. U zult dan correcties moeten uitvoeren in Winrescue modus of via de KVM.
> 

Vervolgens op `Geavanceerd`{.action} klikken (altijd in de `TCP/IP-instellingen`{.action}).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

Klik, in het gedeelte `IP-adres`{.action}, op `Toevoegen`{.action}:

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Voer dan uw failover IP en het subnetmasker **255.255.255.255** in.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Klik op `Toevoegen`{.action}.

Uw failover IP is nu werkzaam.


### FreeBSD

#### Stap 1: Bepaal de interface 

Bepaal de naam van uw hoofdnetwerkinterface. U kunt het commando `ifconfig`{.action} voor deze bewerking gebruiken:

```sh
ifconfig
```

Dat geeft het volgende resultaat:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500 options=10b ether 00:24:8c:d7:ba:11 inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255 inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74 media: Ethernet autoselect (100baseTX ) status: active lo0: flags=8049 metric 0 mtu 16384 options=3 inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2 inet6 ::1 prefixlen 128 inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

De naam van de interface in ons voorbeeld is dus **nfe0**.


#### Stap 2: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Stap 3: Wijzig het bronbestand 

Bewerk het bestand /etc/rc.conf:

```sh
editor /etc/rc.conf
```

Voeg deze regel vervolgens aan het eind van het bestand toe ifconfig\_INTERFACE\_alias0=`inet IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER`.

Vervang respectievelijk **INTERFACE** en **IP_FAILOVER** door de naam van uw interface (bij de eerste stap geïdentificeerd) en uw failover IP. Hier een voorbeeld:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Stap 4: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### Stap 1: Bepaal de interface 

Bepaal de naam van uw hoofdnetwerkinterface. U kunt het commando `ifconfig`{.action} voor deze bewerking gebruiken:

```sh
ifconfig -a
```

Dat geeft het volgende resultaat:

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

De naam van het interface in ons voorbeeld is dus **e1000g0**.


#### Stap 2: Creëer het bronbestand 

Allereerst is het belangrijk om een kopie van het bronbestand te maken zodat u op elk moment hiernaar terug kunt gaan.

```sh
editor /etc/hostname.e1000g0:1
```

#### Stap 3: Wijzig het bronbestand 

In dit bestand het volgende invoeren: **IP_FAILOVER/32 up**, waarbij **IP_FAILOVER** overeenkomt met uw failover IP. Bijvoorbeeld:

```bash
188.165.171.40/32 up
```

#### Stap 4: Herstart de interface 

U hoeft nu alleen nog uw interface opnieuw op te starten:

```sh
svcadm restart svc:/network/physical:default
```

## Ga verder 

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.