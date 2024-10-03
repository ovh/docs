---
title: "Hosting: jak zmienić ofertę?"
excerpt: "Dowiedz się, jak zmienić formułę abonamentu na hosting OVHcloud"
updated: 2024-10-03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

[Panel klienta OVHcloud](/links/manager) pozwala na zwiększenie wydajności Twoich [ofert hostingu www](/links/web/hosting). Możesz również:

- wydajniejszego hostingu;
- więcej przestrzeni dyskowej FTP;
- dodatkowych baz danych; 
- dodatkowych adresów e-mail;
- dodatkowe funkcje, takie jak [listy mailingowe](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (od [oferta Pro](/links/web/hosting-professional-offer)) lub [usługa Web Cloud Databases](/links/web/databases){.external} (zawarte w [ofertach Performance](https://www.ovhcloud.com/pl/web/hosting/performance-hosting/performance-offer/).

**Dowiedz się, jak zmienić ofertę hostingową OVHcloud bez przerwy w działaniu usługi.**

## Wymagania początkowe

- Posiadanie [hostingu](/links/web/hosting)
- Dostęp do [panelu klienta OVHcloud](/links/manager)
- Posiadanie co najmniej kontaktu "[Administrator](/pages/account_and_service_management/account_information/managing_contacts)" dla usług, dla których chcesz zmienić subskrypcję.

## W praktyce

> [!warning]
>
> **Przed** wszelkie zmiany w aktualnej subskrypcji, sprawdź, czy dotyczą Cię następujące pytania:
>
> - [Jak zmienić mój darmowy hosting 100M na ofertę hostingu www?](#100m)
> - [Jak skorzystać z tymczasowej wydajności hostingu Performance?](#boost)
> - [Czy tracę pozostały czas na aktualny hosting w momencie zmiany oferty?](#billing)
> - [Czy mogę zmienić moją aktualną ofertę na niższą?](#checks)
>

### Zmień ofertę hostingu <a name="modify"></a>

Aby zmienić abonament, przejdź do [Panelu klienta OVHcloud](/links/manager) w części `Web Cloud`{.action}. Kliknij opcję `Hosting`{.action} i wybierz odpowiedni hosting.

W polu `Abonament` kliknij przycisk`...`{.action} po prawej stronie `Usługa`, a następnie `Zmień ofertę`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

Następnie wybierz nową subskrypcję i jej czas trwania. Zaakceptuj regulaminy i kliknij na `Wyślij`{.action}.

### Sprawdź, czy Twój hosting jest kompatybilny z ofertą z niższej gamy <a name="checks"></a>

> [!warning]
>
> Zmiana subskrypcji dla oferty z niższej gamy jest możliwa tylko wtedy, gdy jest to oferta **od razu niższa**.
> Na przykład nie można w ramach jednej operacji zmienić formuły z *Performance 2* na *Pro*.
> Musisz **najpierw** zmienić pakiet hostingowy z *Performance 2* na *Performance 1* **następnie* na *Pro*.

**Przed zmianą oferty na niższą** sprawdź 6 poniższych punktów:

#### 1 - Bazy danych Start SQL

Sprawdź, czy nowa oferta zawiera wystarczającą liczbę [baz danych](/links/web/hosting-options-startsql). Sprawdź również, czy ich rozmiary są wystarczające.

W przeciwnym razie usuń nieużywane bazy danych i w razie potrzeby zmniejsz ilość danych w nich zawartych. Ilość ta nie może przekroczyć maksymalnego rozmiaru baz danych w nowej ofercie. Jeśli potrzebujesz wsparcia w zakresie wymaganych działań, skontaktuj się z [partnerami OVHcloud](/links/partner).

Po usunięciu danych z Twoich baz, ponownie oblicz wykorzystany limit. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij opcję `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie, która się wyświetli przejdź do zakładki `Bazy danych`{.action}, następnie kliknij przycisk`...`{.action} po prawej stronie odpowiedniej bazy danych, a następnie `Przelicz rozmiar bazy`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Przeliczenie rozmiaru bazy danych może potrwać do **15 minut**. Odśwież stronę w przeglądarce internetowej, jeśli ponownie obliczony limit nie wyświetla się spontanicznie.
>

#### 2 - Web Cloud Databases

Jeśli korzystasz z oferty [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) zawartej w Twoim hostingu [Performance](/links/web/hosting-performance-offer) i chcesz przenieść swój hosting na ofertę [Pro](/links/web/hosting-professional-offer), musisz najpierw oddzielić ofertę Web Cloud Databases od hostingu.
W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij opcję `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action}. W kolumnie środkowej `Konfiguracja` kliknij przycisk `...`{.action} po prawej stronie pozycji `Web Cloud Databases`{.action}, a następnie `Odłącz`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Dzięki temu będziesz mógł zamówić ofertę Web Cloud Databases niezależną od abonamentu *Performance*. Dane z Twojego serwera zostaną zachowane.

Jeśli nie chcesz przechowywać tych danych, możesz usunąć Twoją usługę Web Cloud Databases przed przejściem na ofertę *Pro*: 

1. Wykonaj kopię zapasową danych, postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Usuń serwer Web Cloud Databases za pomocą [Panelu klienta OVHcloud](/links/manager). W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager), kliknij Twoją nazwę w prawym górnym rogu, a następnie ikonę `Produkty i usługi`{.action}. Następnie kliknij przycisk `...`{.action} po prawej stronie wiersza oferty Web Cloud Databases/Private SQL . `Usuń mój hosting Private SQL`{.action}.

#### 3 - Przestrzeń dyskowa FTP

Upewnij się, czy nowa oferta zawiera wystarczającą [przestrzeń dyskową FTP](/pages/web_cloud/web_hosting/ftp_connection), aby umożliwić import plików z Twojego aktualnego hostingu.

Aby sprawdzić rozmiar przestrzeni dyskowej FTP użytej na Twoim hostingu, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie `Informacje ogólne`{.action}, która się wyświetla, znajdź limit w sekcji `Przestrzeń dyskowa`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Adresy e-mail

Upewnij się, że w nowym pakiecie jest dostępna wystarczająca liczba dostępnych kont e-mail. W przeciwnym razie usuń nieużywane adresy e-mail po wykonaniu kopii zapasowej [kopia zapasowa](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ich zawartości, jeśli jest to konieczne.

Jeśli chcesz zachować tę samą liczbę kont e-mail i **przed zmianą hostingu na niższą ofertę**, możesz również zamówić nową usługę poczty elektronicznej **MX Plan**. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `E-maile`{.action}, po czym wybierz odpowiednią ofertę e-mail. Na stronie, która się wyświetla w ramce `Abonament`{.action} i po prawej stronie wzmianki `Usługa`{.action} kliknij przycisk `...`{.action} następnie `Zmień ofertę`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Jeśli przycisk `...`{.action} jest niedostępny w Twojej ofercie e-mail, możesz odłączyć ofertę e-mail od hostingu. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) w części `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie `Informacje ogólne`{.action}, która się wyświetla i w ramce `Konfiguracja`{.action}, kliknij przycisk `...`{.action} z prawej strony wzmianki `Adresy e-mail`{.action}, a następnie `Odłącz opcję e-mail`{.action}.
>

#### 5 - Listy mailingowe

Funkcja [Mailing Lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) jest opcjonalna dla hostingu [Perso](/links/web/hosting-personal-offer).

Aby zmienić pakiet hostingowy na ofertę [Perso](/links/web/hosting-personal-offer), należy najpierw usunąć listy mailingowe lub zamówić ofertę poczty elektronicznej zawierającą tę funkcję (**MX Plan 100** lub **MX Plan Full**) w [Panelu klienta OVHcloud](/links/manager).

W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij `E-maile`{.action}, po czym wybierz odpowiednią ofertę e-mail. Na stronie, która się wyświetla w ramce `Abonament`{.action} i po prawej stronie wzmianki `Usługa`{.action} kliknij przycisk `...`{.action} następnie `Zmień ofertę`{.action}.

>[!primary]
>
> Jeśli przycisk `...`{.action} jest niedostępny w Twojej ofercie e-mail, możesz odłączyć ofertę e-mail od hostingu. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) w części `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie `Informacje ogólne`{.action}, która się wyświetla i w ramce `Konfiguracja`{.action}, kliknij przycisk`...`{.action} z prawej strony wzmianki `Adresy e-mail`{.action}, a następnie `Odłącz opcję e-mail`{.action}.
>

#### 6 - Użytkownicy FTP

Upewnij się, czy nowa oferta ma wystarczającą liczbę użytkowników FTP.

Liczba użytkowników FTP jest widoczna w Panelu klienta OVHcloud. Po zalogowaniu przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie, która się wyświetli kliknij zakładkę `FTP-SSH`{.action}.

W dolnej części strony, która się wyświetli, znajduje się tabela zawierająca listę wszystkich użytkowników FTP utworzonych dla Twojego hostingu.

Aby usunąć użytkowników FTP, kliknij przycisk `...`{.action} po prawej stronie użytkownika FTP, którego chcesz usunąć, a następnie kliknij `Usuń`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail}

### Zakończenie

Po sprawdzeniu tych 6 punktów możesz wprowadzić [zmiana oferty](#modify).

### Szczególne przypadki

#### Posiadasz darmowy hosting 100M <a name="100m"></a>

W przypadku zmiany oferty z [darmowego hostingu 100M](/pages/web_cloud/web_hosting/activate_start10m) będziesz mógł wybrać tylko [hosting Perso](/links/web/hosting-personal-offer). Niemniej jednak, po przejściu na ofertę Perso, będziesz mógł zmienić ją na wszystkie nasze [oferty hostingu www](/links/web/hosting).

Postępuj zgodnie z [tymi instrukcjami](#modify), aby zmienić ofertę.

### Zwiększ tymczasowo swój hosting Performance <a name="boost"></a>

Dzięki opcji [Boost](/links/web/hosting-options-boost), dostępnej w naszych pakietach *Performance*, możesz tymczasowo zwiększyć zasoby CPU i RAM hostingu, aby obsłużyć tymczasowy wzrost ruchu. Jeśli czas, w którym występuje wzrost ruchu wydłuży się, możesz również [przełączyć się na ofertę Performance najwyższego poziomu](#modify), aby na stałe dysponować tymi zasobami.

> [!warning]
>
> Opcja Boost jest aktywna i płatna **do momentu jej wyłączenia**.

Jeśli opcja **Boost** odpowiada Twoim potrzebom, poniżej znajdziesz instrukcje dotyczące **włączenia** lub **wyłączenia** tej opcji na Twoim hostingu.

> [!tabs]
> **Włącz opcję Boost**
>>
>> Aby aktywować opcję Boost, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. W ramce `Informacje ogólne` na stronie, która się wyświetli kliknij przycisk`...`{.action} po prawej stronie `Boost`, a następnie `Skorzystaj z opcji Boost`{.action}.<br><br>
>> ![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>
> **Wyłącz opcję Boost**
>>
>> Aby wyłączyć opcję Boost, zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie, która się wyświetli przejdź do zakładki `Więcej` i kliknij `Skorzystaj z opcji Boost`{.action}.<br>
>> Pojawi się tabela wykorzystania opcji Boost. Kliknij `Wyłącz ofertę Boost`{.action}.<br><br>
>> ![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

### Płatności w przypadku zmiany oferty <a name="billing"></a>

Jeśli zmienisz początkową ofertę na wyższą, do kolejnej daty odnowienia początkowej subskrypcji zostanie zastosowana zasada pro rata temporis*.
Obliczenie to stanowi różnicę w cenie między Twoją ofertą początkową a nową ofertą.

> **Przykład:**<br>
>
> Zamówiłeś abonament [Perso](/links/web/hosting-personal-offer) od 1 stycznia 2024.
>
> 31 października 2024 zmienisz abonament z tej oferty **Perso** na ofertę [Pro](/links/web/hosting-professional-offer).<br>
>
> W związku z tym kwota za pozostały okres abonamentu **Perso** (2 miesiące, od 1 listopada 2024 do 1 stycznia 2025) jest automatycznie odliczana od kosztu nowego abonamentu **Pro**, do 1 stycznia 2025. Zapłacisz tylko za różnicę.
> Od dnia 1 stycznia 2025 r. abonament **Pro** będzie fakturowany zgodnie z obowiązującym cennikiem.

Postępuj zgodnie z [tymi instrukcjami](#modify), aby zmienić ofertę.

## Sprawdź również <a name="go-further"></a>

[Sprawdzanie statystyk i logów strony hostowanej w ramach oferty hostingowej](/pages/web_cloud/web_hosting/logs_and_statistics)

[Optymalizacja wydajności strony](/pages/web_cloud/web_hosting/optimise_your_website_performance)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).