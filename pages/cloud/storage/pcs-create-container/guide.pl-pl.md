---
title: Tworzenie kontenera Object Storage
slug: pcs/create-container
excerpt: Dowiedz się, jak utworzyć kontenery Object Storage w Panelu klienta OVHcloud
section: Object Storage Standard (Swift)
order: 110
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

Oferta Object Storage dla Public Cloud to nielimitowane rozwiązanie do przechowywania danych, za które można płacić w prosty sposób, w zależności od potrzeb. Istnieje wiele rodzajów kontenerów obiektów:

- w przypadku hostingu statycznego (statyczna strona internetowa);
- dla hostingu prywatnego (Przykład: przechowywanie danych osobowych);
- do hostingu publicznego (do przechowywania wszystkiego, co jest dostępne publicznie);
- do archiwizacji danych.

Pierwszy etap polega na utworzeniu kontenera, który gromadzi Twoje pliki. 

**Niniejszy przewodnik wyjaśnia, jak go utworzyć w Panelu klienta OVHcloud i w interfejsie Horizon Openstack.**

## Wymagania początkowe

- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

Jeśli korzystasz z interfejsu Horizon:

- Utworzenie [użytkownika OpenStack](https://docs.ovh.com/pl/public-cloud/tworzenie-i-usuwanie-uzytkownika-openstack/).

## W praktyce

### Tworzenie kontenera Object Storage w Panelu klienta OVHcloud

Zaloguj się do swojego [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Object Storage`{.action} na pasku nawigacji po lewej stronie w `Storage`.

Następnie kliknij `Utwórz kontener obiektów`{.action}.

W przypadku pierwszego kontenera:

![pcs dashboard](images/create-container-20211005102334181.png)

Jeśli już utworzyłeś jeden/kilka kontenerów:

![pcs dashboard](images/create-container-20211005115040834.png)

Wybierz rozwiązanie i kliknij `Dalej`{.action}:

![wybierz rozwiązanie](images/create-container-20211005110710249.png)

Wybierz region kontenera i kliknij `Dalej`{.action}:

![select a region](images/create-container-20211005110859551.png)

Wybierz typ kontenera, po czym kliknij `Dalej`{.action}:

![select a type of container](images/create-container-20211005111542718.png)

Nazwij kontener i kliknij `Dodaj kontener`{.action}:

> [!warning]
>
> Jeśli chcesz przypisać kontener do domeny, nazwa kontenera nie może zawierać następujących znaków: 
>
> - [ . ] 
> - [ _ ] 
> - i nie należy używać wielkich liter.
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Łączenie kontenera z nazwą domeny](https://docs.ovh.com/pl/storage/umieszczenie_kontenera_object_storage_za_domena/)".
>

![kontener name](images/create-container-20211005111805966.png)

Kontener został utworzony:

![kontener created](images/create-container-20211005112013807.png)

### Tworzenie kontenera Object Storage w interfejsie Horizon

> [!primary]
>
> Nie można utworzyć kontenera Public Cloud Archive w interfejsie Horizon
>

Zaloguj się do [panelu Horizon](https://horizon.cloud.ovh.net){.external}:

![logiczny horyzont czasowy](images/create-container-20211005155245752.png)

Rozwijaj menu `Object Store`{.action}, kliknij `Containers`{.action}, a następnie `+ Container`{.action}

![Kontenery Horizon](images/create-container-20211005155704887.png)

Nazwij kontener.

  > [!warning]
  >
  > Jeśli chcesz przypisać kontener do domeny, nazwa kontenera nie może zawierać następujących znaków:
  >
  > - [ . ]
  > - [ _ ]
  > - Nie wolno używać wielkich liter.
  >
  > Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Łączenie kontenera z nazwą domeny](https://docs.ovh.com/pl/storage/umieszczenie_kontenera_object_storage_za_domena/)".
  >

Wybierz politykę dostępów dla kontenera i kliknij `Next`{.action}

![horizon create container](images/create-container-20211005155824902.png)

Kontener został utworzony.

![horizon container created](images/create-container-20211005155936971.png)

Możesz również sprawdzić ten parametr w Panelu klienta:

![pcs dashboard](images/create-container-20211005160503200.png)

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com](https://community.ovh.com/en/).
