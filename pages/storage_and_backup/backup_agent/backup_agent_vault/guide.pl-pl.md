---
title: "Backup Agent - Jak działają Vault"
excerpt: "Dowiedz się, jak działa system Vault i gdzie przechowywane są Twoje dane kopii zapasowych"
updated: 2026-01-28
---

## Wprowadzenie

Przewodnik ten wyjaśnia, jak działa system Vault w produkcie Backup Agent i jak Twoje dane są lokalizowane i przechowywane w zależności od lokalizacji Twoich serwerów Bare Metal.

## Wymagania początkowe

- Usługa Backup Agent zamówiona w momencie zakupu serwera Bare Metal lub później za pomocą menu `Backup Agent`{.action} w Panelu klienta OVHcloud.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ścieżka nawigacji:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## W praktyce

### Omówienie Vault

Vault to Twoje miejsce przechowywania, do którego dane kopii zapasowej są wysyłane w trakcie każdej kopii zapasowej. Vault są automatycznie tworzone przez OVHcloud, aby upewnić się, że Twoje dane nie są hostowane w tym samym centrum danych, co Twój serwer Bare Metal.

Jest to oparte na naszych obiektach magazynu, które możesz znaleźć [tutaj](/links/public-cloud/object-storage).

Aby znaleźć swoje Vault, kliknij [ten link](/links/control-panel/baremetal-backup-agent), aby uzyskać dostęp do sekcji `Backup Agent`{.action}, a następnie kliknij kartę `Vaults`{.action}.

![Lista Vault Backup Agent](images/01-backup-agent-vault-list.png){.thumbnail}

### Zasada lokalizacji

**Ważna zasada:** Dane kopii zapasowej są zawsze wysyłane do Vault znajdującego się w innym centrum danych niż to, w którym znajduje się Twój serwer Bare Metal. To gwarantuje odporność i bezpieczeństwo Twoich danych.

### Przypadki użycia

Poniżej przedstawiono różne scenariusze ilustrujące, jak działa system Vault:

![Przypadki użycia Vault Backup Agent](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Przypadek użycia 1: Serwer Bare Metal w RBX

Jeśli masz serwer Bare Metal położony w **Roubaix (RBX)** i zamówisz Backup Agent:

- Twój serwer Bare Metal z zainstalowanym Backup Agent znajduje się w **RBX**.
- Dane kopii zapasowej są automatycznie wysyłane do Vault utworzonego w **Gravelines (GRA)**, o nazwie **backup-vault-gra1**.
- To gwarantuje, że Twoje dane są przechowywane w innym centrum danych niż Twój serwer.

### Przypadek użycia 2: Dwa serwery Bare Metal w RBX i GRA

Jeśli masz dwa serwery Bare Metal, jeden w **Roubaix (RBX)**, a drugi w **Gravelines (GRA)**:

- Serwer Bare Metal w **RBX** wysyła swoje dane do **backup-vault-sbg-1** w **Gravelines**.
- Serwer Bare Metal w **GRA** wysyła swoje dane do **backup-vault-gra-1** w **Strasburgu (SBG)**.
- Każdy serwer korzysta z Vault znajdującego się w innym centrum danych niż on sam.

### Przypadek użycia 3: Trzy serwery Bare Metal w RBX, GRA i LIM

Jeśli masz trzy serwery Bare Metal w różnych centrum danych:

- Serwer w **RBX** wysyła swoje dane do **backup-vault-gra-1** w **GRA**.
- Serwer w **GRA** wysyła swoje dane do **backup-vault-sbg-1** w **SBG**.
- Serwer w **Limburg (LIM)** wysyła swoje dane do **backup-vault-sbg-1** w **SBG**.
- Każdy serwer gwarantuje, że jego dane są przechowywane w oddalonym centrum danych.

### Przypadek użycia 4: Serwer Bare Metal w BHS z interfejsem sieciowym EU

Jeśli masz serwer Bare Metal w **Beauharnois (BHS)** z europejskim interfejsem sieciowym:

- Twój serwer Bare Metal znajduje się w **BHS**.
- Dane kopii zapasowej są wysyłane do **backup-vault-tor-1** w **Toronto (TOR)**.
- Lokalizacja Vault jest określana na podstawie konfiguracji sieci Twojego serwera.

## Ważne punkty

- Vault są automatycznie tworzone przez OVHcloud, nie możesz tworzyć ich ręcznie.
- Po skonfigurowaniu nie możesz zmienić Vault dla agenta.
- Lokalizacja Vault zawsze różni się od lokalizacji Twojego serwera Bare Metal, aby zapewnić odporność.
- Nazwa Vault zazwyczaj postępuje według konwencji: `backup-vault-<location>-<number>`.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).