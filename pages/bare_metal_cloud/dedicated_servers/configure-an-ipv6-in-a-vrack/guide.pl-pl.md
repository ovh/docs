---
title: "Konfiguracja bloku IPv6 w sieci vRack na serwerze dedykowanym"
excerpt: "Skonfiguruj publiczny blok adresów IPv6 do użytku z prywatną siecią OVHcloud vRack na serwerze dedykowanym."
updated: 2026-03-13
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Cel

Sieć vRack stanowi globalną sieć prywatną łączącą różne produkty OVHcloud, umożliwiając tworzenie zaawansowanych rozwiązań sieciowych. Poza ułatwianiem połączeń prywatnych obsługuje również routing publicznych adresów IP.

**Niniejszy przewodnik skupia się na konfiguracji dodatkowego bloku IPv6 w sieci vRack.**

> [!primary]
>
> vRack obsługuje publiczny routing IPv4 i IPv6 z blokami adresów Additional IP. Instrukcje dotyczące konfiguracji bloków IPv4 znajdziesz w tym przewodniku: [Konfiguracja bloku IP w sieci vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> Niniejszy artykuł dotyczy konfiguracji Additional IP w sieci vRack. Jeśli szukasz wskazówek dotyczących konfiguracji Additional IP wraz z głównym adresem IP (na publicznym interfejsie sieciowym), zapoznaj się z następującymi artykułami:
>
> - IPv4:
>     - [Konfiguracja aliasowania IP na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Konfiguracja aliasowania IP na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
> - IPv6:
>     - [Konfiguracja IPv6 na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Konfiguracja IPv6 na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Konfiguracja IPv6 na instancji Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Wprowadzenie

IPv6 rewolucjonizuje sieciowanie w ramach sieci vRack OVHcloud, rozwiązując ograniczenia IPv4 i wprowadzając funkcje dla nowoczesnego Internetu. Jego wdrożenie jest bezpośrednią odpowiedzią na potrzebę bardziej rozbudowanych, bezpiecznych i zaawansowanych architektur internetowych. Oto kluczowe korzyści z integracji IPv6 z vRack:

- **Elastyczność dla zaawansowanych sieci**: IPv6 znacząco zwiększa przestrzeń adresową, zapewniając elastyczność niezbędną do skalowania infrastruktury, zarządzania scenariuszami failover i obsługi większych rozwiązań. Dzięki temu sieci mogą rosnąć i dostosowywać się bez ograniczeń przestrzeni IPv4.

- **Hierarchiczny routing i segmentacja**: IPv6 umożliwia wydajny hierarchiczny routing i logiczną segmentację infrastruktury. Poprawia to zarządzalność sieci i bezpieczeństwo, idealne do odsprzedaży maszyn wirtualnych z dedykowanymi podsieciami lub organizowania infrastruktury w odrębne segmenty.

- **Niska latencja**: Natywna, end-to-end łączność IPv6 może być czynnikiem sprzyjającym dla usług wrażliwych na opóźnienia, takich jak strumieniowanie multimediów, ponieważ wiele nowoczesnych sieci dostawców jest zbudowanych natywnie w IPv6. W takich sieciach korzystanie z usług IPv4 powoduje dodatkowe opóźnienia (i koszty).

Dzięki wykorzystaniu IPv6 w sieci vRack użytkownicy OVHcloud mogą cieszyć się bezpieczniejszym, wydajniejszym i bardziej skalowalnym środowiskiem sieciowym, gotowym na wymagania nowoczesnego użytkowania Internetu.


## Wymagania wstępne

- Usługa [vRack](/links/network/vrack) aktywowana na Twoim koncie
- Serwer [kompatybilny z vRack](/links/network/vrack) podłączony do sieci vRack

<!-- CP-NAV-START:network-vrack -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [vRack](/links/control-panel/network-vrack)
- **Ścieżka nawigacji:** `Network`{.action} > `Prywatna sieć vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Ta funkcja może być niedostępna lub ograniczona na serwerach z [linii produktów **Eco**](/links/bare-metal/eco-about).
>
> Więcej informacji znajdziesz na naszej [stronie porównania](/links/bare-metal/eco-compare).

## W praktyce

### Uzyskanie nowego dodatkowego bloku IPv6

Podczas zamawiania nowego dodatkowego bloku IPv6 należy pamiętać, że przydział jest regionalny. Oznacza to, że otrzymany blok IPv6 będzie powiązany z konkretnym regionem, określającym miejsce, w którym ruch publiczny wchodzi do sieci vRack (a zatem gdzie znajduje się brama sieciowa).

/// details | Zamów nowy dodatkowy blok IPv6

Nowy dodatkowy blok IPv6 możesz zamówić [tutaj](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip).

![strona konfiguracji](images/500.png){.thumbnail}

Następnie postępuj zgodnie z instrukcjami krok po kroku.

Nowy dodatkowy blok IPv6 będzie dostępny na stronie konfiguracji sieci vRack.

///

### Konfiguracja IPv6 w sieci vRack (tryb podstawowy)

W tej sekcji przedstawiamy podstawową konfigurację IPv6 dla hostów podłączonych do sieci vRack.

![Konfiguracja IPv6 w sieci vRack](images/20240418-03.png){.thumbnail}

Powyższy przykład przedstawia dwa hosty z interfejsami po stronie vRack skonfigurowanymi z publicznymi adresami IPv6. Jeden host jest skonfigurowany ręcznie, a drugi ma adres IP przypisany automatycznie przy użyciu SLAAC. Wszystkie adresy IP należą do pierwszej podsieci /64 z podanego publicznego bloku Additional IPv6 /56. Oba wykorzystują interfejs vRack do publicznej łączności IPv6.

Domyślna brama dla pierwszej podsieci /64 (mostkowanej) to pierwszy adres bloku /56. W tym przykładzie jest to `2001:41d0:abcd:ef00::1`. Jest ona dystrybuowana przez SLAAC, ale musi być skonfigurowana ręcznie (jako trasa domyślna), jeśli SLAAC jest wyłączone. Zobacz sekcję **Statyczna konfiguracja IP** poniżej.

/// details | Przez Panel klienta OVHcloud

![zarządzanie vRack](images/700.png){.thumbnail}

Po lewej stronie wyświetlona jest lista możliwych opcji (usług kwalifikujących się do konfiguracji).

Po prawej stronie widoczne jest to, co jest już skonfigurowane w sieci vRack.

Wybierz nowy dodatkowy blok IPv6 i dodaj go do sieci vRack.

![wybór vRack](images/701.png){.thumbnail}

Nowy dodatkowy blok IPv6 jest teraz dodany do sieci vRack.

### Statyczna konfiguracja IP

Po przypisaniu bloku Additional IPv6 /56 do sieci vRack pierwsza podsieć /64 jest z nią mostkowana.

Oznacza to, że możesz łatwo używać takich adresów IP na swoich hostach ze statyczną konfiguracją IP na interfejsach vRack (patrz następna sekcja, przykładowa konfiguracja po stronie hosta).

### Automatyczna konfiguracja IP (SLAAC)

Aby uprościć adresowanie IP w sieci, możesz użyć SLAAC. Można ją włączyć tylko per-mostkowana-podsieć i można ją włączyć dla pierwszej podsieci /64 bloku (ta zawsze jest mostkowana) w dowolnym momencie, używając tego przycisku:

![włączanie SLAAC](images/702.png){.thumbnail}

Nie zapomnij skonfigurować SLAAC na swoim hoście.

///


/// details | Przez APIv6 (metoda alternatywna)

### Przypisanie dodatkowego bloku IPv6 do sieci vRack

Po zamówieniu dodatkowego bloku IPv6 jest on automatycznie przypisywany do sieci vRack.

Jeśli usunąłeś ten nowy dodatkowy blok IPv6 z sieci vRack, możesz go ponownie przypisać przy użyciu tej metody POST:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

Jak w poniższym przykładzie:

![api post dodaj blok](images/post-ipv6.png){.thumbnail}

Użyj następującego wywołania, aby zweryfikować, czy blok IPv6 został przypisany:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

Jak w poniższym przykładzie:

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Widzimy teraz nasz blok skonfigurowany w sieci vRack. Następnym krokiem jest konfiguracja hosta lub maszyn wirtualnych.

### Statyczna konfiguracja IP

Po przypisaniu bloku Additional IPv6 /56 do sieci vRack pierwsza podsieć /64 jest z nią mostkowana. Oznacza to, że możesz łatwo używać takich adresów IP na swoich hostach.

Sprawdźmy dokładnie, która podsieć jest mostkowana:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

Jak w poniższym przykładzie:

![GET podsieci mostkowanej w sieci vRack](images/20240418-05.png){.thumbnail}

Aby uzyskać więcej szczegółów, użyj tego wywołania:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Jak w poniższym przykładzie:

![GET podsieci mostkowanej w sieci vRack](images/20240418-06.png){.thumbnail}

Należy pamiętać, że autokonfiguracja IP (SLAAC) jest domyślnie wyłączona.

### Automatyczna konfiguracja IP (SLAAC)

Aby uprościć adresowanie IP w sieci, możesz użyć SLAAC. Można ją włączyć tylko per-mostkowana-podsieć przy użyciu tej metody PUT:

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

Jak w poniższym przykładzie:

![Wywołanie API POST włącz SLAAC](images/20240418-07.png){.thumbnail}

Nie zapomnij skonfigurować SLAAC na swoim hoście.

///

### Zarządzanie przepustowością publiczną IP w sieci vRack

Domyślnie bloki Additional IP routowane przez sieć vRack korzystają ze standardowej publicznej przepustowości 5 Gbps w Europie/Kanadzie/USA i 100 Mbps w regionach APAC. Szczegółowy przegląd dostępności znajdziesz w opcjach routingu publicznego na naszej [stronie produktu vRack](/links/network/vrack).

W miarę skalowania wymagań infrastrukturalnych użytkownicy mogą potrzebować większej przepustowości do obsługi usług o dużym natężeniu ruchu publicznego, dla których OVHcloud udostępnia płatne opcje przepustowości. Należy pamiętać, że opcje przepustowości są stosowane **per-vRack i per-region**. Ponieważ adresy Additional IP są powiązane z regionem, każda modyfikacja przepustowości będzie dotyczyć wszystkich adresów IP (zarówno IPv4, jak i IPv6) routowanych do konkretnej sieci vRack w danym regionie.

/// details | Podczas procesu zamawiania Additional IP

#### Wybór przepustowości publicznej podczas zamawiania Additional IP

Domyślna przepustowość publiczna może zostać zmieniona podczas zamawiania nowego bloku Additional IP z siecią vRack jako backendem.

Aby zamówić nowy dodatkowy blok IPv6:

- Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
- Otwórz sekcję `Sieć`{.action} na lewym pasku bocznym.
- Wybierz `Publiczne adresy IP`{.action}.
- Kliknij przycisk `Zamów adresy IP`{.action} w pobliżu górnej części strony.
- Wybierz wersję IP, a następnie sieć vRack, do której chcesz podłączyć Additional IP.
- Wybierz region, w którym ma znajdować się Additional IP.
- Wybierz przepustowość publiczną, którą chcesz zastosować do sieci vRack dla tego konkretnego regionu.
- Wypełnij pozostałe opcje w razie potrzeby, a następnie sfinalizuj zamówienie.

///

/// details | Ze strony zarządzania siecią vRack

#### Modyfikacja przepustowości publicznej vRack na stronie zarządzania

W przypadku bloków Additional IP już podłączonych do sieci vRack przepustowością można zarządzać bezpośrednio przez stronę konfiguracji usługi.

Aby uzyskać dostęp do interfejsu zarządzania:

- Otwórz `Sieć`{.action} na lewym pasku bocznym Panelu klienta.
- Wybierz `Prywatna sieć vRack`{.action}.
- W kolumnie "Publiczne IP i przepustowość" kliknij przycisk `Zarządzaj`{.action} przy odpowiedniej sieci vRack.

Strona zarządzania podzielona jest na dwie zakładki:

- **Wszystkie podłączone usługi**: Na razie przekierowuje do klasycznej strony zarządzania siecią vRack. Wkrótce wyświetli wszystkie produkty (serwery, projekty Cloud itp.) aktualnie powiązane z siecią vRack w nowy sposób.
- **Publiczny routing IP**: Zarządza opcjami routingu publicznego IP sieci vRack, w tym przepustowością publiczną.

Aby zmodyfikować przepustowość publiczną:

- Przejdź do zakładki `Publiczny routing IP`{.action}.
- Interfejs wyświetla indywidualne okna zarządzania dla każdego regionu (np. `eu-west-par`) powiązanego z siecią vRack, zawierające listę wszystkich adresów IP podłączonych do tego konkretnego regionu.
- W oknie odpowiedniego regionu kliknij przycisk `Zmień przepustowość`{.action}.
- Wybierz żądaną opcję przepustowości w panelu wyświetlonym po prawej stronie, a następnie kliknij `Złóż zamówienie`{.action}, aby zatwierdzić zamówienie.
- Po opłaceniu wybrana przepustowość powinna być dostępna dla sieci vRack w wybranym regionie po kilku minutach.

> [!primary]
>
> Opłaty za pierwszy miesiąc są naliczane proporcjonalnie do pozostałych dni, a pełna stawka obowiązuje od następnego cyklu rozliczeniowego.
>

Wybrane ulepszenie przepustowości zostanie zastosowane do wszystkich adresów IP w danym regionie dla wybranej sieci vRack.

///

#### Polecenia po stronie hosta

/// details | Statyczna konfiguracja IP

W podstawowej konfiguracji możesz chcieć skonfigurować adres IP i routing ręcznie. Jest to również zalecany sposób, gdy Twoja maszyna działa jako router (patrz sekcja [konfiguracja routowanej podsieci](#routedmode)) i ma włączony tryb ipv6.forwarding.

Najpierw dodajmy adres IP na interfejsie vRack (w naszym przykładzie "eth1"):

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

Pamiętaj, że pierwszy adres IP w bloku, `2001:41d0:abcd:ef00::1/64`, jest adresem IP bramy sieciowej i nie może być używany do adresowania hostów.

Opcjonalnie, jeśli chcesz używać interfejsu vRack jako głównego dla ruchu IPv6, domyślną trasę można skonfigurować w następujący sposób:

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Na koniec uruchom interfejs (i zweryfikuj skonfigurowany na nim adres IP):

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Automatyczna konfiguracja IP (SLAAC)

Aby użyć automatycznej konfiguracji, upewnij się, że interfejs jest skonfigurowany w następujący sposób:

Najpierw zezwólmy hostowi na akceptowanie Router Advertisements (do autokonfiguracji) na interfejsie vRack (w naszym przykładzie "eth1"):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

Pamiętaj, że to ustawienie nie zadziała, jeśli w systemie jest włączone ipv6.forwarding. W takim przypadku zapoznaj się z sekcją [Automatyczna konfiguracja IP dla routowanej podsieci](#host-side), aby uzyskać więcej szczegółów.

Następnie po prostu uruchom interfejs:

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

Po chwili (konfiguracja musi się rozpropagować) na interfejsie powinien być widoczny konkretny adres IPv6 (z flagami <i>global</i> i <i>dynamic</i>).

///

#### Weryfikacja konfiguracji

/// details | Lokalna

Najprostszym testem jest ping lokalnego adresu IP na hoście:

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Zdalna

Następnie zweryfikujmy łączność ze zdalnego hosta:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Konfiguracja IPv6 w sieci vRack dla trybu routowanego <a name="routedmode"></a>

W tej sekcji przedstawiamy bardziej zaawansowaną konfigurację IPv6, w której hosty podłączone do sieci vRack działają jako routery dla hostowanych maszyn wirtualnych. Takie maszyny wirtualne mają delegowane podsieci z głównego bloku IPv6 (przedstawione kolorem pomarańczowym na schemacie poniżej).

![Konfiguracja IPv6 w sieci vRack dla trybu routowanego](images/routed-mode-20240513.png){.thumbnail}

Ścieżka ruchu jest następująca: ruch przychodzący do danej maszyny wirtualnej (z określoną podsiecią) jest routowany przez sieć vRack klienta, najpierw do określonego hosta (z adresem next-hop), a następnie przy użyciu łącza lokalnego (lub vSwitch - czarne łącze fd00::/64 na schemacie) do konkretnej maszyny wirtualnej.
Ruch powrotny z takiej maszyny wirtualnej powinien używać trasy domyślnej przez pierwszą część lokalnego łącza (czarnego, fd00::1), a następnie (ewentualnie domyślnej) trasy z hosta do jego bramy sieciowej.

Dla definicji routowanej podsieci można użyć dowolnego rozmiaru prefiksu między /57 a /64.

Domyślna brama dla hosta to pierwszy adres z bloku /56, który w tym przykładzie wynosi: `2001:41d0:abcd:ef00::1`. Domyślna brama używana przez maszyny wirtualne to adres ich hosta przez łącze lokalne, który w tym przykładzie wynosi `fd00::1`.

#### Definiowanie routowanej podsieci

/// details | Działania w Panelu klienta OVHcloud

Po dodaniu Additional IP do sieci vRack możesz zarządzać routowaną podsiecią, klikając przycisk `Dodaj podsieć`{.action}.

![wybór vRack](images/600.png){.thumbnail}

Aby utworzyć routowaną podsieć, musimy najpierw zdefiniować:

- **podsieć w notacji CIDR** (rozmiar między /57 a /64)
- **adres next-hop** (czyli adres IPv6 hosta)

Pamiętaj, że dana podsieć nie może pokrywać się z żadną inną zdefiniowaną podsiecią, a adres next-hop musi należeć do pierwszej części (mostkowanej podsieci /64) prefiksu Additional IPv6.

![Definicja routowanej podsieci w notacji CIDR i adres next-hop](images/800.png){.thumbnail}

Utworzono routowaną podsieć `2001:41d0:abcd::ef10::/60` osiągalną przez next-hop `2001:41d0:abcd::ef00::2`.

![Utworzona routowana podsieć z wyświetlonym adresem next-hop](images/801.png){.thumbnail}

///

/// details | Polecenia APIv6

Aby utworzyć routowaną podsieć, musimy najpierw zdefiniować:

- **podsieć w notacji CIDR** (rozmiar między /57 a /64)
- **adres next-hop** (czyli adres IPv6 hosta)

Pamiętaj, że dana podsieć nie może pokrywać się z żadną inną zdefiniowaną podsiecią, a adres next-hop musi należeć do pierwszej części (mostkowanej podsieci /64) prefiksu Additional IPv6.

Poniższy przykład pokazuje, jak zdefiniować taką podsieć:

![Wywołanie API do zdefiniowania routowanej podsieci z next-hop](images/20240418-02.png){.thumbnail}

W tym przypadku zdefiniowaliśmy routowaną podsieć `2001:41d0:abcd:ef10::/60`, która zostanie delegowana do maszyny wirtualnej hostowanej na: `2001:41d0:abcd:ef00::2`.

///

#### Konfiguracja po stronie hosta <a name="host-side"></a>

/// details | Statyczna konfiguracja IP hosta (zalecana)

W przypadku hostowania maszyn wirtualnych zdecydowanie zalecamy stosowanie statycznej konfiguracji na hoście.

Skonfiguruj adres IPv6, uruchom interfejs i (opcjonalnie) dodaj trasę domyślną przez interfejs vRack:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Automatyczna konfiguracja IP (SLAAC) dla hosta

W niektórych przypadkach możesz chcieć skonfigurować interfejsy z SLAAC i przekazywaniem IP jednocześnie.

Pamiętaj, że wiąże się to z dodatkowymi ryzykami (takimi jak utrata dostępu nie tylko do hosta, ale także do wszystkich maszyn wirtualnych) i nie jest zalecane.

Upewnij się, że przekazywanie IPv6 jest włączone:

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Skonfiguruj akceptowanie Router Advertisements (na interfejsie vRack eth1 w naszym przykładzie):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Konfiguracja routowanej podsieci na hoście i wewnątrz maszyny wirtualnej

Aby host wiedział, co zrobić z pakietami adresowanymi do nowej routowanej podsieci (która będzie na maszynie wirtualnej), musimy dodać dla niej specyficzną trasę.

W naszym przykładzie do routingu użyjemy łącza veth z adresem fd00::2/64 wewnątrz maszyny wirtualnej.

Pamiętaj, że jest to bardzo specyficzne dla zainstalowanego hypervisora (mogą to być interfejsy vSwitch lub veth). W tym celu zapoznaj się z przewodnikiem dotyczącym sieci konkretnego hypervisora.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Konfiguracja routowanej podsieci wewnątrz maszyny wirtualnej

Pamiętaj, że łącze używane między hostem a maszynami wirtualnymi jest bardzo specyficzne dla zainstalowanego hypervisora (mogą to być interfejsy vSwitch lub veth). W tym celu zapoznaj się z przewodnikiem dotyczącym sieci konkretnego hypervisora.

Dodaj nasz routowany blok IP wewnątrz maszyny wirtualnej, aby mogła ona akceptować pakiety:

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Dodaj trasę domyślną na maszynie wirtualnej, aby ruch mógł z niej wychodzić:

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Weryfikacja konfiguracji

/// details | Lokalna, na hoście

Ping z hosta do kontenera (przy użyciu łącza lokalnego):

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Ping z hosta do kontenera (przy użyciu routowanej podsieci):

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Sprawdź trasę do podsieci /60 na hoście:

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Lokalna, na maszynie wirtualnej

Najpierw sprawdź tabelę routingu:

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Ping interfejsu link-local hosta:

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Ping globalnego interfejsu hosta:

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Na koniec przeprowadźmy ping zewnętrznego adresu IPv6 z maszyny wirtualnej:

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Lub, używając nazwy domeny:

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | Ze zdalnego hosta

Sprawdźmy łączność z maszyną wirtualną spoza sieci OVHcloud:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

I traceroute ze zdalnego hosta (gdzieś w Internecie):

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

W tym przykładzie:

- hop 10 - adres IP naszego hosta
- hop 11 - adres IP naszej maszyny wirtualnej

///

## Wiele lokalizacji regionalnych a globalna sieć vRack

Technologia vRack OVHcloud umożliwia organizacjom łączenie serwerów w różnych lokalizacjach tak, jakby znajdowały się w tym samym centrum danych.
Z drugiej strony usługi takie jak Additional IPv6 są regionalne, co oznacza, że ich funkcjonalność jest powiązana z konkretną lokalizacją.

Poniżej przedstawiono architekturę do celów edukacyjnych z dwoma różnymi regionami i różnymi blokami Additional IPv6 ogłaszanymi z każdego z nich. Przedstawiono również hosta z adresami IP z obu sieci oraz przykład nieoptymalne trasy - hosta w jednym regionie zaadresowanego adresem IPv6 ogłaszanym w innym regionie:

![Architektura wieloregionowa vRack z różnymi blokami IPv6](images/20240418-08.png){.thumbnail}

Należy pamiętać, że w takich konfiguracjach (z Additional IPv6 z więcej niż jednego regionu) SLAAC **musi być wyłączone w całej sieci vRack** (ponieważ może to prowadzić do nieprzewidywalnych wyników i losowej utraty łączności).

### Korzyści

- **Lepsza łączność:** Dzięki wykorzystaniu sieci vRack wraz z blokami publicznych adresów IP routowanymi w wielu lokalizacjach, firmy mogą zapewnić bezproblemową komunikację na całym świecie, niezależnie od fizycznej lokalizacji serwerów zaplecza.
- **Przejście do chmury:** Technologia vRack może być doskonałym czynnikiem umożliwiającym pierwsze kroki w kierunku strategii organizacyjnej "move-to-cloud", odblokowując niektóre starsze aplikacje, które nadal wymagają lokalnej komunikacji sieciowej.

### Ryzyka i uwagi

- **Brak obsługi SLAAC w konfiguracjach wielolokalizacyjnych:** Gdy istnieje więcej niż jedna lokalizacja obsługująca routing publicznego ruchu IP (zarówno IPv4, jak i IPv6) do tej samej sieci vRack, Stateless Address Autoconfiguration (SLAAC) **nie powinno być używane**. Jako przykład takiej sytuacji rozważmy istniejące hosty używające adresów IPv4. Takie hosty są automatycznie rekonfigurowane przez SLAAC z bramą IPv6 skonfigurowaną z innego regionu. Wraz z priorytetyzacją IPv6 nad IPv4 przez niektóre systemy operacyjne sytuacja ta może prowadzić do nieoptymalne routingu, a nawet całkowitej utraty łączności dla takich hostów.

## Znane ograniczenia

Zrozumienie ograniczeń korzystania z **Additional IPv6** w środowisku **vRack** jest kluczowe dla efektywnego planowania sieci. Oto kluczowe ograniczenia do uwzględnienia:

- **Additional IPv6 działa tylko z vRack**: Należy pamiętać, że adresy Additional IPv6 można konfigurować tylko z backendami podłączonymi do sieci vRack.
- **Ograniczenia SLAAC w konfiguracjach wielolokalizacyjnych**: Stateless Address Autoconfiguration (SLAAC) nie jest obsługiwane, gdy publiczny ruch IP (zarówno IPv6, jak i IPv4) jest routowany do sieci vRack w wielu lokalizacjach regionalnych.
- **Do 128 hostów w mostkowanej podsieci**: Można używać do 128 adresów IP bezpośrednio w sieci vRack.
- **Do 128 tras next-hop**: Można używać do 128 tras dla routowanych podsieci wewnątrz sieci vRack.
- **Limit przepustowości publicznej**: Ruch wychodzący z OVHcloud do Internetu jest ograniczony do 5 Gbps per lokalizacja regionalna.
- **Limity przydziału bloków IPv6**: Jeden dodatkowy blok IPv6 per sieć vRack w lokalizacji regionalnej. Maksymalnie 3 bloki (/56) per lokalizacja regionalna.
- **Mobilność bloków Additional IPv6**: Ze względu na hierarchiczny projekt przestrzeni adresowej IPv6, bloki Additional IPv6 są specyficzne dla regionu. Oznacza to, że bloków nie można przenosić między regionami, choć mogą być ponownie przypisywane do dowolnego backendu podłączonego do sieci vRack.
- **Brak bezpośredniej obsługi VLAN 802.1Q w sieci vRack przez Additional IPv6**: Konfiguracja może być wykonana tylko z natywnym VLANem sieci vRack. Do przekazywania pakietów wewnątrz konkretnego VLANu (sieci vRack) potrzebny będzie dedykowany host po stronie klienta.
- **Obecnie routing Additional IPv6 do sieci vRack nie jest obsługiwany w regionach APAC (Azja-Pacyfik).**

## Sprawdź również

- [Konfiguracja vRack na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)
- [Serwer dedykowany - Konfiguracja network bridge](/pages/bare_metal_cloud/dedicated_servers/network_bridging)
Dołącz do [grona naszych użytkowników](/links/community).
