---
title: 'Konfiguracja vRack dla Public Cloud'
excerpt: 'Dowiedz się, jak skonfigurować usługę vRack dla instancji Public Cloud'
updated: 2024-12-23
---

## Wprowadzenie

Usługa [vRack](/links/network/vrack) to prywatna sieć, która umożliwia klientom kierowanie ruchu między serwerami dedykowanymi OVHcloud i innymi usługami OVHcloud. Umożliwia on również dodawanie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) do sieci prywatnej w celu utworzenia infrastruktury zasobów fizycznych i wirtualnych.

**Dowiedz się, jak skonfigurować instancje Public Cloud w ramach sieci vRack.**

## Wymagania początkowe

- [projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) na koncie OVHcloud
- dostęp do [Panelu klienta OVHcloud](/links/manager)
- [użytkownika OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcjonalnie)
- podstawowa wiedza w zakresie sieci komputerowych

## Interfejsy

Tworzenie sieci vRack lub dodawanie instancji do sieci odbywa się przy użyciu Panelu klienta, APIv6 OVHcloud, API OpenStack, interfejsu Horizon lub Terraform.

W zależności od profilu technicznego i Twoich potrzeb, do Ciebie należy wybór interfejsu lub metody. Poniższe instrukcje opisują niezbędne etapy dla każdej opcji.

**W pierwszym kroku poniżej zamieszczono krótki opis możliwych operacji zgodnie z wybraną metodą/interfejsem.**

### Panel klienta OVHcloud

[Panel klienta OVHcloud](/links/manager) jest to interfejs całkowicie i wyłącznie wizualny, dzięki czemu idealnie nadaje się do zarządzania wieloma sieciami VLAN. Możesz również spersonalizować zakres prywatnych adresów IP, które domyślnie to 10.x.x.x/16.

Sieci VLAN zostaną wdrożone w wybranym regionie. Będziesz mógł również włączyć bramy, włączyć dystrybucje DHCP, itp.

Płatności za usługi możesz również zarządzać w Panelu klienta.

### Interfejs Horizon

Interfejs [Horizon](https://horizon.cloud.ovh.net/auth/login/) (niezależny od OVHcloud) jest oryginalną implementacją dashboardu OpenStack, który udostępnia interfejs użytkownika www dla usług OpenStack, w tym Nova, Swift, Keystone, itp.

Ten wielofunkcyjny interfejs techniczny pozwala na zarządzanie prawie wszystkimi operacjami OpenStack. Jest to jeden z niezbędnych interfejsów, jeśli potrzebujesz zarządzać więcej niż dwoma sieciami VLAN, dodawać prywatne interfejsy sieciowe do instancji, zarządzać obrazami dostosowanymi do Twoich potrzeb, itp.

Zapoznaj się z następującą [instrukcją](/pages/public_cloud/compute/introducing_horizon), aby zapoznać się z Horizon.

> [!primary]
> Horizon działa w danej strefie. Dlatego też należy pamiętać o wyborze logicznej (geograficznej) strefy roboczej w lewym górnym rogu interfejsu (GRA5, SBG3, BHS1 itp.).
>

### APIv6 OVHcloud

Każde działanie podejmowane w Panelu klienta OVHcloud można wywołać za pomocą interfejsu [APIv6 OVHcloud](https://api.ovh.com/). Oferuje on nawet więcej możliwości niż interfejs graficzny.

Interfejs API jest mniej wizualny niż Panel klienta OVHcloud, ale pozwala na wykonanie dużej liczby operacji. Możesz zarządzać i dostosowywać VLAN, dodawać interfejsy do instancji lub tworzyć wysoko spersonalizowane serwery.

Możesz po prostu uzyskać do niej dostęp z [naszej strony internetowej](https://api.ovh.com/), ale również wykorzystać go do tworzenia skryptów PHP lub Python. Dzięki temu możesz swobodnie automatyzować podstawowe zadania za pomocą skryptów, zoptymalizować własne funkcje i wiele więcej.

Przed użyciem niektórych wywołań API może być konieczne pobranie różnych informacji, ponieważ wymagane jest wprowadzenie określonych danych.

Zobacz przewodnik [Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps), aby rozpocząć korzystanie z interfejsu APIv6 OVHcloud.

### API OpenStack

Usługami Public Cloud można zarządzać za pomocą wierszy poleceń Linux lub Windows po pobraniu i zainstalowaniu narzędzi OpenStack.

Aby skorzystać z tej możliwości, konieczna jest odpowiednia wiedza z zakresu systemu Linux lub Windows. Korzystaj jednak z całej mocy OpenStack.

W zależności od warstwy, którą chcesz zarządzać, użyj klienta **Nova** (Compute), **Neutron** (sieć), **Glance** (obraz) lub **Swift** (object storage). Najnowszy dodatek do tego asortymentu, klient OpenStack, umożliwia bezpośrednie zarządzanie prawie wszystkimi warstwami OpenStack.

Dzięki API OpenStack możesz również w prosty sposób zautomatyzować zarządzanie usługami za pomocą skryptów.

Aby uzyskać więcej informacji na temat korzystania z API OpenStack, zapoznaj się z następującymi przewodnikami:

- [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Zmienne środowiskowe OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

Następnie, w razie potrzeby, będziesz mógł korzystać z API dedykowanych dla OpenStack:

- Nova (compute)
- Glance (obraz)
- Cinder (obraz)
- Neutron (sieć)

> [!primary]
> W niektórych przypadkach korzystanie z interfejsów API OpenStack będzie łatwiejsze, a w innych łatwiejsze, Nova, Neutron, itp.
>
> Ponadto w API OpenStack może brakować niektórych funkcji w zależności od wersji klienta i systemu operacyjnego.
Niniejszy przewodnik prezentuje najprostsze i najbardziej intuicyjne opcje.
Możesz zapoznać się z [oficjalną dokumentacją OpenStack](https://docs.openstack.org/){.external}, jeśli chcesz dowiedzieć się więcej o jej używaniu.
>

Więcej informacji znajdziesz w przewodniku: [Konfiguracja Public Cloud vRack przy użyciu OpenStack CLI](/pages/public_cloud/public_cloud_network_services/getting-started-09-creating-vrack-with-openstack).

### Terraform

Terraform umożliwia również zarządzanie infrastrukturą OVHcloud.

W tym celu należy wybrać właściwego dostawcę terraform i zasobów. Więcej informacji zawiera przewodnik [używanie Terraform z OVHcloud (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## W praktyce

### Etap 1: Aktywacja i zarządzanie usługą vRack <a name="activation"></a>

#### W Panelu klienta OVHcloud

> [!primary]
> Nie dotyczy to nowo utworzonych projektów, które są teraz automatycznie dostarczane z siecią vRack. Aby wyświetlić sieć vRack po utworzeniu projektu, przejdź do menu `Bare Metal Cloud`{.action} i kliknij `Network`{.action} w zakładce po lewej stronie. Kliknij opcję `Prywatna sieć vRack`{.action}, aby wyświetlić sieć(e) vRack(s).
>

Jeśli posiadasz starszy projekt, ale nie posiadasz usługi vRack, musisz zamówić usługę. Ten produkt jest bezpłatny, a jego udostępnienie zajmuje tylko kilka minut.

Przejdź do menu `Bare Metal Cloud`{.action} i kliknij przycisk `Zamów`{.action}. Z tego menu wybierz opcję `vRack`{.action}.

![Zamów opcję vrack](images/ordering_vrack_2024.png){.thumbnail}

Zostaniesz przekierowany na inną stronę, aby zatwierdzić zamówienie. Operacja potrwa kilka minut.

Po uaktywnieniu usługi odnajdziesz ją w Panelu klienta w sekcji `Bare Metal Cloud`{.action} > `Network`{.action} > `Prywatna sieć vRack`{.action}. Pod nazwą "pn-xxxxxx".

Na liście dostępnych usług zaznacz projekt, który chcesz dodać do szafy vRack i kliknij na przycisk `Dodaj`{.action}.

![Dodaj projekt](images/addprojectvrack.png){.thumbnail}

Aby kontynuować konfigurację vRack, przejdź do sekcji [Tworzenie sieci VLAN w Panelu klienta](./#tworzenie-sieci-prywatnej-w-panelu-klienta-ovhcloud) niniejszego przewodnika.

#### Za pomocą APIv6 OVHcloud

Aby włączyć i zarządzać usługą vRack za pomocą interfejsu APIv6 OVHcloud, zapoznaj się z [tą częścią](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), odpowiedniego przewodnika.

### Etap 2: Tworzenie sieci prywatnej w ramach usługi vRack

Należy utworzyć prywatną sieć z lokalną siecią wirtualną (VLAN), aby instancje podłączone do sieci vRack mogły komunikować się między sobą.

Dzięki usłudze Public Cloud możesz utworzyć aż do 4 000 sieci VLAN w ramach jednej usługi vRack. Dzięki temu każdy prywatny adres IP może być wykorzystany maksymalnie 4 000 razy.
Na przykład adres 192.168.0.10 sieci VLAN 2 różni się od adresu IP 192.168.0.10 sieci VLAN 42.
Rozwiązanie to może być przydatne do segmentacji usługi vRack na kilka wirtualnych sieci.

W Panelu klienta OVHcloud możesz przypisać wybraną sieć VLAN, ale nie możesz spersonalizować zakresu adresów IP. Usługa vRack zostanie włączona we wszystkich strefach.

W Panelu klienta OVHcloud możesz przypisać wybraną sieć VLAN i spersonalizować zakres prywatnych adresów IP.

> [!primary]
> Na serwerach dedykowanych używasz domyślnie sieci VLAN 0. Infrastruktura OpenStack wymaga podania identyfikatora VLAN bezpośrednio na poziomie infrastruktury.
>
> W przeciwieństwie do serwerów dedykowanych nie trzeba oznaczać sieci VLAN bezpośrednio na instancji Public Cloud.
>
> Więcej informacji na ten temat zawiera przewodnik [Tworzenie kilku sieci VLAN w prywatnej sieci vRack.](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

> [!warning]
> Usługą vRack zarządzamy na poziomie infrastruktury OVHcloud. Oznacza to, że administrowanie usługą odbywa się wyłącznie w Panelu klienta i przez APIv6.
>
> Ponieważ usługa OpenStack nie jest zlokalizowana na tym samym poziomie, nie będzie możliwe personalizacja sieci VLAN za pośrednictwem interfejsu Horizon ani przez API OpenStack.
>

#### Tworzenie sieci prywatnej w Panelu klienta OVHcloud

Kolejnym krokiem po utworzeniu Twojej usługi vRack jest utworzenie prywatnej sieci.

W karcie Public Cloud kliknij `Private Network`{.action} w menu po lewej stronie, pod **Network**.

![Tworzenie sieci VLAN](images/vrack2022-03.png){.thumbnail}

Kliknij przycisk `Utwórz prywatną sieć`{.action}. Na następnej stronie można dostosować wiele ustawień.

W etapie 1 wybierz region, w którym chcesz utworzyć prywatną sieć.

![select region](images/vrack5-2024.png){.thumbnail}

Na następnym etapie otrzymasz kilka opcji:

![tworzenie network](images/vrack6-2022.png){.thumbnail}

W polu **Nazwa sieci prywatnej** podaj nazwę sieci prywatnej.

**Utwórz Gateway i połącz się z prywatną siecią**

Wybierz tę opcję, jeśli chcesz utworzyć instancje wyłącznie z siecią prywatną. Więcej informacji znajdziesz w przewodnikach: [Creating a private network with Gateway (EN)](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) i [Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps).

> [!warning]
> Jeśli opcja jest szara, oznacza to, że jest niezgodna z wybranym regionem. Więcej informacji znajduje się na stronie internetowej [dostępność produktów Public Cloud dla każdego regionu](/links/public-cloud/regions-pci).
>

**Opcje sieciowe warstwy 2**

Jeśli zostanie wybrana opcja `Wybierz ID sieci VLAN` sieci VLAN, trzeba będzie wybrać numer VLAN ID z zakresu od 0 do 4 000.

Jeśli to pole nie zostanie zaznaczone, system przypisze losowy numer VLAN.

Jeśli potrzebujesz komunikacji z serwerami dedykowanymi w tej sieci VLAN, zapoznaj się z przewodnikiem [Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

**Opcje dystrybucji adresów DHCP**

Domyślny zakres DHCP to 10.0.0.0/16. Możesz skorzystać z innego wybranego zakresu prywatnego.

Po dokonaniu wyboru kliknij przycisk `Utwórz`{.action}, aby uruchomić proces.

> [!primary]
> Utworzenie prywatnej sieci może zająć kilka minut.
>

#### Tworzenie sieci prywatnej za pomocą interfejsu APIv6 OVHcloud <a name="vlansetup"></a>

Aby utworzyć sieć VLAN przy użyciu interfejsu APIv6 OVHcloud, zapoznaj się z [tą sekcją](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack) (EN), odpowiedniego przewodnika.

#### Tworzenie prywatnej sieci przy użyciu Terraform

Należy skorzystać z usług dostawcy openstack. Przykład kompletnego skryptu terraform możesz pobrać w [to repozytorium](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).

Specyficzną częścią procesu integracji rozwiązania vRack jest parametr `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type" = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr = "10.0.0.0/16"
  enable_dhcp = true
}
```

### Etap 3: Integracja instancji z usługą vRack

Możliwe są dwa scenariusze:

- Instancja, która ma zostać zintegrowana, jeszcze nie istnieje.
- Istniejąca instancja musi zostać dodana do sieci vRack.

**W przypadku nowej instancji**

#### W Panelu klienta OVHcloud**

Jeśli potrzebujesz pomocy, zapoznaj się z tym przewodnikiem: [Tworzenie instancji](/pages/public_cloud/compute/public-cloud-first-steps) Podczas tworzenia instancji w etapie 5 możesz wybrać tryb sieci, a następnie prywatną sieć, do której chcesz zintegrować instancję.

![przypisz nową instancję](images/network-selection.png){.thumbnail}

> [!warning]
> W Panelu klienta OVHcloud będzie można podłączyć instancję **tylko do jednej** sieci vRack.
> Aby dodać kilka interfejsów, przejdź przez API OpenStack lub Horizon.
>

#### Za pomocą APIv6 OVHcloud

Przejdź do [tej sekcji](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-4-integrating-an-instance-into-the-vrack) (EN), odpowiedniego przewodnika.

**W przypadku istniejącej instancji**

Panel klienta OVHcloud umożliwia przypisanie instancji do jednej lub kilku prywatnych sieci, ale nie oferuje zaawansowanej konfiguracji interfejsu sieciowego. Aby jeszcze bardziej spersonalizować infrastrukturę, należy zarządzać nią za pośrednictwem interfejsu APIv6 OVHcloud, API OpenStack lub Horizon.

Operacja, którą należy przeprowadzić, polega na dodaniu do Twojego serwera nowego interfejsu sieciowego, obok interfejsu już istniejącego.

Na przykład, jeśli masz interfejs publiczny *eth0*, dodasz interfejs *eth1*.

> [!warning]
> Konfiguracja nowego interfejsu rzadko przebiega automatycznie.
> W tym celu ustaw statyczny adres IP lub skonfiguruj usługę DHCP, w zależności od infrastruktury.
>

#### W Panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.

Kliknij pozycję `Instances`{.action} na lewym pasku nawigacyjnym, a następnie kliknij pozycję `...`{.action} z prawej strony instancji. Wybierz opcję `Informacje o instancji`{.action} wystąpienia.

![wystąpienie szczegółowe](images/vrack2021.png){.thumbnail}

Spowoduje to otwarcie pulpitu nawigacyjnego instancji. Kliknij przycisk `...`{.action} po prawej stronie "Prywatne sieci", a następnie na `Przypisz sieć`{.action}.

![przypisz sieć](images/vrack2021-01.png){.thumbnail}

W wyświetlonym oknie wybierz sieci prywatne, które chcesz połączyć z instancją, a następnie kliknij przycisk `Przypisz`{.action}.

![przypisz sieć](images/vrack9.png){.thumbnail}

#### Zarządzanie interfejsami sieciowymi za pomocą interfejsu APIv6 OVHcloud

Przejdź do [tej sekcji](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#in-case-of-an-existing-instance) (EN), odpowiedniego przewodnika.

#### Zarządzanie interfejsami sieciowymi za pomocą OpenStack Horizon

Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}, przy użyciu metody określonej w [pierwszej części niniejszego przewodnika](./#interfejs-horizon).

Wybierz właściwą strefę roboczą.

![connection Horizon](images/horizon1.png){.thumbnail}

Wybierz polecenie `Compute`, a następnie polecenie `Instances`.

![Instancje obliczeniowe Horizon](images/horizon2.png){.thumbnail}

**Dodawanie prywatnego interfejsu**

Aby dodać interfejs, kliknij strzałkę w kolumnie "Actions" w celu uzyskania dostępu do możliwych akcji dla instancji. Wybierz opcję `Attach Interface`{.action}.

![Horizon Attach Interface](images/horizon3.png){.thumbnail}

Wybierz interfejs i zatwierdź.

![Horizon Attach Interface](images/horizon4.png){.thumbnail}

> [!primary]
> Twoja instancja OVHcloud będzie miała nowy interfejs sieciowy oprócz interfejsu publicznego (Ext-Net).
><br>W podsumowaniu instancji wyświetlony zostanie prywatny adres IP automatycznie przypisany do Twojego interfejsu.
><br>Do klienta należy poprawna konfiguracja interfejsu przez DHCP lub użycie odpowiednich adresów IP w statycznej konfiguracji IP.
>

**Usuwanie prywatnego interfejsu**

> [!warning]
> Usunięcie interfejsu jest operacją nieodwracalną.
>
> Jeśli usuniesz interfejs "Ext-Net" (publiczny adres IP), adres ten zostanie ponownie udostępniony. Nie można tego po prostu przypisać ponownie.
><br>Czynność ta jest niezbędna, jeśli chcesz odizolować Twój serwer od sieci vRack (interfejs Ext-Net) lub usunąć go z sieci VLAN.
>

Aby usunąć interfejs, kliknij strzałkę w kolumnie "Actions" w celu uzyskania dostępu do możliwych akcji dla instancji. Wybierz opcję `Detach Interface`{.action}.

![Interfejs odłączania Horizon](images/horizon5.png){.thumbnail}

Wybierz interfejs i zatwierdź.

![Interfejs odłączania Horizon](images/horizon6.png){.thumbnail}

## Sprawdź również

[Konfiguracja vRack dla Public Cloud przy użyciu interfejsu APIv6 OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN)

[Serwery dedykowane - Tworzenie kilku sieci VLAN w prywatnej sieci vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).