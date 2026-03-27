---
title: "Gestire la cronologia di una zona DNS"
excerpt: "Scopri come consultare, confrontare, scaricare e ripristinare i backup della zona DNS"
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

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio costituisce il file di configurazione di quest'ultimo. È composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, un centro di smistamento.

Per maggiori informazioni, consulta le nostre guide:

- [Tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Per diversi motivi, potresti dover applicare una configurazione DNS precedente al tuo dominio.

La gestione dei DNS è semplificata grazie alla cronologia delle zone DNS.

**Scopri come consultare, confrontare, scaricare e ripristinare i backup della zona DNS**

## Prerequisiti

- Avere accesso alla gestione del dominio interessato

<!-- CP-NAV-START:web-dns-zone -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Zone DNS](/links/control-panel/web-dns-zone)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Zone DNS`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedura

> [!primary]
>
> I backup della zona DNS sono soggetti alle seguenti limitazioni:
>
> - Conserviamo al massimo 200 backup per la stessa zona DNS.
> - Quando un backup ha più di 31 giorni, viene automaticamente eliminato, ad eccezione dei **5 backup più recenti** effettuati.

**Clicca sull'azione che preferisci per visualizzarne il contenuto.**

/// details | Visualizzare una zona DNS

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> La tabella che appare mostra la zona DNS del tuo dominio. Contiene la lista dei record DNS presenti. Sulla destra della tabella, diversi pulsanti ti permettono di eseguire azioni sulla zona DNS.
>>
>> ![Strumento cronologia DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella nuova pagina che appare, una tabella elenca la cronologia dei backup della zona DNS, dal più recente al più vecchio. In cima alla tabella si trova la versione attuale della zona DNS.
>>
>> Per visualizzare la zona DNS di tua scelta, individua la riga corrispondente nella tabella e clicca sull'icona presente nella colonna `Visualizza`{.action}.
>>
>> ![Visualizzare una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Step 4**
>>
>> I dati della zona DNS selezionata vengono mostrati.
>>
>> ![Dettaglio di una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Clicca su `Chiudi`{.action} per tornare alla pagina principale "Cronologia della zona DNS".

///

/// details | Scaricare una zona DNS

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> La tabella che appare mostra la zona DNS del tuo dominio. Contiene la lista dei record DNS presenti. Sulla destra della tabella, diversi pulsanti ti permettono di eseguire azioni sulla zona DNS.
>>
>> ![Strumento cronologia DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella nuova pagina che appare, una tabella elenca la cronologia dei backup della zona DNS, dal più recente al più vecchio. In cima alla tabella si trova la versione attuale della zona DNS.
>>
>> Per scaricare la zona DNS di tua scelta, individua la riga corrispondente nella tabella e clicca sull'icona presente nella colonna `Scarica`{.action}.
>>
>> ![Scaricare una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> La zona DNS viene scaricata in formato .txt.

///

/// details | Ripristinare una zona DNS

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> La tabella che appare mostra la zona DNS del tuo dominio. Contiene la lista dei record DNS presenti. Sulla destra della tabella, diversi pulsanti ti permettono di eseguire azioni sulla zona DNS.
>>
>> ![Strumento cronologia DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella nuova pagina che appare, una tabella elenca la cronologia dei backup della zona DNS, dal più recente al più vecchio. In cima alla tabella si trova la versione attuale della zona DNS.
>>
>> Per sostituire la zona DNS attuale con un'altra, è sufficiente ripristinare una zona DNS precedente. Nella tabella con la cronologia delle zone DNS, individua la riga corrispondente alla zona DNS che vuoi ripristinare (verifica la data a sinistra della riga) e clicca sull'icona presente nella colonna `Ripristina`{.action}.
>>
>> ![Ripristinare una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> Viene visualizzata la finestra seguente.
>>
>> ![Conferma ripristino zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Verifica che la data indicata nel messaggio corrisponda alla zona DNS che vuoi ripristinare. Come indicato dal banner giallo, ricorda che la zona DNS attuale (in cima all'elenco della cronologia delle zone DNS) verrà eliminata e sostituita dalla zona DNS che desideri ripristinare.
>>
>> Clicca su `Ripristina`{.action} per confermare il ripristino o su `Annulla`{.action}.

> [!primary]
>
> La modifica o il ripristino di una zona DNS comporta un tempo di propagazione da **4** a **24** ore per essere pienamente applicata sulla rete DNS.

///

/// details | Confrontare due zone DNS

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![Zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> La tabella che appare mostra la zona DNS del tuo dominio. Contiene la lista dei record DNS presenti. Sulla destra della tabella, diversi pulsanti ti permettono di eseguire azioni sulla zona DNS.
>>
>> ![Strumento cronologia DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Clicca su `Visualizza la cronologia della tua zona DNS`{.action}.
>>
> **Step 3**
>>
>> Nella nuova pagina che appare, una tabella elenca la cronologia dei backup della zona DNS, dal più recente al più vecchio. In cima alla tabella si trova la versione attuale della zona DNS.
>>
>> Puoi confrontare il contenuto di due zone DNS. Nella tabella con la cronologia della zona DNS, individua le due righe corrispondenti alle due zone DNS che vuoi confrontare (verifica la data a sinistra di ogni riga) e selezionale. Per confrontare queste due versioni di zona DNS, clicca in alto a sinistra su `Confronta le versioni`{.action}.
>>
>> ![Confrontare due zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> Viene visualizzata una nuova pagina con il contenuto delle due zone DNS. Sopra ogni versione è mostrata la data corrispondente. Per impostazione predefinita, la versione più recente della zona DNS si trova a sinistra e la più vecchia a destra. Un codice colore ti permette di identificare le differenze di contenuto.
>>
>> A sinistra, il contenuto evidenziato in rosso è stato modificato o eliminato nella versione più recente.
>>
>> A destra, il contenuto evidenziato in verde è stato modificato o aggiunto rispetto alla versione più vecchia.
>>
>> Puoi inoltre aggiornare le date delle versioni che desideri confrontare tramite i due menu a discesa.
>>
>> ![Dettagli confronto due zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Per saperne di più

[Tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)

[Tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

[Accedere allo Spazio Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
