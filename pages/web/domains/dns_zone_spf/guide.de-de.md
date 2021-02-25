---
title: Einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen
excerpt: Hier erfahren Sie, wie Sie einen SPF-Eintrag zur Konfiguration Ihrer OVH Domain hinzufügen
slug: webhosting_spf-eintrag
section: Fortgeschrittene Nutzung
order: 5
---

**Stand 21.03.2018**

## Einleitung

Das SPF (Sender Policy Framework) ermöglicht es einem Server, bei Empfang einer E-Mail zu überprüfen, ob diese von einem dazu berechtigten Server gesendet wurde. Das SPF wird als Eintrag in der DNS-Zone hinzugefügt, in dem die Server oder IP-Adressen eingetragen werden, die autorisiert sind, E-Mails von einer bestimmten Domain zu senden.

**In dieser Anleitung erfahren Sie, wie Sie bei OVH einen SPF-Eintrag zur Konfiguration Ihrer Domain hinzufügen.**

## Voraussetzungen

- Sie haben über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Zugriff auf die Verwaltung der betreffenden Domain.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.
- Die betreffende Domain verwendet die OVH Konfiguration (das heißt die OVH DNS-Server).

> [!warning]
>
> Wenn Ihre Domain nicht die DNS-Server von OVH verwendet, muss die Änderung des SPF über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihrer Domain verwaltet wird.
> 
> Wenn Ihre Domain bei OVH registriert ist, können Sie überprüfen, ob diese die OVH Konfiguration verwendet. Gehen Sie hierzu in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} zur entsprechenden Domain und anschließend in den Tab `DNS Server`{.action}.
>

## Beschreibung

### Schritt 1: Den SPF-Eintrag verstehen

Bevor Sie einen SPF-Eintrag in der Konfiguration Ihrer Domain hinzufügen oder bearbeiten, ist es wichtig zu verstehen, wozu dieser verwendet wird. Mit dem SPF-Eintrag soll Identitätsdiebstahl und somit die missbräuchliche Verwendung von E-Mail-Adressen mit Ihrem Domainnamen verhindert werden.

Dies ist durch zusätzliche Angaben im SPF-Eintrag selbst möglich, darunter:

- **Server oder mehrere IP-Adressen**, die anhand des Eintrags als legitime Absender identifiziert werden können.
- **Ein Qualifikator**: Mit diesem können Server so eingerichtet werden, dass sie bei Empfang einer als nicht-legitim eingestuften E-Mail (die also von einer Quelle stammt, die ein mögliches Risiko darstellt) auf eine bestimmte Weise reagieren.

Stellen Sie daher sicher, dass Sie im SPF alle Absender eintragen, die Sie für E-Mails mit Ihrer Domain verwenden. Diese Absender (bzw. Quellen) können Ihr eigener Server, der Server Ihres Anbieters oder einer der für OVH E-Mail-Lösungen verwendeten Server sein.

> [!primary]
>
> Das SPF ist nur ein Hinweis für Server, die E-Mails empfangen, darunter Ihre eigenen. Es liegt an den Servern, ob sie auch befolgen, was im SPF-Eintrag der Domains angegeben ist, von denen sie Mails erhalten.
>

### Schritt 2: Die OVH Konfiguration verstehen

Die OVH Konfiguration gilt für folgende Lösungen:

- MX Plan, separat oder in einem [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot enthalten
- [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external}
- [Hosted Exchange](https://www.ovh.de/emails/hosted-exchange/){.external}

Wenn Sie eine dieser Lösungen bestellen, empfehlen wir Ihnen, in Ihrer Domainkonfiguration einen SPF-Eintrag mit den OVH Informationen zu verwenden. Dieser sieht in etwa so aus:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Wenn Ihre Domain die OVH Konfiguration verwendet, können Sie überprüfen, ob für Letztere bereits ein SPF eingerichtet ist. Melden Sie sich hierzu in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} an und gehen Sie anschließend im Menü auf der linken Seite in den Bereich `Domains`{.action}.  Klicken Sie auf die betreffende Domain und gehen Sie dann in den Tab `DNS Zone`{.action}.

Es sollte eine Tabelle angezeigt werden. In dieser ist die Konfiguration Ihrer Domain bei OVH angezeigt. Sie besteht aus mehreren DNS-Einträgen, die in jeweils einer Zeile der Tabelle stehen.

> [!primary]
>
> Wenn Ihre Domain bei OVH eingerichtet ist, können Sie in dem Tab `DNS Server`{.action} überprüfen, ob sie die OVH Konfiguration verwendet.
>

Um in der Tabelle die Zeile zu finden, die dem OVH SPF entspricht, können Sie ein Filterfeld verwenden. Da der SPF-Eintrag an zwei verschiedenen Stellen erscheinen kann, wählen Sie im Filterfeld `TXT`{.action} oder `SPF`{.action}, wobei Sie gegebenenfalls von einem zum anderen übergehen. Die Tabellenansicht kann daher unterschiedlich sein.

- **"v=spf1 include:mx.ovh.com ~all" wird in der Zielspalte angezeigt**: Ihre Domain verwendet bereits die OVH Konfiguration. Falls Sie diese nicht mehr verwenden möchten, können Sie diese im folgenden Schritt bearbeiten.

- **Ein SPF, das nicht den OVH Angaben entspricht, ist in der Zielspalte zu sehen**: Ihre Domain verwendet bereits ein benutzerdefiniertes SPF. Dieser Eintrag wird im nächsten Schritt bearbeitet oder auf die OVH Konfiguration umgestellt.

- **Es wird kein SPF in der Zielspalte angezeigt**: Prüfen Sie zunächst, ob das Feld als SPF oder TXT erstellt wurde, indem Sie die Filterung ändern. Wenn mit keiner der beiden Filtereinstellungen ein SPF gefunden werden kann, verwendet Ihre Domain keinen solchen Eintrag. Sie können diesen im nächsten Schritt hinzufügen.

> [!primary]
>
> Ein SPF hat immer die folgende Form: "v=spf1 Quelle Qualifikator". So lautet zum Beispiel der OVH SPF-Eintrag: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Schritt 3: Das SPF bearbeiten

Um das SPF in der OVH Konfiguration Ihrer Domain zu ändern, melden Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} an. Gehen Sie im linken Menü in den Bereich `Domains`{.action}, klicken Sie auf die betreffende Domain und anschließend in den Tab `DNS Zone`{.action}.

In der Tabelle ist die OVH Konfiguration Ihrer Domain angezeigt. Jede Zeile entspricht einem DNS-Eintrag.

Zum Ändern oder Hinzufügen eines SPF müssen Sie einen neuen Eintrag in der OVH Konfiguration (DNS-Zone) Ihrer Domain hinzufügen. Klicken Sie hierzu auf `Einen Eintrag hinzufügen`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

Im angezeigten Fenster werden Ihnen mehrere DNS-Einträge angeboten. Zum Hinzufügen eines SPF haben Sie zwei Möglichkeiten:

- **SPF manuell hinzufügen**: für fortgeschrittene Benutzer, die bereits über die nötigen Informationen verfügen (diese wurden Ihnen zum Beispiel von Ihrem E-Mail-Anbieter übermittelt ).
- **Verwendung unseres SPF-Konfigurationsassistenten**: für Benutzer, die nicht über die notwendigen Informationen verfügen.

Je nach Ihrer Entscheidung unterscheidet sich die Vorgehensweise.

![domain](images/spf_records_add_entry.png){.thumbnail}

#### SPF manuell hinzufügen

Unter den angebotenen Einträgen klicken Sie auf `TXT`{.action} und geben dann die geforderten Informationen ein. In der Zone `Wert`{.action} geben Sie das SPF an, das Sie verwenden möchten.

Klicken Sie auf `Weiter`{.action}, um den Vorgang abzuschließen. Vergewissern Sie sich, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis 24 Stunden, bevor sie voll wirksam ist.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

#### Verwendung des SPF-Konfigurationsassistenten von OVH

Unter den angebotenen Einträgen klicken Sie auf `SPF`{.action}. Im nächsten Schritt haben Sie zwei Möglichkeiten:

- Verwendung des SPF für OVH Lösungen (MX Plan, E-Mail Pro und Hosted Exchange).
- Individuelle Anpassung des SPF mit unserem Assistenten.

##### Verwendung des OVH SPF

Klicken Sie auf die Schaltfläche `Den SPF für das Shared Hosting von OVH verwenden`{.action}. Die Angaben zum OVH SPF werden angezeigt. Klicken Sie auf den Button `Bestätigen`{.action}, um die Änderung vorzunehmen.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bevor sie voll wirksam ist.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

##### Individuelle Anpassung des SPF

Mithilfe des Konfigurationsassistenten können Sie Ihr SPF schrittweise individuell anpassen. Beantworten Sie hierzu verschiedene Fragen und geben Sie die notwendigen Informationen an. Einige angeforderte Elemente können sich an fortgeschrittene Benutzer richten.

Die verschiedenen Elemente werden im Folgenden nach und nach beschrieben.

|Details|Beschreibung|
|---|---|
|Subdomain|Füllen Sie dieses Feld aus, falls das SPF auf eine Subdomain Ihrer Domain angewendet werden soll. Dies gilt, wenn Sie E-Mails von einer Subdomain aus versenden.|
|TTL|Dies ist die notwendige Propagationszeit der Änderungen, wenn Sie den neuen DNS-Eintrag bearbeiten.|
|Der IP-Adresse den Versand von E-Mails erlauben|Kann notwendig sein, wenn Ihre Website und Ihre E-Mail-Adressen auf einem Server mit der gleichen IP-Adresse gehostet werden (zum Beispiel auf Ihrem Dedicated Server).|
|Den MX-Servern den Versand von E-Mails erlauben|Kann notwendig sein, wenn die Server, die Ihre E-Mails empfangen, diese auch versenden können.|
|Allen Servern, deren Name mit Ihrer Domain endet, den Versand von E-Mails erlauben|Diese Einstellung wird nicht empfohlen, da so zu viele Quellen in Ihrem SPF-Eintrag als legitim eingestuft werden können.|

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Zur Frage "**Versenden andere Server E-Mails von Ihrer Domain?**" können mehrere Elemente ausgefüllt werden:

|Details|Beschreibung|
|---|---|
|a|Geben Sie hier die Domains ein. Dies erlaubt den Servern, die die Websites mit den angegebenen Domains hosten, E-Mails von Ihren Adressen zu versenden.|
|mx|Geben Sie hier die Server an, die Ihre E-Mails empfangen (MX-Server) und auch versenden können. Sie werden dann als legitimer Absender eingestuft.|
|ptr|Geben Sie hier Hostnames an, deren *DNS Reverse* aktiv ist (durch einen PTR-Eintrag in der DNS-Zone). Sie werden dann als legitimer Absender eingestuft.|
|ip4|Geben Sie die IP-Adressen oder IP-Bereiche (IPv4) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|ip6|Geben Sie die IP-Adressen oder IP-Bereiche (IPv6) ein, die zum Senden von E-Mails mit Ihren Adressen autorisiert sind.|
|include|Geben Sie hier die Domains ein. So können Sie deren SPF-Eintrag für Ihre eigene Domain verwenden. Zum Beispiel verwendet OVH diese Methode in seiner SPF-Konfiguration: "v=spf1 include:mx.ovh.com ~all". Dadurch verwaltet OVH das SPF von mx.ovh.com und ermöglicht seinen Kunden, es zu benutzen.|

Für die Frage "**Umfassen die von Ihnen gemachten Angaben sämtliche Hosts, die E-Mails von Ihrer Domain versenden?**" gibt es drei Antwortmöglichkeiten:

|Details|Beschreibung|
|---|---|
|Ja, ich bin mir dessen sicher|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ablehnen, wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen.|
|Ja, aber dennoch den Safe Mode verwenden|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese akzeptieren, auch wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen, sie aber als möglicherweise illegitim kennzeichnen (zum Beispiel als Spam).|
|Nein|Stellt ein, dass Server, die E-Mails von Ihrer Domain empfangen, diese ohne besondere Aktion akzeptieren, wenn sie von einer nicht-legitimen (in Ihrem SPF nicht genannten) Quelle stammen. Der E-Mail-Header wird jedoch inkrementiert.|

Das SPF ist wie bereits erwähnt nur ein Hinweis für die Server, die E-Mails empfangen, darunter Ihre eigenen. Es liegt an den Servern, ob sie auch befolgen, was im SPF-Eintrag der Domains angegeben ist, von denen sie Mails erhalten.

Wenn Sie alle Informationen angegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Änderung erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bevor sie voll wirksam ist.
>

## Weiterführende Informationen

[Webhosting − Allgemeine Informationen zu den DNS Servern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}.

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.