---
title: Den Versand von E-Mails optimieren
excerpt: Erfahren Sie hier, wie Sie das Spam-Risiko reduzieren, wenn Sie E-Mails versenden 
slug: optimierung-von-e-mails
section: Fortgeschrittene Nutzung
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 22.12.2022**

## Ziel

Antispam-Strategien werden immer strikter. Um ein Blockieren Ihrer E-Mails durch Sicherheitsfunktionen zu vermeiden, sind Einstellungen erforderlich, die Ihre Nachrichten validieren und beim Empfänger authentifizieren.

**Diese Anleitung erklärt, wie Sie den Versand Ihrer E-Mails optimieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 

## Voraussetzungen

- Sie haben einen bereits konfigurierten E-Mail-Server.

> [!warning]
>
> Ziel dieser Anleitung ist es, Ihnen einige Hinweise zur Optimierung beim Versenden Ihrer E-Mails zu geben. Beachten Sie, dass jeder E-Mail-Dienst eigene Richtlinien und bewährte Verfahren hat, um sicherzustellen, dass seine Nutzer E-Mails empfangen. Wir empfehlen Ihnen dringend, diese zu konsultieren.
>

## In der praktischen Anwendung

### SPF-Eintrag konfigurieren <a name="spfrecord"></a>

Bei dedizierten Infrastrukturen (Dedicated Server, VPS, Public Cloud Instanz oder Hosted Private Cloud) hat der optimale SPF-Eintrag folgende Form: `v=spf1 ip4:server_ipv4 ~all`. Denken Sie daran, 'server_ipv4' durch die IPv4-Adresse Ihres Servers zu ersetzen.

> [!primary]
>
> Das Symbol vor *all* hat folgende Bedeutung:
>
> - `+`: Akzeptieren
> - `-`: Nicht akzeptieren
> - `~`: Zu überprüfen (*soft fail*)
> - `?`: Neutral
>

Weitere Informationen zur Syntax des SPF-Eintrags finden Sie unter: <http://www.open-spf.org/>.

Sie können den SPF-Eintrag noch genauer gestalten, indem Sie etwa eine bestimmte Domain konfigurieren oder eine IPv6 angeben. Um Ihren SPF-Eintrag zu konfigurieren, folgen Sie [dieser Anleitung](https://docs.ovh.com/de/domains/webhosting_spf-eintrag/).

### DKIM-Eintrag konfigurieren

Die Konfiguration eines DKIM-Eintrags (DomainKeys Identified Mail) bietet zusätzlichen Schutz, um zu verhindern, dass Ihre E-Mails als Spam gekennzeichnet werden. DKIM ist eine einfache Signatur, mit der die Sender-Domain authentifiziert werden kann.

Diese Authentifizierung erfolgt mit einem DKIM-Schlüssel, der in Ihrer DNS-Zone hinzugefügt werden muss. Sie können dazu einen DKIM-Schlüsselgenerator verwenden, zum Beispiel: <http://dkimcore.org/tools/keys.html>. Folgen Sie den Anweisungen auf der Seite des Generators Ihrer Wahl.

### *Reverse IP* konfigurieren <a name="reverseip"></a>

Um den Versand zu optimieren und das Risiko einer Blockierung Ihrer E-Mails zu verringern, muss ein IP-*Reverse*-Eintrag für Ihren Domainnamen konfiguriert werden.

Erstellen Sie zunächst einen A-Eintrag in der DNS-Zone Ihres Domainnamens mit der IP-Adresse Ihres Servers als Ziel.

Wenn Sie DNS-Server von OVHcloud nutzen, verwenden Sie dazu [unsere Anleitung](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/#zugang-zur-verwaltung-einer-ovhcloud-dns-zone).

Nach der Änderung der DNS-Zone Ihres Domainnamens ist eine Propagationszeit von maximal 24 Stunden erforderlich, bis die Änderungen wirksam sind.

Anschließend fügen Sie den PTR-Eintrag (auch *Reverse* genannt) hinzu:

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} auf den Tab `Bare Metal Cloud`{.action} und öffnen Sie `IP`{.action}. 

Wenn Sie den *Reverse DNS* auf eine Additional IP-Adresse konfigurieren möchten, klicken Sie auf den Tab `Additional IP`{.action}.

Das Dropdown-Menü unter "**Meine öffentlichen IP-Adressen und dazugehörigen Dienste**" erlaubt es Ihnen, Ihre Dienste nach Kategorie zu filtern.

![IP Reverse](images/selectservice2022.png){.thumbnail}

Klicken Sie auf den Button `...`{.action} rechts neben der entsprechenden Zeile und dann auf `Reverse ändern`{.action}:

![IP Reverse](images/addreverse2022.png){.thumbnail}

Geben Sie Ihren Domainnamen in den Bereich `Reverse` ein und klicken Sie auf `Bestätigen`{.action}.

![IP Reverse](images/enterreverse.png){.thumbnail}

> [!primary]
> Wenn Sie Ihren Domainnamen als *Reverse* eingeben, wird sofort überprüft, ob der A-Eintrag auf dieselbe IP verweist. Dies wird bei Anti-Spam-Verfahren verwendet, daher muss Ihr A-Eintrag gültig sein und propagiert werden. Bei der Eingabe des *Reverse* sind bestimmte Regeln zu beachten:
>
>  - Der *Reverse* darf nicht mit einem `-` beginnen.
>  - Der *Reverse* darf höchstens 80 Zeichen enthalten.
>  - Der *Reverse* darf keine Großbuchstaben enthalten.
>  - Der *Reverse* muss mit einem `.` enden.
>
> Beispiel: Für "domain.tld" wäre der *Reverse*: **domain.tld.**
>

### Sonderfälle beim Versand von E-Mails

#### Microsoft Server (Outlook)
 
Microsoft verwendet eine *Whitelist Policy*. Dies bedeutet, dass Servern generell nicht vertraut wird und ein spezifischer Vorgang erforderlich ist, um Ihren E-Mail-Server validieren zu lassen.

Bevor Sie mit der Whitelist-Operation Ihrer IP-Adresse beginnen, überprüfen Sie, ob Sie einen [*Reverse*](#reverseip)-Eintrag für Ihre IP eingerichtet haben (und nicht den Standard-Eintrag von OVHcloud).

Microsoft überprüft auch den SPF-Eintrag. Es wird daher empfohlen, einen [zu konfigurieren](#spfrecord).

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

Microsoft wird Sie möglicherweise nach dem Datum der ersten Abrechnung Ihres Servers oder Ihrer IP-Adressen fragen. Senden Sie in diesem Fall Microsoft eine Kopie Ihrer Rechnung zu und geben Sie relevante IPs und Servernamen an (z.B.: Host ns3956771.ip-169-254-10.eu).

Für mehr Informationen hierzu können Sie bei Microsoft eine [Support-Anfrage erstellen](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656).

> [!warning]
>
> **Ablehnung seitens Microsoft**
>
> Es kann sein, dass Microsoft die Entsperrung Ihrer IP-Adresse verweigert. In diesem Fall kann OVHcloud nicht eingreifen. Es ist wichtig, die *Best Practices* von Microsoft zu respektieren.
>


#### Gmail Server

Das Hinzufügen spezifischer Einträge (z.B. DMARC-Einträge) kann den Empfang von E-Mails erleichtern, wenn Ihr Empfänger bei Gmail ist. Hier ein Artikel von Google, der Ihnen dabei helfen kann: [Add a DMARC record](https://support.google.com/a/answer/2466563?){.external}.

Google bietet auch einen [Artikel zur Spam-Prävention](https://support.google.com/mail/answer/81126?hl=en){.external} für Gmail-Benutzer.

### Ihre Konfiguration überprüfen

Es kann hilfreich sein, eine Seite wie [Mail Tester](http://www.mail-tester.com/) zu verwenden, um zu überprüfen, dass alle Ihre Einstellungen korrekt sind.

## Weiterführende Informationen

Kontaktieren Sie unser [OVHcloud Partner-Netzwerk](https://partner.ovhcloud.com/de/directory/), wenn Sie beim Einsatz Ihrer OVHcloud Lösungen Unterstützung benötigen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
