---
title: Trasferire un dominio verso un altro Registrar
slug: trasferisci_in_uscita_un_dominio_generico_o_geografico
excerpt: Come effettuare il trasferimento di un dominio OVHcloud verso un altro provider
section: Trasferimento
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/10/2022**

## Obiettivo

**Trasferimento di dominio** si riferisce allo spostamento di un dominio da un Registrar a un altro. Ad esempio, se hai ordinato un dominio sul nostro sito Web, OVHcloud è il suo attuale Registrar. Il trasferimento del dominio in uscita deve essere avviato dal nuovo Registrar.

Per impedire trasferimenti di domini non autorizzati, i domini sono generalmente bloccati dallo stato *clientTransferProhibited*. Prima di avviare il trasferimento, è necessario rimuovere questa protezione dallo Spazio Cliente OVHcloud.

**Questa guida ti mostra come preparare il tuo dominio per il trasferimento in uscita.**

> [!warning]
>
> Se il dominio in questione deve restare registrato in OVHcloud ma modificato nelle modalità di gestione o proprietà, il trasferimento in uscita dal dominio non è la procedura appropriata.
>
> Per trasferire la gestione del tuo dominio verso un altro account cliente OVHcloud, il metodo più adatto è la *modifica dei contatti*. La procedura è descritta in [guida](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/).
>
> Se è necessario modificare il **proprietario** del dominio, è necessario farlo **prima** di modificare i contatti del dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di proprietario dei domini](https://docs.ovh.com/it/domains/cambiare_proprietario_dominio/).
>

## Prerequisiti

- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/) registrato in OVHcloud
- Avere l’autorizzazione per richiedere il trasferimento di un dominio: il proprietario e/o gli amministratori devono essere informati della richiesta di trasferimento
- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- La registrazione del dominio in questione risale ad almeno 60 giorni fa e non è stata trasferita o scambiata (ovvero la modifica del proprietario) negli ultimi 60 giorni

> [!primary]
>
> Se sei il **proprietario** del dominio ma la sua gestione nello Spazio Cliente OVHcloud non è disponibile, tramite il tuo accesso o tramite il contatto amministrativo del dominio, consulta [questa guida](../../customer/gestisci_i_tuoi_contatti/#caso-specifico-di-un-proprietario-di-dominio) prima di continuare.
>

## Procedura

> [!warning]
>
> Le istruzioni che seguono descrivono il modo più comune di trasferire un dominio, valido per la maggior parte dei domini di primo livello (top level domain, TLD). Tuttavia, le norme procedurali specifiche per gli LD sono definite unicamente dall'autorità competente, vale a dire il **registro**. I Registrar come OVHcloud devono rispettare queste regole e non hanno alcuna influenza sulle decisioni dei Registrar.
>
> La procedura esatta per i trasferimenti di dominio può quindi variare, in particolare per quanto riguarda alcune TLD di codice del paese (ccTLD, quali .lu, .uk, .hk, .ro) e alcune TLD speciali (.am, .fm, ecc.). I trasferimenti possono anche essere vietati per vari motivi, ad esempio in caso di pagamento in attesa, abuso o blocco del registro.
>
> In caso di dubbi, consulta queste risorse:
>
> - il sito web del registro TLD corrispondente;
> - la [lista dei TLD disponibili in OVHcloud](https://www.ovhcloud.com/it/domains/tld/);
> - [le spiegazioni dell'ICANN sui codici di stato EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (per sapere quali codici di status si applicano attualmente al tuo dominio, effettua una ricerca *Whois*, preferibilmente utilizzando il sito web del registro TLD corrispondente);
> - il sito Web e l'interfaccia di gestione del nuovo Registrar, in particolare per le domande relative ad un processo di trasferimento in attesa.
>

### Step 1: togliere la protezione contro il trasferimento del dominio

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona `Web Cloud`{.action}. Clicca sui `Domini`{.action} e seleziona il dominio interessato.

Nella scheda `Informazioni generali`{.action}, visualizzi il cursore `Richiedi Auth info` sotto **Sicurezza**. Di default, questa protezione è `Attiva`{.action}.

![protezione attivata](images/outgoing-transfer-step1.png){.thumbnail}

Clicca sul cursore e conferma nella nuova finestra che vuoi eliminare questa protezione. Attendi qualche minuto prima che lo stato passi alla `Disattivazione`{.action}.

![disattivazione protezione](images/outgoing-transfer-step2.png){.thumbnail}

> [!primary]
>
> Una volta disattivata la protezione, il dominio resta sbloccato per sette giorni. Dopo questo periodo, la protezione verrà riattivata automaticamente. Se nel frattempo non richiedi il trasferimento di un dominio al tuo nuovo Registrar, sarà necessario rimuovere nuovamente la protezione del dominio.
>

### Step 2: recuperare il codice di trasferimento

Una volta disattivata la protezione contro il trasferimento, puoi recuperare il codice di trasferimento del tuo dominio. Per fare ciò, vai alla scheda `Informazioni generali`{.action} e clicca su `AUTH/INFO`{.action} accanto alla voce `Richiedi Auth info`. Se necessario, aggiorna la pagina.

A questo punto compare una finestra con il tuo codice AUTH/INFO (anche chiamato codice di trasferimento, password del dominio, AUTH-CODE o EPP-Code).

![outgoingtransfer](images/outgoing-transfer-step3.png){.thumbnail}

Il codice verrà richiesto dal tuo nuovo Registrar per completare il processo di trasferimento. Puoi verificare i dettagli presso il tuo nuovo Registrar.

Piuttosto che digitare manualmente il codice, ti consigliamo di copiarlo/incollarlo perché alcuni caratteri possono essere facilmente confondibili.

> [!warning]
>
> Se il dominio è sospeso o scaduto, è necessario [creare un ticket di assistenza](https://www.ovh.com/manager/dedicated/#/support/tickets/new) dallo Spazio Cliente OVHcloud.

### Step 3: avvia il trasferimento verso il nuovo Registrar

Una volta eseguiti gli step precedenti, puoi avviare il processo di trasferimento, in genere tramite un comando. Il trasferimento può richiedere fino a 10 giorni. 

Per maggiori informazioni, contatta il tuo nuovo Registrar.

> [!warning]
>
> Se il tuo nuovo Registrar richiede un nuovo codice di trasferimento, riattiva la `Protezione contro il trasferimento` per il tuo dominio e disattivala nuovamente pochi minuti dopo. In questo modo è possibile recuperare un nuovo codice di trasferimento.
>

## Per saperne di più

[Trasferimento di dominio.co.uk in uscita](https://docs.ovh.com/it/domains/guida_al_trasferimento_in_uscita_di_un_dominio_couk/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni (offerte di supporto)(https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.