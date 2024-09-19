---
title: Configurare un connettore di invio sulla piattaforma Private o Trusted Exchange
excerpt: Come aggiungere un connector di invio SMTP alla piattaforma Exchange OVHcloud
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

## Obiettivo

Aggiungere un connector di invio SMTP alla piattaforma Exchange permette, per uno o più indirizzi email Exchange, di inviare email passando per un server di invio esterno alla piattaforma Exchange. Può essere utilizzato, ad esempio, nell’ambito di campagne di invio massivo di email, o ancora una soluzione antispam esterna. Solo gli indirizzi email associati al connector di invio utilizzeranno quest’ultimo.

**Questa guida ti mostra come configurare un connettore di invio sulla piattaforma Private Exchange.**

**Esempio**

L'indirizzo email **newsletter@mydomain.ovh** è associato al connettore di invio (Send Connector) configurato sulla piattaforma Exchange. L'indirizzo **contact@mydomain.ovh** non è associato al connettore di invio.

![send connector](images/send-connector01.png){.thumbnail}

Ecco il contesto del diagramma sopra:

- **contact@mydomain.ovh** invia una email all'indirizzo **mary.johnson@guides.ovh**: si tratta di un invio classico, perché il connettore d'invio non è stato collegato all'indirizzo **contact@mydomain.ovh**. **mary.johnson@guides.ovh** riceve quindi l'email proveniente dal server d'invio della piattaforma Exchange (*Outgoing mail server*).
- **newsletter@mydomain.ovh** invia un’email all’indirizzo **john.smith@guides.ovh**: **newsletter@mydomain.ovh** è stato associato al connettore di invio, **john.smith@guides.ovh** riceverà l’email proveniente dal server di invio del connettore (*Send Connector*) configurato sulla piattaforma Exchange.

## Prerequisiti

- Disporre di una piattaforma [Private Exchange OVHcloud](/links/web/emails-private-exchange) o [Trusted Exchange OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/trusted-exchange/).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Essere connesso alle [API OVHcloud](https://api.ovh.com/).
- Disporre dei parametri necessari per configurare il connettore di invio. Contatta il fornitore del servizio.

## Procedura

L'installazione di un connettore di invio si effettua in 3 step.

- [1. Aggiungi il connector di invio alla tua piattaforma](#addconnector): Inserisci i parametri del connettore di invio che il tuo provider ti ha trasmesso.
- [2. Configurare un indirizzo email su un connector per l’invio](#addaddress): Associa il connector di invio a uno o più indirizzi email affinché possano inviare attraverso questo connector durante un invio .
- [3. Verifica che il tuo indirizzo email utilizzi il connector di invio](#checkheader): effettua un invio da un indirizzo email configurato con un connector e recupera l’intestazione dell’email dall’indirizzo email di ricezione per verificare che l’email sia passata attraverso il connector di invio.

In questa guida ti forniamo anche alcune informazioni utili sui connettori di invio.

- [Rimuovere un connettore di invio associato a un indirizzo email](#removeaddress)
- [Impostare un connettore di invio come server di invio predefinito](#defaultconnector)
- [Elenchi di altre chiamate API relative a connettori di invio](#apilist)

### Aggiungi un connettore di invio alla piattaforma Exchange <a name="addconnector"></a>

> [!warning]
>
> L'aggiunta di un connettore di invio è riservata alle offerte [Private Exchange OVHcloud](/links/web/emails-private-exchange) e [Trusted Exchange OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/trusted-exchange/). Se attivi un connector di invio su una soluzione Exchange OVHcloud, diversa da quelle citate in precedenza, rischi di vederlo disattivato in qualsiasi momento dai nostri amministratori per motivi di sicurezza.

Prima di iniziare, assicurati di avere a disposizione le seguenti informazioni. Esse devono essere fornite dal prestatore che rilascia il connettore per la spedizione.

- indirizzo del server di invio (SMTP)
- la porta utilizzata per l'invio (esempio: 587)
- il nome utente associato (ad esempio, un indirizzo email) **può essere opzionale in base al tuo connector di invio**.
- la password associata al nome utente, **può essere facoltativa in base al connettore di invio**.

Successivamente, accedi alle API OVHcloud con le credenziali di accesso. Per maggiori informazioni, consulta la nostra guida [Iniziare a utilizzare le API OVHcloud ](pages/manage_and_operate/api/first-steps).

Per aggiungere un connector di invio alla piattaforma Exchange, utilizza questa chiamata API.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".
- `displayName`: nome visualizzato del connettore di invio.
- `maxSendSize`: dimensione massima, in MB, di un'email durante un invio (100MB massimo e di default se non metti nulla).
- `password`: password associata all'utente del connettore di invio.
- `port`: la porta utilizzata per l'invio.
- `requireTLS` : utilizza il protocollo di sicurezza TLS all'invio.
- `smartHost`: indirizzo del connettore di invio (SMTP).
- `smartHostAuthMechanism`: meccanismo di autenticazione utilizzato per il connettore di invio.
- `user`: utente associato al connettore di invio.

Si ottiene questo tipo di risultato:

``` console
{
    todoDate: "2023-09-25T14:06:02+02:00"
    id: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Una volta creato il connettore di invio, utilizza questa chiamata API per recuperarne l’ID (identificativo).

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".

Si ottiene questo tipo di risultato:

``` console
[
    29
]
```

Per visualizzare i dettagli dello slot di invio, utilizza questa API: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `id`: inserire l'ID del connettore di invio, ottenuto come numero nel passaggio precedente.
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".

Si ottiene questo tipo di risultato:

``` console
{
    smartHost: "smtp-relay.example.com"
    displayName: "testconnector"
    state: "ok"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    porta: 587
    lastUpdateDate: null
    creationDate: "2023-09-25T14:06:02+02:00"
    taskPendingId: 0
    id: 29
    requireTLS: true
}
```

### Configurare un indirizzo email per utilizzare un connector di invio <a name="addaddress"></a>

Per poter inviare email tramite un socket di invio, è necessario associarlo a uno o più indirizzi email.

Utilizza la chiamata API di configurazione di un account Exchange per aggiungere l’ID del tuo connector di invio a un indirizzo email:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `primaryEmailAddress` : inserisci uno degli indirizzi email del tuo servizio Exchange, a cui vuoi associare il connettore di invio.
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".
- `Account`: In questo punto vengono inserite le informazioni relative all’indirizzo email. **Ci concentreremo solo sulla linea relativa al connettore di invio**.
    - `sendConnectorId` - Inserire l'ID del connettore di invio, ottenuto come numero [nel passaggio precedente](#idconnector).
    - Selezionare la casella `deleteVirus` (se non è già selezionata) per non ottenere un errore durante l'esecuzione della chiamata API

Il risultato restituito è il seguente:

``` console
{
    null
}
```

### Testare il connettore di invio <a name="checkheader"></a>

Se la configurazione è conforme alle informazioni fornite dal provider di invio, l'indirizzo di posta elettronica dell'utente invierà i messaggi di posta elettronica attraverso tale provider. Non è necessario effettuare alcuna operazione particolare per l’invio, semplicemente inviare dalla o dalle caselle email associate al connettore di invio.

Per testare l’invio, invia un’email da un indirizzo associato al connector d’invio verso un indirizzo di prova che avrai scelto e che potrai consultare. Una volta inviata l’email di test, collegati all’indirizzo del destinatario e controlla l’intestazione dell’email per verificare che l’invio sia avvenuto attraverso il connector di invio. Se necessario, consulta la nostra guida [Recuperare l’intestazione di un’email](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Esempio di intestazione**

l'indirizzo email **newsletter@mydomain.ovh** invia un'email all'indirizzo **john.smith@guides.ovh**. L'indirizzo email **newsletter@mydomain.ovh** è stato associato al connettore di invio. Il connettore di invio ha come nome di dominio **sender-id.esempio.com**

Ecco un esempio di intestazione di un’email inviata da un Private Exchange che utilizza un connector di invio, nel contesto citato precedentemente:

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

### Rimuovere un connettore di invio associato a un indirizzo email <a name="removeaddress"></a>

Per rimuovere un socket di invio associato a un account della piattaforma Exchange, utilizza la chiamata API di configurazione dell’account Exchange in questione per modificare l’ID del tuo socket di invio con l’ID del server di invio della tua piattaforma Exchange:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `primaryEmailAddress` : inserisci uno degli indirizzi email del tuo servizio Exchange, da cui vuoi scollegare il connettore di invio.
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".
- `Account` : inserisci le informazioni relative all’indirizzo email inserito nella casella "primaryEmailAddress". Ci concentreremo solo sulle linee relative al connettore di invio.
    - `sendConnectorId`: immettere "0" per definire l'ID del server di invio della piattaforma Exchange.
    - Selezionare la casella di controllo `deleteVirus` (se non è già selezionata) per non visualizzare un errore.

Il risultato restituito è il seguente:

``` console
{
    null
}
```

### Impostare un connettore di invio come server di invio predefinito <a name="defaultconnector"></a>

Ogni volta che aggiungi un account Exchange sulla tua piattaforma, è possibile associare automaticamente un connector di invio. In questo modo, tutti gli account che saranno aggiunti passeranno di default al connector di invio che avrai definito.

Per farlo, utilizza questa chiamata API:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName` : inserisci il nome del tuo servizio Exchange nel formato "private-zz111111-1" o "dedicated-zz111111-1".
- `exchangeService` : inserisci il nome della piattaforma Exchange che si presenta sotto forma "private-zz111111-1" o "dedicated-zz11111-1".
- `domainName` : inserisci il dominio che usufruirà del connector d'invio.
- `sbrDefault `: lasciare vuoto.
- `sendConnectorIdDefault` - Inserire l'ID del connettore di invio, ottenuto come numero in [questa fase](#idconnector).

Il risultato restituito è il seguente:

``` console
{
    null
}
```

> [!warning]
>
> Per ridefinire il server di invio predefinito per la piattaforma Exchange, digitare "0" nella casella `sendConnectorIdDefault`.

### Elenchi di altre chiamate API relative a connettori di invio <a name="apilist"></a>

- Recupera i connettori di invio già creati su un servizio Exchange:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Elimina un connettore di invio esistente:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Recupera i dettagli di un connettore di invio esistente:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Modifica un connettore di invio esistente:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Modificare il metodo di autenticazione di un connettore di invio esistente:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Per saperne di più

['Modificare una zona DNS](/pages/web_cloud/domains/dns_zone_edit)

[Aggiungere un dominio su Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
