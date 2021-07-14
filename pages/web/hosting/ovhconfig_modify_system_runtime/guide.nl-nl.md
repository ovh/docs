---
deprecated: true
title: 'De configuratie van uw webhosting bewerken'
slug: bewerking-omgeving-webhosting-configuratie
excerpt: 'Leer hoe u de instellingen van uw webhosting kunt aanpassen'
section: 'Configuratie van het webhostingplan'
order: 3
---

**Laatste update 25-09-2018**

## Introductie

Er zijn enorm veel verschillende websites op het internet. Of u nu een blog of een webshop opzet, een passie deelt of een professionele activiteit promoot; met uw [OVH webhosting](https://www.ovh.nl/shared-hosting/){.external} kunt u de website hosten die u wilt, zolang het maar compatibel is met de [configuratie van onze infrastructuren](https://webhosting-infos.hosting.ovh.net){.external}.

**Deze handleiding beschrijft hoe u uw webhosting aanpast vanaf uw OVH Control Panel.**

## Vereisten

- U moet beschikken over een [OVH webhostingplan](https://www.ovh.nl/shared-hosting/){.external} (behalve Cloud Web).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).

## Instructie

**Wees voorzichtig bij het configureren van de webhosting**; onjuiste wijziging kan de toegang tot uw website belemmeren. Door meer te leren over de impact van een bewerking kunt u een beter inzicht krijgen in de wijzigingen die u aanbrengt.

Wanneer u de configuratie van uw webhostingplan wijzigt, bewerkt u ook de configuratie die uw website gebruikt. Hoewel onze infrastructuren een aantal mogelijke configuraties bieden, moet u ervoor zorgen dat de geselecteerde configuratie technisch compatibel is met uw website.

> [!warning]
>
> Voordat u begint met het aanbrengen van wijzigingen, moet u nagaan of deze uw domeinnaam niet ontoegankelijk maken. We raden u echter aan om contact op te nemen met een gespecialiseerde provider als u problemen ondervindt. We kunnen u hier niet zelf bij helpen. Meer informatie is te vinden in het gedeelte ‘Verder’ in deze handleiding. 
> 

### Bewerking van de configuratie voor webhosting vanuit het Control Panel

#### Stap 1: Ga naar de configuratie van de webhosting

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Zorg ervoor dat u zich op het tabblad `Algemene informatie`{.action} bevindt, klik op `...`{.action} en klik vervolgens op de knop `Configuratie bewerken`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

Als de knop `Configuratie bewerken`{.action} grijs wordt weergegeven, is mogelijk een **global PHP version** controle actief. Als dat het geval is, verschijnt er een cirkelvormig blauw pictogram naast die versie. Wacht enkele minuten tot de knop `Configuratie bewerken`{.action} weer beschikbaar is.

![hostingconfiguration](images/change-hosting-configuration-step2.png){.thumbnail}

#### Stap 2: Bewerken van de configuratie van uw webhosting

Er verschijnt een popup-venster met twee opties. Selecteer uw gewenste actie en klik vervolgens op `Volgende`{.action}.

|Keuze |Details|
|---|---|
|`Terug naar de vorige configuratie`|Nadat u deze optie hebt geselecteerd, selecteert u de configuratie die moet worden hersteld naast `Vorige selectie`. Deze optie is mogelijk niet beschikbaar als u in het verleden geen wijzigingen hebt aangebracht.|
|`Bewerken van uw huidige configuratie`|Nadat u deze optie hebt geselecteerd, kiest u de wijzigingen die moeten worden aangebracht in de configuratie tussen de voorgestelde velden. Indien nodig kunt u ze vinden door naar het gedeelte [Zie beschikbare configuraties](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#zie-beschikbare-configuraties){.external} in deze handleiding te gaan.|

> [!primary]
>
> Het wijzigen van de runtime engine van een webhosting herstart PHP-sessies automatisch.
> 

Klik als u klaar bent op `Bevestigen`{.action} om de bewerking in te schakelen. Wacht tot de wijziging is doorgevoerd.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Zie beschikbare configuraties

Wanneer u een configuratie voor webhosting bewerkt, zijn er verschillende opties beschikbaar. Lees deze handleiding verder op basis van uw keuze.

- [Runtime omgeving](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#runtime-omgeving){.external} 
- [PHP-versie](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#php-versie){.external}
- [PHP-motor](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#php-motor){.external}
- [Modus](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#modus){.external}

#### Runtime omgeving

Door uw Runtime omgeving te wijzigen, kunt u bepaalde technische waarden voor uw webhosting aanpassen. **Voordat u wijzigingen aanbrengt, moet u ervoor zorgen dat uw Runtime omgeving compatibel is met uw website.** 

|Omgeving|Legacy|stable|testing|jessie.i386|
|---|---|---|---|---|
|Gelinkte afbeelding|Legacy|jessie.i386|jessie.i386|jessie.i386|
|Minimum PHP-versie|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|1.0.1k (TLS1.2 compatible)|
|Imagick PHP-extensie| - | Ja | Ja | Ja |
|Memcache PHP-extensie (PHP 5.6)| Ja | Ja | Ja | Ja |
|Memcache PHP-extensie (PHP 5.6)| - | Ja | Ja | Ja |
|Mongo PHP-extensie (PHP 5.4, 5.5, 5.6)| - | Ja | Ja | Ja |
|Mysqlnd extensie (alleen in utf-8)| - | Ja | Ja | Ja |
|Redis-extensie| - | Ja | Ja | Ja |
|Opcache| Ja | Ja | Ja | Ja |
|Python|2.6|2.7 en 3.4.|2.7 en 3.4.|2.7 en 3.4.|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

> [!primary]
>
> De ‘Legacy’ omgeving kan handig zijn voor oude websites die nog steeds gebruikmaken van oude PHP-versies. We raden u echter ten sterkste aan om een ‘stabiele’ besturingsomgeving met de nieuwste updates te gebruiken. **Zorg ervoor dat uw website compatibel is voordat u wijzigingen doorvoert.**
> 

Zodra uw keuze is gemaakt, zijn er twee opties voor het uitvoeren van deze wijziging:

- **Vanaf uw OVH Control Panel**: volg de instructies in het gedeelte [De configuratie van uw webhosting bewerken vanaf het Control Panel](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#vanaf-control-panel){.external} in deze handleiding.
- **Het handmatig bewerken van het ‘.ovhconfig’-bestand**: deze oplossing is technischer en vereist inloggen op uw opslagruimte. Als u het **.ovhconfig**-bestand wilt bewerken, raadpleegt u het gedeelte [Het .ovhconfig-bestand voor de webhosting configureren](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external} in deze handleiding.

#### PHP-versie

Momenteel zijn er verschillende versies van de PHP-programmeertaal. Zoals gewoonlijk brengen nieuwe versies verschillende oplossingen, zoals toegevoegde functies of oude registers. OVH biedt de nieuwste voornaamste PHP-versies, te vinden op: <https://www.ovh.nl/shared-hosting/php.xml>. 

Aangezien bepaalde functies niet langer kunnen worden onderhouden met nieuwe versies, moet u **nagaan of de nieuwe PHP-versie compatibel is met uw webpagina**.

Er zijn verschillende manieren om de PHP-versie van uw website te bewerken:

- **Vanaf uw OVH Control Panel**: volg de instructies in het gedeelte [De configuratie van uw webhosting bewerken vanaf het Control Panel](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#bewerking-van-de-configuratie-voor-webhosting-vanuit-het-control-panel){.external} in deze handleiding.
- **Het handmatig bewerken van het bestand in uw opslagruimte**: deze optie is meer technisch en vereist inloggen op uw opslagruimte. Als u het **.ovhconfig**-bestand wilt bewerken, raadpleegt u het gedeelte [Het .ovhconfig-bestand voor uw webhosting configureren](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external} in deze handleiding.

Als u in het algemeen meer informatie wilt over het wijzigen van een PHP-versie, raadpleegt u de instructies in onze handleiding [De PHP-versie van een OVH webhosting bewerken](https://docs.ovh.com/nl/hosting/php-versie-configureren/){.external}.

#### PHP-motor

Met PHP-motorselectie kunt u de PHP-accelerator (‘PHP-FPM’) in- of uitschakelen. Dit is afgestemd op onze infrastructuur om de prestaties van PHP-scripts te verbeteren. Ter vergelijking, de PHP-accelerator (‘PHP-FPM’) biedt tot zeven keer snellere prestaties dan de ‘phpcgi’-motor. 

Er zijn twee manieren om een door uw website gebruikte PHP-motor te bewerken:

- **Vanaf uw OVH Control Panel**: volg de instructies in het gedeelte [De configuratie van uw webhosting bewerken vanaf het Control Panel](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#bewerking-van-de-configuratie-voor-webhosting-vanuit-het-control-panel){.external} in deze handleiding. Om de PHP-accelerator (‘PHP-FPM’) te activeren, selecteert u ‘php’ als de motor. Selecteer ‘phpcgi’ om het uit te schakelen
- **Het handmatig bewerken van het ‘.ovhconfig’-bestand**: deze oplossing is meer technisch en vereist inloggen op uw opslagruimte. Als u het **.ovhconfig**-bestand wilt bewerken, raadpleegt u het gedeelte [Het .ovhconfig-bestand voor uw webhosting configureren](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external} in deze handleiding.

#### Modus

Met moduskeuze kunt u uw cachegegevens beheren op statische bestanden (zoals afbeeldingen) van uw webpagina, evenals de verwerking van PHP-fouten (meestal handig wanneer uw website bijvoorbeeld een blanco pagina weergeeft). U kunt kiezen uit twee modi: 

|Modus|Cache van statische bestanden|PHP-foutverwerking|
|---|---|---|
|*Production*|Maximaliseert het cachen van statische bestanden met webbrowsers.|PHP-fouten zullen niet verschijnen op uw website. |
|*Development*|Er is geen caching toegepast.|PHP-fouten zullen verschijnen op uw website.|

Er zijn twee manieren om de door uw website gebruikte modus te bewerken:

- **Vanaf uw OVH Control Panel**: volg de instructies in het gedeelte [De configuratie van uw webhosting bewerken vanaf het Control Panel](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/#bewerking-van-de-configuratie-voor-webhosting-vanuit-het-control-panel){.external} in deze handleiding.
- **Het handmatig bewerken van het ‘.ovhconfig’-bestand**: deze oplossing is meer technisch en vereist inloggen op uw opslagruimte. Als u het **.ovhconfig**-bestand wilt bewerken, raadpleegt u het gedeelte [Het .ovhconfig-bestand voor de webhosting configureren](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external} in deze handleiding.

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.