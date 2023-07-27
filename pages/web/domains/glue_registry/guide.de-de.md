---
title: "DNS-Server einer Domain anpassen (Glue Records)"
excerpt: "Diese Anleitung erklärt, wie Sie die DNS-Server Ihrer OVHcloud Domain anpassen"
updated: 2023-07-27
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die **DNS Server** hosten die DNS-Konfigurationen der Domainnamen: die *DNS Zonen*. 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Diese *DNS* Zonen bestehen aus technischen Informationen: *DNS Einträgen*. Bei der herkömmlichen Verwendung ermöglichen die *DNS-Einträge*:

- Ihre Website mit Ihrem Domainnamen unter Verwendung der IP-Adresse Ihres Hosting-Servers anzuzeigen (DNS-Einträge der Typen *A* und *AAAA*).
- die an Ihre personalisierte(n) E-Mail-Adresse(n) mit Ihrem Domainnamen (DNS-Einträge vom Typ *MX*) empfangenen E-Mails weiterzuleiten.
- die mit Ihrer Domain verbundenen Sicherheits-/Authentifizierungsinformationen (Webhosting, E-Mail-Server etc.) zu konfigurieren (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

Weitere Informationen zu diesen Themen finden Sie in unserer Dokumentation zu den [OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information) und der [Bearbeitung einer OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit).

Je nach Ihren Bedürfnissen können Sie die DNS-Server Ihrer OVHcloud Domain mithilfe der „***Glue Records***“ anpassen.

**Diese Anleitung erklärt, wie Sie die DNS-Server Ihrer OVHcloud Domain anpassen.**

## Voraussetzungen

- Sie besitzen eine bei OVHcloud registrierte Domain.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt, Teil `Web Cloud`{.action}.

## In der praktischen Anwendung

> [!warning]
>
> **Die DNS-Server einer Domain zu personalisieren ist ein sensibler Vorgang**: Eine falsche Änderung kann dazu führen, dass der Zugriff auf Ihre Website unterbrochen und / oder der Empfang neuer Nachrichten an Ihre E-Mail-Adressen verhindert wird. 
> Bitte folgen Sie den nachstehenden Schritten oder wenden Sie sich im Zweifelsfall an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).
>

### Schritt 1: Rufen Sie die DNS-Server ab, die derzeit von Ihrer Domain verwendet werden <a name="step1"></a>

Sie können die derzeit von Ihrer Domain verwendeten DNS-Server mit dem Online-DNS-Tool [Zonemaster](https://zonemaster.fr/en/run-test){.external} abrufen.

Gehen Sie hierzu auf den Link [https://zonemaster.fr](https://zonemaster.fr/en/run-test){.external}, geben Sie Ihren Domainnamen ohne die *www* (Beispiel: *domain.tld*) ein und klicken Sie dann auf den Button `Options`{.action} direkt unter dem Eingabeformular für den Domainnamen.

Klicken Sie in den verfügbaren Optionen direkt auf `Fetch NS from parent zone`{.action}.

Es wird ein Ergebnis angezeigt:

![glue-zoneMaster](images/glue-dns-zoneMaster.png){.thumbnail}

Rufen Sie die *DNS Server* ab, und behalten Sie **alle** IPv4-Adressen (in Form von *X.X.X.X*, wobei *X* zwischen *0* und *255* liegt) und IPv6 (andere IPs als IPv4-Adressen) bei. Sie benötigen sie für die weitere Verwendung dieser Anleitung.

In unserem oben abgebildeten Beispiel verwendet die Domain **domain.tld** derzeit die folgenden **DNS-Server**:

- **dnsX1.ovh.net** mit IPv4 *111.222.333.443* und IPv6 *0000:00d0:1:0000::1*;
- **dnsX2.ovh.net** mit IPv4 *111.222.333.444* und IPv6 *0000:00d0:1:0000::2* verbunden.

Weitere Informationen finden Sie in unserer Anleitung zum Tool [Zonemaster](/pages/web/domains/dns_zonemaster)

### Schritt 2: GLUE-Datensätze hinzufügen a name="step2"></a>

> [!success]
>
> Bevor Sie beginnen, beachten Sie:
>
> - Sie können personalisierte DNS Server direkt auf der Domain erstellen, die diese verwendet. Beispielsweise können Sie die benutzerdefinierten DNS-Adressen *dns1.domain.tld* und *dns2.domain.tld* für den Domainnamen *domain.tld* erstellen.
>
> - Sie können auch benutzerdefinierte DNS-Server für eine Domain erstellen, um diese mit einem anderen Domainnamen zu verwenden. Sie können beispielsweise die benutzerdefinierten DNS-Adressen *dns1.domain1.tld* und *dns2.domain1.tld* für den Domainnamen *domain2.tld* erstellen. Sie müssen die DNS Server und deren zugehörige IPs in Bezug auf die *domain2.tld* überprüfen.
> Darüber hinaus muss die *domain1.tld* bei OVHcloud registriert sein, um die „GLUE“-Rekorde aufzustellen.
>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, den Sie zum Anpassen der DNS-Servernamen verwenden möchten. 

Klicken Sie auf der neuen Seite auf den Tab `GLUE`{.action}.

In einer Tabelle werden dann die aktuell bei OVHcloud für Ihre Domain konfigurierten GLUE-Einträge angezeigt (sofern vorhanden). Um einen neuen GLUE Eintrag hinzuzufügen, klicken Sie auf `Hinzufügen`{.action}.

![glueregistry](images/glue-add.png){.thumbnail}

Geben Sie im angezeigten Fenster die angeforderten Informationen ein:

|Informationen|Details|  
|---|---|
|Hostname|Passen Sie den Hostnamen an, den Sie als benutzerdefinierten DNS-Server verwenden möchten.|
|Ziel-IP(s)|Geben Sie die IP-Adressen (IPv4 und/oder IPv6) an, mit denen der Hostname verbunden werden soll. Hierbei handelt es sich um die IP-Adressen des DNS-Servers, der aktuell von Ihrem Domainnamen verwendet wird. Wenn mehrere IP-Adressen vorhanden sind, trennen Sie diese durch *ein Komma*.|

![glueregistry](images/glue-add-glue.png){.thumbnail}

In der Abbildung oben, die das Beispiel aus [Schritt 1](#step1) enthält, ist der „GLUE“, den Sie hier hinzufügen möchten (ab dem Domainnamen *domain.tld*), **dns1.domain.tld**. 

Für diese GLUE werden als IP-Adressen des *Ziel-DNS-Servers* die IP-Adressen *111.222.333.443* (IPv4) und *0000:00d0:1:0000::1* (IPv6) angegeben. Diese IPs entsprechen einem der beiden DNS-Server, die derzeit für *domain.tld* (**dnsX1.ovh.net**) verwendet werden. 

Diese „GLUE“ wird hinzugefügt, damit **dns1.domain.tld** den derzeit verwendeten DNS-Servernamen **dnsX1.ovh.net** durch den Domainnamen *domain.tld* ersetzen kann.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}, überprüfen Sie die angezeigten Informationen und klicken Sie dann auf `Bestätigen`{.action}. Wiederholen Sie diesen Vorgang so oft wie nötig, abhängig von der Anzahl der von Ihrer Domain verwendeten DNS-Server.

In unserem Beispiel müssen Sie den Vorgang wiederholen, um die GLUE zu erstellen **dns2.domain.tld**. Dieser ersetzt später den DNS Server **dnsX2.ovh.net**, der derzeit den IPv4 *111.222.333.444* und IPv6 *0000:00d0:1:0000::2* zugewiesen ist

### Schritt 3: DNS-Einträge vom Typ A und AAAA für benutzerdefinierte DNS erstellen

Sie müssen die Einträge *A* und *AAAA* für die Hostnamen erstellen, die Sie im vorherigen Schritt definiert haben. Die Einträge *A* und *AAAA* müssen die Ziel-IP-Adresse enthalten, die dem zuvor erstellten Hostnamen entspricht.

Gehen Sie hierzu in das Interface des Anbieters, der die DNS-Konfiguration Ihrer Domain verwaltet. Es gibt daher zwei Möglichkeiten:

- **Ihre Domain verwendet keine aktive DNS-Zone bei OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Zone verwaltet. Wenn Sie fertig sind, gehen Sie zum nächsten Schritt über.
- **Ihre Domain verwendet eine aktive DNS-Zone bei OVHcloud**: Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, mit dem Sie die „GLUEs“ im [Schritt 2](#step2) erstellt haben. Gehen Sie auf den Tab `DNS-Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action}. Wählen Sie den Eintrag vom Typ *A* oder *AAAA* aus, je nachdem, welchen Typ von zugehöriger IP Sie hinzufügen möchten. Folgen Sie den Anweisungen, indem Sie die *Subdomain* und die Adresse *IPv4* (A) oder *IPv6* (AAAA) eingeben und bis zur Bestätigung des Hinzufügens fortfahren. Falls erforderlich, folgen Sie den Anweisungen in unserer Dokumentation „[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)“.

![glueregistry](images/glue-dns-zone-add.png){.thumbnail}

> [!primary]
>
> In jedem Fall ist eine Propagationszeit von 4 bis 24 Stunden erforderlich, damit die Änderung der DNS-Zone im gesamten DNS-Netzwerk wirksam wird. Wir empfehlen Ihnen, vor dem Fortsetzen des Vorgangs bis zu diesem Zeitpunkt zu warten.
>

In unserem vorherigen Beispiel sind die GLUE-Einträge, die Sie hinzufügen möchten (ab der Domain *domain.tld*), **dns1.domain.tld** und **dns2.domain.tld**. Ziel ist es, die aktuellen DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net** zu ersetzen

Dadurch werden folgende Einträge zur aktiven DNS-Zone der Domain *domain.tld* hinzugefügt:

 - Ein DNS Eintrag vom Typ *A* für die *Subdomain* **dns1.domain.tld** zur IP *111.222.333.443* (IPv4 des DNS Servers **dnsX1.ovh.net**);
 - Ein DNS Eintrag vom Typ *AAAA* für die *Subdomain* **dns1.domain.tld** zur IP *0000:00d0:1:0000::1* (IPv6 des DNS Servers **dnsX1.ovh.net**);
 - Ein DNS Eintrag vom Typ *A* für die *Subdomain* **dns2.domain.tld** zur IP *111.222.333.444* (IPv4 des DNS Servers **dnsX2.ovh.net**);
 - Ein DNS Eintrag vom Typ *AAAA* für die *Subdomain* **dns2.domain.tld** zur IP .*0000:00d0:1:0000::2* (IPv6 des DNS Servers **dnsX2.ovh.net**).

Es wird gewartet, bis die DNS-Propagierung abgeschlossen ist.

### Schritt 4: DNS-Server Ihrer Domain ändern

Sie müssen die DNS-Server Ihrer Domain ändern, indem Sie die alten DNS-Server durch die zuvor erstellten benutzerdefinierten DNS-Server ersetzen.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie *die Domain aus, für die Sie die DNS-Server anpassen möchten*.
 
Gehen Sie auf den Tab `DNS-Server`{.action} und klicken Sie dann auf `DNS-Server ändern`{.action}. Ersetzen Sie nun Ihre aktuellen DNS-Server durch die Server, die Sie als personalisierte DNS-Server verwenden möchten. 

Beenden Sie die Schritte und folgen Sie bei Bedarf den Anweisungen in unserer Dokumentation „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web/domains/dns_server_general_information)“.

> [!primary]
> 
> Wenn Sie DNS-Server für eine Domain angepasst haben, um diese mit einem anderen, nicht bei OVHcloud registrierten Domainnamen zu verwenden, wenden Sie sich an den Anbieter, bei dem Ihre andere Domain registriert ist, um die DNS-Server zu ändern.
>

![glueregistry](images/glue-dns-servers-modify.png){.thumbnail}

> [!primary]
>
> Es ist eine Propagationszeit von 24 bis 48 Stunden erforderlich, damit die Änderung der DNS-Server im gesamten DNS-Netzwerk wirksam wird. Wir empfehlen Ihnen, vor dem Fortsetzen des Vorgangs bis zu diesem Zeitpunkt zu warten.
>

In unserem Beispiel für die Anpassung der DNS-Server der Domain *domain.tld* ersetzen wir den DNS-Server **dnsX1.ovh.net** durch **dns1.domain.tld** und den DNS-Server **dnsX2.ovh.net** durch **dns2.domain.tld** und warten dann ab, bis die DNS-Propagation abgeschlossen ist.

### Schritt 5: DNS-Einträge in der aktiven DNS-Zone Ihrer Domain ersetzen

Damit die Personalisierung der DNS-Server im DNS-Netzwerk sichtbar ist (durch Ausführen eines *Whois*, eines *dig ns* oder eines DNS-Konfigurationscanners), müssen die Einträge vom Typ *NS* in der aktiven DNS-Zone Ihrer Domain ersetzt werden.

Gehen Sie hierzu in das Interface des Anbieters, der die DNS-Konfiguration Ihrer Domain verwaltet. Daher gibt es zwei Möglichkeiten:

- **Ihre Domain verwendet keine aktive DNS-Zone bei OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Zone verwaltet, um die Änderung vorzunehmen.
- **Ihre Domain verwendet eine aktive DNS-Zone bei OVHcloud**: Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie dann den Domainnamen aus, für den Sie die DNS-Server angepasst haben. Gehen Sie auf den Tab `DNS-Zone`{.action} und klicken Sie dann auf `Im Textmodus bearbeiten`{.action}. 

Es erscheint ein Fenster mit Ihrer DNS Zone im *text* Modus:

![glueregistry](images/dns-text-format-edition.png){.thumbnail}

> [!warning]
>
> Denken Sie daran, dass eine falsche Änderung im *text* Modus in Ihrer DNS Zone den Zugang zu Ihrer Website blockieren und/oder den Empfang neuer Nachrichten an Ihre E-Mail-Adressen verhindern kann. 
> Im Zweifelsfall wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/).
>

Ersetzen Sie in diesem Fenster **nur in Datensätzen vom Typ *NS*** die DNS-Servernamen durch Ihre eigenen benutzerdefinierten DNS-Servernamen **und erhöhen Sie dabei den ersten numerischen Wert der Zeile *SOA* um 1. Wenn Sie Ihre Änderungen vorgenommen haben, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

Die Änderung wird nicht sofort im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} sichtbar. Warten Sie etwa 20 Minuten, und loggen Sie sich dann erneut in Ihrem OVHcloud Kundencenter ein, um zu sehen, ob Ihre Änderungen korrekt übernommen wurden.

> [!primary]
>
> Es ist eine Propagationszeit von 4 bis 24 Stunden erforderlich, damit die Änderungen in der DNS-Zone im gesamten DNS-Netzwerk berücksichtigt werden.
>

Um diesen letzten Schritt besser zu verstehen, folgen Sie unserem Beispiel mit der Domain *domain.tld* und ihrer DNS-Zone im „Text“-Modus, der in der Abbildung oben angezeigt wird.

Dabei werden folgende Elemente beobachtet: 

- Der erste numerische Wert in der Zeile *SOA* lautet: *2023071700*;
- Es gibt zwei Einträge vom Typ *NS* für den Domainnamen *domain.tld*;
- Die Einträge vom Typ *NS* sind weiterhin auf die beiden DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net** ausgerichtet.

Um die Personalisierung der DNS Server für die Domain *domain.tld* abzuschließen, benötigen Sie:

- Der erste numerische Wert in der Zeile *SOA*: *202307170**1*** wird um 1 inkrementiert (wenn der erste numerische Wert wie folgt lautet:*2023071704*, wird immer um 1 inkrementiert, und es wird folgendes Ergebnis erzielt: *202307170**5***);
- Ersetzen Sie das Ziel **dnsX1.ovh.net.** durch **dns1.domain.tld.** nur für die Zeile, die mit **IN NS** beginnt;
- Ersetzen Sie das Ziel **dnsX2.ovh.net.** durch **dns2.domain.tld.** nur für die Zeile, die mit **IN NS** beginnt.

Nachdem Sie die Änderungen vorgenommen haben, erhalten Sie in unserem Beispiel folgendes Ergebnis:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Für unseren Domainnamen *domain.tld* werden die DNS-Server, die nach Berücksichtigung der Änderung und Propagierung des DNS angezeigt werden, nun **dns1.domain.tld.** und **dns2.domain.tld.** lauten.

Falls erforderlich, folgen Sie den Anweisungen in unserer Dokumentation „[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)“.

> [!success]
>
> Wenn DNS-Server direkt an den Domainnamen angepasst werden, von dem sie verwendet werden, zeigt die DNS-Zone möglicherweise nicht den Domainnamen in den Zielen der Einträge vom Typ *NS* an, sondern nur die *Subdomain*.
>
> Anstatt z. B. die folgenden Datensätze anzuzeigen:
> 
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> Die DNS-Zone kann die Einträge wie folgt anzeigen:
>
> - domain.tld IN NS dns1
> - domain.tld IN NS dns2
>
> Seien Sie beruhigend, dies entspricht dem gleichen Ergebnis und diese Konfiguration wird perfekt funktionieren. Dieses Phänomen entsteht dadurch, dass es sich um denselben Domainnamen auf beiden Seiten des *NS* Eintrags handelt.
>

## Weiterführende Informationen

[Allgemeine Informationen zu den OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.