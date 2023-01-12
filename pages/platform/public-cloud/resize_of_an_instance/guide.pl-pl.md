---
title: Zmiana rozmiaru instancji
excerpt: Jak zmienić rozmiar instancji w interfejsie Horizon.
slug: zmiana_rozmiaru_instancji
legacy_guide_number: g1778
section: Zarządzanie w interfejsie Horizon
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zaproponuj zmianę" na tej stronie.
>

**Ostatnia aktualizacja z dnia 23-11-2021**

## Wprowadzenie

Jeśli Twoja działalność się rozwija i zapotrzebowanie na zasoby wzrasta, możesz za pomocą kilku kliknięć zwiększyć zasoby, którymi dysponuje Twoja instancja. 

**Z tego przewodnika dowiesz się, jak zmienić rozmiar instancji w interfejsie OpenStack Horizon.**

> [!warning]
>
> W przypadku modeli klasycznych możliwe jest tylko zmiana rozmiaru na wyższy.
> Operacja ta spowoduje również wycięcie instancji w czasie jej wykonywania.
> 

> [!success]
>
> Instancje typu *flex* umożliwiają zmianę rozmiaru na wyższe lub niższe modele dzięki unikalnemu rozmiarowi dysku.
> 

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/#krok-3-tworzenie-instancji) na Twoim koncie OVHcloud
- [Dostęp do interfejsu Horizon](../horizon/)

## W praktyce

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/) i upewnij się, że jesteś we właściwym regionie. Możesz to sprawdzić w lewym górnym rogu.</br>
Kliknij menu `Compute`{.action} po lewej stronie, a następnie wybierz `Instances`{.action}. Wybierz `Resize Instance`{.action} z rozwijanego menu po prawej stronie odpowiedniej instancji.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Wybór szablonu (*Flavor Choice*)

W tej sekcji podajemy aktualny szablon (*old flavor*) i możesz wybrać nowy szablon (*new flavor*) dla zasobów instancji.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Szczegóły szablonu (*Flavor Details*)

W tej sekcji wyświetlają się zasoby przypisane do wybranego szablonu. 

#### Limity Projektu (*Project Limits*)

Tutaj możecie zobaczyć wykorzystane zasoby w porównaniu z całkowitymi zasobami przeznaczonymi na dany projekt.

> [!warning]
> Pamiętaj, że możesz tylko zmienić rozmiar instancji z jednego modelu Linux na inny model Linux i z jednego modelu Windows na inny model Windows.
>

### Opcje zaawansowane (*Advanced Options*)

Sekcja ta pozwala na zarządzanie partycjonowaniem dysku (*Disk Partition*) i grupy serwerów (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Po zakończeniu konfiguracji kliknij `Resize`{.action}.

### Zmiana rozmiaru dysku w systemie Windows

Uwaga: podczas zmiany rozmiaru instancji Windows rozmiar partycji nie jest automatycznie aktualizowany. Należy więc rozszerzyć ją, używając **disk manager**:

- Kliknij prawym przyciskiem myszy w menu `Start`{.action} i uruchom menedżer dysku klikając `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

- Kliknij prawym przyciskiem myszy na partycję główną, a następnie kliknij `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Kliknij `Next`{.action}, aby uzyskać dostęp do `Extend Volume Wizard`. Wybierz zasoby dysku do rozszerzenia i kliknij `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Następnie kliknij `Finish`{.action}, aby zatwierdzić wybór.

![public-cloud](images/wizard2021.png){.thumbnail}

- Nowy rozmiar dysku zostanie wyświetlony w managerze dysku.

![public-cloud](images/2979.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.