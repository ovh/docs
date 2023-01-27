---
title: Korzystanie z Replikacji Zerto Virtual między dwoma centrami danych OVHcloud
slug: zerto-virtual-replication-vmware-vsphere-drp
excerpt: Dowiedz się, jak skonfigurować Zerto Virtual Replication w planie awaryjnym w dwóch ofertach Private Cloud
section: Usługi i opcje OVHcloud
updated: 2022-02-11
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 11-02-2022**

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, w jaki sposób skonfigurować Zerto Virtual Replication w infrastrukturze Private Cloud.

Niniejszy przewodnik wyjaśnia, w jaki sposób wdrożyć Zerto Virtual Replication między dwoma centrami danych OVHcloud.

W pozostałych przypadkach zapoznaj się z naszym przewodnikiem dotyczącym sposobu [korzystania z usługi Zerto między OVHcloud a platformą zewnętrzną](https://docs.ovh.com/pl/private-cloud/zerto-virtual-replication-klient-do-ovhcloud/).

**Dowiedz się, jak skonfigurować Zerto Virtual Replication w planie odzyskiwania awaryjnego (DRP, Disaster Recovery Plan) w dwóch ofertach Hosted Private Cloud.**

## Wymagania początkowe

- Posiadanie dwóch ofert [Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external} w dwóch różnych lokalizacjach
- Posiadanie wolnego publicznego adresu IP w przypadku każdej z nich

### Koncepcja Zerto Virtual Replication

Zerto Virtual Replication jest technicznym rozwiązaniem umożliwiającym skonfigurowanie replikacji danych między infrastrukturami do wirtualizacji lub w chmurze. W tym celu opiera się ono na hipernadzorcach platformy, wdrażając maszyny wirtualne (VM) zwane Virtual Replication Appliance (VRA), które zajmują się powielaniem zapisów do jednostek przechowywania i przekazywaniem ich do zdalnej lokalizacji zapisu.

#### Virtual Replication Appliance (VRA)

W ten sposób VRA są wdrażane na każdym hipernadzorcy i zużywają zasoby do wykonywania replikacji:

- vCPU: 1
- RAM: 2 GB
- Przestrzeń dyskowa: 36 GB

Do przestrzeni dyskowej OVHcloud dodaje bezpłatny dedykowany magazyn danych dla wszystkich VRA.

#### Lokalizacje

Replikacja danych odbywa się pomiędzy dwiema (2) powiązanymi lokalizacjami, dzięki czemu VRA po każdej ze stron mogą ustalić ich przepływ replikacji.

Domyślnie przepływy replikacji Zerto nie są szyfrowane, a ponieważ bezpieczeństwo jest priorytetem dla OVHcloud, pomiędzy tymi dwiema lokalizacjami wykorzystujemy szyfrowany tunel (poprzez IPSec) za pomocą aplikacji sieciowej o nazwie L2VPN.

#### Grupa replikacji (VPG)

Replikacja maszyn wirtualnych jest aktywowana i zarządzana przez Grupę replikacji (VPG).
Pozwala ona na logiczne pogrupowanie grupy maszyn wirtualnych odpowiadających potrzebom biznesowym lub operacyjnym (np. aplikacja z bazą danych) w celu skonfigurowania maksymalnej dopuszczalnej utraty danych (**RPO**), kolejności uruchamiania (baza danych przed aplikacją), konfiguracji sieci dla ćwiczeń lub w rzeczywistym przypadku. 

Możliwe jest również określenie poziomu priorytetu pomiędzy VPG w celu nadania priorytetu transferu danych w przypadku problemów z przepustowością sieci.

## W praktyce

### Aktywacja usługi

#### W Panelu klienta OVHcloud

W Panelu klienta OVHcloud przejdź do sekcji `Serwer` -> `Private Cloud` –> wybierz Twoją główną platformę Private Cloud –> wybierz
żądane centrum danych -> kliknij kartę `Disaster Recovery Plan (DRP)`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_01.png){.thumbnail}

Wybierz **Between two OVH Private Cloud solutions**, a następnie kliknij `Activate Zerto DRP`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_02.png){.thumbnail}

Wybór głównej infrastruktury **Private Cloud** oraz **centrum danych** następuje automatycznie w oparciu o infrastrukturę, przez którą uzyskujesz dostęp.

Z rozwijanego menu wybierz **wolny** publiczny adres IP pochodzący z puli publicznych IP powiązanych z **Private Cloud**. Zostanie on wykorzystany do uruchomienia bezpiecznego połączenia między infrastrukturami.

Kliknij `Next`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_03.png){.thumbnail}

Dodatkowa lokalizacja jest wybierana spośród Twoich infrastruktur **Private Cloud** widocznych w menu rozwijanym. 

Należy pamiętać, że widoczne są tylko kwalifikujące się infrastruktury. W tym celu muszą one spełniać następujące kryteria:

- fizyczna obecność w innej lokalizacji,
- brak już wdrożonej replikacji Zerto.

Następnie z menu rozwijanego wybierz **centrum danych** docelowej infrastruktury **Private Cloud**.

Z rozwijanego menu wybierz **wolny** publiczny adres IP pochodzący z puli publicznych IP powiązanych z **Private Cloud**. Zostanie on wykorzystany do uruchomienia bezpiecznego połączenia między infrastrukturami.

Kliknij `Next`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_04.png){.thumbnail}

Realizacja żądania aktywacji może potrwać do godziny, pod warunkiem, że podane informacje są poprawne (np. adres IP nie jest już używany przez jedną z maszyn wirtualnych – w takim przypadku aktywacja nie powiedzie się).

![zerto ovh enable](images/zerto_OvhToOvh_enable_05.png){.thumbnail}

Po aktywacji otrzymasz wiadomość e-mail z konfiguracją systemu i linki dostępu do interfejsu Zerto dla każdej infrastruktury.

> [!primary]
> Drogi Kliencie,
> 
> Między Twoimi dwiema infrastrukturami Private Cloud zostało aktywowane rozwiązanie DRP Zerto.
> 
> Możesz zalogować się do lokalizacji głównej pod następującym adresem:
> 
>   - URL        : https://zerto.pcc-192-0-2-1.ovh.com/
> 
> Możesz zalogować się do lokalizacji dodatkowej pod następującym adresem:
> 
>   - URL        : https://zerto.pcc-192-0-2-2.ovh.com/
> 
> Do uwierzytelnienia możesz użyć swoich kont administratora, tak samo jak w przypadku interfejsu vSphere.
> 

#### Za pośrednictwem API OVHcloud

### Interfejs Zerto Replication

Interfejs jest dostępny z dwóch (2) infrastruktur pod adresem:

- URL: https://zerto.pcc-x-x-x-x.ovh.com/ (do zmiany w zależności od platformy)

> [!warning]
>
> Jak wskazano w treści e-maila, dane do logowania są takie same jak dane używane do logowania do interfejsu vSphere.
>

Po zalogowaniu zobaczysz ekran z dashboardem:

![Zerto Dashboard](images/zerto_OvhToOvh_int_01.png){.thumbnail}

Na tym ekranie znajdują się następujące elementy:

- graficzne podsumowanie kondycji VPG,
- globalny status Zerto Replication z czterema wskaźnikami,
- tabela wyników Zerto Replication,
- graficzne podsumowanie statusów wszystkich VPG,
- lista ostatnich alertów, działań i zdarzeń Zerto Replication.

### Konfigurowanie grupy replikacji (VPG)

W menu `Actions`{.action} wybierz `Create VPG`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_01.png){.thumbnail}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_02.png){.thumbnail}

Na pierwszym ekranie:

- Wprowadź nazwę VPG, najlepiej wskazującą na kontekst operacyjny.
- Jeśli nie ma szczególnej potrzeby, można pozostawić ustawiony priorytet na **Medium**.

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_03.png){.thumbnail}

W kolejnym etapie należy wybrać VM, które będą należeć do VPG.

> [!warning]
>
> Jedna VM nie może należeć do kilku VPG.
> 

- Wyfiltruj VM według nazwy w polu **Search**
- Zaznacz pola po lewej stronie odpowiednich VM

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_04.png){.thumbnail}

- Kliknij strzałkę skierowaną w prawą stronę, aby umieścić VM w VPG

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_05.png){.thumbnail}

Następnie przechodzimy do etapu wyboru lokalizacji zdalnej:

- **Recovery Site**: z listy wybierz lokalizację zdalną (inną niż lokalna). 
- **ZORG**: z listy wybierz **No Organization**. Każda inna wartość spowoduje wyświetlenie błędu podczas przechodzenia do kolejnego etapu.

Następnie przechodzimy do etapu definiowania zasobów zdalnych.

- **Hosts**: Wybierz zasób obliczeniowy, którym może być **sam host** (określany przez jego adres IP i w stosownych przypadkach poprzedzony nazwą klastra w nawiasach kwadratowych), **Ressource Pool** (najpierw RP, następnie nazwa klastra, a potem nazwa Ressource Pool) lub **Klaster** (określany przez nazwę). Należy wybrać tylko **Ressource Pool** lub **Klaster** (tutaj: Cluster1).
- **Datastore**: Wybierz zasób przechowywania, którym może być **sam magazyn danych** (określany przez jego nazwę i w stosownych przypadkach poprzedzony nazwą **Storage Cluster** w nawiasach kwadratowych) lub **Storage Cluster** (określany przez nazwę).

Jeśli nie masz zaawansowanych potrzeb, zostaw wartości innych ustawień bez zmian.

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_06.png){.thumbnail}

W kolejnym etapie możemy ewentualnie dostosować konfigurację przestrzeni dyskowej.

Jeśli nie masz zaawansowanych potrzeb, zostaw wartości innych ustawień bez zmian.

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_07.png){.thumbnail}

Teraz następuje ważna część: pierwszy etap konfiguracji sieci.

- **Failover/Move Network**: wybierz domyślny portgroup do przełączania awaryjnego.
- **Failover Test Network**: wybierz portgroup do testów przełączania awaryjnego.
- **Recovery Folder**: wybierz folder (lub znak „/”, aby wybrać katalog główny), do którego zostaną dodane VM przeniesione do lokalizacji.

> [!primary]
> Opcji **Pre-recovery Script** i **Post-recovery Script** nie można używać.
> 

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_08.png){.thumbnail}

Jest to drugi etap konfiguracji sieci:

- Dla każdej VM wybierz portgroup do testów lub przełączania awaryjnego.
- W każdej sytuacji można też zmienić konfigurację IP maszyn wirtualnych.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_09.png){.thumbnail}

> [!warning]
>
> Zmiana IP jest możliwa tylko w przypadku VM z obsługiwanym systemem operacyjnym i z uruchomionymi **VMware Tools**
> 

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_10.png){.thumbnail}

Kliknij `NEXT`{.action}, aby pominąć ten etap.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_11.png){.thumbnail}

Na ostatnim ekranie widzimy podsumowanie wszystkich skonfigurowanych elementów.

Po weryfikacji potwierdź utworzenie, klikając `DONE`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_13.png){.thumbnail}

Nowo utworzoną VPG oraz jej status (początkowo będzie to **Initializing**) znajdziesz na liście.

### Uruchamianie testu odzyskiwania po awarii (Disaster Recovery) 

Po skonfigurowaniu replikacji i umożliwieniu jej działania przez kilka dni, możesz przetestować, czy Twój DRP działa z operacjami zarządzanymi przez Zerto Replication.

> [!warning]
>
> Test failover w Zerto Replication odbywa się **bez** odcięcia od lokalizacji głównej, dlatego należy zwrócić uwagę na prawidłową konfigurację testowanych sieci, aby uniknąć wszelkich konfliktów związanych z adresowaniem IP i uniknąć wpływu tego testu na produkcję.
>
> Wszelkich zasobów, które zostaną uruchomione w lokalizacji dodatkowej przez test, nie można ręcznie modyfikować ani usuwać. Po zakończeniu operacji test zostanie dezaktywowany przez Zerto Replication.
>
> Podczas testu replikacja nadal się odbywa między tymi dwiema lokalizacjami.
>

![Zerto Test Failover](images/zerto_OvhToOvh_test_00.png){.thumbnail}

W tym celu zaloguj się do interfejsu Zerto Replication i kliknij `FAILOVER`{.action} (przycisk wyboru po lewej stronie, domyślnie ustawiony na **TEST**).

Jeśli tekst przycisku jest szary, to znaczy, że nie ma VPG kwalifikującej się do testu (być może inicjalizacja jest jeszcze w toku).

![Zerto Test Failover](images/zerto_OvhToOvh_test_01.png){.thumbnail}

Natychmiast pojawia się ekran z dostępnymi VPG, kierunkiem replikacji, docelową lokalizacją oraz informacją o tym, czy poziom ochrony jest prawidłowy (**Meeting SLA**).

Masz teraz klika możliwości:

1. Zaznacz pole, aby wybrać do testu VPG i wszystkie należące do niej VM.
2. Kliknij ikonę po prawej stronie nazwy VPG, aby wyświetlić listę VM należących do VPG. Możesz teraz wybrać, które VM należące do VPG wezmą udział w teście.

Kliknij `NEXT`{.action}, aby zatwierdzić i przejść do kolejnego etapu.

![Zerto Test Failover](images/zerto_OvhToOvh_test_02.png){.thumbnail}

W tym przykładzie wybieramy opcję 1, czyli test VPG.

Na tym etapie widzimy podsumowanie operacji związanych z VPG:

- kierunek replikacji;
- lokalizacja zdalna;
- informacja, czy została określona kolejność uruchamiania VM;
- informacja, czy są obecne skrypty przed i po przełączeniu awaryjnym (funkcja niedostępna).

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto Test Failover](images/zerto_OvhToOvh_test_03.png){.thumbnail}

Ostatni ekran z podsumowaniem przedstawia widok różnych lokalizacji wraz z liczbą VPG przeznaczonych do testu.

Kliknij `START FAILOVER TEST`{.action}, aby potwierdzić uruchomienie testu.

Test przełączania awaryjnego uruchamia się natychmiast wraz z operacjami na vCenter lokalizacji zdalnej.

Teraz wystarczy sprawdzić, czy w lokalizacji zdalnej wszystko działa poprawnie.

![Zerto Test Failover](images/zerto_OvhToOvh_test_05.png){.thumbnail}

Po sprawdzeniu maszyn wyznaczonych do testu przełączania awaryjnego, kliknij czerwony kwadracik po prawej stronie pozycji **Testing Failover**.

![Zerto Test Failover](images/zerto_OvhToOvh_test_06.png){.thumbnail}

Pojawi się nowe okno z informacją o tym, czy test się powiódł – można dodać w nim komentarz.

Kliknij `STOP`{.action}, aby potwierdzić zakończenie testu.

Dezaktywacja testu uruchamia się natychmiast za sprawą operacji na vCenter lokalizacji zdalnej.

### Uruchamianie odzyskiwania po awarii (Disaster Recovery)

W razie poważnego zdarzenia w lokalizacji głównej lub podczas testu w warunkach rzeczywistych, uruchomienie migracji odbywa się logicznie z lokalizacji dodatkowej (awaryjnej).

> [!warning]
>
> Failover w trybie **LIVE** w Zerto Replication odbywa się po uznaniu lokalizacji głównej za niedostępną, dlatego konieczne jest zwrócenie uwagi na konfigurację sieci w celu uniknięcia konfliktu adresowania IP.
>
> Wszelkie zasoby, które zostaną uruchomione w lokalizacji dodatkowej, staną się aktywne na poziomie przetwarzania danych.
>
> Należy pamiętać, że replikacja między dwiema lokalizacjami jest zmodyfikowana lub przerwana (patrz dalej).
>

![Zerto Live Failover](images/zerto_OvhToOvh_live_02.png){.thumbnail}

W tym celu zaloguj się do interfejsu Zerto Replication, przełącz przycisk znajdujący się w prawym dolnym rogu do pozycji **LIVE** (kolor baneru zmieni się, sygnalizując, że operacje, które zostaną wykonane, mogą mieć wpływ na VM) i kliknij `FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_03.png){.thumbnail}

Natychmiast pojawia się ekran z dostępnymi VPG, kierunkiem replikacji, docelową lokalizacją oraz informacją o tym, czy poziom ochrony jest prawidłowy (**Meeting SLA**).

Masz kilka możliwości:

1. Zaznacz pole, aby wybrać VPG, wraz z wszystkimi należącymi do niej VM, do przełączenia awaryjnego.
2. Kliknij ikonę po prawej stronie nazwy VPG, aby wyświetlić listę VM należących do VPG. Teraz możesz wybrać, które VM należące do VPG mają być objęte przełączeniem awaryjnym.

Kliknij `NEXT`{.action}, aby zatwierdzić i przejść do kolejnego etapu.

![Zerto Live Failover](images/zerto_OvhToOvh_live_04.png){.thumbnail}

Opcja 1 – test na VPG – został wybrany przykładowo.

Na tym etapie widzimy podsumowanie operacji związanych z VPG:

- kierunek replikacji;
- lokalizacja zdalna;
- **Checkpoint**: jest to data, dla której dane zostaną przywrócone. Różnica między wybranym punktem a bieżącą datą określi **RPO**;
- **Commit Policy**: patrz dalej;
- **VM Shutdown**: określa zachowanie, które należy przyjąć w lokalizacji głównej: brak wyłączenia VM, wyłączenie, wymuszone wyłączenie;
- **Reverse Protection**: wskazuje, czy replikację VPG należy skonfigurować w odwrotnym kierunku po zakończeniu trybu failover, tak aby w razie potrzeby można było przeprowadzić później powrót po awarii.
- informacja, czy została określona kolejność uruchamiania VM;
- informacja, czy są obecne skrypty przed i po przełączeniu awaryjnym (funkcja niedostępna).

![Zerto Live Failover](images/zerto_OvhToOvh_live_05.png){.thumbnail}

W przypadku **Commit Policy** masz do wyboru trzy (3) opcje:

- Auto-Rollback: bez żadnego działania ze strony użytkownika, wycofywanie jest uruchamiane po upływie ustawionego czasu.
- Auto-Commit: bez żadnego działania ze strony użytkownika, zatwierdzenie danych na platformie dodatkowej jest przeprowadzane po upływie ustawionego czasu (nie można po prostu wrócić do platformy głównej).
- None: operacja **Rollback** lub **Commit** muszą zostać zatwierdzone przez użytkownika.

![Zerto Live Failover](images/zerto_OvhToOvh_live_06.png){.thumbnail}

W przypadku opcji **Auto** domyślne opóźnienie czasowe wnosi sześćdziesiąt (60) minut.

Kliknij `NEXT`{.action}, aby kontynuować.

![Zerto Live Failover](images/zerto_OvhToOvh_live_07.png){.thumbnail}

Ostatni ekran to podsumowanie z widokiem różnych lokalizacji i liczbą VPG do przełączenia awaryjnego.

> [!warning]
>
> Zalecamy przeczytanie podsumowania i wszystkich ostrzeżeń.
>

Kliknij `START FAILOVER`{.action}, aby uruchomić przełączenie awaryjne.

![Zerto Live Failover](images/zerto_OvhToOvh_live_08.png){.thumbnail}

Jeśli wybrano zasadę **Commit Policy** typu **Auto**, pojawi się komunikat ostrzegający o jej możliwym skutku.

Kliknij `START FAILOVER`{.action}, aby potwierdzić uruchomienie.

Migracja uruchamia się natychmiast wraz z operacjami na vCenter w lokalizacji zdalnej.

Teraz wystarczy sprawdzić, czy w lokalizacji zdalnej wszystko działa poprawnie.

![Zerto Live Failover](images/zerto_OvhToOvh_live_10.png){.thumbnail}

Po uruchomieniu przełączania awaryjnego w interfejsie Zerto Replication może pojawić się alert.
Jest on związany z zasadą **Commit Policy** i będzie widoczny do momentu zatwierdzenia (commit) lub anulowania.

W razie potrzeby czynności te należy wykonać za pomocą ikon po prawej stronie VPG.

![Zerto Live Failover](images/zerto_OvhToOvh_live_11.png){.thumbnail}

W razie zatwierdzenia możesz automatycznie skonfigurować VPG w przeciwnym kierunku (wywołać **Reverse Protection**).

Kliknij `COMMIT`{.action}, aby potwierdzić.

![Zerto Live Failover](images/zerto_OvhToOvh_live_13.png){.thumbnail}

Zauważ, że strzałka replikacji przy VPG zmieniła kierunek.

### Przygotowanie i wykonanie powrotu po awarii

W zależności od tego, jak został przeprowadzony **Failover**, ewentualny powrót do lokalizacji głównej (nie jest to konieczność) może wymagać kilku działań.

Jeśli migracja odbywała się przy użyciu **Reverse Protection**, powrót po awarii odbywa się przy użyciu **Failover Live** (zapoznaj się z odpowiednią sekcją dotyczącą działań, które należy podjąć).

Jeśli migracja odbywała się **bez** **Reverse Protection**, powrót po awarii polega na utworzeniu VPG, a **następnie** przeprowadzeniu **Failover Live** (zapoznaj się z poprzednimi sekcjami dotyczącymi działań, które należy podjąć).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
