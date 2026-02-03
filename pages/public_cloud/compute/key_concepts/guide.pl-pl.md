---
title: 'Public Cloud Instancje - Podstawowe pojęcia'
excerpt: 'Dowiedz się podstaw Public Cloud Compute: jak działają instancje, dostępne rodziny i rozmiary, wdrożenia wielozonowe, zarządzanie obrazami, bezpieczeństwo SSH, mechanizmy kopii zapasowych, sieci publiczne/prywatne oraz korzyści z Savings Plans.'
updated: 2025-12-05
---

## Wprowadzenie

Ten przewodnik ma na celu dostarczenie Ci jasnego zrozumienia podstawowych pojęć niezbędnych do tworzenia, konfigurowania i zarządzania pierwszymi instancjami OVHcloud Public Cloud Compute. Dowiesz się, jak działają instancje, jak wybrać odpowiedni typ instancji, oraz jak główne elementy takie jak obrazy, strefy dostępności, sieci, bezpieczeństwo i kopie zapasowe współdziałają w ekosystemie OVHcloud.

## Co to jest instancja (maszyna wirtualna)?

Instancja, czyli maszyna wirtualna (VM), to całkowicie izolowany serwer działający na udostępnionej infrastrukturze fizycznej OVHcloud. Działa jak tradycyjny serwer, ale oferuje elastyczność i skalowalność chmury. Wybierasz system operacyjny, definiujesz zasoby CPU, RAM i magazynu, a następnie wdrażasz swoje aplikacje, strony internetowe lub środowiska programistyczne.

Instancje Public Cloud Compute oferują:

- Tworzenie na żądanie i elastyczne dostosowanie rozmiaru – skaluj zasoby w górę lub w dół zgodnie z potrzebami.
- Opłatę za rzeczywiste użycie – rozliczane godzinowo lub miesięcznie na podstawie rzeczywistego wykorzystania.
- Płynną integrację z usługami OVHcloud – w tym Object Storage, Sieć, Kopia zapasowa i wiele innych.

Instancje można zarządzać za pomocą Panelu klienta OVHcloud, interfejsu Horizon, punktów końcowych API lub za pomocą narzędzi automatyzacji i orchestracji, takich jak OVHcloud CLI i Terraform.

## Typy instancji

OVHcloud oferuje wiele rodziny instancji zaprojektowanych w celu spełnienia różnych wymagań dotyczących obciążenia. Każda rodzina oferuje zakres rozmiarów (flavorów), aby dokładnie dopasować potrzeby zasobowe.

| Typy instancji | Opis | Typowe przypadki użycia |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General Purpose | Zrównoważone CPU i pamięć | Nadaje się do serwerów deweloperskich, aplikacji internetowych i ogólnych obciążeń biznesowych. Zapewnia zrównoważony stosunek CPU do RAM. |
| CPU Optimized | Wysoka wydajność procesora | Idealne dla aplikacji intensywnie obliczeniowych, zadań przetwarzania równoległego, potoków CI/CD lub mikroserwisów wymagających wysokiej częstotliwości CPU. |
| Memory Optimized | Duża pojemność pamięci | Dostosowane do analizy danych, dużych obciążeń danych i buforowania baz danych. Zapewnia wysokie stosunki RAM do CPU i przyspieszone IOPS. vCores są zegarowane z częstotliwością 2 GHz lub wyższą. |
| Storage Optimized | Wysoka wydajność IOPS | Wyposaży w magazyn NVMe, zapewniając ultra szybkie operacje wejścia/wyjścia z dysku, idealne do baz danych i dużych aplikacji danych. |
| GPU | Grafika przyspieszona sprzętowo | Oferuje wyjątkową wydajność obliczeń równoległych, nawet do 1000 razy szybszą niż CPU dla niektórych obciążeń. Nadaje się do AI, uczenia głębokiego i renderowania 3D. |
| Discovery | Niskie koszty, udostępnione zasoby | Instancje wstępne z udostępnionymi zasobami, oferujące stabilną wydajność po atrakcyjnej cenie. Idealne do środowisk testowych, szkoleń lub projektów dowodowych. |

Każda rodzina instancji zawiera wiele rozmiarów (flavorów), które pomagają dopasować instancję do konkretnych potrzeb zasobowych Twojej aplikacji.

## Lokalizacja i strefy dostępności

Instancje OVHcloud Compute są wdrażane w [wielu centrach danych na całym świecie](/links/infrareg), zapewniając wysoką dostępność i bliskość użytkowników. Przykłady regionów obejmują:

- GRA – Gravelines, Francja
- BHS – Beauharnois, Kanada
- DE – Frankfurt, Niemcy

**Typy stref dostępności:**

| Typy stref | Opis | Zalecane zastosowanie |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | Instancje są wdrażane w jednej strefie. | Proste środowiska, środowiska deweloperskie, testowe lub niekrytyczne obciążenia. |
| 3-AZ (Triple Availability Zone) | Instancje są dystrybuowane w trzech nadmiarowych strefach w obrębie tego samego regionu. | Obciążenia produkcyjne wymagające wysokiej dostępności i odporności na awarie. |
| Local Zones | Lokalizacje krawędziowe bliżej użytkowników końcowych, aby zredukować opóźnienia. | Aplikacje wrażliwe na opóźnienia, takie jak przetwarzanie danych w czasie rzeczywistym, gry komputerowe lub interaktywne usługi internetowe. |

> [!primary]
> 
> **Najlepsze praktyki**: Dla krytycznych obciążeń zaleca się wdrożenie [wielostrefowe](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture), aby zapewnić odporność usługi i ciągłość działania.
>

## Dostępne obrazy systemowe

Podczas tworzenia instancji wybierasz obraz zawierający system operacyjny i opcjonalnie wstępnie zainstalowane aplikacje. OVHcloud oferuje różnorodne obrazy, aby spełnić różne potrzeby:

- **Dystrybucje Linux**: Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux i inne. Te obrazy są gotowe do użycia dla serwerów internetowych, środowisk deweloperskich i ogólnych obciążeń.
- **Windows Server**: Wersje z wbudowanymi licencjami, umożliwiającymi natychmiastowe wdrożenie aplikacji Microsoft i obciążeń przedsiębiorstwa.
- **Wstępnie skonfigurowane aplikacje**: Obrazy z wstępnie zainstalowanym oprogramowaniem, takim jak cPanel, Plesk, Docker lub NVIDIA GPU Cloud (NGC). Ułatwiają one wdrożenie i przyspieszają czas wdrożenia.
- **[Własne obrazy](/pages/public_cloud/compute/upload_own_image)**: Możesz zaimportować własne obrazy w formacie QCOW2 lub RAW, zapewniając pełną kontrolę nad swoim środowiskiem i umożliwiając migracje, standardowe szablony lub specjalistyczne konfiguracje.

**Cykl życia i wsparcie**: OVHcloud regularnie aktualizuje katalog obrazów. Zawsze sprawdzaj ogłoszenia dotyczące cyklu życia i końca wsparcia, aby upewnić się, że Twoje obrazy są bezpieczne i wspierane. Zobacz [tutaj](/pages/public_cloud/compute/image-life-cycle).

## Klucze SSH

Klucze SSH zapewniają bezpieczny sposób uzyskiwania dostępu do instancji bez użycia haseł. Składają się z dwóch elementów:

- **Klucz publiczny**: Zainstalowany na instancji, aby umożliwić dostęp.
- **Klucz prywatny**: Bezpiecznie przechowywany na Twoim komputerze lokalnym i używany do uwierzytelnienia połączenia.

Uwierzytelnianie SSH zapewnia szyfrowany i niezawodny dostęp do Twoich serwerów.

Najlepsze praktyki:

- Nigdy nie udostępniaj swojego klucza prywatnego.
- Używaj unikalnego klucza dla każdego użytkownika.
- Przechowuj swoje klucze w bezpiecznym menedżerze lub skarbcu.

Aby uzyskać szczegółowe instrukcje dotyczące tworzenia i używania kluczy SSH, odwiedź [przewodnik SSH OVHcloud](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Kopia zapasowa

Kopie zapasowe chronią Twoje dane i konfiguracje przed przypadkową utratą lub błędami. OVHcloud oferuje kilka mechanizmów kopii zapasowych, aby zapewnić, że Twoje instancje i dane pozostają bezpieczne:

- **Typy kopii zapasowych:**
    - Ręczne kopie zapasowe: Wykonaj migawkę dysku w dowolnym momencie.
    - Automatyczne kopie zapasowe: Tworzone są w regularnych odstępach czasu.
    - Tworzenie i przywracanie instancji: Wdróż nową instancję bezpośrednio z istniejącej kopii zapasowej.
- **Lokalizacje kopii zapasowych:**
    - Lokalna kopia zapasowa: Przechowywana w tym samym regionie co Twoja instancja.
    - Kopia zapasowa zdalna: Automatycznie tworzona kopia lokalnej kopii zapasowej w wybranym przez Ciebie innym regionie.

> [!primary]
>
> **Najlepsze praktyki**: Kopia zapasowa nie zastępuje [odporności architektury](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). Dla krytycznych środowisk połącz kopie zapasowe z replikacją wielostrefową, aby zapewnić maksymalne ochronę danych i dostępność usługi.
>

## Sieci publiczne i prywatne

Instancje OVHcloud Compute mogą być podłączone do różnych typów sieci w zależności od potrzeb Twojej aplikacji.

| Typy sieci | Opis | Przypadki użycia |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Sieć publiczna | Instancje są podłączone do Internetu za pomocą publicznego adresu IP. | Gospodarowanie witrynami internetowymi, API lub udostępnianie zdalnego dostępu do Twoich serwerów. |
| Sieć prywatna (vRack) | Prywatna interkoneksja między Twoimi zasobami OVHcloud, izolowana od Internetu publicznego. | Łączenie baz danych, usług backendowych lub komunikacji wewnętrznego między instancjami. |

vRack umożliwia utworzenie bezpiecznej, izolowanej sieci, nawet w różnych regionach lub projektach.

**Przykład**: Hostuj bazę danych na prywatnej sieci, jednocześnie udostępniając tylko serwer WWW na sieci publicznej.

Aby uzyskać bardziej szczegółowe wskazówki dotyczące konfigurowania sieci Public Cloud, odwiedź oficjalny [przewodnik OVHcloud dotyczący sieci](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Savings Plans pozwalają Ci obniżyć koszty Public Cloud Compute w zamian za zobowiązanie się do spójnego użycia przez określony czas od 1 miesiąca do 3 lat.

**Główne korzyści:**

- **Niższe koszty**: Więcej opłacalne niż rozliczanie za rzeczywiste użycie.
- **Automatyczne stosowanie**: Zyski są automatycznie stosowane do wszystkich kompatybilnych instancji.
- **Elastyczne**: Możesz zmieniać typy lub rozmiary instancji, zachowując korzyści z planu.

**Idealne przypadki użycia:**

- Stabilne i przewidywalne obciążenia, takie jak aplikacje produkcyjne lub serwery biznesowe.
- Usługi z spójnymi wymaganiami zasobowymi, które korzystają z optymalizacji kosztów.

Savings Plans pomagają Ci zoptymalizować budżet, jednocześnie zachowując wydajność i niezawodność Twojego środowiska chmurowego. Aby uzyskać więcej szczegółów, odwiedź oficjalny [przewodnik OVHcloud dotyczący Savings Plans](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Sprawdź również

Po zapoznaniu się z podstawowymi pojęciami Public Cloud Compute OVHcloud możesz zająć się bardziej zaawansowanymi operacjami i zadaniami zarządzania.

- [Jak utworzyć instancję Public Cloud i połączyć się z nią](/pages/public_cloud/compute/public-cloud-first-steps)
- [Zarządzanie instancjami Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)
- [Uruchamianie instancji na wolumenie startowym](/pages/public_cloud/compute/start_instance_on_attached_volume)
- [Wstrzymywanie lub zawieszanie instancji](/pages/public_cloud/compute/suspend_or_pause_an_instance)
- [Pierwsze kroki z wstępnie zainstalowanymi aplikacjami](/pages/public_cloud/compute/apps_first_steps)
- [Dodawanie kredytu chmurowego](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Dołącz do [grona naszych użytkowników](/links/community).