---
title: Verwendung von SSL Gateway
slug: verwendung-von-ssl-gateway
legacy_guide_number: 2370
excerpt: Sichern Sie die Verbindungen zu Ihrer Website
---


## Allgemeine Informationen

### Voraussetzungen

> [!primary]
>
> - Sie haben bereits ein SSL Gateway bestellt <docs/web/ssl-gateway/order-ssl-gateway>.
> - Sie haben Zugang zum Sunrise Kundencenter.
>

## Verwendung
Hier erfahren Sie, wie Sie Ihr SSL Gateway verwenden.

### Konfiguration Ihrer Dienstleistung
- Loggen Sie sich in [Ihr Kundencenter](https://www.ovh.com/manager){.external} ein.
- Klicken Sie dann auf den Bereich `Sunrise`{.action}.

![Button Sunrise](images/4.PNG){.thumbnail}

- Klicken Sie anschließend auf `SSL Gateway`{.action}, um Ihre Dienstleistung einzusehen.

![Button SSL Gateway](images/5.PNG){.thumbnail}

- Wählen Sie dann das Angebot, dass Sie konfigurieren möchten.

![Angebotsseite](images/6.PNG){.thumbnail}

- So gelangen Sie auf die Verwaltungsseite Ihres Angebots.

![Übersicht Konfiguration](images/7.PNG){.thumbnail}

- Beschreibung der Informationen

![Informationen](images/8.PNG){.thumbnail}

|---|---|
|---|---|
|IPv4|IPv4-Adresse des OVH Gateways, auf die Sie verweisen müssen|
|IPv6|IPv6-Adresse des OVH Gateways, auf die Sie verweisen müssen|
|Zone|Geografische Zone der IP-Adresse Ihres SSL Gateways|
|Ausgehende IPv4|IPv4-Adressen von OVH, die sich mit Ihrem Server verbinden|
|Angebot|Art Ihres Angebots|
|Dokumentation|Link zu dieser Anleitung|
|Status|Status Ihrer SSL Gateway Dienstleistung|
|Ablaufdatum|Ablaufdatum Ihrer SSL Gateway Dienstleistung|
|Kündigen|Button, um Ihre SSL Gateway Dienstleistung zu kündigen|
|Zum Advanced Angebot migrieren|Option, um von SSL Gateway Free auf SSL Gateway Advanced zu migrieren|

- Beschreibung der Konfiguration

![Konfigurationsteil](images/9.PNG){.thumbnail}

|---|---|
|---|---|
|Konfiguration|Button, um die Konfiguration Ihrer SSL Gateway Dienstleistung zu bearbeiten|
|HSTS [[1]](#id5){.note-ref #id1}|Zwingt den Browser dazu, die nächsten Verbindungen mit Ihrer Website über HTTPS durchzuführen|
|Reverse|Erlaubt es, einen Hostnamen über Ihrer SSL Gateway IP anzuzeigen|
|HTTPS [[2]](#id6){.note-ref #id2} Umleitung|Leitet den Besucher Ihrer Website weiter auf die HTTPS Version, wenn er ursprünglich über HTTP darauf zugreift|
|HTTPS [[3]](#id7){.note-ref #id3} Server|Aktiviert HTTPS zwischen dem SSL Gateway Server und Ihrem Server|
|Einschränkungen der Quell-IPs|Wenn dieses Feld ausgefüllt ist, können sich nur die eingetragenen IPs und Netzwerke mit dem SSL Gateway verbinden|
|Cipher-Konfiguration [[4]](#id8){.note-ref #id4}|Ermöglicht es Ihnen, verschiedene Sicherheitslevel für Ihr SSL/TLS-Zertifikat auszuwählen|

> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Weitere Informationen zu HSTS</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Wenn Sie die Funktionalität Ihrer Website mit HTTPS überprüft haben, können Sie den gesamten HTTP-Traffic auf HTTPS umleiten. Allerdings empfehlen wir Ihnen, 24 Stunden mit dieser Umleitung zu warten, nachdem Sie Ihre Domain auf das SSL Gateway verweisen lassen. So ist sichergestellt, dass die Besucher Ihrer Website bereits die aktuelle DNS-Konfiguration haben.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Ermöglicht eine Ende-zu-Ende-Verschlüsselung der Verbindung. Der SSL Gateway Server verbindet sich hierbei über den Standard HTTPS Port 443. Achtung: Um diese Option zu aktivieren, müssen Sie über ein SSL/TLS-Zertifikat für Ihren Server verfügen. Ohne das Zertifikat wird Ihre Website nicht funktionieren. Das Zertifikat für Ihren Server muss allerdings nicht wieder erneuert werden.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>Das höchste Cipher-Level sorgt auch für den besten Schutz, funktioniert allerdings möglicherweise nicht mit älteren Browser-Versionen. Weitere Informationen zu Ciphers</cite>
>

### Konfiguration Ihrer Domain
Der folgende Block enthält 4 Tabs:

- **Domains**
- **Server**
- **Tasks**
- **Graphen**


![Domains Tab](images/10.PNG){.thumbnail}

In dem Tab **„Domains“** können Sie Ihre Domains und Subdomains zu Ihrem SSL Gateway hinzufügen.

- Klicken Sie auf `+ Domain`{.action}, um eine Domain oder Subdomain hinzuzufügen.
    - 

> [!faq]
>
> Sie haben ein SSL Gateway **„Free“**
>> 
>> Sie besitzen die Rechte für eine **Domain**, deren Subdomain beginnend mit www, sowie eine weitere Subdomain Ihrer Wahl:
>> 
>> 
>> 
>> > [!primary]
>> >
>> > |---|---|
>> > |---|---|
>> > |Domain|example.com|
>> > |Subdomain www|www.example.com|
>> > |Subdomain Ihrer Wahl|blog.example.com|
>> > 
>> 

>> 
>> > [!warning]
>> >
>> > - SSL Gateway Free:
>> > 
>> > Sie können nur Domains bis zur dritten Ebene (www.example.org) verwenden.
>> > 
>> 
>>         - Wählen Sie die Domain und klicken Sie zur Bestätigung auf `Hinzufügen`{.action}.

![Free Domain hinzufügen](images/11.PNG){.thumbnail}

> [!faq]
>
> Sie haben ein SSL Gateway **„Advanced“**
>> 
>> Sie können jegliche Domains und Subdomains Ihrer Wahl verwenden.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > - Advanced Angebot
>> > 
>> > Sie können auch Fourth-Level-Domains (blog.germany.example.org) oder Domains einer tieferen Ebene verwenden.
>> > 
>> 
>>         - Wählen Sie die Domain und klicken Sie zur Bestätigung auf `Hinzufügen`{.action}.

![Advanced Domain hinzufügen](images/12.PNG){.thumbnail}

> [!warning]
>
> Wenn Sie eine Domain oder Subdomain hinzufügen, erhalten Sie automatisch eine E-Mail mit dem Hinweis, die jeweilige Domain innerhalb von 3 Tagen auf die IP des SSL Gateways verweisen zu lassen.
> Das ist notwendig, um die Erstellung des SSL/TLS-Zertifikats zu bestätigen.
> 

In dem Tab **„Server“** können Sie die IP-Adresse(n) des bzw. der Server verwalten, auf denen Ihre Website gehostet wird.

- Klicken Sie auf `+ Server`{.action}, um eine IP-Adresse und den entsprechenden Port zu dem Server hinzuzufügen, auf dem sich Ihre Website befindet.

![Tab Server](images/13.PNG){.thumbnail}

> [!faq]
>
> Sie haben ein SSL Gateway **„Free“**
>> 
>> Sie können nur eine IP/PORT-Adresse verwenden.
>> 
>> 
>

> [!faq]
>
> Sie haben ein SSL Gateway **„Advanced“**
>> 
>> Sie können bis zu 3 IP/Port-Adressen für Ihre Domains bzw. Subdomains hinzufügen.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > Wenn Sie mehrere IP/PORT-Adressen angeben, verteilt Ihr SSL Gateway den Traffic automatisch nach dem Round Robin System.
>> > Weitere Informationen zu Round Robin DNS
>> > 
>> 
>>         - Wählen Sie die Domain und klicken Sie zur Bestätigung auf `Hinzufügen`{.action}.

![Advanced IP/PORT hinzufügen (intern)](images/15.PNG){.thumbnail}

>

> [!warning]
>
> Es ist momentan noch nicht möglich, IPv6-Adressen auf Ihren Servern hinzuzufügen.
> Das ist allerdings kein Problem, da Ihre Domain bzw. Subdomain über IPv6 auf Ihr SSL Gateway verweisen kann.
> Ihr SSL Gateway konvertiert dann den IPv6-Traffic und leitet ihn völlig transparent zur IPv4-Adresse Ihres Servers.
> 

In dem Tab **„Tasks“** können Sie die laufenden Operationen auf Ihrem SSL Gateway einsehen.

![Tab Tasks](images/13-bis.PNG){.thumbnail}

> [!warning]
>
> Wenn wir nicht feststellen konnten, dass Ihre Domain bzw. Subdomain auf die SSL Gateway IP verweist, wurde auch das SSL/TSL-Zertifikat noch nicht erstellt.
> Ihre Website ist allerdings trotzdem über „HTTP“ verfügbar. In dem Fall wird eine Grafik mit „HTTP“ in der Spalte „Status“ angezeigt.
> 
> ![HTTP only](images/14.PNG){.thumbnail}
>
In dem Tab **„Graphen“** werden die Verbindungen und Anfragen auf Ihr SSL Gateway pro Minute grafisch dargestellt.

![Tab Graphen](images/17.PNG){.thumbnail}

- 

> [!faq]
>
> Sie haben ein SSL Gateway **„Free“**
>> 
>> Sie können sich die Metriken für 24 Stunden anzeigen lassen.
>> 
>> 
>
- 

> [!faq]
>
> Sie haben ein SSL Gateway **„Advanced“**
>> 
>> Sie können sich die Metriken für 1 Monat anzeigen lassen.
>> 
>> 
>

## Verlangerung des SSL-Zertifikats

### Wichtiger Hinweis

> [!primary]
>
> Um das Let‘s Encrypt-Zertifikat zu verlängern, muss die Domain bzw. Subdomain auf die IP des SSL Gateway Angebots zeigen.
> - Ist das nicht der Fall und wird es von unseren Bots 7 Tage vor Verlängerung des SSL/TLS-Zertifikats festgestellt, erhalten Sie eine Erinnerungs-E-Mail, nach der Sie 3 Tage Zeit haben, um das Problem zu beheben.
> - Ist das Problem nach 3 Tagen nicht behoben, wird das Zertifikat nicht automatisch verlängert und muss über folgenden Button manuell erstellt werden:
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
> 
>

## Tipps

### Die Quell-IP in den Logs korrigieren

#### Beschreibung
Wenn ein Kunde Ihre Website besucht, verbindet er sich über HTTPS mit dem SSL Gateway. Das SSL Gateway sendet die Anfrage weiter an Ihren Server, nachdem es diese zuvor entschlüsselt und Angriffe herausgefiltert hat. Alle Anfragen an Ihren Server kommen daher vom SSL Gateway.

Damit Sie dennoch die Adresse Ihres Besuchers nachverfolgen können, fügt das SSL Gateway automatisch die folgenden Standard HTTP-Header hinzu:

- X-Forwarded-For und X-Remote-Ip: - Adresse des Kunden, wie diese vom SSL Gateway gelesen wird.
- X-Forwarded-Port und X-Remote-Port: - Quell-Port des Kunden, wie dieser vom SSL Gateway gelesen wird.

Diese Felder können auch gefälscht werden. Daher kann den Angaben nur vertraut werden, wenn diese aus einer vertrauenswürdigen Quelle wie dem SSL Gateway stammen. Die Liste der vom SSL Gateway verwendeten Quell-IPs finden Sie wie folgt:

- Gehen Sie in Ihrem Kundencenter in den Bereich „Sunrise“.
- Gehen Sie dort zu Ihrem SSL Gateway.
- Die IPs stehen in dem Bereich „Ausgehende IPv4“

Zum Zeitpunkt der Erstellung dieser Anleitung lauten diese Adressen **10.108.0.0/19**, **10.108.32.0/19**, **10.108.64.0/19**, **10.108.192.0/19** und **10.108.128.0/19**. Es können noch weitere Adressen hinzukommen.

Wenn Ihr Server die Option zulässt, können Sie einstellen, dass er diese Information automatisch anstelle der IP des SSL Gateways verwendet.

#### Apache
- Erstellen Sie folgende Datei:
/etc/apache2/conf-available/remoteip.conf
- Fügen Sie folgende Zeilen ein:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```

Sie können jetzt die Variablen %h mit %a in den LogFormat Anweisungen der Apache-Konfiguration ersetzen.

- Wenn die Konfiguration fertig ist, müssen Sie diese nur noch mit folgenden Befehlen aktivieren:

```bash
# Enable the module then the configuration
a2enmod remoteip
a2enconf remoteip

# Restart Apache to recognise the module (reload is sufficient for configuration)
service apache2 restart
```

Weitere Informationen zu diesem Thema finden Sie in der [offiziellen Dokumentation von Apache](https://httpd.apache.org/docs/current/de/mod/mod_remoteip.html){.external}.

#### Nginx
- Öffnen Sie die Konfigurationsdatei der zu sichernden Seite. Sie finden diese in der Regel unter:
/etc/nginx/sites-enabled
- Fügen Sie im Abschnitt Server folgende Zeilen ein:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```

Weitere Informationen zu diesem Thema finden Sie in der [offiziellen Dokumentation von Nginx](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.