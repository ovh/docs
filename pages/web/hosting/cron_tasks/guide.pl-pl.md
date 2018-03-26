---
title: 'Hosting www: Automatyczne zadania / Cron'
excerpt: 'Hosting www: Automatyczne zadania / Cron'
id: '1990'
slug: hosting_www_automatyczne_zadania_cron
section: CRON -  automatyzacja zadań
---


## Dodawanie automatycznych zadań
Wybierz swój hosting w kolumnie z lewej strony (1), kliknij na zakładkę "Plus +", wybierz "Planowanie zadań - Cron" (2) i kliknij na "Dodaj zadanie" (3).

![](images/3261.png){.thumbnail}
Na tym etapie należy wskazać ścieżkę do skryptu i typ języka programowania. 
Dwa pozostałe pola są opcjonalne. Logi na e-mail pozwalają na otrzymywanie logów wykonywania zadania Cron na wybrany adres e-mail. 


- E-mail ten zostanie wysłany tylko w przypadku pojawienia się błędu.


Możesz również zdefiniować opis dla swojego zadania Cron.

![](images/3262.png){.thumbnail}
Drugi etap dotyczy częstotliwości wykonywania zadania Cron.

![](images/3264.png){.thumbnail}
Dostępne są dwa tryby: tryb prosty oraz tryb expert.

![](images/3265.png){.thumbnail}
Po ustawieniu zadania Cron pojawi się okno z podsumowaniem. 


- Jeśli informacje są poprawne, zatwierdź utworzenie automatycznego zadania.



![](images/3266.png){.thumbnail}
Pojawi się ten komunikat z informacją o zarejestrowaniu zlecenia.

![](images/3267.png){.thumbnail}


## Modyfikacja automatycznego zadania
Wybierz swój hosting w kolumnie z lewej strony (1), kliknij na zakładkę "Plus +", wybierz "Planowanie zadań - Cron" (2) i kliknij na długopis (3) przy zadaniu, które chcesz zmodyfikować.

![](images/3268.png){.thumbnail}
Na tym etapie będziesz mógł zmodyfikować ścieżkę i język programowania, włączyć logi na e-mail i dodać opis dla zadania Cron.

![](images/3269.png){.thumbnail}


## Usuwanie automatycznego zadania
Wybierz swój hosting w kolumnie z lewej strony (1), kliknij na zakładkę "Plus +" i wybierz "Planowanie zadań - Cron" (2). Kliknij na kosz (3) przy zadaniu, które chcesz usunąć.

![](images/3270.png){.thumbnail}
Pojawi się podsumowanie automatycznego zadania, które chcesz usunąć. Zatwierdź swój wybór, jeśli informacje są poprawne.

![](images/3271.png){.thumbnail}


## Testowanie wykonywania automatycznego zadania w przeglądarce internetowej.
Możesz sprawdzić swój skrypt bezpośrednio w przeglądarce internetowej, aby zobaczyć, czy nie generuje on błędów.
Przykładowo jeśli zadanie Cron znajduje się w katalogu www/cron.php a Twoja domena to test.com, wpisz w przeglądarce adres http://test.com/cron.php.
Aby test był optymalny, wersja PHP hostingu powinna być taka sama, jak wersja wskazana podczas dodawania automatycznego zadania.
Jeśli pojawi się błąd, należy poprawić skrypt. 
Jeśli nie pojawi się żaden błąd, zalecamy sprawdzenie logów wykonywania zadań Cron.


## Sprawdzanie logów wykonywania automatycznego zadania
Wybierz swój hosting w kolumnie z lewej strony. Następnie kliknij na zakładkę "Plus +".

![](images/4012.png){.thumbnail}
Kliknij na link "Logi".

![](images/4013.png){.thumbnail}
Jeśli automatyczne zadanie zostało wykonane w ciągu dnia, możesz sprawdzić logi wykonywania w OVH Speed Log (1).

-> Jeśli skrypt został wykonany ponad 24 godziny temu, wybierz plik logów z miesiąca, który chcesz sprawdzić (w naszym przykładzie jest to plik z czerwca).

![](images/3274.png){.thumbnail}
Przykład logów dla wykonywanego zadania cron:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


W tym przykładzie poniższa linia logów wskazuje, że automatyczne zadanie nie zostało poprawnie wykonane, ponieważ ścieżka do skryptu jest błędna lub nie istnieje:


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Limity

- Na hostingu www nie można określić minuty, w której automatyczne zadanie powinno zostać wykonane. Zadanie może być wykonywane najczęściej raz na godzinę.

- Czas wykonywania zadania jest ustawiony na 60 minut.

- Generowanie danych jest ustawione na 5 MB(stdin/stderr).




## Automatyczne zadania ze zmiennymi
Nie ma możliwości wprowadzania ścieżek automatycznych zadań z przechodzeniem zmiennych. 

Przykład:

```
/www/cron.php?variable=test
```



- Możesz zdefiniować te zmienne w swoim skrypcie.




## Korzystanie ze ścieżek absolutnych
Aby zadanie cron działało, należy w skrypcie używać ścieżek absolutnych a nie relatywnych.
Aby uzyskać adres bieżącej ścieżki, skorzystaj ze stałej "_DIR_":
[Dokumentacja PHP](http://php.net/manual/pl/language.constants.predefined.php)


## Raport z wykonywania
Raport z wykonywania zadania Cron jest wysyłany w formie e-maila raz dziennie.


## Odpytywanie innego skryptu
Jeśli Twój skrypt używany przez zadanie Cron odpytuje inne skrypty, powinieneś używać ścieżki absolutnej nie relatywnej, aby zadanie działało. Ścieżka absolutna hostingu zaczyna się od:


```
/home/loginFTP/
```




## W przypadku błędu podczas wykonywania
Jeśli podczas wykonywania zadania Cron pojawi się błąd, zostanie ono wyłączone po 10 próbach wykonania.


## Przykład logów
Prawidłowe wykonanie skryptu:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Błędne wykonanie skryptu (odpytywany plik nie został odnaleziony):

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Błędne wykonanie skryptu na skutek timeoutu:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Błędne wykonanie skryptu na skutek przekroczenia limitu generowanych danych:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Błędne wykonanie skryptu na skutek błędu związanego z nieprawidłowymi uprawnieniami (chmod) lub z nieprawidłową konfiguracją w pliku .ovhconfig:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



