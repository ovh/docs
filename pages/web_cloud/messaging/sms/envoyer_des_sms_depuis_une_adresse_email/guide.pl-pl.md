---
title: 'Wysyłanie wiadomości SMS z adresu e-mail'
excerpt: 'Dowiedz się, jak wysyłać wiadomości SMS z adresu e-mail'
updated: 2020-06-04
---


## Wprowadzenie

Dzięki kontu SMS OVHcloud możesz wysyłać wiadomości SMS z Twojego adresu e-mail do dowolnego adresata.

## Wymagania początkowe

- Posiadanie konta SMS OVHcloud z zasileniami SMS
- Posiadanie adresu e-mail od dowolnego dostawcy


## W praktyce

Do tej metody można wykorzystać dowolną usługę poczty w przeglądarce lub program pocztowy.

Adresem odbiorcy wiadomości e-mail będzie: email2sms@ovh.net.

Temat zawiera identyfikator Twojego konta SMS oraz parametry wiadomości SMS, takie jak nadawca i numery telefonu odbiorców.

Treść wiadomości e-mail będzie wiadomością SMS przeznaczoną do wysłania. Nie ma limitu liczby znaków. Jednak w kodowaniu 7-bitowym jedna wiadomość SMS jest ograniczona do 160 znaków.

Jeśli Twoja wiadomość przekracza ten limit, zostanie ona podzielona na kilka wiadomości SMS:

- 1 SMS -> w sumie 160 znaków (160 / SMS)
- 2 SMS -> w sumie 306 znaków (153 / SMS)
- 3 SMS -> w sumie 459 znaków (153 / SMS)

Przed wysyłką upewnij się, że masz do dyspozycji wystarczającą ilość zasileń SMS.

> [!primary]
>
Jeśli tekst zawiera 2 przejścia do nowego wiersza (podwójne /n) lub jeśli wpisujesz parametr „--end”, wszystko, co znajduje się dalej, nie zostanie uwzględnione przy wysyłce.
Aby wysłać wiadomość SMS zawierającą te elementy, musisz to zrobić w Panelu klienta lub przez interfejs API.
>

Dalsze informacje na temat dozwolonych znaków w kodowaniu 7-bitowym zawiera [załącznik](./#zalacznik) na dole tego przewodnika.

> [!warning]
>
> Aby zoptymalizować wyświetlanie niektórych znaków specjalnych, aktywuj „tryb zwykłego tekstu” w Twoim programie pocztowym, tak jak tutaj w programie Microsoft Outlook:
> 
>  ![email2sms](images/plaintext01.png){.thumbnail}
>


### Etap 1: uzupełnianie obowiązkowych pól w wiadomości e-mail

Otwórz pocztę w przeglądarce lub program pocztowy i utwórz wiadomość e-mail. 

Jako odbiorcę podaj następujący adres: email2sms@ovh.net.

Tytuł musi mieć następującą formę: 


```
KontoSMS:Użytkownik:Hasło:Nadawca:Odbiorca
```



- KontoSMS = konto SMS, które ma zostać użyte (np.: sms-xx11111-1).

- UżytkownikSMS = użytkownik SMS, który ma zostać użyty w przypisanym koncie.

- Hasło = hasło użytkownika.

- Nadawca = jeden z nadawców zadeklarowanych na Twoim koncie SMS.

- Odbiorca = numer telefonu odbiorcy wiadomości.

Otrzymany rezultat powinien wyglądać jak poniżej. Domyślnie wiadomość SMS zostaje wysłana natychmiast po wysłaniu wiadomości e-mail.


![email2sms](images/send-sms-through-email1.png){.thumbnail}

> [!primary]
>**Dotyczy tylko kont OVHcloud we Francji:**
>
Jeśli chcesz użyć numeru skróconego umożliwiającego otrzymanie odpowiedzi, jako nadawcę wprowadź senderForResponse=1.
>

Aby uzyskać szczegółowe informacje na temat użytkowników SMS, zapoznaj się z następującym przewodnikiem: [Informacje o użytkownikach wiadomości SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)


### Etap 2: dodawanie pól opcjonalnych

W temacie możesz dodać pola opcjonalne, takie jak:


```
KontoSMS:UżytkownikSMS:Hasło:Nadawca:Odbiorca1,Odbiorca2:DataWysyłki:KlasaSMS:smsCoding:NoStop
```



- Odbiorca1 = numer telefonu odbiorcy wiadomości; można dodawać kolejnych odbiorców, rozdzielając ich przecinkiem (,).

- DataWysyłki = określenie przesuniętej daty wysyłki, w formacie ggmmddMMRRRR (np.: 183019112019, aby wysłać wiadomość 19.11.2019 o 18:30). 

- KlasaSMS = rodzaj klasy wiadomości SMS, w formacie N = 1 cyfra (patrz pierwsza nota informacyjna poniżej).

- smsCoding = kodowanie wiadomości SMS, w formacie N = 1 cyfra (patrz druga nota informacyjna poniżej).

- NoStop = aby nie wyświetlać informacji „STOP XXXXX” na końcu wiadomości SMS o charakterze innym niż reklamowy, w formacie N = 1 cyfra (np.: NoStop=1, aby nie wyświetlać informacji).

Oto przykład wiadomości e-mail zawierającej pola opcjonalne:

![email2sms](images/send-sms-through-email3.png){.thumbnail}

Poszczególne elementy składowe tytułu można określać na dwa sposoby:

- w kolejności ustalonej powyżej, oddzielając parametry znakiem „:” lub „;” między kolejnymi elementami; lub
- w dowolnej kolejności, ale określając każdy element i oddzielając kolejne elementy znakiem „:” lub „;”: Account=; Login=; Password=; From=; To=; Deferred=; Class=.

> [!primary]
>
> **Szczegóły dotyczące możliwych *klas***
> 
> *klasa 0:* Wiadomość jest wyświetlana bezpośrednio przy odbiorze na ekranie telefonu użytkownika. Wiadomość nie jest zapisywana w pamięci telefonu ani na karcie SIM. Zostaje usunięta, gdy użytkownik potwierdzi jej wyświetlenie.
> 
> *klasa 1:* Wiadomość zostaje zapisana w pamięci telefonu, a jeśli pamięć jest pełna, domyślnie na karcie SIM.
> 
> *klasa 2:* Wiadomość zostaje zapisana na karcie SIM.
> 
> *klasa 3:* Wiadomość zostaje przeniesiona na sprzęt zewnętrzny połączony z telefonem komórkowym (PDA, komputer przenośny itp.).
>

> [!primary]
>
> **Szczegóły możliwego kodowania *smsCoding***
> 
> *1* w przypadku kodowania 7-bitowego
> 
> *2* w przypadku kodowania Unicode
> 
>Jeśli zmienisz kodowanie na Unicode, Twoja wiadomość SMS będzie mogła zawierać maksymalnie 70 znaków (160 w przypadku kodowania 7-bitowego).
>

### Etap 3: zarządzanie odbiorcami wiadomości SMS

Odbiorcami wiadomości można zarządzać na kilka sposobów:


- jak przedstawiono powyżej, zapisując ich w formacie międzynarodowym w temacie wysyłanej wiadomości e-mail; lub

- dodając do wiadomości (jako załącznik) plik tekstowy w formacie .txt o nazwie „contact”, który będzie zawierał numery telefonów odbiorców w formacie międzynarodowym (np. we Francji: +33xxxxxxxxx), zapisane w pliku po jednym numerze na wiersz.



### Etap 4: analiza raportu z wysyłki

Po wysłaniu wiadomości otrzymasz na e-mail raport z wysyłki. Poniższy raport informuje, że wysyłka przebiegła pomyślnie:

![email2sms](images/send-sms-through-email4.png){.thumbnail}

Jeśli podczas wysyłki wystąpi błąd, zostanie on odnotowany w raporcie, jak w poniższym przykładzie:

![email2sms](images/send-sms-through-email5.png){.thumbnail}

## Załącznik

W poniższych dwóch tabelach wymienione są znaki dozwolone w kodowaniu 7-bitowym. Znaki z tabeli „Extensions” liczą się podwójnie. 

Maksymalny rozmiar wiadomości SMS wynosi 160 znaków w kodowaniu 7-bitowym (norma GSM 03.38).

Użycie znaków niewymienionych w tych tabelach spowoduje przejście na kodowanie Unicode i ograniczenie rozmiaru wiadomości SMS do maksymalnie 70 znaków.

![Lista znaków SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
