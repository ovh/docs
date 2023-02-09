---
title: Zarządzanie kontem SMS SMPP
excerpt: "Dowiedz się, jak zarządzać ustawieniami konta SMPP w Panelu klienta OVHcloud"
slug: smpp-control-panel
section: SMPP
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 09-02-2023**

## Wprowadzenie

W Panelu klienta OVHcloud możesz odnaleźć dane do logowania SMPP, zmienić hasło, zarządzać dostępami do usługi i przenieść zasilenia SMS.

**Dowiedz się, jak zarządzać ustawieniami konta SMS SMPP w Panelu klienta OVHcloud.**

> [!primary]
>
> Zalecamy zapoznanie się z [specyfikacjami technicznymi oferty SMPP OVHcloud](https://docs.ovh.com/pl/sms/smpp-specifications/).

## Wymagania początkowe

- Posiadanie [konta SMS SMPP OVHcloud](https://www.ovhcloud.com/pl/sms/api-sms/)
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) w części `Telecom`{.action} następnie `SMS`{.action}.

## W praktyce

Wybierz konto SMPP. Nazwa serwera różni się od innych kont SMS OVHcloud. Zaczyna się bowiem od `smpp-` zamiast `sms-` dla klasycznych kont SMS.

![SMPP account](images/smpp-account.png){.thumbnail}

## Dane identyfikacyjne

Ramka `Informacje ogólne` pozwala na odnalezienie danych identyfikacyjnych niezbędnych do korzystania z usługi. Skopiuj zawartość przycisku z prawej strony każdego pola.

![SMPP account](images/smpp-account-ID.png){.thumbnail}

W przypadku zapomnienia hasła SMPP, kliknij przycisk `Wygeneruj nowe hasło`{.action}. Nowe hasło zostanie wysłane na adres e-mail do kontaktu Twojego konta OVHcloud, który zostanie wyświetlony.<br>

Kliknij polecenie `Wyślij`{.action}, aby potwierdzić operację.

![SMPP account](images/smpp-account-password.png){.thumbnail}

### Zarządzanie dostępami

Kliknij zakładkę `Opcje`{.action}, a następnie `Parametry SMPP`{.action}.

![SMPP account](images/smpp-acl0.png){.thumbnail}

Pole `Autoryzowane adresy IP` adresy IP klientów SMPP, którzy mają prawo dostępu do serwera SMPP.

Kliknij przycisk `Dodaj adres IP`{.action}, aby dodać adresy IP do tej listy.

![SMPP account](images/smpp-acl1.png){.thumbnail}

### Zarządzanie nadawcami i zasileniami

Zapoznaj się z naszymi przewodnikami na temat [zarządzanie nadawcami](https://docs.ovh.com/pl/sms/wysylanie-wiadomosci-sms-z-panelu-klienta/#etap-3-wybor-nadawcy-wiadomosci-sms_1) oraz na temat [zarządzanie zasileniami SMS i automatycznym doładowaniem](https://docs.ovh.com/pl/sms/aktywowanie-automatycznego-ladowania-zasilen-sms/).

## Sprawdź również

Sprawdź [przewodnik dotyczący zarządzania historią wiadomości SMS](https://docs.ovh.com/pl/sms/zarzadzanie-historia-wiadomosci-sms/).

[Specyfikacje techniczne oferty SMPP OVHcloud](https://docs.ovh.com/pl/sms/smpp-specifications/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
