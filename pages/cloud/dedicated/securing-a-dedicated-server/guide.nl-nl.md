---
deprecated: true
title: 'Beveiligen van een dedicated server'
excerpt: 'Tips over het beveiligen van uw dedicated server'
updated: 2018-06-20
---

**Laatste update 24-08-2018**

## Introductie

Wanneer u een dedicated server bestelt, is er geen beveiligingsprotocol op ingesteld. Het is uw verantwoordelijkheid om het te beveiligen. OVH kan niet aansprakelijk worden gesteld voor het niet beveiligen van uw machine.

**Deze handleiding gaat over het beveiligen van uw dedicated server.**

> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is aan u om het softwarebeheer en de beveiliging voor het dagelijks gebruik ervan te verzekeren.
>
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om contact op te nemen met een gespecialiseerde dienstprovider als u problemen of twijfels hebt over het beheren, gebruiken of beveiligen van een server. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>


## Vereisten

- U moet beschikken over een [dedicated server](https://www.ovh.nl/dedicated_servers/){.external}.
- U moet verbonden zijn in SSH (root-toegang of admin-toegang). 


## Instructie

> [!primary]
>
> Deze handleiding gaat over algemeen gebruik. Afhankelijk van de distributie en/of het besturingssysteem dat u gebruikt, moeten sommige commando’s mogelijk worden aangepast. Soms wordt geadviseerd om tools van derden te gebruiken. Als u vragen hebt over het gebruik van een dergelijke tool, lees dan de officiële documentatie van de betreffende uitgever.  
>

### Updaten van uw systeem

Ontwikkelaars van distributies en besturingssystemen bieden vaak software-pakketupdates aan, meestal om veiligheidsredenen. **Daarom is het uiterst belangrijk voor de veiligheid van uw server om uw distributie of besturingssysteem up-to-date te houden.**

Dit vereist twee stappen, waarbij zowel de lijst met pakketten (d.w.z. de lijst met geïnstalleerde softwaretoepassingen) als de pakketten zelf worden bijgewerkt.

#### Updaten van de lijst met pakketten

Ga als volgt te werk om de lijst met pakketten op uw server bij te werken:

```sh
apt-get update
```

#### Updaten van de pakketten

Ga als volgt te werk om de lijst met pakketten op uw server bij te werken:

```sh
apt-get upgrade
```

Wanneer deze updates zijn voltooid, is uw systeem up-to-date. Dit proces moet regelmatig worden uitgevoerd.

### Bewerk de SSH standaard luisterpoort

Een van de eerste acties die u op uw server moet uitvoeren, is het configureren van de SSH-dienst door de luisterpoort te wijzigen. Luisteren is standaard ingesteld op poort 22. We raden aan dat u de standaardwaarde wijzigt. De meeste serverhacks worden namelijk uitgevoerd door robots die standaard poort 22 aanvallen. Als u deze instelling wijzigt, wordt uw server moeilijker te bereiken voor hackers.

> [!primary]
>
> In de volgende twee voorbeelden gebruiken we de teksteditor **Nano** van Linux. U kunt echter elke teksteditor gebruiken waarmee u het configuratiebestand kunt bewerken.
>

Met dit commando kunt u de dienstconfiguratie aanpassen:

```sh
nano /etc/ssh/sshd_config
```

Ga vervolgens naar de volgende regel in het bestand:

```sh
What ports, IPs and protocols we listen for Port 22
```

Vervang poortnummer **22** door een poortnummer naar keuze, sla de wijzigingen op en sluit het configuratiebestand. **Zorg ervoor dat u geen poortnummer gebruikt dat al in gebruik is.** Vervolgens moet u uw server opnieuw starten:

Als u nu een SSH-verbinding met uw server tot stand wilt brengen, moet de nieuwe poort worden opgegeven.

```sh
ssh root@VotreServeur.ovh.net -p NouveauPort
```

> [!warning]
>
> Let op: het veranderen van de standaardpoort van SSH of een ander protocol vormt een potentieel risico. ﻿﻿Het kan voorkomen dat bepaalde diensten niet kunnen worden geconfigureerd zonder een standaardpoort en niet meer werken wanneer de poort is bewerkt.
>


### Wijzigen van het wachtwoord van het ‘root’-gebruikersaccount

Het installeren van een distributie- of besturingssysteem creëert automatisch een wachtwoord voor root-toegang. We raden u ten zeerste aan dit wachtwoord te wijzigen en een persoonlijk wachtwoord te gebruiken. Hiervoor maakt u een SSH-verbinding met uw server en voert u het volgende commando in:

```sh
passwd root
```

Voer vervolgens uw nieuwe wachtwoord twee keer in. **Het nieuwe wachtwoord wordt om veiligheidsredenen niet weergegeven tijdens het invoeren.** U kunt de tekens die u hebt ingevoerd dus niet zien.

Wanneer de actie is voltooid, moet een nieuw wachtwoord worden ingevoerd wanneer u zich de volgende keer inlogt op het systeem.


### Maak gebruikers aan met beperkte rechten

We raden aan dat u een gebruikersaccount instelt met beperkte toegang tot uw server voor dagelijks gebruik. U kunt een nieuwe gebruiker aanmaken met het commando:

```sh
adduser Naam_Gebruiker_Gepersonaliseerd
```

Vul vervolgens de verschillende gegevens in die door het systeem wordt gevraagd (wachtwoord, naam, enz.).

Deze gebruiker kan zich via SSH verbinden met uw systeem met het wachtwoord dat u hebt opgegeven bij het maken ervan. Als u na het verbinden met uw systeem bewerkingen wilt uitvoeren waarvoor root-bevoegdheden vereist zijn, voert u simpelweg het volgende commando in:

```sh
su root
```

U moet het wachtwoord voor de gebruiker opgeven om de bewerking te bevestigen.


### Schakel root-toegang naar de server uit.

De root-gebruiker wordt standaard aangemaakt op UNIX-systemen zoals Linux of macOS. Deze heeft alle admin-rechten op uw systeem. Het is niet aan te raden, zelfs zeer riskant, om uw dedicated server alleen toegankelijk te maken via deze gebruiker, omdat deze onomkeerbare bewerkingen op uw server kan uitvoeren. We raden ten zeerste aan dat u directe toegang door root-gebruikers via het SSH-protocol uitschakelt.

We raden ten zeerste aan om directe toegang voor root-gebruikers via het SSH-protocol uit te schakelen. Wijzig hiertoe het SSH-configuratiebestand als eerder om de SSH-poort te wijzigen.

Breng een SSH-verbinding tot stand met uw server en voer het volgende commando in:

```sh
nano /etc/ssh/sshd_config
```

Zoek vervolgens het volgende gedeelte en vervang "yes" door "no" in de regel `PermitRootLogin`:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Na het opslaan en sluiten van het configuratiebestand, start u de SSH-dienst opnieuw op met het volgende commando om de wijzigingen toe te passen:

```sh
/etc/init.d/ssh restart
```

### Installeer en configureer het Fail2ban-pakket 

Fail2ban is een ongeautoriseerd intrusion security framework waarvan het doel is om onbekende IP-adressen te blokkeren die proberen toegang tot uw systeem te krijgen. We raden aan om dit pakket te installeren om te beschermen tegen elke vorm van brute force-aanval.

Om Fail2ban te installeren, gebruikt u het commando:

```sh
apt-get install fail2ban
```

Nadat het pakket is geïnstalleerd, bewerkt u het bijbehorende configuratiebestand om het aan uw eigen configuratie aan te passen. Voordat u wijzigingen aanbrengt, raden we u aan altijd een backup van het configuratiebestand te maken door de volgende opdracht in te voeren:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Maak vervolgens de bewerkingen in het bestand:

```sh
nano /etc/fail2ban/jail.conf
```

Wanneer u klaar bent met het aanbrengen van de wijzigingen, start u de dienst opnieuw op met het volgende commando:

```sh
/etc/init.d/fail2ban restart
```

Lees de officiële [documentatie](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} van de tool voor meer informatie over Fail2Ban.


### Configureer de interne firewall: iptables

De ‘kale’ basisdistributie wordt geleverd met een firewalldienst genaamd iptables. Standaard heeft deze dienst geen actieve regel. Om dit te zien, tikt u op het commando:

```sh
iptables -L
```

Het wordt aanbevolen om de regels van deze firewall te creëren en aan te passen aan uw behoeften. Zie de officiële documentatie voor uw Linux-distributie voor meer informatie over het configureren van Iptables.


### Configureren van de OVH Network Firewall

OVH servers zijn uitgerust met Network Firewall, een speciale firewall direct bij de ingang van de infrastructuur. Dankzij de implementatie en configuratie kunnen protocollen al worden voorkomen nog voordat ze bij uw server aankomen.

We hebben ook een [handleiding](/pages/cloud/dedicated/firewall_network/){.external} voor het configureren van de Network Firewall.


### Maak een backup van uw systeem en data

Het concept van beveiliging is niet beperkt tot het beschermen van een systeem tegen aanvallen. Het beveiligen van uw gegevens is ook essentieel. Daarom biedt OVH u gratis 500 GB backup-opslag voor uw server. U kunt de backup-opslag inschakelen in uw Control Panel en deze openen met behulp van de volgende protocollen.

* FTP 
* FTPS 
* NFS 
* CIFS

U hebt ook een extra backup-oplossing nodig om uw gegevens te repliceren en over te brengen naar uw backup-opslag.

Raadpleeg onze [handleiding](https://docs.ovh.com/nl/dedicated/services-backup-storage/){.external} voor backup-opslag voor meer informatie over onze backup-opslagoplossingen.


## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.