---
title: "cPanel auf einem VPS installieren"
excerpt: "Erfahren Sie hier, wie Sie einen VPS mit cPanel-Template einrichten"
updated: 2024-01-31
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

cPanel ist ein Konfigurationspanel, das die Verwaltung von Webhosting vereinfacht. Es macht komplexe Aufgaben leichter zugänglich, speziell für neue Benutzer. Es bietet eine breite Palette von Funktionen, etwa die Verwaltung von: 

- E-Mails
- Domainnamen
- Datenbanken
- Sicherheit
- etc.

Dank einer grafischen Oberfläche, die die Automatisierung von Einstellungen erlaubt, wird das Hosten von Webseiten vereinfacht.

**Diese Anleitung erklärt, wie Sie cPanel als vorinstallierte Anwendung auf einem VPS einrichten.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) mit einer [kompatiblen Distribution](https://www.ovhcloud.com/de/vps/os/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Wenn Sie schon über einen VPS verfügen und cPanel darauf installieren möchten, wählen Sie die Option "VPS reinstallieren" in Ihrem [OVHcloud Kundencenter](/links/manager) und dann ein [Betriebssystem, das mit cPanel kompatibel ist](https://www.ovhcloud.com/de/vps/os/).

> [!warning]
>
> Wenn Sie einen VPS reinstallieren, werden alle Daten darauf überschrieben.
>

Um Ihren cPanel Server zu installieren, bestellen Sie einen VPS mit cPanel Distribution.

![horizon](images/cpanel_order.png){.thumbnail}

Wenn Ihr VPS bereit ist, erhalten Sie eine E-Mail mit den Zugangsdaten, um sich mit Ihrem cPanel-Server zu verbinden, nach dem folgenden Schema:

```
 |    Your application(s):
 |    Application: cpanel
 |    You can connect to cPanel from https://<hostname>:2087/<session_parameters>
```

### Erste Verbindung

Wenn Sie die E-Mail mit Ihrem Zugriffslink erhalten haben, klicken Sie auf diesen Link, um die Erstkonfiguration durchzuführen. Sollte der Link bereits abgelaufen sein, loggen Sie sich [via SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) beim Server ein und führen Sie den Befehl `sudo whmlogin` aus, um einen neuen Link zu erstellen.

Die mit dem Befehl `sudo whmlogin` generierte URL erlaubt es Ihnen, sich ohne Login-Daten (Benutzer und Passwort) mit Ihrem WHM-Interface zu verbinden. WHM ist ein Server-Administrationstool das mit cPanel verwendet wird. Sie können auf cPanel zugreifen, nachdem Sie die folgenden Schritte ausgeführt haben.

#### Schritt 1: Lesen und akzeptieren der cPanel-Nutzungsbedingungen

Lesen und akzeptieren Sie die cPanel-Nutzungsbedingungen.

![horizon](images/license_validation.png){.thumbnail}

#### Schritt 2: Eingeben Ihrer E-Mail-Adresse sowie der vom VPS zu verwendenden Nameserver

![horizon](images/setup_config_cpanel.png){.thumbnail}

#### Schritt 3: Root-Passwort festlegen

![horizon](images/change_root.png){.thumbnail}

Ab sofort können Sie sich mit dem soeben festgelegten Passwort via SSH mit dem Root-Benutzer auf Ihrem Server einloggen.

### Einen cPanel-Account über das WHM-Interface erstellen

Wenn Sie in Ihrem WHM-Interface eingeloggt sind, klicken Sie auf `Create a New Account`{.action}, um einen cPanel-Account zu erstellen.

![cPanel](images/create_new_account.png){.thumbnail}

Füllen Sie das Formular aus und bestätigen Sie die Erstellung Ihres cPanel-Accounts.

![cPanel](images/create_new_account_form.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Go to cPanel`{.action} rechts in der Anzeige.

![cPanel](images/go_to_cpanel.png){.thumbnail}

Sie werden auf Ihr cPanel-Interface weitergeleitet.

![cPanel](images/manager_cpanel.png){.thumbnail}

Sie können nun cPanel verwenden. Weitere Informationen zu cPanel finden Sie in der [offiziellen Dokumentation](https://docs.cpanel.net/).

> [!primary]
>
> Geben Sie im Browser die folgenden URLs ein, um eine Verbindung herzustellen:
>
> - Zu cPanel: https&#58;//&#60;IP_V4&#62;:2083/ (Verwenden Sie die im WHM-Interface erstellten Zugangsdaten.)
> - Zu WHM: https&#58;//&#60;IP_V4&#62;:2087/ (Verwenden Sie den Root-Benutzernamen und das in der E-Mail zur Installationsbestätigung enthaltene Passwort oder das im WHM-Interface geänderte SSH-Passwort.)
>
> Ihre IPv4-Adresse finden Sie in der E-Mail, die Sie nach der Bestellung Ihres VPS mit der cPanel Distribution erhalten haben.
>

### Absicherung Ihrer Dienstleistung

Wir empfehlen Ihnen, ensprechende Maßnahmen zu ergreifen, um WHM und Ihren VPS zu sichern. Lesen Sie hierzu [die cPanel-Empfehlungen](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Wir empfehlen Ihnen außerdem unsere Anleitung [zum Sichern eines VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps), die Verwendung unserer [Backup-Lösungen](/products/bare-metal-cloud-virtual-private-servers) und das Konfigurieren der [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
