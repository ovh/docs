---
title: "Hosting condiviso: attiva un firewall applicativo"
excerpt: "Hosting condiviso: attiva un firewall applicativo"
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

*ModSecurity* è un modulo Apache complementare che filtra tutte le richieste in entrata sul tuo server Web. Aumenta la sicurezza contro le vulnerabilità note intercettando e filtrando le richieste prima che siano trattate con script.

L'insieme preconfigurato di regole di base, il "Core Rule Set" (CRS) della nostra *ModSecurity* protegge i tuoi siti Web dagli attacchi più diffusi, ad esempio:

- Trojans,
- Email injection,
- Bug sui file PDF,
- File injection sul tuo hosting,
- SQL o XSS injection,
- e tanto altro ancora

**Questa guida ti mostra come attivare il firewall applicativo dal tuo Spazio Cliente OVHcloud, per ottenere una protezione migliorata.**

> [!primary]
>
> La modifica delle impostazioni di configurazione del firewall non è disponibile perché l’hosting Web è presente su un’infrastruttura condivisa.

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting) attivo
- Disporre di almeno un [dominio](/links/web/domains) associato all'hosting

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

**Fai clic sui titoli qui sotto per visualizzare le spiegazioni.**

/// details | Abilitare il firewall applicativo sull'intero hosting web nella configurazione PHP

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nel riquadro **Configurazione**, troverai l'indicazione **Versione PHP**.
>>
>> ![Versione PHP Globale](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Fai clic sul pulsante `...`{.action} a destra dell'indicazione **Versione PHP**, quindi su `Modifica la configurazione`{.action}.
>>
> **Passaggio 3**
>>
>> Nella finestra che si apre, seleziona l'elemento `Modifica la configurazione attuale`{.action} e fai clic sul pulsante `Continua`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> Nella nuova finestra, assicurati che l'opzione **Firewall a livello applicativo** sia impostata su `Attivato`{.action}. Fai quindi clic sul pulsante `Conferma`{.action}.

///

/// details | Abilitare il firewall applicativo solo su un dominio o sottodominio specifico

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
>> Fai quindi clic sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Modifica il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella finestra di configurazione, seleziona la casella `Attiva il firewall`{.action}. Puoi inoltre includere il sottodominio `www` in questa configurazione selezionando la casella corrispondente in alto (se presente sullo stesso sito web).
>>
>> ![Modifica un dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Fai clic su `Continua`{.action}, quindi su `Conferma`{.action} per salvare le modifiche ai parametri.
>>
>> Una volta attivato il firewall per il tuo dominio o sottodominio, l'indicazione **Attivato** apparirà nella colonna **Firewall**.
>>
>> Se l'indicazione **Attivato** non dovesse apparire entro pochi minuti sulla riga corrispondente al dominio o sottodominio desiderato, ricarica la pagina.

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
