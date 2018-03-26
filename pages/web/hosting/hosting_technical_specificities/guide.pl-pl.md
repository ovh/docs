---
title: 'Hosting www: Informacje techniczne związane z hostingiem www'
excerpt: Przewodnik dotyczący informacji technicznych związanych z hostingiem www.
id: '1463'
slug: hosting_www_informacje_techniczne_zwiazane_z_hostingiem_www
section: Pierwsze kroki
---


## Program FTP - Pasywny
Możesz zaktualizować swój program FTP w ten sposób:

Dla programu FileZilla:

Przejdź do zakładki "Edytuj" -- "Ustawienia..." -- "Połączenie" -- "FTP"

Zaznacz pole "Tryb pasywny".

Dla programu Cyberduck:

Kliknij na "Nowe połączenie".

Wybierz "Więcej opcji" i "Pasywny" w części "Tryby połączenia".


## Jednoczesne połączenia do bazy danych

- Aktualnie bazy danych na hostingu www ("Perso" // "Pro" // "Moduł") mają ograniczenie do 30 jednoczesnych połączeń.




## Połączenia z zewnętrznego serwera

- Ze względów bezpieczeństwa nie można łączyć się z bazą danych na hostingu www z zewnętrznego serwera. 


Tylko serwery hostingu www OVH mogą łączyć się z serwerem MySQL. 

Każde inne połączenie spowoduje następujący błąd:


```
Warning: MySQL Connection Failed: Host "ip.votre.connexion" is not allowed to connect ...
```



- Zasada ta dotyczy również oferty Prywatnego Serwera SQL.




## Zmienne serwera SQL na hostingu www
Jak znaleźć wartość max_allowed_packet?

Przejdź do interfejsu PhpMyAdmin i w konsoli zapytań SQL wpisz: show variables;

Wyświetli się lista zmiennych.


## PHP-FPM
Aby przyspieszyć odpowiedzi PHP, dostosowaliśmy PHP-FPM do naszej infrastruktury www. 

Podczas testów otrzymaliśmy 7 razy szybsze wyniki niż na poprzednim mechanizmie. 

Udostępniamy przewodnik dotyczący zastosowania PHP-FPM:


- []({legacy}1175)


Niektóre zmienne serwerów zmieniają się podczas korzystania z PHP-FPM:

|Zmienna|bez PHP-FPM|z PHP-FPM|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



- W przypadku domeny głównej plik .ovhconfig działa w katalogu głównym hostingu lub w podkatalogu poziomu 1 (na przykład: /www/) ale nie w katalogach poziomu 2 i wyższego (na przykład: /www/test/ , /www/test/test2/)

- PHP-FPM jest domyślnie aktywne w ofercie hostingu www 2014.




## Ścieżka do serwera
Po aktualizacji zabezpieczeń na serwerze (04/06/2014), ścieżka do serwera zmieniła się. 

Poprzez użycie skryptu:
```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```


Zwracana wcześniej ścieżka tona przykład: /homez.XXX/USER/Nazwa_KATALOGU/test.php

Aktualnie główne konto to: /home/USER/Nazwa_KATALOGU/test.php


- Kompatybilność jest zachowana dzięki linkom symbolicznym (/homez.XXX/USER to link do /home/USER)


Linki symboliczne będą zawsze działać.


## Host serwera
Nie można pobrać hosta bezpośrednio przez funkcję REMOTE_HOST:


```
<?php
echo $_SERVER['REMOTE_HOST'] ;
?>
```


Możesz skorzystać z funkcji gethostbyaddr()


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
?>
```




## FTP przez PHP
Po aktualizacji zabezpieczeń na serwerach współdzielonych (04/06/2014), połączenie z FTP przez PHP w trybie aktywnym nie jest już możliwe. 

Błąd PHP, który może się pojawić:


```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


Funkcja bind() nie jest już dostępna.

Aby uniknąć takiej sytuacji wystarczy włączyć tryb pasywny:

Kod PHP:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on Ovh shared hosting)
ftp_pasv( $conn_id, true );
```



- Tryb aktywny FTP nie jest już dostępny. Należy korzystać z trybu pasywnego




## Biblioteki
Informacje o dostępnych bibliotekach:

|Biblioteka|Dostępność|
|Django Python|nie aktywna|
|FFmepg|nie aktywna|
|memcached|nie aktywna|
|apc|nie aktywna|
|imagik|nie aktywna|
|GD|aktywna|
|zend (opcache)|aktywna|
|PDO|aktywna|
|Zip - Gzip|aktywna|


Informacje na temat klastra można uzyskać poprzez link:
[http://cluster015.ovh.net/infos/](http://cluster015.ovh.net/infos/)

Zamiast wprowadzone klastra wpisz swój klaster. Informację tą uzyskasz w panelu manager:
"Hosting" - "Podsumowanie".
Uwaga: w przypadku korzystania z PHP-FPM, ze względów bezpieczeństwa, poniższe opcje są wyłączone:


- register_globals
- magic_quotes_gpc




## Wykonanie skryptu PHP przez ssh
Aktualnie na hostingach www z SSH domyslna wersja PHP to 4.4.9.


- Poniżej znajduje się przykład polecenia do wykonania pliku test.php z wersją PHP 4.4.9.


```
php test.php
```


- Jeśli chcesz korzystać z wersji PHP 5.3 dla skryptu test.php.


```
php.ORIG.5_3 test.php
```


- Jeśli chcesz korzystać z wersji PHP 5.4 dla skryptu test.php.


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```




