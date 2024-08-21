---
title: "Konfiguracja rewersu DNS na serwerze VPS"
excerpt: Dowiedz się, jak wdrożyć rewers DNS
updated: 2024-06-10
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

**Rewers DNS** (*rDNS*) to uzupełnienie konfiguracji "klasycznej" serwerów DNS, która pozwala na konwersję domeny na adres IP (rekord typu **A**). Dzięki tego typu zapytaniu, adres IP może zostać usunięty w nazwie domeny (rejestracja typu **PTR**). Oznacza to, że zapytania DNS na danym adresie IP będą miały nazwę domeny.

Konfiguracja **rewersu DNS** VPS jest szczególnie przydatna przy wysyłaniu e-maili. Ryzyko odrzucenia wiadomości przez system ochrony przed spamem zostanie zmniejszone, jeśli adres IP Twojego serwera poczty wychodzącej zostanie poprawnie rozwiązany w Twojej domenie.

**Dowiedz się, jak skonfigurować rewers DNS dla adresu lub adresów IP VPS.**

## Wymagania początkowe

- Posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Nazwa domeny z polem `A` wskazującym na VPS
- Dostęp do [Panelu client OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i otwórz `Network`{.action}. Następnie kliknij przycisk `IP`{.action}.

W rozwijanym menu **Moje publiczne adresy IP i usługi powiązane** możesz podzielić Twoje usługi na kategorie.

![Reverse IP](images/filteripvps.png){.thumbnail}

Kliknij `...`{.action} w linii odpowiedniego adresu IP i wybierz `Zmień rewers`{.action}.

![Rewers DNS](images/modifyreverse.png){.thumbnail}

W nowym oknie wprowadź rewers i kliknij `Zatwierdź`{.action}.

![Rewers DNS](images/enterreverse.png){.thumbnail}

Rewers możesz również edytować bezpośrednio na ikonie kolumny **Reverse** tabeli.

> [!primary]
>
Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy pole `A` jest poprawnie skonfigurowane w strefie DNS Twojej domeny. Uwaga, modyfikacja [strefy DNS](/pages/web_cloud/domains/dns_zone_edit) może trwać do 24 godzin, jeśli ostatnio zmieniłeś pole `A`.
>

## Sprawdź również <a name="gofurther"></a>

[Pierwsze kroki z serwerem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Dołącz do [grona naszych użytkowników](/links/community).