---
title: 'Modificare la configurazione di un hosting Web'
excerpt: 'Come cambiare l’ambiente di esecuzione del tuo hosting Web dallo Spazio Cliente OVHcloud'
slug: modifica_lambiente_di_esecuzione_del_tuo_hosting_web
section: 'Configurazione dell’hosting'
order: 03
---

**Ultimo aggiornamento: 09/12/2022**

## Obiettivo

I siti Internet presenti in rete sono di tanti tipi diversi: blog, e-commerce, spazi dove condividere una passione o promuovere un’attività professionale… gli [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} permettono di ospitare qualsiasi tipologia di sito Web, purché compatibile con la [configurazione delle nostre infrastrutture](http://pro.ovh.net/infos/){.external}.

**Questa guida ti mostra come modificare la configurazione del tuo servizio di hosting dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} (escluso il servizio Cloud Web)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

**Modificare la configurazione di un hosting Web è un’operazione delicata**: un’azione errata potrebbe rendere irraggiungibile il tuo sito. Comprendere i possibili effetti di una modifica è importante per effettuare l’operazione con la massima consapevolezza.

Quando modifichi la configurazione del tuo hosting, cambi anche i parametri di base del tuo sito Internet. Anche se le nostre infrastrutture mettono a disposizione diverse configurazioni, ti consigliamo di accertarti che quella scelta sia tecnicamente compatibile con il tuo sito Web.

> [!warning]
>
> Prima di apportare qualsiasi modifica, assicurati che l’operazione non abbia impatto sulla raggiungibilità del tuo sito. In caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un fornitore specializzato. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida. 
> 

### Modifica la configurazione dell’hosting Web dallo Spazio Cliente OVHcloud

#### Step 1: accedi alla gestione della configurazione dell’hosting

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio dalla sezione `Hosting`{.action}, assicurati di essere posizionato nella scheda `Informazioni generali`{.action} e, nel riquadro “Configurazione”. A destra di `Versione PHP Globale`{.action}, clicca sui tre puntini in corrispondenza della versione PHP e seleziona `Modifica la configurazione`{.action}.

![hostingconfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

> [!primary]
> Se il pulsante non è attivo, è probabile che sia in corso una verifica della versione PHP. In questo caso, comparirà un cerchio azzurro che indicherà la verifica in corso. Attendi qualche minuto fino a quando il pulsante `Modifica la configurazione`{.action} risulti nuovamente abilitato.
>
> Se l'opzione `Versione PHP Globale`{.action} non compare nel tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), verifica che esista un file "**.ovhconfig**" nella root FTP del tuo hosting condiviso OVHcloud utilizzando la nostra guida sulla [configurazione del file ".ovhconfig"](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/).
>

#### Step 2: modifica la configurazione dell’hosting Web

Nella nuova finestra, sono disponibili due opzioni. Scegli l’operazione che vuoi eseguire e clicca su `Seguente`{.action}.

|Operazione|Dettagli|
|---|---|
|Ritorna a una configurazione precedente|Seleziona la configurazione da ripristinare in corrispondenza del campo `Seleziona storico`. Se in passato non hai apportato modifiche, questa opzione non sarà disponibile.|
|Modifica la configurazione attuale|Seleziona le modifiche da apportare alla configurazione. Per maggiori informazioni, consulta il paragrafo [Opzioni di configurazione disponibili](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#opzioni-di-configurazione-disponibili){.external} di questa guida.|

> [!primary]
>
> La modifica del motore di esecuzione dell’hosting Web comporta la reinizializzazione automatica delle sessioni PHP.
> 

Clicca su `Conferma`{.action} per applicare le modifiche e attendi il tempo necessario alla loro propagazione.

![hostingconfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Opzioni di configurazione disponibili

Quando modifichi la configurazione di un hosting Web, hai la possibilità di scegliere fra diverse opzioni. Per maggiori informazioni su una delle opzioni di configurazione disponibili, prosegui nella lettura di questa guida nella sezione corrispondente.

- [Ambiente di esecuzione](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#ambiente-di-esecuzione){.external}
- [Versione di PHP](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#versione-di-php){.external}
- [Motore PHP](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#motore-php){.external}
- [Modalità](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/#modalita){.external}

#### Ambiente di esecuzione

Scegliere un ambiente di esecuzione differente consente di cambiare alcune specifiche tecniche dell’hosting Web. **Prima di apportare qualsiasi modifica, assicurati che il nuovo ambiente scelto sia compatibile con il tuo sito Internet.** 

|Ambienti|Legacy|Stabile|Stable64|
|---|---|---|---|
|architettura|32 bit|32 bit|64 bits|
|Versione PHP minima|5.4|5.4|7.4|
|Openssl|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 e 3.4|2.7 e 3.7|2.7 e 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|

> [!primary]
>
> Anche se l’ambiente “legacy” potrebbe rivelarsi utile per siti sviluppati con vecchie versioni di PHP, consigliamo di utilizzare un ambiente “stable64” per poter usufruire degli ultimi aggiornamenti. **Prima di apportare qualsiasi modifica, verifica la compatibilità del tuo sito.**
> 

Una volta scelto il nuovo ambiente, è possibile eseguire le modifiche in due modi:

- **dallo Spazio Cliente OVH**: segui le istruzioni presenti nella sezione [Modificare la configurazione dell’hosting Web dallo Spazio Cliente](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web//#modifica-la-configurazione-dellhosting-web-dallo-spazio-cliente-ovh){.external} di questa guida.
- **agire manualmente sul file .ovhconfig**: questa soluzione, più tecnica, richiede la connessione allo spazio di storage. Per modificare il file **.ovhconfig**, consulta la nostra guida [Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

#### Versione di PHP

PHP è un linguaggio di programmazione in continua evoluzione disponibile attualmente in numerose versioni. Le più recenti contengono le patch per i bug esistenti e aggiungono o rimuovono determinate funzionalità. OVHcloud propone le nuove versioni rilasciate, disponibili alla pagina: <https://www.ovhcloud.com/it/web-hosting/uc-programming-language/> 

Dal momento che le ultime versioni potrebbero non includere alcune funzionalità, **prima di apportare qualsiasi modifica assicurati che la nuova versione di PHP sia compatibile con il tuo sito Internet**. 

È possibile modificare la versione PHP di un hosting Web in diversi modi:

- **dallo Spazio Cliente OVH**: segui le istruzioni presenti nella sezione [Modificare la configurazione dell’hosting Web dallo Spazio Cliente](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web//#modifica-la-configurazione-dellhosting-web-dallo-spazio-cliente-ovh){.external} di questa guida.
- **agire manualmente su un file presente nello spazio di storage**: questa soluzione, più tecnica, richiede la connessione allo spazio di storage. 

In generale, per maggiori informazioni sulle modifiche di una versione di PHP, consulta la nostra guida [Modificare la versione PHP di un hosting Web](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/){.external}.

#### Motore PHP

Il motore PHP consente di attivare o disattivare l’acceleratore PHP (PHP-FPM), ottimizzato per la nostra infrastruttura in modo da aumentare la velocità di esecuzione degli script PHP. L’acceleratore PHP offre performance fino a sette volte superiori rispetto al motore “phpcgi”. 

È possibile modificare il motore PHP di un hosting Web in diversi modi:

- **dallo Spazio Cliente OVH**: segui le istruzioni presenti nella sezione [Modificare la configurazione dell’hosting Web dallo Spazio Cliente](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web//#modifica-la-configurazione-dellhosting-web-dallo-spazio-cliente-ovh){.external} di questa guida. Per attivare l’acceleratore PHP (PHP-FPM) seleziona “php” come motore; per disattivarlo, scegli “phpcgi”.
- **agire manualmente sul file .ovhconfig**: questa soluzione, più tecnica, richiede la connessione allo spazio di storage. Per modificare il file **.ovhconfig**, consulta la nostra guida [Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

#### Modalità 

La modalità permette di gestire sia il comportamento della cache dei file statici del tuo sito (ad esempio, le immagini) che gli errori PHP (utili se, ad esempio, il tuo sito mostra una pagina bianca). Le modalità disponibili sono due:

|Modalità |Memorizzazione in cache dei file statici|Gestione degli errori PHP|
|---|---|---|
|Produzione|Massimizza la presenza in cache dei file statici sul browser Web.|Gli errori PHP non vengono visualizzati sul sito.|
|Sviluppo|Nessun file viene salvato in cache.|Gli errori PHP vengono visualizzati sul sito.|

È possibile modificare la modalità utilizzata da un hosting Web in diversi modi:

- **dallo Spazio Cliente OVH**: segui le istruzioni presenti nella sezione [Modificare la configurazione dell’hosting Web dallo Spazio Cliente](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web//#modifica-la-configurazione-dellhosting-web-dallo-spazio-cliente-ovh){.external} di questa guida.
- **agire manualmente sul file .ovhconfig**: questa soluzione, più tecnica, richiede la connessione allo spazio di storage. Per modificare il file **.ovhconfig**, consulta la nostra guida [Configurare il file .ovhconfig di un hosting Web](https://docs.ovh.com/it/hosting/configurare-file-ovhconfig/){.external}.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
