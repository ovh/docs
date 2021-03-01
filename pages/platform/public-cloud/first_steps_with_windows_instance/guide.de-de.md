---
title: 'Die ersten Schritte mit Ihrer Windows-Instanz'
excerpt: 'Erfahren Sie hier, wie Sie die Installation einer Windows-Instanz abschließen und eine erste Verbindung herstellen'
slug: die_ersten_schritte_mit_ihrer_windows_instanz
legacy_guide_number: g1995
section: 'Erste Schritte'
---

**Letzte Aktualisierung am 29.09.2020**

## Ziel

Sie können Public Cloud Instanzen verwenden, wenn Sie Webseiten mit IIS oder nur mit Windows kompatible Anwendungen hosten möchten. Unsere Instanzen können als  [Windows Desktop Systeme](https://www.ovh.de/public-cloud/prices/) installiert werden.

Sobald Ihre Instanz erstellt ist, muss die Installation über die VNC-Konsole abgeschlossen werden.

**Diese Anleitung erläutert die Vorgehensweise, um sich nach der Installation mit Ihrer Windows-Instanz zu verbinden.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben bereits eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud) mit Windows [erstellt](../erstellung_einer_instanz_im_ovh_kundencenter/).

## In der praktischen Anwendung

### Schritt 1: Ihr Passwort konfigurieren

Im Gegensatz zu einer Linux-Instanz wird eine Windows-Instanz nicht mit einem vorkonfigurierten SSH-Schlüssel installiert. 

Die Installation muss daher über die VNC-Konsole abgeschlossen werden:

- Klicken Sie auf `...`{.action} rechts von Ihrer Instanz und dann auf `Instanz-Details`{.action}.

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Wechseln Sie zum Tab `VNC-Konsole`{.action}.

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Wählen Sie nun die Sprach- und Tastaturkonfigurationen aus und geben Sie dann Ihr Passwort ein.

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> Manche Tasten der Tastatur der VNC-Konsole entsprechen nicht zwingend dem Format QWERTZ. Wir empfehlen, Ihr Passwort mehrmals zu überprüfen bevor Sie es bestätigen.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Schritt 2: Mit Remote Desktop verbinden

Sobald das Passwort festgelegt ist können Sie sich über eine Remote-Verbindung auf Ihrer Windows-Instanz einloggen.

Von einem Windows-Desktop aus geben Sie die Verbindungsdaten nach Aufruf von Remote Desktop ein:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

Um sich von einem Linux-Desktop aus au verbinden geben Sie folgenden Befehl ein:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Schritt 3: Verbesserung der Browsernutzung

Als Voreinstellung ist die erhöhte Sicherheit des Internet Explorer aktiviert. Oft erscheinen deshalb Warnhinweise beim Aufrufen von Webseiten, und Downloads werden blockiert.

![windowsinstance](images/firststepswindows6.png){.thumbnail}

Um das zu verhindern können Sie die erhöhte Sicherheit im Server Manager deaktivieren.

- Offnen Sie im **Server Manager** den Tab `Lokaler Server`{.action} (1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Klicken Sie dann `Ein`{.action} (2) neben **Verstärkte Sicherheitskonfiguration für IE**, um die Option zu deaktivieren.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Weiterführende Informationen

[Zugriff und Sicherheit in Horizon](../zugriff_und_sicherheit_in_horizon/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
