---
title: 'Transfer domeny do OVHcloud'
slug: przeniesienie-domeny-globalnej
excerpt: "Dowiedz się, jak wykonać transfer domeny do OVHcloud"
section: Transfer
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 24-10-2022**

## Wprowadzenie

Twoja domena jest aktualnie zarejestrowana u innego operatora. Chcesz ją przenieść do OVHcloud? Jest to możliwe dzięki zastosowaniu procedury transferu.

Transfer domeny umożliwia jej przeniesienie do innego operatora.  Możesz przenieść domenę do OVHcloud, składając zamówienie. Zajmie to od jednego do dziesięciu dni.

**Dowiedz się, jak przenieść domenę globalną do OVHcloud.**

> [!warning]
>
> Jeśli nazwa domeny w trakcie modyfikacji jest aktualnie zarejestrowana w OVHcloud, transfer przychodzący domeny nie jest właściwą procedurą. Procedura ta dotyczy wyłącznie zmiany zarejestrowanej domeny (OVHcloud).
>
> Aby przenieść zarządzanie domeną na inne konto klienta OVHcloud, należy wykonać *zmianę kontaktów*. Procedura jest opisana w [tym przewodniku](https://docs.ovh.com/pl/customer/zarzadzanie_kontaktami/).
>
> Jeśli chcesz zmienić również **właściciela** domeny, musisz to zrobić **przed** zmianą kontaktów domeny. W tym celu postępuj zgodnie z instrukcjami zawartymi w przewodniku OVHcloud dotyczącym [zmiany właściciela domen](https://docs.ovh.com/pl/domains/zmiana_wlasciciela_domeny_globalnej_com_net_org_info_biz/).
>

## Wymagania początkowe

- Nazwa domeny jest zarejestrowana u innego operatora.
- Domena istnieje od ponad 60 dni.
- W ciągu ostatnich 60 dni domena nie została przeniesiona ani nie zmieniła właściciela.
- Nazwa domeny to "OK" lub "Transferable".
- Nazwa domeny nie wygasła i ma datę wygaśnięcia pozwalającą na zakończenie procesu transferu w czasie (zalecane: ponad 60 dni).
- Posiadanie możliwości odblokowania domeny
- Posiadanie kodu transferu lub możliwość jego uzyskania
- Posiadanie uprawnień do złożenia wniosku o transfer domeny
- Powiadomienie właściciela domeny i/lub administratorów o wszczęciu procedury transferu

## W praktyce

Procedura transferu składa się z kilku etapów, w które włączone są różne podmioty, w tym obecny rejestr, OVHcloud i inne strony. Poniższa tabela wskazuje osoby, z którymi należy się kontaktować oraz szacowany czas trwania każdego etapu.

|Etapy|Opis|Kto wykonuje działanie?|Gdzie?/Jak?|Czas realizacji|
|---|---|---|---|---|
|1|Weryfikacja informacji związanych z domeną|Administrator domeny|U obecnego operatora domeny|W zależności od podjętych przez Ciebie działań|
|2|Odblokowanie domeny i pobranie kodu transferu|Administrator domeny, za zgodą właściciela|U obecnego operatora domeny|W zależności od podjętych przez Ciebie działań|
|3|Wniosek o transfer domeny|Każda osoba posiadająca kod transferu, za zgodą właściciela|U nowego operatora (np. OVHcloud)|W zależności od podjętych przez Ciebie działań|
|4|Zatwierdzenie transferu|U obecnego operatora domeny|Na prośbę organizacji zarządzającej rozszerzeniem Twojej domeny|Maksymalnie 5 dni|

> [!warning]
>
> Dokładna procedura transferu domeny może się różnić, w szczególności w przypadku niektórych TLD kodu kraju (ccTLD, takich jak .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, itp.) oraz niektórych specjalnych TLD (.am, .fm, itp.). W zależności od rozszerzenia Twojej domeny, mogą być konieczne dodatkowe wymagania. Zalecamy sprawdzenie w pierwszej kolejności informacji wyświetlanych dla danego rozszerzenia na naszej stronie internetowej: <https://www.ovhcloud.com/pl/domains/tld/>.
>

### Etap 1: weryfikacja informacji związanych z domeną

**W pierwszym kroku sprawdź, czy informacje związane z nazwą domeny są aktualne.** Od momentu wdrożenia RODO bardzo mało danych widocznych w bazie ["Whois"](https://www.ovh.pl/pomoc/narzedzia/check_whois.pl). Sugerujemy zatem sprawdzenie informacji dotyczących Twojej domeny u aktualnego operatora.

- **Jeśli informacje są poprawne: przejdź do kolejnego etapu niniejszego przewodnika.**

- **Jeśli informacje są nieprawidłowe lub niewidoczne: skontaktuj się z aktualnym operatorem domeny, aby sprawdzić i/lub zmodyfikować domenę.**

> [!primary]
>
> Jeśli nie wiesz, który operator jest odpowiedzialny za Twoją domenę, możesz podać informacje dotyczące jej tożsamości w wierszach "Registrar", które pojawią się w wyniku wyszukiwania narzędzia [Whois](https://www.ovh.pl/pomoc/narzedzia/check_whois.pl){.external}.
>

### Etap 2: odblokowanie domeny i pobranie kodu transferu

Po sprawdzeniu informacji dotyczących domeny konieczne jest jej odblokowanie.  Operacja ta może zostać przeprowadzona wyłącznie we współpracy z aktualnym operatorem.  Zalecamy kontakt z operatorem i uzyskanie informacji o przebiegu procedury.

Po odblokowaniu domeny poproś aktualnego operatora o podanie przypisanego do domeny kodu transferu. Ten kod jest czasem oznaczany różnymi nazwami, takimi jak: "Kod transferu", "Kod Auth", "Informacje Auth" lub "Kod EPP".

Pamiętaj, że OVHcloud nie jest operatorem Twojej domeny w momencie rozpoczęcia procedury transferu. Nie możemy więc jej odblokować ani dostarczyć Ci kodu transferu.

> [!warning]
>
> Po odblokowaniu Twojej domeny otrzymasz siedem (7) dni na transfer do OVHcloud. Po tym czasie Twoja domena zostanie automatycznie zablokowana, jeśli nie złożysz wniosku o zmianę operatora domeny.
>

### Etap 3: zlecić transfer domeny do OVHcloud

Po odblokowaniu Twojej domeny i uzyskanym kodzie możesz zamówić transfer domeny do OVHcloud z [naszej strony](https://www.ovhcloud.com/pl/domains/){.external}. Wprowadź nazwę Twojej domeny, po czym postępuj zgodnie z kolejnymi instrukcjami.

Wprowadź kod transferu w polu obok nazwy Twojej domeny. Jeśli nie posiadasz jeszcze kodu transferu, możesz zaznaczyć pole Podaj `kod transferu później`{.action}. Zalecamy jednak, abyś przed kolejnymi krokami upewnił się, że jesteś w stanie ten kod uzyskać. Pamiętaj, że transfer nie rozpocznie się, dopóki nie zostanie podany prawidłowy kod.

Możesz również zakończyć zamówienie [hostingiem www](https://www.ovhcloud.com/pl/web-hosting/){.external} i innymi rozwiązaniami OVHcloud. Może to być interesujące, jeśli chcesz przenieść Twoje usługi do OVHcloud. Przewodnik "[Przeniesienie strony WWW do OVHcloud](../../hosting/przeniesienie-strony-www-do-ovh/){.external}" zawiera instrukcje, jak to zrobić.

> [!warning]
>
> Podczas składania zamówienia radzimy uwzględnić następujące kwestie:
>
> - **dane dotyczące właściciela domeny.** Szczególnie od czasu wejścia w życie rozporządzenia RODO należy upewnić się, czy dane właściciela domeny odpowiadają informacjom przechowywanym przez aktualnego operatora. Pozwoli to uniknąć podejrzenia kradzieży domeny;
>
> - **wprowadzenie serwerów DNS dla Twojej domeny** Jeśli używasz aktualnie Twojej domeny do utrzymania strony WWW lub usługi poczty elektronicznej, określ Twoje serwery DNS, aby uniknąć przerw w dostępie do usługi.
>

#### Zarządzanie właścicielem i szczegóły dotyczące serwerów DNS

- Po kliknięciu `Zmień konfigurację`{.action} w tym etapie możesz wprowadzić nazwy serwerów DNS, których nazwa domeny używa obecnie. W ten sposób domena będzie już powiązana z tymi serwerami DNS w konfiguracji OVHcloud.

- Jeśli nie przeprowadzasz tej operacji, domena zostanie dostarczona wraz z nową strefą DNS na serwerach DNS OVHcloud. Może zaistnieć konieczność ręcznej [modyfikacji strefy DNS](../hosting_www_jak_edytowac_strefe_dns/).

- W niektórych przypadkach proces transferu może wymagać dodatkowych informacji o właścicielu domeny. Aby dodać te informacje, kliknij opcję `Zarządzanie kontaktami/właściciela`{.action}.

![domena](images/Order_summary.png){.thumbnail}

#### Informacje o transferze po zamówieniu

Po zatwierdzeniu zamówienia otrzymasz zamówienie. Transfer rozpocznie się po otrzymaniu płatności. Po przeprowadzeniu tej operacji możesz śledzić postęp transferu w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Aby śledzić postęp procesu, kliknij `Domeny`{.action}, a następnie `Operacje w toku`{.action}.

> [!primary]
>
> Jeśli kod transferu nie został wpisany podczas składania zamówienia, możesz go wpisać w oknie `Operacje w toku`{.action}, aby potwierdzić operację.

### Etap 4: potwierdzenie transferu przez aktualnego operatora

Po zatwierdzeniu zamówienia i kodu transferu aktualny operator (którym nie jest jeszcze OVHcloud) otrzyma prośbę o zatwierdzenie. Możliwych jest kilka scenariuszy w zależności od podjętych działań.

|Działanie|Rezultat|
|---|---|
|Zatwierdzenie obecnego operatora domeny|Transfer zostaje zrealizowany w ciągu **24 godzin**.|
|Brak odpowiedzi od aktualnego operatora|Transfer zostaje zakończony po upływie **5 dni**.|
|Odmowa ze strony aktualnego operatora.|Transfer zostaje **anulowany** po wydaniu odmowy.|

Jeśli odmowa została wydana przez aktualny operator rejestracji, skontaktuj się z nim, aby dowiedzieć się, dlaczego odmówił rejestracji.

Proces transferu może zostać ponownie uruchomiony w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz `Web Cloud`{.action} i przejdź do sekcji `Domeny`{.action}, następnie kliknij `Operacje w toku`{.action}.

> [!primary]
>
> Transfer domeny z rozszerzeniem ".fr" różni się nieznacznie od opisanego powyżej procesu. Odblokuj domenę i pobierz jej kod transferu od aktualnego operatora.
> Złóż zamówienie na transfer i wprowadź kod transferu, jak opisano powyżej.
>
> Po uruchomieniu transferu, całkowity czas **transferu domeny ".fr" wynosi co najmniej 8 dni.**
>
> W przypadku **sprzeciwu wobec transferu ze strony aktualnego rejestratora**, przeniesienie **nastąpi mimo wszystko**, ale do sfinalizowania operacja ta zajmie **minimum 22 dni**.
>

### Etap 5: zarządzaj domeną za pomocą OVHcloud

Po zakończeniu operacji transferu możesz zarządzać domeną w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. W tym celu wybierz `Web Cloud`{.action}, kliknij `Domeny`{.action}, po czym kliknij wybraną nazwę domeny.

## Sprawdź również

[Migracja strony WWW i kont e-mail do OVHcloud](../../hosting/przeniesienie-strony-www-do-ovh/){.external}

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
