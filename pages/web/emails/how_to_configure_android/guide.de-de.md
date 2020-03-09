---
title: 'Konfiguration Ihrer E-Mail-Adresse in Android über die Gmail-App'
slug: konfiguration-android
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie Ihre MX Plan Adresse in Android über die Gmail-App einrichten.'
section: 'E-Mail Clients'
order: 8
---

**Stand 14.09.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden.

**Hier erfahren Sie, wie Sie Ihre MX Plan Adresse in Android über die Gmail-App einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder bei einem [OVH Webhosting](https://www.ovh.de/hosting/) enthalten).
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

![mxplan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse ein und klicken Sie auf `Weiter`{.action}.

Bei der Auswahl des Kontotyps empfehlen wir Ihnen, **IMAP** zu verwenden. Sie können auch **POP** auswählen: Hierbei werden Ihre E-Mails lokal in Ihrer Gmail-App gespeichert. Deswegen empfehlen wir, diese Option nicht auszuwählen, wenn Sie Ihre E-Mail-Adresse über verschiedene E-Mail-Clients nutzen möchten.

Geben Sie nun das Passwort Ihrer E-Mail-Adresse ein und tippen Sie dann auf `Weiter`{.action}.

![mxplan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Geben Sie die Einstellungen des Eingangsservers ein:

|Information|Beschreibung| 
|---|---| 
|Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|

Tippen Sie auf `Weiter`{.action} und geben Sie anschließend die Einstellungen des Ausgangsservers ein.

|Information|Beschreibung| 
|---|---| 
|Anmeldung erforderlich|Stellen Sie sicher, dass Sie diesen Button aktiviert haben.|
|Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|SMTP-Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|

Tippen Sie anschließend auf `Weiter`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![mxplan](images/configuration-gmail-application-android-step3.png){.thumbnail}

Legen Sie die Konto-Optionen fest und klicken Sie dann auf `Weiter`{.action}. Nun können Sie einen Namen für Ihren Account festlegen, um diesen von anderen in Ihrer App angezeigten Accounts zu unterscheiden. Außerdem können Sie den Anzeigenamen bestimmen, der wenn Sie E-Mails versenden als Absender angezeigt wird. Wenn Sie diese Einstellungen vorgenommen haben, tippen Sie auf `Weiter`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, dass der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unser MX Plan Angebot:

- **IMAP-Konfiguration**

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|SSL/TLS|993|
|Ausgangsserver|ssl0.ovh.net|SSL/TLS|465|

- **POP-Konfiguration**

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|SSL/TLS|995|
|Ausgangsserver|ssl0.ovh.net|SSL/TLS|465|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App](https://docs.ovh.com/de/emails-pro/konfiguration-android){.external}

[Konfiguration Ihres Exchange Accounts in Android über die Gmail-App](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_in_android/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.