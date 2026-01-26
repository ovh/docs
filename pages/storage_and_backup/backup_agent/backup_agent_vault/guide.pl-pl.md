---
title: "Backup Agent - Jak działa Vault"
excerpt: "Dowiedz się, jak działa system Vault i lokalizacja Twoich danych kopii zapasowej"
updated: 2026-01-23
---

## Wprowadzenie

Ten przewodnik wyjaśnia, jak działa system Vault w produkcie Backup Agent i jak Twoje dane są lokalizowane i przechowywane w zależności od lokalizacji Twoich serwerów Bare Metal.

## Wymagania początkowe
- Zamówienie usługi Backup Agent w momencie zamówienia serwera Bare Metal lub później za pomocą menu `Agent kopii zapasowej`{.action} w Panelu klienta.

## W praktyce
### Przegląd Vault

Vault to Twoja przestrzeń przechowywania, do której Twoje dane kopii zapasowej są wysyłane przy każdym backupie. Vaulty są tworzone automatycznie przez OVHcloud, aby zapewnić, że Twoje dane nie są hostowane w tym samym centrum danych, co Twój serwer Bare Metal.

Jest to oparte na naszych bucketach Object Storage, które możesz znaleźć pod tym [linkiem](/links/public-cloud/object-storage)

Możesz znaleźć swoje Vaulty w Panelu klienta, w sekcji Vaults.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Zasada lokalizacji

**Ważna zasada:** Dane kopii zapasowej są zawsze wysyłane do Vaultu znajdującego się w innym centrum danych niż Twój serwer Bare Metal. Zapewnia to odporność i bezpieczeństwo Twoich danych.

### Przypadki użycia

Oto różne scenariusze ilustrujące działanie systemu Vault:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Przypadek użycia 1: Jeden serwer Bare Metal w RBX

Jeśli masz serwer Bare Metal zlokalizowany w **Roubaix (RBX)** i zamawiasz Backup Agent:

- Twój serwer Bare Metal z zainstalowanym Backup Agent znajduje się w **RBX**.
- Twoje dane kopii zapasowej są automatycznie wysyłane do Vaultu utworzonego w **Gravelines (GRA)**, o nazwie **backup-vault-gra1**.
- Zapewnia to, że Twoje dane są przechowywane w innym centrum danych niż Twój serwer.

### Przypadek użycia 2: Dwa serwery Bare Metal w RBX i GRA

Jeśli masz dwa serwery Bare Metal, jeden w **Roubaix (RBX)** i drugi w **Gravelines (GRA)**:

- Serwer Bare Metal w **RBX** wysyła swoje dane do **backup-vault-sbg-1** w **Gravelines**.
- Serwer Bare Metal w **GRA** wysyła swoje dane do **backup-vault-gra-1** w **Strasburgu (SBG)**.
- Każdy serwer używa Vaultu w innym centrum danych niż jego własne.

### Przypadek użycia 3: Trzy serwery Bare Metal w RBX, GRA i LIM

Jeśli masz trzy serwery Bare Metal w różnych centrach danych:

- Serwer w **RBX** wysyła swoje dane do **backup-vault-gra-1** w **GRA**.
- Serwer w **GRA** wysyła swoje dane do **backup-vault-sbg-1** w **SBG**.
- Serwer w **Limburg (LIM)** wysyła swoje dane do **backup-vault-sbg-1** w **SBG**.
- Każdy serwer zapewnia, że jego dane są przechowywane w odległym centrum danych.

### Przypadek użycia 4: Serwer Bare Metal w BHS z NIC EU

Jeśli masz serwer Bare Metal w **Beauharnois (BHS)** z europejskim interfejsem sieciowym:

- Twój serwer Bare Metal znajduje się w **BHS**.
- Twoje dane kopii zapasowej są wysyłane do **backup-vault-tor-1** w **Toronto (TOR)**.
- Lokalizacja Vaultu jest określana na podstawie konfiguracji sieciowej Twojego serwera.

## Ważne punkty

- Vaulty są tworzone automatycznie przez OVHcloud, nie możesz ich tworzyć ręcznie.
- Nie możesz zmienić Vaultu agenta po jego skonfigurowaniu.
- Lokalizacja Vaultu jest zawsze inna niż lokalizacja Twojego serwera Bare Metal, aby zapewnić odporność.
- Nazwa Vaultu zazwyczaj następuje konwencji: `backup-vault-<lokalizacja>-<numer>`.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).

