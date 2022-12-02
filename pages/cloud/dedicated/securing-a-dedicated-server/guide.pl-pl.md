---
title: 'Zabezpieczanie serwera dedykowanego'
slug: porady-zabezpieczanie-serwera-dedykowanego
excerpt: 'Dowiedz się, jak zwiększyć bezpieczeństwo serwera dedykowanego'
section: 'Pierwsze kroki'
order: 2
---

**Ostatnia aktualizacja z dnia 2018-08-13**

## Wprowadzenie

Kiedy zamawiasz serwer dedykowany, nie jest na nim natywnie zaimplementowany żaden protokół bezpieczeństwa. Do Ciebie zatem należy zabezpieczenie serwera. OVHcloud nie ponosi odpowiedzialności, jeśli Twoja maszyna nie jest zabezpieczona.

**Dowiedz się, jak zabezpieczyć serwer dedykowany.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>


## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovh.pl/serwery_dedykowane/){.external}
- Połączenie przez SSH (dostęp root) w przypadku Linuxa lub jako administrator w przypadku systemu Windows


## W praktyce

> [!primary]
>
> Niniejsza instrukcja ma charakter poglądowy. Być może będziesz musiał dostosować niektóre komendy do konkretnej dystrybucji i/lub systemu operacyjnego, którego używasz. W niektórych sytuacjach rekomendujemy użycie narzędzi zewnętrznych. W przypadku pytań dotyczących korzystania z tych narzędzi zapoznaj się z oficjalną dokumentacją producenta.  
>

### Aktualizacja systemu

Producenci dystrybucji i systemów operacyjnych sugerują częste aktualizacje pakietów oprogramowania ze względów bezpieczeństwa. **Aktualizacja dystrybucji lub systemu operacyjnego jest kluczowa dla bezpieczeństwa Twojego serwera.**

Jest to proces dwuetapowy, który polega na aktualizacji listy pakietów (listy zainstalowanych aplikacji) oraz aktualizacji samych pakietów.

#### Aktualizacja listy pakietów

Zaktualizuj listę pakietów na Twoim serwerze w następujący sposób: 

```sh
apt-get update
```

#### Aktualizacja pakietów

Zaktualizuj pakiety na Twoim serwerze w następujący sposób: 

```sh
apt-get upgrade
```

Po zakończeniu tych operacji Twój system będzie zaktualizowany. Aktualizacja powinna być przeprowadzana regularnie.


### Zmiana domyślnego portu dla protokołu SSH

Jedna z pierwszych operacji, jakie należy przeprowadzić na serwerze, dotyczy konfiguracji usługi SSH. Po instalacji systemu operacyjnego, należy zmienić port wykorzystywany dla tego protokołu. Domyślnie jako port SSH zdefiniowany jest port 22. Zalecamy zmianę jego domyślnej wartości. Większość ataków na serwery odbywa się bowiem za pomocą robotów, które biorą domyślnie na cel właśnie port 22. Zmiana tego parametru sprawi, że Twój serwer będzie trudny do namierzenia.

> [!primary]
>
> W kolejnych przykładach użyjemy edytora tekstu **Nano** dla systemu Linux, możesz jednak użyć każdego dowolnego edytora tekstu, który umożliwi Ci edycję pliku konfiguracyjnego.
>

Poniżej polecenie, które należy wpisać w celu zmodyfikowania pliku konfiguracyjnego usługi:

```sh
nano /etc/ssh/sshd_config
```

Następnie odnajdź w pliku wiersz:

```sh
What ports, IPs and protocols we listen for Port 22
```

Zastąp **22** wybranym przez Ciebie numerem, po czym zapisz i zamknij plik konfiguracyjny. **Upewnij się, że nie wpisałeś używanego już numeru portu**. Następnie zrestartuj serwer.

Podczas łączenia się przez SSH z Twoją maszyną podaj nowy port:

```sh
ssh root@numer_serwera.ovh.net -p NowyPort
```

> [!warning]
>
> Pamiętaj, że modyfikacja domyślnego portu protokołu SSH lub innego protokołu stanowi potencjalne ryzyko. Niektóre usługi nie mogą zostać skonfigurowane i używane z niestandardowymi portami i nie będą działały, jeśli domyślny port zostanie zmodyfikowany.
>


### Zmiana hasła przypisanego do użytkownika "root"

Po instalacji dystrybucji lub systemu operacyjnego hasło dla dostępu root zostaje utworzone automatycznie.  Rekomendujemy jego zmianę. W tym celu połącz się z serwerem za pomocą SSH i wpisz następujące polecenie:

```sh
passwd root
```

Następnie wprowadź dwa razy Twoje nowe hasło. Ze względów bezpieczeństwa **hasło nie będzie się wyświetlało podczas wpisywania**.  Nie będziesz więc widzieć wpisywanych znaków.

Po przeprowadzeniu tego kroku, przy kolejnym logowaniu do systemu należy wpisać nowe hasło.


### Utworzenie użytkownika z ograniczonymi prawami

Zalecamy utworzenie konta użytkownika z ograniczonymi prawami dostępu do Twojego serwera do użytku na co dzień. Możesz utworzyć nowego użytkownika za pomocą następującego polecenia:

```sh
adduser Nazwa_Nowego_Użytkownika
```

Następnie wpisz wymagane przez system informacje (hasło, nazwa itd.).

Użytkownik ten będzie mógł się logować do Twojego systemu przez SSH za pomocą hasła podanego przy utworzeniu konta. Po zalogowaniu do systemu za pomocą danych dostępowych, w razie konieczności przeprowadzenia czynności wymagających uprawnień root, wystarczy wpisać poniższe polecenie:

```sh
su root
```

Następnie w celu zatwierdzenia tej operacji podaj hasło przypisane do użytkownika root.


### Uniemożliwienie dostępu za pomocą użytkownika root

Użytkownik root jest utworzony domyślnie w systemach UNIX, takich jak Linux czy MAC OS. Użytkownik root posiada wszystkie prawa administratora. Odradzamy, i uważamy wręcz za niebezpieczne, pozostawienie dostępu do Twojego serwera przez użytkownika root jako jedynego dostępu. Użytkownik ten może bowiem wykonywać na serwerze nieodwracalne operacje.

Zalecamy dezaktywację bezpośredniego dostępu użytkowników root przez protokół SSH. W celu wykonania tej czynności zmodyfikuj plik konfiguracyjny SSH w taki sam sposób, w jaki poprzednio zmieniłeś numer portu dostępu do Twojego serwera:

W tym celu połącz się z serwerem za pomocą SSH i wpisz następujące polecenie:

```sh
nano /etc/ssh/sshd_config
```

Teraz znajdź następującą sekcję i w miejsce “yes” wstaw “no” w wierszu `PermitRootLogin`, jak pokazano w poniższym przykładzie:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Po zarejestrowaniu i zamknięciu pliku konfiguracyjnego uruchom ponownie usługę SSH, aby wprowadzić modyfikacje przy użyciu następującej komendy:

```sh
/etc/init.d/ssh restart
```

### Instalacja i konfiguracja Fail2ban

Fail2ban to oprogramowanie zapobiegające włamaniom, które blokuje nieznane adresy IP, gdy próbują spenetrować Twój system. Ten pakiet jest zalecany w celu ochrony Twojego serwera przed atakami typu “brute force”.

Do instalacji Fail2ban użyj następującej komendy:

```sh
apt-get install fail2ban
```

Po zainstalowaniu pakietu zmodyfikuj plik konfiguracyjny w celu dostosowania go do konfiguracji Twojego systemu.  Zalecamy, abyś przed przystąpieniem do modyfikacji wykonał kopię zapasową pliku konfiguracyjnego, wpisując następującą komendę: 

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Następnie możesz wprowadzić zmiany do pliku:

```sh
nano /etc/fail2ban/jail.conf
```

Po wprowadzeniu modyfikacji uruchom ponownie usługę za pomocą polecenia:

```sh
sh /etc/init.d/fail2ban restart 
```

W przypadku dodatkowych pytań dotyczących Fail2Ban zachęcamy do zapoznania się z [oficjalną dokumentacją](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} dołączoną do tego narzędzia.


### Konfiguracja zapory sieciowej iptables

Czyste dystrybucje Linux są wyposażone w zaporę sieciową o nazwie iptables. Usługa ta nie posiada domyślnie żadnej aktywnej reguły. Możesz się o tym przekonać, wpisując następującą komendę:

```sh
iptables -L
```

Zalecamy utworzenie dla tej zapory reguł i dostosowanie ich do Twojego trybu użytkowania. Więcej informacji dotyczących konfiguracji zapory iptables zapoznaj się z [naszym przewodnikiem](https://docs.ovh.com/pl/dedicated/firewall-iptables/) i w oficjalnej dokumentacji dołączonej do dystrybucji Linux.


### Konfiguracja Network Firewall OVHcloud

Serwery OVHcloud chronione są na wejściu do infrastruktury zaporą sieciową zwaną Network Firewall. Jej uruchomienie i skonfigurowanie umożliwia blokowanie protokołów zanim jeszcze dotrą do Twojego serwera.

Aby skonfigurować Network Firewall, możesz również skorzystać z [przewodnika](https://docs.ovh.com/pl/dedicated/network-firewall/){.external}.


### Tworzenie kopii zapasowej systemu i danych

Pojęcie bezpieczeństwa nie ogranicza się wyłącznie do ochrony systemu przed atakami. Niezwykle istotne jest również zabezpieczenie Twoich danych. Dlatego OVHcloud oferuje bezpłatnie 500 GB przestrzeni dyskowej na kopie zapasowe. Możesz aktywować tę przestrzeń w Panelu klienta i połączyć się z nią, używając następujących protokołów:

- FTP
- FTPS
- NFS
- CIFS

Będziesz potrzebował zewnętrznego rozwiązania do replikacji danych i przesłania ich na przestrzeń dyskową do przechowywania kopii zapasowych.

Więcej informacji o naszych rozwiązaniach do przechowywania kopii zapasowych znajdziesz w [przewodniku](https://docs.ovh.com/gb/en/dedicated/services-backup-storage/){.external}.


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.