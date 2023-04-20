---
title: 'Konfiguracja sieci vRack między Public Cloud a serwerem dedykowanym'
excerpt: 'Dowiedz się, jak skonfigurować prywatną sieć między instancją Public Cloud a serwerem dedykowanym'
updated: 2021-10-15
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 20-02-2023**

## Wprowadzenie

Rozwiązanie [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external} umożliwia konfigurację sieci między dwoma lub więcej [serwerami dedykowanymi](https://www.ovhcloud.com/pl/bare-metal/) OVHcloud. Umożliwia ponadto dodawanie [instancji Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) do Twojej prywatnej sieci w celu utworzenia infrastruktury z zasobów fizycznych i wirtualnych. 

**Niniejszy przewodnik wyjaśnia, jak skonfigurować prywatną sieć między instancją Public Cloud a serwerem dedykowanym.**


## Wymagania początkowe

* Utworzenie [instancji Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps)
* Aktywowanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/)
* Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) kompatybilnego z usługą vRack
* Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
* Wybrany zakres prywatnych adresów IP

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

### Dodaj projekt Public Cloud do usługi vRack

Po skonfigurowaniu Twojego [projektu Public Cloud](/pages/platform/public-cloud/create_a_public_cloud_project) należy dodać go do sieci vRack. Można to zrobić na dwa sposoby:

1. Jeżeli usługa vRack nie jest dostępna, produkt ten jest bezpłatny.

Przejdź do menu `Bare Metal Cloud`{.action} i kliknij przycisk `Zamów`{.action}. W tym menu kliknij opcję `vRack`{.action}.

![Zamów usługę vrack](images/orderingvrack.png){.thumbnail}

Zostaniesz przekierowany na inną stronę, aby zatwierdzić zamówienie, operacja zajmie kilka minut.

Po zainstalowaniu usługi vRack możesz dodać swój projekt.

Kliknij menu `Bare Metal Cloud`{.action}, następnie `Network`{.action}, a następnie `vRack`{.action}. Wybierz vRack z listy.

Na liście usług kwalifikowanych wybierz projekt, który chcesz dodać do sieci vRack, następnie kliknij przycisk `Dodaj`{.action}.

![dodaj projekt do usługi vrack](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li>poprzez <a href="/pages/platform/network-services/getting-started-07-creating-vrack#etap-1-aktywacja-i-zarzadzanie-usluga-vrack">utworzenie lub dodanie istniejącej usługi vRack</a> w sekcji Public Cloud.</li>
</ol>

### Dodaj instancję do sieci vRack 

Mogą wystąpić dwie sytuacje:

- Instancja nie istnieje jeszcze.
- Instancja już istnieje i należy ją dodać do sieci vRack.

#### Przypadek nowej instancji

Jeśli potrzebujesz pomocy, zapoznaj się z przewodnikiem [Tworzenie instancji Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps#krok-3-tworzenie-instancji){.external}. Podczas tworzenia instancji możesz określić prywatną sieć, w której będziesz mógł zintegrować instancję podczas etapu 4. Wybierz wówczas w rozwijanym menu utworzony uprzednio vRack.

#### Przypadek już istniejącej instancji

Możesz przypisać istniejącą instancję do sieci prywatnej. Aby uzyskać więcej informacji, należy zapoznać się z [tą sekcją](/pages/platform/network-services/getting-started-07-creating-vrack#w-przypadku-istniejacej-instancji_2) odpowiedniej instrukcji.


### Utwórz VLAN ID

Aby obie usługi mogły się ze sobą komunikować, muszą być « otagowane » tym samym **VLAN ID**.

#### Domyślne wykorzystanie VLAN ID

Domyślnie na serwerach dedykowanych znajdujesz się w sieci VLAN id **0**. Jeśli chcesz użyć tego ID, konieczne będzie « oznakować » sieci prywatnej przypisanej do Twojej instancji za pomocą VLAN ID **0**. W tym celu przejdź przez stronę [OVHcloud APIv6 (EN)](/pages/platform/network-services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack_1).


> [!primary]
> W usłudze Public Cloud możesz zdefiniować unikalną sieć VLAN ID za pomocą sieci prywatnej.
>
> Nie możesz zdefiniować tej samej sieci VLAN ID w dwóch różnych sieciach prywatnych.

#### Użycie innego VLAN ID

Jeśli zdecydujesz się korzystać z innego VLAN ID:

- Sieć prywatna połączona z instancją Public Cloud musi być « oznaczona » tym VLAN ID.
- W pliku konfiguracyjnym sieci na serwerze dedykowanym, interfejs sieci prywatnej powinien być « oznaczony » tym VLAN ID.

W tym przypadku, jeśli zaznaczysz kratkę `Wybierz ID sieci VLAN`, musisz wybrać numer VLAN ID z przedziału od 2 do 4 000.

W przeciwnym razie system przypisze do Twojej sieci prywatnej losowy numer identyfikacyjny sieci VLAN.

> [!primary]
> 
> W przeciwieństwie do serwerów dedykowanych, nie ma potrzeby oznaczania sieci VLAN bezpośrednio w pliku konfiguracji sieci instancji Public Cloud, po ustawieniu identyfikatora VLAN w Panelu klienta OVHcloud.
>

Na przykład: jeśli zdefiniowałeś prywatną sieć przypisaną do Twojej instancji za pomocą VLAN 2, prywatny interfejs sieciowy Twojego serwera dedykowanego musi być « oznaczony » za pomocą VLAN 2. Więcej informacji znajdziesz w przewodniku: [Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/cloud/dedicated/creating-multiple-vlans-in-a-vrack).

### Konfiguracja interfejsów sieciowych

Następnie skonfiguruj interfejsy sieciowe dla nowej instancji Public Cloud i serwera dedykowanego zgodnie z tym przewodnikiem: [Konfiguracja kilku serwerów dedykowanych w sieci vRack](/pages/cloud/dedicated/vrack_configuring_on_dedicated_server){.external}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.