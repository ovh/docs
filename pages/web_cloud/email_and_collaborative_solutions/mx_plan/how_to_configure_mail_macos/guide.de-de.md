---
title: "MX Plan - Konfiguration Ihrer E-Mail-Adresse in Mail für macOS"
excerpt: So konfigurieren Sie Ihre MX Plan E-Mail-Adresse auf macOS Mail
updated: 2024-10-22
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Ziel

MX Plan Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Die Mail App auf macOS ist auf allen Mac kostenlos verfügbar.

**So konfigurieren Sie Ihre MX Plan E-Mail-Adresse auf macOS Mail.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil "Weiterführende Informationen" dieser Anleitung.

## Voraussetzungen

- Sie verfügen über eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem OVHcloud Webhosting [enthalten](/links/web/hosting)).
- Sie verfügen über das auf Ihrem Mac installierte Mail-Programm.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

## In der praktischen Anwendung

### Account hinzufügen

- **Beim ersten Start der Anwendung** : Es wird direkt ein Konfigurationsassistent angezeigt und Sie werden gebeten, Ihren Kontotyp zu wählen.

- **Wenn ein Account bereits eingerichtet wurde** : Klicken Sie auf `Mail`{.action} im Menü oben auf Ihrem Bildschirm und dann auf `Accounts`{.action}.

Folgen Sie den Installationsschritten, indem Sie unten auf die Registerkarten klicken:

> [!tabs]
> **Schritt 1**
>>
>> Wählen Sie `Anderer Mail-Account`{.action} und klicken Sie dann auf `Mail-Account`{.action}.<br><br>
>> ![mailmac](images/mail-mac-email01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>>
>> Geben Sie im Fenster "**E-Mail-Account hinzufügen**" folgende Informationen ein: <br><br>
>> - Ein **Name** für Ihren E-Mail-Account
>> - Ihre **E-Mail-Adresse**
>> - Das **Passwort** Ihrer E-Mail-Adresse<br>
>> ![mailmac](images/mail-mac-email02.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3**
>>
>> Geben Sie im folgenden Fenster die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Benutzername**: Geben Sie Ihre vollständige E-Mail-Adresse ein
>> - **Passwort**
>> - **Account-Typ**: Wählen Sie `IMAP` (empfohlen) oder `POP`
>> - **Empfangsserver**:<br>- **EUROPE**: Geben Sie `imap.mail.ovh.net` oder `ssl0.ovh.net`<br>- **AMERIKA/ASIEN**: Geben Sie `imap.mail.ovh.ca` ein
>> - **sendender Server**:<br>- **EUROPE**: Geben Sie `smtp.mail.ovh.net` oder `ssl0.ovh.net`<br>- **AMERIKA/ASIEN**: Geben Sie `smtp.mail.ovh.ca` ein
>>
>> Klicken Sie auf `Verbinden`{.action}, um die Konfiguration abzuschließen
>>
>> > [!warning]
>> >
>> > Die rote Meldung "**Kontoname oder Kennwort kann nicht überprüft werden**" j erscheint, wenn das Fenster das erste Mal angezeigt wird. Wenn diese Meldung jedoch nach der Validierung weiterhin angezeigt wird, sind die eingegebenen Informationen fehlerhaft.<br><br>
>>
>> ![mailmac](images/mail-mac-email03.png){.thumbnail .w-400 .h-600}

> [!warning]
>
> Wenn Sie nach dem Befolgen der unten aufgeführten Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt [Vorhandene Einstellungen ändern](#modify-settings)

### E-Mail-Adresse verwenden

Wenn Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können. Diese ist über[Webmail](/links/web/email) verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Für Fragen zur Verwendung lesen Sie unsere Anleitung [Ihren Account über OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) oder [E-Mail-Adresse über das RoundCube Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

### Backup Ihrer E-Mail-Adresse abrufen

Wenn Sie eine Änderung vornehmen müssen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt "**Exportieren**" im Abschnitt "**Mail auf Mac OS**" unserer Anleitung [E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportieren).

### Bestehende Einstellungen ändern <a name="modify-settings"></a>

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Klicken Sie auf `Mail`{.action} im Menü oben auf Ihrem Bildschirm und dann auf `Einstellungen`{.action}.
- Wählen Sie den betreffenden Account in der linken Spalte aus und klicken Sie auf `Servereinstellungen`{.action}.
- Geben Sie im Bereich `Empfangsserver (POP)` oder `Empfangsserver (IMAP)` Ihre vollständige E-Mail-Adresse in das Feld `Benutzername`{.action} sowie das zugehörige `Passwort`{.action} in das dafür vorgesehene Feld ein.
- Geben Sie im Bereich `Versand-Server (SMTP)` Ihre vollständige E-Mail-Adresse in das Feld `Benutzername`{.action} sowie das zugeordnete `Passwort`{.action} in das dafür vorgesehene Feld ein.
- Deaktivieren Sie die Kontrollkästchen `Verbindungseinstellungen automatisch verwalten`{.action}, um die Einstellungen für `Port`{.action} und `Authentifizierung`{.action} anzuzeigen.
- Stellen Sie sicher, dass die Kontrollkästchen `TLS/SSL verwenden`{.action} aktiviert sind.
- Stellen Sie in den Dropdown-Menüs `Authentifizierung`{.action} sicher, dass `Passwort` ausgewählt ist.
- Beziehen Sie sich für die Felder `Hostname`{.action} und `Port`{.action} auf die Werte unter „[POP-, IMAP- und SMTP-Parameterrückruf](#popimap-settings)“. **Stellen Sie sicher, dass der Servertyp (IMAP, POP und SMTP) Ihrer Region (Europa oder Asien-Pazifik) entspricht**.

Um die Konfiguration abzuschließen, klicken Sie auf `Speichern`{.action}.

![mailmac](images/mail-mac-email04.png){.thumbnail .w-400 .h-600}

> [!primary]
>
> **Konfiguration ändern**
>
> Wenn Ihre E-Mail-Adresse mit **IMAP** konfiguriert ist und Sie diese Konfiguration in **POP** ändern möchten, müssen Sie das Mail-Konto von MacOS löschen und es dann mit **POP** neu erstellen.

### POP-, IMAP- und SMTP-Einstellungen zurückrufen <a name="popimap-settings"></a>

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können jedoch **POP** auswählen.

> [!warning]
>
> Es ist notwendig, den Ihrem Standort entsprechenden Wert richtig zu notieren (**EUROPE** oder **AMERICA/ASIEN-PAZIFIK**)

- **Für eine POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (eingehend)|pop.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|pop.mail.ovh.ca|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **Für eine IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (eingehend)|imap.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|imap.mail.ovh.ca|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (ausgehend)|smtp.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (ausgehend)|smtp.mail.ovh.ca|
|Port|465|
|Sicherheitstyp|SSL/TLS|

> [!primary]
>
> **Konfiguration ändern**
>
> Wenn Sie Ihre E-Mail-Adresse als **IMAP** konfigurieren und die Konfiguration in **POP** ändern möchten, müssen Sie den Mac Mail-Account löschen und anschließend in **POP** neu erstellen, um die Konfiguration zu ändern.

### Was kann ich tun, wenn ich meine E-Mails nicht empfangen/senden kann?

- Wenn das Symbol auf der folgenden Abbildung angezeigt wird, handelt es sich um eine Netzwerktrennung. Stellen Sie sicher, dass die Internetverbindung ordnungsgemäß funktioniert.

![mailmac](images/mail-mac-disconnect.png){.thumbnail .w-400 .h-600}

- Wenn das Symbol auf dem unten stehenden Bildschirmfoto angezeigt wird, handelt es sich um einen Synchronisierungsfehler. Überprüfen Sie die Konfigurationseinstellungen Ihres E-Mail-Accounts unter [Vorhandene Einstellungen ändern](#modify-settings).

![mailmac](images/mail-mac-fail.png){.thumbnail .w-400 .h-600}

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Mail App auf macOS finden Sie im [Apple Help Center](https://support.apple.com/de-de/guide/mail/mail35803/mac).

[MX Plan - E-Mail-Account auf Mail für iPhone und iPad einrichten](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[E-Mail Pro - Konfiguration Ihres E-Mail-Accounts auf Mail für macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)<br>
[E-Mail Pro - Konfiguration Ihres E-Mail-Accounts auf Mail für iPhone und iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[Exchange - E-Mail-Account auf macOS Mail einrichten](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios)<br>
[Exchange - E-Mail-Account auf Mail für iPhone und iPad einrichten](pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos/guide.fr-de.md)

Für spezielle Dienstleistungen (Referenzierung, Entwicklung etc.) wenden Sie sich bitte an die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Verwendung und Konfiguration Ihrer OVHcloud Lösungen benötigen, empfehlen wir Ihnen unsere verschiedenen [Support-Angebote](/links/support).

Für den Austausch mit unserer [User Community](/links/community).