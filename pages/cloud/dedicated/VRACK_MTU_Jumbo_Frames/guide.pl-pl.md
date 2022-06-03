---
title: Konfiguracja ramek Jumbo w vRacku
slug: 'network-jumbo'
excerpt: Dowiedz się, jak konfigurować ramki Jumbo w vRacku
section: 'vRack'
---

**Ostatnia aktualizacja z dnia 28-08-2020**

## Wprowadzenie

Ramki Jumbo, inaczej *Jumbo frames*, to ramki Ethernet o ładowności ponad 1500 bajtów i do 9000 bajtów. Ich użycie skraca do minimum czas przetwarzania routingu. To z kolei optymalizuje ruch w vRacku.

**Dowiedz się, jak skonfigurować dystrybucję Linux, aby używała ramek Jumbo w vRacku.**

## Wymagania początkowe

- Posiadanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external}
- Otwórz shell z prawami root

> [!warning]
> Funkcja ta może być niedostępna lub ograniczona na [serwerach dedykowanych **Eco**](https://eco.ovhcloud.com/pl/about/).
>
> Aby uzyskać więcej informacji, zapoznaj się z naszym [porównaniem](https://eco.ovhcloud.com/pl/compare/).

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

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
