---
title: Come proteggere il tuo sito Web?
excerpt: Questa guida ti mostra come migliorare la sicurezza del tuo sito Web
slug: secure-website
section: Ottimizza il tuo sito 
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 24/11/2021**

## Obiettivo

Questa guida ti mostra come acquisire conoscenze fondamentali per assicurare la disponibilità dei tuoi servizi, proteggere l'integrità dei tuoi dati e rendere sicuro l'accesso alle tue soluzioni. Riguarda solo i siti Web ospitati sulle [soluzioni condivise OVHcloud](https://www.ovhcloud.com/it/web-hosting/).

Il progetto è organizzato gradualmente in ordine crescente di importanza e difficoltà tecniche, il che significa che i primi passi sono i più indispensabili. La sicurezza del tuo sito sarà misurata in base all'elemento che lo riguarda e che è meno protetto. Ti consigliamo di eseguire tutte le azioni descritte. Tuttavia, in caso di difficoltà nell'esecuzione di alcune delle operazioni descritte, contatta la [community OVHcloud](https://community.ovh.com/en/) o i nostri [partner](https://partner.ovhcloud.com/it/).

**Questa guida ti mostra come proteggere il tuo sito Web.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo VPS. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o contattare l'amministratore del servizio. OVHcloud non potrà fornirti assistenza. Per maggiori informazioni consulta la sezione "Per saperne di più" di questa guida.
>

## Prerequisiti

- un [piano OVHcloud Web Hosting](https://www.ovhcloud.com/it/web-hosting/)
- avere le [informazioni di accesso](../accedere-spazio-storage-ftp-hosting-web/#step-1-recupera-i-dati-necessari-a-effettuare-laccesso) per accedere allo spazio di archiviazione del piano di hosting
- accesso a [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- accesso all'interfaccia [admin per il sito Web](https://codex.wordpress.org/it:Primi_passi_con_WordPress){.external}

## Procedura

### Step 1: verifica la sicurezza dei tuoi dispositivi <a name="local"></a>

Questo primo passo è fondamentale. L'infezione da malware della tua postazione informatica può potenzialmente dare accesso a una persona malintenzionata a tutte le tue pignorazioni effettuate sulla tua tastiera. Le credenziali utilizzate per accedere al tuo Spazio Cliente OVHcloud o all'interfaccia di gestione del tuo sito possono quindi essere compromesse.

Inoltre, il fenomeno crescente dei [Ransomware](https://www.commissariatodips.it/notizie/articolo/campagna-no-more-ransom/index.html){.external} (circa 400 casi nel 2020 in Francia) può non solo portare alla crittografia di tutti i tuoi dati personali, ma anche mettere in pericolo la tua attività rendendo inaccessibile l'insieme dei tuoi dati, dispositivi e software. 

Per prima cosa verifica la sicurezza della tua postazione Windows, Mac o Linux:

- verificate gli aggiornamenti della vostra macchina;
- esegui una scansione completa della tua postazione dopo aver aggiornato il software antivirus/anti-malware;
- modificare regolarmente la password amministratore del tuo dispositivo (per maggiori informazioni sulla scelta delle password, segui le istruzioni di questa [guida](../../customer/tutto_sullidentificativo_cliente_ovh/#creare-una-password-solida-e-unica)).

### Step 2: proteggi il tuo Spazio Cliente OVHcloud

Per rendere sicuro il tuo account cliente, [attiva la doppia autenticazione](../../customer/proteggi_il_tuo_account_con_2FA/) e segui le istruzioni di questa [guida](../../customer/tutto_sullidentificativo_cliente_ovh/).

In particolare, aggiorna le [informazioni del tuo account cliente](../../customer/tutto_sullidentificativo_cliente_ovh/#modifica-le-tue-informazioni-personali) e aggiungi un **email di recupero**.<br>
In caso di perdita delle credenziali e/o indisponibilità dell'indirizzo email principale dell'account cliente OVHcloud, per aiutarti a trovare il tuo servizio è necessario un'email di recupero o informazioni personali aggiornate.

### Step 3: effettua regolarmente backup del tuo sito <a name="backup"></a>

> [!primary]
>
> Salvare regolarmente i dati, indipendentemente dall'offerta, è il gesto più importante da adottare in termini di sicurezza informatica. Sarà sempre possibile reinstallare un software o ordinare un nuovo dispositivo, ma è molto difficile recuperare i dati una volta persi.
>
> OVHcloud esegue regolarmente backup dei dati sulla propria infrastruttura. Un errore di manipolazione come un'operazione di eliminazione avviata su un database in produzione o un mancato rinnovo dei servizi, può causare la perdita definitiva dei tuoi dati.
>

Per prima cosa, effettua un backup dei dati che compongono il tuo sito web connettendosi al tuo [spazio FTP](../accedere-spazio-storage-ftp-hosting-web/) e al tuo [server database](../web_hosting_come_esportare_un_database/). Importa sul tuo dispositivo o su un supporto esterno, come un server NAS o una chiave USB.

I software di gestione del sito Web (CMS) offrono la possibilità di installare plugin di backup automatico.<br>
Consulta i forum ufficiali del tuo CMS preferito o contatta la [community OVHcloud](https://community.ovh.com/en/) al riguardo.

### Step 4: come riconoscere le email fraudolente

Le email di phishing rappresentano una minaccia per la sicurezza del tuo sito, in quanto possono contenere o far funzionare software malevoli. Per saperne di più su come riconoscerli e prevenirli, consulta questa [guida](../../customer/truffe-frode-phishing/).

### Step 5: attiva il rinnovo automatico

In caso di mancato rinnovo dei servizi, OVHcloud ha l'obbligo legale, alla scadenza del tuo abbonamento, di eliminare integralmente i dati associati alla tua offerta di hosting e tutti i loro backup. Invitiamo i nostri clienti a ricordare i termini di rinnovo.<br>
ma è possibile che le email di recupero arrivino nello spam o l'indirizzo email associato all'account OVHcloud possa essere errato o non essere più disponibile.

Se il tuo sito occupa un posto preminente nella tua attività professionale, [attiva il rinnovo automatico](../../billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#accedere-alle-impostazioni-dei-servizi) su tutti i tuoi servizi OVHcloud.<br>
Ti consigliamo inoltre di verificare regolarmente la **validità dei metodi di pagamento** registrati.

### Step 6: verifica che il tuo sito sia aggiornato

Verifica regolarmente gli aggiornamenti del tuo sito seguendo le istruzioni di questa [guida](../sito-chiuso-per-hack/#22-aggiorna-il-sito-internet).

Utilizza anche una versione recente del [linguaggio PHP](../configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/) sul tuo hosting.

### Step 7: attiva l'https

Attiva la connessione criptata al tuo sito tramite il protocollo **HTTPS**, seguendo questa [guida](../attivare-https-su-sito-internet-tramite-certificato-ssl/). L'attivazione di questo protocollo permetterà di cifrare l'insieme delle informazioni che transitano sul tuo sito web (in particolare le digitazioni effettuate dai tuoi utenti sui suoi formulari).

### Step 8: proteggi i tuoi moduli

I form dei siti sono bersagli privilegiati dagli hackers/spammers. Proteggi i tuoi moduli da qualsiasi attacco con plugin **"CAPTCHA"**.

### Step 9: imposta un plugin di sicurezza sul tuo sito

Aggiungi al tuo sito un plugin di sicurezza consigliato dall'editor del CMS:

- [WordPress](https://it.wordpress.org){.external}
- [Joomla](https://downloads.joomla.org/it/){.external}
- [Drupal](http://www.drupalitalia.org/){.external}
- [PrestaShop](https://www.prestashop.com/it){.external}

### Step 10: verifica che il tuo hosting non contenga file malevoli

Per effettuare questa operazione, accedi al tuo [spazio FTP](../accedere-spazio-storage-ftp-hosting-web/). E richiede competenze tecniche per riconoscere eventuali file malevoli sul tuo hosting. In caso di difficoltà nell'effettuare questa verifica, contatta i nostri [partner](https://partner.ovhcloud.com/it/).

In caso di dubbi su questo punto, consulta lo [Step 1](#local) di questa guida e [modifica la password](../modificare-la-password-utente-ftp/) del tuo spazio FTP.

### Step 11: testa i backup del tuo sito

I [backup dei dati](#backup) del tuo sito (file FTP e database) devono essere effettuati regolarmente.

Tuttavia, esse non costituiscono una sicurezza assoluta. Per verificare che i backup del tuo database non siano corrotti, è necessario eseguire un test.

Questi test possono essere effettuati localmente, ad esempio importando i dati su software di tipo [WAMP](https://www.wampserver.com/){.external}. Ti consigliamo di configurare la tua soluzione locale in modo che la sua configurazione corrisponda in ogni punto a quella dei nostri [server di hosting condiviso](https://webhosting-infos.hosting.ovh.net/).

Puoi anche creare una **versione di test** del tuo sito (ad esempio: test.miodominio.tld) in un'altra cartella del tuo hosting (sarà possibile utilizzare un template di base).

## Per saperne di più <a name="gofurther"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
