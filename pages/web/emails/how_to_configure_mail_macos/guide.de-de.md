---
title: 'Konfiguration Ihrer E-Mail-Adresse auf macOS Mail'
slug: anleitung-mail-konfiguration-auf-macos
excerpt: 'Hier erfahren Sie, wie Sie eine MX Plan Adresse auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten.'
section: 'E-Mail Clients'
order: 6
---

**Stand 27.06.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre bevorzugte App für den Versand und den Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder bei einem [OVH Webhosting](https://www.ovh.de/hosting/){.external} enthalten).
- Die Mail App ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung gilt für folgende macOS Versionen: El Capitan, Sierra, High Sierra.
>

## Beschreibung

Es gibt zwei Möglichkeiten, um Ihre E-Mail-Adresse zur Mail App hinzuzufügen:

- **In nur wenigen Klicks über unser Apple Devices Tool**: Klicken Sie auf den Link [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} und folgen Sie den Konfigurationsschritten.

- **Folgen Sie dem Konfigurationsassistenten der Mail App**: Starten Sie die Mail App auf Ihrem Gerät.

Die vorliegende Anleitung beschreibt von hier an nur die Konfiguration über die Mail App.

### Schritt 1: Account hinzufügen

Nachdem Sie die Mail App auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die App zum ersten Mal starten**, öffnet sich ein Fenster, in dem Sie einen Anbieter für Ihren E-Mail-Account auswählen können. Wählen Sie `Anderen Mail-Account hinzufügen`{.action} und fahren Sie fort.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie auf `Mail`{.action} am oberen Rand Ihres Bildschirms und anschließend auf `Account hinzufügen`{.action}. Wählen Sie `Anderen Mail-Account hinzufügen`{.action} und fahren Sie fort.

![mx plan](images/configuration-mail-macos-step1.png){.thumbnail}

Geben Sie Ihre Account-Daten ein:

|Information|Beschreibung|
|---|---|
|Name|Geben Sie die vollständige E-Mail-Adresse ein.|
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|

Klicken Sie auf `Anmelden`{.action}. Es erscheint eine Nachricht, die Sie auffordert, fortzufahren und anschließend weitere Informationen einzugeben.

|Information|Beschreibung|
|---|---|
|Accounttyp|Wir empfehlen, die Standardauswahl **IMAP** zu verwenden. Sie können auch **POP** im Drop-down-Menü auswählen (dann werden Ihre E-Mails lokal in Ihrer Outlook-Anwendung gespeichert).|
|Server für eintreffende E-Mails|Geben Sie den Server "ssl0.ovh.net" ein.|
|Server für ausgehende E-Mails|Geben Sie den Server "ssl0.ovh.net" ein.|

Klicken Sie erneut auf `Anmelden`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![mx plan](images/configuration-mail-macos-step2.png){.thumbnail}

Stellen Sie sicher, dass Sie bei der Wahl der Anwendungen `Mail`{.action} ausgewählt lassen, damit die App den Account verwenden kann. Klicken Sie anschließend auf `Fertig`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unser MX Plan Angebot:

- **IMAP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Für eintreffende E-Mails|ssl0.ovh.net|Ja|993|
|Für ausgehende E-Mails|ssl0.ovh.net|Ja|465| 

- **POP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Für eintreffende E-Mails|ssl0.ovh.net|Ja|995|
|Für ausgehende E-Mails|ssl0.ovh.net|Ja|465|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter [https://www.ovh.de/mail/](https://www.ovh.de/mail/){.external}. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.