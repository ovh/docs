---
title: 'Caricare e recuperare dati su un server dedicato tramite il protocollo SFTP'
excerpt: 'Come trasferire dati da un server dedicato a un computer personale e viceversa'
updated: 2021-05-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 18/05/2021**

## Obiettivo

Durante una migrazione potresti aver bisogno di recuperare i dati da un server dedicato per salvarli su un’altra macchina. Tra le diverse procedure esistenti per effettuare questa operazione, l’utilizzo del protocollo SFTP (Secure File Transfert Protocol) consente di trasferire in modo semplice e rapido i file tramite una connessione sicura SSH.

**Questa guida ti mostra come salvare e recuperare dati su un server dedicato via SFTP.**

> [!warning]
>
Questa guida contiene informazioni relative all’utilizzo di una o più soluzioni OVHcloud con tool esterni in un contesto ben preciso: adatta le indicazioni fornite alla tua situazione e, in caso di difficoltà o dubbi, rivolgiti a un esperto del settore o alla nostra Community di utenti, disponibile all’indirizzo <https://community.ovh.com/en/>.
OVHcloud non potrà fornirti assistenza.
>

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} su cui è installata una distribuzione GNU/Linux.
- Un client FTP che supporta le connessioni SFTP (questa guida documenta l'utilizzo di [FileZilla](https://filezilla-project.org/){.external}).
- Un accesso amministrativo via SSH al tuo server.

## Procedura

### Utilizza FileZilla per recuperare e salvare i tuoi dati

Il protocollo SFTP può essere utilizzato per trasferire file tramite una connessione sicura (SSH). In questo scenario esistono due possibilità: accedendo al server con un accesso regolare o accedendo in [modalità Rescue](/pages/cloud/dedicated/rescue_mode).

Di default, un server che utilizza un sistema operativo GNU/Linux avrà un accesso SSH attraverso la porta 22. Questa porta può essere già stata modificata (ad esempio, seguendo la [nostra guida per proteggere un server dedicato](/pages/cloud/dedicated/securing-a-dedicated-server)).

#### **Se hai accesso al tuo server**

Nell'interfaccia grafica di FileZilla, inserisci l'indirizzo IP del tuo server nel campo `Host`, il nome utente e la password nei rispettivi campi. Per quanto riguarda il campo `Porta`, inserisci "22" o la porta che il tuo servizio SSH ascolta se l'hai modificato.

Una volta stabilita la connessione, visualizzi una gerarchia dei tuoi file nella sezione `Sito remoto`.

![sito remoto sftp](images/sftp_sd_01.png){.thumbnail}

Nel nostro esempio, i dati da recuperare sono nella cartella "/home/data". È possibile trasferire i file da scaricare dal lato destro (`Sito remoto`) al lato sinistro (`Sito locale`) per poterli salvare sul dispositivo locale.

Per depositare file sul server, trascina i tuoi file dalla cartella locale verso la cartella di destinazione remota situata nella parte destra.

Lo stato di avanzamento del trasferimento dei dati viene mostrato in fondo all'interfaccia di FileZilla.

![stato di avanzamento del trasferimento sftp](images/sftp_sd_02.png){.thumbnail}

#### **Se il tuo server è in modalità Rescue**

In modalità Rescue è necessario eseguire il mount della partizione. Per effettuare questa operazione, segui le indicazioni fornite in [questa guida](/pages/cloud/dedicated/rescue_mode).

Una volta salita la partizione, utilizza il client FileZilla come descritto sopra utilizzando la porta 22 per connettersi al tuo server.

> [!primary]
>
> Quando attivi la modalità Rescue sul tuo server, riceverai via email le credenziali da utilizzare.
>

Se hai creato correttamente il punto di mount, i dati si trovano nella directory "/mnt" ("/mnt/home/data" in questo esempio).

![modalità rescue - sftp del sito remoto](images/sftp_sd_03.png){.thumbnail}

## Per saperne di più

[Attivare e utilizzare il Rescue mode](/pages/cloud/dedicated/rescue_mode)

[Mettere in sicurezza un server dedicato](/pages/cloud/dedicated/securing-a-dedicated-server)

Contatta la nostra community di utenti all’indirizzo <https://community.ovh.com/en/>.
