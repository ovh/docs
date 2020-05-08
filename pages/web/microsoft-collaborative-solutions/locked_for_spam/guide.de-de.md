---
title: 'Was tun, wenn ein Account aufgrund Spamversands gesperrt wurde?'
slug: blocked-wegen-spam
excerpt: 'Erfahren Sie hier, wie Sie vorgehen, wenn Ihre E-Mail-Adresse wegen Spamverdachts blockiert ist'
section: Troubleshooting
order: 1
---

**Letzte Aktualisierung am 20.04.2020**

## Ziel

Wenn Sie eine E-Mail erhalten haben, die darauf hinweist, dass eine Ihrer E-Mail-Adressen wegen Spamversand gesperrt wurde, sind bestimmte Überprüfungen und Maßnahmen von Kundenseite aus durchzuführen.

**Diese Anleitung erläutert die Vorgehensweise, um einen wegen Spamverdacht gesperrten E-Mail-Account wieder freizuschalten.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud E-Mail-Dienst](https://www.ovh.de/emails/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

### Schritt 1: Überprüfen Sie den Status des E-Mail-Accounts und greifen Sie auf das zugehörige Support-Ticket zu

#### Für einen Exchange Account

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Wählen Sie den betreffenden Exchange Dienst aus und gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}.

Wenn die Spalte „Status“ der entsprechenden E-Mail-Adresse die Bezeichnung „Gesperrt“ aufweist, klicken Sie auf `...`{.action} rechts in der Zeile und danach auf `Entsperren`{.action}. Fahren Sie danach mit [Schritt 2](./#schritt-2-auf-das-support-ticket-zugreifen_1) der Anleitung fort.

![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}

#### Für einen E-Mail Pro Account

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `E-Mail Pro`{.action}. Wählen Sie den betreffenden E-Mail Pro Dienst aus und gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}.

Wenn in der Spalte „Status“ rechts neben der entsprechenden E-Mail-Adresse „Spam“ angegeben ist, klicken Sie auf dieses Element und dann auf `Ticket beantworten`{.action}. Fahren Sie danach mit [Schritt 2](./#schritt-2-auf-das-support-ticket-zugreifen_1) der Anleitung fort.

![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}

#### Für einen MX-Plan Account

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und klicken Sie im Bereich `Web`{.action} links in der Menüleiste auf `E-Mails`{.action}. Wählen Sie die betreffende Domain aus und gehen Sie dann auf den Tab `E-Mails`{.action}.

Wenn in der Spalte „Blockiert wegen SPAM“ rechts neben der entsprechenden E-Mail-Adresse „Ja“ angegeben ist, klicken Sie auf dieses Element und dann auf `Ticket beantworten`{.action}. Fahren Sie danach mit [Schritt 2](./#schritt-2-auf-das-support-ticket-zugreifen_1) der Anleitung fort.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}


### Schritt 2: Auf das Support-Ticket zugreifen

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

### Schritt 3: Beantworten der drei Fragen

> [!warning]
>
> Das Entsperren der E-Mail-Adresse erfolgt nicht automatisch. Das Support-Team muss kontaktiert werden, indem Sie mit der Beantwortung aller Fragen auf das Ticket antworten.

- **Sind Sie der Absender der betroffenen E-Mail?** Überprüfen Sie anhand der bereitgestellten Header den Absender, den Empfänger und den Betreff der Nachricht, um festzustellen, ob es sich um eine Ihrer Nachrichten handelt.

- **Haben Sie eine Weiterleitungsregel auf eine andere E-Mail-Adresse?** Überprüfen Sie die Posteingangsregeln für Ihre E-Mail-Adresse, um sicherzustellen, dass unerwünschte E-Mails nicht an eine andere Adresse umgeleitet wurden.

- **Haben Sie auf eine Spam-Nachricht geantwortet?** Tatsächlich hat auch das Antworten auf eine Spam-Nachricht zur Folge, dass die Reputation der Server, die E-Mails senden, aber auch Ihres Domainnamens sich verschlechtern.    


### Schritt 4: Maßnahmen, die im Falle eines betrügerischen Zugriffs auf Ihren E-Mail-Account zu ergreifen sind

Wenn die in den Headern genannten Nachrichten nicht von den rechtmäßigen Benutzern der E-Mail-Adresse gesendet wurden, gehen Sie bitte wie folgt vor:

- Führen Sie Virenscans bezüglich der gesperrten E-Mail-Adresse durch und sorgen Sie für Patches, falls Infektionen bemerkt werden.

- Überprüfen Sie jegliche Software, die Zugangsdaten für die gesperrte E-Mail-Adresse nutzt (Beispiel: Faxgerät, Unternehmenssoftware, E-Mail-Clients).

- Ändern Sie das Passwort für den E-Mail-Account, nachdem Sie den Virenscan durchgeführt haben, und achten Sie darauf, dass es sicher genug ist. Sie können hierzu die [Empfehlungen des BSI](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/Passwoerter/passwoerter_node.html) heranziehen.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en>.