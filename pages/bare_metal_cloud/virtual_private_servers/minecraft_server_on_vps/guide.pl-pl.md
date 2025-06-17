---
title: 'Jak utworzyć serwer Minecraft na serwerze VPS lub dedykowanym'
excerpt: 'Dowiedz się, jak zainstalować własny serwer Minecraft'
updated: 2025-06-06
---

## Wprowadzenie

Minecraft jest grą wideo budowy na światowym sukcesie. Musi być zainstalowany na serwerze, jeśli chcesz grać w trybie multiplayer.

Możesz wynająć lub samodzielnie skonfigurować serwer Minecraft na [serwerze VPS](/links/bare-metal/vps) lub na [serwerze dedykowanym](/links/bare-metal/bare-metal). Pozwoli to zaoszczędzić pieniądze i zapewni pełną kontrolę nad instancją gier.

**Tutorial wyjaśnia, jak uruchomić serwer Minecraft Java Edition na serwerze VPS OVHcloud i przetestować jego łączność.**

> [!warning]
> Niniejszy przewodnik wyjaśnia, jak korzystać z jednego lub kilku rozwiązań OVHcloud za pomocą zewnętrznych narzędzi i opisuje działania, jakie należy podjąć w konkretnym przypadku. Może być konieczne dostosowanie instrukcji do Twojego przypadku.
>
> W przypadku trudności w stosowaniu tych instrukcji, zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner). Więcej informacji znajdziesz w sekcji [Sprawdź](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie serwera [VPS](/links/bare-metal/vps) na koncie OVHcloud
- Instalacja dystrybucji GNU/Linux na serwerze
- Dostęp administratora (sudo) przez SSH do serwera
- Podstawowe zrozumienie administracji GNU/Linux

## W praktyce

> [!primary]
> Tutorial ten opiera się na wersji "1.21" Minecraft Java Edition oraz wersji "24.0.1" OpenJDK.
>

### Etap 1: przygotować serwer

Pierwszy etap polega na skonfigurowaniu serwera VPS do instalacji Minecraft.
<br>Zaleca się zamówienie nowego VPS lub przeinstalowanie istniejącego z [Panelu client OVHcloud](/links/manager), używając najnowszej dostępnej wersji Ubuntu lub Debiana. W razie potrzeby zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z serwerem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps#reinstallvps)".

Po zainstalowaniu systemu operacyjnego zaloguj się do Twojego serwera VPS przez SSH, jak opisano w przewodniku "[Pierwsze kroki z serwerem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

Zaktualizuj pakiety z najnowszymi wersjami:

```sh
$ sudo apt update
```

```sh
$ sudo apt full-upgrade
```

Użyj następującego polecenia, aby upewnić się, że wszystkie niezbędne pakiety są zainstalowane:

```sh
$ sudo apt install screen nano wget git
```

Zainstaluj pakiet Java:

```sh
$ sudo apt install openjdk-24-jdk
```

Aby uniknąć tworzenia luk w systemie, utwórz użytkownika o nazwie "minecraft", który będzie wykonywać operacje serwera:

```sh
$ sudo adduser minecraft --disabled-password
```

Wymagane są różne informacje; wystarczy nacisnąć przycisk `Enter`{.action}, aby je zatwierdzić.

Użytkownik został utworzony. Pamiętaj, że dla tego użytkownika nie zostało określone hasło. To normalne, ponieważ konto jest dostępne tylko wtedy, gdy jest już podłączone przez SSH do Twojego konta użytkownika.

Przejdź na nowego użytkownika:

```sh
$ sudo su - minecraft
```

> [!primary]
>
> Użytkownik "minecraft" wykonuje następujące polecenia.
>

Aby zakończyć proces instalacji, utwórz folder o nazwie `server`.

```sh
$ mkdir ~/server && cd ~/server
```

### Etap 2: zainstalować serwer Vanilla Minecraft

> [!primary]
>
> Serwer "Vanilla" to instancja bez żadnych dodatków i pluginów. Doświadczysz gry w taki sposób, w jaki została ona stworzona przez twórców.
>

Najpierw skopiuj/wklej link do pobrania dla oprogramowania serwera.
<br>Na oficjalnej [stronie Minecraft](https://minecraft.net/download/server){.external}, kliknij prawym przyciskiem myszy link do pobrania i wybierz `Skopiuj adres z linku`{.action}.

![Pobieranie serwera](images/jar_file_download.png){.thumbnail}

W terminalu wiersza poleceń sprawdź, czy nadal jesteś w folderze `server` i użyj `wget`, aby pobrać plik.
<br>Zastąp `link_telezaładunek` rzeczywistym adresem URL, który wcześniej skopiowałeś.

```sh
~/server$ wget link_telezaładunek
```

Zanim uruchomisz serwer, musisz zaakceptować licencję oprogramowania (EULA lub _End User License Agreement_), aby uniknąć jego natychmiastowej przerwy w działaniu. W tym celu wprowadź następującą komendę:

```sh
~/server$ echo "eula=true" > eula.txt
```

Plik o nazwie `eula.txt` jest utworzony w katalogu głównym Twojego serwera, który zawiera linię `eula=true`. Oznacza to, że użytkownik akceptuje warunki korzystania z Minecraft.
<br>Zapraszamy do zapoznania się z ogólnymi warunkami na oficjalnej [stronie internetowej Minecraft](https://www.minecraft.net/){.external}.

Twój serwer jest gotowy do uruchomienia.

W etapie 1 zainstalowaliśmy pakiet `screen`, który umożliwia otwarcie kilku sesji terminala (*shell*). Uruchomimy Minecraft w nowej sesji, która może się uruchomić w tle. `screen` jest bardzo przydatny, ponieważ umożliwia uruchomienie kilku serwerów Minecraft jednocześnie.

Po pierwsze, stworzymy nową `shell` o nazwie `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

Aktywne okno Twojego terminala zmienia się, automatycznie przełączasz się na nową sesję `shell`. W razie potrzeby możesz utworzyć dodatkowe `shells` i je wyświetlić w poniższym poleceniu:

```sh
~/server$ screen -ls
```

Aby odłączyć się od `shell` (i utrzymać ją w trakcie wykonywania), naciśnij `Ctrl`{.action}, a następnie `a`{.action}, a następnie `d`{.action} na klawiaturze.

Aby przejść z jednego `shell` do innego, zastosuj następujące polecenie:

```sh
~/server$ screen -x nazwa_shell
```

Możesz również nacisnąć `Ctrl`{.action}, a następnie `a`{.action}, a następnie `n`{.action} na klawiaturze.

W wcześniej utworzonej powłoce `minecraft1` uruchom serwer Minecraft za pomocą następującego polecenia. (Użyj `ls`, aby sprawdzić nazwę pliku, jeśli jest inny.)

```sh
~/server$ java -Xmx1024M -Xms1024M -jar server.jar nogui
```

- `Xmx1024M`: Konfiguruje serwer do uruchomienia z 1024 MB lub 1 GB pamięci RAM. Limit ten można zwiększyć, jeśli serwer ma być uruchamiany z większą ilością pamięci RAM.
- `Xms1024M`: Pozwala serwerowi na użycie maksymalnie 1024 MB pamięci RAM. Możesz zwiększyć ten limit, jeśli chcesz, aby serwer działał z większą ilością pamięci RAM, aby pomieścić więcej graczy lub jeśli uważasz, że serwer działa wolno.
- `jar`: Określa plik jar serwera do uruchomienia.
- `nogui`: Mówi serwerowi, by nie uruchamiał GUI.

Można również użyć poniższego polecenia:

```sh
~/server$ java -jar server.jar
```

Po uruchomieniu serwera otrzymamy następujący wynik:

```console
[14:52:58] [Server thread/INFO]: Done (41.530s)! For help, type "help"
```

Aby wyłączyć serwer, wprowadź komendę `stop`.

### Etap 3: połączyć się z serwerem

Twoja instancja serwerowa działa teraz. Aby grać w grę, pobierz klienta Minecraft z oficjalnej [strony internetowej](https://www.minecraft.net/){.external}.

Zainstaluj i uruchom klienta dla systemu operacyjnego i zaloguj się.

![Połączenie z serwerem](images/login_minecraft.png){.thumbnail}

W kolejnym oknie wpisz nazwę serwera w polu `Server Name` i adres IP serwera w polu `Server Address`.

![Informacje o serwerze](images/minecraft_server_login.png){.thumbnail}

Domyślnie nie należy wpisywać żadnego portu.

### Podsumowanie

Twój serwer Vanilla Minecraft jest teraz zainstalowany na Twoim serwerze VPS.

Niniejszy przewodnik instalacyjny dotyczy również [serwera dedykowanego OVHcloud](/links/bare-metal/bare-metal) lub instancji [Public Cloud](/links/public-cloud/compute). Dzięki tym rozwiązaniom korzystasz również z gwarantowanych i stabilnych zasobów fizycznych w każdej chwili, ponieważ sprzęt jest dedykowany.

## Sprawdź również <a name="gofurther"></a>

Aby dodać dodatki, mody i sprawniej skonfigurować serwer Minecraft, zapoznaj się z oficjalną dokumentacją: <https://help.mojang.com/>.

Dołącz do [grona naszych użytkowników](/links/community).
