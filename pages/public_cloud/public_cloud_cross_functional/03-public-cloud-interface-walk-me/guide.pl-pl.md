---
title: "Poznaj interfejs Public Cloud"
excerpt: "Przewodnik po interfejsie Public Cloud do znajdowania poszczególnych sekcji"
updated: 2025-04-28
---

## Wprowadzenie

Właśnie utworzyłeś Twój projekt Public Cloud i chcesz dowiedzieć się więcej o interfejsie użytkownika w Panelu klienta OVHcloud.

**Poznaj główne sekcje interfejsu Public Cloud w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Utworzenie [pierwszego projekt Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).

## W praktyce

Po utworzeniu pierwszego projektu Public Cloud zostaniesz przekierowany do głównego interfejsu Public Cloud.

![Public Cloud interfejs](images/main-interface-2025.png){.thumbnail}

### Dostęp do danych konta OVHcloud

Parametry konta OVHcloud pozostają dostępne w każdej chwili, podobnie jak powiadomienia lub zmiana języka w Panelu klienta.

![Public Cloud interfejs - menu konta](images/account-2025.png){.thumbnail}

### Twój projekt Public Cloud

Ponieważ możliwe jest użycie kilku projektów (w zależności od rozmiaru projektu), nazwa i ID projektu są zawsze wyświetlane, niezależnie od wyświetlanego ekranu, aby dowiedzieć się, w jakim środowisku działa.

![Menu projektu](images/project-menu-2025.png){.thumbnail}

ID może być konieczne podczas korzystania z CLI, niektórych zgłoszeń dotyczących wsparcia lub innych. Możesz go skopiować klikając ikonę znajdującą się po prawej stronie.

Możesz zmienić nazwę projektu w zakładce `Ustawienia`{.action}. Wpisz nową nazwę i kliknij na `Aktualizuj`{.action}.

![Zmień nazwę projektu Public Cloud](images/rename-project.png){.thumbnail}

### Menu główne Public Cloud

![Public Cloud interface - menu główne](images/main-menu-2025.png){.thumbnail}

|Sekcja|Opis opcji|
|---|---|
|**Compute**|W tej sekcji możesz uruchomić instancje, które są dostępne na żądanie.|
|**Storage i Backup**|W tej sekcji znajdziesz rozwiązania do przechowywania danych i baz danych, z których każda odpowiada konkretnym potrzebom i wykorzystaniu.|
|**Sieć**|W tej sekcji znajdziesz informacje, jak połączyć Twoje zasoby Public Cloud, a także co łączyć je z innymi produktami OVHcloud.|
|**Konteneryzacja i Orkiestracja**|W tej sekcji możesz korzystać z różnych narzędzi do automatyzacji architektury.|
|**Databases & Analytics**|Usługi te pomogą Ci rozwiązać problem Big Data i Data Analytics.|
|**AI & Machine Learning**|W tej sekcji znajdziesz narzędzia OVHcloud do sztucznej inteligencji.|

### Skróty

W centrum ekranu znajdują się skróty umożliwiające szybki dostęp do asystentów konfiguracji i do najbardziej przydatnych przewodników.

![Public Cloud interfejs - menu skrótów](images/shortcuts-2025.png){.thumbnail}

#### Pomoc na tworzenie zasobów

Dla każdego zasobu, który chcesz utworzyć, towarzyszą Ci asystent konfiguracji, który, krok po kroku, pozwala na ustawienie zasobów zgodnie z Twoimi potrzebami.
<br>W większości przypadków będziesz musiał wybrać lokalizację zasobu, model, kilka ustawień, które można spersonalizować, a w niektórych przypadkach również sposób płatności.

![Public Cloud interface - asystent konfiguracji](images/wizard-2025.png){.thumbnail}

### Narzędzia do zarządzania

W projekcie Public Cloud dostępnych jest kilka narzędzi do zarządzania. Są one na dole paska menu po lewej stronie.

![Public Cloud interface - narzędzia do zarządzania](images/management-tools-2025.png){.thumbnail}

|Wejście do menu|Opis|
|---|---|
|**Horizon**|Jest to [interfejs graficzny](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) zazwyczaj dostępny na OpenStack. Nie została zmodyfikowana, co pozwala użytkownikom, którzy przywykli do korzystania z tego interfejsu, na odnalezienie własnego odruchu.|
|**Użytkownicy & Role**|Umożliwia [tworzenie użytkowników](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) i przypisywanie im roli. Użytkownicy ci umożliwiają między innymi bezpośredni dostęp do API lub do interfejsu Horizon. Możesz na przykład utworzyć użytkownika do Twoich klasycznych prac konserwacyjnych oraz użytkownika do narzędzi automatyzacji, takich jak Terraform.|
|**Limity i regiony**|Narzędzie to pozwala na zarządzanie lokalizacjami i limitami zasobów dostępnymi dla Twojego projektu.<br><br>**Limity**: Zgodnie z określonymi kryteriami (liczba faktur już opłaconych, korzystanie z innych produktów OVHcloud) nasz system ustala kwoty (limity) dla liczby zasobów, które możesz utworzyć, aby uniknąć problemów z brakiem płatności. Domyślnie system automatycznie zwiększa limity, gdy spełnione są określone kryteria. Można jednak [ręcznie zwiększyć kwotę](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota#reczne-zwiekszanie-limitu-zasobow) za pomocą tego narzędzia.<br><br>**Lokalizacje**: Public Cloud jest dostępny w kilku lokalizacjach na świecie. Dodatkowo każda lokalizacja może zawierać kilka "regionów" (pojęcie specyficzne dla OpenStack). Na przykład dla klienta europejskiego strefa APAC (Azja-Pacyfik) jest domyślnie wyłączona. Jeśli Twoje potrzeby są spełnione, możesz aktywować nowe regiony z tego menu.|
|**Klucze SSH**|Narzędzie do zarządzania [kluczami SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).|
|**Płatności**|Public Cloud działający w trybie *pay as you go*, faktury są publikowane pod koniec miesiąca. W [tym menu](/pages/public_cloud/public_cloud_cross_functional/analyze_billing) będziesz mógł śledzić bieżące zużycie zasobów, zobaczyć prognozę kolejnej faktury i oczywiście wyświetlić Twoje poprzednie faktury.|
|**Zasilenia i vouchery**|W tym menu możesz sprawdzić wykorzystanie kuponu, dodać kupon lub [dodać zasilenie](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) bezpośrednio do Twojego projektu Public Cloud.|
|**Savings Plan**| Ten model cenowy umożliwia skorzystanie z rabatów na określone zasoby, jeśli wybierasz umowy na okres do 36 miesięcy.|
|**Kontakty i uprawnienia**|Oprócz możliwości zmiany kontaktu technicznego lub kontaktu rozliczeniowego dla projektu, możesz także [dodać inne kontakty](/pages/public_cloud/compute/change_project_contacts) (konto OVHcloud), aby zarządzać Twoim projektem. Możesz również dodawać użytkowników tylko do wglądu *read-only*.|
|**Parametry projektu**|To ostatnie narzędzie pozwala na skonfigurowanie ogólnych parametrów projektu, takich jak nazwa, konfiguracja jako "domyślny projekt konta", kompatybilność HDS, czy też na [usunięcie projektu Public Cloud](/pages/public_cloud/public_cloud_cross_functional/delete_a_project).|

### Zarządzanie usługami

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2mHcXQC6mTM?si=8_0aQCfBtmumGRbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!primary]
>
> W tej sekcji przedstawiamy przegląd różnych opcji zarządzania usługami proponowanymi przez OVHcloud, z wykorzystaniem trzech głównych narzędzi: Panelu klienta OVHcloud, Horizon i API OpenStack. Każde z tych narzędzi zostało zaprojektowane z myślą o specyficznych potrzebach w zależności od poziomu wiedzy, preferencji w zakresie zarządzania, a także wymagań dotyczących wydajności i personalizacji.
>
> Poniższa macierz porównuje kluczowe cechy każdego narzędzia, aby pomóc Ci wybrać rozwiązanie najlepiej dopasowane do Twoich potrzeb. Niezależnie od tego, czy jesteś początkującym użytkownikiem, zaawansowanym użytkownikiem czy ekspertem w automatyzacji, porównanie to pozwoli Ci lepiej zrozumieć korzyści, łatwość obsługi, wymagany poziom kompetencji i skalowalność każdego narzędzia.
>

| Criteri/Caratteristiche                   | Spazio Cliente OVHcloud | Horizon | OpenStack API |
| ------------------------------------------- | ---------------------- | ------- | ------------- |
| Główne zalety                        | Intuicyjny interfejs idealny do szybkiego uruchomienia. | Oferuje zaawansowaną kontrolę dla zaawansowanych użytkowników z zaawansowanym widokiem ustawień. | Pełna automatyzacja z płynną integracją z innymi narzędziami. |
| Wymagany poziom kompetencji                 | Dostępne dla wszystkich, idealne dla początkujących lub prostych potrzeb | Pośredni, wymaga pewnego doświadczenia (Administratorzy systemów, Inżynierowie Cloud...) | Zaawansowany, wymaga kompetencji w zakresie skryptów/API (Architekci Cloud, Inżynierowie DevOps, Eksperci w dziedzinie automatyzacji) |
| Łatwość obsługi                      | Intuicyjny i łatwo dostępny | Zaawansowane, ale wizualne | Technika |
| Personalizacja                            | Niski - Idealny do standardowych i szybkich konfiguracji z ograniczoną zaawansowaną kontrolą. | Średnia - Interfejs graficzny oferujący zaawansowane ustawienia (sieć, przestrzeń dyskowa, itp.), ale z ograniczeniami interfejsu użytkownika. | Bardzo wysoki - niemal pełna personalizacja za pośrednictwem API, z możliwością tworzenia skryptów, zautomatyzowanych przepływów pracy i specjalnie zaprojektowanej architektury. |
| Wydajność i skalowalność                 | Ograniczona wydajność i skalowalność. Dostosowany do wdrożeń małych i niekrytycznych. Skalowalność jest zwykle ręczna i wolniejsza. Idealny do środowisk statycznych lub małych projektów. | Średnia wydajność z ulepszonym zarządzaniem skalowalnością za pośrednictwem interfejsu graficznego. Skalowalność szybsza niż w przypadku Panelu klienta OVHcloud, ale ograniczona interfejsem. Dostosowany do projektów średniej wielkości lub wymagających skalowalności. | Optymalna wydajność i pełna skalowalność. Umożliwia masowe, zautomatyzowane i szybkie wdrażanie za pomocą skryptów lub narzędzi innych firm. Rozwiązanie idealne do obsługi dynamicznej infrastruktury, dużych obciążeń i środowisk wymagających wysokiej elastyczności. Zalecane w przypadku architektur krytycznych. |
| Zakres użytkowania (Compute)          | - Uproszczone tworzenie i zarządzanie wirtualnymi maszynami (VM).<br> - Zmiana rozmiaru wirtualnych maszyn po ich utworzeniu (zmiana modelu flavor na gorąco lub na zimno, w zależności od dostępnych zasobów).<br> - Wybór standardowych konfiguracji dla VM (RAM, CPU, przestrzeń dyskowa).<br> - Zarządzanie krytycznymi operacjami: uruchamianie, zatrzymywanie i usuwanie wirtualnych maszyn.<br> - Dostęp do snapshotów umożliwiających szybkie tworzenie kopii zapasowych i ułatwione przywracanie.<br> - Przypisywanie adresów Floating IP i zarządzanie nimi.<br> - Podstawowe tworzenie i administrowanie dodatkowymi dyskami.<br> - Nadzór nad zasobami z niezbędnym monitorowaniem (CPU, pamięć, przestrzeń dyskowa). | - Zaawansowane zarządzanie dostępem: obsługa kontroli dostępu opartej na rolach (RBAC) w celu zapewnienia bezpiecznego zarządzania przez wielu użytkowników.<br> - Zaawansowana administracja siecią: tworzenie i zarządzanie prywatnymi sieciami związanymi z wirtualnymi maszynami (sieci wewnętrzne, podsieci).<br> - Wdrażanie wirtualnych maszyn z określonymi konfiguracjami sieciowymi, w tym zarządzanie wieloma interfejsami sieciowymi.<br> - Używanie spersonalizowanych obrazów do tworzenia VM, jako alternatywy dla standardowych obrazów proponowanych przez OVHcloud.<br> - Integracja wstępnie skonfigurowanych przepływów pracy za pośrednictwem interfejsu Horizon do automatyzacji wdrożeń i konfiguracji. | - Pełna automatyzacja: wszystkie operacje dostępne w Panelu klienta OVHcloud i Horizon są wykonalne przez API, z możliwością ich automatyzacji i skryptowania.<br> - Wdrażanie infrastruktur w trybie Infrastructure as Code (IaC) z wykorzystaniem narzędzi, takich jak Terraform, Ansible lub spersonalizowane skrypty.<br> - Integracja z potokami CI/CD dla zautomatyzowanych wdrożeń (np. integracja z GitLab CI).<br> - Zaawansowane zarządzanie limitami zasobów (liczba procesorów, całkowita pamięć RAM, itp.).<br> - Dynamiczna skalowalność: automatyczne dostosowywanie instancji w zależności od obciążenia za pośrednictwem API lub skryptów.<br> - Monitorowanie i gromadzenie niestandardowych metryk za pośrednictwem interfejsu API, oferujących więcej szczegółowości niż interfejs Horizon lub panel klienta OVHcloud. |
| Zakres zastosowania (Network)          | - Tworzenie i zarządzanie prywatnymi sieciami (Private Networks).<br> - Skojarzenie adresów Floating IP i Additional IP.<br> - Podstawowa konfiguracja routingu (Basic Routing). | - Zaawansowane zarządzanie regułami zabezpieczeń za pośrednictwem grup zabezpieczeń (Security Groups).<br> - Wizualizacja topologii sieciowych ułatwiająca zarządzanie.<br> - Kompleksowa obsługa podsieci IPv6 dla nowoczesnej łączności.<br> - Konfiguracja zasad QoS (Quality of Service) w celu ustalania priorytetów zasobów sieciowych. | - Dostęp do wszystkich funkcji dostępnych w interfejsie Horizon i Panelu klienta OVHcloud.<br> - Tworzenie niestandardowych tras zapewniających bardziej elastyczne zarządzanie siecią.<br> - Precyzyjna konfiguracja zasad QoS (Quality of Service).<br> - Zaawansowane zarządzanie protokołem VRRP (Virtual Router Redundancy Protocol) w celu zapewnienia redundancji routerów.<br> - Automatyzacja operacji sieciowych za pomocą skryptów (Infrastructure as Code).<br> - Integracja z rozwiązaniami SDN (Software-Defined Networking) w celu sprawnego zarządzania siecią. |
| Zakres zastosowania (Storage & Backup) | - Tworzenie i zarządzanie wolumenami przestrzeni dyskowej: Object Storage, Block Storage i File Storage.<br> - Automatyczna podstawowa kopia zapasowa wolumenów (snapshoty) z możliwością przywrócenia.<br> - Skojarzenie wolumenów pamięci masowej z instancjami w celu ułatwienia dostępu.<br> - Zarządzanie kontenerami Object Storage (Swift) w celu porządkowania danych.<br> - Wyświetlanie stanu woluminów i używanego miejsca do magazynowania.<br> - Dodawanie i zarządzanie plikami w Object Storage. | - Zaawansowane zarządzanie snapshotami: retencja, duplikacja i inne opcje precyzyjnej kontroli kopii zapasowych.<br> - Szczegółowe zarządzanie udostępnianiem wolumenów (multi-attach) w celu zwiększenia elastyczności.<br> Tworzenie i zarządzanie zaplanowanymi kopiami zapasowymi z personalizowanymi zasadami tworzenia kopii zapasowych.<br> - Monitorowanie wykorzystania przydziału przestrzeni dyskowej w celu optymalnego monitorowania dostępnej przestrzeni. | - Funkcje dostępne w interfejsie Horizon i Panelu klienta OVHcloud.<br> - Integracja i automatyzacja za pomocą skryptów (Infrastructure as Code) dla płynnego zarządzania.<br> - Zaawansowana konfiguracja udziałów sieciowych (NFS, CIFS) zwiększająca elastyczność w organizacji plików.<br> - Zaawansowana konfiguracja udziałów sieciowych (NFS, CIFS) zwiększająca elastyczność w organizacji plików.<br> - Zaawansowana konfiguracja replikacji i wersjonowania obiektów zapewniająca wysoką dostępność i pełne zarządzanie wersjami.<br> - Bezpośredni dostęp do API Swift umożliwiający płynną integrację z narzędziami innych firm.<br> - Tworzenie niestandardowych przepływów pracy do automatyzacji i efektywnego zarządzania procesami tworzenia kopii zapasowych. |

## Sprawdź również

[Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).