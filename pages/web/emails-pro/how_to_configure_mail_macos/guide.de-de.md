---
title: Anleitung zur Konfiguration von E-Mail Pro auf macOS Mail
slug: email-pro-auf-macos-konfigurieren
excerpt: Hier erfahren Sie, wie Sie Ihren E-Mail Pro Account auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten
section: Konfiguration des E-Mail-Clients
---

**Stand 19.02.2018**

## Einleitung

E-Mail Pro Accounts können auch auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre bevorzugte App für Ihre E-Mail-Adressen verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren E-Mail Pro Account auf der Mail App von macOS El Capitan, Sierra und High Sierra einrichten.**

## Voraussetzungen

- Sie besitzen ein [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external} Angebot.
- Die Mail App ist auf Ihrem Gerät installiert
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

![e-mail pro](images/configuration-mail-sierra-step1.png){.thumbnail}

Geben Sie Ihre Account-Daten ein:

|Information|Beschreibung|  
|---|---|  
|Name|Geben Sie den Namen ein, der als Absender angezeigt werden soll, wenn E-Mails von dieser Adresse aus versendet werden.| 
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.| 
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|  

Klicken Sie auf `Anmelden`{.action}. Es erscheint eine Nachricht, die Sie auffordert, fortzufahren und anschließend weitere Informationen einzugeben.

|Information|Beschreibung|  
|---|---|  
|Accounttyp|Lassen Sie IMAP im Drop-down-Menü ausgewählt.| 
|Server für eintreffende E-Mails|Geben Sie den Server *pro1.mail.ovh.net* ein.| 
|Server für ausgehende E-Mails|Geben Sie den Server *pro1.mail.ovh.net* ein.|  

Klicken Sie erneut auf `Anmelden`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![e-mail pro](images/configuration-mail-sierra-step2.png){.thumbnail}

Stellen Sie sicher, dass Sie bei der Wahl der Anwendungen `Mail`{.action} ausgewählt lassen, damit die App den Account verwenden kann. Klicken Sie anschließend auf `Fertig`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, dass der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung.

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Für eintreffende E-Mails|pro1.mail.ovh.net|Ja|993|
|Für ausgehende E-Mails|pro1.mail.ovh.net|Ja|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/){.external} ist verfügbar unter [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.