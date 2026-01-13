---
title: "MX Plan / Zimbra Starter - Konfigurieren Sie Ihre E-Mail-Adresse auf klassischem Outlook für Windows"
excerpt: "Erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse mit dem klassischen Outlook für Windows konfigurieren"
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Ziel

Die E-Mail-Adressen der Angebote **MX Plan** und [Zimbra](/links/web/emails-zimbra) Starter können in einer kompatiblen E-Mail-Software konfiguriert werden. Dies ermöglicht das Senden und Empfangen von Nachrichten über die gewünschte Anwendung.

**Diese Anleitung erklärt, wie Sie Ihren E-Mail-Account in Windows Outlook oder neuer einrichten.**

## Voraussetzungen

- Sie benötigen eine OVHcloud E-Mail-Lösung, wie:
    - **MX Plan**, angeboten mit unseren [Webhostings](/links/web/hosting) oder enthalten in [Kostenloses Hosting 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter.
- Sie benötigen die [neue Outlook-Version](https://support.microsoft.com/de-de/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627), installiert auf Ihrem Windows-System.
- Sie benötigen die Zugangsdaten für die E-Mail-Adresse, die Sie konfigurieren möchten.

/// details | Informationen zur Verwaltung und Konfiguration der OVHcloud Dienste

In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.

Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

///

> [!primary]
>
> Sie verwenden Outlook für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration Ihrer E-Mail-Adressen in Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>

## In der praktischen Anwendung

> [!warning]
>
> Diese Dokumentation gilt ausschließlich für **Klassisches Outlook**, das in der Microsoft 365-Suite verfügbar ist. Falls Sie die neue Outlook-Version nutzen, konsultieren Sie unsere Anleitung [MX Plan / Zimbra Starter - E-Mail-Account in der neuen Outlook-Version für Windows hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>
> Um Klassisches Outlook auf Ihrem Windows-Computer zu installieren, laden Sie es von der Microsoft-Seite "[Installieren oder Erneutes Installieren des klassischen Outlook auf einem Windows-PC](https://support.microsoft.com/de-de/office/outlook-classisch-installieren-oder-neu-installieren-auf-einem-pc-mit-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" herunter und installieren Sie es.
>
> Nach Abschluss der Installation können Sie die beiden Versionen unterscheiden, wenn sie installiert sind. Geben Sie dazu "Outlook" in der Windows-Suchleiste ein. Sie können dann den Unterschied wie unten gezeigt erkennen.
>
> ![Outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Account hinzufügen <a name="add-account"></a>

> [!primary]
>
> Wissen Sie nicht, ob Sie Ihren E-Mail-Account in **POP** oder **IMAP** konfigurieren müssen?
>
> Bevor Sie fortfahren, konsultieren Sie den Abschnitt "[POP oder IMAP, was ist der Unterschied?](#popimap)" in dieser Anleitung.
>
> In den folgenden Einstellungen können Sie zwei verschiedene Hostnamen für denselben Server (empfangen oder senden) eingeben. Diese Werte verweisen exakt auf denselben Server. Sie wurden eingerichtet, um die Eingabe zu erleichtern und die Verwirrung zwischen den Protokollen POP, IMAP und SMTP zu vermeiden, die unterschiedliche Ports nutzen.

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Account hinzufügen`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail .h-500}

Um Ihre E-Mail-Adresse zu konfigurieren, folgen Sie den Schritten, indem Sie auf die untenstehenden Tabs klicken.

> [!warning]
>
> Sie müssen den Wert entsprechend Ihrer Region (**EUROPE** oder **AMERIKA / ASIEN-PACIFIK**) eingeben.

> [!tabs]
> **Schritt 1**
>>
>> - Wählen Sie in dem Fenster **Account hinzufügen** die Option `Manuelle Konfiguration oder zusätzliche Servertypen`{.action} aus.
>> - Klicken Sie auf `Weiter`{.action}, um fortzufahren.
>> - Wählen Sie `POP oder IMAP`{.action} aus.
>> - Klicken Sie auf `Weiter`{.action}, um fortzufahren.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Schritt 2**
>>
>> Geben Sie die Anmeldeinformationen für Ihren Account ein **(1)**:
>>
>> Benutzerinformationen <br>
>> **Ihr Name**: Legen Sie einen Anzeigenamen fest.<br>
>> **E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.<br>
>>
>> Serverinformationen <br>
>> - **Accounttyp**: Wählen Sie IMAP aus<br>
>> - **Eingehender E-Mail-Server**: <br>
>>      - **EUROPE**: imap.mail.ovh.net **oder** ssl0.ovh.net <br>
>>      - **AMERIKA/ASIEN-PACIFIK**: imap.mail.ovh.ca <br>
>> - **Ausgehender E-Mail-Server (SMTP)**: <br>
>>      - **EUROPE**: smtp.mail.ovh.net **oder** ssl0.ovh.net <br>
>>      - **AMERIKA/ASIEN-PACIFIK**: smtp.mail.ovh.ca <br>
>>
>> Anmeldeinformationen <br>
>> **Benutzername**: Geben Sie Ihre vollständige E-Mail-Adresse ein.<br>
>> **Passwort**: Geben Sie das Passwort ein, das mit Ihrer E-Mail-Adresse verknüpft ist.<br>
>>
>> Klicken Sie auf `Weitere Einstellungen...`{.action} **(2)** und gehen Sie zum nächsten Schritt über.
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Schritt 3**
>>
>> Gehen Sie zum Register `Ausgehender Server` und aktivieren Sie `Mein ausgehender Server (SMTP) benötigt eine Authentifizierung`{.action} und lassen Sie `Die gleichen Einstellungen wie bei meinem eingehenden E-Mail-Server verwenden`{.action} ausgewählt.
>>
>> Gehen Sie zum Register `Erweiterte Optionen`:
>>
>> - **Eingehender Server (IMAP)**: 993
>> - **Verwenden Sie den folgenden Verschlüsselungstyp**: SSL/TLS
>> - **Ausgehender E-Mail-Server (SMTP)**: 465
>> - **Verwenden Sie den folgenden Verschlüsselungstyp**: SSL/TLS
>>
>> Klicken Sie auf `OK`{.action}, um die Informationen zu bestätigen. Klicken Sie auf `Weiter`{.action}, um die Account-Konfiguration zu starten.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Schritt 4**
>>
>> Klicken Sie auf `Weiter`{.action}, um die Account-Konfiguration zu starten. Wenn die Einstellungen bestätigt werden, erhalten Sie das untenstehende Fenster.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### E-Mail-Adresse verwenden

Sobald Ihr E-Mail-Account eingerichtet ist, können Sie ihn verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihren E-Mail-Account zugreifen können: [Webmail](/links/web/email). Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) heranziehen.

### Backup Ihres E-Mail-Accounts

Wenn Sie eine Änderung vornehmen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt zu **Windows** in unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#uber-windows-exportieren)".

### Bestehende Einstellungen ändern

Wenn Ihren E-Mail-Account bereits konfiguriert ist und Sie auf die Accounteinstellungen zugreifen müssen, um sie zu ändern:

- Gehen Sie zu `Datei`{.action} in der Menüleiste oben auf Ihrem Bildschirm.
- Wählen Sie das zu ändernde Account im Dropdown-Menü **(1)** aus.
- Klicken Sie auf `Accounteinstellungen`{.action} **(2)** darunter.
- Klicken Sie auf `Accounteinstellungen...`{.action} **(3)**, um zum Einstellungsfenster zu gelangen.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

- Das Accounteinstellungsfenster wird angezeigt. Wählen Sie das betroffene E-Mail-Account aus und klicken Sie auf `Ändern...`{.action}.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Allgemeine Einstellungen zum Senden und Empfangen <a name="settings-account"></a>

#### Einstellungen für den Empfang von IMAP und POP <a name="imap-pop"></a>

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Accounttyps die Nutzung von **IMAP**. Sie können jedoch auch **POP** auswählen.

> [!warning]
>
> Sie müssen den Wert entsprechend Ihrer Region (**EUROPE** oder **AMERIKA / ASIEN-PACIFIK**) richtig notieren.

Wählen Sie den Tab aus, das Ihrer Konfiguration entspricht:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **EUROPE (empfangen)**: imap.mail.ovh.net **oder** ssl0.ovh.net.
>> - **AMERIKA/ASIEN-PACIFIK (empfangen)**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Sicherheitstyp**: SSL/TLS.
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **EUROPE (empfangen)**: pop.mail.ovh.net **oder** ssl0.ovh.net.
>> - **AMERIKA/ASIEN-PACIFIK (empfangen)**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Sicherheitstyp**: SSL/TLS.

#### Einstellungen zum Senden von SMTP <a name="smtp"></a>

Für das Senden von E-Mails finden Sie unten die zu verwendenden **SMTP**-Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
- **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
- **EUROPE (senden)**: smtp.mail.ovh.net **oder** ssl0.ovh.net.
- **AMERIKA/ASIEN-PACIFIK (senden)**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Sicherheitstyp**: SSL/TLS.

### POP oder IMAP, was ist der Unterschied? <a name="popimap"></a>

Wenn Sie Ihre E-Mail-Adresse manuell konfigurieren, werden Sie von Ihrem E-Mail-Client gefragt, ob Sie **POP** (**P**ost **O**ffice **P**rotocol) oder **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol) verwenden möchten. Um dies zu verstehen, lokalisieren Sie die Rolle der POP und IMAP Protokolle in der Konfiguration Ihrer E-Mail-Adresse.

Bei der Konfiguration Ihres E-Mail-Clients müssen Sie die Informationen des eingehenden **Servers** angeben, um E-Mails zu empfangen, und den ausgehenden **Server**, um E-Mails zu senden. Für den Versand von E-Mails gibt es keine Wahl, sondern es wird das **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) verwendet. Für den Empfang haben Sie somit die Wahl zwischen **POP** oder **IMAP**.

![mxplan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Um den Unterschied zwischen der Verwendung des POP- und IMAP-Protokolls zu verstehen, werden wir die Elemente, aus denen sich die Verarbeitung Ihrer eingehenden E-Mails zusammensetzt, im Einzelnen beschreiben:

1. **Ihr Gerät**: Computer, Smartphone oder Tablet auf dem ein E-Mail-Client läuft.
2. **Ihr E-Mail-Client**: Anwendung zur Verwaltung Ihrer E-Mail-Accounts und deren Inhalte. Mit der Auswahl entscheiden Sie über die Funktionalität des E-Mail-Zugriffs.
3. **Empfangsprotokoll**: Das ausgewählte Protokoll bestimmt, wie E-Mails vom Client abgerufen werden. Diese Wahl wirkt sich auf andere E-Mail-Clients aus, die denselben E-Mail-Account nutzen.
    - **IMAP**: Ihr E-Mail-Client fragt den Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Wenn Sie eine ungelesene E-Mail anzeigen, wird diese vom Server standardmäßig als "gelesen" markiert. Andere IMAP-fähige Geräte können diesen Status sehen und die E-Mail so lamge abrufen, bis sie von einem der Clients gelöscht wird.
    - **POP**: Ihr E-Mail-Client fragt den Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Standardmäßig wird die Nachricht vom Server gelöscht, sobald sie auf Ihr Gerät heruntergeladen wurde. Daher können andere Geräte, die diesen E-Mail-Account nutzen, die entsprechende E-Mail nicht anzeigen.

![mxplan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Diese Beschreibung ist eine Zusammenfassung der Standardfunktionen beider Protokolle. Sie können auch POP so einstellen, dass E-Mails beim Abholen nicht gelöscht werden. Unser Ziel ist es, die native Funktionsweise dieser beiden Protokolle zu beschreiben.

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Outlook-App auf macOS finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/add-mail-account-in-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguration von E-Mail Pro auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Konfiguration von Exchange auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Treten Sie unserer [User Community](/links/community) bei.