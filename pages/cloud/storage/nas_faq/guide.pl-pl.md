---
title: Najczęściej zadawane pytania dotyczące technologii NAS
slug: faq-nas
excerpt: Masz pytania dotyczące NAS? Oto odpowiedzi na najczęściej zadawane pytania.
section: NAS
---

**Ostatnia aktualizacja dnia 2018-01-15**

## Oferta

### Co przy zakupie rozwiązania NAS w OVH oznacza skrót HA?
Skrót HA (High Availability) oznacza usługę wysokiej dostępności, czyli taką, w przypadku której OVH zobowiązuje się do zagwarantowania wyższej dostępności usługi. Gwarancję tę zapewnia umowa SLA (Service Level Agreements) zobowiązująca firmę OVH do przyznania rekompensaty klientom w przypadku zdarzeń powodujących niedostępność tej usługi.

### W którym data center mogę wykupić NAS-HA?
NAS-HA oferują centra danych zlokalizowane na terenie Francji (Roubaix, Strasbourg, Gravelines) oraz w Kanadzie (Beauharnois). Wyboru data center dokonuje się podczas zakupu. UWAGA: po zakupie zmiana lokalizacji jest niemożliwa.

### Czy można zarządzać NAS-HA przez Panel klienta?
Tak, opcje zarządzania usługą są dostępne w Twoim [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w rubryce `Cloud`{.action} i `Platformy i usługi`{.action}.

### Czy jest możliwość zwiększenia miejsca na usłudze NAS?
Po zakupie nie ma możliwości zwiększenia pojemności NAS. W celu zwiększenia przestrzeni dyskowej należy przenieść dane na drugi NAS o większym rozmiarze.

### Jakie są dostępne pojemności przestrzeni dyskowej?
Oferujemy następujące przestrzenie dyskowe:

- 1,2 TB (1,1 TB przestrzeni użytkowej);
- 2,4 TB (2,2 TB przestrzeni użytkowej);
- 3,6 TB (3,2 TB przestrzeni użytkowej);
- 7,2 TB (6,4 TB przestrzeni użytkowej);
- 13,2 TB (10 TB przestrzeni użytkowej);
- 19,2 TB (17 TB przestrzeni użytkowej);
- 26,4 TB (24 TB przestrzeni użytkowej).

Wszystkie składają się z dedykowanych dysków o pojemności 1,2 TB.

### Czy usługa NAS-HA jest w pełni dedykowana?
Dyski NAS-HA są dedykowane. Inne zasoby maszyny są wspólne (RAM, CPU, przepustowość).

**Przypadek szczególny:** przy zakupie oferty 26,4 TB wszystkie zasoby serwera hostingowego są dedykowane (RAM, CPU, przepustowość).

### Na jaki okres mogę wykupić NAS-HA?
Oferowane okresy to: 1, 3, 6 i 12 miesięcy. W przypadku braku złożenia wniosku o rozwiązanie umowy, po zakończeniu okresu rozliczeniowego subskrypcja jest przedłużana automatycznie. Wniosek można złożyć przez [Panel klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w trakcie całego okresu obowiązywania umowy.

### Czy do dyspozycji jest pojemność wyświetlana przy zakupie?
Tak jak w większości rozwiązań stosowanych przy przestrzeniach dyskowych, pojemność teoretyczna nieznacznie różni się od rzeczywistej pojemności użytkowej, ponieważ część zarezerwowana jest dla elementów zapewniających właściwe działanie dysku:

- NAS-HA 1,2 TB ma 1,1 TB przestrzeni użytkowej;
- NAS-HA 2,4 TB ma 2,2 TB przestrzeni użytkowej;
- NAS-HA 3,6 TB ma 3,2 TB przestrzeni użytkowej;
- NAS-HA 7,2 TB ma 6,4 TB przestrzeni użytkowej;
- NAS-HA 13,2 TB ma 10 TB przestrzeni użytkowej;
- NAS-HA 19,2 TB ma 17 TB przestrzeni użytkowej;
- NAS-HA  26,4 TB ma 24 TB przestrzeni użytkowej.

Należy podkreślić, że dane te są orientacyjne i mogą się nieznacznie różnić.

## Użytkowanie produktu

### Kiedy korzystać z NAS-HA? Jakie są przykłady zastosowania tego rozwiązania?

W infrastrukturze, oferta NAS-HA to przestrzeń dyskowa, do której można podłączyć kilka [serwerów dedykowanych](https://www.ovh.pl/serwery_dedykowane/){.external}, [Private Cloud](https://www.ovh.pl/private-cloud/){.external} lub [instancji Public Cloud](https://www.ovh.pl/public-cloud/instances/){.external}.

Przykładów zastosowania jest wiele, jednak wysoka dostępność usługi NAS OVH jest szczególnie doceniana w następujących przypadkach:

- przechowywanie niezbyt często wykorzystywanych danych, czyli takich, które nie generują dużego ruchu, ale muszą być stale dostępne (dokumentacja prawna, instrukcje obsługi i użytkowania itp.).
- przechowywanie danych „statycznych” czyli takich, które nie wymagają regularnego zapisywania zmian. Umożliwia to zwolnienie miejsca w infrastrukturze dla często modyfikowanych danych lub danych wymagających dużej mocy obliczeniowej (bazy danych, aplikacje biznesowe itp.);
- rozwiązanie Hot Backup: wysoka dostępność usługi NAS zapewnia dostęp do danych w każdej chwili, co umożliwia wgląd (lub przekierowanie) do plików, które są niedostępne lub uszkodzone.

### W jakich przypadkach lepiej korzystać z NAS-HA niż z Backup Storage?
NAS-HA i Backup Storage służą odmiennym celom. Zalecamy korzystanie z NAS do przechowywania danych statycznych, do których wymagany jest stały dostęp. Natomiast Backup Storage jest kopią zapasową rzadziej wykorzystywanych danych.

Z technicznego punktu widzenia, główne różnice to:

- dane w NAS-HA są przechowywane na dyskach dedykowanych, natomiast przestrzeń w Backup Storage jest współdzielone;
- NAS-HA to przestrzeń na dysku na innym serwerze, wykorzystującym protokoły transferu plików NFS i CIFS. Natomiast Backup Storage to oddzielna przestrzeń dostępna przez protokół FTP.

### Czy dostępne są funkcje synchronizacji (Type Synology)?
Nie, NAS-HA jest stworzony wyłącznie jako system plików bezpośrednio w danej dystrybucji. Konfiguracji procesów synchronizacji może jednak dokonać administrator danej przestrzeni.

### Czy NAS-HA może być podłączony do kilku serwerów jednocześnie?
Tak, NAS może współpracować jednocześnie z wieloma usługami OVH.

### Czy na NAS-HA można zainstalować system operacyjny?
Nie, na NAS-HA nie ma możliwości zainstalowania systemu operacyjnego.

### Jakie protokoły są zgodne z NAS-HA?
NAS-HA może być zainstalowany na serwerze Windows lub Linux z protokołem CIFS (Samba) lub NFS.

### Czy NAS-HA jest kompatybilny z protokołem FTP?
Nie, nie jest on kompatybilny z protokołem FTP.

### Czy przestrzeń dyskową można dzielić na partycje?
Tak, konieczne jest utworzenie jednej lub kilku partycji. Nie ma ograniczeń w liczbie tworzonych partycji.

## Kompatybilność

### Czy NAS-HA jest kompatybilny z serwerami innymi niż OVH?
Nie, dostęp do NAS-HA możliwy jest wyłącznie poprzez sieć OVH.

### Dla jakich usług jest dostępne rozwiązanie NAS-HA?
Dostępny jest we wszystkich przystosowanych do tego produktach OVH: serwerach dedykowanych (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud i VPS.

### Jak zarządzać dostępem do NAS-HA?
Listę kontroli dostępu (ACL) można konfigurować z poziomu Panelu klienta OVH. Wystarczy wprowadzić adres IP usługi, której chcesz zezwolić na dostęp do NAS-HA.

### Czy NAS-HA jest dostępne dla oferty vRack?
Obecnie nie można zintegrować NAS-HA z siecią prywatną vRack. Jednakże można pogodzić korzystanie z NAS-Ha i vRack przez publiczny adres IP serwera połączonego z vRack.

## Prędkość przesyłu

### Czy prędkość przesyłu danych i dostępność są gwarantowane?

- Przesyłanie danych: pasmo przesyłowe dla usługi jest współdzielone. OVH nie może więc zagwarantować prędkości przesyłu danych.
- Dostępność: dostępność usługi jest gwarantowana i podlega umowie o gwarantowanym poziomie usług. Szczegóły dostępne są w szczegółowych warunkach korzystania z usługi.

## Snapshoty

### Co to jest snapshot?
Snapshot (inaczej migawka) to rodzaj zrzutu danych przechowywanych na dysku w danym momencie. Konfiguracja i zarządzanie snapshotami są dostępne z poziomu Panelu klienta.

Snapshot jest aktywowany domyślnie w chwili tworzenia partycji, a domyśla częstotliwość jego wykonywania to „co godzinę”.

### Jak często tworzyć snapshoty?

Częstotliwością tworzenia snapshotów można zarządzać z poziomu Panelu klienta. Możesz wybrać jeden z poniższych odstępów czasowych: 

- co godzinę;
- co 6 godzin;
- codziennie;
- co dwa dni;
- co trzy dni;
- raz w tygodniu. 


W każdej chwili  możesz również tworzyć snapshoty ręcznie, przechowywać je bezterminowo lub usuwać. Te funkcje są dostępne w Twoim [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub przez [API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Jak działa system zarządzania snapshotami?

Istnieje możliwość automatycznego tworzenia snapshotów w określonych odstępach czasowych. Bez względu na ustawioną częstotliwość, ostatnio utworzony snapshot zawsze usuwa i zastępuje poprzedni. Możesz również tworzyć i usuwać snapshoty na żądanie.

### Czy można usunąć snapshota?
Usuwane mogą być jedynie snapshoty utworzone „na żądanie” (patrz poprzednie pytanie „Jak często należy tworzyć snapshoty?”). Snapshoty tworzone w stałych odstępach czasowych są usuwane automatycznie, bez możliwości ich ręcznego usuwania.

### Ile przestrzeni zajmują snapshoty na NAS-HA?
Przestrzeń zajmowana przez utworzone snapshoty różni się w zależności od działań wykonywanych pomiędzy ich utworzeniem.

Od chwili utworzenia snapshota wszystkie działania wykonane na danej partycji będą w nim przechowywane, co wiąże się ze zwiększaniem rozmiaru pliku. Można również w każdej chwili przywrócić poprzednią wersję partycji (czyli tę, w jakiej była w chwili tworzenia snapshota).  Z technicznego punktu widzenia wszelkie zmiany i usuwanie danych powodują, że pliki snapshota zajmują coraz więcej miejsca na dysku.

### Ile snapshotów mogę maksymalnie utworzyć?
- snapshoty automatyczne: jeden na partycję
- snapshoty ręczne: dziesięć na partycję

### Skąd mogę odzyskać snapshoty?
Na właściwej partycji: katalog ukryty o nazwie `.zfs` → katalog `snapshots`. Pliki mają status „read only”.

### Czy OVH wykonuje również kopię zapasową moich danych?
Tak, wykonywana jest wewnętrzna kopia zapasowa. Generuje to o jeden snapshot więcej. Tworzenie takiej kopii zapasowej nie może zostać dezaktywowane przez klienta.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.

