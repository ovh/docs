---
title: "Konfiguracja rewersu DNS na serwerze VPS"
excerpt: Dowiedz się, jak wdrożyć rewers DNS
slug: konfiguracja_rewersu_dns_vps
routes:
    canonical: 'https://docs.ovh.com/pl/public-cloud/konfiguracja_rewersu_dns_instancji/'
section: Sieć & IP
order: 3
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 24-11-2021**

## Wprowadzenie

Rewers **DNS** to uzupełnienie konfiguracji "klasycznej" serwerów DNS, która pozwala na konwersję domeny na adres IP (rekord typu **A**). Dzięki tego typu zapytaniu, adres IP może zostać usunięty w nazwie domeny (rejestracja typu **PTR**). Oznacza to, że zapytania DNS na danym adresie IP będą miały nazwę domeny.

Konfiguracja **rewersu DNS** VPS jest szczególnie przydatna przy wysyłaniu e-maili. Ryzyko odrzucenia wiadomości przez system ochrony przed spamem zostanie zmniejszone, jeśli adres IP Twojego serwera poczty wychodzącej zostanie poprawnie rozwiązany w Twojej domenie.

**Dowiedz się, jak skonfigurować rewers DNS dla adresu lub adresów IP VPS.**

## Wymagania początkowe

- Posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Nazwa domeny z polem `A` wskazującym na VPS
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i kliknij w menu po lewej stronie `IP`{.action}.

Tabela na tej stronie zawiera listę usług, które możesz spełnić. Nazwa VPS można filtrować z rozwijanego menu **Service**.

![Rewers DNS](images/reversecp01.png){.thumbnail}

Kliknij `...`{.action} w linii odpowiedniego adresu IP i wybierz `Zmień rewers`{.action}.

![Rewers DNS](images/reversecp02.png){.thumbnail}

W nowym oknie wprowadź rewers i kliknij `Zatwierdź`{.action}.

Rewers możesz również edytować bezpośrednio na ikonie kolumny **Reverse** tabeli.

> [!primary]
>
Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy pole `A` jest poprawnie skonfigurowane w strefie DNS Twojej domeny. Uwaga, modyfikacja [strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/) może trwać do 24 godzin, jeśli ostatnio zmieniłeś pole `A`.
>

## Sprawdź również <a name="gofurther"></a>

[Pierwsze kroki z serwerem VPS](https://docs.ovh.com/pl/vps/pierwsze-kroki-vps/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.