---
title: Najczęściej zadawane pytania dotyczące technologii NAS
slug: nas/faq
excerpt: Masz pytania dotyczące NAS? Oto odpowiedzi na najczęściej zadawane pytania.
section: NAS
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja dnia 09-09-2021**

## Oferta

### Czy można zarządzać NAS-HA przez Panel klienta?

Tak, opcje zarządzania usługą są dostępne w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w rubryce `Bare Metal Cloud`{.action}, następnie `NAS i CDN`{.action}.

### Czy jest możliwość zwiększenia miejsca na usłudze NAS?

Po zakupie nie ma możliwości zwiększenia pojemności NAS. W celu zwiększenia przestrzeni dyskowej należy przenieść dane na drugi NAS o większym rozmiarze.

### Jakie są dostępne pojemności przestrzeni dyskowej?

Oferujemy następujące przestrzenie dyskowe:

- 3 To
- 6 To
- 9 To
- 18 To
- 36 To

Proponowana zdolność magazynowania to zdolność do wykorzystania.

### Czy usługa NAS-HA jest w pełni dedykowana?

Dyski NAS-HA są dedykowane. Pozostałe zasoby maszyny są współdzielone (RAM, CPU, Przepustowość).

**Szczególne przypadki:** jeśli zamówiłeś ofertę 36 To, wszystkie zasoby serwera hosta są dedykowane (RAM, CPU, Przepustowość).

### Na jaki okres mogę wykupić NAS-HA?

Oferowane okresy to: 1, 3, 6 i 12 miesięcy. W przypadku braku złożenia wniosku o rozwiązanie umowy, po zakończeniu okresu rozliczeniowego subskrypcja jest przedłużana automatycznie. Wniosek można złożyć przez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w trakcie całego okresu obowiązywania umowy.

## Użytkowanie produktu

### Czy NAS-HA może być podłączony do kilku serwerów jednocześnie?

Tak, NAS może współpracować jednocześnie z wieloma usługami OVHcloud.

### Czy na NAS-HA można zainstalować system operacyjny?

Nie, na NAS-HA nie ma możliwości zainstalowania systemu operacyjnego.

### Jakie protokoły są zgodne z NAS-HA?

NAS-HA może być zainstalowany na serwerze Windows lub Linux z protokołem CIFS (Samba) lub NFS.

### Czy przestrzeń dyskową można dzielić na partycje?

Tak, konieczne jest utworzenie jednej lub kilku partycji. Nie ma ograniczeń w liczbie tworzonych partycji.

## Kompatybilność

### Czy NAS-HA jest kompatybilny z serwerami innymi niż OVHcloud?

Nie, dostęp do NAS-HA możliwy jest wyłącznie poprzez sieć OVHcloud.

### Dla jakich usług jest dostępne rozwiązanie NAS-HA?

Dostępny jest we wszystkich przystosowanych do tego produktach OVHcloud: serwerach dedykowanych (OVHcloud, So you Start, Kimsufi), Hosted Private Cloud, Public Cloud i VPS.

### Jak zarządzać dostępem do NAS-HA?

Listę kontroli dostępu (ACL) można konfigurować z poziomu Panelu klienta OVHcloud. Wystarczy wprowadzić adres IP usługi, której chcesz zezwolić na dostęp do NAS-HA.

### Czy NAS-HA jest dostępne dla oferty vRack?

Obecnie nie można zintegrować NAS-HA z siecią prywatną vRack. Jednakże można pogodzić korzystanie z NAS-Ha i vRack przez publiczny adres IP serwera połączonego z vRack.

## Prędkość przesyłu

### Czy prędkość przesyłu danych i dostępność są gwarantowane?

- Przesyłanie danych: pasmo przesyłowe dla usługi jest współdzielone. OVHcloud nie może więc zagwarantować prędkości przesyłu danych.
- Dostępność: dostępność usługi jest gwarantowana i podlega umowie o gwarantowanym poziomie usług. Szczegóły dostępne są w szczegółowych warunkach korzystania z usługi.

## Snapshoty

### Co to jest snapshot?

Snapshot (inaczej migawka) to rodzaj zrzutu danych przechowywanych na dysku w danym momencie. Konfiguracja i zarządzanie snapshotami są dostępne z poziomu Panelu klienta.

Snapshot jest aktywowany domyślnie w chwili tworzenia partycji, a domyśla częstotliwość jego wykonywania to “co godzinę”.

### Jak często tworzyć snapshoty?

Częstotliwością tworzenia snapshotów można zarządzać z poziomu Panelu klienta. Możesz wybrać jeden z poniższych odstępów czasowych:

- co godzinę (domyślnie);
- co 6 godzin;
- codziennie;
- co dwa dni;
- co trzy dni;
- raz w tygodniu.

W każdej chwili  możesz również tworzyć snapshoty ręcznie, przechowywać je bezterminowo lub usuwać. Te funkcje są dostępne w Twoim [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub przez [API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### Jak działa system zarządzania snapshotami?

Istnieje możliwość automatycznego tworzenia snapshotów w określonych odstępach czasowych. Bez względu na ustawioną częstotliwość, ostatnio utworzony snapshot zawsze usuwa i zastępuje poprzedni. Możesz również tworzyć i usuwać snapshoty na żądanie.

### Czy można usunąć snapshota?

Usuwane mogą być jedynie snapshoty utworzone “na żądanie” (patrz poprzednie pytanie “Jak często należy tworzyć snapshoty?”). Snapshoty tworzone w stałych odstępach czasowych są usuwane automatycznie, bez możliwości ich ręcznego usuwania.

### Ile przestrzeni zajmują snapshoty na NAS-HA?

Przestrzeń zajmowana przez utworzone snapshoty różni się w zależności od działań wykonywanych pomiędzy ich utworzeniem.

Od chwili utworzenia snapshota wszystkie działania wykonane na danej partycji będą w nim przechowywane, co wiąże się ze zwiększaniem rozmiaru pliku. Można również w każdej chwili przywrócić poprzednią wersję partycji (czyli tę, w jakiej była w chwili tworzenia snapshota).  Z technicznego punktu widzenia wszelkie zmiany i usuwanie danych powodują, że pliki snapshota zajmują coraz więcej miejsca na dysku.

### Ile snapshotów mogę maksymalnie utworzyć?

- snapshoty automatyczne: jeden na partycję
- snapshoty ręczne: dziesięć na partycję

### Skąd mogę odzyskać snapshoty?

Na właściwej partycji: katalog ukryty o nazwie `.zfs` → katalog `snapshots`. Pliki mają status “read only”.

### Czy OVHcloud wykonuje również kopię zapasową moich danych?

Tak, wykonywana jest wewnętrzna kopia zapasowa. Generuje to o jeden snapshot więcej. Tworzenie takiej kopii zapasowej nie może zostać dezaktywowane przez klienta.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
