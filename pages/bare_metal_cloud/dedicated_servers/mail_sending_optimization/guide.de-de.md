---
title: Optimierung des E-Mail-Versands, damit Ihre E-Mails nicht als Spam markiert werden
excerpt: Erfahren Sie hier, wie Sie mit vorbeugenden Maßnahmen das Risiko minimieren, dass Ihre legitimen E-Mails durch Spam-Schutz blockiert werden
updated: 2024-01-24
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Allgemein sind Anti-Spam-Richtlinien strikt gehalten. Um den Versand von E-Mails zu beschleunigen ohne dass sie von Sicherheitsmaßnahmen blockiert werden, sind Einstellungen erforderlich, um Ihre Nachrichten und deren Inhalt auf den Empfängerservern zu authentifizieren.

**Diese Anleitung erklärt, wie Sie den Versand Ihrer E-Mails optimieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 

## Voraussetzungen

- Sie sind Administrator eines konfigurierten E-Mail-Servers.
- Sie können die DNS-Zone der Domains verwalten, die für den Versand verwendet werden.

> [!warning]
>
> Ziel dieser Anleitung ist es, Ihnen einige Hinweise zur Optimierung beim Versenden Ihrer E-Mails zu geben. Beachten Sie, dass jeder E-Mail-Dienst eigene Richtlinien und bewährte Verfahren hat, um sicherzustellen, dass seine Nutzer E-Mails empfangen. Wir empfehlen Ihnen dringend, diese zu konsultieren.
>

## In der praktischen Anwendung

### SPF-Eintrag konfigurieren <a name="spfrecord"></a>

Bei dedizierten Infrastrukturen (Dedicated Server, VPS, Public Cloud Instanz oder Hosted Private Cloud) hat der optimale SPF-Eintrag (Sender Policy Framework) folgende Form: `v=spf1 ip4:server_ipv4 ~all`. Denken Sie daran, "server_ipv4" durch die IPv4-Adresse Ihres Servers zu ersetzen.

> [!primary]
>
> Das Symbol vor *all* hat folgende Bedeutung:
>
> - `+`: Akzeptieren
> - `-`: Ablehnen
> - `~`: Fehler (*soft fail*)
> - `?`: Neutral
>

Sie können natürlich noch einen Schritt weiter gehen, indem Sie den SPF-Eintrag für einen bestimmten Domainnamen konfigurieren oder die IPv6-Adresse verwenden. Weitere Informationen zum SPF-Eintrag finden Sie in unserer [Anleitung zum Konfigurieren von SPF](/pages/web_cloud/domains/dns_zone_spf).

### DKIM-Eintrag konfigurieren

Mit dem DKIM-Eintrag (DomainKeys Identified Mail) können Sie E-Mails signieren, um damit Spoofing zu verhindern. Diese Signatur funktioniert nach dem Prinzip eines Paars aus privatem und öffentlichem Schlüssel, das die Authentifizierung der Sender-Domain ermöglicht.

Weitere Informationen finden Sie in unserer [Anleitung zur Konfiguration von DKIM](/pages/web_cloud/domains/dns_zone_dkim).

### DMARC-Eintrag konfigurieren

Domain-based Message Authentication, Reporting and Conformance (DMARC) ist ein Sicherheitsstandard, der auf den beiden E-Mail-Sicherheitsmethoden SPF und DKIM basiert. Argumente, die im DMARC-Datensatz registriert sind, leiten den Empfänger abhängig vom SPF- und/oder DKIM-Ergebnis an, wie E-Mails verarbeitet werden sollen. Im DMARC-Eintrag kann eine E-Mail-Adresse eingerichtet werden, die einen Bericht über Authentifizierungsfehler erhält.

Weitere Informationen finden Sie in unserer [Anleitung zum Konfigurieren eines DMARC-Eintrags](/pages/web_cloud/domains/dns_zone_dmarc).

### *Reverse* IP-Auflösung konfigurieren <a name="reverseip"></a>

Um das Senden von E-Mails weiter zu optimieren und das Risiko einer Blockierung Ihrer E-Mails zu verringern, können Sie auch den *Reverse* DNS-Pfad (PTR-Eintrag) mit Ihrem Domainnamen konfigurieren.

Erstellen Sie zunächst einen A-Eintrag in der DNS-Zone Ihres Domainnamens mit der IP-Adresse Ihres Servers als Ziel.

Wenn Ihr Domainname DNS-Server von OVHcloud verwendet, können Sie dazu unsere [Anleitung zur Bearbeitung der OVHcloud DNS-Zone über Ihr Kundencenter](/pages/web_cloud/domains/dns_zone_edit) befolgen.

Nach der Änderung der DNS-Zone Ihres Domainnamens ist eine Propagationszeit von maximal 24 Stunden erforderlich, bis die Änderungen wirksam sind.

Alle Informationen zur Konfiguration des *Reverse* DNS-Pfads im [OVHcloud Kundencenter](/links/manager) finden Sie in [unserer Anleitung](/pages/bare_metal_cloud/virtual_private_servers/configure-reverse-dns).

### Sonderfälle beim Versand von E-Mails

#### Microsoft Server (Outlook)
 
Microsoft verwendet eine *Whitelist Policy*. Dies bedeutet, dass Servern generell nicht vertraut wird und ein spezifischer Vorgang erforderlich ist, um Ihren E-Mail-Server validieren zu lassen.

Bevor Sie mit der Whitelist-Operation Ihrer IP-Adresse beginnen, überprüfen Sie, ob Sie einen [*Reverse*](#reverseip)-Eintrag für Ihre IP-Adresse eingerichtet haben (und nicht den Standard-Eintrag von OVHcloud).

Microsoft überprüft auch den SPF-Eintrag, daher wird empfohlen, ihn zu konfigurieren.

Anschließend müssen Sie die Verträge zu SNDS (Smart Network Data Services) und JMRP (Junk Mail Reporting Partner Program) unterzeichnen.

Dazu erstellen Sie einen Account unter folgender Adresse: <https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Wenn der Account aktiviert ist, füllen Sie das folgende Formular aus:

- **Company name:**: Name Ihres Unternehmens.
- **Contact email address**: Eine gültige E-Mail-Adresse, damit Microsoft Sie kontaktieren kann.
- **Complaint feedback email address**: Eine gültige E-Mail-Adresse, an die Sie Beschwerden über Spam erhalten können. *Best Practices* verlangen, dass diese E-Mail-Adresse folgende Form hat: **abuse@domain.tld**

Fügen Sie anschließend Ihre relevanten IP-Adressen im Bereich `IP address or range` hinzu.

Wenn Sie auf `Add new Network` klicken, werden Sie aufgefordert, eine gültige Kontakt-E-Mail-Adresse festzulegen. Geben Sie nun die Adresse vom Typ **abuse@domain.tld** ein, an die Spam-Beschwerden eingehen sollen.

Wenn Sie alles eingegeben haben, klicken Sie auf `Begin Setup`, um den Antrag zu übermitteln. Microsoft sendet dann eine E-Mail mit dem Titel `SNDS-JMRP Contract`, danach eine zweite E-Mail an **domain.tld**.

Bestätigen Sie die Angaben, um die Einrichtung von JMRP/SNDS abzuschließen.

Wenn Ihre IP-Adresse nach Abschluss der Aktionen als gesperrt erscheint, können Sie das [Junkmail-Verfahren](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062) verwenden, um eine Entfernung von der Blacklist zu beantragen. Das Verfahren dauert in der Regel 48 Stunden.

Microsoft wird Sie möglicherweise nach dem Datum der ersten Abrechnung Ihres Servers oder Ihrer IP-Adressen fragen. Senden Sie in diesem Fall Microsoft eine Kopie Ihrer Rechnung zu und geben Sie relevante IPs und Servernamen an (z.B.: Hostname ns1111111.ip-203-0-113.eu).

Für mehr Informationen hierzu können Sie bei Microsoft eine [Support-Anfrage erstellen](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656).

> [!warning]
>
> **Ablehnung seitens Microsoft**
>
> Es kann sein, dass Microsoft die Entsperrung Ihrer IP-Adresse verweigert. In diesem Fall kann OVHcloud nicht eingreifen. Es ist wichtig, die *Best Practices* von Microsoft zu respektieren.
>

#### Gmail Server

Das Hinzufügen spezifischer Einträge wie DMARC (Domain-based Message Authentication, Reporting, and Conformance) oder DKIM (DomainKeys Identified Mail) kann den Empfang von E-Mails vereinfachen, wenn der Empfänger bei Gmail ist. Hilfe dazu finden Sie in den [unten auf dieser Seite aufgeführten Anleitungen](#go-further).

### Ihre Konfiguration überprüfen

Es kann hilfreich sein, eine Seite wie [Mail Tester](http://www.mail-tester.com/) zu verwenden, um zu überprüfen, dass alle Ihre Einstellungen korrekt sind.

## Weiterführende Informationen

[E-Mail-Sicherheit durch DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)

[E-Mail-Sicherheit durch SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)

[E-Mail-Sicherheit durch DMARC-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dmarc)

Kontaktieren Sie unser [OVHcloud Partner-Netzwerk](/links/partner), wenn Sie beim Einsatz Ihrer OVHcloud Lösungen Unterstützung benötigen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
