---
title: 'Pierwsze kroki z preinstalowanymi aplikacjami'
slug: aplikacje-preinstalowane
excerpt: Dowiedz się, jak wdrożyć aplikacje zainstalowane na serwerze VPS
section: 'Pierwsze kroki'
order: 8
---

**Ostatnia aktualizacja z dnia 25/08/2022**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

OVHcloud udostępnia klientom VPS obrazy wstępnie zainstalowanych aplikacji, które umożliwiają szybkie i łatwe wdrożenie.

**Dowiedz się, jak wdrożyć aplikacje zainstalowane na serwerze VPS.**

## Wymagania początkowe

- Posiadanie serwera [VPS](https://www.ovhcloud.com/pl/vps/) na koncie OVHcloud

## W praktyce

### Zainstaluj wybraną wstępnie zainstalowaną aplikację

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) lub w API OVHcloud zainstaluj wybraną aplikację. Zapoznaj się również z naszym przewodnikiem Pierwsze kroki [z serwerem VPS](../pierwsze-kroki-vps/).

#### cPanel

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu cPanel. Po wszystkich etapach oznaczone "\*" pojawi się FAQ.

1. Otwórz otrzymany e-mail zawierający dane do logowania do aplikacji.
2. Kliknij link cPanel w tym e-mailu.

> [!primary]
>
> Jeśli link już wygasł, proszę połączyć się z VPS przez SSH używając użytkownika CentOS i wykonać polecenie « sudo whmlogin », aby wygenerować nowy link.
>

<ol start="3">
  <li>Przeczytaj i zaakceptuj szczegółowe warunki korzystania z cPanel.</li>
  <li>Wprowadź swoje serwery poczty elektronicznej i serwery DNS *.</li>
  <li>Określ hasło root, którego będziesz używał przy kolejnym logowaniu do WHM *.</li>
</ol>

![horizon](images/change_root.png){.thumbnail}

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

> [!faq]
>
> Czy mogę korzystać z własnych serwerów DNS?
>> Tak, możesz. Upewnij się, że tworzysz rekordy GLUE z Twoim operatorem domeny. Na przykład, jeśli chcesz "ns1.mydomain.com" i "ns2.mydomain.com", musisz skonfigurować rekordy "GLUE", aby oba wskazywały na adres IP Twojego serwera. Jeśli Twoja domena jest zarejestrowana w OVHcloud, zapoznaj się [z tym przewodnikiem](../../domains/glue_registry/#etap-1-dodanie-rekordow-glue). Tworzenie może trwać 24 godziny.
> Dlaczego warto zdefiniować hasło root?
>> WHM używa domyślnie użytkownika root do uwierzytelniania. Unikalny adres URL umożliwia dostęp do pierwszej konfiguracji i zmianę hasła root. Następnym razem, gdy zalogujesz się do WHM, będziesz musiał użyć użytkownika root i hasła, które ustaliłeś.
> Gdzie moja licencja na cPanel?
>> Licencję cPanel możesz zamówić w Panelu klienta [OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu Pleska. Po wszystkich etapach oznaczone "\*" pojawi się FAQ.

1. Otwórz otrzymany e-mail zawierający dane do logowania do aplikacji.
2. W tym e-mailu kliknij link Pleska.
3. Zaloguj się za pomocą nazwy użytkownika i hasła dostępnych w e-mailu.
4. Po zalogowaniu Plesk poprosi:
    a) Twoje dane kontaktowe.  
    b) Nowe hasło dla użytkownika "admin", którego będziesz używał do logowania się do interfejsu Plesk.  
    c) Informacje o licencji.*  
    d) Czytanie i akceptowanie umów licencyjnych użytkownika.  

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

> [!faq]
>
> Gdzie jest moja licencja Plesk?
>> Licencję Plesk możesz zamówić dla serwera VPS w [Panelu klienta OVHcloud](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Docker

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu Docker.

1. Połącz się z serwerem za pomocą SSH za pomocą nazwy użytkownika i hasła dostępnych w wiadomości e-mail.
2. Sprawdź, czy Docker działa za pomocą polecenia "docker run hello-world".

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

### Let's Encrypt SSL

Ta sekcja ma zastosowanie wyłącznie do instalacji WordPress, Drupal, Joomla! i PrestaShop. Nie ma ona zastosowania do innych instalacji.

1. W Panelu klienta OVHcloud utwórz lub zmodyfikuj dwa rekordy `A`, które wskazują na adres IP Twojego serwera. Na przykład, jeśli Twoja domena to "personaldomain.ovh", musisz utworzyć rekordy `A`, aby:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz postępować zgodnie z [tym przewodnikiem.](../../domains/hosting_www_jak_edytowac_strefe_dns/)
<br>Jeśli Twoja domena jest zarejestrowana w innej firmie, skontaktuj się z nią, aby uzyskać pomoc w konfiguracji rekordów `A`.

<ol start="2">
  <li>Może zaczekacie 24 godziny zanim te dwa nagrania się całkowicie rozproszą. Możesz to zawsze sprawdzić za pomocą <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a>. Jeśli adres IP Twojej domeny wyświetla się na serwerze mxtoolbox w taki sam sposób, jak adres IP Twojego serwera, możesz przejść do kolejnego etapu.</li>

  <li>Połącz się z użytkownikiem CentOS za pomocą SSH i wprowadź następujące polecenia, aby zainstalować Certbot:</li>
</ol>

> [!warning]
>
> Zastąp personaldomain.ovh Twoją własną domeną w następujących zamówieniach.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot-apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
  <li> Generuj certyfikat SSL za pomocą certyfikatu Certbot (postępuj zgodnie z instrukcjami na ekranie).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh —webroot
```

Gdy zostaniesz poproszony o wprowadzenie "Input the webroot", wpisz zmienną typu "/var/www/wordpress". Jeśli zainstalujesz Joomla!, musisz zastąpić "wordpress" nazwą "joomla".

Teraz należy upewnić się, że Certbot umieszcza tę zmienną również w pliku ssl.conf. W tym celu wprowadź:

```sh
certbot -d personaldomain.ovh --apache
```

Gdy zostaniesz poproszony o udzielenie odpowiedzi na pierwsze pytanie, napisane jest "1", a drugie również "1".

Otrzymasz następujący wynik, jeśli Twój certyfikat SSL został wygenerowany:

```sh
WAŻNE UWAGI:
 - Pogawędki! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will wygasa 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" opcja. To non-interactively renew *all* of
   your certificates, run "certbot renew"
```

## Idź dalej

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
