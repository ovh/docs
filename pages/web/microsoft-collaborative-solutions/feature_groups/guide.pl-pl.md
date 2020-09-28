---
title: 'Korzystanie z grup (mailing listy) dostępnych z kontem Exchange'
excerpt: 'Dowiedz się, jak zarządzać listami wysyłkowymi w programie Exchange'
slug: exchange_20132016_korzystanie_z_grup_wewnetrzne_grupy_dyskusyjne
section: 'Funkcjonalności i współdzielenie Exchange'
legacy_guide_number: g1258
---

**Ostatnia aktualizacja: 26-02-2020**


## Wprowadzenie

Grupy w programie Exchange umożliwiają komunikację wielu uczestników naraz przez wysyłanie e-maili na unikatowy adres grupy. Dzięki tej funkcji współpracy można tworzyć listy wysyłkowe obejmujące nie tylko użytkowników programu Exchange, ale też kontakty zewnętrzne, a także zarządzać nimi.

**Dowiedz się, jak korzystać z grup programu Exchange za pośrednictwem Panelu klienta OVHcloud oraz interfejsu OWA (Outlook Web App).**


## Wymagania początkowe

- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- skonfigurowane [rozwiązanie OVHcloud Exchange](https://www.ovh.pl/emaile/hosted-exchange/)


## W praktyce

### Krok 1: utworzenie nowej grupy

Najpierw zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), przejdź do sekcji „Web” i wybierz usługę Exchange z kolumny znajdującej się w obszarze `Microsoft`{.action} `Exchange`{.action} (po lewej stronie). Kliknij kartę `Grupy`{.action} w menu poziomym.

![contactgroups](images/exchange-groups-step1.png){.thumbnail}

Kliknięcie przycisku `Utwórz grupę kontaktów`{.action} spowoduje otwarcie nowego okna, w którym możesz zdefiniować ustawienia grupy:

![contactgroups](images/exchange-groups-step2.png){.thumbnail}

|Nazwa|Opis|
|---|---|
|Adres e-mail|Nowy adres do wysyłania wiadomości na listę wysyłkową. Uwaga: nie można podać istniejącego adresu e-mail.|
|Nazwa grupy|Nazwa wyświetlana, która będzie widoczna w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager) oraz w interfejsie [OVHcloud webmail](https://www.ovh.pl/mail/) (OWA).|
|Maks. rozmiar poczty przychodzącej/wychodzącej|Możesz określić maksymalny rozmiar przychodzących i wychodzących e-maili.|
|Ukryj w programie Outlook|Po zaznaczeniu tego pola wyboru adres grupy nie będzie widoczny na liście adresów usługi Exchange.|
|Wymagane uwierzytelnienie|Po zaznaczeniu tego pola wyboru tylko użytkownicy tej samej platformy będą mogli wysyłać wiadomości przy użyciu adresu grupy.|

> [!primary]
>
Opcje „Zarządzaj subskrybentami” i „Zarządzaj anulowaniem subskrypcji” zostały wyłączone przez administratorów ze względów bezpieczeństwa. Przepraszamy za niedogodności.
>

Kliknij przycisk `Dalej`{.action}, aby kontynuować.

Na drugiej stronie zdefiniuj członków grupy i wybierz „administratorów”. Do wyboru będą tylko adresy e-mail i kontakty zewnętrzne, które już zostały utworzone w usłudze.

![contactgroups](images/exchange-groups-step3.png){.thumbnail}

Administratorów również należy ustawić jako „Kontakty”, aby mogli odbierać e-maile grupy.
Kliknij przycisk `Dalej`{.action}, aby kontynuować. Zatwierdź wybrane opcje, klikając przycisk `Potwierdź`{.action}.


### Krok 2: zarządzanie grupami

Nowo utworzona grupa będzie działać już po kilku minutach. Opisane powyżej ustawienia można dostosować z poziomu listy grup. W tym celu kliknij ikonę `...`{.action} i wybierz pozycję z menu.

![contactgroups](images/exchange-groups-step4.png){.thumbnail}

Dodatkowo będzie widoczna pozycja menu `Zarządzaj delegowaniem`{.action}. Opcja ta umożliwia delegowanie uprawnień dostępu w taki sam sposób, jak w przypadku konta Exchange. Więcej informacji zawiera [ten przewodnik](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/).

![contactgroups](images/exchange-groups-step5.png){.thumbnail}

> [!primary]
>
Zastosowanie zmian wprowadzonych w usłudze może zająć kilka minut. Status większości operacji można sprawdzić po wybraniu pozycji `Więcej+`{.action} i `Ostatnie zadania`{.action} z menu poziomego.
>


### Krok 3: wysyłanie wiadomości do grupy w interfejsie OWA

Listę wysyłkową można przetestować za pośrednictwem interfejsu [OVHcloud webmail](https://www.ovh.pl/mail/) (OWA): wystarczy wysłać e-mail na adres grupy.

![contactgroups](images/exchange-groups-step6.png){.thumbnail}


## Sprawdź również

[Delegowanie uprawnień do konta Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2013_przyznanie_uprawnien_full_access/)

[Przewodnik dotyczący korzystania z Outlook Web App (OWA)](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_przewodnik_dotyczacy_korzystania_z_outlook_web_app/)

[Exchange 2016: współdzielenie kalendarza w interfejsie OWA](https://docs.ovh.com/pl/microsoft-collaborative-solutions/exchange_2016_wspoldzielenie_kalendarza_poprzez_webmail_owa/)

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.