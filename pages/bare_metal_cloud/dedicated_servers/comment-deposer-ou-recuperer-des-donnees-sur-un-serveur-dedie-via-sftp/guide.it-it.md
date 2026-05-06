---
title: "Trasferire file tramite SFTP su un server dedicato"
excerpt: "Trasferisci file da e verso il tuo server dedicato utilizzando SFTP con FileZilla per upload e download sicuri."
updated: 2025-02-21
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

Esistono diverse opzioni per trasferire file tra un dispositivo locale e un host remoto. Per garantire un trasferimento sicuro, nella maggior parte dei casi è consigliabile utilizzare software client compatibile con SFTP (Secure File Transfer Protocol).

**Questa guida ti mostra come utilizzare FileZilla per trasferire file tramite SFTP.**

> [!warning]
> OVHcloud fornisce servizi la cui configurazione e gestione sono di vostra responsabilità. Questa guida ti mostra come utilizzare le soluzioni OVHcloud con tool esterni. Potrebbe essere necessario adattare alcune istruzioni specifiche al sistema operativo del dispositivo locale o del server.
>
> In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider di servizi specializzato](/links/partner) o [la nostra Community](/links/community).
>

## Prerequisiti

- un [server dedicato](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) nel tuo account OVHcloud, con una distribuzione GNU/Linux installata
- Un client FTP che supporta le connessioni SFTP (ad esempio [FileZilla](https://filezilla-project.org/)) installato sulla workstation locale
- Accesso amministratore in SSH al tuo server

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Server Dedicati](/links/control-panel/baremetal-dedicated-servers)
- **Percorso di navigazione:** `Bare Metal Cloud`{.action} > `Server Dedicati`{.action} > Seleziona il tuo server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedura

È necessario inserire l’indirizzo IP del server indicato nello [Spazio Cliente OVHcloud](/links/manager) e il nome dell’account utente da utilizzare per la connessione SSH. Per maggiori informazioni, consulta le nostre guide "Primi passi":

- [Server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Server dedicato della gamma **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Gli esempi seguenti sono basati su [FileZilla](https://filezilla-project.org/). Se utilizzi un client FTP diverso, consulta la guida per l’utilizzo della tua applicazione.

Se il server è avviato in **modalità rescue**, il processo potrebbe richiedere alcuni step aggiuntivi. Apri la sezione corrispondente qui sotto in base allo stato del tuo server.

### Come connettersi a un server tramite un client SFTP

/// details | Espandi questa sezione

Nell’interfaccia del client FileZilla, inserisci l’indirizzo IP del tuo server nel campo `Host` e il tuo nome utente e la tua password nei rispettivi campi. Digitare "22" nel campo `Porta`, a meno che non sia stata modificata la porta di connessione su cui è in ascolto il servizio SSH del server.

Clicca sul pulsante `Quickconnect`{.action}.

> [!warning]
> Per accedere alle cartelle appartenenti all’account utente `root` del tuo sistema operativo, utilizza le credenziali dell’utente `root` per stabilire la connessione SFTP. Questo account non dispone di una password predefinita.  
> Se sei sicuro di dover accedere ai file dell’utente `root` via SFTP, scopri come attivare questa connessione nella nostra [guida dell’account utente](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

///

### Come connettersi a un server in modalità Rescue tramite un client SFTP

/// details | Espandi questa sezione

Se non hai ancora effettuato le operazioni necessarie per accedere ai tuoi file in modalità Rescue, consulta la guida corrispondente per accedere al tuo server e montare le tue partizioni:

- [Modalità Rescue per server dedicato](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Modalità Rescue per VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Nell’interfaccia del client FileZilla, inserisci l’indirizzo IP del tuo server nel campo `Host` e "22" nel campo `Port`. Inserisci "root" nel campo `Username` e la password che ti è stata inviata via email per l’accesso in modalità Rescue nel campo `Password`.

Clicca sul pulsante `Quickconnect`{.action}.

Il file system del server si trova nella directory impostata come punto di mount in Rescue mode ("/mnt" in questo esempio).

![modalità rescue sftp del sito remoto](images/sftp_sd_03.png){.thumbnail}

///

### Utilizzo dell'interfaccia FileZilla per scaricare i tuoi file

Una volta stabilita la connessione remota, nella sezione `Remote Site` verrà visualizzata una struttura ad albero dei file del server.

![sito remoto sftp](images/sftp_sd_01.png){.thumbnail}

La parte centrale dell'interfaccia FileZilla funziona come un browser di file. È possibile selezionare più file o cartelle, eliminarli, trascinarli da un lato all'altro e così via. I dettagli sull'utilizzo possono variare in base alla versione del software e al sistema operativo locale. Per ulteriori informazioni, consultare il manuale dell'utente di [FileZilla](https://filezilla-project.org/).

Ad esempio, per recuperare i file nella cartella "/home/data" del server, aprire la cartella nel riquadro destro (`Remote Site`). Selezionare i file o le cartelle da scaricare e trascinarli nel riquadro sinistro (`Local Site`) in una cartella del dispositivo locale.

Lo stato di avanzamento del trasferimento dei dati verrà visualizzato nella coda in basso.

![stato di avanzamento del trasferimento sftp](images/sftp_sd_02.png){.thumbnail}

## Per saperne di più

[Introduzione a SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configurazione degli account utente e dell'accesso root su un server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).