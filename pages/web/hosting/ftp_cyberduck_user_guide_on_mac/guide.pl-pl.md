---
title: 'Przewodnik dotyczący korzystania z programu Cyberduck (MAC)'
excerpt: 'Przewodnik dotyczący korzystania z programu Cyberduck (MAC)'
id: '1598'
slug: hosting_www_przewodnik_dotyczacy_korzystania_z_programu_cyberduck_mac
section: 'FTP i SSH'
---

## Wprowadzenie
Cyberduck to aplikacja dostępna dla systemu MAC. 

Za pomocą tego programu masz możliwość umieszczenia swojej strony w Internecie poprzez połączenie z przestrzenią hostingu (FTP).

Aby skorzystać z tego programu, przejdź na oficjalną stronę aplikacji:


- Oficjalna strona Cyberduck (nie strona OVH): [cyberduck.io](https://cyberduck.io/)



![cyberduck macOS](images/2344.png){.thumbnail}
Cyberduck to aplikacja dla użytkowników korzystających z systemu MAC. Jeśli masz system Windows, skorzystaj z programu FileZilla: []({legacy}1380)


## Interfejs
Podczas pierwszego uruchamiania aplikacji, pojawi się to okno.

- Strefa w górnej części pozwala na utworzenie nowego połączenia i na dostęp do poszczególnych operacji po zalogowaniu do przestrzeni FTP (zmiana nazwy, edycja, itp.).

- W strefie środkowej widać dodane przez Ciebie zakładki (wstępnie zarejestrowane połączenia FTP) i po zalogowaniu zawartość przestrzeni dyskowej.

- Dolna strefa pozwala na uzyskanie informacji na temat aktualnie wykonywanej operacji (połączenie z serwerem FTP) oraz logów do dodania nowej zakładki.



![cyberduck macOS](images/2343.png){.thumbnail}
Personalizacja wyświetlania w aplikacji Cyberduck
Można spersonalizować wyświetlanie w aplikacji Cyberduck.

Aby tego dokonać, kliknij na Prezentacja i na Personalizacja paska narzędzi.... 

W ramce, która się pojawi, przenieś wybrane elementy na pasek narzędzi. Aby zatwierdzić zmiany, kliknij na Zakończone

![cyberduck macOS](images/2345.png){.thumbnail}


## Logowanie do FTP
Aby się zalogować do przestrzeni hostingu (FTP), przejdź poniższe etapy:

1. Kliknij na Nowe połączenie w lewym górnym rogu.

2. W nowym oknie wpisz dane do logowania do przestrzeni FTP:

- Serwer FTP
- Nazwa użytkownika
- Hasło
- Port (21)

3. Zaznacz pole zapamiętaj hasło, jeśli chcesz, aby Cyberduck zapamiętał hasło.

4. Kliknij na Połączenie, aby się zalogować do przestrzeni dyskowej hostingu (FTP).


![cyberduck macOS](images/2361.png){.thumbnail}

- Możesz zarejestrować hasło w programie Cyberduck zaznaczając pole Zapamiętaj hasło. Wybór ten nie jest obowiązkowy. Jeśli nie zaznaczysz tej opcji, będziesz musiał podawać hasło, aby zalogować się do przestrzeni dyskowej hostingu. 

- Jeśli nie znasz danych do logowania do FTP, zapoznaj się w tym przewodnikiem: [Dane do logowania do FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Pojawi się komunikat z ostrzeżeniem informujący, że serwer obsługuje połączenia szyfrowane (SSL).

- Nasz serwer nie jest kompatybilny z FTP-SSL. Należy zaznaczyć Nie wyświetlaj więcej tej informacji i wybrać Kontynuuj.

- Jeśli chcesz używać szyfrowanego połączenia, skorzystaj z [połączenia SFTP](#utiliser_cyberduck_connexion_sftp). Połączenie tego typu jest dostępne tylko, gdy Twoja oferta hostingu www ma dostęp SSH.



![cyberduck macOS](images/2349.png){.thumbnail}

- Jeśli nie wiesz, czy Twój hosting posiada dostęp SSH, przejdź do [opisu naszej oferty](http://www.ovh.pl/hosting/). 

- Jeśli nie jesteś pewny swojego wyboru, wybierz Kontynuuj. Serwer odrzuci połączenie, jeśli nie posiadasz w ofercie dostępu SSH.



- Zalecamy zarejestrowanie danych do logowania za pomocą Zakładki. Dzięki temu zapiszesz w pamięci niektóre dane do logowania.

- Zapoznaj się z tą częścią przewodnika: [Czym jest zakładka?](#utiliser_cyberduck_quest-ce_quun_signet).




## Logowanie SFTP
Jeśli Twój hosting jest kompatybilny z dostępem SSH,masz możliwość logowania przez SFTP.

- Jeśli nie wiesz, czy Twój hosting posiada dostęp SSH, przejdź do [opisu naszej oferty](http://www.ovh.pl/hosting/). 

- Jeśli nie jesteś pewny swojego wyboru, wybierz [Połączenie FTP](#utiliser_cyberduck_connexion_ftp). Serwer odrzuci połączenie, jeśli nie posiadasz w ofercie dostępu SSH.


Aby się zalogować do przestrzeni hostingu (FTP), przejdź poniższe etapy:

1. Kliknij na Nowe połączenie w lewym górnym rogu.

2. Z menu rozwijalnego wybierz SFTP (protokół transferu plików przez SSH) (pomarańczowa ramka na obrazku)

3. W nowym oknie wpisz dane do logowania do przestrzeni FTP:


- Serwer FTP
- Nazwa użytkownika
- Hasło
- Port (22)

4. Zaznacz pole zapamiętaj hasło, jeśli chcesz, aby Cyberduck zapamiętał hasło.

5. Kliknij na Połączenie, aby się zalogować do przestrzeni dyskowej hostingu (FTP).


![cyberduck macOS](images/2362.png){.thumbnail}

- Możesz zarejestrować hasło w programie Cyberduck zaznaczając pole Zapamiętaj hasło. Wybór ten nie jest obowiązkowy. Jeśli nie zaznaczysz tej opcji, będziesz musiał podawać hasło, aby zalogować się do przestrzeni dyskowej hostingu. 

- Jeśli nie znasz danych do logowania do FTP, zapoznaj się w tym przewodnikiem: [Dane do logowania do FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Po pierwszym zalogowaniu się do przestrzeni dyskowej hostingu pojawi się okno Nieznany host.

- Zaznacz pole Zawsze i kliknij na Zezwalaj. Pozwoli to na zatwierdzenie hosta, z którym się łączysz (serwer OVH).



![cyberduck macOS](images/2363.png){.thumbnail}

- Zalecamy zarejestrowanie danych do logowania za pomocą Zakładki. Dzięki temu zapiszesz w pamięci niektóre dane do logowania.

- Zapoznaj się z tą częścią przewodnika: [Czym jest zakładka?](#utiliser_cyberduck_quest-ce_quun_signet).




## Błędy w połączeniu
Podczas próby logowania do przestrzeni dyskowej hostingu w programie Cyberduck może pojawić się błąd. Poniżej opisaliśmy 2 najczęstsze błędy, które mogą się pojawić.
Otwarcie sesji nie powiodło się
Do komunikatu tego dołączana jest informacja 530 Login authentification failed. W większości przypadków błąd ten jest związany z podanymi danymi do logowania: dane te są błędne.


- Musisz sprawdzić dane podane do połączenia.

- Jeśli to konieczne, musisz zmienić utworzoną zakładkę (wybierając ją i klikając na logo w formie ołówka).



![cyberduck macOS](images/2352.png){.thumbnail}

- Jeśli nie znasz danych do logowania do FTP, zapoznaj się w tym przewodnikiem: [Dane do logowania do FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Połączenie nie powiodło się
Do komunikatu tego dołączana jest informacja blue]Timed out waiting for initial connect reply. W większości przypadków komunikat ten oznacza, że host jest niedostępny: host jest nieprawidłowy lub niedostępny. 


- Musisz sprawdzić dane podane do połączenia.

- Jeśli to konieczne, musisz zmienić utworzoną zakładkę (wybierając ją i klikając na logo w formie ołówka).


Przyczyną błędu może być również firewall lub sieć lokalna blokująca port 21 lub 22, które są używane do połączenia z FTP. Należy sprawdzić ich konfigurację.

![cyberduck macOS](images/2353.png){.thumbnail}

- Przypominamy, że host do połączenia z przestrzenią dyskową hostingu to ftp.twoja_domena.tld (z Twoją nazwą domeny) lub ftp.clusterXXX.ovh.net (zastąp XXX numerem klastra).

- Jeśli nie znasz danych do logowania do FTP, zapoznaj się w tym przewodnikiem: [Dane do logowania do FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).




## Czym jest zakładka?
Jeśli chcesz sobie ułatwić dostęp do przestrzeni FTP, skorzystaj z systemu Zakładek. Możesz wstępnie zapisać dane do logowania. 

Aby dodać zakładkę:


- Zaloguj się do przestrzeni dyskowej hostingu (FTP lub SFTP).
- Przejdź do wyświetlania Zakładek (niebieska ramka, następnie zielona ramka).
- Kliknij na logo w formie [+] (pomarańczowa ramka) w dolnej lewej części okna.



![cyberduck macOS](images/2346.png){.thumbnail}
Pojawi się nowe okno z danymi do logowania. Przy kolejnym uruchamianiu aplikacji Cyberduck będziesz mógł dwa razy kliknąć na zakładkę, aby w szybki sposób się zalogować.


## Transferowanie plików
Transfer plików pozwala na umieszczenie strony internetowej na przestrzeni dyskowej hostingu. Domyślnie pliki należy umieścić w katalogu www.

Pliki można przenieść na kilka sposobów.
Za pomocą funkcji przeciągnij i upuść
Aby przenieść pliki na FTP, możesz wybrać pliki i wykonać operację przeciągnij i upuść w oknie katalogu lokalnego (pliki znajdujące się na komputerze) do okna Cyberduck (przestrzeń dyskowa na hostingu).


- Po wykonaniu tej operacji pliki zostaną automatycznie umieszczone w kolejce oczekującej na umieszczenie na serwerze. Następnie pojawi się okno.



![cyberduck macOS](images/2354.png){.thumbnail}
Poprzez interfejs transferowania plików
Masz możliwość skorzystania z interfejsu Transferuj. Otworzy się okno. należy wybrać pliki i kliknąć na Transferuj.


- Po wykonaniu tej operacji pliki zostaną automatycznie umieszczone w kolejce oczekującej na umieszczenie na serwerze. Następnie pojawi się okno.



![cyberduck macOS](images/2355.png){.thumbnail}
Wyświetlanie transferów w trakcie
Możesz sprawdzać historię transferów na przestrzeń dyskową hostingu. Znajdziesz tutaj:


- pliki oczekujące na umieszczenie na zdalnym serwerze jeszcze obecne w kolejce oczekującej (lub w trakcie wysyłania),
- pliki, dla których transfer się nie powiódł,
- pliki, dla których transfer się powiódł.


To okno wyświetla się na dwa różne sposoby: 


- automatycznie po zainicjowaniu transferu, 
- klikając na Okno i Transfery



![cyberduck macOS](images/2356.png){.thumbnail}


## Operacje dostępne dla pliku/katalogu
Wybierając plik lub katalog dostępny w ramach przestrzeni dyskowej hostingu (w oknie aplikacji Cyberduck), masz możliwość wykonywania różnych Operacji.

Pozwalają one na:


- Odczytywanie informacji o pliku lub katalogu i modyfikowanie ich uprawnień (CHMOD)
- Edytowanie pliku za pomocą wybranej aplikacji
- Zmianę nazwy pliku lub katalogu
- Usunięcie pliku lub katalogu
- Pobieranie wybranych elementów
- Tworzenie nowego pliku lub katalogu


Lista ta nie jest pełna. Istnieją inne dostępne operacje.

![cyberduck macOS](images/2357.png){.thumbnail}


## Uprawnienia dla plików i katalogów
Możesz zmieniać uprawnienia (CHMOD) dla plików i katalogów znajdujących się na hostingu. 

Uprawnienia dzielą się na 3 rodziny:


- Właściciel
- Grupa
- Publiczne (inne).


Aby przejść do tego interfejsu, zaznacz wybrane pliki lub katalogi i w części Operacje kliknij na "Czytaj informacje". 

W nowym oknie kliknij na  Uprawnienia i dokonaj zmian:



- Uprawnienia UNIX: wartość zaktualizuje automatycznie pola 3 rodzin.

- zaznacz wybrane pola: wartość zaktualizuje się automatycznie dla Uprawnień UNIX



![cyberduck macOS](images/2358.png){.thumbnail}


## Odblokowanie strony
Za pomocą spersonalizowanego polecenia możesz odblokować stronę.

W większości przypadków operacja ta jest następstwem zablokowania strony przez OVH ze względów bezpieczeństwa w następstwie włamania. 

Aby skorzystać z polecenia:


- Kliknij na Przejdź
- Kliknij na Wyślij polecenie...



![cyberduck macOS](images/2359.png){.thumbnail}
W nowym oknie wpisz polecenie:


- CHMOD 705 /
- Kliknij na Wyślij


Pojawi się komunikat 200 Permissions changed on /.


- Sprawdź, czy strona otwiera się w przeglądarce internetowej.



![cyberduck macOS](images/2360.png){.thumbnail}

- Polecenie to nie działa przez SFTP. Aby użyć tego polecenia, skorzystaj z [połączenia FTP](#utiliser_cyberduck_connexion_ftp).

- Przypominamy, żeby sprawdzić wyświetlanie się strony po około 3 godzinach. Nasze roboty sprawdzają status stron co 3 godziny. 

- Jeśli po 3 godzinach strona nadal nie jest dostępna, skontaktuj się z naszą pomocą.




## Informacje o serwerze
W niektórych przypadkach pomoc techniczna może zapytać o serwer, z którym łączy się aplikacja Cyberduck. 

Weryfikacja tego typu może mieć miejsce, gdy zauważasz spowolnienia lub problemy dotyczące przestrzeni FTP. 

W tym celu należy najpierw włączyć dziennik:


- Kliknij na Prezentacja
- Kliknij na Wyświetlanie/ukrywanie dziennika


Pod oknem aplikacji Cyberduck powinna pojawić się ramka. Następnie:


- Zaloguj się do przestrzeni FTP.
- Pobierz webmXXX



![cyberduck macOS](images/2364.png){.thumbnail}

