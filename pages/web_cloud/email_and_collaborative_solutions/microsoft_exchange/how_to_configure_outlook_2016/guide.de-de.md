---
title: 'Exchange - Konfigurieren Sie Ihr E-Mail-Konto in Outlook für Windows'
excerpt: 'Erfahren Sie hier, wie Sie Ihren Exchange Account in Outlook für Windows einrichten'
updated: 2021-07-05
---
 
> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Exchange Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Microsoft Outlook ist das empfohlene Programm, um eine Exchange E-Mail-Adresse mit kollaborativen Funktionen zu verwenden.

> [!warning]
> In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen [Exchange Account](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}.
- Microsoft Outlook ist auf Ihrem Gerät installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.
- Der OVHcloud SRV-Eintrag muss in der DNS-Zone der Domain korrekt konfiguriert sein. Lesen Sie hierzu unsere Anleitung "[Eine Domain zu Ihrer Exchange Dienstleistung hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".

> [!primary]
>
> Sie verwenden Outlook für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration von Exchange auf Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac)
>

## In der praktischen Anwendung

### Account hinzufügen

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

- Geben Sie nun Ihre E-Mail-Adresse ein und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie den Haken neben `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}. 

![Exchange](images/config-outlook-exchange01.png){.thumbnail}

- Wählen Sie aus der Liste der Kontotypen **Exchange** aus.

- Geben Sie im folgenden Fenster das Passwort Ihrer E-Mail-Adresse ein, haken Sie die Speicheroption an, und klicken Sie dann auf `OK`{.action}.

![Exchange](images/config-outlook-exchange02.png){.thumbnail}

> [!primary]
> 
> Wenn Ihnen eine Nachricht anzeigt, dass Outlook Ihren Account nicht einrichten konnte, kann dies darauf hindeuten, dass der SRV-Eintrag in der DNS-Zone Ihrer Domain nicht korrekt konfiguriert ist.
> 
> ![Exchange](images/config-outlook-exchange03.png){.thumbnail}
>
> Wir empfehlen, die Konfiguration des Domainnamens zu überprüfen, der mit Ihrem Exchange-Dienst verbunden ist. Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zum Tab `Assoziierte Domains`{.action} und prüfen Sie dann in der Tabelle die Spalte `Diagnose`{.action}.
>

- Wenn die Konfiguration Ihrer Domain gültig ist, kann eine Verbindungsberechtigungsnachricht zu den OVHcloud Servern angezeigt werden. Akzeptieren Sie diese, damit Ihr Exchange Account automatisch konfiguriert werden kann.
- Legen Sie dann die Aufbewahrungsfrist der Elemente in Ihrem Exchange-Konto fest, um diese **lokal auf Ihrem Computer** zu speichern. Klicken Sie auf `Weiter`{.action} und dann auf `Fertig stellen`{.action}.

![Exchange](images/config-outlook-exchange04.png){.thumbnail}

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

Ihre Exchange E-Mail-Adresse sowie alle kollaborativen Funktionen sind ebenfalls über das [OWA Interface](https://www.ovh.de/mail/) verfügbar. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) heranziehen.

### Backup Ihrer E-Mail-Adresse

Wenn Sie eine Änderung vornehmen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt zu **Windows** in unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#uber-windows-exportieren)".

## Weiterführende Informationen <a name="gofurther"></a>

[Konfiguration Ihrer MX Plan Adresse mit Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Konfiguration von E-Mail Pro auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
