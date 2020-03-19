---
title: 'Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App'
slug: konfiguration-android
excerpt: 'Erfahren Sie hier, wie Sie Ihren E-Mail Pro Account in Android über die Gmail-App einrichten'
section: 'Konfiguration des E-Mail-Clients'
order: 5
---

**Letzte Aktualisierung am 18.03.2020**

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Diese Anleitung erklärt, wie Sie Ihren E-Mail Pro Account in Android über die Gmail-App einrichten.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

## Voraussetzungen

- Sie besitzen ein [E-Mail Pro](https://www.ovh.de/emails/email-pro/) Angebot.
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde über ein Nexus-6-Gerät mit Android Version 7.1.1 erstellt. Aus Konsistenzgründen verwenden wir die Gmail-App, die über den Google Play Store heruntergeladen werden kann. Wenn Sie eine andere App verwenden möchten, kann sich die Vorgehensweise dementsprechend unterscheiden.
>

## In der praktischen Anwendung

### Schritt 1: Account hinzufügen

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**X**.mail.ovh.net. Das „X“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager), wenn Sie im Bereich `Web`{.action} im Menü links unter `E-Mail Pro`{.action}
> den Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

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
|Server|Tragen Sie „pro**X**.mail.ovh.net“ ein.|

Tippen Sie auf `Weiter`{.action} und geben Sie anschließend die Einstellungen des Ausgangsservers ein.

|Information|Beschreibung| 
|---|---| 
|Anmeldung erforderlich|Stellen Sie sicher, dass Sie diesen Button aktiviert haben.|
|Nutzername|Geben Sie die vollständige E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|SMTP-Server|Tragen Sie „pro**X**.mail.ovh.net“ ein.|

Tippen Sie anschließend auf `Weiter`{.action}. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

![e-mail pro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Legen Sie die Konto-Optionen fest und klicken Sie dann auf `Weiter`{.action}. Nun können Sie einen Namen für Ihren Account festlegen, um diesen von anderen in Ihrer App angezeigten Accounts zu unterscheiden. Außerdem können Sie den Anzeigenamen bestimmen, der wenn Sie E-Mails versenden als Absender angezeigt wird. Wenn Sie diese Einstellungen vorgenommen haben, tippen Sie auf `Weiter`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, dass der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung.

|Servertyp|Servername|Sicherheitstyp|Port|
|---|---|---|---|
|Eingangsserver|pro**X**.mail.ovh.net|SSL/TLS|993|
|Ausgangsserver|pro**X**.mail.ovh.net|STARTTLS|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/). Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.


## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot in Android über die Gmail-App](https://docs.ovh.com/de/emails/konfiguration-android)

[Konfiguration Ihres Exchange Accounts in Android über die Gmail-App](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_in_android/)

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.