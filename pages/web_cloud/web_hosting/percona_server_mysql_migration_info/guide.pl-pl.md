---
title: "Migracja MySQL do Percona Server dla MySQL"
excerpt: "Poznaj zalety migracji z MySQL na Percona Server dla MySQL"
updated: 2024-07-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W ramach naszego nieustannego zaangażowania w dostarczanie wydajnych i niezawodnych rozwiązań, OVHcloud zdecydowało się na migrację usług baz danych współdzielonych MySQL od Oracle do Percona Server dla MySQL.
Niniejszy przewodnik wyjaśnia, co wiąże się z przechodzeniem na nowy serwer Percona Server i daje pewność, że aktualizacja tego serwera nie ma wpływu na korzystanie z bazy danych MySQL.

**Dowiedz się więcej o korzyściach płynących z migracji MySQL z Oracle do Percona Server dla MySQL.**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting) z powiązaną współdzieloną bazą danych OVHcloud (MySQL).

## W praktyce

### Porównanie Percona Server dla MySQL z MySQL przez Oracle

Percona Server dla MySQL to ulepszona i w pełni kompatybilna wersja MySQL, zapewniająca większą wydajność i dodatkowe funkcje bez uszczerbku dla kompatybilności z istniejącymi aplikacjami MySQL. Dla zilustrowania tej sytuacji poniżej znajduje się tabela porównawcza przedstawiająca kompatybilność funkcji MySQL dla Oracle i Percona Server dla MySQL.

|Funkcje|MySQL by Oracle|Percona Server for MySQL|
|---|---|---| 
|Kompatybilność SQL|Kompletny|Kompletny|
|Pomoc techniczna dla silników InnoDB|Tak|Tak|
|Skalowalność|Standard|Zakres|
|Narzędzia do zarządzania i monitoringu|Podstawowe|Zaawansowane|
|Bezpieczeństwo|Standard|Zwiększone|

### Wpływ na użytkownika końcowego

Dla użytkownika końcowego przejście na Percona Server dla MySQL jest transparentne:

- **Nie trzeba wprowadzać żadnych zmian w kodzie**: Twoje aplikacje będą działać tak samo jak wcześniej.
- **Zwiększona wydajność**: wydajność można zwiększyć dzięki optymalizacji silnika przestrzeni dyskowej InnoDB i zaawansowanym narzędziom do monitoringu.
- **Rozszerzona pomoc techniczna**: Percona oferuje obszerną pomoc techniczną, która może pomóc w bardziej efektywnym rozwiązywaniu problemów.

### Zakończenie

Migracja MySQL z Oracle na Percona Server dla MySQL ma na celu zwiększenie wydajności i stabilności baz danych współdzielonych w OVHcloud. Aktualizacja ta ma być transparentna dla użytkowników MySQL, bez przerwy w działaniu usługi i bez zmiany interfejsu użytkownika. Gwarantujemy, że migracja odbędzie się bez komplikacji, aby utrzymać ciągłość i jakość usług OVHcloud.

## Sprawdź również

[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).