---
title: "Konfiguracja Edge Network Firewall dla serwerów dedykowanych"
excerpt: "Włącz i skonfiguruj Edge Network Firewall, aby filtrować ruch przychodzący do serwera dedykowanego OVHcloud."
updated: 2026-03-10
---

## Wprowadzenie

Aby chronić usługi klientów udostępnione na publicznych adresach IP, OVHcloud oferuje zaporę bezstanową, skonfigurowaną i zintegrowaną z **Infrastrukturą Anty-DDoS**: Edge Network Firewall. Ogranicza ona ekspozycję na ataki DDoS poprzez odrzucanie określonych przepływów sieciowych pochodzących spoza sieci OVHcloud.

**Ten przewodnik wyjaśnia, jak skonfigurować Edge Network Firewall dla Twoich usług.**

> [!primary]
>
> Więcej informacji na temat rozwiązania Anty-DDoS znajdziesz na [naszej stronie WWW](/links/security/antiddos).
>

| Schemat Infrastruktury Anty-DDoS i usług ochrony gier w OVHcloud |
|:--:|
| ![global-schema](images/global_schema_2025.png){.thumbnail} |

## Wymagania początkowe

- Usługa OVHcloud udostępniona na dedykowanym publicznym adresie IP ([Serwer dedykowany](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps), [instancja Public Cloud](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/vmware), [Additional IP](/links/network/additional-ip) itp.)

<!-- CP-NAV-START:network-public-ip -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public IP](/links/control-panel/network-public-ip)
- **Ścieżka nawigacji:** `Network`{.action} > `Publiczne adresy IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Ta funkcja może być niedostępna lub ograniczona na serwerach z [linii produktów **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, odwiedź naszą [stronę porównawczą](/links/bare-metal/eco-compare).

> [!warning]
> Edge Network Firewall nie obsługuje protokołu QUIC.

## W praktyce

Edge Network Firewall zmniejsza ekspozycję na sieciowe ataki DDoS, umożliwiając użytkownikom skopiowanie niektórych reguł zapory serwera na brzeg sieci OVHcloud. Blokuje to przychodzące ataki jak najbliżej ich źródła, zmniejszając ryzyko przeciążenia zasobów serwera lub połączeń rack w przypadku poważnych ataków.

### Konfiguracja Edge Network Firewall

Edge Network Firewall może być w dowolnym momencie włączony lub wyłączony przez użytkownika, z jednym wyjątkiem: jest on **automatycznie włączany** w momencie wykrycia ataku DDoS i **nie może zostać wyłączony** do momentu zakończenia ataku. W rezultacie wszystkie reguły skonfigurowane w zaporze są stosowane przez cały czas trwania ataku. Taka logika pozwala naszym klientom przenieść reguły zapory serwera na brzeg sieci OVHcloud na czas trwania ataku.

#### Dostęp do strony konfiguracji Edge Network Firewall

> [!primary]
>
> Do tej pory funkcja ta jest dostępna tylko dla adresów IPv4.
>

> [!primary]
>
> Edge Network Firewall chroni określony adres IP powiązany z serwerem (lub usługą). Jeśli posiadasz serwer z wieloma adresami IP, musisz skonfigurować każdy z nich oddzielnie.
>

Możesz skorzystać z menu rozwijanego pod **"Moje publiczne adresy IP i powiązane usługi"**, aby filtrować usługi według kategorii, lub bezpośrednio wpisać żądany adres IP w pasku wyszukiwania.

![filter service](images/selectservice_cut_new.png){.thumbnail}

Następnie kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego adresu IPv4 i wybierz `Skonfiguruj Edge Network Firewall`{.action} (lub kliknij ikonę statusu w kolumnie **Edge Firewall**).

![Włączanie Network Firewall](images/firewall_config_new.png){.thumbnail}

Następnie zostaniesz przeniesiony na stronę konfiguracji zapory.

> [!primary]
>
> - Fragmentacja UDP jest domyślnie zablokowana (DROP). Jeśli korzystasz z VPN, pamiętaj o prawidłowym skonfigurowaniu maksymalnej jednostki transmisji (MTU). Na przykład w przypadku OpenVPN możesz zaznaczyć opcję `MTU test`.
> - Edge Network Firewall (ENF) zintegrowany z centrami oczyszczania (VAC) obsługuje wyłącznie ruch sieciowy pochodzący spoza sieci OVHcloud.
>

> [!warning]
> Pamiętaj, że powinieneś skonfigurować własne lokalne zapory sieciowe, nawet jeśli Edge Network Firewall został skonfigurowany, ponieważ jego główną rolą jest obsługa ruchu spoza sieci OVHcloud.
>
> Jeśli masz skonfigurowane reguły, zalecamy ich regularne sprawdzanie lub weryfikację przy zmianie sposobu działania usług. Jak wspomniano wyżej, Edge Network Firewall będzie automatycznie włączany w przypadku ataku DDoS, nawet gdy zostanie wyłączony w ustawieniach IP.
>

### Konfigurowanie reguł zapory

Możesz skonfigurować do **20 reguł na adres IP**.

> [!primary]
> Od marca 2026 roku Edge Network Firewall obsługuje reguły dotyczące zakresów portów, oprócz standardowych reguł dla pojedynczych portów.
>
> Korzystając z zakresów portów, możesz chronić aplikacje wymagające wielu kolejnych portów za pomocą jednego wpisu. Dzięki temu konfiguracja mieści się w limicie 20 reguł, eliminując konieczność tworzenia osobnych reguł dla każdego portu.

> [!warning]
> Edge Network Firewall OVHcloud nie może być używany do otwierania portów na serwerze. Aby otworzyć porty na serwerze, należy skonfigurować zaporę systemu operacyjnego zainstalowanego na serwerze.
>
> Więcej informacji znajdziesz w następujących przewodnikach: [Konfiguracja zapory w systemie Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) i [Konfiguracja zapory w systemie Linux za pomocą iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Aby dodać regułę**, kliknij przycisk `+ Add a rule`{.action} w lewym górnym rogu:

| ![add-rule-btn](images/enf_add_rule_new.png) |
|:--:|
| Kliknij `+ Add a rule`{.action}. |

Dla każdej reguły (z wyjątkiem TCP) należy wybrać:

| ![add-rule-btn](images/enf_add_rule_no_tcp_new.png){.thumbnail} |
|:--|
| - Priorytet (od 0 do 19, gdzie 0 jest pierwszą zastosowaną regułą, po której następują kolejne) <br> - Akcję (`Accept`{.action} lub `Deny`{.action}) <br> - Protokół <br> - Źródłowy adres IP (opcjonalnie) |

Dla każdej reguły **TCP** należy wybrać:

| ![add-rule-btn](images/enf_add_rule_tcp_new.png){.thumbnail} |
|:--|
| - Priorytet (od 0 do 19, gdzie 0 jest pierwszą zastosowaną regułą, po której następują kolejne) <br> - Akcję (`Accept`{.action} lub `Deny`{.action}) <br> - Protokół <br> - Źródłowy adres IP (opcjonalnie) <br> - Port źródłowy lub zakres portów (opcjonalnie) <br> - Port docelowy lub zakres portów (opcjonalnie) <br> - Stan TCP (opcjonalnie) <br> - Fragmenty (opcjonalnie) |

Podczas konfigurowania reguły TCP lub UDP z portem lub zakresem portów upewnij się, że pola portu źródłowego i docelowego zawierają pojedynczą liczbę z zakresu od 1 do 65535 (włącznie) lub zakres portów (dwie liczby oddzielone myślnikiem, np. 8887-8888).

> [!primary]
> Zalecamy autoryzację protokołu TCP z opcją "established" (dla pakietów będących częścią wcześniej otwartej/rozpoczętej sesji), pakietów ICMP (dla ping i traceroute) oraz opcjonalnie odpowiedzi DNS UDP z serwerów zewnętrznych (jeśli korzystasz z zewnętrznych serwerów DNS).
>
> **Przykład konfiguracji:**
>
> - Priorytet 0: Zezwól na TCP "established"
> - Priorytet 1: Zezwól na UDP, port źródłowy 53
> - Priorytet 2: Zezwól na ICMP
> - Priorytet 19: Odrzuć IPv4

> [!warning]
> Konfiguracje zapory zawierające wyłącznie reguły trybu `Accept` nie są skuteczne. Musi istnieć instrukcja określająca, który ruch powinien zostać odrzucony przez zaporę. Jeśli taka reguła `Deny` nie zostanie utworzona, wyświetli się ostrzeżenie.
>

**Włączanie/wyłączanie zapory:**

| ![activate-desactivate](images/enf_enable_disable_new.png) |
|:--:|
| `Switch on`{.action}, aby włączyć |

Po potwierdzeniu zapora zostanie włączona lub wyłączona.

Reguły są nieaktywne do momentu wykrycia ataku — wtedy zostają aktywowane. Ta logika może być wykorzystywana dla reguł, które mają być aktywne tylko w przypadku znanego, powtarzającego się ataku.

### Typowe błędy i najlepsze praktyki

#### Ustawianie portu źródłowego i docelowego w tej samej regule

Podczas tworzenia reguł zapory definiowanie jednocześnie portu źródłowego i docelowego jest zwykle błędem konfiguracji, ponieważ porty źródłowe są zazwyczaj przypisywane losowo przez system operacyjny klienta (porty efemeryczne).

Jeśli zablokujesz regułę na konkretnym porcie źródłowym, prawdopodobnie spowoduje to odrzucanie prawidłowego ruchu, gdy port klienta zmieni się w kolejnej sesji. Aby zapewnić łączność, określaj wyłącznie port docelowy (port Twojej usługi).

**Najlepsza praktyka:** Pozostaw pole portu źródłowego puste, chyba że filtrujesz ruch ze specjalistycznego systemu ze statyczną konfiguracją wychodzącą.

#### Duże zakresy portów

Tworzenie reguł zezwalających na ruch w bardzo dużych zakresach portów może stanowić zagrożenie bezpieczeństwa, ponieważ znacząco zwiększa powierzchnię ataku na serwerze. Może to skutkować kilkoma problemami:

- Możesz nieumyślnie ujawnić usługi działające w tle, które nie były przeznaczone do publicznego dostępu, potencjalnie ujawniając informacje o systemie i umożliwiając złośliwym podmiotom skanowanie serwera w poszukiwaniu luk.
- Audyt i rozwiązywanie problemów stają się znacznie trudniejsze, ponieważ trudniej jest sprawdzić, które aplikacje faktycznie komunikują się, co może maskować potencjalne błędy konfiguracji lub naruszenia bezpieczeństwa.
- Duże otwarte zakresy UDP są często wykorzystywane w atakach amplifikacji i refleksji, ponieważ istnieje większe prawdopodobieństwo znalezienia publicznie dostępnych usług. Atakujący mogą sfałszować docelowy adres IP, aby wysyłać małe zapytania do usług w tym otwartym zakresie, które następnie odpowiadają znacznie większymi pakietami. W ten sposób skutecznie wykorzystują Twój serwer do wysyłania ataków DDoS, jednocześnie potencjalnie przeciążając Twoje własne łącze.

**Najlepsza praktyka:** Używaj wyłącznie ograniczonych zakresów dla kolejnych portów wymaganych przez pojedynczą aplikację (np. 5000-5100).

### Przykład konfiguracji

Aby pozostawić otwarte tylko standardowe porty SSH (22), HTTP (80), HTTPS (443) i UDP (53) przy autoryzacji ICMP, zastosuj następujące reguły:

![Przykład konfiguracji](images/exemple.png){.thumbnail}

Reguły są uporządkowane od 0 (pierwsza odczytana reguła) do 19 (ostatnia). Łańcuch reguł zatrzymuje się, gdy jedna z nich zostanie zastosowana do pakietu.

Na przykład pakiet przeznaczony dla portu TCP 80 zostanie przechwycony przez regułę 2 i kolejne reguły nie zostaną zastosowane. Pakiet przeznaczony dla portu TCP 25 zostanie przechwycony dopiero przez ostatnią regułę (19), która go zablokuje, ponieważ zapora nie zezwala na komunikację na porcie 25 w poprzednich regułach.

> [!warning]
> Powyższa konfiguracja jest jedynie przykładem i powinna być używana wyłącznie jako odniesienie, jeśli reguły nie mają zastosowania do usług hostowanych na Twoim serwerze. Konfiguracja reguł zapory musi odpowiadać usługom hostowanym na Twoim serwerze. Nieprawidłowa konfiguracja reguł zapory może spowodować zablokowanie prawidłowego ruchu i niedostępność usług serwera.
>

### Filtrowanie ataków — działanie centrum oczyszczania

Nasza Infrastruktura Anty-DDoS (VAC) działa automatycznie. Proces mitygacji realizowany jest za pośrednictwem zautomatyzowanego centrum oczyszczania. To tutaj nasza zaawansowana technologia dokładnie analizuje pakiety i stara się usunąć ruch DDoS, jednocześnie pozwalając na przejście prawidłowego ruchu.

Wszystkie adresy IP OVHcloud są objęte automatyczną mitygacją. W przypadku wykrycia złośliwego ruchu centrum oczyszczania zostaje aktywowane. Stan ten jest oznaczony statusem "Forced" dla danego adresu IP. W tym momencie aktywny jest również Edge Network Firewall. Sytuacja wraca do normy po zmitygowaniu ataku i braku dalszych podejrzanych działań.

> [!success]
> **Wskazówki**
>
> Możesz tworzyć reguły zapory stosowane wyłącznie podczas ataków, które będą aktywowane dopiero po wykryciu ataku. W tym celu utwórz reguły Edge Network Firewall, ale pozostaw je wyłączone.
>

> [!warning]
> Jeśli nasza Infrastruktura Anty-DDoS mityguje atak, reguły Edge Network Firewall zostaną ostatecznie zastosowane, nawet jeśli wyłączyłeś zaporę. Jeśli wyłączyłeś zaporę, pamiętaj o usunięciu również reguł.
>
> Pamiętaj, że Infrastruktura Anty-DDoS nie może zostać wyłączona dla usługi. Wszystkie produkty OVHcloud są dostarczane w ramach ochrony i nie można tego zmienić.
>

## Network Security Dashboard

Aby uzyskać szczegółowe informacje na temat wykrytych ataków i wyników działań centrum oczyszczania, zachęcamy do zapoznania się z naszym [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Podsumowanie

Po zapoznaniu się z tym przewodnikiem powinieneś być w stanie skonfigurować Edge Network Firewall w celu poprawy bezpieczeństwa Twoich usług OVHcloud.

## Sprawdź również

- [Ochrona serwera gier za pomocą zapory aplikacyjnej](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

- [Configuring Anti-DDoS for Solana on Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/blockchain_anti_ddos)
Dołącz do [grona naszych użytkowników](/links/community).
