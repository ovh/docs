---
title: Einen CNAME-Eintrag hinzufügen, um Ihre Domain auf Ihrem E-Mail-Angebot zu validieren
excerpt: Hier erfahren Sie, wie Sie Ihren Domainnamen auf Ihrer E-Mail-Plattform validieren, indem Sie einen CNAME-Eintrag hinzufügen
updated: 2023-08-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie eine Domain auf Ihrer E-Mail-Plattform hinzufügen, werden Sie möglicherweise aufgefordert, einen CNAME-Eintrag in der DNS-Zone zu konfigurieren. Dadurch wird sichergestellt, dass die betreffende Domain zur Nutzung auf der E-Mail-Plattform berechtigt ist.

> [!primary]
>
> Wenn die hinzugefügte Domain in demselben Kundenkonto wie die E-Mail-Plattform verwaltet wird, insbesondere in der DNS-Zone, ist kein CNAME-Eintrag zu konfigurieren.

**Hier erfahren Sie, wie Sie Ihren Domainnamen auf Ihrer E-Mail-Plattform validieren, indem Sie einen CNAME-Eintrag hinzufügen.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.
- Sie verfügen über eine [Exchange](https://www.ovhcloud.com/de/emails/) oder [Email Pro](https://www.ovhcloud.com/de/emails/email-pro/) Lösung.
- Sie haben eine Domain zu Ihrer E-Mail-Plattform hinzugefügt. „[ Bei Bedarf können Sie die Anleitung Einen Domainnamen zu einer E-Mail-Plattform hinzufügen ](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)„ lesen.
- Sie können die DNS-Zone der betreffenden Domain [über das OVHcloud Kundencenter](/pages/web_cloud/domains/dns_zone_edit) oder das Verwaltungsinterface konfigurieren, in dem sie registriert ist.

## In der praktischen Anwendung

### Warum sollte ich einen CNAME-Eintrag erstellen?

Der CNAME-Eintrag wird hier als Alias verwendet, er verweist auf ein Ziel, das wiederum auf eine IP-Adresse verweist. Es handelt sich also naturgemäß nicht um einen mit einem E-Mail-Dienst verbundenen Datensatz.

Bei unseren [**Hosted Exchange**](https://www.ovhcloud.com/de/emails/hosted-exchange/) und [**Email Pro**](https://www.ovhcloud.com/de/emails/email-pro/) Angeboten wird dieser CNAME Eintrag als Validierungscode (Token) verwendet, der in der DNS Zone der zu validierenden Domain sichtbar sein wird. So wird sichergestellt, dass der Benutzer der E-Mail-Plattform auch tatsächlich der Manager der Domain ist, die er hinzufügt.

In der folgenden Abbildung wird die E-Mail-Plattform ([Exchange](https://www.ovhcloud.com/de/emails/) oder [Email Pro](https://www.ovhcloud.com/de/emails/email-pro/)) durch den grünen Rahmen dargestellt.<br>
Um E-Mail-Adressen zu trainieren, fügen Sie Accounts hinzu (hier dargestellt durch „**contact**“, „**john.smith**“ und „**mary.johnson**“).<br>
Die Domain **mydomain.ovh** wurde zur E-Mail-Plattform hinzugefügt (siehe Anleitung „[Domainnamen auf einer E-Mail-Plattform hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)“).<br>
Ein Validierungscode wird von der Plattform generiert (in unserem Beispiel im Format „**abcd1-check**“).<br>
Wenn die DNS-Zone der Domain **mydomain.ovh** nicht im selben OVHcloud Kundenkonto verwaltet oder über ein externes Verwaltungsinterface verwaltet wird, muss dieser Code als CNAME-Eintrag hinzugefügt werden. Dieser Datensatz wird im Beispiel durch den blauen Rahmen dargestellt.<br>
Die E-Mail-Plattform kann die DNS-Einträge der Domain **mydomain.ovh** einsehen, um das Vorhandensein des Validierungscodes zu überprüfen.

![E-Mail](images/email-dns-conf-cname01.png){.thumbnail}

Sobald die E-Mail-Plattform den Validierungscode aus der DNS-Zone der Domain **mydomain.ovh** lesen konnte, können die Adressen **kontakt@mydomain.ovh**, **john.smith@mydomain.ovh** und **mary.johnson@mydomain.ovh** geschult werden.

### Schritt 1 - Die CNAME-Diagnose von OVHcloud verstehen <a name="step1"></a>

Das Diagnose-Kästchen **CNAME** erscheint auf der Registerkarte Assoziierte `Domains`{.action} Ihrer E-Mail-Plattform, nachdem Sie Ihren Domainnamen hinzugefügt haben.

![cname domain e-mail](images/cname_exchange_diagnostic.png){.thumbnail}

Im obigen Beispiel ist das Kästchen rot. Mögliche Ursachen für diese Diagnose sind:

- **Die angegebene Domain wird nicht in demselben OVHcloud Kundenkonto verwaltet wie Ihre E-Mail**-Plattform: Gehen Sie in der Kundencenter-Oberfläche des OVHcloud Accounts, der die DNS-Zone der Domain verwaltet, zu [Schritt 3](#step3) dieser Anleitung.
- **Die angegebene Domain verwendet DNS-Server von außerhalb von OVHcloud** : Die Domain ist bei OVHcloud registriert, Sie verwenden jedoch „personalisierte“ DNS-Server. Um dies zu überprüfen, wählen Sie in der linken Spalte im Bereich `Domainnamen`{.action} die betreffende Domain aus. Überprüfen Sie im Tab `Allgemeine Informationen`{.action} die Angabe „DNS-Server“. Wenn die Option `Benutzerdefiniert`{.action} angezeigt wird, müssen Sie sich auf der Registerkarte DNS-Server bei der Verwaltungsschnittstelle für registrierte `DNS-Server`{.action} anmelden

![E-Mail](images/email-dns-conf-cname02.png){.thumbnail}

- **Die angegebene Domain ist nicht bei OVHcloud registriert und verwendet keine OVHcloud** DNS-Server: Die Domain ist bei einem anderen Registrar registriert. Überprüfen Sie hierzu das Interface Ihrer Domain-Registrierung und die DNS-Server, die Sie für die Konfiguration der DNS-Zone verwenden.

### Schritt 2 - Bestätigungscode abrufen <a name="step2"></a>

Gehen Sie auf den Tab `Assoziierte Domains`{.action} und klicken Sie auf das rote Kästchen `CNAME` in der Spalte „Diagnose“, um die notwendigen Informationen zu erhalten.

Der CNAME-Eintrag wird im angezeigten Dialogfeld beschrieben.

![cname domain e-mail](images/cname_exchange_informations.png){.thumbnail}

Notieren Sie nun den eindeutigen Code in der mittleren Zeile (`a1bcd-check.mydomain.ovh to ovh.com.` im obigen Beispiel).

### Schritt 3 - CNAME-Eintrag erstellen <a name="step3"></a>

Wählen Sie die Registerkarte aus, die Ihrer Situation entspricht:

> [!tabs]
> **Über das OVHcloud Kundencenter**
>> Klicken Sie im Bereich `Web Cloud`{.action} auf `Domainnamen`{.action} und dann auf den betreffenden Domainnamen. Gehen Sie dann in den Tab `DNS Zone`{.action}.<br>
>> Die Konfiguration Ihrer DNS-Zone wird angezeigt. Um einen CNAME-Eintrag hinzuzufügen, klicken Sie rechts auf den Button `Eintrag hinzufügen`{.action}.<br>
>> Im neuen Fenster stehen Ihnen mehrere DNS-Einträge zur Verfügung. Klicken Sie auf `CNAME`{.action} und füllen Sie die Felder mit den Informationen aus [Schritt 2](#step2) dieser Anleitung aus.<br>
>> Wenn der Validierungscode beispielsweise „**a1bcd-check**“ lautet, muss dieser in das Feld „Subdomain“ eingegeben werden. Geben Sie zum Schluss „**ovh.com.**“ im Bereich „Ziel“ ein und vergessen Sie dabei nicht das abschließende „**.**“.
>>
>> ![cname domain e-mail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Wenn Sie die Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Stellen Sie sicher, dass die angezeigten Informationen korrekt sind, und klicken Sie dann auf `Bestätigen`{.action}.<br>
>>
>> > [!warning]
>> >
>> > Die Änderung erfordert eine Propagationszeit, die in der Regel in wenigen Minuten angewendet wird. Es kann jedoch bis zu 24 Stunden dauern.
>>
> **Von einem externen Interface zu OVHcloud**
>>
>> Melden Sie sich bei dem Interface an, das die DNS-Zone der Domain verwaltet, und fügen Sie einen CNAME-Eintrag mit folgenden Einstellungen hinzu:
>>
>> - **Subdomain**: Geben Sie den Wert in der Form „**xxxxx-check**“ ein, indem Sie „**x**“ durch den eindeutigen Code ersetzen, der in Schritt 2 [dieser Anleitung](#step2) aufgeführt wird.
>> - **Ziel**: Geben Sie den Wert „**ovh.com.**“ ein und vergessen Sie dabei nicht das endgültige „**.**“, wenn Ihr Eingabeinterface dies nicht automatisch vornimmt.
>>
>> Bestätigen Sie diese Änderung in Ihrer DNS-Zone.
>>
>> > [!warning]
>> >
>> > Diese Änderung erfordert eine Propagationszeit, die in der Regel innerhalb weniger Minuten angewendet wird. Es kann jedoch bis zu 24 Stunden dauern.
>> >
>>
>> Im Folgenden finden Sie ein Beispiel für eine DNS-Antwort nach dem Hinzufügen eines CNAME-Eintrags zur Validierung:
>>
>> ```bash
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

Um zu überprüfen, dass die Konfiguration des CNAME-Eintrags von Ihrer E-Mail-Plattform gelesen wurde, gehen Sie auf diese Plattform und gehen Sie in den Tab `Assoziierte Domains`{.action}. Wenn das `CNAME`-Kästchen in der Spalte „Diagnose“ nicht mehr angezeigt wird, wird der Domainname korrekt hinzugefügt. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![cname domain e-mail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.