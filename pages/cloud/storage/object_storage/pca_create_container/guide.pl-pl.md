---
title: Object Storage Swift - Tworzenie kontenera Public Cloud Archive
slug: pca/tworzenie-kontenera
excerpt: Dowiedz się, jak utworzyć Twoje kontenery Public Cloud Archive w Panelu klienta OVHcloud
section: OpenStack Swift Archive Storage Class Specifics
order: 020
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

Oferta Public Cloud Archive to rozwiązanie do przechowywania danych bez ograniczeń. Fakturowanie jest proste i dostosowane do Twoich potrzeb. Istnieje wiele rodzajów kontenerów obiektów:

- w przypadku hostingu statycznego (statyczna strona internetowa);
- dla hostingu prywatnego (Przykład: przechowywanie danych osobowych);
- do hostingu publicznego (do przechowywania wszystkiego, co jest dostępne publicznie);
- do archiwizacji danych.

Pierwszy etap polega na utworzeniu kontenera, który gromadzi Twoje pliki. 

**Niniejszy przewodnik wyjaśnia, jak utworzyć kontener w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

### Utworzenie kontenera Public Cloud Archive w Panelu klienta OVHcloud

Zaloguj się do swojego [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Cloud Archive`{.action} na pasku nawigacji po lewej stronie `Storage`.

W przypadku pierwszego kontenera:

![pca dashboard](images/create-container-20211006094158312.png)

Jeśli już utworzyłeś jeden/kilka kontenerów:

![pca dashboard](images/create-container-20211006094851682.png)

Wybierz region kontenera i kliknij `Dalej`{.action}:

![select a region](images/create-container-20211006094448923.png)

Nazwij kontener i kliknij na `Dodaj kontener`{.action}:

> [!warning]
>
> Jeśli chcesz przypisać kontener do domeny, nazwa kontenera nie może zawierać następujących znaków:
> 
> - [ . ]
> - [ _ ]
> - nie wolno używać wielkich liter.
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Powiązanie kontenera z nazwą domeny](https://docs.ovh.com/pl/storage/umieszczenie_kontenera_object_storage_za_domena/)".
>

![kontener name](images/create-container-20211006094550334.png)

Kontener został utworzony:

![kontener created](images/create-container-20211006094630754.png)

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
