---
title: "DNS-Server eines Domainnamens individualisieren (Hosts)"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Server Ihres OVHcloud Domainnamens anpassen"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

**DNS-Server** hosten die DNS-Konfigurationen von Domainnamen: die *DNS-Zonen*.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Diese *DNS-Zonen* bestehen aus technischen Informationen: den *DNS-Einträgen*. Im Standardgebrauch ermöglichen *DNS-Einträge*:

- Die Anzeige Ihrer Website mit Ihrem Domainnamen über die IP-Adresse Ihres Hosting-Servers (DNS-Einträge vom Typ *A* und *AAAA*).
- Die Weiterleitung von E-Mails an die personalisierten E-Mail-Adressen Ihres Domainnamens (DNS-Einträge vom Typ *MX*).
- Die Konfiguration von Sicherheits-/Authentifizierungsinformationen für Ihre Dienste (Webhosting, E-Mail-Server usw.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge wie *SPF*, *DKIM*, *DMARC* usw.).

Weitere Informationen zu diesen Themen finden Sie in den folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Je nach Ihren Anforderungen können Sie die DNS-Server Ihres OVHcloud Domainnamens mithilfe von "**Hosts**" individualisieren.

**Erfahren Sie hier, wie Sie die DNS-Server Ihres OVHcloud Domainnamens individualisieren.**

## Voraussetzungen

- Ein bei OVHcloud registrierter [Domainname](/links/web/domains).

<!-- CP-NAV-START:web-domains -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Domainnamen](/links/control-panel/web-domains)
- **Navigationspfad:** `Web Cloud`{.action} > `Domainnamen`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-domains -->

## In der praktischen Anwendung

> [!warning]
>
> **Die Individualisierung der DNS-Server eines Domainnamens ist ein sensibler Vorgang**: Eine fehlerhafte Änderung kann den Zugang zu Ihrer Website verhindern und/oder den Empfang neuer E-Mails an Ihren E-Mail-Adressen unterbrechen.
> Befolgen Sie die nachstehenden Schritte sorgfältig oder kontaktieren Sie einen [spezialisierten Dienstleister](/links/partner), wenn Sie Zweifel haben.
>

### 1 - Allgemeine Regel <a name="step1"></a>

Einige Registries, wie **Verisign** (das unter anderem die Endungen *.com* und *.net* sowie weitere TLDs verwaltet), verwenden ein technisches Modell namens **Host Objects**.

In bestimmten Fällen erfordert dieses Modell, dass vorab ein spezieller Eintrag für einen DNS-Server erstellt wird, bevor dieser von **einem Domainnamen verwendet werden kann**.

Andere Registries benötigen diesen Eintrag nicht und akzeptieren den DNS-Servernamen direkt.

Im Allgemeinen erstellt OVHcloud die **Host Objects** automatisch, wenn sie einen bei OVHcloud verwalteten Domainnamen betreffen.

> [!warning]
>
> **Der Tab "Hosts" ist nur in einem speziellen Fall erforderlich**: Der DNS-Server gehört zu einem bei OVHcloud verwalteten Domainnamen und soll von einem anderen Domainnamen verwendet werden, der nicht bei OVHcloud verwaltet wird, *aber demselben Registry unterliegt* (zum Beispiel zwei *.com*-Domainnamen).
>

#### Mögliche Fälle

| Domainname des DNS-Servers | Zu konfigurierender Domainname | Host-Erstellung durch OVHcloud | Manuelle Aktion im Menü "Hosts" erforderlich | Beispiel |
| ---------------------- | ------------------------ | -------------------------- | ------------------------------------------ | ------- |
| Bei OVHcloud verwaltet | Bei OVHcloud verwaltet | Automatisch | Nein | *ns1.example.com* (Domain *example.com* bei OVHcloud verwaltet) wird als DNS-Server für die Domain *test.com* (bei OVHcloud verwaltet) verwendet |
| Bei OVHcloud verwaltet | Bei OVHcloud verwaltet | Automatisch | Nein | *ns1.example.com* (Domain *example.com* bei OVHcloud verwaltet) wird als DNS-Server für die Domain *test.fr* (bei OVHcloud verwaltet) verwendet |
| **Bei OVHcloud verwaltet** | **Anderer Registrar** | **Automatische Konfiguration nicht möglich** | **Ja** | ***ns1.example.com* (Domain *example.com* bei OVHcloud verwaltet) wird als DNS-Server für die Domain *test.com* (anderer Registrar, gleiche *.com*-Endung) verwendet** |
| Bei OVHcloud verwaltet | Anderer Registrar | N/A | Nein | *ns1.example.com* (Domain *example.com* bei OVHcloud verwaltet) wird als DNS-Server für die Domain *test.fr* (anderer Registrar) verwendet |
| Nicht bei OVHcloud verwaltet | Bei OVHcloud verwaltet | Nicht zutreffend | Nein | *ns1.example.net* (Domain bei einem anderen Registrar verwaltet) wird als DNS-Server für die Domain *test.com* (bei OVHcloud verwaltet) verwendet – der Host muss beim Registrar von *example.net* erstellt werden |

**Nur der dritte Fall in der Tabelle erfordert die manuelle Erstellung des Hosts im Tab "Hosts".**

### 2 - Abrufen der aktuell von Ihrem Domainnamen verwendeten DNS-Server <a name="step2"></a>

Sie können die aktuell von Ihrem Domainnamen verwendeten DNS-Server mit dem Online-DNS-Tool [Zonemaster](https://zonemaster.net/en) abrufen.

Gehen Sie dazu auf [https://zonemaster.net](https://zonemaster.net/en), geben Sie Ihren Domainnamen ohne *www* ein (Beispiel: *domain.tld*), und klicken Sie dann auf den Button `Options`{.action} direkt unter dem Eingabefeld für den Domainnamen.

Klicken Sie in den verfügbaren Optionen auf den Button `Fetch NS from parent zone`{.action}.

Ein Ergebnis wird angezeigt:

![glue-zonemaster](/pages/assets/screens/other/web-tools/zonemaster/nameservers.png){.thumbnail}

Notieren Sie die *DNS-Server* und bewahren Sie **alle** zugehörigen IPv4-Adressen (in der Form *X.X.X.X*, wobei *X* eine Zahl zwischen *0* und *255* ist) und IPv6-Adressen (andere IPs, die keine IPv4-Adressen sind) auf. Sie benötigen diese Informationen im weiteren Verlauf dieser Anleitung.

Im oben dargestellten Beispiel verwendet die Domain **domain.tld** derzeit die folgenden **DNS-Server**:

- **dnsX1.ovh.net** mit der IPv4-Adresse *203.0.113.0* und der IPv6-Adresse *2001:db8:1:1b00:203:0:113:0*.
- **dnsX2.ovh.net** mit der IPv4-Adresse *203.0.113.1* und der IPv6-Adresse *2001:db8:1:1b00:203:0:113:1*.

Weitere Informationen finden Sie in unserem Tutorial zum Tool [Zonemaster](/pages/web_cloud/domains/dns_zonemaster).

### 3 - Host-Einträge hinzufügen <a name="step3"></a>

> [!warning]
>
> Die Registries der Endungen *.eu*, *.it*, *.be* und *.de* betrachten Host-Einträge nicht als "Objekte", sondern als "Attribute".
>
> Überspringen Sie daher bei diesen Endungen **direkt [Schritt 4](#step4)** dieser Anleitung, ohne Schritt 3 auszuführen.
>

> [!success]
>
> Bevor Sie beginnen, beachten Sie:
>
> - Sie können benutzerdefinierte DNS-Server direkt auf dem Domainnamen erstellen, der sie verwenden wird. Beispielsweise können Sie die benutzerdefinierten DNS-Server *dns1.domain.tld* und *dns2.domain.tld* für den Domainnamen *domain.tld* erstellen.
>
> - Sie können auch benutzerdefinierte DNS-Server auf einem Domainnamen erstellen, um sie mit einem anderen Domainnamen zu verwenden. Beispielsweise können Sie die benutzerdefinierten DNS-Server *dns1.domain1.tld* und *dns2.domain1.tld* für den Domainnamen *domain2.tld* erstellen. Sie müssen dann die DNS-Server und deren zugehörige IPs für *domain2.tld* abrufen.
> Außerdem muss *domain1.tld* bei OVHcloud registriert sein, um die Hosts einzurichten.
>

<!-- CP-STEPS-START:add-host-records -->
Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf dem betreffenden Domainnamen auf den Tab `Hosts`{.action}.
>>
>> In der angezeigten Tabelle werden die aktuell bei OVHcloud konfigurierten Host-Einträge für Ihren Domainnamen aufgeführt, sofern vorhanden. Um einen neuen Eintrag hinzuzufügen, klicken Sie auf den Button `Hinzufügen`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Füllen Sie im angezeigten Fenster die angeforderten Informationen aus:
>>
>> |Information|Details|
>> |---|---|
>> |Hostname|Passen Sie den Hostnamen an, den Sie als benutzerdefinierten DNS-Server verwenden möchten.|
>> |Ziel-IP(s)|Geben Sie die IP-Adresse(n) (IPv4 und/oder IPv6) ein, mit der/denen der Hostname verknüpft werden soll. Dies ist/sind die IP-Adresse(n) des DNS-Servers, der aktuell von Ihrem Domainnamen verwendet wird. Wenn mehrere IP-Adressen eingegeben werden müssen, trennen Sie diese mit *Kommas*.|
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/hosts/add-another-glue-record-step-2.png){.thumbnail}
>>
>> In der Abbildung oben ist, basierend auf dem Beispiel aus [Schritt 2](#step2), der hier hinzuzufügende Host (für den Domainnamen *domain.tld*) **dns1.domain.tld**.
>>
>> Für diesen Host werden die IP-Adressen des *Ziel-DNS-Servers* angegeben: *203.0.113.0* (IPv4) und *2001:db8:1:1b00:203:0:113:0* (IPv6). Diese IPs entsprechen einem der beiden DNS-Server, die aktuell für *domain.tld* verwendet werden (**dnsX1.ovh.net**).
>>
>> Dieser Host wird hinzugefügt, damit **dns1.domain.tld** letztendlich den aktuell vom Domainnamen *domain.tld* verwendeten DNS-Servernamen **dnsX1.ovh.net** ersetzt.
>>
>> Wenn Sie die Informationen ausgefüllt haben, klicken Sie auf den Button `Hinzufügen`{.action}. Lesen Sie die angezeigten Informationen und klicken Sie dann auf `Bestätigen`{.action}. Wiederholen Sie diesen Vorgang so oft wie nötig, abhängig von der Anzahl der von Ihrem Domainnamen verwendeten DNS-Server.
>>
>> In unserem Beispiel müssen Sie den Vorgang wiederholen, um den Host **dns2.domain.tld** zu erstellen. Dieser wird anschließend den DNS-Server **dnsX2.ovh.net** ersetzen, der derzeit mit der IPv4-Adresse *203.0.113.1* und der IPv6-Adresse *2001:db8:1:1b00:203:0:113:1* verknüpft ist.
<!-- CP-STEPS-END:add-host-records -->

### 4 - DNS-Einträge vom Typ A und AAAA für die benutzerdefinierten DNS-Server erstellen <a name="step4"></a>

Sie müssen die DNS-Einträge vom Typ *A* und *AAAA* für die Hostnamen erstellen, die Sie im vorherigen Schritt definiert haben. Die Einträge *A* und *AAAA* müssen auf die Ziel-IP-Adresse verweisen, die dem zuvor erstellten Hostnamen entspricht.

Dies geschieht über das Interface des Anbieters, der die DNS-Konfiguration Ihres Domainnamens verwaltet. Es gibt zwei Möglichkeiten:

**Klicken Sie auf eine der 2 Optionen, um den Inhalt anzuzeigen.**

/// details | Ihr Domainname verwendet keine aktive DNS-Zone bei OVHcloud

Kontaktieren Sie den Anbieter, der die DNS-Zone verwaltet. Fahren Sie anschließend mit dem nächsten Schritt fort.

///

<!-- CP-STEPS-START:add-dns-records-ovh -->
/// details | Ihr Domainname verwendet eine aktive DNS-Zone bei OVHcloud

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus, den Sie für die Erstellung der Hosts in [Schritt 3](#step3) verwendet haben.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf `Eintrag hinzufügen`{.action}.
>>
> **Schritt 3**
>>
>> Wählen Sie den Eintragstyp *A* oder *AAAA* je nach dem Typ der zugehörigen IP, die Sie hinzufügen möchten.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-2.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Geben Sie die *Subdomain* und die *IPv4*-Adresse (A) oder *IPv6*-Adresse (AAAA) ein und fahren Sie fort, bis die Hinzufügung bestätigt wurde. Falls erforderlich, folgen Sie den Anweisungen in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:add-dns-records-ovh -->

> [!primary]
>
> In jedem Fall ist eine Propagationszeit von 4 bis 24 Stunden erforderlich, damit die Änderung der DNS-Zone im gesamten DNS-Netzwerk wirksam wird. Wir empfehlen, diesen Zeitraum abzuwarten, bevor Sie fortfahren.
>

Zurück zu unserem vorherigen Beispiel: Die hinzuzufügenden Host-Einträge (für den Domainnamen *domain.tld*) sind **dns1.domain.tld** und **dns2.domain.tld**. Ziel ist es, die aktuellen DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net** zu ersetzen.

Folglich werden die folgenden Einträge zur aktiven DNS-Zone des Domainnamens *domain.tld* hinzugefügt:

 - Ein DNS-Eintrag vom Typ *A* für die *Subdomain* **dns1.domain.tld** mit der IP *203.0.113.0* (IPv4 des DNS-Servers **dnsX1.ovh.net**).
 - Ein DNS-Eintrag vom Typ *AAAA* für die *Subdomain* **dns1.domain.tld** mit der IP *2001:db8:1:1b00:203:0:113:0* (IPv6 des DNS-Servers **dnsX1.ovh.net**).
 - Ein DNS-Eintrag vom Typ *A* für die *Subdomain* **dns2.domain.tld** mit der IP *203.0.113.1* (IPv4 des DNS-Servers **dnsX2.ovh.net**).
 - Ein DNS-Eintrag vom Typ *AAAA* für die *Subdomain* **dns2.domain.tld** mit der IP *2001:db8:1:1b00:203:0:113:1* (IPv6 des DNS-Servers **dnsX2.ovh.net**).

Warten Sie, bis die DNS-Propagation abgeschlossen ist.

### 5 - Ersetzen der NS-Einträge in der aktiven DNS-Zone Ihres Domainnamens

Damit die Individualisierung der DNS-Server im DNS-Netzwerk sichtbar wird (durch eine *Whois*-Abfrage, *dig ns* oder über einen DNS-Konfigurationsanalyzer), müssen Sie die *NS*-Einträge in der aktiven DNS-Zone Ihres Domainnamens ersetzen.

Dies geschieht über das Interface des Anbieters, der die DNS-Konfiguration Ihres Domainnamens verwaltet. Es gibt zwei Möglichkeiten:

**Klicken Sie auf eine der 2 Optionen, um den Inhalt anzuzeigen.**

/// details | Ihr Domainname verwendet keine aktive DNS-Zone bei OVHcloud

Kontaktieren Sie den Anbieter, der die DNS-Zone verwaltet, um die Änderung vorzunehmen.

///

<!-- CP-STEPS-START:update-ns-records-ovh -->
/// details | Ihr Domainname verwendet eine aktive DNS-Zone bei OVHcloud

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus, für den Sie die DNS-Server individualisiert haben.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf `Im Textmodus bearbeiten`{.action}.
>>
>> Ein Fenster mit Ihrer DNS-Zone im *Textmodus* wird angezeigt:
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Beachten Sie: Eine fehlerhafte Änderung im *Textmodus* Ihrer DNS-Zone kann den Zugang zu Ihrer Website verhindern und/oder den Empfang neuer E-Mails an Ihren E-Mail-Adressen unterbrechen.
>> > Kontaktieren Sie einen [spezialisierten Dienstleister](/links/partner), wenn Sie Zweifel haben.
>>
> **Schritt 3**
>>
>> Ersetzen Sie in diesem Fenster **nur in den Einträgen vom Typ *NS*** die DNS-Servernamen durch Ihre eigenen benutzerdefinierten DNS-Servernamen, und **erhöhen Sie dabei** den ersten numerischen Wert der *SOA*-Zeile um "1". Wenn Sie Ihre Änderungen vorgenommen haben, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.
>>
>> Die Änderung ist nicht sofort sichtbar. Warten Sie etwa zwanzig Minuten, damit Ihre Änderungen wirksam werden.

///
<!-- CP-STEPS-END:update-ns-records-ovh -->

> [!primary]
>
> Eine Propagationszeit von 4 bis 24 Stunden ist erforderlich, damit die in der DNS-Zone vorgenommenen Änderungen im gesamten DNS-Netzwerk wirksam werden.
>

Um diesen Schritt besser zu verstehen, nehmen wir unser Beispiel mit dem Domainnamen *domain.tld* und seiner DNS-Zone im "Textmodus", die in der obigen Abbildung sichtbar ist.

Folgende Elemente sind zu beobachten:

- Der erste numerische Wert der *SOA*-Zeile lautet: *2023071700*.
- Es gibt zwei *NS*-Einträge für den Domainnamen *domain.tld*.
- Die *NS*-Einträge verweisen weiterhin auf die beiden DNS-Server **dnsX1.ovh.net** und **dnsX2.ovh.net**.

Um die Individualisierung der DNS-Server für den Domainnamen *domain.tld* fortzusetzen, müssen Sie:

- Den ersten numerischen Wert der *SOA*-Zeile um "1" erhöhen: *202307170**1*** (wenn der erste numerische Wert *2023071704* ist, erhöhen Sie um "1" und erhalten: *202307170**5***).
- Das Ziel **dnsX1.ovh.net.** durch **dns1.domain.tld.** ersetzen, nur in der Zeile, die mit **IN NS** beginnt.
- Das Ziel **dnsX2.ovh.net.** durch **dns2.domain.tld.** ersetzen, nur in der Zeile, die mit **IN NS** beginnt.

Nach Durchführung der Änderungen ergibt sich in unserem Beispiel folgendes Ergebnis:

```bash
$TTL 3600
@	IN SOA dnsX1.ovh.net. tech.ovh.net. (2023071701 86400 3600 3600000 300)
                  IN NS     dns1.domain.tld.
                  IN NS     dns2.domain.tld.
```

Für den Domainnamen *domain.tld* werden die nach der DNS-Änderung und Propagation angezeigten DNS-Server dann **dns1.domain.tld.** und **dns2.domain.tld.** sein.

Falls erforderlich, folgen Sie den Anweisungen in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

> [!success]
>
> Wenn Sie Ihre DNS-Server direkt auf dem Domainnamen individualisiert haben, der sie verwendet, zeigt die DNS-Zone möglicherweise nicht den Domainnamen in den Zielen der *NS*-Einträge an, sondern nur die *Subdomain*.
>
> Anstatt beispielsweise die folgenden Einträge anzuzeigen:
>
> - domain.tld IN NS dns1.domain.tld.
> - domain.tld IN NS dns2.domain.tld.
>
> Die DNS-Zone kann die Einträge wie folgt anzeigen:
>
> - domain.tld IN NS dns1.
> - domain.tld IN NS dns2.
>
> Keine Sorge, das Ergebnis ist identisch und diese Konfiguration funktioniert einwandfrei. Dieses Verhalten wird dadurch verursacht, dass derselbe Domainname auf beiden Seiten des *NS*-Eintrags vorkommt.
>

### 6 - DNS-Server Ihres Domainnamens ändern

Sie müssen die DNS-Server Ihres Domainnamens ändern, indem Sie die alten DNS-Server durch die zuvor erstellten benutzerdefinierten DNS-Server ersetzen.

<!-- CP-STEPS-START:change-dns-servers -->
Klicken Sie dazu auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie *den Domainnamen aus, für den Sie die DNS-Server individualisieren möchten*.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Gehen Sie auf den Tab `DNS-Server`{.action} und klicken Sie auf `DNS-Server ändern`{.action}.
>>
>> ![Glue Registry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-dns-servers.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Ersetzen Sie Ihre aktuellen DNS-Server durch die Server, die Sie als benutzerdefinierte DNS-Server verwenden möchten.
>>
>> > [!warning]
>> >
>> > Wenn Ihre benutzerdefinierten DNS-Server mit den Endungen *.eu*, *.it*, *.be* oder *.de* erstellt wurden, **müssen** Sie die zugehörige IP-Adresse für jeden Ihrer benutzerdefinierten DNS-Server eingeben.
>> >
>> > Ohne diese Angabe werden die benutzerdefinierten DNS-Server nicht korrekt registriert und funktionieren nicht mit Ihrem Domainnamen.
>>
> **Schritt 4**
>>
>> Schließen Sie die Schritte ab und folgen Sie bei Bedarf den Anweisungen in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".
>>
>> > [!primary]
>> >
>> > Wenn Sie DNS-Server auf einem Domainnamen individualisiert haben, um sie mit einem anderen Domainnamen zu verwenden, der nicht bei OVHcloud registriert ist, kontaktieren Sie den Anbieter, bei dem Ihr anderer Domainname registriert ist, um die DNS-Server zu ändern.
<!-- CP-STEPS-END:change-dns-servers -->

> [!primary]
>
> Eine Propagationszeit von 24 bis 48 Stunden ist erforderlich, damit die Änderung der DNS-Server im gesamten DNS-Netzwerk wirksam wird.
>

In unserem Beispiel der Individualisierung der DNS-Server für den Domainnamen *domain.tld* ersetzen wir den DNS-Server **dnsX1.ovh.net** durch **dns1.domain.tld** und den DNS-Server **dnsX2.ovh.net** durch **dns2.domain.tld** und warten dann, bis die DNS-Propagation abgeschlossen ist.

## Weiterführende Informationen

[Allgemeine Informationen zu OVHcloud DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
