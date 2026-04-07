---
title: 'Zarządzanie instancjami Public Cloud'
excerpt: 'Dowiedz się, jak zarządzać instancjami Public Cloud w Panelu klienta OVHcloud'
updated: 2026-02-24
---

## Wprowadzenie

Możesz zarządzać instancjami Public Cloud w [Panelu klienta OVHcloud](/links/manager).

**Niniejszy przewodnik opisuje działania dostępne w Panelu klienta OVHcloud dla instancji Public Cloud.**

## Wymagania początkowe

- Projekt [Public Cloud](/links/public-cloud/public-cloud) na Twoim koncie OVHcloud
- Instancja [Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) w Twoim projekcie

<!-- CP-NAV-START:publiccloud-projects -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ścieżka nawigacji:** `Public Cloud`{.action} > Wybierz projekt

---
<!-- CP-NAV-END:publiccloud-projects -->

## W praktyce

### Korzystanie z interfejsu zarządzania instancjami

Kliknij `Instancje`{.action} w menu po lewej stronie.

Strona ta zawiera listę wszystkich instancji Public Cloud i niektórych ich właściwości:

- ID instancji, wymagane dla niektórych wywołań API;
- lokalizacja centrum danych, czyli region instancji;
- model instancji;
- obraz, czyli system operacyjny zainstalowany na instancji;
- adres IPv4 instancji;
- adres prywatny aktualnie przypisany do instancji;
- dodatkowe wolumeny (dyski) aktualnie przypisane do instancji;
- status instancji, wskazujący, czy jest ona w stanie `Włączona`.

### Opcje zarządzania na dashboardzie instancji

Na stronie zarządzania instancjami kliknij nazwę odpowiedniej instancji.

Wyświetli się strona `Informacje ogólne`, która zawiera główne szczegóły i stan operacyjny Twojej instancji (status, zasoby, sieć, dostęp i metadane).

Niektóre z tych operacji są również dostępne na stronie zarządzania instancjami po kliknięciu przycisku `...`{.action} w tabeli.

#### Edycja konfiguracji instancji

Kliknij `Zmień obraz`{.action} lub otwórz `Dodatkowe działania`{.action} i wybierz `Edytuj`{.action}.

Na nowej stronie wyświetli się zmodyfikowana wersja opcji [tworzenia instancji](/pages/public_cloud/compute/public-cloud-first-steps), w której możesz zmienić następujące elementy:

- **Zmiana nazwy instancji**: możesz nadać instancji nazwę, aby ułatwić jej identyfikację.
- **Zmiana obrazu**: możesz wybrać inny system operacyjny dla instancji (pamiętaj, że reinstalacja instancji spowoduje usunięcie wszystkich zawartych w niej danych).
- **Zmiana modelu**: możesz zmienić model instancji. Więcej informacji na temat opcji znajdziesz w [tym przewodniku](/pages/public_cloud/compute/public-cloud-first-steps#model).
- **Zmiana typu rozliczenia**: możesz zmienić okres rozliczeniowy instancji z godzinowego na miesięczny. Więcej informacji znajdziesz w [tym przewodniku](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

#### Tworzenie kopii zapasowej instancji

Kliknij `Utwórz kopię zapasową`{.action}.

Więcej informacji znajdziesz w naszym przewodniku [Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance).

#### Usuwanie instancji

Kliknij `Usuń`{.action}.

Ta operacja definitywnie usunie instancję i wszystkie przechowywane na niej dane.

Potwierdź usunięcie w oknie, które się wyświetli.

> [!warning]
> Usunięcie instancji nie powoduje automatycznego usunięcia wszystkich powiązanych z nią opcji (storage, snapshot, backup, itp...). Upewnij się, że wszystkie inne opcje powiązane z instancją również zostały usunięte, aby przestać być fakturowanym.
>

#### Przypisanie wolumenu

Kliknij `Przypisz wolumen`{.action}.

Wybierz wolumen, który chcesz powiązać z instancją, a następnie kliknij `Potwierdź`{.action}. Po przyłączeniu wolumen jest natychmiast dostępny i może zostać zamontowany z poziomu systemu operacyjnego instancji.

#### Zmiana rewersu DNS

Kliknij `⋮`{.action}, a następnie `Zmień rewers DNS`{.action}.

Więcej informacji znajdziesz w przewodniku [Konfiguracja rewersu DNS instancji](/pages/public_cloud/compute/setup_instance_reverse).

#### Konfiguracja zapory

Kliknij `⋮`{.action}, a następnie `Konfiguracja zapory`{.action}.

Więcej informacji znajdziesz w przewodniku [Aktywacja i konfiguracja Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

#### Zarządzanie prywatnymi sieciami

Kliknij `⋮`{.action}, a następnie `Zarządzaj prywatnymi sieciami`{.action}.

Więcej informacji znajdziesz w przewodniku [Tworzenie sieci prywatnej z bramą Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway).

#### Przypisanie sieci

Kliknij `⋮`{.action}, a następnie `Przypisz sieć`{.action}.

Wybierz odpowiednią sieć z listy rozwijanej, a następnie kliknij `Potwierdź`{.action}.

#### Dodatkowe działania

Kliknij `Dodatkowe działania`{.action}

##### Tworzenie automatycznej kopii zapasowej instancji

Kliknij `Utwórz automatyczną kopię zapasową`{.action}.

Więcej informacji znajdziesz w naszym przewodniku [Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance#tworzenie-zautomatyzowanych-kopii-zapasowych-instancji).

##### Zatrzymanie instancji

Kliknij `Zatrzymaj`{.action}.

Spowoduje to przełączenie instancji w stan `Wyłączona`, ale nadal będziesz obciążany tą samą ceną za instancję. Więcej informacji znajdziesz w naszym przewodniku [Wstrzymanie lub uśpienie instancji](/pages/public_cloud/compute/suspend_or_pause_an_instance#zatrzymaj-suspend-instancje).

Kliknij `Uruchom`{.action}, aby ponownie aktywować instancję.

##### Korzystanie z trybu Rescue

Kliknij `Restartuj w trybie Rescue`{.action}.

Operacja ta aktywuje tryb Rescue dla instancji. Więcej informacji znajdziesz w naszym przewodniku [Jak aktywować tryb ratunkowy na instancji Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

##### Restart instancji

> [!warning]
> Opcja restartu programowego (soft) nie jest aktualnie dostępna dla instancji Metal.
>

- Kliknij `Restart programowy (soft)`{.action}, aby wykonać restart na poziomie oprogramowania.
- Kliknij `Restart sprzętowy (hard)`{.action}, aby wykonać restart na poziomie sprzętowym.

Potwierdź zlecenie restartu w oknie, które się wyświetli.

##### Zawieszenie (*shelve*) instancji

Kliknij `Zawieś`{.action}.

Spowoduje to przejście instancji w stan „*shelved*", wyświetlany tutaj jako `Zawieszona`. Więcej informacji na temat różnych stanów zawieszenia instancji znajdziesz w naszym przewodniku [Wstrzymanie lub uśpienie instancji](/pages/public_cloud/compute/suspend_or_pause_an_instance#zawies-shelve-instancje).

Kliknij `Reaktywuj`{.action}, aby przywrócić stan `Włączona` instancji.

##### Reinstalacja instancji

Kliknij `Reinstalacja`{.action}.

Operacja ta spowoduje ponowną instalację instancji z tym samym systemem operacyjnym, pod warunkiem że obraz jest nadal obsługiwany.

Pamiętaj, że reinstalacja **usuwa wszystkie dane** aktualnie przechowywane na Twojej instancji.

### Dostęp do konsoli VNC <a name="accessvnc"></a>

Kliknij `Instancje`{.action} w menu po lewej stronie. Na stronie zarządzania instancjami kliknij nazwę instancji w tabeli.

Przejdź z dashboardu na kartę `Konsola VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

Konsola VNC zapewnia bezpośredni dostęp do Twojej instancji. Aby ten dostęp działał, musisz najpierw skonfigurować nazwę użytkownika i hasło na instancji.

Więcej informacji o wymaganych krokach znajdziesz w naszym przewodniku [Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console).

## Sprawdź również

[Tworzenie pierwszej instancji Public Cloud i łączenie się z nią](/pages/public_cloud/compute/public-cloud-first-steps)

[Prezentacja Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).
