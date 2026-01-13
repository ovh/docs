---
title: 'Exchange - E-Mail-Account auf klassischem Outlook für Windows einrichten'
excerpt: 'Informationen zum Konfigurieren eines Exchange Accounts in einem klassischen Outlook für Windows'
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

Exchange Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Microsoft Outlook ist das empfohlene Programm, um eine Exchange E-Mail-Adresse mit kollaborativen Funktionen zu verwenden.

**Diese Anleitung erklärt, wie Sie ein Exchange Account auf Microsoft Outlook für Windows konfigurieren.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2YeGXo10CX8?si=mINBBXq6qb4MiFEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über einen [Exchange Account](/links/web/emails-hosted-exchange).
- Sie haben die Windows Anwendung [Outlook Classic](https://support.microsoft.com/de-de/office/installieren-oder-erneutes-installieren-des-klassischen-outlook-auf-einem-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5).
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.
- Der OVHcloud SRV-Eintrag muss in der DNS-Zone der Domain korrekt konfiguriert sein. Lesen Sie hierzu unsere Anleitung "[Eine Domain zu Ihrer Exchange Dienstleistung hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".

/// details | Informationen zur Verwaltung und Konfiguration der OVHcloud Dienste

In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.

Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden, und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

///

> [!primary]
>
> Sie verwenden Outlook für Mac? Die zugehörige Dokumentation finden Sie hier: [Konfiguration von Exchange auf Outlook für Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).

## In der praktischen Anwendung

> [!warning]
>
> Bevor Sie mit der Konfiguration Ihres Accounts beginnen, ist es wichtig zu beachten, dass die mit Windows 11 kostenlos mitgelieferte Outlook-Anwendung [nicht kompatibel](https://learn.microsoft.com/de-de/microsoft-365-apps/outlook/get-started/supported-account-types) mit den OVHcloud Exchange-Lösungen, auch als *on-premises* bezeichnet, ist. Sie müssen die Version **Outlook Classic** verwenden.
>
> Um Outlook Classic auf Ihrem Windows-Computer zu installieren, laden Sie es von der Microsoft-Seite "[Installieren oder Erneutes Installieren des klassischen Outlook auf einem Windows-PC](https://support.microsoft.com/de-de/office/installieren-oder-erneutes-installieren-des-klassischen-outlook-auf-einem-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5)" herunter und installieren Sie es.
>
> Geben Sie nach Abschluss der Installation in der Windows-Suchleiste "Outlook" ein, um die beiden Versionen bei der Installation voneinander zu unterscheiden. Sie können dann den Unterschied wie folgt sehen.
>
> ![Outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Account hinzufügen <a name="add-account"></a>

- **Wenn Sie die Anwendung zum ersten Mal starten**: Es öffnet sich ein Konfigurationsassistent und Sie werden dazu aufgefordert, Ihre E-Mail-Adresse einzugeben.

- **Falls Sie bereits einen Account eingerichtet haben**: Klicken Sie am oberen Rand Ihres Bildschirms auf `Datei`{.action} und anschließend auf `Account hinzufügen`{.action}.

![Outlook](images/config-outlook-exchange01.png){.thumbnail .h-500}

- Lassen Sie `E-Mail-Account` aktiviert und füllen Sie folgende Informationen aus:
    - **Name**: Geben Sie einen Anzeigenamen ein.
    - **E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
    - **Passwort**: Geben Sie das Passwort für Ihre E-Mail-Adresse ein.
    - **Passwort bestätigen**: Geben Sie erneut das Passwort für Ihre E-Mail-Adresse ein.
- Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![Exchange](images/config-outlook-exchange02.png){.thumbnail .h-500}

- Wenn Ihre Domain-Konfiguration gültig ist, kann eine Autorisierungsnachricht zum OVHcloud Exchange-Server angezeigt werden. Klicken Sie auf `Autorisieren`{.action} **(1)**, um die automatische Konfiguration Ihres Exchange Accounts zu ermöglichen.
- Ein zweiter Authentifizierungsdialog wird angezeigt. Geben Sie das Passwort für Ihre E-Mail-Adresse **(2)** ein.

![Exchange](images/config-outlook-exchange03.png){.thumbnail .h-500}

Nach der Autorisierung und Authentifizierung am Exchange-Server von OVHcloud ist die Konfiguration abgeschlossen und Ihren Account einsatzbereit.

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

Ihre Exchange E-Mail-Adresse sowie alle kollaborativen Funktionen sind ebenfalls über das [OWA Interface](/links/web/email) verfügbar. Bei Fragen zu dessen Verwendung können Sie unsere Anleitung zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) heranziehen.

### Bestehende Einstellungen ändern

> [!warning]
>
> Es ist nicht möglich, die Servereinstellungen eines Exchange Accounts zu ändern. Wenn Sie ein Problem mit der Synchronisierung mit dem Server haben, müssen Sie das Outlook-Account löschen und es erneut konfigurieren. Um dies zu tun, folgen Sie den unten stehenden Anweisungen.

Wenn Ihren E-Mail-Account bereits eingerichtet ist und Sie auf die Accounteinstellungen zugreifen müssen, um es zu löschen:

- Gehen Sie zu `Datei`{.action} in der Menüleiste oben auf Ihrem Bildschirm.
- Wählen Sie das zu ändernde Account im Dropdown-Menü **(1)** aus.
- Klicken Sie auf `Accounteinstellungen`{.action} **(2)** darunter.
- Klicken Sie auf `Accounteinstellungen...`{.action} **(3)**, um zum Einstellungsfenster zu gelangen.

![Outlook](images/config-outlook-exchange04.png){.thumbnail .h-500}

- Das Fenster mit den Accounteinstellungen wird angezeigt. Wählen Sie das betroffene E-Mail-Account aus und klicken Sie auf `Löschen`{.action}.

![Outlook](images/config-outlook-exchange05.png){.thumbnail .h-500}

Nachdem das Exchange Account gelöscht wurde, folgen Sie dem Abschnitt "[Account hinzufügen](#add-account)" dieses Guides, um Ihren E-Mail-Account erneut einzurichten.

### Backup Ihres E-Mail-Accounts

Wenn Sie eine Änderung vornehmen, die den Verlust der Daten Ihres E-Mail-Accounts zur Folge haben könnte, empfehlen wir Ihnen eine vorherige Sicherung des betreffenden E-Mail-Accounts. Lesen Sie hierzu den Abschnitt zu **Windows** in unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#uber-windows-exportieren)".

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Outlook-App auf Windows finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/add-mail-account-in-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Konfiguration Ihrer MX Plan Adresse mit Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Konfiguration von E-Mail Pro auf Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Treten Sie unserer [User Community](/links/community) bei.