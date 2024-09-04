---
title: Jak tworzyć i używać kluczy SSH dla instancji Public Cloud
excerpt: Dowiedz się, jak tworzyć pary kluczy SSH na Twoim lokalnym urządzeniu i używać ich do nawiązywania bezpiecznych połączeń z instancją
updated: 2024-09-02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Protokół SSH umożliwia korzystanie z bezpiecznego kanału w niezabezpieczonej sieci w architekturze klient-serwer, łączącego klienta SSH z serwerem SSH. Stworzenie zestawu kluczy SSH pozwala na otrzymanie klucza publicznego i prywatnego. Możesz zapisać klucz publiczny na serwerze, a następnie połączyć się z nim za pomocą klienta, który ma odpowiadający mu klucz prywatny. Jeśli publiczne i prywatne klucze SSH będą zgodne, zalogujesz się bez konieczności podawania hasła.

Jest to zazwyczaj najbezpieczniejsza i najwygodniejsza metoda logowania, a także domyślna metoda logowania do instancji Public Cloud.

**Niniejszy przewodnik wyjaśnia, jak tworzyć klucze SSH i zarządzać nimi na Twoim lokalnym urządzeniu, aby łączyć się z instancjami Public Cloud.**

## Wymagania początkowe

- [Projekt Public Cloud](/links/public-cloud/public-cloud) na koncie OVHcloud
- Aplikacja klienta SSH (wiersz poleceń lub GUI)

> [!primary]
> Ten przewodnik nie dotyczy standardowych instalacji **Windows Server**, ponieważ dla połączeń są one oparte na protokole `Remote Desktop Protocol` (RDP).
>
> Więcej informacji znajdziesz w naszym [przewodniku dotyczącym tworzenia instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
>

## W praktyce

Poniższe instrukcje dotyczą dwóch metod użycia kluczy SSH:

- [Tworzenie pary kluczy **Open SSH** i łączenie się z serwerem za pomocą klienta SSH z linii poleceń](#openssh)
- [Utworzenie pary kluczy `PuTTY` i połączenie z serwerem z klienta SSH `PuTTY`](#useputty)

Możesz używać obu metod jednocześnie, ale należy pamiętać, że `PuTTY` przechowuje pliki kluczy w określonym formacie, przez co są one niezgodne z plikami kluczy SSH utworzonymi z klientem **Open SSH**.

Oznacza to, że klucz prywatny utworzony przy użyciu klienta SSH z linii poleceń należy najpierw przekonwertować na [format `PuTTY` i odwrotnie](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

<a name="openssh"></a>

### Tworzenie pary kluczy SSH z linii poleceń

Na komputerze **Mac** lub urządzeniu, na którym zainstalowany jest system operacyjny **Linux**, otwórz aplikację wiersza poleceń (`Terminal`).

Upewnij się, że masz folder o nazwie `.ssh` w katalogu `$HOME`. Jeśli taki folder nie istnieje, utwórz go:

```bash
mkdir ~/.ssh
```

W bieżącym systemie operacyjnym **Windows** otwórz wiersz poleceń, wpisując "cmd" na pasku wyszukiwania (lub otwórz `PowerShell` z menu).

Przejdź do katalogu `.ssh` aktywnego użytkownika **Windows** (domyślnie: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Utwórz 4096-bitowy klucz RSA przy użyciu następującego polecenia:

```bash
ssh-keygen -b 4096
```

Używając opcji `-t` z tym poleceniem, możesz określić inną metodę szyfrowania, na przykład:

```bash
ssh-keygen -t ed25519 -a 256
```

W wierszu polecenia zapisz nowo utworzony klucz w pliku standardowym:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Możesz potwierdzić za pomocą polecenia `Enter`, aby zaakceptować proponowaną nazwę pliku, lub wpisać inną nazwę. Ma to znaczenie, jeśli w katalogu` ssh` umieszczono kilka par kluczy. Więcej informacji na ten temat znajdziesz w sekcji [Zarządzanie wieloma kluczami SSH](#multiplekeys).  
W tym przykładzie zastosowano standardowe nazwy plików `id_rsa` i `id_rsa.pub`.

Możesz zabezpieczyć klucz SSH za pomocą hasła (*passphrase*), wysyłając następujące polecenie. Jest to zalecane w celu zwiększenia bezpieczeństwa.

> [!warning]
>
> Zdalny dostęp do serwera jest tak samo bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Ochrona urządzenia i plików przed nieautoryzowanym dostępem jest zatem kluczowa w przypadku korzystania z kluczy SSH.
>
> Ze względów bezpieczeństwa i wygody zalecamy użycie na Twoim urządzeniu menedżera haseł, takiego jak rozwiązanie open source `KeePass`.
>

Wszystkie klucze SSH muszą być przechowywane w katalogu`.ssh`. Pliki klucza publicznego będą miały sufiks `.pub` dodany do nazwy pliku.

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

Aby wyświetlić i wyeksportować klucz publiczny, użyj polecenia `cat` w pliku klucza `.pub`. Skopiuj ten ciąg klucza, aby [dodać do nowej instancji](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) lub zaimportować go [w Panelu klienta OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

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
> W terminalu **macOS** polecenia `pbcopy` i `pbpaste` umożliwiają szybsze zarządzanie ciągami klawiszy. Na przykład, użyj tego polecenia, aby skopiować klucz z pliku `id_rsa.pub` do schowka:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

W systemie operacyjnym **Windows** otwórz plik za pomocą aplikacji `Notepad` w Eksploratorze plików (kliknij plik prawym przyciskiem myszy i wybierz opcję `Otwórz z`) lub użyj jednej z następujących komend (w `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Skopiuj ten ciąg klucza, aby [dodać do nowej instancji](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) lub zaimportować go [w Panelu klienta OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Korzystanie ze schowka**
>
> Podczas pracy z wierszem poleceń w systemie **Windows** kliknij prawym przyciskiem myszy, aby **wkleić** zawartość schowka w oknie wiersza polecenia. Aby **skopiować** ciąg z okna wiersza polecenia, podświetl go myszą, a następnie naciśnij klawisz `Enter`. Funkcje te można również odnaleźć po kliknięciu prawym przyciskiem myszy na pasku menu.
>

<a name="useputty"></a>

### Utwórz parę kluczy SSH za pomocą programu PuTTY

[PuTTY](https://putty.org/){.external} to oprogramowanie klienckie SSH open source z graficznym interfejsem użytkownika, dostępne dla **Windows** i innych systemów operacyjnych. Jest dostępne dodatkowe oprogramowanie do tworzenia kluczy SSH: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> Głównym celem `PuTTY` jest zarządzanie połączeniami SSH urządzenia klienckiego **Windows** z serwerem **GNU/Linux**. `PuTTY` przechowuje pliki kluczy w określonym formacie, przez co są niezgodne z plikami kluczy SSH utworzonymi z klientem **Open SSH** zawartymi natywnie w większości nowoczesnych systemów operacyjnych.
>
> W razie potrzeby, jak wyjaśniono powyżej w tym przewodniku, klucze wygenerowane w *wierszu poleceń* można [przekonwertować na format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt), aby używać ich z klientem `PuTTY`. Jeśli chcesz wygodniej korzystać z kluczy SSH, wybierz opcję i zastosuj się do niej (klucze prywatne **Open SSH** lub klucze prywatne `PuTTY`).
>

Jeśli aplikacja nie jest jeszcze zainstalowana (sprawdź listę aplikacji lub użyj funkcji wyszukiwania), pobierz `PuTTY` z [oficjalnej strony](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external}. Zalecany standardowy pakiet instalacyjny zawiera już `PuTTYgen`, ale jest również dostępny jako plik autonomiczny w witrynie sieci Web.

Otwórz polecenie `PuTTYgen` i wybierz jeden z obsługiwanych algorytmów szyfrowania. W tym przykładzie zastosowano RSA. Wpisz 4096 jako liczbę bitów w prawym dolnym rogu i kliknij przycisk `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Przesuwaj kursor myszy swobodnie w obszarze pod paskiem postępu:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

Klucz jest gotowy, gdy pasek postępu jest pełny.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Skopiuj ten ciąg klucza, aby [dodać do nowej instancji](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) lub zaimportować go [w Panelu klienta OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Zapisz oba klucze jako pliki, klikając odpowiednie przyciski i wprowadzając hasło (*passphrase*), aby je chronić.

> [!warning]
>
> Zdalny dostęp do instancji jest tak samo bezpieczny jak urządzenie klienckie przechowujące klucz prywatny. Ochrona urządzenia i plików przed nieautoryzowanym dostępem jest zatem kluczowa w przypadku korzystania z kluczy SSH.
>
> Ze względów bezpieczeństwa i wygody zalecamy użycie na Twoim urządzeniu menedżera haseł, takiego jak rozwiązanie open source `KeePass`.
>

Jedną z zalet korzystania z `PuTTY` jest możliwość zapisywania różnych połączeń jako `Sessions`. Więcej informacji znajdziesz poniżej w sekcji [Zarządzanie wieloma kluczami SSH na Twoim lokalnym urządzeniu](#puttykeys).

<a name="multiplekeys"></a>

### Zarządzanie wieloma kluczami SSH na lokalnym sprzęcie

Do łączenia się z różnymi zdalnymi hostami można używać wielu par kluczy SSH.

> [!primary]
>
> Jeśli używasz polecenia `PuTTY`, przejdź do poniższej [odpowiedniej sekcji](#puttykeys).
>

Ponieważ wszystkie klucze muszą być umieszczone w folderze `.ssh` w urządzeniu lokalnym, nazwy plików muszą być różne. Gdy [utworzysz nową parę kluczy](#createnewkey) i zostaniesz poproszony o podanie nazwy pliku, wprowadź wybraną nazwę. Przypisz instancję do nazwy.

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

Przykład:

```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Jak zostało to przedstawione w poprzednich sekcjach, te same instrukcje będą działać na kliencie **Windows**. Zamień tylko `~/` na ścieżkę folderu użytkownika **Windows**, domyślnie `C:\Users\WindowsUsername\`. Na przykład: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`.

### Za pomocą pliku "config"

Alternatywą dla dodania opcji `-i` za każdym razem jest zmiana pliku o nazwie `config` w folderze  `~/.ssh` (`\Users\Username\.ssh` dla **Windows**). Umożliwia konfigurację szczegółów różnych połączeń (nazwa użytkownika, port, plik klucza, ustawienia opcjonalne, etc.)

Jeśli ten plik istnieje w lokalizacji `.ssh`, prawdopodobnie zawiera już informacje. W zależności od środowiska pracy rozważ utworzenie kopii zapasowej oryginału.

Przykładowa zawartość katalogu`.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

Dzięki plikowi `config`, poza standardowymi wartościami, może być przechowywanych kilka połączeń SSH z ich indywidualnymi ustawieniami. Pełne wykorzystanie potencjału tego pliku może być skomplikowane, ponieważ jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy regularnie zarządzają kilkoma serwerami.

Oto prosty przykład konfiguracji połączenia SSH z instancją.

Otwórz plik i dodaj następujące wiersze u góry:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Będziesz mógł następnie zalogować się do instancji jako alias, który ustawiłeś jako `Host`:

```bash
ssh ubuntu@instance
```

W poprzednim przykładzie określono tylko adres IP serwera i plik klucza, ale można dodać więcej szczegółów.  
Aby skonfigurować połączenie SSH z drugim serwerem o nazwie użytkownika "rocky", zmodyfikowanym porcie SSH "49160" i kluczu prywatnym w pliku "myserver_rsa", rozszerz zawartość pliku, jak pokazano w poniższym przykładzie:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Możesz następnie połączyć się z tym serwerem po wpisaniu:

```bash
ssh myserver
```

Więcej informacji można znaleźć na [odpowiedniej stronie `man`](https://manpages.org/ssh_config/5).

<a name="puttykeys"></a>

### Przez PuTTY

`PuTTY` może zapisać poświadczenia i parametry połączenia SSH jako `Session`. Pozwala to również na łączenie się z różnymi serwerami za pomocą pojedynczych kluczy.

Otwórz `PuTTY` i rozwiń podsekcję `SSH` w menu po lewej stronie, następnie kliknij `Auth` i `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Kliknij przycisk `Browse`{.action} i wybierz plik klucza prywatnego `PuTTY` (`keyfile.ppk`) w folderze, w którym go zapisałeś.

Plik klucza jest teraz skojarzony z bieżącą sesją SSH. Przejdź na `Session` w menu po lewej stronie i wprowadź dane do logowania do serwera (`username@IPv4_address`).

Wprowadź nazwę tego połączenia w polu `Saved Sessions` i kliknij `Save`{.action}, aby dodać je do listy.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Od tej chwili możesz kliknąć ten element `Session` i otworzyć połączenie z Twoim serwerem. Aby go przetestować, kliknij na `Open`{.action}. Jeśli plik klucza jest chroniony hasłem, wpisz je na tym etapie.

### Dodawanie dodatkowych kluczy publicznych do instancji

Aby dodać klucze SSH dla innych użytkowników uzyskujących dostęp do instancji, powtórz kroki tworzenia klucza, ale użyj odpowiedniego folderu `$HOME` lub **Windows** `Users` danego użytkownika do tworzenia i przechowywania kluczy SSH (lub uruchom polecenia na urządzeniu dedykowanym tej osoby).

Aby uzyskać szczegółowe informacje na temat tych kroków, zapoznaj się z [przewodnikiem dedykowanym](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="gofurther"></a>

## Sprawdź również

[Jak utworzyć instancję Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Pierwsze kroki z SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Konfiguracja dodatkowych kluczy SSH dla instancji](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).