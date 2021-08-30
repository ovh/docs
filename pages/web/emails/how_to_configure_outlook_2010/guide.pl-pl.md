---
title: Konfiguracja konta e-mail w programie Outlook 2010
excerpt: ''
slug: konfiguracja_konta_e-mail_w_programie_outlook_2010
legacy_guide_number: g1299
hidden: true
---


## Dodanie konta (część 1)
Aby dodać konto e-mail w programie Outlook 2010, przejdź do interfejsu"Ustawienia konta...".

![](images/img_1245.jpg){.thumbnail}


## Dodanie konta (część 2)
Kliknij na Nowe....

Masz wybór między konfiguracją [ręczną](#MANU) i [automatyczną](#AUTO).

![](images/img_1246.jpg){.thumbnail}


## Część 1: Wybór konfiguracji
Zaznacz Ręczna konfiguracja parametrów serwera lub typy dodatkowych serwerów i kliknij na Dalej >.

![](images/img_1247.jpg){.thumbnail}


## Część 2: Wybór usługi
Zaznacz Poczta internetowa i kliknij na Dalej >.

![](images/img_1248.jpg){.thumbnail}


## Część 3: Ustawienia poczty
Na tej stronie należy podać następujące informacje:

1. Nazwa: wpisz nazwę, która ma się wyświetlać u odbiorców wiadomości;
2. Adres: cały adres e-mail;

3. Typ konta:POP3 (dla IMAP patrz[Przypomnienie parametrów POP - IMAP](#RAPPEL));
4. Serwer poczty przychodzącej: ssl0.ovh.net;
5. Serwer poczty wychodzącej (SMTP) : ssl0.ovh.net;

6. Nazwa użytkownika: cały adres e-mail;
7. Hasło: hasło przypisane do konta klienta.

![](images/img_1249.jpg){.thumbnail}


## Część 4: Informacje ogólne
1. Kliknij na Dodatkowe ustawienia....
Możesz wpisać wybrane konto. Domyślnie chodzi o adres e-mail. Tutaj wpisaliśmy  Pomoc OVH.
Nazwa ta będzie widoczna w zarządzaniu kontami e-mail w programie Outlook.

2. Kliknij na zakładkę Serwer poczty wychodzącej .

![](images/img_1250.jpg){.thumbnail}


## Część 5: Serwer poczty wychodzącej i opcje zaawansowane
W zakładce Serwer poczty wychodzącej zaznacz "Serwer poczty wychodzącej (SMTP) wymaga uwierzytelniania" i Używaj takich samych parametrów jak dla serwera poczty przychodzącej.


Należy używać portu 587 dla SMTP i zaznaczyć opcję uwierzytelniania, aby połączyć się z serwerem poczty wychodzącej.

- Uwierzytelnianie dla serwera poczty wychodzącej jest parametrem niezbędnym, aby wysyłka e-maili mogła działać na naszych serwerach SMTP. 

- Jeśli uwierzytelnianie nie jest włączone, może zostać otwarte zgłoszenie Open SMTP informujące, że uwierzytelnianie "POP before SMTP" nie jest obsługiwane. Należy obowiązkowo włączyć uwierzytelnienie serwera poczty wychodzącej, aby móc wysyłać e-maile.


W zakładce "Zaawansowane opcje" podaj te parametry:

Serwer poczty przychodzącej (POP3):  110.

Ten serwer wymaga szyfrowanego połączenia (SSL) musi być odznaczone.

Serwer poczty wychodzącej (SMTP):  587.

Używaj następującego typu połączenia szyfrowanego musi wskazywać na Brak

Kliknij na "OK", aby kontynuować.

Na tym etapie możesz również określić, czy e-maile maja być usuwane z serwera.

![](images/img_1251.jpg){.thumbnail}


## Część 6: test ustawień
Na tym etapie możesz przetestować ustawienia klikając na "Przetestuj ustawienia konta ...".

![](images/img_1267.jpg){.thumbnail}


## Część 7: Zakończenie konfiguracji
1.  Po sprawdzeniu ustawień kliknij na Dalej >.
2.  Zostanie wykonany nowy test ustawień Kliknij na Zamknij.

![](images/img_1266.jpg){.thumbnail}


## Część 8: Gratulacje!
Konto zostało prawidłowo skonfigurowane w programie Outlook 2010. Kliknij na 
Zamknij.

![](images/img_1254.jpg){.thumbnail}


## 1. Wpisanie informacji
1. Nazwa: wpisz nazwę, która ma się wyświetlać u odbiorców wiadomości;
2. Adres poczty elektronicznej: cały adres e-mail;
3. Hasło: wpisz hasło przypisane do konta e-mail i potwierdź je w poniższej linii. 

Kliknij na Dalej >.

![](images/img_1264.jpg){.thumbnail}


## 2. Autoryzacja
Aplikacja Outlook szuka elementów domeny niezbędnych do dokończenia automatycznej konfiguracji. Jeśli operacja przebiegnie pomyślnie, pojawi się ten komunikat. 

Chcesz dodać kilka adresów e-mail związanych z ta domeną? 
Zaznacz opcję Nie pytaj więcej o tę stronę www. 
Nie będziesz musiał zaznaczać tego pola podczas dodawania kolejnych konta e-mail. 

Następnie kliknij na Zezwalaj.

Jeśli komunikat ten nie pojawił się, sprawdź poprawność hasła na stronie [Webmail](http://webmail.ovh.net).
Jeśli hasło jest prawidłowe, upewnij się, czy w strefie DNS domeny znajdują się 3 poniższe wpisy:


```
_submission._tcp.votredomaine SRV 0 0 465 SSL0.OVH.NET
_imaps._tcp.votredomaine SRV 0 0 993 SSL0.OVH.NET
_autodiscover._tcp.votredomaine SRV 0 0 443 mailconfig.ovh.net.
```


W tym celu zaloguj się do  [panelu klienta](https://www.ovh.com/manager/web), wybierz domenę i kliknij na zakładkę Strefa DNS. Upewnij się, że korzystasz z Trybu Expert.

![](images/img_1265.jpg){.thumbnail}


## 3. Zakończenie konfiguracji
Aplikacja Outlook zakończyła konfigurację. Kliknij na Zakończ.

![](images/img_1263.jpg){.thumbnail}


## Konfiguracja POP
Oto informacje do konfiguracji konta e-mail POP.

Konfiguracja POP z zabezpieczeniem SSL włączonym/green] lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:995 lub 110
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 110 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.

Porty 995 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.



- Należy obowiązkowo włączyć [uwierzytelnianie](#configuration_manuelle_partie_5_serveur_sortant_amp_options_avancees) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|995|110|
|Wychodzący|465|587|




## Konfiguracja IMAP
Oto informacje do konfiguracji konta e-mail IMAP.

Konfiguracja IMAP z zabezpieczeniem SSL włączonym/green] lub wyłączonym:

Adres Email : Cały adres e-mail
Hasło: Hasło zdefiniowane w [panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:ssl0.ovh.net
Port serwera poczty przychodzącej:993 lub 143
Serwer poczty wychodzącej:ssl0.ovh.net
Port serwera poczty wychodzącej:465 lub 587

Porty 143 i 587 są podawane, gdy zabezpieczenie SSL jest wyłączone.

Porty 993 i 465 są podawane, gdy zabezpieczenie SSL jest włączone.


- Należy obowiązkowo włączyć [uwierzytelnianie](#configuration_manuelle_partie_5_serveur_sortant_amp_options_avancees) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|993|143|
|Wychodzący|465|587|




## Informacje ogólne
Możemy wykonać niektóre operacje w ramach interwencji płatnej. 

Informacje na temat interwencji płatnych wykonywanych przez OVH oraz na temat procedury znajdują się w tym przewodniku:


- []({legacy}1683)



![](images/img_2503.jpg){.thumbnail}

