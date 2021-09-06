---
title: 'OpenVPN Server einrichten'
slug: openvpn
excerpt: 'Erfahren Sie hier, wie Sie einen OpenVPN Server auf einem VPS installieren'
section: 'Fortgeschrittene Nutzung'
hidden: true
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 24.06.2021**

## Ziel

OpenVPN ist eine Anwendung, die Ihnen ermöglicht, ein virtuelles privates Netzwerk (VPN) zu erstellen. Mit dem OVHcloud VPS Template für OpenVPN Server können Sie Ihren persönlichen VPN Dienst in wenigen Schritten installieren und verwenden.

**Diese Anleitung erklärt, wie Sie Ihren eigenen VPN Dienst mit einem VPS und OpenVPN erstellen.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### OpenVPN Server installieren

> [!primary]
>
Wenn Sie einen bestehenden VPS verwenden möchten, können Sie dies über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erreichen, indem Sie den Dienst [mit dem OpenVPN Template reinstallieren](../erste-schritte-mit-einem-vps/#reinstallvps).
>

Bestellen Sie Ihren VPS auf der [Produktseite](https://www.ovhcloud.com/de/vps/). Klicken Sie bei der Image-Auswahl auf `Distribution mit Anwendung`{.action} und dann auf `OpenVPN`{.action} als Betriebssystem.

![VPS Bestellung](images/order_vps.png){.thumbnail}

Sobald Ihr VPS installiert ist, erhalten Sie eine E-Mail mit Ihren Login-Daten.

![Installationsmail](images/opencredent2.png){.thumbnail}

Ihr VPN Server ist nun bereit. Um sich einzuloggen, klicken Sie auf den Link in der Installationsmail, die das OpenVPN Client Webinterface öffnet. Geben Sie Ihre OpenVPN-Logindaten aus derselben E-Mail ein.

![Verbindungsseite](images/login_user.png){.thumbnail}

### Installation und Verwendung des OpenVPN Clients

#### Mit Windows

Wählen Sie im OpenVPN Client Webinterface das `Windows-Symbol`{.action} aus.

![Benutzer-Interface](images/windows_client.png){.thumbnail}

Speichern und öffnen Sie die `.msi`-Datei.

Sobald die Client-Anwendung installiert ist, können Sie sie über das Windows-Menü oder über die Taskleiste starten.

![WinApp](images/win_launch.png){.thumbnail}

Loggen Sie sich mit Ihrer OpenVPN Kennung ein, die Sie in der Installationsmail erhalten haben.

![Windows-Verbindung](images/win_login.png){.thumbnail}

Sie können ab sofort mit der IP-Adresse Ihres VPN das Internet nutzen.

Um Ihre IP-Adresse zu überprüfen, gehen Sie auf die Seite [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Mit Linux

##### **OpenVPN Client installieren**

Um den Kunden für Distributionen vom Typ Fedora/CentOS/RedHat zu installieren:

```sh
sudo yum install openvpn
```

Um den Kunden für Ubuntu/Debian Distributionen zu installieren:

```sh
sudo apt-get install openvpn
```

Laden Sie auch die Konfigurationsdatei `client.ovpn` über das OpenVPN Client Webinterface herunter.

![Benutzer-Interface](images/ovpn.png){.thumbnail}

##### **Den OpenVPN Client mit Ihrer Konfigurationsdatei starten**

```sh
sudo openvpn --config client.ovpn
```

Sie werden aufgefordert, Ihre Zugangsdaten einzugeben:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: *******************
```

Sie können ab sofort mit der IP-Adresse Ihres VPN das Internet nutzen.

Um Ihre IP-Adresse zu überprüfen, gehen Sie auf die Seite [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### Mit MacOS

Wählen Sie nach der Verbindung das `Apple-Symbol`{.action} aus.

![Benutzer-Interface](images/mac_client.png){.thumbnail}

Speichern und öffnen Sie die Datei.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Loggen Sie sich mit Ihren OpenVPN-Logindaten ein, die Sie in der Installationsmail erhalten haben.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

Sie können ab sofort mit der IP-Adresse Ihres VPN das Internet nutzen.

Um Ihre IP-Adresse zu überprüfen, gehen Sie auf die Seite [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Zugang zu Ihrem OpenVPN Server

Klicken Sie im OpenVPN Client Webinterface (über die in der Installationsmail enthaltene URL erreichbar) auf den Button `Admin`{.action}.

![Benutzer-Interface](images/admin_button.png){.thumbnail}

Sie können auch `admin` zur OpenVPN-URL hinzufügen, um direkt auf die Loginseite zuzugreifen:

```sh
https://IP_of_your_VPS:943/admin
```

Loggen Sie sich mit den OpenVPN-Logindaten ein, die Sie per E-Mail erhalten haben, und akzeptieren Sie die Nutzungsbedingungen.

Sie haben nun Zugriff auf das Konfigurationspanel des OpenVPN Servers.

![OpenVPN Server](images/admin_access.png){.thumbnail}

## Weiterführende Informationen

[Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/)

[OpenVPN](https://openvpn.net/)

Kommen Sie zu unserer User Community auf <https://community.ovh.com/>dem