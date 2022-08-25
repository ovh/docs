---
title: Zmiana rozmiaru instancji
excerpt: 'Jak zmienić rozmiar instancji w Panelu klienta OVHcloud'
slug: resize-an-instance-manager
section: 'Zarządzanie w Panelu klienta OVH'
order: 6
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zaproponuj zmianę" na tej stronie.
>

**Ostatnia aktualizacja z dnia 25-08-2022**

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

- Posiadanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Instancje`{.action} w menu po lewej stronie. 

Następnie kliknij `...`{.action} po prawej stronie instancji i wybierz `Edytuj`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

W nowej zakładce przewiń stronę do sekcji **Model**, aby wybrać wybrany model.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> W przypadku modeli klasycznych możesz przełączyć na dowolny model o podobnym lub większym dysku. Nie możesz przejść do modelu z mniejszym dyskiem.<br/>
>
> Tylko **elastyczne instancje** mogą być aktualizowane i podświetlane, zachowując stały rozmiar dysku 50 GB.
>

Jeśli Twój dysk jest równy lub mniejszy niż 50 GB, możesz przejść do elastycznej `instancji`{.action}.

> [!warning]
> Uwaga: w przypadku edycji instancji typu *flex* nie można przejść na instancję klasyczną w Panelu klienta. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem dotyczącym [Zmiana instancji flex na instancję klasyczną](https://docs.ovh.com/pl/public-cloud/zmiana-instancji-flex/).
>

Po dokonaniu wyboru kliknij `Zmień model`{.action}, aby potwierdzić wybór.

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