---
title: 'Migracja adresu e-mail MX Plan na konto Zimbra OVHcloud'
excerpt: 'Dowiedz się, jak przenieść adres e-mail MX Plan na konto Zimbra OVHcloud'
updated: 2025-05-22
---

## Wprowadzenie

W ramach stopniowego przechodzenia z kont MX Plan do Zimbra, można przewidzieć tę migrację i samodzielnie przeprowadzić transfer kont e-mail przed wdrożeniem przez OVHcloud zautomatyzowanego narzędzia. Niniejszy przewodnik wyjaśnia, jak wykonać migrację ręczną.

**Dowiedz się, jak przenieść adres e-mail MX Plan na konto Zimbra OVHcloud.**

## Wymagania początkowe

- Posiadanie konta e-mail MX Plan (za pośrednictwem oferty MX Plan lub zawartego w usłudze hostingu [OVHcloud](/links/web/hosting)).
- Posiadanie konta e-mail Zimbra OVHcloud.
- **Brak ustawień przekierowania na adres e-mail MX Plan, który chcesz przenieść**.
- Dostęp do [panelu klienta OVHcloud](/links/manager).

## W praktyce

> [!warning]
>
> Jeśli Twoje konto e-mail zarządza poufnymi danymi lub jeśli napotkasz problemy podczas migracji, zalecamy poczekać na wdrożenie narzędzia do automatyzacji w Panelu klienta OVHcloud.

Migracja konta e-mail MX Plan na konto e-mail Zimbra odbywa się w 2-etapowym procesie. Aby uniknąć przerwy w otrzymywaniu wiadomości na oryginalny adres e-mail, należy zastosować się do następującego procesu:

1. **Przeniesienie zawartości konta MX Plan na konto Zimbra**
    - [1.1 - Tworzenie konta e-mail Zimbra](#step11)
    - [1.2 - Migracja e-maili za pomocą OVH Mail Migrator](#step12)
    - [1.3 - Kopia zapasowa e-maili konta źródłowego (opcjonalnie)](#step13)
2. **Usuń oryginalne konto MX Plan i przypisz adres do konta Zimbra**
    - [2.1 - Usuwanie starego adresu e-mail MX Plan](#step21)
    - [2.2 - Zmień nazwę adresu e-mail Zimbra](#step22)

W poniższym przykładzie przenosimy adres `contact@modomain.ovh`. W tym celu utworzymy konto Zimbra pod nazwą `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1.1 - Tworzenie konta e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Jeśli dysponujesz już kontem e-mail Zimbra, skorzystaj z [Migracja e-maili przy użyciu OVH Mail Migrator](#step12).

Załóż najpierw konto e-mail z nazwą tymczasową. Możesz na przykład utworzyć adres `contact2@mydomain.ovh`{.action}, jeśli musisz przenieść adres `contact@mydomain.ovh`{.action}.

Aby utworzyć konto e-mail Zimbra, zapoznaj się z sekcją "Tworzenie konta e-mail" naszego przewodnika [Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### 1.2 - Migracja e-maili za pomocą OVH Mail Migrator <a name="step12"></a>

Użyj narzędzia do migracji [**O**VH **M**ail **M**igrator](https://omm.ovh.net/) (**OMM**), aby przenieść zawartość oryginalnego konta MX Plan na nowe konto docelowe Zimbra, posługując się przykładem podanym na powyższym schemacie.

### Etap 1: Dostęp do OVH Mail Migrator

Przejdź na stronę [OVH Mail Migrator](https://omm.ovh.net/){.external}.

Na stronie <https://omm.ovh.net/> w zakładce `Migration`{.action} kliknij `New migration`{.action}.

![omm](images/omm-migration-create01.png){.thumbnail}

#### Etap 2: Wpisz informacje dotyczące migracji

**Account**

- **Source Account**:
    - **Server type**: Wybierz `Hosted by OVHcloud (Autodetect)`, co pozwoli na automatyczne uzupełnienie informacji, z wyjątkiem hasła.
    - **Server URL**: To pole jest wypełniane automatycznie.
    - **Login**: Wpisz pełny adres e-mail konta, które chcesz przenieść (na przykład: `contact@mydomain.ovh`).
    - **Password**: Wpisz hasło wybrane dla wybranego konta e-mail.
- **Destination Account**:
     **Server type**: Wybierz `Zimbra` dla typu serwera docelowego.
    - **Server URL**: Wpisz adres serwera Zimbra <https://zimbra1.mail.ovh.net>.
    - **Login**: Wpisz pełny adres e-mail docelowego konta Zimbra (przykład:`contact2@mydomain.ovh`).
    - **Password**: Wpisz hasło wybrane dla konta e-mail Zimbra docelowego.

**Opcje**

Wybierz elementy, które chcesz migrować. Niektóre treści mogą być niedostępne w zależności od uprzednio wybranego typu serwera.

**Informacje**

Podaj adres e-mail, aby otrzymywać powiadomienia o postępie migracji. Zaznacz pole wyboru na dole strony, aby zaakceptować warunki OMM.

![omm](images/omm-migration-create02.png){.thumbnail}

#### Etap 3: Rozpoczęcie migracji

Sprawdź, czy wszystkie informacje są poprawne, następnie kliknij `Rozpocznij migrację`{.action}. Strona, która się wyświetla podaje szczegóły dotyczące postępu migracji. Zachowaj `Identyfikator migracji`, który się wyświetli i zaczekaj, aż operacja się zakończy. Czas ten zależy od liczby migrowanych elementów.

#### Etap 4: Monitorowanie migracji

Aby śledzić migrację pojedynczych kont, możesz skorzystać z jednej z dwóch dostępnych metod:

- Z poziomu wiadomości e-mail informującej o postępie migracji.
- Ze strony <https://omm.ovh.net/>: W zakładce `Migration`{.action} kliknij `Track/Synchronize`{.action}. Wpisz identyfikator migracji (`Migration ID`{.action}) oraz konto źródłowe (`Source account`{.action}).

![omm](images/omm-migration-track.png){.thumbnail}

Strona, która się wyświetla pozwala śledzić postępy migracji. Zobaczysz komunikat, który poinformuje Cię, że operacja się rozpoczęła, jest w toku lub że się zakończyła. W zależności od statusu, możliwych jest kilka różnych działań:

- `Stop the process`{.action}: Pozwala na anulowanie migracji. Elementy już przeniesione zostaną zachowane na koncie docelowym.
- `Delete migrated elements`{.action}: Umożliwia usunięcie elementów już przeniesionych na konto docelowe. Możesz usunąć elementy, korzystając z określonego punktu synchronizacji.
- `Synchronize`{.action}: Umożliwia pobranie nowych elementów, nieprzeniesionych podczas poprzedniej synchronizacji konta źródłowego i konta docelowego. Operację tę można uznać za migrację brakujących elementów z konta źródłowego na konto docelowe.

Aby przeprowadzić migrację z użyciem pliku lub wielu plików, zapoznaj się z sekcjami "Migracja z użyciem pliku" i "Migracja z użyciem wielu plików (tryb projektu)" w naszym przewodniku "[Migracja kont e-mail za pomocą OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> Czas migracji zależy od ilości danych i może wynosić od kilku minut do kilku godzin. Po zakończeniu migracji upewnij się, że wszystkie e-maile zostały migrowane.

### 1.3 - Kopia zapasowa e-maili konta źródłowego (opcjonalnie) <a name="step13"></a>

> [!warning]
>
> Przed usunięciem konta MX Plan **utwórz kopię zapasową e-maili**, aby uniknąć utraty danych.

Użyj opcji eksportu klienta poczty. Z naszego przewodnika "[Ręczna migracja Twojego konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)" dowiesz się, jak wykonać ręczny eksport konta e-mail z poziomu klienta poczty.

### 2.1 - Usuwanie starego adresu e-mail MX Plan <a name="step21"></a>

Aby usunąć adres e-mail MX Plan (na przykład: `contact@mydomain.ovh`), zapoznaj się z naszym przewodnikiem "[Usuń konto e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Jeśli migrujesz z konta MX Plan przy użyciu webmaila Zimbra, odczekaj 5 minut, zanim zmienisz nazwę drugiego konta e-mail.

### 2.2 - Zmień nazwę adresu e-mail Zimbra <a name="step22"></a>

W Panelu klienta OVHcloud zaloguj się do usługi Zimbra Starter i zmień nazwę Twojego konta e-mail Zimbra na nazwę przeniesionego konta e-mail (na przykład: `contact2@mydomain.ovh` en `contact@mydomain.ovh`).

### Zakończenie <a name="Zakończenie"></a>

Twoje konto e-mail zostało całkowicie przeniesione do Zimbra Starter. Teraz możesz używać programu Zimbra do zarządzania pocztą e-mail.

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Konfiguracja konta e-mail Zimbra w programie pocztowym](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[FAQ dotyczący rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).