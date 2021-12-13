---
title: Odwrócenie instancji flex
slug: przywracanie-instancji-flex
excerpt: Dowiedz się, jak przywrócić instancję typu flex w interfejsie OpenStack Horizon
section: Zarządzanie w interfejsie Horizon
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zaproponuj zmianę" na tej stronie.
>

**Ostatnia aktualizacja z dnia 10/12/2021**

## Wprowadzenie

Instancja *flex* to jednowymiarowa instancja dyskowa (50 GB), która przyspiesza wykonywanie snapshotów. Pozwala na zmianę rozmiaru serwera na wyższy lub niższy, z ustaloną przestrzenią dyskową, podczas gdy klasyczne modele mogą być zmieniane tylko na modele wyższe.</br> Wraz z rozwojem infrastruktury może być konieczne zwiększenie przestrzeni dyskowej instancji. W takim przypadku należy przywrócić instancję typu *flex* z klasycznego modelu. Operacja ta może zostać wykonana tylko w interfejsie Horizon.

</br>**Niniejszy przewodnik wyjaśnia, jak przywrócić instancję *flex* i zmienić jej rozmiar za pomocą interfejsu OpenStack Horizon.**

## Wymagania początkowe

- Utworzenie [instancji Public Cloud](../public-cloud-pierwsze-kroki/#krok-3-tworzenie-instancji) z opcją *flex*
- [Dostęp do interfejsu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/)

## W praktyce

Zaloguj się do [interfejsu](https://horizon.cloud.ovh.net/auth/login/) Horizon i sprawdź, czy wybrałeś właściwy region. Możecie to sprawdzić w lewym górnym rogu. 

![Wybór regionu](images/region2021.png){.thumbnail}

Kliknij menu `Compute`{.action} po lewej stronie, a następnie wybierz `Instances`{.action}. Wybierz `Resize Instance`{.action} z rozwijanego menu po prawej stronie odpowiedniej instancji.

![Zmień rozmiar instancji](images/resizeinstance2021.png){.thumbnail}

**Wybór szablonu (*Flavor Choice*)** <a name="flavorchoice"></a>

W tej sekcji podajemy aktualny szablon (*old flavor*) i możesz wybrać nowy szablon (*new flavor*) dla zasobów instancji.

W naszym przykładzie zapis « b2-15-flex » umożliwia powrót do zapachu « b2-15 » lub zastąpienie zapachu « b2-30 ». W tym przypadku chcemy zmienić model instancji na klasyczny « b2-30 ».

![Wybierz nowy model instancji](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Można przejść tylko z modelu Linux na inny model Linux i z modelu Windows na inny model Windows.
>
> - Opcja *flex* nie jest dostępna dla wszystkich modeli.
>

**Zaawansowane opcje (*Advanced Options*)**

Sekcja ta pozwala na zarządzanie partycjonowaniem dysku (*Disk Partition*) i grupy serwerów (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

APo zakończeniu konfiguracji kliknij `Resize`{.action}.

Po zakończeniu procesu Twoja instancja zostanie przywrócona do klasycznego modelu z większą przestrzenią dyskową.

![Nowy model instancji](images/newflavor.png){.thumbnail}

W przypadku, gdy chcesz powrócić do modelu *flex*, możesz to zrobić wykonując te same kroki wymienione [powyżej](#flavorchoice), i wybrać model *flex* zamiast klasycznego. 

Możesz również [edycja-konfiguracji-instancji](https://docs.ovh.com/pl/public-cloud/rozpoczecie_pracy_z_instancja_public_cloud/#edycja-konfiguracji-instancji) w Panelu klienta OVHcloud.

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.