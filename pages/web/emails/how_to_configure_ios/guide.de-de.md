---
title: 'Konfiguration Ihrer E-Mail-Adresse auf iPhone oder iPad'
slug: mail-konfiguration-iphone-ios-91
excerpt: 'Hier erfahren Sie, wie Sie eine MX Plan Adresse auf iPhone oder iPad einrichten.'
section: 'E-Mail Clients'
order: 7
---

**Stand 27.06.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf verschiedenen, kompatiblen E-Mail-Clients und -Applikationen eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie eine MX Plan Adresse auf iPhone oder iPad einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder bei einem [OVH Webhosting](https://www.ovh.de/hosting/){.external} enthalten).
- Die Mail App ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung gilt für folgende iOS-Versionen: iOS 7 und neuere Versionen.
>

## Beschreibung

Es gibt zwei Möglichkeiten, um Ihre E-Mail-Adresse zur Mail App hinzuzufügen:

- **In nur wenigen Klicks über unser Apple Devices Tool**: Klicken Sie auf den Link <https://autodiscover.mail.ovh.net/AppleDevices/> und folgen Sie den Konfigurationsschritten.

- **Folgen Sie dem Konfigurationsassistenten Ihres Geräts**.

Die vorliegende Anleitung beschreibt von hier an nur die Konfiguration über Ihr Gerät.

### Schritt 1: Account hinzufügen

Tippen Sie auf dem Bildschirm Ihres Gerätes auf `Einstellungen`{.action}. Abhängig von Ihrer iOS-Version gibt es zwei Möglichkeiten, um den Account hinzuzufügen:

- **bei iOS 7, 8, 9 und 10**: Gehen Sie auf `Mail, Kontakte, Kalender`{.action} und dann auf `Accounts`{.action} und `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}.

- **bei iOS 11**: Gehen Sie auf `Accounts und Passwörter`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}.

![Exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Geben Sie Ihre Account-Daten ein:

|Information|Beschreibung|
|---|---|
|Name|Geben Sie den Namen ein, der als Absender angezeigt werden soll, wenn E-Mails von dieser Adresse aus versendet werden.|
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Beschreibung|Geben Sie einen Namen für diesen Account ein, damit Sie ihn später von anderen Accounts in der Mail App unterscheiden können.|

Tippen Sie nun auf `Weiter`{.action} und geben Sie dann die folgenden Informationen ein:

|Information|Beschreibung| 
|---|---| 
|IMAP oder POP|Wir empfehlen, die Standardauswahl **IMAP** zu verwenden. Sie können auch **POP** auswählen (dann werden Ihre E-Mails lokal in Ihrer Mail-Applikation gespeichert).|
|Hostname (eintreffende Mails)|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Benutzername (eintreffende Mails)|Geben Sie die vollständige E-Mail-Adresse ein.|
|Passwort (eintreffende Mails)|Geben Sie das Passwort der E-Mail-Adresse ein.|  
|Hostname (ausgehende Mails)|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Benutzername (ausgehende Mails)|Geben Sie die vollständige E-Mail-Adresse ein.|
|Passwort (ausgehende Mails)|Geben Sie das Passwort der E-Mail-Adresse ein.| 

Tippen Sie nun auf `Weiter`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![Exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Stellen Sie sicher, dass Sie bei der Wahl der Anwendungen `Mail`{.action} ausgewählt lassen, damit die App den Account verwenden kann. Klicken Sie anschließend auf `Sichern`{.action}.

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

Eine OVH Webanwendung, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.