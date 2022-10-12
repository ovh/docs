---
title: 'Plik .htaccess - Inne operacje'
excerpt: 'Przewodnik ten przedstawia inne operacje, które są możliwe dzięki plikom .htaccess.'
slug: hosting_www_htaccess_-_inne_operacje
section: 'Przekierowania i uprawnienia dostępu'
order: 04
---

## Blokada listowania zawartości katalogu
Aby internauci nie mogli listować plików zawartych w danym katalogu, w którym nie ma pliku index (.cgi, .html, .php, itp.)  ....), utwórz plik .htaccess z poniższą linią:


```
Options -Indexes
```
 



## Przekierowanie komunikatów o błędach
Jeśli chcesz korzystać z własnych komunikatów błędów lub przekierowywać błędy na wybraną stronę www, utwórz plik .htaccess z tymi liniami:


```
ErrorDocument numer_błędu wiadomość_lub adres
```


Zastąp "numer_błędu" odpowiednim numerem. Najczęstsze błędy to:


- 401: Authorization required. Ten błąd pojawia się, gdy użytkownik wpisze nieprawidłowy login / hasło podczas logowania do chronionego pliku / katalogu. 
- 403: Access denied. Dostęp do katalogu, w którym nie ma katalogu index.html (lub na przykład index.cgi, itp.) a konfiguracja serwera zabrania wyświetlania plików katalogu. 
- 404: Not Found. Plik wybierany przez odwiedzającego nie istnieje. 
- 500: Server Error. Plik CGI nie wykonał się prawidłowo lub uprawnienia do skryptu są nieprawidłowe. 


Zastąp "wiadomość_lub adres" operacją do wykonania. Aby wyświetlić komunikat, wpisz wiadomość w cudzysłowie. Aby przekierować na określoną stronę, wpisz ścieżke dostępu do tej strony. Poniżej przedstawiamy dwa przykłady:


- W przypadku błędu 403, chcesz wyświetlić komunikat "Przykro nam, nie masz uprawnień dostępu do tego pliku". Umieść tę linie w pliku .htaccess: 


```
ErrorDocument 403 "Przykro nam, nie masz uprawnień dostępu do tego pliku"
```


- Chcesz przekierować błędy 404 na własną stronę 404.html (dla domeny: domaine.com): 


```
ErrorDocument 404 http://www.domaine.com/404.php
```



Możesz również przekierować błąd na skrypt CGI, który wyświetli komunikat, przekieruje użytkownika na inny plik w zależności od adresu, który został odpytany (dostepny w zmiennej środowiskowej REQUEST_URI), i/lub prześle Ci e-mail, itp. W tym celu dodaj poniższą linię w pliku .htaccess:


```
Errordocument 404 /cgi-bin/erreur.cgi?type=404
```


Należy wykonać zmianę tylko, gdy jest to strona z https (SSL). Należy wtedy wpisać:


```
Errordocument 401 /~login/error.html
```


Jeśli taka konfiguracja nie działa, sprawdź, czy w ustawieniach przedlądarki Internet Explorer w zakładce Zaawansowane jest odznaczona opcja "Wyświetlaj uproszczone komunikaty błędów HTTP".


## Określenie innego pliku index
Domyślnie plik index w danym katalogu to plik index.html, index.htm lub index.php. Jeśli chcesz, żeby był to inny plik, możesz umieścić tego typu linię w pliku .htaccess:


```
DirectoryIndex nazwa_pliku
```


Jeśli chcesz używać pliku accueil.html jako pliku index, wpisz taką linię:


```
DirectoryIndex accueil.html
```




## Tworzenie przekierowań
Skorzystaj z tego przewodnika: [Kliknij tutaj](https://www.ovh.pl/g1339.przekierowanie-domeny#przekierowanie_poprzez_plik_htaccess)


## Generowanie adresów URL
Skorzystaj z tego przewodnika: [Kliknij tutaj](https://www.ovh.pl/g1971.hosting_www_htaccess_-_generowanie_adresow_za_pomoca_mod_rewrite)


## 
Aby przejść do przewodnika z ogólnymi informacjami o pliku .htaccess, [kliknij tutaj](https://www.ovh.pl/g1967.hosting_www_plik_htaccess)

