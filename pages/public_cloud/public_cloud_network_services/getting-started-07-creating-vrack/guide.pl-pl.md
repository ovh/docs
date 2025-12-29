---
title: 'Konfiguracja vRack dla Public Cloud'
excerpt: 'Dowiedz się, jak skonfigurować usługę vRack dla instancji Public Cloud'
updated: 2025-12-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

[OVHcloud vRack](/links/network/vrack) to rozwiązanie prywatnej sieci, które umożliwia naszym klientom przekazywanie ruchu między Serwerami dedykowanymi OVHcloud, a także innymi usługami OVHcloud. W tym samym czasie pozwala na dodawanie instancji [Public Cloud](/links/public-cloud/Compute) do prywatnej sieci, tworząc infrastrukturę zasobów fizycznych i wirtualnych.

**Ten przewodnik wyjaśnia, jak skonfigurować instancje Public Cloud w ramach swojego vRacka.**

## Wymagania początkowe

- [projekt Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](/links/manager)
- [użytkownika OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opcjonalnie)
- podstawowa wiedza w zakresie sieci komputerowych

## Interfejsy

Tworzenie vRacka lub dodawanie instancji do sieci można wykonać za pomocą Panelu klienta OVHcloud, APIv6 OVHcloud, API OpenStack, interfejsu Horizon lub Terraform.

W zależności od Twojego profilu technicznego i potrzeb, wybór interfejsu lub metody należy do Ciebie. Dla każdej opcji poniższe instrukcje opisują niezbędne kroki.

**Na początek poniżej przedstawiono krótki opis możliwych działań w zależności od wybranej metody/interfejsu.** <a name="horizon"></a>

/// details | Panelu klienta OVHcloud

[Panelu klienta OVHcloud](/links/manager) to w pełni wizualny interfejs, idealnie nadający się do zarządzania wieloma VLAN. Będziesz również miał możliwość dostosowania prywatnego zakresu adresów IP, który domyślnie znajduje się w 10.1.0.0/16.

VLAN zostanie wdrożony w wybranej Regionie. Będziesz również miał możliwość aktywowania bram lub nie, włączania dystrybucji DHCP itp.

Zarządzanie rachunkami za swoje usługi również możesz wykonać w Panelu klienta OVHcloud.

///

/// details | Horizon

Interfejs [Horizon](https://horizon.cloud.ovh.net/auth/login/) (niezależny od OVHcloud) to oryginalna implementacja pulpitu OpenStack, który zapewnia interfejs użytkownika sieci web do usług OpenStack, w tym Nova, Swift, Keystone itp.

Ten wielofunkcyjny, techniczny interfejs pozwala zarządzać prawie wszystkimi działaniami OpenStack. Jest to jeden z niezbędnych interfejsów, jeśli musisz zarządzać więcej niż dwiema VLANS, dodawać prywatne interfejsy sieciowe do swoich instancji, zarządzać niestandardowymi obrazami itp.

Zwróć się do [tego przewodnika](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon), aby zapoznać się z Horizon.

> [!primary]
> Horizon działa w obrębie strefy, dlatego musisz pamiętać, aby wybrać swoją logiczną (geograficzną) strefę pracy w lewym górnym rogu swojego interfejsu (GRA5, SBG3, BHS1 itp.).
>

///

/// details | APIv6 OVHcloud

Każde działanie, które wykonujesz w Panelu klienta OVHcloud, można wywołać za pomocą [APIv6 OVHcloud](/links/api).
Oferuje on nawet więcej możliwości niż interfejs graficzny.

Interfejs API jest mniej wizualny niż Panelu klienta OVHcloud, ale pozwala wykonać dużą liczbę działań. Możesz zarządzać i dostosowywać swoje VLAN, dodawać interfejsy do swoich instancji lub tworzyć bardzo niestandardowe serwery.

Możesz łatwo uzyskać do niego dostęp z [naszej strony internetowej](/links/api), ale także używać go do tworzenia swoich skryptów PHP lub Python.

W ten sposób możesz swobodnie automatyzować podstawowe zadania za pomocą skryptów, zoptymalizować własne funkcje i wiele innych.

Możesz musieć pobrać różne informacje przed użyciem niektórych wywołań API, ponieważ wymagane jest określone wejście.

Zwróć się do [tego przewodnika](/pages/manage_and_operate/api/first-steps), aby rozpocząć pracę z APIv6 OVHcloud.

///

/// details | API OpenStack

Usługi Public Cloud można zarządzać za pomocą linii poleceń Linuxa lub Windowsa po pobraniu i zainstalowaniu narzędzi OpenStack.

Ta metoda wymaga dobrej znajomości Linuxa lub Windowsa, aby z niej korzystać, ale umożliwia wykorzystanie całej mocy OpenStack.

W zależności od warstwy, którą chcesz zarządzać, musisz użyć klienta Nova (Compute), Neutron (sieć), Glance (obraz) lub Swift (Object Storage). Najnowszy dodatek do tej oferty, klient OpenStack, umożliwia zarządzanie prawie wszystkimi warstwami OpenStack bezpośrednio.

Za pomocą API OpenStack możesz również łatwo automatyzować to zarządzanie za pomocą swoich skryptów.

Aby dowiedzieć się więcej na temat użycia API OpenStack, zapoznaj się z poniższymi przewodnikami:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Zmienne środowiskowe OpenStac](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Następnie będziesz mógł korzystać z API dedykowanych OpenStack zgodnie z potrzebami:

- Nova (Compute)
- Glance (obraz)
- Cinder (obraz)
- Neutron (sieć)

> [!primary]
> W niektórych przypadkach łatwiej będzie użyć API OpenStack, a w innych Nova, Neutron itp.
>
> Ponadto niektóre funkcje mogą być niedostępne w API OpenStack w zależności od wersji klienta i systemu operacyjnego.
> W celu zwiększenia dostępności tego przewodnika przedstawiono najprostsze i najbardziej intuicyjne opcje.
> Jeśli chcesz zgłębić jego zastosowanie, możesz zapoznać się z [oficjalną dokumentacją OpenStack](https://docs.openstack.org/).
>

///

/// details | CLI OpenStack

Możesz zarządzać swoimi usługami Public Cloud OVHcloud i vRackami bezpośrednio z terminala Linuxa lub Windowsa za pomocą CLI OpenStack.

Ten interfejs umożliwia zarządzanie wszystkimi warstwami OpenStack:

- Nova: instancje (Compute)
- Neutron: sieci
- Glance: obrazy
- Cinder: woluminy

CLI centralizuje te funkcje i może być zintegrowany ze swoimi skryptami, aby automatyzować swoje zadania.

Przed rozpoczęciem zapoznaj się z poniższymi przewodnikami:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Zmienne środowiskowe OpenStac](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> CLI OpenStack jest przydatny do zarządzania swoim vRackiem, ale niektóre funkcje mogą się różnić w zależności od wersji klienta lub systemu operacyjnego. Zwróć się do [oficjalnej dokumentacji OpenStack](https://docs.openstack.org/).
>

///

/// details | Terraform

Terraform może również być używany do zarządzania infrastrukturą OVHcloud.

Do tego potrzebujesz wybrać odpowiedni dostawcę i zasób terraform. Znajdziesz więcej informacji w naszym przewodniku dotyczącym [używania Terraform z OVHcloud](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## W praktyce

### Krok 1: Aktywowanie i zarządzanie vRackiem <a name="activation"></a>

> [!warning]
>
> vRack jest zarządzany na poziomie infrastruktury OVHcloud, co oznacza, że możesz go administrować wyłącznie w Panelu klienta OVHcloud i w APIv6 OVHcloud.
>

> [!tabs]
> Przez Panelu klienta OVHcloud
>> > [!primary]
>> >
>> > To dotyczy projektów nowo utworzonych, które są automatycznie dostarczane z vRackiem. Aby wyświetlić vRack po utworzeniu projektu, przejdź do sekcji `Sieć`{.action} i kliknij `Prywatna sieć vRack`{.action}, aby wyświetlić vRacki.
>> >
>>
>> Jeśli masz starszy projekt i nie masz vRacka, musisz go zamówić. Użycie samego vRacka jest darmowe i może być dostarczone w ciągu kilku minut.
>>
>> W menu po lewej stronie kliknij przycisk `Dodaj usługę`{.action} (ikona koszyka). Użyj filtra w górnej części strony lub przewiń w dół, aby znaleźć usługę `vRack`{.action}.
>>
>> ![Zamów vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Zostaniesz przekierowany na inną stronę, aby potwierdzić zamówienie. Ustawienie vRacka w Twoim koncie zajmie kilka minut.
>>
>> Po aktywacji usługi znajdziesz ją w Panelu Klienta w sekcji `Sieć`{.action} > `Prywatna sieć vRack`{.action}, oznaczoną jako "pn-xxxxxx".
>>
>> Kliknij na swój vRack, a następnie wybierz projekt, który chcesz dodać do vRack z listy dostępnych usług i kliknij przycisk `Dodaj`{.action}.
>>
>> ![dodaj projekt do vrack](images/addprojectvrack.png){.thumbnail}
>>
>> Aby kontynuować konfigurowanie vRacka z Panelu klienta OVHcloud, kontynuuj czytanie tego przewodnika od [Kroku 2: Utwórz prywatną sieć w vRacku](#create-pn-in-vrack), w zakładce **Z Panelu klienta OVHcloud**.
>>
> Przez APIv6 OVHcloud
>>
>> **Krok 1: Aktywowanie i zarządzanie vRackiem**
>>
>> Zaloguj się do interfejsu APIv6 OVHcloud zgodnie z odpowiednim przewodnikiem ([Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)) i wykonaj następujące kroki:
>>
>> **Tworzenie koszyka**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Ten wywołanie utworzy identyfikator dla Twojego 'koszyka'. Możesz dodać tyle artykułów, ile chcesz, zanim je potwierdzisz.
>> >
>> > W tym przypadku koszt zamówienia vRacka samodzielnie wynosi 0 zł. Pamiętaj o numerze koszyka (cartId), będzie on potrzebny w dalszych krokach.
>> >
>>
>> **Pobieranie niezbędnych informacji do zamówienia vRacka**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie pozwoli Ci pobrać wszystkie potrzebne informacje do zamówienia vRacka. Skopiuj:
>> >
>> > *cartId*, *duration*, *planCode* i *pricingMode*.
>> >
>>
>> **Dodawanie vRacka do koszyka**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie pozwala dodać vRacka do koszyka, dodając wszystkie niezbędne informacje do zamówienia.
>> >
>> > Dla vRacka będzie to na przykład:
>> >
>> > cartId: [identyfikator koszyka]
>> >
>> > duration: "P1M"
>> >
>> > planCode: "vrack"
>> >
>> > pricingMode: "default"
>> >
>> > quantity: 1
>> >
>>
>> Po potwierdzeniu zamówienia otrzymasz numer elementu ("itemId"). Zachowaj tę informację, może się przydać, jeśli chcesz wprowadzić zmiany przed potwierdzeniem koszyka.
>>
>> **Potwierdzenie koszyka**
>>
>> Po dodaniu wszystkich elementów do koszyka, musisz go potwierdzić:
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie potwierdzi koszyk i utworzy zamówienie ("orderId"). Zachowaj tę informację, będzie ona potrzebna do potwierdzenia zamówienia.
>> >
>>
>> **Potwierdzenie ostatecznego zamówienia**
>>
>> Aby potwierdzić zamówienie, masz dwie możliwości:
>>
>> - Przejdź przez widoczny URL, gdy koszyk zostanie potwierdzony.
>> Przykładowy URL: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Potwierdź za pomocą tego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Nawet jeśli to zamówienie o wartości 0 zł, konieczne jest symulowanie płatności zamówienia (orderId). Twoja forma zamówienia zostanie potwierdzona i zaczną się prace nad zamówieniem.
>> >
>>
>> Po potwierdzeniu darmowego zamówienia może upłynąć kilka minut, zanim vRack zostanie aktywowany.
>>
>> **Krok 2: Dodawanie projektu Public Cloud do vRacka**
>>
>> Po aktywacji vRacka, musisz zintegrować swoje projekty Public Cloud z vRackiem.
>>
>> Zaloguj się do interfejsu APIv6 OVHcloud zgodnie z odpowiednim przewodnikiem: [Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps).
>>
>> W przypadku nieznanej ID projektu, poniższe wywołania pozwalają je pobrać.
>>
>> **Identyfikowanie projektu**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie pobiera listę projektów.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie identyfikuje projekt za pomocą pola "description".
>> >
>>
>> **Dodawanie projektu do vRacka**
>>
>> Po uzyskaniu ID projektu i nazwy vRacka, ich powiązanie odbywa się za pomocą poniższego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Wypełnij pola danymi wcześniej pobranymi:
>>
>> - **serviceName**: nazwa vRacka w formie "pn-xxxxxx".
>> - **project**: ID projektu Public Cloud w formie łańcucha znaków o długości 32 znaków.
>>
>> > [!primary]
>> >
>> > To wywołanie inicjuje powiązanie projektu i vRacka. Należy następnie pobrać identyfikator zadania, aby sprawdzić postęp.
>> >
>>
>> **Sprawdzanie postępu zadania**
>>
>> Możesz sprawdzić postęp zadania za pomocą tego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie jest opcjonalne i pozwala jedynie sprawdzić status zadania. Po jego zakończeniu możesz przejść do następnego kroku.
>> >
>>

### Krok 2: Tworzenie prywatnej sieci w vRacku <a name="create-pn-in-vrack"></a>

Należy utworzyć prywatną sieć z wirtualną lokalną siecią LAN (VLAN), aby połączone instancje mogły komunikować się ze sobą.

Z usługą Public Cloud możesz utworzyć do 4 000 VLANów w jednym vRacku. Oznacza to, że możesz używać każdego prywatnego adresu IP aż 4 000 razy.
W ten sposób np. adres 192.168.0.10 VLAN 2 jest inny niż adres 192.168.0.10 VLAN 42.

Może to być przydatne do segmentacji vRacka między wieloma wirtualnymi sieciami.

Z Panelu klienta OVHcloud i APIv6 OVHcloud możesz dostosować wszystkie ustawienia: tryb wdrażania i region, nazwę i ID VLAN, zakres prywatnych adresów IP (np. 10.0.0.0/16), DHCP i bramę.

> [!primary]
> Na Serwerach dedykowanych domyślnie używane jest VLAN 0. Infrastruktura OpenStack wymaga bezpośredniego określenia ID VLAN na poziomie infrastruktury.
>
> Na odwrót niż Serwery dedykowane, nie ma potrzeby bezpośredniego tagowania VLAN na instancji Public Cloud.
>
> Aby dowiedzieć się więcej na ten temat, skorzystaj z przewodnika "[Tworzenie wielu VLANów w vRacku](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)".

> [!warning]
> vRack jest zarządzany na poziomie infrastruktury OVHcloud, co oznacza, że możesz go administrować wyłącznie w Panelu klienta OVHcloud i w APIv6 OVHcloud.
>
> Ponieważ OpenStack nie znajduje się na tym samym poziomie, nie będziesz mógł dostosować VLANów przez interfejs Horizon lub API OpenStack.
>

> [!tabs]
> Przez Panelu klienta OVHcloud
>> Po przygotowaniu vRacka następnym krokiem jest utworzenie prywatnej sieci.
>>
>> W zakładce `Public Cloud` kliknij `Private Network`{.action} w menu po lewej stronie pod **Sieć**.
>>
>> ![Tworzenie VLAN](images/vrack2022-03.png){.thumbnail}
>>
>> Kliknij przycisk `Utwórz prywatną sieć`{.action}. Ta strona pozwala dostosować wiele ustawień.
>>
>> Na początek wybierz tryb wdrażania i region, w którym chcesz utworzyć prywatną sieć.
>>
>> ![Wybierz region](images/vrack5-2024.png){.thumbnail}
>>
>> W następnym kroku przedstawione są różne Opcje:
>>
>> ![Tworzenie sieci](images/vrack6-2022.png){.thumbnail}
>>
>> W polu **Nazwa prywatnej sieci** ustaw nazwę swojej prywatnej sieci.
>>
>> **Opcja sieciowa warstwy 2**
>>
>> Jeśli zaznaczysz pole `Zdefiniuj ID sieci VLAN`{.action}, będziesz mógł ręcznie wybrać numer ID VLAN od 0 do 4 000.
>>
>> Jeśli nie zaznaczysz pola, system przypisze losowy numer ID VLAN do Twojej prywatnej sieci.
>>
>> Jeśli chcesz móc komunikować się z Serwerami dedykowanymi w tym VLAN, zapoznaj się z przewodnikiem: [Tworzenie wielu VLANów w vRacku](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Opcje dystrybucji adresów DHCPP**
>>
>> Domyślny zakres DHCP to 10.1.0.0/16. Możesz użyć innego prywatnego zakresu lub wyłączyć DHCP dla tej prywatnej sieci.
>>
>> **Opcje bramy sieciowej**
>>
>> - **Ustaw pierwszy adres danego CIDR jako bramę domyślną (DHCP opcja 3)**: Gdy ta opcja jest włączona, serwer DHCP ogłasza pierwszy adres w CIDR jako domyślną bramę dla maszyn podłączonych do sieci.
>> - **Przypisz Gateway i połącz się z prywatną siecią**: Wybierz tę opcję, jeśli zamierzasz tworzyć instancje z prywatną siecią. Aby uzyskać więcej informacji, zapoznaj się z poniższymi przewodnikami: [Tworzenie prywatnej sieci z bramą](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) i [Tworzenie i łączenie się ze swoją pierwszą instancją Public Cloud](/pages/public_cloud/Compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Jeśli druga opcja jest z灰色, oznacza to, że wybrany region nie obsługuje jej. Aby uzyskać więcej informacji, zapoznaj się z naszą stroną [dostępność regionów](/links/public-cloud/regions-pci).
>> > 
>>
>> Po zakończeniu kliknij `Skonfiguruj prywatną sieć`{.action}, aby rozpocząć proces.
>>
>> > [!primary]
>> >
>> > Tworzenie prywatnej sieci może zająć kilka minut.
>> >
>>
> Przez APIv6 OVHcloud <a name="vlansetup"></a>
>>
>> Po zalogowaniu się do [interfejsu APIv6 OVHcloud](/links/api), wykonaj poniższe kroki:
>>
>> **Krok 1: Pobieranie wymaganych informacji**
>>
>> **Projekt Public Cloud**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie pobiera listę projektów.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie identyfikuje projekt za pomocą pola "description".
>> >
>>
>> **vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > W polu "serviceName" podaj ID swojego projektu. Zapisz informacje o ID vRacka w formie "pn-xxxxx".
>> >
>>
>> **Krok 2: Tworzenie prywatnej sieci**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Wypełnij pola danymi wcześniej uzyskanymi:
>> >
>> > - **serviceName**: ID projektu.
>> > - **name**: nazwa VLAN.
>> >
>> > Możesz pozostawić pole "Region" puste, aby włączyć go dla wszystkich regionów.
>> >
>> > Identyfikator VLAN (vlanId) jest wymagany, jeśli chcesz utworzyć konkretny VLAN.
>> >
>>
>> Tworzenie zajmie kilka chwil.
>>
>> Informacje o VLAN-ie możesz sprawdzić za pomocą następującego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > To wywołanie zwraca "networkId" w następującym formacie: name-vrack_vlanId.
>> >
>> > Na przykład VLAN 42: pn-xxxxxx_42.
>> >
>>
>> **Krok 3: Tworzenie podsieci**
>>
>> Domyślnie, jeśli nie dodasz podsieci, używany zakres adresów IP to:
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Jeśli chcesz samodzielnie zarządzać przydziałem adresów IP, musisz utworzyć podsieć.
>>
>> Aby to zrobić, po utworzeniu VLAN-u należy utworzyć podsieć dla każdego odpowiedniego regionu za pomocą następującego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Wypełnij pola zgodnie z poniższą tabelą.
>>
>> | Pole        | Opis                                                                                            |
>> | ----------- | ----------------------------------------------------------------------------------------------- |
>> | serviceName | Identyfikator projektu.                                                                         |
>> | networkId   | Identyfikator Twojej sieci, uzyskany w poprzednich krokach. Przykład: pn-xxxxxx_42 dla VLAN 42. |
>> | dhcp        | Pole wyboru umożliwiające włączenie / wyłączenie DHCP w VLAN-ie.                                |
>> | end         | Ostatni adres podsieci w tym regionie. Przykład: 192.168.1.50.                                  |
>> | network     | Blok adresów IP podsieci. Przykład: 192.168.1.0/24.                                             |
>> | region      | Przykład: SBG3.                                                                                 |
>> | start       | Pierwszy adres podsieci w tym regionie. Przykład: 192.168.1.15.                                 |
>>
>> > [!primary]
>> > Na tym etapie tworzona jest podsieć dla danego regionu. Możesz dynamicznie włączać lub wyłączać przypisywanie prywatnych adresów IP za pomocą DHCP.
>> >
>> > Należy wykonać tę samą operację dla każdego regionu, w którym znajdują się Twoje instancje.
>> >
>>
>> > [!warning]
>> >
>> > Pamiętaj, aby rozdzielić pule adresów IP dla różnych regionów. Na przykład:
>> >
>> > - Od 192.168.0.2 do 192.168.0.254 dla SBG1.
>> > - Od 192.168.1.2 do 192.168.1.254 dla GRA1.
>>
> Przez Terraform
>>
>> W Terraform należy użyć providera OpenStack. Przykładowy kompletny skrypt Terraform możesz pobrać z [tego repozytorium GitHub](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).
>>
>> Częścią specyficzną dla OVHcloud w integracji z vRackiem jest parametr `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> Przez OpenStack CLI
>> W poniższym przykładzie określamy `VLAN_ID`, do którego ma należeć sieć, za pomocą parametrów `--provider-network-type` oraz `--provider-segment`.
>>
>> Możesz usunąć te parametry. W takim przypadku zostanie użyty dostępny `VLAN_ID`.
>>
>> ```bash
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>>

### Krok 3: Integracja instancji z vRackiem <a name="instance-integration"></a>

Istnieją dwa możliwe scenariusze:

- Instancja, która ma zostać zintegrowana, jeszcze nie istnieje.
- Istniejąca instancja musi zostać dodana do vRacka.

/// details | **W przypadku nowej instancji**

> [!tabs]
> Przez Panelu klienta OVHcloud
>> Jeśli potrzebujesz pomocy, najpierw przejrzyj ten przewodnik: [Tworzenie instancji w Panelu klienta OVHcloud](/pages/public_cloud/Compute/public-cloud-first-steps). Przy tworzeniu instancji możesz wybrać, w kroku 5, tryb sieciowy, a następnie prywatną sieć, do której chcesz dołączyć swoją instancję.
>>
>> ![dołączenie nowej instancji](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Możesz połączyć swoją instancję z **tylko jednym** vRackiem za pomocą Panelu klienta OVHcloud.
>> >
>> > Aby dodać wiele interfejsów, musisz przejść przez API OpenStack lub Horizon.
>> >
>>
> Przez APIv6 OVHcloud
>> Po zalogowaniu się do [interfejsu APIv6 OVHcloud](/links/api), wykonaj poniższe kroki:
>>
>> **Krok 1: Pobranie wymaganych informacji**
>>
>> **Pobranie identyfikatora projektu**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Pobranie identyfikatora sieci publicznej (Ext-Net)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Pobranie identyfikatora sieci prywatnej (vRack interfejsu wcześniej utworzonego)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Identyfikator będzie miał postać: "pn-xxxxx_yy", gdzie yy to numer VLAN.
>> >
>>
>> **Pobranie identyfikatora wybranego typu instancji (flavorId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > Możesz ograniczyć listę, określając region tworzenia instancji.
>> >
>>
>> **Pobranie identyfikatora wybranego obrazu (imageId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > Możesz ograniczyć listę, określając region tworzenia instancji.
>> >
>>
>> **Pobranie identyfikatora wybranego klucza SSH (sshKeyId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Jeśli jeszcze nie dodałeś klucza SSH do Panelu klienta OVHcloud, możesz to zrobić za pomocą poniższego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> ***Wdrożenie instancji**
>>
>> Po zebraniu wszystkich elementów koniecznych do wdrożenia, możesz użyć poniższego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Musisz wypełnić co najmniej następujące pola:
>>
>> |Pole|Opis|
>> |---|---| 
>> |serviceName|ID projektu Public Cloud.|
>> |flavorId|ID typu instancji (np. D2-2, B2-7, WIN-R2-15 itp.).|
>> |imageId|ID obrazu do wdrożenia (np. Debian 9, Centos 7 itp.).|
>> |name|Nazwa dla swojej instancji.|
>> |networks|W sekcji "networkId" podaj identyfikator sieci publicznej (Ext-Net) lub swojego VLAN (pn-xxxxxx_yy). Możesz kliknąć przycisk "+" aby dodać więcej sieci.|
>> |region|Region wdrożenia instancji (np. GRA5).|
>> |sshKeyId|ID klucza SSH OpenStack.|
>>
>> Po wykonaniu wywołania, jeśli wszystkie informacje są poprawnie wypełnione, instancja zostanie utworzona z jednym lub więcej interfejsami sieciowymi.
>>
>> > [!warning]
>> >
>> > W zależności od systemów operacyjnych, będziesz musiał ręcznie skonfigurować swoje prywatne interfejsy sieciowe, aby były one rozpoznawane.<br>
>> > Ponieważ OpenStack nie potrafi prioryzować publicznego interfejsu w porównaniu do interfejsu vRacka, interfejs vRacka może czasem być uznawany za domyślną trasę.<br>
>> > Prostym skutkiem tego jest to, że instancja staje się niedostępna z publicznego IP.<br>
>> > Jednym z rozwiązań może być ponowne uruchomienie instancji z Panelu sterowania.<br>
>> > Inna opcja to połączenie się z instancją przez inny serwer w tej samej prywatnej sieci. Możesz również poprawić konfigurację sieciową instancji za pomocą trybu Ratunkowego.
>> >
>>
> Przez OpenStack CLI
>> Poniższe kroki są konieczne do utworzenia instancji bezpośrednio w vRacku.
>>
>> **Pobranie wymaganych informacji**
>>
>> Sieci publiczne i prywatne:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> lub
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN_0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Musisz zanotować identyfikatory sieci, które Cię interesują:
>> >
>> > - Ext-Net dla adresu IP publicznego.
>> > - VLAN(y), które są wymagane dla Twojej konfiguracji.
>> >
>>
>> Zanotuj również informacje opisane w [przewodniku użytkownika API Nova](/pages/public_cloud/Compute/starting_with_nova):
>>
>> - ID lub nazwę klucza SSH OpenStack.
>> - ID typu instancji (flavor).
>> - ID wybranego obrazu (system operacyjny, snapshot itp.).
>>
>> **Wdrożenie instancji**
>>
>> Z wcześniej zebranymi elementami, instancję można utworzyć, w tym bezpośrednio w vRacku:
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
>> ```
>>
>> Przykład:
>>
>> ```bash
>> nova boot --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Name of key]                                        |
>> | metadata                             | {}                                                   |
>> | name                                 | [Name of instance]                                   |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> lub
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [instance name]
>> ```
>>
>> Przykład:
>>
>> ```bash
>> openstack server create --key-name my-ssh-key --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NameOfInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Name of key]                                        |
>> | metadata                             | {}                                                   |
>> | name                                 | [Name of instance]                                   |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Możesz ustawić adres IP instancji swojego interfejsu vRacka na poziomie OpenStack.
>>
>> Aby to zrobić, możesz dodać pojedynczy argument do funkcji "--nic":
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Przykład:
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Weryfikacja instancji**
>>
>> Po kilku chwilach możesz sprawdzić listę istniejących instancji, aby znaleźć serwer, który utworzyłeś:
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> | ID                                   |       Name          | Status | Networks                                         |     Image Name     |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Name of instance]  | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  | [Name-of-instance] |
>> +--------------------------------------+---------------------+--------+--------------------------------------------------+--------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name               | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Name of instance] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MyVrack=[IP_V4_vRack]  |
>> +--------------------------------------+--------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **W przypadku istniejącej instancji**

Panelu klienta OVHcloud pozwala dołączyć instancję do jednej lub więcej prywatnych sieci, ale nie oferuje zaawansowanej konfiguracji interfejsów sieciowych. Jeśli chcesz dalej dostosować ustawienia, będziesz musiał zarządzać nimi za pomocą APIv6 OVHcloud, przez OpenStack API lub za pomocą Horizon.

Wymagana akcja polega po prostu na dodaniu nowego interfejsu sieciowego do swojego serwera, oprócz istniejącego.

Na przykład, jeśli masz publiczny interfejs *eth0*, dodasz interfejs *eth1*.

> [!warning]
> Konfiguracja tego nowego interfejsu rzadko jest automatyczna.
> Musisz więc ustawić statyczny adres IP lub skonfigurować DHCP, w zależności od infrastruktury.
>

> [!tabs]
> Przez Panelu klienta OVHcloud
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.
>>
>> Kliknij `Instancje`{.action} w lewym pasku nawigacyjnym, a następnie `⁝`{.action} po prawej stronie instancji. Wybierz `Dane dotyczące instancji`{.action}.
>>
>> ![szczegóły instancji](images/instance_details.png){.thumbnail}
>>
>> Otworzy się pulpit instancji. Kliknij przycisk `⁝`{.action} w oknie "Sieć", obok "Sieci prywatne", i wybierz `Przypisz sieć`{.action}.
>>
>> ![dołącz sieć](images/vrack2021-01.png){.thumbnail}
>>
>> W oknie dialogowym, które się pojawi, wybierz prywatną sieć (siec(y)) do dołączenia do swojej instancji i kliknij `Zatwierdź`{.action}.
>>
>> ![dołącz sieć](images/vrack9.png){.thumbnail}
>>
> Przez APIv6 OVHcloud
>>
>> Jeśli chcesz zintegrować istniejącą instancję z vRackiem, nie da się tego zrobić z Panelu klienta OVHcloud. Musisz użyć Horizon, OpenStack API lub APIv6 OVHcloud.
>>
>> Wymagana akcja polega po prostu na dodaniu nowego interfejsu sieciowego do swojego serwera, oprócz istniejącego.
>>
>> Na przykład, jeśli masz publiczny interfejs *eth0*, dodasz interfejs *eth1*.
>>
>> > [!warning]
>> >
>> > Konfiguracja tego nowego interfejsu rzadko jest automatyczna.
>> > Musisz więc ustawić statyczny adres IP lub skonfigurować DHCP, w zależności od infrastruktury.
>> >
>>
>> **Poniższe kroki opisują, jak zarządzać interfejsami sieciowymi swoich instancji.**
>>
>> **Krok 1: Pobieranie wymaganych informacji**
>>
>> **Pobieranie identyfikatora projektu**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Pobieranie identyfikatora instancji**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Pobieranie identyfikatora sieci publicznej (Ext-Net)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Pobieranie identyfikatora sieci prywatnej (interfejs vRacka wcześniej utworzony)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Identyfikator będzie miał postać: "pn-xxxxx_yy", w której yy to numer VLAN.
>> >
>>
>> **Krok 2: Dodawanie interfejsu do instancji**
>>
>> Po zebraniu wszystkich niezbędnych elementów, możesz użyć poniższego wywołania:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Musisz wypełnić co najmniej następujące pola:
>>
>> |Pole|Opis| 
>> |---|---| 
>> |serviceName|Identyfikator projektu Public Cloud.|
>> |instanceId|Identyfikator instancji.|
>> |networkId|Wprowadź identyfikator sieci publicznej (Ext-Net) lub swojego VLAN (pn-xxxxxx_yy).|
>> |ip|Zdefiniuj konkretny adres IP (działa tylko dla interfejsów prywatnych).|
>>
>> Po wykonaniu wywołania, jeśli wszystkie informacje są poprawnie wypełnione, do instancji zostanie dodany nowy interfejs.
>>
>> > [!primary]
>> >
>> > Twoja instancja OVHcloud będzie miała nowy interfejs sieciowy oprócz publicznego interfejsu (Ext-Net).<br>
>> > W podsumowaniu instancji możesz zobaczyć prywatny adres IP, który jest automatycznie przypisany do twojego interfejsu.<br>
>> > Masz odpowiedzialność za poprawne skonfigurowanie interfejsu przez DHCP lub poprzez użycie odpowiednich adresów IP w konfiguracji statycznego IP.
>> >
>>
>> **Krok 3: Usuwanie interfejsu z instancji**
>>
>> > [!warning]
>> >
>> > Odłączenie interfejsu sieciowego jest trwałe.
>> >
>> > Jednak ważne jest, aby zauważyć, że jeśli odłączysz interfejs "Ext-Net" (publiczny IP), ten adres zostanie zwolniony i ponownie wprowadzony do obiegu. Nie da się go ponownie przypisać.<br>
>> > Ta akcja jest wymagana tylko wtedy, gdy chcesz izolować swój serwer w vRacku (sieci prywatnej), lub jeśli chcesz usunąć go z jednej lub więcej VLAN.
>> >
>>
>> Po zebraniu wszystkich niezbędnych informacji, możesz użyć poniższego wywołania, aby usunąć interfejs:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Musisz wypełnić co najmniej następujące pola:
>>
>> |Pole|Opis| 
>> |---|---| 
>> |serviceName|Identyfikator projektu Public Cloud.|
>> |instanceId|Identyfikator instancji.|
>> |networkId|Wprowadź identyfikator sieci publicznej (Ext-Net) lub swojego VLAN (pn-xxxxxx_yy).|
>>
> Przez Horizon
>> Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/) jak wspomniano [wyżej](#horizon).
>>
>> Wybierz odpowiednią strefę pracy.
>>
>> ![połączenie Horizon](images/horizon1.png){.thumbnail}
>>
>> Wybierz `Compute` i następnie `Instances` z menu.
>>
>> ![instancje Horizon Compute](images/horizon2.png){.thumbnail}
>>
>> **Dodawanie prywatnego interfejsu**
>>
>> Aby dodać interfejs, kliknij strzałkę w kolumnie `Actions`, aby uzyskać dostęp do możliwych działań na instancji. Wybierz `Attach Interface`{.action}.
>>
>> ![dołącz interfejs Horizon](images/horizon3.png){.thumbnail}
>>
>> Wybierz swój interfejs i potwierdź.
>>
>> ![dołącz interfejs Horizon](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Twoja instancja OVHcloud będzie miała nowy interfejs sieciowy oprócz publicznego interfejsu (Ext-Net).<br>
>> > W podsumowaniu instancji możesz zobaczyć prywatny adres IP, który jest automatycznie przypisany do twojego interfejsu.<br>
>> > Masz odpowiedzialność za poprawne skonfigurowanie interfejsu przez DHCP lub poprzez użycie odpowiednich adresów IP w konfiguracji statycznego IP.
>> >
>>
>> **Odłączanie prywatnego interfejsu sieciowego**
>>
>> > [!warning]
>> >
>> > Odłączenie interfejsu sieciowego jest trwałe.
>> >
>> > Jednak ważne jest, aby zauważyć, że jeśli odłączysz interfejs "Ext-Net" (publiczny IP), ten adres zostanie zwolniony i ponownie wprowadzony do obiegu. Nie da się go ponownie przypisać.<br>
>> > Ta akcja jest wymagana tylko wtedy, gdy chcesz izolować swój serwer w vRacku (sieci prywatnej), lub jeśli chcesz usunąć go z jednej lub więcej VLAN.
>> >
>>
>> Aby odłączyć prywatny interfejs, kliknij strzałkę w kolumnie `Actions`, aby uzyskać dostęp do możliwych działań na instancji. Wybierz `Detach Interface`{.action}.
>>
>> ![odłącz interfejs Horizon](images/horizon5.png){.thumbnail}
>>
>> Wybierz swój interfejs i potwierdź.
>>
>> ![odłącz interfejs Horizon](images/horizon6.png){.thumbnail}
>>
> Przez OpenStack CLI
>> Poniższe kroki są konieczne, aby zintegrować istniejącą instancję z vRackiem.
>>
>> **Pobieranie wymaganych informacji**
>>
>> Zidentyfikuj swoje instancje:
>>
>> ```bash
>> openstack server list
>> 
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name         | Status | Networks                                                               | Image Name |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MyVrack=192.168.0.124  | Debian 9   |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> lub
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | My-Instance  | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MyVrack=192.168.0.124  |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Sieci publiczne i prywatne:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> lub
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MyVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MyVLAN-0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Musisz zanotować identyfikatory sieci, które Cię interesują:
>> >
>> > - Ext-Net dla publicznego adresu IP
>> > - VLAN(y), które są wymagane dla Twojej konfiguracji
>> >
>>
>> **Dodawanie prywatnego interfejsu sieciowego**
>>
>> Aby dołączyć nowy interfejs, wykonaj następującą komendę:
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Przykład:
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Możesz sprawdzić, czy akcja została wykonana:
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => twoj publiczny IP
>> | MyVLAN-42 network                    | 192.168.0.x                                              | => twoj prywatny IP
>> [...]
>> ```
>>
>> lub
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MyVLAN-42=192.168.0.x  | => twoj publiczny IP ; twoj prywatny IP
>> [...]
>> ```
>>

### Usuwanie interfejsu sieciowego

> [!warning]
>
> Odłączenie interfejsu sieciowego jest trwałe.
>
> Jednak ważne jest, aby zauważyć, że jeśli odłączysz interfejs "Ext-Net" (publiczny IP), ten adres zostanie zwolniony i ponownie wprowadzony do obiegu. Nie da się go ponownie przypisać.<br>
> Ta akcja jest wymagana tylko wtedy, gdy chcesz izolować swój serwer w vRacku (sieci prywatnej), lub jeśli chcesz usunąć go z jednej lub więcej VLAN.
>

Aby odłączyć interfejs, musisz najpierw zidentyfikować port Neutrona, który został utworzony.
Możesz to zrobić, używając poniższych komend:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

lub

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Po zidentyfikowaniu portu do usunięcia, możesz wykonać następującą komendę:

```bash
nova interface-detach <ID_instance> <port_id>
```

Przykład:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Sprawdź również

[Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Jeśli potrzebujesz szkoleń lub pomocy technicznej w wdrożeniu naszych rozwiązań, skontaktuj się ze swoim przedstawicielem handlowym lub kliknij w [ten link](/links/professional-services), aby uzyskać wycenę i zapytać naszych ekspertów ds. usług profesjonalnych o pomoc w konkretnym przypadku użycia Twojego projektu.

Dołącz do [grona naszych użytkowników](/links/community).