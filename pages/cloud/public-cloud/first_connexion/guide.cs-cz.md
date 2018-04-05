---
title: 'Připojení k instanci Public Cloud'
slug: prvni-pripojeni
excerpt: 'Zjistěte, jak se připojit ke své Public Cloud instanci'
section: 'První kroky'
---

**Poslední aktualizace 05/04/2018**

## Cíl

Postup pro připojení k instanci Public Cloud se podobá „normálnímu“ připojení k dedikovanému serveru (VPS, dedikovaný server apod.), avšak s tím rozdílem, že každá instance má specifického uživatele.

**Zjistěte, jak se připojit ke své instanci Public Cloud prostřednictvím zařízení s operačním systémem Linux a Windows.**


## Prerekvizity

- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- [Instance Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external}


## Postup

### Připojení k linuxové instanci z operačního systému Linux/Mac

Pro připojení k instanci OVH Public Cloud zadejte následující SSH příkaz (hodnoty „user“ a „instance_IP“ nahraďte příslušnými údaji):

```sh
ssh *user*@instance_IP
```

Defaultní uživatel Public Cloud se bude lišit v závislosti na použité systémové distribuci.  Následující tabulka obsahuje (nikoli vyčerpávající) seznam výchozích uživatelů pro jednotlivé distribuce.

|Distribuce|Uživatel|
|---|---|
|Archlinux|arch|
|Centos 6|centos|
|Centos 7|centos|
|CoreOS|core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> V případě běžného připojení budete mít standardní uživatelská práva. Pokud si přejete získat „*práva speruživatele*“, budete muset použít příkaz `sudo`.
>


- Varování týkající se SSH otisku vzdáleného serveru:

Při prvním připojení je zapotřebí potvrdit autenticitu hostitele (na níže zachycenou otázku odpovězte `Yes`).

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Připojení k linuxové instanci z operačního systému Windows

Pro připojení k linuxové instanci pomocí operačního systému Windows můžete použít externího SSH klienta, jako např. [PuTTY](https://www.putty.org/){.external}. V případě nejnovější verze Windows 10 lze použít [nativní nástroje](https://docs.microsoft.com/en-us/windows/wsl/about){.external}. Následně postupujte podle instrukcí uvedených v předcházející části této příručky.


### Připojení k instanci Windows

#### Dokončení instalace

Jakmile vytvoříte instanci, budete muset dokončit proces zvaný *sysprep*. Za tímto účelem přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} a spusťte VNC konzoli:

![Konzole VNC](images/vnc_console.png)

Vyberte zemi, jazyk a rozvržení klávesnice. Následně klikněte na tlačítko `Další`{.action}:

![Volba jazyka sysprep](images/sysprep_first_step.png)

Nastavte *administrátorské heslo*:

![Volba hesla sysprep](images/sysprep_first_step.png)

Provedené změny potvrďte kliknutím na tlačítko `Dokončit`{.action}. Instance se automaticky restartuje. Následně se budete moci připojit ke svému Windows serveru.


#### Připojení k instanci Windows

Připojení k instanci s operačním systémem Windows je realizováno pomocí aplikace `Připojení ke vzdálené ploše`.

![Volba hesla sysprep](images/remote_desktop.png)

V prvním kroku budete požádáni o zadání IP adresy instance. V následujícím kroku vyplňte své přihlašovací údaje (uživatelské jméno *administrátora* a heslo):

![Připojení ke vzdálené ploše](images/remote_desktop_connection_IP.png)

![Připojení ke vzdálené ploše - uživatel](images/remote_desktop_connection_user.png)

Nakonec se zobrazí žádost o potvrzení Vašich přihlašovacích údajů. Klikněte na tlačítko `Ano`{.action}.

![Ověření připojení](images/connection_validation.png)

Následně budete připojeni ke své instanci.

> [!primary]
>
> V případě potíží s připojením k instanci s operačním systémem Windows zkontrolujte, zda Windows firewall neblokuje RDP připojení. Detailní informace na toto téma naleznete v následující příručce: [Prvotní nastavení VPS s Windows Server (Firewall)](https://docs.ovh.com/cz/cs/vps/windows-first-config/){.external}.
>

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.