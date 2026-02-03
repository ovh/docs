---
title: 'E-Mail Pro - Einrichten eines E-Mail-Accounts auf klassischem Outlook für Windows'
excerpt: 'So konfigurieren Sie Ihren E-Mail Pro Account mit dem klassischen Outlook für Windows'
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

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Diese Anleitung erklärt, wie Sie Ihre E-Mail Pro Adresse in Windows Outlook oder neuer einrichten.**

## Voraussetzungen

- Sie verfügen über einen [E-Mail Pro Account](/links/web/email-pro).
- Sie haben [Outlook "Classic"](https://support.microsoft.com/de-de/office/outlook-classic-installieren-oder-neu-installieren-5c94902b-31a5-4274-abb0-b07f4661edf5) installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.

/// details | Informationen zur Verwaltung und Konfiguration der OVHcloud Dienste

In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.

Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

///

## In der praktischen Anwendung

> [!warning]
>
> Diese Dokumentation gilt ausschließlich für **Klassisches Outlook**, der in der Microsoft 365-Suite erhältlich ist. Wenn Sie die neue Outlook-Version verwenden, konsultieren Sie unsere Anleitung "[Email Pro - Konfigurieren Ihres Email Pro Accounts im neuen Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10)".
>
> Um Klassisches Outlook auf Ihrem Windows-Computer zu installieren, laden Sie es von der Microsoft-Seite "[Installieren oder Erneutes Installieren des klassischen Outlook auf einem Windows-PC](https://support.microsoft.com/de-de/office/outlook-classic-installieren-oder-neu-installieren-5c94902b-31a5-4274-abb0-b07f4661edf5)" herunter und installieren Sie es.
>
> Nach Abschluss der Installation können Sie die beiden Versionen unterscheiden, wenn sie installiert sind, indem Sie "Outlook" in der Windows-Suchleiste eingeben. Sie können dann den Unterschied wie unten sehen.
>
> ![Outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Account hinzufügen <a name="add-account"></a>

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro?.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
>
> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
> 1. Klicken Sie auf `E-Mail Pro`{.action}.
> 1. Wählen Sie den gewünschten Dienst aus.
> 1. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Account hinzufügen`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail .h-500}

Um Ihre E-Mail-Adresse einzurichten, folgen Sie den Schritten, indem Sie auf die untenstehenden Tabs klicken.

> **Schritt 1**
>>
>> - Wählen Sie in dem Fenster **Account hinzufügen** die Option `Manuelle Konfiguration oder zusätzliche Servertypen`{.action} aus.
>> - Klicken Sie auf `Weiter`{.action}, um fortzufahren.
>> - Wählen Sie `POP oder IMAP`{.action} aus.
>> - Klicken Sie auf `Weiter`{.action}, um fortzufahren.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
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
>> **Accounttyp**: Wählen Sie IMAP aus.<br>
>> **Eingehender E-Mail-Server**: pro?.mail.ovh.net (ersetzen Sie das **"?"** durch die Nummer Ihres Servers).<br>
>> **Ausgehender E-Mail-Server (SMTP)**: pro?.mail.ovh.net (ersetzen Sie das **"?"** durch die Nummer Ihres Servers).<br>
>>
>> Anmeldeinformationen <br>
>> **Benutzername**: Geben Sie Ihre vollständige E-Mail-Adresse ein.<br>
>> **Passwort**: Geben Sie das Passwort ein, das mit Ihrer E-Mail-Adresse verknüpft ist.<br>
>>
>> Klicken Sie auf `Weitere Einstellungen...`{.action} **(2)** und wechseln Sie zum nächsten Schritt.
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Schritt 3**
>>
>> Wählen Sie im Tab `Ausgehender Server` die Option `Mein ausgehender Server (SMTP) erfordert eine Authentifizierung`{.action} aus und lassen Sie `Die gleichen Einstellungen wie bei meinem eingehenden E-Mail-Server verwenden`{.action} ausgewählt.
>>
>> Im Tab `Erweiterte Optionen`:
>>
>> - **Eingehender Server (IMAP)**: 993
>> - **Verwenden Sie den folgenden verschlüsselten Verbindungstyp**: SSL/TLS
>> - **Ausgehender E-Mail-Server (SMTP)**: 587
>> - **Verwenden Sie den folgenden verschlüsselten Verbindungstyp**: STARTTLS
>>
>> Klicken Sie auf `OK`{.action}, um die Informationen zu bestätigen. Klicken Sie auf `Weiter`{.action}, um die Einrichtung des Accounts zu starten.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Schritt 4**
>>
>> Klicken Sie auf `Weiter`{.action}, um die Einrichtung des Accounts zu starten. Wenn die Einstellungen bestätigt werden, erhalten Sie das untenstehende Fenster.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können: [Webmail](/links/web/email). Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) heranziehen.

### Backup Ihres E-Mail-Accounts

Wenn Sie eine Änderung vornehmen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt zu **Über Windows exportieren** in unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#uber-windows-exportieren)".

### Bestehende Einstellungen ändern

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie auf die Account-Einstellungen zugreifen müssen, um diese zu ändern:

- Gehen Sie in `Datei`{.action} in der Menüleiste oben auf Ihrem Bildschirm.
- Wählen Sie das zu ändernde Account im Dropdown-Menü **(1)** aus.
- Klicken Sie auf `Accounteinstellungen`{.action} **(2)** darunter.
- Klicken Sie auf `Accounteinstellungen...`{.action} **(3)**, um zum Einstellungsfenster zu gelangen.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

- Das Accounteinstellungsfenster wird angezeigt, wählen Sie das betreffende E-Mail-Account aus und klicken Sie auf `Ändern...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Folgen Sie den Anweisungen zum Einrichten Ihres Accounts ab **Schritt 2** im Bereich [Account hinzufügen](#add-account) dieser Anleitung.

### Allgemeine Einstellungen zum Senden und Empfangen <a name="settings-account"></a>

#### Einstellungen zum Empfangen von IMAP und POP <a name="imap-pop"></a>

Beim Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Accounttyps die Verwendung von **IMAP**. Sie können jedoch auch **POP** auswählen.

Wählen Sie den Tab entsprechend Ihrer Konfiguration aus:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Eingehender Server**: pro?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers).
>> - **Port**: 993.
>> - **Sicherheitstyp**: SSL/TLS.
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Eingehender Server**: pro?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers).
>> - **Port**: 995.
>> - **Sicherheitstyp**: SSL/TLS.

#### Einstellungen zum Senden von SMTP <a name="smtp"></a>

Für das Senden von E-Mails finden Sie unten die zu verwendenden **SMTP**-Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
- **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
- **Ausgehender Server**: pro?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers).
- **Port**: 587.
- **Sicherheitstyp**: STARTTLS.ama

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Outlook-App auf macOS finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/add-mail-account-in-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguration Ihrer MX Plan Adresse mit Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Konfiguration von Exchange auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Treten Sie unserer [User Community](/links/community) bei.