---
title: 'Migracja adresu e-mail MX Plan na konto Zimbra OVHcloud'
excerpt: 'Dowiedz się, jak przeprowadzić migrację adresu e-mail MX Plan na konto Zimbra OVHcloud'
updated: 2026-04-10
---

## Wprowadzenie

Jeśli chcesz przenieść swoją ofertę e-mail MX Plan na ofertę [Zimbra OVHcloud](/links/web/zimbra), możesz skorzystać z narzędzia [**O**VH **M**ail **M**igrator](/links/web/omm), aby przeprowadzić migrację.

**Dowiedz się, jak przeprowadzić migrację adresu e-mail MX Plan na konto Zimbra OVHcloud.**

## Wymagania początkowe

- Posiadanie adresu e-mail MX Plan (w ramach oferty MX Plan lub zawartego w ofercie [hostingu OVHcloud](/links/web/hosting)).
- Posiadanie konta e-mail Zimbra OVHcloud.
- **Brak skonfigurowanego przekierowania na adresie e-mail MX Plan, który chcesz migrować**.

<!-- CP-NAV-START:web-zimbra -->
---

### Dostęp do Panelu klienta OVHcloud

- **Bezpośredni link:** [Zimbra](/links/control-panel/web-zimbra)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## W praktyce

> [!warning]
>
> Jeśli Twoje konto e-mail zawiera poufne informacje lub napotkasz problemy podczas migracji, zalecamy poczekanie na wdrożenie narzędzia do automatyzacji w Panelu klienta OVHcloud.

Migracja konta e-mail MX Plan na konto e-mail Zimbra odbywa się w 2 etapach. Aby uniknąć przerwy w odbiorze wiadomości na oryginalnym adresie, należy postępować zgodnie z poniższym procesem:

1. **[Przeniesienie zawartości konta MX Plan na konto Zimbra](#step1)**
    - [1.1 - Tworzenie adresu e-mail Zimbra](#step11)
    - [1.2 - Migracja e-maili przy użyciu OVHcloud Mail Migrator](#step12)
    - [1.3 - Kopia zapasowa e-maili konta źródłowego (opcjonalnie)](#step13)
2. **[Usunięcie pierwotnego konta MX Plan i przypisanie jego adresu do konta Zimbra](#step2)**
    - [2.1 - Usunięcie starego adresu e-mail MX Plan](#step21)
    - [2.2 - Zmiana nazwy adresu e-mail Zimbra](#step22)

W poniższym przykładzie migrujemy adres `contact@mydomain.ovh`. W tym celu utworzymy konto Zimbra o nazwie `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Przeniesienie zawartości konta MX Plan na konto Zimbra <a name="step1"></a>

#### 1.1 - Tworzenie adresu e-mail Zimbra <a name="step11"></a>

> [!primary]
>
> Jeśli posiadasz już adres e-mail Zimbra, przejdź do sekcji [Migracja e-maili przy użyciu OVHcloud Mail Migrator](#step12).

Najpierw utwórz adres e-mail z tymczasową nazwą. Możesz na przykład utworzyć adres `contact2@mydomain.ovh`, jeśli chcesz zmigrować adres `contact@mydomain.ovh`.

Aby utworzyć adres e-mail Zimbra, zapoznaj się z sekcją "Utwórz konto e-mail" w naszym przewodniku [Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - Migracja e-maili przy użyciu OVHcloud Mail Migrator <a name="step12"></a>

Skorzystaj z narzędzia do migracji [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**), aby przenieść zawartość pierwotnego konta MX Plan na nowe konto docelowe Zimbra, posługując się przykładem pokazanym na powyższym schemacie.

Migracja za pomocą OMM przebiega w 3 krokach: tworzenie projektu, konfiguracja migracji, a następnie śledzenie jej postępów. Kliknij każdą zakładkę, aby wyświetlić odpowiednie instrukcje.

> [!tabs]
> **Krok 1**
>>
>> **Tworzenie projektu migracji**
>>
>> Przejdź na stronę <https://omm.ovhcloud.com/> i kliknij `Nowa migracja`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Kontaktowy adres e-mail projektu**: Wpisz adres e-mail, który będzie otrzymywał dane logowania i powiadomienia o postępach. Nie używaj adresu, który będzie migrowany w tym projekcie.
>> - **Hasło projektu**: Ustaw hasło (co najmniej 10 znaków, w tym co najmniej 1 znak specjalny, 1 cyfra, 1 wielka litera i 1 mała litera).
>>
>> Kliknij `Utwórz mój projekt`{.action}. Otrzymasz e-mail z potwierdzeniem zawierający unikalny identyfikator projektu.
>>
> **Krok 2**
>>
>> **Logowanie do projektu i tworzenie migracji**
>>
>> Na stronie głównej [OMM](/links/web/omm) kliknij `Śledzić migrację`{.action}, wpisz `Identyfikator projektu` i `Hasło projektu`, a następnie kliknij `Zaloguj się do projektu`{.action}.
>>
>> Następnie kliknij `Nowa migracja`{.action}, aby skonfigurować migrację:
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Konto źródłowe**:
>>     - **Typ konta**: Wybierz `OVHcloud`, a następnie `MX Plan` lub `Autodetekcja`. Kliknij `Zaloguj się`{.action}, aby zalogować się na swoje konto OVHcloud i automatycznie wybrać usługę oraz adres do migracji (np.: `john.smith@mydomain.ovh`). Następnie wpisz hasło do tego konta e-mail.
>> - **Konto docelowe**:
>>     - **Typ konta**: Wybierz `OVHcloud`, a następnie `Zimbra`. Kliknij `Zaloguj się`{.action}, aby zalogować się na swoje konto OVHcloud i wybrać usługę Zimbra oraz adres docelowy (np.: `zimbra2@mydomain.ovh`). Następnie wpisz hasło do tego konta e-mail.
>> - **Dane do przeniesienia**: Sprawdź obsługiwane typy danych i odznacz te, których nie chcesz migrować.
>> - **Rozpoczęcie transferu**: Wybierz `Natychmiast` lub zaznacz `Później`, aby zaplanować migrację na określoną datę i godzinę.
>>
>> Kliknij `Migruj moje konto`{.action}, aby rozpocząć migrację.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Krok 3**
>>
>> **Śledzenie migracji**
>>
>> Istnieją dwa sposoby śledzenia projektu migracji:
>>
>> - Za pośrednictwem e-maila otrzymanego podczas tworzenia projektu, korzystając z podanego linku (identyfikator projektu jest wstępnie wypełniony).
>> - Ze strony głównej [OMM](/links/web/omm): kliknij `Śledzić migrację`{.action}, wpisz `Identyfikator projektu` i `Hasło projektu`, a następnie kliknij `Zaloguj się do projektu`{.action}.
>>
>> Na stronie projektu kliknij przycisk `⋮`{.action} po prawej stronie wiersza migracji, aby wyświetlić opcje:
>>
>> - `Wyświetl więcej szczegółów`{.action}: Śledź postępy migracji i przeglądaj raport po jej zakończeniu.
>> - `Anuluj migrację`{.action}: Anuluje trwającą migrację. Elementy już zmigrowane są zachowane na koncie docelowym.
>> - `Usuń moje dane migracji (RODO)`{.action}: Powoduje usunięcie wszystkich danych związanych z migracją. Informacje o zdarzeniach migracji są zachowywane.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

Więcej informacji na temat korzystania z OMM znajdziesz w naszym przewodniku "[Migracja kont e-mail za pomocą OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> Czas migracji zależy od ilości danych i może wynosić od kilku minut do kilku godzin. Po zakończeniu migracji sprawdź, czy wszystkie e-maile zostały poprawnie zmigrowane.

#### 1.3 - Kopia zapasowa e-maili konta źródłowego (opcjonalnie) <a name="step13"></a>

> [!warning]
>
> Przed usunięciem konta MX Plan **wykonaj kopię zapasową swoich e-maili**, aby uniknąć utraty danych.

Skorzystaj z opcji eksportu w programie pocztowym. W naszym przewodniku "[Ręczna migracja adresu e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)" znajdziesz szczegółowe informacje na temat ręcznego eksportu adresu e-mail z programu pocztowego.

### 2 - Usunięcie pierwotnego konta MX Plan i przypisanie jego adresu do konta Zimbra <a name="step2"></a>

#### 2.1 - Usunięcie starego adresu e-mail MX Plan <a name="step21"></a>

Aby usunąć adres e-mail MX Plan (np.: `contact@mydomain.ovh`), postępuj zgodnie z naszym przewodnikiem "[Usunięcie konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Jeśli migrujesz z konta MX Plan korzystającego z poczty webmail Zimbra, odczekaj 5 minut, aż usunięcie stanie się skuteczne, przed zmianą nazwy drugiego konta e-mail.

#### 2.2 - Zmiana nazwy adresu e-mail Zimbra <a name="step22"></a>

W Panelu klienta OVHcloud przejdź do swojej usługi Zimbra i zmień nazwę tymczasowego adresu e-mail Zimbra na zmigrowany adres MX Plan. Posługując się przykładem z kroku 2 rozdziału 1.2, tymczasowy adres `zimbra2@mydomain.ovh` zostanie zmieniony na `john.smith@mydomain.ovh`, czyli jego docelowy adres e-mail.

### Podsumowanie <a name="conclusion"></a>

Twoje konto e-mail zostało zmigrowane do Zimbra. Aby ukończyć konfigurację, zapoznaj się z poniższymi przewodnikami:

- [Pierwsze kroki z ofertą Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Konfiguracja adresu e-mail Zimbra w programie pocztowym](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Sprawdź również <a name="go-further"></a>

[FAQ dotyczące rozwiązania Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami wsparcia](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
