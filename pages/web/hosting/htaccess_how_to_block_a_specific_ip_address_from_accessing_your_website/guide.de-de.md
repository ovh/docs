---
title: "Tutorial - Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess Datei sperren?"
slug: webhosting-wie-bestimmte-ip-auf-der-Ebene-meiner-seite-blockieren
excerpt: "Entdecken Sie die möglichen Aktionen über eine .htaccess Datei, um den Zugriff auf Ihre Website für bestimmte IP-Adressen zu blockieren"
section: Weiterleitung und Authentifizierung
order: 01
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 12.09.2022**

## Ziel

Diese Anleitung hilft Ihnen dabei, den Zugang zu Ihren Webseiten im externen Netzwerk abzusichern, eventuelle Einbrüche oder Versuche von DDoS-Angriffen (Denial of Service Angriffe) zu verhindern oder zu korrigieren.

Dies können Sie mithilfe einer ".htaccess" Datei tun, einer speziellen Textdatei, die vom Webserver (Apache) erkannt wird und es ermöglicht, bestimmte Regeln für ein Verzeichnis und alle seine Unterverzeichnisse festzulegen.

Sie können mehrere ".htaccess" Dateien in [FTP Bereich](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Ihres Hostings erstellen, jedoch **ein einziges** pro Verzeichnis oder Unterverzeichnis, um Konflikte zwischen verschiedenen ".htaccess" Dateien zu vermeiden.

** Erfahren Sie, wie Sie den Zugang zu Ihrer Seite für bestimmte IP-Adressen über eine ".htaccess" Datei blockieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt "Weiterführende Informationen"(#go-further) dieser Anleitung.
>

## Voraussetzungen

- über ein [OVHcloud Shared Hosting](https://www.ovhcloud.com/de/web-hosting/)

## In der Praxis

> [!primary]
>
> Die Datei ".htaccess" kann in mehreren verschiedenen Ordnern angelegt werden, wobei die Regel **eines** Datei ".htaccess" pro Ordner oder Unterordner eingehalten wird.
>
> Die Parameter einer ".htaccess" Datei gelten für das Verzeichnis, in dem sie installiert ist, sowie für alle Unterverzeichnisse.
>
> Um diese Verzeichnisse zu bearbeiten (oder zu erstellen), loggen Sie sich in den FTP-Bereich Ihres Hostings ein. Falls nötig lesen Sie die Anleitung "[Auf meinen Speicherplatz zugreifen](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/)".
>

### Eine IP, einen IP-Bereich, eine Domain oder alle IPs eines Landes blockieren 

Es sind mehrere Regeln verfügbar, um die Zugänge zu Ihrem Hosting über das ".htaccess" zu sperren.<br>
Achten Sie auf die Syntax und die Einstellungen, die Sie blockieren, damit Sie sich nicht selbst beim Abruf Ihrer gehosteten Seiten und/oder Skripte blockiert sehen<br>
Im Fehlerfall können Sie sich jederzeit mit [FTP Bereich](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Ihres Hostings verbinden, um die Situation zu korrigieren. 

> [!primary]
>
> Shared Hosting funktioniert derzeit mit **Apache 2.4**. Seit der Version **Apache 2.3** wurden Variablen implementiert und die Redaktionssyntax der Zugriffsbeschränkungen/Zugriffsberechtigungen wurde weiterentwickelt.
>
> Da die alte Syntax sehr häufig verwendet wird, ist sie immer noch auf unseren Infrastrukturen aktiv. Allerdings gilt sie als überholt *Apache* und ist in Kürze möglicherweise nicht mehr verfügbar. In diesem Tutorial finden Sie Beispiele, in denen die beiden Syntaxen detailliert dargestellt sind.
>
> Mehr Informationen zur neuen Syntax finden Sie auf folgenden offiziellen Seiten:
>
> - [Dokumentation zur Zugriffskontrolle Apache 2.4](https://httpd.apache.org/docs/en/howto/access.html){.external}
> - [Dokumentation zum mod_authz_core Apache 2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html){.external}
>
>

##### Eine IP blockieren

Um eine bestimmte IP-Adresse zu blockieren, tragen Sie einen der beiden folgenden Codes in Ihrer ".htaccess"-Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from IP_address
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_address
>> </RequireAll>
>> ```
>>

- **Beispiel**: Wenn Sie die IP-Adresse 192.168.1.2 blockieren möchten, müssen Sie einen der folgenden Codes schreiben:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from 192.168.1.2
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168.1.2
>> </RequireAll>
>> ```
>>

#### Einen IP-Bereich blockieren

Um einen IP-Adressbereich zu blockieren, tragen Sie einen der beiden folgenden Codes in Ihrer Datei ".htaccess" ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from IP_range
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_range
>> </RequireAll>
>> ```
>>

- **Beispiel**: Wenn Sie alle IP-Adressen in 192.168.x.x blockieren möchten, müssen Sie einen der folgenden Codes einfügen:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from 192.168
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168
>> </RequireAll>
>> ```
>>

##### Eine Domain blockieren

Einige Domains können über Weiterleitungen oder Anfragen auf Ihr Hosting zugreifen.

Um eine Domain zu blockieren, tragen Sie einen der folgenden Codes in Ihre ".htaccess" Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from domain
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain
>> </RequireAll>
>> ```
>>

- **Beispiel**: Wenn Sie die Domain domain.tld blockieren möchten, müssen Sie einen der folgenden Codes schreiben:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> Deny from domain.tld
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain.tld
>> </RequireAll>
>> ```
>>

#### Die IPs eines Landes blockieren

> [!primary]
>
> Alle IP-Adressen (insbesondere öffentliche IP-Adressen) sind national geolokalisiert. So erhalten Sie einen Überblick über die Herkunft der Streams einer IP-Adresse und können die IP physisch ermitteln. 
>
> Mit dem ".htaccess" können Sie alle geolokalisierten IPs in einem Land blockieren. 
> Mit anderen Worten werden alle Personen, die versuchen, Ihre Website aus diesem Land zu besuchen, gesperrt (es sei denn, sie nutzen eine VPN-Verbindung mit einer geolokalisierten IP in einem anderen Land).
>
> Blockierungen über ".htaccess"werden über die "Country Codes" (ISO 3166-1 alpha2) der Länder durchgeführt.
>
> Mehrere Websites listen die jeweiligen Länder und "Country Codes" auf, darunter [https://www.iban.com/country-codes](https://www.iban.com/country-codes){.external} (unabhängig von OVHcloud).
>

Um alle IP-Adressen eines Landes zu blockieren, tragen Sie einen der folgenden Codes in Ihre ".htaccess"-Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Beispiel**: Wenn Sie geolokalisierte IP-Adressen in Fidschi (FJ) und Grönland (GR) blockieren möchten, müssen Sie einen der folgenden Codes einfügen:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE FJ BlockCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Um nur einigen wenigen IPs, einem IP-Bereich oder allen IPs eines Landes zu erlauben

Anstatt den Zugang auf eine oder mehrere IPs zu beschränken und anderen Zugang zu Ihrem Hosting zu gewähren, können Sie den umgekehrten Schritt tun, indem Sie alle IPs blockieren und dann nur eine oder mehrere IPs Zugriff auf Ihren Dienst gewähren.

#### Eine oder mehrere IPs erlauben

Um nur einer IP den Zugriff auf Ihren Dienst zu erlauben, tragen Sie einen der folgenden Codes in Ihrer ".htaccess" Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_address
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> Require ip IP_address
>> ```
>>

- **Beispiel**: Wenn Sie nur den IPs 192.168.1.2 und 192.168.1.3 den Zugriff auf Ihr Hosting erlauben möchten, müssen Sie einen der folgenden Codes schreiben:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1.2
>> Allow from 192.168.1.3
>> ```
>>
> Syntax ab Apache 2.3
>>
>> ```bash
>> Require ip 192.168.1.2 192.168.1.3
>> ```
>>

#### Einen IP-Bereich erlauben

Um einem IP-Bereich den Zugriff auf Ihren Dienst zu erlauben, tragen Sie einen der folgenden Codes in Ihrer ".htaccess"-Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_range
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> Require ip IP_range
>> ```
>>

- **Beispiel**: Wenn Sie nur dem IP-Bereich 192.168.1.x den Zugriff auf Ihr Hosting erlauben möchten, müssen Sie einen der folgenden Codes schreiben:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> Require ip 192.168.1
>> ```
>>

#### Alle IPs eines Landes erlauben

Um allen IP-Adressen eines Landes den Zugriff auf Ihren Dienst zu erlauben, tragen Sie einen der folgenden Codes in Ihrer ".htaccess" Datei ein:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Beispiel**: Wenn Sie nur Fidschi (FJ) und Grönland (GR) Zugang zu Ihrem Hosting gewähren möchten, müssen Sie einen der folgenden Codes angeben:

> [!tabs]
> Historische Syntax
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE FJ AllowCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Syntax ab Apache 2.3
>> Ganz oben auf Ihrem ".htaccess" platzieren
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### ergänz zur datei ".htaccess"

unabhängig von der Beim Beim zugriff auf das Hosting erlaubt die ".htaccess" datei weitere aktionen. Im folgenden finden Sie weitere drei Tutorials von OVHcloud zum Thema:

- [Das BVerinterface Website ihrer per ".htaccess" Schützen](https://docs.ovh.com/de/hosting/hosting-htaccess-authentifizierung/).
- [weitere Mit operationen der datei ".htaccess"durchführen](https://docs.ovh.com/de/hosting/webhosting_welche_anderen_operationen_sind_mit_htaccess-dateien_moglich/).

## Weitergehen <a name="go-further"></a>

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere verschiedenen [Support-Angebote](https://www.ovhcloud.com/de/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.

