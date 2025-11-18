---
title: "Co zrobić, jeśli wyświetla się strona 'Your request has been blocked'?"
excerpt: "Dowiedz się, jak to zrobić, jeśli Twoja strona WWW wyświetla stronę 'Your request has been blocked'"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Współdzielona infrastruktura, na której zlokalizowane są pakiety hostingowe OVHcloud, posiada kilka systemów bezpieczeństwa.
Jeśli Twoja strona WWW wyświetla stronę "Your request has been blocked", oznacza to, że jedno z zapytań, które próbujesz wykonać na Twojej stronie WWW zostało zablokowane przez nasze systemy bezpieczeństwa.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Dowiedz się, jak to zrobić, jeśli Twoja strona WWW wyświetla stronę 'Your request has been blocked'.**

## Wymagania początkowe

- Posiadanie [hostingu](/links/web/hosting) OVHcloud.
- Posiadanie [danych do logowania](/pages/web_cloud/web_hosting/ftp_connection) do przestrzeni dyskowej FTP Twojego hostingu.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

Strona "Your request has been blocked" może się wyświetlać z różnych powodów (lista nie jest wyczerpująca):

- Zapytanie jest wykonywane z poziomu niezaktualizowanej przeglądarki internetowej (Firefox, Chrome, Safari, Edge, itp.).
- Bardzo duża liczba zapytań, podobnych lub nie, jest wykonywana w niezwykle krótkim czasie.
- Zapytanie próbuje wykonać nieautoryzowane operacje na infrastrukturze współdzielonej, na której znajduje się Twój hosting.

### 1 - Sprawdź, czy Twoja przeglądarka internetowa jest aktualna

Przejdź do ustawień przeglądarki internetowej i sprawdź, czy jest dostępna aktualizacja.

/// details | Kliknij tutaj, aby uzyskać więcej informacji na temat aktualizowania przeglądarki internetowej

Poniżej znajdują się procedury aktualizacji głównych przeglądarek internetowych (dokumentacja dostarczona przez ich wydawców):

- [Firefox](https://support.mozilla.org/pl/kb/Aktualizacja%20Firefoksa).
- [Chrome](https://support.google.com/chrome/answer/95414?hl=pl&co=GENIE.Platform%3DDesktop&oco=0).
- [Safari](https://support.apple.com/pl-pl/102665).
- [Edge](https://support.microsoft.com/pl-pl/topic/ustawienia-aktualizacji-przegl%C4%85darki-microsoft-edge-af8aaca2-1b69-4870-94fe-18822dbb7ef1).

Jeśli Twoja przeglądarka internetowa nie jest widoczna na powyższej liście, zapoznaj się z jej dokumentacją online lub skontaktuj się z pomocą techniczną jej producenta.

///

Po zaktualizowaniu przeglądarki internetowej spróbuj ponownie wejść na Twoją stronę WWW. Jeśli sytuacja się powtórzy, zapraszamy do dalszej lektury przewodnika.

### 2 - Pobierz informacje dostępne na stronie "Your request has been blocked" i skontaktuj się z pomocą

System bezpieczeństwa, który blokuje Twoje zapytania, jest na wcześniejszym etapie niż hosting WWW. W związku z tym logi tego systemu bezpieczeństwa nie będą dostępne z poziomu Twojego panelu klienta OVHcloud.

#### 2.1 - Pobierz informacje dostępne na stronie "Your request has been blocked"

W pierwszym kroku pobierz trzy poniższe informacje, które wyświetlają się na stronie "Your request has been blocked":

- `IP address` (na przykład: 203.0.113.0).
- `Date` (na przykład: 2025-07-01T16:30:45:150Z).
- `Request ID` (na przykład: AbCdEf-your-request-ID-GhIjKlM).

#### 2.2 - Skontaktuj się z pomocą

Po zebraniu danych utwórz [zgłoszenie serwisowe](https://help.ovhcloud.com/csm?id=csm_get_help) z poziomu Centrum pomocy OVHcloud, określając:

- Wiadomość napotkana na stronie ("Your request has been blocked").
- Trzy elementy wcześniej pobrane (`IP address`, `Date` i `Request ID`).
- URL, pod którym strona się wyświetla (na przykład: `https://www.domain.tld/index.php`).
- Używana przeglądarka internetowa.

Pomoc techniczna skontaktuje się z Tobą tak szybko, jak to możliwe, aby poinformować Cię o przyczynie blokady.

## Sprawdź również

[Przykłady zastosowania - Porady po włamaniu się na stronę WWW](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).