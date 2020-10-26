---
title: 'Wysyłanie wiadomości SMS z Panelu klienta'
slug: wysylanie-wiadomosci-sms-z-panelu-klienta
excerpt: 'Dowiedz się, jak w łatwy sposób wysyłać wiadomości SMS z Panelu klienta OVHcloud'
section: 'Wysyłanie wiadomości SMS'
---

**Ostatnia aktualizacja z dnia 19-05-2020**

## Wprowadzenie

Wiadomości SMS możesz wysyłać bezpośrednio z Panelu klienta. W tym przewodniku znajdziesz instrukcję krok po kroku, jak wysłać Twoje pierwsze wiadomości SMS.

## Wymagania początkowe

- Posiadanie konta SMS OVHcloud z zasileniami SMS

## W praktyce

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager) i wybierz opcję `Telecom`{.action} (1). Następnie kliknij pozycję `SMS`{.action} po lewej stronie (2) i wybierz Twoje konto SMS (3).

Pole „Wyślij SMS” (4) jest pierwszym dostępnym elementem na liście działań.

![menedżer wysyłki smsów](images/sms-send-control-panel01E.png){.thumbnail}

### Etap 1: konfigurowanie nadawcy i odbiorcy

Po przejściu na stronę wysyłania wiadomości SMS możesz uzupełnić różne parametry, aby jak najlepiej dostosować wysyłanie wiadomości do Twoich potrzeb.

![menedżer wysyłki smsów](images/sms-send-control-panel02E.png){.thumbnail}

Jako nadawcę wiadomości SMS (1) możesz wybrać numer skrócony umożliwiający otrzymanie odpowiedzi (dotyczy wyłącznie kont OVHcloud we Francji) lub nadawcę alfanumerycznego.
Następnie podaj numer odbiorcy (2) w formacie międzynarodowym (+336xxxxxxxx).
Więcej informacji na temat tworzenia nadawcy znajdziesz w [etapie 3: wybór nadawcy wiadomości SMS](./#etap-3-wybor-nadawcy-wiadomosci-sms).

Wiadomości SMS możesz także wysyłać do wielu odbiorców. Możesz to zrobić na dwa sposoby:

- Za pośrednictwem listy odbiorców w formacie .csv przez przycisk „Zarządzaj odbiorcami”.
Więcej informacji znajdziesz w [przewodniku dotyczącym list odbiorców wiadomości SMS](../lista-odbiorcow-sms/).

- Za pośrednictwem książki adresowej (3). Możesz ją utworzyć bezpośrednio w Panelu klienta lub zaimportować z pliku w formacie .csv lub .txt.
Zapoznaj się z [przewodnikiem dotyczącym książek adresowych odbiorców wiadomości SMS](../zarzadzanie-ksiazkami-adresowymi-sms/).

### Etap 2: tworzenie wiadomości SMS

Po wybraniu nadawcy i wpisaniu odbiorców możesz przejść do tworzenia wiadomości.

![menedżer wysyłki smsów](images/sms-send-control-panel03E.png){.thumbnail}

Wpisz wiadomość w przeznaczonym do tego okienku (1). Widoczny jest licznik, który informuje o wykorzystanej liczbie znaków i odpowiadającej temu liczbie wiadomości SMS (2).

W dwóch poniższych tabelach wymienione są znaki dozwolone w kodowaniu 7-bitowym. Znaki z tabeli „Extensions” liczą się podwójnie. 

Maksymalny rozmiar wiadomości SMS wynosi 160 znaków w kodowaniu 7-bitowym (norma GSM 03.38).

Użycie znaków niewymienionych w tych tabelach spowoduje przejście na kodowanie Unicode i ograniczenie rozmiaru wiadomości SMS do maksymalnie 70 znaków.

![Lista znaków SMS](images/smsauthorizedcharacters.png){.thumbnail}

#### Zaawansowane opcje

W tej sekcji możesz przeprowadzić wysyłkę natychmiastową lub odroczoną.

Dostępne są również trzy formaty wysyłki:

- Standard: najczęściej używana wiadomość SMS.
- Flash: wiadomość SMS wyświetla się bezpośrednio na ekranie telefonu.
- SIM: wiadomość SMS jest automatycznie zapisywana na karcie SIM telefonu.

### Etap 3: wybór nadawcy wiadomości SMS

#### Numer skrócony umożliwiający otrzymanie odpowiedzi (dotyczy wyłącznie kont OVHcloud we Francji)

Umożliwia otrzymanie odpowiedzi za pośrednictwem karty Otrzymane wiadomości SMS.

#### Wirtualny numer komórkowy (dotyczy tylko kont OVHcloud we Francji)

Jeśli posiadasz ofertę SMS obejmującą wirtualny numer komórkowy, możesz go podać jako nadawcę. Aby uzyskać więcej informacji, przejdź na [stronę dotyczącą wirtualnego numeru komórkowego](https://www.ovhtelecom.fr/sms/reponse/numeros-virtuels.xml).

> [!primary]
>
>Jeśli masz już konto SMS, utworzenie wirtualnego numeru komórkowego dla istniejącego konta jest niemożliwe. W takim wypadku musisz zamówić nowe konto SMS przez stronę oferty wirtualnego numeru komórkowego.
>

#### Nadawca alfanumeryczny

Możesz dostosować Twojego nadawcę. Otrzymanie odpowiedzi od odbiorcy Twojej wiadomości SMS nie będzie już wówczas możliwe. Aby uzyskać dostęp do zarządzania nadawcami wiadomości SMS, będąc na danym koncie SMS, wybierz pozycję `Nadawcy`{.action}(1).

![menedżer wysyłki smsów](images/sms-send-control-panel04E.png){.thumbnail}

Jeśli chcesz dodać kolejnego nadawcę wiadomości SMS, na środku kliknij przycisk `Działania`{.action}, a następnie `Dodaj`{.action}(2).

![menedżer wysyłki smsów](images/sms-send-control-panel05E.png){.thumbnail}

Na stronie dodawania masz do dyspozycji kilka opcji, aby skonfigurować nowego nadawcę wiadomości SMS (3):

- **Dodaj nadawców ręcznie**: Podaj żądanego nadawcę, opis i uzasadnienie wykorzystania tego nadawcy (4). 

> [!primary]
>
>W przypadku zapytania o dodanie nadawcy w imieniu firmy zewnętrznej, poprosimy Cię o dokument potwierdzający. W tym przypadku zachęcamy do przesłania nam tego dokumentu poprzez otwarcie zgłoszenia w Panelu klienta.  Zatwierdzenie nadawców utworzonych ręcznie jest bezpłatne i jest realizowane w ciągu dwóch dni roboczych od poniedziałku do piątku, od 8:00 do 20:00.
>

- **Dodaj nadawców na podstawie danych osobowych**: Możesz wybrać nadawcę na podstawie danych kontaktowych na Twoim koncie OVHcloud. Wówczas wyświetli się lista rozwijana dostępnych nadawców.

- **Dodaj nadawców na podstawie Twoich domen OVHcloud**: Jako nadawcę możesz wykorzystać domenę dostępną na Twoim koncie OVHcloud. Wówczas wyświetli się lista rozwijana dostępnych nadawców.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>
