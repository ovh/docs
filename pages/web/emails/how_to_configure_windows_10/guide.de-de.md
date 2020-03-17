---
title: 'Konfiguration Ihrer E-Mail-Adresse auf der Windows 10 Mail App'
slug: mail-konfiguration-windows-10
excerpt: 'Hier erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf der Mail App von Windows 10 einrichten'
section: 'E-Mail Clients'
order: 4
---

**Stand 29.06.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre bevorzugte App für den Versand und den Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf der Mail App von Windows 10 einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [OVH Webhosting Angebot](https://www.ovh.de/hosting/){.external} enthalten).
- Die Mail App ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

## Beschreibung

### Schritt 1: Account hinzufügen

Nachdem Sie die Mail App auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die App zum ersten Mal starten**, öffnet sich ein Fenster mit der Option `Konto hinzufügen`{.action}.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie im linken Menü der Anwendung auf `Konten verwalten`{.action} und im daraufhin rechts angezeigten Menü auf `Konto hinzufügen`{.action}.

![mx plan](images/configuration-mail-windows-step1.png){.thumbnail}

Klicken Sie im nächsten Fenster auf `Erweitertes Setup`{.action} und wählen Sie `Internet E-Mail`{.action} als Kontotyp aus.

Geben Sie nun folgende Informationen ein:

|Information|Beschreibung|
|---|---|
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.|
|Benutzername|Geben Sie die vollständige E-Mail-Adresse ein.|
|Kennwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Kontoname|Geben Sie einen Namen für diesen Account ein, damit Sie ihn später von anderen Accounts in der Mail App unterscheiden können.|
|Sendet Ihre Nachrichten unter diesem Namen|Geben Sie den Namen an, der als Absender angezeigt werden soll, wenn E-Mails mit dieser Adresse verschickt werden.|
|Posteingangsserver|Geben Sie den Server „ssl0.ovh.net:993“ ein.|
|Kontotyp|Wir empfehlen die Verwendung von **IMAP4**. Sie können auch **POP** im Drop-down-Menü auswählen (dann werden Ihre E-Mails lokal in Ihrer Mail App gespeichert).|
|Postausgangsserver|Geben Sie den Server „ssl0.ovh.net:465“ ein.|

Überprüfen Sie, dass die folgenden Haken gesetzt sind:

- „Ausgangsserver erfordert Authentifizierung“
- „Benutzernamen und Kennwort auch zum Senden von E-Mail verwenden“
- „SSL für eingehende E-Mails erforderlich“
- „SSL für ausgehende E-Mails erforderlich“

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Anmelden`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![mx plan](images/configuration-mail-windows-step2.png){.thumbnail}

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unser MX Plan Angebot:

- **IMAP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|Ja|993|
|Ausgangsserver|ssl0.ovh.net|Ja|465|

- **POP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|Ja|995|
|Ausgangsserver|ssl0.ovh.net|Ja|465|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.
 
## Weiterführende Informationen


[Konfiguration von E-Mail Pro auf der Windows Mail App](https://docs.ovh.com/de/emails-pro/mail-konfiguration-windows-10/)

[Konfiguration von Exchange auf der Windows Mail App](https://docs.ovh.com/de/microsoft-collaborative-solutions/mail-konfiguration-windows-10/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.