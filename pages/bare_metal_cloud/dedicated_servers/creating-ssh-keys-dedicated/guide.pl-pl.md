---
title: Twórz i używaj kluczy SSH
excerpt: Dowiedz się, jak utworzyć parę kluczy SSH na Twoim komputerze i wykorzystać je do nawiązania bezpiecznego połączenia z serwerem
updated: 2024-06-26
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Protokół SSH umożliwia korzystanie z bezpiecznego kanału w niezabezpieczonej sieci w architekturze klient-serwer, łączącego klienta SSH z serwerem SSH. Stworzenie zestawu kluczy SSH pozwala na otrzymanie klucza publicznego i prywatnego. Klucz publiczny możesz umieścić na serwerze, a następnie połączyć się z nim za pomocą klienta, który ma odpowiedni klucz prywatny. Jeśli publiczne i prywatne klucze SSH będą zgodne, zalogujesz się bez konieczności podawania hasła.

Jest to zazwyczaj najbezpieczniejsza i najwygodniejsza metoda połączenia.

**Ten przewodnik wyjaśnia, jak skonfigurować klucze SSH na urządzeniu lokalnym, aby zabezpieczyć połączenia ze zdalnymi serwerami.**

## Wymagania początkowe

- Dostęp do [panelu klienta OVHcloud](/links/manager)
- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Zainstaluj najpierw aplikację klienta SSH (wiersz poleceń lub GUI)
- Dostęp administratora (sudo) przez SSH

> [!primary]
> Ten przewodnik nie dotyczy standardowych instalacji **Windows Server**, ponieważ są one oparte na `Remote Desktop Protocol` (RDP) dla połączeń. Połączenia SSH są natomiast używane w trybie Rescue OVHcloud. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
>

## W praktyce

Sprawdź przewodniki "Pierwsze kroki": <a name="getstarted"></a>

- dla [serwera dedykowanego](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server);
- dla [serwera dedykowanego z gamy **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco);
- dla serwera [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

Zapoznaj się również z przewodnikiem dotyczącym wprowadzenia do [protokołu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

<a name="create-ssh-key"></a>

### Tworzenie pary kluczy SSH

Poniższe instrukcje dotyczą dwóch metod użycia kluczy SSH:

- [Tworzenie pary kluczy **Open SSH** i łączenie się z serwerem za pomocą klienta SSH z linii poleceń](#openssh)
- [Utworzenie pary kluczy `PuTTY` i połączenie z serwerem z klienta SSH `PuTTY`](#useputty)

Możesz używać obu metod jednocześnie, ale należy pamiętać, że `PuTTY` przechowuje pliki kluczy w określonym formacie, przez co są one niezgodne z plikami kluczy SSH utworzonymi z klientem **Open SSH**.

Oznacza to, że klucz prywatny utworzony przy użyciu klienta SSH z linii poleceń należy najpierw przekonwertować na [format `PuTTY` i odwrotnie](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

#### Tworzenie pary kluczy SSH z linii poleceń <a name="openssh"></a>

Na komputerze **Mac** lub urządzeniu, na którym zainstalowany jest system operacyjny **Linux**, otwórz aplikację wiersza poleceń (`Terminal`).

Upewnij się, że masz folder o nazwie `.ssh` w katalogu `$HOME`. Jeśli taki folder nie istnieje, utwórz go:

```bash
mkdir ~/.ssh
```

W bieżącym systemie operacyjnym **Windows** otwórz wiersz poleceń, wpisując "cmd" na pasku wyszukiwania (lub otwórz `PowerShell` z menu).

Przejdź do katalogu`.ssh` aktywnego użytkownika **Windows** (domyślnie: `C:\Users\WindowsUsername.ssh`):

```powershell
cd .ssh
```

<a name="createnewkey"></a>
Następnie utwórz 4096-bitowy klucz RSA przy użyciu następującego polecenia:

```bash
ssh-keygen -b 4096
```

Używając opcji `-t` z tym poleceniem, można określić inną metodę szyfrowania, na przykład:

```bash
ssh-keygen -t ed25519 -a 256
```

W wierszu polecenia zapisz nowo utworzony klucz w pliku standardowym:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Potwierdź klawiszem `Enter`, aby zaakceptować proponowaną nazwę pliku lub wpisać pojedynczą nazwę pliku. Ma to znaczenie, jeśli w katalogu `ssh` umieszczono kilka par kluczy. Więcej informacji na ten temat znajdziesz w sekcji "[Zarządzanie wieloma kluczami SSH na Twoim lokalnym sprzęcie](#multiplekeys)" tego przewodnika.<br>
W tym przykładzie zastosowano standardowe nazwy plików `id_rsa` i `id_rsa.pub`.

Możesz zabezpieczyć klucz SSH za pomocą hasła (*passphrase*) podczas następnej operacji. Jest to zalecane w celu zwiększenia bezpieczeństwa.

> [!warning]
>
> Dostęp zdalny do serwera musi być tak bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Ochrona urządzenia i plików przed nieautoryzowanym dostępem jest zatem kluczowa w przypadku korzystania z kluczy SSH.
> 
> Ze względów wygody i bezpieczeństwa warto skorzystać z managera haseł na Twoim urządzeniu, takiego jak rozwiązanie open source `KeePass`.
> 

Wszystkie klucze SSH muszą być przechowywane w katalogu`.ssh`. Rozszerzenie `.pub` zostanie dodane do nazw plików kluczy publicznych.

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

<a name="publickey"></a>

Aby wyświetlić i wyeksportować klucz publiczny, użyj polecenia `cat` w pliku klucza`.pub`. Skopiuj cały ciąg klucza do schowka, aby go [dodać do serwera](#addserverkey).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
> W terminalu **MacOS** polecenia `pbcopy` i `pbpaste` umożliwiają szybsze zarządzanie ciągami klawiszy. Na przykład, użyj tego polecenia, aby skopiować klucz z pliku `id_rsa.pub` do Schowka:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

W systemie operacyjnym **Windows** otwórz plik za pomocą aplikacji `Notatnik` w Eksploratorze plików (kliknij plik prawym przyciskiem myszy i wybierz opcję Otwórz z) lub użyj jednej z następujących komend (w `\Users\WindowsUsername\.ssh`):

- `cmd`

```powershell
more id_rsa.pub
```

- `powershell`

```powershell
cat id_rsa.pub
```

Skopiuj cały ciąg klucza do schowka, aby go [dodać do serwera](#addserverkey).

> [!primary]
>
> **Korzystanie ze Schowka**
>
> Podczas pracy w wierszu poleceń **Windows** kliknij prawym przyciskiem myszy, aby **wkleić** zawartość Schowka w oknie wiersza polecenia. Aby **skopiować** ciąg z okna wiersza polecenia, podświetl go myszą, a następnie naciśnij klawisz `Enter`. Funkcje te można również odnaleźć po kliknięciu prawym przyciskiem myszy na pasku menu.
>

#### Utwórz parę kluczy SSH za pomocą polecenia PuTTY <a name="useputty"></a>

[PuTTY](https://putty.org/){.external} to oprogramowanie klienckie SSH open source z graficznym interfejsem użytkownika, dostępne dla **Windows** i innych systemów operacyjnych. Jest dostępne dodatkowe oprogramowanie do tworzenia kluczy SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> Głównym celem `PuTTY` jest zarządzanie połączeniami SSH urządzenia klienckiego **Windows** z serwerem **GNU/Linux**. `PuTTY` przechowuje pliki kluczy w określonym formacie, przez co są niezgodne z plikami kluczy SSH utworzonymi z klientem **Open SSH** zawartymi natywnie w większości nowoczesnych systemów operacyjnych.
>
> W razie potrzeby, jak wyjaśniono powyżej w tym przewodniku, klucze wygenerowane w *wierszu poleceń* można [przekonwertować na format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt), aby używać ich z klientem `PuTTY`. Jeśli chcesz wygodniej korzystać z kluczy SSH, wybierz opcję i zastosuj się do niej (klucze prywatne **Open SSH** lub klucze prywatne `PuTTY`).
>

Jeśli aplikacja nie jest jeszcze zainstalowana (sprawdź listę aplikacji lub użyj funkcji wyszukiwania), pobierz `PuTTY` z [oficjalnej strony](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. Zalecany standardowy pakiet instalacyjny zawiera już `PuTTYgen`, ale jest również dostępny jako plik autonomiczny w witrynie sieci Web.

Otwórz polecenie `PuTTYgen` i wybierz jeden z obsługiwanych algorytmów szyfrowania. W tym przykładzie zastosowano RSA. Wpisz 4096 jako liczbę bitów w prawym dolnym rogu i kliknij przycisk `Generate`{.action}.

![klucz PuTTy](images/puttygen_01.png){.thumbnail}

Przesuwaj kursor myszy swobodnie w obszarze pod paskiem postępu:

![klucz PuTTy](images/puttygen_02.gif){.thumbnail}

Klucz jest gotowy, gdy pasek postępu jest pełny.

![klucz PuTTy](images/puttygen_03.png){.thumbnail}

Skopiuj kompletny ciąg klucza do Schowka, aby go [dodać do serwera](#addserverkey). Zapisz oba klucze jako pliki, klikając odpowiednie przyciski i wprowadzając hasło (*passphrase*), aby je chronić.

> [!warning]
>
> Dostęp zdalny do serwera musi być tak bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Ochrona urządzenia i plików przed nieautoryzowanym dostępem jest zatem kluczowa w przypadku korzystania z kluczy SSH.
> 
> Ze względów wygody i bezpieczeństwa warto skorzystać z managera haseł na Twoim urządzeniu, takiego jak rozwiązanie open source `KeePass`.
>

Jedną z zalet korzystania z `PuTTY` jest możliwość zapisywania różnych połączeń jako "sesji". Więcej informacji znajdziesz poniżej w sekcji "[Zarządzanie wieloma kluczami SSH na Twoim lokalnym urządzeniu](#puttykeys)".

Aby dowiedzieć się więcej o połączeniach SSH, sprawdź przewodniki [pierwsze kroki](#getstarted)" i nasze wprowadzenie do [protokołu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

### Dodawanie kluczy SSH do serwera <a name="addserverkey"></a>

#### Transfer kluczy publicznych utworzonych w systemach opartych na GNU/Linux, MacOS lub BSD

Jeśli stworzyłeś pary kluczy SSH w systemie opartym na GNU/Linux, MacOS lub BSD, możesz użyć komendy `ssh-copy-id`, aby dodać publiczne klucze do Twojego serwera.

Narzędzie `ssh-copy-id` kopiuje klucze publiczne do pliku `~/.ssh/authorized_keys` na określonym serwerze zdalnym i w razie potrzeby automatycznie tworzy plik w tym katalogu.

```bash
ssh-copy-id user@IP_ADDRESS
```

Domyślnie funkcja `ssh-copy-id` spróbuje przetransferować wszystkie klucze publiczne do katalogu `~/.ssh` użytkownika lokalnego. Jeśli jednak potrzebujesz dodać tylko jeden klucz publiczny, możesz określić ten plik klucza za pomocą opcji `-i` ze ścieżką do pliku:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Przykład:

```bash
ssh-copy-id -i ~/.ssh/VPS_rsa.pub ubuntu@203.0.113.100
```

Zostanie wyświetlony monit o podanie hasła użytkownika, który otrzyma taką wiadomość, jak poniżej.

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```

Jeśli pojawi się komunikat o błędzie, możesz dodać klucze publiczne ręcznie, wykonując poniższe czynności.

> [!primary]
>
> Ze względu na obowiązujące zasady bezpieczeństwa para kluczy nie powinna być używana przez wielu użytkowników. Ponieważ każdy użytkownik w systemach GNU/Linux ma własny plik `authorized_keys` w `~/.ssh/`, możesz użyć polecenia `ssh-copy-id`, jak pokazano powyżej, i dostosować `KeyFileName` i `user` po [utworzeniu pary kluczy](#openssh).
>

#### Ręczne dodawanie kluczy publicznych do serwera

[Zaloguj się](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) do Twojego serwera i upewnij się, że znajdujesz się w katalogu`$HOME` Twojego użytkownika. Jeśli taki katalog jeszcze nie istnieje, utwórz folder `.ssh`:

```bash
mkdir ~/.ssh
```

Aby zapisać klucz dla bieżącego użytkownika, otwórz (lub utwórz) plik `authorized_keys` w preferowanym edytorze tekstu (w tym przykładzie użyto nano`):

```bash
nano ~/.ssh/authorized_keys
```

Wklej [**klucz publiczny**](#publickey) do tego pliku. Zapisz plik i zamknij edytor. Uruchom ponownie serwer  (`sudo reboot`) lub tylko zrestartuj usługę OpenSSH za pomocą jednego z następujących poleceń (odpowiednie polecenie może się różnić w zależności od Twojego systemu operacyjnego):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Aby sprawdzić, czy klucz jest prawidłowo skonfigurowany, zaloguj się do serwera przy użyciu następującego polecenia. Zastąp "user" nazwą użytkownika, dla którego zostały utworzone klucze, oraz "IP_ADDRESS" adresem IP (lub nazwą hosta) serwera, do którego chcesz uzyskać dostęp:

```bash
ssh user@IP_ADDRESS
```

Na przykład:
    
```bash
ssh ubuntu@203.0.113.100
```

### Dodawanie dodatkowych kluczy publicznych do serwera

Aby dodać klucze SSH dla innych użytkowników uzyskujących dostęp do Twojego serwera, powtórz kroki tworzenia klucza, ale użyj odpowiedniego folderu `$HOME` lub katalogu **Windows** `Users` danego użytkownika do tworzenia i przechowywania kluczy SSH (lub uruchom polecenia na urządzeniu dedykowanym tej osoby). Następnie dodaj nowy klucz publiczny do serwera w `authorized_keys`, jak opisano powyżej.

### Usuwanie kluczy publicznych z serwera

Otwórz plik `authorized_keys` [jak opisano powyżej](#addserverkey) i usuń ciąg klucza odpowiadający użytkownikowi, którego dostęp ma zostać odwołany.

Zapisz plik i zamknij edytor.

### Zarządzanie wieloma kluczami SSH na lokalnym sprzęcie <a name="multiplekeys"></a>

Do łączenia się z różnymi zdalnymi hostami można używać wielu par kluczy SSH. Jeśli używasz `PuTTY`, przejdź do [odpowiedniej sekcji](#puttykeys) poniżej.

Ponieważ wszystkie klucze muszą być umieszczone w folderze `ssh` na urządzeniu lokalnym, nazwy plików muszą być różne. Gdy [utworzysz nową parę kluczy](#createnewkey) i zostaniesz poproszony o podanie nazwy pliku, wprowadź wybraną nazwę. Dopasuj go np. do nazwy serwera.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Podczas łączenia się z odpowiednim serwerem określ nazwę pliku klucza, oprócz szczegółów dotyczących użytkownika i serwera:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Na przykład:

```bash
ssh -i ~/.ssh/myVPS_rsa ubuntu@203.0.113.100
```

Jak zostało to przedstawione w poprzednich sekcjach, te same instrukcje będą działać na kliencie **Windows**. Zamień tylko `~/` na ścieżkę folderu użytkownika **Windows**, domyślnie `C:\Users\WindowsUsername\`. Na przykład: `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@203.0.113.100`.

### Użycie pliku "config"

Alternatywą dla dodania opcji `-i` za każdym razem jest zmiana pliku o nazwie `config` w folderze `~/.ssh` (`\Users\Username\.ssh` dla **Windows**). Umożliwia konfigurację szczegółów różnych połączeń (nazwa użytkownika, port, plik klucza, ustawienia opcjonalne, etc.)

Jeśli ten plik istnieje w lokalizacji `.ssh`, prawdopodobnie zawiera już informacje. W zależności od środowiska pracy rozważ utworzenie kopii zapasowej oryginału.

Przykładowa zawartość katalogu `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Plik `config` pozwala na zapisanie kilku połączeń SSH oraz ich indywidualnych ustawień, oprócz standardowych wartości. Wykorzystanie pełnego potencjału tego pliku może być skomplikowane, ponieważ jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy regularnie zarządzają kilkoma serwerami.

Poniżej prosty przykład ilustrujący, jak skonfigurować połączenie SSH z serwerem VPS.<br>
Otwórz plik i dodaj następujące wiersze u góry:

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa
```

Będziesz mógł następnie zalogować się do VPS jako alias, który określiłeś jako `Host`:

```bash
ssh ubuntu@vps
```

W poprzednim przykładzie określono tylko adres IP serwera i plik klucza, ale można dodać więcej szczegółów. Aby skonfigurować połączenie SSH z drugim serwerem o nazwie użytkownika "rocky", [zmodyfikowany port SSH](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps#changesshport) "49160" oraz klucz prywatny w pliku "myserver_rsa", rozszerz zawartość pliku, jak pokazano w poniższym przykładzie:

```console
Host vps
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Możesz następnie połączyć się z tym serwerem po wpisaniu:

```bash
ssh dedicated_server
```

Więcej informacji znajdziesz na [odpowiedniej stronie `man`](https://manpages.org/ssh_config/5){.external}.

### Korzystanie z PuTTY <a name="puttykeys"></a>

Jeśli postępujesz zgodnie z instrukcjami w sekcjach "[Tworzenie pary kluczy SSH za pomocą `PuTTY`](#useputty)" i "[Dodawanie kluczy SSH do serwera](#addserverkey)", dysponujesz parą kluczy pozwalającą na połączenie z serwerem. 

`PuTTY` może zapisać poświadczenia i parametry połączenia SSH jako `Session`. Pozwala to również na łączenie się z różnymi serwerami za pomocą pojedynczych kluczy.

Otwórz `PuTTY` i rozwiń podsekcję `SSH` w menu po lewej stronie, następnie kliknij `Auth` i `Credentials`.

![klucz PuTTy](images/puttygen_04.png){.thumbnail}

Kliknij przycisk `Browse`{.action} i wybierz plik klucza prywatnego `PuTTY` (`keyfile.ppk`) w folderze, w którym go zapisałeś.

Plik klucza jest teraz skojarzony z bieżącą sesją SSH. Przejdź na `Session` w menu po lewej stronie i wprowadź dane logowania do [logowania do serwera](#getstarted) (`username@IPv4_address`).

Wprowadź nazwę tego połączenia w polu `Saved Sessions` i kliknij `Save`{.action}, aby dodać je do listy.

![klucz PuTTy](images/puttygen_05.png){.thumbnail}

Od tej chwili możesz kliknąć na ten element `session` i otworzyć połączenie z Twoim serwerem. Aby go przetestować, kliknij na `Open`{.action}. Jeśli plik klucza jest chroniony hasłem, wpisz je na tym etapie.

Aby skonfigurować inne połączenie z serwerem, powtórz następujące kroki:

- [Utwórz parę kluczy](#useputty).
- [Dodaj klucz publiczny do swojego serwera](#addserverkey).
- [Podaj szczegóły dotyczące serwera i dodaj plik klucza do `PuTTY`](#puttykeys).

## Sprawdź również <a name="gofurther"></a>

[Wprowadzenie do protokołu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Dedicated Server Mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Tryb Rescue na serwerze VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.