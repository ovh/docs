---
title: "Co zrobić, jeśli wyświetla się strona 'Your IP has been banned'?"
excerpt: "Dowiedz się, jak odblokować adres IP, jeśli na Twojej stronie WWW będzie wyświetlana strona 'Your IP has been banned'"
updated: 2025-07-11
---

## Wprowadzenie

Współdzielona infrastruktura, na której zlokalizowane są pakiety hostingowe OVHcloud, posiada kilka systemów bezpieczeństwa.
Jeśli Twoja strona WWW wyświetla stronę "Your IP has been banned", oznacza to, że adres IP, z którego próbujesz uzyskać dostęp do Twojej strony WWW został tymczasowo zablokowany przez nasze systemy bezpieczeństwa.

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

**Dowiedz się, jak odblokować adres IP, jeśli na Twojej stronie WWW wyświetli się strona z komunikatem "Your IP has been banned".**

## Wymagania początkowe

- Posiadanie [hostingu](/links/web/hosting) OVHcloud.
- Posiadanie [danych do logowania](/pages/web_cloud/web_hosting/ftp_connection) do przestrzeni dyskowej FTP Twojego hostingu.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

Strona "Your IP has been banned" może się wyświetlać z różnych powodów (lista nie jest wyczerpująca):

- Bardzo duża liczba zapytań, podobnych lub nie, jest wykonywana w bardzo krótkim czasie z tego samego adresu IP.
- Zapytania wykonane z danego adresu IP są podejrzane.

### 1 - Pobierz informacje dostępne na stronie "Your IP has been banned"

W pierwszym kroku pobierz trzy poniższe informacje, które wyświetlają się na stronie "Your IP has been banned":

- `IP address` (na przykład: 203.0.113.0).
- `Date` (na przykład: 2025-07-01T16:30:45:150Z).
- `Request ID` (na przykład: AbCdEf-your-request-ID-GhIjKlM).

### 2 - Skontaktuj się z pomocą

Po zebraniu danych utwórz [zgłoszenie serwisowe](https://help.ovhcloud.com/csm?id=csm_get_help) z poziomu Centrum pomocy OVHcloud, określając:

- Wiadomość napotkana na stronie ("Your IP has been banned").
- Trzy elementy wcześniej pobrane (`IP address`, `Date` i `Request ID`).
- URL, pod którym strona się wyświetla (na przykład: `https://www.domain.tld/index.php`).
- Używana przeglądarka internetowa.

Pomoc techniczna skontaktuje się z Tobą tak szybko, jak to możliwe, aby poinformować Cię o przyczynie blokady.

## Sprawdź również

[Przykłady zastosowania - Porady po włamaniu się na stronę WWW](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).