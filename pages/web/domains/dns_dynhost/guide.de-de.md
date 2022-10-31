---
title: 'Dynamisches DNS für eine Domain konfigurieren'
slug: verwendung-dynhost
excerpt: 'Hier erfahren Sie, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihre OVHcloud Domain konfigurieren.'
section: 'DNS und DNS-Zone'
order: 06
---

**Stand 30.11.2018**

## Einleitung

Die Domain Name System Zone (DNS-Zone) ist die Konfigurationsdatei einer Domain. Sie besteht aus technischen Angaben, die als Einträge bezeichnet werden. Für einige Anwendungsfälle wie beispielsweise das Hosting eines eigenen Gameservers ohne „feste“ IP-Adresse kann es erforderlich sein, DNS-Einträge dynamisch zu aktualisieren, um eine längere Dienstunterbrechung zu vermeiden. 

**In dieser Anleitung erfahren Sie, wie Sie einen dynamischen DNS-Eintrag (DynHost) für Ihre OVHcloud Domain konfigurieren.**

## Voraussetzungen

- Sie haben über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Die betreffende Domain verwendet die OVHcloud Konfiguration (die OVHcloud DNS-Server).
- Der DynHost-Eintrag, den Sie erstellen möchten, ist noch nicht als A-Eintrag in der OVHcloud DNS-Zone Ihrer Domain vorhanden.

> [!warning]
>
> - Wenn Ihre Domain nicht die OVHcloud DNS-Server verwendet, informieren Sie sich für die Vorgehensweise bei dem Anbieter, der die DNS-Konfiguration Ihrer Domain verwaltet.
> 
> - Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob sie unsere Konfiguration verwendet. Gehen Sie hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} zur betreffenden Domain und klicken Sie anschließend auf den Tab `DNS Server`{.action}.
>

## Beschreibung

### Schritt 1: DynHost-Benutzer erstellen

Erstellen Sie zunächst einen DynHost-Benutzer. Über diesen können Sie den dynamischen DNS-Eintrag, den Sie erstellen möchten, aktualisieren. Loggen Sie sich zunächst im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Domainnnamen`{.action} und wählen Sie die betreffende Domain aus. Gehen Sie dann auf den Tab `DynHost`{.action}.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Klicken Sie auf den Button `Zugriff verwalten`{.action} und dann auf `DynHost-Kennung erstellen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Suffix der Kennung|Legen Sie das Suffix der DynHost-Kennung fest.|
|Subdomain|Wählen Sie die Subdomain aus, für die der dynamische DNS-Eintrag erstellt wird.|
|Passwort|Legen Sie für die DynHost-Kennung ein Passwort fest und bestätigen dieses.|

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Die Kennung erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Kennungen anlegen möchten.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Schritt 2: Dynamischen DNS-Eintrag (DynHost) erstellen

Im zweiten Schritt erstellen Sie den DNS-Eintrag, der dynamisch aktualisiert werden soll. Zur Erinnerung: Dieser darf nicht als A-Eintrag in der OVHcloud DNS-Zone Ihrer Domain vorhanden sein. Um den Eintrag zu überprüfen und wenn nötig zu löschen, lesen Sie bitte die Anleitung „[Bearbeiten der OVHcloud DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}“.

Gehen Sie für die Erstellung des DynHost-Eintrags nun zurück auf den Tab `DynHost`{.action} und klicken Sie auf den Button `DynHost hinzufügen`{.action}. Geben Sie im angezeigten Fenster die notwendigen Informationen ein.

|Information|Beschreibung|
|---|---|
|Subdomain|Geben Sie die Subdomain ein, für die der DNS-Eintrag dynamisch aktualisiert werden soll. Es muss sich um dieselbe Subdomain handeln, die Sie bei der Erstellung der DynHost-Kennung ausgewählt haben.|
|Ziel-IP|Geben Sie die IP-Adresse ein, die aktuell vom DNS-Eintrag genutzt wird. Diese wird nun, wie bei DynHost vorgesehen, kontinuierlich aktualisiert.|

Wenn Sie die Felder ausgefüllt haben, klicken Sie auf den Button `Bestätigen`{.action}. Der DynHost-Eintrag erscheint dann in der Tabelle auf der aktuell geöffneten Seite. Wiederholen Sie diesen Schritt, wenn Sie weitere DynHost-Einträge erstellen möchten.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Schritt 3: DynHost-Änderung automatisieren

Nachdem Sie den Benutzer und den DynHost-Eintrag erstellt haben, wird im letzten Schritt die Aktualisierung der DNS-Einträge automatisiert, damit diese dynamisch geändert werden. Hierfür ist ein Client notwendig, der kontinuierlich überprüft, ob die Ziel-IP sich geändert hat, und diese dann aktualisiert.

> [!warning]
>
> Für die Installation und Konfiguration des Clients sind Sie selbst verantwortlich. Im Folgenden haben wir einige Informationen zur Vorgehensweise zusammengetragen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten. 
>

Für die Installation des Clients stehen einige Möglichkeiten zur Verfügung. Er kann auf Ihrem Server oder Ihrem Computer installiert werden. Möglicherweise ist er bereits im Interface Ihres Routers verfügbar, wenn dieser kompatibel ist. Wenn Sie den Client installiert haben, muss dieser konfiguriert werden. Nutzen Sie dazu die Informationen der DynHost-Kennung, die Sie in Schritt 1 angelegt haben.

Je nach verwendetem Client kann es sein, dass zusätzlich zu den Informationen zum DynHost-Benutzer und der betreffenden Subdomain noch eine Update-URL erforderlich ist. Verwenden Sie in diesem Fall die folgende URL und ersetzen Sie die allgemeinen Informationen:

https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Information|Ersetzen durch|
|---|---|
|$HOSTNAME|Die Subdomain, die von der Aktualisierung betroffen ist.|
|$IP|Die neue Ziel-IP.|

Um zu überprüfen, ob die Ziel-IP aktualisiert wurde, gehen Sie in Ihrem Kundencenter in den Tab `DynHost`{.action}. Überprüfen Sie dort in der Spalte `Ziel`{.action} die angezeigte IP-Adresse.

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
