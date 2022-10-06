---
title: 'Tworzenie bazy danych i zarządzanie nią w hostingu WWW'
slug: tworzenie-bazy-danych
excerpt: 'Dowiedz się, jak korzystać z baz danych zawartych w usłudze hostingu WWW OVHcloud'
section: 'Bazy danych'
order: 01
---

**Ostatnia aktualizacja: 03-02-2022**

## Wprowadzenie 

Baza danych (DB, ang. database) służy do przechowywania tak zwanych elementów dynamicznych, takich jak komentarze lub artykuły. Bazy danych są używane praktycznie we wszystkich nowoczesnych systemach zarządzania treścią (CMS, ang. Content Management System), takich jak Joomla! czy WordPress.

**Poznaj pierwsze kroki pracy z bazą danych w ramach hostingu WWW OVHcloud i dowiedz się, jak nią zarządzać.**

## Wymagania początkowe

- [pakiet hostingu WWW OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)
- dostępna baza danych zawarta w Twojej usłudze hostingu WWW
- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) z uprawnieniami niezbędnymi do zarządzania hostingiem WWW 

## W praktyce

### Krok 1: dostęp do sekcji zarządzania bazą danych w ramach hostingu WWW

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz pozycję `Web Cloud`{.action} na górnym pasku nawigacyjnym. Kliknij pozycję `Hosting`{.action}, a następnie wybierz odpowiedni pakiet hostingu WWW. Następnie przejdź do karty `Bazy danych`{.action}.

Tabela w tej sekcji zawiera wszystkie bazy danych utworzone w ramach Twojego pakietu hostingu WWW.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Krok 2: tworzenie bazy danych

Bazę danych można utworzyć na dwa sposoby:

- **Jeśli jeszcze nie masz utworzonej bazy danych**\: kliknij przycisk `Utwórz bazę danych`{.action}.

- **Jeśli już masz utworzoną bazę danych**\: kliknij przycisk `Działania`{.action}, a następnie `Utwórz bazę danych`{.action}.

W wyświetlonym oknie dialogowym wybierz odpowiednie informacje, a następnie kliknij przycisk `Dalej`{.action}.

|Informacje|Opis|  
|---|---|  
|Silnik bazy danych|Wybierz silnik, z którego będzie korzystać baza danych. W ramach usługi [hostingu WWW OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) są dostępne tylko bazy danych z silnikiem MySQL.|  
|Wersja bazy danych|Wybierz wersję silnika bazy danych. Sprawdź, czy Twoja strona internetowa jest zgodna z wybraną wersją. |  
|Typ bazy danych|Wybierz rozmiar bazy danych. Rozmiar odnosi się do dostępnego miejsca na przechowywanie danych w bazie.|   

Podaj żądane informacje, a następnie kliknij przycisk `Dalej`{.action}.

|Informacje|Opis|   
|---|---|   
|Użytkownik|Podaj własną nazwę użytkownika, która będzie powiązana z bazą danych.|   
|Hasło|Podaj hasło dla tego użytkownika, a następnie je potwierdź.|   

Sprawdź, czy wszystkie wyświetlane informacje są prawidłowe. Jeśli tak, kliknij przycisk `Potwierdź`{.action}, aby uruchomić proces tworzenia bazy danych. Aby utworzyć wiele baz danych (w zależności od maksymalnej liczby baz danych zawartych w usłudze), powtórz ten proces odpowiednią ilość razy.

> [!primary]
>
> Ze względów bezpieczeństwa przestrzegaj warunków wymaganych przy wyborze hasła. Zalecamy, aby:
>
> - nie używać dwukrotnie tego samego hasła;
>
> - ustawić hasło, które nie zawiera danych osobowych (takich jak nazwisko, imię, data urodzenia itp.);
>
> - regularnie zmieniać hasło;
>
> - nie zapisywać haseł na kartce ani nie wysyłać go innym osobom używając Twojego adresu e-mail;
>
> - nie zachowywać haseł w przeglądarce, nawet jeśli zostanie wyświetlona taka propozycja.
>

> [!warning]
>Po zmianie hasła do bazy danych należy odpowiednio zaktualizować wszystkie aplikacje, które mają do niej dostęp.
>


![databasecreation](images/database-creation-step2.png){.thumbnail}

### Krok 3: zarządzanie bazą danych

> [!warning]
>Ten przewodnik nie zastępuje pomocy specjalisty, takiego jak webmaster. W przypadku wystąpienia problemów zalecamy skorzystać z usług specjalisty i/lub skontaktować się z wydawcą oprogramowania, ponieważ nie będziemy w stanie udzielić pomocy. Więcej informacji zawiera sekcja „Sprawdź również” tego przewodnika.
>

Teraz możesz korzystać z bazy danych. Aby to zrobić, są potrzebne określone wcześniej dane logowania, czyli nazwa użytkownika i hasło, zdefiniowana nazwa bazy danych i adres serwera. Te informacje są niezbędne, aby strona internetowa mogła się łączyć z bazą danych.

W zależności od używanego oprogramowania może być konieczne ręczne skonfigurowanie połączenia albo wystarczy interfejs wygenerowany przez stronę internetową. Niniejsza procedura wiąże się z konfigurowaniem strony internetowej, a nie usług świadczonych przez OVHcloud, więc zalecamy skorzystanie z odpowiednich informacji dostępnych w Internecie. 

#### Dostęp do interfejsu phpMyAdmin

OVHcloud udostępnia narzędzie online do zarządzania bazami danych — phpMyAdmin. Aby znaleźć link dostępu do tej aplikacji, na karcie `Bazy danych`{.action} kliknij ikonę `...`{.action} po prawej stronie bazy danych, a następnie wybierz z menu rozwijanego polecenie `Dostęp do phpMyAdmin`{.action}.

Dane logowania będą już wypełnione w nowym oknie, więc wpisz tylko hasło do bazy danych. To również dobry sposób na sprawdzenie swojego bieżącego hasła, jeśli na przykład w systemie CMS występują problemy w postaci komunikatu o błędzie „odmowa dostępu”.

![databasecreation](images/database-creation-step3.png){.thumbnail}


#### Korzystanie z kopii zapasowych bazy danych

W przypadku każdej bazy danych w ramach hostingu WWW codziennie będą automatycznie tworzone migawki (maksymalnie 32). To oznacza, że można łatwo przywrócić wcześniejszą wersję bazy danych z poziomu Panelu klienta OVHcloud. 

Aby sprawdzić, czy są dostępne migawki oraz ich sygnaturę czasową utworzenia, kliknij symbol obok zielonego kółka w tabeli baz danych. Z tego miejsca można też pobrać kopię zapasową bazy danych. Szczegółowe informacje na ten temat zawiera przewodnik [Pobieranie kopii zapasowej bazy danych w ramach hostingu WWW](../eksport-bazy-danych/).

#### Typowe problemy

**Zbyt dużo połączeń**

Bazy danych w ramach hostingu WWW mają limit 30 jednoczesnych połączeń (zmienna systemowa *max_connections*). Aby zapobiec takim błędom, należy zoptymalizować żądania SQL. Jeśli mimo tego problem będzie się powtarzać, należy rozważyć podjęcie innych środków, tj. wybór prywatnej bazy danych SQL ([CloudDB](https://www.ovh.pl/cloud/cloud-databases/)) lub [zmianę pakietu hostingu na wyższy](https://www.ovhcloud.com/pl/web-hosting/uc-best-web-hosting/). 

**Błędy połączenia typu „nie można znaleźć”**

Najlepszą praktyką jest używanie rzeczywistej nazwy bazy danych w skryptach i plikach konfiguracji, a nie adresów IP czy nazwy _localhost_.

**Przekroczenie limitu przydziału bazy danych**

Jeśli baza danych w ramach hostingu WWW przekroczy zalecane miejsce w przestrzeni dyskowej, zostanie automatycznie przełączona na tryb „tylko do odczytu” / „tylko wybór”. Administrator dostanie powiadomienie e-mail.

Po optymalizacji bazy danych (oczyszczeniu) można ponownie obliczyć limit w Panelu klienta OVHcloud, aby ją odblokować. Najlepszą praktyką jest pobranie bazy danych, wprowadzenie zmian lokalnie, a następnie zastąpienie bazy przez import. Więcej informacji zawiera [ten przewodnik](../hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony/).


## Sprawdź również

[Zmiana hasła do bazy danych w ramach hostingu WWW](../zmiana-hasla-do-bazy-danych/)

[Pobieranie kopii zapasowej bazy danych w ramach hostingu WWW](../eksport-bazy-danych/)

[Import kopii zapasowej do bazy danych hostingu WWW](../hosting_www_importowanie_bazy_danych_mysql/)

[Optymalizacja wydajności witryny internetowej](../hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
