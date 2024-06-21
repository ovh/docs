---
title: CNAME-Eintrag erstellen, um Domainnamen für Ihren E-Mail-Dienst zu validieren
excerpt: Erfahren Sie hier, wie Sie Domainnamen für Ihren E-Mail-Dienst zu validieren, indem Sie einen CNAME-Eintrag anlegen
updated: 2023-08-29
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie einen Domainnamen zu Ihrem E-Mail-Dienst hinzufügen, werden Sie möglicherweise aufgefordert, einen CNAME-Eintrag in der DNS-Zone zu konfigurieren. Dies ist notwendig, um nur berechtigten Personen die Verknüpfung eines Domainnamens mit einem E-Mail-Dienst zu erlauben.

> [!primary]
>
> Wenn der hinzugefügte Domainname (bzw. dessen DNS-Zone) in demselben Kunden-Account wie der E-Mail-Dienst verwaltet wird, ist kein CNAME-Eintrag zu konfigurieren.

**Diese Anleitung erklärt, wie Sie Domainnamen für Ihren E-Mail-Dienst validieren, indem Sie einen CNAME-Eintrag erstellen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr Webhosting über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine der E-Mail-Lösungen [Exchange](https://www.ovhcloud.com/de/emails/) oder [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/).
- Sie haben einen Domainnamen zu Ihrem Dienst hinzugefügt, wie in [unserer Anleitung](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) beschrieben.
- Sie sind berechtigt die zugehörige [DNS-Zone zu konfigurieren](/pages/web_cloud/domains/dns_zone_edit) (im OVHcloud Kundencenter oder einem externen Verwaltungsinterface).

## In der praktischen Anwendung

### Warum muss ein CNAME-Eintrag erstellt werden?

Der CNAME-Eintrag wird hier als Alias verwendet. Er verweist auf ein Ziel, das wiederum auf eine IP-Adresse verweist. Dieser Eintrag ist also nicht direkt mit einem E-Mail-Dienst verbunden.

Der CNAME-Eintrag dient als Validierungscode (Token) für unsere Lösungen [**Hosted Exchange**](https://www.ovhcloud.com/de-emails/hosted-exchange/) und [**Email Pro**](https://www.ovhcloud.com/de-gb/emails/email-pro/). Er wird zur DNS-Zone des Domainnamens hinzugefügt, die Sie für die Verwendung mit Ihren E-Mails nutzen möchten. Damit soll überprüft werden, ob der Benutzer des E-Mail-Dienstes berechtigt ist, den hinzuzufügenden Domainnamen zu verwenden.

In der folgenden Abbildung wird Ihr E-Mail-Dienst ([Exchange](https://www.ovhcloud.com/de/emails/) oder [Email Pro](https://www.ovhcloud.com/de/emails/email-pro/)) als 
grün umrahmtes Feld dargestellt.<br>
Sie haben Accounts hinzugefügt (**contact**, **john.smith**, **mary.johnson** in diesem Beispiel), für die E-Mail-Adressen erstellt werden sollen.<br>
Der Domainname **mydomain.ovh** wurde zum E-Mail-Dienst hinzugefügt (siehe Anleitung „[Domainnamen zu Ihrem Exchange Dienst hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)“).<br>
E-Mail-Dienst generiert einen Validierungscode (**abcd1-check** in diesem Beispiel).<br>
Wenn die DNS-Zone des Domainnamens **mydomain.ovh** nicht im selben OVHcloud Kunden-Account oder über ein externes Interface verwaltet wird, muss dieser Code als CNAME-Eintrag hinzugefügt werden. Dieser Eintrag ist in der Abbildung im blauen Rahmen zu sehen.<br>
Der E-Mail-Dienst prüft automatisch die DNS-Einträge des Domainnamens **mydomain.ovh** auf den Validierungscode.

![E-Mail](images/email-dns-conf-cname01.png){.thumbnail}

Sobald der E-Mail-Dienst den Validierungscode in der DNS-Zone des Domainnamens **mydomain.ovh** bestätigen kann, können die Adressen **kontakt@mydomain.ovh**, **john.smith@mydomain.ovh** und **mary.johnson@mydomain.ovh** angelegt werden.

### Schritt 1: Die CNAME-Diagnose bei OVHcloud verstehen <a name="step1"></a>

Der Diagnose-Hinweis **CNAME** erscheint nachdem Sie Ihren Domainnamen zu E-Mail-Dienst hinzugefügt haben im Tab `Assoziierte Domains`{.action}.

![cnamee-mail](images/cname_exchange_diagnostic.png){.thumbnail}

Im obigen Beispiel ist dieses Feld rot. Folgende Ursachen kommen dafür in Frage:

- **Der hinzugefügte Domainname wird nicht in demselben OVHcloud Kunden-Account verwaltet wie Ihr E-Mail-Dienst**. Gehen Sie im Kundencenter des OVHcloud Accounts, der die DNS-Zone des Domainnamens verwaltet und führen Sie [Schritt 3](#step3) dieser Anleitung aus.
- **Der hinzugefügte Domainname verwendet keine DNS-Server von OVHcloud**. Der Domainname ist bei OVHcloud registriert, verwendet jedoch externe DNS-Server. Um dies zu überprüfen, wählen Sie in der linken Spalte im Bereich `Domainnamen`{.action} den Domainnamen aus. Prüfen Sie im Tab `Allgemeine Informationen`{.action} den Status unter **DNS-Server**. Wenn dort `Custom`{.action} steht, haben Sie im Tab `DNS-Server`{.action} externe Server angegeben. Verwenden Sie die Verwaltungsoberfläche Ihres DNS-Anbieters, um den CNAME-Eintrag zu bearbeiten.

![E-Mail](images/email-dns-conf-cname02.png){.thumbnail}

- **Der hinzugefügte Domainname ist nicht bei OVHcloud registriert und verwendet keine OVHcloud DNS-Server**. Der Domainname ist bei einem anderen Registrar registriert. Wenden Sie sich an Ihren Domainnamen-Anbieter, um zu erfahren, wie Sie auf die Konfiguration der DNS-Zone zugreifen können.

### Schritt 2: Bestätigungscode abrufen <a name="step2"></a>

Gehen Sie zum Tab `Assoziierte Domains`{.action} und klicken Sie auf das rote Feld `CNAME` in der Spalte „Diagnose“, um die notwendigen Informationen zu erhalten.

Im Dialogfenster finden Sie eine Beschreibung des CNAME-Eintrags.

![cnamee-mail](images/cname_exchange_informations.png){.thumbnail}

Die mittlere Zeile besteht aus dem Verifizierungscode und dem Ziel (`a1bcd-check.mydomain.ovh zu ovh.com.` im obigen Beispiel) für den CNAME-Eintrag.

### Schritt 3: CNAME-Eintrag erstellen <a name="step3"></a>

Wählen Sie den Tab für Ihr verwendetes Interface aus:

> [!tabs]
> **OVHcloud Kundencenter**
>> Klicken Sie im Bereich `Web Cloud`{.action} auf `Domainnamen`{.action} und dann auf den betreffenden Domainnamen. Gehen Sie dann in den Tab `DNS Zone`{.action}.<br>
>> Die Konfiguration Ihrer DNS-Zone wird angezeigt. Um einen CNAME-Eintrag zu erstellen, klicken Sie rechts auf den Button `Eintrag hinzufügen`{.action}.<br>
>> Im neuen Fenster stehen Ihnen mehrere DNS-Eintragstypen zur Verfügung. Klicken Sie auf `CNAME`{.action} und füllen Sie die Felder entsprechend der Werte aus [Schritt 2](#step2) dieser Anleitung aus.<br>
>> Wenn der Validierungscode beispielsweise „**a1bcd-check**“ lautet, ist dieser in das Feld „Subdomain“ einzugeben. Geben Sie „**ovh.com.**“ als das „Ziel“ ein und vergessen Sie dabei nicht den abschließenden „**.**“.
>>
>> ![cnamee-mail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Wenn Sie alle Daten eingegeben haben, klicken Sie auf `Weiter`{.action}. Stellen Sie sicher, dass alles korrekt ist und klicken Sie auf `Bestätigen`{.action}.<br>
>>
>> > [!warning]
>> >
>> > Die Änderung wird in der Regel innerhalb weniger Minuten angewendet, kann aber eine Propagationszeit von bis zu 24 Stunden erfordern.
>>
> **Externes Interface***
>>
>> Loggen Sie sich in der Verwaltungsoberfläche für Ihre DNS-Zone ein und fügen Sie einen CNAME-Eintrag mit folgenden Einstellungen hinzu:
>>
>> - **Subdomain**: Geben Sie den Wert in der Form „**xxxxx-check**“ ein. Ersetzen Sie „**xxxxx**“ mit dem eindeutigen Code aus [Schritt 2](#step2) dieser Anleitung.
>> - **Ziel**: Geben Sie den Wert „**ovh.com.**“ ein und achten Sie auf den abschließenden „**.**“, wenn Ihr Eingabeinterface dies nicht automatisch vornimmt.
>>
>> Bestätigen Sie diese Änderung Ihrer DNS-Zone.
>>
>> > [!warning]
>> >
>> > Die Änderung wird in der Regel innerhalb weniger Minuten angewendet, kann aber eine Propagationszeit von bis zu 24 Stunden erfordern.
>> >
>>
>> Im Folgenden finden Sie ein Beispiel für eine DNS-Antwort nach dem ein CNAME-Eintrag zur Validierung hinzugefügt wurde:
>>
>> ```text
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

Um zu überprüfen, dass die Konfiguration des CNAME-Eintrags von Ihrem E-Mail-Dienst gelesen wurde, öffnen Sie im Kundencenter den Tab `Assoziierte Domains`{.action}. Wenn das Feld `CNAME` in der Spalte „Diagnose“ nicht mehr angezeigt wird, wurde der Domainname mit dem Dienst assoziiert. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![cnamee-mail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
