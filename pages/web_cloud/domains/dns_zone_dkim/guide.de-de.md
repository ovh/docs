---
title: E-Mail-Sicherheit durch DKIM-Eintrag verbessern
excerpt: Erfahren Sie hier, wie Sie einen DKIM-Eintrag für Domainnamen und E-Mail-Dienste bei OVHcloud einrichten
updated: 2025-11-28
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Ziel

Der DKIM-Eintrag (**D**omain**K**eys **I**dentified **M**ail) ermöglicht die Signierung von E-Mails, um Identitätsbetrug zu vermeiden. Diese Signatur basiert auf dem Hash-Prinzip in Kombination mit einer asymmetrischen Kryptographie.

**Diese Anleitung erklärt, wie DKIM funktioniert und wie Sie es für Ihren E-Mail-Dienst einrichten.**

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](/links/manager) Zugriff auf die Konfiguration des betreffenden Domainnamens oder entsprechenden Verwaltungszugriff bei Ihrem DNS-Anbieter, wenn der Domainname nicht über OVHcloud registriert ist.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über einen der folgenden E-Mail-Dienste:
    - OVHcloud MX Plan E-Mail, verfügbar mit den Angeboten [Webhosting](/links/web/hosting), [Kostenloses Hosting 100M](/links/web/domains-free-hosting) oder als separater Dienst
    - [Hosted Exchange](/links/web/emails-hosted-exchange) oder [Private Exchange](/links/web/emails-hosted-exchange)
    - [E-Mail Pro](/links/web/email-pro)
    - [Zimbra](/links/web/zimbra)
    - Ein E-Mail-Angebot außerhalb von OVHcloud, das über DKIM verfügt

> [!warning]
>
> Wenn Ihr Domainname keine OVHcloud DNS-Server verwendet, muss die Änderung des DKIM über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihres Domainnamens verwaltet wird.
>
> Wenn Ihr Domainname bei OVHcloud registriert ist, können Sie im [Kundencenter](/links/manager) überprüfen, ob OVHcloud DNS-Server genutzt werden, indem Sie den Domainnamen auswählen und dann den Tab `DNS-Zone`{.action} öffnen.
>

## In der praktischen Anwendung

**Inhaltsübersicht**

- [Wie funktioniert DKIM?](#how-dkim-work)
    - [Hashing](#hash)
    - [Asymmetrische Verschlüsselung](#encrypt)
    - [Wie werden asymmetrische Verschlüsselung und Hashing mit DKIM eingesetzt?](#encrypt-and-hash)
    - [Warum müssen die DNS-Server konfiguriert werden?](#dns-and-dkim)
    - [Beispiel einer unter Verwendung von DKIM gesendeten E-Mail](#example)
    - [Was ist ein DKIM-Selektor?](#selector)
- [DKIM automatisch für ein E-Mail-Angebot von OVHcloud konfigurieren](#auto-dkim)
- [DKIM manuell für OVHcloud Exchange oder E-Mail Pro konfigurieren](#internal-dkim)
    - [API - Vollständige Konfiguration von DKIM](#firststep)
        - [Für MX Plan und Zimbra](#confemail)
        - [Für Exchange](#confex)
        - [Für E-Mail Pro](#confemp)
    - [API - Die verschiedenen DKIM-Zustände](#dkim-status)
    - [API - DKIM-Selektor aktivieren oder ändern](#enable-switch)
    - [API - DKIM deaktivieren und löschen](#disable-switch)
- [DKIM für einen E-Mail-Dienst außerhalb Ihres OVHcloud Kunden-Accounts konfigurieren](#external-dkim)
    - [DKIM-Eintrag](#dkim-record)
    - [TXT-Eintrag](#txt-record)
    - [CNAME-Eintrag](#cname-record)
- [DKIM testen](#test-dkim)
- [Einsatzzwecke](#usecases)
    - [Wie ändere ich mein DKIM-Schlüsselpaar?](#2selectors)
    - [Warum wird das DKIM-Symbol im Kundencenter rot angezeigt?](#reddkim)
    - [Wie kann ich über die OVHcloud API den Zustand eines nicht funktionierenden DKIM verstehen?](#api-error)

### Wie funktioniert DKIM? <a name="how-dkim-work"></a>

Um zu verstehen, wie DKIM Ihre E-Mail-Transaktionen absichern kann, muss erklärt werden, wie DKIM grundsätzlich funktioniert. DKIM verwendet **Hashing** und **Asymmetrische Verschlüsselung**, um eine sichere Signatur zu erstellen. Der **E-Mail-Dienst** und die **DNS-Zone** Ihrer Domain helfen, die DKIM-Informationen an Ihre Empfänger weiterzuleiten.

/// details | Hashing <a name="hash"></a>

Das Prinzip einer **Hash-Funktion** ist, eine **Signatur** (auch *Fingerprint* genannt) aus Eingabedaten zu generieren. Das Ziel ist, eine feste Zeichenfolge als Ausgabe zu erhalten, unabhängig von der Menge der eingegebenen Daten. 

Im folgenden Diagramm können Sie sehen, dass der Output unter Verwendung eines MD5-Hash-Algorithmus (**M**essage **D**igest **5**) immer aus 32 Zeichen besteht, während der Input-Text in seiner Größe variieren kann. Jede Zeichenänderung in den Eingabedaten verändert den Ausgabe-Hash vollständig, wodurch die Ausgabe-Signatur unvorhersehbar und fälschungssicher ist. Im folgenden Beispiel wird der Eingangswert (Input) in den MD5 Hash-Algorithmus übertragen und die Ausgabe (Output) ist der Hash-Wert.

![hash](/pages/assets/schemas/emails/dns-dkim-hash01.png){.thumbnail .w-400 .h-600}

Die Hash-Funktion ist nützlich zum Überprüfen der Integrität einer Nachricht. Unterschiede in Eingabedaten, die oberflächlich nicht auffallen, produzieren einen völlig unterschiedlichen Hashwert mit gleicher Zeichenlänge in der Ausgabe, unabhängig von der Eingabegröße.

///

/// details |Asymmetrische Verschlüsselung <a name="encrypt"></a>

**Verschlüsselung** sorgt für die Chiffrierung der Eingabedaten. Sie ist **asymmetrisch**, da zum Ver- und Entschlüsseln der Nachricht nicht derselbe Schlüssel verwendet wird, im Gegensatz zu einer symmetrischen Verschlüsselung mit identischem Schlüssel.

Bei der asymmetrischen Verschlüsselung werden ein **öffentlicher Schlüssel** und ein **privater Schlüssel** eingesetzt. Der öffentliche Schlüssel ist für jeden sicht- und nutzbar. Der private Schlüssel wird nur von dessen Eigentümer verwendet und ist nicht öffentlich sichtbar.

Es gibt zwei Verwendungszwecke für asymmetrische Verschlüsselung:

- **Die Eingabedaten werden mit dem öffentlichen Schlüssel verschlüsselt und von demjenigen entschlüsselt, der den privaten Schlüssel besitzt.** Sie möchten zum Beispiel anderen eine sichere Datenübermittlung zu Ihnen ermöglichen. Sie stellen Ihren öffentlichen Schlüssel bereit und erlauben so jedermann, Daten damit zu verschlüsseln. Die so verschlüsselten Daten können nur vom Inhaber des privaten Schlüssels gelesen werden.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto01.png){.thumbnail .w-400 .h-600}

- **Die Eingabedaten werden vom Inhaber des privaten Schlüssels verschlüsselt und vom öffentlichen Schlüssel entschlüsselt.** Diese Verwendung gilt für die Authentifizierung eines Datenaustauschs. Ihre Empfänger möchten zum Beispiel verifizieren, dass Sie der Autor einer Nachricht sind. In diesem Fall verschlüsseln Sie Ihre Nachricht mit Ihrem privaten Schlüssel. Diese Nachricht kann nur mit dem zugehörigen öffentlichen Schlüssel entschlüsselt werden, den Sie bereitstellen, was die Authentizität der Nachricht garantiert. Eine vom öffentlichen Schlüssel dechiffrierte Nachricht kann nur vom Inhaber des privaten Schlüssels kommen.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto02.png){.thumbnail .w-400 .h-600}

///

/// details | Wie werden asymmetrisches Hashing und Verschlüsselung für DKIM verwendet? <a name="encrypt-and-hash"></a>

Für E-Mail-Dienste nutzt DKIM das Hashing-Verfahren, um eine Signatur aus einigen Elementen des [E-Mail-Headers](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) sowie des Inhalts der E-Mail (*Body*) zu erstellen.

Die Signatur wird dann mit dem privaten Schlüssel asymmetrisch verschlüsselt.

///

/// details | Warum müssen die DNS Server konfiguriert werden? <a name="dns-and-dkim"></a>

Damit der Empfänger die DKIM-Signatur des Absenders überprüfen kann, benötigt er die DKIM-Parameter, insbesondere den öffentlichen Schlüssel, um die Signatur zu entschlüsseln. Die [DNS-Zone](/pages/web_cloud/domains/dns_zone_general_information) eines Domainnamens ist öffentlich verfügbar, deshalb wird, um den öffentlichen Schlüssel und die DKIM-Parameter an den Empfänger weiterzuleiten, ein DNS-Eintrag verwendet.

///

/// details | Was ist ein DKIM-Selektor? <a name="selector"></a>

Wenn Sie DKIM aktivieren, funktioniert es mit einem Schlüsselpaar. Es ist möglich, Ihrem Domainnamen mehrere Schlüsselpaare zuzuweisen, zum Beispiel mittels einer Rotation. Wenn Sie das Schlüsselpaar wechseln, muss das alte Paar so lange aktiv bleiben, bis alle mit dem alten Schlüssel versendete E-Mails den DKIM-Check beim Empfangsserver nicht mehr bestehen.

Damit dieses Prinzip der Rotation funktioniert, werden **DKIM-Selektoren** eingesetzt. Ein DKIM-Selektor beinhaltet ein *private key*/*public key* Paar. Es ist als Zeichenkette in der DKIM-Signatur einer E-Mail sichtbar, nach dem Argument `s=`. Diese Signatur kann im [Header der E-Mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) ausgelesen werden.

**Beispiel einer DKIM-Signatur**

<pre class="bgwhite"><code>DKIM-Signature: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

Der Wert des Selektors ist hier `s=ovhex123456-selector`.

///

/// details | Beispiel einer gesendeten E-Mail mit DKIM <a name="example"></a>

Wenn Sie eine E-Mail über **contact@mydomain.ovh** versenden, wird dem Header der E-Mail eine mit privatem Schlüsssel verschlüsselte Signatur hinzugefügt.

![E-Mail](/pages/assets/schemas/emails/dns-dkim-send.gif){.thumbnail .w-400 .h-600}

Der Empfänger **recipient@otherdomain.ovh** kann diese Signatur mit dem in der DNS-Zone von **mydomain.ovh** verfügbaren öffentlichen Schlüssel entschlüsseln. Die Signatur wird anhand des Inhalts der E-Mail erstellt. Wird die E-Mail während der Übermittlung manipuliert, entspricht die Signatur nicht mehr dem Inhalt und die DKIM-Überprüfung des Zielservers scheitert.

![E-Mail](/pages/assets/schemas/emails/dns-dkim-receive.gif){.thumbnail .w-400 .h-600}

///

### DKIM automatisch für ein E-Mail-Angebot von OVHcloud konfigurieren <a name="auto-dkim"></a>

Die automatische DKIM-Konfiguration ist für alle unsere E-Mail-Angebote verfügbar:

- MX Plan enthalten in einem [Webhosting](/links/web/hosting), [Kostenloses Hosting 100M](/links/web/domains-free-hosting) oder separat bestellt
- [Exchange](/links/web/emails)
- [E-mail Pro](/links/web/email-pro)
- [Zimbra](/links/web/zimbra)

Wenn Sie Ihren Domainnamen auf einer E-Mail-Lösung von OVHcloud konfigurieren, wird die automatische DKIM-Konfiguration standardmäßig angeboten und durchgeführt, sofern Sie sie nicht deaktivieren.

Wenn DKIM nicht aktiviert wurde, als Sie einen Domainnamen zu Ihrer E-Mail-Plattform hinzugefügt haben, müssen Sie den automatischen Konfigurationsprozess über das Kundencenter starten.

Klicken Sie auf das unten stehende Registerblatt, das zu Ihrem Angebot passt.

> [!tabs]
> **E-Mails (MX Plan)**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `MX Plan`{.action}.
>> 1. Wählen Sie die betreffende Domain aus.
>> 1. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}.
>>
>> Im Bereich **Allgemeine Informationen** können Sie sehen, dass die Schaltfläche `DKIM` unter **Diagnose** rot ist.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/dkim-auto01.png){.thumbnail .w-400 .h-600}
>>
>> Um DKIM zu aktivieren, klicken Sie einfach auf die rote Schaltfläche `DKIM` und dann auf `Bestätigen`{.action} im Aktivierungsdialog, der angezeigt wird.
>> 
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto02.png){.thumbnail .w-400 .h-600}
>>
>> Falls Ihr Domainname nicht im gleichen OVHcloud Kundencenter wie Ihre E-Mail-Plattform verwaltet wird oder außerhalb von OVHcloud registriert ist, erhalten Sie das folgende Fenster:
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/dkim-auto02.png){.thumbnail .w-400 .h-600}
>>
>> Dieses Fenster fordert Sie dazu auf, zwei CNAME-Werte in der DNS-Zone des Domainnamens einzugeben, wodurch dieser Domainname mit den DKIM-Selektoren Ihres E-Mail-Dienstes verknüpft wird. Sie müssen diese Werte eingeben und sicherstellen, dass sie verbreitet wurden, bevor Sie auf `Aktivieren`{.action} klicken.
>>
> **Exchange**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Rechts neben dem betreffenden Domainnamen können Sie sehen, dass die Schaltfläche `DKIM` unter **Diagnose** rot ist.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail .w-400 .h-600}
>>
>> Um DKIM zu aktivieren, klicken Sie einfach auf die rote Schaltfläche `DKIM` und dann auf `Bestätigen`{.action} im Aktivierungsdialog, der angezeigt wird.
>> 
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto02.png){.thumbnail .w-400 .h-600}
>>
> **E-Mail Pro**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `E-Mail Pro`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Rechts neben dem betreffenden Domainnamen können Sie beobachten, dass die Schaltfläche `DKIM` rot ist.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail .w-400 .h-600}
>>
>> Um DKIM zu aktivieren, klicken Sie einfach auf die rote Schaltfläche `DKIM` und dann auf `Bestätigen`{.action} im Aktivierungsdialog, der angezeigt wird.
>> 
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto02.png){.thumbnail .w-400 .h-600}
>>
> **Zimbra**
>>
>> 1. Melden Sie sich bei Ihrem [OVHcloud Kundencenter](/links/manager) an.
>> 1. Gehen Sie in den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `Zimbra Mail`{.action}.
>> 1. Gehen Sie schließlich zum Tab `Domain`{.action}.
>> 1. Klicken Sie rechts neben der betreffenden Domain auf `⁝`{.action}, und dann auf `Diagnose`{.action}.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/zimbra/domain/diagnostics/access.png){.thumbnail .w-400 .h-600}
>>
>> Rechts neben der Bezeichnung `DKIM` auf dem entsprechenden Tab sollten Sie eine Warnung sehen, die anzeigt, dass DKIM fehlschlägt. Klicken Sie auf das Tab `DKIM`{.action}, um den Status der DKIM-Konfiguration anzuzeigen. Um den Fehler zu beheben, müssen Sie zwei DNS-Einträge vom Typ CNAME in der DNS-Zone des zugeordneten Domainnamens hinzufügen oder ändern, basierend auf den Informationen, die in diesem Tab sichtbar sind.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/zimbra/domain/diagnostics/dkim-cname-conf.png){.thumbnail .w-400 .h-600}
>>
>> > [!primary]
>> > **Tipp zur Erstellung eines CNAME-Eintrags**
>> >
>> > Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an, in dem der Domainname Ihres E-Mail-Dienstes gehostet wird. Gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Domainnamen`{.action} in der linken Spalte und wählen Sie den betreffenden Domainnamen aus.<br>
>> > Wählen Sie das Registerblatt `DNS-Zone`{.action} und klicken Sie auf `Eintrag hinzufügen`{.action} im angezeigten Fenster. Wählen Sie `CNAME` und füllen Sie die Werte entsprechend den von Ihnen notierten Werten aus.

Die automatische DKIM-Aktivierung dauert zwischen 30 Minuten und 24 Stunden. Um zu prüfen, ob Ihr DKIM funktioniert, kehren Sie einfach in den Bereich zur Domainverwaltung zurück, der in den oben genannten Tabs erwähnt wird, und stellen Sie sicher, dass die Schaltfläche `DKIM` grün ist oder für Zimbra, dass `DKIM` keine Warnung mehr anzeigt.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto03.png){.thumbnail .w-400 .h-600}

Falls nach 24 Stunden die Schaltfläche `DKIM` immer noch rot ist, konsultieren Sie den Abschnitt [„Warum ist DKIM nicht funktional und erscheint rot im Kundencenter?“](#reddkim) in dieser Anleitung.

### DKIM per API für eine E-Mail von OVHcloud konfigurieren <a name="internal-dkim"></a>

Um Ihr DKIM zu konfigurieren müssen Sie zuerst die Dienst-Referenz (Dienstname) Ihres E-Mail-Dienstes abrufen.

Klicken Sie auf den Tab für Ihren Dienst:

> [!tabs]
> **Exchange**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Der Dienstname ist identisch mit der Referenz oder wird unter dem individuellen Namen angezeigt, den Sie diesem Dienst gegeben haben (siehe Abbildung).
>>
>> ![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/dns-dkim-platform-exchange.png){.thumbnail .w-400 .h-600}
>>
> **E-Mail Pro**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `E-Mail Pro`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Der Dienstname ist identisch mit der Referenz oder wird unter dem individuellen Namen angezeigt, den Sie diesem Dienst gegeben haben (siehe Abbildung).
>>
>> ![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/email-pro/general-information/dns-dkim-platform-emailpro.png){.thumbnail .w-400 .h-600}

Vergewissern Sie sich, dass der Domainname, den Sie für Ihre E-Mails verwenden möchten, im Bereich `Assoziierte Domains`{.action} aktiv ist.

![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dns-dkim-domain.png){.thumbnail .w-400 .h-600}

#### API - Vollständige Konfiguration von DKIM <a name="firststep"></a>

Um DKIM zu konfigurieren, besuchen Sie die [OVHcloud API-Seite](/links/console) und melden Sie sich an:

1. Klicken Sie auf `Authentication`{.action} oben links.
1. Klicken Sie anschließend auf `Login with OVHcloud SSO`{.action}.
1. Geben Sie Ihre OVHcloud Anmeldeinformationen ein.
1. Klicken Sie auf den Button `Authorize`{.action}, um die API-Aufrufe von dieser Website zu autorisieren.

> [!primary]
>
> Nutzen Sie unsere Anleitung „[Erste Schritte mit der OVHcloud API](/pages/manage_and_operate/api/first-steps)“, falls Sie die API noch nie verwendet haben.

Gehen Sie im API-Interface zum Bereich `/email/domain/` (Angebote MX Plan und Zimbra), `/email/exchange` (Angebot Exchange) oder `/email/pro` (Angebot E-mail Pro) und geben Sie „dkim“ in das Feld `Filter` ein, um nur die API-Funktionen anzuzeigen, die sich auf DKIM beziehen.

Klicken Sie auf den Tab für Ihren Dienst:

> [!tabs]
> **MX Plan und Zimbra**
>>
>> ![email](/pages/assets/screens/api/get-email-domain-domain-dkim.png){.thumbnail .w-400 .h-600}
>>
> **Exchange**
>>
>> ![email](/pages/assets/screens/api/get-email-exchange-organizationname-service-exchangeservice-domain-domainname-dkim.png){.thumbnail .w-400 .h-600}
>>
> **E-Mail Pro**
>>
>> ![email](/pages/assets/screens/api/get-email-pro-service-domain-domainname-dkim.png){.thumbnail .w-400 .h-600}
>>

##### **Für MX Plan und Zimbra** <a name="confemail"></a>

Folgen Sie den **5 Schritten**, indem Sie nacheinander auf die Tabs klicken:

> [!tabs]
> **1. DKIM für Ihre Domain aktivieren**
>> Aktivieren Sie DKIM für Ihre Domain über folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verbunden ist, für den Sie DKIM aktivieren möchten.
>>
>> Klicken Sie auf `EXECUTE`{.action}, um die Aktivierung zu starten.<br>
>>
>> *Beispielausgabe:*
>>
>> ```console
>> {
>>  "domain": "mydomain.ovh",
>>  "id": 123455789,
>>  "function": "domain/enableDKIM",
>>  "status": "todo"
>> }
>> ```
>>
>> Sie sollten das gleiche Ergebnis wie im oben stehenden Beispiel erhalten, mit `"status": "todo"`, der angibt, dass DKIM konfiguriert wird.
>>
> **2. Status des DKIM-Vorgangs überprüfen**
>> Verfolgen Sie nach dem Start des DKIM-Aktivierungsprozesses den Installationsstatus, um sicherzustellen, dass die Installation abgeschlossen ist, oder um die DNS-Einträge abzurufen, wenn Ihre DNS-Zone außerhalb Ihres OVHcloud Kundencenters verwaltet wird.<br>
>>.
>> <br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain`: Geben Sie den mit Ihrem E-Mail-Dienst verbundenen Domainnamen ein.<br>
>> <br>
>> Klicken Sie auf `EXECUTE`{.action}, um das Ergebnis anzuzeigen.<br>
>>
>> *Beispielausgabe:*
>>
>> ```console
>> {
>>  "activeSelector": null,
>>  "autoconfig": true,
>>  "selectors": [
>>    {
>>      "selectorName": "ovhmo3456789-selector2",
>>      "status": "set",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net."
>>    },
>>    {
>>      "selectorName": "ovhmo3456789-selector1",
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.",
>>      "status": "set"
>>    }
>>  ],
>>  "status": "modifying"
>> }
>> ```
>> <br>
>> Im obigen Beispiel bedeutet die letzte Statuszeile `"status": "modifying"`, dass die Konfiguration ausgeführt wird. Warten Sie ca. **10 Minuten**, und führen Sie den API-Aufruf erneut aus.
>>
>> - Wenn der Wert `"status": "enabled"` lautet, ist die Konfiguration abgeschlossen und funktionsfähig.
>> - Wenn der Wert `"status": "disabled"` lautet, muss die Konfiguration manuell ausgefüllt werden. Fahren Sie mit dem nächsten Schritt fort.
>>
> **3. DNS-Eintrag abrufen**
>> In den folgenden Fällen müssen Sie die DNS-Zone Ihrer Domain manuell konfigurieren**:
>>
>> - Ihr E-Mail-Dienst ist mit einem Domainnamen verbunden, von einem anderen OVHcloud Kunden-Account verwaltet wird.
>> - Ihr E-Mail-Dienst ist mit einem Domainnamen verbunden, der von einem anderen Registrar verwaltet wird.
>>
>> Um Ihre DNS-Zone zu konfigurieren, müssen Sie die Werte aus dem DNS-Eintrag **beider Selektoren** abrufen. Verwenden Sie hierzu das Ergebnis des API-Aufrufs aus dem vorherigen Schritt:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verbunden ist.
>>
>> Klicken Sie auf `EXECUTE`{.action}, um das Ergebnis anzuzeigen.
>>
>> *Beispielausgabe:*
>>
>> ```console
>> {
>>  "activeSelector": null,
>>  "status": "disabled",
>>  "autoconfig": false,
>>  "selectors": [
>>    {
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net."
>>      "status": "toSet",
>>      "selectorName": "ovhmo4287928-selector1"
>>    },
>>    {
>>      "selectorName": "ovhmo4287928-selector2",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net.",
>>      "status": "toSet"
>>    }
>>  ]
>> }
>> ```
>>
>> Die Werte `"status": "toSet"` und `"status": "disabled"` bedeuten, dass CNAME-Einträge konfiguriert werden müssen. Kopieren Sie die Werte von `cname` in eine Textdatei und fahren Sie mit dem nächsten Schritt fort.
>>
> **4. DNS-Eintrag konfigurieren**
>> Im [OVHcloud Kundencenter](/links/manager), in dem die Domain Ihres E-Mail-Dienstes verwaltet wird ist, klicken Sie im Tab `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann im angezeigten Fenster auf `Eintrag hinzufügen`{.action}. Wählen Sie `CNAME` aus und geben Sie dann die von Ihnen ermittelten Werte ein.
>>
>> Für die Werte im Beispiel in Schritt "**3. DNS-Eintrag abrufen**":
>>
>> - `ovhmo3456789-selector1._domainkey.mydomain.ovh` entspricht der Subdomain des CNAME Eintrags. Wir behalten nur `ovhmo3456789-selector1._domainkey`, da `.mydomain.ovh` bereits vorhanden ist. <br>
>> - `ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.` entspricht dem Ziel des Eintrags. Der Punkt am Ende muss beibehalten werden.<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api022.png){.thumbnail .w-400 .h-600}
>>
>> Nachdem Sie die Werte eingegeben haben, klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.
>>
>> > [!primary]
>> >
>> > **Wiederholen Sie diesen Vorgang für den zweiten Selektor.**
>>
>> Wenn Sie Ihre DNS-Zone in einem Interface eines Drittanbieters außerhalb von OVHcloud konfigurieren, muss Ihr CNAME-Eintrag folgendes Format haben:
>>
>> ```console
>> ovhmo3456789-selector1._domainkey IN CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Denken Sie daran, dass eine Änderung in einer DNS-Zone eine Propagationsverzögerung hat. Sie ist normalerweise kurz, kann aber bis zu 24 Stunden dauern.
>>
> **5. Aktivierung des DKIM**
>>
>> Aktivieren Sie den DKIM nach der Propagierung Ihrer DNS-Konfiguration erneut über folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verbunden ist, für den Sie DKIM aktivieren möchten.
>>
>> Klicken Sie auf `EXECUTE`{.action}, um die Aktivierung zu starten.<br>
>>
>> *Beispielausgabe:*
>>
>> {
>>  "selectors": [
>>    {
>>      "selectorName": "ovhmo3465680-selector2",
>>      "cname": "ovhmo3456789-selector2._domainkey.mydomain.ovh CNAME ovhmo3456789-selector2._domainkey.123402.aj.dkim.mail.ovh.net.",
>>      "status": "set"
>>    },
>>    {
>>      "status": "set",
>>      "cname": "ovhmo3456789-selector1._domainkey.mydomain.ovh CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net."
>>      "selectorName": "ovhmo3465680-selector1"
>>    }
>>  ],
>>  "activeSelector": "ovhmo3465680-selector1",
>>  "autoconfig": true,
>>  "status": "enabled"
>> }
>>
>> - Die Werte `"status": "set"` für die beiden Selektoren bedeuten, dass sie korrekt konfiguriert sind.
>> - Wenn Sie `"status": "toSet"` für die beiden Selektoren sehen, sind Ihre DNS-Änderungen nicht sichtbar. Gehen Sie zu **Tab 4. "DNS-Eintrag konfigurieren"**.
>> - Wenn Sie `"status": "toFix"` für die beiden Selektoren sehen, bedeutet dies, dass die CNAME-Einträge in der DNS-Zone Ihrer Domain gefunden wurden, die Werte jedoch falsch sind. Gehen Sie zu **Tab 4. "DNS-Eintrag konfigurieren"**.
>>
>> > [!success]
>> >
>> > Sie haben nun alle notwendigen Schritte durchgeführt, um DKIM zu aktivieren. Überprüfen Sie den Status mithilfe von **Tab 2. "Status des DKIM-Vorgangs überprüfen"**, um sicherzustellen, dass der Wert `status:` auf `enabled` gesetzt ist. In diesem Fall ist Ihr DKIM jetzt aktiv.
>>

##### **Exchange** <a name="confex"></a>

Folgen Sie den **5 Schritten**, indem Sie auf jeden Tab klicken.

> [!tabs]
> **1. Liste der Selektoren**
>> Bevor Sie einen Selektor für Ihren Domainnamen erstellen, benötigen Sie dessen von der Exchange Plattform automatisch zugewiesenen Namen.<br>
>> <br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>>
>> *Beispielausgabe:*
>>
>> ```console
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2. Selektor erstellen**
>> In diesem Schritt wird ein Selektor erstellt, ein Schlüsselpaar generiert und der DNS-Eintrag für den Domainnamen hinzugefügt.<br>
>> <br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `"selectorName"`: Geben Sie auf der Registerkarte **EXAMPLE** des Abschnitts **REQUEST BODY** den Namen eines Selektors ein, den Sie im vorherigen Schritt notiert haben (Beispiel: "ovhex123456-selector1").
>>
>> *Beispiel für den Eintrag:*
>>
>> ```console
>> {
>>    "autoEnableDKIM": false,
>>    "configureDkim": false,
>>    "selectorName": "ovhex123456-selector1"
>> }
>> ```
>>
>> Klicken Sie auf `EXECUTE`{.action}, um mit der Erstellung des Selektors zu beginnen.<br>
>>
>> > [!primary]
>> >
>> > Es wird empfohlen, diesen Vorgang für jeden der zuvor aufgeführten Selektoren zweimal auszuführen. Mit dem zweiten Selektor können Sie bei Bedarf ein anderes Schlüsselpaar auswählen. Lesen Sie unter den Use Cases den Abschnitt [Wie ändere ich mein DKIM-Schlüsselpaar?](#2selectors), wenn Sie auf den zweiten Selektor umschalten möchten.
>> <br>
>>
>> *Beispielausgabe:*
>> ```console
>> status: "todo",
>> function: "addExchangeDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. DNS-Eintrag abrufen**
>> Konfigurieren Sie die DNS-Zone Ihres Domainnamens manuell **in folgenden Fällen**:
>>
>> - Ihr Exchange nutzt einen Domainnamen, der in einem anderen OVHcloud Kunden-Account verwaltet wird.<br>
>> - Ihr Exchange nutzt einen Domainnamen, der von einem anderen Registrar verwaltet wird.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags **für jeden Selektor, wenn Sie zwei erstellt haben**, abrufen. Verwenden Sie hierzu folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein.
>>
>> *Beispielausgabe:*
>>
>> ```console
>> targetRecord: "ovhex123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhex1234565-selector1"
>> ```
>>
>> Speichern Sie die Werte für `customerRecord` und `targetRecord in einer Textdatei. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Es ist möglich, dass `status:` den Wert `todo` hat. Das keine Auswirkungen auf die Konfiguration Ihrer DNS-Zone.
>>
> **4. DNS-Eintrag konfigurieren**
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action} rechts. Wählen Sie `CNAME` aus und geben Sie Ihre zuvor ermittelten Werte ein.<br>
>>
>> Beispielwerte anhand Schritt **3. DNS-Eintrag abrufen**:
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME-Eintrags, wobei der Teil `.mydomain.ovh` bereits vorausgefüllt ist. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel des Eintrags. Am Ende muss immer ein `.` hinzugefügt werden: `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail .w-400 .h-600} <br>
>> 
>> Nachdem Sie die Werte eingegeben haben, klicken Sie auf `Weiter`{.action} und dann `Bestätigen`{.action}.
>>
>> **Wiederholen Sie diesen Vorgang für den zweiten Selektor, falls Sie einen erstellt haben.**<br>
>>
>> Wenn Sie Ihre DNS-Zone in einem externen Interface außerhalb von OVHcloud konfigurieren, muss der CNAME-Eintrag folgende Form haben:
>>
>> ```console
>> ovhex123456-selector1._domainkey IN CNAME ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Denken Sie daran, dass eine Änderung in der DNS-Zone mit einer Propagationszeit verbunden ist. Sie ist normalerweise kurz, kann aber bis zu 24 Stunden betragen.
>>
> **5. DKIM aktivieren**
>> > [!warning]
>> >
>> > Überprüfen Sie mithilfe des Abschnitts [API - Die verschiedenen Zustände von DKIM](#dkim-status) in dieser Anleitung, dass `status:` den Wert `ready` hat, bevor Sie DKIM aktivieren.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.
>>
>> *Beispielausgabe:*
>>
>> ```console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Sie haben damit alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass DKIM aktiviert ist, püfen Sie mithilfe des Abschnitts [API - Die verschiedenen Zustände von DKIM](#dkim-status) dieser Anleitung, ob `status:` den Wert `inProduction` hat. Ist das der Fall, ist Ihr DKIM aktiv.<br><br> **Wenn Sie zwei Selektoren erstellt haben**, sollte der zweite Selektor `status:` den Wert `ready` haben.
>>

##### **Für E-Mail Pro** <a name="confemp"></a>

Folgen Sie den **5 Schritten**, indem Sie auf jeden Tab klicken.

> [!tabs]
> **1. Liste der Selektoren**
>> Bevor Sie einen Selektor für Ihren Domainnamen erstellen, benötigen Sie dessen von der E-Mail Pro Plattform automatisch zugewiesenen Namen.<br>
>> <br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim

>> <br>
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
>> *Beispielausgabe:*
>>
>> ```console
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2. Selektor erstellen**
>> In diesem Schritt wird ein Selektor erstellt, ein Schlüsselpaar generiert und der DNS-Eintrag für den Domainnamen hinzugefügt.<br>
>>
>> > [!primary]
>> >
>> > Es wird empfohlen, diesen Vorgang für jeden der Selektoren zweimal auszuführen. Mit der zweiten Auswahl können Sie bei Bedarf ein anderes Schlüsselpaar auswählen. Lesen Sie unter den Use Cases den Abschnitt [Wie ändere ich mein DKIM-Schlüsselpaar?](#2selectors).
>> <br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein.
>> - `"selectorName"`: Geben Sie im Tab **EXAMPLE** des Abschnitts **REQUEST BODY** den Namen eines Selektors ein, den Sie im vorherigen Schritt notiert haben (Beispiel: "ovhemp123456-selector1").
>>
>> *Beispiel für einen Eintrag:*
>>
>> ```console
>> {
>>    "autoEnableDKIM": false,
>>    "configureDkim": false,
>>    "selectorName": "ovhemp123456-selector1"
>> }
>> ```
>>
>> Click `EXECUTE`{.action} to start creating the selector.<br>
>>
>> > [!primary]
>> >
>> > Es wird empfohlen, diesen Vorgang für jeden der zuvor aufgeführten Selektoren zweimal auszuführen. Mit dem zweiten Selektor können Sie bei Bedarf ein anderes Schlüsselpaar auswählen. Lesen Sie unter den Use Cases den Abschnitt [Wie ändere ich mein DKIM-Schlüsselpaar?](#2selectors), wenn Sie auf den zweiten Selektor umschalten möchten.
>>
>> *Beispielausgabe:*
>>
>> ```console
>> status: "todo",
>> function: "addDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. DNS-Eintrag abrufen**
>> Konfigurieren Sie die DNS-Zone Ihres Domainnamens manuell **in folgenden Fällen**:
>>
>> - Ihr E-Mail Pro nutzt einen Domainnamen, der in einem anderen OVHcloud Kunden-Account verwaltet wird.<br>
>> - Ihr E-Mail Pro nutzt einen Domainnamen, der von einem anderen Registrar verwaltet wird.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags **für jeden Selektor, wenn Sie zwei erstellt haben**, abrufen. Verwenden Sie hierzu folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein.
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein (Beispiel: "ovhex123456-selector1").
>>
>> *Beispielausgabe:*
>>
>> ```console
>> targetRecord: "ovhemp123456-selector1._domainkey.1675.ac.dkim.mail.ovh.net"
>> recordType: "CNAME"
>> header: "from;to;subject;date"
>> taskPendingId: 108712689
>> status: "waitingRecord"
>> cnameIsValid: false
>> lastUpdate: "1970-01-01T00:00:00+01:00"
>> customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"
>> selectorName: "ovhemp1234565-selector1"
>> ```
>>
>> Speichern Sie die Werte für `customerRecord` und `targetRecord in einer Textdatei. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Es ist möglich, dass `status:` den Wert `todo` hat. Das keine Auswirkungen auf die Konfiguration Ihrer DNS-Zone.
>>
> **4. DNS-Eintrag konfigurieren**
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action} rechts. Wählen Sie `CNAME` aus und geben Sie Ihre zuvor ermittelten Werte ein.<br>
>>
>> Beispielwerte anhand Schritt **3. DNS-Eintrag abrufen**:
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME-Eintrags, wobei der Teil `.mydomain.ovh` bereits vorausgefüllt ist. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel des Eintrags. Am Ende muss immer ein `.` hinzugefügt werden: `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail .w-400 .h-600} <br>
>> 
>> Nachdem Sie die Werte eingegeben haben, klicken Sie auf `Weiter`{.action} und dann `Bestätigen`{.action}.<br>
>>
>> **Wiederholen Sie diesen Vorgang für den zweiten Selektor, falls Sie einen erstellt haben.**<br>
>>
>> Wenn Sie Ihre DNS-Zone in einem externen Interface außerhalb von OVHcloud konfigurieren, muss der CNAME-Eintrag folgende Form haben:
>>
>> ```console
>> ovhemp123456-selector1._domainkey IN CNAME ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net
>> ```
>>
>> > [!warning]
>> >
>> > Denken Sie daran, dass eine Änderung in der DNS-Zone mit einer Propagationszeit verbunden ist. Sie ist normalerweise kurz, kann aber bis zu 24 Stunden betragen.
>>
> **5. DKIM aktivieren**
>> > [!warning]
>> >
>> > Überprüfen Sie mithilfe des Abschnitts [API - Die verschiedenen Zustände von DKIM](#dkim-status) in dieser Anleitung, dass `status:` den Wert `ready` hat, bevor Sie DKIM aktivieren.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>>
>> *Beispielausgabe:*
>>
>> ```console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Sie haben damit alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass DKIM aktiviert ist, prüfen Sie mithilfe des Abschnitts [API - Die verschiedenen Zustände von DKIM](#dkim-status) dieser Anleitung, ob `status:` den Wert `inProduction` hat. Ist das der Fall, ist Ihr DKIM aktiv.
>>

#### API - Die verschiedenen Zustände des DKIM <a name="dkim-status"></a>

Klicken Sie auf den Tab für Ihren Dienst:

> [!tabs]
> **MX Plan und Zimbra**
>> Überprüfen Sie bei DKIM-Operationen den aktuellen DKIM-Status mithilfe des folgenden API-Aufrufs.
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verbunden ist, auf dem der DKIM vorhanden sein muss.
>>
>> Sehen Sie sich dann den Wert `status:` im Ergebnis an:
>>
>> - `disabled`: DKIM ist deaktiviert, wurde noch nicht konfiguriert oder wurde über API deaktiviert. <br>
>> - `modifying`: Die DKIM-Konfiguration wird ausgeführt. Es muss gewartet werden, bis der Vorgang abgeschlossen ist.<br>
>> - `toConfigure`: Die DKIM-Konfiguration wartet auf die DNS-Einstellungen der Domain. Die DNS-Einträge müssen manuell in der DNS-Zone eingegeben werden. Gehen Sie zu [Schritt 4. "Vollständige Konfiguration von DKIM" für MX Plan und Zimbra](#confemail).<br>
>> - `enabled`: DKIM ist konfiguriert und funktionsfähig.<br>
>> - `error`: Fehler beim Installationsvorgang. Erstellen Sie ein [Ticket für den Support](https://help.ovhcloud.com/csm?id=csm_get_help) und geben Sie die betreffende Domain an.<br>
>>
>> Auf der Ebene der Selektoren haben Sie auch drei mögliche Zustände:
>>
>> - `set`: Der Selektor ist korrekt konfiguriert und aktiv.
>> - `toSet`: Der Selektor ist nicht in der DNS-Zone der Domain konfiguriert. Gehen Sie zu [Schritt 4. "Vollständige Konfiguration von DKIM" für MX Plan und Zimbra](#confemail).
>> - `toFix`: Der Selektor wurde erfolgreich in der DNS-Zone der Domain konfiguriert, aber die Werte sind falsch. Gehen Sie zu [Schritt 4. "Vollständige Konfiguration von DKIM" für MX Plan und Zimbra](#confemail).
>>
> **Exchange**
>> Wenn Sie DKIM mit Exchange verwenden, nutzen Sie den folgenden API-Aufruf, um den aktuellen Status von DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an. <br>
>>
>> Prüfen Sie den Wert von `status:` im Ergebnis:
>>
>> - `todo`: Der Task ist initiiert und wird starten. <br>
>> - `WaitingRecord`: Die DNS-Einträge müssen noch in der DNS-Zone des Domainnamens konfiguriert werden oder sie werden gerade validiert. Eine automatische Überprüfung wird regelmäßig durchgeführt, um festzustellen, ob der DNS-Eintrag vorhanden und korrekt ist.<br>
>> - `ready`: Die DNS-Einträge sind in der Zone vorhanden. DKIM kann jetzt aktiviert werden. <br>
>> - `inProduction`: DKIM ist konfiguriert und aktiviert und somit voll funktionsfähig. <br>
>> - `disabling`: DKIM wird deaktiviert. <br>
>> - `deleting`: DKIM wird gelöscht. <br>
>>
>> Wenn beim Starten des API-Aufrufs folgender Fehler auftritt, bedeutet dies, dass der Selektor nicht existiert oder gelöscht wurde. Er muss noch erstellt werden.
>>
>> ```console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
>>
> **E-Mail Pro**
>> Wenn Sie DKIM mit E-Mail Pro verwenden, nutzen Sie den folgenden API-Aufruf, um den aktuellen Status von DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an. <br>
>>
>> Prüfen Sie den Wert von `status:` im Ergebnis:
>>
>> - `todo`: Der Task ist initiiert und wird starten. <br>
>> - `WaitingRecord`: Die DNS-Einträge müssen noch in der DNS-Zone des Domainnamens konfiguriert werden oder sie werden gerade validiert. Eine automatische Überprüfung wird regelmäßig durchgeführt, um festzustellen, ob der DNS-Eintrag vorhanden und korrekt ist. <br>
>> - `ready`: Die DNS-Einträge sind in der Zone vorhanden. DKIM kann jetzt aktiviert werden. <br>
>> - `inProduction`: DKIM ist konfiguriert und aktiviert und somit voll funktionsfähig. <br>
>> - `disabling`: DKIM wird deaktiviert. <br>
>> - `deleting`: DKIM wird gelöscht. <br>
>>
>> Wenn beim Starten des API-Aufrufs folgender Fehler auftritt, bedeutet dies, dass der Selektor nicht existiert oder gelöscht wurde. Er muss noch erstellt werden.
>>
>> ```console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```

#### API - DKIM deaktivieren und löschen <a name="enable-switch"></a>

> [!warning]
>
> **Für die Angebote Exchange und E-Mail Pro** <br>
>
> Der DKIM-Selektor muss den Status `inProduction` oder `ready` haben, bevor er deaktiviert werden kann.

Wählen Sie das relevante E-Mail-Angebot aus:

> [!tabs]
> **MX Plan und Zimbra**
>> Um DKIM zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>> <br>
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verknüpft ist, auf dem DKIM aktiviert sein soll. <br>
>>
>> *Beispiel für das Ergebnis:*
>>
>> ```console
>> {
>>  "domain": "guidesteam.ovh",
>>  "id": 123456789,
>>  "function": "domain/enableDKIM",
>>  "status": "todo"
>> }
>> ```
>>
> **Exchange**
>> Um DKIM auf einem Selektor zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.<br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.<br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.<br>
>> - `selectorName`: Geben Sie den Namen eines existierenden Selektors an.<br>
>>
> **E-Mail Pro**
>> Um DKIM auf einem Selektor zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.<br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.<br>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>>

> [!primary]
>
> Während der Rotation des DKIM-Selektors können Sie den zweiten Selektor, den Sie erstellt haben, aktivieren und dazu wechseln. Dabei bleibt der erste Selektor aktiv, bis alle mit ihm gesendeten E-Mails vom Empfänger geprüft wurden.

#### DKIM deaktivieren und löschen <a name="disable-switch"></a>

> [!warning]
>
> **Für Exchange- und E-Mail Pro-Lösungen** <br>
>
> Der DKIM-Selektor muss den Status `inProduction` haben, bevor er deaktiviert werden kann.

Klicken Sie auf den Tab für Ihren Dienst:

> [!tabs]
> **MX Plan und Zimbra**
>> Wenn Sie DKIM deaktivieren möchten, ohne die Selektoren und deren Schlüsselpaare zu löschen, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/disable
>> <br>
>>
>> - `domain`: Geben Sie den Domainnamen ein, der mit Ihrem E-Mail-Dienst verbunden ist, auf dem der DKIM vorhanden sein muss. <br>
>>
>> *Beispielausgabe:*
>>
>> ```console
>> {
>>  "domain": "guidesteam.ovh",
>>  "id": 174219594,
>>  "function": "domain/disableDKIM",
>>  "status": "todo"
>> }
>> ```
>>
> **Exchange**
>> Wenn Sie DKIM deaktivieren möchten, ohne den Selektor und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie deaktivieren möchten. <br>
>>
>> Wenn Sie den DKIM-Selektor und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie löschen möchten. <br>
>>
> **E-Mail Pro**
>> Wenn Sie die DKIM deaktivieren möchten, ohne den Selektor und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API-Aufruf:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie deaktivieren möchten. <br>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>>
>> Wenn Sie den DKIM-Selektor und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro DELETE /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie löschen möchten. <br>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>>

### DKIM für einen E-Mail-Dienst außerhalb Ihres OVHcloud Kunden-Accounts konfigurieren <a name="external-dkim"></a>

Wenn Sie Ihre DNS-Zone konfigurieren möchten, um einen DKIM-Eintrag für Ihren Dienst hinzuzufügen, folgen Sie den nachstehenden Anweisungen.

Klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.

Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie rechts auf `Eintrag hinzufügen`{.action}. Es gibt 3 Möglichkeiten, einen Eintrag hinzuzufügen, um die DKIM-Konfiguration in Ihrer DNS-Zone durchzuführen:

- [DKIM-Eintrag](#dkim-record): Konfiguration mit Bearbeitung aller Einstellungen eines DKIM-Eintrags.
- [TXT-Eintrag](#txt-record): Zu verwenden, wenn Ihnen DKIM-Einstellungen vollständig vorgegeben wurden.
- [CNAME-Eintrag](#cname-record): Für ein OVHcloud E-Mail-Angebot oder einen Microsoft E-Mail-Server zu verwenden.

#### DKIM-Eintrag <a name="dkim-record"></a>

Dieser Eintrag wird im Interface als DKIM bezeichnet, aber es handelt sich in der Zone um einen TXT-Eintrag. Der DKIM-Eintrag soll die Konfiguration der verschiedenen Einstellungen erleichtern, indem sie in einzelnen Feldern dargestellt werden.

![E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-add.png){.thumbnail .w-400 .h-600}

- **Subdomain**: Geben Sie den Namen des DKIM-Selektors ein und fügen Sie `._domainkey` als Suffix hinzu. Der Domainname wird automatisch hinzugefügt.

*Beispiel:*

```console
  selector-name._domainkey.mydomain.ovh.
```

- **Version (v=)**: Zur Angabe der DKIM-Version Die Verwendung wird empfohlen und der Standardwert ist `DKIM1`.<br>
Wenn genutzt, muss dieser Tag am Anfang stehen und muss "DKIM1" sein. Einträge, die einen "v=" Tag mit einem anderen Wert beginnen, werden ignoriert.

- **Granularität (g=)**: Erlaubt die Angabe des "lokalen" Teils einer E-Mail-Adresse, also vor dem `@`.<br>
Damit können eine oder mehrere E-Mail-Adressen angegeben werden, die zur Signatur einer E-Mail mit dem DKIM-Schlüssel des Selektors autorisiert sind.<br>
Der Standardwert von "g=" ist "\*", was bedeutet, dass alle E-Mail-Adressen den DKIM-Signaturschlüssel verwenden dürfen.<br>
Durch die Angabe eines spezifischen Wertes für "g=" kann die Verwendung des Schlüssels auf einen bestimmten lokalen Teil der E-Mail-Adresse oder auf einen bestimmten Bereich von E-Mail-Adressen unter Verwendung von Wildcards beschränkt werden (Beispiel: "\*-group").

- **Algorithmus (Hash) (h=)**: Erlaubt die Angabe der Hash-Algorithmen, die zur Signatur der E-Mail-Header verwendet werden. Erstellen Sie hiermit eine Liste von Hash-Algorithmen, die für die DKIM-Signatur einer Nachricht verwendet werden.

- **Key-Typ (k=)**: Bestimmt den Signaturalgorithmus, der zur Signatur ausgehender E-Mails verwendet wird. Er teilt Empfängern mit, wie die Nachricht signiert wurde und welche Methode zur Echtheitsüberprüfung eingesetzt wird.<br>
Die möglichen Werte für "k=" beinhalten "rsa" für den Signaturalgorithmus RSA und "ed25519" für den Signaturalgorithmus Ed25519. Die Wahl des Algorithmus hängt von den Sicherheitsrichtlinien des Absenders und der Unterstützung beim Empfänger ab.

- **Anmerkungen (n=)**: Zur Beifügung von Zusatzinformationen für Administratoren, die das DKIM-Schlüsselsystem verwalten.<br>
Diese Anmerkungen können der Dokumentation dienen oder zur Verständlichkeit der DKIM-Funktion beitragen, etwa um Administratoren bei der Verwaltung zu helfen. In "n=" enthaltene Informationen werden softwareseitig nicht interpretiert und beeinträchtigen nicht die Funktionsweise von DKIM.

- **Public Key (base64) (p=)**: Enthält den Public Key für DKIM, in Base64 kodiert.<br>
Dieser Tag ist in der DKIM-Signatur zwingend erforderlich und erlaubt es den Empfängern der Signatur, den öffentlichen Schlüssel zu generieren, um damit die Authentizität der signierten Nachricht zu überprüfen.

- **Den Public Key widerrufen**: Wenn ein öffentlicher DKIM-Schlüssel zurückgezogen wurde (z.B. wenn der private Schlüssel kompromittiert ist), muss für "p=" ein leerer Wert verwendet werden, um anzugeben, dass dieser öffentliche Schlüssel nicht mehr gültig ist. Beim Empfänger wird dann ein Fehler bei jeder DKIM-Signatur produziert, die sich auf einen zurückgezogenen Schlüssel stützt.

- **Dienstleistungstypen (s=)**: Der Tag "s=" ist optional und standardmäßig leer. Er erlaubt es, die Art(en) der Dienste anzugeben, für die der DKIM-Eintrag gilt.<br>
Die Diensttypen werden anhand einer Liste von Schlüsselwörtern definiert, je mit einem ":" getrennt.<br>
Der Empfänger soll diese Liste ignorieren, wenn der entsprechende Diensttyp nicht aufgeführt ist.<br>
Mit "s=" kann die Verwendung von Schlüsseln für andere Zwecke eingeschränkt werden, wenn die Verwendung von DKIM in Zukunft für andere Dienste definiert wird.<br>
Die derzeit definierten Diensttypen sind "\*" (alle Arten von Diensten) und "email" (E-Mail).

- **Testmodus (t=y)**: Erlaubt es Domain-Inhabern, die Konfiguration von DKIM zu testen, ohne zu riskieren, dass Nachrichten zurückgewiesen oder als SPAM gekennzeichnet werden, wenn die Überprüfung der DKIM-Signatur fehlschlägt.<br>
Wenn "t=y" aktiv ist, soll der Empfänger Nachrichten, die zum Test signiert wurden, nicht anders behandeln als nicht signierte. Der Empfänger kann jedoch das Ergebnis des Tests nachverfolgen, um den Signatoren zu helfen.

- **Subdomains (t=s)**: Erlaubt es, die Verwendung der DKIM-Signatur auf den Domainnamen zu beschränken (Beispiel: @mydomain.ovh) oder zusätzlich den Versand über Subdomains zu erlauben (Beispiel: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh, etc.)

#### TXT-Eintrag <a name="txt-record"></a>

Mit diesem Eintragstyp wird DKIM in der DNS-Zone Ihres Domainnamens konfiguriert. Ein gutes Verständnis der Syntax ist notwendig, um diesen Eintrag direkt zu bearbeiten.

Das Hinzufügen eines TXT-Eintrags bietet sich an, wenn Sie die entsprechenden Informationen vom Anbieter des E-Mail-Dienstes erhalten haben.

Die Zusammensetzung des DKIM-Eintrags wird im vorherigen Teil der Anleitung unter "[DKIM-Eintrag](#dkim-record)" beschrieben.

**Beispiel eines DKIM-Eintrags**

- Subdomain:

```console
selector-name._domainkey.mydomain.ovh.
```

- Ziel:

```console
v=DKIM1;t=s;p= MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA77VDAIfyhjtoF0DIE5V7 rev1EKk4L0nxdBpD5O/jPrM4KP0kukeuB6IMpVplkkq52MSDeRcjoO50h0DmwZOr RUkyGjQwOnAh0VhY3fqkuwBYftEX7vWo8C2E1ylzimABkwPpSL62jZ1DheoXcil9 1M35wWBKtlYdXVedKjCQKOEnwTo+0hdNe38rU9NMgq6nbTIMjDntvxoVI+yF3kcx q/VpAY8BIYbcAXkVFvUyfUBABnnKpf0SfblsfcLW0Koy/FRxPDFOvnjNxXeOxMFR UI6K6PaW2WvtbJG2v+gHLY5M4tB0+/FNJU9emZfkPOk3DmRhZ8ENi7+oZa2ivUDj OQIDAQAB
```

#### CNAME-Eintrag <a name="cname-record"></a>

Der CNAME-Eintrag ist ein Alias. Dies bedeutet, dass der Zielwert auf eine URL verweist, die dann den DKIM-Eintrag an den Server liefert, der den CNAME-Eintrag abfragt. Dieser Typ von CNAME-Eintrag zur Konfiguration von DKIM ist üblich bei der Verwendung eines Microsoft E-Mail-Servers.

Dieser Eintragstyp wird zur Aktivierung von DKIM für Domainnamen verwendet, die für OVHcloud Exchange deklariert wurden. Auf diese Weise kann Ihr E-Mail-Anbieter die Sicherheit und Updates von DKIM für Sie verwalten.

### DKIM testen <a name="test-dkim"></a>

Wir empfehlen, eine E-Mail von einem Exchange-Account aus an eine E-Mail-Adresse zu senden, die beim Empfang die DKIM-Signatur überprüft.

Im Header der empfangenen E-Mail finden Sie folgendes:

<pre class="bgwhite"><code>ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: &lt;test-dkim@mydomain.ovh&gt;
</code></pre>

Um den Header einer E-Mail einzusehen, lesen Sie unsere Anleitung "[E-Mail-Header extrahieren](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers)".

### Einsatzzwecke <a name="usecases"></a>

#### Wie und warum sollte ich mein DKIM-Schlüsselpaar ändern? <a name="2selectors"></a>

> [!warning]
>
> Diese Frage bezieht sich nur auf die Angebote Exchange und E-Mail Pro.

Wenn Sie DKIM zum ersten Mal für Ihren E-Mail-Dienst aktivieren, können Sie zwei Selektoren erstellen, die jeweils ein Schlüsselpaar enthalten. Die zweite Auswahl dient als Nachfolger der aktuellen Auswahl.

Um Versuchen entgegenzuwirken, die DKIM-Verschlüsselung zu entschlüsseln, sollten Sie das Schlüsselpaar regelmäßig wechseln. Vergewissern Sie sich, dass Sie Ihre beiden Selektoren korrekt konfiguriert haben, indem Sie sicherstellen, dass der erste den Status `inProduction` und der zweite den Status `ready` hat. Sie können diesen Status mit ["API - Die verschiedenen Zustände des DKIM"](#dkim-status) überprüfen.

Klicken Sie auf den Tab für Ihren Dienst:

> [!tabs]
> **Exchange**
>> Verwenden Sie den folgenden API-Aufruf, um zum zweiten Selektor zu wechseln:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `domainName`: Geben Sie den Domainnamen ein, der mit Ihrem Exchange verbunden ist. <br>
>> - `selectorName` Geben Sie den Namen des Selektors ein, zu dem Sie wechseln möchten. <br>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>>
> **E-Mail Pro**
>> Verwenden Sie den folgenden API-Aufruf, um zum zweiten Selektor zu wechseln:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `domainName`: Geben Sie den Domainnamen für Exchange ein, auf dem der DKIM vorhanden sein muss.<br>
>> - `selectorName` Geben Sie den Namen des Selektors ein, zu dem Sie wechseln möchten. <br>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>>

Nach dem Wechseln des Selektors können Sie den alten Selektor sieben Tage lang beibehalten, bevor er gelöscht und ersetzt wird.

#### Warum funktioniert der DKIM nicht und wird im Kundencenter rot angezeigt? <a name="reddkim"></a>

> [!warning]
>
> Diese Frage bezieht sich nur auf die Angebote Exchange und E-Mail Pro.

Bei einem nicht funktionalen DKIM werden Ihre E-Mails nicht mit DKIM signiert, obwohl dieser aktiviert oder eingerichtet ist. Loggen Sie sich zunächst in Ihrem Kundencenter ein, um den DKIM-Status zu überprüfen.

Klicken Sie auf den Tab für Ihren Dienst, um den Status von DKIM zu überprüfen:

> [!tabs]
> **Exchange**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Überprüfen Sie im Bereich `Assoziierte Domains`{.action} die Farbe des Eintrags `DKIM` rechts neben dem betreffenden Domainnamen (siehe Abbildung unten).
>>
>>![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail .w-400 .h-600}
>>
> **E-Mail Pro**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `E-Mail Pro`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>> 1. Gehen Sie dann auf den Tab `Assoziierte Domains`{.action}.
>>
>> Überprüfen Sie im Bereich `Assoziierte Domains`{.action} die Farbe des Eintrags `DKIM` rechts neben dem betreffenden Domainnamen (siehe Abbildung unten).
>>
>>![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail .w-400 .h-600}

Hier sind die 4 Zustände, die zu dem roten DKIM-Symbol in Ihrem Kundencenter führen. Klicken Sie auf den Tab für Ihren Fehlercode:

> [!tabs]
> **501**
>>
>> "**Only one DKIM selector has been initialized**"<br><br> 
>> In der Konfiguration ist nur ein DKIM-Selektor vorhanden. Damit wir bei Bedarf zu einem neuen Schlüssel wechseln können, müssen wir die 2 vom Dienst bereitgestellten Selektoren konfigurieren.<br><br>
>> So beheben Sie diesen Fehler:
>> - Überprüfen Sie den Status der DKIM-Selektoren, um festzustellen, welcher Selektor konfiguriert werden muss. Lesen Sie hierzu den Abschnitt "[Die verschiedenen DKIM-Zustände](#dkim-status)" in dieser Anleitung.
>> - Nachdem Sie die zu konfigurierende Auswahl identifiziert haben, folgen Sie den Schritten im Abschnitt "[Vollständige DKIM-Konfiguration](#firststep)" dieser Anleitung, je nach Ihrem Angebot (Exchange oder E-Mail Pro), und wenden Sie diese nur auf die betreffende Auswahl an.
>> Warten Sie bis zu 24 Stunden, nachdem der Selektor eingerichtet wurde.
>>
> **502**
>>
>> "**One DKIM configuration task is in error**"<br><br> 
>> Bei der Konfiguration des DKIM ist ein Fehler aufgetreten. Wenn sich Ihre Konfiguration nach 24 Stunden noch in diesem Status befindet, können Sie ein [Support-Ticket eröffnen](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
> **503**
>>
>> "**CNAME record is wrong**"<br><br>
>> Der für die DKIM-Konfiguration erforderliche Wert für den CNAME-Eintrag wurde nicht korrekt eingegeben. Sie müssen die DNS-Zone der verbundenen Domain korrekt konfigurieren.
>> Rufen Sie zum Konfigurieren der DNS-Zone die Werte des angezeigten CNAME-Eintrags ab:
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail .w-400 .h-600}
>>
>> Im obigen Beispiel lautet der Domainname "**mydomain.ovh**", und Sie werden aufgefordert, den Selektor "**2**" zu konfigurieren. Fügen Sie hier einen CNAME-Eintrag mit der Subdomain `ovhex1234567-selector2.domainkey.mydomain.ovh` und als Ziel `ovhex1234567-selector2.domainkey.7890.dkim.mail.ovh.net`.<br><br> hinzu.
>> Warten Sie nach der Konfiguration Ihrer DNS-Zone ab, bis die DNS-Propagation abgeschlossen ist (maximal 24 Stunden).
>>
> **504**
>>
>> "**One CNAME record is missing**"<br><br> 
>> Der für die DKIM-Konfiguration erforderliche Wert für den CNAME-Eintrag fehlt. Sie müssen die DNS-Zone der verbundenen Domain konfigurieren.
>> Rufen Sie zum Konfigurieren der DNS-Zone die Werte des angezeigten CNAME-Eintrags ab:
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail .w-400 .h-600}
>>
>> Im obigen Beispiel lautet der Domainname "**mydomain.ovh**", und Sie werden aufgefordert, den Selektor "**2**" zu konfigurieren. Fügen Sie hier einen CNAME-Eintrag mit der Subdomain `ovhex1234567-selector2.domainkey.mydomain.ovh` und als Ziel `ovhex1234567-selector2.domainkey.890123.dkim.mail.ovh.net`.<br><br> hinzu.
>> Warten Sie nach der Konfiguration Ihrer DNS-Zone ab, bis die DNS-Propagation abgeschlossen ist (maximal 24 Stunden).
>>

#### Wie kann ich über die OVHcloud API den Zustand eines nicht funktionierenden DKIM verstehen? <a name="api-error"></a>

Wenn Sie DKIM mithilfe der OVHcloud API konfigurieren und es nicht funktioniert, finden Sie im Abschnitt "[API - Die verschiedenen Zustände des DKIM](#dkim-status)" dieser Anleitung Informationen zum Status Ihrer Selektoren.

Im Folgenden finden Sie die Zustände, die den Betrieb Ihres DKIM blockieren können, und die passende Lösung für jede Situation.

> [!tabs]
> **Exchange und E-Mail Pro**
>> - `WaitingRecord`: DNS-Einträge in der DNS-Zone warten auf Konfiguration oder werden überprüft. Es wird automatisch und regelmäßig überprüft, ob der DNS-Eintrag vorhanden und korrekt ausgefüllt ist. Folgen Sie **Schritt 5** im Bereich "[API - Vollständige DKIM-Konfiguration](#firststep)", um die DNS-Zone korrekt zu konfigurieren.
>> - `ready`: DNS-Einträge sind in der Zone vorhanden. DKIM kann jetzt aktiviert werden, indem Sie dem Abschnitt "[API - DKIM aktivieren oder ändern](#enable-switch)" folgen.
>> - `deleting`: DKIM wird gelöscht. Nach dem Löschen folgen Sie dem Abschnitt "[API - ollständige DKIM-Konfiguration](#firststep)".
>> - `disabling`: DKIM wird deaktiviert. Danach können Sie ihn reaktivieren, indem Sie den Abschnitt "[API - DKIM aktivieren oder ändern](#enable-switch)" verwenden.
>> - `todo`: Der Task wurde initialisiert und muss gestartet werden. Wenn er sich nach 24 Stunden noch in diesem Status befindet, können Sie ein [Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help) unter Angabe der Selektor-ID erstellen.
> **E-Mails und Zimbra**
>> - `disabled`: DKIM ist deaktiviert, wurde noch nicht konfiguriert oder wurde über API deaktiviert. <br>
>> - `modifying`: Die DKIM-Konfiguration wird ausgeführt. Es muss gewartet werden, bis der Vorgang abgeschlossen ist.<br>
>> - `toConfigure`: Die DKIM-Konfiguration wartet auf die DNS-Einstellungen der Domain. Die DNS-Einträge müssen manuell in der Zone eingegeben werden. Verwenden Sie hierzu den Abschnitt "[Vollständige DKIM-Konfiguration](#confemail)" in dieser Anleitung. <br>
>> - `error`: Fehler beim Installationsvorgang. Erstellen Sie ein [Ticket für den Support](https://help.ovhcloud.com/csm?id=csm_get_help) unter Angabe der betreffenden Domain.
>>
>> Auf der Ebene der Selektoren haben Sie auch 2 Fehlerstatus:
>>
>> - `toSet`: Der Selektor ist nicht in der DNS-Zone der Domain konfiguriert. TGehen Sie zu [Schritt 4. "Vollständige Konfiguration von DKIM" für MX Plan und Zimbra](#confemail).
>> - `toFix`: Der Selektor wurde erfolgreich in der DNS-Zone der Domain konfiguriert, aber die Werte sind falsch. Gehen Sie zu [Schritt 4. "Vollständige Konfiguration von DKIM" für MX Plan und Zimbra](#confemail).

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
