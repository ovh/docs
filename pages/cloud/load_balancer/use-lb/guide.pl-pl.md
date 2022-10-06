---
title: Zarządzanie usługą Load Balancer z Panelu klienta
slug: konfiguracja-loadbalancer
excerpt: Podsumowanie najważniejszych funkcji i rozpoczęcie korzystania z usługi Load Balancer z Panelu klienta
section: Pierwsze kroki
---

**Ostatnia aktualizacja dnia 2018-01-12**

## Wprowadzenie
Niniejsza instrukcja ma na celu zapewnienie użytkownikowi pomocy we wdrożeniu usługi Load Balancer i przedstawienie jej głównych funkcji.

## Wymagania początkowe

- Dostęp do Twojego Panelu klienta
- Zamówienie rozwiązania [Load Balancer]( https://www.ovh.pl/rozwiazania/load-balancer/)

## W praktyce

### Zarządzanie usługą Load Balancer z Panelu klienta

W celu rozpoczęcia konfiguracji rozwiązania Load Balancer z Panelu klienta, przejdź w lewym menu do sekcji `Cloud` (1), a następnie do sekcji `Load Balancer` (2). Pojawi się strona główna usługi:

![Load Balancer](images/lb_main_page.png){.thumbnail}

Na stronie głównej znajdują się następujące informacje:

|Element|Opis|
|---|---|
|Status|Podsumowanie usługi Load Balancer zawierające adres IP, front-endy, farmy serwerów oraz dodane serwery|
|Zużycie|Raport o wykorzystanym przesyle danych LoadBalancer|
|Wykresy|Tu znajdują się wykresy dotyczące usługi pokazujące ilość jednoczesnych logowań lub ilość żądań na minutę|
|Informacje|Twoje IPv4 i powiązane adresy Additional IP oraz ilość IPv4 wyjściowych (szczegóły po kliknięciu wielokropka)|
|Konfiguracja|Tu możesz nadać swojej usłudze własną nazwę (która pojawi się u góry w lewej kolumnie), ustawić szyfrowanie oraz określić centrum danych, w którym znajduje się Twój Load Balancer|
|Abonament|Tu znajdują się szczegóły administracyjne Twojej oferty|

W celu dodania `Front-endu`{.action} lub `Farmy serwerów`{.action}, należy po prostu kliknąć odpowiedni przycisk, po czym kontekstowe menu pomoże Ci skonfigurować poszczególne elementy usługi.

### Zarządzania front-endami

W celu dodania frontendów wystarczy przejść do sekcji `Front-endy`{.action} i kliknąć `Dodaj front-end`{.action}. Uzyskasz wówczas dostęp do następującego menu:

![Dodanie front-endu](images/add_frontend.png){.thumbnail}

Szczegóły elementów front-endu:

|Element|Opis|
|---|---|
|Nazwa|Zdecyduj czy chcesz nadać front-endowi nazwę, co może przydać się do szybkiej identyfikacji, jeśli ma się ich kilka|
|Protokół|Możesz wybrać spośród HTTP, HTTPS, TCP, SSL TCP (lub TLS) oraz UDP|
|Port|Tu wybierz port nasłuchu, którego będziesz używać|
|Datacenter|Wybór pomiędzy tylko swoim lub wszystkimi centrami danych przy tworzeniu front-endu|
|Farma domyślna|Jeśli masz kilka skonfigurowanych farm serwerów, możesz wskazać domyślną farmę dla każdego front-endu|

Masz również dostęp do ustawień zaawansowanych:

![Ustawienia zaawansowane](images/advanced_frontend.png){.thumbnail}

|Element|Opis|
|---|---|
|Dedykowany Additional IP|Lista adresów Additional IP serwerów zdalnych|
|Ograniczenie dostępu po IP|Lista umożliwiająca ograniczenie dostępu zdalnego wyłącznie do Load Balancer, IPv4|
|Przekierowanie HTTP|Dodanie adresu URL przekierowania HTTP|
|Nagłówek HTTP|Tu dodaje się nagłówek HTTP|

### Zarządzania farmami

W celu dodania farmy serwerów wystarczy przejść do sekcji `Farmy serwerów`{.action} i kliknąć `Dodaj farmę serwerów`{.action}. Opcje główne będą takie same jak w przypadku front-endu. Inne natomiast będą opcje zaawansowane:

![Dodanie farmy](images/advanced_cluster.png){.thumbnail}

|Element|Opis|
|---|---|
|Tryb równoważenia|Ustawienia preferowanej opcji równoważenia obciążenia dla IP: Round-robin, First, Last, Source lub URI|
|Monitorowanie sesji|Tu wybiera się czy monitorowanie sesji ma odbywać się poprzez Cookie czy poprzez IP Source|
|Sonda|Wybór i aktywowanie sondy|

### Zarządzania serwerami

Po utworzeniu farmy serwerów pozostaje dodać do niej serwery (poniżej przedstawione zostały szczegóły dotyczące opcji oraz opcji zaawansowanych):

![Dodanie serwera](images/add_server.png){.thumbnail}
![Dodanie serwera](images/add_server_advanced.png){.thumbnail}

|Element|Opis|
|---|---|
|Nazwa|Zdecyduj czy chcesz nadać serwerowi nazwę, co może przydać się do szybkiej identyfikacji, jeśli ma się ich kilka|
|Adres IPv4|Dodanie adresu IP usługi, która będzie pełnić funkcję serwera|
|Port|Port serwera|
|Serwer rezerwowy|Wskazanie danego serwera jako rezerwowego|
|Użycie sondy farmy|Wybór użycia sondy wskazanej podczas tworzenia farmy|
|Szyfrowanie SSL zapytań|Szyfrowanie zapytań za pomocą certyfikatu SSL|
|Cookie|Dodanie indywidualnego pliku cookie sesji|
|Łańcuch certyfikatu|Dodanie łańcucha certyfikatu SSL|
|Waga (weight) równoważenia|Wybór wagi (weight) na potrzeby równoważenia obciążenia|

### Zarządzanie certyfikatami SSL

Do Load Balancera można dodać  certyfikatSSL w sekcji `Certyfikat SSL`{.action}. Tu dostępne są dwie możliwości – zamówienie certyfikatu SSL poprzez OVH lub dodanie certyfikatu zewnętrznego.

#### Certyfikat SSL OVH

W celu zamówienia certyfikatu SSL wystarczy przejść do sekcji `Certyfikat SSL`{.action}, a następnie kliknąć `Zamów certyfikat SSL`{.action} i zastosować się do podanych instrukcji:

![Zamówienie certyfikatu SSL](images/ordering_ssl.png){.thumbnail}

|Element|Opis|
|---|---|
|Nazwa|Zdecyduj czy chcesz nadać certyfikatowi nazwę, co może przydać się do szybkiej identyfikacji, jeśli ma się ich kilka|
|Rodzaj certyfikatu|Darmowy (Let's Encrypt), Comodo DV lub Comodo EV (szczegóły pod tym adresem: https://www.ovh.pl/ssl/)|
|Fully Qualified Domain Name (FQDN)|Powiązana/-e domena/-y|

#### Dodanie zewnętrznego certyfikatu SSL

Jeśli masz już swój certyfikat SSL, masz możliwość dodania go bezpośrednio:

![Dodanie certyfikatu SSL](images/external_ssl.png){.thumbnail}

|Element|Opis|
|---|---|
|Nazwa|Zdecyduj czy chcesz nadać certyfikatowi nazwę, co może przydać się do szybkiej identyfikacji, jeśli ma się ich kilka|
|Prywatny klucz|Pole dodawania prywatnego klucza|
|Certyfikat|Pole dodawania certyfikatu|
|Łańcuch|Pole dodawania certyfikatu bazowego|

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com>.