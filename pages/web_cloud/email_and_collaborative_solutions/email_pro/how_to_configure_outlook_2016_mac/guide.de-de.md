---
title: 'Email Pro - Konfigurieren Sie Ihr E-Mail-Konto in Outlook für macOS'
excerpt: 'So konfigurieren Sie Ihren E-Mail Pro Account auf Outlook für Mac'
updated: 2020-03-18
---

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem von Ihnen bevorzugten Gerät aus verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren E-Mail Pro Account auf Outlook für Mac einrichten.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

## Voraussetzungen

- Sie besitzen ein [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/) Angebot.
- Die Microsoft Outlook-Anwendung ist auf Ihrem Mac installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Sie verwenden Outlook für Windows? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adresse auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016){.external}
>

## In der praktischen Anwendung

### Schritt 1: Account hinzufügen

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**?**.mail.ovh.net. Das „?“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Nachdem Sie die Outlook-Anwendung auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Tools`{.action} und anschließend auf `Konten`{.action}. Klicken Sie im angezeigten Fenster auf `+`{.action} und anschließend auf `Neues Konto`{.action}.

![E-Mail Pro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Klicken Sie nun auf Ihre E-Mail-Adresse und dann auf `Weiter`{.action}. Aus den angezeigten Anbietern wählen Sie `IMAP/POP`{.action} aus.

|Information|Beschreibung|
|---|---|
|Kontotyp|Lassen Sie die Standardauswahl **IMAP** eingestellt.|
|E-Mail-Adresse|Geben Sie einen Namen für diesen Account ein, damit Sie ihn später von anderen Accounts in Ihrer Outlook-App unterscheiden können.|
|Benutzername|Geben Sie die vollständige E-Mail-Adresse ein.|
|Kennwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Eingangsserver|Tragen Sie „pro**?**.mail.ovh.net“ ein. Lassen Sie den Haken bei **Für Verbindung SSL verwenden** gesetzt.|
|Eingangsport|Tragen Sie den Port „993“ ein.|
|Ausgangsserver|Tragen Sie „pro**?**.mail.ovh.net“ ein. Lassen Sie den Haken bei **Für Verbindung SSL verwenden** gesetzt.|
|Ausgangsport|Tragen Sie den Port „587“ ein.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Konto hinzufügen`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![E-Mail Pro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung.

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|pro**?**.mail.ovh.net|Ja|993|
|Ausgangsserver|pro**?**.mail.ovh.net|Ja|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung mit [kollaborativen Funktionen](https://www.ovhcloud.com/de/emails/). Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot auf Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)

[Konfiguration von Exchange auf Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
