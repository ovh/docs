---
deprecated: true
title: Aan de slag met Private SQL
slug: eerste-stappen-met-private-sql
excerpt: Ontdek hoe u een goed begin kunt maken met Private SQL
section: Private SQL
---

**Laatste update op 19-01-2018**

## Introductie

Met Private SQL kunt u profiteren van een SQL-instance in combinatie met OVH-webhosting, met dedicated, gegarandeerde resources. Dit biedt een betere prestatie en flexibiliteit op de beschikbare database-systemen en op de systemen die u kunt maken. Deze dienst is gewoonlijk gericht op klanten met specifieke behoeften.

**Ontdek hoe u Private SQL kunt gebruiken.**

## Vereisten

- U moet beschikken over een Private SQL-instance (inbegrepen in een [webhosting-programma](https://www.ovhcloud.com/nl/web-hosting/){.external}, of besteld via een [SQL-optie](https://www.ovhcloud.com/nl/web-hosting/){.external}).
- U moet beschikken over een[Webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external} op hetzelfde datacenter als uw Private SQL-instance (u kunt deze informatie vinden in uw OVH Control Panel).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructie

### De algemene informatie van de instance weergeven

In de servicebalk links van uw [OVH-Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} gaat u naar het onderdeel `Databases`{.action} en vervolgens naar de betreffende SQL-instance. Ga na of u het tabblad `Algemene informatie`{.action} geopend hebt.

> [!primary]
>
> De naam van de Private SQL in uw OVH Control Panel kan op twee manieren worden weergeven:
>
> - met een gedeelte van uw NIC handle en eindigend met drie cijfers (001 voor de eerste geïnstalleerde Private SQL, 002 voor de tweede, enz.);
> - of met aan het begin *sqlprive-*, vervolgens een gedeelte van uw NIC handle en aan het einde drie cijfers (001 voor de eerste geïnstalleerde service, 002 voor de tweede, enz.).
>

U kunt hier de belangrijke informatie van uw SQL-instance raadplegen. Wij nodigen u uit om even de tijd te nemen om u ervan te verzekeren dat de weergeven informatie juist is of overeenkomt met de onderstaande aanwijzingen.

|Informatie|Details|
|---|---|
|Service status|Het is vooral zichtbaar als de instance wordt gestart, deze wordt herstart, of geblokkeerd. Uw instance moet opnieuw worden opgestart om er acties op uit te voeren.|
|Type|Toont het databasesysteem dat door de server wordt gebruikt. Als u niet weet of het type juist is: het meest gangbare type is ‘MySQL’, maar er bestaan ook andere types (PostgreSQL, MariaDB). Als u bijvoorbeeld WordPress voor uw website gebruikt, is een MySQL-systeem daar perfect voor.|
|Versie|Toont de versie van het databasesysteem dat door de server wordt gebruikt. Controleer of uw website compatibel is met de door u gekozen versie.|
|RAM|Toont het RAM-geheugen dat beschikbaar is voor uw instance, wordt ook weergegeven als u de RAM-limiet bijna overschrijdt. Uw Private SQL-instance beschikt over dedicated, gegarandeerde resources: zijn RAM-geheugen. Indien nodig kunt u het geheugen uitbreiden en worden gewaarschuwd als u het hele geheugen van uw instance gebruikt.|
|Infrastructuur|Toont de infrastructuur die door uw instance wordt gebruikt. Deze informatie is kenmerkend aan de OVH-infrastructuur.|
|Datacenter|Toont het datacenter waarin de instance is gecreëerd.  Ga na of het datacenter van uw instance hetzelfde is als dat van de OVH-host waar uw website wordt/zal worden gehost. |
|Host|Toont de server waarop de instance is gecreëerd.  Deze informatie is kenmerkend aan OVH‘s infrastructuur en kan worden gebruikt in onze communicatie omtrent [OVH-incidenten](http://travaux.ovh.net/){.external}.||

![Algemene informatie](images/privatesql01-General-information.png){.thumbnail}

### Creëer een database 

In de database wordt alle data van uw website opgeslagen (voor een blog is dat bijvoorbeeld het commentaar).

Om uw eerste database te maken, klikt u op het tabblad `Databases`{.action} en vervolgens op de knop `Een database toevoegen`{.action}.

![Voeg een database toe](images/privatesql02-Adding-a-database.png){.thumbnail}

In het venster dat wordt geopend, kunt u een gebruiker aanmaken. Dit is nodig omdat de gebruiker zich op uw instances kan inloggen en database-informatie kan opvragen met de bijbehorende bevoegdheden (zoals lezen, toevoegen of verwijderen van gegevens).

U hebt dus de mogelijkheid om tegelijk met uw database een gebruiker aan te maken door het vakje `Een gebruiker maken`{.action} te selecteren, of om dit apart te doen door het vakje niet te selecteren. Selecteer het vakje voor een snelle, eenvoudige oplossing.

U kunt nu naar keuze de gevraagde informatie invullen en de aanwijzingen in de popups volgen.

- Hierna klikt u op **Bevestigen**.
- **Naam van de database** (verplicht): dit is de naam van uw toekomstige database.
- **Machtigingen** (optioneel als het vakje niet is geselecteerd): de machtigingen die aan de gebruiker in de database zijn gekoppeld. Voor een standaard gebruik selecteert u `Beheerder (Admin)`{.action}. De rechten kunnen later gewijzigd worden.
- **Wachtwoord**/**Wachtwoord bevestigen** (optioneel als het vakje niet geselecteerd is): selecteer een wachtwoord en bevestig dit.

> [!warning]
>
> Om veiligheidsredenen verzoeken wij u de voorwaarden te respecteren die tijdens de registratie van informatie worden aangegeven.
>

![Voeg een database toe](images/privatesql03-Adding-a-database-part2.png){.thumbnail}

### Een gebruiker aanmaken (optioneel)

Deze stap is optioneel als u de gebruiker tegelijk met de database aangemaakt hebt in de vorige handeling. Voor standaard gebruik is één gebruiker voldoende. Voor een specifieker project kan het echter nodig zijn om meerdere gebruikers aan te maken die toegang hebben tot uw database. Eén van de gebruikers die aan uw database is gekoppeld, kan bijvoorbeeld lees- en schrijfrechten hebben terwijl de andere uitsluitend leesrechten heeft.

Als u uw eerste gebruiker al hebt gemaakt en uw project niet meer gebruikers nodig heeft, kunt u doorgaan naar de volgende handeling. Om een gebruiker aan te maken, klikt u naar keuze op het tabblad `Gebruikers en rechten`{.action} en vervolgens op de knop `Een gebruiker toevoegen`{.action}.

![Voeg een gebruiker toe](images/privatesql04-Adding-a-user.png){.thumbnail}

Vul de gevraagde informatie in het venster in en volg hierbij de aanwijzingen in de pop-ups.

- Hierna klikt u op **Bevestigen**. U kunt de gebruiker in de volgende stap toegang verlenen tot uw database.
- **Wachtwoord**/**Wachtwoord bevestigen**: selecteer een wachtwoord en bevestig dit.

> [!warning]
>
> Om veiligheidsredenen verzoeken wij u de voorwaarden te respecteren die tijdens de registratie van informatie worden aangegeven
>

![Voeg een gebruiker toe](images/privatesql04-Adding-a-user.png){.thumbnail}

Als de gebruiker aangemaakt is, moet u er rechten aan verlenen zodat deze handelingen kan uitvoeren in uw database (zoals gegevens lezen, schrijven of verwijderen). Hiervoor klikt u op het tandwielpictogram en vervolgens op `Rechten beheren`{.action}.

![Voeg rechten toe](images/privatesql06-Adding-a-right.png){.thumbnail}

Op de nieuwe pagina selecteert u het gewenste recht en klikt hierop. Voor een standaard gebruik selecteert u `Beheerder (Admin)`{.action}.

![Voeg rechten toe](images/privatesql07-Adding-a-right-part2.png){.thumbnail}

### Een database importeren (optioneel)

Deze stap is alleen van toepassing als u een bestaande, opgeslagen database wilt importeren (noodzakelijk als u uw site naar OVH verplaatst of als u uw database naar uw nieuwe Private SQL verplaatst). Als u geen database hoeft te importeren, kunt u doorgaan naar de volgende handeling.

Er zijn verschillende technieken waaruit u kunt kiezen om een database te importeren. OVH stelt hiervoor een tool ter beschikking in uw Control Panel. We zullen ons richten op deze tool.

#### Stap 1: Open de database import 

Ga naar het tabblad `Databases`{.action}, klik op het tandwielpictogram en vervolgens op `Een bestand importeren`{.action}.

![Voeg een bestand toe](images/privatesql08-import-a-file.png){.thumbnail}


In het venster dat geopend wordt, selecteert u het vakje `Een nieuw bestand importeren`{.action} en klikt vervolgens op `Volgende`{.action}.

![Voeg een bestand toe](images/privatesql09-import-a-file-part2.png){.thumbnail}

#### Stap 2: Selecteer en verzend het opgeslagen bestand 

Vul een bestandsnaam in (zodat u dit opgeslagen bestand later kunt identificeren als u het wilt herstellen) en selecteer vervolgens, naast **Bestand(.gz)**, het opgeslagen databasebestand op uw computer en klik op `Verzenden`{.action}.

Wacht even tot de interface aangeeft dat het bestand met succes verzonden is en klik op de knop `Volgende`{.action}.

![Voeg een bestand toe](images/privatesql10-import-a-file-part3.png){.thumbnail}

#### Stap 3: Start de database-import

Kies of u de weergegeven extra opties wel of niet wilt toepassen:

- **De huidige database legen**: als u dit vakje selecteert, wordt de momenteel aanwezige inhoud van de database geheel verwijderd en vervangen door de inhoud van uw opgeslagen bestand. In dit geval en als logisch vervolg op onze handelingen, hoeft u dit vakje niet te selecteren omdat de database leeg is;
- **Een e-mail verzenden aan het einde van de import**: door dit vakje te selecteren, ontvangt u een melding per e-mail zodra de database geïmporteerd is.

![Voeg een bestand toe](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Uw site aan de database koppelen

Nu u uw database hebt gemaakt en een of meerdere gebruikers rechten hebben in uw database, moet u uw site nog met uw database koppelen. Deze stap kan op meerdere manieren worden uitgevoerd, afhankelijk van de site en de CMS die u gebruikt (WordPress, Joomla enz.) of de stap waarin u zich bevindt indien u een website aan het installeren bent.

Om deze handeling met succes te kunnen uitvoeren, moet u over de volgende vijf gegevens beschikken:

- **de naam van de database**: dit is de naam die u hebt bepaald tijdens het maken van de database;
- **de gebruikersnaam**: dit is de gebruikersnaam die u hebt bepaald tijdens het maken van de database of een eventuele extra gebruiker die u hebt gemaakt;
- **het wachtwoord van de gebruiker**: dit is het aan de gebruiker gekoppelde wachtwoord dat u bepaald hebt tijdens de voorgaande handelingen;
- **de hostnaam van de server**: dit is de server die u moet invullen zodat uw site verbinding kan maken met uw database. Deze informatie is beschikbaar in uw Control Panel in het gedeelte **Inloggen (Verbindingen)** vanuit het tabblad `Algemene informatie`{.action};
- **de serverpoort**: dit is de poort voor verbinding met uw Private SQL-server waardoor uw site verbinding kan maken met uw database. Deze informatie is beschikbaar in uw Control Panel in het gedeelte **Verbindingen (Inloggen)** vanuit het tabblad `Algemene informatie`{.action};

> [!warning]
>
> In zeldzame gevallen wordt het veld `poort`{.action} niet voorgesteld in de configuratie van uw site. Als dit het geval is, moet u dit veld toevoegen na de hostnaam van uw server, en scheiden door *:* (voorbeeld: hostnaam:poort).
>

![SQL-verbinding](images/privatesql12-sql_connection.png){.thumbnail}

U kunt de installatie van uw site of de verplaatsing van uw database op uw nieuwe SQL-instance nu voltooien.

## Verder

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com/en/>.