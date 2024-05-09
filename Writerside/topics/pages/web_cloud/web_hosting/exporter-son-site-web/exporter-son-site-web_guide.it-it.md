---
title: "Esporta il tuo sito Web"
excerpt: "Come esportare un sito Web OVHcloud"
updated: 2022-02-03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come esportare tutti gli elementi del tuo sito Web in formato standard, da un [hosting Web OVHcloud](hosting.){.external}.

**Questa guida ti mostra come esportare il tuo sito Web OVHcloud.**

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](hosting.){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](manager.){.external}

## Procedura

### Step 1: recupero dei file del tuo spazio di storage FTP

#### 1.1 Accedere allo spazio di storage.

Per accedere allo spazio di storage sono necessari:

- utente FTP o SSH attivo.
- la password associata a questo utente FTP o SSH.
- l'indirizzo del server.
- porta di connessione al server

Questi dati sono indicati nell’email di conferma dell’installazione del tuo hosting ma, Se non ne hai ancora uno, accedi allo [Spazio Cliente OVHcloud](manager.){.external} nella sezione "Web" e clicca su `Hosting`{.action}. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}. 

![export-website](tab-pro.png){.thumbnail}

Visualizzi le informazioni associate allo spazio di storage. le informazioni di accesso allo spazio di storage. In caso di necessità, consulta la guida [Accedere allo spazio di storage di un hosting Web](ftp_connection1.){.external}. Se hai smarrito la password, segui la procedura descritta nella guida [Modificare la password di un utente FTP](ftp_change_password1.){.external}.

Una volta recuperati tutti gli elementi, il recupero dei tuoi file sullo spazio di storage può essere effettuato in due modi diversi:

- **utilizzare un software compatibile con il protocollo FTP o SFTP**: dovrai installare sul tuo computer un software compatibile, come [FileZilla](ftp_filezilla_user_guide1.). Se hai bisogno di aiuto per utilizzarlo, contatta il produttore del software installato:

- **accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage.  Per utilizzare questo tipo di accesso sono necessarie conoscenze avanzate e un'[offerta di hosting Web OVHcloud](hosting.){.external} specifica. Per maggiori informazioni, consulta la guida ["Utilizzare l'accesso SSH di un hosting Web"](ssh_on_webhosting1.){.external}. 

#### 1.2 Scarica i file dal tuo spazio di storage.

Una volta connesso allo spazio di storage, non ti resta che caricare i file del tuo sito. **Ti consigliamo di prestare la massima attenzione alla directory su cui hai installato il tuo sito.** in genere è la cartella “www”. Se utilizzi il tuo hosting per ospitare più siti Internet, hai sicuramente dichiarato diversi **Multisito**.

Per verificare la cartella in cui il tuo sito è ospitato clicca sulla scheda `Multisito`{.action} dello Spazio Cliente OVHcloud. e verifica nella tabella la `Cartella di root`{.action} relativa al dominio interessato.

![export-website](images_root-folders.png){.thumbnail}

### Step 2: recuperare il backup del tuo database (facoltativo)

> [!primary]
>
> Se il tuo sito Web non utilizza un database, questo step è facoltativo.
>

Per recuperare un backup del tuo database, consulta la nostra guida:
[Recuperare il backup del database di un hosting Web](sql_database_export1.){.external}.

Se utilizzi un database **Web Cloud Databases** per il tuo sito Web, consulta la sezione dedicata al backup della nostra guida:
[Salvare ed esportare un database sul tuo server di database](save-export-on-database-server1.){.external}.

### Step 3: recuperare i log del tuo hosting OVHcloud

Per conservare lo storico dei log del tuo sito, è disponibile un accesso a questi ultimi con il tuo hosting.

Clicca su `Hosting`{.action} e seleziona il tuo servizio. Clicca sulla scheda `Statistiche e log`{.action}. Clicca sul link sotto la voce `Visualizza i log`{.action}:

![export-website](view-logs.png){.thumbnail}

Visualizzi una finestra con i diversi tipi di log disponibili. Sono classificati per mese:

| Tipo  	| Descrizione                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Trovi qui i log di consultazione del tuo sito e le diverse azioni realizzate a partire dal tuo sito. per permetterti, ad esempio, di individuare i tentativi di attacco. 	|
| FTP   	| le diverse connessioni FTP saranno registrate e conservate in questi log.                                                                                                                     	|
| Error 	| i diversi errori generati dal tuo sito.                                                                                                                                                    	|
| CGI   	| i diversi appelli agli scripts cgi.bin realizzati.                                                                                                                                     	|
| out   	| le statistiche del tuo hosting sulle diverse chiamate esterne effettuate.                                                                                                                  	|
| SSH   	| questi log indicano le differenti connessioni realizzate con il protocollo SSH.                                                                                                                      	|
| cron  	| il risultato dell'esecuzione dei compiti pianificati.                                                                                                                                                	|

![export-website](raw-logs-general.png){.thumbnail}

Quando hai selezionato il tipo di log nel mese che ti interessa, questi vengono archiviati al giorno:

![export-website](raw-logs.png){.thumbnail}

## Per saperne di più

[Accedere allo spazio di storage di un hosting Web](ftp_connection1.){.external}.

[Modificare la password di un utente FTP ](ftp_change_password1.){.external}

[Utilizza FileZilla con il tuo hosting](ftp_filezilla_user_guide1.){.external}.

[Utilizzare l'accesso SSH di un hosting Web](ssh_on_webhosting1.){.external}. 

[Recuperare il backup del database di un hosting Web](sql_database_export1.){.external}.

[Inziare a utilizzare Web Cloud Databases](starting_with_clouddb1.){.external}.

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](partner.).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](support.).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.