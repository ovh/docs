---
title: Eksportowanie bazy danych
excerpt: Przewodnik ten przedstawia różne sposoby eksportowania bazy danych z naszych serwerów.
id: '1394'
slug: database_export
section: Bazy danych
---


## Wstępne wymagania
Musisz dysponować:


- Dostępem do panelu klienta.

- Parametrami takimi jak identyfikator, hasło i serwer sql bazy danych, które pozwolą Ci na połączenie się z bazą danych. 
Zapoznaj się z przewodnikiem na temat odzyskiwania danych do logowania do bazy SQL:[]({legacy}1374)


![](images/img_1833.jpg){.thumbnail}


## Z poziomu panelu klienta
Możesz uzyskać kopię bazy danych w panelu klienta.

Jest to najprostsza i najszybsza metoda wyeksportowania bazy danych. 

Najpierw należy zalogować się do url="https://www.ovh.com/manager/web"]panelu klienta[/url].

Po zalogowaniu do panelu klienta wybierz hosting w sekcji Hosting.

## Etap 1
W części "Hosting" wybierz "SQL".

Czas realizacji kopii zapasowej zależy od rozmiaru bazy danych.

![](images/img_2698.jpg){.thumbnail}

## Etap 2
Kliknij na "ikonkę koła zębatego" z prawej strony wybranej bazy danych i wybierz Utwórz zrzut.

Pojawi się lista baz danych.

![](images/img_2699.jpg){.thumbnail}

## Etap 3
Wybierz datę kopii zapasowej. Do wyboru są trzy daty:



- Aktualna kopia: aktualna kopia bazy danych.

- Wczoraj: kopia bazy danych z nocy (J-0), kopia jest realizowana około godziny 3 rano.

- Zeszły tydzień: kopia bazy danych z J-7, kopia jest wykonywana około 3 rano.


Kliknij na "Dalej" i na "Zatwierdź", aby rozpocząć pobieranie kopii zapasowej SQL.

Po zatwierdzeniu należy poczekać na utworzenie pliku dump*. Otrzymasz e-mail z linkiem pozwalającym na pobranie pliku kopii zapasowej (dump).

Oto przykład tematu otrzymanego e-maila:


```
[OVH-SQL] testovh.ovh - Dump bazy danych: testovhmod1
```


W e-mailu znajduje się link do kopii zapasowej. Kopia zapasowa bazy będzie dostępna na zdalnym serwerze przez 30 dni.

Otrzymany plik będzie spakowany. Należy go rozpakować przed zaimportowaniem pliku.

![](images/img_2700.jpg){.thumbnail}


## Z poziomu interfejsu PhpMyAdmin
Jeśli chcesz wykonać eksport bazy danych z poziomu interfejsu PhpMyAdmin.

Najpierw należy się zalogować do [interfejsu PhpMyAdmin](https://phpmyadmin.ovh.net/).

## Szybki eksport
Po zalogowaniu wybierz bazę danych. 

Wybierz opcję "Eksport".

Szybki eksport pozwala na wybranie tylko formatu dotyczącego importowania bazy danych. 

W drugiej części zobaczymy spersonalizowana opcję eksportowania, która jest bardziej kompletna.

![](images/img_1963.jpg){.thumbnail}

## Spersonalizowany eksport
Po zalogowaniu wybierz bazę danych.

Przejdź do sekcji "Eksport".

Wybierz wyświetlanie wszystkich dostępnych opcji. 

Pojawią się różne opcje.

Tabele: 

Możesz wybrać tabele, które chcesz wyeksportować. 

Opcja ta jest przydatna, gdy baza danych jest bardzo duża. Możesz wielokrotnie eksportować i importować bazę danych.

Wyjście 

Możesz zdefiniować, czy chcesz wygenerować kopię zapasową SQL w zewnętrznym pliku czy bezpośrednio wyświetlić wynik zapytania, który trzeba będzie skopiować. 

Format: 

Zdefiniuj format eksportu bazy danych. Zaleca się pozostawienie formatu SQL. 

Opcje dotyczące formatu:

Możesz zdefiniować, co chcesz wyeksportować z tabeli: albo tylko strukturę lub dane albo strukturę i dane. Zaleca się wybranie struktury i danych. 

Opcje eksportu:

Wybierz opcję eksportu "Żaden z poniższych trybów", aby uniknąć błędu związanego z "Max_Allowed_Packet".

W tym przewodniku opisujemy tylko najważniejsze opcje.

Aby rozpocząć eksportowanie, kliknij na "Wykonaj".

![](images/img_1964.jpg){.thumbnail}

## Kopia zapasowa pliku .sql
Będziesz mógł pobrać link do pliku dump*. 

Zapisz plik proponowany do pobrania w interfejsie PhpMyAdmin.

![](images/img_1848.jpg){.thumbnail}

## Wcześniejsza kopia zapasowa

- W interfejsie PhpMyAdmin można pobrać kopie zapasową z dnia wczorajszego o z ostatniego tygodnia korzystając z rozwijalnego menu.




## Za pomocą skryptu
Skrypty te możesz utworzyć w pliku txt. Należy im nadać rozszerzenie zgodne z używanym językiem.

Rozwiązanie to pozwala na eksportowanie dużych kopii baz danych i jest dostępne na wszystkich hostingach www.

W poniższych skryptach zastąp:


- nazwa_bazy.sql nazwą pliku.

- serwer_sql nazwą serwera, na którym utworzona jest baza danych.

- nazwa_bazy nazwą bazy danych.

- hasło hasłem przypisanym do bazy.

Plik z kopią bazy powinien najpierw zostać umieszczony na FTP na hostingu.


W php (backupbase.php):
Kod do wpisania i uzupełnienia: 


```
<?
echo "Votre base est en cours de sauvegarde.......";
system("mysqldump --host=serwer_sql --user=nazwa_bazy --password=hasło nazwa_bazy > nazwa_bazy.sql");
echo "C'est fini. Vous pouvez récupérer la base par FTP";
?>
```


W perlu (backupbase.cgi) :
Kod do wpisania i uzupełnienia: 


```
#!/usr/bin/perl
print "Votre base est en cours de sauvegarde.......";
system("mysqldump --host=serwer_sql --user=nazwa_bazy --password=hasło nazwa_bazy > nazwa_bazy.sql");
print "C'est fini. Vous pouvez récupérer la base par FTP";
```


- Wgraj przez FTP utworzony skrypt w katalogu www hostingu i odpytaj skrypt za pomocą przeglądarki: http://nazwa_domeny.com/backupbase.php.


Zastąp nazwa_domeny.com swoją nazwą domeny i backupbase.php nazwą swojego pliku.

To polecenie wygeneruje plik nazwa_bazy.sql w katalogu, w którym znajduje się skrypt.

W pliku tym odnajdziesz wszystkie instrukcje SQL dotyczące odtworzenia bazy.

- Uwaga nr 1: Jeśli Twoja baza danych jest bardzo duża, możesz wykonać dump* tabela po tabeli dodając opcję "--tables nazwa_tabeli" na końcu, aby uzyskać to polecenie:


mysqldump --host=serwer_sql --user=nazwa_bazy --password=hasło nazwa_bazy --tables nazwa_tabeli > nazwa_bazy.sql


- Uwaga nr 2: Możesz również spakować ten plik, aby ułatwić jego pobieranie na komputer (przez FTP lub www).

Aby spakować plik wykonać polecenie gzip. Zostanie utworzony plik z rozszerzeniem .sql.gz:

system("gzip nazwa_bazy.sql");


## Poprzez ssh

## Wstępne wymagania

- Przygotuj login i hasło do FTP. 
Zapoznaj się z przewodnikiem na temat odzyskiwania danych do FTP: []({legacy}1374)

- Musisz mieć ofertę z dostępem przez ssh ([sprawdź nasza ofertę](http://www.ovh.pl/hosting/))


Poniżej znajduje się link do przewodnika na temat ssh na hostingu:


- [SSH na hostingu](http://pomoc.ovh.pl/SshNaHostingu)



## Eksport bazy danych przez ssh
Połącz się z hostingiem przez ssh.

Przejdź do katalogu, w którym chcesz umieścić kopie zapasową i wpisz to polecenie:

Kod do wpisania i do uzupełnienia: 


```
mysqldump --host=serwer_sql --user=nazwa_bazy --password=hasło nazwa_bazy > nazwa_bazy.sql
```


Przykładowy kod: 


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Z poziomu usługi Prywatnego Serwera SQL
Przewodnik dotyczący eksportowania bazy danych:


- []({legacy}2023)




## Kopia zapasowa
Jeśli chcesz poprzez skrypt odzyskać wcześniejszą kopie zapasową bazy danych, należy wskazać określony numer portu:

Aktualna kopia = 3306
Wczoraj = 3307
Poprzedni tydzień = 3317

Przykład kodu:

PHP :

```
system("mysqldump --host=serwer_sql --user=nazwa_bazy --password=hasło --port=3317 nazwa_bazy > nazwa_bazy.sql ");
```



- Ten system kopii zapasowych jest dostępny dla baz danych w wersji minimum Mysql5.




## Błędy "Max_Allowed_Packet" podczas importowania pliku dump*
Podczas wykonywania kopii zapasowej można spersonalizować eksport bazy danych SQL używając interfejsu PhpMyAdmin.

Dzięki temu można uniknąć dodania całej zawartości tabeli poprzez "INSERT INTO", aby uniknąć błędów związanych ze zmienną serwera "Max_Allowed_Packet" podczas importowania pliku dump*, jeśli zawartość tej tabeli jest duża. 

Na przykład: jeśli tabela A zawiera 500 linii, zamiast korzystać z samego "INSERT INTO" dla 500 linii, należy wykonać 500 "INSERT INTO".

Poprzez interfejs PhpMyAdmin:

Podczas wykonywania eksportu w interfejsie PhpMyAdmin, zaznacz opcję tworzenia danych "Żaden z poniższych trybów", aby uniknąć błędów związanych z "Max_Allowed_Packet".

Poprzez ssh:

Skorzystaj z opcji --skip-extended-insert.

Opcja --extended-insert, zawarta w opcji --opt (aktywnej domyślnie), generuje unikalne zapytanie INSERT INTO dla całej tabeli. Trzeba więc wyłączyć tą opcję:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Słowniczek
dump*: plik kopii zapasowej bazy danych. 

