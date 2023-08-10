---
title: Twórz i używaj kluczy SSH
excerpt: Dowiedz się, jak utworzyć klucz SSH w celu nawiązania bezpiecznego połączenia z serwerem
updated: 2023-07-24
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji” na tej stronie.
>


## Wprowadzenie

Protokół SSH umożliwia korzystanie z bezpiecznego kanału w niezabezpieczonej sieci w architekturze klient-serwer, łączącego klienta SSH z serwerem SSH. Stworzenie zestawu kluczy SSH pozwala na otrzymanie klucza publicznego i prywatnego. Klucz publiczny możesz umieścić na serwerze, a następnie połączyć się z nim za pomocą klienta, który ma odpowiedni klucz prywatny. Jeśli publiczne i prywatne klucze SSH będą zgodne, zalogujesz się bez konieczności podawania hasła.

Jest to zazwyczaj najbezpieczniejsza i najwygodniejsza metoda połączenia.

**Ten przewodnik wyjaśnia, jak skonfigurować klucze SSH na urządzeniu lokalnym, aby zabezpieczyć połączenia ze zdalnymi serwerami.**

## Wymagania początkowe


- Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/) lub [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- Zainstaluj najpierw aplikację klienta SSH (wiersz poleceń lub GUI)
- Dostęp administratora (root) przez SSH

> [!primary]
> Ten przewodnik nie dotyczy standardowych instalacji **Windows Server**, ponieważ są one oparte na `Remote Desktop Protocol` (RDP) dla połączeń. Połączenia SSH są natomiast używane w trybie Rescue OVHcloud. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
>


## W praktyce

Sprawdź przewodniki "Pierwsze kroki": <a name="getstarted"></a>

- dla [serwera dedykowanego](/pages/cloud/dedicated/getting-started-with-dedicated-server);
- dla [serwera dedykowanego z gamy **Eco**](/pages/cloud/dedicated/getting-started-with-dedicated-server-eco);
- dla serwera [VPS](/pages/cloud/vps/starting_with_a_vps).

Zapoznaj się również z przewodnikiem dotyczącym wprowadzenia do [protokołu SSH](/pages/cloud/dedicated/ssh_introduction).

Poniższe instrukcje dotyczą dwóch metod użycia kluczy SSH:

- [Tworzenie pary kluczy **Open SSH** i łączenie się z serwerem za pomocą klienta SSH z linii poleceń](#openssh)
- [Utworzenie pary kluczy `PuTTY` i połączenie z serwerem z klienta SSH `PuTTY`](#useputty)

Możesz używać obu metod jednocześnie, ale należy pamiętać, że `PuTTY` przechowuje pliki kluczy w określonym formacie, przez co są one niezgodne z plikami kluczy SSH utworzonymi z klientem **Open SSH**.

Oznacza to, że klucz prywatny utworzony przy użyciu klienta SSH z linii poleceń należy najpierw przekonwertować na [format `PuTTY` i odwrotnie](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

### Tworzenie pary kluczy SSH z linii poleceń <a name="openssh"></a>

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

### Utwórz parę kluczy SSH za pomocą polecenia PuTTY <a name="useputty"></a>

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

Skopiuj kompletny ciąg klucza do Schowka, aby go [dodać do serwera](#addserverkey) i ewentualnie zaimportować [zaimportować do panelu klienta](#importkey). Zapisz oba klucze jako pliki, klikając odpowiednie przyciski i wprowadzając hasło (*passphrase*), aby je chronić.

> [!warning]
>
> Dostęp zdalny do serwera musi być tak bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Ochrona urządzenia i plików przed nieautoryzowanym dostępem jest zatem kluczowa w przypadku korzystania z kluczy SSH.
> 
> Ze względów wygody i bezpieczeństwa warto skorzystać z managera haseł na Twoim urządzeniu, takiego jak rozwiązanie open source `KeePass`.
>

Jedną z zalet korzystania z `PuTTY` jest możliwość zapisywania różnych połączeń jako "sesji". Więcej informacji znajdziesz poniżej w sekcji "[Zarządzanie wieloma kluczami SSH na Twoim lokalnym urządzeniu](#puttykeys)".

Aby dowiedzieć się więcej o połączeniach SSH, sprawdź przewodniki [pierwsze kroki](#getstarted)" i nasze wprowadzenie do [protokołu SSH](/pages/cloud/dedicated/ssh_introduction).

### Dodawanie kluczy SSH do serwera <a name="addserverkey"></a>

[Zaloguj się](/pages/cloud/dedicated/ssh_introduction) do Twojego serwera i upewnij się, że znajdujesz się w katalogu`$HOME` Twojego użytkownika. Jeśli taki katalog jeszcze nie istnieje, utwórz folder `.ssh`:

```bash
mkdir ~/.ssh
```

Aby zapisać klucz dla bieżącego użytkownika, otwórz (lub utwórz) plik `authorized_keys` w preferowanym edytorze tekstu (w tym przykładzie użyto nano`):

```bash
nano ~/.ssh/authorized_keys
```

Wklej [**klucz publiczny**](#publickey) do tego pliku. Zapisz plik i zamknij edytor. Uruchom ponownie serwer lub tylko zrestartuj usługę OpenSSH za pomocą jednego z następujących poleceń (odpowiednie polecenie może się różnić w zależności od Twojego systemu operacyjnego):

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
ssh ubuntu@169.254.10.250
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
ssh -i ~/.ssh/myVPS_rsa ubuntu@169.254.10.250
```

Jak zostało to przedstawione w poprzednich sekcjach, te same instrukcje będą działać na kliencie **Windows**. Zamień tylko `~/` na ścieżkę folderu użytkownika **Windows**, domyślnie `C:\Users\WindowsUsername\`. Na przykład: `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@169.254.10.250`.

### Użycie pliku "config"

Alternatywą dla dodania opcji `-i` za każdym razem jest zmiana pliku o nazwie `config` w folderze `~/.ssh` (`\Users\Username\.ssh` dla **Windows**). Umożliwia konfigurację szczegółów różnych połączeń (nazwa użytkownika, port, plik klucza, ustawienia opcjonalne, etc.)

Jeśli ten plik istnieje w lokalizacji `.ssh`, prawdopodobnie zawiera już informacje. W zależności od środowiska pracy rozważ utworzenie kopii zapasowej oryginału.

Przykładowa zawartość katalogu `.ssh`:

```bash
ls ~/.ssh/
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Plik `config` pozwala na zapisanie kilku połączeń SSH oraz ich indywidualnych ustawień, oprócz standardowych wartości. Wykorzystanie pełnego potencjału tego pliku może być skomplikowane, ponieważ jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy regularnie zarządzają kilkoma serwerami.

Poniżej prosty przykład ilustrujący, jak skonfigurować połączenie SSH z serwerem VPS.<br>
Otwórz plik i dodaj następujące wiersze u góry:

```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa
```

Będziesz mógł następnie zalogować się do VPS jako alias, który określiłeś jako `Host`:

```bash
ssh ubuntu@vps
```

W poprzednim przykładzie określono tylko adres IP serwera i plik klucza, ale można dodać więcej szczegółów. Aby skonfigurować połączenie SSH z drugim serwerem o nazwie użytkownika "rocky", [zmodyfikowany port SSH](/pages/cloud/vps/secure_your_vps#changesshport) "49160" oraz klucz prywatny w pliku "myserver_rsa", rozszerz zawartość pliku, jak pokazano w poniższym przykładzie:

```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 169.254.10.251
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


### Importuj klucz SSH do Panelu klienta <a name="importkey"></a>

Panel klienta OVHcloud umożliwia przechowywanie kluczy publicznych, jeśli zostały utworzone przy użyciu jednego z obsługiwanych typów szyfrowania. Ta funkcja może zaoszczędzić czas podczas konfigurowania lub reinstalacji nowego serwera, ponieważ nie musisz [dodawać klucza publicznego ręcznie do Twojego serwera](#addserverkey). 

Otwórz boczny pasek nawigacyjny, klikając swoją nazwę w prawym górnym rogu i użyj skrótu `Produkty i usługi`{.action}.

![Przestrzeń zarządzania kluczami SSH](images/SSH_keys_panel_2022.png){.thumbnail}

W `Moje usługi` przejdź do zakładki `Klucze SSH`{.action} i kliknij na `Dodaj klucz SSH`{.action}.

![Przestrzeń zarządzania kluczami SSH](images/SSH_keys_panel_2.1.png){.thumbnail}

Z menu rozwijanego wybierz opcję `Dedykowany`.

W nowym oknie wpisz ID (wybraną nazwę) klucza. Wklej ciąg klucza (skopiowany z [Twojego pliku `.pub`](#publickey) lub z [okna `PuTTYgen`](#useputty) w polu `Key`).

![Przestrzeń zarządzania kluczami SSH](images/SSH_keys_panel_3.png){.thumbnail}

Jeśli pełne dane wyjściowe zostały skopiowane, identyfikator za kluczem musi już zostać dodany. Uwaga: aby zapisać klucz, po wklejonym kluczu *podaj swój lokalny identyfikator. (Zobacz przykład powyżej). Jest to wymagane w Panelu klienta OVHcloud. Kliknij przycisk `Potwierdź`{.action}, aby zapisać swój klucz publiczny.

> [!primary]
>
> Wszystkie klucze zarejestrowane w sekcji `Dedykowane` są wstępnie zainstalowane na serwerze dedykowanym lub VPS. Jeśli chodzi o klucze SSH dla usług Public Cloud, zapoznaj się z [tym przewodnikiem](/pages/platform/public-cloud/public-cloud-first-steps).
>

### Ustaw domyślny klucz SSH (tylko dla sekcji "Dedykowane") <a name="cpsshkey"></a>

Jeśli dodałeś kilka kluczy SSH w Panelu klienta OVHcloud, możesz zdefiniować klucz, który będzie używany jako klucz domyślny dla konta. 

> [!warning]
> Pamiętaj, że po skonfigurowaniu klucza domyślnego będzie on używany również jako sposób połączenia podczas restartu serwera w trybie Rescue. Aby otrzymać hasło, przed zrestartowaniem serwera w trybie rescue należy [dezaktywować](#disablesshkey) klucz domyślny. Więcej informacji na ten temat znajdziesz w sekcji [Sprawdź również](#gofurther) niniejszego przewodnika.
> 

Otwórz pasek nawigacji bocznej, klikając nazwę konta w prawym górnym rogu i użyj skrótu `Produkty i usługi`{.action}, aby przejść do sekcji `Klucze SSH`{.action}.

![Przestrzeń zarządzania kluczami SSH](images/SSH_keys_panel_2022.png){.thumbnail}

Na liście kluczy kliknij ikonę `Klucz` obok wybranego klucza SSH, aby ustawić go jako klucz domyślny.

![Przestrzeń zarządzania kluczami SSH](images/defaultsshkey.png){.thumbnail}

Po wykonaniu tej czynności zostanie wyświetlony komunikat potwierdzający, że klucz jest ustawiony jako domyślny, a ikona `Klucz` zostanie podświetlona.

![Przestrzeń zarządzania kluczami SSH](images/defaultsshkey1.png){.thumbnail}

### Wyłącz domyślny klucz SSH <a name="disablesshkey"></a>

Aby dezaktywować klucz SSH jako **domyślny**, przejdź do sekcji `Klucze SSH`{.action}, jak opisano powyżej. Kliknij ikonę `Niebieski` klucz obok odpowiedniego klucza SSH, aby wyłączyć opcję domyślną.


## Sprawdź również <a name="gofurther"></a>

[Wprowadzenie do protokołu SSH](/pages/cloud/dedicated/ssh_introduction)

[Dedicated Server Mode](/pages/cloud/dedicated/rescue_mode)

[Tryb Rescue na serwerze VPS](/pages/cloud/vps/rescue)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.