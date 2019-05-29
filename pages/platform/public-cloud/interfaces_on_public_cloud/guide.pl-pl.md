---
title: Interfejsy zarządzania dostępne w Public Cloud
slug: interfejsy-zarzadzania-public-cloud
excerpt: Dowiedz się, jakimi narzędziami zarządzać usługami Public Cloud
section: Pierwsze kroki
order: 4
---

**Ostatnia aktualizacja dnia 2018-02-18**

## Wprowadzenie

Usługa [Public Cloud](https://www.ovh.pl/public-cloud/){.external} ze względu na swoją specyfikę może być zarządzana za pośrednictwem różnych interfejsów użytkownika.

Pierwszymi, do których uzyskujesz dostęp jako klient OVH, jest [Panel klienta](https://www.ovh.com/auth/?action=gotomanager){.external} oraz [API OVH](https://api.ovh.com/){.external}.

Panel klienta służy do zarządzania zakupionymi usługami, a także zarządzania kontem klienta OVH, w tym płatnościami, fakturami oraz własnością usług . Interfejs ten korzysta z API OVH, które również udostępniamy Klientom. 
API OVH, może posłużyć do budowania własnych skryptów i aplikacji, aby w pełny i zautomatyzowany sposób zarządzać usługami według własnych potrzeb. Niektóre, zaawansowane funkcje są obecne tylko w OVH API.

Usługa Public Cloud oparta jest na technologii OpenStack do tworzenia chmur publicznych. OpenStack również posiada swoje interfejsy. W OVH udostępniamy dwa z nich: OpenStack Dashboard (Horizon) oraz OpenStack API.
Interfejs Horizon, daje możliwość zarządzania całą infrastrukturą chmury korzystając z przeglądarki internetowej. 
OpenStack API może być obsługiwany poprzez narzędzia CLI (Command Line Interface), które jak sama nazwa wskazuje, działają w linii poleceń i mogą posłużyć do tworzenia własnych aplikacji z wykorzystaniem zapytań API OpenStack. 

**W tym przewodniku znajdziesz charakterystykę poszczególnych paneli zarządzania usługami Public Cloud.**

## Wymagania początkowe

- [Konto klienta OVH](https://www.ovh.pl/pomoc/new_nic.xml){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
- Dostęp do [API OVH](https://api.ovh.com/){.external}
- Utworzony [projekt Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-projektow){.external}
- Dostęp do [OpenStack Horizon](https://horizon.cloud.ovh.net/auth/login/){.external}


## W praktyce

### Panel klienta

OVH dostarcza Panel klienta, który jest interfejsem do zarządzania usługami OVH. Doskonała większość operacji związanych z zarządzaniem składnikami chmury jest dostępna za pośrednictwem tego Panelu:

- zarządzanie instancjami,
- zarządzanie dodatkowymi dyskami,
- zarządzanie usługami przechowywania danych,
- zarządzanie sieciami prywatnymi,
- zarządzanie adresami IP,
- zmiana właściciela usług,
- podgląd faktur,
- szacowanie przyszłych płatności itp.

Panel klienta jest wyposażony we wszystkie funkcje służące do zbudowania infrastruktury.


### API OVH

Jest to interfejs dostępny w przeglądarce internetowej umożliwiający klientom OVH zamawianie, zarządzanie, aktualizowanie i konfigurowanie produktów OVH bez korzystania z graficznego interfejsu klienta (Panel klienta OVH). 
Funkcje są podzielone względem produktów i zastosowań, co znacznie ułatwia wyszukiwanie i korzystanie z nich.
Korzystając z API OVH można tworzyć własne aplikacje, automatyzować i zoptymalizować podstawowe działania za pomocą skryptów.

Więcej informacji możesz uzyskać na stronie [API OVH](https://api.ovh.com/){.external}.


### Oprogramowanie OpenStack

OpenStack służy do zarządzania infrastrukturą chmury. Steruje dużymi pulami zasobów obliczeniowych (instancji), sieciowych i pamięci masowej w centrum danych. Operacje można wykonywać za pośrednictwem pulpitu nawigacyjnego Horizon lub interfejsu API.


#### Horizon

Aplikacja Horizon to powszechnie przyjęta implementacja pulpitu OpenStack, który zapewnia dostęp do usług takich jak Nova, Swift, Keystone itp. za pośrednictwem interfejsu obsługiwanego w przeglądarce internetowej. Użytkownik ma możliwość zarządzania, instancjami, dyskami, siecią, grupami bezpieczeństwa. Interfejs Horizon nie jest połączony z systemem rozliczeniowym OVH, nie można więc za jego pomocą sprawdzić kosztów infrastruktury Public Cloud.


#### OpenStack API

OpenStack API może być obsługiwane poniższymi metodami:

- cURL
- OpenStack command-line client
- REST clients
- OpenStack Python Software Development Kit (SDK)

W przewodnikach OVH skupiamy się na korzystaniu z narzędzi linii komend.



#### OSC

Skrót OSC pochodzi od nazwy OpenStackClient i jest interfejsem zarządzanym z linii komend (CLI), który komunikuje się z modułami API OpenStack: Compute (Nova), Identity (Keystone), Image (Glance), Object Storage (Swift) and Block Storage (Cinder) w jednej powłoce z jednolitą strukturą poleceń. Pełna lista możliwych do zastosowania komend znajduje się na stronie [Python OpenStack Client](https://docs.openstack.org/python-openstackclient/latest/cli/command-list.html){.external}.

Każdy z modułów, może być obsługiwany za pomocą dedykowanego narzędzia z linii poleceń. Na przykład: Nova - [Novaclient](https://docs.openstack.org/python-novaclient/){.external}, Glance - [Glanceclient](https://docs.openstack.org/python-glanceclient/latest/){.external}.


## Sprawdź również

[Tworzenie i usuwanie projektów Public Cloud](https://docs.ovh.com/pl/public-cloud/tworzenie-usuwanie-projektow/){.external} 

[Dostęp do panelu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/){.external}

[Zmienne środowiskowe OpenStack](https://docs.ovh.com/pl/public-cloud/zmienne-srodowiskowe-openstack/){.external}

[Przygotowanie środowiska dla API OpenStack](https://docs.ovh.com/pl/public-cloud/przygotowanie_srodowiska_dla_api_openstack/){.external}


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.