---
title: Przewodnik dotyczący konfiguracji programu Outlook 2011 w systemie Mac
excerpt: Przewodnik ten opisuje konfigurację programu Outlook 2011 w systemie Mac
slug: przewodnik_dotyczacy_konfiguracji_programu_outlook_2011_w_systemie_mac
legacy_guide_number: g1345
hidden: true
---


## Część 1: Uruchomienie
Uruchom program Microsoft Outlook 2011 w systemie Mac.

Będziemy konfigurować program w trybie IMAP, z włączonym protokołem SSL.

Możesz skonfigurować program w trybie POP podając informacje zawarte na końcu przewodnika.

Korzystamy z wersji 10.9.1 systemu Mac. Outlook 2011 jest w wersji 14.0.0.

![](images/img_1492.jpg){.thumbnail}


## Część 2: Narzędzia - Konta
Kliknij na "Narzędzia" i na "Konta...".

W naszym programie nie ma skonfigurowanych żadnych kont.

![](images/img_1493.jpg){.thumbnail}


## Część 3: Dodanie konta
Pojawi się nowy interfejs.

Wybierz ikonkę "Konto poczty elektronicznej", aby dodać konto e-mail POP lub IMAP.

![](images/img_1494.jpg){.thumbnail}


## Część 4: Informacje o koncie
Pojawi się nowy interfejs. 

Wypełnij pola:

Adres poczty elektronicznej: Cały adres e-mail

Hasło: Hasło zdefiniowane w panelu klienta

Nazwa użytkownika: Cały adres e-mail

Typ: Wybierz IMAP (możesz wybrać POP, w tym przypadku skorzystaj z danych podanych na końcu przewodnika).

Serwer poczty przychodzącej: SSL0.OVH.NETPort serwera poczty przychodzącej: 993

Zaznacz opcje "Zastąp domyślny port" i "Używaj SSL do logowania (zalecane)".

Serwer poczty wychodzącej: SSL0.OVH.NETPort serwera poczty wychodzącej: 465

Zaznacz opcje "Zastąp domyślny port" i "Używaj SSL do logowania (zalecane)".

Kliknij na "Dodaj konto", aby zarejestrować konto.

![](images/img_1495.jpg){.thumbnail}


## Część 5: Zakończenie
Konto zostało dodane do interfejsu Outlook 2011.

Możesz sprawdzać, tworzyć i usuwać wiadomości.

![](images/img_1496.jpg){.thumbnail}


## Narzędzia - Konta
Kliknij na "Narzędzia" i na "Konta...".

Wybierz konto, które chcesz zmodyfikować.

Pojawi się ten interfejs:

Kliknij na "Inne opcje..." w menu rozwijalnym. Będziesz mógł wybrać  "Uwierzytelnianie" -> "Korzystaj z informacji dotyczących serwera poczty przychodzącej".

W tej części możesz zmienić informacje dotyczące konfiguracji konta e-mail z wyjątkiem typu konta (POP lub IMAP)

Sprawdźmy opcje dostępne w zakładce "Zaawansowane...".

![](images/img_2138.jpg){.thumbnail}

- Uwierzytelnianie dla serwera poczty wychodzącej jest parametrem niezbędnym, aby wysyłka e-maili mogła działać na naszych serwerach SMTP. 

- Jeśli uwierzytelnianie nie jest włączone, może zostać otwarte zgłoszenie Open SMTP informujące, że uwierzytelnianie "POP before SMTP" nie jest obsługiwane. Należy obowiązkowo włączyć uwierzytelnienie serwera poczty wychodzącej, aby móc wysyłać e-maile.




## Serwer
Parametry, które można zmienić w zakładce "Serwer" w opcjach zaawansowanych.

![](images/img_1498.jpg){.thumbnail}
Aby wprowadzone ustawienia były w pełni funkcjonalne, zalecamy wpisanie w polu 	"Katalog IMAP" katalog "INBOX".


## Katalogi
Parametry, które można zmienić w zakładce "Katalogi" w opcjach zaawansowanych.

![](images/img_1499.jpg){.thumbnail}


## Bezpieczeństwo
Parametry, które można zmienić w zakładce "Bezpieczeństwo" w opcjach zaawansowanych.

![](images/img_1500.jpg){.thumbnail}


## Konfiguracja POP
Oto informacje niezbędne do skonfigurowania konta e-mail POP.

Konfiguracja POP z włączonym lub wyłączonym szyfrowaniem SSL:

Adres e-mail: Cały adres e-mail
Hasło: Hasło zdefiniowane w panelu [Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:SSL0.OVH.NET
Port serwera poczty przychodzącej:995 lub 110
Serwer poczty wychodzącej:SSL0.OVH.NET
Port serwera poczty wychodzącej:465 lub 587

Porty 110 i 587 dotyczą wyłączonego protokołu SSL.
Porty 995 i 465 dotyczą włączonego protokołu SSL.


- Należy obowiązkowo włączyć [uwierzytelnianie](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|995|110|
|Wychodzący|465|587|




## Konfiguracja IMAP
Oto informacje niezbędne do skonfigurowania konta e-mail IMAP

Konfiguracja IMAP z włączonym lub wyłączonym szyfrowaniem SSL:

Adres e-mail: Cały adres e-mail
Hasło: Hasło zdefiniowane w panelu [Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika: Cały adres e-mail
Serwer poczty przychodzącej:SSL0.OVH.NET
Port serwera poczty przychodzącej:993 lub 143
Serwer poczty wychodzącej:SSL0.OVH.NET
Port serwera poczty wychodzącej:465 lub 587

Porty 143 i 587 dotyczą wyłączonego protokołu SSL.
Porty 993 i 465 dotyczą włączonego protokołu SSL.


- Należy obowiązkowo włączyć[uwierzytelnianie](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes) serwera SMTP.


|Porty|SSLwłączony|SSLwyłączony|
|Wchodzący|993|143|
|Wychodzący|465|587|



