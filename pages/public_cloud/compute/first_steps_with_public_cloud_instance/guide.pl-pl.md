---
title: 'Zarządzanie instancjami Public Cloud'
excerpt: 'Dowiedz się, jak zarządzać instancjami Public Cloud w Panelu klienta OVHcloud'
updated: 2024-02-20
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Możesz zarządzać instancjami Public Cloud w [Panelu client](/links/manager).

**Niniejszy przewodnik opisuje działania dostępne w Panelu klienta OVHcloud dla instancji Public Cloud.**

## Wymagania początkowe

- Projekt [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Instancja [Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) w Twoim projekcie
- Dostęp do [Panelu client OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](/links/manager) i otwórz swój projekt `Public Cloud`{.action}. 

### Korzystanie z interfejsu zarządzania instancjami

Kliknij `Instances`{.action} w menu po lewej stronie. 

![public-cloud](images/compute-2024.png){.thumbnail}

Strona ta zawiera listę wszystkich instancji Public Cloud i niektórych ich właściwości:

- ID instancji, wymagane dla niektórych połączeń API;
- lokalizacja centrum danych, czyli region instancji;
- model instancji;
- obraz, czyli system operacyjny zainstalowany na instancji;
- adres IPv4 instancji;
- adres prywatny aktualnie przypisany do instancji;
- dodatkowe wolumeny (dyski) aktualnie przypisane do instancji;
- status instancji, wskazujący, czy jest ona `włączona`.

### Opcje zarządzania na dashboardzie instancji

Na stronie z interfejsem zarządzania instancjami kliknij nazwę instancji.

Wybierz odpowiednią opcję w polu po lewej stronie "Zarządzanie".

![public-cloud](images/management.png){.thumbnail}

Działania te są również dostępne na stronie z interfejsem zarządzania instancjami, jeśli klikniesz przycisk `...`{.action} w tabeli.

#### Edycja konfiguracji instancji

Kliknij `Edytuj`{.action}.

Na nowej stronie, która się wyświetla pojawi zmieniona wersja opcji [tworzenia instancji](/pages/public_cloud/compute/public-cloud-first-steps), w której możesz zmienić następujące elementy:

- **Zmień nazwę**: możesz nadać instancji nazwę, aby ułatwić jej identyfikację.
- **Zmień obraz**: możesz wybrać inny system operacyjny dla instancji (pamiętaj, że reinstalacja instancji spowoduje usunięcie wszystkich zawartych w niej danych).
- **Zmień model**: możesz zmienić model instancji. Więcej informacji na temat opcji znajdziesz w [tym przewodniku](/pages/public_cloud/compute/public-cloud-first-steps#model).
- **Zmień okres fakturowania**: możesz zmienić okres fakturowania instancji z godzinowego na miesięczny. Więcej informacji znajdziesz w [tym przewodniku](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

#### Utwórz kopię zapasową instancji

Kliknij `Utwórz kopię zapasową`{.action}.

Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem "[Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance)". 

#### Utwórz automatyczny backup instancji

Kliknij `Utwórz automatyczną`{.action} kopię zapasową.

Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem "[Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance#tworzenie-zautomatyzowanych-kopii-zapasowych-instancji)".

#### Zatrzymanie instancji

Kliknij przycisk `Zatrzymaj`{.action}.

Spowoduje to przełączenie instancji w stan `Wyłączona`, ale nadal będzie naliczana ta sama cena za instancję. Więcej informacji znajdziesz w przewodniku "[Wstrzymanie lub uśpienie instancji](/pages/public_cloud/compute/suspend_or_pause_an_instance#zatrzymaj-suspend-instancje)".

Kliknij `Uruchom`{.action}, aby ponownie włączyć instancję.

#### Korzystanie z trybu Rescue

Kliknij `Zrestartuj w trybie Rescue`{.action}.

Uruchomi to tryb Rescue dla instancji. Aby uzyskać szczegółowe informacje, zapoznaj się z przewodnikiem [Jak aktywować tryb ratunkowy na instancji Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

#### Restart instancji 

> [!warning]
> Opcja uruchamiania bez wykonaj restart programowy (soft) nie jest aktualnie dostępna dla instancji Metal.
>

- Kliknij przycisk `Wykonaj restart programowy (soft)`{.action}, aby wykonać restart programowy.
- Kliknij `Wykonaj restart sprzętowy (hard)`{.action}, aby rozpocząć reboot na poziomie sprzętowym.

Potwierdź zlecenie restartu w oknie, które się wyświetli.

#### Zawieś (*shelve*) instancję

Kliknij `Zawieś`{.action}.

Wówczas instancja stanie się "*shelved*" wyświetlanym tutaj jako `Zawieszona`. Zapoznaj się z przewodnikiem "[Wstrzymanie lub uśpienie instancji](/pages/public_cloud/compute/suspend_or_pause_an_instance#zawies-shelve-instancje)", aby uzyskać więcej informacji na temat różnych stanów zawieszenia instancji.

Kliknij `Reaktywuj`{.action}, aby przywrócić stan `Włączona` instancji.

#### Reinstalacja instancji 

Kliknij `Reinstalacja`{.action}.

Operacja ta spowoduje ponowną instalację instancji za pomocą tego samego systemu operacyjnego, pod warunkiem, że obraz jest zawsze obsługiwany.

Pamiętaj, że reinstalacja **usuwa wszystkie dane** aktualnie przechowywane na Twojej instancji.

#### Usuwanie instancji

Kliknij `Usuń`{.action}.

Operacja ta spowoduje definitywne usunięcie instancji oraz wszystkich jej danych.

Potwierdź zlecenie usunięcia w oknie, które się wyświetli.

> [!warning]
> Usunięcie instancji nie powoduje automatycznego usunięcia wszystkich powiązanych z nią opcji (storage, snapshot, backup, itp...). Upewnij się, że wszystkie inne opcje powiązane z instancją również zostały usunięte, dzięki czemu przestaniesz być fakturowany.
>

### Dostęp do konsoli VNC <a name="accessvnc"></a>

Kliknij `Instances`{.action} w menu po lewej stronie. Na stronie z interfejsem zarządzania instancjami kliknij nazwę instancji w tabeli.

Następnie kliknij kartę `Konsola VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

Konsola VNC zapewnia bezpośredni dostęp do Twojej instancji. Aby dostęp ten działał, najpierw skonfiguruj nazwę użytkownika i hasło dla instancji. 

Aby uzyskać więcej informacji, zapoznaj się z naszym przewodnikiem "[Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console)".

## Sprawdź również

[Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps)

[Prezentacja programu "Horyzont"](/pages/public_cloud/compute/introducing_horizon)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.