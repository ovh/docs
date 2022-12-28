---
title: Wysyłanie SMS-ów do Stanów Zjednoczonych
slug: wysylanie_sms-ow_do_stanow_zjednoczonych
excerpt: Odkryj w jaki sposób wysyłać wiadomości SMS do Stanów Zjednoczonych
section: 'Wysyłanie wiadomości SMS'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 05-08-2022**

## Wprowadzenie

Wysyłanie SMS-ów do Stanów Zjednoczonych podlega szczególnym zasadom. Celem niniejszego przewodnika jest wytłumaczenie Ci ich i pokazanie w jaki sposób je stosować, aby móc wysyłać SMS-y do tego regionu świata.

## Wymagania początkowe

- Posiadanie konta SMS OVHcloud z kredytami SMS.
- Zalogowanie do [API OVHcloud](https://api.ovh.com/) (tylko dla metody wysyłki przez API)
- Zalogowanie do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Telefonia`{.action}, następnie `SMS`{.action}.

![Panel klienta Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## W praktyce

### Etap 1: zapoznanie się z ograniczeniami

W porozumieniu z organem regulacyjnym działającym w Stanach Zjednoczonych (Neustar), wysyłanie SMS-ów do tego kraju wymaga uprzedniego zatwierdzenia modelu wiadomości przez nasz zespół.
Autoryzowane są wyłącznie wiadomości z ostrzeżeniami oraz wiadomości związane z weryfikacją dwuetapową, OVHcloud nie zaakceptuje żadnych modeli SMS-ów reklamowych. Po zatwierdzeniu Twojego modelu, wysyłka wiadomości odbywa się w taki sam sposób, jak w przypadku innych krajów.

Możesz poprosić o zatwierdzenie kilku modeli wiadomości.

> [!primary]
>
Zatwierdzenie modeli wiadomości jest wykonywane nieodpłatne przez zespoły OVHcloud w ciągu jednego do dwóch dni roboczych.
>

### Etap 2: Dodawanie modelu

#### 2.1 Za pośrednictwem Panelu klienta

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz `Telefonia`{.action}. Następnie kliknij `SMS`{.action} i wybierz Twoje konto SMS. Kliknij kartę `Wiadomość SMS i kampania`{.action}, a następnie `Zarządzanie SMS-ami`{.action}.

Następnie kliknij polecenie `Zarządzanie modelami`{.action}.

![Wiadomości SMS do Stanów Zjednoczonych](images/smstousa1.png){.thumbnail}

Na stronie, która się wtedy wyświetli kliknij `Operacja`{.action}, a następnie `Dodaj`{.action}.

![Wiadomości SMS do Stanów Zjednoczonych](images/smstousa2.png){.thumbnail}

Pojawi się okienko pop-up zawierające pola do wypełnienia.

![Wiadomości SMS do Stanów Zjednoczonych](images/smstousa3.png){.thumbnail}


| Pole       | Opis                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Nazwa         | Nazwa szablonu                                                                                                  |
| Aktywność    | Wybierz typ modelu:<br>\- Ostrzeżenie<br>\- Uwierzytelnianie<br>\- System przetwarzania transakcji |
| Opis | Opis modelu                                                                                            |
| Model      | Napisz model zawierający zmienną między #                                                                  |


#### 2.2 Za pośrednictwem API

> [!success]
> Jeśli nie wiesz, jak korzystać z API OVHcloud, zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/)".

Zaloguj się na [api.ovh.com/](https://api.ovh.com/) i użyj następującego interfejsu API:

> [!api]
>
> @api {post} /sms/{serviceName}/templatesControl
>

![Wiadomości SMS do Stanów Zjednoczonych](images/smstousa4.png){.thumbnail}

Wypełnij wymagane pola i kliknij `Execute`{.action}

#### Przykłady modeli

Poniżej znajdziesz 2 przykłady modeli wiadomości zaadresowanych do Stanów Zjednoczonych.

- Przykład szablonu uwierzytelniającego:

```bash
Your security code is #CODE#, have a good day
```

- Przykład szablonu ostrzeżenia:

```bash
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```

### Etap 3: analiza rezultatu

Po utworzeniu i zatwierdzeniu Twojego modelu wiadomości, operacja wysyłania SMS-a generuje automatyczne porównanie jego treści z Twoimi modelami. Jeśli wynik tego porównania będzie pozytywny, SMS zostaje wysłany w taki sam sposób, jak ma to miejsce w przypadku wiadomości wysyłanej do innego kraju.

Jeżeli wysyłasz wiadomość SMS do Stanów Zjednoczonych bez uprzedniego stworzenia i zatwierdzenia modelu, SMS zostanie odrzucony, a Ty otrzymasz Premium Tracking Transaction Code (PTT code) 1999. Kod ten odpowiada komunikatowi błędu „No templates available” (brak utworzonego modelu wiadomości).

Pozostałe możliwe kody rezultatów możesz znaleźć w [tym przewodniku](../informacje-o-uzytkownikach-sms/).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
