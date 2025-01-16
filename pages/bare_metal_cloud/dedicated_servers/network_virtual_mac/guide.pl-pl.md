---
title: 'Przypisanie wirtualnego adresu MAC do Additional IP'
excerpt: 'Dowiedz się, jak utworzyć wirtualny adres MAC i jak powiązać go z Additional IP'
updated: 2024-12-13
---

## Wprowadzenie

OVHcloud umożliwia Ci powiązanie wirtualnego adresu MAC z adresem IP, abyś mógł wdrażać na Twoim serwerze wirtualne maszyny z konfiguracją mostka sieciowego.

**Niniejszy przewodnik wyjaśnia, jak utworzyć wirtualny adres MAC i jak go powiązać z adresem Additional IP.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal)
- Posiadanie [adresu Additional IP](/links/network/additional-ip) lub bloku Additional IP (RIPE)
- Dostęp do [Panelu klienta](/links/manager) lub do [API OVHcloud](/links/api)
- Twój serwer musi obsługiwać wirtualne adresy MAC. Zapoznaj się [z tym przewodnikiem](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).

> [!warning]
> - Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about). Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).
>
> - Serwery Advance trzeciej generacji (wyposażone w procesory EPYC 4004 Series) obsługują 32 różne sieci vMAC.
>
> - Funkcja ta będzie dostępna w ofercie Scale i High Grade w roku 2025.

> [!primary]
> Jeśli nie jesteś zaznajomiony z korzystaniem z API OVHcloud, zapoznaj się z naszym przewodnikiem [Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps).

## W praktyce

### Przypisanie adresu MAC

> [!warning]
>
> Jeśli blok IP został przeniesiony do sieci vRack, nie jest już przypisany do fizycznego serwera w tym celu, nie można przypisać wirtualnego adresu MAC do IP.
>

#### Za pośrednictwem Panelu klienta OVHcloud

Po zalogowaniu się do [Panelu klienta](/links/manager), kliknij menu `Bare Metal Cloud`{.action} i otwórz sekcję `IP`{.action}.

Kliknij na zakładkę `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Zlokalizuj następnie na liście Twój adres Additional IP (lub blok Additional IP), po czym kliknij przycisk `...`{.action}, aby wyświetlić listę opcji.

![IP](images/addvmac.png){.thumbnail}

Po wyświetleniu okna dialogowego "Dodaj wirtualny adres MAC" wybierz typ adresu z rozwijanej listy, wprowadź nazwę maszyny wirtualnej i kliknij `Potwierdź`{.action}.

> [!primary]
>
> **Typ**: jest to rodzaj wirtualnego adresu MAC (“VMware” będzie adresem MAC utworzonym dla systemu VMware ESXi, podczas gdy “ovh” będzie odpowiedni dla wszystkich innych systemów wirtualizacji).
>
> **Nazwa wirtualnej maszyny**: jest to nazwa dla wirtualnego adresu MAC ułatwiająca odnalezienie pary IP/MAC.
>

![IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> Pamiętaj, aby przypisać wirtualny adres MAC podczas konfiguracji Twojej wirtualnej maszyny.
> 

#### Za pośrednictwem API OVHcloud

Skorzystaj z następującego wywołania API:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Usuwanie adresu MAC

> [!warning]
>
> Usunięcie adresu MAC jest nieodwracalne, nie jest możliwe jego późniejsze przywrócenie.
>

#### Za pośrednictwem Panelu klienta OVHcloud

Aby usunąć wirtualny adres MAC powiązany z Additional IP, zaloguj się do [Panelu klienta](/links/manager), kliknij menu `Bare Metal Cloud`{.action} i otwórz sekcję `IP`{.action}. Wybierz odpowiedni serwer, aby wyświetliły się powiązane z nim adresy Additional IP (lub blok IP).

Aby zakończyć, kliknij przycisk `...`{.action} po prawej stronie, po czym kliknij `Usuń wirtualny adres MAC`{.action}.

#### Za pośrednictwem API OVHcloud

Skorzystaj z następującego wywołania API:

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## FAQ

- **Co się stanie, jeśli przeniosę blok z vMAC na serwer Advance trzeciej generacji (wyposażony w procesor EPYC 4004 Series) posiadający już 32 vMAC?**

Blok nie zostanie przeniesiony.

Przykład: jeśli spróbujesz przenieść blok 4 adresów IP z różnymi adresami vMAC przypisanymi do serwera, który ma już 30 vMAC, blok nie zostanie przeniesiony, ponieważ całkowita liczba vMAC byłaby większa niż 32 dozwolone sieci vMAC.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).