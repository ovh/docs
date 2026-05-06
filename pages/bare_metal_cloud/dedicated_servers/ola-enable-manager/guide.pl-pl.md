---
title: "Jak skonfigurować OVHcloud Link Aggregation w Panelu klienta"
excerpt: "Włącz OVHcloud Link Aggregation (OLA) na serwerze dedykowanym za pomocą Panelu klienta OVHcloud."
updated: 2026-04-20
---

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została zaprojektowana przez nasze zespoły w celu zwiększenia dostępności serwera i wydajności połączeń sieciowych. Za pomocą kilku kliknięć możesz łączyć karty sieciowe i redundantować połączenia sieciowe. Oznacza to, że w przypadku awarii połączenia ruch jest automatycznie przekierowywany do innego dostępnego połączenia.<br>
Aggregacja oparta jest na technologii IEEE 802.3ad lub Link Aggregation Control Protocol (LACP).

**Dowiedz się, jak skonfigurować OLA w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego OVHcloud](/links/bare-metal/bare-metal) z gamy Advance, Scale lub High Grade
- System operacyjny / Hypervisor obsługujący protokół 802.3ad (LACP)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Dostęp do Panelu klienta OVHcloud

- **Bezpośredni link:** [Serwery dedykowane](/links/control-panel/baremetal-dedicated-servers)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Serwery dedykowane`{.action} > Wybierz swój serwer

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## W praktyce

> [!warning]
>
> Konfiguracja OLA odbywa się na wszystkich interfejsach sieciowych. Stanowią one agregat typu "agregacja prywatna".
>
> Po wdrożeniu OLA publiczny adres IP nie będzie już dostępny.
>

### Konfiguracja OLA w Panelu klienta OVHcloud

Aby rozpocząć konfigurację OLA, otwórz zakładkę `Interfejsy sieciowe`{.action} na stronie zarządzania serwerem.

W zakładce `Interfejsy sieciowe`{.action} kliknij przycisk `Agregacja sieci`{.action} w sekcji **Kontrolery interfejsów sieciowych**.

Zostaną wyświetlone dwie tabele:
- Po lewej stronie aktualna konfiguracja interfejsów sieciowych;
- Po prawej stronie symulowana konfiguracja zagregowanych interfejsów sieciowych.

W polu poniżej tabel wprowadź nazwę dla swojej agregacji łączy.

Po sprawdzeniu, że układ agregacji spełnia wymagania sieciowe, kliknij `Włącz agregację`{.action}, aby kontynuować.

Zakończenie operacji może potrwać kilka minut. Kolejny krok to powiązanie interfejsów w systemie operacyjnym. Szczegółowe informacje na temat konfiguracji znajdziesz w przewodnikach:

- [Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9 przez ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Sprawdzanie statusu OLA

Możesz sprawdzić status agregacji łączy (OLA) w zakładce `Interfejsy sieciowe`{.action}. Na dole sekcji **Przepustowość** znajdź wiersz **OVHcloud Link Aggregation**.

Istnieją cztery możliwe oznaczenia statusu:
- **Niedostępny**: OLA nie jest obsługiwany na tym modelu serwera dedykowanego.
- **Dostępny**: OLA jest obsługiwany, ale nie jest skonfigurowany.
- **Aktywny - W pełni prywatny**: OLA jest włączony; wszystkie fizyczne interfejsy są zagregowane w jedno prywatne łącze do użytku z vRack.
- **Aktywny - Podwójny LAG**: OLA jest wstępnie włączony; fizyczne interfejsy są podzielone na dwa osobne agregaty (jeden publiczny, jeden prywatny).

> [!primary]
> **Uwaga:** Status **Aktywny - Podwójny LAG** to specyficzna konfiguracja zazwyczaj zarezerwowana dla serwerów z gamy Scale i High-Grade, które wyposażone są w cztery fizyczne interfejsy sieciowe.
>

### Przywróć OLA do wartości domyślnych

Aby przywrócić OLA do wartości domyślnych, kliknij przycisk `Dezagreguj sieci`{.action} u góry sekcji **Kontrolery interfejsów sieciowych**. Kliknij `Potwierdź`{.action} w menu kontekstowym.

Operacja może zająć kilka minut.

## Sprawdź również

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9 przez ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Dołącz do [grona naszych użytkowników](/links/community).
