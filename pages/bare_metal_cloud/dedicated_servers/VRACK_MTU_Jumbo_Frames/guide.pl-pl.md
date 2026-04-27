---
title: "Konfiguracja Jumbo Frames w vRack na serwerach dedykowanych"
excerpt: "Skonfiguruj Jumbo Frames (MTU 9000) w sieci OVHcloud vRack, aby zoptymalizować przepustowość między serwerami dedykowanymi."
updated: 2020-08-17
---

## Wprowadzenie

Ramki Jumbo, inaczej *Jumbo frames*, to ramki Ethernet o ładowności ponad 1500 bajtów i do 9000 bajtów. Ich użycie skraca do minimum czas przetwarzania routingu. To z kolei optymalizuje ruch w vRacku.

**Dowiedz się, jak skonfigurować dystrybucję Linux, aby używała ramek Jumbo w vRacku.**

## Wymagania początkowe

- Posiadanie usługi [vRack](/links/network/vrack)
- Otwórz shell z prawami root

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](/links/bare-metal/eco-about).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](/links/bare-metal/eco-compare).

> [!primary]
>
> Rozmiar MTU musi być taki sam na wszystkich hostach w tej samej podsieci. 
>

## W praktyce

### Weryfikacja MTU

```sh
ip link show | grep mtu
```

### Określ nowy rozmiar i przetestuj polecenie

```sh
ip link set <nom de l’interface> mtu 9000
```

### Wprowadź zmianę na stałe 

Edytuj plik `/etc/network/interface` dodaj następujące wiersze:

#### W przypadku interfejsu zarządzanego przez DHCP

```sh
Auto <nom de l’interface>

Iface <nom de l’interface> inet dhcp

  Pre-up /sbin/ip link set dev <nom de l’interface> up mtu 9000
```

#### W przypadku interfejsu ze stałym IP

```sh
Auto <nazwa interfejsu>

Iface <nazwa interfejsu> inet dhcp
  mtu 9000
```

## Sprawdź również

- [Konfiguracja vRack na serwerach dedykowanych](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)
- [Konfiguracja bloku IP w sieci vRack na serwerze dedykowanym](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
