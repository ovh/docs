---
title: 'Was tun, wenn ein Account aufgrund Spamversands gesperrt wurde?'
excerpt: 'Erfahren Sie hier, wie Sie vorgehen, wenn Ihre E-Mail-Adresse wegen Spamverdachts blockiert ist'
updated: 2023-07-07
---

## Ziel

Wenn Ihre E-Mail-Adresse für SPAM gesperrt ist, wurde eine verdächtige Aktivität beim Versand von E-Mails von dieser Adresse aus erkannt. In diesem Fall können Sie keine E-Mails mehr von dieser E-Mail-Adresse aus versenden. Sie müssen verstehen, warum verdächtige Aktivitäten entdeckt wurden, und Maßnahmen ergreifen, um eine Wiederholung zu vermeiden.

**Diese Anleitung erläutert die Vorgehensweise, um einen wegen Spamverdacht gesperrten E-Mail-Account wieder freizuschalten.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud E-Mail-Dienst](https://www.ovhcloud.com/de/emails/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung <a name="instructions"></a>

Bevor Sie fortfahren und wenn die Sperrung eine E-Mail-Adresse vom Typ MXplan betrifft, identifizieren Sie die Version, die Sie haben, um den korrekten Entsperrungsprozess zu verfolgen. Überprüfen Sie anhand der nachstehenden Tabelle, wie die beiden Versionen zu unterscheiden sind.

|Historische Version des MX Plan Angebots|Neue Version des MX Plan Angebots|
|---|---|
|![E-Mail](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Im Rahmen "Abo"|![E-Mail](images/mxplan-starter-new-step1.png){.thumbnail}<br>"Server-Referenz" in der Rubrik "Zusammenfassung"|

## Schritt 1: warum ist Ihre E-Mail-Adresse für SPAM gesperrt? <a name="step1"></a>

Wird beim Versand von E-Mails eine verdächtige Aktivität festgestellt, wird die betreffende Adresse automatisch gesperrt. In diesem Fall können Sie keine E-Mails mehr von dieser E-Mail-Adresse aus versenden.

Vergewissern Sie sich zunächst, dass der/die Benutzer der gesperrten E-Mail-Adresse(n) aufgrund einer ungewöhnlichen Verwendung der E-Mail-Adresse (z. B. infolge des massiven E-Mail-Versands) nicht direkt an der Blockierung beteiligt ist/sind. Ist das der Fall, muss die Situation korrigiert werden, bevor Sie die Adresse freigeben.

Wenn der/die rechtmäßige(n) Benutzer(n) der E-Mail-Adresse die vom Antispam entdeckte verdächtige Aktivität nicht initiiert hat/haben, ergreifen Sie die folgenden notwendigen und detaillierten Maßnahmen:

- Führen Sie jedem auf rechner, der die für SPAM gesperrte E-Mail-Adresse, verwenden Virenscan durch und Wenden sie einen Patch an, wenn infiziert sind.

- überprüfen Sie alle Software, die Kennungen der für SPAM gesperrten E-Mail-Adressen verwenden. B. Faxgerät, branchen Software, E-Mail-Software).

### Schritt 2: Überprüfen Sie den Status des E-Mail-Accounts und greifen Sie auf das zugehörige Support-Ticket zu <a name="step3"></a>

Wählen Sie das betreffende E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>>
>> Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter `Microsoft`{.action} und `Exchange`{.action} Ihren Exchange Dienst aus. Gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}.
>>
>> Wenn die Spalte „Status“ der entsprechenden E-Mail-Adresse die Bezeichnung „Gesperrt“ aufweist, klicken Sie auf `...`{.action} rechts in der Zeile und danach auf `Entsperren`{.action}. Die Entsperrung der E-Mail-Adresse erfolgt nicht automatisch. Kontaktieren Sie den Support über das Support-Ticket und beantworten Sie die 3 gestellten Fragen.<br>
>> Gehen Sie zu [Schritt 3](#step3) der Anleitung.
>>
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **E-Mail Pro**
>>
>> Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter `E-Mail Pro`{.action} Ihren E-Mail Pro Dienst aus. Gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}.
>>
>> Wenn in der Spalte „Status“ rechts neben der entsprechenden E-Mail-Adresse „Spam“ angegeben ist, klicken Sie auf dieses Element und dann auf `Ticket beantworten`{.action}. Die Entsperrung der E-Mail-Adresse erfolgt nicht automatisch. Kontaktieren Sie den Support über das Support-Ticket und beantworten Sie die 3 gestellten Fragen.<br>
>> Gehen Sie zu [Schritt 3](#step3) der Anleitung.
>>
>>![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MXplan - neue Version**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter  `E-Mails`{.action} die betreffende Domain aus. Gehen Sie dann auf den Tab `E-Mails`{.action}.
>>
>> Wenn in der Spalte „Blockiert wegen SPAM“ rechts neben der entsprechenden E-Mail-Adresse „Ja“ angegeben ist, klicken Sie auf dieses Element und dann auf `Ticket beantworten`{.action}. Die Entsperrung der E-Mail-Adresse erfolgt nicht automatisch. Kontaktieren Sie den Support über das Support-Ticket und beantworten Sie die 3 gestellten Fragen.<br>
>> Gehen Sie zu [Schritt 3](#step3) der Anleitung.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MXplan - History**
>>
>> Wenn die Sperrung eine E-Mail-Adresse [MXplan History](#instructions) betrifft, gibt es kein Support-Ticket. Lesen Sie [Schritt 1](#step1) dieser Anleitung, bevor Sie den folgenden Anweisungen folgen.
>
>>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich Web Cloud {.action}. Klicken Sie auf E-Mails {.action} und wählen Sie die betreffende Domain aus.
>
>> Gehen Sie auf den Tab {.action} E-Mails Ihrer Plattform. Wenn in der Spalte "Blockiert wegen SPAM" "Ja" steht, klicken Sie auf diesen Eintrag und dann auf `Passwort ändern`{.action}. Ihre E-Mail-Adresse wurde nun entsperrt, Sie müssen den [Schritt 3](#step3) nicht befolgen.
>
>>![spam](images/blocked-for-SPAM-01-04.png) {.thumbnail}
>
>> > [!warning]
>> >
>> > In seltenen Fällen kann in der Spalte "Blockiert wegen SPAM" Nein angegeben werden, obwohl die E-Mail-Adresse gesperrt ist. Wenn Sie das Richtige getan haben, um die E-Mail-Adresse zu sichern, bleibt die Lösung wie oben beschrieben bestehen.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}


### Schritt 3: Auf das Support-Ticket zugreifen <a name="step3"></a>

Nach Schritt 1 werden Sie zum Fenster „Meine Support-Anfragen“ weitergeleitet. Klicken Sie auf `...`{.action} rechts vom Ticket mit dem Betreff „Account locked for spam“ und klicken Sie danach auf `Details anzeigen`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Sie sehen hier die an Sie versendete E-Mail, die dadurch auch ein Support-Ticket erzeugt hat.

Dises Support-Ticket sieht wie folgt aus:

> 
> Sehr geehrter Kunde,
>
unser System hat festgestellt, dass Spam von der Adresse **Ihre.Adresse@domain.com** gesendet wurde. Diese E-Mail-Adresse ist unter der Dienstleistung '**Dienstreferenz**' auf unseren Systemen gehostet. Wir haben deshalb vorübergehend den Versand neuer Nachrichten blockiert.
>
Derzeit haben wir **X** unerwünschte Nachrichten, die von Ihrer E-Mail-Adresse gesendet wurden, entdeckt.
>
Um uns dabei zu helfen, den Versand von E-Mails für die Adresse **Ihre.Adresse@domain.com** wieder zu aktivieren, beantworten Sie bitte folgende Fragen:
>
> - Sind Sie der Absender der betroffenen E-Mail (siehe Header unten)?
>
> - Haben Sie eine Weiterleitungsregel auf eine andere E-Mail-Adresse?
>
> - Haben Sie auf eine Spam-Nachricht geantwortet?
>
Ihre Antworten auf diese Fragen helfen uns dabei, Ihren Account schnellstmöglich wieder zu aktivieren.
> 
>

Im Anschluss an diese Nachricht wird Ihnen ein Beispiel der Header der verdächtigen E-Mails angehängt.

Diese Header werden verwendet, um die Route und den Ursprung der gesendeten E-Mails zu ermitteln.


## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
