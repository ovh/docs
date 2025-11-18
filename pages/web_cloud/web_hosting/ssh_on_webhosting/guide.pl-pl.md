---
title: "Hosting WWW - Jak korzystać z dostępu SSH"
excerpt: "Dowiedz się, jak się zalogować i korzystać z dostępu do Twojego hostingu OVHcloud przez protokół SSH"
updated: 2025-09-08
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

## Wprowadzenie 

Wraz z pakietami hostingowymi OVHcloud zyskujesz dostęp do przestrzeni dyskowej umożliwiającej umieszczanie w Internecie plików z Twoich stron WWW. Możesz logować się do przestrzeni dyskowej, używając identyfikatorów FTP lub SSH.

**Odkryj jak się podłączyć i korzystać z dostępu do Twojego hostingu OVHcloud przez protokół SSH.**

## Wymagania początkowe

- Posiad(/linanie [hostingu WWW OVHcloud]ks/web/hosting) z dostępem przez protokół SSH.
- Mieć dostęp do [panelu klienta OVHcloud](/links/manager), sekcja `Web Cloud`{.action}.

> [!warning]
> 
> Dostęp SSH do hostingu OVHcloud jest możliwy od [oferta Pro](/links/web/hosting-compare).

## W praktyce

Aby zalogować się i korzystać z dostępu do Twojego hostingu przez SSH, będziesz potrzebował następujących elementów:

- aktywnego użytkownika SSH;
- hasło powiązane z tym użytkownikiem SSH;
- adres serwera SSH Twojego hostingu;
- port do połączenia z serwerem SSH Twojego hostingu.

### 1 - Upewnij się, że dostęp SSH jest aktywny dla wybranego użytkownika SSH <a name="user-ssh-enablement"></a>

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie pojawią się informacje związane z przestrzenią dyskową.
>>
>> W tabeli odnajdź kolumnę `SSH`, aby sprawdzić, czy użytkownik SSH (w kolumnie `Login` danej tabeli) posiada aktywny dostęp przez protokół SSH. Jeśli tak nie jest, pojawi się informacja `Wyłączona`.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Jeśli dostęp przez SSH dla danego użytkownika to `Wyłączona` w tabeli, wykonaj następujące czynności:
>>
>> - 1: Kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego użytkownikowi, a następnie `Zmodyfikuj`{.action}.
>> - 2: W oknie, które się wyświetli, wybierz `Protokoły logowania`, wybierz opcję `FTP, SFTP i SSH`{.action}, następnie kliknij `Dalej`{.action}.
>> - 3: Sprawdź podsumowanie żądanej zmiany, następnie kliknij `Zatwierdź`{.action}.
>>
>> > Jeśli nie znajdujesz opcji aktywacji, sprawdź, czy [Twoja oferta hostingowa WWW OVHcloud](/links/web/hosting) posiada dostęp przez protokół SSH.

### 2 - Pobierz informacje potrzebne do logowania przez SSH <a name="sshlogin"></a>

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** etapy.

> [!tabs]
> **Etap 1**
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etap 2**
>>
>> Kliknij menu `Hosting`{.action}, następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etap 3**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Etap 4**
>>
>> Na nowej stronie znajdź elementy opisane w poniższej tabeli:
>>
>> |Element|Opis|
>> |---|---| 
>> |**Adres serwera SSH**| Znajdź wzmiankę `Serwer SSH`. Ma on formę `ssh.clusterXXX.hosting.ovh.net` (gdzie każda z 3 `X` odpowiada cyfrze między `0` i `9`).|
>> |**Port połączenia z serwerem SSH**| Znajdź opcję `Port SSH`. Domyślnie numerem portu SSH jest `22`.|
>> |**Aktywny użytkownik SSH**| W tabeli na dole strony odnajdziesz go w kolumnie `Login`.<br>Przypominamy, że ten użytkownik musi [posiadać aktywny dostęp SSH](#user-ssh-enable).|
>> |**Hasło użytkownika SSH**| Jeśli nie pamiętasz hasła, kliknij przycisk `...`{.action} po prawej stronie linii odpowiadającej danemu użytkownikowi w tabeli na dole strony, a następnie `Zmień hasło`{.action}.|

### 3 - Zaloguj się przez SSH do przestrzeni dyskowej Twojego hostingu

Aby zalogować się przez SSH, użyj terminala, dzięki któremu będziesz mógł działać bezpośrednio na Twojej przestrzeni dyskowej za pomocą wierszy poleceń.

> [!primary]
>
> Terminale poleceń są zainstalowane domyślnie w systemach macOS, Linux i Windows 10. Starsze środowisko Windows wymaga instalacji oprogramowania, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) lub dodania funkcji OpenSSH.

Istnieją dwie metody logowania się przez SSH do hostingu WWW. 

**Kliknij poniżej na wybraną metodę połączenia, aby wyświetlić objaśnienia.**

/// details | Za pośrednictwem terminala

> [!warning]
>
> Nasza oferta hostingowa na posiada dostępu "super użytkownik" (lub "root") przez protokół SSH.

Po otworzeniu terminala, zastosuj poniższe polecenie, zastępując elementy `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` oraz `22` przez Twoje dane identyfikacyjne SSH.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Po wysłaniu zamówienia zostaniesz poproszony o wprowadzenie hasła użytkownika SSH.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | Za pomocą programu

Po otwarciu danego oprogramowania (na przykład PuTTY), wpisz dane do logowania SSH. Ponieważ operacja ta jest nieodłącznie związana z tym oprogramowaniem, nie możemy opisać jej szczegółowo w niniejszej dokumentacji. Przypomnienie informacji, które należy w nim wprowadzić:

- **Serwer SSH**: Podaj pobrany adres serwera SSH w [część 2](#sshlogin). W zależności od użytego oprogramowania, może być on nazwany "Adres serwera", "Nazwa hosta" albo "Host Name".
- **Port połączenia**: Wpisz port połączenia SSH pobrany w [część 2](#sshlogin).
- **Login SSH**: Podaj użytkownika SSH. W zależności od użytego oprogramowania, może być on nazwany "Nazwa użytkownika", "Identyfikator", "Login" albo "Username".
- **Hasło użytkownika SSH**: Wpisz hasło powiązane z loginem SSH.<br><br> W zależności od używanego programu, może również zostać nazwane "Password".

///

Po zalogowaniu, przejdź do następnej części.

### 4 - Korzystaj z przestrzeni dyskowej przez SSH <a name="ssh-using"></a>

Do przeprowadzania operacji na przestrzeni dyskowej musisz posłużyć się odpowiednimi poleceniami. Polecenia te mają konkretne znaczenie w języku angielskim. W razie potrzeby skorzystaj z poniższej listy. Uwaga, **lista nie jest wyczerpująca**.

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

Możesz również uruchomić skrypt za pomocą określonej wersji PHP. Na przykład w przypadku wersji PHP 7.1 użyj następującego polecenia. dostosowując jego elementy do Twojego przypadku.

```sh
/usr/local/php7.1/bin/php myscript.php
```

W zależności od wersji PHP, której chcesz używać, środowisko uruchomieniowe może wymagać modyfikacji ze względu na kompatybilność. Zapoznaj się z naszą dokumentacją "[Hosting WWW - Środowisko, wersja PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)", aby dowiedzieć się więcej.

> [!primary]
>
> Można również kopiować pliki i/lub foldery za pomocą **S**ecure **C**opy **P**rotocol (**SCP**).
> Ten protokół używa protokołu SSH do duplikowania zawartości w bezpieczny sposób między:
>
> - lokalny komputer/urządzenie i zdalny serwer
> - dwa zdalne serwery
>
> Więcej informacji na temat korzystania z komendy `scp` z naszym hostingiem OVHcloud znajdziesz w naszym przewodniku "[Hosting WWW - Kopiowanie plików za pomocą polecenia SCP](/pages/web_cloud/web_hosting/using-scp-command)".

## Sprawdź również

[Hosting WWW - Środowisko, wersja PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).