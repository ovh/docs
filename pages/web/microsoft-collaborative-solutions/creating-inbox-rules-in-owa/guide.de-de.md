---
title: 'Posteingangsregeln in OWA erstellen'
slug: posteingangsregeln-in-owa-erstellen
excerpt: 'Erfahren Sie hier, wie Sie E-Mail-Weiterleitungen und Eingangsfilter in OWA verwenden'
section: 'Outlook Web App (OWA)'
order: 2
---

**Letzte Aktualisierung am 11.03.2020**


## Ziel

Unter der Option „Posteingangsregeln“ können Sie ein umfangreiches Regelwerk für die Verarbeitung eingehender E-Mails erstellen. Diese können Ihnen helfen, Ihr E-Mail-Konto zu organisieren, indem E-Mails automatisch in die passenden Ordner sortiert werden. Auf diese Weise können Sie auch Weiterleitungen definieren und Spam-Nachrichten herausfiltern.

**Diese Anleitung erläutert, wie Sie mit der Outlook Web App (OWA) E-Mail-Filter und Weiterleitungsregeln erstellen.**


## Voraussetzungen

- Sie haben bereits einen OVHcloud E-Mail-Dienst eingerichtet ([**Exchange**](https://www.ovh.de/emails/), [**E-Mail Pro**](https://www.ovh.de/emails/email-pro) oder **MX Plan**, aus dem MX Plan Angebot oder als Teil eines [OVHcloud Webhostings](https://www.ovh.de/hosting)).
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.


## In der praktischen Anwendung

### Schritt 1: Navigation zum Bereich „Optionen“

Melden Sie sich über [OVHcloud Webmail](https://www.ovh.de/mail) bei Ihrem E-Mail-Konto an. Klicken Sie auf das Zahnradsymbol oben rechts, um das Menü „Optionen“ zu öffnen und wählen Sie `Optionen`{.action}.

![inboxrules](images/exchange-rules-step1.png){.thumbnail}

Wählen Sie in der Navigationsstruktur „Optionen“ `Posteingangs- und Aufräumregeln`{.action}, um zum Posteingangsregeln-Bereich zu gelangen. Hier sehen Sie die Liste der Regeln, die auf dieses Konto angewendet werden. Erstellen Sie eine neue Regel mit Klick auf das `+`{.action}-Symbol.

![inboxrules](images/exchange-rules-step2.png){.thumbnail}

### Schritt 2: Einrichten von Regeln

![inboxrules](images/exchange-rules-step3.png){.thumbnail}

Mithilfe des Regeleditors können unterschiedliche Aktionen für alle eingehenden E-Mails in Abhängigkeit von verschiedenen Voraussetzungen eingerichtet werden. Das Festlegen einer Regel erfolgt in drei Schritten:

|Schritt|Beschreibung|
|---|---|
|Bedingung hinzufügen|Wählen Sie eine oder mehrere Bedingungen, durch die die Regel ausgelöst wird.|
|Aktion hinzufügen|Wählen Sie aus, was mit E-Mails geschehen soll, die den Bedingungen entsprechen.|
|Ausnahme hinzufügen (optional)|Sie können die Regel präzisieren, indem Sie eine oder mehrere Bedingungen hinzufügen, um bestimmte E-Mails auszuschließen.|

Sie können beispielsweise die Bedingung „Empfangen von ...“ für eine bestimmte E-Mail-Adresse festlegen und deren Nachrichten in einen speziellen Ordner verschieben.

#### Checkbox „Keine weiteren Regeln anwenden“

Wenn Sie mehrere Regeln erstellt haben, löst eine E-Mail möglicherweise mehr als eine Eingangsregel aus. Lassen Sie diese Option für alle Regeln aktiviert, nach denen anschließend keine anderen Regeln angewendet werden sollen. Damit wird auf einfache Weise vermieden, dass E-Mails, die mehrere Bedingungen erfüllen, nicht weiter verarbeitet werden.

### Erstellen nützlicher Regeln anhand von zwei Beispielen: Weiterleitung und Spamfilterung 

Da viele Bedingungen und Aktionen verfügbar sind, können nicht alle in dieser Anleitung behandelt werden. Im Folgenden finden Sie zwei Beispiele, die für die praktische Verwendung eines OVHcloud E-Mail-Kontos von wichtiger Bedeutung sind. 

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

#### Beispiel 1: E-Mails an eine andere Adresse umleiten

Erstellen Sie eine neue Regel durch Klicken auf das `+`{.action}-Symbol. Geben Sie Ihrer Regel einen Namen und wählen Sie aus, für welche E-Mails sie gelten soll. In diesem Beispiel werden wir zunächst **alle Nachrichten** berücksichtigen. Wählen Sie als Nächstes die entsprechende Aktion aus. Hier konzentrieren wir uns auf die Veranschaulichung einer **Umleitung**. Bitte beachten Sie den technischen Unterschied: Wenn Sie eine E-Mail „weiterleiten“, sieht der Endempfänger Ihre E-Mail-Adresse als Absender. Wenn Sie eine E-Mail „umleiten“, wird sie an die Zieladresse gesendet, ohne die ursprüngliche Absenderadresse zu ändern. 

![inboxrules](images/exchange-rules-step4.png){.thumbnail}

Wählen Sie in der nächsten Oberfläche aus „Ihre Kontakte“ (`+`{.action}) aus oder geben Sie eine E-Mail-Adresse in die obere Zeile ein. Sie können auch nach Benutzern suchen, die hier nicht als Kontakt aufgeführt sind. Zum Abschluss klicken Sie auf `Speichern`{.action}, um zurück zur Oberfläche „Neue Posteingangsregel“ zu gelangen. Sie können diese Regel nun erweitern, indem Sie auf `Aktion hinzufügen`{.action} klicken. Fügen Sie gegebenenfalls unten Ausnahmen hinzu, um beispielsweise die Umleitung zu verhindern, wenn eine eingehende Nachricht von einer bestimmten E-Mail-Adresse gesendet wurde oder bestimmte Schlüsselwörter enthält. Speichern Sie die Regel, indem Sie auf `OK`{.action} klicken.

Die neue Regel wird nun nebst einer Erläuterung ihrer Funktion aufgelistet und kann bearbeitet, deaktiviert oder gelöscht werden.

![inboxrules](images/redirection_rulebis.gif){.thumbnail}


#### Beispiel 2: Unerwünschte E-Mails (Spam) filtern

> [!primary]
>
Diese Anweisungen sind nur dann umsetzbar, wenn Ihre Domain die OVHcloud MX-Einträge ordnungsgemäß verwendet. Es sind auch abweichende Konfigurationen der Dienste möglich, die dann nicht zwangsläufig unserem Spam-Schutz unterliegen.
>

Erstellen Sie eine neue Regel durch Klicken auf das `+`{.action}-Symbol.

![inboxrules](images/exchange-rules-step7.png){.thumbnail}

Geben Sie Ihrer Regel einen Namen und wählen Sie als Bedingungen „Enthält diese Wörter“ und „im Betreff ...“. Geben Sie in der nächsten Oberfläche „\[SPAM]“ ein, um die Nachrichten zu spezifizieren, die von unserem Spam-Schutz vorab markiert wurden. Fügen Sie die Phrase mit `+`{.action} hinzu und klicken Sie dann auf `OK`{.action}.

![inboxrules](images/exchange-rules-step8.png){.thumbnail}

Da kein automatisierter Spam-Schutz definitiv entscheiden kann, ob es sich bei einer E-Mail tatsächlich um Spam handelt, empfiehlt es sich, diese E-Mails in einem entsprechenden Ordner zu sammeln. Auf diese Weise können Sie den Inhalt dieses Spam-Ordners überprüfen, bevor Sie ihn leeren. Zu diesem Zweck wählen Sie als Aktion „Verschieben, Kopieren oder Löschen“ und dann „Nachricht in Ordner verschieben...“. Wählen Sie einen Ordner aus der Liste aus. Speichern Sie die Regel, indem Sie auf `OK`{.action} klicken.

![inboxrules](images/exchange-rules-step9_2.png){.thumbnail}


> [!primary]
>
Bitte beachten Sie, dass Spam-*False Positives* nicht direkt in OWA deklariert werden können. Wenn Sie E-Mails erhalten, die fälschlicherweise als \[SPAM] gekennzeichnet sind, empfehlen wir, unser Support-Team zu informieren, indem Sie eine Support-Anfrage in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/manager/dedicated/#/support/tickets/new) erstellen.  
>


## Weiterführende Informationen

[Einrichten automatischer Antworten in OWA](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_einrichten_einer_automatischen_antwort_in_owa/)

[Kalender via OWA freigeben](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_einen_kalender_via_owa_webmail_freigeben/)

[Outlook Web App mit einem E-Mail-Konto verwenden](https://docs.ovh.com/de/emails/verwendung-owa/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.