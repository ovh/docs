---
title: 'Zabezpieczanie serwera VPS'
slug: porady-zabezpieczenie-vps
section: 'Pierwsze kroki'
---

**Ostatnia aktualizacja z dnia 21-12-2017**

## Wprowadzenie

Zamówienie serwera VPS obejmuje preinstalowaną dystrybucję, natomiast brak jest jakiegokolwiek natywnego protokołu bezpieczeństwa. Należy więc przeprowadzić procedurę zabezpieczenia serwera VPS, w co OVHcloud nie może ingerować.

**Celem niniejszej instrukcji jest dostarczenie ogólnych wskazówek dotyczących zabezpieczania serwera.**

 
> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji maszynę, za którą to Ty przejmujesz odpowiedzialność. Ponieważ nie mamy dostępu do udostępnionej Ci maszyny, nie możemy być jej administratorem. Dlatego to do Ciebie należy codzienne  zarządzanie oprogramowaniem i dbanie o bezpieczeństwo. Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. Jeśli jednak napotkasz jakiekolwiek trudności lub wątpliwości związane z administrowaniem, użytkowaniem lub dbaniem o bezpieczeństwo serwera, zalecamy skontaktowanie się z firmą oferującą usługi zarządzania serwerem. Więcej informacji znajduje się w rozdziale „Sprawdź również”.
> 


## Wymagania początkowe

- Zalogowanie się poprzez SSH do Twojego serwera VPS (dostęp root).


## W praktyce

Udzielimy Ci kilku porad. Uwaga, niniejsza instrukcja ma charakter poglądowy. Niektóre polecenia należy dostosować do używanej dystrybucji. W niektórych informacjach znajdziesz zalecenie, aby skorzystać z narzędzi zewnętrznych. W celu uzyskania odpowiedniej pomocy, dobrze jest skorzystać z oficjalnej dokumentacji, która jest do nich dołączona.

### Aktualizacja systemu

Często ze względów bezpieczeństwa deweloperzy dystrybucji dokonują licznych aktualizacji pakietów. Dbanie o aktualizację posiadanej dystrybucji jest więc zasadniczą kwestią z punktu widzenia zabezpieczenia serwera VPS.

Aktualizację tę przeprowadza się w dwóch krokach:

- Aktualizacja listy pakietów

```sh
apt-get update
```

- Aktualizacja samych pakietów

```sh
apt-get upgrade
```

Po przeprowadzeniu tego kroku Twój system będzie aktualny. Czynność tę należy przeprowadzać regularnie.


### Zmiana domyślnego portu dla protokołu SSH


Jedna z pierwszych operacji, jakie należy przeprowadzić na serwerze, dotyczy portu wykorzystywanego dla protokołu SSH. Domyślnie jako port SSH zdefiniowany jest  **port 22**. Odradzamy więc pozostawienie go z tym ustawieniem i zalecamy zmianę numeru portu. Większość ataków na serwery odbywa się bowiem za pomocą robotów, które biorą domyślnie na cel właśnie port 22. Zmiana ustawień serwera skomplikuje im to zadanie, dzięki czemu na Twój serwer będzie trudniej się dostać.

Poniżej polecenie, które należy wpisać w celu zmodyfikowania pliku konfiguracyjnego usługi:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Polecenie `nano` podane jest tu przykładowo – możesz użyć polecenia `vim` lub jakiegokolwiek innego polecenia umożliwiającego edytowanie pliku sshd_config.
>

Następnie należy wyświetlić poniższy wiersz:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Zamień liczbę 22 na wybraną przez siebie liczbę. **Radzimy jednak nie wpisywać numeru portu już użytego przez system**. Zapisz zmiany i wyjdź z pliku konfiguracyjnego.

Następnie należy ponownie uruchomić usługę:

```sh
/etc/init.d/ssh restart
```

Od tej pory podczas żądania logowania SSH do maszyny będzie trzeba obowiązkowo podawać nowy numer portu:

```sh
ssh root@votrevps.ovh.net -p NowyPort
```

### Zmiana hasła przypisanego do użytkownika "root"

Podczas instalacji dystrybucji w celu uzyskania dostępu do konta administratora (root) tworzone jest automatycznie hasło. Zdecydowanie zalecamy zmianę hasła na swoje własne. W tym celu po zalogowaniu wystarczy wpisać następujące polecenie:

```sh
passwd root
```

System poprosi Cię o dwukrotne wpisanie nowego hasła w celu jego zatwierdzenia. Uwaga, ze względów bezpieczeństwa **nie jest ono widoczne podczas wprowadzania**. Nie będziesz więc widzieć wpisywanych znaków.

Po przeprowadzeniu tego kroku, przy kolejnym logowaniu się do systemu należy wpisać nowe hasło.

### Tworzenie użytkownika z ograniczonymi uprawnieniami i praca na systemie z uprawnieniami root

Utworzenie nowego użytkownika odbywa się przy użyciu następującego polecenia:

```sh
adduser WlasnaNazwaUzytkownika
```

Następnie wpisz poszczególne wymagane przez system informacje (hasło, nazwa itd.).

Ten użytkownik będzie mógł logować się do Twojego systemu przez SSH przy użyciu hasła podanego przy jego utworzeniu.

Po zalogowaniu się do systemu za pomocą powyższego hasła, w razie konieczności przeprowadzenia czynności wymagających uprawnień root, wystarczy wpisać poniższe polecenie:

```sh
su root
```

Następnie w celu zatwierdzenia tej operacji trzeba podać hasło przypisane do użytkownika root.

### Uniemożliwienie dostępu do serwera za pomocą użytkownika root

Użytkownik root tworzony jest domyślnie w systemach UNIX-owych i dysponuje on najszerszymi uprawnieniami w systemie. Jest więc niewskazane, a nawet niebezpieczne, żeby dostęp do serwera VPS odbywał się wyłącznie za pomocą tego użytkownika, ponieważ może on wykonywać na serwerze operacje o nieodwracalnych skutkach.

Zalecamy uniemożliwienie mu bezpośredniego dostępu poprzez protokół SSH.

W celu wykonania tej czynności należy zmodyfikować plik konfiguracyjny SSH w taki sam sposób, w jaki poprzednio zmieniało się numer portu dostępu do serwera VPS:

```sh
nano /etc/ssh/sshd_config
```

Następnie należy odnaleźć poniższą sekcję:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Zamień **yes** na **no** w wierszu `PermitRootLogin`.

Aby zmiana ta została uwzględniona, usługę SSH należy uruchomić ponownie:

```sh
/etc/init.d/ssh restart
```

Od tej pory do logowania się do systemu należy posługiwać się wcześniej utworzonym przez siebie użytkownikiem.


### Instalowanie i konfigurowanie pakietu Fail2ban

Fail2ban to oprogramowanie zapobiegające włamaniom, które blokuje nieznane adresy IP, gdy próbują spenetrować Twój system. Pakiet ten jest zalecanym, a wręcz koniecznym narzędziem do walki z wszelkimi próbami ataków typu brute force na Twoje usługi.

Instalację pakietu przeprowadza się za pomocą poniższego polecenia:

```sh
apt-get install fail2ban
```

Po zainstalowaniu pakietu należy zmodyfikować plik konfiguracyjny w celu dostosowania go według swoich własnych potrzeb. Przed przystąpieniem do zmian zalecamy wykonanie kopii bezpieczeństwa tego pliku za pomocą następującego polecenia:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Następnie możesz wprowadzić zmiany do pliku:

```sh
nano /etc/fail2ban/jail.conf
```

Po zakończeniu tej operacji możesz ponownie uruchomić usługę za pomocą poniższego polecenia:

```sh
/etc/init.d/fail2ban restart
```

W przypadku jakichkolwiek dodatkowych pytań zachęcamy do sięgnięcia do [oficjalnej dokumentacji](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}, która jest dołączona do tego narzędzia.

### Konfigurowanie wewnętrznej zapory sieciowej: iptables

Czysta dystrybucja wyposażona jest w zaporę sieciową o nazwie iptables. Usługa ta nie posiada domyślnie żadnej aktywnej reguły. Można się o tym przekonać wpisując następujące polecenie:

```sh
iptables -L
```

Zalecamy utworzenie na tej zaporze reguł i dostosowanie ich do swojego trybu użytkowania. Wszelkie informacje na temat różnego rodzaju możliwości obsługi znajdują się w rozdziale dotyczącym działania usługi w oficjalnej dokumentacji dołączonej do użytkowanej dystrybucji.

### Konfiguracja firewalla od OVHcloud

OVHcloud oferuje zaporę sieciową na wejściu do infrastruktury OVHcloud.  Jej uruchomienie i skonfigurowanie umożliwia blokowanie protokołów zanim jeszcze dotrą do Twojego serwera.

Poniżej [link](https://docs.ovh.com/gb/en/dedicated/firewall-network/){.external} do instrukcji poświęconej tej zaporze sieciowej.

### Tworzenie kopii zapasowej systemu i danych

Pojęcie bezpieczeństwa nie ogranicza się wyłącznie do ochrony systemu przed atakami.

Zabezpieczenie Twoich danych jest kluczowa kwestią, dlatego też OVHcloud oferuje trzy możliwości wykonywania backupu:

- opcja `Snapshot` polegająca na ręcznym tworzeniu kopii migawkowej (snapshot) Twojej maszyny wirtualnej (dostępna na VPS-ach SSD, Cloud i Cloud RAM);
- opcja `Zautomatyzowany Backup `, w ramach której kopia zapasowa Twojego serwera VPS (poza dyskiem dodatkowym) jest tworzona codziennie zgodnie z harmonogramem, eksportowana, a następnie poddana trzykrotnej replikacji. Dopiero wówczas jest ona udostępniana w Twoim panelu klienta (dostępna wyłącznie na VPS-ach Cloud i Cloud RAM) ;
- opcja `Backup Storage` umożliwiająca ręczne magazynowanie i odzyskiwanie plików na dedykowanej przestrzeni dyskowej. W tym celu, aby sprostać potrzebom użytkowników wszystkich systemów operacyjnych, dostępne są protokoły FTP, NFS i CIFS. W ten sposób możesz zabezpieczyć swoje dane na wypadek przerwy w działaniu usługi (dostępna wyłącznie na VPS-ach Cloud i Cloud RAM).

Wszystkie informacje na temat naszej oferty magazynowania danych dla serwerów VPS: <https://www.ovhcloud.com/pl/vps/>.

## Sprawdź również

[Instrukcja dotycząca Firewalla](https://docs.ovh.com/gb/en/dedicated/firewall-network/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
