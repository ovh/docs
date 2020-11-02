---
deprecated: true
title: 'Konfigurace dedikovaných serverů v rámci služby vRack'
slug: konfigurace-dedikovanych-serveru-vrack
excerpt: 'Zjistěte, jak nakonfigurovat své dedikované servery se službou vRack'
section: vRack
---

**Poslední aktualizace 06/04/2018**

## Cíl

Technologie vRack (virtuální rack) umožňuje seskupení serverů (nezávisle na jejich počtu či fyzickém umístění v našich datacentrech) a jejich propojení v rámci jedné privátní sítě.  Komunikace mezi Vašimi servery díky tomu probíhá na zabezpečené a soukromé bázi (v rámci dedikované VLAN).

**Zjistěte, jak nakonfigurovat několik dedikovaných serverů se službou vRack.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerekvizity

- Služba vRack
- Alespoň jeden [server kompatibilní se službou vRack](https://www.ovh.cz/dedikovane_servery/){.external}
- SSH připojení k serveru (root přístup)
- Přístup do Zákaznického prostoru OVH
- Zvolený rozsah privátních IP adres


## Postup

### Přidání serveru ke službě vRack

1. Jakmile je služba vRack přidána k Vašemu účtu, přejděte do sekce `Cloud`{.action} v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
2. V levém postranním panelu klikněte na tlačítko `vRack`{.action}.
3. Z rozbalovací nabídky vyberte požadovanou službu.
4. Ze seznamu kompatibilních služeb vyberte servery, které si přejete ke službě vRack připojit, a klikněte na tlačítko `Přidat`{.action}. 

![Volba vRacku](images/vrack_selection.png){.thumbnail}

### Konfigurace síťových rozhraní

Pro demonstrativní účely budeme používat následující rozsah privátních IP adres: *192.168.0.0/16*

Jako označení sekundárních síťových rozhraní používáme názvy **eth1** a **eno4**. Vaše servery však mohou používat odlišnou pojmenovávací konvenci. Pro ověření použijte níže uvedené příkazy.

Pro zobrazení seznamu síťových rozhraní použijte následující příkaz:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

První rozhraní v seznamu představuje Vaše primární síťové připojení. Pro ověření aktivních rozhraní použijte následující příkaz:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Pokud získáte výsledek `Link detected : no`, jedná o síťové rozhraní, které byste měli po zadání následujícího příkazu použít pro svou vRack konfiguraci:

```sh
ifconfig eth1 down
```

#### CentOS 6 a 7

Pomocí následujícího příkazu otevřete konfigurační soubor síťového rozhraní:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Stisknutím klávesy `I` vstoupíte do režimu pro vkládání informací.

Upravte sekundární síťové rozhraní následujícím způsobem:

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Ve výše uvedeném příkladu můžete použít libovolný rozsah privátních IP adres a jakoukoli adresu z tohoto rozsahu.

1. Stiskněte klávesu `ESC`.
2. Stiskněte klávesu `SHIFT` + *:* pro otevření editoru.
3. Napište `wq`.
4. Stiskněte klávesu `ENTER`.
5. Restartujte server.
6. Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.

#### Debian 7 a 8

Pomocí následujícího příkazu otevřete konfigurační soubor síťového rozhraní:

```sh
nano /etc/network/interfaces
```

Upravte sekundární síťové rozhraní následujícím způsobem:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Ve výše uvedeném příkladu můžete použít libovolný rozsah privátních IP adres a jakoukoli adresu z tohoto rozsahu.

1. Stiskněte `CTRL + X` pro opuštění konfiguračního souboru sítě.
2. Stiskněte klávesu `Y` pro uložení provedených změn. Následně stiskněte klávesu `ENTER`.
3. Restartujte server.
4. Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.

#### Debian 9

Pomocí následujícího příkazu otevřete konfigurační soubor síťového rozhraní:

```sh
nano /etc/network/interfaces
```

Upravte sekundární síťové rozhraní následujícím způsobem:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Ve výše uvedeném příkladu můžete použít libovolný rozsah privátních IP adres a jakoukoli adresu z tohoto rozsahu.

1. Stiskněte `CTRL + X` pro opuštění konfiguračního souboru sítě.
2. Stiskněte klávesu `Y` pro uložení provedených změn. Následně stiskněte klávesu `ENTER`.
3. Restartujte server.
4. Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.

#### Ubuntu Server 16

Pomocí následujícího příkazu otevřete konfigurační soubor síťového rozhraní:

```sh
vi /etc/network/interfaces
```

Stisknutím klávesy `I` vstoupíte do režimu pro vkládání informací.

Upravte sekundární síťové rozhraní následujícím způsobem:

```sh
auto eth1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Ve výše uvedeném příkladu můžete použít libovolný rozsah privátních IP adres a jakoukoli adresu z tohoto rozsahu.

1. Stiskněte klávesu `ESC`.
2. Stiskněte klávesu `SHIFT` + *:* pro otevření editoru.
3. Napište `wq`.
4. Stiskněte klávesu `ENTER`.
5. Restartujte server.
6. Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.

#### Ubuntu Server 17

Pomocí následujícího příkazu otevřete konfigurační soubor síťového rozhraní:

```sh
nano /etc/network/interfaces
```

Upravte sekundární síťové rozhraní následujícím způsobem:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Ve výše uvedeném příkladu můžete použít libovolný rozsah privátních IP adres a jakoukoli adresu z tohoto rozsahu.

1. Stiskněte `CTRL + X` pro opuštění konfiguračního souboru sítě.
2. Stiskněte klávesu `Y` pro uložení provedených změn. Následně stiskněte klávesu `ENTER`.
3. Restartujte server.
4. Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.


#### Windows

Pro demonstrativní účely budeme používat následující rozsah interních IP adres: *192.168.0.0/16*.

- Pomocí funkce „Připojení ke vzdálené ploše“ se připojte ke svému Windows serveru.
- Klikněte na tlačítko `Start`{.action}.
- Klikněte na `Control Panel`{.action}.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Klikněte na `Network and Internet`{.action}.

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Klikněte na `Network and Sharing Centre`{.action}.

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Klikněte na `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Pravým tlačítkem myši klikněte na sekundární síťové rozhraní.

- Klikněte na `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Levým tlačítkem myší dvakrát klikněte na `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Klikněte na `Use the following IP address`:

    - Do pole `IP address` zadejte IP adresu ze svého rozsahu.
    - Do pole `Subnet mask` zadejte následující hodnotu: 255.255.0.0.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

-  Pro uložení provedených úprav klikněte na tlačítko `OK`{.action}.
- Restartujte server.
- Celý postup opakujte i pro ostatní servery (zadávejte přitom libovolné privátní IP adresy ze zvoleného rozsahu). Vaše servery budou následně schopny komunikovat v rámci privátní sítě.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.