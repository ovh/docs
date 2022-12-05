---
title: 'Współdzielenie folderów w interfejsie OWA'
slug: exchange_2016_wspoldzielenie_katalogu_poprzez_webmail_owa
excerpt: 'Dowiedz się, jak współdzielić foldery między kontami Exchange'
section: 'Outlook Web Application (Aplikacja WWW)'
order: 05
---

**Ostatnia aktualizacja: 07-04-2020**

## Wprowadzenie

Przyznanie pełnomocnictwa do korzystania z całego konta e-mail nie zawsze jest właściwe. Funkcja współdzielenia folderów Exchange umożliwia przyznanie innym użytkownikom dostępu do wybranych folderów na koncie przez przypisanie konkretnych uprawnień.

**Dowiedz się, jak współdzielić foldery i zdefiniować uprawnienia dostępu do nich przy użyciu interfejsu OWA (Outlook Web App).**

> [!primary]
>
> Choć ten przewodnik dotyczy usług Exchange, z instrukcji można skorzystać również w przypadku kont [E-mail Pro](https://www.ovhcloud.com/pl/emails/email-pro/).
>


## Wymagania początkowe

- skonfigurowane [rozwiązanie OVHcloud Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/)
- dostęp do konta Exchange (adres e-mail i hasło)


## W praktyce

### Krok 1: definiowanie uprawnień dostępu do folderu

Zaloguj się na konto Exchange przy użyciu interfejsu [OVHcloud webmail](https://www.ovh.pl/mail/). Kliknij prawym przyciskiem myszy folder do udostępnienia i wybierz z menu kontekstowego pozycję `Uprawnienia...`{.action}.

![sharefolder](images/exchange-folder-step1.png){.thumbnail}

W następnym interfejsie dodaj użytkownika, klikając ikonę `+`{.action}. Zacznij wpisywać nazwę w celu wyświetlenia propozycji z Twoich kontaktów, wpisz cały adres e-mail lub użyj funkcji wyszukiwania `Wyszukaj w katalogu`{.action}.

Do wyboru są zestawy już zdefiniowanych uprawnień („Poziom uprawnień”). Najłatwiej najpierw wybrać jedną z tych ról, na przykład „Autor”, aby zobaczyć uprawnienia, jakie przydzieli. Następnie wystarczy je dostosować do Twoich potrzeb, modyfikując pola wyboru.

![sharefolder](images/exchange-folder-step2aag.gif){.thumbnail}

#### Szczegóły uprawnień

- **Odczyt**

|Uprawnienie|Opis|
|---|---|
|Brak|Użytkownik nie może wyświetlać zawartości folderu.|
|Pełne szczegóły|Użytkownik może wyświetlać zawartość folderu.|


- **Dostęp z prawem usuwania**

|Uprawnienie|Opis|
|---|---|
|Brak|Użytkownik nie może usunąć żadnych elementów.|
|Własne|Użytkownik może usunąć elementy utworzone przez siebie.|
|Wszystko|Użytkownik może usunąć dowolny element w folderze.|


- **Zapis**

|Uprawnienie|Opis|
|---|---|
|Tworzenie elementów|Użytkownik może tworzyć nowe elementy w folderze.|
|Tworzenie podfolderów|Użytkownik może tworzyć nowe podfoldery w ramach współdzielonego folderu.|
|Edycja własnych|Użytkownik może edytować elementy utworzone przez siebie.|
|Edycja wszystkiego|Użytkownik może edytować dowolne elementy w folderze.|


- **Inne**

|Uprawnienie|Opis|
|---|---|
|Właściciel folderu|Użytkownik ma takie same uprawnienia do folderu jak jego właściciel (wszystkie uprawnienia).|
|Kontakt folderu|Użytkownik będzie otrzymywać powiadomienia i żądania dotyczące folderu (zmiany statusu, żądania uprawnień, komunikaty o błędach).|
|Widoczny folder|Folder będzie widoczny na koncie użytkownika.|

> [!primary]
>**Podfoldery**
> 
> - Podfoldery utworzone we współdzielonym folderze będą automatycznie dziedziczyć uprawnienia folderu nadrzędnego. Jeśli przyznasz nowe uprawnienia do współdzielonego folderu i jego podfolderów, należy ustawić uprawnienia **do poszczególnych podfolderów**.
> 
> - Jeśli współdzielisz **podfolder** istniejącego folderu, dla którego nie ustawiono uprawnień, musisz zaznaczyć co najmniej pole wyboru „Widoczny folder” dla **folderu nadrzędnego**. Bez tego podfolder nie będzie widoczny na koncie użytkownika. (Użytkownik nie będzie mógł zobaczyć zawartości folderu nadrzędnego, o ile nie przyznasz mu również uprawnienia „Odczyt”).
> 
> - Użytkownicy nie będą mogli usunąć podfolderów, których sami nie utworzyli.
> 
> - Użytkownicy z uprawnieniem „Właściciel folderu” do podfolderu mogą zmienić jego nazwę i przyznać uprawnienia do niego.
>


### Krok 2: pobieranie współdzielonego folderu

![sharefolder](images/exchange-folder-step3.png){.thumbnail}

Zaloguj się na konto Exchange przy użyciu interfejsu [OVHcloud webmail](https://www.ovh.pl/mail/). Kliknij prawym przyciskiem myszy nazwę konta w lewym menu nawigacyjnym i wybierz pozycję `Dodaj folder współdzielony...`{.action} z menu kontekstowego. W nowym oknie wpisz nazwę konta, z którego został udostępniony folder. Zacznij wpisywać nazwę w celu wyświetlenia propozycji z Twoich kontaktów, wpisz cały adres e-mail lub użyj funkcji wyszukiwania `Wyszukaj w katalogu`{.action}. Potwierdź, klikając przycisk `Dodaj`{.action}. Nowy współdzielony folder pojawi się natychmiast pod innymi folderami.


## Sprawdź również

[Korzystanie z interfejsu Outlook Web App wraz z kontem Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app/)

[Delegowanie uprawnień do konta Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/)

[Exchange: współdzielenie kalendarza w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_wspoldzielenie_kalendarza_poprzez_webmail_owa/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.
