---
title: Najczęściej zadawane pytania dotyczące technologii NAS-HA
excerpt: Masz pytania dotyczące NAS-HA? Oto odpowiedzi na najczęściej zadawane pytania.
updated: 2024-02-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

**Oto najczęściej zadawane pytania dotyczące oferty NAS-HA OVHcloud.**

## Pytania ogólne

### Czym jest rozwiązanie NAS-HA OVHcloud?

NAS-HA to usługa przechowywania plików współdzielonych i w pełni zarządzanych, oparta na technologii open-source OpenZFS.

### Co mogę zrobić z usługą NAS-HA?

NAS-HA pozwala na scentralizowanie danych z różnych obciążeń związanych z Linuxem oraz Windows w wielu scenariuszach:

- współdzielona i zewnętrzna przestrzeń dyskowa dla aplikacji IT (VM, DB...);
- zarządzanie treściami www; 
- udostępnianie plików w sieci itp.

### Czy można zarządzać usługą NAS-HA za pomocą przestrzeni konfiguracyjnej?

Tak, ta przestrzeń jest dostępna w [Panelu klienta OVHcloud](/links/manager), w rubryce `Bare Metal Cloud`{.action}, następnie `NAS i CDN`{.action}.

## Dostępność

### Jaki SLA jest dostarczany z usługą NAS-HA?

NAS-HA jest dostarczana z dostępnością na poziomie 99,99%.

## Sieć i bezpieczeństwo

### Jakie protokoły do przesyłania plików są aktualnie obsługiwane w rozwiązaniu NAS-HA?

NAS-HA obsługuje przesyłanie plików przez NFS (NFSv3) i CIFS (SMB).

### Z jakich usług mogę hostować dane?

NAS-HA to usługa, która może otrzymywać dane z wszystkich istniejących usług OVHcloud: Bare Metal Cloud (VPS, Serwery dedykowane OVHcloud, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, itp.

### Jak zarządzać dostępami do NAS HA?

Lista kontroli dostępu (ACL) jest konfigurowana w Panelu klienta OVHcloud. Wystarczy wpisać adres IP usługi, dla której chcesz zezwolić na dostęp do NAS-HA.

### Czy usługa NAS-HA jest kompatybilna z innymi serwerami poza infrastrukturą OVHcloud?

Nie, dostęp do usługi NAS-HA jest możliwy tylko z poziomu sieci OVHcloud.

### Czy NAS-HA kwalifikuje się do oferty vRack?

Obecnie NAS-HA nie może być zintegrowany z prywatną siecią vRack. Jednakże korzystanie z NAS-HA i z sieci vRack nie jest niezgodne z prawem, przechodząc przez publiczną ścieżkę IP serwera podłączonego do sieci vRack.

## Wydajność i wydajność

### Jakie są dostępne możliwości przechowywania danych?

Minimalny rozmiar usługi to 3 TB, a maksymalny rozmiar to 144 TB.<br>
Proponujemy następującą przestrzeń dyskową na bazie dysków 3 TB:

- 3 TB
- 6 TB
- 9 TB
- 18 TB
- 36 TB

Proponujemy następującą przestrzeń dyskową na bazie dysków 12 TB:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

Proponowana zdolność magazynowania to zdolność do wykorzystania.

### Czy moje zasoby NAS-HA są dedykowane?

Dyski NAS-HA są dedykowane. Pozostałe zasoby maszyny są współdzielone (RAM, CPU, Przepustowość).

**Szczególne przypadki:** jeśli zamówiłeś ofertę 144 TB, wszystkie zasoby serwera hosta są dedykowane (RAM, CPU, Przepustowość).

### Ile usług NAS-HA mogę utworzyć z konta klienta?

Nie ma limitu liczby usług na konto klienta.

### Jaka jest maksymalna liczba partycji na usługę?

Możesz utworzyć wybraną liczbę partycji. Minimalny rozmiar to 10 GB, a maksymalny rozmiar usługi jest określony przez maksymalny rozmiar usługi.

### Czy poziom transferu i dostępności jest gwarantowany?

- Transfer: przepustowość usługi jest współdzielona. Współczynniki transferu nie mogą być gwarantowane przez OVHcloud.
- Dostępność: dostępność usługi jest gwarantowana i podlega umowie o gwarantowanym poziomie usługi. Szczegóły znajdziesz w szczegółowych warunkach korzystania z usługi.

## Wykorzystanie produktu

### Czy NAS-HA może być podłączony do kilku serwerów jednocześnie?

Tak. Usługa NAS może współdziałać z wieloma usługami OVHcloud.

### Czy można zainstalować system operacyjny na NAS-HA?

Nie, nie można zainstalować systemu operacyjnego w ofercie NAS-HA.

### Czy przydzielona przestrzeń jest podzielona na kategorie?

Tak, konieczne jest utworzenie jednej lub kilku partycji w zależności od korzystania z usługi. Tworzenie partycji nie jest ograniczone.

### Jak zmienić rozmiar przestrzeni dyskowej w usłudze NAS-HA?

W tej chwili nie można dynamicznie modyfikować usługi NAS-HA. Aby zwiększyć lub zmniejszyć zasoby, należy:

1. Zamów nową usługę NAS-HA o pożądanej wydajności, dysponując dwoma usługami NAS-HA: starym i nowym.
2. Przeniesienie danych z naszego przewodnika "[Migracja danych z jednej usługi NAS-HA do innej za pośrednictwem NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_migration)".
3. Rezygnacja ze starego NAS-HA.

## Snapshoty

### Czym są snapshoty?

Snapshoty to obrazy stanu dysku oraz danych przechowywanych w danej chwili. Umożliwiają zaproponowanie pierwszego poziomu kopii zapasowych. Możesz skonfigurować snapshoty i zarządzać nimi w Panelu klienta.

Domyślnie funkcja snapshot jest aktywowana podczas tworzenia partycji. Częstotliwość jest ustawiana na "co godzinę".

### Jaka polityka tworzenia kopii zapasowych jest związana z usługą NAS-HA?

Użytkownicy są odpowiedzialni za zarządzanie kopiami zapasowymi (narzędzia i reguły) wewnątrz i na zewnątrz usługi oraz za planowanie ciągłości działania i przywrócenia działania. Jednak ze względów bezpieczeństwa i odporności infrastruktury OVHcloud może wykonywać snapshoty usługi na zdalnym serwerze, bez konieczności wykonywania żadnych zobowiązań.

W przypadku awarii lub ataku, jeśli OVHcloud wykonał snapshot na zdalnym serwerze, możemy przywrócić dane z ostatniego dostępnego snapshota. Pamiętaj, że operacja ta jest realizowana na zamówienie i stanowi usługę opcjonalną fakturowaną.

### Jak często są wykonywane snapshoty? <a name="frequency"></a>

Częstotliwość kopii zapasowych (snapshot) można zarządzać w Panelu klienta OVHcloud. Możesz wybrać częstotliwość z następujących opcji:

- co godzinę (domyślnie);
- co 6 godzin;
- każdego dnia;
- co dwa dni;
- co trzy dni;
- tygodniowo.

W każdej chwili możesz również tworzyć ręczne snapshoty, przechowywać je bez ograniczeń czasowych lub je usuwać. Funkcja ta jest dostępna w Panelu [klienta OVHcloud](/links/manager) lub za pośrednictwem [następującego wywołania API](https://api.ovh.com/):

> [!api]
>
> @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)", aby zapoznać się z korzystaniem z API OVHcloud.
>

### Jak działa system zarządzania snapshotami?

Możesz skonfigurować automatyczne snapshoty z różnymi dostępnymi częstotliwościami. Bez względu na skonfigurowaną częstotliwość ostatni wykonany snapshot zastąpi poprzedni snapshot. Możesz również tworzyć i usuwać snapshoty na żądanie.

### Czy można usunąć snapshot?

Można usunąć jedynie snapshoty utworzone "na żądanie" (patrz poprzednie pytanie "[Jak często są wykonywane snapshoty?](#frequency)").<br>
Snapshoty o stałej częstotliwości są automatycznie usuwane bez możliwości ich ręcznego usuwania.

### Czy snapshoty są zawarte w usłudze?

W ramach tej samej fizyki przydzielasz dodatkową przestrzeń do przechowywania kopii zapasowych snapshot. Przestrzeń ta odpowiada co najmniej 15 % objętości głównej. W przypadku przekroczenia tej wartości snapshoty będą przechowywane na Twojej głównej przestrzeni dyskowej. Dodatkowa przestrzeń nie może być używana do innych celów niż przechowywanie kopii zapasowych snapshot.

Na przykład, w przypadku usługi 3 TB, dodatkowe 450 GB jest zarezerwowane dla kopii zapasowych snapshot.

### Ile snapshotów mogę wykonać maksymalnie?

- Dla automatycznych snapshotów: jeden na partycję
- W przypadku ręcznych kopii zapasowych: dziesięć na partycję

### Gdzie są przechowywane snapshoty?

Snapshoty są przechowywane na tym samym poziomie, co Twoja usługa. Snapshoty są kopiowane na dwa różne serwery w dwóch różnych konfiguracjach. Dodatkowo OVHcloud wykonuje codzienną kopię zapasową snapshot na zdalnej witrynie.

### Gdzie mogę pobrać moje snapshoty?

W wybranej partycji znajdziesz ukryty katalog o nazwie `.zfs`, który zawiera katalog `snapshots`. Pliki są dostępne w trybie read only.

### Jak wiele polityk snapshotów mogę tworzyć na podstawie wolumenu?

1

## Cennik

### Jaki rodzaj opłat jest przypisany do usługi?

NAS-HA to usługa płatna co miesiąc w zależności od wolumenu (od 3 do 144 TB w odstępach).

### Na jaki czas mogę zamówić usługę NAS-HA?

Proponowane okresy to 1, 12, 24 i 36 miesięcy. Pod koniec okresu abonamentu zostanie automatycznie odnowiony, jeśli nie zostanie złożony [wniosek o rezygnację](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services). Operacja ta może zostać przeprowadzona przez cały okres abonamentu w Panelu klienta.

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
