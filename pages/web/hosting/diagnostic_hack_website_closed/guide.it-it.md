---
title: 'Cosa fare in caso di hosting disattivato per motivi di sicurezza'
slug: sito-chiuso-per-hack
excerpt: 'Come comportarsi in caso di disattivazione di un hosting Web OVH per motivi di sicurezza'
section: Diagnostica
order: 1
---

**Ultimo aggiornamento: 25/07/2019**

## Obiettivo

Se hai pubblicato il tuo sito su un hosting Web OVH, potresti ricevere un messaggio relativo all’esecuzione di un intervento legato alla sicurezza del tuo servizio. Questa operazione potrebbe aver avuto impatto sulla raggiungibilità del sito o su alcune delle sue funzionalità. Questo tipo di provvedimento viene adottato soltanto nel caso in cui sull’hosting sia stata rilevata un’attività sospetta e generalmente malevola. 

**Questa guida descrive alcune best practice di sicurezza e ti mostra le operazioni da effettuare in caso di disattivazione del tuo hosting Web.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} attivo
- Disporre delle credenziali di accesso allo spazio di storage dell’hosting
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}

## Procedura

I siti Internet presenti in rete sono di tanti tipi diversi: che siano basati su soluzioni chiavi in mano (come i sistemi di gestione dei contenuti o CMS) che su strutture personalizzate (sviluppate in autonomia dallo stesso utente o da un terzo), le tecnologie utilizzate si evolvono nel tempo. 

La manutenzione di un **sito Internet richiede quindi regolari update**, operazione che comporta anche modifiche del codice. Gli aggiornamenti eseguiti possono includere nuove funzionalità, miglioramenti di stabilità e patch di sicurezza per la correzione di eventuali bug.

Un sito Web può infatti presentare una o più vulnerabilità  che, pur non consentendo l’accesso ai nostri server, possono compromettere i dati ospitati e minacciare la stabilità dell’intera infrastruttura in caso di utilizzo massivo.

L’esistenza di una falla di sicurezza può permettere a un hacker di utilizzare un hosting per atti malevoli a insaputa dell'utente, ad esempio per inviare un numero molto elevato di messaggi di Spam o ospitare un sito fraudolento. 

Per evitare situazioni di questo tipo e garantire la sicurezza tua e degli altri clienti, OVH si riserva la possibilità di disattivare temporaneamente un hosting e alcune delle sue funzionalità. Per risolvere il problema, l’utente dovrà eseguire diverse azioni. Anche se non esiste una procedura universale, le informazioni contenute in questa guida potrebbero esserti di aiuto per effettuare le operazioni necessarie. 

> [!warning]
>
> Ti ricordiamo che questa guida non si sostituisce al supporto di un webmaster. In caso di difficoltà o dubbi, ti consigliamo di contattare uno esperto del settore o il fornitore del servizio. OVH non potrà fornirti alcuna assistenza.
>

### Step 1: valuta la situazione

Prima di apportare qualsiasi modifica al sito Web, è importante recuperare il maggior numero di informazioni per capire cosa sia successo. Ecco alcuni consigli che potrebbero aiutarti nella tua analisi. 

#### 1.1\. Leggi attentamente il messaggio di OVH

Dovresti aver ricevuto un messaggio da parte di OVH relativo all’esecuzione di un intervento legato alla sicurezza del tuo servizio: leggi con attenzione le informazioni fornite. Il contenuto del messaggio varia in base alle situazioni ma, in qualsiasi caso, ti consente di: 

- stabilire il momento esatto in cui l’hosting è stato disattivato
- conoscere il motivo per cui l’hosting è stato disattivato

Questi dati potrebbero risultare utili durante le ricerche e operazioni successive.

#### 1.2\. Valuta la sicurezza del sito Web

Indipendentemente dalla tipologia utilizzata, l’aggiornamento regolare di un sito Web è fondamentale. 

Questo vale in particolar modo per i CMS, in quanto altamente personalizzabili con temi e moduli (o plugin) aggiuntivi. Nonostante la praticità, i plugin possono modificare o aggiungere al sito del codice di cui non si conosce la provenienza né il livello di sicurezza.

È importante quindi porsi queste domande: 

- **Di recente hai effettuato un aggiornamento del sito Internet?** 

Questo punto include l’aggiornamento del sito, temi o plugin da parte dell’utente o del webmaster che si occupa della sua gestione. Se non è stata eseguita nessuna di queste operazioni è possibile che il sito presenti una falla di sicurezza e che la relativa patch sia già disponibile con un aggiornamento non ancora installato. 

È quindi necessario verificare lo stato del sito e degli elementi aggiuntivi ed eventualmente aggiornarli.

- **Di recente hai aggiunto un nuovo tema o modulo al tuo sito Internet?**

In questo caso è possibile che il sito presenti una falla di sicurezza conosciuta e già sfruttata per atti malevoli. Si tratta però di una semplice ipotesi e la causa potrebbe non provenire necessariamente dal nuovo componente installato.

Prosegui al prossimo step per verificare che i diversi elementi aggiuntivi del sito siano sicuri e abbiano una buona reputazione online. 

#### 1.3\. Consulta le attività e i log dell’hosting

Questa operazione permette di conoscere l’attività del tuo servizio e del tuo sito, consentendo di analizzare nel dettaglio ciò che è successo al momento della disattivazione.

Per consultare l’attività e i log dell’hosting accedi alla sezione `Web`{.action} dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra. A questo punto, in base alle informazioni che vuoi raccogliere, si presentano due possibilità:

- **consultare l’attività dell’hosting**

Questa opzione permette di esaminare lo storico dell’attività del servizio in un periodo di giorni, settimane o mesi e individuare così eventuali azioni sospette antecedenti l’intervento e la disattivazione dell’hosting da parte di OVH. 

Assicurati di essere posizionato sulla scheda `Informazioni generali`{.action} e scorri la pagina verso il basso fino al riquadro `Attività dell’hosting`.

![disattivazione hosting](images/hosting-deactivation-step1.png){.thumbnail}

- **consultare i log dell’hosting**

Questa opzione permette di accedere ai log dettagliati del tuo servizio e in particolare a tutte le richieste Web ricevute, consentendo così di trovare i file che hanno permesso all’hacker di utilizzare l’hosting Web per le sue attività. Questo tipo di analisi, molto tecnica, si rivela spesso complicata. In caso di necessità, rivolgiti a un esperto del settore per eseguire l’operazione.

Per accedere ai log clicca sulla scheda `Altre opzioni`{.action} e seleziona `Statistiche e log`{.action}. Utilizza gli URL per connetterti al sito contenente i log dell’hosting Web. 

![disattivazione hosting](images/hosting-deactivation-step2.png){.thumbnail}

Consulta i dati relativi alla data in questione (cioè quella in cui è stata effettuata la disattivazione o in cui l’attività sospetta ha avuto inizio), partendo da un orario preciso ed eventualmente estendendo il campo di ricerca ad orari anteriori. Lo scopo è trovare attività insolite, provenienti generalmente da richieste di tipo “POST”. Anche questo tipo di analisi, come la precedente, potrebbe rivelarsi molto complessa. In caso di necessità, rivolgiti a un esperto del settore per eseguire l’operazione.

### Step 2: intervieni sul sito Internet

Una volta raccolti tutti gli elementi necessari, dovrebbe essere possibile intervenire sul sito Internet o almeno avere un’idea più precisa delle operazioni da effettuare. 

Questo step raggruppa due azioni complementari:

- **la correzione di uno o più bug di sicurezza**, per impedire nuove intrusioni.

- **l’eliminazione dei codici malevoli** depositati sul sito all’insaputa dell’utente tramite una<i> backdoor</i>, che permette di aggirare le difese del sistema. È quindi necessario verificare l’esistenza del codice malevolo ed eventualmente procedere alla sua rimozione.

> [!warning]
>
> Queste due operazioni sono complementari.
> 
> Se si procede alla correzione del bug ma il codice malevolo presente sull’hosting non viene eliminato, l’hacker continuerà ad avere accesso al servizio e potrà continuare a utilizzarlo.
>
> Se il codice malevolo viene eliminato senza alcuna correzione della falla di sicurezza, l’hacker avrà la possibilità di sfruttarla per depositare nuovamente sull’hosting il codice malevolo o creare una nuova <i>backdoor</i>.
>

La procedura da seguire varia in base ai singoli casi e non esiste pertanto una procedura universale. Le informazioni contenute in questa guida potrebbero comunque esserti di aiuto per effettuare l’operazione: utilizzale adattandole alla tua situazione. In caso di difficoltà o dubbi, contatta un esperto del settore o il fornitore del servizio. 

#### 2.1\. Ripristina il sito a una data anteriore

L’operazione di ripristino permette di riportare il sito allo stato di una data antecedente. È necessario che nel backup di cui si dispone non fosse già presente il codice malevolo: in questo caso, l’azione risulterebbe obsoleta. 

> [!warning]
>
> Il ripristino consente di rimuovere il codice malevolo depositato sull’hosting a insaputa dell’utente,  **ma non corregge la falla di sicurezza**.
>

Esistono diversi modi per effettuare il ripristino di un sito.

- **Disponi di una copia personale del sito**: in questo caso è sufficiente sostituire il contenuto dello spazio di storage e del database con quello del backup. La nostra guida [Importare un backup nel database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/){.external} può supportarti in questa operazione.

- **OVH dispone di una copia del sito (spazio di archiviazione e database)**: in questo caso è possibile che, a seconda della data da ripristinare, OVH sia in grado di fornire il backup necessario.  Ecco alcune guide che potrebbero esserti utili: [Ripristinare i dati dello spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/){.external}, [Recuperare il backup del database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/){.external}, [Importare un backup nel database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/){.external}. Ti consigliamo inoltre di assicurarti, nella misura del possibile, che le date dei backup selezionati coincidano.

- **Non è disponibile una copia del sito**: in questo caso è necessario [intervenire manualmente nel codice del sito](https://docs.ovh.com/it/hosting/sito-chiuso-per-hack/#23-correggi-manualmente-il-codice-del-sito){.external} e apportare le opportune correzioni. 

#### 2.2\. Aggiorna il sito Internet

Questa operazione può sembrare semplice, ma richiede la valutazione di alcuni elementi tecnici. Prima di effettuare qualsiasi aggiornamento, assicurati di disporre di un accesso al sito Web. 

> [!primary]
>
> Se in seguito all’intervento di OVH il sito risulta irraggiungibile non sarà possibile aggiornarlo immediatamente, ma sarà prima necessario recuperare l’accesso seguendo la procedura descritta nello [Step 3: riattiva l’hosting Web](https://docs.ovh.com/it/hosting/sito-chiuso-per-hack/#step-3-riattiva-l-hosting-web_1){.external}. A questo punto sarà possibile eseguire l’aggiornamento.
>

Accedendo all’interfaccia di gestione del sito (che non coincide con l’interfaccia di amministrazione OVH), è possibile verificare se:

- il sito risulta aggiornato correttamente
- tutti i temi e moduli aggiuntivi (o plugin) installati risultano aggiornati

In caso contrario, sarà necessario effettuare l’update seguendo le indicazioni fornite nell’interfaccia di gestione del sito. 

> [!warning]
>
> **Prima di effettuare qualsiasi operazione ti consigliamo di prendere visione delle raccomandazioni relative all’aggiornamento in questione** fornite dal produttore del servizio o dal creatore del sito Internet, dei temi e dei moduli aggiuntivi utilizzati.
>

Queste informazioni potrebbero infatti evidenziare alcuni elementi che potrebbero bloccare l’aggiornamento che stai per effettuare. Ad esempio:

- verifica che la nuova versione del CMS utilizzato sia compatibile con la versione di PHP configurata sull’hosting. Qualora sia necessaria una modifica di versione, consulta la guida [Modificare la versione di PHP su un hosting Web](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/){.external}.
- verifica che i temi e i moduli aggiuntivi installati siano compatibili con la nuova versione del CMS. In caso contrario non sarà più possibile utilizzarli e dovrai trovare una soluzione alternativa.

#### 2.3\. Correggi manualmente il codice del sito

Se il sito non è basato su soluzioni chiavi in mano o se non disponi di una copia che ne consente il ripristino, è necessario eseguire manualmente le azioni correttive. **Questa soluzione è tecnica e potrebbe rivelarsi complessa: se non possiedi competenze avanzate, contatta un esperto del settore.** 

La procedura da seguire varia in base ai singoli casi e non esiste pertanto una procedura universale. Consultare i log dell’hosting potrebbe comunque esserti utile per individuare più facilmente i file infetti su cui è necessario intervenire.

### Step 3: riattiva l’hosting Web

Per riattivare l’hosting Web è necessario eseguire un’operazione specifica sullo spazio di archiviazione: impostare i permessi della cartella di root dello storage (“/”) a **705**.

> [!primary]
>
> Se il messaggio ricevuto da parte di OVH specifica esplicitamente che non hai la possibilità di riattivare l’hosting in autonomia, segui le indicazioni fornite.
>

Se invece hai la possibilità di riattivarlo, assicurati d disporre di tutti i dati necessari per effettuare l’accesso allo spazio di storage (server FTP, utente FTP e password associata).

Per recuperare queste informazioni, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} della colonna a sinistra e clicca sulla scheda `FTP - SSH`{.action}. Se necessario, da questa pagina è possibile anche [modificare la password dell’utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}.

![disattivazione hosting](images/hosting-deactivation-step3.png){.thumbnail}

Una volta in possesso delle informazioni necessarie, in base al software o all’interfaccia Web utilizzata, saranno disponibili diverse possibilità.

#### 3.1\. Riattiva l’hosting con FileZilla

Apri il client FileZilla e accedi allo spazio di storage. Clicca sulla scheda `Server`{.action} nella barra del menu e seleziona `Seleziona un comando personalizzato`{.action} (la dicitura potrebbe variare leggermente in base alla versione utilizzata). Nella nuova finestra, inserisci questo comando:

```
SITE CHMOD 705 /
```

Se l’operazione è andata a buon fine visualizzerai la risposta “OK”. Per verificare che il sito sia di nuovo online, prova ad effettuare l’accesso.

Se devi eseguire l’aggiornamento del sito Web, torna al paragrafo [2.2. Aggiorna il sito Internet](https://docs.ovh.com/it/hosting/sito-chiuso-per-hack/#22-aggiorna-il-sito-internet){.external} di questa guida.

![disattivazione hosting](images/hosting-deactivation-step4.png){.thumbnail}

#### 3.2\. Riattiva l’hosting con FTP Explorer “net2ftp”

Sempre nella scheda `FTP - SSH`{.action} dello Spazio Cliente OVH, clicca sul pulsante `FTP Explorer`{.action} e accedi allo spazio di storage.  Clicca su `Funzioni avanzate`{.action} e poi sul pulsante `Esegui`{.action} accanto a `Send arbitrary FTP commands to the FTP server`.

![disattivazione hosting](images/hosting-deactivation-step5.png){.thumbnail}

Nella parte superiore delle pagina, inserisci il comando qui sotto e conferma cliccando sulla spunta verde. 

```
SITE CHMOD 705 /
```

Se l’operazione è andata a buon fine visualizzerai la risposta “OK”. Per verificare che il sito sia di nuovo online, prova ad effettuare l’accesso.

Se devi eseguire l’aggiornamento del sito Web, torna al paragrafo [2.2. Aggiorna il sito Internet](https://docs.ovh.com/it/hosting/sito-chiuso-per-hack/#22-aggiorna-il-sito-internet){.external} di questa guida.

![disattivazione hosting](images/hosting-deactivation-step6.png){.thumbnail}

#### 3.3\. Riattiva l’hosting con SSH

Accedi allo spazio di storage via SSH. Esegui il comando qui sotto e confermalo:

```
chmod 705 .
```

Per verificare la correttezza dei permessi, utilizza il comando

```
ls -la
```

oppure prova ad effettuare l’accesso. Se devi eseguire l’aggiornamento del sito Web, torna al paragrafo [2.2. Aggiorna il sito Internet](https://docs.ovh.com/it/hosting/sito-chiuso-per-hack/#22-aggiorna-il-sito-internet){.external} di questa guida.

### Step 4: mantieni la sicurezza del sito Internet

Adesso che il sito non presenta più falle di sicurezza e codici malevoli, è importante assicurarsi che questo tipo di problema non si ripresenti in futuro. Per continuare a garantire la sicurezza, ti consigliamo di:

- aggiornare regolarmente il sito (temi e moduli aggiuntivi inclusi)
- installare contenuti affidabili: più un sito è personalizzato con temi e moduli, più presenta integrazioni al codice iniziale. Presta particolare attenzione ai feedback degli utenti relativi agli elementi che intendi utilizzare.

La cosa più importante è eseguire installazioni con la massima prudenza e ricordarsi di effettuare regolarmente gli aggiornamenti.

## Per saperne di più

[Importare un backup nel database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_importare_un_database_mysql/){.external}

[Ripristinare i dati dello spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/){.external}

[Recuperare il backup del database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/){.external}

[Modificare la versione di PHP su un hosting Web](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/){.external}

[Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.