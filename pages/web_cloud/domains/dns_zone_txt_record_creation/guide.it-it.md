---
title: "Aggiungere un record DNS di tipo TXT per un dominio"
excerpt: "Scopri come aggiungere un record DNS di tipo TXT a una zona DNS gestita in OVHcloud per il tuo dominio"
updated: 2026-03-24
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

È necessario convalidare un processo di verifica o di sicurezza per il dominio (associazione di servizi tramite token di convalida, chiave di verifica, ecc.) utilizzando la zona DNS? Vuoi aggiungere un valore personalizzato in formato testo nella zona DNS del tuo dominio?
Per effettuare questa operazione è necessario creare un record DNS di tipo TXT nella zona DNS attiva del dominio.

**Questa guida ti mostra come aggiungere un record DNS di tipo TXT a una zona DNS gestita in OVHcloud per il tuo dominio.**

> [!primary]
>
> Per modificare o eliminare un record DNS di tipo TXT da una zona DNS di OVHcloud, segui la nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Prerequisiti

- Disporre di un [dominio](/links/web/domains).
- Disporre di una zona DNS associata a questo dominio in OVHcloud.

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
> L'aggiunta, la modifica o la cancellazione di record DNS in una zona DNS attiva è un'operazione delicata. In caso di dubbi, contatta un [fornitore specializzato](/links/partner).

<!-- CP-STEPS-START:add-txt-record-domain -->
### Aggiungere un record DNS di tipo TXT per un dominio

Clicca sulle schede qui sotto per visualizzare ciascuno dei **5** step.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul pulsante `Aggiungi un record`{.action}.
>>
> **Step 3**
>>
>> Nella finestra che si apre, seleziona il record esteso di tipo `TXT`{.action}.
>>
> **Step 4**
>>
>> Inserisci nel campo `Valore *` la stringa TXT da aggiungere (ad esempio: `AbCdE-Value-of-TXT-fGhIjK`) e clicca su `Continua`{.action}.
>>
> **Step 5**
>>
>> Verifica il riepilogo e clicca su `Conferma`{.action}. Attendi fino a **24** ore affinché la propagazione dell'aggiunta sulla rete DNS sia pienamente effettiva.

/// details | Per ulteriori informazioni, fare clic qui.

Consulta le nostre guide dettagliate:

- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-domain -->

<!-- CP-STEPS-START:add-txt-record-subdomain -->
### Aggiungere un record DNS di tipo TXT per il sottodominio di un dominio

Clicca sulle schede qui sotto per visualizzare ciascuno dei **5** step.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Zone DNS](/links/control-panel/web-dns-zone), poi seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul pulsante `Aggiungi un record`{.action}.
>>
> **Step 3**
>>
>> Nella finestra che si apre, seleziona il record esteso di tipo `TXT`{.action}.
>>
> **Step 4**
>>
>> Inserisci nel campo `Sottodominio` il sottodominio interessato (ad esempio: `www` per il sottodominio `www.domain.tld`) e nel campo `Valore *` la stringa TXT da aggiungere (ad esempio: `AbCdE-Value-of-TXT-fGhIjK`). Clicca su `Continua`{.action}.
>>
> **Step 5**
>>
>> Verifica il riepilogo e clicca su `Conferma`{.action}. Attendi fino a **24** ore affinché la propagazione dell'aggiunta sulla rete DNS sia pienamente effettiva.

/// details | Per ulteriori informazioni, fare clic qui.

Consulta le nostre guide dettagliate:

- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
- [Come creare un sottodominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-subdomain -->

## Per saperne di più

[Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)
 
Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).
