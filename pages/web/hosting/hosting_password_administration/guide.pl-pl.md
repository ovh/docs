---
title: 'Dostęp do usług i zarządzanie hasłami'
excerpt: 'Dostęp do usług i zarządzanie hasłami'
id: '1909'
slug: uslugi_www_zarzadzanie_haslami_i_dostep_do_nich
section: 'Pierwsze kroki'
---

## Dostęp do panelu manager OVH
Chodzi o hasło przypisane do identyfikatora klienta* OVH. Identyfikator ma formę blue]"ab12345-ovh". Jest on generowany automatycznie podczas rejestracji na stronie 
[OVH](http://www.ovh.pl).

*Identyfikator OVH ma również inną nazwę: nic-handle lub nic.
Hasło przypisane do identyfikatora klienta należy zdefiniować samodzielnie. Ze względów bezpieczeństwa nie zostanie ono przesłane e-mailem (w panelu klienta możesz zarządzać wszystkimi swoimi usługami: dodawanie, usuwanie, modyfikowanie).
Jeśli nie przypominasz sobie swojego hasła do [panelu klienta](http://www.ovh.com/manager/web), możesz skorzystać z opcji odzyskiwania hasła dostępnej na stronie logowania do panelu.

![](images/img_2847.jpg){.thumbnail}
Zostaniesz poproszony o wpisanie identyfikatora klienta i o kliknięcie na "Submit".

![](images/img_2848.jpg){.thumbnail}
Otrzymasz wiadomość na adres e-mail podany podczas rejestracji. Adres ten musi działać. Jeśli adres e-mail nie działa, należy przesłać wniosek [zmiany adresu e-mail](https://www.ovh.pl/cgi-bin/pl/procedure/procedureChangeEmail.cgi), aby móc zmienić hasło.
Jeśli nie pamiętasz identyfikatora klienta i Twój adres e-mail nie działa, skontaktuj się z naszą pomocą.


## Logowanie do FTP
Aby móc korzystać z protokołu FTP (File Tansfert Protocol), musisz posiadać usługę hostingu www.
Po zainstalowaniu hostingu www otrzymasz e-mail z danymi do FTP (login i hasło). 

E-mail ten będzie również dostępny w panelu klienta w sekcji  "Pomoc","Historia e-maili".

![](images/img_2849.jpg){.thumbnail}
W sekcji tej znajdują się wszystkie automatyczne e-maile wysłane przez OVH.
Jeśli samodzielnie zmieniłeś hasło, nie znajdziesz tej informacji w panelu klienta. W takiej sytuacji możesz je zmienić w panelu klienta. Procedura jest opisana w tym [przewodniku](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie#umieszczenie_plikow_na_ftp_dane_ftp).


## Hasło SQL (baza danych)
Darmowa oferta Start10m nie zawiera bazy danych.
Baza danych nie jest tworzona automatycznie po zainstalowaniu hostingu. Najpierw należy założyć bazę danych w panelu klienta. Procedura jest opisana w tym [przewodniku](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie#baza_danych_zakladanie_bazy_danych).
Hasło należy podać podczas zakładania bazy danych. Nie jest ono przesyłane w e-mailu wysyłanym po założeniu bazy danych.

Jeśli nie pamiętasz hasła do bazy danych:


- Twoja strona jest online i korzysta z bazy danych: hasło do bazy danych znajduje się w pliku umieszczonym w ramach przestrzeni FTP (przykład: w przypadku modułu WordPress jest to plik o nazwie wp-config.php).

- Nie masz strony korzystającej z bazy danych lub chcesz zmienić hasło do bazy danych: w tym przypadku należy zmienić hasło w panelu klienta. Procedura jest opisana w tym  [przewodniku](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie#baza_danych_dane_do_logowania_do_bazy_sql).


Uwaga: Zmiana hasła do bazy danych może spowodować przerwę w działaniu strony lub usług, korzystających z tej bazy danych.

Po zmianie hasła do bazy danych zaktualizuj plik konfiguracyjny strony, aby strona łączyła się z bazą danych przy użyciu nowego hasła.


## Logowanie do interfejsu Webmail
Podczas zakładania konta e-mail określasz hasło. Logowanie do [webmaila](https://ssl0.ovh.net) wymaga podania pełnego adresu e-mail oraz hasła.
Jeśli nie pamiętasz hasła do konta e-mail, możesz je zmienić bezpośrednio w panelu klienta. Procedura jest opisana w tym [przewodniku](https://www.ovh.pl/g1343.utworzenie-adresu-email#pomoc_jak_zmienic_haslo_do_kont_e-mail)
Po dokonaniu zmiany hasła do konta e-mail zaktualizuj te informacje w swoim programie pocztowym.


## Logowanie SSH
Opcja logowania przez SSH (Secure Shell) jest dostępna od oferty hostingu www PRO. Dane do logowania są takie same, jak dane do FTP. 

Zapoznaj się z [naszą ofertą hostingu www](https://www.ovhcloud.com/pl/web-hosting/).


## Moduły
Podczas instalowania modułu w panelu klienta samodzielnie określasz hasło administratora. Nie zostanie ono wysłane w e-mailu.
Jeśli zapomnisz hasła, będziesz mógł je ponownie wygenerować z poziomu strony logowania do modułu. 

Przykład dla modułu WordPress:

![](images/img_2851.jpg){.thumbnail}
Jeśli moduł został zainstalowany z poziomu nowego panelu klienta, hasło można zmienić w panelu. 

Po zalogowaniu do panelu klienta należy wybrać hosting w sekcji Hosting.

![](images/img_2855.jpg){.thumbnail}
Następnie należy wybrać sekcję Moduły, kliknąć na ikonkę koła zębatego z prawej strony i wybrać Zmień hasło.

![](images/img_2854.jpg){.thumbnail}

