---
title: "Jak tworzyć i używać kluczy uwierzytelniających do połączeń SSH z serwerami OVHcloud"
excerpt: "Dowiedz się, jak tworzyć pary kluczy OpenSSH na Twoim lokalnym urządzeniu i jak je używać do nawiązywania bezpiecznych połączeń z serwerem dedykowanym lub VPS"
updated: 2025-01-06
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

Protokół SSH pozwala na ustanowienie bezpiecznego kanału komunikacyjnego w sieciach publicznych w architekturze klient-serwer. Do uwierzytelnienia połączeń SSH między dwoma zaufanymi hostami, takimi jak komputer stacjonarny i serwer zdalny, można użyć par kluczy.

Zestaw kluczy składa się z klucza publicznego, który można udostępniać, oraz klucza prywatnego, który pozostaje tajny. Umieszczony na serwerze klucz publiczny pozwala każdemu klientowi z odpowiednim kluczem prywatnym na zalogowanie się bez konieczności wprowadzania hasła.

Ta metoda komunikacji jest zazwyczaj najlepszym kompromisem między bezpieczeństwem i wygodą.

**Dowiedz się, jak tworzyć pary kluczy uwierzytelniania na urządzeniu lokalnym i zarządzać nimi oraz łączyć się z serwerami zdalnymi.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](/links/bare-metal/bare-metal) lub [VPS](/links/bare-metal/vps) na koncie OVHcloud
- Aplikacja do zdalnego połączenia kompatybilna z protokołem OpenSSH

> [!primary]
> Ten przewodnik nie dotyczy standardowych połączeń z systemami operacyjnymi **Windows Server**, ponieważ domyślnie łączą się one z `Remote Desktop Protocol` (RDP). Połączenia SSH są natomiast używane w trybie Rescue OVHcloud.
>
> Więcej informacji znajdziesz w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
>

## W praktyce

<a name="getstarted"></a>

Sprawdź przewodniki "Pierwsze kroki":

- dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server);
- dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco);
- dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### Tworzenie par kluczy dla połączeń OpenSSH

Poniższe instrukcje wyjaśniają, jak tworzyć pary kluczy do zdalnych połączeń za pomocą **OpenSSH** w **wierszu poleceń** i zarządzać nimi. Większość obecnych systemów operacyjnych zawiera tę funkcję bez konieczności instalowania dodatkowego oprogramowania.

Jeśli preferujesz graficzny interfejs użytkownika, istnieje wiele aplikacji dla każdego typu systemu operacyjnego, które umożliwiają łączenie się ze zdalnymi hostami za pomocą protokołu OpenSSH.

Na przykład [PuTTY](https://putty.org/) to oprogramowanie open source z wieloma przydatnymi funkcjami. Dowiedz się, jak z niego korzystać podczas łączenia się z serwerami OVHcloud, korzystając z naszego szczegółowego tutoriala:

- [Jak używać PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> Jeśli podczas próby logowania otrzymasz komunikat o błędzie, sprawdź, czy ustawienia i informacje o logowaniu są poprawne oraz czy system i zainstalowane aplikacje zostały poprawnie zaktualizowane. Jeśli otrzymasz ostrzeżenie typu `REMOTE HOST IDENTIFICATION HAS CHANGED`, zapoznaj się z naszym [przewodnikiem wprowadzającym do SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

### Konfiguracja par kluczy z dystrybucji GNU/Linux lub macOS

/// details | Rozwiń tę sekcję

Otwórz aplikację wiersza poleceń (`Terminal`) na lokalnym urządzeniu.

Upewnij się, że masz folder o nazwie `.ssh` w katalogu `$HOME`. Jeśli taki folder nie istnieje, utwórz go:

```bash
mkdir ~/.ssh
```

Aby utworzyć parę kluczy, użyj polecenia `ssh-keygen`. Opcja`-t` umożliwia określenie metody szyfrowania.

> [!primary]
>
> `Ed25519` jest uważany za najbezpieczniejszą metodę, ale `RSA` jest wartościową alternatywą. Oba są kompatybilne z Panelem klienta OVHcloud, jeśli chcesz [przechowywać klucze publiczne na Twoim koncie klienta](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Przykłady:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

Poniższy monit służy do nadania nazwy nowo utworzonemu kluczowi lub do użycia standardowej nazwy pliku:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Jeśli potwierdzisz parametrem `Enter`{.action} bez wpisania nazwy, zostanie użyta standardowa nazwa pliku (`id_rsa` w tym przykładzie).

Jeśli w przyszłości planowane jest użycie wielu par kluczy, wprowadź indywidualną nazwę pliku w celu zidentyfikowania klucza. Więcej informacji na ten temat można znaleźć poniżej w sekcji **Zarządzanie wieloma kluczami uwierzytelniania na urządzeniu lokalnym**.

Poniższe przykłady wyjściowe będą w dalszym ciągu używać nazw plików `id_rsa` i `id_rsa.pub` w celach ilustracyjnych.

Możesz zabezpieczyć klucz SSH przy użyciu tajnego hasła. Jest to zalecane w celu zwiększenia bezpieczeństwa.

> [!warning]
>
> W przypadku używania kluczy uwierzytelniających dostęp zdalny do serwera jest równie bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Dlatego niezwykle ważna jest ochrona urządzenia i zawartych na nim kluczowych plików przed nieuprawnionym dostępem.
>
> Dla większej wygody i bezpieczeństwa, przechowuj tajne hasła w menedżerze haseł na swoim urządzeniu, takim jak rozwiązanie open source **KeePass**.
>

Domyślnie wszystkie klucze SSH są przechowywane w katalogu `.ssh` Pliki klucza publicznego będą miały `.pub` dodane do nazwy pliku.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

Aby wyświetlić i wyeksportować klucz publiczny, użyj polecenia `cat` w pliku klucza `.pub` lub otwórz go w edytorze tekstu.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Skopiuj ten ciąg klucza, aby [dodać do nowego serwera](#getstarted) lub [zaimportować do panelu klienta](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> W terminalu **macOS** polecenia `pbcopy` i `pbpaste` umożliwiają szybsze zarządzanie ciągami kluczy. Na przykład, użyj tego polecenia, aby skopiować klucz z pliku `id_rsa.pub` do schowka:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

### Zarządzanie wieloma kluczami uwierzytelniającymi na urządzeniu lokalnym

Do łączenia się z różnymi hostami zdalnymi lub urządzeniami sieci lokalnej można używać wielu par kluczy SSH.

Ponieważ wszystkie kluczowe pliki muszą znajdować się w folderze`.ssh` katalogu `home` twojego użytkownika, nazwy plików muszą być różne. Podczas tworzenia nowej pary kluczy i żądania nazwy pliku należy wprowadzić wybraną nazwę, na przykład nazwę serwera.

Przykład wyjścia:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Podczas łączenia się z odpowiednim serwerem określ nazwę pliku klucza prywatnego obok szczegółów użytkownika i serwera połączenia:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Przykład:

```bash
ssh -i ~/.ssh/myServer_rsa ubuntu@203.0.113.100
```

#### Użycie pliku "config"

Alternatywą dla dodania opcji `-i` za każdym razem jest edycja pliku o nazwie `config` w folderze `~/.ssh`. Umożliwia konfigurację szczegółów różnych połączeń (nazwa użytkownika, port, plik klucza, ustawienia opcjonalne, etc.)

Jeśli plik istnieje wewnątrz `.ssh`, prawdopodobnie zawiera już informacje. W zależności od środowiska pracy rozważ utworzenie kopii zapasowej oryginału.

Przykład wyjścia z listy zawartości katalogu` ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Plik `config` pozwala na zapisanie kilku połączeń SSH oraz ich indywidualnych ustawień, poza standardowymi wartościami. Wykorzystanie pełnego potencjału tego pliku może być skomplikowane, ponieważ jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy zarządzają kilkoma serwerami.

Oto prosty przykład konfiguracji połączenia SSH z serwerem.  
Otwórz plik i dodaj następujące wiersze u góry:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Użyj poprawnego adresu IP i nazwy pliku klucza. Pierwszy wiersz, rozpoczynający się od `Host`, definiuje nazwę tego połączenia (w tym przykładzie dedicated_server`).

Następnie możesz zalogować się do serwera, zastępując adres IP serwera nazwą aliasu identyfikującą to połączenie (`Host`):

```bash
ssh username@connection_name
```

Przykład:

```bash
ssh ubuntu@dedicated_server
```

W poprzednim przykładzie określono tylko adres IP serwera i plik klucza, ale można dodać więcej szczegółów.  
Aby skonfigurować połączenie SSH z drugim zdalnym hostem o nazwie użytkownika "rocky", zmodyfikowanym porcie SSH "49160" i kluczu prywatnym w pliku "myVPS_rsa", rozszerz zawartość pliku, jak pokazano w poniższym przykładzie:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myVPS_rsa
```

Następnie będziesz mógł zalogować się do drugiego hosta wprowadzając:

```bash
ssh vps
```

Więcej informacji na temat pliku `config` można znaleźć na [odpowiedniej stronie `man`](https://manpages.org/ssh_config/5).

///


### Jak skonfigurować pary kluczy na urządzeniu z systemem Windows

/// details | Rozwiń tę sekcję

Otwórz wiersz polecenia, wpisując "cmd" na pasku wyszukiwania (lub otwórz program PowerShell w menu "Start").

Otwórz katalog`.ssh` aktywnego konta użytkownika systemu Windows (ścieżka domyślna: `C:\Users\WindowsUsername\.ssh`):


```bash
cd .ssh
```

Aby utworzyć parę kluczy, użyj polecenia `ssh-keygen`. Opcja `-t` umożliwia określenie metody szyfrowania.

> [!primary]
>
> `Ed25519` jest uważany za najbezpieczniejszą metodę, ale `RSA` jest wartościową alternatywą. Oba są kompatybilne z Panelem klienta OVHcloud, jeśli chcesz [przechowywać klucze publiczne na Twoim koncie klienta](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

Przykłady:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

Poniższy monit służy do nadania nazwy nowo utworzonemu kluczowi lub do użycia standardowej nazwy pliku:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Jeśli potwierdzisz przyciskiem `Enter`{.action} bez podania nazwy, zostanie użyta standardowa nazwa pliku (w tym przykładzie `id_rsa`).

Jeśli w przyszłości planowane jest użycie wielu par kluczy, wprowadź indywidualną nazwę pliku w celu zidentyfikowania klucza. Więcej informacji na ten temat można znaleźć poniżej w sekcji **Zarządzanie wieloma kluczami uwierzytelniania na urządzeniu lokalnym**.

Poniższe przykłady wyjściowe będą w dalszym ciągu używać nazw plików `id_rsa` i `id_rsa.pub` w celach ilustracyjnych.

Możesz zabezpieczyć klucz SSH przy użyciu tajnego hasła. Jest to zalecane w celu zwiększenia bezpieczeństwa.

> [!warning]
>
> W przypadku używania kluczy uwierzytelniających dostęp zdalny do serwera jest równie bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Dlatego niezwykle ważna jest ochrona urządzenia i zawartych na nim kluczowych plików przed nieuprawnionym dostępem.
>
> Poufne hasła są przechowywane w menedżerze haseł na Twoim komputerze, np. w rozwiązaniu open source **KeePass**.
>

Domyślnie wszystkie klucze SSH są przechowywane w katalogu` ssh`. Pliki klucza publicznego będą miały '.pub` dodane do nazwy pliku.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

Możesz otworzyć plik klawiszy za pomocą edytora tekstu (Notepad, Notepad++, itp.). W Eksploratorze plików Windows kliknij plik prawym przyciskiem myszy i wybierz opcję "Otwórz za pomocą".  
Można także użyć jednej z następujących komend (w katalogu`\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Skopiuj ten ciąg klucza, aby [dodać do nowego serwera](#getstarted) lub [zaimportować do panelu klienta](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).

> [!primary]
>
> **Korzystanie ze Schowka**
>
> Podczas pracy z wiersza polecenia **Windows** kliknij prawym przyciskiem myszy plik **wklej** zawartość Schowka w oknie wiersza polecenia. Aby **skopiować** ciąg z okna wiersza polecenia, podświetl je, a następnie naciśnij klawisz `Enter`{.action}. Funkcje te można również znaleźć, klikając prawym przyciskiem myszy pasek menu w oknie wiersza polecenia.
>

### Zarządzanie wieloma kluczami uwierzytelniającymi na urządzeniu lokalnym

Do łączenia się z różnymi hostami zdalnymi lub urządzeniami sieci lokalnej można używać wielu par kluczy SSH.

Ponieważ wszystkie kluczowe pliki muszą znajdować się w folderze `.ssh` w katalogu użytkowników systemu Windows, nazwy plików muszą być różne. Gdy tworzysz nową parę kluczy i jest wymagana nazwa pliku, wprowadź wybraną nazwę, na przykład nazwę serwera.

Przykład wyjścia:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Podczas łączenia się z odpowiednim serwerem określ nazwę pliku klucza prywatnego obok szczegółów użytkownika i serwera połączenia:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Przykład:

```bash
ssh -i C:\Users\Username\.ssh/myServer_rsa ubuntu@203.0.113.100
```

#### Użycie pliku "config"

Alternatywą dla dodania opcji `-i` za każdym razem jest edycja pliku o nazwie `config` wewnątrz folderu `C:\Users\Username\.ssh`. Umożliwia konfigurację szczegółów różnych połączeń (nazwa użytkownika, port, plik klucza, ustawienia opcjonalne, etc.)

Jeśli plik istnieje wewnątrz `.ssh`, prawdopodobnie zawiera już informacje. W zależności od środowiska pracy rozważ utworzenie kopii zapasowej oryginału.

Przykład wyjścia z listy zawartości katalogu `.ssh`:

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts    
known_hosts.old
```

Plik `config` pozwala na zapisanie kilku połączeń SSH oraz ich indywidualnych ustawień, poza standardowymi wartościami. Wykorzystanie pełnego potencjału tego pliku może być skomplikowane, ponieważ jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy zarządzają kilkoma serwerami.

Oto prosty przykład konfiguracji połączenia SSH z serwerem.  
Otwórz plik i dodaj następujące wiersze u góry:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myServer_rsa
```

Użyj poprawnego adresu IP i nazwy pliku klucza. Pierwszy wiersz, rozpoczynający się od `Host`, definiuje nazwę tego połączenia (w tym przykładzie `dedicated_server`).

Zaloguj się do serwera, zastępując adres IP serwera nazwą aliasu identyfikującą to połączenie (`Host`):

```bash
ssh username@connection_name
```

Przykład:

```bash
ssh ubuntu@dedicated_server
```

W poprzednim przykładzie określono tylko adres IP serwera i plik klucza, ale można dodać więcej szczegółów.  
Aby skonfigurować połączenie SSH z drugim zdalnym hostem o nazwie użytkownika "rocky", zmodyfikowanym porcie SSH "49160" i kluczu prywatnym w pliku "myVPS_rsa", rozszerz zawartość pliku, jak pokazano w poniższym przykładzie:

```console
Host dedicated_server
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myServer_rsa

Host vps
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myVPS_rsa
```

Następnie będziesz mógł zalogować się do drugiego hosta wprowadzając:

```bash
ssh vps
```

Więcej informacji na temat pliku `config` można znaleźć na [odpowiedniej stronie `man`](https://manpages.org/ssh_config/5).

///


### Dodawanie dodatkowych kluczy publicznych do serwera

Aby dodać uwierzytelnianie za pomocą klucza dla innych użytkowników uzyskujących dostęp do Twojego serwera, utwórz nową parę kluczy, ale użyj odpowiedniego folderu `$HOME` lub **Windows** `Users` danego użytkownika do przechowywania kluczy uwierzytelniających (lub uruchom polecenia na dedykowanym urządzeniu tej osoby).  
Następnie dodaj nowy ciąg klucza publicznego do serwera w pliku `authorized_keys`, jak opisano powyżej.

### Usuwanie kluczy publicznych z serwera

Otwórz plik `authorized_keys` na Twoim serwerze w sposób opisany powyżej, a następnie usuń ciąg klucza odpowiadający kontu użytkownika, którego dostęp chcesz odwołać.

<a name="gofurther"></a>

## Sprawdź również

[Wprowadzenie do protokołu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Dedicated Server Mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Tryb Rescue na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).