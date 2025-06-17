---
title: Plesk auf einer Public Cloud Instanz installieren
excerpt: Erfahren Sie hier, wie Sie Plesk auf Ihrer Public Cloud Instanz einrichten
updated: 2025-04-08
---

## Ziel

Plesk ist ein einfach zu verwendendes Server-Verwaltungsinterface. Sie können es auf Ihren OVHcloud Public Cloud Instanzen einrichten und verwenden.

**Diese Anleitung erklärt, wie Sie Plesk auf Ihrer Public Cloud Instanz installieren.** 

> [!warning]
> 
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](/links/partner) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](/links/community) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- Sie haben [administrativen Zugriff](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance).

## In der praktischen Anwendung

### Schritt 1: Plesk installieren

Plesk kann über eine SSH-Verbindung installiert werden. Laden Sie hierzu das Plesk-Installationsskript herunter und starten Sie dieses mit dem für Sie passenden Befehl:

> [!primary]
>
> Je nach dem OS Ihrer Instanz ist der Befehl sudo allein möglicherweise nicht ausreichend. Wenn Sie auf einen Fehler stoßen, wechseln Sie in den Superuser-Modus, bevor Sie die Installation starten:
>
> <pre class="highlight language-console"><code class="language-console">sudo su</code></pre>
>

- **Nicht angepasste Standardinstallation von Plesk**

```bash
sudo sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Angepasste Installation von Plesk**

```bash
sudo sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Warten Sie, bis Plesk fertig installiert ist. 

### Schritt 2: Die Konfiguration abschließen und eine Lizenz hinzufügen

Nach Abschluss der Installation zeigt die Befehlszeile (CLI) die nachfolgenden Informationen an.

- Zwei generierte URLs:
    - Eine enthält die IP-Adresse des Servers (in HTTPS mit einem selbstsignierten SSL-Zertifikat, das in einigen Browsern eine Sicherheitswarnung auslösen kann).
    - Die andere enthält eine Plesk Domain (per HTTPS mit einem signierten SSL Zertifikat ohne Sicherheitswarnung).
    - Beide sind sicher, die zweite sollte jedoch bevorzugt verwendet werden.
- Eine Nachricht mit folgendem Inhalt: "Sie können sich auch als 'root' mit Ihrem 'root'-Passwort anmelden." Standardmäßig wird jedoch kein Root-Passwort generiert. Bei Bedarf können Kunden [diese Anleitung](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) befolgen, um den Root-Benutzer zu aktivieren und ein Passwort festzulegen.

Befolgen Sie die Anweisungen der Bildschirmausgabe, um die Installation abzuschließen.

![plesk configuration](images/plesk_configuration.png){.thumbnail}

Um Ihre Plesk Lizenz hinzuzufügen, benötigen Sie den Schlüssel, den Sie von Ihrem Anbieter erhalten haben.

> [!primary]
>
> Wir bieten keine Plesk Lizenzen für unsere Public Cloud an. Sie können jedoch eine Lizenz von der Website von [Plesk](https://www.plesk.com/) beziehen.
> 

Sie möchten Ihre Lizenz ändern, etwa um einen Testschlüssel zu ersetzen oder um das Angebot zu wechseln? Öffnen Sie in der Plesk Benutzeroberfläche den Bereich `Tools & Settings`{.action}. Im Abschnitt **Plesk** wählen Sie dann `License information`{.action}.


## Weiterführende Informationen

[Offizielle Plesk Dokumentation](https://docs.plesk.com/de-DE/obsidian/)

Treten Sie unserer [User Community](/links/community) bei.
