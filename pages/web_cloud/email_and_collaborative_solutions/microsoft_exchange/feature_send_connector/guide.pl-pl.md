---
title: Konfiguracja łącznika wysyłania na platformie Private lub Trusted Exchange
excerpt: Dowiedz się, jak dodać łącznik do wysyłki SMTP do platformy Exchange OVHcloud
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

## Wprowadzenie

Dodanie do platformy Exchange łącznika do wysyłki SMTP umożliwia, w przypadku jednego lub kilku kont e-mail Exchange, wysyłanie wiadomości e-mail przy użyciu zewnętrznego serwera poczty wychodzącej do platformy Exchange. Może być wykorzystywany na przykład w kampaniach masowej wysyłki e-maili lub do korzystania z zewnętrznego rozwiązania antyspamowego. Tylko adresy e-mail przypisane do łącznika przesyłania będą go używać.

**Dowiedz się, jak skonfigurować łącznik wysyłania na platformie Private Exchange.**

**Przykład**

Adres e-mail **newsletter@mydomain.ovh** jest dołączony do konektora wysyłkowego (Send Connector) skonfigurowanego na platformie Exchange. Adres **contact@mojadomena.ovh** nie jest przypisany do łącznika wysyłania.

![send connector](images/send-connector01.png){.thumbnail}

Poniżej przedstawiamy kontekst dla powyższego schematu:

- **contact@mydomain.ovh** wysyła wiadomość na adres **mary.johnson@guides.ovh**: to klasyczna wysyłka, ponieważ łącznik wysyłania nie został dołączony do adresu **contact@mydomain.ovh**. **mary.johnson@guides.ovh** otrzymuje zatem e-mail z serwera wysyłającego platformy Exchange (*Outgoing mail server*).
- **newsletter@mydomain.ovh** wyśle wiadomość na adres **john.smith@guides.ovh**: **newsletter@mydomain.ovh** został dołączony do łącznika wysyłania, **john.smith@guides.ovh** otrzyma e-mail od serwera wysyłającego łącznik (*Send Connector*) skonfigurowany na platformie Exchange.

## Wymagania początkowe

- Wykupienie platformy [Private Exchange OVHcloud](/links/web/emails-private-exchange) lub [Trusted Exchange OVHcloud](/links/web/emails-trusted-exchange).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Zalogowanie do [API OVHcloud](https://api.ovh.com/).
- Posiadanie parametrów niezbędnych do skonfigurowania łącznika przesyłania. Skontaktuj się z dostawcą, który dostarcza Ci usługę.

## W praktyce

Konfiguracja łącznika wysyłania odbywa się w 3 krokach.

- [1. Dodaj łącznik wysyłania do swojej platformy](#addconnector): Wpisujesz parametry łącznika wysyłkowego, które otrzymałeś od Twojego dostawcy.
- [2. Konfiguracja konta e-mail przy użyciu łącznika wysyłania](#addaddress): Podłączasz łącznik wysyłania do jednego lub kilku adresów e-mail, aby wysyłały one wiadomości przez ten łącznik podczas wysyłania.
- [3. Sprawdź, czy Twój adres e-mail używa łącznika wysyłania](#checkheader) : realizuj wysyłkę z adresu e-mail skonfigurowanego za pomocą łącznika i pobierz nagłówek e-maila z adresu e-mail odbioru, aby sprawdzić, czy e-mail został prawidłowo przesłany przez łącznik wysyłania.

W tym przewodniku znajdziesz również inne przydatne operacje dotyczące łączników przesyłania.

- [Usuwanie łącznika wysyłania powiązanego z adresem e-mail](#removeaddress)
- [Ustaw łącznik przesyłania jako domyślny serwer wysyłania](#defaultconnector)
- [Listy innych wywołań API związanych z łącznikami przesyłania](#apilist)

### Dodaj łącznik wysyłania do platformy Exchange <a name="addconnector"></a>

> [!warning]
>
> Dodanie łącznika wysyłki jest zarezerwowane i zaplanowane dla ofert [Private Exchange OVHcloud](/links/web/emails-private-exchange) i [Trusted Exchange OVHcloud](/links/web/emails-trusted-exchange). Jeśli włączysz łącznik przesyłania w ofercie Exchange OVHcloud innej niż wyżej wymieniona, może to spowodować wyłączenie go przez naszych administratorów w dowolnym momencie ze względów bezpieczeństwa.

Przed rozpoczęciem przygotuj poniższe informacje. Są one dostarczane przez dostawcę łącznika nadawczego.

- adres serwera poczty wychodzącej (SMTP)
- port używany do wysyłki (przykład: 587)
- Przypisana nazwa użytkownika (na przykład: adres e-mail) , **może być opcjonalna w zależności od konektora wysyłkowego**.
- Hasło powiązane z nazwą użytkownika **może być opcjonalne w zależności od konektora nadawcy**.

Następnie zaloguj się do API OVHcloud za pomocą danych identyfikacyjnych. Skorzystaj z naszego przewodnika [Pierwsze kroki z API OVHcloud ](pages/manage_and_operate/api/first-steps).

Aby dodać łącznik wysyłania do platformy Exchange, użyj następującego wywołania API.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `exchangeService` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `displayName` : wyświetlana nazwa łącznika przesyłania.
- `maxSendSize` : maksymalny rozmiar w MB wiadomości e-mail podczas wysyłki (maksymalnie , jeśli nic nie wkładasz).
- `password` : hasło przypisane do użytkownika łącznika wysyłania.
- `port` : port używany do wysyłki.
- `requireTLS` : używaj protokołu zabezpieczeń TLS podczas wysyłania.
- `smartHost` : adres łącznika wysyłania (SMTP).
- `smartHostAuthMechanism` : mechanizm uwierzytelniania używany dla łącznika przesyłania.
- `user` : użytkownik skojarzony z łącznikiem przesyłania.

Otrzymujesz ten rodzaj wyniku:

``` console
{
    todoDate: "2023-09-:06:02+02:00"
    ID: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Po utworzeniu łącznika przesyłania, użyj następującego wywołania API, aby pobrać jego ID (identyfikator).

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `exchangeService` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".

Otrzymujesz ten rodzaj wyniku:

``` console
[
    29
]
```

Szczegółowe informacje na temat konektora poczty wychodzącej można znaleźć za pomocą tego API: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `id` : wprowadź ID łącznika wysyłania, otrzymany jako numer na poprzednim etapie.
- `exchangeService` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".

Otrzymujesz ten rodzaj wyniku:

``` console
{
    smartHost: "smtp-relay.example.com"
    displayName: "testconnector"
    State: "OK"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    Port: 587
    lastUpdateDate: null
    Data utworzenia: "2023-09-:06:02+02:00"
    taskPendingId: 0
    ID: 29
    requireTLS: true
}
```

### Konfiguracja adresu e-mail w celu użycia łącznika przesyłania <a name="addaddress"></a>

Aby móc wysyłać e-maile za pomocą łącznika wysyłania, należy powiązać go z jednym lub kilkoma adresami e-mail.

Skorzystaj z wywołania API konfiguracji konta Exchange, aby dodać identyfikator łącznika wysyłania do konta e-mail:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `primaryEmailAddress` : wprowadź jeden z adresów e-mail na platformie Exchange, do którego chcesz przypisać łącznik przesyłania.
- `exchangeService` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `Account` : Tutaj wprowadzane są informacje związane z adresem e-mail. **Przyjrzymy się tylko wierszowi dotyczącemu łącznika wysyłania**.
    - `sendConnectorId` : wprowadź ID łącznika wysyłania, otrzymany jako numer na poprzednim [etapie](#idconnector).
    - Zaznacz pole `deleteVirus` (jeśli nie jest jeszcze zaznaczone), aby nie wyświetlało się błąd podczas wykonywania wywołania API

Otrzymasz następujący wynik:

``` console
{
    null
}
```

### Testuj łącznik wysyłania <a name="checkheader"></a>

Jeśli Twoja konfiguracja jest zgodna z informacjami przekazanymi przez dostawcę łącznika wysyłania, Twój adres e-mail będzie wysyłał wiadomości e-mail za pomocą tego łącznika wysyłania. Nie musisz wykonywać specjalnych czynności podczas wysyłki, wystarczy wysłać z adresu lub adresów e-mail przypisanych do łącznika wysyłki.

Aby przetestować wysyłkę, wyślij wiadomość e-mail z adresu, który jest dołączony do łącznika wysyłania na wybrany adres testowy, który możesz sprawdzić. Po wysłaniu testowej wiadomości e-mail zaloguj się na adres odbiorcy i sprawdź nagłówek e-maila, aby sprawdzić, czy wysyłka została poprawnie zakończona za pomocą łącznika wysyłania. Jeśli potrzebujesz, zapoznaj się z przewodnikiem [Pobieranie nagłówka wiadomości e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Przykładowy nagłówek**

Adres e-mail **newsletter@mojadomena.pl** wysyła wiadomość na adres **john.smith@guides.ovh**. Adres e-mail **newsletter@mydomain.ovh** został dołączony do łącznika poczty. Konektor poczty wychodzącej ma dla domeny **sender-id.example.com**

Poniżej przykład nagłówka wiadomości e-mail wysłanej z serwera Private Exchange, który używa łącznika wysyłania, w powyższym kontekście:

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

### Usuwanie łącznika wysyłania powiązanego z adresem e-mail <a name="removeaddress"></a>

Aby usunąć łącznik poczty wychodzącej przypisany do konta z platformy Exchange, skorzystaj z wywołania API konfiguracji odpowiedniego konta Exchange, w celu zmiany identyfikatora łącznika wysyłki na ID serwera poczty wychodzącej z platformy Exchange:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName`: podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `primaryEmailAddress` : wprowadź jeden z adresów e-mail na platformie Exchange, od którego chcesz odłączyć łącznik przesyłania.
- `exchangeService`: podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `Account`: w tym miejscu uzupełnij informacje dotyczące adresu e-mail podanego w polu "primaryEmailAddress". Przyjrzymy się tylko liniom związanym ze złączem wysyłania.
    - `sendConnectorId`: wprowadź "0", aby zdefiniować identyfikator serwera poczty wychodzącej platformy Exchange.
    - Zaznacz pole wyboru `deleteVirus` (jeśli nie jest jeszcze zaznaczone), aby nie wyświetlało się błąd.

Otrzymasz następujący wynik:

``` console
{
    null
}
```

### Ustaw łącznik przesyłania jako domyślny serwer wysyłania <a name="defaultconnector"></a>

Za każdym razem, gdy dodajesz konto Exchange na Twojej platformie, możesz automatycznie dołączyć łącznik wysyłania. Dzięki temu wszystkie konta, które zostaną dodane, będą domyślnie ustawione przez łącznik przesyłania.

W tym celu użyj następującego wywołania API:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `exchangeService` : podaj nazwę platformy Exchange w formie "private-zz111111-1" lub "dedicated-zz11111-1".
- `domainName` : wprowadź nazwę domeny, której będzie przysługiwać łącznik wysyłania.
- `sbrDefault` : pozostaw puste.
- `sendConnectorIdDefault` : wprowadź ID łącznika wysyłania, otrzymany jako numer na [tym etapie](#idconnector).

Otrzymasz następujący wynik:

``` console
{
    null
}
```

> [!warning]
>
> Aby zresetować domyślny serwer poczty wychodzącej w platformie Exchange, wpisz "0" w polu `sendConnectorIdDefault` w polu.

### Listy innych wywołań API związanych z łącznikami przesyłania <a name="apilist"></a>

- Pobierz wtyczki przesyłania utworzone w ramach usługi Exchange:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Usuń istniejący łącznik przesyłania:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Pobierz szczegóły istniejącego łącznika przesyłania:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Edytuj istniejący łącznik przesyłania:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Zmień metodę uwierzytelniania istniejącego łącznika przesyłania:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Sprawdź również

[Edycja strefy DNS OVH.](/pages/web_cloud/domains/dns_zone_edit)

[Dodanie domeny do usługi Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
