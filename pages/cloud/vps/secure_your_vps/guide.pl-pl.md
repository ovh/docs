---
title: Zabezpieczenie serwera VPS
slug: porady-zabezpieczenie-vps
section: 'Pierwsze kroki'
excerpt: 'Odkryj podstawowe elementy umożliwiające zabezpieczenie serwera VPS'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 05-05-2022**

## Wprowadzenie

Kiedy zamawiasz serwer VPS, możesz wybrać dystrybucję lub system operacyjny do pre-instalowania. Serwer jest więc gotowy do użytku po zainstalowaniu serwera. Jednakże, jako administrator, musisz wdrożyć środki gwarantujące bezpieczeństwo i stabilność systemu.

**Niniejszy przewodnik wyjaśnia, jak zabezpieczyć serwer oparty na GNU/Linux.**

> [!warning]
> OVHcloud świadczy usługi, za które jesteś odpowiedzialny w związku z ich konfiguracją i zarządzaniem. Jesteś więc odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Jeśli napotkasz trudności z przeprowadzeniem tych operacji, skontaktuj się z wyspecjalizowanym dostawcą usług i/lub przedyskutuj problem z naszą społecznością użytkowników na stronie https://community.ovh.com/en/. OVHcloud nie może udzielić Ci wsparcia technicznego w tym zakresie.
>

## Wymagania początkowe

- Jeden [VPS](https://www.ovhcloud.com/pl/vps/) na Twoim koncie OVHcloud.
- Dostęp administratora (root) do serwera przez SSH

## W praktyce

> [!primary]
>
> Pamiętaj, że jest to przewodnik oparty na systemie operacyjnym Ubuntu Server. Niektóre polecenia należy dostosować do używanej dystrybucji, a niektóre z nich wymagają użycia narzędzi zewnętrznych. W razie potrzeby skorzystaj z oficjalnej dokumentacji dotyczącej tych aplikacji.
>
> Jeśli skonfigurujesz Twój pierwszy VPS OVHcloud, zapoznaj się [z przewodnikiem dotyczącym uruchomienia serwera VPS](../pierwsze-kroki-vps/).
>

Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami.

### Aktualizacja systemu operacyjnego

Producenci dystrybucji i systemów operacyjnych proponują często aktualizacje pakietów ze względów bezpieczeństwa.<br>
Aktualizacja dystrybucji lub systemu operacyjnego jest kluczowa dla zabezpieczenia serwera VPS.

Aktualizacja ta zostanie wykonana w dwóch etapach.

- Aktualizacja listy pakietów:

```bash
sudo apt update
```

- Aktualizacja pakietów:

```bash
sudo apt upgrade
```

Operacja ta musi być wykonywana regularnie, aby utrzymać system na bieżąco.

### Zmień domyślny port SSH

Jedna z pierwszych operacji, jakie należy przeprowadzić na serwerze, to konfiguracja portu wykorzystywanego do nasłuchiwania usługi SSH. Domyślnie jest on zdefiniowany na **porcie 22**, więc próby włamania na serwerze przez roboty będą wskazywać na ten port jako priorytet.
Zmiana tego parametru na inny port to prosty sposób na wzmocnienie ochrony serwera przed automatycznymi atakami.

W tym celu zmodyfikuj plik konfiguracyjny usługi za pomocą wybranego edytora tekstu (`nano` jest używany w tym przykładzie):

```bash
~$ sudo nano /etc/ssh/sshd_config
```

Należy znaleźć następujące lub równoważne linie:

```console
# What ports, IPs and protocols we listen for
Port 22
```

Zamień liczbę **22** na wybrany numer portu.<br>
**Pamiętaj, aby nie wpisywać numeru portu już używanego w systemie**.
Aby zwiększyć bezpieczeństwo, wprowadź numer 49152 i 65535.<br>
Zapisz i wyjdź z pliku konfiguracyjnego.

Zrestartuj usługę:

```bash
sudo systemctl restart sshd
```

Powinno to wystarczyć do wdrożenia zmian. W przeciwnym razie zrestartuj serwer VPS (`~$ sudo reboot`).

Pamiętaj, że podczas każdego zlecenia połączenia SSH z Twoim serwerem należy wskazać nowy port, na przykład:

```bash
ssh username@IPv4_of_your_VPS -p NewPortNumber
```

### Zmiana hasła przypisanego do użytkownika "root"

Zdecydowanie zaleca się zmianę hasła użytkownika root, aby nie pozostawiać go w pozycji domyślnej w nowym systemie. Więcej informacji znajdziesz w [tym przewodniku](../root-password/).

### Utworzenie użytkownika z ograniczonymi prawami

Zadania, które nie wymagają uprawnień root, powinny być wykonywane za pomocą standardowego użytkownika. Możesz utworzyć nowego użytkownika za pomocą następującego polecenia:

```bash
sudo adduser UserName
```

Następnie wpisz informacje wymagane przez system: hasło, nazwa itd.

Nowy użytkownik będzie mógł logować się przez SSH. Podczas tworzenia połączenia należy stosować określone dane identyfikacyjne.

Po zalogowaniu wprowadź następującą komendę, aby wykonać operacje wymagające uprawnień root:

```bash
su root
```

Wprowadź hasło, kiedy zostaniesz zaproszony, a aktywne połączenie zostanie przekierowane na użytkownika root.

### Uniemożliwienie dostępu do serwera za pomocą użytkownika root

Użytkownik root jest tworzony domyślnie w systemach GNU/Linux. Jest to najwyższy poziom dostępu do systemu operacyjnego.<br>
Nie zaleca się, aby nawet niebezpieczne było udostępnianie serwera VPS wyłącznie za pomocą root, ponieważ może to spowodować nieodwracalne szkody.

Zalecamy wyłączenie bezpośredniego dostępu użytkowników root przez protokół SSH. Pamiętaj, aby utworzyć innego użytkownika przed wykonaniem kroków poniżej.

Zmodyfikuj plik konfiguracyjny SSH w sposób opisany powyżej:

```bash
sudo nano /etc/ssh/sshd_config
```

Znajdź następującą sekcję:

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Zamień **yes** na **no** w linii `PermitRootLogin`.

Aby zmiana ta została uwzględniona, uruchom ponownie usługę SSH:

```bash
sudo systemctl restart sshd
```

Połączenia z serwerem za pośrednictwem użytkownika root (`ssh root@IPv4_of_your_VPS`) zostaną odrzucone.

### Konfiguracja wewnętrznej zapory sieciowej (iptables)

Dystrybucje GNU/Linux są dostarczane wraz z zaporą sieciową o nazwie iptables. Usługa ta nie posiada domyślnie żadnej aktywnej reguły. Możesz się o tym przekonać, wpisując następującą komendę:

```bash
iptables -L
```

Więcej informacji na temat iptables znajdziesz w naszym [przewodniku](../../dedicated/firewall-iptables/).

Zalecamy utworzenie reguł firewalla i dostosowanie ich do Twojego trybu użytkowania. Więcej informacji na temat różnych możliwych operacji znajdziesz w oficjalnej dokumentacji dotyczącej używanej dystrybucji.

### Zainstaluj Fail2ban

Fail2ban to oprogramowanie zapobiegające włamaniom, które blokuje adresy IP, z których atakujący lub bojownicy próbują dostać się do Twojego systemu.<br>
Pakiet ten jest zalecany, a w niektórych przypadkach nawet niezbędny, do ochrony Twojego serwera przed atakami typu *Brute Force* lub *Denial of Service*.

Aby zainstalować pakiet oprogramowania, użyj następującej komendy:

```bash
sudo apt install fail2ban
```

Możesz spersonalizować pliki konfiguracyjne Fail2ban, aby chronić usługi wystawione na działanie publicznego internetu przed próbami wielokrotnego połączenia.

Jak zaleca Fail2ban, utwórz lokalny plik konfiguracyjny Twoich usług kopiując plik "jail.conf":

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Następnie otwórz plik za pomocą edytora tekstu:

```bash
sudo nano /etc/fail2ban/jail.local
```

Pamiętaj, aby przeczytać informacje na górze pliku, w tym komentarze pod `[DEFAULT]`.

Parametry `[DEFAULT]` są globalne i będą miały zastosowanie do wszystkich usług zdefiniowanych do włączenia (`enabled`) w tym pliku. 

Ważne jest, aby wiedzieć, że ogólne parametry będą brane pod uwagę tylko wtedy, gdy nie ma różnych wartości określonych w sekcjach usług (`JAILS`) poniżej w pliku.

Poniżej przedstawiamy przykładowe linie pod `[DEFAULT]`:

```console
bantime  = 10m
maxretry = 5
enabled = false
```

Oznacza to, że adres IP, z którego host próbuje się połączyć, zostanie zablokowany przez dziesięć minut po piątej nieudanej próbie rozpoczęcia sesji.<br>
Ponadto wszystkie parametry określone przez `[DEFAULT]` i w kolejnych sekcjach pozostają wyłączone, chyba że `enabled = true` zostanie dodany do usługi (wymienione poniżej `# JAILS`).

Przykładowo, posiadanie następujących linii w sekcji `[sshd]` aktywuje ograniczenia tylko dla usługi OpenSSH:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

W tym przykładzie, jeśli próba połączenia SSH nie powiedzie się trzy razy w ciągu pięciu minut, okres, w którym IP nie będą aktywne, to wynosi 30 minut.

Możesz zmienić "ssh" na rzeczywisty numer portu, jeśli go zmieniłeś.

Najlepsze podejście polega na aktywowaniu Fail2ban tylko w przypadku usług, które są faktycznie wykonywane na serwerze. Każdy spersonalizowany parametr dodany w `# JAILS` będzie pierwszeństwo przed wartościami domyślnymi.

Po zakończeniu modyfikacji zapisz plik i zamknij edytor.

Zrestartuj usługę, aby upewnić się, że działa ona z zastosowanymi ustawieniami:

```bash
sudo service fail2ban restart
```

Fail2ban ma wiele ustawień i filtrów personalizacji oraz wstępnie zdefiniowanych opcji, np. jeśli chcesz dodać warstwę ochronną do serwera Nginx.

W celu uzyskania dodatkowych informacji oraz uzyskania zaleceń dotyczących Fail2ban zapoznaj się [z oficjalną](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} dokumentacją tego narzędzia.

### Konfiguracja Network Firewall OVHcloud 

Rozwiązania OVHcloud obejmują możliwość aktywacji firewalla w punkcie wejścia infrastruktury, zwanym Network Firewall. Prawidłowa konfiguracja zapory sieciowej pozwala zablokować połączenia jeszcze przed ich wejściem na Twój serwer.

Sprawdź przewodnik “[Konfiguracja Network Firewall](../../dedicated/network-firewall/)”, jeśli chcesz włączyć tą opcję.

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
