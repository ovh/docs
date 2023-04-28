---
title: Configura il firewall su Windows
excerpt: Scopri come configurare un firewall Windows
slug: firewall-windows
section: Sicurezza
order: 02
updated: 2022-01-31
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 31/01/2022**

## Obiettivo

Per proteggere in modo ottimale il tuo sistema, il server Windows Server dispone di un proprio firewall integrato. La sua configurazione permette di aumentare i livelli di sicurezza e garantire così la disponibilità e l'integrità di tutti gli elementi ospitati sul server, come ruoli, servizi, cartelle condivise.

**Questa guida ti mostra come applicare le regole del firewall su Windows.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui sei responsabile. ma non è autorizzata ad accedervi e non si occupa quindi della loro amministrazione. Garantire quotidianamente la gestione software e la sicurezza di queste macchine è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla sicurezza di un server, ti consigliamo di rivolgerti a un esperto del settore. Per maggiori informazioni consulta la sezione “Per saperne di più” di questa guida.
>

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) Windows sul tuo account OVHcloud
- Avere accesso amministratore al server tramite un desktop remoto Windows 

## Procedura

### Step 1: accedere al firewall Windows

Per accedere al firewall Windows, segui questo ordine:

- Clicca su `Inizia`{.action}.
- Clicca su `Ricerca`{.action}.
- Cerca "Firewall Windows" tramite la barra di ricerca.
- Clicca su `Firewall Windows`{.action}.

Clicca sulla linea `Configurazione avanzata`{.action}.

![Step1](images/step1.PNG){.thumbnail}

### Step 2: attiva una regola di traffico in entrata

Nella finestra che appare troverai parametri come:

- Regole di entrata e di uscita
- Norme di sicurezza della connessione
- Opzioni di controllo del firewall del server

Selezionando le `Regole di traffico in entrata`{.action}, visualizzi tutte le regole preconfigurate di Windows Server associate alle connessioni di rete e ai pacchetti in entrata. Alcune di queste regole non sono attive di default. Per attivarli, clicca con il tasto destro sulla regola e seleziona l'opzione `Attiva la regola`{.action}.

![Step1](images/step2.PNG){.thumbnail}

### Step 3: crea una nuova regola 

Per creare una nuova regola, accedi al menu `Action`{.action} e seleziona `Nuova regola`{.action}.
Clicca sull'opzione `Nuova regola`{.action} situata nel pannello di destra.

![Step3](images/step3.PNG){.thumbnail}

### Step 4: definire il tipo di regola da attivare

L'assistente mostrerà il tipo di regola da creare. Seleziona la casella `Porta`{.action}.

![Step4](images/step4.PNG){.thumbnail}

### Step 5: definire il tipo di porta da attivare

Allo step successivo, definisci il tipo di porta da attivare:

![Step5](images/step5.PNG){.thumbnail}

> [!primary]
>
>- TCP (protocollo di controllo della trasmissione)
>È un protocollo orientato alla connessione, cioè con il TCP sarà possibile creare connessioni tra loro per inviare flussi di dati. Il protocollo garantisce che i dati siano consegnati al destinatario senza errori e nello stesso ordine in cui sono stati inviati.
>
>- UDP (User Datagram Protocol - Protocollo di datagramma utente)
>È un protocollo non orientato verso la connessione. Il suo sviluppo si basa sullo scambio di datagrammi e facilita l'invio di datagrammi attraverso la rete. È necessario stabilire in anticipo una connessione con la destinazione.
>
>Seleziona la casella `Tutte le porte locali`{.action} per attivare tutte le porte TCP o UDP su un server non sicuro. Seleziona anche la casella `Porte locali specifiche`{.action} per determinare quale porto deve essere autorizzato. 
>

### Step 6: autorizzare o bloccare la connessione

Per definire l'azione che questa regola darà inizio, sono disponibili le seguenti opzioni: Seleziona quella che preferisci.

- **Autorizza la connessione**. Questa opzione permette una comunicazione completa tramite questa porta.
- **Autorizza la connessione se è sicura**. Questa opzione permette ai dati di essere trasmessi solo se la connessione è autenticata tramite IPsec.
- **Bloccare la connessione**. Questa opzione impedisce ai dati di essere inoltrati attraverso questa porta.

Seleziona l'opzione `Autorizza la connessione`{.action} e clicca su `Seguente`{.action}. 

![Step6](images/step6.PNG){.thumbnail}

### Step 7: definire il profilo e il nome del firewall da applicare

Infine, dovete scegliere su quali profili la regola deve essere applicata, tra i profili pubblici, di dominio o privato.
È possibile attivarli tutti se necessario.

![Step7](images/step7.PNG){.thumbnail}

Assegna un nome e una descrizione alla nuova regola (opzionale) per facilitarne l'utilizzo:

![Step7_01](images/step7-01.PNG){.thumbnail}

Clicca sul pulsante `Terminare`{.action} per completare il processo e creare la nuova regola.

![Step7_02](images/step7_02.PNG){.thumbnail}

Successivamente, è possibile apportare modifiche al livello di sicurezza della nuova regola creata.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
