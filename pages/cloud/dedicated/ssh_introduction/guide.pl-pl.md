---
title: Wprowadzenie do SSH
slug: ssh-wprowadzenie
excerpt: "Dowiedz się, jak korzystać z połączeń SSH, aby uzyskać dostęp do serwera"
section: Pierwsze kroki
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 08-06-2022**

## Wprowadzenie

Protokół komunikacji SSH (Secure Shell) jest głównym narzędziem do tworzenia szyfrowanych połączeń hostów za pomocą niezabezpieczonych sieci. Narzędzie OpenSSH jest zainstalowane natywnie na wszystkich serwerach OVHcloud (VPS, Serwery dedykowane, instancje Public Cloud), aby umożliwić bezpieczne połączenia z zdalnymi serwerami i innymi operacjami.

**Niniejszy przewodnik wyjaśnia, jak zabezpieczyć dostęp do serwera za pomocą SSH.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> OVHcloud udostępnia Ci usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym to do Ciebie należy zapewnienie prawidłowego funkcjonowania systemu.
>
> Jeśli napotkasz trudności podczas wykonywania tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług administracyjnych i/lub skontaktuj się z naszą społecznością użytkowników na stronie https://community.ovh.com/en/. OVHcloud nie może udzielić Ci wsparcia technicznego w tym zakresie.
>

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Aplikacja kliencka SSH (w wierszu poleceń lub w interfejsie graficznym)

> [!primary]
> Niniejszy przewodnik nie ma zastosowania do standardowych instalacji serwerów Windows, ponieważ opierają się one na protokole zdalnego pulpitu (*Remote Desktop Protocol*). Połączenia SSH są jednak używane w trybie Rescue OVHcloud. Więcej informacji znajdziesz w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## W praktyce

Istnieje kilka metod autoryzacji połączenia z zdalnym urządzeniem przez SSH.<br>
Poniższe instrukcje dotyczą metody uwierzytelniania za pomocą nazwy użytkownika i hasła.<br>
Możesz również skonfigurować klucze SSH, aby aktywować bezpieczne połączenia bez hasła. Więcej informacji znajdziesz w naszym [przewodniku po kluczach SSH](https://docs.ovh.com/pl/dedicated/tworzenie-klucze-ssh-dedykowane/).

Dane do logowania (identyfikator klienta i hasło) są wysyłane e-mailem po zainstalowaniu lub zainstalowaniu serwera z poziomu [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
Nazwa użytkownika odpowiada systemowi operacyjnemu, na przykład `ubuntu` lub `debian`.<br>
Aby się zalogować, podaj również adres IPv4 lub nazwę hosta serwera. Informacje te są dostępne w e-mailu instalacyjnym oraz w panelu klienta.

Zapoznaj się również z naszymi przewodnikami "Pierwsze kroki":

- Dla [serwera dedykowanego](https://docs.ovh.com/pl/dedicated/pierwsze-kroki-z-serwerem-dedykowanym/)
- Dla [serwera dedykowanego z gamy produktów **Eco**](https://docs.ovh.com/pl/dedicated/getting-started-dedicated-server-eco/)
- Dla [VPS](https://docs.ovh.com/pl/vps/pierwsze-kroki-vps/)

### Połączenie z dystrybucją GNU/Linux lub macOS

Klient z linii poleceń SSH (OpenSSH) jest zazwyczaj dostępny domyślnie. Otwórz aplikację Terminal i połącz się z serwerem za pomocą polecenia:

```bash
ssh username@server_IP
```

Jeśli port SSH serwera nie jest portem standard, zastosuj następujące polecenie:

```bash
ssh username@server_IP -p port_number
```

### Połączenie z komputera z systemem Windows 10/11

Najnowsze wersje systemu Windows natywnie integrują OpenSSH, aby połączyć się z poziomu Powershell lub wiersza poleceń.

Kliknij prawym przyciskiem myszy przycisk Start systemu Windows i wybierz `Windows PowerShell`{.action}. Można również użyć pola wyszukiwania, aby uruchomić jeden z tych programów.

![PowerShell](images/windowsps.png){.thumbnail}

Zaloguj się do serwera za pomocą polecenia:

```bash
ssh username@server_IP
```

Jeśli port SSH serwera nie jest portem standard, użyj następującej komendy:

```bash
ssh username@server_IP -p port_number
```

### Połączenie i fingerprint

Po wpisaniu hasła wpisz hasło użytkownika, który się łączy i naciśnij `Enter`.

W przypadku nowego logowania klient SSH otrzyma odcisk klucza (*fingerprint*) serwera. Wpisz "yes", aby potwierdzić, a następnie hasło użytkownika, który się łączy.


```bash
ssh ubuntu@169.254.10.254
```
```console
The authenticity of host '169.254.10.254 (169.254.10.254)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '169.254.10.254' (ECDSA) to the list of known hosts.
ubuntu@169.254.10.254's password:
```

Odcisk klucza jest następnie zapisywany na Twoim urządzeniu i sprawdzany przy każdym nowym połączeniu. Jeśli klucz zmienił się na zdalnym hoście, podczas próby logowania wyświetla się komunikat ostrzegawczy, na przykład:

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Oznacza to, że wystąpiła jedna z poniższych sytuacji:

- Serwer został ponownie zainstalowany.
- Usługa SSH na serwerze została ponownie zainstalowana.
- Połączysz się z innym hostem za pomocą tego samego adresu IP.

> [!primary]
> Komunikat ostrzegawczy niekoniecznie wskazuje problem bezpieczeństwa. Jeśli jednak nie masz nic przeciwko temu, zdalny serwer może zostać uszkodzony.
>

Aby rozwiązać ten problem, użyj następującej komendy z adresem IP Twojego serwera:

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 169.254.10.254
```

Możesz również otworzyć plik `known_hosts` znajdujący się w Twoim katalogu za pomocą edytora tekstu i usunąć wiersz "offending" określony w ostrzeżeniu:

```bash
nano ~/.ssh/known_hosts
```

Zapisz zmiany i wyjdź z edytora. Nowy odcisk klucza musi zostać zaakceptowany podczas kolejnego połączenia z serwerem.

W systemie Windows określono również umiejscowienie pliku `known_hosts` i linii do usunięcia, np.:

```console
Offending ECDSA key in C:\\Users\\YourWindowsUser/.ssh/known_hosts:3
```

Dostęp do tego folderu, kliknij prawym przyciskiem myszy plik i otwórz go za pomocą aplikacji Notatki.

![known_hosts](images/windowskh.png){.thumbnail}

Usuń odpowiednią linię, w tym przypadku trzecią. Zapisz zmiany i wyjdź z edytora. Nowy odcisk klucza musi zostać zaakceptowany podczas kolejnego połączenia z serwerem.

### Obsługa klienta graficznego lub kompatybilnego z oprogramowaniem SSH

W przypadku każdego typu systemu operacyjnego możesz łączyć się z serwerem za pomocą protokołu SSH. 

Na przykład [PuTTY](https://putty.org/){.external} dla Windows to open source’owy program klienta SSH z graficznym interfejsem użytkownika. Został on również przeniesiony na inne platformy i jest dostępny za pośrednictwem [oficjalnej](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) strony internetowej, menedżerów pakietów oprogramowania i za pośrednictwem [Homebrew](https://brew.sh/).

Uruchom PuTTY i wprowadź adres IP serwera. Podaj numer portu, jeśli port standardowy nie jest używany. Następnie kliknij `Open`{.action}, aby się zalogować. Wymagane będzie podanie nazwy użytkownika i hasła.

![PuTTY](images/putty_01.png){.thumbnail}

Jedną z zalet PuTTY jest możliwość rejestracji kilku sesji. Wprowadź dane do logowania w polu `Saved Sessions` i kliknij `Save`{.action}.

![PuTTY](images/putty_02.png){.thumbnail}

Jak zwykle, ostrzeżenie o odciskach palców pojawia się przy pierwszym logowaniu. Kliknij `Accept`{.action}, aby zarejestrować odcisk klucza lub wybierz `Connect Once`{.action}.

![PuTTY](images/putty_03.png){.thumbnail}

Więcej informacji znajdziesz w oficjalnej dokumentacji FAQ oraz w dokumentacji PuTTY.

## Sprawdź również <a name="gofurther"></a>

[Tworzenie kluczy SSH](https://docs.ovh.com/pl/dedicated/tworzenie-klucze-ssh-dedykowane/)

[Tryb Rescue dla serwera dedykowanego](https://docs.ovh.com/pl/dedicated/ovh-rescue/)

[VPS w trybie rescue](https://docs.ovh.com/pl/vps/rescue/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
