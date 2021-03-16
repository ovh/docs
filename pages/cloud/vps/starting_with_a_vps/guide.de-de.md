---
title: 'Erste Schritte mit einem VPS'
excerpt: 'Erfahren Sie hier die Grundlagen der Verwendung eines VPS'
slug: erste-schritte-mit-einem-vps
section: 'Erste Schritte'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.02.2021**
 
## Ziel

Ein Virtual Private Server oder VPS ist ein virtualisierter Dedicated Server. Im Gegensatz zum Webhosting (so genanntes Shared Hosting), bei dem die technische Verwaltung von OVHcloud übernommen wird, sind Sie es, die Ihren VPS vollständig verwalten.

**In dieser Anleitung erfahren Sie, wie Sie Ihren VPS selbst verwalten können.**

> [!warning]
>OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Sie sind also verantwortlich für das ordnungsgemäße Funktionieren dieser Systeme.
>
Sollten Sie Schwierigkeiten haben, diese Aktionen durchzuführen, kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder besprechen Sie das Problem mit unserer User Community unter https://community.ovh.com/en/. OVHcloud kann Ihnen diesbezüglich keinen technischen Support bieten.
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über die nach der Installation per E-Mail versandten Zugangsdaten.

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie links im Menü unter `Virtual Private Server`{.action} Ihren Server aus.

Dieses Dashboard enthält wichtige Informationen zu Ihrem Dienst und erlaubt Ihnen, grundlegende Operationen auszuführen. Es unterscheidet sich je nach Reihe Ihres VPS.

- Wenn Sie gerade erst einen VPS bestellt haben, sieht seine Referenz wie folgt aus: *vps-XXXXXXX.vps.ovh.net* (*X* sind eine Folge aus Ziffern und Buchstaben).
- Wenn Sie einen älteren VPS verwalten, ist dessen Referenz anders strukturiert: *vpsXXXX.ovh.net* (hier sind *X* stets Zahlen).

Zu einem VPS Service der aktuellen Reihe lesen Sie den nachfolgenden Abschnitt: **Erste Schritte (aktuelle VPS Reihe)**.

Für Informationen zur Verwendung älterer VPS Modelle, fahren Sie weiter unten fort unter [Erste Schritte (alte VPS Reihe)](./#erste-schritte-alte-vps-reihe_1).

### Erste Schritte (aktuelle VPS Reihe)

#### Mit Ihrem VPS verbinden (aktuelle Reihe)

Bei Erstinstallation oder Neuinstallation über das Kundencenter wird ein Nutzer erstellt, der über alle Rechte zur Serververwendung verfügt, und Sie erhalten eine E-Mail mit den Login-Daten für diesen Nutzer.
Der Nutzername wird je nach Betriebssystem generiert, zum Beispiel „ubuntu“ oder „debian“.

Sie können sich mit dem Nutzernamen und Passwort per SSH mit Ihrem VPS verbinden. (SSH ist ein sicheres Kommunikationsprotokoll. Weitere Informationen hierzu finden Sie in der [Einführung zur Verwendung von SSH für dedizierte Server von OVHcloud](../../dedicated/ssh-einfuehrung/). Sie können auf Ihren Server über ein Terminal (Linux OS oder Mac OS) oder unter Windows über eine Drittanbieter-Software (wir empfehlen PuTTY) zugreifen.

Wenn Sie zum Beispiel PuTTY verwenden, öffnen Sie einfach die Anwendung und geben Sie den Namen des Servers oder seine IPv4-Adresse ein, um eine Verbindung herzustellen. Sie werden aufgefordert, den Nutzernamen und das Passwort einzugeben, und können anschließend auf die Kommandozeile (CLI) zugreifen.

![Verwendung PuTTY](images/putty1.png){.thumbnail}

Wenn Sie sich über Terminal/Konsole verbinden, geben Sie folgenden Befehl ein, um sich mit den Zugangsdaten aus der E-Mail auf Ihrem VPS einzuloggen (Nutzername und IPv4-Adresse).

```sh
ssh nutzername@IPv4_Ihres_VPS
```

Da Sie nun mit hohen Berechtigungen verbunden sind (ein *sudo* Benutzer), können Sie Befehle für administrative Aufgaben eingeben. Wir empfehlen Ihnen, vorher Ihr Passwort zu ändern:

```sh
~$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```

Beachten Sie, dass die Passwörter nicht angezeigt werden. Wechseln Sie anschließend zum Root-Benutzer und legen Sie Ihr Admin-Passwort fest:

```sh
~$ sudo su -
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Aktivierung der Root-Verbindungen

Aus Sicherheitsgründen ist die Verbindung mit dem Root-Benutzer standardmäßig deaktiviert. Wenn Sie diese Verbindungen erlauben möchten, folgen Sie den Instruktionen in [dieser Anleitung](../root-password/#rooterlauben).

#### VPS installieren oder neu installieren (aktuelle Reihe)

Sie können jede Neuinstallation über das OVHcloud Kundencenter durchführen. Gehen Sie im Tab „Startseite“ im Bereich **Ihr VPS** zu „Betriebssystem / Distribution“. Klicken Sie auf `...`{.action} und dann auf `VPS reinstallieren`{.action}.

![Neuinstallation des VPS](images/2020panel_02.png){.thumbnail}

Es wird ein Fenster geöffnet, in dem Sie Folgendes auswählen:

- Ihr Betriebssystem aus dem Drop-down-Menü
- einen [SSH-Schlüssel](../../dedicated/ssh-schluessel-erzeugen/) (optional)

![Neuinstallation des VPS](images/2020panel_01.png){.thumbnail}

> [!primary]
>
>Einige Betriebssysteme bzw. Verwaltungsoberflächen wie Plesk oder cPanel benötigen Lizenzen, die zusätzliche Kosten verursachen. Lizenzen können im OVHcloud Kundencenter verwaltet werden: gehen Sie zum Bereich `Bare Metal Cloud`{.action} und klicken Sie in der linken Menüleiste auf `Lizenzen`{.action}.
>
Um ein **Windows** Betriebssystem auf einem VPS zu betreiben, muss es **bei der Bestellung des Dienstes** ausgewählt werden. Ein VPS mit einem anderen Betriebssystem kann nicht nachträglich auf dem beschriebenen Weg mit Windows reinstalliert werden.
>

In Ihrem Kundencenter wird ein Ladebalken eingeblendet, der Ihnen den Fortschritt der Neuinstallation anzeigt. Diese kann bis zu 30 Minuten dauern.

### Erste Schritte (alte VPS Reihe)

#### Mit Ihrem VPS verbinden (alte Reihe)

Bei der Installation (oder Neuinstallation) Ihres VPS wird Ihnen eine E-Mail mit dem Passwort für den Root-Zugriff, also die Verbindung via SSH-Protokoll, zugeschickt. SSH ist ein sicheres Kommunikationsprotokoll. Weitere Informationen hierzu finden Sie in der [Einführung zur Verwendung von SSH für dedizierte Server von OVHcloud](../../dedicated/ssh-einfuehrung/). 

Der Zugang erfolgt über Kommandozeile/Terminal (Linux OS oder Mac OS) oder über Drittanbieter-Software unter Windows (z.B. PuTTY).

Wenn Sie zum Beispiel PuTTY verwenden, öffnen Sie einfach die Anwendung und geben Sie den Namen des Servers oder seine IPv4-Adresse ein, um eine Verbindung herzustellen. Sie werden dann aufgefordert, den Nutzernamen und das Passwort einzugeben, und können anschließend auf die Kommandozeile (CLI) zugreifen.

![Verwendung PuTTY](images/putty1.png){.thumbnail}

Wenn Sie sich über Terminal/Konsole verbinden, geben Sie folgenden Befehl ein, um die Verbindung zu Ihrem VPS herzustellen:

```sh
ssh root@IPv4_Ihres_VPS
```

Alternativ:

```sh
ssh root@Referenz_Ihres_VPS
```

#### VPS installieren oder neu installieren (alte Reihe)

Jede Neuinstallation erfolgt direkt in Ihrem Kundencenter. Klicken Sie einfach auf die Schaltfläche `VPS reinstallieren`{.action}.

![Neuinstallation des VPS](images/reinstall_manager.png){.thumbnail}

Es wird ein Fenster geöffnet, in dem Sie Folgendes auswählen:

- Ihr Betriebssystem aus dem Drop-down-Menü
- die Nutzersprache
- einen [SSH-Schlüssel](../../dedicated/ssh-schluessel-erzeugen/) (optional)

![Auswahlmenü für die Neuinstallation](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
>Einige Betriebssysteme bzw. Verwaltungsoberflächen wie Plesk oder cPanel benötigen Lizenzen, die zusätzliche Kosten verursachen. Lizenzen können im OVHcloud Kundencenter verwaltet werden: gehen Sie zum Bereich `Bare Metal Cloud`{.action} und klicken Sie in der linken Menüleiste auf `Lizenzen`{.action}.
>
Um ein **Windows** Betriebssystem auf einem VPS zu betreiben, muss es **bei der Bestellung des Dienstes** ausgewählt werden. Ein VPS mit einem anderen Betriebssystem kann nicht nachträglich auf dem beschriebenen Weg mit Windows reinstalliert werden.
>

In Ihrem Kundencenter wird ein Ladebalken eingeblendet, der Ihnen den Fortschritt der Neuinstallation anzeigt. Diese kann bis zu 30 Minuten dauern.

### Sicherheit Ihres VPS

Wie im Abschnitt "Ziel"dieser Anleitung erläutert, sind Sie der Administrator Ihres VPS. Als solcher sind Sie für Ihre Daten und deren Sicherheit verantwortlich.

Für grundlegende Tipps lesen Sie die Anleitung zur [VPS Sicherheit](../vps-sicherheit/){.external}.

### Eine Domain zuweisen

Wenn Sie Ihren VPS für die Veröffentlichung Ihrer Website verwenden, wird in der Regel eine Domain über DNS gebunden. Wenn Sie Ihre Domain auf OVHcloud verwalten, lesen Sie unsere Anleitung zur [Änderung Ihrer DNS](../../domains/webhosting_bearbeiten_der_dns_zone/) Zone, um Anweisungen zu erhalten.

### Domain mit einem SSL-Zertifikat sichern

Sobald Ihr VPS installiert und gesichert ist, können Sie Ihre Domain und Ihre Website ebenfalls absichern. Installieren Sie hierfür ein SSL-Zertifikat, damit Ihre Website statt nur über *http* auch über *https* erreichbar ist.

Sie können das SSL-Zertifikat manuell direkt auf Ihrem VPS installieren. Bitte beachten Sie dazu die offizielle Dokumentation der von Ihnen verwendeten Distribution.

Sie können aber auch die automatische Lösung von OVHcloud nutzen: [SSL Gateway](https://www.ovh.de/ssl-gateway/). Weitere Informationen zu SSL Gateway finden Sie auf der [Produktseite](https://www.ovh.com/de/ssl-gateway/){.external} oder in der zugehörigen [Dokumentation](https://docs.ovh.com/de/ssl-gateway/){.external}.

## Weiterführende Informationen

[SSH Einführung](../../dedicated/ssh-einfuehrung/)

[VPS absichern](../vps-sicherheit/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
