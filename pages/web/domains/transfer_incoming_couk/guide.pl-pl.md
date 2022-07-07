---
title: 'Transfer domeny.uk do OVHcloud'
legacy_guide_number: 2026
slug: uslugi_www_transfer_domeny_couk
excerpt: 'W tym przewodniku znajdziesz różne informacje dotyczące transferu domeny .uk lub podobnej do OVHcloud'
section: Transfer
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22/06/2020**

## Wprowadzenie

Transfer domeny .uk (lub podobnej) wymaga zastosowania specjalnego podejścia.

**Dowiedz się, jak przenieść domenę .uk (lub podobną) na OVHcloud**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Twoja domena nie może być usunięta ani usunięta.
- Domena nie może zostać zablokowana u Twojego operatora. 
- Dane kontaktowe właściciela muszą być aktualne w [bazie whois](https://www.nominet.uk/whois/){.external} domeny.
- Otrzymasz kod autoryzacyjny, który zostanie wysłany na adres e-mail właściciela. 

## Rozszerzenia
- .co.uk
- .me.uk
- .org.uk
- .ltd.uk
- .plc.uk
- .uk.

## W praktyce

### Procedura transferu

#### Etap 1: Zmiana APR dla domeny

Aby móc przenieść domenę do OVHcloud, należy najpierw podać TAG OVHcloud u obecnego operatora. OVHcloud otrzymuje oznaczenie "OVH-FR". Lista TAGS poszczególnych operatorów jest dostępna na oficjalnej stronie internetowej [Nominet](http://www.nominet.uk/registrar-list){.external}.

> [!primary]
>
> Jeśli nie możesz wykonać modyfikacji Tag domeny za pomocą
> Twój obecny rejestr - możesz złożyć wniosek w Rejestrze
> Zmień nazwę użytkownika.
> Przekieruj się na stronę Registry: "Manage your domain - Change registrar".
> Uwaga, ta operacja jest płatna przez Nominet.
>

#### Etap 2: Uzyskanie kodu autoryzacji transferu

Po zmianie APR właściciel domeny po kilku minutach otrzyma e-mail z kodem autoryzacyjnym ("authcode"). Certyfikat, ważny przez 5 dni, pozwoli rozpocząć (bezpłatnie) zamawianie domeny w OVHcloud.

#### Etap 3: Bezpłatne zamówienie na transfer

Po uzyskaniu kodu autoryzacyjnego możesz wyszukać i rozpocząć transfer domeny na [stronę OVHcloud](https://www.ovhcloud.com/pl/). Zamówienie jest podobne do innych domen globalnych.

Twoja domena zostanie wyświetlona w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) w ciągu kilku godzin.

### Przydatne informacje

#### Koszt transferu domeny z rozszerzeniem .uk (lub równorzędny)

Transfer jest bezpłatny.

#### Ważność kodeksu autoryzacji

Kod autoryzacji jest generowany automatycznie po zmianie GAR. Jeśli zamówienie nie zostanie zrealizowane w ciągu 5 dni, transfer zostanie anulowany.

#### Odnowienie domeny po transferze

Transfer jest darmowy. Data wygaśnięcia domeny po jego przeniesieniu będzie taka sama jak przed jego przeniesieniem. Aby odnowić usługę po jej przeniesieniu, przejdź na [stronę OVHcloud](https://www.ovh.co.uk/cgi-bin/order/renew.cgi).

## Sprawdź również <a name="gofurther"></a>

[Transfer domeny do OVHcloud](https://docs.ovh.com/pl/domains/przeniesienie-domeny-globalnej/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
