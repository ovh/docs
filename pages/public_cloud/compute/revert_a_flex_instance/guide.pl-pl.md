---
title: Zmiana instancji flex na instancję klasyczną
excerpt: Dowiedz się, jak zmienić instancję flex w interfejsie OpenStack Horizon
updated: 2024-07-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Instancja *flex* to instancja o unikalnym dysku (50 GB) oferująca szybszy proces wykonywania snapshotów. Umożliwia skalowanie do wyższych lub niższych modeli o stałej przestrzeni dyskowej, podczas gdy klasyczne modele mogą być skalowane tylko do wyższych modeli.

Dzięki stale zmieniającej się infrastrukturze możesz zwiększyć przestrzeń dyskową Twojej instancji. W takim przypadku zmień wirtualną maszynę *flex* na klasyczny model. Operacja ta jest możliwa wyłącznie w interfejsie Horizon.

**Niniejszy przewodnik wyjaśnia, jak zmienić model *flex* na model klasyczny i zmienić rozmiar instancji *flex* w interfejsie OpenStack Horizon.**

## Wymagania

- Posiadanie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#krok-3-tworzenie-instancji) typu *flex*
- [Utworzenie dostępu do interfejsu Horizon](/pages/public_cloud/compute/introducing_horizon)

## W praktyce

> [!warning] 
> - W przypadku uaktualnienia z instancji flex do instancji classic z większą ilością zasobów, jest to uważane za uaktualnienie. W takim przypadku zostanie naliczona opłata za różnicę. Na koniec okresu rozliczeniowego otrzymasz dwie faktury.
>
> - Przejście z instancji elastycznej na klasyczną z mniejszą liczbą zasobów jest uznawane za obniżenie wersji. W takim przypadku faktura nie zostanie wystawiona.
>
> - Przejście z instancji elastycznej na klasyczną z tymi samymi zasobami nie zostanie zafakturowane.
>

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/) i upewnij się, czy jesteś w odpowiednim regionie. I możecie to sprawdzić w lewym górnym rogu. 

![Wybór regionu](images/region2021.png){.thumbnail}

Kliknij menu `Compute`{.action} po lewej stronie, a następnie kliknij `Instances`{.action}. Wybierz `Resize Instance`{.action} z rozwijanej listy odpowiedniej instancji.

![Zmień rozmiar instancji](images/resizeinstance2021.png){.thumbnail}

**Wybór szablonu (*Flavor Choice*)** <a name="flavorchoice"></a>

W tej sekcji podajemy aktualny szablon (*old flavor*), który pozwala na wybór nowego szablonu (*new flavor*) dla zasobu instancji.

W naszym przykładzie nasz szablon to « b2-15-flex ». Możemy powrócić do klasycznego szablonu « b2-15 » lub zaktualizować instancję do szablonu « b2-30 », aby uzyskać więcej przestrzeni dyskowej. W naszym przypadku chcemy zaktualizować instancję do klasycznego modelu « b2-30 », aby zwiększyć przestrzeń dyskową.

![Wybierz nową](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Możesz przejść wyłącznie z jednego modelu Linux na inny model Linux i z jednego systemu Windows na inny model Windows.
>
> - Opcja *flex* nie jest dostępna dla wszystkich modeli.
>

**Opcje zaawansowane (*Advanced Options*)**

Sekcja ta pozwala na zarządzanie partycjonowaniem dysku (*Disk Partition*) i grupy serwerów (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Aby kontynuować, kliknij przycisk `Resize`{.action}.

Po zakończeniu procesu Twoja instancja zostanie przeniesiona na model klasyczny z większą przestrzenią dyskową.

![Nowa aplikacja](images/newflavor.png){.thumbnail}

Jeśli chcesz zmienić model *flex*, możesz to zrobić wykonując te same kroki, o których mowa [powyżej](#flavorchoice), wybierając szablon *flex* zamiast klasycznego szablonu. 

Możesz również [edycja-konfiguracji-instancji](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#edycja-konfiguracji-instancji) w Panelu klienta.

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.