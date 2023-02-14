---
title: 'Konfiguration Ihrer Email Pro Adresse auf Thunderbird für macOS'
slug: konfiguration-emailpro-thunderbird-mac
excerpt: 'Hier finden Sie die Informationen zur Konfiguration Ihrer Email Pro Adresse auf Thunderbird für macOS.'
section: 'Konfiguration des E-Mail-Clients'
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 26.08.2021**

## Ziel

E-Mail Pro Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Thunderbird ist ein freie E-Mail-Software.

**Diese Anleitung erklärt, wie Sie Ihre E-Mail Pro Adresse auf macOS einrichten.**

> [!warning]
> In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen [E-Mail Pro Account](https://www.ovhcloud.com/de/emails/email-pro/).
- Thunderbird ist auf Ihrem macOS-System installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.
 
## In der praktischen Anwendung

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**?**.mail.ovh.net. Das „?“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

### Account hinzufügen

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action}, dann `Neu`{.action} und anschließend auf `Konto`{.action}.

| | |
|---|---|
|![Thunderbird](images/thunderbird-mac-emailpro01.png){.thumbnail}|Geben Sie im angezeigten Fenster die folgenden Informationen ein: <br>\- Gewünschter Anzeigename<br>\- E-Mail-Adresse <br>\- Passwort|
|Klicken Sie anschließend auf `Manuell konfigurieren...`{.action} um die Einstellungen für **Eingangserver** einzugeben: <br>\- Protokoll **IMAP** <br>\- Server **pro?.mail.ovh.net** (ersetzen Sie "?" mit der Nummer Ihres Servers)<br>\- Port **993** <br>\- SSL **SSL/TLS** <br>\- Authentifizierung **Passwort, normal** <br>\- Benutzername **Vollständige E-Mail-Adresse**|![Thunderbird](images/thunderbird-mac-emailpro02.png){.thumbnail}|
|![Thunderbird](images/thunderbird-mac-emailpro03.png){.thumbnail}|Geben Sie die Einstellungen für **Ausgangserver** an: <br>\- Protokoll **SMTP** <br>\- Server **pro?.mail.ovh.net** (ersetzen Sie "?" mit der Nummer Ihres Servers)<br>\- Port **587** <br>\- SSL **STARTTLS** <br>\- Authentifizierung **Passwort, normal** <br>\- Benutzername **Vollständige E-Mail-Adresse**<br><br>Um die Konfiguration abzuschließen, klicken Sie auf `Fertig`{.action}.|


Für eine **POP** Konfiguration verwenden Sie die folgenden Werte:

|Servertyp|Servername|Verschlüsselung|Port|
|---|---|---|---|
|Eingangsserver|pro**?**.mail.ovh.net (ersetzen Sie "?" mit der Nummer Ihres Servers)|SSL/TLS|995|
|Ausgangsserver|pro**?**.mail.ovh.net (ersetzen Sie "?" mit der Nummer Ihres Servers)|STARTTLS|587|

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können: <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](../../microsoft-collaborative-solutions/exchange_2016_verwendung_der_outlook_web_app/) heranziehen.

### Bestehende Einstellungen ändern

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**?**.mail.ovh.net. Das „?“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Öffnen Sie `Extras`{.action} über die Menüleiste oben.
- Klicken Sie auf `Konten-Einstellungen`{.action}.

![Thunderbird](images/thunderbird-mac-emailpro04.png){.thumbnail}

- Um die Einstellungen für den **Empfang** Ihrer E-Mails zu ändern, klicken Sie in der linken Spalte unter der E-Mail-Adresse auf `Server-Einstellungen`{.action}.

![Thunderbird](images/thunderbird-mac-emailpro05.png){.thumbnail}

- Um die Einstellungen für den **Versand** Ihrer E-Mails zu ändern, klicken Sie auf `Postausgang-Server (SMTP)`{.action} unten in der linken Spalte.
- Klicken Sie auf die entsprechende E-Mail-Adresse in der Liste und anschließend auf `Ändern`{.action}.

![Thunderbird](images/thunderbird-mac-emailpro06.png){.thumbnail}


## Weiterführende Informationen <a name="gofurther"></a>

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
