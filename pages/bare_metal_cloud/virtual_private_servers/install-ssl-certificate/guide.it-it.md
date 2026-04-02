---
title: 'Come installare un certificato SSL su un VPS'
excerpt: 'Questa guida ti mostra come installare un certificato SSL su un VPS di OVHcloud'
updated: 2025-01-24
---

## Obiettivo

La sicurezza del sito Web è fondamentale per proteggere i dati sensibili degli utenti e migliorare la loro fiducia. Grazie a un certificato SSL (**S**ecure **S**ocket **L**ayer), puoi cifrare gli scambi tra i tuoi utenti e il tuo sito Web, rafforzandone la credibilità. Questa guida ti mostra come utilizzare **Let's Encrypt**, un servizio automatizzato gratuito.

**Questa guida ti mostra come installare un certificato SSL su un VPS OVHcloud.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questo tutorial.
>

## Prerequisiti

- Disporre di una soluzione [VPS](/links/bare-metal/vps)
- Avere accesso in SSH al VPS tramite amministratore (sudo)
- Disporre di un sito Web funzionante, accessibile in `HTTP`

## Procedura

### Sommario

- [Step 1 - Accedi al tuo VPS OVHcloud](#step1)
- [Step 2 - Installa Certbot](#step2)
- [Step 3 - Ottieni un certificato SSL con Let's Encrypt](#step3)
- [Step 4 - Configura il tuo server Web](#step4)
- [Step 5 - Attiva il rinnovo automatico](#step5)

### Step 1 - Accedi al tuo VPS OVHcloud <a name="step1"></a>

1. Scarica un client SSH come [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) o utilizza il terminale integrato del sistema operativo.
2. Accedi al tuo VPS OVHcloud con le informazioni di connessione fornite:

```bash
ssh root@<vps_ip>
```
Sostituisci `<vps_ip>` con l'indirizzo IP del tuo VPS OVHcloud.

### Step 2 - Installa Certbot <a name="step2"></a>

Certbot è uno strumento che consente di gestire automaticamente i certificati Let's Encrypt. Per installare Certbot in base alla distribuzione Linux scelta, segui gli step riportati qui sotto.

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

Assicurati che Certbot sia installato correttamente eseguendo il comando seguente:

```bash
certbot --version
```

In questo modo verrà visualizzata la versione di Certbot installata.

### Step 3 - Ottieni un certificato SSL con Let's Encrypt <a name="step3"></a>

> [!primary]
>
> Se hai installato il tuo server Web (Nginx o Apache), ti consigliamo di utilizzare i plugin Certbot per automatizzare la configurazione SSL e attivare i reindirizzamenti `HTTPS`. Questi plugin semplificano l'installazione gestendo direttamente i file di configurazione del server Web.

#### Utilizzo automatico con i plugin Certbot Nginx o Apache (consigliato)

In base al server Web utilizzato, utilizza la riga di comando corrispondente:

> [!tabs]
> **Nginx**
>>
>> Installate il plugin Certbot Nginx:
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> Genera il certificato SSL:
>>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Installate il plugin Certbot Apache:
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> Genera il certificato SSL:
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Questo bot configurerà automaticamente il certificato SSL e il reindirizzamento `HTTPS`. Verifica che il tuo sito Web sia accessibile in `HTTPS`.

#### Utilizzo in modalità autonoma

Se si preferisce configurare manualmente il server, utilizzare Certbot in modalità autonoma. Questa modalità utilizza un server temporaneo integrato a Certbot per convalidare il tuo dominio e generare un certificato SSL.

Per richiedere un certificato, esegui questo comando:

```bash
sudo certbot certonly --standalone -d your_domain
```

Sostituisci `your_domain` con il tuo dominio.

> [!warning]
> Questo metodo arresta temporaneamente tutti i servizi che utilizzano la porta 80 (ad esempio un altro server Web).

Una volta generato il certificato, i file sono disponibili in `/etc/letsencrypt/live/your_domain/`:

- `fullchain.pem`: il certificato completo.
- `privkey.pem`: la chiave privata.

### Step 4 - Configura il tuo server Web <a name="step4"></a>

> [!primary]
> Se in precedenza hai utilizzato la soluzione automatica (con i plugin Certbot) ([Step 3](#step3)) e il tuo sito Web è accessibile in `HTTPS`, passa direttamente allo [Step 5](#step5).

#### Esempio per Nginx

1\. Aprire il file di configurazione del sito Web (ad esempio `/etc/nginx/sites-available/your_domain.conf`).

2\. Per attivare l’SSL, aggiungi queste righe:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Impostazioni di sicurezza aggiuntive
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Reindirizzamento HTTP verso HTTPS
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Aggiungi un reindirizzamento automatico `HTTP` verso `HTTPS`:

```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Provate e riavviate Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Verifica che il tuo sito Web sia accessibile in `HTTPS`.

#### Esempio per Apache

1\. Attiva i moduli SSL e gli header:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Modificare la configurazione del sito Web (ad esempio `/etc/apache2/sites-available/your_domain.conf`) per includere:

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

    # Attivare SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Impostazioni di sicurezza aggiuntive
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

3\. Testa e riavvia Apache:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Verifica che il tuo sito Web sia accessibile in `HTTPS`.

### Step 5 - Attiva il rinnovo automatico <a name="step5"></a>

I certificati Let's Encrypt sono validi per 90 giorni. Configura il rinnovo automatico con Certbot:

Prova il rinnovo automatico:

```bash
sudo certbot renew --dry-run
```

Certbot configura automaticamente un’operazione `cron` o un timer systemd per gestire il rinnovo. Controlla lo stato con:

```bash
sudo systemctl list-timers | grep certbot
```

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).