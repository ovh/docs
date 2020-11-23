---
title: 'Erste Schritte mit einem Dedicated Server'
slug: erste-schritte-dedicated-server
excerpt: 'Erfahren Sie hier, wie Sie Ihren neu bereitgestellten Dedicated Server verwalten'
section: 'Erste Schritte'
order: 1
---

**Letzte Aktualisierung am 28.08.2018**

## Ziel

Ein dedizierter Server ist ein physischer Server in einem unserer Rechenzentren. Im Gegensatz zu den Webhosting Lösungen (auch als „Shared“ Produkte bezeichnet), die technisch von OVHcloud verwaltet werden, sind Sie vollständig für die Verwaltung Ihres dedizierten Servers verantwortlich.

**Diese Anleitung gibt Ihnen Hinweise zur Ersteinrichtung und Verwaltung eines Dedicated Servers.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>


## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovh.de/dedicated_server/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben administrativen Zugriff (Root) über SSH auf Ihren Server (oder RDP für Windows).

## In der praktischen Anwendung

### Auf dem Server einloggen

#### Linux

Wenn Ihr dedizierter Server zum ersten Mal eingerichtet wird, erhalten Sie eine E-Mail mit dem zugehörigen Passwort und Root-Zugriff. Mit Root-Zugriff können Sie sich über SSH, einem gesicherten Kommunikationsprotokoll, mit Ihrem Server verbinden. Sie können auf Ihren Server über ein Terminal (Windows oder Mac) oder eine Drittanbieter-Software (z. B. PuTTy) zugreifen. 

Wenn Sie das Terminal geöffnet haben, geben Sie den folgenden Befehl ein, um sich auf Ihrem Server einzuloggen. Ersetzen Sie hierzu den Text hinter dem @-Zeichen durch die entsprechenden Informationen (IP-Adresse oder Referenzname des Servers). Der Referenzname Ihres Servers beginnt immer mit **ns**.

- Beispiel für Login mit einer IP-Adresse:

```sh
ssh root@IPv4_Ihres_Servers
```

- Beispiel für Login mit der Server-Referenz:

```sh
ssh root@Referenzname_Ihres_Servers
```

#### Windows

Wenn Ihr dedizierter Server zum ersten Mal eingerichtet wird, erhalten Sie eine E-Mail mit dem zugehörigen Passwort und Administrator-Zugriff. Sie benötigen diese Informationen, um sich über das *Remote Desktop Protokoll* (RDP) auf Ihrem Server einzuloggen. Wenn Sie eingeloggt sind, führt Windows Sie durch die Erstkonfiguration.

### Ihren dedizierten Server installieren oder reinstallieren

Gehen Sie in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} auf die Seite Ihres Servers, klicken Sie unter `Allgemeine Informationen` in der Zeile `System (OS)` auf `...`{.action} und dann auf `Reinstallieren`{.action}.

![Button Reinstallieren](images/reinstalling-your-server-01.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Installation mit einem OVH Template`{.action} aus (um eines unserer Installationstemplates zu verwenden) oder `Installation mit einer Ihrer Vorlagen`{.action} (um ein eigenes Template zu verwenden) und klicken Sie anschließend auf `Weiter`{.action}.

![Vorlage auswählen](images/reinstalling-your-server-02.png){.thumbnail}

Wählen Sie das gewünschte Betriebssystem aus und klicken Sie auf `Weiter`{.action}.

![Funktionen auswählen](images/reinstalling-your-server-03.png){.thumbnail}

Folgen Sie den im Fenster angezeigten Anweisungen und klicken Sie anschließend auf `Bestätigen`{.action}, um die Installation abzuschließen.


> [!primary]
>
> Für manche Betriebssysteme oder Plattformen wie Plesk und Windows muss vor der Installation eine Lizenz erworben werden. Diese können Sie über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} im Bereich `Bare Metal Cloud`{.action} unter `Lizenzen`{.action} oder über einen Reseller kaufen. Integrieren Sie diese anschließend manuell über das Betriebssystem selbst oder über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Ihren dedizierten Server sichern

Wie oben erwähnt, sind Sie der Administrator Ihres dedizierten Servers. Dadurch sind Sie allein für Ihre Daten und die Sicherheit Ihrer Maschine verantwortlich. Folgende Tipps helfen Ihnen dabei, Ihren Server zu sichern:

- Halten Sie Ihr Betriebssystem immer auf dem neuesten Stand.
- Halten Sie Ihre Software auf dem neuesten Stand.
- Ändern Sie Ihren Standard-SSH-Port (Port 22) und wählen Sie einen anderen Port.
- Ändern Sie Ihr Root-Passwort.
- Erstellen Sie einen neuen Systembenutzer mit eingeschränktem Zugriff für den täglichen Gebrauch.

Weitere Informationen finden Sie in unserer zugehörigen [Anleitung](../dedizierten-server-sichern/).


### Netzwerk konfigurieren

#### IP-Bridge-Modus

Der Bridge-Modus wird von Unternehmen verwendet, um ein globales Netzwerk aus zwei oder mehr Kommunikationsnetzwerken, bzw. zwei oder mehr Netzwerksegmenten zu erstellen.

Diese Konfiguration wird vor allem in der Virtualisierung verwendet, damit jede virtuelle Maschine über eine eigene öffentliche IP-Adresse verfügt.

Weitere Informationen finden Sie in unserer Anleitung [Configuring a network bridge](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external} (Englisch).

#### IP-Aliasing

Im IP-Alias-Modus werden zwei oder mehr IP-Adressen mit demselben Netzwerkinterface verknüpft. So kann Ihr Server mehrere Verbindungen zu einem Netzwerk herstellen, die jeweils einen anderen Zweck erfüllen.

Für detaillierte Informationen zur Konfiguration von IP-Aliasing lesen Sie die zugehörige [Anleitung](../network-ipaliasing/){.external}.

#### IPv6 konfigurieren

Alle OVHcloud Dedicated Server kommen mit einem /64 IPv6-Block. Um die Adressen dieses Blocks zu verwenden, müssen zunächst einige Änderungen der Netzwerkkonfiguration vorgenommen werden. Lesen Sie hierzu folgende Anleitung: [Configuring IPv6 on dedicated servers](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external} (Englisch).


### Problembehandlung der Konfiguration via IPMI

OVHcloud richtet alle Dedicated Server mit IPMI-Konsole (Intelligent Platform Management Interface) ein, die über Ihren Browser oder ein Java-Applet ausgeführt werden kann und es Ihnen ermöglicht, sich direkt mit Ihrem Server zu verbinden, selbst wenn keine Netzwerkverbindung besteht. So können Sie Probleme beheben, die die Verbindung Ihres Servers unterbrochen haben.

Weitere Informationen finden Sie in der Anleitung [Verwendung der IPMI-Konsole für Dedicated Server](../verwendung-ipmi-dedicated-server/){.external}.


### Rescue-Modus

Bei einem Problem mit Ihrem Server besteht der erste Schritt der Problembehandlung darin, diesen im Rescue-Modus neu zu starten. Um den Rescue-Modus zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und gehen Sie auf die Seite Ihres Servers. Gehen Sie anschließend in den Tab `Serverstatus`{.action} und dann unter `Allgemeine Informationen`{.action} zu `Boot`{.action}. Klicken Sie auf den Button `Ändern`{.action}, um den Startmodus zu ändern.

![Startmodus ändern](images/rescue-mode-01.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Im Rescue-Modus booten`{.action} und dann im Drop-down-Menü `rescue64-pro`{.action}. Geben Sie Ihre E-Mail-Adresse im Textfeld ein und klicken Sie dann auf `Weiter`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Bestätigen Sie im nächsten Fenster die von Ihnen gewählten Optionen und starten Sie Ihren Server neu, um die Änderungen anzuwenden.

![Bestätigung und Neustart](images/rescue-mode-02.png){.thumbnail}

Ihr Server wird jetzt im Rescue-Modus neu gestartet und die Login-Daten werden an die von Ihnen angegebene E-Mail-Adresse versandt. Um den Rescue-Modus zu beenden, ändern Sie einfach den Startmodus, um von der Festplatte zu booten, und starten Sie Ihren Server erneut.

Für weitere Informationen zur Verwendung des Rescue-Modus, um Probleme auf Ihrem Server zu beheben, lesen Sie unsere Anleitung zum [Rescue-Modus](../ovh-rescue/){.external}.


#### Hardware-Diagnose

Mit den im Rescue-Modus verfügbaren Hardware-Tests können Sie physische Fehlfunktionen diagnostizieren, die Probleme auf Ihrem Server verursachen können.

Wenn Sie im Webinterface des Rescue-Modus eingeloggt sind, können Sie Tests für die folgenden Hardwarekomponenten durchführen:

- RAM
- Festplatten
- RAID-Array
- Prozessor
- Netzwerkverbindung

#### Webinterface des Rescue-Modus

![Webinterface](images/rescue-mode-04.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
