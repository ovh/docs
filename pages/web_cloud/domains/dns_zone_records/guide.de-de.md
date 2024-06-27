---
title: "Alle Informationen zu DNS-Einträgen"
excerpt: "Entdecken Sie die verschiedenen Arten von DNS-Einträgen, die in einer OVHcloud DNS-Zone verfügbar sind"
updated: 2024-06-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die Abkürzung **DNS** für **D**omain **N**ame **S**ystem ist eine Sammlung von Elementen (DNS-Server, DNS-Zonen usw.), mit denen ein Domainname einer IP-Adresse zugeordnet werden kann.

Wir empfehlen Ihnen, unsere Anleitungen "[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)" und "[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)" in dieser Reihenfolge zu lesen.

Die DNS-Zone einer Domain ist deren Konfigurationsdatei. Sie besteht aus technischen Informationen, die als *DNS Einträge* bezeichnet werden.

In dieser Anleitung erfahren Sie, welche Arten von DNS-Einträgen in einer von OVHcloud verwalteten DNS-Zone verfügbar sind. Sie ergänzt die folgenden Seiten:

- [OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)
- [Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
- [Den Verlauf einer OVHcloud DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)
- [OVHcloud DNS-Zone löschen](/pages/web_cloud/domains/dns_zone_deletion)

**Entdecken Sie die verschiedenen Arten von DNS-Einträgen, die in einer OVHcloud DNS-Zone verfügbar sind.**

## In der praktischen Anwendung

### DNS-Einträge

**Die [Bearbeitung einer DNS Zone](/pages/web_cloud/domains/dns_zone_edit) ist ein kritischer Vorgang**: Fehlerhafte Änderungen können bewirken, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine Nachrichten mehr empfangen können.

In der folgenden Liste sind die Ziele und Besonderheiten der einzelnen Einträge aufgeführt. So erhalten Sie ein besseres Verständnis für Ihre DNS-Einstellungen.

#### Verweiseinträge <a name="pointer-records"></a>

Wählen Sie den gewünschten Eintrag in den Tabs aus:

> [!tabs]
> **A**
>> **A**ddress <br><br>
>> Verknüpft einen Domainnamen mit einer `X.X.X.X`-IPv4-Adresse (wobei `X` für eine Zahl zwischen `0` und `255` steht). Die IPv4-Adresse des Servers, auf dem Ihre Website gehostet wird.
>>
> **AAAA**
>> Vier **A**-Zeichen, da dieser Eintrag auf viermal mehr Bits als das historische **A** Feld kodiert ist <br><br> 
>> Verbindet einen Domainnamen mit einer IPv6-Adresse. Zum Beispiel die IPv6-Adresse des Servers, auf dem Ihre Website gehostet ist.
>>
>> > [!primary]
>> > IPv6-Adressen werden vermehrt genutzt, um den Mangel an IPv4-Adressen aufgrund der zunehmenden Nutzung zu beheben. Die 128-Bit-Kodierung von IPv6-Adressen ermöglicht die Bereitstellung einer größeren Anzahl an IP-Adressen.
>> >
>> > Wenn Ihr Server jedoch bereits über eine IPv4 verfügt, empfehlen wir, diese bevorzugt zu verwenden.<br>
>> > IPv6 wird noch nicht im gesamten Internet korrekt interpretiert, was zu Anzeige- oder Zugriffsstörungen führen kann.
>>
> **CNAME**
>> **C**anonical **NAME** <br><br> 
>> Verwendet die IP-Adresse einer anderen Domain, indem ein Link erstellt wird, der als Alias bezeichnet wird. Ist zum Beispiel *www.domain.tld* ein Alias von *domain.tld*, so bedeutet dies, dass *www.domain.tld* die IP-Adresse von *domain.tld* verwendet.
>>
>> > [!alert]
>> >
>> > Ein TXT-Eintrag, der die gleiche Domain oder Subdomain wie ein CNAME-Eintrag verwendet, beeinträchtigt deren Funktion. Ihr CNAME-Eintrag wird dann nur teilweise oder gar nicht funktionieren.
>>
>> > [!warning]
>> >
>> > CNAME Einträge können nicht direkt von einer Domain in ihrer eigenen DNS-Zone verwendet werden. Die Domain allein muss nämlich zwingend und direkt auf eine IP-Adresse mit einem Feld vom Typ A verweisen (oder AAAA, wenn es sich um IPv6 handelt).
>> >
>> > Um das oben genutzte Beispiel zu verwenden: Sie können keinen CNAME Eintrag für *domain.tld* in deren eigener DNS-Zone erstellen.
>> > Sie können jedoch CNAME-Einträge für alle Subdomains von *domain.tld* (Beispiele: *subdomain.domain.tld* oder *www.domain.tld*) in der für *domain.tld* angelegten DNS-Zone erstellen.
>> >
>> > Wenn Sie diesen Anwendungsfall vertiefen möchten, finden Sie am Ende dieser Seite [ein konkretes Beispiel für die Verwendung von CNAME und DNS-Zonen für Subdomains](#cnameusecase).
>>
> **DNAME**
>> **D**elegation **NAME** <br><br>
>> Hier können Sie einen "Alias" für alle Subdomains einer Domain erstellen. Mit diesem Eintrag wird vermieden, eine Vielzahl von CNAME-Einträgen erstellen zu müssen. Ein CNAME-Eintrag leitet nur eine Subdomain auf ein einziges Ziel um.
>>
>> Beispiel: Durch die Erstellung eines DNAME-Eintrags von *domain.tld* zu *ovh.com* werden alle Subdomains von *domain.tld* (wie *dname.domain.tld* und *xxx.domain.tld*) auf Subdomains von *ovh.com* umgeleitet (wie *dname.ovh.com* und *xxx.ovh.com*).
>>
>> Der DNAME-Eintrag bewirkt also, dass *dname.domain.tld* und *xxx.domain.tld* das Ziel von *dname.ovh.com* bzw. *xxx.ovh.com* anzeigen.
>>
>> > [!warning]
>> > 
>> > Dagegen wird *domain.tld* nicht das Ziel der Domain *ovh.com* anzeigen, da der DNAME-Eintrag nur für die Subdomains gilt, die im DNAME-Eintrag definiert sind.
>> >
>> > Wenn beispielsweise die Ziel-Subdomain *xxx.ovh.com* kein Ziel hat, wird der DNAME-Eintrag auch für *xxx.domain.tld* nichts anzeigen.
>>
>> > [!success]
>> > 
>> > Der DNAME-Eintrag wird etwa für Änderungen von Unternehmensbezeichnungen verwendet. Er kann auch verwendet werden, wenn ein Benutzer über mehrere Domainendungen (.de, .net, .com, .info, etc.) verfügt, um diese einfach weiterzuleiten.
>> >
> **NS**
>> **N**ame **S**erver<br><br>
>> Legt die zu Ihrer DNS-Zone gehörenden DNS-Server fest. Wenn zum Beispiel die NS-Einträge Ihrer DNS-Zone die Server *dnsXX.ovh.net* und *nsXX.ovh.net* anzeigen, müssen Sie diese im Tab `DNS-Server`{.action} Ihres Kundencenters verwenden. Weitere Informationen finden Sie in unserer Anleitung zu [DNS-Servern](/pages/web_cloud/domains/dns_server_edit).
>>
>> > [!warning]
>> >
>> > Wenn Sie [eine OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit), nutzen Sie nicht die Funktion `Im Textmodus bearbeiten`{.action}, um die DNS-Einträge Ihrer DNS-Zone für externe DNS-Server zu ändern. Diese DNS-Zone funktioniert **nur** mit OVHcloud DNS-Servern.
>>

#### E-Mail Einträge <a name="mail-records"></a>

Wählen Sie den gewünschten Eintrag in den Tabs aus:

> [!tabs]
> **MX**
>> **M**ail e**X**changer <br><br>
>> Verbindet einen Domainnamen mit einem E-Mail-Server. Die Adresse *10 mx1.mail.ovh.net* entspricht beispielsweise einem der OVHcloud E-Mail-Server, wenn Sie ein OVHcloud E-Mail-Angebot haben. Ihr E-Mail-Anbieter verfügt wahrscheinlich über mehrere E-Mail-Server. Es müssen daher mehrere MX-Einträge erstellt werden. Lesen Sie dazu die Anleitung zum [Hinzufügen eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).
>>
>> > [!warning]
>> >
>> > Generell wird empfohlen, nur Mail-Server desselben E-Mail-Anbieters in Ihrer DNS-Zone zu verwenden.
>> > Wenn Sie bereits über E-Mail-Dienste bei einem E-Mail-Anbieter verfügen und gleichzeitig die E-Mail-Server Ihres neuen E-Mail-Anbieters hinzufügen, besteht die Gefahr, dass Ihre E-Mails nur bei einem der beiden Anbieter empfangen werden.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Damit kann potenzieller Identitätsmissbrauch bei E-Mail-Adressen, die Ihre Domain verwenden (Spoofing), vermieden werden. Zum Beispiel legt der Eintrag `v=spf1 include:mx.ovh.com ~all` fest, dass nur die zu Ihrem OVHCloud E-Mail-Dienst gehörenden Server vom Empfangsserver als legitim angesehen werden können. Sie können den Eintrag entweder als TXT-Eintrag oder über unser automatisches Konfigurationssystem eingeben.
>>
>> Weitere Informationen finden Sie in der Anleitung zum "[SPF-Eintrag](/pages/web_cloud/domains/dns_zone_spf)".
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail <br><br>
>> Ermöglicht die Überprüfung der Authentizität der Domain des Absenders und die Sicherstellung der Integrität der gesendeten E-Mail. Der DKIM-Eintrag ist ein aus mehreren Zeichen bestehender Schlüssel. Der DKIM-Schlüssel wird von Ihrem E-Mail-Anbieter bereitgestellt (falls diese Funktion angeboten wird). Sie können ihn in einem TXT-Eintrag eingeben.
>>
>> Weitere Informationen finden Sie in unserer Dokumentation "[E-Mail-Sicherheit durch DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)".
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance <br><br>
>> Unterstützt die Authentifizierung von E-Mails in Verbindung mit SPF- und/oder DKIM-Methoden. Dieser Wert wird Ihnen von Ihrem E-Mail-Anbieter mitgeteilt (falls diese Funktion angeboten wird) und wird mindestens mit einem SPF- oder DKIM-Eintrag verbunden.
>>
>> Weitere Informationen finden Sie in unserer Dokumentation "[DMARC-Eintrag für Ihre Domain konfigurieren](/pages/web_cloud/domains/dns_zone_dmarc)".

#### Erweiterte Einträge <a name="extended-records"></a>

Wählen Sie den gewünschten Eintrag in den Tabs aus:

> [!tabs]
> **TXT**
>> **T**e**XT** <br><br>
>> Hier können Sie den Wert Ihrer Wahl im Textformat zur DNS-Zone Ihrer Domain hinzufügen. Dieser Eintragstyp wird häufig für Verifizierungsprozesse oder Sicherheitsüberprüfungen verwendet.
>>
>> > [!warning]
>> >
>> > Der TXT-Eintrag ist auf 255 Zeichen begrenzt. In manchen Fällen können Sie Ihren Wert jedoch in mehrere Einträge aufteilen. Fragen Sie bei Ihrem Dienstleister nach, wenn dieser Sie auffordert, einen Wert anzugeben, der 255 Zeichen übersteigt.
>> > 
>> > Diese Einschränkung besteht jedoch nicht, wenn Sie die Funktion `Im Textmodus bearbeiten`{.action} verwenden, siehe unsere Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)" (für fortgeschrittene Benutzer).
>>
> **SRV**
>> **S**e**RV**ice resource <br><br>
>> Der SRV-Eintrag enthält Informationen zur Adresse eines Servers, der einen Dienst bereitstellt. So kann er beispielsweise die Adresse eines SIP Servers oder eines Servers angeben, der die automatische Konfiguration eines E-Mail-Programms ermöglicht.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization <br><br>
>> Der CAA-Eintrag wird dazu verwendet, die Zertifizierungsstellen aufzulisten, die SSL-Zertifikate für eine Domain ausstellen dürfen.
>>
>> > [!warning]
>> >
>> > Wenn Sie einen CAA-Eintrag für eine Domain konfigurieren, gilt diese Konfiguration auch für **alle Subdomains** dieser Domain.
>> >
>> > Wenn Sie ein Let's Encrypt SSL-Zertifikat für Ihre Domain auf einem Webhosting von OVHcloud einsetzen und einen CAA-Eintrag verwenden, verhindert dieser die Regenerierung des Let's Encrypt SSL-Zertifikats.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R** <br><br>
>> In der Telekommunikation verwendet, um eine von einem mobilen Endgerät ausgehende Anfrage auf einen Server zu leiten. Es kann ein SRV-Eintrag zugeordnet werden, um dynamisch Ziel-URIs (Uniform Resource Identifier) zu generieren.
>>
> **LOC**
>> **LOC**ation <br><br>
>> Zur Angabe der Ortsdaten verwendet (insbesondere Breiten-, Längen- und Höhenangaben).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint <br><br>
>> Verwendet, um den Fingerprint eines öffentlichen SSH-Schlüssels einzugeben.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification <br><br>
>> Verwendet, um den Fingerprint eines SSL/TLS-Zertifikats einzugeben.

#### Anwendungsbeispiel: Verwendung von CNAME-Einträgen <a name="cnameusecase"></a>

Manche Benutzer erstellen DNS-Zonen für die Subdomain einer Domain (Beispiel: *subdomain-mit-eigener-zone.domain.tld*). In diesem Fall gilt auch die im Tab "CNAME" unter "[Verweiseinträge](#pointer-records)" angegebene Regel.

Da die DNS-Zone für die Subdomain erstellt wurde (hier: *subdomain-mit-eigener-zone.domain.tld*), wird diese als *Fully Qualified Domain Name* in ihrer DNS-Zone betrachtet.

Aus diesem Grund können Sie in diesem speziellen Fall keinen CNAME-Eintrag für *subdomain-mit-eigener-zone.domain.tld* in deren DNS-Zone erstellen. Sie können jedoch CNAME-Einträge wie *subdomain.subdomain-mit-eigener-zone.domain.tld* oder *xxx.subdomain-mit-eigener-zone.domain.tld* erstellen.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Einen SPF-Eintrag hinzufügen](/pages/web_cloud/domains/dns_zone_spf)

[DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
