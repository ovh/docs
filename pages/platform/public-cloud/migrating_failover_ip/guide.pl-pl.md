---
title: 'Przeniesienie adresu IP Fail Over'
excerpt: 'Przeniesienie adresu IP Fail Over'
slug: przeniesienie_adresu_ip_fail_over
legacy_guide_number: g1890
section: 'Zarządzanie w Panelu klienta OVH'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja: 06-01-2022**

## Wprowadzenie

W tym przewodniku wyjaśniono, jak przenieść adres IP Failover (używany w przypadku awarii) z jednej instancji do innej. Dzięki tej operacji można ograniczyć czas niedostępności serwera lub uniknąć sytuacji braku dostępności, a ponadto jest możliwe:

- przeniesienie wielu stron internetowych do ich “nowych wersji”,
- prowadzenie działalności na serwerze zreplikowanym przy jednoczesnym przeprowadzaniu konserwacji lub aktualizacji na serwerze produkcyjnym.

## Wymagania początkowe

- Co najmniej dwie działające instancje Public Cloud
- Adres IP Failover
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Migracja IP Failover

Po pierwsze zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud{.action} i wybierz odpowiednią usługę Public Cloud. Następnie wybierz Failover IP w części **Network**.
W naszym przykładzie adres IP failover przekierowywany jest na "Instance_A" i chcemy go przekierować na "Instance_B".

![](images/failover2022.png){.thumbnail}

Kliknij na `...`{.action} obok IP failover i wybierz `Zmień przypisaną instancję`{.action}.

![](images/modify3.2022.png){.thumbnail}

Kliknij pole obok serwera docelowego.

![](images/modify1.png){.thumbnail}

- Kliknij na `Przypisz`{.action}.

- Po kilku sekundach Panel klienta zostanie zaktualizowany. Zostanie też wyświetlony następujący komunikat z potwierdzeniem pomyślnego przeniesienia:

![](images/modify2.2022.png){.thumbnail}


> [!success]
>
> IP Failover można skonfigurować na serwerze docelowym przed
> wykonać przełączanie, lub po oczywiście. Jeśli jest wstępnie skonfigurowany,
> odpowiedź rozpoczyna się w momencie zakończenia operacji routingu.
>

## Sprawdź również

[Konfiguracja IP Failover](https://docs.ovh.com/pl/public-cloud/konfiguracja-adresu-ip-failover/)

[Importowanie adresu IP Fail Over](https://docs.ovh.com/pl/public-cloud/importowanie_adresu_ip_fail_over/)
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

