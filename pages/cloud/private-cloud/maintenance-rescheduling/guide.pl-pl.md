---
title: "Przeniesienie zaplanowanej konserwacji do Hosted Private Cloud"
excerpt: "Dowiedz się, jak przenieść zaplanowaną konserwację na usługę Hosted Private Cloud powered by VMware"
slug: maintenance-rescheduling
section: Funkcjonalności OVHcloud
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 30-11-2022**

## Wprowadzenie

Po zaplanowaniu prac konserwacyjnych na Twojej usłudze Hosted Private Cloud otrzymasz e-mail z powiadomieniem o dacie przeprowadzenia prac konserwacyjnych. Jeśli data ta nie jest dla Ciebie odpowiednia, na przykład ze względu na konieczność produkcji, możesz przełożyć tę konserwację na wybrany termin w Panelu klienta OVHcloud lub API OVHcloud.

> [!primary]
> Staramy się jak najlepiej dopasować się do Twojego zapotrzebowania na infrastrukturę. Czasem jednak musimy zaplanować prace konserwacyjne, w przypadku których nie będzie można zmienić daty i/lub godziny (np. prace konserwacyjne w infrastrukturze z udziałem kilku klientów, pilne interwencje w celu uniknięcia incydentu itp.).
>
> Jeśli data konserwacji może zostać zmieniona przez użytkownika, proponowane nowe daty mieszczą się w skróconym przedziale czasowym.

**Dowiedz się, jak zmienić datę zaplanowanej konserwacji na Hosted Private Cloud powered by VMware w Panelu klienta OVHcloud lub w API OVHcloud.**

## Wymagania początkowe

- Otrzymałeś e-mail z powiadomieniem o pracach konserwacyjnych informujący, że możesz **zmienić datę wykonania prac konserwacyjnych**. W przeciwnym razie data utrzymania nie może zostać zmieniona.
- Posiadanie kontaktu administracyjnego lub technicznego w infrastrukturze [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/).
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub [interfejsu administracyjnego usług przez API](https://eu.api.ovh.com/).

## W praktyce

> [!success]
> E-maile wysłane przez OVHcloud są również dostępne w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).<br>
> Kliknij Twoją nazwę w prawym górnym rogu ekranu, a następnie `E-maile usługi`{.action} w menu po prawej stronie.

### W Panelu klienta OVHcloud

Zaloguj się do Twojego [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) za pomocą konta administratora.

W menu `Hosted Private Cloud`{.action} kliknij zakładkę `Operations`{.action}. Wybierz `Do wykonania`{.action} z rozwijanego menu, w którym mają być filtrowane operacje.

Następnie kliknij przycisk...`, a następnie `{.action}Zmień datę przetwarzania` `{.action}.

![zmiana harmonogramu](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Jeśli przycisk `Zmień datę przetwarzania`{.action} jest szary, oznacza to, że nie można odroczyć tej konserwacji.

Wybierz datę w przedstawionym kalendarzu. Można wybrać tylko daty bez szarości.<br>
Następnie wprowadź ręcznie kolejną godzinę konserwacji lub zostaw niezmieniony pierwotnie zaplanowany czas. Jeśli przekroczysz ostatnią dozwoloną godzinę, ostatnia możliwa godzina programowania zostanie automatycznie zaproponowana.<br>
**Uważaj!** Aby został uwzględniony, nie należy już podkreślać nowego harmonogramu na niebiesko. Po wpisaniu nowego harmonogramu kliknij obok niego w oknie, aby nie zaznaczono na niebiesko harmonogramu.

Następnie kliknij przycisk `Zmień`{.action}, aby zatwierdzić zmiany.

![zmiana harmonogramu](images/maintenance-date-edition02.png){.thumbnail}

### Za pośrednictwem API OVHcloud

Zaloguj się do [interfejsu administracyjnego Twoich usług przez API](https://eu.api.ovh.com/). Zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](https://docs.ovh.com/pl/api/first-steps-with-ovh-api/)".

Wykonaj następujące wywołanie API:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
>

Wpisz zmienne:

- serviceName: numer referencyjny usługi Dedicated Cloud w formie `pcc-XX-XX-XX`.
- taskId: jest to "numer referencyjny operacji" konserwacji podany w przesłanym do Ciebie e-mailu z powiadomieniem.
- executionDate: wprowadź nową datę konserwacji w formacie `YYYY-MM-DDTHH:MM+01:SS` (np. 2023-01-02T08:00:00+01:00 dla konserwacji zaplanowanej na dzień 02/01/2023 o 0800 (UTC+1).

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.