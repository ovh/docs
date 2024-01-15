---
title: "cPanel auf einem VPS installieren"
excerpt: "So instanziieren Sie einen VPS mit cPanel-Template"
updated: 2024-01-12
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

cPanel ist ein Konfigurationspanel, das die Verwaltung von Webhostings vereinfacht. Es macht komplexe Aufgaben leichter zugänglich, auch für neue Benutzer. Es bietet eine breite Palette von Funktionen, wie zum Beispiel für die Verwaltung: 

- E-Mails
- Domains
- Datenbanken
- Sicherheit
- usw.

Dank einer grafischen Oberfläche, die die Automatisierung von Einstellungen erlaubt, wird das Hosting von Webseiten vereinfacht.

**Erfahren Sie, wie Sie cPanel mit vorinstallierten Anwendungen auf einem VPS einrichten.**

## Voraussetzungen

- Sie verfügen über ein Angebot [VPS neueren Datums](https://www.ovhcloud.com/de/vps/){.external} (Value-Angebote, **Essential**, **Comfort** oder **Elite**).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Um Ihren cPanel Server zu installieren, bestellen Sie einen VPS mit cPanel Distribution.

![horizon](images/cpanel_order.png){.thumbnail}

Wenn Ihr VPS bereit ist, erhalten Sie eine E-Mail mit den Zugangsdaten, um sich mit Ihrem cPanel-Server zu verbinden:

```
 |    Ihre Anwendung(en):
 |    Application: cPanel
 |    Sie können sich mit cPanel verbinden über: https://*hostname*:2087/<session_parameters>
```

Wenn Sie schon über einen VPS verfügen und cPanel darauf installieren möchten, wählen Sie die Option "VPS reinstallieren" in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) über ein [Betriebssystem, das mit cPanel kompatibel ist](https://www.ovhcloud.com/de/vps/os/) reinstallieren.

> [!warning]
>
> Wenn Sie einen VPS reinstallieren, werden alle Daten darauf überschrieben.
>

### Erste Verbindung

Wenn Sie die E-Mail mit dem eindeutigen Link erhalten haben, klicken Sie auf diesen Link, um die Erstkonfiguration durchzuführen. Wenn der Link bereits abgelaufen ist, loggen Sie sich via SSH beim Server ein und führen Sie den Befehl „sudo whmlogin“ aus, um einen neuen Link zu erstellen.

Die mit dem Befehl „sudo whmlogin“ generierte URL erlaubt es Ihnen, sich ohne Login-Daten (Benutzer und Passwort) mit Ihrem WHM Interface zu verbinden. WHM ist eine cPanel-Schicht. Sie können auf cPanel zugreifen, nachdem Sie die folgenden Schritte ausgeführt haben.

#### Schritt 1: Lesen und akzeptieren Sie die cPanel-Nutzungsbedingungen

Lesen und akzeptieren Sie die cPanel-Nutzungsbedingungen.

![horizon](images/license_validation.png){.thumbnail}

#### Schritt 2: Eingeben Ihrer E-Mail-Adresse sowie der Nameserver, die der VPS verwenden soll

![horizon](images/setup_config_cpanel.png){.thumbnail}

#### Schritt 3: Root-Passwort festlegen

![horizon](images/change_root.png){.thumbnail}

Ab sofort können Sie sich mit dem soeben festgelegten Passwort via SSH mit dem Root-Benutzer auf Ihrem Server einloggen.

### Einen cPanel Account über das WHM Interface erstellen

Wenn Sie in Ihrem WHM Interface eingeloggt sind, klicken Sie auf `Create a New Account`{.action}, um einen cPanel Account zu erstellen.

![cPanel](images/create_new_account.png){.thumbnail}

Füllen Sie das Formular aus und bestätigen Sie die Erstellung Ihres cPanel Accounts.

![cPanel](images/create_new_account_form.png){.thumbnail}

Klicken Sie auf dem neu geöffneten Bildschirm auf die Schaltfläche `Go to cPanel`{.action} rechts auf dem Bildschirm.

![cPanel](images/go_to_cpanel.png){.thumbnail}

Sie werden auf Ihr cPanel-Interface weitergeleitet.

![cPanel](images/manager_cpanel.png){.thumbnail}

Sie können nun cPanel verwenden. Weitere Informationen zu cPanel finden Sie in der [offiziellen Dokumentation](https://docs.cpanel.net/).

> [!primary]
>
> Geben Sie in der Navigationsleiste des Browsers die folgenden URLs ein, um eine Verbindung mit herzustellen:
>
> - cPanel: https://<IP_V4>:2083/ (verwenden Sie die soeben in der WHM-Schnittstelle erstellten Kennungen)
> - WHM: https://<IP_V4>:2087/ (verwenden Sie den Benutzernamen „root“ und das in der Bestell-E-Mail des Dienstes empfangene Passwort oder das im WHM-Interface geänderte SSH-Passwort)
>
> Ihre IPv4-Adresse finden Sie in der E-Mail, die Sie nach der Bestellung Ihres VPS mit der cPanel Distribution erhalten haben.
>

### Absicherung Ihrer Dienstleistung

Wir empfehlen Ihnen, alle notwendigen Maßnahmen zu ergreifen, um Ihr WHM und Ihren VPS zu sichern. Lesen Sie hierzu [die cPanel-Empfehlungen](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Wir empfehlen Ihnen außerdem, unsere Anleitung zu lesen, um [einen VPS zu sichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), [unsere Backup-Lösungen](/products/bare-metal-cloud-virtual-private-servers) zu verwenden und die [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) zu konfigurieren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
