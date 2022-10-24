---
title: 'Zabezpieczenie domeny za pomocą DNSSEC'
excerpt: 'Dowiedz się, jak chronić domeny przed atakiem DNS (Cache Poisoning) za pomocą DNSSEC'
slug: jak_skonfigurowac_strefe_dnssec_dla_domeny
legacy_guide_number: g609
section: Bezpieczeństwo
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 19-10-2022**

## Wprowadzenie

Konfiguracja DNS domeny zapisana jest na serwerach DNS. W przypadku klasycznego użycia konfiguracja ta umożliwia powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail. W ostatnich latach atakujący opracowali bardzo skuteczne metody zatruwania serwerów DNS, dzięki czemu mogą przekierowywać ruch z domeny na inne serwery. Możesz ochronić Twoją domenę przed tego typu atakami, korzystając z DNSSEC.

**Dowiedz się, jak aktywować DNSSEC dla Twojej domeny, aby zapewnić jej ochronę przed atakami DNS typu Cache Poisoning.**  
Dla lepszego zrozumienia, jak ta ochrona działa, zachęcamy do lektury treści na stronie: [Jak działa usługa DNSSEC](https://www.ovhcloud.com/pl/domains/dnssec/){.external}.

## Wymagania początkowe

- Posiadanie domeny zarejestrowanej w OVHcloud
- Wybrana domena powinna posiadać rozszerzenie kompatybilne z DNSSEC
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Web Cloud`{.action}

## W praktyce

Aktywacja DNSSEC jest możliwa w dwóch przypadkach:

- **Twoja domena korzysta z serwerów DNS OVHcloud**: aktywacji dokonujesz w prosty sposób w Panelu klienta;

- **jeśli nazwa domeny nie korzysta z serwerów DNS OVHcloud**, należy skontaktować się z dostawcą usług zarządzającym konfiguracją DNS i poprosić go o wszystkie parametry. Następnie przejdź do sekcji `Web Cloud`{.action}. Kliknij przycisk `Domeny`{.action}, a następnie wybierz nazwę domeny z listy.
Kliknij zakładkę `rekordy DS`{.action}, następnie kliknij przycisk Edytuj po prawej stronie, a następnie kliknij przycisk `+`{.action}.
Teraz możesz wypełnić 4 pól "Key tag", "Flag", "Algorithm","Public key (encoded in base64)" danymi dostarczonymi przez bieżącego usługodawcę.

> [!primary]
>
> Aby sprawdzić, czy Twoja domena używa konfiguracji DNS OVHcloud, kliknij zakładkę `Serwery DNS` w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
>

### Etap 1: logowanie do interfejsu zarządzania domeną

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} > sekcja `Web Cloud`{.action}. Po zalogowaniu kliknij `Hosting`{.action}, następnie wybierz odpowiedni hosting.

Na stronie, która się wyświetla widoczne są ogólne informacje o hostingu. 

### Etap 2: zarządzanie DNSSEC domeny

W zakładce `Informacje ogólne`{.action} możesz sprawdzić stan aktywacji DNSSEC dla Twojej domeny.

W sekcji „Bezpieczeństwo” sprawdź status obok wzmianki „Zabezpieczenie DNS - DNSSEC”.

![DNSSEC](images/activate-dnssec-step2.png){.thumbnail}

Używając przycisku aktywacji, będziesz mógł włączyć lub wyłączyć DNSSEC dla Twojej domeny. Wyświetli się wówczas nowe okno, w którym powinieneś zatwierdzić zmianę.

![DNSSEC](images/activate-dnssec-step3.png){.thumbnail}

### Etap 3: czas aktywacji / dezaktywacji DNSSEC 

Na efekty włączenia / wyłączenia DNSSEC należy poczekać maksymalnie 24 godziny.  

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.