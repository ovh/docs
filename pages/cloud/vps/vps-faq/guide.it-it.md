---
title: FAQ VPS OVHcloud
slug: vps-faq
section: 'Per iniziare'
order: 1
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## FAQ VPS

### Cos'è un VPS e a cosa serve?

Un VPS è un server virtuale (Virtual Private Server) su cui è possibile caricare siti (vetrina, e-commerce, contenuti, media...) e applicazioni software (portali, extranet, soluzioni collaborative, wiki, CRM...). Diversamente dall'hosting condiviso, permette di isolare i dati in una macchina virtuale dedicata al cliente. 

I VPS costituiscono il compromesso perfetto tra hosting Web e server fisici: combinano l'affidabilità e le performance di un ambiente dedicato e al tempo stesso permettono di liberarsi dal pensiero della gestione hardware.

### Come scegliere tra VPS e hosting Web?

Il VPS rappresenta un’evoluzione logica alle soluzioni di hosting Web. Garantisce maggiori possibilità e libertà d’azione relativamente a configurazione, accesso e funzionalità (root, Apache, file PHP.init). Permette inoltre di installare certificati SSL e qualsiasi altro tipo di software.

È però fondamentale scegliere il VPS con la massima attenzione, optando per la configurazione più adatta alle esigenze delle applicazioni utilizzate e modificandola in base alla crescita del proprio progetto.

### Cosa scegliere tra un VPS e un hosting Web Plesk?

Gli hosting Web Plesk mettono a disposizione uno spazio con Plesk preinstallato. Scegliendo questa soluzione l’utente è in grado di gestire i siti Internet ma non è amministratore del servizio. Questa soluzione può quindi essere utilizzata solo per eseguire operazioni di gestione.
Scegliendo un VPS, sarai l'amministratore del tuo server e OVHcloud non avrà accesso al suo contenuto. e l’utente è libero di utilizzarla in base alle proprie esigenze.

### Quali sono i vantaggi di un VPS rispetto a un server dedicato?

I VPS offrono il vantaggio di liberare l’utente da pensieri legati alla gestione hardware (ad esempio monitoraggio dello stato di dischi, RAM e CPU) e sono adatti alla maggior parte degli utilizzi Web, per progetti di dimensioni contenute.
I server dedicati sono consigliati per gestire in autonomia l’aspetto hardware, costruire architetture elaborate, creare infrastrutture con rete privata (vRack) integrata, implementare soluzioni complesse diverse dai servizi Web.

In generale, si può affermare che gli utenti con un’attività Web in crescita si evolvono verso server dedicati o soluzioni Public Cloud: questi servizi offrono infrastrutture più complesse e flessibili, adeguate a una forte crescita.

### Quali sono le differenze tra le soluzioni VPS e Public Cloud?

Il VPS è una soluzione adatta ad ambienti di preproduzione e produzione che richiedono prestazioni costanti. 
Il Public Cloud di OVHcloud propone invece un'infrastruttura multiserver con macchine high availability. e con rete privata vRack disponibile.

### Come scegliere il proprio VPS OVHcloud?

Per scegliere un VPS adatto alle proprie esigenze, ti consigliamo di verificare:

- la quantità di risorse necessarie (processore, memoria, spazio disco, banda passante...)
- il sistema operativo richiesto (Linux o Windows)
- i prerequisiti tecnici essenziali per il corretto funzionamento dell'applicazione (ad esempio, un database richiede velocità in lettura/scrittura).

Per effettuare questa operazione, scegli tra le nostre soluzioni VPS:

- **VPS Starter**: macchine entry level per testare la nostra offerta (esclusivamente con distribuzione Linux, senza pannello di gestione Web)
- **VPS Value, Essential e Comfort**: ideali per l'hosting di siti Web, servizi di e-commerce o sistemi di monitoring
- **VPS Elite**: adattato a siti e-commerce e applicazioni che richiedono molte risorse CPU e memoria.


### Chi può utilizzare un VPS?

L’utilizzo di un VPS richiede competenze di base in amministrazione di server. Queste nozioni sono essenziali per gestire il sistema operativo (Linux o Windows) installato sulla macchina e configurare le applicazioni. Come fare per utilizzare un VPS senza possedere le competenze necessarie? È possibile contattare uno dei nostri partner. 

Per usufruire di risorse garantite anche senza conoscenze specifiche nell'amministrazione di server, ti consigliamo di optare per i nostri [hosting Web Performance](https://www.ovhcloud.com/it/web-hosting/performance-offer/).

### Come connettermi al tuo VPS?

La connessione al tuo VPS dovrà avvenire in SSH grazie all'indirizzo IP, nome utente e password forniti via email al ricevimento dell'ordine.
Da una postazione Windows ti consigliamo di connetterti con il software Putty. La connessione potrà essere effettuata direttamente sul terminale da una postazione Linux.

Per maggiori informazioni, consulta la guida Iniziare [a utilizzare un VPS](../iniziare-a-utilizzare-vps/).

### È possibile ospitare più siti Internet su un VPS?

Sì, un VPS può essere suddiviso in partizioni e organizzato in base a necessità specifiche. Può essere utilizzato per ospitare più siti o progetti, assegnando a ciascuno uno spazio privato di dimensioni definite. Per semplificare queste operazioni è possibile installare un’interfaccia di gestione di siti Web, come Plesk o cPanel.

### Viene eseguito regolarmente un backup del VPS?

OVHcloud non effettua nessuna copia dei dati ospitati sui VPS. L’operazione deve quindi essere eseguita dall’utente,
scegliendo tra le opzioni di backup manuale (Snapshot) o automatico.

### Come proteggere un VPS?

Il VPS è fornito di default come "nudo", senza alcuna configurazione di sicurezza. E' la prima cosa che devi fare al ricevimento
Per effettuare questa operazione, consulta la guida ["Mettere in sicurezza un VPS"](../consigli-sicurezza-vps/).

### Qual è la banda passante assegnata al tuo VPS? È garantita?

La banda passante indicata nel nostro sito Web è garantita e si riferisce alla velocità di trasmissione minima assegnata.

### Qual è lo SLA applicato sul tuo VPS?

Su tutte le gamme VPS, OVHcloud propone uno SLA del 99,9%.

### Come accedere al backup storage da un indirizzo IP diverso dal mio servizio? <a name="backupstorage"></a>

L'accesso al backup FTP può essere limitato al servizio associato tramite lo Spazio Cliente OVHcloud.

Per poter aggiungere altri indirizzi IP di diversi servizi, utilizza l'API OVHcloud.
per recuperare i backup da un servizio di un'altra localizzazione.

> [!warning]
> Possono essere autorizzati solo gli indirizzi IP OVHcloud.
>

Accedi alla pagina [https://api.ovh.com/](https://api.ovh.com/) e utilizza questa chiamata:

> [!api]
>
> @api {POST} vps/{serviceName}/backupftp/access
>

Inserisci i campi in questo modo:

- `serviceName `: il nome del tuo VPS
- `cifs `: barrare se necessario
- `ftp`: barrare se necessario
- `ipBlock`: inserisci l'IP che avrà accesso nella forma `1.2.3.4/32`
- `nfs`: barrare se necessario

![post api](images/post-api.png){.thumbnail}

Per verificare che il tuo indirizzo IP sia autorizzato, utilizza questa chiamata:

> [!api]
>
> @api {GET} /vps/{serviceName}/backupftp/access
>

![get api](images/get-api.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
