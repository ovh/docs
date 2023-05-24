---
title: DKIM-Eintrag konfigurieren
excerpt: So konfigurieren Sie einen DKIM-Eintrag für Ihre Domain und Ihre OVHcloud E-Mail-Plattform
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

Der DKIM-Eintrag (**D**omain**K**eys **I**dentified **M**ail) ermöglicht die Unterzeichnung von E-Mails, um Identitätsbetrug zu vermeiden. Diese Signatur basiert auf dem Hash-Prinzip in Kombination mit einer asymmetrischen Kryptographie.

**Hier erfahren Sie, wie DKIM funktioniert und wie Sie es für Ihren E-Mail-Dienst einrichten.**

## Voraussetzungen

- Sie haben über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder bei Ihrem Domainanbieter Zugriff auf die Verwaltung der betreffenden Domain, wenn diese außerhalb von OVHcloud registriert ist.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie haben eines unserer [Exchange](https://www.ovhcloud.com/de/emails/), [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/) oder E-Mail-Angebote außerhalb von OVHcloud mit DKIM abonniert.

> [!warning]
>
> Wenn Ihre Domain nicht die DNS-Server von OVHcloud verwendet, muss die Änderung des DKIM über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration Ihrer Domain verwaltet wird.
>
> Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob diese die OVHcloud-Konfiguration in Ihrem [Kundencenter verwendet](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), und zwar im Tab `DNS Server`{.action}, sobald die betreffende Domain ausgewählt wurde.
>

## In der praktischen Anwendung

**Zusammenfassung**

- [Wie funktioniert DKIM?](#how-dkim-work)
    - [Hash](#hash)
    - [Asymmetrische Verschlüsselung](#encrypt)
    - [Wie wird DKIM durch asymmetrisches Hash und Verschlüsselung manipuliert?](#encrypt-and-hash)
    - [Warum müssen die DNS Server konfiguriert werden?](#dns-and-dkim)
    - [Beispiel einer unter Verwendung von DKIM versandten E-Mail](#example)
    - [Was ist ein DKIM-Wähler?](#selector)
- [DKIM für OVHcloud Exchange oder E-Mail Pro konfigurieren](#internal-dkim)
    - [Vollständige Konfiguration des DKIM](#firststep)
        - [Für Exchange](#confex)
        - [Für E-Mail Pro](#confemp)
    - [Die verschiedenen DKIM-Staaten](#status)
    - [DKIM-Wähler aktivieren oder ändern](#enable-switch)
    - [DKIM deaktivieren und löschen](#disable-delete)
- [DKIM für ein E-Mail-Angebot außerhalb Ihres OVHcloud Accounts konfigurieren](#external-dkim)
    - [DKIM-Eintrag](#dkim-record)
    - [TXT Eintrag](#txt-record)
    - [CNAME-Eintrag](#cname-record)
- [DKIM testen](#test-dkim)

### Wie funktioniert DKIM? <a name="how-dkim-work"></a>

Um zu verstehen, warum DKIM Ihre E-Mail-Transaktionen absichert, muss man verstehen, wie das System funktioniert. Um eine sichere Signatur zu erstellen, verwendet das DKIM "**Hash**" und "**asymmetrische**" Verschlüsselung. Die **E-Mail-Plattform** und die **DNS-Zone** Ihrer Domain helfen, die DKIM-Informationen an Ihre Empfänger weiterzuleiten.

#### Hash <a name="hash"></a>

Das Prinzip einer **Hash-Funktion** besteht darin, eine **Signatur** (auch Fingerabdruck genannt) aus Eingabedaten zu generieren. Ihr Interesse ist es, eine feste Zeichenfolge auszugeben, unabhängig von der Anzahl der eingegebenen Daten. 

Im folgenden Diagramm können Sie sehen, dass der Output (Output) unter Verwendung eines MD5-Hash-Algorithmus (**M**essage **D**igest **5**) immer aus 32 Zeichen besteht, während der Input-Text in seiner Größe variieren kann. Jede Zeichenänderung in den Eingabedaten verändert die Ausgabe-Hash vollständig, wodurch die Ausgabe-Signatur unvorhersehbar und fälschungssicher ist. Im folgenden Beispiel wird der Eingangswert (Input) in den MD5 Hash-Algorithmus übertragen und am Ausgang (Output) dessen Hash-Wert angegeben.

![hash](images/dns-dkim-hash01.png){.thumbnail}

Die Hash-Funktion ist nützlich, wenn Sie die Integrität einer Nachricht überprüfen möchten. Tatsächlich weisen zwei Daten, die sich sehr ähnlich darstellen können, einen völlig unterschiedlichen Hashwert mit gleicher Zeichenlänge am Ausgang auf, unabhängig von der Eingangslänge.

#### Asymmetrische Verschlüsselung <a name="encrypt"></a>

Die **Verschlüsselung** dient, wie der Name schon sagt, dazu, die Daten zu verschlüsseln, die man ihm gibt. Er ist "**asymmetrisch**", da der Verschlüsselungsschlüssel nicht derselbe ist wie der Schlüssel von 	Entschlüsselung, im Gegensatz zu einer symmetrischen Verschlüsselung, die denselben Schlüssel zum Verschlüsseln und Entschlüsseln verwendet.

Bei der asymmetrischen Verschlüsselung werden ein **öffentlicher Schlüssel** und ein **privater Schlüssel** verwendet. Der öffentliche Schlüssel ist für jeden sichtbar und nutzbar. Der private Schlüssel wird nur vom Eigentümer verwendet und ist nicht für jedermann sichtbar.

Es gibt zwei Verwendungen der asymmetrischen Verschlüsselung:

- **Die Eingabedaten werden mit dem öffentlichen Schlüssel verschlüsselt und von demjenigen entschlüsselt, der den privaten Schlüssel besitzt**. Sie möchten zum Beispiel, dass ein Dritter Ihnen Daten sicher übermittelt. Sie übermitteln Ihren öffentlichen Schlüssel, ohne sich Gedanken darüber machen zu müssen, ob ihn jemand abholt. Dieser Dritte verschlüsselt seine Daten mit Ihrem öffentlichen Schlüssel. Die verschlüsselten Daten können nur vom Inhaber des privaten Schlüssels entschlüsselt werden.

![hash](images/dns-dkim-crypto01.png){.thumbnail}

- **Die Eingabedaten werden vom Inhaber des privaten Schlüssels verschlüsselt und vom öffentlichen Schlüssel entschlüsselt**. Diese Verwendung gilt für die Authentifizierung eines Datenaustauschs. Ihre Empfänger möchten zum Beispiel sicherstellen, dass Sie der Autor der Nachricht sind, die Sie an sie weiterleiten. In diesem Fall verschlüsseln Sie Ihre Nachricht mit Ihrem privaten Schlüssel. Diese Nachricht kann nur durch den öffentlichen Schlüssel entschlüsselt werden, den Sie an alle weitergeleitet haben. So wird sichergestellt, dass Ihre Empfänger authentisch sind. Eine vom öffentlichen Schlüssel entzifferte Nachricht kann nur vom Inhaber des privaten Schlüssels kommen.

![hash](images/dns-dkim-crypto02.png){.thumbnail}

#### Wie wird DKIM durch asymmetrisches Hash und Verschlüsselung manipuliert? <a name="encrypt-and-hash"></a>

Über die E-Mail-Plattform wird DKIM das Hash verwenden, um eine Signatur von einigen Elementen [des Header der E-Mail](pages/web/emails/diagnostic_headers) und des Mailkörpers (Inhalt der E-Mail) zu erstellen.

Die Signatur wird dann mit dem privaten Schlüssel verschlüsselt und dabei die asymmetrische Verschlüsselung verwendet.

#### Warum müssen die DNS Server konfiguriert werden? <a name="dns-and-dkim"></a>

Damit der Empfänger die DKIM-Signatur des Absenders überprüfen kann, braucht er die DKIM-Einstellungen und vor allem den öffentlichen Schlüssel, um diese zu entschlüsseln. Die [DNS-Zone](/pages/web/domains/dns_zone_edit) einer Domain ist öffentlich, deshalb wird ein DNS-Eintrag hinzugefügt, um den öffentlichen Schlüssel und die DKIM-Einstellungen an den Empfänger weiterzuleiten.

#### Was ist ein DKIM-Wähler <a name="selector"></a>

Wenn Sie DKIM aktivieren, funktioniert dieses mit einem Paar öffentlicher und privater Schlüssel. Es ist möglich, Ihrer Domain mehrere Schlüsselpaare zuzuweisen, zum Beispiel im Rahmen einer Rotation. Wenn Sie das Schlüsselpaar wechseln, muss das alte Paar so lange aktiv bleiben, bis alle E-Mails, die Sie zusammen mit dem alten Schlüssel versendet haben, bei der Überprüfung des DKIM auf dem Empfangsserver nicht auf Fehler stoßen.

Damit dieses Prinzip der Rotation funktioniert, verwenden wir die so genannten **DKIM Swähler**. Ein DKIM-Wähler umfasst ein Paar von privaten/öffentlichen Schlüsseln. Es ist als Zeichenkette in der DKIM-Signatur einer E-Mail mit dem Argument `s=` sichtbar. Diese Signatur [ist im Header der E-Mail sichtbar](pages/web/emails/diagnostic_headers).

**Beispiel eines DKIM-Signaturteils**

<pre class="console"><code>
DKIM-Signature: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

Der Wert des Wählers ist hier `s=ovhex123456-selector`.

#### Beispiel einer unter Verwendung von DKIM versandten E-Mail <a name="example"></a>

Wenn Sie eine E-Mail über **contact@mydomain.ovh** versenden, wird im Header der E-Mail eine verschriebene Signatur mit einem privaten Key (Private Key) hinzugefügt.

![E-Mail](images/dns-dkim-send.gif){.thumbnail}

Der Empfänger **recipient@otherdomain.ovh** kann diese Signatur mit dem in der DNS Zone von **mydomain.ovh** sichtbaren öffentlichen Schlüssel (Public Key) entschlüsseln. Die Signatur wird anhand des Inhalts der versandten E-Mail erstellt. Wird die E-Mail während des Versands geändert, entspricht die Signatur nicht dem Inhalt, sodass die DKIM-Überprüfung des Zielservers scheitern wird.

![E-Mail](images/dns-dkim-receive.gif){.thumbnail}

### DKIM für OVHcloud Exchange oder E-Mail Pro konfigurieren <a name="internal-dkim"></a>

Um Ihre DKIM zu konfigurieren müssen Sie zuerst die Referenz für Ihre Exchange oder E-Mail Pro Plattform abrufen. 

Klicken Sie auf den Tab zu Ihrem Angebot.

> [!tabs]
> **Exchange**
>>
>> Klicken Sie [in Ihrem OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Tab `Web Cloud`{.action} auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Klicken Sie dann auf den Namen des betreffenden Exchange Dienstes. Standardmäßig entspricht der Name Ihrer Plattform deren Referenz, oder diese wird unter dem Namen angezeigt, den Sie ihr zugewiesen haben (siehe unten stehendes Bild).
>>
>> ![E-Mail](images/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **E-Mail Pro**
>>
>> Klicken Sie [in Ihrem OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im Tab `Web Cloud`{.action} auf `E-Mails Pro`{.action} und anschließend auf den Namen des betreffenden E-Mail Pro Dienstes. Standardmäßig entspricht der Name Ihrer Plattform deren Referenz, oder diese wird unter dem Namen angezeigt, den Sie ihr zugewiesen haben (siehe unten stehendes Bild).
>>
>> ![E-Mail](images/dns-dkim-platform-emailpro.png){.thumbnail}

Vergewissern Sie sich außerdem, dass der Domainname, den Sie für Ihre E-Mails verwenden möchten, im Bereich `Assoziierte Domains`{.action} aktiv ist.

![E-Mail](images/dns-dkim-domain.png){.thumbnail}

Um das DKIM zu konfigurieren, loggen Sie sich <https://api.ovh.com/console/>auf der Seite ein, loggen Sie sich oben rechts mit dem `Login`{.action}-Button  ein und geben Sie Ihre OVHcloud-Zugangsdaten ein.

> Lesen Sie unsere Anleitung ["Erfahren Sie, wie Sie die APIs von OVHcloud verwenden"](/pages/account/api/first-steps), wenn Sie die APIs noch nie verwendet haben.

Begeben Sie sich in den Bereich `/email/exchange` (Exchanges Angebote) oder `/email/pro` (E-Mail Pro Angebot) der APIs und geben Sie "dkim"in das Feld `Filter` ein, damit nur APIs für DKIM angezeigt werden.

![E-Mail](images/dns-dkim-api01.png){.thumbnail}

#### Vollständige Konfiguration des DKIM <a name="firststep"></a>

##### **Für Exchange** <a name="confex"></a>

Folgen Sie den folgenden **5 Schritten**, indem Sie auf jeden Tab klicken.

> [!tabs]
> **1.Liste der Wahlberechtigten**
>> Bevor Sie einen der Wähler für Ihre Domain erstellen, müssen Sie den Namen abrufen, den Sie ihnen automatisch über die Exchange Plattform zugewiesen bekommen.<br>
>> <br>
>> Verwenden Sie hierzu folgenden API Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `domain` name: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und für den Sie DKIM aktivieren möchten. <br>
>>
>> *Ergebnisbeispiel:* 
>> ```
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2.Einen Wähler erstellen**
>> Sie sind im Begriff, einen Selektor zu erstellen, ein Schlüsselpaar zu generieren und den der Domain zugewiesenen DNS-Eintrag zu erstellen.<br>
>><br>
>> Verwenden Sie hierzu folgenden API Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten.
>> - `autoEnableDKIM`: Die DKIM-Meldung wird direkt aktiviert, indem Sie dieses Feld ankreuzen. **Setzen Sie hier kein Häkchen, wenn Ihre Domain nicht im selben OVHcloud Kundenkonto oder in einem anderen Registrar registriert ist**.
>> - `configureDkim`: Der CNAME-Eintrag wird automatisch zu Ihrer DNS-Zone Ihrer Domain hinzugefügt, wenn diese im gleichen OVHcloud-Kundenkonto wie Ihre Exchange-Plattform verwaltet wird. **Setzen Sie hier keinen Haken, wenn Ihre Domain nicht im selben OVHcloud Kundencenter oder in einem anderen Registrar registriert ist**.
>> - `selectorName`: Geben Sie den Namen eines Wählers ein, den Sie im vorherigen Schritt erfasst haben (Beispiel: "ovhex123456-selector1"). <br>
>>
>> Klicken Sie auf `Execute`{.action}, um die Erstellung des Wählers zu starten.<br>
>>
>> *Ergebnisbeispiel:*
>> ```
>> status: "todo",
>> function: "addExchangeDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Wenn Ihre Domain im selben Kundencenter verwaltet wird wie Ihre Plattform und Sie sich selbst `autoEnableDKIM` angekreuzt und `configureDkim` konfiguriert haben, gehen Sie direkt in den Bereich [**Die verschiedenen DKIM**](dkim-status#)-Staaten, um die Aktivierung von DKIM zu verfolgen.
>>
> **3.DNS Eintrag abrufen**
>> Konfigurieren Sie die DNS Zone Ihrer Domain manuell **in folgenden Fällen**:
>>
>> - Ihre Exchange-Plattform ist an einen Domainnamen gebunden, der in einem anderen OVHcloud Kundenkonto verwaltet wird.<br>
>> - Ihre Exchange Plattform ist mit einem Domainnamen verbunden, der in einem anderen Registrar verwaltet wird.<br>
>> - Sie haben beschlossen, das Kästchen `configureDkim` im vorherigen Schritt nicht anzukreuzen.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags abrufen. Verwenden Sie hierzu folgenden API Aufruf:
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie im vorherigen Schritt erstellt haben.
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und auf dem Sie DKIM konfigurieren möchten.
>>
>> *Ergebnisbeispiel:*
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
>> Rufen Sie die `customerRecord`und `targetRecord`-Werte in einer Textdatei ab. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Der Status kann `status:` oder `todo` hat dies keine Auswirkungen auf die Konfiguration Ihrer DNS Zone.
>>
> **4.DNS Eintrag konfigurieren**
>> Aus [dem OVHcloud-Kundenbereich](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wo der Name Ihrer Domain angegeben ist Klicken Sie auf der Exchange-Plattform im Tab `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS Zone`{.action} und klicken Sie dann auf `Eintrag hinzufügen` {.action} im angezeigten Fenster . Wählen Sie `CNAME` aus und geben Sie diese entsprechend den von Ihnen ermittelten Werten ein.<br>
>>
>> Wenn Sie die Werte des Beispiels in Schritt "**3.DNS-Eintrag abrufen"** nehmen:
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME Eintrags. Es wird nur `ovhex123456-selector1._domainkey`, da die .`mydomain.ovh`ist bereits ausgefüllt ist. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel der Registrierung. Am Ende wird ein Punkt hinzugefügt, um den Wert zu messen. Cela donne `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
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
>> > Denken Sie daran, dass eine Änderung in einer DNS Zone mit einer Propagationszeit verbunden ist. Er ist normalerweise kurz, kann aber bis zu 24 Stunden betragen.
>>
> **5.DKIM aktivieren**
>> > [!warning]
>> >
>> > Überprüfen Sie im [**Abschnitt Die verschiedenen Staaten des DKIM**](#dkim-status) in dieser Anleitung, dass der `status:` gilt ist im `ready`-Modus, bevor Sie DKIM aktivieren können.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API Anruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Wählers an.
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten.
>>
>> *Ergebnisbeispiel:*
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
>> > Sie haben nun alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass der Server aktiviert ist, lesen Sie den Abschnitt "[**Die verschiedenen Staaten des DKIM"**](dkim-status#) dieser Anleitung, um zu überprüfen, ob der `Status:` lautet ist gut `inProduction`. Ist das der Fall, ist Ihr DKIM nun aktiv.
>>

##### **Für E-Mail Pro** <a name="confemp"></a>

Folgen Sie den folgenden **5 Schritten**, indem Sie auf jeden Tab klicken.

> [!tabs]
> **1.Liste der Wahlberechtigten**
>> Bevor Sie einen der Wähler für Ihre Domain erstellen, müssen Sie den Namen abrufen, der ihnen automatisch von der E-Mail Pro Plattform zugewiesen wird.<br>
>> <br>
>> Verwenden Sie hierzu folgenden API Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkimSelector 
>> >
>> <br>
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten. <br>
>>
>> *Ergebnisbeispiel:* 
>> ```
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2.Einen Wähler erstellen**
>> Sie sind im Begriff, einen Selektor zu erstellen, ein Schlüsselpaar zu generieren und den der Domain zugewiesenen DNS-Eintrag zu erstellen.<br>
>><br>
>> Verwenden Sie hierzu folgenden API Aufruf:<br>
>>
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten.
>> - `autoEnableDKIM`: Die DKIM-Meldung wird direkt aktiviert, indem Sie dieses Feld ankreuzen. **Setzen Sie hier kein Häkchen, wenn Ihre Domain nicht im selben OVHcloud Kundenkonto oder in einem anderen Registrar registriert ist**.
>> - `configureDkim`: Der CNAME-Eintrag wird automatisch zur DNS-Zone Ihrer Domain hinzugefügt, wenn diese im selben OVHcloud Kundenkonto wie Ihre E-Mail Pro Plattform verwaltet wird. **Setzen Sie hier keinen Haken, wenn Ihre Domain nicht im selben OVHcloud Kundencenter oder in einem anderen Registrar registriert ist**.
>> - `selectorName`: Geben Sie den Namen eines Wählers ein, den Sie im vorherigen Schritt erfasst haben. (Beispiel: "ovhemp123456-selector1") <br>
>>
>> Klicken Sie auf `Execute`{.action}, um die Erstellung des Wählers zu starten.<br>
>>
>> *Ergebnisbeispiel:*
>> ```
>> status: "todo",
>> function: "addDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>> > [!primary]
>> >
>> > Wenn Ihr Domainname im selben Kundenbereich wie Ihre Plattform verwaltet wird und Sie `autoEnableDKIM` und `configureDkim` aktiviert haben, gehen Sie zum Nachverfolgen direkt zum Abschnitt [**Die verschiedenen DKIM-Status**](dkim-status#) unten DKIM-Aktivierung.
>>
> **3.DNS Eintrag abrufen**
>> Konfigurieren Sie die DNS Zone Ihrer Domain manuell **in folgenden Fällen**:
>>
>> - Ihre E-Mail Pro Plattform ist mit einer Domain verbunden, die in einem anderen OVHcloud Kundenkonto verwaltet wird.<br>
>> - Ihre E-Mail Pro Plattform ist mit einer Domain verbunden, die in einem anderen Registrar verwaltet wird.<br>
>> - Sie haben beschlossen, das Kästchen `configureDkim` im vorherigen Schritt nicht anzukreuzen.<br>
>>
>> Um Ihre DNS-Zone zu konfigurieren müssen Sie die Werte des DNS-Eintrags abrufen. Verwenden Sie hierzu folgenden API Aufruf:
>>
>> > [!api]
>> >
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein.
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie im vorherigen Schritt erstellt haben.
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Proe-Mail-Plattform verbunden ist, auf der Sie DKIM konfigurieren möchten.
>>
>> *Ergebnisbeispiel:*
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
>> Rufen Sie die `customerRecordet` `targetRecord`-Werte in einer Textdatei ab. Gehen Sie zum nächsten Schritt über.
>>
>> > [!primary]
>> >
>> > Der `status:` kann sein oder `todo` hat dies keine Auswirkungen auf die Konfiguration Ihrer DNS Zone.
>>
> **4.DNS Eintrag konfigurieren**
>> Aus [dem OVHcloud-Kundenbereich](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wo der Name Ihrer Domain angegeben ist Klicken Sie auf der E-Mail Pro-Plattform auf der Registerkarte `Web Cloud`{.action} in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den entsprechenden Domainnamen aus.<br>
>> Gehen Sie auf den Tab `DNS` Zone {.action} und klicken Sie dann `auf Eintrag` {.action} im angezeigten Fenster hinzufügen. Wählen Sie `CNAME` aus und geben Sie diese entsprechend den von Ihnen ermittelten Werten ein.<br>
>>
>> Wenn Sie die Werte des Beispiels in Schritt "**3.DNS-Eintrag abrufen"** nehmen:
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` entspricht der Subdomain des CNAME Eintrags. Es wird nur `ovhemp123456-selector1._domainkey`, da die `.mydomain.ovh`ist bereits vorgefüllt ist. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` entspricht dem Ziel der Registrierung. Am Ende wird ein Punkt hinzugefügt, um den Wert zu messen. Cela donne `ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
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
>> > Denken Sie daran, dass eine Änderung in einer DNS Zone mit einer Propagationszeit verbunden ist. Er ist normalerweise kurz, kann aber bis zu 24 Stunden betragen.
>>
> **5.DKIM aktivieren**
>> > [!warning]
>> >
>> > Überprüfen Sie im [**Abschnitt Die verschiedenen Staaten des DKIM**](#dkim-status) in dieser Anleitung, dass der `status:` gilt ist im `ready`-Modus,` bevor Sie DKIM aktivieren können.
>>
>> Um DKIM zu aktivieren, verwenden Sie folgenden API Anruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein.
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Wählers an.
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten.
>>
>> *Ergebnisbeispiel:*
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
>> > Sie haben nun alle notwendigen Schritte unternommen, um DKIM zu aktivieren. Um sicherzustellen, dass der Server aktiviert ist, lesen Sie den Abschnitt "[**Die verschiedenen Staaten des DKIM"**](dkim-status#) dieser Anleitung, um zu überprüfen, ob der `status:` lautet ist gut `inProduktion`. Ist das der Fall, ist Ihr DKIM nun aktiv.
>>

#### Die verschiedenen DKIM-Staaten <a name="dkim-status"></a>

Wählen Sie das betreffende E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Verwenden Sie bei Ihren Operationen auf dem DKIM Ihrer Exchange Plattform den unten stehenden API Aufruf, um den aktuellen Status des DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Wählers an. <br>
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist, auf der DKIM sein soll. <br>
>>
>> Sehen Sie sich den `Status:` an im Ergebnis:
>>
>> - `todo`: Die Aufgabe wurde gestartet, sie wird beginnen. <br>
>> - `WaitingRecord`: Die DNS-Einträge werden in der DNS-Zone der Domain konfiguriert oder gerade validiert. Die automatische Überprüfung wird regelmäßig durchgeführt, um festzustellen, ob der DNS-Eintrag vorhanden ist und korrekt angegeben ist.
>> - `ready`: Die DNS-Einträge sind in der Zone vorhanden. DKIM kann jetzt aktiviert werden. <br>
>> - `inProduction`: DKIM ist gut konfiguriert und aktiviert und ist somit voll funktionsfähig. <br>
>> - `disabling`: Die DKIM wird deaktiviert. <br>
>> - `deleting`: Der DKIM wird gelöscht. <br>
>>
>> Wenn beim Starten des API-Anrufs folgender Fehler auftritt, bedeutet dies, dass der Wähler nicht existiert oder gelöscht wurde. Wir müssen es schaffen.
>>
>> ```
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
> **E-Mail Pro**
>> Verwenden Sie bei Ihren Operationen auf der DKIM Plattform E-Mail Pro den unten stehenden API-Aufruf, um den aktuellen Status des DKIM zu überprüfen.
>>
>> > [!api]
>> >
>> > @api {GET} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Wählers an. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist und auf dem DKIM vorhanden sein soll. <br>
>>
>> Sehen Sie sich den `Status:` an im Ergebnis:
>>
>> - `todo`: Die Aufgabe wurde gestartet, sie wird beginnen. <br>
>> - `WaitingRecord`: Die DNS-Einträge werden in der DNS-Zone der Domain konfiguriert oder gerade validiert. Die automatische Überprüfung wird regelmäßig durchgeführt, um festzustellen, ob der DNS-Eintrag vorhanden ist und korrekt angegeben ist. <br>
>> - `ready`: Die DNS-Einträge sind in der Zone vorhanden. DKIM kann jetzt aktiviert werden. <br>
>> - `inProduction`: DKIM ist gut konfiguriert und aktiviert und ist somit voll funktionsfähig. <br>
>> - `disabling`: Die DKIM wird deaktiviert. <br>
>> - `deleting`: Der DKIM wird gelöscht. <br>
>>
>> Wenn beim Starten des API-Anrufs folgender Fehler auftritt, bedeutet dies, dass der Wähler nicht existiert oder gelöscht wurde. Wir müssen es schaffen.
>>
>> ```
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```

#### DKIM-Wähler aktivieren oder ändern <a name="enable-switch"></a>

> [!warning]
>
> Der DKIM-Wähler muss sich im `ready`-Status befinden, bevor er aktiviert werden kann.

Wählen Sie das betreffende E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Um DKIM auf einem Wähler zu aktivieren, verwenden Sie folgenden API Anruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.<br>
>> - `selectorName`: Geben Sie den Namen eines vorhandenen Wählers an.<br>
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein.<br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer Exchange Plattform verbunden ist und auf dem Sie DKIM aktivieren möchten.<br>
>>
> **E-Mail Pro**
>> Um DKIM auf einem Wähler zu aktivieren, verwenden Sie folgenden API Anruf:
>>
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des von Ihnen erstellten Wählers an.<br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist und auf dem DKIM vorhanden sein soll.<br>
>>

> [!primary]
>
> Während der Rotation des DKIM-Wählers können Sie den zweiten Wähler, den Sie erstellt haben, direkt aktivieren, um ihn zu kippen, und dabei den ersten Wähler beibehalten, der aktiv bleibt, bis alle mit ihm gelieferten E-Mails vom Empfänger richtig analysiert werden.

#### DKIM deaktivieren und löschen <a name="enable-switch"></a>

> [!warning]
>
> Der DKIM-Wähler muss sich `inProduction` status befinden, bevor er deaktiviert werden kann.

Wählen Sie das betreffende E-Mail-Angebot in den folgenden Tabs aus:

> [!tabs]
> **Exchange**
>> Wenn Sie die DKIM deaktivieren möchten, ohne den Wähler und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API Anruf:
>> 
>> > [!api]
>> >
>> > @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie deaktivieren möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `domainName`: Geben Sie den mit Ihrer Exchange Plattform verbundenen Domainnamen an. <br>
>>
>> Wenn Sie den DKIM-Wähler und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {DELETE} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim {selectorName}
>> >
>>
>> - `organizationName`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder ">> private-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie löschen möchten. <br>
>> - `exchangeService`: Geben Sie den Namen Ihrer Exchange-Plattform in der Form "hosted-zz111111-1"oder "private-zz111111-1"ein. <br>
>> - `domainName`: Geben Sie den mit Ihrer Exchange Plattform verbundenen Domainnamen an. <br>
>>
> **E-Mail Pro**
>> Wenn Sie die DKIM deaktivieren möchten, ohne den Wähler und sein Schlüsselpaar zu löschen, verwenden Sie folgenden API Anruf:
>> 
>> > [!api]
>> >
>> > @api {POST} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/disable
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie deaktivieren möchten. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist. <br>
>>
>> Wenn Sie den DKIM-Wähler und sein Schlüsselpaar löschen möchten, verwenden Sie folgenden API-Aufruf:
>>
>> > [!api]
>> >
>> > @api {DELETE} /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: Geben Sie den Namen Ihrer E-Mail Pro Plattform in der Form "emailpro-zz111111-1"ein. <br>
>> - `selectorName`: Geben Sie den Namen des Wählers an, den Sie löschen möchten. <br>
>> - `domainName`: Geben Sie den Domainnamen an, der mit Ihrer E-Mail Pro Plattform verbunden ist. <br>
>>


### DKIM für ein E-Mail-Angebot außerhalb Ihres OVHcloud Accounts konfigurieren <a name="external-dkim"></a>

Wenn Sie Ihre DNS Zone konfigurieren möchten, um einen DKIM-Eintrag für Ihr Angebot hinzuzufügen, folgen Sie den nachstehenden Anweisungen.

Klicken Sie im OVHcloud[ Kundencenter auf den Tab ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)Web Cloud`, dann `{.action}in der linken Spalte auf` `{.action} Domainnamen und wählen Sie die betreffende Domain aus.

Gehen Sie auf den Tab `DNS Zone`{.action} und anschließend auf `Eintrag hinzufügen`{.action}. Es gibt 3 Möglichkeiten, einen Eintrag hinzuzufügen, um die DKIM-Konfiguration in Ihrer DNS Zone durchzuführen:

- [einen DKIM-Eintrag](#dkim-record): Konfiguration zur Anzeige aller Einstellungen eines DKIM-Eintrags.
- [einen TXT Eintrag](#txt-record): Aufzeichnung, die zu verwenden ist, wenn Ihnen alle DKIM-Einstellungen geliefert wurden.
- [einen CNAME Eintrag](#cname-record): für ein OVHcloud E-Mail-Angebot oder einen Microsoft E-Mail-Server verwendete Aufzeichnung.

#### DKIM-Eintrag <a name="dkim-record"></a>

Dieser Eintrag wird im Interface als DKIM bezeichnet, aber es handelt sich tatsächlich um einen TXT-Eintrag, der am Anfang erscheint. Der DKIM-Eintrag soll das Lesen der verschiedenen DKIM-Einstellungen erleichtern, indem sie in unabhängigen Kästchen dargestellt werden.

![E-Mail](images/dns-dkim-add.png){.thumbnail}

- **Subdomain**: Geben Sie den Namen des DKIM Wählers ein und fügen Sie hinzu `._domainkey` in suffixe, am Ende wird Ihre Domain automatisch hinzugefügt.

*Beispiel:*

```
  selector-name._domainkey.mydomain.ovh.
```

- **Version (v=)**: zur Angabe der DKIM-Version Es wird empfohlen, es zu verwenden, und sein Standardwert ist `DKIM`.<br>
Wenn spezifiziert, muss dieser Tag zuerst in der Aufzeichnung erscheinen und muss "DKIM1"(ohne Anführungszeichen) entsprechen. Einträge, die mit einem "v=" Tag mit einem anderen Wert beginnen, müssen ignoriert werden.

- **Granularität (g=)**: erlaubt die Angabe des "lokalen Anteils" einer E-Mail-Adresse, d. h. des Teils vor dem @.<br>
Sie erlaubt es, die E-Mail-Adresse oder die E-Mail-Adressen anzugeben, die zur Unterzeichnung einer E-Mail mit dem DKIM-Schlüssel des Wählers autorisiert sind.<br>
Der Standardwert von "g=" ist "\*", was bedeutet, dass alle E-Mail-Adressen den DKIM-Signaturschlüssel verwenden dürfen.<br>
Durch die Angabe eines spezifischen Wertes für "g="kann die Verwendung des Schlüssels auf einen bestimmten lokalen Teil der E-Mail-Adresse oder auf einen bestimmten Bereich von E-Mail-Adressen unter Verwendung generischer Zeichen beschränkt werden (z. B.: "\*-gruppe").

- **Algorithmus (Hash) (h=)**: erlaubt die Angabe der Hash-Algorithmen, die zur Unterzeichnung der E-Mail-Header verwendet werden. Mit diesem Bake wird eine Liste von Hash-Algorithmen erstellt, die zur Erstellung einer DKIM-Signatur für eine bestimmte Nachricht verwendet werden.

- **Schlüsseltyp (k=)**: bestimmt den Signaturalgorithmus, der zur Unterzeichnung ausgehender E-Mails verwendet wird. Er ermöglicht den Empfängern zu erfahren, wie die Nachricht unterzeichnet wurde und wie sie ihre Echtheit überprüft.<br>
Die möglichen Werte für den Tag "k=" beinhalten "rsa" für den RSA-Signaturalgorithmus und "ed25519" für den Signaturalgorithmus Ed25519. Die Wahl des Algorithmus hängt von der Sicherheitspolitik des Absenders und der Übernahme durch den Empfänger ab.

- **Anmerkungen (n=)**: dient der Beifügung von Interessenvermerken für Administratoren, die das DKIM-Schlüsselsystem verwalten.<br>
Diese Anmerkungen können aus Dokumentationsgründen oder zur Unterstützung der Administratoren bei der Verständlichkeit oder Verwaltung der Funktionsweise von DKIM nützlich sein. Die in n= enthaltenen Notizen werden von den Programmen nicht interpretiert und beeinträchtigen nicht die Funktionsweise des DKIM.

- **Öffentlicher Schlüssel (base64) (p=)**: zur Eingabe der DKIM-Public-Key-Daten verwendet, die in Base64 kodiert sind.<br>
Dieses Tag ist bei der DKIM-Signatur zwingend erforderlich und erlaubt es den Empfängern der Signatur, den öffentlichen Schlüssel wiederherzustellen, um die Authentizität der unterzeichneten Nachricht zu überprüfen.

- **Den öffentlichen Schlüssel widerrufen**: wenn ein öffentlicher DKIM-Schlüssel widerrufen wurde (z. B. wenn der private Schlüssel kompromittiert wurde), ist für den Tag "p=" ein leerer Wert zu verwenden, der anzeigt, dass dieser öffentliche Schlüssel nicht mehr gültig ist. Die Empfänger müssen einen Fehler bei jeder DKIM-Signatur zurückgeben, die sich auf einen zurückgezogenen Schlüssel bezieht.

- **Art der Dienstleistung (s=)**c: Der Tag "s=" (Service Type) ist optional und standardmäßig nicht vorhanden. Sie erlaubt es, die Art(en) der Dienste anzugeben, für die der DKIM-Eintrag gilt.<br>
Die Arten von Diensten werden anhand einer Liste von Schlüsselwörtern definiert, die durch die beiden Punkte ":"getrennt sind.<br>
Der Empfänger muss diese Aufzeichnung ignorieren, wenn die entsprechende Art von Dienstleistung nicht aufgeführt ist.<br>
Das "s="Beacon ist dazu bestimmt, die Verwendung von Schlüsseln für andere Zwecke zu beschränken, wenn die Verwendung von DKIM in Zukunft für andere Dienste definiert wird.<br>
Die derzeit definierten Arten von Diensten sind "\*" (alle Arten von Diensten), "E-Mail" (E-Mail).

- **Testmodus (t=y)**: erlaubt es den Inhabern der Domain, die Einrichtung von DKIM zu testen, ohne zu riskieren, dass Nachrichten zurückgewiesen oder als SPAM gekennzeichnet werden, wenn die Überprüfung der DKIM-Signatur fehlschlägt.<br>
Bei Verwendung des Flag "t=y"darf der Empfänger Nachrichten, die im Testmodus signiert wurden, und Nachrichten, die nicht signiert wurden, nicht anders verarbeiten. Der Empfänger kann jedoch das Ergebnis des Tests verfolgen, um den Unterzeichnern zu helfen.

- **Subdomains (t=s)**: erlaubt es, die Verwendung der DKIM Signatur ausschließlich auf den Domainnamen zu beschränken (zum Beispiel: @mydomain.ovh) oder den Versand von der Domain und deren Subdomains aus erlauben (zum Beispiel: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh etc.)

#### TXT Eintrag <a name="txt-record"></a>

Hierbei handelt es sich um den Typ des nativen Eintrags, der zur Konfiguration des DKIM in der DNS-Zone Ihrer Domain verwendet wird. Die Syntax muss gut kontrolliert werden, um sie zu ergänzen.

Dieser Typ von DKIM-Einstellungen wird empfohlen, wenn Ihnen die einzugebenden Informationen vom Anbieter des E-Mail-Dienstes mitgeteilt wurden.

Die Zusammensetzung des DKIM-Eintrags wird im vorherigen Teil der Anleitung "[DKIM-Eintrag](#dkim-record)" beschrieben.

**Beispiel eines DKIM-Eintrags**

- Subdomain:

```
selector-name._domainkey.mydomain.ovh.
```

- Ziel:

```
"v=DKIM1; k=rsa; t=s; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp89XeoEG9xr97E7ha3XzsAh2oaYhuvcC24EIYbKJdv//WMjKEWBZwKfQs3SOY1lKjjSTkG3lexhWzKvtBHgAQ2RCC+6hx0d96Tp2ihXj+rkIBnmzWB4eLUZRVyjS9YctQBf/YO+LRp24oAOsusinERwE1/0wXf8ot6QMC0qPxMfY8d0nVCEFfI5" "w/tGjlY2QhVASNTryr8MbHFz09f32luBUUJEw6GVgpVgkZjU0cF213pQKeZ4yp30K4620Pe5BSQuqJbOOUCnuzFNNyc7HfhF8Adx06BycHVIbmuuBqe5awoPO7a3aflpHjJW8w+f7wtCH70N6QCBNciSO6K7/QIDAQAB;"
```

#### CNAME-Eintrag <a name="cname-record"></a>

Der CNAME-Eintrag ist ein Alias. Dies bedeutet, dass der Zielwert auf eine URL zurückverweist, die den DKIM-Eintrag selbst an den Server liefert, der den CNAME-Eintrag abfragt. Dieser Typ von CNAME-Eintrag zur Konfiguration von DKIM ist häufig bei der Verwendung eines Microsoft E-Mail-Servers.

Er optimiert genau den Eintragstyp, der zur Aktivierung der DKIM für eine für ein OVHcloud Exchange Angebot angegebene Domain verwendet wird.

### DKIM testen <a name="test-dkim"></a>

Wir empfehlen Ihnen, eine E-Mail von einem Account Ihrer Exchange Plattform an eine E-Mail-Adresse zu senden, die beim Empfang die DKIM-Signatur überprüft.

Im Header der empfangenen E-Mail finden Sie folgendes:

<pre class="console"><code>
ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: <test-dkim@mydomain.ovh>
</code></pre>

Um den Header einer E-Mail abzurufen, lesen Sie unsere Anleitung ["Header einer E-Mail abrufen](pages/web/emails/diagnostic_headers)".

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com).
