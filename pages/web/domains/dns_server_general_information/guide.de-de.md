---
title: 'DNS-Server einer OVH Domain ändern'
slug: webhosting_allgemeine_informationen_zu_den_dns_servern
excerpt: 'Hier erfahren Sie, wie Sie die DNS-Server Ihrer OVH Domain ändern.'
section: 'DNS und DNS-Zone'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18 Februar 2021**

## Ziel

### DNS Konzept verstehen 

DNS-Abkürzung für **D**omain **N**ame **S**ystem ist ein Satz von Elementen, um eine Domain mit einer IP-Adresse zu verbinden.

Die vollständige Erklärung finden Sie in der Anleitung "[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/#understanddns)".

### DNS Server 

Die **DNS** Server enthalten die DNS-Konfigurationsdateien der Domainnamen, die so genannten **DNS Zonen**.

![DNS](images/dnsserver.png){.thumbnail}

DNS Server werden in der Regel in zwei Gruppen (primär und sekundär) verwendet, um bei einem Ausfall eines der DNS Server Redundanz zu erzielen.

**Hier erfahren Sie, wie Sie die DNS-Server für Ihre OVHcloud-Domain ändern.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie besitzen [eine bei](https://www.ovh.de/domains/) OVHcloud registrierte Domain.
- Sie verfügen über die [entsprechenden Berechtigungen](../../customer/verwaltung-der-kontakte/){.external} für die Verwaltung der Domain über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

> [!primary]
>
> Wenn Ihre Domain nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server über das Interface des Dienstleisters ändern, das die Domain verwaltet.
>

## In der praktischen Anwendung

> [!warning]
>
> **Wir empfehlen Ihnen, vorsichtig zu sein, wenn Sie die DNS-Server einer Domain ändern.** Fehler bei der Handhabung können dazu führen, dass Ihre Website nicht mehr erreichbar ist, oder dass Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Im Folgenden erklären wir Ihnen die Auswirkungen einer solchen Bearbeitung, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.
>

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue DNS-Konfiguration ersetzt die alte und wird auf den neu definierten DNS-Servern gespeichert. Technisch gesehen, verwendet die Domain jetzt eine neue DNS-Zone.

Bitte beachten Sie:

- Bei einer Änderung des DNS Servers (e.g. Der Inhalt der alten DNS-Konfiguration von OVHCloud wird nicht automatisch in die neue repliziert. Stellen Sie sicher, dass Ihre neue DNS-Zone alle DNS-Einträge enthält, die erforderlich sind, damit die Dienste Ihrer Domain korrekt funktionieren (z. B. Ihre Website und Ihre E-Mail-Adressen).

- Wenn Sie nur ein Element Ihrer aktuellen DNS-Konfiguration ändern möchten (z. B. einen DNS-Eintrag), empfehlen wir Ihnen stattdessen, unsere Anleitung zur Änderung der DNS-Zone zu befolgen: "[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/){.external}".

- Bestimmte Organisationen, Registrys, die die Domainendungen verwalten, haben besondere Anforderungen an die DNS Server (Anzahl der Namensserver, Wert der Einträge...). Überprüfen Sie im Zweifelsfall die zuständige Registry der Domain.

Stellen Sie sicher, dass Ihre Domain aufgrund der Änderungen nicht mehr erreichbar ist. Wenn Sie sich nicht sicher sind, kontaktieren Sie bitte die Person, die Sie um Änderungen ersucht.


### Zugang zur Verwaltung der OVHcloud DNS Server

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, klicken Sie links im Menü auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Server`{.action}.

Die angezeigte Tabelle listet die DNS-Server auf, die derzeit von OVHcloud für Ihre Domain definiert sind. Es werden möglicherweise mehrere DNS-Server angezeigt. Eine Tabellenzeile entspricht dabei jeweils einem Server.

![DNS-Server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### DNS Server ändern

Wenn Sie externe DNS-Server verwenden möchten, müssen Sie diese anstelle der OVHcloud DNS-Server verwenden und nicht addieren.

Klicken Sie `rechts auf DNS`{.action} Server ändern.

Ersetzen Sie in den Textfeldern **die** aktuellen Werte der DNS Server mit den Informationen zu den neuen Servern, die Sie definieren möchten. Um weitere Server zur Liste hinzuzufügen, klicken Sie rechts neben der letzten Tabellenzeile auf `+`{.action}-Button. Es wird eine neue Tabellenzeile erstellt, in die Sie die entsprechenden Informationen eintragen können.

> [!warning]
>
> Achten Sie darauf, eine Gruppe von DNS Servern nicht mit einer anderen zu vermischen.
> So entsprechen zum Beispiel *DNS19.ovh.net* und *ns19.ovh.net* einer Gruppe von OVHcloud DNS-Servern, diese sind identisch und synchronisiert. Wenn Sie DNS-Server zu OVHcloud hinzufügen (oder eine andere OVHcloud-Gruppe), erfolgt die DNS-Auflösung zufällig zwischen den OVHcloud DNS-Servern und den angegebenen externen DNS-Servern.

Wenn Sie diese Informationen eingegeben haben, klicken Sie auf `Konfiguration anwenden`{.action}. Die Status der DNS-Server werden nun entsprechend der von Ihnen vorgenommenen Änderungen in der Tabelle aktualisiert.

![DNS-Server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### DNS Server zurücksetzen 

Wenn Sie auf den Button `DNS Server zurücksetzen`{.action}, können Sie die derzeitigen DNS Server zurücksetzen, indem Sie sie automatisch durch die ursprünglichen OVHcloud DNS Server ersetzen. Wir empfehlen Ihnen, diese Option nur zu verwenden, wenn Sie die OVHcloud DNS-Server wiederverwenden möchten. 

![DNS-Server](images/edit-dns-server-ovh-step3.png){.thumbnail}

Nachdem die erforderlichen Änderungen vorgenommen wurden, dauert es eine gewisse Zeit, bis diese effektiv sind. Dabei sind zwei aufeinanderfolgende Vorgänge zu beachten:

- Die von OVHcloud vorgenommene Änderung muss von der Registry, die Ihre Domainendung verwaltet, übernommen werden. Sie können den Fortschritt dieser Operation in Ihrem [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Kundencenter nachverfolgen, indem Sie links im Bereich `Domains`{.action} im Menü unter `Laufende Operationen`{.action} gehen.
- Nachdem die Registry Ihrer Domainendung die Änderung verarbeitet hat, ist eine Propagationszeit von maximal 48 Stunden erforderlich, bis sie voll wirksam ist.

## Weiterführende Informationen

[Änderung einer OVHcloud](../webhosting_bearbeiten_der_dns_zone/){.external} DNS-Zone.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
