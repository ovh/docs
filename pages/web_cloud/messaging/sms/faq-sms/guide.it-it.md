---
title: "FAQ SMS OVHcloud"
excerpt: "Trova le risposte alle domande più frequenti sul servizio SMS OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Trova qui le domande più frequenti sul servizio SMS OVHcloud.

## FAQ

### Account e crediti

/// details | Come creare un account SMS OVHcloud?

Per creare un account SMS OVHcloud, accedi alla [pagina dedicata alle offerte SMS OVHcloud](/links/telecom/sms) e scegli il pacchetto di crediti più adatto alle tue esigenze. L'ordine creerà automaticamente un account SMS accessibile dal tuo [Spazio Cliente OVHcloud](/links/manager), nella [sezione SMS](/links/control-panel/telecom-sms). Ogni account SMS è identificato da un nome univoco (ad esempio: `sms-xx12345-1`). È possibile avere più account SMS sullo stesso identificativo cliente OVHcloud, il che permette di separare gli utilizzi (transazionale, marketing, notifiche interne) e i budget.

///

/// details | Come funziona il sistema di crediti SMS?

Il servizio SMS OVHcloud funziona con un sistema di crediti prepagati. Un credito corrisponde a un SMS standard di 160 caratteri (codifica GSM 7-bit) verso un numero francese. Il costo in crediti varia in base a:

- **Destinazione:** un SMS verso la Francia metropolitana consuma 1 credito. Le destinazioni internazionali consumano più crediti (consulta la [griglia tariffaria OVHcloud](/links/telecom/sms-prices)).
- **Lunghezza del messaggio:** un SMS che supera i 160 caratteri viene automaticamente suddiviso in più SMS concatenati. Un messaggio di 300 caratteri consuma 2 crediti.
- **Codifica:** se il messaggio contiene caratteri speciali o accenti non supportati dalla codifica GSM 7-bit, viene utilizzata la codifica Unicode (UCS-2), limitando ogni SMS a 70 caratteri.

Il saldo dei crediti è consultabile in tempo reale dallo Spazio Cliente OVHcloud o tramite l'API.

Per maggiori dettagli, consulta la guida "[Gestire i crediti SMS e attivare la ricarica automatica](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | Come attivare la ricarica automatica dei crediti SMS?

La ricarica automatica consente di ricaricare automaticamente il tuo account SMS quando il saldo scende al di sotto di una soglia definita. [Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi vai su `Opzioni`{.action} > `Ricarica automatica`{.action}. Configura la soglia di attivazione e l'importo della ricarica. È necessario che un metodo di pagamento valido sia registrato sul tuo account. Questa opzione è indispensabile per l'invio di SMS transazionali, dove un'interruzione dei crediti bloccherebbe le notifiche critiche.

Per maggiori dettagli, consulta la guida "[Gestire i crediti SMS e attivare la ricarica automatica](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | Come consultare lo storico degli SMS inviati e ricevuti?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi la scheda `Messaggio e campagna`{.action} > `Gestisci gli SMS`{.action} > `Storico invii`{.action} o `SMS ricevuti`{.action}. Puoi filtrare lo storico per data, mittente, destinatario o messaggio. Lo storico viene conservato per 6 mesi e può essere esportato in formato CSV per analisi.

Per maggiori dettagli, consulta la guida "[Gestire lo storico degli SMS](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms)".

///

/// details | Come configurare gli avvisi di soglia dei crediti SMS?

Per gli **utenti API**, [accedi alla sezione SMS](/links/control-panel/telecom-sms), seleziona il tuo account, poi `Utenti API`{.action}. Clicca su `...`{.action} > `Limite`{.action} per l'utente interessato e configura:

- **Soglia di avviso:** il numero di crediti residui al di sotto del quale viene inviata la notifica.
- **Tipo di notifica:** e-mail, SMS o entrambi.

Per l'**account globale**, la ricarica automatica offre un'alternativa: ricarica automaticamente l'account quando il saldo scende al di sotto di una soglia. I due meccanismi sono complementari.

Per maggiori dettagli, consulta la guida "[Tutto sugli utenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

### Invio di SMS

/// details | Come inviare un SMS dallo Spazio Cliente OVHcloud?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi clicca su `Invia un SMS`{.action}. Compila i seguenti campi:

- **Mittente:** numero breve (che permette la risposta, solo Francia), mittente alfanumerico personalizzato o numero mobile virtuale.
- **Destinatario/i:** inserisci uno o più numeri in formato internazionale (ad esempio: `+33612345678`) o seleziona una rubrica/lista dei destinatari.
- **Messaggio:** scrivi il testo (un contatore indica il numero di caratteri e di SMS consumati).

È possibile pianificare l'invio in una data/ora successiva. Un'anteprima del costo in crediti viene mostrata prima dell'invio.

Per maggiori dettagli, consulta la guida "[Inviare SMS dallo Spazio Cliente OVHcloud](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client)".

///

/// details | Come inviare SMS tramite URL (http2sms)?

La funzione http2sms permette di inviare un SMS tramite una semplice chiamata HTTP GET o POST, senza SDK né autenticazione OAuth. È ideale per integrazioni semplici da uno script, un sistema automatico o un software gestionale. L'URL di chiamata è nel formato:

`https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=sms-xx12345-1&login=utente&password=password&from=mittente&to=+33612345678&message=Il+tuo+messaggio`

I parametri obbligatori sono: `account` (nome dell'account SMS), `login` e `password` (credenziali dell'utente API), `from` (mittente), `to` (destinatario in formato internazionale), `message` (contenuto dell'SMS). Per proteggere l'accesso, configura le restrizioni per IP sull'utente API utilizzato. Si raccomanda il metodo POST con HTTPS.

Per maggiori dettagli, consulta la guida "[Inviare SMS tramite URL - http2sms](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_url_-_http2sms)".

///

/// details | Come inviare SMS da un indirizzo e-mail?

OVHcloud consente l'invio di SMS dal proprio indirizzo e-mail, indipendentemente dal mittente. Invia un'e-mail all'indirizzo `numero_destinatario@email2sms.ovh.net` (ad esempio: `0033612345678@email2sms.ovh.net`). Il corpo dell'e-mail costituisce il contenuto dell'SMS. L'oggetto dell'e-mail deve contenere le credenziali nel formato: `account:login:password`. Questo metodo è particolarmente utile per avvisi automatizzati da sistemi che supportano solo l'invio di e-mail (server di monitoraggio, applicazioni gestionali).

Per maggiori dettagli, consulta la guida "[Inviare SMS da un indirizzo e-mail](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_adresse_email)".

///

/// details | Come inviare SMS massivi in modo efficiente tramite l'API?

Per inviare SMS massivi tramite l'API OVHcloud in modo ottimale:

- **Utilizza l'invio in blocco:** l'endpoint `POST /sms/{serviceName}/jobs` accetta un array di destinatari. Invia i tuoi SMS in blocchi (ad esempio: 500 destinatari per chiamata API) anziché una chiamata API per SMS.
- **Gestisci errori e retry:** implementa una logica di retry con backoff esponenziale per gli errori temporanei (HTTP 429 Too Many Requests, HTTP 500).
- **Utilizza i callback DLR:** configura un URL di callback sul tuo utente API anziché interrogare l'API per ogni stato.
- **Pianifica gli invii:** l'API supporta l'invio differito (`differedPeriod`).
- **Per volumi molto elevati:** utilizza il protocollo SMPP.

Monitora il consumo dei crediti durante gli invii massivi e assicurati che la ricarica automatica sia attivata.

///

/// details | Come creare la mia prima campagna SMS?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi clicca su `Invia un SMS`{.action}. I passaggi sono:

1. **Scegliere il mittente:** seleziona un numero breve, un mittente alfanumerico o un VLN.
2. **Definire i destinatari:** aggiungili manualmente, importa una lista CSV o seleziona una rubrica esistente.
3. **Scrivere il messaggio:** componi il testo. Puoi utilizzare variabili di personalizzazione se hai importato una lista con colonne aggiuntive (nome, cognome, ecc.).
4. **Pianificare l'invio:** scegli un invio immediato o pianificato a una data/ora precisa.
5. **Confermare e inviare:** verifica il riepilogo (numero di destinatari, costo in crediti) e conferma.

Il monitoraggio della campagna è disponibile in `Messaggio e campagna`{.action} > `Gestisci le campagne`{.action} > `Statistiche e storico`{.action}.

Per maggiori dettagli, consulta la guida "[La mia prima campagna SMS](/pages/web_cloud/messaging/sms/ma_premiere_campagne_sms)".

///

/// details | Come gestire le liste dei destinatari SMS?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi vai su `Contatti`{.action} > `Crea una lista di contatti`{.action}. Puoi:

- **Creare una lista** importando un file CSV contenente una colonna `number` con i numeri in formato internazionale.
- **Pulire una lista** tramite deduplicazione e verifica sintattica.
- **Eliminare** una lista obsoleta.

Per maggiori dettagli, consulta la guida "[Liste dei destinatari SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms)".

///

/// details | Come gestire le rubriche SMS?

Le rubriche SMS offrono una gestione dei contatti più completa (nome, cognome, numero). [Accedi alla sezione SMS](/links/control-panel/telecom-sms), seleziona il tuo account SMS, poi vai su `Contatti`{.action} > `Rubrica`{.action}. Puoi:

- Creare una nuova rubrica e aggiungere contatti manualmente.
- Importare un file CSV con le colonne: cognome, nome, numero (formato internazionale).
- Modificare o eliminare singoli contatti.
- Utilizzare una rubrica come lista dei destinatari per l'invio di SMS.

La rubrica è ideale per invii ricorrenti a un gruppo stabile di contatti. Per invii occasionali a liste variabili, le liste dei destinatari sono più adatte.

Per maggiori dettagli, consulta la guida "[Gestire le rubriche SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms)".

///

/// details | Qual è la differenza tra un SMS standard (160 caratteri) e un SMS lungo?

Un SMS standard che utilizza la codifica GSM 7-bit può contenere fino a **160 caratteri**. Se il messaggio supera questo limite, viene suddiviso in più SMS concatenati (SMS lunghi) che vengono riassemblati sul telefono del destinatario. I limiti sono:

- **1 SMS:** fino a 160 caratteri.
- **2 SMS:** da 161 a 306 caratteri (153 caratteri utili per segmento, con i 7 byte restanti utilizzati per l'intestazione di concatenazione).
- **3 SMS:** da 307 a 459 caratteri.
- E così via, fino a un massimo di 6 SMS concatenati (918 caratteri).

Se il messaggio utilizza la codifica **Unicode (UCS-2)** (necessaria per emoji, alfabeti non latini), ogni SMS è limitato a **70 caratteri** (67 per segmento in modalità concatenata). Ogni segmento consuma 1 credito SMS.

///

/// details | Quali caratteri speciali causano il passaggio di un SMS alla codifica Unicode?

La codifica GSM 7-bit (standard) supporta un set di caratteri limitato. I seguenti caratteri provocano il passaggio alla codifica Unicode (UCS-2), riducendo la capacità dell'SMS da 160 a 70 caratteri:

- Tutti gli **emoji** (senza eccezione).
- I **caratteri accentati non GSM:** alcuni accenti sono supportati (é, è, ê, ù, à, ecc.) ma altri no (ő, ű, ā, ecc.).
- I caratteri degli **alfabeti non latini:** cirillico, arabo, cinese, giapponese, coreano, ecc.
- Alcuni **simboli tipografici:** virgolette tipografiche " ", trattino lungo —, ecc.

L'interfaccia dello Spazio Cliente OVHcloud mostra automaticamente il numero di caratteri rimanenti e il numero di SMS che verranno consumati.

///

/// details | Qual è il tempo di consegna di un SMS inviato tramite OVHcloud?

In condizioni normali, un SMS viene consegnato in pochi secondi (generalmente **meno di 10 secondi** verso gli operatori francesi). Questo tempo può variare in base a:

- **Destinazione:** gli SMS internazionali possono avere tempi più lunghi (fino a 30-60 secondi).
- **Carico della rete:** nei periodi di alto traffico (capodanno, eventi nazionali), gli operatori mobile possono introdurre ritardi aggiuntivi.
- **Stato del telefono del destinatario:** se il telefono è spento o fuori copertura, l'SMS viene memorizzato dall'operatore e consegnato non appena il telefono è nuovamente raggiungibile (durata di memorizzazione: da 48 a 72 ore a seconda dell'operatore).
- **Invii massivi:** le campagne di diverse migliaia di SMS vengono inviate progressivamente per rispettare i limiti di throughput degli operatori.

Le conferme di ricezione (DLR) consentono di verificare l'effettiva consegna al destinatario.

///

/// details | I miei SMS non vengono consegnati, come diagnosticare il problema?

Effettua le seguenti verifiche:

1. **Verifica il saldo dei crediti:** un saldo a zero blocca immediatamente tutti gli invii.
2. **Consulta lo storico degli invii:** in `Messaggio e campagna`{.action} > `Gestisci gli SMS`{.action} > `Storico invii`{.action}, verifica lo stato di ogni SMS. Un codice PTT indica il motivo dell'errore.
3. **Verifica il formato dei numeri:** tutti i numeri devono essere in formato internazionale (`+33...`). Un formato locale (`06...`) causerà un errore.
4. **Verifica il mittente:** un mittente alfanumerico in attesa di validazione non consentirà l'invio.
5. **Verifica la blacklist:** se il destinatario ha risposto STOP, il suo numero è in blacklist.
6. **Verifica la quota dell'utente API:** se invii tramite API, verifica che la quota non sia esaurita.
7. **Verifica il contenuto:** gli SMS contenenti URL inviati tramite un numero breve vengono bloccati.

///

### Mittenti e risposte

/// details | Quali tipi di mittenti SMS posso utilizzare?

OVHcloud offre tre tipi di mittenti:

- **Numero breve che consente la risposta:** mittente predefinito, numero breve a 5 cifre assegnato in modo casuale. Il destinatario può rispondere all'SMS. Nota: non è possibile inviare un SMS contenente un URL tramite un numero breve.

> [!primary]
>
> Il numero breve che consente la risposta è disponibile solo per gli account OVHcloud in Francia, esclusi i dipartimenti e territori francesi d'oltremare.

- **Mittente alfanumerico:** nome personalizzato visualizzato come mittente (ad esempio: "LaMiaAzienda"). Massimo 11 caratteri. Il destinatario non può rispondere. La creazione richiede un documento giustificativo ed è validata entro 72 ore in media.
- **Numero mobile virtuale (VLN):** numero mobile francese nel formato 06/07 assegnato al tuo account SMS. Consente la risposta e conferisce l'aspetto di un numero mobile classico.

Per maggiori dettagli, consulta la guida "[Tutto sui mittenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Come aggiungere un mittente alfanumerico personalizzato?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi clicca sulla scheda `Mittenti`{.action}. Clicca su `Azioni`{.action} > `Aggiungi`{.action} e scegli "Aggiungere mittenti manualmente". Compila i seguenti campi:

- **Mittente desiderato:** massimo 11 caratteri alfanumerici (lettere e cifre, senza caratteri speciali).
- **Una descrizione** per uso interno.
- **Una giustificazione:** spiega il legame tra la tua identità e il mittente richiesto.
- **Un documento giustificativo:** carta intestata dell'azienda, estratto della registrazione commerciale o qualsiasi documento che attesti il diritto all'utilizzo di questo nome.

La validazione viene effettuata dai team OVHcloud, generalmente entro 72 ore. Puoi anche creare un mittente a partire dai tuoi dati personali OVHcloud o dai tuoi domini OVHcloud, senza documentazione aggiuntiva.

Per maggiori dettagli, consulta la guida "[Tutto sui mittenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Perché non posso inviare un SMS contenente un URL con un numero breve?

Per combattere lo spam e il phishing, OVHcloud blocca gli SMS contenenti URL (link http/https) quando il mittente è un numero breve che consente la risposta. Se devi includere un URL nei tuoi SMS, utilizza un **mittente alfanumerico** validato. Poiché il tuo mittente personalizzato è stato sottoposto a verifica dell'identità, l'invio di SMS contenenti URL è autorizzato con questo tipo di mittente.

Per maggiori dettagli, consulta la guida "[Tutto sui mittenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Cos'è un numero mobile virtuale (VLN) e come ottenerlo?

Un numero mobile virtuale (VLN — Virtual Long Number) è un numero mobile francese nel formato 06 o 07, assegnato al tuo account SMS OVHcloud. Offre diversi vantaggi:

- Il destinatario vede un numero mobile classico come mittente, ispirando maggiore fiducia.
- Il destinatario può **rispondere** all'SMS e le risposte sono consultabili nello Spazio Cliente OVHcloud o recuperabili tramite l'API.
- Può essere utilizzato per invii contenenti URL.

Il VLN richiede un'offerta SMS specifica che includa un numero mobile virtuale. Non può essere aggiunto a un account SMS esistente: è necessario ordinare un nuovo account SMS tramite la [pagina dedicata al numero mobile virtuale](/links/telecom/sms-vln). Il VLN viene assegnato per una durata legata all'abbonamento e non è portabile verso un altro operatore.

///

/// details | Come funziona il servizio SMS con risposta?

Il servizio SMS con risposta consente di inviare un SMS a cui il destinatario può rispondere. Il funzionamento è il seguente:

1. Invii un SMS utilizzando il "Numero breve che consente la risposta" come mittente.
2. Il destinatario riceve l'SMS con un numero breve a 5 cifre come mittente.
3. Il destinatario può rispondere a questo numero breve entro **48 ore**.
4. La risposta è consultabile nel tuo Spazio Cliente OVHcloud (`Messaggio e campagna`{.action} > `Gestisci gli SMS`{.action} > `SMS ricevuti`{.action}).
5. Facoltativamente, puoi configurare una **risposta automatica** (testo predefinito) o uno **script CGI** chiamato per ogni risposta ricevuta.

Questo servizio è disponibile solo per gli account OVHcloud in Francia (esclusi i dipartimenti e territori d'oltremare) e le risposte sono possibili solo dagli operatori mobile francesi. Ogni risposta ricevuta e ogni risposta automatica inviata consuma crediti SMS.

///

/// details | Come configurare una risposta automatica agli SMS ricevuti?

[Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi vai su `Opzioni`{.action} > `Opzioni di risposta`{.action}. Nella sezione "Azione alla ricezione", scegli "Rispondi con un testo predefinito" o "Chiama un CGI" (URL di uno script web che verrà chiamato per ogni risposta ricevuta, consentendo un'elaborazione dinamica). Puoi anche configurare le notifiche alla ricezione (tramite e-mail o SMS).

///

/// details | Come gestire le richieste di disiscrizione (STOP)?

Quando un destinatario risponde "STOP" a uno dei tuoi SMS, il suo numero viene automaticamente aggiunto a una blacklist da OVHcloud. Gli SMS futuri inviati a questo numero dal tuo account verranno bloccati. Puoi consultare e gestire questa blacklist dal tuo [Spazio Cliente OVHcloud](/links/manager), scheda `Opzioni`{.action} > `Gestisci i destinatari inseriti nella blacklist`{.action}. Puoi:

- Consultare i numeri che hanno inviato uno STOP.
- Verificare se un numero specifico è nella blacklist prima di un invio.

> [!warning]
>
> La rimozione di un numero dalla blacklist senza il nuovo consenso del destinatario è contraria al GDPR e alle regole anti-spam.

La gestione dello STOP è obbligatoria per gli SMS marketing. Per gli SMS transazionali, il meccanismo STOP non è applicabile.

///

### Integrazione tecnica

/// details | Come creare e gestire utenti API per gli SMS?

Gli utenti API SMS consentono di delegare l'invio di SMS tramite l'API o la funzione http2sms senza esporre le credenziali del proprio account OVHcloud. [Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account SMS, poi clicca su `Utenti API`{.action}. Aggiungi un nuovo utente definendo un identificativo e una password. A ogni utente possono essere assegnati:

- Una **quota di crediti** dedotta dal saldo globale dell'account.
- Un **avviso di soglia** che invia una notifica quando il saldo dell'utente scende al di sotto di una soglia definita.
- **Restrizioni per IP** (fino a 5 IP) per proteggere l'accesso alla funzione http2sms.
- Un **URL di callback** per ricevere le conferme di ricezione (DLR) su un endpoint personalizzato.

Per maggiori dettagli, consulta la guida "[Tutto sugli utenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | Come inviare un SMS tramite l'API OVHcloud in PHP?

L'API OVHcloud consente di inviare SMS in modo programmatico. In PHP, utilizza l'SDK ufficiale OVHcloud:

1. **Crea le chiavi API** dalla [pagina di creazione dei token API di OVHcloud](https://auth.eu.ovhcloud.com/api/createToken) autorizzando gli endpoint `/sms/*`.
2. **Installa l'SDK** tramite Composer: `composer require ovh/ovh`.
3. **Invia un SMS** con l'endpoint `POST /sms/{serviceName}/jobs` specificando: il messaggio, i destinatari (array di numeri in formato internazionale), il mittente e le opzioni.

L'API restituisce un identificativo di job per monitorare lo stato dell'invio. Sono disponibili anche librerie in Python, Node.js, Java e C#. La documentazione completa dell'API SMS è disponibile sulla [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms).

Per maggiori dettagli, consulta la guida "[Inviare SMS con l'API OVHcloud in PHP](/pages/web_cloud/messaging/sms/envoyer_des_sms_avec_lapi_ovh_en_php)".

///

/// details | Quali sono gli endpoint API disponibili per il servizio SMS OVHcloud?

L'API OVHcloud espone numerosi endpoint per gestire il tuo servizio SMS in modo programmatico. I principali sono:

- `GET /sms`: elenco dei tuoi account SMS.
- `GET /sms/{serviceName}`: dettagli di un account SMS (crediti residui, opzioni).
- `POST /sms/{serviceName}/jobs`: invio di un SMS.
- `GET /sms/{serviceName}/jobs`: elenco degli invii.
- `GET /sms/{serviceName}/outgoing`: storico degli SMS in uscita.
- `GET /sms/{serviceName}/incoming`: storico degli SMS in entrata.
- `GET /sms/{serviceName}/users`: elenco degli utenti API.
- `GET /sms/{serviceName}/senders`: elenco dei mittenti.
- `GET /sms/{serviceName}/phonebooks`: elenco delle rubriche.
- `GET /sms/ptts`: ottenere la descrizione di un codice PTT (stato di consegna).

La documentazione interattiva completa è disponibile sulla [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms). L'autenticazione avviene tramite chiavi API (Application Key, Application Secret, Consumer Key).

///

/// details | Come ricevere le conferme di ricezione (DLR) dei miei SMS tramite callback?

Le conferme di ricezione (Delivery Reports / DLR) confermano la corretta consegna di un SMS. Per riceverle automaticamente, configura un URL di callback sul tuo utente API. [Accedi alla sezione SMS](/links/control-panel/telecom-sms), poi `Utenti API`{.action}, clicca su `...`{.action} > `Callback`{.action} per l'utente interessato. Inserisci l'URL del tuo endpoint web. A ogni aggiornamento di stato, OVHcloud chiamerà questo URL con i seguenti parametri:

- `id`: identificativo dell'SMS.
- `ptt`: codice di stato della consegna (ad esempio: 1 = in corso, 4 = consegnato, 5 = non riuscito).
- `date`: data del DLR.
- `description`: identificativo descrittivo del DLR.

Il tuo endpoint deve rispondere con HTTP 200 per confermare la corretta ricezione del callback.

Per maggiori dettagli, consulta la guida "[Tutto sugli utenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | Come utilizzare il protocollo SMPP con OVHcloud?

Il protocollo SMPP (Short Message Peer-to-Peer) è un protocollo industriale per l'invio e la ricezione di SMS in volume. [Accedi alla sezione SMS](/links/control-panel/telecom-sms) del tuo Spazio Cliente OVHcloud, seleziona il tuo account, poi vai su `Opzioni`{.action} > `Impostazioni SMPP`{.action}. Otterrai i parametri di connessione: indirizzo del server SMPP, porta, system_id e password. Il protocollo SMPP offre una connessione persistente, un throughput di invio più elevato e un supporto nativo dei DLR in modalità push.

Per maggiori dettagli, consulta la guida "[Gestione di un account SMS SMPP](/pages/web_cloud/messaging/sms/smpp-control-panel)".

///

/// details | Quali sono le specifiche tecniche del servizio SMPP OVHcloud?

Il servizio SMPP OVHcloud è conforme alla specifica SMPP v3.4. Le principali caratteristiche tecniche sono:

- **Modalità di connessione:** Transceiver (invio e ricezione sulla stessa sessione) o Transmitter/Receiver separati.
- **Porta di connessione:** comunicata all'attivazione del servizio SMPP.
- **Crittografia:** TLS supportato e raccomandato.
- **Enquire Link:** intervallo raccomandato di 30 secondi per mantenere la sessione attiva.
- **Finestra di invio (window size):** configurabile, generalmente tra 1 e 10 a seconda del throughput desiderato.
- **Codifica supportata:** GSM 7-bit (data_coding=0) e UCS-2 (data_coding=8).
- **Lunghezza massima:** 160 caratteri in GSM 7-bit, 70 in UCS-2, con supporto della concatenazione tramite UDH.
- **DLR:** conferme di ricezione trasmesse in modalità push sulla stessa sessione SMPP.

La connessione SMPP è limitata a un numero di sessioni simultanee definito nel contratto.

Per maggiori dettagli, consulta la guida "[Specifiche tecniche del SMPP](/pages/web_cloud/messaging/sms/smpp-specification)".

///

/// details | Come integrare l'invio di SMS OVHcloud nella mia applicazione gestionale o CRM?

L'integrazione SMS OVHcloud può essere effettuata in diversi modi:

- **http2sms (il più semplice):** una semplice chiamata HTTP GET/POST attiva l'invio di un SMS. Ideale per script di base, sistemi automatici industriali o software gestionali che supportano solo chiamate HTTP.
- **API REST OVHcloud:** integrazione completa con autenticazione sicura (OAuth), gestione dei contatti, storico, statistiche. Sono disponibili SDK in PHP, Python, Node.js, Java e C#.
- **SMPP:** connessione persistente ad alto throughput per le piattaforme di messaggistica.
- **Email2SMS:** invio tramite e-mail, utile per i sistemi che supportano solo l'invio di e-mail (avvisi di monitoraggio, ERP).

Per i CRM più diffusi (Salesforce, HubSpot, ecc.), sono disponibili connettori di terze parti che utilizzano l'API OVHcloud sui rispettivi marketplace.

///

/// details | Quali sono i limiti di throughput per l'invio di SMS?

OVHcloud applica limiti di throughput per garantire la qualità del servizio:

- **Tramite lo Spazio Cliente OVHcloud:** nessun limite esplicito, ma le campagne di grandi dimensioni vengono distribuite nel tempo dalla piattaforma.
- **Tramite l'API REST:** il throughput dipende dal volume del tuo account e dalla cronologia di utilizzo.
- **Tramite http2sms:** limitato al numero di richieste HTTP al secondo accettate dall'infrastruttura (tipicamente alcune decine al secondo).
- **Tramite SMPP:** il throughput è definito contrattualmente e può raggiungere diverse centinaia di SMS al secondo.

Se prevedi campagne di grandi dimensioni (più di 100.000 SMS), contatta il supporto OVHcloud per pianificare l'invio.

///

/// details | Posso inviare SMS contenenti variabili personalizzate?

Sì, OVHcloud supporta la personalizzazione degli SMS con variabili dinamiche. Dallo Spazio Cliente, quando importi una lista di destinatari in formato CSV, puoi includere colonne aggiuntive (ad esempio: `nome`, `cognome`, `data_appuntamento`). Nel corpo dell'SMS, utilizza le variabili nella forma `{nome}`, `{cognome}`, `{data_appuntamento}`, ecc. Ogni SMS verrà automaticamente personalizzato con i dati del contatto corrispondente. Tramite l'API, puoi utilizzare il parametro `message` con dei placeholder e fornire i dati di personalizzazione nel payload di invio.

///

### Conformità e recapitabilità

/// details | Quali sono gli obblighi legali per l'invio di SMS marketing in Francia?

L'invio di SMS marketing in Francia è regolato dal GDPR e dal Codice delle poste e delle comunicazioni elettroniche. Gli obblighi principali sono:

- **Consenso preventivo (opt-in):** il destinatario deve aver esplicitamente acconsentito a ricevere SMS commerciali.
- **Diritto alla disiscrizione (opt-out):** ogni SMS marketing deve contenere una menzione che consenta al destinatario di disiscriversi (ad esempio: "STOP al 36xxx" o "Rispondi STOP").
- **Orari di invio:** gli SMS commerciali non devono essere inviati tra le **20:00 e le 8:00** nei giorni feriali, né la **domenica e i giorni festivi**.
- **Identificazione del mittente:** l'identità dell'inserzionista deve essere riconoscibile.
- **Registro dei consensi:** devi essere in grado di dimostrare il consenso di ciascun destinatario in caso di controllo da parte della CNIL.

Il mancato rispetto di questi obblighi espone a sanzioni della CNIL e a multe fino al 4% del fatturato.

///

/// details | Qual è la differenza tra un SMS transazionale e un SMS marketing?

- **SMS transazionale:** inviato in risposta a un'azione specifica del destinatario (conferma d'ordine, codice di verifica, notifica di consegna, promemoria di appuntamento). Non richiede il consenso marketing preventivo, non è soggetto a restrizioni orarie e non necessita della menzione STOP.
- **SMS marketing:** inviato a fini di prospezione commerciale (offerte promozionali, saldi, newsletter). Richiede un consenso opt-in preventivo, deve includere una menzione di disiscrizione (STOP) ed è soggetto a restrizioni orarie.

Non mescolare i due tipi di invio sullo stesso account SMS per facilitare la gestione della conformità.

///

/// details | Come ottimizzare il tasso di recapitabilità dei miei SMS?

Il tasso di recapitabilità è la percentuale di SMS effettivamente consegnati ai destinatari. Per ottimizzarlo:

- **Pulisci le tue basi di contatti:** elimina i numeri non validi, inattivi o di rete fissa.
- **Rispetta i formati internazionali:** tutti i numeri devono essere in formato internazionale completo (ad esempio: `+33612345678`).
- **Controlla la lunghezza dei messaggi:** gli SMS brevi (1 segmento di massimo 160 caratteri) hanno un tasso di consegna migliore rispetto agli SMS lunghi concatenati.
- **Evita contenuti simili allo spam:** parole in maiuscolo, punteggiatura eccessiva, URL abbreviati sospetti.
- **Utilizza un mittente validato:** i mittenti alfanumerici verificati ispirano fiducia.
- **Rispetta gli orari:** gli SMS inviati durante l'orario lavorativo hanno un tasso di apertura migliore.
- **Monitora i DLR:** analizza i codici PTT degli SMS non riusciti per identificare le cause ricorrenti.

///

/// details | Come inviare SMS verso gli Stati Uniti?

L'invio di SMS verso gli Stati Uniti (prefisso +1) è soggetto a regole specifiche a causa della normativa anti-spam americana (TCPA / 10DLC). Con OVHcloud, l'invio verso gli Stati Uniti richiede:

- Un **mittente alfanumerico** validato o il numero breve OVHcloud (l'utilizzo di un numero mobile virtuale francese non è possibile verso gli USA).
- Il rispetto delle regole sui contenuti: l'SMS non deve contenere contenuti pubblicitari non richiesti.
- Un costo in crediti superiore a quello di un SMS nazionale (consulta la [griglia tariffaria](/links/telecom/sms-prices) per la tariffa esatta).

Il tasso di recapitabilità può variare in base agli operatori americani e ai loro filtri anti-spam.

Per maggiori dettagli, consulta la guida "[Invio di SMS verso gli Stati Uniti](/pages/web_cloud/messaging/sms/envoi_de_sms_aux_etats-unis)".

///

/// details | Quali sono le restrizioni geografiche per l'invio di SMS OVHcloud?

Il servizio SMS OVHcloud consente l'invio verso la grande maggioranza delle destinazioni internazionali. Tuttavia:

- **Destinazioni bloccate:** alcune destinazioni ad alto rischio di frode possono essere bloccate per impostazione predefinita.
- **Tariffazione variabile:** il costo in crediti varia in base alla destinazione. Le tariffe sono consultabili nel tuo Spazio Cliente OVHcloud o sulla [pagina tariffaria OVHcloud](/links/telecom/sms-prices).
- **Stati Uniti:** l'invio verso gli USA è soggetto a regole specifiche (vedi la FAQ dedicata qui sopra).
- **SMS con risposta:** la funzionalità SMS con risposta (numero breve) è disponibile solo verso la Francia metropolitana.
- **Numero mobile virtuale:** il VLN francese può essere utilizzato come mittente solo verso destinazioni francesi.

Prima di avviare una campagna internazionale, verifica la tariffazione e la disponibilità della destinazione nel tuo Spazio Cliente.

///

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).
