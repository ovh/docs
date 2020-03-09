---
title: 'Konfiguration Ihrer E-Mail-Adresse auf Outlook 2016 für Mac'
slug: konfiguration-outlook-2016-mac
excerpt: 'So konfigurieren Sie Ihre MX Plan E-Mail-Adresse auf Outlook 2016 für Mac'
section: 'E-Mail Clients'
order: 4
---

**Stand 29.06.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf einem kompatiblen E-Mail-Client eingerichtet werden. So können Sie Ihre bevorzugte App für den Versand und den Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf Outlook 2016 für Mac einrichten.**

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [OVH Webhosting Angebot](https://www.ovh.de/hosting/){.external} enthalten).
- Die Microsoft Outlook-Anwendung ist auf Ihrem Mac installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Sie verwenden Outlook 2016 für Windows? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adresse auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails/konfiguration-outlook-2016/){.external}.
>

## Beschreibung

### Schritt 1: Account hinzufügen

Nachdem Sie die Outlook-Anwendung auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Tools`{.action} und anschließend auf `Konten`{.action}. Klicken Sie im angezeigten Fenster auf `+`{.action} und dann auf `Neues Konto`{.action}.

![mx plan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Geben Sie nun Ihre E-Mail-Adresse ein und klicken Sie anschließend auf `Weiter`{.action}. Wählen Sie aus den angezeigten Anbietern `IMAP/POP`{.action} aus und geben Sie die angeforderten Informationen ein.

|Information|Beschreibung|
|---|---|
|Kontotyp|Wir empfehlen, die Standardauswahl **IMAP** zu verwenden. Sie können auch **POP** im Drop-down-Menü auswählen (dann werden Ihre E-Mails lokal in Ihrer Outlook-Anwendung gespeichert).|
|E-Mail-Adresse|Geben Sie einen Namen für diesen Account ein, damit Sie ihn später von anderen Accounts in Ihrer Outlook-App unterscheiden können.|
|Benutzername|Geben Sie die vollständige E-Mail-Adresse ein.|
|Kennwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Eingangsserver|Tragen Sie den Server „ssl0.ovh.net“ ein. Lassen Sie den Haken bei **Für Verbindung SSL verwenden** gesetzt.|
|Eingangsport|Tragen Sie den Port „993“ ein.|
|Ausgangsserver|Tragen Sie den Server „ssl0.ovh.net“ ein. Lassen Sie den Haken bei **Für Verbindung SSL verwenden** gesetzt.|
|Ausgangsport|Tragen Sie den Port „465“ ein.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Konto hinzufügen`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![mx plan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

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

[Konfiguration von E-Mail Pro auf Outlook 2016 für Mac](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016-mac)

[Konfiguration von Exchange auf Outlook 2016 für Mac](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-outlook-2016-mac)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.