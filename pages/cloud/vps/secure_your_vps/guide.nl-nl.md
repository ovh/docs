---
title: Beveiliging van een VPS 
slug: tips-beveiliging-vps
section: Eerste stappen
---

**Laatste update 18-01-2018**

## Introductie

Wanneer u zich abonneert op een VPS-server, bevat deze een voorgeïnstalleerde distributie, maar geen ingebouwde beveiligingsprotocollen. Het is aan u om uw VPS te beveiligen. OVH kan hier niet ingrijpen.

**Deze handleiding bevat algemene richtlijnen voor het beveiligen van uw server.**

 
> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is uw verantwoordelijkheid om het softwarebeheer en de dagelijkse veiligheid van uw systeem te garanderen. Wij stellen deze handleiding beschikbaar om u te helpen bij het uitvoeren van dagelijkse serverbeheertaken. We raden u echter aan om contact op te nemen met een gespecialiseerde dienstprovider als u problemen of twijfels hebt over het beheren, gebruiken of beveiligen van een server. Zie het gedeelte 'Verder' van deze handleiding voor meer informatie.
> 

## Vereisten

- U moet SSH-toegang tot de VPS hebben (root-toegang).


## Instructie

We bieden u hier een aantal tips. Let op, dit zijn algemene richtlijnen. Sommige opdrachten zullen moeten worden aangepast aan uw besturingssysteem. In sommige delen wordt geadviseerd om de tools van  een derde partij te gebruiken. Raadpleeg de officiële documentatie van de derde partij als u hulp nodig hebt.

### Systeemupdate

De ontwikkelaars van de verschillende distributies bieden vaak bijgewerkte versies van de pakketten, meestal om veiligheidsredenen. Het up-to-date houden van uw besturingssysteem is cruciaal voor de bescherming van uw VPS-server.

Deze updates worden meestal in twee fasen uitgevoerd:

- Update de lijst met pakketten

```sh
 apt-get update
```

- Updaten van de pakketten

```sh
apt-get update
```

Wanneer deze stap is voltooid, is uw besturingssysteem up-to-date. Deze procedure moet regelmatig worden uitgevoerd.


### Bewerk de SSH standaard luisterpoort


Een van de eerste acties op de server is het configureren van de SSH luisterpoort. Luisteren is standaard ingesteld op **poort 22**. We raden aan dat u deze standaardinstelling wijzigt en een andere poort opgeeft. De meeste serverhacks worden namelijk uitgevoerd door robots die standaard poort 22 aanvallen. Als u deze instelling wijzigt, wordt het voor hackers moeilijker om u aan te vallen en wordt uw server moeilijker te bereiken voor ongewenste bezoekers.

Met deze opdracht kunt u de dienstconfiguratie aanpassen:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> De `nano`-opdracht wordt als voorbeeld gegeven, u kunt ook het commando `vim` of een andere opdracht gebruiken om het bestand sshd\_config te bewerken.
>

De volgende regel wordt vervolgens meestal weergegeven:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Vervang poortnummer 22 door een ander poortnummer naar keuze. **Zorg ervoor dat u geen poortnummer gebruikt dat elders door uw systeem wordt gebruikt**. Sla de wijzigingen op en sluit het configuratiebestand.

Vervolgens moet u de dienst opnieuw starten:

```sh
/etc/init.d/ssh restart
```

Zorg er nu voor dat u bij het maken van een SSH-verbinding met uw machine het nieuwe poortnummer opgeeft:

```sh
ssh root@votrevps.ovh.net -p NouveauPort
```

### Wijzig het wachtwoord van het ‘root’-gebruikersaccount

Wanneer u een distributie installeert of opnieuw installeert, wordt automatisch een wachtwoord toegewezen voor root-toegang. We raden u ten zeerste aan dit wachtwoord te wijzigen en te vervangen door een persoonlijk wachtwoord. Hiervoor moet u inloggen en het volgende commando invoeren:

```sh
passwd root
```

Het systeem vraagt u om uw nieuwe wachtwoord in te voeren en opnieuw te bevestigen. Let op: om veiligheidsredenen zal het wachtwoord niet worden weergegeven tijdens het schrijven. U kunt de tekens die u hebt ingevoerd dus niet zien.

Wanneer de actie is voltooid, moet een nieuw wachtwoord worden ingevoerd wanneer u zich de volgende keer aanmeldt bij het systeem.

### Maak een gebruikersaccount met beperkte rechten en  blokkeer de toegang tot systemen met primaire gebruikersrechten

Een nieuwe gebruiker wordt aangemaakt met het volgende opdracht:

```sh
adduser NomUtilisateurPersonnalisé
```

Vul vervolgens de verschillende gegevens in die door het systeem wordt gevraagd (wachtwoord, naam, enz.).

Deze gebruiker kan zich via SSH aanmelden bij uw systeem met het wachtwoord dat u hebt opgegeven bij het maken ervan.

Als u na het verbinden met uw systeem bewerkingen wilt uitvoeren waarvoor root-bevoegdheden vereist zijn, voert u simpelweg het volgende commando in:

```sh
su root
```

U moet het wachtwoord voor de hoofdgebruiker opgeven om de bewerking te bevestigen.

### Schakel root-toegang naar de server uit

De root-gebruiker wordt standaard aangemaakt op UNIX-systemen en heeft de meeste rechten op uw systeem. Het is niet raadzaam om VPS voor deze gebruiker in te dienen. Het is zelfs gevaarlijk, omdat de beheerder onomkeerbare acties op uw server kan uitvoeren.

Het wordt aanbevolen dat u de directe toegang via het SSH-protocol uitschakelt.

Het wordt aanbevolen dat u de directe toegang via het SSH-protocol uitschakelt.

```sh
nano /etc/ssh/sshd_config
```

Noteer het volgende gedeelte:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Vervang **yes** met **no** voor de `PermitRootLogin` regel.

Om deze wijziging door te voeren, moet u de SSH-dienst opnieuw starten:

```sh
/etc/init.d/ssh restart
```

Gebruik de identificatiegegevens die u zojuist hebt gemaakt om in te loggen op uw systeem.


### Installeer en configureer het Fail2ban-pakket 

Fail2ban is een ongeautoriseerd intrusion security framework dat onbekende IP-adressen, die proberen uw systeem binnen te dringen, blokkeert. We raden ten zeerste aan om dit pakket te installeren ter bescherming tegen elke vorm van ‘brute force’-aanval.

De installatie van dit pakket gebeurt met het volgende commando:

```sh
apt-get install fail2ban
```

Wanneer het pakket is geïnstalleerd, moet u het configuratiebestand bewerken om het aan te passen aan uw eigen bestand. Voordat u bewerkingen uitvoert, raden we u aan een backup van het bestand te maken met het volgende commando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Maak vervolgens de bewerkingen in het bestand:

```sh
nano /etc/fail2ban/jail.conf
```

Wanneer de bewerking is voltooid, moet de dienst opnieuw worden gestart met de volgende opdracht:

```sh
/etc/init.d/fail2ban restart
```

Voor vragen over Fail2Ban kunt u de [officiële documentatie van deze tool](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} raadplegen.

### Configureer een interne firewall: Iptables

De ‘kale’ basisdistributie wordt geleverd met een firewalldienst genaamd iptables. Standaard heeft deze dienst geen actieve regel. Om dit te zien, tikt u op de opdracht:

```sh
iptables -L
```

Het is daarom raadzaam om de juiste regels voor uw firewall aan te maken en te bewerken. Raadpleeg de officiële documentatie van de distributie die u gebruikt in de sectie over het gebruik van deze dienst voor meer informatie over alle mogelijke functies.

### Configureer het OVH-firewallnetwerk

OVH biedt een infrastructuurfirewall genaamd Firewall Network. Dankzij de implementatie en configuratie kunnen protocollen al worden voorkomen nog voordat ze bij uw server aankomen.

[Hier](https://docs.ovh.com/fr/dedicated/firewall-network/){.external} vindt u de instructies voor deze firewall.

### Maak een backup van uw systeem en data

Het concept van beveiliging is niet beperkt tot het beschermen van een systeem tegen aanvallen.

Backup is een essentieel onderdeel van uw beveiliging. Daarom biedt OVH u drie backup-opties:

- Met de `Snapshot`-optie kunt u handmatig een snapshot van de virtuele machine maken (beschikbaar voor VPS SSD, Cloud VPS en Cloud RAM VPS);
- De `Automatische backup`-optie is een dagelijkse geplande backup van uw VPS (zonder extra harde schijf) die driemaal wordt geëxporteerd en gerepliceerd voordat deze beschikbaar is vanuit uw Control Panel (alleen beschikbaar voor Cloud VPS en Cloud RAM VPS);
- Met de `Backup Storage`-optie kunt u bestanden handmatig opslaan en herstellen op een speciale opslaglocatie. Voor dit doel zijn de beschikbare protocollen FTP, NFS en CIFS, die compatibel zijn met de aanmeldingsmethoden van alle gebruikers van het besturingssysteem. Dit beschermt uw data in het geval van een serviceonderbreking (alleen beschikbaar voor Cloud VPS en Cloud RAM VPS).

Meer informatie over ons VPS opslagaanbod: <https://www.ovh.com/fr/vps/backup-vps.xml>.

## Verder

[Handleiding over het Firewall Network](https://docs.ovh.com/fr/dedicated/firewall-network/){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com>.