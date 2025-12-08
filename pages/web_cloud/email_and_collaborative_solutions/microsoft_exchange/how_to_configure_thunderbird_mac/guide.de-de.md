---
title: 'Exchange - E-Mail-Account in Thunderbird für macOS konfigurieren'
excerpt: 'Erfahren Sie, wie Sie Ihre Exchange E-Mail-Adresse in Thunderbird für macOS konfigurieren'
updated: 2025-09-19
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
.w-400 {
  max-width:400px !important;
}
</style>

## Ziel

Exchange Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Thunderbird ist ein freie E-Mail-Software.

**Diese Anleitung erklärt, wie Sie Ihre Exchange E-Mail-Adresse in Thunderbird für macOS konfigurieren.**

## Voraussetzungen

- Sie verwenden [Hosted Exchange](/links/web/emails-hosted-exchange) oder [Private Exchange](/links/web/emails-private-exchange).
- Thunderbird ist auf Ihrem Mac-System installiert.
- Sie verfügen über Anmeldeinformationen für den E-Mail-Account, die Sie konfigurieren möchten.

/// details | Informationen zur Verwaltung und Konfiguration von OVHcloud Diensten

In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.  
Wir empfehlen, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden, oder Ihre Fragen in der OVHcloud Community zu stellen. OVHcloud kann keine technische Unterstützung für die Nutzung externer Tools anbieten.

Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).

///

## In der praktischen Anwendung

> [!primary]
>
> In dieser Anleitung verwenden wir den Servernamen: ex?.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Exchange Dienst ersetzt werden.
>
> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
> 1. Wählen Sie den gewünschten Dienst aus.
> 1. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.

### Account hinzufügen

- **Beim ersten Start der Anwendung**: Erscheint ein Konfigurationsassistent, der Sie auffordert, Ihre E-Mail-Adresse einzugeben.

- **Wenn bereits ein Account konfiguriert ist**:

    1. Klicken Sie auf das Menü `☰`{.action} in der oberen horizontalen Leiste.
    2. Klicken Sie auf `Neues Konto`{.action}.
    3. Klicken Sie auf `E-Mail-Adresse`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

Folgen Sie den Konfigurationsschritten, indem Sie nacheinander auf die folgenden **5** Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie in dem angezeigten Fenster folgende Informationen ein:
>>
>>  - Ihren vollständigen Namen (Anzeigename).
>>  - Die zu konfigurierende E-Mail-Adresse.
>>
>> Klicken Sie auf `Weiter`{.action}, um die Einstellungen abzuschließen.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-02.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> Wenn Thunderbird einen OVHcloud Domainnamen erkennt, wird eine automatische Konfiguration für das MX Plan Angebot vorgeschlagen. Klicken Sie auf `KONFIGURATION ÄNDERN`{.action}.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Schritt 3**
>>
>> Empfangsservereinstellungen:
>>
>>  - **Protokoll**: IMAP
>>  - **Hostname**: ex?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers)
>>  - **Port**: 993
>>  - **Verbindungssicherheit**: SSL/TLS
>>  - **Authentifizierungsart**: Normales Passwort
>>  - **Benutzername**: Ihre vollständige E-Mail-Adresse
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-04.png){.thumbnail .w-600}
>>
> **Schritt 4**
>>
>> Einstellungen des Sendeservers:
>>
>>  - **Protokoll**: SMTP 
>>  - **Hostname**: ex?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers)
>>  - **Port**: 587
>>  - **Verbindungssicherheit**: STARTTLS
>>  - **Authentifizierungsart**: Normales Passwort
>>  - **Benutzername**: Ihre vollständige E-Mail-Adresse
>> 
>> 1\. Klicken Sie auf `Testen`{.action}, um die eingegebenen Einstellungen zu überprüfen.
>> 2\. Klicken Sie auf `Weiter`{.action}, um diese Einstellungen zu bestätigen.
>>
>> ![thunderbird](images/configuration-thunderbird-exchange-05.png){.thumbnail .w-600}
>>
> **Schritt 5**
>>
>> Geben Sie das Passwort ein, das mit dem E-Mail-Account verknüpft ist, und klicken Sie dann auf `Weiter`{.action}, um die Konfiguration abzuschließen.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **POP-Konfiguration**
>
> Wenn Sie eine POP-Konfiguration für Ihre E-Mail-Adresse wünschen, ersetzen Sie die Einstellungen des **Schritts 3** durch folgende:
>
> Empfangsservereinstellungen:
>
> - **Protokoll**: POP3
> - **Hostname**: ex?.mail.ovh.net (ersetzen Sie das "?" durch die Nummer Ihres Servers)
> - **Port**: 995
> - **Verbindungssicherheit**: SSL/TLS
> - **Authentifizierungsart**: Normales Passwort
> - **Benutzername**: Ihre vollständige E-Mail-Adresse

### E-Mail-Adresse nutzen

Sobald Ihre E-Mail-Adresse konfiguriert ist, können Sie sie nutzen! Sie können nun E-Mails senden und empfangen.

OVHcloud bietet außerdem eine Webanwendung an, mit der Sie Ihre E-Mail-Adresse über einen Webbrowser zugreifen können. Um auf das OVHcloud Webmail zuzugreifen, klicken Sie auf [diesen Link](/links/web/email). Sie können sich dort mit den Zugangsdaten Ihres E-Mail-Accounts anmelden.

### Sicherung Ihres E-Mail-Accounts erstellen

Wenn Sie eine Aktion durchführen müssen, die zu Datenverlusten Ihres E-Mail-Accounts führen könnte, empfehlen wir Ihnen, vorher eine Sicherung des betroffenen E-Mail-Accounts durchzuführen. Konsultieren Sie den Abschnitt "**Exportieren**" im Bereich "**Thunderbird**" unserer Anleitung "[Manuelle Migration Ihrer E-Mail-Adresse](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Vorhandene Einstellungen ändern

Wenn Ihren E-Mail-Account bereits konfiguriert ist und Sie die Einstellungen des Kontos ändern müssen:

1. Klicken Sie auf das Menü `☰`{.action} in der oberen horizontalen Leiste.
2. Klicken Sie auf `Kontoeinstellungen`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Um die Einstellungen, die mit der **Empfang**-Funktion Ihrer E-Mails verbunden sind, zu ändern, klicken Sie auf `Servereinstellungen`{.action} in der linken Spalte unter Ihrer E-Mail-Adresse.

![thunderbird](images/configuration-thunderbird-exchange-mac-08.png){.thumbnail .w-600}

- Um die Einstellungen, die mit der **Versand**-Funktion Ihrer E-Mails verbunden sind, zu ändern, klicken Sie auf `Ausgehender Server (SMTP)`{.action} ganz unten in der linken Spalte.
- Klicken Sie auf die betroffene E-Mail-Adresse in der Liste, und dann auf `Ändern`{.action}.

![thunderbird](images/configuration-thunderbird-exchange-mac-09.png){.thumbnail .w-600}

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Für weitere Informationen zur Konfiguration einer E-Mail-Adresse über den Thunderbird-E-Mail-Client konsultieren Sie [das Mozilla-Hilfezentrum](https://support.mozilla.org/products/thunderbird).

[Erste Schritte mit Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Erste Schritte mit Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
