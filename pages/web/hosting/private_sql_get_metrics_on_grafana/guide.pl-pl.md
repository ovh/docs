---
title: Informacje o metrykach dla Prywatnego serwera SQL w programie Grafana
excerpt: Informacje o metrykach dla Prywatnego serwera SQL w programie Grafana
id: '2057'
slug: informacje_o_metrykach_dla_prywatnego_serwera_sql_w_programie_grafana
section: Private SQL
---


## 

## Czym jest Docker?
Docker to oprogramowanie, które automatyzuje wdrażanie aplikacji w kontenerach oprogramowania.

![](images/img_3657.jpg){.thumbnail}

## Czym jest Grafana?
Grafana to rozwiązanie open-source pozwalające na przedstawienie danych w formie graficznej.

![](images/img_3658.jpg){.thumbnail}


## Instancja
Aby móc zainstalować oprogramowanie Grafana, należy używać usługi Docker. 
Usługa ta może zostać zainstalowana na różnych produktach proponowanych przez OVH:


- [VPS](https://www.ovh.pl/vps/)
- [Serwer dedykowany](https://www.ovh.pl/serwery_dedykowane/)
- [Instancja Cloud](https://www.ovh.pl/cloud/instances/)




## Docker

## Jak zainstalować?
Skorzystaj z dokumentacji dostępnej na [tej stronie](https://docs.docker.com/engine/installation/).

## Na serwerze VPS
Jeśli dysponujesz serwerem VPS w OVH, możesz wybrać zainstalowanie dystrybucji "Docker on Ubuntu".

![](images/img_3659.jpg){.thumbnail}


## Grafana

## Instalacja oprogramowania Grafana na Docker
Jeśli chcesz używać oprogramowania Grafana na porcie 80 swojego serwera, użyj poniższego polecenia:


```
docker run -i -p 80:3000 grafana/grafana
```


Więcej informacji znajduje się na [tej stronie](http://docs.grafana.org/installation/docker/).
Aby zainstalować oprogramowanie Grafana bez posiadania dystrybucji Docker, skorzystaj z [tej dokumentacji](http://docs.grafana.org/installation/).


## Prywatny serwer SQL

## Typ prywatnego serwera SQL
Musisz posiadać prywatny serwer SQL typu "Docker", aby móc uzyskać metryki.

## Bezpłatna aktywacja na hostingach Performance
Jeśli dysponujesz hostingiem Performance, możesz włączyć za darmo prywatny serwer SQL. Skorzystaj z [tego przewodnika](https://www.ovh.pl/g2023.prywatny_serwer_sql#zarzadzanie_oferta_prywatnego_sql_aktywacja_prywatnego_sql).

## Zamówienie prywatnego serwera SQL
Możesz zamówić prywatny serwer SQL bezpośrednio w panelu klienta. 


- Wszystkie nowo uruchamiane prywatne serwery SQL to serwery typu "Docker".



![](images/img_3660.jpg){.thumbnail}

## Mój prywatny serwer SQL to serwer typu "Legacy" czy "Docker"?
Stare prywatne serwery SQL to serwery typu "Legacy" (przykład: sqlprive-kx11111-009). Nowe serwery to serwery typu "Docker" (przykład: sx11111-012).
Są to dwie różne infrastruktury.

![](images/img_3661.jpg){.thumbnail}


## Uzyskanie tokena przez API OVH

## Logowanie do API OVH
Aby się zalogować do API OVH, wejdź na poniższą stronę i kliknij na "Login".

[https://api.ovh.com/console/](https://api.ovh.com/console/)

![](images/img_3662.jpg){.thumbnail}

## Uzyskanie tokena
Aby pobrać listę prywatnych serwerów SQL przypisanych do konta klienta, należy skorzystać z poniższej funkcji i kliknąć na "Execute":


```
/hosting/privateDatabase
```



![](images/img_3663.jpg){.thumbnail}
Korzystając z poniższej funkcji wpisz nazwę prywatnego serwera SQL typu "Docker":


```
/hosting/privateDatabase/{serviceName}
```


W "graphEndpoint" znajdują się dwie niezbędne informacje:


- readToken
- host



![](images/img_3664.jpg){.thumbnail}


## Korzystanie z oprogramowania Grafana

## Logowanie do oprogramowania Grafana
Zaloguj się korzystając z przeglądarki. Domyślne dane do logowania to:


- admin / admin



![](images/img_3665.jpg){.thumbnail}

## Dodawanie źródła danych
Kliknij na "Data Sources" w kolumnie z lewej strony i na "Add new" w górnej części.

Wypełnij poniższe pola:


- Name: Nazwa źródła danych (w naszym przykładzie "private SQL").
- Default: Tak
- Type: "OpenTSDB"
- URL: Wpisz zawartość pola "host" uzyskaną wcześniej przez API OVH.
- Access: "proxy"
- Http Auth: Zaznacz "Basic Auth", odznacz "With Credentials".
- User: Wpisz zawartość pola "readToken" uzyskaną wcześniej przez API OVH.
- Password: Wpisz zawartość pola "readToken" uzyskaną wcześniej przez API OVH.


Wykonaj test połączenia. Jeśli test się powiedzie, dodaj źródło danych.

![](images/img_3666.jpg){.thumbnail}

## Konfigurowanie "Dashboard"
W kolumnie z lewej strony kliknij na "Dahboards" a następnie w górnej części na "Home" i na "New".


- Pojawi się panel, dla którego możesz zmienić nazwę klikając na ikonkę "Manage Dashboard" i na "Settings".
- W każdej chwili możesz zapisać zmiany klikając na ikonkę dyskietki w górnej części.


Panel składa się z linii ("Row") do dodawania pierwszych wykresów. Kliknij na zielony przycisk, na "Add Panel" i na "Graph".

![](images/img_3667.jpg){.thumbnail}
W zakładce "General" wpisz tytuł wykresu (w naszym przykładzie będzie to "RAM").

![](images/img_3668.jpg){.thumbnail}

- W zakładce "Metrics" sprawdź, czy źródło danych zostało prawidłowo wybrane (w dolnej prawej części).


Pierwsza metryka do wpisania to "memory.hierarchical_memory_limit". Odnosi się ona do maksymalnej pamięci RAM przypisanej do prywatnego serwera SQL. 

Kliknij na "+ Query", aby dodać drugą metrykę "memory.rss". Odnosi się ona do pamięci RAM wykorzystanej przez serwer.

![](images/img_3669.jpg){.thumbnail}
W zakładce "Axes & Grid" w części "Left Y" wybierz jednostkę ""data" i "Bytes".

![](images/img_3670.jpg){.thumbnail}

- W górnej części z prawej strony wybierz okres czasu obserwacji. Oto informacje z ostatnich 60 dni.



![](images/img_3671.jpg){.thumbnail}


## Metryki
Poniżej znajdują się 3 przykłady metryk stałych, za pomocą których możesz monitorować wydajność ma swoim prywatnym serwerze SQL:

|Maksymalna pamięć RAM|memory.hierarchical_memory_limit|
|Wykorzystana pamięć RAM|memory.rss|
|Liczba aktywnych połączeń MySQL|mysql.active_connections|


Na poniższej stronie znajduje się oficjalna dokumentacja na temat metryk Docker:


- [https://docs.docker.com/engine/articles/runmetrics/](https://docs.docker.com/engine/articles/runmetrics/)



