---
title: "Come verificare l'associazione 'nome di dominio / sito web'?"
excerpt: "Utilizza il nostro strumento diagnostico per verificare che il tuo nome di dominio o sottodominio sia correttamente registrato con il tuo sito web sul tuo hosting web"
updated: 2026-05-04
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

Puoi ospitare diversi siti web sulla stessa offerta di hosting web, anche se i nomi di dominio non sono registrati su OVHcloud. Inoltre, puoi associare uno o più nomi di dominio o sottodomini allo stesso sito web.

**Utilizza il nostro strumento diagnostico per verificare che il tuo nome di dominio o sottodominio sia correttamente registrato con il tuo sito web sul tuo hosting web.**

## Prerequisiti

- Disporre di un'offerta di [hosting web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [nomi di dominio](/links/web/domains).
- Poter modificare la configurazione dei tuoi nomi di dominio dalla [zona DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Accedere allo strumento di diagnostica

<!-- CP-STEPS-START:diagnose-website -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel riquadro che appare, fai clic sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i domini o sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> I nomi di dominio o sottodomini associati al tuo sito web appaiono. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> La colonna `Diagnostica` ti informa se il tuo nome di dominio punta correttamente all'hosting web associato. Ti permette di verificare rapidamente che la configurazione DNS del tuo nome di dominio sia correttamente effettuata con il tuo hosting web. Così, questa colonna ti aiuta ad identificare e risolvere eventuali problemi di puntamento. Per ogni nome di dominio, tre risultati di diagnostica sono possibili:
>>
>> - `A/AAAA` verde.
>> - `A/AAAA` giallo.
>> - `A/AAAA` grigio.
>>
>> Consulta la parte "[Interpretazione dei colori dello strumento di diagnostica](#interpretation)" di questa guida per conoscere il significato di questi 3 colori.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interpretazione dei colori dello strumento di diagnostica <a name="interpretation"></a>

**Clicca sugli indicatori di stato pertinenti qui sotto per visualizzarne le spiegazioni.**

/// details | A/AAAA verde

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Quando l'icona `A/AAAA` è verde nella colonna `Diagnostica`, ciò significa che il record **A** (per gli indirizzi IPv4) e/o il record **AAAA** (per gli indirizzi IPv6) del tuo nome di dominio punta correttamente all'indirizzo IP del tuo hosting web. La configurazione DNS del tuo nome di dominio è quindi conforme per funzionare con il sito web del tuo hosting web.

/// 

/// details | A/AAAA giallo

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Quando l'icona `A/AAAA` è gialla nella colonna `Diagnostica`, ciò significa che il record **A** (IPv4) e/o **AAAA** (IPv6) del tuo nome di dominio punta verso un indirizzo IP, ma non è quello dell'hosting web da cui stai consultando la colonna `Diagnostica`.

Per risolvere i problemi di puntamento DNS del tuo nome di dominio e assicurarti che punti correttamente all'hosting web desiderato, segui le fasi descritte nella nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

/// 

/// details | A/AAAA grigio

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Quando l'icona `A/AAAA` è grigia nella colonna `Diagnostica`, ciò significa che il nome di dominio non punta attualmente verso alcun indirizzo IP e che nessun record **A** (IPv4) o **AAAA** (IPv6) è configurato per questo nome di dominio.

Per aggiungere i record **A** e/o **AAAA** e configurare correttamente il tuo nome di dominio, segui le fasi descritte nella nostra guida "[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Per saperne di più

[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
