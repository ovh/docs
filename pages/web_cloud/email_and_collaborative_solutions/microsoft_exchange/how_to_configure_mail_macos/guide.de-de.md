---
title: 'Konfiguration von Exchange auf macOS Mail'
updated: 2021-12-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Exchange Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Die Mail App auf macOS ist auf allen Mac kostenlos verfügbar.

**So konfigurieren Sie Ihre Exchange E-Mail-Adresse auf macOS Mail.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil “Weiterführende Informationen“ dieser Anleitung.
>

## Voraussetzungen

- Sie besitzen eine [Exchange E-Mail-Adresse](https://www.ovhcloud.com/de/emails/hosted-exchange/).
- Sie verfügen über das auf Ihrem Mac installierte Mail-Programm.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.
 
## In der praktischen Anwendung

### Account hinzufügen <a name="addaccount"></a>

> [!primary]
>
> In unserem Beispiel verwenden wir den Servernamen: ex**?**.mail.ovh.net. Ersetzen Sie "?" durch die Zahl für den Server Ihrer Exchange Dienstleistung.
>
> Diese Zahl finden Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/de/&ovhSubsidiary=de){.external} im Bereich `Web Cloud`{.action} und `Microsoft`{.action}.
> Klicken Sie auf `Exchange`{.action} und dann auf die gewünschte Exchange-Plattform. Der Servername wird im Feld **Verbindung** im Tab `Allgemeine Informationen`{.action} angezeigt.
>

- **Beim ersten Start der Anwendung**: Ein Konfigurationsassistent erscheint direkt und fordert Sie zur Auswahl Ihres Kontotyps auf.

- **Wenn bereits ein Account eingerichtet wurde** : Klicken Sie auf `Mail`{.action} in der Menüleiste oben auf Ihrem Bildschirm und dann auf `Accounts`{.action}.

> [!tabs]
> **Schritt 1**
>> Wählen Sie `Exchange`{.action}<br><br>
>> ![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>> Geben Sie den **Namen** Ihres E-Mail-Accounts und Ihre **E-Mail-Adresse** ein und klicken Sie auf `Verbinden`{.action} <br><br>
>> ![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3**
>> Klicken Sie im folgenden Fenster auf `Manuelle Konfiguration`{.action} : <br><br>- Legen Sie den **Name** fest, der im Browser-Interface <br>- Lassen Sie Ihre **E-Mail-Adresse**<br>- Lassen Sie Ihr **Passwort** bereits eingegeben <br><br>Um die Konfiguration abzuschließen, klicken Sie auf `Verbinden`{.action} <br><br>
>>![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 4**
>> Geben Sie ein: <br><br>- E-Mail-Adresse: Geben Sie Ihre vollständige E-Mail-Adresse ein<br>- Benutzername: Geben Sie Ihre vollständige E-Mail-Adresse ein <br>- Passwort: Geben Sie Ihr **Passwort**<br> - Interne URL: **ex?.mail.ovh.net** ein (ersetzen Sie **?** durch [Ihre Exchange-Servernummer](#addaccount))<br>- Externe URL: **ex?.mail.ovh.net** (ersetzen Sie **?** durch [Ihre Exchange-Servernummer](#addaccount)<bbb) r><br>
>>
>> > [!warning]
>> >
>> > Die rote Meldung "**Kontoname oder Kennwort kann nicht überprüft werden**" erscheint, wenn das Fenster das erste Mal angezeigt wird. Wenn diese Meldung jedoch nach der Validierung weiterhin angezeigt wird, sind die eingegebenen Informationen fehlerhaft.<br><br>
>>
>> ![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 5**
>> Zusätzlich zu Ihren E-Mails können Sie auch andere Exchange Funktionen auswählen, die Sie über Ihren Mac verwalten möchten. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### E-Mail-Adresse verwenden

Nach der Konfiguration der E-Mail-Adresse können Sie diese verwenden! Sie können ab sofort Nachrichten senden und empfangen.

OVHcloud bietet auch eine Web-App, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können. Diese ist abrufbar unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitung [Exchange-Account über das OWA-Interface aufrufen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) oder [E-Mail-Adresse über RoundCube Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube#ou-et-comment-à-au-webmail-roundcube).

### Backup Ihrer E-Mail-Adresse erstellen

Wenn Sie eine Änderung vornehmen müssen, die zum Verlust der Daten Ihres E-Mail-Accounts führen könnte, empfehlen wir Ihnen, zunächst ein Backup des betreffenden E-Mail-Accounts zu erstellen. Lesen Sie hierzu den Abschnitt "**Export**" im Abschnitt "**Mail to Mac OS**" unserer Anleitung [E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportieren).

### Vorhandene Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Kontoeinstellungen zugreifen müssen, um diese zu ändern:

- Klicken Sie auf `Mail`{.action} in der Menüleiste oben auf Ihrem Bildschirm und dann auf `Einstellungen...`{.action} **oder** `Einstellungen...`{.action} abhängig von Ihrer macOS Version.
- Wählen Sie im Tab `Accounts`{.action} den betreffenden Account in der linken Spalte aus und klicken Sie dann auf `Servereinstellungen`{.action}.

![mailmac](images/mail-mac-exchange06.png){.thumbnail .w-400 .h-600}

## Weiterführende Informationen

[E-Mail FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Ihren E-Mail Pro Account auf macOS Mail einrichten](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[MX Plan E-Mail-Account auf macOS Mail einrichten](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
