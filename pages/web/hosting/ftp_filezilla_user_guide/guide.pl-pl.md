---
title: 'Przewodnik dotyczący korzystania z programu FileZilla'
slug: hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla
excerpt: 'Przewodnik ten wyjaśnia, w jaki sposób korzystać z programu FileZilla.'
id: '1380'
section: 'FTP i SSH'
---

## Prezentacja
FileZilla to program dostępny dla kilku systemów operacyjnych (Windows, MacOS, itp).

Program ten pozwala na zainstalowanie strony internetowej po zalogowaniu do przestrzeni dyskowej hostingu (FTP). 

Aby skorzystać z tego programu, przejdź na stronę: [filezilla.pl](http://filezilla.pl/)

![FileZilla](images/2400.png){.thumbnail}


## Interfejs

## Prezentacja
Strefa 1 zawiera informacje o statusie połączenia, transferu, błędach, itp.

Strefa 2 pobiera informacje o katalogach, aby dotrzeć do katalogu strony (lub do plików) na Twoim komputerze.

Strefa 3 pobiera informacje o katalogach, aby dotrzeć do katalogu na serwerze. 

Strefa 4 pokazuje katalog otwarty na komputerze, pobierając nazwę, rozmiar, rodzaj i datę modyfikacji plików.

Strefa 5 pokazuje katalog otwarty na serwerze, pobierając nazwę, rozmiar, rodzaj i datę modyfikacji, uprawnienia i właściciela plików.

Strefa 6 wskazuje oczekującą listę plików, które zostaną przetransferowane (lub w trakcie transferu) na serwer lub komputer.

Część w górnej części interfejsu (w zielonej ramce) pobiera nazwę hosta (serwer, z którym się łączysz), nazwę użytkownika FTP, hasło i port.

![FileZilla](images/1818.png){.thumbnail}

## Główne menu
Główne menu zawiera podstawowe ikonki. Nie używamy wszystkich przycisków, aby przenieść pliki. Poniżej krótki opis ikonek.

 Otwórz Menedżera stron
 Włącz/wyłącz okno logu wiadomości (1)
 Włącz/wyłącz okno lokalnego drzewa katalogów (2)
 Włącz/wyłącz okno drzewa katalogów na serwerze (3)
 Włącz/wyłącz okno kolejki transferów (6)
 Odśwież plik i listę katalogów
 Uruchom/zatrzymaj przetwarzanie kolejki transferów
 Anuluje bieżącą operację
 Odłącza od aktualnie widocznego serwera
 Łączy z ostatnio używanym serwerem
 Otwiera okno filtrów nazw. 
 Włącz/wyłącz porównywanie katalogów
 Włącz/wyłącz synchronizowane przeglądanie
 Rekursywne wyszukiwanie plików


## Połączenie FTP
Do połączenia z serwerem niezbędne są poniższe informacje:

|Dane do uzupełnienia|Szczegóły|
|---|---|
|Serwer FTP|Adres serwera umożliwiający dostęp do Twojej przestrzeni dyskowej.<br><br> W zależności od użytego programu adres ten może być określony jako: „Serwer”, „Adres serwera”, „Host” lub „Nazwa hosta”.|
|Login FTP|Jest to identyfikator, który umożliwia dostęp do przestrzeni dyskowej.<br><br> W zależności od użytego programu identyfikator ten może być określony jako: „Użytkownik”, „Nazwa użytkownika”, „Identyfikator”, „Login” lub „Username”.|
|Hasło użytkownika FTP|Hasło powiązane z loginem FTP.<br><br> W zależności od użytego programu możesz zostać poproszony o „Hasło” lub z angielskiego „Password”.|
|Port połączenia|Jest on zazwyczaj uzupełniany automatycznie przez program. Jeśli jednak zostaniesz poproszony o jego wprowadzenie:<br><br>\- użyj portu „21”, aby połączyć się przez protokół FTP;<br>\- użyj portu „22”, aby połączyć się przez protokół SFTP (w przypadku gdy jest on aktywny);|

[Jeśli nie posiadasz wskazanych wyżej informacji](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, zaloguj się do `Panelu klienta`{.action} i kliknij `Hosting`{.action}. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. Wyświetlą się wówczas informacje dotyczące Twojej przestrzeni dyskowej oraz tabela zawierająca nazwy użytkowników FTP i SSH utworzonych na Twoim hostingu.

Po wpisaniu danych kliknij na Szybkie łączenie, aby uzyskać połączenie z serwerem.

![FileZilla](images/1819.png){.thumbnail}


## Połączenie SFTP
SFTP (SSH File Transfer Protocol) to połączenie FTP na porcie 22, które pozwala na logowanie szyfrowane.
Protokół ten pozwala na modyfikowanie uprawnień do plików, którego nie można wykonać będąc zalogowanym na FTP na porcie 21. 

Do połączenia z serwerem niezbędne są poniższe informacje:

- Serwer: ftp.twoja-domena.tld lub ftp.cluster0XX.ovh.net lub newftp.cluster0XX.ovh.net
- Użytkownik: login FTP
- Hasło: hasło FTP przypisane do loginu
- Port: 22


Po kliknięciu na przycisk Szybkie łączenie pojawi się okno dialogowe do potwierdzenia połączenia z serwerem.

![FileZilla](images/1834.png){.thumbnail}


## Błędy dotyczące połączenia
Podana wiadomość wskazuje na błędne dane do połączenia FTP.

Ten rodzaj wiadomości jest generowany w przypadku błędu pary: Login // Hasło.

Sprawdź dane do logowania. Hasło do FTP na hostingu www możesz zmienić w panelu klienta. 

Przewodnik na temat zmiany hasła do FTP na hostingu www:[]({legacy}1374)

![FileZilla](images/1820.png){.thumbnail}
W tym przypadku błąd jest generowany przez nieprawidłową nazwę serwera.

W tym przypadku błąd dotyczy nieprawidłowego hosta.

![FileZilla](images/1824.png){.thumbnail}


## Transfer plików
Aby przenieść pliki, należy je wybrać w oknie z lewej strony (pliki lokalne) i przenieść do okna z prawej strony (przestrzeń hostingu).


- Uwaga: wybierz odpowiedni katalog docelowy w prawym oknie.


Po wykonaniu tej operacji pliki zostaną automatycznie umieszczone w kolejce transferów.

![FileZilla](images/drag-drop-en.png){.thumbnail}


## Widok kolejki oczekującej
Możliwe jest sprawdzenie kolejki transferów.

Na tym poziomie można odnaleźć:


- pliki oczekujące na przeniesienie na serwer.

- pliki, których transfer się nie powiódł.

- Pliki, których transfer się powiódł.



![FileZilla](images/1822.png){.thumbnail}


## Menu Serwer
Jeśli klikniesz prawym przyciskiem myszy na jeden z plików (strefa 5), pojawi się menu z kilkoma opcjami:


Pobierz : pobiera plik do otwartego katalogu lokalnego.

Dodaj pliki do kolejki : dodaje plik do kolejki.

Otwórz/Edytuj : pozwala na wyświetlenie lub edycję pliku na hostingu.

Utwórz katalog : pozwala na utworzenie nowego katalogu bezpośrednio na hostingu.

Odśwież : aktualizuje wyświetlanie danych

Usuń : pozwala na usunięcie wybranego pliku.

Zmień nazwę : pozwala na zmianę nazwy wybranego pliku

Skopiuj adres do schowka : pozwala na automatyczne skopiowanie bezpośredniego linku do wybranego pliku.
Przykład adresu: ftp://loginftp@ftp.cluster0XX.ovh.net/www/mondossier1/monfichier.jpg

Uprawnienia dla pliku : daje możliwość zmiany uprawnień do plików (CHMOD)

![FileZilla](images/1830.png){.thumbnail}


## Uprawnienia do plików i katalogów
Aby uzyskać dostęp do tego interfejsu, kliknij prawym przyciskiem myszy na jeden z plików dostępnych na serwerze i wybierz "Uprawnienia do pliku".

W tym interfejsie możesz zmienić uprawnienia (CHMOD) do plików i katalogów dostępnych na hostingu. 

Wpisz uprawnienia, które chcesz przyznać. Wartość CHMOD zostanie automatycznie zaktualizowany.

![FileZilla](images/1831.png){.thumbnail}


## Odblokowanie strony
Otwórz program FileZilla, kliknij na "Serwer" i wybierz "Wpisz własne polecenie".

Zamiast takiej opcji może być dostępna opcja "Wpisz polecenie FTP".

Wpisz polecenie:


```
SITE CHMOD 705 /
```


Jeśli otrzymasz taki błąd:

550 would not chance perms on /. not such file or directory

W tym przypadku należy wpisać polecenie:


```
SITE CHMOD 705 .
```


Aby sprawdzić, czy strona została odblokowana, otwórz ją w przeglądarce.

Polecenie to nie działa przez SFTP.

![FileZilla](images/1829.png){.thumbnail}
Przetestuj wyświetlanie strony po około 3 godzinach. Nasze roboty przechodzą co 3 godziny i sprawdzają zmiany statusów. 

Jeśli 3 godziny minęły i strona się nie wyświetla, skontaktuj się z pomocą techniczną.


## Transfer plików binarnych
W przypadku plików binarnych (pliki CGI) można wybrać sposób transferowania. 

Aby to zmienić, wybierz w menu głównym "Transfer" i "Tryb transferu".

![FileZilla](images/1832.png){.thumbnail}


## Porównywanie katalogów
Ta funkcja wyświetla kolory w strefie 3 i 4, w celu porównania różnic między plikami i katalogami lokalnymi i na serwerze.

Klikając prawym przyciskiem myszy na ikonkę , możesz zmieniać tryb porównywania. 
Można włączyć lub wyłączyć opcję. Można również:

- porównać rozmiar plików
- porównać sygnaturę czasową
- ukryć identyczne pliki


Kolory:

- Żółty: plik istnieje tylko z jednej strony
- Zielony: plik jest nowszy niż plik nie zaznaczony z drugiej strony
- Czerwony: rozmiary plików są różne



![FileZilla](images/1823.png){.thumbnail}


## Ustawienia

## Logowanie
Można zmienić parametry ponownego połączenia z serwerem.

Uwaga: niektóre serwery mogą uznać to za nadużycie i zablokować Twój adres IP.

Aby zmienić te ustawienia, przejdź do zakładki "Edytuj", "Ustawienia" i Połączenie".

![FileZilla](images/1825.png){.thumbnail}

## Transfer
Można zmienić ustawienia dotyczące domyślnych operacji do wykonania podczas modyfikowania istniejącego pliku.

Aby zmienić te ustawienia, przejdź do zakładki "Edytuj", "Ustawienia" i "Transfery".

![FileZilla](images/1826.png){.thumbnail}


## Informacje o serwerze do połączenia
W niektórych przypadkach nasz dział techniczny może spytać o serwer, z którym łączy się FileZilla. 

Tego typu pytanie może się pojawić w sytuacji, gdy stwierdzisz spowolnienia lub anomalie na przestrzeni FTP. Aby odnaleźć serwer:

- Sprawdź ramkę poniżej danych do logowania	
- Przejdź do górnej części logów
- Pobierz webmXXX



![FileZilla](images/2399.png){.thumbnail}

