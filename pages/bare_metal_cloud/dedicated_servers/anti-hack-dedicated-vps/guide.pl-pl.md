---
title: Informacje o Anti-Hack – Dedicated Server i VPS
excerpt: Dowiedz się, jakie informacje będą wyświetlane i udostępniane w momencie uruchomienia wewnętrznej ochrony Anti-Hack OVHcloud na Twoim serwerze.
updated: 2026-05-04
---

**Dowiedz się, co się dzieje, gdy ochrona Anti-Hack OVHcloud zostaje aktywowana na Twoim Dedicated Server lub VPS.**

## Wymagania początkowe

- Posiadasz Dedicated Server lub VPS, który został zaatakowany.
- Masz dostęp do [Panelu klienta OVHcloud](/links/manager).

## Informacje o Anti-Hack

### Dedicated Server

Gdy ochrona Anti-Hack zostanie uruchomiona na Twoim Dedicated Server, w [Panelu klienta OVHcloud](/links/manager) pojawi się komunikat: "*Twój serwer został zaatakowany. Prosimy o kontakt z naszym zespołem wsparcia technicznego w celu uzyskania instrukcji dotyczących dalszego postępowania.*"

W zależności od poziomu uruchomionej przez OVHcloud ochrony Anti-Hack poniższe działania będą dozwolone/wymagane w celu przywrócenia pełnej usługi na serwerze.

| Status | Oczekiwane działania |
| ------ | ----------- |
| Hacked | Uruchom ponownie serwer lub poproś OVHcloud o jego reinstalację |
| HackedBlocked | Zbierz dane przez FTP na serwerze uruchomionym w trybie rescue FTP |

![Informacje o Anti-Hack dla Dedicated Server](images/hacked-service.png){.thumbnail}

W przypadku gdy Twój serwer zostanie przełączony w tryb rescue FTP, OVHcloud otworzy w Twoim imieniu zgłoszenie do wsparcia technicznego zawierające następujące informacje:

>
> Szanowny Kliencie,
>
> Ponieważ Twój serwer nsXXXXXXX.ip-XXX-XXX-XXX.eu stanowi zbyt duże zagrożenie dla naszej sieci,
nie mieliśmy innego wyboru, jak przełączyć go w tryb "rescue FTP". Na Twój adres e-mail
została wysłana wiadomość zawierająca nazwę użytkownika i hasło, dzięki którym będziesz
mógł łatwo pobrać dane wciąż przechowywane w przestrzeni dyskowej.
>
> Prosimy nie wahać się kontaktować z naszym wsparciem technicznym, aby ta
sytuacja nie stała się krytyczna.
>
> Poniżej znajdziesz logi wygenerowane przez nasz system, które doprowadziły do tego alertu.
>
> - POCZĄTEK DODATKOWYCH INFORMACJI -
>
>  <Attack Details>
>
> - KONIEC DODATKOWYCH INFORMACJI -
>
> Z poważaniem,
>
> Dział wsparcia OVHcloud
> Zespół OVHcloud

### VPS

Gdy ochrona Anti-Hack zostanie uruchomiona na Twoim VPS, może on zostać przełączony w tryb rescue w zależności od stopnia wykrytego zagrożenia.

![Informacje o Anti-Hack dla VPS](images/hacked-vps.png){.thumbnail}

W przypadku gdy Twój VPS zostanie przełączony w tryb rescue, OVHcloud otworzy w Twoim imieniu zgłoszenie do wsparcia technicznego zawierające następujące informacje:

>
> Szanowny Kliencie,
>
> Na Twoim VPS vps-XXXXXXXX.vps.ovh.net wykryto nieprawidłową aktywność.
>
> Twój VPS został przełączony w tryb rescue. Możesz teraz interweniować
na swoim VPS, aby rozwiązać zgłoszone problemy. Wiadomość e-mail zawierająca informacje o trybie rescue została wysłana do Ciebie.
>
> Na Twoim VPS nie można już wykonywać żadnych działań za pośrednictwem Managera/API. Możliwe są wyłącznie następujące działania:
>
> - Reinstalacja Twojego VPS.
> - Użycie trybu rescue do rozwiązania zgłoszonych problemów.
>
> Po rozwiązaniu problemów prosimy o kontakt z naszym wsparciem technicznym w celu przywrócenia normalnego trybu działania.
>
> Prosimy nie wahać się kontaktować z naszym zespołem wsparcia technicznego, aby ta sytuacja nie stała się krytyczna.
>
> Poniżej znajdziesz logi wygenerowane przez nasz system, które doprowadziły do tego alertu.
>

> [!primary]
> **Prosimy zwrócić uwagę na ostatnią część wiadomości:** "*Po rozwiązaniu problemów prosimy o kontakt z naszym wsparciem technicznym w celu przywrócenia normalnego trybu działania. Prosimy nie wahać się kontaktować z naszym zespołem wsparcia technicznego, aby ta sytuacja nie stała się krytyczna.*"
>

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).
