---
title: Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen
excerpt: Hier erfahren Sie, wie Sie einen SPF-Eintrag zur Konfiguration Ihrer OVH Domain hinzufügen
slug: webhosting_spf-eintrag
section: Fortgeschrittene Nutzung
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 25.02.2021**

## Ziel

Das SPF (Sender Policy Framework) ermöglicht es einem Server, bei Empfang einer E-Mail zu überprüfen, ob diese von einem dazu berechtigten Server gesendet wurde.
<br>So können potenzielle Identitätsdiebstähle mit E-Mail-Adressen, die Ihre Domain verwenden (spoofing), verhindert werden.
<br>Es ermöglicht auch die Authentifizierung der von Ihnen versandten E-Mails.
<br>SPF wird als Eintrag in einer DNS-Zone hinzugefügt, in der die Server oder IP-Adressen angegeben sind, die zum Versand von E-Mails an die betreffende Domain autorisiert sind.

Dies ist durch zusätzliche Angaben im SPF selbst möglich. Hier finden Sie:

- **Server oder mehrere IP-Adressen**: damit werden sie als legitime Versandquellen identifiziert;
- **ein Qualifikator**: wird es ermöglichen, dem Server, der die E-Mails empfängt, eine spezifische Methode zu empfehlen, um auf eine Nachricht zu reagieren, die als nicht legitim gilt, d. h. aus einer Quelle, die ein Risiko darstellt.

Stellen Sie daher sicher, dass Sie im SPF alle Absender eintragen, die Sie für E-Mails mit Ihrer Domain verwenden. Diese Quellen können Ihr eigener Server, der Server Ihres Anbieters oder eine der E-Mail-Lösungen von OVHcloud sein.

> [!primary]
>
> Das SPF ist nur ein Hinweis für Server, die E-Mails empfangen, darunter Ihre eigenen. Es liegt an den Servern, ob sie auch befolgen, was im SPF-Eintrag der Domains angegeben ist, von denen sie Mails erhalten.
>

**So konfigurieren Sie einen SPF-Eintrag für Ihre Domain bei OVHcloud.**

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.
- Die betreffende Domain muss die OVHcloud-Konfiguration (d. h. die OVHcloud DNS-Server) verwenden.

> [!warning]
>
> Wenn Ihre Domain nicht die DNS-Server von OVHcloud verwendet, muss die Änderung des SPF über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihrer Domain verwaltet wird.
>
> Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob die Domain die OVHcloud-Konfiguration verwendet. Gehen Sie hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} auf den Tab `DNS-Server`{.action}, sobald Ihre Domain registriert ist.
>

## In der praktischen Anwendung

### Die OVHcloud SPF-Konfiguration

Die OVHcloud Konfiguration gilt für folgende Lösungen:

- MX Plan allein oder in einem [OVHcloud Webhosting](https://www.ovh.de/hosting/){.external} Angebot enthalten
- [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external}
- [Hosted Exchange](https://www.ovh.de/emails/hosted-exchange/){.external}

Wenn Sie eine dieser Lösungen bestellen, empfehlen wir Ihnen die Verwendung eines SPF-Eintrags mit den Informationen von OVHcloud in der DNS-Zone Ihrer Domain. Dieser sieht in etwa so aus:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Diese Konfiguration gilt nicht für Provider Exchange oder [Private Exchange](https://www.ovh.de/emails/hosted-exchange/){.external}.

Für das Exchange Provider Angebot ist folgende Konfiguration:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> Für das Private Exchange Angebot müssen die IP-Adressen Ihres E-Mail-Servers angegeben werden. Um die Größe des SPF-Eintrags zu begrenzen können Sie einen SPF-Eintrag mit diesen IP-Adressen für eine Subdomain und einen SPF-Eintrag mit dieser Subdomain unter Verwendung der Kategorie "include"für die Domain erstellen.

### Aktuelle SPF-Konfiguration überprüfen

Wenn Ihre Domain die OVHcloud-Konfiguration verwendet, können Sie überprüfen, ob für diese bereits ein SPF-Eintrag konfiguriert ist. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Wählen Sie im Bereich `Domainnamen`{.action} links die betreffende Domain aus. Klicken Sie auf den Tab `DNS-Zone`{.action}.

Es sollte eine Tabelle angezeigt werden. Dort wird die DNS-Zone Ihrer Domain bei OVHcloud angezeigt. Sie besteht aus mehreren Datensätzen, die jeweils durch eine Zeile der Tabelle symbolisiert werden.

> [!primary]
>
> Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob diese die OVHcloud DNS-Server korrekt verwendet. Gehen Sie hierzu in den Tab `DNS-Server`{.action}.
>

In der Tabelle kann ein Anzeigefilter verwendet werden, um die Zeile zu finden, die dem OVHcloud SPF entspricht. Da der Filter an zwei verschiedenen Stellen angezeigt werden kann, wählen Sie im `TXT`{.action} oder `SPF`{.action} Filtereintrag aus, indem Sie erforderlichenfalls von einem zum anderen wechseln. Die Tabellenansicht kann daher unterschiedlich sein.

- **Es wird ein SPF angezeigt, das den OVHcloud Informationen Ihres Angebots entspricht**: Ihre Domain verwendet bereits die OVHcloud-Konfiguration. Falls Sie diese nicht mehr verwenden möchten, können Sie diese im folgenden Schritt bearbeiten.

- **Es wird ein SPF angezeigt, das nicht den Informationen von OVHcloud entspricht**: Ihre Domain verwendet bereits einen personalisierten SPF. Die Änderung oder die Wahl der OVHcloud-Konfiguration erfolgt im nächsten Schritt. Wenn Ihre Konfiguration fehlerhaft ist, müssen Sie sie ändern.

- **In der Zielspalte wird kein SPF angezeigt**: Überprüfen Sie zunächst, ob die Registrierung nicht als SPF oder TXT erstellt wurde, indem Sie die Filterung ändern. Wenn kein SPF angezeigt wird, dann verwendet Ihre Domain keinen SPF. Sie können diesen im nächsten Schritt hinzufügen.

> [!primary]
>
> Ein SPF besteht immer aus: "v=spf1 `Quellen` `Qualifikator`" Der OVHcloud SPF ist zum Beispiel: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### SPF-Eintrag konfigurieren

Um einen SPF-Eintrag in der OVHcloud-Konfiguration Ihrer Domain hinzuzufügen, loggen Sie sich in Ihrem OVHcloud [Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Gehen Sie im linken Menü in den Bereich `Domainnamen`{.action}, klicken Sie auf die betreffende Domain und gehen Sie dann auf den Tab `DNS-Zone`{.action} .

Um einen SPF-Eintrag hinzuzufügen klicken Sie auf `Eintrag hinzufügen`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Im angezeigten Fenster werden Ihnen mehrere DNS-Einträge angeboten. Zum Hinzufügen eines SPF haben Sie zwei Möglichkeiten:

- [TXT Eintrag hinzufügen](#txtrecord): für Benutzer, die bereits über die vollständige Registrierung verfügen. Ihr E-Mail-Anbieter übermittelt Ihnen zum Beispiel den Wert.
- [SPF-Eintrag hinzufügen](#spfrecord): für Benutzer, die nicht über die gesamte Registrierung verfügen. Sie verfügen beispielsweise nur über eine IP-Adresse oder den Hostnamen des E-Mail-Servers.
- [SPF-Eintrag hinzufügen ](#spfrecordovhcloud) **und die OVHcloud-Konfiguration verwenden**: für Benutzer, die ausschließlich die E-Mail-Angebote von OVHcloud für ihre Domain nutzen (ausgenommen [Private Exchange](https://www.ovh.de/emails/hosted-exchange/){.external} und Exchange Provider).

![domain](images/spf_records_add_entry.png){.thumbnail}


#### SPF-Eintrag hinzufügen <a name="spfrecord"></a>

Sie haben den `SPF`{.action} Eintrag ausgewählt.

Mithilfe des Konfigurationsassistenten können Sie Ihr SPF schrittweise individuell anpassen. Beantworten Sie hierzu verschiedene Fragen und geben Sie die notwendigen Informationen an. Einige angeforderte Elemente können sich an fortgeschrittene Benutzer richten.

Die verschiedenen Elemente werden im Folgenden nach und nach beschrieben.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Beschreibung|Beschreibung|
|---|---|
|Subdomain|Füllen Sie dieses Feld aus, falls das SPF auf eine Subdomain Ihrer Domain angewendet werden soll. Dies gilt, wenn Sie E-Mails von einer Subdomain aus versenden.|
|TTL|Dies ist die Propagationszeit, die für die Konfiguration dieses DNS-Eintrags gilt.|
|Der IP-Adresse den Versand von E-Mails erlauben| Anzukreuzen, wenn Ihre Website und E-Mail-Adressen auf einem Server mit derselben IP-Adresse gehostet werden (z. B. auf Ihrem Dedicated Server).|
|Den MX-Servern den Versand von E-Mails erlauben|Anzukreuzen, wenn Ihre E-Mails auch von Servern versendet werden können.|
|Allen Servern, deren Name mit Ihrer Domain endet, den Versand von E-Mails erlauben|Diese Option ist vorsichtig zu verwenden, da sie es ermöglicht, die Absenderquellen, die Ihren Domainnamen verwenden, sehr weit zu legitimieren.|


Zur Frage "**Versenden andere Server E-Mails von Ihrer Domain?**" können mehrere Elemente ausgefüllt werden:

|Details|Beschreibung|
|---|---|
|a|Geben Sie hier die Domains ein. Dies erlaubt den Servern, die die Websites mit den angegebenen Domains hosten, E-Mails von Ihren Adressen zu versenden.|
|mx|Geben Sie hier die Server an, die Ihre E-Mails empfangen (MX-Server) und auch versenden können. Sie werden dann als legitimer Absender eingestuft.|
|ptr|Geben Sie hier Hostnamen ein, deren *Reverse* funktioniert (mit einem PTR-Eintrag in der DNS-Zone). Sie werden dann als legitimer Absender eingestuft.|
|ip4|Geben Sie die IP-Adressen oder IP-Bereiche (IPv4) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|ip6|Geben Sie die IP-Adressen oder IP-Bereiche (IPv6) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|include|Geben Sie hier Domainnamen mit ihren eigenen SPF-Regeln ein. So können diese für Ihre eigene Domain verwendet werden. OVHcloud verwendet diese Methode beispielsweise in seiner SPF-Konfiguration:  "v=spf1 include:mx.ovh.com ~all", was es OVHcloud erlaubt, das SPF von mx.ovh.com zu verwalten und seinen Kunden die Verwendung des SPF zu erlauben.|

Für die Frage "**Umfassen die von Ihnen gemachten Angaben sämtliche Hosts, die E-Mails von Ihrer Domain versenden?**" gibt es drei Antwortmöglichkeiten:

|Details|Beschreibung|
|---|---|
|Ja, ich bin mir dessen sicher|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ablehnen, wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen.|
|Ja, aber dennoch den Safe Mode verwenden|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese akzeptieren, auch wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen, sie aber als möglicherweise illegitim kennzeichnen (zum Beispiel als Spam).|
|Nein|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ohne besondere Aktion akzeptieren, wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen. Der E-Mail-Header wird jedoch inkrementiert.|

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit zwischen 4 und 24 Stunden, bis sie voll wirksam ist.
>

#### OVHcloud SPF-Eintrag verwenden <a name="spfrecordovhcloud"></a>

Sie haben den `SPF`{.action}-Eintrag ausgewählt und möchten die OVHcloud-Konfiguration anwenden.

Klicken Sie auf den Button `Den SPF für das Shared Hosting von OVHcloud verwenden`{.action} oben im Support-Fenster. Die Informationen zum OVHcloud SPF werden angezeigt. Klicken Sie auf den Button `Bestätigen`{.action}, um die Änderung vorzunehmen.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit zwischen 4 und 24 Stunden, bis sie voll wirksam ist.
>

#### TXT Eintrag hinzufügen <a name="txtrecord"></a>

Sie haben den `SPF`{.action} Eintrag ausgewählt.

Klicken Sie auf `TXT`{.action} und geben Sie die angeforderten Informationen ein. In der Zone `Wert`{.action} geben Sie das SPF an, das Sie verwenden möchten.

Klicken Sie auf `Weiter`{.action}, um den Vorgang abzuschließen. Vergewissern Sie sich, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit zwischen 4 und 24 Stunden, bis sie voll wirksam ist.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

### SPF-Eintrag bearbeiten

Um den SPF in der OVHCloud-Konfiguration Ihrer Domain zu ändern, loggen Sie sich in Ihrem [OVHcloud-Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Gehen Sie im linken Menü in den Bereich `Domainnamen`{.action} , klicken Sie auf die betreffende Domain und gehen Sie dann auf den Tab `DNS Zone`{.action}.

Die Tabelle zeigt die OVHCloud-Konfiguration Ihrer Domain. Jede Zeile entspricht einem DNS-Eintrag. Überprüfen Sie Ihren TXT oder SPF Eintrag in dieser Tabelle und klicken Sie auf den Button `..`{.action}, um den Eintrag zu bearbeiten.

## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](../webhosting_bearbeiten_der_dns_zone/){.external}.

[DNS-Server einer OVHcloud Domain ändern](../webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}.

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
