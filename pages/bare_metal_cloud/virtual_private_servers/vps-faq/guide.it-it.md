---
title: FAQ VPS OVHcloud
updated: 2025-08-07
---

## FAQ VPS

### Cos'è un VPS e a cosa serve?

Un VPS è un server virtuale (Virtual Private Server) su cui è possibile caricare siti (vetrina, e-commerce, contenuti, media...) e applicazioni software (portali, extranet, soluzioni collaborative, wiki, CRM...). Diversamente dall'hosting condiviso, permette di isolare i dati in una macchina virtuale dedicata al cliente. 

I VPS costituiscono il compromesso perfetto tra hosting Web e server fisici: combinano l'affidabilità e le performance di un ambiente dedicato e al tempo stesso permettono di liberarsi dal pensiero della gestione hardware.

### Come scegliere tra VPS e hosting Web?

Il VPS rappresenta un’evoluzione logica alle soluzioni di hosting Web. Garantisce maggiori possibilità e libertà d’azione relativamente a configurazione, accesso e funzionalità (root, Apache, file PHP.init). Permette inoltre di installare certificati SSL e qualsiasi altro tipo di software.

È però fondamentale scegliere il VPS con la massima attenzione, optando per la configurazione più adatta alle esigenze delle applicazioni utilizzate e modificandola in base alla crescita del proprio progetto.

### Quali sono i vantaggi di un VPS rispetto a un server dedicato?

I VPS offrono il vantaggio di liberare l’utente da pensieri legati alla gestione hardware (ad esempio monitoraggio dello stato di dischi, RAM e CPU) e sono adatti alla maggior parte degli utilizzi Web, per progetti di dimensioni contenute.  
I server dedicati sono consigliati per gestire in autonomia l’aspetto hardware, costruire architetture elaborate, creare infrastrutture con rete privata (vRack) integrata, implementare soluzioni complesse diverse dai servizi Web.

In generale, si può affermare che gli utenti con un’attività Web in crescita si evolvono verso server dedicati o soluzioni Public Cloud: questi servizi offrono infrastrutture più complesse e flessibili, adeguate a una forte crescita.

### Quali sono le differenze tra le soluzioni VPS e Public Cloud?

Il VPS è una soluzione adatta ad ambienti di preproduzione e produzione che richiedono prestazioni costanti.  
Il Public Cloud di OVHcloud propone invece un'infrastruttura multiserver con macchine high availability e con rete privata vRack disponibile.

### Come scegliere il proprio VPS OVHcloud?

Per scegliere un VPS adatto alle proprie esigenze, ti consigliamo di verificare:

- la quantità di risorse necessarie (processore, memoria, spazio disco, banda passante...).
- il sistema operativo richiesto (Linux o Windows).
- i prerequisiti tecnici essenziali per il corretto funzionamento dell'applicazione (ad esempio, un database richiede velocità in lettura/scrittura).

Per effettuare questa operazione, scegli tra le nostre soluzioni VPS:

- **VPS Starter**: macchine entry level per testare la nostra offerta (esclusivamente con distribuzione Linux).
- **VPS Value, Essential e Comfort**: ideali per l'hosting di siti Web, servizi di e-commerce o sistemi di monitoring.
- **VPS Elite**: adattato a siti e-commerce e applicazioni che richiedono molte risorse CPU e memoria.
- **VPS Limited Edition** (Quantità limitate): i VPS offrono performance potenziate, una risorsa importante per l'hosting di siti complessi, applicazioni che richiedono molte risorse o anche server di gioco. Questa offerta è valida fino a esaurimento delle scorte.

> [!primary]
> Puoi far evolvere un VPS Limited Edition verso un altro VPS della stessa gamma ma, per ragioni tecniche, non è possibile far evolvere un VPS Limited Edition verso un VPS di un'altra gamma (Starter, Value, Essential o Comfort).

### Chi può utilizzare un VPS?

L’utilizzo di un VPS richiede competenze di base in amministrazione di server. Queste nozioni sono essenziali per gestire il sistema operativo (Linux o Windows) installato sulla macchina e configurare le applicazioni. Come fare per utilizzare un VPS senza possedere le competenze necessarie? È possibile contattare uno dei nostri [partner](/links/partner). 

Per usufruire di risorse garantite anche senza conoscenze specifiche nell'amministrazione di server, ti consigliamo di optare per i nostri [hosting Web Performance](/links/web/hosting-performance-offer).

### Come connettermi al tuo VPS?

È possibile connettersi a distanza al VPS grazie alle credenziali fornite via email dopo la consegna del servizio.  
Il metodo di connessione dipende dai sistemi operativi utilizzati.

Per maggiori informazioni, consulta la guida Iniziare [a utilizzare un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).

### È possibile ospitare più siti Internet su un VPS?

Sì, un VPS può essere suddiviso in partizioni e organizzato in base a necessità specifiche. Può essere utilizzato per ospitare più siti o progetti, assegnando a ciascuno uno spazio privato di dimensioni definite. Per semplificare queste operazioni è possibile installare un’interfaccia di gestione di siti Web, come Plesk o cPanel.

### Viene eseguito regolarmente un backup del VPS?

È consigliabile adottare una strategia di backup adeguata in base alla sensibilità dei dati.  
Per maggiori informazioni sulle opzioni disponibili, consulta la nostra [pagina Web sui VPS](/links/bare-metal/vps-options).

### Come proteggere un VPS?

Il VPS è fornito di default come "nudo", senza alcuna configurazione di sicurezza. E' la prima cosa che devi fare al ricevimento.  
Per effettuare questa operazione, consulta la guida ["Mettere in sicurezza un VPS"](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps).

### Qual è la banda passante assegnata al tuo VPS? È garantita?

La banda passante indicata nel nostro sito Web è garantita e si riferisce alla velocità di trasmissione minima assegnata.

### Qual è lo SLA applicato sul tuo VPS?

Su tutte le gamme VPS, OVHcloud propone uno SLA del 99,9%.

### Come accedere al backup storage da un indirizzo IP diverso dal mio servizio? <a name="backupstorage"></a>

L'accesso al backup FTP può essere limitato al servizio associato tramite lo Spazio Cliente OVHcloud.

Per autorizzare indirizzi IP aggiuntivi da cui accedere al Backup Storage, utilizza l’API OVHcloud.  
Questo ti permetterà di recuperare i tuoi backup di dati da un servizio differente tramite diversi protocolli (FTP, NFS, CIFS).

> [!warning]
> Possono essere autorizzati solo gli indirizzi IP OVHcloud.
>

Accedi alla [console API OVHcloud](/links/api) con le credenziali del tuo account cliente e utilizza la chiamata seguente:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/backupftp/access
>

Modificare le impostazioni come indicato di seguito:

- `serviceName`: inserisci il nome interno del tuo VPS (`vps-x11x11xyy.vps.ovh.net`).
- `cifs`: se utilizzate questo protocollo, impostate questo parametro su `true`.
- `ftp`: se utilizzate questo protocollo, impostate questo parametro su `true`.
- `ipBlock`: inserisci l’indirizzo IP che vi avrà accesso, nella forma `203.0.113.100/32`.
- `nfs`: se utilizzate questo protocollo, impostate questo parametro su `true`.

Clicca sul pulsante `EXECUTE`{.action}.

Per verificare che il tuo indirizzo IP sia autorizzato, utilizza questa chiamata:

> [!api]
>
> @api {v1} /vps GET /vps/{serviceName}/backupftp/access
>

## Per saperne di più

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).