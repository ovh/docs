---
title: Zabezpieczenie serwera z zainstalowaną usługą Memcached
slug: zabezpieczenie-serwera-memcached
excerpt: Dowiedz się, jak zabezpieczyć serwer z zainstalowanym Memcached
section: Poziom zaawansowany
---

**Ostatnia aktualizacja dnia 2018-02-03**


## Wprowadzenie

Memcached jest system rozproszonej pamięci podręcznej używanym głównie do przyspieszania aplikacji internetowych poprzez buforowanie statycznych treści oraz wyników zapytań baz danych. Zasada działania jest bardzo prosta: memcache jest to baza danych, której kluczową cechą jest przechowywanie danych w sposób nietrwały.

Memcached nie wymaga domyślnie uwierzytelnienia. Jeśli serwer jest dostępny w sieci publicznej, każdy może odczytać i wpisać dane. Dlatego zabezpieczenie tej bazy danych jest tak ważne.


**Z niniejszego przewodnika dowiesz się, jak przeprowadzić konfigurację, która zapewni bezpieczeństwo usłudze Memcached.**


> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji serwery, którymi samodzielnie zarządzasz. OVH nie ma dostępu do Twoich serwerów i nie pełni funkcji administratora. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy  zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>


## Wymagania początkowe


- Dostęp do serwera z zainstalowaną usługą Memcached (połączenie przez SSH w przypadku środowiska Linux lub przez zdalny pulpit w przypadku systemu Windows).
- Identyfikacja usług wykorzystujących Memcached. W tym celu należy odpowiedzieć na następujące pytania:
    - Czy usługi wykorzystujące Memcached znajdują się na tym samym serwerze? Czy używane są w prywatnej sieci?
    - Czy usługi wykorzystujące Memcached wymagają, aby Memcached był dostępny publicznie w Internecie?


## W praktyce

### Konfiguracja i zabezpieczenie Memcached

Zabezpieczenie serwera Memcached przebiega dwuetapowo:

- ograniczenie adresu nasłuchującego usługi, jeżeli to możliwe tylko do sieci lokalnych;

- akceptowanie wyłącznie połączeń TCP.


Przed wersją /1.5.6/ Memcached autoryzował domyślnie połączenia TCP i UDP.  Tryb UDP może zostać wykorzystany do przeprowadzenia ataków "przez odbicie i zwielokrotnienie" (amplification).
Według programistów używanie połączenia UDP było uzasadnione na etapie tworzenia oprogramowania (zasoby były wówczas ograniczone), obecnie nasłuch po protokole UDP jest już uważany za przestarzały.
W niniejszym przewodniku przyjmiemy założenie, że jesteś wśród 99% użytkowników, którzy nie potrzebują połączeń UDP.

Jeśli Twój serwer Memcached używany jest tylko przez lokalną maszynę, możesz ograniczyć adres nasłuchu usługi do `127.0.0.1`.
Jeśli inne maszyny muszą się z nim łączyć z sieci prywatnej, wymuś nasłuch na prywatnym adresie IP (na przykład  `10.0.0.1`, dostosuj konfigurację do Twojej klasy adresowej).

**We wszystkich przypadkach** wyłącz nasłuch po protokole UDP, używając polecenia `-U 0`.

Poniżej znajdziesz szczegółowe instrukcje dotyczące konfiguracji dla najpopularniejszych systemów operacyjnych.


#### Debian/Ubuntu

Debian i Ubuntu do zarządzania usługą Memcached używa domyślnie `service memcached status/start/restart/force-reload`. Jeśli dotyczy Cię ten przypadek, edytuj plik `/etc/memcached.conf`, korzystając z dostępu root.

Możesz dodać opcję, która wyłącza nasłuch UDP (od którego już się odchodzi).

```sh
# Disable UDP protocol
-U 0
```
Jeśli Twój serwer Memcached używany jest tylko przez maszynę lokalną, możesz włączyć wskazaną poniżej opcję, dzięki czemu Twoja usługa nie będzie dostępna w Internecie: 

```sh
-l 127.0.0.1
```

Po przeprowadzeniu modyfikacji, zapisz plik i wpisz jedną z dwóch poniższych komend, aby aktywować nową konfigurację:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS - Fedora - Red Hat


CentOS, Fedora i Red Hat do zarządzania usługą Memcached używa domyślnie `service memcached status/start/restart/force-reload`. Jeśli dotyczy Cię ten przypadek, edytuj plik `/etc/sysconfig/memcached`, korzystając z dostępu root.


Jeśli Twój serwer Memcached używany jest tylko przez maszynę lokalną, zalecamy wprowadzenie wskazanej poniżej komendy `OPTIONS`. Dzięki temu Twoja usługa nie będzie dostępna w Internecie, gdyż wyłączony zostanie protokół UDP.

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Jeśli Twój serwer Memcached używany jest również przez serwery zewnętrzne spoza sieci lokalnej, prosta komenda `OPTIONS` umożliwi wyłączenie jedynie protokołu UDP:

```sh
OPTIONS="-U 0"
```

Po przeprowadzeniu modyfikacji, zapisz plik i wpisz poniższą komendę, aby aktywować nową konfigurację:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Arch Linux do zarządzania usługą Memcached używa domyślnie `systemctl start/restart/stop memcached`. Jeśli dotyczy Cię ten przypadek, edytuj plik `/usr/lib/systemd/system/memcached`, korzystając z dostępu root.

Jeśli Twój serwer Memcached używany jest tylko przez maszynę lokalną, zalecamy wprowadzenie wskazanej poniżej komendy. Dzięki temu Twoja usługa nie będzie dostępna w Internecie, gdyż wyłączony zostanie protokół UDP.

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Jeśli Twój serwer Memcached używany jest również przez serwery zewnętrzne, poniższa komenda umożliwi wyłączenie jedynie protokołu UDP:

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Po przeprowadzeniu modyfikacji, zapisz plik i wpisz jedną z dwóch poniższych komend, aby aktywować nową konfigurację:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Sprawdź również


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.