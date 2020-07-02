---
title: 'Korzystanie z migawek na prywatnym serwerze wirtualnym'
excerpt: 'Dowiedz się, jak włączyć opcję migawki w Panelu klienta OVHcloud i korzystać z niej'
slug: uzywanie-migawki-vps
section: 'Opcje kopii zapasowych'
order: 1
---

**Ostatnia aktualizacja: 22-04-2020**


## Wprowadzenie

Utworzenie migawki jest szybkim i prostym sposobem na zabezpieczenie działania systemu przed wprowadzeniem zmian, które mogą mieć niepożądane lub nieprzewidziane konsekwencje, na przykład podczas testowania nowej konfiguracji albo oprogramowania. Nie stanowi to jednak pełnej strategii tworzenia kopii zapasowych systemu.

**Dowiedz się, jak korzystać z migawek na prywatnym serwerze wirtualnym (VPS) OVHcloud.**

> [!primary]
>
Przed zastosowaniem opcji tworzenia kopii zapasowych zalecamy przejrzenie [stron produktów oraz często zadawanych pytań (FAQ)](https://www.ovhcloud.com/pl/vps/options/) w celu porównania cen i uzyskania szczegółowych informacji.
>

## Wymagania początkowe

- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- skonfigurowana [usługa VPS](https://www.ovhcloud.com/pl/vps/) OVHcloud


## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), przejdź do sekcji „Serwer” i wybierz serwer na lewym pasku bocznym pod pozycją `VPS`{.action}.

### Krok 1: subskrybowanie opcji kopii zapasowej

Na karcie `Strona główna`{.action} przewiń do obszaru z nagłówkiem „Podsumowanie opcji”. Kliknij ikonę `...`{.action} obok opcji „Migawka” i wybierz z menu kontekstowego pozycję `Zamówienie`{.action}.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

W następnym kroku przeczytaj informację o cenie i kliknij pozycję `Zamów`{.action}. Po przejściu kolejnych kroków procesu zamówienia otrzymasz e-mail z potwierdzeniem.

### Krok 2: tworzenie migawki

Po włączeniu opcji kliknij ikonę `...`{.action} obok opcji „Migawka” i wybierz z menu kontekstowego pozycję `Utwórz migawkę`{.action}. Utworzenie migawki może zająć kilka minut. Po utworzeniu migawki w obszarze „Podsumowanie opcji” pojawi się jej znacznik czasu.

### Krok 3: usuwanie / przywracanie migawki

Ponieważ jednocześnie może być aktywna tylko jedna migawka, przed utworzeniem nowej migawki trzeba usunąć istniejącą. W tym celu po prostu wybierz z menu kontekstowego pozycję `Usuń migawkę`{.action}.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Jeśli na pewno chcesz zresetować status prywatnego serwera wirtualnego do stanu z migawki, kliknij pozycję `Przywróć migawkę`{.action} i potwierdź zadanie przywracania w wyświetlonym oknie.


## Sprawdź również

[Korzystanie z automatycznych kopii zapasowych na prywatnym serwerze wirtualnym](https://docs.ovh.com/gb/en/vps/using-automated-backups-on-a-vps)


Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.