---
title: Transfer domeny do innego operatora
slug: transfer_wychodzacy_domeny_globalnej_lub_geograficznej
excerpt: Dowiedz się, jak wykonać transfer domeny z OVHcloud do wybranego operatora
section: Transfer
order: 4
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 21-07-2022**

## Wprowadzenie

**Transfer domeny** odnosi się do przeniesienia domeny z jednego operatora na drugi. Na przykład, jeśli zamówiłeś domenę na naszej stronie internetowej, OVHcloud jest jej aktualnym operatorem. Transfer domeny wychodzącej musi zostać zainicjowany przez nowego operatora.

Aby zapobiec przenoszeniu domeny bez zezwolenia, domeny są zazwyczaj blokowane przez status *clientTransferProhibited*. Ochrona ta musi zostać usunięta w Panelu klienta OVHcloud przed rozpoczęciem transferu.

**Niniejszy przewodnik wyjaśnia, jak przygotować domenę do transferu wychodzącego.**

## Wymagania początkowe

- Posiadanie [domeny zarejestrowanej](https://www.ovhcloud.com/pl/domains/) w OVHcloud
- Posiadanie uprawnień do złożenia wniosku o transfer domeny: właściciel i/lub administratorzy domeny powinni zostać poinformowani o wszczęciu takiej procedury. 
- Dostęp do interfejsu zarządzania domeną w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Rejestracja tej domeny trwa co najmniej 60 dni i nie została przeniesiona ani wymieniona (tj. zmiana właściciela) w ciągu ostatnich 60 dni

> [!primary]
>
> Jeśli jesteś **właścicielem** domeny, ale zarządzanie nią w Panelu klienta OVHcloud jest niedostępne, zarówno poprzez własny dostęp, jak i poprzez kontakt administracyjny domeny, zapoznaj się z [tym przewodnikiem](../../customer/zarzadzanie_kontaktami/#przypadek-wlasciciela-domeny).
>

## W praktyce

> [!warning]
>
> Poniższe instrukcje opisują najpopularniejszy sposób transferu domeny, ważny dla większości domen najwyższego poziomu (top-level domain lub TLD). Jednakże szczegółowe przepisy dotyczące procedur właściwych dla TLD są określane wyłącznie przez właściwy organ, tj. **rejestr**. Rejestratorzy, tacy jak OVHcloud, muszą przestrzegać tych zasad i nie mają wpływu na decyzje podejmowane przez rejestry.
>
> Dokładna procedura transferu domeny może się zatem różnić, w szczególności w przypadku niektórych TLD kodu kraju (np. ccTLD, np. .lu, .uk., .hk, .ro) i niektórych TLD specjalnych (.am, .fm, itp..). Transfery mogą być również zakazane z różnych powodów, np. w przypadku płatności oczekujących na płatność, nadużycia lub blokady rejestru.
>
> W przypadku wątpliwości zalecamy sprawdzenie następujących zasobów:
>
> - strona internetowa odpowiedniego rejestru TLD;
> - Lista [TLD dostępnych w OVHcloud](https://www.ovhcloud.com/pl/domains/tld/);
> - [Wyjaśnienia ICANN dotyczące kodów statusu EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (aby dowiedzieć się, które kody statusu mają obecnie zastosowanie do Twojej domeny, należy przeszukać *Whois*, najlepiej korzystając ze strony internetowej odpowiedniego rejestru TLD);
> - Twoja strona WWW oraz interfejs zarządzania nowym operatorem, zwłaszcza w przypadku pytań dotyczących procesu transferu oczekującego na połączenie.
>

### Etap 1: wyłączenie ochrony przed transferem domeny

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) wybierz `Web Cloud`{.action}. Kliknij `Domeny`{.action}, po czym wybierz odpowiednią nazwę domeny.

W zakładce `Informacje ogólne`{.action} znajdziesz suwak `Ochrona przed transferem` pod **zabezpieczeniem**. Domyślnie ochrona ta jest `Aktywne`{.action}.

![ochrona włączona](images/outgoing-transfer-step1.png){.thumbnail}

Kliknij kursor i potwierdź w oknie, które się wyświetli, że chcesz usunąć tę ochronę. Odczekaj kilka minut, aż stan się `Wyłączone`{.action}.

![dezaktywacja](images/outgoing-transfer-step2.png){.thumbnail}

> [!primary]
>
> Po odblokowaniu domeny zostanie ona odblokowana na siedem dni. Po tym czasie ochrona zostanie automatycznie ponownie włączona. Jeśli w tym czasie nie wystąpi o transfer domeny do nowego operatora, konieczne będzie ponowne usunięcie ochrony domeny.
>

### Etap 2: pobrać kod transferu

Po odblokowaniu Twojej domeny do transferu, pobierz jej kod transferu.  W tym celu, w zakładce `Informacje ogólne`{.action}, kliknij przycisk `AUTH/INFO`{.action} znajdujący się obok przycisku `Ochrona przed transferem`. Jeśli to konieczne, odśwież stronę.

Wyświetli się wówczas okno zawierające kod AUTH/INFO (zwany również kodem transferu, hasłem domeny, AUTH-CODE lub EPP-Code).

![outgoingtransfer](images/outgoing-transfer-step3.png){.thumbnail}

Kod zostanie poproszony przez nowego operatora o zakończenie procesu transferu. Szczegóły możesz sprawdzić u nowego operatora.

Zamiast ręcznie wpisywać kod, zalecamy jego skopiowanie/wklejenie, ponieważ niektóre znaki mogą być łatwo mylone.

> [!warning]
>
> Jeśli nazwa domeny została zawieszona lub wygasła, konieczne jest utworzenie [zgłoszenia serwisowego](https://www.ovh.com/manager/dedicated/#/support/tickets/new) w Panelu klienta OVHcloud.

### Etap 3: rozpocząć transfer do nowego operatora

Po wykonaniu poprzednich etapów, możesz rozpocząć proces transferu, zazwyczaj składając zamówienie. Transfer może trwać do 10 dni. 

Aby uzyskać więcej informacji, skontaktuj się z nowym operatorem.

## Sprawdź również

[Transfer domeny.co.uk wychodzący](../transfer_wychodzacy_domeny_couk/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.