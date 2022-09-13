---
title: "Tutorial - Come bloccare l'accesso al mio sito per alcuni indirizzi IP tramite un file .htaccess?"
slug: condividi-htaccess-come-bloccare-determinate-ip-al-livello-del-tuo-sito
excerpt: "Scopri le azioni possibili tramite un file .htaccess per bloccare l'accesso al tuo sito ad alcuni indirizzi IP"
section: Scrittura e autenticazione
order: 01
---

**Ultimo aggiornamento: 12/09/2022**

> [!primary]
>
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come proteggere l'accesso ai tuoi siti dalla rete esterna, prevenire o correggere eventuali intrusioni o tentativi di attacchi DDoS (attacchi DDoS).

Per effettuare questa operazione, utilizza un file ".htaccess", un file di testo specifico individuato dal server web (Apache), che permette di definire regole speciali su una directory e su tutte le sue sottocartelle.

Puoi creare diversi file ".htaccess" in [lo spazio FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) del tuo hosting ma **un solo** per directory o sottodirectory per evitare conflitti tra diversi file ".htaccess".

**Questa guida ti mostra come bloccare l'accesso al tuo sito per alcuni indirizzi IP tramite un file.htaccess.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno specialista del settore (https://partner.ovhcloud.com/it/). OVH non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione "Per saperne di più" di questa guida.
>

## Prerequisiti

- Disporre di un [hosting condiviso OVHcloud](https://www.ovhcloud.com/it/web-hosting/)

## In pratica

> [!primary]
>
> Il file ".htaccess" può essere inserito in più fascicoli diversi, rispettando la regola di un **solo** file ".htaccess" per cartella o sottocartella.
>
> I parametri definiti da un file ".htaccess" si applicano alla directory in cui è installato e a tutte le sue sottodirectory.
>
> Per modificare (o creare) queste directory, accedi allo spazio FTP del tuo hosting. Se necessario, consulta la guida [Accedi al tuo spazio di storage](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/).
>

### Bloccare un IP, una gamma di IP, un dominio o tutti gli IP di un Paese 

Sono disponibili diverse regole per bloccare gli accessi al tuo hosting tramite ".htaccess".<br>
Presta particolare attenzione alla sintassi e alle impostazioni bloccate per non ritrovarsi bloccati durante la consultazione dei tuoi siti e/o script ospitati.<br>
In caso di errore, accedi allo [spazio FTP](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) dell'hosting per correggere la situazione. 

> [!primary]
>
> Gli hosting condivisi funzionano attualmente con **Apache 2.4**. Dalla versione **Apache 2.3**, sono state implementate alcune variabili e la sintassi di redazione delle restrizioni/autorizzazioni di accesso è cambiata.
>
> La precedente sintassi è molto utilizzata e continua ad essere attiva sulle nostre infrastrutture. Tuttavia, l'Apache è considerata obsoleta da *Apache* e potrebbe presto non essere più disponibile. In questo tutorial troverai esempi che illustrano le due sintassi.
>
> Per maggiori informazioni sulla nuova sintassi, consulta le seguenti pagine ufficiali:
>
> - [Documentazione Apache 2.4 relativa al controllo degli accessi](https://httpd.apache.org/docs/2.4/en/howto/access.html){.external}
> - [Documentazione relativa al modulo mod_authz_core Apache 2.4](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html){.external}
>
>

##### Blocca un IP

Per bloccare un indirizzo IP specifico, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from IP_address
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_address
>> </RequireAll>
>> ```
>>

- **Esempio**: per bloccare l'indirizzo IP 192.168.1.2, è necessario scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from 192.168.1.2
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168.1.2
>> </RequireAll>
>> ```
>>

#### Bloccare una gamma di IP

Per bloccare un intervallo di indirizzi IP, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from IP_range
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip IP_range
>> </RequireAll>
>> ```
>>

- **Esempio**: per bloccare tutti gli IP nel 192.168.x.x, è necessario scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from 192.168
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require all granted
>> Require not ip 192.168
>> </RequireAll>
>> ```
>>

#### Blocca un dominio

Alcuni domini possono accedere al tuo hosting tramite reindirizzamenti o richieste.

Per bloccare un dominio, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from domain
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain
>> </RequireAll>
>> ```
>>

- **Esempio**: se vuoi bloccare il dominio domain.tld, devi scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> Deny from domain.tld
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> <RequireAll>
>> Require not host domain.tld
>> </RequireAll>
>> ```
>>

##### Blocca gli IP di un Paese

> [!primary]
>
> Tutti gli indirizzi IP (in particolare gli indirizzi IP pubblici) dispongono di una geolocalizzazione su scala nazionale. per avere un'idea della provenienza dei flussi di un IP e identificare fisicamente l'IP. 
>
> Il ".htaccess" permette, grazie a questo elemento, di bloccare l'insieme degli IP geolocalizzati in un Paese. 
> In altre parole, tutte le persone che cercheranno di visitare il tuo sito da questo Paese saranno bloccate (tranne se utilizzano una connessione VPN con un IP geolocalizzato in un altro paese).
>
> I blocchi via ".htaccess" sono effettuati tramite i "Country Codes" a due lettere (ISO 3166-1 alpha2) dei paesi.
>
> Alcuni siti Internet con i rispettivi "Country Codes", tra cui [https://www.iban.com/country-codes](https://www.iban.com/country-codes){.external} (indipendente da OVHcloud).
>

Per bloccare tutti gli IP di un paese, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Esempio**: per bloccare gli indirizzi IP geolocalizzati nelle isole Figi (FJ) e in Groenlandia (GR), è necessario scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> SetEnvIf GEOIP_COUNTRY_CODE FJ BlockCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR BlockCountry
>> Deny from env=BlockCountry
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} ^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Per autorizzare solo alcuni IP, una gamma di IP o l'insieme degli IP di un paese

Anziché restringere l'accesso ad uno o più IP e lasciare gli altri utenti al tuo hosting, potrai effettuare l'operazione inversa bloccando l'insieme degli IP e autorizzando solo uno o più IP ad accedere al tuo servizio.

#### Autorizza uno o più IP

Per autorizzare un solo IP ad accedere al tuo servizio, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_address
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> Require ip IP_address
>> ```
>>

- **Esempio**: se vuoi autorizzare l'accesso al tuo hosting solo agli IP 192.168.1.2 e 192.168.1.3, devi scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1.2
>> Allow from 192.168.1.3
>> ```
>>
> Sintassi a partire da Apache 2.3
>>
>> ```bash
>> Require ip 192.168.1.2 192.168.1.3
>> ```
>>

#### Autorizza una gamma di IP

Per autorizzare un intervallo di IP ad accedere al tuo servizio, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from IP_range
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> Require ip IP_range
>> ```
>>

- **Esempio**: se vuoi autorizzare l'accesso al tuo hosting solo alla gamma di IP 192.168.1.x, devi scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> Allow from 192.168.1
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> Require ip 192.168.1
>> ```
>>

#### Autorizza tutti gli IP di un Paese

Per autorizzare tutti gli IP di un paese ad accedere al tuo servizio, inserisci uno dei due codici seguenti nel tuo file ".htaccess":

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE Country_Code AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(Country_Code)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

- **Esempio**: se vuoi autorizzare l'accesso al tuo hosting solo alle Figi (FJ) e alla Groenlandia (GR), è necessario scrivere uno dei due codici seguenti:

> [!tabs]
> Sintassi storici
>>
>> ```bash
>> order deny,allow
>> deny from all
>> SetEnvIf GEOIP_COUNTRY_CODE FJ AllowCountry
>> SetEnvIf GEOIP_COUNTRY_CODE GR AllowCountry
>> Allow from env=AllowCountry
>> ```
>>
> Sintassi a partire da Apache 2.3
>> Da mettere in alto nel vostro ".htaccess"
>>
>> ```bash
>> RewriteCond %{ENV:GEOIP_COUNTRY_CODE} !^(FJ|GR)$
>> RewriteRule ^(.*)$ - [F,L]
>> ```
>>

### Complementi sul file ".htaccess"

Indipendentemente dalla sicurezza sull'accesso generale all'hosting, il file ".htaccess" permette di effettuare altre azioni. Di seguito trovi tre altri tutorial su questo argomento:

- [Proteggere l'interfaccia di gestione del tuo sito tramite il ".htaccess"](https://docs.ovh.com/it/hosting/condividi-htaccess-come-proteggere-laccesso-a-una-cartella-tramite-autenticazione/).
- [Effettuare altre operazioni con il file ".htaccess"](https://docs.ovh.com/it/hosting/hosting_condiviso_altre_operazioni_possibili_con_il_file_htaccess/).

## Spingiti oltre <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni (offerte di supporto)(https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.
