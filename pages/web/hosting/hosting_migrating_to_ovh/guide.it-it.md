---
title: 'Migrare un sito e un servizio di posta in OVH'
slug: migrare-un-sito-in-ovh
excerpt: 'Scopri come migrare il tuo sito Web e le tue email verso OVH senza interruzioni del servizio'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 26/06/2018**

## Obiettivo

Scopri come migrare un sito Web, uno o più database e i tuoi account email a partire da qualsiasi piattaforma verso OVH. Il procedimento può variare se hai intenzione di effettuare la migrazione senza interruzioni del servizio.

**Questa guida ti mostra come migrare il tuo sito internet e le tue email in OVH senza interruzioni del servizio**

## Prerequisiti

- Avere la gestione del dominio
- Avere accesso ai file del sito
- Avere accesso al database del sito
- Disporre delle informazioni (utente, password, server) necessarie per connettersi agli account email esistenti
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 

## Procedura

Per migrare il tuo sito Web e le tue email in OVH è indispensabile seguire una procedura ben precisa, composta da diversi step.

|Step|Descrizione| 
|---|---| 
|Effettua l’ordine dell’hosting|Ti consente di disporre dello spazio di hosting OVH in cui ospitare il sito Internet e con cui poter usufruire degli indirizzi email| 
|Trasferisci il sito|Una volta effettuato un backup completo del sito, puoi trasferirlo sul nuovo spazio di hosting OVH| 
|Trasferisci gli account email|Dopo aver creato gli stessi indirizzi email presso OVH, puoi trasferirne il contenuto dal precedente provider in OVH| 
|Modifica la configurazione DNS del dominio|Modificando la configurazione del tuo dominio, quest’ultimo utilizzerà lo spazio di hosting OVH (per il tuo sito Internet e i tuoi indirizzi email) invece dei servizi del tuo precedente provider| 
|Trasferisci il dominio|Scegli OVH come Registrar del tuo dominio| 

L’ordine degli step successivi può variare a seconda del Registrar che attualmente gestisce il tuo dominio.

> [!warning]
>
> Quando alcuni Registrar ricevono una domanda di trasferimento in uscita, interrompono la risoluzione DNS del dominio (nel caso sia configurata presso di loro).
> Così facendo rendono inaccessibile il tuo dominio e i relativi servizi, come il sito Web e gli account email. È dunque necessario contattare il Registrar del tuo dominio per informarti sulla sua policy di trasferimento in uscita.
>

Tenendo conto di questa possibilità, OVH mette a disposizione due procedure di migrazione:

- una migrazione senza interruzione del servizio
- una migrazione con probabile interruzione del servizio

### Migrazione senza interruzione del servizio

#### Step 1: ordina un hosting Web presso OVH

Dal sito di [OVH](https://www.ovh.it/){.external}, effettua l’ordine del tuo hosting Web senza richiedere tuttavia il trasferimento del dominio, poiché lo effettuerai in seguito. Non appena OVH riceverà il tuo pagamento, avrà inizio l’installazione dell’hosting e riceverai una email di conferma.

#### Step 2: trasferisci il sito Web

Questa fase è a sua volta suddivisa in ulteriori passaggi.

|Step|Descrizione|Dettagli|
|---|---|---|
|2.1.|Effettua un backup del sito|È necessario che sia un backup completo del tuo sito Web e che includa i file e i database. Questo backup è fondamentale per migrare il tuo sito in OVH.|
|2.2.|Metti online il tuo sito con OVH|Connettiti al tuo spazio di storage (FTP) al fine di importare i file del tuo sito e caricarli nella cartella **"www"**. Riceverai le credenziali per la connessione al protocollo FTP via email.|
|2.3.|Crea un database OVH|Se il tuo sito funziona con un database, è necessario [crearne uno nuovo presso OVH](https://docs.ovh.com/it/hosting/gestisci_un_database_dal_tuo_hosting_condiviso/){.external} dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|2.4.|Importa i dati del database|Importa il backup del tuo database attraverso lo Spazio Clienti OVH.|
|2.5.|Associa il sito al nuovo database|Le informazioni relative al tuo precedente database sono sempre disponibili nel file di configurazione del tuo sito. Sul tuo spazio di storage OVH, modifica questo file e inserisci le informazioni del nuovo database OVH.|

Poiché la configurazione del dominio resta invariata, l’hosting utilizzato per mostrare il tuo sito Web rimane quello del tuo attuale provider.

#### Step 3: crea i tuoi indirizzi email in OVH

Una volta che il sito Web è stato trasferito, è necessario [creare in OVH gli stessi indirizzi email](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/){.external} che utilizzi presso il tuo attuale provider, con lo stesso identico nome.  Dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, nel menu a sinistra, clicca su `Email`{.action} e poi sull’hosting Web che hai appena acquistato (con lo stesso nome del tuo dominio). Seleziona la scheda `Email`{.action} e clicca su `Crea un indirizzo email`{.action}, dopodiché segui le indicazioni.

Non avendo ancora cambiato la configurazione del dominio, continuerai a ricevere i nuovi messaggi sugli indirizzi email creati presso il tuo attuale provider. Inoltre, è necessario continuare a utilizzare questi indirizzi anche per l’invio. 

#### Step 4: modifica la configurazione del dominio

Adesso che hai trasferito il tuo sito Web e creato i tuoi indirizzi email presso OVH, è necessario modificare la configurazione del tuo dominio. Per effettuare questa operazione, modifica i server DNS del tuo dominio con quelli di OVH (inviati via email e visibili nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}). Quest’azione ha due effetti:

- **vincolare tecnicamente il tuo dominio alle soluzioni OVH**: il tuo hosting OVH sarà utilizzato per mostrare il tuo sito Web e la ricezione dei nuovi messaggi avverrà sui tuoi indirizzi email creati presso OVH
- **impedire un’interruzione del servizio**: se il tuo Registrar decide di interrompere la propria configurazione DNS nel momento in cui trasferirai il tuo dominio, ciò non avrà nessuna conseguenza dato che usufruirai già della configurazione OVH

> [!warning]
>
> La modifica dei server DNS viene realizzata presso l’attuale Registrar del tuo dominio e il tempo di propagazione di quest’operazione potrebbe richiedere dalle 24 alle 48 ore prima di essere pienamente efficiente.
>

#### Step 5: trasferisci il contenuto dei tuoi account email

Questa fase è a sua volta suddivisa in ulteriori passaggi.

|Step|Descrizione|Dettagli|
|---|---|---|
|5.1.|Effettua la migrazione del contenuto degli indirizzi email in OVH|Utilizza il tool [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} che ti consente di copiare il contenuto dagli indirizzi email registrati presso il tuo precedente provider a quelli creati presso OVH.|
|5.2.|Utilizza i tuoi account email|Puoi accedere ai tuoi indirizzi email da un’applicazione Web ([Webmail](https://www.ovh.it/mail/){.external}). Se hai configurato uno degli indirizzi su un client di posta elettronica (come Outlook), è necessario ripetere l’operazione per inserire [i server di OVH](https://docs.ovh.com/it/emails/hosting_condiviso_come_gestire_il_servizio_email_ovh/) al posto di quelli appartenenti al tuo precedente provider.|

#### Step 6: trasferisci il tuo dominio su OVH

Non ti resta che effettuare il trasferimento del tuo dominio! Per realizzare quest’operazione, è necessario seguire i seguenti passaggi.

|Step|Descrizione|Dettagli|
|---|---|---|
|6.1.|Sblocca il dominio|Il blocco di un dominio ne impedisce il trasferimento a un altro Registrar, come OVH.  È dunque necessario sbloccarlo dal tuo attuale provider.|
|6.2.|Recupera il codice di trasferimento|Il codice di trasferimento ti verrà consegnato dal tuo attuale Registrar nel momento in cui sbloccherai il dominio.|
|6.3.|Effettua l’ordine di trasferimento presso OVH|Dal sito di [OVH](https://www.ovh.it/){.external}, effettua il tuo ordine di trasferimento, inserendo il codice di trasferimento ottenuto in precedenza.|
|6.4.|Effettua il pagamento|Non appena OVH riceverà il tuo pagamento, il trasferimento del tuo dominio avrà inizio.|
|6.5.|Conferma o attendi la conferma del trasferimento| Questo step dipende dell’estensione del tuo dominio. Quando è necessaria una conferma, generalmente viene inviata una richiesta tramite email in cui viene indicata la procedura da seguire. Completa i passaggi per confermare della richiesta di trasferimento.| 

Una volta che il trasferimento sarà terminato, il tuo sito Web, i tuoi indirizzi email e il tuo dominio saranno stati migrati in OVH senza interruzione del servizio!

### Migrazione con probabile interruzione del servizio

#### Step 1: ordina il trasferimento e l’hosting dei tuoi servizi in OVH

Questa fase è a sua volta suddivisa in ulteriori passaggi.

|Step|Descrizione|Dettagli|
|---|---|---|
|1.1.|Sblocca il dominio|Il blocco di un dominio ne impedisce il trasferimento a un altro Registrar, come OVH.  È dunque necessario sbloccarlo dal tuo attuale provider.|
|1.2.|Recupera il codice di trasferimento|Il codice di trasferimento ti verrà consegnato dal tuo attuale Registrar nel momento in cui sbloccherai il dominio.|
|1.3.|Effettua l’ordine presso OVH|Dal sito di [OVH](https://ovh.com/){.external}, effettua l’ordine di trasferimento del tuo dominio e dell’hosting, inserendo il codice di trasferimento ottenuto in precedenza. Durante la scelta dei server DNS, specifica quelli del tuo attuale fornitore. |
|1.4.|Effettua il pagamento|Non appena OVH riceverà il tuo pagamento, il trasferimento del tuo dominio e l’installazione del tuo hosting avranno inizio. **A seconda della policy dell’attuale Registrar del tuo dominio, la risoluzione DNS può essere bloccata, rendendo inaccessibile l’insieme dei servizi associati (in particolare il sito Web e gli indirizzi email)**.|
|1.5.|Conferma o attendi la conferma del trasferimento|Questo step dipende dell’estensione del tuo dominio. Quando è necessaria una conferma, generalmente viene inviata una richiesta tramite email in cui viene indicata la procedura da seguire. Completa i passaggi per confermare della richiesta di trasferimento.|

#### Step 2: trasferisci il sito Web

Questa fase è a sua volta suddivisa in ulteriori passaggi.

|Step|Descrizione|Dettagli|
|---|---|---|
|2.1.|Effettua un backup del sito|È necessario che sia un backup completo del tuo sito Web e che includa i file e i database. Questo backup è fondamentale per migrare il tuo sito in OVH.|
|2.2.|Metti online il tuo sito con OVH|Connettiti al tuo spazio di storage (FTP) al fine di importare i file del tuo sito e caricarli nella cartella **"www"**. Riceverai le credenziali per la connessione al protocollo FTP via email.|
|2.3.|Crea un database OVH|Se il tuo sito funziona con un database, è necessario [crearne uno nuovo presso OVH](https://docs.ovh.com/it/hosting/gestisci_un_database_dal_tuo_hosting_condiviso/){.external} dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|2.4.|Importa i dati del database|Importa il backup del tuo database utilizzando [il tool di OVH messo a disposizione](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/){.external} nel tuo Spazio Clienti OVH.|
|2.5.|Associa il sito al nuovo database|Le informazioni relative al tuo precedente database sono sempre disponibili nel file di configurazione del tuo sito. Sul tuo spazio di storage OVH, modifica questo file e inserisci le informazioni del nuovo database OVH.|

Poiché la configurazione del dominio resta invariata, l’hosting utilizzato per mostrare il tuo sito Web rimane quello del tuo attuale provider.

#### Step 3: crea i tuoi indirizzi email in OVH

**Una volta che il dominio è stato trasferito**, riceverai una mail che ti comunicherà l’avvenuta installazione del servizio email associato al tuo hosting. A partire da questo momento, è necessario [creare in OVH gli stessi indirizzi email](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/){.external} che utilizzi presso il tuo attuale provider, con lo stesso identico nome. Dal tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, nel menu a sinistra, clicca su `Email`{.action} e poi sull’hosting Web che hai appena acquistato (con lo stesso nome del tuo dominio), Seleziona la scheda `Email`{.action} e clicca su `Crea un indirizzo email`{.action}, dopodiché segui le indicazioni.

Non avendo ancora cambiato la configurazione del dominio, continuerai a ricevere i nuovi messaggi sugli indirizzi email creati presso il tuo attuale provider. Inoltre, è necessario continuare a utilizzare questi indirizzi anche per l’invio. 

#### Step 4: modifica la configurazione del dominio

Adesso che hai trasferito il tuo sito Web e creato i tuoi indirizzi email presso OVH, è necessario modificare la configurazione del tuo dominio. Per effettuare questa operazione, modifica i server DNS del tuo dominio con quelli di OVH attraverso lo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

 Per maggiore assistenza durante questa operazione, consulta la guida relativa a [Informazioni generali sui server DNS](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}.

Questa azione può avere diverse conseguenze:

- **vincolare tecnicamente il tuo dominio alle soluzioni OVH**: il tuo hosting OVH sarà utilizzato per mostrare il tuo sito Web e la ricezione dei nuovi messaggi avverrà sui tuoi indirizzi email creati presso OVH
- **risolvere un’interruzione del servizio**: se il tuo Registrar ha interrotto la propria configurazione DNS durante il trasferimento del dominio, ciò gli consentirà a quest’ultimo di essere nuovamente raggiungibile.

> [!warning]
>
> Il tempo di propagazione della modifica dei server DNS di un dominio potrebbe richiedere dalle 24 alle 48 ore prima di essere pienamente efficiente.
>

#### Step 5: trasferisci il contenuto dei tuoi account email

Questa fase è a sua volta suddivisa in ulteriori passaggi.

|Step|Descrizione|Descrizione|
|---|---|---|
|5.1.|Effettua la migrazione del contenuto degli indirizzi email in OVH|Utilizza il tool [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} che ti consente di copiare il contenuto degli account email creati presso il tuo ex provider verso quelli creati in OVH.|
|5.2.|Utilizza i tuoi account email|Puoi accedere ai tuoi indirizzi email attraverso l’applicazione online [Webmail](https://www.ovh.it/mail/){.external}. Se hai impostato uno dei tuoi account su un client di posta elettronica (come Outlook), è necessario configurarlo di nuovo per inserire [i server OVH](https://docs.ovh.com/it/emails/hosting_condiviso_come_gestire_il_servizio_email_ovh/) al posto di quelli appartenenti al tuo ex provider.|

Il tuo sito Web, i tuoi account email e il tuo dominio adesso sono in OVH!

## Per saperne di più

[Come gestire il servizio email OVH](https://docs.ovh.com/it/emails/hosting_condiviso_come_gestire_il_servizio_email_ovh/){.external}

[Gestire i server DNS di un dominio OVH](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/){.external}

[Creare un account email](https://docs.ovh.com/it/emails/servizio_email_guida_alla_creazione_di_un_indirizzo_email/){.external}

[Come importare un database MySQL](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/){.external}

[Gestire un database da un hosting condiviso](https://docs.ovh.com/it/hosting/gestisci_un_database_dal_tuo_hosting_condiviso/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/).
