---
title: Przekierowanie domeny zarządzanej w OVHcloud
slug: przekierowanie-domeny
excerpt: Poznaj rodzaje przekierowań i dowiedz się, jak utworzyć przekierowanie dla domeny zarządzanej w OVHcloud
section: Informacje ogólne
---

**Ostatnia aktualizacja dnia 02-02-2018**

## Wprowadzenie

Przekierowanie nazwy domeny pozwala na skierowanie jej na nową stronę docelową. Istnieją różne rodzaje przekierowań, które odpowiadają na szczególne potrzeby.

**Poznaj typy przekierowań i dowiedz się, jak utworzyć przekierowanie dla domeny zarządzanej w OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Nawiązane połączenie z hostingiem przez ftp (jeżeli chcesz dodać plik .htaccess).

## W praktyce

### Zastosowanie przekierowania domeny

Zanim utworzysz przekierowanie dla swojej nazwy domeny, musisz wiedzieć, w jakich sytuacjach może się przydać. Nazwę domeny możesz przekierować na nową docelową stronę, czyli zazwyczaj na inną nazwę domeny. 

W wielu przypadkach, przekierowanie może okazać się właściwym wyborem. Najczęściej ma to miejsce w sytuacji, gdy zmieniasz nazwę strony internetowej. W takim przypadku, przekierowanie pozwala na automatyczne skierowanie internautów, odwiedzających starą stronę internetową, na nową.

Taką konfigurację domeny można wykonać na kilka sposobów:

- **w Panelu klienta OVHcloud**: asystent konfiguracji pozwoli Ci na ustawienie parametrów przekierowania;

- **za pomocą kodu w plikach na serwerze**: sam tworzysz kod przekierowania w pliku (zazwyczaj jest to plik .htaccess).

Pamiętaj, że stworzenie przekierowania może mieć wpływ na pozycjonowanie Twojej strony internetowej. Prosimy o zachowanie szczególnej ostrożności podczas wykonywania tych czynności lub o skontaktowanie się ze specjalistą zajmującym się pozycjonowaniem stron.

### Przekierowanie domeny w Panel klienta

Kiedy już zalogujesz się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w menu usług po lewej stronie, przejdź do sekcji `Domeny`{.action} , a następnie do zakładki `Przekierowanie`{.action}.

Tabela wyświetli aktywne przekierowania dla Twojej nazwy domeny. 

W celu dodania przekierowania, kliknij na przycisk `Dodaj przekierowanie`{.action} .

W oknie, ktόre się wyświetli, podaj nazwę domeny (lub subdomeny), ktόrą chcesz przekierować. Jest to nazwa domeny źródłowej czyli przekierowywanej.

![Etap 1: domena przekierowywana](images/adding_redirection_1.png){.thumbnail}

Na tym etapie, powinieneś wybrać adres, na który chcesz przekierować wskazaną nazwę domeny. Dostępne są dwie możliwości: 

- **przekierowanie na adres strony WWW**

Przekierujesz w ten sposób nazwę domeny na inną. To rozwiązanie sprawdzi się, w przypadku gdy zmieniasz nazwę Twojej strony WWW;

- **przekierowanie na serwer w OVHcloud lub u innego dostawcy**

Ten wariant wymaga zmiany konfiguracji DNS danej domeny na inną wartość docelową (pole A, AAAA lub CNAME). To rozwiązanie jest idealne, w przypadku gdy Twoja strona internetowa nie jest już hostowana w tym samym miejscu, przy czym nazwa domeny jest podobna. 
Jeżeli Twoja nazwa domeny wykorzystuje konfigurację OVHcloud, możesz również wykonać tę czynność poprzez wprowadzenie zmiany w Panelu klienta OVHcloud (sprawdź przewodnik: [Jak edytować strefę DNS?](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external})

Od tego momentu, przewodnik omawia tylko i wyłącznie przekierowanie na inny adres WWW.  W kwestii drugiej możliwości, skontaktuj się ze swoim dostawcą usług w celu uzyskania informacji na temat tego, jakie wpisy DNS należy zmienić, tak aby skierować domenę na wybrany serwer. 

![Etap 2: rodzaje przekierowań](images/adding_redirection_2.png){.thumbnail}

W celu dokonania **przekierowania na inną stronę WWW**, wybierz teraz rodzaj przekierowania, jaki chcesz zastosować. Dostępne są dwie możliwości.

|Rodzaj przekierowania|Opis|
|---|---|
|Widoczne|Nazwa domeny, ktόrą wpiszesz do przeglądarki internetowej (stary adres) zostanie przekierowana na nową nazwę domeny. Adres WWW, ktόry jest widoczny w pasku przeglądarki internetowej, zostanie zmieniony na nowy adres.|
|Niewidoczne|Nazwa domeny, ktόrą wpiszesz do przeglądarki internetowej (stary adres) nie zostanie przekierowana na nową nazwę domeny. Nadal będziesz widział w pasku przeglądarki stary adres, ktόry za pomocą ramki nazywanej *iframe*, wyświetli stronę WWW hostowaną pod nową nazwą domeny. Uwaga: może okazać się, że ten typ przekierowania nie jest kompatybilny ze wszystkimi stronami WWW i może on mieć wpływ na pozycjonowanie Twojej strony.|

![Dokonanie wyboru między przekierowaniem widocznym i niewidocznym](images/redirection_3xx_1.png){.thumbnail}

#### Przekierowanie widoczne

W przypadku przekierowania widocznego, masz dwie możliwości konfigutracji.

|Rodzaj przekierowania|Kod HTTP|Opis|
|---|---|---|
|Przekierowane widoczne stałe |301|Jest to „standardowy” rodzaj przekierowania.|
|Przekierowanie widoczne tymczasowe.|302|Z tego rodzaju przekierowania należy korzystać okazjonalnie (w ramach tymczasowych wydarzeń lub sezonowo, na przykład). Pozycjonowanie w wyszukiwarkach daje gorsze wyniki niż w przypadku przekierowania 301.|

Po dokonaniu wyboru, należy wpisać adres przekierowania (adres WWW, na ktόry ma przekierowywać stara domena). 

![Dokonanie wyboru między przekierowaniem widocznym, stałym lub tymczasowym](images/redirection_3xx_2.png){.thumbnail}

Po podaniu informacji, kliknij `Dalej`{.action}, po czym sprawdź czy wyświetlone informacje są poprawne, i następnie kliknij `Zatwierdź`{.action}. 

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, ktόry wynosi od 1 do 24 godzin maksimum. Po tym czasie, zmiana będzie w pełni aktywna. 
>

#### Przekierowanie niewidoczne 

W przypadku przekierowania niewidocznego (kod HTTP 200), uzupełnij informacje, ktόre są wyświetlone (adres WWW oraz opcje), i następnie kliknij `Dalej`{.action}. Sprawdź czy wyświetlone informacje są poprawne i następnie kliknij `Zatwierdź`{.action}. 

|Pola|Opis|
|---|---|
|Tytuł|Wpisz tytuł Twojej strony WWW. Tytuł pojawi się jako tytuł strony w belce przeglądarek internetowych, na przykład.|
|Kluczowe słowa|Kluczowe słowa mogą być wykorzystane przez wyszukiwarki w celu pozycjonowania strony.|
|Opis|Dodaj opis Twojej strony WWW. Opis ten jest wykorzystany w wynikach wyszukiwarek.|

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, ktόry wynosi od 1 do 24 godzin maksimum. Po tym czasie, zmiana będzie w pełni aktywna. 
>

![Tworzenie niewidocznego przekierowania](images/invisible_redirection.png){.thumbnail}

### Przekierowanie domeny za pomocą pliku .htaccess

Pliki .htaccess są plikami konfiguracyjnymi, w których można wpisać odpowiedni. W czasie wykonywania kodu Twojej strony WWW na serwerze web (Apache), polecenia zostaną zinterpretowane i tym samym wykonane. Istnieje możliwość utworzenia przekierowań za pomocą kodu. 

Jeżeli korzystasz z podkatalogόw na swoim serwerze hostingowym, modyfikacja pliku .htaccess wymaga kompetencji technicznych, z tego względu, iż nieprawidłowo wykonana czynność może spowodować, że jedna lub kilka stron WWW będą niedostępne. W razie wątpliwości, i jeżeli chcesz skorzystać z pomocy w związku z modyfikacją pliku .htaccess, zalecamy skontaktowanie się z programistą specjalizującym się w tym zagadnieniu. 

Możesz także skorzystać z naszej dokumentacji [Wszystko na temat pliku .htaccess](, w ktόrym znajdziesz porady odnośnie jego zastosowania. 

> [!primary]
>
> Zanim przejdziesz do kolejnego etapu i zanim wprowadzisz zmiany w pliku .htaccess, radzimy Ci zrobić zapasową kopię tego pliku, co w razie potrzeby pozwoli na odzyskanie poprzedniej wersji. 
>

- **Redirect permanent**

Kod, ktόry zostanie wysłany będzie kodem HTTP 301. Kod ten wysyła informacje do robotόw wyszukiwarek internetowych o tym, że należy aktualizować linki do nowego adresu strony.

Poniżej składnia, ktόrą należy zastosować w celu przekierowania strony WWW w całości:

```
Redirect permanent / http://nowa-strona.pl/
```

W celu zmiany katalogu lub pliku:

```
Redirect permanent /stary_katalog http://nowa-strona.tld/nowy_katalog
Redirect permanent /stary_plik.php http://strona.pl/nowy_plik.php
```

- **Redirect gone**

W sytuacji kiedy jakiś plik już nie istnieje, komunikat o kodzie *404” - nie odnaleziono strony o podanym adresie*, lepiej zastąpić bardziej precyzyjnym komunikatem typu *410” – strona o podanym adresie już nie istnieje*.

```
Redirect gone /usuniety.html
```

- **Redirect seeother**

Jeśli zmienisz rozszerzenie pliku, *seeother* pozwala na zmianę typu pliku poprzez wysłanie kodu HTTP 303:

```
Redirect seeother /przyklad.doc http://strona.pl/przyklad.pdf
```

- **Redirect Temp**

W sytuacji, kiedy tymczasowo przenosisz pliki na inną stronę WWW, możesz zastosować tymczasowe przekierowanie typu HTTP 302 .

```
Redirect temp / http://inna_strona.pl/site/
```

## Sprawdź również

[Wszystko na temat pliku .htaccess](https://docs.ovh.com/pl/hosting/hosting_www_plik_htaccess/){.external}

[Jak edytować strefę DNS?](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com](https://community.ovh.com){.external}
