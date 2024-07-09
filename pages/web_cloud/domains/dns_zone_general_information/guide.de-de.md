---
Title: "Alle Informationen zu DNS-Zonen"
excerpt: "Erfahren Sie hier, welche Rolle eine DNS-Zone spielt und welche Einträge sie für einen Domainnamen enthält"
updated: 2024-06-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**D**omain **N**ame **S**ystem bezeichnet einen Satz von Elementen (DNS-Server, DNS-Zonen, etc.), mit denen ein Domainname IP-Adressen zugeordnet werden kann.

Es ist wichtig, zwischen den **DNS-Servern** und der **DNS-Zone** zu unterscheiden. Eine **DNS-Zone** wird auf Ebene des **DNS-Servers** konfiguriert.

Für ein besseres Verständnis empfehlen wir Ihnen vorab unsere Anleitung „[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)“.

Wenn Sie beispielsweise über einen Browser auf die Seite *domain.tld* zugreifen möchten, wird Ihre Anfrage zunächst von diesem DNS-Eintrag bearbeitet. Diese DNS-Konfiguration liefert dann als Antwort auf Ihren Webbrowser die IP-Adresse des Servers, auf dem die *domain.tld* Website gehostet wird.

Wenn Sie also *domain.tld* eingeben, werden die **DNS-Server** abgefragt, die diesem Domainnamen zugeordnet sind. Diese enthalten die **DNS Zone** des Domainnamens *domain.tld*, in der die IP-Adresse des Hostings von *domain.tld* angegeben ist. Ihr Browser kann dann die *domain.tld* Website mit den Inhalten des Webhostings anzeigen. Dies wird als DNS-Auflösung bezeichnet.

**Diese Anleitung erklärt, welche Rolle eine DNS-Zone spielt, was sie enthält und wie sie mit einem Domainnamen funktioniert.**

## In der praktischen Anwendung

### Rolle der DNS Zone

Die DNS-Zone einer Domain enthält eine für diese Domain geltende Konfiguration. Sie besteht aus technischen Informationen, die als DNS-Einträge bezeichnet werden.

Sie können beispielsweise Folgendes angeben:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website mit Ihrem Domainnamen anzuzeigen.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), auf die Ihre Domain die von ihr empfangenen E-Mails weiterleiten soll.
- Informationen zur Sicherheit / Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail-Server etc.), die mit Ihrem Domainnamen verbunden sind (DNS-Einträge vom Typ SPF, DKIM, DMARC etc.).

Eine DNS-Zone wird auf **DNS-Servern** gehostet. Die **DNS-Server** müssen (bei der zuständigen Domänenregistrierungsstelle) deklariert werden, um die von ihnen gehostete DNS-Zone zu verwenden.

Weitere Informationen finden Sie in unserer Dokumentation: [Funktionsweise eines DNS-Servers](/links/web/domains-dns-server).

### DNS-Einträge

Es gibt verschiedene Typen von DNS-Einträgen. Sie alle haben einen bestimmten Zweck in der DNS-Auflösung. Bei OVHcloud werden sie folgendermaßen unterteilt:

- Verweiseinträge (A, AAAA, CNAME, DNAME, NS)
- Mail-Einträge (MX, SPF, DKIM, DMARC)
- Erweiterte Einträge (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Weitere Informationen zu den verschiedenen Eintragstypen finden Sie in unserer Anleitung zu [DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records). Dort finden Sie Elemente, die Ihnen zum Beispiel ein besseres Verständnis der [Bearbeitung einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) ermöglichen.

### Beispiel für eine DNS-Zone

Nachstehend finden Sie ein Beispiel für eine bei OVHcloud gehostete DNS-Zone für die Domain *domain.tld*. Diese wird auf den DNS-Servern *dns200.anycast.me* und *ns200.anycast.me* von OVHcloud konfiguriert:

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

Im Vergleich dazu ist hier die Entsprechung im Textmodus:

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

In diesem Beispiel gibt die DNS-Zone unter anderem die folgenden Informationen an, wenn DNS-Abfragen bei ihr eingehen:

- Die für die Domain *domain.tld* deklarierten DNS-Server sind die DNS-Server *dns200.anycast.me* und *ns200.anycast.me*.
- Der Server muss die IP-Adresse 203.0.113.0 zurückgeben, wenn eine DNS-Abfrage an den Domainnamen *domain.tld* oder die Subdomain *www.domain.tld* durchgeführt wird. Unter der IP-Adresse 203.0.113.0 befindet sich zum Beispiel die Webseite *domain.tld*.
- Für E-Mails gibt die DNS Zone an, dass DNS-Anfragen für E-Mail-Adressen mit der Endung *@domain.tld* prioritär an den Server *mx1.mail.ovh.net* gesendet werden sollen. Wenn die Antwort zu lange dauert oder nicht verfügbar ist, wird die Anfrage an den Server *mx2.mail.ovh.net* weitergeleitet, bis der letzte gemeldete Server *mx3.mail.ovh.net* erreicht ist.
- SOA (**S**tart **O**f **A**uthority) in der OVHcloud DNS-Zone gibt an, dass das Datum der letzten Aktualisierung der DNS-Zone der 18.05.2024 ist und dass die Zeit für die Aktualisierung der DNS-Zone 3600 Sekunden beträgt. In DNS-Zonen, die nicht bei OVHcloud gehostet werden, können die SOAs weitere Elemente enthalten, wie die E-Mail-Adresse des Administrators der DNS-Zone. Aus Sicherheitsgründen hat OVHcloud beschlossen, diese Informationen nicht im SOA anzuzeigen.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[Den Verlauf einer OVHcloud DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)

[OVHcloud DNS-Zone löschen](/pages/web_cloud/domains/dns_zone_deletion)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
