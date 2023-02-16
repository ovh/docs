---
deprecated: true
title: Gebruik van SSL Gateway
slug: use-ssl-gateway
legacy_guide_number: 2370
excerpt: Beveilig verbindingen met uw website
updated: 2022-12-01
---


## Overzicht

### Vereisten


> [!primary]
>
> - [SSL Gateway](../order-ssl-gateway/guide.nl-nl.md) bestelling geplaatst.
> - Toegang tot het Sunrise Control Panel.
>

## Gebruik
We gaan nu uitleggen hoe u uw SSL Gateway kunt gebruiken


### Configuratie van de dienst
- Log in op uw [control panel](https://www.ovh.com/manager){.external}.
- Klik vervolgens op `Sunrise`{.action}.

![sunrise knop](images/4.PNG){.thumbnail}

- Klik dan op `SSL Gateway`{.action} om de dienst te bekijken.

![ssl gateway knop](images/5.PNG){.thumbnail}

- Selecteer de oplossing die u wilt configureren.

![commerciële pagina](images/6.PNG){.thumbnail}

- U komt vervolgens op een pagina voor het beheer van uw oplossing.

![algemene config](images/7.PNG){.thumbnail}

- Informatie beschrijving.

![info gedeelte](images/8.PNG){.thumbnail}


|IPv4|IPv4-adres van de OVH gateway waar u naar wilt laten leiden|
|IPv6|IPv6-adres van de OVH gateway waar u naar wilt laten leiden|
|Zone|Geografische zone van uw SSL Gateway IP-adres|
|Outgoing IPv4|OVH IPv4 adressen die zullen verbinden met uw server|
|Solution|Type oplossing-abonnement|
|Documentatie|Link naar deze handleiding|
|Status|Uw SSL Gateway status|
|Vervaldatum|Vervaldatum van uw SSL Gateway|
|Cancel|Annulatieverzoek voor uw  SSL Gateway|
|Upgrade to Advanced|Hiermee kunt u upgraden van Free naar Advanced|

- Configuratie beschrijving

![conf section](images/9.PNG){.thumbnail}


|Configuration|Knop waarmee u de configuratie van uw SSL Gateway kunt wijzigen|
|HSTS [[1]](#id5){.note-ref #id1}|Zorgt ervoor dat de browser alle toekomstige verbindingen met uw website in HTTPS uitvoeren|
|Reverse|Hiermee kunt u een hostnaam plaatsen op uw SSL Gateway IP-address|
|HTTPS Redirection [[2]](#id6){.note-ref #id2}|Leidt de bezoeker naar de HTTPS-versie van uw website wanneer ze het openen in HTTP|
|HTTPS Server [[3]](#id7){.note-ref #id3}|Schakelt HTTPS in tussen de SSL Gateway server en uw eigen server|
|Originating IP restriction|Als dit veld is ingevuld dan kunnen enkel de vermelde IP’s of netwerken verbinden met de SSL Gateway|
|Cipher configuration [[4]](#id8){.note-ref #id4}|Hiermee kunt u een beveiligingsniveau kiezen voor uw SSL/TLS certificaat|



> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Meer informatie over HSTS.</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Wanneer u hebt gecontroleerd of uw site goed functioneert met het HTTPS-protocol, kunt u al het HTTP-verkeer laten leiden naar HTTPS. We raden u aan om 24 uur te wachten nadat u uw domein hebt laten leiden naar SSL Gateway alvorens u het verkeer doorstuurt, zodat de bezoekers op uw website de nieuwe functionele DNS-configuratie zeker hebben.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Hiermee kan de verbinding end-to-end beveiligd worden. De SSL Gateway server zal verbinden met uw server op de standaard HTTPS 443 port. Let op: uw server moet SSL/TLS-gecertificeerd zijn om activatie van deze optie mogelijk te maken. Zonder dit certificaat zal uw website niet functioneren. U hoeft dit certificaat echter niet voor uw server te vernieuwen.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>Het hoogste niveau zal de beste beveiliging bieden, maar er is een kans dat het niet goed werkt op oudere browsers.</cite>
>

[Meer informatie over cipher](https://en.wikipedia.org/wiki/Cipher){.external}.


### Configuratie van het domein
Het volgende blok bevat 4 tabs:

- **Domeinen**
- **Servers**
- **Taken**
- **Graphics**


![Domeinen tabblad](images/10.PNG){.thumbnail}

Met het **‘Domeinen’** tabblad kunt uw domeinen en subdomeinen die verbonden zijn aan uw SSL Gateway toevoegen en verwijderen.

- Klik `+ Domein`{.action} om een domein of subdomein toe te voegen.

> [!faq]
>
> U maakt gebruik van een **‘Free’** oplossing
>> 
>> U zult slechts een **domein** hebben, met daarbij het **“www” subdomein** en een tweede **subdomein naar keuze**:
>> 
>> 
>> 
>> > [!primary]
>> >
>> > | Domein | example.com |
>> > | Subdomein www | www.example.com |
>> > | Subdomein naar keuze | blog.example.com |
>> > 
>> 

>> 
>> > [!warning]
>> >
>> > - Free oplossing:
>> > 
>> > Alleen domeinen van niveau 3 (www.example.org) zijn toegestaan.
>> > 
>> 
>> - Selecteer uw keuze en klik op `Toevoegen`{.action} om te valideren.
>> 
>> ![gratis domein toevoegen](images/11.PNG){.thumbnail}
>>
>
> U maakt gebruik van een **‘Advanced’** oplossing
>> 
>> U kunt elk actief domein of subdomein toevoegen.
>> 
>> > [!primary]
>> >
>> > - Advanced:
>> > 
>> > Domeinen van niveau 4 (blog.nl.example.org) en hoger zijn toegestaan.
>> > 
>> 
>> - Selecteer uw keuze en klik op `Toevoegen`{.action} om te valideren.
>> 
>> ![advanced domein toevoegen](images/12.PNG){.thumbnail}
>>
>


> [!warning]
>
> Wanneer een (sub)domein is toegevoegd ontvangt u een e-mail met het verzoek om het te laten leiden naar de SSL Gateway IP binnen 3 dagen.
> Dit is nodig om de aanmaak van het SSL/TLS-certificaat te valideren.
> 


Met het **‘Servers’** tabblad beheert u de IP-adressen van de servers die uw website hosten.

- Klik `+ Server`{.action} voor toevoeging van een IP-adres en port van uw website server.

![servers tabblad](images/13.PNG){.thumbnail}

> [!faq]
>
> U maakt gebruik van een **‘Free’** oplossing
>> 
>> U kunt slechts een IP/PORT-adres gebruiken.
>> 
>
> U maakt gebruik van een **‘Advanced’** oplossing
>> 
>> U kunt tot 3 IP/PORT-adressen toevoegen voor uw domeinen en subdomeinen.
>> 
>> 
>> > [!primary]
>> >
>> > Als u meerdere IP/PORT-adressen ingeeft dan zal uw SSL Gateway de verkeerslading verdelen middels het  Round Robin systeem.
>> > Meer informatie over de Round Robin DNS
>> > 
>> 
>> - Selecteer uw keuze en klik op `Toevoegen`{.action} om te valideren.
>> 
>> ![advanced IP/PORT (intern) toevoegen](images/15.PNG){.thumbnail}
>>
>


> [!warning]
>
> Het is momenteel niet mogelijk om IPv6-adressen aan uw servers toe te voegen.
> Dit is echter geen belemmering omdat uw (sub)domein kan leiden naar uw SSL Gatweay in IPv6.
> Uw SSL Gateway zal naadloos het IPv6-verkeer overschakelen naar het IPv4-adres van uw server.
> 


Met het **‘Tasks’** tabblad kunt u de lopende taken op uw SSL Gateway bekijken.


![taken tabblad](images/13-bis.PNG){.thumbnail}



> [!warning]
>
> Als we nog niet hebben gezien dat uw domein dat uw domein leidt naar de SSL Gateway IP, dat is het SSL/TLS-certificaat nog niet aangemaakt.
> Uw website zal echter nog steedstoegankelijk zijn in  ‘HTTP’. In dit geval zal er een kleine ‘HTTP’ thumbnail afbeelding verschijnen in het "Entering" tabblad.
> 
> ![alleen http](images/14.PNG){.thumbnail}
>

In het **‘Graphics’** tabblad bekijkt u het aantal verbindingen en verzoeken aan uw SSL Gateway per minuut.


![metrics tabblad](images/17.PNG){.thumbnail}

> [!faq]
>
> U maakt gebruik van een **‘Free’** oplossing
>> 
>> U kunt uw metrics over een periode van 24 uur bekijken.
>> 
>
> U maakt gebruik van een **‘Advanced’** oplossing
>> 
>> U kunt uw metrics over een periode van 1 maand bekijken.
>> 
>


## Vernieuwing van uw SSL-certificaat

### Belangrijk


> [!primary]
>
> Voor verlenging van het Let’s Encrypt certificaat moet het domein of subdomein leiden naar de IP van de SSL Gateway oplossing.
> - Als dit niet het geval is en onze robots dit 7 dagen vooraf aan de verlengdatum van het SSL/TLS-certificaat, dan wordt een e-mail aan u verzonden zodat u 3 dagen de tijd hebt om dit te voltooien.
> - Als deze procedure na 3 dagen nog niet is uitgevoerd dan kan het certificaat niet worden verlengd.  U zult het handmatig opnieuw moeten aanmaken met de knop:
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
> 
>

## Tips

### Correctie van de oorspronkelijke IP in logs

#### Presentatie
Wanneer klanten uw website bezoeken, verbinden ze zich met de SSL Gateway in HTTPS, waarop de SSL Gateway het verzoek naar uw server volgt na het decoderen en filteren van aanvallen. Alle verzoeken aan uw server komen vanaf de SSL Gateway.

Om het IP-adres van uw bezoekers te volgen, voegt de SSL Gateway deze standaard HTTP-headers automatisch toe:

- X-Forwarded-For en X-Remote-Ip: IP-adres van de klant, zoals gezien door de SSL Gateway.
- X-Forwarded-Port en X-Remote-Port: Source port van de klant, zoals gezien door de SSL Gateway.

Aangezien deze velden door een kwaadaardige klant kunnen worden bewerkt, mogen ze niet in aanmerking worden genomen, tenzij ze afkomstig zijn uit een vertrouwde bron, zoals een SSL Gateway. De lijst van oorspronkelijke IP’s gebruikt door de SSL Gateway bevindt zich in:

- Uw Sunrise Control Panel
- SSL Gateway
- Het ‘Outgoing IPv4’ veld

Ten tijde van de aanmaak van deze handleiding, zijn deze adressen **213.32.4.0/24** en **144.217.9.0/24**. In de toekomst kunnen andere adressen worden toegevoegd.

Als uw server het beheert dan kan deze worden geconfigureerd om deze informatie automatisch te herkennen in plaats van de SSL Gateway IP.


#### Apache
- Creëer het bestand:
/etc/apache2/conf-available/remoteip.conf
- Voer de volgende regels in:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# Zie https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway voor een up-to-date lijst
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


U kunt nu de variabelen %h vervangen met %a in de LogFormat directives van de Apache configuratie.

- Wanneer de configuratie is voltooid hoeft u het alleen nog maar te activeren met de commando’s:

```bash
# Enable the module then the configuration
a2enmod remoteip
a2enconf remoteip

# Restart Apache to recognise the module (reload is sufficient for configuration)
service apache2 restart
```


Meer informatie over deze Apache functie vindt u in de [officiële documentatie](https://httpd.apache.org/docs/current/en/mod/mod_remoteip.html){.external}.


#### Nginx
- Open het configuratiebestand van de te beveiligen website. Het bevindt zich meestal in:
/etc/nginx/sites-enabled
- Voer in server de volgende regels in:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up-to-date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Meer informatie over deze Nginx functie vindt u in de [officiële documentatie](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}.