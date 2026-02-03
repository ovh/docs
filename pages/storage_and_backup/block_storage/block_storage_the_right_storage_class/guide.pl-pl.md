---
title: Wybór odpowiedniej klasy Block Storage
excerpt: Dowiedz się, jak wybrać odpowiednią klasę OVHcloud Block Storage. Porównaj wydajność, ceny i przypadki użycia, aby zoptymalizować swoje magazynowanie pod kątem kosztu i wydajności.
updated: 2025-12-15
---

## Wprowadzenie

Ten przewodnik pomoże Ci zrozumieć różne klasy OVHcloud Block Storage i wybrać tę, która najlepiej odpowiada Twoim potrzebom. Nauczysz się o poziomach wydajności, aspektach cenowych i zalecanych przypadkach użycia, aby podejmować świadome decyzje dotyczące magazynowania.

## Omówienie Block Storage

Block Storage to wysokowydajne, elastyczne i niezawodne rozwiązanie do krytycznych obciążeń. Dołączaj woluminy bezpośrednio do swoich instancji, skaluj pojemność od 10 GB do 12 TB i wybierz odpowiednią klasę: Regional Classic, Classic lub High Speed, aby dopasować ją do swoich potrzeb dotyczących wydajności i dostępności. Idealne do baz danych, maszyn wirtualnych i aplikacji konteneryzowanych, z funkcjami takimi jak zrzuty ekranu, kopie zapasowe i szyfrowanie.

## Klasy Block Storage

Nasze **klasy Block Storage** zostały zaprojektowane, aby spełniać różne wymagania dotyczące Twoich obciążeń, w tym wydajność, dostępność i odporność. Wybierz odpowiednią klasę, aby zoptymalizować prędkość, nadmiarowość i koszty dla Twoich aplikacji.

### Regional Classic Volume

Klasa **Regional Classic Volume** zapewnia wysoką dostępność, automatycznie replikując dane w trzech strefach dostępności w obrębie regionu (3-AZ). Woluminy są wspierane przez magazyn NVMe over Fabric, zapewniając szybki, spójny i niezawodny dostęp.

Aby zapewnić ciągłość usług nawet w przypadku awarii strefy dostępności, ta klasa obsługuje również [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations), pozwalając wielu instancjom położonym w różnych strefach dostępności jednoczesne dołączanie i korzystanie z tego samego woluminu.

Ta klasa jest odpowiednia dla obciążeń wymagających wysokiej dostępności i odporności, takich jak krytyczne bazy danych i aplikacje rozproszone.

### Classic Volume

Klasa **Classic Volume** jest idealna do codziennych potrzeb aplikacji, w tym baz danych, maszyn wirtualnych i kopii zapasowych. Dane są replikowane w obrębie jednej strefy dostępności (1-AZ) lub Local Zone, z gwarantowaną wydajnością NVMe.

Ta klasa jest odpowiednia dla standardowych obciążeń, w których ważna jest niska opóźnienie i niezawodność, ale nie jest wymagana replikacja w wielu strefach.

### High Speed Volume

Klasa **High Speed Volume** występuje w dwóch generacjach, oferując różne profile wydajności:

- Gen 1: Do 3000 IOPS i 128 MB/s – odpowiednia do ogólnych obciążeń wysokiej wydajności.
- Gen 2: 30 IOPS/GB (maks. 20000 IOPS) i 0,5 MB/s na GB (maks. 512 MB/s) – zalecana do intensywnych aplikacji wymagających maksymalnego I/O i przepustowości.

Wybierz Gen 1 dla standardowych przypadków użycia wysokiej wydajności, a Gen 2 dla ciężkich obciążeń, takich jak analizy, duże bazy danych lub wysokowydajne obliczenia.

### Tabela porównawcza

| Klasa magazynowania | Przypadki użycia | Wydajność | Obsługiwane regiony | SLA dostępności | Replikacja | Uwagi |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Obciążenia wysokiej wydajności, analizy, duże bazy danych | **Gen 1**: Do 3000 IOPS, 128 MB/s <br><br> **Gen 2**: 30 IOPS/GB (maks. 20000 IOPS), 0,5 MB/s na GB (maks. 512 MB/s) | 3-AZ, 1-AZ, Local Zones | 99,9% | Zonalna | Zoptymalizowane NVMe, skalowalna wydajność |
| **Regional Classic Volume** | Krytyczne aplikacje, systemy rozproszone | 500 IOPS gwarantowanych, 64 MB/s | 3-AZ | 99,99% | Wielostrefowa | NVMe over Fabric, wysoka dostępność |
| **Classic Volume** | Codzienne obciążenia, maszyny wirtualne, kopie zapasowe | 500 IOPS gwarantowanych, 64 MB/s | 1-AZ, Local Zones | 99,9% | Zonalna | NVMe over Fabric, standardowa wydajność |

### Dodatkowe szczegóły

#### Minimalny czas magazynowania

Dla Block Storage nie ma minimalnego czasu magazynowania: możesz dołączać lub usuwać woluminy w dowolnym momencie bez dodatkowych opłat. Płatność dotyczy tylko rzeczywistego użycia woluminu w okresie jego istnienia.

#### Opłaty za kopie zapasowe i zrzuty ekranu

Podczas gdy standardowe użycie woluminu jest opłacane za GB/miesiąc, [snapshots](/pages/public_cloud/compute/creating_a_volume_snapshot) przechowywane na **Block Storage** i [kopie zapasowe](/pages/public_cloud/compute/volume-backup) przechowywane na **Object Storage** mogą generować dodatkowe koszty magazynowania. Zrzuty ekranu pozwalają przechwycić stan woluminu w danym momencie, a kopie zapasowe umożliwiają ochronę danych i ich odzyskanie.

#### Cykl życia i zmiana rozmiaru

Woluminy Block Storage są całkowicie elastyczne: możesz [zwiększyć ich rozmiar](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) w dowolnym momencie, rozszerzyć partycje i dołączać woluminy do różnych instancji. Te operacje są przeprowadzane na poziomie woluminu, pozwalając zoptymalizować pojemność i wydajność magazynowania bez przestojów.

#### Zaszyfrowane woluminy

Każdy typ woluminu Block Storage jest również dostępny w wersji zaszyfrowanej (LUKS), w zależności od regionu. Te zaszyfrowane wersje zapewniają poufność danych bez wpływu na wydajność.

> [!primary]
> Uwaga: Klasa woluminów Regional Classic i woluminy w Local Zones nie obsługują szyfrowania LUKS.

Zaszyfrowane woluminy można tworzyć bezpośrednio z Panelu klienta OVHcloud lub za pomocą narzędzi CLI/API, określając typ woluminu z sufiksem `-luks` (np. classic-luks lub highspeed-luks). Zapewnia to łatwy i bezpieczny sposób ochrony wrażliwych danych, jednocześnie korzystając z tej samej wydajności i funkcji co woluminy standardowe.

> [!primary]
> Zaszyfrowane woluminy nie mają wpływu na wydajność.

## Przypadki użycia

Block Storage obsługuje szeroką gamę obciążeń dzięki swojej wydajności, elastyczności i odporności. Typowe przypadki użycia obejmują:

- **Bazy danych**: MySQL, PostgreSQL i inne relacyjne bazy danych korzystają z niskiego opóźnienia i wysokiej przepustowości.
- **Maszyny wirtualne i aplikacje konteneryzowane**: Magazynowanie trwałe dla maszyn wirtualnych i kontenerów z wysoką niezawodnością i szybkim dostęp.
- **Obciążenia analityczne i AI**: High Speed Volumes zapewniają maksymalne IOPS i przepustowość dla aplikacji intensywnie korzystających z danych.
- **Kopie zapasowe i odzyskiwanie po awarii**: Łatwe tworzenie zrzutów ekranu i kopii zapasowych dla krytycznych danych, zapewniając szybkie odzyskiwanie i ochronę.

## Uwagi dotyczące stref i regionów

Woluminy Block Storage mogą być wdrażane z różnymi opcjami dostępności w zależności od Twoich wymagań:

- **Regional Classic Volume (3-AZ)**: Dane są replikowane w trzech strefach dostępności w obrębie tego samego regionu, zapewniając wysoką odporność i SLA 99,99%. Idealne dla krytycznych, wysoko dostępnych aplikacji. Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Prawidłowe użycie i ograniczenia Classic Multi Attach Block Storage w regionach 3AZ (EN)](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic i High Speed Volume (1-AZ lub Local Zones)**: Dane są replikowane w obrębie jednej strefy. Te opcje zapewniają niskie opóźnienie i wysoką wydajność, odpowiednie dla obciążeń, które nie wymagają nadmiarowości w wielu strefach.
- **Local Zones**: Dla aplikacji wymagających ultra-niskiego opóźnienia w konkretnej lokalizacji geograficznej, Local Zones pozwalają zachować magazyn blisko zasobów obliczeniowych.

> [!success]
> Wybór odpowiedniej opcji wdrażania zapewnia optymalną wydajność, nadmiarowość i efektywność kosztową w zależności od Twojego obciążenia i wymagań geograficznych.

## Sprawdź również

[Zarządzanie wolumenem instancji Public Cloud](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Zmień wolumen Block Storage](/pages/public_cloud/compute/switch_volume_type)

Jeśli potrzebujesz szkoleń lub pomocy technicznej w wdrożeniu naszych rozwiązań, skontaktuj się ze swoim przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i zażądać indywidualnej analizy Twojego projektu od zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).