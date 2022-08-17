---
title: Tworzenie wolumenu z kopii zapasowej
slug: create-volume-from-backup
excerpt: Dowiedz się, jak utworzyć dodatkowe dyski na podstawie kopii zapasowej dodatkowego dysku
section: 'Przestrzeń dyskowa'
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 02-04-2021**

## Wprowadzenie

Możesz utworzyć dodatkowe dyski dla instancji Public Cloud, wykonując kopię zapasową dodatkowego dysku.

Może to być przydatne w następujących przypadkach:

- Jeśli chcesz przywrócić dane z dodatkowego dysku.
- Jeśli chcesz dysponować wydajną przestrzenią dyskową o wysokiej dostępności.
- Jeśli chcesz przenieść dane do innej instancji.

**Dowiedz się, jak utworzyć i skonfigurować dodatkowy dysk na jednej z Twoich instancji przy użyciu kopii zapasowej dysku.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/){.external} na koncie OVHcloud
- Posiadanie kopii zapasowej dysku w tym samym regionie OpenStack.
- Dostęp do instancji przez SSH jako administrator (root)

## W praktyce

### Utwórz dysk z kopii zapasowej

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Volume Snapshot`{.action} na pasku nawigacji po lewej stronie w `Storage`.

Po prawej stronie wybranej kopii zapasowej kliknij przycisk `...`{.action} a następnie `Utwórz wolumen`{.action}.

![tworzyć](images/volume01.png){.thumbnail}

Wpisz nazwę nowego dysku i jego pojemność, po czym kliknij `Utwórz wolumen`{.action}.

![tworzyć](images/volume02.png){.thumbnail}

Utworzenie dysku może zająć kilka minut, w zależności od jego rozmiaru.

### Przypisz dysk do instancji

Po utworzeniu dysku możesz zadecydować o przypisaniu go do instancji. W tym celu kliknij `Block Storage`{.action} na pasku nawigacji po lewej stronie `Storage`.

Po prawej stronie wybranego wolumenu kliknij przycisk `...`{.action}, a następnie `Przypisz do instancji`{.action}.

![przywiąż wolumen](images/volume03.png){.thumbnail}

Wybierz instancję i kliknij `Potwierdź`{.action}, aby podłączyć dysk.

![przywiąż wolumen](images/volume04.png){.thumbnail}

Proces łączenia dysku z Twoją instancją rozpocznie się i może zająć kilka minut.

![przywiąż wolumen](images/volume05.png){.thumbnail}

> [!warning]
Podczas łączenia dysku unikaj przeglądania strony poza zakładką w trakcie. Może to zakłócić proces.
>

Po podłączeniu możesz przejść do kolejnych etapów [w systemie Linux](../utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/#w-systemie-linux) lub [Windows](../utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/#w-systemie-windows).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
