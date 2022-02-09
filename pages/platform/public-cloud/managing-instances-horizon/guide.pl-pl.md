---
title: Zarządzanie instancjami Public Cloud w interfejsie Horizon
slug: gerer-instancje-public-cloud
excerpt: Dowiedz się, jak zarządzać instancjami w interfejsie Horizon
section: Zarządzanie w interfejsie Horizon
order: 4
---

**Ostatnia aktualizacja z dnia 25 stycznia 2022 r**

## Cel

Możesz w prosty sposób zarządzać Twoimi projektami Public Cloud w [interfejsie Horizon](https://horizon.cloud.ovh.net/auth/login/). Znajdziesz tam wszystkie Twoje projekty związane z infrastrukturą (instancje, kopie zapasowe, dyski, klucze SSH, etc.) oraz przestrzenią dyskową (w tym listę Twoich kontenerów).

**Niniejszy przewodnik wyjaśnia, jak zarządzać instancjami Public Cloud za pośrednictwem interfejsu Horizon.**

## Wymagania

- Utworzenie instancji Public Cloud w Panelu [klienta OVHcloud](../premiers-pas-instance-public-cloud/) lub w [interfejsie Horizon](https://docs.ovh.com/fr/public-cloud/creer-une-instance-dans-horizon/).
- [Utworzenie klucza SSH](../creation-des-cles-ssh/).

## W praktyce

### Dostęp do interfejsu zarządzania instancją

Zaloguj się najpierw do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/).

W przeciwieństwie do Panelu klienta OVHcloud, Horizon rozdziela Twoje usługi w zależności od regionu. Region można wybrać z menu w lewym górnym rogu:

![public-cloud](images/region2021.png){.thumbnail}

Kliknij menu `Compute`{.action} po lewej stronie, a następnie wybierz `Instancje`{.action}. Na stronie, która się wyświetla zobaczysz podsumowanie wszystkich Twoich instancji. Pojawi się tu kilka informacji:

  * model instancji (*Flavor*)
  * nazwa, stan zasilania (Power State) i czas, jaki upłynął od jej utworzenia (*Time since created*)
  * adres IPv4 i IPV6 instancji
  * przypisaną prywatną sieć i prywatny adres IPv4
  * status (*Status*)
  * obraz używany do instalacji instancji (jeśli dotyczy)

![public-cloud](images/options2022.png){.thumbnail}

**Instancja Launch** 

Ta opcja pozwala na utworzenie instancji. Więcej informacji znajdziesz [w tym przewodniku](https://docs.ovh.com/fr/public-cloud/creer-une-instance-dans-horizon/).

**Usuwanie**

Ta opcja pozwala na usunięcie kilku instancji jednocześnie. Wystarczy zaznaczyć pole po lewej stronie nazwy instancji.

**More Operacje**

To menu pozwala na wykonywanie następujących operacji na jednej lub kilku instancjach. Najpierw upewnij się, czy zaznaczyłeś kratkę po lewej stronie nazwy instancji:

- Instancje Start: ta opcja pozwala na ponowne uruchomienie jednej lub kilku instancji o statusie *shutoff* lub *off*.
- Shut Off Instances opcja ta pozwala na zawieszenie jednej lub kilku instancji.
- Soft Reboot Instancje: opcja ta pozwala na uruchomienie oprogramowania na jednej lub kilku instancjach.

**Tworzenie kopii zapasowej**: Ta opcja pozwala na utworzenie snapshota instancji. Więcej informacji znajdziesz [w tym przewodniku](https://docs.ovh.com/fr/public-cloud/gestion-des-snapshots-dune-instance-dans-horizon/#creation-du-snapshot).

### Zmień instancję

W interfejsie zarządzania instancją wybierz odpowiednią opcję z rozwijanej listy.

![public-cloud](images/list2022.png){.thumbnail}

- Attach Interface: ta opcja pozwala na dodanie jednego lub kilku prywatnych interfejsów do Twojej instancji za pośrednictwem sieci VLAN. Więcej informacji znajdziesz w [tej części](https://docs.ovh.com/fr/public-cloud/public-cloud-vrack/#ajout-dune-interface-privee) odpowiedniego przewodnika.
- Detach Interface: ta opcja pozwala na usunięcie interfejsu związanego z instancją. Więcej informacji znajdziesz w [tej części](https://docs.ovh.com/fr/public-cloud/public-cloud-vrack/#suppression-dune-interface-privee) odpowiedniego przewodnika.
- Instancja: ta opcja pozwala na zmianę nazwy instancji i [grup zabezpieczeń](https://docs.ovh.com/fr/public-cloud/configurer-un-groupe-de-securite/).

> [!warning]
> Opcje w kolorze czerwonym wskazują na możliwość utraty danych podczas procesu. Zanim wprowadzisz zmiany na Twojej instancji, upewnij się, że zawsze posiadasz kopię zapasową swoich danych.
>

### Zmiana rozmiaru instancji

Dzięki usłudze Public Cloud możesz zwiększyć zasoby Twojej instancji - wystarczy kilka kliknięć.

> [!warning]
>
> W przypadku modeli klasycznych możliwe jest tylko zmiana rozmiaru na wyższy.
> Operacja ta spowoduje również wycięcie instancji w czasie jej wykonywania.
> 

> \[!success]
>
> Instancje typu *flex* umożliwiają zmianę rozmiaru na wyższe lub niższe modele dzięki unikalnemu rozmiarowi dysku.
> 

Wybierz `Resize Instance`{.action} z rozwijanego menu po prawej stronie odpowiedniej instancji.

![Resize instance](images/resizeinstance2022.png){.thumbnail}

* Wybór szablonu (*Flavor Choice*): ta sekcja wskazuje aktualny szablon (*old flavor*) i pozwala wybrać nowy szablon (*new flavor*) dla zasobu instancji.

![public-cloud](images/flavorchoice.png){.thumbnail}

* Szczegóły skrajni (*Flavor Details*). W tej sekcji wyświetlają się zasoby przypisane do wybranego szablonu. 
* Limity Projektu (*Projekt Limity*). Tutaj możecie zobaczyć wykorzystane zasoby w porównaniu z całkowitymi zasobami przeznaczonymi na dany projekt.

> [!warning]
> Pamiętaj, że możesz tylko zmienić rozmiar instancji z jednego modelu Linux na inny model Linux i z jednego modelu Windows na inny model Windows.
>

* Opcje zaawansowane (*Advanced Opcje*). Sekcja ta pozwala na zarządzanie partycjonowaniem dysku (*Disk Partion*) i grupy serwerów (*Server Group*).

![public-cloud](images/resize_advanced.png){.thumbnail}

Po zakończeniu konfiguracji kliknij `Resize`{.action}.

**Zmiana rozmiaru dysku w systemie Windows**

Uwaga: podczas zmiany rozmiaru instancji Windows rozmiar partycji nie jest automatycznie aktualizowany. Należy więc rozszerzyć ją, używając **menedżera dysku**:

Kliknij prawym przyciskiem myszy w menu `Start`{.action} i uruchom menedżer dysku klikając `Zarządzanie dyskami`{.action}.

![public-cloud](images/2980.png){.thumbnail}

Kliknij prawym przyciskiem myszy na partycję główną, a następnie kliknij `Rozszerz wolumin`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

Kliknij `Dalej`{.action}, aby uzyskać dostęp do `Kreator rozszerzenia woliminów`. Wybierz zasoby dysku do rozszerzenia i kliknij `Dalej`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Następnie kliknij `Zakończ`{.action}, aby zatwierdzić wybór.

![public-cloud](images/wizard2021.png){.thumbnail}

Nowy rozmiar dysku zostanie wyświetlony w managerze dysku.

![public-cloud](images/2979.png){.thumbnail}

### Odbudowa instancji

Ta opcja pozwala na ponowne skonfigurowanie instancji na nowej bazie lub na zmianę systemu operacyjnego.

> \[!alert]
> Operacja ta spowoduje usunięcie danych instancji.
> 

Wybierz `Rebuild Instance`{.action} z rozwijanej listy odpowiadającej instancji.

![public-cloud](images/rebuildinstance.png){.thumbnail}

Wybierz obraz do rekonstrukcji.<br>
Wybierz typ partycji ("Automatyczne" lub "Ręczne"). Jest to opcjonalne.<br>
Na koniec kliknij `Rebuild Instance`{.action}. Operacja ta może zająć kilka minut.

### Zawieś lub zatrzymaj instancję (Shelve or pause an instance)

Aby dowiedzieć się, jak zawiesić lub zatrzymać instancję, kliknij [tutaj](https://docs.ovh.com/fr/public-cloud/suspendre-ou-mettre-en-pause-une-instance/), aby zapoznać się z przewodnikiem dotyczącym tej metody.

### Dostęp do konsoli instancji

W przypadku utraty dostępu do instancji, wynikającej z nieprawidłowej konfiguracji lub przerwy w działaniu usługi SSH, możesz ponownie skonfigurować instancję za pomocą konsoli VNC.

> [!primary]
>
> Dostęp do instancji jest możliwy przez konsolę VNC. Przed skonfigurowaniem hasła dla użytkownika root należy jednak najpierw skonfigurować.
> Więcej informacji znajdziesz [w tym przewodniku](https://docs.ovh.com/fr/public-cloud/passer-root-et-definir-un-mot-de-passe/).
> Konsola VNC może być również pierwszym podejściem w przypadku awarii, w celu postawienia diagnozy w wyniku analizy fazy uruchomienia instancji.
> 

Z rozwijanej listy odpowiadającej instancji wybierz `Konsola`{.action}.

![public-cloud](images/accessconsole.png){.thumbnail}

Pojawi się konsola instancji.

> \[!success]
>
> Jeśli konsola nie odpowiada już wpisom klawiatury, kliknij pasek stanu.
> Aby wyłączyć tryb pełnego ekranu, kliknij przycisk zwrotu przeglądarki.
> 

**Konsola instancji**

![public-cloud](images/console.png){.thumbnail}

### Uruchom ponownie instancję

Istnieją dwie metody restartu instancji:

- Restart programowy (Soft Reboot Instance)
- Restart sprzętowy (Hard Reboot Instance)

Na rozwijanej liście odnoszącej się do instancji wybierz `Soft Reboot Instance`{.action} lub `Hard Reboot Instance`{.action}.

![public-cloud](images/rebootinstance.png){.thumbnail}

Następnie potwierdź zapytanie w oknie, które się wyświetli.

### Usuń instancję

Jeśli nie potrzebujesz już jednej z Twoich instancji, możesz w każdej chwili ją usunąć.

> \[!alert]
>
> Dane przechowywane na instancji zostaną usunięte.
> Możesz również utworzyć kopię zapasową tej instancji, jeśli chcesz zachować dane i ponownie uruchomić tą samą instancję w późniejszym czasie.
> 

Na rozwijanej liście odnoszącej się do instancji wybierz `Delete Instance`{.action}. 

![public-cloud](images/deleteinstance.png){.thumbnail}

Następnie kliknij przycisk `Potwierdź`{.action}, aby rozpocząć proces.

> \[!success]
>
> Po usunięciu instancji nie będzie już fakturowana i nie będziesz mógł jej odzyskać.
> 

## Sprawdź

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.