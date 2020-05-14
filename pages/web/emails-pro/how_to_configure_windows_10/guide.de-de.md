---
title: 'Konfiguration von E-Mail Pro auf der Windows 10 Mail App'
slug: mail-konfiguration-windows-10
excerpt: 'Erfahren Sie hier, wie Sie Ihren E-Mail Pro Account auf der Mail App von Windows 10 einrichten'
section: 'Konfiguration des E-Mail-Clients'
order: 7
---

**Letzte Aktualisierung am 18.03.2020**

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem von Ihnen bevorzugten Gerät aus verwenden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren E-Mail Pro Account auf der Mail App von Windows 10 einrichten.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über eine [E-Mail Pro](https://www.ovh.de/emails/email-pro) Lösung.
- Die Mail App ist auf Ihrem Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

## In der praktischen Anwendung

### Schritt 1: Account hinzufügen

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**X**.mail.ovh.net. Das „X“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager), wenn Sie im Bereich `Web`{.action} im Menü links unter `E-Mail Pro`{.action}
> den Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Nachdem Sie die Mail App auf Ihrem Gerät gestartet haben, können Sie einen Account auf zwei Arten hinzufügen:

- **Wenn Sie die App zum ersten Mal starten**, öffnet sich ein Fenster mit der Option `Konto hinzufügen`{.action}.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie im linken Menü der Anwendung auf `Konten verwalten`{.action} und im daraufhin rechts angezeigten Menü auf `Konto hinzufügen`{.action}.

![E-Mail Pro](images/configuration-mail-windows-step1.png){.thumbnail}

Klicken Sie im nächsten Fenster auf `Erweitertes Setup`{.action} und wählen Sie `Internet E-Mail`{.action} als Kontotyp aus.

Geben Sie nun folgende Informationen ein:

|Information|Beschreibung|
|---|---|
|E-Mail-Adresse|Geben Sie die vollständige E-Mail-Adresse ein.|
|Benutzername|Geben Sie die vollständige E-Mail-Adresse ein.|
|Kennwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|Kontoname|Geben Sie einen Namen für diesen Account ein, damit Sie ihn später von anderen Accounts in Ihrer Mail App unterscheiden können.|
|Sendet Ihre Nachrichten unter diesem Namen|Geben Sie den Namen an, der als Absender angezeigt werden soll, wenn E-Mails mit dieser Adresse verschickt werden.|
|Posteingangsserver|Tragen Sie „pro**X**.mail.ovh.net:993“ ein.|
|Kontotyp|Wir empfehlen die Verwendung von **IMAP4**. Sie können auch **POP** im Drop-down-Menü auswählen (dann werden Ihre E-Mails lokal in Ihrer Mail App gespeichert).|
|Postausgangsserver|Tragen Sie „pro**X**.mail.ovh.net:587“ ein.|

Überprüfen Sie, dass die folgenden Haken gesetzt sind:
- „Ausgangsserver erfordert Authentifizierung“
- „Benutzernamen und Kennwort auch zum Senden von E-Mail verwenden“
- „SSL für eingehende E-Mails erforderlich“
- „SSL für ausgehende E-Mails erforderlich“

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Anmelden`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrem Account hergestellt.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

![E-Mail Pro](images/configuration-mail-windows-step2.png){.thumbnail}

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung:

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|pro**X**.mail.ovh.net|Ja|993|
|Ausgangsserver|pro**X**.mail.ovh.net|Ja|587|

### Schritt 2: E-Mail-Adresse verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/). Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder einem Webhosting Angebot auf der Windows 10 Mail App](https://docs.ovh.com/de/emails/mail-konfiguration-windows-10/){.external}

[Konfiguration von Exchange auf der Windows 10 Mail App](https://docs.ovh.com/de/microsoft-collaborative-solutions/mail-konfiguration-windows-10/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.