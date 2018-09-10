---
title: 'DNS-Server einer OVH Domain ändern'
slug: webhosting_allgemeine_informationen_zu_den_dns_servern
excerpt: 'Hier erfahren Sie, wie Sie die DNS-Server Ihrer OVH Domain ändern.'
section: 'DNS und DNS-Zone'
order: 1
---

**Stand 10.09.2018**

## Einleitung

Auf DNS-Servern wird die DNS-Konfiguration von Domains gespeichert. Diese DNS-Konfigurationen (auch DNS-Zonen genannt) bestehen aus verschiedenen technischen Informationen, den sogenannten Einträgen. DNS-Einträge werden üblicherweise dazu verwendet, Ihre Domain mit dem oder den Servern zu verbinden, auf denen Ihre Website oder E-Mail-Adressen gehostet werden.

Diese Einträge, die auf den DNS-Servern gespeichert sind, sorgen also dafür, dass Ihre Domains im Internet erreichbar sind.

**In dieser Anleitung erfahren Sie, wie Sie die DNS-Server Ihrer OVH Domain ändern.**

## Voraussetzungen

- Sie besitzen eine bei OVH registrierte Domain.
- Sie haben über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

> [!warning]
>
> Wenn Ihre Domain nicht bei OVH registriert ist, muss die Änderung des DNS-Servers über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihrer Domain verwaltet wird.
>

## Beschreibung

**Seien Sie vorsichtig bei der Änderung der DNS-Server Ihrer Domain**: Wenn Sie eine falsche Änderung vornehmen, kann es sein, dass Ihre Website nicht mehr erreichbar ist und Ihre E-Mail-Adressen keine Nachrichten mehr empfangen können. Im Folgenden erklären wir Ihnen die Auswirkungen einer Änderung der DNS-Server, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue Konfiguration ersetzt die alte und wird auf den neu eingerichteten DNS-Servern gespeichert. Technisch gesehen verwendet die Domain jetzt eine neue DNS-Zone.

Bitte beachten Sie:

- Der Inhalt der alten DNS-Konfiguration wird nicht automatisch in die neue repliziert. Vergewissern Sie sich deshalb, dass die neue Konfiguration alle notwendigen Elemente für das einwandfreie Funktionieren der mit Ihrer Domain verbundenen Dienste (wie Ihre Website und E-Mail-Adressen) enthält.

- Wenn Sie nur ein Element Ihrer aktuellen DNS-Konfiguration ändern möchten (zum Beispiel einen Eintrag), empfehlen wir Ihnen, stattdessen die DNS-Zone zu bearbeiten: [Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}.

> [!warning]
>
> Vergewissern Sie sich, bevor Sie Änderungen vornehmen, dass Ihre Domain mit den neuen Einstellungen weiterhin erreichbar bleibt. Sind Sie sich nicht sicher, kontaktieren Sie bitte die Person, die Sie zu dieser Änderung aufgefordert hat.
>

### Schritt 1: Auf die Verwaltung der DNS-Server Ihrer Domain zugreifen

Loggen Sie sich zunächst im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Domains`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DNS Server`{.action}.

Die angezeigte Tabelle listet die DNS-Server auf, die derzeit bei OVH für Ihre Domain eingerichtet sind. Es werden möglicherweise mehrere DNS-Server angezeigt. Eine Tabellenzeile entspricht dabei jeweils einem Server.

![dns server](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Schritt 2: DNS-Server Ihrer Domain ändern

Klicken Sie für die Änderung der DNS-Server rechts auf den Button `DNS Server ändern`{.action}.

Ersetzen Sie in den angezeigten Textfeldern die aktuellen DNS-Server-Informationen mit den Informationen der neuen Server, die Sie einrichten möchten. Um weitere Server zur Liste hinzuzufügen, klicken Sie in der untersten Tabellenzeile rechts auf das `+`{.action}. Es öffnet sich ein neues Textfeld, in das Sie die entsprechenden Informationen eintragen können.

Nachdem Sie die Informationen eingegeben haben, klicken Sie auf `Konfiguration anwenden`{.action}. Die Tabelle wird nun entsprechend der von Ihnen vorgenommenen Änderungen aktualisiert.

> [!primary]
>
> Mit dem Button `DNS Server zurücksetzen`{.action} können Sie die aktuellen DNS-Server der Domain wieder durch die ursprünglichen OVH Server ersetzen. Nutzen Sie diese Option nur, wenn Sie die OVH DNS-Server wieder verwenden möchten. 
>

![dns server](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Schritt 3: Propagationszeit abwarten

Nachdem die Änderung vorgenommen wurde, dauert es eine gewisse Zeit, bis diese verarbeitet ist. Dabei sind zwei Vorgänge zu beachten:

- Die Änderung, die Sie bei OVH vorgenommen haben, muss zunächst vom Anbieter Ihrer Domainendung verarbeitet werden. Sie können den Fortschritt über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} nachverfolgen, indem Sie links im Menü auf den Bereich `Domains`{.action} gehen und dann auf `Aktuelle Tasks`{.action} klicken.

- Nachdem der Anbieter Ihrer Domainendung die Änderung verarbeitet hat, ist eine Propagationszeit von maximal 48 Stunden erforderlich, bis sie voll wirksam ist.

## Weiterführende Informationen

[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.