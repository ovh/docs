---
title: 'Włamanie na stronę z modułem WordPress: porady i przykłady zastosowania'
excerpt: ''
slug: wlamanie_na_strone_z_modulem_wordpress_porady_i_przyklady_zastosowania
section: Diagnostyka
---

Dysponujesz stroną opartą o moduł Wordpress w OVH i zauważyłeś, że Twoja strona się nie wyświetla, że przekierowuje na inną stronę lub że jest wypełniona reklamami. 

OVH nie zapewnia pomocy w zakresie korzystania z produktu Wordpress. Możemy jednak wskazać kroki do podjęcia w przypadku włamania.


## Dlaczego włamano się na moją stronę?
Dlaczego włamano się na moją stronę? Co trzeba teraz zrobić?

Włamanie na stronę internetową ma miejsce z powodu nie aktualizowania produktu, używania nieoficjalnych wtyczek, zbyt prostych haseł...

Zerowe ryzyko nie istnieje! Można je jednak ograniczyć.

Można podjąć pewne kroki, aby naprawić problem po jego pojawieniu się i/lub uniknąć ponownego pojawienia się tego problemu (regularne wykonywanie aktualizacji: wersje modułu WordPress, wtyczki,...).

W przewodniku tym pokażemy Ci, jak przywrócić stronę online. 

Jeśli OVH zamknęło Twoją stronę, zapoznaj się z tym [przewodnikiem](https://www.ovh.pl/g1392.system-anty-hack) na temat procedur zamykania stron po włamaniu.


## Zeskanuj swój komputer
Pierwszym miejscem, od którego trzeba zacząć jest Twoje środowisko lokalne. W wielu przypadkach źródło ataku/włamania jest lokalne (na przykład telefon komórkowy, komputer, itp...).

Upewnij się, że posiadasz program antywirusowy/malware na swoim sprzęcie lokalnym. Niektóre wirusy nie są usuwane przez niektóre programy antywirusowe. Ciekawym rozwiązaniem jest korzystanie z kilku programów (lokalnie i online). Dotyczy to zarówno systemu Windows jak i Mac oraz Linux.


## Ocena sytuacji
Gdy zdasz sobie sprawę z włamania na stronę, należy szybko działać. 
Najpierw należy się dowiedzieć, kiedy doszło do włamania, aby sprawdzić, czy możliwe będzie przywrócenie danych. 
W dalszej części przewodnika będziemy lokalizować włamanie i sprawdzać 2 możliwe przypadki.


Przed przywróceniem danych trzeba sprawdzić datę ostatnich zmian na plikach www (FTP). Pozwoli to na odszukanie i naprawienie luk w bezpieczeństwie.
Nie ma szczegółowej procedury pozwalającej na zlokalizowanie przyczyny włamania. Przedstawiamy natomiast ogólną procedurę opierającą się na fakcie, że przyczyną włamania jest luka w skrypcie i że włamywacz dokonał włamania przy użyciu zapytania HTTP. 

Wszystkie zapytania HTTP są widoczne w logach (https://logs.cluster0XX.hosting.ovh.net/nazwa_domeny). Zastąp "nazwa_domeny" swoją domeną wraz z rozszerzeniem, na przykład: ovh.com.

- 1 Sprawdź datę i godzinę pojawiającą się w treści wiadomości, którą otrzymałeś*.
- 2 Sprawdź logi z tej godziny poszerzając stopniowo pole poszukiwań na wcześniejsze godziny aż do odnalezienia nieprawidłowego wpisu (wpis dziwny, różniący się od pozostałych, itp.). W zależności od przypadku może to wymagać trochę praktyki lub znajomości formatu zapytań. Zwróć uwagę na zapytania typu POST, które są głównym źródłem włamań.
- 3 Odszukaj skrypt zaatakowany przez to zapytanie.
- 4 Sprawdź skrypt w poszukiwaniu luki.
- 5 Napraw lukę.


*E-mail jest wysyłany tylko, gdy Twój hosting zostanie zablokowany. Jeśli nie zostanie on zablokowany, należy sprawdzić datę ostatnich zmian na FTP (data plików). 

Usunięcie złośliwego kodu dodanego przez hakera nie jest wystarczające. Należy całkowicie wyeliminować lukę w bezpieczeństwie..

Mogą Państwo skorzystać z pomocy [webmastera](https://partners.ovh.com) zajmującego się tego typu operacjami i/lub skorzystać z oficjalnego forum modułu wordpress.
W żadnym przypadku pomoc techniczna nie będzie mogła bezpośrednio pomóc Ci w tego typu zapytaniu.


## Przywrócenie strony
Wordpress składa się z plików i z bazy danych. Można przywrócić pliki z wcześniejszej daty, OVH proponuje historię z 2 tygodni dla plików dostępnych na hostingu. W przypadku bazy danych można przywrócić dane sprzed 7 dni.
Przywrócenie danych nie usuwa luk w zabezpieczeniach. Po przywróceniu danych należy odszukać i naprawić lukę. 
Operacja przywrócenia usuwa dane obecne na hostingu i zastępuje je kopią zapasową.


## Przywracanie plików przez FTP
Przywracanie plików:

W panelu klienta można przywrócić całą zawartość przestrzeni FTP, ale może to być skomplikowane, jeśli masz wiele domen przypisanych do tego samego hostingu. 

Lepiej byłoby przywrócić dany katalog, w przypadku gdy na jednym hostingu znajduje się kilka stron. Przewodnik na ten temat jest dostępny [tutaj](https://www.ovh.pl/g1593.odzyskiwanie-kopii-zapasowej-poprzez-ftp-via-FileZilla).


## Przywracanie baz danych SQL
Dostępne są dwa przewodniki wyjaśniające, jak wykonać [eksport](https://www.ovh.pl/g1394.eksport-bazy-danych) bazy danych oraz jak wykonać [import/blue]](https://www.ovh.pl/g1393.import-bazy-danych-mysql).

Po wykonaniu kopii zapasowej bazy danych (dump), należy usunąć wszystkie tabele z poziomu [interfejsu phpMyAdmin](https://docs.ovh.com/pl/hosting/polaczenie-bazy-danych-serwer-bdd/), aby móc zaimportować kopię zapasową.


## Po przywróceniu
Po zakończeniu przywracania danych musisz sprawdzić, czy dostępne są aktualizacje WordPress, motywu i wtyczek i wykonać je. 

Należy również odinstalować nieużywane wtyczki. Ich wyłączenie nie jest wystarczające.

Jeśli włamanie jest starsze a przywrócenie danych nie jest możliwe, przedstawiamy sposób przywrócenia wordpressa:

## Nie możesz zalogować się do panelu administracyjnego WordPress.
W takim przypadku należy zmienić [hasło administratora](https://codex.wordpress.org/) korzystając z oficjalnego przewodnika Wordpress.

Jeśli jest to zbyt skomplikowane, można zaktualizować adres e-mail w [interfejsie phpMyAdmin](https://docs.ovh.com/pl/hosting/polaczenie-bazy-danych-serwer-bdd/) w tabeli user, powrócić na stronę logowania, kliknąć na Nie pamiętasz hasła? i poczekać na wysłanie e-maila.


## Zastąp pliki modułu WordPress plikami nowo pobranego modułu WordPress.
Wymiana wszystkich plików zapewni nas, że nie korzystamy ze zhakowanych plików.

- Przejdź na oficjalną stronę modułu [WordPress](https://wordpress.org/).


Na stronie tej znajduje się link pozwalający na pobranie najnowszej stabilnej wersji modułu CMS na Twój komputer.

Pobrane pliki są spakowane. Trzeba je rozpakować na swoim komputerze. W Internecie znajdziesz pomoc na ten temat. 

Po rozpakowaniu należy przenieść pliki na przestrzeń FTP. Proponujemy [przewodnik](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie) na ten temat.

W przypadku gdy na hostingu zainstalowanych jest kilka stron, pliki należy umieścić w odpowiednim folderze.

Należy również zmodyfikować plik wp-config.php, aby działało połączenie z bazą danych. 

W tym celu należy odnaleźć e-mail otrzymany po utworzeniu bazy danych. Informacje te są dostępne w panelu klienta w sekcji Historia e-maili (oprócz hasła, które samodzielnie ustaliłeś). 

Jeśli nie przypominasz sobie hasła do bazy danych, możesz je zmienić w panelu klienta. Procedura ta jest opisana w tym [przewodniku](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie).
Następnie w interfejsie administratora WordPress należy sprawdzić dostępne aktualizacje.


## Użyteczne informacje
Zalecamy korzystanie wyłącznie z oficjalnych wtyczek WordPress. Nieoficjalne wtyczki nie są aktualizowane przez producenta. Mogą więc zawierać wadliwy kod.

