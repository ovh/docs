---
title: Zabezpieczenie serwera VPS
slug: porady-zabezpieczenie-vps
section: 'Pierwsze kroki'
excerpt: 'Odkryj podstawowe elementy umożliwiające zabezpieczenie serwera VPS'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 15-01-2021**

## Wprowadzenie

Kiedy zamawiasz serwer VPS, możesz wybrać dystrybucję lub system operacyjny do pre-instalowania. Serwer jest więc gotowy do użytku po zainstalowaniu serwera.  Jednakże, jako administrator, musisz wdrożyć środki gwarantujące bezpieczeństwo i stabilność systemu.

**Niniejszy przewodnik wyjaśnia, jak zabezpieczyć serwer.**
 
> [!warning]
>
> OVHcloud dostarcza Ci maszyny, za które przejmujesz odpowiedzialność. W rzeczywistości nie mamy dostępu do danych przechowywanych na tych maszynach i nie jesteśmy ich administratorami. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta. Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub zabezpieczeniem Twojego serwera zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera. Więcej informacji znajduje się w sekcji “Sprawdź również”.
> 

## Wymagania początkowe

- oferty [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud
- dostęp administracyjny (root) przez SSH

## W praktyce

> [!primary]
>
> Należy pamiętać, że jest to przewodnik generalny. Niektóre polecenia muszą być dostosowane do dystrybucji lub systemu operacyjnego, którego używasz. Czasami zalecamy użycie narzędzi zewnętrznych. Jeśli potrzebujesz wsparcia, zapoznaj się z oficjalną dokumentacją dotyczącą tych aplikacji.
>
> Jeśli skonfigurujesz Twój pierwszy VPS OVHcloud, zapoznaj się [z przewodnikiem dotyczącym uruchomienia serwera VPS](../pierwsze-kroki-vps/).
>

### Aktualizacja systemu

Deweloperzy dystrybucji przeprowadzają liczne aktualizacje pakietów, bardzo często ze względów bezpieczeństwa. Dbanie o aktualizację posiadanej dystrybucji jest więc zasadniczą kwestią z punktu widzenia zabezpieczenia serwera VPS.

Aktualizacja ta zostanie wykonana w dwóch etapach.

- Aktualizacja listy pakietów:

```sh
apt-get update
```

- Aktualizacja samych pakietów:

```sh
apt-get upgrade
```

Operacja ta jest wykonywana regularnie, w celu zachowania aktualnego systemu.


### Zmiana domyślnego portu dla protokołu SSH

Jedna z pierwszych operacji, jakie należy wykonać na serwerze, to konfiguracja usługi SSH poprzez zmianę portu nasłuchowego. Jest on ustawiony domyślnie na **porcie 2**. W rezultacie próby włamania serwerów przez roboty będą skierowane na ten port. Zmiana tego parametru przy użyciu innego portu to prosty sposób na wzmocnienie ochrony serwera przed automatycznymi atakami.

Poniżej polecenie, które należy wpisać w celu zmodyfikowania pliku konfiguracyjnego usługi:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Polecenie `nano` podane jest jako przykład. Możesz użyć polecenia `vim` lub innego polecenia, które umożliwia modyfikację plików konfiguracyjnych.
>

Następnie należy odnaleźć następujące linie:

```sh
# What ports, IPs and protocols we listen for
Port 22
```

Zamień numer **22** na wybrany numer portu. **Nie wpisuj numeru portu już używanego w systemie**. Ze względów bezpieczeństwa wprowadź liczbę od 49152 do 65535. <br>Zapisz i wyjdź z pliku konfiguracyjnego.

Zrestartuj usługę:

```sh
systemctl restart sshd
```

Powinno to wystarczyć do wdrożenia zmian. Możesz również zrestartować serwer VPS (`~$ reboot`).

Pamiętaj, że w przypadku prośby o połączenie SSH z Twoim serwerem należy wpisać nowy port, na przykład:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Zmiana hasła przypisanego do użytkownika "root"

Zdecydowanie zaleca się zmianę hasła użytkownika root tak, aby nie pozostawiało go przy wartości domyślnej w nowym systemie. Aby uzyskać więcej informacji, zapoznaj się z informacjami zawartymi w [tym przewodniku](../root-password/).

### Tworzenie użytkownika z ograniczonymi uprawnieniami

Zadania, które nie wymagają uprawnień root, powinny być wykonywane za pomocą standardowego użytkownika. Możesz utworzyć użytkownika za pomocą polecenia:

```sh
adduser CustomUserName
```

Następnie wpisz wymagane przez system informacje (hasło, nazwa itd.).

Nowy użytkownik będzie mógł się logować przez SSH. Podczas połączenia użyj określonych informacji identyfikacyjnych.

Po zalogowaniu się do systemu z tymi danymi identyfikacyjnymi, jeśli chcesz wykonać operacje wymagające uprawnień administratora, wprowadź następującą komendę:

```sh
su root
```

Wprowadź hasło, kiedy zostaniesz zaproszony, a aktywne połączenie zostanie przekierowane na użytkownika root.

### Wyłączenie dostępu do serwera przez użytkownika root

Użytkownik root jest tworzony domyślnie w systemach GNU/Linux. Dostęp root oznacza posiadanie największej liczby uprawnień w systemie operacyjnym. Nie zaleca się, a nawet niebezpieczne pozostawienie dostępu do serwera VPS wyłącznie za pomocą dostępu root, ponieważ konto to może wykonywać operacje nieodwracalnie szkodliwe.

Zalecamy dezaktywację bezpośredniego dostępu do użytkownika root przez protokół SSH. Pamiętaj, aby utworzyć innego użytkownika przed wykonaniem kroków poniżej.

Należy zmienić plik konfiguracyjny SSH w taki sam sposób, jak opisano powyżej:

```sh
nano /etc/ssh/sshd_config
```

Zlokalizuj następującą sekcję:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Zamień **yes** na **no** w linii `PermitRootLogin`.

Aby zmiana ta została uwzględniona, uruchom ponownie usługę SSH:

```sh
systemctl restart sshd
```

Połączenia z serwerem za pośrednictwem użytkownika root (`ssh root@IPv4_of_your_VPS`) zostaną odrzucone.

### Instalacja Fail2ban

Fail2ban to oprogramowanie zapobiegające włamaniom, które blokuje nieznane adresy IP, gdy próbują spenetrować Twój system. Oprogramowanie to jest zalecane, nawet niezbędne do ochrony przed atakami na Twoją usługę.

Aby zainstalować pakiet oprogramowania, użyj następującej komendy:

```sh
apt-get install fail2ban
```

Po zainstalowaniu pakietu należy zmodyfikować plik konfiguracyjny, aby dostosować go do Twojego użytku. Przed wprowadzeniem jakichkolwiek zmian zaleca się wykonanie kopii zapasowej pliku konfiguracyjnego za pomocą następującego polecenia:

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

W przypadku dodatkowych pytań dotyczących Fail2Ban zachęcamy do zapoznania się z oficjalną dokumentacją dotyczącą tego narzędzia, klikając [ten link](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Konfiguracja wewnętrznej zapory sieciowej (iptables)

Dystrybucje Linux i UNIX są dostarczane z zaporą sieciową o nazwie iptables. Usługa ta nie posiada domyślnie żadnej aktywnej reguły. Możesz się o tym przekonać, wpisując następującą komendę:

```sh
iptables -L
```

Zalecamy utworzenie na tej zaporze reguł i dostosowanie ich do Twojego trybu użytkowania. Aby uzyskać więcej informacji na temat różnych możliwych operacji, zapoznaj się z oficjalną dokumentacją dotyczącą używanej dystrybucji.

### Konfiguracja Firewall Network OVHcloud 

Rozwiązania OVHcloud obejmują możliwość aktywacji firewalla w punkcie wejścia infrastruktury, zwanym Firewall Network. Prawidłowa konfiguracja zapory sieciowej pozwala zablokować połączenia jeszcze przed ich wejściem na Twój serwer.

Sprawdź przewodnik "[Konfiguracja Firewall Network](../../dedicated/network-firewall/)", jeśli chcesz włączyć tą opcję.

### Tworzenie kopii zapasowej systemu i danych

Koncepcja bezpieczeństwa nie ogranicza się do ochrony systemu przed atakami.

Zabezpieczenie danych jest jednym z kluczowych czynników, dlatego OVHcloud oferuje kilka opcji tworzenia kopii zapasowych:

- Opcja `Snapshot` umożliwia tworzenie zrzutu ręcznego.
- Opcja automatycznej `kopii zapasowej` pozwala na zachowanie regularnych kopii zapasowych serwera VPS (z wyjątkiem dodatkowych dysków).

Wszystkie informacje na temat rozwiązań kopii zapasowych dostępnych dla Twojej usługi znajdują się na [stronie produktu](https://www.ovhcloud.com/pl/vps/options/) i w odpowiednich [przewodnikach](../).

## Sprawdź również

[Pierwsze kroki z serwerem VPS](../pierwsze-kroki-vps/) 

[Konfiguracja rozwiązania Network Firewall](../../dedicated/network-firewall/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
