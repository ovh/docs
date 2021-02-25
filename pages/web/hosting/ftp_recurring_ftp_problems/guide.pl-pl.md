---
title: 'Częste problemy z FTP'
slug: hosting_www_czeste_problemy_ftp
excerpt: 'Hosting www: Częste problemy FTP'
id: '1996'
section: 'FTP i SSH'
---

## Przeniosłem pliki za pomocą programu FTP, ale strona się nie wyświetla.

- W takiej sytuacji należy sprawdzić, czy pliki strony zostały umieszczone w katalogu /www na hostingu.
- Jeśli wykonywałeś zmiany w strefie DNS, poczekaj na rozpropagowanie się zmian (od 4 do 24 godzin). 


## Dane do FTP nie działają.
Sprawdź, czy prawidłowo kopiujesz hasło. Najlepiej jest je skopiować i przekleić (Ctrl-C Ctrl-V w systemie Windows). Uwaga na pomyłki w przypadku l (L) i 1 (jeden) jak również O (litera o) i 0 (zero).
Jeśli to nie działa, używane dane do logowania są prawdopodobnie nieprawidłowe. Skorzystaj z tego [przewodnika](https://www.ovh.pl/g1374.umieszczenie-strony-w-internecie#umieszczenie_plikow_na_ftp_dane_ftp).


## Ile przestrzeni zostało mi na serwerze FTP?
Brak przestrzeni na hostingu www może powodować problemy z działaniem, jeśli próbujesz wgrać nowe pliki. 

- Aby to sprawdzić, zaloguj się do [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Wybierz domenę w menu w sekcji Hosting.



![](images/img_3298.jpg){.thumbnail}
Pojawi się podsumowanie z informacją o zajętej przestrzeni FTP.

![](images/img_3299.jpg){.thumbnail}


## Nie mogę przesłać plików na serwer FTP.
Należy zalogować się w trybie pasywnym (tryb konfiguracyjny serwera FTP, w którym to serwer FTP określa port połączenia) za pomocą klienta FTP (na przykład Filezilla).


## Do czego służy katalog cgi-bin?
Katalog cgi-bin nie jest dostępny do odczytu z poziomu serwera www. Katalog ten działa równolegle z www. Katalog ten posiada poniższe zabezpieczenia:

- Pliki umieszczone w katalogu cgi-bin nie mogą być odczytywane. Mogą jedynie być wykonywane. Nie można umieścić w tym katalogu obrazów gif czy jpeg. Próba ich odczytania spowoduje wystąpienie błędu. 
- W katalogu cgi-bin można na przykład umieścić pliki baz danych w formie tekstowej, w celu ich zabezpieczenia. 
- Wykonywanie skryptów cgi z poziomu katalogu cgi-bin odbywa się za pomocą aliasu Twojej strony www. Skrypty można wykonywać tylko używając domeny.



