---
title: Przeniesienie adresu Additional IP
excerpt: "Przeniesienie adresu Additional IP"
updated: 2023-01-04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](/links/network/additional-ip). To nie ma wpływu na jego funkcje.
>

## Wprowadzenie

W tym przewodniku wyjaśniono, jak przenieść adres Additional IP (używany w przypadku awarii) z jednej instancji do innej. Dzięki tej operacji można ograniczyć czas niedostępności serwera lub uniknąć sytuacji braku dostępności, a ponadto jest możliwe:

- przeniesienie wielu stron internetowych do ich “nowych wersji”,
- prowadzenie działalności na serwerze zreplikowanym przy jednoczesnym przeprowadzaniu konserwacji lub aktualizacji na serwerze produkcyjnym.

## Wymagania początkowe

- Co najmniej dwie działające instancje Public Cloud
- Adres Additional IP
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

> [!warning]
> Ta funkcja nie jest aktualnie dostępna dla instancji Metal.
>

## W praktyce

> [!warning]
>
> Dodatkowy adres IP nie może być przenoszony między różnymi strefami. Na przykład adres IP zlokalizowany w centrum danych SBG może zostać przeniesiony do GRA lub RBX, ale nie do BHS.
>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wybierz Twój projekt w sekcji `Public Cloud`{.action}.

W menu po lewej stronie przejdź do sekcji `Network`, a następnie otwórz część `Public IPs`{.action}. Kliknij kartę `Additional IP`{.action}.

W tym przykładzie adres Additional IP przekierowany na "Instance_A" zostanie przeniesiony na "Instance_B".

Kliknij `...`{.action} w linii Additional IP i wybierz `Zmień powiązaną`{.action} instancję.

![migracja IP](images/migrateip_01.png){.thumbnail}

Kliknij rozwijane menu, aby wybrać docelową instancję z listy.

![migracja IP](images/migrateip_02.png){.thumbnail}

Zatwierdź klikając przycisk `Dołącz`{.action}.

Po kilku sekundach Panel klienta jest aktualizowany. Jeśli migracja zakończyła się pomyślnie, wyświetli się komunikat potwierdzający.

![migracja IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
Additional IP może być skonfigurowany na serwerze docelowym przed lub po migracji. Jeśli został wstępnie skonfigurowany, zacznie odpowiadać po zakończeniu operacji routingu.
>

## Sprawdź również

[Konfiguracja Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)

[Importowanie adresu Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-import)
 
Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

