---
title:  Przenieś Additional IP
excerpt: Dowiedz się, jak przenieść Additional IP z Panelu klienta lub poprzez API OVHcloud
updated: 2025-07-22
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
> Bloki adresów IP można przypisać do dowolnej kompatybilnej usługi w obrębie regionu.
Bloki adresów IP w regionie mogą być przenoszone między centrami danych w danym regionie, ale nie mogą być przenoszone poza ten region.
>
> Wyjątkiem są 3 regiony: eu-west-gra, eu-west-rbx i eu-west-sbg, w których bloki adresów IP mogą być przenoszone między tymi trzema regionami.
>
> Migracja dotyczy tylko całych bloków danych. Nie można przenieść pojedynczych adresów IP wewnątrz bloku.

**Dowiedz się, jak przenieść adres Additional IP z Panelu klienta OVHcloud lub poprzez API OVHcloud**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal) w Panelu klienta
- Posiadanie [adresu Additional IP](/links/network/additional-ip)
- Dostęp do [panelu klienta OVHcloud](/links/manager)

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).
>

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

### Przenieś IP w Panelu klienta OVHcloud

> [!warning]
> Tylko blok o jednym rozmiarze (/32) będzie można przenieść z serwera dedykowanego na VPS.
>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), kliknij `Network`{.action} w menu po lewej stronie ekranu, a następnie `Publiczne adresy IP`{.action}.

Kliknij na zakładkę `Additional IP`{.action}.

![manage IPs](images/manageIPs2024.png){.thumbnail}

Kliknij przycisk `...`{.action} po prawej stronie przenoszonego adresu IP, a następnie `Przenieś Additional IP`{.action} lub `Przypisz ten blok IP do innej usługi`{.action}.

![Panelu klienta](images/move_ip.png){.thumbnail}

W menu, które się wyświetla wybierz usługę, do której chcesz przenieść adres IP.

Kliknij `Dalej`{.action}, a następnie `Zatwierdź`{.action}.

![Panelu klienta](images/moveadditionalIP2.png){.thumbnail}

### Przeniesienie IP przez API

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

### Ograniczenia <a name="Limitations"></a>

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

Dołącz do [grona naszych użytkowników](/links/community).