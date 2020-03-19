---
title: 'Konfiguration von E-Mail Pro auf Outlook 2016 für Windows'
slug: konfiguration-outlook-2016
excerpt: 'So konfigurieren Sie Ihren E-Mail Pro Account auf Outlook 2016 für Windows'
section: 'Konfiguration des E-Mail-Clients'
order: 1
---

**Letzte Aktualisierung am 18.03.2020**

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem von Ihnen bevorzugten Gerät aus verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren E-Mail Pro Account auf Outlook 2016 für Windows einrichten.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

## Voraussetzungen

- Sie besitzen ein [E-Mail Pro](https://www.ovh.de/emails/email-pro) Angebot.
- Die Microsoft Outlook-Anwendung ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Sie verwenden Outlook 2016 für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration von E-Mail Pro auf Outlook 2016 für Mac](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016-mac/){.external}
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

Nachdem Sie die Outlook-Anwendung auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

![E-Mail Pro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse an und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie einen Haken in dem sich öffnenden Feld `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}. Wählen Sie aus den verschiedenen Kontotypen **IMAP** aus.

![E-Mail Pro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Geben Sie anschließend die geforderten Informationen ein.

- **Eingehende E-Mail:**

|Information|Beschreibung|
|---|---|
|Server|Tragen Sie „pro**X**.mail.ovh.net“ ein.|
|Port|Tragen Sie den Port „993“ ein.|
|Verschlüsselungsmethode|Wählen Sie „SSL/TLS“ aus.|
|Authentifizierung einrichten|Setzen Sie keinen Haken bei „Anmeldung mithilfe der gesicherten Kennwortauthentifizierung (SPA) erforderlich“.|

- **Ausgehende E-Mail:**

|Information|Beschreibung|
|---|---|
|Server|Tragen Sie „pro**X**.mail.ovh.net“ ein.|
|Port|Tragen Sie den Port „587“ ein.|
|Verschlüsselungsmethode|Wählen Sie „STARTTLS“ aus.|
|Authentifizierung einrichten|Setzen Sie keinen Haken bei „Anmeldung mithilfe der gesicherten Kennwortauthentifizierung (SPA) erforderlich“.|

Nachdem Sie die Informationen angegeben haben, klicken Sie auf `Weiter`{.action} und geben Sie das **Kennwort** für Ihre E-Mail-Adresse ein. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![E-Mail Pro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung:

|Servertyp|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingangsserver|pro**X**.mail.ovh.net|SSL/TLS|993|
|Ausgangsserver|pro**X**.mail.ovh.net|STARTTLS|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/). Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails/konfiguration-outlook-2016/){.external}

[Konfiguration von Exchange auf Outlook 2016 für Windows](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-outlook-2016/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.