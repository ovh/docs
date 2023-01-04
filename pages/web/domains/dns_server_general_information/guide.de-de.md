---
title: 'DNS-Server einer OVHcloud Domain ändern'
slug: webhosting_allgemeine_informationen_zu_den_dns_servern
excerpt: 'Erfahren Sie hier, wie Sie DNS-Server im OVHcloud Kundencenter bearbeiten'
section: 'DNS und DNS-Zone'
order: 01
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.02.2021**

## Ziel

### DNS Konzept verstehen 

**D**omain **N**ame **S**ystem ist ein Satz von Elementen, um eine Domain mit einer IP-Adresse zu verbinden.

Die vollständige Erklärung finden Sie in der Anleitung "[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/#understanddns)".

### DNS Server 

Die **DNS** Server enthalten die DNS-Konfigurationsdateien der Domainnamen, die so genannten **DNS Zonen**.

![DNS](images/dnsserver.png){.thumbnail}

DNS Server werden in der Regel in Doppelkonfigurationen (primärer und sekundärer Server) verwendet, um Redundanz gegen einen Ausfall zu erzeugen.

**Diese Anleitung erklärt, wie Sie die DNS-Server für Ihre OVHcloud Domain ändern.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über eine bei OVHcloud registrierte [Domain](https://www.ovhcloud.com/de/domains/).
- Sie verfügen über die [entsprechenden Berechtigungen](../../customer/verwaltung-der-kontakte/){.external} für die Verwaltung der Domain über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de
) mit den [erforderlichen Berechtigungen](../../customer/verwaltung-der-kontakte/) zum Verwalten der Domain

> [!primary]
>
> Wenn Ihre Domain nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server über das Interface des Dienstleisters ändern, bei dem die Domain verwaltet wird.
>

## In der praktischen Anwendung

> [!warning]
>
> **Wir empfehlen Ihnen, vorsichtig zu sein, wenn Sie die DNS-Server einer Domain ändern.** Fehlkonfigurationen können dazu führen, dass Ihre Website nicht mehr erreichbar ist, oder dass Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Im Folgenden erklären wir Ihnen die Auswirkungen von Konfigurationsänderungen, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.
>

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue DNS-Konfiguration ersetzt die alte und wird auf den neu hinterlegten DNS-Servern gespeichert. Technisch gesehen verwendet die Domain jetzt eine neue DNS-Zone.

Bitte beachten Sie:

- Wenn neue DNS-Server deklariert werden (beispielsweise wenn OVHcloud DNS-Server externe ersetzen), wird die alte DNS-Konfiguration nicht automatisch in die neue repliziert. Stellen Sie sicher, dass Ihre neue DNS-Zone alle DNS-Einträge enthält, die erforderlich sind, damit die Dienste Ihrer Domain korrekt funktionieren (z.B. Ihre Website und Ihre E-Mail-Adressen).

- Wenn Sie nur ein Element Ihrer aktuellen DNS-Konfiguration ändern möchten (also einen DNS-Eintrag), empfehlen wir Ihnen stattdessen, unsere [Anleitung zur Änderung der DNS-Zone](../webhosting_bearbeiten_der_dns_zone/) zu befolgen.

- Bestimmte Organisationen und Registrys, die Domainendungen verwalten, haben besondere Anforderungen an die DNS Server (Anzahl der Namensserver, Wert der Einträge, etc.). Überprüfen Sie im Zweifelsfall die Regeln der zuständigen Registry der Domain.

Stellen Sie sicher, dass Ihre Domain aufgrund der Änderungen nicht unerreichbar wird. Wenn Sie sich nicht sicher sind, kontaktieren Sie die Person, die Sie um Änderungen ersucht.


### Zugang zur Verwaltung der OVHcloud DNS-Server

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Server`{.action}.

Die angezeigte Tabelle listet die DNS-Server auf, die derzeit von OVHcloud für Ihre Domain definiert sind. Es werden möglicherweise mehrere DNS-Server angezeigt. Eine Tabellenzeile entspricht dabei jeweils einem Server.

> [!primary]
>
> Wenn Sie die OVHcloud DNS Server verwenden, haben die Server-Nummern keine Verbindung zu den von Ihnen genutzten Diensten. Nur die Option [DNS Anycast](https://www.ovhcloud.com/de/domains/options/dns-anycast/) verwendet bestimmte DNS Server, die Ihnen automatisch zugewiesen werden.

![DNS-Server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### DNS Server ändern

Wenn Sie externe DNS-Server verwenden möchten, müssen Sie die aktuellen OVHcloud Server **ersetzen**, anstatt sie der Konfiguration hinzuzufügen. 

Klicken Sie rechts auf `DNS Server ändern`{.action}.

Ersetzen Sie in den Textfeldern die aktuellen Werte der DNS Server mit den Namen der neuen Server, die Sie hinterlegen möchten. Um weitere Server zur Liste hinzuzufügen, klicken Sie rechts neben der letzten Tabellenzeile auf `+`{.action}. Es wird eine neue Tabellenzeile angefügt, in die Sie die entsprechenden Informationen eintragen können.

> [!warning]
>
> Achten Sie darauf, eine Gruppe von DNS Servern nicht mit einer anderen zu vermischen.<br>
> So entsprechen zum Beispiel *dns19.ovh.net* und *ns19.ovh.net* einer Gruppe von OVHcloud DNS-Servern; diese sind identisch und synchronisiert. Wenn Sie externe DNS-Server zu OVHcloud Servern hinzufügen (oder die einer anderen Gruppe), erfolgt die DNS-Auflösung zufällig unter den OVHcloud DNS-Servern und den externen DNS-Servern.

Wenn Sie die Server eingetragen haben, klicken Sie auf `Konfiguration anwenden`{.action}. Der Status der DNS-Server wird nun entsprechend der von Ihnen vorgenommenen Änderungen in der Tabelle aktualisiert.

![DNS-Server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### DNS Server zurücksetzen 

Mit dem Button `DNS Server zurücksetzen`{.action} können Sie die derzeitigen DNS Server automatisch durch die ursprünglichen OVHcloud DNS Server ersetzen. Wir empfehlen Ihnen, diese Option nur zu verwenden, wenn Sie die OVHcloud DNS-Server wieder verwenden möchten. 

![DNS-Server](images/edit-dns-server-ovh-step3.png){.thumbnail}

Nachdem die erforderlichen Änderungen vorgenommen wurden, dauert es eine gewisse Zeit, bis diese effektiv sind. Dabei sind zwei aufeinanderfolgende Vorgänge zu beachten:

- Die bei OVHcloud vorgenommene Änderung muss von der Registry, die Ihre Domainendung verwaltet, übernommen werden. Sie können den Fortschritt dieser Operation in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) nachverfolgen, indem Sie im Bereich `Domainnnamen`{.action} auf `Laufende Operationen`{.action} klicken.
- Nachdem die Registry Ihrer Domainendung die Änderung angenommen hat, ist eine Propagationszeit von maximal 48 Stunden erforderlich, bis sie voll wirksam ist.

## Weiterführende Informationen

[Bearbeiten einer OVHcloud DNS-Zone](../webhosting_bearbeiten_der_dns_zone/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
