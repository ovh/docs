---
title: 'Lista odbiorców wiadomości SMS'
slug: lista-odbiorcow-sms
excerpt: 'Tworzenie listy odbiorców wiadomości SMS'
section: 'Zarządzanie ofertą'
---

**Ostatnia aktualizacja z dnia 19-05-2020**

## Wprowadzenie

Wszystkie konta SMS OVHcloud mogą używać jednej lub kilku list odbiorców. Z tego przewodnika dowiesz się, jak utworzyć listę odbiorców.

## Wymagania początkowe
- Posiadanie aktywnego konta SMS OVHcloud
- Posiadanie narzędzia typu arkusz kalkulacyjny lub edytor tekstu

## W praktyce

### Etap 1: utworzenie listy odbiorców

#### Metoda wykorzystująca arkusz kalkulacyjny

Listę odbiorców możesz utworzyć przy użyciu arkusza kalkulacyjnego lub możesz wykorzystać już istniejącą listę. Musi być ona w formacie .csv i w arkuszu kalkulacyjnym musi mieć formę jak na poniższym przykładzie:

![recipients](images/img_4831.jpg){.thumbnail}

Jeśli otworzysz plik .csv przy użyciu Notatnika, powinien wyglądać jak poniżej:

![recipients](images/sms-recipientlist-1.png){.thumbnail}

Aby lista odbiorców została uwzględniona w Panelu klienta OVHcloud, należy wykonać następujące czynności:

- Wszystkie kontakty umieść w jednym arkuszu skoroszytu i w jednej kolumnie zatytułowanej „number”.
- Usuń znaki specjalne, takie jak akcenty, ponieważ nie zostaną one zaakceptowane podczas importu pliku .csv do Panelu klienta.
- Numery zapisz w formacie międzynarodowym (np. w przypadku numeru francuskiego: +33612345678).
- Zapisz plik w formacie .csv (separator: średnik).

Aby arkusz kalkulacyjny nie wykonywał żadnych automatycznych obliczeń Twoich numerów, skonfiguruj format komórki „number”, w polu Niestandardowe, ręcznie wpisując: >0]+0;Standard.

![recipients](images/sms-recipientlist-2.png){.thumbnail}


#### Metoda wykorzystująca edytor tekstu

Alternatywna metoda polega na utworzeniu zwykłego pliku .txt w edytorze tekstu lub Notatniku.

- W pierwszym wierszu wpisz „number”.
- Wpisz numery w formacie międzynarodowym (+33612345678), po jednym numerze w wierszu.

Otrzymany rezultat powinien wyglądać następująco:

![recipients](images/sms-recipientlist-1.png){.thumbnail}


### Etap 2: logowanie do interfejsu

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz opcję `Telecom`{.action}. Następnie z menu po lewej stronie wybierz `SMS`{.action}.

Kliknij żądane konto SMS.

![recipients](images/sms-recipientlist-3.png){.thumbnail}


### Etap 3: import listy odbiorców

Wybierz kartę `Kontakty`{.action}.

![recipients](images/sms-recipientlist-4.png){.thumbnail}

Możesz utworzyć do 9 list kontaktów.

W tym celu kliknij pozycję `Działania`{.action}, a następnie wybierz polecenie `Dodaj`{.action}.

![recipients](images/sms-recipientlist-5.png){.thumbnail}

Nazwij plik z listą odbiorców i zaimportuj plik lokalny do Panelu klienta.

![recipients](images/sms-recipientlist-6.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
