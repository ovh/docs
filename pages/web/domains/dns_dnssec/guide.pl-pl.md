---
title: 'Zabezpieczenie domeny za pomocą DNSSEC'
excerpt: 'Dowiedz się, jak chronić domeny przed atakiem DNS (Cache Poisoning) za pomocą DNSSEC'
slug: jak_skonfigurowac_strefe_dnssec_dla_domeny
legacy_guide_number: g609
section: Bezpieczeństwo
order: 1
---

**Ostatnia aktualizacja z dnia 24-04-2019**

## Wprowadzenie

Konfiguracja DNS domeny zapisana jest na serwerach DNS. W przypadku klasycznego użycia konfiguracja ta umożliwia powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail. W ostatnich latach atakujący opracowali bardzo skuteczne metody zatruwania serwerów DNS, dzięki czemu mogą przekierowywać ruch z domeny na inne serwery. Możesz ochronić Twoją domenę przed tego typu atakami, korzystając z DNSSEC.

**Dowiedz się, jak aktywować DNSSEC dla Twojej domeny, aby zapewnić jej ochronę przed atakami DNS typu Cache Poisoning.**  
Dla lepszego zrozumienia, jak ta ochrona działa, zachęcamy do lektury treści na stronie: [Jak działa usługa DNSSEC](https://www.ovh.pl/domeny/usluga_dnssec.xml){.external}.

## Wymagania początkowe

- Posiadanie domeny zarejestrowanej w OVH
- Wybrana domena powinna posiadać rozszerzenie kompatybilne z DNSSEC
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > sekcja `Web`{.action}

## W praktyce

Aktywacja DNSSEC jest możliwa w dwóch przypadkach:

- **Twoja domena korzysta z serwerów DNS OVH**: aktywacji dokonujesz w prosty sposób w Panelu klienta;

- **Twoja domena nie używa serwerów DNS OVH**: zwróć się do administratora zarządzającego jej konfiguracją DNS.  Jeśli sam zarządzasz domeną, zainstaluj DNSSEC ręcznie. W tym przypadku skorzystaj z dokumentacji technicznej dostępnej online.

> [!primary]
>
> Aby sprawdzić, czy Twoja domena używa konfiguracji DNS OVH, kliknij zakładkę `Serwery DNS` w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}.
>

### Etap 1: logowanie do interfejsu zarządzania domeną

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external} > sekcja `Web`{.action}. Po zalogowaniu kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiedni hosting.

Na stronie, która się wyświetla widoczne są ogólne informacje o hostingu. 

![DNSSEC](images/activate-dnssec-step1.png){.thumbnail}

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