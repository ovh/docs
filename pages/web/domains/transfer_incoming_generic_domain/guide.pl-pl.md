---
title: Transfer nazwy domeny funkcjonalnej do OVH
slug: przewodnik_dotyczacy_transferu_domen_globalnych_com_net_org_info_biz
excerpt: Dowiedz się, jak dokonać transferu nazwy domeny funkcjonalnej do OVH
section: Transfery
---

**Ostatnia aktualizacja dnia 2018-01-18**

## Wprowadzenie

Transfer nazwy domeny umożliwia zmianę jej rejestrator. Transfer do OVH jest możliwy i trwa od jednego do dziesięciu dni.

**Dowiedz się, jak dokonać transferu nazwy domeny funkcjonalnej na serwer OVH.**

## Wymagania początkowe
- Posiadanie nazwy domeny funkcjonalnej (tj. z rozszerzeniem .com, .net, .info itd.) u innego rejestratora.
- Upoważnienie do rozpoczęcia transferu nazwy domeny. Należy powiadomić właściciela i/lub osoby administrujące o zamiarze transferu.
- Domena utworzona ponad 61 dni wcześniej.
- W ciągu ostatnich 61 dni domena nie była przenoszona ani nie zmieniła właściciela.
- Nazwa domeny została odblokowana.
- Posiadanie kodu do transferu lub możliwość jego uzyskania.
- Prawidłowe adresy kontaktowe e-mail podane w bazie *Whois*.

## W praktyce

### Krok 1: sprawdzanie informacji dotyczących domeny

Twoja domena jest obecnie u innego rejestratora. Chcesz, aby nowym rejestratorem Twojej domeny było OVH?

Możesz dokonać transferu. Będzie się to wiązało z zaangażowaniem kilku stron: OVH, obecnego rejestratora oraz innych. Podczas przeprowadzania tego procesu niezbędne jest jego kilkukrotne zatwierdzenie. **Dlatego niezwykle istotne jest, aby informacje dotyczące nazwy domeny były aktualne.**

W tym celu można korzystać z naszego narzędzia *Whois*, dostępnego pod linkiem: [https://www.ovh.pl/cgi-bin/whois.pl](https://www.ovh.pl/cgi-bin/whois.pl){.external}. Otrzymany wynik przedstawi wiele informacji.

- **Jeśli są poprawne**: odblokuj domenę u obecnego rejestratora.

- **Jeśli są niepoprawne lub niewidoczne**: zwróć się do obecnego rejestratora, aby je sprawdził i/lub zmienił.

> [!primary]
>
> Jeśli nie wiesz, kto jest obecnym rejestratorem, linia "Registrar" w wyniku wyświetlonym w [narzędziu](https://www.ovh.pl/cgi-bin/whois.pl){.external} *Whois* pomoże go zidentyfikować.
>

Poniżej tabela opisująca poszczególne kroki transferu.

|Krok|Opis|Kto?|Gdzie?|Termin|
|---|---|---|---|---|
|1|Odblokowanie domeny|Administrator domeny za zgodą właściciela|U obecnego rejestratora|Zależy od podjętych działań|
|2|Pozyskanie kodu transferu|Administrator domeny za zgodą właściciela|U obecnego rejestratora|Zależy od podjętych działań|
|3|Wniosek o transfer domeny|Każdy, kto posiada kod transferu za zgodą właściciela|U nowego rejestratora (np. OVH)|Zależy od podjętych działań|
|4|Pierwszy etap zatwierdzania transferu|Właściciel domeny i administrator od nowego rejestratora|W otrzymanym e-mailu|Do pięciu dni|
|5|Drugi etap zatwierdzania transferu|Obecny rejestrator|Wniosek organu zarządzającego rozszerzeniem domeny (rejestr domen)|Do pięciu dni|

### Krok 2: odblokowanie domeny

Po sprawdzeniu informacji konieczne jest odblokowanie domeny. Czynności tej może dokonać wyłącznie obecny rejestrator. Należy skontaktować się z nim, aby zapoznać się ze stosowaną przez niego procedurą.

Po odblokowaniu domeny rejestrator powinien przekazać przypisany do niej kod transferu. Taki kod może nosić różne nazwy: **kod transferu**, **AuthCode**, **AuthInfo** albo **code EPP**.

Należy pamiętać, że OVH nie jest obecnym rejestratorem Twojej domeny. Nie może więc jej odblokować ani pozyskać kodu transferu.

> [!warning]
>
> Od chwili odblokowania nazwy domeny masz 7 dni na rozpoczęcie jej transferu do OVH. Po tym terminie blokuje się ona automatycznie, jeśli nie wpłynie wniosek o zmianę rejestratora.
>

### Krok 3: zamawianie transferu w OVH

Teraz, gdy Twoja domena jest odblokowana i posiadasz kod transferu, możesz wnioskować o jej transfer do OVH. W tym celu należy złożyć zamówienie transferu na [naszej stronie internetowej](https://www.ovh.pl/domeny/transfer_domeny.xml){.external}.

Wprowadź nazwę swojej domeny, a następnie postępuj zgodnie z kolejnymi krokami zamówienia. Kod transferu należy wpisać w polu obok nazwy Twojej domeny. Jeśli nie masz kodu transferu, możesz zaznaczyć pole `Wpisz kod authinfo później`{.action}. Zalecamy wcześniejsze upewnienie się, że możliwe będzie pozyskanie kodu przed kontynuowaniem procesu. 

Na różnych etapach można uzupełnić zamówienie o [ofertę hostingu stron internetowych](https://www.ovh.pl/hosting/){.external}, inne rozwiązania OVH lub wybór serwerów DNS. Może Cię to zainteresować, jeśli transfer domeny jest częścią projektu obejmującego przenoszenie usług (strony internetowej i adresów e-mail) do OVH. W przewodniku [Przenoszenie strony internetowej i adresów e-mail na serwer OVH](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/){.external} znajdziesz opis niezbędnych w takich przypadkach czynności.

> [!warning]
>
> Podczas składania zamówienia należy bardzo starannie wybrać serwer DNS. Jeśli nazwa domeny jest wykorzystywana w adresie strony internetowej lub adresach e-mail, należy się upewnić, że zostały wprowadzone serwery DNS, z których obecnie korzysta Twoja domena.
>

W celu rozpoczęcia transferu domeny, po prawidłowym złożeniu zamówienia, należy je opłacić. Po otrzymaniu płatności rozpocznie się proces transferu. W [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external} można śledzić proces transferu.

### Krok 4: zatwierdzenie transferu

Po rozpoczęciu transferu, do jego ukończenia niezbędne są dwa etapy zatwierdzenia.

#### Pierwszy etap zatwierdzania

Rozpoczyna się z chwilą rozpoczęcia transferu i może trwać do pięciu dni. W celu zatwierdzenia pierwszego etapu zostaną wysłane dwie prośby o zatwierdzenie.

|Kto otrzymuje prośbę o zatwierdzenie?|Gdzie wysyłana jest prośba o zatwierdzenie?|
|---|---|
|Właściciel domeny|Na adres e-mail właściciela podany w bazie *Whois*|
|Administrator wskazany podczas składania zamówienia w OVH|Na adres e-mail podany w profilu administratora w OVH|

Możliwe są różne wersje odpowiedzi.

|Możliwe wersje odpowiedzi|Co się stanie|
|---|---|
|Zatwierdzenie przez właściciela i administratora|Przejście do drugiego etapu zatwierdzania w ciągu 24 godzin|
|Jedno zatwierdzenie (bez względu na to, czyje) i jedna prośba bez odpowiedzi|Przejście do drugiego etapu zatwierdzania po upływie pięciu dni|
|Brak odpowiedzi na obydwie prośby o zatwierdzenie|Transfer odrzucony po upływie pięciu dni|
|Odmowa (bez względu na to, czyja)|Transfer odrzucony po otrzymaniu informacji o odmowie|

Zatwierdzenie przez obydwie strony odbywa się przez interfejs OVH. Właściwy link do interfejsu, na którym można zatwierdzić lub zmienić wyświetlane dane znajduje się w e-mailu przesłanym obydwu stronom.

![Potwierdzenie transferu](images/domaintransfer_gTLD_validation.png){.thumbnail}

W przypadku odrzucenia transferu należy upewnić się, że strony zgadzają się na zmianę rejestratora oraz że ich adresy e-mail są aktualne. Transfer można wznowić w późniejszym czasie z poziomu [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external} w sekcji `Domeny`{.action}, a następnie `Operacje w trakcie`{.action}.

#### Drugi etap zatwierdzania

Po rozpoczęciu drugiego etapu, obecny rejestrator (którym nie jest jeszcze OVH) otrzymuje prośbę o zatwierdzenie. Możliwe są różne wersje odpowiedzi.

|Możliwe wersje odpowiedzi|Co się stanie|
|---|---|
|Zatwierdzenie przez obecnego rejestratora|Transfer zostanie zrealizowany do 24 godzin|
|Brak odpowiedzi od obecnego rejestratora|Transfer zrealizowany po upływie pięciu dni|
|Odmowa obecnego rejestratora|Transfer odrzucony po otrzymaniu informacji o odmowie|

W przypadku odmowy obecnego rejestratora, należy zwrócić się do niego z prośbą o jej uzasadnienie. Transfer można wznowić z poziomu [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager){.external} w sekcji `Domeny`{.action}, a następnie `Operacje w trakcie`{.action}.

### Krok 5: zarządzanie domeną

Po zakończeniu procesu transferu, domena może być administrowana z poziomu [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}.

Informujemy, że w przypadku płatnych transferów nazwy domeny, po dacie jej wygaśnięcia dodajemy rok gratis.

## Sprawdź również

[Przenoszenie strony internetowej i adresów e-mail na serwer OVH](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com](https://community.ovh.com){.external}.