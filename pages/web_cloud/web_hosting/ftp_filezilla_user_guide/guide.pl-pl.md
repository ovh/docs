---
title: "Hosting WWW - Jak używać programu FileZilla"
excerpt: "Dowiedz się, jak zalogować się do przestrzeni dyskowej hostingu OVHcloud i zarządzać danymi w niej zawartymi za pomocą oprogramowania FileZilla"
updated: 2025-09-12
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
> **Wyłączanie narzędzia FTP Explorer/Net2FTP**
>
> W przypadku hostingu WWW nie jest już możliwe zalogowanie się do przestrzeni FTP przy użyciu narzędzia online FTP Explorer/Net2FTP. Aby kontynuować łączenie się przez FTP z Twoim hostingiem, skorzystaj z oprogramowania [FileZilla](https://filezilla-project.org/download.php) lub [Cyberduck](https://cyberduck.io/).

## Wprowadzenie 

FileZilla to oprogramowanie dostępne bezpłatnie w wielu systemach operacyjnych (Windows, macOS, itp.).

Umożliwia wgranie plików lub Twojej strony WWW do trybu online poprzez [zalogowanie się do przestrzeni dyskowej](/pages/web_cloud/web_hosting/ftp_connection) na Twoim hostingu.

**Dowiedz się, jak zalogować się do przestrzeni dyskowej hostingu OVHcloud i zarządzać danymi w niej zawartymi za pomocą oprogramowania FileZilla.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager).
- Posiadanie [hostingu WWW](/links/web/hosting).
- Instalacja programu FileZilla na Twoim komputerze Jest on dostępny bezpłatnie na stronie [filezilla-project.org](https://filezilla-project.org/download.php).

## Prezentacja interfejsu <a name="interface"></a>

/// details | Kliknij tutaj, aby wyświetlić zawartość tej sekcji.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- W górnej **ramce** możesz szybko połączyć się z hostingiem podając nazwę **hosta**, nazwę **użytkownika**, **hasło** oraz numer **portu**.
- **strefa 1**: Szczegółowe informacje na temat historii operacji, logowania do przestrzeni FTP, transferów plików, błędów, itp. Więcej informacji znajdziesz w oficjalnej [dokumentacji FileZilla](https://filezilla-project.org/).
- **strefa 2**: Drzewo katalogów/plików lokalnych na komputerze.
- **strefa 3**: Drzewo zdalnych katalogów/plików po zalogowaniu się do hostingu.
- **strefa 4**: Lista katalogów/plików w katalogu wybranym lokalnie na Twoim komputerze.
- **strefa 5**: Lista zdalnych katalogów/plików w wybranym katalogu na Twoim hostingu.
- **strefa 6**: Lista operacji transferu w trakcie, oczekujących lub z błędem między Twoim komputerem i hostingiem.

///

## W praktyce

### 1 - Pobieranie danych do logowania do przestrzeni dyskowej hostingu WWW <a name="part-1"></a>

Wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
2. Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
3. Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.
4. Na nowej stronie wyświetlają się informacje dotyczące Twojej przestrzeni dyskowej. W mailu znajdziesz następujące elementy:
    - `Serwer FTP i SFTP` przedstawiony w następującej formie: `ftp.clusterXXX.hosting.ovh.net` (gdzie każda z 3 `X` odpowiada cyfrze między `0` i `9`).
    - Jeden z użytkowników w kolumnie `Login` tabeli na dole strony. Możesz również użyć `Login główny`, jeśli chcesz.
    - Numer `Port FTP` lub numer `Port SFTP` w zależności od protokołu połączenia, którego będziesz chciał użyć do zalogowania się do przestrzeni dyskowej.

> [!primary]
>
> Ze względów bezpieczeństwa hasło użytkownika nie pojawia się na stronie zakładki `FTP - SSH`{.action}. Jeśli nie pamiętasz hasła, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/web_hosting/ftp_change_password), aby wprowadzić zmiany.

### 2 - Logowanie do przestrzeni dyskowej hostingu za pomocą FileZilla

Połączenie może być realizowane przez dwa protokoły transferu plików:

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
> Jeśli to możliwe, zalecamy użycie protokołu **SFTP** do zalogowania się do przestrzeni dyskowej za pomocą programu FileZilla.
>
> Protokół **SFTP** szyfruje transmisję danych między Twoim urządzeniem i hostingiem. Jeśli jednak napotkasz ograniczenia w korzystaniu z usług, takie jak segmentacja użytkowników lub folderów, skorzystaj z protokołu **FTP**.

**Kliknij wybrany protokół logowania, aby wyświetlić wyjaśnienia.**

/// details | Logowanie przez SFTP do przestrzeni dyskowej hostingu za pomocą FileZilla. <a name="sftp"></a>

**SFTP** używa domyślnego portu 22 zamiast portu 21, podobnie jak SSH. Jeśli korzystasz z hostingu Cloud Web, użyj portu, który wyświetla się w Twoim [Panelu klienta OVHcloud](/links/manager). Port 22 jest wyłączony przez bezpieczeństwo w protokole SSH i SFTP dla hostingu Cloud Web.

> [!success]
>
> SFTP jest dostępne za darmo dla wszystkich ofert hostingu OVHcloud (z wyjątkiem poprzednich ofert 60free i demo1g).
>

**Sprawdź aktywację protokołu SFTP**

W tym celu wróć do zakładki `FTP-SSH`{.action} w [Panelu klienta OVHcloud](/links/manager), jak pokazano w [pierwszej części](#part-1) tego przewodnika.

W tabeli na dole strony znajdź kolumnę `SFTP`, aby sprawdzić, czy dany użytkownik (w kolumnie `Login` tabeli) posiada aktywny dostęp SFTP. Jeśli tak nie jest, pojawi się informacja `Wyłączona`.

Jeśli dostęp SFTP danego użytkownika jest w tabeli wyłączony `Wyłączona`, wykonaj następujące czynności:

- W przypadku oferty Perso zaznacz kratkę po lewej stronie komendy `Wyłączona` w tabeli.

- Dla ofert Pro i Performance:

    - 1: Kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego użytkownikowi, a następnie kliknij `Zmodyfikuj`{.action}.
    - 2 : W oknie, które się wyświetli, wybierz opcję `Protokoły logowania`, wybierz opcję `FTP i SFTP`{.action}, następnie kliknij `Dalej`{.action}.
    - 3: Przejrzyj podsumowanie żądanej zmiany, następnie kliknij `Zatwierdź`{.action}.

**Logowanie przez SFTP przy użyciu FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Na pasku szybkiego logowania uzupełnij informacje, korzystając z poniższej tabeli:

|Informacje do uzupełnienia|Szczegóły|
|---|---| 
|Host| Adres serwera umożliwiający dostęp do przestrzeni dyskowej Twojego hostingu WWW.<br> Zazwyczaj ma on następującą postać: `ftp.clusterXXX.hosting.ovh.net` (`XXX` to numer klastra, w którym znajduje się Twój hosting).|
|Użytkownik|Identyfikator umożliwiający dostęp do przestrzeni dyskowej Twojego hostingu.|
|Hasło|Hasło skojarzone z użytkownikiem.|
|Port|Wpisz numer uprzednio pobranego portu SFTP w [pierwszej części](#part-1) tego przewodnika dla połączenia SFTP.|

Kiedy wszystko zostanie poprawnie wpisane w ramce **1** na poniższym obrazku, kliknij `Szybkie połączenie`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Otworzy się wówczas okno dialogowe (patrz obrazek poniżej), w którym potwierdzisz logowanie do hosta, z którym chcesz się połączyć. Po zalogowaniu się na hoście OVHcloud możesz zaznaczyć pole *Zawsze ufaj temu hostowi, dodać ten klucz do pamięci cache*, aby oprogramowanie nie pytało Cię ponownie w przyszłości.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Logowanie przez FTP do przestrzeni dyskowej hostingu za pomocą FileZilla.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Na pasku szybkiego logowania uzupełnij informacje, korzystając z poniższej tabeli:

|Informacje do uzupełnienia|Szczegóły|
|---|---| 
|Host| Adres serwera umożliwiający dostęp do przestrzeni dyskowej Twojego hostingu WWW.<br> Zazwyczaj ma on następującą postać: `ftp.clusterXXX.hosting.ovh.net` (`XXX` to numer klastra, w którym znajduje się Twój hosting).|
|Użytkownik|Identyfikator umożliwiający dostęp do przestrzeni dyskowej Twojego hostingu.|
|Hasło|Hasło skojarzone z użytkownikiem.|
|Port|Zazwyczaj jest on uzupełniany automatycznie przez program. W przeciwnym razie wprowadź port `21`, aby uzyskać połączenie FTP.|

Kiedy wszystko zostanie poprawnie wpisane w ramce **1** na poniższym obrazku, kliknij `Szybkie połączenie`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Jeśli logowanie się powiodło, zostaniesz powiadomiony o statusie w ramce **2** na powyższym obrazku. Dzięki temu możesz sprawdzić, które katalogi/foldery oraz pliki są już zainstalowane na Twoim hostingu (ramka **3**).

///

#### Błędy połączenia

**Kliknij na zgłaszany błąd, aby wyświetlić rozwiązanie.**

/// details | Authentication failed - Could not connect to server

Poniższy komunikat wskazuje błąd identyfikacji, który wystąpił podczas połączenia z hostingiem współdzielonym przez FTP lub SFTP:

![hosting](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Ten rodzaj wiadomości jest generowany przez błąd w parze Login/Password.

Sprawdź dane logowania, aby upewnić się, że nie wystąpiły błędy. [Zmiana hasła dostępu FTP](/pages/web_cloud/web_hosting/ftp_change_password) Twojego hostingu WWW bezpośrednio w [Panelu klienta OVHcloud](/links/manager).

///

/// details | Connection timed out after 20 seconds of inactivity - Could not connect to server

W poniższym przypadku błąd jest generowany przez niepoprawną nazwę hosta:

![Hosting](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Upewnij się, czy jest ona powiązana z nazwą hosta zadeklarowaną w [Panelu klienta OVHcloud](/links/manager).

///

### 3 - Transfer plików

Aby wykonać transfer plików przez (S)FTP, możesz je wybrać, a następnie przeciągnąć i upuścić katalogi/pliki z lewego okna *(komputer)* do prawego okna *(hosting)* (**strefy 4 i 5** opisane w sekcji niniejszego tutoriala dotyczącej [interfejsu](#interface) FileZilla).

Pamiętaj, aby wybrać docelowy katalog w prawym oknie.

Po przeprowadzeniu tej operacji Twoje pliki zostaną automatycznie uruchomione w kolejce, po czym zostaną złożone na serwerze.

![hosting](/pages/assets/screens/other/web-tools/filezilla/drag-drop-en.png){.thumbnail}

### 4 - Inne funkcje programu FileZilla

**Kliknij na nagłówki poniżej, aby wyświetlić ich zawartość.**

/// details | Widok kolejki

Dostępny jest widok kolejki (**strefa 6** opisana w sekcji niniejszego tutoriala [dotyczącej interfejsu](#interface) FileZilla).

W tej strefie znajdziesz:

- pliki oczekujące na złożenie na zdalnym serwerze jeszcze obecnym w kolejce;
- pliki, w przypadku których przeniesienie nie powiodło się;
- pliki, dla których operacja transferu została wykonana na zdalnym hostingu.

![hosting](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Menu kontekstowe serwera

Kliknij prawym przyciskiem myszy jeden z plików znajdujących się w **strefie 5** (opisanych w sekcji niniejszego tutoriala [dotyczącej interfejsu](#interface) FileZilla).

Pojawi się menu kontekstowe i masz do wyboru kilka opcji:

- Pobierz: Pobierz plik do otwartego lokalnego folderu.
- Dodaj pliki do kolejki: Dodaj plik do kolejki oczekujących, możesz na przykład odroczyć pobieranie danych.
- Wyświetl/Edytuj: Pozwala na bezpośrednie wyświetlanie lub edytowanie pliku znajdującego się na Twoim hostingu. Musisz mieć program, który potrafi odczytać plik zainstalowany na komputerze.
- Utwórz katalog: Umożliwia utworzenie nowego katalogu bezpośrednio na zdalnym hostingu.
- Aktualizacja: Aktualizuje wyświetlanie danych, aby poprawnie wyświetlać różne pliki.
- Usuń: Pozwala usunąć wybrany plik.
- Zmień nazwę: Pozwala zmienić nazwę wybranego pliku.
- Skopiuj adres (adresy) do schowka: Umożliwia automatyczne skopiowanie bezpośredniego linku do wybranego pliku. Przykład URL, który może zostać wygenerowany: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/my_folder1/my_file.jpg`.
- Uprawnienia pliku: Daje możliwość zmiany uprawnień dla plików (Chmod).

![hosting](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Prawa dostępu (Chmod) do plików i folderów

Kliknij prawym przyciskiem myszy jeden z plików znajdujących się na serwerze, a następnie wybierz `Uprawnienia do pliku ...`{.action}.

Możesz zmienić uprawnienia dostępu (Chmod) do plików i katalogów znajdujących się na hostingu.

Na ogół łatwiej jest zarządzać uprawnieniami Chmod, używając wartości `XXX` (składającej się z 3 cyfr, od 0 do 7). Panel uprawnień może wówczas wahać się od `000` (bez uprawnień) do `777` (wszystkie prawa).

> [!alert]
>
> Uwaga, nie zaleca się umieszczania uprawnień Chmod 000 na folderach lub plikach. Nie będziesz już miał możliwości (przynajmniej w przypadku FTP) zarządzania tym elementem (w tym jako administrator FTP).
>
> To samo dotyczy praw Chmod 777, ponieważ w przeciwieństwie do Chmod 000, każdy może działać na folderze lub pliku, co powoduje istotną lukę w zabezpieczeniach dla hostowanych danych.
>

Pierwsza z trzech cyfr `XXX` definiujących chmod odpowiada prawom właściciela/administratora, druga - prawom grup (rzadko używane i zazwyczaj równe 0), a trzecia - użytkownikom strony WWW na hostingu.

Domyślnie zalecamy, aby nie przekraczać praw Chmod **705** do akt i praw Chmod **604** do plików.

Im wyższa liczba, tym większe uprawnienia.

![hosting](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Wpisz uprawnienia, które chcesz przyznać, wartość Chmod zostanie automatycznie zaktualizowana.

Możesz zaznaczyć kratkę "Rekurencja w podfolderach".

W ten sposób prawa do akt sprawy oraz katalogi i pliki, które mogą być w nim przechowywane, ulegną zmianie.

///

/// details | Odblokowanie

> [!primary]
>
> Niezależnie od podjętych przez Ciebie działań, Twój hosting może zostać wyłączony po wykryciu przez nasze systemy bezpieczeństwa złośliwych lub nieautoryzowanych plików na Twoim hostingu.
>
> Następnie należy [zabezpieczyć Twoje rozwiązania](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#step-2), usuwając luki bezpieczeństwa wskazane w powiadomieniu o blokadzie otrzymanym na e-mail.
>

Następnie kliknij `Serwer`{.action}, a następnie wybierz `Wpisz spersonalizowane`{.action} polecenie (ta opcja może się również nazywać `Wprowadź polecenie FTP`{.action}).

Wpisz następujące polecenie:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> To zamówienie nie działa w przypadku SFTP.
>

![hosting](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Jeśli otrzymasz błąd `550 would not change perms on /. not such file or directory`, użyj następującego polecenia:

```bash
SITE CHMOD 705 .
```

> [!primary]
>
> Aby sprawdzić, czy ponowne otwarcie strony zostało wykonane, przetestuj ją w przeglądarce internetowej po kilku minutach.
>

> [!warning]
>
> Przetestuj wyświetlacz maksymalnie po 3 godzinach.<br>
> Nasze roboty spędzają co najmniej 3 godziny, aby sprawdzić zmiany stanu.<br>
> W zależności od tego, kiedy zostanie przeprowadzona powyższa operacja, przywrócenie prawidłowego wyświetlania Twojej strony będzie możliwe.<br>
> Jeśli upłynęło 3 godzin, Twoja strona WWW nie jest jeszcze dostępna w sieci, sprawdź, czy podane zamówienie zostało zrealizowane i czy operacja została ponownie uruchomiona.<br>
> Jeśli to nadal nie działa, skontaktuj się z pomocą techniczną.
> 

///

/// details | Transfer plików binarnych

W przypadku plików typu binarnego, takich jak pliki typu **CGI**, warto wybrać sposób, w jaki zostanie zrealizowany transfer.

Aby zmienić typ transferu, wybierz `Transfer`{.action} w menu głównym, a następnie `Typ transferu`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Porównanie plików

![hosting](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

Opcja porównywania plików wyświetla kolory w **strefach 4** i **5** (przedstawione w sekcji niniejszego tutoriala [w interfejsie](#interface) FileZilla). Ta opcja pozwala na podkreślenie różnic między plikami i folderami lokalnymi i na serwerze. 

Po kliknięciu prawym przyciskiem myszy na ikonę, możesz zmienić sposób porównania. Będziesz mógł włączyć lub wyłączyć opcję, ale również:

- porównanie rozmiaru plików;
- porównanie czasu;
- ukryć identyczne pliki.

**Znaczenie kolorów:**

- Żółty: Plik istnieje tylko z jednej strony.
- Zielony: Plik jest nowszy niż niekolorowy plik po drugiej stronie.
- Czerwony: Rozmiar plików jest inny.

///

## Sprawdź również <a name="go-further"></a>

Poniżej znajdziesz link do naszej dokumentacji, aby [usuwanie powtarzających się błędów podczas korzystania z programu FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

Zapoznaj się [z przewodnikami dotyczącymi hostingu współdzielonego](/products/web-cloud-hosting).

Zapoznaj się z oficjalną [stroną FileZilla](https://filezilla-project.org/).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).