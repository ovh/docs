---
title: "Poprawa bezpieczeństwa e-maili dzięki rejestracji DKIM"
excerpt: "Dowiedz się, jak skonfigurować rekord DKIM w Twojej domenie i platformie e-mail OVHcloud"
updated: 2024-07-05
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
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Wpis DKIM (**D**omain**K**eys **I**dentified **M**ail) pozwala na podpisanie e-maili, aby uniknąć kradzieży tożsamości. Podpis ten działa na zasadzie mielenia połączonego z asymetryczną kryptografią.

**Dowiedz się, jak działa DKIM i jak go uruchomić dla usługi e-mail.**

## Wymagania początkowe

- Posiadanie dostępu do interfejsu zarządzania domeną w [Panelu klienta OVHcloud](/links/manager) lub u operatora domeny, jeśli jest zarejestrowany poza OVHcloud.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Wykupienie jednej z ofert e-mail:
    - "E-maile" (MX Plan) OVHcloud. Jest ona dostępna w ramach [oferty hostingu Cloud](/links/web/hosting), [bezpłatny hosting 100M](/links/web/domains-free-hosting) lub w ramach oferty MX Plan zamówionej oddzielnie.
    - [Exchange](/links/web/emails-hosted-exchange) lub [Private Exchange](/links/web/emails-hosted-exchange).
    - [E-mail Pro](/links/web/email-pro).
    - Oferta e-mail poza OVHcloud z DKIM.

> [!warning]
>
> Jeśli Twoja domena nie używa serwerów DNS OVHcloud, przeprowadź zmianę DKIM w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić, czy używa ona konfiguracji OVHcloud w [Panelu klienta](/links/manager) w zakładce `Strefa DNS`{.action}, po wybraniu domeny.
>

## W praktyce

**Spis treści**

- [Jak działa DKIM?](#how-dkim-work)
    - [Mieszanie](#hash)
    - [Szyfrowanie asymetryczne](#encrypt)
    - [W jaki sposób stosowane są szyfrowanie i szyfrowanie asymetryczne?](#encrypt-and-hash)
    - [Dlaczego trzeba skonfigurować serwery DNS?](#dns-and-dkim)
    - [Przykład e-maila wysłanego z wykorzystaniem DKIM](#example)
    - [Co to jest selekcja DKIM?](#selector)
- [Automatyczna konfiguracja DKIM dla oferty e-mail Exchange lub E-mail Pro OVHcloud](#auto-dkim)
- [Ręczna konfiguracja DKIM dla oferty e-mail Exchange lub E-mail Pro OVHcloud](#internal-dkim)
    - [Kompletna konfiguracja DKIM](#firststep)
        - [Dla E-maili (MX Plan)](#confemail)
        - [Dla usługi Exchange](#confex)
        - [Dla E-mail Pro](#confemp)
    - [Poszczególne państwa DKIM](#status)
    - [Włącz lub zmień selekcję DKIM](#enable-switch)
    - [Wyłącz i usuń DKIM](#disable-delete)
- [Konfiguracja DKIM w przypadku oferty e-mail poza Twoim kontem OVHcloud](#external-dkim)
    - [Rejestracja DKIM](#dkim-record)
    - [Rejestracja TXT](#txt-record)
    - [Rejestracja CNAME](#cname-record)
- [Przetestuj DKIM](#test-dkim)
- [Przykłady zastosowań](#usecases)
    - [Jak zmienić parę kluczy DKIM?](#2selectors)
    - [Dlaczego ikona DKIM jest zaznaczona na czerwono w Panelu klienta?](#reddkim)
    - [W interfejsie API OVHcloud, jak zrozumieć stan DKIM, który nie działa?](#api-error)

### Jak działa DKIM? <a name="how-dkim-work"></a>

Aby w pełni zrozumieć, dlaczego DKIM pozwala na zabezpieczenie wymiany wiadomości e-mail, należy zrozumieć, jak działa. DKIM używa "**hakowania**" i "**szyfrowania asymetrycznego**" do utworzenia bezpiecznego podpisu. **Platforma e-mail** oraz **Strefa DNS** Twojej domeny pomogą w przekazywaniu informacji z DKIM do Twoich odbiorców.

#### Mieszanie <a name="hash"></a>

Zasadą **funkcji mielenia** jest wygenerowanie **podpisu** (zwanego również odciskiem palca) na podstawie danych wejściowych. W tym celu twórz na samym początku zestaw znaków stałych, niezależnie od ilości danych wejściowych. 

Na poniższym schemacie można zobaczyć, że wyjście (Output) będzie zawsze składać się z 32 znaków przy użyciu algorytmu hakowania MD5 (**M**essage **D**igest **5**), podczas gdy tekst wejściowy (Input) może się zmieniać w zależności od wielkości. Najmniejsza zmiana charakteru danych wejściowych zmienia całkowicie rozdrabnianie na wyjściu, co sprawia, że wyjście sygnału jest nieprzewidywalne i niewykrywalne. W poniższym przykładzie wartość wejściowa (Input) została przeniesiona do algorytmu hakowania MD5 i prezentuje na wyjściu (Output) jej wartość skrótu.

![hash](/pages/assets/schemas/emails/dns-dkim-hash01.png){.thumbnail}

Funkcja siekania jest przydatna, gdy chcesz sprawdzić integralność wiadomości. Dwie dane, które mogą być bardzo podobne, mają zupełnie inną wartość hakowania przy równej długości wychodzącej znaków, niezależnie od długości wejścia.

#### Szyfrowanie asymetryczne <a name="encrypt"></a>

Szyfrowanie **danych**, jak sama nazwa wskazuje, ma na celu zaszyfrowanie ich danych. Jest "**asymetryczny**", ponieważ klucz szyfrujący nie jest taki sam jak klucz w przeciwieństwie do symetrycznego szyfrowania, które będzie używać tego samego klucza do szyfrowania i rozszyfrowania.

W asymetrycznym szyfrowaniu używamy **klucza publicznego** i **klucza prywatnego**. Klucz publiczny jest widoczny i możliwy do wykorzystania przez wszystkich. Klucz prywatny jest używany tylko przez właściciela i nie jest widoczny dla wszystkich. 

Istnieją dwa sposoby szyfrowania asymetrycznego:

- **Dane wejściowe są szyfrowane kluczem publicznym i odczytywane przez właściciela klucza prywatnego**. Na przykład chcesz, aby osoba trzecia przekazywała dane w bezpieczny sposób. Przekazujesz klucz publiczny, nie martwiąc się, że ktoś go odbierze, ta osoba trzecia zaszyfruje jego dane przy pomocy klucza publicznego. Dane liczbowe mogą być odczytywane wyłącznie przez właściciela klucza prywatnego.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto01.png){.thumbnail}

- **Dane wejściowe są szyfrowane przez właściciela klucza prywatnego i odczytywane kluczem publicznym**. To zastosowanie ma do uwierzytelnienia wymiany danych. Na przykład Twoi odbiorcy chcą mieć pewność, że jesteś autorem wiadomości, którą im przekazujesz. W takim przypadku szyfrujesz wiadomość kluczem prywatnym. Wiadomość ta może zostać odszyfrowana tylko przy użyciu klucza publicznego, który otrzymasz od każdego, co gwarantuje odbiorcom jej autentyczność. Faktycznie, wiadomość odszyfrowana kluczem publicznym może pochodzić wyłącznie od właściciela klucza prywatnego.

![hash](/pages/assets/schemas/emails/dns-dkim-crypto02.png){.thumbnail}

#### W jaki sposób stosowane są szyfrowanie i szyfrowanie asymetryczne? <a name="encrypt-and-hash"></a>

W ramach platformy e-mail DKIM będzie używać hakowania do tworzenia podpisu [z określonych elementów nagłówka e-maila](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) i treści e-maila (zawartość e-maila).

Podpis jest następnie szyfrowany kluczem prywatnym, używając asymetrycznego szyfrowania.

#### Dlaczego trzeba skonfigurować serwery DNS? <a name="dns-and-dkim"></a>

Aby odbiorca mógł zweryfikować podpis DKIM nadawcy, będzie potrzebował parametrów DKIM, a przede wszystkim klucza publicznego, aby go odszyfrować. [Strefa DNS](/pages/web_cloud/domains/dns_zone_general_information) domeny jest dostępna do wiadomości publicznej. W związku z tym dodano wpis DNS w celu przekazania odbiorcy klucza publicznego oraz parametrów DKIM.

#### Co to jest selekcja DKIM <a name="selector"></a>

Po włączeniu DKIM działa on z parą klucza publicznego / klucza prywatnego. Możesz przypisać kilka par kluczy do Twojej domeny, na przykład w trakcie rotacji. W przypadku zmiany pary kluczy stara para powinna pozostać aktywna tak długo, jak wszystkie e-maile wysłane przez Ciebie z dawnym kluczem nie poniosą porażki w weryfikacji DKIM na serwerze poczty przychodzącej.

Aby zasada rotacji działała, użyjemy tzw. **selektorów DKIM**. Wybieracz DKIM zawiera parę klucza prywatnego/klucza publicznego. Jest on widoczny w postaci łańcucha znaków w podpisze DKIM w wiadomości e-mail przez argument `s=`. Podpis ten jest widoczny [w nagłówku wiadomości e-mail](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Przykład części podpisu DKIM**

<pre class="bgwhite"><code>DKIM-Podpis: v=1; a=rsa-sha256; d=mydomain.ovh; s=ovhex123456-selector1; c=relaxed/relaxed; t=1681877341; 
</code></pre>

Wartość selektora jest tutaj `s=ovhex123456-selector1`.

#### Przykład e-maila wysłanego z wykorzystaniem DKIM <a name="example"></a>

Gdy wysyłasz e-mail z **contact@mydomain.ovh**, szyfrowany podpis z kluczem prywatnym (private key) zostanie dodany do nagłówka wiadomości.

![email](/pages/assets/schemas/emails/dns-dkim-send.gif){.thumbnail}

Odbiorca **recipient@otherdomain.ovh** będzie mógł odszyfrować ten podpis kluczem publicznym (Public key) widocznym w strefie DNS **mydomain.ovh**. Podpis jest tworzony na podstawie zawartości wysłanego e-maila. Oznacza to, że jeśli e-mail zostanie zmieniony podczas tranzytu, podpis nie będzie odpowiadał treści i spowoduje to niepowodzenie weryfikacji DKIM na serwerze docelowym.

![email](/pages/assets/schemas/emails/dns-dkim-receive.gif){.thumbnail}

### Automatyczna konfiguracja DKIM dla usługi e-mail Exchange lub E-mail Pro OVHcloud <a name="auto-dkim"></a>

> [!primary]
>
> Jeśli posiadasz ofertę "E-maile" (MX Plan) zawartą w ofercie [Hosting Web Cloud](/links/web/hosting), [bezpłatny hosting 100M](/links/web/domains-free-hosting) lub zamówioną oddzielnie, przejdź do etapu "[Skonfiguruj DKIM ręcznie dla oferty e-mail OVHcloud](#internal-dkim)".

Automatyczna konfiguracja DKIM jest dostępna dla ofert e-mail [Exchange](/links/web/emails-hosted-exchange) i [E-mail Pro](/links/web/email-pro).

Domyślnie DKIM nie jest aktywowany podczas dodawania domeny do platformy. Dlatego rozpocznij proces automatycznej konfiguracji w Panelu klienta.

Kliknij na zakładkę odnoszącą się do Twojej oferty.

> [!tabs]
> **Exchange**
>>
>> W [Panelu klienta OVHcloud](/links/manager) w zakładce `Web Cloud`{.action} kliknij na `Microsoft`{.action}, a następnie na `Exchange`{.action}. Kliknij wybraną nazwę usługi Exchange. Na koniec przejdź do zakładki `Przypisane domeny`{.action}.
>>
>> Po prawej stronie wybranej domeny, możesz zauważyć, że przycisk `DKIM` jest szary.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/pl/&ovhSubsidiary=pl) w zakładce `Web Cloud`{.action} kliknij `E-mails Pro`{.action}, a następnie nazwę danej usługi E-mail Pro. Na koniec przejdź do zakładki `Przypisane domeny`{.action}.
>>
>> Po prawej stronie wybranej domeny, możesz zauważyć, że przycisk `DKIM` jest szary.
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto01.png){.thumbnail}

Aby aktywować DKIM, wystarczy kliknąć szary przycisk `DKIM`, a następnie `Zatwierdź`{.action} w oknie aktywacyjnym, które się pojawi.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto02.png){.thumbnail}

Automatyczna aktywacja DKIM trwa od 30 minut do maksymalnie 24 godzin. Aby sprawdzić, czy DKIM działa, wróć do zakładki `Powiązane domeny`{.action} Twojej platformy e-mail i upewnij się, że przycisk `DKIM` zmienił kolor na zielony.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-auto03.png){.thumbnail}

Po upływie 24 godzin, jeśli Twój przycisk `DKIM` jest czerwony, zapoznaj się z rubryką ["Dlaczego DKIM nie działa i wyświetla się w Panelu klienta na czerwono?"](#reddkim) niniejszego przewodnika.

### Ręczna konfiguracja DKIM dla oferty e-mail Exchange lub E-mail Pro OVHcloud <a name="internal-dkim"></a>

W przypadku platformy Exchange lub E-mail Pro należy najpierw pobrać numer referencyjny platformy, aby skonfigurować DKIM.

Kliknij kartę poniżej odnoszącą się do Twojej oferty.

> [!tabs]
> **Exchange**
>>
>> W [Panelu klienta OVHcloud](/links/manager) w zakładce `Web Cloud`{.action} kliknij `Microsoft`{.action}, a następnie `Exchange`{.action}. Następnie kliknij nazwę odpowiedniej usługi Exchange. Domyślnie nazwa Twojej platformy odpowiada jej nazwie lub będzie widoczna pod przypisaną jej nazwą (patrz obrazek poniżej).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/general-information/dns-dkim-platform-exchange.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> W [Panelu klienta OVHcloud](/links/manager) w zakładce `Web Cloud`{.action} kliknij `E-mail Pro`{.action}, a następnie nazwę odpowiedniej usługi E-mail Pro. Domyślnie nazwa Twojej platformy odpowiada jej nazwie lub będzie widoczna pod przypisaną jej nazwą (patrz obrazek poniżej).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/email-pro/general-information/dns-dkim-platform-emailpro.png){.thumbnail}

Upewnij się również, czy domena, której chcesz używać do obsługi e-maili jest aktywna w sekcji `Powiązane domeny`{.action}.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dns-dkim-domain.png){.thumbnail}

#### Kompletna konfiguracja DKIM <a name="firststep"></a>

Aby skonfigurować DKIM, wejdź na stronę <https://api.ovh.com/console/> WWW, zaloguj się przyciskiem `Login`{.action} w prawym górnym rogu i wprowadź dane identyfikacyjne OVHcloud.

> Skorzystaj z naszego przewodnika "[Dowiedz się, jak korzystać z API OVHcloud](/pages/manage_and_operate/api/first-steps)", jeśli nigdy wcześniej nie korzystałeś z API.

Przejdź do sekcji`/email/domain/` (oferty E-mail (MXplan)), `/email/exchange` (oferty Exchange) lub`/email/pro` (oferta E-mail Pro) interfejsów API i wpisz "dkim" w polu `Filter`, aby wyświetlić tylko API związane z DKIM.

Kliknij zakładkę odnoszącą się do Twojej oferty:

> [!tabs]
> **E-maile (MX Plan)**
>>
>> ![email](/pages/assets/screens/api/get-email-domain-domain-dkim.png){.thumbnail}
>>
> **Exchange**
>>
>> ![email](/pages/assets/screens/api/get-email-exchange-organizationname-service-exchangeservice-domain-domainname-dkim.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> ![Email](/pages/assets/screens/api/get-email-pro-service-domain-domainname-dkim.png){.thumbnail}
>>

#### **Dla E-maili (MX Plan)** <a name="confemail"></a>

Postępuj zgodnie z instrukcjami **5 kroków**, klikając kolejno na 5 poniższych zakładek:

> [!tabs]
> **1. Włącz DKIM dla swojej domeny**
>> Aby włączyć DKIM dla Twojej nazwy domeny, użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain` : wprowadź nazwę domeny przypisanej do Twojej usługi E-mail, na której chcesz aktywować DKIM.
>>
>> Kliknij na `TRY`{.action}, aby rozpocząć aktywację.<br>
>>
>> *Przykład wyniku:*
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
>> Należy uzyskać taki sam wynik, jak w powyższym przykładzie z adnotacją `"status": "todo"` wskazującą, że DKIM zostanie zainstalowany.
>>
> **2. Sprawdź stan operacji DKIM**
>> Po uruchomieniu procesu aktywacji DKIM sprawdź stan instalacji, aby upewnić się, że instalacja została zakończona lub aby pobrać rekordy DNS, jeśli Twoja strefa DNS jest zarządzana poza Panelem klienta OVHcloud.<br>
>>.
>> <br>
>> W tym celu użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain` : wprowadź nazwę domeny powiązanej z Twoją usługą E-mail.<br>
>> <br>
>> Kliknij na `TRY`{.action}, aby wyświetlić wynik.<br>
>>
>> *Przykład wyniku:*
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
>>
>> W powyższym przykładzie ostatni wiersz stanu `"status": "modifying"` oznacza, że trwa konfiguracja. Zaczekaj około **10 minut** i ponownie wywołaj API.
>>
>> - Jeśli wartością jest `"status": "enabled"`, konfiguracja jest ukończona i działa.
>> - Jeśli wartością jest `"status": "disabled"`, konfiguracja powinna zostać uzupełniona ręcznie, przejdź do następnego etapu.
>>
> **3. Pobierz rekord DNS**
>> Należy ręcznie skonfigurować strefę DNS domeny **w następujących przypadkach**:
>>
>> - Twoja usługa E-mail jest powiązana z nazwą domeny, która jest zarządzana na innym koncie klienta OVHcloud;
>> - Twoja usługa E-mail jest powiązana z nazwą domeny, która jest zarządzana u innego operatora.
>>
>> Aby skonfigurować strefę DNS, musisz pobrać wartości z rekordu DNS **obu selektorów**. W tym celu użyj wyniku wywołania API z poprzedniego kroku:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>> >
>>
>> - `domain` : wprowadź nazwę domeny powiązanej z Twoją usługą E-mail.
>>
>> Kliknij na `TRY`{.action}, aby wyświetlić wynik.
>>
>> *Przykład wyniku:*
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
>> Wartości `"status": "toSet"` i `"status": "disabled"` oznaczają, że rekordy CNAME muszą zostać skonfigurowane. Pobierz 2 wartości `cname` w pliku tekstowym i przejdź do następnego etapu.
>>
> **4. Skonfiguruj rekord DNS**
>> W [Panelu klienta OVHcloud](/links/manager), gdzie jest zainstalowana nazwa domeny Twojej usługi e-mail, w zakładce `Web Cloud`{.action} kliknij `Domeny`{.action} w kolumnie z lewej strony i wybierz odpowiednią domenę.<br>
>> Przejdź do zakładki `Strefa DNS`{.action} i kliknij `Dodaj rekord`{.action} w oknie, które się wyświetli. Wybierz `CNAME` i uzupełnij zgodnie z podanymi wartościami.
>>
>> Jeśli rozłożymy wartości z przykładu na krok "**3. Pobierz rekord DNS**":
>>
>> - `ovhmo3456789-selector1._domainkey.mydomain.ovh` to subdomena rekordu CNAME. Zachowasz tylko `ovhmo3456789-selector1._domainkey`, ponieważ domena`` jest już wstępnie napełniona. <br>
>> - `ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.` odnosi się do celu rejestracji. Należy pozostawić kropkę na końcu, aby nadać wartość.<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api022.png){.thumbnail}
>>
>> Po wpisaniu wartości kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.
>>
>> > [!primary]
>> >
>> > **Powtórz tę operację dla drugiego selektora.**
>>
>> Jeśli skonfigurujesz Twoją strefę DNS w interfejsie innym niż OVHcloud, rekord CNAME musi mieć następującą postać:
>>
>> ```console
>> ovhmo3456789-selector1._domainkey IN CNAME ovhmo3456789-selector1._domainkey.123403.aj.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Pamiętaj, że zmiana w strefie DNS podlega limitowi czasu propagacji. Zazwyczaj jest krótki, ale może trwać do 24 godzin.
>>
> **5. Aktywacja DKIM**
>>
>> Po propagacji konfiguracji DNS ponownie użyj następującego wywołania API, aby aktywować DKIM:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/enable
>>
>> - `domain` : wprowadź nazwę domeny przypisanej do twojej usługi e-mail, na której chcesz aktywować DKIM.
>>
>> Kliknij na `TRY`{.action}, aby rozpocząć aktywację.<br>
>>
>> *Przykład wyniku:*
>>
>> ```console
>> {
>> "selectors": [
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
>> ],
>> "activeSelector": "ovhmo3465680-selector1",
>> "autoconfig": true,
>> "status": "enabled"
>> }
>> ```
>>
>> - Jeśli zauważysz wartości `"status": "set"` na 2 selektorach, oznacza to, że są one poprawnie skonfigurowane.
>> - Jeśli zauważysz wartości `"status": "toSet"` dla 2 selektorów, oznacza to, że zmiany DNS nie są widoczne. Przejdź do zakładki "**4. Konfiguracja rekordu DNS**".
>> - Jeśli zauważysz wartości `"status": "toFix"` dla 2 selektorów, oznacza to, że rekordy CNAME zostały poprawnie wykryte w strefie DNS Twojej domeny, ale ich wartości są nieprawidłowe. Przejdź do zakładki "**4. Konfiguracja rekordu DNS**".
>>
>> > [!success]
>> >
>> > Wykonano teraz wszystkie operacje, aby aktywować DKIM. Aby upewnić się, że jest ono włączone, sprawdź jego stan, wracając do karty kroku "**2. Sprawdź stan operacji DKIM**", aby sprawdzić, czy wartość `status:` jest w `enabled`. Jeśli tak jest, Twój DKIM jest już aktywny.
>>

##### **Dla usługi Exchange** <a name="confex"></a>

Postępuj zgodnie z **5 krokami** poniżej, klikając na każdą z zakładek.

> [!tabs]
> **1. Lista sektorów**
>> Przed utworzeniem jednego z wybranych parametrów Twojej domeny, pobierz nazwę nadaną im automatycznie przez platformę Exchange.<br>
>> <br>
>> W tym celu użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkimSelector
>> >
>> <br>
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, którą chcesz aktywować DKIM. <br>
>>
>> *Przykład wyniku:*
>>
>> ```console
>> "ovhex123456-selector1"
>> "ovhex123456-selector2"
>> ```
>>
> **2. Utwórz wyłącznik**
>> Teraz utworzysz wyłącznik, wygeneruj parę kluczy i rekord DNS przypisany do domeny.<br>
>> <br>
>> W tym celu użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, dla której chcesz włączyć DKIM.
>> - `selectorName`: wpisz nazwę wybranego przełącznika na poprzednim etapie (przykład: "ovhex123456-selector1"). <br>
>>
>> Kliknij polecenie `Wykonaj`{.action}, aby rozpocząć tworzenie wyboru.<br>
>> 
>> > [!primary]
>> >
>> > Zalecamy wykonanie tej operacji dwukrotnie dla każdego z wcześniej wymienionych selektorów. Drugi selektor umożliwi zmianę pary kluczy, gdy będzie to konieczne. Zapoznaj się z przykładem zastosowania ["Jak zmienić parę kluczy DKIM"](#2selectors), gdy chcesz przełączyć się na drugi selektor.
>> <br>
>>
>> *Przykład wyniku:*
>>
>> ```console
>> status: "todo",
>> function: "addExchangeDomainDKIM",
>> id: 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. Pobierz rekord DNS**
>> Należy ręcznie skonfigurować strefę DNS Twojej domeny **w następujących** przypadkach:
>>
>> - Twoja platforma Exchange jest powiązana z domeną zarządzaną na innym koncie klienta OVHcloud;<br>
>> - Twoja platforma Exchange jest powiązana z domeną zarządzaną w innym urzędzie;<br>
>>
>> Aby skonfigurować strefę DNS, pobierz wartości rekordu DNS **dla każdego selektora, jeśli utworzono dwa**. W tym celu użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który utworzyłeś na poprzednim etapie.
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, na której chcesz skonfigurować DKIM.
>>
>> *Przykład wyniku:*
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
>> Pobierz wartości `customerRecord` i `targetRecord` w pliku tekstowym. Przejdź do następnego etapu.
>>
>> > [!primary]
>> >
>> > Możliwe, że `status:` lub w `todo` nie ma to wpływu na konfigurację strefy DNS.
>>
> **4. Konfiguracja rekordu DNS**
>> Z [strefy klienta OVHcloud](/links/manager), gdzie nazwa Twojej domeny Exchange, w zakładce `Web Cloud`{.action} kliknij `Nazwy domen`{.action} w lewej kolumnie i wybierz odpowiednią nazwę domeny.<br>
>> Przejdź do zakładki `Strefa DNS`{.action}, następnie kliknij `Dodaj rekord`{.action} w oknie, które się wyświetli. Wybierz `CNAME` i uzupełnij zgodnie z podanymi przez Ciebie wartościami.<br>
>>
>> Jeśli weźmiemy wartości z przykładu na etapie "**3. Pobierz rekord DNS**":
>>
>> - `customerRecord: "ovhex123456-selector1._domainkey.mydomain.ovh"` odpowiada subdomenie rekordu CNAME. Otrzymujemy tylko `ovhex123456-selector1._domainkey`, ponieważ `.mydomain.ovh` est jest już wstępnie wypełniony. <br>
>> - `targetRecord: "ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` to cel rejestracji. Dodajemy kropkę na końcu, aby zmienić tą wartość. To jest `ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail} <br>
>>
>> Po wpisaniu wartości kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.
>>
>> **Powtórz tę operację dla drugiego selektora, jeśli został utworzony.**<br>
>>
>> Jeśli skonfigurujesz strefę DNS w interfejsie trzecim poza OVHcloud, rekord CNAME musi mieć następującą formę:
>>
>> ```console
>> ovhex123456-selector1._domainkey IN CNAME ovhex123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Pamiętaj, że zmiana w strefie DNS podlega okresowi propagacji. Jest to zwykle krótki, ale może trwać do 24 godzin.
>>
> **5. Aktywacja DKIM**
>> > [!warning]
>> >
>> > W sekcji [**Poszczególne stany DKIM**](#dkim-status) w tym przewodniku sprawdź, czy wartość `status:` jest w `ready`, zanim uruchomi DKIM.
>>
>> Aby włączyć DKIM, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `selectorName`: wprowadź nazwę wybranego przełącznika.
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, dla której chcesz włączyć DKIM.
>>
>> *Przykład wyniku:*
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
>> > Wykonałeś teraz wszystkie operacje, aby aktywować DKIM. Aby upewnić się, że konfiguracja jest aktywna, zapoznaj się z sekcją [**"Różne stany DKIM"**](#dkim-status) w tym przewodniku, aby sprawdzić, czy wartość `status:` jest w `inProduction`. Jeśli tak jest, Twój DKIM jest teraz aktywny.<br><br> **Jeśli utworzyłeś dwa selektory**, drugi selektor powinien być w `status: "ready"`.
>>

##### **Dla E-mail Pro** <a name="confemp"></a>

Postępuj zgodnie z **5 krokami** poniżej, klikając na każdą z zakładek.

> [!tabs]
> **1. Lista sektorów**
>> Przed utworzeniem jednego z wybranych parametrów Twojej domeny, pobierz nazwę nadaną im automatycznie przez platformę E-mail Pro.<br>
>> <br>
>> W tym celu użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>> <br>
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, którą chcesz aktywować DKIM. <br>
>>
>> *Przykład wyniku:*
>>
>> ```console
>> "ovhemp123456-selector1"
>> "ovhemp123456-selector2"
>> ```
>>
> **2. Utwórz wyłącznik**
>> Teraz utworzysz wyłącznik, wygeneruj parę kluczy i rekord DNS przypisany do domeny.<br>
>>
>> > [!primary]
>> >
>> > Zalecamy wykonanie tej operacji dwukrotnie dla każdego z wcześniej wymienionych selektorów. Drugi selektor umożliwi zmianę pary kluczy, gdy będzie to konieczne. Zapoznaj się z przykładem zastosowania ["Jak zmienić parę kluczy DKIM"](#2selectors).
>> <br>
>> W tym celu użyj następującego wywołania API:<br>
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, dla której chcesz włączyć DKIM.
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który zaznaczyłeś na poprzednim etapie. (przykład: "ovhemp123456-selector1") <br>
>>
>> Kliknij polecenie `Wykonaj`{.action}, aby rozpocząć tworzenie wyboru.<br>
>>
>> > [!primary]
>> >
>> > Zalecamy wykonanie tej operacji dwukrotnie dla każdego z wcześniej wymienionych selektorów. Drugi selektor umożliwi zmianę pary kluczy, gdy będzie to konieczne. Zapoznaj się z przykładem zastosowania ["Jak zmienić parę kluczy DKIM"](#2selectors), gdy chcesz przełączyć się na drugi selektor.
>>
>> *Przykład wyniku:*
>>
>> ```console
>> status: "todo",
>> function: "addDomainDKIM",
>> id : 107924143,
>> "finishDate": null,
>> "todoDate": "2023-05-05T11:32:07+02:00"
>> ```
>>
> **3. Pobierz rekord DNS**
>> Należy ręcznie skonfigurować strefę DNS Twojej domeny **w następujących przypadkach**:
>>
>> - Twoja platforma E-mail Pro jest powiązana z domeną zarządzaną na innym koncie klienta OVHcloud;<br>
>> - Twoja platforma E-mail Pro jest powiązana z domeną zarządzaną w innym urzędzie rejestracji;<br>
>>
>> Aby skonfigurować strefę DNS, należy pobrać wartości z rekordu DNS **dla każdego selektora, jeśli utworzono dwie**. W tym celu użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1".
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który utworzyłeś na poprzednim etapie.
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Proe, dla której chcesz skonfigurować DKIM.
>>
>> *Przykład wyniku:*
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
>> Pobierz wartości `customerRecord` i `targetRecord` w pliku tekstowym. Przejdź do następnego etapu.
>>
>> > [!primary]
>> >
>> > Możliwe, że `status:` lub w `todo` nie ma to wpływu na konfigurację strefy DNS.
>>
> **4. Konfiguracja rekordu DNS**
>> Z [strefy klienta OVHcloud](/links/manager), gdzie nazwa Twojej domeny Platforma E-mail Pro, w zakładce `Web Cloud`{.action} kliknij `Nazwy domen`{.action} w lewej kolumnie i wybierz odpowiednią nazwę domeny.<br>
>> Przejdź do zakładki `Strefa DNS`{.action}, następnie kliknij `Dodaj rekord`{.action} w oknie, które się wyświetli. Wybierz `CNAME` i uzupełnij zgodnie z podanymi przez Ciebie wartościami.<br>
>>
>> Jeśli weźmiemy wartości z przykładu na etapie "**3. Pobierz rekord DNS**":
>>
>> - `customerRecord: "ovhemp123456-selector1._domainkey.mydomain.ovh"` pasuje do subdomeny rekordu CNAME. Zachowamy tylko `ovhemp123456-selector1._domainkey`, ponieważ `.mydomain.ovh` jest już wstępnie wypełnione. <br>
>> - `targetRecord: "ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net"` to cel rejestracji. Dodajemy kropkę na końcu, aby zmienić tą wartość. To jest `ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.`<br>
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-api02.png){.thumbnail} <br>
>> 
>> Po wpisaniu wartości kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.<br>
>>
>> **Powtórz tę operację dla drugiego selektora, jeśli został utworzony.**<br>
>>
>> Jeśli skonfigurujesz strefę DNS w interfejsie trzecim poza OVHcloud, rekord CNAME musi mieć następującą formę:
>>
>> ```console
>> ovhemp123456-selector1._domainkey IN CNAME ovhemp123456-selector1._domainkey.1500.ab.dkim.mail.ovh.net.
>> ```
>>
>> > [!warning]
>> >
>> > Pamiętaj, że zmiana w strefie DNS podlega okresowi propagacji. Jest to zwykle krótki, ale może trwać do 24 godzin.
>>
> **5. Aktywacja DKIM**
>> > [!warning]
>> >
>> > W sekcji [**Poszczególne stany DKIM**](#dkim-status) w tym przewodniku sprawdź, czy wartość `status:` jest w `ready`, zanim uruchomi DKIM.
>>
>> Aby włączyć DKIM, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1".
>> - `selectorName`: wprowadź nazwę wybranego przełącznika.
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, dla której chcesz włączyć DKIM.
>>
>> *Przykład wyniku:*
>>
>> ```console
>> id: 108716876
>> todoDate: "2023-05-05T11:30:11+02:00"
>> finishDate: null
>> status: "todo"
>> function: "enableDKIM"
>> ```
>>
>> > [!success]
>> >
>> > Wykonałeś teraz wszystkie operacje, aby aktywować DKIM. Aby upewnić się, że konfiguracja jest aktywna, zapoznaj się z sekcją [**"Różne stany DKIM"**](#dkim-status) w tym przewodniku, aby sprawdzić, czy wartość `status:` jest w `inProduction`. Jeśli tak jest, Twój DKIM jest teraz aktywny.
>>

#### Poszczególne państwa DKIM <a name="dkim-status"></a>

Wybierz odpowiednią ofertę e-mail w następujących zakładkach:

> [!tabs]
> **E-mail (MX Plan)**
>> Podczas operacji na DKIM Twojej platformy Email użyj poniższego wywołania API, aby sprawdzić aktualny status DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ GET /email/domain/{domain}/dkim
>>
>> - `domain` : wprowadź nazwę domeny przypisanej do Twojej usługi E-mail, na której DKIM ma być obecny.
>>
>> Następnie sprawdź wartość `status:` ogólne w wyniku:
>>
>> - `disabled`: DKIM jest wyłączony, nie został jeszcze skonfigurowany lub został wyłączony przez API. <br>
>> - `modifying`: trwa konfigurowanie DKIM. Należy poczekać na zakończenie procesu.<br>
>> - `toConfigure`: konfiguracja DKIM oczekuje na ustawienia DNS domeny. Wprowadź ręcznie rekordy DNS w strefie nazwy domeny. W tym celu przejdź do [etapu 4 "pełnej konfiguracji DKIM" dla kont e-mail (MX Plan)](#confemail).<br>
>> - `enabled`: DKIM jest skonfigurowany i działa.<br>
>> - `error`: Podczas procesu instalacji wystąpił błąd. Otwórz [zgłoszenie w dziale obsługi klienta](https://help.ovhcloud.com/csm?id=csm_get_help) i podaj nazwę wybranej domeny.<br>
>>
>> Na selektorach masz również 3 możliwe stany:
>>
>> - `set` : przełącznik wyboru jest poprawnie skonfigurowany i aktywny.
>> - `toSet` : selektor nie jest skonfigurowany w strefie DNS domeny. Skorzystaj z [etapu 4 "pełnej konfiguracji DKIM" dla kont e-mail (MX Plan)](#confemail).
>> - `toFix` : selektor został skonfigurowany w strefie DNS domeny, ale wartości są nieprawidłowe. Skorzystaj z [etapu 4 "pełnej konfiguracji DKIM" dla kont e-mail (MX Plan)](#confemail).
>>
> **Exchange**
>> Podczas wykonywania operacji na DKIM w Twojej platformie Exchange, skorzystaj z poniższego wywołania API, aby sprawdzić aktualny status DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `selectorName`: wprowadź nazwę wybranego przełącznika. <br>
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, na której ma być zainstalowany DKIM. <br>
>>
>> Następnie sprawdź wartość `status:` w wyniku:
>>
>> - `todo`: zadanie zostało zainicjowane. <br>
>> - `WaitingRecord`: rekordy DNS oczekują na konfigurację lub są weryfikowane w strefie DNS domeny. Regularna automatyczna weryfikacja jest wykonywana w celu sprawdzenia, czy rekord DNS jest obecny i poprawnie wpisany.
>> - `ready`: rekordy DNS są dostępne w strefie. DKIM może być teraz włączony. <br>
>> - `inProduction`: DKIM jest dobrze skonfigurowany i aktywowany, dzięki czemu jest w pełni operacyjny. <br>
>> - `disabling`: trwa wyłączanie DKIM. <br>
>> - `deleting`: trwa usuwanie DKIM. <br>
>>
>> Jeśli podczas uruchamiania wywołania API wystąpi błąd, oznacza to, że nie istnieje lub został usunięty wybrany pokrętło. Musimy go stworzyć.
>>
>> ```console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
>>
> **E-mail Pro**
>> Podczas wykonywania operacji na DKIM na Twojej platformie E-mail Pro użyj poniższego wywołania API, aby sprawdzić aktualny status DKIM.
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `selectorName`: wpisz nazwę wyłącznika, który utworzyłeś. <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, na której ma być zainstalowany DKIM. <br>
>>
>> Następnie sprawdź wartość `status:` w wyniku:
>>
>> - `todo`: zadanie zostało zainicjowane. <br>
>> - `WaitingRecord`: rekordy DNS oczekują na konfigurację lub są weryfikowane w strefie DNS domeny. Regularna automatyczna weryfikacja jest wykonywana w celu sprawdzenia, czy rekord DNS jest obecny i poprawnie wpisany. <br>
>> - `ready`: rekordy DNS są dostępne w strefie. DKIM może być teraz włączony. <br>
>> - `inProduction`: DKIM jest dobrze skonfigurowany i aktywowany, dzięki czemu jest w pełni operacyjny. <br>
>> - `disabling`: trwa wyłączanie DKIM. <br>
>> - `deleting`: trwa usuwanie DKIM. <br>
>>
>> Jeśli podczas uruchamiania wywołania API wystąpi błąd, oznacza to, że nie istnieje lub został usunięty wybrany pokrętło. Musimy go stworzyć.
>>
>> ```console
>> Not Found (404)
>> { "message": "The requested object (selectorName = ovhemp123456-selector1) does not exist" }
>> ```
>>

#### Włącz lub zmień selekcję DKIM <a name="enable-switch"></a>

> [!warning]
>
> Wybieracz DKIM musi mieć status `ready`, zanim zostanie włączony.

Wybierz odpowiednią ofertę e-mail w następujących zakładkach:

> [!tabs]
> **Exchange**
>> Aby aktywować DKIM na selektorze, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro GET /email/pro/{service}/domain/{domainName}/dkim
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".<br>
>> - `selectorName`: wpisz nazwę istniejącego selektywnika.<br>
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1".<br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange, dla której chcesz włączyć DKIM.<br>
>>
> **E-mail Pro**
>> Aby aktywować DKIM na selektorze, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `selectorName`: wpisz nazwę wyłącznika, który utworzyłeś.<br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, na której ma być zainstalowany DKIM.<br>
>>

> [!primary]
>
> Podczas rotacji selektywnika DKIM możesz bezpośrednio włączyć drugi wyłącznik, który utworzyłeś, aby go przełączyć, zachowując przy tym pierwszy wyłącznik, który pozostanie aktywny, dopóki wszystkie e-maile dostarczone wraz z tym wyborem są dokładnie analizowane przez ich adresata.

#### Wyłącz i usuń DKIM <a name="enable-switch"></a>

> [!warning]
>
> **W przypadku oferty Exchange i E-mail Pro** <br>
>
> Wybieracz DKIM musi mieć status `inProduction` lub `ready`, zanim zostanie wyłączony.

Wybierz odpowiednią ofertę e-mail w następujących zakładkach:

> [!tabs]
> **E-mail (MX Plan)**
>> Aby wyłączyć DKIM bez usuwania selektorów i ich par kluczy, należy użyć następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/domain/ PUT /email/domain/{domain}/dkim/disable
>> <br>
>>
>> - `domain` : wprowadź nazwę domeny przypisanej do Twojej usługi E-mail, na której DKIM ma być obecny. <br>
>>
>> *Przykład wyniku:*
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
>> Jeśli chcesz wyłączyć DKIM bez usuwania selektora i jego pary kluczy, użyj następującego wywołania API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/dism
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który chcesz wyłączyć. <br>
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange. <br>
>>
>> Jeśli chcesz usunąć selekcję DKIM i parę kluczy, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `organizationName`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub ">> private-zz111111-1". <br>
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który chcesz usunąć. <br>
>> - `exchangeService`: wpisz nazwę Twojej platformy Exchange w postaci "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange. <br>
>>
> **E-mail Pro**
>> Jeśli chcesz wyłączyć DKIM bez usuwania selektora i jego pary kluczy, użyj następującego wywołania API:
>> 
>> > [!api]
>> >
>> > @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/dism
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który chcesz wyłączyć. <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro. <br>
>>
>> Jeśli chcesz usunąć selekcję DKIM i parę kluczy, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/pro DELETE /email/pro/{service}/domain/{domainName}/dkim/{selectorName}
>> >
>>
>> - `service`: wpisz nazwę Twojej platformy E-mail Pro w postaci "emailpro-zz111111-1". <br>
>> - `selectorName`: wprowadź nazwę wybranego przełącznika, który chcesz usunąć. <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro. <br>
>>

### Konfiguracja DKIM w przypadku oferty e-mail poza Twoim kontem OVHcloud <a name="external-dkim"></a>

Jeśli chcesz skonfigurować strefę DNS, aby dodać rekord DKIM dla Twojej usługi, postępuj zgodnie z instrukcjami podanymi poniżej.

W [Panelu klienta OVHcloud](/links/manager) kliknij zakładkę `Web Cloud`{.action}, następnie `Domeny`{.action} w kolumnie z lewej strony i wybierz odpowiednią nazwę domeny.

Kliknij zakładkę `Strefa DNS`{.action}, a następnie `Dodaj rekord`{.action}. Istnieją 3 sposoby dodania rekordu do konfiguracji DKIM w strefie DNS:

- [wpis DKIM](#dkim-record): konfiguracja umożliwiająca wyświetlenie wszystkich parametrów rekordu DKIM.
- [wpis TXT](#txt-record): rekord, który należy stosować w przypadku dostarczenia wszystkich parametrów DKIM.
- [rekord CNAME](#cname-record): rekord używany w przypadku oferty e-mail OVHcloud lub serwera e-mail Microsoft.

#### Rejestracja DKIM <a name="dkim-record"></a>

Wpis ten jest oznaczony jako DKIM w interfejsie, ale w rzeczywistości jest to rekord TXT wychodzący. Wpis DKIM ma na celu ułatwienie odczytu różnych elementów konfiguracyjnych DKIM w postaci odrębnych pól.

![email](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dkim-add.png){.thumbnail}

- **Subdomena**: wprowadź nazwę selektywnego DKIM i dodaj `._domainkey` w sufiks, Twoja domena zostanie automatycznie dodana na końcu.

*przykład:*

```console
  selector-name._domainkey.mydomain.ovh.
```

- **Wersja (v=)**: służy do wskazania wersji DKIM. Zaleca się jego użycie, a jego domyślną wartością jest `DKIM`.<br>
Jeśli tak, tag ten musi być umieszczony jako pierwszy w rekordzie i musi być równy "DKIM1" (bez cudzysłów). Zapisy, które zaczynają się od tagu "v=" z inną wartością, muszą zostać zignorowane.

- **Granulat (g =)**: pozwala określić część "local-part" konta e-mail, czyli część przed "@".<br>
Umożliwia ona określenie adresu e-mail lub adresów e-mail, które są uprawnione do podpisywania wiadomości e-mail za pomocą klucza DKIM selektora.<br>
Domyślną wartością "g=" jest "\*", co oznacza, że wszystkie adresy e-mail są uprawnione do korzystania z klucza podpisu DKIM.<br>
Wskazując określoną wartość dla "g=", można ograniczyć stosowanie klucza do określonej lokalnej części adresu e-mail lub określonego zakresu adresów e-mail, używając znaków ogólnych (np.: "\*-group").

- **Algorytm (hash) (h=)**: pozwala określić algorytmy hakowania używane do podpisywania nagłówków wiadomości. Ten znacznik pozwala na zdefiniowanie listy algorytmów haszujących, które będą używane do generowania podpisu DKIM dla danej wiadomości.

- **Typ klucza (k=)**: określa algorytm podpisu używany do podpisywania wychodzących wiadomości elektronicznych. Umożliwia on odbiorcom sprawdzenie, w jaki sposób wiadomość została podpisana i w jaki sposób została ona zweryfikowana.<br>
Wartości możliwe dla tagu "k=" obejmują "rsa" dla algorytmu podpisu RSA i "ed25519" dla algorytmu podpisu Ed25519. Wybór algorytmu zależy od polityki bezpieczeństwa nadawcy i od tego, czy odbiorca go przyjmie.

- **Uwagi (n=)**: Ma na celu uwzględnienie ocen odsetek dla administratorów zarządzających systemem kluczy DKIM.<br>
Noty te mogą być przydatne z powodów dokumentacyjnych lub pomóc administratorom zrozumieć lub zarządzać działaniem DKIM. Uwagi zawarte w n= nie są interpretowane przez programy i nie mają wpływu na funkcjonowanie DKIM.

- **Klucz publiczny (base64) (p=)**: używany do wprowadzania danych klucza publicznego DKIM, które są zakodowane w bazie64.<br>
Tag ten jest obowiązkowy w podpisze DKIM i umożliwia adresatom podpisu pobranie klucza publicznego niezbędnego do weryfikacji autentyczności podpisanej wiadomości.

- **Odwołaj klucz publiczny**: jeżeli klucz publiczny DKIM został odwołany (np. w przypadku ataku na klucz prywatny), do tagu "p=" należy użyć wartości pustej wskazującej, że ten klucz publiczny przestał być ważny. Adresaci muszą wówczas zwrócić błąd w przypadku każdego podpisu DKIM odnoszącego się do klucza cofniętego.

- **Typ usługi (s=)**: Tagi "s=" (Service Type) są opcjonalne i nie są domyślnie wyświetlane. Pozwala on określić rodzaj usługi lub rodzaje usług, do których ma zastosowanie ten wpis DKIM.<br>
Rodzaje usług definiuje się za pomocą listy słów kluczowych oddzielonych dwoma punktami ":".<br>
Odbiorca musi zignorować tę rejestrację, jeśli nie został określony odpowiedni rodzaj usługi.<br>
Znacznik "s=" ma na celu ograniczenie wykorzystania kluczy do innych celów, w przypadku gdy wykorzystanie DKIM byłoby określone dla innych usług w przyszłości.<br>
Typami usług obecnie zdefiniowanymi są: "\*" (wszystkie rodzaje usług), "e-mail" (e-mail).

- **Tryb testowy (t=y)**: umożliwia właścicielom domeny przetestowanie wdrożenia DKIM bez ryzyka, że wiadomości odrzucone lub oznaczone jako SPAM zostaną wykryte w przypadku niepowodzenia weryfikacji podpisu DKIM.<br>
W przypadku gdy stosowany jest flag "t=y", odbiorca nie może przetwarzać w inny sposób podpisanych wiadomości w trybie testowym i niepodpisanych komunikatów. Odbiorca może jednak śledzić wynik testu, aby pomóc sygnatariuszom.

- **Subdomeny (t=s)**: pozwala na ograniczenie używania podpisu DKIM wyłącznie w nazwie domeny (np.: @mydomain.ovh) lub zezwolić na wysyłkę z nazwy domeny i jej subdomen (na przykład: @mydomain.ovh, @test.mydomain.ovh, @other.mydomain.ovh, etc.)

#### Rejestracja TXT <a name="txt-record"></a>

Jest to rodzaj rekordu wykorzystywany do konfiguracji DKIM w strefie DNS Twojej domeny. Aby ją uzupełnić, należy zarządzać poprawną składnią.

Ten rodzaj konfiguracji DKIM jest zalecany, jeśli podane do Ciebie informacje zostały przekazane przez dostawcę usługi e-mail.

Aby dowiedzieć się więcej o składzie wpisu DKIM, zapoznaj się z poprzednią częścią tego przewodnika zatytułowaną "[Rejestracja DKIM](#dkim-record)".

**Przykład rekordu DKIM**

- subdomena:

```console
selector-name._domainkey.mydomain.ovh.
```

- cel:

```console
v=DKIM1;t=s;p= MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA77VDAIfyhjtoF0DIE5V7 rev1EKk4L0nxdBpD5O/jPrM4KP0kukeuB6IMpVplkkq52MSDeRcjoO50h0DmwZOr RUkyGjQwOnAh0VhY3fqkuwBYftEX7vWo8C2E1ylzimABkwPpSL62jZ1DheoXcil9 1M35wWBKtlYdXVedKjCQKOEnwTo+0hdNe38rU9NMgq6nbTIMjDntvxoVI+yF3kcx q/VpAY8BIYbcAXkVFvUyfUBABnnKpf0SfblsfcLW0Koy/FRxPDFOvnjNxXeOxMFR UI6K6PaW2WvtbJG2v+gHLY5M4tB0+/FNJU9emZfkPOk3DmRhZ8ENi7+oZa2ivUDj OQIDAQAB
```

#### Rejestracja CNAME <a name="cname-record"></a>

Wpis CNAME to alias. Oznacza to, że wartość docelowa odnosi się do adresu URL, który sam zapewni rekord DKIM serwerowi, który będzie odpytywał rekord CNAME. Ten rodzaj rekordu CNAME, aby skonfigurować DKIM, jest często używany w przypadku korzystania z serwera e-mail Microsoft.

Chodzi o rodzaj rekordu używany do aktywowania DKIM w odniesieniu do domeny zgłoszonej do oferty Exchange OVHcloud. W ten sposób dostawca Twojego rozwiązania poczty elektronicznej może zarządzać bezpieczeństwem i aktualizacją DKIM. W ten sposób dostawca Twojego rozwiązania poczty elektronicznej zarządza bezpieczeństwem i aktualizacją DKIM.

### Przetestuj DKIM <a name="test-dkim"></a>

Zalecamy wysłanie e-maila z konta w Twojej platformie Exchange na adres e-mail, który sprawdza podpis DKIM podczas odbierania wiadomości.

Oto co możesz znaleźć w nagłówku otrzymanego e-maila:

<pre class="bgwhite"><code>ARC-Authentication-Results: i=1; mx.example.com;
       dkim=pass header.i=@mydomain.ovh header.s=ovhex123456-selector1 header.b=KUdGjiMs;
       spf=pass (example.com: domain of test-dkim@mydomain.ovh designates 54.36.141.6 as permitted sender) smtp.mailfrom=test-dkim@mydomain.ovh
Return-Path: &lt;test-dkim@mydomain.ovh&gt;
</code></pre>

Aby pobrać nagłówek wiadomości e-mail, zapoznaj się z naszym przewodnikiem "[Pobierz nagłówek wiadomości](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers)".

## Przykłady zastosowania <a name="usecases"></a>

#### Jak i dlaczego warto zmienić parę kluczy DKIM? <a name="2selectors"></a>

> [!warning]
>
> To pytanie dotyczy tylko ofert Exchange i E-mail Pro.

Po pierwszym włączeniu DKIM w Twojej usłudze e-mail możesz utworzyć 2 selektory, z których każdy zawiera parę kluczy. Drugi selektor jest następcą bieżącego selektora.

Aby uniknąć prób odszyfrowania klucza DKIM, zaleca się regularne zmiany pary kluczy. Upewnij się, że skonfigurowałeś 2 selektory, sprawdzając, czy pierwszy jest w statusie `inProduction`a drugi w statusie `ready`. Możesz sprawdzić ten stan, odwołując się do sekcji ["Różne stany DKIM"](#dkim-status).

Kliknij na zakładkę odnoszącą się do Twojej oferty.

> [!tabs]
> **Exchange**
>> Aby przełączyć się na drugi selektor, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> > @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/dkim/{selectorName}/enable
>>
>> - `organizationName` : wprowadź nazwę platformy Exchange w formie "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `selectorName` : wprowadź nazwę przełącznika wyboru. <br>
>> - `exchangeService`: podaj nazwę platformy Exchange w formie "hosted-zz111111-1" lub "private-zz111111-1". <br>
>> - `domainName`: wprowadź nazwę domeny przypisanej do Twojej platformy Exchange. <br>
>>
> **E-mail Pro**
>> Aby przełączyć się na drugi selektor, użyj następującego wywołania API:
>>
>> > [!api]
>> >
>> @api {v1} /email/pro POST /email/pro/{service}/domain/{domainName}/dkim/{selectorName}/enable
>> >
>>
>> - `service` : wprowadź nazwę Twojej platformy E-mail Pro w formie "emailpro-zz111111-1". <br>
>> - `selectorName` : wprowadź nazwę przełącznika wyboru. <br>
>> - `domainName` : wprowadź nazwę domeny przypisanej do Twojej platformy E-mail Pro, na której DKIM ma być obecny.<br>
>>

Po przełączeniu na nowy selektor zachowaj stary przez 7 dni przed usunięciem i utworzeniem nowego.

### Dlaczego DKIM nie działa i jest wyświetlany na czerwono w Panelu klienta? <a name="reddkim"></a>

> [!warning]
>
> To pytanie dotyczy tylko ofert Exchange i E-mail Pro.

Zauważysz, że Twoje e-maile nie są podpisane przez DKIM, pomimo jego aktywacji lub konfiguracji. Najpierw zaloguj się do Panelu klienta, aby sprawdzić stan DKIM.

Kliknij na poniższą zakładkę odnoszącą się do Twojej oferty, aby sprawdzić stan DKIM na Twojej platformie e-mail.

> [!tabs]
> **Exchange**
>>
>> W [Panelu klienta OVHcloud](/links/manager) w zakładce `Web Cloud`{.action} kliknij na `Microsoft`{.action}, a następnie na `Exchange`{.action}. W kolejnym kroku kliknij na wybraną nazwę usługi Exchange.<br><br> W rubryce `Przypisane domeny`{.action}, sprawdź kolor ikony `DKIM` po prawej stronie odpowiedniej domeny (patrz obrazek poniżej).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> W [Panelu klienta OVHcloud](/links/manager) w zakładce `Web Cloud`{.action} kliknij `E-mail Pro`{.action}, a następnie nazwę danej usługi E-mail Pro.<br><br> W rubryce `Przypisane domeny`{.action} sprawdź kolor ikony `DKIM` po prawej stronie odpowiedniej domeny (patrz obrazek poniżej).
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/red-dkim.png){.thumbnail}

Oto cztery statusy, po których w Panelu klienta wyświetli się czerwona ikona DKIM. Kliknij zakładkę z kodem błędu :

> [!tabs]
> **501**
>>
>> "**Only one dkim selector has been initialized**"<br><br>
>> Tylko selektor DKIM jest obecny w konfiguracji. Aby umożliwić przełączenie na nowy klucz, jeśli jest to konieczne, należy skonfigurować 2 selektory dostarczane przez usługę.<br><br>
>> Aby naprawić ten błąd :
>>
>> - Sprawdź stan selektorów DKIM, aby określić, który powinien zostać skonfigurowany. W tym celu przejdź do sekcji "[Różne stany DKIM](#dkim-status)" niniejszego przewodnika.
>> - Po wybraniu selektora do konfiguracji postępuj zgodnie z instrukcjami zawartymi w tej sekcji "[Pełna konfiguracja DKIM](#firststep)" w zależności od wybranej oferty (Exchange lub E-mail Pro) i zastosuj ją tylko do wybranego selektora.
>> Odczekaj maksymalnie 24 godziny od skonfigurowania selektora.
>>
> **502**
>>
>> "**One DKIM configuration task is in error**"<br><br>
>> Wystąpił błąd podczas konfigurowania DKIM. Po upływie 24 godzin, jeśli Twoja konfiguracja nadal jest w tym stanie, prosimy o otwarcie [zgłoszenia w dziale obsługi klienta](https://help.ovhcloud.com/csm?id=csm_get_help).
>>
> **503**
>>
>> "**CNAME record is wrong**"<br><br>
>> Wartość rekordu CNAME potrzebnego do skonfigurowania DKIM nie została poprawnie wprowadzona. Należy poprawnie skonfigurować strefę DNS przypisanej nazwy domeny.
>> Aby skonfigurować strefę DNS, pobierz wartości z rekordu CNAME, który się wyświetla :
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail}
>>
>> Jeśli weźmiemy przykład powyższego zrzutu, nazwą domeny będzie "**mydomain.ovh**", a następnie zostanie wyświetlona prośba o skonfigurowanie selektora "**2**". Tutaj należy dodać rekord CNAME z subdomeną `ovhex1234567-selector2.domainkey.mydomain.ovh` oraz jako adres docelowy `ovhex1234567-selector2.domainkey.7890.dkim.mail.ovh.net`.<br><br>
>> Po skonfigurowaniu strefy DNS odczekaj chwilę na propagację DNS (maksymalnie 24 godziny)
>>
> **504**
>>
>> "**One CNAME record is missing**"<br><br>
>> Brak wartości rekordu CNAME wymaganej do skonfigurowania DKIM. Należy skonfigurować strefę DNS dla dołączonej nazwy domeny.
>> Aby skonfigurować strefę DNS, pobierz wartości z rekordu CNAME, który się wyświetla :
>>
>> ![email](/pages/assets/screens/control_panel/product-selection/web-cloud/microsoft/exchange/associated-domains/dkim-503.png){.thumbnail}
>>
>> Jeśli weźmiemy przykład powyższego zrzutu, nazwą domeny będzie "**mydomain.ovh**", a następnie zostanie wyświetlona prośba o skonfigurowanie selektora "**2**". Tutaj należy dodać rekord CNAME z subdomeną `ovhex1234567-selector2.domainkey.mydomain.ovh` oraz jako adres docelowy `ovhex1234567-selector2.domainkey.890123.dkim.mail.ovh.net`.<br><br>
>> Po skonfigurowaniu strefy DNS odczekaj chwilę na propagację DNS (maksymalnie 24 godziny)
>>

### Z poziomu interfejsu API OVHcloud, jak zrozumieć stan DKIM, który nie działa? <a name="api-error"></a>

Jeśli do konfiguracji DKIM używasz API OVHcloud, a DKIM nie działa, zapoznaj się z rubryką "[Poszczególne stany DKIM](#dkim-status)" niniejszego przewodnika, aby sprawdzić stan selektorów.

Poniżej znajdziesz statusy, które mogą blokować działanie DKIM i odpowiednie rozwiązanie dla każdej sytuacji.

> [!tabs]
> **Exchange i E-mail Pro**
>> - `WaitingRecord`: rekordy DNS oczekują na konfigurację lub są sprawdzane w strefie DNS domeny. Automatyczne i regularne weryfikacje przeprowadzane są w celu sprawdzenia, czy rekord DNS jest obecny i poprawnie wprowadzony. W zależności od Twojej oferty przejdź do **etapu 5** w sekcji "[Pełna konfiguracja DKIM](#firststep)", aby poprawnie skonfigurować strefę DNS danej domeny.
>> - `ready`: rekordy DNS są obecne w strefie. Teraz można aktywować DKIM. Wystarczy włączyć selektor, naciskając sekcję "[Włącz lub zmień selektor DKIM](#enable-switch)".
>> - `deleting`: trwa usuwanie DKIM. Po usunięciu serwera wykonaj kolejno kroki w sekcji "[Pełna konfiguracja DKIM](#firststep)".
>> - `disabling`: trwa wyłączanie DKIM. Po tej operacji możesz aktywować selektor, naciskając sekcję "[Włącz lub zmień selektor DKIM](#enable-switch)".
>> - `todo`: Zadanie zostało zainicjowane, musi zostać uruchomione. Po upływie 24 godzin, jeśli selektor nadal jest w tym stanie, prosimy o otwarcie [zgłoszenia w dziale obsługi klienta](https://help.ovhcloud.com/csm?id=csm_get_help) i podanie numeru selektora zgłoszeń.
> **E-maile (MX Plan)**
>> - `disabled`: DKIM jest wyłączony, nie został jeszcze skonfigurowany lub został wyłączony przez API. <br>
>> - `modifying`: Konfiguracja DKIM jest w trakcie, należy poczekać na zakończenie procesu.<br>
>> - `toConfigure`: Konfiguracja DKIM oczekuje na ustawienia DNS domeny. Wprowadź ręcznie rekordy DNS w strefie nazwy domeny. W tym celu przejdź do etapu "[Pełna konfiguracja DKIM](#confemail)" niniejszego przewodnika. <br>
>> - `error`: Podczas procesu instalacji wystąpił błąd. Otwórz [zgłoszenie w dziale obsługi klienta](https://help.ovhcloud.com/csm?id=csm_get_help) i podaj nazwę wybranej domeny.
>>
>> Na selektorach masz również 2 stany związane z błędem:
>>
>> - `toSet` : selektor nie jest skonfigurowany w strefie DNS domeny. Skorzystaj z [etapu 4 "pełnej konfiguracji DKIM" dla kont e-mail (MX Plan)](#confemail).
>> - `toFix` : selektor został skonfigurowany w strefie DNS domeny, ale wartości są nieprawidłowe. Skorzystaj z [etapu 4 "pełnej konfiguracji DKIM" dla kont e-mail (MX Plan)](#confemail).

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community)