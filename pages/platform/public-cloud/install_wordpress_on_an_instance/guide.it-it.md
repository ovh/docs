---
title: Installa WordPress sulla tua istanza
excerpt: Scopri come utilizzare un'istanza Public Cloud per ospitare siti WordPress
slug: installa_wordpress_sulla_tua_istanza
section: Tutorial
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/07/2021**

## Obiettivo

WordPress è un sistema di gestione dei contenuti (CMS) che permette di creare e gestire siti Web per molteplici scopi, senza competenze di programmazione specifiche.

Questa guida ti mostra gli step fondamentali per l'installazione manuale di WordPress su un'istanza Public Cloud: installare un server web, configurare il database, scaricare e lanciare WordPress.

**Questa guida ti mostra come installare WordPress su un'istanza Public Cloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione macchine di cui tu sei responsabile. Non avendo accesso a queste macchine, non siamo noi gli amministratori e pertanto non possiamo fornirti alcuna assistenza. È responsabilità dell'utente garantire ogni giorno la gestione e la sicurezza del software.
>
> Mettiamo questa guida a tua disposizione per aiutarti con le attività più comuni. Tuttavia, in caso di difficoltà o dubbi relativi ad amministrazione e sicurezza, ti consigliamo di contattare un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Un [progetto Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud.
- Disporre di un'[istanza Public Cloud](../primi-passi-public-cloud/) con Debian o Ubuntu installato.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- Un accesso amministratore (root) alla tua istanza via SSH.

## Procedura

> [!primary]
>
> Per Debian 11 sono verificate le seguenti istruzioni. Ubuntu è basato su Debian e il tutorial dovrebbe quindi funzionare anche per una distribuzione Ubuntu attuale.
>

Per accedere alla tua installazione tramite un dominio, è necessario associarlo alla tua istanza. Per effettuare questa operazione è necessario modificare la zona DNS accessibile dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), a condizione che OVHcloud sia il tuo Registrar **e** che il dominio utilizzi i server DNS OVHcloud.

Per saperne di più, consulta la guida [Modifica la zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/). Se il dominio è utilizzato, configura i DNS solo dopo l'installazione del nuovo WordPress e l'avvio del tuo sito Web.

### Step 1: installazione del server web (LAMP)

Per poter gestire pagine Web dinamiche con WordPress, sull'istanza sarà installato uno *stack* detto *LAMP*. LAMP designa **Linux**, **Apache**, **MariaDB** e **PHP**.

Una volta connesso alla tua istanza via SSH, assicurati che tutti i pacchetti siano aggiornati:

```bash
debian@instance:~$ sudo apt update && sudo apt upgrade -y
```

> [!primary]
>
> Dato che i pacchetti software vengono regolarmente aggiornati, potrebbe essere necessario adattare le seguenti istruzioni in base alle ultime versioni.
>

Installa i pacchetti LAMP:

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Step 2: configurazione del server del database <a name="sqlconf"></a>

MariaDB fornisce uno script per aiutarti nella configurazione iniziale e applicare alcuni parametri legati alla sicurezza.

Per eseguirlo, esegui questo comando:

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Conferma il primo invito cliccando su `Entrata`{.action}.

In seguito scegli un metodo per proteggere gli accessi al tuo server di database.

```console
Switch to unix_socket authentication [Y/n]
```

Si raccomanda di utilizzare il metodo di autenticazione proposto al posto dell'accesso tramite password root. Premi su `y`{.action} e poi su `Entrata`{.action}. (Se decidi di utilizzare l'accesso utente root, digita `n`{.action} e poi definisci una password di root.)

Inserisci `il seguente`{.action} invito:

```console
Change the root password? [Y/n]
```

Le seguenti richieste relative alle misure di sicurezza, confermale tutte con `y`{.action} fino al completamento dello script.

Se hai configurato l'accesso MariaDB come consigliato (*unix_socket*), disponi di un accesso root automatico a quest'ultimo ogni volta che sei connesso all'istanza come utente con diritti elevati.

Apri lo shell MariaDB:

```bash
debian@instance:~$ sudo mariadb
```
```mysql
MariaDB [(none)]> 
```

Crea il database per WordPress:

```mysql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

Dopodiché assegna al nuovo utente "wordpress" tutti i diritti su questo database. Questo utente accederà al database ed effettuerà tutte le operazioni per il CMS WordPress. Sostituisci `your_password` con una password forte per questo utente.

```mysql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
```

> [!primary]
>
> Queste credenziali saranno necessarie in seguito durante l'installazione di WordPress.
>

Il database è pronto per essere utilizzato con WordPress. Assicurati che le modifiche siano applicate per i prossimi step, poi chiudi la shell MariaDB:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```mysql
MariaDB [(none)]> exit;
```

### Step 3: configurare il firewall

La configurazione di un firewall (*iptables*) permette di migliorare la sicurezza della tua istanza WordPress. Questo processo può essere semplificato utilizzando il front end "Uncomplicated Firewall" (UFW) e la sua serie di profili predefiniti. Installate UFW:

```bash
debian@instance:~$ sudo apt install ufw
```

I profili in questione recano l'indicazione "WWW" nell'elenco delle applicazioni:

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Scegliendo "WWW Full", le connessioni protette (porta 443) e le richieste http non sicure (porta 80) al server web saranno autorizzate.

Per visualizzare quali porti sono interessati da un profilo particolare, accedi ```sudo ufw app info "profilo"```.

Inserendo il seguente comando, le porte definite dal profilo "WWW Full" saranno aperte:

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Dato che tutte le porte non esplicitamente autorizzate saranno bloccate dopo l'attivazione del firewall, assicurati di autorizzare anche le connessioni SSH (porta 22):

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Verifica la configurazione e attiva le regole del firewall:

```bash
debian@instance:~$ sudo ufw status
```

```bash
debian@instance:~$ sudo ufw enable
```

Con l'UFW, ad esempio, puoi fare di più se vuoi limitare gli attacchi per *denial of service* (DOS) o impedire le richieste tramite alcuni intervalli di indirizzi IP. Consulta la documentazione ufficiale dell'UFW.

### Step 4: installazione di WordPress

Accedi al [sito ufficiale di WordPress](https://wordpress.org/download/) per recuperare **l'URL di download** dell'ultima versione (in formato "tar.gz"). Scarica il file:

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Elimina l'archivio scaricato:

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

Il tuo server Apache deve essere pronto per funzionare allo stato attuale. Per verificare, esegui questo comando:

```bash
debian@instance:~$ sudo systemctl status apache2
```

È inoltre possibile aprire `http://IP_della_tua_istanza` su un browser Web. La pagina "Apache2 Debian Default Page" dovrebbe essere visualizzata.

Gli step successivi installeranno WordPress sostituendo la cartella Apache di default per le pagine Web.

Invece di utilizzare la cartella predefinita, è possibile creare anche un nuovo *Virtual Host* per l'installazione di WordPress. che è utile per ospitare più siti Web, aspetto non rilevante per questo tutorial.

Elimina la cartella esistente:

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Sostituisci di default la cartella del server Web con la cartella WordPress:

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Assegna al server Web i diritti in scrittura (`write`) nella cartella:

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

Il server Web è pronto per la configurazione iniziale di WordPress.

### Step 5: configurare WordPress

Apri un browser Web e accedi al sito WordPress inserendo l'indirizzo IP della tua istanza (o il dominio se ne hai già [collegato uno all'istanza](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/)). Scegliete una lingua sulla prima pagina.

Utilizza la configurazione assistita WordPress per accedere al database. Inserisci le informazioni [configurate precedentemente](#sqlconf).

![wordpress](images/wp_install1.png){.thumbnail}

Lo step successivo consiste nel preconfigurare le informazioni generali del tuo sito e creare l'utente amministratore WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Una volta convalidato, potrai accedere allo spazio di amministrazione del tuo sito con le credenziali definite nello step precedente.

> [!primary]
>
> Per stabilire connessioni sicure (`https`), il server web deve essere protetto tramite un'autorità di certificazione come [Let's Encrypt](https://letsencrypt.org/){.external} che offre certificati gratuiti. Per configurare Apache è necessario installare uno strumento client (ad esempio "Cerbot"). Senza questo step, il tuo sito potrà accettare solo richieste `http`.
>

### Step 6 (facoltativo): attivare connessioni sicure con Let's Encrypt

Per prima cosa verifica che il tuo dominio disponga dei record validi nella zona DNS, cioè che punti verso l'indirizzo IP della tua istanza.

Installate le scartoffie necessarie per il cliente Cerbot:

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Ottieni il certificato del tuo dominio. (Puoi includere il sottodominio "www" aggiungendo `-d www.yourdomainname.ovh`)

```bash
debian@instance:~$ sudo certbot --apache -d yourdomainname.ovh
```

Inserisci un indirizzo email valido e accetta le condizioni di utilizzo.

Cerbot rinnova automaticamente i certificati. Non sono necessarie ulteriori fasi. Per maggiori informazioni sulle funzionalità di Cerbot, consulta le opzioni disponibili.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/>.
