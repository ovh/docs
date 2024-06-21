---
title: "Tutorial - Korzystanie z Cyberduck na moim hostingu"
excerpt: "Dowiedz się, jak korzystać z aplikacji Cyberduck, aby zalogować się do hostingu OVHcloud"
updated: 2024-02-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Cyberduck, dostępny dla systemów macOS i Windows, to aplikacja open-source do transferu plików. Możesz zalogować się do przestrzeni dyskowej FTP Twojego hostingu (za pomocą protokołu FTP lub SFTP).

Aby pobrać Cyberduck, przejdź do [oficjalnej strony](https://cyberduck.io/) aplikacji.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/logo.png){.thumbnail}

> [!primary]
>
> - Cyberduck to aplikacja dostępna dla systemów macOS i Windows. Ponieważ interfejs i funkcje Cyberduck są stosunkowo podobne w obu systemach operacyjnych, tutorial został opracowany na maszynie z systemem Windows.
> - Niniejszy przewodnik został przygotowany w darmowej wersji aplikacji 8.7.2 pobranej z [oficjalnej strony](https://cyberduck.io/).
>

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) lub skontaktowanie się z wydawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji zawiera sekcja [Sprawdź również](#go-further) w tym przewodniku.
>

## Wymagania początkowe

- Posiadanie [hostingu web](/links/web/hosting){.external}.
- Pobranie i zainstalowanie aplikacji Cyberduck na komputerze.

## W praktyce

### Interfejs

Po uruchomieniu aplikacji pojawi się poniższy interfejs.

- Górna część otoczona pomarańczowym paskiem odpowiada paskowi narzędzi. Pozwala ona na nawiązanie połączenia z przestrzenią hostingu, przeglądanie drzewa katalogów i plików, sprawdzanie historii operacji i wielu innych operacji.
- Poniżej znajduje się zawartość, którą chcesz wyświetlić. Na przykład po kliknięciu ikony `History`{.action} pojawi się lista działań.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/start-page.png){.thumbnail}

### Personalizacja wyświetlania Cyberduck

Możesz spersonalizować sposób wyświetlania Cyberduck, aby był bardziej wydajny i osobisty.

W menu głównym na górze interfejsu kliknij `View`{.action}, a następnie `Customize Toolbar...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-toolbar.png){.thumbnail}

W oknie, które się pojawi, przeciągnij żądane elementy na pasek narzędzi. Na przykład, jeśli chcesz dodać ikonę `Download`{.action} do paska narzędzi, przeciągnij i upuść ikonę `Download`{.action} na pasek narzędzi. Aby zatwierdzić zmiany, kliknij `Done`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-display.png){.thumbnail}

### Skorzystaj z oferty Cyberduck

#### Połączenie SFTP

> [!warning]
>
> Ze względów bezpieczeństwa nie zaleca się logowania przez FTP. Większość systemów operacyjnych zakazuje teraz łączenia się przez FTP. Wybierz połączenie SFTP.
>

Aby zalogować się do przestrzeni hostingu, wykonaj następujące kroki:

**1.** Na pasku narzędzi kliknij `Open Connection`{.action}

**2.** Z rozwijanego menu (pomarańczowa ramka obrazu) wybierz opcję `SFTP (SSH File Transfert Protocol)`{.action}

**3.** Wprowadź dane do logowania do przestrzeni FTP:

- Serwer (Serwer)
- Username (Nazwa użytkownika)
- Password (Hasło)
- Port (22)

![hosting](/pages/assets/screens/other/web-tools/cyberduck/sftp-connection.png){.thumbnail}

> [!success]
>
> - Możesz zarejestrować hasło w Cyberduck zaznaczając opcję "Add to keychain`{.action}. Jeśli nie zaznaczysz tego pola, wprowadź hasło, aby zalogować się ponownie do Twojej przestrzeni hostingowej.
> - Jeśli nie znasz wszystkich swoich danych FTP (serwer, dane do logowania, etc.), zapoznaj się z przewodnikiem "[Logowanie do przestrzeni dyskowej FTP Twojego hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)".
> 

Po pierwszym zalogowaniu do przestrzeni hostingowej wyświetli się okno z tytułem `Modified fingerprint`{.action}. Zaznacz kratkę `Always`{.action} i zatwierdź. Pozwoli to na definitywną certyfikację hosta połączenia (OVHcloud).

> [!success]
>
> - Zalecamy zapisanie danych logowania przy użyciu zakładki. Dzięki temu będziesz mógł zapamiętać dane do logowania.
> - Zapoznaj się z tą częścią przewodnika: [Co to jest zakładka?](#signet)
> 

#### Błędy połączenia

Podczas próby logowania do przestrzeni hostingowej, istnieje możliwość wystąpienia błędu. Oto dwa najczęstsze błędy, które możesz napotkać.

- `Connection failed (<server-SFTP>) - DNS lookup for <server> failed`

W większości przypadków ten błąd jest związany z danymi do logowania, które zostały podane i które są prawdopodobnie błędne. Sprawdź dane do logowania, które podałeś.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/open-session-failed.png){.thumbnail}

> [!success]
>
> - Jeśli nie znasz wszystkich swoich danych FTP (serwer, login, etc.), zapoznaj się z przewodnikiem "[Logowanie do przestrzeni dyskowej FTP Twojego hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)".
> 

- `Connection failed (<server-SFTP>) - Operation timed out`

Do wiadomości tej dołączona jest również wzmianka `Operation timed out`. Zazwyczaj jest to komunikat, który oznacza, że host jest niedostępny lub jest niepoprawny. Sprawdź podane informacje logowania.

Ten błąd może być również spowodowany przez zaporę lub sieć lokalną blokującą port 21 lub 22, które są używane do łączenia się z serwerem. W takim przypadku sprawdź Twoją konfigurację.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/connection-failed.png){.thumbnail}

> [!primary]
>
> - Przypominamy, że hostem połączenia dla Twojej przestrzeni hostingowej jest `ftp.cluster0XX.hosting.ovh.net` (zastąp `XXX` swoim numerem klastra).
> - W razie potrzeby skorzystaj z przewodnika "[Logowanie do przestrzeni dyskowej FTP hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)".
>

<a name="signet"></a>

### Co to jest zakładka?

Zalecamy używanie zakładek, aby ułatwić dostęp do Twojej przestrzeni hostingowej. Umożliwiają one wstępną rejestrację danych do logowania, dzięki czemu nie musisz ich wprowadzać przy każdym połączeniu.

Aby dodać domenę:

1. Zaloguj się do przestrzeni FRP Twojego hostingu.
2. W górnej części interfejsu, na pasku narzędzi, kliknij zakładkę `Bookmarks`{.action} (pomarańczowa ramka na poniższym obrazie).
3. W lewym dolnym rogu kliknij ikonę`+`{.action}, aby dodać nową zakładkę.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/add-signet.png){.thumbnail}

Pojawi się okno z informacjami na temat połączenia oraz nowa linia na liście zakładek. Przy następnym uruchomieniu Cyberduck będziesz mógł kliknąć dwukrotnie zakładkę, aby zalogować się szybciej.

### Prześlij pliki

Transfer plików pozwala na umieszczenie Twojej strony WWW na Twoim hostingu. Domyślnie pliki należy umieścić w katalogu (folderze) `www`. Możesz przesłać pliki za pomocą kilku metod.

#### Przez funkcję przeciągnij i upuść

Aby przeprowadzić transfer plików, wybierz i przeciągnij z okna katalogu lokalnego (pliki na Twoim komputerze) do okna Cyberduck (przestrzeń dyskowa FTP Twojego hostingu). Po zakończeniu tej operacji pliki zostaną automatycznie umieszczone w kolejce do umieszczenia na serwerze. Wówczas wyświetli się okno.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/drag-drop-transfert-file.png){.thumbnail}

#### Za pomocą menu głównego

W menu Cyberduck kliknij `File`{.action}, a następnie `Upload...`{.action}. Wybierz pliki, które chcesz przesłać na serwer i kliknij na `Upload`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files.png){.thumbnail}

### Wyświetl bieżące transfery

Możesz sprawdzić historię wykonanych transferów na przestrzeń dyskową FTP Twojego hostingu. Odnajdziesz tu:

- pliki oczekujące na umieszczenie na serwerze zdalnym (są nadal obecne w kolejce lub w trakcie wysyłania);
- pliki, których transfer się nie powiódł;
- pliki, które zostały pomyślnie przeniesione na zdalnym hostingu.

Okno to wyświetla się na dwa różne sposoby:

- automatycznie po rozpoczęciu transferu;
- klikając na `Window`{.action} (w menu głównym), a następnie `Transfers`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

### Możliwe operacje na pliku / folderze

Kliknij dwukrotnie plik lub folder, aby wykonać następujące czynności:

- Odczytywanie informacji z pliku lub folderu i modyfikowanie uprawnień do nich (CHMOD).
- Edytuj plik za pomocą wybranej aplikacji.
- Zmień nazwę pliku lub folderu.
- Usuwa plik lub folder.
- Pobierz wybrany(e) element lub elementy.
- Utwórz nowy folder lub plik.

Powyższa lista nie jest wyczerpująca, możliwe są również inne działania. W razie potrzeby sprawdź [oficjalną stronę](https://cyberduck.io/) Cyberduck.

### Przydatne informacje

#### Uprawnienia do plików i folderów

Możesz zmienić uprawnienia (CHMOD) do plików i katalogów obecnych na hostingu.

Ci ostatni dzielą się na 3 rodziny:

- Owner (Właściciel)
- Grupa (Grupa)
- Others (Inne)

Kliknij dwukrotnie plik lub folder, a następnie wybierz `Info`{.action}. Pojawi się następujące okno:

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

Kliknij zakładkę `Permissions`{.action} i wprowadź żądane zmiany:

- UNIX Permissions : ta wartość określa uprawnienia dla 3 rodzin (Właściciel, grupa i inne).
- Zaznacz odpowiednie pola: wartość dla uprawnień systemu UNIX zostanie zaktualizowana automatycznie.

#### Odblokowanie strony www

Możesz ponownie otworzyć Twoją stronę WWW, używając spersonalizowanego polecenia.

W większości przypadków operacja ta następuje po bezpiecznym zamknięciu przestrzeni dyskowej FTP Twojego hostingu przez OVHcloud z powodu włamania.

W menu Cyberduck kliknij `Go`{.action}, a następnie `Send command...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/send-ftp-command.png){.thumbnail}

W nowym oknie wpisz komendę `CHMOD 705 /` i kliknij na `Send`{.action}, aby wykonać komendę. W potwierdzeniu w poniższej ramce powinien pojawić się komunikat `200 Permissions changed on /`.

Aby sprawdzić, czy ponowne otwarcie nastąpiło prawidłowo, zaloguj się na Twojej stronie WWW przy użyciu przeglądarki internetowej.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/site-chmod-705-command.png){.thumbnail}

> [!warning]
>
> - To polecenie nie działa na SFTP. Aby to zrobić, użyj połączenia FTP.
> - Pamiętaj, aby przetestować wyświetlacz maksymalnie po 3 godzinach. Nasze roboty spędzają co 3 godziny, aby sprawdzić zmiany statusu. Przywrócenie strony WWW do prawidłowego działania może więc przebiegać szybciej lub wolniej w zależności od tego, kiedy operacja zostanie wykonana.
> - Jeśli minęły 3 godziny, a Twoja strona WWW nie jest jeszcze online, skontaktuj się z pomocą OVHcloud.
>

## Sprawdź również <a name="go-further"></a>

[Tutorial - Korzystanie z FileZilla na Twoim hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Dołącz do [grona naszych użytkowników](/links/community).