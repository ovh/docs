---
title: Einen Sendeconnector auf Ihrer Private oder Trusted Exchange Plattform konfigurieren
excerpt: So fügen Sie einen SMTP-Sendeconnector auf Ihrer OVHcloud Exchange-Plattform hinzu
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

## Ziel

Wenn Sie einen SMTP-Sendeconnector zu Ihrer Exchange-Plattform hinzufügen, können Sie für eine oder mehrere Exchange-E-Mail-Adressen E-Mails über einen Sendeserver außerhalb Ihrer Exchange-Plattform senden. Dies kann zum Beispiel beim massiven Versand von E-Mails oder bei der Verwendung einer externen Anti-Spam-Lösung der Fall sein. Dieser Sendeconnector wird nur von E-Mail-Adressen verwendet, die an den Sendeconnector angefügt sind.

**Hier erfahren Sie, wie Sie einen Sendeconnector auf Ihrer Private Exchange Plattform konfigurieren.**

**Beispiel**

Die E-Mail-Adresse **newsletter@mydomain.ovh** ist an den auf der Exchange Plattform konfigurierten Sendeconnector (Send Connector) angebunden. Die Adresse **contact@mydomain.ovh** ist nicht mit dem Sendeconnector verbunden.

![Send Connector](images/send-connector01.png){.thumbnail}

Hier der Kontext des obigen Diagramms:

- **contact@mydomain.ovh** sendet eine E-Mail an **mary.johnson@guides.ovh**: Dies ist ein klassischer Versand, da der Sendeconnector nicht an **contact@mydomain.ovh** angehängt wurde. **mary.johnson@guides.ovh** erhält also die E-Mail vom Sendeserver der Exchange Plattform (*Outgoing Mail Server*).
- **newsletter@mydomain.ovh** sendet eine E-Mail an **john.smith@guides.ovh** : **newsletter@mydomain.ovh** wurde an den Sendeconnector angehängt, **john.smith@guides.ovh** erhält die E-Mail vom Sendeserver des auf der Exchange Plattform eingerichteten (*Send Connectors*).


## Voraussetzungen

- Sie haben eine [Private Exchange Plattform von OVHcloud](https://www.ovhcloud.com/de/emails/private-exchange/) oder eine [Trusted Exchange Plattform von OVHcloud](https://www.ovhcloud.com/de/enterprise/products/trusted-exchange/) abonniert.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie sind mit den [APIs von OVHcloud](https://api.ovh.com/) verbunden.
- Sie verfügen über die erforderlichen Einstellungen zum Einrichten des Sendeconnectors. Wenden Sie sich an den Dienstleister, der die Dienstleistung bereitstellt.

## In der praktischen Anwendung

Die Einrichtung eines Sendeanschlusses erfolgt in 3 Schritten.

- [1. Sendeconnector zur Plattform](#addconnector) hinzufügen: Sie geben die Einstellungen für den Sendeconnector ein, den Sie von Ihrem Dienstanbieter erhalten haben.
- [2. E-Mail-Adresse auf einem Sendeconnector konfigurieren](#addaddress) : Sie fügen den Sendeconnector einer oder mehreren E-Mail-Adressen hinzu, sodass diese beim Senden über diesen Connector senden.
- [3. Überprüfen, dass Ihre E-Mail-Adresse den Sendeconnector verwendet](#checkheader) : Senden Sie eine E-Mail-Adresse, die mit einem Connector eingerichtet ist, und rufen Sie den E-Mail-Header von der Empfangs-E-Mail-Adresse ab, um zu überprüfen, ob die E-Mail den Sendeconnector passiert hat.

In dieser Anleitung finden Sie weitere nützliche Schritte für Sendeanschlüsse.

- [An eine E-Mail-Adresse angehängten Sendeconnector entfernen](#removeaddress)
- [Sendeconnector als Standardsendeserver festlegen](#defaultconnector)
- [Listen anderer API-Aufrufe in Verbindung mit Sendeconnectors](#apilist)

### Einen Sendeconnector zu Ihrer Exchange-Plattform hinzufügen <a name="addconnector"></a>

> [!warning]
>
> Das Hinzufügen eines Sendeconnectors ist reserviert und für die Angebote [Private Exchange von OVHcloud](https://www.ovhcloud.com/de/emails/private-exchange/) und [Trusted Exchange von OVHcloud](https://www.ovhcloud.com/de/enterprise/products/trusted-exchange/) vorgesehen. Wenn Sie einen Sendeconnector für ein OVHcloud Exchange-Angebot aktivieren, das von den oben genannten Angeboten abweicht, kann es aus Sicherheitsgründen jederzeit von unseren Administratoren deaktiviert werden.

Bevor Sie beginnen, halten Sie folgende Informationen bereit. Sie müssen vom Anbieter bereitgestellt werden, der den Sendeanschluss bereitstellt.

- Adresse des sendenden Servers (SMTP)
- Der für den Versand verwendete Port (Beispiel: 587)
- Der zugehörige Benutzername (Beispiel: eine E-Mail-Adresse) **kann je nach Sendeconnector optional sein**.
- Das Passwort für den Benutzernamen **kann je nach Sendeconnector optional sein**.

Loggen Sie sich anschließend mit Ihren Zugangsdaten in die OVHcloud API ein. Weitere Informationen finden Sie in unserer Anleitung [Erste Schritte mit den OVHcloud APIs](pages/manage_and_operate/api/first-steps).

Verwenden Sie den folgenden API-Aufruf, um Ihrer Exchange-Plattform einen Sendeconnector hinzuzufügen.

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `displayName` - Anzeigename des Sendeconnectors.
- `maxSendSize`: Maximale Größe einer E-Mail beim Versand in MB (maximal 100 MB und standardmäßig, wenn Sie nichts eingeben).
- `password`: Kennwort, das an den Benutzer des Sendeconnectors angefügt ist.
- `port`: Der zum Senden verwendete Port.
- `requireTLS`: TLS-Sicherheitsprotokoll beim Senden verwenden
- `smartHost` : Adresse des Sendeconnectors (SMTP).
- `smartHostAuthMechanism`: Der für den Sendeconnector verwendete Authentifizierungsmechanismus.
- `user`: Der Benutzer, der dem Sendeconnector zugeordnet ist.

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

Nachdem der Sendeconnector erstellt wurde, rufen Sie die ID des Sendeconnectors mithilfe des folgenden API-Aufrufs ab.

> [!api]
>
> @api {GET} email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.

Diese Art von Ergebnis wird angezeigt:

``` console
[
    29
]
```

Sie finden die Details Ihres Sendeconnectors über diese API: <a name="idconnector"></a>

> [!api]
>
> @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `id` - Geben Sie die ID Ihres Sendeconnectors ein, die Sie im vorherigen Schritt als Nummer erhalten haben.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.

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

### E-Mail-Adresse für die Verwendung eines Sendeconnectors konfigurieren <a name="addaddress"></a>

Um E-Mails über einen Sendeconnector senden zu können, muss dieser mindestens einer E-Mail-Adresse zugewiesen werden.

Verwenden Sie den API-Aufruf zur Einrichtung eines Exchange Accounts, um die ID Ihres Sendeconnectors zu einer E-Mail-Adresse hinzuzufügen :

> [!api]
>
> @api {PUT} /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `primaryEmailAddress` : Geben Sie eine der E-Mail-Adressen Ihrer Exchange-Plattform ein, an die Sie den Sendeconnector anhängen möchten.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `Account`: Hier werden die Informationen zur E-Mail-Adresse eingegeben. **Wir werden uns nur die Zeile zum Sendeconnector** ansehen.
    - `sendConnectorId` - Geben Sie die ID des Sendeconnectors ein, die im vorherigen Schritt als Nummer [ermittelt wurde](#idconnector).
    - Aktivieren Sie das Kontrollkästchen `deleteVirus` (falls nicht bereits aktiviert), um beim Ausführen des API-Aufrufs keine Fehler zu erhalten

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

### Sendeconnector testen <a name="checkheader"></a>

Wenn Ihre Konfiguration mit den vom Anbieter des Sendeconnectors übermittelten Informationen übereinstimmt, sendet Ihre E-Mail-Adresse E-Mails über diesen Sendeconnector. Es gibt keine besonderen Aktionen für den Versand, einfach versenden von der oder den E-Mail-Adressen aus, die an den Sendeconnector gebunden sind.

Senden Sie zum Testen des Sendevorgangs eine E-Mail von einer Adresse, die mit dem Sendeconnector verbunden ist, an eine Testadresse, die Sie ausgewählt haben und die Sie anzeigen können. Nachdem Sie die Test-E-Mail gesendet haben, loggen Sie sich unter der Empfänger-Adresse ein und überprüfen Sie den E-Mail-Header, um sicherzustellen, dass die E-Mail über den Sendeconnector gesendet wurde. Wenn nötig, lesen Sie unsere Anleitung [Header einer E-Mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) abrufen.

**Beispielkopfzeile**

Die E-Mail-Adresse **newsletter@mydomain.ovh** ist eine E-Mail an **john.smith@guides.ovh**. Die E-Mail-Adresse **newsletter@mydomain.ovh** wurde an den Sendeconnector angehängt. Der Sendeconnector hat den Domänennamen **sender-id.example.com**

Im Folgenden finden Sie ein Beispiel für den Header einer E-Mail, die von einem Private Exchange-Server gesendet wird, der einen Sendeconnector im oben genannten Kontext verwendet:

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

### An eine E-Mail-Adresse angehängten Sendeconnector entfernen <a name="removeaddress"></a>

Um einen mit einem Exchange-Plattformkonto verbundenen Sendeconnector zu entfernen, verwenden Sie den API-Aufruf zum Einrichten des betreffenden Exchange-Kontos, um die Sendeconnector-ID in die Sendeserver-ID Ihrer Exchange-Plattform zu ändern:

> [!api]
>
> @api {PUT} /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `primaryEmailAddress` : Geben Sie eine der E-Mail-Adressen Ihrer Exchange-Plattform ein, von der Sie den Sendeconnector trennen möchten.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `Account` : Tragen Sie hier die Informationen zur im Feld „primaryEmailAddress“ eingegebenen E-Mail-Adresse ein. Wir werden uns nur die Zeilen zum Sendeconnector ansehen.
    - `sendConnectorId`: Geben Sie „0“ ein, um die Sendeserver-ID der Exchange-Plattform festzulegen.
    - Aktivieren Sie das Kontrollkästchen `deleteVirus` (falls es nicht bereits aktiviert ist), um keinen Fehler zu erhalten.

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

### Sendeconnector als Standardsendeserver festlegen <a name="defaultconnector"></a>

Sie können bei jedem Hinzufügen eines Exchange Accounts auf Ihrer Plattform automatisch einen Sendeconnector hinzufügen. Auf diese Weise werden alle Konten, die hinzugefügt werden, standardmäßig über den festgelegten Sendeconnector geleitet.

Verwenden Sie hierzu folgenden API-Aufruf:

> [!api]
>
> @api {PUT} /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `exchangeService` : Geben Sie den Namen Ihrer Exchange-Plattform in der Form „private-zz111111-1“ oder „dedicated-zz11111-1“ ein.
- `domainName`: Geben Sie den Domänennamen ein, der den Sendeconnector nutzen soll.
- `sbrDefault ` : Lassen Sie das Feld leer.
- `sendConnectorIdDefault`: Geben Sie die ID des Sendeconnectors ein, die in [diesem Schritt](#idconnector) als Nummer ermittelt wurde.

Sie erhalten folgendes Ergebnis:

``` console
{
    null
}
```

> [!warning]
>
> Um den Standardsendeserver für die Exchange-Plattform zurückzusetzen, geben Sie „0“ in das Feld `sendConnectorIdDefault` ein.

### Listen anderer API-Aufrufe in Verbindung mit Sendeconnectors <a name="apilist"></a>

- Bereits erstellte Sendeconnectors für einen Exchange-Dienst abrufen:

> [!api]
>
> @api {GET} email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Vorhandenen Sendeconnector löschen:

> [!api]
>
> @api {DELETE} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Details eines vorhandenen Sendeconnectors abrufen:

> [!api]
>
> @api {GET} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Vorhandenen Sendeconnector bearbeiten:

> [!api]
>
> @api {PUT} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Authentifizierungsmethode für einen vorhandenen Sendeconnector ändern:

> [!api]
>
> @api {POST} /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Weiterführende Informationen <a name="go-further"></a>

[Eine DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

[Eine Domain zu Ihrem Exchange Dienst hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.