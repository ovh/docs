---
title: 'Korzystanie z list mailingowych i zarządzanie nimi'
excerpt: 'Z tego przewodnika dowiesz się, jak korzystać z list mailingowych'
slug: hosting_www_listy_mailingowe
legacy_guide_number: g1596
section: 'Funkcjonalności kont e-mail'
---

**Ostatnia aktualizacja z dnia 13-02-2020**

## Wprowadzenie

Lista mailingowa pozwala na masowe kontaktowanie się z abonentami, tzn. na przesyłanie wiadomości lub informacji do wielu odbiorców jednocześnie. Rozwiązanie to może być przydatne w ramach korespondencji informacyjnej, np. dotyczącej wydania nowego produktu (w przypadku witryny e-commerce) lub w celu poinformowania o nadchodzącym spotkaniu (w przypadku witryny społecznościowej). 

**Dowiedz się, jak zarządzać listami mailingowymi**

### Zasada działania moderacji

Listę mailingową można moderować, aby uniemożliwić niepowołanym osobom wysyłanie wiadomości do Twojej listy abonentów. Moderowana lista mailingowa może służyć do wysyłania newsletterów, natomiast niemoderowana lista mailingowa pozwala na łatwą komunikację za pośrednictwem poczty e-mail między grupą abonentów.

**Niemoderowana lista mailingowa**

![emails](images/manage_mailing-lists_no-modarate.png){.thumbnail}

Nadawca (sender) przesyła e-mail do odbiorców z listy mailingowej, a abonenci (subscribers) bezpośrednio otrzymują tę wiadomość.

**Moderowana lista mailingowa**

![emails](images/manage_mailing-lists_modarate.png){.thumbnail}

Nadawca (sender) przesyła wiadomość e-mail do odbiorców z listy mailingowej. Moderator (moderator) otrzymuje wiadomość e-mail z prośbą o zatwierdzenie lub odrzucenie. Jeśli moderator zatwierdzi wiadomość, abonenci (subscribers) otrzymają e-mail przeznaczony dla odbiorców z listy mailingowej. Jeśli moderator odrzuci wiadomość nadawcy, zostanie ona usunięta, a abonenci nie otrzymają e-maila.

> [!warning]
>
> - Lista mailingowa nie służy do masowego rozsyłania spamu (wiadomości reklamowych). Takie wykorzystanie listy mailingowej jest tolerowane do pewnego stopnia, o ile nie jest nadużywane.
> - Abonent może w każdej chwili podjąć decyzję o wypisaniu się z listy mailingowej. Może on również zgłosić wszelkie nadużycia, jeśli uzna, że do nich doszło.
>

## Wymagania początkowe

- Posiadanie usługi kont e-mail w postaci co najmniej pakietu MX Plan 100 lub [hostingu WWW](https://www.ovh.pl/hosting/){.external} obsługującego listy mailingowe.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/manager/web/login/){.external}

## W praktyce

### Tworzenie listy mailingowej

Aby utworzyć listę mailingową, przejdź do [Panelu klienta OVHcloud](http://www.ovh.com/manager/web){.external} i wybierz kartę `Web`{.action} znajdującą się u góry.

Po zalogowaniu kliknij w lewej kolumnie w sekcję `E-maile`{.action}, a następnie nazwę danej domeny. Przejdź do karty `Listy mailingowe`{.action} w Twojej usłudze e-mail.

![emails](images/manage_mailing-lists_01.png){.thumbnail}

Jeśli masz już utworzone listy mailingowe, pojawią się one w tabeli podsumowującej. W poniższym przykładzie jest już utworzona lista mailingowa.

Aby utworzyć nową listę mailingową, kliknij polecenie `Dodaj listę mailingową`{.action}.

![emails](images/manage_mailing-lists_02.png){.thumbnail}

Uzupełnij formularz zgodnie z informacjami zawartymi w poniższej tabeli:

| Informacja                      	| Opis                                                                                                            	|
|----------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| Nazwa                              	| Nazwa listy mailingowej.                                                                                          	|
| Właściciel                     	| Podaj adres e-mail właściciela listy mailingowej (będzie on również moderatorem).                              	|
| Odpowiedź do                        	| Określ odbiorcę (lub odbiorców) odpowiedzi abonenta na mailing.                                        	|
| Język                           	| Wybierz język automatycznych informacji pojawiających się podczas zapisywania się do listy mailingowej lub wypisywania się z niej.				|
| Moderuj wszystkie wiadomości         | Właściciel lub moderator musi zatwierdzić wiadomość e-mail wysyłaną do odbiorców z listy mailingowej.                                     	|
| Tylko abonenci mogą wysyłać wiadomości 	| Wysyłanie wiadomości e-mail do odbiorców z listy mailingowej jest możliwe tylko dla jej abonentów.              								|
| Każdy może przesłać wiadomość (bez moderowania) | Wiadomości e-mail do odbiorców z listy mailingowej są wysyłane bezpośrednio do abonentów bez zatwierdzenia.             		|
| Moderowanie abonentów         	| Właściciel lub moderator musi zatwierdzić zapisanie się abonenta do listy mailingowej.                                    	|


![emails](images/manage_mailing-lists_03.png){.thumbnail}


> [!primary]
>
> Maksymalna liczba abonentów listy mailingowej:
>
> - 5000, jeśli wiadomości są moderowane
> - 250, jeśli wiadomości nie są moderowane
>


### Zarządzanie opcjami listy mailingowej

Aby zmodyfikować opcje listy mailingowej, kliknij przycisk `...`{.action} po prawej stronie listy. Teraz można zaktualizować opcje, usunąć listę mailingową lub udostępnić listę jej abonentów przez e-mail. 

![emails](images/manage_mailing-lists_04.png){.thumbnail}


### Zarządzanie abonentami

Aby zarządzać abonentami listy mailingowej, kliknij sylwetkę w kolumnie „Abonenci”.

![emails](images/manage_mailing-lists_05.png){.thumbnail}

Pojawi się następujące okno:

![emails](images/manage_mailing-lists_06.png){.thumbnail}

#### Dodawanie/usuwanie abonentów

|Dodawanie abonentów|Usuwanie abonentów|
|---|---|
|Kliknij polecenie `Dodaj abonenta`{.action} po prawej stronie.|Kliknij polecenie `Usuń za pomocą pliku`{.action} po prawej stronie.|
|![emails](images/manage_mailing-lists_07.png){.thumbnail}|![emails](images/manage_mailing-lists_07b.png){.thumbnail}|

Istnieją dwie metody dodawania/usuwania abonentów:

- ręczne wprowadzenie adresów po kliknięciu polecenia `Dodaj adres e-mail`{.action}.
- zaimportowanie pliku tekstowego zawierającego jeden adres e-mail na wiersz, klikając ikonę pobierania znajdującą się powyżej pola wprowadzania danych.

#### Eksport listy abonentów do pliku CSV

Kliknij polecenie `Eksport abonentów do pliku CSV`{.action}, aby wyprodukować plik CSV zawierający listę wszystkich abonentów. Ta opcja nie jest dostępna w naszym przypadku, ponieważ nie dodano żadnego abonenta.
 
### Zarządzanie moderatorami

Aby zarządzać moderatorami listy mailingowej, kliknij sylwetkę w kolumnie „Moderatorzy”.

![emails](images/manage_mailing-lists_08.png){.thumbnail}

Pojawi się następujące okno:

![emails](images/manage_mailing-lists_09.png){.thumbnail}

#### Dodawanie/usuwanie moderatorów

|Dodawanie moderatorów|Usuwanie moderatorów|
|---|---|
|Kliknij polecenie `Dodaj moderatora`{.action} po prawej stronie.|Kliknij polecenie `Usuń za pomocą pliku`{.action} po prawej stronie.|
|![emails](images/manage_mailing-lists_10.png){.thumbnail}|![emails](images/manage_mailing-lists_10b.png){.thumbnail}|

Istnieją dwie metody dodawania/usuwania moderatorów:

- ręczne wprowadzenie adresów po kliknięciu polecenia `Dodaj adres e-mail`{.action}.
- zaimportowanie pliku tekstowego zawierającego jeden adres e-mail na wiersz, klikając ikonę pobierania znajdującą się powyżej pola wprowadzania danych.

> [!primary]
> \- Jeśli do jednej listy mailingowej wyznaczonych jest kilku moderatorów, wystarczy, że jeden z nich zatwierdzi wysłanie wiadomości do abonentów.
> \- Jeśli moderator wysyła wiadomość e-mail do odbiorców z listy mailingowej, tylko on otrzymuje e-mail dotyczący moderacji.
> 

W zależności od liczby abonentów do dodania, operacja może zająć trochę czasu.


### Zapisywanie się do listy mailingowej

Jeśli ktoś chce się zapisać do Twojej listy mailingowej, wystarczy, że wyśle wiadomość e-mail na adres:


```bash
nazwa_twojej_LM-subscribe@twojadomena.com
```


### Wypisywanie się z listy mailingowej

Jeśli ktoś chce się wypisać z Twojej listy mailingowej, wystarczy, że wyśle wiadomość e-mail na adres:


```bash
nazwa_twojej_LM-unsubscribe@twojadomena.com
```


### Automatyczne usuwanie błędnych adresów

System listy mailingowej nie usuwa abonenta z listy po pierwszej wiadomości zwrotnej informującej o błędzie (wiadomość niedostarczona, nieistniejący adres itp.). Czeka około 12 dni od pierwszego nieudanego wysłania, a następnie wysyła abonentowi wiadomość ostrzegawczą.

Wiadomość ostrzegawcza zawiera odniesienia do pominiętych wiadomości. Jeśli wysłanie wiadomości ostrzegawczej również się nie powiedzie, nasz system listy mailingowej czeka kolejne 12 dni, a następnie wysyła wiadomość testową. Jeśli wysłanie wiadomości testowej również się nie powiedzie, abonent zostaje usunięty z listy abonentów.


### Częste błędy

#### Wysłanie e-maila bez podania tematu wiadomości

Wiadomość wysyłana do abonentów listy mailingowej musi zawierać temat. W przeciwnym razie automatycznie zostanie wyprodukowany błąd, a nadawca wiadomości otrzyma e-maila zwrotnego informującego o błędzie.

Nadawca wiadomości bez tematu otrzyma zatem e-mail zwrotny informujący o błędzie, podobny do widocznego poniżej:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```


#### Wysłanie wiadomości z adresem e-mail abonenta listy mailingowej w polu UDW

Aby wysłać wiadomość do abonentów listy mailingowej, ich adresy muszą być wpisane w polu „Do” lub „DW” (Do wiadomości).

Jeśli klient wpisze adres w polu UDW (Ukryte do wiadomości), zostanie zwrócony błąd.

Nadawca e-maila otrzyma wiadomość zwrotną informującą o błędzie:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```


### Zaawansowana personalizacja

Możesz spersonalizować większość tekstów listy mailingowej. Jako moderator musisz wysłać pustą wiadomość na adres nazwa_twojej_LM- [edit@twojadomena.com](mailto:edit@twojadomena.com){.external}.

- Przykład: Twoja lista mailingowa to [newsletter@testinterne.ovh](mailto:newsletter@testinterne.ovh){.external}. Z adresu e-mail moderatora należy wysłać wiadomość na adres [newsletter-edit@testinterne.ovh](mailto:newsletter-edit@testinterne.ovh){.external} .

Wówczas otrzymasz wiadomość z instrukcją wprowadzania modyfikacji.

Poniżej znajduje się lista plików zawierających teksty odpowiedzi i krótki opis wykorzystania ich treści. Aby edytować plik, wystarczy wysłać wiadomość na envoi-edit.plik, zastępując słowo „plik” nazwą pliku. Instrukcje edycji zostaną wysłane razem z plikiem tekstowym.


|Plik|Wykorzystanie|
|---|---|
|bottom|Stopka wszystkich odpowiedzi: informacje ogólne.|
|digest|Sekcja „administracyjna” newsletterów okresowych.|
|faq|Odpowiedzi na najczęstsze pytania na temat tej listy.|
|get_bad|W przypadku wiadomości nieobecnych w archiwach.|
|help|Ogólna pomoc (między „top” a „bottom”).|
|info|Informacje o liście. Pierwszy wiersz zawiera ich podsumowanie.|
|mod_help|Specjalna pomoc dla moderatorów.|
|mod_reject|Do nadawcy odrzuconych wysyłek.|
|mod_request|Do moderatorów z wysyłką.|
|mod_sub|Do abonenta po potwierdzeniu przez moderatora zapisania się na listę.|
|mod_sub_confirm|Do moderatorów w celu zatwierdzenia zapisania się na listę.|
|mod_timeout|Do nadawcy wiadomości nieważnej od długiego czasu.|
|mod_unsub_confirm|Do administratora w celu zażądania wypisania się z listy.|
|sub_bad|Do abonenta, jeśli potwierdzenie przebiegło negatywnie.|
|sub_confirm|Do abonenta w celu potwierdzenia jego zapytania.|
|sub_nop|Do abonenta po nowym zapisaniu się na listę.|
|sub_ok|Do abonenta po udanym zapisaniu się na listę.|
|top|Nagłówek każdej odpowiedzi.|
|trailer|Dodawany na końcu każdego wpisu na listę.|
|unsub_bad|Do abonenta, jeśli jego potwierdzenie wypisania się jest błędne,|
|unsub_confirm|Do abonenta w celu potwierdzenia wypisania się z listy.|
|unsub_nop|Do osoby niebędącej abonentem po żądaniu wypisania się z listy.|
|unsub_ok|Do byłego abonenta po udanym wypisaniu się z listy.|

> [!primary]
>
> Przykład: Jeśli chcesz zmodyfikować domyślą stopkę wiadomości wysyłanych do abonentów listy mailingowej, musisz wysłać wiadomość na adres „newsletter-edit.bottom@testinterne.ovh”. Otrzymasz wówczas nową wiadomość informującą, jak spersonalizować stopkę.
> 

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie https://community.ovh.com/en/