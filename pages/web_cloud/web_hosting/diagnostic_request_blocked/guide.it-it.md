---
title: "Cosa fare se viene visualizzata la pagina 'Your request has been blocked'?"
excerpt: "Questa guida ti mostra la procedura da seguire se sul tuo sito Web appare la pagina 'Your request has been blocked'"
updated: 2025-07-16
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

L'infrastruttura condivisa su cui si trovano gli hosting Web OVHcloud dispone di diversi sistemi di sicurezza.
Se sul tuo sito Web è visualizzata una pagina "Your request has been blocked", significa che una delle richieste che stai tentando di eseguire sul tuo sito Web è stata bloccata dai nostri sistemi di sicurezza.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Questa guida ti mostra la procedura da seguire se sul tuo sito Web appare la pagina "Your request has been blocked".**

## Prerequisiti

- Disporre di una [soluzione di hosting Web](/links/web/hosting) OVHcloud.
- Disporre delle [credenziali di accesso](/pages/web_cloud/web_hosting/ftp_connection) allo spazio di storage FTP dell'hosting.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

La pagina "Your request has been blocked" può essere visualizzata per diversi motivi (elenco non esaustivo):

- La richiesta viene effettuata da un browser Internet (Firefox, Chrome, Safari, Edge, ecc.) non aggiornato.
- Un numero molto elevato di richieste, simili o meno, vengono effettuate in un tempo estremamente breve.
- La richiesta tenta di eseguire azioni non autorizzate sull’infrastruttura condivisa su cui si trova il tuo hosting Web.

### 1 - Controlla che il tuo browser sia aggiornato

Accedi alle impostazioni del browser e controlla se è disponibile un aggiornamento.

/// details | Per ulteriori informazioni sull'aggiornamento del browser, fare clic qui

Di seguito vengono descritte le procedure per l'aggiornamento dei principali browser Internet (documentazione fornita dai rispettivi produttori):

- [Firefox](https://support.mozilla.org/it/kb/aggiornamento-firefox).
- [Chrome](https://support.google.com/chrome/answer/95414?hl=it&co=GENIE.Platform%3DDesktop&oco=0).
- [Safari](https://support.apple.com/it-it/102665).
- [Edge](https://support.microsoft.com/it-it/topic/impostazioni-di-aggiornamento-di-microsoft-edge-af8aaca2-1b69-4870-94fe-18822dbb7ef1).

Se il browser utilizzato non è presente nell'elenco, consultare la documentazione disponibile online o contattare il supporto dell'editore.

///

Una volta che il browser è aggiornato, ritentare l'accesso al sito Web. Se la situazione persiste, prosegui nella lettura di questa guida.

### 2 - Recupera le informazioni presenti nella pagina "Your request has been blocked" e contatta il supporto

Il sistema di sicurezza che blocca le tue richieste si trova a monte del tuo hosting Web. Di conseguenza, non sarà possibile accedere ai log di questo sistema di sicurezza dallo Spazio Cliente OVHcloud.

#### 2.1 - Recupera le informazioni presenti nella pagina "Your request has been blocked"

Per prima cosa, recupera queste tre informazioni che appaiono nella pagina "Your request has been blocked":

- `IP address` (ad esempio: 203.0.113.0).
- `Date` (ad esempio: 2025-07-01T16:30:45:150Z).
- `Request ID` (ad esempio: AbCdEf-your-request-ID-GhIjKlM).

#### 2.2 - Contatta il supporto

Una volta raccolti i dati, crea un [ticket di assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) nel centro assistenza OVHcloud, specificando:

- Il messaggio incontrato sulla pagina ("Your request has been blocked").
- I tre elementi recuperati precedentemente (`IP address`, `Date` e `Request ID`).
- l’URL a partire dal quale viene visualizzata la pagina (ad esempio: `https://www.domain.tld/index.php`).
- Il browser Internet utilizzato.

Il supporto ti contatterà nel più breve tempo possibile per indicarti l'origine del blocco.

## Per saperne di più

[Casi d'uso - Consigli in seguito alla pirateria del tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).