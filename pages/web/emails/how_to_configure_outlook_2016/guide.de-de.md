---
title: 'Konfiguration Ihrer E-Mail-Adresse auf Outlook 2016 für Windows'
slug: konfiguration-outlook-2016
excerpt: 'So konfigurieren Sie Ihre MX Plan E-Mail-Adresse auf Outlook 2016 für Windows'
section: 'E-Mail Clients'
order: 3
---

**Stand 29.06.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre bevorzugte App für den Versand und den Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf Outlook 2016 für Windows einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [OVH Webhosting Angebot](https://www.ovh.de/hosting/){.external} enthalten).
- Die Microsoft Outlook-Anwendung ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.


> [!primary] 
>
> Sie verwenden Outlook 2016 für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adresse auf Outlook 2016 für Mac](https://docs.ovh.com/de/emails/konfiguration-outlook-2016-mac/){.external}.
>

## Beschreibung

### Schritt 1: Account hinzufügen

Nachdem Sie die Outlook-Anwendung auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

![mx plan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse an und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie einen Haken in dem sich öffnenden Feld `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}.

Wählen Sie aus den verschiedenen Kontotypen **IMAP** oder **POP** aus. Wir empfehlen die Verwendung von **IMAP**. Wenn Sie **POP** auswählen, werden Ihre E-Mails lokal in Outlook gespeichert.

![mx plan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Geben Sie anschließend die geforderten Informationen ein.

- **Eingehende E-Mail:**

|Information|Beschreibung|
|---|---|
|Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Port|Tragen Sie den Port „993“ ein.|
|Verschlüsselungsmethode|Wählen Sie „SSL/TLS“ aus.|
|Authentifizierung einrichten|Setzen Sie keinen Haken bei „Anmeldung mithilfe der gesicherten Kennwortauthentifizierung (SPA) erforderlich“.|

- **Ausgehende E-Mail:**

|Information|Beschreibung|
|---|---|
|Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Port|Tragen Sie den Port „465“ ein.|
|Verschlüsselungsmethode|Wählen Sie „SSL/TLS“ aus.|
|Authentifizierung einrichten|Setzen Sie keinen Haken bei „Anmeldung mithilfe der gesicherten Kennwortauthentifizierung (SPA) erforderlich“.|

Nachdem Sie die Informationen angegeben haben, klicken Sie auf `Weiter`{.action} und geben Sie das **Kennwort** für Ihre E-Mail-Adresse ein. Wenn Ihre Angaben korrekt sind, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![mx plan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unser MX Plan Angebot:

- **IMAP-Konfiguration**

|Servertyp|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|SSL/TLS|993|
|Ausgangsserver|ssl0.ovh.net|SSL/TLS|465|

- **POP-Konfiguration**

|Servertyp|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|SSL/TLS|995|
|Ausgangsserver|ssl0.ovh.net|SSL/TLS|465|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Eine OVH Webanwendung, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.


## Weiterführende Informationen

[Konfiguration von E-Mail Pro auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016/){.external}

[Konfiguration von Exchange auf Outlook 2016 für Windows](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-outlook-2016/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.