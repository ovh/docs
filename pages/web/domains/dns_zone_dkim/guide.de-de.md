---
title: DKIM-Eintrag konfigurieren
excerpt: Erfahren Sie hier, wie Sie einen DKIM-Eintrag für Domainnamen und OVHcloud E-Mail-Dienste einrichten
updated: 2023-05-17
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der DKIM-Eintrag (**D**omain**K**eys **I**dentified **M**ail) ermöglicht die Signierung von E-Mails, um Identitätsbetrug zu vermeiden. Diese Signatur basiert auf dem Hash-Prinzip in Kombination mit einer asymmetrischen Kryptographie.

**Diese Anleitung erklärt, wie DKIM funktioniert und wie Sie es für Ihren E-Mail-Dienst einrichten.**

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Zugriff auf die Konfiguration des betreffenden Domainnamens oder entsprechenden Verwaltungszugriff bei Ihrem DNS-Anbieter, wenn der Domainname nicht über OVHcloud registriert ist.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie nutzen OVHcloud [Exchange](https://www.ovhcloud.com/de/emails/), OVHcloud [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/) oder ein externes E-Mail-Angebot mit DKIM.

> [!warning]
>
> Wenn Ihr Domainname keine OVHcloud DNS-Server verwendet, muss die Änderung des DKIM über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihres Domainnamens verwaltet wird.
>
> Wenn Ihr Domainname bei OVHcloud registriert ist, können Sie im [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) überprüfen, ob OVHcloud DNS-Server genutzt werden, indem Sie den Domainnamen auswählen und dann den Tab `DNS-Server`{.action} öffnen.
>

## In der praktischen Anwendung

**Übersicht**

- [Wie funktioniert DKIM?](#how-dkim-work)
    - [Hashing](#hash)
    - [Asymmetrische Verschlüsselung](#encrypt)
    - [Wie werden asymmetrische Verschlüsselung und Hashing mit DKIM eingesetzt?](#encrypt-and-hash)
    - [Warum müssen die DNS-Server konfiguriert werden?](#dns-and-dkim)
    - [Beispiel einer unter Verwendung von DKIM gesendeten E-Mail](#example)
    - [Was ist ein DKIM-Selektor?](#selector)
- [DKIM für OVHcloud Exchange oder E-Mail Pro konfigurieren](#internal-dkim)
    - [Vollständige Konfiguration von DKIM](#firststep)
        - [Für Exchange](#confex)
        - [Für E-Mail Pro](#confemp)
    - [Die verschiedenen DKIM-Zustände](#status)
    - [DKIM-Selektor aktivieren oder ändern](#enable-switch)
    - [DKIM deaktivieren und löschen](#disable-delete)
- [DKIM für einen E-Mail-Dienst außerhalb Ihres OVHcloud Kunden-Accounts konfigurieren](#external-dkim)
    - [DKIM-Eintrag](#dkim-record)
    - [TXT-Eintrag](#txt-record)
    - [CNAME-Eintrag](#cname-record)
- [DKIM testen](#test-dkim)

### Wie funktioniert DKIM? <a name="how-dkim-work"></a>

Um zu verstehen, wie DKIM Ihre E-Mail-Transaktionen absichern kann, muss erklärt werden, wie DKIM grundsätzlich funktioniert. DKIM verwendet **Hashing** und **Asymmetrische Verschlüsselung**, um eine sichere Signatur zu erstellen. Der **E-Mail-Dienst** und die **DNS-Zone** Ihrer Domain helfen, die DKIM-Informationen an Ihre Empfänger weiterzuleiten.

#### Hashing <a name="hash"></a>

Das Prinzip einer **Hash-Funktion** ist, eine **Signatur** (auch *Fingerprint* genannt) aus Eingabedaten zu generieren. Das Ziel ist, eine feste Zeichenfolge als Ausgabe zu erhalten, unabhängig von der Menge der eingegebenen Daten. 

Im folgenden Diagramm können Sie sehen, dass der Output unter Verwendung eines MD5-Hash-Algorithmus (**M**essage **D**igest **5**) immer aus 32 Zeichen besteht, während der Input-Text in seiner Größe variieren kann. Jede Zeichenänderung in den Eingabedaten verändert den Ausgabe-Hash vollständig, wodurch die Ausgabe-Signatur unvorhersehbar und fälschungssicher ist. Im folgenden Beispiel wird der Eingangswert (Input) in den MD5 Hash-Algorithmus übertragen und die Ausgabe (Output) ist der Hash-Wert.

![hash](images/dns-dkim-hash01.png){.thumbnail}

Die Hash-Funktion ist nützlich zum Überprüfen der Integrität einer Nachricht. Unterschiede in Eingabedaten, die oberflächlich nicht auffallen, produzieren einen völlig unterschiedlichen Hashwert mit gleicher Zeichenlänge in der Ausgabe, unabhängig von der Eingabegröße.

#### Asymmetrische Verschlüsselung <a name="encrypt"></a>

**Verschlüsselung** sorgt für die Chiffrierung der Eingabedaten. Sie ist **asymmetrisch**, da zum Ver- und Entschlüsseln der Nachricht nicht derselbe Schlüssel verwendet wird, im Gegensatz zu einer symmetrischen Verschlüsselung mit identischem Schlüssel.

Bei der asymmetrischen Verschlüsselung werden ein **öffentlicher Schlüssel** und ein **privater Schlüssel** eingesetzt. Der öffentliche Schlüssel ist für jeden sicht- und nutzbar. Der private Schlüssel wird nur von dessen Eigentümer verwendet und ist nicht öffentlich sichtbar.

Es gibt zwei Verwendungszwecke für asymmetrische Verschlüsselung:

- **Die Eingabedaten werden mit dem öffentlichen Schlüssel verschlüsselt und von demjenigen entschlüsselt, der den privaten Schlüssel besitzt.** Sie möchten zum Beispiel anderen eine sichere Datenübermittlung zu Ihnen ermöglichen. Sie stellen Ihren öffentlichen Schlüssel bereit und erlauben so jedermann, Daten damit zu verschlüsseln. Die so verschlüsselten Daten können nur vom Inhaber des privaten Schlüssels gelesen werden.

![hash](images/dns-dkim-crypto01.png){.thumbnail}

- **Die Eingabedaten werden vom Inhaber des privaten Schlüssels verschlüsselt und vom öffentlichen Schlüssel entschlüsselt.** Diese Verwendung gilt für die Authentifizierung eines Datenaustauschs. Ihre Empfänger möchten zum Beispiel verifizieren, dass Sie der Autor einer Nachricht sind. In diesem Fall verschlüsseln Sie Ihre Nachricht mit Ihrem privaten Schlüssel. Diese Nachricht kann nur mit dem zugehörigen öffentlichen Schlüssel entschlüsselt werden, den Sie bereitstellen, was die Authentizität der Nachricht garantiert. Eine vom öffentlichen Schlüssel dechiffrierte Nachricht kann nur vom Inhaber des privaten Schlüssels kommen.

![hash](images/dns-dkim-crypto02.png){.thumbnail}

#### Wie werden asymmetrisches Hashing und Verschlüsselung für DKIM verwendet? <a name="encrypt-and-hash"></a>

Für E-Mail-Dienste nutzt DKIM das Hashing-Verfahren, um eine Signatur aus einigen Elementen des [E-Mail-Headers](/pages/web/emails/diagnostic_headers) sowie des Inhalts der E-Mail (Body) zu erstellen.

Die Signatur wird dann mit dem privaten Schlüssel asymmetrisch verschlüsselt.

#### Warum müssen die DNS Server konfiguriert werden? <a name="dns-and-dkim"></a>

Damit der Empfänger die DKIM-Signatur des Absenders überprüfen kann, benötigt er die DKIM-Parameter, insbesondere den öffentlichen Schlüssel, um die Signatur zu entschlüsseln. Die [DNS-Zone](/pages/web/domains/dns_zone_edit) eines Domainnamens ist öffentlich verfügbar, deshalb wird, um den öffentlichen Schlüssel und die DKIM-Parameter an den Empfänger weiterzuleiten, ein DNS-Eintrag verwendet.

#### Was ist ein DKIM-Selektor? <a name="selector"></a>

Wenn Sie DKIM aktivieren, funktioniert es mit einem Schlüsselpaar. Es ist möglich, Ihrem Domainnamen mehrere Schlüsselpaare zuzuweisen, zum Beispiel mittels einer Rotation. Wenn Sie das Schlüsselpaar wechseln, muss das alte Paar so lange aktiv bleiben, bis alle mit dem alten Schlüssel versendete E-Mails den DKIM-Check beim Empfangsserver nicht mehr bestehen.

Damit dieses Prinzip der Rotation funktioniert, werden **DKIM-Selektoren** eingesetzt. Ein DKIM-Selektor beinhaltet ein *private key*/*public key* Paar. Es ist als Zeichenkette in der DKIM-Signatur einer E-Mail sichtbar, nach dem Argument `s=`. Diese Signatur kann im [Header der E-Mail](/pages/web/emails/diagnostic_headers) ausgelesen werden.

**Beispiel einer DKIM-Signatur**

<pre class="console"><code>
DKIM-Signature: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

Der Wert des Selektors ist hier `s=ovhex123456-selector`.

#### Beispiel einer gesendeten E-Mail mit DKIM <a name="example"></a>

Wenn Sie eine E-Mail über **contact@mydomain.ovh** versenden, wird dem Header der E-Mail eine mit privatem Schlüsssel verschlüsselte Signatur hinzugefügt.

![E-Mail](images/dns-dkim-send.gif){.thumbnail}

Der Empfänger **recipient@otherdomain.ovh** kann diese Signatur mit dem in der DNS-Zone von **mydomain.ovh** verfügbaren öffentlichen Schlüssel entschlüsseln. Die Signatur wird anhand des Inhalts der E-Mail erstellt. Wird die E-Mail während der Übermittlung manipuliert, entspricht die Signatur nicht mehr dem Inhalt und die DKIM-Überprüfung des Zielservers scheitert.

![E-Mail](images/dns-dkim-receive.gif){.thumbnail}

### DKIM für OVHcloud Exchange oder OVHcloud E-Mail Pro konfigurieren <a name="internal-dkim"></a>

Um Ihr DKIM zu konfigurieren müssen Sie zuerst die Dienst-Referenz für Exchange oder E-Mail Pro abrufen. 

Klicken Sie auf den Tab für Ihren Dienst.

> [!tabs]
> **Exchange**
>>
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Tab `Web Cloud`{.action} auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Klicken Sie dann auf den Namen des betreffenden Dienstes. Der Dienstname ist identisch mit der Referenz oder wird unter dem individuellen Namen angezeigt, den Sie diesem Dienst gegeben haben (siehe Abbildung).
>>
>> ![E-Mail](images/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **E-Mail Pro**
>>
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Tab `Web Cloud`{.action} auf `E-Mail Pro`{.action} und anschließendauf den Namen des betreffenden Dienstes. Der Dienstname ist identisch mit der Referenz oder wird unter dem individuellen Namen angezeigt, den Sie diesem Dienst gegeben haben (siehe Abbildung).
>>
>> ![E-Mail](images/dns-dkim-platform-emailpro.png){.thumbnail}

Vergewissern Sie sich, dass der Domainname, den Sie für Ihre E-Mails verwenden möchten, im Bereich `Assoziierte Domains`{.action} aktiv ist.

![E-Mail](images/dns-dkim-domain.png){.thumbnail}

Um DKIM zu konfigurieren, gehen Sie zur Seite <https://api.ovh.com/console/> und klicken Sie oben rechts auf `Login`{.action}. Geben Sie die Zugangsdaten Ihres OVHcloud Kunden-Accounts ein, um sich einzuloggen.

> Lesen Sie unsere Anleitung zur [Verwendung der API](/pages/account/api/first-steps), wenn Sie damit noch nicht vertraut sind.

Öffnen Sie den Bereich `/email/exchange` oder `/email/pro`, je nach Ihrer Dienstauswahl. Geben Sie "dkim" in das Feld `Filter` ein, damit nur die Endpunkte für DKIM angezeigt werden.

![E-Mail](images/dns-dkim-api01.png){.thumbnail}

#### Vollständige Konfiguration von DKIM <a name="firststep"></a>

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
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
>> *Beispielausgabe:* 
>> ```
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2. Selektor erstellen**
>> In diesem Schritt wird ein Selektor erstellt, ein Schlüsselpaar generiert und der DNS-Eintrag für den Domainnamen hinzugefügt.<br>
>><br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `autoEnableDKIM`: DKIM wird direkt aktiviert, indem Sie dieses Feld anhaken. **Setzen Sie hier keinen Haken, wenn Ihr Domainname nicht im selben OVHcloud Kunden-Account verwaltet wird oder bei einem externen Anbieter registriert ist.**
>> - `configureDkim`: Der CNAME-Eintrag wird automatisch zur DNS-Zone Ihres Domainnamens hinzugefügt, wenn diese im selben OVHcloud Kunden-Account wie Ihr Exchange verwaltet wird. **Setzen Sie hier keinen Haken, wenn Ihr Domainname nicht im selben OVHcloud Kunden-Account verwaltet wird oder bei einem externen Anbieter registriert ist.**
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein (Beispiel: "ovhex123456-selector1"). <br>
>>
>> Klicken Sie auf `Execute`{.action}, um die Erstellung des Selektors zu starten.<br>
>>
>> *Beispielausgabe:*
>> ```
>> status: "todo",
>> function: "addExchangeDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Wenn Ihr Domainname im selben OVHcloud Kunden-Account verwaltet wird und Sie `autoEnableDKIM` und `configureDkim` angehakt haben, gehen Sie direkt zum Abschnitt [**Die verschiedenen DKIM-Statusse**](#dkim-status), um die Aktivierung von DKIM zu verfolgen.
>>
> **3. DNS-Eintrag abrufen**
>> Konfigurieren Sie die DNS-Zone Ihres Domainnamens manuell **in folgenden Fällen**:
>>
>> - Ihr Exchange nutzt einen Domainnamen, der in einem anderen OVHcloud Kunden-Account verwaltet wird.<br>
>> - Ihr Exchange nutzt einen Domainnamen, der von einem anderen Registrar verwaltet wird.<br>
>> - Sie haben `configureDkim` im vorherigen Schritt nicht angehakt.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags abrufen. Verwenden Sie hierzu folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>>
>> *Beispielausgabe:*
>> ```
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
>> Speichern Sie die Werte für `customerRecord` und `targetRecord in einer Textdatei. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Es ist möglich, dass `status:` den Wert `todo` hat. Das keine Auswirkungen auf die Konfiguration Ihrer DNS-Zone.
>>
> **4. DNS-Eintrag konfigurieren**
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action} rechts. Wählen Sie `CNAME` aus und geben Sie Ihre zuvor ermittelten Werte ein.<br>
>>
>> Beispielwerte anhand Schritt **3. DNS-Eintrag abrufen**:
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME-Eintrags, wobei der Teil `.mydomain.ovh` bereits vorausgefüllt ist. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel des Eintrags. Am Ende muss immer ein `.` hinzugefügt werden: `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![E-Mail](images/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Nachdem Sie die Werte eingegeben haben, klicken Sie auf `Weiter`{.action} und dann `Bestätigen`{.action}.
>>
>> Wenn Sie Ihre DNS-Zone in einem externen Interface außerhalb von OVHcloud konfigurieren, muss der CNAME-Eintrag folgende Form haben:
>>
>> ```bash
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
>> > Überprüfen Sie mithilfe des Abschnitts [**Die verschiedenen DKIM-Statusse**](#dkim-status) in dieser Anleitung, dass `status:` den Wert `ready` hat, bevor Sie DKIM aktivieren.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>>
>> *Beispielausgabe:*
>> ```
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Sie haben damit alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass DKIM aktiviert ist, püfen Sie mithilfe des Abschnitts [**Die verschiedenen DKIM-Statusse**](#dkim-status) dieser Anleitung, ob `status:` den Wert `inProduction` hat. Ist das der Fall, ist Ihr DKIM aktiv.
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
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkimSelector 
>> >
>> <br>
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
>> *Beispielausgabe:* 
>> ```
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2. Selektor erstellen**
>> In diesem Schritt wird ein Selektor erstellt, ein Schlüsselpaar generiert und der DNS-Eintrag für den Domainnamen hinzugefügt.<br>
>><br>
>> Verwenden Sie hierzu folgenden API-Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>> - `autoEnableDKIM`: DKIM wird direkt aktiviert, indem Sie dieses Feld ankreuzen. **Setzen Sie hier keinen Haken, wenn Ihr Domainname nicht im selben OVHcloud Kunden-Account verwaltet wird oder bei einem externen Anbieter registriert ist.**
>> - `configureDkim`: Der CNAME-Eintrag wird automatisch zur DNS-Zone Ihres Domainnamens hinzugefügt, wenn diese im selben OVHcloud Kunden-Account wie Ihr E-Mail Pro verwaltet wird. **Setzen Sie hier keinen Haken, wenn Ihr Domainname nicht im selben OVHcloud Kunden-Account verwaltet wird oder bei einem externen Anbieter registriert ist.**
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein (Beispiel: "ovhex123456-selector1"). <br>
>>
>> Klicken Sie auf `Execute`{.action}, um die Erstellung des Selektors zu starten.<br>
>>
>> *Beispielausgabe:*
>> ```
>> status: "todo",
>> function: "addDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Wenn Ihr Domainname im selben OVHcloud Kunden-Account verwaltet wird und Sie `autoEnableDKIM` und `configureDkim` angehakt haben, gehen Sie direkt zum Abschnitt [**Die verschiedenen DKIM-Statusse**](#dkim-status), um die Aktivierung von DKIM zu verfolgen.
>>
> **3. DNS-Eintrag abrufen**
>> Konfigurieren Sie die DNS-Zone Ihres Domainnamens manuell **in folgenden Fällen**:
>>
>> - Ihr E-Mail Pro nutzt einen Domainnamen, der in einem anderen OVHcloud Kunden-Account verwaltet wird.<br>
>> - Ihr E-Mail Pro nutzt einen Domainnamen, der von einem anderen Registrar verwaltet wird.<br>
>> - Sie haben `configureDkim` im vorherigen Schritt nicht angehakt.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags abrufen. Verwenden Sie hierzu folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Selektor-Namen aus dem vorherigen Schritt ein (Beispiel: "ovhex123456-selector1").
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>>
>> *Beispielausgabe:*
>> ```
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
>> Speichern Sie die Werte für `customerRecord` und `targetRecord in einer Textdatei. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Es ist möglich, dass `status:` den Wert `todo` hat. Das keine Auswirkungen auf die Konfiguration Ihrer DNS-Zone.
>>
> **4. DNS-Eintrag konfigurieren**
>> Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen`{.action} rechts. Wählen Sie `CNAME` aus und geben Sie Ihre zuvor ermittelten Werte ein.<br>
>>
>> Beispielwerte anhand Schritt **3. DNS-Eintrag abrufen**:
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME-Eintrags, wobei der Teil `.mydomain.ovh` bereits vorausgefüllt ist. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel des Eintrags. Am Ende muss immer ein `.` hinzugefügt werden: `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![E-Mail](images/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Nachdem Sie die Werte eingegeben haben, klicken Sie auf `Weiter`{.action} und dann `Bestätigen`{.action}.
>>
>> Wenn Sie Ihre DNS-Zone in einem externen Interface außerhalb von OVHcloud konfigurieren, muss der CNAME-Eintrag folgende Form haben:
>>
>> ```bash
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
>> > Überprüfen Sie mithilfe des Abschnitts [**Die verschiedenen DKIM-Statusse**](#dkim-status) in dieser Anleitung, dass `status:` den Wert `ready` hat, bevor Sie DKIM aktivieren.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.
>>
>> *Beispielausgabe:*
>> ```
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableExchangeDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Sie haben damit alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass DKIM aktiviert ist, püfen Sie mithilfe des Abschnitts [**Die verschiedenen DKIM-Statusse**](#dkim-status) dieser Anleitung, ob `status:` den Wert `inProduction` hat. Ist das der Fall, ist Ihr DKIM aktiv.
>>

#### Die verschiedenen DKIM-Statusse <a name="dkim-status"></a>

Wählen Sie Ihr E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Wenn Sie DKIM mit Exchange verwenden, nutzen Sie den folgenden API-Aufruf, um den aktuellen Status von DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
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
>> ```
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
> **E-Mail Pro**
>> Wenn Sie DKIM mit E-Mail Pro verwenden, nutzen Sie den folgenden API-Aufruf, um den aktuellen Status von DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
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
>> ```
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```

#### DKIM-Selektor aktivieren oder ändern <a name="enable-switch"></a>

> [!warning]
>
> Der DKIM-Selektor muss den Status `ready` haben, bevor er aktiviert werden kann.

Wählen Sie Ihr E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Um DKIM auf einem Selektor zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.<br>
>> - `selectorName`: Geben Sie den Namen eines existierenden Selektors an.<br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein.<br>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.<br>
>>
> **E-Mail Pro**
>> Um DKIM auf einem Selektor zu aktivieren, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Selektors an.<br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten.<br>
>>

> [!primary]
>
> Während der Rotation des DKIM-Selektors können Sie den zweiten Selektor, den Sie erstellt haben, aktivieren und dazu wechseln. Dabei bleibt der erste Selektor aktiv, bis alle mit ihm gesendeten E-Mails vom Empfänger geprüft wurden.

#### DKIM deaktivieren und löschen <a name="enable-switch"></a>

> [!warning]
>
> Der DKIM-Selektor muss den Status `inProduction` haben, bevor er deaktiviert werden kann.

Wählen Sie Ihr E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Wenn Sie DKIM deaktivieren möchten, ohne den Selektor und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API-Aufruf:
>> 
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie deaktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
>> Wenn Sie den DKIM-Selektor und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {DELETE} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim {selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie löschen möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihres Exchange in der Form "hosted-zz111111-1" oder "private-zz111111-1" ein. <br>
>> - `domainName`: Geben Sie den Exchange zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
> **E-Mail Pro**
>> Wenn Sie die DKIM deaktivieren möchten, ohne den Selektor und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API-Aufruf:
>> 
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie deaktivieren möchten. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>
>> Wenn Sie den DKIM-Selektor und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {DELETE} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihres E-Mail Pro in der Form "emailpro-zz111111-1" ein. <br>
>> - `selectorName`: Geben Sie den Namen des Selektors an, den Sie löschen möchten. <br>
>> - `domainName`: Geben Sie den E-Mail Pro zugewiesenen Domainnamen ein, für den Sie DKIM aktivieren möchten. <br>
>>


### DKIM für einen E-Mail-Dienst außerhalb Ihres OVHcloud Kunden-Accounts konfigurieren <a name="external-dkim"></a>

Wenn Sie Ihre DNS-Zone konfigurieren möchten, um einen DKIM-Eintrag für Ihren Dienst hinzuzufügen, folgen Sie den nachstehenden Anweisungen.

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Bereich `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.

Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie rechts auf `Eintrag hinzufügen`{.action}. Es gibt 3 Möglichkeiten, einen Eintrag hinzuzufügen, um die DKIM-Konfiguration in Ihrer DNS-Zone durchzuführen:

- [DKIM-Eintrag](#dkim-record): Konfiguration mit Bearbeitung aller Einstellungen eines DKIM-Eintrags.
- [TXT-Eintrag](#txt-record): Zu verwenden, wenn Ihnen DKIM-Einstellungen vollständig vorgegeben wurden.
- [CNAME-Eintrag](#cname-record): Für ein OVHcloud E-Mail-Angebot oder einen Microsoft E-Mail-Server zu verwenden.

#### DKIM-Eintrag <a name="dkim-record"></a>

Dieser Eintrag wird im Interface als DKIM bezeichnet, aber es handelt sich in der Zone um einen TXT-Eintrag. Der DKIM-Eintrag soll die Konfiguration der verschiedenen Einstellungen erleichtern, indem sie in einzelnen Feldern dargestellt werden.

![E-Mail](images/dns-dkim-add.png){.thumbnail}

- **Subdomain**: Geben Sie den Namen des DKIM-Selektors ein und fügen Sie `._domainkey` als Suffix hinzu. Der Domainname wird automatisch hinzugefügt.

*Beispiel:*

```
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

```
selector-name._domainkey.mydomain.ovh.
```

- Ziel:

```
v=DKIM1;t=s;p= MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA77VDAIfyhjtoF0DIE5V7 rev1EKk4L0nxdBpD5O/jPrM4KP0kukeuB6IMpVplkkq52MSDeRcjoO50h0DmwZOr RUkyGjQwOnAh0VhY3fqkuwBYftEX7vWo8C2E1ylzimABkwPpSL62jZ1DheoXcil9 1M35wWBKtlYdXVedKjCQKOEnwTo+0hdNe38rU9NMgq6nbTIMjDntvxoVI+yF3kcx q/VpAY8BIYbcAXkVFvUyfUBABnnKpf0SfblsfcLW0Koy/FRxPDFOvnjNxXeOxMFR UI6K6PaW2WvtbJG2v+gHLY5M4tB0+/FNJU9emZfkPOk3DmRhZ8ENi7+oZa2ivUDj OQIDAQAB
```

#### CNAME-Eintrag <a name="cname-record"></a>

Der CNAME-Eintrag ist ein Alias. Dies bedeutet, dass der Zielwert auf eine URL verweist, die dann den DKIM-Eintrag an den Server liefert, der den CNAME-Eintrag abfragt. Dieser Typ von CNAME-Eintrag zur Konfiguration von DKIM ist üblich bei der Verwendung eines Microsoft E-Mail-Servers.

Dieser Eintragstyp wird zur Aktivierung von DKIM für Domainnamen verwendet, die für OVHcloud Exchange deklariert wurden.

### DKIM testen <a name="test-dkim"></a>

Wir empfehlen, eine E-Mail von einem Exchange-Accoun taus an eine E-Mail-Adresse zu senden, die beim Empfang die DKIM-Signatur überprüft.

Im Header der empfangenen E-Mail finden Sie folgendes:

<pre class="console"><code>
ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: <test-dkim@mydomain.ovh>
</code></pre>

Um den Header einer E-Mail einzusehen, lesen Sie unsere Anleitung "[E-Mail-Header extrahieren](/pages/web/emails/diagnostic_headers)".

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
