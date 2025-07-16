---
title: "Cosa fare se viene visualizzata la pagina 'Your IP has been banned'?"
excerpt: "Scopri come sbloccare il tuo indirizzo IP se il tuo sito Web mostra una pagina 'Your IP has been banned'"
updated: 2025-07-11
---

## Obiettivo

L'infrastruttura condivisa su cui si trovano gli hosting Web OVHcloud dispone di diversi sistemi di sicurezza.
Se sul sito viene visualizzata la pagina "Your IP has been banned", significa che l'indirizzo IP da cui si sta tentando di accedere al sito Web è stato temporaneamente bloccato dai nostri sistemi di sicurezza.

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

**Questa guida ti mostra come sbloccare l’indirizzo IP se sul tuo sito Web appare una pagina "Your IP has been banned".**

## Prerequisiti

- Disporre di una [soluzione di hosting Web](/links/web/hosting) OVHcloud.
- Disporre delle [credenziali di accesso](/pages/web_cloud/web_hosting/ftp_connection) allo spazio di storage FTP dell'hosting.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

## Procedura

La pagina "Your IP has been banned" può essere visualizzata per diversi motivi (elenco non esaustivo):

- Un numero molto elevato di richieste, simili o meno, vengono effettuate in un tempo estremamente breve a partire dallo stesso indirizzo IP.
- Le richieste effettuate dall'indirizzo IP in questione sono sospette.

### 1 - Recupera le informazioni presenti nella pagina "Your IP has been banned"

Per prima cosa, recupera queste tre informazioni che appaiono nella pagina "Your IP has been banned":

- `IP address` (ad esempio: 203.0.113.0).
- `Date` (ad esempio: 2025-07-01T16:30:45:150Z).
- `Request ID` (ad esempio: AbCdEf-your-request-ID-GhIjKlM).

### 2 - Contatta il supporto

Una volta raccolti i dati, crea un [ticket di assistenza](https://help.ovhcloud.com/csm?id=csm_get_help) nel centro assistenza OVHcloud, specificando:

- Il messaggio incontrato sulla pagina ("Your IP has been banned").
- I tre elementi recuperati precedentemente (`IP address`, `Date` e `Request ID`).
- l’URL a partire dal quale viene visualizzata la pagina (ad esempio: `https://www.domain.tld/index.php`).
- Il browser Internet utilizzato.

Il supporto ti contatterà nel più breve tempo possibile per indicarti l'origine del blocco.

## Per saperne di più

[Casi d'uso - Consigli in seguito alla pirateria del tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).