---
title: "MX Plan - Konfiguration Ihrer E-Mail-Adressen in Outlook für Windows"
excerpt: "Erfahren Sie hier, wie Sie Ihren Mailaccount in Outlook für Windows einrichten"
updated: 2024-02-16
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

MX Plan Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Diese Anleitung erklärt, wie Sie Ihren E-Mail-Account in Windows Outlook oder neuer einrichten.**

> [!warning]
> In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen MX Plan E-Mail-Account (als MX Plan Dienst oder in einem [OVHcloud Webhosting](/links/web/hosting) enthalten).
- Microsoft Outlook ist auf Ihrem Gerät installiert.
- Sie verfügen über Anmeldeinformationen für den E-Mail-Account, den Sie konfigurieren möchten.

> [!primary]
>
> Sie verwenden Outlook für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adressen in Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## In der praktischen Anwendung

> [!alert]
>
> Bevor Sie mit der Konfiguration in dieser Anleitung beginnen, stellen Sie sicher, dass das Flaggensymbol oben rechts auf dieser Seite Ihrem Land oder Ihrer Region entspricht, da die Einstellungen lokal unterschiedlich sind.

### Account hinzufügen

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Konto hinzufügen`{.action}.

- Geben Sie nun Ihre E-Mail-Adresse ein und klicken Sie auf `Erweiterte Optionen`{.action}. Setzen Sie den Haken neben `Ich möchte mein Konto manuell einrichten`{.action} und klicken Sie anschließend auf `Verbinden`{.action}. 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

> [!primary]
>
> Sie wissen nicht, ob Sie Ihren E-Mail-Account mit **POP** oder **IMAP** einrichten müssen?
>
> Bevor Sie fortfahren, lesen Sie den Abschnitt „[POP oder IMAP, was ist der Unterschied?](#popimap)“ in dieser Anleitung.
>
> In den folgenden Einstellungen können Sie zwei verschiedene Hostnamen für denselben Server angeben (ein- oder ausgehend). Diese Werte beziehen sich auf denselben Server und sollen die Eingabe erleichtern sowie Verwechslungen zwischen POP, IMAP und SMTP, die unterschiedliche Ports verwenden, vermeiden.

Um Ihren E-Mail-Account zu konfigurieren, folgen Sie den Anweisungen in den Tabs.

> [!tabs]
> **Schritt 1**
>> Wählen Sie den Kontotyp IMAP oder POP aus.<br>Wir empfehlen die Verwendung von IMAP.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-600}
>>
> **Schritt 2**
>> Geben Sie das Passwort Ihres E-Mail-Accounts ein und klicken Sie dann auf `Weiter`{.action}.
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-600}
>>
> **Schritt 3**
>> Wenn Outlook Ihren Account nicht automatisch konfigurieren konnte, wird dieses Fenster angezeigt. Klicken Sie auf `Kontoeinstellungen ändern`{.action}. Fahren Sie abhängig von Ihrer Auswahl (**POP** oder **IMAP**) mit Schritt 4 fort.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-600}
>>
> **Schritt 4 - IMAP**
>> Wenn Sie IMAP ausgewählt haben, geben Sie die folgenden Parameter ein. Wenn Sie sich für POP entschieden haben, gehen Sie zum Tab „**Schritt 4 - POP**“.<br>
>> Geben Sie unter **Incoming Mail** Folgendes ein:<br>- Server **imap.mail.ovh.net** oder **ssl0.ovh.net** <br>- Port **993**<br>- **SSL/TLS-Verschlüsselungsmethode**<br><br>Geben Sie unter **Outgoing Mail** Folgendes ein:<br>- Server **smtp.mail.ovh.net** oder **ssl0.ovh.net** <br>- Port **465**<br>- **SSL/TLS-Verschlüsselungsmethode**<br><br>Klicken Sie zum Bestätigen auf `Weiter`{.action}.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-600}
>>
> **Schritt 4 - POP**
>> Geben Sie unter **Incoming Mail** Folgendes ein:<br>- Server **pop.mail.ovh.net** oder **ssl0.ovh.net** <br>- Port **995**<br>- **SSL/TLS-Verschlüsselungsmethode**<br><br>Geben Sie unter **Outgoing Mail** Folgendes ein:<br>- Server **smtp.mail.ovh.net** oder **ssl0.ovh.net** <br>- Port **465**<br>- **SSL/TLS-Verschlüsselungsmethode**<br><br>Klicken Sie zum Bestätigen auf `Weiter`{.action}.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05-pop.png){.thumbnail .h-600}

### E-Mail-Adresse verwenden

Sobald Ihr E-Mail-Account eingerichtet ist, können Sie ihn verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihren E-Mail-Account zugreifen können: <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) heranziehen.

### Backup Ihres E-Mail-Accounts

Wenn Sie eine Änderung vornehmen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt zu **Windows** in unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#uber-windows-exportieren)".

### Bestehende Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Wählen Sie `Datei`{.action} **(1)** in der Menüleiste oben und wählen Sie dann das Konto, das Sie ändern möchten, im Dropdown-Menü aus.
- Klicken Sie unten auf `Accounteinstellugen`{.action} **(2)**.
- Klicken Sie unten auf `Servereinstellungen`{.action} **(3)**, um zur Konfigurationsansicht zu gelangen.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

Das Fenster ist in zwei Bereiche unterteilt, für **eingehende** und **ausgehende** Einstellungen. Klicken Sie auf die jeweilige Auswahl, um die Konfiguration zu ändern.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Einstellungen POP, IMAP und SMTP<a name="popimap-settings"></a>

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können auch **POP** auswählen. Um zu verstehen, wie diese funktionieren, lesen Sie den Abschnitt „[POP oder IMAP, was ist der Unterschied?](#popimap)“ weiter unten.

- **POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|Server (eingehend)|pop.mail.ovh.net **oder** ssl0.ovh.net|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|Server (eingehend)|imap.mail.ovh.net **oder** ssl0.ovh.net|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie die **SMTP**-Einstellungen für den E-Mail-Versand manuell in den Kontoeinstellungen eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|Server (ausgehend)|smtp.mail.ovh.net **oder** ssl0.ovh.net|
|Port|465|
|Sicherheitstyp|SSL/TLS|

### POP oder IMAP, was ist der Unterschied? <a name="popimap"></a>

Wenn Sie Ihre E-Mail-Adresse manuell konfigurieren, werden Sie von Ihrem E-Mail-Client gefragt, ob Sie **POP** (**P**ost **O**ffice **P**rotocol) oder **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol) verwenden möchten. Um dies zu verstehen, lokalisieren Sie die Rolle der POP und IMAP Protokolle in der Konfiguration Ihrer E-Mail-Adresse.

Bei der Konfiguration Ihres E-Mail-Clients müssen Sie die Informationen des eingehenden **Servers** angeben, um E-Mails zu empfangen, und den ausgehenden **Server**, um E-Mails zu senden. Für den Versand von E-Mails gibt es keine Wahl, sondern es wird das **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) verwendet. Für den Empfang haben Sie somit die Wahl zwischen **POP** oder **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Um den Unterschied zwischen der Verwendung des POP- und IMAP-Protokolls zu verstehen, werden wir die Elemente, aus denen sich die Verarbeitung Ihrer eingehenden E-Mails zusammensetzt, im Einzelnen beschreiben:

1. **Ihr Gerät**: Computer, Smartphone oder Tablet auf dem ein E-Mail-Client läuft.
2. **Ihr E-Mail-Client**: Anwendung zur Verwaltung Ihrer E-Mail-Accounts und deren Inhalte. Mit der Auswahl entscheiden Sie über die Funktionalität des E-Mail-Zugriffs.
3. **Empfangsprotokoll**: Das ausgewählte Protokoll bestimmt, wie E-Mails vom Client abgerufen werden. Diese Wahl wirkt sich auf andere E-Mail-Clients aus, die denselben E-Mail-Account nutzen.
    - **IMAP**: Ihr E-Mail-Client fragt den Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Wenn Sie eine ungelesene E-Mail anzeigen, wird diese vom Server standardmäßig als „gelesen“ markiert. Andere IMAP-fähige Geräte können diesen Status sehen und die E-Mail so lamge abrufen, bis sie von einem der Clients gelöscht wird.
    - **POP**: Ihr E-Mail-Client fragt den Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Standardmäßig wird die Nachricht vom Server gelöscht, sobald sie auf Ihr Gerät heruntergeladen wurde. Daher können andere Geräte, die diesen E-Mail-Account nutzen, die entsprechende E-Mail nicht anzeigen.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Diese Beschreibung ist eine Zusammenfassung der Standardfunktionen beider Protokolle. Sie können auch POP so einstellen, dass E-Mails beim Abholen nicht gelöscht werden. Unser Ziel ist es, die native Funktionsweise dieser beiden Protokolle zu beschreiben.

## Weiterführende Informationen <a name="gofurther"></a>

[Konfiguration von E-Mail Pro auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Konfiguration von Exchange auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
