---
title: "Korzystanie z dostępu do hostingu WWW przez SSH"
excerpt: "Dowiedz się jak się podłączyć i korzystać z dostępu do Twojego hostingu OVHcloud przez protokół SSH"
updated: 2024-01-30
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie 

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej umożliwiającej umieszczanie w Internecie plików z Twoich stron www lub Twoich aplikacji. Do przestrzeni dyskowej możesz zalogować się używając, między innymi, protokołu FTP lub SSH oraz odpowiadających im haseł.

**Odkryj jak się podłączyć i korzystać z dostępu do Twojego hostingu OVHcloud przez protokół SSH.**

## Wymagania początkowe

- Posiadanie [hostingu WWW OVHcloud](/links/web/hosting) z dostępem przez protokół SSH.
- Posiadanie informacji umożliwiających logowanie się do przestrzeni dyskowej za pomocą SSH.
- Mieć dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

> [!warning]
> 
> Dostęp SSH do hostingu OVHcloud jest możliwy od [oferta Pro](/links/web/hosting-compare).

## W praktyce

### Etap 1: upewnij się, że dostęp przez SSH jest aktywny <a name="sshcheck"></a>

Rozpocznij od zalogowania się do [panelu klienta OVHcloud](/links/manager) w sekcji `Web Cloud`{.action} i kliknij `Hostingi`{.action} na pasku usług po lewej stronie. Wybierz odpowiedni hosting i przejdź do zakładki `FTP - SSH`{.action}. Wyświetlą się wówczas dane dotyczące Twojej przestrzeni dyskowej. 

Odnajdź w tabeli kolumnę „SSH”, aby sprawdzić, czy dany użytkownik SSH (lub „Login”) posiada aktywny dostęp przez protokół SSH. Jeżeli tak nie jest, pojawi się informacja „Wyłączony”.

![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Jeżeli dostęp nie jest aktywny, kliknij przycisk `...`{.action} po prawej stronie wybranego użytkownika, a następnie `Zmień`{.action}. W oknie, które się wyświetli, włącz dostęp SSH, a następnie dokończ procedurę zmiany ustawienia. Jeżeli nie znajdujesz opcji aktywacji, sprawdź, czy [Twoja oferta hostingowa www OVHcloud](/links/web/hosting) posiada dostęp przez protokół SSH.

### Etap 2: pobranie informacji niezbędnych do logowania <a name="sshlogin"></a>

Aby zalogować się przez SSH do Twojej przestrzeni dyskowej, przejdź do sekcji `FTP - SSH`{.action}:

- **Aktywny** użytkownik SSH: Znajdź go w kolumnie "**Login**" w tabeli. Przypominamy, że użytkownik ten musi [posiadać aktywny dostęp przez SSH](#sshcheck).
- **Hasło użytkownika SSH**: Jeżeli nie pamiętasz hasła, możesz je zmienić klikając przycisk `...`{.action}, a następnie `Zmień hasło`{.action}.
- **Adres serwera SSH**: Znajdź opcję "**Serwer SSH**".
- **Port połączenia z serwerem SSH**: Znajdź opcję "**Port SSH**"

### Etap 3: zaloguj się do przestrzeni dyskowej przez protokół SSH

Aby zalogować się przez SSH, użyj terminala, dzięki któremu będziesz mógł(mogła) działać bezpośrednio na Twojej przestrzeni dyskowej za pomocą wierszy poleceń.  

> [!primary]
>
> Narzędzie to jest zainstalowane domyślnie na MacOS, Linuxie i Windows 10. Starsza wersja środowiska Windows wymagać będzie instalacji programu, takiego jak PuTTY lub dodania funkcji OpenSSH.

Masz teraz dwie możliwości zalogowania się, w zależności od używanej przez Ciebie metody:

#### 3.1 Za pośrednictwem terminala

> [!warning]
> Nasza oferta hostingowa na posiada dostępu „super użytkownik” (lub „root”) przez protokół SSH.

Po otworzeniu terminala użyj następującego polecenia, zastępując elementy "yourlogin", "ssh.cluster000.hosting.ovh.net" i "22" elementami odpowiadającymi Twojemu identyfikatorowi SSH. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Po wysłaniu polecenia zostaniesz poproszony(-a) o wpisanie hasła użytkownika SSH. Po zalogowaniu przejdź do etapu kolejnego: „[Operacje na przestrzeni dyskowej za pomocą SSH](./#etap-4-przeprowadzanie-operacji-na-przestrzeni-dyskowej-z-wykorzystaniem-ssh)”.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2 Za pomocą oprogramowania

Po otwarciu danego oprogramowania (np. PuTTY), wpisz dane do logowania SSH. Ponieważ operacja ta jest nieodłącznie związana z tym oprogramowaniem, nie możemy opisać jej szczegółowo w niniejszej dokumentacji. W ramach przypomnienia zamieszczamy poniżej informacje, które należy wprowadzić:

- **Serwer SSH**: Podaj adres serwera SSH otrzymany [w trakcie realizacji etapu 2](#sshlogin). W zależności od użytego oprogramowania, jego nazwa może być określona jako: „Adres serwera”, „Nazwa hosta” lub „Host name”.
- **Port połączenia**: Wpisz port połączenia SSH otrzymany [w trakcie realizacji etapu 2](#sshlogin).
- **Login SSH**: Podaj użytkownika SSH. W zależności od użytego oprogramowania, może być on nazwany „Nazwa użytkownika”, „Identyfikator”, „Login” albo „Username”.
- **Hasło użytkownika SSH**: Wpisz hasło powiązane z loginem SSH. W zależności od użytego oprogramowania, jego nazwa może również przybrać formę angielskiego „Password”.

Po zalogowaniu, przejdź do następnego etapu.

### Etap 4: przeprowadzanie operacji na przestrzeni dyskowej z wykorzystaniem SSH

Do przeprowadzania operacji na przestrzeni dyskowej musisz posłużyć się odpowiednimi poleceniami. Polecenia te mają konkretne znaczenie w języku angielskim. Dla ułatwienia możesz posłużyć się zamieszczoną poniżej listą. Uwaga, **lista nie jest kompletna**.

|Zamówienie|Znaczenie w języku angielskim|Opis| 
|---|---|---|
|pwd|Print working directory|Wyświetla katalog roboczy, w którym aktualnie się znajdujesz.| 
|cd `arg`|Change directory|Umożliwia przejście do katalogu roboczego wskazanego w miejsce `arg`.|
|cd `..`|Change directory|Umożliwia zmianę katalogu roboczego i przejście o jeden poziom wyżej w hierarchicznej strukturze Twoich katalogów.|
|cd|Change directory|Bez wskazywania argumentu, pozwala na przejście do katalogu głównego Twojej przestrzeni dyskowej (home).|
|ls|List|Wyświetla w formie listy zawartość Twojego katalogu roboczego. Dodaj atrybuty, aby zmienić wyświetlanie rezultatu polecenia (np.`ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Zmienia uprawnienia do pliku lub katalogu wskazanego jako argument `arg`.| 
|mkdir `arg`|Make directory|Pozwala utworzyć katalog noszący nazwę argumentu `arg`.| 
|touch `arg`|Touch|Tworzy pusty plik o nazwie wskazanej jako argument `arg`, jeżeli taki plik jeszcze nie istnieje.|
|rm `arg`|Remove|Usuwa plik wskazany jako argument `arg`.| 
|rm -r `arg`|Remove|Usuwa w sposób rekurencyjny katalog wskazany jako argument `arg` wraz z całą jego zawartością| 
|mv `arg1` `arg2`|Move|Zmienia nazwę lub przenosi dany element (określony jako `arg1`) do nowej lokalizacji (określonej jako `arg2`).| 

Za pomocą specjalnego polecenia możesz również uruchomić skrypt korzystający z określonej wersji PHP. Przykładowo, w przypadku wersji PHP 7.1, użyj następującego polecenia, dostosowując jego elementy do Twojej profilu:

```sh
/usr/local/php7.1/bin/php myscript.php
```

W zależności od wersji PHP, której chcesz używać, środowisko uruchomieniowe może wymagać modyfikacji, aby zagwarantować kompatybilność. Sprawdź naszą dokumentację [Hosting WWW : środowisko, wersja PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).

> [!primary]
>
> Można również kopiować pliki i/lub foldery za pomocą **S**ecure **C**opy **P**rotocol (**SCP**).
> Protokół SSH służy do bezpiecznego duplikowania treści między:
> 
> - z komputera/urządzenia lokalnego na serwer zdalny
> - serwer zdalny i komputer/urządzenie lokalne
> - dwa zdalne serwery
>
> Więcej informacji na temat korzystania z komendy `scp` z naszym hostingiem OVHcloud znajdziesz w przewodniku "[Hosting WWW - Kopiowanie plików za pomocą komendy SCP](/pages/web_cloud/web_hosting/using-scp-command)"
>

## Sprawdź również

[Hosting WWW : środowisko, wersja PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 
