---
title: Enterprise File Storage - Koncepcje
slug: netapp/concepts
excerpt: "Sprawdź zasady działania oferty Enterprise File Storage"
section: Enterprise File Storage
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 27-10-2021**

## Wprowadzenie

Oferta OVHcloud Enterprise File Storage pozwala na zamawianie pul pojemności i na zarządzanie w ten sposób wolumenami plików dostępnymi w sieci.
W tym przewodniku po szybkim uruchomieniu zapoznaj się z pojęciami odnoszącymi się do Twojej oferty Enterprise File Storage oraz limitami oferty.

**Dowiedz się, jak działa oferta Enterprise File Storage.**

## W praktyce

### Enterprise File Storage, co to jest?

Enterprise File Storage to oferta systemu plików zarządzana przez OVHcloud i oparta na rozwiązaniu NetApp&#174; ONTAP Software-Defined Storage.

Możesz zamówić jedną lub kilka przestrzeni dyskowych między 1TiB i 29TiB na Twoim koncie.

> [!primary]
>
> Czym różni się Terabyte (TB) od Tebibyte (TiB)?
>
> - T, prefiks "tera-", to metryka i standard IT, który wykorzystuje bazę danych 10. 1 TB = 10^12 bytes = 1000000000000 bytes = 1000 GB.
>
> - Ti, prefiks "Tebi-", został utworzony później jako jeden z prefiksów binarnych, które są obecnie standardem IEC/ISO i używa bazy-2. To oznacza 1024 do potęgi 4 = 2 do potęgi 40. 1 TiB = 1099511627776 bytes = 1024 GiB.
>
> - Komputery używają bazy danych 2, więc ilość przestrzeni dyskowej, którą można zobaczyć w systemie operacyjnym jest wyrażona w TiB. Dostawcy przestrzeni dyskowej mają tendencję do korzystania z TB, ponieważ jest to większa liczba niż TiB.
>
> - Problem w tym, że są one podobne (2,4%) na poziomie KB, ale na poziomie TB, różnica 10% i wzrost jest wykładniczy.
>
> - Dla Enterprise File Storage, ponieważ chcemy być z Tobą transparentni, dostarczymy TiB wolumen nawet jeśli TB będzie dla Ciebie jednostką, ponieważ ogół społeczeństwa używa TB.
>
> - Jeśli zamawiasz usługę Enterprise File Storage o rozmiarze 1 TB, w rzeczywistości dysponujesz 1 TiB = 1,09951 TB.
>

### Zasada działania puli

Po zamówieniu usługi Enterprise File Storage od 1 do 29 TB za pośrednictwem konta OVHcloud otrzymujesz pojemność NetApp&#174;.

Konto OVHcloud jest domyślnie kontaktem administracyjnym, technicznym i księgowym dla usługi. Więcej informacji znajdziesz w naszym przewodniku ["Zarządzanie kontaktami swoich usług"](https://docs.ovh.com/pl/customer/zarzadzanie_kontaktami/).

![Enterprise File Storage 1](images/Netapp_Concept_1.PNG)

> [!primary]
>
> Każda pula zasobów może należeć wyłącznie do jednego konta OVHcloud (NIC-handle). Kontakty techniczne i księgowe mogą być jednak zmieniane na inne konta.
>

### Zasada działania wolumenów

Po uruchomieniu usługi Enterprise File Storage możesz utworzyć jeden lub kilka wolumenów w ramach puli zasobów.
<br>Wolumeny te umożliwiają przechowywanie plików i są dostępne w sieci za pośrednictwem adresu IP dostarczonego przez OVHcloud.
<br>Tworzenie wolumenu automatycznie uruchamia tworzenie głównej ścieżki dostępu oraz trzech dodatkowych ścieżek dostępu.

![Enterprise File Storage 2](images/Netapp_Concept_2.PNG)

> [!primary]
>
> - Każdy wolumen należy do jednej puli pojemności, ale pula pojemnościowa może zawierać kilka woluminów.
>
> - Rozmiar wolumenu nie może przekroczyć całkowitej wielkości puli przestrzeni minus przestrzeń przeznaczona na zawarte w niej snapshoty.
>
> - Wielkość wolumenu jest skalowalna, zarówno w górę, jak i w dół.
>

Więcej informacji znajdziesz w przewodniku ["Zarządzanie wolumenami"](https://docs.ovh.com/pl/storage/file-storage/netapp/volumes/).

### Zasada działania właściwych organów

Ze względów bezpieczeństwa wolumen nie jest natychmiast dostępny poprzez jego ścieżkę dostępu. Należy utworzyć reguły na liście kontroli dostępu (ACL) wolumenu, aby umożliwić użytkownikom dostęp do tej listy.

Reguły te składają się z adresu IP źródłowego Twojej sieci w formacie x.x.x/x oraz z jednego typu uprawnień, odczytu lub zapisu (RO).

![Enterprise File Storage 3](images/Netapp_Concept_3.PNG)

> [!primary]
>
> Możesz utworzyć jedną lub kilka reguł na wolumen.
>

Więcej informacji znajdziesz w przewodniku ["Zarządzanie ACL wolumenu"](https://docs.ovh.com/pl/storage/file-storage/netapp/volume-acl/).

### Zasada działania snapshotów

Technologia snapshotów Enterprise File Storage zapewnia lokalne rozwiązanie ochrony danych na tym samym urządzeniu do przywracania unikalnych plików.

Snapshot Enterprise File Storage to obraz wolumenu z określonej daty i godziny.

Tworzenie trwa kilka sekund, bez względu na wielkość wolumenu, wykorzystaną pojemność lub poziom aktywności na woluminie.

Snapshot jest kopią metadanych wolumenu w danej chwili (zrzut tabeli inodes).

Zobserwowane dzienne zużycie snapshotów to od 1 do 5% pojemności wolumenu dla wielu aplikacji. W związku z tym, przy każdym utworzeniu wolumenu, OVHcloud rezerwuje 5% swojej pojemności na snapshoty wolumenu.

![Enterprise File Storage 4](images/Netapp_Concept_4.PNG)

Więcej informacji znajdziesz w przewodniku ["Zarządzanie snapshotami wolumenu"](https://docs.ovh.com/pl/storage/file-storage/netapp/volume-snapshots/).

### Ograniczenia oferty Enterprise File Storage dla fazy testów zewnętrznych (Beta)

Poniżej znajdziesz limity pojemności puli Enterprise File Storage:

- Rozmiar puli zasobów jest przypisany i dedykowany między 1TiB i 29TiB.
- Pojemność puli jest ograniczona do 20 wolumenów na TiB.

Poniżej znajdują się limity woluminów:

- Wolumen nie może przekroczyć 29TiB minus 5% zarezerwowane dla snapshotów (1.45TiB), czyli 27,55 TiB.
- Minimalny rozmiar woluminu to 1GiB.
- Wolumen nie może mieć więcej niż 255 snapshotów.
- Wolumen ma adres IP w sieci wewnętrznej 10.x.x.x OVHcloud.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
