---
title: 'Konfiguracja konta Exchange w programie Thunderbird'
excerpt: ''
slug: exchange_20132016_konfiguracja_w_programie_thunderbird
section: 'Konfiguracja programu pocztowego IMAP/POP'
legacy_guide_number: g1278
---

## Część 1: Uruchamianie
Uruchom aplikację "Thunderbird" zainstalowaną na komputerze.

Oto interfejs, który pojawi się domyślnie, jeśli nie masz żadnego skonfigurowanego adresu e-mail. W przeciwnym razie skorzystaj z menu, aby dodać nowe konto. 

Wybierz "Poczta elektroniczna", aby kontynuować.

![](images/img_1127.jpg){.thumbnail}


## Część 2: Uruchamianie (ciąg dalszy)
Aby kontynuować instalację adresu e-mail, wybierz opcję "Przejdź ten etap i korzystaj z mojego istniejącego adresu".

![](images/img_1128.jpg){.thumbnail}


## Część 3: Zakładanie konta
Wypełnij wyświetlone pola:

"Imię i nazwisko": Wpisz tutaj nazwę, która ma się wyświetlać.

"Adres elektroniczny": Pełny adres e-mail

"Hasło": Hasło zdefiniowane dla konta Exchange w [panelu klienta](https://www.ovh.com/manager/web/login.html).

"Zapamiętaj hasło": Należy zaznaczyć tą opcję.

Kliknij na "Kontynuuj", aby kontynuować etapy instalacji.

![](images/img_1129.jpg){.thumbnail}


## Część 4: Zaawansowana konfiguracja
W przypadku zamówień realizowanych od 26/04/2016 serwer Exchange dla oferty Hosted to ex2.mail.ovh.net.
Po kliknięciu na "Konfiguracja ręczna" pojawi się ten interfejs.

Sprawdź, czy wyświetlone elementy są poprawnie wpisane:

"Serwer poczty przychodzącej: IMAP":
Dla konta Hosted
Nazwa hosta serwera: ex.mail.ovh.net.
Port: 993.
Sposób szyfrowania: SSL.
Logowanie: Normalne hasło.

"Serwer poczty wychodzącej: SMTP" :
Dla konta Hosted
Nazwa hosta serwera: ex.mail.ovh.net.
Port: 587.
Sposób szyfrowania: STARTTLS.
Logowanie: Normalne hasło.

"Identyfikator": Pełny adres e-mail

W przypadku kont z oferty Private należy podać serwer wybrany podczas zamawiania serwera Exchange.

Jeśli uwierzytelnianie normalnym hasłem nie działa, możesz wpisać "NTLM".

Kliknij na "Zakończone", aby kontynuować etapy instalacji.

![](images/img_2309.jpg){.thumbnail}


## Część 5: Zakończenie
Twoje konto Exchange zostało poprawnie skonfigurowane w IMAP.

Oto aktualny interfejs.

![](images/img_1134.jpg){.thumbnail}


## Parametry serwera poczty przychodzącej
Na zrzucie ekranu przypomnienie parametrów konta.

"Dla serwera poczty przychodzącej"

![](images/img_1132.jpg){.thumbnail}


## Parametry serwera poczty wychodzącej
"Dla serwera poczty wychodzącej"

![](images/img_1133.jpg){.thumbnail}

