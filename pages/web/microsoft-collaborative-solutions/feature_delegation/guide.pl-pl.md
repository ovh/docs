---
title: 'Delegowanie uprawnień do konta e-mail'
slug: exchange_2013_przyznanie_uprawnien_full_access
excerpt: 'Dowiedz się, jak zezwolić innym osobom na zarządzanie skrzynką e-mail'
section: 'Funkcje kont Exchange'
order: 03
---

**Ostatnia aktualizacja z dnia 24/10/2020**

## Wprowadzenie

Usługi Exchange i Email Pro umożliwiają korzystanie z profesjonalnych kont e-mail, które ułatwiają pracę zespołową dzięki kilku funkcjonalnościom. Jedna z nich pozwala na delegowanie określonych praw (takich jak prawo do wysyłki lub dostępu) między różnymi kontami e-mail.


**Dowiedz się, jak przydzielać uprawnienia do konta e-mail.**

## Wymagania początkowe

- skonfigurowane rozwiązanie [OVHcloud Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/) lub [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/)
- Posiadanie co najmniej dwóch aktywnych kont e-mail skonfigurowanych na tej samej platformie e-mail OVHcloud
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Posiadanie danych dostępowych do konta e-mail, dla którego przydzielone zostaną nowe prawa

## W praktyce

Zanim rozpoczniesz operację, określ prawo lub prawa, które chcesz przydzielić. Pamiętaj, że kiedy nadajesz uprawnienia, przydzielasz jednemu lub kilku kontom e-mail dodatkowe prawa do wybranej skrzynki e-mail.

|Uprawnienia|Opis|
|---|---|
|Prawo do wysyłki poczty|Umożliwia wysyłkę poczty „jako” (Send as) W tym przypadku jako konto nadawcy nie wyświetli się konto, z którego faktycznie realizowana jest wysyłka, lecz konto, do którego zostały przydzielone uprawnienia do wysyłki. Nie pojawi się żadna wzmianka o tym, że wiadomość została wysłana przez innego nadawcę.|
|Uprawnienia do wysyłki „w imieniu”|Umożliwia wysyłkę poczty „w imieniu” (On behalf of). W tym przypadku nie wyświetli się konto, z którego faktycznie realizowana jest wysyłka, lecz konto, któremu przydzielone zostały uprawnienia do wysyłki „w imieniu”. Pojawi się jednak wzmianka o tym, że wiadomość została wysłana „w imieniu konta”, które zrealizowało przesyłkę.|
|Prawo dostępu|Umożliwia dostęp do danego konta tylko w trybie odczytu poprzez utworzenie odpowiednich uprawnień. Dostęp ten nie zezwala na wysyłkę poczty, a jedynie na wgląd do treści.|

> [!warning]
>
> Nie ma możliwości połączenia „prawa do wysyłki” z „prawem do wysyłki od”. Inne kombinacje są możliwe.
> 

Po określeniu konta, dla którego będziesz nadawał uprawnienia, wybraniu praw, które przydzielisz oraz wybraniu konta lub kont, którym przydzielisz dodatkowe prawa, przejdź do pierwszego etapu.

### Etap 1: nadanie uprawnień

Aby rozpocząć operację, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}:

- **Exchange**: Kliknij `Microsoft`{.action}, po czym kliknij `Exchange`{.action}.
- **Email Pro**: Kliknij `Email Pro`{.action}.

Następnie kliknij nazwę usługi e-mail, w której znajduje się konto, do którego będziesz nadawał uprawnienia. Teraz przejdź do zakładki `Konta e-mail`{.action}.

Pojawi się tabela, w której wyświetlają się konta powiązane z Twoją usługą e-mail. Kliknij trzy kropki po prawej stronie nazwy konta, do którego chcesz utworzyć uprawnienie, następnie kliknij `Zarządzaj uprawnieniami`{.action}.

![delegacja uprawnień exchange](images/delegation-step1.png){.thumbnail}

Na stronie, która się wyświetla zaznacz prawa, które chcesz przydzielić. Powiąż je z jednym lub kilkoma uprawnionymi kontami. Kliknij `Dalej`{.action}.

![delegacja uprawnień exchange](images/delegation-step2.png){.thumbnail}

Sprawdź dokładnie podsumowanie zmian. Jeśli są poprawne, kliknij `Zatwierdź`{.action}. W ciągu kilku minut uprawnienia zostaną utworzone na serwerach OVHcloud.

Po skonfigurowaniu uprawnienia konto*test@mypersonaldomain.ovh* będzie mogło wykonać zaznaczone operacje na koncie *test2@mypersonaldomain.ovh*.

### Etap 2: używanie udostępnionej skrzynki

Teraz możesz zacząć korzystać z uprawnienia. Upewnij się, że posiadasz dane dostępowe do konta e-mail, dla którego przydzielone zostały nowe prawa. 

Sposób postępowania jest inny w zależności od prawa lub praw, jakie przydzieliłeś oraz programu lub interfejsu, którego będziesz używał do dostępu do konta e-mail. Kontynuuj lekturę niniejszego przewodnika w sekcji, która dotyczy prawa lub praw, które Cię dotyczą.

- [Korzystanie z „prawa dostępu”](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/#21-korzystanie-z-prawa-dostepu){.external}

- [Korzystanie z „prawa do wysyłki poczty”](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/#22-korzystanie-z-prawa-do-wysylki-poczty){.external}

- [Korzystanie z „prawa do wysyłki poczty w imieniu”](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/#23-korzystanie-z-prawa-do-wysylki-poczty-w-imieniu){.external}

> [!warning]
>
> Rozwiązanie to wymaga znajomości programu lub interfejsu, którego będziesz używał. Poniżej zamieszczamy kilka informacji dotyczących sposobu postępowania. W przypadku trudności zalecamy skorzystanie z pomocy specjalisty lub kontakt z producentem programu lub interfejsu. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

#### 2.1 Korzystanie z „prawa dostępu”

- **Przy użyciu webmail Outlook Web Application (OWA)**

Kliknij link <https://www.ovh.pl/mail/> i wprowadź dane dostępowe do konta e-mail, dla którego udzielone zastało dane prawo. Po zalogowaniu kliknij prawym przyciskiem myszy nazwę konta w menu po lewej stronie, następnie zaznacz `Dodaj współdzielony katalog`{.action}.

W oknie, które się wyświetla wskaż nazwę konta, którego dotyczy przyznane prawo, a następnie kliknij `Dodaj`{.action}. Konto wyświetla się wówczas w menu po lewej stronie. Możesz przejrzeć jego zawartość. 

![delegacja uprawnień exchange](images/delegation-step3.png){.thumbnail}

- **Przy użyciu programu Outlook dla Windows**

Przejdź do programu Outlook 2016 i kliknij `Plik`{.action} na pasku menu na górze ekranu, a następnie kliknij `Ustawienia konta`{.action}. W rozwijanym menu kliknij ponownie `Parametry konta`{.action}. W oknie, które się wyświetla wybierz konto, którego dotyczy przydzielone prawo, a następnie kliknij `Modyfikuj`{.action}. 

![delegacja uprawnień exchange](images/delegation-step4.png){.thumbnail}

Teraz kliknij `Ustawienia dodatkowe`{.action}. W nowym oknie przejdź do zakładki `Zaawansowane`{.action}, a następnie kliknij `Dodaj`{.action}. Wprowadź nazwę konta, dla którego zostało utworzone prawo, następnie zatwierdź dodanie. Konto wyświetla się wówczas w menu po lewej stronie. Możesz przejrzeć jego zawartość.

![delegacja uprawnień exchange](images/delegation-step5.png){.thumbnail}

#### 2.2 Korzystanie z „prawa do wysyłki poczty”

- **Przy użyciu webmail Outlook Web Application (OWA)**

Kliknij link <https://www.ovh.pl/mail/> i wprowadź dane dostępowe do konta e-mail, dla którego udzielone zastało dane prawo. Po zalogowaniu się kliknij przycisk `Nowa wiadomość`{.action} i rozpocznij pisanie e-maila.

W obszarze, który się wyświetli kliknij przycisk z trzema kropkami, po czym kliknij `Wyświetl pole „Od”`{.action}. Teraz kliknij przycisk `Od`{.action} i zaznacz konto (do którego posiadasz przydzielone prawo), które wyświetli się jako nadawca . Jeśli żądane konto się nie wyświetla, usuń to, które zostało wprowadzone i wpisz odpowiednie. 

Teraz możesz zredagować wiadomość e-mail i wysłać ją. 

![delegacja uprawnień exchange](images/delegation-step6.png){.thumbnail}

- **Przy użyciu programu Outlook dla Windows**

Po otwarciu programu Outlook 2016 zacznij pisać nową wiadomość. Upewnij się, czy przycisk `Od`{.action} wyświetla się w oknie wiadomości. Jeśli nie wyświetla się, przejdź do zakładki `Opcje`{.action}, następnie kliknij `Wyświetl „Od”`{.action}.

Teraz kliknij przycisk `Od`{.action} i zaznacz konto (do którego posiadasz przydzielone prawo), które wyświetli się jako nadawca . Jeśli konto się nie wyświetla, kliknij `Inne`{.action}, wprowadź odpowiednie konto i zatwierdź. 

Teraz możesz zredagować wiadomość e-mail i wysłać ją. 

![delegacja uprawnień exchange](images/delegation-step7.png){.thumbnail}

#### 2.3 Korzystanie z „prawa do wysyłki poczty w imieniu” 

- **Przy użyciu webmail Outlook Web Application (OWA)**

Kliknij link <https://www.ovh.pl/mail/> i wprowadź dane dostępowe do konta e-mail, dla którego udzielone zastało dane prawo. Po zalogowaniu się kliknij przycisk `Nowa wiadomość`{.action} i rozpocznij pisanie e-maila.

W obszarze, który się wyświetli kliknij przycisk z trzema kropkami, po czym kliknij `Wyświetl pole „Od”`{.action} Teraz kliknij przycisk `Od`{.action} i zaznacz konto (do którego posiadasz przydzielone prawo), które wyświetli się jako nadawca . Jeśli żądane konto się nie wyświetla, usuń to, które zostało wprowadzone i wpisz odpowiednie. 

Teraz możesz zredagować wiadomość e-mail i wysłać ją. 

![delegacja uprawnień exchange](images/delegation-step6.png){.thumbnail}

- **Przy użyciu programu Outlook dla Windows**

Po otwarciu programu Outlook 2016 zacznij pisać nową wiadomość. Upewnij się, czy przycisk `Od`{.action} wyświetla się w oknie wiadomości. Jeśli nie wyświetla się, przejdź do zakładki `Opcje`{.action}, następnie kliknij `Wyświetl „Od”`{.action}.

Teraz kliknij przycisk `Od`{.action} i zaznacz konto (do którego posiadasz przydzielone prawo), które wyświetli się jako nadawca . Jeśli konto się nie wyświetla, kliknij `Inne`{.action}, wprowadź odpowiednie konto i zatwierdź. 

Teraz możesz zredagować wiadomość e-mail i wysłać ją. 

![delegacja uprawnień exchange](images/delegation-step7.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.