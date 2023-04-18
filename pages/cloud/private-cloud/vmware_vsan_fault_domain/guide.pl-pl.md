---
title: 'Zarządzanie domenami awarii vSAN'
excerpt: 'Dowiedz się, jak zarządzać domenami awarii vSAN'
updated: 2021-12-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 23-12-2021**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak działają i jak wdrażać obszary awarii vSAN.

## Wymagania początkowe

- Posiadanie kontaktu administracyjnego infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika z uprawnieniami dla NSX [utworzonego w Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Wdrożenie [datastore vSan](/pages/cloud/private-cloud/vmware_vsan)

## W praktyce

### Działanie

Domena usterek (fault domain) odnosi się do zbioru serwerów, urządzeń peryferyjnych lub komponentów sieciowych zgrupowanych w fizycznej lokalizacji centrum danych, na które może mieć wpływ zespół podczas awarii.

W vSAN możesz grupować serwery w ramach domen awarii vSAN, biorąc pod uwagę ich fizyczną lokalizację.
W tym celu warto dysponować kilkoma domenami usterek, aby korzystać z odporności zapewnionej przez vSAN, replikując w ten sposób obiekty wirtualnych maszyn w ramach tych grup serwerów. Więcej informacji na temat [tej dokumentacji](https://core.vmware.com/resource/vmware-vsan-design-guide#sec8-sub3).

Serwery OVHcloud są rozproszone w różnych szafach. W ten sposób możesz utworzyć domeny awarii vSAN w zależności od tych szaf.

Na przykład domyślna strategia vSAN (poziom tolerancji FTT=1 z RAID1 (Miroring)) wymaga minimum 3 domen awarii (2 replicas + 1 obiekt witness).

### Realizacja

Zaleca się zastosowanie tej procedury w przypadku, gdy kilka serwerów znajduje się w tej samej szafie. Wybierz również identyczną liczbę serwerów dla każdej domeny z awariami vSAN.
Dzięki temu dane będą lepiej rozproszone i lepiej chronione w przypadku awarii domeny.

Każdy serwer OVHcloud dysponuje informacjami na temat szafy, w której jest hostowany.

Przejdź do menu `Hosts and Clusters`{.action}, kliknij odpowiedni serwer, a następnie zakładkę `Summary`{.action}. Informacja znajduje się na poziomie "Custom Atrybuty": atrybut **Rack**.

![atrybut Rack](images/01.png){.thumbnail}

W menu `Hosts and Clusters`{.action} wybierz odpowiedni klaster, następnie kliknij zakładkę `Configure`{.action} i wybierz menu `vSAN`{.action}, a następnie `Fault Domains`{.action}.

Wystarczy, że przesuniesz serwer w polu **+** "Fault Domains".

![fault domain](images/02.png){.thumbnail}

Nazwij domenę awarii (możesz użyć nazwy szafy) w polu "Fault domain name" i potwierdź klikając na `CREATE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/03.png" alt="domena nieprawidłowa" class="thumbnail" width="70%" height="70%">

Następnie będziesz mógł śledzić postęp zadania tworzenia domeny z awarią w oknie `Recent Tasks`{.action}.

![brat task](images/04.png){.thumbnail}

Powtórz operację na tyle różnych obszarach awarii, że są różne szafy.

![dodanie wielu domen](images/05.png){.thumbnail}

Dodaj serwer w istniejącej domenie awarii, przenosząc go na wybrany serwer, a następnie potwierdź klikając `MOVE`{.action}.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/06.png" alt="dodawanie serwera" class="thumbnail" width="70%" height="70%">

Informacje o wykorzystanej, dostępnej i całkowitej przestrzeni dyskowej wyświetlają się po przelocie nad domeną awarii.

<img src="https://raw.githubusercontent.com/ovh/docs/develop/pages/cloud/private-cloud/vmware_vsan_fault_domain/images/07.png" alt="domena informacje" class="thumbnail" width="60%" height="60%">

Klaster vSAN ma teraz odporność danych w domenach awarii.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
