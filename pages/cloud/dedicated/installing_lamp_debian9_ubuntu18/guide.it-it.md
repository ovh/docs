---
title: Tutorial - Installare un server Web (LAMP) su Debian o Ubuntu
excerpt: "Come configurare un server Web LAMP"
updated: 2023-05-10
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La realizzazione di un server Web e dei software associati permette al tuo server Cloud di ospitare pagine Web o applicazioni Web dinamiche. Installare una *LAMP stack* è un'operazione collaudata per raggiungere questo obiettivo con le applicazioni open source. LAMP significa **L**inux (OS), **A**pache (server web), **M**ariaDB (sistema di gestione database) e **P**HP (linguaggio di programmazione). 

**Questa guida ti mostra come installare un server Web LAMP sul tuo servizio OVHcloud.**

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/), un [VPS](https://www.ovhcloud.com/it/vps/) o un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud (Windows escluso)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Un accesso amministrativo al tuo servizio tramite SSH


> [!warning]
> Questa guida ti mostra come utilizzare una o più soluzioni OVHcloud con tool esterni per descrivere le operazioni eseguite in un contesto preciso. Forse dovrai adattare le istruzioni alla tua situazione.
>
> In caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla creazione di servizi su un server, ti consigliamo di rivolgerti a un [fornitore specializzato](https://partner.ovhcloud.com/it/directory/) o di contattare la [nostra community](https://community.ovh.com/en/).
>

## Procedura

Se una distribuzione Debian o Ubuntu non è già installata sul tuo server, effettua una reinstallazione dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). È il modo migliore per avere un sistema proprio per il tuo server Web e le applicazioni che vi eseguono.

Per installare una distribuzione sul tuo servizio OVHcloud, segui questa guida in [SSH](/pages/cloud/dedicated/ssh_introduction):

- [Server dedicati](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- [VPS](/pages/cloud/vps/starting_with_a_vps)
- [Instance Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps)


> [!primary]
>
> Per Debian 11 sono verificate le seguenti istruzioni. Ubuntu è basato su Debian e dovrebbe funzionare anche su una distribuzione Ubuntu attuale.


### Step 1: aggiornamento del sistema

Una volta connesso al tuo server via SSH, assicurati che tutti i pacchetti siano aggiornati:

```bash
sudo apt update && sudo apt upgrade -y
```

A questo punto puoi installare i pacchetti LAMP.

> [!primary]
>
> Dato che i software vengono regolarmente aggiornati, potrebbe essere necessario adattare le seguenti istruzioni in base alle ultime versioni.

### Step 2: installazione di Apache

Installa i pacchetti Apache (inclusa la documentazione):

```bash
sudo apt install -y apache2 apache2-doc
```

Per verificare l'installazione, esegui questo comando:

```bash
sudo systemctl status apache2
```

È inoltre possibile aprire `http://server_IP` su un browser Web. La pagina "Apache2 Debian Default Page" dovrebbe essere visualizzata.


### Step 3: installa il server di database e PHP

Installa i pacchetti di MariaDB e PHP:

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Step 4: configurazione del server del database <a name="sqlconf"></a>

MariaDB fornisce uno script per aiutarti nella configurazione iniziale e applicare alcuni parametri legati alla sicurezza.

Per eseguirlo, esegui questo comando:

```bash
sudo mysql_secure_installation
```

Conferma il primo invito cliccando su `Entrata`{.action}.

In seguito scegli un metodo per proteggere gli accessi al tuo server di database. 

```console
Switch to unix_socket authentication [Y/n]
```

Si raccomanda di utilizzare il metodo di autenticazione proposto (*unix_socket*) al posto dell'accesso tramite password di root. Premi su `y`{.action} e poi su `Entrata`{.action}. Se decidi di utilizzare l'accesso utente root al posto tuo, scegli `n`{.action} e poi definisci la password di root nel seguente invito.

Inserisci `n`{.action} il seguente invito:

```console
Change the root password? [Y/n]
```

Le seguenti richieste relative alle misure di sicurezza, confermale tutte con `y`{.action} fino al completamento dello script.

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

Se hai configurato l'accesso MariaDB come consigliato (*unix_socket*), disponi di un accesso amministratore automatico (*root*) al server ogni volta che sei connesso al server come utente con diritti elevati (*sudo*).

> [!primary]
>
> Per preparare un database da utilizzare con software, segui la sezione qui sotto. Per installare un'applicazione come un CMS (ad esempio WordPress, Drupal, ecc...), è necessario fornire le credenziali del database (nome del database, utente, password). In termini di buone pratiche, evita di utilizzare lo stesso database in diverse applicazioni.
> 
> Per installare WordPress su un server, segui [questa guida](/pages/platform/public-cloud/install_wordpress_on_an_instance).

#### Crea il tuo primo database e un utente di database (facoltativo)

Apri lo shell MariaDB:

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Crea un database:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Crea un "user" con il nome che preferisci e assegnagli tutti i permessi su questo database. che può accedere al database ed effettuare tutte le operazioni per l'applicazione utilizzando questo database. Sostituisci `database_name` con il nome del tuo database, `user_name` con il nome scelto e `password` con una password elevata.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Assicurati che le modifiche siano applicate e infine chiudi lo shell MariaDB:

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Step 5: configurazione del firewall (facoltativo)

[La configurazione di un firewall](/pages/cloud/dedicated/firewall-Linux-iptable) (*iptables*) permette di migliorare la sicurezza del tuo server. Questo processo può essere semplificato utilizzando il front end "Uncomplicated Firewall" (UFW) e la sua serie di profili predefiniti. 

Installate UFW:

```bash
sudo apt install ufw
```

I profili in questione recano l'indicazione "WWW" nell'elenco delle applicazioni:

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Scegliendo "WWW Full", autorizzi sia le connessioni sicure (porta 443) che le richieste *http* non sicure (porta 80) verso il server web.

Per visualizzare quali porti sono interessati da un profilo particolare, accedi `sudo ufw app info "profile name"`.

Con il comando successivo, le porte definite dal profilo "WWW Full" saranno aperte:

```bash
sudo ufw allow 'WWW Full'
```

Dal momento che tutte le porte non esplicitamente autorizzate saranno **bloccate** dopo l'attivazione del firewall, assicurati di autorizzare anche le connessioni SSH (porta 22 con configurazione di default):

```bash
sudo ufw allow 'SSH'
```

Infine, attiva le regole del firewall e verifica la configurazione:

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

Con l'UFW, ad esempio, puoi fare di più se vuoi limitare gli attacchi per *denial of service* (DOS) o impedire le richieste tramite alcuni intervalli di indirizzi IP. Consulta la [documentazione ufficiale dell'UFW](https://help.ubuntu.com/community/UFW).

### Step 6: configurazione DNS (facoltativo)

Per accedere all'installazione del tuo server Web tramite un dominio è necessario associarlo al tuo servizio. Per effettuare questa operazione è necessario modificare la zona DNS accessibile dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), a condizione che OVHcloud sia il Registrar **e** che il dominio utilizzi i server DNS di OVHcloud.

Per saperne di più, consulta la guida [Modificare una zona DNS](/pages/web/domains/dns_zone_edit). Se il dominio è utilizzato, configura i DNS solo dopo che il tuo sito Web o la tua applicazione è pronta.

### Step 7: attivare connessioni sicure con Let's Encrypt (facoltativo)

> [!primary]
>
> Per stabilire connessioni sicure (`https`), il server web deve essere protetto tramite un'autorità di certificazione ufficiale come "[Let's Encrypt](https://letsencrypt.org/)", che offre certificati gratuiti. Per configurare Apache è necessario installare uno strumento client (come Cerbot). Senza questo step, il tuo sito Web o la tua applicazione possono accettare solo richieste `http` non cifrate.
> 
> In alternativa, OVHcloud propone la soluzione [SSL Gateway](https://www.ovh.it/ssl-gateway/). Per maggiori informazioni, consulta la [nostra guida](/pages/web/ssl-gateway/order-ssl-gateway).
> 

Per prima cosa, assicurati che il tuo dominio sia inserito correttamente nella zona DNS, cioè indicato sull'indirizzo IP del tuo server.

> [!warning]
> Il comando successivo installa una versione di Cerbot che funziona ma è obsoleta (*certbot 1.12.0*). Per installare l'ultima versione, utilizza il gestore di pacchetti aggiuntivo *snappy*. Le istruzioni per l'installazione sono disponibili sul [sito di Cerbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Installa i pacchetti richiesti per il client Cerbot:

```bash
sudo apt install -y certbot python3-certbot-apache
```

Ottieni il certificato del tuo dominio e del sottodominio "www":

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Inserisci un indirizzo email valido e accetta le condizioni di utilizzo.

Cerbot rinnova automaticamente i certificati. Non sono necessari ulteriori passi. Per maggiori informazioni sulle funzionalità di Cerbot, consulta le opzioni disponibili.

## Per saperne di più

[Documentazione UFW](https://help.ubuntu.com/community/UFW)

[Documentazione Apache](https://httpd.apache.org/docs/)

[Documentazione MariaDB](https://mariadb.com/kb/en/documentation/)

[Documentazione Let's Encrypt](https://httpd.apache.org/docs/)

[Documentazione Cerbot](https://eff-certbot.readthedocs.io/en/stable/)

[Documentazione NGINX](https://nginx.org/en/docs/) (alternativa Apache)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
