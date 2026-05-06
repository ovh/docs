---
title: Creare una zona DNS OVHcloud per un dominio
excerpt: Questa guida ti mostra come creare una zona DNS per il tuo dominio dallo Spazio Cliente OVHcloud
updated: 2026-03-10
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

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. È composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di deviazioni.

Per maggiori informazioni, consulta le nostre guide:

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Per diversi motivi, potresti aver bisogno di creare una zona DNS per il tuo dominio in OVHcloud.

**Questa guida ti mostra come creare una zona DNS OVHcloud per il tuo dominio dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Disporre di un dominio
- Il dominio in questione non deve disporre già di una zona DNS (attiva o meno) in OVHcloud o essere oggetto di un'operazione o di un ordine in corso in OVHcloud.

<!-- CP-NAV-START:web-dns-zone -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zone DNS](/links/control-panel/web-dns-zone)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zone DNS`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedura

> [!warning]
>
> Puoi creare più zone DNS (presso diversi provider/hosting DNS) per uno stesso dominio. ma è possibile avere una sola zona DNS attiva per il dominio. Questa restrizione mira ad evitare i *conflitti DNS*.
>
> L'attivazione/disattivazione di una zona DNS avviene a partire dalla dichiarazione dei **server DNS** presso il tuo dominio. Modifica questa dichiarazione e modifica i **server DNS** di un dominio presso: 
>
> - del *Registrar* in cui hai registrato direttamente il tuo dominio;
> - del provider che lo gestisce se passi attraverso un provider specializzato per gestire il tuo dominio.
>
> Modificando i **server DNS** di un dominio, disattivi la configurazione della zona DNS precedente applicata a vantaggio della configurazione della nuova zona DNS (presente sui nuovi **server DNS** dichiarati).
>
> Verifica che, prima di modificare i **server DNS** dichiarati presso il tuo dominio, la configurazione della nuova zona DNS corrisponda alle tue aspettative.
>

### 1 - Creare la zona DNS dallo Spazio Cliente OVHcloud

<!-- CP-STEPS-START:create-dns-zone -->
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
>> Nella pagina che appare, inserisci il dominio (ad esempio: *dominio.tld*) per cui desideri creare una zona DNS OVHcloud. Aspetta alcuni istanti mentre lo strumento effettua controlli sul dominio.
>>
>> ![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}
>>
>> Se un messaggio indica che la zona DNS non può essere creata, verifica che il dominio rispetti i prerequisiti necessari o contatta la persona che lo gestisce. Appena tutto sarà corretto, riprova l'operazione.
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
<!-- CP-STEPS-END:create-dns-zone -->

### 2 - Modifica la zona DNS (facoltativo)

Ora che la zona DNS del tuo dominio è stata creata, è possibile modificarla. Questa operazione è facoltativa, ma può rivelarsi necessaria per garantire la disponibilità dei servizi associati a questo dominio (ad esempio un sito Web e/o un servizio di posta elettronica).

Per modificare questa zona DNS, consulta la nostra guida "[Modifica una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Se hai appena creato la zona DNS e il dominio non compare ancora nella lista dei tuoi servizi, attendi 15-20 minuti e ricarica la pagina.
>

### 3 - Modifica i server DNS del dominio

Una volta che la zona DNS OVHcloud è pronta per l'utilizzo, associala al tuo dominio per applicare la configurazione che contiene. 

È quindi necessario recuperare prima i **server DNS** di OVHcloud sui quali è stata creata la zona DNS di OVHcloud per il tuo dominio.

<!-- CP-STEPS-START:find-dns-servers -->
Per trovarli, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi scegli il dominio interessato.
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
<!-- CP-STEPS-END:find-dns-servers -->

Una volta recuperati i 2 nomi dei server DNS, sono possibili 2 situazioni.

> [!primary]
>
> Ti ricordiamo che, prima di modificare i **server DNS** dichiarati presso il tuo dominio, verifica che la configurazione della nuova zona DNS corrisponda alle tue aspettative.

**Clicca su una delle 2 situazioni per visualizzare il contenuto.**

/// details | Il dominio ha la sua zona DNS attiva su OVHcloud

Consulta [questa guida](/pages/web_cloud/domains/dns_server_edit) per verificare o modificare i server DNS dichiarati per il tuo dominio.

///

/// details | Il dominio ha la sua zona DNS attiva presso un altro provider

In questo caso specifico, contatta il tuo provider DNS specificando che desideri sostituire i record DNS di tipo NS per il tuo dominio.

Ecco un esempio di richiesta da inviare al tuo provider DNS:

<pre class="bgwhite"><code>
Buongiorno,

Per il mio dominio <b>domain.tld</b>, desidero sostituire gli attuali server DNS con i seguenti server DNS:

 - nsXX.ovh.net.
 - dnsXX.ovh.net.

Cordiali saluti,
</code></pre>

Nell'esempio qui sopra, sostituisci i valori **domain.tld**, **nsXX.ovh.net** e **dnsXX.ovh.net** con i tuoi valori.

///

Dopo la modifica dei server DNS del dominio, la propagazione delle modifiche può richiedere fino a **48 ore**.

> [!success]
>
> Per personalizzare i nomi dei server DNS associati alla zona DNS attiva del tuo dominio, consulta la nostra guida "[Personalizzare i server DNS di un dominio (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Per saperne di più

[Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Modifica una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).