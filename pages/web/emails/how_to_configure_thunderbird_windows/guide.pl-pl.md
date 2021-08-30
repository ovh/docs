---
title: Konfiguracja konta e-mail w programie Thunderbird
excerpt: ''
slug: konfiguracja_konta_e-mail_w_programie_thunderbird
legacy_guide_number: g1297
section: Konfiguracja na komputerze
order: 04
---


## Część 1: Uruchomienie programu
Przejdź do aplikacji "Thunderbird" zainstalowanej na komputerze.

Oto interfejs, który pojawi się domyślnie, jeśli nie masz skonfigurowanego adresu e-mail. W przeciwnym razie przejdź do menu, aby rozpocząć dodawanie nowego konta.

Wybierz "Poczta elektroniczna", aby kontynuować.

![](images/img_1227.jpg){.thumbnail}


## Część 2: Uruchomienie programu (ciąg dalszy)
Aby kontynuować instalację konta e-mail, wybierz "Pomiń ten etap i korzystaj z istniejącego adresu".

![](images/img_1228.jpg){.thumbnail}


## Część 3: Zakładanie konta
Wypełnij pola:

"Nazwisko i imię": wpisz nazwę, która będzie się wyświetlać.

"Adres elektroniczny": Cały adres e-mail

"Hasło": hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanagerl).

"Zapamiętaj hasło": należy zaznaczyć tą opcję.

Thunderbird pobiera parametry z adresu e-mail i proponuje dwie możliwe konfiguracje:
IMAP lub POP3.

W naszym przykładzie konfigurujemy konto w trybie IMAP. Konto można również skonfigurować jako POP. Informacje na ten temat podajemy na końcu przewodnika.

Thunderbird proponuje konfigurację ręczną. Informacje na ten temat znajdują się w części "Konfiguracja ręczna" naszego przewodnika.

Kliknij na "Zakończone", aby zakończyć etap instalacji.

![](images/img_1229.jpg){.thumbnail}


## Część 4: Zakończenie
Na tym poziomie adres e-mail jest automatycznie dodawany.

Kliknij na "Sprawdź parametry tego konta" po kliknięciu na adres e-mail.

![](images/img_1230.jpg){.thumbnail}


## Ustawienia konta
Tutaj odnajdziesz informacje ogólne dotyczące konta. 

Możesz dodać podpis lub zdefiniować inny adres e-mail, na który będą odpowiadać adresaci.

Możesz również sprawdzać i modyfikować serwer SMTP używany dla konta e-mail.

![](images/img_1231.jpg){.thumbnail}


## Parametry serwera poczty przychodzącej
W tym oknie dostępne są informacje dotyczące serwera poczty przychodzącej.

Możesz ustawić czas między pobieraniem e-maili lub ustalić politykę zarządzania usuniętymi wiadomościami.

![](images/img_1232.jpg){.thumbnail}


## Kopie i katalogi
Na tym poziomie dostępne są ustawienia dotyczące katalogów, wysyłki wiadomości, archiwów.

![](images/img_1233.jpg){.thumbnail}


## Synchronizacja i przestrzeń dyskowa
Tutaj możesz wybrać sposób, w jaki e-maile będą się synchronizować, zdefiniować wybór dotyczący usuwania wiadomości.

![](images/img_1234.jpg){.thumbnail}


## Parametry serwera poczty wychodzącej SMTP
Tutaj możesz dodać lub zmienić serwery SMTP skonfigurowane w programie.

![](images/img_1235.jpg){.thumbnail}


## Parametry serwera poczty wychodzącej SMTP (ciąg dalszy)
Tutaj odnajdziesz parametry, które można zmienić i które pojawią się po wybraniu serwera SMTP. Kliknij na "Zmień".


- Należy obowiązkowo włączyć uwierzytelnianie serwera SMTP.


Wybierz sposób uwierzytelniania: Hasło

![](images/img_1236.jpg){.thumbnail}

- Uwierzytelnianie za pomocą Hasła jest parametrem niezbędnym, aby wysyłka e-maili mogła działać na naszych serwerach SMTP. 

- Jeśli uwierzytelnianie nie jest włączone, może zostać otwarte zgłoszenie Open SMTP informujące, że uwierzytelnianie "POP before SMTP" nie jest obsługiwane. Należy obowiązkowo włączyć uwierzytelnienie serwera poczty wychodzącej, aby móc wysyłać e-maile.




## Dodaj konto ręcznie
Oto co pojawia się po kliknięciu na "Konfiguracja ręczna.

Możesz zdefiniować parametry konfiguracji konta e-mail.

![](images/img_1237.jpg){.thumbnail}


## Konfiguracja POP
Oto informacje do konfiguracji konta e-mail POP

Konfiguracja POP z zabezpieczeniem SSL włączonym/green] lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Caly adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:995 lub 110
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 110 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.
Porty 995 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.


- Należy obowiązkowo włączyć [uwierzytelnianie](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|995|110|
|Wychodzący|465|587|




## Konfiguracja IMAP
Oto informacje do konfiguracji konta e-mai IMAP.

Konfiguracja IMAP z zabezpieczeniem SSL włączonym lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Caly adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:993 lub 143
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 143 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.
Porty 993 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.


- Należy obowiązkowo włączyć [uwierzytelnianie](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|993|143|
|Wychodzący|465|587|



