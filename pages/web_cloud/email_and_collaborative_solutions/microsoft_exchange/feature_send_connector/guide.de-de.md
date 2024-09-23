---
title: Einen Send Connector auf Ihrer Private Exchange oder Trusted Exchange Plattform konfigurieren
excerpt: Erfahren Sie hier, wie Sie einen SMTP Send Connector auf Ihrer OVHcloud Exchange Plattform hinzufügen
updated: 2023-11-06
---

<style>
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
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie einen SMTP Send Connector zu Ihrer Exchange Plattform hinzufügen, können Sie für eine oder mehrere Exchange-E-Mail-Adressen E-Mails über einen Sendeserver außerhalb Ihrer Exchange Plattform senden. Dies kann zum Beispiel beim massenhaften Versand von E-Mails oder bei der Verwendung einer externen Anti-Spam-Lösung der Fall sein. Dieser Send Connector wird nur von E-Mail-Adressen verwendet, die an den Send Connector angefügt sind.

**Diese Anleitung erklärt, wie Sie einen Send Connector auf Ihrer Private Exchange Plattform konfigurieren.**

**Beispiel**

Die E-Mail-Adresse **newsletter@mydomain.ovh** ist an den auf der Exchange Plattform konfigurierten Send Connector angebunden. Die Adresse **contact@mydomain.ovh** ist nicht mit dem Send Connector verbunden.

![Send Connector](images/send-connector01.png){.thumbnail}

Hier der Kontext des obigen Diagramms:

- **contact@mydomain.ovh** sendet eine E-Mail an **mary.johnson@guides.ovh**: Dies ist ein Standard-Versand, da der Send Connector nicht an **contact@mydomain.ovh** angehängt wurde. **mary.johnson@guides.ovh** erhält also die E-Mail vom Sendeserver der Exchange Plattform (*Outgoing Mail Server*).
- **newsletter@mydomain.ovh** sendet eine E-Mail an **john.smith@guides.ovh** : **newsletter@mydomain.ovh** wurde an den Send Connector angehängt, **john.smith@guides.ovh** erhält die E-Mail vom Sendeserver des auf der Exchange Plattform eingerichteten (*Send Connectors*).


## Voraussetzungen

- Sie haben eine OVHcloud [Private Exchange Plattform](/links/web/emails-private-exchange) oder [Trusted Exchange Plattform](/links/web/emails-trusted-exchange) abonniert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie können sich in der [OVHcloud API-Konsole](https://api.ovh.com/) einloggen.
- Sie verfügen über die erforderlichen Konfigurationsparameter zum Einrichten des Send Connectors von Ihrem Dienstleister.

## In der praktischen Anwendung

Die Einrichtung eines Send Connectors erfolgt in 3 Schritten.

- [1. Send Connector zur Plattform hinzufügen](#addconnector): Sie geben die Einstellungen für den Send Connector ein, den Sie von Ihrem Dienstanbieter erhalten haben.
- [2. E-Mail-Adresse auf einem Send Connector konfigurieren](#addaddress): Sie fügen den Send Connector einer oder mehreren E-Mail-Adressen hinzu, damit diese darüber senden.
- [3. Überprüfen, dass Ihre E-Mail-Adresse den Send Connector verwendet](#checkheader): Sie versenden von einer E-Mail-Adresse, die mit einem Connector eingerichtet ist, und rufen den E-Mail-Header von der Empfänger-E-Mail-Adresse ab, um zu überprüfen, ob die E-Mail den Send Connector passiert hat.

Sie finden außerdem nützliche Hinweise für die folgenden Operationen.

- [An eine E-Mail-Adresse angehängten Send Connector entfernen](#removeaddress)
- [Send Connector als Standard-Sendeserver festlegen](#defaultconnector)
- [Listen anderer API-Aufrufe für Send Connector](#apilist)

### Einen Send Connector zu Ihrer Exchange Plattform hinzufügen <a name="addconnector"></a>

> [!warning]
>
> Das Hinzufügen eines Send Connectors ist reserviert für die Dienste [OVHcloud Private Exchange](/links/web/emails-private-exchange) und [OVHcloud Trusted Exchange](/links/web/emails-trusted-exchange). Wenn Sie einen Send Connector für ein anderes OVHcloud Exchange-Angebot aktivieren, kann die Funktion aus Sicherheitsgründen jederzeit von unseren Administratoren deaktiviert werden.
>

Bevor Sie beginnen, halten Sie folgende Informationen bereit. Sie erhalten sie vom Anbieter, der den Send Connector bereitstellt.

- Adresse des sendenden Servers (SMTP)
- Der für den Versand verwendete Port (Beispiel: 587)
- Der zugehörige Benutzername (Beispiel: eine E-Mail-Adresse), **je nach Send Connector optional**
- Das Passwort für den Benutzernamen, **je nach Send Connector optional**

Loggen Sie sich anschließend mit Ihren Zugangsdaten in die OVHcloud API-Konsole ein. Weitere Informationen finden Sie in unserer Anleitung [Erste Schritte mit der OVHcloud API](pages/manage_and_operate/api/first-steps).

Verwenden Sie den folgenden API-Aufruf, um Ihrer Exchange Plattform einen Send Connector hinzuzufügen.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `displayName`: Anzeigename des Send Connectors.
- `maxSendSize`: Maximale Größe einer E-Mail beim Versand in MB (maximal 100 MB und der Standard wenn Sie nichts eingeben).
- `password`: Kennwort, das an den Benutzer des Send Connectors angefügt ist.
- `port`: Der zum Senden verwendete Port.
- `requireTLS`: TLS-Sicherheitsprotokoll beim Senden verwenden
- `smartHost`: Adresse des Send Connectors (SMTP).
- `smartHostAuthMechanism`: Der für den Send Connector verwendete Authentifizierungsmechanismus.
- `user`: Der Benutzer, der dem Send Connector zugeordnet ist.

Diese Art von Ergebnis wird angezeigt:

``` console
{
    todoDate: "2023-09-25T14:06:02+02:00"
    id: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Nachdem der Send Connector erstellt wurde, rufen Sie die ID des Send Connectors mithilfe des folgenden API-Aufrufs ab.

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.

Diese Art von Ergebnis wird angezeigt:

``` console
[
    29
]
```

Sie finden die Details Ihres Send Connectors über diesen Aufruf: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `id`: Geben Sie die ID Ihres Send Connectors ein, die Sie im vorherigen Schritt erhalten haben.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.

Diese Art von Ergebnis wird angezeigt:

``` console
{
    smartHost: "smtp-relay.example.com"
    displayName: "testconnector"
    state: "ok"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    port: 587
    lastUpdateDate: null
    creationDate: "2023-09-25T14:06:02+02:00"
    taskPendingId: 0
    id: 29
    requireTLS: true
}
```

### E-Mail-Adresse für die Verwendung eines Send Connectors konfigurieren <a name="addaddress"></a>

Um E-Mails über einen Send Connector senden zu können, muss dieser mindestens einer E-Mail-Adresse zugewiesen werden.

Verwenden Sie den API-Aufruf zur Einrichtung eines Exchange Accounts, um die ID Ihres Send Connectors zu einer E-Mail-Adresse hinzuzufügen:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `primaryEmailAddress`: Geben Sie eine der E-Mail-Adressen Ihrer Exchange Plattform ein, an die Sie den Send Connector anhängen möchten.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `Account`: Hier werden die Informationen zur E-Mail-Adresse eingegeben. **Beachten Sie nur die Zeile zum Send Connector**.
    - `sendConnectorId`: Geben Sie die ID des Send Connectors ein, die im vorherigen Schritt [ermittelt wurde](#idconnector).
    - Aktivieren Sie `deleteVirus` (falls nicht bereits aktiviert), um beim Ausführen des API-Aufrufs keine Fehler zu erhalten.

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

### Send Connector testen <a name="checkheader"></a>

Wenn Ihre Konfiguration mit den vom Anbieter des Send Connectors übermittelten Informationen übereinstimmt, sendet Ihre E-Mail-Adresse E-Mails über diesen Send Connector. Es gibt keine anderen notwendigen Aktionen für den Versand.

Senden Sie zum Testen des Sendevorgangs eine E-Mail von einer Adresse, die mit dem Send Connector verbunden ist, an eine Testadresse, Ihrer Wahl. Nachdem Sie die Test-E-Mail gesendet haben, loggen Sie sich unter der Empfänger-Adresse ein und überprüfen Sie den E-Mail-Header, um sicherzustellen, dass die E-Mail über den Send Connector gesendet wurde. Wenn nötig, lesen Sie unsere Anleitung zum Thema [Header einer E-Mail abrufen](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Beispielkopfzeile**

Die E-Mail-Adresse **newsletter@mydomain.ovh** sendet an **john.smith@guides.ovh**. Die E-Mail-Adresse **newsletter@mydomain.ovh** wurde an den Send Connector angehängt. Der Send Connector hat den Domainnamen **sender-id.example.com**

Im Folgenden finden Sie ein Beispiel für den Header einer E-Mail, die von einem Private Exchange Server gesendet wird, der einen Send Connector im oben genannten Kontext verwendet:

&lt;robert@hisdomain.ovh&gt;

<pre class="bgwhite"><code>Return-Path: &lt;bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com&gt;
Delivered-To: john.smith@guides.ovh
Received: from localhost (HELO queue) (127.0.0.1)
    by localhost with SMTP; 28 Feb 2023 09:51:02 +0200
Received: from unknown (HELO output28.mail.ovh.net) (192.168.11.93)
    by 192.168.1.2 with AES256-GCM-SHA384 encrypted SMTP; 28 Feb 2023 09:51:02 +0200
Received: from vr45.mail.ovh.net (unknown [10.101.8.45])
    by out28.mail.ovh.net (Postfix) with ESMTP id 4PQqLG4KHRzRxRQZj
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:02 +0000 (UTC)
Received: from in31.mail.ovh.net (unknown [10.101.4.31])
    by vr45.mail.ovh.net (Postfix) with ESMTP id 4PQqLF6ZBMz37ZHNP
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=11.22.333.44; helo=sender-id.example.com; envelope-from=bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com; receiver=john.smith@guides.ovh
Authentication-Results: in31.mail.ovh.net;
    dkim=pass (1024-bit key; unprotected) header.d=smtp.example.com header.i=@smtp.example.com header.b="HDetLEPl";
    dkim-atps=neutral
Received: from sender-id.example.com (sender-id.example.com [11.22.333.44])
    by in31.mail.ovh.net (Postfix) with ESMTPS id 4PQsPF43SEm78WdxQ
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=smtp.example.com;
    q=dns/txt; s=mail; bh=gZnUUk4TldsnAE7L+M9zwjuOeOmD6FwV4Yyq99XN2a0=;
    h=from:subject:date:to:mime-version:content-type:list-unsubscribe:x-csa-complaints:list-unsubscribe-post;
    b=HDiySKAl0J78ByyGlPjCVc+zvEv/DP9NkfUdso8DkB5z1Lig4rfbqCLnD6SE6wh7sjsZMsae0gk
    Muy0Uur0tw2nWq/WI94O4grD/KAWWC+jo2w/1+0ol1VCQN2+zQEhM+HJj4pcnn+MfU/RrXLkXfDV
    BLfqJiRcWJCQ3fy3Gag=
Received: by smtp-relay.smtp.example.com with ESMTP id 12185513-794a-4762-b3ee-a4044d30975e; Tue Feb 28 2023 07:51:00 GMT+0000
X-Mailin-EID: MjAxMTY0NTkwfm5vLXJlcGx5QHRlc3QtbXV0dS5jb21%2BPDE2N2U1NdkfOTQ3MzQ1YWFiNzY3NWY3ZmJkMWUzZGJkQHRlYW1qZXJlbS5vdmg%2B25ead5LmQuc2VuZGVyLXNpYi5jb20%3D
To: &lt;john.smith@guides.ovh&gt;
Date: Tue, 28 Feb 2023 07:50:56 +0000
Subject: Test SBR 3 (SIB)
Message-Id: &lt;12185193-354a-4762-b3ee-a40484d30975e@smtp-relay.smtp.example.com&gt;
Origin-messageId: &lt;167e568a947345aab7675f7fbd1e3dbd@mydomain.ovh&gt;
Thread-Index: AQHZS0ljK1OFDltwD80S81Qo68wiBIQ==
Accept-Language: fr-FR, en-US
Content-Language: fr-FR
X-MS-Has-Attach:
X-MS-TNEF-Correlator:
x-mclm-sbr-processed: true
MIME-Version: 1.0
X-sib-id: 8dUZE2ztHUSpKwRy5O0fOawZARq-Dh8BNrytyOAwG9i3ybk5nxMfOvwZLeo778wLsYKejwcxuIEci6PKSzh3d4X7w126g-32syWTSQKRPQZTyxdXonPcl3lqm3pXkNolSaGbfG4dHY38OoEF7aXWMGvRsJtNlvsy1sEx8vGFOpxg_3cK
X-CSA-Complaints: csa-complaints@eco.de
From: &lt;newsletter@mydomain.ovh&gt;
</code></pre>

### An eine E-Mail-Adresse angehängten Send Connector entfernen <a name="removeaddress"></a>

Um einen Send Connector zu entfernen, verwenden Sie den API-Aufruf zum Einrichten des betreffenden Exchange Accounts, um die Send Connector-ID in die Sendeserver-ID Ihrer Exchange Plattform zu ändern:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `primaryEmailAddress`: Geben Sie eine der E-Mail-Adressen Ihrer Exchange Plattform ein, von der Sie den Send Connector trennen möchten.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `Account`: Tragen Sie hier die Informationen zur im Feld „primaryEmailAddress“ eingegebenen E-Mail-Adresse ein. Beachten Sie nur die Zeile zum Send Connector.
    - `sendConnectorId`: Geben Sie „0“ ein, um die Sendeserver-ID der Exchange Plattform festzulegen.
    - Aktivieren Sie `deleteVirus` (falls nicht bereits aktiviert), um beim Ausführen des API-Aufrufs keine Fehler zu erhalten.

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

### Send Connector als Standard-Sendeserver festlegen <a name="defaultconnector"></a>

Sie können bei jedem Hinzufügen eines Exchange Accounts auf Ihrer Plattform automatisch einen Send Connector hinzufügen. Auf diese Weise werden alle Konten, die hinzugefügt werden, standardmäßig über den festgelegten Send Connector geleitet.

Verwenden Sie hierzu folgenden API-Aufruf:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService`: Geben Sie den Namen Ihrer Exchange Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `domainName`: Geben Sie den Domainnamen ein, der den Send Connector nutzen soll.
- `sbrDefault `: Lassen Sie das Feld leer.
- `sendConnectorIdDefault`: Geben Sie die ID des Send Connectors ein, die in [diesem Schritt](#idconnector) ermittelt wurde.

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

> [!warning]
>
> Um den Standardsendeserver für die Exchange Plattform zurückzusetzen, geben Sie „0“ in das Feld `sendConnectorIdDefault` ein.

### Listen anderer API-Aufrufe in Verbindung mit Send Connectors <a name="apilist"></a>

- Bereits erstellte Send Connectors für einen Exchange-Dienst abrufen:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Vorhandenen Send Connector löschen:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Details eines vorhandenen Send Connectors abrufen:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Vorhandenen Send Connector bearbeiten:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Authentifizierungsmethode für einen vorhandenen Send Connector ändern:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

[Domain zu Ihrem Exchange Dienst hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
