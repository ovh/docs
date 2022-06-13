---
title: 'Konfiguration von E-Mail Pro auf macOS Mail'
slug: email-pro-auf-macos-konfigurieren
section: 'Konfiguration des E-Mail-Clients'
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 13.06.2022**

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Die Mail App auf macOS ist auf allen Mac kostenlos verfügbar.

**So konfigurieren Sie Ihre E-Mail Pro Adresse auf macOS Mail.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil “Weiterführende Informationen“ dieser Anleitung.
> 

## Voraussetzungen

- Sie verfügen über eine [E-Mail Pro Adresse](https://www.ovhcloud.com/de/emails/email-pro/).
- Sie verfügen über das auf Ihrem Mac installierte Mail-Programm.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.
 
## In der praktischen Anwendung

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro<b>?</b>.mail.ovh.net. Das „?“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

### Account hinzufügen

- **Beim ersten Start der Anwendung**: Es wird direkt ein Konfigurationsassistent angezeigt und Sie werden gebeten, Ihren Kontotyp zu wählen.

- **Wenn ein Account bereits eingerichtet wurde**: Klicken Sie auf `Mail`{.action} im Menü oben auf Ihrem Bildschirm und dann auf `Accounts`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-emailpro01.png){.thumbnail}|Wählen `Sie Anderen Mail`{.action}-Account aus und klicken Sie auf `Mail-Account`{.action}.|
|Geben Sie im Fenster "**Mail Account hinzufügen**"folgende Informationen ein: <br>- **Name** Ihres E-Mail Accounts <br>- Ihre **E-Mail Adresse** <br>- **Passwort** Ihrer E-Mail-Adresse |![mailmac](images/mail-mac-emailpro02.png){.thumbnail}|
|![mailmac](images/mail-mac-emailpro03.png){.thumbnail}|Geben Sie im folgenden Fenster die Informationen ein: <br>- Lassen Sie Ihre **E-Mail-Adresse** bereits eingeben <br>- Geben Sie Ihre vollständige E-Mail-Adresse unter **Benutzername** ein <br>- Lassen Sie Ihr **Passwort** bereits eingegeben <br>- Wählen Sie `POP` oder `IMAP`(empfohlen) aus in **Account-Typ**<br>- Geben Sie `pro?.mail.ovh.net` in **Empfangsserver** (ersetzen Sie bitte "**?**"durch die Nummer Ihres Servers)<br>- Geben Sie auch `pro?.mail.ovh.net` in **Versendungsserver** (ersetzen Sie gut "**?**"durch die Nummer Ihres Servers)<br><br>Um die Konfiguration abzuschließen, klicken Sie auf `Anmelden`{.action}|

### E-Mail-Adresse verwenden

Wenn Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können. Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Für Fragen zur Verwendung lesen Sie unsere Anleitung [Ihren Account über OWA](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_verwendung_der_outlook_web_app/).

### Backup Ihrer E-Mail-Adresse abrufen

Wenn Sie eine Änderung vornehmen müssen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt “**Exportieren**“ im Abschnitt “**Mail auf Mac OS**“ unserer Anleitung [E-Mail-Adresse manuell migrieren](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/#exportieren).

### Bestehende Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Klicken Sie auf `Mail`{.action} im Menü oben auf Ihrem Bildschirm und dann auf `Einstellungen`{.action}.
- Wählen Sie in der linken Spalte den betreffenden Account aus und klicken Sie auf `Server-Einstellungen`{.action}.

![mailmac](images/mail-mac-emailpro04.png){.thumbnail}

### Zusätzliche Informationen

Bei einer **IMAP** Konfiguration sind die Werte:

|Server-Typ|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingehend (IMAP)|pro<b>?</b>.mail.ovh.net (Ersetzen Sie "**?**" mit der Nummer Ihres Servers.)|SSL/TLS|993|
|Ausgehend (SMTP)|pro<b>?</b>.mail.ovh.net (Ersetzen Sie "**?**" mit der Nummer Ihres Servers.)|SSL/TLS|465|

Bei einer **POP** Konfiguration sind die Werte:

|Server-Typ|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingehend (POP)|pro<b>?</b>.mail.ovh.net (Ersetzen Sie "**?**" mit der Nummer Ihres Servers.)|SSL/TLS|995|
|Ausgehend (SMTP)|pro<b>?</b>.mail.ovh.net (Ersetzen Sie "**?**" mit der Nummer Ihres Servers.)|SSL/TLS|465|

> [!primary]
>
> **Konfiguration ändern**
>
> Wenn Sie Ihre E-Mail-Adresse als **IMAP** konfigurieren und die Konfiguration zu **POP** ändern möchten, müssen Sie den Mac Mail-Account löschen und anschließend als **POP** neu erstellen, um die Konfiguration zu ändern.

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
