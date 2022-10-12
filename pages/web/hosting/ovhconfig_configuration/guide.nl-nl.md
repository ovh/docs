---
deprecated: true
title: 'Configuratie van het .ovhconfig-bestand op uw webhosting '
slug: ovhconfig-bestand-bewerken
excerpt: 'Ontdek hoe u het .ovhconfig-bestand kunt bewerken'
section: 'Configuratie van het webhostingplan'
order: 03
---

**Laatste update 03-01-2019**

## Introductie

Onder bepaalde omstandigheden kan het nodig zijn om specifieke wijzigingen aan te brengen aan uw [webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external}. Om u te helpen heeft OVH een **.ovhconfig**-bestand verstrekt, waarmee u bepaalde instellingen kunt bewerken.

Deze handleiding beschrijft hoe het .ovhconfig-bestand kan worden gewijzigd. 

## Vereisten

- U moet beschikken over een [OVH webhostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external} (met uitzondering van Cloud Web).
- U moet beschikken over het wachtwoord van de FTP-gebruiker voor toegang tot uw opslagruimte. 

## Instructie

Wanneer u de configuratie van uw webhostingplan wijzigt, bewerkt u ook de configuratie die uw website gebruikt. Een verkeerde handeling kan ertoe leiden dat uw website niet beschikbaar is. Zorg ervoor dat de configuratie in het bestand compatibel is met uw website.

Het .ovhconfig-bestand kan op twee manieren worden gewijzigd: 

- **Het handmatig bewerken van het .ovhconfig-bestand**: deze oplossing is meer technisch en vereist inloggen op uw opslagruimte. In deze handleiding beschrijven we alleen deze methode.

- **Via een configuratiewizard uit uw OVH Control Panel**: deze oplossing is minder technisch en vereist inloggen op uw Control Panel, waar u de gewenste wijzigingen kunt kiezen. Volg hiervoor de instructies in de OVH handleiding: [De configuratie van uw webhosting bewerken](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/){.external}.

Als u het .ovhconfig-bestand handmatig wilt wijzigen, volgt u de stappen die hieronder worden beschreven. 

### Bewerking van het .ovhconfig-bestand

#### Stap 1: Log in op uw opslagruimte.

Zorg ervoor dat u een admin-FTP-gebruikersnaam, -wachtwoord en FTP-serveradres bij de hand hebt. Log vervolgens met behulp van deze informatie in op uw opslagruimte. Als u hier hulp bij nodig hebt, kunt u de handleiding [Inloggen op uw opslagruimte](https://docs.ovh.com/nl/hosting/mijn-website-online-zetten/#stap-2-zet-uw-websitebestanden-online-in-uw-opslagruimte){.external} raadplegen.

**Als u de bovenstaande informatie niet hebt**, logt u zich in op het [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en klikt u op `Webhosting`{.action} in de dienstenbalk aan de linkerkant. Selecteer de naam van het betreffende hostingplan en klik op het tabblad `FTP - SSH`{.action}. Daar vindt u de informatie die u nodig hebt om in te loggen. Als u niet langer in het bezit bent van het wachtwoord, raadpleegt u de instructies in onze handleiding [Wijziging van het wachtwoord van een FTP-gebruiker](https://docs.ovh.com/nl/hosting/wijzigen-wachtwoord-ftp-gebruiker/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Stap 2: Herstel of creëer het .ovhconfig-bestand

Zodra u bent ingelogd op uw opslagruimte, kunt u alle bestanden zien die daar zijn opgeslagen. Blijf in de hoofdmap van uw webhosting (gemarkeerd als '/'). Als het goed is kunt u hier het .ovhconfig-bestand vinden. 

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Er zijn twee mogelijkheden:

- **Het .ovhconfig-bestand staat in de map**: sla het op uw computer op. We raden aan om er een kopie van te maken voordat u deze wijzigt. Met deze kopie kunt u het originele bestand herstellen mocht u dit nodig hebben.
- **Het .ovhconfig-bestand staat niet in de map**: maak het op uw eigen computer aan en geef het de naam '.ovhconfig'.

#### Stap 3: Bewerk het .ovhconfig-bestand

Als u eenmaal het .ovhconfig-bestand hebt, kunt u het bewerken. Gebruik hiervoor een van de beschikbare teksteditors. Uw .ovhconfig-bestand zou een code moeten bevatten die er ongeveer zo uitziet:

```php
app.engine=php
app.engine.version=7.3

http.firewall=none
environment=production

container.image=stable
```

Personaliseer deze variabelen aan de hand van de configuratie die voor uw website wordt gebruikt. 

|Variabelen|Details|
|---|---|
|app.engine|Hiermee kan de PHP-motor worden gebruikt door uw website. Voer 'php' in om de PHP-FPM versneller in te schakelen en 'phpcgi' om het uit te schakelen.|
|app.engine.version|Kies de PHP-versie die wordt gebruikt door de webhosting. U kunt [hier](https://www.ovhcloud.com/nl/web-hosting/uc-programming-language/){.external} een lijst met beschikbare versies vinden. Voer de gewenste versie in.|
|http.firewall|Hiermee kunt u de bij OVH webhosting aangeboden [firewall](https://www.ovhcloud.com/nl/web-hosting/options/){.external} in- of uitschakelen Voer 'security' in voor activering of 'none' om het te deactiveren.|
|environment|Hiermee kunt u uw cachegedrag beheren met statische bestanden op uw webpagina en PHP-fouten verwerken. Voer 'production' in om het cachen te maximaliseren en PHP-fouten te verbergen of 'development' opdat er geen caching wordt toegepast en PHP-fouten worden weergegeven....|
|container.image|Hiermee kunt u de omgeving wijzigen die door uw website wordt gebruikt. Voer de gewenste motor in. U kunt deze vinden in onze handleiding: [De configuratie van uw webhosting bewerken](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/){.external}.|

Hieronder vindt u gedetailleerde informatie over het .ovhconfig-bestand:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 7.3
; for phpcgi:
;   this option is ignored (= fallback in AUTO)
;
app.engine.version=7.3

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | jessie.i386 | testing
;
container.image=stable
```

#### Stap 4: Download het script naar de opslagruimte

Nadat het .ovhconfig-bestand is gewijzigd, hoeft u het alleen nog maar te downloaden en in uw opslagruimte te importeren. Hiervoor moet het configuratiebestand opnieuw worden geüpload naar de basismap ('/'). Als er al een bestand bestaat, vervangt u deze.

### Geavanceerd gebruik van .ovhconfig-bestanden

Als u uw webhosting voor meerdere websites gebruikt, heeft u waarschijnlijk Multisites geconfigureerd. Onder bepaalde omstandigheden kan het nodig zijn om een andere versie van PHP te gebruiken voor elk van de gehoste sites.

Hiertoe maakt u een .ovhconfig-bestand voor een of meer MultiSite-opties die de geselecteerde PHP-versie bevatten. Raadpleeg de stappen in het gedeelte [Het .ovhconfig-bestand bewerken](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/#bewerking-van-het-ovhconfig-bestand){.external} in deze handleiding als u hier hulp bij nodig hebt. Zorg er bij het downloaden en importeren van het .ovhconfig-bestand naar uw opslagruimte voor dat het zich in de Multisite-hoofdmap bevindt. U kunt deze hoofdmap vinden in uw Control Panel op het tabblad Multisite van de betreffende webhosting.

> [!warning]
>
> Het opzetten van een andere omgeving is niet mogelijk. Alleen de omgeving die is opgegeven in het .ovhconfig-bestand in de hoofdmap van uw opslagruimte is inbegrepen.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.