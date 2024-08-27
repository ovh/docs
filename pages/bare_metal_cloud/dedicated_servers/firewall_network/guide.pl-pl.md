---
title: 'Aktywacja i konfiguracja Edge Network Firewall'
excerpt: 'Dowiedz się, jak skonfigurować Edge Network Firewall dla Twoich usług'
updated: 2024-01-05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Aby chronić usługi dostępne dla klientów korzystających z publicznych adresów IP, OVHcloud udostępniło zaporę ogniową, skonfigurowaną i zintegrowaną z **infrastrukturą Anty-DDoS**: Edge Network Firewall Pozwala to ograniczyć ekspozycję usługi na ataki DDoS, usuwając określone przepływy sieciowe pochodzące spoza sieci OVHcloud.

**Ten przewodnik wyjaśnia, jak skonfigurować Edge Network Firewall dla Twoich usług.**

> [!primary]
>
> Więcej informacji na temat rozwiązania Anty-DDoS znajdziesz na naszej stronie WWW: <https://www.ovhcloud.com/pl/security/anti-ddos/>.
> 

| ![global-schema](images/global_schema.png) |
|:—:|
| Anty-DDoS - schemat infrastruktury i usług ochrony gier w OVHcloud |

## Wymagania początkowe

- Usługa OVHcloud udostępniona na dedykowanym publicznym adresie IP ([Dedicated server](/links/bare-metal/bare-metal), [VPS](https://www.ovhcloud.com/pl/vps/), [Public Cloud instance](https://www.ovhcloud.com/pl/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/) itd.)
- Dostęp do [OVHcloud Control Panel](/links/manager)

> [!warning]
> Ta funkcja może być niedostępna lub ograniczona na serwerach [**Eco** product line](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, odwiedź stronę pod adresem [comparison page](https://eco.ovhcloud.com/pl/compare/).

## W praktyce

Edge Network Firewall zmniejsza ekspozycję na ataki DDoS, umożliwiając użytkownikom kopiowanie niektórych reguł firewall serwera na obrzeża sieci OVHcloud. Blokuje to przychodzące ataki jak najbliżej źródła, zmniejszając ryzyko przeciążenia zasobów serwerów lub połączeń z szafami w przypadku poważnych ataków.

### Aktywacja opcji Edge Network Firewall

> [!primary]
>
> Edge Network Firewall chroni określony adres IP powiązany z serwerem (lub usługą). Jeśli posiadasz serwer z wieloma adresami IP, skonfiguruj każdy z nich oddzielnie.
> 

W Panelu klienta OVHcloud kliknij sekcję `Bare Metal Cloud`{.action}, następnie kliknij menu `Sieć`{.action} i otwórz `Publiczne adresy IP`{.action}. Możesz skorzystać z menu rozwijanego pod **"Moje publiczne adresy IP i powiązane usługi"**, aby filtrować usługi według kategorii.

![filter service](images/selectservice_cut.png){.thumbnail}

Następnie kliknij `...`{.action} Przycisk po prawej stronie odpowiedniego adresu IPv4 i najpierw wybierz `Utwórz Firewall`{.action}.

![Enabling the Network Firewall](images/firewallcreation2022.png){.thumbnail}

Następnie wymagane jest potwierdzenie. Firewall zostanie utworzony i będziesz mógł skonfigurować reguły.

> [!primary]
> Przycisk Utwórz firewall`{.action} będzie dostępny tylko dla adresów IP, które nigdy nie skonfigurowały firewalla. Jeśli nie pierwszy raz konfigurujesz firewall, możesz pominąć ten krok. 
>

| ![Enabling the configuration](images/activationconfig.png) |
|:—:|
| Kliknij pozycję `Edge Network Firewall configuration`{.action}, aby rozpocząć konfigurację. |

Na tej stronie można wybrać opcję **Aktywuj** lub **Wyłącz** zaporę za pomocą przycisku switch.
Można to również zrobić w inny sposób wyjaśniony poniżej.

Dla każdego adresu IP można skonfigurować do **20 reguł **.

> [!warning]
>
> Edge Network Firewall jest automatycznie włączany w momencie wykrycia ataku DDoS i nie można go wyłączyć przed zakończeniem ataku. Wszystkie reguły skonfigurowane w firewallu są zatem stosowane podczas ataku. Taka logika pozwala naszym klientom na przeniesienie reguł firewalla serwera na brzeg sieci OVHcloud w czasie ataku.
>
> Pamiętaj, że nawet jeśli Edge Network Firewall został skonfigurowany, powinieneś skonfigurować własne lokalne zapory sieciowe, ponieważ jego główną rolą jest obsługa ruchu spoza sieci OVHcloud.
>
> Jeśli masz skonfigurowane reguły, zalecamy ich regularne sprawdzanie lub zmienianie sposobu działania usług. Jak wspomniano wyżej, Edge Network Firewall będzie automatycznie włączany w przypadku ataku DDoS, nawet gdy zostanie wyłączony w ustawieniach IP.
>

> [!primary]
>
> - Fragmentacja UDP jest domyślnie zablokowana (DROP). Jeśli używasz sieci VPN, to podczas aktywacji firewalla Edge Network, pamiętaj, aby poprawnie skonfigurować maksymalną jednostkę transmisji (MTU). Na przykład, korzystając z OpenVPN, możesz sprawdzić "MTU test".
> - Zintegrowany z centrami szybkiej kontroli (VAC) Edge Network Firewall (ENF) obsługuje wyłącznie ruch sieciowy spoza sieci OVHcloud.
>

### Konfigurowanie usługi Edge Network Firewall

> [!warning]
> Otwieranie portów na serwerze nie jest możliwe przy użyciu firewalla OVHcloud Edge Network Firewall. Aby otworzyć porty na serwerze, należy przejść przez zaporę systemu operacyjnego zainstalowanego na serwerze. 
>
> Więcej informacji znajdziesz w następujących przewodnikach: [Configuring the firewall on Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) i [Configuring the firewall on Linux with iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Aby dodać regułę:**

| ![add-rule-btn](images/enf_add_rule.png) | 
|:—:| 
| Kliknij opcję `Dodaj regułę`{.action}. |

Dla każdej reguły (poza TCP) wybierz:

| ![add-rule-btn](images/enf_add_rule_other_than_tcp.png) | 
|:—| 
| &bull; Priorytet (od 0 do 19, gdzie 0 jest pierwszą zastosowaną regułą) <br>&bull; Akcja (`Accept`{.action} lub `Deny`{.action}) <br>&bull; Protokół <br>&bull; IP źródłowe (opcjonalnie) |

Dla każdej reguły **TCP** należy wybrać:

| ![add-rule-btn](images/enf_add_rule_tcp.png) | 
|:—| 
| &bull; Priorytet (od 0 do 19, gdzie 0 jest pierwszą zastosowaną regułą) <br>&bull; Akcja (`Accept`{.action} lub `Deny`{.action}) <br>&bull; Protokół <br>&bull; IP źródłowe (opcjonalnie) <br>&bull; Port źródłowy (opcjonalnie) <br>&bull; Port docelowy (opcjonalnie) <br>&bull; Stan TCP (opcjonalnie) <br>&bull; Fragmenty (opcjonalnie)|

> [!primary]
> Zalecamy autoryzację protokołu TCP za pomocą opcji `established` (dla pakietów, które są częścią poprzednio otwartej/uruchomionej sesji), pakietów ICMP (dla ping i traceroute) oraz opcjonalnie odpowiedzi DNS UDP zewnętrznych serwerów (jeśli używasz zewnętrznych serwerów DNS).
>
> **Przykład konfiguracji:**
>
> - Priorytet 0: Zezwalaj na TCP `established`
> - Priorytet 1: Zezwalaj na UDP, port źródłowy 53
> - Priorytet 2: Zezwalaj na ICMP
> - Priorytet 19: Odrzuć IPv4

> [!warning]
> Konfiguracje firewalla zawierające tylko reguły trybu "Akceptuj" nie są w ogóle skuteczne. Instrukcja określająca, który ruch powinien zostać zrzucony przez zaporę. Jeśli nie zostanie utworzona taka reguła, wyświetli się ostrzeżenie.
> 

**Włącz firewall:**

| ![activate-desactivate](images/enf_enabled_button_01.png) |
|:—:|
| `Włącz`{.action}, aby włączyć |

Po potwierdzeniu firewall zostanie włączony.

**Wyłącz firewall:**

| ![activate-desactivate](images/enf_enabled_button_04.png) |
|:—:|
| `Włącz`{.action}, aby włączyć |

Po potwierdzeniu konfiguracja firewalla zostanie wyłączona.

Reguły są dezaktywowane do momentu wykrycia ataku, a następnie zostają aktywowane. Ta logika może być używana dla reguł, które są aktywne tylko wtedy, gdy nadchodzi znany powtarzalny atak.

### Przykład konfiguracji

Aby pozostawić otwarte tylko standardowe porty SSH (22), HTTP (80), HTTPS (443), UDP (53) podczas autoryzacji ICMP, należy przestrzegać następujących zasad:

![Configuration example](images/exemple.png){.thumbnail}

Reguły są uporządkowane od 0 (pierwsza odczytana reguła) do 19 (ostatnia odczytana reguła). Reguły zatrzymują się, gdy jedna z nich dotyczy odebranego pakietu.

Na przykład pakiet przeznaczony dla portu 80/TCP zostanie przechwycony przez regułę 2 i kolejne reguły nie zostaną zastosowane. Pakiet przeznaczony dla portu 25/TCP zostanie przechwycony tylko przez ostatnią regułę (19), która zablokuje go, ponieważ zapora nie zezwala na komunikację na porcie 25 w poprzednich regułach.

> [!warning]
> Powyższa konfiguracja jest jedynie przykładem i powinna być używana jedynie jako odniesienie, jeśli reguły nie mają zastosowania do usług hostowanych na Twoim serwerze. Konfiguracja reguł w firewallu jest niezbędna, abyś mógł dopasować reguły do usług hostowanych na Twoim serwerze. Nieprawidłowa konfiguracja reguł firewall może spowodować zablokowanie prawidłowego ruchu i niedostępność usług serwera.
> 

### Filtrowanie ataku — działanie centrum oczyszczania

Infrastruktura Anty-DDoS (VAC) może działać w dwóch trybach: **automatyczne** i **stałe**. Proces mitygacji realizowany jest za pośrednictwem zautomatyzowanego centrum oczyszczania. To w tym miejscu nasze zaawansowane technologie wnikliwie analizują pakiety i podejmują próby usunięcia ruchu DDoS, umożliwiając jednocześnie przepływ pożadanego ruchu.

- **Domyślna wartość dla automatycznego filtrowania**: Wszystkie adresy IP OVHcloud są automatycznie filtrowane. Zazwyczaj jest to najlepszy wybór dla Twojej usługi. W przypadku wykrycia złośliwego ruchu, centrum oczyszczania zostaje włączone. Stan ten jest wskazywany przez status "Wymuszony" dla danego adresu IP. W tym momencie Edge Network Firewall jest również aktywny. Sytuacja wraca do normy, gdy atak jest złagodzony i nie obserwuje się już podejrzanej aktywności.

- **Stały tryb filtrowania** można włączyć lub wyłączyć w Panelu klienta OVHcloud. Dzięki stałej mitygacji stosujesz na stałe pierwszy poziom filtrowania, dzięki czemu cały ruch będzie zawsze przechodził przez system mitygacji przed dotarciem do serwera. Nie zalecamy włączania tej opcji przez dłuższy czas, jeśli nie występują wahania czasu oczekiwania spowodowane zbyt częstym przekierowywaniem ruchu przez centrum szybkiej kontroli.

Pamiętaj, że w porównaniu do trybu automatycznego, po jego włączeniu następuje **no** wzrost poziomu ochrony.

Aby go aktywować, wykonaj następujące kroki:

- Kliknij menu `Bare Metal Cloud`{.action}.
- Przejdź do `Network`{.action} na lewym pasku bocznym.
- Przejdź do sekcji `IP`{.action}.

| ![menu-ipv4](images/mitigation_menu.png) |
|:—:|
| Następnie kliknij `...`{.action} Przycisk po prawej stronie odpowiedniego adresu IPv4. |


| ![mitigation-option](images/mitigation_menu_step_2.png) |
|:—:|
| Wybierz `Filtrowanie: tryb stały`{.action}. |


> [!success]
> **Porady**
>
> Możesz tworzyć reguły firewall tylko dla ataków, które będą stosowane po wykryciu ataku. W tym celu należy utworzyć reguły zapory sieci Edge, ale są one wyłączone.
>

> [!warning]
> Jeśli nasza infrastruktura Anty-DDoS mityguje atak, reguły Firewalla Edge Network zostaną zastosowane również po wyłączeniu firewalla. Jeśli wyłączyłeś firewall, pamiętaj, aby usunąć również reguły.
> 
> Pamiętaj, że nasza infrastruktura anty-DDoS nie może być wyłączona w usłudze. Wszystkie produkty OVHcloud są objęte ochroną i nie można tego zmienić.
>

## Network Security Dashboard

Aby uzyskać szczegółowe informacje na temat wykrytych ataków i wyników operacji wykonywanych przez centrum kontroli, zachęcamy do zapoznania się z naszym rozwiązaniem [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Zakończenie

Po przeczytaniu tego tutoriala będziesz potrafił skonfigurować Edge Network Firewall w celu zwiększenia bezpieczeństwa usług OVHcloud.

## Sprawdź również

- [Protecting a game server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
