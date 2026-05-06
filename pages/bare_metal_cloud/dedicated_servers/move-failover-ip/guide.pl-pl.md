---
title: "Jak przenieść Additional IP na inny serwer"
excerpt: "Przenieś adres Additional IP między serwerami dedykowanymi lub instancjami OVHcloud za pomocą Panelu klienta lub API."
updated: 2026-01-21
---

> [!primary]
> Ten artykuł dotyczy przenoszenia adresów Additional IPv4, które jest ograniczone zgodnie z [ograniczeniami regionalnymi](#limitations).
>
> Konfiguracja Additional IP w sieci vRack (sieć prywatna) pozwala obejść te ograniczenia regionalne, gdyż w przeciwnym razie utracisz zależność od jednego regionu, ułatwiając łączenie wielu usług OVHcloud.
>
> Dowiedz się, jak skonfigurować dodatkowe adresy IP w sieci vRack za pomocą przewodników dla [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) i [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Wprowadzenie

Additional IP mogą być przenoszone między Twoimi usługami. Chodzi o to, aby nie tracić reputacji i lepszego pozycjonowania Twoich aplikacji i systemów.

Technologia ta pozwala na wymianę adresów IP między poszczególnymi rozwiązaniami w czasie krótszym niż jedna minuta, praktycznie bez przerwy w dostępie do Twoich użytkowników. Mechanizm ten może być wykorzystywany w trakcie migracji usługi, podczas przenoszenia projektów ze środowiska programistycznego do środowiska produkcyjnego i przełączania usług na serwer backup w przypadku usterki.

> [!primary]
> Bloki adresów IP można przypisać do dowolnej kompatybilnej usługi w obrębie regionu. Bloki adresów IP w regionie mogą być przenoszone między centrami danych w danym regionie, ale nie mogą być przenoszone poza ten region.
>
> Wyjątkiem są 3 regiony: eu-west-gra, eu-west-rbx i eu-west-sbg, w których bloki adresów IP mogą być przenoszone między tymi trzema regionami.
>
> Region to obszar geograficzny składający się z jednego lub wielu centrów danych.
>
> Migracja dotyczy tylko całych bloków. Nie można przenieść pojedynczych adresów IP wewnątrz bloku.

**W niniejszym przewodniku wyjaśniono, jak przenieść dodatkowy adres IP w Panelu klienta OVHcloud lub za pośrednictwem interfejsu API OVHcloud. Wyjaśniono również, jak przenieść dodatkowy adres IP z konta So you Start na konto OVHcloud.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal) w Panelu klienta
- Posiadanie [adresu Additional IP](/links/network/additional-ip)

<!-- CP-NAV-START:network-public-ip -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public IP](/links/control-panel/network-public-ip)
- **Ścieżka nawigacji:** `Network`{.action} > `Publiczne adresy IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).

> [!warning]
> Jeśli adres Additional IP lub jeden z adresów IP bloku, ma przypisany wirtualny adres MAC, serwer docelowy musi obsługiwać funkcje wirtualnych adresów MAC.
> Zapoznaj się [z tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).
>
> W przeciwnym razie wirtualne adresy MAC muszą zostać usunięte z adresów Additional IP przed przeniesieniem.

## W praktyce

> [!primary]
> Przeniesienie bloku IP zawierającego unikalne wirtualne adresy MAC między dwoma serwerami powoduje tymczasowe zawieszenie tych adresów. Pojawią się one na nowym serwerze po zakończeniu przenoszenia.
>
> Z drugiej strony, bloki zawierające zduplikowane wirtualne adresy MAC nie mogą być przenoszone. Usuń zduplikowany wirtualny adres MAC z bloku, który chcesz przenieść.
>
> Jeśli blok IP zostanie przeniesiony/dodany do vRack, nie jest już związany z serwerem fizycznym. W tym przypadku każdy wirtualny adres MAC zostanie utracony podczas transferu.
>

### Bloki adresów IP geolokalizowane

Geolokalizacja adresu IP jest niezależna od regionu, z którym jest on powiązany.

Jeśli zamówisz dodatkowy blok adresów IP na serwerze, ale wybierzesz inną lokalizację (geolokalizację) dla tego bloku, nie będzie można przenieść go na inny serwer znajdujący się w tym samym kraju. Na przykład dodatkowy blok adresów IP geolokalizowany w Polsce (eu-central-war) i zamówiony na serwerze znajdującym się w francuskim centrum danych (eu-west-gra) nie może zostać przeniesiony na serwer znajdujący się w polskim centrum danych (eu-central-war). Blok adresów IP można przenieść wyłącznie na kwalifikujący się serwer znajdujący się we francuskim centrum danych.

### Przenieś Additional IP w Panelu klienta OVHcloud

> [!warning]
> Tylko blok o jednym rozmiarze (/32) będzie można przenieść z serwera dedykowanego na VPS.
>

Możesz użyć menu rozwijanego pod opcją **Moje publiczne adresy IP i usługi powiązane** i wybrać opcję `Wszystkie adresy Additional IP`{.action}, aby odpowiednio filtrować usługi, lub bezpośrednio wpisać żądany adres IP w pasku wyszukiwania.

![manage IPs](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Następnie kliknij przycisk `⁝`{.action} po prawej stronie Additional IP lub bloku adresów IP, który chcesz przenieść, i wybierz `Przenieś Additional IP`{.action}.

![Menu kontekstowe przeniesienia Additional IP](images/move_ip_1_new.png){.thumbnail}

W wyskakującym okienku wybierz z menu usługę, do której chcesz przenieść adres IP.

![Wybór usługi docelowej dla Additional IP](images/move_ip_2_new.png){.thumbnail}

Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

> [!warning]
> Należy pamiętać, że w przypadku niektórych produktów adresy IP (lub bloki) muszą zostać najpierw przeniesione do parkingu IP (tymczasowej lokalizacji przechowywania), zanim będą mogły zostać przeniesione do żądanego produktu.
>
> Aby przenieść bloki adresów IP do określonej sieci vRack, należy skorzystać z **interfejsu zarządzania vRack**, do którego można uzyskać dostęp, otwierając menu `Sieć`{.action} w lewym pasku bocznym, a następnie wybierając opcję `Prywatna sieć vRack`{.action}. 
>

### Przeniesienie Additional IP przez API

Zaloguj się na stronie WWW [API OVHcloud](/links/api).

Najpierw należy sprawdzić, czy adres IP może zostać przeniesiony.
<br>Aby sprawdzić, czy IP może zostać przeniesione na jeden z Twoich serwerów dedykowanych, wywołaj następujące połączenie:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: numer serwera dedykowanego docelowego
- `ip`: adres Additional IP do przeniesienia

Aby przenieść adres IP, użyj następującego połączenia:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: numer serwera dedykowanego docelowego
- `ip`: adres Additional IP do przeniesienia

### Przeniesienie Additional IP z konta So you Start na konto OVHcloud

Aby przenieść dodatkowy adres IP z konta SYS na konto OVHcloud, należy wziąć pod uwagę kilka kwestii:

- Przeniesienie Additional IP wiąże się z opłatą instalacyjną. Adres IP nie zostanie przeniesiony, jeśli faktura pozostanie niezapłacona.
- Nie ma możliwości przeniesienia Additional IP z konta OVHcloud na konto So you Start.
- Upewnij się, że serwer, na który przenosisz dodatkowy adres IP, znajduje się w tym samym regionie kompatybilnym z adresem IP. Zobacz sekcję "Ograniczenia" poniżej.

Aby rozpocząć, zaloguj się na swoje konto So you Start i kliknij `IP`{.action} na głównym pulpicie nawigacyjnym.

![Sekcja IP w panelu So you Start](images/sys-ip-section.png){.thumbnail}

Kliknij koło zębate obok odpowiedniego adresu IP i wybierz `Przenieś IP FO`{.action}.

![Opcja przeniesienia failover IP w menu So you Start](images/move-ip-sys.png){.thumbnail}

Wybierz opcję `Przeniesienia na usługę OVH`{.action}, wprowadź identyfikator klienta OVHcloud i kliknij `Dalej`{.action}.

![Wybór przeniesienia do usługi OVH i wprowadzenie identyfikatora NIC](images/move-to-ovh.png){.thumbnail}

Spowoduje to wygenerowanie kodu (tokenu), który należy zapisać.

![Wygenerowany kod tokena do transferu IP](images/token-id.png){.thumbnail}

Następnie [zaloguj się na swoje konto OVHcloud](/links/manager), kliknij `Sieć`{.action} w menu po lewej stronie ekranu, a następnie `Publiczne adresy IP`{.action}.

Kliknij na koło zębate po prawej stronie i wybierz `Importuj adresy IP SYS do OVHcloud`{.action}.

![Opcja importu adresów IP z SyS do OVHcloud](images/import-ip-to-ovh.png){.thumbnail}

Pojawi się okno pop-up, wprowadź dodatkowy adres IP (lub blok) oraz identyfikator tokenu (uzyskany na koncie So you Start). Następnie kliknij `Dalej`{.action}.

![Wprowadzenie Additional IP i tokena do importu](images/Step-1.png){.thumbnail}

Wybierz serwer docelowy i kliknij `Dalej`{.action}. Jeśli serwer dedykowany jest zgodny z adresem IP, pojawi się zielony komunikat. Jeśli nie jest zgodny, pojawi się komunikat o błędzie.

Kliknij `Dalej`{.action}.

![Wybór serwera docelowego ze sprawdzeniem kompatybilności](images/Step-2.png){.thumbnail}<br>
![Komunikat potwierdzenia kompatybilności serwera](images/Step-2.1.png){.thumbnail}

W następnym oknie czas trwania zostanie wybrany automatycznie, a opłata zostanie wyświetlona. Kliknij `Dalej`{.action}, aby kontynuować.

![Podsumowanie czasu trwania i opłat za transfer IP](images/Step-3.png){.thumbnail}

Zaznacz pole `Akceptuję umowy`{.action}, aby wyrazić zgodę na warunki świadczenia usług po ich przeczytaniu. Następnie kliknij `Dalej`{.action}.

![Akceptacja regulaminu transferu IP](images/Step-4.png){.thumbnail}

Zapoznaj się z podsumowaniem zamówienia i kliknij `Potwierdź`{.action}, aby je potwierdzić.

![Podsumowanie i potwierdzenie zamówienia transferu IP](images/Step-5.png){.thumbnail}

Zostaniesz przekierowany na nową stronę, aby dokonać płatności.

Po dokonaniu płatności dodatkowy adres IP zostanie przeniesiony na Twoje konto OVHcloud i powiązany z wybranym serwerem. Proces ten może potrwać chwilę.

### Ograniczenia <a name="limitations"></a>

Pamiętaj, że istnieją pewne ograniczenia podczas przenoszenia bloku adresów IP. Poniższa tabela pokazuje kompatybilność między regionami.

Więcej informacji znajdziesz na naszej liście [dostępnych regionów](/links/network/additional-ip).

| Nazwa regionu  | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |

## Sprawdź również

- [Konfiguracja Additional IP jako aliasu IP na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing)
- [Serwer dedykowany - Konfiguracja network bridge](/pages/bare_metal_cloud/dedicated_servers/network_bridging)
Dołącz do [grona naszych użytkowników](/links/community).