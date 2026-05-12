---
title: "Creare una zona DNS OVHcloud per un sottodominio"
excerpt: "Questa guida ti mostra come creare una zona DNS OVHcloud per il sottodominio di un nome di dominio tramite il tuo Spazio Cliente"
updated: 2026-02-19
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
pre {
    font-size: 14px !important;
}
pre.bgwhite {
    background-color: #fff !important;
    color: #000 !important;
    font-family: monospace !important;
    padding: 5px !important;
    margin-bottom: 5px !important;
}
pre.bgwhite code {
    background-color: #fff !important;
    border: solid 0px transparent !important;
    font-family: monospace !important;
    font-size: 0.90em !important;
    color: #000 !important;
}
.small {
   font-size: 0.90em !important;
}
</style>

## Obiettivo

Desideri creare una zona DNS per un sottodominio?

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. Essa è composta da informazioni tecniche, chiamate *record DNS*. La zona DNS agisce come un centro di instradamento.

Per ulteriori informazioni, consulta le nostre guide qui di seguito:

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Di norma, i record DNS di un sottodominio vengono configurati direttamente dalla zona DNS attiva del nome di dominio a cui appartiene.
Tuttavia, è anche possibile creare una zona DNS specifica per un sottodominio.

Per diversi motivi, potresti dover creare una zona DNS per un sottodominio su OVHcloud.
Quest'ultimo disporrà quindi della sua propria zona per configurare i propri record DNS.

> [!success]
>
> Per ricordo:
>
> - Un nome di dominio ha generalmente questa forma: **domain.tld**. Ad esempio: ovhcloud.com.
> - Un sottodominio ha generalmente questa forma: **sub.domain.tld**. Ad esempio: help.ovhcloud.com.
>
> Per funzionare, un sottodominio dipende di default da un nome di dominio.
> Concretamente, non potrai utilizzare il sottodominio **sub.domain.tld** se non hai accesso alla gestione del nome di dominio **domain.tld**.
>
> Se desideri creare una zona DNS per un nome di dominio, consulta direttamente [questa guida](/pages/web_cloud/domains/dns_zone_create).

**Questa guida ti mostra come creare una zona DNS OVHcloud per un sottodominio di un nome di dominio tramite il tuo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre del nome di dominio da cui dipenderà il sottodominio scelto.
- Il sottodominio in questione non deve già disporre di una zona DNS (attiva o meno) su OVHcloud o essere oggetto di un'operazione o di un ordine in corso su OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zone DNS](/links/control-panel/web-dns-zone)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zone DNS`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedura

### 1 - Creare la zona DNS tramite lo Spazio Cliente OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), quindi sul pulsante `Ordina`{.action}.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina che appare, inserisci il sottodominio (ad esempio: *sub.domain.tld*) per cui desideri creare una zona DNS OVHcloud. Aspetta alcuni istanti mentre lo strumento effettua controlli sul sottodominio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se un messaggio indica che la zona DNS non può essere creata, verifica che il sottodominio rispetti i prerequisiti necessari o contatta la persona che lo gestisce. Appena tutto sarà corretto, riprova l'operazione.
>>
> **Passaggio 3**
>>
>> Una volta completata la verifica, scegli se attivare il numero minimo di record per la zona DNS che vuoi creare. Questa scelta non è definitiva, perché in seguito sarà possibile [modificare i record della zona DNS](/pages/web_cloud/domains/dns_zone_edit).
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}
>>
>> |Attivare i record minimi?|Dettaglio|
>> |---|---|
>> |Sì|Seleziona questa scelta se vuoi personalizzare in autonomia la zona DNS in seguito.<br>![minimale-entra](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
>> |No|Seleziona questa opzione se intendi utilizzare servizi OVHcloud come [hosting web](/links/web/hosting), con la zona preconfigurata a tal fine.<br>![no-minimale-entra](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|
>>
>> Una volta effettuata la tua scelta, segui le fasi visualizzate nel tuo Spazio Cliente OVHcloud fino alla creazione della zona DNS.

### 2 - Modificare la zona DNS (facoltativo)

La zona DNS per il tuo sottodominio è ora creata, puoi modificarla immediatamente. Questa operazione è facoltativa, ma potrebbe rivelarsi necessaria se desideri assicurare la continuità della disponibilità dei servizi collegati a questo sottodominio (come un sito web e/o delle e-mail).

Per modificare questa zona DNS, consulta la nostra guida "[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Se hai appena creato la zona DNS e il sottodominio non appare ancora nell'elenco dei tuoi servizi, attendi 15 a 20 minuti e ricarica la pagina.

### 3 - Dichiarare i server DNS nella zona DNS attiva del nome di dominio a cui appartiene il sottodominio scelto

L'attivazione di una zona DNS per un sottodominio differisce da quella di un nome di dominio, poiché un sottodominio dipende obbligatoriamente da un nome di dominio per funzionare.

Devi prima recuperare il nome dei **server DNS** OVHcloud associati alla zona DNS creata per il tuo sottodominio.

Per trovarli, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il sottodominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella tabella presente sulla pagina che appare, individua le 2 colonne **Tipo** e **Destinazione**.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> Cerca le 2 righe di tipo **NS** e recupera i 2 valori presenti nella colonna **Destinazione**.
>> I nomi dei server DNS devono avere una delle 3 forme seguenti:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` o, `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ogni `X` rappresenta un numero compreso tra **0** e **9**).
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (dove ogni `X` rappresenta un numero compreso tra **0** e **9**).
>> - `ns200.anycast.me` e `dns200.anycast.me` (se hai sottoscritto l'opzione [DNS anycast](/links/web/domains-options)).

Una volta recuperati i 2 nomi dei server DNS, 2 situazioni sono possibili:

**Clicca su una delle 2 situazioni per visualizzare il contenuto.**

/// details | Il nome di dominio da cui dipende il tuo sottodominio ha la sua zona DNS attiva su OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il sottodominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> A destra o sotto la tabella, clicca su `Aggiungi un record`{.action}.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella finestra che si apre, seleziona l'entrata DNS di tipo `NS`{.action}, quindi clicca su `Continua`{.action}
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Inserisci quindi nel campo `Sottodominio *` il sottodominio interessato (ad esempio: `sub` per il sottodominio `sub.domain.tld`), e nel campo `Destinazione *`, uno dei 2 server DNS precedentemente recuperati (ad esempio: `nsXX.ovh.net`).
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-a-ns-entry-to-the-dns-zone.png){.thumbnail}
>>
>> Clicca infine su `Continua`{.action}.
>>
>> Verifica il riepilogo, quindi clicca su `Conferma`{.action}.
>>
>> **Ripeti l'intera procedura per il secondo server DNS.**
>>
>> Se necessario, consulta inoltre la nostra guida "[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Il nome di dominio da cui dipende il tuo sottodominio ha la sua zona DNS attiva da un altro fornitore

In questo caso specifico, contatta il tuo fornitore DNS specificandogli che desideri aggiungere 2 record DNS di tipo NS per il tuo sottodominio. 

Ecco un esempio di richiesta da formulare al tuo fornitore DNS:

<pre class="bgwhite"><code>
Buongiorno,

Desidero aggiungere nella zona DNS attiva del nome di dominio <b>domain.tld</b> i seguenti record DNS di tipo NS per il mio sottodominio <b>sub.domain.tld</b>:

 - sub IN NS nsXX.ovh.net.
 - sub IN NS dnsXX.ovh.net.

Al fine di attivare una zona DNS specifica per il mio sottodominio <b>sub.domain.tld</b>.

Cordiali saluti,
</code></pre>

Nell'esempio sopra, sostituisci i valori **domain.tld**, **sub.domain.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** con i tuoi valori personali.

///

> [!warning]
>
> **L'attenzione che segue non riguarda i 2 record DNS di tipo NS che hai appena aggiunto.** 
>
> Se erano presenti altri record DNS nella zona DNS attiva del nome di dominio da cui dipende il tuo sottodominio:
>
> 1. Non dimenticare di duplicarli nella zona DNS creata per il tuo sottodominio.
> 2. Una volta duplicati, rimuovili dalla zona DNS attiva del tuo nome di dominio.
>
> Infatti, potrebbe verificarsi un conflitto nella risoluzione DNS.

Dopo la modifica della zona DNS del nome di dominio da cui dipende il tuo sottodominio, la propagazione delle modifiche può richiedere fino a **48 ore**.

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).