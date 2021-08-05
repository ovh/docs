---
title: 'Przyczyny wyświetlania się "białej strony"'
excerpt: 'W przewodniku tym znajdziesz pomoc dotyczącą diagnozowania przyczyn wyświetlania się białej strony.'
slug: hosting_www_jak_sprawdzic_przyczyne_wyswietlania_sie_bialej_strony
section: Diagnostyka
order : 8
---

## Informacje ogólne
Dlaczego na mojej stronie pojawia się biała strona?

W przeciwieństwie do tego, co moglibyśmy myśleć, biała strona jest przydatna.


- Pozwala ona na ukrywanie błędów generowanych przez stronę www. Dzięki temu nie ujawniamy hakerowi ważnych informacji na temat strony.

Jak naprawić białą stronę?

- Biała strona służy do ukrywania błędów pojawiających się na stronie www. W pierwszej kolejności należy więc wyświetlić błędy, aby móc jest następnie poprawić. 

- Spróbuj sobie przypomnieć, kiedy pojawiła się biała strona: po instalacji lub aktualizacji pluginu lub motywu, po zaktualizowaniu strony.




## Włącz błędy PHP
Do plików swojej strony dodaj taką linię kodu:


```
ini_set('display_errors',1);
```


Warto dodać taką linię do pliku "index.php" lub do pliku często odpytywanego przez Twoją stronę, jak na przykład plik konfiguracyjny strony.

Uwaga: ta linia poleceń musi zostać dodana po tagu otwarcie PHP:


```
<?php
```


Dzięki temu strona wyświetli błąd, który należy poprawić. Biała strona nie będzie się wyświetlać.

## .ovhconfig w trybie development
Inna opcja pozwalająca na poprawne wyświetlanie błędów:


- Uruchom plik ".ovhconfig" w trybie development:


Plik ".ovhconfig" powinien zawierać kod:


```
app.engine=php
app.engine.version=5.4
http.firewall=none
environment=development
```


Udostępniamy przewodnik na temat phpfpm: []({legacy}1175)

![](images/img_2159.jpg){.thumbnail}
Uwaga


- W przypadku strony opartej o moduł WordPress, zastanów się nad zmianą linii poleceń define('WP_DEBUG', false); zmieniając zmienną false na true obecną w pliku wp-config.php.




## Sprawdź błędy związane z pamięcią cache
Sprawdzanie, czy biała strona jest jeszcze widoczna bez używania pamięci cache serwera:


- Na końcu adresu strony www dodaj dostęp poprzez specyficzny port :82

Przykład: http://twoja-strona.pl:82


Dzięki temu połączysz się bezpośrednio ze stroną na klastrze bez korzystania z funkcji "Geocache".

Możesz podać porty od 81 do 85.

![](images/img_2160.jpg){.thumbnail}


## Wykorzystanie funkcji Firebug - Błąd 429 - 500 - 200

## Informacje ogólne
Zalecamy skorzystanie z funkcji FireBug, aby uzyskać dodatkowe informacje na temat białej strony.

## Błąd 429
FireBug pozwala na znalezienie interesujących błędów. 

Przykład: sprawdź, czy błąd 429 jest widoczny w zakładce sieci.

Błąd 429 wskazuje na zbyt dużą liczbę zapytań na stronie www.


- Aktywacja funkcji phpfpm może pomóc w rozwiązaniu tego problemu:

Udostępniamy przewodnik na temat phpfpm: []({legacy}1175).

Aktualnie ten błąd jest widoczny bezpośrednio na stronie poprzez stronę informacyjną generowaną przez OVH.

- Jeśli aktywacja PHP-FPM nie rozwiąże problemu, możesz wziąć pod uwagę upgrade oferty.



![](images/img_2158.jpg){.thumbnail}

## Błąd 500
W tym przypadku może się pojawić biała strona. 

Po skorzystaniu z narzędzia FireBug na tej stronie, odnajdziemy błąd 500 w części sieć. 

Nie można sprawdzić, skąd pochodzi problem. Należy więc włączyć błędy jak zostało to wskazane [wcześniej](#diagnostique_applicable_activer_les_erreurs_php).

Następnie należy usunąć napotkany błąd.

![](images/img_2161.jpg){.thumbnail}

## Informacja 200 ok
W tym przypadku może się pojawić biała strona. 

Po skorzystaniu z narzędzia FireBug na tej stronie, odnajdziemy informację "200 OK" w części sieć. 

Informacja 200 ok nie jest komunikatem błędu.

 Komunikat ten wskazuje, że strona załadowała się poprawnie, ale pojawia sie biała strona.


- W tym przypadku aktywacja komunikatów z błędami będzie bezużyteczna, ponieważ nie pojawi się żaden błąd.

Należy więc usunąć problem bez dostępu do komunikatów z błędami.
Ten przypadek pojawia się często na stronach z modułem WordPress.


![](images/img_2162.jpg){.thumbnail}

