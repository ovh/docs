---
title: "Speicherplatz eines E-Mail-Accounts verwalten"
slug: manage-email-quota
excerpt: "Hier erfahren Sie, wie Sie den Speicherplatz einer E-Mail-Adresse verwalten und optimieren."
section: 'Diagnose'
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 17.11.2022**

## Ziel

Jeder OVHcloud E-Mail-Account verfügt über einen dedizierten Speicherplatz. Die gute Verwaltung des Speicherplatzes verhindert eine Überlastung des Speicherplatzes, auch als "Überquota"bezeichnet. Standardmäßig werden E-Mails, die Sie empfangen und versenden, auf dem Server Ihres E-Mail-Accounts gespeichert. Sie können Ihre E-Mails auch über ein E-Mail-Programm (Outlook, macOS Mail, Thunderbird...) lokal auf Ihrem Computer speichern.

**Hier erfahren Sie, wie Sie den Speicherplatz einer E-Mail-Adresse verwalten und optimieren.**

## Voraussetzungen

- Sie verfügen über eine zuvor konfigurierte OVHcloud E-Mail-Lösung (**MX Plan**, die aus unseren [Webhosting-Angeboten](https://www.ovhcloud.com/de/web-hosting/) angeboten wird, in einem kostenlosen oder [separat bestellten Start10M Hosting wie](https://www.ovhcloud.com/de/domains/free-web-hosting/) [**Hosted Exchange**](https://www.ovhcloud.com/de/emails/hosted-exchange/) oder [**Email Pro **](https://www.ovhcloud.com/de/emails/email-pro/)).
- Sie sind im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt und befinden sich im Bereich `WebCloud`{.action}.
- Sie verfügen über die Verbindungsinformationen zu den betreffenden E-Mail-Adressen.

> [!primary]
>
> **Sonderfälle**
>
> - Hinweis zum Start 10M Hosting: Dieses muss unbedingt zuerst aktiviert werden, um eine E-Mail-Adresse zu erstellen. Sie können diese Operation über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} durchführen, indem Sie sich auf der betreffenden Domain befinden.
> - Bei einem [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} müssen Sie Ihr MX Plan Inklusiv-Angebot aktivieren, bevor Sie mit dem Lesen dieser Anleitung fortfahren. Lesen Sie hierzu unsere Anleitung "[Die in Ihrem Webhosting enthaltenen E-Mail-Adressen aktivieren](https://docs.ovh.com/de/hosting/webhosting-email-aktivieren/)".

## In der Praxis <a name="instructions"></a>

Die Verwaltung des Speicherplatzes Ihres E-Mail-Accounts wird in 3 Schritten in dieser Anleitung aufgelöst. Sie können nach Bedarf in der Reihenfolge oder unabhängig durchgeführt werden.

- [**Überprüfen**](#check-quota) Sie das aktuelle Quota für Ihren E-Mail-Account. In diesem Schritt können Sie Ihren aktuellen Verbrauch für die nächsten 2 Schritte bewerten.
- [**Ihren**](#optimise) E-Mail-Account optimieren. Dieser Schritt bietet Ihnen Tipps, um einen Speicherplatz ohne unnötige Elemente zu erhalten.
- [**Archiver** oder **E-Mail Angebot wechseln**](#archiveorswitch). Wenn der vorherige Schritt nicht ausreicht, finden Sie die notwendigen Informationen, um einen lokalen Speicherplatz (auf Ihrem Computer) für Ihre E-Mails über Ihr E-Mail-Programm zu konfigurieren. Sie finden auch die notwendigen Informationen, um das E-Mail-Angebot Ihres Accounts an ein Angebot mit größerem Speicherplatz zu ändern.

![E-Mail](images/email-quota-intro.gif){.thumbnail}

### 1- **Überprüfen** des aktuellen Quotas Ihres E-Mail Accounts <a name="check-quota"></a>

Sie können diese Aktion über das Kundencenter durchführen, wenn Sie den betreffenden E-Mail-Dienst verwalten, oder über Webmail, wenn Sie nur der Benutzer des E-Mail-Accounts sind.

#### Über das Kundencenter <a name="quotacontrolpanel"></a>

Gehen Sie [in Ihrem OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `Web Cloud`{.action} und folgen Sie den Anweisungen Ihres Angebots:

> [!tabs]
> **E-Mails (MXplan)**
>>
>> Klicken Sie auf `E-Mails`{.action} und wählen Sie den Namen des betreffenden MX Plan Dienstes aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Im angezeigten Fenster werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den laufenden Verbrauch Ihrer E-Mail-Adresse einsehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **E-Mail Pro**
>>
>> Klicken Sie auf `E-Mail Pro`{.action} und wählen Sie die betreffende Plattform aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Im angezeigten Fenster werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den laufenden Verbrauch Ihrer E-Mail-Adresse einsehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Klicken Sie auf `Microsoft`{.action} / `Exchange`{.action} und wählen Sie die betreffende Plattform aus. Gehen Sie auf den Tab `E-Mail Accounts`{.action}. Im angezeigten Fenster werden die bestehenden E-Mail-Accounts angezeigt. Sie können in der Spalte `Größe` den laufenden Verbrauch Ihrer E-Mail-Adresse einsehen.<br><br>
>>![E-Mail](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Über das Webmail <a name="quotawebmail"></a>

Um sich mit dem Webmail zu verbinden, gehen Sie auf die Seite <https://www.ovhcloud.com/de/mail/> und geben Sie die Login-Daten zu Ihrem E-Mail-Account ein. Wählen Sie anschließend das zu Ihrem Angebot passende Webmail-Interface aus:

> [!tabs]
> **OWA**: **E-Mails (MXplan)** / **E-Mail Pro** / **Exchange**
>>
>> Klicken Sie auf <i class=".icons-gear-concept icons-masterbrand-blue"></i> den Button oben rechts neben Ihrem Bildschirm und klicken Sie auf `Optionen`{.action}. Klicken Sie `im Bereich`{.action} General `Mein Konto`{.action} auf  in der linken Spalte. Sie können das aktuelle Quota Ihres Accounts auf der rechten Unterseite des Formulars einsehen.<br><br>
>>![E-Mail](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **E-Mails (MXplan)**
>>
>> Wenn Sie mit dem Roundcube Webmail verbunden sind, ist das Quota im linken Bereich sichtbar, wird durch ein Kamembert verkörpert und der verbrauchte Prozentsatz angegeben.<br><br>
>>![E-Mail](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2- **Ihren** E-Mail Account optimieren <a name="optimise"></a>

Wenn Ihr E-Mail-Account überlastet ist, dann können Sie keine E-Mails mehr empfangen.<br>
Wenn eine Person Ihnen eine E-Mail zusendet, erhält sie automatisch eine Fehlere-Mail vom Typ *"552, "5.2.2". Das E-Mail-Konto, an das Sie eine Nachricht gesendet haben, hat sein Quota ausgeschöpft."*.<br>
Wenn Ihr E-Mail-Account gesättigt ist, können Sie immer E-Mails auf Ihrer Seite versenden. Diese E-Mails können jedoch nicht in Ihrem "Postfach" gespeichert werden.

#### Optimieren Sie den Speicherplatz Ihres E-Mail-Accounts

Bevor Sie weitere E-Mail-Accounts verwenden, müssen Sie den Inhalt Ihres E-Mail-Accounts einsehen, um alle unnötigen Elemente zu entfernen. Bitte überprüfen Sie einige dieser Angaben:

- `1`{.action} **Papierkorb (trash)**: Diese enthält die Elemente, die Sie gelöscht haben. Um zu vermeiden, dass E-Mails in diesem Ordner gesammelt werden, empfehlen wir Ihnen, den Spam-Ordner regelmäßig zu leeren.
- `2`{.action} **Versandelemente (sent messages)**: Wenn Sie eine E-Mail versenden, wird diese an den Empfänger weitergeleitet. Sie werden jedoch auch in den "Versandstücken"auf Ihrem E-Mail-Account gespeichert. Wir empfehlen Ihnen, diesen Ordner regelmäßig zu leeren oder den Inhalt lokal auf Ihrem Computer oder einem entfernten "Cloud"-Speicherplatz zu archivieren.
- `3`{.action} **Gespeicherte E-Mails mit umfangreichen Anhängen**: Bei E-Mails mit Anhängen wird mehr Speicherplatz für Ihren E-Mail-Account eingeräumt. Wir empfehlen Ihnen, umfangreiche Elemente auf einem lokalen (Computer) oder entfernten (Cloud) Speicherplatz zu speichern.
- `4`{.action} **Ordner sortieren**: Wenn Sie viele Ordner auf Ihrem E-Mail-Account haben, ist es weniger einfach, den Speicherplatz Ihres E-Mail-Accounts zu messen. Führen Sie regelmäßig eine Bestandsaufnahme Ihrer Ordner und deren Inhalt durch.

![E-Mail](images/email-quota-optimise01.png){.thumbnail}

#### Kapazität Ihres E-Mail-Accounts erhöhen

Sie können die Speicherkapazität Ihres E-Mail-Accounts erhöhen, wenn dieser seine maximale Kapazität nicht erreicht hat. Folgen Sie der Vorgehensweise für Ihr Angebot:

> [!tabs]
> **E-Mails (MXplan)**
>>
>> Die Kapazität eines MXplan Accounts kann zwischen 2,5 MB und 5 GB liegen. Ist es überlastet und verfügt es über weniger als 5 GB Kapazität, können Sie seine Kapazität über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)<br> ändern.
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} rechts neben <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> dem zu ändernden Account auf den Button und anschließend auf `ändern`{.action}.
>> Wählen Sie im Feld `Quota`{.action} die für Sie passende Größe aus, klicken Sie auf `Weiter`{.action} und `bestätigen`{.action}.<br><br>
>> ![{.thumbnail}](images/email-quota-more01.png) E-Mail<br>
>>
> **E-Mail Pro**
>> 
>> Das E-Mail Pro Angebot verfügt über eine einzigartige Kapazität von 10 GB. Wenn Sie mehr Speicherplatz benötigen, benötigen Sie ein Angebot mit mehr Speicherplatz. Lesen Sie hierzu den Abschnitt [Angebot wechseln, um die Kapazität zu erhöhen](#switchingoffer) dieser Anleitung.<br>
>>
> **Exchange**
>>
>> Wenn Ihr Exchange Account seine 50 GB Kapazität erreicht, können Sie für die Angebote **Hosted** und **Provider** eine Erweiterungsoption abonnieren, um die Kapazität auf 300 GB zu erweitern.<br>
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihrer Plattform rechts neben <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>dem zu ändernden Account auf den Button und danach auf `Kapazität auf 300 GB erhöhen`{.action}. Wählen Sie den Abrechnungsmodus aus, der Ihnen am besten entspricht, und klicken Sie auf `Bestätigen`{.action}.<br><br>
>>![E-Mail](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Wenn Ihr Exchange Account bereits 300 GB Speicherplatz für ein **Hosted** oder **Provider** Angebot ausgefüllt hat, müssen Sie Platz für Ihren Exchange Account freigeben, indem Sie unnötige Elemente löschen oder Ihre E-Mails lokal auf Ihrem [Computer archivieren](#archiveorswitch). Dies gilt auch für Exchange Accounts mit 50 GB Speicherplatz auf einem **Private** Angebot.
>>

### 3- **Archiver** oder **Wechsel des E-Mail Angebots** <a name="archiveorswitch"></a>

#### Ihre E-Mails lokal auf Ihrem Computer archivieren

> [!warning]
> 
> Die folgenden Informationen basieren auf einer IMAP-Konfiguration Ihres E-Mail-Accounts, die am häufigsten verwendet wird. Die POP-Konfiguration basiert auf einem Prinzip, dass E-Mails lokal gespeichert werden. In unserem Zusammenhang ist es daher nicht sinnvoll, E-Mails zu archivieren, die bereits lokal auf Ihrem Computer gespeichert sind.

Wenn Sie Ihre E-Mail-Adresse auf Ihrem E-Mail-Client als IMAP **konfiguriert haben**, entspricht der sichtbare Inhalt standardmäßig dem **auf dem E-Mail-Server synchronisierten Inhalt**. Das bedeutet, dass die E-Mails auf Ihren Computer geladen werden, aber verschwinden, wenn sie vom Server gelöscht werden. Um diese **auf Ihrem Computer zu archivieren** müssen Sie Ihr E-Mail-Programm konfigurieren.

![E-Mail](images/email-quota-step03-archive.png){.thumbnail}

Wenn Sie möchten, können Sie den Speicherplatz für Ihren E-Mail-Account freigeben, indem Sie Ihre E-Mails direkt auf Ihrem Computer speichern. Hierfür benötigen Sie ein auf Ihrem Computer installiertes E-Mail-Programm.
Das E-Mail-Programm soll Ihre E-Mails in Dateien umwandeln, um sie auf Ihrem Computer speichern zu können. Es ist jedoch notwendig, die Funktion "Archiv" Ihres E-Mail-Programms einzurichten. Die E-Mails werden dann in einem "lokalen" Ordner gespeichert und nicht direkt auf dem Server Ihres E-Mail-Accounts.

Im Folgenden finden Sie eine nicht erschöpfende Liste der Konfigurationsanleitungen für E-Mail-Clients, je nach Angebot, das Sie besitzen:

Nachfolgend finden Sie eine nicht erschöpfende Liste der Konfigurationsanleitungen für E-Mail-Clients, die Folgendes verwenden:

- IMAP Protokoll für die **MXplan** und **E-Mail Pro Angebote** ;
- das MAPI Protokoll zum Exchange **Angebot** für Outlook Windows ;
- das EWS Protokoll für das **Exchange** Angebot für Outlook macOS.

> [!tabs]
> **E-Mails (MXplan)**
>>
>> Konfiguration eines MXplan Accounts auf **Windows**:<br><br>
>> - [E-Mail auf Windows 10](https://docs.ovh.com/de/emails/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook für Mxplan](https://docs.ovh.com/de/emails/konfiguration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/de/emails/konfiguration-email-thunderbird-windows/) (kostenlos)<br><br>>
>> Konfiguration eines MXplan Accounts auf **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/de/emails/anleitung-mail-konfiguration-auf-macos/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/emails/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails/konfiguration-email-thunderbird-mac/) (kostenlos)<br>
>>
> **E-Mail Pro**
>>
>> Konfiguration eines E-Mail Pro Accounts auf **Windows*:<br><br>
>> - [E-Mail auf Windows 10](https://docs.ovh.com/de/emails-pro/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails-pro/konfiguration-emailpro-thunderbird-windows/) (kostenlos)<br><br>>
>> Konfiguration eines E-Mail Pro Accounts auf **macOS*:<br><br>
>> - [Mail](https://docs.ovh.com/de/emails-pro/email-pro-auf-macos-konfigurieren/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/emails-pro/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/emails-pro/konfiguration-emailpro-thunderbird-mac/) (kostenlos)<br>
>>
> **Exchange**
>
>> Konfiguration eines Exchange Accounts auf **Windows**:<br><br>
>> - [E-Mail auf Windows 10](https://docs.ovh.com/de/microsoft-collaborative-solutions/mail-konfiguration-windows-10/) (bei Windows inklusive)<br>
>> - [Outlook](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_konfiguration_in_thunderbird/) (kostenlos)<br><br>>
>> Konfiguration eines Exchange Accounts auf **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-automatische-konfiguration-auf-mac-mail/) (inklusive mit macOS)<br>
>> - [Outlook](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/de/microsoft-collaborative-solutions/konfiguration-exchange-thunderbird-mac/) (kostenlos)<br>
>

Wenn Ihr E-Mail-Client installiert ist, folgen Sie den nachstehenden Anweisungen, um den Archivordner auf Ihrem E-Mail-Programm vorzubereiten.

> [!tabs]
> **Outlook**
>>
>> Vergewissern Sie sich, dass in Ihrer linken Spalte der Ordner "Archiv" oder "auf meinem Computer" vorhanden ist, um die Elemente, die Sie lokal auf Ihrem Computer speichern möchten, dort ablegen zu können. Lesen Sie die Microsoft Dokumentation, um Ihren Archivordner vorzubereiten:<br><br>
>> - [Archivierung in Outlook für Windows](https://support.microsoft.com/de-de/office/archivieren-in-outlook-f%C3%BCr-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [Über die Dateien auf meinem Computer in Outlook für Mac](https://support.microsoft.com/de-de/office/%C3%A0-propos-des-dossiers-sur-mon-ordinateur-dans-outlook-pour-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **macOS Mail**
>>
>> Erstellen Sie mit Mail auf macOS einen Ordner, der in der linken Spalte im Abschnitt "Auf meinem Mac"erscheint. Folgen Sie hierzu der Dokumentation von Apple:<br><br>
>>> - [mailbox maken of verwijderen in Mail op Mac](https://support.apple.com/de-de/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Mit Thunderbird können Sie Ihre E-Mails über Windows, macOS oder Linux in einen Ordner des linken Layouts verschieben. Lesen Sie die Mozilla-Dokumentation:<br><br>
>> - [Berichtenarchief](https://support.mozilla.org/de/kb/archivierte-nachrichten){.external} (English)<br>
>>

#### Angebot wechseln, um die Kapazität zu erhöhen <a name="switchingoffer"></a>

Wählen Sie im folgenden Menü das aktuelle Angebot Ihres E-Mail-Accounts aus:

> [!tabs]
> **E-Mails (MXplan)**
>>
>> Wenn die Kapazität Ihres E-Mail-Accounts bereits bei maximal 5 GB liegt, können Sie sich für eine Migration auf ein E-Mail Pro Angebot mit [**10 GB** oder](https://www.ovhcloud.com/de/emails/email-pro/)Hosted Exchange[** mit 50 GB entscheiden**](https://www.ovhcloud.com/de/emails/hosted-exchange/). Bestellen Sie hierzu das für Sie passende Angebot und folgen Sie unserer Anleitung "[Migration einer MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/) ". 
>>
> **E-Mail Pro**
>>
>> Das E-Mail Pro Angebot verfügt über eine einzigartige Kapazität von 10 GB. Sie können sich für eine Migration auf ein [**Hosted Exchange** Angebot mit 50 GB entscheiden](https://www.ovhcloud.com/de/emails/hosted-exchange/). Bestellen Sie hierzu das für Sie passende Angebot und folgen Sie unserer Anleitung "[Ihre E-Mail-Adressen von einer OVHcloud-Plattform auf eine andere migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-email-platform/)".
>>
> **Exchange**
>>
>> Wenn Ihr Exchange Account 50 GB Speicherplatz erreicht, können Sie eine Erweiterungsoption abonnieren, um die Kapazität auf 300 GB zu erweitern. Dies nur, wenn der Exchange Account auf einem **Hosted** oder **Provider** Angebot verfügbar ist.<br>
>> Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihrer Exchange-Plattform auf den Button rechts neben <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>dem zu ändernden Account und danach auf `Kapazität auf 300 GB erhöhen`{.action}.<br><br>
>> ![E-Mail](images/email-quota-more02.png){.thumbnail}<br>
>>

## Weiterführende Informationen

[Eine MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/)

[Ihre E-Mail-Adresse manuell migrieren](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/)

[Ihre E-Mail-Adressen von einer OVHcloud E-Mail-Plattform auf eine andere migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-email-platform/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere Support-Angebote [einsehen](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
