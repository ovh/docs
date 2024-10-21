---
title: "Kluczem do rozpoczęcia korzystania z usługi Public Cloud"
excerpt: "Poznaj podstawowe pojęcia, które mogą być przydatne podczas uruchamiania aplikacji w środowisku Public Cloud"
updated: 2024-04-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Public Cloud OVHcloud to środowisko, w którym można hostować wiele produktów cloud dostępnych na całym świecie, kompatybilnych ze sobą i z możliwością ich wykorzystania przez krótki czas (godzina, kilka dni...) lub dłuższy (kilka miesięcy, lat).

Opcja jest dostępna niemal natychmiast. Fakturowanie jest dostosowane do twoich potrzeb.

Niniejszy przewodnik wyjaśnia, co jest niezbędne do prawidłowego działania produktów.
<br>Prezentujemy w nim najpierw [globalne podejście do Public Cloud](#global-approach) i kilka ogólnych koncepcji, a [następnie konkretne](#concrete-approach) podejście do korzyści płynących z Public Cloud oraz pierwsze etapy rozwoju.
<br>Wreszcie, proponujemy zasoby, aby [przejść dalej](#gofurther).

Jeśli już znasz te pojęcia, możesz kontynuować proces odkrywania Public Cloud OVHcloud, przechodząc do następujących przewodników:

- [Otwórz konto OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation)
- [Utwórz Twój pierwszy projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project)
- [Poznaj interfejs Public Cloud](/pages/public_cloud/compute/03-public-cloud-interface-walk-me)
- [Utwórz pierwszą instancję](/pages/public_cloud/compute/public-cloud-first-steps)
- [Zarządzanie limitami](/pages/public_cloud/compute/increasing_public_cloud_quota)

## Podejście globalne <a name="global-approach"></a>

### Ekosystem zasobów na żądanie

Wszystkie produkty dostępne w usłudze Public Cloud (takie jak serwery, klastry Kubernetes, dyski...) są ekosystemem.
<br>Każdy element odpowiada jednej funkcji i odpowiada potrzebie, może być stosowany samodzielnie lub jako uzupełnienie innych elementów katalogu.
<br>Na przykład instancja (serwer na żądanie) może być używana jako uzupełnienie elementów przestrzeni dyskowej, takich jak object storage. Jeśli Twoja aplikacja wymaga bazy danych, istnieje również element, który odpowiada na to zapotrzebowanie.

Wszystkie te komponenty są zintegrowane ze środowiskiem, aby ułatwić ich wdrażanie i wykorzystanie.
<br>W związku z tym bardzo łatwo jest uruchomić zasoby, takie jak instancja lub klaster Kubernetes. Wdrożenie następuje w ciągu kilku sekund.
<br>Możesz również usunąć te zasoby kilka godzin później i w ten sposób zapłacić tylko za ten czas użytkowania. Nazywa się to "zasobami na żądanie".

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Zasoby dostępne wszędzie

W katalogu Public Cloud znajdują się zasoby o niskim poziomie, takie jak instancje, prywatne sieci lub zasoby zarządzane w wyższych warstwach, takie jak baza danych.
<br>Zasoby te są dostarczane jako usługa, w tym sensie, że użytkownik nie musi kupować elementów, używa ich przez pewien czas (np. podczas wynajmu) i po prostu płaci cenę odpowiadającą czasowi użytkowania.
<br>W większości przypadków korzystanie z tych zasobów nie trwa długo (z wyjątkiem przypadku płatności miesięcznych mających na celu zmniejszenie kosztów).

Gdy proponowany zasób jest "zarządzany", najczęściej mówimy o zasobach w warstwach wysokich, które są już zbliżone do aplikacji, takich jak klaster bazy danych, klaster Kubernetes, rozwiązanie do szkolenia modeli dla AI...
<br>"Zarządzana" oznacza, że platforma jest wdrażana, monitorowana, utrzymywana (upgrade) przez OVHcloud. Nie musisz się przejmować zarządzaniem usługami. Skorzystaj bezpośrednio z usługi.

Zasoby te są dostępne w naszych centrach danych na całym świecie. OVHcloud oferuje usługi Public Cloud w Europie, Ameryce Północnej, Azji i Oceanii.
<br>W każdym z tych miejsc można uruchomić zasób, wybierając tylko żądaną lokalizację.

![Public Cloud geolokalizacja](images/geolocation.png){.thumbnail}

### Dostawca usług cloud na dojrzałym rynku

Public Cloud OVHcloud znajduje się obok znanych dostawców usług cloud, takich jak AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (Microsoft) czy Alibaba Cloud. Oferta OVH wyróżnia się [szczególnie korzystnymi](https://www.ovhcloud.com/pl/public-cloud/prices/) cenami oraz standardowym API, które pozwalają naszym użytkownikom na swobodne wprowadzanie zmian, bez konieczności korzystania z jednej lub kilku technologii będących jej właścicielem.

## Konkretne podejście <a name="concrete-approach"></a>

### Zastosowania: konkretne przykłady i korzyści

- **Więcej elastyczności**: *Posiadasz aplikację, która działa aktualnie na klasycznym hostingu, takim jak jeden (lub więcej) serwer dedykowany i chcesz korzystać z większej elastyczności w użytkowaniu.* Korzystanie z instancji Public Cloud jest podobne do korzystania z serwera dedykowanego, ale daje możliwość zmiany rozmiaru serwera w prosty sposób, monitorowania rozwoju sprzętu, dodawania przestrzeni dyskowej bez przerwy w działaniu usług, konfigurowania architektury sieci, programowania kopii zapasowych lub klonowania serwera w kilku prostych krokach.
- **Więcej skalowalności**: *Tworzysz aplikację cloud natywną i potrzebujesz infrastruktury, która obsłuży duże wahania obciążenia.* Klastry Kubernetes mogą dynamicznie reagować i dostosowywać się do obciążenia. Mogą dodawać węzły do klastra automatycznie, gdy ciśnienie w infrastrukturze rośnie.
- **Więcej kontroli kosztów**: *Masz produkcyjną aplikację podlegającą sezonowości i chcesz przenieść obciążenie obliczeniowe w czasie wzrostu, bez utrzymywania znacznych kosztów infrastruktury przez cały rok.* Instancje płatne w trybie godzinowym mogą wykonywać zadania w krótkim czasie i mogą zostać zniszczone po wyczerpaniu zapotrzebowania.
- **Więcej spokoju**: *Potrzebujesz bazy danych, ale nie chcesz zarządzać silnikiem i utrzymywać silnika.* Zarządzane bazy danych są dostępne w ciągu kilku sekund i są w pełni zarządzane przez OVHcloud. Możesz korzystać z usługi bazy danych nie wykonując instalacji, konserwacji, aktualizacji...

### Użycie: prosty interfejs i standardowe API

Istnieje kilka sposobów zarządzania zasobami Public Cloud. Bez względu na to, czy odkrywasz produkty Public Cloud czy jesteś zaawansowanym użytkownikiem, korzystanie z nich jest proste.

- Panel klienta pomaga w tworzeniu zasobów, skłaniając Cię do wybrania wydajności produktu, jego lokalizacji, wyboru ustawień, które chcesz lub innych parametrów, takich jak sposób płatności.
- Aby zautomatyzować wdrażanie i zautomatyzować architekturę, możesz również korzystać z narzędzi dostępnych na rynku. Wystarczy zalogować się do standardowych interfejsów API, takich jak API S3, API OpenStack czy Kubernetes.

### Uruchomienie: obsługa

#### Projekt

Aby rozpocząć korzystanie z usługi, najpierw musisz mieć [konto klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).

Następnie [utwórz projekt Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project). Projekt to środowisko, które będziesz musiał określić jako kontekst.

Na przykład możesz wybrać rozdzielenie środowisk testowych i produkcyjnych na dwa projekty.
<br>Możesz również korzystać z różnych projektów dla różnych aplikacji (strona publiczna, sklep internetowy, aplikacja biznesowa, zarządzanie dokumentami, itp.).

Aby uruchomić projekt, musisz zarejestrować sposób płatności podczas tworzenia projektu.

#### Płatności

> [!primary]
> W przypadku instancji *Virtual Machines* licznik rozliczeń rozpoczyna się, gdy instancja osiągnie status `ACTIVE` (wyświetlany jako `Włączona` w przestrzeni klienta OVHcloud). Innymi słowy, okres, w którym instancja jest w stanie `BUILD` nie jest rozliczany.
>

Ponieważ Twój sposób płatności jest zarejestrowany, zostanie wykorzystany do pobrania kwoty obliczonej dla Twojego [fakturowania na koniec miesiąca](/pages/public_cloud/compute/analyze_billing). Obliczenia te dokonuje się na podstawie czasu wykorzystania każdego zasobu, w zależności od ceny zasobów.

Przykład: W miesiącu korzystałeś z 1 instancji d2-8 przez cały miesiąc oraz 3 instancji b2-60, które zajmują łącznie 32 godziny.
<br>Faktura będzie 720 (liczba godzin w miesiącu) x 0,0325 € netto (cena za godzinę d2-8) + 32 x 0,4589 € netto (cena za godzinę b2-60). Czyli 38,08 EUR netto.

#### Zarządzanie kwotami

Może będziecie musieli poradzić sobie z kwestią limitów.
<br>Limit Public Cloud określa maksymalną liczbę zasobów, które możesz uruchomić. To zależy od niektórych parametrów (starszeństwo konta, wcześniejsze faktury...).
<br>Kwoty te są przyznawane według lokalizacji (region w rozumieniu OpenStack). Możliwe jest zatem, że osiągniesz maksymalny poziom zasobów projektu i [zwiększ limity](/pages/public_cloud/compute/increasing_public_cloud_quota).

![Public Cloud quota](images/quota.png){.thumbnail}

#### Zarządzanie użytkownikami

Może zaistnieć potrzeba zarządzania kilkoma użytkownikami, którzy będą interweniować w ramach Twojego projektu.
<br>Masz wówczas dwie możliwości:

- Jeśli chcesz korzystać z interfejsu API OpenStack lub S3 lub interfejsu Horizon, musisz [utworzyć w tym celu użytkowników](/pages/public_cloud/compute/create_and_delete_a_user). Użytkownicy mogą ewentualnie mieć ograniczone prawa, aby zabezpieczyć zakres działania.
- Jeśli nie potrzebujesz dostępu do API lub interfejsu Horizon, możesz [dołączyć do Twojego projektu inne konto klienta OVHcloud](/pages/public_cloud/compute/delegate_projects).

## Sprawdź również <a name="gofurther"></a>

Oto kilka zasobów ogólnych, które pomogą Ci w uruchomieniu usługi Public Cloud:

|Dokumentacja|Szczegóły|
|---|---|
|[FAQ](/pages/public_cloud/compute/faq_pci)|Najczęstsze pytania dotyczące usługi Public Cloud.|
|[Słowniczek](/pages/public_cloud/compute/introduction_about_instances)|Koncepcje i definicje, które będą potrzebne, aby iść naprzód.|
|[Dostępność usług według lokalizacji](https://www.ovhcloud.com/pl/public-cloud/regions-availability/)|Tabele dostępności usług w różnych lokalizacjach.|
|[Zmiany obrazu](/pages/public_cloud/compute/image_changelog)|Zmiany wprowadzone do obrazów systemowych dostępnych publicznie.|

W praktyce znajdziesz tutaj również przewodniki, które pomogą Ci zacząć:

|Dokumentacja|Szczegóły|
|---|---|
|[Utwórz pierwszą instancję](/pages/public_cloud/compute/public-cloud-first-steps)|Pierwszy przewodnik dotyczący uruchomienia serwera cloud w Panelu klienta OVHcloud.|
|[Korzystanie z klucza SSH](/pages/public_cloud/compute/public-cloud-first-steps#krok-2-przechowywanie-kluczy-publicznych-w-panelu-klienta-ovhcloud_1)| Aby zalogować się do instancji Linux, zapoznaj się z tym przewodnikiem dotyczącym korzystania z tej instancji.|
|[Konfiguracja prywatnej sieci](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)|W OVHcloud prywatne sieci opierają się na technologii vRack. Niniejszy przewodnik pomaga Ci w uruchomieniu tej usługi.|
|[Przypisz dodatkowy dysk do instancji](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)|Niniejszy przewodnik wyjaśnia, jak dodać przestrzeń dyskową do Twojej pierwszej instancji.|
|[Dostęp do interfejsu Horizon](/pages/public_cloud/compute/introducing_horizon)|Interfejs Horizon OpenStack pozwala na wykonywanie niektórych zaawansowanych operacji.|
|[Utwórz klaster Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster) (EN)|Niniejszy przewodnik ułatwi Ci realizację pierwszego klastra Kubernetes.|
|[Konfiguracja Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)|Adresy Additional IP pozwalają na przełączanie ruchu z jednej instancji na inną. Niniejszy przewodnik wyjaśnia, jak to skonfigurować.|
|[Korzystanie z interfejsu Horizon](/pages/public_cloud/compute/introducing_horizon)|Horizon to klasyczny interfejs OpenStack, a ten przewodnik wyjaśni, jak uzyskać do niego dostęp.|
|[Instalacja CLI OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)|OpenStack może być również używany w wierszu poleceń. Oto jak zainstalować narzędzia.|

Jedną z największych zalet korzystania ze standardowych i otwartych technologii, takich jak OpenStack lub Kubernetes, jest dostęp do całej dostępnej dokumentacji.

|Dokumentacja|Szczegóły|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|Pełna dokumentacja dotycząca najważniejszego klienta z linii poleceń 'openstack'. Dokumentacja dotycząca wersji Stein, zapoznaj się z [tabelą dostępności](https://www.ovhcloud.com/pl/public-cloud/regions-availability/), aby dowiedzieć się, jakie usługi są dostępne.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/) (EN)|Pełna dokumentacja API OpenStack. Dokumentacja dotycząca wersji Stein, zapoznaj się z [tabelą dostępności](https://www.ovhcloud.com/pl/public-cloud/regions-availability/), aby dowiedzieć się, jakie usługi są dostępne.|
|[End user dokumentacje](https://docs.openstack.org/stein/user/) (EN)|Pełna dokumentacja dotycząca użytkownika OpenStack w wersji Stein.|
|[Developer Documents](https://developer.openstack.org/) (EN)|Dokumentacja dla programistów, którzy chcą podłączyć aplikację do API OpenStack, korzystając z dostępnych bibliotek/SDK.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| Dokumentacja dotycząca najważniejszego klienta w wierszu poleceń "kubectl".|
|[Kubernetes APIs Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| Dokumentacja API Kubernetesa, przydatna przy przeglądzie możliwości.|

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
