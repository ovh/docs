---
title: 'Reindirizzare un dominio gestito da OVHcloud'
slug: reindirizzamento-dominio
excerpt: 'I diversi tipi di redirect e come creare un reindirizzamento per un dominio gestito da OVHcloud'
section: Generale
order: 1
---

**Ultimo aggiornamento: 28/01/2019**


## Obiettivo

Il redirect è una funzione che permette di reindirizzare un dominio verso una nuova destinazione. Ne esistono di diversi tipi e ognuno risponde a esigenze specifiche.

**Questa guida ti mostra i reindirizzamenti esistenti e come crearne uno per un dominio gestito da OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Essere connesso all’hosting Web (per aggiungere un [file .htaccess](https://docs.ovh.com/it/hosting/hosting_condiviso_tutto_sul_file_htaccess/){.external})

## Procedura

### Come funziona il reindirizzamento di un dominio

Prima di creare un reindirizzamento, è importante capirne l’utilità.  Questa funzionalità consente di reindirizzare il dominio verso una nuova destinazione (in genere un altro dominio) e può essere utile in molti casi, il più frequente dei quali è relativo alla modifica del nome di un sito internet: gli utenti che accedono ancora al vecchio dominio vengono così reindirizzati automaticamente verso il nuovo, senza che ne abbiano la percezione.

Questa operazione può essere effettuata in vari modi:

- **dallo Spazio Cliente OVHcloud**: un’assistente di configurazione ti guiderà alla configurazione del redirect

- **tramite file (sono necessarie conoscenze di programmazione)**: puoi creare tu stesso il reindirizzamento in un file (in genere, *.htaccess*)

Ricordati che utilizzare un reindirizzamento può avere impatto anche sull’indicizzazione Web del tuo sito: presta particolare attenzione alle operazioni eseguite e, se necessario, contatta un esperto SEO.

### Reindirizza un dominio dallo Spazio Cliente OVHcloud

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo dominio nella sezione `Domini`{.action} nella colonna a sinistra e clicca sulla scheda `Reindirizzamento`{.action}.

Visualizzerai una tabella con i reindirizzamenti attivi per il tuo dominio.

Per aggiungere un redirect, clicca sul pulsante `Aggiungi un reindirizzamento`{.action}.


Si aprirà una finestra in cui dovrai inserire il dominio (o sottodominio) da reindirizzare e che costituirà la sorgente del redirect.

![Step 1 per aggiungere un reindirizzamento](images/adding_redirection_1.png){.thumbnail}

A questo punto, scegli la destinazione verso cui reindirizzare il dominio indicato. Le opzioni disponibili sono due:

- **redirect verso un indirizzo Web**

Reindirizza un dominio verso un altro dominio. È la soluzione ideale in caso di modifica del dominio di un sito Internet.

- **redirect verso un server OVHcloud o esterno**

Modifica la configurazione DNS di un dominio sostituendo la destinazione (record A, AAAA o CNAME). È la soluzione ideale quando il sito Web non è più ospitato nella stessa cartella ma il dominio resta lo stesso.
Se il tuo dominio utilizza la configurazione OVHcloud, è possibile effettuare questa operazione direttamente dallo Spazio Cliente (consulta la guida [Modificare una zona DNS OVHcloud](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}).

Questa guida spiega esclusivamente come configurare il reindirizzamento **verso un altro indirizzo Web**. Se invece vuoi impostare un redirect verso un server OVHcloud o esterno, contatta il tuo provider per conoscere quali record DNS modificare prima di continuare la procedura.

![Step 2 per aggiungere un reindirizzamento](images/adding_redirection_2.png){.thumbnail}

Per effettuare un redirect **verso un indirizzo Web**, scegli il tipo di reindirizzamento. Le opzioni disponibili sono due:

|Tipo di reindirizzamento|Descrizione|
|---|---|
|Visibile|Il dominio digitato nel browser (vecchio indirizzo) verrà reindirizzato verso il nuovo dominio. La modifica sarà visibile anche nella barra di indirizzo del browser, dove comparirà il nuovo indirizzo.|
|Invisibile|Il dominio digitato nel browser (vecchio indirizzo) non sarà reindirizzato verso il nuovo dominio. Il dominio resta invariato ma, tramite un attributo chiamato *iframe*, verrà visualizzato il contenuto della pagina ospitata nel nuovo dominio. **Attenzione**: questa azione non è compatibile con tutti i siti e potrebbe avere impatto sul loro posizionamento nei motori di ricerca.|

![Scelta tra reindirizzamento visibile e invisibile](images/redirection_3xx_1.png){.thumbnail}

#### Reindirizzamento visibile

Puoi scegliere tra due opzioni:

|Tipo di reindirizzamento|Codice HTTP|Descrizione|
|---|---|---|
|Visibilità permanente|301|Reindirizzamento di tipo “standard”.|
|Visibilità temporanea|302|Reindirizzamento da utilizzare occasionalmente (ad esempio per eventi temporanei o stagionali). Il posizionamento sui motori di ricerca è meno buono rispetto al redirect 301.|

Dopo aver effettuato la tua scelta, inserisci la destinazione del reindirizzamento (l’indirizzo Web verso cui verrà impostato il redirect).

![Scelta tra reindirizzamento visibile in modo permanente o temporaneo](images/redirection_3xx_2.png){.thumbnail}

Clicca su `Seguente`{.action}, verifica che le informazioni siano corrette e poi clicca su `Conferma`{.action}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore. 
>

#### Reindirizzamento invisibile

Per impostare questo tipo di redirect (codice HTTP 200), completa le informazioni richieste (indirizzo Web e opzioni) e clicca su `Seguente`{.action}. Verifica che le informazioni siano corrette e poi clicca su `Conferma`{.action}.

|Campo|Descrizione|
|---|---|
|Titolo|Il titolo del sito Internet che comparirà, ad esempio, nella scheda dei browser Internet.|
|Parole chiave|Parole che possono essere utilizzate dai motori di ricerca per indicizzare la pagina.|
|Descrizione|Descrizione relativa al sito Web che potrà essere utilizzata dai motori di ricerca nei loro risultati.|

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore. 
>

![Creazione di un reindirizzamento invisibile](images/invisible_redirection.png){.thumbnail}

### Reindirizza un dominio con un file .htaccess

Il file .htaccess è un file di configurazione in cui possono essere specificati alcuni comandi. Quando il codice del sito viene caricato dal server Web (Apache), i comandi vengono interpretati e quindi eseguiti permettendo, tra le azioni possibili, anche di creare redirect.

La modifica di un file .htaccess richiede competenze tecniche: se sull’hosting si utilizzano sottocartelle, un’operazione non corretta può rendere non raggiungibili uno o più siti internet. Se hai bisogno di aiuto per modificare un file .htaccess, ti consigliamo di rivolgerti a uno sviluppatore Web.

Per maggiori informazioni sugli utilizzi possibili di questo file di configurazione, consulta la nostra guida [Tutto sul file .htaccess](https://docs.ovh.com/it/hosting/hosting_condiviso_tutto_sul_file_htaccess/){.external}.

> [!primary]
>
> Prima di effettuare qualsiasi operazione, ti consigliamo di effettuare un backup del tuo .htaccess per poter ripristinare la versione precedente se necessario.
>

- **Redirect permanent**

Il codice inviato sarà un HTTP 301, che avvisa i sistemi dei motori di ricerca che i loro link devono essere aggiornati con il nuovo indirizzo.

Per reindirizzare l’intero sito, utilizza questo codice:

```
Redirect permanent / http://nuovo-sito.tld
```

Per modificare una cartella/file:

```
Redirect permanent /vecchia_directory http://nuovo-sito.tld/nuova_directory
Redirect permanent /vecchio_file.php http://sito.tld/nuovo_file.php
```

- **Redirect gone**

Se un file non esiste più, è preferibile sostituire il classico “404: Not Found” con un messaggio più specifico, ad esempio “410: Gone”:  

```
Redirect gone /eliminato.html
```

- **Redirect seeother**

Se modifichi l’estensione di un file, `seeother` permette di cambiarne il tipo inviando un codice HTTP 303:

```
Redirect seeother /esempio.doc http://sito.tld/esempio.pdf
```

- **Redirect Temp**

Il reindirizzamento temporaneo di tipo HTTP 302 può essere utilizzato in caso di trasferimento momentaneo dei file su un altro sito:

```
Redirect temp / http://altro_sito_web.tld/sito/
```

## Per saperne di più

[Tutto sul file .htaccess](https://docs.ovh.com/it/hosting/hosting_condiviso_tutto_sul_file_htaccess/){.external}

[Come modificare la mia zona DNS?](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>