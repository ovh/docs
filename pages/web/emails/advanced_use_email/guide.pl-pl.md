---
title: Zaawansowane korzystanie z e-maili OVH
excerpt: Zaawansowane korzystanie z e-maili OVH
slug: zaawansowane_korzystanie_z_e-maili_ovh
legacy_guide_number: g2117
---


## Jak zmienić hasło do kont e-mail?

- Wybierz nazwę domeny z menu "E-maile" a następnie opcję "Zmień hasło" po kliknięciu na ikonkę koła zębatego przy wybranym koncie e-mail.



![](images/img_3916.jpg){.thumbnail}

- Wpisz nowe hasło i potwierdź je.

Nie trzeba podawać starego hasła.


Uwaga: Hasło musi spełniać poniższe wymagania:


- Minimum 9 znaków.
- Maksymalnie 30 znaków.
- Brak znaków akcentowanych.


Kliknij na "Zatwierdź", aby dokończyć operację zmiany hasła.

Zmiana hasła może trwać kilka minut.


## Jak skonfigurować konta e-mail?
Udostępniamy kilka przewodników opisujących konfigurację adresu e-mail w różnych programach pocztowych.
Są one dostępne na tej stronie:


- [Konfiguracja kont e-mail](https://www.ovh.pl/g1474.emaile-na-hostingu-www-ovh).




## Jak skonfigurować listy mailingowe?
Lista mailingowa to adres e-mail, który przesyła otrzymane wiadomości na listę adresów e-mail, które mogą być obsługiwane w OVH lub u innego dostawcy.

Działanie listy mailingowej jest trochę bardziej skomplikowane niż innych typów adresów e-mail.

Udostępniamy przewodnik na temat administrowania listą mailingową:


- []({legacy}1596).




## Jak sprawdzać wiadomości dla danego konta?
Masz dwie możliwości:


- Korzystanie z interfejsu webmail. Przejdź na stronę [Webmail](https://webmail.ovh.pl/), wybierz interfejs RoundCube, wpisz cały adres e-mail oraz hasło (oto [przewodnik dotyczący interfejsu RoundCube](https://www.ovh.pl/g1302.webmail-roundcube)).

- Korzystanie z programu pocztowego. Udostępniamy przewodniki na temat konfiguracji programów do obsługi poczty elektronicznej:
- []({legacy}1474).




## Jak utworzyć przekierowanie e-mail?
Chcesz przekierować swoje adresy e-mail?

Zapoznaj się z tym przewodnikiem:


- []({legacy}2001).




## Jak dodać i usunąć autoresponder?
Chcesz utworzyć autoresponder dla swoich adresów e-mail? 

Zapoznaj się z tym przewodnikiem:http://pomoc.ovh.pl/UtworzenieAutomatycznejOdpowiedzi


- [Autoresponder dla konta e-mail](http://pomoc.ovh.pl/UtworzenieAutomatycznejOdpowiedzi).




## Jak skonfigurować filtry dla konta e-mail?
Chcesz utworzyć filtry dla swoich kont e-mail?

Zapoznaj się z tym przewodnikiem:


- []({legacy}1973).




## Jak zarządzać wpisami SPF?
Chcesz zarządzać wpisami SPF dla swoich kont e-mail?

Zapoznaj się z tym przewodnikiem:


- []({legacy}2028).


## Co należy sprawdzić w przypadku problemu z e-mailami?
W przypadku problemów z wysyłką lub odbieraniem e-maili można sprawdzić poniższe punkty:


- Czy moja usługa e-mail została włączona?Aby konta e-mail działały, musisz dysponować aktywną usługą e-mail. Jeśli posiadasz konta e-mail przypisane do oferty hostingu, sprawdź czy oferta ta nie wygasła. Informacja ta jest widoczna w panelu klienta. Domena również musi być aktywna.

- Czy e-maile działają z poziomu interfejsu webmail?Jeśli chcesz się upewnić, że problem nie jest związany z konfiguracją, wykonaj test wysyłki i pobrania bezpośrednio z interfejsu webmail OVH. Jeśli wszystko działa prawidłowo, sprawdź konfigurację programu pocztowego korzystając z udostępnionych przewodników.

- Nie możesz się zalogować do interfejsu webmail? 
Sprawdź, czy posiadasz prawidłowe hasło. Możesz również je zmienić.


- Czy na mojej usłudze wykonywane są prace?Możesz sprawdzać prace w trakcie na [tej stronie](http://prace.ovh.pl/).

- Czy moja domena jest prawidłowo przekierowana?Sprawdź, czy domena korzysta z prawidłowych serwerów e-mail (wpisy MX). Zapoznaj się z [tym przewodnikiem](https://www.ovh.pl/g2003.hosting_www_serwery_mx).




## Zarządzanie spamem w OVH

## Może pojawić się sytuacja, w której otrzymasz spam na swoją skrzynkę e-mail. W takiej sytuacji sprawdź poniższe punkty:

- Czy serwery e-mail Twojej domeny są skonfigurowane [z ochroną antyspamową](#enregistrement_mx)?

- Czy e-maile są oznaczone jako spam?

Jeśli e-maile mają w temacie oznaczenie [spam], oznacza to, że są prawidłowo oznaczane przez nasz system antyspamowy. Możesz dodać regułę i na przykład przekierować wiadomości ze spamem do odpowiedniego folderu. 

Wiadomości oznaczane jako spam lub wiadomości z wirusem nie są automatycznie usuwane z naszych serwerów ze względu na ewentualne fałszywe alarmy (e-mail oznaczony jako spam a w rzeczywistości zgodny z Twoimi kryteriami).


## Wartości
Jeśli korzystasz z e-maili zawartych w ofercie hostingu www lub w ofercie MxPlan, musisz używać wpisów MX OVH:


- mx1.mail.ovh.net
- mx2.mail.ovh.net
- mx3.mail.ovh.net



## Informacja:
Aktualnie stare serwery MX nadal działają dla usług e-mail utworzonych przed 23/05/2016.
Należy więc zmienić te wpisy w strefie DNS domeny. 


- Jeśli korzystasz z serwerów DNS innego dostawcy, skontaktuj się z tym dostawcą, w celu dokonania odpowiednich zmian.


Jeśli korzystasz z serwerów DNS OVH dla hostingu www, możesz dokonać zmian w panelu klienta.


## Informacje ogólne
Jeśli chcesz korzystać z większych parametrów, skorzystaj z oferty [Exchange](https://www.ovh.pl/emaile/hosted-exchange/).

Limity wysyłki

200 e-maili / godzinę / konto oraz 300 e-maili / godzinę / IP.

Rozmiar skrzynek e-mail

Każde konto e-mail ma rozmiar 5 GB.

Maksymalny rozmiar załączników

Załączniki wysyłane przez interfejs webmail mogą mieć maksymalny rozmiar 20 MB, załączniki przesyłane z poziomu programu pocztowego mogą mieć maksymalny rozmiar 100 MB.

Maksymalna liczba osób podana w kopii wiadomości e-mail

Każda wysyłana wiadomość może mieć w kopii maksymalnie 20 adresów e-mail. E-mail wysłany do 20 osób w kopii to 20 wysłanych e-maili.

Uwaga


- Zamawiając ofertę MxPlan konta e-mail nie są dodawane, lecz zastępują aktualną ofertę. 

Przykład: Jeśli masz hosting perso2014 (10 kont pop) i wybierzesz usługę 100 MxPlan, będziesz mógł utworzyć 100 kont pop, nie 110.

- Każda oferta MxPlan jest dostarczana z kontem "postmaster@". Adres ten nie może być zmieniony ani usunięty. Nie jest on również wliczany do liczby kont e-mail. 

Przykład: Jeśli zamówisz 5 MxPlan, to poza kontem postmaster@ będziesz dysponować 5 skrzynkami e-mail.



## Oferta MxPlan
Udostępniamy przewodnik na temat oferty MxPlan: []({legacy}1864)


## Jak zwiększyć rozmiar konta e-mail?
W przypadku hostingu www oraz ofert MxPlan można zwiększyć rozmiar kont e-mail z 25MB do 5GB.

Rozmiar konta e-mail można zmienić w [panelu klienta](https://www.ovh.com/manager/web/).


- Wybierz domenę z menu w sekcji "E-maile", a następnie wybierz opcję "Modyfikacja konta" po kliknięciu na ikonkę koła zębatego koło wybranego konta e-mail.



![](images/img_3915.jpg){.thumbnail}

- Wybierz rozmiar konta.

- Kliknij na "Zatwierdź", aby potwierdzić zmianę.



![](images/img_3914.jpg){.thumbnail}
Pojawi się komunikat o modyfikacji w trakcie: 

Operacja może trwać od 5 do 10 minut.
Czym jest quota?
Konto e-mail dysponuje określoną przestrzenią dyskową. Quota to rozmiar przypisany do konta e-mail na naszym serwerze e-mail.

Gdzie można sprawdzić quotę?
Bezpośrednio na serwerze e-mail, na przykład w interfejsie [webmail](https://ssl0.ovh.net/pl/). Interfejs ten umożliwia dostęp bezpośrednio do serwera. Możesz sprawdzić rozmiar. Gdy sprawdzasz pocztę elektroniczną, Twój program pocztowy usuwa e-maile z serwera i przechowuje je na Twoim komputerze. Osoby korzystające wyłącznie z programów pocztowych, takich jak Outlook zazwyczaj nie mają problemu z overquotą, chyba że ustawią opcję "pozostawienia kopii wiadomości na serwerze".

Czym jest overquota?
Gdy przekraczasz przestrzeń dyskową przypisaną do konta, serwer e-mail nie może odbierać poczty. Odrzuca nowe wiadomości e-mail i odsyła do nadawcy komunikat: "user is over quota".

Jak zmniejszyć quotę?
Wystarczy usunąć pliki, które przechowujesz na serwerze e-mail za pomocą interfejsu 
[webmail](https://ssl0.ovh.net/pl/). Nie zapomnij o wyczyszczeniu kosza.

