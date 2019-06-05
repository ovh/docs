---
title: 'Przeniesienie kont e-mail za pomocą OVH Mail Migrator'
slug: exchange-migracja-kont-e-mail-ovh-mail-migrator
excerpt: 'Dowiedz się, jak przenieść konta e-mail do OVH przy użyciu narzędzia OVH Mail Migrator'
section: 'Przeniesienie konta'
---

**Ostatnia aktualizacja dnia 2018-03-22**

## Wprowadzenie

[OVH Mail Migrator](https://omm.ovh.net/){.external} jest narzędziem przygotowanym przez OVH. Umożliwia przeniesienie zawartości aktualnych kont e-mail na konta e-mail OVH. Operacja obejmuje przeniesienie różnych typów treści, takich jak e-maile, kontakty, kalendarze i zadania, o ile są one kompatybilne z Twoimi kontami e-mail w OVH.

**Dowiedz się, jak przenieść Twoje konta e-mail do OVH przy użyciu narzędzia OVH Mail Migrator**

## Wymagania początkowe

- Korzystanie z usługi poczty elektronicznej w OVH, takiej jak [Exchange](https://www.ovh.pl/emaile/){.external}, [E-mail Pro](https://www.ovh.pl/emaile/email-pro/){.external} lub MX Plan (w postaci pakietu kont MX Plan lub kont e-mail dostępnych w ramach [hostingu OVH](https://www.ovh.pl/hosting/){.external})
- Dane dostępowe do kont e-mail, które chcesz przenieść (konta źródłowe)
- Dane dostępowe do kont e-mail OVH, na które przeniesione zostaną dane (konta docelowe)

## W praktyce

[OVH Mail Migrator](https://omm.ovh.net/){.external} jest dostępny na stronie <https://omm.ovh.net/>. Umożliwia trzy rodzaje migracji oraz śledzenie ich postępu.

|Rodzaj migracji|Opis|
|---|---|
|Migracja pojedynczych kont|Polega na migracji zawartości konta e-mail na inne konto pocztowe. Rozwiązanie to jest zalecane w przypadku przenoszenia jednego lub kilku kont (kolejne kroki należy powtórzyć odrębnie dla każdego przenoszonego konta).|
|Migracja z użyciem pliku|Polega na migracji zawartości konta e-mail, zapisanej uprzednio w pliku, na inne konto pocztowe. Możliwe formaty plików: PST, ICS oraz VCF.|
|Migracja kilku kont w ramach jednego projektu (tryb projekt)|Umożliwia zarządzanie kilkoma migracjami w ramach jednego projektu. Rozwiązanie to przeznaczone jest dla osób chcących przenieść znaczną liczbę kont e-mail.|

Zapoznaj się z częścią przewodnika dotyczącą rodzaju migracji odpowiedniego dla Twojego projektu.

### Migracja pojedynczych kont

Zaloguj się na stronie <https://omm.ovh.net/>, przejdź do paska menu na górze strony i ustaw kursor na zakładce `Migracja`{.action}, następnie kliknij `Nowa migracja`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Na stronie, która się wyświetli uzupełnij wymagane informacje.

- **Konto**: wprowadź dane **konta źródłowego** i **konta docelowego**. Pamiętaj, że zawartość **konta źródłowego** zostanie przeniesiona na **konto docelowe**.

|Informacja|Opis|
|---|---|
|Typ serwera|Wskaż typ serwera hostującego Twoje konta. Jeśli jedno z kont jest kontem w OVH, opcja **Hosted by OVH (Autodetect)** umożliwi automatyczne uzupełnienie danych.|
|Adres URL serwera|Wprowadź adres serwera, na którym hostowane są Twoje konta. Pole to może zostać automatycznie uzupełnione podczas wybierania typu serwera.|
|Login|Wpisz pełny adres e-mail.|
|Konto administratora z delegowaniem uprawnień|To pole pojawia się tylko w przypadku niektórych typów serwerów.|
|Hasło|Wprowadź hasło do konta.|

- **Opcje**: wybierz elementy, które chcesz migrować. Niektóre treści mogą być niezbędne w zależności od uprzednio wybranego typu serwera.

- **Informacje**: podaj adres e-mail, na który mają być wysyłane powiadomienia o postępie migracji.

Po uzupełnieniu informacji, kliknij przycisk `Rozpocznij migrację`{.action}. Jeśli dane są prawidłowe, operacja się rozpocznie.

Strona, która się wyświetla podaje szczegóły dotyczące postępu migracji. Pamiętaj, aby zapisać `Identyfikator migracji`{.action}, który się wyświetli i zaczekaj, aż operacja się zakończy. Czas operacji jest zmienny i zależy od liczby migrowanych elementów. Aby wrócić do strony pokazującej postęp migracji, przejdź do sekcji poniżej "Monitorowanie migracji pojedynczych kont".

### Monitorowanie migracji pojedynczych kont

Istnieją dwie metody dostępu do strony pokazującej postęp migracji pojedynczych kont:

- z poziomu wiadomości e-mail informującej Cię, że migracja się rozpoczęła;

- z poziomu strony narzędzia <https://omm.ovh.net/>. Ustaw kursor na zakładce `Migracja`{.action} na pasku menu na górze strony, następnie kliknij `Monitoruj / Synchronizuj`{.action}. Wpisz `Identyfikator migracji`{.action} i `Konto źródłowe`{.action}.

![omm](images/omm-migration-track.png){.thumbnail}

Strona, która się wyświetla pozwala śledzić postępy migracji. Zobaczysz komunikat, który poinformuje Cię, że operacja się rozpoczęła, jest w toku lub że się zakończyła. W zależności od statusu, możliwych jest kilka różnych działań:

|Operacja|Opis|
|---|---|
|Zatrzymaj operację|Umożliwia anulowanie migracji. Elementy już przeniesione zostaną zachowane na koncie docelowym.|
|Usuń przeniesione elementy|Umożliwia usunięcie elementów już przeniesionych na konto docelowe. Możesz usunąć elementy, korzystając z określonego punktu synchronizacji.|
|Synchronizuj|Umożliwia pobieranie nowych elementów, nieprzeniesionych podczas poprzedniej synchronizacji konta źródłowego i konta docelowego. Operację tę można uznać za migrację brakujących elementów z konta źródłowego na konto docelowe.|

### Migracja z użyciem pliku

Zaloguj się na stronie <https://omm.ovh.net/>, przejdź do paska menu na górze strony i ustaw kursor na zakładce `PST / ICS / VCF`{.action}, następnie, w zależności od migracji, jaką chcesz przeprowadzić, kliknij `Nowa migracja PST`{.action}, `Nowa migracja ICS`{.action} lub `Nowa migracja VCF`{.action}.

W tym momencie powinieneś dysponować plikiem zawierającym treść, którą chcesz migrować. 

![omm](images/omm-migration-files.png){.thumbnail}

Na stronie, która się wyświetla, uzupełnij dane dotyczące **konta docelowego**, następnie kliknij przycisk `Rozpocznij migrację`{.action}. Pamiętaj, że zawartość pliku PST, ICS lub VCF zostanie przeniesiona na **konto docelowe**.

Jeśli wprowadzone dane są prawidłowe, zostaniesz poproszony o wybór pliku na Twoim komputerze. Po wybraniu pliku kliknij przycisk `Upload`{.action} i zaczekaj, aż się załaduje. Może to chwilę potrwać - w zależności od wielkości pliku. Możesz sprawdzić stan postępu pobierania pliku na tej stronie. 

Po załadowaniu pliku wprowadź ponownie hasło **konta docelowego**, następnie kliknij `Rozpocznij migrację`{.action}. Jeśli wprowadzone dane są prawidłowe, możesz rozpocząć migrację, ponownie klikając przycisk `Rozpocznij migrację`{.action}.

Strona, która się wyświetla podaje szczegóły dotyczące postępu migracji. Pamiętaj, aby zapisać `Identyfikator migracji`{.action}, który się wyświetli i zaczekaj, aż operacja się zakończy. Czas operacji jest zmienny i zależy od liczby migrowanych elementów. Aby wrócić do strony pokazującej postęp migracji, przejdź do sekcji poniżej „Monitorowanie migracji z użyciem pliku”.

### Monitorowanie migracji z użyciem pliku

Istnieją dwie metody dostępu do strony pokazującej postęp migracji zawartości konta zapisanej w pliku PST, ICS lub VCF:

- z poziomu wiadomości e-mail informującej Cię, że migracja się rozpoczęła;

- z poziomu strony narzędzia <https://omm.ovh.net/>. Ustaw kursor na zakładce `Migracja`{.action} na pasku menu na górze strony, następnie kliknij `Monitoruj / Synchronizuj`{.action}. Wpisz `Identyfikator migracji`{.action} i `Konto docelowe`{.action}. 

![omm](images/omm-migration-track.png){.thumbnail}

Strona, która się wyświetla pozwala śledzić postępy migracji. Zobaczysz komunikat, który poinformuje Cię, że operacja się rozpoczęła, jest w toku lub że się zakończyła. W zależności od statusu, możliwych jest kilka różnych działań:

|Operacja|Opis|
|---|---|
|Zatrzymaj operację|Umożliwia anulowanie migracji. Elementy już przeniesione zostaną zachowane na koncie docelowym.|
|Usuń przeniesione elementy|Umożliwia usunięcie elementów już przeniesionych na konto docelowe.|

### Migracja kilku kont w ramach jednego projektu (tryb projekt)

Zaloguj się na stronie <https://omm.ovh.net/>, przejdź do paska menu na górze strony i ustaw kursor na zakładce `Projekt`{.action}, następnie kliknij `Nowy projekt wielu migracji`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Na stronie, która się wyświetla, uzupełnij dane dotyczące **Nowego projektu**:

|Informacja|Opis|
|---|---|
|Nazwa|Nadaj nazwę Twojemu projektowi migracji.|
|Hasło|Wybierz hasło dla projektu, aby móc nim zarządzać przy użyciu narzędzia OVH Mail Migrator.|
|E-mail|Podaj adres e-mail, na który mają być wysyłane powiadomienia o postępie projektu migracji.|

Następnie kliknij `Utwórz projekt`{.action}. Strona, która się wyświetla umożliwia zarządzanie Twoim projektem migracji. Pamiętaj, aby zapisać **identyfikator projektu**, który się wyświetli.

Możesz teraz rozpocząć migrację Twoich kont. W tym celu możesz skorzystać z jednej z dostępnych zakładek:

|Zakładka|Opis|
|---|---|
|Kontynuuj|Umożliwia śledzenie postępu migracji Twojego projektu. Możesz również skorzystać z przycisku umożliwiającego wstrzymanie migracji i jej późniejsze wznowienie. |
|Utwórz kilka migracji|Umożliwia dodawanie do kolejki kilku migracji dzięki importowi pliku (CSV lub Excel). Plik musi być zgodny z określonym formatem. Rekomendujemy użycie dostarczonych szablonów. |
|Dodaj |Umożliwia dodawanie kont do kolejki migracji. Istnieje jednak możliwość zachowania domyślnych serwerów źródłowych i docelowych.|
|Opcje|Umożliwia personalizację elementów przenoszonych przy użyciu narzędzia OVH Mail Migrator oraz określenie liczby równoczesnych zapytań wykonanych przez OMM podczas migracji.|
|Wyloguj się|Umożliwia wylogowanie się ze strony, na której śledzisz postęp projektu. Dzięki temu możesz zalogować się ponownie, aby śledzić ewentualny inny projekt migracji.|

Aby wrócić do strony pokazującej postęp Twojego projektu, zaloguj się na stronie <https://omm.ovh.net/>, przejdź do paska menu na górze strony i ustaw kursor na zakładce `Projekt`{.action}, a następnie kliknij `Monitoruj projekt`{.action}. Wpisz `Identyfikator projektu migracji`{.action} oraz przypisane do niego `Hasło`{.action}.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
