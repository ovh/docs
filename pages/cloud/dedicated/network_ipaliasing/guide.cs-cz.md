---
deprecated: true
title: 'Jak nakonfigurovat IP jako alias'
slug: network-ipaliasing
excerpt: 'Přidání IP fail-over adres k Vaší konfiguraci'
section: 'Síť a IP adresy'
---

**Poslední aktualizace 07/09/2018**

## Cíl

IP alias (v angličtině také jako IP aliasing) je speciální síťová konfigurace dedikovaného serveru, umožňující přiřazení několika IP adres k jednomu síťovému rozhraní.

**V této příručce se dozvíte, jak toto přiřazení provést.**

## Prerekvizity

- Dedikovaný server (VPS, dedikovaný server nebo instance Public Cloud)
- Alespoň jedna IP fail-over adresa
- Připojení k serveru přes SSH (root přístup)


## Postup

Níže naleznete přehled konfigurací pro nejrozšířenější systémové distribuce.


### Debian 6/7/8 a deriváty

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```s
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### Fáze 2: úprava zdrojového souboru

Nyní je možné zdrojový soubor upravit:

```sh
editor /etc/network/interfaces
```

Následně je zapotřebí přidat sekundární rozhraní:

```bash
auto eth0:0 
iface eth0:0 inet static 
address IP_FAILOVER 
netmask 255.255.255.255
```

Abyste se ujistili, že je sekundární rozhraní aktivní zároveň s rozhraním `eth0`, je do konfigurace eth0 zapotřebí přidat následující řádek:

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER 
pre-down /sbin/ifconfig eth0:0 down
```

Pokud chcete nakonfigurovat dvě IP fail-over adresy, měl by soubor /etc/network/interfaces vypadat následovně:

```bash
auto eth0 
iface eth0 inet static 
address SERVER_IP 
netmask 255.255.255.0 
broadcast xxx.xxx.xxx.255 
gateway xxx.xxx.xxx.254

auto eth0:0 
iface eth0:0 inet static 
address IP_FAILOVER1 
netmask 255.255.255.255

auto eth0:1 
iface eth0:1 inet static 
address IP_FAILOVER2 
netmask 255.255.255.255
```

```
# IPFO 1
post-up /sbin/ifconfig eth0:0 IP_FAILOVER1 netmask 255.255.255.255 broadcast IP_FAILOVER1 
pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 IP_FAILOVER2 netmask 255.255.255.255 broadcast IP_FAILOVER2 
pre-down /sbin/ifconfig eth0:1 down
```


#### Fáze 3: restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ a Arch Linux

Na těchto distribucích se jednotlivá rozhraní neoznačují jako eth0, eth1 apod.. Namísto toho používáme obecnější označení `systemd-network`.

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### Fáze 2: úprava zdrojového souboru

Nyní je do zdrojového souboru možné přidat Vaši IP fail-over adresu:

```sh
nano /etc/systemd/network/50-default.network
```

```sh
[Address] 
Address=22.33.44.55/32 
Label=failover1 # optional
```

Parametr label je volitelný, slouží pouze jako označení různých IP fail-over adres.

#### Fáze 3: restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
systemctl restart systemd-networkd
```


### CentOS a Fedora (25 a starší)

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste jej následně mohli použít jako šablonu:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### Fáze 2: úprava zdrojového souboru

Nyní je možné upravit soubor eth0:0 za účelem změny IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Nejprve změňte název v hodnotě `Device` a poté nahraďte stávající IP adresu IP fail-over adresou, kterou jste obdrželi:

```bash
DEVICE="eth0:0" 
ONBOOT="yes" 
BOOTPROTO="none" # For CentOS use "static" 
IPADDR="IP_FAILOVER" 
NETMASK="255.255.255.255" 
BROADCAST="IP_FAILOVER"
```

#### Fáze 3: Restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
ifup eth0:0
```


### Gentoo

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### Fáze 2: úprava zdrojového souboru

Nyní stačí upravit soubor pro přidání IP fail-over adresy. V Gentoo se alias zadává přímo do rozhraní eth0. Nevytváříme tedy rozhraní eth0:0, tak jako v případě Red Hat či CentOS.

> [!warning]
>
> Výchozí IP adresa serveru musí zůstat s parametrem config\_eth0= na stejném řádku. Je tomu tak kvůli zajištění správné funkčnosti některých specifických operací OVH.
> 

Nyní se stačí pouze vrátit k řádku následujícím po parametru netmask **255.255.255.0** a přidat svou IP fail-over adresu (hodnota SERVER\_IP musí být nahrazena hlavní IP adresou Vašeho serveru).

```sh
editor /etc/conf.d/net
```

Je tedy zapotřebí přidat následující:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
```

Soubor /etc/conf.d/net musí obsahovat následující text:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config_eth0=( "SERVER_IP netmask 255.255.255.0" 
"IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" ) 
routes_eth0=( "default gw SERVER_IP.254" )
```

Aby bylo možné otestovat ping na Vaší IP fail-over, stačí jednoduše restartovat síťové rozhraní.


#### Fáze 3: restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### Fáze 2: úprava zdrojového souboru

Následně je třeba upravit soubor /etc/sysconfig/network/ifcfg-ens32, a to následujícím způsobem:

```bash
IPADDR_1=IP_FAILOVER 
NETMASK_1=255.255.255.255 
LABEL_1=ens32:0
```


### cPanel

#### Fáze 1: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
cp /etc/ips /etc/ips.bak
```

#### Fáze 2: úprava zdrojového souboru

Následně je třeba upravit soubor /etc/ips:

```sh
editor /etc/ips
```

Následně do souboru přidejte IP fail-over adresu:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

A poté přidejte IP adresu do `/etc/ipaddrpool`:

```bash
IP_FAILOVER
```

#### Fáze 3: restart služby

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Servery se systémovou distribucí Windows mají v síťové konfiguraci často povolen protokol DHCP (DHCP enabled). Pokud jste již nastavili IP fail-over adresu, nebo jste svou konfiguraci přepnuli na pevnou IP adresu, přejděte přímo k dalšímu kroku.

V opačném případě je třeba nejprve změnit konfiguraci DHCP na síťové úrovni na konfiguraci s pevnou IP.

Otevřete příkazový řádek `cmd`{.action} nebo `powershell`{.action} a zadejte následující příkaz:

```sh
ipconfig /all
```

Dostanete podobný výstup, jako ten následující:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Uložte si svou IPv4 adresu, masku podsítě, výchozí bránu a název síťové karty.

IP adresa serveru v našem příkladu je: **94.23.229.151**


Následující kroky můžete provést jak prostřednictvím příkazového řádku, tak pomocí grafického rozhraní:

#### Příkazový řádek (doporučeno)

V níže uvedených příkazech je zapotřebí nahradit:

|Příkaz|Hodnota|
|---|---|
|NETWORK_ADAPTER|Název síťové karty (v našem příkladu: Local Area Connection)|
|IP_ADDRESS|IP adresa serveru (v našem příkladu: 94.23.229.151)|
|SUBNET_MASK|Maska podsítě (v našem příkladu: 255.255.255.0)|
|GATEWAY|Výchozí brána (v našem příkladu: 94.23.229.254)|
|IP_ADDRESS_FAILOVER|IP fail-over adresa, kterou chcete přidat|

> [!warning]
>
> Pozor, pokud zadáte chybné údaje, server nebude přístupný. V takovém případě bude opravy nutné provést v režimu Winrescue nebo prostřednictvím KVM.
> 

V příkazovém řádku:

1. Nastavte pevnou IP adresu

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. Definujte DNS server

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
```

3. Přidejte IP fail-over adresu

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

Vaše IP fail-over je nyní funkční.


#### Grafické rozhraní

1. Přejděte do nabídky `Start`{.action} > `Ovládací panely`{.action} > `Síť a Internet`{.action} > `Centrum síťových připojení a sdílení`{.action} > `Upravit nastavení adaptéru`{.action} (v nabídce po levé straně).
2. Pravým tlačítkem myši klikněte na možnost `Připojení k místní síti`{.action}.
3. Klikněte na tlačítko `Vlastnosti`{.action}.
4. Vyberte `Internetový protokol verze 4 (TCP/IPv4)`{.action} a klikněte na tlačítko `Vlastnosti`{.action}.
5. Klikněte na `Použít následující IP adresu`{.action} a zadejte hlavní IP adresu serveru, masku podsítě a výchozí bránu (informace získané pomocí příkazu`ipconfig`{.action}, jak byl popsán výše). Do okénka „Preferovaný DNS server“ zadejte následující adresu: 213.186.33.99.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Pozor, pokud zadáte chybné údaje, server nebude přístupný. V takovém případě bude opravy nutné provést v režimu Winrescue nebo prostřednictvím KVM.
> 

Následně klikněte na tlačítko `Pokročilé nastavení`{.action} (stále ještě v sekci `Parametry TCP/IP`{.action}.

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

V sekci `IP adresa`{.action} klikněte na tlačítko `Přidat`{.action} :

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Zadejte IP fail-over adresu a masku podsítě **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Klikněte na tlačítko `Přidat`{.action}.

Vaše IP fail-over je nyní funkční.


### FreeBSD

#### Fáze 1: určení rozhraní

Určete název hlavního síťového rozhraní. Pro tuto operaci můžete použít příkaz `ifconfig`{.action}:

```sh
ifconfig
```

Dostanete následující výstup:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500 
>>> options=10b 
>>> ether 00:24:8c:d7:ba:11 
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255 
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74 
>>> media: Ethernet autoselect (100baseTX ) 
>>> status: active 
>>> lo0: flags=8049 metric 0 mtu 16384 
>>> options=3 
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2 
>>> inet6 ::1 prefixlen 128 
>>> inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

Název rozhraní je tedy ve výše uvedeném případě **nfe0**.


#### Fáze 2: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### Fáze 3: úprava zdrojového souboru

Upravte soubor /etc/rc.conf:

```sh
editor /etc/rc.conf
```

Na konec souboru přidejte následující řádek: ifconfig\_INTERFACE\_alias0=`inet IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER`.

Nahraďte hodnoty **INTERFACE** a **IP_FAILOVER** (v uvedeném pořadí) názvem svého rozhraní (identifikovaném v první fázi) a IP fail-over adresou. Příklad:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### Fáze 4: restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### Fáze 1: určení rozhraní

Určete název hlavního síťového rozhraní. Pro tuto operaci můžete použít příkaz `ifconfig`{.action}:

```sh
ifconfig -a
```

Dostanete následující výstup:

```sh
ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500 index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

Název rozhraní je tedy ve výše uvedeném případě **e1000g0**.


#### Fáze 2: vytvoření zdrojového souboru

Nezapomeňte si vytvořit kopii zdrojového souboru, abyste se k němu v případě potřeby mohli kdykoli vrátit:

```sh
editor /etc/hostname.e1000g0:1
```

#### Fáze 3: úprava zdrojového souboru

Do souboru zadejte následující údaje: **IP_FAILOVER/32 up**, kde **IP_FAILOVER** odpovídá Vaší IP fail-over adrese. Příklad:

```bash
188.165.171.40/32 up
```

#### Fáze 4: Restart rozhraní

Nyní nezbývá než provést restart Vašeho rozhraní:

```sh
svcadm restart svc:/network/physical:default
```

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.