---
title: 'Zarządzanie użytkownikami'
slug: zarzadzanie_uzytkownikami
excerpt: 'Dowiedz się, jak dodawać użytkowników z poziomu konta OVHcloud'
section: Pierwsze kroki
---

**Ostatnia aktualizacja z dnia 27-05-2020**

## Wprowadzenie

OVHcloud umożliwia tworzenie użytkowników, którzy mogą działać w trybie odczytu lub zapisu w Twoim Panelu klienta. Dzięki temu możesz przyznać członkom Twojej firmy dostęp do usług OVHcloud, i to bez konieczności podejmowania ryzykownych działań, takich jak udostępnianie hasła lub kodu do weryfikacji dwuetapowej.

> [!primary]
>
> Zarządzanie użytkownikami różni się od zarządzania kontaktami. Użytkownik ma jako minimum dostęp w trybie odczytu do wszystkich sekcji w Panelu klienta.
>
> Zarządzanie kontaktami ma z kolei na celu całkowite oddelegowanie zarządzania aspektami administracyjnymi, technicznymi lub księgowymi jednej lub kilku usług na koncie OVHcloud. Więcej szczegółów dotyczących zarządzania kontaktami znajdziesz w [tym przewodniku](../zarzadzanie_kontaktami/).
>

**Ten przewodnik zawiera szczegółowe informacje na temat uprawnień, jakie może posiadać użytkownik, oraz na temat sposobów dodawania użytkowników i zarządzania nimi.**

## Wymagania początkowe

- Posiadanie aktywnego konta OVHcloud.
- Dostęp do Panelu klienta.

## W praktyce

### Etap 1: Poznanie różnych uprawnień użytkowników

Każdemu użytkownikowi możesz przyznać jeden z trzech poziomów uprawnień.

| Uprawnienia | Szczegóły |
|----------------|----------------------------------------------------------------------------------------------------------------------|
| Żaden | Dostęp w trybie odczytu do Panelu klienta i wszystkich jego sekcji. |
| Użytkownik | Dostęp w trybie zapisu do Panelu klienta i wszystkich jego sekcji, **z wyjątkiem** zarządzania użytkownikami. |
| Administrator | Dostęp w trybie zapisu do Panelu klienta i wszystkich jego sekcji, **w tym** do zarządzania użytkownikami. |

#### Przykład zarządzania użytkownikami

Właściciel konta xx11111-ovh tworzy dwóch użytkowników:

- użytkowniczka Jane, która ma uprawnienia na poziomie **Użytkownik**, a zatem może działać w trybie zapisu we wszystkich sekcjach konta, z wyjątkiem zarządzania użytkownikami;
- użytkownik Martin, który ma uprawnienia na poziomie **Żaden**, a zatem może jedynie przeglądać wszystkie sekcje konta.

Właściciel konta xx11111-ovh obowiązkowo ma uprawnienia na poziomie **Administrator** i może działać w trybie zapisu w całym Panelu klienta. Może również dodawać nowych i usuwać istniejących użytkowników.

![users-management](images/umv4.png){.thumbnail}

### Etap 2: Dodawanie użytkownika

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, w prawym górnym rogu kliknij `Twoją nazwę użytkownika`{.action} (1) i wybierz `Moje konto`{.action} (2).
Następnie wybierz kartę `Zarządzanie użytkownikami`{.action} (3), a potem `Dodaj użytkownika`{.action} (4).

![users-management](images/hubusers.png){.thumbnail}

Pojawi się okno, w którym należy uzupełnić wymagane pola. Kliknij przycisk `Zatwierdź`{.action}, aby utworzyć użytkownika.

![users-management](images/usersmanagement2.png){.thumbnail}

| Pole | Szczegóły |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identyfikator | Wpisz na przykład nazwę użytkownika lub jego funkcję. |
| E-mail | Wpisz pełny adres e-mail użytkownika. |
| Hasło | Określ hasło dla użytkownika. Użytkownik będzie mógł je zmienić po uzyskaniu uprawnień do dostępu. <br>W celu utworzenia hasła zalecamy zapoznanie się z [przewodnikiem dotyczącym zarządzania hasłami](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/){.external}. |
| Uprawnienia | Wybierz poziom spośród następujących: Żaden/Użytkownik/Administrator. |
| Opis | Tutaj możesz dodać opis użytkownika. Przykład: jego rola w firmie. |

Użytkownik otrzyma własny identyfikator składający się z identyfikatora numerycznego Twojego konta (który możesz sprawdzić w menu „Zarządzanie użytkownikami”) i jego nazwy użytkownika — obie wartości są rozdzielone znakiem „/”.

Przykład: **1234-567-89/james.smith**.

![users-management](images/usersmanagement3.png){.thumbnail}

Przy użyciu tego identyfikatora nowy użytkownik będzie mógł zalogować się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. 

Będzie również mógł zmienić swoje hasło i zabezpieczyć swój własny dostęp do Twojego konta, włączając procedurę weryfikacji dwuetapowej (która dotyczy wyłącznie jego dostępu jako użytkownika). W tym celu zapoznaj się z [przewodnikiem dotyczącym wdrażania weryfikacji dwuetapowej](../zabezpieczenie-konta-za-pomoca-2FA/){.external}.

### Etap 3: Zarządzanie użytkownikami

Możesz edytować, aktywować, dezaktywować lub usunąć użytkownika, klikając przycisk `…`{.action} znajdujący się po prawej stronie użytkownika.

![users-management](images/usersmanagement4.png){.thumbnail}

Edycja użytkownika pozwala na aktualizację jego adresu e-mail, uprawnień oraz opisu.

![users-management](images/usersmanagement6.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en>.
