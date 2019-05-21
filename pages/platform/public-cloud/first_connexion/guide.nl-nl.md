---
title: Inloggen op een Public Cloud-instance
slug: eerste-login
legacy_guide_number: 1787
excerpt: Ontdek hoe u verbinding maakt met uw Public Cloud-instances
section: Eerste stappen
---

**Laatste update 08-03-2018**

## Introductie

Inloggen bij Public Cloud gebeurt op dezelfde manier als een ‘normale’ login op een dedicated server (VPS, dedicated server, enz.) Maar het verschil is dat dit een specifieke gebruiker heeft.

In deze handleiding wordt uitgelegd hoe u zich inlogt op Public Cloud-instances vanaf Linux of Windows.


## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}
- U moet een [Public Cloud-instance](https://www.ovh.com/nl/public-cloud/instances/){.external} hebben aangemaakt. 


## Instructies

### Log in op een Linux-instance vanaf een Linux/Mac-omgeving

Met dit SSH-commando kunt u inloggen op uw Public Cloud-instance:

```sh
ssh *gebruiker*@IP_instance
```

Afhankelijk van de distributies, kan de gebruiker verschillen in Public Cloud. Hier is een tabel met een open lijst met gebruikers voor verschillende distributies:

|Distributie|Gebruiker|
|---|---|
|Archlinux|arch|
|Centos 6 |centos|
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
> Wanneer u rechtstreeks ingelogd bent, heeft u de rechten van deze gebruikers. Als u *superuser*-rechten wilt gebruiken, moet u het commando `sudo` gebruiken.
>


- Waarschuwing voor de SSH remote server fingerprint:

Wanneer u zich de eerste keer aanmeldt, moet u de authenticiteit van de host bevestigen door op `Ja` te klikken.

```sh
De authenticiteit van host 217.xxx.xxx.98 (217.xxx.xx.98) kan niet worden vastgesteld.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?
```


### Log in op een Linux-instance vanaf een Windows-omgeving

Om u in te loggen op een Linux-instance vanaf Windows, kunt u een softwareprogramma zoals [PuTTY](https://www.putty.org/){.external} gebruiken, ook kunt u gebruikmaken van [native functies](https://docs.microsoft.com/en-us/windows/wsl/about){.external} voor de nieuwste Windows 10-versies.  U kunt dan de bovenstaande instructies voor Linux volgen.


### Log u in op een Windows-instance

#### Voltooi de installatie

Nadat u uw instance hebt aangemaakt, moet u *sysprep* voltooien. Hiervoor start u in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} de VNC-console:

![VNC-console](images/vnc_console.png)

In de eerste stap kunt u uw land, taal en toetsenbordtaal kiezen. Klik vervolgens op `Next`{.action}:

![Kies de taal in sysprep](images/sysprep_first_step.png)

Vervolgens kiest u het *admin*-wachtwoord:

![Kies wachtwoord in sysprep](images/sysprep_first_step.png)

Bevestig uw keuze met `Finish`{.action}. De instance wordt opnieuw opgestart en u kunt zich vervolgens inloggen op uw Windows-server.


#### Log in op Windows

U moet zich rechtstreeks inloggen op  uw Windows-instacie via de `Remote Desktop`-functie vanaf uw Windows-pc:

![Kies wachtwoord in sysprep](images/remote_desktop.png)

In de volgende stappen hoeft u alleen het IP-adres van uw instance op te geven (eerste stap van uw login via de remote desktop) en vervolgens uw gebruikersnaam (admin) en het wachtwoord dat u hebt opgegeven toe te voegen:

![Remote Desktop - Inloggen](images/remote_desktop_connection_IP.png)

![Remote Desktop - Gebruiker inloggen](images/remote_desktop_connection_user.png)

In de melding wordt u gevraagd u in te loggen en `Ja`{.action} of `Nee`{.action} te selecteren:

![Bevestiging van inloggen](images/connection_validation.png)

U bent nu ingelogd op uw instance.

> [!primary]
>
> Als u problemen ondervindt bij het inloggen op een Windows-instance, moet u ervoor zorgen dat de Windows Firewall een RDP-verbinding accepteert. Voor meer informatie kunt u deze [handleiding](https://docs.ovh.com/nl/vps/windows-first-config/){.external} raadplegen.
>


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.