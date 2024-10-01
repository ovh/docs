---
title: Enterprise File Storage - Koncepcje
excerpt: "Sprawdź zasady działania oferty Enterprise File Storage"
updated: 2022-04-07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Dzięki Enterprise File Storage możesz korzystać z wolumenów NFS w pełni zarządzanych przez OVHcloud. Z tego przewodnika na temat szybkiego uruchamiania usług Enterprise File Storage dowiesz się, w jaki sposób rozwiązanie to działa.

**Dowiedz się, jak działa oferta Enterprise File Storage.**

## W praktyce

### Enterprise File Storage, czym jest?

Enterprise File Storage to oferta systemu plików zarządzana przez OVHcloud i oparta na rozwiązaniu NetApp&#174; ONTAP.

Możesz zamówić jedną lub kilka przestrzeni dyskowych od 1TB do 58TB na swoim koncie, otrzymując minimalną jednostkę 1 TB.

### Zasada działania usług

Po zamówieniu usługi Enterprise File Storage od 1 do 58 TB za pomocą konta OVHcloud otrzymujesz przestrzeń dyskową NFS.

Konto OVHcloud jest domyślnie kontaktem administracyjnym, technicznym i księgowym dla usługi. Więcej informacji znajdziesz w przewodniku "[Zarządzanie kontaktami dla Twoich usług"](/pages/account_and_service_management/account_information/managing_contacts)".

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Każda usługa może należeć tylko do jednego konta OVHcloud (identyfikator klienta). Kontakty techniczne i księgowe mogą jednak zostać zmienione na rzecz innych kont.
>

### Zasada działania wolumenów

Po zamówieniu usługi Enterprise File Storage, masz do dyspozycji usługę odpowiadającą pojemności przestrzeni dyskowej. W tej usłudze możesz utworzyć jeden lub więcej woluminów. Każdy z nich odpowiada partycji.
<br>Wolumeny te umożliwiają przechowywanie plików i są dostępne w sieci za pośrednictwem adresu IP dostarczonego przez OVHcloud.

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Każdy wolumen należy do usługi, ale usługa może zawierać kilka wolumenów.
>
> - Rozmiar wolumenu nie może przekroczyć całkowitego rozmiaru usługi minus przestrzeń przeznaczona na snapshoty, które zawiera.
>
> - Rozmiar wolumenu jest skalowalny, zarówno w górę, jak i w dół.
>

Więcej informacji na ten temat znajdziesz w przewodniku ["Zarządzanie wolumenami"] (/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes).

### Zasada działania ACL

Ze względów bezpieczeństwa wolumin nie jest natychmiast dostępny swoją ścieżką dostępu. Należy utworzyć reguły na liście kontroli dostępu (ACL) woluminu, aby umożliwić użytkownikom dostęp do tego woluminu.

Reguły te składają się z źródłowego adresu IP Twojej sieci w formacie x.x.x.x/x oraz z typu uprawnień, czyli tylko do odczytu (RO) lub do odczytu/zapisu (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Możesz utworzyć jedną lub więcej reguł dla każdego woluminu.
>

Więcej informacji na ten temat znajdziesz w przewodniku ["Zarządzanie ACL wolumenu"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl).

### Zasada działania snapshotów

Technologia migawek Enterprise File Storage stanowi lokalne rozwiązanie do ochrony danych na tym samym sprzęcie na potrzeby przywracania pojedynczych plików.

Snapshot Enterprise File Storage to zdjęcie wolumenu z konkretnego dnia i godziny.

Tworzenie potrwa kilka sekund, niezależnie od rozmiaru woluminu, używanej pojemności lub poziomu aktywności na woluminie.

Snapshot to kopia metadanych woluminu z danej chwili (zrzut tabeli węzłów).

W przypadku wielu aplikacji dzienne zużycie snapshotów wynosi od 1 do 5% pojemności wolumenu. Dlatego przy każdym utworzeniu wolumenu OVHcloud rezerwuje 5% swojej pojemności na snapshoty tego wolumenu.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Więcej informacji znajdziesz w przewodniku ["Zarządzanie snapshotami wolumenu"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots).

### Ograniczenia Enterprise File Storage

- Dedykowana przestrzeń dyskowa od 1 TB do 58 TB
- Szczegółowość usługi to 1 TB
- Liczba wolumenów na usługę jest ograniczona do 10 wolumenów na TB (np. 50 wolumenów dla usługi 5 TB)

#### Limity wolumenów

- Wolumen nie może przekroczyć rozmiaru 29 TB minus 5% zarezerwowanych dla snapshotów (1.45TB) czyli 27,55 TB
- Minimalny rozmiar wolumenu to 100 GB
    - Rozmiar ziarna dla objętości: 1 GB
    - Maksymalny rozmiar pliku: 16 TB

### Limity kopii zapasowych snapshot

- Wolumen nie może mieć więcej niż 200 snapshotów.
- Maksymalna liczba polityk wykonywania snapshotów na wolumen: 1
- Maksymalna liczba reguł na politykę wykonywania snapshotów: 4

#### Limity ACL

- Wolumen ma adres IP w sieci wewnętrznej OVHcloud wynoszący 10.x.x.x.
- Maksymalna liczba usług vRack (Private Network Service) przypisanych do usługi: 0 (wsparcie dla technologii vRack nie jest jeszcze dostępne)
- Maksymalna liczba logów access list: 1 na wolumen
- Maksymalna liczba IP na listę access: 16 IP na listę access

#### Limity wydajności

- Przepustowość minimalna na TB: brak minimum
- Przepustowość maksymalna na TB: 64 MB/s i 4000 IOPS

### Obliczanie wolumenu

> [!primary]
>
> Jaka jest różnica między Terabyte (TB) i Tebibyte (TiB)?
>
> - T, prefiks "tera-", jest metryką i standardem IT, który używa base-10. Więc 1 TB = 10^12 bajtów = 100000000000 bajtów = 1000 GB.
>
> - Ti, prefiks "Tebi-", został utworzony jako jeden z prefiksów binarnych, które są teraz standardem IEC/ISO i wykorzystują base-2. To oznacza 1024^4=2^40. Więc 1 TiB = 1099511627776 bajtów= 1024 GiB.
>
> - Komputery używają bazy 2, więc ilość przestrzeni dyskowej, którą można zobaczyć w systemie operacyjnym, jest wyrażona w TiB. Dostawcy magazynu zazwyczaj korzystają z TB, ponieważ liczba ta jest większa niż TiB.
>
> - Problem polega na tym, że są one podobne (2,4%) na poziomie KB, ale na poziomie TB różnica wynosi 10%, a wzrost jest wykładniczy.
>
> - **Dla Enterprise File Storage, ponieważ chcemy być z Tobą transparentni, dostarczymy wolumen TiB, nawet jeśli postrzegasz TB jako jednostkę, ponieważ ogół społeczeństwa używa TB.**
>
> - Jeśli zamówisz usługę Enterprise File Storage o rozmiarze 1 TB, w rzeczywistości będziesz dysponował 1 TiB = 1,09951 TB.
>

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
