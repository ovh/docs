---
title: Pierwsze kroki z preinstalowanymi aplikacjami
slug: aplikacje-preinstalowane
excerpt: Dowiedz się, jak wdrożyć aplikacje zainstalowane na Twoich instancjach Public Cloud
section: Pierwsze kroki
order: 7
---

**Ostatnia aktualizacja z dnia 07/09/2021**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

## Wprowadzenie

OVHcloud udostępnia klientom Public Cloud obrazy wstępnie zainstalowanych aplikacji, które umożliwiają szybkie i łatwe wdrażanie.

**Dowiedz się, jak wdrożyć aplikacje zainstalowane na Twoich instancjach Public Cloud.**

## Wymagania początkowe

- Instancja [Public Cloud](../tworzenie_instancji_w_panelu_klienta_ovh/) na Twoim koncie OVHcloud.

## W praktyce

### Etapy wspólne dla wszystkich aplikacji

#### Zainstaluj wybraną wstępnie zainstalowaną aplikację

W [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), API OVHcloud lub API OpenStack Horizon zainstaluj wybraną aplikację na Twojej instancji Public Cloud.

#### Szczegóły logowania do aplikacji

Po utworzeniu instancji i wybraniu aplikacji możesz odzyskać dane do logowania tylko przez API OVHcloud.

1. Zaloguj się do [konsoli API](https://api.ovh.com/console/)
2. Następnie użyj [tego połączenia API](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/instance/%7BinstanceId%7D/applicationAccess#POST)

> Połączenie
>> > [!api]
>> >
>> > @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/applicationAccess
>> >
>
> Parametry
>
>> serviceName *
>>> Twój identyfikator projektu Public Cloud
>>
>> instanceId *
>>> Jest to UID Twojej instancji

#### Let's Encrypt SSL

Ta sekcja ma zastosowanie wyłącznie do instalacji WordPress, Drupal, Joomla i Prestashop. Nie ma ona zastosowania do innych instalacji.

1. W Panelu klienta OVHcloud utwórz lub zmodyfikuj dwa rekordy `A`, które wskazują na adres IP Twojego serwera. Na przykład, jeśli Twoja domena to "personaldomain.ovh", musisz utworzyć rekordy `A`, aby:  

     personaldomain.ovh <br>
     www.personaldomain.ovh <br>  

Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz postępować zgodnie z [tym przewodnikiem](../../domains/hosting_www_jak_edytowac_strefe_dns/).
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

Gdy zostaniesz poproszony o wprowadzenie "Input the webroot", wpisz zmienną typu "/var/www/wordpress". Jeśli zainstalujesz Joomla, musisz zastąpić "wordpress" nazwą "joomla".

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

### cPanel

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu cPanel. Po wszystkich etapach oznaczone "\*" pojawi się FAQ.

1. Uzyskaj URL jednorazowego użytku [zgodnie z tymi krokami](./#szczegoly-logowania-do-aplikacji).
2. Kliknij link zwrócony przez API.

> [!primary]
>
> Jeśli link wygasł, zaloguj się przez SSH do instancji za pomocą użytkownika CentOS i wykonaj komendę "whmlogin", aby wygenerować nową instancję lub ponownie zainstaluj instancję.
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
>> Tak, możesz. Upewnij się, że tworzysz rekordy GLUE z Twoim operatorem domeny. Na przykład, jeśli chcesz "ns1.mydomain.com" i "ns2.mydomain.com", musisz skonfigurować rekordy "GLUE", aby oba wskazywały na adres IP Twojego serwera. Jeśli Twoja domena jest zarejestrowana w OVHcloud, zapoznaj się [z tym przewodnikiem.](../../domains/glue_registry/#etap-1-dodanie-rekordow-glue) Tworzenie może trwać 24 godziny.
> Dlaczego warto zdefiniować hasło root?
>> WHM używa domyślnie użytkownika root do uwierzytelniania. Unikalny adres URL umożliwia dostęp do pierwszej konfiguracji i zmianę hasła root. Następnym razem, gdy zalogujesz się do WHM, będziesz musiał użyć użytkownika root i hasła, które ustaliłeś.
> Gdzie moja licencja na cPanel?
>> OVHcloud nie dostarcza aktualnie żadnej licencji dla serwerów Public Cloud innych niż licencje Windows. Musisz kupić licencję od innego dostawcy dla cPanel. W tym celu zalecamy sprawdzenie bezpośrednio u producenta cPanel.

### Plesk

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu Pleska. Po wszystkich etapach oznaczone "\*" pojawi się FAQ.

1. Pobierz URL dostępu do Twojej aplikacji, [wykonując te kroki](./#szczegoly-logowania-do-aplikacji).
2. Kliknij link zwrócony przez API.
3. Zaloguj się za pomocą nazwy użytkownika i hasła zwróconego przez API.
4. Po zalogowaniu Plesk poprosi:   
    a) Twoje dane kontaktowe.  
    b) Nowe hasło dla użytkownika "admin", którego będziesz używał do logowania się do interfejsu Plesk.  
    c) Informacje o licencji.*  
    d) Czytanie i akceptowanie umów licencyjnych użytkownika.  

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

> [!faq]
>
> Gdzie jest moja licencja Plesk?
>> OVHcloud nie dostarcza aktualnie żadnej licencji dla serwerów Public Cloud innych niż licencje Windows. Klienci muszą kupić licencję od innego dostawcy Pleska. W tym celu zalecamy sprawdzenie bezpośrednio u producenta Pleska.

### Virtualmin

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu Virtualmin. 

1. Pobierz URL dostępu do Twojej aplikacji, [wykonując te kroki](./#szczegoly-logowania-do-aplikacji).
2. Kliknij link zwrócony przez API.
3. Zaloguj się za pomocą nazwy użytkownika i hasła zwróconego przez API.
4. Po zalogowaniu się, aby odpowiedzieć na Twoje potrzeby i pomóc Virtualmin skonfigurować się, wypełnij formularz optymalizacji.

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

### Vestacp

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem pre-instalowanego obrazu Vestacp.

1. Pobierz URL dostępu do Twojej aplikacji, [wykonując te kroki](./#szczegoly-logowania-do-aplikacji).
2. Kliknij link zwrócony przez API.
3. Zaloguj się za pomocą nazwy użytkownika i hasła zwróconego przez API.

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

### Docker

Poniżej znajdziesz pierwsze kroki związane z uruchomieniem wstępnie zainstalowanego obrazu Docker.

1. Połącz się z serwerem za pomocą SSH za pomocą użytkownika CentOS.
2. Sprawdź, czy Docker działa za pomocą polecenia "docker run hello-world".

Nie musisz wykonywać żadnych innych kroków, aby zakończyć pierwszą konfigurację tej aplikacji.

## Idź dalej

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
