---
title: Exchange - Konfiguration Ihres E-Mail Accounts in macOS Mail
excerpt: Erfahren Sie hier, wie Sie Ihren Exchange Account in macOS Mail einrichten
updated: 2024-04-16
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Exchange Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Die Mail App auf macOS ist auf allen Mac kostenlos verfügbar.

**Diese Anleitung erklärt, wie Sie einen Exchange E-Mail Account in macOS Mail einrichten.**


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt "Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über einen [Exchange Dienst](/links/web/emails-hosted-exchange).
- Sie haben den macOS *Mail* CLient auf Ihrem Mac installiert.
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.
 
## In der praktischen Anwendung

### Hinzufügen des E-Mail-Accounts <a name="addaccount"></a>

> [!primary]
>
> In unseren Beispielen verwenden wir als Serverbezeichnung "ex?.mail.ovh.net". Das "?" muss mit der jeweils passenden Nummer des zuständigen Servers Ihrer Exchange Dienstleistung ersetzt werden.
>
> Sie finden diese Information im [OVHcloud Kundencenter](/links/manager). Öffnen Sie im Bereich `Web Cloud`{.action} unter `Microsoft`{.action} den Eintrag `Exchange`{.action}. Der Servername wird im Abschnitt Verbindung auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

- **Beim ersten Start der Anwendung**: Ein Konfigurationsassistent erscheint und fordert Sie zur Auswahl Ihres Kontotyps auf.

- **Wenn bereits ein Account eingerichtet wurde**: Klicken Sie auf `Mail`{.action} in der Menüleiste oben und dann auf `Accounts`{.action}.

> [!tabs]
> **Schritt 1**
>> Wählen Sie `Exchange`{.action}.<br><br>
>> ![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>> Geben Sie den **Namen** Ihres E-Mail-Accounts und Ihre **E-Mail-Adresse** ein und klicken Sie auf `Verbinden`{.action}. <br><br>
>> ![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3**
>> Klicken Sie im folgenden Fenster auf `Manuelle Konfiguration`{.action}: <br><br>- Legen Sie den **Namen** fest, der im Browser-Interface angezeigt wird. <br>- Ihre **E-Mail-Adresse** beibehalten.<br>- Ihr **Passwort** beibehalten. <br><br>Um die Konfiguration abzuschließen, klicken Sie auf `Verbinden`{.action}. <br><br>
>>![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 4**
>> Geben Sie ein: <br><br>- E-Mail-Adresse: Geben Sie Ihre vollständige E-Mail-Adresse ein.<br>- Benutzername: Geben Sie Ihre vollständige E-Mail-Adresse ein. <br>- Passwort: Geben Sie Ihr **Passwort** ein.<br> - Interne URL: **ex?.mail.ovh.net** (ersetzen Sie **?** durch [Ihre Exchange-Servernummer](#addaccount).)<br>- Externe URL: **ex?.mail.ovh.net** (ersetzen Sie **?** durch [Ihre Exchange-Servernummer](#addaccount).)<br><br>
>>
>> > [!warning]
>> >
>> > Die Fehlermeldung "**Kontoname oder Kennwort kann nicht überprüft werden**" erscheint, wenn das Fenster das erste Mal angezeigt wird. Wenn diese Meldung jedoch nach der Validierung weiterhin angezeigt wird, sind die eingegebenen Informationen fehlerhaft.<br><br>
>>
>> ![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 5**
>> Zusätzlich zu Ihren E-Mails können Sie auch andere Exchange Funktionen auswählen, die Sie über Ihren Mac verwalten möchten. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### E-Mail-Account verwenden

Nach der Konfiguration der E-Mail-Adresse können Sie diese verwenden! Sie können ab sofort Nachrichten senden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können. Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden.

Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitungen [Exchange-Account über das OWA-Interface aufrufen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) und [E-Mail-Adresse über RoundCube Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#ou-et-comment-à-au-webmail-roundcube).

### Backup Ihres E-Mail-Accounts erstellen

Wenn Sie eine Änderung vornehmen müssen, die zum Verlust der Daten Ihres E-Mail-Accounts führen könnte, empfehlen wir Ihnen, zunächst ein Backup des betreffenden E-Mail-Accounts zu erstellen. Lesen Sie hierzu den Abschnitt "**Export**" unter "**Mail auf Mac OS**" unserer Anleitung [E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportieren).

### Vorhandene Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Kontoeinstellungen zugreifen müssen, um diese zu ändern:

- Klicken Sie auf `Mail`{.action} in der Menüleiste oben und dann auf `Einstellungen...`{.action}.
- Wählen Sie im Tab `Accounts`{.action} den betreffenden Account in der linken Spalte aus und klicken Sie dann auf `Servereinstellungen`{.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Weiterführende Informationen

[E-Mail FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Ihren E-Mail Pro Account auf macOS Mail einrichten](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[MX Plan E-Mail-Account auf macOS Mail einrichten](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
