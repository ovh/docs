---
title: 'Jak zainstalować certyfikat SSL na serwerze VPS'
excerpt: 'Dowiedz się, jak zainstalować certyfikat SSL na serwerze VPS od OVHcloud'
updated: 2025-01-24
---

## Wprowadzenie

Bezpieczeństwo strony WWW jest kluczowe, aby chronić wrażliwe dane użytkowników i zwiększyć ich zaufanie. Certyfikat SSL (**S**ecure **S**ockets **L**ayer) umożliwia szyfrowanie danych przesyłanych między użytkownikami i stroną WWW, co zwiększa jej wiarygodność. Niniejszy przewodnik dokumentuje korzystanie z **Let's Encrypt**, darmowej i zautomatyzowanej usługi.

**Dowiedz się, jak zainstalować certyfikat SSL na serwerze VPS od OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce tutorial, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym usługodawcą](/links/partner) i/lub skontaktowanie się z dostawcą usługi. Niestety firma OVH nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) tego tutoriala.
>

## Wymagania początkowe

- Wykupienie usługi [VPS](/links/bare-metal/vps)
- Dostęp administratora (sudo) przez SSH do serwera VPS
- Posiadanie działającej strony www dostępnej poprzez `HTTP`

## W praktyce

### Podsumowanie

- [Etap 1 - Zaloguj się do Twojego serwera VPS OVHcloud](#step1)
- [Etap 2 - Zainstaluj Certbot](#step2)
- [Etap 3 - Uzyskaj certyfikat SSL za pomocą Let's Encrypt](#step3)
- [Etap 4 - Skonfiguruj serwer WWW](#step4)
- [Etap 5 - Włącz automatyczne odnawianie](#step5)

### Etap 1 - Zaloguj się do Twojego serwera VPS OVHcloud <a name="step1"></a>

1. Pobierz klienta SSH, takiego jak [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) lub użyj wbudowanego terminala w systemie operacyjnym.
2. Zaloguj się do Twojego serwera VPS OVHcloud, używając dostarczonych danych:

```bash
ssh root@<vps_ip>
```
Zastąp`<vps_ip>` adresem IP Twojego serwera VPS OVHcloud.

### Etap 2 - Zainstaluj Certbot <a name="step2"></a>

Certbot to narzędzie do automatycznego zarządzania certyfikatami Let's Encrypt. Aby zainstalować Certbot w zależności od dystrybucji Linux, postępuj zgodnie z poniższymi instrukcjami.

> [!tabs]
> **Ubuntu/Debian**
>>
>> ```bash
>> sudo apt update
>> sudo apt install certbot
>> ```
>>
> **CentOS**
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install certbot
>> ```
>>
> **Fedora**
>>
>> ```bash
>> sudo dnf install certbot
>> ```

Upewnij się, że serwer Certbot został poprawnie zainstalowany, uruchamiając następujące polecenie:

```bash
certbot --version
```

Musi to wskazywać zainstalowaną wersję Certbot.

### Etap 3 - Uzyskaj certyfikat SSL za pomocą Let's Encrypt <a name="step3"></a>

> [!primary]
>
> Jeśli zainstalowałeś serwer www (Nginx lub Apache), zalecamy użycie wtyczek Certbot do automatyzacji konfiguracji SSL i włączenia przekierowań `HTTPS`. Wtyczki te upraszczają instalację, ponieważ zarządzają bezpośrednio plikami konfiguracyjnymi serwera www.

#### Automatyczne użycie z wtyczkami Certbot Nginx lub Apache (zalecane)

W zależności od serwera hostingowego wpisz odpowiednie wiersze poleceń:

> [!tabs]
> **Nginx**
>>
>> Zainstaluj wtyczkę Certbot Nginx:
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> Wygeneruj certyfikat SSL:
>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Zainstaluj wtyczkę Certbot Apache:
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> Wygeneruj certyfikat SSL:
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Certbot automatycznie skonfiguruje certyfikat SSL i przekierowanie `HTTPS`. Upewnij się, że Twoja strona WWW jest dostępna poprzez `HTTPS`.

#### Użytkowanie w trybie autonomicznym

Jeśli chcesz skonfigurować serwer ręcznie, użyj programu Certbot w trybie autonomicznym. Tryb ten wykorzystuje tymczasowy serwer zintegrowany z Certbot w celu potwierdzenia Twojej nazwy domeny i wygenerowania certyfikatu SSL.

Aby zażądać certyfikatu, użyj następującego polecenia:

```bash
sudo certbot certonly --standalone -d your_domain
```

Zastąp `your_domain` nazwą domeny.

> [!warning]
> Metoda ta tymczasowo zatrzymuje wszystkie usługi korzystające z portu 80 (np. inny serwer www).

Po wygenerowaniu certyfikatu pliki będą dostępne w `/etc/letsencrypt/live/your_domain/`:

- `fullchain.pem`: kompletny certyfikat.
- `privkey.pem`: klucz prywatny.

### Etap 4 - Skonfiguruj serwer www <a name="step4"></a>

> [!primary]
> Jeśli korzystałeś wcześniej z automatycznego rozwiązania (z wtyczkami Certbot) ([Etap 3](#step3)), a Twoja strona WWW jest dostępna poprzez `HTTPS`, przejdź bezpośrednio do [etap 5](#step5).

#### Przykład dla Nginx

1\. Otwórz plik konfiguracyjny Twojej strony WWW (na przykład `/etc/nginx/sites-available/your_domain.conf`).

2\. Aby aktywować certyfikat SSL, dodaj następujące linie:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Paramètres de sécurité supplémentaires
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Redirection HTTP vers HTTPS
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Dodaj automatyczne przekierowanie `HTTP` do `HTTPS`:
```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Testuj i restartuj Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Upewnij się, że Twoja strona WWW jest dostępna poprzez `HTTPS`.

#### Przykład dla Apache

1\. Włącz moduły SSL i nagłówki:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Zmień konfigurację Twojej strony WWW (na przykład `/etc/apache2/sites-available/your_domain.conf`), aby zawierała:

```apache
<VirtualHost *:80>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    Redirect permanent / https://your_domain/

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    # Activer SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Paramètres de sécurité supplémentaires
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5
    SSLHonorCipherOrder on

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>
```

3\. Przetestuj i uruchom ponownie Apache:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Upewnij się, że Twoja strona WWW jest dostępna poprzez `HTTPS`.

### Etap 5 - Włącz automatyczne odnawianie <a name="step5"></a>

Certyfikaty Let's Encrypt są ważne przez 90 dni. Skonfiguruj automatyczne odnawianie za pomocą Certbota:

Test automatycznego odnowienia:

```bash
sudo certbot renew --dry-run
```

Certbot automatycznie konfiguruje zadanie `cron` lub timer systemd w celu zarządzania odnawianiem. Sprawdź jej status za pomocą:

```bash
sudo systemctl list-timers | grep certbot
```

## Sprawdź również <a name="go-further"></a>
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).