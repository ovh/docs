---
title: Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen
excerpt: Erfahren Sie hier, wie Sie einen SPF-Eintrag für Ihre OVHcloud Domain konfigurieren
slug: webhosting_spf-eintrag
section: DNS und DNS-Zone
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 07.04.2021**

## Ziel

Mithilfe von SPF (Sender Policy Framework) kann ein Empfangsserver überprüfen, ob eine E-Mail von einem autorisierten Absender versandt wurde.

- Es hilft dabei, potenziellen Identitätsbetrug über E-Mail-Adressen unter Verwendung Ihres Domainnamens (Spoofing) zu verhindern.
- Sie können es auch verwenden, um die von Ihnen versandten E-Mails zu authentifizieren.
- Der SPF wird als Eintrag zur DNS Zone der Domain hinzugefügt, die zum Versand von E-Mails autorisiert ist.

Die Autorisierung wird durch die im SPF selbst enthaltenen Informationen ermöglicht. Er setzt sich zusammen aus:

- **mehreren Servern oder IP-Adressen**, um sie als legitime Absender zu identifizieren;
- **einem Qualifikator**, der dem Empfangsserver eine spezifische Art und Weise empfiehlt, auf eine als illegitim eingestufte Nachricht zu reagieren, d. h. auf eine Mail, die aus einer verdächtigen Quelle stammt.

Stellen Sie sicher, dass Sie bei der Konfiguration eines SPF alle Absenderquellen für die E-Mails dieser Domain in den SPF-Eintrag aufnehmen. Diese Quellen können Ihre eigenen Server, die Server Ihres Anbieters oder die der E-Mail-Lösungen von OVHcloud sein.

> [!primary]
>
> Obgleich eine allgemein akzeptierte Maßnahme, kann ein SPF-Eintrag nur eine Empfehlung für Server sein, die E-Mails empfangen. Danach obliegt es dem Server, die im SPF-Eintrag der Domain angegebene Richtlinie anzuwenden.
>

**Diese Anleitung erklärt, wie Sie einen SPF-Eintrag für Ihre OVHcloud Domain konfigurieren.**

## Voraussetzungen

- Eine Domain, die die OVHcloud-Konfiguration verwendet (d. h. die OVHcloud DNS-Server).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den notwendigen Berechtigungen zur Verwaltung des DNS der Domain.

## In der praktischen Anwendung

> [!warning]
>
> Wenn Ihre Domain keine OVHcloud DNS-Server verwendet, ändern Sie den SPF-Eintrag über das Interface des Dienstleisters, der das DNS Ihrer Domain verwaltet.
>
> Wenn Ihre Domain bei OVHcloud registriert ist, können Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) überprüfen, ob sie die OVHcloud Konfiguration verwendet. Klicken Sie dazu auf den `DNS-Server`{.action} Tab Ihrer Domain.
>

###  OVHcloud SPF-Konfiguration

Die OVHcloud Konfiguration gilt für diese Dienste:

- MX-Plan, autonom oder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) enthalten
- [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/)
- [Hosted Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/)

Wenn Sie eine dieser Lösungen bestellen, empfehlen wir Ihnen, einen SPF-Eintrag mit den OVHcloud Informationen in der DNS-Zone Ihrer Domain zu verwenden. Er sieht so aus:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Diese Konfiguration gilt nicht für Provider Exchange oder Private Exchange.

Für einen Provider Exchange Dienst ist die Konfiguration wie folgt:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> Für Private Exchange müssen Sie die IP-Adressen Ihres E-Mail-Servers angeben. Um die Größe des SPF-Eintrags zu reduzieren können Sie auch einen zusätzlichen SPF-Eintrag für eine Subdomain erstellen und alle IP-Adressen inkludieren. Erstellen Sie anschließend für die tatsächlich zu verwendende Domain einen SPF-Eintrag, der die Subdomain enthält, unter Verwendung des Abschnitts "include".
>

#### Überprüfung Ihrer aktuellen SPF-Konfiguration

Wenn Ihre Domain OVHcloud DNS-Server verwendet, können Sie überprüfen, ob ein SPF-Eintrag bereits dafür konfiguriert ist. Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Domainnamen`{.action} Ihren Domainnamen aus. Klicken Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle auf dieser Seite zeigt die DNS-Zone Ihrer Domain bei OVHcloud an. Jede Zeile der Tabelle repräsentiert einen DNS-Eintrag.

> [!primary]
>
> Überprüfen Sie im Zweifelsfall, ob Ihre Domain tatsächlich OVHcloud DNS Server verwendet, im Tab `DNS-Server`{.action}.
>

Um die Zeile mit dem OVHcloud SPF-Eintrag zu finden, kann auf die Tabelle ein Anzeigefilter angewendet werden. Da der Eintrag an zwei verschiedenen Stellen angezeigt werden kann, wählen Sie sowohl den Filter `TXT`{.action} als auch den Filter `SPF`{.action} aus. Sie erhalten eines der folgenden Ergebnisse.

- **Ein SPF-Eintrag für die E-Mail-Lösungen von OVHcloud wird angezeigt**: Ihre Domain verwendet derzeit die OVHcloud-Konfiguration. Wenn Sie diesen nicht mehr verwenden möchten, müssen Sie ihn im [nächsten Schritt](#modifyspf) ändern.

- **Es wird ein SPF-Eintrag angezeigt, der nicht der OVHcloud Konfiguration entspricht**: Ihre Domain verwendet bereits einen personalisierten SPF. Wenn diese Konfiguration nicht korrekt ist, müssen Sie sie ändern. Sie können die [OVHcloud Konfiguration anwenden](#spfrecordovhcloud) oder ihn im [nächsten Schritt](#modifyspf) ändern.

- **Es wird kein SPF-Eintrag in der Spalte "Ziel" angezeigt**: Überprüfen Sie zunächst, dass der Eintrag tatsächlich nicht als SPF oder TXT existiert, indem Sie die Filterung ändern. Wenn in der Zone kein SPF-Eintrag angezeigt wird, verwendet Ihre Domain derzeit keinen. Sie können ihn im [nächsten Schritt](#spfrecord) hinzufügen.

> [!primary]
>
> Ein SPF-Eintrag folgt immer dieser Form: "v=spf1 `Quellen` `Qualifikator`" Der OVHcloud SPF ist zum Beispiel: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Konfiguration eines neuen SPF Eintrags <a name="spfrecord"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Domainnamen`{.action} Ihren Domainnamen aus. Klicken Sie dann auf den Tab `DNS-Zone`{.action}.

Um einen SPF-Eintrag hinzuzufügen klicken Sie rechts im Menü auf `Eintrag hinzufügen`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Im neu angezeigten Fenster bietet der Konfigurationsassistent verschiedene Arten von DNS-Einträgen an. Es gibt zwei Möglichkeiten, einen SPF-Eintrag hinzuzufügen:

- [Hinzufügen als TXT-Eintrag](#txtrecord), geeignet für erfahrene Nutzer oder wenn der komplette Eintrag zum Kopieren und Einfügen vorliegt. Beispielweise, wenn Ihnen der Anbieter Ihrer E-Mail-Lösung den vollständigen Wert zugesandt hat.
- [Verwendung des Assistenten zur Erstellung eines SPF-Eintrags](#addspfrecord) für Benutzer, denen nicht der gesamten Eintrag vorliergt. Zum Beispiel, wenn Sie nur über eine IP-Adresse oder den Hostnamen des E-Mail-Servers verfügen. Mit dem Assistenten können Sie auch [einen SPF-Eintrag erstellen lassen, der nur für OVHcloud E-Mail-Lösungen gilt](#spfrecordovhcloud). 

![domain](images/spf_records_add_entry.png){.thumbnail}

##### Hinzufügen eines SPF Eintrags <a name="addspfrecord"></a>

Mit dem Konfigurationsassistenten können Sie Ihren SPF-Eintrag nach Ihren Bedürfnissen anpassen. Um Ihre Einstellungen anzuwenden, beantworten Sie die Fragen auf dieser Seite. Einige angeforderte Informationen können für erfahrene Anwender bestimmt sein. Weitere Informationen finden Sie in den unten stehenden Tabellen.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Details|Beschreibung|
|---|---|
|Subdomain|Füllen Sie dies aus, wenn der SPF-Eintrag auf eine Subdomain Ihrer Domain angewendet werden soll, das heißt, wenn Sie E-Mails von einer Subdomain aus versenden.|
|TTL|Dies ist die Propagationszeit, die für die Konfiguration dieses DNS Eintrags gelten soll.|
|Der IP-Adresse den Versand von E-Mails erlauben.|Kann notwendig sein, wenn Ihre Website und Ihre E-Mail-Adressen auf einem Server mit der gleichen IP-Adresse gehostet werden (zum Beispiel auf Ihrem Dedicated Server).|
|Den MX Servern den Versand von E-Mails erlauben.|Wählen Sie diese Option, wenn Server, die Ihre E-Mails empfangen, diese auch versenden können.|
|Allen Servern, deren Name mit Ihrer Domain endet, den Versand von E-Mails erlauben.|Diese Option muss mit Vorsicht genutzt werden, da sie eine sehr breite Legitimation der Absenderquellen mit Ihrer Domain ermöglicht.|

Zu der Frage: "**Versenden andere Server die Mails Ihrer Domain?**" können mehrere Werte angegeben werden:

|Details|Beschreibung|
|---|---|
|a|Geben Sie hier die Domains ein. Dies erlaubt den Servern, die die Websites mit den angegebenen Domains hosten, E-Mails von Ihren Adressen zu versenden.|
|mx|Geben Sie hier die Server an, die Ihre E-Mails empfangen (MX-Server), falls diese auch versenden können. Sie werden dann als legitimer Absender eingestuft.|
|ptr|Geben Sie hier die Hostnamen an, deren *DNS Reverse* aktiv ist (durch einen PTR-Eintrag in der DNS-Zone). Sie werden dann als legitimer Absender eingestuft.|
|ip4|Geben Sie die IP-Adressen oder IP-Bereiche (IPv4) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|ip6|Geben Sie die IP-Adressen oder IP-Bereiche (IPv6) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|include|Geben Sie hier Domains ein, die eigene SPF-Regeln haben, um deren SPF-Eintrag für Ihre eigene Domain zu nutzen. Zum Beispiel wendet OVHcloud diese Methode für die SPF-Konfiguration an: "v=spf1 include:mx.ovh.com ~all". Somit kann OVHcloud den SPF von mx.ovh.com verwalten und Kunden ermöglichen, diesen für ihre Dienste zu verwenden.|

Zu der Frage: "**Umfassen die von Ihnen gemachten Angaben sämtliche Hosts, die E-Mails Ihrer Domain versenden?**", sind drei Optionen möglich:

|Details|Beschreibung|
|---|---|
|Ja, ich bin mir dessen sicher|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ablehnen, wenn sie von einer nicht-legitimen (im SPF nicht enthaltenen) Quelle stammen.|
|Ja, aber dennoch den Safe Mode verwenden|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese akzeptieren, auch wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen, sie aber als möglicherweise illegitim kennzeichnen (zum Beispiel als Spam).|
|Nein|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ohne besondere Aktion akzeptieren, wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen. Der E-Mail-Header wird jedoch inkrementiert.|

Wenn Sie fertig sind, klicken Sie auf `Weiter`{.action}. Bestätigen Sie dann, dass die von Ihnen eingegebenen Werte korrekt sind, indem Sie auf `Bestätigen`{.action} klicken.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis 24 Stunden, bevor sie voll wirksam ist. 
>

##### Hinzufügen des OVHcloud SPF-Eintrags <a name="spfrecordovhcloud"></a>

Wählen Sie den Eintrag vom Typ `SPF`{.action} aus und klicken Sie dann auf den Button `Den SPF für das Shared Hosting von OVHcloud verwenden`{.action}. Klicken Sie im nächsten Schritt auf `Bestätigen`{.action}, um die Aktion auszuführen.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis 24 Stunden, bevor sie voll wirksam ist. 
>

##### Hinzufügen eines TXT-Eintrags <a name="txtrecord"></a>

Wählen Sie den Eintrag vom Typ `TXT`{.action} aus und geben Sie die angeforderten Informationen ein. Geben Sie im Feld "Wert" die vollständige SPF-Zeichenfolge für Ihre Domain ein.

Klicken Sie auf `Weiter`{.action} und bestätigen Sie, dass der von Ihnen eingegebene SPF korrekt ist, indem Sie auf `Bestätigen`{.action} klicken.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis 24 Stunden, bevor sie voll wirksam ist. 
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

### Bearbeiten eines SPF-Eintrags <a name="modifyspf"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Domainnamen`{.action} Ihren Domainnamen aus. Klicken Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle auf dieser Seite zeigt die DNS-Zone Ihrer Domain bei OVHcloud an. Jede Zeile der Tabelle repräsentiert einen DNS-Eintrag. Lokalisieren Sie den TXT- oder SPF-Eintrag in dieser Tabelle und klicken Sie rechts auf `...`{.action}, um den Eintrag zu ändern.

Wenn Sie weitere Informationen zum Bearbeiten eines SPF-Eintrags benötigen, können Sie die [Anleitungsschritte oben](#addspfrecord) konsultieren.


## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/)

[DNS-Server einer OVHcloud Domain ändern](../webhosting_allgemeine_informationen_zu_den_dns_servern/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
