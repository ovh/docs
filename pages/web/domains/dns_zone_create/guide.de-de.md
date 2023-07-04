---
title: 'OVHcloud DNS-Zone für eine Domain erstellen'
excerpt: 'Diese Anleitung erklärt, wie Sie über Ihr Kundencenter eine DNS-Zone bei OVHcloud für Ihre Domain erstellen'
updated: 2023-07-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die Konfigurationsdatei einer Domain ist die Zone **D**omain **N**ame **S**ystem (**DNS**). Sie besteht aus technischen Informationen, die als DNS-Einträge bezeichnet werden*. Die DNS Zone ist sozusagen wie ein Weichenzentrum.

Geben Sie hierzu beispielsweise Folgendes an:

- IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website mit Ihrer Domain anzuzeigen.
- Die E-Mail Server (DNS-Einträge vom Typ *MX*), auf die Ihre Domain die E-Mails, die sie erhält, weiterleiten soll. So können Sie die E-Mail-Adressen Ihrer Domain einsehen.
- Informationen zur Sicherheit und Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail-Server etc.), die mit Ihrer Domain verbunden sind (DNS Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

Wenn nötig, lesen Sie unsere Dokumentation zu [DNS-Einträgen und Editieren einer DNS-Zone](/pages/web/domains/dns_zone_edit) über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

Eine DNS Zone wird auf **DNS Servern** gehostet/gespeichert. Für die Verwendung der gehosteten DNS Zone müssen die **DNS Server** bei der Domain angemeldet werden. 

Die **DNS Server** funktionieren üblicherweise paarweise:

- Ein *haupt*-DNS Server: Er leitet die von der Domain empfangenen Anfrageströme auf die von ihm gehostete DNS Zone um. So können Sie die *DNS-Auflösung* durchführen, um die Streams auf die zu Ihrer Domain gehörenden Dienste (Server, Website, E-Mails...) weiterzuleiten.
- Ein *sekundärer* DNS Server: Dieser *Backup*-Server wird verwendet, wenn der *Haupt*-Server mit Anfragen überlastet ist, nicht verfügbar ist oder weniger schnell antwortet als der *Sekundär-Server*.

Einige DNS Server bieten 3 **DNS Server** oder mehr an, die bei Ihrer Domain zu melden sind, um die von ihnen gehostete DNS Zone für Ihre Domain zu aktivieren.

Mehr Informationen zu den **DNS-Servern** finden Sie in [Anleitung](/pages/web/domains/dns_server_general_information) zum Thema.

Aus verschiedenen Gründen können Sie bei OVHcloud eine DNS-Zone für Ihre Domain erstellen müssen.

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Kundencenter eine DNS-Zone bei OVHcloud für Ihre Domain erstellen.**

## Voraussetzungen

- Sie besitzen eine Domain.
- Die betreffende Domain darf nicht bereits über eine DNS-Zone bei OVHcloud verfügen (aktiviert oder nicht) oder Gegenstand einer laufenden Operation oder Bestellung bei OVHcloud sein.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## In der praktischen Anwendung

> [!warning]
>
> Sie können mehrere DNS Zonen (bei verschiedenen DNS Lieferanten/Anbietern/DNS Hosting Providern) für eine Domain erstellen. Sie können jedoch nur eine aktive DNS Zone für Ihre Domain verwenden. Diese Beschränkung dient der Vermeidung von *DNS-Konflikten*.
>
> Die Aktivierung/Deaktivierung einer DNS Zone erfolgt ab der Benachrichtigung der **DNS Server** bei Ihrer Domain. Sie können diese Erklärung ändern und die **DNS Server** einer Domain ändern bei: 
>
> - vom *Registrar* an dem Sie Ihre Domain direkt registriert haben
> - des Anbieters, der die Domain verwaltet, wenn Sie über einen spezialisierten Dienstleister für die Verwaltung Ihrer Domain verfügen.
>
> Indem Sie die **DNS-Server** einer Domain ändern, deaktivieren Sie die Konfiguration der alten angewendeten DNS Zone zugunsten der Konfiguration der neuen DNS Zone (wird auf den neu deklarierten **DNS Servern**) deaktiviert.
>
> Überprüfen Sie daher, bevor Sie die bei Ihrer Domain angegebenen **DNS Server** ändern, ob die Konfiguration der neuen DNS Zone Ihren Erwartungen entspricht.
>

### Schritt 1: die DNS-Zone über das OVHcloud Kundencenter erstellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf die `Bestellen`{.action} und dann auf den Kasten `DNS-Zone`{.action}.

Geben Sie auf der angezeigten Seite den Domainnamen ein (Beispiel: *domain.tld*), für die Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einen Moment, bis das Tool die Überprüfung des Domainnamens durchführt.

Wenn eine Nachricht erscheint und Ihnen anzeigt, dass die DNS Zone nicht erstellt werden kann, überprüfen Sie, ob der Domainname die notwendigen Voraussetzungen erfüllt, oder bitten Sie die Person, die die Domain verwaltet, dies für Sie zu tun. Wenn alles korrekt ist, versuchen Sie es erneut.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Sobald die Überprüfung abgeschlossen ist, wählen Sie aus, ob Sie die minimalen Einträge für die DNS-Zone, die Sie erstellen möchten, aktivieren möchten. Diese Auswahl ist nicht endgültig, da Sie die Einträge der [DNS-Zone auch später noch bearbeiten können](/pages/web/domains/dns_zone_edit).

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

|Die minimalen Einträge aktivieren?|Details|
|---|---|
|Ja|Wählen Sie diese Auswahl aus, wenn Sie die DNS Zone später selbst personalisieren möchten.</br>![Minimum-DNS-Zentries](images/minimal.png){.thumbnail}|
|Nein|Wählen Sie diese Wahl aus, wenn Sie OVHcloud Dienste wie ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} verwenden möchten, wobei die Zone hierfür vorkonfiguriert ist.</br>![Minimum-dns-zentries](images/no_minimal.png){.thumbnail}|

Wenn Sie Ihre Auswahl getroffen haben, folgen Sie den Schritten bis zur Erstellung der DNS Zone.

### Schritt 2: die DNS Zone bearbeiten (optional)

Da die DNS-Zone für Ihre Domain erstellt wurde, können Sie sie ab sofort bearbeiten. Dieser Vorgang ist optional, kann aber notwendig sein, wenn Sie die Verfügbarkeit der mit dieser Domain verbundenen Dienste (wie Websites und/oder E-Mails) aufrechterhalten möchten.

Um diese DNS-Zone zu bearbeiten, lesen Sie unsere Anleitung "[DNS-Zone bei OVHcloud bearbeiten](/pages/web/domains/dns_zone_edit)".

> [!primary]
>
> Wenn Sie gerade die DNS Zone erstellt haben und die Domain noch nicht in der Liste Ihrer Dienstleistungen erscheint (im Bereich `Web cloud`{.action} im OVHcloud Kundencenter, dann im Bereich `Domainnamen`{.action}), warten Sie 15 bis 20 Minuten und laden Sie die Seite neu.
>

Führen Sie die notwendigen Schritte durch. Nach der Änderung der OVHcloud DNS-Zone Ihrer Domain ist eine maximale Propagationszeit von **4 bis 24 Stunden** erforderlich, damit die Änderungen wirksam sind.

### Schritt 3: die DNS Server der Domain ändern

Wenn die DNS-Zone bei OVHcloud für die Verwendung bereit ist, tragen Sie diese bitte Ihrer Domain zur Anwendung bei. 

Sie müssen daher zuerst die **DNS-Server** von OVHcloud abrufen, auf denen die OVHcloud DNS-Zone für Ihre Domain erstellt wurde.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich "Web Cloud"{.action}. Klicken Sie in der linken Spalte auf Domainnamen {.action} und wählen Sie die betreffende DNS-Zone aus. 

Links befindet sich ein Logo mit dem Namen Ihrer Domain und der Begriff *DNS* ist als Globus gekennzeichnet. 

> [!primary]
> Wenn Sie an diesem Punkt nur ein Globus-Logo haben (ohne den Begriff *DNS*, der in Ihrem Kundencenter geschrieben ist), dann wird die Domain bereits in Ihrem OVHcloud Kundencenter verwaltet. 
>
> Wenn Sie Administrator* Kontakt dieses Kontakts sind, können Sie die **DNS Server** in diesem Fall direkt mithilfe unserer [Anleitung](/pages/web/domains/dns_server_general_information) zum Thema ändern.
>
> Zur Erinnerung: Überprüfen Sie, bevor Sie die bei Ihrer Domain angegebenen **DNS Server** ändern, ob die Konfiguration der neuen DNS Zone Ihren Erwartungen entspricht.
>

Auf der angezeigten Seite werden die DNS-Server, die mit Ihrer Domain zur Aktivierung der OVHcloud DNS-Zone verwendet werden sollen, unter dem `Name Servers`{.action} aufgeführt.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Nachdem Sie die Informationen erhalten haben **Ändern Sie die DNS-Server Ihrer Domain über das Interface des Anbieters, der diese verwaltet**. Nach der Änderung ist eine maximale Propagationszeit von **48 Stunden** erforderlich, damit die Änderung voll wirksam ist.

> [!primary]
>
> Zur Erinnerung: Überprüfen Sie, bevor Sie die bei Ihrer Domain angegebenen **DNS Server** ändern, ob die Konfiguration der neuen DNS Zone Ihren Erwartungen entspricht.
>

## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.