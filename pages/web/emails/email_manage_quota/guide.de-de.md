---
title: "Speicherplatz eines E-Mail-Accounts verwalten"
slug: manage-email-quota
excerpt: "Erfahren Sie hier, wie Sie den Speicherplatz von E-Mail-Accounts verwalten und optimieren"
section: 'Diagnose'
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 17.11.2022**

## Ziel

Jeder OVHcloud E-Mail-Account verfügt über einen dedizierten Speicherplatz. Eine regelmäßige Verwaltung des Speicherplatzes verhindert dessen Auslastung, auch als "overquota" bezeichnet. Standardmäßig werden E-Mails, die Sie empfangen und versenden, auf dem Server Ihres E-Mail-Accounts gespeichert. Sie können Ihre E-Mails auch über ein E-Mail-Programm (Outlook, macOS Mail, Thunderbird, etc.) lokal auf Ihrem Computer speichern.

**Diese Anleitung erklärt, wie Sie den Speicherplatz eines E-Mail-Accounts verwalten und optimieren.**

## Voraussetzungen

- Sie verfügen über eine bereits konfigurierte OVHcloud E-Mail-Lösung: [**Hosted Exchange**](https://www.ovhcloud.com/de/emails/hosted-exchange/), [**Email Pro**](https://www.ovhcloud.com/de/emails/email-pro/) oder **MX Plan** (enthalten in einem [Webhosting](https://www.ovhcloud.com/de/web-hosting/), einem kostenlosen Start 10M Hosting](https://www.ovhcloud.com/de/domains/free-web-hosting/) oder separat bestellt).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), im Bereich `Web Cloud`{.action}.
- Sie verfügen über Anmeldeinformationen für den zu konfigurierenden E-Mail-Account.

> [!primary]
>
> **Sonderfälle**
>
> - Hinweis zum Start 10M Hosting: Dieses muss zuerst aktiviert werden, um einen E-Mail-Account zu erstellen. Sie können diese Operation über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) durchführen, indem Sie den betreffenden Domainnamen aufrufen.
> - Bei einem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) müssen Sie den zugehörigen MX Plan aktivieren, bevor Sie mit dieser Anleitung fortfahren. Lesen Sie hierzu unsere Anleitung "[Die in Ihrem Webhosting enthaltenen E-Mail-Accounts aktivieren](https://docs.ovh.com/de/hosting/webhosting-email-aktivieren/)".

## In der praktischen Anwendung <a name="instructions"></a>

Die Verwaltung des Speicherplatzes Ihres E-Mail-Accounts wird nachfolgend in 3 Maßnahmen unterteilt. Sie können je nach Bedarf individuell oder der Reihe nach durchgeführt werden.

- [**Überprüfen**](#check-quota) der aktuellen Quota Ihres E-Mail-Accounts. Damit können Sie die notwendigen Maßnahmen bewerten.
- [**Optimieren**](#optimise) des E-Mail-Accounts. Dieser Schritt bietet Ihnen Tipps, um den vorhandenen Speicherplatz besser auszunutzen.
- [**Archivieren** oder **E-Mail-Dienst wechseln**](#archiveorswitch). Wenn der vorherige Schritt nicht ausreicht, finden Sie hier die notwendigen Informationen, um ein lokales Archiv (auf Ihrem Computer) für Ihre E-Mails über Ihr E-Mail-Programm zu konfigurieren. Außerdem können Sie auf ein E-Mail-Angebot mit größerem Speicherplatz wechseln.

![E-Mail](images/email-quota-intro.gif){.thumbnail}

### 1. **Überprüfen** der aktuellen Quota Ihres E-Mail-Accounts <a name="check-quota"></a>

Sie können diese Aktion über das Kundencenter durchführen, wenn Sie den zugehörigen E-Mail-Dienst verwalten, und alternativ über Webmail, wenn Sie nur der Benutzer des E-Mail-Accounts sind.

#### Über das Kundencenter <a name="quotacontrolpanel"></a>

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Web Cloud`{.action} und folgen Sie den passenden Anweisungen für Ihren E-Mail-Dienst:

> [!tabs]
> **E-Mails (MX Plan)**
>>
>> Klicken Sie auf `E-Mails`{.action} und wählen Sie den Namen des betreffenden MX Plans aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Hier werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den aktuellen Verbrauch Ihrer E-Mail-Accounts sehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **E-Mail Pro**
>>
>> Klicken Sie auf `E-Mail Pro`{.action} und wählen Sie den betreffenden Dienst aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Hier werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den laufenden Verbrauch Ihrer E-Mail-Account einsehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Klicken Sie auf `Microsoft`{.action}, dann `Exchange`{.action} und wwählen Sie den betreffenden Dienst aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Hier werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den laufenden Verbrauch Ihrer E-Mail-Account einsehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Über das Webmail <a name="quotawebmail"></a>

Um sich im Webmail einzuloggen, gehen Sie auf die Seite <https://www.ovhcloud.com/de/mail/> und geben Sie die Login-Daten zu Ihrem E-Mail-Account ein. Wählen Sie anschließend das zu Ihrem Angebot passende Webmail-Interface aus:

> [!tabs]
> **OWA**: **E-Mails (MX Plan)** / **E-Mail Pro** / **Exchange**
>>
>> Klicken Sie auf den <i class=".icons-gear-concept icons-masterbrand-blue"></i> Button oben rechts und klicken Sie auf `Optionen`{.action}. Klicken Sie unter `Allgemein`{.action} auf `Mein Konto`{.action} in der linken Spalte. Sie können die aktuelle Speicherbelgung Ihres Accounts auf unten auf der Seite einsehen.<br><br>
>>![E-Mail](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **E-Mails (MX Plan)**
>>
>> Wenn Sie im Roundcube Webmail eingeloggt sind, wird die Quota im linken Bereich als Kreisdiagramm mit Prozentangabe angezeigt.<br><br>
>>![E-Mail](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2. **Optimieren** Ihres E-Mail-Accounts <a name="optimise"></a>

Wenn Ihr E-Mail-Account voll ist, können Sie keine E-Mails mehr empfangen.<br>
Wenn jemand eine E-Mail an diesen Account sendet, wird automatisch eine Fehlernachricht zurückgegeben, in der Form *"552, 5.2.2". The email account to which you sent a message has exhausted its quota."*.<br>
Sie können dann noch E-Mails versenden, diese werden aber nicht im Ordner für gesendete Nachrichten gespeichert.

#### Optimieren Sie den Speicherplatz Ihres E-Mail-Accounts

Überprüfen Sie die Inhalte Ihres E-Mail-Accounts, um überflüssige Elemente zu entfernen:

- `1`{.action} **Gelöschte Elemente (*Trash*)**: Dieser Ordner enthält die Elemente, die Sie gelöscht haben. Um zu vermeiden, dass sich E-Mails in diesem Ordner anhäufen, sollte er regelmäßig geleert werden.
- `2`{.action} **Gesendete Elemente (*Sent*)**: Wenn Sie eine E-Mail versenden, wird eine Kopie im "Gesendet"-Ordner Ihres E-Mail-Accounts gespeichert. Wir empfehlen, diesen Ordner regelmäßig zu leeren oder dessen Inhalt lokal auf Ihrem Computer oder in einem Cloud-Speicher abzulegen.
- `3`{.action} **Gespeicherte E-Mails mit großen Anhängen**: E-Mails mit angehängten Dateien verbrauchen deutlich mehr Speicherplatz auf dem Account. Wir empfehlen, diese stattdesssen lokal auf Ihrem Computer oder in einem Cloud-Speicher abzulegen.
- `4`{.action} **Ordner-Sortierung**: Eine Vielzahl an Ordnern erschwert es, den Überblick über den verbrauchten Speicherplatz Ihres E-Mail-Accounts zu behalten. Führen Sie regelmäßig eine Bestandsaufnahme Ihrer Ordner und deren Inhalte durch.

![E-Mail](images/email-quota-optimise01.png){.thumbnail}

#### Kapazität Ihres E-Mail-Accounts erhöhen

Sie können die Speicherkapazität Ihres E-Mail-Accounts erhöhen, sofern er seine maximale Größe nicht erreicht hat. Folgen Sie der Vorgehensweise für Ihren Dienst:

> [!tabs]
> **E-Mails (MX Plan)**
>>
>> Die Größe eines MX Plan Accounts kann zwischen 2,5 MB und 5 GB betragen. Sie können die Kapazität bei Bedarf über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)<br> ändern.
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} rechts neben dem zu ändernden Account auf den <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> Button und dann auf `Ändern`{.action}.
>> Wählen Sie im Feld `Quota`{.action} die neue Größe aus, klicken Sie auf `Weiter`{.action} und dann `Bestätigen`{.action}.<br><br>
>> ![email](images/email-quota-more01.png){.thumbnail}<br>
>>
> **E-Mail Pro**
>> 
>> Das Angebot E-Mail Pro verfügt über eine fixe Account-Kapazität von 10 GB. Wenn Sie mehr Speicherplatz benötigen, kann das nur über einen Wechsel des E-Mail-Dienstes erreicht werden. Lesen Sie hierzu den Abschnitt [zur Migration von Accounts](#switchingoffer) in dieser Anleitung.<br>
>>
> **Exchange**
>>
>> Wenn Ihr Exchange Account die maximale Größe von 50 GB erreicht, können Sie für die Angebote **Hosted** und **Provider** eine Erweiterungsoption abonnieren, um die Kapazität auf 300 GB zu erweitern.<br>
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihres Dienstes rechts neben dem zu ändernden Account auf den <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> Button und danach auf `Kapazität auf 300 GB erhöhen`{.action}. Wählen Sie den gewünschten Abrechnungsmodus aus und klicken Sie auf `Bestätigen`{.action}.<br><br>
>>![E-Mail](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Wenn der betreffende Account in Exchange **Hosted** oder **Provider** bereits 300 GB Speicherplatz belegt, müssen Inhalte gelöscht oder lokal auf Ihrem Computer [archiviert werden](#archiveorswitch). Dies gilt auch für **Private** Exchange Accounts mit 50 GB Speicherplatz.
>>

### 3. **Archivieren** oder **E-Mail-Dienst wechseln** <a name="archiveorswitch"></a>

#### Ihre E-Mails lokal auf Ihrem Computer archivieren

> [!warning]
> 
> Die folgenden Informationen basieren auf der IMAP-Konfiguration von E-Mail-Accounts, die am häufigsten verwendet wird. Bei der POP-Konfiguration hingegen werden E-Mails bereits auf Ihrem Gerät gespeichert. Eine Archivierung dieser Inhalte ist deshalb nicht relevant für die Speicherplatzverwaltung.

Wenn Sie Ihren E-Mail-Account im E-Mail-Client als IMAP konfiguriert haben, entspricht **normalerweise** der dort sichtbare Inhalt dem **auf dem E-Mail-Server synchronisierten Inhalt**. Das bedeutet, dass die E-Mails auf Ihren Computer geladen werden, aber wieder entfernt werden, sobald sie vom Server gelöscht werden. Um diese **auf Ihrem Computer zu archivieren** muss Ihr E-Mail-Programm konfiguriert werden.

![E-Mail](images/email-quota-step03-archive.png){.thumbnail}

Bei Bedarf können Sie Speicherplatz für Ihren E-Mail-Account freigeben, indem Sie Ihre E-Mails direkt auf Ihrem Computer speichern. Hierfür muss eine E-Mail-Software auf Ihrem Computer installiert sein.

E-Mail-Clients legen Ihre E-Mails als Dateien auf Ihrem Computer ab. Dazu muss die entsprechende "Archiv"-Funktion eingerichtet werden. Die E-Mails werden dann in einem lokalen Ordner gespeichert und können vom Server Ihres E-Mail-Accounts gelöscht werden.

Nachfolgend finden Sie eine nicht erschöpfende Liste der Konfigurationsanleitungen für E-Mail-Clients, je nach Ihrem verwendeten Angebot:

- IMAP Protokoll für **MX Plan** und **E-Mail Pro**
- MAPI Protokoll für **Exchange** mit Windows Outlook 
- EWS Protokoll für **Exchange** mit macOS Outlook 

> [!tabs]
> **E-Mails (MX Plan)**
>>
>> Konfiguration eines MX Plan Accounts auf **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/de/emails/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook mit MX Plan](https://docs.ovh.com/de/emails/konfiguration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/de/emails/konfiguration-email-thunderbird-windows/) (kostenlos)<br><br>>
>> Konfiguration eines MX Plan Accounts auf **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/de/emails/anleitung-mail-konfiguration-auf-macos/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/emails/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails/konfiguration-email-thunderbird-mac/) (kostenlos)<br>
>>
> **E-Mail Pro**
>>
>> Konfiguration eines E-Mail Pro Accounts auf **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/de/emails-pro/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails-pro/konfiguration-emailpro-thunderbird-windows/) (kostenlos)<br><br>>
>> Konfiguration eines E-Mail Pro Accounts auf **macOS***:<br><br>
>> - [Mail](https://docs.ovh.com/de/emails-pro/email-pro-auf-macos-konfigurieren/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails-pro/konfiguration-emailpro-thunderbird-mac/) (kostenlos)<br>
>>
> **Exchange**
>
>> Konfiguration eines Exchange Accounts auf **Windows**:<br><br>
>> - [Windows 10 Mail](https://docs.ovh.com/de/microsoft-collaborative-solutions/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_in_thunderbird/) (kostenlos)<br><br>>
>> Konfiguration eines Exchange Accounts auf **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-mac-mail/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-exchange-thunderbird-mac/) (kostenlos)<br>
>

Wenn Ihr E-Mail-Client installiert ist, folgen Sie den nachstehenden Anweisungen, um den Archivordner zu konfigurieren.

> [!tabs]
> **Outlook**
>>
>> Vergewissern Sie sich, dass in der linken Spalte der Ordner "Archiv" oder "Auf meinem Computer" vorhanden ist, um die Elemente, die Sie lokal auf Ihrem Computer speichern möchten, dort ablegen zu können. Lesen Sie die Microsoft Dokumentation, um Ihren Archivordner vorzubereiten:<br><br>
>> - [Archivierung in Outlook für Windows](https://support.microsoft.com/de-de/office/archivieren-in-outlook-f%C3%BCr-windows-25f75777-3cdc-4c77-9783-5929c7b47028)<br>
>> - [Archivierung in Outlook für Mac](https://support.microsoft.com/de-de/office/informationen-zu-auf-meinem-computer-ordnern-in-outlook-f%C3%BCr-mac-c91b8729-924d-4c25-a5f6-38883d0f763d)<br>
>>
> **macOS Mail**
>>
>> Erstellen Sie mit Mail auf macOS einen Ordner, der in der linken Spalte im Abschnitt "Auf meinem Mac" erscheint. Folgen Sie hierzu der Dokumentation von Apple:<br><br>
>>> - [Mailbox Mac](https://support.apple.com/de-de/guide/mail/mlhlp1021/15.0/mac/12.0)<br>
>>
> **Thunderbird**
>>
>> Mit Thunderbird können Sie Ihre E-Mails über Windows, macOS oder Linux in einen Ordner verschieben, der in der linken Spalte verfügbar ist. Lesen Sie die Dokumentation von Mozilla:<br><br>
>> - [Mail Archiv](https://support.mozilla.org/de/kb/archivierte-nachrichten)<br>
>>

#### Zu einem Angebot mit höherer Kapazität wechseln <a name="switchingoffer"></a>

Folgen Sie der passenden Dokumentation für Ihren E-Mail-Dienst:

> [!tabs]
> **E-Mails (MX Plan)**
>>
>> Wenn die Kapazität Ihres E-Mail-Accounts bereits bei 5 GB beträgt, können Sie sich für eine Migration auf [**E-Mail Pro** mit 10 GB](https://www.ovhcloud.com/de/emails/email-pro/) oder [**Hosted Exchange** mit 50 GB](https://www.ovhcloud.com/de/emails/hosted-exchange/) entscheiden. Bestellen Sie hierzu das gewünschte Angebot und folgen Sie unserer Anleitung "[E-Mail-Accounts von MX Plan zu E-Mail Pro oder Exchange migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/)". 
>>
> **E-Mail Pro**
>>
>> Das Angebot E-Mail Pro verfügt über eine feste Account-Kapazität von 10 GB. Sie können auf [**Hosted Exchange** mit 50 GB](https://www.ovhcloud.com/de/emails/hosted-exchange/) wechseln. Bestellen Sie hierzu Hosted Exchange und folgen Sie unserer Anleitung "[E-Mail-Accounts von einer OVHcloud E-Mail-Plattform auf eine andere migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-email-platform/)".
>>
> **Exchange**
>>
>> Wenn Ihr Exchange Account 50 GB erreicht, können Sie eine Erweiterungsoption abonnieren, um die Kapazität auf 300 GB zu erweitern. Dies gilt nur, wenn es sich um **Hosted Exchange** oder **Provider Exchange** handelt.<br>
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihres Exchange Dienstes auf den <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> Button rechts neben dem zu ändernden Account und danach auf `Kapazität auf 300 GB erhöhen`{.action}.<br><br>
>> ![E-Mail](images/email-quota-more02.png){.thumbnail}<br>
>>

## Weiterführende Informationen

[E-Mail-Accounts von MX Plan zu E-Mail Pro oder Exchange migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/)

[Ihre E-Mail-Account manuell migrieren](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/)

[E-Mail-Accounts von einer OVHcloud E-Mail-Plattform auf eine andere migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-email-platform/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.