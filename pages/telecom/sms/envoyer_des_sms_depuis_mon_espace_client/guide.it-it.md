---
title: Inviare SMS dallo Spazio Cliente
slug: inviare_sms_dallo_spazio_cliente
excerpt: Come inviare SMS facilmente dal tuo Spazio Cliente OVHcloud
section: Inviare SMS
---

**Ultimo aggiornamento: 19/05/2020**

## Obiettivo

È possibile inviare SMS direttamente dallo Spazio Cliente. Questa guida ti mostra la procedura da seguire per inviare i primi SMS.

## Prerequisiti

- Disporre di un account SMS OVHcloud con saldo SMS.

## Procedura

Accedi allo [Spazio Cliente[e seleziona `Telecom` (1). Quindi clicca su `SMS` a sinistra (2) e seleziona il tuo account SMS (3).

Il campo “Inviare un SMS” (4) è il primo elemento disponibile nella lista delle azioni.

![envoi sms manager](images/sms-send-control-panel01E.png){.thumbnail}

### Step 1: Configura il mittente e il destinatario

Una volta nella pagina di invio SMS, è necessario configurare tre distinti parametri per adattare al meglio l’invio di SMS alle tue esigenze.

![envoi sms manager](images/sms-send-control-panel02E.png){.thumbnail}

Per il mittente dell’SMS (1), è possibile selezionare un numero breve che accetti le risposte (soltanto per gli account OVHcloud presenti in Francia) oppure un mittente alfanumerico.
Quindi inserisci il numero del destinatario (2) nel formato internazionale (+336xxxxxxxx).
Per maggiori informazioni sulla creazione di un mittente, consulta lo [step 3: scegli il mittente degli SMS](./#step-3-scegli-il-mittente-sms){.external}.

È possibile inviare SMS a più destinatari in due diversi modi: 

- Tramite una lista di destinatari nel formato .csv, cliccando sul pulsante “Gestisci i destinatari”.
Per maggiori informazioni, consulta la nostra [guida sulle liste di destinatari SMS](../lista_di_destinatari_sms/).

- Tramite una rubrica indirizzi (3), che può essere creata dallo Spazio Cliente o importata tramite une file .csv o .txt.
Per maggiori informazioni consulta la[guida sulle rubriche SMS](../gestisci_le_tue_rubriche_sms/).

### Step 2: digita il tuo SMS

Una volta selezionato il mittente e inseriti i destinatari, è possibile iniziare a digitare il messaggio.

![envoi sms manager](images/sms-send-control-panel03E.png){.thumbnail}

Digita il messaggio nell’apposita area di testo (1). Visualizzi un contatore che indica il numero dei caratteri utilizzati e il numero degli SMS corrispondenti (2).

Le due tabelle qui sotto elencano i caratteri autorizzati per una codifica a 7bit. I caratteri della tabella “Estensioni” valgono il doppio. 

La lunghezza massima di un SMS è di 160 caratteri (norma GSM 03.38).

Attenzione: l’utilizzo di caratteri non presenti in queste tabelle comporta il passaggio della codifica in Unicode e la riduzione della lunghezza massima di un SMS a 70 caratteri.

![Lista dei caratteri SMS](images/smsauthorizedcharacters.png){.thumbnail}

#### Opzioni avanzate

In questa sezione è possibile effettuare un invio immediato o differito.

Inoltre sono disponibili tre formati di invio: 

- Standard:  l’SMS più comunemente utilizzato.
- Flash : l’SMS appare direttamente sullo schermo del telefono.
- SIM: l’SMS viene salvato automaticamente sulla carta SIM del telefono.

### Step 3: scegli il mittente del tuo SMS

#### Breve numero che consente ai destinatari di inviare le risposte (soltanto per gli account OVHcloud in Francia).

Consente di ricevere una risposta tramite la scheda SMS ricevuti.

#### Numero mobile virtuale (soltanto per gli account OVHcloud in Francia)

Se disponi di un’offerta SMS con numero di cellulare virtuale, puoi inserirlo come mittente. Per maggiori informazioni, consulta la nostra [pagina sui numeri di cellulare virtuali ](https://www.ovhtelecom.fr/sms/reponse/numeros-virtuels.xml).

> [!primary]
>
>Se disponi già di un account SMS, non è possibile creare un nuovo numero virtuale per questo account. Sarà infatti necessario ordinare un nuovo account SMS dalla pagina Web del numero di cellulare virtuale.
>

#### Mittente alfanumerico

È possibile personalizzare il mittente. Pertanto non è più possibile ricevere una risposta da parte del destinatario del tuo SMS. Per accedere alla gestione dei mittenti SMS, seleziona la scheda `Mittenti`{.action}(1) dell’account SMS interessato.

![envoi sms manager](images/sms-send-control-panel04E.png){.thumbnail}

Per aggiungere un ulteriore mittente SMS, clicca sul pulsante `Azioni`{.action} al centro e seleziona `Aggiungi`{.action} (2).

![envoi sms manager](images/sms-send-control-panel05E.png){.thumbnail}

Nella nuova pagina, sono disponibili diverse opzioni per configurare un nuovo mittente SMS (3): 

- **Aggiungi manualmente i mittenti**: È necessario inserire il mittente, la descrizione e il motivo per cui si utilizza questo determinato mittente. 

> [!primary]
>
>Se ricevi una richiesta da parte di un mittente a nome di una società terza, ti verrà richiesto un documento giustificativo. In questo caso ti consigliamo di inviarci questo documento aprendo una richiesta di assistenza nel tuo Spazio Cliente.  La convalida dei mittenti creati manualmente è gratuita ed è effettuata entro uno o due giorni lavorativi, dal lunedì al venerdì, dalle 8:00 alle 20:00.
>

- **Aggiungi mittenti a partire dai dati personali**: È possibile richiedere un mittente, basandosi sulle credenziali del tuo account OVHcloud. A questo punto, visualizzi un menu a tendina con la lista dei destinatari disponibili.

- **Aggiungi mittenti a partire dai tuoi domini OVHcloud** : È possibile utilizzare un dominio disponibile nel tuo account OVHcloud in qualità di mittente. A questo punto, visualizzi un menu a tendina con la lista dei destinatari disponibili.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
