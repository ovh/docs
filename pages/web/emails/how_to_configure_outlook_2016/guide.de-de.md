---
title: 'Konfiguration Ihrer E-Mail-Adresse auf Outlook für Windows'
slug: konfiguration-outlook-2016
excerpt: 'So konfigurieren Sie Ihre MX Plan E-Mail-Adresse auf Outlook für Windows'
section: 'E-Mail Clients'
order: 3
---


> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
> 

**Letzte Aktualisierung am 05.06.2021**

## Ziel

MX Plan Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Hier erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse auf Outlook 2016 oder später für Windows einrichten.**


> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 


## Voraussetzungen

- Sie verfügen über eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [OVHcloud Webhosting enthalten](https://www.ovh.de/hosting/){.external}).
- Sie verfügen über das Microsoft Outlook 2016 oder später.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.
 
> [!primary]
>
> Sie verwenden Outlook 2016 für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adresse auf Outlook 2016 für Mac](https://docs.ovh.com/de/emails/konfiguration-outlook-2016-mac/){.external}.
>

## In der praktischen Anwendung

### Account hinzufügen

- **Wenn Sie die Anwendung zum ersten Mal starten**, öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn Sie bereits einen Account eingerichtet haben**, klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

- Geben Sie nun Ihre E-Mail-Adresse an und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie einen Haken in dem sich öffnenden Feld `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}. 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

| | |
|---|---|
|![Outlook](images/config-outlook-mxplan02.png){.thumbnail}|Wählen Sie zwischen IMAP und POP aus den verschiedenen Kontotypen. <br>Wir empfehlen die Verwendung von IMAP.|
|Geben Sie das Passwort Ihrer E-Mail-Adresse ein und klicken Sie auf `Weiter`{.action}. |![Outlook](images/config-outlook-mxplan03.png){.thumbnail}|
|![Outlook](images/config-outlook-mxplan04.png){.thumbnail}|Wenn Outlook Ihre Adresse nicht automatisch konfigurieren konnte, öffnet sich dieses Fenster. <br>Klicken Sie auf `Die Einstellungen des Accounts ändern`{.action} |
|Geben Sie in **eingehender E-Mail ein**: <br>- der **ssl0.ovh.net Server** <br>- Port **993**<br>- SSL/**TLS Verschlüsselung**<br><br>Geben Sie in **Ausgehende Post ein**: <br>- der **ssl0.ovh.net Server** <br>- Port **465**<br>- SSL/**TLS Verschlüsselung**<br><br>Klicken Sie auf `Weiter`{.action}, um zu bestätigen. |![Outlook](images/config-outlook-mxplan05.png){.thumbnail}|


Bei einer POP-**Konfiguration** ergeben sich folgende Werte:

|Server-Typ|Servername|Verschlüsselungsmethode|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|SSL/TLS|995|
|Ausgangsserver|ssl0.ovh.net|SSL/TLS|465|

### E-Mail-Adresse verwenden

Wenn Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können. Diese ist über <https://www.ovh.de/mail/> verfügbar. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Für Fragen zur Verwendung lesen Sie bitte unsere Anleitung [Ihren Exchange Account über das OWA Interface einsehen](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_verwendung_der_outlook_web_app/).

### Backup Ihrer E-Mail-Adresse abrufen

Wenn Sie eine Änderung vornehmen müssen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt "**Windows** exportieren"in unserer Anleitung [E-Mail-Adresse manuell migrieren](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/#uber-windows-exportieren).


### Bestehende Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Gehen Sie `über`{.action} die Menüleiste oben auf Ihrem Bildschirm in Datei und wählen Sie dann im Drop-down-Menü den zu ändernden Account aus **(1)**.
- Klicken Sie `unten auf`{.action}** Account-Einstellungen(2)**.
- Klicken Sie `auf Server`{.action}**-Einstellungen**(3), um zum Parameterfenster zu gelangen.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

Das Fenster ist in zwei Teile unterteilt, **Eingehende** und **Ausgehende**. Klicken Sie auf das eine oder das andere, um diese zu ändern.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}


## Weiterführende Informationen

[Konfiguration von E-Mail Pro auf Outlook 2016 für Windows](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016/){.external}

[Konfiguration von Exchange auf Outlook 2016 für Windows](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-outlook-2016/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
