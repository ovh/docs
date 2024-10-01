---
title: 'Tworzenie użytkowników lokalnych i zarządzanie nimi na koncie OVHcloud'
excerpt: 'Dowiedz się, jak dodawać użytkowników lokalnych z poziomu konta OVHcloud'
updated: 2024-06-25
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

OVHcloud umożliwia tworzenie użytkowników lokalnych, którzy mogą działać w trybie odczytu lub zapisu w Twoim Panelu klienta. Dzięki temu możesz przyznać członkom Twojej firmy dostęp do usług OVHcloud, i to bez konieczności podejmowania ryzykownych działań, takich jak udostępnianie hasła lub kodu do weryfikacji dwuetapowej.

> [!primary]
>
> Zarządzanie użytkownikami różni się od zarządzania kontaktami. Użytkownik będzie miał dostęp do wszystkich sekcji w Panelu klienta w zależności od przyznanego mu poziomu praw.
>
> Zarządzanie kontaktami ma z kolei na celu całkowite oddelegowanie zarządzania aspektami administracyjnymi, technicznymi lub księgowymi jednej lub kilku usług na koncie OVHcloud. Więcej szczegółów dotyczących zarządzania kontaktami znajdziesz w [tym przewodniku](/pages/account_and_service_management/account_information/managing_contacts).
>

**Ten przewodnik zawiera szczegółowe informacje na temat uprawnień, jakie może posiadać użytkownik lokalny, oraz na temat sposobów dodawania użytkowników i zarządzania nimi.**

## Wymagania początkowe

- Posiadanie aktywnego konta OVHcloud.
- Dostęp do Panelu klienta.

## W praktyce

### Prezentacja tożsamości

Użytkownicy lokalni to jeden z typów tożsamości, które można skonfigurować na koncie OVHcloud. Pozostałe typy kont opisano w [powiązanej dokumentacji](/pages/manage_and_operate/iam/identities-management).

### Zarządzanie użytkownikami

#### Dodaj użytkownika

Kliknij nazwę konta w prawym górnym rogu, a następnie ponownie na pasku bocznym.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Aby uzyskać dostęp do menu IAM, przejdź do Panelu klienta.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Następnie kliknij zakładkę `Tożsamości`{.action}, aby zarządzać użytkownikami lokalnymi.

![Dostęp do menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Następnie możesz kliknąć na `Dodaj użytkownika`{.action}.

Pojawi się okno, w którym należy uzupełnić wymagane pola. Kliknij przycisk `Zatwierdź`{.action}, aby utworzyć użytkownika.

![users-management](images/usersmanagement2.png){.thumbnail}

| Pole | Szczegóły |
|--|--|
| Identyfikator | Wpisz na przykład nazwę użytkownika lub jego funkcję. |
| E-mail | Wpisz pełny adres e-mail użytkownika. |
| Hasło | Określ hasło dla użytkownika. Użytkownik będzie mógł je zmienić po uzyskaniu uprawnień do dostępu. <br>W celu utworzenia hasła zalecamy zapoznanie się z [przewodnikiem dotyczącym zarządzania hasłami](/pages/account_and_service_management/account_information/manage-ovh-password){.external}. |
| Grupa | Wybierz grupę spośród dostępnych (patrz tabela poniżej). |
| Opis | Tutaj możesz dodać opis użytkownika. Przykład: jego rola w firmie. |

**Domyślne informacje o grupach:**

| Rola | Szczegóły |
|--|--|
| UNPRIVILEGED (Tylko Odczyt) | Dostęp w trybie odczytu do Panelu klienta OVHcloud i do wszystkich jego sekcji. |
| DEFAULT (Ograniczony administrator) | Dostęp w trybie zapisu do Panelu klienta OVHcloud i do wszystkich jego sekcji, **z wyjątkiem** zarządzania użytkownikami. |
| ADMIN (Administrator) | Dostęp w trybie zapisu do Panelu klienta OVHcloud i wszystkich jego sekcji **w tym*** zarządzanie użytkownikami. |

Użytkownik otrzyma własny identyfikator składający się z identyfikatora numerycznego Twojego konta (który możesz sprawdzić w menu “Zarządzanie użytkownikami”) i jego nazwy użytkownika — obie wartości są rozdzielone znakiem “/”.

Przykład: **1234-567-89/johnsmith**.

![users-management](images/usersmanagement3.png){.thumbnail}

Przy użyciu tego identyfikatora nowy użytkownik będzie mógł zalogować się do [Panelu klienta OVHcloud](/links/manager){.external}. 

Będzie również mógł zmienić swoje hasło i zabezpieczyć swój własny dostęp do Twojego konta, włączając procedurę weryfikacji dwuetapowej (która dotyczy wyłącznie jego dostępu jako użytkownika). W tym celu zapoznaj się z [przewodnikiem dotyczącym wdrażania weryfikacji dwuetapowej](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa){.external}.

#### Zarządzanie użytkownikami

Możesz edytować, aktywować, dezaktywować lub usunąć użytkownika, klikając przycisk `…`{.action} znajdujący się po prawej stronie użytkownika.

![users-management](images/usersmanagement4.png){.thumbnail}

Edycja użytkownika pozwala na aktualizację jego adresu e-mail, uprawnień oraz opisu.

![users-management](images/usersmanagement6.png){.thumbnail}

### Zarządzanie grupami

#### Dodaj grupę

W zakładce `Identifier`{.action} kliknij `Zgłoś grupę`{.action}.

![users-management](images/usersmanagement7.png){.thumbnail}

Wyświetli się okno, w którym należy wypełnić wymagane pola. Kliknij `Zatwierdź`{.action}, aby utworzyć grupę.

![users-management](images/usersmanagement8.png){.thumbnail}

Grupy przyznają domyślny poziom przywileju użytkownikom, których dotyczą, w zależności od wybranej przez Ciebie roli:

| Rola | Szczegóły |
|--|--|
| Brak | Brak dostępu do Panelu klienta OVHcloud, jeśli nie wdrożono żadnej polityki IAM. |
| Tylko Odczyt | Dostęp w trybie odczytu do Panelu klienta OVHcloud i do wszystkich jego sekcji. |
| Ograniczony administrator | Dostęp w trybie zapisu do Panelu klienta OVHcloud i do wszystkich jego sekcji, **z wyjątkiem** zarządzania użytkownikami. |
| Administrator | Dostęp w trybie zapisu do Panelu klienta OVHcloud i wszystkich jego sekcji **w tym*** zarządzanie użytkownikami. |

#### Zarządzaj grupami

Możesz zaktualizować lub usunąć grupę, klikając przycisk `...`{.action} po prawej stronie nazwy grupy.

![users-management](images/usersmanagement9.png){.thumbnail}

Po zmianie grupy możesz zmienić jej opis i rolę.

![users-management](images/usersmanagement10.png){.thumbnail}

## Zarządzanie uprawnieniami

Poza rolą przypisaną grupom użytkowników możesz udoskonalić uprawnienia dostępu za pomocą IAM OVHcloud.

Zapoznaj się z naszym przewodnikiem dotyczącym [zarządzania polityką IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
