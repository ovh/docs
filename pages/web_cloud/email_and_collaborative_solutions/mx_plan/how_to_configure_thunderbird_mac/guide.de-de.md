---
title: 'MX Plan - E-Mail-Account in Thunderbird für macOS konfigurieren'
excerpt: 'Erfahren Sie, wie Sie Ihre MX Plan E-Mail-Adresse in Thunderbird für macOS konfigurieren'
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

MX Plan E-Mail-Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Thunderbird ist ein freie E-Mail-Software.

**Diese Anleitung erklärt, wie Sie Ihre MX Plan E-Mail-Adresse in Thunderbird für macOS konfigurieren.**

## Voraussetzungen

- Sie verwenden einen MX Plan E-Mail-Account. Dies ist der Fall für die folgenden Dienstleistungen:
	- [Webhosting](/links/web/hosting) (inkludiert in allen Angeboten)
	- [Kostenloses Hosting 100M](/links/web/domains-free-hosting) (inkludiert bei Bestellung eines Domainnamens)
	- Separat abonnierter MX Plan Dienst
	- [Zimbra Starter E-Mail-Account](/links/web/zimbra)
- Thunderbird ist auf Ihrem Mac-System installiert.
- Sie verfügen über Anmeldeinformationen für den E-Mail-Account, die Sie konfigurieren möchten.

/// details | Informationen zur Verwaltung und Konfiguration von OVHcloud Diensten

In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.  
Wir empfehlen, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden, oder Ihre Fragen in der OVHcloud Community zu stellen. OVHcloud kann keine technische Unterstützung für die Nutzung externer Tools anbieten.

Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

///

## In der praktischen Anwendung

### Account hinzufügen

- **Beim ersten Start der Anwendung**: Ein Konfigurationsassistent wird angezeigt und bittet Sie, Ihre E-Mail-Adresse einzugeben.

- **Wenn bereits ein Account in der Anwendung eingerichtet ist**:

    1. Klicken Sie auf das Menü `☰`{.action} in der oberen horizontalen Leiste.
    2. Klicken Sie auf `Neues Konto`{.action}.
    3. Klicken Sie auf `E-Mail-Adresse`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

> [!warning]
>
> Geben Sie nur die passenden Werte für Ihren Standort ein (**EUROPA** oder **AMERIKA/ASIEN-PAZIFIK**).

Folgen Sie den Konfigurationsschritten, indem Sie nacheinander auf die folgenden **5** Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie in dem angezeigten Fenster die folgenden Informationen ein:
>>
>>  - Ihren vollständigen Namen (Anzeigename).
>>  - Die zu konfigurierende E-Mail-Adresse.
>>
>> Klicken Sie auf `Weiter`{.action}, um die Einstellungen abzuschließen.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-02.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> Wenn Thunderbird einen OVHcloud Domainnamen erkennt, wird eine automatische Konfiguration für das MX Plan Angebot vorgeschlagen:
>>
>>  - Wenn die Informationen korrekt sind, klicken Sie auf `Weiter`{.action} und gehen Sie zum Schritt 5.
>>  - Andernfalls klicken Sie auf `KONFIGURATION ÄNDERN`{.action}, um eine manuelle Konfiguration vorzunehmen.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Schritt 3**
>>
>> Empfangsservereinstellungen:
>>
>>  - **Protokoll**: IMAP
>>  - **Server (Empfang) EUROPA**: imap.mail.ovh.net **oder** ssl0.ovh.net
>>  - **Server (Empfang) AMERIKA / ASIEN-PAZIFIK**: imap.mail.ovh.ca
>>  - **Port**: 993
>>  - **Verbindungssicherheit**: SSL/TLS
>>  - **Authentifizierungsart**: Normales Passwort
>>  - **Benutzername**: Ihre vollständige E-Mail-Adresse
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-04.png){.thumbnail .w-600}
>>
> **Schritt 4**
>>
>> Einstellungen des Sendeservers:
>>
>>  - **Protokoll**: SMTP 
>>  - **Server (ausgehend) EUROPA**: smtp.mail.ovh.net **oder** ssl0.ovh.net
>>  - **Server (ausgehend) AMERIKA / ASIEN-PAZIFIK**: smtp.mail.ovh.ca
>>  - **Port**: 587
>>  - **Verbindungssicherheit**: STARTTLS
>>  - **Authentifizierungsart**: Normales Passwort
>>  - **Benutzername**: Ihre vollständige E-Mail-Adresse
>> 
>> 1\. Klicken Sie auf `Testen`{.action}, um die eingegebenen Einstellungen zu überprüfen.<br>
>> 2\. Klicken Sie auf `Weiter`{.action}, um diese Einstellungen zu bestätigen.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-05.png){.thumbnail .w-600}
>>
> **Schritt 5**
>>
>> Geben Sie das Passwort des E-Mail-Accounts ein und klicken Sie auf `Weiter`{.action}, um die Konfiguration abzuschließen.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **POP-Konfiguration**
>
> Wenn Sie eine POP-Konfiguration für Ihre E-Mail-Adresse wünschen, ersetzen Sie die Einstellungen von **Schritt 3** durch die folgenden:
>
> Empfangsservereinstellungen:
>
> - **Protokoll**: POP3
> - **Server (Empfang) EUROPA**: pop.mail.ovh.net **oder** ssl0.ovh.net
> - **Server (Empfang) AMERIKA / ASIEN-PAZIFIK**: pop.mail.ovh.ca
> - **Port**: 995
> - **Verbindungssicherheit**: SSL/TLS
> - **Authentifizierungsart**: Normales Passwort
> - **Benutzername**: Ihre vollständige E-Mail-Adresse

### E-Mail-Adresse nutzen

Sobald Ihre E-Mail-Adresse konfiguriert ist, können Sie damit beginnen, sie zu nutzen! Sie können nun E-Mails senden und empfangen.

OVHcloud bietet außerdem eine Webanwendung an, mit der Sie Ihre E-Mail-Adresse über einen Webbrowser nutzen können. Um auf den OVHcloud Webmail-Zugriff zu erhalten, klicken Sie auf [diesen Link](/links/web/email). Sie können sich dort mit den Zugangsdaten Ihres E-Mail-Accounts anmelden.

### Sicherung Ihres E-Mail-Accounts erstellen

Wenn Sie eine Aktion durchführen müssen, die zu Datenverlusten Ihres E-Mail-Accounts führen könnte, empfehlen wir Ihnen, vorher eine Sicherung durchzuführen. Konsultieren Sie hierzu den Abschnitt "**Exportieren**" im Bereich "**Thunderbird**" unserer Anleitung "[Manuelle Migration Ihrer E-Mail-Adresse](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exporter)".

### Vorhandene Einstellungen ändern

Wenn Ihren E-Mail-Account bereits eingerichtet ist und Sie auf die Kontoeinstellungen zugreifen müssen, um sie zu ändern:

1. Klicken Sie auf das Menü `☰`{.action} in der oberen horizontalen Leiste.
2. Klicken Sie auf `Kontoeinstellungen`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Um die Einstellungen, die sich auf den **Empfang** Ihrer E-Mails beziehen, zu ändern, klicken Sie auf `Servereinstellungen`{.action} in der linken Spalte unter Ihrer E-Mail-Adresse.

![thunderbird](images/configuration-thunderbird-mxplan-mac-08.png){.thumbnail .w-600}

- Um die Einstellungen, die sich auf den **Versand** Ihrer E-Mails beziehen, zu ändern, klicken Sie auf `Ausgehender Server (SMTP)`{.action} ganz unten in der linken Spalte.
- Klicken Sie auf die betreffende E-Mail-Adresse in der Liste und dann auf `Ändern`{.action}.

![thunderbird](images/configuration-thunderbird-mxplan-mac-09.png){.thumbnail .w-600}

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zur Konfiguration einer E-Mail-Adresse über den Thunderbird-E-Mail-Client finden Sie im [Mozilla-Hilfezentrum](https://support.mozilla.org/products/thunderbird).

[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
