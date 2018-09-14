---
title: 'Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App'
slug: konfiguration-android
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie Ihren E-Mail Pro Account in Android über die Gmail-App einrichten.'
section: 'Konfiguration des E-Mail-Clients'
---

**Stand 14.09.2018**

## Einleitung

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Hier erfahren Sie, wie Sie Ihren E-Mail Pro Account in Android über die Gmail-App einrichten.**

## Voraussetzungen

- Sie besitzen ein [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external} Angebot.
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde über ein Nexus-6-Gerät mit Android Version 7.1.1 erstellt. Aus Konsistenzgründen verwenden wir die Gmail-App, die über den Google Play Store heruntergeladen werden kann. Wenn Sie eine andere App verwenden möchten, kann sich die Vorgehensweise dementsprechend unterscheiden.
>

## Beschreibung

### Schritt 1: Account hinzufügen

Tippen Sie auf dem Bildschirm Ihres Geräts auf die `Gmail`{.action}-App. Es gibt zwei Möglichkeiten, um Ihren Account hinzuzufügen:

- **Wenn noch kein Account eingerichtet ist**: Tippen Sie sich durch das Willkommensfenster und dann auf `E-Mail-Adresse hinzufügen`{.action}. Wählen Sie anschließend `Sonstige`{.action} aus. 

- **Wenn bereits ein Account eingerichtet ist**: Tippen Sie oben links auf das Icon mit den drei Strichen, dann auf das Pfeilsymbol rechts neben dem bereits eingerichteten Account. Tippen Sie anschließend auf `Konto hinzufügen`{.action} und wählen Sie `Sonstige`{.action} aus. 

![e-mail pro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse ein und klicken Sie auf `Weiter`{.action}.

Wählen Sie bei der Auswahl des Kontotyps **IMAP** aus und geben Sie dann das Passwort Ihrer E-Mail-Adresse ein. Klicken Sie auf `Weiter`{.action}, um mit der Konfiguration fortzufahren.

![e-mail pro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Geben Sie die Einstellungen des Eingangsservers ein:

|Information|Beschreibung| 
|---|---| 
|Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Server|Geben Sie den Server „pro1.mail.ovh.net“ ein.|

Tippen Sie auf `Weiter`{.action} und geben Sie anschließend die Einstellungen des Ausgangsservers ein.

|Information|Beschreibung| 
|---|---| 
|Anmeldung erforderlich|Stellen Sie sicher, dass Sie diesen Button aktiviert haben.|
|Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|SMTP-Server|Geben Sie den Server „pro1.mail.ovh.net“ ein.|

Tippen Sie anschließend auf `Weiter`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![e-mail pro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Legen Sie die Konto-Optionen fest und klicken Sie dann auf `Weiter`{.action}. Nun können Sie einen Namen für Ihren Account festlegen, um diesen von anderen in Ihrer App angezeigten Accounts zu unterscheiden. Außerdem können Sie den Anzeigenamen bestimmen, der wenn Sie E-Mails versenden als Absender angezeigt wird. Wenn Sie diese Einstellungen vorgenommen haben, tippen Sie auf `Weiter`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, dass der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung.

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|pro1.mail.ovh.net|SSL/TLS|993|
|Ausgangsserver|pro1.mail.ovh.net|STARTTLS|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/){.external} ist verfügbar unter [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot in Android über die Gmail-App](https://docs.ovh.com/de/emails/konfiguration-android){.external}

[Konfiguration Ihres Exchange Accounts in Android über die Gmail-App](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_in_android/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.