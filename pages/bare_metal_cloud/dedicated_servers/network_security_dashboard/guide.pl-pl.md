---
title: "Monitoring ataków DDoS za pomocą Network Security Dashboard"
excerpt: "Dowiedz się, jak nawigować za pomocą pulpitu nawigacyjnego zabezpieczeń sieciowych"
updated: 2023-12-19
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Z tego przewodnika dowiesz się, jak korzystać z Dashboardu zabezpieczeń sieci. Zawiera on przegląd środków zaradczych uruchamianych przez infrastrukturę ochrony Anty-DDoS w przypadku wykrycia złośliwej aktywności sieciowej. Dowiedz się, jakie dodatkowe zabezpieczenia należy wdrożyć, aby zapewnić ciągłość działania usług. Co więcej, na dashboardzie dostępne są wykresy ruchu pozwalające na lepszą wizualizację sytuacji podczas operacji centrum kontroli.

## Wymagania początkowe

- Usługa OVHcloud udostępniona na dedykowanym publicznym adresie IP ([Dedicated Server](/links/bare-metal/bare-metal), [VPS](https://www.ovhcloud.com/pl/vps/), [Public Cloud instance](https://www.ovhcloud.com/pl/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), [Additional IP](/links/network/additional-ip) itd.)
- Dostęp do [OVHcloud Control Panel](/links/manager)

## W praktyce

### Zabezpieczenia sieciowe 

Infrastruktura Anty-DDoS firmy OVHcloud to wielowarstwowy, rozproszony system ochrony przed cyberatakami. Składa się z wielu lokalizacji na krawędzi i centrów oczyszczania, które mogą analizować i usuwać złośliwy ruch. Oferuje ona, obok rozwiązań [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) i [GAME DDoS protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), usługi ochrony jakości w różnych przypadkach.

Infrastruktura Anty-DDoS stale analizuje ruch przychodzący (mechanizm wykrywający) i ostatecznie przekierowuje go przez nasze centra kontroli (zwane również "mitygacją") zlokalizowane w centrach danych na całym świecie. Ruch przychodzący jest następnie głęboko analizowany i ostatecznie filtrowany ze złośliwych pakietów przed dotarciem do serwera lub usługi.

#### Co się stanie, gdy atak dotrze do adresu IP mojej usługi?

W przypadku wykrycia ataku na dowolny adres IP Twojej usługi otrzymujesz e-mail z informacją o przekierowaniu ruchu na infrastrukturę Anty-DDoS. Okresy te można również monitorować za pomocą Pulpitu nawigacyjnego zabezpieczeń sieci z dodatkowymi szczegółami.

W trakcie ataku, aktywne filtrowanie jest wskazane przez ikonę ostrzegawczą na stronie z listą adresów IP (w sekcji `Zarządzaj adresami IP`{.action} w Panelu klienta).

![red-line-attack](images/forced_blur.png){.thumbnail}

> [!primary]
>
> Więcej informacji na temat filtrowania DDoS na stronie OVHcloud [here](https://www.ovhcloud.com/pl/security/anti-ddos/ddos-attack-mitigation/).
>

> [!warning]
>
> Pamiętaj, że logika ochrony opiera się na publicznych adresach IP powiązanych z serwerem (lub usługą). Dlatego statystyki i wykresy są wyświetlane lub obliczane dla każdego adresu IP.
> 

### Powiadomienia o zabezpieczeniach sieci

![red-line-attack](images/nsd_04_blur.PNG){.thumbnail}

W Panelu klienta OVHcloud przejdź do sekcji `Bare Metal Cloud`{.action}. Następnie przejdź do sekcji `Sieć`{.action} na lewym pasku bocznym i kliknij pozycję `Adres IP`{.action}. Upewnij się, że `Tryb zaawansowany` jest włączony, aby sprawdzić stan infrastruktury anty-DDoS i konfigurację jej komponentów

Kolumny odpowiadają statusowi oczyszczania Anty-DDoS (**Mitygacja**), Edge Network **Firewall* i **GAME firewall** charakteryzują się dostępnością i statusami.

- Stan **Filtrowanie** może być następujący:
    - **Automatycznie** - Centrum czyszczenia jest w trybie **automatycznym**. Jest to tryb zalecany do użycia. W razie potrzeby przekierowuje ruch w celu głębszej analizy.
    - **Stałe** - Centrum czyszczenia jest **trwale włączone**. Nie zalecamy włączania połączenia w sposób stały, o ile nie zostanie zanotowane fluktuacja czasu odpowiedzi spowodowane przekierowaniem ruchu w tę i z powrotem.
    - **Wymuszone** - Oznacza to, że centrum oczyszczania jest **podejmowane działanie** teraz.

- Kolumna **Firewall** wskazuje stan Edge Network Firewall, który może być:
    - **Włączone** - Zapora dla tego adresu IP jest **włączona**.
    - **Disabled** - Firewall dla tego IP jest **disabled**.
    - **(brak stanu)** - Konfiguracja firewalla nie została utworzona. Aby skonfigurować reguły, kliknij `...`{.action} Przycisk wybierz `Utwórz zaporę`{.action}.

- Stan **GAME firewall** (dostępny tylko dla [OVHcloud **Game** dedicated servers](https://www.ovhcloud.com/pl/bare-metal/prices/#filterType=range_element&filterValue=game)) może być następujący:
    - **On** - Ochrona Anty-DDoS GAME dla tego IP jest **włączona**.
    - **Wyłączone** - Zapora GAME jest **dostępna**, ale **wyłączone** dla tego IP.
    - **(no status)** - Firewall game nie jest dostępny dla tego IP. Oznacza to, że podany adres IP nie jest skonfigurowany dla obsługiwanej gamy produktów.

- Kolumna **Alerty** może wskazywać aktywne centrum oczyszczania z ikoną ostrzeżenia i odpowiednią wskazówką.

### Pulpit nawigacyjny zabezpieczeń sieciowych

W Panelu klienta OVHcloud dostęp do dashboardu można uzyskać z poziomu strony wyświetlającej listę adresów IP (dla danego adresu IP) lub bezpośrednio z poziomu pulpitu nawigacyjnego zabezpieczeń sieci w menu "Sieć"{.action}.

Przejdź do karty `Bare Metal Cloud`{.action}, następnie do `Sieć`{.action} i wybierz `Network Security Dashboard`{.action}.

Alternatywnie, z listy IP (ta opcja jest dostępna tylko wtedy, gdy centrum oczyszczania jest w akcji): Przejdź do karty `Bare Metal Cloud`{.action}, następnie przejdź do `Network`{.action} i kliknij `Publiczne adresy IP`{.action}. Kliknij przycisk `...`{.action} i przejdź do `Network Security Dashboard`{.action}.

Karta **dziennik centrum oczyszczania** umożliwia pobranie wszystkich informacji o atakach wykrytych w przeszłości (lub w toku).

![red-line-attack](images/nsd_main_blur.png)

W tabeli występują następujące kolumny: 

- **Czas wykrycia** - Sygnatura czasowa pierwszego wykrycia ataku
- **Godzina zakończenia** - Sygnatura czasowa zakończenia filtrowania przez centrum czyszczenia
- **IP docelowe** - IP, które było celem ataku.
- **Wektory ataków** - Dostarcza informacji o wykrytych typach ataków, takich jak ataki UDP lub TCP, itp.

> [!warning]
>
> Uwaga: źródłowe adresy IP dla wykrytych zdarzeń nie są wyświetlane, ponieważ są zazwyczaj zafałszowane (ataki DDoS mogą wskazywać na inne źródła niż te, które w rzeczywistości pochodzą z danego serwera). Informacje te mogą być mylące lub nie nadawać się do użytku.
> 

W karcie **Traffic chart** możesz wyświetlić wykres przedstawiający ruch do Twojego adresu IP (bps lub pps).

![red-line-attack](images/nsd_graph_tab_blur.png)

Jest to złośliwy ruch, który został porzucony (**na czerwono**) i ruch wyczyszczony dostarczony do Twojego adresu IP (**zielony**). Dostępne są również podstawowe statystyki mitygacji, czyli: ile ataków zostało wykrytych dla wybranego adresu IP, ile ruchu (lub pakietów) zostało oczyszczonych podczas ataku lub ile razy centra szybkiej kontroli podjęły działanie w celu sprawdzenia ruchu (liczba zdarzeń) w wybranym okresie czasu.

## FAQ

### Dlaczego nie widzę wszystkich ataków na pulpicie nawigacyjnym zabezpieczeń sieci?

W zależności od rodzaju ataku, mogą zostać podjęte różne działania w celu jak najlepszego wyeliminowania zagrożenia. W obu przypadkach ataki najlepiej jest unieszkodliwić jak najbliżej miejsca pochodzenia:

- W przypadku ataku skierowanego do sieci OVHcloud (**external**), ruch jest przekierowywany do centrów oczyszczania Anty-DDoS (widocznych na Pulpicie nawigacyjnym).
- Pamiętaj, że ataki pochodzące z sieci OVHcloud (**internal**) są zarządzane przez nasze zespoły ds. bezpieczeństwa. Mitygacja skupia się na zablokowaniu źródła ataku i nie będzie zgłaszana przez systemy infrastruktury anty-DDoS.

### Brak danych w dziennikach centrum oczyszczania, czy to normalne?

Tak, oznacza to, że żadne podejrzane ataki nie zostały skierowane na Twoje publiczne adresy IP.

### Nie jest wyświetlany wykres ani dane dla wprowadzonego przeze mnie adresu IP.

Dane te są dostępne wyłącznie dla publicznych adresów IP w przypadku wykrycia automatycznej infrastruktury Anty-DDoS (przekierowanie ruchu przez centrum oczyszczania).

### Wykres ruchu dla niektórych pozycji w dziennikach centrum oczyszczania jest niedostępny.

Dane z wykresów ruchu dostępne są tylko w ciągu ostatnich dwóch tygodni, a wpisy w dziennikach mogą być weryfikowane w ciągu ostatniego roku.

### Atak na moją usługę trwa, w jaki sposób mogę lepiej chronić swój serwer?

Niektóre rodzaje ataków mogą być tak specyficzne, że nasza infrastruktura Anty-DDoS nie będzie mogła ich wykryć ani wyczyścić automatycznie. W takim przypadku najlepszym wyborem będzie firewall skonfigurowany na Twoim serwerze. Zalecamy również przeniesienie niektórych reguł firewalla serwera na brzeg naszej sieci przy użyciu Edge network Firewall.

Więcej informacji na temat konfigurowania reguł firewalla Edge Network znajdziesz w przewodniku [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Moja usługa jest atakowana i mam problemy z serwerem. Co jeszcze mogę zrobić?

Infrastruktura anty-DDoS została zaprojektowana w celu uzyskania najlepszej wydajności i ochrony szerokiej gamy usług. W niektórych przypadkach może być konieczne dodatkowe dopasowanie (np. ze względu na specyfikę aplikacji lub jej rozmiar). Aby zgłosić taki problem, odwiedź stronę [Help Centre](https://help.ovhcloud.com/csm?id=csm_get_help) i wyszukaj odpowiednie działanie w kategorii "Atak sieciowy i/lub ochrona Anty-DDoS".

Abyśmy mogli lepiej zrozumieć Twoją sprawę i udzielić Ci pomocy, prosimy o podanie kilku informacji:

#### Etap 1 - Przechwytywanie ruchu

Aby dostarczyć najlepsze rozwiązanie, najpierw musimy przeanalizować próbkę ruchu.

Aby udostępnić nam takie ujęcie, uruchom następujące polecenie w systemie Linux:

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

> [!primary]
>
> Jeśli używasz systemu Windows, użyj [Wireshark](https://www.wireshark.org/) i przechwyć 100000 pakietów.
>

Po zakończeniu działania polecenia zostanie utworzony plik przechwytywania. Możesz dołączyć utworzony plik do zgłoszenia serwisowego lub przesłać go do naszego rozwiązania udostępniania plików za pomocą [this guide](/pages/account_and_service_management/account_information/use-plik).

Udostępnij link do przekazanego pliku zespołowi pomocy technicznej w zgłoszeniu.

#### Etap 2 - dostarczenie informacji OVHcloud

W każdym przypadku, kiedy konieczne będą zmiany w naszym systemie Anty-DDoS, należy obowiązkowo podać nam następujące informacje:

- Usługa instalowana na serwerze, którego dotyczy operacja
- Data i godzina rozpoczęcia ataku
- Data i godzina zakończenia ataku
- Dotyczy IP
- Usługa, protokół i port używane przez usługę, której dotyczy problem
- Rozmiar usługi (XS: 1-10, S: 10-100, M: 100-1k, L: 1-10k, XL: 10-100k, XXL: ponad 100 tysięcy podłączonych klientów)
- Inne usługi hostowane na serwerze
- Inne porty używane na serwerze.
- Czy są inne usługi na oddzielnych adresach IP: Nie/Tak
- Jeśli tak, które adresy IP
- Czy ruch zgodny z prawem jest odrzucany: TAK/NIE
- Czy połączenie z serwerem zostało utracone: TAK/NIE
- Jaki rodzaj dozwolonego ruchu jest odrzucany.

## Sprawdź również

[Enabling and configuring the Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

[Protecting a game server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
