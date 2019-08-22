---
title: 'DNS-Server einer OVH Domain ändern'
slug: webhosting_allgemeine_informationen_zu_den_dns_servern
excerpt: 'Hier erfahren Sie, wie Sie die DNS-Server Ihrer OVH Domain ändern.'
section: 'DNS und DNS-Zone'
order: 1
---

**Stand 05.07.2019**

## Einleitung

Auf DNS-Servern werden DNS-Konfigurationen von Domains gespeichert. Diese DNS-Konfigurationen (auch DNS-Zonen genannt) enthalten technische Informationen in Form von sogenannten Einträgen. DNS-Einträge werden üblicherweise dazu verwendet, um Ihre Domain mit dem oder den Servern zu verbinden, auf denen Ihre Website und E-Mail-Adressen gehostet werden.

Diese Einträge, die auf den DNS-Servern gespeichert sind, sorgen also dafür, dass Ihre Domains im Internet erreichbar sind.

**In dieser Anleitung erfahren Sie, wie Sie die DNS-Server Ihrer OVH Domain ändern.**

## Voraussetzungen

- Sie besitzen eine bei OVH registrierte Domain.
- Sie haben die [entsprechenden Rechte](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/){.external}, um die Domain über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} zu verwalten.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

> [!warning]
>
> Wenn Ihre Domain nicht bei OVH registriert ist, muss die Änderung der DNS-Server über das Interface des Anbieters vorgenommen werden, der Ihre Domain verwaltet.
>

## Beschreibung

**Wir empfehlen Ihnen dringend, bei der Änderung der DNS-Server Ihrer Domain besonders vorsichtig vorzugehen.** Wenn Sie eine falsche Änderung vornehmen, kann es sein, dass Ihre Website nicht mehr erreichbar ist und Ihre E-Mail-Adressen keine Nachrichten mehr empfangen können. Im Folgenden erklären wir Ihnen die Auswirkungen einer solchen Bearbeitung, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue Konfiguration ersetzt die alte und wird auf den neu eingerichteten DNS-Servern gespeichert. Technisch gesehen, verwendet die Domain jetzt eine neue DNS-Zone.

Bitte beachten Sie:

- Der Inhalt der alten DNS-Konfiguration wird nicht automatisch in die neue Konfiguration repliziert. Vergewissern Sie sich deshalb, dass die neue Konfiguration alle notwendigen Elemente für das einwandfreie Funktionieren der mit Ihrer Domain verbundenen Dienste (wie Ihre Website und E-Mail-Adressen) enthält.

- Wenn Sie nur ein Element Ihrer aktuellen DNS-Konfiguration ändern möchten (zum Beispiel einen DNS-Eintrag), empfehlen wir Ihnen, stattdessen die folgende Anleitung zu lesen und die DNS-Zone entsprechend zu bearbeiten: „[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}“.

- Manche Registrys − Organisationen, die die Domainendungen verwalten − haben bestimmte Anforderungen für DNS-Server (Anzahl der Nameserver, Werte der Einträge, ...). Im Zweifelsfall wenden Sie sich an die für Ihre Domainendung zuständige Registry.

> [!warning]
>
> Vergewissern Sie sich, bevor Sie Änderungen vornehmen, dass Ihre Domain mit den neuen Einstellungen weiterhin erreichbar bleibt. Sind Sie sich nicht sicher, kontaktieren Sie bitte die Person, die Sie zu dieser Änderung aufgefordert hat.
>

### Schritt 1: Auf die Verwaltung der OVH DNS-Server der Domain zugreifen

Loggen Sie sich zunächst im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Server`{.action}.

Die angezeigte Tabelle listet die DNS-Server auf, die derzeit bei OVH für Ihre Domain festgelegt sind. Es werden möglicherweise mehrere DNS-Server angezeigt. Eine Tabellenzeile entspricht dabei jeweils einem Server.

![DNS-Server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Schritt 2: DNS-Server einer Domain ändern

Klicken Sie für die Änderung der DNS-Server auf den Button `DNS Server ändern`{.action}.

Ersetzen Sie in den angezeigten Textfeldern die aktuellen DNS-Server-Details mit den Informationen der neuen Server, die Sie verwenden möchten. Um weitere Server zur Liste hinzuzufügen, klicken Sie in der untersten Tabellenzeile rechts auf das Icon `+`{.action}. Es wird eine neue Tabellenzeile erstellt, in die Sie die entsprechenden Informationen eintragen können.

Nachdem Sie die Informationen eingegeben haben, klicken Sie auf `Konfiguration anwenden`{.action}. Die Status der DNS-Server werden nun entsprechend der von Ihnen vorgenommenen Änderungen in der Tabelle aktualisiert.

> [!primary]
>
> Mit dem Button `DNS Server zurücksetzen`{.action} können Sie die aktuellen DNS-Server der Domain wieder durch die ursprünglichen OVH Server ersetzen. Nutzen Sie diese Option nur, wenn Sie die OVH DNS-Server wieder verwenden möchten. 
>

![DNS-Server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Schritt 3: Propagationszeit der Änderungen abwarten

Nachdem die erforderlichen Änderungen vorgenommen wurden, dauert es eine gewisse Zeit, bis diese effektiv sind. Dabei sind zwei aufeinanderfolgende Vorgänge zu beachten:

- Die Änderung, die Sie bei OVH vorgenommen haben, muss zunächst von der Registry Ihrer Domainendung verarbeitet werden. Sie können den Fortschritt über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} nachverfolgen, indem Sie links im Menü in den Bereich `Domains`{.action} gehen und dann auf `Laufende Operationen`{.action} klicken.
- Nachdem die Registry Ihrer Domainendung die Änderung verarbeitet hat, ist eine Propagationszeit von maximal 48 Stunden erforderlich, bis sie voll wirksam ist.

## Weiterführende Informationen

[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.