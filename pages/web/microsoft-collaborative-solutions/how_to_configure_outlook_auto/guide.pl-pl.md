---
title: 'Ręczna konfiguracja programu Outlook'
excerpt: 'Jeśli nie masz możliwości utworzenia pola SRV niezbędnego do automatycznej konfiguracji programu Outlook, postępuj zgodnie z tym przewodnikiem.'
section: 'Konfiguracja programu pocztowego Exchange'
slug: reczna_konfiguracja_programu_outlook
---

## Uzyskanie GUID Exchange
Aby ręcznie skonfigurować program Outlook, należy najpierw uzyskać GUID dostępny w panelu klienta klikając na "Konfiguracja"z prawej strony adresu do skonfigurowania. 

Dodaj do parametru GUID "@nazwa-domeny.com".

W naszym przykładzie to::
45c94143-1a29-4ef8-a990-06b54f9d6ad7@support-exchange.eu

![](images/img_1568.jpg){.thumbnail}
Outlook 2016 nie pozwala na automatyczną konfigurację za pomocą pola SRV. Kliknij [tutaj](https://www.ovh.pl/g1245.exchange-automatyczna-konfiguracja-outlook), aby zapoznać się z przewodnikiem na temat automatycznej konfiguracji.


## Panel konfiguracyjny
Operacje są wykonywane na komputerze z systemem Windows.

Przejdź do panelu konfiguracyjnego na swoim komputerze.

Zastanów się nad wybraniem opcji "wyświetlaj małe ikony", aby pojawiły się ikonki "Poczta elektroniczna" lub "Poczta elektroniczna (32-bit)"

Kliknij na zakładkę "Poczta elektroniczna" lub "Poczta elektroniczna (32-bit)".

Kliknij na "Konta poczty elektronicznej"

![](images/img_992.jpg){.thumbnail}


## Etap 2: dodawanie nowego konta e-mail
Kliknij na "Nowe", aby dodać konto e-mail Exchange.

![](images/img_1551.jpg){.thumbnail}


## Etap 3: konto poczty elektronicznej
Wybierz "Konto poczty elektronicznej" i kliknij na "Dalej".

![](images/img_994.jpg){.thumbnail}


## Etap 4: ręczna konfiguracja konta
Zaznacz "Konfiguracja ręczna lub typy dodatkowych serwerów"

Kliknij na "Dalej".

![](images/img_1552.jpg){.thumbnail}


## Etap 5: wybór usługi
Wybierz "Microsoft Exchange Server lub usługa kompatybilna"

Kliknij na "Dalej".

![](images/img_1553.jpg){.thumbnail}


## Etap 6: parametry serwera
Serwer: w tym polu wpisz GUID Exchange przed "@nazwa_domeny".

Nazwa użytkownika: w tym polu wpisz cały adres e-mail Exchange.

Kliknij na "Dodatkowe ustawienia..."

![](images/img_1554.jpg){.thumbnail}


## Etap 7: parametry proxy Exchange
W zakładce "Połączenie", zaznacz opcję "Łączenie z Microsoft Exchange z HTTP".

Kliknij na "Ustawienia proxy Exchange".

![](images/img_1555.jpg){.thumbnail}


## Etap 8: parametry połączenia
W polu "Używaj tego adresu do łączenia z moim serwerem proxy dla Exchange", wpisz: "ex.mail.ovh.net"

Następnie zaznacz "Połączenie tylko przy użyciu SSL" i "Połączenie tylko z serwerami proxy, których certyfikat zawiera ta nazwę główną" wpisz: "msstd:ex.mail.ovh.net" 

Zaznacz również pola "W sieciach szybkich, połącz najpierw z HTTP, a następnie z TCP/IP" i "W sieciach wolnych, połącz najpierw z HTTP, a następnie z TCP/IP".

Kliknij na  OK.

![](images/img_1556.jpg){.thumbnail}
W przypadku oferty "Private" zastąp serwer ex.mail.ovh.net nazwą certyfikatu SSL serwera. 
W przypadku migracji kont Exchange 2010 na 2013 (pierwszy etap), zastąp serwer ex.mail.ovh.net linkiem dostępowym do webmaila, na przykład: xc12.mail.ovh.net. Link ten jest wskazany w panelu klienta, w menu Microsoft, Exchange.
W przypadku zamówień realizowanych od 26/04/2016 serwer Exchange dla oferty Hosted to ex2.mail.ovh.net.


## Etap 9: Uwierzytelnianie
Pojawi się okno do uwierzytelnienia na serwerze Exchange. Należy wpisać cały adres e-mail i hasło.

Nie zapomnij o zaznaczeniu opcji "Zapamiętaj te informacje".

Konto zostało poprawnie skonfigurowane: możesz uruchomić program Outlook.

![](images/img_1557.jpg){.thumbnail}

