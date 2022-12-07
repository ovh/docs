---
title: 'Przeniesienie kont e-mail za pomocą OVH Mail Migrator'
slug: exchange-migracja-kont-e-mail-ovh-mail-migrator
excerpt: 'Dowiedz się, jak przenieść konta e-mail do OVH przy użyciu narzędzia OVH Mail Migrator'
section: 'Migracja konta'
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 25-11-2021**

## Wprowadzenie

[OVH Mail Migrator](https://omm.ovh.net/){.external} to narzędzie stworzone przez OVHcloud. Umożliwia przeniesienie Twoich kont e-mail na konta e-mail OVHcloud lub zewnętrzną usługę e-mail. Operacja obejmuje przeniesienie różnych typów treści, takich jak e-maile, kontakty, kalendarze i zadania, o ile są one kompatybilne z Twoimi kontami e-mail w OVHcloud.

**Dowiedz się, jak przenieść Twoje konta e-mail do OVHcloud przy użyciu narzędzia OVH Mail Migrator.**

## Wymagania początkowe

- Korzystanie z usługi poczty elektronicznej w OVHcloud, takiej jak [Exchange](https://www.ovhcloud.com/pl/emails/){.external}, [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/){.external} lub MX Plan (w postaci pakietu kont MX Plan lub kont e-mail dostępnych w ramach [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external})
- Dane dostępowe do kont e-mail, które chcesz przenieść (konta źródłowe)
- Dane dostępowe do kont e-mail OVHcloud, na które przeniesione zostaną dane (konta docelowe)

## W praktyce

**OVH Mail Migrator** jest dostępny na stronie <https://omm.ovh.net/>. Zarządza 3 typami migracji:

- [Migracja jednorazowa](#standalone): Przeniesienie konta e-mail na inne konto e-mail To rozwiązanie jest zalecane do przeniesienia jednego lub kilku kont e-mail (kroki należy powtórzyć dla każdego przeniesionego konta).
- [Migracja z użyciem pliku](#file): Przeniesienie zawartości konta e-mail do innego konta e-mail. Możliwe formaty plików: PST, ICS oraz VCF.
- [Migracja kilku kont (tryb projekt)](#project): Umożliwia zarządzanie kilkoma migracjami w ramach jednego projektu. Rozwiązanie to przeznaczone jest dla osób chcących przenieść znaczną liczbę kont e-mail.

### Migracja pojedynczych kont <a name="standalone"></a>

#### Rozpocznij migrację

Na stronie <https://omm.ovh.net/>w zakładce `Migracja`{.action} na górze kliknij `Nowa migracja`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Na stronie, która się wyświetli uzupełnij wymagane informacje.

- **Konto**: wprowadź dane **konta źródłowego** i **konta docelowego**. Pamiętaj, że zawartość **konta źródłowego** zostanie przeniesiona na **konto docelowe**.

|Informacja|Opis|
|---|---|
|Typ serwera|Wskaż typ serwera hostującego Twoje konta. Jeśli jednym z nich jest adres OVHcloud, **Hosted by OVHcloud (Autodetect)**, opcja ta pozwala na automatyczne uzupełnienie danych, z wyjątkiem hasła.|
|Adres URL serwera|Wprowadź adres serwera, na którym hostowane są Twoje konta. Pole to może zostać automatycznie uzupełnione podczas wybierania typu serwera.|
|Login|Wpisz pełny adres e-mail.|
|Konto administratora z delegowaniem uprawnień|To pole pojawia się tylko w przypadku niektórych typów serwerów.|
|Hasło|Wpisz hasło przypisane do tego konta e-mail.|

- **Opcje**: wybierz elementy, które chcesz migrować. Niektóre treści mogą być niezbędne w zależności od uprzednio wybranego typu serwera.

- **Informacje**: wprowadź adres e-mail, aby otrzymywać powiadomienia o postępach migracji.

Kliknij na `Rozpocznij migrację`{.action} po uzupełnieniu informacji. Jeśli dane są prawidłowe, operacja się rozpocznie.

Strona, która się wyświetla podaje szczegóły dotyczące postępu migracji. Pamiętaj, aby zapisać `Identyfikator migracji`{.action}, który się wyświetli i zaczekaj, aż operacja się zakończy. Czas operacji jest zmienny i zależy od liczby migrowanych elementów. Aby wrócić do strony pokazującej postęp migracji, przejdź do sekcji poniżej "Monitorowanie migracji pojedynczych kont".

#### Monitorowanie migracji

Istnieją dwie metody dostępu do strony pokazującej postęp migracji pojedynczych kont:

- po otrzymaniu wiadomości e-mail informującej Cię o postępach migracji;
- na stronie <https://omm.ovh.net/> w zakładce `Migracja`{.action} kliknij `Monitoruj / Synchronizuj`{.action}. Wpisz `Identyfikator migracji`{.action} i `Konto źródłowe`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

Strona, która się wyświetla pozwala śledzić postępy migracji. Zobaczysz komunikat, który poinformuje Cię, że operacja się rozpoczęła, jest w toku lub że się zakończyła. W zależności od statusu, możliwych jest kilka różnych działań:

- `Zatrzymaj proces `{.action}: Umożliwia anulowanie migracji. Elementy już przeniesione zostaną zachowane na koncie docelowym.
- `Usuń przeniesione`{.action} elementy: Umożliwia usunięcie elementów już przeniesionych na konto docelowe. Możesz usunąć elementy, korzystając z określonego punktu synchronizacji.
- `Synchronizuj`{.action}: Umożliwia pobieranie nowych elementów, nieprzeniesionych podczas poprzedniej synchronizacji konta źródłowego i konta docelowego. Operację tę można uznać za migrację brakujących elementów z konta źródłowego na konto docelowe .

### Migracja z użyciem pliku <a name="file"></a>

#### Rozpocznij migrację

Na stronie, <https://omm.ovh.net/>w zakładce `PST / ICS / VCF`{.action} powyżej, kliknij `Nowa migracja PST / ICS / VCF`{.action}.

W tym momencie powinieneś dysponować plikiem zawierającym treść, którą chcesz migrować na konto e-mail.

![omm](images/omm-migration-files.png){.thumbnail}

Na stronie, która się wyświetla, uzupełnij dane dotyczące **konta docelowego**, następnie kliknij przycisk `Rozpocznij migrację`{.action}.

Jeśli wprowadzone dane są prawidłowe, zostaniesz poproszony o wybór pliku na Twoim komputerze.  Następnie kliknij przycisk `Upload`{.action} i zaczekaj, aż się pobierzesz; może to potrwać jakiś czas, w zależności od rozmiaru pliku. Możesz sprawdzić stan postępu pobierania pliku na tej stronie. 

Po pobraniu pliku na OMM wprowadź ponownie hasło do **konta docelowego** i kliknij `Rozpocznij migrację`{.action}. Jeśli wprowadzone informacje są poprawne, możesz rozpocząć migrację klikając przycisk `Rozpocznij migrację`{.action}.

Strona, która się wyświetla podaje szczegóły dotyczące postępu migracji. Pamiętaj, aby zapisać `Wyświetlany identyfikator migracji`{.action} i zaczekać do końca migracji; czas ten jest zmienny w zależności od liczby migrowanych elementów. Aby wrócić do strony pokazującej postęp migracji, przejdź do sekcji poniżej.

#### Monitorowanie migracji

Istnieją dwie metody dostępu do strony pokazującej postęp migracji zawartości konta zapisanej w pliku PST, ICS lub VCF:

- z poziomu e-maila informującego o rozpoczęciu migracji;

- z poziomu strony <https://omm.ovh.net/> przejdź do paska menu na górze strony i ustaw kursor na zakładce `Migracja`{.action}, następnie kliknij `Monitoruj / Synchronizuj`{.action}. Wpisz `Identyfikator migracji`{.action} i `Konto docelowe`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

Strona, która się wyświetla pozwala śledzić postępy migracji. Zobaczysz komunikat, który poinformuje Cię, że operacja się rozpoczęła, jest w toku lub że się zakończyła. W zależności od statusu, możliwych jest kilka różnych działań:

- Zatrzymaj proces: Umożliwia anulowanie migracji. Elementy już przeniesione zostaną zachowane na koncie docelowym.
- Usuń przeniesione elementy: Umożliwia usunięcie elementów przeniesionych na konto docelowe.

### Migracja kilku kont (tryb projekt) <a name="project"></a>

Na stronie, <https://omm.ovh.net/>w zakładce `Projekt`{.action} powyżej, kliknij `Nowy projekt wielu migracji`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Uzupełnij informacje o **Nowym projekcie**:

- Nadaj nazwę Twojemu projektowi migracji.
- Hasło umożliwiające dostęp do interfejsu monitorowania Twojego projektu migracji.
- adres e-mail do powiadomienia o postępie projektu migracji.

Kliknij `Utwórz projekt`{.action}. Na następnej stronie możesz zarządzać i śledzić Twój projekt migracji. Zachowaj **numer projektu**, który wyświetla się na górze.

![omm](images/omm-migration-project01.png){.thumbnail}

Możesz teraz rozpocząć migrację Twoich kont. Interfejs posiada różne zakładki:

- `Kontynuuj`: Umożliwia śledzenie postępu migracji w Twoim projekcie. Dysponujesz przyciskiem umożliwiającym wstrzymanie migracji i jej wznowienie w trakcie.

- `Tworzenie kilku kont`: Umożliwia dodawanie do kolejki kilku migracji dzięki importowi pliku (CSV lub Excel). Formacja musi być precyzyjna; zalecamy korzystanie z dostarczonych szablonów. Plik ma następującą formę:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

Najlepiej jest otworzyć go przy użyciu arkusza kalkulacyjnego, aby go uzupełnić.

- `Dodaj`: Umożliwia dodawanie migracji do kolejki dla każdego konta. Możesz jednak zachować serwery źródłowe i docelowe jako wartości domyślne.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Opcje`: Umożliwia personalizację elementów przenoszonych przy użyciu narzędzia OVH Mail Migrator oraz określenie liczby równoczesnych zapytań wykonanych przez OMM podczas migracji.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Odłączenie`: Umożliwia wylogowanie się ze strony, na której śledzisz postęp projektu.

Aby ponownie przejść do strony pokazującej postęp Twojego projektu migracji, przejdź do zakładki <https://omm.ovh.net/> `Projekt`{.action} powyżej i kliknij `Monitoruj projekt`{.action}. Wpisz `Identyfikator projektu migracji`{.action} oraz przypisane do niego `Hasło`{.action}.

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
