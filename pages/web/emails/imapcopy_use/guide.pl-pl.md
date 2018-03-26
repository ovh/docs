---
title: Przewodnik dotyczący narzędzia IMAPCopy
excerpt: ''
slug: przewodnik_dotyczacy_narzedzia_imapcopy
legacy_guide_number: g1310
---


## Do czego służy to narzędzie?
IMAPCopy pozwala na skopiowanie e-maili z konta A (konto źródłowe) na konto B (konto docelowe).

Będziesz mógł:
1. Wprowadzić informacje dotyczące konta e-mail do przeniesienia;
2. Wprowadzić informacje dotyczące nowego konta e-mail.
3. Po zatwierdzeniu synchronizacji będziesz mógł zamknąć stronę. Twoje e-maile zostaną skopiowane na adres docelowy. Proces ten może zająć kilka godzin. 


Narzędzie to jest dostępne bezpośrednio na stronie: [https://mail.ovh.net/pl/imapcopy/](https://mail.ovh.net/pl/imapcopy/)

![](images/img_1423.jpg){.thumbnail}


## Gdzie na stronie znajduje się to narzędzie?
Na stronie [OVH.pl](http://www.ovh.pl) kliknij na Webmail w górnym prawym rogu.
Pojawi się interfejs Webmail.

![](images/img_2846.jpg){.thumbnail}
W menu w górnym prawym rogu znajduje się opcja dostępu do narzędzi e-mail.

Klikając na ten link przejdziesz bezpośrednio do interfejsu blue]IMAPCopy. Kliknij na IMAPCopy.

![](images/img_2411.jpg){.thumbnail}


## Wybór usług
IMAPCopy pozwala na przeniesienie zewnętrznych kont e-mail do OVH na konto e-mail w OVH. 

Domyślnie proponujemy takich dostawców:

|AOL|Yahoo|Free|Hosted exchange 2013|
|Gmail|SFR|La Poste|Private exchange 2013|
|Hosting OVH|Orange|Inny|


Jeśli Twojego dostawcy usług nie ma na liście, wybierz opcję "Inny".
W naszym przykładzie wykonamy kopię konta OVH na konto Exchange 2013.

Wybieramy tutaj "Hosting OVH" jako Adres e-mail źródłowy.

![](images/img_1426.jpg){.thumbnail}


## Ustawienia
W przypadku Adresu źródłowego należy podać wymagane informacje w formularzu:
1. Usługa: patrz powyżej (w naszym przypadku Hosting OVH) 
2. Login: cały adres e-mail źródłowy (w naszym przypadku support@ovh.net)
3. Password: hasło przypisane do tego konta e-mail
4. Serwer IMAP: serwer, z którym należy się połączyć, aby sprawdzić konto źródłowe (w naszym przypadku ssl0.ovh.net)
5. SSL: do zaznaczenia, jeśli Twój serwer używa szyfrowanego połączenia SSL (Secured Socket Layer) (w naszym przypadku zaznaczone).

Po wypełnieniu formularza kliknij na "Zatwierdź".

![](images/img_1427.jpg){.thumbnail}


## Połączenie z kontem źródłowym
Po zatwierdzeniu informacji dotyczącychŹródłowego adresu e-mail należy przejść przez 2 kolejne etapy: 

1. Test połączenia z kontem e-mail.
2. Połączenie z kontem przebiegło pomyślnie.

![](images/img_1428.jpg){.thumbnail}


## Wybór usług
IMAPCopy jest przeznaczony do przenoszenia kont e-mail OVH lub kont zewnętrznych na konto w OVH (Exchange lub na hostingu).
W przypadku nowej oferty Exchange 2013 kopię docelową można wykonać w przypadku zewnętrznych serwerów. 

Poniżej główni dostawcy usług, których proponujemy domyślnie:

- Exchange 25 GB
- Exchange Corporate
- Exchange Reseller
- Hosting OVH
- Inny



Jeśli Twojego dostawcy usług nie ma na liście, wybierz opcję "inny".

W naszym przykładzie wykonamy kopię konta OVH na konto Exchange 2013.

Wybieramy tutaj "Hosting OVH" jako Adres e-mail docelowy.

![](images/img_1429.jpg){.thumbnail}


## Ustawienia
W przypadku Adresu docelowego należy podać wymagane informacje w formularzu:
1. Usługa: patrz powyżej (w naszym przypadku Inny) 
2. Login: cały adres e-mail docelowy (w naszym przypadku exchange@ovh.net)
3. Password: hasło przypisane do tego konta e-mail
4. Serwer IMAP: serwer, z którym należy się połączyć, aby sprawdzić konto docelowe (w naszym przypadku ex.mail.ovh.net)
5. SSL: do zaznaczenia, jeśli Twój serwer używa szyfrowanego połączenia SSL (Secured Socket Layer) (w naszym przypadku zaznaczone).

Po wypełnieniu formularza kliknij na "Zatwierdź".

![](images/img_1430.jpg){.thumbnail}


## Połączenie z kontem docelowym
Po zatwierdzeniu informacji dotyczących Docelowego adresu e-mail należy przejść przez 2 kolejne etapy: 

1. Test połączenia z kontem e-mail.
2. Połączenie z kontem przebiegło pomyślnie.

![](images/img_1431.jpg){.thumbnail}


## Synchronizacja
Po połączeniu z Adresem docelowym pojawi się przycisk Synchronizuj.

Kliknij, aby rozpocząć kopiowanie konta A (źródłowego) na konto B (docelowe).

W naszym przypadku skopiujemy wszystkie e-maile z konta support@ovh.net na konto Exchange 2013 exchange@ovh.net.

Pojawi się komunikat:
Trwa synchronizacja kont. Wypełnij poniższy formularz, aby móc sprawdzać status operacji.

![](images/img_1432.jpg){.thumbnail}
Jest to synchronizacja IMAP. Katalogi istniejące dla Źródłowego adresu e-mail i nie istniejące dla Docelowego adres e-mail zostaną utworzone.


## Synchronizacja - Błędy
Jeśli po rozpoczęciu synchronizacji pojawi się błąd, będzie on miał następujący format:

Wystąpił błąd podczas synchronizacji. Todo for sync this account exists.

W tym przykładzie kliknęliśmy drugi raz na przycisk Synchronizuj. Wyświetliła się informacja, że: Zadanie synchronizacji dla tego konta już istnieje..

![](images/img_1433.jpg){.thumbnail}


## Synchronizacja - Koniec
Po zakończeniu synchronizacji na Adres docelowy wysłany zostanie e-mail ze szczegółowymi informacjami na temat operacji:

![](images/img_1435.jpg){.thumbnail}


## Informacje o stanie synchronizacji
Aby poznać stan synchronizacji kont, możesz w każdej chwili wpisać adres e-mail (źródłowy) na specjalnym polu i kliknąć na Wyślij.

W naszym przypadku w trakcie sprawdzania stanu operacji synchronizacja była zakończona. 

Otrzymaliśmy taki komunikat: Synchronizacja kont została zakończona.

Jeśli kopiowanie jeszcze się nie rozpoczęło, otrzymasz taki komunikat: Synchronizacja jeszcze się nie rozpoczęła. Prosimy o cierpliwość.

![](images/img_1434.jpg){.thumbnail}

