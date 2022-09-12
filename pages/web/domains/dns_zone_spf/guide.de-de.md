---
title: Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen
excerpt: Erfahren Sie hier, wie Sie einen SPF-Eintrag für Ihre OVHcloud Domain konfigurieren
slug: webhosting_spf-eintrag
section: DNS und DNS-Zone
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 12.09.2022**

## Ziel

Mithilfe von SPF (Sender Policy Framework) kann ein empfangender Server überprüfen, ob eine E-Mail von einem autorisierten Absender stammt.

- Es hilft dabei, potenziellen Identitätsbetrug über E-Mail-Adressen unter Verwendung Ihres Domainnamens (Spoofing) zu verhindern.
- Sie können es auch verwenden, um die von Ihnen gesendeten E-Mails zu authentifizieren.
- Der SPF wird als Eintrag zur DNS Zone der Domain hinzugefügt, die zum Versand von E-Mails autorisiert ist.

Diese Aktion wird durch die Informationen ermöglicht, die in einem SPF-Eintrag angegeben sind. Es handelt sich technisch um einen TXT-Eintrag in der DNS-Zone. Darin enthalten sind folgende Elemente:

- **Mehrere Server oder IP-Adressen**, um sie als legitime Absender zu identifizieren.
- **Ein Qualifikator**, der den empfangenden Server auffordert, Nachrichten, die als nicht legitim gelten (von einer nicht aufgelisteten Quelle stammen), auf eine bestimmte Weise zu behandeln.

Stellen Sie daher sicher, dass Sie die Absenderquellen, die Sie für den Versand Ihrer E-Mails mit Ihrer Domain verwenden, in den SPF-Eintrag einfügen. Diese Quellen können Ihr eigener E-Mail-Server, der Server Ihres Anbieters oder eine der E-Mail-Lösungen von OVHcloud sein.

> **Beispiel** <br>
> Sie senden eine E-Mail von Ihrer Adresse `contact@mydomain.ovh`.
> Im SPF-Eintrag der `mydomain.ovh` Domain wird nur der ausgehende Server **A** (Outgoing Mail Server **A**) angegeben.
> Wenn der empfangende Server (Inbound Mail Server) die E-Mail erhält, fragt er die DNS-Zone Ihrer Domain `mydomain.ovh` ab, um den SPF-Eintrag zu überprüfen.
>
> - Da der ausgehende Server **A** (Outgoing Mail Server **A**) im SPF-Eintrag gut aufgeführt ist, landet die E-Mail wie üblich im Posteingang des Empfängers.
> - Da der ausgehende Server **B** (Outgoing Mail Server **B**) nicht im SPF-Eintrag aufgeführt ist, wird die von diesem Server stammende E-Mail im Posteingang als verdächtig markiert. Dies kann zu einem Vermerk `[SPAM]` im Betreff der E-Mail, zur Verschiebung in den `Junk-Mail`-Ordner oder zur direkten Löschung führen, gemäß den Regeln des Empfangsservers.
>
> ![domain](images/spf_records_diagram.png){.thumbnail}


> [!primary]
>
> SPF bietet nur eine Hilfestellung für alle Server, die E-Mails empfangen. Ob die Angaben im SPF-Eintrag von Domainnamen, über die E-Mails gesendet werden, auch angewendet werden, liegt alleine beim empfangenden Server.
>

**Diese Anleitung erklärt, wie Sie einen SPF-Eintrag für Ihre OVHcloud Domain konfigurieren.**

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)Zugriff auf die Verwaltung der betreffenden Domain.
- Die ausgewählte Domain muss die OVHcloud-Konfiguration (d. h. die OVHcloud DNS-Server) verwenden.

> [!warning]
>
> Wenn Ihre Domain keine OVHcloud DNS-Server verwendet, ändern Sie den SPF-Eintrag über das Interface des Dienstleisters, der das DNS Ihrer Domain verwaltet.
>
> Wenn Ihre Domain bei OVHcloud registriert ist, können Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) überprüfen, ob sie die OVHcloud-Konfiguration verwendet. Klicken Sie dazu auf den Tab `DNS-Server`{.action} Ihrer Domain.
>

## In der praktischen Anwendung

#### Überprüfung Ihrer aktuellen SPF-Konfiguration

Wenn Ihre Domain OVHcloud DNS-Server verwendet, können Sie überprüfen, ob ein SPF-Eintrag bereits dafür konfiguriert ist. Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Domainnamen`{.action} Ihren Domainnamen aus. Klicken Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle auf dieser Seite zeigt die DNS-Zone Ihrer Domain bei OVHcloud an. Jede Zeile der Tabelle repräsentiert einen DNS-Eintrag.

> [!primary]
>
> Überprüfen Sie im Zweifelsfall, ob Ihre Domain tatsächlich die OVHcloud DNS-Server verwendet. Wechseln Sie dazu zum Tab `DNS-Server`{.action}.
>

Um die Zeile mit dem OVHcloud SPF-Eintrag zu finden, kann auf die Tabelle ein Anzeigefilter angewendet werden. Da der Eintrag an zwei verschiedenen Stellen angezeigt werden kann, wählen Sie sowohl den Filter `TXT`{.action} als auch den Filter `SPF`{.action} aus. Sie erhalten eines der folgenden Ergebnisse.

- **Ein SPF-Eintrag für die E-Mail-Lösungen von OVHcloud wird angezeigt**: Ihre Domain verwendet derzeit die OVHcloud-Konfiguration. Wenn Sie diesen nicht mehr verwenden möchten, müssen Sie ihn im [nächsten Schritt](#modifyspf) bearbeiten.

- **Es wird ein SPF-Eintrag angezeigt, der nicht der Konfiguration von OVHcloud entspricht**: Ihre Domain verwendet bereits einen personalisierten SPF. Wenn diese Konfiguration nicht korrekt ist, müssen Sie sie ändern. Sie können die [OVHcloud-Konfiguration anwenden](#spfrecordovhcloud) oder ihn im [nächsten Schritt](#modifyspf) bearbeiten.

- **Es wird kein SPF-Eintrag in der Spalte "Ziel" angezeigt**: Überprüfen Sie zunächst, dass der Eintrag tatsächlich nicht als SPF oder TXT existiert, indem Sie die Filterung ändern. Wenn in der Zone kein SPF-Eintrag angezeigt wird, verwendet Ihre Domain derzeit keinen. Sie können ihn im [nächsten Schritt](#spfrecord) hinzufügen.

> [!primary]
>
> Ein SPF-Eintrag folgt immer dieser Form: "v=spf1 `Quellen` `Qualifikator`" Der SPF für Dienste von OVHcloud ist zum Beispiel: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Konfiguration eines neuen SPF Eintrags

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Domainnamen`{.action} Ihren Domainnamen aus. Klicken Sie dann auf den Tab `DNS-Zone`{.action}.

Um einen SPF-Eintrag hinzuzufügen klicken Sie rechts im Menü auf `Eintrag hinzufügen`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Im neu angezeigten Fenster bietet der Konfigurationsassistent verschiedene Arten von DNS-Einträgen an. Es gibt zwei Möglichkeiten, einen SPF-Eintrag hinzuzufügen: 

- [TXT-Eintrag hinzufügen](#txtrecord): Für erfahrene Benutzer bzw. wenn der vollständige SPF-Eintrag vorliegt. Ihr E-Mail-Anbieter übermittelt Ihnen zum Beispiel den Wert.
- [SPF-Eintrag hinzufügen](#spfrecord): Für Benutzer, die nicht über den vollständigen Wert verfügen. Sie haben beispielsweise nur eine IP-Adresse oder den Hostnamen des E-Mail-Servers als Information.
- [Einen OVHcloud SPF-Eintrag hinzufügen](#spfrecordovhcloud) **und die OVHcloud-Konfiguration verwenden**: Für Benutzer, die ausschließlich die E-Mail-Angebote von OVHcloud für ihre Domain nutzen (ausgenommen [Private Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}).

![domain](images/spf_records_add_entry.png){.thumbnail}

##### Hinzufügen eines SPF Eintrags <a name="spfrecord"></a>

Mit dem Konfigurationsassistenten können Sie Ihren SPF-Eintrag nach Ihren Bedürfnissen anpassen. Um Ihre Einstellungen anzuwenden, beantworten Sie die Fragen des Assistenten. Einige angeforderte Informationen können für erfahrene Anwender bestimmt sein. Weitere Informationen finden Sie in den unten stehenden Tabellen.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Details|Beschreibung|
|---|---|
|Subdomain|Füllen Sie dies aus, wenn der SPF-Eintrag auf eine Subdomain Ihrer Domain angewendet werden soll, das heißt, wenn Sie E-Mails von einer Subdomain aus versenden.|
|TTL|Dies ist die Propagationszeit, die für die Konfiguration dieses DNS Eintrags gelten soll.|
|Der IP-Adresse den Versand von E-Mails erlauben.|Kann notwendig sein, wenn Ihre Website und Ihre E-Mail-Accounts auf einem Server mit der gleichen IP-Adresse gehostet werden (zum Beispiel auf Ihrem Dedicated Server).|
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
|include|Geben Sie hier Domains ein, die eigene SPF-Regeln haben, um deren SPF-Eintrag für Ihre Domain zu nutzen. Zum Beispiel wendet OVHcloud diese Methode für die SPF-Konfiguration an: "v=spf1 include:mx.ovh.com ~all". Somit kann OVHcloud den SPF von mx.ovh.com verwalten und Kunden ermöglichen, diesen für ihre Dienste zu verwenden.|

Zu der Frage: "**Umfassen die von Ihnen gemachten Angaben sämtliche Hosts, die E-Mails Ihrer Domain versenden?**" sind drei Optionen möglich:

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

Sie haben den `SPF`{.action}-Eintrag ausgewählt und möchten die OVHcloud-Konfiguration anwenden. Diese erlaubt es, alle ausgehenden E-Mail-Server von OVHcloud für die folgenden E-Mail-Angebote einzubeziehen:

- MX Plan Standalone oder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot inklusive
- [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/)
- [Hosted Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/)

Klicken Sie auf den `Button SPF für das Shared Hosting von OVHcloud`{.action} oben im Support-Fenster. Die Informationen zum OVHcloud SPF werden angezeigt. Klicken Sie auf den Button `Bestätigen`{.action}, um die Änderung vorzunehmen.

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

Die Tabelle auf dieser Seite zeigt die DNS-Zone Ihrer Domain bei OVHcloud an. Jede Zeile der Tabelle repräsentiert einen DNS-Eintrag. Lokalisieren Sie den TXT- oder SPF-Eintrag in dieser Tabelle und klicken Sie rechts auf `...`{.action}, um den Eintrag zu bearbeiten.

### OVHcloud SPF-Konfiguration für Shared-E-Mail-Angebote <a name="ovhcloudspfvalue"></a>

Die allgemeine OVHcloud SPF-Konfiguration gilt für folgende Lösungen:

- MX Plan Standalone oder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot inklusive
- [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/)
- [Hosted Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/)

Die Konfiguration lautet:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

### OVHcloud SPF-Konfiguration für Private Exchange 

Für das Private Exchange Angebot müssen die IP-Adressen Ihres E-Mail-Servers angegeben werden. Verwenden Sie das `ip4`-Argument, um die IP-Adresse Ihres Private Exchange Servers einzutragen.

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 ~all"
```

Falls Sie zusätzlich einen [Webhosting E-Mail-Dienst verwenden](#ovhcloudspfvalue), können Sie das entsprechende Argument `include:mx.ovh.com` zum SPF-Eintrag hinzufügen. Das Ergebnis sollte dann folgendermaßen aussehen:

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 include:mx.ovh.com ~all"
```

> [!primary]
> 
> Um die IP-Adresse des Private Exchange Servers abzurufen, klicken Sie auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Klicken Sie dann auf den Namen des betreffenden Private Exchange Dienstes.
>
> Klicken Sie im Tab `Allgemeine Informationen`{.action} im Bereich `Server` auf `A`. Lesen Sie im neu angezeigten Fenster den Wert ab.
>
> ![domain](images/spf_records_ip.png){.thumbnail}

## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/)

[DNS-Server einer OVHcloud Domain ändern](../webhosting_allgemeine_informationen_zu_den_dns_servern/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
