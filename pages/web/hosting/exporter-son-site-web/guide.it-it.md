---
title: Esporta il tuo sito Web
slug: exporter-son-site-web
excerpt: Come esportare un sito Web OVHcloud
section: 'Per iniziare'
order: 04
---

**Ultimo aggiornamento: 03/02/2022**

## Obiettivo

Questa guida ti mostra come esportare tutti gli elementi del tuo sito Web in formato standard, da un [hosting Web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.

**Questa guida ti mostra come esportare il tuo sito Web OVHcloud.**

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Step 1: recupero dei file del tuo spazio di storage FTP

#### 1.1 Accedere allo spazio di storage.

Per accedere allo spazio di storage sono necessari:

- utente FTP o SSH attivo.
- la password associata a questo utente FTP o SSH.
- l'indirizzo del server.
- porta di connessione al server

Questi dati sono indicati nell’email di conferma dell’installazione del tuo hosting ma, Se non ne hai ancora uno, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} nella sezione "Web" e clicca su `Hosting`{.action}. Seleziona il nome dell’hosting interessato e clicca sulla scheda `FTP - SSH`{.action}. 

![export-website](images/export-website-step1-1.png){.thumbnail}

Visualizzi le informazioni associate allo spazio di storage. le informazioni di accesso allo spazio di storage. In caso di necessità, consulta la guida [Accedere allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/){.external}. Se hai smarrito la password, segui la procedura descritta nella guida [Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}.

Una volta recuperati tutti gli elementi, il recupero dei tuoi file sullo spazio di storage può essere effettuato in due modi diversi:

- **utilizzare un software compatibile con il protocollo FTP o SFTP**: dovrai installare sul tuo computer un software compatibile, come [FileZilla](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/). Se hai bisogno di aiuto per utilizzarlo, contatta il produttore del software installato:

- **accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage.  Per utilizzare questo tipo di accesso sono necessarie conoscenze avanzate e un'[offerta di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} specifica. Per maggiori informazioni, consulta la guida ["Utilizzare l'accesso SSH di un hosting Web"](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/){.external}. 

#### 1.2 Scarica i file dal tuo spazio di storage.

Una volta connesso allo spazio di storage, non ti resta che caricare i file del tuo sito. **Ti consigliamo di prestare la massima attenzione alla directory su cui hai installato il tuo sito.** in genere è la cartella “www”. Se utilizzi il tuo hosting per ospitare più siti Internet, hai sicuramente dichiarato diversi **Multisito**.

Per verificare la cartella in cui il tuo sito è ospitato clicca sulla scheda `Multisito`{.action} dello Spazio Cliente OVHcloud. e verifica nella tabella la `Cartella di root`{.action} relativa al dominio interessato.

![export-website](images/export-website-step1-2.png){.thumbnail}

### Step 2: recuperare il backup del tuo database (facoltativo)

> [!primary]
>
> Se il tuo sito Web non utilizza un database, questo step è facoltativo.
>

Per recuperare un backup del tuo database, consulta la nostra guida:
[Recuperare il backup del database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/){.external}.

Se utilizzi un database **CloudDB** per il tuo sito Web, consulta la sezione dedicata al backup della nostra guida:
[Salvare ed esportare un database sul tuo server di database](https://docs.ovh.com/it/hosting/salvare-esportare-un-database/){.external}.

### Step 3: recuperare i log del tuo hosting OVHcloud

Per conservare lo storico dei log del tuo sito, è disponibile un accesso a questi ultimi con il tuo hosting.

Clicca su `Hosting`{.action} e seleziona il tuo servizio. Clicca sulla scheda `Statistiche e log`{.action}. Clicca sul link sotto la voce `Visualizza i log`{.action}:

![export-website](images/export-website-step3-1.png){.thumbnail}


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

![export-website](images/export-website-step3-3.png){.thumbnail}

Quando hai selezionato il tipo di log nel mese che ti interessa, questi vengono archiviati al giorno:

![export-website](images/export-website-step3-4.png){.thumbnail}

## Per saperne di più

[Accedere allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/){.external}.

[Modificare la password di un utente FTP ](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}

[Utilizza FileZilla con il tuo hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_allutilizzo_di_filezilla/){.external}.

[Utilizzare l'accesso SSH di un hosting Web](https://docs.ovh.com/it/hosting/hosting_condiviso_il_protocollo_ssh/){.external}. 

[Recuperare il backup del database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/){.external}.

[Inziare a utilizzare CloudDB](https://docs.ovh.com/it/clouddb/iniziare-a-utilizzare-clouddb/){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
