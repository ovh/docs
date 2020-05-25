---
title: 'Co zrobić, jeśli moje konto zostało zablokowane z powodu rozsyłania spamu?'
slug: blokada-za-spam
excerpt: 'Dowiedz się, jak należy zareagować, jeśli Twój adres e-mail zostanie zablokowany z powodu spamu'
section: 'Diagnostyka Exchange'
order: 1
---

**Ostatnia aktualizacja z dnia 16-03-2020**

## Wprowadzenie

Jeśli otrzymałeś e-mail z informacją, że jeden z Twoich adresów e-mail został zablokowany z powodu rozsyłania spamu, sprawdź następujące punkty i wykonaj poniższe działania.

**Dowiedz się, jak należy zareagować, jeśli Twój adres e-mail zostanie zablokowany z powodu spamu.**

## Wymagania początkowe

- Posiadanie usługi [e-mail OVHcloud](https://www.ovh.pl/emaile/){.external}
- Dostęp do[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), sekcja `Web`{.action}

## W praktyce

### Etap 1: sprawdź status adresu e-mail i status powiązanego zgłoszenia serwisowego

#### W przypadku adresu e-mail Exchange

Zaloguj się do swojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager) i przejdź do sekcji „Web”. Kliknij `Microsoft`{.action} na pasku usług po lewej stronie, następnie `Exchange`{.action}, po czym wybierz odpowiednią usługę Exchange.

Przejdź do karty `Konta e-mail`{.action} w Twojej platformie. Jeśli w kolumnie „status” adresu e-mail widnieje „zablokowany”, kliknij `...`{.action} z prawej strony konta i wybierz opcję `Odblokuj`{.action}. Następnie przejdź do [etapu 2](./#etap-2-przejscie-do-zgloszenia-serwisowego_1){.external} niniejszego przewodnika.

![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}

#### W przypadku adresu E-mail Pro

Zaloguj się do swojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager) i przejdź do sekcji „Web”. Kliknij `E-mail Pro`{.action} na pasku usług po lewej stronie, a następnie wybierz odpowiednią platformę E-mail Pro.

Przejdź do karty `Konta e-mail`{.action} w Twojej platformie. Jeśli kolumna „status” po prawej stronie danego adresu e-mail zawiera słowo „Spam”, kliknij je i wybierz opcję `Odpowiedz na zgłoszenie`{.action}. Następnie przejdź do [etapu 2](./#etap-2-przejscie-do-zgloszenia-serwisowego_1){.external} niniejszego przewodnika.

![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}

#### W przypadku adresu e-mail MX plan

Zaloguj się do swojego [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager) i przejdź do sekcji „Web”. Kliknij `E-maile`{.action} na pasku usług po lewej stronie, po czym wybierz odpowiednią nazwę domeny.

Przejdź do karty `Konta e-mail`{.action} w Twojej platformie. Jeśli kolumna „status” po prawej stronie danego adresu e-mail zawiera słowo „Spam”, kliknij je i wybierz opcję `Odpowiedz na zgłoszenie`{.action}. Następnie przejdź do [etapu 2](./#etap-2-przejscie-do-zgloszenia-serwisowego_1){.external} niniejszego przewodnika.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}


### Etap 2: przejście do zgłoszenia serwisowego

Po etapie 1 zostaniesz przekierowany do okna „Moje zgłoszenia serwisowe”. Kliknij `...`{.action} z prawej strony zgłoszenia o temacie „Account locked for spam.”, a następnie kliknij `Pokaż szczegóły`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Dzięki temu odnajdziesz przesłany do Ciebie e-mail, który pozwoli utworzyć zgłoszenie serwisowe i przesłać je do działu pomocy technicznej.

Gotowe zgłoszenie serwisowe wygląda następująco:

> 
> Drogi Kliencie,
>
> Nasz system wykrył, że adres **youraddress@domain.com** hostowany w naszych systemach w ramach usługi **servicename** jest wykorzystywany do rozsyłania niechcianych wiadomości (spamu).
> Wysyłanie e-maili zostało więc tymczasowo wyłączone.
>
> Na chwilę obecną wykryliśmy następującą liczbę podejrzanych wiadomości: **X**
>
> Aby pomóc nam w reaktywowaniu wysyłki e-maili z adresu: **address@domain.com**,
> odpowiedz na niniejszą wiadomość, załączając wyjaśnienia dotyczące następujących kwestii:
>
> - Czy jesteś nadawcą tej wiadomości e-mail (patrz nagłówek poniżej)?
>
> - Czy masz regułę przekierowującą na inny adres e-mail?
>
> - Czy odpowiedziałeś na spam?
> 
> Te odpowiedzi pomogą OVH szybko reaktywować Twoje konto.
> <br>
> <br>
> 

Wraz z tą wiadomością otrzymałeś próbkę nagłówków wysłanych e-maili.

Nagłówki te pozwolą określić drogę i pochodzenie wysłanych wiadomości.

### Etap 3: odpowiedz na trzy zadane pytania

> [!warning]
>
> Odblokowanie adresu e-mail nie odbywa się automatycznie. Należy skontaktować się z działem pomocy technicznej, przesyłając zgłoszenie serwisowe i odpowiadając na 3 pytania.

- **Czy jesteś nadawcą tej wiadomości e-mail?**: na podstawie przesłanych nagłówków sprawdź nadawcę, odbiorcę i temat wiadomości, aby upewnić się, że jesteś jej autorem.

- **Czy masz regułę przekierowującą na inny adres e-mail?**: sprawdź reguły w skrzynce odbiorczej Twojego adresu e-mail, aby upewnić się, że niechciane wiadomości nie zostały przekierowane na inny adres.

- **Czy odpowiedziałeś na wiadomość ze spamu?**: sam fakt odpowiedzi na spam powoduje obniżenie reputacji serwerów wysyłających e-maile oraz Twojej domeny.    


### Etap 4: środki, które należy podjąć w razie nielegalnego dostępu do Twojego adresu e-mail

Jeśli e-maile ze wskazanymi nagłówkami nie zostały wysłane przez uprawnionego użytkownika/ uprawnionych użytkowników adresu e-mail, należy podjąć następujące działania:

- Przeskanować antywirusem każdy komputer, na którym jest używany adres e-mail zablokowany z powodu rozsyłania spamu, i wdrożyć odpowiednie środki zaradcze w razie wykrycia infekcji.

- Sprawdzić wszystkie programy wykorzystujące dane logowania adresu e-mail zablokowanego z powodu rozsyłania spamu (np. faks, aplikacja biznesowa, program pocztowy).

- Zmienić hasło do adresu e-mail po przeskanowaniu urządzenia programem antywirusowym, dbając o to, by było ono wystarczająco silne. Możesz wykorzystać do tego celu narzędzie udostępnione przez organ regulacyjny CNIL. Polskie tłumaczenie zostało doprecyzowane i zatwierdzone przez polski organ nadzorczy. Wersję dla systemu Windows można pobrać pod tym linkiem: [narzędzie do tworzenia silnych haseł](https://uodo.gov.pl/pl/423/213).


## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.