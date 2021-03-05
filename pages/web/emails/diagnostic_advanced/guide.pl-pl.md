---
title: Zaawansowane korzystanie z e-maili OVH
excerpt: Zaawansowane korzystanie z e-maili OVH
slug: zaawansowane_korzystanie_z_e-maili_ovh
legacy_guide_number: g2117
---

## Co należy sprawdzić w przypadku problemu z e-mailami?

W przypadku problemów z wysyłką lub odbieraniem e-maili można sprawdzić poniższe punkty:

- Czy moja usługa e-mail została włączona?Aby konta e-mail działały, musisz dysponować aktywną usługą e-mail. Jeśli posiadasz konta e-mail przypisane do oferty hostingu, sprawdź czy oferta ta nie wygasła. Informacja ta jest widoczna w panelu klienta. Domena również musi być aktywna.

- Czy e-maile działają z poziomu interfejsu webmail?Jeśli chcesz się upewnić, że problem nie jest związany z konfiguracją, wykonaj test wysyłki i pobrania bezpośrednio z interfejsu webmail OVH. Jeśli wszystko działa prawidłowo, sprawdź konfigurację programu pocztowego korzystając z udostępnionych przewodników.

- Nie możesz się zalogować do interfejsu webmail? 
Sprawdź, czy posiadasz prawidłowe hasło. Możesz również je zmienić.

- Czy na mojej usłudze wykonywane są prace?Możesz sprawdzać prace w trakcie na [tej stronie](http://prace.ovh.pl/).

- Czy moja domena jest prawidłowo przekierowana?Sprawdź, czy domena korzysta z prawidłowych serwerów e-mail (wpisy MX). Zapoznaj się z [tym przewodnikiem](https://docs.ovh.com/pl/domains/hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh/).

## Kody odpowiedzi serwera SMTP

### Polecenia SMTP

Polecenia SMTP są używane do przekazywania poczty elektronicznej. Aby odpytać serwer SMTP, należy komunikować się z nim wysyłając "polecenia".
Gdy serwer otrzyma polecenie, prześle odpowiedź SMTP.

### Odpowiedzi SMTP

Odpowiedzi na polecenia SMTP służą do zapewnienia synchronizacji zapytań i operacji w procesie trasferu poczty elektronicznej, w celu zagwarantowania klientowi SMTP znajomości stanu serwera SMTP. Każde polecenie powinno generować odpowiedź. 

Odpowiedź SMTP składa się z trzy cyfrowej liczby i tekstu.
Liczba jest używana przez serwery do określenia kolejnego etapu. 
Tekst jest użyteczny jedynie dla użytkownika. 

Trzy cyfry w odpowiedzi mają określone znaczenie:

- Pierwsza cyfra wskazuje, czy odpowiedź jest dobra, zła czy niekompletna. Klient SMTP będzie mógł określić kolejna operację po sprawdzeniu tej pierwszej cyfry. 

- Druga i trzecia cyfra dostarczają informacji uzupełniających.

### Szybka analiza odpowiedzi SMTP

W przypadku pierwszej cyfry w kodzie odpowiedzi możliwe są cztery wartości:

- 2xx  Odpowiedź pozytywna:

Zlecona operacja została wykonana. Można zlecić kolejną operację. 

- 3xx  Tymczasowa odpowiedź pozytywna:

Polecenie zostało zaakceptowane, ale zlecona operacja oczekuje na dokładniejsze informacje. Klient SMTP powinien przesłać inne polecenie z tą informacją. 

- 4xx  Negatywna odpowiedź przejściowego zakończenia:

Polecenie nie zostało zaakceptowane i zlecona operacja nie została wykonana. Warunek błędu jest tymczasowy, operacja może zostać ponownie zlecona. 

- 5xx  Odpowiedź negatywna:

Polecenie nie zostało zaakceptowane i zlecona operacja nie została wykonana. Klient SMTP nie powtórzy tego samego zlecenia.

### Interpretacja

Poniżej znajduje się większość kodów odpowiedzi SMTP używanych przez serwery:

|Kody odpowiedzi|Szczegóły|Operacje|
|---|---|---|
|211|Komunikat stanu systemu lub odpowiedź pomocy|Komunikat jest poprzedzony dodatkowymi informacjami.|
|214|Komunikat pomocy|Zawiera informacje na temat serwera i przekierowuje na stronę pomocy FAQ.|
|220|Serwer jest gotowy.﻿|Komunikat wskazujący, że serwer jest gotowy.|
|221|Kanał transmisji zamknięty|Oznacza to, że serwer zamyka połączenie na skutek udanej komunikacji.|
|250|Transmisja wiadomości zakończona|E-mail został przekazany.|
|251|Użytkownik końcowy nie jest obecny na tym serwerze, ale wiadomość zostanie przekazana.|Oznacza to, że wiadomość zostanie przekazana na inny serwer (przekierowanie, inny serwer MX, ...)|
|252|Serwer nie może zweryfikować użytkownika końcowego, ale spróbuje przekazać wiadomość.|Aktualnie nie można zweryfikować użytkownika końcowego, ale wiadomość zostanie prawdopodobnie przekazana później.|
|354|Serwer uzyskał adresy wysyłki i odbioru.|Oznacza to, że serwer czeka na odebranie treści wiadomości, aby ją przekazać.|
|420|Przekroczony czas, problem z połączeniem|Ten komunikat błędu jest zwracany tylko przez serwery GroupWise. Skontaktuj się z administratorem tych serwerów.|
|421|Usługa niedostępna, trwa zamykanie kanału transmisyjnego.|Nieokreślone pochodzenie błędu. Sprawdź, czy działa wysyłanie wiadomości na inną domenę. Jeśli tak, spróbuj później wysłać wiadomość jeszcze raz.|
|432|Wstrzymany odbiór wiadomości na serwerze Exchange.|Ten komunikat błędu jest zwracany tylko przez serwery mailowe Microsoft Exchange. Skontaktuj się z administratorem serwera docelowego.|
|449|Błąd routingu|Ten komunikat błędu jest zwracany tylko przez serwery mailowe Microsoft Exchange. Microsoft zaleca wykonanie diagnostyki za pomocą narzędzia WinRoute|
|450|Zlecona operacja nie została wykonana: skrzynka e-mail niedostępna (na przykład skrzynka e-mail zajęta lub tymczasowo zablokowana ze względów bezpieczeństwa|Sprawdź, czy adres IP Twojego serwera poczty elektronicznej nie jest zblacklistowany ([SpamHaus](https://www.spamhaus.org/lookup/)) lub czy Twoja wiadomość nie zawiera słów odnoszących się do SPAM-u.|
|451|Operacja została przerwana: Błąd lokalnego przetwarzania|Błąd ten może być związany z chwilowym przeciążeniem, z weryfikacją wpisu SPF domeny. Sprawdź pełną informację dostarczoną przez serwer lub skontaktuj się z administratorem serwera, jeśli problem się powtarza.|
|452|Zlecona operacja nie została wykonana: niewystarczający system przestrzeni dyskowej.|Twój serwer poczty elektronicznej jest przeciążony. Błąd ten może również być spowodowany zbyt dużą liczbą wiadomości, które były wysyłane jednocześnie. Sprawdź swoja skrzynkę nadawczą i spróbuj ponownie.|
|455|Serwer nie może pobrać ustawień.|Poczekaj chwilę i spróbuj ponownie. W przypadku problemu, skontaktuj się z administratorem serwera odbiorcy.|
|500|Błąd składni, nierozpoznane zlecenie|Błąd ten jest często spowodowany przez program antywirusowy lub przez firewalla nadawcy. Sprawdź to i spróbuj ponownie.|
|501|Błąd składni w ustawieniach lub argumentach|Błąd ten jest często spowodowany nieprawidłowym adresem e-mail odbiorcy lub problemem z programem antywirusowym lub z firewallem nadawcy. Sprawdź adres e-mail odbiorcy oraz swój antywirus i firewall.|
|502|Polecenie nie zaimplementowane|Ustawienia lub opcje wykorzystywane podczas wysyłania e-maila przez serwer SMTP są rozpoznawane ale wyłączone w jego konfiguracji. Skontaktuj się z dostawcą usługi.|
|503|Serwer rozpoznał nieprawidłową sekwencję poleceń.|Jest to błąd związany z uwierzytelnianiem. Sprawdź uwierzytelnianie na serwerze SMTP na poziomie konfiguracji swojego programu pocztowego.|
|504|Parametr polecenia nie zaimplementowany|Ustawienia lub opcje wykorzystywane podczas wysyłania e-maila przez serwer SMTP są rozpoznawane ale wyłączone w jego konfiguracji. Skontaktuj się z dostawcą usługi.|
|550|Zlecona operacja nie została wykonana: skrzynka e-mail niedostępna. |Serwer poczty elektronicznej odbiorcy nie mógł sprawdzić używanego adresu e-mail. Jest to najczęściej spowodowane nieprawidłowym adresem e-mail odbiorcy, ale może również oznaczać, że serwer poczty elektronicznej odbiorcy ma problemy z firewallem lub z łącznością. Sprawdź adres e-mail odbiorcy i spróbuj ponownie.|
|551|Użytkownik nie jest użytkownikiem lokalnym.|Jest to strategia ochrony przed spamem. Komunikat ten wskazuje, że nie można przesyłać poczty na inny serwer. Skontaktuj się z dostawcą usługi.|
|552|Zlecona operacja została przerwana: przekroczono limit przestrzeni.|Użytkownik, z którym chcesz się skontaktować, nie może odbierać wiadomości, z powodu przekroczenia limitu dostępnej przestrzeni dyskowej. Należy skontaktować się z odbiorcą w inny sposób.|
|553|Zlecona operacja nie została wykonana: nie autoryzowany adres e-mail.|Błąd ten jest spowodowany nieprawidłowym adresem e-mail odbiorcy. Sprawdź poprawność tego adresu.|
|554|Transakcja nie powiodła się, brak serwera SMTP.|Błąd ten jest związany z blacklistą. Sprawdź, czy adres IP Twojego serwera poczty elektronicznej nie znajduje się na czarnej liście ([SpamHaus](https://www.spamhaus.org/lookup/))|
|555|MAIL FROM / RCPT TO, ustawienia nie rozpoznane lub nie zrealizowane|Serwer SMTP nie rejestruje prawidłowo używanego adresu e-mail w ustawieniach "Od" lub "Do". Sprawdź, czy wskazane adresy e-mail są prawidłowe. Sprawdź również, czy nie przekroczyłeś zdefiniowanych przez OVH limitów: 200 maili / godzina / konto i 300 maili / godzina / ip|