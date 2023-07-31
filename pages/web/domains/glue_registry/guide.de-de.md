---
title: "DNS-Server von Domainnamen individualisieren (Glue Records)"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Server Ihres OVHcloud Domainnamens anpassen"
updated: 2023-07-27
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**DNS-Server** hosten die DNS-Konfigurationen von Domainnamen: die *DNS-Zonen*. 

DNS-Zonen bestehen aus technischen Informationen: DNS-Einträgen. DNS-Einträge sind unter anderem für folgende Funktionen zuständig:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Hostings muss in der Zone eingetragen sein, damit Ihre Webseite angezeigt wird, wenn der Domainnamenname in einen Browser eingegeben wird.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), die E-Mails erhalten sollen, die an Adressen mit diesem Domainnamen versendet wurden. Wenn Sie die MX-Einträge Ihres Domainnamens konfigurieren, können Sie E-Mails über Ihre personalisierten E-Mail-Adressen empfangen.
- Informationen zur Sicherheit/Authentifizierung von Diensten (Webhosting, Webserver, E-Mail-Server, etc.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC*, etc.).

Weitere Informationen zu diesen Themen finden Sie in unserer [Dokumentation zu den OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information) und der [Bearbeitung einer OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit).

Je nach Ihren Bedürfnissen können Sie die DNS-Server Ihres OVHcloud Domainnamens mithilfe von *Glue Records* anpassen.

**Diese Anleitung erklärt, wie Sie die DNS-Server von OVHcloud Domainnamen individualisieren.**

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den erforderlichen Berechtigungen zum Verwalten des Domainnamens (Domainadministrator).

## In der praktischen Anwendung

> [!warning]
>
> **Die DNS-Server eines Domainnamens zu personalisieren ist ein sensibler Vorgang**: Eine falsche Änderung kann dazu führen, dass der Zugang zu Ihrer Website verhindert und/oder der Empfang von Nachrichten an Ihre E-Mail-Adressen unterbrochen wird. 
> Folgen Sie genau den nachstehenden Anweisungen oder wenden Sie sich im Zweifelsfall an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).
>

### Schritt 1: Abrufen der DNS-Server, die derzeit vom Domainnamen verwendet werden <a name="step1"></a>

Sie können die derzeit von Ihrem Domainnamen verwendeten DNS-Server mit dem DNS-Tool [Zonemaster](https://zonemaster.fr/en/run-test){.external} abrufen.

Gehen Sie hierzu auf [https://zonemaster.fr](https://zonemaster.fr/en/run-test){.external}, geben Sie Ihren Domainnamen ohne *www* (*domain.tld*) ein und klicken Sie dann auf den Button `Options`{.action} unter dem Eingabeformular für den Domainnamen.

Klicken Sie in den Optionen auf `Fetch NS from parent zone`{.action}.

Es wird ein Ergebnis angezeigt:

![glue-zoneMaster](images/glue-dns-zoneMaster.png){.thumbnail}

Notieren Sie die Namen der DNS-Server sowie **alle** IPv4-Adressen (in Form von *X.X.X.X*, wobei *X* zwischen *0* und *255* liegt) und IPv6 (weitere mögliche IP-Adressen, die keine IPv4-Adressen sind). Sie benötigen diese Daten für die weiteren Schritte dieser Anleitung.

Im oben abgebildeten Beispiel verwendet **domain.tld** derzeit die folgenden **DNS-Server**:

- **dnsX1.ovh.net** mit IPv4 *111.222.333.443* und IPv6 *0000:00d0:1:0000::1*
- **dnsX2.ovh.net** mit IPv4 *111.222.333.444* und IPv6 *0000:00d0:1:0000::2*

Weitere Informationen finden Sie in unserem Tutorial zum Tool [Zonemaster](/pages/web/domains/dns_zonemaster).

### Schritt 2: *Glue Records* hinzufügen <a name="step2"></a>

> [!success]
>
> Bevor Sie beginnen, beachten Sie:
>
> - Sie können personalisierte DNS-Server direkt auf dem Domainnamen erstellen, die diese verwendet. Beispielsweise können Sie die benutzerdefinierten DNS-Adressen *dns1.domain.tld* und *dns2.domain.tld* für den Domainnamen *domain.tld* erstellen.
>
> - Sie können auch benutzerdefinierte DNS-Server für einen Domainnamen erstellen, um diese mit einem anderen Domainnamen zu verwenden. Sie können beispielsweise die Nameserver *dns1.domain1.tld* und *dns2.domain1.tld* für den Domainnamen *domain2.tld* eintragen. Sie müssen dann die DNS-Servernamen und deren zugehörige IPs von *domain2.tld* abrufen.
> Darüber hinaus muss *domain1.tld* bei OVHcloud registriert sein, um *Glue*-Einträge zu verwenden.
>


Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, den Sie anpassen möchten.

Klicken Sie auf der neuen Seite auf den Tab `GLUE`{.action}.

In der Tabelle werden die bei OVHcloud für den Domainnamen konfigurierten *Glue*-Einträge angezeigt. Um einen neuen *Glue*-Eintrag hinzuzufügen, klicken Sie auf `Hinzufügen`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

Geben Sie im angezeigten Fenster die angeforderten Informationen ein:

|Informationen|Details|  
|---|---|
|Hostname|Passen Sie den Hostnamen an, den Sie als benutzerdefinierten DNS-Server verwenden möchten.|
|Ziel-IP(s)|Geben Sie die IP-Adressen (IPv4 und/oder IPv6) ein, mit denen der Hostname verbunden werden soll. Hierbei handelt es sich um die IP-Adressen des DNS-Servers, der aktuell von Ihrem Domainnamen verwendet wird. Wenn mehrere IP-Adressen vorhanden sind, trennen Sie diese mit *einem Komma*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

In der Abbildung oben, die dem Beispiel aus [Schritt 1](#step1) entspricht, ist der hinzuzufügende *Glue*-Eintrag **dns1.domain.tld** (für *domain.tld*). 

Für diesen *Glue*-Eintrag werden als IP-Adressen des *Ziel-DNS-Servers* die IP-Adressen *111.222.333.443* (IPv4) und *0000:00d0:1:0000::1* (IPv6) angegeben. Diese IPs entsprechen einem der beiden DNS-Server, die derzeit für *domain.tld* (**dnsX1.ovh.net**) verwendet werden. 

Dieser *Glue*-Eintrag wird hinzugefügt, damit **dns1.domain.tld** den derzeit verwendeten DNS-Servernamen **dnsX1.ovh.net** durch den Domainnamen *domain.tld* ersetzen kann.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}, überprüfen Sie die angezeigten Informationen und klicken Sie dann auf `Bestätigen`{.action}. Wiederholen Sie diesen Vorgang so oft wie nötig, abhängig von der Anzahl der von Ihrem Domainnamen verwendeten DNS-Server.

In unserem Beispiel müssen Sie den Vorgang wiederholen, um die *Glue*-Einträge zu erstellen **dns2.domain.tld**. Dieser ersetzt später den DNS-Server **dnsX2.ovh.net**, der derzeit IPv4 *111.222.333.444* und IPv6 *0000:00d0:1:0000::2* zugewiesen ist.

### Schritt 3: DNS-Einträge vom Typ A und AAAA für benutzerdefiniertes DNS erstellen

Sie müssen die Einträge *A* und *AAAA* für die Hostnamen erstellen, die Sie im vorherigen Schritt definiert haben. Die Einträge *A* und *AAAA* müssen die Ziel-IP-Adressen enthalten, die dem zuvor erstellten Hostnamen entsprechen.

Gehen Sie hierzu in das Interface des Anbieters, der die DNS-Konfiguration Ihres Domainnamens verwaltet. Es gibt zwei Möglichkeiten:

- **Ihr Domainname verwendet keine aktive DNS-Zone bei OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Zone verwaltet. Gehen Sie anschließend zum nächsten Schritt über.
- **Ihr Domainname verwendet eine aktive DNS-Zone bei OVHcloud**: Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, mit dem Sie die *Glue*-Einträge im [Schritt 2](#step2) erstellt haben. Gehen Sie auf den Tab `DNS-Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action}. Wählen Sie den Eintragstyp *A* oder *AAAA* aus, je nachdem, welchen IP-Typ Sie hinzufügen möchten. Folgen Sie den Anweisungen, indem Sie die *Subdomain* und die *IPv4* (A) oder *IPv6* (AAAA) eingeben und bis zur Bestätigung fortfahren. Falls erforderlich, folgen Sie den Anweisungen in unserer Dokumentation "[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)".

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> In jedem Fall ist eine Propagationszeit von 4 bis 24 Stunden erforderlich, damit die Änderung der DNS-Zone im gesamten DNS-Netzwerk wirksam wird. Wir empfehlen Ihnen, vor dem Fortsetzen des Vorgangs bis zu diesem Zeitpunkt zu warten.
>

In unserem vorherigen Beispiel sind die *Glue*-Einträge, die Sie hinzufügen möchten (*domain.tld*), **dns1.domain.tld** und **dns2.domain.tld**. Ziel ist es, die aktuellen DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net** zu ersetzen.

Folgende Einträge werden also zur aktiven DNS-Zone des Domainnamens *domain.tld* hinzugefügt:

 - DNS-Eintrag vom Typ *A* für die *Subdomain* **dns1.domain.tld** zur IP *111.222.333.443* (IPv4 des DNS-Servers **dnsX1.ovh.net**)
 - DNS-Eintrag vom Typ *AAAA* für die *Subdomain* **dns1.domain.tld** zur IP *0000:00d0:1:0000::1* (IPv6 des DNS-Servers **dnsX1.ovh.net**)
 - DNS-Eintrag vom Typ *A* für die *Subdomain* **dns2.domain.tld** zur IP *111.222.333.444* (IPv4 des DNS-Servers **dnsX2.ovh.net**)
 - DNS-Eintrag vom Typ *AAAA* für die *Subdomain* **dns2.domain.tld** zur IP *0000:00d0:1:0000::2* (IPv6 des DNS-Servers **dnsX2.ovh.net**)

### Schritt 4: DNS-Server Ihres Domainnamens ändern

Sie müssen die DNS-Server Ihres Domainnamens ändern, indem Sie die alten DNS-Server mit den zuvor erstellten benutzerdefinierten DNS-Servern ersetzen.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie *den Domainnamn aus, für die Sie die DNS-Server anpassen möchten*.
 
Gehen Sie auf den Tab `DNS-Server`{.action} und klicken Sie dann auf `DNS-Server ändern`{.action}. Ersetzen Sie nun Ihre aktuellen DNS-Server durch die Server, die Sie als personalisierte DNS-Server verwenden möchten. 

Beenden Sie die Schritte und folgen Sie bei Bedarf den Anweisungen in unserer [Dokumentation zum Ändern der OVHcloud DNS-Server](/pages/web/domains/dns_server_general_information)".

> [!primary]
> 
> Wenn Sie DNS-Server für einen Domainnamen angepasst haben, um diese mit einem anderen, nicht bei OVHcloud registrierten Domainnamen zu verwenden, wenden Sie sich an den Anbieter, bei dem Ihr Domainname registriert ist.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> Es ist eine Propagationszeit von 24 bis 48 Stunden erforderlich, damit die Änderung der DNS-Server im gesamten DNS-Netzwerk wirksam wird. Wir empfehlen Ihnen, vor dem Fortsetzen des Vorgangs bis zu diesem Zeitpunkt zu warten.
>

In unserem Beispiel für die Anpassung der DNS-Server von *domain.tld* ersetzen wir den DNS-Server **dnsX1.ovh.net** mit **dns1.domain.tld** und den DNS-Server **dnsX2.ovh.net** mit **dns2.domain.tld** und warten dann ab, bis die DNS-Propagation abgeschlossen ist.

### Schritt 5: DNS-Einträge in der aktiven DNS-Zone ersetzen

Damit die Personalisierung der DNS-Server im DNS-Netzwerk übernommen wird (Ausführen von *Whois*, *dig ns* oder Überprüfung mit einem DNS-Tool), müssen die Einträge vom Typ *NS* in der aktiven DNS-Zone Ihrer Domainname ersetzt werden.

Gehen Sie hierzu in das Interface des Anbieters, der die Ihre DNS-Konfiguration verwaltet. Es zwei Möglichkeiten:

- **Ihr Domainname verwendet keine aktive DNS-Zone bei OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Zone verwaltet, um die Änderung vorzunehmen.
- **Ihr Domainname verwendet eine aktive DNS-Zone bei OVHcloud**: Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, für den Sie die DNS-Server angepasst haben. Gehen Sie auf den Tab `DNS-Zone`{.action} und klicken Sie auf `Im Textmodus bearbeiten`{.action}. 

Es erscheint ein Fenster mit Ihrer DNS Zone im Text-Modus:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Denken Sie daran, dass eine falsche Änderung im Text-Modus den Zugang zu Ihrer Website blockieren und/oder den Empfang neuer Nachrichten an Ihre E-Mail-Adressen verhindern kann. 
> Im Zweifelsfall wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).
>

Ersetzen Sie in diesem Fenster **nur in den Einträgen vom Typ *NS*** die DNS-Servernamen durch Ihre eigenen benutzerdefinierten DNS-Servernamen **und erhöhen Sie dabei den ersten numerischen Wert der Zeile "SOA" um 1**. Wenn Sie Ihre Änderungen vorgenommen haben, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

Die Änderung wird nicht sofort im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} sichtbar. Warten Sie etwa 20 Minuten und loggen Sie sich dann erneut in Ihrem OVHcloud Kundencenter ein, um zu sehen, ob Ihre Änderungen korrekt übernommen wurden.

> [!primary]
>
> Es ist eine Propagationszeit von 4 bis 24 Stunden erforderlich, damit die Änderungen in der DNS-Zone im gesamten DNS-Netzwerk berücksichtigt werden.
>

Um diesen letzten Schritt besser zu verstehen, folgen Sie unserem Beispiel mit *domain.tld* und der DNS-Zone im "Text"-Modus, wie in der Abbildung oben angezeigt.

Beachten Sie die folgenden Werte:

- Der erste numerische Wert in der Zeile *SOA* lautet: *2023071700*.
- Es gibt zwei Einträge vom Typ *NS* für den Domainnamen *domain.tld*.
- Die Einträge vom Typ *NS* sind weiterhin auf die beiden DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net** ausgerichtet.

Um die Personalisierung der DNS-Server für *domain.tld* abzuschließen, führen Sie die nachfolgenden Schritte aus:

- Erhöhen Sie den ersten numerischen Wert der Zeile *SOA* um 1: *202307170**1**. (Wenn der erste numerische Wert *2023071704* ist, erhalten Sie das folgende Ergebnis: *202307170**5***).
- Ersetzen Sie das Ziel **dnsX1.ovh.net.** durch **dns1.domain.tld.** nur für die Zeile, die mit **IN NS** beginnt.
- Ersetzen Sie das Ziel **dnsX2.ovh.net.** durch **dns2.domain.tld.** nur für die Zeile, die mit **IN NS** beginnt.

Nachdem Sie die Änderungen vorgenommen haben, erhalten Sie in unserem Beispiel folgendes Ergebnis:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Für *domain.tld* sind die DNS-Server, die nach der Übernahme der Änderung und DNS-Propagation angezeigt werden, nun **dns1.domain.tld.** und **dns2.domain.tld.**.

Falls erforderlich, folgen Sie den Anweisungen in unserer Dokumentation "[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)".

> [!success]
>
> Wenn DNS-Servernamen dem Domainnamen entsprechen, von dem sie verwendet werden, zeigt die DNS-Zone möglicherweise nicht den Domainnamen als Ziel der Einträge vom Typ *NS* an, sondern nur die *Subdomain*.
>
> Beispiel einer regulären Konfiguration:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> Die DNS-Zone kann die Einträge auch wie folgt zurückgeben:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Dieses Ergebnis entspricht derselben Konfiguration und ist funktional. Der Hintergrund ist, dass es sich um denselben Domainnamen auf beiden Seiten des *NS*-Eintrags handelt.
>

## Weiterführende Informationen

[Allgemeine Informationen zu den OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
