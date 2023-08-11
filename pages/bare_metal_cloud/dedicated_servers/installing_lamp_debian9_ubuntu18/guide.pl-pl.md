---
title: Tutorial - Instalacja serwera www (LAMP) na Debian lub Ubuntu
excerpt: "Dowiedz się, jak skonfigurować serwer WWW LAMP"
updated: 2023-05-10
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

Uruchomienie serwera www i powiązanych z nim aplikacji pozwala serwerowi cloud na hostowanie stron www lub dynamicznych aplikacji www. Instalacja *LAMPstack* jest sprawdzoną operacją realizowaną z wykorzystaniem aplikacji open source. LAMP oznacza **L**inux (OS), **A**pache (serwer www), **M**ariaDB (system zarządzania bazami danych) i **P**HP (język programowania). 

**Tutorial wyjaśnia, jak zainstalować serwer LAMP w Twojej usłudze OVHcloud.**

## Wymagania początkowe

- Serwer [dedykowany](https://www.ovhcloud.com/pl/bare-metal/), [VPS](https://www.ovhcloud.com/pl/vps/) lub instancja [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud (z wyłączeniem systemu Windows)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Dostęp administracyjny do Twojej usługi przez SSH


> [!warning]
> Tutorial przedstawia zastosowanie jednego lub kilku rozwiązań OVHcloud w powiązaniu z zewnętrznymi narzędziami i opisuje operacje, jakie należy wykonać w konkretnym przypadku. Być może będziesz musiał dostosować instrukcję do Twojego przypadku.
>
> W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy skorzystanie z pomocy [wyspecjalizowanego](https://partner.ovhcloud.com/pl/directory/) usługodawcy lub zbliżenie się do [naszej społeczności](https://community.ovh.com/en/).
>

## W praktyce

Jeśli dystrybucja Debian lub Ubuntu nie jest już zainstalowana na Twoim serwerze, przeprowadź wstępną instalację w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). Jest to najlepszy sposób na posiadanie własnego systemu dla Twojego serwera www i aplikacji, które go wykonują.

Zapoznaj się z przewodnikiem dotyczącym instalacji dystrybucji w Twojej usłudze OVHcloud i połącz się z nią przez [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction):

- [Serwer dedykowany](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)
- [Instancja Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)


> [!primary]
>
> Poniższe instrukcje są sprawdzane dla dystrybucji Debian 11. Ponieważ Ubuntu opiera się na Debianie, ten tutorial powinien również działać na bieżącej dystrybucji Ubuntu.


### Etap 1: aktualizacja systemu

Po zalogowaniu się do serwera przez SSH upewnij się, że wszystkie pakiety są zaktualizowane:

```bash
sudo apt update && sudo apt upgrade -y
```

Teraz możesz zainstalować aktualne pakiety LAMP.

> [!primary]
>
> Ponieważ oprogramowanie jest regularnie aktualizowane, może być konieczne dostosowanie poniższych instrukcji do najnowszych wersji.

### Etap 2: instalacja Apache

Zainstaluj pakiety Apache (w tym dokumentację):

```bash
sudo apt install -y apache2 apache2-doc
```

Możesz sprawdzić instalację za pomocą polecenia:

```bash
sudo systemctl status apache2
```

Można również otworzyć `http://server_IP` w przeglądarce internetowej. Należy wyświetlić stronę "Apache2 Debian Default Page".


### Etap 3: zainstalować serwer baz danych i PHP

Zainstaluj pakiety MariaDB i PHP:

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Etap 4: konfiguracja serwera bazy danych <a name="sqlconf"></a>

MariaDB zapewnia skrypt, który pomoże Ci w początkowej konfiguracji i zastosować niektóre parametry związane z bezpieczeństwem.

Aby go wykonać, wprowadź następującą komendę:

```bash
sudo mysql_secure_installation
```

Potwierdź pierwszą prośbę, naciskając `Enter`{.action}.

Następnie wybierz metodę zabezpieczenia dostępu do serwera baz danych. 

```console
Switch to unix_socket authentication [Y/n]
```

Zaleca się stosowanie proponowanej metody uwierzytelniania (*unix_socket*) zamiast dostępu za pomocą hasła root. Kliknij `y`{.action}, a następnie `Enter`{.action}. Jeśli zdecydujesz się na korzystanie z dostępu użytkownika root zamiast tego, wybierz `n`{.action} i zdefiniuj hasło root na następnej stronie.

Wpisz `n`{.action} na poniższy adres e-mail:

```console
Change the root password? [Y/n]
```

Poniższe zaproszenia dotyczące środków bezpieczeństwa, potwierdź je wszystkie za pomocą `y`{.action} do końca skryptu.

```console
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Jeśli skonfigurowałeś dostęp MariaDB w zalecany sposób (*unix_socket*), możesz mieć do niego dostęp automatycznie (*root*) za każdym razem, gdy jesteś podłączony do serwera jako użytkownik z dużymi prawami (*sudo*).

> [!primary]
>
> Aby przygotować bazę danych do korzystania z niej przy użyciu programu, zapoznaj się z poniższą sekcją. Podczas instalacji aplikacji, takiej jak CMS (np. WordPress, Drupal, etc.) podaj dane dostępowe bazy danych (nazwa bazy danych, użytkownik, hasło). Jeśli chodzi o dobre praktyki, unikaj korzystania z tej samej bazy danych w różnych aplikacjach.
> 
> Aby zainstalować system WordPress na serwerze, zapoznaj się [z tym tutorialu](/pages/public_cloud/compute/install_wordpress_on_an_instance).

#### Utwórz Twoją pierwszą bazę danych i użytkownika bazy danych (opcjonalnie)

Otwórz powłokę MariaDB:

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Utwórz bazę danych:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Utwórz wybranego przez Ciebie "użytkownika" i nadaj mu wszystkie uprawnienia do korzystania z tej bazy danych. Może on wówczas uzyskać dostęp do bazy danych i wykonać wszystkie operacje dla aplikacji używającej tej bazy danych. Zamień `database_name` na nazwę bazy danych, `user_name` na wybraną nazwę i `hasło` na silne hasło.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Upewnij się, że wprowadzone modyfikacje zostały zastosowane i następnie opuść powłokę MariaDB:

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Etap 5: konfiguracja firewalla (opcjonalnie)

[Konfiguracja zapory ogniowej](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable) (*iptables*) poprawi bezpieczeństwo Twojego serwera. Proces ten można uprościć, korzystając z front-endu "Uncomplicated Firewall" (UFW) oraz zestawu wstępnie zdefiniowanych profili. 

Zainstaluj UFW:

```bash
sudo apt install ufw
```

Profile, o których mowa, zawierają wpis "WWW" na liście aplikacji:

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Wybierając "WW Full", zezwalasz na jednoczesne bezpieczne połączenia (port 443) i niezabezpieczone zapytania *http* (port 80) na serwer www.

Aby zobaczyć, które porty mają wpływ na określony profil, wprowadź `sudo ufw app info "profile name"`.

Po wprowadzeniu następującego polecenia porty określone w profilu "WWW Full" zostaną otwarte:

```bash
sudo ufw allow 'WWW Full'
```

Ponieważ wszystkie nieautoryzowane porty zostaną **zablokowane** po aktywacji firewalla, upewnij się, że zezwalasz również na połączenia SSH (port 22 w konfiguracji domyślnej):

```bash
sudo ufw allow 'SSH'
```

Włącz reguły firewalla i sprawdź konfigurację:

```bash
sudo ufw enable
```

```bash
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)      
```

Możesz pójść o krok dalej z UFW, na przykład, jeśli chcesz ograniczyć ataki typu *denial of service* (DOS) lub zapobiec zapytania przez niektóre zakresy adresów IP. Zapoznaj się z oficjalną [dokumentacją UFW](https://help.ubuntu.com/community/UFW).

### Etap 6: konfiguracja DNS (opcjonalnie)

Aby uzyskać dostęp do instalacji serwera www za pomocą domeny, należy przypisać go do Twojej usługi. W tym celu edytuj strefę DNS dostępną w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), pod warunkiem, że OVHcloud jest Twoim operatorem rekordu **i** że nazwa domeny wykorzystuje serwery DNS OVHcloud.

Aby dowiedzieć się więcej, zapoznaj się z przewodnikiem "[Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit)". Jeśli nazwa domeny jest aktualnie używana, skonfiguruj serwery DNS tylko po tym, jak Twoja strona WWW lub aplikacja są gotowe.

### Etap 7: aktywować bezpieczne połączenia z Let's Encrypt (opcjonalnie)

> [!primary]
>
> Aby zbudować bezpieczne połączenia (`https`), serwer www musi być zabezpieczony przez Oficjalny Organ Certyfikacyjny jako "[Let's Encrypt](https://letsencrypt.org/)", który oferuje bezpłatne certyfikaty. Musisz zainstalować narzędzie klienta (takie jak Certbot) i odpowiednio skonfigurować Apache. Bez tego etapu Twoja strona WWW lub aplikacja mogą akceptować tylko niezaszyfrowane zapytania `http`.
> 
> OVHcloud oferuje również rozwiązanie [SSL Gateway](https://www.ovh.pl/ssl-gateway/). Więcej informacji znajdziesz w [dokumentacji](/pages/web_cloud/ssl_gateway/order-ssl-gateway).
> 

Upewnij się najpierw, czy Twoja domena jest poprawnie wpisana w strefie DNS, czyli zaznaczona na adres IP Twojego serwera.

> [!warning]
> Poniższe polecenie wprowadza działającą wersję Certbot (*certbot 1.12.0*). Aby zainstalować najnowszą wersję, należy użyć dodatkowego *snappy* managera pakietów. Instrukcje instalacji znajdują się na [stronie Certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Zainstaluj pakiety wymagane dla klienta Certbot:

```bash
sudo apt install -y certbot python3-certbot-apache
```

Uzyskaj certyfikat dla domeny i subdomeny "www":

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Wpisz poprawny adres e-mail i zaakceptuj warunki korzystania z usługi.

Certbot automatycznie odnawia certyfikaty. Nie ma potrzeby wykonywania innych czynności. Aby dowiedzieć się więcej o funkcjonalności Certbot, zapoznaj się z dostępnymi opcjami.

## Sprawdź również

[Dokumentacja UFW](https://help.ubuntu.com/community/UFW)

[Dokumentacja Apache](https://httpd.apache.org/docs/)

[Dokumentacja MariaDB](https://mariadb.com/kb/en/documentation/)

[Dokumentacja Let's Encrypt](https://httpd.apache.org/docs/)

[Dokumentacja Certbot](https://eff-certbot.readthedocs.io/en/stable/)

[Dokumentacja NGINX](https://nginx.org/en/docs/) (alternatywna Apache)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.