---
title: 'Wysyłanie wiadomości SMS z adresu URL — http2sms'
slug: wysylanie-wiadomosci-sms-z-adresu-url-http2sms
excerpt: 'Dowiedz się, jak wysyłać wiadomości SMS z adresu http'
section: 'Wysyłanie wiadomości SMS'
---

**Ostatnia aktualizacja z dnia 19-05-2020** 

## Wprowadzenie

Istnieją różne metody wysyłania wiadomości SMS. Jedna z nich polega na wykorzystaniu narzędzia Wget, na przykład bezpośrednio z paska adresu przeglądarki internetowej.

**Dowiedz się, jak wysyłać wiadomości SMS przy użyciu narzędzia Wget.**

## Wymagania początkowe

- Utworzenie użytkownika SMS w Panelu klienta OVHcloud lub bezpośrednio przez interfejs API. W tym celu zapoznaj się z następującym przewodnikiem: [Informacje o użytkownikach wiadomości SMS](../informacje-o-uzytkownikach-sms/)
- Posiadanie konta SMS OVHcloud z zasileniami SMS


## W praktyce

Wysyłanie wiadomości SMS odbywa się przez zapytanie HTTPS oraz uzupełnienie obowiązkowych pól (a w stosownych przypadkach także opcjonalnych) pod następującym adresem: <https://www.ovh.com/cgi-bin/sms/http2sms.cgi?>.

![http2sms](images/img_4011.jpg){.thumbnail}

### Etap 1: uzupełnienie pól obowiązkowych

Adres URL musi mieć następującą formę: 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```


Poniższe parametry muszą być rozdzielone znakami &. Wszystkie symbole X zastąp następującymi informacjami:

|Parametry|Czym należy zastąpić|
|---|---|
|account|Konto SMS, które ma zostać użyte (np.: sms-xx11111-1)|
|login|Użytkownik SMS, który ma zostać użyty w przypisanym koncie|
|password|Hasło użytkownika|
|from|Jeden z nadawców zadeklarowanych na Twoim koncie SMS|
|to|Numer telefonu odbiorcy wiadomości w **formacie międzynarodowym** (00336xxxx w przypadku numeru francuskiego). Można dodać kolejnych odbiorców, oddzielając ich przecinkiem (,).|
|message|Twoja wiadomość. Aby przejść do kolejnego wiersza w wysyłanej wiadomości SMS, dodaj ciąg %0d.|

Domyślnie wiadomość jest wysyłana natychmiast.

### Etap 2: dodawanie pól opcjonalnych


W temacie możesz dodać pola opcjonalne, jak w poniższym przykładzie:

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&smsCoding=X
```

Wszystkie symbole X zastąp następującymi informacjami:

|Parametry|Czym należy zastąpić|
|---|---|
|deferred|Określenie odroczonej daty wysyłki w formacie ggmmddMMRRRR (np.: 125025112019, aby wysłać wiadomość 25.11.2019 o 12:50)|
|class|Rodzaj klasy wiadomości SMS, w formacie N = 1 cyfra (patrz pierwsza nota informacyjna poniżej)|
|tag|Ciąg maksymalnie 20 znaków, umożliwiający oznaczenie wysłanych wiadomości|
|contentType|Możesz wybrać rodzaj odpowiedzi. Może być typu: text/xml, application/xml, text/json, application/json, text/plain, text/html (domyślnie jest to text/plain)|
|smsCoding|Kodowanie wiadomości SMS, w formacie N = 1 cyfra (patrz druga nota informacyjna poniżej).|

> [!primary]
>
> **Szczegóły dotyczące możliwych *klas***
> 
> *klasa 0:* Wiadomość jest wyświetlana bezpośrednio przy odbiorze na ekranie telefonu użytkownika. Wiadomość nie jest zapisywana w pamięci telefonu ani na karcie SIM. Zostaje usunięta, gdy użytkownik potwierdzi jej wyświetlenie.
> 
> *klasa 1:* Wiadomość zostaje zapisana w pamięci telefonu, a jeśli ta jest pełna, domyślnie na karcie SIM.
> 
> *klasa 2:* Wiadomość zostaje zapisana na karcie SIM.
> 
> *klasa 3:* Wiadomość zostaje przeniesiona na sprzęt zewnętrzny połączony z telefonem komórkowym (PDA, komputer przenośny itp.).
>

> [!primary]
>
> **Szczegóły możliwego kodowania *smsCoding**
> 
> *1* w przypadku kodowania 7-bitowego
> 
> *2* w przypadku kodowania Unicode
> 
>Jeśli zmienisz kodowanie na Unicode, Twoja wiadomość SMS będzie mogła zawierać maksymalnie 70 znaków (160 w przypadku kodowania 7-bitowego).
>
>Aby uzyskać więcej informacji na temat dozwolonych znaków z kodowaniu 7-bitowym, zapoznaj się z [załącznikiem](./#zalacznik_2) na dole tego przewodnika.
>

### Etap 3: analiza wysyłki

Po wysłaniu wiadomości kod zwrotny API poinformuje Cię, czy Twoja wiadomość została wysłana pomyślnie lub czy wysyłka zakończyła się niepowodzeniem.
Kod powyżej 100 i poniżej 200 wskazuje, że wiadomość została wysłana pomyślnie.

Oto lista kodów zwrotnych API:

- *100 lub 101:* zapytanie przetworzone.
- *201:* brakuje parametru (np. Missing login, Missing password).
- *202:* parametr jest nieprawidłowy (np. Invalid tag: is too long, Invalid deferred time).
- *401:* Brak autoryzowanego adresu IP. Aby zarządzać dozwolonymi adresami IP, z poziomu Panelu klienta możesz zastosować ograniczenia.


W razie niepowodzenia przyczyna jest zapisywana:

- w polu wiadomości w przypadku json lub xml;
- w drugim wierszu w przypadku html i text/plain.

#### XML

- W przypadku powodzenia:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1987</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

- W przypadku niepowodzenia:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. For more informations : http://guides.ovh.com/httpToSms</message></response>
```


#### json

- W przypadku powodzenia:

```json
{"status":100,"creditLeft":"1987","SmsIds":["10867690"]}
```

- W przypadku niepowodzenia:

```json
{"status":201,"message":"Missing message. For more informations : http//:guides.ovh.com/httpToSms"}
```


#### HTML

- W przypadku powodzenia:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
OK<br>
1987<br>
10867690<br>
</BODY>
</HTML>
```

- W przypadku niepowodzenia:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
KO<br>Missing message. For more informations : http://guides.ovh.com/httpToSms<br>
</BODY>
</HTML>
```

#### Text/plain

- W przypadku powodzenia:

```
OK
1987
10867690
```

- W przypadku niepowodzenia:

```
KO
Missing message. For more informations : http://guides.ovh.com/httpToSms
```

## Załącznik

W poniższych dwóch tabelach wymienione są znaki dozwolone w kodowaniu 7-bitowym. Znaki z tabeli „Extensions” liczą się podwójnie. 

Maksymalny rozmiar wiadomości SMS wynosi 160 znaków w kodowaniu 7-bitowym (norma GSM 03.38).

Użycie znaków niewymienionych w tych tabelach spowoduje przejście na kodowanie Unicode i ograniczenie rozmiaru wiadomości SMS do maksymalnie 70 znaków.

![Lista znaków SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
