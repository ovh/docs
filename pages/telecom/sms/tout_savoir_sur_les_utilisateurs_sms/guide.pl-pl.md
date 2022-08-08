---
title: 'Informacje o użytkownikach wiadomości SMS'
excerpt: 'Poznaj funkcje umożliwiające użytkownikom API wysyłanie wiadomości SMS'
slug: informacje-o-uzytkownikach-sms
section: 'Zarządzanie ofertą'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 05-08-2022** 

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak tworzyć użytkowników API i zarządzać nimi.

## Wymagania początkowe

- Posiadanie aktywnego konta SMS OVHcloud
- Zalogowanie do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Telefonia`{.action}, następnie `SMS`{.action}.

![Panel klienta Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## W praktyce

![sms-users](images/smsusers.png){.thumbnail}

Utworzenie użytkownika API do wysyłania wiadomości SMS może być przydatne z kilku powodów:

- Umożliwia właścicielowi konta SMS zabezpieczenie dostępu podczas wysyłania wiadomości SMS przez zewnętrzny interfejs API.
Skrypt wywołujący zna bowiem tylko identyfikator użytkownika i jego hasło, a nie sesję identyfikatora klienta właściciela.

- Utworzenie kilku użytkowników API może być przydatne w firmie, zwłaszcza w celu zapewnienia lepszego śledzenia.
Właściciel konta może wykryć użytkownika API, który wysyła wiadomości SMS w nadmiernej ilości.

- Na użytkownika API można nałożyć ograniczenia (limity) dotyczące zasileń SMS.
Dzięki temu właściciel konta SMS może podzielić zasilenia na różne konta użytkowników API.

Aby jak najlepiej zarządzać zasileniami konta SMS, możesz ustalić ograniczenia i limity dla Twoich użytkowników API. 

- **Limit** to ilość zasileń SMS dostępnych dla użytkownika API.

- **Próg** to minimalna ilość zasileń SMS, jakie pozostały użytkownikowi API przed otrzymaniem alertu o konieczności doładowania tych zasileń.

### Etap 1: utworzenie użytkownika API

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz opcję `Telefonia`{.action}. Następnie kliknij pozycję `SMS`{.action} po lewej stronie i wybierz Twoje konto SMS.

Teraz kliknij kartę `Użytkownicy API`{.action}. Aby dodać użytkownika, kliknij przycisk `Działania`{.action}, a następnie `Dodaj`{.action}.

![sms-users](images/smsusers01e-2021.png){.thumbnail}

Użytkownikowi API można nadać dowolną nazwę. Hasło użytkownika API musi składać się z 8 znaków alfanumerycznych. 

### Etap 2: przypisywanie limitu użytkownikowi API

Limitami możesz zarządzać z poziomu karty `Użytkownicy API`{.action}. Obok wybranego użytkownika kliknij pozycję `...`{.action}, a następnie `Limity`{.action}.

![sms-users](images/smsusers03e-2021.png){.thumbnail}

Teraz możesz wykonać dwa działania.

- **Aktywować limit?**: pozwala określić, czy dany użytkownik podlega limitom.
- **Nowy limit**: pozwala ustalić limit obowiązujący danego użytkownika. Po osiągnięciu tego limitu możliwość wysyłania wiadomości SMS przez tego użytkownika zostanie zablokowana.

![sms-users](images/smsusers04-2021.png){.thumbnail}

> [!primary]
>
> Przypisanie limitu do użytkownika API spowoduje zmniejszenie stanu zasileń konta SMS o wartość limitu.
>
> Przykład: na koncie SMS jest do dyspozycji 200 zasileń. Przydzielenie użytkownikowi API 150 zasileń spowoduje potrącenie tej liczby z konta SMS, na którym zostanie już tylko 50 zasileń.
>

### Etap 3: przypisywanie progu alertu użytkownikowi API

Konfigurację progu dla użytkownika przeprowadza się z tego samego menu, klikając pozycję `...`{.action}, a następnie `Próg`{.action}.

Dostępne są następujące parametry:

- **Aktywować alert?**: pozwala aktywować alert o osiągnięciu progu.
- **Próg alertu**: określa poziom pozostałych zasileń SMS, po osiągnięciu którego wysyłane jest powiadomienie.
- **Powiadomienie**: pozwala wybrać rodzaj powiadomienia, tzn. e-mail (należy podać adres e-mail), wiadomość SMS (należy podać numer telefonu w formacie międzynarodowym) lub obie formy.

![sms-users](images/smsusers05-2021.png){.thumbnail}

> [!warning]
>
> Wysłanie powiadomienia przez wiadomość SMS zostanie odliczone od Twojego stanu zasileń SMS.
>

### Etap 4: określanie ograniczenia funkcji http2sms dla adresu IP

Funkcję http2sms możesz zabezpieczyć, nakładając ograniczenia dla adresu IP dla każdego użytkownika API.

Aby aktywować funkcję, po prawej stronie użytkownika kliknij pozycję `...`{.action}, a następnie `Ograniczenia`{.action}.

Możesz wprowadzić do 5 różnych publicznych adresów IP dla wysyłania zapytań https.

![sms-users](images/smsusers06-2021.png){.thumbnail}

Aby uzyskać więcej informacji na temat funkcji http2sms, przeczytaj przewodnik [Wysyłanie wiadomości SMS z adresu URL](../wysylanie-wiadomosci-sms-z-adresu-url-http2sms/).

### Etap 5: określanie adresu URL wywołania zwrotnego

Aby monitorować potwierdzenia odbioru wiadomości SMS (Delivery reporting lub DLR), można określić adres URL wywołania zwrotnego, po prawej stronie użytkownika klikając pozycję `...`{.action}, a następnie `Wywołanie zwrotne`{.action}.

![sms-users](images/smsusers07-2021.png){.thumbnail}

Gdy status wysyłki wiadomości SMS zostanie zaktualizowany, wywołamy określony adres URL. Poniższe wartości są automatycznie wstawiane w ciągu zapytania:

- id: numer identyfikacyjny wiadomości SMS;
- ptt: kod odpowiadający statusowi wiadomości SMS; Różne kody ptt zostały opisane w pierwszej tabeli poniżej.
- date: data raportu DLR;
- description: identyfikator raportu DLR; Różne identyfikatory zostały opisane w drugiej tabeli poniżej.
- descriptionDlr: opis statusu raportu DLR.

#### Różne kody ptt

Aby uzyskać opis określonego kodu ptt, możesz użyć następującego API:

> [!api]
>
> @api {GET} /sms/ptts
>

Aby uzyskać więcej informacji na temat korzystania z API OVHcloud, zapoznaj się z naszym przewodnikiem [Pierwsze kroki z API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/).

Poniższa tabela zawiera niewyczerpującą listę głównych kodów ptt.

|Status|Opis|
|---|---|
|1|Powiadomienie o statusie pośrednim informujące, że wiadomość nie została jeszcze dostarczona ze względu na problem z telefonem, ale została podjęta kolejna próba (Intermediate state notification that the message has not yet been delivered due to a phone related problem but is being retried).|
|2|Używane, aby poinformować, że wiadomość nie została jeszcze dostarczona ze względu na problem z operatorem, ale w sieci została podjęta kolejna próba (Used to indicate that the message has not yet been delivered due to some operator related problem but is being retried within the network).|
|3|Używane, aby poinformować, że wiadomość została zaakceptowana przez operatora (Used to indicate that the message has been accepted by the operator).|
|4|Wiadomość została dostarczona (The message was delivered).|
|5|Wiadomość została potwierdzona jako niedostarczona, ale brak szczegółowych informacji związanych z niepowodzeniem wysyłki (The message has been confirmed as undelivered but no detailed information related to the failure is known).|
|6|Nie można określić, czy wiadomość została dostarczona, z powodu braku informacji o ostatecznym statusie dostarczenia od operatora (Cannot determine whether this message has been delivered or has failed due to lack of final delivery state information from the operator).|
|8|Używane w przypadku, gdy wiadomość wygasła (nie mogła zostać dostarczona w czasie trwania wiadomości) w ramach SMSC operatora, ale nie jest to związane z przyczyną awarii (Used when a message expired (could not be delivered within the life time of the message) within the operator SMSC but is not associated with a reason for failure).|
|20|Używane, gdy wiadomość w swojej obecnej formie nie może zostać dostarczona (Used when a message in its current form is undeliverable).|
|21|Używane wyłącznie, gdy operator akceptuje wiadomość przed sprawdzeniem zasilenia abonenta. Jeśli stan zasilenia jest niewystarczający, operator ponawia próbę wysłania do momentu, aż stan zasilenia będzie wystarczający lub wiadomość wygaśnie. Jeśli wiadomość wygaśnie i ostatni powód niepowodzenia jest związany ze stanem zasilenia, wówczas zostanie użyty ten kod błędu (Only occurs where the operator accepts the message before performing the subscriber credit check. If there is insufficient credit then the operator will retry the message until the subscriber tops up or the message expires. If the message expires and the last failure reason is related to credit then this error code will be used).|
|23|Używane, gdy wiadomość nie może zostać dostarczona z powodu nieprawidłowego / nieważnego / znajdującego się na czarnej liście / trwale zablokowanego numeru MSISDN dla tego operatora. Nie należy używać ponownie tego numeru MSISDN do wysyłania wiadomości do tego operatora (Used when the message is undeliverable due to an incorrect / invalid / blacklisted / permanently barred MSISDN for this operator. This MSISDN should not be used again for message submissions to this operator).|
|24|Używane, gdy nie można dostarczyć wiadomości, ponieważ abonent jest chwilowo nieobecny, np. jego telefon jest wyłączony lub nie można go zlokalizować w sieci (Used when a message is undeliverable because the subscriber is temporarily absent, e.g. their phone is switch off, they cannot be located on the network).|
|25|Używane, gdy wysłanie wiadomości nie powiodło się ze względu na tymczasowy stan w sieci operatora. Może się to wiązać z warstwą SS7, bramą lub SMSC (Used when the message has failed due to a temporary condition in the operator network. This could be related to the SS7 layer, SMSC or gateway).|
|26|Używane, gdy wysłanie wiadomości nie powiodło się ze względu na tymczasowy błąd telefonu, na przykład karta SIM jest pełna, SME zajęte, pełna pamięć itp. Nie oznacza to, że telefon nie jest w stanie odebrać tego rodzaju wiadomości / treści (patrz kod błędu 27) (Used when a message has failed due to a temporary phone related error, e.g. SIM card full, SME busy, memory exceeded etc. This does not mean the phone is unable to receive this type of message/content (refer to error code 27)).|
|27|Używane, gdy zestaw jest trwale niezgodny lub nie jest w stanie odbierać tego typu wiadomości (Used when a handset is permanently incompatible or unable to receive this type of message).|
|28|Używane, gdy wysłanie wiadomości nie powiodło się lub wiadomość została odrzucona ze względu na podejrzenie SPAM-u w sieci operatora. Może to oznaczać, że w niektórych regionach geograficznych operator nie posiada rejestru obowiązkowego MO wymaganego dla MT (Used if a message fails or is rejected due to suspicion of SPAM on the operator network. This could indicate in some geographies that the operator has no record of the mandatory MO required for an MT).|
|29|Używane, gdy ta konkretna zawartość nie jest dozwolona w sieci / krótkim kodzie (Used when this specific content is not permitted on the network / shortcode).|
|33|Używane, gdy abonent nie może otrzymywać treści dla dorosłych ze względu na blokadę rodzicielską (Used when the subscriber cannot receive adult content because of a parental lock).|
|39|Nowa awaria operatora (New operator failure).|
|73|Wysłanie wiadomości nie powiodło się ponieważ przeniesione kombinacje były nieosiągalne (The message was failed due to the ported combinations being unreachable).|
|74|Wysłanie wiadomości nie powiodło się, ponieważ MSISDN jest w roamingu (The message was failed due to the MSISDN being roaming).|
|76|Wysłanie wiadomości nie powiodło się, ponieważ przeniesione kombinacje są zablokowane dla klienta (klient został umieszczony na czarnej liście przeniesionej lokalizacji docelowej) (The message was failed due to the ported combinations being blocked for client (the client has been blacklisted from the ported destination)).|
|202|Wysłanie wiadomości nie powiodło się, ponieważ przeniesione kombinacje są zablokowane dla klienta. Skontaktuj się z obsługą klienta, aby uzyskać więcej informacji (The message was failed due to the ported combinations being blocked for the client. Please contact Client Support for additional information).|

#### Różne identyfikatory raportu DLR

|Status|Opis|
|---|---|
|0|W trakcie tworzenia lub oczekujące (Creating or pending)|
|1|Powodzenie (Success)|
|2|Niepowodzenie (Failed)|
|4|Oczekujące (Waiting)|
|8|Bufor (Buffered)|
|16|Błąd / niezafakturowane (Error / not billed)|

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
