---
title: 'Lista odbiorców wiadomości SMS'
slug: lista-odbiorcow-sms
excerpt: 'Dowiedz się, jak utworzyć listę odbiorców wiadomości SMS i importować ją do Panelu klienta OVHcloud'
section: 'Zarządzanie ofertą'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 05-08-2022**

## Wprowadzenie

Wszystkie konta SMS OVHcloud mogą używać jednej lub kilku list odbiorców. Z tego przewodnika dowiesz się, jak utworzyć listę odbiorców.

## Wymagania początkowe

- Posiadanie aktywnego konta SMS OVHcloud
- Posiadanie narzędzia typu arkusz kalkulacyjny lub edytor tekstu
- Zalogowanie do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, część `Telefonia`{.action}, następnie `SMS`{.action}.

![Panel klienta Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## W praktyce

### Etap 1: utworzenie listy odbiorców

#### Stwórz listę w arkuszu kalkulacyjnym

Listę odbiorców możesz utworzyć przy użyciu arkusza kalkulacyjnego lub możesz wykorzystać już istniejącą listę. Musi być ona w formacie .csv i w arkuszu kalkulacyjnym musi mieć formę jak na poniższym przykładzie:

![recipients](images/img_4831.jpg){.thumbnail}

> [!warning]
> Aby arkusz kalkulacyjny nie wykonywał żadnych automatycznych obliczeń Twoich numerów, zmień format kolumny `number`.
>
> W programie Microsoft Excel wybierz kolumnę `number`, kliknij prawym przyciskiem myszy i kliknij `Format komórki`{.action}. Kliknij `Personalizowany`{.action} i wprowadź następującą wartość w polu `Typ`: ```[>0]+0;Standard```.
>
> ![recipients](images/sms-recipientlist-2.png){.thumbnail}
>
> W LibreOffice wybierz kolumnę `number`, kliknij prawym przyciskiem myszy i kliknij `Formater komórki`{.action}. Wpisz następującą wartość w polu `Opis formatu`: ```[>0]+0;Standard```
>
> ![recipients](images/sms-recipientlist-2b.png){.thumbnail}
>

Jeśli otworzysz plik .csv przy użyciu Notatnika, powinien wyglądać jak poniżej:

![recipients](images/sms-recipientlist-1.png){.thumbnail}

Aby lista odbiorców została uwzględniona w Panelu klienta OVHcloud, należy wykonać następujące czynności:

- Wszystkie kontakty umieść w jednym arkuszu skoroszytu i w jednej kolumnie zatytułowanej „number”.
- Usuń znaki specjalne, takie jak akcenty, ponieważ nie zostaną one zaakceptowane podczas importu pliku .csv do Panelu klienta.
- Numery zapisz w formacie międzynarodowym (np. w przypadku numeru francuskiego: +33612345678).
- Zapisz plik w formacie .csv (separator: średnik).

#### Utwórz listę za pomocą edytora tekstu

Alternatywna metoda polega na utworzeniu zwykłego pliku .txt w edytorze tekstu lub Notatniku.

- W pierwszym wierszu wpisz „number”.
- Wpisz numery w formacie międzynarodowym (+33612345678), po jednym numerze w wierszu.

Otrzymany rezultat powinien wyglądać następująco:

![recipients](images/sms-recipientlist-1.png){.thumbnail}

### Etap 2: zaimportować listę do Panelu klienta OVHcloud

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz opcję `Telecom`{.action}. Następnie z menu po lewej stronie wybierz `SMS`{.action}.

Wybierz konto SMS, następnie kliknij zakładkę `Kontakty`{.action} i `Utwórz listę kontaktów`{.action}.

![recipients](images/sms-recipientlist-3b.png){.thumbnail}

Możesz utworzyć do 9 list kontaktów.

W tym celu kliknij pozycję `Działania`{.action}, a następnie wybierz polecenie `Dodaj`{.action}.

![recipients](images/sms-recipientlist-5b.png){.thumbnail}

Nazwij plik z listą odbiorców i zaimportuj plik lokalny do Panelu klienta.

![recipients](images/sms-recipientlist-6b.png){.thumbnail}

### Etap 3: wysyłka wiadomości SMS do listy odbiorców

Po zaimportowaniu Twojej listy możesz postępować zgodnie z instrukcjami zawartymi w przewodniku [Wysyłanie wiadomości SMS z Panelu klienta](https://docs.ovh.com/pl/sms/wysylanie-wiadomosci-sms-z-panelu-klienta/), aby wysłać wiadomość SMS do odbiorców tej listy.

## Sprawdź również

[Wysyłanie wiadomości SMS z Panelu klienta](https://docs.ovh.com/pl/sms/wysylanie-wiadomosci-sms-z-panelu-klienta/)

[Zarządzanie książkami adresowymi SMS](https://docs.ovh.com/pl/sms/zarzadzanie-ksiazkami-adresowymi-sms/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
