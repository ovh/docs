---
title: "Hosting WWW - Sprawdzanie statystyk i logów CDN"
excerpt: "Dowiedz się, jak sprawdzić statystyki i logi CDN Twojej strony WWW w ramach Twojego pakietu hostingowego"
updated: 2025-10-09
---

## Wprowadzenie

Niniejszy przewodnik wyjaśnia, jak sprawdzić statystyki i logi generowane przez [opcję CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) dostępną w ramach Twojego pakietu hostingowego [hosting](/links/web/hosting).

**Dowiedz się, jak sprawdzić statystyki i logi CDN Twojej strony WWW w ramach Twojego pakietu hostingowego.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie [hostingu](/links/web/hosting) z opcją CDN włączoną dla co najmniej jednej domeny.

## W praktyce

### Wyświetl statystyki usługi CDN

Kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **5** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
>> W sekcji `Statystyki odwiedzin na stronie` kliknij przycisk `Wyświetl statystyki`{.action}.
>>
>> ![Statystyki i logi](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}
>>
> **Etap 4**
>>
>> Zostaniesz przekierowany do narzędzia **OVHcloud Web Statistics**. W tym narzędziu kliknij na formularz `Wybór domeny`{.action} znajdujący się na górze strony, następnie wybierz nazwę domeny, dla której aktywny jest CDN.
>>
> **Etap 5**
>>
>> W lewej kolumnie kliknij zakładkę `Cache`{.action}.
>>
>> Teraz wyświetlasz statystyki usługi CDN dla swojej domeny.
>>
>> Jeśli potrzebujesz więcej informacji, zapoznaj się z przewodnikiem „[Hosting - sprawdzanie statystyk i logów strony www](/pages/web_cloud/web_hosting/logs_and_statistics)”.

### Wyświetl logi usługi CDN

Kliknij poniższe zakładki, aby wyświetlić kolejno poszczególne **5** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
>> W części `Logi strony WWW` kliknij przycisk `Sprawdź logi`{.action}.
>>
>> ![Wyświetl logi](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie, która się wyświetli kliknij przycisk `CDN`{.action} na pasku na górze strony.
>>
>> ![OSL CDN](/pages/assets/screens/other/web-tools/logs/osl-cdn.png){.thumbnail}
>>
> **Etap 5**
>>
>> Na nowej stronie, która się wyświetli:
>>
>> - Wybierz wybraną domenę lub subdomenę w rozwijanym menu `Subdomain`{.action}.
>> - W polu `Date`{.action} wpisz datę, dla której chcesz sprawdzić logi CDN.
>> - Następnie kliknij przycisk `Generate`{.action}.
>>
>> > [!primary]
>> >
>> > Logi CDN są niedostępne tego samego dnia, w którym zostały wygenerowane. Dlatego należy poczekać do następnego dnia, aby się z nimi zapoznać.
>> >
>>
>> ![OSL CDN - Wygenerowane logi](/pages/assets/screens/other/web-tools/logs/osl-cdn-subdomain-date-selection.png){.thumbnail}
>>
>> W tabeli, która się wyświetli kliknij przycisk `Download`{.action} po prawej stronie nazwy domeny lub subdomeny, aby pobrać logi CDN.
>>
>> Jeśli potrzebujesz więcej informacji, zapoznaj się z przewodnikiem „[Hosting - sprawdzanie statystyk i logów strony www](/pages/web_cloud/web_hosting/logs_and_statistics)”.

## Sprawdź również

[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)

[Hosting - sprawdzanie statystyk i logów strony www](/pages/web_cloud/web_hosting/logs_and_statistics)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).