---
title: 'Risolvere l’errore «Sito non installato»'
slug: errore-sito-non-installato
excerpt: Come identificare e risolvere la pagina di errore «Sito non installato»
section: Diagnostica
order: 05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 18/05/2021**

## Obiettivo


È possibile vedere apparire sul browser la pagina di errore `Sito non installato`, in particolare al momento della prima installazione del tuo sito Web.

![site-not-installed](images/site-not-installed2021.png){.thumbnail}

**Come identificare e risolvere la pagina di errore "Sito non installato"**

> [!warning]
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#gofurther) su questa guida.

## Prerequisiti

- Disporre di un'[offerta di hosting condiviso](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre anche della gestione della [Zona DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/) alla quale è associato il tuo dominio

## Procedura

La pagina **Sito non installato** si presenta in due diverse situazioni:

1. Il tuo dominio non è presente nella sezione [Multisito](../configurare-un-multisito-su-un-hosting-web/#step-1-accedi-alla-gestione-del-multisito) del tuo hosting.

2. Il tuo dominio non è associato, attraverso la sua `Zona DNS`{.action}, al tuo hosting.

Gli step successivi ti permettono di correggere l'errore `Sito non installato` in queste due situazioni.

### Step 1: verifica la parte multisito del tuo hosting

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action} e poi `su Hosting`{.action}.

Seleziona l'hosting interessato dalla lista e clicca sulla scheda `Multisito`{.action}.

|Scenario|Azione da eseguire|
|---|---|
|Il nome del tuo sito appare nella tabella.|Se hai appena aggiunto il nome del tuo sito nella sezione `Multisito` del tuo hosting, attendi una ventina di minuti e poi aggiorna la cache del tuo browser. Se il messaggio "Sito non installato" compare ancora, passa allo [Step 2](#checkdomainlink).|
|Il dominio o sottodominio associato al tuo sito non compare nella tabella.|Aggiungi il tuo dominio al `Multisito`{.action} seguendo la sezione dedicata della guida [Condividere il tuo hosting tra più siti - aggiungere un dominio o un sottodominio](../configurare-un-multisito-su-un-hosting-web/#step-2-aggiungi-un-dominio-o-un-sottodominio).|
|Il dominio è stato eliminato dal multisito senza azione da parte tua.|Il dominio o la zona DNS possono essere gestiti da un altro account. Aggiungi il tuo dominio al multisito seguendo la sezione dedicata della guida [Condividere il tuo hosting tra più siti - aggiungere un dominio esterno](../configurare-un-multisito-su-un-hosting-web/#step-22-aggiungere-un-dominio-esterno).|

### Step 2: verifica la zona DNS del tuo dominio <a name="checkdomainlink"></a>

> [!primary]
>
> Questo step ha lo scopo di verificare che il tuo dominio, attraverso la sua `Zona DNS`{.action}, sia collegato all'hosting del tuo sito.
> Per maggiori informazioni sulla nozione di DNS, consulta la nostra guida [Modificare una zona DNS OVHcloud](../../domains/web_hosting_modifica_la_tua_zona_dns/#obiettivo).

#### 2\.1 Identifica l'indirizzo IP del tuo hosting OVHcloud

Per recuperare l'indirizzo IP, clicca su `Hosting` nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona l'hosting interessato.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### 2\.2 Verifica l'indirizzo IP indicato nella zona DNS del tuo dominio

Verifica che l'indirizzo IP del tuo hosting compaia nella zona DNS attiva del tuo dominio.

accedi alla sezione `Domini`{.action}, seleziona il tuo dominio e clicca sulla scheda `Zona DNS`{.action}.

|Possibili scenari|Azione da eseguire|
|---|---|
|Nella zona DNS, il tuo dominio è associato all'indirizzo IP del tuo hosting tramite un record di tipo A (per IPv4) o AAAA (per IPv6)<br><br>![zona DNS_IP2](images/zonedns_ip2.png){.thumbnail}|Ciò indica che la configurazione del tuo nome di dominio è corretta.<br><br>In seguito alle ultime modifiche dei tuoi DNS, il tuo sito verrà visualizzato entro 48 ore al massimo.<br><br>Riavvia anche i tuoi dispositivi (PC, smartphone, box, ecc...) e svuota la cache del tuo browser.|
|La tua zona DNS non comporta un record di tipo A o AAAA che colleghi il tuo dominio all'indirizzo IP del tuo hosting. O il record esistente punta su un altro indirizzo IP.|Aggiungi un nuovo record di tipo A o AAAA o correggi il record esistente seguendo [questa guida](../../domains/web_hosting_modifica_la_tua_zona_dns/).|
|Il tuo dominio non compare nella sezione `Domini`{.action} dello Spazio Cliente.<br><br>o visualizzi la scheda `Zona DNS`{.action} del tuo dominio nel modo seguente :<br><br>![zonedns_ndd_pas_su_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Ciò significa che il tuo dominio non è gestito dallo Spazio Cliente OVHcloud.<br><br>Determina il suo registrar tramite il nostro tool [WHOIS](https://www.ovh.it/supporto/strumenti/check_whois.pl) e i server DNS ai quali è collegato.<br><br>Per visualizzare e modificare la zona DNS in questione, consulta [questa guida](../configurare-un-multisito-su-un-hosting-web/#step-22-aggiungere-un-dominio-esterno).|
|Nella scheda `Zona DNS`{.action} è possibile visualizzare questa avvertenza :<br><br>![avviso_zonedns_pas_su_srv_Dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Per modificare di conseguenza i server DNS del tuo dominio, consulta [questa guida](../../domains/web_hosting_gestisci_il_tuo_server_dns/).|

## Per saperne di più <a name="gofurther"></a>

[Elenco degli indirizzi IP di cluster e hosting Web](../lista-indirizzi-ip-di-cluster-e-hosting-web/)

Per maggiori informazioni sull'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
