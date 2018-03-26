---
title: 'Hosting: Przywrócenie kopii zawartości FTP w aplikacji FileZilla'
excerpt: Insert Here A Short Desc
slug: hosting_przywrocenie_kopii_zawartosci_ftp_w_aplikacji_filezilla
section: FTP i SSH - zdalny dostęp
---


## Etap 1: Nazwa hosta
Zaloguj się do klienta FTP (w tym przypadku jest to aplikacja FileZilla: []({legacy}1380)).

W tym polu należy wpisać nazwę hosta.
Jest to nazwa ftp.nazwatwojejdomeny.pl lub ftp.nazwatwojejofertyhostingu.ovh.net.

Przykład:
Dla domeny mojastrona.pl
Nazwa hosta to: ftp.mojastrona.pl lub ftp.cluster0XX.ovh.net (należy zamienić pole XX przez nazwę klastra, podanego w mailu aktywacyjnym dla usługi)

[Informacje o danych do logowanie FTP?](https://www.ovh.pl/g1374.hosting_www_umieszczenie_strony_w_internecie)


- Należy wpisać hasło do serwera FTP.
- Należy podać numer portu 21.



![](images/img_2314.jpg){.thumbnail}


## Etap 2: Logowanie FTP
Należy wybrać login FTP w zależności od kopii serwera, którą chcesz pobrać: 


- moj_identyfikator_ftp-snap0 :
snapshot D-0 (kopia wykonana tego samego dnia o 3.00)
- moj_identyfikator_ftp-snap1 :
snapshot D-1 (kopia wykonana dzień wcześniej o 3.00)
- moj_identyfikator_ftp-snap2 :
snapshot D-2 (kopia wykonana 2 dni wcześniej o 3.00)
- moj_identyfikator_ftp-snap3 :
snapshot T-1 (kopia wykonana tydzień wcześniej, w niedzielę o 4.00)
- moj_identyfikator_ftp-snap4 :
snapshot T-2 (kopia wykonana 2 tygodnie wcześniej, w niedzielę o 4.00)
- moj_identyfikator_ftp-snap5 :
snapshot T-3 (kopia wykonana 3 tygodnie wcześniej, w niedzielę o 4.00)

Przykład:


Dla identyfikatora FTP: toto
Login FTP, aby pobrać kopię sprzed 2 dni to: toto-snap2

![](images/img_2315.jpg){.thumbnail}


## Etap 3: Hasło FTP
Należy podać standardowe hasło do serwera FTP, które zostało wcześniej zdefiniowane. 

Jeżeli go nie znasz, to możesz je zmienić po zalogowaniu się do panelu administracyjnego, w zakładce 'Hosting'. 

Po podaniu wszystkich danych do logowania, możesz połączyć się z serwerem FTP.

![](images/img_2316.jpg){.thumbnail}


## Etap 4: Pobranie danych z serwera FTP
W tym etapie możesz pobrać wybrane przez siebie katalogi i pliki, dostępne we wskazanej kopii bezpieczeństwa. 

Aby przesłać te dane pomiędzy kontami, wystarczy je przeciągnąc pomiędzy lokalizacją zdalną i lokalną. W ten sposób wszystkie dane zostaną skopiowane bezpośrednio na Twój komputer. 

Więcej informacji na temat aplikacji FileZilla znajdziesz w przewodniku na stronie: []({legacy}1380)

![](images/img_2317.jpg){.thumbnail}


## Etap 5: Połączenie z hostingiem WWW
Aby połączyć się z serwerem FTP dla hostingu, należy podać standardowe dane do logowania, które otrzymałeś w mailu aktywacyjnym dla usługi.

![](images/img_2318.jpg){.thumbnail}


## Etap 6: Kopiowanie zawartości kopii na hosting
Aby przenieść dane z Twojego komputera na serwer WWW, wystarczy je przenieść lokalnie z komputera do lokalizacji zdalnej (hostingu WWW). Czynność ta przebiega identycznie, jak w przypadku pobrania wybranej przez Ciebie zawartości kopii bezpieczeństwa.

![](images/img_2319.jpg){.thumbnail}

