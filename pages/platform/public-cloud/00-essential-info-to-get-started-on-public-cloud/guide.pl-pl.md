---
title: "Kluczem do rozpoczęcia korzystania z usługi Public Cloud"
excerpt: "Poznaj podstawowe pojęcia, które mogą być przydatne podczas uruchamiania aplikacji w środowisku Public Cloud"
slug: public-cloud-essential-information
section: Pierwsze kroki
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 07-02-2022**

## Wprowadzenie

Public Cloud OVHcloud to środowisko, w którym można hostować wiele produktów cloud dostępnych na całym świecie, kompatybilnych ze sobą i z możliwością ich wykorzystania przez krótki czas (godzina, kilka dni...) lub dłuższy (kilka miesięcy, lat).

Opcja jest dostępna niemal natychmiast. Fakturowanie jest dostosowane do twoich potrzeb.

Niniejszy przewodnik wyjaśnia, co jest niezbędne do prawidłowego działania produktów.
<br>Prezentujemy w nim najpierw [globalne podejście do Public Cloud](#global-approach) i kilka ogólnych koncepcji, a [następnie konkretne](#concrete-approach) podejście do korzyści płynących z Public Cloud oraz pierwsze etapy rozwoju.
<br>Wreszcie, proponujemy zasoby, aby [przejść dalej](#gofurther)

Jeśli już znasz te pojęcia, możesz kontynuować proces odkrywania Public Cloud OVHcloud, przechodząc do następujących przewodników:

- [Otwórz konto OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/)
- [Utwórz Twój pierwszy projekt Public Cloud](https://docs.ovh.com/pl/public-cloud/utworz_projekt_public_cloud/)
- [Poznaj interfejs Public Cloud](https://docs.ovh.com/gb/en/public-cloud/public-cloud-interface/)
- [Utwórz pierwszą instancję](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/)
- [Zarządzanie limitami](https://docs.ovh.com/pl/public-cloud/zwiekszenie_limitow_public_cloud/)

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

Gdy proponowany zasób jest "zarządzany", najczęściej mówimy o zasobach w warstwach wysokich, które są już zbliżone do aplikacji, takich jak klaster bazy danych, klaster Kubernetes, model szkolenia SI...
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

Aby rozpocząć korzystanie z usługi, najpierw musisz mieć [konto klienta OVHcloud](https://docs.ovh.com/pl/customer/tworzenie-konta-ovhcloud/).

Następnie [utwórz projekt Public Cloud](https://docs.ovh.com/pl/public-cloud/utworz_projekt_public_cloud/). Projekt to środowisko, które będziesz musiał określić jako kontekst.

Na przykład możesz wybrać rozdzielenie środowisk testowych i produkcyjnych na dwa projekty.
<br>Możesz również korzystać z różnych projektów dla różnych aplikacji (strona publiczna, sklep internetowy, aplikacja biznesowa, zarządzanie dokumentami, itp.).

Aby uruchomić projekt, musisz zarejestrować sposób płatności podczas tworzenia projektu.

#### Płatności

Ponieważ Twój sposób płatności jest zarejestrowany, zostanie wykorzystany do pobrania kwoty obliczonej dla Twojego [fakturowania na koniec miesiąca](https://docs.ovh.com/pl/public-cloud/analizowanie_platnosci_i_zarzadzanie_nimi/). Obliczenia te dokonuje się na podstawie czasu wykorzystania każdego zasobu, w zależności od ceny zasobów.

Przykład: W miesiącu korzystałeś z 1 instancji d2-8 przez cały miesiąc oraz 3 instancji b2-60, które zajmują łącznie 32 godziny.
<br>Faktura będzie 720 (liczba godzin w miesiącu) x 0,0325 € netto (cena za godzinę d2-8) + 32 x 0,4589 € netto (cena za godzinę b2-60). Czyli 38,08 EUR netto.

#### Zarządzanie kwotami

Może będziecie musieli poradzić sobie z kwestią limitów.
<br>Limit Public Cloud określa maksymalną liczbę zasobów, które możesz uruchomić. To zależy od niektórych parametrów (starszeństwo konta, wcześniejsze faktury...).
<br>Kwoty te są przyznawane według lokalizacji (region w rozumieniu OpenStack). Możliwe jest zatem, że osiągniesz maksymalny poziom zasobów projektu i [zwiększ limity](https://docs.ovh.com/pl/public-cloud/zwiekszenie_limitow_public_cloud/).

![Public Cloud quota](images/quota.png){.thumbnail}

#### Zarządzanie użytkownikami

Może zaistnieć potrzeba zarządzania kilkoma użytkownikami, którzy będą interweniować w ramach Twojego projektu.
<br>Masz wówczas dwie możliwości:

- Jeśli chcesz korzystać z interfejsu API OpenStack lub S3 lub interfejsu Horizon, musisz [utworzyć w tym celu użytkowników](https://docs.ovh.com/pl/public-cloud/tworzenie-i-usuwanie-uzytkownika-openstack/). Użytkownicy mogą ewentualnie mieć ograniczone prawa, aby zabezpieczyć zakres działania.
- Jeśli nie potrzebujesz dostępu do API lub interfejsu Horizon, możesz [dołączyć do Twojego projektu inne konto klienta OVHcloud](https://docs.ovh.com/pl/public-cloud/delegowanie_projektow/).

## Sprawdź również <a name="gofurther"></a>

Oto kilka zasobów ogólnych, które pomogą Ci w uruchomieniu usługi Public Cloud:

|Dokumentacja|Szczegóły|
|---|---|
|[FAQ](https://docs.ovh.com/pl/public-cloud/public-cloud-faq/)|Najczęstsze pytania dotyczące usługi Public Cloud.|
|[Słowniczek](https://docs.ovh.com/gb/en/public-cloud/introduction-to-instances-and-other-cloud-based-terms/)|Koncepcje i definicje, które będą potrzebne, aby iść naprzód.|
|[Dostępność usług według lokalizacji](https://www.ovhcloud.com/fr/public-cloud/regions-availability/)|Tabele dostępności usług w różnych lokalizacjach.|
|[Zmiany obrazu](https://docs.ovh.com/pl/public-cloud/pci-vps-image-changelog/)|Zmiany wprowadzone do obrazów systemowych dostępnych publicznie.|

W praktyce znajdziesz tutaj również przewodniki, które pomogą Ci zacząć:

|Dokumentacja|Szczegóły|
|---|---|
|[Utwórz pierwszą instancję](https://docs.ovh.com/pl/public-cloud/public-cloud-pierwsze-kroki/)|Pierwszy przewodnik dotyczący uruchomienia serwera cloud w Panelu klienta OVHcloud.|
|[Korzystanie z klucza SSH](https://docs.ovh.com/pl/public-cloud/zarzazdzanie-kluczami-SSH-w-public-cloud/)| Aby zalogować się do instancji Linux, zapoznaj się z tym przewodnikiem dotyczącym korzystania z tej instancji.|
|[Konfiguracja prywatnej sieci](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/)|W OVHcloud prywatne sieci opierają się na technologii vRack. Niniejszy przewodnik pomaga Ci w uruchomieniu tej usługi.|
|[Przypisz dodatkowy dysk do instancji](https://docs.ovh.com/pl/public-cloud/utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/)|Niniejszy przewodnik wyjaśnia, jak dodać przestrzeń dyskową do Twojej pierwszej instancji.|
|[Dostęp do interfejsu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/)|Interfejs Horizon OpenStack pozwala na wykonywanie niektórych zaawansowanych operacji.|
|[Utwórz klaster Kubernetes](https://docs.ovh.com/gb/en/kubernetes/creating-a-cluster/) (EN)|Niniejszy przewodnik ułatwi Ci realizację pierwszego klastra Kubernetes.|
|[Konfiguracja Additional IP](https://docs.ovh.com/pl/public-cloud/konfiguracja-adresu-ip-failover/)|Adresy Additional IP pozwalają na przełączanie ruchu z jednej instancji na inną. Niniejszy przewodnik wyjaśnia, jak to skonfigurować.|
|[Instalacja CLI OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/)|OpenStack może być również używany w wierszu poleceń. Oto jak zainstalować narzędzia.|

Jedną z największych zalet korzystania ze standardowych i otwartych technologii, takich jak OpenStack lub Kubernetes, jest dostęp do całej dostępnej dokumentacji.

|Dokumentacja|Szczegóły|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|Pełna dokumentacja dotycząca najważniejszego klienta z linii poleceń 'openstack'. Dokumentacja dotycząca wersji Stein, zapoznaj się z [tabelą dostępności](https://www.ovhcloud.com/fr/public-cloud/regions-availability/), aby dowiedzieć się, jakie usługi są dostępne.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/) (EN)|Pełna dokumentacja API OpenStack. Dokumentacja dotycząca wersji Stein, zapoznaj się z [tabelą dostępności](https://www.ovhcloud.com/fr/public-cloud/regions-availability/), aby dowiedzieć się, jakie usługi są dostępne.|
|[End user dokumentacje](https://docs.openstack.org/stein/user/) (EN)|Pełna dokumentacja dotycząca użytkownika OpenStack w wersji Stein.|
|[Developer Documents](https://developer.openstack.org/) (EN)|Dokumentacja dla programistów, którzy chcą podłączyć aplikację do API OpenStack, korzystając z dostępnych bibliotek/SDK.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| Dokumentacja dotycząca najważniejszego klienta w wierszu poleceń "kubectl".|
|[Kubernetes APIs Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| Dokumentacja API Kubernetesa, przydatna przy przeglądzie możliwości.|

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
