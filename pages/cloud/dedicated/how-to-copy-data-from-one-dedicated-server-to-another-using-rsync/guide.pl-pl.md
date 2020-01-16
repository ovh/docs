---
title: "Kopiowanie danych z serwera na inny serwer za pomocą\_rsync"
slug: kopiowanie-danych-serwer-rsync
excerpt: "Dowiedz się, jak w prosty sposób kopiować dane z serwera na inny serwer za pomocą\_rsync"
section: Tutoriale
---

## Wprowadzenie

W procesie migracji lub zabezpieczania danych może być konieczne skopiowanie lub przesłanie danych z serwera dedykowanego na inną maszynę. 

Rsync (z ang. „remote synchronization”), dystrybuowany w ramach licencji GNU GPL, to wolne oprogramowanie służące do synchronizacji plików umożliwiające synchronizację jednokierunkową, czyli kopiowanie plików z serwera źródłowego na serwer docelowy. 

**Ten tutorial wyjaśnia, jak kopiować dane z jednego serwera dedykowanego OVHcloud na inną maszynę przy użyciu rsync.**

> [!warning]
>
Tutorial przedstawia zastosowanie jednego lub kilku rozwiązań OVHcloud w powiązaniu z zewnętrznymi narzędziami i opisuje operacje, jakie należy wykonać w danym przypadku. Wybierz odpowiednie dla Ciebie rozwiązanie. Jeśli napotkasz trudności podczas przeprowadzania tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług administracyjnych i/lub zadaj pytanie na forum społeczności OVHcloud<https://community.ovh.com/en/>. Niestety OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie.
>

## Wymagania początkowe


### Co powinieneś umieć:

*     Podstawy administrowania systemem Linux;
*     Instalować nowe pakiety; 
*     Łączyć się z serwerem za pomocą SSH;


### Powinieneś posiadać:

*     Co najmniej dwa serwery dedykowane OVHcloud z dystrybucją GNU/Linux;
*     Dostęp *root* w maszynie źródłowej;
*     Dostęp *SSH* w maszynie docelowej;

## W praktyce


### Etap 1: instalacja rsync

Serwer źródłowy podany jako przykład w tym tutorialu działa w oparciu o system Debian 9.4. Ponieważ w dystrybucji tej rsync jest przechowywany natywnie w repozytoriach, nie ma potrzeby uzupełniania repozytoriów, a rsync może być zainstalowany bezpośrednio.

W tym celu zaloguj się przez SSH jako superużytkownik (lub root) na maszynie źródłowej, a następnie zainstaluj rsync za pomocą następującej komendy:

```sh
apt-get update && apt-get install rsync
```

### Etap 2: uruchomienie przesyłu


#### Gdy nie chcesz wykluczyć żadnego katalogu z kopii:

Rsync umożliwia skopiowanie na inną maszynę kompletu katalogów, podkatalogów oraz plików zawartych w określonej ścieżce.

Struktura komendy zastosowanej jako przykład w tym tutorialu ma postać: `rsync -av source/ destination/`  

Rsync używa protokołu SSH do łączenia się z maszyną docelową, jednak konieczne jest dodanie niezbędnych danych. Dlatego strukturę komendy należy uzupełnić w następujący sposób: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Ponadto, jeśli zmieniłeś port SSH na inny port niż 22, koniecznie podaj numer portu, którego będziesz używał do nawiązania połączenia SSH, dodając do komendy `-e 'ssh -p X'`, gdzie "X" będzie portem SSH.

Komenda, której należy użyć do skopiowania danych z jednego serwera na drugi za pomocą rsync będzie wyglądała następująco:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Domyślnie, nie ma zainstalowanego żadnego wskaźnika pozwalającego na dokładne śledzenie postępu kopiowania.
> Aby śledzić w czasie rzeczywistym postęp transferu (szczegółowe statystyki, postęp w MB, GB itp.), dodaj do komendy argument `-P --stats --human-readable`. Komenda przyjmie wówczas następującą postać:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Gdy chcesz wykluczyć jeden lub kilka katalogów z Twojej kopii:

Rsync umożliwia przesłanie całości katalogów z danej maszyny, możesz jednak wykluczyć niektóre katalogi lub podkatalogi z kopii, którą zamierzasz wykonać. W takim przypadku przygotuj ich listę wraz z nazwami, jakie mają na Twoim serwerze.

Zalecamy wykluczenie z transferu pamięci podręcznej i tymczasowych plików systemowych na serwerze źródłowym, aby uniknąć konfliktów na serwerze docelowym. 

Poniżej przykładowa lista katalogów, które mogą zawierać ten typ plików na serwerze działającym w oparciu o dystrybucję GNU/Linux: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Po sporządzeniu listy katalogów lub podkatalogów, które mają być wykluczone z przesyłu, argument `--exclude` wskaże programowi rsync, które elementy ma zignorować podczas wykonywania kopii. 
 
Argument ten, umieszczony na końcu komendy, należy powtórzyć tyle razy, ile jest folderów lub podfolderów do wykluczenia. Struktura takiej komendy będzie wyglądała następująco: `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Pamiętaj, że lokalizacja folderu musi być wyrażona w jego względnej lokalizacji, ponieważ rsync nie uwzględnia ścieżek bezwzględnych. Zatem, jeśli jeden z katalogów, który ma zostać wykluczony, umieszczony jest w «/home/user/test», a Ty obecnie jesteś w katalogu «/test», dodaj «--exclude="test"» (ścieżka bezwzględna), a nie «--exclude="/home/user/test"» (ścieżka absolutna).
>


Biorąc pod uwagę elementy już wcześniej zawarte, komenda przyjmie następującą postać:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Podsumowanie

Teraz już wiesz, jak w prosty sposób kopiować dane z serwera na inny serwer za pomocą rsync.

Aby dowiedzieć się więcej, przyłącz się do społeczności naszych użytkowników <https://community.ovh.com/>.